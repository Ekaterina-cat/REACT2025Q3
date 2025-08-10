import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@utils/constants';
import type { Pokemon } from '@utils/types';
import type { PokemonDetails } from 'src/components/card-details/types/card-details.type';

export const pokemonApiRequest = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchPokemons: builder.query({
      query: (limit = 20) => `pokemon/?limit=${limit}`,
    }),
  }),
});
export const { useFetchPokemonsQuery } = pokemonApiRequest;

export const pokemonApi = createApi({
  reducerPath: 'pokemonApiDetails',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<Pokemon[], Record<string, never>>({
      query: () => 'pokemon',
    }),
    getPokemonDetails: builder.query<PokemonDetails, string>({
      query: (url) => url,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;
