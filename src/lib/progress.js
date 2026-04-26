import { supabase, isSupabaseConfigured } from './supabase.js';

const LS_KEY = 'wq:progress';

function readLocal() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeLocal(map) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(map));
  } catch {
    /* ignore quota errors */
  }
}

function defaultProgress(phone, name) {
  return {
    phone,
    name,
    current_stage: 0,
    completed_stages: [],
    finished_at: null,
    updated_at: new Date().toISOString(),
  };
}

/**
 * Insert or update the user, then ensure a progress row exists.
 * Returns the loaded progress object.
 */
export async function loginAndLoad({ phone, name }) {
  const cleanPhone = String(phone || '').trim();
  const cleanName = String(name || '').trim();

  if (!cleanPhone || !cleanName) {
    throw new Error('Phone and name are required.');
  }

  if (isSupabaseConfigured) {
    const { error: userErr } = await supabase
      .from('users')
      .upsert({ phone: cleanPhone, name: cleanName }, { onConflict: 'phone' });
    if (userErr) throw userErr;

    // Try to read existing progress.
    const { data: existing, error: readErr } = await supabase
      .from('progress')
      .select('*')
      .eq('phone', cleanPhone)
      .maybeSingle();
    if (readErr) throw readErr;

    if (existing) {
      return { ...existing, name: cleanName };
    }

    const fresh = defaultProgress(cleanPhone, cleanName);
    const { error: insErr } = await supabase.from('progress').insert({
      phone: fresh.phone,
      current_stage: 0,
      completed_stages: [],
    });
    if (insErr) throw insErr;
    return fresh;
  }

  // Offline mode
  const map = readLocal();
  const existing = map[cleanPhone];
  if (existing) {
    existing.name = cleanName;
    map[cleanPhone] = existing;
    writeLocal(map);
    return existing;
  }
  const fresh = defaultProgress(cleanPhone, cleanName);
  map[cleanPhone] = fresh;
  writeLocal(map);
  return fresh;
}

/**
 * Persist updated progress for the given phone.
 */
export async function saveProgress(progress) {
  const payload = {
    phone: progress.phone,
    current_stage: progress.current_stage,
    completed_stages: progress.completed_stages,
    finished_at: progress.finished_at,
    updated_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    const { error } = await supabase
      .from('progress')
      .upsert(payload, { onConflict: 'phone' });
    if (error) throw error;
    return;
  }

  const map = readLocal();
  map[progress.phone] = { ...progress, ...payload };
  writeLocal(map);
}
