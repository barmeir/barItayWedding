import { useCallback, useEffect, useState } from 'react';
import { loginAndLoad, saveProgress } from '../lib/progress.js';

const SESSION_KEY = 'wq:session';

function readSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeSession(session) {
  if (!session) {
    localStorage.removeItem(SESSION_KEY);
  } else {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
}

export function useGuest() {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Try to restore a session on mount.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const session = readSession();
      if (!session?.phone || !session?.name) {
        setLoading(false);
        return;
      }
      try {
        const loaded = await loginAndLoad(session);
        if (!cancelled) setProgress(loaded);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Failed to restore session', e);
        writeSession(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async ({ phone, name }) => {
    setError(null);
    setLoading(true);
    try {
      const loaded = await loginAndLoad({ phone, name });
      writeSession({ phone: loaded.phone, name });
      setProgress({ ...loaded, name });
    } catch (e) {
      setError(e?.message || 'Login failed.');
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    writeSession(null);
    setProgress(null);
  }, []);

  const advanceStage = useCallback(
    async (stageId) => {
      setProgress((prev) => {
        if (!prev) return prev;
        const completed = Array.from(new Set([...(prev.completed_stages || []), stageId]));
        const nextStage = Math.max(prev.current_stage, stageId);
        const next = {
          ...prev,
          completed_stages: completed,
          current_stage: nextStage,
        };
        // fire-and-forget save
        saveProgress(next).catch((e) => console.error('saveProgress failed', e));
        return next;
      });
    },
    [],
  );

  const finish = useCallback(async () => {
    setProgress((prev) => {
      if (!prev) return prev;
      const next = { ...prev, finished_at: new Date().toISOString() };
      saveProgress(next).catch((e) => console.error('saveProgress failed', e));
      return next;
    });
  }, []);

  return { progress, loading, error, login, logout, advanceStage, finish };
}
