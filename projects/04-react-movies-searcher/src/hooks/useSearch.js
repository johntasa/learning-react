import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = query === ''
      return
    }

    if (query === '') {
      setError('Cannot search for empty text')
      return
    }

    if (query.length < 3) {
      setError('Search should contain at least 3 characters')
      return
    }

    setError(null)
  }, [query])


  return { query, setQuery, error }
}