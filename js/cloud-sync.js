/**
 * CLOUD-SYNC.JS - SINKRONISASI REAL-TIME LINTAS PERANGKAT
 * Multimedia Pembelajaran Interaktif SMP Negeri 1 Tandukkalua
 * Pengembang: Nurun Nisa Ahmad (NIM: 240209501049) - PTIK E 2024
 * 
 * =========================================================================
 * PETUNJUK PENGATURAN CLOUD DATABASE (FIREBASE REALTIME DATABASE)
 * =========================================================================
 * 1. Buka Firebase Console di peramban: https://console.firebase.google.com/
 * 2. Klik "Add Project" / "Buat Proyek" (misal: "kehati-smpn1-tandukkalua").
 * 3. Di menu sebelah kiri, pilih "Build" -> "Realtime Database" -> "Create Database".
 *    Pilih lokasi (misal: Singapore) dan pilih mode "Start in test mode" (agar baca/tulis diizinkan).
 * 4. Buka Project Settings (ikon gerigi di kiri atas) -> "General" -> gulir ke bawah ke "Your apps".
 * 5. Klik ikon Web (</>), daftarkan nama aplikasi, lalu salin objek `firebaseConfig`.
 * 6. Tempelkan nilai konfigurasi Anda pada objek FIREBASE_CONFIG di bawah ini:
 */

const FIREBASE_CONFIG = {
  // GANTI DENGAN KUNCI PROYEK FIREBASE ANDA SENDIRI:
  apiKey: "", 
  authDomain: "",
  databaseURL: "", // Contoh: "https://kehati-smpn1-default-rtdb.asia-southeast1.firebasedatabase.app"
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

/**
 * ALTERNATIF: Konfigurasi Supabase (Jika memilih Supabase via CDN)
 */
const SUPABASE_CONFIG = {
  url: "",      // Contoh: "https://xyzcompany.supabase.co"
  anonKey: ""   // Anon public API Key
};

// =========================================================================
// MODUL CLOUD-SYNC DENGAN FALLBACK OTOMATIS KE LOCALSTORAGE
// =========================================================================

const CloudSync = {
  isFirebaseActive: false,
  isOnline: navigator.onLine,
  listenersAttached: false,
  dbRef: null,

  init() {
    this.checkOnlineStatus();
    this.initFirebase();
  },

  checkOnlineStatus() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.updateStatusBadge();
      console.log('🌐 Perangkat terhubung ke internet.');
    });
    window.addEventListener('offline', () => {
      this.isOnline = false;
      this.updateStatusBadge();
      console.warn('⚠️ Perangkat offline. Mode penyimpanan lokal aktif.');
    });
  },

  isConfigured() {
    return Boolean(
      FIREBASE_CONFIG.apiKey && 
      FIREBASE_CONFIG.databaseURL && 
      FIREBASE_CONFIG.apiKey.trim() !== "" &&
      !FIREBASE_CONFIG.apiKey.includes("AIzaSy_CONTOH")
    );
  },

  initFirebase() {
    if (!this.isConfigured()) {
      console.info('ℹ️ CloudSync: Konfigurasi Firebase belum diisi. Aplikasi berjalan dalam mode LocalStorage cerdas (Offline-First).');
      this.isFirebaseActive = false;
      this.updateStatusBadge();
      return;
    }

    try {
      if (typeof firebase === 'undefined') {
        console.warn('⚠️ Firebase SDK belum termuat di DOM.');
        this.isFirebaseActive = false;
        return;
      }

      // Inisialisasi Firebase App jika belum dibuat
      if (!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
      }

      this.dbRef = firebase.database();
      this.isFirebaseActive = true;
      console.log('☁️ CloudSync: Firebase Realtime Database berhasil terhubung.');

      // Pasang Pendengar Real-Time (Listeners)
      this.attachRealtimeListeners();
      this.updateStatusBadge();

    } catch (err) {
      console.error('❌ Gagal menginisialisasi Firebase:', err);
      this.isFirebaseActive = false;
      this.updateStatusBadge();
    }
  },

  attachRealtimeListeners() {
    if (!this.dbRef || this.listenersAttached) return;
    this.listenersAttached = true;

    // 1. Sinkronisasi Daftar Siswa (Roster) Real-Time
    // Saat guru menambah/menghapus nama di laptop, HP siswa langsung terupdate otomatis!
    this.dbRef.ref('kehati/roster').on('value', snapshot => {
      const data = snapshot.val();
      if (Array.isArray(data)) {
        AppState.daftarSiswa = data;
        AppState.teacherRoster = data;
        AppState.save(); // simpan cache lokal

        // Perbarui tampilan dropdown siswa di halaman kuis dan tabel portal guru
        if (window.StudentVerifier && typeof StudentVerifier.syncAllCards === 'function') {
          StudentVerifier.syncAllCards();
        }
        if (window.TeacherPanel && typeof TeacherPanel.renderRosterTab === 'function') {
          TeacherPanel.renderRosterTab();
        }
        console.log('🔄 [Realtime] Daftar nama siswa disinkronkan dari cloud:', data.length, 'nama.');
      } else if (data === null) {
        // Jika data di cloud kosong
        AppState.daftarSiswa = [];
        AppState.teacherRoster = [];
        AppState.save();
        if (window.StudentVerifier) StudentVerifier.syncAllCards();
        if (window.TeacherPanel) TeacherPanel.renderRosterTab();
      }
    }, err => {
      console.warn('Gagal memantau roster real-time:', err);
    });

    // 2. Sinkronisasi Folder Hasil & Foto Kuis Siswa (Submissions) Real-Time
    // Saat siswa kirim kuis dan foto di HP, laptop guru langsung menerima pembaruan live!
    this.dbRef.ref('kehati/submissions').on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        const list = Array.isArray(data) ? data : Object.values(data);
        AppState.teacherFolder = list;
        AppState.save();

        if (window.TeacherPanel && typeof TeacherPanel.renderSubmissionsTab === 'function') {
          TeacherPanel.renderSubmissionsTab();
        }
        if (window.StudentVerifier && typeof StudentVerifier.syncAllCards === 'function') {
          StudentVerifier.syncAllCards();
        }
        console.log('🔄 [Realtime] Rekap kuis & foto diperbarui dari cloud:', list.length, 'peserta.');
      } else {
        AppState.teacherFolder = [];
        AppState.save();
        if (window.TeacherPanel) TeacherPanel.renderSubmissionsTab();
        if (window.StudentVerifier) StudentVerifier.syncAllCards();
      }
    }, err => {
      console.warn('Gagal memantau submissions real-time:', err);
    });

    // 3. Sinkronisasi Perintah Ujian Ulang (Retake Requests) Real-Time
    this.dbRef.ref('kehati/retakeRequests').on('value', snapshot => {
      const data = snapshot.val();
      AppState.retakeRequests = data || {};
      AppState.save();
      if (window.StudentVerifier && typeof StudentVerifier.syncAllCards === 'function') {
        StudentVerifier.syncAllCards();
      }
    });
  },

  // =========================================================================
  // METODE PENGIRIMAN DATA KE CLOUD (DENGAN LOCALSTORAGE FALLBACK)
  // =========================================================================

  /**
   * Menyimpan daftar siswa ke Cloud Database & LocalStorage
   */
  async syncRoster(namesList) {
    // 1. Simpan selalu ke LocalStorage sebagai cadangan lokal
    AppState.teacherRoster = namesList;
    AppState.daftarSiswa = namesList;
    AppState.save();

    // 2. Jika Firebase aktif, kirimkan ke Cloud
    if (this.isFirebaseActive && this.dbRef) {
      try {
        await this.dbRef.ref('kehati/roster').set(namesList);
        console.log('☁️ Roster berhasil disimpan ke Cloud Database.');
      } catch (err) {
        console.error('❌ Gagal sinkronisasi roster ke cloud:', err);
      }
    }
  },

  /**
   * Menyimpan hasil kuis & foto dokumentasi siswa ke Cloud Database
   */
  async syncSubmission(submission) {
    if (!submission || !submission.studentName) return;

    // 1. Simpan ke LocalStorage lokal
    if (!AppState.teacherFolder) AppState.teacherFolder = [];
    const existingIndex = AppState.teacherFolder.findIndex(
      s => s.studentName.toLowerCase() === submission.studentName.toLowerCase()
    );
    if (existingIndex >= 0) {
      AppState.teacherFolder[existingIndex] = { ...AppState.teacherFolder[existingIndex], ...submission };
    } else {
      AppState.teacherFolder.push(submission);
    }
    AppState.save();

    // 2. Jika Firebase aktif, unggah ke Cloud Realtime Database
    if (this.isFirebaseActive && this.dbRef) {
      try {
        // Gunakan key aman berdasarkan slug nama siswa
        const safeKey = encodeURIComponent(submission.studentName.toLowerCase().replace(/[\.\#\$\/\[\]]/g, '_'));
        await this.dbRef.ref(`kehati/submissions/${safeKey}`).set(submission);
        console.log('☁️ Data hasil kuis & foto siswa berhasil dikirim ke Cloud Database:', submission.studentName);
      } catch (err) {
        console.error('❌ Gagal mengirim hasil kuis ke cloud:', err);
      }
    }
  },

  /**
   * Menghapus 1 rekapan hasil siswa dari Cloud & Local
   */
  async deleteSubmission(studentName) {
    if (!studentName) return;

    // Hapus lokal
    AppState.teacherFolder = (AppState.teacherFolder || []).filter(
      s => s.studentName.toLowerCase() !== studentName.toLowerCase()
    );
    AppState.save();

    // Hapus di cloud
    if (this.isFirebaseActive && this.dbRef) {
      try {
        const safeKey = encodeURIComponent(studentName.toLowerCase().replace(/[\.\#\$\/\[\]]/g, '_'));
        await this.dbRef.ref(`kehati/submissions/${safeKey}`).remove();
        console.log('☁️ Submission dihapus dari cloud:', studentName);
      } catch (err) {
        console.error('❌ Gagal menghapus submission di cloud:', err);
      }
    }
  },

  /**
   * Mengosongkan seluruh submission & foto dari Cloud & Local
   */
  async clearAllSubmissions() {
    AppState.teacherFolder = [];
    AppState.retakeRequests = {};
    AppState.save();

    if (this.isFirebaseActive && this.dbRef) {
      try {
        await this.dbRef.ref('kehati/submissions').remove();
        await this.dbRef.ref('kehati/retakeRequests').remove();
        console.log('☁️ Seluruh submission & retake di cloud telah dikosongkan.');
      } catch (err) {
        console.error('❌ Gagal mengosongkan submissions di cloud:', err);
      }
    }
  },

  /**
   * Sinkronisasi perintah ujian ulang
   */
  async syncRetakeInstruction(studentName, retakeData) {
    if (!studentName) return;
    const nameLower = studentName.trim().toLowerCase();
    if (!AppState.retakeRequests) AppState.retakeRequests = {};
    AppState.retakeRequests[nameLower] = retakeData;
    AppState.save();

    if (this.isFirebaseActive && this.dbRef) {
      try {
        const safeKey = encodeURIComponent(nameLower.replace(/[\.\#\$\/\[\]]/g, '_'));
        await this.dbRef.ref(`kehati/retakeRequests/${safeKey}`).set(retakeData);
      } catch (err) {
        console.error('❌ Gagal sinkronisasi retake ke cloud:', err);
      }
    }
  },

  async clearRetakeInstruction(studentName) {
    if (!studentName) return;
    const nameLower = studentName.trim().toLowerCase();
    if (AppState.retakeRequests) {
      delete AppState.retakeRequests[nameLower];
    }
    AppState.save();

    if (this.isFirebaseActive && this.dbRef) {
      try {
        const safeKey = encodeURIComponent(nameLower.replace(/[\.\#\$\/\[\]]/g, '_'));
        await this.dbRef.ref(`kehati/retakeRequests/${safeKey}`).remove();
      } catch (err) {
        console.error('❌ Gagal menghapus retake di cloud:', err);
      }
    }
  },

  /**
   * Memperbarui lencana status cloud pada UI (di Portal Guru & Verifier)
   */
  updateStatusBadge() {
    const badges = document.querySelectorAll('.cloud-sync-status-badge');
    const isReady = this.isFirebaseActive && this.isOnline;
    
    badges.forEach(b => {
      // Sembunyikan badge status agar tampilan bersih dan profesional
      b.style.display = 'none';
    });
  }
};

if (typeof window !== 'undefined') {
  window.CloudSync = CloudSync;
}
