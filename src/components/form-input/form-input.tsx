import type { JSX } from 'react';
import type { RegisterOptions } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  rules?: RegisterOptions;
  placeholder?: string;
  className?: string;
}

export const FormInput = ({
  id,
  label,
  type,
  placeholder,
  className = '',
}: FormInputProps): JSX.Element => {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="font-borel text-lg font-black text-gray-900"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="font-borel w-full rounded border p-2 text-xs"
      />
    </div>
  );
};
