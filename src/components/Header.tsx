import type React from 'react';
import { NavLink } from 'react-router';

const Header = (): React.JSX.Element => {
  return (
    <>
      <header
        className="w-full bg-cover bg-center h-140 relative mb-10"
        style={{
          backgroundImage: "url('fon_header.png')",
        }}
      >
        <nav className="flex flex-row gap-4">
          <NavLink to="/page=1" end>
            <img src="icon-home.png" alt="icon-home" className="w-15 invert" />
          </NavLink>
          <NavLink to="/aboutme" end>
            <img
              src="icon-about-me.png"
              alt="icon-about-me"
              className="w-15 invert"
            />
          </NavLink>
        </nav>
        <div className="grid place-items-center gap-0.5">
          <img src="header-pokemon.png" alt="header-pokemon" />
          <p className="text-white">Project developed by RSSchool student</p>
          <h1 className="font-sans uppercase text-white font-bold flex-grow text-center">
            Search Engine Pokemon
          </h1>
          <img
            src="header-pikachu.png"
            alt="header-pikachu"
            className="w-70 z-10"
          />
        </div>
        <img
          src="header-bottom.png"
          alt="header-bottom"
          className="w-full h-40 object-cover absolute bottom-0 left-0 z-0"
        />
      </header>
    </>
  );
};

export default Header;
