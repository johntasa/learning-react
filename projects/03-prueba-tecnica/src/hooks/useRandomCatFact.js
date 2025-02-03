import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact.js'

export const useRandomCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
