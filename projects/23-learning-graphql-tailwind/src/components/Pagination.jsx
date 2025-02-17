import { useContext } from "react"
import { CharactersContext } from "../context/CharactersContext.jsx";

export function Pagination() {
  const { returnPreviousPage, goNextPage, page, pagesInfo } = useContext(CharactersContext);

  return (
    <div className="flex justify-center gap-7 p-4">
      <button className="min-w-40 bg-blue-500 text-white font-semibold
        py-2 px-4 rounded cursor-pointer hover:bg-blue-800
        disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-500"
        type="button" onClick={returnPreviousPage} disabled={page === 1}
      >
        <span>{'<<<'} Previous</span>
      </button>
      <button className="min-w-40 bg-blue-500 text-white font-semibold
        py-2 px-4 rounded cursor-pointer hover:bg-blue-800
        disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-500"
        type="button" onClick={goNextPage} disabled={page === pagesInfo.pages}
      >
        Next {'>>>'}
      </button>
    </div>
  )
}