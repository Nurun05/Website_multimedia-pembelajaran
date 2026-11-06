/**
 * VIEW-KEGIATAN1.JS - MODUL HALAMAN 4 & 5 (MATERI 1 & LATIHAN 1)
 * Sesuai Storyboard Proposal Halaman 15
 */

const ViewKegiatan1 = {
  renderMateri(container) {
    const act = APP_DATA.activity1;
    container.innerHTML = `
      <!-- Pertanyaan Pemantik Kontekstual -->
      <div class="spark-box">
        <strong>Pertanyaan Pemantik:</strong><br>
        "${act.sparkQuestion}"
      </div>

      <!-- Konsep Utama (Ringkas 100-150 kata) -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">💡</span>
          <div class="card-title">Konsep Keanekaragaman Hayati</div>
        </div>
        <p style="font-size:13px; line-height:1.6; color:#334155; margin-bottom:10px;">
          ${act.conceptSummary}
        </p>
        <div style="background:var(--sky-50); border:1px solid var(--sky-200); border-radius:var(--radius-sm); padding:10px; font-size:12px; color:var(--primary-sky-deep);">
          📌 <em>Petunjuk:</em> Ketuk setiap kartu istilah penting di bawah ini untuk mempelajari pengertian lengkap dan contoh konkretnya!
        </div>
      </div>

      <!-- 6 Kartu Istilah Penting Interaktif (Accordion) -->
      <div style="margin-bottom:14px;">
        <h3 style="font-size:14px; font-weight:700; color:var(--primary-sky-deep); margin-bottom:8px;">
          Istilah Kunci yang Wajib Dipahami:
        </h3>
        ${act.terms.map((t, idx) => `
          <div class="accordion-item ${idx === 0 ? 'open' : ''}" id="acc-item-${t.id}">
            <div class="accordion-header" onclick="ViewKegiatan1.toggleAccordion('${t.id}')">
              <span><strong>${idx + 1}. ${t.title}</strong></span>
              <span class="badge-chip badge-tp">${t.badge}</span>
            </div>
            <div class="accordion-body">
              <strong>Pengertian:</strong> ${t.definition}<br>
              <div style="margin-top:6px; color:var(--primary-sky-dark);">${t.example}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  toggleAccordion(termId) {
    const item = document.querySelector(`#acc-item-${termId}`);
    if (item) item.classList.toggle('open');
  },

  renderLatihan(container) {
    const quizItems = APP_DATA.activity1.quiz;
    container.innerHTML = `
      <div style="margin-bottom:12px;">
        <h2 style="font-size:16px; font-weight:700; color:var(--primary-sky-deep);">Latihan Interaktif 1</h2>
        <div style="font-size:12px; color:var(--text-muted);">
          Pilih jawaban yang paling tepat. Umpan balik langsung akan memandumu jika masih ada konsep yang keliru!
        </div>
      </div>

      <div id="exercise-1-list">
        ${quizItems.map((q, qIdx) => `
          <div class="card exercise-card" id="ex1-card-${qIdx}">
            <div style="font-weight:700; font-size:13px; color:var(--primary-sky-deep); margin-bottom:8px;">
              Soal ${qIdx + 1} dari 3:
            </div>
            <p style="font-size:12.5px; margin-bottom:12px; color:#1e293b;">${q.question}</p>
            <div class="options-wrapper">
              ${q.options.map((opt, optIdx) => `
                <button type="button" class="option-btn" onclick="ViewKegiatan1.checkAnswer(${qIdx}, ${optIdx}, this)">
                  <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt.text}
                </button>
              `).join('')}
            </div>
            <div class="feedback-box" id="ex1-fb-${qIdx}"></div>
          </div>
        `).join('')}
      </div>
    `;
  },

  checkAnswer(qIdx, optIdx, btnElement) {
    const question = APP_DATA.activity1.quiz[qIdx];
    const selectedOpt = question.options[optIdx];
    const parentCard = document.querySelector(`#ex1-card-${qIdx}`);
    const fbBox = document.querySelector(`#ex1-fb-${qIdx}`);

    parentCard.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');

    if (selectedOpt.isCorrect) {
      fbBox.className = 'feedback-box show correct';
      fbBox.innerHTML = `<strong>✓ Jawaban Benar!</strong><br>${question.feedbackCorrect}`;
      AppState.exercise1.results[qIdx] = true;
    } else {
      fbBox.className = 'feedback-box show wrong';
      fbBox.innerHTML = `<strong>✗ Belum Tepat.</strong><br>${question.hint}<br><span style="font-size:11px; color:#be123c;">(Silakan coba pilihan lain)</span>`;
      AppState.exercise1.results[qIdx] = false;
    }

    const correctCount = Object.values(AppState.exercise1.results).filter(v => v === true).length;
    if (correctCount === APP_DATA.activity1.quiz.length) {
      AppState.progress.kegiatan1Done = true;
      AppState.save();
      ViewMenu.updateProgress();
    }
  }
};

