'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import PokemonList from '../../components/pokemon-list/pokemon-list';
import SearchField from '../../components/search-field/search-field';
import { Pokemon, RootState } from '../../utils/types';
import PopUpBox from '../pop-up-box/pop-up-box';

interface PokemonPageClientProps {
  initialPokemons: Pokemon[];
}

export default function PokemonPageClient({
  initialPokemons,
}: PokemonPageClientProps) {
  const [filteredPokemons, setFilteredPokemons] =
    useState<Pokemon[]>(initialPokemons);
  const selectedCount = useSelector(
    (state: RootState) => state.checkbox.selectedCount
  );

  return (
    <>
      <SearchField
        initialPokemons={initialPokemons}
        onSearch={(filtered) => setFilteredPokemons(filtered)}
      />
      <PokemonList pokemonList={filteredPokemons} />
      {selectedCount > 0 && <PopUpBox selectedCount={selectedCount} />}
    </>
  );
}
