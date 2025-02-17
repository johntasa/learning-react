import { createContext, useState } from "react";

export const CharactersContext = createContext();

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [pagesInfo, setPagesInfo] = useState({
    count: 826,
    next: 2,
    pages: 42,
    prev: null
  });
  const [page, setPage] = useState(1);

  const returnPreviousPage = () => {
    if (pagesInfo.prev) {
      setPage(pagesInfo.prev);
    }
  };

  const goNextPage = () => {
    if (pagesInfo.next) {
      setPage(pagesInfo.next);
    }
  };

  return (
    <CharactersContext.Provider value={{
      characters,
      setCharacters,
      pagesInfo,
      setPagesInfo,
      page,
      returnPreviousPage,
      goNextPage
    }}>
      {children} 
    </CharactersContext.Provider>
  );
}
