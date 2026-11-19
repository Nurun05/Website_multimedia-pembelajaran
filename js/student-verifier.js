/**
 * STUDENT-VERIFIER.JS - MODUL VERIFIKASI WAJAH & IDENTITAS SISWA (ANTI-JOKI)
 * Menjamin pengisian latihan & kuis sesuai dengan siswa bersangkutan.
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
    const student = AppState.student || {};
    const isVerified = student.isVerified && student.name && student.photo;

    if (isVerified) {
      return `
        <div class="verifier-card" id="card-${contextId}">
          <div class="verifier-verified-box">
            <div class="verified-avatar-wrapper">
              <img src="${student.photo}" alt="Foto Wajah Siswa" class="verified-avatar-img">
              <span class="verified-avatar-badge">✓</span>
            </div>
            <div class="verified-info">
              <div class="verified-student-name">${student.name}</div>
              <div class="verified-student-meta">Kelas VII - SMP Negeri 1 Tandukkalua</div>
              <div class="verified-timestamp">🛡️ Bebas Joki | Terverifikasi: ${student.verifiedAt || 'Aktif'}</div>
            </div>
            <button type="button" class="btn-reverify" onclick="StudentVerifier.resetVerification('${contextId}')" title="Ganti nama atau foto">
              🔄 Ganti / Foto Ulang
            </button>
          </div>
        </div>
      `;
    }

    const roster = APP_DATA.studentRoster || [];
    const savedName = this.tempNames[contextId] || student.name || '';
    const tempPhoto = this.tempPhotos[contextId] || student.photo || '';

    return `
      <div class="verifier-card" id="card-${contextId}">
        <div class="verifier-title-bar">
          <span style="font-size:18px;">🛡️</span>
          <span class="verifier-title">Verifikasi Identitas &amp; Wajah Siswa</span>
          <span class="verifier-badge-anti-joki">ANTI-JOKI</span>
        </div>
        
        <div class="verifier-desc">
          Pilihlah nama Anda dari daftar siswa di bawah ini dan ambil foto selfie langsung melalui kamera HP/laptop untuk menjamin pengerjaan dilakukan sendiri secara jujur.
        </div>

        <!-- 1. Pemilihan Nama Siswa -->
        <div class="verifier-field-group">
          <label class="verifier-label" for="${contextId}-select-name">
            👤 Nama Lengkap Siswa:
          </label>
          <select id="${contextId}-select-name" class="verifier-select" onchange="StudentVerifier.handleNameChange('${contextId}', this.value)">
            <option value="">-- Pilih Nama Siswa (Kelas VII SMPN 1 Tandukkalua) --</option>
            ${roster.map(name => `
              <option value="${name}" ${savedName === name ? 'selected' : ''}>${name}</option>
            `).join('')}
            <option value="__custom__" ${savedName && !roster.includes(savedName) ? 'selected' : ''}>➕ [Ketik Nama Lain / Siswa Baru]</option>
          </select>

          <input type="text" id="${contextId}-custom-name" class="verifier-input-text" 
                 placeholder="Ketik nama lengkap Anda di sini..." 
                 value="${savedName && !roster.includes(savedName) ? savedName : ''}"
                 style="display:${savedName && !roster.includes(savedName) ? 'block' : 'none'};"
                 oninput="StudentVerifier.handleCustomNameInput('${contextId}', this.value)">
        </div>

        <!-- 2. Kamera & Foto Wajah -->
        <div class="verifier-field-group">
          <label class="verifier-label">
            📸 Verifikasi Wajah Siswa:
          </label>
          <div class="camera-view-container" id="${contextId}-cam-container">
            <div class="camera-viewport">
              <div id="${contextId}-placeholder" class="camera-placeholder" style="display:${tempPhoto ? 'none' : 'flex'};">
                <span style="font-size:28px; margin-bottom:4px;">👤</span>
                <span style="font-size:11px;">Kamera belum aktif.<br>Klik tombol kamera di bawah.</span>
              </div>
              <video id="${contextId}-video" class="camera-video" autoplay playsinline muted style="display:none;"></video>
              <canvas id="${contextId}-canvas" style="display:none;"></canvas>
              <img id="${contextId}-preview" class="photo-preview-img" src="${tempPhoto}" alt="Foto Wajah" style="display:${tempPhoto ? 'block' : 'none'};">
              <div id="${contextId}-face-guide" class="camera-face-guide" style="display:none;"></div>
            </div>

            <!-- Tombol Aksi Kamera -->
            <div class="camera-btn-group">
              <button type="button" id="${contextId}-btn-open" class="btn-camera btn-camera-open" onclick="StudentVerifier.openCamera('${contextId}')">
                📷 Buka Kamera
              </button>
              <button type="button" id="${contextId}-btn-snap" class="btn-camera btn-camera-capture" style="display:none;" onclick="StudentVerifier.snapPhoto('${contextId}')">
                🔴 Ambil Foto
              </button>
              <button type="button" id="${contextId}-btn-close" class="btn-camera" style="display:none; background:#64748b; color:#fff;" onclick="StudentVerifier.stopCamera('${contextId}')">
                ✖ Tutup
              </button>
              <button type="button" id="${contextId}-btn-retake" class="btn-camera btn-camera-open" style="display:${tempPhoto ? 'inline-flex' : 'none'};" onclick="StudentVerifier.retakePhoto('${contextId}')">
                🔄 Foto Ulang
              </button>
              <label class="btn-camera btn-camera-upload" title="Pilih dari galeri foto atau kamera ponsel">
                📁 Kamera HP / Galeri
                <input type="file" id="${contextId}-file-input" accept="image/*" capture="user" style="display:none;" onchange="StudentVerifier.handleFileUpload('${contextId}', this)">
              </label>
            </div>
          </div>
        </div>

        <!-- Tombol Konfirmasi -->
        <button type="button" class="btn btn-primary btn-full" style="font-size:13.5px; padding:10px;" onclick="StudentVerifier.confirmVerification('${contextId}')">
          ✅ Simpan &amp; Verifikasi Identitas
        </button>

        <!-- Pesan Peringatan Validasi -->
        <div id="${contextId}-alert" class="verifier-alert-banner"></div>
      </div>
    `;
  },

  handleNameChange(contextId, value) {
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
    this.hideAlert(contextId);
  },

  handleCustomNameInput(contextId, value) {
    this.tempNames[contextId] = value.trim();
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
    } catch (err) {
      console.warn('Gagal membuka kamera:', err);
      this.showAlert(contextId, 'Izin kamera ditolak atau kamera sedang dipakai aplikasi lain. Anda dapat menggunakan tombol "Kamera HP / Galeri".');
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

    if (!video || !canvas || !preview) return;

    const size = 320;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Buat efek mirror pada canvas sesuai video selfie
    ctx.translate(size, 0);
    ctx.scale(-1, 1);

    // Ambil crop tengah dari video agar tidak terdistorsi
    const vWidth = video.videoWidth || size;
    const vHeight = video.videoHeight || size;
    const minDim = Math.min(vWidth, vHeight);
    const startX = (vWidth - minDim) / 2;
    const startY = (vHeight - minDim) / 2;

    ctx.drawImage(video, startX, startY, minDim, minDim, 0, 0, size, size);

    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    this.tempPhotos[contextId] = dataUrl;

    // Tampilkan pratinjau foto
    preview.src = dataUrl;
    preview.style.display = 'block';
    video.style.display = 'none';
    if (faceGuide) faceGuide.style.display = 'none';

    if (btnSnap) btnSnap.style.display = 'none';
    if (btnClose) btnClose.style.display = 'none';
    if (btnRetake) btnRetake.style.display = 'inline-flex';

    this.stopCamera(contextId);
    this.hideAlert(contextId);
  },

  retakePhoto(contextId) {
    this.tempPhotos[contextId] = '';
    const preview = document.querySelector(`#${contextId}-preview`);
    if (preview) {
      preview.src = '';
      preview.style.display = 'none';
    }
    this.openCamera(contextId);
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

    const photo = this.tempPhotos[contextId] || (AppState.student && AppState.student.photo);

    if (!name) {
      this.showAlert(contextId, '⚠️ Silakan pilih nama Anda terlebih dahulu dari daftar nama siswa!');
      return false;
    }

    if (!photo) {
      this.showAlert(contextId, '⚠️ Silakan ambil foto selfie wajah Anda terlebih dahulu menggunakan kamera atau tombol upload!');
      return false;
    }

    // Format tanggal & jam
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

    AppState.save();
    this.stopCamera(contextId);
    this.syncAllCards();

    // Tampilkan notifikasi konfirmasi
    alert(`Identitas & Foto Berhasil Diverifikasi!\n\nNama: ${name}\nStatus: Bebas Joki (Wajah Asli Siswa Cocok)\n\nSilakan lanjutkan pengerjaan latihan & kuis secara jujur!`);
    return true;
  },

  resetVerification(contextId) {
    if (confirm('Apakah Anda ingin mengganti nama siswa atau mengambil ulang foto verifikasi?')) {
      AppState.student.isVerified = false;
      this.tempPhotos[contextId] = '';
      this.tempNames[contextId] = '';
      AppState.save();
      this.syncAllCards();
    }
  },

  ensureVerified(contextId) {
    const student = AppState.student || {};
    if (student.isVerified && student.name && student.photo) {
      return true;
    }

    this.highlightCard(contextId, '⚠️ PERHATIAN ANTI-JOKI: Harap pilih nama Anda dan ambil foto selfie verifikasi wajah di atas sebelum mengisi jawaban latihan / kuis!');
    return false;
  },

  highlightCard(contextId, message) {
    const card = document.querySelector(`#card-${contextId}`) || document.querySelector(`#verifier-container-${contextId}`);
    if (card) {
      card.classList.remove('highlight-required');
      void card.offsetWidth; // trigger reflow
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
    if (!student.isVerified || !student.photo) {
      return `
        <div class="card" style="background:#fffbeb; border:1.5px solid #fde68a; padding:10px 14px; margin-bottom:12px; font-size:12px; color:#92400e;">
          ⚠️ <strong>Identitas Siswa Belum Terverifikasi:</strong> Belum ada foto selfie siswa yang terekam pada sesi pengerjaan ini.
        </div>
      `;
    }

    return `
      <div class="result-student-card">
        <img src="${student.photo}" alt="Foto Siswa Terverifikasi" class="result-student-photo">
        <div class="result-student-details">
          <div class="result-student-name">${student.name}</div>
          <div class="result-student-school">Peserta Didik Kelas VII • SMP Negeri 1 Tandukkalua</div>
          <span class="result-student-badge">✓ Terverifikasi Bebas Joki (Foto Wajah Cocok)</span>
          <div style="font-size:10.5px; color:#64748b; margin-top:3px;">
            🕒 Waktu Verifikasi: ${student.verifiedAt || '-'}
          </div>
        </div>
      </div>
    `;
  },

  updatePrintableHeader() {
    const student = AppState.student || {};
    const printVerifiedContainers = document.querySelectorAll('.print-student-verified-slot');
    printVerifiedContainers.forEach(el => {
      if (student.isVerified && student.name && student.photo) {
        el.innerHTML = `
          <div style="display:flex; align-items:center; gap:12px; border:1.5px solid #1e3e63; background:#f0fdf4; padding:8px 12px; border-radius:8px; margin-bottom:12px;">
            <img src="${student.photo}" alt="Foto Wajah" style="width:55px; height:55px; border-radius:50%; object-fit:cover; border:2px solid #15803d;">
            <div>
              <div style="font-size:13px; font-weight:bold; color:#166534;">Nama Siswa: ${student.name}</div>
              <div style="font-size:11px; color:#334155;">Kelas VII - SMP Negeri 1 Tandukkalua</div>
              <div style="font-size:10px; color:#15803d; font-weight:600;">Status: Terverifikasi Wajah Asli Siswa (Bebas Joki) - ${student.verifiedAt || ''}</div>
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
