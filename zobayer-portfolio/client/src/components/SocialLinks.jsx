import { Facebook, Instagram, Linkedin, Github, MessageCircle } from 'lucide-react'
import { profile } from '../data/content'

const items = [
  { label: 'Facebook', Icon: Facebook, href: profile.facebook },
  { label: 'Instagram', Icon: Instagram, href: profile.instagram },
  { label: 'LinkedIn', Icon: Linkedin, href: profile.linkedin },
  { label: 'WhatsApp', Icon: MessageCircle, href: profile.whatsapp },
  { label: 'GitHub', Icon: Github, href: profile.github },
]

export default function SocialLinks() {
  const visible = items.filter((i) => i.href)
  return (
    <ul className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
      {visible.map(({ label, Icon, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-surface/60 text-muted transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_28px_rgb(var(--accent)/0.7)]"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}