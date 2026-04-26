# Wedding Quest · Bar &amp; Itay (Cyprus 2026)

A bespoke, mobile-first scavenger-hunt web app for Bar &amp; Itay's wedding.
Guests log in with their phone + name + a shared password, then walk through
12 placeholder riddle stages with cinematic memory reveals and a personalized
blessing on the finale screen.

## Stack
- **React 18** + **Vite**
- **Tailwind CSS** (custom dark + neon theme, glassmorphism utilities)
- **Framer Motion** (page transitions, success/hint animations, animated background)
- **lucide-react** (icons)
- **Supabase** (Postgres) for cross-device progress persistence — falls back to `localStorage` if not configured

## Quick start

```bash
npm install
cp .env.example .env       # then fill in your Supabase keys (see below)
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Environment variables (`.env`)

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Your Supabase project URL. |
| `VITE_SUPABASE_ANON_KEY` | The Supabase **anon public** key. |
| `VITE_LOGIN_PASSWORD` | Optional. Defaults to `meir` (the bride's last name in lowercase English). |

If `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` are missing or unchanged from
the placeholder, the app runs in **offline mode** using `localStorage` only —
useful for previewing without a backend.

## Supabase schema

Open the Supabase SQL editor and run:

```sql
create table if not exists public.users (
  phone       text primary key,
  name        text not null,
  created_at  timestamptz not null default now()
);

create table if not exists public.progress (
  phone             text primary key references public.users(phone) on delete cascade,
  current_stage     int not null default 0,
  completed_stages  int[] not null default '{}',
  finished_at       timestamptz,
  updated_at        timestamptz not null default now()
);

-- Small private event; we keep RLS off so the anon key can upsert.
alter table public.users    disable row level security;
alter table public.progress disable row level security;
```

> ⚠️ Disabling RLS lets anyone with the anon key read/write these tables.
> That's fine for a private event with ~20 guests where cheating is not a
> concern. If you want to lock it down, enable RLS and write policies that
> restrict writes to the row matching `phone = auth.jwt() ->> 'phone'` (and
> mint a custom JWT for each guest at login).

## Customizing the riddles

All stage content lives in `src/data/stages.js`:

- `title` — shown on the stage card and on the memory overlay.
- `riddle` — the puzzle prompt.
- `answers` — array of accepted strings (case-insensitive, trimmed).
  Add as many synonyms / Hebrew variants as you like.
- `hints` — array of strings shown one at a time in the hint modal.
- `image` — path inside `public/` (defaults to `/images/stage-XX.jpg`).
- `caption` — small line shown over the memory image.
- `accent` — `cyan` | `magenta` | `violet` | `gold`. Tints the stage glow.

The final blessing is in `src/content/blessing.js` and uses `{name}` as a
placeholder for the guest's name.

## Memory images

Drop `stage-01.jpg` … `stage-12.jpg` into `public/images/`. Missing files fall
back to a styled gradient card so the experience always works.

Recommended: portrait 4:5, ~720px wide minimum.

## Build &amp; deploy

```bash
npm run build      # outputs to dist/
npm run preview    # serves the production build locally
```

Deploys cleanly to Vercel, Netlify, Cloudflare Pages, etc. Set the same
`VITE_*` env vars in your hosting provider.

## Project layout

```
src/
├── App.jsx                     # routes Login → Game → Finale
├── main.jsx
├── index.css                   # Tailwind + glass / neon utilities
├── lib/
│   ├── supabase.js             # client (auto-disables when env is missing)
│   └── progress.js             # upsertUser, loadProgress, saveProgress
├── data/stages.js              # 12 placeholder stages
├── content/blessing.js         # final blessing template
├── hooks/useGuest.js           # session + Supabase sync
└── components/
    ├── AnimatedBackground.jsx
    ├── GlassCard.jsx
    ├── LoginScreen.jsx
    ├── GameShell.jsx
    ├── StageView.jsx
    ├── HintModal.jsx
    ├── MemoryOverlay.jsx
    ├── Finale.jsx
    └── Toast.jsx
```

Made with love for Bar &amp; Itay 💞
