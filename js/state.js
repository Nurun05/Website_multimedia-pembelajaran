/**
 * STATE.JS - MANAJEMEN STATUS & PENYIMPANAN LOCALSTORAGE
 * Multimedia Pembelajaran Interaktif SMP Negeri 1 Tandukkalua
 */

const AppState = {
  currentPage: 1,
  totalPages: 12,

  // Peran Pengguna Aktif ('siswa' | 'guru')
  userRole: 'siswa',
  teacherPin: 'guru123',

  // Daftar Nama Siswa (Dikelola Mandiri oleh Guru - Nilai Awal Kosong)
  teacherRoster: [],
  daftarSiswa: [],

  // Folder Guru: Menyimpan Rekapan Hasil Kuis & Foto Wajah Siswa
  teacherFolder: [],

  // Daftar Siswa yang Diperintahkan Ujian Ulang oleh Guru
  retakeRequests: {},

  // Data Identitas & Verifikasi Wajah Siswa (Cegah Joki)
  student: {
    name: '',
    customName: '',
    photo: '', // base64 data url
    verifiedAt: '',
    isVerified: false
  },

  // Kunci Keamanan Perangkat Setelah Pengiriman Kuis (Submissions Lock)
  deviceLock: null, // { lockedUntil: number, studentName: string, submittedAt: number, durationMinutes: number }

  progress: {
    kegiatan1Done: false,
    kegiatan2Done: false,
    kegiatan3Done: false,
    quizCompleted: false,
    quizScore: 0
  },

  exercise1: {
    answers: {},
    results: {}
  },

  exercise2: {
    selections: {}
  },

  anim3: {
    currentStep: 1,
    totalSteps: 5,
    timer: null,
    isPlaying: false
  },

  exercise3: {
    items: []
  },

  quiz: {
    currentQuestionIndex: 0,
    userAnswers: {},
    isLocked: {},
    calculatedScores: {
      total: 0,
      tp1Pct: 0, tp1Correct: 0, tp1Total: 3,
      tp2Pct: 0, tp2Correct: 0, tp2Total: 4,
      tp3Pct: 0, tp3Correct: 0, tp3Total: 3
    }
  },

  // Metode Pengelolaan Roster Guru (Daftar Nama Siswa Mandiri)
  getRoster() {
    if (Array.isArray(this.daftarSiswa) && this.daftarSiswa.length > 0) {
      return this.daftarSiswa;
    }
    if (Array.isArray(this.teacherRoster) && this.teacherRoster.length > 0) {
      return this.teacherRoster;
    }
    return [];
  },

  setRoster(namesList) {
    const cleanList = namesList
      .map(n => n.trim())
      .filter(n => n.length > 0)
      .sort((a, b) => a.localeCompare('id'));
    this.teacherRoster = cleanList;
    this.daftarSiswa = cleanList;
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
  },

  addRosterStudent(name) {
    const trimmed = name.trim();
    if (!trimmed) return false;
    const current = [...this.getRoster()];
    if (current.some(n => n.toLowerCase() === trimmed.toLowerCase())) {
      return false; // Sudah ada
    }
    current.push(trimmed);
    current.sort((a, b) => a.localeCompare('id'));
    this.teacherRoster = current;
    this.daftarSiswa = current;
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
    return true;
  },

  removeRosterStudent(name) {
    const current = this.getRoster().filter(n => n !== name);
    this.teacherRoster = current;
    this.daftarSiswa = current;
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
  },

  clearAllRoster() {
    this.teacherRoster = [];
    this.daftarSiswa = [];
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
  },

  resetRosterToDefault() {
    this.clearAllRoster();
  },

  // Metode Folder Guru (Penyimpanan Rekap Hasil & Foto Wajah Siswa)
  addStudentSubmission(submission) {
    if (!this.teacherFolder) this.teacherFolder = [];
    const existingIndex = this.teacherFolder.findIndex(s => s.studentName.toLowerCase() === submission.studentName.toLowerCase());
    if (existingIndex >= 0) {
      this.teacherFolder[existingIndex] = { ...this.teacherFolder[existingIndex], ...submission };
    } else {
      this.teacherFolder.push(submission);
    }
    // Jika siswa telah selesai mengerjakan kuis (termasuk kuis ulang), hapus perintah ujian ulang aktif
    this.clearRetakeInstruction(submission.studentName);
    this.save();
  },

  // Fitur Penghapusan Permanen Foto Siswa & Sinkronisasi Real-Time ke Portal Guru
  clearStudentPhotoPermanently(studentName) {
    const targetName = (studentName || (this.student && this.student.name) || '').trim();
    const targetLower = targetName.toLowerCase();

    // 1. Kosongkan data foto pada objek siswa aktif di state
    if (this.student) {
      if (!targetName || (this.student.name && this.student.name.toLowerCase() === targetLower)) {
        this.student.photo = '';
        this.student.isVerified = false;
        this.student.verifiedAt = '';
      }
    }

    // 2. Kosongkan & perbarui status di folder rekapan guru (teacherFolder)
    if (Array.isArray(this.teacherFolder)) {
      this.teacherFolder.forEach(s => {
        if (!targetName || (s.studentName && s.studentName.toLowerCase() === targetLower)) {
          s.studentPhoto = '';
          s.photoDeleted = true;
          s.photoDeletedAt = new Date().toLocaleString('id-ID');
        }
      });
    }

    // 3. Simpan permanen ke localStorage seketika agar saat refresh tidak pulih
    this.save();

    // 4. Sinkronisasi tampilan real-time di portal guru & kartu verifikasi siswa
    if (window.TeacherPanel && typeof TeacherPanel.renderSubmissionsTab === 'function') {
      TeacherPanel.renderSubmissionsTab();
    }
    if (window.StudentVerifier && typeof StudentVerifier.syncAllCards === 'function') {
      StudentVerifier.syncAllCards();
    }
  },

  // Pembaruan Foto Siswa Baru ke Penyimpanan Lokal & Folder Guru
  updateStudentPhotoPermanently(studentName, photoDataUrl) {
    const targetName = (studentName || (this.student && this.student.name) || '').trim();
    if (!targetName || !photoDataUrl) return;
    const targetLower = targetName.toLowerCase();

    if (this.student) {
      this.student.name = targetName;
      this.student.photo = photoDataUrl;
    }

    if (Array.isArray(this.teacherFolder)) {
      this.teacherFolder.forEach(s => {
        if (s.studentName && s.studentName.toLowerCase() === targetLower) {
          s.studentPhoto = photoDataUrl;
          s.photoDeleted = false;
          delete s.photoDeletedAt;
        }
      });
    }

    this.save();

    if (window.TeacherPanel && typeof TeacherPanel.renderSubmissionsTab === 'function') {
      TeacherPanel.renderSubmissionsTab();
    }
  },

  getStudentSubmissions() {
    return Array.isArray(this.teacherFolder) ? this.teacherFolder : [];
  },

  isStudentCompleted(studentName) {
    if (!studentName || !Array.isArray(this.teacherFolder)) return false;
    return this.teacherFolder.some(s => s.studentName.toLowerCase() === studentName.trim().toLowerCase());
  },

  getStudentSubmission(studentName) {
    if (!studentName || !Array.isArray(this.teacherFolder)) return null;
    return this.teacherFolder.find(s => s.studentName.toLowerCase() === studentName.trim().toLowerCase()) || null;
  },

  // Fitur Pelacakan & Perintah Ujian Ulang dari Guru
  instructStudentRetake(studentName) {
    if (!studentName) return;
    const nameLower = studentName.trim().toLowerCase();
    if (!this.retakeRequests) this.retakeRequests = {};
    const now = new Date();
    const timeStr = `${now.toLocaleDateString('id-ID')} ${now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`;

    this.retakeRequests[nameLower] = {
      name: studentName.trim(),
      instructedAt: timeStr,
      active: true
    };

    // Tandai juga pada rekap folder guru
    if (Array.isArray(this.teacherFolder)) {
      const sub = this.teacherFolder.find(s => s.studentName.toLowerCase() === nameLower);
      if (sub) {
        sub.retakeInstructed = true;
        sub.retakeInstructedAt = timeStr;
      }
    }

    // Jika siswa yang sedang aktif adalah siswa yang diminta ujian ulang, buka kuncian kuisnya
    if (this.student && this.student.name && this.student.name.toLowerCase() === nameLower) {
      this.student.isVerified = false;
      this.progress.quizCompleted = false;
      this.quiz.userAnswers = {};
      this.quiz.isLocked = {};
      this.quiz.currentQuestionIndex = 0;
    }

    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
  },

  isRetakeInstructed(studentName) {
    if (!studentName || !this.retakeRequests) return false;
    return Boolean(this.retakeRequests[studentName.trim().toLowerCase()]);
  },

  getRetakeInfo(studentName) {
    if (!studentName || !this.retakeRequests) return null;
    return this.retakeRequests[studentName.trim().toLowerCase()] || null;
  },

  clearRetakeInstruction(studentName) {
    if (!studentName || !this.retakeRequests) return;
    const nameLower = studentName.trim().toLowerCase();
    delete this.retakeRequests[nameLower];
    if (Array.isArray(this.teacherFolder)) {
      const sub = this.teacherFolder.find(s => s.studentName.toLowerCase() === nameLower);
      if (sub) {
        sub.retakeInstructed = false;
        sub.completedRetake = true;
      }
    }
    this.save();
  },

  allowStudentRetake(studentName) {
    this.instructStudentRetake(studentName);
  },

  deleteStudentSubmission(studentName) {
    if (!this.teacherFolder) return;
    this.teacherFolder = this.teacherFolder.filter(s => s.studentName.toLowerCase() !== studentName.toLowerCase());
    this.clearRetakeInstruction(studentName);
    this.save();
  },

  clearAllSubmissions() {
    this.teacherFolder = [];
    this.retakeRequests = {};
    this.save();
  },

  // Manajemen Kunci Keamanan Perangkat Kuis (Submissions Lock)
  setDeviceQuizLock(studentName, durationMinutes = 5) {
    const now = Date.now();
    this.deviceLock = {
      studentName: studentName || 'Siswa',
      lockedUntil: now + (durationMinutes * 60 * 1000),
      durationMinutes: durationMinutes,
      submittedAt: now
    };
    this.save();
  },

  isDeviceQuizLocked() {
    return false;
  },

  getDeviceLockRemainingSeconds() {
    return 0;
  },

  unlockDeviceQuiz() {
    this.deviceLock = null;
    this.resetActiveStudent();
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
    if (window.ViewMenu) ViewMenu.updateProgress();
  },

  resetActiveStudent() {
    this.student = {
      name: '',
      customName: '',
      photo: '',
      verifiedAt: '',
      isVerified: false
    };
    this.progress.quizCompleted = false;
    this.progress.quizScore = 0;
    this.quiz.userAnswers = {};
    this.quiz.isLocked = {};
    this.quiz.currentQuestionIndex = 0;
    this.quiz.calculatedScores = {
      total: 0,
      tp1Pct: 0, tp1Correct: 0, tp1Total: 3,
      tp2Pct: 0, tp2Correct: 0, tp2Total: 4,
      tp3Pct: 0, tp3Correct: 0, tp3Total: 3
    };
    this.save();
    if (window.StudentVerifier) {
      StudentVerifier.tempPhotos = {};
      StudentVerifier.tempNames = {};
      StudentVerifier.syncAllCards();
    }
    if (window.ViewMenu) {
      ViewMenu.updateProgress();
    }
  },

  save() {
    try {
      localStorage.setItem('kehati_media_state', JSON.stringify({
        progress: this.progress,
        quizScores: this.quiz.calculatedScores,
        student: this.student,
        userRole: this.userRole,
        teacherPin: this.teacherPin,
        teacherRoster: this.getRoster(),
        daftarSiswa: this.getRoster(),
        teacherFolder: this.teacherFolder,
        retakeRequests: this.retakeRequests,
        deviceLock: this.deviceLock
      }));
    } catch (e) {
      console.warn('LocalStorage tidak tersedia', e);
    }
  },

  load() {
    try {
      const saved = localStorage.getItem('kehati_media_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.teacherPin) this.teacherPin = parsed.teacherPin;
        if (parsed.teacherFolder) this.teacherFolder = parsed.teacherFolder;
        if (parsed.retakeRequests) this.retakeRequests = parsed.retakeRequests;
        if (parsed.deviceLock) this.deviceLock = parsed.deviceLock;
        if (parsed.userRole) this.userRole = parsed.userRole;

        // Kelola daftar siswa (daftarSiswa / teacherRoster): Nilai awal kosong []
        if (Array.isArray(parsed.daftarSiswa)) {
          this.daftarSiswa = parsed.daftarSiswa;
          this.teacherRoster = parsed.daftarSiswa;
        } else if (Array.isArray(parsed.teacherRoster)) {
          this.daftarSiswa = parsed.teacherRoster;
          this.teacherRoster = parsed.teacherRoster;
        } else {
          this.daftarSiswa = [];
          this.teacherRoster = [];
        }

        // Pembersihan Sesi & Isolasi Privasi Perangkat:
        // Jika kuis telah selesai pada data tersimpan atau siswa belum terverifikasi resmi,
        // bersihkan sesi aktif agar data dan nilai pengguna sebelumnya tidak mencampuradukkan perangkat siswa baru.
        if (parsed.progress && parsed.progress.quizCompleted) {
          this.student = {
            name: '',
            customName: '',
            photo: '',
            verifiedAt: '',
            isVerified: false
          };
          this.progress.quizCompleted = false;
          this.progress.quizScore = 0;
          this.quiz.userAnswers = {};
          this.quiz.isLocked = {};
          this.quiz.calculatedScores = {
            total: 0,
            tp1Pct: 0, tp1Correct: 0, tp1Total: 3,
            tp2Pct: 0, tp2Correct: 0, tp2Total: 4,
            tp3Pct: 0, tp3Correct: 0, tp3Total: 3
          };
        } else {
          if (parsed.progress) this.progress = { ...this.progress, ...parsed.progress };
          if (parsed.quizScores) this.quiz.calculatedScores = parsed.quizScores;
          if (parsed.student) this.student = { ...this.student, ...parsed.student };
        }
      }
    } catch (e) {
      console.warn('Gagal memuat state lokal', e);
    }
  }
};


if (typeof window !== "undefined") window.AppState = AppState;
