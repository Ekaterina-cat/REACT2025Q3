import type { ColumnKey } from '@components/modal-widget/types';

import { ExpandedDataCountry } from '@components/expanded-data-country';
import { ModalWidget } from '@components/modal-widget/modal-widget';
import { Spinner } from '@components/spinner';
import { TableHeader } from '@components/table-header';
import { initialColumnsVisibility, nameColunms } from '@utils/constants';
import { useState, type ChangeEvent } from 'react';

import { useTableDataCo2 } from './hooks';

export const TableDataCo2 = () => {
  const {
    isLoading,
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

  if (isLoading) return <Spinner />;

  const handleRowClick = (countryName: string) =>
    setExpandedData(expandedData === countryName ? null : countryName);

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
  };

  const years = Array.from({ length: 2023 - 1960 + 1 }, (_, i) => 1960 + i);

  return (
    <>
      <ModalWidget
        colVisibility={colVisibility}
        setColVisibility={setColVisibility}
      />
      <TableHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table className="w-full border-collapse">
        <thead>
          <tr className="font-borel bg-gray-100 text-2xl">
            <th className="border-b px-3 py-2">{nameColunms.serial_number}</th>
            <th
              className="cursor-pointer border-b px-3 py-2"
              onClick={() => requestSort('countryName')}
            >
              {nameColunms.name_country} {getSortIndicator('countryName')}
            </th>
            <th className="border-b px-3 py-2">{nameColunms.iso_code}</th>
            <th className="border-b px-3 py-2">
              <div className="flex flex-col">
                <span
                  className="cursor-pointer"
                  onClick={() => requestSort('population')}
                >
                  {nameColunms.population} {getSortIndicator('population')}
                </span>
                <div>
                  <select
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="cursor-pointer rounded border px-2 py-1 text-sm"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
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
          {sortedCountries
            .filter(({ country: [, countryData] }) => countryData.iso_code)
            .map(({ country: [countryName, countryData] }, index: number) => {
              const dataFor2023 = countryData.data.find(
                (item) => item.year === selectedYear
              );
              const isExpanded = expandedData === countryName;
              return (
                <>
                  <tr
                    key={countryName}
                    title={`Click to get detailed information on emissions in: ${countryName}`}
                    className="font-borel cursor-pointer border-t border-b hover:bg-gray-50"
                    onClick={() => handleRowClick(countryName)}
                  >
                    <td className="px-3 py-2">{index + 1}</td>
                    <td className="px-3 py-2">{countryName}</td>
                    <td className="px-3 py-2">{countryData.iso_code}</td>
                    <td className="px-3 py-2">
                      {dataFor2023 ? dataFor2023.population : 'N/A'}
                    </td>
                    {Object.entries(colVisibility).map(([key, isVisible]) => {
                      if (!isVisible) return null;
                      const columnKey = key as ColumnKey;
                      return (
                        <td key={key} className="px-3 py-2">
                          {dataFor2023?.[columnKey] || 'N/A'}
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
            })}
        </tbody>
      </table>
    </>
  );
};
