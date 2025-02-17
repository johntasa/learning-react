import { Characters, Loader, Pagination } from "./components/index.js";
import { useCharacters } from "./hooks/useCharacters.js";

export default function App() {
  const { loading, error } = useCharacters();

  return (
    <div className="mx-auto p-4 flex flex-col justify-center items-center gap-7 bg-gray-300">
      <h2 className="text-5xl font-bold">My first Apollo app 🚀</h2>
      {
        loading || error
          ? <Loader />
          : (
            <>
              <Characters />
              <Pagination />
            </>
          )
      }
    </div>
  );
}
