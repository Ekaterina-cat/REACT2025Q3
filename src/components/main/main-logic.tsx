import { useFetchPokemonsQuery } from '@utils/api/pokemon-api';
import { useHandleLocalStorage } from '@utils/hooks';
import type { Pokemon } from '@utils/types';
import { useCallback } from 'react';

const BodyPageLogic = () => {
  const [searchText, setSearchText] = useHandleLocalStorage(
    'savedSearchPokemon',
    ''
  );
  const {
    data: apiResponse,
    isLoading,
    isError,
    refetch,
  } = useFetchPokemonsQuery(20);

  const pokemons = apiResponse?.results || [];

  const handleSearch = useCallback(async () => {
    setSearchText(searchText.trim());
    await refetch();
  }, [searchText, refetch, setSearchText]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );

  const filteredPokemons = pokemons.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return {
    searchText,
    handleInputChange,
    handleSearch,
    filteredPokemons,
    isLoading,
    isError,
  };
};

export default BodyPageLogic;
