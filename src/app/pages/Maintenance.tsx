// ============================================================================
// MAINTENANCE - Manage system maintenance and scheduling
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ref, set, onValue, remove } from 'firebase/database';
import { db } from '../../firebase';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Battery, Wifi, Activity, AlertTriangle, CheckCircle, Wrench, X, Search, Edit, Trash2 } from 'lucide-react';

// ============================================================================
// MODAL COMPONENTS
// ============================================================================
const ScheduleMaintenanceModal = ({
  isOpen,
  onClose,
  systemId,
  onSchedule,
}: {
  isOpen: boolean;
  onClose: () => void;
  systemId: string;
  onSchedule: (date: string) => void;
}) => {
  const [maintenanceDate, setMaintenanceDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSchedule(maintenanceDate);
    setMaintenanceDate('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-6 z-50 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Schedule Maintenance</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              System: <span className="font-semibold">{systemId}</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Select Maintenance Date
                </label>
                <input
                  type="date"
                  value={maintenanceDate}
                  onChange={(e) => setMaintenanceDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 text-gray-900 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium text-sm"
                >
                  Schedule
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-6 z-50 w-full max-w-md"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 mb-6">{message}</p>
            <div className="flex gap-3">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1 text-sm">
                Cancel
              </Button>
              <Button
                type="button"
                onClick={onConfirm}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm"
              >
                Confirm
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const AddBinModal = ({
  isOpen,
  onClose,
  onAddBin,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAddBin: (bin: any) => void;
}) => {
  const [binId, setBinId] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!binId || !location) {
      alert('Please fill in all required fields');
      return;
    }

    const newSystem = {
      id: binId,
      location,
      sensors: 'online',
      battery: 100,
      connectivity: 'excellent',
      lastMaintenance: 'Just added',
      status: 'good',
      scheduledDate: null,
    };

    onAddBin(newSystem);
    setBinId('');
    setLocation('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-6 z-50 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Add New System</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">System ID</label>
                <Input
                  placeholder="e.g., BIN-010"
                  value={binId}
                  onChange={(e) => setBinId(e.target.value)}
                  className="text-gray-900 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Location</label>
                <Input
                  placeholder="e.g., Main Street Plaza"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-gray-900 text-sm"
                  required
                />
              </div>

              <div className="flex gap-2 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 text-gray-900 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-medium text-sm"
                >
                  Add System
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function Maintenance() {
  const [systems, setSystems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddBinModalOpen, setIsAddBinModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState<{
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  // ✅ Load bins from Firebase in real-time
  useEffect(() => {
    const binsRef = ref(db, 'bins');
    const unsubscribe = onValue(binsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loaded = Object.entries(data).map(([key, value]: [string, any]) => ({
          id: key,
          location: value.location ?? '',
          sensors: value.sensors ?? 'online',
          battery: value.battery ?? 100,
          connectivity: value.connectivity ?? 'excellent',
          lastMaintenance: value.lastMaintenance ?? 'Unknown',
          status: value.status ?? 'good',
          scheduledDate: value.scheduledDate ?? null,
        }));
        setSystems(loaded);
      } else {
        setSystems([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const openMaintenanceModal = (systemId: string) => {
    setSelectedSystem(systemId);
    setIsModalOpen(true);
  };

  const closeMaintenanceModal = () => {
    setIsModalOpen(false);
  };

  // ✅ Save scheduled date to Firebase
  const handleScheduleMaintenance = async (date: string) => {
    try {
      await set(ref(db, `bins/${selectedSystem}/scheduledDate`), date);
    } catch (error) {
      console.error('Failed to save scheduled date:', error);
      alert('Unable to save maintenance date. Check your database connection.');
    }
  };

  // ✅ Save new bin to Firebase (onValue listener will auto-update the list)
  const handleAddBin = async (newSystem: any) => {
    try {
      await set(ref(db, `bins/${newSystem.id}`), newSystem);
      alert(`System ${newSystem.id} added successfully`);
    } catch (error) {
      console.error('Failed to save new bin:', error);
      alert('Unable to save new bin. Check your database connection.');
    }
  };

  // ✅ Remove bin from Firebase (onValue listener will auto-update the list)
  const handleRemoveSystem = (systemId: string) => {
    setConfirmAction({
      title: 'Remove System',
      message: `Are you sure you want to remove system ${systemId}? This action cannot be undone.`,
      onConfirm: async () => {
        try {
          await remove(ref(db, `bins/${systemId}`));
          alert(`System ${systemId} has been removed`);
        } catch (error) {
          console.error('Failed to remove bin:', error);
          alert('Unable to remove bin from database.');
        }
        setIsConfirmOpen(false);
      },
    });
    setIsConfirmOpen(true);
  };

  const filteredSystems = systems.filter(
    (system) =>
      system.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      system.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'critical':
        return <Badge variant="destructive">Critical</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-500 text-white">Warning</Badge>;
      default:
        return <Badge className="bg-green-500 text-white">Good</Badge>;
    }
  };

  const getBatteryColor = (level: number) => {
    if (level < 20) return 'text-red-600';
    if (level < 50) return 'text-yellow-500';
    return 'text-green-600';
  };

  const getConnectivityColor = (level: string) => {
    if (level === 'poor') return 'text-red-600';
    if (level === 'good') return 'text-yellow-500';
    return 'text-green-600';
  };

  const criticalCount = systems.filter((s) => s.status === 'critical').length;
  const warningCount = systems.filter((s) => s.status === 'warning').length;
  const goodCount = systems.filter((s) => s.status === 'good').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Maintenance & System Health</h2>
          <p className="text-gray-900 font-semibold">Monitor IoT device status and maintenance needs</p>
        </div>
        <div className="flex items-end flex-col gap-2 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
            <Input
              placeholder="Search Bins..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-gray-900 font-medium text-sm w-full sm:w-55"
            />
          </div>
          <Button
            onClick={() => setIsAddBinModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:w-30"
          >
            Add New Bin
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Critical Issues</p>
                <p className="text-2xl font-bold text-red-600">{criticalCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Warnings</p>
                <p className="text-2xl font-bold text-yellow-500">{warningCount}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Operating Normal</p>
                <p className="text-2xl font-bold text-green-600">{goodCount}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bin List */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500" />
            <span className="ml-3 text-gray-600">Loading systems...</span>
          </div>
        ) : filteredSystems.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              {searchQuery ? 'No systems match your search.' : 'No systems found. Add a new bin to get started.'}
            </CardContent>
          </Card>
        ) : (
          filteredSystems.map((system) => (
            <Card key={system.id}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <p className="font-bold text-lg text-gray-900">{system.id}</p>
                      {getStatusBadge(system.status)}
                    </div>
                    <p className="text-sm text-gray-900 font-medium mb-4">{system.location}</p>

                    <div className="flex gap-6 overflow-x-auto pb-2">
                      <div className="min-w-max">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Activity className="h-4 w-4" />
                          <span>Sensors</span>
                        </div>
                        <p className={`font-bold ${system.sensors === 'online' ? 'text-green-600' : 'text-red-600'}`}>
                          {system.sensors === 'online' ? 'Online' : 'Offline'}
                        </p>
                      </div>

                      <div className="min-w-max">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Battery className="h-4 w-4" />
                          <span>Battery</span>
                        </div>
                        <p className={`font-bold ${getBatteryColor(system.battery)}`}>
                          {system.battery}%
                        </p>
                      </div>

                      <div className="min-w-max">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Wifi className="h-4 w-4" />
                          <span>Connectivity</span>
                        </div>
                        <p className={`font-bold capitalize ${getConnectivityColor(system.connectivity)}`}>
                          {system.connectivity}
                        </p>
                      </div>

                      <div className="min-w-max">
                        <p className="text-sm text-gray-600 mb-1">Last Maintenance</p>
                        <p className="font-bold text-sm">{system.lastMaintenance}</p>
                      </div>

                      {system.scheduledDate && (
                        <div className="min-w-max">
                          <p className="text-sm text-gray-600 mb-1">Scheduled Maintenance</p>
                          <p className="font-bold text-sm text-green-600">{system.scheduledDate}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {system.status !== 'good' && (
                      <Button
                        onClick={() => openMaintenanceModal(system.id)}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white text-xs"
                      >
                        {system.scheduledDate ? (
                          <>
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </>
                        ) : (
                          <>
                            <Wrench className="h-3 w-3 mr-1" />
                            Schedule
                          </>
                        )}
                      </Button>
                    )}
                    <Button
                      onClick={() => handleRemoveSystem(system.id)}
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white text-xs"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <ScheduleMaintenanceModal
        isOpen={isModalOpen}
        onClose={closeMaintenanceModal}
        systemId={selectedSystem}
        onSchedule={handleScheduleMaintenance}
      />
      <ConfirmationModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmAction?.onConfirm || (() => {})}
        title={confirmAction?.title || ''}
        message={confirmAction?.message || ''}
      />
      <AddBinModal
        isOpen={isAddBinModalOpen}
        onClose={() => setIsAddBinModalOpen(false)}
        onAddBin={handleAddBin}
      />
    </div>
  );
}