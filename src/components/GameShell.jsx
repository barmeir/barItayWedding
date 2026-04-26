import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import StageView from './StageView.jsx';
import MemoryOverlay from './MemoryOverlay.jsx';
import Finale from './Finale.jsx';
import Toast from './Toast.jsx';
import { stages } from '../data/stages.js';

const WRONG_MESSAGES = [
  'Not quite — try again ✨',
  'Hmm, the stars say no.',
  'Close, but the riddle is still asleep.',
  'Take another look around.',
  'Almost! Trust your gut.',
];

export default function GameShell({ progress, onLogout, onAdvance, onFinish }) {
  const totalStages = stages.length;
  const currentIdx = Math.min(progress.current_stage, totalStages); // 0..N
  const isFinished =
    Boolean(progress.finished_at) ||
    (progress.completed_stages && progress.completed_stages.length >= totalStages);

  const [overlayStage, setOverlayStage] = useState(null);
  const [toast, setToast] = useState('');

  const stage = useMemo(() => stages[currentIdx], [currentIdx]);

  useEffect(() => {
    if (isFinished) {
      onFinish();
    }
  }, [isFinished, onFinish]);

  const handleCorrect = () => {
    if (!stage) return;
    setOverlayStage(stage);
  };

  const handleWrong = () => {
    setToast(WRONG_MESSAGES[Math.floor(Math.random() * WRONG_MESSAGES.length)]);
    setTimeout(() => setToast(''), 1800);
  };

  const continueFromOverlay = async () => {
    const justFinished = overlayStage;
    setOverlayStage(null);
    if (justFinished) {
      await onAdvance(justFinished.id); // advances current_stage
    }
  };

  if (isFinished) {
    return <Finale name={progress.name} onRestart={onLogout} />;
  }

  const completedCount = progress.completed_stages?.length || 0;
  const pct = Math.round((completedCount / totalStages) * 100);

  return (
    <div className="relative mx-auto flex min-h-[100dvh] max-w-md flex-col px-5 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Hi {progress.name},</p>
          <p className="font-display text-xl text-white">your quest awaits</p>
        </div>
        <button
          onClick={onLogout}
          className="btn-ghost"
          aria-label="Sign out"
          title="Sign out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-white/60 mb-2">
          <span>
            {completedCount}/{totalStages} unlocked
          </span>
          <span>{pct}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={false}
            animate={{ width: `${pct}%` }}
            transition={{ type: 'spring', stiffness: 110, damping: 24 }}
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6)',
            }}
          />
        </div>
      </div>

      {/* Stage */}
      <div className="flex-1 flex items-center">
        <div className="w-full">
          <AnimatePresence mode="wait">
            {stage && (
              <StageView
                key={stage.id}
                stage={stage}
                onCorrect={handleCorrect}
                onWrong={handleWrong}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <MemoryOverlay
        stage={overlayStage}
        open={Boolean(overlayStage)}
        onContinue={continueFromOverlay}
      />

      <Toast message={toast} />
    </div>
  );
}
