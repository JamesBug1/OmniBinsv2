import { lazy, Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";

// Lazy load non-critical route components for code splitting
const BinMonitoring = lazy(() => import("./pages/BinMonitoring").then(m => ({ default: m.BinMonitoring })));
const MapLocation = lazy(() => import("./pages/MapLocation").then(m => ({ default: m.MapLocation })));
const Alerts = lazy(() => import("./pages/Alerts").then(m => ({ default: m.Alerts })));
const RotIndex = lazy(() => import("./pages/RotIndex").then(m => ({ default: m.RotIndex })));
const Analytics = lazy(() => import("./pages/Analytics").then(m => ({ default: m.Analytics })));
const Workers = lazy(() => import("./pages/Workers").then(m => ({ default: m.Workers })));
const Maintenance = lazy(() => import("./pages/Maintenance").then(m => ({ default: m.Maintenance })));
const UserManagement = lazy(() => import("./pages/UserManagement").then(m => ({ default: m.UserManagement })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));
const Signup = lazy(() => import("./pages/Signup").then(m => ({ default: m.Signup })));
const Terms = lazy(() => import("./pages/Terms").then(m => ({ default: m.Terms })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const ErrorFallback = ({ error }: { error: unknown }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
    <h1 className="text-3xl font-bold text-gray-900 mb-3">Something went wrong</h1>
    <p className="text-base text-gray-600 mb-6">The page failed to load. Please refresh or return to the dashboard.</p>
    <pre className="max-w-xl whitespace-pre-wrap rounded-2xl bg-slate-100 p-4 text-left text-sm text-slate-700">{String(error)}</pre>
    <div className="mt-6 flex gap-3">
      <a href="/" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90">Go to Dashboard</a>
      <button onClick={() => window.location.reload()} className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium">Reload</button>
    </div>
  </div>
);

export function createAppRouter(onLogout: () => void) {
  return createBrowserRouter([
    {
      path: "/",
      element: <DashboardLayout onLogout={onLogout} />,
      errorElement: <ErrorFallback />,
      children: [
        { index: true, Component: Dashboard },
        { path: "bins", element: <Suspense fallback={<LoadingFallback />}><BinMonitoring /></Suspense> },
        { path: "map", element: <Suspense fallback={<LoadingFallback />}><MapLocation /></Suspense> },
        { path: "alerts", element: <Suspense fallback={<LoadingFallback />}><Alerts /></Suspense> },
        { path: "collections", element: <Suspense fallback={<LoadingFallback />}><BinMonitoring /></Suspense> },
        { path: "rot-index", element: <Suspense fallback={<LoadingFallback />}><RotIndex /></Suspense> },
        { path: "analytics", element: <Suspense fallback={<LoadingFallback />}><Analytics /></Suspense> },
        { path: "workers", element: <Suspense fallback={<LoadingFallback />}><Workers /></Suspense> },
        { path: "maintenance", element: <Suspense fallback={<LoadingFallback />}><Maintenance /></Suspense> },
        { path: "users", element: <Suspense fallback={<LoadingFallback />}><UserManagement /></Suspense> },
        { path: "signup", element: <Suspense fallback={<LoadingFallback />}><Signup /></Suspense> },
        { path: "terms", element: <Suspense fallback={<LoadingFallback />}><Terms /></Suspense> },
        { path: "*", element: <Suspense fallback={<LoadingFallback />}><NotFound /></Suspense> },
      ],
    },
  ], { basename: import.meta.env.BASE_URL });
}