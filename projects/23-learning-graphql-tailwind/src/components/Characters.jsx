import { useContext } from 'react';
import { CharactersContext } from '../context/CharactersContext.jsx';

export function Characters() {
    const { characters } = useContext(CharactersContext);

  const statusColor = (status) => {
    switch (status) {
      case 'Alive':
        return 'text-green-600';
      case 'Dead':
        return 'text-red-800';
      default:
        return 'text-gray-600';
    }
  }

  return (
    <main className="w-full flex flex-col items-center">
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          characters.map(character => {
            return (
              <li key={character.id}>
                <img className="rounded-full w-full hover:opacity-50 shadow-2xl" src={character.image} alt={character.name} />
                <div className="text-center">
                  <strong>{character.name}</strong> - {character.species}
                </div>
                <div className="flex text-center justify-center">
                  <p className={`font-bold ${statusColor(character.status)}`}>
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
