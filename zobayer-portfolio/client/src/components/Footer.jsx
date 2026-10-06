import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content'

export default function Footer() {
  const gmail = profile.email && `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`
  const s = [[Github, 'GitHub', profile.github], [Linkedin, 'LinkedIn', profile.linkedin], [Mail, 'Email', gmail]]
  return (
    <footer className="border-t border-line">
      <div className="wrap-w flex flex-col items-center gap-4 pb-28 pt-8 text-center sm:pb-8">
        <ul className="flex gap-3">
          {s.map(([I, l, h]) => (
            <li key={l}>
              {h ? <a href={h} aria-label={l} target="_blank" rel="noopener noreferrer" className="block rounded-full border border-line p-2 hover:border-accent hover:text-accent"><I size={16} /></a>
                : <span role="img" aria-label={`${l} (not added yet)`} className="block rounded-full border border-line p-2 opacity-40"><I size={16} /></span>}
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted">© 2026 Md. Abdulla Al Zobayer. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
