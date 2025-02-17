import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../api/queries.js';

export function Characters() {

  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <main className="w-full flex flex-col items-center">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          data.characters.results.map(character => {
            return (
              <li key={character.id}>
                <img className="rounded-2xl w-full hover:opacity-50 shadow-2xs" src={character.image} alt={character.name} />
                <div>
                  <strong>{character.name}</strong> - {character.species}
                </div>
                <div className="flex">
                  <p className={` font-bold text-gray-700 ${character.status === 'Alive' ? 'text-green-600' : 'text-red-800'}`}>
                    {character.status}
                  </p> - {character.gender}
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}
