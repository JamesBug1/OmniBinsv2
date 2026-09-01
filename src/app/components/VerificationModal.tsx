import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { auth } from '../../firebase';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  approvalStatus?: 'pending' | 'approved';
}

export function VerificationModal({ isOpen, onClose, approvalStatus = 'pending' }: VerificationModalProps) {
  const initialEmail = auth.currentUser?.email || '';
  const message = approvalStatus === 'approved'
    ? 'Your email has been verified and your account has been approved. You can now continue.'
    : initialEmail
      ? `Your account is pending approval. Please wait for the approval email. Once approved, a confirmation will be sent to ${initialEmail}.`
      : 'Your account is pending approval. Please wait for the approval email. Once approved, a confirmation will be sent to your email.';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
              <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 bg-white text-gray-700 hover:bg-gray-100 transition-colors shadow-md border border-gray-200">
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-lg font-semibold mb-2">
                {approvalStatus === 'approved' ? 'Account approved' : 'Waiting for approval'}
              </h3>
              <p className="text-sm text-gray-700 mb-4">{message}</p>

              <div className="flex justify-end gap-3">
                <Button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white">Close</Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default VerificationModal;
