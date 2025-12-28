export default function StatusBadge({ status }) {
  const color =
    status === "DITERIMA"
      ? "green"
      : status === "DITOLAK"
      ? "red"
      : "yellow";

  return (
    <div
      className={`inline-block px-6 py-3 rounded-lg text-white font-bold bg-${color}-500`}
    >
      {status === "DITERIMA"
        ? "VALID"
        : status === "DITOLAK"
        ? "TIDAK VALID"
        : "ERROR"}
    </div>
  );
}
