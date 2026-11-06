/**
 * APP.JS - BOOTSTRAP UTAMA APLIKASI MULTIMEDIA (RESPONSIF & MODULAR)
 * Multimedia Pembelajaran Interaktif SMP Negeri 1 Tandukkalua
 * Pengembang: Nurun Nisa Ahmad (NIM: 240209501049) - PTIK E 2024
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Muat status tersimpan dari LocalStorage
  AppState.load();

  // 2. Render seluruh modul tampilan (Views)
  initViews();

  // 3. Pasang Event Listener Global
  initGlobalListeners();

  // 4. Mulai router pada halaman aktif
  AppRouter.goToPage(AppState.currentPage || 1);
});

function initViews() {
  const pageConfigs = [
    { num: 1, render: (c) => ViewBeranda.render(c) },
    { num: 2, render: (c) => ViewPetunjuk.render(c) },
    { num: 3, render: (c) => ViewMenu.render(c) },
    { num: 4, render: (c) => ViewKegiatan1.renderMateri(c) },
    { num: 5, render: (c) => ViewKegiatan1.renderLatihan(c) },
    { num: 6, render: (c) => ViewKegiatan2.renderMateri(c) },
    { num: 7, render: (c) => ViewKegiatan2.renderLatihan(c) },
    { num: 8, render: (c) => ViewKegiatan3.renderMateri(c) },
    { num: 9, render: (c) => ViewKegiatan3.renderLatihan(c) },
    { num: 10, render: (c) => ViewKuis.render(c) },
    { num: 11, render: (c) => ViewHasil.render(c) },
    { num: 12, render: (c) => ViewRangkuman.render(c) }
  ];

  pageConfigs.forEach(cfg => {
    const el = document.querySelector(`#page-${cfg.num}`);
    if (!el) return;

    // Render modul view awal
    cfg.render(el);

    // Jika berjalan pada server HTTP lokal, dukung live component loading dari folder pages/
    if (window.location.protocol.startsWith('http')) {
      fetch(`pages/page-${cfg.num}.html`)
        .then(res => {
          if (res.ok) return res.text();
          throw new Error('Fallback used');
        })
        .then(html => {
          if (html && html.trim().length > 0) {
            el.innerHTML = html;
            if (cfg.num === 9) ViewKegiatan3.initSortableDOM();
            if (cfg.num === 10) ViewKuis.renderQuestion(AppState.quiz.currentQuestionIndex);
            if (cfg.num === 11) ViewHasil.renderResult();
          }
        })
        .catch(() => {
          // Tetap menggunakan render template modul
        });
    }
  });
}

function initGlobalListeners() {
  // Tombol navigasi bilah bawah
  const btnLeft = document.querySelector('#btn-bottom-left');
  const btnRight = document.querySelector('#btn-bottom-right');

  if (btnLeft) {
    btnLeft.addEventListener('click', () => AppRouter.handleBottomLeft());
  }
  if (btnRight) {
    btnRight.addEventListener('click', () => AppRouter.handleBottomRight());
  }
}
