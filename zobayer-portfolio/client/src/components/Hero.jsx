import { MapPin } from 'lucide-react'
import { profile } from '../data/content'
import SocialLinks from './SocialLinks'

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden">
      <div className="wrap-w grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[1.3fr_.7fr] lg:gap-12 lg:py-20">
        <div className="photo-ring order-first mx-auto h-48 w-48 !rounded-full sm:h-56 sm:w-56 lg:order-none lg:h-72 lg:w-72 lg:justify-self-end">
          <img
            src="/zobayer.jpg"
            alt="Md. Abdulla Al Zobayer"
            width="600"
            height="600"
            className="h-full w-full rounded-full object-cover object-[center_30%]"
          />
        </div>

        <div className="text-center lg:order-first lg:text-left">
          <p className="chip inline-flex items-center gap-1.5">
            <MapPin size={12} aria-hidden="true" />
            {profile.location}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl">{profile.name}</h1>
          <p className="mt-3 font-display text-base text-accent sm:text-lg">{profile.role}</p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted sm:text-base lg:mx-0">{profile.intro}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#/projects" className="btn-primary">View My Projects</a>
            <a href="#/contact" className="btn-ghost">Contact Me</a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}