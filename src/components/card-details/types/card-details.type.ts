export interface PokemonDetails {
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
  moves: Array<{ move: { name: string } }>;
  sprites: { front_default: string };
}

export interface CardDetailsProps {
  url: string;
}
