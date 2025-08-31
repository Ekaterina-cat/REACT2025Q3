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
      <h2 className="font-courgette mb-4 text-2xl font-bold">
        CO2 emissions data for each country in the world:
      </h2>
      <div className="font-borel mb-5 pt-2.5">
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
