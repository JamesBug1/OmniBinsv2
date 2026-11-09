// ============================================================================
// MAINTENANCE - Manage system maintenance and scheduling
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ref, set, onValue, remove, push, get } from 'firebase/database';
import { db, auth, subscribeSensorData } from '../../firebase';
import { Card, CardContent } from '../components/ui/card';
import { isSensorLinkedToBin } from '../../lib/binSensorLink';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Activity, AlertTriangle, CheckCircle, Wrench, X, Search, Edit, Trash2 } from 'lucide-react';

function parseSensorTimestamp(value: unknown): number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value > 1e12 ? value : value > 1e9 ? value * 1000 : 0;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return 0;

    const asNumber = Number(trimmed);
    if (Number.isFinite(asNumber)) {
      return asNumber > 1e12 ? asNumber : asNumber > 1e9 ? asNumber * 1000 : 0;
    }

    const parsed = Date.parse(trimmed);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

const SENSOR_HISTORY_BRANCHES = ['sensor_data', 'sensor_data1', 'sensor_data2', 'sensor_data3', 'sensor_data4'];
const normalizeSensorName = (value: unknown) => String(value ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');

function getMaintenanceCompletionTime(task: any): number {
  const value = task.completedAt ?? task.finishedAt ?? task.completed_at ?? task.finished_at;
  const timestamp = typeof value === 'number' ? value : Date.parse(String(value ?? ''));
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function formatMaintenanceDate(value: unknown): string {
  const timestamp = typeof value === 'number' ? value : Date.parse(String(value ?? ''));
  return Number.isFinite(timestamp) ? new Date(timestamp).toLocaleDateString() : 'None';
}

function getLastMaintenanceLabel(value: unknown): string {
  const label = String(value ?? '').trim();
  return !label || ['just added', 'unknown'].includes(label.toLowerCase()) ? 'None' : label;
}

async function findSensorRecordPaths(bin: any): Promise<string[]> {
  const branchRecords = await Promise.all(SENSOR_HISTORY_BRANCHES.map(async (branch) => {
    const snapshot = await get(ref(db, branch));
    const data = snapshot.val();
    if (!data || typeof data !== 'object') return [];

    return Object.entries(data)
      .filter(([, value]) => value && typeof value === 'object')
      .filter(([key, value]: [string, any]) => isSensorLinkedToBin({ id: key, ...value }, bin))
      .map(([key]) => `${branch}/${key}`);
  }));

  return branchRecords.flat();
}

// ============================================================================
// MODAL COMPONENTS
// ============================================================================
const ScheduleMaintenanceModal = ({
  isOpen,
  onClose,
  systemId,
  users,
  onSchedule,
  initialDate,
  initialTaskType,
  initialDescription,
  initialUserId,
}: {
  isOpen: boolean;
  onClose: () => void;
  systemId: string;
  users: any[];
  onSchedule: (date: string, userId: string, taskType: string, description?: string) => void;
  initialDate?: string;
  initialTaskType?: string;
  initialDescription?: string;
  initialUserId?: string;
}) => {
  const [maintenanceDate, setMaintenanceDate] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [taskType, setTaskType] = useState('maintenance');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setMaintenanceDate(initialDate ?? '');
      setTaskType(initialTaskType ?? 'maintenance');
      setDescription(initialDescription ?? '');
      setSelectedUserId(initialUserId ?? '');
    }
  }, [isOpen, initialDate, initialTaskType, initialDescription, initialUserId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!maintenanceDate || !selectedUserId) {
      alert('Please select a maintenance date and assign a user.');
      return;
    }
    if (!taskType) {
      alert('Please select a task type.');
      return;
    }
    onSchedule(maintenanceDate, selectedUserId, taskType, description);
    setMaintenanceDate('');
    setSelectedUserId('');
    setDescription('');
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
                <label className="block text-sm font-medium text-gray-900 mb-1">Task Type</label>
                <select
                  value={taskType}
                  onChange={(e) => setTaskType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="maintenance">Schedule Maintenance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">Description (optional)</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Add notes or instructions for the scheduled task"
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 h-24 text-sm"
                />
              </div>
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

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Assign to user
                </label>
                <select
                  value={selectedUserId}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select a user</option>
                  {users
                    .filter((user) => user?.status !== 'rejected' && user?.status !== 'pending')
                    .map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name || user.email || user.id}
                      </option>
                    ))}
                </select>
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
  const [sensorDataName, setSensorDataName] = useState('');
  const [manualSensorDataName, setManualSensorDataName] = useState('');
  const [availableSensorNames, setAvailableSensorNames] = useState<string[]>([]);
  const [usedSensorNames, setUsedSensorNames] = useState<Set<string>>(() => new Set());
  const unusedSensorNames = availableSensorNames.filter((name) => !usedSensorNames.has(normalizeSensorName(name)));

  const activeSensorDataName = sensorDataName || manualSensorDataName;

  useEffect(() => {
    if (!isOpen) return;
    if (!auth.currentUser) {
      setAvailableSensorNames([]);
      return;
    }

    const sensorBranches = ['sensor_data', 'sensor_data1', 'sensor_data2', 'sensor_data3', 'sensor_data4'];

    const loadSensorNames = async () => {
      try {
        const [branchEntries, binsSnapshot] = await Promise.all([
          sensorBranches.map(async (branchName) => {
            const snapshot = await get(ref(db, branchName));
            const branchValue = snapshot.val();
            if (typeof branchValue !== 'object' || branchValue === null) return [];
            return Object.entries(branchValue as Record<string, unknown>);
          }),
          get(ref(db, 'bins')),
        ]);

        const bins = binsSnapshot.val() as Record<string, Record<string, unknown>> | null;
        setUsedSensorNames(new Set(Object.values(bins ?? {}).flatMap((bin) => [
          bin.sensorDataName,
          bin.node,
          bin.sensorNode,
          bin.sensorId,
          bin.sensor_id,
        ].map(normalizeSensorName).filter(Boolean))));

        const sensorEntries = branchEntries.flat();
        const names = Array.from(new Set(
          sensorEntries.flatMap(([, value]) => {
            const record: Record<string, unknown> = typeof value === 'object' && value !== null
              ? value as Record<string, unknown>
              : {};

            const nodeName = typeof record.node === 'string' ? record.node.trim() : '';
            return nodeName ? [nodeName] : [];
          })
        )).filter((name) => name && name.toLowerCase() !== 'null').sort((a, b) => a.localeCompare(b));

        setAvailableSensorNames(names);
      } catch (error) {
        console.error('Failed to load sensor names:', error);
        setAvailableSensorNames([]);
      }
    };

    loadSensorNames();
    return () => undefined;
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert('Please sign in to validate sensor data.');
      return;
    }
    if (!binId || !activeSensorDataName) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const binsSnapshot = await (await import('firebase/database')).get(ref(db, 'bins'));
      const existingBins = binsSnapshot.val() || {};
      const normalizedNewId = binId.trim();

      if (Object.prototype.hasOwnProperty.call(existingBins, normalizedNewId)) {
        alert(`System ID "${normalizedNewId}" already exists. Please use a unique bin number.`);
        return;
      }

      const normalizedSensorName = normalizeSensorName(activeSensorDataName);
      const sensorNameAlreadyUsed = Object.values(existingBins as Record<string, Record<string, unknown>>).some((bin) =>
        [bin.sensorDataName, bin.node, bin.sensorNode, bin.sensorId, bin.sensor_id]
          .some((name) => normalizeSensorName(name) === normalizedSensorName)
      );
      if (sensorNameAlreadyUsed) {
        alert(`Sensor Data Name "${activeSensorDataName.trim()}" is already assigned to another bin. Please select an unused sensor.`);
        return;
      }

      const sensorBranches = ['sensor_data', 'sensor_data1', 'sensor_data2', 'sensor_data3', 'sensor_data4'];
      const branchEntries = await Promise.all(
        sensorBranches.map(async (branchName) => {
          const snapshot = await (await import('firebase/database')).get(ref(db, branchName));
          const branchValue = snapshot.val();
          if (typeof branchValue !== 'object' || branchValue === null) return [];
          return Object.entries(branchValue as Record<string, unknown>);
        })
      );

      const sensorEntries = branchEntries.flat();
      const validSensorNames = Array.from(new Set(
        sensorEntries.flatMap(([, value]) => {
          const record: Record<string, unknown> = typeof value === 'object' && value !== null
            ? value as Record<string, unknown>
            : {};
          const nodeName = typeof record.node === 'string' ? record.node.trim() : '';
          return nodeName ? [nodeName] : [];
        })
      )).filter((name) => name && name.toLowerCase() !== 'null');

      setAvailableSensorNames(validSensorNames);

      const flattenedSensorEntries = branchEntries.flat();
      const hasMatchingSensor = flattenedSensorEntries.some(([, value]) => {
        const record: Record<string, unknown> = typeof value === 'object' && value !== null
          ? value as Record<string, unknown>
          : {};
        const normalize = (name: unknown) => String(name ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const enteredName = normalize(activeSensorDataName);
        const nodeName = typeof record.node === 'string' ? record.node.trim() : '';
        return nodeName ? normalize(nodeName) === enteredName : false;
      });

      if (!hasMatchingSensor) {
        const hint = validSensorNames.length > 0
          ? ` Available names: ${validSensorNames.slice(0, 10).join(', ')}`
          : ' No matching sensor data found in sensor_data, sensor_data1, or later branches.';
        alert(`Unable to save new bin. Wrong Sensor Data Name.${hint}`);
        return;
      }

      const newSystem: Record<string, any> = {
        id: normalizedNewId,
        sensorDataName: activeSensorDataName.trim(),
        sensors: hasMatchingSensor ? 'online' : 'offline',
        lastMaintenance: 'None',
        status: hasMatchingSensor ? 'good' : 'critical',
        scheduledDate: null,
      };

      onAddBin(newSystem);
      setBinId('');
      setSensorDataName('');
      setManualSensorDataName('');
      onClose();
    } catch (error) {
      console.error('Failed to validate sensor data:', error);
      alert('Unable to validate sensor data. Please try again.');
    }
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
                <label className="block text-sm font-medium text-gray-900 mb-1">Sensor Data Name</label>
                {unusedSensorNames.length > 0 ? (
                  <>
                    <select
                      value={sensorDataName}
                      onChange={(e) => {
                        setSensorDataName(e.target.value);
                        if (e.target.value) setManualSensorDataName('');
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-900"
                      required
                    >
                      <option value="">Select a sensor</option>
                      {unusedSensorNames.map((name) => (
                        <option key={name} value={name}>{name}</option>
                      ))}
                    </select>
                    <p className="mt-2 text-[11px] text-gray-500">
                      Available: {unusedSensorNames.slice(0, 8).join(', ')}
                    </p>
                  </>
                ) : (
                  <Input
                    type="text"
                    placeholder="e.g., BIN-10"
                    value={manualSensorDataName}
                    onChange={(e) => {
                      setManualSensorDataName(e.target.value);
                      setSensorDataName('');
                    }}
                    className="text-gray-900 text-sm"
                    required
                  />
                )}
                {availableSensorNames.length > 0 && unusedSensorNames.length === 0 && (
                  <p className="mt-2 text-[11px] text-amber-700">All detected sensor names are already assigned to bins.</p>
                )}
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
  const [tasks, setTasks] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [liveSensors, setLiveSensors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddBinModalOpen, setIsAddBinModalOpen] = useState(false);
  const [cleaningSensorBinId, setCleaningSensorBinId] = useState<string | null>(null);
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
      console.debug('Realtime bins snapshot raw:', data);
      if (data) {
        const loaded = Object.entries(data).map(([key, value]: [string, any]) => ({
          id: key,
          ...(typeof value === 'object' && value !== null ? value : {}),
          location: value?.location ?? '',
          sensors: value?.sensors ?? 'online',
          battery: value?.battery ?? 100,
          connectivity: value?.connectivity ?? 'excellent',
          lastMaintenance: getLastMaintenanceLabel(value?.lastMaintenance),
          lastMaintenanceAt: value?.lastMaintenanceAt ?? null,
          status: value?.status ?? 'good',
          scheduledDate: value?.scheduledDate ?? null,
          assignedTo: value?.assignedTo ?? 'Unassigned',
          node: value?.node ?? value?.sensorDataName ?? value?.sensorNode ?? value?.sensorId ?? value?.sensor_id ?? key,
          sensorDataName: value?.sensorDataName ?? value?.node ?? value?.sensorNode ?? value?.sensorId ?? value?.sensor_id ?? key,
          sensorNode: value?.sensorNode ?? value?.sensorDataName ?? value?.node ?? value?.sensorId ?? value?.sensor_id ?? key,
          sensorId: value?.sensorId ?? value?.sensorNode ?? value?.sensorDataName ?? value?.node ?? value?.sensor_id ?? key,
        }));
        console.debug('Mapped systems:', loaded);
        setSystems(loaded);
      } else {
        setSystems([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const usersRef = ref(db, 'users');
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data
        ? Object.entries(data).map(([key, value]) => ({
            id: key,
            ...(typeof value === 'object' && value !== null ? value : {}),
          }))
        : [];
      setUsers(loaded);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onValue(ref(db, 'tasks'), (snapshot) => {
      const data = snapshot.val() ?? {};
      setTasks(Object.entries(data).map(([id, value]) => ({
        id,
        ...(typeof value === 'object' && value !== null ? value : {}),
      })));
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeSensorData((sensorRecords) => {
      const dedupedByNode = new Map<string, any>();
      sensorRecords.forEach((item) => {
        const key = String(
          item.node ?? item.sensorDataName ?? item.sensorNode ?? item.sensorId ?? item.location ?? item.id ?? 'unknown-bin'
        ).trim();
        const currentTimestamp = parseSensorTimestamp(item.timestamp ?? item.time ?? item.updatedAt ?? 0);
        const existing = dedupedByNode.get(key);
        const existingTimestamp = existing ? parseSensorTimestamp(existing.timestamp ?? existing.time ?? existing.updatedAt ?? 0) : 0;
        if (!existing || currentTimestamp >= existingTimestamp) {
          dedupedByNode.set(key, item);
        }
      });
      setLiveSensors(Array.from(dedupedByNode.values()));
    });

    return () => unsubscribe();
  }, []);

  const closeMaintenanceModal = () => {
    setIsModalOpen(false);
  };

  // ✅ Save scheduled date and user assignment to Firebase
  const handleScheduleMaintenance = async (date: string, userId: string, taskType: string = 'maintenance', description: string = '') => {
    try {
      // Require an authenticated user to satisfy realtime DB rules
      if (!auth || !auth.currentUser) {
        alert('You must be signed in to schedule maintenance. Please sign in and try again.');
        return;
      }
      if (!date || !userId) {
        alert('Please select both a date and a user.');
        return;
      }

      const selectedUser = users.find((user) => user.id === userId);

      console.log('Scheduling task:', { selectedSystem, date, userId, taskType });

      if (description) {
        await set(ref(db, `bins/${selectedSystem}/lastMaintenanceNote`), description);
      }

      if (selectedUser) {
        // Create a maintenance task using the pushed ref directly so the ref contains the generated key
        const newTaskRef = push(ref(db, 'tasks'));
        const taskId = newTaskRef.key;
        console.log('Creating task ref', taskId);
        const taskRecord = {
          id: taskId,
          type: 'maintenance',
          binId: selectedSystem,
          assignedUserId: selectedUser.id,
          assignedUserName: selectedUser.name || 'User',
          assignedUserEmail: selectedUser.email || '',
          scheduledDate: date,
          description: description || '',
          status: 'pending',
          createdAt: new Date().toISOString(),
        };
        await set(newTaskRef, taskRecord);
        console.log('Task created', taskId);
      }

      alert(`Maintenance scheduled for ${selectedSystem}${selectedUser ? ` and assigned to ${selectedUser.name || selectedUser.email}` : ''}.`);
    } catch (error) {
      console.error('Failed to save maintenance task:', error);
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

  const handleRequestSensorHistoryCleanup = async (system: any) => {
    if (!auth.currentUser) {
      alert('Please sign in before clearing sensor history.');
      return;
    }

    setCleaningSensorBinId(String(system.id));
    try {
      const pathsToDelete = await findSensorRecordPaths(system);
      if (pathsToDelete.length === 0) {
        alert(`No matching sensor records were found for ${system.id}.`);
        return;
      }

      setConfirmAction({
        title: `Clear ${system.id} Sensor Data`,
        message: `Delete all ${pathsToDelete.length} sensor records for ${system.id}, including the latest reading? Only this bin's matching sensor history will be affected. Other bins, bins registry details, users, tasks, and collections will be kept. New readings from an active sensor may appear again.`,
        onConfirm: async () => {
          setCleaningSensorBinId(String(system.id));
          try {
            const currentPaths = await findSensorRecordPaths(system);
            for (let index = 0; index < currentPaths.length; index += 50) {
              await Promise.all(currentPaths.slice(index, index + 50).map((path) => remove(ref(db, path))));
            }
            alert(`Deleted ${currentPaths.length} sensor record(s) for ${system.id}.`);
          } catch (error) {
            console.error(`Failed to clear old sensor data for ${system.id}:`, error);
            alert(`Unable to clear old sensor data for ${system.id}. Please try again.`);
          } finally {
            setCleaningSensorBinId(null);
            setIsConfirmOpen(false);
          }
        },
      });
      setIsConfirmOpen(true);
    } catch (error) {
      console.error(`Failed to scan sensor history for ${system.id}:`, error);
      alert(`Unable to scan sensor history for ${system.id}. Please try again.`);
    } finally {
      setCleaningSensorBinId(null);
    }
  };

  const SENSOR_OFFLINE_AFTER_MS = 5 * 60 * 1000;

  const derivedSystems = systems.map((system) => {
    const liveSensor = liveSensors.find((sensor) => isSensorLinkedToBin(sensor, system));
    const systemMaintenanceTasks = tasks
      .filter((task) => {
        const taskType = String(task.type ?? task.taskType ?? '').trim().toLowerCase();
        const taskBinId = String(task.binId ?? task.bin_id ?? task.bin ?? task.node ?? '').trim();
        return taskType === 'maintenance' && taskBinId === String(system.id);
      });
    const maintenanceTask = systemMaintenanceTasks
      .filter((task) => !['completed', 'cancelled'].includes(String(task.status ?? '').trim().toLowerCase()))
      .sort((a, b) => String(b.createdAt ?? '').localeCompare(String(a.createdAt ?? '')))[0];
    const completedMaintenance = systemMaintenanceTasks
      .filter((task) => String(task.status ?? '').trim().toLowerCase() === 'completed')
      .sort((a, b) => getMaintenanceCompletionTime(b) - getMaintenanceCompletionTime(a))[0];
    const lastMaintenance = completedMaintenance
      ? formatMaintenanceDate(completedMaintenance.completedAt ?? completedMaintenance.finishedAt ?? completedMaintenance.completed_at ?? completedMaintenance.finished_at)
      : system.lastMaintenanceAt
        ? formatMaintenanceDate(system.lastMaintenanceAt)
        : getLastMaintenanceLabel(system.lastMaintenance);
    const assignedUser = maintenanceTask?.assignedUserId
      ? users.find((user) => String(user.id) === String(maintenanceTask.assignedUserId))
      : undefined;
    const hasLiveSensor = Boolean(liveSensor);
    const sensorTimestamp = liveSensor ? parseSensorTimestamp(liveSensor.timestamp ?? liveSensor.time ?? liveSensor.updatedAt ?? 0) : 0;
    const sensorIsRecent = Boolean(liveSensor && sensorTimestamp > 0 && Date.now() - sensorTimestamp < SENSOR_OFFLINE_AFTER_MS);

    const nextStatus = !hasLiveSensor || !sensorIsRecent
      ? 'warning'
      : (Number(liveSensor?.weight ?? 0) >= 60 || Number(liveSensor?.nh3 ?? 0) > 25 || Number(liveSensor?.ch4 ?? 0) > 50)
        ? 'critical'
        : 'good';

    return {
      ...system,
      lastMaintenance,
      sensors: hasLiveSensor && sensorIsRecent ? 'online' : 'offline',
      status: nextStatus,
      liveSensor,
      scheduledDate: maintenanceTask?.scheduledDate ?? null,
      assignedTo: maintenanceTask
        ? maintenanceTask.assignedUserName ?? assignedUser?.name ?? maintenanceTask.assignedTo ?? 'Unassigned'
        : '',
    };
  });

  const filteredSystems = derivedSystems.filter(
    (system) =>
      system.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      system.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'critical':
        return <Badge variant="destructive">Critical</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-500 text-white">Offline</Badge>;
      default:
        return <Badge className="bg-green-500 text-white">Online</Badge>;
    }
  };

  const criticalCount = derivedSystems.filter((s) => s.status === 'critical').length;
  const warningCount = derivedSystems.filter((s) => s.status === 'warning').length;
  const goodCount = derivedSystems.filter((s) => s.status === 'good').length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Maintenance & System Health</h2>
          <p className="text-gray-900 font-semibold">Monitor IoT device status and maintenance needs</p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:items-end">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
            <Input
              placeholder="Search Bins..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-gray-900 font-medium text-sm w-full sm:w-55"
            />
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => setIsAddBinModalOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm"
            >
              Add New Bin
            </Button>
          </div>
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
                      <p className="font-bold text-lg text-gray-900 flex items-center gap-3">
                        {system.id}
                      </p>
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
                        <p className="text-sm text-gray-600 mb-1">Last Maintenance</p>
                        <p className="font-bold text-sm">{system.lastMaintenance}</p>
                      </div>

                      {system.scheduledDate && (
                        <div className="min-w-max">
                          <p className="text-sm text-gray-600 mb-1">Scheduled Maintenance</p>
                          <p className="font-bold text-sm text-green-600">{system.scheduledDate}</p>
                        </div>
                      )}

                      {system.assignedTo && (
                        <div className="min-w-max">
                          <p className="text-sm text-gray-600 mb-1">Assigned To</p>
                          <p className="font-bold text-sm text-gray-900">{system.assignedTo}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleRequestSensorHistoryCleanup(system)}
                      disabled={cleaningSensorBinId !== null}
                      className="h-9 px-3 text-xs border-amber-300 text-amber-800 hover:bg-amber-50 disabled:opacity-60"
                    >
                      <Trash2 className="mr-1 h-3 w-3" />
                      {cleaningSensorBinId === String(system.id) ? 'Scanning...' : 'Clear data'}
                    </Button>
                    <Button
                      onClick={() => handleRemoveSystem(system.id)}
                      size="sm"
                      className="h-9 px-3 bg-red-600 hover:bg-red-700 text-white text-xs"
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Remove Bin
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {
        (() => {
          const sel = systems.find(s => s.id === selectedSystem);
          let initialUserId: string | undefined = undefined;
          if (sel && typeof sel.assignedTo === 'string') {
            const m = sel.assignedTo.match(/\(([^)]+)\)/);
            const email = m ? m[1] : undefined;
            if (email) {
              const u = users.find(us => String(us.email).toLowerCase() === String(email).toLowerCase());
              if (u) initialUserId = u.id;
            }
          }

          return (
            <ScheduleMaintenanceModal
              isOpen={isModalOpen}
              onClose={closeMaintenanceModal}
              systemId={selectedSystem}
              users={users}
              onSchedule={handleScheduleMaintenance}
              initialDate={systems.find(s => s.id === selectedSystem)?.scheduledDate}
              initialTaskType="maintenance"
              initialDescription={systems.find(s => s.id === selectedSystem)?.lastMaintenanceNote}
              initialUserId={initialUserId}
            />
          );
        })()
      }
      
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