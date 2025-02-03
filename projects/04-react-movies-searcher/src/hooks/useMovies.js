import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const previousQuery = useRef(query)

  const getMovies = async ({ query }) => {
    if (query === previousQuery.current) return

    try {
      setLoading(true)
      previousQuery.current = query
      const newMovies = await searchMovies({query})
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort , movies])

  return { movies: sortedMovies, getMovies, loading, error }
}