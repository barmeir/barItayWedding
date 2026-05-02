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

function defaultProgress(name) {
  return {
    name,
    current_stage: 0,
    completed_stages: [],
    finished_at: null,
    updated_at: new Date().toISOString(),
  };
}

export async function loginAndLoad({ name }) {
  const cleanName = String(name || '').trim();

  if (!cleanName) {
    throw new Error('Name is required.');
  }

  const map = readLocal();
  const existing = map[cleanName];
  if (existing) {
    map[cleanName] = existing;
    writeLocal(map);
    return existing;
  }
  const fresh = defaultProgress(cleanName);
  map[cleanName] = fresh;
  writeLocal(map);
  return fresh;
}

export async function saveProgress(progress) {
  const payload = {
    name: progress.name,
    current_stage: progress.current_stage,
    completed_stages: progress.completed_stages,
    finished_at: progress.finished_at,
    updated_at: new Date().toISOString(),
  };

  const map = readLocal();
  map[progress.name] = { ...progress, ...payload };
  writeLocal(map);
}
