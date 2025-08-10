import type React from 'react';
import { twMerge } from 'tailwind-merge';

import type { CardDetailsProps } from '..';
import { CardDetailsLogic } from '..';

const CardDetails = ({ url }: CardDetailsProps): React.JSX.Element => {
  const { details } = CardDetailsLogic({ url });

  if (!details) {
    return <div>No details available</div>;
  }
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
        <img
          src={details.sprites.front_default}
          alt="Pokemon"
          className="justify-self-center w-40 h-40"
        />
      )}
    </>
  );
};

export default CardDetails;
