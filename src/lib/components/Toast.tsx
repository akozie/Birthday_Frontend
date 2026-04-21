import { motion, AnimatePresence } from 'framer-motion';

export const Toast = ({ message, type }: { message: string, type: 'error' | 'success', onClose: () => void }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className={`fixed top-24 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-2xl border backdrop-blur-md z-[100] ${
          type === 'error' ? 'bg-red-950/80 border-red-500/50 text-red-200' : 'bg-green-950/80 border-green-500/50 text-green-200'
        }`}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
};