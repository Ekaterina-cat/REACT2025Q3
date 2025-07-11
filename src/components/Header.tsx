import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <header className="flex flex-row items-center gap-4">
          <img
            src="pokemon_logo.png"
            alt="pokemon_logo"
            className="w-10 h-10"
          />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 font-bold">
            Search Engine Pokemon
          </h1>
        </header>
      </>
    );
  }
}

export default Header;
