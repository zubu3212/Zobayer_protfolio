import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useTheme from './hooks/useTheme'
import useHashRoute from './hooks/useHashRoute'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

function Home() {
  return (<><Hero /><About /><Skills /><Services /><Projects /><Journey /><Education /><Leadership /><Resume /><Contact /></>)
}
const pages = { home: Home, about: About, skills: Skills, services: Services, projects: Projects, journey: Journey, education: Education, leadership: Leadership, resume: Resume, contact: Contact }
const keys = Object.keys(pages)

export default function App() {
  const [dark, toggle] = useTheme()
  const page = useHashRoute(keys)
  const Page = pages[page]

  useEffect(() => {
    const name = page === 'home' ? '' : ` | ${page.charAt(0).toUpperCase()}${page.slice(1)}`
    document.title = `Md. Abdulla Al Zobayer${name}`
  }, [page])

  return (
    <>
      <a href="#main-content" onClick={(e) => { e.preventDefault(); document.getElementById('main-content')?.focus() }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <Navbar dark={dark} toggle={toggle} page={page} />
      <main id="main-content" tabIndex={-1} className="min-h-[75vh] pt-16 outline-none">
        <motion.div key={page} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }}>
          <Page />
        </motion.div>
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}