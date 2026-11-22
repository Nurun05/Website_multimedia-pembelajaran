/**
 * VIEW-KUIS.JS - MODUL HALAMAN 10 (KUIS AKHIR 10 SOAL PG DENGAN PEMBAHASAN)
 * Sesuai Storyboard Proposal Halaman 15 & 17
 */

const ViewKuis = {
  lockInterval: null,

  render(container) {
    if (!container) container = document.querySelector('#page-10');
    if (!container) return;

    // 4. KUNCI OTOMATIS SETELAH PENGIRIMAN (Submissions Lock)
    // Jika perangkat dalam periode kunci submisi, tampilkan layar proteksi perangkat
    if (typeof AppState.isDeviceQuizLocked === 'function' && AppState.isDeviceQuizLocked()) {
      this.renderDeviceLockScreen(container);
      return;
    }
    if (this.lockInterval) {
      clearInterval(this.lockInterval);
      this.lockInterval = null;
    }

    const student = AppState.student || {};
    const isRetake = student.name && AppState.isRetakeInstructed(student.name);
    const isCompleted = student.name && AppState.isStudentCompleted(student.name) && !isRetake;
    const isVerified = student.isVerified && student.name && student.photo;

    const verifierHTML = window.StudentVerifier ? StudentVerifier.getCardHTML('kuis') : '';

    container.innerHTML = `
      <!-- Wadah Verifikasi Identitas & Foto Siswa (Anti-Joki) -->
      <div id="verifier-container-kuis">
        ${verifierHTML}
      </div>

      <!-- Area Soal Kuis (Aktif hanya jika siswa sudah pilih nama & ambil foto, serta belum selesai) -->
      <div id="quiz-workspace" style="display:${(isVerified && !isCompleted) ? 'block' : 'none'};">
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

        <!-- Tombol Selesai & Kirim Hasil ke Guru -->
        <button type="button" id="btn-quiz-submit" class="btn btn-success btn-full" style="display:none; font-size:14px; padding:12px;" onclick="ViewKuis.submitQuiz()">
          🏆 Selesai &amp; Kirim Hasil ke Guru
        </button>
      </div>

      <!-- Kotak Petunjuk Terkunci Jika Belum Ambil Foto -->
      <div id="quiz-locked-notice" class="card" style="display:${(!isVerified && !isCompleted) ? 'block' : 'none'}; text-align:center; padding:22px 16px; background:#f8fafc; border:1.5px dashed #cbd5e1; margin-top:12px;">
        <span style="font-size:32px; display:block; margin-bottom:6px;">🔒</span>
        <strong style="color:var(--primary-sky-deep); font-size:13.5px;">Soal Kuis Masih Terkunci</strong>
        <p style="font-size:12px; color:#64748b; margin:6px auto 0; max-width:340px; line-height:1.5;">
          Sesuai panduan penilaian resmi, silakan <strong>pilih nama Anda</strong> pada daftar di atas lalu klik tombol <strong>"📷 Ambil Foto"</strong> untuk membuka soal kuis.
        </p>
      </div>
    `;

    if (isVerified && !isCompleted) {
      this.renderQuestion(AppState.quiz.currentQuestionIndex || 0);
    }
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
    if (window.StudentVerifier && !StudentVerifier.ensureVerified('kuis')) {
      return;
    }
    const idx = AppState.quiz.currentQuestionIndex;
    if (AppState.quiz.isLocked[idx]) return;
    AppState.quiz.userAnswers[idx] = key;
    this.renderQuestion(idx);
  },

  lockAnswer() {
    if (window.StudentVerifier && !StudentVerifier.ensureVerified('kuis')) {
      return;
    }
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
    if (window.StudentVerifier && !StudentVerifier.ensureVerified('kuis')) {
      return;
    }
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

    // Catat secara otomatis ke Folder Guru lengkap dengan foto dokumentasi & status KKM
    const now = new Date();
    const formattedDate = now.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const passThreshold = (window.APP_DATA && APP_DATA.info && APP_DATA.info.passingScore) || 70;
    const isPass = finalScore >= passThreshold;
    const studentName = (AppState.student && AppState.student.name) || 'Siswa';
    const studentPhoto = (AppState.student && AppState.student.photo) || '';

    const submission = {
      id: 'sub-' + Date.now(),
      studentName: studentName,
      studentPhoto: studentPhoto,
      score: finalScore,
      isPass: isPass,
      tpScores: {
        tp1: { correct: tp1Correct, total: tp1Total, pct: tp1Pct },
        tp2: { correct: tp2Correct, total: tp2Total, pct: tp2Pct },
        tp3: { correct: tp3Correct, total: tp3Total, pct: tp3Pct }
      },
      userAnswers: { ...AppState.quiz.userAnswers },
      submittedAt: `${formattedDate}, ${formattedTime} WITA`
    };

    AppState.addStudentSubmission(submission);
    AppState.save();

    if (window.StudentVerifier) StudentVerifier.syncAllCards();
    if (window.TeacherPanel) TeacherPanel.renderDashboard();
    if (window.ViewMenu) ViewMenu.updateProgress();

    // Jeda waktu (cooldown) 3 detik lalu reset otomatis ke tampilan awal
    this.showQuizSuccessCooldown(studentName);
  },

  showQuizSuccessCooldown(studentName) {
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
          Kuis Akhir Berhasil Dikirim!
        </h3>
        <p style="font-size:13px; color:#334155; line-height:1.55; margin-bottom:14px;">
          Terima kasih, <strong>${studentName}</strong>! Jawaban serta foto dokumentasi Anda telah tersimpan resmi ke Folder Guru.
        </p>
        <div style="background:var(--pastel-sky-subtle); border:1.5px solid var(--pastel-sky-border); border-radius:var(--radius-md); padding:12px 14px; margin-bottom:8px;">
          <div style="font-size:12px; color:#64748b; margin-bottom:4px;">Memproses jeda waktu pergantian peserta:</div>
          <div style="font-size:13.5px; font-weight:700; color:var(--primary-sky-deep);">
            Halaman akan di-reset dalam <span id="cooldown-counter" style="display:inline-block; min-width:24px; padding:2px 8px; background:var(--primary-sky); color:#fff; border-radius:6px; font-size:15px;">${remainingSeconds}</span> detik...
          </div>
          <div style="font-size:11px; color:#94a3b8; margin-top:5px;">
            Perangkat siap digunakan kembali oleh siswa berikutnya.
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

        // Reset sesi kuis dan identitas siswa aktif sehingga bersih untuk siswa selanjutnya
        if (window.StudentVerifier) {
          StudentVerifier.resetActiveStudent();
        } else {
          AppState.resetActiveStudent();
        }

        // Muat ulang tampilan halaman kuis dalam mode awal yang bersih
        if (window.AppRouter) {
          AppRouter.goToPage(10);
        }
      }
    }, 1000);
  },

  renderDeviceLockScreen(container) {
    if (this.lockInterval) {
      clearInterval(this.lockInterval);
      this.lockInterval = null;
    }
    const lockInfo = AppState.deviceLock || {};
    const studentName = lockInfo.studentName || 'Siswa Sebelumnya';

    container.innerHTML = `
      <div class="card" style="text-align:center; padding:32px 20px; background:#fffbeb; border:2px solid #f59e0b; border-radius:12px; margin:16px 0; box-shadow:0 4px 16px rgba(245,158,11,0.15);">
        <div style="font-size:46px; margin-bottom:8px;">🔒⏱️</div>
        <h3 style="font-size:16px; font-weight:700; color:#92400e; margin-bottom:6px;">
          Kuis Akhir Terkunci Sementara (Keamanan Pengiriman)
        </h3>
        <p style="font-size:12.5px; color:#78350f; line-height:1.6; max-width:440px; margin:0 auto 14px;">
          Kuis baru saja selesai dikerjakan dan dikirim ke Folder Guru oleh <strong>${studentName}</strong>. 
          Untuk mencegah manipulasi nilai atau pengerjaan ganda di perangkat yang sama, akses pengerjaan kuis <strong>terkunci otomatis</strong>.
        </p>

        <div style="margin:14px 0;">
          <div id="device-lock-countdown" style="font-size:13.5px; font-weight:700; color:#b45309; background:#fef3c7; border:1px solid #fcd34d; padding:8px 18px; border-radius:20px; display:inline-block;">
            ⏱️ Sisa waktu kunci: <span id="countdown-timer-text">...</span>
          </div>
        </div>

        <div style="font-size:11.5px; color:#64748b; margin-bottom:16px;">
          Guru dapat membuka kunci ini secara langsung untuk siswa berikutnya melalui tombol di bawah:
        </div>

        <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
          <button type="button" class="btn btn-primary" style="font-size:12px; padding:9px 18px; font-weight:700;" onclick="TeacherPanel.promptUnlockByGuru()">
            👨‍🏫 Buka Kunci oleh Guru (Input PIN)
          </button>
          <button type="button" class="btn btn-outline" style="font-size:12px; padding:9px 18px;" onclick="AppRouter.goToPage(3)">
            🏠 Kembali ke Menu Utama
          </button>
        </div>
      </div>
    `;

    this.startLockCountdown(container);
  },

  startLockCountdown(container) {
    const update = () => {
      const remainingSecs = typeof AppState.getDeviceLockRemainingSeconds === 'function' ? AppState.getDeviceLockRemainingSeconds() : 0;
      const el = document.querySelector('#countdown-timer-text');
      if (remainingSecs <= 0) {
        if (this.lockInterval) {
          clearInterval(this.lockInterval);
          this.lockInterval = null;
        }
        AppState.unlockDeviceQuiz();
        this.render(container);
        return;
      }
      const mins = Math.floor(remainingSecs / 60);
      const secs = remainingSecs % 60;
      if (el) {
        el.textContent = `${mins} menit ${secs < 10 ? '0' : ''}${secs} detik`;
      }
    };
    update();
    this.lockInterval = setInterval(update, 1000);
  }
};


if (typeof window !== "undefined") window.ViewKuis = ViewKuis;
