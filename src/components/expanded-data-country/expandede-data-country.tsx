import type { CountryData } from '@utils/types';
import type { ChangeEvent } from 'react';

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
  const handleSelectedYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
  };
  return (
    <tr>
      <td colSpan={3}>
        <div className="m-1.5 space-y-4 rounded-2xl border-2 border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">
              CO2 Data for {countryName}
            </h4>
            <button
              onClick={() => setExpandedData(null)}
              className="cursor-pointer rounded bg-amber-50 px-3 py-1 text-amber-950 hover:bg-amber-100"
            >
              Close
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-medium">Select Year:</label>
            <select
              value={selectedYear}
              onChange={handleSelectedYear}
              className="cursor-pointer rounded border px-2 py-1"
            >
              {Array.from({ length: 2023 - 1750 + 1 }, (_, i) => 1750 + i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
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
                {countryData.data
                  .filter((item) => item.year === selectedYear)
                  .map((item) => (
                    <tr key={countryName}>
                      <td className="border-b px-3 py-2">{item.year}</td>
                      <td className="border-b px-3 py-2">
                        {item.co2 || 'N/A'}
                      </td>
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
