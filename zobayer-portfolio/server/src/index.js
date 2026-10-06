import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { pool } from './db.js'

const app = express()
app.set('trust proxy', 1)
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN?.split(',') || true }))
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (_req, res) => res.json({ ok: true }))

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, standardHeaders: true, message: { error: 'Too many messages. Please try again later.' } })
const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

app.post('/api/contact', limiter, async (req, res) => {
  if (req.body?.website) return res.json({ ok: true }) // honeypot: silently drop bots
  const name = clean(req.body?.name, 100), email = clean(req.body?.email, 150), subject = clean(req.body?.subject, 150), message = clean(req.body?.message, 3000)
  if (!name || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Please fill in all fields with a valid email address.' })
  try {
    await pool.query('INSERT INTO contact_messages (name, email, subject, message) VALUES ($1,$2,$3,$4)', [name, email, subject, message])
    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: process.env.CONTACT_TO_EMAIL, reply_to: email, subject: `Portfolio: ${subject}`,
          html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>${esc(message).replace(/\n/g, '<br>')}</p>` }),
      }).catch((e) => console.error('Email failed', e))
    }
    res.status(201).json({ ok: true })
  } catch (e) { console.error(e); res.status(500).json({ error: 'Something went wrong on the server. Please try again.' }) }
})

app.use((_req, res) => res.status(404).json({ error: 'Not found' }))
app.listen(process.env.PORT || 5000, () => console.log('API running'))
