import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, KeyRound, User } from 'lucide-react';
import GlassCard from './GlassCard.jsx';
import CoupleAvatar from './CoupleAvatar.jsx';

const EXPECTED_PASSWORD = (import.meta.env.VITE_LOGIN_PASSWORD || 'meir').toLowerCase();

export default function LoginScreen({ onLogin, loading, error }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!name.trim()) {
      setLocalError('נא למלא שם.');
      return;
    }
    if (password.trim().toLowerCase() !== EXPECTED_PASSWORD) {
      setLocalError('הסיסמה לא מתאימה. נסו שוב ✨');
      return;
    }

    try {
      await onLogin({ name: name.trim() });
    } catch {
      /* error surfaced by useGuest */
    }
  };

  return (
    <div className="relative mx-auto flex min-h-[100dvh] max-w-md flex-col justify-center px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <CoupleAvatar size="lg" float glow className="mb-5" />
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-white/60 mb-3">
          <Heart className="w-3.5 h-3.5" /> קפריסין · אפריל 2026
        </div>
        <h1 className="font-display text-5xl sm:text-6xl leading-tight neon-text">
          מסע חידות החתונה
        </h1>
        <p className="mt-3 text-white/70 font-display text-2xl">בר ואיתי</p>
      </motion.div>

      <GlassCard strong>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-xs tracking-widest text-white/60 mb-2 flex items-center gap-2">
              <User className="w-3.5 h-3.5" /> השם שלך
            </label>
            <input
              type="text"
              autoComplete="given-name"
              className="input-glass"
              placeholder="איך נקרא לך?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs tracking-widest text-white/60 mb-2 flex items-center gap-2">
              <KeyRound className="w-3.5 h-3.5" /> סיסמה
            </label>
            <input
              type="password"
              autoComplete="current-password"
              className="input-glass"
              placeholder="••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="mt-2 text-xs italic text-white/50">
              רמז: שם המשפחה של הכלה באנגלית קטנה.
            </p>
          </div>

          {(localError || error) && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-rose-300/90"
            >
              {localError || error}
            </motion.p>
          )}

          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'פותחים את השערים…' : 'לצאת למסע'}
          </button>
        </form>
      </GlassCard>

      <p className="mt-6 text-center text-xs text-white/40">
        🤍   נוצר באהבה בר ואיתי    🤍
      </p>
    </div>
  );
}
