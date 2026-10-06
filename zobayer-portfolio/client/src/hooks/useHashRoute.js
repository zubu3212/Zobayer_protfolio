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
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [valid])

  return page
}