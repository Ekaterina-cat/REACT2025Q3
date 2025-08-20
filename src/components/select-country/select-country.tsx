import { useState, type ChangeEvent, type JSX } from 'react';
import { useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

interface Country {
  code: string;
  name: string;
}

interface RootState {
  countries: {
    list: Country[];
  };
}

export const SelectCountry = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestionsCountry, setSuggestionsCountry] = useState<Country[]>([]);

  const countries = useSelector((state: RootState) => state.countries.list);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestionsCountry(filtered);
    } else {
      setSuggestionsCountry([]);
    }
  };

  const handleSelectCountry = (country: Country) => {
    setInputValue(country.name);
    setSuggestionsCountry([]);
  };
  return (
    <div>
      <label htmlFor="country">Country</label>
      <input
        id="country"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter country name..."
      />
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
