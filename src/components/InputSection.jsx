import InputForm from "./InputForm";

export default function InputSection({
  sentence,
  setSentence,
  onParse,
  loading,
}) {
  return (
    <header className="px-6 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto border border-gray-200">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Masukkan Kalimat
            </h2>
            <p className="text-gray-600">
              Contoh: "Saya sedang makan di rumah"
            </p>
          </div>

          <InputForm
            sentence={sentence}
            setSentence={setSentence}
            onParse={onParse}
            loading={loading}
          />
        </div>
      </div>
    </header>
  );
}
