import { useMemo } from 'react';

interface CountryCO2Data {
  year: number;
  co2: number;
  population: number;
}

interface CountryData {
  iso_code: string;
  data: CountryCO2Data[];
}

interface CountryEntry {
  originalIndex: number;
  country: [string, CountryData];
}

export const useFilterCountries = (
  data: Record<string, CountryData> | undefined,
  searchTerm: string
): CountryEntry[] => {
  const filteredCountries: CountryEntry[] = useMemo(() => {
    if (!data) return [];

    return (Object.entries(data) as [string, CountryData][])
      .map((country, index) => ({
        originalIndex: index + 1,
        country,
      }))
      .filter(({ country: [countryName] }) =>
        countryName.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
  }, [data, searchTerm]);

  return filteredCountries;
};
