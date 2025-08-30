import { ExpandedDataCountry } from '@components/expanded-data-country/expandede-data-country';
import { Spinner } from '@components/spinner';
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

  const handleRowClick = (countryName: string) => {
    if (expandedData === countryName) {
      setExpandedData(null);
    } else {
      setExpandedData(countryName);
    }
  };

  if (isLoading) return <Spinner />;
  if (error) {
    if ('status' in error) {
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);
      return <div className="text-red-500">Error: {errMsg}</div>;
    } else {
      return <div className="text-red-500">Error: {error.message}</div>;
    }
  }

  return (
    <div className="co2-data p-4">
      <h2 className="mb-4 text-2xl font-bold">CO2 data for all countries:</h2>
      <div className="mb-5">
        <input
          type="text"
          placeholder="Search by country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-72 rounded border px-3 py-2"
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b px-3 py-2 text-left">№</th>
            <th
              className="cursor-pointer border-b px-3 py-2 text-left"
              onClick={() => requestSort('countryName')}
            >
              Country {getSortIndicator('countryName')}
            </th>
            <th className="cursor-pointer border-b px-3 py-2 text-left">
              ISO code
            </th>
            <th
              className="cursor-pointer border-b px-3 py-2 text-left"
              onClick={() => requestSort('population')}
            >
              Population (2023) {getSortIndicator('population')}
            </th>
          </tr>
        </thead>
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
    </div>
  );
};
