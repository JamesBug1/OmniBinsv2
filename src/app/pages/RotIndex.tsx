// ============================================================================
// ROT INDEX - Monitor decomposition and gas production metrics
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db, subscribeSensorData } from '../../firebase';
import { normalizeSensorRecord } from '../../lib/gasConversion';
import { isSensorLinkedToRegisteredBin } from '../../lib/binSensorLink';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Wind, AlertTriangle } from 'lucide-react';

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

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
  const [registeredBins, setRegisteredBins] = useState<any[]>([]);

  useEffect(() => {
    return onValue(ref(db, 'bins'), (snapshot) => {
      const data = snapshot.val() ?? {};
      setRegisteredBins(Object.entries(data).map(([id, value]) => ({
        id,
        ...(typeof value === 'object' && value !== null ? value : {}),
      })));
    });
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeSensorData((sensorRecords) => {
      const now = Date.now();
      const cutoff = now - DAY_MS;
      const readingsByHourAndBin = Array.from({ length: 24 }, () => new Map<string, {
        nh3Total: number;
        ch4Total: number;
        readingCount: number;
      }>());

      sensorRecords.forEach((item) => {
        const normalized = { ...normalizeSensorRecord(item.id, item), id: item.id, branch: item.branch };
        if (!isSensorLinkedToRegisteredBin(normalized, registeredBins)) return;

        const timestamp = parseSensorTimestamp(item.timestamp ?? item.time ?? item.updatedAt);
        if (timestamp < cutoff || timestamp > now) return;

        const hourIndex = Math.min(23, Math.floor((timestamp - cutoff) / HOUR_MS));
        const binKey = String(normalized.node ?? normalized.location ?? normalized.id ?? 'unknown-bin').trim();
        const binReadings = readingsByHourAndBin[hourIndex];
        const totals = binReadings.get(binKey) ?? { nh3Total: 0, ch4Total: 0, readingCount: 0 };
        totals.nh3Total += normalized.nh3;
        totals.ch4Total += normalized.ch4;
        totals.readingCount += 1;
        binReadings.set(binKey, totals);
      });

      const history = readingsByHourAndBin.map((binReadings, hourIndex) => {
        const perBinAverages = Array.from(binReadings.values());
        const timestamp = cutoff + (hourIndex + 1) * HOUR_MS;
        if (perBinAverages.length === 0) {
          return { timestamp, time: new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), nh3: null, ch4: null, rotIndex: null };
        }

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

      const dedupedByNode = new Map<string, any>();
      sensorRecords.forEach((item) => {
        const normalized = { ...normalizeSensorRecord(item.id, item), id: item.id, branch: item.branch };
        if (!isSensorLinkedToRegisteredBin(normalized, registeredBins)) return;
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

      const latestRecords = Array.from(latestByBin.values());

      const avgNh3Value = latestRecords.length
        ? latestRecords.reduce((sum, rec) => sum + rec.nh3, 0) / latestRecords.length
        : 0;
      const avgCh4Value = latestRecords.length
        ? latestRecords.reduce((sum, rec) => sum + rec.ch4, 0) / latestRecords.length
        : 0;
      const highRotBinCount = latestRecords.filter((rec) => rec.nh3 > 25 || rec.ch4 > 50).length;

      const topRot = Array.from(
        new Map(
          [...latestRecords]
            .map((rec) => {
              const matchedBin = registeredBins.find((bin) => isSensorLinkedToRegisteredBin(rec, [bin]));
              const sensorLabel = String(rec.node ?? rec.location ?? rec.id ?? 'unknown-bin');
              return {
                key: `${matchedBin?.id ?? 'unknown-bin'}::${sensorLabel}`,
                label: sensorLabel,
                bin: matchedBin?.id ?? null,
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
  }, [registeredBins]);

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
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="nh3" stroke="#f59e0b" name="NH₃ (Ammonia) (ppm)" strokeWidth={2} key="nh3-line" />
              <Line type="monotone" dataKey="ch4" stroke="#3b82f6" name="CH₄ (Methane) (ppm)" strokeWidth={2} key="ch4-line" />
              <Line type="monotone" dataKey="rotIndex" stroke="#ef4444" name="Rot Index" strokeWidth={2} key="rot-line" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Latest Bins Records with High Rot Index</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={binRotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip formatter={(value: number) => [`${value.toFixed(1)}`, 'Rot Index']} labelFormatter={(label) => `Sensor: ${label}`} />
              <Bar dataKey="rotIndex" fill="#ef4444" name="Rot Index" key="rot-bar" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
