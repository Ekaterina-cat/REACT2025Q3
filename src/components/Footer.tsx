import type React from 'react';
import { twMerge } from 'tailwind-merge';

const Footer = (): React.JSX.Element => {
  return (
    <>
      <footer className="flex flex-row justify-between items-center h-15 w-11/12 m-auto">
        <a href="https://rs.school/courses/reactjs">
          <img
            src="rs_school_js.svg"
            alt="rs_school_js"
            className="h-10 invert dark:invert-0"
          />
        </a>
        <h3 className="font-bold text-white dark:text-black">2025</h3>
        <a
          href="https://github.com/Ekaterina-cat"
          className={twMerge(
            'flex flex-row justify-center items-center',
            'font-bold text-white',
            'transform hover:scale-105 transition-transform duration-300 ease-in-out',
            'dark:text-black'
          )}
        >
          <img
            src="logo_github.png"
            alt="logo_github"
            className="h-10 invert dark:invert-0"
          />
          <h3 className="uppercase">Katsiaryna Dounar</h3>
        </a>
      </footer>
    </>
  );
};

export default Footer;
