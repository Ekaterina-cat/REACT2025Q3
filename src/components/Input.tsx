import React from 'react';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps): React.JSX.Element => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search pokemon..."
      className="bg-gray-8 p-2 rounded text-white text-xs dark:bg-white dark:text-black dark:border-black dark:border-2"
    />
  );
};

export default Input;
