import { useState, useEffect } from "react"
import { getRandomFact } from "../services/fact"

export const useRandomFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    // getRandomFact().then(newFact => setFact(newFact))
    getRandomFact().then(setFact)
  }
  
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}