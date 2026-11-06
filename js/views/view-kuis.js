/**
 * VIEW-KUIS.JS - MODUL HALAMAN 10 (KUIS AKHIR 10 SOAL PG DENGAN PEMBAHASAN)
 * Sesuai Storyboard Proposal Halaman 15 & 17
 */

const ViewKuis = {
  render(container) {
    container.innerHTML = `
      <div class="quiz-header-status">
        <span id="quiz-num-indicator" style="font-weight:700; font-size:13px; color:var(--primary-sky-deep);">Soal 1 dari 10</span>
        <span id="quiz-tp-badge" class="quiz-tp-badge">TP 1: Konsep &amp; Istilah</span>
      </div>

      <div class="card">
        <div id="quiz-question-text" class="quiz-q-text">
          Memuat pertanyaan kuis...
        </div>

        <div id="quiz-options-container">
          <!-- Pilihan Opsi A, B, C, D -->
        </div>

        <div style="margin-top:14px; display:flex; flex-direction:column; gap:8px;">
          <button type="button" id="btn-quiz-lock" class="btn btn-primary btn-full" onclick="ViewKuis.lockAnswer()">
            🔒 Kunci Jawaban &amp; Buka Pembahasan
          </button>
        </div>

        <div id="quiz-explanation-box" class="quiz-explanation-box">
          <!-- Pembahasan Ilmiah -->
        </div>
      </div>

      <!-- Navigasi Soal Prev / Next -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <button type="button" id="btn-quiz-prev" class="btn btn-outline" style="padding:8px 14px;" onclick="ViewKuis.prevQuestion()">
          ◀ Sebelumnya
        </button>
        <button type="button" id="btn-quiz-next" class="btn btn-outline" style="padding:8px 14px;" onclick="ViewKuis.nextQuestion()">
          Berikutnya ▶
        </button>
      </div>

      <!-- Tombol Selesai & Lihat Hasil -->
      <button type="button" id="btn-quiz-submit" class="btn btn-success btn-full" style="display:none; font-size:14px; padding:12px;" onclick="ViewKuis.submitQuiz()">
        🏆 Lihat Hasil Evaluasi &amp; Rekomendasi
      </button>
    `;

    this.renderQuestion(AppState.quiz.currentQuestionIndex);
  },

  renderQuestion(idx) {
    AppState.quiz.currentQuestionIndex = idx;
    const q = APP_DATA.finalQuiz[idx];
    const totalQ = APP_DATA.finalQuiz.length;

    const numInd = document.querySelector('#quiz-num-indicator');
    const tpBadge = document.querySelector('#quiz-tp-badge');
    const qText = document.querySelector('#quiz-question-text');

    if (numInd) numInd.textContent = `Soal ${idx + 1} dari ${totalQ}`;
    if (tpBadge) tpBadge.textContent = `${q.tpCode}: ${q.tpId === 1 ? 'Konsep & Istilah' : q.tpId === 2 ? 'Tiga Tingkat' : 'Pengamatan & Pelestarian'}`;
    if (qText) qText.textContent = q.question;

    const isLocked = AppState.quiz.isLocked[idx] || false;
    const selectedKey = AppState.quiz.userAnswers[idx] || null;

    const optContainer = document.querySelector('#quiz-options-container');
    if (optContainer) {
      optContainer.innerHTML = q.options.map(opt => {
        let optClass = 'quiz-option-item';
        if (opt.key === selectedKey) optClass += ' selected';

        if (isLocked) {
          if (opt.key === q.correctKey) {
            optClass += ' confirmed-correct';
          } else if (opt.key === selectedKey && selectedKey !== q.correctKey) {
            optClass += ' confirmed-wrong';
          }
        }

        return `
          <button type="button" class="${optClass}" onclick="ViewKuis.selectOption('${opt.key}')" ${isLocked ? 'disabled' : ''}>
            <strong>${opt.key}.</strong> ${opt.text}
          </button>
        `;
      }).join('');
    }

    const expBox = document.querySelector('#quiz-explanation-box');
    if (expBox) {
      if (isLocked) {
        expBox.className = 'quiz-explanation-box show';
        const isCorrect = (selectedKey === q.correctKey);
        expBox.innerHTML = `
          <div style="font-weight:700; color:${isCorrect ? 'var(--feedback-correct)' : 'var(--feedback-wrong)'}; margin-bottom:4px;">
            ${isCorrect ? '✓ Jawaban Anda Benar!' : '✗ Jawaban Belum Tepat! Kunci Jawaban: ' + q.correctKey}
          </div>
          <div><strong>Pembahasan Ilmiah:</strong> ${q.explanation}</div>
        `;
      } else {
        expBox.className = 'quiz-explanation-box';
        expBox.innerHTML = '';
      }
    }

    const lockBtn = document.querySelector('#btn-quiz-lock');
    if (lockBtn) {
      lockBtn.disabled = isLocked;
      lockBtn.textContent = isLocked ? '✓ Jawaban Telah Dikunci' : '🔒 Kunci Jawaban & Buka Pembahasan';
    }

    const prevBtn = document.querySelector('#btn-quiz-prev');
    const nextBtn = document.querySelector('#btn-quiz-next');
    if (prevBtn) prevBtn.disabled = (idx === 0);
    if (nextBtn) nextBtn.disabled = (idx === totalQ - 1);

    this.checkFinishReadiness();
  },

  selectOption(key) {
    const idx = AppState.quiz.currentQuestionIndex;
    if (AppState.quiz.isLocked[idx]) return;
    AppState.quiz.userAnswers[idx] = key;
    this.renderQuestion(idx);
  },

  lockAnswer() {
    const idx = AppState.quiz.currentQuestionIndex;
    const selected = AppState.quiz.userAnswers[idx];

    if (!selected) {
      alert('Silakan pilih salah satu opsi jawaban (A, B, C, atau D) terlebih dahulu!');
      return;
    }

    AppState.quiz.isLocked[idx] = true;
    this.renderQuestion(idx);
    this.checkFinishReadiness();
  },

  prevQuestion() {
    if (AppState.quiz.currentQuestionIndex > 0) {
      this.renderQuestion(AppState.quiz.currentQuestionIndex - 1);
    }
  },

  nextQuestion() {
    if (AppState.quiz.currentQuestionIndex < APP_DATA.finalQuiz.length - 1) {
      this.renderQuestion(AppState.quiz.currentQuestionIndex + 1);
    }
  },

  checkFinishReadiness() {
    const totalQ = APP_DATA.finalQuiz.length;
    const answeredCount = Object.keys(AppState.quiz.isLocked).filter(k => AppState.quiz.isLocked[k] === true).length;
    const submitBtn = document.querySelector('#btn-quiz-submit');

    if (submitBtn) {
      submitBtn.style.display = (answeredCount === totalQ) ? 'inline-flex' : 'none';
    }
  },

  submitQuiz() {
    let totalCorrect = 0;
    let tp1Correct = 0, tp1Total = 0;
    let tp2Correct = 0, tp2Total = 0;
    let tp3Correct = 0, tp3Total = 0;

    APP_DATA.finalQuiz.forEach((q, idx) => {
      const userAns = AppState.quiz.userAnswers[idx];
      const isCorrect = (userAns === q.correctKey);

      if (q.tpId === 1) {
        tp1Total++;
        if (isCorrect) tp1Correct++;
      } else if (q.tpId === 2) {
        tp2Total++;
        if (isCorrect) tp2Correct++;
      } else if (q.tpId === 3) {
        tp3Total++;
        if (isCorrect) tp3Correct++;
      }

      if (isCorrect) totalCorrect++;
    });

    const finalScore = totalCorrect * 10;
    const tp1Pct = Math.round((tp1Correct / tp1Total) * 100);
    const tp2Pct = Math.round((tp2Correct / tp2Total) * 100);
    const tp3Pct = Math.round((tp3Correct / tp3Total) * 100);

    AppState.quiz.calculatedScores = {
      total: finalScore,
      tp1Pct, tp1Correct, tp1Total,
      tp2Pct, tp2Correct, tp2Total,
      tp3Pct, tp3Correct, tp3Total
    };

    AppState.progress.quizCompleted = true;
    AppState.progress.quizScore = finalScore;
    AppState.save();

    AppRouter.goToPage(11);
  }
};

