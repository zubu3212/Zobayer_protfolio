import { Section, Reveal, LinkBtn } from './ui'
import { profile, resumeSummary } from '../data/content'

export default function Resume() {
  return (
    <Section id="resume" title="Resume" alt>
      <Reveal>
        <div className="glass mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl p-6 text-center sm:p-8">
          <p className="text-muted">{resumeSummary}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <LinkBtn href={profile.resumeUrl} icon="Download" variant="btn-primary" download="Md_Abdulla_Al_Zobayer_CV.pdf">Download Resume</LinkBtn>
            <LinkBtn href={profile.resumeUrl} icon="Eye" target="_blank" rel="noopener noreferrer">View Resume</LinkBtn>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
