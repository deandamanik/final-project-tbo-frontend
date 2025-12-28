export default function Header() {
  return (
    <header className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Parser Kalimat Bahasa Indonesia
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Analisis struktur kalimat dengan algoritma{" "}
            <span className="font-semibold">
              Cocke–Younger–Kasami (CYK)
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
