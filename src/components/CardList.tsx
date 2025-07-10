import { Component } from 'react';
import CardDetails from './CardDetails';

interface Pokemon {
  name: string;
  url: string;
}

interface CardListProps {
  pokemons: Pokemon[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            <h3>{pokemon.name}</h3>
            <CardDetails url={pokemon.url} />
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
