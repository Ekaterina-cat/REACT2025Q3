import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps): React.JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gray-8 font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-700 ease-in-out transform hover:scale-105"
    >
      <img src="/search-magnifier.png" alt="search-magnifier" />
    </button>
  );
};

export default Button;
