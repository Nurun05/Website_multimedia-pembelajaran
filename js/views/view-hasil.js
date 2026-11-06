/**
 * VIEW-HASIL.JS - MODUL HALAMAN 11 (HASIL EVALUASI & ANALISIS KEMAMPUAN)
 * Sesuai Storyboard Proposal Halaman 15 & 17
 */

const ViewHasil = {
  render(container) {
    container.innerHTML = `
      <!-- Hero Lingkaran Skor & Status Tuntas Sesuai Proposal -->
      <div class="result-hero">
        <div id="score-gauge-circle" class="score-circle-gauge">
          <span id="result-score-val" class="score-value-text">0</span>
        </div>
        <div id="result-status-pill" class="status-pill pass">TUNTAS</div>
        <div id="result-status-desc" style="font-size:12px; color:#475569; max-width:320px; margin:0 auto;">
          Menghitung hasil evaluasi...
        </div>
      </div>

      <!-- Bilah Capaian Per Tujuan Pembelajaran -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">📊</span>
          <div class="card-title">Capaian per Tujuan Pembelajaran</div>
        </div>

        <!-- TP 1 Bar -->
        <div class="tp-progress-bar-group">
          <div class="tp-bar-label">
            <span><strong>TP 1:</strong> Konsep &amp; Istilah Kunci</span>
            <span id="tp-1-text">0%</span>
          </div>
          <div class="tp-track">
            <div id="tp-1-fill" class="tp-fill" style="width:0%;"></div>
          </div>
        </div>

        <!-- TP 2 Bar -->
        <div class="tp-progress-bar-group">
          <div class="tp-bar-label">
            <span><strong>TP 2:</strong> Tiga Tingkat Kehati</span>
            <span id="tp-2-text">0%</span>
          </div>
          <div class="tp-track">
            <div id="tp-2-fill" class="tp-fill" style="width:0%;"></div>
          </div>
        </div>

        <!-- TP 3 Bar -->
        <div class="tp-progress-bar-group">
          <div class="tp-bar-label">
            <span><strong>TP 3:</strong> Pengamatan &amp; Pelestarian</span>
            <span id="tp-3-text">0%</span>
          </div>
          <div class="tp-track">
            <div id="tp-3-fill" class="tp-fill" style="width:0%;"></div>
          </div>
        </div>
      </div>

      <!-- Kotak Rekomendasi Pintar (Capaian < 60% ditandai untuk diulang) -->
      <div id="result-recommendation-box" class="recommendation-box">
        Memuat saran pembelajaran...
      </div>

      <!-- 4 Tombol Tindakan Hasil -->
      <div style="display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; gap:8px;">
          <button type="button" class="btn btn-outline" style="flex:1;" onclick="ViewHasil.retakeQuiz()">
            🔄 Ulangi Kuis
          </button>
          <button type="button" class="btn btn-secondary" style="flex:1;" onclick="ViewHasil.reviewMaterial()">
            📚 Belajar Lagi
          </button>
        </div>
        <button type="button" class="btn btn-primary btn-full" onclick="AppRouter.goToPage(12)">
          📑 Buka Rangkuman &amp; PDF Catatan
        </button>
      </div>
    `;

    this.renderResult();
  },

  renderResult() {
    const scores = AppState.quiz.calculatedScores;
    const passThreshold = APP_DATA.info.passingScore; // 70

    const scoreVal = document.querySelector('#result-score-val');
    const gauge = document.querySelector('#score-gauge-circle');
    if (scoreVal) scoreVal.textContent = scores.total;
    if (gauge) {
      const angle = (scores.total / 100) * 360;
      gauge.style.setProperty('--score-angle', `${angle}deg`);
    }

    const isPass = scores.total >= passThreshold;
    const statusPill = document.querySelector('#result-status-pill');
    const statusDesc = document.querySelector('#result-status-desc');

    if (statusPill) {
      statusPill.textContent = isPass ? 'TUNTAS (LULUS)' : 'BELUM TUNTAS';
      statusPill.className = `status-pill ${isPass ? 'pass' : 'fail'}`;
    }
    if (statusDesc) {
      statusDesc.textContent = isPass
        ? `Selamat! Kamu telah mencapai skor ${scores.total} (di atas batas ketuntasan ${passThreshold}). Pemahamanmu mengenai Keanekaragaman Hayati sudah sangat baik.`
        : `Nilai kamu adalah ${scores.total} (di bawah batas ketuntasan ${passThreshold}). Jangan menyerah, baca kembali materi pada kegiatan yang direkomendasikan di bawah!`;
    }

    this.updateBar(1, scores.tp1Pct, `${scores.tp1Correct}/${scores.tp1Total} Soal Benar (${scores.tp1Pct}%)`);
    this.updateBar(2, scores.tp2Pct, `${scores.tp2Correct}/${scores.tp2Total} Soal Benar (${scores.tp2Pct}%)`);
    this.updateBar(3, scores.tp3Pct, `${scores.tp3Correct}/${scores.tp3Total} Soal Benar (${scores.tp3Pct}%)`);

    const needReview = [];
    if (scores.tp1Pct < 60) needReview.push('• <strong>Kegiatan 1 (Konsep & Istilah)</strong>: Pelajari kembali arti biodiversitas, spesies, habitat, dan ekosistem.');
    if (scores.tp2Pct < 60) needReview.push('• <strong>Kegiatan 2 (Tiga Tingkat Keanekaragaman)</strong>: Buka kembali perbedaan mendasar antara tingkat gen (satu spesies) dan tingkat jenis (antarspesies).');
    if (scores.tp3Pct < 60) needReview.push('• <strong>Kegiatan 3 (Pengamatan, Ancaman & Pelestarian)</strong>: Pahami kembali zona fauna Wallacea serta perbedaan pelestarian in situ dan ex situ.');

    const recBox = document.querySelector('#result-recommendation-box');
    if (recBox) {
      if (needReview.length > 0) {
        recBox.innerHTML = `
          <strong>💡 Saran Pembelajaran Terarah:</strong><br>
          Berdasarkan hasil kuis, capaian kamu berada di bawah 60% pada bagian berikut:<br>
          <div style="margin-top:6px;">${needReview.join('<br>')}</div>
        `;
      } else {
        recBox.innerHTML = `
          <strong>🌟 Rekomendasi Unggul:</strong><br>
          Semua tujuan pembelajaran (TP 1, TP 2, TP 3) telah kamu kuasai di atas 60%! Kamu siap melanjutkan ke topik ekologi berikutnya atau mencetak Lembar Catatan Ringkas.
        `;
      }
    }
  },

  updateBar(tpNum, pct, label) {
    const fill = document.querySelector(`#tp-${tpNum}-fill`);
    const text = document.querySelector(`#tp-${tpNum}-text`);
    if (fill) {
      fill.style.width = `${pct}%`;
      fill.className = `tp-fill ${pct < 60 ? 'low' : ''}`;
    }
    if (text) text.textContent = label;
  },

  retakeQuiz() {
    AppState.quiz.userAnswers = {};
    AppState.quiz.isLocked = {};
    AppState.quiz.currentQuestionIndex = 0;
    AppRouter.goToPage(10);
  },

  reviewMaterial() {
    const scores = AppState.quiz.calculatedScores;
    if (scores.tp1Pct < 60) AppRouter.goToPage(4);
    else if (scores.tp2Pct < 60) AppRouter.goToPage(6);
    else if (scores.tp3Pct < 60) AppRouter.goToPage(8);
    else AppRouter.goToPage(4);
  }
};

