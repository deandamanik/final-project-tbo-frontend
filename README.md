# Frontend CYK Parser - Tugas Akhir TBO

Aplikasi frontend ini dikembangkan menggunakan **React** untuk menyediakan antarmuka visual bagi parser kalimat Bahasa Indonesia. Proyek ini merupakan bagian dari tugas akhir mata kuliah Teori Bahasa dan Automata (TBO) yang mengimplementasikan **Algoritma CYK (Cocke-Younger-Kasami)**.

## Fitur Utama
- **Interactive Input**: Memungkinkan pengguna memasukkan kalimat bahasa Indonesia untuk divalidasi secara real-time.
- **Visualisasi Tabel CYK**: Menampilkan proses pengisian matriks segitiga (triangular table) yang dinamis, memudahkan pemahaman cara kerja algoritma dalam menentukan validitas sintaksis.
- **Analisis Pola S-P-O-K**: Sistem secara cerdas mendeteksi dan menampilkan pola kalimat seperti Subjek (S), Predikat (P), Objek (O), dan Keterangan (K) berdasarkan hasil parsing.
- **Status Validasi**: Memberikan indikator visual yang jelas apakah sebuah kalimat "DITERIMA" atau "DITOLAK" oleh aturan tata bahasa yang telah ditetapkan.
- **Modern & Responsive UI**: Dibangun dengan Tailwind CSS untuk memastikan tampilan yang bersih, modern, dan nyaman diakses melalui perangkat desktop maupun mobile.

## Teknologi yang Digunakan
- **React.js**
- **Tailwind CSS**
- **Fetch API**

## Cara Menjalankan
1. **Clone Repositori**:
   ```bash
   git clone https://github.com/deandamanik/final-project-tbo-frontend.git
   cd final-project-tbo-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**
   ```bash
   npm run dev
   ```