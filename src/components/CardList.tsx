import { Component } from 'react';
import CardDetails from './CardDetails';
import type { Pokemon } from '../types/types';

interface CardListProps {
  pokemons: Pokemon[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        {pokemons.map((pokemon) => (
          <div key={pokemon.url}>
            <h3>{pokemon.name}</h3>
            <CardDetails url={pokemon.url} />
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
