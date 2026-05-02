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

export async function loginAndLoad({ phone, name }) {
  const cleanPhone = String(phone || '').trim();
  const cleanName = String(name || '').trim();

  if (!cleanPhone || !cleanName) {
    throw new Error('Phone and name are required.');
  }

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

export async function saveProgress(progress) {
  const payload = {
    phone: progress.phone,
    current_stage: progress.current_stage,
    completed_stages: progress.completed_stages,
    finished_at: progress.finished_at,
    updated_at: new Date().toISOString(),
  };

  const map = readLocal();
  map[progress.phone] = { ...progress, ...payload };
  writeLocal(map);
}
