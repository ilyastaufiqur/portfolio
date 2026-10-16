# KAS-ITR — Simple Cash Management System

Aplikasi manajemen kas sederhana, berbahasa Indonesia, berbasis front-end saja.

## Menjalankan
1. Ekstrak folder `KAS-ITR`.
2. Buka `index.html` di browser, atau gunakan ekstensi Live Server di VS Code.
3. Pastikan terhubung internet saat pertama kali membuka halaman karena Bootstrap dan Chart.js dimuat melalui CDN.

## Fitur
- Dashboard saldo, pemasukan, pengeluaran, dan grafik 6 bulan.
- CRUD transaksi kas masuk dan keluar.
- Pencarian, filter jenis, dan bulan.
- Laporan per bulan, ekspor CSV, dan cetak/simpan PDF via fitur cetak browser.
- Pengaturan nama kas, backup dan restore JSON.
- Dual theme, tampilan responsif.

## Catatan
- Penyimpanan menggunakan `localStorage` pada browser/perangkat yang sama; tidak sinkron antarperangkat.
- Tidak memiliki login atau backend; bukan untuk pembukuan resmi yang membutuhkan audit dan keamanan tambahan.
- Lakukan backup JSON secara berkala.
- Saldo adalah jumlah semua pemasukan dikurangi semua pengeluaran. Selisih pada halaman laporan hanya untuk periode yang dipilih.
- Semua data contoh kosong saat pertama kali dijalankan.
