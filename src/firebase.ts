import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
  signInWithEmailAndPassword,
  type UserCredential,
} from "firebase/auth";
import { getDatabase, ref, onValue, get, push, set, update, remove, onDisconnect, serverTimestamp, query, orderByChild, equalTo } from "firebase/database";

interface FirebaseEnv {
  VITE_FIREBASE_API_KEY?: string;
  VITE_FIREBASE_AUTH_DOMAIN?: string;
  VITE_FIREBASE_PROJECT_ID?: string;
  VITE_FIREBASE_DATABASE_URL?: string;
  VITE_FIREBASE_STORAGE_BUCKET?: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID?: string;
  VITE_FIREBASE_APP_ID?: string;
  VITE_FIREBASE_MEASUREMENT_ID?: string;
  VITE_API_BASE_URL?: string;
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

export function trackUserOnlineStatus(userId: string): () => void {
  const userRef = ref(db, `users/${userId}`);
  const connectionRef = ref(db, '.info/connected');
  let isDisposed = false;

  const unsubscribe = onValue(connectionRef, async (snapshot) => {
    if (snapshot.val() !== true || isDisposed) return;

    try {
      await onDisconnect(userRef).update({
        onlineStatus: 'offline',
        lastSeen: serverTimestamp(),
      });
      if (isDisposed) return;
      await update(userRef, { onlineStatus: 'online' });
    } catch (error) {
      console.error('Failed to register user presence:', error);
    }
  });

  return () => {
    isDisposed = true;
    unsubscribe();
    void update(userRef, {
      onlineStatus: 'offline',
      lastSeen: serverTimestamp(),
    }).catch((error) => console.error('Failed to clear user presence:', error));
  };
}

const userCreationApp = getApps().find((existingApp) => existingApp.name === 'user-creation')
  ?? initializeApp(firebaseConfig, 'user-creation');
const userCreationAuth = getAuth(userCreationApp);

export async function createUserWithoutChangingSession(email: string, password: string): Promise<UserCredential> {
  return createUserWithEmailAndPassword(userCreationAuth, email, password);
}

export async function signOutUserCreationSession(): Promise<void> {
  await signOut(userCreationAuth);
}

export async function createPendingAuthAccount(application: {
  name: string;
  email: string;
  password: string;
  team: string;
}): Promise<{ verificationEmailSent: boolean }> {
  let userCredential: UserCredential | null = null;
  let profileSaved = false;

  try {
    userCredential = await createUserWithEmailAndPassword(
      userCreationAuth,
      application.email.trim().toLowerCase(),
      application.password
    );

    const usersRef = ref(getDatabase(userCreationApp), 'users');
    const userRef = push(usersRef);
    if (!userRef.key) throw new Error('Could not create the pending user profile.');

    const joinedDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    await set(userRef, {
      name: application.name.trim() || 'New User',
      email: userCredential.user.email ?? application.email.trim().toLowerCase(),
      phone: '',
      team: application.team.trim() || 'Operations',
      role: 'staff',
      department: application.team.trim() || 'Operations',
      status: 'pending',
      joinedDate,
      lastLogin: joinedDate,
      createdAt: new Date().toISOString(),
    });
    profileSaved = true;

    let verificationEmailSent = true;
    try {
      await sendEmailVerification(userCredential.user, {
        url: window.location.origin,
        handleCodeInApp: false,
      });
    } catch (error) {
      verificationEmailSent = false;
      console.error('Failed to send signup verification email:', error);
    }
    return { verificationEmailSent };
  } catch (error) {
    if (userCredential && !profileSaved) {
      await deleteUser(userCredential.user).catch((cleanupError) => {
        console.error('Failed to remove Auth account after pending profile creation failed:', cleanupError);
      });
    }
    throw error;
  } finally {
    await signOut(userCreationAuth).catch((error) => {
      console.error('Failed to clear temporary signup session:', error);
    });
  }
}

export async function getExistingAccountApprovalStatus(
  email: string,
  password: string
): Promise<'pending' | 'registered'> {
  try {
    const credential = await signInWithEmailAndPassword(userCreationAuth, email.trim().toLowerCase(), password);
    const usersQuery = query(
      ref(getDatabase(userCreationApp), 'users'),
      orderByChild('email'),
      equalTo(credential.user.email ?? email.trim().toLowerCase())
    );
    const snapshot = await get(usersQuery);
    const users = snapshot.val() as Record<string, { status?: string }> | null;
    const status = String(Object.values(users ?? {})[0]?.status ?? '').trim().toLowerCase();
    return status === 'pending' ? 'pending' : 'registered';
  } catch {
    return 'registered';
  } finally {
    await signOut(userCreationAuth).catch((error) => {
      console.error('Failed to clear temporary account lookup session:', error);
    });
  }
}

async function getRegistrationRequestKey(email: string): Promise<string> {
  const normalizedEmail = email.trim().toLowerCase();
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalizedEmail));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

export async function submitRegistrationRequest(application: {
  name: string;
  email: string;
  team: string;
}): Promise<void> {
  const email = application.email.trim().toLowerCase();
  const requestKey = await getRegistrationRequestKey(email);
  try {
    await set(ref(db, `registrationRequests/${requestKey}`), {
      name: application.name.trim(),
      email,
      team: application.team.trim(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
  } catch (error: any) {
    if (error?.code === 'PERMISSION_DENIED') {
      const pendingError = new Error('Registration request already exists.') as Error & { code: string };
      pendingError.code = 'registration/already-pending';
      throw pendingError;
    }
    throw error;
  }
}

export function subscribeRegistrationRequests(
  callback: (requests: any[]) => void,
  onError?: (error: Error) => void
) {
  return onValue(
    ref(db, 'registrationRequests'),
    (snapshot) => {
      const data = snapshot.val() ?? {};
      callback(Object.entries(data).map(([id, value]) => ({
        id,
        ...(typeof value === 'object' && value !== null ? value : {}),
        isRegistrationRequest: true,
      })));
    },
    (error) => {
      if (onError) onError(error);
      else console.error('Failed to subscribe to registration requests:', error);
    }
  );
}

export async function removeRegistrationRequest(requestId: string): Promise<void> {
  await remove(ref(db, `registrationRequests/${requestId}`));
}

function createTemporaryPassword(): string {
  const randomBytes = crypto.getRandomValues(new Uint8Array(32));
  const randomPart = Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  return `${randomPart}Aa1!`;
}

export async function approveRegistrationRequest(
  requestId: string,
  role: string,
  approvalNotes: string
): Promise<{ emailWarnings: string[] }> {
  const requestSnapshot = await get(ref(db, `registrationRequests/${requestId}`));
  const application = requestSnapshot.val();
  if (!application || application.status !== 'pending') {
    throw new Error('This registration request is no longer pending.');
  }

  const email = String(application.email ?? '').trim().toLowerCase();
  if (!email) throw new Error('This registration request has no email address.');

  let userCredential: UserCredential | null = null;
  let recordsSaved = false;
  let createdAuthUser = false;
  try {
    const usersRef = ref(db, 'users');
    const existingProfileQuery = query(usersRef, orderByChild('email'), equalTo(email));
    const existingProfileSnapshot = await get(existingProfileQuery);
    const existingProfiles = existingProfileSnapshot.val() as Record<string, any> | null;
    const existingProfileEntry = Object.entries(existingProfiles ?? {})
      .find(([, profile]) => String(profile?.status ?? '').toLowerCase() === 'pending');

    if (!existingProfileEntry) {
      userCredential = await createUserWithEmailAndPassword(userCreationAuth, email, createTemporaryPassword());
      createdAuthUser = true;
    }

    const timestamp = new Date().toISOString();
    const joinedDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const userId = existingProfileEntry?.[0] ?? push(usersRef).key;
    if (!userId) throw new Error('Could not allocate a user record.');
    await update(ref(db), {
      [`users/${userId}`]: {
        ...existingProfileEntry?.[1],
        name: existingProfileEntry?.[1]?.name || String(application.name ?? 'New User'),
        email,
        phone: existingProfileEntry?.[1]?.phone || '',
        team: existingProfileEntry?.[1]?.team || String(application.team ?? 'Operations'),
        role: existingProfileEntry?.[1]?.role || role,
        department: existingProfileEntry?.[1]?.department || String(application.team ?? 'Operations'),
        status: 'active',
        joinedDate: existingProfileEntry?.[1]?.joinedDate || joinedDate,
        lastLogin: existingProfileEntry?.[1]?.lastLogin || joinedDate,
        createdAt: existingProfileEntry?.[1]?.createdAt || timestamp,
        approvedAt: timestamp,
        approvalNotes: approvalNotes || 'Approved by admin',
      },
      [`registrationRequests/${requestId}`]: null,
    });
    recordsSaved = true;

    const emailWarnings: string[] = [];
    if (createdAuthUser && userCredential) {
      const actionCodeSettings = { url: window.location.origin, handleCodeInApp: false };
      const emailResults = await Promise.allSettled([
        sendEmailVerification(userCredential.user, actionCodeSettings),
        sendPasswordResetEmail(userCreationAuth, email, actionCodeSettings),
      ]);
      emailWarnings.push(...emailResults.flatMap((result, index) => result.status === 'rejected'
        ? [index === 0 ? 'Verification email could not be sent.' : 'Password setup email could not be sent.']
        : []));
    }
    return { emailWarnings };
  } catch (error) {
    if (userCredential && !recordsSaved && createdAuthUser) {
      await deleteUser(userCredential.user).catch((cleanupError) => {
        console.error('Failed to remove an unapproved Auth account after approval failure:', cleanupError);
      });
    }
    throw error;
  } finally {
    await signOut(userCreationAuth).catch((error) => {
      console.error('Failed to clear temporary account creation session:', error);
    });
  }
}

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
  const sensorBranches = ['sensor_data', 'sensor_data1', 'sensor_data2', 'sensor_data3', 'sensor_data4'];
  const latestByBranch = new Map<string, any[]>();

  const emit = () => {
    const allSensors = sensorBranches.flatMap((branchName) => latestByBranch.get(branchName) ?? []);
    callback(allSensors);
  };

  const unsubscribers = sensorBranches.map((branchName) =>
    onValue(ref(db, branchName), (snapshot) => {
      const data = snapshot.val();
      latestByBranch.set(
        branchName,
        data && typeof data === 'object'
          ? Object.entries(data).map(([key, value]) => ({
              id: key,
              branch: branchName,
              ...(typeof value === 'object' && value !== null ? value : {}),
            }))
          : []
      );
      emit();
    })
  );

  return () => {
    unsubscribers.forEach((unsubscribe) => unsubscribe());
  };
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

export function subscribeAlertArchive(callback: (items: any[]) => void, onError?: (err: any) => void) {
  return onValue(
    ref(db, 'alertArchive'),
    (snapshot) => {
      const data = snapshot.val();
      callback(data && typeof data === 'object'
        ? Object.entries(data).map(([key, value]) => ({
            archiveId: key,
            ...(typeof value === 'object' && value !== null ? value : {}),
          }))
        : []);
    },
    (err) => {
      if (onError) onError(err);
      else console.error('subscribeAlertArchive error:', err);
    }
  );
}

export function subscribeAlertReadStates(callback: (states: Record<string, boolean>) => void, onError?: (err: any) => void) {
  return onValue(
    ref(db, 'alertReadStates'),
    (snapshot) => callback(snapshot.val() ?? {}),
    (err) => {
      if (onError) onError(err);
      else console.error('subscribeAlertReadStates error:', err);
    }
  );
}

export function subscribeAlertDismissedStates(callback: (states: Record<string, boolean>) => void, onError?: (err: any) => void) {
  return onValue(
    ref(db, 'alertDismissedStates'),
    (snapshot) => callback(snapshot.val() ?? {}),
    (err) => {
      if (onError) onError(err);
      else console.error('subscribeAlertDismissedStates error:', err);
    }
  );
}

export async function deleteAlertRecord(alert: any): Promise<void> {
  if (alert.source === 'alerts' || alert.source === 'reports') {
    await remove(ref(db, `${alert.source}/${alert.id}`));
    return;
  }

  await set(ref(db, `alertReadStates/${alert.stateKey}`), true);
}

export async function archiveAlert(alert: any, sourceRecord?: any): Promise<void> {
  const archiveRef = push(ref(db, 'alertArchive'));
  if (!archiveRef.key) throw new Error('Could not allocate an alert archive key.');

  const archiveEntry = {
    ...Object.fromEntries(Object.entries(alert).filter(([, value]) => value !== undefined)),
    alertKey: alert.stateKey,
    archiveId: archiveRef.key,
    archivedAt: new Date().toISOString(),
    sourceRecord: sourceRecord ?? null,
  };
  const changes: Record<string, any> = {
    [`alertArchive/${archiveRef.key}`]: archiveEntry,
  };

  if (alert.source === 'alerts' || alert.source === 'reports') {
    changes[`${alert.source}/${alert.id}`] = null;
  }

  await update(ref(db), changes);
}

export async function restoreArchivedAlert(archivedAlert: any): Promise<void> {
  await restoreArchivedAlerts([archivedAlert]);
}

export async function restoreArchivedAlerts(archivedAlerts: any[]): Promise<void> {
  const changes: Record<string, any> = {};

  for (const archivedAlert of archivedAlerts) {
    changes[`alertArchive/${archivedAlert.archiveId}`] = null;

    if ((archivedAlert.source === 'alerts' || archivedAlert.source === 'reports') && archivedAlert.sourceRecord) {
      changes[`${archivedAlert.source}/${archivedAlert.id}`] = archivedAlert.sourceRecord;
    }
  }

  await update(ref(db), changes);
}

export async function deleteArchivedAlerts(archiveIds: string[]): Promise<void> {
  await Promise.all(archiveIds.map((archiveId) => remove(ref(db, `alertArchive/${archiveId}`))));
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

const API_BASE_URL = env.VITE_API_BASE_URL || 'http://localhost:5002';

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

export async function addUsersToTeam(teamId: string, workerIds: string[]): Promise<void> {
  if (!teamId || !workerIds.length) return;

  const teamRef = ref(db, `teams/${teamId}`);
  const teamSnapshot = await get(teamRef);
  const team = teamSnapshot.val() ?? {};
  const existingWorkerIds = Array.isArray(team.workerIds)
    ? team.workerIds.map((id: any) => String(id))
    : [];
  const uniqueWorkerIds = workerIds
    .map((id) => String(id))
    .filter((id) => id && !existingWorkerIds.includes(id));

  if (!uniqueWorkerIds.length) return;

  const updatedWorkerIds = [...existingWorkerIds, ...uniqueWorkerIds];
  await update(teamRef, { workerIds: updatedWorkerIds });

  const updates: Record<string, any> = {};
  uniqueWorkerIds.forEach((workerId) => {
    updates[`users/${workerId}/team`] = team.name ?? '';
  });

  if (Object.keys(updates).length > 0) {
    await update(ref(db), updates);
  }
}

export async function removeTeam(teamId: string): Promise<void> {
  if (!teamId) return;
  await remove(ref(db, `teams/${teamId}`));
}