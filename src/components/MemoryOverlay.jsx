import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ACCENT_GRADIENTS = {
  cyan: 'from-cyan-400/40 via-sky-400/20 to-violet-500/40',
  magenta: 'from-pink-400/40 via-fuchsia-400/20 to-violet-500/40',
  violet: 'from-violet-400/40 via-indigo-400/20 to-fuchsia-500/40',
  gold: 'from-amber-300/40 via-pink-300/20 to-violet-500/40',
};

function Fallback({ accent = 'violet', title }) {
  return (
    <div
      className={`relative h-full w-full bg-gradient-to-br ${ACCENT_GRADIENTS[accent] || ACCENT_GRADIENTS.violet} flex items-center justify-center`}
    >
      <div className="text-center">
        <Sparkles className="mx-auto mb-3 h-10 w-10 text-white/80" />
        <p className="font-display text-3xl text-white/90">{title}</p>
        <p className="mt-2 text-xs text-white/50">(memory image coming soon)</p>
      </div>
    </div>
  );
}

export default function MemoryOverlay({ stage, open, onContinue }) {
  const [imageBroken, setImageBroken] = useState(false);

  useEffect(() => {
    setImageBroken(false);
  }, [stage?.id, open]);

  if (!stage) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 22 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl glass-strong"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {stage.image && !imageBroken ? (
                <motion.img
                  src={stage.image}
                  alt={stage.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  onError={() => setImageBroken(true)}
                />
              ) : (
                <Fallback accent={stage.accent} title={stage.title} />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute inset-x-0 bottom-0 p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Stage {stage.id} unlocked
                </p>
                <h2 className="mt-1 font-display text-3xl text-white">
                  {stage.title}
                </h2>
                {stage.caption && (
                  <p className="mt-2 text-white/80">{stage.caption}</p>
                )}
              </motion.div>
            </div>

            <div className="p-5">
              <button onClick={onContinue} className="btn-primary w-full">
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
