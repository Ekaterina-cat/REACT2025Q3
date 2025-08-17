'use client';

import type React from 'react';
import { twMerge } from 'tailwind-merge';

import { Pokemon } from '../../utils/types';
import Checkbox from '../checkbox/checkbox';
import PokemonListItem from '../pokemon-list-item/pokemon-list-item';

interface PokemonListProps {
  pokemonList: Pokemon[];
}

export default function PokemonList({ pokemonList }: PokemonListProps) {
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
              <Checkbox id={pokemon.url} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
