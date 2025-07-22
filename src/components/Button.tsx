import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps): React.JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-pink-700 to-yellow-900 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-700 ease-in-out transform hover:scale-105"
    >
      {'search'.toUpperCase()}
    </button>
  );
};

export default Button;
