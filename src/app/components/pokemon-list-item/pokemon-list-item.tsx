import Image from 'next/image';
import type React from 'react';
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

const PokemonListItem = async ({ url }: CardDetailsProps) => {
  const response = await fetch(url, { cache: 'force-cache' });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Error retrieving pokemon data: ${response.status}\n` +
        `URL: ${url}\n` +
        `Message: ${errorData?.message || 'Unknown error'}`
    );
  }
  const details: PokemonDetails = await response.json();

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
          <p>{details.height}</p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Weight:</h3>
          <p>{details.weight}</p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Types:</h3>
          <p>
            {details.types.map((typeInfo) => typeInfo.type.name).join(', ')}
          </p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Abilities:</h3>
          <p>
            {details.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .join(', ')}
          </p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Stats:</h3>
          <p>
            {details.stats
              .map((statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`)
              .join(', ')}
          </p>
        </li>
        <li className="flex flex-row gap-2">
          <h3 className="font-mono">Moves:</h3>
          <p>
            {details.moves
              .slice(0, 5)
              .map((moveInfo) => moveInfo.move.name)
              .join(', ')}
          </p>
        </li>
      </ul>
      {details.sprites.front_default && (
        <Image
          src={details.sprites.front_default}
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
