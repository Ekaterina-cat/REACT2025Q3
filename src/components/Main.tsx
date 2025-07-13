import { Component } from 'react';
import Input from './Input';
import Button from './Button';
import { PokemonService } from '../services/pokemonService';
import CardList from './CardList';
import type { Pokemon } from '../types/types';

interface MainProps {
  searchText: string;
  pokemons: Pokemon[];
}

class Main extends Component<MainProps> {
  state: MainProps = {
    searchText: '',
    pokemons: [],
  };

  async componentDidMount() {
    const savedSearchText = localStorage.getItem('savedSearchPokemon');
    if (savedSearchText) {
      this.setState({ searchText: savedSearchText });
    }
    await this.loadPokemons();
  }

  loadPokemons = async () => {
    const pokemons = await new PokemonService().fetchPokemons();
    this.setState({ pokemons });
  };

  handleSearch = async () => {
    const { searchText } = this.state;
    const trimSearchText = searchText.trim();
    localStorage.setItem('savedSearchPokemon', trimSearchText);
    await this.loadPokemons();
  };

  handleIndputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const { searchText, pokemons } = this.state;
    const filterPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <>
        <main className="m-auto">
          <div className="flex flex-row justify-end gap-4 mb-10">
            <Input
              value={this.state.searchText}
              onChange={this.handleIndputChange}
            />
            <Button onClick={this.handleSearch} />
          </div>
          <div>
            <CardList pokemons={filterPokemons} />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
