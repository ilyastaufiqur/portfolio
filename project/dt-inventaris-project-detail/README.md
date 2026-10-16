# DT-INVENTARIS — Project Details

Halaman detail portofolio DT-INVENTARIS untuk Karang Taruna Dusun Timur. Dibuat dengan HTML, CSS, JavaScript, dan Bootstrap 5. Seluruh konten berbahasa Indonesia.

## Menjalankan
Buka `index.html` melalui Live Server di VS Code atau browser. Bootstrap diambil dari CDN sehingga membutuhkan internet.

## Struktur portofolio yang direkomendasikan
```
PORTFOLIO-ILYAS/
├── index.html
├── projects/
│   └── dt-inventaris/
│       ├── index.html
│       └── assets/...
└── demo/
    └── DT-INVENTARIS/
        ├── index.html
        └── assets/...
```
Tombol Live Demo pada `projects/dt-inventaris/index.html` mengarah ke `../../demo/DT-INVENTARIS/index.html`. Jika struktur folder berbeda, sesuaikan tautan di `index.html`.

## Mengatur GitHub
Buka `assets/js/main.js`, isi `GITHUB_URL` dengan alamat repository milikmu. Tombol GitHub akan aktif otomatis.

## Mengganti gambar
Keempat gambar dalam `assets/images` adalah **ilustrasi UI SVG**, bukan screenshot aplikasi sebenarnya. Ganti dengan screenshot asli bila sudah tersedia; perbarui `src` gambar pada `index.html`.

## Catatan
Halaman ini adalah *project details*, bukan aplikasi inventaris utama. LocalStorage hanya digunakan untuk menyimpan preferensi tema pada halaman ini. Tidak ada backend atau login.
