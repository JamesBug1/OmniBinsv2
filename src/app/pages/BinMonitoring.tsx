import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ref, onValue, update } from 'firebase/database';
import { db } from '../../firebase';
import { parseNumber } from '../../lib/gasConversion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { MapPin, Weight, Wind, Users, RefreshCw, Trash2, AlertTriangle, CheckCircle } from 'lucide-react';

const FULL_KG      = 50;
const NEAR_FULL_KG = 35;

interface RawSensorRecord {
  distance:    number;
  gas_level:   string;   // "NORMAL" | "HIGH" | etc.
  mq135:       number;   // NH₃ proxy (ppm)
  mq4:         number;   // CH₄ proxy (ppm)
  neutralizer: string;   // "ON" | "OFF"
  node:        string;   // "D1"
  rssi:        number;
  timestamp?:  number;
  time?:       number | string;
  updatedAt?:  number | string;
  weight:      number;   // kg
}

interface BinRecord {
  pushKey:     string;
  distance:    number;
  gas_level:   string;
  mq135:       number;
  mq4:         number;
  neutralizer: string;
  node:        string;
  rssi:        number;
  timestamp:   number;
  weight:      number;
  // derived
  capacity:    number;   // 0–100 %
  status:      string;   // "Full" | "Near Full" | "High Gas Level" | "Normal"
}

function deriveStatus(weight: number, gas_level: string): string {
  if (weight >= FULL_KG)      return 'Full';
  if (weight >= NEAR_FULL_KG) return 'Near Full';
  if (gas_level && gas_level.toUpperCase() !== 'NORMAL') return 'High Gas Level';
  return 'Normal';
}

function deriveCapacity(weight: number): number {
  return Math.min(100, Math.round((weight / FULL_KG) * 100));
}

function parseTimestamp(value: unknown): number {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return 0;
    const numeric = Number(trimmed);
    if (Number.isFinite(numeric)) return numeric;
    const parsed = Date.parse(trimmed);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function normalizeTimestamp(timestamp: number): number {
  if (!Number.isFinite(timestamp) || timestamp <= 0) return 0;
  if (timestamp >= 1e12) return timestamp; // already milliseconds
  if (timestamp >= 1e10) return timestamp; // likely milliseconds in a smaller range
  if (timestamp >= 1e9) return timestamp * 1000; // seconds since epoch
  return 0; // low counter / device-relative value, treat as invalid for ordering
}

function formatBinTimestamp(timestamp: number): string {
  if (!timestamp) return '—';
  if (timestamp >= 1e12) return new Date(timestamp).toISOString().slice(0, 19).replace('T', ' ');
  if (timestamp >= 1e9) return new Date(timestamp * 1000).toISOString().slice(0, 19).replace('T', ' ');
  return `t=${timestamp}`;
}

function getLatestPerNode(raw: Record<string, any>): BinRecord[] {
  const map = new Map<string, BinRecord>();

  for (const [pushKey, value] of Object.entries(raw)) {
    if (!value || typeof value !== 'object') continue;

    const node = String(value.node ?? value.location ?? pushKey);
    const weight = parseNumber(value.weight ?? value.weight_kg ?? value.wasteWeight ?? value.waste ?? 0);
    const gas_level = String(value.gas_level ?? value.gasLevel ?? value.status ?? 'NORMAL');

    const rawTime = value.time ?? value.timestamp ?? value.updatedAt ?? 0;
    const parsedTime = normalizeTimestamp(parseTimestamp(rawTime));

    const record: BinRecord = {
      pushKey,
      distance:    parseNumber(value.distance ?? value.distance_cm ?? 0),
      gas_level,
      mq135:       parseNumber(value.mq135 ?? value.mq135_ppm ?? value.mq_135 ?? 0),
      mq4:         parseNumber(value.mq4 ?? value.mq4_ppm ?? value.mq_4 ?? 0),
      neutralizer: String(value.neutralizer ?? value.neutralizer_status ?? 'OFF'),
      node,
      rssi:        parseNumber(value.rssi ?? value.rssi_dbm ?? 0),
      timestamp:   parsedTime,
      weight,
      capacity:    deriveCapacity(weight),
      status:      deriveStatus(weight, gas_level),
    };

    const existing = map.get(node);
    if (!existing) {
      map.set(node, record);
    } else if (record.timestamp && existing.timestamp) {
      if (record.timestamp > existing.timestamp) {
        map.set(node, record);
      } else if (record.timestamp === existing.timestamp && pushKey.localeCompare(existing.pushKey) > 0) {
        map.set(node, record);
      }
    } else if (record.timestamp && !existing.timestamp) {
      map.set(node, record);
    } else if (!record.timestamp && !existing.timestamp && pushKey.localeCompare(existing.pushKey) > 0) {
      map.set(node, record);
    }
  }

  return Array.from(map.values()).sort((a, b) => {
    if (a.timestamp && b.timestamp) return b.timestamp - a.timestamp;
    if (a.timestamp) return -1;
    if (b.timestamp) return 1;
    return b.pushKey.localeCompare(a.pushKey);
  });
}

function parseTeamName(value: unknown): string | null {
  if (typeof value === 'string' && value.trim()) return value.trim();
  if (typeof value === 'object' && value !== null) {
    const v = value as Record<string, unknown>;
    const candidate = v.name ?? v.teamName ?? v.team_name ?? v.label ?? v.title ?? null;
    if (typeof candidate === 'string' && candidate.trim()) return candidate.trim();
    for (const val of Object.values(v)) {
      if (typeof val === 'string' && val.trim()) return val.trim();
    }
  }
  return null;
}

function normalizeBinId(value: string | null | undefined): string {
  return String(value ?? '').trim().toLowerCase().replace(/\s+/g, '-');
}

// ============================================================================
// ANIMATED VALUE COMPONENT
// key={String(value)} re-mounts the span → triggers entry animation
// value rendered directly — no stale intermediate state
// ============================================================================
function LiveValue({ value, className = '' }: { value: string | number; className?: string }) {
  const [flash, setFlash] = useState(false);
  const prevValue = useRef<string | number | null>(null);
  const timerRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prevValue.current === null) { prevValue.current = value; return; }
    if (prevValue.current !== value) {
      prevValue.current = value;
      if (timerRef.current) clearTimeout(timerRef.current);
      setFlash(true);
      timerRef.current = setTimeout(() => setFlash(false), 900);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [value]);

  return (
    <motion.span
      key={String(value)}
      initial={{ opacity: 0.3, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`inline-block transition-colors duration-500 ${flash ? 'text-green-500' : ''} ${className}`}
    >
      {value}
    </motion.span>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function BinMonitoring() {
  const [latestBin, setLatestBin]              = useState<BinRecord | null>(null);
  const [allLatestPerNode, setAllLatestPerNode] = useState<BinRecord[]>([]);
  const [registeredBins, setRegisteredBins]    = useState<any[]>([]);
  const [taskList, setTaskList]                = useState<any[]>([]);
  const [teamList, setTeamList]                = useState<string[]>([]);
  const [assigningTask, setAssigningTask]      = useState<string | null>(null);
  const [selectedTeamForAssignment, setSelectedTeamForAssignment] = useState<string>('');
  const [selectedBinForAssignment, setSelectedBinForAssignment] = useState<string>('');
  const [loading, setLoading]                  = useState(true);
  const [lastUpdated, setLastUpdated]          = useState<Date | null>(null);
  const [isNew, setIsNew]                      = useState(false);

  // ── Badge / colour helpers ────────────────────────────────────────────────

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Full':           return <Badge className="bg-red-600 text-white">Full</Badge>;
      case 'Near Full':      return <Badge className="bg-yellow-500 text-white">Near Full</Badge>;
      case 'High Gas Level': return <Badge className="bg-orange-500 text-white">High Gas</Badge>;
      default:               return <Badge className="bg-green-600 text-white">Normal</Badge>;
    }
  };

  const getStatusBarColor = (status: string) => {
    switch (status) {
      case 'Full':           return 'bg-red-500';
      case 'Near Full':      return 'bg-yellow-400';
      case 'High Gas Level': return 'bg-orange-400';
      default:               return 'bg-green-500';
    }
  };

  const getCollectionStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':     return <Badge className="bg-yellow-500 text-white">Pending</Badge>;
      case 'in-progress': return <Badge className="bg-blue-500 text-white">In Progress</Badge>;
      case 'completed':   return <Badge className="bg-green-500 text-white">Completed</Badge>;
      default:            return <Badge className="bg-gray-400 text-white">No Task</Badge>;
    }
  };

  const getTaskForBin = (nodeId: string) =>
    taskList.find((t) => t.bin === nodeId || t.bin_id === nodeId || t.node === nodeId);

  const assignTeam = async (taskId: string, team: string) => {
    setAssigningTask(taskId + team);
    setTaskList((prev) =>
      prev.map((t) => t.id === taskId ? { ...t, assignedTo: team, status: 'in-progress' } : t)
    );
    try {
      await update(ref(db, `collections/${taskId}`), { assignedTo: team, status: 'in-progress' });
    } catch (err) {
      console.error('Failed to persist assigned team:', err);
    } finally {
      setAssigningTask(null);
    }
  };

  const assignTeamToBin = async () => {
    if (!selectedTeamForAssignment) {
      alert('Please select a team first.');
      return;
    }

    const binId = selectedBinForAssignment || latestBin?.node || registeredBins[0]?.id;
    if (!binId) {
      alert('Please choose a bin first.');
      return;
    }

    try {
      const collectionKey = `${binId}-${Date.now()}`;
      const taskRow = {
        id: collectionKey,
        type: 'collection',
        binId,
        bin: binId,
        node: binId,
        assignedTo: selectedTeamForAssignment,
        scheduleType: 'team-assignment',
        status: 'pending',
        createdAt: new Date().toISOString(),
        scheduledTime: new Date().toISOString(),
      };

      await update(ref(db), {
        [`tasks/${collectionKey}`]: taskRow,
        [`collections/${collectionKey}`]: {
          ...taskRow,
          taskId: collectionKey,
          assignedTo: selectedTeamForAssignment,
          status: 'pending',
          bin_id: binId,
          bin: binId,
          node: binId,
        },
      });

      setSelectedTeamForAssignment('');
      setSelectedBinForAssignment('');
      alert(`Team "${selectedTeamForAssignment}" assigned to bin ${binId} for collection.`);
    } catch (error) {
      console.error('Failed to assign team to bin collection:', error);
      alert('Unable to assign the team to this collection. Please try again.');
    }
  };

  // ── Firebase listeners ────────────────────────────────────────────────────

  useEffect(() => {
    // sensor_data — push-key flat list
    const unsubSensor = onValue(
      ref(db, 'sensor_data'),
      (snap) => {
        const data = snap.val() as Record<string, RawSensorRecord> | null;
        console.log('✓ sensor_data snapshot received:', { hasData: !!data, count: Object.keys(data || {}).length });
        if (!data) {
          setLatestBin(null);
          setAllLatestPerNode([]);
          setLoading(false);
          return;
        }
        const perNode = getLatestPerNode(data);
        console.log('✓ Latest per node:', { count: perNode.length, nodes: perNode.map(p => p.node) });
        if (perNode[0]) {
          console.log('the latest', perNode[0].pushKey);
        } else {
          console.log('the latest: no records found');
        }
        setAllLatestPerNode(perNode);
        setLatestBin(perNode[0] ?? null);
        setLastUpdated(new Date());
        setLoading(false);
        setIsNew(true);
        setTimeout(() => setIsNew(false), 900);
      },
      (error) => {
        console.error('✗ sensor_data listener error:', error);
        setLoading(false);
      }
    );

    // bins registry
    const unsubBins = onValue(
      ref(db, 'bins'),
      (snap) => {
        const data = snap.val();
        console.log('✓ bins snapshot received:', { hasData: !!data, count: Object.keys(data || {}).length });
        setRegisteredBins(
          data
            ? Object.entries(data).map(([key, val]: [string, any]) => ({
                id:       key,
                location: val.location ?? '',
                status:   val.status   ?? 'good',
              }))
            : []
        );
      },
      (error) => console.error('✗ bins listener error:', error)
    );

    // collections / tasks
    const unsubCollections = onValue(
      ref(db, 'collections'),
      (snap) => {
        const data = snap.val();
        console.log('✓ collections snapshot received:', { hasData: !!data, count: Object.keys(data || {}).length });
        setTaskList(
          data
            ? Object.entries(data).map(([key, val]) => ({
                id: key,
                ...(typeof val === 'object' && val !== null ? val : {}),
              }))
            : []
        );
      },
      (error) => console.error('✗ collections listener error:', error)
    );

    // teams
    const unsubTeams = onValue(
      ref(db, 'teams'),
      (snap) => {
        const data = snap.val();
        console.log('✓ teams snapshot received:', { hasData: !!data });
        if (!data) { setTeamList([]); return; }
        let parsed: string[] = [];
        if (Array.isArray(data)) {
          parsed = data.map(parseTeamName).filter((n): n is string => n !== null);
        } else if (typeof data === 'object') {
          parsed = Object.values(data).map(parseTeamName).filter((n): n is string => n !== null);
        } else if (typeof data === 'string') {
          parsed = [data];
        }
        setTeamList(parsed);
      },
      (error) => console.error('✗ teams listener error:', error)
    );

    return () => { unsubSensor(); unsubBins(); unsubCollections(); unsubTeams(); };
  }, []);

  // Auto-complete task when bin is emptied
  useEffect(() => {
    if (!latestBin) return;
    setTaskList((prev) =>
      prev.map((task) => {
        const taskNode = task.bin ?? task.bin_id ?? task.node;
        if (taskNode !== latestBin.node) return task;
        if (latestBin.weight < 20 && latestBin.status === 'Normal' && task.status !== 'completed') {
          const finishedAtIso = new Date().toISOString();
          const completedAtDisplay = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
          const startedAtMs = task.createdAt ? Date.parse(task.createdAt) : Date.now();
          const responseMinutesValue = Number.isFinite(startedAtMs)
            ? Math.max(0, Math.round((Date.now() - startedAtMs) / 60000))
            : 0;

          const completedTask = {
            ...task,
            status: 'completed',
            completedAt: completedAtDisplay,
            finishedAt: finishedAtIso,
            responseMinutes: responseMinutesValue,
            response_time: responseMinutesValue,
            responseTime: responseMinutesValue,
            minutes: responseMinutesValue,
          };

          const taskId = task.id ?? task.taskId ?? task.task_id;
          if (taskId) {
            update(ref(db, `tasks/${taskId}`), {
              ...completedTask,
              status: 'completed',
              completedAt: completedAtDisplay,
              finishedAt: finishedAtIso,
            }).catch((err) => console.error('Failed to update task completion record:', err));

            update(ref(db, `collections/${taskId}`), {
              ...completedTask,
              bin: task.bin ?? task.bin_id ?? task.node ?? latestBin.node,
              bin_id: task.bin_id ?? task.bin ?? task.node ?? latestBin.node,
              node: task.node ?? latestBin.node,
              completedAt: completedAtDisplay,
              status: 'completed',
              finishedAt: finishedAtIso,
            }).catch((err) => console.error('Failed to update collection analytics record:', err));
          }

          return completedTask;
        }
        return task;
      })
    );
  }, [latestBin]);

  // ── Stats (only bins with a live sensor reading count) ───────────────────

  const totalBins = registeredBins.length;

  const liveSensorBins = allLatestPerNode.filter((sensor) =>
    registeredBins.some((bin) => normalizeBinId(bin.id) === normalizeBinId(sensor.node))
  );
  const fullBins   = liveSensorBins.filter((s) => s.weight >= FULL_KG).length;
  const nearFull   = liveSensorBins.filter((s) => s.weight >= NEAR_FULL_KG && s.weight < FULL_KG).length;
  const normalBins = liveSensorBins.filter((s) => s.weight < NEAR_FULL_KG).length;

  const currentTask = latestBin ? getTaskForBin(latestBin.node) : null;

  useEffect(() => {
    if (!selectedBinForAssignment && registeredBins.length > 0) {
      setSelectedBinForAssignment(registeredBins[0].id);
    }
  }, [registeredBins, selectedBinForAssignment]);

  const resolvedBin =
    registeredBins.find((bin) => bin.id === latestBin?.node || bin.id === 'Bin-10') ??
    registeredBins[0] ??
    null;

  const displayNodeName = resolvedBin?.id ?? latestBin?.node ?? 'Unknown';
  const displayLocation = resolvedBin?.location ?? (latestBin ? registeredBins.find((b) => b.id === latestBin.node)?.location : undefined) ?? 'Unknown location';

  const offlineRegisteredBins = registeredBins.filter((bin) => {
    if (!bin?.id || normalizeBinId(bin.id) === 'bin-10') return false;
    return !allLatestPerNode.some((sensor) => normalizeBinId(sensor.node) === normalizeBinId(bin.id));
  });

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Bin Monitoring</h2>
          <p className="text-gray-600 font-medium text-sm">Live sensor feed · node {latestBin?.node ?? '—'}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="font-medium text-green-600">Live</span>
          {lastUpdated && <span className="text-gray-400 text-xs">· {lastUpdated.toLocaleTimeString()}</span>}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Bins', value: totalBins,   sub: 'Registered',          icon: <Trash2 className="h-7 w-7 text-gray-400" />,        color: 'text-gray-800' },
          { label: 'Full',       value: fullBins,    sub: `≥ ${FULL_KG} kg`,     icon: <AlertTriangle className="h-7 w-7 text-red-400" />,   color: 'text-red-600'  },
          { label: 'Near Full',  value: nearFull,    sub: `≥ ${NEAR_FULL_KG} kg`,icon: <AlertTriangle className="h-7 w-7 text-yellow-400" />,color: 'text-yellow-500'},
          { label: 'Normal',     value: normalBins,  sub: `< ${NEAR_FULL_KG} kg`,icon: <CheckCircle className="h-7 w-7 text-green-400" />,   color: 'text-green-600'},
        ].map(({ label, value, sub, icon, color }) => (
          <Card key={label}>
            <CardContent className="pt-5 pb-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium">{label}</p>
                  <p className={`text-3xl font-bold ${color}`}>{value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                </div>
                {icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sensor card */}
      {loading ? (
        <Card>
          <CardContent className="p-10 flex items-center justify-center gap-3 text-gray-500">
            <RefreshCw className="h-5 w-5 animate-spin" />
            Connecting to Firebase...
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-4 xl:flex-row">
          <div className="w-full xl:w-[45%]">
            {latestBin ? (
              <Card className={`overflow-hidden transition-all duration-500 ${isNew ? 'ring-2 ring-green-400 shadow-lg' : ''}`}>
                <div className={`h-1.5 w-full transition-colors duration-500 ${getStatusBarColor(latestBin.status)}`} />

                <AnimatePresence>
                  {isNew && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-green-50 border-b border-green-100 px-4 py-1.5 text-xs text-green-700 font-semibold flex items-center gap-1.5"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      New data received
                    </motion.div>
                  )}
                </AnimatePresence>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{displayNodeName}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {displayLocation}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {getStatusBadge(latestBin.status)}
                      <span className="text-xs text-gray-400">
                        <LiveValue value={formatBinTimestamp(latestBin.timestamp)} />
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Weight className="h-4 w-4 text-gray-400" />
                      <span className="text-sm font-medium">Weight</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">
                        <LiveValue value={`${latestBin.weight.toFixed(1)} kg`} />
                      </span>
                      {latestBin.weight >= FULL_KG ? (
                        <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">Full</span>
                      ) : latestBin.weight >= NEAR_FULL_KG ? (
                        <span className="text-xs bg-yellow-100 text-yellow-600 font-semibold px-2 py-0.5 rounded-full">Near Full</span>
                      ) : (
                        <span className="text-xs bg-green-100 text-green-600 font-semibold px-2 py-0.5 rounded-full">Normal</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-medium">Capacity</span>
                      <span className="font-bold">
                        <LiveValue value={`${latestBin.capacity}%`} />
                      </span>
                    </div>
                    <Progress value={latestBin.capacity} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t">
                    <div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                        <Wind className="h-3 w-3" />
                        MQ135 · NH₃
                      </div>
                      <p className="text-lg font-bold">
                        <LiveValue value={`${latestBin.mq135} ppm`} />
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                        <Wind className="h-3 w-3" />
                        MQ4 · CH₄
                      </div>
                      <p className="text-lg font-bold">
                        <LiveValue value={`${latestBin.mq4} ppm`} />
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-3 border-t text-sm">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Distance</p>
                      <p className="font-semibold">
                        <LiveValue value={`${latestBin.distance} cm`} />
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Gas Level</p>
                      <p className="font-semibold">
                        <LiveValue value={latestBin.gas_level} />
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Neutralizer</p>
                      <p className={`font-semibold ${latestBin.neutralizer === 'ON' ? 'text-blue-600' : 'text-gray-500'}`}>
                        <LiveValue value={latestBin.neutralizer} />
                      </p>
                    </div>
                  </div>

                  <div className="pt-1 text-xs text-gray-400">
                    RSSI: <LiveValue value={`${latestBin.rssi} dBm`} />
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-sm text-gray-500 font-medium">Collection Status</span>
                    <div className="flex flex-col items-end gap-1">
                      {currentTask ? getCollectionStatusBadge(currentTask.status) : <Badge className="bg-gray-400 text-white">No Task</Badge>}
                      {currentTask?.assignedTo && (
                        <span className="text-[10px] text-gray-500">Assigned to {currentTask.assignedTo}</span>
                      )}
                    </div>
                  </div>

                  {currentTask && currentTask.status === 'in-progress' && (
                    <div className="pt-3 border-t flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-blue-500" />
                      Assigned to: <span className="font-bold text-blue-600">{currentTask.assignedTo ?? 'Unknown'}</span>
                    </div>
                  )}

                  {currentTask && currentTask.status === 'completed' && (
                    <div className="pt-3 border-t flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-600 font-bold">✓ Completed</span>
                      {currentTask.completedAt && <span className="text-gray-400">at {currentTask.completedAt}</span>}
                      {currentTask.assignedTo  && <span className="text-gray-400">by {currentTask.assignedTo}</span>}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-10 text-center text-gray-500">
                  No sensor data found. Waiting for device to send data...
                </CardContent>
              </Card>
            )}
          </div>

          {offlineRegisteredBins.length > 0 && (
            <div className="w-full xl:w-[45%] flex flex-col gap-4">
              {offlineRegisteredBins.map((bin) => {
                const offlineTask = getTaskForBin(bin.id);
                return (
                  <Card key={bin.id} className="overflow-hidden border border-gray-200 bg-white shadow-sm h-full min-h-[250px]">
                    <div className="h-1.5 w-full bg-gray-400" />
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-gray-900">{bin.id}</CardTitle>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
                            <MapPin className="h-3.5 w-3.5" />
                            {bin.location || 'Unknown location'}
                          </div>
                        </div>
                        <Badge className="bg-gray-500 text-white">Offline</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Weight className="h-4 w-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-600">Weight</span>
                        </div>
                        <span className="text-sm font-bold text-gray-700">No data</span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="font-medium text-gray-600">Capacity</span>
                          <span className="font-bold text-gray-700">0%</span>
                        </div>
                        <Progress value={0} className="h-2 bg-gray-200" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200 text-sm">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Sensor Feed</p>
                          <p className="font-semibold text-red-500">Offline</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Last Update</p>
                          <p className="font-semibold text-gray-700">—</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                        <span className="text-sm text-gray-500 font-medium">Collection Status</span>
                        <div className="flex flex-col items-end gap-1">
                          {offlineTask ? getCollectionStatusBadge(offlineTask.status) : <Badge className="bg-gray-400 text-white">No Task</Badge>}
                          {offlineTask?.assignedTo && (
                            <span className="text-[10px] text-gray-500">Assigned to {offlineTask.assignedTo}</span>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}