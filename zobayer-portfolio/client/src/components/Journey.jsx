import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Section } from './ui'
import { journey } from '../data/content'

export default function Journey() {
  const [i, setI] = useState(0)
  return (
    <Section id="journey" title="Data Science journey" intro="My path from software engineering to real-world data and AI work. Select a step." alt>
      <ol
        className="flex gap-2 overflow-x-auto pb-4 md:grid md:overflow-visible"
        style={{ gridTemplateColumns: `repeat(${journey.length}, minmax(0, 1fr))` }}
      >
        {journey.map((s, n) => (
          <li key={s.t} className="min-w-[110px] flex-1 md:min-w-0">
            <button onClick={() => setI(n)} aria-pressed={i === n} className="group w-full text-left">
              <div className="relative flex items-center">
                <span className={`z-10 grid h-9 w-9 place-items-center rounded-full border text-sm font-semibold transition ${n <= i ? 'border-accent bg-accent text-white' : 'border-line bg-surface text-muted group-hover:border-accent'}`}>{n + 1}</span>
                {n < journey.length - 1 && <span className={`h-0.5 flex-1 transition ${n < i ? 'bg-accent' : 'bg-line'}`} />}
              </div>
              <span className={`mt-3 block pr-2 text-sm font-medium ${i === n ? 'text-accent' : 'text-muted'}`}>{s.t}</span>
            </button>
          </li>
        ))}
      </ol>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="glass mt-6 rounded-2xl p-6" aria-live="polite">
          <h3 className="text-xl font-semibold">{journey[i].t}</h3>
          <p className="mt-2 max-w-2xl text-muted">{journey[i].d}</p>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}