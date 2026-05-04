import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  type UserCredential,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

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
}): Promise<any> {
  return apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
}

export async function getUsers(): Promise<any> {
  return apiRequest('/users');
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
  workerIds: number[];
}): Promise<any> {
  return apiRequest('/teams', {
    method: 'POST',
    body: JSON.stringify(teamData),
  });
}

export async function getTeams(): Promise<any> {
  return apiRequest('/teams');
}