// ============================================================================
// ROT INDEX - Monitor decomposition and gas production metrics
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { normalizeSensorRecord } from '../../lib/gasConversion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Wind, AlertTriangle } from 'lucide-react';

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
    const sensorDataRef = ref(db, 'sensor_data');
    const unsubscribe = onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      const records = data
        ? Object.entries(data)
            .map(([key, value]) => normalizeSensorRecord(key, value))
            .sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0))
        : [];

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

      const history = latestRecords.slice(-24).map((rec) => ({
        time: rec.timestamp
          ? new Date(rec.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
          : rec.id,
        nh3: rec.nh3,
        ch4: rec.ch4,
        rotIndex: (rec.nh3 + rec.ch4) / 2,
      }));

      const resolveBinLabel = (rec: any) => {
        const raw = String(rec.node ?? rec.location ?? rec.id ?? 'Unknown');
        const normalized = raw.toUpperCase().replace(/\s+/g, '');

        if (normalized === 'NODE1' || normalized === 'NODE=1' || normalized === 'NODE=01') {
          return 'BIN-10';
        }

        if (!raw || raw === 'Unknown' || raw.toLowerCase() === 'unknown' || normalized.startsWith('NODE=')) {
          return null;
        }

        return raw;
      };

      const topRot = [...latestRecords]
        .map((rec) => ({
          bin: resolveBinLabel(rec),
          rotIndex: (rec.nh3 + rec.ch4) / 2,
        }))
        .filter((item) => item.bin)
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
          <CardTitle>Bins with Highest Rot Index</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={binRotData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bin" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rotIndex" fill="#ef4444" name="Rot Index" key="rot-bar" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
