import { getSentencePattern } from "./SpokAnalysis";

export default function ResultSection({
  status,
  checkedSentence,
  words,
  table,
}) {
  if (!status) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 pb-12">
      <div className="relative">
        <div
          className={`rounded-xl shadow-md overflow-hidden border-l-4 ${
            status === "DITERIMA"
              ? "border-green-500"
              : status === "DITOLAK"
              ? "border-red-500"
              : "border-yellow-500"
          }`}
        >
          <div
            className={`p-1 ${
              status === "DITERIMA"
                ? "bg-green-50"
                : status === "DITOLAK"
                ? "bg-red-50"
                : "bg-yellow-50"
            }`}
          >
            <div className="bg-white p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Hasil Parsing
                  </h3>

                  <p className="text-lg mb-3">
                    <span className="font-medium text-gray-700">
                      Kalimat:
                    </span>{" "}
                    <span className="font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">
                      {checkedSentence}
                    </span>
                  </p>

                  {status === "DITERIMA" && (
                    <p className="text-lg">
                      <span className="font-medium text-gray-700">
                        Pola:
                      </span>{" "}
                      <span className="font-bold text-green-600">
                        {getSentencePattern(words, table)}
                      </span>
                    </p>
                  )}
                </div>

                <div
                  className={`px-8 py-6 rounded-lg ${
                    status === "DITERIMA"
                      ? "bg-green-500"
                      : status === "DITOLAK"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  <div className="text-white text-3xl font-bold">
                    {status === "DITERIMA"
                      ? "VALID"
                      : status === "DITOLAK"
                      ? "TIDAK VALID"
                      : "ERROR"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}