import { Component } from 'react';

interface PokemonDeatails {
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
  moves: Array<{ move: { name: string } }>;
  sprites: { front_default: string };
}

interface PokemonDetailProps {
  url: string;
}

interface PokemonDetailState {
  details: PokemonDeatails | null;
}

class CardDetails extends Component<PokemonDetailProps, PokemonDetailState> {
  state: PokemonDetailState = {
    details: null,
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(this.props.url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ details: data });
    } catch (error) {
      console.error('Error fetching details: ', error);
    }
  };

  render() {
    const { details } = this.state;

    if (!details) {
      return <div>No details available</div>;
    }

    return (
      <>
        <ul>
          <li className="flex flex-row gap-2">
            <h3 className="font-mono text-1.5xl">Height:</h3>
            <p>{details.height}</p>
          </li>
          <li className="flex flex-row gap-2">
            <h3 className="font-mono text-1.5xl">Weight:</h3>
            <p>{details.weight}</p>
          </li>
          <li className="flex flex-row gap-2">
            <h3 className="font-mono text-1.5xl">Types:</h3>
            <p>
              {details.types.map((typeInfo) => typeInfo.type.name).join(', ')}
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <h3 className="font-mono text-1.5xl">Abilities:</h3>
            <p>
              {details.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .join(', ')}
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <h3 className="font-mono text-1.5xl">Stats:</h3>
            <p>
              {details.stats
                .map(
                  (statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`
                )
                .join(', ')}
            </p>
          </li>
          <li className="flex flex-row gap-2">
            <h3 className="font-mono text-1.5xl">Moves:</h3>
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
  }
}

export default CardDetails;
