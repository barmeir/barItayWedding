import { AnimatePresence, motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground.jsx';
import LoginScreen from './components/LoginScreen.jsx';
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

  return (
    <>
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {loading && !progress ? (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Splash />
          </motion.div>
        ) : !progress ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoginScreen onLogin={login} loading={loading} error={error} />
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GameShell
              progress={progress}
              onLogout={logout}
              onAdvance={advanceStage}
              onFinish={finish}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
