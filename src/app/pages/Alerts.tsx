// ============================================================================
// ALERTS - Monitor and manage system alerts and notifications
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { AlertCircle, Bell, CheckCircle, XCircle, Wind, Weight, X } from 'lucide-react';
import { subscribeAlerts, subscribeReports, subscribeSensorData, subscribeBins } from '../../firebase';

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
  const [sensorData, setSensorData] = useState<any[]>([]);
  const [binsData, setBinsData] = useState<any[]>([]);

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
    if (report.severity) return String(report.severity);
    const issueType = String(report.issueType ?? report.type ?? '').toLowerCase();
    const desc = String(report.description ?? report.message ?? report.summary ?? '').toLowerCase();

    // If it's an overflow report but the reporter is simply requesting collection,
    // treat it as normal/info instead of critical.
    if (issueType.includes('overflow') || issueType.includes('overflowing')) {
      if (desc.includes('collect') || desc.includes('collection') || desc.includes('need to be collected') || desc.includes('need tobe collected')) {
        return 'info';
      }
      return 'critical';
    }

    if (issueType.includes('gas') || issueType.includes('rot') || issueType.includes('leak')) return 'warning';
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

  const markAsRead = (id: number) => {
    setAlertList(prev =>
      prev.map(alert => alert.id === id ? { ...alert, read: true } : alert)
    );
  };

  const dismissAlert = (id: number) => {
    setAlertList(prev => prev.filter(alert => alert.id !== id));
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
    const unsubSensors = subscribeSensorData((items) => setSensorData(items || []), (err) => console.error('sensors err', err));
    const unsubBins = subscribeBins((items) => setBinsData(items || []));

    return () => {
      try { unsubAlerts(); } catch (e) {}
      try { unsubReports(); } catch (e) {}
      try { unsubSensors(); } catch (e) {}
      try { unsubBins(); } catch (e) {}
    };
  }, []);

  useEffect(() => {
    const merged: any[] = [];

    for (const it of sourceAlerts) {
      merged.push({
        id: it.id ?? `alert-${Math.random().toString(36).slice(2,9)}`,
        bin: it.bin ?? it.node ?? it.location ?? 'Unknown',
        message: it.message ?? it.text ?? it.title ?? 'Alert',
        time: it.time ?? it.timestamp ?? it.createdAt ?? new Date().toISOString(),
        severity: String(it.severity ?? it.level ?? 'info').toLowerCase(),
        type: it.type ?? 'alert',
        read: Boolean(it.read ?? false),
        source: 'alerts',
      });
    }

    for (const it of sourceReports) {
      const issueType = it.issueType ?? it.type ?? it.title ?? '';
      const description = it.description ?? it.message ?? it.summary ?? '';
      const location = it.location ?? it.place ?? '';
      const reporter = it.reporter ?? it.reportedBy ?? '';
      const severity = String(it.severity ?? determineReportSeverity(it)).toLowerCase();
      const message = description || (issueType ? `${issueType}${location ? ` at ${location}` : ''}` : JSON.stringify(it));

      merged.push({
        id: it.id ?? `report-${Math.random().toString(36).slice(2,9)}`,
        bin: (it.bin ?? it.node ?? location) || 'Report',
        message: `${message}${reporter ? ` — reported by ${reporter}` : ''}`,
        time: it.time ?? it.timestamp ?? it.createdAt ?? new Date().toISOString(),
        severity,
        type: it.type ?? 'report',
        read: Boolean(it.read ?? false),
        source: 'reports',
      });
    }

    const FULL_KG = 50;
    const NEAR_FULL_KG = 35;
    for (const s of sensorData) {
      const node = String(s.node ?? s.id ?? '').trim();
      const weight = Number(s.weight ?? s.weight_kg ?? s.wasteWeight ?? 0);
      const gas_level = String(s.gas_level ?? s.gasLevel ?? 'NORMAL');
      const time = s.time ?? s.timestamp ?? s.updatedAt ?? new Date().toISOString();
      const capacity = weight ? Math.min(100, Math.round((weight / FULL_KG) * 100)) : 0;
      if (capacity >= 80) {
        merged.push({
          id: `sensor-${s.id}-full`,
          bin: node || `Sensor ${s.id}`,
          message: `Capacity ${capacity}% — requires collection`,
          time,
          severity: 'critical',
          type: 'sensor_full',
          read: false,
          source: 'sensors',
        });
      } else if (capacity >= 60) {
        merged.push({
          id: `sensor-${s.id}-near`,
          bin: node || `Sensor ${s.id}`,
          message: `Capacity ${capacity}% — near full`,
          time,
          severity: 'warning',
          type: 'sensor_near_full',
          read: false,
          source: 'sensors',
        });
      }
      if (gas_level && gas_level.toUpperCase() !== 'NORMAL') {
        merged.push({
          id: `sensor-${s.id}-gas`,
          bin: node || `Sensor ${s.id}`,
          message: `Gas level: ${gas_level}`,
          time,
          severity: 'warning',
          type: 'sensor_gas',
          read: false,
          source: 'sensors',
        });
      }
    }

    for (const b of binsData) {
      const status = String(b.status ?? b.binStatus ?? b.level ?? '').toLowerCase();
      const binLabel = getBinIdentifier(b.id ?? b.bin ?? b.node ?? b.location, 'Unknown');
      const location = b.location ?? b.address ?? b.place ?? '';
      const capacity = getCapacityPercent(b);
      const time = b.updatedAt ?? b.timestamp ?? b.time ?? new Date().toISOString();

      if ((status.includes('critical') || status.includes('full') || capacity >= 80) && !merged.some((m) => m.id === `bin-${b.id ?? binLabel}-critical`)) {
        merged.push({
          id: `bin-${b.id ?? binLabel}-critical`,
          bin: binLabel,
          message: `System status: ${status || 'full'}${location ? ` — ${location}` : ''}`,
          time,
          severity: 'critical',
          type: 'system_status',
          read: false,
          source: 'bins',
        });
      } else if ((status.includes('warning') || status.includes('near') || status.includes('overflow') || capacity >= 60) && !merged.some((m) => m.id === `bin-${b.id ?? binLabel}-warning`)) {
        merged.push({
          id: `bin-${b.id ?? binLabel}-warning`,
          bin: binLabel,
          message: `System status: ${status || 'near full'}${location ? ` — ${location}` : ''}`,
          time,
          severity: 'warning',
          type: 'system_status',
          read: false,
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

    setAlertList(merged);
  }, [sourceAlerts, sourceReports, sensorData, binsData]);

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
        </div>
      </div>

      

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2">
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
        
      </div>

      {/* Alerts list */}
      <div className="space-y-3">
        {filteredAlerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className={`${getAlertColor(alert.severity)} ${!alert.read ? 'border-l-4' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${alert.read ? 'bg-gray-200' : 'bg-gray-50'}`}>
                    {getIcon(alert.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-bold text-gray-900">{alert.bin}</p>
                        <p className="text-sm mt-1 text-gray-900 font-medium">{alert.message}</p>
                      </div>
                      {getSeverityBadge(alert.severity)}
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-gray-900 font-medium">{alert.time}</p>
                      <div className="flex gap-2">
                        {!alert.read && (
                          <Button
                            size="sm"
                            onClick={() => markAsRead(alert.id)}
                            className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Mark as read
                          </Button>
                        )}
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
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredAlerts.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-gray-700" />
            <p className="text-gray-900 font-semibold">No alerts to display</p>
          </CardContent>
        </Card>
      )}

      <ConfirmationModal 
        isOpen={isConfirmOpen} 
        onClose={() => setIsConfirmOpen(false)} 
        onConfirm={() => {
          dismissAlert(alertToConfirm?.id);
          setIsConfirmOpen(false);
          setAlertToConfirm(null);
        }}
        alert={alertToConfirm}
      />
    </div>
  );
}