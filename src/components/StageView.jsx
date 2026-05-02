import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard.jsx';
import HintModal from './HintModal.jsx';
import { isCorrectAnswer } from '../data/stages.js';

const ACCENT_RING = {
  cyan: 'shadow-[0_0_36px_rgba(34,211,238,0.45)]',
  magenta: 'shadow-[0_0_36px_rgba(244,114,182,0.45)]',
  violet: 'shadow-[0_0_36px_rgba(196,181,253,0.55)]',
  gold: 'shadow-[0_0_36px_rgba(253,230,138,0.45)]',
};

export default function StageView({ stage, onCorrect, onWrong }) {
  const [value, setValue] = useState('');
  const [shaking, setShaking] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const accent = ACCENT_RING[stage.accent] || ACCENT_RING.violet;
  const isMultiChoice = Boolean(stage.options);

  const attempt = (answer) => {
    if (submitting) return;
    setSubmitting(true);
    if (isCorrectAnswer(stage, answer)) {
      onCorrect();
    } else {
      setShaking(true);
      onWrong();
      setTimeout(() => setShaking(false), 600);
    }
    setSubmitting(false);
  };

  const submit = (e) => {
    e.preventDefault();
    attempt(value);
  };

  return (
    <>
      <motion.div
        key={stage.id}
        className={shaking ? 'animate-shake' : ''}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <GlassCard strong className={`relative overflow-hidden ${accent}`}>
          <div className="flex items-center gap-2 mb-4 text-white/60 text-xs tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            שלב {stage.id} מתוך 12
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            {stage.title}
          </h2>

          <p className="text-white/85 leading-relaxed text-lg mb-6">
            {stage.riddle}
          </p>

          {isMultiChoice ? (
            <div className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                {stage.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className="btn-ghost w-full text-right justify-start px-4 py-3"
                    onClick={() => attempt(opt)}
                    disabled={submitting}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="btn-ghost w-full mt-1"
                onClick={() => setHintOpen(true)}
              >
                <Lightbulb className="w-4 h-4" />
                צריכים רמז?
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <input
                type="text"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                className="input-glass text-lg"
                placeholder="התשובה שלכם…"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setHintOpen(true)}
                >
                  <Lightbulb className="w-4 h-4" />
                  צריכים רמז?
                </button>

                <button type="submit" className="btn-primary" disabled={!value.trim()}>
                  <ArrowRight className="w-4 h-4 rotate-180" /> שליחה
                </button>
              </div>
            </form>
          )}
        </GlassCard>
      </motion.div>

      <HintModal
        open={hintOpen}
        onClose={() => setHintOpen(false)}
        hints={stage.hints}
      />
    </>
  );
}
