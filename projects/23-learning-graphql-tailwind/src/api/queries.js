import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        gender
        id
        image
        name
        status
        species
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }
`