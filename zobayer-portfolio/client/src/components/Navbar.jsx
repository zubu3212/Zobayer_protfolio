import { useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', key: 'home' }, { label: 'About', key: 'about' }, { label: 'Skills', key: 'skills' },
  { label: 'Services', key: 'services' }, { label: 'Projects', key: 'projects' }, { label: 'Journey', key: 'journey' },
  { label: 'Education', key: 'education' }, { label: 'Leadership', key: 'leadership' }, { label: 'Resume', key: 'resume' }, { label: 'Contact', key: 'contact' },
]
const href = (k) => (k === 'home' ? '#/' : `#/${k}`)

export default function Navbar({ dark, toggle, page }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-x-0 border-t-0">
      <nav aria-label="Main" className="wrap-w flex h-16 items-center justify-between">
        <a href="#/" className="font-display text-lg font-semibold">Zobayer<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-5 text-sm xl:flex">
          {links.map((l) => (
            <li key={l.key}>
              <a href={href(l.key)} aria-current={page === l.key ? 'page' : undefined}
                className={page === l.key ? 'font-semibold text-accent' : 'text-muted hover:text-accent'}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="rounded-full border border-line p-2 hover:border-accent">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="rounded-full border border-line p-2 xl:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg px-5 py-3 xl:hidden">
          {links.map((l) => (
            <li key={l.key}>
              <a onClick={() => setOpen(false)} href={href(l.key)} aria-current={page === l.key ? 'page' : undefined}
                className={`block py-2.5 ${page === l.key ? 'font-semibold text-accent' : 'text-muted hover:text-accent'}`}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
