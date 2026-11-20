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

  // Daftar Nama Siswa yang Dimasukkan Manual oleh Guru
  teacherRoster: null,

  // Folder Guru: Menyimpan Rekapan Hasil Kuis & Foto Wajah Siswa
  teacherFolder: [],

  // Data Identitas & Verifikasi Wajah Siswa (Cegah Joki)
  student: {
    name: '',
    customName: '',
    photo: '', // base64 data url
    verifiedAt: '',
    isVerified: false
  },

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

  // Metode Pengelolaan Roster Guru (Daftar Nama Siswa)
  getRoster() {
    if (Array.isArray(this.teacherRoster) && this.teacherRoster.length > 0) {
      return this.teacherRoster;
    }
    if (window.APP_DATA && Array.isArray(APP_DATA.studentRoster)) {
      return [...APP_DATA.studentRoster];
    }
    return [];
  },

  setRoster(namesList) {
    const cleanList = namesList
      .map(n => n.trim())
      .filter(n => n.length > 0)
      .sort((a, b) => a.localeCompare('id'));
    this.teacherRoster = cleanList;
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
  },

  addRosterStudent(name) {
    const trimmed = name.trim();
    if (!trimmed) return false;
    const current = this.getRoster();
    if (current.some(n => n.toLowerCase() === trimmed.toLowerCase())) {
      return false; // Sudah ada
    }
    current.push(trimmed);
    current.sort((a, b) => a.localeCompare('id'));
    this.teacherRoster = current;
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
    return true;
  },

  removeRosterStudent(name) {
    const current = this.getRoster().filter(n => n !== name);
    this.teacherRoster = current;
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
  },

  resetRosterToDefault() {
    if (window.APP_DATA && Array.isArray(APP_DATA.studentRoster)) {
      this.teacherRoster = [...APP_DATA.studentRoster];
    } else {
      this.teacherRoster = [];
    }
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
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
    this.save();
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

  allowStudentRetake(studentName) {
    this.deleteStudentSubmission(studentName);
    if (this.student && this.student.name && this.student.name.toLowerCase() === studentName.toLowerCase()) {
      this.student.isVerified = false;
      this.progress.quizCompleted = false;
      this.quiz.userAnswers = {};
      this.quiz.isLocked = {};
    }
    this.save();
    if (window.StudentVerifier) StudentVerifier.syncAllCards();
  },

  deleteStudentSubmission(studentName) {
    if (!this.teacherFolder) return;
    this.teacherFolder = this.teacherFolder.filter(s => s.studentName.toLowerCase() !== studentName.toLowerCase());
    this.save();
  },

  clearAllSubmissions() {
    this.teacherFolder = [];
    this.save();
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
    this.quiz.userAnswers = {};
    this.quiz.isLocked = {};
    this.quiz.currentQuestionIndex = 0;
    this.save();
    if (window.StudentVerifier) {
      StudentVerifier.tempPhotos = {};
      StudentVerifier.tempNames = {};
      StudentVerifier.syncAllCards();
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
        teacherRoster: this.teacherRoster,
        teacherFolder: this.teacherFolder
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
        if (parsed.progress) this.progress = { ...this.progress, ...parsed.progress };
        if (parsed.quizScores) this.quiz.calculatedScores = parsed.quizScores;
        if (parsed.student) this.student = { ...this.student, ...parsed.student };
        if (parsed.userRole) this.userRole = parsed.userRole;
        if (parsed.teacherPin) this.teacherPin = parsed.teacherPin;
        if (parsed.teacherRoster) this.teacherRoster = parsed.teacherRoster;
        if (parsed.teacherFolder) this.teacherFolder = parsed.teacherFolder;
      }
    } catch (e) {
      console.warn('Gagal memuat state lokal', e);
    }
  }
};

