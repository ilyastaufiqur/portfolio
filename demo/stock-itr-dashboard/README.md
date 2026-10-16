# STOCK-ITR — Premium Inventory Management System

**Developer:** Ilyas Taufiqur Rahman  
**Versi:** 1.0.0  
**Tipe:** Front-End Portfolio Demo (HTML, CSS, Vanilla JavaScript)

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di Chrome, Edge, atau Firefox. Tidak membutuhkan server atau database.
3. Untuk pengembangan, buka folder di Visual Studio Code. Ekstensi Live Server bersifat opsional.

## Fitur yang benar-benar berfungsi
- Dashboard responsif dengan statistik produk, grafik stok 7 hari, kategori, dan aktivitas terbaru.
- Dual theme: Dark / Light; preferensi disimpan di browser.
- Manajemen produk: tambah, edit, hapus, cari, filter kategori, stok minimum dan harga.
- Barang masuk / keluar: otomatis memperbarui stok dan mencatat transaksi; stok keluar tidak boleh melebihi stok tersedia.
- Kategori: tambah/hapus (kategori yang sedang digunakan tidak bisa dihapus).
- Laporan: filter tanggal dan jenis, export transaksi serta produk ke CSV.
- Pengaturan nama gudang dan stok minimum default.
- Backup dan restore seluruh data ke/dari JSON.
- Notifikasi produk menipis/habis, serta data demo dan reset.
- Navigasi sidebar responsif, pencarian global, shortcut Ctrl+K.

## File utama
- `index.html`: kerangka antarmuka.
- `assets/css/style.css`: seluruh styling, responsive dan tema.
- `assets/js/app.js`: state, halaman, fitur, grafik Canvas, data contoh.
- `assets/images/logo.svg`: logo vektor STOCK-ITR.

## Cara mengubah
- **Nama developer:** edit `index.html` (header/footer) dan teks sapaan di fungsi `dashboard()` pada `assets/js/app.js`.
- **Data contoh:** edit fungsi `seed()` di `assets/js/app.js`.
- **Warna / layout:** edit variabel CSS di awal `assets/css/style.css`.
- **Nama aplikasi / logo:** edit `index.html`, `assets/images/logo.svg`.
- **Data pribadi / gudang:** buka halaman Pengaturan pada aplikasi.

## Penting
Aplikasi ini **tanpa backend, tanpa login sungguhan, dan tanpa sinkronisasi multiuser**. Data disimpan dengan `localStorage` pada browser/perangkat yang sama. Menghapus data browser dapat menghilangkan data; gunakan Backup JSON. Tidak disarankan untuk menyimpan data rahasia atau digunakan sebagai sistem perusahaan tanpa pengembangan backend dan keamanan.

Grafik dibuat menggunakan HTML Canvas sehingga berfungsi tanpa library atau internet. Font Inter diunduh dari Google Fonts saat tersedia; jika offline, font sistem digunakan sebagai fallback. Tidak ada ketergantungan CDN yang wajib.

## Ide pengembangan berikutnya
- API dan database (Supabase/Firebase) dengan aturan akses yang aman.
- Hak akses pengguna, autentikasi dan audit log.
- Barcode scanning, multi-gudang, export PDF, serta automated tests.

© STOCK-ITR · Ilyas Taufiqur Rahman
