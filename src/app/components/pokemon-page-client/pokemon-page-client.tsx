'use client';

import { useState } from 'react';

import PokemonList from '../../components/pokemon-list/pokemon-list';
import SearchField from '../../components/search-field/search-field';
import { Pokemon } from '../../utils/types';

interface PokemonPageClientProps {
  initialPokemons: Pokemon[];
}

export default function PokemonPageClient({
  initialPokemons,
}: PokemonPageClientProps) {
  const [filteredPokemons, setFilteredPokemons] =
    useState<Pokemon[]>(initialPokemons);

  return (
    <>
      <SearchField
        initialPokemons={initialPokemons}
        onSearch={(filtered) => setFilteredPokemons(filtered)}
      />
      <PokemonList pokemonList={filteredPokemons} />
    </>
  );
}
