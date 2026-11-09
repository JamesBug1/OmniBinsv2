// ============================================================================
// ALERTS - Monitor and manage system alerts and notifications
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { push, ref, runTransaction, set } from 'firebase/database';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { AlertCircle, Archive, Bell, CheckCircle, Image as ImageIcon, RotateCcw, Trash2, XCircle, Wind, Weight, X } from 'lucide-react';
import {
  archiveAlert,
  deleteArchivedAlerts,
  deleteAlertRecord,
  restoreArchivedAlerts,
  subscribeAlertArchive,
  subscribeAlertDismissedStates,
  subscribeAlertReadStates,
  subscribeAlerts,
  subscribeBins,
  subscribeReports,
  subscribeSensorData,
  db,
} from '../../firebase';
import { isSensorLinkedToRegisteredBin } from '../../lib/binSensorLink';

const SUPABASE_URL = 'https://btlzsocklhrytsmmlphi.supabase.co';
const SUPABASE_REPORT_BUCKET = 'report-images';
const FULL_BIN_WEIGHT_KG = 50;
const HIGH_GAS_WINDOW_MS = 60 * 60 * 1000;
const HIGH_MQ135_PPM = 1500;
const HIGH_MQ4_PPM = 1200;

function getSafeDatabaseKey(value: string): string {
  return value.replace(/[.#$/\[\]]/g, '_');
}

function getSensorTimestamp(sensor: any): number {
  const value = sensor.timestamp ?? sensor.time ?? sensor.updatedAt;
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value > 0 && value < 1e12 ? value * 1000 : value;
  }
  if (typeof value !== 'string' || !value.trim()) return 0;
  const numeric = Number(value);
  if (Number.isFinite(numeric)) return numeric > 0 && numeric < 1e12 ? numeric * 1000 : numeric;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

// ============================================================================
// DATA & CONSTANTS
// ============================================================================
// Sample data removed - connect to your database for live alerts
const alerts: any[] = [];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function Alerts() {
  const [alertList, setAlertList] = useState(alerts);
  const [filter, setFilter] = useState<string>('all');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [alertToConfirm, setAlertToConfirm] = useState<any>(null);
  const [sourceAlerts, setSourceAlerts] = useState<any[]>([]);
  const [sourceReports, setSourceReports] = useState<any[]>([]);
  const [archivedAlerts, setArchivedAlerts] = useState<any[]>([]);
  const [selectedArchiveIds, setSelectedArchiveIds] = useState<string[]>([]);
  const [readStates, setReadStates] = useState<Record<string, boolean>>({});
  const [dismissedStates, setDismissedStates] = useState<Record<string, boolean>>({});
  const [showArchive, setShowArchive] = useState(false);
  const [actionError, setActionError] = useState('');
  const [sensorData, setSensorData] = useState<any[]>([]);
  const [binsData, setBinsData] = useState<any[]>([]);
  const [previewImage, setPreviewImage] = useState<{ url: string; alt: string } | null>(null);
  const [previewImageFailed, setPreviewImageFailed] = useState(false);
  const expiringArchiveIds = useRef(new Set<string>());
  const fullAlertWritesInProgress = useRef(new Set<string>());
  const gasAlertWritesInProgress = useRef(new Set<string>());

  const getReportImageValue = (report: any) => {
    const imageValue = report.imageUrl ?? report.imageURL ?? report.photoUrl ?? report.photoURL ??
      report.image_url ?? report.photo_url ?? report.imagePath ?? report.image_path ??
      report.storagePath ?? report.storage_path ?? report.image;
    return typeof imageValue === 'string'
      ? imageValue
      : imageValue?.path ?? imageValue?.fullPath ?? imageValue?.url;
  };

  const getReportImageUrl = (report: any) => {
    const imagePath = getReportImageValue(report);

    if (typeof imagePath !== 'string' || !imagePath.trim()) return undefined;
    const value = imagePath.trim();
    if (/^(https?:|data:|blob:)/i.test(value)) return value;

    const objectPath = value.replace(/^\/+/, '').replace(new RegExp(`^${SUPABASE_REPORT_BUCKET}/`), '');
    const encodedPath = objectPath.split('/').map(encodeURIComponent).join('/');
    return `${SUPABASE_URL}/storage/v1/object/public/${SUPABASE_REPORT_BUCKET}/${encodedPath}`;
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <Badge className="bg-red-600 text-white">Critical</Badge>;
      case 'error':
        return <Badge className="bg-red-500 text-white">Error</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-500 text-white">Warning</Badge>;
      case 'success':
        return <Badge className="bg-green-500 text-white">Success</Badge>;
      default:
        return <Badge className="bg-blue-500 text-white">Info</Badge>;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'overweight':
        return <Weight className="h-5 w-5" />;
      case 'gas':
      case 'rot':
        return <Wind className="h-5 w-5" />;
      case 'sensor':
        return <XCircle className="h-5 w-5" />;
      case 'collection':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <AlertCircle className="h-5 w-5" />;
    }
  };

  const mapIssueTypeToSeverity = (issueType?: string) => {
    if (!issueType) return 'info';
    const t = issueType.toLowerCase();
    if (t.includes('overflow') || t.includes('overflowing') || t.includes('full') || t.includes('overflowing bin')) return 'critical';
    if (t.includes('gas') || t.includes('rot') || t.includes('leak')) return 'warning';
    return 'info';
  };

  const determineReportSeverity = (report: any) => {
    if (!report) return 'info';
    const issue = String(report.issueType ?? report.type ?? report.title ?? report.description ?? report.message ?? '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ' ')
      .trim();

    if (
      /\b(damage|damaged) bin\b/.test(issue) ||
      /\b(?:broken|brokent) lid\b/.test(issue) ||
      /\bsensor malf(?:unction|unctio|untio)/.test(issue) ||
      /\boverflow(?:ing)? bin\b/.test(issue) ||
      /\b(bin )?overflow(?:ing)?\b/.test(issue)
    ) return 'critical';

    if (
      /\bbattery (?:issue|problem|low|failure)\b/.test(issue) ||
      /\bneutral(?:iz|is)er? (?:needs? )?(?:a )?refill\b/.test(issue) ||
      /\bcollection delay(?:ed)?\b/.test(issue) ||
      /\bdelayed collection\b/.test(issue)
    ) return 'warning';

    if (report.severity) return String(report.severity);
    if (/\b(gas|rot|leak)\b/.test(issue)) return 'warning';
    return 'info';
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'border-red-500 bg-red-50';
      case 'error':
        return 'border-red-400 bg-red-50';
      case 'warning':
        return 'border-yellow-400 bg-yellow-50';
      case 'success':
        return 'border-green-400 bg-green-50';
      default:
        return 'border-blue-400 bg-blue-50';
    }
  };

  const getSourceRecord = (alert: any) => {
    const record = alert.source === 'alerts'
      ? sourceAlerts.find(item => item.id === alert.id)
      : alert.source === 'reports'
        ? sourceReports.find(item => item.id === alert.id)
        : undefined;
    return record
      ? Object.fromEntries(Object.entries(record).filter(([key]) => key !== 'id'))
      : undefined;
  };

  const getActionErrorMessage = (error: unknown) => {
    if (error instanceof Error && error.message.includes('PERMISSION_DENIED')) {
      return 'Firebase denied this change. Deploy the updated database.rules.json rules and make sure you are signed in.';
    }
    if (error instanceof Error && /Supabase|Admin access|Authorization|token/i.test(error.message)) {
      return error.message;
    }
    return 'Could not update this alert. Check your connection and try again.';
  };

  const markAsRead = async (alert: any) => {
    try {
      setActionError('');
      await deleteAlertRecord(alert);
      setAlertList(prev => prev.filter(item => item.stateKey !== alert.stateKey));
    } catch (error) {
      console.error('Failed to mark alert as read:', error);
      setActionError(getActionErrorMessage(error));
    }
  };

  const dismissAlert = async (alert: any) => {
    if (!alert) return;
    try {
      setActionError('');
      await archiveAlert(alert, getSourceRecord(alert));
      setAlertList(prev => prev.filter(item => item.stateKey !== alert.stateKey));
    } catch (error) {
      console.error('Failed to dismiss alert:', error);
      setActionError(getActionErrorMessage(error));
    }
  };

  const restoreSelectedArchiveAlerts = async () => {
    const selectedAlerts = archivedAlerts.filter(alert => selectedArchiveIds.includes(alert.archiveId));
    if (selectedAlerts.length === 0) return;

    try {
      setActionError('');
      await restoreArchivedAlerts(selectedAlerts);
      setSelectedArchiveIds([]);
    } catch (error) {
      console.error('Failed to restore archived alerts:', error);
      setActionError(getActionErrorMessage(error));
    }
  };

  const deleteSelectedArchiveAlerts = async () => {
    const selectedAlerts = archivedAlerts.filter(alert => selectedArchiveIds.includes(alert.archiveId));
    if (selectedAlerts.length === 0) return;

    setActionError('');
    try {
      await deleteArchivedAlerts(selectedAlerts.map(alert => alert.archiveId));
      setSelectedArchiveIds([]);
    } catch (error) {
      console.error('Failed to delete archived alerts:', error);
      setActionError(getActionErrorMessage(error));
    }
  };

  const ConfirmationModal = ({ isOpen, onClose, onConfirm, alert }: { isOpen: boolean; onClose: () => void; onConfirm: () => void; alert?: any }) => (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"><X className="h-6 w-6" /></button>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dismiss Alert</h2>
              <p className="text-gray-700 mb-2">Are you sure you want to dismiss this alert?</p>
              <div className="bg-gray-50 p-3 rounded-lg mb-6">
                <p className="font-semibold text-gray-900 text-base">{alert?.bin}</p>
                <p className="text-base text-gray-700 mt-1">{alert?.message}</p>
              </div>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1 cursor-pointer">Cancel</Button>
                <Button type="button" onClick={onConfirm} className="flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer">Dismiss</Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  const filteredAlerts = alertList.filter(alert => {
    if (filter === 'unread') return !alert.read;
    if (filter === 'all') return true;
    return alert.severity === filter;
  });
  const visibleAlerts = showArchive ? archivedAlerts : filteredAlerts;

  const unreadCount = alertList.filter(a => !a.read).length;

  const getBinIdentifier = (value: any, fallback = 'Unknown') => {
    const candidate = value ?? value?.bin ?? value?.node ?? value?.location ?? value?.id;
    if (typeof candidate === 'string' && candidate.trim()) return candidate.trim();
    if (typeof candidate === 'number') return String(candidate);
    return fallback;
  };

  const getCapacityPercent = (item: any) => {
    const direct = Number(item?.capacity ?? item?.fillLevel ?? item?.current_fill ?? item?.weightPercent ?? item?.fill_percentage ?? 0);
    if (Number.isFinite(direct) && direct > 0) return Math.min(100, Math.max(0, direct));
    const weight = Number(item?.weight ?? item?.weight_kg ?? item?.wasteWeight ?? item?.waste ?? 0);
    const fullWeight = Number(item?.fullWeight ?? item?.capacityKg ?? 50);
    if (!Number.isFinite(weight) || !Number.isFinite(fullWeight) || fullWeight <= 0) return 0;
    return Math.min(100, Math.round((weight / fullWeight) * 100));
  };

  useEffect(() => {
    const unsubAlerts = subscribeAlerts((items) => setSourceAlerts(items || []), (err) => console.error('alerts err', err));
    const unsubReports = subscribeReports((items) => setSourceReports(items || []), (err) => console.error('reports err', err));
    const unsubArchive = subscribeAlertArchive((items) => setArchivedAlerts(items || []), (err) => console.error('alert archive err', err));
    const unsubReadStates = subscribeAlertReadStates((states) => setReadStates(states || {}), (err) => console.error('alert read states err', err));
    const unsubDismissedStates = subscribeAlertDismissedStates((states) => setDismissedStates(states || {}), (err) => console.error('alert dismissed states err', err));
    const unsubSensors = subscribeSensorData((items) => setSensorData(items || []));
    const unsubBins = subscribeBins((items) => setBinsData(items || []));

    return () => {
      try { unsubAlerts(); } catch (e) {}
      try { unsubReports(); } catch (e) {}
      try { unsubArchive(); } catch (e) {}
      try { unsubReadStates(); } catch (e) {}
      try { unsubDismissedStates(); } catch (e) {}
      try { unsubSensors(); } catch (e) {}
      try { unsubBins(); } catch (e) {}
    };
  }, []);

  useEffect(() => {
    const expiredAlerts = archivedAlerts.filter(alert => {
      if (!alert.archiveId || expiringArchiveIds.current.has(alert.archiveId)) return false;
      const archivedAt = typeof alert.archivedAt === 'number'
        ? alert.archivedAt
        : Date.parse(String(alert.archivedAt ?? ''));
      return Number.isFinite(archivedAt) && Date.now() - archivedAt >= 30 * 24 * 60 * 60 * 1000;
    });
    if (expiredAlerts.length === 0) return;

    expiredAlerts.forEach(alert => expiringArchiveIds.current.add(alert.archiveId));
    void (async () => {
      try {
        await deleteArchivedAlerts(expiredAlerts.map(alert => alert.archiveId));
      } catch (error) {
        console.error('Failed to remove expired archived alerts:', error);
        expiredAlerts.forEach(alert => expiringArchiveIds.current.delete(alert.archiveId));
      }
    })();
  }, [archivedAlerts]);

  useEffect(() => {
    const existingIds = new Set(archivedAlerts.map(alert => alert.archiveId));
    setSelectedArchiveIds(current => current.filter(archiveId => existingIds.has(archiveId)));
  }, [archivedAlerts]);

  useEffect(() => {
    const merged: any[] = [];
    const archivedKeys = new Set(archivedAlerts.map((item) => item.alertKey));
    const dismissedKeys = new Set(Object.keys(dismissedStates).filter((key) => dismissedStates[key]));

    for (const it of sourceAlerts) {
      const id = it.id ?? `alert-${Math.random().toString(36).slice(2,9)}`;
      const stateKey = `alerts-${id}`;
      merged.push({
        id,
        stateKey,
        bin: it.bin ?? it.node ?? it.location ?? 'Unknown',
        message: it.message ?? it.text ?? it.title ?? 'Alert',
        time: it.time ?? it.timestamp ?? it.createdAt ?? new Date().toISOString(),
        severity: String(it.severity ?? it.level ?? 'info').toLowerCase(),
        type: it.type ?? 'alert',
        read: Boolean(it.read ?? readStates[stateKey] ?? false),
        source: 'alerts',
      });
    }

    for (const it of sourceReports) {
      const id = it.id ?? `report-${Math.random().toString(36).slice(2,9)}`;
      const stateKey = `reports-${id}`;
      const issueType = it.issueType ?? it.type ?? it.title ?? '';
      const description = it.description ?? it.message ?? it.summary ?? '';
      const location = it.location ?? it.place ?? '';
      const reporter = it.reporter ?? it.reportedBy ?? '';
      const severity = String(it.severity ?? determineReportSeverity(it)).toLowerCase();
      const message = description || (issueType ? `${issueType}${location ? ` at ${location}` : ''}` : JSON.stringify(it));
      const imageUrl = getReportImageUrl(it);

      merged.push({
        id,
        stateKey,
        bin: (it.bin ?? it.node ?? location) || 'Report',
        message: `${message}${reporter ? ` — reported by ${reporter}` : ''}`,
        time: it.time ?? it.timestamp ?? it.createdAt ?? new Date().toISOString(),
        severity,
        type: it.type ?? 'report',
        read: Boolean(it.read ?? readStates[stateKey] ?? false),
        source: 'reports',
        imageUrl,
      });
    }

    const latestSensorByBin = new Map<string, any>();
    for (const sensor of sensorData) {
      if (!isSensorLinkedToRegisteredBin(sensor, binsData)) continue;
      const node = String(sensor.node ?? sensor.binId ?? sensor.bin_id ?? sensor.location ?? sensor.id ?? '').trim();
      if (!node) continue;
      const previous = latestSensorByBin.get(node);
      if (!previous || getSensorTimestamp(sensor) >= getSensorTimestamp(previous)) {
        latestSensorByBin.set(node, sensor);
      }
    }

    for (const s of latestSensorByBin.values()) {
      const node = String(s.node ?? s.binId ?? s.bin_id ?? s.location ?? s.id ?? '').trim();
      const sensorAlertKey = (suffix: string) => `sensors-bin-${node}-${suffix}`;
      const weight = Number(s.weight ?? s.weight_kg ?? s.wasteWeight ?? s.waste ?? 0);
      const time = s.time ?? s.timestamp ?? s.updatedAt ?? new Date().toISOString();
      const distanceState = String(s.distance ?? s.distance_status ?? s.fill_state ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z]/g, '');
      const reportedCapacity = Number(s.capacity ?? s.fillLevel ?? s.current_fill ?? s.fill_percentage);
      const capacity = Number.isFinite(reportedCapacity) && reportedCapacity >= 0
        ? Math.min(100, reportedCapacity)
        : Math.min(100, Math.round((weight / FULL_BIN_WEIGHT_KG) * 100));
      const isNearFull = distanceState === 'nearfull' || capacity >= 60;
      if (isNearFull && distanceState !== 'full') {
        merged.push({
          id: `sensor-${node}-near`,
          stateKey: sensorAlertKey('near'),
          bin: node || `Sensor ${s.id}`,
          message: distanceState === 'nearfull'
            ? `Fill state: Near Full${capacity > 0 ? ` (${capacity}%)` : ''}`
            : `Capacity ${capacity}% — near full`,
          time,
          severity: 'warning',
          type: 'sensor_near_full',
          read: Boolean(readStates[sensorAlertKey('near')]),
          source: 'sensors',
        });
      }
    }

    for (const b of binsData) {
      const status = String(b.status ?? b.binStatus ?? b.level ?? '').toLowerCase();
      const binLabel = getBinIdentifier(b.id ?? b.bin ?? b.node ?? b.location, 'Unknown');
      const location = b.location ?? b.address ?? b.place ?? '';
      const capacity = getCapacityPercent(b);
      const fillState = String(b.distance ?? b.distance_status ?? b.fill_state ?? b.fillStatus ?? '')
        .trim()
        .toLowerCase()
        .replace(/[^a-z]/g, '');
      const time = b.updatedAt ?? b.timestamp ?? b.time ?? new Date().toISOString();
      const warningStateKey = `bins-bin-${b.id ?? binLabel}-warning`;

      if ((status.includes('warning') || status.includes('near') || status.includes('overflow') || capacity >= 60) && fillState !== 'full' && !merged.some((m) => m.id === `bin-${b.id ?? binLabel}-warning`)) {
        merged.push({
          id: `bin-${b.id ?? binLabel}-warning`,
          stateKey: warningStateKey,
          bin: binLabel,
          message: `System status: ${status || 'near full'}${location ? ` — ${location}` : ''}`,
          time,
          severity: 'warning',
          type: 'system_status',
          read: Boolean(readStates[warningStateKey]),
          source: 'bins',
        });
      }
    }

    const order: Record<string, number> = { critical: 3, error: 2, warning: 1, info: 0 };
    merged.sort((a, b) => {
      const oa = order[a.severity] ?? 0;
      const ob = order[b.severity] ?? 0;
      if (oa !== ob) return ob - oa;
      const ta = Date.parse(String(a.time));
      const tb = Date.parse(String(b.time));
      if (!Number.isFinite(ta) || !Number.isFinite(tb)) return String(b.time).localeCompare(String(a.time));
      return tb - ta;
    });

    setAlertList(merged.filter((item) => !item.read && !archivedKeys.has(item.stateKey) && !dismissedKeys.has(item.stateKey)));
  }, [sourceAlerts, sourceReports, sensorData, binsData, readStates, archivedAlerts, dismissedStates]);

  useEffect(() => {
    if (!binsData.length || !sensorData.length) return;

    let cancelled = false;
    const now = Date.now();
    const cutoff = now - HIGH_GAS_WINDOW_MS;
    const readingsByBin = new Map<string, any[]>();

    for (const sensor of sensorData) {
      if (!isSensorLinkedToRegisteredBin(sensor, binsData)) continue;
      const bin = binsData.find((candidate) => isSensorLinkedToRegisteredBin(sensor, [candidate]));
      const node = String(sensor.node ?? bin?.id ?? sensor.binId ?? sensor.bin_id ?? sensor.location ?? sensor.id ?? '').trim();
      const timestamp = getSensorTimestamp(sensor);
      if (!node || !timestamp || timestamp > now) continue;
      const records = readingsByBin.get(node) ?? [];
      records.push({ sensor, timestamp });
      readingsByBin.set(node, records);
    }

    const persistAlert = async (alertId: string, alert: Record<string, unknown>) => {
      await set(ref(db, `alerts/${alertId}`), {
        ...alert,
        id: alertId,
        createdAt: new Date().toISOString(),
        read: false,
        systemGenerated: true,
      });
    };

    void (async () => {
      for (const [node, records] of readingsByBin) {
        if (cancelled) return;
        const safeNode = getSafeDatabaseKey(node);
        const sortedRecords = records.sort((a, b) => a.timestamp - b.timestamp);
        const latest = sortedRecords[sortedRecords.length - 1].sensor;
        const latestWeight = Number(latest.weight ?? latest.weight_kg ?? latest.wasteWeight ?? latest.waste ?? 0);
        const rawCapacity = Number(latest.capacity ?? latest.fillLevel ?? latest.current_fill ?? latest.fill_percentage);
        const capacity = Number.isFinite(rawCapacity) && rawCapacity >= 0
          ? Math.min(100, rawCapacity)
          : Math.min(100, Math.round((latestWeight / FULL_BIN_WEIGHT_KG) * 100));
        const fillState = String(latest.distance ?? latest.distance_status ?? latest.fill_state ?? '')
          .trim()
          .toLowerCase()
          .replace(/[^a-z]/g, '');
        const isFull = fillState === 'full' && (capacity >= 100 || latestWeight >= FULL_BIN_WEIGHT_KG);
        const fullStateRef = ref(db, `systemAlertStates/full_${safeNode}`);

        if (isFull) {
          const alertId = push(ref(db, 'alerts')).key;
          if (!alertId || fullAlertWritesInProgress.current.has(node)) continue;
          fullAlertWritesInProgress.current.add(node);
          try {
            const result = await runTransaction(fullStateRef, (current) => {
              if (current?.active) return;
              return { active: true, alertId, updatedAt: new Date().toISOString() };
            });
            if (result.committed && result.snapshot.val()?.alertId === alertId && !cancelled) {
              await persistAlert(alertId, {
                type: 'sensor_full',
                severity: 'critical',
                bin: node,
                message: `Capacity ${capacity}% and fill level Full — requires collection`,
                time: latest.time ?? latest.timestamp ?? latest.updatedAt ?? new Date().toISOString(),
                stateKey: `system-full-${safeNode}`,
              });
            }
          } catch (error) {
            console.error(`Failed to persist full-bin alert for ${node}:`, error);
          } finally {
            fullAlertWritesInProgress.current.delete(node);
          }
        } else {
          await runTransaction(fullStateRef, (current) => current?.active ? { ...current, active: false, updatedAt: new Date().toISOString() } : current);
        }

        const highReadings = sortedRecords.filter(({ sensor, timestamp }) => {
          if (timestamp < cutoff) return false;
          const mq135Ppm = Number(sensor.nh3 ?? sensor.mq135_ppm ?? sensor.mq_135_ppm ?? sensor.mq135 ?? sensor.mq_135 ?? 0);
          const mq4Ppm = Number(sensor.ch4 ?? sensor.mq4_ppm ?? sensor.mq_4_ppm ?? sensor.mq4 ?? sensor.mq_4 ?? 0);
          return mq135Ppm > HIGH_MQ135_PPM || mq4Ppm > HIGH_MQ4_PPM || String(sensor.gas_level ?? sensor.gasLevel ?? '').trim().toUpperCase() === 'HIGH';
        });

        if (highReadings.length < 3 || gasAlertWritesInProgress.current.has(node)) continue;
        const gasStateRef = ref(db, `systemAlertStates/high_gas_${safeNode}`);
        const alertId = push(ref(db, 'alerts')).key;
        if (!alertId) continue;
        gasAlertWritesInProgress.current.add(node);
        try {
          const result = await runTransaction(gasStateRef, (current) => {
            const lastAlertAt = Number(current?.lastAlertAt ?? 0);
            if (lastAlertAt && now - lastAlertAt < HIGH_GAS_WINDOW_MS) return;
            return { lastAlertAt: now, alertId };
          });
          if (result.committed && result.snapshot.val()?.alertId === alertId && !cancelled) {
            await persistAlert(alertId, {
              type: 'sensor_high_gas',
              severity: 'critical',
              bin: node,
              message: `High gas level detected in ${highReadings.length} readings within one hour (NH₃ > ${HIGH_MQ135_PPM} ppm or CH₄ > ${HIGH_MQ4_PPM} ppm). Immediate collection required.`,
              time: new Date(highReadings[highReadings.length - 1].timestamp).toISOString(),
              stateKey: `system-high-gas-${safeNode}-${now}`,
            });
          }
        } catch (error) {
          console.error(`Failed to persist high-gas alert for ${node}:`, error);
        } finally {
          gasAlertWritesInProgress.current.delete(node);
        }
      }
    })();

    return () => { cancelled = true; };
  }, [sensorData, binsData]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Alerts & Notifications</h2>
          <p className="text-gray-900 font-semibold">Monitor critical system alerts and events</p>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-800" />
          <span className="text-base font-semibold text-gray-900">{unreadCount} unread</span>
          <Button
            type="button"
            variant={showArchive ? 'default' : 'outline'}
            onClick={() => {
              setShowArchive(value => !value);
              setFilter('all');
            }}
            className="ml-2 cursor-pointer"
          >
            <Archive className="mr-2 h-4 w-4" />
            {showArchive ? 'Active alerts' : `Archive (${archivedAlerts.length})`}
          </Button>
        </div>
      </div>

      {/* Filter buttons */}
      {!showArchive && <div className="flex flex-wrap gap-2">
        {[
          { value: 'all', label: 'All Alerts' },
          { value: 'unread', label: 'Unread' },
          { value: 'critical', label: 'Critical' },
          { value: 'warning', label: 'Warning' },
          { value: 'info', label: 'Info' },
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={`px-4 py-2 rounded-lg text-base font-semibold transition-colors ${
              filter === option.value
                ? 'bg-green-600 text-white'
                : 'bg-gray-50 text-gray-900 border border-gray-800 hover:bg-gray-100'
            }`}
          >
            {option.label}
          </button>
        ))}
        
      </div>}

      {actionError && (
        <div role="alert" className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {actionError}
        </div>
      )}

      {showArchive && archivedAlerts.length > 0 && (
        <div className="grid gap-3 border-b border-gray-200 pb-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-800">
              <input
                type="checkbox"
                checked={selectedArchiveIds.length === archivedAlerts.length}
                onChange={(event) => setSelectedArchiveIds(
                  event.target.checked ? archivedAlerts.map(alert => alert.archiveId) : []
                )}
                className="h-4 w-4 accent-green-700"
              />
              Select all
            </label>
            <span className="text-sm text-gray-600">{selectedArchiveIds.length} selected</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              size="sm"
              disabled={selectedArchiveIds.length === 0}
              onClick={() => void restoreSelectedArchiveAlerts()}
              className="cursor-pointer bg-gray-700 text-white hover:bg-gray-800"
            >
              <RotateCcw className="mr-1 h-4 w-4" />
              Restore selected
            </Button>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              disabled={selectedArchiveIds.length === 0}
              onClick={() => void deleteSelectedArchiveAlerts()}
              className="cursor-pointer border-2 border-red-500 bg-red-600 text-black hover:bg-red-700"
            >
              <Trash2 className="mr-1 h-4 w-4" />
              Delete selected
            </Button>
          </div>
          <p className="text-xs text-gray-600 sm:col-span-2">Archived alerts are automatically deleted after 30 days</p>
        </div>
      )}

      {/* Alerts list */}
      <div className="space-y-3">
        {visibleAlerts.map((alert, index) => (
          <motion.div
            key={showArchive ? alert.archiveId : alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className={`${getAlertColor(alert.severity)} ${!alert.read ? 'border-l-4' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  {showArchive && (
                    <input
                      type="checkbox"
                      aria-label={`Select archived alert for ${alert.bin}`}
                      checked={selectedArchiveIds.includes(alert.archiveId)}
                      onChange={(event) => setSelectedArchiveIds(current => (
                        event.target.checked
                          ? [...current, alert.archiveId]
                          : current.filter(archiveId => archiveId !== alert.archiveId)
                      ))}
                      className="mt-2 h-4 w-4 shrink-0 accent-green-700"
                    />
                  )}
                  <div className={`p-2 rounded-lg ${alert.read ? 'bg-gray-200' : 'bg-gray-50'}`}>
                    {getIcon(alert.type)}
                  </div>
                  <button
                    type="button"
                    disabled={!alert.imageUrl}
                    onClick={() => {
                      if (alert.imageUrl) {
                        setPreviewImage({ url: alert.imageUrl, alt: `Reported image for ${alert.bin}` });
                        setPreviewImageFailed(false);
                      }
                    }}
                    className={`flex-1 min-w-0 text-left ${alert.imageUrl ? 'cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600' : 'cursor-default'}`}
                    aria-label={alert.imageUrl ? `View image for ${alert.bin}` : undefined}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-bold text-gray-900">{alert.bin}</p>
                        <p className="text-sm mt-1 text-gray-900 font-medium">{alert.message}</p>
                        {alert.imageUrl && (
                          <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-green-700">
                            <ImageIcon className="h-4 w-4" />
                            View report image
                          </span>
                        )}
                      </div>
                      {getSeverityBadge(alert.severity)}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-gray-900 font-medium">{alert.time}</p>
                    </div>
                  </button>
                  <div className="flex shrink-0 flex-wrap justify-end gap-2">
                    {!showArchive && !alert.read && (
                      <Button
                        size="sm"
                        onClick={() => void markAsRead(alert)}
                        className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Mark as read
                      </Button>
                    )}
                    {!showArchive && (
                      <Button
                        size="sm"
                        onClick={() => {
                          setAlertToConfirm(alert);
                          setIsConfirmOpen(true);
                        }}
                        className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                      >
                        <XCircle className="h-3 w-3 mr-1" />
                        Dismiss
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {visibleAlerts.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-gray-700" />
            <p className="text-gray-900 font-semibold">{showArchive ? 'No archived alerts' : 'No alerts to display'}</p>
          </CardContent>
        </Card>
      )}

      <ConfirmationModal 
        isOpen={isConfirmOpen} 
        onClose={() => setIsConfirmOpen(false)} 
        onConfirm={() => {
          void dismissAlert(alertToConfirm);
          setIsConfirmOpen(false);
          setAlertToConfirm(null);
        }}
        alert={alertToConfirm}
      />

      <AnimatePresence>
        {previewImage && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4" onClick={() => setPreviewImage(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              role="dialog"
              aria-modal="true"
              aria-label="Reported image"
              className="relative flex max-h-[90vh] w-full max-w-4xl items-center justify-center rounded-lg bg-white p-3 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                aria-label="Close image preview"
                className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black"
              >
                <X className="h-5 w-5" />
              </button>
              {previewImageFailed ? (
                <p className="p-12 text-center text-gray-700">This image could not be loaded. Check that the report image exists and the Supabase bucket is public.</p>
              ) : (
                <img
                  src={previewImage.url}
                  alt={previewImage.alt}
                  onError={() => setPreviewImageFailed(true)}
                  className="max-h-[calc(90vh-1.5rem)] max-w-full rounded object-contain"
                />
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}