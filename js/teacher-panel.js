/**
 * TEACHER-PANEL.JS - MODUL LOGIN PERAN & PORTAL GURU
 * Mengelola daftar nama siswa, rekap nilai kuis akhir, dan foto dokumentasi anti-joki.
 * SMP Negeri 1 Tandukkalua - IPA Kelas VII Fase D
 * Pengembang: Nurun Nisa Ahmad (NIM: 240209501049) - PTIK E 2024
 */

const TeacherPanel = {
  currentTab: 'submissions', // 'submissions' | 'roster' | 'settings'

  init() {
    // Pastikan modal terpasang di DOM
    this.ensureModalsInDOM();
  },

  ensureModalsInDOM() {
    let container = document.querySelector('#teacher-modals-wrapper');
    if (!container) {
      container = document.createElement('div');
      container.id = 'teacher-modals-wrapper';
      container.innerHTML = `
        <!-- Modal 1: Pemilihan Peran & Login -->
        <div id="login-role-modal" class="modal-overlay">
          <div class="role-modal-card">
            <div class="role-modal-header">
              <span style="font-size:32px;">🔐</span>
              <div class="role-modal-title">Pilih Akses Pengguna</div>
              <div class="role-modal-subtitle">
                Multimedia Pembelajaran IPA Fase D • SMP Negeri 1 Tandukkalua
              </div>
            </div>

            <div class="role-options-grid">
              <!-- Pilihan Siswa -->
              <div class="role-choice-card" onclick="TeacherPanel.selectRole('siswa')" style="cursor:pointer;">
                <div class="role-icon-circle">👨‍🎓</div>
                <div class="role-name">Kamu Siswa?</div>
                <div class="role-desc">Login di sini untuk mulai belajar dan mengerjakan latihan.</div>
                <button type="button" class="btn btn-primary" style="font-size:11.5px; padding:6px 12px; margin-top:4px;" onclick="event.stopPropagation(); TeacherPanel.selectRole('siswa');">
                  Masuk Siswa
                </button>
              </div>

              <!-- Pilihan Guru -->
              <div class="role-choice-card" onclick="TeacherPanel.showGuruPinBox()" style="cursor:pointer;">
                <div class="role-icon-circle">👨‍🏫</div>
                <div class="role-name">Anda Guru?</div>
                <div class="role-desc">Login di sini untuk kelola nama siswa &amp; cek folder hasil kuis.</div>
                <button type="button" class="btn btn-secondary" style="font-size:11.5px; padding:6px 12px; margin-top:4px;" onclick="event.stopPropagation(); TeacherPanel.showGuruPinBox();">
                  Masuk Guru
                </button>
              </div>
            </div>

            <!-- Box Input PIN Guru -->
            <div id="guru-pin-box" class="guru-pin-box">
              <div style="font-weight:700; font-size:12.5px; color:var(--primary-sky-deep); margin-bottom:6px;">
                🔑 Masukkan PIN Guru:
              </div>
              <div class="input-row-group">
                <input type="password" id="input-teacher-pin" class="teacher-input-text" placeholder="Masukkan PIN rahasia guru..." onkeyup="if(event.key==='Enter') TeacherPanel.submitGuruLogin()">
                <button type="button" class="btn btn-primary" style="padding:6px 14px; font-size:12px;" onclick="TeacherPanel.submitGuruLogin()">
                  Buka Portal
                </button>
              </div>
              <div id="pin-error-msg" style="color:#dc2626; font-size:11px; margin-top:4px; display:none;"></div>
            </div>

            <div style="margin-top:14px; border-top:1px solid #e2e8f0; padding-top:10px;">
              <button type="button" class="btn btn-outline" style="font-size:11px; padding:4px 14px;" onclick="TeacherPanel.closeLoginModal()">
                ✕ Tutup
              </button>
            </div>
          </div>
        </div>

        <!-- Modal 2: Portal Dashboard Guru -->
        <div id="teacher-dashboard-modal" class="modal-overlay">
          <div class="teacher-dashboard-modal">
            <!-- Topbar Portal Guru -->
            <div class="teacher-modal-topbar">
              <div class="teacher-modal-title">
                <span>👨‍🏫 Portal &amp; Folder Guru</span>
                <span style="font-size:12px; font-weight:normal; opacity:0.85;">| SMP Negeri 1 Tandukkalua</span>
              </div>
              <div style="display:flex; gap:6px;">
                <button type="button" class="header-role-btn" onclick="TeacherPanel.handleLogout()" title="Keluar dan kembali ke pemilihan akses">
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            </div>

            <!-- Tabs Navigasi Portal Guru -->
            <div class="teacher-tabs-nav">
              <button type="button" id="tab-btn-submissions" class="teacher-tab-btn active" onclick="TeacherPanel.switchTab('submissions')">
                📁 Folder Hasil &amp; Foto Siswa
                <span id="badge-total-submissions" class="teacher-tab-badge">0</span>
              </button>
              <button type="button" id="tab-btn-roster" class="teacher-tab-btn" onclick="TeacherPanel.switchTab('roster')">
                📋 Kelola Daftar Nama Siswa
                <span id="badge-total-roster" class="teacher-tab-badge">0</span>
              </button>
              <button type="button" id="tab-btn-settings" class="teacher-tab-btn" onclick="TeacherPanel.switchTab('settings')">
                ⚙️ Pengaturan PIN
              </button>
            </div>

            <!-- Konten Tab Portal Guru -->
            <div class="teacher-tab-content">
              <!-- Pane 1: Folder Hasil & Foto Siswa -->
              <div id="pane-submissions" class="tab-pane-view active">
                <!-- Statistik Kelas -->
                <div class="stats-summary-grid">
                  <div class="stat-metric-card">
                    <div id="stat-total-students" class="stat-metric-value">0</div>
                    <div class="stat-metric-label">Total Siswa Terdaftar</div>
                  </div>
                  <div class="stat-metric-card">
                    <div id="stat-submitted-count" class="stat-metric-value" style="color:var(--primary-sky);">0</div>
                    <div class="stat-metric-label">Sudah Kuis Akhir</div>
                  </div>
                  <div class="stat-metric-card">
                    <div id="stat-pass-count" class="stat-metric-value" style="color:#16a34a;">0</div>
                    <div class="stat-metric-label">Lolos KKM (≥70)</div>
                  </div>
                  <div class="stat-metric-card">
                    <div id="stat-fail-count" class="stat-metric-value" style="color:#dc2626;">0</div>
                    <div class="stat-metric-label">Belum Lolos (&lt;70)</div>
                  </div>
                  <div class="stat-metric-card">
                    <div id="stat-class-average" class="stat-metric-value">0</div>
                    <div class="stat-metric-label">Rata-Rata Nilai</div>
                  </div>
                </div>

                <!-- Tombol Aksi Ekspor & Cetak -->
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:12px; flex-wrap:wrap;">
                  <div style="font-size:13px; font-weight:700; color:var(--primary-sky-deep);">
                    📊 Rekapitulasi Nilai &amp; Dokumentasi Foto Siswa
                  </div>
                  <div style="display:flex; gap:6px;">
                    <button type="button" class="btn btn-primary" style="font-size:11.5px; padding:6px 10px;" onclick="TeacherPanel.printReport()">
                      🖨️ Cetak Rekap (PDF)
                    </button>
                    <button type="button" class="btn btn-secondary" style="font-size:11.5px; padding:6px 10px;" onclick="TeacherPanel.exportCSV()">
                      📊 Unduh Excel (CSV)
                    </button>
                  </div>
                </div>

                <!-- Daftar Siswa yang Sudah Mengerjakan Kuis -->
                <div id="submissions-list-container">
                  <!-- Diisi dinamis -->
                </div>

                <!-- Daftar Siswa yang Belum Mengisi Kuis -->
                <div class="teacher-card-section" style="margin-top:16px;">
                  <div class="teacher-card-title">
                    <span>⏳ Siswa yang Belum Mengisi Kuis Akhir</span>
                    <span id="badge-unsubmitted-count" class="badge-chip">0 Siswa</span>
                  </div>
                  <div id="unsubmitted-list-container" style="font-size:12px; color:#475569; display:flex; flex-wrap:wrap; gap:6px;">
                    <!-- Diisi dinamis -->
                  </div>
                </div>
              </div>

              <!-- Pane 2: Kelola Daftar Nama Siswa -->
              <div id="pane-roster" class="tab-pane-view">
                <div class="teacher-card-section">
                  <div class="teacher-card-title">
                    <span>➕ Tambah Siswa Secara Manual (1 per 1)</span>
                  </div>
                  <div class="input-row-group">
                    <input type="text" id="input-add-student-name" class="teacher-input-text" placeholder="Ketik nama lengkap siswa...">
                    <button type="button" class="btn btn-primary" style="font-size:12px; padding:6px 14px;" onclick="TeacherPanel.addSingleStudent()">
                      + Tambah
                    </button>
                  </div>
                </div>

                <div class="teacher-card-section">
                  <div class="teacher-card-title">
                    <span>📥 Tempel / Masukkan Banyak Nama Sekaligus (Bulk)</span>
                  </div>
                  <div style="font-size:11.5px; color:var(--text-muted); margin-bottom:6px;">
                    Salin (copy) daftar nama siswa dari Microsoft Word, Excel, atau buku absen lalu tempel (paste) di bawah ini (satu nama per baris):
                  </div>
                  <textarea id="textarea-bulk-roster" class="teacher-textarea" placeholder="Ketik atau tempel nama siswa di sini (satu nama per baris)..."></textarea>
                  <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
                    <button type="button" class="btn btn-outline" style="font-size:11.5px; padding:6px 12px;" onclick="TeacherPanel.appendBulkStudents()">
                      ➕ Gabungkan ke Daftar
                    </button>
                    <button type="button" class="btn btn-primary" style="font-size:11.5px; padding:6px 14px;" onclick="TeacherPanel.replaceBulkStudents()">
                      📥 Simpan &amp; Ganti Daftar Baru
                    </button>
                  </div>
                </div>

                <div class="teacher-card-section">
                  <div class="teacher-card-title">
                    <span>📋 Daftar Siswa Aktif (<span id="roster-active-count">0</span> Siswa)</span>
                    <div style="display:flex; gap:6px;">
                      <button type="button" class="btn btn-outline" style="font-size:10.5px; padding:4px 10px; color:#dc2626; border-color:#fca5a5;" onclick="TeacherPanel.clearAllRoster()">
                        🗑️ Hapus Semua Data Siswa
                      </button>
                    </div>
                  </div>
                  <div style="max-height:300px; overflow-y:auto; border:1px solid #e2e8f0; border-radius:var(--radius-sm);">
                    <table class="roster-list-table">
                      <thead>
                        <tr>
                          <th style="width:40px;">No</th>
                          <th>Nama Lengkap Siswa</th>
                          <th style="width:130px;">Status Kuis</th>
                          <th style="width:80px; text-align:center;">Aksi</th>
                        </tr>
                      </thead>
                      <tbody id="roster-table-body">
                        <!-- Diisi dinamis -->
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Pane 3: Pengaturan Guru -->
              <div id="pane-settings" class="tab-pane-view">
                <div class="teacher-card-section">
                  <div class="teacher-card-title">
                    <span>🔑 Ganti PIN Akses Portal Guru</span>
                  </div>
                  <div style="max-width:320px;">
                    <div style="margin-bottom:8px;">
                      <label style="font-size:11.5px; font-weight:700;">PIN Lama:</label>
                      <input type="password" id="input-old-pin" class="teacher-input-text" style="width:100%;">
                    </div>
                    <div style="margin-bottom:8px;">
                      <label style="font-size:11.5px; font-weight:700;">PIN Baru:</label>
                      <input type="password" id="input-new-pin" class="teacher-input-text" style="width:100%;">
                    </div>
                    <button type="button" class="btn btn-primary" style="font-size:12px; padding:6px 14px;" onclick="TeacherPanel.updatePin()">
                      💾 Simpan PIN Baru
                    </button>
                  </div>
                </div>

                <div class="teacher-card-section">
                  <div class="teacher-card-title" style="color:#dc2626;">
                    <span>⚠️ Reset Semua Riwayat Kuis Siswa</span>
                  </div>
                  <p style="font-size:12px; color:var(--text-muted);">
                    Tindakan ini akan mengosongkan folder rekap kuis guru dan menghapus seluruh foto dokumentasi siswa. Gunakan jika ingin memulai sesi ujian baru di kelas.
                  </p>
                  <button type="button" class="btn btn-outline" style="color:#dc2626; border-color:#fca5a5; font-size:12px; padding:6px 14px;" onclick="TeacherPanel.clearAllSubmissions()">
                    🗑️ Kosongkan Folder Rekap Kuis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal 3: Pop-up Lihat Foto Wajah Siswa Ukuran Penuh -->
        <div id="photo-zoom-modal" class="modal-overlay" onclick="if(event.target===this) TeacherPanel.closePhotoZoom()">
          <div class="photo-zoom-card">
            <div style="font-weight:700; font-size:14px; color:var(--primary-sky-deep); margin-bottom:8px;">
              📸 Foto Dokumentasi Wajah Siswa
            </div>
            <img id="photo-zoom-img" src="" alt="Foto Dokumentasi Siswa" class="photo-zoom-img">
            <div id="photo-zoom-name" style="font-weight:700; font-size:14px; color:#166534; margin-bottom:2px;"></div>
            <div id="photo-zoom-status" style="font-size:11.5px; margin-bottom:4px;"></div>
            <div id="photo-zoom-time" style="font-size:10.5px; color:#64748b; margin-bottom:12px;"></div>
            <div style="display:flex; justify-content:center; gap:8px;">
              <button type="button" id="btn-download-zoom-photo" class="btn btn-primary" style="font-size:11.5px; padding:6px 12px;">
                ⬇️ Unduh Foto
              </button>
              <button type="button" class="btn btn-outline" style="font-size:11.5px; padding:6px 12px;" onclick="TeacherPanel.closePhotoZoom()">
                ✕ Tutup
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(container);
    }
  },

  openLoginModal() {
    this.ensureModalsInDOM();
    const modal = document.querySelector('#login-role-modal');
    const optionsGrid = document.querySelector('.role-options-grid');
    const titleEl = document.querySelector('.role-modal-title');
    const subtitleEl = document.querySelector('.role-modal-subtitle');
    const iconEl = document.querySelector('.role-modal-header span');
    const pinBox = document.querySelector('#guru-pin-box');
    const pinError = document.querySelector('#pin-error-msg');
    const pinInput = document.querySelector('#input-teacher-pin');

    if (optionsGrid) optionsGrid.style.display = 'grid';
    if (titleEl) titleEl.textContent = 'Pilih Akses Pengguna';
    if (subtitleEl) subtitleEl.textContent = 'Multimedia Pembelajaran IPA Fase D • SMP Negeri 1 Tandukkalua';
    if (iconEl) iconEl.textContent = '🔐';

    if (pinBox) pinBox.className = 'guru-pin-box';
    if (pinError) pinError.style.display = 'none';
    if (pinInput) pinInput.value = '';

    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
    }
  },

  openGuruDirectLogin() {
    this.ensureModalsInDOM();
    const modal = document.querySelector('#login-role-modal');
    const optionsGrid = document.querySelector('.role-options-grid');
    const titleEl = document.querySelector('.role-modal-title');
    const subtitleEl = document.querySelector('.role-modal-subtitle');
    const iconEl = document.querySelector('.role-modal-header span');
    const pinBox = document.querySelector('#guru-pin-box');
    const pinError = document.querySelector('#pin-error-msg');
    const pinInput = document.querySelector('#input-teacher-pin');

    if (optionsGrid) optionsGrid.style.display = 'none';
    if (titleEl) titleEl.textContent = 'Masuk Portal Guru';
    if (subtitleEl) subtitleEl.textContent = 'Masukkan PIN Guru untuk mengelola daftar nama siswa & rekap nilai kuis.';
    if (iconEl) iconEl.textContent = '👨‍🏫';

    if (pinBox) pinBox.className = 'guru-pin-box active';
    if (pinError) pinError.style.display = 'none';
    if (pinInput) {
      pinInput.value = '';
      setTimeout(() => pinInput.focus(), 80);
    }

    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
    }
  },

  closeLoginModal() {
    const modal = document.querySelector('#login-role-modal');
    const optionsGrid = document.querySelector('.role-options-grid');
    const titleEl = document.querySelector('.role-modal-title');
    const subtitleEl = document.querySelector('.role-modal-subtitle');
    const iconEl = document.querySelector('.role-modal-header span');

    if (optionsGrid) optionsGrid.style.display = 'grid';
    if (titleEl) titleEl.textContent = 'Pilih Akses Pengguna';
    if (subtitleEl) subtitleEl.textContent = 'Multimedia Pembelajaran IPA Fase D • SMP Negeri 1 Tandukkalua';
    if (iconEl) iconEl.textContent = '🔐';

    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  },

  selectRole(role) {
    sessionStorage.setItem('role_selected', 'true');
    if (role === 'siswa') {
      AppState.userRole = 'siswa';
      AppState.save();
      this.closeLoginModal();
      this.updateHeaderRoleBadge();
      if (AppState.currentPage === 1 && window.ViewBeranda) {
        ViewBeranda.selectStudentRole();
      } else if (window.AppRouter) {
        AppRouter.goToPage(AppState.currentPage || 2);
      }
    } else if (role === 'guru') {
      this.showGuruPinBox();
    }
  },

  showGuruPinBox() {
    const pinBox = document.querySelector('#guru-pin-box');
    const pinInput = document.querySelector('#input-teacher-pin');
    if (pinBox) {
      pinBox.className = 'guru-pin-box active';
      if (pinInput) {
        pinInput.focus();
      }
    }
  },

  submitGuruLogin() {
    const pinInput = document.querySelector('#input-teacher-pin');
    const pinError = document.querySelector('#pin-error-msg');
    const val = pinInput ? pinInput.value.trim() : '';

    const validPin = AppState.teacherPin || 'guru123';
    if (val === validPin) {
      sessionStorage.setItem('role_selected', 'true');
      AppState.userRole = 'guru';
      AppState.save();
      this.closeLoginModal();
      this.updateHeaderRoleBadge();
      this.openDashboard();
    } else {
      if (pinError) {
        pinError.textContent = 'PIN Guru tidak valid! Silakan coba lagi.';
        pinError.style.display = 'block';
      }
      if (pinInput) {
        pinInput.focus();
        pinInput.select();
      }
    }
  },

  openDashboard() {
    this.ensureModalsInDOM();
    AppState.load(); // Pastikan data terbaru dari pengerjaan siswa termuat
    const modal = document.querySelector('#teacher-dashboard-modal');
    if (modal) {
      modal.classList.add('active');
      this.renderDashboard();
    }
  },

  closeDashboard() {
    const modal = document.querySelector('#teacher-dashboard-modal');
    if (modal) modal.classList.remove('active');
  },

  switchTab(tabName) {
    this.currentTab = tabName;
    ['submissions', 'roster', 'settings'].forEach(t => {
      const btn = document.querySelector(`#tab-btn-${t}`);
      const pane = document.querySelector(`#pane-${t}`);
      if (btn) btn.classList.toggle('active', t === tabName);
      if (pane) pane.classList.toggle('active', t === tabName);
    });

    if (tabName === 'submissions') {
      this.renderSubmissionsTab();
    } else if (tabName === 'roster') {
      this.renderRosterTab();
    }
  },

  renderDashboard() {
    this.renderSubmissionsTab();
    this.renderRosterTab();
    this.switchTab(this.currentTab || 'submissions');
    this.updateHeaderRoleBadge();
  },

  renderSubmissionsTab() {
    const roster = AppState.getRoster();
    const submissions = AppState.getStudentSubmissions();
    const passScore = (window.APP_DATA && APP_DATA.info && APP_DATA.info.passingScore) || 70;

    // Hitung statistik
    const totalStudents = roster.length;
    const submittedCount = submissions.length;
    const passCount = submissions.filter(s => s.score >= passScore).length;
    const failCount = submittedCount - passCount;
    const averageScore = submittedCount > 0 
      ? Math.round(submissions.reduce((acc, s) => acc + s.score, 0) / submittedCount) 
      : 0;

    // Update elemen statistik
    const elTotal = document.querySelector('#stat-total-students');
    const elSub = document.querySelector('#stat-submitted-count');
    const elPass = document.querySelector('#stat-pass-count');
    const elFail = document.querySelector('#stat-fail-count');
    const elAvg = document.querySelector('#stat-class-average');
    const badgeTotalSub = document.querySelector('#badge-total-submissions');

    if (elTotal) elTotal.textContent = totalStudents;
    if (elSub) elSub.textContent = `${submittedCount} / ${totalStudents}`;
    if (elPass) elPass.textContent = passCount;
    if (elFail) elFail.textContent = failCount;
    if (elAvg) elAvg.textContent = `${averageScore}`;
    if (badgeTotalSub) badgeTotalSub.textContent = submittedCount;

    // Render daftar pengerjaan
    const listContainer = document.querySelector('#submissions-list-container');
    if (!listContainer) return;

    if (submissions.length === 0) {
      listContainer.innerHTML = `
        <div class="card" style="text-align:center; padding:24px; color:var(--text-muted);">
          <span style="font-size:36px; display:block; margin-bottom:6px;">📭</span>
          <strong>Folder Kuis Masih Kosong</strong>
          <div style="font-size:12px; margin-top:4px;">
            Belum ada siswa yang menyelesaikan Kuis Akhir. Saat siswa mengerjakan kuis dan mengambil foto, hasilnya akan otomatis tersimpan di sini.
          </div>
        </div>
      `;
    } else {
      listContainer.innerHTML = submissions.map((sub, idx) => {
        const isPass = sub.score >= passScore;
        const tp1Pct = sub.tpScores && sub.tpScores.tp1 ? sub.tpScores.tp1.pct : '-';
        const tp2Pct = sub.tpScores && sub.tpScores.tp2 ? sub.tpScores.tp2.pct : '-';
        const tp3Pct = sub.tpScores && sub.tpScores.tp3 ? sub.tpScores.tp3.pct : '-';
        const isRetakeActive = AppState.isRetakeInstructed(sub.studentName);
        const hasPhoto = Boolean(sub.studentPhoto && sub.studentPhoto.trim().length > 0);

        return `
          <div class="submission-card-item">
            <!-- Foto Dokumentasi Siswa (atau Indikator Foto Kosong/Dihapus) -->
            ${hasPhoto ? `
              <img src="${sub.studentPhoto}" 
                   alt="${sub.studentName}" 
                   class="sub-photo-thumb"
                   title="Klik untuk memperbesar foto dokumentasi"
                   onclick="TeacherPanel.viewPhoto('${sub.studentName.replace(/'/g, "\\'")}', '${sub.studentPhoto}', ${sub.score}, ${isPass}, '${sub.submittedAt}')">
            ` : `
              <div class="sub-photo-thumb photo-thumb-empty" 
                   title="Foto dokumentasi telah dihapus oleh siswa atau kosong"
                   style="display:flex; flex-direction:column; align-items:center; justify-content:center; background:#fef2f2; border:1.5px dashed #ef4444; color:#dc2626; border-radius:50%; width:44px; height:44px; cursor:pointer; flex-shrink:0;"
                   onclick="TeacherPanel.viewPhoto('${sub.studentName.replace(/'/g, "\\'")}', '', ${sub.score}, ${isPass}, '${sub.submittedAt}')">
                <span style="font-size:16px; line-height:1;">📷❌</span>
              </div>
            `}

            <!-- Detail Siswa & Status KKM -->
            <div class="sub-info-col">
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                <div class="sub-student-name">${idx + 1}. ${sub.studentName}</div>
                <!-- Tombol / Indikator Foto -->
                ${hasPhoto ? `
                  <button type="button" class="btn btn-outline" 
                          style="font-size:10px; padding:2px 8px; border-radius:var(--radius-full); background:#f0f9ff;"
                          onclick="TeacherPanel.viewPhoto('${sub.studentName.replace(/'/g, "\\'")}', '${sub.studentPhoto}', ${sub.score}, ${isPass}, '${sub.submittedAt}')">
                    📷 Lihat Foto
                  </button>
                ` : `
                  <span style="background:#fee2e2; color:#dc2626; border:1px solid #fca5a5; padding:2px 8px; border-radius:10px; font-size:10px; font-weight:700;">
                    ⚠️ Foto Kosong / Dihapus Siswa
                  </span>
                `}
                ${isRetakeActive ? `
                  <span style="background:#fffbeb; color:#b45309; border:1px solid #fcd34d; padding:2px 8px; border-radius:10px; font-size:10px; font-weight:700;">
                    🔄 Diperintahkan Ujian Ulang
                  </span>
                ` : ''}
              </div>

              <div class="sub-meta-text">
                Waktu Kuis: ${sub.submittedAt || '-'}
              </div>

              <div class="sub-tp-pills">
                <span class="sub-tp-pill">TP 1: ${tp1Pct}%</span>
                <span class="sub-tp-pill">TP 2: ${tp2Pct}%</span>
                <span class="sub-tp-pill">TP 3: ${tp3Pct}%</span>
              </div>
            </div>

            <!-- Nilai & Status Kelulusan KKM -->
            <div class="sub-score-col">
              <div class="sub-score-badge ${isPass ? 'pass' : 'fail'}">
                ${sub.score}
              </div>
              <div style="font-size:10.5px; font-weight:700; color:${isPass ? '#15803d' : '#dc2626'}; margin-top:2px;">
                ${isPass ? '✓ Lolos KKM' : '✗ Belum Lolos'}
              </div>
              <div class="sub-actions-row">
                ${hasPhoto ? `
                  <button type="button" class="btn-sub-action" title="Unduh foto dokumentasi ini" onclick="TeacherPanel.downloadStudentPhoto('${sub.studentName.replace(/'/g, "\\'")}', '${sub.studentPhoto}')">
                    ⬇️ Unduh Foto
                  </button>
                ` : `
                  <button type="button" class="btn-sub-action" style="opacity:0.5; cursor:not-allowed;" title="Foto tidak tersedia karena telah dihapus oleh siswa" disabled>
                    🚫 Tanpa Foto
                  </button>
                `}
                <button type="button" class="btn-sub-action" 
                        style="${isRetakeActive ? 'color:#b45309; background:#fef3c7; border:1px solid #fde68a;' : 'color:#d97706;'}" 
                        title="${isRetakeActive ? 'Instruksi ujian ulang aktif untuk siswa ini. Klik untuk memperbarui.' : 'Perintahkan siswa ini untuk mengerjakan ulang Kuis Akhir'}" 
                        onclick="TeacherPanel.instructRetake('${sub.studentName.replace(/'/g, "\\'")}')">
                  ${isRetakeActive ? '🔄 Ujian Ulang (Aktif)' : '🔄 Ujian Ulang'}
                </button>
                <button type="button" class="btn-sub-action" style="color:#dc2626;" title="Hapus riwayat siswa ini" onclick="TeacherPanel.deleteSubmission('${sub.studentName.replace(/'/g, "\\'")}')">
                  🗑️
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Render daftar siswa yang belum mengisi
    const unsubmittedContainer = document.querySelector('#unsubmitted-list-container');
    const badgeUnsubmitted = document.querySelector('#badge-unsubmitted-count');
    if (unsubmittedContainer) {
      const submittedNamesLower = submissions.map(s => s.studentName.toLowerCase());
      const unsubmitted = roster.filter(name => !submittedNamesLower.includes(name.toLowerCase()));

      if (badgeUnsubmitted) badgeUnsubmitted.textContent = `${unsubmitted.length} Siswa`;

      if (unsubmitted.length === 0) {
        unsubmittedContainer.innerHTML = '<span style="color:#16a34a; font-weight:600;">🎉 Seluruh siswa dalam daftar telah menyelesaikan Kuis Akhir!</span>';
      } else {
        unsubmittedContainer.innerHTML = unsubmitted.map(name => `
          <span style="background:#f1f5f9; border:1px solid #cbd5e1; padding:3px 8px; border-radius:var(--radius-full); font-size:11px;">
            ⏳ ${name}
          </span>
        `).join('');
      }
    }
  },

  renderRosterTab() {
    const roster = AppState.getRoster();
    const submissions = AppState.getStudentSubmissions();
    const submittedNamesLower = submissions.map(s => s.studentName.toLowerCase());

    const badgeTotalRoster = document.querySelector('#badge-total-roster');
    const rosterActiveCount = document.querySelector('#roster-active-count');
    if (badgeTotalRoster) badgeTotalRoster.textContent = roster.length;
    if (rosterActiveCount) rosterActiveCount.textContent = roster.length;

    const tbody = document.querySelector('#roster-table-body');
    if (!tbody) return;

    if (roster.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" style="text-align:center; padding:18px; color:var(--text-muted);">
            Daftar nama siswa masih kosong. Silakan tambahkan nama siswa melalui formulir di atas.
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = roster.map((name, idx) => {
        const isCompleted = submittedNamesLower.includes(name.toLowerCase());
        const sub = isCompleted ? submissions.find(s => s.studentName.toLowerCase() === name.toLowerCase()) : null;

        return `
          <tr>
            <td style="text-align:center;">${idx + 1}</td>
            <td><strong>${name}</strong></td>
            <td>
              ${isCompleted 
                ? `<span style="color:#16a34a; font-weight:700;">✅ Sudah (Nilai: ${sub ? sub.score : '-'})</span>` 
                : `<span style="color:#64748b;">⏳ Belum Kuis</span>`}
            </td>
            <td style="text-align:center;">
              <button type="button" class="btn-table-delete" onclick="TeacherPanel.deleteRosterStudent('${name.replace(/'/g, "\\'")}')" title="Hapus nama ini dari daftar">
                ✕ Hapus
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }
  },

  addSingleStudent() {
    const input = document.querySelector('#input-add-student-name');
    if (!input) return;
    const name = input.value.trim();
    if (!name) {
      alert('Silakan ketik nama lengkap siswa terlebih dahulu!');
      return;
    }
    const success = AppState.addRosterStudent(name);
    if (!success) {
      alert('Nama siswa ini sudah ada di dalam daftar!');
      return;
    }
    input.value = '';
    this.renderRosterTab();
    this.renderSubmissionsTab();
  },

  appendBulkStudents() {
    const textarea = document.querySelector('#textarea-bulk-roster');
    if (!textarea) return;
    const lines = textarea.value.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) {
      alert('Silakan tempel daftar nama siswa terlebih dahulu!');
      return;
    }

    let addedCount = 0;
    lines.forEach(name => {
      if (AppState.addRosterStudent(name)) addedCount++;
    });

    textarea.value = '';
    alert(`Berhasil menambahkan ${addedCount} siswa baru ke dalam daftar.`);
    this.renderRosterTab();
    this.renderSubmissionsTab();
  },

  replaceBulkStudents() {
    const textarea = document.querySelector('#textarea-bulk-roster');
    if (!textarea) return;
    const lines = textarea.value.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    if (lines.length === 0) {
      alert('Silakan tempel daftar nama siswa terlebih dahulu!');
      return;
    }

    if (confirm(`Apakah Anda yakin ingin mengganti seluruh daftar dengan ${lines.length} nama siswa baru ini?`)) {
      AppState.setRoster(lines);
      textarea.value = '';
      alert('Daftar siswa berhasil disimpan dan diperbarui!');
      this.renderRosterTab();
      this.renderSubmissionsTab();
    }
  },

  deleteRosterStudent(name) {
    if (confirm(`Hapus "${name}" dari daftar nama siswa?`)) {
      AppState.removeRosterStudent(name);
      this.renderRosterTab();
      this.renderSubmissionsTab();
    }
  },

  clearAllRoster() {
    if (confirm('Apakah Anda yakin ingin mengosongkan seluruh daftar nama siswa?')) {
      AppState.clearAllRoster();
      this.renderRosterTab();
      this.renderSubmissionsTab();
    }
  },

  promptUnlockByGuru() {
    const pin = prompt('🔑 Masukkan PIN Guru untuk membuka kunci kuis pada perangkat ini:');
    if (pin === null) return; // Batal
    const validPin = AppState.teacherPin || 'guru123';
    if (pin.trim() === validPin) {
      AppState.unlockDeviceQuiz();
      alert('✅ Kunci kuis perangkat berhasil dibuka oleh Guru. Siswa berikutnya dapat memilih nama dan mulai mengerjakan.');
      if (window.ViewKuis) ViewKuis.render(document.querySelector('#page-10'));
      if (window.ViewMenu) ViewMenu.updateProgress();
    } else {
      alert('❌ PIN Guru salah. Kunci perangkat kuis tetap aktif.');
    }
  },

  unlockDeviceFromDashboard() {
    if (confirm('Buka kunci kuis pada perangkat ini sekarang agar siswa berikutnya dapat mulai mengerjakan?')) {
      AppState.unlockDeviceQuiz();
      alert('✅ Kunci perangkat berhasil dibuka.');
      this.renderSubmissionsTab();
      if (window.ViewKuis) ViewKuis.render(document.querySelector('#page-10'));
      if (window.ViewMenu) ViewMenu.updateProgress();
    }
  },

  viewPhoto(studentName, photoUrl, score, isPass, submittedAt) {
    if (!photoUrl || !photoUrl.startsWith('data:image')) {
      alert(`⚠️ Foto Dokumentasi Wajah Kosong / Dihapus\n\nNama Siswa: ${studentName}\nStatus: Siswa telah menghapus foto dokumentasi wajah atau belum melakukan pengambilan selfie resmi.`);
      return;
    }
    this.ensureModalsInDOM();
    const modal = document.querySelector('#photo-zoom-modal');
    const img = document.querySelector('#photo-zoom-img');
    const nameEl = document.querySelector('#photo-zoom-name');
    const statusEl = document.querySelector('#photo-zoom-status');
    const timeEl = document.querySelector('#photo-zoom-time');
    const downloadBtn = document.querySelector('#btn-download-zoom-photo');

    if (img) img.src = photoUrl;
    if (nameEl) nameEl.textContent = studentName;
    if (statusEl) {
      // 2. ISOLASI PRIVASI NILAI SISWA
      // Hanya Guru atau Siswa pemilik data yang dapat melihat rincian skor
      const isAuthorized = (AppState.userRole === 'guru') || (AppState.student && AppState.student.name && AppState.student.name.toLowerCase() === studentName.toLowerCase());
      if (isAuthorized && score !== undefined && score !== null && score > 0) {
        statusEl.innerHTML = `Nilai Kuis: <strong>${score} / 100</strong> — <span style="color:${isPass ? '#16a34a' : '#dc2626'}; font-weight:bold;">${isPass ? '✓ Lolos KKM' : '✗ Belum Lolos KKM'}</span>`;
      } else {
        statusEl.innerHTML = `<span style="color:#166534; font-weight:bold;">✓ Foto Terverifikasi Resmi di Folder Guru</span>`;
      }
    }
    if (timeEl) timeEl.textContent = `Waktu Pengambilan Dokumentasi: ${submittedAt || '-'}`;
    if (downloadBtn) {
      downloadBtn.onclick = () => this.downloadStudentPhoto(studentName, photoUrl);
    }

    if (modal) modal.classList.add('active');
  },

  closePhotoZoom() {
    const modal = document.querySelector('#photo-zoom-modal');
    if (modal) modal.classList.remove('active');
  },

  downloadStudentPhoto(studentName, photoUrl) {
    if (!photoUrl || !photoUrl.startsWith('data:image')) {
      alert('Foto tidak tersedia atau rusak.');
      return;
    }
    const cleanName = studentName.replace(/[^a-zA-Z0-9]/g, '_');
    const a = document.createElement('a');
    a.href = photoUrl;
    a.download = `Foto_Dokumentasi_${cleanName}_KuisKehati.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  instructRetake(studentName) {
    const isAlready = AppState.isRetakeInstructed(studentName);
    const msg = isAlready
      ? `Siswa "${studentName}" saat ini sudah berstatus "Diperintahkan Ujian Ulang".\n\nKirim ulang instruksi ujian ulang untuk siswa ini?`
      : `Berikan instruksi UJIAN ULANG kepada siswa "${studentName}"?\n\nSiswa bersangkutan akan langsung mendapatkan notifikasi perintah resmi dari guru saat membuka Kuis Akhir dan diizinkan mengambil foto dokumentasi baru serta mengisi kuis kembali.`;

    if (confirm(msg)) {
      AppState.instructStudentRetake(studentName);
      alert(`✓ Perintah Ujian Ulang BERHASIL diaktifkan untuk "${studentName}".\n\nSiswa akan melihat notifikasi resmi guru dan kuncian pengerjaan kuis telah dibuka.`);
      this.renderDashboard();
    }
  },

  allowRetake(studentName) {
    this.instructRetake(studentName);
  },

  deleteSubmission(studentName) {
    if (confirm(`Hapus hasil kuis dan foto siswa "${studentName}" dari folder guru?`)) {
      AppState.deleteStudentSubmission(studentName);
      this.renderDashboard();
    }
  },

  clearAllSubmissions() {
    if (confirm('PERINGATAN: Apakah Anda yakin ingin mengosongkan seluruh riwayat kuis dan foto siswa di Folder Guru?')) {
      AppState.clearAllSubmissions();
      alert('Seluruh data hasil kuis dan foto dokumentasi telah dikosongkan.');
      this.renderDashboard();
    }
  },

  updatePin() {
    const oldPin = document.querySelector('#input-old-pin');
    const newPin = document.querySelector('#input-new-pin');
    const current = AppState.teacherPin || 'guru123';

    if (!oldPin || !newPin) return;
    if (oldPin.value !== current) {
      alert('PIN Lama salah!');
      return;
    }
    if (!newPin.value || newPin.value.length < 4) {
      alert('PIN Baru minimal 4 karakter!');
      return;
    }

    AppState.teacherPin = newPin.value.trim();
    AppState.save();
    oldPin.value = '';
    newPin.value = '';
    alert('PIN Guru berhasil diperbarui!');
  },

  exportCSV() {
    const submissions = AppState.getStudentSubmissions();
    if (submissions.length === 0) {
      alert('Belum ada data nilai siswa untuk diekspor!');
      return;
    }

    const passScore = (window.APP_DATA && APP_DATA.info && APP_DATA.info.passingScore) || 70;
    let csv = "No,Nama Siswa,Nilai Kuis,Status KKM,TP 1 (Konsep),TP 2 (Tingkat),TP 3 (Pelestarian),Waktu Pengerjaan\n";

    submissions.forEach((s, idx) => {
      const isPass = s.score >= passScore ? 'Lolos KKM' : 'Belum Lolos';
      const tp1 = s.tpScores && s.tpScores.tp1 ? `${s.tpScores.tp1.pct}%` : '-';
      const tp2 = s.tpScores && s.tpScores.tp2 ? `${s.tpScores.tp2.pct}%` : '-';
      const tp3 = s.tpScores && s.tpScores.tp3 ? `${s.tpScores.tp3.pct}%` : '-';
      csv += `"${idx + 1}","${s.studentName}","${s.score}","${isPass}","${tp1}","${tp2}","${tp3}","${s.submittedAt}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rekap_Nilai_Kuis_IPA_SMPN1Tandukkalua_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  printReport() {
    const submissions = AppState.getStudentSubmissions();
    const passScore = (window.APP_DATA && APP_DATA.info && APP_DATA.info.passingScore) || 70;

    let printWin = window.open('', '_blank');
    if (!printWin) {
      window.print();
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <title>Rekapitulasi Nilai &amp; Foto Siswa - SMP Negeri 1 Tandukkalua</title>
        <style>
          body { font-family: Calibri, sans-serif; padding: 20px; color: #1e293b; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 16px; }
          .header h2 { margin: 0; font-size: 18px; }
          .header h3 { margin: 4px 0; font-size: 14px; font-weight: normal; }
          .header p { margin: 0; font-size: 11px; }
          table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 12px; }
          th, td { border: 1px solid #000; padding: 6px 8px; text-align: left; }
          th { background: #e2e8f0; font-weight: bold; }
          .photo-cell { width: 45px; height: 45px; border-radius: 50%; object-fit: cover; }
          .pass { color: green; font-weight: bold; }
          .fail { color: red; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>SMP NEGERI 1 TANDUKKALUA</h2>
          <h3>REKAPITULASI EVALUASI KUIS AKHIR &amp; DOKUMENTASI SISWA</h3>
          <p>Mata Pelajaran: IPA Kelas VII (Fase D) | Topik: Keanekaragaman Hayati Indonesia | KKM: ${passScore}</p>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width:30px; text-align:center;">No</th>
              <th style="width:55px; text-align:center;">Foto</th>
              <th>Nama Siswa</th>
              <th style="width:60px; text-align:center;">Nilai</th>
              <th style="width:90px; text-align:center;">Status KKM</th>
              <th style="width:60px; text-align:center;">TP 1</th>
              <th style="width:60px; text-align:center;">TP 2</th>
              <th style="width:60px; text-align:center;">TP 3</th>
              <th style="width:130px;">Waktu Pengerjaan</th>
            </tr>
          </thead>
          <tbody>
            ${submissions.length === 0 ? '<tr><td colspan="9" style="text-align:center;">Belum ada data pengerjaan siswa.</td></tr>' : submissions.map((s, idx) => `
              <tr>
                <td style="text-align:center;">${idx + 1}</td>
                <td style="text-align:center;">${s.studentPhoto ? `<img src="${s.studentPhoto}" class="photo-cell" alt="">` : '<span style="color:#dc2626; font-size:9.5px; font-weight:bold;">[Foto Dihapus/Kosong]</span>'}</td>
                <td><strong>${s.studentName}</strong></td>
                <td style="text-align:center; font-weight:bold;">${s.score}</td>
                <td style="text-align:center;" class="${s.score >= passScore ? 'pass' : 'fail'}">${s.score >= passScore ? 'Lolos KKM' : 'Belum Lolos'}</td>
                <td style="text-align:center;">${s.tpScores && s.tpScores.tp1 ? s.tpScores.tp1.pct + '%' : '-'}</td>
                <td style="text-align:center;">${s.tpScores && s.tpScores.tp2 ? s.tpScores.tp2.pct + '%' : '-'}</td>
                <td style="text-align:center;">${s.tpScores && s.tpScores.tp3 ? s.tpScores.tp3.pct + '%' : '-'}</td>
                <td>${s.submittedAt}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </body>
      </html>
    `;

    printWin.document.write(htmlContent);
    printWin.document.close();
    printWin.focus();
    setTimeout(() => {
      printWin.print();
    }, 500);
  },

  updateHeaderRoleBadge() {
    const btn = document.querySelector('#btn-header-role');
    const roleIcon = document.querySelector('#header-role-icon');
    const roleText = document.querySelector('#header-role-text');

    if (!btn) return;
    const isRoleActive = sessionStorage.getItem('role_selected') === 'true';
    if (!isRoleActive && AppState.currentPage === 1) {
      btn.style.display = 'none';
      return;
    }
    btn.style.display = 'inline-flex';
    if (roleIcon) roleIcon.textContent = '🚪';
    if (roleText) roleText.textContent = 'Logout';
    btn.title = 'Keluar dan kembali ke halaman awal pemilihan akses';
    btn.onclick = () => TeacherPanel.handleLogout();
  },

  handleLogout() {
    if (confirm('Apakah Anda yakin ingin keluar (Logout) dan kembali ke halaman awal pemilihan akses?')) {
      AppState.userRole = 'siswa';
      AppState.resetActiveStudent();
      sessionStorage.removeItem('role_selected');
      this.closeDashboard();
      this.closeLoginModal();
      if (window.ViewBeranda) {
        ViewBeranda.resetRoleChoice();
      }
      if (window.AppRouter) {
        AppRouter.goToPage(1);
      }
      this.updateHeaderRoleBadge();
    }
  }
};

if (typeof window !== "undefined") window.TeacherPanel = TeacherPanel;
