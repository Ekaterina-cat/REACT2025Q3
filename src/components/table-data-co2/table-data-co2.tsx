import type { ColumnKey } from '@components/modal-widget/types';

import { ExpandedDataCountry } from '@components/expanded-data-country';
import { ModalWidget } from '@components/modal-widget/modal-widget';
import { Spinner } from '@components/spinner';
import { TableHeader } from '@components/table-header';
import { initialColumnsVisibility, nameColunms } from '@utils/constants';
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

  const [colVisibility, setColVisibility] = useState<
    Record<ColumnKey, boolean>
  >(initialColumnsVisibility);

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
      <ModalWidget
        colVisibility={colVisibility}
        setColVisibility={setColVisibility}
      />
      <TableHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b px-3 py-2">{nameColunms.serial_number}</th>
            <th
              className="cursor-pointer border-b px-3 py-2"
              onClick={() => requestSort('countryName')}
            >
              {nameColunms.name_country} {getSortIndicator('countryName')}
            </th>
            <th className="border-b px-3 py-2">{nameColunms.iso_code}</th>
            <th
              className="cursor-pointer border-b px-3 py-2"
              onClick={() => requestSort('population')}
            >
              {nameColunms.population} {getSortIndicator('population')}
            </th>
            {Object.entries(colVisibility).map(([key, isVisible]) => {
              if (!isVisible) return null;
              const columnKey = key as ColumnKey;
              return (
                <th key={key} className="border-b px-3 py-2">
                  {nameColunms[columnKey]}
                </th>
              );
            })}
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
                    title={`Click to get detailed information on emissions in: ${countryName}`}
                    className="cursor-pointer border-t border-b hover:bg-gray-50"
                    onClick={() => handleRowClick(countryName)}
                  >
                    <td className="px-3 py-2">{originalIndex}</td>
                    <td className="px-3 py-2">{countryName}</td>
                    <td className="px-3 py-2">{countryData.iso_code}</td>
                    <td className="px-3 py-2">
                      {dataFor2023 ? dataFor2023.population : 'No data'}
                    </td>
                    {Object.entries(colVisibility).map(([key, isVisible]) => {
                      if (!isVisible) return null;
                      const columnKey = key as ColumnKey;
                      console.log(`${columnKey}:`, dataFor2023?.[columnKey]);
                      return (
                        <td key={key} className="px-3 py-2">
                          {dataFor2023?.[columnKey] || 'No data'}
                        </td>
                      );
                    })}
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
