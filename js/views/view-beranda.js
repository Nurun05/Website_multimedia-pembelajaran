/**
 * VIEW-BERANDA.JS - MODUL HALAMAN 1 (BERANDA & IDENTITAS PENGEMBANG)
 * Sesuai Storyboard Proposal Halaman 15
 */

const ViewBeranda = {
  render(container) {
    container.innerHTML = `
      <div class="hero-visual-card">
        <div class="hero-img-box">
          <img src="assets/hero-biodiversity.svg" alt="Ilustrasi Keanekaragaman Hayati Nusantara" loading="eager">
        </div>
        <h2 class="hero-title">${APP_DATA.info.title}</h2>
        <div class="hero-subtitle">${APP_DATA.info.subtitle}</div>
        <p style="font-size:12.5px; color:#475569; margin-bottom:14px;">
          Media pendamping mandiri untuk mempelajari konsep biodiversitas, perbedaan tingkat gen, jenis, ekosistem, fauna Indonesia, serta upaya pelestariannya.
        </p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <button type="button" class="btn btn-primary btn-full" onclick="AppRouter.goToPage(2)">
            🚀 Mulai Belajar Sekarang
          </button>
          <button type="button" class="btn btn-outline btn-full" onclick="AppRouter.goToPage(3)">
            📑 Langsung ke Menu Utama
          </button>
        </div>
      </div>

      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">ℹ️</span>
          <div class="card-title">Informasi Modul Pembelajaran</div>
        </div>
        <div style="font-size:12px; color:#475569; line-height:1.65;">
          <div><strong>Mata Pelajaran:</strong> ${APP_DATA.info.subject}</div>
          <div><strong>Sasaran:</strong> ${APP_DATA.info.grade}</div>
          <div><strong>Sekolah Mitra:</strong> ${APP_DATA.info.school}</div>
          <div><strong>Model Pengembangan:</strong> ${APP_DATA.info.model}</div>
          <div><strong>Aksesibilitas:</strong> Ringan, Responsif &amp; Tersedia Versi Offline</div>
        </div>

        <div class="metadata-author-box">
          <div><strong>Pengembang:</strong> ${APP_DATA.info.author}</div>
          <div><strong>NIM:</strong> ${APP_DATA.info.nim} | <strong>Kelas:</strong> ${APP_DATA.info.classGroup}</div>
          <div>Pendidikan Teknik Informatika &amp; Komputer</div>
        </div>
      </div>
    `;
  }
};

