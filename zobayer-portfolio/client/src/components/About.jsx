import { Section, Reveal } from './ui'
import { about, aboutTags } from '../data/content'
export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-4 text-muted">{about.map((p) => <p key={p}>{p}</p>)}</Reveal>
        <Reveal delay={0.1} className="flex flex-wrap content-start gap-2">{aboutTags.map((t) => <span key={t} className="chip text-ink">{t}</span>)}</Reveal>
      </div>
    </Section>
  )
}
