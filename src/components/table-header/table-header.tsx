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
    <div>
      <h2>CO2 data for all countries:</h2>
      <div>
        <input
          type="text"
          placeholder="Search by country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table>
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
        <tbody></tbody>
      </table>
    </div>
  );
};
