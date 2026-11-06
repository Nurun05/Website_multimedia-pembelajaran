/**
 * VIEW-PETUNJUK.JS - MODUL HALAMAN 2 (PETUNJUK & TUJUAN PEMBELAJARAN)
 * Sesuai Storyboard Proposal Halaman 15
 */

const ViewPetunjuk = {
  render(container) {
    container.innerHTML = `
      <!-- Kartu 1: Petunjuk Penggunaan -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">📖</span>
          <div class="card-title">Petunjuk Penggunaan Modul</div>
        </div>
        <ol class="instruction-list">
          <li class="instruction-item">
            <strong>Pelajari Secara Runtut:</strong> Ikuti materi bertahap dari Kegiatan 1, Kegiatan 2, lalu Kegiatan 3 untuk membangun konsep yang utuh.
          </li>
          <li class="instruction-item">
            <strong>Eksplorasi Interaktif:</strong> Ketuk kartu istilah, diagram, dan tombol animasi untuk membuka penjelasan terperinci.
          </li>
          <li class="instruction-item">
            <strong>Kerjakan Latihan di Akhir Kegiatan:</strong> Dapatkan umpan balik langsung untuk memeriksa kebenaran pemahamanmu.
          </li>
          <li class="instruction-item">
            <strong>Uji Kemampuan di Kuis Akhir:</strong> Kerjakan 10 soal evaluasi dengan patokan tuntas skor 70.
          </li>
          <li class="instruction-item">
            <strong>Gunakan Lembar Catatan:</strong> Jika guru berhalangan hadir, cetak atau salin lembar catatan terpandu di halaman Rangkuman.
          </li>
        </ol>
      </div>

      <!-- Kartu 2: Tujuan Pembelajaran (Fase D) -->
      <div class="card">
        <div class="card-header-styled">
          <span style="font-size:18px;">🎯</span>
          <div class="card-title">Tujuan Pembelajaran (TP)</div>
        </div>
        ${APP_DATA.learningObjectives.map((tp, idx) => `
          <div class="tp-card-item">
            <strong style="color:${idx === 0 ? 'var(--primary-sky)' : idx === 1 ? 'var(--color-jenis)' : 'var(--color-ekosistem)'};">
              Tujuan ${idx + 1} (${tp.code}):
            </strong>
            <div>${tp.desc}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
};

