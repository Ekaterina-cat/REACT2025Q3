import { Component } from 'react';
import Input from './Input';
import Button from './Button';
import { PokemonService } from '../services/pokemonService';
import CardList from './CardList';

interface Pokemon {
  name: string;
}

interface MainProps {
  searchText: string;
  pokemons: Pokemon[];
}

class Main extends Component<object, MainProps> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchText: '',
      pokemons: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleIndputChange = this.handleIndputChange.bind(this);
  }

  async handleSearch() {
    const pokemons = await new PokemonService().fetchPokemons();
    this.setState({ pokemons });
  }

  handleIndputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchText: event.target.value });
  }

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
