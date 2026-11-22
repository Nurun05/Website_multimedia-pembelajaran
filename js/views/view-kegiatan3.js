/**
 * VIEW-KEGIATAN3.JS - MODUL HALAMAN 8 & 9 (PENGAMATAN, ANCAMAN, PELESTARIAN & LATIHAN 3)
 * Sesuai Storyboard Proposal Halaman 15 & Kurikulum IPA Fase D SMP
 */

const ViewKegiatan3 = {
  // Data Spesimen untuk Laboratorium Simulasi Interaktif Pengamatan Ilmiah
  simSpecimens: [
    {
      id: 'mangga',
      name: 'Varietas Buah Mangga',
      subname: 'Mangga Arumanis vs Mangga Golek',
      latin: 'Mangifera indica',
      icon: '🥭',
      category: 'Flora Tropis',
      level: 'gen',
      levelName: 'Tingkat Gen',
      badgeColor: '#0284c7',
      morphology: {
        title: 'Ciri Fisik Luar (Morfologi)',
        traits: 'Bentuk buah lonjong meruncing (Golek) vs agak membulat (Arumanis), aroma manis khas, kulit hijau kekuningan, tekstur serat daging berbeda.',
        microscopeNote: 'Kedua pohon memiliki struktur bunga, daun, dan organ reproduksi yang identik karena merupakan satu spesies yang sama.'
      },
      speciesRelation: {
        correctAnswer: 'intra',
        title: 'Satu Spesies Sama (Intra-spesies)',
        desc: 'Kedua tanaman mangga ini tergolong ke dalam satu spesies ilmiah yang sama (Mangifera indica). Variasi terjadi akibat perbedaan susunan materi genetik (DNA).'
      },
      environment: {
        habitat: 'Kebun dan pekarangan iklim tropis dataran rendah',
        factors: 'Suhu 24-30°C, cahaya matahari penuh, curah hujan sedang, tanah gembur berhumus.',
        threat: 'Alih fungsi lahan kebun menjadi pemukiman padat serta serangan hama penggerek buah.'
      },
      conservation: {
        correctAnswer: 'exsitu',
        typeName: 'Pelestarian Ex Situ (Kebun Plasma Nutfah & Bank Benih)',
        detail: 'Pengumpulan bibit varietas unggul lokal di kebun plasma nutfah pertanian, bank benih buah nusantara, dan budidaya tanaman pekarangan.'
      }
    },
    {
      id: 'harimau',
      name: 'Harimau Sumatera',
      subname: 'Satwa Karnivora Puncak Hutan Tropis',
      latin: 'Panthera tigris sumatrae',
      icon: '🐅',
      category: 'Fauna Asiatis',
      level: 'jenis',
      levelName: 'Tingkat Jenis',
      badgeColor: '#0f766e',
      morphology: {
        title: 'Ciri Fisik Luar (Morfologi)',
        traits: 'Bulu oranye gelap loreng hitam rapat, cakar kuat dapat ditarik masuk, taring tajam kokoh, tubuh kekar mamalia pemangsa.',
        microscopeNote: 'Secara morfologi dan genetika sangat berbeda dengan kucing domestik (Felis catus) meski sama-sama masuk famili Felidae.'
      },
      speciesRelation: {
        correctAnswer: 'inter',
        title: 'Perbedaan Antarspesies (Inter-spesies)',
        desc: 'Harimau dan kucing rumah merupakan dua spesies yang terpisah secara biologis (beda genus dan spesies). Tidak dapat saling kawin menghasilkan keturunan fertil.'
      },
      environment: {
        habitat: 'Hutan hujan tropis dataran rendah hingga pegunungan pulau Sumatera',
        factors: 'Kanopi hutan lebat alami, ketersediaan sumber air sungai, dan populasi mangsa ungulata (rusa/babi).',
        threat: 'Deforestasi (penebangan hutan) untuk kelapa sawit serta perburuan liar ilegal.'
      },
      conservation: {
        correctAnswer: 'insitu',
        typeName: 'Pelestarian In Situ (Taman Nasional Kerinci Seblat)',
        detail: 'Perlindungan ketat kawasan habitat asli di Taman Nasional Kerinci Seblat dan patroli anti-perburuan liar.'
      }
    },
    {
      id: 'komodo',
      name: 'Komodo',
      subname: 'Kadal Purba Raksasa Endemik Wallacea',
      latin: 'Varanus komodoensis',
      icon: '🦎',
      category: 'Fauna Endemik Wallacea',
      level: 'jenis',
      levelName: 'Tingkat Jenis (Spesies Endemik)',
      badgeColor: '#b45309',
      morphology: {
        title: 'Ciri Fisik Luar (Morfologi)',
        traits: 'Panjang tubuh mencapai 3 meter, berat hingga 70 kg, lidah kuning bercabang, sisik bertulang tebal (osteoderm), liur mengandung racun antikoagulan.',
        microscopeNote: 'Spesies unik yang hanya ada di Indonesia (endemik) dan tidak dijumpai di belahan bumi lain.'
      },
      speciesRelation: {
        correctAnswer: 'inter',
        title: 'Spesies Khusus & Endemik Kepulauan',
        desc: 'Spesies purba tersendiri dalam genus Varanus yang berevolusi jutaan tahun terisolasi di kepulauan zona Wallacea Indonesia.'
      },
      environment: {
        habitat: 'Sabana kering terbuka, padang rumput bersemak, dan pesisir pantai pulau kecil',
        factors: 'Iklim panas kering, suhu 30-35°C, ketersediaan mangsa rusa timor dan babi hutan.',
        threat: 'Penyempitan ruang jelajah mangsa, aktivitas wisata tanpa batas, dan perubahan iklim global.'
      },
      conservation: {
        correctAnswer: 'insitu',
        typeName: 'Pelestarian In Situ (Taman Nasional Komodo)',
        detail: 'Penetapan kawasan konservasi Cagar Biosfer Alam TN Komodo (Situs Warisan Dunia UNESCO) di habitat aslinya.'
      }
    },
    {
      id: 'karang',
      name: 'Terumbu Karang Bunaken',
      subname: 'Komunitas Bentang Laut Dangkal Tropis',
      latin: 'Ekosistem Karang Tropis',
      icon: '🪸',
      category: 'Ekosistem Laut Tropis',
      level: 'ekosistem',
      levelName: 'Tingkat Ekosistem',
      badgeColor: '#1e40af',
      morphology: {
        title: 'Ciri Fisik Luar (Morfologi)',
        traits: 'Ratusan spesies karang keras (Acropora) dan lunak membentuk tebing vertikal bawah laut, dihuni aneka ikan hias, penyu, dan spons.',
        microscopeNote: 'Koral bersimbiosis mutualisme dengan alga mikroskopis zooxanthellae yang menghasilkan warna-warni memukau.'
      },
      speciesRelation: {
        correctAnswer: 'ekosistem',
        title: 'Interaksi Komunitas Biotik & Lingkungan Abiotik',
        desc: 'Bukan satu atau dua spesies individu, melainkan keseluruhan sistem tatanan bentang alam laut dengan rantai makanan kompleks.'
      },
      environment: {
        habitat: 'Perairan laut dangkal tropis hangat bersuhu 26-28°C',
        factors: 'Air laut jernih tembus cahaya matahari, salinitas seimbang, sirkulasi arus laut yang baik.',
        threat: 'Pemanasan suhu air laut pemicu pemutihan karang (coral bleaching) serta sampah plastik.'
      },
      conservation: {
        correctAnswer: 'insitu',
        typeName: 'Pelestarian In Situ (Taman Nasional Laut Bunaken)',
        detail: 'Zonasi perlindungan terumbu karang, larangan penggunaan bom/racun ikan, dan rehabilitasi terumbu karang buatan.'
      }
    }
  ],

  activeSpecimenIndex: 0,
  activeSimStep: 1,
  simState: {},

  renderMateri(container) {
    const act = APP_DATA.activity3;
    container.innerHTML = `
      <!-- Wadah Laboratorium Simulasi Interaktif Pengamatan Ilmiah -->
      <div id="simulasi-interaktif-container">
        ${this.getSimulationHTML()}
      </div>

      <!-- Bagian B: Persebaran Fauna Wallace & Weber -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">🗺️</span>
          <div class="card-title">Persebaran Fauna (Garis Wallace &amp; Weber)</div>
        </div>
        <div style="text-align:center; margin-bottom:10px;">
          <img src="assets/peta-persebaran-fauna-indonesia.jpg" alt="Peta Persebaran Fauna Indonesia Berdasarkan Garis Wallace dan Garis Weber" style="width:100%; max-height:280px; object-fit:contain; border-radius:var(--radius-sm); border:1px solid #cbd5e1;">
        </div>
        <div style="font-size:12px; color:#334155; line-height:1.65;">
          <div>• <strong>Zona Asiatis (Barat):</strong> Mamalia besar seperti Gajah Sumatera, Badak Jawa, Orangutan.</div>
          <div>• <strong>Zona Peralihan / Wallacea (Tengah/Sulawesi):</strong> Satwa endemik khas seperti Anoa, Babirusa, Komodo, Burung Maleo.</div>
          <div>• <strong>Zona Australis (Timur/Papua):</strong> Hewan berkantung &amp; burung berbulu indah seperti Cenderawasih dan Kasuari.</div>
        </div>
      </div>

      <!-- Bagian C: 5 Ancaman Utama -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">⚠️</span>
          <div class="card-title">5 Ancaman Utama Kehati</div>
        </div>
        <ol style="margin-left:18px; font-size:12px; color:#475569; line-height:1.65;">
          ${act.threats.map(th => `
            <li><strong>${th.name}:</strong> ${th.desc}</li>
          `).join('')}
        </ol>
      </div>

      <!-- Bagian D: Pelestarian In Situ vs Ex Situ -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">🛡️</span>
          <div class="card-title">Bentuk Upaya Pelestarian</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:12px;">
          <div style="background:#ecfdf5; border-left:4px solid var(--feedback-correct); padding:10px; border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
            <strong style="color:var(--feedback-correct);">${act.conservation.inSitu.title}:</strong><br>
            ${act.conservation.inSitu.concept}<br>
            <em>Contoh:</em> ${act.conservation.inSitu.places}
          </div>
          <div style="background:var(--sky-50); border-left:4px solid var(--primary-sky); padding:10px; border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
            <strong style="color:var(--primary-sky);">${act.conservation.exSitu.title}:</strong><br>
            ${act.conservation.exSitu.concept}<br>
            <em>Contoh:</em> ${act.conservation.exSitu.places}
          </div>
        </div>
      </div>
    `;
  },

  initInteractiveSimulation() {
    const container = document.querySelector('#simulasi-interaktif-container');
    if (container) {
      container.innerHTML = this.getSimulationHTML();
    }
  },

  getSimulationHTML() {
    const sp = this.simSpecimens[this.activeSpecimenIndex];
    const state = this.simState[sp.id] || {
      observed: false,
      speciesAnswer: null,
      levelAnswer: null,
      threatAnswer: null,
      conservationAnswer: null,
      reportReady: false
    };

    return `
      <div class="card" style="border:1.5px solid var(--pastel-sky-border); background:#ffffff;">
        <!-- Header Simulasi Interaktif -->
        <div class="card-header-styled" style="border-bottom:1.5px solid var(--pastel-sky); padding-bottom:10px;">
          <span style="font-size:22px;">🔬</span>
          <div>
            <div class="card-title" style="color:var(--primary-sky-deep);">Laboratorium Simulasi Pengamatan Ilmiah</div>
            <div style="font-size:11px; color:#64748b;">Praktik 5 Langkah Kerja Ilmiah IPA Fase D SMP (Observasi, Identifikasi, Klasifikasi, Analisis, & Konservasi)</div>
          </div>
        </div>

        <!-- 1. Pilihan Spesimen Lapangan (Chips Interaktif) -->
        <div style="margin-top:12px; margin-bottom:8px;">
          <label style="font-size:11.5px; font-weight:700; color:#334155; display:block; margin-bottom:6px;">
            📍 Pilih Objek / Spesimen Pengamatan:
          </label>
          <div class="sim-specimen-bar">
            ${this.simSpecimens.map((item, idx) => `
              <button type="button" class="sim-specimen-chip ${idx === this.activeSpecimenIndex ? 'active' : ''}" onclick="ViewKegiatan3.selectSpecimen(${idx})">
                <span>${item.icon}</span>
                <span>${item.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Kartu Identitas Objek Terpilih -->
        <div style="background:var(--pastel-sky-subtle); border:1px solid var(--pastel-sky-border); border-radius:8px; padding:10px 14px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:32px;">${sp.icon}</span>
            <div>
              <strong style="font-size:13.5px; color:var(--primary-sky-deep);">${sp.name}</strong>
              <div style="font-size:11.5px; color:#64748b;"><em>${sp.latin}</em> • ${sp.category}</div>
            </div>
          </div>
          <span style="background:#ffffff; color:${sp.badgeColor}; border:1px solid ${sp.badgeColor}; font-size:11px; font-weight:700; padding:3px 10px; border-radius:12px;">
            Target: ${sp.levelName}
          </span>
        </div>

        <!-- 2. Stepper 5 Langkah Kerja Ilmiah -->
        <div class="sim-steps-header">
          <button type="button" class="sim-step-tab ${this.activeSimStep === 1 ? 'active' : ''} ${state.observed ? 'completed' : ''}" onclick="ViewKegiatan3.goToSimStep(1)">
            1. 🔍 Morfologi
          </button>
          <button type="button" class="sim-step-tab ${this.activeSimStep === 2 ? 'active' : ''} ${state.speciesAnswer ? 'completed' : ''}" onclick="ViewKegiatan3.goToSimStep(2)">
            2. 🧬 Taksonomi
          </button>
          <button type="button" class="sim-step-tab ${this.activeSimStep === 3 ? 'active' : ''} ${state.levelAnswer ? 'completed' : ''}" onclick="ViewKegiatan3.goToSimStep(3)">
            3. 📊 Kehati
          </button>
          <button type="button" class="sim-step-tab ${this.activeSimStep === 4 ? 'active' : ''} ${state.threatAnswer ? 'completed' : ''}" onclick="ViewKegiatan3.goToSimStep(4)">
            4. ⚠️ Ancaman
          </button>
          <button type="button" class="sim-step-tab ${this.activeSimStep === 5 ? 'active' : ''} ${state.reportReady ? 'completed' : ''}" onclick="ViewKegiatan3.goToSimStep(5)">
            5. 🛡️ Laporan
          </button>
        </div>

        <!-- 3. Workspace Interaktif untuk Tiap Langkah -->
        <div class="sim-stage-card">
          ${this.getStepWorkspaceHTML(sp, state)}
        </div>

        <!-- Tombol Kontrol Bawah -->
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap; margin-top:8px;">
          <div style="display:flex; gap:6px;">
            <button type="button" class="btn btn-outline" style="font-size:11.5px; padding:6px 12px;" onclick="ViewKegiatan3.goToSimStep(Math.max(1, ViewKegiatan3.activeSimStep - 1))" ${this.activeSimStep === 1 ? 'disabled' : ''}>
              ◀ Sebelumnya
            </button>
            <button type="button" class="btn btn-secondary" style="font-size:11.5px; padding:6px 12px;" onclick="ViewKegiatan3.goToSimStep(Math.min(5, ViewKegiatan3.activeSimStep + 1))" ${this.activeSimStep === 5 ? 'disabled' : ''}>
              Berikutnya ▶
            </button>
          </div>
          <button type="button" class="btn btn-outline" style="font-size:11.5px; padding:6px 12px; color:#dc2626;" onclick="ViewKegiatan3.resetSimulation()">
            🔄 Reset Spesimen Ini
          </button>
        </div>
      </div>
    `;
  },

  getStepWorkspaceHTML(sp, state) {
    // Langkah 1: Observasi Ciri Morfologi
    if (this.activeSimStep === 1) {
      return `
        <div>
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="background:var(--primary-sky); color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:10px;">Langkah 1</span>
            <strong style="color:var(--primary-sky-deep); font-size:13.5px;">Pengamatan Ciri Fisik Luar (Morfologi)</strong>
          </div>
          <p style="font-size:12px; color:#475569; line-height:1.5; margin-bottom:12px;">
            Gunakan lensa pembesar pengamatan lapangan untuk mengamati dan mencatat ciri fisik luar, bentuk, warna, dan struktur morfologi spesimen <strong>${sp.name}</strong>:
          </p>

          <div style="text-align:center; padding:16px; background:#f8fafc; border:1.5px dashed #cbd5e1; border-radius:8px; margin-bottom:12px;">
            ${!state.observed ? `
              <div style="font-size:36px; margin-bottom:6px;">🔍</div>
              <div style="font-size:12px; color:#64748b; margin-bottom:10px;">Lensa pengamatan belum diaktifkan. Klik tombol di bawah untuk memeriksa sampel.</div>
              <button type="button" class="btn btn-primary" style="font-size:12px; padding:8px 16px; font-weight:700;" onclick="ViewKegiatan3.performAction('observe')">
                🔍 Aktifkan Lensa Pengamatan Fisik
              </button>
            ` : `
              <div style="background:#ecfdf5; border:1.5px solid #86efac; border-radius:8px; padding:12px; text-align:left;">
                <div style="font-weight:700; color:#166534; font-size:12.5px; margin-bottom:4px;">
                  ✓ Hasil Observasi Ciri Morfologi Terdeteksi:
                </div>
                <div style="font-size:12px; color:#334155; line-height:1.5;">
                  <strong>Ciri Fisik Teramati:</strong> ${sp.morphology.traits}
                </div>
                <div style="font-size:11.5px; color:#15803d; margin-top:6px; background:#ffffff; padding:6px 10px; border-radius:6px; border:1px solid #bbf7d0;">
                  💡 <strong>Catatan Laboratorium:</strong> ${sp.morphology.detail}
                </div>
              </div>
            `}
          </div>

          ${state.observed ? `
            <div style="text-align:right;">
              <button type="button" class="btn btn-primary" style="font-size:12px; padding:8px 16px;" onclick="ViewKegiatan3.goToSimStep(2)">
                Lanjut ke Langkah 2: Relasi Taksonomi ▶
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }

    // Langkah 2: Identifikasi Hubungan Spesies
    if (this.activeSimStep === 2) {
      return `
        <div>
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="background:var(--primary-sky); color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:10px;">Langkah 2</span>
            <strong style="color:var(--primary-sky-deep); font-size:13.5px;">Identifikasi Hubungan Spesies (Taksonomi)</strong>
          </div>
          <p style="font-size:12px; color:#475569; line-height:1.5; margin-bottom:12px;">
            Berdasarkan data observasi, tentukan relasi biologis yang terjadi pada spesimen <strong>${sp.name}</strong>:
          </p>

          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:12px;">
            <button type="button" class="sim-choice-btn ${state.speciesAnswer === 'intra' ? (sp.speciesRelation.correctAnswer === 'intra' ? 'selected-correct' : 'selected-wrong') : ''}" onclick="ViewKegiatan3.performAction('species', 'intra')">
              <span>🧬</span>
              <div>
                <strong>Variasi di dalam SATU SPESIES yang sama (Intra-spesies)</strong>
                <div style="font-size:11px; opacity:0.85;">Organisme dapat saling kawin menghasilkan keturunan fertil.</div>
              </div>
            </button>

            <button type="button" class="sim-choice-btn ${state.speciesAnswer === 'inter' ? (sp.speciesRelation.correctAnswer === 'inter' ? 'selected-correct' : 'selected-wrong') : ''}" onclick="ViewKegiatan3.performAction('species', 'inter')">
              <span>🐾</span>
              <div>
                <strong>Perbedaan ANTARSPESIES yang berbeda (Inter-spesies)</strong>
                <div style="font-size:11px; opacity:0.85;">Memiliki batas biologis dan tidak menghasilkan keturunan subur.</div>
              </div>
            </button>

            <button type="button" class="sim-choice-btn ${state.speciesAnswer === 'ekosistem' ? (sp.speciesRelation.correctAnswer === 'ekosistem' ? 'selected-correct' : 'selected-wrong') : ''}" onclick="ViewKegiatan3.performAction('species', 'ekosistem')">
              <span>🌊</span>
              <div>
                <strong>Tatanan Komunitas Bentang Alam (Ekosistem)</strong>
                <div style="font-size:11px; opacity:0.85;">Interaksi utuh antara berbagai ragam spesies dengan lingkungan fisik abiotik.</div>
              </div>
            </button>
          </div>

          ${state.speciesAnswer ? `
            <div style="background:${state.speciesAnswer === sp.speciesRelation.correctAnswer ? '#f0fdf4' : '#fef2f2'}; border:1px solid ${state.speciesAnswer === sp.speciesRelation.correctAnswer ? '#86efac' : '#fca5a5'}; border-radius:8px; padding:10px 12px; margin-bottom:12px; font-size:12px;">
              <strong>${state.speciesAnswer === sp.speciesRelation.correctAnswer ? '✓ Analisis Tepat!' : '⚠️ Kurang Tepat, Perhatikan Pembahasan:'}</strong>
              <div style="margin-top:3px; color:#334155;">${sp.speciesRelation.desc}</div>
            </div>
            ${state.speciesAnswer === sp.speciesRelation.correctAnswer ? `
              <div style="text-align:right;">
                <button type="button" class="btn btn-primary" style="font-size:12px; padding:8px 16px;" onclick="ViewKegiatan3.goToSimStep(3)">
                  Lanjut ke Langkah 3: Pengelompokan Kehati ▶
                </button>
              </div>
            ` : ''}
          ` : ''}
        </div>
      `;
    }

    // Langkah 3: Pengelompokan Tingkat Keragaman
    if (this.activeSimStep === 3) {
      return `
        <div>
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="background:var(--primary-sky); color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:10px;">Langkah 3</span>
            <strong style="color:var(--primary-sky-deep); font-size:13.5px;">Pengelompokan Tingkat Keanekaragaman Hayati</strong>
          </div>
          <p style="font-size:12px; color:#475569; line-height:1.5; margin-bottom:12px;">
            Klasifikasikan spesimen <strong>${sp.name}</strong> ke dalam salah satu dari tiga tingkatan kehati:
          </p>

          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:8px; margin-bottom:12px;">
            <button type="button" class="sim-choice-btn ${state.levelAnswer === 'gen' ? (sp.level === 'gen' ? 'selected-correct' : 'selected-wrong') : ''}" style="flex-direction:column; align-items:flex-start;" onclick="ViewKegiatan3.performAction('level', 'gen')">
              <span style="font-size:18px;">🧬</span>
              <strong>Tingkat Gen</strong>
              <span style="font-size:10.5px; opacity:0.85;">Variasi satu spesies</span>
            </button>

            <button type="button" class="sim-choice-btn ${state.levelAnswer === 'jenis' ? (sp.level === 'jenis' ? 'selected-correct' : 'selected-wrong') : ''}" style="flex-direction:column; align-items:flex-start;" onclick="ViewKegiatan3.performAction('level', 'jenis')">
              <span style="font-size:18px;">🌿</span>
              <strong>Tingkat Jenis</strong>
              <span style="font-size:10.5px; opacity:0.85;">Beda spesies / famili</span>
            </button>

            <button type="button" class="sim-choice-btn ${state.levelAnswer === 'ekosistem' ? (sp.level === 'ekosistem' ? 'selected-correct' : 'selected-wrong') : ''}" style="flex-direction:column; align-items:flex-start;" onclick="ViewKegiatan3.performAction('level', 'ekosistem')">
              <span style="font-size:18px;">🗺️</span>
              <strong>Tingkat Ekosistem</strong>
              <span style="font-size:10.5px; opacity:0.85;">Bentang alam komunitas</span>
            </button>
          </div>

          ${state.levelAnswer ? `
            <div style="background:${state.levelAnswer === sp.level ? '#f0fdf4' : '#fef2f2'}; border:1px solid ${state.levelAnswer === sp.level ? '#86efac' : '#fca5a5'}; border-radius:8px; padding:10px 12px; margin-bottom:12px; font-size:12px;">
              <strong>${state.levelAnswer === sp.level ? '✓ Klasifikasi Benar!' : '⚠️ Klasifikasi Belum Tepat'}</strong>
              <div style="margin-top:3px; color:#334155;">
                Spesimen <strong>${sp.name}</strong> mewakili <strong>${sp.levelName}</strong> karena ${sp.speciesRelation.desc}
              </div>
            </div>
            ${state.levelAnswer === sp.level ? `
              <div style="text-align:right;">
                <button type="button" class="btn btn-primary" style="font-size:12px; padding:8px 16px;" onclick="ViewKegiatan3.goToSimStep(4)">
                  Lanjut ke Langkah 4: Analisis Lingkungan ▶
                </button>
              </div>
            ` : ''}
          ` : ''}
        </div>
      `;
    }

    // Langkah 4: Analisis Faktor Lingkungan & Ancaman
    if (this.activeSimStep === 4) {
      return `
        <div>
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="background:var(--primary-sky); color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:10px;">Langkah 4</span>
            <strong style="color:var(--primary-sky-deep); font-size:13.5px;">Analisis Lingkungan Abiotik &amp; Faktor Ancaman</strong>
          </div>
          <p style="font-size:12px; color:#475569; line-height:1.5; margin-bottom:12px;">
            Periksa interaksi lingkungan abiotik dan tentukan ancaman terbesar bagi populasi <strong>${sp.name}</strong>:
          </p>

          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:10px 12px; margin-bottom:12px; font-size:12px; line-height:1.5;">
            <div>🏞️ <strong>Habitat Alami:</strong> ${sp.environment.habitat}</div>
            <div style="margin-top:3px;">☀️ <strong>Faktor Abiotik Penunjang:</strong> ${sp.environment.factors}</div>
          </div>

          <label style="font-size:11.5px; font-weight:700; color:#334155; display:block; margin-bottom:6px;">
            Pilih Ancaman Utama yang Paling Mengancam Spesimen Ini:
          </label>
          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:12px;">
            <button type="button" class="sim-choice-btn ${state.threatAnswer === 'habitat' ? 'selected-correct' : ''}" onclick="ViewKegiatan3.performAction('threat', 'habitat')">
              <span>🌲</span>
              <span><strong>Alih Fungsi Lahan & Fragmentasi Habitat:</strong> Penebangan pohon dan konversi hutan/pekarangan.</span>
            </button>
            <button type="button" class="sim-choice-btn ${state.threatAnswer === 'perburuan' ? 'selected-correct' : ''}" onclick="ViewKegiatan3.performAction('threat', 'perburuan')">
              <span>🎯</span>
              <span><strong>Perburuan & Perdagangan Liar:</strong> Penangkapan satwa ilegal untuk komersial atau dipelihara.</span>
            </button>
            <button type="button" class="sim-choice-btn ${state.threatAnswer === 'iklim' ? 'selected-correct' : ''}" onclick="ViewKegiatan3.performAction('threat', 'iklim')">
              <span>🔥</span>
              <span><strong>Pencemaran & Kenaikan Suhu Iklim Global:</strong> Kerusakan lingkungan akibat suhu panas dan sampah.</span>
            </button>
          </div>

          ${state.threatAnswer ? `
            <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:8px; padding:10px 12px; margin-bottom:12px; font-size:12px;">
              <strong style="color:#92400e;">⚠️ Dampak Tekanan Lingkungan:</strong>
              <div style="margin-top:3px; color:#78350f;">${sp.environment.threat}</div>
            </div>
            <div style="text-align:right;">
              <button type="button" class="btn btn-primary" style="font-size:12px; padding:8px 16px;" onclick="ViewKegiatan3.goToSimStep(5)">
                Lanjut ke Langkah 5: Upaya Pelestarian ▶
              </button>
            </div>
          ` : ''}
        </div>
      `;
    }

    // Langkah 5: Penentuan Upaya Pelestarian & Laporan Observasi
    if (this.activeSimStep === 5) {
      return `
        <div>
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:8px;">
            <span style="background:var(--primary-sky); color:#fff; font-size:11px; font-weight:700; padding:2px 8px; border-radius:10px;">Langkah 5</span>
            <strong style="color:var(--primary-sky-deep); font-size:13.5px;">Penentuan Upaya Pelestarian &amp; Terbit Laporan</strong>
          </div>
          <p style="font-size:12px; color:#475569; line-height:1.5; margin-bottom:12px;">
            Berdasarkan hasil analisis, tentukan rekomendasi pelestarian yang paling tepat untuk <strong>${sp.name}</strong>:
          </p>

          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; margin-bottom:12px;">
            <button type="button" class="sim-choice-btn ${state.conservationAnswer === 'insitu' ? (sp.conservation.correctAnswer === 'insitu' ? 'selected-correct' : 'selected-wrong') : ''}" style="flex-direction:column; align-items:flex-start;" onclick="ViewKegiatan3.performAction('conservation', 'insitu')">
              <span style="font-size:20px;">🏞️</span>
              <strong>Pelestarian In Situ</strong>
              <span style="font-size:10.5px; opacity:0.85;">Di habitat asli (Taman Nasional / Cagar Alam)</span>
            </button>

            <button type="button" class="sim-choice-btn ${state.conservationAnswer === 'exsitu' ? (sp.conservation.correctAnswer === 'exsitu' ? 'selected-correct' : 'selected-wrong') : ''}" style="flex-direction:column; align-items:flex-start;" onclick="ViewKegiatan3.performAction('conservation', 'exsitu')">
              <span style="font-size:20px;">🏛️</span>
              <strong>Pelestarian Ex Situ</strong>
              <span style="font-size:10.5px; opacity:0.85;">Di luar habitat asli (Kebun Benih / Taman Safari)</span>
            </button>
          </div>

          ${state.conservationAnswer ? `
            <div style="background:#f0fdf4; border:1px solid #86efac; border-radius:8px; padding:10px 12px; margin-bottom:12px; font-size:12px;">
              <strong style="color:#166534;">🛡️ Rekomendasi Konservasi Terpilih:</strong>
              <div style="margin-top:3px; color:#334155;"><strong>${sp.conservation.typeName}:</strong> ${sp.conservation.detail}</div>
            </div>

            ${!state.reportReady ? `
              <div style="text-align:center; margin-top:14px;">
                <button type="button" class="btn btn-primary" style="font-size:13px; padding:10px 20px; font-weight:700;" onclick="ViewKegiatan3.performAction('generateReport')">
                  📋 Terbitkan Laporan Hasil Simulasi Ilmiah
                </button>
              </div>
            ` : `
              <div class="sim-report-badge">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1.5px solid #86efac; padding-bottom:8px; margin-bottom:8px;">
                  <div>
                    <strong style="color:#166534; font-size:13.5px;">📋 LAPORAN OBSERVASI ILMIAH KEANEKARAGAMAN HAYATI</strong>
                    <div style="font-size:11px; color:#475569;">Kurikulum IPA SMP Fase D • SMP Negeri 1 Tandukkalua</div>
                  </div>
                  <span style="background:#22c55e; color:#fff; font-size:10px; font-weight:700; padding:3px 8px; border-radius:10px;">
                    ✓ TERVERIFIKASI
                  </span>
                </div>

                <div style="font-size:12px; color:#334155; line-height:1.6;">
                  <div><strong>1. Objek Spesimen:</strong> ${sp.name} (<em>${sp.latin}</em>)</div>
                  <div><strong>2. Ciri Morfologi Utama:</strong> ${sp.morphology.traits}</div>
                  <div><strong>3. Tingkat Keanekaragaman:</strong> <span style="color:${sp.badgeColor}; font-weight:700;">${sp.levelName}</span></div>
                  <div><strong>4. Status Habitat & Ancaman:</strong> ${sp.environment.threat}</div>
                  <div><strong>5. Upaya Pelestarian:</strong> ${sp.conservation.typeName}</div>
                </div>

                <div style="background:#ffffff; border:1px dashed #22c55e; border-radius:6px; padding:8px 12px; margin-top:10px; font-size:11.5px; color:#15803d; text-align:center; font-weight:600;">
                  🎉 Selamat! Kamu telah berhasil menuntaskan seluruh 5 langkah investigasi ilmiah untuk spesimen ini secara aktif!
                </div>
              </div>
            `}
          ` : ''}
        </div>
      `;
    }
  },

  selectSpecimen(index) {
    this.activeSpecimenIndex = index;
    this.activeSimStep = 1;
    this.initInteractiveSimulation();
  },

  goToSimStep(stepNum) {
    this.activeSimStep = stepNum;
    this.initInteractiveSimulation();
  },

  performAction(actionType, param) {
    const sp = this.simSpecimens[this.activeSpecimenIndex];
    if (!this.simState[sp.id]) {
      this.simState[sp.id] = {
        observed: false,
        speciesAnswer: null,
        levelAnswer: null,
        threatAnswer: null,
        conservationAnswer: null,
        reportReady: false
      };
    }
    const state = this.simState[sp.id];

    if (actionType === 'observe') {
      state.observed = true;
    } else if (actionType === 'species') {
      state.speciesAnswer = param;
    } else if (actionType === 'level') {
      state.levelAnswer = param;
    } else if (actionType === 'threat') {
      state.threatAnswer = param;
    } else if (actionType === 'conservation') {
      state.conservationAnswer = param;
    } else if (actionType === 'generateReport') {
      state.reportReady = true;
    }

    this.initInteractiveSimulation();
  },

  resetSimulation() {
    const sp = this.simSpecimens[this.activeSpecimenIndex];
    delete this.simState[sp.id];
    this.activeSimStep = 1;
    this.initInteractiveSimulation();
  },

  renderAnimationStep(stepNum) {
    AppState.anim3.currentStep = stepNum;
    const stepData = APP_DATA.activity3.steps[stepNum - 1];
    const badge = document.querySelector('#anim-step-badge');
    const title = document.querySelector('#anim-step-title');
    const desc = document.querySelector('#anim-step-desc');

    if (badge) badge.textContent = `Langkah ${stepData.step} dari 5`;
    if (title) title.textContent = stepData.title;
    if (desc) desc.textContent = stepData.desc;

    document.querySelectorAll('.step-dot').forEach((dot, idx) => {
      dot.style.background = (idx + 1 === stepNum) ? 'var(--primary-sky)' : '#cbd5e1';
    });
  },

  togglePlayAnimation() {
    if (AppState.anim3.isPlaying) {
      this.pauseAnimation();
    } else {
      this.startAnimation();
    }
  },

  startAnimation() {
    AppState.anim3.isPlaying = true;
    const btn = document.querySelector('#btn-anim-play');
    if (btn) btn.textContent = '⏸ Jeda';

    AppState.anim3.timer = setInterval(() => {
      let next = AppState.anim3.currentStep + 1;
      if (next > AppState.anim3.totalSteps) {
        this.pauseAnimation();
        this.renderAnimationStep(1);
        return;
      }
      this.renderAnimationStep(next);
    }, 4500);
  },

  pauseAnimation() {
    AppState.anim3.isPlaying = false;
    clearInterval(AppState.anim3.timer);
    const btn = document.querySelector('#btn-anim-play');
    if (btn) btn.textContent = '▶ Putar Animasi';
  },

  nextAnimationStep() {
    this.pauseAnimation();
    let next = AppState.anim3.currentStep + 1;
    if (next > AppState.anim3.totalSteps) next = 1;
    this.renderAnimationStep(next);
  },

  resetAnimation() {
    this.pauseAnimation();
    this.renderAnimationStep(1);
  },

  renderLatihan(container) {
    if (AppState.exercise3.items.length === 0) {
      AppState.exercise3.items = [...APP_DATA.activity3.scrambledSteps];
    }

    const verifierHTML = window.StudentVerifier ? StudentVerifier.getCardHTML('latihan3') : '';

    container.innerHTML = `
      <div style="margin-bottom:12px;">
        <h2 style="font-size:16px; font-weight:700; color:var(--primary-sky-deep);">Latihan Interaktif 3</h2>
        <div style="font-size:12px; color:var(--text-muted);">
          Susun 5 kartu langkah pengamatan dan identifikasi di bawah ini secara runtut dari langkah ke-1 sampai ke-5 menggunakan tombol panah:
        </div>
      </div>

      <!-- Wadah Verifikasi Identitas & Foto Siswa (Anti-Joki) -->
      <div id="verifier-container-latihan3">
        ${verifierHTML}
      </div>

      <div class="card">
        <div id="sortable-cards-list" class="sortable-list">
          ${this.getSortCardsHTML()}
        </div>

        <div style="display:flex; gap:8px; margin-top:14px;">
          <button type="button" class="btn btn-primary" style="flex:1;" onclick="ViewKegiatan3.checkSort()">
            🔍 Periksa Urutan
          </button>
          <button type="button" class="btn btn-outline" onclick="ViewKegiatan3.resetSort()">
            🔄 Acak Ulang
          </button>
        </div>

        <div id="sort-feedback" class="feedback-box"></div>
      </div>
    `;
  },

  initSortableDOM() {
    if (AppState.exercise3.items.length === 0) {
      AppState.exercise3.items = [...APP_DATA.activity3.scrambledSteps];
    }
    const list = document.querySelector('#sortable-cards-list');
    if (list) list.innerHTML = this.getSortCardsHTML();
  },

  getSortCardsHTML() {
    return AppState.exercise3.items.map((item, idx) => `
      <div class="sort-card" id="sort-card-${item.id}">
        <span class="sort-num-badge">${idx + 1}</span>
        <span class="sort-text">${item.text}</span>
        <div class="sort-actions">
          <button type="button" class="sort-arrow-btn" onclick="ViewKegiatan3.moveItem(${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>▲</button>
          <button type="button" class="sort-arrow-btn" onclick="ViewKegiatan3.moveItem(${idx}, 1)" ${idx === AppState.exercise3.items.length - 1 ? 'disabled' : ''}>▼</button>
        </div>
      </div>
    `).join('');
  },

  moveItem(fromIdx, delta) {
    const toIdx = fromIdx + delta;
    if (toIdx < 0 || toIdx >= AppState.exercise3.items.length) return;

    const temp = AppState.exercise3.items[fromIdx];
    AppState.exercise3.items[fromIdx] = AppState.exercise3.items[toIdx];
    AppState.exercise3.items[toIdx] = temp;

    const list = document.querySelector('#sortable-cards-list');
    if (list) list.innerHTML = this.getSortCardsHTML();
  },

  checkSort() {
    let isAllCorrect = true;

    AppState.exercise3.items.forEach((item, currentPosition) => {
      const card = document.querySelector(`#sort-card-${item.id}`);
      const expectedStep = currentPosition + 1;

      if (item.stepNum === expectedStep) {
        card.className = 'sort-card correct-pos';
      } else {
        card.className = 'sort-card wrong-pos';
        isAllCorrect = false;
      }
    });

    const fb = document.querySelector('#sort-feedback');
    fb.classList.add('show');
    if (isAllCorrect) {
      fb.className = 'feedback-box show correct';
      fb.innerHTML = '<strong>✓ Susunan Urutan Tepat!</strong><br>Kamu telah berhasil menyusun seluruh alur langkah pengamatan dan identifikasi keanekaragaman hayati secara runtut dari langkah 1 sampai 5.';
      AppState.progress.kegiatan3Done = true;
      AppState.save();
      ViewMenu.updateProgress();
    } else {
      fb.className = 'feedback-box show wrong';
      fb.innerHTML = '<strong>✗ Urutan masih belum tepat.</strong><br>Kartu merah masih berada di posisi yang salah, sedangkan kartu hijau sudah tepat. Perhatikan langkah ilmiah dimulai dari pengamatan ciri fisik, identifikasi, baru menarik kesimpulan.';
    }
  },

  resetSort() {
    AppState.exercise3.items.sort(() => Math.random() - 0.5);
    const list = document.querySelector('#sortable-cards-list');
    if (list) list.innerHTML = this.getSortCardsHTML();
    const fb = document.querySelector('#sort-feedback');
    fb.className = 'feedback-box';
    fb.textContent = '';
  }
};

if (typeof window !== "undefined") window.ViewKegiatan3 = ViewKegiatan3;
