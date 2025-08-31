interface TableHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const TableHeader = ({
  searchTerm,
  setSearchTerm,
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
    </div>
  );
};
