# Md. Abdulla Al Zobayer: Portfolio

React + Vite + Tailwind + Framer Motion frontend, Express + PostgreSQL backend.

## Run locally
```bash
# 1. API
cd server && cp .env.example .env     # fill DATABASE_URL
npm install && npm run db:init && npm run dev

# 2. Frontend (new terminal)
cd client && npm install && npm run dev   # http://localhost:5173 (proxies /api to :5000)
```

## Make it yours
- All text, skills, projects, certificates and links live in `client/src/data/content.js`.
- Links left as `''` render as disabled buttons, so nothing on the site is broken.
- Replace `client/public/resume.pdf` with your own resume.

## Deploy
- **Frontend (Vercel):** root `client`, build `npm run build`, output `dist`, env `VITE_API_URL=https://your-api-url`.
- **Backend (Render/Railway):** root `server`, start `npm start`, set the variables from `server/.env.example`
  (`CLIENT_ORIGIN` = your Vercel URL).
- **Database:** PostgreSQL (Render Postgres, Neon, Supabase or Railway). Run `npm run db:init` once.
- **Email:** set `RESEND_API_KEY` to also get each message by email; without it, messages are only stored.
