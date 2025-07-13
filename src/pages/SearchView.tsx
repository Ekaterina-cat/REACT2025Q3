import { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

export class Search extends Component {
  state = {
    searchText: '',
    pokemons: [],
  };
  render() {
    return (
      <>
        <Header />
        <Main
          searchText={this.state.searchText}
          pokemons={this.state.pokemons}
        />
      </>
    );
  }
}
