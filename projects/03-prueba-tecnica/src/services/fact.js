const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!res.ok) {
      throw new Error('Failed to fetch random cat fact')
    }
    const data = await res.json()
    const { fact } = data
    return fact
  } catch (error) {
    console.error(error)
  }
}
