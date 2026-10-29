// ============================================================================
// ANALYTICS - Analyze waste management trends and statistics
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Clock, MapPin, Droplet } from 'lucide-react';
import { ref, onValue } from 'firebase/database';
import { db, subscribeSensorData } from '../../firebase';
import { normalizeSensorRecord } from '../../lib/gasConversion';
import { isSensorLinkedToRegisteredBin } from '../../lib/binSensorLink';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];
const HIGH_FILL_THRESHOLD_PERCENT = 80;
const BIN_FULL_WEIGHT_KG = 50;

const toNumber = (value: unknown, fallback = 0) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
};

const parseTime = (value: unknown) => {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
    const dateValue = Date.parse(value);
    return Number.isFinite(dateValue) ? dateValue : 0;
  }
  return 0;
};

const getFillPercent = (record: any) => {
  const explicitCapacity = record.capacity ?? record.fillLevel ?? record.current_fill;
  const value = explicitCapacity == null
    ? (toNumber(record.weight ?? record.weight_kg ?? record.wasteWeight ?? record.waste) / BIN_FULL_WEIGHT_KG) * 100
    : toNumber(explicitCapacity);
  return Math.max(0, Math.min(100, value));
};

const isNeutralizerOn = (record: any) => {
  const value = record.neutralizer ?? record.neutralizer_status ?? record.mist ?? record.mist_status ?? record.mist_on ?? record.mistOn;
  if (typeof value === 'boolean') return value;
  return ['ON', 'TRUE', '1', 'ACTIVE', 'MISTING'].includes(String(value ?? '').trim().toUpperCase());
};

const getTimestampMs = (value: unknown) => {
  const timestamp = parseTime(value);
  return timestamp >= 1e9 && timestamp < 1e12 ? timestamp * 1000 : timestamp;
};

const getResponseMinutes = (collection: any) => {
  const recordedMinutes = Number(
    collection.responseMinutes ?? collection.response_time ?? collection.responseTime ?? collection.minutes
  );
  if (Number.isFinite(recordedMinutes) && recordedMinutes > 0) return recordedMinutes;

  const startedAt = parseTime(collection.createdAt ?? collection.created_at);
  if (!startedAt) return 0;

  const finishedAt = parseTime(collection.finishedAt);
  if (finishedAt > startedAt) return (finishedAt - startedAt) / 60000;

  const completedAt = collection.completedAt;
  if (typeof completedAt !== 'string') return 0;
  const clockTime = completedAt.trim().match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?$/i);
  if (!clockTime) {
    const completedTimestamp = parseTime(completedAt);
    return completedTimestamp > startedAt ? (completedTimestamp - startedAt) / 60000 : 0;
  }

  let hours = Number(clockTime[1]);
  const minutes = Number(clockTime[2]);
  const seconds = Number(clockTime[3] ?? 0);
  const meridiem = clockTime[4]?.toUpperCase();
  if (minutes > 59 || seconds > 59 || (meridiem ? hours < 1 || hours > 12 : hours > 23)) return 0;
  if (meridiem) hours = (hours % 12) + (meridiem === 'PM' ? 12 : 0);

  const completedDate = new Date(startedAt);
  completedDate.setHours(hours, minutes, seconds, 0);
  if (completedDate.getTime() < startedAt) completedDate.setDate(completedDate.getDate() + 1);
  return (completedDate.getTime() - startedAt) / 60000;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function Analytics() {
  const [summary, setSummary] = useState({
    totalCollections: 0,
    avgResponseTime: 0,
    highRiskAreas: 0,
    neutralizationUsage: 0,
  });
  const [weeklyTrend, setWeeklyTrend] = useState<any[]>([]);
  const [topBins, setTopBins] = useState<any[]>([]);
  const [areaData, setAreaData] = useState<any[]>([]);
  const [registeredBins, setRegisteredBins] = useState<any[]>([]);
  const [responseTime, setResponseTime] = useState<any[]>([
    { name: 'Within 30 min', value: 0 },
    { name: '30-60 min', value: 0 },
    { name: '1-2 hrs', value: 0 },
    { name: '>2 hrs', value: 0 },
  ]);

  useEffect(() => {
    return onValue(ref(db, 'bins'), (snapshot) => {
      const data = snapshot.val() ?? {};
      setRegisteredBins(Object.entries(data)
        .map(([id, value]) => ({ id, ...(typeof value === 'object' && value !== null ? value : {}) }))
        .filter((item) => item && typeof item === 'object'));
    });
  }, []);

  useEffect(() => {
    const collectionsRef = ref(db, 'collections');

    const unsubCollections = onValue(collectionsRef, (snapshot) => {
      const data = snapshot.val() ?? {};
      const collections = Object.entries(data)
        .map(([key, value]) => ({ id: key, ...(typeof value === 'object' && value !== null ? value : {}) }))
        .filter((item) => item && typeof item === 'object')
        .filter((item) => String(item.status ?? '').toLowerCase() === 'completed');

      const responseBuckets = {
        '<30': 0,
        '30-60': 0,
        '1-2h': 0,
        '>2h': 0,
      };

      const responseTimes = collections
        .map(getResponseMinutes)
        .filter((value) => value > 0);

      responseTimes.forEach((minutes) => {
        if (minutes <= 30) responseBuckets['<30'] += 1;
        else if (minutes <= 60) responseBuckets['30-60'] += 1;
        else if (minutes <= 120) responseBuckets['1-2h'] += 1;
        else responseBuckets['>2h'] += 1;
      });

      const responseChart = [
        { name: 'Within 30 min', value: responseBuckets['<30'] },
        { name: '30-60 min', value: responseBuckets['30-60'] },
        { name: '1-2 hrs', value: responseBuckets['1-2h'] },
        { name: '>2 hrs', value: responseBuckets['>2h'] },
      ];

      const avgResponse = responseTimes.length ? responseTimes.reduce((total, value) => total + value, 0) / responseTimes.length : 0;
      setSummary((prev) => ({ ...prev, totalCollections: collections.length, avgResponseTime: avgResponse }));
      setResponseTime(responseChart);

      const trend = Array.from({ length: 7 }, (_, idx) => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() - (6 - idx));

        const label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const count = collections.filter((item) => {
          const ts = parseTime(item.timestamp ?? item.time ?? item.createdAt ?? item.created_at);
          if (!ts) return false;
          const itemDate = new Date(ts);
          return itemDate.toDateString() === date.toDateString();
        }).length;

        return { week: label, collections: count };
      });
      setWeeklyTrend(trend);
    });

    const unsubSensors = subscribeSensorData((sensorRecords) => {
      const dedupedByNode = new Map<string, any>();
      const readingsBySensor = new Map<string, Array<{ timestamp: number; fillPercent: number; id: string }>>();
      sensorRecords.forEach((item) => {
        const normalized = {
          ...normalizeSensorRecord(item.id, item),
          id: item.id,
          branch: item.branch,
          mq135Adc: toNumber(item.mq135_adc ?? item.mq_135_adc ?? item.mq135 ?? item.mq_135 ?? item['MQ-135']),
          mq4Adc: toNumber(item.mq4_adc ?? item.mq_4_adc ?? item.mq4 ?? item.mq_4 ?? item['MQ-4']),
        };
        const key = String(normalized.node ?? normalized.location ?? normalized.id ?? 'unknown').trim();
        const prev = dedupedByNode.get(key);
        if (!prev || toNumber(normalized.timestamp) >= toNumber(prev.timestamp)) {
          dedupedByNode.set(key, normalized);
        }

        const rawWeight = item.weight ?? item.weight_kg ?? item.wasteWeight ?? item.waste;
        const rawCapacity = item.capacity ?? item.fillLevel ?? item.current_fill;
        const timestamp = getTimestampMs(item.timestamp ?? item.time ?? item.updatedAt);
        if (timestamp <= 0 || (rawWeight == null && rawCapacity == null)) return;

        const sensorId = String(normalized.node ?? item.id ?? normalized.location ?? 'Unknown sensor').trim();
        const readings = readingsBySensor.get(sensorId) ?? [];
        readings.push({
          timestamp,
          fillPercent: getFillPercent(item),
          id: String(item.id ?? ''),
        });
        readingsBySensor.set(sensorId, readings);
      });

      const results = Array.from(dedupedByNode.values());

      const latestByBin = new Map<string, any>();
      results.forEach((item) => {
        const binKey = String(item.node ?? item.location ?? item.id ?? 'unknown');
        const prev = latestByBin.get(binKey);
        if (!prev || toNumber(item.timestamp) >= toNumber(prev.timestamp)) {
          latestByBin.set(binKey, item);
        }
      });

      const latest = Array.from(latestByBin.values());
      const highRiskAreas = latest.filter((item) => item.mq135Adc > 1500 || item.mq4Adc > 1200).length;
      const neutralizationUsage = sensorRecords.filter(isNeutralizerOn).length;

      const top = Array.from(readingsBySensor, ([sensor, readings]) => {
        readings.sort((a, b) => a.timestamp - b.timestamp || a.id.localeCompare(b.id));
        const uniqueReadings = readings.filter((reading, index) =>
          index === readings.length - 1 || reading.timestamp !== readings[index + 1].timestamp
        );
        let previousFillPercent: number | null = null;
        let fillEvents = 0;

        uniqueReadings.forEach((reading) => {
          if (previousFillPercent !== null && previousFillPercent < HIGH_FILL_THRESHOLD_PERCENT && reading.fillPercent >= HIGH_FILL_THRESHOLD_PERCENT) {
            fillEvents += 1;
          }
          previousFillPercent = reading.fillPercent;
        });

        return { bin: sensor, fillEvents };
      })
        .filter((item) => item.fillEvents > 0)
        .sort((a, b) => b.fillEvents - a.fillEvents)
        .slice(0, 5);

      const areas = latest
        .map((item) => {
          const matchedBin = registeredBins.find((bin) => isSensorLinkedToRegisteredBin(item, [bin]));
          return {
            area: String(item.node ?? matchedBin?.id ?? item.location ?? item.id ?? 'Unknown'),
            avgRotIndex: Number(((toNumber(item.nh3) + toNumber(item.ch4)) / 2).toFixed(1)),
          };
        })
        .sort((a, b) => b.avgRotIndex - a.avgRotIndex)
        .slice(0, 6);

      setSummary((prev) => ({
        ...prev,
        highRiskAreas,
        neutralizationUsage,
      }));
      setTopBins(top);
      setAreaData(areas);
    });

    return () => {
      unsubCollections();
      unsubSensors();
    };
  }, [registeredBins]);

  const summaryCards = [
    {
      label: 'Total Collections',
      value: summary.totalCollections,
      hint: summary.totalCollections > 0 ? 'Live from database' : 'No collection records yet',
      accent: 'text-green-500',
      icon: TrendingUp,
    },
    {
      label: 'Avg Response Time',
      value: summary.avgResponseTime > 0 ? `${Math.round(summary.avgResponseTime)} min` : '0 min',
      hint: 'Based on recorded response times',
      accent: 'text-blue-500',
      icon: Clock,
    },
    {
      label: 'High Rot Index',
      value: summary.highRiskAreas,
      hint: 'MQ-135 > 1500 or MQ-4 > 1200 ADC',
      accent: 'text-orange-500',
      icon: MapPin,
    },
    {
      label: 'Neutralization Usage',
      value: summary.neutralizationUsage,
      hint: 'Sensor readings with mist ON',
      accent: 'text-cyan-500',
      icon: Droplet,
    },
  ];
  const hasResponseTimeData = responseTime.some((bucket) => bucket.value > 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <p className="text-gray-900 font-semibold">Data-driven insights for waste management planning</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map(({ label, value, hint, accent, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base text-gray-900 font-semibold">{label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
                  <p className={`text-sm font-semibold mt-1 ${accent}`}>{hint}</p>
                </div>
                <Icon className={`h-8 w-8 ${accent}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Waste Accumulation Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="collections" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Collections" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Collection Response Time</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            {hasResponseTimeData ? (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={responseTime}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {responseTime.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="flex h-[250px] items-center justify-center text-sm text-gray-500">
                No collection response-time data yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Most Frequent High-Fill Events by Sensor</CardTitle>
          </CardHeader>
          <CardContent>
            {topBins.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={topBins} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" allowDecimals={false} />
                  <YAxis type="category" dataKey="bin" />
                  <Tooltip formatter={(value: number) => [value, 'High-fill events (80%+)']} />
                  <Bar dataKey="fillEvents" fill="#10b981" name="High-fill events (80%+)" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="flex h-[250px] items-center justify-center text-sm text-gray-500">
                No repeated high-fill events recorded yet
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bins with Highest Rot Index</CardTitle>
          </CardHeader>
          <CardContent>
            {areaData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={areaData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="avgRotIndex" fill="#ef4444" name="Avg Rot Index" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="flex h-[250px] items-center justify-center text-sm text-gray-500">
                No registered bin sensor readings available yet
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}