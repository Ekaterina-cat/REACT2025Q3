import type { RegistrationFormValues } from '@shared/validation';
import type { UseFormSetValue } from 'react-hook-form';

import { useState, type ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import type { Country, RootState } from '../types/select-country.type';

export const useSelectCountry = (
  initialValue: string = '',
  onChange?: (value: string) => void,
  setValue?: UseFormSetValue<RegistrationFormValues>
) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [suggestionsCountry, setSuggestionsCountry] = useState<Country[]>([]);
  const countries = useSelector((state: RootState) => state.countries.list);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(newValue);
    }

    if (setValue) {
      setValue('country', newValue, { shouldValidate: true });
    }

    if (newValue.length > 0) {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().startsWith(newValue.toLowerCase())
      );
      setSuggestionsCountry(filtered);
    } else {
      setSuggestionsCountry([]);
    }
  };

  const handleSelectCountry = (country: Country) => {
    const newValue = country.name;
    setInputValue(newValue);
    setSuggestionsCountry([]);

    if (onChange) {
      onChange(newValue);
    }

    if (setValue) {
      setValue('country', newValue, { shouldValidate: true });
    }
  };

  return {
    inputValue,
    suggestionsCountry,
    handleInputChange,
    handleSelectCountry,
  };
};
