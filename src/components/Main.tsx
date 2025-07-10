import { Component } from 'react';
import Input from './Input';
import Button from './Button';
import { PokemonService } from '../services/pokemonService';
import CardList from './CardList';

interface Pokemon {
  name: string;
  url: string;
}

interface MainProps {
  searchText: string;
  pokemons: Pokemon[];
}

class Main extends Component<MainProps> {
  state = {
    searchText: '',
    pokemons: [],
  };

  handleSearch = async () => {
    const pokemons = await new PokemonService().fetchPokemons();
    this.setState({ pokemons });
  };

  handleIndputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    return (
      <>
        <div>
          <div>
            <Input
              value={this.state.searchText}
              onChange={this.handleIndputChange}
            />
            <Button onClick={this.handleSearch} />
          </div>
          <div>
            <CardList pokemons={this.state.pokemons} />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
