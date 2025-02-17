import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int = 1) {
    characters(page: $page) {
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