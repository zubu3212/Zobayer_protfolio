import { Section, Reveal, LinkBtn } from './ui'
import { projects } from '../data/content'

const Thumb = ({ hue, title }) => (
  <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${title} thumbnail`} className="block aspect-[16/9] w-full">
    <rect width="400" height="160" fill={`hsl(${hue} 70% 55%)`} /><rect width="400" height="160" fill="rgba(0,0,0,.18)" />
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <rect key={i} x={40 + i * 42} y={135 - (25 + ((i * 37) % 70))} width="26" height={25 + ((i * 37) % 70)} rx="4" fill="rgba(255,255,255,.55)" />)}
    <polyline points="53,100 95,78 137,90 179,52 221,64 263,34 305,46 347,24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

const Cover = ({ p }) =>
  p.image ? (
    <img
      src={p.image}
      alt={`${p.title} screenshot`}
      loading="lazy"
      className="block aspect-[16/9] w-full border-b border-line object-cover object-center"
    />
  ) : (
    <Thumb hue={p.hue} title={p.title} />
  )

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Things I have built with Python, data tools and web technologies.">
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08} className="flex w-full max-w-md sm:w-[calc(50%-0.75rem)] sm:max-w-none lg:w-[calc(33.333%-1rem)]">
            <article className="card flex w-full flex-col overflow-hidden text-center !p-0">
              <Cover p={p} />
              <div className="flex flex-1 flex-col items-center p-5 sm:p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.sample && <span className="chip mt-2">Sample</span>}
                <p className="mt-3 flex-1 text-sm text-muted">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap justify-center gap-2">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <LinkBtn href={p.github} icon="Github">GitHub</LinkBtn>
                  <LinkBtn href={p.demo} icon="ExternalLink" variant="btn-primary">Live Demo</LinkBtn>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
