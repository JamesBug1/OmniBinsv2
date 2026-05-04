// ============================================================================
// ROT INDEX - Monitor decomposition and gas production metrics
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Wind, AlertTriangle } from 'lucide-react';

// ============================================================================
// DATA & CONSTANTS
// ============================================================================
// Sample data removed - connect to your database for live rot index data
const historicalData: any[] = [];
const binRotData: any[] = [];

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function RotIndex() {
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
                <p className="text-2xl font-bold">24.7 ppm</p>
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
                <p className="text-2xl font-bold text-gray-900">29.8 ppm</p>
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
                <p className="text-2xl font-bold text-gray-900">8</p>
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
