// ============================================================================
// USER MANAGEMENT - Manage user accounts and permissions
// ============================================================================

// ============================================================================
// IMPORTS
// ============================================================================
import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Shield, User, Users, Settings, X, Search, Edit2, Save, Mail, Phone, Calendar, Trash2, Upload, Clock } from 'lucide-react';
import { auth, addUser, getUsers, removeUser, updateUserStatus, db } from '../../firebase';
import { ref, get, update as firebaseUpdate } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// ============================================================================
// DATA & CONSTANTS
// ============================================================================
// Sample data removed - connect to your database for live user data
const users: UserData[] = [];

// ============================================================================
// MODAL COMPONENTS
// ============================================================================
function ApprovalModal({ isOpen, onClose, user, onApproved }: { isOpen: boolean; onClose: () => void; user: UserData | null; onApproved: () => void }) {
  const [role, setRole] = useState('staff');
  const [reason, setReason] = useState('');

  useEffect(() => {
    if (user) {
      setRole(user.role || 'staff');
      setReason('');
    }
  }, [user]);

  if (!user) return null;

  const handleApprove = async () => {
    try {
      await updateUserStatus(user.id, {
        status: 'active',
        role,
        approvedAt: new Date().toISOString(),
        rejectionReason: '',
        approvalNotes: reason || 'Approved by admin',
      });
      onApproved();
      onClose();
    } catch (error) {
      console.error('Failed to approve user:', error);
      alert('Failed to approve user. Please try again.');
    }
  };

  const handleReject = async () => {
    try {
      await updateUserStatus(user.id, {
        status: 'rejected',
        rejectionReason: reason || 'No reason provided',
        approvalNotes: reason || 'Rejected by admin',
      });
      onApproved();
      onClose();
    } catch (error) {
      console.error('Failed to reject user:', error);
      alert('Failed to reject user. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"><X className="h-6 w-6" /></button>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Approve Registration</h2>
              <p className="text-sm text-gray-600 mb-4">Review the applicant before granting access.</p>
              <div className="space-y-3 mb-5">
                <div>
                  <p className="text-xs uppercase text-gray-500">Name</p>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900">{user.email}</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-gray-500">Team</p>
                  <p className="font-semibold text-gray-900">{user.department || user.team || 'Operations'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assign role</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason / note</label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={3}
                    placeholder="Optional note for approval or rejection"
                    className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1 cursor-pointer">Cancel</Button>
                <Button type="button" onClick={handleReject} className="flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer">Reject</Button>
                <Button type="button" onClick={handleApprove} className="flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer">Approve</Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function AddUserModal({ isOpen, onClose, onUserAdded }: { isOpen: boolean; onClose: () => void; onUserAdded: () => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', team: '', role: '' });
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const handleTeamChange = (value: string) => {
    setFormData({ ...formData, team: value });
    setShowRoleDropdown(value === 'N/A');
    if (value !== 'N/A') {
      setFormData(prev => ({ ...prev, role: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Full Name is required');
      return;
    }
    if (!formData.team) {
      alert('Team is required');
      return;
    }
    if (!formData.email || !formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!formData.password || formData.password.length < 8 || !/\d/.test(formData.password)) {
      alert('Password must be at least 8 characters and include at least one number.');
      return;
    }
    if (formData.team === 'N/A' && !formData.role) {
      alert('Role is required when team is N/A');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const userData = {
        name: formData.name,
        email: formData.email || '',
        phone: formData.phone || '',
        team: formData.team,
        role: formData.role || 'staff',
        status: 'active',
      };

      await addUser(userData);
      if (userCredential?.user) {
        await userCredential.user.sendEmailVerification();
      }
      alert('User added successfully!');
      setFormData({ name: '', email: '', phone: '', password: '', team: '', role: '' });
      setShowRoleDropdown(false);
      onClose();
      onUserAdded();
    } catch (error: any) {
      console.error('Failed to add user:', error);
      const message = error?.message || 'Failed to add user. Please try again.';
      alert(message);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"><X className="h-6 w-6" /></button>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add User</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <Input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@omnibins.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password <span className="text-red-500">*</span></label>
                  <Input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Minimum 8 characters with a number" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="0900-000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Team <span className="text-red-500">*</span></label>
                  <select value={formData.team} onChange={(e) => handleTeamChange(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" required>
                    <option value="">Select Team</option>
                    <option>Team A</option>
                    <option>Team B</option>
                    <option>Team C</option>
                    <option>N/A</option>
                  </select>
                </div>
                {showRoleDropdown && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role <span className="text-red-500">*</span></label>
                    <select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" required>
                      <option value="">Select Role</option>
                      <option value="staff">Staff</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                )}
                <div className="flex gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={onClose} className="flex-1 cursor-pointer">Cancel</Button>
                  <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer">Add</Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  joinedDate: string;
  status: string;
  lastLogin: string;
  avatar?: string;
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: UserData;
  onUpdateUserData: (data: UserData) => void;
  onRemoveUser: () => void;
  showRemoveButton?: boolean;
}

function ProfileModal({ isOpen, onClose, userData, onUpdateUserData, onRemoveUser, showRemoveButton = true }: ProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<UserData>(userData);
  const isRemovableUser = String(userData.role || '').toLowerCase() !== 'admin';

  const handleSave = () => {
    onUpdateUserData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(userData);
    setIsEditing(false);
  };

  const handleRemove = () => {
    if (confirm(`Are you sure you want to remove ${userData.name} from the system?`)) {
      onRemoveUser();
      onClose();
    }
  };

  const handleAvatarUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedData({ ...editedData, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
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
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 overflow-hidden">
                        {editedData.avatar ? (
                          <img src={editedData.avatar} alt={editedData.name} className="h-full w-full object-cover" />
                        ) : (
                          <User className="h-10 w-10 text-white" />
                        )}
                      </div>
                      {isEditing && (
                        <label className="absolute bottom-0 right-0 h-6 w-6 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-100 transition-colors">
                          <Upload className="h-3 w-3 text-gray-700" />
                          <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" />
                        </label>
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{isEditing ? 'Edit Profile' : 'User Profile'}</h2>
                      <p className="text-green-100">{userData.role}</p>
                    </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <User className="h-4 w-4" />
                      Full Name
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedData.name}
                        onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                        className="border-gray-300"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium p-2 bg-gray-50 rounded-lg">{userData.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </Label>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={editedData.email}
                        onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                        className="border-gray-300"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium p-2 bg-gray-50 rounded-lg">{userData.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    {isEditing ? (
                      <Input
                        value={editedData.phone}
                        onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                        className="border-gray-300"
                      />
                    ) : (
                      <p className="text-gray-900 font-medium p-2 bg-gray-50 rounded-lg">{userData.phone}</p>
                    )}
                  </div>

                  {/* Department */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <Users className="h-4 w-4" />
                      Department
                    </Label>
                    {isEditing ? (
                      <select
                        value={editedData.department}
                        onChange={(e) => setEditedData({ ...editedData, department: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="Administration">Administration</option>
                        <option value="Operations">Operations</option>
                        <option value="Management">Management</option>
                        <option value="Analytics">Analytics</option>
                        <option value="Maintenance">Maintenance</option>
                      </select>
                    ) : (
                      <p className="text-gray-900 font-medium p-2 bg-gray-50 rounded-lg">{userData.department}</p>
                    )}
                  </div>

                  {/* Role */}
                  <div className="space-y-2 md:col-span-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <Settings className="h-4 w-4" />
                      Role
                    </Label>
                    {isEditing ? (
                      <select
                        value={editedData.role}
                        onChange={(e) => setEditedData({ ...editedData, role: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                      </select>
                    ) : (
                      <p className="text-gray-900 font-medium p-2 bg-gray-50 rounded-lg">{userData.role}</p>
                    )}
                  </div>

                  {/* Joined Date */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <Calendar className="h-4 w-4" />
                      Member Since
                    </Label>
                    <p className="text-gray-900 font-medium p-2 bg-gray-50 rounded-lg">{userData.joinedDate}</p>
                  </div>

                  {/* Last Login */}
                  <div className="space-y-2 md:col-span-2">
                    <Label className="flex items-center gap-2 text-gray-700">
                      <Clock className="h-4 w-4" />
                      Last Login
                    </Label>
                    <p className="text-gray-900 font-medium p-2 bg-gray-50 rounded-lg">{userData.lastLogin}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-8 pt-6 border-t">
                  {isEditing ? (
                    <>
                      <Button
                        onClick={handleSave}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                      >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button
                        onClick={handleCancel}
                        variant="outline"
                        className="flex-1 cursor-pointer"
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => setIsEditing(true)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                      >
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                      {showRemoveButton && isRemovableUser && (
                        <Button
                          onClick={handleRemove}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove User
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}


// ============================================================================
// MAIN COMPONENT
// ============================================================================
export function UserManagement() {
  const [userList, setUserList] = useState<UserData[]>(users);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isApprovalModalOpen, setIsApprovalModalOpen] = useState(false);
  const [pendingApprovalUser, setPendingApprovalUser] = useState<UserData | null>(null);

  const loadUsers = async () => {
    try {
      const users = await getUsers();
      if (Array.isArray(users)) {
        setUserList(users as UserData[]);
      } else if (users && typeof users === 'object') {
        setUserList(
          Object.entries(users).map(([id, item]) => ({
            id,
            ...(typeof item === 'object' && item !== null ? item : {}),
          })) as UserData[]
        );
      } else {
        setUserList([]);
      }
    } catch (error) {
      console.error('Failed to load users:', error);
      setUserList([]);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = userList.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdateUserData = async (updatedData: UserData) => {
    try {
      // Persist changes to Realtime Database
      const updates: Partial<any> = {
        name: updatedData.name,
        email: updatedData.email,
        phone: updatedData.phone,
        role: updatedData.role,
        department: updatedData.department,
      };
      await updateUserStatus(updatedData.id, updates);
      // Update local state after successful save
      setUserList(userList.map(user => user.id === updatedData.id ? updatedData : user));

      // Propagate changes to any bins where this user is assigned (match by email)
      try {
        const binsSnapshot = await get(ref(db, 'bins'));
        const bins = binsSnapshot.val() || {};
        const updates: Record<string, any> = {};
        Object.entries(bins).forEach(([binId, binValue]: [string, any]) => {
          const assigned = (binValue && binValue.assignedTo) ? String(binValue.assignedTo) : '';
          if (assigned.includes(updatedData.email)) {
            updates[`bins/${binId}/assignedTo`] = `${updatedData.name} (${updatedData.email})`;
          }
        });
        if (Object.keys(updates).length > 0) {
          await firebaseUpdate(ref(db), updates);
        }
      } catch (err) {
        console.debug('Failed to propagate user changes to bins:', err);
      }
      alert('User profile saved successfully.');
    } catch (error) {
      console.error('Failed to save user profile:', error);
      alert('Failed to save user profile. Please try again.');
    }
  };

  const handleRemoveUser = async () => {
    if (!selectedUser) return;

    try {
      await removeUser(selectedUser.id);
      setUserList(prev => prev.filter(user => user.id !== selectedUser.id));
      setSelectedUser(null);
      setIsProfileModalOpen(false);
    } catch (error) {
      console.error('Failed to remove user:', error);
      alert('Failed to remove user. Please try again.');
    }
  };

  const getRoleBadge = (role: string) => {
    switch (String(role || '').toLowerCase()) {
      case 'admin':
        return <Badge variant="destructive">Admin</Badge>;
      default:
        return <Badge className="bg-gray-500 text-white">Staff</Badge>;
    }
  };

  const getRoleIcon = (role: string) => {
    switch (String(role || '').toLowerCase()) {
      case 'admin':
        return <Shield className="h-8 w-8 text-red-500" />;
      default:
        return <User className="h-8 w-8 text-gray-500" />;
    }
  };

  const totalUsers = userList.filter(u => u.status !== 'rejected').length;
  const activeUsers = userList.filter(u => u.status === 'active').length;
  const pendingUsers = userList.filter(u => u.status === 'pending');

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-900 font-semibold">Manage user accounts and permissions</p>
        </div>
        <div className="flex items-end flex-col gap-2 w-full sm:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-700" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-gray-900 font-medium text-sm w-full sm:w-55"
            />
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white font-medium text-sm sm:w-30">
            Add User
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-900 font-semibold">Active Users</p>
                <p className="text-2xl font-bold text-gray-900">{activeUsers}</p>
              </div>
              <User className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-bold mb-4">Role Permissions</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <p className="font-bold">Admin</p>
                <p className="text-gray-600">Full system access, user management, system configuration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="font-bold">Staff</p>
                <p className="text-gray-600">View dashboards, monitoring, basic alerts</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {pendingUsers.length > 0 && (
        <Card className="border-amber-200 bg-amber-50/40">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Pending Approvals</h3>
              <Badge className="bg-amber-500 text-white">{pendingUsers.length}</Badge>
            </div>
            <div className="space-y-3">
              {pendingUsers.map((user) => (
                <div key={user.id} className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-700">{user.email}</p>
                  </div>
                  <Button
                    onClick={() => {
                      setPendingApprovalUser(user);
                      setIsApprovalModalOpen(true);
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {filteredUsers.filter(user => user.status !== 'pending' && user.status !== 'rejected').map((user) => (
          <Card key={user.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {getRoleIcon(user.role)}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-gray-900">{user.name}</p>
                      {getRoleBadge(user.role)}
                      {user.status === 'inactive' && (
                        <Badge className="bg-gray-600 text-white">Inactive</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-900 font-medium">{user.email}</p>
                    <p className="text-xs text-gray-800 font-medium mt-1">Last login: {user.lastLogin}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => {
                      setSelectedUser({
                        ...user,
                        phone: user.phone || 'N/A',
                        department: user.department || 'Operations',
                        joinedDate: user.joinedDate || 'January 2024',
                        avatar: user.avatar
                      });
                      setIsProfileModalOpen(true);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onUserAdded={loadUsers} />
      <ApprovalModal
        isOpen={isApprovalModalOpen}
        onClose={() => {
          setIsApprovalModalOpen(false);
          setPendingApprovalUser(null);
        }}
        user={pendingApprovalUser}
        onApproved={loadUsers}
      />
      {selectedUser && (
        <ProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          userData={selectedUser}
          onUpdateUserData={handleUpdateUserData}
          onRemoveUser={handleRemoveUser}
          showRemoveButton={String(selectedUser.role || '').toLowerCase() !== 'admin'}
        />
      )}
    </div>
  );
}