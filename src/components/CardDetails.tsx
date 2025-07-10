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
      <div>
        <p>Height: {details.height}</p>
        <p>Weight: {details.weight}</p>
        <p>
          Types:{' '}
          {details.types.map((typeInfo) => typeInfo.type.name).join(', ')}
        </p>
        <p>
          Abilities:{' '}
          {details.abilities
            .map((abilityInfo) => abilityInfo.ability.name)
            .join(', ')}
        </p>
        <p>
          Stats:{' '}
          {details.stats
            .map((statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`)
            .join(', ')}
        </p>
        <p>
          Moves:{' '}
          {details.moves
            .slice(0, 5)
            .map((moveInfo) => moveInfo.move.name)
            .join(', ')}
        </p>
        {details.sprites.front_default && (
          <img src={details.sprites.front_default} alt="Pokemon" />
        )}
      </div>
    );
  }
}

export default CardDetails;
