import { useGetCo2DataQuery } from '../store/api';
import { API_BASE } from '../utils/constants';

interface CountryCO2Data {
  year: number;
  co2: number;
  population: number;
}

interface CountryData {
  iso_code: string;
  data: CountryCO2Data[];
}

export const Co2Data = () => {
  const { data, isLoading, error } = useGetCo2DataQuery(
    `${API_BASE}/owid-co2-data.json`
  );

  if (isLoading) return <div>Загрузка...</div>;

  if (error) {
    if ('status' in error) {
      // Ошибка типа FetchBaseQueryError
      const errMsg =
        'error' in error ? error.error : JSON.stringify(error.data);
      return <div>Ошибка: {errMsg}</div>;
    } else {
      // Ошибка типа SerializedError
      return <div>Ошибка: {error.message}</div>;
    }
  }

  if (!data) {
    return <div>Данные отсутствуют</div>;
  }

  const countries = Object.entries(data) as [string, CountryData][];

  return (
    <div className="co2-data p-4">
      <h2 className="text-2xl font-bold mb-4">CO2 данные по всем странам:</h2>
      <table className="w-full border-collapse mb-4">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-3 text-left border-b border-gray-200">№</th>
            <th className="p-3 text-left border-b border-gray-200">Страна</th>
            <th className="p-3 text-left border-b border-gray-200">ISO Код</th>
            <th className="p-3 text-left border-b border-gray-200">
              Население (2023)
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
                  {dataFor2023 ? dataFor2023.population : 'Нет данных'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
