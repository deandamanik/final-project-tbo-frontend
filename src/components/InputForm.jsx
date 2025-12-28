function InputForm({ sentence, setSentence, onParse, loading }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <input
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onParse()}
        placeholder="Masukkan kalimat..."
        autoComplete="off"
        className="w-full max-w-2xl px-5 py-4 rounded-xl border border-slate-300 text-lg outline-none focus:border-slate-500"
      />
      <button
        onClick={onParse}
        disabled={loading}
        className="px-10 py-4 bg-blue-500 text-white text-lg rounded-xl font-semibold hover:opacity-90 disabled:bg-blue-300"
      >
        {loading ? "Memproses..." : "Periksa"}
      </button>
    </div>
  );
}

export default InputForm;
 