function CykTable({ table, words }) {
  if (!table.length) return null;

  const n = words.length;

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto px-6 pb-24">
      <table className="border-collapse mx-auto">
        <tbody>
          {[...Array(n)].map((_, row) => {
            const len = n - 1 - row;

            return (
              <tr key={row}>
                {[...Array(n)].map((_, i) => {
                  const j = i + len;

                  if (j < n) {
                    const cell = table[i][j];
                    return (
                      <td
                        key={i}
                        className="border-2 border-black p-3 min-w-30 text-sm text-center"
                      >
                        {cell.length > 0
                          ? `{${cell.join(", ")}}`
                          : "∅"}
                      </td>
                    );
                  }

                  return <td key={i}></td>;
                })}
              </tr>
            );
          })}

          <tr>
            {words.map((word, i) => (
              <td
                key={i}
                className="pt-4 font-semibold text-center"
              >
                {word}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CykTable;
