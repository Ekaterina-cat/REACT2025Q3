import { type JSX } from 'react';
import { twMerge } from 'tailwind-merge';

import type { SelectCountryProps } from './types/select-country.type';

import { useSelectCountry } from './hooks/use-select-country';

export const SelectCountry = ({
  register,
  setValue,
  onChange,
  value,
  error,
}: SelectCountryProps): JSX.Element => {
  const {
    inputValue,
    suggestionsCountry,
    handleInputChange,
    handleSelectCountry,
  } = useSelectCountry(value, onChange, setValue);

  return (
    <div className="relative">
      <label htmlFor="country">Country</label>
      {register ? (
        <input
          id="country"
          type="text"
          placeholder="Enter country name..."
          {...register('country', { required: 'Please select a country' })}
          onChange={handleInputChange}
          value={inputValue}
        />
      ) : (
        <input
          id="country"
          type="text"
          placeholder="Enter country name..."
          value={inputValue}
          onChange={handleInputChange}
        />
      )}
      {error && <p className="text-red-500">{error}</p>}
      {suggestionsCountry.length > 0 && (
        <ul
          className={twMerge(
            'font-courgette absolute z-10 m-0 mt-1 max-h-28 w-80',
            'list-none overflow-y-auto',
            'border border-gray-300 bg-white p-0 shadow-md'
          )}
        >
          {suggestionsCountry.map((country) => (
            <li
              key={country.code}
              onClick={() => handleSelectCountry(country)}
              className={twMerge(
                'cursor-pointer border-b border-gray-200 p-2',
                'hover:bg-gray-100'
              )}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
