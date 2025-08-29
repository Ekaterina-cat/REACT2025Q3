import { useGetCo2DataQuery } from '@store/api';
import { API_BASE } from '@utils/constants';
import { useCallback, useState } from 'react';

import { useFilterCountries } from './use-filter-countries';
import { useSortCountries } from './use-sort-data';

export const useTableDataCo2 = () => {
  const { data, isLoading, error } = useGetCo2DataQuery(
    `${API_BASE}/owid-co2-data.json`
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: 'countryName' | 'population';
    direction: 'ascending' | 'descending';
  } | null>({ key: 'countryName', direction: 'ascending' });

  const requestSort = useCallback(
    (key: 'countryName' | 'population') => {
      let direction: 'ascending' | 'descending' = 'ascending';
      if (sortConfig?.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    },
    [sortConfig]
  );

  const getSortIndicator = useCallback(
    (key: 'countryName' | 'population') => {
      if (sortConfig?.key !== key) {
        return ' ↓';
      }
      return sortConfig.direction === 'ascending' ? ' ↑' : ' ↓';
    },
    [sortConfig]
  );

  const filteredCountries = useFilterCountries(data, searchTerm);
  const sortedCountries = useSortCountries(filteredCountries, sortConfig);

  return {
    isLoading,
    error,
    data: sortedCountries,
    searchTerm,
    setSearchTerm,
    requestSort,
    getSortIndicator,
  };
};
