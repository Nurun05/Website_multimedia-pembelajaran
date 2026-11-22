# Pengembangan Multimedia Pembelajaran Interaktif Berbasis Web-Mobile
## Pendamping Media Pembelajaran Konvensional pada Mata Pelajaran IPA SMP Negeri 1 Tandukkalua Menggunakan Model MDLC

🌐 **Live Website (GitHub Pages):** [https://nurun05.github.io/Website_multimedia-pembelajaran/](https://nurun05.github.io/Website_multimedia-pembelajaran/)  
📦 **Repositori GitHub:** [https://github.com/Nurun05/Website_multimedia-pembelajaran](https://github.com/Nurun05/Website_multimedia-pembelajaran)  

- **Pengembang:** Nurun Nisa Ahmad  
- **NIM:** 240209501049  
- **Kelas:** PTIK E 2024  
- **Sekolah Mitra:** SMP Negeri 1 Tandukkalua  
- **Mata Pelajaran:** Ilmu Pengetahuan Alam (IPA) – Fase D (Kelas VII)  
- **Materi Pokok:** Ekologi dan Keanekaragaman Hayati Indonesia  

---

## 🎨 Tema Visual & Desain Antarmuka

- **Skema Warna:** **Biru Langit Lembut (*Soft Sky Blue*) `#dae9f7` (RGB: 218, 233, 247)** yang teduh, sejuk, dan ramah untuk peserta didik usia SMP.
  - Bilah Judul (*Header*): `#dae9f7` dengan aksen teks biru dongker/navy `#1b3b5f` dan badge `#367bb7`.
  - Tombol Sekunder & Aksen: `#dae9f7` dengan batas lembut `#b9d5ee`.
  - Tombol Utama (*Primary Action*): Biru laut cerah harmoni `#367bb7` dengan efek hover `#2c679b`.
- **Tipografi:** **Calibri Light** (`"Calibri Light", Calibri, system-ui, sans-serif`), teks terlihat tajam, elegan, dan mudah dibaca oleh siswa.
- **Responsif Otomatis (Mobile & Desktop):**
  - **Tampilan Ponsel (Mobile < 768px):** Tampilan layar penuh (*full mobile viewport*) yang pas di genggaman ponsel pintar siswa.
  - **Tampilan Komputer / Laptop (Desktop ≥ 768px):** Kontainer kartu elegan di tengah layar (*centered container* maks. 840px), menu 2-kolom seimbang, dan papan latihan bersanding agar tidak ada ruang kosong terbuang.

---

## 🧩 Pendekatan Arsitektur Modular

Seluruh kode disusun menggunakan **pendekatan modular terpisah**. Setiap halaman, gaya CSS, komponen, logika interaksi, dan data terpisah rapi:

```
MULPED/
├── index.html                   # Berkas shell semantik ringkas (~75 baris)
├── .nojekyll                    # Konfigurasi GitHub Pages bypass Jekyll
├── push-ke-github.bat           # Skrip 1-klik sinkronisasi dan unggah ke GitHub
├── server.py                    # Server lokal Python dengan auto-detect IP & no-cache
├── start-server.bat             # Pintasan 1-klik untuk menjalankan server di Windows
├── README.md                    # Dokumentasi lengkap modul
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow otomatis untuk GitHub Pages
│
├── css/                         # Modul Stylesheet Terpisah
│   ├── style.css                # Master stylesheet (@import seluruh modul CSS)
│   ├── variables.css            # Variabel palet biru langit (#dae9f7) & font Calibri Light
│   ├── base.css                 # Sistem responsif otomatis (mobile & desktop)
│   ├── buttons.css              # Gaya tombol selaras biru langit (#dae9f7 & #367bb7)
│   ├── components.css           # Header, bottom nav, kartu menu adaptif
│   ├── activities.css           # Accordion, tab 3 tingkat, matching & sorting interaktif
│   ├── quiz.css                 # Tampilan soal kuis, lingkaran skor & rekomendasi
│   └── print.css                # Format cetak lembar kerja mandiri (@media print)
│
├── pages/                       # 12 Berkas Komponen Halaman Terpisah
│   ├── page-1.html              # Halaman 1: Beranda & Info Pengembang
│   ├── page-2.html              # Halaman 2: Petunjuk Belajar & TP 1-3
│   ├── page-3.html              # Halaman 3: Menu Utama (5 Kartu Pilihan)
│   ├── page-4.html              # Halaman 4: Kegiatan 1 Materi (Konsep & Istilah Kunci)
│   ├── page-5.html              # Halaman 5: Kegiatan 1 Latihan Mandiri (Refleksi Ekosistem)
│   ├── page-6.html              # Halaman 6: Kegiatan 2 Materi (3 Tingkat Keanekaragaman Hayati)
│   ├── page-7.html              # Halaman 7: Kegiatan 2 Latihan (Drag & Drop / Klik Pasangan)
│   ├── page-8.html              # Halaman 8: Kegiatan 3 Materi (Biogeografi Wallace & Weber)
│   ├── page-9.html              # Halaman 9: Kegiatan 3 Latihan (Pengurutan Kartu / Sorting)
│   ├── page-10.html             # Halaman 10: Kuis Akhir (10 Butir Soal PG & Pembahasan Ilmiah)
│   ├── page-11.html             # Halaman 11: Evaluasi & Hasil (Gauge Skor, TP & Rekomendasi)
│   └── page-12.html             # Halaman 12: Rangkuman Materi, Glosarium & Cetak Lembar Catatan
│
├── js/                          # Modul Skrip & Logika
│   ├── data.js                  # Data kurikulum IPA Fase D, materi & 10 butir soal kuis
│   ├── state.js                 # Pengelola state & sinkronisasi LocalStorage
│   ├── router.js                # Pengendali alur navigasi 12 halaman & bilah bawah
│   ├── app.js                   # Dual-mode component loader (HTTP live + template fallback)
│   │
│   └── views/                   # Pengendali Tampilan Tiap Modul
│       ├── view-beranda.js      # Kontrol tampilan Beranda
│       ├── view-petunjuk.js     # Kontrol tampilan Petunjuk & Capaian TP
│       ├── view-menu.js         # Kontrol tampilan Menu Utama
│       ├── view-kegiatan1.js    # Kontrol materi konsep & latihan 1
│       ├── view-kegiatan2.js    # Kontrol tab 3 tingkat & latihan matching 2 kolom
│       ├── view-kegiatan3.js    # Kontrol animasi, peta biogeografi & sortir kartu
│       ├── view-kuis.js         # Pengelola 10 butir kuis interaktif
│       ├── view-hasil.js        # Kalkulasi skor & saran adaptif remedial
│       └── view-rangkuman.js    # Rangkuman & pemicu cetak lembar kerja PDF
│
└── assets/                      # Aset Gambar & Media Pembelajaran Lokal
    ├── hero-biodiversity.jpg    # Panorama alam & biodiversitas Indonesia
    ├── tingkat-gen-mangga.jpg   # Foto keanekaragaman gen varietas mangga
    ├── tingkat-jenis-harimau-kucing.jpg # Perbandingan famili kucing
    ├── tingkat-ekosistem-hutan.jpg # Panorama hutan hujan tropis
    └── peta-persebaran-fauna-indonesia.jpg # Peta Garis Wallace & Weber
```

---

## 🚀 Cara Menjalankan

### 1. Menjalankan secara Online (GitHub Pages)
Buka peramban (browser) dan akses alamat:  
👉 **[https://nurun05.github.io/Website_multimedia-pembelajaran/](https://nurun05.github.io/Website_multimedia-pembelajaran/)**

### 2. Menjalankan di Komputer Lokal (Local Server)
- Cukup **klik dua kali berkas `start-server.bat`**.
- Aplikasi otomatis terbuka di `http://localhost:8000`.
- Tautan jaringan lokal (LAN/Wi-Fi) juga ditampilkan di konsol agar siswa dapat mengakses materi dari ponsel tanpa kuota internet.

### 3. Mengunggah Perubahan ke GitHub
- Cukup **klik dua kali berkas `push-ke-github.bat`**.
- Perubahan akan otomatis dicommit dan diunggah ke repositori GitHub `Nurun05/Website_multimedia-pembelajaran`.
