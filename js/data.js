/**
 * DATA PEMBELAJARAN MULTIMEDIA INTERAKTIF WEB-MOBILE
 * Mata Pelajaran : IPA Kelas VII SMP (Fase D)
 * Materi         : Ekologi dan Keanekaragaman Hayati Indonesia
 * Pengembang     : Nurun Nisa Ahmad (NIM: 240209501049) - PTIK E 2024
 * Lokasi Studi   : SMP Negeri 1 Tandukkalua
 * Model MDLC     : Luther-Sutopo (Concept, Design, Material Collecting, Assembly, Testing, Distribution)
 */

const APP_DATA = {
  info: {
    title: "Keanekaragaman Hayati Indonesia",
    subtitle: "Modul Multimedia Interaktif Pendamping Belajar Mandiri",
    subject: "Ilmu Pengetahuan Alam (IPA)",
    grade: "Kelas VII SMP - Fase D",
    school: "SMP Negeri 1 Tandukkalua",
    author: "Nurun Nisa Ahmad",
    nim: "240209501049",
    classGroup: "PTIK E 2024",
    model: "Multimedia Development Life Cycle (MDLC)",
    passingScore: 70
  },

  learningObjectives: [
    {
      id: 1,
      code: "TP 1",
      title: "Konsep & Istilah Utama",
      desc: "Peserta didik dapat menjelaskan konsep utama dan istilah penting pada materi keanekaragaman hayati (biodiversitas, spesies, habitat, ekosistem, endemik, konservasi)."
    },
    {
      id: 2,
      code: "TP 2",
      title: "Tiga Tingkat Keanekaragaman",
      desc: "Peserta didik dapat membedakan tingkat gen, tingkat jenis, dan tingkat ekosistem melalui contoh-contoh konkret di lingkungan sekitar dan Indonesia."
    },
    {
      id: 3,
      code: "TP 3",
      title: "Pengamatan, Ancaman & Pelestarian",
      desc: "Peserta didik dapat melakukan pengamatan dan identifikasi sederhana, menganalisis ancaman terhadap keanekaragaman hayati, serta merumuskan upaya pelestariannya (in situ dan ex situ)."
    }
  ],

  activity1: {
    title: "Pengenalan Konsep dan Istilah",
    sparkQuestion: "Mengapa makhluk hidup di sekitar rumah dan sekolah kita di Tandukkalua memiliki bentuk, warna, ukuran, dan suara yang sangat beragam?",
    conceptSummary: "Keanekaragaman hayati (sering disebut biodiversitas) adalah keseluruhan variasi yang ada pada makhluk hidup di bumi. Variasi ini mencakup perbedaan bentuk tubuh, penampilan, susunan gen, jumlah spesies, hingga perbedaan tempat hidup (ekosistem) di mana mereka berinteraksi.",
    terms: [
      {
        id: "biodiversitas",
        title: "Biodiversitas",
        badge: "Konsep Dasar",
        definition: "Singkatan dari biological diversity, yaitu keseluruhan keanekaragaman hayati pada tingkat gen, spesies, dan ekosistem di suatu wilayah.",
        example: "Contoh: Indonesia memiliki biodiversitas tertinggi kedua di dunia untuk keanekaragaman daratan dan nomor satu untuk laut (segitiga terumbu karang)."
      },
      {
        id: "spesies",
        title: "Spesies (Jenis)",
        badge: "Klasifikasi",
        definition: "Satuan dasar klasifikasi makhluk hidup yang terdiri atas sekelompok individu yang memiliki ciri morfologi serupa dan mampu saling kawin menghasilkan keturunan yang fertil (subur).",
        example: "Contoh: Harimau sumatera (Panthera tigris sumatrae) adalah satu spesies, sedangkan kucing domestik (Felis catus) adalah spesies yang berbeda."
      },
      {
        id: "habitat",
        title: "Habitat",
        badge: "Lingkungan Hidup",
        definition: "Tempat atau lingkungan fisik alami di mana suatu organisme atau populasi makhluk hidup tinggal, mencari makan, berlindung, dan berkembang biak.",
        example: "Contoh: Pohon kanopi hutan hujan lebat adalah habitat alami orangutan; terumbu karang dangkal adalah habitat ikan badut (clownfish)."
      },
      {
        id: "ekosistem",
        title: "Ekosistem",
        badge: "Sistem Ekologi",
        definition: "Tatanan kesatuan utuh dan menyeluruh antara segenap unsur lingkungan hidup yang saling mempengaruhi (interaksi timbal balik antara makhluk hidup/biotik dengan lingkungannya/abiotik).",
        example: "Contoh: Ekosistem hutan mangrove yang memadukan pohon bakau, kepiting, ikan, lumpur berlapis, air payau, dan pasang surut air laut."
      },
      {
        id: "endemik",
        title: "Spesies Endemik",
        badge: "Kekayaan Unik",
        definition: "Spesies makhluk hidup yang keberadaannya terbatas dan hanya dapat ditemukan secara alami di wilayah geografis tertentu, serta tidak dijumpai di belahan bumi lain.",
        example: "Contoh: Anoa dan Babirusa endemik di pulau Sulawesi; Komodo endemik di Pulau Komodo & Rinca (NTT); Burung Cenderawasih endemik di tanah Papua."
      },
      {
        id: "konservasi",
        title: "Konservasi",
        badge: "Upaya Keberlanjutan",
        definition: "Upaya perlindungan, pelestarian, dan pemanfaatan sumber daya alam hayati secara bijaksana dan berkelanjutan agar tetap lestari untuk generasi sekarang dan masa depan.",
        example: "Contoh: Penetapan kawasan cagar alam, larangan perburuan satwa langka, dan penangkaran ex situ di kebun raya atau kebun binatang."
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Banyak siswa sering mengira habitat dan ekosistem adalah hal yang sama. Pernyataan manakah yang paling tepat membedakan keduanya?",
        options: [
          { text: "Habitat adalah tempat fisik suatu organisme hidup, sedangkan ekosistem mencakup komunitas makhluk hidup beserta interaksinya dengan lingkungan tak hidup.", isCorrect: true },
          { text: "Habitat adalah kumpulan berbagai jenis hewan di hutan, sedangkan ekosistem hanyalah tumbuhan.", isCorrect: false },
          { text: "Habitat hanya ada di perairan, sedangkan ekosistem hanya berada di wilayah daratan luas.", isCorrect: false },
          { text: "Habitat dan ekosistem tidak ada bedanya, hanya penyebutan bahasa Indonesia dan bahasa Inggris.", isCorrect: false }
        ],
        hint: "Buka kembali kartu Habitat dan Ekosistem. Ingat bahwa ekosistem melibatkan komponen biotik (hidup) dan abiotik (tak hidup) yang berinteraksi dalam satu sistem.",
        feedbackCorrect: "Tepat sekali! Habitat merujuk pada alamat/tempat tinggal fisik organisme, sedangkan ekosistem adalah sistem interaksi timbal balik antara biotik dan abiotik."
      },
      {
        id: 2,
        question: "Satwa Anoa dan Babirusa disebut sebagai hewan 'endemik' Sulawesi. Arti yang tepat dari istilah endemik adalah...",
        options: [
          { text: "Hewan yang terancam punah dan hanya tersisa di kebun binatang seluruh dunia.", isCorrect: false },
          { text: "Spesies yang hanya hidup alami di wilayah geografis tertentu dan tidak ditemukan di wilayah lain di dunia.", isCorrect: true },
          { text: "Hewan yang berasal dari luar negeri lalu berkembang biak cepat dan merusak tanaman lokal.", isCorrect: false },
          { text: "Semua hewan pemakan tumbuhan yang berhabitat di kawasan pegunungan tinggi.", isCorrect: false }
        ],
        hint: "Periksa kembali kartu Spesies Endemik. Cermati batasan wilayah persebaran alami makhluk hidup tersebut.",
        feedbackCorrect: "Benar sekali! Endemik berarti spesies asli yang wilayah persebaran alaminya sangat terbatas di tempat tertentu saja, seperti Anoa di Sulawesi."
      },
      {
        id: 3,
        question: "Pengertian 'Konservasi Keanekaragaman Hayati' yang paling tepat adalah...",
        options: [
          { text: "Memanfaatkan seluruh hewan dan tumbuhan di alam secara maksimal tanpa ada batasan kuota.", isCorrect: false },
          { text: "Memindahkan seluruh hewan liar dari hutan ke kandang laboratorium untuk penelitian sel.", isCorrect: false },
          { text: "Upaya perlindungan, pelestarian, dan pengelolaan sumber daya hayati secara bijaksana untuk menjamin keberlanjutannya.", isCorrect: true },
          { text: "Mengganti seluruh hutan primer menjadi perkebunan kelapa sawit demi kemajuan ekonomi desa.", isCorrect: false }
        ],
        hint: "Baca kembali kartu Konservasi. Konservasi berfokus pada perlindungan, pelestarian, dan pemanfaatan yang lestari.",
        feedbackCorrect: "Hebat! Konservasi bertujuan melindungi kelangsungan hidup spesies dan ekosistemnya sekaligus menjaga keseimbangan alam."
      }
    ]
  },

  activity2: {
    title: "Tiga Tingkat Keanekaragaman Hayati",
    intro: "Keanekaragaman hayati tidak hanya dilihat dari banyaknya jenis hewan atau tumbuhan, melainkan dipelajari dalam tiga tingkatan hierarkis: tingkat gen, tingkat jenis (spesies), dan tingkat ekosistem.",
    misconceptionAlert: "Catatan Kritis (Awas Tertukar!): Siswa sering salah membedakan variasi tingkat gen dengan tingkat jenis. Kuncinya: Variasi tingkat GEN terjadi di dalam SATU SPESIES yang sama (masih bisa saling kawin menghasilkan anak fertil). Sedangkan variasi tingkat JENIS terjadi antara DUA SPESIES BERBEDA (meskipun berkerabat dekat/satu genus/famili).",
    levels: [
      {
        id: "gen",
        name: "Tingkat Gen",
        colorClass: "level-gen",
        colorCode: "#0284c7",
        tagline: "Variasi susunan genetik di dalam SATU spesies yang sama",
        concept: "Setiap individu dalam satu spesies memiliki materi genetik unik yang diwariskan dari orang tuanya. Perbedaan gen ini memunculkan variasi bentuk, rasa, warna, atau ketahanan tubuh pada organisme yang sama.",
        characteristics: [
          "Terjadi dalam satu spesies (spesies sama)",
          "Bisa saling kawin dan menghasilkan keturunan fertil",
          "Menyebabkan varietas, ras, atau kultivar berbeda"
        ],
        examples: [
          "Varietas Mangga: Mangga Arumanis, Manalagi, Golek, Gadung (semuanya adalah Mangifera indica)",
          "Varietas Padi: Rojolele, IR64, Ciherang, Mentik Wangi (semuanya adalah Oryza sativa)",
          "Variasi Kucing Domestik: Kucing berbulu oranye, putih, hitam, atau calico (Felis catus)",
          "Variasi Bunga Mawar: Mawar merah, putih, kuning, dan merah muda"
        ]
      },
      {
        id: "jenis",
        name: "Tingkat Jenis (Spesies)",
        colorClass: "level-jenis",
        colorCode: "#15803d",
        tagline: "Perbedaan sifat dan ciri ANTARSPESIES yang berbeda",
        concept: "Variasi yang tampak jelas di antara spesies-spesies berbeda yang hidup di suatu tempat. Sering kali diamati pada spesies yang masih tergolong dalam satu keluarga (famili) atau genus yang sama.",
        characteristics: [
          "Terjadi antarspesies yang berbeda",
          "Ciri fisik, anatomi, dan sifat biologis berbeda tegas",
          "Tidak menghasilkan keturunan subur jika disilangkan"
        ],
        examples: [
          "Famili Kucing (Felidae): Harimau (Panthera tigris), Singa (Panthera leo), Kucing (Felis catus)",
          "Famili Palem-paleman (Arecaceae): Pohon Kelapa, Pohon Aren, Pohon Pinang, Pohon Sawit",
          "Famili Polong-polongan (Fabaceae): Kacang tanah, Kacang hijau, Kacang merah, Kedelai",
          "Famili Terung-terungan (Solanaceae): Terung, Tomat, Cabai, Kentang"
        ]
      },
      {
        id: "ekosistem",
        name: "Tingkat Ekosistem",
        colorClass: "level-ekosistem",
        colorCode: "#c2410c",
        tagline: "Keanekaragaman lingkungan fisik beserta interaksi makhluk hidup di dalamnya",
        concept: "Variasi bentang alam, iklim, kondisi tanah, air, serta jaring-jaring makanan yang terbentuk antara komunitas makhluk hidup dengan lingkungan abiotiknya di berbagai belahan bumi.",
        characteristics: [
          "Dipengaruhi letak geografis, suhu, curah hujan, dan jenis tanah",
          "Memiliki kombinasi flora dan fauna khas",
          "Menghasilkan rantai makanan dan daur biogeokimia unik"
        ],
        examples: [
          "Ekosistem Terumbu Karang: Air jernih dangkal tropis, kaya karang, spons, dan aneka ikan hias",
          "Ekosistem Hutan Mangrove: Daerah pasang surut berlumpur pantai tropis dengan pohon bakau",
          "Ekosistem Hutan Hujan Tropis: Pohon tinggi kanopi rapat, curah hujan tinggi sepanjang tahun",
          "Ekosistem Padang Rumput / Sabana: Curah hujan rendah-sedang, didominasi rerumputan dan semak"
        ]
      }
    ],
    matchingPairs: [
      { id: "m1", item: "Mangga Arumanis & Mangga Manalagi", category: "gen", label: "Tingkat Gen" },
      { id: "m2", item: "Harimau Sumatera & Kucing Rumah", category: "jenis", label: "Tingkat Jenis" },
      { id: "m3", item: "Ekosistem Terumbu Karang Bunaken", category: "ekosistem", label: "Tingkat Ekosistem" },
      { id: "m4", item: "Padi Varietas Rojolele & Ciherang", category: "gen", label: "Tingkat Gen" },
      { id: "m5", item: "Pohon Kelapa, Pinang, dan Aren", category: "jenis", label: "Tingkat Jenis" },
      { id: "m6", item: "Hutan Mangrove Muara Sungai", category: "ekosistem", label: "Tingkat Ekosistem" }
    ]
  },

  activity3: {
    title: "Pengamatan, Ancaman, & Pelestarian",
    steps: [
      {
        step: 1,
        title: "Pengamatan Ciri Morfologi",
        desc: "Siswa mengamati dan mencatat ciri fisik luar makhluk hidup (ukuran, warna, bentuk daun, paruh, atau bulu) di lingkungan terdekat sekolah atau rumah.",
        actionIcon: "eye"
      },
      {
        step: 2,
        title: "Identifikasi Hubungan Spesies",
        desc: "Siswa menentukan apakah perbedaan yang ditemukan terjadi pada individu dalam satu spesies yang sama atau merupakan spesies yang berbeda.",
        actionIcon: "git-commit"
      },
      {
        step: 3,
        title: "Pengelompokan Tingkat Keragaman",
        desc: "Siswa mengklasifikasikan temuan tersebut ke dalam tingkatan yang sesuai (keanekaragaman gen, jenis, atau ekosistem).",
        actionIcon: "layers"
      },
      {
        step: 4,
        title: "Analisis Faktor Lingkungan",
        desc: "Siswa menganalisis faktor lingkungan abiotik (tanah, air, suhu, cahaya) serta interaksi biotik yang mendukung kelangsungan hidup organisme.",
        actionIcon: "sun"
      },
      {
        step: 5,
        title: "Penarikan Kesimpulan & Rekomendasi",
        desc: "Siswa merumuskan kesimpulan status keanekaragaman hayati dan tindakan sederhana untuk menjaga kelestariannya.",
        actionIcon: "check-circle"
      }
    ],
    biogeography: {
      title: "Persebaran Fauna Indonesia (Garis Wallace & Weber)",
      zones: [
        {
          zone: "Wilayah Barat (Asiatis / Dangkalan Sunda)",
          area: "Sumatera, Jawa, Bali, Kalimantan",
          characteristic: "Didominasi mamalia bertubuh besar, kera, dan burung bersuara merdu.",
          examples: "Gajah Sumatera, Harimau Jawa/Sumatera, Badak Bercula Satu, Orangutan, Banteng."
        },
        {
          zone: "Wilayah Peralihan (Wallacea)",
          area: "Sulawesi, Maluku, Nusa Tenggara (dibatasi garis Wallace di barat & garis Weber di timur)",
          characteristic: "Wilayah percampuran unik dengan tingkat endemisitas sangat tinggi.",
          examples: "Anoa, Babirusa, Komodo (Pulau Komodo), Burung Maleo, Tarsius."
        },
        {
          zone: "Wilayah Timur (Australis / Dangkalan Sahul)",
          area: "Papua dan pulau-pulau sekitarnya",
          characteristic: "Didominasi hewan berkantung dan burung-burung dengan bulu warna-warni cerah.",
          examples: "Burung Cenderawasih, Kasuari, Kanguru Pohon, Kuskus, Kakaktua Jambul Kuning."
        }
      ]
    },
    threats: [
      { name: "Kerusakan & Fragmentasi Habitat", desc: "Penebangan hutan liar (deforestasi), alih fungsi lahan menjadi pemukiman atau perkebunan monokultur." },
      { name: "Perburuan & Perdagangan Liar", desc: "Penangkapan satwa langka untuk dipelihara secara ilegal atau diperjualbelikan bagian tubuhnya." },
      { name: "Spesies Asing Invasif", desc: "Masuknya organisme asing dari luar negeri yang memakan atau menggeser spesies lokal alami (misal: ikan predator invasif)." },
      { name: "Pencemaran Lingkungan", desc: "Pencemaran plastik di laut yang merusak terumbu karang, serta limbah kimia dan pestisida berlebihan." },
      { name: "Perubahan Iklim Global", desc: "Pemanasan suhu air laut menyebabkan pemutihan karang (coral bleaching) dan hilangnya habitat es/pegunungan." }
    ],
    conservation: {
      inSitu: {
        title: "Pelestarian In Situ (Di Habitat Asli)",
        concept: "Upaya menjaga dan melestarikan populasi flora dan fauna langsung di dalam habitat alamiahnya sendiri.",
        places: "Taman Nasional (TN Komodo, TN Lore Lindu Sulawesi), Cagar Alam, Suaka Margasatwa, Taman Wisata Alam."
      },
      exSitu: {
        title: "Pelestarian Ex Situ (Di Luar Habitat Asli)",
        concept: "Upaya perlindungan flora dan fauna yang dilakukan dengan memindahkan mereka ke luar habitat aslinya untuk dipelihara dan dikembangbiakkan secara terkontrol.",
        places: "Kebun Raya (Kebun Raya Bogor), Kebun Binatang, Taman Safari, Taman Akuarium, Bank Benih dan Kultur Jaringan."
      }
    },
    scrambledSteps: [
      { id: "s4", stepNum: 4, text: "Menganalisis faktor lingkungan abiotik dan interaksi biotik pendukung organisme" },
      { id: "s1", stepNum: 1, text: "Mengamati dan mencatat ciri fisik (morfologi) makhluk hidup di lingkungan sekitar" },
      { id: "s5", stepNum: 5, text: "Menyimpulkan status keanekaragaman hayati dan merumuskan saran kelestariannya" },
      { id: "s2", stepNum: 2, text: "Mengidentifikasi apakah variasi ciri terjadi pada satu spesies atau beda spesies" },
      { id: "s3", stepNum: 3, text: "Mengelompokkan temuan variasi ke dalam tingkat gen, jenis, atau ekosistem" }
    ]
  },

  finalQuiz: [
    // TP 1: Konsep & Istilah (3 soal)
    {
      id: 1,
      tpId: 1,
      tpCode: "TP 1",
      question: "Keseluruhan variasi penampilan, bentuk tubuh, jumlah, dan susunan sifat genetik pada semua makhluk hidup di biosfer bumi disebut sebagai...",
      options: [
        { key: "A", text: "Komunitas Biologi" },
        { key: "B", text: "Keanekaragaman Hayati (Biodiversitas)" },
        { key: "C", text: "Populasi Spesies" },
        { key: "D", text: "Suksesi Ekologis" }
      ],
      correctKey: "B",
      explanation: "Keanekaragaman hayati (biodiversitas) merupakan istilah resmi untuk mencakup variasi total seluruh makhluk hidup, dari gen, spesies, hingga ekosistem."
    },
    {
      id: 2,
      tpId: 1,
      tpCode: "TP 1",
      question: "Dua individu makhluk hidup digolongkan ke dalam SATU SPESIES yang sama apabila keduanya memiliki ciri utama, yaitu...",
      options: [
        { key: "A", text: "Memiliki warna dan ukuran tubuh yang sama persis tanpa ada sedikit pun perbedaan." },
        { key: "B", text: "Tinggal di benua yang sama dan memakan jenis makanan yang serupa." },
        { key: "C", text: "Mampu saling kawin dan menghasilkan keturunan yang fertil (subur/dapat berketurunan lagi)." },
        { key: "D", text: "Mempunyai usia hidup yang sama sejak lahir hingga mati." }
      ],
      correctKey: "C",
      explanation: "Definisi biologis spesies adalah kelompok organisme yang mampu melakukan perkawinan silang secara alami dan menghasilkan keturunan yang subur (fertil)."
    },
    {
      id: 3,
      tpId: 1,
      tpCode: "TP 1",
      question: "Burung Cenderawasih hanya hidup secara alami di kawasan Papua dan pulau sekitarnya, serta tidak dijumpai alami di pulau Jawa atau benua lain. Oleh karena itu, Cenderawasih disebut sebagai spesies...",
      options: [
        { key: "A", text: "Endemik" },
        { key: "B", text: "Invasif" },
        { key: "C", text: "Kosmopolit" },
        { key: "D", text: "Exotic" }
      ],
      correctKey: "A",
      explanation: "Spesies endemik adalah spesies yang sebaran geografis alaminya terbatas pada kawasan tertentu di bumi dan tidak dijumpai di kawasan lain."
    },

    // TP 2: Tiga Tingkat Keanekaragaman (4 soal)
    {
      id: 4,
      tpId: 2,
      tpCode: "TP 2",
      question: "Di pasar terdapat berbagai varietas buah mangga seperti mangga arumanis, mangga manalagi, mangga golek, dan mangga gedong. Keanekaragaman tersebut termasuk ke dalam keanekaragaman tingkat...",
      options: [
        { key: "A", text: "Tingkat Jenis (Spesies)" },
        { key: "B", text: "Tingkat Ekosistem" },
        { key: "C", text: "Tingkat Gen" },
        { key: "D", text: "Tingkat Famili" }
      ],
      correctKey: "C",
      explanation: "Semua varietas mangga tersebut berada dalam satu spesies yang sama (Mangifera indica). Perbedaan rasa, aroma, dan bentuk disebabkan oleh variasi gen."
    },
    {
      id: 5,
      tpId: 2,
      tpCode: "TP 2",
      question: "Perhatikan kelompok organisme berikut:\n1) Harimau Sumatera\n2) Singa Afrika\n3) Macan Tutul\n4) Kucing Kampung\nOrganisme-organisme di atas menunjukkan contoh keanekaragaman hayati pada tingkat...",
      options: [
        { key: "A", text: "Tingkat Gen karena mereka masih bisa kawin silang" },
        { key: "B", text: "Tingkat Jenis (Spesies) karena mereka merupakan spesies berbeda dalam satu keluarga Felidae" },
        { key: "C", text: "Tingkat Ekosistem karena semuanya hidup di sabana" },
        { key: "D", text: "Tingkat Biosfer buatan manusia" }
      ],
      correctKey: "B",
      explanation: "Harimau, singa, macan tutul, dan kucing adalah spesies-spesies berbeda (Panthera tigris, Panthera leo, Panthera pardus, Felis catus) yang berkerabat dalam satu famili."
    },
    {
      id: 6,
      tpId: 2,
      tpCode: "TP 2",
      question: "Di pesisir pantai Indonesia terdapat hutan mangrove dengan pohon bakau dan kepiting bakau, sedangkan di dasar perairan laut dangkal terdapat terumbu karang dengan ikan badut. Perbedaan kedua bentang alam tersebut merupakan contoh keanekaragaman tingkat...",
      options: [
        { key: "A", text: "Tingkat Ekosistem" },
        { key: "B", text: "Tingkat Genetik" },
        { key: "C", text: "Tingkat Varietas" },
        { key: "D", text: "Tingkat Ras" }
      ],
      correctKey: "A",
      explanation: "Mangrove dan terumbu karang adalah dua tipe ekosistem perairan berbeda dengan kondisi abiotik dan komposisi komunitas makhluk hidup yang berbeda."
    },
    {
      id: 7,
      tpId: 2,
      tpCode: "TP 2",
      question: "Seorang siswa menemukan pohon kelapa (Cocos nucifera) dan pohon aren (Arenga pinnata) di kebun sekolah. Siswa tersebut berpendapat bahwa kedua pohon itu menunjukkan variasi tingkat gen. Apakah pendapat siswa tersebut benar?",
      options: [
        { key: "A", text: "Benar, karena bentuk daunnya sama-sama menyirip mirip janur." },
        { key: "B", text: "Benar, karena pohon kelapa dan aren tumbuh di kebun yang sama." },
        { key: "C", text: "Salah, karena kelapa dan aren adalah dua spesies yang berbeda (variasi tingkat jenis/spesies)." },
        { key: "D", text: "Salah, karena tumbuhan tidak memiliki keanekaragaman gen." }
      ],
      correctKey: "C",
      explanation: "Kelapa dan aren adalah spesies berbeda (beda genus dan beda spesies) meskipun berada dalam satu famili Arecaceae. Maka keduanya merupakan tingkat jenis, bukan tingkat gen."
    },

    // TP 3: Pengamatan, Ancaman & Pelestarian (3 soal)
    {
      id: 8,
      tpId: 3,
      tpCode: "TP 3",
      question: "Fauna khas Pulau Sulawesi seperti Anoa dan Babirusa tergolong ke dalam zona persebaran fauna...",
      options: [
        { key: "A", text: "Zona Asiatis (Dangkalan Sunda)" },
        { key: "B", text: "Zona Peralihan (Wallacea)" },
        { key: "C", text: "Zona Australis (Dangkalan Sahul)" },
        { key: "D", text: "Zona Neartik" }
      ],
      correctKey: "B",
      explanation: "Sulawesi terletak di antara Garis Wallace dan Garis Weber, yang disebut sebagai zona Peralihan (Wallacea) dengan satwa endemik sangat khas."
    },
    {
      id: 9,
      tpId: 3,
      tpCode: "TP 3",
      question: "Salah satu ancaman terbesar bagi keanekaragaman hayati hutan di Indonesia adalah deforestasi (penebangan hutan secara masif). Dampak ekologis paling serius dari ancaman ini adalah...",
      options: [
        { key: "A", text: "Meningkatnya luas area perkebunan sawit dan kayu komersial" },
        { key: "B", text: "Hilangnya habitat alami yang berakibat pada kepunahan spesies dan bencana banjir/longsor" },
        { key: "C", text: "Suhu udara lokal menjadi lebih sejuk dan nyaman" },
        { key: "D", text: "Hewan hutan menjadi lebih jinak dan mudah dipelihara" }
      ],
      correctKey: "B",
      explanation: "Kerusakan habitat merupakan penyebab utama kepunahan spesies di dunia karena memutus rantai makanan dan menghilangkan tempat berlindung hewan."
    },
    {
      id: 10,
      tpId: 3,
      tpCode: "TP 3",
      question: "Pemerintah mendirikan Kebun Raya Bogor dan Kebun Binatang Ragunan untuk mengembangbiakkan tumbuhan dan satwa langka yang terancam punah di luar habitat aslinya. Bentuk pelestarian ini disebut pelestarian...",
      options: [
        { key: "A", text: "In Situ" },
        { key: "B", text: "Ex Situ" },
        { key: "C", text: "Semi-Alami" },
        { key: "D", text: "In Vitro Alam" }
      ],
      correctKey: "B",
      explanation: "Pelestarian ex situ adalah usaha pelestarian flora dan fauna yang dilakukan di luar habitat aslinya, seperti di kebun raya, kebun binatang, atau taman safari."
    }
  ],

  summaryCards: [
    {
      activity: "Kegiatan 1: Konsep & Istilah",
      points: [
        "Keanekaragaman hayati (biodiversitas) adalah seluruh variasi pada makhluk hidup yang meliputi gen, jenis, dan ekosistem.",
        "Spesies adalah kelompok individu yang mampu saling kawin dan menghasilkan keturunan fertil (subur).",
        "Habitat adalah tempat tinggal fisik alami, sedangkan ekosistem mencakup komunitas beserta interaksinya dengan lingkungan fisik.",
        "Spesies endemik adalah spesies yang hanya ditemukan secara alami di wilayah tertentu (contoh: Anoa di Sulawesi).",
        "Konservasi adalah perlindungan, pelestarian, dan pemanfaatan hayati secara arif dan berkelanjutan."
      ]
    },
    {
      activity: "Kegiatan 2: Tiga Tingkat Keanekaragaman",
      points: [
        "Tingkat Gen: Variasi di dalam SATU SPESIES yang sama (contoh: varietas mangga arumanis vs manalagi, padi rojolele vs ciherang).",
        "Tingkat Jenis: Variasi ANTARSPESIES BERBEDA dalam satu famili/genus (contoh: harimau, singa, kucing; kelapa, aren, pinang).",
        "Tingkat Ekosistem: Variasi lingkungan dan komunitas organisme (contoh: hutan hujan tropis, sabana, terumbu karang, mangrove).",
        "Kunci Pembeda: Jika masih satu spesies = Gen; jika sudah beda spesies = Jenis."
      ]
    },
    {
      activity: "Kegiatan 3: Pengamatan & Pelestarian",
      points: [
        "Langkah pengamatan ilmiah: Mengamati morfologi -> Mengidentifikasi hubungan spesies -> Mengelompokkan tingkat -> Menganalisis lingkungan -> Menarik kesimpulan.",
        "Fauna Indonesia dibagi 3 zona: Asiatis (Barat), Peralihan/Wallacea (Tengah/Sulawesi), Australis (Timur/Papua).",
        "5 Ancaman utama: Deforestasi/kerusakan habitat, perburuan liar, spesies asing invasif, pencemaran, perubahan iklim.",
        "Pelestarian In Situ: Dilakukan di habitat aslinya (Taman Nasional, Cagar Alam, Suaka Margasatwa).",
        "Pelestarian Ex Situ: Dilakukan di luar habitat aslinya (Kebun Raya, Kebun Binatang, Bank Benih)."
      ]
    }
  ],

  glossary: [
    { term: "Biodiversitas", meaning: "Keanekaragaman organisme hidup dari semua sumber daya alam di biosfer." },
    { term: "Spesies", meaning: "Populasi organisme yang dapat melakukan perkawinan silang dan menghasilkan keturunan fertil." },
    { term: "Varietas", meaning: "Kelompok tanaman atau hewan di dalam satu spesies yang memiliki perbedaan sifat turunan (contoh: varietas padi)." },
    { term: "Endemik", meaning: "Makhluk hidup asli yang hanya dijumpai pada wilayah geografis terbatas dan spesifik." },
    { term: "In Situ", meaning: "Konservasi sumber daya genetik atau spesies di dalam ekosistem dan habitat aslinya." },
    { term: "Ex Situ", meaning: "Konservasi komponen keanekaragaman hayati di luar habitat aslinya." },
    { term: "Garis Wallace", meaning: "Garis biogeografis batas antara fauna Asiatis (barat) dan fauna Peralihan (Wallacea)." },
    { term: "Garis Weber", meaning: "Garis batas biogeografis antara fauna Peralihan (Wallacea) dan fauna Australis (timur)." }
  ],

  guidedNotesQuestions: [
    {
      no: 1,
      title: "Konsep Dasar Keanekaragaman Hayati",
      prompt: "Keanekaragaman hayati adalah keseluruhan variasi makhluk hidup yang meliputi 3 tingkatan, yaitu tingkat ............................, tingkat ............................, dan tingkat ............................"
    },
    {
      no: 2,
      title: "Perbedaan Tingkat Gen dan Tingkat Jenis",
      prompt: "Variasi tingkat gen terjadi pada individu di dalam ............................ spesies yang sama, contohnya .......................................................\nSedangkan variasi tingkat jenis terjadi antara ............................ spesies yang berbeda, contohnya ......................................................."
    },
    {
      no: 3,
      title: "Wilayah Persebaran Fauna Indonesia",
      prompt: "Wilayah peralihan (Wallacea) dibatasi oleh garis ............................ di sebelah barat dan garis ............................ di sebelah timur. Contoh hewan endemik Sulawesi adalah ............................ dan ............................"
    },
    {
      no: 4,
      title: "Upaya Pelestarian Hayati",
      prompt: "Pelestarian in situ dilakukan di ............................ habitat aslinya, contohnya di ............................\nSedangkan pelestarian ex situ dilakukan di ............................ habitat aslinya, contohnya di ............................"
    }
  ]
};

