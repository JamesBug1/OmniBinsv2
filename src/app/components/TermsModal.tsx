import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Terms from '../pages/Terms';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.2 }} className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-auto max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 bg-white text-gray-700 hover:bg-gray-100 transition-colors shadow-md border border-gray-200">
                <X className="h-6 w-6" />
              </button>

              <div className="p-6">
                <Terms />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default TermsModal;
