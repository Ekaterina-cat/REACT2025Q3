import { CardDetails, Spinner } from '@components/';
import { useLoading, usePokemonDetail } from '@utils/hooks';
import React from 'react';
import { twMerge } from 'tailwind-merge';

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
    <section className="w-1/2 mx-auto mt-20rem" data-testid="CardDetails">
      <div className="space-y-4 border rounded-lg shadow-md p-4 bg-primary-800 mt-40 dark:bg-white">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="text-xs font-bold text-white dark:text-black">
            Detailed Description Of The Pokemon
          </h2>
          <button
            onClick={handleClose}
            className={twMerge(
              'font-bold text-2xl',
              'bg-primary-800 rounded-full transition-colors justify-self-end border p-2',
              'dark:bg-white'
            )}
          >
            X
          </button>
        </div>
        <CardDetails url={`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`} />
      </div>
    </section>
  );
};

export default PokemonDetail;
