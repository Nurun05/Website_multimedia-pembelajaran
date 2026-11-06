/**
 * VIEW-KEGIATAN3.JS - MODUL HALAMAN 8 & 9 (PENGAMATAN, ANCAMAN, PELESTARIAN & LATIHAN 3)
 * Sesuai Storyboard Proposal Halaman 15
 */

const ViewKegiatan3 = {
  renderMateri(container) {
    const act = APP_DATA.activity3;
    container.innerHTML = `
      <!-- Bagian A: 5 Langkah Pengamatan & Simulasi Animasi -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">🔬</span>
          <div class="card-title">Simulasi Langkah Pengamatan Ilmiah</div>
        </div>
        <p style="font-size:12px; color:#475569; margin-bottom:10px;">
          Berikut adalah 5 tahapan berurutan dalam mengamati dan mengidentifikasi keanekaragaman hayati di lingkungan sekitar:
        </p>

        <!-- Stage Tampilan Animasi Interaktif -->
        <div class="anim-step-stage">
          <div id="anim-step-badge" class="anim-step-badge">Langkah 1 dari 5</div>
          <div id="anim-step-title" class="anim-step-title">${act.steps[0].title}</div>
          <div id="anim-step-desc" class="anim-step-desc">${act.steps[0].desc}</div>
          
          <div style="display:flex; gap:6px; margin-top:12px;" id="anim-dots-bar">
            <span class="step-dot" style="width:8px; height:8px; border-radius:50%; background:var(--primary-sky);"></span>
            <span class="step-dot" style="width:8px; height:8px; border-radius:50%; background:#cbd5e1;"></span>
            <span class="step-dot" style="width:8px; height:8px; border-radius:50%; background:#cbd5e1;"></span>
            <span class="step-dot" style="width:8px; height:8px; border-radius:50%; background:#cbd5e1;"></span>
            <span class="step-dot" style="width:8px; height:8px; border-radius:50%; background:#cbd5e1;"></span>
          </div>
        </div>

        <!-- Tombol Kontrol Animasi -->
        <div class="anim-controls-bar">
          <button type="button" id="btn-anim-play" class="btn btn-outline" style="font-size:11.5px; padding:6px 12px;" onclick="ViewKegiatan3.togglePlayAnimation()">
            ▶ Putar Animasi
          </button>
          <button type="button" class="btn btn-secondary" style="font-size:11.5px; padding:6px 12px;" onclick="ViewKegiatan3.nextAnimationStep()">
            ⏭ Per Langkah
          </button>
          <button type="button" class="btn btn-outline" style="font-size:11.5px; padding:6px 12px;" onclick="ViewKegiatan3.resetAnimation()">
            🔄 Reset
          </button>
        </div>
      </div>

      <!-- Bagian B: Persebaran Fauna Wallace & Weber -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">🗺️</span>
          <div class="card-title">Persebaran Fauna (Garis Wallace &amp; Weber)</div>
        </div>
        <div style="text-align:center; margin-bottom:10px;">
          <img src="assets/map-wallace-weber.svg" alt="Peta Garis Wallace dan Weber Indonesia" style="width:100%; max-height:220px; border-radius:var(--radius-sm);">
        </div>
        <div style="font-size:12px; color:#334155; line-height:1.65;">
          <div>• <strong>Zona Asiatis (Barat):</strong> Mamalia besar seperti Gajah Sumatera, Badak Jawa, Orangutan.</div>
          <div>• <strong>Zona Peralihan / Wallacea (Tengah/Sulawesi):</strong> Satwa endemik khas seperti Anoa, Babirusa, Komodo, Burung Maleo.</div>
          <div>• <strong>Zona Australis (Timur/Papua):</strong> Hewan berkantung &amp; burung berbulu indah seperti Cenderawasih dan Kasuari.</div>
        </div>
      </div>

      <!-- Bagian C: 5 Ancaman Utama -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">⚠️</span>
          <div class="card-title">5 Ancaman Utama Kehati</div>
        </div>
        <ol style="margin-left:18px; font-size:12px; color:#475569; line-height:1.65;">
          ${act.threats.map(th => `
            <li><strong>${th.name}:</strong> ${th.desc}</li>
          `).join('')}
        </ol>
      </div>

      <!-- Bagian D: Pelestarian In Situ vs Ex Situ -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">🛡️</span>
          <div class="card-title">Bentuk Upaya Pelestarian</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:12px;">
          <div style="background:#ecfdf5; border-left:4px solid var(--feedback-correct); padding:10px; border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
            <strong style="color:var(--feedback-correct);">${act.conservation.inSitu.title}:</strong><br>
            ${act.conservation.inSitu.concept}<br>
            <em>Contoh:</em> ${act.conservation.inSitu.places}
          </div>
          <div style="background:var(--sky-50); border-left:4px solid var(--primary-sky); padding:10px; border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
            <strong style="color:var(--primary-sky);">${act.conservation.exSitu.title}:</strong><br>
            ${act.conservation.exSitu.concept}<br>
            <em>Contoh:</em> ${act.conservation.exSitu.places}
          </div>
        </div>
      </div>
    `;
  },

  renderAnimationStep(stepNum) {
    AppState.anim3.currentStep = stepNum;
    const stepData = APP_DATA.activity3.steps[stepNum - 1];
    const badge = document.querySelector('#anim-step-badge');
    const title = document.querySelector('#anim-step-title');
    const desc = document.querySelector('#anim-step-desc');

    if (badge) badge.textContent = `Langkah ${stepData.step} dari 5`;
    if (title) title.textContent = stepData.title;
    if (desc) desc.textContent = stepData.desc;

    document.querySelectorAll('.step-dot').forEach((dot, idx) => {
      dot.style.background = (idx + 1 === stepNum) ? 'var(--primary-sky)' : '#cbd5e1';
    });
  },

  togglePlayAnimation() {
    if (AppState.anim3.isPlaying) {
      this.pauseAnimation();
    } else {
      this.startAnimation();
    }
  },

  startAnimation() {
    AppState.anim3.isPlaying = true;
    const btn = document.querySelector('#btn-anim-play');
    if (btn) btn.textContent = '⏸ Jeda';

    AppState.anim3.timer = setInterval(() => {
      let next = AppState.anim3.currentStep + 1;
      if (next > AppState.anim3.totalSteps) {
        this.pauseAnimation();
        this.renderAnimationStep(1);
        return;
      }
      this.renderAnimationStep(next);
    }, 4500);
  },

  pauseAnimation() {
    AppState.anim3.isPlaying = false;
    clearInterval(AppState.anim3.timer);
    const btn = document.querySelector('#btn-anim-play');
    if (btn) btn.textContent = '▶ Putar Animasi';
  },

  nextAnimationStep() {
    this.pauseAnimation();
    let next = AppState.anim3.currentStep + 1;
    if (next > AppState.anim3.totalSteps) next = 1;
    this.renderAnimationStep(next);
  },

  resetAnimation() {
    this.pauseAnimation();
    this.renderAnimationStep(1);
  },

  renderLatihan(container) {
    if (AppState.exercise3.items.length === 0) {
      AppState.exercise3.items = [...APP_DATA.activity3.scrambledSteps];
    }

    container.innerHTML = `
      <div style="margin-bottom:12px;">
        <h2 style="font-size:16px; font-weight:700; color:var(--primary-sky-deep);">Latihan Interaktif 3</h2>
        <div style="font-size:12px; color:var(--text-muted);">
          Susun 5 kartu langkah pengamatan dan identifikasi di bawah ini secara runtut dari langkah ke-1 sampai ke-5 menggunakan tombol panah:
        </div>
      </div>

      <div class="card">
        <div id="sortable-cards-list" class="sortable-list">
          ${this.getSortCardsHTML()}
        </div>

        <div style="display:flex; gap:8px; margin-top:14px;">
          <button type="button" class="btn btn-primary" style="flex:1;" onclick="ViewKegiatan3.checkSort()">
            🔍 Periksa Urutan
          </button>
          <button type="button" class="btn btn-outline" onclick="ViewKegiatan3.resetSort()">
            🔄 Acak Ulang
          </button>
        </div>

        <div id="sort-feedback" class="feedback-box"></div>
      </div>
    `;
  },

  initSortableDOM() {
    if (AppState.exercise3.items.length === 0) {
      AppState.exercise3.items = [...APP_DATA.activity3.scrambledSteps];
    }
    const list = document.querySelector('#sortable-cards-list');
    if (list) list.innerHTML = this.getSortCardsHTML();
  },

  getSortCardsHTML() {
    return AppState.exercise3.items.map((item, idx) => `
      <div class="sort-card" id="sort-card-${item.id}">
        <span class="sort-num-badge">${idx + 1}</span>
        <span class="sort-text">${item.text}</span>
        <div class="sort-actions">
          <button type="button" class="sort-arrow-btn" onclick="ViewKegiatan3.moveItem(${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>▲</button>
          <button type="button" class="sort-arrow-btn" onclick="ViewKegiatan3.moveItem(${idx}, 1)" ${idx === AppState.exercise3.items.length - 1 ? 'disabled' : ''}>▼</button>
        </div>
      </div>
    `).join('');
  },

  moveItem(fromIdx, delta) {
    const toIdx = fromIdx + delta;
    if (toIdx < 0 || toIdx >= AppState.exercise3.items.length) return;

    const temp = AppState.exercise3.items[fromIdx];
    AppState.exercise3.items[fromIdx] = AppState.exercise3.items[toIdx];
    AppState.exercise3.items[toIdx] = temp;

    const list = document.querySelector('#sortable-cards-list');
    if (list) list.innerHTML = this.getSortCardsHTML();
  },

  checkSort() {
    let isAllCorrect = true;

    AppState.exercise3.items.forEach((item, currentPosition) => {
      const card = document.querySelector(`#sort-card-${item.id}`);
      const expectedStep = currentPosition + 1;

      if (item.stepNum === expectedStep) {
        card.className = 'sort-card correct-pos';
      } else {
        card.className = 'sort-card wrong-pos';
        isAllCorrect = false;
      }
    });

    const fb = document.querySelector('#sort-feedback');
    fb.classList.add('show');
    if (isAllCorrect) {
      fb.className = 'feedback-box show correct';
      fb.innerHTML = '<strong>✓ Susunan Urutan Tepat!</strong><br>Kamu telah berhasil menyusun seluruh alur langkah pengamatan dan identifikasi keanekaragaman hayati secara runtut dari langkah 1 sampai 5.';
      AppState.progress.kegiatan3Done = true;
      AppState.save();
      ViewMenu.updateProgress();
    } else {
      fb.className = 'feedback-box show wrong';
      fb.innerHTML = '<strong>✗ Urutan masih belum tepat.</strong><br>Kartu merah masih berada di posisi yang salah, sedangkan kartu hijau sudah tepat. Perhatikan langkah ilmiah dimulai dari pengamatan ciri fisik, identifikasi, baru menarik kesimpulan.';
    }
  },

  resetSort() {
    AppState.exercise3.items.sort(() => Math.random() - 0.5);
    const list = document.querySelector('#sortable-cards-list');
    if (list) list.innerHTML = this.getSortCardsHTML();
    const fb = document.querySelector('#sort-feedback');
    fb.className = 'feedback-box';
    fb.textContent = '';
  }
};
