import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '@utils/constants';

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

export const fetchDataDetailsPokemon = async <T>(
  url: string
): Promise<T | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching details: ', error);
    return null;
  }
};
