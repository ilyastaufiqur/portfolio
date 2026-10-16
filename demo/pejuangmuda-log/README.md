# PEJUANGMUDA-LOG

Aplikasi logbook kegiatan magang berbahasa Indonesia, front-end tanpa backend. Project portofolio independen, **bukan aplikasi resmi Kemensos RI**.

## Menjalankan

1. Ekstrak folder.
2. Jalankan dengan VS Code Live Server atau `python -m http.server 8000` di folder aplikasi, lalu buka `http://localhost:8000`.
3. Koneksi internet diperlukan untuk memuat Bootstrap, Bootstrap Icons, Chart.js, dan Google Fonts dari CDN.

## Fitur

- Dashboard statistik dan grafik 7 hari.
- CRUD logbook kegiatan dengan status, lokasi, durasi, hasil, dan kendala.
- Kalender bulanan.
- Dokumentasi foto per kegiatan (maksimal 1,5 MB).
- Laporan berdasarkan periode, cetak/simpan PDF melalui dialog cetak browser.
- Profil peserta, tema terang/gelap, cadangan dan impor JSON.
- Penyimpanan data lokal melalui IndexedDB; profil dan preferensi tema via LocalStorage.

## Catatan penting

- Tidak memiliki akun pengguna, sinkronisasi antarperangkat, verifikasi pembimbing, atau server.
- Jangan gunakan data sensitif atau foto pribadi untuk demo publik.
- Data dapat hilang jika data browser dibersihkan. Gunakan fitur cadangan JSON.
- Laporan PDF menggunakan fitur **Print / Save as PDF** browser, bukan generator PDF server.
- Gambar `cover-4k.jpg` adalah ilustrasi 3840 × 2160, bukan screenshot aplikasi.
- Sesuaikan branding, deskripsi, dan fitur sebelum memasukkan ke portofolio.
