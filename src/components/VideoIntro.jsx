import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import GlassCard from './GlassCard.jsx';

export default function VideoIntro({ onContinue, onBack }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Enter') onContinue(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onContinue]);

  return (
    <div className="relative mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard strong>
          <p className="text-center font-display text-2xl text-white mb-4">
            לפני שמתחילים…
          </p>

          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/40 mb-5">
            <video
              ref={videoRef}
              src="intro-video.mp4"
              className="h-full w-full"
              controls
              autoPlay
              playsInline
            />
          </div>

          <div className="flex gap-3">
            <button type="button" className="btn-ghost flex-1" onClick={onBack}>
              <ChevronRight className="w-4 h-4" /> חזרה
            </button>
            <button type="button" className="btn-primary flex-1" onClick={onContinue}>
              לצאת למסע <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
