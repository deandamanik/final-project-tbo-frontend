import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ResultSection from "./components/ResultSection";
import CykSection from "./components/CykSection";

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
      .then((res) => res.json())
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
    <div className="bg-white text-black min-h-screen">
      <Header />

      <InputSection
        sentence={sentence}
        setSentence={setSentence}
        onParse={parseSentence}
        loading={loading}
      />

      <ResultSection
        status={status}
        checkedSentence={checkedSentence}
        words={words}
        table={table}
      />

      <CykSection table={table} words={words} />
    </div>
  );
}

export default App;
