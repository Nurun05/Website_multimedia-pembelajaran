/**
 * STUDENT-VERIFIER.JS - MODUL VERIFIKASI WAJAH & DOKUMENTASI SISWA
 * Mengelola pilihan nama siswa dari guru & foto selfie dokumentasi resmi Kuis Akhir.
 * SMP Negeri 1 Tandukkalua - Mata Pelajaran IPA Fase D
 * Pengembang: Nurun Nisa Ahmad (NIM: 240209501049) - PTIK E 2024
 */

const StudentVerifier = {
  activeStreams: {},
  tempPhotos: {},
  tempNames: {},

  init() {
    AppState.load();
  },

  getCardHTML(contextId) {
    // 1. Tampilan untuk Latihan Formatif (Kegiatan 1, 2, 3)
    // Sesuai permintaan pengguna: Latihan bisa digunakan berkali-kali & tidak diambil nilainya.
    if (contextId === 'latihan1' || contextId === 'latihan2' || contextId === 'latihan3') {
      const actTitle = contextId === 'latihan1' ? 'Latihan 1: Konsep & Istilah' 
                     : contextId === 'latihan2' ? 'Latihan 2: Tiga Tingkat Kehati' 
                     : 'Latihan 3: Pengamatan & Biogeografi';
      return `
        <div class="card" style="background:#f0f9ff; border:1.5px solid var(--pastel-sky-border); padding:10px 14px; margin-bottom:14px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:22px;">💡</span>
            <div>
              <strong style="font-size:12.5px; color:var(--primary-sky-deep);">${actTitle} (Latihan Mandiri)</strong>
              <div style="font-size:11.5px; color:#475569; line-height:1.45;">
                Latihan ini dapat kamu kerjakan <strong>berkali-kali tanpa batas</strong> untuk mengasah pemahaman konsep. 
                Nilai latihan ini <em>tidak diambil ke buku nilai guru</em> (nilai resmi kuis diambil pada Halaman 10).
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 2. Tampilan Khusus KUIS AKHIR (Evaluasi Penilaian Resmi Guru)
    const student = AppState.student || {};
    const roster = AppState.getRoster();
    const savedName = this.tempNames[contextId] || student.name || '';
    const tempPhoto = this.tempPhotos[contextId] || student.photo || '';
    const isRetakeActive = Boolean(savedName && AppState.isRetakeInstructed(savedName));
    const retakeInfo = isRetakeActive ? AppState.getRetakeInfo(savedName) : null;

    // Periksa apakah siswa aktif SUDAH MENGERJAKAN kuis akhir sebelumnya dan TIDAK sedang diperintahkan ujian ulang
    if (savedName && AppState.isStudentCompleted(savedName) && !isRetakeActive) {
      const sub = AppState.getStudentSubmission(savedName);
      const isPass = sub && sub.score >= (window.APP_DATA && APP_DATA.info ? APP_DATA.info.passingScore : 70);
      const subPhoto = sub && sub.studentPhoto;

      return `
        <div class="verifier-card" id="card-${contextId}" style="border:2px solid #16a34a; background:#f0fdf4;">
          <div style="display:flex; align-items:flex-start; gap:12px;">
            ${subPhoto ? `
              <img src="${subPhoto}" 
                   alt="Foto Dokumentasi Siswa" 
                   class="verified-avatar-img" 
                   style="width:58px; height:58px; border:2.5px solid #16a34a; cursor:pointer;"
                   onclick="TeacherPanel.viewPhoto('${sub ? sub.studentName.replace(/'/g, "\\'") : ''}', '${subPhoto}', 0, false, '${sub ? sub.submittedAt : '-'}')">
            ` : `
              <div style="width:58px; height:58px; border-radius:50%; border:2px dashed #ef4444; background:#fef2f2; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#dc2626; flex-shrink:0;" title="Foto dokumentasi telah dihapus oleh siswa">
                <span style="font-size:18px; line-height:1;">📷❌</span>
                <span style="font-size:8px; font-weight:700; margin-top:2px;">Dihapus</span>
              </div>
            `}
            
            <div style="flex:1;">
              <div style="font-size:14px; font-weight:700; color:#166534;">
                ${sub ? sub.studentName : savedName}
              </div>
              <div style="font-size:12px; color:#15803d; margin-top:2px; font-weight:700;">
                Status Kuis: ✓ Selesai
              </div>
              <div style="font-size:11px; color:#475569; margin-top:2px;">
                🕒 Terkirim resmi ke Folder Guru: ${sub ? sub.submittedAt : '-'}
              </div>
              <div style="font-size:11px; color:#1e40af; background:#eff6ff; border:1px solid #bfdbfe; padding:4px 8px; border-radius:6px; margin-top:6px;">
                🔒 <em>Privasi Nilai:</em> Nilai evaluasi bersifat rahasia dan hanya dapat diakses secara resmi di Portal Guru.
              </div>
              ${!subPhoto ? `
                <div style="font-size:11px; color:#dc2626; font-weight:700; margin-top:3px;">
                  ⚠️ Status Foto: Foto dokumentasi wajah telah dihapus oleh siswa / kosong di Folder Guru.
                </div>
              ` : ''}
              <div style="background:#fef3c7; border:1px solid #fde68a; color:#92400e; padding:6px 10px; border-radius:6px; font-size:11.5px; margin-top:6px; font-weight:600;">
                🔒 Nama ini <strong>sudah mengisi Kuis Akhir</strong> dan tidak bisa mengerjakan lagi (hanya siswa yang belum mengisi atau yang diperintahkan ujian ulang oleh guru yang dapat mengerjakan).
              </div>
            </div>
          </div>

          <div style="display:flex; gap:8px; margin-top:12px;">
            <button type="button" class="btn btn-outline" style="font-size:12px; flex:1;" onclick="StudentVerifier.resetActiveStudent()">
              👤 Pilih Siswa Lain (Belum Mengisi)
            </button>
            ${(AppState.student && AppState.student.name === savedName && AppState.student.isVerified && AppState.progress.quizCompleted) ? `
              <button type="button" class="btn btn-primary" style="font-size:12px; flex:1;" onclick="AppRouter.goToPage(11)">
                🏆 Buka Lembar Hasil Kuis
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }

    // Jika siswa sudah terverifikasi dan belum menyelesaikan kuis (atau sedang ujian ulang)
    if (student.isVerified && student.name && student.photo && (!AppState.isStudentCompleted(student.name) || isRetakeActive)) {
      return `
        <div class="verifier-card" id="card-${contextId}">
          ${isRetakeActive ? `
            <div class="retake-notification-banner" style="background:#fffbeb; border:2px solid #f59e0b; border-radius:8px; padding:10px 12px; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
              <span style="font-size:22px;">📢</span>
              <div style="font-size:12px; color:#92400e; font-weight:700;">
                Status: Ujian Ulang Kuis Akhir Aktif atas Perintah Guru
              </div>
            </div>
          ` : ''}
          <div class="verifier-verified-box">
            <div class="verified-avatar-wrapper">
              <img src="${student.photo}" alt="Foto Wajah Siswa" class="verified-avatar-img">
              <span class="verified-avatar-badge">✓</span>
            </div>
            <div class="verified-info">
              <div class="verified-student-name">${student.name}</div>
              <div class="verified-student-meta">Kelas VII • SMP Negeri 1 Tandukkalua</div>
              <div class="verified-timestamp">📸 Foto Dokumentasi Siap | Status: Siap Mengerjakan Kuis</div>
            </div>
            <button type="button" class="btn-reverify" onclick="StudentVerifier.resetVerification('${contextId}')" title="Ganti nama atau foto">
              🔄 Ganti / Foto Ulang
            </button>
          </div>
        </div>
      `;
    }

    const retakeBannerHTML = isRetakeActive ? `
      <div class="retake-notification-banner" style="background:#fffbeb; border:2px solid #f59e0b; border-radius:10px; padding:12px 14px; margin-bottom:14px; box-shadow:0 3px 10px rgba(245,158,11,0.2); animation:fadeInModal 0.3s ease;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span style="font-size:24px;">📢</span>
          <strong style="font-size:13.5px; color:#92400e;">PEMBERITAHUAN RESMI DARI GURU: UJIAN ULANG KUIS AKHIR</strong>
        </div>
        <div style="font-size:12px; color:#78350f; line-height:1.5;">
          Halo <strong>${savedName}</strong>! Guru telah memberikan instruksi agar Anda melakukan <strong>UJIAN ULANG Kuis Akhir</strong> (${retakeInfo ? retakeInfo.instructedAt : 'Status Aktif'}).
          <br>Akses pengerjaan kuis Anda telah <strong>dibuka kembali</strong>. Silakan ambil foto dokumentasi wajah terbaru di bawah ini (foto dapat dihapus/diulang jika kurang bagus), lalu klik tombol <strong>"🚀 Mulai Kerjakan Soal Kuis"</strong>.
        </div>
      </div>
    ` : '';

    // Form Pemilihan Nama Siswa & Pengambilan Foto Dokumentasi
    return `
      <div class="verifier-card" id="card-${contextId}">
        <div class="verifier-title-bar">
          <span style="font-size:18px;">🛡️</span>
          <span class="verifier-title">Identitas Peserta &amp; Dokumentasi Foto Wajah</span>
          <span class="verifier-badge-anti-joki">DOKUMENTASI GURU</span>
        </div>
        
        ${retakeBannerHTML}

        <div class="verifier-desc">
          Sebelum mengerjakan Kuis Akhir, silakan <strong>pilih nama Anda dari daftar</strong> yang telah dimasukkan oleh Guru, kemudian <strong>ambil foto selfie wajah</strong> sebagai bukti dokumentasi pengerjaan resmi.
        </div>

        <!-- 1. Pemilihan Nama Siswa -->
        <div class="verifier-field-group">
          <label class="verifier-label" for="${contextId}-select-name">
            👤 1. Pilih Nama Lengkap Siswa:
          </label>
          ${roster.length === 0 ? `
            <div style="background:#fffbeb; border:1.5px solid #fcd34d; border-radius:var(--radius-md); padding:14px; text-align:center; margin-bottom:8px;">
              <span style="font-size:26px; display:block; margin-bottom:4px;">📋ℹ️</span>
              <strong style="color:#92400e; font-size:13px; display:block; margin-bottom:4px;">Belum Ada Nama Siswa yang Terdaftar</strong>
              <div style="font-size:11.5px; color:#78350f; line-height:1.5;">
                Belum ada nama siswa yang terdaftar. Silakan minta guru untuk mendaftarkan nama melalui <strong>Portal Guru</strong>.
              </div>
            </div>
            <select id="${contextId}-select-name" class="verifier-select" disabled>
              <option value="">-- Belum ada nama siswa terdaftar (Hubungi Guru) --</option>
            </select>
          ` : `
            <select id="${contextId}-select-name" class="verifier-select" onchange="StudentVerifier.handleNameChange('${contextId}', this.value)">
              <option value="">-- Pilih Nama Siswa Terdaftar (${roster.length} Siswa) --</option>
              ${roster.map(name => {
                const isRetake = AppState.isRetakeInstructed(name);
                const isDone = AppState.isStudentCompleted(name);
                if (isRetake) {
                  return `<option value="${name}" ${savedName === name ? 'selected' : ''} style="color:#b45309; font-weight:700; background:#fef3c7;">🔄 ${name} (⚠️ Diperintahkan Ujian Ulang oleh Guru)</option>`;
                } else if (isDone) {
                  return `<option value="${name}" disabled style="color:#94a3b8; background:#f8fafc;">${name} (Sudah Selesai)</option>`;
                } else {
                  return `<option value="${name}" ${savedName === name ? 'selected' : ''}>${name}</option>`;
                }
              }).join('')}
            </select>
          `}
        </div>

        <!-- 2. Kamera & Foto Dokumentasi Wajah (Muncul Setelah Nama Dipilih) -->
        <div class="verifier-field-group" id="${contextId}-photo-section" style="display:${savedName ? 'block' : 'none'};">
          <label class="verifier-label" style="display:flex; justify-content:space-between; align-items:center;">
            <span>📸 2. Ambil Foto Dokumentasi Wajah:</span>
            <span style="font-size:11px; color:${tempPhoto ? '#15803d' : '#92400e'}; font-weight:600;" id="${contextId}-photo-status-badge">
              ${tempPhoto ? '✓ Foto Siap' : '⚠️ Wajib selfie sebelum mulai'}
            </span>
          </label>
          <div class="camera-view-container" id="${contextId}-cam-container">
            <div class="camera-viewport">
              <div id="${contextId}-placeholder" class="camera-placeholder" style="display:${tempPhoto ? 'none' : 'flex'};">
                <span style="font-size:30px; margin-bottom:4px;">👤</span>
                <span style="font-size:11.5px; font-weight:700; color:#334155;">Kamera Belum Aktif</span>
                <span style="font-size:10.5px; color:#64748b;">Klik tombol <strong>"📷 Ambil Foto"</strong> di bawah.</span>
              </div>
              <video id="${contextId}-video" class="camera-video" autoplay playsinline muted style="display:none;"></video>
              <canvas id="${contextId}-canvas" style="display:none;"></canvas>
              <img id="${contextId}-preview" class="photo-preview-img" src="${tempPhoto}" alt="Foto Wajah" style="display:${tempPhoto ? 'block' : 'none'};">
              <div id="${contextId}-face-guide" class="camera-face-guide" style="display:none;"></div>
            </div>

            <!-- Tombol Aksi Kamera & Manajemen Foto Siswa -->
            <div class="camera-btn-group">
              <button type="button" id="${contextId}-btn-open" class="btn-camera btn-camera-open" style="font-weight:700;" onclick="StudentVerifier.openCamera('${contextId}')">
                📷 Ambil Foto
              </button>
              <button type="button" id="${contextId}-btn-snap" class="btn-camera btn-camera-capture" style="display:none; background:#dc2626; color:#fff; font-weight:700;" onclick="StudentVerifier.snapPhoto('${contextId}')">
                🔴 Jepret / Ambil Foto
              </button>
              <button type="button" id="${contextId}-btn-close" class="btn-camera" style="display:none; background:#64748b; color:#fff;" onclick="StudentVerifier.stopCamera('${contextId}')">
                ✖ Tutup
              </button>
              <button type="button" id="${contextId}-btn-retake" class="btn-camera btn-camera-open" style="display:${tempPhoto ? 'inline-flex' : 'none'}; font-weight:700;" onclick="StudentVerifier.retakePhoto('${contextId}')" title="Ambil ulang foto selfie">
                🔄 Foto Ulang
              </button>
              <button type="button" id="${contextId}-btn-delete" class="btn-camera" style="display:${tempPhoto ? 'inline-flex' : 'none'}; background:#fee2e2; color:#dc2626; border:1px solid #fca5a5; font-weight:700;" onclick="StudentVerifier.deletePhoto('${contextId}')" title="Hapus foto wajah ini jika kurang bagus">
                🗑️ Hapus Foto
              </button>
              <label class="btn-camera btn-camera-upload" title="Pilih dari kamera ponsel atau galeri">
                📁 Kamera HP / Galeri
                <input type="file" id="${contextId}-file-input" accept="image/*" capture="user" style="display:none;" onchange="StudentVerifier.handleFileUpload('${contextId}', this)">
              </label>
            </div>
          </div>

          <!-- Tombol Mulai Kerjakan Soal Kuis -->
          <div style="margin-top:12px;">
            <button type="button" id="${contextId}-btn-confirm" class="btn btn-primary btn-full" style="font-size:13.5px; padding:11px; font-weight:700;" onclick="StudentVerifier.confirmVerification('${contextId}')">
              🚀 Mulai Kerjakan Soal Kuis
            </button>
          </div>
        </div>

        <!-- Pesan Peringatan Validasi -->
        <div id="${contextId}-alert" class="verifier-alert-banner"></div>
      </div>
    `;
  },

  handleNameChange(contextId, value) {
    if (value && value !== '__custom__' && AppState.isStudentCompleted(value) && !AppState.isRetakeInstructed(value)) {
      this.showAlert(contextId, `⛔ Nama "${value}" sudah menyelesaikan Kuis Akhir (Status: Selesai). Kuis hanya dapat dikerjakan 1 kali dan tidak dapat diulang oleh nama yang sama kecuali ada instruksi ujian ulang dari Guru!`);
      const select = document.querySelector(`#${contextId}-select-name`);
      if (select) select.value = '';
      this.tempNames[contextId] = '';
      const photoSection = document.querySelector(`#${contextId}-photo-section`);
      if (photoSection) photoSection.style.display = 'none';
      return;
    }

    const customInput = document.querySelector(`#${contextId}-custom-name`);
    if (value === '__custom__') {
      if (customInput) {
        customInput.style.display = 'block';
        customInput.focus();
      }
      this.tempNames[contextId] = customInput ? customInput.value.trim() : '';
    } else {
      if (customInput) customInput.style.display = 'none';
      this.tempNames[contextId] = value;
    }

    // Jika siswa ini berstatus ujian ulang, sinkronkan card agar banner pemberitahuan resmi muncul
    if (value && AppState.isRetakeInstructed(value)) {
      this.syncAllCards();
      return;
    }

    const photoSection = document.querySelector(`#${contextId}-photo-section`);
    if (photoSection) {
      photoSection.style.display = (value ? 'block' : 'none');
    }
    this.hideAlert(contextId);
  },

  handleCustomNameInput(contextId, value) {
    const trimmed = value.trim();
    if (trimmed && AppState.isStudentCompleted(trimmed) && !AppState.isRetakeInstructed(trimmed)) {
      this.showAlert(contextId, `⛔ Nama "${trimmed}" sudah menyelesaikan Kuis Akhir sebelumnya!`);
      return;
    }
    this.tempNames[contextId] = trimmed;
    this.hideAlert(contextId);
  },

  async openCamera(contextId) {
    this.hideAlert(contextId);
    const video = document.querySelector(`#${contextId}-video`);
    const placeholder = document.querySelector(`#${contextId}-placeholder`);
    const preview = document.querySelector(`#${contextId}-preview`);
    const faceGuide = document.querySelector(`#${contextId}-face-guide`);
    const btnOpen = document.querySelector(`#${contextId}-btn-open`);
    const btnSnap = document.querySelector(`#${contextId}-btn-snap`);
    const btnClose = document.querySelector(`#${contextId}-btn-close`);
    const btnRetake = document.querySelector(`#${contextId}-btn-retake`);
    const btnDelete = document.querySelector(`#${contextId}-btn-delete`);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.showAlert(contextId, 'Peramban ini tidak mendukung akses kamera langsung. Silakan gunakan tombol "Kamera HP / Galeri".');
      return;
    }

    try {
      this.stopCamera(contextId);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 480 },
          height: { ideal: 480 }
        },
        audio: false
      });

      this.activeStreams[contextId] = stream;
      if (video) {
        video.srcObject = stream;
        video.style.display = 'block';
      }
      if (placeholder) placeholder.style.display = 'none';
      if (preview) preview.style.display = 'none';
      if (faceGuide) faceGuide.style.display = 'block';

      if (btnOpen) btnOpen.style.display = 'none';
      if (btnSnap) btnSnap.style.display = 'inline-flex';
      if (btnClose) btnClose.style.display = 'inline-flex';
      if (btnRetake) btnRetake.style.display = 'none';
      if (btnDelete) btnDelete.style.display = 'none';
    } catch (err) {
      console.warn('Gagal membuka kamera:', err);
      this.showAlert(contextId, 'Izin kamera ditolak atau sedang digunakan aplikasi lain. Anda dapat menggunakan tombol "Kamera HP / Galeri".');
    }
  },

  snapPhoto(contextId) {
    const video = document.querySelector(`#${contextId}-video`);
    const canvas = document.querySelector(`#${contextId}-canvas`);
    const preview = document.querySelector(`#${contextId}-preview`);
    const faceGuide = document.querySelector(`#${contextId}-face-guide`);
    const btnSnap = document.querySelector(`#${contextId}-btn-snap`);
    const btnClose = document.querySelector(`#${contextId}-btn-close`);
    const btnRetake = document.querySelector(`#${contextId}-btn-retake`);
    const btnDelete = document.querySelector(`#${contextId}-btn-delete`);

    if (!video || !canvas || !preview) return;

    const size = 320;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Efek cermin mirror untuk selfie natural
    ctx.translate(size, 0);
    ctx.scale(-1, 1);

    const vWidth = video.videoWidth || size;
    const vHeight = video.videoHeight || size;
    const minDim = Math.min(vWidth, vHeight);
    const startX = (vWidth - minDim) / 2;
    const startY = (vHeight - minDim) / 2;

    ctx.drawImage(video, startX, startY, minDim, minDim, 0, 0, size, size);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    this.tempPhotos[contextId] = dataUrl;

    preview.src = dataUrl;
    preview.style.display = 'block';
    video.style.display = 'none';
    if (faceGuide) faceGuide.style.display = 'none';

    if (btnSnap) btnSnap.style.display = 'none';
    if (btnClose) btnClose.style.display = 'none';
    if (btnRetake) btnRetake.style.display = 'inline-flex';
    if (btnDelete) btnDelete.style.display = 'inline-flex';

    const statusBadge = document.querySelector(`#${contextId}-photo-status-badge`);
    if (statusBadge) {
      statusBadge.textContent = '✓ Foto Siap';
      statusBadge.style.color = '#15803d';
    }

    this.stopCamera(contextId);
    this.hideAlert(contextId);
  },

  retakePhoto(contextId) {
    const studentName = this.tempNames[contextId] || (AppState.student && AppState.student.name) || '';

    // Hapus foto secara permanen dari localStorage & sinkronkan seketika ke portal guru
    AppState.clearStudentPhotoPermanently(studentName);

    this.tempPhotos[contextId] = '';
    const preview = document.querySelector(`#${contextId}-preview`);
    if (preview) {
      preview.src = '';
      preview.style.display = 'none';
    }
    const btnDelete = document.querySelector(`#${contextId}-btn-delete`);
    if (btnDelete) btnDelete.style.display = 'none';
    const btnRetake = document.querySelector(`#${contextId}-btn-retake`);
    if (btnRetake) btnRetake.style.display = 'none';
    const statusBadge = document.querySelector(`#${contextId}-photo-status-badge`);
    if (statusBadge) {
      statusBadge.textContent = '⚠️ Wajib selfie sebelum mulai';
      statusBadge.style.color = '#92400e';
    }

    this.openCamera(contextId);
  },

  deletePhoto(contextId) {
    const studentName = this.tempNames[contextId] || (AppState.student && AppState.student.name) || '';

    // Hapus foto secara permanen dari localStorage & sinkronkan seketika ke portal guru
    AppState.clearStudentPhotoPermanently(studentName);

    this.tempPhotos[contextId] = '';
    const preview = document.querySelector(`#${contextId}-preview`);
    const placeholder = document.querySelector(`#${contextId}-placeholder`);
    const statusBadge = document.querySelector(`#${contextId}-photo-status-badge`);
    const btnOpen = document.querySelector(`#${contextId}-btn-open`);
    const btnSnap = document.querySelector(`#${contextId}-btn-snap`);
    const btnClose = document.querySelector(`#${contextId}-btn-close`);
    const btnRetake = document.querySelector(`#${contextId}-btn-retake`);
    const btnDelete = document.querySelector(`#${contextId}-btn-delete`);
    const fileInput = document.querySelector(`#${contextId}-file-input`);

    this.stopCamera(contextId);

    if (preview) {
      preview.src = '';
      preview.style.display = 'none';
    }
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
    if (statusBadge) {
      statusBadge.textContent = '⚠️ Wajib selfie sebelum mulai';
      statusBadge.style.color = '#92400e';
    }
    if (btnOpen) btnOpen.style.display = 'inline-flex';
    if (btnSnap) btnSnap.style.display = 'none';
    if (btnClose) btnClose.style.display = 'none';
    if (btnRetake) btnRetake.style.display = 'none';
    if (btnDelete) btnDelete.style.display = 'none';
    if (fileInput) fileInput.value = '';

    this.showAlert(contextId, '🗑️ Foto wajah berhasil dihapus permanen dari memori & portal guru. Silakan klik "📷 Ambil Foto" untuk mengambil ulang.');
  },

  stopCamera(contextId) {
    if (this.activeStreams[contextId]) {
      this.activeStreams[contextId].getTracks().forEach(track => track.stop());
      delete this.activeStreams[contextId];
    }
    const video = document.querySelector(`#${contextId}-video`);
    if (video) video.srcObject = null;
    const btnSnap = document.querySelector(`#${contextId}-btn-snap`);
    const btnClose = document.querySelector(`#${contextId}-btn-close`);
    const btnOpen = document.querySelector(`#${contextId}-btn-open`);
    const faceGuide = document.querySelector(`#${contextId}-face-guide`);

    if (btnSnap) btnSnap.style.display = 'none';
    if (btnClose) btnClose.style.display = 'none';
    if (btnOpen) btnOpen.style.display = 'inline-flex';
    if (faceGuide) faceGuide.style.display = 'none';
  },

  stopAllCameras() {
    Object.keys(this.activeStreams).forEach(id => this.stopCamera(id));
  },

  handleFileUpload(contextId, inputElement) {
    if (!inputElement.files || !inputElement.files[0]) return;
    const file = inputElement.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const size = 320;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const minDim = Math.min(img.width, img.height);
        const startX = (img.width - minDim) / 2;
        const startY = (img.height - minDim) / 2;

        ctx.drawImage(img, startX, startY, minDim, minDim, 0, 0, size, size);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        StudentVerifier.tempPhotos[contextId] = dataUrl;

        const preview = document.querySelector(`#${contextId}-preview`);
        const placeholder = document.querySelector(`#${contextId}-placeholder`);
        const video = document.querySelector(`#${contextId}-video`);
        const btnRetake = document.querySelector(`#${contextId}-btn-retake`);

        if (preview) {
          preview.src = dataUrl;
          preview.style.display = 'block';
        }
        if (placeholder) placeholder.style.display = 'none';
        if (video) video.style.display = 'none';
        if (btnRetake) btnRetake.style.display = 'inline-flex';
        const btnDelete = document.querySelector(`#${contextId}-btn-delete`);
        if (btnDelete) btnDelete.style.display = 'inline-flex';

        const statusBadge = document.querySelector(`#${contextId}-photo-status-badge`);
        if (statusBadge) {
          statusBadge.textContent = '✓ Foto Siap';
          statusBadge.style.color = '#15803d';
        }

        StudentVerifier.stopCamera(contextId);
        StudentVerifier.hideAlert(contextId);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  },

  confirmVerification(contextId) {
    let name = this.tempNames[contextId];
    if (!name) {
      const select = document.querySelector(`#${contextId}-select-name`);
      if (select && select.value && select.value !== '__custom__') {
        name = select.value;
      } else {
        const custom = document.querySelector(`#${contextId}-custom-name`);
        if (custom) name = custom.value.trim();
      }
    }

    if (!name) {
      this.showAlert(contextId, '⚠️ Silakan pilih nama Anda terlebih dahulu dari daftar nama siswa!');
      return false;
    }

    // Periksa apakah nama ini sudah mengerjakan sebelumnya dan tidak berstatus ujian ulang
    if (contextId === 'kuis' && AppState.isStudentCompleted(name) && !AppState.isRetakeInstructed(name)) {
      this.showAlert(contextId, `⛔ Nama "${name}" sudah pernah mengerjakan Kuis Akhir. Siswa yang sudah mengisi tidak bisa mengerjakan lagi!`);
      return false;
    }

    const photo = this.tempPhotos[contextId] || (AppState.student && AppState.student.photo);
    if (!photo) {
      this.showAlert(contextId, '⚠️ Silakan ambil foto selfie dokumentasi wajah Anda terlebih dahulu menggunakan kamera atau tombol upload!');
      return false;
    }

    // Jika siswa berstatus ujian ulang, setel ulang jawaban kuis agar dimulai dari awal
    if (contextId === 'kuis' && AppState.isRetakeInstructed(name)) {
      AppState.quiz.userAnswers = {};
      AppState.quiz.isLocked = {};
      AppState.quiz.currentQuestionIndex = 0;
      AppState.progress.quizCompleted = false;
    }

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

    AppState.student = {
      name: name,
      photo: photo,
      verifiedAt: `${formattedDate}, ${formattedTime} WITA`,
      isVerified: true
    };

    AppState.updateStudentPhotoPermanently(name, photo);
    AppState.save();
    this.stopCamera(contextId);
    this.syncAllCards();

    // Buka dan fokuskan ke workspace soal kuis
    if (contextId === 'kuis' && window.ViewKuis) {
      const page10 = document.querySelector('#page-10');
      if (page10) ViewKuis.render(page10);
      setTimeout(() => {
        const ws = document.querySelector('#quiz-workspace');
        if (ws) {
          ws.style.display = 'block';
          ws.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    return true;
  },

  resetVerification(contextId) {
    if (confirm('Apakah Anda ingin mengganti nama siswa atau mengambil ulang foto dokumentasi?')) {
      const studentName = this.tempNames[contextId] || (AppState.student && AppState.student.name) || '';
      AppState.clearStudentPhotoPermanently(studentName);
      AppState.student.isVerified = false;
      this.tempPhotos[contextId] = '';
      this.tempNames[contextId] = '';
      AppState.save();
      this.syncAllCards();
    }
  },

  resetActiveStudent() {
    AppState.resetActiveStudent();
    this.tempPhotos = {};
    this.tempNames = {};
    const page10 = document.querySelector('#page-10');
    if (page10 && window.ViewKuis) {
      ViewKuis.render(page10);
    }
    this.syncAllCards();
  },

  ensureVerified(contextId) {
    // Latihan formatif (1, 2, 3) tidak wajib diblokir
    if (contextId !== 'kuis') {
      return true;
    }

    const student = AppState.student || {};
    if (student.name && AppState.isStudentCompleted(student.name) && !AppState.isRetakeInstructed(student.name)) {
      alert(`⛔ Nama "${student.name}" sudah menyelesaikan Kuis Akhir. Nama yang sudah diisi tidak bisa mengerjakan kuis lagi!`);
      this.highlightCard(contextId, `⛔ Nama "${student.name}" sudah menyelesaikan Kuis Akhir. Silakan ganti siswa.`);
      return false;
    }

    if (student.isVerified && student.name && student.photo) {
      return true;
    }

    this.highlightCard(contextId, '⚠️ PERHATIAN: Harap pilih nama Anda dari daftar dan ambil foto selfie dokumentasi di atas sebelum mengerjakan Kuis Akhir!');
    return false;
  },

  highlightCard(contextId, message) {
    const card = document.querySelector(`#card-${contextId}`) || document.querySelector(`#verifier-container-${contextId}`);
    if (card) {
      card.classList.remove('highlight-required');
      void card.offsetWidth;
      card.classList.add('highlight-required');
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    this.showAlert(contextId, message);
  },

  showAlert(contextId, msg) {
    const alertBox = document.querySelector(`#${contextId}-alert`);
    if (alertBox) {
      alertBox.textContent = msg;
      alertBox.className = 'verifier-alert-banner show';
    }
  },

  hideAlert(contextId) {
    const alertBox = document.querySelector(`#${contextId}-alert`);
    if (alertBox) {
      alertBox.textContent = '';
      alertBox.className = 'verifier-alert-banner';
    }
  },

  syncAllCards() {
    const contexts = [
      { id: 'latihan1', container: '#verifier-container-latihan1' },
      { id: 'latihan2', container: '#verifier-container-latihan2' },
      { id: 'latihan3', container: '#verifier-container-latihan3' },
      { id: 'kuis', container: '#verifier-container-kuis' },
      { id: 'hasil', container: '#verifier-container-hasil' }
    ];

    contexts.forEach(ctx => {
      const el = document.querySelector(ctx.container);
      if (el) {
        if (ctx.id === 'hasil') {
          el.innerHTML = this.getResultBadgeHTML();
        } else {
          el.innerHTML = this.getCardHTML(ctx.id);
        }
      }
    });

    this.updatePrintableHeader();
  },

  syncPage(pageNum) {
    this.stopAllCameras();
    if (pageNum === 5) {
      const el = document.querySelector('#verifier-container-latihan1');
      if (el) el.innerHTML = this.getCardHTML('latihan1');
    } else if (pageNum === 7) {
      const el = document.querySelector('#verifier-container-latihan2');
      if (el) el.innerHTML = this.getCardHTML('latihan2');
    } else if (pageNum === 9) {
      const el = document.querySelector('#verifier-container-latihan3');
      if (el) el.innerHTML = this.getCardHTML('latihan3');
    } else if (pageNum === 10) {
      const el = document.querySelector('#verifier-container-kuis');
      if (el) el.innerHTML = this.getCardHTML('kuis');
    } else if (pageNum === 11) {
      const el = document.querySelector('#verifier-container-hasil');
      if (el) el.innerHTML = this.getResultBadgeHTML();
    } else if (pageNum === 12) {
      this.updatePrintableHeader();
    }
  },

  getResultBadgeHTML() {
    const student = AppState.student || {};
    const sub = student.name ? AppState.getStudentSubmission(student.name) : null;
    const photo = (sub && sub.studentPhoto) || student.photo;
    const name = (sub && sub.studentName) || student.name;
    const passScore = (window.APP_DATA && APP_DATA.info && APP_DATA.info.passingScore) || 70;
    const isPass = sub ? sub.score >= passScore : (AppState.quiz.calculatedScores.total >= passScore);

    if (!name || !photo) {
      return `
        <div class="card" style="background:#fffbeb; border:1.5px solid #fde68a; padding:10px 14px; margin-bottom:12px; font-size:12px; color:#92400e;">
          ⚠️ <strong>Identitas Siswa Belum Terverifikasi:</strong> Belum ada foto selfie siswa yang terekam pada sesi pengerjaan ini.
        </div>
      `;
    }

    return `
      <div class="result-student-card">
        <img src="${photo}" alt="Foto Siswa Terverifikasi" class="result-student-photo" onclick="TeacherPanel.viewPhoto('${name.replace(/'/g, "\\'")}', '${photo}', ${sub ? sub.score : AppState.quiz.calculatedScores.total}, ${isPass}, '${sub ? sub.submittedAt : '-'}')">
        <div class="result-student-details">
          <div class="result-student-name">${name}</div>
          <div class="result-student-school">Peserta Didik Kelas VII • SMP Negeri 1 Tandukkalua</div>
          <span class="result-student-badge">✓ Tercatat di Folder Guru (${isPass ? 'Lolos KKM' : 'Belum Lolos'})</span>
          <div style="font-size:10.5px; color:#64748b; margin-top:3px;">
            🕒 Waktu Penyelesaian: ${sub ? sub.submittedAt : (student.verifiedAt || '-')}
          </div>
        </div>
      </div>
    `;
  },

  updatePrintableHeader() {
    const student = AppState.student || {};
    const sub = student.name ? AppState.getStudentSubmission(student.name) : null;
    const photo = (sub && sub.studentPhoto) || student.photo;
    const name = (sub && sub.studentName) || student.name;
    const score = sub ? sub.score : AppState.quiz.calculatedScores.total;

    const printVerifiedContainers = document.querySelectorAll('.print-student-verified-slot');
    printVerifiedContainers.forEach(el => {
      if (name && photo) {
        el.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px; border:1.5px solid #1e3e63; background:#f0fdf4; padding:8px 12px; border-radius:8px; margin-bottom:12px;">
            <img src="${photo}" alt="Foto Wajah" style="width:55px; height:55px; border-radius:50%; object-fit:cover; border:2px solid #15803d;">
            <div>
              <div style="font-size:13px; font-weight:bold; color:#166534;">Nama Siswa: ${name}</div>
              <div style="font-size:11px; color:#334155;">Kelas VII - SMP Negeri 1 Tandukkalua • Nilai Kuis: ${score} / 100</div>
              <div style="font-size:10px; color:#15803d; font-weight:600;">Status: Foto Dokumentasi Terverifikasi Resmi di Folder Guru</div>
            </div>
          </div>
        `;
      } else {
        el.innerHTML = `
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid #cbd5e1; padding-bottom:6px; margin-bottom:10px; font-size:12px;">
            <span>Nama Siswa: ............................................................</span>
            <span>Kelas: VII SMPN 1 Tandukkalua</span>
            <span>Tanggal: ............................</span>
          </div>
        `;
      }
    });
  }
};

if (typeof window !== "undefined") window.StudentVerifier = StudentVerifier;
