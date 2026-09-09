// src/App.tsx
import { useState, useMemo, useEffect, lazy, Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, isAdminUser } from './firebase';

import { createAppRouter } from './app/routes'; 

const LandingPage = lazy(() => import('./app/pages/LandingPage').then(m => ({ default: m.LandingPage })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-green-600"></div>
  </div>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // null = loading
  const [isInitialized, setIsInitialized] = useState(false);

  const router = useMemo(() => createAppRouter(() => setIsLoggedIn(false)), []);

  // Check Firebase Auth state on app load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) {
          setIsLoggedIn(false);
          localStorage.removeItem('omniToken');
          setIsInitialized(true);
          return;
        }

        if (!user.emailVerified) {
          await signOut(auth);
          setIsLoggedIn(false);
          localStorage.removeItem('omniToken');
          setIsInitialized(true);
          return;
        }

        const isAdmin = await isAdminUser(user.email);
        if (isAdmin) {
          setIsLoggedIn(true);
          localStorage.setItem('omniToken', 'authenticated');
        } else {
          await signOut(auth);
          setIsLoggedIn(false);
          localStorage.removeItem('omniToken');
        }
      } catch (error) {
        console.error('Admin access check failed:', error);
        setIsLoggedIn(false);
        localStorage.removeItem('omniToken');
      } finally {
        setIsInitialized(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLoginSuccess = (token?: string) => {
    if (token) {
      localStorage.setItem('omniToken', token);
    }
    setIsLoggedIn(true);
  };

  // Show loading while checking auth state
  if (!isInitialized || isLoggedIn === null) {
    return <LoadingFallback />;
  }

  // If logged in, show the dashboard application
  if (isLoggedIn) {
    return <RouterProvider router={router} />;
  }

  // Otherwise, show the landing page with lazy loading
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LandingPage onLoginSuccess={handleLoginSuccess} />
    </Suspense>
  );
}