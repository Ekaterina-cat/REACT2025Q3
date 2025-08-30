interface TableHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  requestSort: (key: 'countryName' | 'population') => void;
  getSortIndicator: (key: 'countryName' | 'population') => string;
}

export const TableHeader = ({
  searchTerm,
  setSearchTerm,
  requestSort,
  getSortIndicator,
}: TableHeaderProps) => {
  return (
    <div className="w-full border-collapse">
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
            <th className="border-b px-3 py-2">№</th>
            <th
              className="cursor-pointer border-b px-3 py-2"
              onClick={() => requestSort('countryName')}
            >
              Country {getSortIndicator('countryName')}
            </th>
            <th className="cursor-pointer border-b px-3 py-2">ISO code</th>
            <th
              className="cursor-pointer border-b px-3 py-2"
              onClick={() => requestSort('population')}
            >
              Population (2023) {getSortIndicator('population')}
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
