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
      <section className="flex flex-col gap-10 mb-10">
        {pokemons.map((pokemon, index) => (
          <div key={pokemon.url}>
            <div className="flex flex-row flex-wrap justify-around">
              <h3 className="justify-self-center self-center font-mono font-bold text-2xl w-1/6">
                {pokemon.name.toUpperCase()}
              </h3>
              <CardDetails url={pokemon.url} />
            </div>
            {index < pokemons.length - 1 && <hr />}
          </div>
        ))}
      </section>
    );
  }
}

export default CardList;
