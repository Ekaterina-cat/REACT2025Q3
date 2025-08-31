import type { CountryData } from '@utils/types';

import { useMemo } from 'react';

export interface CountryEntry {
  originalIndex: number;
  country: [string, CountryData];
}

type SortKey = 'countryName' | 'population';
type SortDirection = 'ascending' | 'descending';

export const useSortCountries = (
  filteredCountries: CountryEntry[],
  sortConfig: { key: SortKey; direction: SortDirection } | null
): CountryEntry[] => {
  const sortedCountries: CountryEntry[] = useMemo(() => {
    return [...filteredCountries].sort((first, second) => {
      if (!sortConfig) return 0;

      let firstValue: string | number, secondValue: string | number;
      const [firstCountryName, firstCountryData] = first.country;
      const [secondCountryName, secondCountryData] = second.country;

      if (sortConfig.key === 'population') {
        const firstPopulation =
          firstCountryData.data.find((item) => item.year === 2023)
            ?.population || 0;
        const secondPopulation =
          secondCountryData.data.find((item) => item.year === 2023)
            ?.population || 0;
        firstValue = firstPopulation;
        secondValue = secondPopulation;
      } else {
        firstValue = firstCountryName;
        secondValue = secondCountryName;
      }

      if (firstValue < secondValue)
        return sortConfig.direction === 'ascending' ? -1 : 1;
      if (firstValue > secondValue)
        return sortConfig.direction === 'ascending' ? 1 : -1;
      return 0;
    });
  }, [filteredCountries, sortConfig]);

  return sortedCountries;
};
