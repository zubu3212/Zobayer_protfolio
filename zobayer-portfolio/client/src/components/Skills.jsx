import { motion } from 'framer-motion'
import { Section, Reveal, Icon } from './ui'

const groups = [
  {
    title: 'Coding & Programming Languages',
    items: [
      { name: 'Python', icon: 'Code2', level: 91 },
      { name: 'C', icon: 'Terminal', level: 98 },
      { name: 'Java', icon: 'Coffee', level: 90 },
      { name: 'JavaScript', icon: 'Braces', level: 85 },
      { name: 'PHP', icon: 'FileCode2', level: 90 },
      { name: 'HTML', icon: 'FileCode2', level: 98 },
      { name: 'CSS', icon: 'Palette', level: 90 },
      { name: 'SQL', icon: 'Database', level: 98 },
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    items: [
      { name: 'Data Analysis', icon: 'BarChart3', level: 91 },
      { name: 'Data Preprocessing', icon: 'Filter', level: 91 },
      { name: 'Exploratory Data Analysis (EDA)', icon: 'LineChart', level: 90 },
      { name: 'Machine Learning', icon: 'BrainCircuit', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    items: [
      { name: 'VS Code', icon: 'Code2', level: 95 },
      { name: 'Git & GitHub', icon: 'Github', level: 93 },
      { name: 'GitLab', icon: 'GitBranch', level: 90 },
      { name: 'Google Colab', icon: 'Terminal', level: 94 },
      { name: 'React', icon: 'Atom', level: 92 },
      { name: 'Redux', icon: 'Layers', level: 90 },
      { name: 'React Router', icon: 'Route', level: 91 },
      { name: 'Material UI', icon: 'Boxes', level: 90 },
    ],
  },
]

function SkillBar({ name, icon, level, delay }) {
  return (
    <div className="card !px-5 !py-4">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2.5 text-[0.9375rem] font-medium">
          <Icon name={icon} size={18} className="text-accent" />
          {name}
        </span>
        <span className="text-sm font-semibold text-accent">{level}%</span>
      </div>
      <div
        className="mt-3 h-2 overflow-hidden rounded-full bg-line/60"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundImage: 'linear-gradient(90deg, #7c3aed, #c026d3)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Professional Skills"
      intro="My technical level and expertise in programming, data science and web development."
      alt
    >
      <div className="mx-auto max-w-5xl space-y-12">
        {groups.map((g) => (
          <div key={g.title}>
            <Reveal>
              <h3 className="text-center text-lg font-semibold text-accent sm:text-xl">{g.title}</h3>
            </Reveal>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {g.items.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={(i % 2) * 0.1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}