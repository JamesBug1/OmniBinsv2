import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';

interface PasswordResetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PasswordResetModal({ isOpen, onClose }: PasswordResetModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setMessage('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setIsLoading(true);
    try {
      const actionCodeSettings = { url: window.location.origin, handleCodeInApp: false } as any;
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setMessage(`If an account exists for ${email}, a reset link was sent. Check your inbox and spam.`);
    } catch (err: any) {
      console.error('sendPasswordResetEmail failed', err);
      // Map common errors
      const code = err?.code || '';
      if (code === 'auth/user-not-found') {
        setMessage(`If an account exists for ${email}, a reset link was sent.`);
      } else if (code === 'auth/invalid-email') {
        setMessage('Please enter a valid email address.');
      } else {
        setMessage('Failed to send reset email. Check console for details.');
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
              <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 bg-white text-gray-700 hover:bg-gray-100 transition-colors shadow-md border border-gray-200">
                <X className="h-6 w-6" />
              </button>

              <div className="bg-green-600 px-8 py-8 text-center">
                <h2 className="text-2xl font-bold text-white">Reset password</h2>
                <p className="mt-2 text-green-50">Enter your email to receive a password reset link</p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="resetEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="pl-10" required />
                  </div>
                </div>

                {message && <p className="text-sm text-gray-700">{message}</p>}

                <div className="flex gap-3">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send reset link'}</Button>
                  <Button type="button" variant="outline" onClick={onClose}>Close</Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default PasswordResetModal;
