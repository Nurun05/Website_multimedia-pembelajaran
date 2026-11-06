# Pengembangan Multimedia Pembelajaran Interaktif Berbasis Web-Mobile
## Pendamping Media Pembelajaran Konvensional pada Mata Pelajaran IPA SMP Negeri 1 Tandukkalua Menggunakan Model MDLC

**Pengembang:** Nurun Nisa Ahmad  
**NIM:** 240209501049  
**Kelas:** PTIK E 2024  
**Sekolah Mitra:** SMP Negeri 1 Tandukkalua  
**Mata Pelajaran:** Ilmu Pengetahuan Alam (IPA) – Fase D (Kelas VII)  
**Materi Pokok:** Ekologi dan Keanekaragaman Hayati Indonesia  

---

## 🎨 Tema Visual & Desain Antarmuka

- **Skema Warna:** **Biru Langit (*Sky Blue Harmony*)** yang cerah, teduh, dan ramah untuk peserta didik usia SMP.
  - Bilah Judul (*Header*): Gradasi biru langit bersinar (`#0ea5e9` ke `#0284c7`).
  - Latar Belakang Luar: Gradasi langit cerah (`#cbebfb` ke `#f0f9ff`).
  - Bingkai Ponsel (*Device Frame*): Border & bayangan lembut bernuansa biru langit.
- **Tipografi:** **Calibri Light** (`"Calibri Light", Calibri, Segoe UI, sans-serif`), menghasilkan teks yang tajam, rapi, dan mudah dibaca oleh siswa.
- **Tombol Disesuaikan (*Customized Buttons*):**
  - **Tombol Utama (*Primary Action*):** Gradasi biru langit bersinar (`linear-gradient(135deg, #38bdf8, #0ea5e9, #0284c7)`) dengan teks putih dan efek bayangan lembut.
  - **Tombol Sekunder (*Secondary*):** Biru langit lembut (`#f0f9ff`) dengan bingkai biru cerah (`#bae6fd`).
  - **Tombol Garis Luar (*Outline*):** Transparan dengan garis tepi biru langit (`#38bdf8`).
  - **Pilihan Interaktif:** Berubah menjadi biru langit terang saat dipilih oleh siswa.

---

## 🧩 Pendekatan Arsitektur Modular

Struktur proyek telah dirombak ke dalam **pendekatan modular terpisah**. Setiap bagian halaman, gaya CSS, logika interaksi, dan data memiliki berkasnya masing-masing sehingga mempermudah perbaikan dan pemeliharaan:

```
MULPED/
├── index.html                   # Berkas shell utama yang ringkas dan bersih (~80 baris)
├── server.py                    # Server lokal Python dengan auto-detect IP & no-cache
├── start-server.bat             # Pintasan 1-klik untuk menjalankan server di Windows
├── README.md                    # Dokumentasi lengkap modul
│
├── css/                         # Modul Stylesheet Terpisah
│   ├── style.css                # Master stylesheet (@import seluruh modul CSS)
│   ├── variables.css            # Variabel palet biru langit & font Calibri Light
│   ├── base.css                 # Tata letak dasar & bingkai smartphone portrait
│   ├── buttons.css              # Seluruh gaya tombol bernuansa biru langit
│   ├── components.css           # Header, bottom nav, kartu, badge, & menu
│   ├── activities.css           # Accordion, tab 3 tingkat, matching & sorting
│   ├── quiz.css                 # Tampilan soal kuis, lingkaran skor & rekomendasi
│   └── print.css                # Format cetak lembar kerja PDF mandiri
│
├── js/                          # Modul Logika & Manajemen State
│   ├── data.js                  # Data kurikulum IPA Fase D, materi & 10 butir soal kuis
│   ├── state.js                 # Pengelola state & sinkronisasi LocalStorage
│   ├── router.js                # Pengendali alur navigasi 12 halaman & bilah bawah
│   ├── app.js                   # Inisialisasi utama aplikasi
│   │
│   └── views/                   # Modul Tampilan Per Halaman Storyboard
│       ├── view-beranda.js      # Halaman 1: Beranda & info modul
│       ├── view-petunjuk.js     # Halaman 2: Petunjuk & Tujuan Pembelajaran (TP 1-3)
│       ├── view-menu.js         # Halaman 3: Menu Utama (5 kartu pilihan)
│       ├── view-kegiatan1.js    # Halaman 4 & 5: Konsep, Istilah Kunci & Latihan 1
│       ├── view-kegiatan2.js    # Halaman 6 & 7: Tiga Tingkat Kehati & Latihan 2 Matching
│       ├── view-kegiatan3.js    # Halaman 8 & 9: Pengamatan Animasi, Wallace & Latihan 3 Sorting
│       ├── view-kuis.js         # Halaman 10: Kuis Akhir 10 Soal PG & Pembahasan Ilmiah
│       ├── view-hasil.js        # Halaman 11: Lingkaran Skor, Capaian TP & Saran Adaptif (<60%)
│       └── view-rangkuman.js    # Halaman 12: Rangkuman, Glosarium & Cetak Lembar Catatan (PDF)
│
└── assets/                      # Aset Vektor SVG Lokal (100% Offline)
    ├── hero-biodiversity.svg    # Ilustrasi alam nusantara
    ├── diagram-tingkat.svg      # Diagram hierarki gen, jenis, ekosistem
    ├── map-wallace-weber.svg    # Peta biogeografi Garis Wallace & Weber
    └── nature-icons.svg         # Ikon flora & fauna endemik
```

---

## 🚀 Keunggulan Pendekatan Modular Ini

1. **Kerapian Kode & Efisiensi Perbaikan:**  
   Jika ingin mengubah teks materi Kegiatan 1, cukup buka `js/views/view-kegiatan1.js`. Jika ingin menambah soal, cukup edit `js/data.js`. Jika ingin mengatur warna tombol, cukup buka `css/buttons.css`.
2. **Tidak Ada Berkas Raksasa Monolitik:**  
   Berkas `index.html` kini hanya bertindak sebagai wadah semantik yang ramping.
3. **Kompatibel 100% Offline & Online:**  
   Bisa dijalankan langsung via server lokal `http://localhost:8000`, melalui jaringan Wi-Fi HP `http://10.213.154.155:8000`, maupun dibuka langsung sebagai berkas offline.
