# PresensiApp

PresensiApp adalah aplikasi berbasis web untuk mencatat presensi (kehadiran) menggunakan Node.js, Express, dan Socket.IO. Aplikasi ini memungkinkan pengguna untuk menambah data presensi dan melihat daftar presensi yang telah ditambahkan dalam bentuk tabel.

## Fitur

- Menambah data presensi dengan nama dan waktu.
- Menampilkan daftar presensi dalam bentuk tabel dengan kolom Nomor, Nama, dan Check-In.
- Real-time update menggunakan Socket.IO untuk menampilkan data presensi yang baru
  ditambahkan.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- Node.js versi terbaru
- NPM

## Installation

1. Clone repositori ini:

```bash
git clone https://github.com/farhanhunter/PresensiApp.git
```

2. Masuk ke direktori proyek:

```bash
cd PresensiApp
```

3. Instal dependensi:

```bash
npm install
```

## Menjalankan Aplikasi

1. Jalankan Server:

```bash
node app.js
```

2. Buka browser dan akses http://localhost:3001/presensi untuk melihat aplikasi.

## Struktur Proyek

- app.js: Berisi konfigurasi server dan middleware.
- controllers/presensiController.js: Mengatur logika untuk mendapatkan dan menambah data
  presensi.
- models/presensiModel.js: Berisi data model presensi.
- views/presensiView.html: Template HTML untuk menampilkan form dan daftar presensi.
- public/src/css/app.css: Berisi gaya (CSS) untuk tampilan tabel presensi.
- package.json: Berisi informasi proyek dan dependensi.

## Directory Structure

Here’s the structure of your project from the root directory:

```bash
MVC-NODEJS/
├── controllers/
│   ├── errorController.mjs
│   ├── portofolioController.mjs
│   └── presensiController.mjs
├── models/
│   ├── portofolioModel.mjs
│   └── presensiModel.mjs
├── node_modules/
│   └── (installed dependencies)
├── public/
│   ├── css/
│   │   └── app.css
│   │   └── styles.css
│   ├── img/
│   │   └── bg-image.png
│   │   └── profil-pic.png
│   └── js/
│       └── index.js
├── routes/
│   ├── errorRoutes.mjs
│   ├── portofolioRoutes.mjs
│   └── presensiRoutes.mjs
├── views/
│   ├── components/
│   │   ├── footer.ejs
│   │   ├── header.ejs
│   │   ├── layout.ejs
│   └── errorView.ejs
│   └── portofolio.ejs
│   └── presensiView.ejs
├── app.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
