
const API_KEY = '2e32c75'

export async function searchMovies ({query}) {
  try {
    if(query === '') return

    const respose = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
    const data = await respose.json()

    const hasMovies = data?.Response === 'True'

    if (hasMovies) {
      const movies = data.Search
  
      return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      }))
    }

    return
  } catch (error) {
    throw new Error('Error searching movies', error)
  }
}