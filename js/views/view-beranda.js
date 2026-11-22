/**
 * VIEW-BERANDA.JS - MODUL HALAMAN 1 (BERANDA & IDENTITAS PENGEMBANG)
 * Sesuai Storyboard Proposal Halaman 15
 */

const ViewBeranda = {
  render(container) {
    container.innerHTML = `
      <div class="hero-visual-card">
        <div class="hero-img-box">
          <img src="assets/hero-biodiversity.jpg" alt="Pemandangan Alam & Keanekaragaman Hayati Indonesia" loading="eager">
        </div>
        <h2 class="hero-title">${APP_DATA.info.title}</h2>
        <div class="hero-subtitle">${APP_DATA.info.subtitle}</div>
        <p style="font-size:12.5px; color:#475569; margin-bottom:14px;">
          Media pendamping mandiri untuk mempelajari konsep biodiversitas, perbedaan tingkat gen, jenis, ekosistem, fauna Indonesia, serta upaya pelestariannya.
        </p>

        <!-- PILIHAN PERAN AWAL: "Anda Siswa" & "Anda Guru" -->
        <div id="beranda-role-choice" style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-top:8px;">
          <!-- Tombol 1: Anda Siswa -->
          <button type="button" id="btn-landing-siswa" class="btn btn-primary" style="padding:14px 10px; font-size:13.5px; display:flex; flex-direction:column; align-items:center; gap:5px; border-radius:var(--radius-md); box-shadow:0 2px 8px rgba(163,193,225,0.4);" onclick="ViewBeranda.selectStudentRole()">
            <span style="font-size:26px;">👨‍🎓</span>
            <span style="font-weight:700;">Anda Siswa</span>
            <small style="font-size:11px; opacity:0.95;">Akses Belajar &amp; Latihan</small>
          </button>

          <!-- Tombol 2: Anda Guru -->
          <button type="button" id="btn-landing-guru" class="btn btn-secondary" style="padding:14px 10px; font-size:13.5px; display:flex; flex-direction:column; align-items:center; gap:5px; border:1.5px solid var(--pastel-sky-border); border-radius:var(--radius-md); background:#ffffff;" onclick="ViewBeranda.selectTeacherRole()">
            <span style="font-size:26px;">👨‍🏫</span>
            <span style="font-weight:700; color:var(--primary-sky-deep);">Anda Guru</span>
            <small style="font-size:11px; color:var(--primary-sky-dark);">Portal &amp; Folder Guru</small>
          </button>
        </div>

        <!-- ALUR LANJUTAN SISWA (MUNCUL DINAMIS SAAT "Anda Siswa" DIKLIK) -->
        <div id="beranda-student-actions" style="display:none; flex-direction:column; gap:10px; margin-top:8px; animation: fadeInModal 0.25s ease;">
          <div style="font-size:12.5px; font-weight:700; color:var(--primary-sky-deep); text-align:center; padding:2px 0;">
            🎓 Selamat Datang Siswa! Silakan pilih:
          </div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
            <button type="button" class="btn btn-primary" style="padding:12px 8px; font-size:13.5px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px;" onclick="AppRouter.goToPage(2)">
              <span>🚀</span>
              <span>Mulai Belajar</span>
            </button>
            <button type="button" class="btn btn-outline" style="padding:12px 8px; font-size:13.5px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px;" onclick="AppRouter.goToPage(3)">
              <span>📑</span>
              <span>Langsung ke Menu</span>
            </button>
          </div>
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
          <div><strong>Aksesibilitas:</strong> Ringan, Cepat &amp; Responsif Web-Mobile</div>
        </div>

        <div class="metadata-author-box">
          <div><strong>Pengembang:</strong> ${APP_DATA.info.author}</div>
          <div><strong>NIM:</strong> ${APP_DATA.info.nim} | <strong>Kelas:</strong> ${APP_DATA.info.classGroup}</div>
          <div>Pendidikan Teknik Informatika &amp; Komputer</div>
        </div>
      </div>
    `;
  },

  selectStudentRole() {
    AppState.userRole = 'siswa';
    AppState.save();
    sessionStorage.setItem('role_selected', 'true');
    if (window.TeacherPanel) TeacherPanel.updateHeaderRoleBadge();

    const roleBox = document.querySelector('#beranda-role-choice');
    const studentBox = document.querySelector('#beranda-student-actions');
    if (roleBox) roleBox.style.display = 'none';
    if (studentBox) {
      studentBox.style.display = 'flex';
      studentBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  },

  selectTeacherRole() {
    if (window.TeacherPanel) {
      TeacherPanel.openGuruDirectLogin();
    }
  },

  resetRoleChoice() {
    sessionStorage.removeItem('role_selected');
    const roleBox = document.querySelector('#beranda-role-choice');
    const studentBox = document.querySelector('#beranda-student-actions');
    if (roleBox) roleBox.style.display = 'grid';
    if (studentBox) studentBox.style.display = 'none';
    if (window.TeacherPanel) TeacherPanel.updateHeaderRoleBadge();
  }
};

if (typeof window !== "undefined") window.ViewBeranda = ViewBeranda;
