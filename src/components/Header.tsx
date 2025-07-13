import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <header
          className="flex flex-row items-center gap-4 w-full mb-10"
          style={{
            backgroundImage: "url('fon_header.png')",
            backgroundRepeat: 'repeat',
            backgroundSize: '100px',
          }}
        >
          <img
            src="pokemon_logo.png"
            alt="pokemon_logo"
            className="w-10 h-10"
          />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-700 to-yellow-900 font-bold flex-grow">
            Search Engine Pokemon
          </h1>
        </header>
      </>
    );
  }
}

export default Header;
