export class PokemonService {
  async fetchPokemons(limit: number = 20) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching data: ', error);
      return [];
    }
  }
}

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
