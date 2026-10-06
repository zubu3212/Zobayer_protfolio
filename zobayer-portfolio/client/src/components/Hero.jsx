import { MapPin } from 'lucide-react'
import { profile } from '../data/content'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden">
      <div className="wrap-w py-12 sm:py-16 lg:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16">
          <div className="photo-ring h-44 w-44 shrink-0 !rounded-full sm:h-52 sm:w-52 lg:order-2 lg:h-72 lg:w-72">
            <img src="/zobayer.jpg" alt="Md. Abdulla Al Zobayer" width="600" height="600" className="h-full w-full rounded-full object-cover object-[center_30%]" />
          </div>
          <div className="text-center lg:order-1 lg:max-w-xl lg:text-left">
            <p className="chip inline-flex items-center gap-1.5"><MapPin size={12} aria-hidden="true" />{profile.location}</p>
            <h1 className="mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl">{profile.name}</h1>
            <p className="mt-3 font-display text-base text-accent sm:text-lg">{profile.role}</p>
            <p className="mt-4 text-sm text-muted sm:text-base">{profile.intro}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#/projects" className="btn-primary">View My Projects</a>
              <a href="#/contact" className="btn-ghost">Contact Me</a>
            </div>
            <div className="[&>ul]:justify-center lg:[&>ul]:justify-start"><SocialLinks /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
