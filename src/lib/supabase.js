import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey && !url.includes('YOUR-PROJECT-REF'));

if (!isSupabaseConfigured) {
  // Loud, friendly warning. The app still runs in offline-only mode (localStorage).
  // Fill in .env to enable cross-device persistence.
  // eslint-disable-next-line no-console
  console.warn(
    '[wedding-quest] Supabase env vars are missing or unset; falling back to localStorage-only mode.',
  );
}

export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null;
