import CykTable from "./CykTable";

export default function CykSection({ table, words }) {
  if (table.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Table Filling
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <CykTable table={table} words={words} />
      </div>
    </div>
  );
}
