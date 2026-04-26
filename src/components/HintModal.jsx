import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Lightbulb, X } from 'lucide-react';

export default function HintModal({ open, onClose, hints = [] }) {
  const [idx, setIdx] = useState(0);
  const safeHints = hints.length ? hints : ['No hint for this one — trust your gut!'];
  const hint = safeHints[Math.min(idx, safeHints.length - 1)];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="glass-strong relative z-10 w-full max-w-sm rounded-3xl p-6"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-2 text-white/60 hover:bg-white/10 hover:text-white transition"
              aria-label="Close hint"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 text-neon-gold mb-4">
              <Lightbulb className="w-5 h-5" />
              <span className="uppercase text-xs tracking-[0.25em]">
                Hint {idx + 1} / {safeHints.length}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-lg leading-relaxed text-white/90 font-display"
              >
                {hint}
              </motion.p>
            </AnimatePresence>

            {safeHints.length > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <button
                  className="btn-ghost"
                  onClick={() => setIdx((i) => Math.max(0, i - 1))}
                  disabled={idx === 0}
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <button
                  className="btn-ghost"
                  onClick={() => setIdx((i) => Math.min(safeHints.length - 1, i + 1))}
                  disabled={idx === safeHints.length - 1}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
