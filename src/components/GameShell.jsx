import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, LogOut } from 'lucide-react';
import StageView from './StageView.jsx';
import MemoryOverlay from './MemoryOverlay.jsx';
import Finale from './Finale.jsx';
import Toast from './Toast.jsx';
import CoupleAvatar from './CoupleAvatar.jsx';
import { stages } from '../data/stages.js';

const WRONG_MESSAGES = [
  'לא בדיוק — נסו שוב ✨',
  'קרוב, נסו את הרמז.',
  ' אתם בטוחים?',
  'כמעט! סמכו על האינטואיציה.',
    'הממ... הכוכבים אומרים שלא.',
];

export default function GameShell({ progress, onLogout, onAdvance, onFinish, onBackToVideo }) {
  const totalStages = stages.length;
  const currentIdx = Math.min(progress.current_stage, totalStages);
  const isFinished =
    Boolean(progress.finished_at) ||
    (progress.completed_stages && progress.completed_stages.length >= totalStages);

  const [viewIdx, setViewIdx] = useState(currentIdx);
  const [overlayStage, setOverlayStage] = useState(null);
  const [toast, setToast] = useState('');

  // Keep viewIdx at the frontier when new stages are unlocked
  useEffect(() => {
    setViewIdx(currentIdx);
  }, [currentIdx]);

  const stage = useMemo(() => stages[viewIdx], [viewIdx]);
  const isViewingActive = viewIdx === currentIdx;

  useEffect(() => {
    if (isFinished) onFinish();
  }, [isFinished, onFinish]);

  const handleBack = () => {
    if (viewIdx > 0) {
      setViewIdx((v) => v - 1);
    } else {
      onBackToVideo();
    }
  };

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
    if (!justFinished) return;
    if (isViewingActive) {
      await onAdvance(viewIdx);
    } else {
      setViewIdx((v) => Math.min(v + 1, currentIdx));
    }
  };

  const backFromOverlay = () => {
    setOverlayStage(null);
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
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="btn-ghost"
            aria-label="חזרה"
            title="חזרה"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <CoupleAvatar size="sm" />
          <div>
            <p className="text-xs tracking-[0.3em] text-white/50">שלום {progress.name},</p>
            <p className="font-display text-xl text-white">המסע שלך ממתין</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="btn-ghost"
          aria-label="יציאה"
          title="יציאה"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-white/60 mb-2">
          <span>
            {completedCount} מתוך {totalStages}
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
              background: 'linear-gradient(90deg, #22d3ee, #c4b5fd, #ddd6fe, #f472b6)',
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
                key={`${stage.id}-${viewIdx}`}
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
        onBack={backFromOverlay}
      />

      <Toast message={toast} />
    </div>
  );
}
