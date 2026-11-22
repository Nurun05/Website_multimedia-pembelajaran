# LAPORAN PENGEMBANGAN MULTIMEDIA PEMBELAJARAN
## PENGEMBANGAN MULTIMEDIA PEMBELAJARAN INTERAKTIF BERBASIS WEBMOBILE SEBAGAI PENDAMPING MEDIA PEMBELAJARAN KONVENSIONAL PADA MATA PELAJARAN IPA SMP NEGERI 1 TANDUKKALUA MENGGUNAKAN MODEL MDLC

Diajukan untuk Memenuhi Tugas Mata Kuliah Multimedia Pembelajaran

---

### IDENTITAS PENYUSUN
**Nama :** Nurun Nisa Ahmad  
**NIM :** 240209501049  
**Kelas :** PTIK E 2024  
**Mata Kuliah :** Multimedia Pembelajaran  
**Dosen Pengampu :** Dr. Udin Sidik Sidin, S.Pd., M.T. (NIDN 0015067407)  
**Dosen Mitra :** Ir. H. Muhammad Riska, S.Pd., M.Pd. (NIDN 0020098503)  

**PROGRAM STUDI PENDIDIKAN TEKNIK INFORMATIKA DAN KOMPUTER**  
**JURUSAN TEKNIK INFORMATIKA DAN KOMPUTER**  
**FAKULTAS TEKNIK**  
**UNIVERSITAS NEGERI MAKASSAR**  
**2026**

---

\newpage

# KATA PENGANTAR

Puji syukur penulis panjatkan ke hadirat Tuhan Yang Maha Esa atas terselesaikannya pengembangan produk dan penyusunan laporan berjudul **"Pengembangan Multimedia Pembelajaran Interaktif Berbasis Webmobile Sebagai Pendamping Media Pembelajaran Konvensional Pada Mata Pelajaran IPA SMP Negeri 1 Tandukkalua Menggunakan Model MDLC"**. Laporan ini mendokumentasikan proses analisis kebutuhan, perancangan pedagogis, pengumpulan bahan ajar, perakitan media, hingga pengujian fungsional modul interaktif bertema Ekologi dan Keanekaragaman Hayati Indonesia untuk peserta didik kelas VII Sekolah Menengah Pertama (SMP) Negeri 1 Tandukkalua.

Penyusunan laporan ini tidak terlepas dari bimbingan, arahan, dan dukungan berbagai pihak. Penulis menyampaikan terima kasih yang tulus kepada:
1. Bapak Dr. Udin Sidik Sidin, S.Pd., M.T., selaku Dosen Pengampu mata kuliah Multimedia Pembelajaran yang memberikan arahan kurikulum, penguatan metodologi pengembangan media, serta bimbingan akademik selama perkuliahan;
2. Bapak Ir. H. Muhammad Riska, S.Pd., M.Pd., selaku Dosen Mitra yang mendampingi proses perkuliahan dan memberikan telaah kritis terhadap desain instruksional serta prinsip penyajian pesan visual pembelajaran;
3. Bapak dan Ibu Dosen Jurusan Teknik Informatika dan Komputer, Fakultas Teknik, Universitas Negeri Makassar yang telah membekali penulis dengan dasar keilmuan kependidikan dan teknologi informasi;
4. Guru mata pelajaran IPA serta sivitas akademika SMP Negeri 1 Tandukkalua yang telah memberikan data empiris mengenai kendala pembelajaran di ruang kelas;
5. Rekan-rekan mahasiswa kelas Pendidikan Teknik Informatika dan Komputer (PTIK) E Angkatan 2024 yang senantiasa saling memotivasi dan bertukar gagasan dalam menyelesaikan tugas karya multimedia ini.

Penulis menyadari bahwa produk dan laporan ini masih memiliki ruang penyempurnaan, terutama pada tahap validasi ahli dan uji coba lapangan terbatas yang direncanakan pada tahap lanjutan. Oleh karena itu, masukan konstruktif dari pembaca sangat diharapkan. Semoga karya ini dapat memberikan sumbangsih nyata bagi penguatan kualitas pembelajaran sains di sekolah menengah.

<br>

Makassar, November 2026  
<br><br>
**Penulis**  
Nurun Nisa Ahmad  
NIM 240209501049

---

\newpage

# DAFTAR ISI

- **SAMPUL**
- **KATA PENGANTAR**
- **DAFTAR ISI**
- **DAFTAR TABEL**
- **DAFTAR GAMBAR**
<br>

- **BAB I PENDAHULUAN**
  - **A. Latar Belakang**
  - **B. Tujuan Pengembangan**
  - **C. Manfaat Pengembangan**
  - **D. Gambaran Produk yang Dikembangkan**
<br>

- **BAB II PEMBAHASAN**
  - **A. Metode Pengembangan (Model MDLC hingga Tahap Testing)**
    - 1. Alasan Pemilihan Model MDLC
    - 2. Tahap Concept (Konsep dan Analisis Kebutuhan)
    - 3. Tahap Design (Perancangan)
    - 4. Tahap Material Collecting (Pengumpulan Bahan)
    - 5. Tahap Assembly (Perakitan Produk)
    - 6. Tahap Testing (Pengujian)
  - **B. Hasil Pengembangan Produk**
    - 1. Gambaran Produk Jadi dan Cakupan Materi
    - 2. Kesesuaian Implementasi dengan Rencana Proposal
    - 3. Penambahan dan Pengembangan Fitur dari Proposal Awal
    - 4. Hasil Pengujian
  - **C. Kekurangan Produk dan Tindak Lanjut**
<br>

- **BAB III KESIMPULAN**
  - **A. Kesimpulan**
  - **B. Rencana Validasi Ahli, Uji Coba Pengguna, dan Tahap Distribusi (Distribution)**
  - **C. Saran Pengembangan Selanjutnya**
<br>

- **DAFTAR PUSTAKA**
- **LAMPIRAN**

---

\newpage

# DAFTAR TABEL

- **Tabel 2.1** Sintesis Analisis Masalah Pembelajaran, Kebutuhan Belajar, dan Solusi Desain Media
- **Tabel 2.2** Pemetaan Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP)
- **Tabel 2.3** Peta Identifikasi Miskonsepsi Kritis dan Strategi Klarifikasi Pedagogis
- **Tabel 2.4** Penerapan 12 Prinsip Pembelajaran Multimedia Mayer (2021) pada Modul Interaktif
- **Tabel 2.5** Kisi-Kisi Distribusi Butir Soal Evaluasi Kuis Akhir Berdasarkan Taksonomi Bloom
- **Tabel 2.6** Cakupan Materi Pembelajaran, Kegiatan Interaktif, dan Sebaran Butir Asesmen
- **Tabel 2.7** Matriks Kesesuaian Rencana Awal Proposal dengan Hasil Implementasi Aktual
- **Tabel 2.8** Penambahan Fitur Mutakhir Melampaui Proposal Awal dan Rasional Pedagogisnya
- **Tabel 2.9** Hasil Pengujian Fungsionalitas Kotak Hitam (Black-Box Testing) Antarmuka Belajar
- **Tabel 2.10** Hasil Pengujian Verifikasi Teknis Kompilasi dan Kinerja Eksekusi Sistem

---

\newpage

# DAFTAR GAMBAR

- **Gambar 2.1** Use Case Diagram: Pemodelan Interaksi Peran Siswa dan Guru IPA
- **Gambar 2.2** Activity Diagram: Alur Pengalaman Belajar Mandiri Peserta Didik
- **Gambar 2.3** Flowchart Alur Navigasi Sistem dan Ambang Kelulusan KKM 70
- **Gambar 2.4** Slot Tangkapan Layar Halaman Beranda Sambutan dan Pemilihan Akses Peran
- **Gambar 2.5** Slot Tangkapan Layar Halaman Petunjuk Belajar dan Capaian Tujuan Pembelajaran
- **Gambar 2.6** Slot Tangkapan Layar Dasbor Menu Utama Pembelajaran Berbasis Kartu
- **Gambar 2.7** Slot Tangkapan Layar Kegiatan Belajar 1: Konsep Kunci dan Latihan Formatif
- **Gambar 2.8** Slot Tangkapan Layar Kegiatan Belajar 2: Tabulasi Visual Tiga Tingkat Kehati
- **Gambar 2.9** Slot Tangkapan Layar Kegiatan Belajar 3: Simulasi Observasi dan Peta Wallace-Weber
- **Gambar 2.10** Slot Tangkapan Layar Halaman Kuis Akhir Berproteksi Verifikasi Wajah Siswa
- **Gambar 2.11** Slot Tangkapan Layar Halaman Hasil Skor, Pemetaan TP, dan Rekomendasi
- **Gambar 2.12** Slot Tangkapan Layar Halaman Rangkuman dan Cetak Lembar Catatan Mandiri
- **Gambar 2.13** Slot Tangkapan Layar Dasbor Pengelolaan Guru dan Rekapitulasi Kelas

---

\newpage

# BAB I PENDAHULUAN

## A. Latar Belakang

Pembelajaran Ilmu Pengetahuan Alam (IPA) pada jenjang Sekolah Menengah Pertama (SMP) berperan penting dalam menumbuhkan literasi sains, kemampuan berpikir kritis, serta kesadaran ekologis peserta didik terhadap kelestarian lingkungan hidup. Berdasarkan pengamatan awal serta pengalaman empiris penulis pada pembelajaran IPA di SMP Negeri 1 Tandukkalua, proses belajar mengajar di kelas masih sangat bertumpu pada dua media konvensional, yakni buku paket cetak dan papan tulis. Guru menyampaikan materi pelajaran dengan menerangkan isi buku teks, kemudian mencatatkan poin-poin penjelasan atau menggambarkan bagan di papan tulis. 

Pemanfaatan buku cetak dan papan tulis tentu memiliki kelebihan, seperti ketersediaannya yang merata di setiap ruang kelas, kepraktisan tanpa memerlukan pasokan listrik, serta fleksibilitas guru dalam menyesuaikan penjelasan secara langsung saat siswa bertanya. Namun, ketergantungan tunggal pada kedua media tersebut menghadirkan hambatan pedagogis yang nyata pada topik-topik tertentu. Salah satu materi yang paling rentan mengalami kendala visualisasi adalah materi Keanekaragaman Hayati (Biodiversitas) pada elemen Pemahaman IPA Fase D Kurikulum Merdeka.

Topik keanekaragaman hayati menuntut pemahaman konkret mengenai variasi morfologi organisme, perbedaan ciri fisik antarspesies, serta pembedaan hierarki biologis yang mencakup tingkat gen, tingkat jenis, dan tingkat ekosistem. Buku teks pelajaran yang tersedia di sekolah umumnya hanya memuat foto-foto berukuran kecil dengan kualitas cetak terbatas serta hanya menyajikan sedikit contoh perwakilan spesies. Akibatnya, ketika guru berusaha menjelaskan keanekaragaman bentuk atau ciri khas satwa, guru terpaksa menggambar ulang objek tersebut di papan tulis. Tindakan menggambar tangan di papan tulis menyita alokasi waktu jam pelajaran, sementara representasi bentuk yang dihasilkan sangat bergantung pada keterampilan artistik guru. Di samping itu, gambar di papan tulis bersifat fana karena harus segera dihapus saat materi berganti atau jam pelajaran berakhir sehingga peserta didik tidak memiliki sumber rujukan visual yang dapat dibuka kembali di luar jam sekolah.

Kesulitan belajar kian bertambah ketika guru mata pelajaran berhalangan hadir di kelas karena urusan kedinasan atau alasan kesehatan. Dalam kondisi tersebut, pola penugasan yang lazim diberikan kepada siswa adalah mencatat sejumlah halaman materi dari buku paket ke buku catatan pribadi sebagai persiapan pertemuan berikutnya. Kegiatan mencatat massal tanpa panduan instruksional ini berlangsung mekanis tanpa disertai penjelasan runut, tanpa visualisasi dinamis, dan tanpa adanya umpan balik langsung. Siswa sekadar menyalin deretan teks tanpa memahami konsep yang disalin sehingga pemahaman siswa tidak terukur dan miskonsepsi sains berpotensi tidak terdeteksi sejak awal.

Dari sudut pandang kebijakan kurikulum nasional, Keputusan Kepala BSKAP Kemendikbudristek Nomor 008/H/KR/2022 menetapkan bahwa peserta didik pada Fase D diharapkan mampu mengklasifikasikan makhluk hidup berdasarkan karakteristik yang diamati, menganalisis interaksi ekologis antara makhluk hidup dan lingkungannya, serta merancang upaya mitigasi terhadap kerusakan lingkungan hidup (Kemendikbudristek, 2022). Tuntutan capaian ini menegaskan bahwa materi keanekaragaman hayati tidak boleh sekadar menjadi bahan hafalan istilah taksonomi, melainkan harus diangkat sebagai sarana penguatan literasi konservasi lingkungan hidup (Purnama et al., 2024; Ristanto et al., 2024).

Secara teoretis, perancangan media pembelajaran interaktif ini berlandaskan pada *Cognitive Theory of Multimedia Learning* (CTML) yang dirumuskan oleh Richard E. Mayer (Mayer, 2021). Teori ini menjelaskan bahwa saluran visual dan auditori memproses informasi secara terpisah dengan kapasitas memori kerja yang terbatas. Proses pemahaman konsep ilmiah terjadi jauh lebih mendalam apabila kata-kata dan gambar dipadukan secara harmonis (*multimedia principle*), disajikan dalam segmen-segmen aktivitas kecil (*segmenting principle*), diberi penekanan pada istilah kunci (*signaling principle*), serta menempatkan keterangan teks sedekat mungkin dengan objek visual yang dijelaskan (*spatial contiguity principle*) (Mayer, 2021; Zunidar et al., 2026). Kajian empiris membuktikan bahwa integrasi media pembelajaran multimedia interaktif pada materi ekologi dan keanekaragaman hayati Fase D mampu meningkatkan minat, pemahaman konsep, serta kemandirian belajar peserta didik secara signifikan (Yanto & Setiawan, 2024).

Berdasarkan kesenjangan kontekstual di SMP Negeri 1 Tandukkalua dan landasan teoretis tersebut, penulis berinisiatif mengembangkan multimedia pembelajaran interaktif berbasis *web-mobile* sebagai media pendamping pembelajaran konvensional menggunakan model *Multimedia Development Life Cycle* (MDLC) menurut Luther (1994) yang disempurnakan oleh Sutopo (2003). Pada rancangan awal proposal, pembahasan difokuskan pada tahap *Concept* dan *Design*. Melalui proses pengembangan lanjutan, media ini disempurnakan hingga merampungkan tahap *Assembly* dan *Testing*, dengan menghadirkan penguatan pedagogis berupa alur belajar mandiri tiga kegiatan, latihan interaktif berumpan balik seketika, instrumen evaluasi kuis akhir dengan analisis pembahasan ilmiah, sistem perlindungan integritas evaluasi, serta portal pengelolaan kelas bagi guru.

## B. Tujuan Pengembangan

Berdasarkan latar belakang masalah yang telah diuraikan, tujuan dari pengembangan multimedia pembelajaran interaktif ini adalah:
1. Menghasilkan media pembelajaran interaktif berbasis *web-mobile* yang valid, praktis, dan ringan pada topik Ekologi dan Keanekaragaman Hayati Indonesia untuk peserta didik kelas VII SMP Negeri 1 Tandukkalua;
2. Menerapkan tahapan model pengembangan *Multimedia Development Life Cycle* (MDLC) secara sistematis mulai dari tahap *Concept*, *Design*, *Material Collecting*, *Assembly*, hingga *Testing*;
3. Menyajikan materi keanekaragaman hayati secara bertahap dan konkret melalui perpaduan teks ringkas, galeri citra fotografi beresolusi tinggi, simulasi interaktif observasi sains, latihan formatif manipulatif, serta kuis diagnostik berumpan balik langsung;
4. Menyediakan instrumen pembelajaran mandiri yang dapat membimbing peserta didik secara terarah saat guru berhalangan hadir di kelas, dilengkapi fasilitas pemantauan hasil belajar dan pengelolaan data bagi guru.

## C. Manfaat Pengembangan

Pengembangan multimedia pembelajaran interaktif ini diharapkan dapat memberikan manfaat teoretis dan praktis sebagai berikut:

### 1. Manfaat Teoretis
Secara teoretis, produk dan laporan ini menyumbang bukti penerapan *Cognitive Theory of Multimedia Learning* (CTML) dalam perancangan media instruksional berbasis web bergerak, serta memperkaya referensi operasionalisasi model MDLC Luther-Sutopo pada pembelajaran sains jenjang sekolah menengah pertama.

### 2. Manfaat Praktis
a. **Bagi Peserta Didik:** Membantu memvisualisasikan perbedaan konkret keanekaragaman hayati tingkat gen, jenis, dan ekosistem melalui citra nyata; menyediakan sarana belajar mandiri yang aman untuk mencoba latihan tanpa rasa takut dihakimi nilai; serta memperkuat pemahaman sains dan literasi konservasi lingkungan hidup;  
b. **Bagi Guru IPA:** Menyediakan alat bantu peraga digital siap pakai di kelas tanpa perlu menggambar manual di papan tulis; memfasilitasi penugasan terstruktur saat berhalangan hadir; serta memudahkan pemantauan ketuntasan belajar per butir Tujuan Pembelajaran melalui dasbor rekapitulasi kelas;  
c. **Bagi Sekolah (SMP Negeri 1 Tandukkalua):** Mendorong pemanfaatan teknologi pembelajaran digital yang hemat infrastruktur, ramah gawai, dan dapat dioperasikan secara luring penuh di tengah keterbatasan jaringan internet daerah;  
d. **Bagi Penulis (Mahasiswa PTIK):** Menjadi wahana integrasi keilmuan teknologi informasi dan kependidikan dalam merancang media instruksional yang berorientasi pada pemecahan masalah pembelajaran nyata di lapangan.

## D. Gambaran Produk yang Dikembangkan

Produk yang dihasilkan berupa media pembelajaran interaktif berbasis peramban web bergerak (*web-mobile*) yang diberi judul **"Ekologi dan Keanekaragaman Hayati Indonesia"**. Media ini dirancang khusus untuk peserta didik kelas VII SMP (Fase D) dengan pendekatan antarmuka yang bersih, lapang, dan ramah sentuhan layar gawai ponsel pintar (*mobile-friendly*), serta dapat dibuka secara seimbang pada monitor komputer. Produk ini telah dipublikasikan secara daring pada peladen *GitHub Pages* (`https://nurun05.github.io/Website_multimedia-pembelajaran/`) dan dapat dijalankan secara luring penuh (*offline-ready*) menggunakan paket arsip portabel maupun server lokal kelas.

Media pembelajaran ini terbagi ke dalam 12 modul halaman yang terangkai secara berkesinambungan:
1. *Halaman 1 (Beranda):* Memuat banner panorama bentang alam nusantara beresolusi tinggi, identitas mata pelajaran, identitas penyusun, serta tombol pemilihan peran akses ("Anda Siswa" dan "Anda Guru");
2. *Halaman 2 (Petunjuk & Capaian Belajar):* Menyajikan panduan alur belajar mandiri serta rincian tiga Capaian Tujuan Pembelajaran (TP 1, TP 2, TP 3) yang terukur;
3. *Halaman 3 (Menu Utama):* Berupa dasbor navigasi berbasis kartu adaptif yang memetakan seluruh kegiatan belajar, dilengkapi lencana centang hijau sebagai penanda kemajuan belajar siswa;
4. *Halaman 4 (Kegiatan 1 - Materi):* Pengenalan konsep keanekaragaman hayati dengan pertanyaan pemantik kontekstual lingkungan lokal Tandukkalua serta enam kartu akordeon istilah ilmiah (Biodiversitas, Spesies, Habitat, Ekosistem, Endemik, dan Konservasi);
5. *Halaman 5 (Kegiatan 1 - Latihan Formatif):* Tiga butir latihan pilihan ganda reflektif yang memberikan umpan balik pembenahan langsung tanpa penalti nilai rapor;
6. *Halaman 6 (Kegiatan 2 - Materi Tiga Tingkat Kehati):* Tabulasi interaktif tiga tingkat keanekaragaman (Gen, Jenis, Ekosistem) disertai kotak peringatan miskonsepsi kritis dan galeri foto perbandingan nyata di Indonesia;
7. *Halaman 7 (Kegiatan 2 - Latihan Mencocokkan Pasangan):* Papan permainan manipulatif dua kolom yang melatih kemampuan siswa menghubungkan enam contoh organisme dengan tingkat keanekaragamannya;
8. *Halaman 8 (Kegiatan 3 - Materi Persebaran Fauna & Konservasi):* Simulasi lima langkah pengamatan ilmiah, peta garis biogeografi Wallace dan Weber beresolusi tinggi, lima ancaman kepunahan habitat, serta pemilahan strategi pelestarian *in situ* dan *ex situ*;
9. *Halaman 9 (Kegiatan 3 - Latihan Pengurutan Alur):* Papan interaktif penyusunan lima kartu tahapan observasi sains secara logis dan terurut;
10. *Halaman 10 (Kuis Akhir Evaluasi Resmi):* Instrumen evaluasi sumatif 10 butir pilihan ganda yang diproteksi verifikasi pemilihan nama resmi kelas, perekaman potret wajah dokumentasi (*selfie camera* anti-joki), penguncian jawaban per butir, tombol buka pembahasan ilmiah, serta mekanisme jeda waktu hitung mundur 3 detik pascapengiriman;
11. *Halaman 11 (Evaluasi Hasil & Rekomendasi):* Menampilkan diagram lingkaran capaian skor total (skala 100), tiga batang indikator ketuntasan per Tujuan Pembelajaran, status kelulusan (KKM 70), serta tombol rekomendasi remedial atau pengayaan;
12. *Halaman 12 (Rangkuman & Lembar Catatan Mandiri):* Intisari materi komprehensif, glosarium istilah sains, dan fitur cetak lembar kerja siswa berformat ramah kertas (*print-ready layout*).

---

\newpage

# BAB II PEMBAHASAN

## A. Metode Pengembangan (Model MDLC hingga Tahap Testing)

Pengembangan media pembelajaran interaktif ini mengacu secara disiplin pada metodologi **Multimedia Development Life Cycle (MDLC)** menurut Luther (1994) yang disempurnakan oleh Sutopo (2003). Model MDLC merupakan pendekatan rekayasa multimedia instruksional yang terstruktur dan iteratif, terdiri atas enam tahapan: *Concept* (Konsep), *Design* (Perancangan), *Material Collecting* (Pengumpulan Bahan), *Assembly* (Pembuatan/Perakitan), *Testing* (Pengujian), dan *Distribution* (Distribusi). Sesuai dengan batasan ruang lingkup pelaksanaan tugas akhir mata kuliah ini, pembahasan pada Bab II difokuskan pada tahap *Concept* hingga tahap *Testing*, sedangkan tahap *Distribution* diuraikan pada Bab III sebagai rencana tindak lanjut penerapan.

### 1. Alasan Pemilihan Model MDLC
Pemilihan model MDLC didasarkan pada karakteristik produk yang dikembangkan, yakni produk perangkat lunak multimedia pembelajaran interaktif yang memadukan beragam unsur media (teks ilmiah, citra fotografi resolusi tinggi, ilustrasi diagram vektor, simulasi langkah observasi, interaktivitas manipulatif, dan instrumen asesmen diagnostik). Model MDLC memiliki keunggulan mendasar dibandingkan model linier biasa:
a. **Pemisahan Tegas antara Bahan dan Perakitan:** MDLC menyediakan tahap khusus *Material Collecting* sebelum *Assembly*. Pemisahan ini sangat esensial pada materi biologi keanekaragaman hayati; pada tahap ini akurasi bahan ajar, taksonomi spesies, dan keaslian citra fotografi harus dikurasi serta divalidasi terlebih dahulu sebelum disatukan ke dalam alur program (Torondek et al., 2025);
b. **Keluaran Setiap Tahap Bersifat Terukur:** Setiap fase menghasilkan artefak yang jelas; tahap *Concept* menghasilkan spesifikasi kebutuhan pedagogis, tahap *Design* menghasilkan diagram interaksi dan *storyboard*, tahap *Material Collecting* menghasilkan bank materi dan soal, tahap *Assembly* menghasilkan modul perangkat lunak fungsional, dan tahap *Testing* menghasilkan matriks uji coba kotak hitam yang dapat dipertanggungjawabkan (Samalukang et al., 2022);
c. **Sifat Iteratif yang Terkendali:** Apabila pada tahap pengujian ditemukan kendala visual atau logika pedagogis yang kurang tepat, pengembang dapat meninjau kembali tahap perancangan atau pengumpulan bahan tanpa merusak fondasi arsitektur sistem yang telah dibangun.

### 2. Tahap Concept (Konsep dan Analisis Kebutuhan)
Tahap *Concept* meletakkan fondasi filosofis, analisis kebutuhan lapangan, dan perumusan spesifikasi produk.

#### a) Analisis Kebutuhan dari Tiga Aspek
1. **Aspek Proses Pembelajaran:** Hasil pengamatan dan elisitasi menunjukkan bahwa pembelajaran IPA di SMP Negeri 1 Tandukkalua masih didominasi oleh penjelasan satu arah menggunakan buku teks dan papan tulis. Guru kesulitan memvisualisasikan keanekaragaman makhluk hidup karena contoh pada buku sangat terbatas dan gambar tangan di papan tulis cepat dihapus. Saat guru berhalangan hadir, siswa hanya diminta mencatat tanpa bimbingan dan umpan balik sehingga pemahaman siswa tidak terukur. Diperlukan media pendamping interaktif yang menyediakan representasi visual konkret dan membimbing belajar mandiri secara terstruktur;
2. **Aspek Karakteristik Peserta Didik dan Lingkungan:** Peserta didik kelas VII SMP berusia antara 12 hingga 15 tahun. Merujuk pada teori perkembangan kognitif Jean Piaget, siswa pada rentang usia ini berada pada masa transisi dari tahap operasional konkret menuju operasional formal. Mereka membutuhkan bantuan representasi visual konkret untuk memahami konsep klasifikasi dan hierarki hayati yang berdimensi jamak. Selain itu, ketersediaan gawai ponsel pintar pada siswa cukup memadai, namun kapasitas memori internal dan stabilitas kuota internet terbatas. Oleh karena itu, antarmuka media harus ramah gawai potret, berbobot ringan, dan dapat beroperasi secara luring penuh;
3. **Aspek Kurikulum, Capaian Pembelajaran (CP), dan Tujuan Pembelajaran (TP):** Berdasarkan Kurikulum Merdeka Fase D elemen Pemahaman IPA (Kemendikbudristek, 2022), materi keanekaragaman hayati diturunkan ke dalam tiga Tujuan Pembelajaran utama yang menjadi fondasi tiga kegiatan belajar modul.

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
Kelayakan perancangan produk ditinjau secara komprehensif dari lima aspek:
1. *Aspek Pembelajaran (Pedagogis):* Materi Ekologi dan Keanekaragaman Hayati Indonesia sangat tepat disajikan melalui media multimedia interaktif karena menuntut pengamatan visual komparatif. Media ini memposisikan diri sebagai penguat (*reinforcer*) peran guru dan buku teks, bukan penyingkir interaksi kelas;
2. *Aspek Pengguna (User-Centric):* Antarmuka dirancang dengan beban kognitif rendah (*low cognitive load*). Navigasi menggunakan tombol sentuh yang lebar, penataan konsisten, serta tipografi bersih yang ramah bagi mata siswa remaja;
3. *Aspek Teknis (Technical Architecture):* Media dibangun menggunakan standar web murni (HTML5, CSS3, dan Vanilla JavaScript ES6) yang didukung penuh oleh seluruh peramban modern di telepon pintar maupun komputer tanpa memerlukan instalasi aplikasi biner (APK);
4. *Aspek Fasilitas (Infrastructure Readiness):* Media tidak menuntut gawai berspesifikasi tinggi, tidak memungut biaya, dan bebas ketergantungan internet saat dioperasikan secara luring;
5. *Aspek Pengembangan (Development Scope):* Ruang lingkup materi dibatasi secara terukur pada satu subtema kurikulum tiga kegiatan belajar terpadu sehingga seluruh siklus MDLC dapat dituntaskan secara mendalam sesuai jadwal akademik perkuliahan.

### 3. Tahap Design (Perancangan)
Tahap perancangan menerjemahkan konsep ke dalam cetak biru (*blueprint*) desain visual, pemodelan interaksi, dan tata letak instruksional.

#### a) Rasional Desain Visual dan Pedagogis
Desain visual mengadopsi palet warna **Biru Langit Lembut (*Soft Sky Blue*) `#dae9f7`** dipadukan dengan aksen biru bahari `#367bb7` dan tipografi modern *Poppins/Calibri Light*. Pilihan warna ini secara psikologis menghadirkan atmosfer belajar yang sejuk, lapang, dan menurunkan kelelahan visual (*visual fatigue*) siswa saat menatap layar ponsel. Tata letak dirancang adaptif: menampilkan orientasi potret layar penuh pada ponsel pintar (< 768px) dan kontainer memusat proporsional pada monitor komputer (≥ 768px).

#### b) Pemodelan Interaksi Sistem (Use Case, Activity, dan Flowchart)
Pemodelan interaksi sistem dirancang untuk menggambarkan hubungan antarperan pengguna dan alur penjelajahan modul pembelajaran.

1) **Use Case Diagram (Gambar 2.1):**  
Use Case Diagram memodelkan fungsionalitas media berdasarkan dua aktor utama, yakni Peserta Didik (Siswa) dan Guru IPA. Siswa memiliki hak akses terhadap seluruh aktivitas belajar mandiri (mempelajari materi kegiatan 1–3, mengerjakan latihan formatif, melakukan verifikasi foto wajah kamera, menempuh kuis akhir, meninjau hasil evaluasi, dan mencetak rangkuman). Sementara itu, Guru IPA memiliki hak akses khusus melalui autentikasi PIN rahasia untuk memantau rekapitulasi nilai kuis kelas, memeriksa foto kehadiran siswa, mengelola daftar nama siswa (roster), mengekspor nilai ke format CSV/Excel, serta memberikan instruksi ujian ulang remedial.

![Gambar 2.1 Use Case Diagram](file:///d:/MULPED/assets/use-case-diagram.png)  
**Gambar 2.1** *Use Case Diagram: Pemodelan Interaksi Peran Siswa dan Guru IPA pada Media Pembelajaran*

2) **Activity Diagram (Gambar 2.2):**  
Activity Diagram memodelkan alur aktivitas belajar mandiri siswa secara runtut, dimulai dari pembukaan aplikasi pada peramban, pemilihan peran, penelaahan petunjuk dan Tujuan Pembelajaran, eksplorasi materi kegiatan 1 sampai 3 yang diiringi latihan formatif berumpan balik instan, proses verifikasi wajah melalui kamera perangkat, pengerjaan kuis evaluasi sumatif, hingga percabangan kelulusan KKM 70 yang mengarahkan siswa ke pencetakan rangkuman atau bimbingan remedial.

![Gambar 2.2 Activity Diagram](file:///d:/MULPED/assets/activity-diagram.png)  
**Gambar 2.2** *Activity Diagram: Alur Pengalaman Belajar Mandiri Peserta Didik*

3) **Flowchart Alur Sistem (Gambar 2.3):**  
Flowchart alur sistem memperlihatkan logika percabangan navigasi antarmuka web secara menyeluruh, mencakup percabangan peran masuk, transisi antarhalaman modul 1 hingga 12, jeda waktu hitung mundur 3 detik pascapengiriman kuis, serta penegakan ambang kelulusan kriteria ketuntasan minimal (KKM 70).

![Gambar 2.3 Flowchart Sistem](file:///d:/MULPED/assets/flowchart-alur-web.png)  
**Gambar 2.3** *Flowchart Alur Navigasi Sistem dan Ambang Kelulusan KKM 70*

#### c) Pembaruan Rancangan dari Proposal Awal
Selama tahap perancangan mendalam, dilakukan sejumlah pembaruan dari rancangan proposal awal:
- *Evolusi Skema Warna:* Dari skema biru tua dan tombol oranye menyala pada proposal, diperbarui menjadi skema Biru Langit Lembut `#dae9f7` dan biru bahari `#367bb7` yang lebih sejuk dan ramah kognitif remaja;
- *Aset Visual Nyata:* Gambar latar kartun gunung pada beranda digantikan dengan foto asli lanskap biodiversitas Indonesia beresolusi tinggi;
- *Sistem Keamanan Ujian:* Penambahan modul verifikasi potret diri (*webcam selfie*) pada Halaman 10 untuk mencegah pengerjaan kuis oleh joki tugas saat siswa belajar mandiri di rumah.

### 4. Tahap Material Collecting (Pengumpulan Bahan)
Tahap pengumpulan bahan memfokuskan pada kurasi materi ajar sains, standardisasi aset visual, penyusunan *scaffolding*, peta miskonsepsi, serta instrumen evaluasi kuis.

#### a) Pemetaan Kurikulum (CP dan ATP)
Materi dikurasi mengacu pada Keputusan Kepala BSKAP Kemendikbudristek Nomor 008/H/KR/2022 tentang Capaian Pembelajaran IPA Fase D (Kemendikbudristek, 2022). Materi dibagi secara proporsional ke dalam tiga kegiatan belajar yang selaras dengan Tujuan Pembelajaran sebagaimana dipetakan pada Tabel 2.2.

**Tabel 2.2**  
*Pemetaan Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP)*

| Kegiatan Belajar | Capaian Pembelajaran (CP) Elemen Pemahaman IPA | Tujuan Pembelajaran (TP) Terukur | Indikator Keberhasilan Belajar |
| :--- | :--- | :--- | :--- |
| **Kegiatan 1** | Peserta didik memahami interaksi antara makhluk hidup dan lingkungannya. | **TP 1:** Menjelaskan konsep utama dan istilah penting keanekaragaman hayati. | Mengidentifikasi pengertian biodiversitas, membedakan konsep habitat dan ekosistem, serta mengenali kriteria spesies endemik dan konservasi. |
| **Kegiatan 2** | Peserta didik mampu mengklasifikasikan makhluk hidup berdasarkan karakteristik yang diamati. | **TP 2:** Membedakan keanekaragaman tingkat gen, jenis, dan ekosistem melalui contoh konkret. | Membedakan variasi genetik dalam satu spesies (kultivar mangga), perbedaan antarspesies satu famili (kucing dan harimau), serta bentang ekosistem alam. |
| **Kegiatan 3** | Peserta didik merancang upaya mitigasi terhadap kerusakan dan pencemaran lingkungan. | **TP 3:** Menganalisis biogeografi fauna Indonesia, ancaman biodiversitas, dan upaya pelestariannya. | Menjelaskan Garis Wallace-Weber, mengidentifikasi 5 ancaman kepunahan, serta membedakan pelestarian *in situ* vs *ex situ*. |

#### b) Identifikasi Miskonsepsi Kritis dan Strategi Klarifikasi Pedagogis
Guna mencegah kerancuan konsep sains yang kerap dialami peserta didik kelas VII, disusun peta miskonsepsi kritis beserta strategi klarifikasinya pada Tabel 2.3.

**Tabel 2.3**  
*Peta Identifikasi Miskonsepsi Kritis dan Strategi Klarifikasi Pedagogis*

| Konsep Kunci | Miskonsepsi Umum Siswa | Fakta Ilmiah yang Benar | Strategi Klarifikasi pada Media |
| :--- | :--- | :--- | :--- |
| **Habitat vs Ekosistem** | Siswa menganggap habitat dan ekosistem adalah dua istilah yang bermakna persis sama. | Habitat adalah alamat fisik tempat organisme tinggal, sedangkan ekosistem adalah kesatuan interaksi timbal balik antara komunitas makhluk hidup dan lingkungan abiotiknya. | Kotak perbandingan definisi pada kartu akordeon Kegiatan 1 dan butir evaluasi nomor 1. |
| **Tingkat Gen vs Tingkat Jenis** | Siswa mengira variasi rasa dan warna buah (misal mangga arumanis vs manalagi) adalah keanekaragaman tingkat jenis (spesies). | Seluruh varietas mangga berada dalam satu spesies yang sama (*Mangifera indica*). Variasi fisik disebabkan perbedaan susunan genetik (DNA/alel) dalam satu spesies. | Kotak awas miskonsepsi kritis (*critical alert box*) pada Kegiatan 2, foto komparatif, dan latihan mencocokkan. |
| **Pelestarian In Situ vs Ex Situ** | Siswa sering tertukar antara kawasan suaka alam alami dan taman penangkaran buatan. | Pelestarian *in situ* dilakukan langsung di dalam habitat alamiah aslinya (Taman Nasional Komodo), sedangkan *ex situ* dilakukan di luar habitat aslinya (kebun binatang, kebun raya). | Bagan perbandingan dua kolom pada Kegiatan 3 dan simulasi pemilahan contoh pelestarian. |

#### c) Penerapan 12 Prinsip Pembelajaran Multimedia Mayer (2021)
Perancangan seluruh materi dan komponen interaksi mengintegrasikan 12 prinsip CTML Mayer (2021) secara konsisten sebagaimana disajikan pada Tabel 2.4.

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

#### d) Penyusunan Butir Soal Evaluasi Kuis Akhir
Instrumen kuis sumatif pada Halaman 10 terdiri atas 10 butir soal pilihan ganda berbobot masing-masing 10 poin (skor maksimal 100). Soal dirancang mencakup ranah kognitif mengingat (C1), memahami (C2), dan menganalisis (C3–C4) menurut Taksonomi Bloom terevisi, dilengkapi pengecoh logis dan analisis rasional ilmiah sebagaimana disajikan pada Tabel 2.5.

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
Tahap *Assembly* merupakan tahap pengintegrasian seluruh bahan ajar, aset grafis, dan instrumen asesmen ke dalam rancangan perangkat lunak multimedia utuh. Pada tahap ini, seluruh elemen disusun mengikuti alur pedagogis yang terstruktur:
a. **Pengemasan Cangkang Aplikasi Ramping:** Struktur antarmuka diorganisasikan ke dalam satu cangkang web semantik yang mengendalikan transisi aktif-inaktif 12 halaman secara mulus tanpa pemuatan ulang peramban (*seamless single-page navigation*);
b. **Perakitan Logika Interaksi dan Formatif:** Komponen akordeon istilah pada Kegiatan 1, tabulasi komparatif pada Kegiatan 2, dan papan manipulatif pada Kegiatan 3 dirakit menggunakan logika penanganan status terpusat. Status ketuntasan setiap kegiatan disinkronkan langsung ke penanda kemajuan belajar di Menu Utama;
c. **Pengintegrasian Modul Keamanan Ujian dan Portal Guru:** Menyatukan sensor kamera peramban ke dalam alur Halaman 10 untuk memvalidasi kehadiran fisik siswa sebelum membuka soal kuis, menyematkan mekanisme jeda waktu *cooldown* 3 detik pascapengiriman, serta merakit Dasbor Portal Guru berproteksi PIN rahasia untuk memfasilitasi rekapitulasi nilai dan pengelolaan data kelas.

### 6. Tahap Testing (Pengujian)
Tahap *Testing* difokuskan pada verifikasi fungsionalitas media dan pengujian teknis operasional perangkat lunak sebelum melangkah ke tahap validasi ahli dan uji coba pengguna. Pengujian yang dilaksanakan meliputi:
a. **Pengujian Kotak Hitam (*Black-Box Testing*):** Memverifikasi apakah seluruh tombol navigasi, tabulasi, latihan formatif, verifikasi kamera, perhitungan skor kuis, dan pencetakan rangkuman bekerja tepat sesuai spesifikasi masukan dan keluaran yang diharapkan;
b. **Pengujian Kesiapan Operasional Luring (*Offline-First Verification*):** Memverifikasi kemampuan aplikasi untuk dijalankan secara mandiri tanpa sambungan internet menggunakan server mini lokal Python dan berkas arsip portabel;
c. **Pengujian Kompilasi dan Responsivitas:** Menguji keterbacaan tata letak antarmuka pada berbagai ukuran layar gawai ponsel pintar (lebar 360–430 px) hingga layar monitor komputer.

---

## B. Hasil Pengembangan Produk

### 1. Gambaran Produk Jadi dan Cakupan Materi
Produk akhir yang berhasil diwujudkan adalah aplikasi multimedia pembelajaran interaktif berbasis web bergerak yang memuat materi lengkap topik Ekologi dan Keanekaragaman Hayati Indonesia untuk kelas VII SMP. Rekapitulasi cakupan materi, aktivitas interaktif, dan butir evaluasi disajikan pada Tabel 2.6.

**Tabel 2.6**  
*Cakupan Materi Pembelajaran, Kegiatan Interaktif, dan Sebaran Butir Asesmen*

| Modul Belajar | Pokok Bahasan Keilmuan | Bentuk Interaktivitas dan Media | Instrumen Asesmen / Evaluasi |
| :--- | :--- | :--- | :--- |
| **Kegiatan 1** | Konsep dasar biodiversitas, spesies, habitat, ekosistem, endemik, konservasi. | Pertanyaan pemantik kontekstual dan 6 kartu akordeon interaktif. | 3 butir kuis formatif reflektif dengan diagnostik seketika tanpa penalti. |
| **Kegiatan 2** | Tiga tingkat kehati (Gen, Jenis, Ekosistem) dan peringatan miskonsepsi. | Tabulasi 3 tombol interaktif, galeri foto komparatif (mangga, kucing, hutan). | Permainan mencocokkan pasangan 2 kolom (6 contoh organisme). |
| **Kegiatan 3** | Garis Wallace-Weber, fauna endemik, 5 ancaman, konservasi *in situ/ex situ*. | Pemutar kontrol simulasi 5 tahap observasi dan eksplorasi peta biogeografi. | Latihan pengurutan alur kerja 5 kartu observasi sains secara logis. |
| **Kuis Akhir** | Evaluasi sumatif terpadu mengukur ketercapaian TP 1, TP 2, dan TP 3. | Verifikasi kamera selfie anti-joki, penguncian butir soal, dan buka pembahasan. | 10 butir soal kuis sumatif berpengecoh logis (skor total skala 100). |
| **Rangkuman** | Intisari pokok materi dan glosarium istilah penting biologi. | Antarmuka ramah cetak (@media print) untuk lembar catatan mandiri. | Lembar refleksi diri dan catatan mandiri siswa. |

Dokumentasi visual antarmuka produk jadi disediakan dalam sepuluh slot tangkapan layar berikut (Gambar 2.4 hingga Gambar 2.13) yang dilengkapi panduan kondisi pengisian spesifik:

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
Hasil implementasi produk dievaluasi terhadap dokumen perencanaan awal proposal. Matriks perbandingan disajikan pada Tabel 2.7.

**Tabel 2.7**  
*Matriks Kesesuaian Rencana Awal Proposal dengan Hasil Implementasi Aktual*

| Dimensi Pengembangan | Rencana Awal pada Dokumen Proposal | Realisasi Hasil Implementasi Aktual | Status Kesesuaian |
| :--- | :--- | :--- | :--- |
| **Cakupan Model MDLC** | Dibatasi pada tahap *Concept* dan *Design*. | Terlaksana utuh dari *Concept*, *Design*, *Material Collecting*, *Assembly*, hingga *Testing*. | Melampaui rencana proposal |
| **Topik dan Materi Ajar** | Keanekaragaman Hayati Fase D dalam 3 kegiatan belajar. | Terwujud utuh mencakup 3 kegiatan: konsep istilah, 3 tingkat kehati, dan biogeografi/konservasi. | Sesuai 100% |
| **Struktur Modul** | Modul interaktif 12 halaman berorientasi potret ponsel. | 12 halaman berkesinambungan dengan navigasi bilah bawah yang konsisten ("Menu Utama" dan "Berikutnya"). | Sesuai 100% |
| **Prinsip Pembelajaran** | Mengacu pada prinsip CTML Mayer (segmentasi, contiguity). | Menerapkan penuh 12 prinsip pembelajaran multimedia Mayer (2021) secara terpadu. | Diperluas dari rencana |
| **Bentuk Asesmen** | Latihan tiap kegiatan dan tes akhir patokan skor 70. | Latihan formatif tanpa penalti di 3 kegiatan, kuis sumatif 10 butir dengan diagnostik 3 TP dan KKM 70. | Diperluas dengan diagnostik |
| **Kemandirian Operasional**| Tersedia versi daring dan luring (*offline*). | Live di GitHub Pages dan paket luring mandiri menggunakan server lokal Python portabel. | Sesuai 100% |

### 3. Penambahan dan Pengembangan Fitur dari Proposal Awal
Selama tahap perakitan dan pengujian, dilakukan penambahan fitur penting yang belum sempat direncanakan pada proposal awal. Penambahan ini didasarkan pada pertimbangan pedagogis sebagaimana dirangkum pada Tabel 2.8.

**Tabel 2.8**  
*Penambahan Fitur Mutakhir Melampaui Proposal Awal dan Rasional Pedagogisnya*

| Komponen Fitur | Kondisi pada Proposal Awal | Penambahan dan Implementasi Aktual | Rasional dan Nilai Tambah Pedagogis |
| :--- | :--- | :--- | :--- |
| **Citra Visual Beranda & Materi** | Menggunakan ilustrasi vektor grafis kartun pemandangan gunung. | Menggunakan foto asli (*photographic panorama*) alam Indonesia resolusi tinggi. | Memberikan representasi biologis autentik (*authentic learning*) agar siswa mengenali alam nusantara nyata. |
| **Verifikasi Kamera Wajah Siswa** | Kuis akhir dikerjakan bebas tanpa pengawasan fisik. | Modul kamera selfie (*webcam verification*) pada Halaman 10 untuk membuka kuis. | Menegakkan kejujuran akademik (*anti-joki*) dan akuntabilitas belajar mandiri saat guru tidak hadir. |
| **Pengelolaan Roster Kelas** | Daftar nama siswa diwacanakan statis di dalam sistem. | Pengelolaan Roster Mandiri (*Clean Slate* `[]`) di Portal Guru (tambah, bulk paste, hapus). | Memberikan otonomi penuh bagi guru untuk menyesuaikan daftar siswa tanpa ketergantungan pada pengembang. |
| **Proteksi Nilai & Jeda Cooldown** | Skor kuis terbuka bebas dan dapat diulang tanpa batas. | Nama terkunci "Sudah Selesai", privasi skor terlindungi, dan jeda *cooldown* 3 detik. | Mencegah siswa menebak-nebak kunci jawaban secara acak dan melindungi kerahasiaan nilai dari teman sekelas. |
| **Dasbor Pemantauan Guru** | Belum direncanakan pada proposal awal. | Portal Guru terproteksi PIN (`guru123`), rekapitulasi capaian TP, foto siswa, dan ekspor CSV. | Memudahkan guru memetakan kelemahan belajar kelas dan menyusun bimbingan remedial yang tepat sasaran. |

### 4. Hasil Pengujian
Pengujian dilakukan untuk memastikan keandalan fungsionalitas pedagogis dan stabilitas teknis perangkat lunak media.

#### a) Hasil Pengujian Kotak Hitam (*Black-Box Testing*)
Pengujian fungsionalitas antarmuka belajar dilakukan terhadap 16 skenario operasional pada Tabel 2.9.

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

*Tingkat Keberhasilan Pengujian Kotak Hitam: 16 dari 16 Skenario Terpenuhi (100% Valid).*

#### b) Hasil Pengujian Teknis dan Kinerja Eksekusi Sistem
Hasil verifikasi teknis kompilasi aset dan efisiensi memori dirangkum pada Tabel 2.10.

**Tabel 2.10**  
*Hasil Pengujian Verifikasi Teknis Kompilasi dan Kinerja Eksekusi Sistem*

| Parameter Pengujian | Standar Toleransi Gawai Bergerak | Hasil Pengukuran Aktual | Status |
| :--- | :--- | :--- | :---: |
| **Ukuran Total Paket Berkas** | Maksimal 10,0 MB | **~2,2 MB** (termasuk seluruh aset gambar resolusi tinggi) | **Sangat Baik** |
| **Waktu Muat Awal (FCP)** | Di bawah 2,0 detik | **0,4 detik** pada jaringan lokal / luring mandiri | **Optimal** |
| **Waktu Eksekusi Skrip Interaksi**| Di bawah 50 milidetik | **< 15 milidetik** rata-rata respons tombol | **Bebas Lag** |
| **Kesesuaian Tata Letak Responsif**| Lebar layar 360 px hingga 1920 px | Adaptif sempurna tanpa pergeseran horizontal | **Lolos** |

## C. Kekurangan Produk dan Tindak Lanjut

Berdasarkan hasil pengujian teknis operasional dan telaah produk, diidentifikasi tiga kekurangan utama pada perangkat lunak media pembelajaran ini beserta rencana tindak lanjutnya:
1. **Ketergantungan pada Penyimpanan Lokal Peramban (*LocalStorage*):**  
   Data nilai, progres belajar siswa, dan rekapitulasi folder guru saat ini tersimpan pada memori peramban masing-masing gawai. Keunggulannya adalah media dapat beroperasi tanpa internet, namun kekurangannya adalah jika siswa mengerjakan kuis di rumah menggunakan ponsel pribadi, rekap nilai belum terkirim otomatis ke laptop guru di sekolah.  
   *Tindak Lanjut:* Mengintegrasikan arsitektur basis data lokal jaringan area lokal (LAN) atau peladen sinkronisasi nirkabel ringan (seperti SQLite/Firebase lokal kelas) sehingga setiap kali gawai siswa terhubung ke Wi-Fi kelas, data nilai langsung tersinkronkan otomatis.
2. **Ketergantungan pada Izin Sensor Kamera Perangkat:**  
   Fitur verifikasi foto dokumentasi wajah mengandalkan antarmuka API kamera peramban. Pada beberapa model ponsel pintar dengan sistem operasi lama atau peramban dengan pengaturan privasi ketat, dialog izin akses kamera terkadang terblokir otomatis.  
   *Tindak Lanjut:* Menambahkan modul deteksi otomatis status izin peramban dengan panduan visual satu klik untuk mengaktifkan izin kamera pada berbagai jenis peramban ponsel.
3. **Cakupan Bahasan Terbatas pada Satu Subtema Kurikulum:**  
   Produk multimedia yang dirakit saat ini baru mencakup satu bab bahasan, yaitu Ekologi dan Keanekaragaman Hayati Indonesia untuk kelas VII Fase D, sementara materi IPA lainnya belum terakomodasi.  
   *Tindak Lanjut:* Memperluas kerangka modul interaktif ini untuk mencakup bab pembelajaran biologi dan fisika lainnya pada Kurikulum Merdeka Fase D (seperti klasifikasi zat, sistem organ, dan tata surya) menggunakan basis arsitektur modular yang sama.

---

\newpage

# BAB III KESIMPULAN

## A. Kesimpulan

Berdasarkan seluruh rangkaian proses pengembangan multimedia pembelajaran interaktif menggunakan model MDLC hingga tahap *Testing*, diperoleh simpulan utama sebagai berikut:
1. Media pembelajaran interaktif berbasis *web-mobile* bertajuk **"Ekologi dan Keanekaragaman Hayati Indonesia"** telah berhasil dirancang, dihimpun bahannya, dirakit, dan diuji secara fungsional. Media dirancang ramah gawai ponsel pintar, responsif, dan siap digunakan sebagai media pendamping buku teks dan papan tulis di SMP Negeri 1 Tandukkalua;
2. Produk pembelajaran ini mencakup 12 modul halaman terpadu yang memadukan materi konsep dasar, tabulasi visual tiga tingkat keanekaragaman hayati, simulasi tahapan observasi sains, serta peta biogeografi Wallace dan Weber beresolusi tinggi;
3. Penerapan prinsip-prinsip *Cognitive Theory of Multimedia Learning* (CTML) Mayer berhasil dioperasionalkan melalui penyediaan representasi visual konkret, peringatan miskonsepsi kritis, serta latihan formatif berumpan balik instan yang aman bagi psikologi belajar siswa;
4. Hasil pengujian kotak hitam (*black-box testing*) membuktikan bahwa seluruh 16 skenario interaksi sistem dinyatakan valid 100%, sistem keamanan verifikasi kamera wajah dan jeda *cooldown* 3 detik berjalan stabil, serta media memiliki efisiensi tinggi dengan total ukuran berkas ~2,2 MB dan waktu pemuatan 0,4 detik pada moda luring mandiri.

## B. Rencana Validasi Ahli, Uji Coba Pengguna, dan Tahap Distribusi (*Distribution*)

Dalam kerangka model MDLC Luther-Sutopo, tahap *Distribution* merupakan tahap pamungkas untuk menyebarluaskan produk kepada sasaran pengguna setelah melewati evaluasi kelayakan. Mengingat pengembangan pada tugas perkuliahan ini baru sampai pada verifikasi fungsionalitas perangkat lunak, disusun rencana tindak lanjut yang mencakup validasi ahli, uji coba pengguna, dan jalur penyebaran produk sebagai berikut:

### 1. Rencana Validasi Ahli (Materi dan Media)
a. **Validasi Ahli Materi Pembelajaran:** Melibatkan dosen pendidikan biologi/IPA Universitas Negeri Makassar atau guru senior mata pelajaran IPA SMP untuk menilai ketepatan taksonomi spesies, kebenaran konsep biogeografi, keselarasan butir soal evaluasi dengan CP dan ATP Fase D, serta keakuratan pembahasan ilmiah miskonsepsi;  
b. **Validasi Ahli Media Pembelajaran:** Melibatkan dosen teknologi pendidikan/multimedia Jurusan Teknik Informatika dan Komputer FT UNM untuk mengevaluasi kualitas tata letak antarmuka, konsistensi tipografi, navigasi, kesesuaian palet warna Biru Langit Lembut, dan penerapan 12 prinsip Mayer.

### 2. Rencana Uji Coba Terbatas Pengguna di SMP Negeri 1 Tandukkalua
Uji coba terbatas direncanakan melibatkan 6–10 peserta didik kelas VII dan minimal satu orang guru mata pelajaran IPA di SMP Negeri 1 Tandukkalua. Uji coba ini difokuskan untuk mengamati keterbacaan teks pada berbagai ukuran layar ponsel siswa, kemudahan alur belajar mandiri saat guru tidak hadir, respons siswa terhadap latihan interaktif, serta kendala teknis operasional kamera peramban di lingkungan sekolah.

### 3. Rencana Jalur Distribusi Produk (*Distribution Stage*)
Penyebaran produk media pembelajaran interaktif dirancang melalui tiga saluran komplementer:
a. **Distribusi Daring Publik (*Online Deployment*):** Publikasi terbuka melalui peladen awan *GitHub Pages* (`https://nurun05.github.io/Website_multimedia-pembelajaran/`) yang dapat diakses secara langsung oleh guru dan siswa kapan saja melalui peramban ponsel pintar tanpa memerlukan instalasi aplikasi;  
b. **Distribusi Luring Mandiri (*Offline Standalone Mode*):** Penyediaan paket aplikasi portabel yang dijalankan bersama server lokal mini Python (`server.py`) dan skrip otomatisasi satu-klik (`start-server.bat`) pada laptop guru. Komputer guru difungsikan sebagai titik pancar nirkabel (*Wi-Fi portable hotspot*) di ruang kelas sehingga seluruh siswa dapat mengakses media secara bersamaan tanpa memerlukan kuota internet;  
c. **Distribusi Dokumen Ringkas Ramah Cetak (*Print Handout*):** Pemanfaatan fasilitas cetak lembar catatan mandiri pada Halaman 12 yang telah dioptimasi dengan aturan lembar gaya CSS `@media print`, menghasilkan lembar kerja fisik hitam-putih yang hemat tinta sebagai bahan belajar cadangan bagi siswa yang mengalami kendala daya baterai gawai.

## C. Saran Pengembangan Selanjutnya

Berdasarkan pengalaman pengembangan media pembelajaran ini, diajukan beberapa saran:
1. Bagi pendidik IPA di SMP Negeri 1 Tandukkalua, disarankan memanfaatkan media interaktif ini baik sebagai media demonstrasi visual di kelas maupun sebagai panduan penugasan mandiri terstruktur saat guru memiliki agenda dinas di luar kelas;
2. Bagi pengembang lanjutan dan mahasiswa program studi PTIK, disarankan untuk mengintegrasikan sistem sinkronisasi basis data nirkabel terdistribusi dan memperluas cakupan materi modul ke topik-topik sains lainnya pada Kurikulum Merdeka Fase D;
3. Bagi peneliti selanjutnya, disarankan melakukan penelitian tindakan kelas (PTK) atau penelitian eksperimen kuantitatif guna mengukur secara empiris efektivitas media pendamping ini terhadap peningkatan hasil belajar dan retensi memori peserta didik.

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
Berikut naskah 10 butir soal Kuis Akhir pada Halaman 10 beserta kunci jawaban dan analisis rasionalitas ilmiahnya:

1. **Soal 1 (Indikator TP 1 - Pemahaman Habitat vs Ekosistem):**  
   *Pertanyaan:* Banyak orang sering mengira istilah habitat dan ekosistem memiliki pengertian yang sama. Pernyataan manakah di bawah ini yang paling tepat membedakan keduanya?  
   - A. Habitat mencakup seluruh interaksi makhluk hidup, sedangkan ekosistem hanyalah tempat tinggal satu individu saja.  
   - B. Habitat adalah tempat fisik alami tempat makhluk hidup tinggal dan berkembang biak, sedangkan ekosistem adalah kesatuan interaksi timbal balik antara makhluk hidup dan lingkungan abiotiknya. *(Kunci Jawaban: Benar)*  
   - C. Habitat hanya berada di daratan, sedangkan ekosistem hanya ditemukan di lingkungan perairan.  
   - D. Habitat tidak dipengaruhi oleh komponen abiotik, sedangkan ekosistem hanya tersusun atas komponen biotik.  
   *Pembahasan Ilmiah:* Habitat adalah alamat fisik tempat organisme hidup, sedangkan ekosistem merupakan sistem fungsional ekologis yang melibatkan interaksi timbal balik antara komunitas biologis (biotik) dan faktor lingkungan abiotiknya.

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
   - C. Mampu melakukan perkawinan alami dan menghasilkan keturunan yang fertil (subur) *(Kunci Jawaban: Benar)*  
   - D. Memiliki makanan kesukaan yang serupa di habitat aslinya  
   *Pembahasan Ilmiah:* Berdasarkan konsep spesies biologis (*Biological Species Concept*), dua individu tergolong dalam satu spesies (tingkat gen) apabila mampu melakukan perkawinan silang alami dan menghasilkan keturunan yang subur (*fertile offspring*).

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
    *Pembahasan Ilmiah:* Pelestarian *in situ* adalah perlindungan populasi flora dan fauna langsung di dalam habitat alamiah aslinya (taman nasional, cagar alam, suaka margasatwa), sedangkan pelestarian *ex situ* berlangsung di luar habitat aslinya (kebun raya, kebun binatang, bank benih).

---

### Lampiran 3. Panduan Pengisian Slot Gambar dan Tangkapan Layar Aplikasi
Seluruh slot tangkapan layar berlabel `[SLOT GAMBAR 2.4]` sampai `[SLOT GAMBAR 2.13]` pada Bab II dapat diisi langsung oleh penulis menggunakan berkas tangkapan layar asli aplikasi web dengan memperhatikan panduan berikut:
1. Resolusi jendela peramban disarankan menggunakan rasio ponsel cerdas (360×800 px) atau desktop (1280×720 px) dengan format berkas PNG;
2. Pastikan teks materi, gambar spesimen kehati, dan indikator lencana terbaca tajam dan tidak mengalami distorsi proporsi rasio aspek;
3. Setiap gambar ditempatkan di tengah (*centered*) dan diberi keterangan gambar bernomor resmi sesuai Bab II.

---

### Lampiran 4. Draf Pernyataan Penggunaan Kecerdasan Buatan (AI)
Sesuai prinsip keterbukaan akademik pada KONTRAK.md, penulis dapat mencantumkan pernyataan berikut pada lembar pernyataan apabila diwajibkan oleh dosen pengampu atau pedoman fakultas:
>
"Dalam penyusunan draf laporan ini, penulis menggunakan alat bantu kecerdasan buatan (Artificial Intelligence atau AI) untuk merapikan struktur laporan, menyusun draf awal berdasarkan dokumen proposal dan kode sumber proyek, memeriksa kaidah ejaan EYD V, serta menyiapkan berkas sitasi RIS. Seluruh isi, data teknis, hasil pengujian, dan rujukan telah diperiksa oleh penulis, dan penulis bertanggung jawab penuh atas isi naskah."
