import { useEffect, useState } from 'react'

const read = () => window.location.hash.replace(/^#\/?/, '').toLowerCase() || 'home'

export default function useHashRoute(valid) {
  const [page, setPage] = useState(() => {
    const p = read()
    return valid.includes(p) ? p : 'home'
  })

  useEffect(() => {
    const onChange = () => {
      const p = read()
      setPage(valid.includes(p) ? p : 'home')
      // ধীরে স্ক্রল না করে সাথে সাথে ওপরে যাবে
      const root = document.documentElement
      root.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)
      requestAnimationFrame(() => { root.style.scrollBehavior = '' })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [valid])

  return page
}