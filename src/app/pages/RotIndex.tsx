// ============================================================================
// ROT INDEX - Monitor decomposition and gas production metrics
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { subscribeSensorData } from '../../firebase';
import { normalizeSensorRecord } from '../../lib/gasConversion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, Cell, LabelList } from 'recharts';
import { Wind, AlertTriangle } from 'lucide-react';

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const ROT_LEVELS = [
  { label: 'Low baseline', color: '#22c55e' },
  { label: 'Elevated', color: '#eab308' },
  { label: 'High', color: '#ef4444' },
];

function getRotLevel(mq135Ppm: number, mq4Ppm: number): string {
  if (mq135Ppm > 1500 || mq4Ppm > 1200) return 'High';
  if (mq135Ppm > 600 || mq4Ppm > 500) return 'Elevated';
  return 'Low baseline';
}

function parseSensorTimestamp(value: unknown): number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value >= 1e12 ? value : value >= 1e9 ? value * 1000 : 0;
  }

  if (typeof value !== 'string' || !value.trim()) return 0;
  const numeric = Number(value);
  if (Number.isFinite(numeric)) {
    return numeric >= 1e12 ? numeric : numeric >= 1e9 ? numeric * 1000 : 0;
  }

  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function RotIndex() {
  const [avgNh3, setAvgNh3] = useState(0);
  const [avgCh4, setAvgCh4] = useState(0);
  const [highRotBins, setHighRotBins] = useState(0);
  const [historicalData, setHistoricalData] = useState<any[]>([]);
  const [binRotData, setBinRotData] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeSensorData((sensorRecords) => {
      const now = Date.now();
      const cutoff = now - DAY_MS;
      const normalizedRecords = sensorRecords.map((item) => ({
        ...normalizeSensorRecord(item.id, item),
        id: item.id,
        branch: item.branch,
        node: String(item.node ?? '').trim(),
        mq135Ppm: Number(item.nh3 ?? item.mq135_ppm ?? item.mq_135_ppm ?? item.mq135 ?? item.mq_135 ?? 0) || 0,
        mq4Ppm: Number(item.ch4 ?? item.mq4_ppm ?? item.mq_4_ppm ?? item.mq4 ?? item.mq_4 ?? 0) || 0,
        timestampMs: parseSensorTimestamp(item.timestamp ?? item.time ?? item.updatedAt),
      })).filter((record) => record.node);
      const readingsByHourAndBin = Array.from({ length: 24 }, () => new Map<string, {
        nh3Total: number;
        ch4Total: number;
        readingCount: number;
      }>());

      normalizedRecords.forEach((normalized) => {
        const timestamp = normalized.timestampMs;
        if (timestamp < cutoff || timestamp > now) return;

        const hourIndex = Math.min(23, Math.floor((timestamp - cutoff) / HOUR_MS));
        const binKey = normalized.node;
        const binReadings = readingsByHourAndBin[hourIndex];
        const totals = binReadings.get(binKey) ?? { nh3Total: 0, ch4Total: 0, readingCount: 0 };
        totals.nh3Total += normalized.nh3;
        totals.ch4Total += normalized.ch4;
        totals.readingCount += 1;
        binReadings.set(binKey, totals);
      });

      const history = readingsByHourAndBin.flatMap((binReadings, hourIndex) => {
        const perBinAverages = Array.from(binReadings.values());
        if (perBinAverages.length === 0) return [];

        const timestamp = cutoff + (hourIndex + 1) * HOUR_MS;
        const nh3 = perBinAverages.reduce((sum, item) => sum + item.nh3Total / item.readingCount, 0) / perBinAverages.length;
        const ch4 = perBinAverages.reduce((sum, item) => sum + item.ch4Total / item.readingCount, 0) / perBinAverages.length;
        return {
          timestamp,
          time: new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          nh3,
          ch4,
          rotIndex: (nh3 + ch4) / 2,
        };
      });

      const latestByBin = new Map<string, any>();
      normalizedRecords.forEach((record) => {
        const existing = latestByBin.get(record.node);
        if (!existing || record.timestampMs >= existing.timestampMs) {
          latestByBin.set(record.node, record);
        }
      });

      const latestRecords = Array.from(latestByBin.values());

      const avgNh3Value = latestRecords.length
        ? latestRecords.reduce((sum, rec) => sum + rec.nh3, 0) / latestRecords.length
        : 0;
      const avgCh4Value = latestRecords.length
        ? latestRecords.reduce((sum, rec) => sum + rec.ch4, 0) / latestRecords.length
        : 0;
      const highRotBinCount = latestRecords.filter((rec) => {
        return getRotLevel(rec.mq135Ppm, rec.mq4Ppm) === 'High';
      }).length;

      const topRot = Array.from(
        new Map(
          [...latestRecords]
            .map((rec) => {
              const sensorLabel = rec.node;
              return {
                key: `${sensorLabel}::${rec.id}`,
                label: sensorLabel,
                bin: sensorLabel,
                level: getRotLevel(rec.mq135Ppm, rec.mq4Ppm),
                rotIndex: (rec.nh3 + rec.ch4) / 2,
              };
            })
            .filter((item) => item.bin || item.label)
            .map((item) => [item.key, item] as const)
        ).values()
      )
        .sort((a, b) => b.rotIndex - a.rotIndex)
        .slice(0, 6);

      setAvgNh3(avgNh3Value);
      setAvgCh4(avgCh4Value);
      setHighRotBins(highRotBinCount);
      setHistoricalData(history);
      setBinRotData(topRot);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Rot Index & Environmental Monitoring</h2>
        <p className="text-gray-900 font-semibold">Track odor and gas data from smart bins</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average NH₃ (Ammonia)</p>
                <p className="text-2xl font-bold">{avgNh3.toFixed(1)} ppm</p>
              </div>
              <Wind className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Average CH₄ (Methane)</p>
                <p className="text-2xl font-bold text-gray-900">{avgCh4.toFixed(1)} ppm</p>
              </div>
              <Wind className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">High Rot Index Bins</p>
                <p className="text-2xl font-bold text-gray-900">{highRotBins}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>24-Hour Gas Level Trends</CardTitle>
        </CardHeader>
        <CardContent>
          {historicalData.length === 0 ? (
            <div className="flex h-[300px] items-center justify-center text-sm text-gray-500" role="status">
              No gas readings recorded in the last 24 hours.
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="nh3" stroke="#f59e0b" name="NH₃ (Ammonia) (ppm)" strokeWidth={2} dot key="nh3-line" />
                <Line type="monotone" dataKey="ch4" stroke="#3b82f6" name="CH₄ (Methane) (ppm)" strokeWidth={2} dot key="ch4-line" />
                <Line type="monotone" dataKey="rotIndex" stroke="#ef4444" name="Rot Index" strokeWidth={2} dot key="rot-line" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest Bin ROT Index by Severity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={binRotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip formatter={(value: number) => [`${value.toFixed(1)}`, 'Rot Index']} labelFormatter={(label) => `Sensor: ${label}`} />
              <Bar dataKey="rotIndex" name="Rot Index" key="rot-bar">
                {binRotData.map((record) => {
                  const color = ROT_LEVELS.find((level) => level.label === record.level)?.color ?? '#22c55e';
                  return <Cell key={record.key} fill={color} />;
                })}
                <LabelList dataKey="rotIndex" position="top" formatter={(value: number) => value.toFixed(1)} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2" aria-label="Rot index severity legend">
            {ROT_LEVELS.map(({ label, color }, index) => (
              <div key={label} className="flex items-center gap-2 text-sm text-gray-700">
                <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
                <span>{label}</span>
                {index === 0 && <span className="text-xs text-gray-500">(MQ-135 200–600, MQ-4 100–500 ppm)</span>}
                {index === 1 && <span className="text-xs text-gray-500">(MQ-135 601–1500, MQ-4 501–1200 ppm)</span>}
                {index === 2 && <span className="text-xs text-gray-500">(MQ-135 &gt; 1500, MQ-4 &gt; 1200 ppm)</span>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
