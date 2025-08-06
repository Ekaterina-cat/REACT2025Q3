import { PokemonService } from '@utils/api';
import { useHandleLocalStorage } from '@utils/hooks';
import type { Pokemon } from '@utils/types';
import { useCallback, useEffect, useState } from 'react';

const BodyPageLogic = () => {
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

export default BodyPageLogic;
