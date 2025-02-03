import { useCatImage } from './hooks/useCatImage.js'
import { useRandomCatFact } from './hooks/useRandomCatFact.js'

export function App () {
  const { fact, refreshFact } = useRandomCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Obtener otro hecho</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='Image got from endpoint after getting 3 words' />}
    </main>
  )
}
