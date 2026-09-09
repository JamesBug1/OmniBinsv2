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
import { db } from '../../firebase';
import { normalizeSensorRecord } from '../../lib/gasConversion';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

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
  const [responseTime, setResponseTime] = useState<any[]>([
    { name: 'Within 30 min', value: 0 },
    { name: '30-60 min', value: 0 },
    { name: '1-2 hrs', value: 0 },
    { name: '>2 hrs', value: 0 },
  ]);

  useEffect(() => {
    const collectionsRef = ref(db, 'collections');
    const sensorRef = ref(db, 'sensor_data');
    const binsRef = ref(db, 'bins');

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
        .map((item) => {
          const value = Number(item.responseMinutes ?? item.response_time ?? item.responseTime ?? item.minutes ?? 0);
          return Number.isFinite(value) ? value : 0;
        })
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

    const unsubSensors = onValue(sensorRef, (snapshot) => {
      const data = snapshot.val() ?? {};
      const results = Object.entries(data)
        .map(([key, value]) => normalizeSensorRecord(key, value))
        .filter((item) => item && typeof item === 'object');

      const latestByBin = new Map<string, any>();
      results.forEach((item) => {
        const binKey = String(item.node ?? item.location ?? item.id ?? 'unknown');
        const prev = latestByBin.get(binKey);
        if (!prev || toNumber(item.timestamp) >= toNumber(prev.timestamp)) {
          latestByBin.set(binKey, item);
        }
      });

      const latest = Array.from(latestByBin.values());
      const highRiskAreas = latest.filter((item) => item.weight >= 60 || item.nh3 > 25 || item.ch4 > 50).length;
      const neutralizationUsage = latest.filter((item) => item.nh3 > 35 || item.ch4 > 70).length;

      const top = latest
        .map((item) => ({
          bin: String(item.node ?? item.location ?? item.id ?? 'Unknown'),
          fills: Math.max(0, Math.min(100, Math.round(item.weight || item.capacity || 0))),
        }))
        .sort((a, b) => b.fills - a.fills)
        .slice(0, 5);

      const areaMap = new Map<string, { area: string; avgRotIndex: number; count: number }>();
      latest.forEach((item) => {
        const area = String(item.location ?? item.node ?? 'Unknown');
        const avgRotIndex = ((toNumber(item.nh3) + toNumber(item.ch4)) / 2) || 0;
        const existing = areaMap.get(area) ?? { area, avgRotIndex: 0, count: 0 };
        existing.avgRotIndex += avgRotIndex;
        existing.count += 1;
        areaMap.set(area, existing);
      });

      const areas = Array.from(areaMap.values())
        .map((item) => ({ area: item.area, avgRotIndex: Number((item.avgRotIndex / (item.count || 1)).toFixed(1)) }))
        .sort((a, b) => b.avgRotIndex - a.avgRotIndex)
        .slice(0, 5);

      setSummary((prev) => ({
        ...prev,
        highRiskAreas,
        neutralizationUsage,
      }));
      setTopBins(top);
      setAreaData(areas);
    });

    const unsubBins = onValue(binsRef, (snapshot) => {
      const data = snapshot.val() ?? {};
      const bins = Object.entries(data)
        .map(([key, value]) => ({ id: key, ...(typeof value === 'object' && value !== null ? value : {}) }))
        .filter((item) => item && typeof item === 'object');

      if (bins.length > 0) {
        const nextTop = bins
          .map((bin) => ({
            bin: String(bin.id ?? bin.location ?? 'Unknown'),
            fills: Math.max(0, Math.min(100, Number(bin.capacity ?? bin.current_fill ?? bin.fillLevel ?? 0))),
          }))
          .sort((a, b) => b.fills - a.fills)
          .slice(0, 5);

        if (nextTop.length > 0) {
          setTopBins(nextTop);
        }
      }
    });

    return () => {
      unsubCollections();
      unsubSensors();
      unsubBins();
    };
  }, []);

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
      label: 'High Risk Areas',
      value: summary.highRiskAreas,
      hint: 'Bins above threshold or high gas',
      accent: 'text-orange-500',
      icon: MapPin,
    },
    {
      label: 'Neutralization Usage',
      value: summary.neutralizationUsage,
      hint: 'Strong gas detection events',
      accent: 'text-cyan-500',
      icon: Droplet,
    },
  ];

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
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={responseTime}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {responseTime.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Most Frequently Filled Bins</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={topBins} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="bin" />
                <Tooltip />
                <Bar dataKey="fills" fill="#10b981" name="Fill %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Areas with Highest Rot Index</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="avgRotIndex" fill="#ef4444" name="Avg Rot Index" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}