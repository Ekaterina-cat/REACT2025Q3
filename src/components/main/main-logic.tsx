import { useCallback, useEffect, useState } from 'react';

import useHandleLocalStorage from '../../hooks/use-handle-local-storage';
import { PokemonService } from '../../services/pokemonService';
import type { Pokemon } from '../../types';

const MainLogic = () => {
  const [searchText, setSearchText] = useHandleLocalStorage(
    'savedSearchPokemon',
    ''
  );
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const loadPokemons = useCallback(async () => {
    const fetchedPokemons = await new PokemonService().fetchPokemons();
    setPokemons(fetchedPokemons);
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const handleSearch = async () => {
    setSearchText(searchText.trim());
    await loadPokemons();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return {
    searchText,
    handleInputChange,
    handleSearch,
    filteredPokemons,
  };
};

export default MainLogic;
