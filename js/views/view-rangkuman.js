/**
 * VIEW-RANGKUMAN.JS - MODUL HALAMAN 12 (RANGKUMAN, GLOSARIUM & CETAK PDF)
 * Sesuai Storyboard Proposal Halaman 15 & 17
 */

const ViewRangkuman = {
  render(container) {
    container.innerHTML = `
      <!-- Header Khusus Mode Cetak / Print Only -->
      <div class="print-only-header">
        <h2 style="font-size:18px; margin-bottom:2px;">SMP NEGERI 1 TANDUKKALUA</h2>
        <div style="font-size:14px; font-weight:bold;">LEMBAR CATATAN TERPANDU &amp; RANGKUMAN IPA FASE D</div>
        <div style="font-size:12px;">Topik: Keanekaragaman Hayati Indonesia | Pengembang: Nurun Nisa Ahmad (PTIK E)</div>
      </div>

      <div style="margin-bottom:12px;">
        <h2 style="font-size:16px; font-weight:700; color:var(--primary-sky-deep);">Rangkuman Pembelajaran</h2>
        <div style="font-size:12px; color:var(--text-muted);">
          Poin inti materi dan lembar catatan terpandu untuk belajar mandiri saat guru berhalangan hadir.
        </div>
      </div>

      <!-- Poin Inti Tiap Kegiatan -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">📌</span>
          <div class="card-title">Poin Inti Tiga Kegiatan Belajar</div>
        </div>

        ${APP_DATA.summaryCards.map((sc, scIdx) => `
          <div class="summary-section">
            <strong style="font-size:13px; color:${scIdx === 0 ? 'var(--primary-sky)' : scIdx === 1 ? 'var(--color-jenis)' : 'var(--color-ekosistem)'};">
              ${sc.activity}
            </strong>
            ${sc.points.map(pt => `
              <div class="summary-bullet">${pt}</div>
            `).join('')}
          </div>
        `).join('')}
      </div>

      <!-- Glosarium Istilah Penting -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">📚</span>
          <div class="card-title">Tabel Istilah Penting (Glosarium)</div>
        </div>
        <table class="comparison-table">
          <thead>
            <tr>
              <th style="width:35%;">Istilah</th>
              <th>Definisi Ringkas</th>
            </tr>
          </thead>
          <tbody>
            ${APP_DATA.glossary.map(g => `
              <tr>
                <td><strong>${g.term}</strong></td>
                <td>${g.meaning}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Lembar Catatan Terpandu Siswa Mandiri (Teks Rumpang) -->
      <div class="card printable-worksheet">
        <div class="card-header-styled">
          <span style="font-size:18px;">📝</span>
          <div class="card-title">Lembar Catatan Terpandu Siswa Mandiri</div>
        </div>
        <div style="font-size:11.5px; color:#475569; margin-bottom:12px;">
          Lengkapilah bagian rumpang (titik-titik) di bawah ini sebagai rangkuman belajarmu:
        </div>

        <div style="font-size:12px; line-height:1.75; color:#1e293b;">
          ${APP_DATA.guidedNotesQuestions.map(gn => `
            <p style="margin-bottom:10px;">
              <strong>${gn.no}. ${gn.title}:</strong><br>
              ${gn.prompt.replace(/\n/g, '<br>')}
            </p>
          `).join('')}
        </div>
      </div>

      <!-- Tombol Tindakan Rangkuman & Cetak PDF -->
      <div style="margin-top:14px; display:flex; flex-direction:column; gap:8px;">
        <button type="button" class="btn btn-primary btn-full" style="font-size:13.5px;" onclick="window.print()">
          🖨️ Cetak / Simpan Ringkasan &amp; Lembar Catatan (PDF)
        </button>
        <button type="button" class="btn btn-outline btn-full" onclick="AppRouter.goToPage(1)">
          🏠 Selesai &amp; Kembali ke Beranda
        </button>
      </div>
    `;
  }
};

