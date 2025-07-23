import { Component, type ReactNode } from 'react';
import CardDetails from './card-details/card-details-render';
import type { Pokemon } from '../types/types';
import Spinner from './Spinner';
import ErrorDataRetrieval from './ErrorDataRetrieval';

interface CardListProps {
  pokemons: Pokemon[];
}

interface CardListState {
  isLoading: boolean;
}

class CardList extends Component<CardListProps, CardListState> {
  state: CardListState = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render(): ReactNode {
    const { pokemons } = this.props;
    const { isLoading } = this.state;
    if (!pokemons || pokemons.length === 0) {
      return <ErrorDataRetrieval />;
    }
    if (isLoading) {
      return <Spinner />;
    }
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
