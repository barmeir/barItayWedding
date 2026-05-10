import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ExternalLink, Lightbulb, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard.jsx';
import HintModal from './HintModal.jsx';
import { isCorrectAnswer, stages } from '../data/stages.js';

const ACCENT_RING = {
  cyan: 'shadow-[0_0_36px_rgba(34,211,238,0.45)]',
  magenta: 'shadow-[0_0_36px_rgba(244,114,182,0.45)]',
  violet: 'shadow-[0_0_36px_rgba(196,181,253,0.55)]',
  gold: 'shadow-[0_0_36px_rgba(253,230,138,0.45)]',
};

function StoryReveal({ stage, onCorrect, onHint }) {
  const [idx, setIdx] = useState(0);
  const total = stage.slides.length;
  const isLast = idx === total - 1;

  return (
    <div className="space-y-8">
      {/* Slide text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-white/90 leading-relaxed text-lg whitespace-pre-line min-h-[6rem]"
        >
          {stage.slides[idx]}
        </motion.p>
      </AnimatePresence>

      {/* Dot progress */}
      <div className="flex justify-center gap-2">
        {stage.slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === idx ? 'w-5 bg-violet-300' : i < idx ? 'w-1.5 bg-white/40' : 'w-1.5 bg-white/15'
            }`}
          />
        ))}
      </div>

      {/* Arrow / continue button */}
      <div className="flex flex-col items-center gap-4">
        <AnimatePresence mode="wait">
          {!isLast ? (
            <motion.button
              key="arrow"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                boxShadow: [
                  '0 0 8px rgba(196,181,253,0.2)',
                  '0 0 28px rgba(196,181,253,0.7)',
                  '0 0 8px rgba(196,181,253,0.2)',
                ],
              }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{
                opacity: { duration: 0.25 },
                scale: { duration: 0.25 },
                boxShadow: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setIdx((i) => i + 1)}
              className="w-16 h-16 rounded-full flex items-center justify-center
                border-2 border-violet-400/70
                bg-gradient-to-br from-violet-500/25 to-fuchsia-500/15
                hover:border-violet-300 hover:from-violet-500/40
                cursor-pointer transition-colors duration-200"
            >
              <ChevronDown className="w-7 h-7 text-violet-200" />
            </motion.button>
          ) : (
            <motion.button
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              type="button"
              className="btn-primary"
              onClick={onCorrect}
            >
              המשיכו <ArrowRight className="w-4 h-4 rotate-180" />
            </motion.button>
          )}
        </AnimatePresence>

        {stage.hints?.length > 0 && (
          <button type="button" className="btn-ghost" onClick={onHint}>
            <Lightbulb className="w-4 h-4" /> צריכים רמז?
          </button>
        )}
      </div>
    </div>
  );
}

export default function StageView({ stage, onCorrect, onWrong }) {
  const [value, setValue] = useState('');
  const [shaking, setShaking] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const accent = ACCENT_RING[stage.accent] || ACCENT_RING.violet;
  const isStory = stage.type === 'story';
  const isForm = stage.type === 'form';
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
            שלב {stage.id} מתוך {stages.length}
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            {stage.title}
          </h2>

          {!isStory && (
            <p className="text-white/85 leading-relaxed text-lg mb-6 whitespace-pre-wrap">
              {stage.riddle}
            </p>
          )}

          {isStory ? (
            <StoryReveal
              stage={stage}
              onCorrect={onCorrect}
              onHint={() => setHintOpen(true)}
            />
          ) : isForm ? (
            <div className="flex flex-col gap-3">
              <a
                href={stage.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <ExternalLink className="w-4 h-4" /> פתחו את הטופס
              </a>
              <button type="button" className="btn-ghost w-full" onClick={onCorrect}>
                סיימתי! ✓
              </button>
            </div>
          ) : isMultiChoice ? (
            <div className="space-y-3">
              <div className="flex flex-col gap-2">
                {stage.options.filter((opt) => opt.trim()).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => attempt(opt)}
                    disabled={submitting}
                    className="group relative w-full flex items-center gap-3 rounded-2xl border border-white/20
                      bg-white/5 px-4 py-3.5 text-right text-white/90 font-medium text-base
                      transition-all duration-150
                      hover:border-violet-400/60 hover:bg-white/10 hover:text-white
                      hover:shadow-[0_0_18px_rgba(196,181,253,0.35)]
                      active:scale-[0.98] active:bg-white/15
                      disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex-1">{opt}</span>
                  </button>
                ))}
              </div>
              <button type="button" className="btn-ghost w-full mt-1" onClick={() => setHintOpen(true)}>
                <Lightbulb className="w-4 h-4" /> צריכים רמז?
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
                <button type="button" className="btn-ghost" onClick={() => setHintOpen(true)}>
                  <Lightbulb className="w-4 h-4" /> צריכים רמז?
                </button>
                <button type="submit" className="btn-primary" disabled={!value.trim()}>
                  <ArrowRight className="w-4 h-4 rotate-180" /> שליחה
                </button>
              </div>
            </form>
          )}
        </GlassCard>
      </motion.div>

      <HintModal open={hintOpen} onClose={() => setHintOpen(false)} hints={stage.hints} />
    </>
  );
}
