/**
 * VIEW-KEGIATAN2.JS - MODUL HALAMAN 6 & 7 (TIGA TINGKAT KEHATI & LATIHAN 2)
 * Sesuai Storyboard Proposal Halaman 15
 */

const ViewKegiatan2 = {
  renderMateri(container) {
    const act = APP_DATA.activity2;
    container.innerHTML = `
      <!-- Catatan Miskonsepsi Kritis -->
      <div class="misconception-callout">
        <strong>⚠️ ${act.misconceptionAlert}</strong>
      </div>

      <!-- Diagram Visual 3 Tingkat -->
      <div class="card" style="padding:10px; text-align:center;">
        <img src="assets/diagram-tingkat.svg" alt="Diagram 3 Tingkat Keanekaragaman Hayati" style="width:100%; max-height:220px; border-radius:var(--radius-sm);">
        <div style="font-size:11.5px; color:#64748b; margin-top:6px;">
          Diagram 3 Tingkat: Gen (Individu Sejenis) → Jenis (Beda Spesies) → Ekosistem (Bentang Alam)
        </div>
      </div>

      <!-- Tab Navigasi 3 Tingkat -->
      <div class="level-tabs">
        <button type="button" class="level-tab-btn active tab-gen" onclick="ViewKegiatan2.switchTab('gen')">1. Tingkat Gen</button>
        <button type="button" class="level-tab-btn tab-jenis" onclick="ViewKegiatan2.switchTab('jenis')">2. Tingkat Jenis</button>
        <button type="button" class="level-tab-btn tab-ekosistem" onclick="ViewKegiatan2.switchTab('ekosistem')">3. Ekosistem</button>
      </div>

      <!-- Pane 1: Tingkat Gen -->
      <div id="pane-gen" class="level-content-pane active">
        <div class="card" style="border-top:4px solid var(--color-gen);">
          <div style="font-weight:700; font-size:15px; color:var(--color-gen); margin-bottom:4px;">
            Keanekaragaman Tingkat Gen
          </div>
          <div style="font-size:12px; font-weight:600; color:var(--primary-sky-deep); margin-bottom:8px;">
            Variasi materi genetik di dalam SATU SPESIES yang sama.
          </div>
          <p style="font-size:12.5px; line-height:1.6; color:#334155; margin-bottom:10px;">
            Setiap individu mewarisi kombinasi gen unik dari induknya. Perbedaan susunan DNA ini menyebabkan perbedaan warna bulu, bentuk daun, ukuran tubuh, rasa buah, atau ketahanan penyakit.
          </p>
          <div style="background:var(--sky-50); border:1px solid var(--sky-200); border-radius:var(--radius-sm); padding:10px; font-size:12px;">
            <strong>Contoh Nyata di Sekitar Kita:</strong>
            <ul style="margin-left:18px; margin-top:4px;">
              <li><strong>Varietas Buah Mangga:</strong> Mangga Arumanis, Mangga Manalagi, Mangga Golek (spesies <em>Mangifera indica</em>).</li>
              <li><strong>Varietas Tanaman Padi:</strong> Padi Ciherang, Rojolele, IR64, Mentik Wangi (spesies <em>Oryza sativa</em>).</li>
              <li><strong>Kucing Domestik:</strong> Kucing berbulu oranye, putih polos, belang tiga/calico (spesies <em>Felis catus</em>).</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Pane 2: Tingkat Jenis -->
      <div id="pane-jenis" class="level-content-pane">
        <div class="card" style="border-top:4px solid var(--color-jenis);">
          <div style="font-weight:700; font-size:15px; color:var(--color-jenis); margin-bottom:4px;">
            Keanekaragaman Tingkat Jenis (Spesies)
          </div>
          <div style="font-size:12px; font-weight:600; color:#0f766e; margin-bottom:8px;">
            Perbedaan sifat dan ciri ANTARSPESIES yang berbeda.
          </div>
          <p style="font-size:12.5px; line-height:1.6; color:#334155; margin-bottom:10px;">
            Variasi ini tampak jelas antara spesies yang satu dengan yang lain, meskipun mereka masih hidup di tempat yang sama atau berkerabat dekat dalam satu suku (famili) atau marga (genus).
          </p>
          <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:var(--radius-sm); padding:10px; font-size:12px;">
            <strong>Contoh Nyata di Sekitar Kita:</strong>
            <ul style="margin-left:18px; margin-top:4px;">
              <li><strong>Keluarga Kucing (Famili Felidae):</strong> Harimau (<em>Panthera tigris</em>), Singa (<em>Panthera leo</em>), dan Kucing Rumah (<em>Felis catus</em>).</li>
              <li><strong>Keluarga Palem (Famili Arecaceae):</strong> Pohon Kelapa, Pohon Pinang, Pohon Aren, dan Pohon Kelapa Sawit.</li>
              <li><strong>Keluarga Polong (Famili Fabaceae):</strong> Kacang tanah, Kacang kedelai, Kacang hijau, dan Kacang panjang.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Pane 3: Tingkat Ekosistem -->
      <div id="pane-ekosistem" class="level-content-pane">
        <div class="card" style="border-top:4px solid var(--color-ekosistem);">
          <div style="font-weight:700; font-size:15px; color:var(--color-ekosistem); margin-bottom:4px;">
            Keanekaragaman Tingkat Ekosistem
          </div>
          <div style="font-size:12px; font-weight:600; color:#1e40af; margin-bottom:8px;">
            Keanekaragaman bentang alam dan komunitas makhluk hidup di dalamnya.
          </div>
          <p style="font-size:12.5px; line-height:1.6; color:#334155; margin-bottom:10px;">
            Perbedaan letak lintang, suhu rata-rata, curah hujan harian, dan kondisi tanah membentuk tipe ekosistem yang khas dengan jaring-jaring makanan dan siklus kehidupan yang unik.
          </p>
          <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:var(--radius-sm); padding:10px; font-size:12px;">
            <strong>Contoh Nyata di Indonesia:</strong>
            <ul style="margin-left:18px; margin-top:4px;">
              <li><strong>Ekosistem Terumbu Karang:</strong> Laut dangkal jernih kaya karang dan ikan hias (Bunaken, Raja Ampat).</li>
              <li><strong>Ekosistem Hutan Mangrove:</strong> Daerah pasang surut berlumpur pantai tropis dengan pohon bakau penahan abrasi.</li>
              <li><strong>Ekosistem Hutan Hujan Tropis:</strong> Kanopi lebat bertingkat dengan kelembapan tinggi sepanjang tahun.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tabel Rangkuman Perbandingan -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">📊</span>
          <div class="card-title">Tabel Rangkuman Tiga Tingkat</div>
        </div>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Tingkat</th>
              <th>Ciri Kunci</th>
              <th>Contoh di Indonesia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Gen</strong></td>
              <td>Satu spesies sama, variasi susunan DNA</td>
              <td>Mangga Arumanis vs Manalagi; Padi Rojolele vs Ciherang</td>
            </tr>
            <tr>
              <td><strong>Jenis</strong></td>
              <td>Antarspesies berbeda (satu famili)</td>
              <td>Harimau vs Kucing; Kelapa vs Aren vs Pinang</td>
            </tr>
            <tr>
              <td><strong>Ekosistem</strong></td>
              <td>Interaksi biotik &amp; abiotik di bentang alam</td>
              <td>Terumbu karang, Hutan mangrove, Sabana</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  },

  switchTab(tabKey) {
    document.querySelectorAll('.level-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.level-content-pane').forEach(p => p.classList.remove('active'));

    const activeBtn = document.querySelector(`.tab-${tabKey}`);
    const activePane = document.querySelector(`#pane-${tabKey}`);
    if (activeBtn) activeBtn.classList.add('active');
    if (activePane) activePane.classList.add('active');
  },

  renderLatihan(container) {
    const pairs = APP_DATA.activity2.matchingPairs;
    container.innerHTML = `
      <div style="margin-bottom:12px;">
        <h2 style="font-size:16px; font-weight:700; color:var(--primary-sky-deep);">Latihan Interaktif 2</h2>
        <div style="font-size:12px; color:var(--text-muted);">
          Pasangkan 6 contoh makhluk hidup di bawah ini dengan tingkat keanekaragamannya yang tepat:
        </div>
      </div>

      <div class="card">
        <div id="matching-items-container" class="matching-board">
          ${pairs.map((p, idx) => `
            <div class="match-item-card" id="match-card-${p.id}">
              <span class="match-text">${idx + 1}. ${p.item}</span>
              <select class="match-select" data-item-id="${p.id}" id="select-${p.id}">
                <option value="">-- Pilih Tingkat --</option>
                <option value="gen">Tingkat Gen</option>
                <option value="jenis">Tingkat Jenis</option>
                <option value="ekosistem">Tingkat Ekosistem</option>
              </select>
            </div>
          `).join('')}
        </div>

        <div style="display:flex; gap:8px; margin-top:14px;">
          <button type="button" class="btn btn-primary" style="flex:1;" onclick="ViewKegiatan2.checkMatching()">
            🔍 Periksa Pasangan
          </button>
          <button type="button" class="btn btn-outline" onclick="ViewKegiatan2.resetMatching()">
            🔄 Ulangi
          </button>
        </div>

        <div id="matching-feedback" class="feedback-box"></div>
      </div>
    `;
  },

  checkMatching() {
    let allCorrect = true;
    let unanswered = false;

    APP_DATA.activity2.matchingPairs.forEach(pair => {
      const select = document.querySelector(`#select-${pair.id}`);
      const card = document.querySelector(`#match-card-${pair.id}`);
      const val = select ? select.value : '';

      if (!val) {
        unanswered = true;
        card.className = 'match-item-card';
        return;
      }

      if (val === pair.category) {
        card.className = 'match-item-card is-correct';
      } else {
        card.className = 'match-item-card is-wrong';
        allCorrect = false;
      }
    });

    const fb = document.querySelector('#matching-feedback');
    fb.classList.add('show');
    if (unanswered) {
      fb.className = 'feedback-box show wrong';
      fb.textContent = 'Harap tentukan tingkat keanekaragaman untuk semua 6 contoh di atas!';
    } else if (allCorrect) {
      fb.className = 'feedback-box show correct';
      fb.innerHTML = '<strong>✓ Luar Biasa! Semua Pasangan Benar.</strong><br>Kamu sudah sangat mahir membedakan tingkat gen (satu spesies), tingkat jenis (antarspesies), dan tingkat ekosistem.';
      AppState.progress.kegiatan2Done = true;
      AppState.save();
      ViewMenu.updateProgress();
    } else {
      fb.className = 'feedback-box show wrong';
      fb.innerHTML = '<strong>✗ Masih ada pasangan yang keliru.</strong><br>Ingat: Mangga/Padi = satu spesies (Gen). Harimau/Kelapa = beda spesies (Jenis). Terumbu karang/Mangrove = bentang alam (Ekosistem). Silakan perbaiki lalu tekan Periksa lagi!';
    }
  },

  resetMatching() {
    document.querySelectorAll('.match-select').forEach(sel => sel.value = '');
    document.querySelectorAll('.match-item-card').forEach(c => c.className = 'match-item-card');
    const fb = document.querySelector('#matching-feedback');
    fb.className = 'feedback-box';
    fb.textContent = '';
  }
};

