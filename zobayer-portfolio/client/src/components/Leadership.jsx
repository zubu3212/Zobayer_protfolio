import { Section, Reveal, Icon } from './ui'
import { leadership } from '../data/content'

export default function Leadership() {
  return (
    <Section id="leadership" title="Achievements & leadership">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-5">
        {leadership.map((l, i) => (
          <Reveal key={l.t} delay={(i % 3) * 0.06} className="flex w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.85rem)]">
            <div className="card w-full text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-mint/10 text-mint"><Icon name={l.icon} size={22} /></span>
              <h3 className="mt-4 text-lg font-semibold">{l.t}</h3>
              <p className="mt-2 text-sm text-muted">{l.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
