/**
 * ROUTER.JS - PENGENDALI NAVIGASI & ALUR PENGGUNAAN (12 HALAMAN)
 * Multimedia Pembelajaran Interaktif SMP Negeri 1 Tandukkalua
 */

const AppRouter = {
  goToPage(pageNumber) {
    if (pageNumber < 1 || pageNumber > AppState.totalPages) return;
    AppState.currentPage = pageNumber;

    // Sembunyikan semua halaman & tampilkan halaman aktif
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const activePage = document.querySelector(`#page-${pageNumber}`);
    if (activePage) activePage.classList.add('active');

    // Perbarui tracker halaman atas
    const tracker = document.querySelector('#page-tracker-badge');
    if (tracker) tracker.textContent = `Halaman ${pageNumber} / ${AppState.totalPages}`;

    // Perbarui navigasi bilah bawah
    this.updateBottomNav(pageNumber);

    // Panggil hook pembaruan dinamis
    if (pageNumber === 3 && window.ViewMenu) ViewMenu.updateProgress();
    if (pageNumber === 10 && window.ViewKuis) ViewKuis.renderQuestion(AppState.quiz.currentQuestionIndex);
    if (pageNumber === 11 && window.ViewHasil) ViewHasil.renderResult();

    // Simpan status
    AppState.save();

    // Scroll konten ke atas
    const content = document.querySelector('.app-content');
    if (content) content.scrollTop = 0;
  },

  updateBottomNav(pageNum) {
    const leftBtn = document.querySelector('#btn-bottom-left');
    const rightBtn = document.querySelector('#btn-bottom-right');
    const bottomNav = document.querySelector('.app-bottom-nav');

    if (!leftBtn || !rightBtn || !bottomNav) return;

    leftBtn.style.display = 'inline-flex';
    rightBtn.style.display = 'inline-flex';
    bottomNav.style.display = 'flex';

    switch (pageNum) {
      case 1: // Beranda
        leftBtn.textContent = 'Langsung ke Menu';
        leftBtn.className = 'btn btn-outline';
        rightBtn.textContent = 'Mulai Belajar';
        rightBtn.className = 'btn btn-primary';
        break;

      case 2: // Petunjuk dan Tujuan
        leftBtn.textContent = 'Kembali';
        leftBtn.className = 'btn btn-outline';
        rightBtn.textContent = 'Lanjut ke Menu';
        rightBtn.className = 'btn btn-primary';
        break;

      case 3: // Menu Utama
        leftBtn.textContent = 'Beranda';
        leftBtn.className = 'btn btn-outline';
        rightBtn.style.display = 'none';
        break;

      case 4: // Kegiatan 1 Materi
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Berikutnya (Latihan 1)';
        rightBtn.className = 'btn btn-primary';
        break;

      case 5: // Kegiatan 1 Latihan
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Kegiatan 2: Tiga Tingkat';
        rightBtn.className = 'btn btn-primary';
        break;

      case 6: // Kegiatan 2 Materi
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Berikutnya (Latihan 2)';
        rightBtn.className = 'btn btn-primary';
        break;

      case 7: // Kegiatan 2 Latihan
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Kegiatan 3: Pengamatan';
        rightBtn.className = 'btn btn-primary';
        break;

      case 8: // Kegiatan 3 Materi
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Berikutnya (Latihan 3)';
        rightBtn.className = 'btn btn-primary';
        break;

      case 9: // Kegiatan 3 Latihan
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Berikutnya (Kuis Akhir)';
        rightBtn.className = 'btn btn-primary';
        break;

      case 10: // Kuis Akhir
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.style.display = 'none';
        break;

      case 11: // Hasil Evaluasi
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Rangkuman & PDF';
        rightBtn.className = 'btn btn-primary';
        break;

      case 12: // Rangkuman
        leftBtn.textContent = 'Menu';
        leftBtn.className = 'btn btn-secondary';
        rightBtn.textContent = 'Selesai Belajar';
        rightBtn.className = 'btn btn-primary';
        break;
    }
  },

  handleBottomLeft() {
    const pageNum = AppState.currentPage;
    switch (pageNum) {
      case 1: this.goToPage(3); break;
      case 2: this.goToPage(1); break;
      default: this.goToPage(3); break;
    }
  },

  handleBottomRight() {
    const pageNum = AppState.currentPage;
    switch (pageNum) {
      case 1: this.goToPage(2); break;
      case 2: this.goToPage(3); break;
      case 4: this.goToPage(5); break;
      case 5: this.goToPage(6); break;
      case 6: this.goToPage(7); break;
      case 7: this.goToPage(8); break;
      case 8: this.goToPage(9); break;
      case 9: this.goToPage(10); break;
      case 11: this.goToPage(12); break;
      case 12: this.goToPage(1); break;
    }
  }
};

