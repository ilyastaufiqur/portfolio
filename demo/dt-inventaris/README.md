# DT-INVENTARIS

Aplikasi inventaris peralatan sepak bola Karang Taruna Dusun Timur. **Front-end only**, berbahasa Indonesia, dengan Bootstrap 5, JavaScript, Chart.js, dan LocalStorage.

## Menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di browser, atau jalankan dengan ekstensi Live Server di VS Code.
3. Koneksi internet diperlukan untuk memuat Bootstrap, Bootstrap Icons, dan Chart.js melalui CDN. Setelah library termuat, fungsi penyimpanan bekerja secara lokal.

## Fitur
- Dashboard statistik, grafik kondisi inventaris, transaksi terbaru.
- CRUD inventaris, kategori, kode unik, lokasi, kondisi, jumlah unit.
- Peminjaman, pengembalian, validasi stok, penanda keterlambatan.
- Riwayat aktivitas.
- Laporan inventaris, ekspor CSV, cetak/simpan PDF menggunakan dialog cetak browser.
- Backup dan restore JSON, hapus data, tema gelap/terang.

## Catatan penting
- Data disimpan **hanya** di LocalStorage pada browser dan profil perangkat ini; tidak tersinkronisasi antarperangkat.
- Buat backup JSON secara rutin. Menghapus data situs/browser dapat menghilangkan inventaris.
- Kondisi peralatan dicatat per **jenis/baris inventaris**, bukan per unit fisik. Untuk kondisi berbeda, buat entri/kode inventaris terpisah.
- Pengembalian dalam versi ini mengembalikan seluruh jumlah satu transaksi sekaligus (belum mendukung pengembalian parsial).
- Laporan PDF menggunakan fitur **Print > Save as PDF** pada browser.
- Ini proyek portofolio front-end, bukan sistem multi-pengguna dengan keamanan server.

## Penempatan di portofolio
Salin folder `DT-INVENTARIS` ke `PORTFOLIO-ILYAS/demo/DT-INVENTARIS/`, kemudian arahkan tombol Live Demo ke `../../demo/DT-INVENTARIS/index.html` jika halaman detail berada di `projects/dt-inventaris/index.html`.
