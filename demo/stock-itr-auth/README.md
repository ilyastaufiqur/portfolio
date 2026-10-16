# STOCK-ITR Premium — Full Front-End Portfolio Project

Developer: Ilyas Taufiqur Rahman

## Menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di Chrome atau gunakan ekstensi VS Code Live Server.
3. Pada halaman login klik **Masuk sebagai Demo** untuk membuka dashboard.
4. Klik **Keluar** untuk kembali ke halaman login.

## Fitur
- Login, Register, Forgot Password, konfirmasi email (UI simulasi)
- Validasi formulir, indikator kekuatan password, tampil/sembunyi password
- Dual theme dark/light (tersimpan dalam browser)
- Dashboard, CRUD produk, kategori, barang masuk/keluar, grafik, laporan, CSV, backup/restore JSON, notifikasi, responsive
- Folder `design-reference-4k/` memuat 14 gambar referensi desain 4K.

## PENTING: Keamanan dan batasan
Ini adalah **demo front-end**, bukan sistem autentikasi produksi. Tidak ada akun yang dibuat, tidak ada email reset/verifikasi yang dikirim, dan tidak ada password yang disimpan. Tombol **Masuk sebagai Demo** membuka dashboard tanpa pemeriksaan identitas. Form login sengaja tidak mengautentikasi user.

Data inventaris disimpan di localStorage browser, sedangkan status sesi demo di sessionStorage. Data tidak tersinkronisasi antarperangkat dan dapat dihapus oleh browser. Jangan gunakan data inventaris nyata atau kredensial asli. Untuk sistem produksi gunakan backend/authentication provider (Firebase Auth atau Supabase Auth), aturan akses, dan database yang aman.

## Struktur
- `index.html`: semua halaman dalam satu aplikasi
- `assets/css/style.css`: dashboard
- `assets/css/auth.css`: halaman login/register
- `assets/js/app.js`: logika inventaris
- `assets/js/auth.js`: navigasi dan validasi UI autentikasi
- `assets/images/logo.svg`: logo
- `design-reference-4k/`: gambar desain referensi

## Catatan
Seluruh kode aplikasi tidak membutuhkan CDN. Jalankan offline. Gambar 4K adalah referensi desain dan tidak dibutuhkan untuk fungsi aplikasi.
