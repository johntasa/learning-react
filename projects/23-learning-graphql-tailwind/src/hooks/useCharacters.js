import { useContext, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CharactersContext } from '../context/CharactersContext.jsx';
import { GET_CHARACTERS } from '../api/queries.js';

export function useCharacters() {
  const { setCharacters, page, setPagesInfo } = useContext(CharactersContext);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: page },
    fetchPolicy: 'network-only',
  });
 
  useEffect(() => {
    if (data) {
      const { results, info } = data.characters;
      setCharacters(results);
      setPagesInfo(info);
    }
  }, [data, setCharacters, setPagesInfo]);

  return {
    loading,
    error,
  };
}
