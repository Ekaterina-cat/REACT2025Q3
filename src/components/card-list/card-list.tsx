import type React from 'react';
import { useNavigate } from 'react-router';

import { useLoading, usePagination } from '../../hooks';
import type { Pokemon } from '../../types';
import { CardDetails, ErrorDataRetrieval, Spinner } from '../';

interface CardListProps {
  pokemons: Pokemon[];
}

const CardList = ({ pokemons }: CardListProps): React.JSX.Element => {
  const { isLoading } = useLoading();
  const { currentCards, numPage, currentPage, setCurrentPage } = usePagination(
    pokemons,
    5
  );
  const navigate = useNavigate();

  if (!pokemons || pokemons.length === 0) {
    return <ErrorDataRetrieval />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const handlePokemonClick = (pokemonName: string) => {
    navigate(`/page=1/${pokemonName}`);
  };

  return (
    <section className="grid grid-cols-1 gap-4 mb-10 overflow-auto">
      <div className="flex flex-row justify-center gap-4 flex-wrap">
        {currentCards.map((pokemon) => (
          <div key={pokemon.url}>
            <div
              className="grid grid-cols-1 gap-4 rounded-lg bg-primary-8 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
              onClick={() => handlePokemonClick(pokemon.name.toLowerCase())}
            >
              <h3 className="text-center font-mono font-bold text-2xl text-white">
                {pokemon.name.toUpperCase()}
              </h3>
              <CardDetails url={pokemon.url} />
            </div>
          </div>
        ))}
      </div>

      <nav>
        <ul className="flex justify-center gap-2">
          {numPage.map((num) => (
            <li key={num}>
              <button
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded ${currentPage === num ? 'bg-gray-6 text-white' : 'bg-gray-8'}`}
              >
                {num}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default CardList;
