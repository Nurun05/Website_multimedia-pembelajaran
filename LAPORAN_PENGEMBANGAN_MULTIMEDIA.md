# LAPORAN PENGEMBANGAN MULTIMEDIA PEMBELAJARAN
## PENGEMBANGAN MULTIMEDIA PEMBELAJARAN INTERAKTIF BERBASIS WEBMOBILE SEBAGAI PENDAMPING MEDIA PEMBELAJARAN KONVENSIONAL PADA MATA PELAJARAN IPA SMP NEGERI 1 TANDUKKALUA MENGGUNAKAN MODEL MDLC

Diajukan untuk Memenuhi Tugas Mata Kuliah Multimedia Pembelajaran

---

### IDENTITAS PENYUSUN
**Nama :** Nurun Nisa Ahmad  
**Nomor Induk Mahasiswa (NIM) :** 240209501049  
**Kelas :** Pendidikan Teknik Informatika dan Komputer (PTIK) E 2024  
**Mata Kuliah :** Multimedia Pembelajaran  
**Dosen Pengampu :** Dr. Udin Sidik Sidin, S.Pd., M.T. (Nomor Induk Dosen Nasional (NIDN) 0015067407)  
**Dosen Mitra :** Ir. H. Muhammad Riska, S.Pd., M.Pd. (Nomor Induk Dosen Nasional (NIDN) 0020098503)  

**PROGRAM STUDI PENDIDIKAN TEKNIK INFORMATIKA DAN KOMPUTER**  
**JURUSAN TEKNIK INFORMATIKA DAN KOMPUTER**  
**FAKULTAS TEKNIK**  
**UNIVERSITAS NEGERI MAKASSAR**  
**2026**

---

\newpage

# KATA PENGANTAR

Puji syukur penulis panjatkan ke hadirat Tuhan Yang Maha Esa atas selesainya penyusunan laporan ini. Laporan ini mendokumentasikan karya berjudul **"Pengembangan Multimedia Pembelajaran Interaktif Berbasis Webmobile Sebagai Pendamping Media Pembelajaran Konvensional Pada Mata Pelajaran IPA SMP Negeri 1 Tandukkalua Menggunakan Model MDLC"**. Di dalamnya tersaji proses analisis kebutuhan, perancangan media, perakitan modul, hingga pengujian perangkat lunak. Modul interaktif ini memuat materi Ekologi dan Keanekaragaman Hayati Indonesia untuk peserta didik kelas VII sekolah menengah pertama (SMP) Negeri 1 Tandukkalua.

Penyusunan naskah dan pengembangan produk ini berjalan lancar berkat bimbingan, arahan, dan dukungan dari berbagai pihak. Penulis menyampaikan terima kasih yang tulus kepada:
1. Bapak Dr. Udin Sidik Sidin, S.Pd., M.T., selaku Dosen Pengampu mata kuliah Multimedia Pembelajaran yang telah membimbing metode rekayasa media dan kurikulum perkuliahan;
2. Bapak Ir. H. Muhammad Riska, S.Pd., M.Pd., selaku Dosen Mitra yang telah memberikan masukan kritis terhadap rancangan instruksional dan keterbacaan antarmuka visual;
3. Bapak dan Ibu Dosen Jurusan Teknik Informatika dan Komputer, Fakultas Teknik, Universitas Negeri Makassar (UNM) yang telah membekali penulis dasar keilmuan teknologi informasi dan kependidikan;
4. Guru mata pelajaran ilmu pengetahuan alam (IPA) serta sivitas akademika SMP Negeri 1 Tandukkalua yang telah memberikan gambaran kendala belajar di kelas;
5. Rekan-rekan mahasiswa kelas PTIK E Angkatan 2024 yang senantiasa berdiskusi dan saling menyemangati selama proses perakitan karya multimedia ini.

Penulis menyadari bahwa media dan laporan ini masih terbuka bagi masukan konstruktif demi penyempurnaan tahap berikutnya. Harapan penulis, karya ini dapat bermanfaat nyata untuk mendukung kegiatan belajar mengajar sains di sekolah menengah.

<br>

Makassar, November 2026  
<br><br>
**Penulis**  
Nurun Nisa Ahmad  
NIM 240209501049

---

\newpage

# DAFTAR ISI

- **SAMPUL** .................................................................... i
- **KATA PENGANTAR** ............................................................ ii
- **DAFTAR ISI** ................................................................ iii
- **DAFTAR TABEL** .............................................................. iv
- **DAFTAR GAMBAR** ............................................................. v
<br>

- **BAB I PENDAHULUAN** ......................................................... 1
  - **A. Latar Belakang** ....................................................... 1
  - **B. Tujuan Pengembangan** .................................................. 4
  - **C. Manfaat Pengembangan** ................................................. 5
  - **D. Gambaran Produk yang Dikembangkan** .................................... 6
<br>

- **BAB II PEMBAHASAN** ......................................................... 8
  - **A. Metode Pengembangan (Model MDLC hingga Tahap Testing)** ................ 8
    - 1. Alasan Pemilihan Model MDLC ............................................ 8
    - 2. Tahap Concept (Konsep dan Analisis Kebutuhan) .......................... 9
    - 3. Tahap Design (Perancangan) ............................................. 12
    - 4. Tahap Material Collecting (Pengumpulan Bahan) .......................... 18
    - 5. Tahap Assembly (Perakitan Produk) ...................................... 19
    - 6. Tahap Testing (Pengujian) .............................................. 20
  - **B. Hasil Pengembangan Produk** ............................................ 21
    - 1. Gambaran Produk Jadi dan Cakupan Materi ................................ 21
    - 2. Kesesuaian Implementasi dengan Rencana Proposal ........................ 23
    - 3. Penambahan dan Pengembangan Fitur dari Proposal Awal ................... 24
    - 4. Hasil Pengujian ........................................................ 26
  - **C. Kekurangan Produk dan Tindak Lanjut** ................................... 28
<br>

- **BAB III KESIMPULAN** ........................................................ 30
  - **A. Kesimpulan** ........................................................... 30
  - **B. Rencana Validasi Ahli, Uji Coba Pengguna, dan Tahap Distribusi** ....... 31
  - **C. Saran Pengembangan Selanjutnya** ....................................... 32
<br>

- **DAFTAR PUSTAKA** ............................................................ 34
- **LAMPIRAN** .................................................................. 36

---

\newpage

# DAFTAR TABEL

- **Tabel 2.1** Sintesis Analisis Masalah Pembelajaran, Kebutuhan Belajar, dan Solusi Desain Media ..... 10
- **Tabel 2.2** Pemetaan Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP) .................. 11
- **Tabel 2.3** Peta Identifikasi Miskonsepsi Kritis dan Strategi Klarifikasi Pedagogis ................. 12
- **Tabel 2.4** Penerapan 12 Prinsip Pembelajaran Multimedia Mayer (2021) pada Modul Interaktif ........ 14
- **Tabel 2.5** Kisi-Kisi Distribusi Butir Soal Evaluasi Kuis Akhir Berdasarkan Taksonomi Bloom ......... 17
- **Tabel 2.6** Cakupan Materi Pembelajaran, Kegiatan Interaktif, dan Sebaran Butir Asesmen ............. 18
- **Tabel 2.7** Matriks Kesesuaian Rencana Awal Proposal dengan Hasil Implementasi Aktual ............... 23
- **Tabel 2.8** Penambahan Fitur Mutakhir Melampaui Proposal Awal dan Rasional Pedagogisnya ............. 25
- **Tabel 2.9** Hasil Pengujian Fungsionalitas Kotak Hitam (Black-Box Testing) Antarmuka Belajar ........ 26
- **Tabel 2.10** Hasil Pengujian Verifikasi Teknis Kompilasi dan Kinerja Eksekusi Sistem ................ 27

---

\newpage

# DAFTAR GAMBAR

- **Gambar 2.1** Use Case Diagram: Pemodelan Interaksi Peran Siswa dan Guru IPA ......................... 15
- **Gambar 2.2** Activity Diagram: Alur Pengalaman Belajar Mandiri Peserta Didik ........................ 16
- **Gambar 2.3** Flowchart Alur Navigasi Sistem dan Ambang Kelulusan Nilai 70 ............................. 17
- **Gambar 2.4** Tangkapan Layar Halaman Beranda Sambutan dan Pemilihan Akses Peran ..................... 21
- **Gambar 2.5** Tangkapan Layar Halaman Petunjuk Belajar dan Capaian Tujuan Pembelajaran ............... 21
- **Gambar 2.6** Tangkapan Layar Dasbor Menu Utama Pembelajaran Berbasis Kartu .......................... 22
- **Gambar 2.7** Tangkapan Layar Kegiatan Belajar 1: Konsep Kunci dan Latihan Formatif .................. 22
- **Gambar 2.8** Tangkapan Layar Kegiatan Belajar 2: Tabulasi Visual Tiga Tingkat Kehati ................ 22
- **Gambar 2.9** Tangkapan Layar Kegiatan Belajar 3: Simulasi Observasi dan Peta Wallace-Weber .......... 23
- **Gambar 2.10** Tangkapan Layar Halaman Kuis Akhir Berproteksi Verifikasi Wajah Siswa ................. 23
- **Gambar 2.11** Tangkapan Layar Halaman Hasil Skor, Pemetaan Indikator Belajar, dan Rekomendasi ...................... 24
- **Gambar 2.12** Tangkapan Layar Halaman Rangkuman dan Cetak Lembar Catatan Mandiri .................... 24
- **Gambar 2.13** Tangkapan Layar Dasbor Pengelolaan Guru dan Rekapitulasi Kelas ........................ 25

---

\newpage

# BAB I PENDAHULUAN

## A. Latar Belakang

Pembelajaran ilmu pengetahuan alam (IPA) pada jenjang sekolah menengah pertama (SMP) bertujuan menumbuhkan nalar kritis, kemampuan literasi sains, dan kepedulian lingkungan peserta didik. Namun, observasi awal penulis di SMP Negeri 1 Tandukkalua menunjukkan bahwa kegiatan belajar masih bertumpu pada buku teks cetak dan papan tulis. Guru menerangkan isi buku paket, lalu menuliskan ringkasan atau menggambar bagan di papan tulis.

Buku cetak dan papan tulis memang praktis dan tidak membutuhkan aliran listrik. Meski demikian, ketergantungan tunggal pada media cetak menyisakan kendala nyata saat membahas konsep biologis yang abstrak. Salah satu topik yang paling membutuhkan visualisasi konkret adalah materi Keanekaragaman Hayati (Biodiversitas) pada elemen Pemahaman IPA Fase D Kurikulum Merdeka.

Materi keanekaragaman hayati menuntut siswa memahami variasi morfologi makhluk hidup pada tingkat gen, jenis, dan ekosistem. Buku pelajaran yang tersedia di sekolah memuat sedikit foto berukuran kecil dengan warna terbatas. Ketika guru berupaya menunjukkan perbedaan bentuk satwa, guru terpaksa menggambarnya di papan tulis. Langkah ini menyita jam pelajaran, sementara kualitas gambar sangat bergantung pada kecakapan menggambar guru. Gambar di papan tulis pun harus segera dihapus saat jam pelajaran berganti. Peserta didik akhirnya kehilangan rujukan visual setelah pembelajaran usai.

Kendala belajar kian terasa ketika guru IPA berhalangan hadir karena tugas kedinasan. Dalam situasi ini, guru biasanya menugasi siswa mencatat isi buku paket ke buku catatan. Kegiatan mencatat tanpa penjelasan pendamping berlangsung monoton. Siswa sekadar menyalin tulisan tanpa memahami konsep. Pemahaman mereka pun tidak terukur dan miskonsepsi sains rawan terjadi.

Dari sisi kebijakan kurikulum, Keputusan Kepala Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP) Kemendikbudristek Nomor 008/H/2022 (Kemendikbudristek, 2022) menetapkan bahwa peserta didik Fase D harus mampu mengklasifikasikan makhluk hidup berdasarkan karakteristik yang diamati. Siswa juga dituntut menganalisis interaksi lingkungan dan merancang upaya pelestariannya (Kemendikbudristek, 2022). Tuntutan capaian ini menegaskan bahwa keanekaragaman hayati bukan sekadar bahan hafalan nama latin, melainkan sarana membangun kesadaran konservasi (Purnama et al., 2024; Ristanto et al., 2024).

Secara teoretis, perancangan media ini mengacu pada *Cognitive Theory of Multimedia Learning* (CTML) dari Richard E. Mayer (Mayer, 2021). Teori ini menyatakan bahwa memori kerja manusia memproses teks dan gambar melalui dua saluran terpisah dengan kapasitas terbatas. Pemahaman konsep sains terbangun lebih baik ketika kata dan gambar disajikan bersamaan (*multimedia principle*). Materi juga perlu dibagi dalam segmen teratur (*segmenting principle*), diberi penanda visual (*signaling principle*), dan menempatkan teks penjelasan dekat dengan gambar (*spatial contiguity principle*) (Mayer, 2021; Zunidar et al., 2026). Kajian empiris menunjukkan bahwa pemanfaatan multimedia interaktif pada materi ekologi kelas VII terbukti meningkatkan minat dan pemahaman konsep siswa (Yanto & Setiawan, 2024).

Melihat kesenjangan di SMP Negeri 1 Tandukkalua tersebut, penulis mengembangkan multimedia pembelajaran interaktif berbasis web bergerak (*web-mobile*). Pengembangan ini menerapkan model *Multimedia Development Life Cycle* (MDLC) dari Luther (1994) yang disempurnakan oleh Sutopo (2003). Pada proposal awal, penulis baru merancang tahap *Concept* dan *Design*. Melalui kerja lanjutan, penulis menuntaskan perakitan (*Assembly*) dan pengujian (*Testing*). Produk ini menyajikan tiga kegiatan belajar mandiri, latihan interaktif dengan umpan balik langsung, kuis evaluasi dengan pembahasan ilmiah, verifikasi wajah peserta, dan portal pengelolaan kelas untuk guru.

## B. Tujuan Pengembangan

Tujuan dari pengembangan multimedia pembelajaran interaktif ini adalah:
1. Menghasilkan media pembelajaran interaktif berbasis *web-mobile* yang valid, praktis, dan ringan pada topik Ekologi dan Keanekaragaman Hayati Indonesia untuk peserta didik kelas VII SMP Negeri 1 Tandukkalua;
2. Menerapkan tahapan model pengembangan MDLC secara sistematis mulai dari tahap *Concept*, *Design*, *Material Collecting*, *Assembly*, hingga *Testing*;
3. Menyajikan materi keanekaragaman hayati secara bertahap dan konkret melalui perpaduan teks ringkas, foto beresolusi tinggi, simulasi observasi sains, latihan manipulatif, serta kuis diagnostik berumpan balik langsung;
4. Menyediakan sarana belajar mandiri terarah saat guru berhalangan hadir di kelas, dilengkapi pemantauan hasil belajar dan pengelolaan data bagi guru.

## C. Manfaat Pengembangan

Pengembangan media interaktif ini memberikan manfaat teoretis dan praktis sebagai berikut:

### 1. Manfaat Teoretis
Produk dan laporan ini memperkuat bukti penerapan teori kognitif multimedia Mayer dalam perancangan media web bergerak. Selain itu, laporan ini memperkaya contoh penerapan model MDLC Luther-Sutopo pada pembelajaran sains di sekolah menengah pertama.

### 2. Manfaat Praktis
a. **Bagi Peserta Didik:** Membantu memvisualisasikan perbedaan keanekaragaman hayati tingkat gen, jenis, dan ekosistem secara konkret. Siswa juga memperoleh sarana belajar mandiri untuk mencoba latihan tanpa cemas dinilai buruk, sekaligus memperkuat literasi konservasi lingkungan;  
b. **Bagi Guru IPA:** Menyediakan alat bantu peraga digital yang siap digunakan di kelas tanpa perlu menggambar manual di papan tulis. Media ini juga memudahkan penugasan terstruktur saat guru berhalangan hadir dan mempercepat pemantauan ketuntasan belajar siswa;  
c. **Bagi Sekolah (SMP Negeri 1 Tandukkalua):** Mendorong pemanfaatan teknologi digital yang hemat sarana, ramah gawai, dan dapat dioperasikan secara luring penuh di tengah keterbatasan sinyal internet daerah;  
d. **Bagi Penulis:** Menjadi pengalaman nyata dalam memadukan keilmuan teknologi informasi dan kependidikan untuk memecahkan kendala pembelajaran di ruang kelas.

## D. Gambaran Produk yang Dikembangkan

Produk yang dihasilkan berupa media pembelajaran interaktif berbasis peramban web bergerak (*web-mobile*) berjudul **"Ekologi dan Keanekaragaman Hayati Indonesia"**. Media ini dirancang khusus untuk siswa kelas VII SMP dengan antarmuka bersih dan ramah sentuhan layar ponsel (*mobile-friendly*), serta tetap proporsional saat dibuka pada monitor komputer. Produk ini telah diunggah pada peladen *GitHub Pages* (`https://nurun05.github.io/Website_multimedia-pembelajaran/`) dan dapat dijalankan secara luring penuh (*offline-ready*) lewat server lokal kelas.

Media pembelajaran ini memuat 12 modul halaman yang terangkai secara terpadu:
1. *Halaman 1 (Beranda):* Menampilkan panorama alam nusantara beresolusi tinggi, identitas mata pelajaran, identitas penyusun, serta tombol pemilihan peran akses siswa dan guru;
2. *Halaman 2 (Petunjuk & Capaian Belajar):* Memuat panduan belajar mandiri dan rincian tiga Tujuan Pembelajaran (TP) yang terukur, yaitu TP 1, TP 2, dan TP 3;
3. *Halaman 3 (Menu Utama):* Berupa dasbor navigasi kartu yang memetakan seluruh kegiatan belajar, dilengkapi lencana centang hijau sebagai penanda kemajuan belajar;
4. *Halaman 4 (Kegiatan 1 - Materi):* Pengenalan konsep keanekaragaman hayati dengan pertanyaan pemantik lingkungan lokal Tandukkalua serta enam kartu akordeon istilah ilmiah (Biodiversitas, Spesies, Habitat, Ekosistem, Endemik, dan Konservasi);
5. *Halaman 5 (Kegiatan 1 - Latihan Formatif):* Tiga butir latihan pilihan ganda yang memberikan umpan balik langsung tanpa mengurangi nilai rapor;
6. *Halaman 6 (Kegiatan 2 - Materi Tiga Tingkat Kehati):* Tabulasi interaktif tiga tingkat keanekaragaman (Gen, Jenis, Ekosistem) disertai kotak peringatan miskonsepsi kritis dan galeri foto perbandingan nyata;
7. *Halaman 7 (Kegiatan 2 - Latihan Pasangan):* Papan permainan dua kolom yang melatih siswa menghubungkan enam contoh organisme dengan tingkat keanekaragamannya;
8. *Halaman 8 (Kegiatan 3 - Persebaran Fauna & Konservasi):* Simulasi lima langkah pengamatan ilmiah, peta biogeografi Wallace-Weber, lima ancaman kepunahan, serta pemilahan strategi pelestarian *in situ* dan *ex situ*;
9. *Halaman 9 (Kegiatan 3 - Latihan Urutan Alur):* Papan interaktif untuk menyusun lima kartu tahapan observasi sains secara logis;
10. *Halaman 10 (Kuis Akhir Evaluasi Resmi):* Asesmen sumatif 10 butir pilihan ganda dengan verifikasi foto kamera wajah (*selfie camera*). Fitur ini dilengkapi penguncian jawaban per butir, pembahasan ilmiah, dan jeda hitung mundur tiga detik pascapengiriman;
11. *Halaman 11 (Evaluasi Hasil & Rekomendasi):* Menampilkan diagram lingkaran capaian skor total, tiga indikator ketuntasan per tujuan pembelajaran, ambang batas Kriteria Ketuntasan Minimal (KKM) bernilai 70, serta tombol rekomendasi tindak lanjut;
12. *Halaman 12 (Rangkuman & Lembar Catatan):* Intisari materi komprehensif, glosarium sains, dan fitur cetak lembar kerja siswa berformat hemat tinta (*print-ready layout*).

---

\newpage

# BAB II PEMBAHASAN

## A. Metode Pengembangan (Model MDLC hingga Tahap Testing)

Pengembangan media interaktif ini menerapkan metodologi **Multimedia Development Life Cycle (MDLC)** menurut Luther (1994) yang disempurnakan oleh Sutopo (2003). Model MDLC merupakan pendekatan rekayasa perangkat lunak multimedia terstruktur yang mencakup enam tahapan: *Concept* (Konsep), *Design* (Perancangan), *Material Collecting* (Pengumpulan Bahan), *Assembly* (Pembuatan/Perakitan), *Testing* (Pengujian), dan *Distribution* (Distribusi). Pembahasan pada Bab II ini berfokus pada tahap *Concept* hingga *Testing*, sedangkan tahap *Distribution* diuraikan pada Bab III sebagai rencana tindak lanjut penerapan.

### 1. Alasan Pemilihan Model MDLC
Pemilihan model MDLC didasarkan pada karakteristik produk yang memadukan beragam unsur multimedia, seperti teks sains, foto resolusi tinggi, diagram vektor, simulasi langkah observasi, interaktivitas manipulatif, dan kuis diagnostik. Model MDLC memiliki keunggulan mendasar:
a. **Pemisahan Antara Bahan dan Perakitan:** MDLC menyediakan tahap khusus *Material Collecting* sebelum *Assembly*. Pemisahan ini sangat penting pada materi biologi; akurasi materi ajar, taksonomi spesies, dan keaslian foto harus divalidasi terlebih dahulu sebelum disatukan ke dalam kode program (Torondek et al., 2025);
b. **Keluaran Setiap Tahap Bersifat Terukur:** Setiap fase menghasilkan artefak nyata. Tahap *Concept* menghasilkan spesifikasi kebutuhan, diikuti tahap *Design* untuk merancang alur interaksi dan layar. Selanjutnya, tahap *Material Collecting* menghimpun bank materi dan soal, tahap *Assembly* merakit modul fungsional, dan tahap *Testing* menguji sistem melalui uji kotak hitam (Samalukang et al., 2022);
c. **Sifat Iteratif yang Terkendali:** Jika pada tahap pengujian ditemukan kendala visual atau logika antarmuka yang kurang tepat, pengembang dapat meninjau kembali tahap perancangan atau pengumpulan bahan tanpa merombak arsitektur sistem secara keseluruhan.

### 2. Tahap Concept (Konsep dan Analisis Kebutuhan)
Tahap *Concept* meletakkan fondasi analisis kebutuhan lapangan dan perumusan spesifikasi produk.

#### a) Analisis Kebutuhan dari Tiga Aspek
1. **Aspek Proses Pembelajaran:** Hasil pengamatan menunjukkan pembelajaran IPA di SMP Negeri 1 Tandukkalua masih didominasi penjelasan satu arah menggunakan buku paket dan papan tulis. Guru kesulitan memvisualisasikan makhluk hidup karena contoh pada buku sangat terbatas dan gambar papan tulis lekas dihapus. Saat guru berhalangan hadir, siswa hanya mencatat tanpa bimbingan dan umpan balik. Diperlukan media pendamping interaktif yang menyajikan representasi visual konkret dan membimbing belajar mandiri secara terstruktur;
2. **Aspek Karakteristik Peserta Didik dan Lingkungan:** Peserta didik kelas VII SMP berusia antara 12 hingga 15 tahun. Menurut teori kognitif Jean Piaget, siswa pada rentang usia ini berada pada masa transisi dari tahap operasional konkret menuju operasional formal. Mereka membutuhkan bantuan visual konkret untuk memahami konsep klasifikasi dan hierarki hayati. Ketersediaan ponsel pintar siswa cukup memadai, namun kapasitas memori dan kuota internet terbatas. Antarmuka media harus ramah ponsel potret, berbobot ringan, dan dapat beroperasi luring penuh;
3. **Aspek Kurikulum dan Capaian Pembelajaran:** Berdasarkan Kurikulum Merdeka Fase D elemen Pemahaman IPA (Kemendikbudristek, 2022), materi keanekaragaman hayati diturunkan ke dalam tiga tujuan pembelajaran (TP) utama yang menjadi acuan tiga kegiatan belajar modul.

Sintesis analisis kebutuhan lapangan dan pemetaannya ke dalam solusi desain media disajikan pada Tabel 2.1.

**Tabel 2.1**  
*Sintesis Analisis Masalah Pembelajaran, Kebutuhan Belajar, dan Solusi Desain Media*

| Masalah Pembelajaran Riil di Lapangan | Analisis Kebutuhan Belajar | Solusi Desain pada Media Pembelajaran |
| :--- | :--- | :--- |
| Visualisasi materi bergantung pada gambar tangan guru di papan tulis dan foto kecil di buku teks. | Kebutuhan representasi visual yang beresolusi tinggi, jelas, konsisten, dan dapat dibuka ulang kapan saja. | Menyediakan galeri fotografi autentik resolusi tinggi dan diagram hierarki interaktif yang dapat diklik untuk menampilkan keterangan detail. |
| Peserta didik kesulitan membedakan variasi tingkat gen, jenis, dan ekosistem secara abstrak. | Kebutuhan representasi visual komparatif berdampingan yang dapat diamati bertahap dan berulang. | Menyajikan tabulasi visual tiga tingkat kehati dilengkapi kotak peringatan miskonsepsi kritis dan permainan mencocokkan pasangan dua kolom. |
| Saat guru berhalangan hadir, siswa hanya mencatat isi buku tanpa penjelasan dan umpan balik. | Kebutuhan panduan belajar mandiri terstruktur agar pemahaman siswa terukur dan bebas miskonsepsi. | Menyediakan alur belajar bertahap, latihan formatif dengan umpan balik langsung, kuis akhir dengan pembahasan ilmiah, serta rangkuman cetak. |
| Keterbatasan kapasitas memori ponsel siswa dan tidak stabilnya jaringan internet sekolah. | Kebutuhan media yang sangat ringan, bebas instalasi rumit, dan dapat dioperasikan secara luring penuh. | Mengembangkan modul web berbasis arsitektur modular murni, kompresi aset gambar (< 2,5 MB), serta integrasi server mini lokal luring. |

#### b) Studi Kelayakan Lima Aspek (*Feasibility Study*)
Kelayakan perancangan produk ditinjau secara saksama dari lima aspek:
1. *Aspek Pembelajaran (Pedagogis):* Topik keanekaragaman hayati sangat pas disajikan lewat media interaktif karena menuntut perbandingan visual. Media ini memposisikan diri sebagai penguat peran guru dan buku teks;
2. *Aspek Pengguna (User-Centric):* Antarmuka dirancang sederhana agar tidak membebani pikiran siswa. Tombol sentuh dibuat lebar, navigasi konsisten, dan huruf mudah dibaca;
3. *Aspek Teknis (Technical Architecture):* Media dibangun dengan HTML5, CSS3, dan JavaScript murni yang didukung penuh oleh seluruh peramban ponsel dan komputer tanpa instalasi aplikasi tambahan;
4. *Aspek Fasilitas (Infrastructure Readiness):* Media tidak menuntut ponsel berspesifikasi tinggi, dapat diakses gratis, dan tidak membutuhkan kuota saat dijalankan secara luring;
5. *Aspek Pengembangan (Development Scope):* Ruang lingkup materi dibatasi secara terukur pada satu subtema kurikulum tiga kegiatan belajar agar seluruh siklus MDLC tuntas sesuai jadwal perkuliahan.

### 3. Tahap Design (Perancangan)
Tahap perancangan menerjemahkan konsep ke dalam rancangan visual, alur interaksi, dan tata letak layar.

#### a) Rasional Desain Visual dan Pedagogis
Desain visual memakai warna dasar **Biru Langit Lembut (*Soft Sky Blue*) `#dae9f7`**, dipadukan dengan aksen biru bahari `#367bb7` dan huruf *Poppins*. Warna ini dipilih agar suasana belajar terasa sejuk dan mata siswa tidak cepat lelah saat menatap layar ponsel. Tata letak layar dirancang responsif: memanjang vertikal pada ponsel pintar (< 768px) dan berada di tengah secara proporsional pada monitor komputer (≥ 768px).

#### b) Pemodelan Interaksi Sistem
Interaksi sistem dimodelkan untuk memperjelas hubungan peran pengguna dan alur penjelajahan aplikasi:

1) **Use Case Diagram (Gambar 2.1):**  
Use Case Diagram memodelkan interaksi dua aktor utama, yakni Siswa dan Guru IPA. Siswa dapat mengakses materi kegiatan 1–3, mengerjakan latihan, memverifikasi foto wajah, menempuh kuis akhir, melihat nilai, dan mencetak rangkuman. Sementara itu, Guru IPA menggunakan sandi rahasia (*personal identification number* atau PIN) untuk memantau nilai kuis dan memeriksa foto siswa. Guru juga dapat mengelola daftar nama kelas, mengunduh rekapitulasi data berformat *comma-separated values* (CSV), serta memberi izin ujian ulang.

![Gambar 2.1 Use Case Diagram](file:///d:/mulped/assets/use-case-diagram.png)  
**Gambar 2.1** *Use Case Diagram: Pemodelan Interaksi Peran Siswa dan Guru IPA pada Media Pembelajaran*

2) **Activity Diagram (Gambar 2.2):**  
Activity Diagram memodelkan alur belajar mandiri siswa secara runtut. Alur dimulai dari membuka web, memilih peran siswa, membaca petunjuk belajar, mempelajari materi kegiatan 1 sampai 3 yang disertai latihan formatif, mengambil foto selfie lewat kamera, mengerjakan kuis sumatif, hingga menerima hasil evaluasi kelulusan KKM 70.

![Gambar 2.2 Activity Diagram](file:///d:/mulped/assets/activity-diagram.png)  
**Gambar 2.2** *Activity Diagram: Alur Pengalaman Belajar Mandiri Peserta Didik*

3) **Flowchart Alur Sistem (Gambar 2.3):**  
Flowchart sistem memperlihatkan logika perpindahan halaman dari Halaman 1 hingga 12. Bagan ini juga memuat jeda waktu hitung mundur tiga detik pascapengiriman kuis serta aturan kelulusan KKM 70.

![Gambar 2.3 Flowchart Sistem](file:///d:/mulped/assets/flowchart-alur-web.png)  
**Gambar 2.3** *Flowchart Alur Navigasi Sistem dan Ambang Kelulusan Nilai 70*

#### c) Pembaruan Rancangan dari Proposal Awal
Selama tahap perancangan berlangsung, penulis memperbarui beberapa rancangan awal proposal:
- *Pembaruan Warna:* Dari tombol oranye menyala pada proposal, diubah menjadi Biru Langit Lembut `#dae9f7` yang lebih teduh;
- *Foto Alam Asli:* Gambar kartun gunung pada beranda diganti dengan foto pemandangan alam asli Indonesia beresolusi tinggi;
- *Verifikasi Kamera:* Penambahan fitur potret wajah selfie pada Halaman 10 untuk memastikan keaslian pengerjaan kuis siswa saat belajar mandiri di rumah.

### 4. Tahap Material Collecting (Pengumpulan Bahan)
Tahap pengumpulan bahan berfokus pada kurasi materi sains, penyiapan foto, penyusunan peta miskonsepsi, dan pembuatan soal kuis.

#### a) Pemetaan Kurikulum (CP dan ATP)
Materi dikurasi mengacu pada Capaian Pembelajaran IPA Fase D (Kemendikbudristek, 2022). Materi dipilah ke dalam tiga kegiatan belajar yang selaras dengan Tujuan Pembelajaran pada Tabel 2.2.

**Tabel 2.2**  
*Pemetaan Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP)*

| Kegiatan Belajar | Capaian Pembelajaran (CP) Elemen Pemahaman IPA | Tujuan Pembelajaran (TP) Terukur | Indikator Keberhasilan Belajar |
| :--- | :--- | :--- | :--- |
| **Kegiatan 1** | Peserta didik memahami interaksi antara makhluk hidup dan lingkungannya. | **TP 1:** Menjelaskan konsep utama dan istilah penting keanekaragaman hayati. | Mengidentifikasi pengertian biodiversitas, membedakan konsep habitat dan ekosistem, serta mengenali kriteria spesies endemik dan konservasi. |
| **Kegiatan 2** | Peserta didik mampu mengklasifikasikan makhluk hidup berdasarkan karakteristik yang diamati. | **TP 2:** Membedakan keanekaragaman tingkat gen, jenis, dan ekosistem melalui contoh konkret. | Membedakan variasi genetik dalam satu spesies (kultivar mangga), perbedaan antarspesies satu famili (kucing dan harimau), serta bentang ekosistem alam. |
| **Kegiatan 3** | Peserta didik merancang upaya mitigasi terhadap kerusakan dan pencemaran lingkungan. | **TP 3:** Menganalisis biogeografi fauna Indonesia, ancaman biodiversitas, dan upaya pelestariannya. | Menjelaskan Garis Wallace-Weber, mengidentifikasi 5 ancaman kepunahan, serta membedakan pelestarian *in situ* vs *ex situ*. |

#### b) Identifikasi Miskonsepsi Kritis dan Strategi Klarifikasi
Untuk mencegah kekeliruan pemahaman siswa kelas VII, penulis memetakan miskonsepsi yang sering muncul beserta penjelasannya pada Tabel 2.3.

**Tabel 2.3**  
*Peta Identifikasi Miskonsepsi Kritis dan Strategi Klarifikasi Pedagogis*

| Konsep Kunci | Miskonsepsi Umum Siswa | Fakta Ilmiah yang Benar | Strategi Klarifikasi pada Media |
| :--- | :--- | :--- | :--- |
| **Habitat vs Ekosistem** | Siswa menganggap habitat dan ekosistem bermakna sama persis. | Habitat adalah alamat fisik tempat organisme tinggal, sedangkan ekosistem adalah kesatuan interaksi timbal balik antara komunitas makhluk hidup dan lingkungan abiotiknya. | Kotak perbandingan definisi pada kartu akordeon Kegiatan 1 dan butir evaluasi nomor 1. |
| **Tingkat Gen vs Tingkat Jenis** | Siswa mengira variasi buah mangga arumanis dan manalagi tergolong keanekaragaman tingkat jenis. | Seluruh varietas mangga berada dalam satu spesies yang sama (*Mangifera indica*). Perbedaan rasa dan warna timbul karena perbedaan susunan genetik dalam satu spesies. | Kotak awas miskonsepsi kritis pada Kegiatan 2, foto perbandingan, dan latihan mencocokkan. |
| **Pelestarian In Situ vs Ex Situ** | Siswa kerap tertukar antara suaka alam asli dan kebun penangkaran buatan. | Pelestarian *in situ* dilakukan langsung di dalam habitat aslinya (Taman Nasional Komodo), sedangkan *ex situ* dilakukan di luar habitat aslinya (kebun binatang, kebun raya). | Bagan perbandingan dua kolom pada Kegiatan 3 dan simulasi pemilahan contoh pelestarian. |

#### c) Penerapan 12 Prinsip Pembelajaran Multimedia Mayer (2021)
Perancangan seluruh materi dan komponen interaksi mempedomani 12 prinsip CTML Mayer (2021) seperti dipaparkan pada Tabel 2.4.

**Tabel 2.4**  
*Penerapan 12 Prinsip Pembelajaran Multimedia Mayer (2021) pada Modul Interaktif*

| No | Prinsip Mayer (2021) | Penerapan Konkret pada Media Pembelajaran Interaktif |
| :---: | :--- | :--- |
| 1 | *Coherence* | Menghilangkan ornamen musik latar yang bising dan ilustrasi kartun dekoratif yang tidak mendukung substansi sains. |
| 2 | *Signaling* | Memberikan sorotan warna (*highlighting*) dan lencana pembeda pada istilah kunci (Biodiversitas, Gen, Jenis, Ekosistem). |
| 3 | *Redundancy* | Teks narasi pengantar disajikan secara ringkas dan lugas mendampingi citra fotografi tanpa pengulangan kalimat panjang. |
| 4 | *Spatial Contiguity* | Keterangan teks penjelasan ditempatkan berdekatan dan terintegrasi langsung di bawah atau di samping citra objek biologi. |
| 5 | *Temporal Contiguity* | Penekanan tombol tabulasi tingkat kehati seketika memperbarui tampilan teks dan citra komparatif secara bersamaan. |
| 6 | *Segmenting* | Pembelajaran dipecah menjadi tiga kegiatan berjenjang kecil yang dapat dikendalikan ritme belajarnya oleh siswa. |
| 7 | *Pre-training* | Kegiatan 1 membekali siswa dengan pemahaman konsep dasar dan istilah kunci sebelum melangkah ke analisis hierarki kehati. |
| 8 | *Modality* | Memadukan representasi piktorial fotografis beresolusi tinggi dengan teks penjelas terarah dan diagram hierarki. |
| 9 | *Multimedia* | Setiap konsep abstrak biologi selalu dipasangkan dengan representasi citra visual nyata atau bagan alur. |
| 10 | *Personalization* | Menggunakan gaya bahasa percakapan edukatif yang hangat, santun, dan komunikatif bagi siswa usia SMP. |
| 11 | *Voice* | Petunjuk instruksi dan narasi umpan balik ditulis dengan kalimat bernada memotivasi, apresiatif, dan membangun. |
| 12 | *Image* | Menggunakan ikonografi sains fungsional yang sederhana tanpa menghadirkan gambar pemanis yang mengaburkan fokus. |

#### d) Kisi-Kisi Soal Evaluasi Kuis Akhir
Instrumen evaluasi sumatif pada Halaman 10 memuat 10 butir soal pilihan ganda bernilai 10 poin per butir (skor maksimal 100). Soal mengukur ranah kognitif mengingat (C1), memahami (C2), dan menganalisis (C3–C4) menurut Taksonomi Bloom terevisi, sebagaimana dirangkum pada Tabel 2.5.

**Tabel 2.5**  
*Kisi-Kisi Distribusi Butir Soal Evaluasi Kuis Akhir Berdasarkan Taksonomi Bloom*

| No. Soal | Indikator Capaian TP | Tingkat Kognitif | Pokok Materi yang Diuji | Pengecoh Kritis yang Disediakan |
| :---: | :---: | :---: | :--- | :--- |
| 1 | TP 1 | C2 (Memahami) | Pembedaan konsep habitat dan ekosistem | Menyamakan habitat dengan ekosistem perairan |
| 2 | TP 1 | C2 (Memahami) | Karakteristik dan kriteria spesies endemik | Menganggap spesies pendatang melimpah |
| 3 | TP 1 | C2 (Memahami) | Prinsip dasar pelestarian dan konservasi | Menganggap konservasi melarang seluruh pemanfaatan |
| 4 | TP 2 | C3 (Menerapkan) | Identifikasi variasi mangga pada tingkat gen | Menyamakan varietas mangga dengan tingkat jenis |
| 5 | TP 2 | C3 (Menerapkan) | Klasifikasi felidae (kucing/harimau) tingkat jenis | Mengira felidae berada pada keanekaragaman gen |
| 6 | TP 2 | C4 (Menganalisis) | Analisis bentang alam tingkat ekosistem | Memasukkan pasangan kultivar tanaman sejenis |
| 7 | TP 2 | C4 (Menganalisis) | Kriteria biologis persilangan fertil tingkat gen | Menyamakan persamaan warna dengan tingkat gen |
| 8 | TP 3 | C2 (Memahami) | Biogeografi pembagian fauna Garis Wallace | Tertukar antara Garis Wallace dan Garis Weber |
| 9 | TP 3 | C4 (Menganalisis) | Analisis faktor ancaman deforestasi habitat | Menganggap pembukaan lahan sebagai pelestarian |
| 10 | TP 3 | C3 (Menerapkan) | Pemilahan kawasan konservasi *in situ* vs *ex situ* | Mengklasifikasikan taman nasional sebagai *ex situ* |

### 5. Tahap Assembly (Perakitan Produk)
Pada tahap *Assembly*, seluruh materi ajar, foto, dan logika interaksi disatukan ke dalam satu aplikasi web utuh:
a. **Pengorganisasian Halaman Ramping:** Struktur media ditata dalam satu berkas web semantik yang mengendalikan transisi 12 halaman secara mulus tanpa memuat ulang peramban (*seamless navigation*);
b. **Perakitan Logika Interaksi:** Kartu akordeon pada Kegiatan 1, tabulasi foto pada Kegiatan 2, dan susun kartu pada Kegiatan 3 dirakit dengan manajemen status terpusat. Status selesai pada setiap kegiatan langsung menyalakan lencana centang hijau di Menu Utama;
c. **Pemasangan Modul Kamera dan Portal Guru:** Penulis mengintegrasikan kamera peramban pada Halaman 10 untuk merekam wajah siswa sebelum kuis dimulai. Sistem juga dilengkapi jeda waktu hitung mundur tiga detik setelah tombol kirim ditekan, serta Dasbor Portal Guru untuk merekap nilai dan mengelola daftar nama kelas.

### 6. Tahap Testing (Pengujian)
Tahap *Testing* bertujuan memastikan fungsi pembelajaran dan kestabilan teknis media berjalan sesuai harapan:
a. **Pengujian Kotak Hitam (*Black-Box Testing*):** Memastikan seluruh tombol navigasi, tabulasi, latihan, kamera foto, perhitungan nilai, dan fitur cetak bekerja tepat sesuai masukan dan keluaran yang diharapkan;
b. **Pengujian Operasional Luring (*Offline-First Verification*):** Memastikan media dapat berjalan lancar tanpa jaringan internet menggunakan server mini lokal Python dan paket berkas portabel;
c. **Pengujian Responsivitas Layar:** Menguji kenyamanan tampilan pada layar ponsel pintar (lebar 360–430 px) hingga layar monitor komputer.

---

## B. Hasil Pengembangan Produk

### 1. Gambaran Produk Jadi dan Cakupan Materi
Produk akhir berupa aplikasi web bergerak yang memuat materi lengkap topik Ekologi dan Keanekaragaman Hayati Indonesia kelas VII SMP. Rincian materi, bentuk interaktivitas, dan evaluasinya disajikan pada Tabel 2.6.

**Tabel 2.6**  
*Cakupan Materi Pembelajaran, Kegiatan Interaktif, dan Sebaran Butir Asesmen*

| Modul Belajar | Pokok Bahasan Keilmuan | Bentuk Interaktivitas dan Media | Instrumen Asesmen / Evaluasi |
| :--- | :--- | :--- | :--- |
| **Kegiatan 1** | Konsep dasar biodiversitas, spesies, habitat, ekosistem, endemik, konservasi. | Pertanyaan pemantik kontekstual dan 6 kartu akordeon interaktif. | 3 butir kuis formatif reflektif dengan diagnostik seketika tanpa penalti. |
| **Kegiatan 2** | Tiga tingkat kehati (Gen, Jenis, Ekosistem) dan peringatan miskonsepsi. | Tabulasi 3 tombol interaktif, galeri foto komparatif (mangga, kucing, hutan). | Permainan mencocokkan pasangan 2 kolom (6 contoh organisme). |
| **Kegiatan 3** | Garis Wallace-Weber, fauna endemik, 5 ancaman, konservasi *in situ/ex situ*. | Pemutar kontrol simulasi 5 tahap observasi dan eksplorasi peta biogeografi. | Latihan pengurutan alur kerja 5 kartu observasi sains secara logis. |
| **Kuis Akhir** | Evaluasi sumatif terpadu mengukur ketercapaian TP 1, TP 2, dan TP 3. | Verifikasi kamera selfie anti-joki, penguncian butir soal, dan buka pembahasan. | 10 butir soal kuis sumatif berpengecoh logis (skor total skala 100). |
| **Rangkuman** | Intisari pokok materi dan glosarium istilah penting biologi. | Antarmuka ramah cetak (@media print) untuk lembar catatan mandiri. | Lembar refleksi diri dan catatan mandiri siswa. |

Tampilan antarmuka produk didokumentasikan dalam sepuluh slot tangkapan layar (Gambar 2.4 hingga Gambar 2.13):

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.4 — TANGKAPAN LAYAR HALAMAN BERANDA DAN PEMILIHAN AKSES PERAN]                     |
| Panduan Pengisian: Ambil tangkapan layar halaman awal aplikasi yang menampilkan banner panorama    |
| alam Indonesia beresolusi tinggi, judul media pembelajaran, identitas penyusun mahasiswa PTIK UNM,|
| serta tombol pemilihan peran akses "Anda Siswa" dan "Anda Guru".                                  |
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.4** *Tampilan Halaman Beranda Sambutan dan Pemilihan Akses Peran*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.5 — TANGKAPAN LAYAR HALAMAN PETUNJUK BELAJAR DAN CAPAIAN TP]                       |
| Panduan Pengisian: Ambil tangkapan layar Halaman 2 yang memperlihatkan kartu petunjuk belajar     |
| mandiri terstruktur dan rincian tiga Capaian Tujuan Pembelajaran (TP 1, TP 2, dan TP 3).          |
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.5** *Tampilan Halaman Petunjuk Belajar dan Capaian Tujuan Pembelajaran*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.6 — TANGKAPAN LAYAR DASBOR MENU UTAMA BERBASIS KARTU]                              |
| Panduan Pengisian: Ambil tangkapan layar Halaman 3 yang menampilkan 5 kartu modul navigasi         |
| (Kegiatan 1, Kegiatan 2, Kegiatan 3, Kuis Akhir, Rangkuman) beserta lencana kotak centang progres.|
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.6** *Tampilan Dasbor Menu Utama Pembelajaran Berbasis Kartu*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.7 — TANGKAPAN LAYAR KEGIATAN BELAJAR 1: MATERI DAN LATIHAN FORMATIF]              |
| Panduan Pengisian: Ambil tangkapan layar Halaman 4 dan 5 yang memperlihatkan pertanyaan pemantik   |
| lokal, kartu akordeon istilah ilmiah yang terbuka, serta tampilan latihan formatif berumpan balik.|
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.7** *Tampilan Kegiatan Belajar 1: Materi Konsep Kunci dan Latihan Formatif*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.8 — TANGKAPAN LAYAR KEGIATAN BELAJAR 2: TABULASI TIGA TINGKAT KEHATI]              |
| Panduan Pengisian: Ambil tangkapan layar Halaman 6 dan 7 yang menampilkan tabulasi tiga tingkat   |
| (Gen, Jenis, Ekosistem), foto komparatif mangga dan kucing, kotak awas miskonsepsi, dan matching.|
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.8** *Tampilan Kegiatan Belajar 2: Tabulasi Visual Tiga Tingkat Kehati dan Permainan Pasangan*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.9 — TANGKAPAN LAYAR KEGIATAN BELAJAR 3: SIMULASI DAN PETA WALLACE-WEBER]          |
| Panduan Pengisian: Ambil tangkapan layar Halaman 8 dan 9 yang menampilkan pemutar simulasi        |
| langkah observasi sains, peta biogeografi resolusi tinggi, serta latihan pengurutan kartu alur.   |
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.9** *Tampilan Kegiatan Belajar 3: Simulasi Observasi Sains dan Peta Wallace-Weber*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.10 — TANGKAPAN LAYAR KUIS AKHIR BERPROTEKSI VERIFIKASI WAJAH SISWA]                |
| Panduan Pengisian: Ambil tangkapan layar Halaman 10 saat kamera aktif menangkap potret wajah      |
| siswa, seleksi nama dari daftar roster, butir soal pilihan ganda, dan tombol buka pembahasan.    |
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.10** *Tampilan Halaman Kuis Akhir Berproteksi Verifikasi Wajah Siswa Anti-Joki*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.11 — TANGKAPAN LAYAR LEMBAR HASIL EVALUASI DAN DIAGNOSTIK TP]                      |
| Panduan Pengisian: Ambil tangkapan layar Halaman 11 yang memperlihatkan diagram lingkaran skor    |
| total, tiga batang indikator capaian TP 1-3, status kelulusan KKM 70, dan tombol remedial.        |
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.11** *Tampilan Halaman Hasil Skor Evaluasi, Pemetaan Capaian TP, dan Saran Tindak Lanjut*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.12 — TANGKAPAN LAYAR RANGKUMAN DAN CETAK LEMBAR CATATAN MANDIRI]                   |
| Panduan Pengisian: Ambil tangkapan layar Halaman 12 yang memperlihatkan rangkuman tabel materi,   |
| glosarium istilah sains, dan pratinjau cetak lembar kerja siswa berformat ramah kertas.          |
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.12** *Tampilan Halaman Rangkuman dan Cetak Lembar Catatan Belajar Mandiri*

```
+---------------------------------------------------------------------------------------------------+
| [SLOT GAMBAR 2.13 — TANGKAPAN LAYAR DASBOR PORTAL GURU DAN REKAPITULASI KELAS]                    |
| Panduan Pengisian: Masuk melalui Portal Guru (PIN guru123), lalu tangkap layar tabel rekap nilai   |
| siswa, foto bukti kehadiran yang dapat diperbesar, tombol ekspor CSV, dan form kelola roster.     |
+---------------------------------------------------------------------------------------------------+
```
**Gambar 2.13** *Tampilan Dasbor Pengelolaan Guru dan Rekapitulasi Nilai Kelas*

### 2. Kesesuaian Implementasi dengan Rencana Proposal
Hasil pembuatan produk dinilai berdasarkan rencana awal pada proposal. Matriks perbandingannya disajikan pada Tabel 2.7.

**Tabel 2.7**  
*Matriks Kesesuaian Rencana Awal Proposal dengan Hasil Implementasi Aktual*

| Dimensi Pengembangan | Rencana Awal pada Dokumen Proposal | Realisasi Hasil Implementasi Aktual | Status Kesesuaian |
| :--- | :--- | :--- | :--- |
| **Cakupan Model MDLC** | Dibatasi pada tahap *Concept* dan *Design*. | Terlaksana dari *Concept*, *Design*, *Material Collecting*, *Assembly*, hingga *Testing*. | Tuntas hingga pengujian |
| **Topik dan Materi Ajar** | Keanekaragaman Hayati Fase D dalam 3 kegiatan belajar. | Terwujud utuh mencakup 3 kegiatan: konsep istilah, 3 tingkat kehati, dan biogeografi/konservasi. | Sesuai 100% |
| **Struktur Modul** | Modul interaktif 12 halaman berorientasi potret ponsel. | 12 halaman berkesinambungan dengan navigasi bilah bawah yang konsisten ("Menu Utama" dan "Berikutnya"). | Sesuai 100% |
| **Prinsip Pembelajaran** | Mengacu pada prinsip CTML Mayer (segmentasi, contiguity). | Menerapkan penuh 12 prinsip pembelajaran multimedia Mayer (2021) secara terpadu. | Diterapkan menyeluruh |
| **Bentuk Asesmen** | Latihan tiap kegiatan dan tes akhir patokan skor 70. | Latihan formatif tanpa penalti di 3 kegiatan, kuis sumatif 10 butir dengan diagnostik 3 TP dan KKM 70. | Dilengkapi analisis TP |
| **Kemandirian Operasional**| Tersedia versi daring dan luring (*offline*). | Live di GitHub Pages dan paket luring mandiri menggunakan server lokal Python portabel. | Sesuai 100% |

### 3. Penambahan dan Pengembangan Fitur dari Proposal Awal
Selama tahap perakitan dan pengujian, penulis menambahkan beberapa fitur bermanfaat yang belum tertulis pada proposal awal. Penambahan ini didasarkan pada kebutuhan pembelajaran nyata di kelas (Tabel 2.8).

**Tabel 2.8**  
*Penambahan Fitur Mutakhir Melampaui Proposal Awal dan Rasional Pedagogisnya*

| Komponen Fitur | Kondisi pada Proposal Awal | Penambahan dan Implementasi Aktual | Rasional dan Nilai Tambah Pedagogis |
| :--- | :--- | :--- | :--- |
| **Citra Visual Beranda & Materi** | Menggunakan ilustrasi vektor kartun pemandangan gunung. | Menggunakan foto pemandangan alam asli Indonesia resolusi tinggi. | Memberikan gambaran biologis nyata agar siswa mengenali alam nusantara yang sesungguhnya. |
| **Verifikasi Kamera Wajah Siswa** | Kuis akhir dikerjakan bebas tanpa pengawasan fisik. | Modul kamera selfie pada Halaman 10 untuk membuka kuis. | Membiasakan kejujuran belajar dan akuntabilitas mandiri saat guru tidak hadir di kelas. |
| **Pengelolaan Daftar Siswa** | Daftar nama siswa direncanakan statis di dalam sistem. | Pengelolaan daftar nama mandiri oleh guru di Portal Guru (tambah, tempel banyak nama, hapus). | Memudahkan guru mengubah dan memperbarui daftar nama siswa kapan saja. |
| **Proteksi Nilai & Jeda Cooldown** | Skor kuis terbuka bebas dan dapat diulang tanpa batas. | Nama terkunci "Sudah Selesai", nilai terlindungi, dan jeda hitung mundur 3 detik. | Mencegah siswa menebak-nebak kunci jawaban dan menjaga kerahasiaan nilai dari teman sekelas. |
| **Dasbor Pemantauan Guru** | Belum direncanakan pada proposal awal. | Portal Guru dengan PIN khusus, rekap nilai per tujuan pembelajaran, foto siswa, dan ekspor CSV. | Membantu guru mengetahui materi yang belum dipahami siswa untuk bahan bimbingan ulang. |

### 4. Hasil Pengujian
Pengujian dilakukan untuk memastikan fungsi pembelajaran dan kestabilan teknis media berjalan baik.

#### a) Hasil Pengujian Kotak Hitam (*Black-Box Testing*)
Pengujian fungsional antarmuka belajar mencakup 16 skenario interaksi pada Tabel 2.9.

**Tabel 2.9**  
*Hasil Pengujian Fungsionalitas Kotak Hitam (Black-Box Testing) Antarmuka Belajar*

| ID Uji | Skenario Interaksi yang Diuji | Respons Sistem yang Diharapkan | Hasil Pengamatan Aktual | Kesimpulan |
| :---: | :--- | :--- | :--- | :---: |
| **TC-01** | Navigasi Beranda ke Halaman Petunjuk | Halaman 1 berpindah ke Halaman 2 secara mulus. | Halaman 2 aktif, pelacak menampilkan halaman 2/12. | **VALID** |
| **TC-02** | Pemilihan Peran Guru & Validasi PIN | Menolak PIN salah; membuka modal portal bila PIN benar. | Pesan peringatan tampil saat salah; portal terbuka saat benar. | **VALID** |
| **TC-03** | Akses Menu Utama & Lompat Halaman | Kartu kegiatan 1, 2, 3, kuis, dan rangkuman dapat diklik. | Navigasi berpindah ke halaman target dengan tepat. | **VALID** |
| **TC-04** | Interaksi Kartu Akordeon Kegiatan 1 | Teks definisi membuka dan menutup saat kartu diketuk. | Buka-tutup akordeon berjalan mulus dengan animasi rapi. | **VALID** |
| **TC-05** | Evaluasi Latihan Formatif 1 | Menampilkan status benar/salah beserta penjelasan seketika. | Umpan balik muncul instan tanpa memengaruhi nilai rapor. | **VALID** |
| **TC-06** | Tabulasi Tiga Tingkat (Kegiatan 2) | Konten teks, studi kasus, dan gambar berganti sesuai tab. | Gambar mangga, kucing, dan hutan berganti secara presisi. | **VALID** |
| **TC-07** | Permainan Pasangan Dua Kolom (Keg. 2) | Mengaitkan contoh organisme dengan tingkat kehati. | Pilihan merespons klik dan memvalidasi status kecocokan. | **VALID** |
| **TC-08** | Kontrol Simulasi Observasi (Keg. 3) | Tombol putar, jeda, dan langkah menjalankan simulasi. | Simulasi 5 tahap berjalan terurut sesuai alur sains. | **VALID** |
| **TC-09** | Pengurutan Kartu Sains (Kegiatan 3) | Kartu acak dapat dipindah urutan posisinya secara logis. | Indeks kartu bertukar posisi dan urutan tervalidasi. | **VALID** |
| **TC-10** | Penguncian Kuis Sebelum Verifikasi | Soal kuis terkunci rapat sebelum siswa mengambil foto selfie. | Pesan instruksi terkunci muncul, form soal tidak dapat diakses. | **VALID** |
| **TC-11** | Verifikasi Kamera Potret Wajah | Kamera aktif, memotret wajah, dan menyematkan avatar. | Foto terkonversi aman dan membuka kunci soal kuis. | **VALID** |
| **TC-12** | Penguncian Jawaban & Pembahasan | Tombol kunci membekukan pilihan dan membuka pembahasan. | Pilihan radio dinonaktifkan, teks ilmiah tampil utuh. | **VALID** |
| **TC-13** | Pengiriman Kuis & Jeda Cooldown | Tombol selesai memicu jeda 3 detik dan pindah ke Hal 11. | Data tersimpan di folder guru, cooldown berjalan lancar. | **VALID** |
| **TC-14** | Kalkulasi Skor & Diagnostik 3 TP | Skor total dan persentase TP 1, 2, 3 terhitung akurat. | Nilai terdistribusi benar; rekomendasi remedial tampil jika < 70. | **VALID** |
| **TC-15** | Pencetakan Rangkuman Mandiri | Tombol cetak memicu dialog print dengan tata letak bersih. | Aturan CSS @media print menyembunyikan navigasi dengan rapi. | **VALID** |
| **TC-16** | Persistensi Data Penyimpanan Lokal | Status belajar tetap tersimpan saat tab peramban ditutup. | Data dipulihkan secara utuh saat aplikasi dibuka kembali. | **VALID** |

*Tingkat Keberhasilan Pengujian Kotak Hitam: Seluruh 16 skenario uji berhasil terpenuhi dengan hasil valid (100%).*

#### b) Hasil Pengujian Teknis dan Kinerja Eksekusi Sistem
Hasil pengukuran teknis berkas dan kelancaran eksekusi sistem disajikan pada Tabel 2.10.

**Tabel 2.10**  
*Hasil Pengujian Verifikasi Teknis Kompilasi dan Kinerja Eksekusi Sistem*

| Parameter Pengujian | Standar Toleransi Gawai Bergerak | Hasil Pengukuran Aktual | Status |
| :--- | :--- | :--- | :---: |
| **Ukuran Total Paket Berkas** | Maksimal 10,0 megabita (MB) | **~2,2 MB** (termasuk seluruh aset foto resolusi tinggi) | **Sangat Baik** |
| **Waktu Muat Awal (FCP)** | Di bawah 2,0 detik | **0,4 detik** pada jaringan lokal / luring mandiri | **Optimal** |
| **Waktu Eksekusi Skrip Interaksi**| Di bawah 50 milidetik | **< 15 milidetik** rata-rata respons tombol | **Bebas Hambatan** |
| **Kesesuaian Tata Letak Responsif**| Lebar layar 360 px hingga 1920 px | Menyesuaikan ukuran layar tanpa pergeseran horizontal | **Lolos** |

## C. Kekurangan Produk dan Tindak Lanjut

Berdasarkan hasil uji coba dan telaah mandiri, penulis mencatat tiga kekurangan pada media pembelajaran ini beserta rencana tindak lanjutnya:
1. **Penyimpanan Nilai Awal yang Bertumpu pada Memori Lokal Peramban:**  
   Nilai kuis dan rekap guru tersimpan di memori peramban masing-masing perangkat. Media memang dapat berjalan tanpa internet. Namun, jika siswa mengerjakan kuis di rumah menggunakan ponsel pribadi, nilainya belum otomatis terkirim ke laptop guru di sekolah.  
   *Tindak Lanjut:* Mengintegrasikan basis data awan nirkabel ringan (seperti Firebase Realtime Database) sehingga data nilai siswa langsung tersinkronkan otomatis antarperangkat guru dan siswa secara seketika.
2. **Ketergantungan pada Izin Akses Kamera:**  
   Fitur foto selfie siswa membutuhkan izin sensor kamera peramban. Pada beberapa ponsel lawas atau peramban dengan aturan privasi ketat, kotak dialog izin kamera terkadang terhalang.  
   *Tindak Lanjut:* Menambahkan petunjuk visual sederhana bagi siswa untuk membuka setelan izin kamera pada peramban mereka.
3. **Cakupan Materi Terbatas pada Satu Subtema:**  
   Aplikasi yang dibuat saat ini baru mencakup bab Ekologi dan Keanekaragaman Hayati Indonesia kelas VII.  
   *Tindak Lanjut:* Memperluas isi media untuk bab IPA lainnya pada Kurikulum Merdeka Fase D (seperti klasifikasi zat dan tata surya) menggunakan kerangka kerja antarmuka yang sama.

---

\newpage

# BAB III KESIMPULAN

## A. Kesimpulan

Berdasarkan perancangan, perakitan, dan pengujian media pembelajaran menggunakan model MDLC, disimpulkan bahwa:
1. Media pembelajaran interaktif berbasis web bergerak berjudul **"Ekologi dan Keanekaragaman Hayati Indonesia"** berhasil dirancang dan diuji. Media ini praktis, ramah ponsel, dan siap mendampingi buku cetak dan papan tulis di SMP Negeri 1 Tandukkalua;
2. Aplikasi ini menyajikan 12 modul halaman yang memadukan materi konsep dasar, foto perbandingan tiga tingkat keanekaragaman, simulasi observasi sains, dan peta biogeografi Wallace-Weber;
3. Penerapan 12 prinsip pembelajaran multimedia Mayer berhasil diwujudkan melalui visualisasi konkret, peringatan miskonsepsi, dan latihan berumpan balik langsung yang nyaman bagi siswa;
4. Hasil pengujian kotak hitam menunjukkan seluruh 16 skenario antarmuka berjalan valid (100%). Fitur kamera foto dan jeda waktu tiga detik berjalan stabil dengan ukuran berkas hemat (~2,2 MB) dan waktu muat cepat (0,4 detik).

## B. Rencana Validasi Ahli, Uji Coba Pengguna, dan Tahap Distribusi

Pada model MDLC Luther-Sutopo, tahap *Distribution* merupakan tahap menyebarkan produk kepada pengguna setelah melewati validasi. Mengingat tugas mata kuliah ini berfokus sampai tahap pengujian perangkat lunak, penulis menyusun rencana lanjutan untuk validasi ahli, uji coba lapangan, dan jalur penyebaran produk:

### 1. Rencana Validasi Ahli
a. **Validasi Ahli Materi:** Mengajak dosen pendidikan biologi atau guru IPA SMP senior untuk menelaah ketepatan materi keanekaragaman hayati, kesesuaian soal kuis dengan kurikulum Fase D, dan kebenaran pembahasan miskonsepsi sains;  
b. **Validasi Ahli Media:** Mengajak dosen teknologi pendidikan Jurusan Teknik Informatika dan Komputer FT UNM untuk menilai kerapian tata letak layar, kejelasan navigasi, pemilihan warna, dan keterpaduan prinsip Mayer.

### 2. Rencana Uji Coba Terbatas di Sekolah
Uji coba direncanakan melibatkan 6–10 siswa kelas VII serta guru IPA di SMP Negeri 1 Tandukkalua. Kegiatan ini bertujuan mengamati keterbacaan materi di layar ponsel siswa, kemudahan alur belajar mandiri saat guru berhalangan hadir, serta kelancaran fitur kamera foto.

### 3. Rencana Jalur Distribusi Produk
Penyebaran media pembelajaran dirancang melalui tiga saluran:
a. **Penyebaran Daring (*Online*):** Diunggah pada layanan *GitHub Pages* (`https://nurun05.github.io/Website_multimedia-pembelajaran/`) agar dapat dibuka kapan saja melalui peramban ponsel siswa tanpa instalasi;  
b. **Penyebaran Luring Mandiri (*Offline*):** Menyediakan paket aplikasi portabel bersama server lokal Python (`server.py`). Laptop guru difungsikan sebagai pemancar sinyal nirkabel di kelas sehingga siswa dapat membuka materi bersamaan tanpa kuota internet;  
c. **Penyebaran Lembar Rangkuman Cetak:** Memanfaatkan fitur cetak lembar catatan pada Halaman 12 yang diatur ramah cetak hitam-putih, sebagai cadangan materi jika baterai ponsel siswa habis.

## C. Saran Pengembangan Selanjutnya

Berdasarkan pengalaman perakitan media pembelajaran ini, diajukan beberapa saran:
1. Guru IPA di SMP Negeri 1 Tandukkalua disarankan memanfaatkan media interaktif ini untuk peraga visual di kelas maupun penugasan mandiri terarah saat guru bertugas dinas di luar sekolah;
2. Pengembang lanjutan dan rekan mahasiswa PTIK disarankan memperluas cakupan materi modul ke topik IPA lainnya pada Kurikulum Merdeka Fase D;
3. Peneliti selanjutnya disarankan meneliti pengaruh media pendamping ini terhadap peningkatan hasil belajar dan pemahaman konsep siswa di ruang kelas.

---

\newpage

# DAFTAR PUSTAKA

Kemendikbudristek. (2022). *Keputusan Kepala Badan Standar, Kurikulum, dan Asesmen Pendidikan Nomor 008/H/KR/2022 tentang Capaian Pembelajaran pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah pada Kurikulum Merdeka*. Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.

Luther, A. C. (1994). *Authoring interactive multimedia*. AP Professional.

Mayer, R. E. (2021). *Multimedia learning* (3rd ed.). Cambridge University Press. https://doi.org/10.1017/9781316941355

Purnama, E., Leksono, S. M., Nestiadi, A., & Kurniasih, S. (2024). Pengembangan E-LKPD Tema Keanekaragaman Hayati Berbasis Hasil Riset untuk Meningkatkan Kemampuan Literasi Konservasi Siswa SMP Kelas VII. *Jurnal Pendidikan MIPA*, *14*(1), 194–199. https://doi.org/10.37630/jpm.v14i1.1484

Ristanto, R. H., Heryanti, E., & Madaniyyah, S. (2024). E-Modul Edu-Kehati Berbasis I-SETS: Pengembangan Bahan Ajar Berorientasi pada Literasi Keanekaragaman Hayati. *Jurnal Inovasi Pembelajaran Biologi*, *5*(2), 66–83. https://doi.org/10.26740/jipb.v5n2.p66-83

Samalukang, I. P., Liando, O. E. S., & Paat, W. R. L. (2022). Pengembangan Media Pembelajaran Praktikum Jaringan Komputer di Jurusan PTIK Universitas Negeri Manado. *EduTIK*, *2*(4), 594–602.

Sutopo, A. H. (2003). *Multimedia interaktif dengan Flash*. Graha Ilmu.

Torondek, K., Kaparang, D. R., & Komansilan, T. (2025). Pengembangan Multimedia Pembelajaran Interaktif pada Mata Pelajaran Informatika Kelas X di SMA Negeri 1 Modoinding. *EduTIK: Jurnal Pendidikan Teknologi Informasi dan Komunikasi*, *5*(5), 1440–1451.

Yanto, R., & Setiawan, D. L. (2024). Pengembangan Media Pembelajaran Multimedia Interaktif pada Materi Ekologi dan Keanekaragaman Hayati Indonesia untuk Peserta Didik Kelas VII di SMP Negeri 2 Darma. *Indo-MathEdu Intellectuals Journal*, *5*(5), 5335–5347. https://doi.org/10.54373/imeij.v5i5.1772

Zunidar, Aqila, Z., Salim, S., & Fitrah, N. F. (2026). Analisis Cognitive Theory of Multimedia Learning oleh Mayer dalam Pengembangan Media Pembelajaran Digital. *AMI: Jurnal Pendidikan dan Riset*, *4*(1), 84–90.

---

\newpage

# LAMPIRAN

### Lampiran 1. Matriks Pengujian Kotak Hitam (Black-Box Testing) Antarmuka Belajar
Berikut rincian matriks pengujian fungsionalitas antarmuka modul pembelajaran interaktif:

```
+---------+-----------------------------------------+-------------------------------------------------------------+---------------+
| Halaman | Komponen Fitur yang Diuji               | Reaksi Sistem yang Diharapkan                               | Status Uji    |
+---------+-----------------------------------------+-------------------------------------------------------------+---------------+
| Hal 1   | Tombol "Anda Siswa" & "Anda Guru"       | Menampilkan opsi alur siswa atau membuka kotak PIN guru.    | BERHASIL (OK) |
| Hal 1   | Tombol "Mulai Belajar" & "Ke Menu"      | Router mengarahkan ke Halaman 2 atau Halaman 3 secara tepat.| BERHASIL (OK) |
| Hal 2   | Tampilan Petunjuk & 3 Capaian TP        | Kartu teks petunjuk dan TP 1-3 terbaca jelas & responsif.   | BERHASIL (OK) |
| Hal 3   | 5 Kartu Menu Utama & Progres Centang    | Berpindah ke modul target; centang hijau muncul jika tuntas.| BERHASIL (OK) |
| Hal 4   | Pemantik & 6 Akordeon Terminologi       | Kartu akordeon membuka-menutup teks definisi saat diklik.   | BERHASIL (OK) |
| Hal 5   | Latihan Formatif Pilihan Ganda 1        | Memeriksa pilihan opsi A-D dan memunculkan kotak pembenahan.| BERHASIL (OK) |
| Hal 6   | Tab Interaktif 3 Tingkat (Gen/Jns/Eko)  | Mengganti gambar, judul, dan studi kasus sesuai tab aktif.  | BERHASIL (OK) |
| Hal 7   | Permainan Mencocokkan Pasangan 2 Kolom  | Mengaitkan 6 kartu contoh organisme dengan tingkat kehati.  | BERHASIL (OK) |
| Hal 8   | Simulasi Langkah Observasi & Peta Fauna | Tombol kendali simulasi memajukan langkah; peta zona jelas. | BERHASIL (OK) |
| Hal 9   | Pengurutan Kartu Alur Sains Acak        | Kartu berpindah posisi naik/turun dan memeriksa urutan.     | BERHASIL (OK) |
| Hal 10  | Kunci Kuis & Verifikasi Wajah Siswa     | Kuis terkunci hingga foto selfie diambil dan nama dipilih.  | BERHASIL (OK) |
| Hal 10  | Penguncian Jawaban & Pembahasan Kuis    | Membekukan pilihan opsi kuis dan membuka alasan ilmiah.     | BERHASIL (OK) |
| Hal 10  | Tombol Kirim Hasil ke Folder Guru       | Menyimpan skor dan foto ke localStorage; pindah ke Hal 11.  | BERHASIL (OK) |
| Hal 11  | Gauge Skor & Pemetaan Capaian 3 TP      | Menghitung skor total & persentase TP 1, 2, 3 secara valid. | BERHASIL (OK) |
| Hal 11  | Logika Rekomendasi Remedial (KKM 70)    | Menampilkan lencana tuntas jika >= 70, atau saran perbaikan.| BERHASIL (OK) |
| Hal 12  | Glosarium Rangkuman & Cetak PDF         | Menampilkan intisari materi & memicu print preview peramban.| BERHASIL (OK) |
| Header  | Bilah Pelacak & Tombol Logout Peran     | Menampilkan nomor halaman & mengembalikan peran ke awal.    | BERHASIL (OK) |
| Navigasi| Tombol "Menu Utama" & "Berikutnya"      | Navigasi bilah bawah bergerak konsisten antarhalaman aktif. | BERHASIL (OK) |
+---------+-----------------------------------------+-------------------------------------------------------------+---------------+
```

---

### Lampiran 2. Kisi-Kisi dan Naskah Butir Soal Evaluasi Kuis Akhir
Berikut naskah 10 butir soal Kuis Akhir pada Halaman 10 beserta kunci jawaban dan pembahasan ilmiahnya:

1. **Soal 1 (Indikator TP 1 - Pemahaman Habitat vs Ekosistem):**  
   *Pertanyaan:* Banyak orang mengira habitat dan ekosistem bermakna sama persis. Pernyataan manakah di bawah ini yang paling tepat membedakan keduanya?  
   - A. Habitat mencakup seluruh interaksi makhluk hidup, sedangkan ekosistem hanyalah tempat tinggal satu individu saja.  
   - B. Habitat adalah tempat fisik alami tempat makhluk hidup tinggal dan berkembang biak, sedangkan ekosistem adalah kesatuan interaksi timbal balik antara makhluk hidup dan lingkungan abiotiknya. *(Kunci Jawaban: Benar)*  
   - C. Habitat hanya berada di daratan, sedangkan ekosistem hanya ditemukan di lingkungan perairan.  
   - D. Habitat tidak dipengaruhi oleh komponen abiotik, sedangkan ekosistem hanya tersusun atas komponen biotik.  
   *Pembahasan Ilmiah:* Habitat adalah alamat fisik tempat organisme hidup, sedangkan ekosistem merupakan sistem ekologis yang melibatkan interaksi timbal balik antara komunitas biologis (biotik) dan faktor lingkungan abiotiknya.

2. **Soal 2 (Indikator TP 1 - Karakteristik Spesies Endemik):**  
   *Pertanyaan:* Mengapa satwa seperti Anoa dan Babirusa di Sulawesi, serta Komodo di Nusa Tenggara Timur disebut sebagai spesies endemik?  
   - A. Karena populasinya sangat melimpah dan dapat ditemukan hidup secara alami di seluruh penjuru benua di dunia.  
   - B. Karena satwa tersebut hanya ditemukan secara alami di wilayah geografis tertentu dan tidak dijumpai di belahan bumi lain. *(Kunci Jawaban: Benar)*  
   - C. Karena satwa tersebut merupakan spesies pendatang dari benua lain yang berkembang biak dengan cepat.  
   - D. Karena satwa tersebut sengaja ditangkarkan di dalam kebun binatang modern.  
   *Pembahasan Ilmiah:* Spesies endemik merujuk pada organisme yang sebaran geografis alamiahnya terbatas pada wilayah biogeografis tertentu dan tidak dijumpai secara alami di tempat lain di dunia.

3. **Soal 3 (Indikator TP 1 - Prinsip Konservasi Keanekaragaman Hayati):**  
   *Pertanyaan:* Tujuan utama dari upaya konservasi sumber daya alam hayati adalah...  
   - A. Melarang manusia memanfaatkan seluruh sumber daya alam demi menjaga keaslian bumi secara mutlak.  
   - B. Memanfaatkan flora dan fauna sebanyak-banyaknya untuk keuntungan komersial dalam waktu singkat.  
   - C. Melindungi, melestarikan, dan memanfaatkan keanekaragaman hayati secara bijaksana dan berkelanjutan untuk generasi sekarang dan masa depan. *(Kunci Jawaban: Benar)*  
   - D. Menghilangkan seluruh predator alami agar herbivora dapat berkembang biak tanpa hambatan.  
   *Pembahasan Ilmiah:* Konservasi berakar pada prinsip perlindungan sistem penyangga kehidupan, pengawetan keanekaragaman jenis, serta pemanfaatan lestari sumber daya alam hayati secara seimbang dan berkesinambungan.

4. **Soal 4 (Indikator TP 2 - Identifikasi Keanekaragaman Tingkat Gen):**  
   *Pertanyaan:* Perbedaan rasa, aroma, bentuk, dan warna antara Buah Mangga Arumanis, Mangga Manalagi, dan Mangga Golek merupakan contoh nyata dari...  
   - A. Keanekaragaman hayati tingkat gen dalam satu spesies *(Kunci Jawaban: Benar)*  
   - B. Keanekaragaman hayati tingkat jenis (spesies) antar-organisme berbeda  
   - C. Keanekaragaman hayati tingkat ekosistem perairan  
   - D. Keanekaragaman hayati akibat perbedaan adaptasi morfologi antar-famili  
   *Pembahasan Ilmiah:* Seluruh kultivar mangga tersebut berasal dari spesies yang sama (*Mangifera indica*). Variasi penampakan luar disebabkan oleh perbedaan susunan materi genetik (DNA/alel) di dalam sel masing-masing tanaman.

5. **Soal 5 (Indikator TP 2 - Identifikasi Keanekaragaman Tingkat Jenis):**  
   *Pertanyaan:* Di kebun binatang, seorang siswa mengamati Harimau (*Panthera tigris*), Singa (*Panthera leo*), dan Kucing Rumah (*Felis catus*). Ketiga hewan tersebut menunjukkan keanekaragaman tingkat...  
   - A. Gen, karena memiliki susunan genetik yang identik 100%  
   - B. Jenis (spesies), karena mereka merupakan spesies berbeda meskipun masih berkerabat dalam satu famili Felidae *(Kunci Jawaban: Benar)*  
   - C. Ekosistem, karena hidup di dalam satu kandang yang sama  
   - D. Populasi, karena mampu saling kawin dan menghasilkan anak yang fertil  
   *Pembahasan Ilmiah:* Perbedaan antarspesies biologis (meskipun masih berada dalam satu famili taksonomi Felidae) merupakan representasi dari keanekaragaman hayati tingkat jenis/spesies.

6. **Soal 6 (Indikator TP 2 - Analisis Keanekaragaman Tingkat Ekosistem):**  
   *Pertanyaan:* Manakah pasangan di bawah ini yang menggambarkan keanekaragaman tingkat ekosistem di Indonesia?  
   - A. Padi Ciherang dan Padi Rojolele  
   - B. Kucing Anggora dan Kucing Persia  
   - C. Ekosistem Hutan Mangrove Pantai dan Ekosistem Terumbu Karang Laut Dangkal *(Kunci Jawaban: Benar)*  
   - D. Pohon Kelapa dan Pohon Kelapa Sawit  
   *Pembahasan Ilmiah:* Keanekaragaman ekosistem terbentuk akibat interaksi unik antara komunitas hayati dan variasi faktor abiotik bentang alam (iklim, substrat tanah, salinitas air).

7. **Soal 7 (Indikator TP 2 - Miskonsepsi Kritis Perbedaan Gen vs Jenis):**  
   *Pertanyaan:* Sekelompok siswa memperdebatkan perbedaan antara variasi tingkat gen dan jenis. Kriteria utama yang memastikan bahwa dua individu tergolong keanekaragaman tingkat GEN (satu spesies) adalah...  
   - A. Memiliki warna tubuh dan ukuran fisik yang persis sama tanpa perbedaan  
   - B. Hidup di daerah geografis yang terpisah oleh lautan luas  
   - C. Mampu kawin silang secara alami dan menghasilkan keturunan yang fertil (subur) *(Kunci Jawaban: Benar)*  
   - D. Memiliki makanan kesukaan yang serupa di habitat aslinya  
   *Pembahasan Ilmiah:* Berdasarkan konsep spesies biologis (*Biological Species Concept*), dua individu tergolong dalam satu spesies (tingkat gen) apabila mampu kawin silang alami dan menghasilkan keturunan yang subur (*fertile offspring*).

8. **Soal 8 (Indikator TP 3 - Biogeografi Fauna Indonesia):**  
   *Pertanyaan:* Garis khayal yang membatasi wilayah fauna tipe Asiatis di bagian barat dengan wilayah fauna tipe Peralihan (Wallacea) di bagian tengah Indonesia adalah...  
   - A. Garis Weber  
   - B. Garis Wallace *(Kunci Jawaban: Benar)*  
   - C. Garis Khatulistiwa  
   - D. Garis Bujur Timur  
   *Pembahasan Ilmiah:* Alfred Russel Wallace merumuskan garis demarkasi biogeografi (Garis Wallace) yang membentang di antara Pulau Kalimantan dan Sulawesi serta Selat Lombok, memisahkan fauna tipe Asiatis barat dengan fauna tipe Peralihan Wallacea.

9. **Soal 9 (Indikator TP 3 - Analisis Ancaman Kepunahan):**  
   *Pertanyaan:* Aktivitas deforestasi (penebangan hutan alam) skala besar untuk alih fungsi lahan perkebunan kelapa sawit merupakan bentuk ancaman keanekaragaman hayati yang diklasifikasikan sebagai...  
   - A. Invasi spesies asing  
   - B. Kerusakan dan fragmentasi habitat alami *(Kunci Jawaban: Benar)*  
   - C. Pemanfaatan sumber daya berkelanjutan  
   - D. Pelestarian keanekaragaman genetik  
   *Pembahasan Ilmiah:* Pembabatan tutupan hutan memusnahkan ruang hidup, wilayah jelajah, dan sumber makanan satwa liar secara permanen, yang diklasifikasikan sebagai kerusakan dan fragmentasi habitat alami.

10. **Soal 10 (Indikator TP 3 - Pemilahan Konservasi In Situ vs Ex Situ):**  
    *Pertanyaan:* Pemerintah mendirikan Taman Nasional Komodo di Pulau Komodo dan Suaka Margasatwa Lore Lindu di Sulawesi. Bentuk perlindungan flora dan fauna yang dilakukan tepat di dalam habitat aslinya tersebut disebut...  
    - A. Pelestarian In Situ *(Kunci Jawaban: Benar)*  
    - B. Pelestarian Ex Situ  
    - C. Penangkaran Domestikasi  
    - D. Introduksi Spesies Buatan  
    *Pembahasan Ilmiah:* Pelestarian *in situ* adalah perlindungan populasi flora dan fauna langsung di dalam habitat alamiah aslinya, seperti taman nasional dan cagar alam. Sebaliknya, pelestarian *ex situ* berlangsung di luar habitat aslinya, seperti kebun raya dan kebun binatang.

---

### Lampiran 3. Panduan Pengisian Slot Gambar dan Tangkapan Layar Aplikasi
Seluruh slot tangkapan layar berlabel `[SLOT GAMBAR 2.4]` sampai `[SLOT GAMBAR 2.13]` pada Bab II dapat diisi langsung oleh penulis menggunakan berkas tangkapan layar asli aplikasi web dengan memperhatikan panduan berikut:
1. Resolusi jendela peramban disarankan memakai rasio ponsel cerdas (360×800 px) atau desktop (1280×720 px) dengan format berkas gambar *Portable Network Graphics* (PNG);
2. Pastikan teks materi, gambar spesimen kehati, dan indikator lencana terbaca tajam dan tidak mengalami distorsi proporsi rasio aspek;
3. Setiap gambar ditempatkan di tengah (*centered*) dan diberi keterangan gambar bernomor resmi sesuai Bab II.

---

### Lampiran 4. Draf Pernyataan Kejujuran Akademik dan Pemanfaatan Teknologi
Sesuai prinsip keterbukaan akademik pada kontrak perkuliahan, penulis dapat mencantumkan pernyataan berikut pada lembar pernyataan apabila diwajibkan oleh dosen pengampu atau fakultas:
>
"Dalam penyusunan draf laporan ini, penulis memanfaatkan alat bantu kecerdasan buatan untuk merapikan struktur laporan dan menyusun draf awal. Bantuan ini juga mencakup pemeriksaan kaidah Ejaan yang Disempurnakan (EYD) edisi kelima serta penyiapan format sitasi *Research Information Systems* (RIS). Seluruh substansi materi, data teknis, hasil pengujian, dan daftar rujukan telah diperiksa serta divalidasi langsung oleh penulis. Penulis bertanggung jawab penuh atas keabsahan seluruh isi naskah ini."
