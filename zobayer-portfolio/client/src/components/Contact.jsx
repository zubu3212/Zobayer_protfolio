import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react'
import { Section, Reveal } from './ui'
import { profile } from '../data/content'
import { sendContact } from '../lib/api'

const field = 'mt-1.5 w-full rounded-xl border border-line bg-bg/70 px-4 py-3 text-sm placeholder:text-muted/60'
const empty = { name: '', email: '', subject: '', message: '', website: '' }

export default function Contact() {
  const [f, setF] = useState(empty)
  const [st, setSt] = useState({ s: 'idle', m: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setSt({ s: 'loading', m: '' })
    try { await sendContact(f); setSt({ s: 'ok', m: 'Message sent. Thank you, I will reply soon.' }); setF(empty) }
    catch (err) { setSt({ s: 'err', m: err.message }) }
  }

  const items = [
    { Icon: MapPin, title: 'My Location', value: profile.location },
    { Icon: Phone, title: 'Phone Number', value: profile.phone, href: profile.phone && `tel:+88${profile.phone}` },
    { Icon: Mail, title: 'Email Address', value: profile.email, href: profile.email && `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` },
    { Icon: Clock, title: 'Working Hours', value: profile.workingHours },
  ].filter((i) => i.value)

  return (
    <Section id="contact" title="Contact" intro="Open to internships and collaborations in Data Science and Software Engineering.">
      <div className="mx-auto max-w-6xl space-y-8">
        <Reveal>
          <ul className="flex flex-wrap justify-center gap-4">
            {items.map(({ Icon, title, value, href }) => (
              <li key={title} className="card flex w-full flex-col items-center text-center sm:w-64 lg:w-72">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-accent"><Icon size={20} aria-hidden="true" /></span>
                <h3 className="mt-3 text-base font-semibold">{title}</h3>
                {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="mt-1 break-all text-sm text-muted hover:text-accent">{value}</a>
                  : <p className="mt-1 text-sm text-muted">{value}</p>}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} className="card mx-auto max-w-3xl space-y-4 !p-6 sm:!p-8">
            <h3 className="text-center text-xl font-semibold">Send Me a Message</h3>
            <label className="block text-sm">Your Full Name<input required maxLength={100} className={field} placeholder="Enter your name" value={f.name} onChange={set('name')} autoComplete="name" /></label>
            <label className="block text-sm">Your Email Address<input required type="email" maxLength={150} className={field} placeholder="Enter your email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
            <label className="block text-sm">Subject<input required maxLength={150} className={field} placeholder="Project inquiry / Internship / Feedback" value={f.subject} onChange={set('subject')} /></label>
            <label className="block text-sm">Your Message<textarea required rows={5} maxLength={3000} className={field} placeholder="Write your message here..." value={f.message} onChange={set('message')} /></label>
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={f.website} onChange={set('website')} />
            <button className="btn-primary w-full justify-center !py-3" disabled={st.s === 'loading'}>
              Send Message {st.s === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} aria-hidden="true" />}
            </button>
            <p role="status" className={`text-center text-sm ${st.s === 'err' ? 'text-red-500' : 'text-mint'}`}>{st.m}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
