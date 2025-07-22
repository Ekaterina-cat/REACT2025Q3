import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

const ButtonError = ({ onClick }: ButtonProps): React.JSX.Element => {
  return (
    <div className="w-full flex justify-end mb-10">
      <button
        onClick={onClick}
        className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
      >
        {'error'.toUpperCase()}
      </button>
    </div>
  );
};

export default ButtonError;
