import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';

import ButtonSwitchTheme from '../button-switch-theme/button-switch-theme';

const Header = (): React.JSX.Element => {
  return (
    <>
      <header
        className="w-full bg-cover bg-center h-140 relative mb-10"
        style={{
          backgroundImage: "url('fon_header.png')",
        }}
      >
        <div className="flex flex-row justify-between">
          <nav className="flex flex-row gap-4">
            <Link href="/">
              <Image
                src="/icon-home.png"
                alt="icon-home"
                className="w-15 invert"
                width={15}
                height={38}
                priority
              />
            </Link>
            <Link href="/about-me">
              <Image
                src="/icon-about-me.png"
                alt="icon-about-me"
                width={15}
                height={38}
                className="w-15 invert"
              />
            </Link>
            <ButtonSwitchTheme />
          </nav>
        </div>
        <div className="grid place-items-center gap-0.5">
          <Image
            src="/header-pokemon.png"
            alt="header-pokemon"
            width={200}
            height={60}
          />
          <p className="text-white dark:text-black">
            Project developed by RSSchool student
          </p>
          <h1 className="font-sans uppercase text-white font-bold flex-grow text-center dark:text-black">
            Search Engine Pokemon
          </h1>
          <Image
            src="/header-pikachu.png"
            alt="header-pikachu"
            width={300}
            height={300}
            className="z-10"
          />
        </div>
        <Image
          src="header-bottom.png"
          alt="header-bottom"
          className="w-full h-40 object-cover absolute bottom-0 left-0 z-0"
          width={500}
          height={500}
          priority
        />
      </header>
    </>
  );
};

export default Header;
