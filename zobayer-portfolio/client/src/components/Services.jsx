import { Section, Reveal, Icon } from './ui'

const services = [
  { icon: 'Code2', title: 'Website Design and Development', desc: 'Clean, responsive websites built with HTML, CSS, JavaScript and React.' },
  { icon: 'ShoppingCart', title: 'E-Commerce Website Development', desc: 'Online store pages with product listings, cart flow and a SQL-backed database.' },
  { icon: 'Laptop', title: 'Landing Page Design and Development', desc: 'Focused single-page sites for events, products, portfolios and small businesses.' },
  { icon: 'Rocket', title: 'Website Speed Optimization', desc: 'Lighter pages and cleaner code so your website loads faster on any device.' },
  { icon: 'Paintbrush', title: 'Website Redesign', desc: 'A fresh, modern look for an existing website, with a mobile-friendly layout.' },
  { icon: 'Wrench', title: 'Website Maintenance', desc: 'Bug fixes, content updates and small improvements to keep your site running well.' },
]

export default function Services() {
  return (
    <Section id="services" title="My Services" intro="Choose the service you need from the options below.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.06} className="flex">
            <article className="card w-full text-center">
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent"><Icon name={s.icon} size={22} /></span>
              <h3 className="mt-4 text-base font-semibold sm:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
