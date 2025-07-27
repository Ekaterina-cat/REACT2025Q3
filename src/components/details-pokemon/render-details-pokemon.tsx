import React from 'react';

import { useLoading } from '../../hooks';
import { CardDetails, Spinner } from '..';
import usePokemonDetail from './use-details-pokemon';

const PokemonDetail = (): React.JSX.Element => {
  const { pokemonId, handleClose } = usePokemonDetail();
  const { isLoading } = useLoading();

  if (!pokemonId) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="w-1/2 p-4 mt-20rem">
      <div className="flex flex-row justify-between">
        <h2 className="text-3xl font-bold mb-4">
          Detailed Description Of The Pokemon
        </h2>
        <button onClick={handleClose} className="font-bold text-9xl">
          X
        </button>
      </div>
      <CardDetails url={`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`} />
    </section>
  );
};

export default PokemonDetail;
