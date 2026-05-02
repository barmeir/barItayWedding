import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import LoginScreen from './components/LoginScreen.jsx';
import VideoIntro from './components/VideoIntro.jsx';
import GameShell from './components/GameShell.jsx';
import { useGuest } from './hooks/useGuest.js';

function Splash() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white/70 font-display text-2xl"
      >
        טוען את המסע…
      </motion.div>
    </div>
  );
}

export default function App() {
  const { progress, loading, error, login, logout, advanceStage, finish } = useGuest();
  const [showVideo, setShowVideo] = useState(false);

  const handleLogin = async (creds) => {
    await login(creds);
    setShowVideo(true);
  };

  const handleVideoBack = () => {
    logout();
    setShowVideo(false);
  };

  const handleVideoContinue = () => {
    setShowVideo(false);
  };

  const handleBackToVideo = () => {
    setShowVideo(true);
  };

  const activeScreen = loading && !progress
    ? 'splash'
    : !progress
    ? 'login'
    : showVideo
    ? 'video'
    : 'game';

  return (
    <>
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {activeScreen === 'splash' && (
          <motion.div key="splash" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Splash />
          </motion.div>
        )}

        {activeScreen === 'login' && (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <LoginScreen onLogin={handleLogin} loading={loading} error={error} />
          </motion.div>
        )}

        {activeScreen === 'video' && (
          <motion.div key="video" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <VideoIntro onContinue={handleVideoContinue} onBack={handleVideoBack} />
          </motion.div>
        )}

        {activeScreen === 'game' && (
          <motion.div key="game" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <GameShell
              progress={progress}
              onLogout={logout}
              onAdvance={advanceStage}
              onFinish={finish}
              onBackToVideo={handleBackToVideo}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
