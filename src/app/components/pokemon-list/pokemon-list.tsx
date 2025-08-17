import { API_BASE_URL } from '@utils/constants';
import type React from 'react';
import { twMerge } from 'tailwind-merge';

import Checkbox from '../checkbox/checkbox';
import PokemonListItem from '../pokemon-list-item/pokemon-list-item';

export interface Pokemon {
  name: string;
  url: string;
}

const PokemonList = async () => {
  const response = await fetch(`${API_BASE_URL}pokemon/?limit=20`, {
    cache: 'force-cache',
  });
  if (!response.ok) {
    throw new Error(`Error while receiving data: ${response.status}`);
  }
  const pokemons = await response.json();
  const pokemonList = pokemons.results;

  return (
    <section className="grid grid-cols-1 gap-4 mb-10 overflow-auto">
      <div className="flex flex-row justify-center gap-4 flex-wrap">
        {pokemonList.map((pokemon: Pokemon) => (
          <div
            key={pokemon.url}
            className={twMerge(
              'grid grid-cols-1 gap-4',
              'rounded-lg bg-primary-800',
              'shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300',
              'dark:bg-white'
            )}
          >
            <div>
              <h3 className="text-center font-mono font-bold text-2xl text-white dark:text-black">
                {pokemon.name.toUpperCase()}
              </h3>
              <PokemonListItem url={pokemon.url} />
            </div>
            <Checkbox id={pokemon.url} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PokemonList;
