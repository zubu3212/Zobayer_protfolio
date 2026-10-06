import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export const Icon = ({ name, ...p }) => { const C = Icons[name] || Icons.Circle; return <C aria-hidden="true" {...p} /> }

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.25, delay: Math.min(delay, 0.1) }}
    >
      {children}
    </motion.div>
  )
}
export function Section({ id, title, intro, children, alt }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={alt ? 'border-y border-line bg-surface/40' : ''}>
      <div className="wrap-w py-12 sm:py-16">
        <Reveal className="text-center">
          <h2 id={`${id}-h`} className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-12 rounded-full" style={{ backgroundImage: 'linear-gradient(90deg,#7c3aed,#c026d3)' }} />
          {intro && <p className="mx-auto mt-4 max-w-3xl text-sm text-muted sm:text-base">{intro}</p>}
        </Reveal>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  )
}

export function LinkBtn({ href, children, icon, variant = 'btn-ghost', ...rest }) {
  const inner = <>{icon && <Icon name={icon} size={16} />}{children}</>
  if (!href) return <button type="button" disabled title="Add this link in src/data/content.js" className={variant}>{inner}</button>
  const ext = href.startsWith('http')
  return <a href={href} className={variant} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>{inner}</a>
}
