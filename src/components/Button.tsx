import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps): React.JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'px-6 py-3',
        'bg-gray-800 font-bold rounded-full shadow-lg',
        'hover:shadow-xl transition-shadow duration-700 ease-in-out transform hover:scale-105',
        'dark:bg-white dark:shadow-gray-800'
      )}
    >
      <img
        src="/search-magnifier.png"
        alt="search-magnifier"
        className="dark:invert"
      />
    </button>
  );
};

export default Button;
