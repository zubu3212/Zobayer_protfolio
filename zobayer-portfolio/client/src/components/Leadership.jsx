import { Section, Reveal, Icon } from './ui'
import { leadership } from '../data/content'
export default function Leadership() {
  return (
    <Section id="leadership" title="Achievements & leadership">
      <ul className="divide-y divide-line border-y border-line">
        {leadership.map((l, i) => (
          <li key={l.t}><Reveal delay={i * 0.04}>
            <div className="grid items-center gap-3 py-6 sm:grid-cols-[auto_1fr_1.4fr] sm:gap-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-mint/10 text-mint"><Icon name={l.icon} size={22} /></span>
              <h3 className="text-xl font-semibold">{l.t}</h3><p className="text-muted">{l.d}</p>
            </div>
          </Reveal></li>
        ))}
      </ul>
    </Section>
  )
}
