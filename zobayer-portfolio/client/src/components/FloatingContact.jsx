import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, MessagesSquare, Send, Phone, Mail, X } from 'lucide-react'
import { profile } from '../data/content'

const gmailLink = profile.email && `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`

const options = [
  { label: 'WhatsApp', Icon: MessageCircle, color: '#22c55e', href: profile.whatsapp, external: true },
  { label: 'Messenger', Icon: Send, color: '#2563eb', href: profile.messenger, external: true },
  { label: 'Call Now', Icon: Phone, color: '#eab308', href: profile.phone && `tel:+88${profile.phone}` },
  { label: 'Email Us', Icon: Mail, color: '#ef4444', href: gmailLink, external: true },
].filter((o) => o.href)

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.ul
            id="floating-contact-list"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-end gap-2.5"
          >
            {options.map(({ label, Icon, color, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-medium transition hover:border-accent"
                >
                  {label}
                  <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ background: color }}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="floating-contact-list"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition hover:scale-105"
        style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #c026d3)', boxShadow: '0 0 30px rgb(var(--accent) / 0.6)' }}
      >
        {open ? <X size={24} /> : <MessagesSquare size={24} />}
      </button>
    </div>
  )
}