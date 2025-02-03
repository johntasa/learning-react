import { useCallback, useState } from 'react'
import './App.css'
// import { useRef } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'

function App() {
  const [ sort, setSort ] = useState(false)
  const { query, setQuery, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({query, sort})

  const debounceGetMovies = useCallback(
    debounce(query => {
      getMovies({query})
    }, 500)
  , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }
  
  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
      debounceGetMovies(newQuery)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Searcher</h1>
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name='query' placeholder='Avengers, The Lord of The Ring...'/>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} query={query} />
        }
      </main>
    </div>
  )
}

export default App
