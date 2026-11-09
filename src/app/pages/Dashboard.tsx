import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ref, onValue } from 'firebase/database';
import { db, subscribeAlerts, subscribeBins, subscribeReports, subscribeSensorData } from '../../firebase';
import { normalizeSensorRecord } from '../../lib/gasConversion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Trash2, AlertCircle, Wind, Droplet } from 'lucide-react';

function parseTimestamp(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value > 0 && value < 1e12 ? value * 1000 : value;
  }
  if (typeof value !== 'string' || !value.trim()) return null;

  const numeric = Number(value);
  if (Number.isFinite(numeric)) return numeric > 0 && numeric < 1e12 ? numeric * 1000 : numeric;
  if (/^\d{1,2}:\d{2}(?:\s|$)/.test(value.trim())) return null;

  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function getCompletionTimestamp(collection: any): number | null {
  const values = [
    collection.finishedAt,
    collection.completedAt,
    collection.timestamp,
    collection.time,
    collection.createdAt,
    collection.created_at,
    collection.scheduledDate,
  ];
  return values.map(parseTimestamp).find((timestamp) => timestamp !== null) ?? null;
}

function isNeutralizerOn(record: any): boolean {
  const value = record.neutralizer ?? record.neutralizer_status ?? record.mist ?? record.mist_status ?? record.mist_on ?? record.mistOn;
  if (typeof value === 'boolean') return value;
  return ['ON', 'TRUE', '1', 'ACTIVE', 'MISTING'].includes(String(value ?? '').trim().toUpperCase());
}

function buildWeeklyCollections(collections: any[]) {
  const completed = collections.filter((collection) => String(collection.status ?? '').toLowerCase() === 'completed');

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (6 - index));
    const dayStart = date.getTime();
    const nextDayStart = dayStart + 24 * 60 * 60 * 1000;
    const count = completed.filter((collection) => {
      const timestamp = getCompletionTimestamp(collection);
      return timestamp !== null && timestamp >= dayStart && timestamp < nextDayStart;
    }).length;

    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      collections: count,
    };
  });
}

export function Dashboard() {
  const [registeredBins, setRegisteredBins] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalBins: 0,
    fullBins: 12,
    highRotIndex: 0,
    activeNeutralization: 0,
  });
  const [gasLevels, setGasLevels] = useState<any[]>([]);
  const [recentAlerts, setRecentAlerts] = useState<any[]>([]);
  const [weeklyCollections, setWeeklyCollections] = useState(() => buildWeeklyCollections([]));

  useEffect(() => {
    const unsubscribeBins = subscribeBins((bins) => {
      setRegisteredBins(bins);
      setStats((prev) => ({ ...prev, totalBins: bins.length }));
    });

    return () => unsubscribeBins();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeSensorData((sensorRecords) => {
      const dedupedByNode = new Map<string, any>();
      sensorRecords.forEach((item) => {
        const normalized = {
          ...normalizeSensorRecord(item.id, item),
          id: item.id,
          branch: item.branch,
          mq135Ppm: Number(item.nh3 ?? item.mq135_ppm ?? item.mq_135_ppm ?? item.mq135 ?? item.mq_135 ?? 0) || 0,
          mq4Ppm: Number(item.ch4 ?? item.mq4_ppm ?? item.mq_4_ppm ?? item.mq4 ?? item.mq_4 ?? 0) || 0,
        };
        const key = String(normalized.node ?? normalized.location ?? normalized.id ?? 'unknown-bin').trim();
        const existing = dedupedByNode.get(key);
        if (!existing || (normalized.timestamp ?? 0) >= (existing.timestamp ?? 0)) {
          dedupedByNode.set(key, normalized);
        }
      });

      const records = Array.from(dedupedByNode.values()).sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0));

      const latestByBin = new Map<string, any>();
      records.forEach((rec) => {
        const binKey = String(rec.node ?? rec.location ?? rec.id ?? 'unknown-bin');
        const existing = latestByBin.get(binKey);
        if (!existing || (rec.timestamp ?? 0) >= (existing.timestamp ?? 0)) {
          latestByBin.set(binKey, rec);
        }
      });

      const latestBinRecords = Array.from(latestByBin.values());
      const fullBins = latestBinRecords.filter((rec) => rec.weight >= 80).length;
      const highRotIndex = latestBinRecords.filter((rec) => rec.mq135Ppm > 1500 || rec.mq4Ppm > 1200).length;
      const activeNeutralization = sensorRecords.filter(isNeutralizerOn).length;

      const points = latestBinRecords
        .slice()
        .sort((a, b) => ((b.nh3 + b.ch4) / 2) - ((a.nh3 + a.ch4) / 2))
        .slice(0, 6)
        .map((rec) => ({
        sensor: String(rec.node ?? rec.location ?? rec.id ?? 'Unknown sensor'),
        rotIndex: Number(((rec.nh3 + rec.ch4) / 2).toFixed(1)),
      }));

      setStats((prev) => ({
        ...prev,
        fullBins,
        highRotIndex,
        activeNeutralization,
      }));
      setGasLevels(points);
    });

    return () => unsubscribe();
  }, [registeredBins]);

  useEffect(() => {
    let alerts: any[] = [];
    let reports: any[] = [];
    let collections: any[] = [];

    const refreshDashboardData = () => {
      const alertItems = [
        ...alerts.map((item) => ({ ...item, source: 'alert' })),
        ...reports.map((item) => ({ ...item, source: 'report' })),
      ].map((item) => {
        const reportMessage = item.description ?? item.summary ?? item.issueType;
        const rawTime = item.time ?? item.timestamp ?? item.createdAt ?? item.created_at;
        return {
          id: item.id,
          bin: item.bin ?? item.node ?? item.location ?? item.place ?? (item.source === 'report' ? 'Report' : 'Unknown bin'),
          message: item.message ?? item.text ?? item.title ?? reportMessage ?? 'Notification',
          severity: String(item.severity ?? item.level ?? (item.source === 'report' ? 'warning' : 'info')).toLowerCase(),
          time: rawTime,
          sortTime: parseTimestamp(rawTime) ?? 0,
        };
      });

      setRecentAlerts(alertItems.sort((a, b) => b.sortTime - a.sortTime).slice(0, 5));
      setWeeklyCollections(buildWeeklyCollections(collections));
    };

    const unsubscribeAlerts = subscribeAlerts((items) => {
      alerts = items;
      refreshDashboardData();
    }, (error) => console.error('Failed to load dashboard alerts:', error));
    const unsubscribeReports = subscribeReports((items) => {
      reports = items;
      refreshDashboardData();
    }, (error) => console.error('Failed to load dashboard reports:', error));
    const unsubscribeCollections = onValue(ref(db, 'collections'), (snapshot) => {
      const data = snapshot.val() ?? {};
      collections = Object.entries(data).map(([id, value]) => ({
        id,
        ...(typeof value === 'object' && value !== null ? value : {}),
      }));
      refreshDashboardData();
    }, (error) => console.error('Failed to load dashboard collections:', error));

    return () => {
      unsubscribeAlerts();
      unsubscribeReports();
      unsubscribeCollections();
    };
  }, []);

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'critical':
      case 'error': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'success': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-gray-900 font-semibold">Live monitoring of bin status, gas levels & collection tracking</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Total Smart Bins', value: stats.totalBins, desc: 'Deployed across the area', icon: Trash2, iconColor: 'text-green-600' },
          { title: 'Full / Near Full', value: stats.fullBins, desc: 'Require immediate collection', icon: AlertCircle, iconColor: 'text-red-600' },
          { title: 'High Rot Index', value: stats.highRotIndex, desc: 'MQ-135 > 1500 or MQ-4 > 1200 ppm', icon: Wind, iconColor: 'text-orange-600' },
          { title: 'Active Neutralization', value: stats.activeNeutralization, desc: 'Sensor readings with mist ON', icon: Droplet, iconColor: 'text-blue-600' },
        ].map((stat, idx) => (
          <motion.div key={stat.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.1 }}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold text-gray-900">{stat.title}</CardTitle>
                <stat.icon className={`h-10 w-10 ${stat.iconColor || 'text-gray-800'}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className="text-xs text-gray-800 font-medium">{stat.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Weekly Collections */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
        <Card>
          <CardHeader><CardTitle>Weekly Collections</CardTitle></CardHeader>
          <CardContent>
            {weeklyCollections.every((day) => day.collections === 0) && (
              <p className="mb-2 text-sm text-gray-500">No completed collections in the last 7 days.</p>
            )}
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={weeklyCollections}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="collections" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      {/* Highest Rot Index Chart */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
        <Card>
          <CardHeader><CardTitle>Bins with Highest Rot Index</CardTitle></CardHeader>
          <CardContent>
            {gasLevels.length > 0 ? (
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={gasLevels} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="sensor" width={90} />
                  <Tooltip formatter={(value: number) => [`${value.toFixed(1)} ppm`, 'ROT Index']} />
                  <Bar dataKey="rotIndex" fill="#ef4444" name="ROT Index" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="flex h-[350px] items-center justify-center text-sm text-gray-500">No sensor readings available yet.</p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
        <Card>
          <CardHeader><CardTitle>Recent Alerts & Notifications</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {recentAlerts.map((alert) => (
                <div key={`${alert.source}-${alert.id}`} className={`flex items-start gap-3 rounded-lg border p-3 ${getAlertColor(alert.severity)}`}>
                  <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900">{alert.bin}</p>
                    <p className="text-sm text-gray-900 font-medium">{alert.message}</p>
                    <p className="text-xs mt-1 font-medium text-gray-800">
                      {parseTimestamp(alert.time)
                        ? new Date(parseTimestamp(alert.time)!).toLocaleString()
                        : String(alert.time ?? 'Time unavailable')}
                    </p>
                  </div>
                </div>
              ))}
              {recentAlerts.length === 0 && <p className="text-sm text-gray-500">No recent alerts or reports.</p>}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
