import type { CountryData, CountryDataItem } from '@utils/types';

import { useCallback, useMemo, type ChangeEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface ExpandedDataCountryProps {
  countryName: string;
  countryData: CountryData;
  selectedYear: number;
  setExpandedData: (countryName: string | null) => void;
  setSelectedYear: (year: number) => void;
}
export const ExpandedDataCountry = ({
  countryName,
  countryData,
  selectedYear,
  setExpandedData,
  setSelectedYear,
}: ExpandedDataCountryProps) => {
  const handleSelectedYear = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedYear(Number(e.target.value));
    },
    [setSelectedYear]
  );

  const years = useMemo(
    () => Array.from({ length: 2023 - 1750 + 1 }, (_, i) => 1750 + i),
    []
  );

  const filteredData = useMemo(
    () =>
      countryData.data.filter(
        (item: CountryDataItem) => item.year === selectedYear
      ),
    [countryData.data, selectedYear]
  );

  return (
    <tr>
      <td colSpan={3}>
        <div className="m-1.5 space-y-4 rounded-2xl border-2 border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-courgette text-3xl">
              CO2 Data for {countryName}
            </h4>
            <button
              onClick={() => setExpandedData(null)}
              className={twMerge(
                'font-borel cursor-pointer rounded',
                'bg-gradient-to-r from-green-600 to-blue-500',
                'px-3 py-1 pt-3',
                'text-amber-950',
                'hover:bg-blue-500'
              )}
            >
              Close
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-borel pt-1.5">Select Year:</label>
            <select
              value={selectedYear}
              onChange={handleSelectedYear}
              className="cursor-pointer rounded border px-2 py-1"
            >
              {years.map((year: number) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50">
                <tr className="font-borel text-2xl">
                  <th className="border-b px-3 py-2 text-left font-medium">
                    Year
                  </th>
                  <th className="border-b px-3 py-2 text-left font-medium">
                    CO2
                  </th>
                  <th className="border-b px-3 py-2 text-left font-medium">
                    CO2 per Capita
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.year} className="font-borel">
                    <td className="border-b px-3 py-2">{item.year}</td>
                    <td className="border-b px-3 py-2">{item.co2 || 'N/A'}</td>
                    <td className="border-b px-3 py-2">
                      {item.co2_per_capita || 'N/A'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </td>
    </tr>
  );
};
