import CardDetails from '../card-details/card-details-render';
import type { Pokemon } from '../../types/types';
import Spinner from '../Spinner';
import ErrorDataRetrieval from '../ErrorDataRetrieval';
import type React from 'react';
import useLoading from '../../hooks/use-loading';

interface CardListProps {
  pokemons: Pokemon[];
}

const CardList = ({ pokemons }: CardListProps): React.JSX.Element => {
  const { isLoading } = useLoading();
  if (!pokemons || pokemons.length === 0) {
    return <ErrorDataRetrieval />;
  }
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="flex flex-col gap-10 mb-10">
      {pokemons.map((pokemon, index) => (
        <div key={pokemon.url}>
          <div className="flex flex-row flex-wrap justify-around">
            <h3 className="justify-self-center self-center font-mono font-bold text-2xl w-1/6">
              {pokemon.name.toUpperCase()}
            </h3>
            <CardDetails url={pokemon.url} />
          </div>
          {index < pokemons.length - 1 && <hr />}
        </div>
      ))}
    </section>
  );
};

export default CardList;
