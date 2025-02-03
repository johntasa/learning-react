export const getImgURL = async (firstWord) => {
  try {
    const res = await fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
    if (!res.ok) {
      throw new Error('Failed to fetch cat image')
    }
    const data = await res.json()
    const { url } = data
    return url
  } catch (error) {
    console.error(error)
  }
}
