import { Component } from 'react';

interface Pokemon {
  name: string;
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
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
