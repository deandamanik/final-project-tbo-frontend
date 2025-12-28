import { useState } from "react";
import InputForm from "./components/InputForm";
import CykTable from "./components/CykTable";

function App() {
  const [sentence, setSentence] = useState("");
  const [status, setStatus] = useState("");
  const [table, setTable] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checkedSentence, setCheckedSentence] = useState("");


  const parseSentence = () => {
    if (!sentence.trim()) {
      setStatus("");
      setTable([]);
      setWords([]);
      return;
    }

    setLoading(true);
    setStatus("");
    setTable([]);
    setWords([]);

    fetch("http://localhost:8000/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sentence }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setStatus(data.accepted ? "DITERIMA" : "DITOLAK");
        setTable(data.table);
        setWords(data.words);
        setCheckedSentence(sentence);
        setSentence("");
      })
      .catch(() => {
        setStatus("ERROR");
        setCheckedSentence(sentence);
        setSentence("");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Parsing Kalimat
          </h1>

          <p className="text-slate-600 text-lg mb-10">
            Periksa kalimat dengan pola dasar bahasa Indonesia
            menggunakan algoritma{" "}
            <span className="font-medium">
              Cocke–Younger–Kasami (CYK)
            </span>
          </p>

          <InputForm
            sentence={sentence}
            setSentence={setSentence}
            onParse={parseSentence}
            loading={loading}
          />

        </div>
      </div>

      {status === "DITERIMA" && (
        <div className="max-w-4xl mx-auto mt-4 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Hasil Parsing
          </h2>

          <div className="bg-green-300 rounded-2xl p-8 text-center">
            <p className="text-lg mb-4">
              Berdasarkan hasil pemeriksaan, kalimat{" "}
              <b>{checkedSentence}</b>
            </p>

            <p className="text-3xl font-bold text-green-700 mb-3">
              VALID
            </p>

            <p className="text-lg">
              Sesuai dengan pola dasar bahasa Indonesia
            </p>
          </div>
        </div>
      )}

      {status === "DITOLAK" && (
        <div className="max-w-4xl mx-auto mt-4 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Hasil Parsing
          </h2>

          <div className="bg-red-300 rounded-2xl p-8 text-center">
            <p className="text-lg mb-4">
              Berdasarkan hasil pemeriksaan, kalimat{" "}
              <b>{checkedSentence}</b>
            </p>

            <p className="text-3xl font-bold text-red-700 mb-3">
              TIDAK VALID
            </p>

            <p className="text-lg">
              Tidak sesuai dengan pola dasar bahasa Indonesia
            </p>
          </div>
        </div>
      )}

      {table.length > 0 && (
        <h2 className="text-3xl font-bold text-center mt-20 mb-8">
          Table Filling
        </h2>
      )}

      <CykTable table={table} words={words} />
    </div>
  );
}

export default App;