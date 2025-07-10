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
      <ul>
        <li>Height: {details.height}</li>
        <li>Weight: {details.weight}</li>
        <li>
          Types:{' '}
          {details.types.map((typeInfo) => typeInfo.type.name).join(', ')}
        </li>
        <li>
          Abilities:{' '}
          {details.abilities
            .map((abilityInfo) => abilityInfo.ability.name)
            .join(', ')}
        </li>
        <li>
          Stats:{' '}
          {details.stats
            .map((statInfo) => `${statInfo.stat.name}: ${statInfo.base_stat}`)
            .join(', ')}
        </li>
        <li>
          Moves:{' '}
          {details.moves
            .slice(0, 5)
            .map((moveInfo) => moveInfo.move.name)
            .join(', ')}
        </li>
        {details.sprites.front_default && (
          <img src={details.sprites.front_default} alt="Pokemon" />
        )}
      </ul>
    );
  }
}

export default CardDetails;
