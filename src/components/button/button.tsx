import type { JSX } from 'react';

import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  textButton: string;
  onClick: () => void;
}

export const Button = ({ textButton, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'border border-gray-900 bg-white text-2xl text-gray-900',
        'font-borel rounded-lg p-6 font-black lowercase shadow-sm',
        'cursor-pointer transition-all duration-800 hover:text-3xl hover:shadow-md'
      )}
    >
      {textButton}
    </button>
  );
};
