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
    <section className="flex flex-col gap-10 mb-10">
      {currentCards.map((pokemon, index) => (
        <div key={pokemon.url}>
          <div
            className="flex flex-row flex-wrap justify-around cursor-pointer"
            onClick={() => handlePokemonClick(pokemon.name.toLowerCase())}
          >
            <h3 className="justify-self-center self-center font-mono font-bold text-2xl w-1/6">
              {pokemon.name.toUpperCase()}
            </h3>
            <CardDetails url={pokemon.url} />
          </div>
          {index < pokemons.length - 1 && <hr />}
        </div>
      ))}

      <nav>
        <ul className="flex justify-center gap-2">
          {numPage.map((num) => (
            <li key={num}>
              <button
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded ${currentPage === num ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
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
