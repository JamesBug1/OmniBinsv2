// ============================================================================
// BIN MONITORING - Real-time monitoring of smart waste bins
// ============================================================================

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ref, onValue, update } from 'firebase/database';
import { db } from '../../firebase';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Button } from '../components/ui/button';
import { MapPin, Weight, Wind, Users, RefreshCw, Trash2, AlertTriangle, CheckCircle } from 'lucide-react';

// ============================================================================
// CONSTANTS
// ============================================================================
const FULL_KG      = 10;
const NEAR_FULL_KG = 5;

// ============================================================================
// TYPES
// Raw record shape coming from Firebase push keys
// ============================================================================
interface RawSensorRecord {
  distance:    number;
  gas_level:   string;   // "NORMAL" | "HIGH" | etc.
  mq135:       number;   // NH₃ proxy (ppm)
  mq4:         number;   // CH₄ proxy (ppm)
  neutralizer: string;   // "ON" | "OFF"
  node:        string;   // "D1"
  rssi:        number;
  timestamp:   number;
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

// ============================================================================
// HELPERS
// ============================================================================

function deriveStatus(weight: number, gas_level: string): string {
  if (weight >= FULL_KG)      return 'Full';
  if (weight >= NEAR_FULL_KG) return 'Near Full';
  if (gas_level && gas_level.toUpperCase() !== 'NORMAL') return 'High Gas Level';
  return 'Normal';
}

function deriveCapacity(weight: number): number {
  return Math.min(100, Math.round((weight / FULL_KG) * 100));
}

/** From a flat push-key map, get the latest record per node */
function getLatestPerNode(raw: Record<string, RawSensorRecord>): BinRecord[] {
  const map = new Map<string, BinRecord>();

  for (const [pushKey, value] of Object.entries(raw)) {
    if (!value || typeof value !== 'object') continue;

    const node      = value.node ?? pushKey;
    const weight    = Number(value.weight   ?? 0);
    const gas_level = String(value.gas_level ?? 'NORMAL');

    const record: BinRecord = {
      pushKey,
      distance:    Number(value.distance    ?? 0),
      gas_level,
      mq135:       Number(value.mq135       ?? 0),
      mq4:         Number(value.mq4         ?? 0),
      neutralizer: String(value.neutralizer ?? 'OFF'),
      node,
      rssi:        Number(value.rssi        ?? 0),
      timestamp:   Number(value.timestamp   ?? 0),
      weight,
      capacity:    deriveCapacity(weight),
      status:      deriveStatus(weight, gas_level),
    };

    const existing = map.get(node);
    if (!existing || record.timestamp > existing.timestamp) {
      map.set(node, record);
    }
  }

  return Array.from(map.values()).sort((a, b) => b.timestamp - a.timestamp);
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

  // ── Firebase listeners ────────────────────────────────────────────────────

  useEffect(() => {
    // sensor_data — push-key flat list
    const unsubSensor = onValue(ref(db, 'sensor_data'), (snap) => {
      const data = snap.val() as Record<string, RawSensorRecord> | null;
      if (!data) {
        setLatestBin(null);
        setAllLatestPerNode([]);
        setLoading(false);
        return;
      }
      const perNode = getLatestPerNode(data);
      setAllLatestPerNode(perNode);
      setLatestBin(perNode[0] ?? null);
      setLastUpdated(new Date());
      setLoading(false);
      setIsNew(true);
      setTimeout(() => setIsNew(false), 900);
    });

    // bins registry
    const unsubBins = onValue(ref(db, 'bins'), (snap) => {
      const data = snap.val();
      setRegisteredBins(
        data
          ? Object.entries(data).map(([key, val]: [string, any]) => ({
              id:       key,
              location: val.location ?? '',
              status:   val.status   ?? 'good',
            }))
          : []
      );
    });

    // collections / tasks
    const unsubCollections = onValue(ref(db, 'collections'), (snap) => {
      const data = snap.val();
      setTaskList(
        data
          ? Object.entries(data).map(([key, val]) => ({
              id: key,
              ...(typeof val === 'object' && val !== null ? val : {}),
            }))
          : []
      );
    });

    // teams
    const unsubTeams = onValue(ref(db, 'teams'), (snap) => {
      const data = snap.val();
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
    });

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
          return {
            ...task,
            status: 'completed',
            completedAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          };
        }
        return task;
      })
    );
  }, [latestBin]);

  // ── Stats (only bins with a live sensor reading count) ───────────────────

  const totalBins = registeredBins.length;

  const getSensorForBin = (bin: { id: string; location: string }) =>
    allLatestPerNode.find((s) => s.node === bin.id || s.node === bin.location);

  const fullBins   = registeredBins.filter((b) => { const s = getSensorForBin(b); return s && s.weight >= FULL_KG; }).length;
  const nearFull   = registeredBins.filter((b) => { const s = getSensorForBin(b); return s && s.weight >= NEAR_FULL_KG && s.weight < FULL_KG; }).length;
  const normalBins = registeredBins.filter((b) => { const s = getSensorForBin(b); return s && s.weight < NEAR_FULL_KG; }).length;

  const currentTask = latestBin ? getTaskForBin(latestBin.node) : null;

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
      ) : !latestBin ? (
        <Card>
          <CardContent className="p-10 text-center text-gray-500">
            No sensor data found. Waiting for device to send data...
          </CardContent>
        </Card>
      ) : (
        <Card className={`overflow-hidden transition-all duration-500 ${isNew ? 'ring-2 ring-green-400 shadow-lg' : ''}`}>
          {/* Colour status bar */}
          <div className={`h-1.5 w-full transition-colors duration-500 ${getStatusBarColor(latestBin.status)}`} />

          {/* "New data" flash banner */}
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
                <CardTitle className="text-lg">Node {latestBin.node}</CardTitle>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {registeredBins.find((b) => b.id === latestBin.node)?.location || 'Unknown location'}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                {getStatusBadge(latestBin.status)}
                <span className="text-xs text-gray-400">
                  <LiveValue value={new Date(latestBin.timestamp * 1000).toLocaleTimeString()} />
                </span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Weight */}
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

            {/* Capacity bar */}
            <div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium">Capacity</span>
                <span className="font-bold">
                  <LiveValue value={`${latestBin.capacity}%`} />
                </span>
              </div>
              <Progress value={latestBin.capacity} className="h-2" />
            </div>

            {/* Gas readings — mq135 (NH₃) and mq4 (CH₄) */}
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

            {/* Distance + Gas level + Neutralizer */}
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

            {/* RSSI */}
            <div className="pt-1 text-xs text-gray-400">
              RSSI: <LiveValue value={`${latestBin.rssi} dBm`} />
            </div>

            {/* Collection status */}
            <div className="flex items-center justify-between pt-3 border-t">
              <span className="text-sm text-gray-500 font-medium">Collection Status</span>
              {currentTask ? getCollectionStatusBadge(currentTask.status) : <Badge className="bg-gray-400 text-white">No Task</Badge>}
            </div>

            {/* Team assignment — pending */}
            {currentTask && currentTask.status === 'pending' && (
              <div className="pt-3 border-t space-y-3">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                  <Users className="h-4 w-4" />
                  Assign Collection Team
                </div>
                {teamList.length === 0 ? (
                  <p className="text-xs text-gray-400 italic">No teams found. Add teams in the Maintenance page.</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {teamList.map((team) => {
                      const isAssigned = currentTask.assignedTo === team;
                      const isLoading  = assigningTask === currentTask.id + team;
                      return (
                        <Button
                          key={team}
                          size="sm"
                          disabled={isLoading}
                          onClick={() => assignTeam(currentTask.id, team)}
                          className={isAssigned ? 'bg-green-700 text-white border-2 border-green-900 font-bold' : 'bg-green-600 hover:bg-green-700 text-white'}
                        >
                          {isLoading ? (
                            <span className="flex items-center gap-1">
                              <span className="animate-spin h-3 w-3 border border-white border-t-transparent rounded-full" />
                              Assigning...
                            </span>
                          ) : <>{isAssigned && '✓ '}{team}</>}
                        </Button>
                      );
                    })}
                  </div>
                )}
                {currentTask.assignedTo && (
                  <p className="text-xs text-gray-500">
                    Currently assigned to: <span className="font-semibold text-green-700">{currentTask.assignedTo}</span>
                  </p>
                )}
              </div>
            )}

            {/* In-progress */}
            {currentTask && currentTask.status === 'in-progress' && (
              <div className="pt-3 border-t flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4 text-blue-500" />
                Assigned to: <span className="font-bold text-blue-600">{currentTask.assignedTo ?? 'Unknown'}</span>
              </div>
            )}

            {/* Completed */}
            {currentTask && currentTask.status === 'completed' && (
              <div className="pt-3 border-t flex items-center gap-2 text-sm text-gray-600">
                <span className="text-green-600 font-bold">✓ Completed</span>
                {currentTask.completedAt && <span className="text-gray-400">at {currentTask.completedAt}</span>}
                {currentTask.assignedTo  && <span className="text-gray-400">by {currentTask.assignedTo}</span>}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}