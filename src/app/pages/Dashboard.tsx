// ============================================================================
// DASHBOARD - Main dashboard overview with metrics and charts
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ref, onValue } from 'firebase/database';
import { db, subscribeBins } from '../../firebase';
import { normalizeSensorRecord } from '../../lib/gasConversion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Trash2, AlertCircle, Wind, Droplet } from 'lucide-react';

// ============================================================================
// DATA & CONSTANTS
// ============================================================================
const recentAlerts: any[] = [];
const weeklyCollections: any[] = [];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function Dashboard() {
  const [stats, setStats] = useState({
    totalBins: 0,
    fullBins: 12,
    highRotIndex: 8,
    activeNeutralization: 3,
  });
  const [gasLevels, setGasLevels] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribeBins = subscribeBins((bins) => {
      setStats((prev) => ({ ...prev, totalBins: bins.length }));
    });

    return () => unsubscribeBins();
  }, []);

  useEffect(() => {
    const sensorDataRef = ref(db, 'sensor_data');
    const unsubscribe = onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      const records = data
        ? Object.entries(data)
            .map(([key, value]) => normalizeSensorRecord(key, value))
            .sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0))
        : [];

      const binIds = new Set(records.map((rec) => rec.id));
      const fullBins = records.filter((rec) => rec.weight >= 80).length;
      const highRotIndex = records.filter((rec) => rec.nh3 > 25 || rec.ch4 > 50).length;
      const activeNeutralization = records.filter((rec) => rec.nh3 > 35 || rec.ch4 > 70).length;

      const points = records.slice(-24).map((rec) => ({
        time: rec.timestamp
          ? new Date(rec.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
          : rec.id,
        nh3: rec.nh3,
        ch4: rec.ch4,
      }));

      setStats((prev) => ({
        ...prev,
        totalBins: binIds.size || prev.totalBins,
        fullBins,
        highRotIndex,
        activeNeutralization,
      }));
      setGasLevels(points);
    });

    return () => unsubscribe();
  }, []);

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'success': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
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
          { title: 'High Rot Index', value: stats.highRotIndex, desc: 'Above threshold level', icon: Wind, iconColor: 'text-orange-600' },
          { title: 'Active Neutralization', value: stats.activeNeutralization, desc: 'Odor control events', icon: Droplet, iconColor: 'text-blue-600' },
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

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Alerts */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }}>
          <Card className="h-full">
            <CardHeader><CardTitle>Recent Alerts & Notifications</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className={`flex items-start gap-3 rounded-lg border p-3 ${getAlertColor(alert.type)}`}>
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-gray-900">{alert.bin}</p>
                      <p className="text-sm text-gray-900 font-medium">{alert.message}</p>
                      <p className="text-xs mt-1 font-medium text-gray-800">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Weekly Collections */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }}>
          <Card className="h-full flex flex-col">
            <CardHeader><CardTitle>Weekly Collections</CardTitle></CardHeader>
            <CardContent className="flex-1">
              <ResponsiveContainer width="100%" height="100%" minHeight={250}>
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
      </div>

      {/* Gas Levels Chart */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 }}>
        <Card>
          <CardHeader><CardTitle>Average Gas Levels (24h)</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height="100%" minHeight={350}>
              <LineChart data={gasLevels}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="nh3" stroke="#f59e0b" name="NH₃ (Ammonia) (ppm)" strokeWidth={2} />
                <Line type="monotone" dataKey="ch4" stroke="#3b82f6" name="CH₄ (Methane) (ppm)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
