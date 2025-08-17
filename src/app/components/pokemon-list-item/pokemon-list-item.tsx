'use client';
import Image from 'next/image';
import type React from 'react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface PokemonDetails {
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
  moves: Array<{ move: { name: string } }>;
  sprites: { front_default: string };
}

interface CardDetailsProps {
  url: string;
}

const PokemonListItem = ({ url }: CardDetailsProps) => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [url]);

  if (!pokemon) return <div>Loading...</div>;
  return (
    <>
      <ul
        className={twMerge(
          'grid grid-cols-1 place-items-center gap-1 max-w-2xl mx-auto',
          'text-white text-xs',
          'dark:text-black'
        )}
      >
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Height:</h3>
          <p>{pokemon.height}</p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Weight:</h3>
          <p>{pokemon.weight}</p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Types:</h3>
          <p>
            {pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}
          </p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Abilities:</h3>
          <p>
            {pokemon.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .join(', ')}
          </p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Stats:</h3>
          <p>
            {pokemon.stats
              .map((statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`)
              .join(', ')}
          </p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Moves:</h3>
          <p>
            {pokemon.moves
              .slice(0, 5)
              .map((moveInfo) => moveInfo.move.name)
              .join(', ')}
          </p>
        </li>
      </ul>
      {pokemon.sprites.front_default && (
        <Image
          src={pokemon.sprites.front_default}
          alt="Pokemon"
          className="justify-self-center w-40 h-40"
          width={100}
          height={100}
        />
      )}
    </>
  );
};

export default PokemonListItem;
