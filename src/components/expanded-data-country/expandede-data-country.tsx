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
      <td>
        <div>
          <div>
            <h4>CO2 Data for {countryName}</h4>
            <button onClick={() => setExpandedData(null)}>Close</button>
          </div>
          <div>
            <label>Select Year:</label>
            <select value={selectedYear} onChange={handleSelectedYear}>
              {Array.from({ length: 2023 - 1750 + 1 }, (_, i) => 1750 + i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                )
              )}
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>CO2</th>
                <th>CO2 per Capita</th>
              </tr>
            </thead>
            <tbody>
              {countryData.data
                .filter((item) => item.year === selectedYear)
                .map((item) => (
                  <tr key={countryName}>
                    <td>{item.year}</td>
                    <td>{item.co2 || 'N/A'}</td>
                    <td>{item.co2_per_capita || 'N/A'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
};
