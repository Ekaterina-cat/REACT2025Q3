import { Spinner } from '@components/spinner';
import { useGetCo2DataQuery } from '@store/api';
import { API_BASE } from '@utils/constants';

interface CountryCO2Data {
  year: number;
  co2: number;
  population: number;
}

interface CountryData {
  iso_code: string;
  data: CountryCO2Data[];
}

export const TableDataCo2 = () => {
  const { data, isLoading, error } = useGetCo2DataQuery(
    `${API_BASE}/owid-co2-data.json`
  );

  if (isLoading) return <Spinner />;

  if (error) {
    if ('status' in error) {
      // Ошибка типа FetchBaseQueryError
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);
      return <div>Error: {errMsg}</div>;
    } else {
      // Ошибка типа SerializedError
      return <div>Error: {error.message}</div>;
    }
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const countries = Object.entries(data) as [string, CountryData][];

  return (
    <div className="co2-data p-4">
      <h2 className="mb-4 text-2xl font-bold">CO2 data for all countries:</h2>
      <table className="mb-4 w-full border-collapse">
        <thead className="bg-gray-300">
          <tr>
            <th className="border-b border-gray-200 p-3 text-left">№</th>
            <th className="border-b border-gray-200 p-3 text-left">Country</th>
            <th className="border-b border-gray-200 p-3 text-left">ISO code</th>
            <th className="border-b border-gray-200 p-3 text-left">
              Population (2023)
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map(([countryName, countryData], index) => {
            const dataFor2023 = countryData.data.find(
              (item: CountryCO2Data) => item.year === 2023
            );
            return (
              <tr key={countryName} className="border-b border-gray-200">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{countryName}</td>
                <td className="p-3">{countryData.iso_code}</td>
                <td className="p-3">
                  {dataFor2023 ? dataFor2023.population : 'No Data'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
