import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { createUserWithEmailAndPassword, sendEmailVerification, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth, addUser, getIdToken } from '../../firebase';
import TermsModal from './TermsModal';
import VerificationModal from './VerificationModal';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignupSuccess?: (token?: string) => void;
}

export function SignupModal({ isOpen, onClose, onSignupSuccess }: SignupModalProps) {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isApprovalMessageOpen, setIsApprovalMessageOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // basic email + password validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter.');
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]/`~+=;']/ .test(password)) {
      setError('Password must contain at least one special character.');
      return;
    }
    
    if (!agreeTerms) {
      setError('You must agree to the Terms & Conditions.');
      return;
    }

    if (!agreeTerms) {
      setError('You must agree to the Terms & Conditions.');
      return;
    }

    setIsLoading(true);
    try {
      // check whether email is already registered
      const methods = await fetchSignInMethodsForEmail(auth, email).catch(() => []);
      if (methods && methods.length > 0) {
        if (methods.includes('password')) {
          setError('An account with this email already exists. Please sign in or reset your password.');
        } else {
          setError(`This email is already registered via ${methods.join(', ')}. Please sign in with that provider.`);
        }
        setIsLoading(false);
        return;
      }

      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      // store registration as pending until admin approval
      await addUser({ name: 'New User', email, team: 'Operations', role: 'staff', status: 'pending' });
      // send verification email
      if (userCred.user) {
        const actionCodeSettings = {
          // Redirect back to the app after email verification
          url: window.location.origin,
          // This must be true for email link sign-in; false for action code via web
          handleCodeInApp: false,
        } as any;
        try {
          await sendEmailVerification(userCred.user, actionCodeSettings);
          console.log('Verification email sent to', userCred.user.email);
        } catch (sendErr) {
          console.error('sendEmailVerification failed', sendErr);
        }
      }
      // keep the user signed in but require email verification and admin approval before access
      setIsVerificationOpen(true);
      setIsApprovalMessageOpen(true);
    } catch (err: any) {
      console.error('Signup failed', err);
      // map common Firebase Auth error codes to friendly messages
      const code = err?.code || '';
      switch (code) {
        case 'auth/email-already-in-use':
          setError('An account with this email already exists. Try signing in or resetting your password.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Use at least 8 characters and include numbers/symbols.');
          break;
        default:
          setError(err?.message || 'Signup failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2 }} className="relative w-full max-w-md bg-gray-50 rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 bg-white text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors shadow-md border border-gray-200">
                <X className="h-6 w-6" />
              </button>

              <div className="bg-green-600 px-8 py-12 text-center">
                <h2 className="text-3xl font-bold text-white">Create account</h2>
                <p className="mt-2 text-green-50">Sign up for an OMNIBINS account</p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="pl-10" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="pl-10" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" className="pl-10" required />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input id="agreeTerms" type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-600">I agree to the <button type="button" onClick={() => setIsTermsOpen(true)} className="text-green-600 underline">Terms &amp; Conditions</button></label>
                </div>
                <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
                <VerificationModal isOpen={isVerificationOpen} onClose={() => setIsVerificationOpen(false)} approvalStatus="pending" />

                <AnimatePresence>
                  {isApprovalMessageOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
                      Please wait for the approval email. Once approved, a confirmation will be sent to your email.
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>{isLoading ? 'Creating account...' : 'Sign up'}</Button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SignupModal;
