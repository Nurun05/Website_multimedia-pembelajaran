/**
 * STATE.JS - MANAJEMEN STATUS & PENYIMPANAN LOCALSTORAGE
 * Multimedia Pembelajaran Interaktif SMP Negeri 1 Tandukkalua
 */

const AppState = {
  currentPage: 1,
  totalPages: 12,

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

  save() {
    try {
      localStorage.setItem('kehati_media_state', JSON.stringify({
        progress: this.progress,
        quizScores: this.quiz.calculatedScores
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
      }
    } catch (e) {
      console.warn('Gagal memuat state lokal', e);
    }
  }
};

