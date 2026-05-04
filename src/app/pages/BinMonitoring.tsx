// ============================================================================
// BIN MONITORING - Real-time monitoring of smart waste bins
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, MapPin, Weight, Wind, User } from 'lucide-react';

// ============================================================================
// DATA & CONSTANTS
// ============================================================================
// Sample data removed - connect to your database for live bin data
const initialBins: any[] = [];
const collectionsData: any[] = [];
const teams: string[] = [];

// ============================================================================
// MODAL COMPONENTS
// ============================================================================
// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function BinMonitoring() {
  const [bins, setBins] = useState(initialBins);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskList, setTaskList] = useState(collectionsData);

  const getCollectionStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-500 text-white">Pending</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-500 text-white">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-green-500 text-white">Completed</Badge>;
      default:
        return <Badge className="bg-gray-500 text-white">Unknown</Badge>;
    }
  };

  const getTaskForBin = (binId: string) => taskList.find(task => task.bin === binId);

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-500 text-white">Medium</Badge>;
      default:
        return <Badge className="bg-gray-500 text-white">Low</Badge>;
    }
  };

  const assignTeam = (taskId: number, team: string) => {
    setTaskList(prev => prev.map(task => task.id === taskId ? { ...task, assignedTo: team, status: 'in-progress' } : task));
  };

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setBins(prev =>
        prev.map(bin => ({
          ...bin,
          weight: Math.max(5, Math.min(50, bin.weight + (Math.random() - 0.5) * 2)),
          capacity: Math.max(10, Math.min(100, bin.capacity + (Math.random() - 0.5) * 3)),
          nh3: Math.max(5, Math.min(50, bin.nh3 + (Math.random() - 0.5) * 2)),
          ch4: Math.max(5, Math.min(50, bin.ch4 + (Math.random() - 0.5) * 2)),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTaskList(prev => prev.map(task => {
      const bin = bins.find((bin) => bin.id === task.bin);
      if (!bin) return task;

      const shouldAutoComplete = bin.weight < 20 && bin.status === 'Normal';
      if (shouldAutoComplete && task.status !== 'completed') {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        return { ...task, status: 'completed', completedAt: timeString };
      }

      return task;
    }));
  }, [bins]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Full':
        return <Badge className="bg-red-600 text-white">Full</Badge>;
      case 'Near Full':
        return <Badge className="bg-yellow-500 text-white">Near Full</Badge>;
      case 'High Gas Level':
        return <Badge className="bg-orange-500 text-white">High Gas</Badge>;
      case 'Empty':
        return <Badge className="bg-green-600 text-white">Empty</Badge>;
      default:
        return <Badge className="bg-green-600 text-white">Normal</Badge>;
    }
  };

  const filteredBins = bins.filter(bin => {
    return (
      bin.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bin.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Bin Monitoring & Collections</h2>
          <p className="text-gray-900 font-semibold">Real-time bin status and collection task management in one view</p>
        </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
          <div className="relative w-full sm:w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
            <Input
              placeholder="Search Bins..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-gray-900 font-medium text-sm w-full"
            />
          </div>
        </div>
      </div>

      {/* Bins Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredBins.map((bin, index) => (
          <motion.div
            key={bin.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{bin.id}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4" />
                      {bin.location}
                    </div>
                  </div>
                  {getStatusBadge(bin.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Weight */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Weight className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">Weight</span>
                  </div>
                  <span className="text-sm font-bold">{bin.weight.toFixed(1)} kg</span>
                </div>

                {/* Capacity */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="font-medium">Capacity</span>
                    <span className="font-bold">{Math.round(bin.capacity)}%</span>
                  </div>
                  <Progress value={bin.capacity} className="h-2" />
                </div>

                {/* Gas Levels */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                      <Wind className="h-3 w-3" />
                      NH₃ (Ammonia)
                    </div>
                    <p className="text-lg font-bold">{bin.nh3.toFixed(1)} ppm</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                      <Wind className="h-3 w-3" />
                      CH₄ (Methane)
                    </div>
                    <p className="text-lg font-bold">{bin.ch4.toFixed(1)} ppm</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="font-medium">Collection status</span>
                    <span className="font-medium">Assigned team</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      {getTaskForBin(bin.id)
                        ? getCollectionStatusBadge(getTaskForBin(bin.id)!.status)
                        : <Badge className="bg-gray-500 text-white">No task</Badge>}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <User className="h-4 w-4 text-gray-400" />
                      <span>{getTaskForBin(bin.id)?.assignedTo ?? 'Unassigned'}</span>
                    </div>
                  </div>

                  {getTaskForBin(bin.id) && getTaskForBin(bin.id)!.status === 'pending' && (
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {teams.map((team) => (
                        <Button
                          key={team}
                          size="sm"
                          onClick={() => assignTeam(getTaskForBin(bin.id)!.id, team)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          {team}
                        </Button>
                      ))}
                    </div>
                  )}

                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}