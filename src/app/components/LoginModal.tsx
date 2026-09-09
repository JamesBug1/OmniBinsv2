import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { signInWithEmail, getIdToken, isAdminUser } from '../../firebase';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { SignupModal } from './SignupModal';
import TermsModal from './TermsModal';
import PasswordResetModal from './PasswordResetModal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const navigate = useNavigate();
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signInWithEmail(email, password);

      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error('No authenticated user found');
      }

      if (!currentUser.emailVerified) {
        await signOut(auth);
        setError('Please verify your email before accessing the admin dashboard.');
        return;
      }

      const isAdmin = await isAdminUser(currentUser.email);
      if (!isAdmin) {
        await signOut(auth);
        setError('Only admin accounts can log in to OMNIBINS.');
        return;
      }

      const token = await getIdToken();
      onLoginSuccess?.(token ?? undefined);
      onClose();
    } catch (err) {
      console.error('Login failed:', err);
      setError('Login failed. Admin access only. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-gray-50 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 bg-white text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors shadow-md border border-gray-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Header */}
              <div className="bg-green-600 px-8 py-12 text-center">
                <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                <p className="mt-2 text-green-50">Sign in to your OMNIBINS account</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button type="button" onClick={() => setIsResetOpen(true)} className="text-green-600 hover:text-green-700 font-medium">
                    Forgot password?
                  </button>
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
                <div className="-mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full text-green-600 border-green-600"
                    onClick={() => { onClose(); setIsSignupOpen(true); }}
                    disabled={isLoading}
                  >
                    Create an account
                  </Button>
                </div>

                <div className="mt-2 text-center">
                  <button type="button" onClick={() => { onClose(); setIsTermsOpen(true); }} className="text-sm text-gray-500 underline">Terms &amp; Conditions</button>
                </div>
              </form>
              <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} onSignupSuccess={() => { setIsSignupOpen(false); onLoginSuccess?.(); }} />
              <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
              {/* Password reset modal */}
              {/* lazy include */}
              <PasswordResetModal isOpen={isResetOpen} onClose={() => setIsResetOpen(false)} />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

