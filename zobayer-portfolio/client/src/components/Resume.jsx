import { Section, Reveal, LinkBtn } from './ui'
import { profile, resumeSummary } from '../data/content'

export default function Resume() {
  return (
    <Section id="resume" title="Resume" alt>
      <Reveal>
        <div className="glass flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-muted">{resumeSummary}</p>
          <div className="flex flex-wrap gap-3">
            <LinkBtn
              href={profile.resumeUrl}
              icon="Download"
              variant="btn-primary"
              download="Md_Abdulla_Al_Zobayer_CV.pdf"
            >
              Download Resume
            </LinkBtn>
            <LinkBtn
              href={profile.resumeUrl}
              icon="Eye"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </LinkBtn>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
