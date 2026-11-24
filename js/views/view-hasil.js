/**
 * VIEW-HASIL.JS - MODUL HALAMAN 11 (HASIL EVALUASI & ANALISIS KEMAMPUAN)
 * Sesuai Storyboard Proposal Halaman 15 & 17
 */

const ViewHasil = {
  render(container) {
    if (!container) container = document.querySelector('#page-11');
    if (!container) return;

    // 2. ISOLASI PRIVASI NILAI SISWA & MANAJEMEN SESI PERANGKAT
    // Lembar hasil hanya dapat dilihat oleh siswa yang sedang aktif terverifikasi & menyelesaikan kuis
    const student = AppState.student || {};
    const isVerifiedActive = Boolean(student.isVerified && student.name);
    const hasCompletedQuiz = Boolean(AppState.progress.quizCompleted);

    if (!isVerifiedActive || !hasCompletedQuiz) {
      container.innerHTML = `
        <div class="card" style="text-align:center; padding:36px 20px; background:#f8fafc; border:1.5px dashed #cbd5e1; border-radius:12px; margin:20px 0;">
          <span style="font-size:44px; display:block; margin-bottom:10px;">🔒</span>
          <h3 style="font-size:16px; font-weight:700; color:var(--primary-sky-deep); margin-bottom:8px;">
            Lembar Hasil Kuis Bersifat Pribadi
          </h3>
          <p style="font-size:12.5px; color:#64748b; max-width:380px; margin:0 auto 16px; line-height:1.55;">
            Nilai kuis akhir siswa bersifat rahasia dan terlindungi. Halaman ini hanya dapat diakses secara langsung oleh siswa bersangkutan setelah menyelesaikan kuis atau oleh Guru di Portal Guru.
          </p>
          <div style="display:flex; justify-content:center; gap:10px;">
            <button type="button" class="btn btn-primary" onclick="AppRouter.goToPage(10)">
              📝 Menuju Kuis Akhir
            </button>
            <button type="button" class="btn btn-outline" onclick="AppRouter.goToPage(3)">
              🏠 Menu Utama
            </button>
          </div>
        </div>
      `;
      return;
    }

    const verifierHTML = window.StudentVerifier ? StudentVerifier.getResultBadgeHTML() : '';

    container.innerHTML = `
      <!-- Profil & Foto Wajah Siswa Terverifikasi (Anti-Joki) -->
      <div id="verifier-container-hasil">
        ${verifierHTML}
      </div>

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
      <!-- Kotak Rekomendasi Pintar (Capaian < 60% ditandai untuk diulang) -->
      <div id="result-recommendation-box" class="recommendation-box">
        Memuat saran pembelajaran...
      </div>

      <!-- Kotak Status Kelulusan KKM Dinamis -->
      <div id="result-kkm-status-card" style="margin-bottom:14px;">
        <!-- Dirender oleh renderResult() -->
      </div>

      <!-- Tombol Tindakan Hasil Dinamis -->
      <div id="result-actions-container" style="display:flex; flex-direction:column; gap:8px;">
        <!-- Dirender oleh renderResult() -->
      </div>
    `;

    this.renderResult();
  },

  renderResult() {
    const vContainer = document.querySelector('#verifier-container-hasil');
    if (vContainer && window.StudentVerifier) {
      vContainer.innerHTML = StudentVerifier.getResultBadgeHTML();
    }

    const scores = AppState.quiz.calculatedScores || { total: 0, tp1Pct: 0, tp2Pct: 0, tp3Pct: 0 };
    const passThreshold = (window.APP_DATA && APP_DATA.info && APP_DATA.info.passingScore) || 70;

    const scoreVal = document.querySelector('#result-score-val');
    const gauge = document.querySelector('#score-gauge-circle');
    if (scoreVal) scoreVal.textContent = scores.total;
    if (gauge) {
      const angle = (scores.total / 100) * 360;
      gauge.style.setProperty('--score-angle', `${angle}deg`);
    }

    const isPass = scores.total >= passThreshold;
    const student = AppState.student || {};
    const studentName = student.name || 'Siswa';
    const sub = AppState.getStudentSubmission(studentName);
    const attempts = (sub && sub.attempts) ? sub.attempts : 1;

    const statusPill = document.querySelector('#result-status-pill');
    const statusDesc = document.querySelector('#result-status-desc');

    if (statusPill) {
      statusPill.textContent = isPass ? 'TUNTAS (LULUS KKM)' : 'BELUM TUNTAS KKM';
      statusPill.className = `status-pill ${isPass ? 'pass' : 'fail'}`;
    }
    if (statusDesc) {
      statusDesc.textContent = isPass
        ? `Selamat! Kamu telah mencapai skor ${scores.total} (memenuhi batas minimal KKM ${passThreshold}). Pemahamanmu mengenai Keanekaragaman Hayati sudah tuntas.`
        : `Nilai kamu adalah ${scores.total} (di bawah batas minimal KKM ${passThreshold}). Kamu wajib mengulang Kuis Akhir hingga mencapai nilai tuntas KKM!`;
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
          Semua tujuan pembelajaran (TP 1, TP 2, TP 3) telah kamu kuasai di atas 60%! Kamu siap melanjutkan ke materi rangkuman.
        `;
      }
    }

    // Render Kotak Status KKM & Tombol Tindakan Sesuai Kelulusan Siswa
    const kkmCard = document.querySelector('#result-kkm-status-card');
    const actionsBox = document.querySelector('#result-actions-container');

    if (kkmCard) {
      if (isPass) {
        kkmCard.innerHTML = `
          <div style="background:#f0fdf4; border:2px solid #22c55e; border-radius:var(--radius-md); padding:14px 16px; text-align:center;">
            <div style="font-size:32px; margin-bottom:4px;">🎉</div>
            <div style="color:#15803d; font-weight:800; font-size:14px;">SELAMAT! ANDA TUNTAS KKM (Skor: ${scores.total} / 100)</div>
            <div style="color:#166534; font-size:12px; margin-top:4px; line-height:1.5;">
              Hasil kuis telah mencapai standar kelulusan KKM (≥ ${passThreshold}) pada percobaan ke-${attempts}. Status kuis nama Anda telah <strong>resmi dikunci ("Sudah Selesai")</strong> dan tersimpan resmi ke Folder Guru.
            </div>
          </div>
        `;
      } else {
        kkmCard.innerHTML = `
          <div style="background:#fef2f2; border:2px solid #ef4444; border-radius:var(--radius-md); padding:14px 16px; text-align:center;">
            <div style="font-size:32px; margin-bottom:4px;">⚠️</div>
            <div style="color:#b91c1c; font-weight:800; font-size:14px;">NILAI BELUM MENCAPAI KKM (Minimal ${passThreshold})</div>
            <div style="color:#991b1b; font-size:12px; margin-top:4px; line-height:1.5;">
              Nilai Anda adalah <strong>${scores.total} / 100</strong> (Percobaan ke-${attempts}). Sesuai panduan evaluasi mandiri, Anda <strong>wajib mengulang Kuis Akhir</strong> sampai mencapai nilai tuntas KKM (minimal ${passThreshold}).
            </div>
          </div>
        `;
      }
    }

    if (actionsBox) {
      if (isPass) {
        actionsBox.innerHTML = `
          <button type="button" class="btn btn-primary btn-full" style="font-size:13.5px; padding:12px;" onclick="AppRouter.goToPage(12)">
            📑 Buka Rangkuman &amp; Cetak Catatan (Halaman 12)
          </button>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn btn-outline" style="flex:1; font-size:12px;" onclick="ViewHasil.finishAndCooldown()">
              👤 Selesai &amp; Pergantian Siswa (3 Detik)
            </button>
            <button type="button" class="btn btn-secondary" style="flex:1; font-size:12px;" onclick="ViewHasil.reviewMaterial()">
              📚 Tinjau Materi
            </button>
          </div>
        `;
      } else {
        actionsBox.innerHTML = `
          <button type="button" class="btn btn-primary btn-full" style="font-size:14px; font-weight:700; padding:12px; background:#d97706; border-color:#b45309;" onclick="ViewHasil.retakeQuiz()">
            🔄 Ulangi Kuis Akhir Sekarang (Wajib KKM)
          </button>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn btn-secondary" style="flex:1; font-size:12px;" onclick="ViewHasil.reviewMaterial()">
              📚 Pelajari Ulang Materi yang Belum Dikuasai
            </button>
            <button type="button" class="btn btn-outline" style="flex:1; font-size:12px;" onclick="AppRouter.goToPage(3)">
              🏠 Menu Utama
            </button>
          </div>
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

  nextStudent() {
    this.finishAndCooldown();
  },

  retakeQuiz() {
    // Reset jawaban kuis agar siswa dapat mengulang dari soal nomor 1
    AppState.resetQuizAnswers();
    if (window.AppRouter) {
      AppRouter.goToPage(10);
    }
  },

  finishAndCooldown() {
    const studentName = (AppState.student && AppState.student.name) || 'Siswa';
    this.showCooldownModal(studentName);
  },

  showCooldownModal(studentName) {
    let overlay = document.querySelector('#quiz-cooldown-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'quiz-cooldown-overlay';
      overlay.className = 'modal-overlay';
      document.body.appendChild(overlay);
    }

    let remainingSeconds = 3;
    overlay.innerHTML = `
      <div class="card" style="max-width:440px; width:92%; text-align:center; padding:28px 22px; border:2px solid var(--primary-sky); border-radius:var(--radius-lg); box-shadow:0 14px 35px rgba(15,36,61,0.22); background:#ffffff; animation:fadeInModal 0.25s ease;">
        <div style="font-size:46px; margin-bottom:10px;">🎉</div>
        <h3 style="font-size:17px; font-weight:700; color:var(--primary-sky-deep); margin-bottom:6px;">
          Sesi Belajar Kuis Selesai!
        </h3>
        <p style="font-size:13px; color:#334155; line-height:1.55; margin-bottom:14px;">
          Terima kasih, <strong>${studentName}</strong>! Nilai akhir Anda telah tuntas dan tersimpan resmi di Folder Guru.
        </p>
        <div style="background:var(--pastel-sky-subtle); border:1.5px solid var(--pastel-sky-border); border-radius:var(--radius-md); padding:12px 14px; margin-bottom:8px;">
          <div style="font-size:12px; color:#64748b; margin-bottom:4px;">Memproses jeda pergantian peserta:</div>
          <div style="font-size:13.5px; font-weight:700; color:var(--primary-sky-deep);">
            Perangkat akan siap dalam <span id="cooldown-counter" style="display:inline-block; min-width:24px; padding:2px 8px; background:var(--primary-sky); color:#fff; border-radius:6px; font-size:15px;">${remainingSeconds}</span> detik...
          </div>
        </div>
      </div>
    `;

    overlay.style.display = 'flex';
    overlay.classList.add('active');

    const counterEl = overlay.querySelector('#cooldown-counter');
    const intervalId = setInterval(() => {
      remainingSeconds--;
      if (counterEl) counterEl.textContent = remainingSeconds;
      if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        overlay.classList.remove('active');
        overlay.style.display = 'none';

        if (window.StudentVerifier) {
          StudentVerifier.resetActiveStudent();
        } else {
          AppState.resetActiveStudent();
        }

        if (window.AppRouter) {
          AppRouter.goToPage(10);
        }
      }
    }, 1000);
  },

  reviewMaterial() {
    const scores = AppState.quiz.calculatedScores || {};
    if (scores.tp1Pct < 60) AppRouter.goToPage(4);
    else if (scores.tp2Pct < 60) AppRouter.goToPage(6);
    else if (scores.tp3Pct < 60) AppRouter.goToPage(8);
    else AppRouter.goToPage(4);
  }
};


if (typeof window !== "undefined") window.ViewHasil = ViewHasil;
