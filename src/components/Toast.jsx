import { AnimatePresence, motion } from 'framer-motion';

export default function Toast({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          key={message}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="pointer-events-none fixed inset-x-0 bottom-8 flex justify-center z-50"
        >
          <div className="glass-strong rounded-full px-5 py-2.5 text-sm text-white/90">
            {message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
