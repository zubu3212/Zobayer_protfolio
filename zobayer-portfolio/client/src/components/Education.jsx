import { GraduationCap, School } from 'lucide-react'
import { Section, Reveal } from './ui'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="mx-auto max-w-3xl">
        <ol className="relative space-y-8 border-l-2 border-accent/40 pl-8">
          {education.map((e, i) => {
            const Icon = i === 0 ? GraduationCap : School
            return (
              <li key={e.school} className="relative">
                <span className="absolute -left-[49px] top-1 grid h-8 w-8 place-items-center rounded-full bg-accent text-white"><Icon size={16} aria-hidden="true" /></span>
                <Reveal delay={i * 0.08}>
                  <div className="card w-full">
                    <p className="text-sm text-accent">{e.years}</p>
                    <h3 className="mt-1 text-xl font-semibold">{e.school}</h3>
                    {e.dept && <p className="text-muted">{e.dept}</p>}
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
