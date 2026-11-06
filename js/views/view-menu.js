/**
 * VIEW-MENU.JS - MODUL HALAMAN 3 (MENU UTAMA 5 KARTU)
 * Sesuai Storyboard Proposal Halaman 15
 */

const ViewMenu = {
  render(container) {
    container.innerHTML = `
      <div style="margin-bottom:12px;">
        <h2 style="font-size:16px; font-weight:700; color:var(--sky-primary-dark);">Menu Pilihan Belajar</h2>
        <div style="font-size:12px; color:var(--text-muted);">Pilih kegiatan belajar atau evaluasi sesuai kebutuhan belajarmu:</div>
      </div>

      <div class="menu-grid">
        <!-- Kartu 1: Kegiatan 1 -->
        <div class="menu-card" onclick="AppRouter.goToPage(4)">
          <div class="menu-icon-circle">🌱</div>
          <div class="menu-card-body">
            <div class="menu-card-title">Kegiatan 1: Konsep &amp; Istilah</div>
            <div class="menu-card-sub">Pengenalan keanekaragaman, istilah kunci, dan latihan 1</div>
          </div>
          <span id="status-kegiatan-1" class="menu-status-badge status-pending">Belum</span>
        </div>

        <!-- Kartu 2: Kegiatan 2 -->
        <div class="menu-card" onclick="AppRouter.goToPage(6)">
          <div class="menu-icon-circle">🧬</div>
          <div class="menu-card-body">
            <div class="menu-card-title">Kegiatan 2: Tiga Tingkat Kehati</div>
            <div class="menu-card-sub">Tingkat Gen, Tingkat Jenis, Tingkat Ekosistem, &amp; latihan 2</div>
          </div>
          <span id="status-kegiatan-2" class="menu-status-badge status-pending">Belum</span>
        </div>

        <!-- Kartu 3: Kegiatan 3 -->
        <div class="menu-card" onclick="AppRouter.goToPage(8)">
          <div class="menu-icon-circle">🗺️</div>
          <div class="menu-card-body">
            <div class="menu-card-title">Kegiatan 3: Pengamatan &amp; Konservasi</div>
            <div class="menu-card-sub">Animasi pengamatan, zona fauna Wallacea, ancaman &amp; pelestarian</div>
          </div>
          <span id="status-kegiatan-3" class="menu-status-badge status-pending">Belum</span>
        </div>

        <!-- Kartu 4: Kuis Akhir -->
        <div class="menu-card" onclick="AppRouter.goToPage(10)">
          <div class="menu-icon-circle">📝</div>
          <div class="menu-card-body">
            <div class="menu-card-title">Kuis Akhir Evaluasi</div>
            <div class="menu-card-sub">10 Soal Pilihan Ganda dengan Pembahasan Ilmiah</div>
          </div>
          <span id="status-kuis" class="menu-status-badge status-pending">Belum Ujian</span>
        </div>

        <!-- Kartu 5: Rangkuman -->
        <div class="menu-card" onclick="AppRouter.goToPage(12)">
          <div class="menu-icon-circle">📑</div>
          <div class="menu-card-body">
            <div class="menu-card-title">Rangkuman &amp; Lembar Kerja</div>
            <div class="menu-card-sub">Glosarium istilah penting dan cetak lembar catatan mandiri</div>
          </div>
          <span class="menu-status-badge" style="background:var(--pastel-sky); color:var(--sky-primary-dark);">PDF Siap</span>
        </div>
      </div>
    `;

    this.updateProgress();
  },

  updateProgress() {
    const k1 = document.querySelector('#status-kegiatan-1');
    const k2 = document.querySelector('#status-kegiatan-2');
    const k3 = document.querySelector('#status-kegiatan-3');
    const qz = document.querySelector('#status-kuis');

    if (k1) {
      k1.textContent = AppState.progress.kegiatan1Done ? '✓ Selesai' : 'Belum';
      k1.className = `menu-status-badge ${AppState.progress.kegiatan1Done ? 'status-done' : 'status-pending'}`;
    }
    if (k2) {
      k2.textContent = AppState.progress.kegiatan2Done ? '✓ Selesai' : 'Belum';
      k2.className = `menu-status-badge ${AppState.progress.kegiatan2Done ? 'status-done' : 'status-pending'}`;
    }
    if (k3) {
      k3.textContent = AppState.progress.kegiatan3Done ? '✓ Selesai' : 'Belum';
      k3.className = `menu-status-badge ${AppState.progress.kegiatan3Done ? 'status-done' : 'status-pending'}`;
    }
    if (qz) {
      qz.textContent = AppState.progress.quizCompleted
        ? `Skor: ${AppState.progress.quizScore}`
        : 'Belum Ujian';
      qz.className = `menu-status-badge ${AppState.progress.quizCompleted ? 'status-done' : 'status-pending'}`;
    }
  }
};
