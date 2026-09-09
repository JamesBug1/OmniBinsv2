import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type UserCredential,
} from "firebase/auth";
import { getDatabase, ref, onValue, get, push, set, update, remove } from "firebase/database";

interface FirebaseEnv {
  VITE_FIREBASE_API_KEY?: string;
  VITE_FIREBASE_AUTH_DOMAIN?: string;
  VITE_FIREBASE_PROJECT_ID?: string;
  VITE_FIREBASE_DATABASE_URL?: string;
  VITE_FIREBASE_STORAGE_BUCKET?: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID?: string;
  VITE_FIREBASE_APP_ID?: string;
  VITE_FIREBASE_MEASUREMENT_ID?: string;
}

const env = (import.meta as any).env as FirebaseEnv;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  databaseURL: env.VITE_FIREBASE_DATABASE_URL,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

const missingFirebaseConfig = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingFirebaseConfig.length > 0) {
  throw new Error(
    `Firebase config is incomplete. Missing values: ${missingFirebaseConfig.join(", ")}. ` +
      "Copy .env.example to .env or .env.local and fill in your Firebase web app values."
  );
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const googleProvider = new GoogleAuthProvider();

export function subscribeBins(callback: (bins: any[]) => void) {
  const binsRef = ref(db, 'bins');
  return onValue(binsRef, (snapshot) => {
    const data = snapshot.val();
    const bins = data
      ? Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(typeof value === 'object' && value !== null ? value : {}),
        }))
      : [];
    callback(bins);
  });
}

export function subscribeCollections(callback: (collections: any[]) => void) {
  const collectionsRef = ref(db, 'collections');
  return onValue(collectionsRef, (snapshot) => {
    const data = snapshot.val();
    const collections = data
      ? Object.entries(data).map(([key, value]) => ({
          id: key,
          ...(typeof value === 'object' && value !== null ? value : {}),
        }))
      : [];
    callback(collections);
  });
}

export function subscribeSensorData(callback: (sensors: any[]) => void) {
  const sensorsRef = ref(db, 'sensor_data');
  return onValue(sensorsRef, (snapshot) => {
    const data = snapshot.val();
    const sensors = data
      ? Object.entries(data).map(([key, value]) => ({ id: key, ...(typeof value === 'object' && value !== null ? value : {}) }))
      : [];
    callback(sensors);
  });
}

export function subscribeAlerts(callback: (alerts: any[]) => void, onError?: (err: any) => void) {
  const alertsRef = ref(db, 'alerts');
  return onValue(
    alertsRef,
    (snapshot) => {
      const data = snapshot.val();
      const items = data
        ? Object.entries(data).map(([key, value]) => ({ id: key, ...(typeof value === 'object' && value !== null ? value : {}) }))
        : [];
      callback(items);
    },
    (err) => {
      if (onError) onError(err);
      else console.error('subscribeAlerts error:', err);
    }
  );
}

export function subscribeReports(callback: (reports: any[]) => void, onError?: (err: any) => void) {
  const reportsRef = ref(db, 'reports');
  return onValue(
    reportsRef,
    (snapshot) => {
      const data = snapshot.val();
      const items = data
        ? Object.entries(data).map(([key, value]) => ({ id: key, ...(typeof value === 'object' && value !== null ? value : {}) }))
        : [];
      callback(items);
    },
    (err) => {
      if (onError) onError(err);
      else console.error('subscribeReports error:', err);
    }
  );
}

export async function addAlert(alertData: {
  bin?: string;
  message?: string;
  severity?: string;
  type?: string;
  time?: string | number;
}): Promise<any> {
  const alertsRef = ref(db, 'alerts');
  const newRef = push(alertsRef);
  const payload = {
    bin: alertData.bin ?? 'Test-Bin',
    message: alertData.message ?? 'Test alert generated from UI',
    severity: alertData.severity ?? 'info',
    type: alertData.type ?? 'test',
    time: alertData.time ?? new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };
  await set(newRef, payload);
  return { id: newRef.key, ...payload };
}

export function getDatabaseUrl(): string | undefined {
  return firebaseConfig.databaseURL;
}

export async function signInWithEmail(
  email: string,
  password: string
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}


export async function signInWithGoogle(): Promise<UserCredential> {
  return signInWithPopup(auth, googleProvider);
}


export async function signOutUser() {
  return signOut(auth);
}


export async function getIdToken(): Promise<string | null> {
  const user = auth.currentUser;
  return user ? user.getIdToken() : null;
}

// ============================================================================
// API FUNCTIONS - Connect to Flask Backend
// ============================================================================

const API_BASE_URL = 'http://localhost:5002'; // Update this to your backend URL

async function apiRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
  const token = await getIdToken();
  if (!token) {
    throw new Error('No authentication token available');
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Network error' }));
    throw new Error(error.error || `HTTP ${response.status}`);
  }

  return response.json();
}

// ============================================================================
// USER MANAGEMENT API
// ============================================================================

export async function addUser(userData: {
  name: string;
  email: string;
  phone?: string;
  team: string;
  role?: string;
  status?: string;
}): Promise<any> {
  const usersRef = ref(db, 'users');
  const newUserRef = push(usersRef);
  const timestamp = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const userRecord = {
    name: userData.name,
    email: userData.email || '',
    phone: userData.phone || '',
    team: userData.team,
    role: userData.role || 'staff',
    department: userData.team || 'Operations',
    status: userData.status || 'active',
    joinedDate: timestamp,
    lastLogin: timestamp,
    createdAt: new Date().toISOString(),
  };
  await set(newUserRef, userRecord);
  return { id: newUserRef.key, ...userRecord };
}

export async function updateUserStatus(userId: string, updates: Partial<{
  status: string;
  role: string;
  team: string;
  approvedAt: string;
  rejectionReason: string;
  approvalNotes: string;
}>): Promise<void> {
  await update(ref(db, `users/${userId}`), updates);
}

export async function removeUser(userId: string): Promise<void> {
  await remove(ref(db, `users/${userId}`));
}

export async function getUsers(): Promise<any> {
  const usersRef = ref(db, 'users');
  const snapshot = await get(usersRef);
  const data = snapshot.val();
  if (!data) {
    return [];
  }
  return Object.entries(data).map(([key, value]) => ({
    id: key,
    ...(typeof value === 'object' && value !== null ? value : {}),
  }));
}

export async function getUserByEmail(email?: string | null): Promise<any | null> {
  if (!email) return null;
  const users = await getUsers();
  return users.find((user: any) => String(user.email || '').toLowerCase() === email.toLowerCase()) ?? null;
}

export async function isAdminUser(email?: string | null): Promise<boolean> {
  const user = await getUserByEmail(email);
  if (!user) return false;
  return String(user.role || '').trim().toLowerCase() === 'admin';
}

// ============================================================================
// BIN MANAGEMENT API
// ============================================================================

export async function addBin(binData: {
  id: string;
  location: string;
  capacity: number;
  status?: string;
}): Promise<any> {
  return apiRequest('/bins', {
    method: 'POST',
    body: JSON.stringify(binData),
  });
}

export async function getBins(): Promise<any> {
  return apiRequest('/bins');
}

// ============================================================================
// TEAM MANAGEMENT API
// ============================================================================

export async function createTeam(teamData: {
  name: string;
  workerIds: string[];
}): Promise<any> {
  const teamsRef = ref(db, 'teams');
  const newTeamRef = push(teamsRef);
  const createdAt = new Date().toISOString();
  const teamRecord = {
    name: teamData.name,
    workerIds: teamData.workerIds,
    createdAt,
  };
  await set(newTeamRef, teamRecord);

  const updates: Record<string, any> = {};
  teamData.workerIds.forEach((workerId) => {
    updates[`users/${workerId}/team`] = teamData.name;
  });
  await update(ref(db), updates);

  return { id: newTeamRef.key, ...teamRecord };
}

export async function getTeams(): Promise<any> {
  const teamsRef = ref(db, 'teams');
  const snapshot = await get(teamsRef);
  const data = snapshot.val();
  if (!data) {
    return [];
  }
  return Object.entries(data).map(([key, value]) => ({
    id: key,
    ...(typeof value === 'object' && value !== null ? value : {}),
  }));
}

export async function removeTeam(teamId: string): Promise<void> {
  if (!teamId) return;
  await remove(ref(db, `teams/${teamId}`));
}