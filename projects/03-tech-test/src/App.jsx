import './App.css'
import { useRandomFact } from './hooks/useRandomFact'

function App() {
  const { fact, refreshFact } = useRandomFact()

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Nuevo fact</button>
      {fact && <p>{fact}</p>}
    </>
  )
}

export default App
