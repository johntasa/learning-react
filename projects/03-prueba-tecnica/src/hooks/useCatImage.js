import { useEffect, useState } from 'react'
import { getImgURL } from '../services/imgURL.js'

const CAT_ENDPOINT = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]
    getImgURL(firstWord).then((url) => setImageURL(url))
  }, [fact])

  return { imageURL: `${CAT_ENDPOINT}${imageURL}` }
}
