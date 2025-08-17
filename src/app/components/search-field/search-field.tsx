'use client';

import { useCallback, useEffect } from 'react';

import useHandleLocalStorage from '../../utils/hooks/use-handle-local-storage';
import { Pokemon } from '../../utils/types';
import ButtonSearch from '../buttton-search/button-search';
import Input from '../input/input';

interface ClientSearchFieldProps {
  initialPokemons: Pokemon[];
  onSearch: (filtered: Pokemon[]) => void;
}

export default function SearchField({
  initialPokemons,
  onSearch,
}: ClientSearchFieldProps) {
  const [searchText, setSearchText] = useHandleLocalStorage(
    'savedSearchPokemon',
    ''
  );

  const handleSearch = useCallback(() => {
    const trimmedSearch = searchText.trim();
    setSearchText(trimmedSearch);
    const filtered = initialPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(trimmedSearch.toLowerCase())
    );
    onSearch(filtered);
  }, [searchText, initialPokemons, onSearch, setSearchText]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [setSearchText]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText, handleSearch]);

  return (
    <div className="flex flex-row justify-end gap-4 mb-10">
      <Input value={searchText} onChange={handleInputChange} />
      <ButtonSearch onClick={handleSearch} />
    </div>
  );
}
