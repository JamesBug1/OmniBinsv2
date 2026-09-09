import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { User, Phone, Mail, CheckCircle, Clock, Search, X, Users, Plus, Trash2 } from 'lucide-react';
import { getUsers, createTeam, getTeams, removeTeam } from '../../firebase';
import { ref, push, set } from 'firebase/database';
import { db } from '../../firebase';

interface WorkerData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  team?: string;
  role?: string;
  status?: string;
  tasksCompleted?: number;
  tasksToday?: number;
}

const workersData: WorkerData[] = [];

interface CreateTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  workers: WorkerData[];
  onCreateTeam: (teamName: string, selectedWorkerIds: string[]) => void;
}

interface TeamScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  team: { id?: string; name: string } | null;
  bins: any[];
  onSchedule: (payload: {
    teamName: string;
    binId: string;
    date: string;
    taskType: 'maintenance' | 'collection';
    description?: string;
  }) => Promise<void>;
}

function TeamScheduleModal({ isOpen, onClose, team, bins, onSchedule }: TeamScheduleModalProps) {
  const [selectedBinId, setSelectedBinId] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');
  const [taskType, setTaskType] = useState<'maintenance' | 'collection'>('collection');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSelectedBinId(bins[0]?.id ?? '');
      setScheduledDate('');
      setTaskType('collection');
      setDescription('');
    }
  }, [isOpen, bins]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!team) return;
    if (!selectedBinId) {
      alert('Please select a bin.');
      return;
    }
    if (!scheduledDate) {
      alert('Please select a date.');
      return;
    }

    await onSchedule({
      teamName: team.name,
      binId: selectedBinId,
      date: scheduledDate,
      taskType,
      description,
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && team && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Schedule Team Task</h2>
                    <p className="text-green-100">{team.name}</p>
                  </div>
                  <button onClick={onClose} className="rounded-full p-2 bg-white/20 text-white hover:bg-white/30 transition-colors">
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="space-y-2">
                  <Label className="text-gray-700">Task Type</Label>
                  <select
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value as 'maintenance' | 'collection')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-900"
                  >
                    <option value="collection">Schedule Trash Collection</option>
                    <option value="maintenance">Schedule Maintenance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700">Select Bin</Label>
                  <select
                    value={selectedBinId}
                    onChange={(e) => setSelectedBinId(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm text-gray-900"
                  >
                    {bins.map((bin) => (
                      <option key={bin.id} value={bin.id}>{bin.id}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700">Schedule Date</Label>
                  <Input
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="border-gray-300 text-gray-900"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700">Description (optional)</Label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add notes or instructions for this task"
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 h-24 text-sm text-gray-900"
                  />
                </div>

                <div className="flex gap-3 pt-2 border-t">
                  <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    Save Task
                  </Button>
                  <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function CreateTeamModal({ isOpen, onClose, workers, onCreateTeam }: CreateTeamModalProps) {
  const [teamName, setTeamName] = useState('');
  const [selectedWorkers, setSelectedWorkers] = useState<string[]>([]);

  const toggleWorker = (workerId: string) => {
    setSelectedWorkers(prev =>
      prev.includes(workerId)
        ? prev.filter(id => id !== workerId)
        : [...prev, workerId]
    );
  };

  const handleCreate = () => {
    if (!teamName.trim()) {
      alert('Team name is required');
      return;
    }
    if (selectedWorkers.length === 0) {
      alert('Please select at least one worker');
      return;
    }
    onCreateTeam(teamName, selectedWorkers);
    setTeamName('');
    setSelectedWorkers([]);
    onClose();
  };

  const availableWorkers = workers.filter((w) => {
    const role = String(w.role || '').toLowerCase();
    return w.status === 'active' && role !== 'admin' && role !== 'administrator';
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Create New Team</h2>
                    <p className="text-green-100">Select workers to add to the team</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 bg-white/20 text-white hover:bg-white/30 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-6">
                  {/* Team Name */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <Users className="h-4 w-4" />
                      Team Name
                    </Label>
                    <Input
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="Enter team name (e.g., Team D)"
                      className="border-gray-300"
                    />
                  </div>

                  {/* Worker Selection */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <User className="h-4 w-4" />
                      Select Workers ({selectedWorkers.length} selected)
                    </Label>
                    <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-lg">
                      {availableWorkers.map((worker) => (
                        <label
                          key={worker.id}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                        >
                          <input
                            type="checkbox"
                            checked={selectedWorkers.includes(worker.id)}
                            onChange={() => toggleWorker(worker.id)}
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 flex-shrink-0">
                            <span className="text-white font-bold text-sm">
                              {worker.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{worker.name}</p>
                            <p className="text-sm text-gray-500">{worker.email}</p>
                          </div>
                          <Badge className={worker.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                            {worker.status}
                          </Badge>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <Button
                      onClick={handleCreate}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Create Team
                    </Button>
                    <Button
                      onClick={onClose}
                      variant="outline"
                      className="flex-1 cursor-pointer"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Workers() {
  const [workerList, setWorkerList] = useState<WorkerData[]>(workersData);
  const [teamList, setTeamList] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateTeamModalOpen, setIsCreateTeamModalOpen] = useState(false);
  const [selectedTeamForSchedule, setSelectedTeamForSchedule] = useState<any | null>(null);
  const [bins, setBins] = useState<any[]>([]);

  const filteredWorkers = workerList.filter(worker =>
    worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (worker.team ?? '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeWorkers = workerList.filter(w => w.status === 'active').length;
  const totalTasks = workerList.reduce((sum, w) => sum + w.tasksCompleted, 0);

  const loadWorkers = async () => {
    try {
      const users = await getUsers();
      const normalized = Array.isArray(users)
        ? users
            .filter((user: any) => {
              const status = String(user.status || 'active').toLowerCase();
              return status === 'active' || status === 'inactive';
            })
            .map((user: any) => ({
              id: String(user.id),
              name: String(user.name || user.fullName || 'Unnamed User'),
              email: String(user.email || ''),
              phone: String(user.phone || ''),
              team: String(user.team || user.department || ''),
              role: String(user.role || 'staff'),
              status: String(user.status || 'active'),
              tasksCompleted: Number(user.tasksCompleted ?? 0),
              tasksToday: Number(user.tasksToday ?? 0),
            }))
        : [];
      setWorkerList(normalized);
    } catch (error) {
      console.error('Failed to load workers:', error);
      setWorkerList([]);
    }
  };

  // Load tasks and aggregate counts per user
  const loadTasks = async () => {
    try {
      const [tasksSnapshot, teams] = await Promise.all([
        (await import('firebase/database')).get(ref(db, 'tasks')),
        getTeams(),
      ]);
      const tasks = tasksSnapshot.val() || {};
      const teamMembersByTeam = new Map<string, string[]>();
      (Array.isArray(teams) ? teams : []).forEach((team: any) => {
        const workerIds = Array.isArray(team?.workerIds) ? team.workerIds.map(String) : [];
        teamMembersByTeam.set(String(team?.name || ''), workerIds);
      });

      const counts: Record<string, { completed: number; today: number }> = {};
      const todayPrefix = new Date().toISOString().slice(0, 10);

      Object.entries(tasks).forEach(([id, task]: [string, any]) => {
        const memberIds = new Set<string>();
        const assignedUserId = task.assignedUserId ? String(task.assignedUserId) : '';
        if (assignedUserId) memberIds.add(assignedUserId);

        const assignedTeam = task.assignedTeam || task.assignedTo || '';
        if (assignedTeam) {
          const teamWorkerIds = teamMembersByTeam.get(String(assignedTeam)) || [];
          teamWorkerIds.forEach((workerId) => memberIds.add(workerId));
        }

        if (memberIds.size === 0) return;

        memberIds.forEach((memberId) => {
          if (!counts[memberId]) counts[memberId] = { completed: 0, today: 0 };
          if (task.status === 'completed') counts[memberId].completed += 1;
          if (String(task.scheduledDate || '').startsWith(todayPrefix)) counts[memberId].today += 1;
        });
      });

      setWorkerList(prev => prev.map(w => ({
        ...w,
        tasksCompleted: counts[w.id]?.completed ?? 0,
        tasksToday: counts[w.id]?.today ?? 0,
      })));
    } catch (err) {
      console.error('Failed to load tasks:', err);
    }
  };

  const loadTeams = async () => {
    try {
      const teams = await getTeams();
      setTeamList(Array.isArray(teams) ? teams : []);
    } catch (error) {
      console.error('Failed to load teams:', error);
      setTeamList([]);
    }
  };

  const handleCreateTeam = async (teamName: string, selectedWorkerIds: string[]) => {
    try {
      await createTeam({ name: teamName, workerIds: selectedWorkerIds });
      setWorkerList(workerList.map(worker =>
        selectedWorkerIds.includes(worker.id)
          ? { ...worker, team: teamName }
          : worker
      ));
      await loadTeams();
      alert(`Team "${teamName}" created successfully with ${selectedWorkerIds.length} worker(s)!`);
    } catch (error) {
      console.error('Failed to create team:', error);
      alert('Failed to create team. Please try again.');
    }
  };

  const handleRemoveTeam = async (team: any) => {
    if (!team?.id) return;
    const confirmed = window.confirm(`Remove team "${team.name}" and clear its members' team assignment?`);
    if (!confirmed) return;

    try {
      await removeTeam(team.id);
      const workerUpdates: Record<string, any> = {};
      (team.workerIds ?? []).forEach((workerId: string) => {
        workerUpdates[`users/${workerId}/team`] = '';
      });
      if (Object.keys(workerUpdates).length > 0) {
        await (await import('firebase/database')).update(ref(db), workerUpdates);
      }
      await loadTeams();
      await loadWorkers();
      setSelectedTeamForSchedule(null);
      alert(`Team "${team.name}" removed successfully.`);
    } catch (error) {
      console.error('Failed to remove team:', error);
      alert('Failed to remove team. Please try again.');
    }
  };

  const handleScheduleTeamTask = async ({
    teamName,
    binId,
    date,
    taskType,
    description,
  }: {
    teamName: string;
    binId: string;
    date: string;
    taskType: 'maintenance' | 'collection';
    description?: string;
  }) => {
    try {
      const newTaskRef = push(ref(db, 'tasks'));
      const taskId = newTaskRef.key;
      const taskRecord = {
        id: taskId,
        type: taskType,
        binId,
        bin: binId,
        node: binId,
        assignedTo: teamName,
        assignedTeam: teamName,
        scheduledDate: date,
        description: description || '',
        status: 'pending',
        createdAt: new Date().toISOString(),
      };

      await set(newTaskRef, taskRecord);

      if (taskType === 'collection') {
        await set(ref(db, `collections/${taskId}`), {
          ...taskRecord,
          status: 'pending',
          assignedTo: teamName,
          scheduledTime: date,
          createdAt: taskRecord.createdAt,
        });
        await set(ref(db, `bins/${binId}/collectionScheduledDate`), date);
      } else {
        await set(ref(db, `bins/${binId}/scheduledDate`), date);
      }

      await set(ref(db, `bins/${binId}/assignedTo`), teamName);
      alert(`Task scheduled for team "${teamName}" on bin ${binId}.`);
    } catch (error) {
      console.error('Failed to schedule team task:', error);
      alert('Unable to save this schedule. Please try again.');
    }
  };

  useEffect(() => {
    loadWorkers();
    loadTeams();
    loadTasks();
  }, []);

  useEffect(() => {
    const fetchBins = async () => {
      try {
        const binsSnapshot = await (await import('firebase/database')).get(ref(db, 'bins'));
        const data = binsSnapshot.val() || {};
        setBins(data ? Object.entries(data).map(([key, value]) => ({ id: key, ...(value || {}) })) : []);
      } catch (error) {
        console.error('Failed to load bins for scheduling:', error);
        setBins([]);
      }
    };

    fetchBins();
  }, []);

  return (

    
    <div className="space-y-6">

      
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Workers</h2>
          <p className="text-gray-900 font-semibold">Manage sanitation workers and collection teams</p>
          
        </div>
        <div className=" flex items-end flex-col gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-55">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
            <Input
              placeholder="Search Workers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-gray-900 font-medium"
            />
          </div>
          <Button 
            onClick={() => setIsCreateTeamModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white cursor-pointer whitespace-nowrap"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Team
          </Button>
        </div>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Total Workers</p>
                <p className="text-2xl font-bold text-gray-900">{workerList.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Active Today</p>
                <p className="text-2xl font-bold text-gray-900">{activeWorkers}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Tasks Completed</p>
                <p className="text-2xl font-bold text-gray-900">{totalTasks}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>
      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredWorkers.map((worker) => (
          <Card key={worker.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
                    {worker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{worker.name}</p>
                    <p className="text-sm text-gray-900 font-medium">{worker.team}</p>
                  </div>
                </div>
                <Badge className={worker.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}>
                  {worker.status === 'active' ? 'Active' : 'Off Duty'}
                </Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span>{worker.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>{worker.email}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="text-gray-600">Task</span>
                  <span className="font-bold">{worker.tasksCompleted} / {worker.tasksToday}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <CreateTeamModal
        isOpen={isCreateTeamModalOpen}
        onClose={() => setIsCreateTeamModalOpen(false)}
        workers={workerList}
        onCreateTeam={handleCreateTeam}
      />
      {teamList.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-gray-900">Saved Teams</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamList.map((team) => (
              <Card key={team.id} className="transition hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-gray-900 uppercase">{team.name}</p>
                      <p className="text-sm text-gray-500">{team.workerIds?.length ?? 0} member(s)</p>
                    </div>
                    <Badge className="bg-blue-500 text-white">Team</Badge>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    {(team.workerIds ?? []).map((id: string) => {
                      const worker = workerList.find(w => w.id === id);
                      return (
                        <p key={id}>{worker ? worker.name : `Worker ID: ${id}`}</p>
                      );
                    })}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTeamForSchedule(team);
                      }}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      Schedule
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveTeam(team);
                      }}
                      className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                    >
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <TeamScheduleModal
        isOpen={!!selectedTeamForSchedule}
        onClose={() => setSelectedTeamForSchedule(null)}
        team={selectedTeamForSchedule}
        bins={bins}
        onSchedule={handleScheduleTeamTask}
      />
    </div>
  );
}
