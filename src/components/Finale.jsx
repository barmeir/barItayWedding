import { motion } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard.jsx';
import { renderBlessing } from '../content/blessing.js';

const CONFETTI = Array.from({ length: 28 }, (_, i) => i);

export default function Finale({ name, onRestart }) {
  return (
    <div className="relative mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-5 py-10">
      {/* Confetti */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {CONFETTI.map((i) => (
          <motion.span
            key={i}
            initial={{ y: -40, x: `${(i * 37) % 100}%`, opacity: 0, rotate: 0 }}
            animate={{
              y: '110vh',
              opacity: [0, 1, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 6 + (i % 5),
              delay: (i % 7) * 0.3,
              repeat: Infinity,
              ease: 'easeIn',
            }}
            className="absolute h-2 w-2 rounded-sm"
            style={{
              background: ['#a78bfa', '#f472b6', '#22d3ee', '#fde68a'][i % 4],
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
          <Sparkles className="w-3.5 h-3.5" /> The Quest Is Complete
        </div>
        <h1 className="font-display text-5xl leading-tight neon-text">Mazal Tov!</h1>
      </motion.div>

      <GlassCard strong>
        <p className="font-display whitespace-pre-line text-lg leading-relaxed text-white/90">
          {renderBlessing(name)}
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-pink-300/90">
          <Heart className="w-4 h-4" /> Cyprus · April 26, 2026 <Heart className="w-4 h-4" />
        </div>

        <button onClick={onRestart} className="btn-ghost mt-6 w-full justify-center">
          <RotateCcw className="w-4 h-4" /> Sign out
        </button>
      </GlassCard>
    </div>
  );
}
