import { ExpandedDataCountry } from '@components/expanded-data-country';
import { Spinner } from '@components/spinner';
import { TableHeader } from '@components/table-header';
import { useState } from 'react';

import { useTableDataCo2 } from './hooks';

export const TableDataCo2 = () => {
  const {
    isLoading,
    error,
    data: sortedCountries,
    searchTerm,
    setSearchTerm,
    requestSort,
    getSortIndicator,
  } = useTableDataCo2();

  const [expandedData, setExpandedData] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(2023);

  const handleRowClick = (countryName: string) =>
    setExpandedData(expandedData === countryName ? null : countryName);

  if (isLoading) return <Spinner />;
  if (error) {
    if ('status' in error) {
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);
      return <div className="text-red-500">Error: {errMsg}</div>;
    }
  }

  return (
    <>
      <TableHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        requestSort={requestSort}
        getSortIndicator={getSortIndicator}
      />
      <table className="w-full border-collapse">
        <tbody>
          {sortedCountries.map(
            ({ originalIndex, country: [countryName, countryData] }) => {
              const dataFor2023 = countryData.data.find(
                (item) => item.year === 2023
              );
              const isExpanded = expandedData === countryName;
              return (
                <>
                  <tr
                    key={countryName}
                    className="cursor-pointer border-b hover:bg-gray-50"
                    onClick={() => handleRowClick(countryName)}
                  >
                    <td className="px-3 py-2">{originalIndex}</td>
                    <td className="px-3 py-2">{countryName}</td>
                    <td className="px-3 py-2">{countryData.iso_code}</td>
                    <td className="px-3 py-2">
                      {dataFor2023 ? dataFor2023.population : 'No data'}
                    </td>
                  </tr>
                  {isExpanded && (
                    <ExpandedDataCountry
                      countryName={countryName}
                      countryData={countryData}
                      selectedYear={selectedYear}
                      setExpandedData={setExpandedData}
                      setSelectedYear={setSelectedYear}
                    />
                  )}
                </>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};
