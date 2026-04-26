import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, KeyRound, Phone, User } from 'lucide-react';
import GlassCard from './GlassCard.jsx';

const EXPECTED_PASSWORD = (import.meta.env.VITE_LOGIN_PASSWORD || 'meir').toLowerCase();

export default function LoginScreen({ onLogin, loading, error }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (!phone.trim() || !name.trim()) {
      setLocalError('Please share your phone and name.');
      return;
    }
    if (password.trim().toLowerCase() !== EXPECTED_PASSWORD) {
      setLocalError('That password is not quite right. Try again ✨');
      return;
    }

    try {
      await onLogin({ phone: phone.trim(), name: name.trim() });
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
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
          <Heart className="w-3.5 h-3.5" /> Cyprus · April 2026
        </div>
        <h1 className="font-display text-5xl sm:text-6xl leading-tight neon-text">
          Wedding Quest
        </h1>
        <p className="mt-3 text-white/70 font-display text-2xl">Bar &amp; Itay</p>
      </motion.div>

      <GlassCard strong>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-widest text-white/60 mb-2 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" /> Phone
            </label>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              className="input-glass"
              placeholder="+972…"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-white/60 mb-2 flex items-center gap-2">
              <User className="w-3.5 h-3.5" /> Your name
            </label>
            <input
              type="text"
              autoComplete="given-name"
              className="input-glass"
              placeholder="How should we greet you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-white/60 mb-2 flex items-center gap-2">
              <KeyRound className="w-3.5 h-3.5" /> Password
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
              Hint: the bride&apos;s last name in lowercase English.
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
            {loading ? 'Opening the gates…' : 'Begin the quest'}
          </button>
        </form>
      </GlassCard>

      <p className="mt-6 text-center text-xs text-white/40">
        Made with love for Bar &amp; Itay&apos;s wedding.
      </p>
    </div>
  );
}
