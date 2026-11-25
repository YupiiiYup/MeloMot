// =========================================================
// MÉLOMOT — Logique du jeu (Bloc 1/2)
// Thèmes pastel, Audio/Voix, Effets visuels & APIs gratuites
// =========================================================

const PASTEL_THEMES = [
  {
    name: "Rose Pivoine",
    themeColor: "#fde8ec",
    bg1: "#fff5f7",
    bg2: "#f8f0ff",
    bg3: "#eef6ff",
    orb1: "rgba(255, 182, 199, 0.52)",
    orb2: "rgba(196, 181, 253, 0.44)",
    orb3: "rgba(167, 226, 255, 0.45)",
    accent: "#e56b8c",
    accentStrong: "#cf5275",
    accentSoft: "#ffe4ec",
    accentGlow: "rgba(229, 107, 140, 0.28)"
  },
  {
    name: "Lavande Douce",
    themeColor: "#f0ebff",
    bg1: "#f6f2ff",
    bg2: "#eef4ff",
    bg3: "#fdf2f8",
    orb1: "rgba(196, 181, 253, 0.52)",
    orb2: "rgba(165, 216, 255, 0.46)",
    orb3: "rgba(249, 198, 221, 0.44)",
    accent: "#8b6ee8",
    accentStrong: "#7253d4",
    accentSoft: "#ede7ff",
    accentGlow: "rgba(139, 110, 232, 0.28)"
  },
  {
    name: "Pêche Dorée",
    themeColor: "#ffefe4",
    bg1: "#fff6ef",
    bg2: "#fff2f5",
    bg3: "#fef9e7",
    orb1: "rgba(255, 196, 158, 0.52)",
    orb2: "rgba(255, 187, 204, 0.44)",
    orb3: "rgba(253, 228, 162, 0.48)",
    accent: "#e57c58",
    accentStrong: "#cc633f",
    accentSoft: "#ffe8de",
    accentGlow: "rgba(229, 124, 88, 0.28)"
  },
  {
    name: "Menthe Fraîche",
    themeColor: "#e6faf3",
    bg1: "#f1fcf8",
    bg2: "#edf7ff",
    bg3: "#f5f2ff",
    orb1: "rgba(153, 232, 204, 0.52)",
    orb2: "rgba(165, 222, 255, 0.46)",
    orb3: "rgba(205, 196, 255, 0.42)",
    accent: "#36a887",
    accentStrong: "#258d6f",
    accentSoft: "#dff7ef",
    accentGlow: "rgba(54, 168, 135, 0.26)"
  },
  {
    name: "Bleu Ciel Poudré",
    themeColor: "#e8f3ff",
    bg1: "#f0f7ff",
    bg2: "#f3f0ff",
    bg3: "#eefcf7",
    orb1: "rgba(156, 209, 255, 0.54)",
    orb2: "rgba(195, 186, 255, 0.44)",
    orb3: "rgba(162, 235, 214, 0.42)",
    accent: "#4e8ee6",
    accentStrong: "#3574cc",
    accentSoft: "#e2efff",
    accentGlow: "rgba(78, 142, 230, 0.28)"
  },
  {
    name: "Corail Velours",
    themeColor: "#ffecee",
    bg1: "#fff4f2",
    bg2: "#fff6eb",
    bg3: "#f9effc",
    orb1: "rgba(255, 179, 173, 0.5)",
    orb2: "rgba(255, 215, 168, 0.46)",
    orb3: "rgba(229, 193, 252, 0.42)",
    accent: "#e3696f",
    accentStrong: "#c84f56",
    accentSoft: "#ffe5e7",
    accentGlow: "rgba(227, 105, 111, 0.28)"
  },
  {
    name: "Lilas Brume",
    themeColor: "#f7ecff",
    bg1: "#fbf3ff",
    bg2: "#fff2f8",
    bg3: "#eef5ff",
    orb1: "rgba(222, 180, 255, 0.5)",
    orb2: "rgba(255, 188, 217, 0.45)",
    orb3: "rgba(176, 217, 255, 0.44)",
    accent: "#b565d9",
    accentStrong: "#994bc0",
    accentSoft: "#f4e5fc",
    accentGlow: "rgba(181, 101, 217, 0.28)"
  },
  {
    name: "Sable Abricot",
    themeColor: "#fff4e2",
    bg1: "#fffaf0",
    bg2: "#fff3ee",
    bg3: "#f2f8ff",
    orb1: "rgba(255, 214, 153, 0.52)",
    orb2: "rgba(255, 190, 178, 0.44)",
    orb3: "rgba(179, 219, 255, 0.42)",
    accent: "#d9893d",
    accentStrong: "#be7026",
    accentSoft: "#ffefd9",
    accentGlow: "rgba(217, 137, 61, 0.28)"
  }
];

const STORAGE_KEYS = {
  drawn: "melomot_drawn_v1",
  sound: "melomot_sound_v1"
};

const state = {
  currentDiff: "all",
  currentWordObj: null,
  hasStarted: false,
  answersRevealed: false,
  foundCount: 0,
  streakCount: 0,
  drawnWords: new Set(),
  lastThemeIndex: -1,
  revealToken: 0,
  verifyToken: 0,
  sound: {
    voiceEnabled: true,
    voiceVolume: 0.9,
    musicEnabled: true,
    musicVolume: 0.75
  },
  audio: {
    player: new Audio(),
    currentUrl: null,
    activeCard: null
  },
  recognition: null,
  isListening: false
};

const itunesCache = new Map();
const lrclibCache = new Map();

const dom = {
  metaThemeColor: document.getElementById("metaThemeColor"),
  fxCanvas: document.getElementById("fxCanvas"),
  toastContainer: document.getElementById("toastContainer"),

  foundCount: document.getElementById("foundCount"),
  streakCount: document.getElementById("streakCount"),

  soundToggleBtn: document.getElementById("soundToggleBtn"),
  soundStatusDot: document.getElementById("soundStatusDot"),
  soundPanel: document.getElementById("soundPanel"),
  closeSoundPanelBtn: document.getElementById("closeSoundPanelBtn"),
  voiceEnabledToggle: document.getElementById("voiceEnabledToggle"),
  voiceVolumeSlider: document.getElementById("voiceVolumeSlider"),
  voiceVolumeVal: document.getElementById("voiceVolumeVal"),
  musicEnabledToggle: document.getElementById("musicEnabledToggle"),
  musicVolumeSlider: document.getElementById("musicVolumeSlider"),
  musicVolumeVal: document.getElementById("musicVolumeVal"),

  diffBar: document.getElementById("diffBar"),
  diffIndicator: document.getElementById("diffIndicator"),
  diffBtns: Array.from(document.querySelectorAll(".diff-btn")),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  resetDeckBtn: document.getElementById("resetDeckBtn"),

  wordCard: document.getElementById("wordCard"),
  wordDifficultyBadge: document.getElementById("wordDifficultyBadge"),
  vinylBadge: document.getElementById("vinylBadge"),
  speakWordBtn: document.getElementById("speakWordBtn"),
  wordPrompt: document.getElementById("wordPrompt"),
  currentWord: document.getElementById("currentWord"),
  wordHint: document.getElementById("wordHint"),
  startActions: document.getElementById("startActions"),
  startDrawBtn: document.getElementById("startDrawBtn"),
  playActions: document.getElementById("playActions"),
  btnFound: document.getElementById("btnFound"),
  btnReveal: document.getElementById("btnReveal"),

  verifierSection: document.getElementById("verifierSection"),
  verifierToggleBtn: document.getElementById("verifierToggleBtn"),
  verifierBody: document.getElementById("verifierBody"),
  verifierForm: document.getElementById("verifierForm"),
  verifierInput: document.getElementById("verifierInput"),
  clearVerifierBtn: document.getElementById("clearVerifierBtn"),
  micBtn: document.getElementById("micBtn"),
  micStatus: document.getElementById("micStatus"),
  verifySubmitBtn: document.getElementById("verifySubmitBtn"),
  verifierResult: document.getElementById("verifierResult"),

  answersSection: document.getElementById("answersSection"),
  answersWordLabel: document.getElementById("answersWordLabel"),
  answersList: document.getElementById("answersList"),
  btnFoundAnyway: document.getElementById("btnFoundAnyway"),
  btnNextWord: document.getElementById("btnNextWord"),

  deckCompleteModal: document.getElementById("deckCompleteModal"),
  modalTitle: document.getElementById("modalTitle"),
  modalSummaryText: document.getElementById("modalSummaryText"),
  modalResetBtn: document.getElementById("modalResetBtn"),
  modalAllDiffBtn: document.getElementById("modalAllDiffBtn")
};

// --- Icônes SVG réutilisables ---

function getPlayIconSvg() {
  return '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>';
}

function getPauseIconSvg() {
  return '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"></rect><rect x="14" y="4" width="4" height="16" rx="1"></rect></svg>';
}

function getMusicNoteSvg() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>';
}

// --- Utilitaires généraux ---

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeStr(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae");
}

function formatTime(sec) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  dom.toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 2900);
}

// --- Sauvegarde locale ---

function loadSavedState() {
  try {
    const rawSound = localStorage.getItem(STORAGE_KEYS.sound);
    if (rawSound) {
      const parsed = JSON.parse(rawSound);
      state.sound = {
        voiceEnabled: typeof parsed.voiceEnabled === "boolean" ? parsed.voiceEnabled : true,
        voiceVolume: typeof parsed.voiceVolume === "number" ? parsed.voiceVolume : 0.9,
        musicEnabled: typeof parsed.musicEnabled === "boolean" ? parsed.musicEnabled : true,
        musicVolume: typeof parsed.musicVolume === "number" ? parsed.musicVolume : 0.75
      };
    }
  } catch (e) {
    // Ignore storage errors
  }

  try {
    const rawDrawn = localStorage.getItem(STORAGE_KEYS.drawn);
    if (rawDrawn) {
      const list = JSON.parse(rawDrawn);
      if (Array.isArray(list)) {
        state.drawnWords = new Set(list);
      }
    }
  } catch (e) {
    // Ignore storage errors
  }
}

function saveSoundState() {
  try {
    localStorage.setItem(STORAGE_KEYS.sound, JSON.stringify(state.sound));
  } catch (e) {
    // Ignore
  }
}

function saveDrawnState() {
  try {
    localStorage.setItem(STORAGE_KEYS.drawn, JSON.stringify(Array.from(state.drawnWords)));
  } catch (e) {
    // Ignore
  }
}

// --- Thèmes pastel dynamiques ---

function applyRandomPastelTheme() {
  let idx = Math.floor(Math.random() * PASTEL_THEMES.length);
  if (idx === state.lastThemeIndex) {
    idx = (idx + 1) % PASTEL_THEMES.length;
  }
  state.lastThemeIndex = idx;
  const t = PASTEL_THEMES[idx];
  const root = document.documentElement.style;

  root.setProperty("--bg-1", t.bg1);
  root.setProperty("--bg-2", t.bg2);
  root.setProperty("--bg-3", t.bg3);
  root.setProperty("--orb-1", t.orb1);
  root.setProperty("--orb-2", t.orb2);
  root.setProperty("--orb-3", t.orb3);
  root.setProperty("--accent", t.accent);
  root.setProperty("--accent-strong", t.accentStrong);
  root.setProperty("--accent-soft", t.accentSoft);
  root.setProperty("--accent-glow", t.accentGlow);

  if (dom.metaThemeColor) {
    dom.metaThemeColor.setAttribute("content", t.themeColor);
  }
}

// --- Effets visuels Canvas (pluie de notes pastel) ---

let fxParticles = [];
let fxAnimId = null;

function resizeFxCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  dom.fxCanvas.width = Math.floor(window.innerWidth * dpr);
  dom.fxCanvas.height = Math.floor(window.innerHeight * dpr);
  const ctx = dom.fxCanvas.getContext("2d");
  if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function launchCelebrationFx() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  resizeFxCanvas();
  const rect = dom.wordCard.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = Math.max(80, rect.top + rect.height * 0.45);
  const symbols = ["♪", "♫", "♩", "✦", "●"];
  const colors = ["#e56b8c", "#8b6ee8", "#36a887", "#f29d52", "#4e8ee6", "#f48fb1"];

  for (let i = 0; i < 28; i++) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.9;
    const speed = 3.2 + Math.random() * 5.8;
    fxParticles.push({
      x: originX + (Math.random() - 0.5) * 80,
      y: originY + (Math.random() - 0.5) * 20,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.4,
      gravity: 0.14 + Math.random() * 0.06,
      size: 13 + Math.random() * 11,
      rot: (Math.random() - 0.5) * 0.8,
      vrot: (Math.random() - 0.5) * 0.08,
      alpha: 1,
      decay: 0.013 + Math.random() * 0.01,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  if (!fxAnimId) {
    animateFxLoop();
  }
}

function animateFxLoop() {
  const ctx = dom.fxCanvas.getContext("2d");
  if (!ctx) return;

  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  fxParticles = fxParticles.filter((p) => p.alpha > 0.02);

  for (const p of fxParticles) {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.vx *= 0.985;
    p.rot += p.vrot;
    p.alpha -= p.decay;

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.font = `700 ${p.size}px 'Outfit', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(p.symbol, 0, 0);
    ctx.restore();
  }

  if (fxParticles.length > 0) {
    fxAnimId = requestAnimationFrame(animateFxLoop);
  } else {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    fxAnimId = null;
  }
}

// --- Synthèse vocale & Gestion du son ---

function syncSoundUI() {
  dom.voiceEnabledToggle.checked = state.sound.voiceEnabled;
  dom.voiceVolumeSlider.value = state.sound.voiceVolume;
  dom.voiceVolumeVal.textContent = `${Math.round(state.sound.voiceVolume * 100)}%`;

  dom.musicEnabledToggle.checked = state.sound.musicEnabled;
  dom.musicVolumeSlider.value = state.sound.musicVolume;
  dom.musicVolumeVal.textContent = `${Math.round(state.sound.musicVolume * 100)}%`;

  dom.soundStatusDot.classList.remove("is-partial", "is-muted");
  if (!state.sound.voiceEnabled && !state.sound.musicEnabled) {
    dom.soundStatusDot.classList.add("is-muted");
  } else if (!state.sound.voiceEnabled || !state.sound.musicEnabled) {
    dom.soundStatusDot.classList.add("is-partial");
  }

  state.audio.player.volume = state.sound.musicVolume;
  if (!state.sound.musicEnabled && !state.audio.player.paused) {
    stopAllAudio();
  }
}

function speakWord(word, force = false) {
  if (!("speechSynthesis" in window)) return;
  if (!force && !state.sound.voiceEnabled) return;
  if (state.sound.voiceVolume <= 0) return;

  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "fr-FR";
    utterance.rate = 0.95;
    utterance.pitch = 1.02;
    utterance.volume = state.sound.voiceVolume;

    const voices = window.speechSynthesis.getVoices();
    const frVoice =
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("fr") && /google|thomas|amelie|audrey|denise|julie/i.test(v.name)) ||
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("fr"));
    if (frVoice) utterance.voice = frVoice;

    utterance.onstart = () => dom.speakWordBtn.classList.add("is-speaking");
    utterance.onend = () => dom.speakWordBtn.classList.remove("is-speaking");
    utterance.onerror = () => dom.speakWordBtn.classList.remove("is-speaking");

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    dom.speakWordBtn.classList.remove("is-speaking");
  }
}

// --- Lecteur audio unique (extraits 30s iTunes) ---

function updateCardPlayState(cardEl, isPlaying) {
  if (!cardEl) return;
  cardEl.classList.toggle("is-playing", isPlaying);

  const pillBtn = cardEl.querySelector(".play-pill-btn");
  if (pillBtn) {
    pillBtn.innerHTML = isPlaying
      ? `${getPauseIconSvg()}<span>Pause</span>`
      : `${getPlayIconSvg()}<span>Extrait</span>`;
  }

  const overlayBtn = cardEl.querySelector(".play-overlay-btn");
  if (overlayBtn) {
    overlayBtn.innerHTML = isPlaying ? getPauseIconSvg() : getPlayIconSvg();
    overlayBtn.setAttribute("aria-label", isPlaying ? "Mettre en pause" : "Lire l'extrait");
  }
}

function stopAllAudio() {
  const { player, activeCard } = state.audio;
  player.pause();
  if (activeCard) {
    updateCardPlayState(activeCard, false);
    const fill = activeCard.querySelector(".audio-bar-fill");
    const timeEl = activeCard.querySelector(".audio-time");
    if (fill) fill.style.width = "0%";
    if (timeEl) timeEl.textContent = "0:30";
  }
  state.audio.activeCard = null;
  state.audio.currentUrl = null;
  dom.vinylBadge.classList.remove("is-spinning");
}

function toggleTrackAudio(previewUrl, cardEl) {
  if (!previewUrl) return;
  if (!state.sound.musicEnabled) {
    showToast("Les extraits musicaux sont coupés dans les réglages audio.");
    return;
  }

  const { player, activeCard, currentUrl } = state.audio;

  if (activeCard === cardEl && currentUrl === previewUrl) {
    if (player.paused) {
      player.volume = state.sound.musicVolume;
      player.play().catch(() => showToast("Impossible de lire cet extrait."));
      updateCardPlayState(cardEl, true);
      dom.vinylBadge.classList.add("is-spinning");
    } else {
      player.pause();
      updateCardPlayState(cardEl, false);
      dom.vinylBadge.classList.remove("is-spinning");
    }
    return;
  }

  stopAllAudio();

  state.audio.activeCard = cardEl;
  state.audio.currentUrl = previewUrl;
  player.src = previewUrl;
  player.volume = state.sound.musicVolume;
  player.currentTime = 0;

  player
    .play()
    .then(() => {
      updateCardPlayState(cardEl, true);
      dom.vinylBadge.classList.add("is-spinning");
    })
    .catch(() => {
      stopAllAudio();
      showToast("Extrait audio indisponible sur cet appareil.");
    });
}

function bindGlobalAudioEvents() {
  const player = state.audio.player;

  player.addEventListener("timeupdate", () => {
    const card = state.audio.activeCard;
    if (!card || !isFinite(player.duration) || player.duration <= 0) return;
    const pct = Math.min(100, (player.currentTime / player.duration) * 100);
    const fill = card.querySelector(".audio-bar-fill");
    const timeEl = card.querySelector(".audio-time");
    if (fill) fill.style.width = `${pct}%`;
    if (timeEl) timeEl.textContent = formatTime(player.duration - player.currentTime);
  });

  player.addEventListener("ended", () => {
    stopAllAudio();
  });

  player.addEventListener("error", () => {
    if (state.audio.activeCard) {
      stopAllAudio();
    }
  });
}

// --- Détection intelligente du mot dans les paroles françaises ---

const ER_VERB_ENDINGS = /^(e|es|ent|ons|eons|ez|ais|ait|ions|iez|aient|erai|eras|era|erons|erez|eront|erais|erait|erions|eriez|eraient|ant|ee|ees|er)$/;

const IRREGULAR_WORD_FAMILIES = {
  vivre: ["vivre", "vis", "vit", "vivons", "vivez", "vivent", "vivais", "vivait", "vivaient", "vivrai", "vivra", "vecu", "vivant"],
  mourir: ["mourir", "meurs", "meurt", "mourons", "mourez", "meurent", "mourais", "mourait", "mourrai", "mourra", "mort", "morte", "morts", "mortes", "mourant"],
  partir: ["partir", "pars", "part", "partons", "partez", "partent", "partais", "partait", "partirai", "partira", "parti", "partie", "partis", "partant"],
  savoir: ["savoir", "sais", "sait", "savons", "savez", "savent", "savais", "savait", "saurai", "saura", "sachant"],
  voir: ["voir", "vois", "voit", "voyons", "voyez", "voient", "voyais", "voyait", "verrai", "verras", "verra", "vu", "vue", "vus"],
  prendre: ["prendre", "prends", "prend", "prenons", "prenez", "prennent", "prenais", "prenait", "prendrai", "prendra", "pris", "prise", "prenant"],
  courir: ["courir", "cours", "court", "courons", "courez", "courent", "courais", "courait", "courrai", "courra", "couru", "courant"],
  attendre: ["attendre", "attends", "attend", "attendons", "attendez", "attendent", "attendais", "attendait", "attendrai", "attendra", "attendu", "attendant"],
  perdre: ["perdre", "perds", "perd", "perdons", "perdez", "perdent", "perdais", "perdit", "perdrai", "perdra", "perdu", "perdue", "perdus", "perdant"],
  yeux: ["yeux", "oeil"],
  cheval: ["cheval", "chevaux"],
  ciel: ["ciel", "cieux"],
  beau: ["beau", "belle", "beaux", "belles"],
  belle: ["belle", "belles", "beau", "beaux"],
  fou: ["fou", "folle", "fous", "folles"],
  vieux: ["vieux", "vieille", "vieilles", "vieil"],
  nouveau: ["nouveau", "nouvelle", "nouveaux", "nouvelles"],
  liberte: ["liberte", "liberee", "liberees", "libere", "libre", "libres"]
};

function matchesFrenchWord(normToken, normTarget) {
  if (!normToken || !normTarget) return false;
  if (normToken === normTarget) return true;

  // Pluriels et féminins standards
  if (
    normToken === normTarget + "s" ||
    normToken === normTarget + "x" ||
    normToken === normTarget + "e" ||
    normToken === normTarget + "es"
  ) {
    return true;
  }

  // Familles irrégulières connues
  if (IRREGULAR_WORD_FAMILIES[normTarget] && IRREGULAR_WORD_FAMILIES[normTarget].includes(normToken)) {
    return true;
  }

  // Verbes réguliers du 1er groupe (-er)
  if (normTarget.length >= 5 && normTarget.endsWith("er")) {
    const stem = normTarget.slice(0, -2);
    if (normToken.startsWith(stem)) {
      const rest = normToken.slice(stem.length);
      if (ER_VERB_ENDINGS.test(rest)) return true;
    }
  }

  return false;
}

function findMatchingLyricSnippet(plainLyrics, targetWord) {
  if (!plainLyrics || !targetWord) {
    return { matched: false, lineHtml: "" };
  }

  const normTarget = normalizeStr(targetWord).trim();
  const lines = plainLyrics
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  for (const line of lines) {
    const parts = line.split(/([A-Za-zÀ-ÖØ-öø-ÿœŒæÆ]+)/);
    let foundInLine = false;
    const htmlParts = parts.map((part) => {
      if (/^[A-Za-zÀ-ÖØ-öø-ÿœŒæÆ]+$/.test(part)) {
        const normPart = normalizeStr(part);
        if (matchesFrenchWord(normPart, normTarget)) {
          foundInLine = true;
          return `<span class="word-highlight">${escapeHtml(part)}</span>`;
        }
      }
      return escapeHtml(part);
    });

    if (foundInLine) {
      return { matched: true, lineHtml: `« ${htmlParts.join("")} »` };
    }
  }

  return { matched: false, lineHtml: "" };
}

// --- APIs gratuites : iTunes (pochettes + extraits 30s) & LRCLIB (paroles) ---

async function fetchItunesTrack(title, artist) {
  const key = `${normalizeStr(title)}||${normalizeStr(artist)}`;
  if (itunesCache.has(key)) return itunesCache.get(key);

  const query = encodeURIComponent(`${title} ${artist || ""}`.trim());
  const url = `https://itunes.apple.com/search?term=${query}&media=music&entity=song&country=FR&limit=6`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("iTunes HTTP error");
    const data = await res.json();
    const results = Array.isArray(data.results) ? data.results : [];

    const normTitle = normalizeStr(title);
    const normArtist = normalizeStr(artist);

    const best =
      results.find(
        (r) =>
          r.previewUrl &&
          normalizeStr(r.trackName).includes(normTitle) &&
          (!normArtist || normalizeStr(r.artistName).includes(normArtist.split(" ")[0]))
      ) ||
      results.find((r) => r.previewUrl) ||
      results[0] ||
      null;

    const formatted = best
      ? {
          artwork: best.artworkUrl100 ? best.artworkUrl100.replace("100x100bb", "240x240bb") : null,
          previewUrl: best.previewUrl || null,
          trackName: best.trackName || title,
          artistName: best.artistName || artist
        }
      : null;

    itunesCache.set(key, formatted);
    return formatted;
  } catch (e) {
    itunesCache.set(key, null);
    return null;
  }
}

async function searchLrclib(query) {
  const key = normalizeStr(query).trim();
  if (!key) return [];
  if (lrclibCache.has(key)) return lrclibCache.get(key);

  try {
    const url = `https://lrclib.net/api/search?q=${encodeURIComponent(query.trim())}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("LRCLIB HTTP error");
    const data = await res.json();
    const list = Array.isArray(data) ? data.filter((item) => item && (item.plainLyrics || item.syncedLyrics)) : [];
    lrclibCache.set(key, list);
    return list;
  } catch (e) {
    return [];
  }
}

function getCleanLyricsFromLrcItem(item) {
  if (!item) return "";
  if (item.plainLyrics) return item.plainLyrics;
  if (item.syncedLyrics) {
    return item.syncedLyrics.replace(/\[\d+:\d+(?:\.\d+)?\]\s*/g, "");
  }
  return "";
}

async function fetchLyricQuoteForSong(title, artist, targetWord) {
  const candidates = await searchLrclib(`${title} ${artist}`);
  for (const item of candidates.slice(0, 4)) {
    const lyrics = getCleanLyricsFromLrcItem(item);
    const check = findMatchingLyricSnippet(lyrics, targetWord);
    if (check.matched) {
      return check.lineHtml;
    }
  }
  return null;
}
// =========================================================
// MÉLOMOT — Logique du jeu (Bloc 2/2)
// Pioche, Animations, Cartes réponses, Vérificateur & Micro
// =========================================================

const DIFF_LABELS = {
  facile: "Facile",
  moyen: "Moyen",
  difficile: "Difficile"
};

let isTransitioningWord = false;
let currentWordScored = false;

// --- Gestion de la pioche & des scores ---

function getAllWords() {
  return typeof MOTS_DATA !== "undefined" && Array.isArray(MOTS_DATA) ? MOTS_DATA : [];
}

function getPoolByDiff(diff) {
  const all = getAllWords();
  if (diff === "all") return all;
  return all.filter((item) => item.diff === diff);
}

function getRemainingByDiff(diff) {
  return getPoolByDiff(diff).filter((item) => !state.drawnWords.has(item.word));
}

function bumpStat(el) {
  el.classList.remove("pop-bump");
  void el.offsetWidth;
  el.classList.add("pop-bump");
}

function updateStatsUI(bumpFound = false, bumpStreak = false) {
  dom.foundCount.textContent = String(state.foundCount);
  dom.streakCount.textContent = String(state.streakCount);
  if (bumpFound) bumpStat(dom.foundCount);
  if (bumpStreak) bumpStat(dom.streakCount);
}

function updateProgressUI() {
  const pool = getPoolByDiff(state.currentDiff);
  const total = pool.length;
  const drawnCount = pool.filter((item) => state.drawnWords.has(item.word)).length;
  const pct = total > 0 ? Math.round((drawnCount / total) * 100) : 0;

  dom.progressFill.style.width = `${pct}%`;
  if (total === 0) {
    dom.progressText.textContent = "Aucun mot dans cette catégorie pour le moment";
  } else {
    dom.progressText.textContent = `${drawnCount} / ${total} mots tirés`;
  }
}

function setDifficulty(diff, shouldDrawIfStarted = true) {
  const pool = getPoolByDiff(diff);
  if (diff !== "all" && pool.length === 0) {
    showToast(`Aucun mot « ${DIFF_LABELS[diff] || diff} » dans mots.js pour l'instant.`);
    return;
  }

  state.currentDiff = diff;
  const idx = dom.diffBtns.findIndex((btn) => btn.dataset.diff === diff);
  dom.diffBtns.forEach((btn, i) => {
    const active = i === idx;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  if (idx >= 0) {
    dom.diffIndicator.style.transform = `translateX(${idx * 100}%)`;
  }

  updateProgressUI();

  if (shouldDrawIfStarted && state.hasStarted) {
    if (!state.currentWordObj || (diff !== "all" && state.currentWordObj.diff !== diff)) {
      drawNextWord();
    }
  }
}

function resetDeckForCurrentDiff() {
  const pool = getPoolByDiff(state.currentDiff);
  pool.forEach((item) => state.drawnWords.delete(item.word));
  saveDrawnState();
  updateProgressUI();
  closeDeckModal();
  showToast("Pioche remélangée !");
  if (state.hasStarted) {
    drawNextWord();
  }
}

// --- Modale de fin de pioche ---

function openDeckModal() {
  const label = state.currentDiff === "all" ? "toutes les catégories" : `la catégorie « ${DIFF_LABELS[state.currentDiff]} »`;
  dom.modalTitle.textContent = "Pioche terminée !";
  dom.modalSummaryText.textContent = `Vous avez fait le tour de tous les mots de ${label}.`;
  dom.modalAllDiffBtn.hidden = state.currentDiff === "all";
  dom.deckCompleteModal.hidden = false;
}

function closeDeckModal() {
  dom.deckCompleteModal.hidden = true;
}

// --- Tirage & animation de la carte mot ---

function closeVerifierPanel() {
  dom.verifierToggleBtn.setAttribute("aria-expanded", "false");
  dom.verifierBody.classList.remove("is-open");
}

function resetVerifierUI() {
  state.verifyToken++;
  stopDictation();
  dom.verifierInput.value = "";
  dom.clearVerifierBtn.hidden = true;
  dom.verifierResult.innerHTML = "";
  dom.micStatus.hidden = true;
  dom.micStatus.textContent = "";
}

function drawNextWord() {
  if (isTransitioningWord) return;

  const remaining = getRemainingByDiff(state.currentDiff);
  if (remaining.length === 0) {
    const pool = getPoolByDiff(state.currentDiff);
    if (pool.length === 0) {
      showToast("Aucun mot disponible dans cette catégorie.");
      return;
    }
    openDeckModal();
    return;
  }

  isTransitioningWord = true;
  currentWordScored = false;
  state.revealToken++;
  stopAllAudio();
  resetVerifierUI();
  closeVerifierPanel();

  dom.answersSection.hidden = true;
  dom.answersList.innerHTML = "";
  state.answersRevealed = false;

  const nextObj = remaining[Math.floor(Math.random() * remaining.length)];
  state.drawnWords.add(nextObj.word);
  saveDrawnState();

  const applyNewWord = () => {
    state.hasStarted = true;
    state.currentWordObj = nextObj;

    applyRandomPastelTheme();
    updateProgressUI();

    dom.startActions.hidden = true;
    dom.playActions.hidden = false;
    dom.verifierSection.hidden = false;
    dom.speakWordBtn.hidden = false;

    dom.wordDifficultyBadge.textContent = DIFF_LABELS[nextObj.diff] || "Mot";
    dom.wordDifficultyBadge.className = `diff-badge badge-${nextObj.diff}`;
    dom.wordPrompt.textContent = "Trouve une chanson dont les paroles contiennent :";
    dom.currentWord.textContent = nextObj.word;
    dom.wordHint.textContent = "Chantonne un passage à voix haute, ou vérifie un titre ci-dessous.";

    dom.btnFound.disabled = false;
    dom.btnReveal.disabled = false;
    dom.btnFoundAnyway.disabled = false;

    dom.wordCard.classList.remove("is-exiting", "is-entering", "is-celebrating");
    void dom.wordCard.offsetWidth;
    dom.wordCard.classList.add("is-entering");

    dom.currentWord.classList.remove("word-pop");
    void dom.currentWord.offsetWidth;
    dom.currentWord.classList.add("word-pop");

    speakWord(nextObj.word);

    setTimeout(() => {
      dom.wordCard.classList.remove("is-entering");
      isTransitioningWord = false;
    }, 520);
  };

  if (state.hasStarted) {
    dom.wordCard.classList.add("is-exiting");
    setTimeout(applyNewWord, 200);
  } else {
    applyNewWord();
  }
}

// --- Actions de validation ("J'ai trouvé" / "Voir les réponses") ---

function handleWordFound(fromAnswers = false) {
  if (!state.currentWordObj || isTransitioningWord || currentWordScored) return;

  currentWordScored = true;
  state.foundCount += 1;
  state.streakCount += 1;
  updateStatsUI(true, true);

  dom.btnFound.disabled = true;
  dom.btnFoundAnyway.disabled = true;

  dom.wordCard.classList.remove("is-celebrating");
  void dom.wordCard.offsetWidth;
  dom.wordCard.classList.add("is-celebrating");
  launchCelebrationFx();

  if (state.streakCount > 0 && state.streakCount % 5 === 0) {
    showToast(`Incroyable ! Série de ${state.streakCount} chansons !`);
  } else if (fromAnswers) {
    showToast("Point validé !");
  }

  setTimeout(() => {
    drawNextWord();
  }, 460);
}

function handleRevealAnswers() {
  if (!state.currentWordObj || state.answersRevealed) return;

  state.answersRevealed = true;
  state.streakCount = 0;
  updateStatsUI(false, false);

  dom.btnReveal.disabled = true;
  dom.answersWordLabel.textContent = state.currentWordObj.word;
  dom.answersList.innerHTML = "";
  dom.answersSection.hidden = false;

  const token = ++state.revealToken;
  const targetWord = state.currentWordObj.word;

  state.currentWordObj.songs.forEach((song, index) => {
    const card = buildAnswerCard(song, index, targetWord);
    dom.answersList.appendChild(card);
    hydrateTrackCard(card, song.title, song.artist, targetWord, token);
  });

  setTimeout(() => {
    dom.answersSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 100);
}

// --- Construction & enrichissement des cartes chanson ---

function getExternalLinksHtml(title, artist) {
  const q = encodeURIComponent(`${title} ${artist || ""}`.trim());
  return `
    <div class="track-links">
      <a class="ext-link" href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener noreferrer">YouTube</a>
      <a class="ext-link" href="https://open.spotify.com/search/${q}" target="_blank" rel="noopener noreferrer">Spotify</a>
    </div>
  `;
}

function buildAnswerCard(song, index, targetWord) {
  const card = document.createElement("article");
  card.className = "answer-card";
  card.style.setProperty("--stagger", String(index));

  const subMeta = song.tag ? `${escapeHtml(song.artist)} • ${escapeHtml(song.tag)}` : escapeHtml(song.artist);

  card.innerHTML = `
    <div class="answer-top">
      <div class="track-art-wrap">
        <div class="track-art-placeholder">${getMusicNoteSvg()}</div>
        <button type="button" class="play-overlay-btn" aria-label="Lire l'extrait" hidden>${getPlayIconSvg()}</button>
      </div>
      <div class="track-info">
        <div class="track-title">${escapeHtml(song.title)}</div>
        <div class="track-artist">${subMeta}</div>
      </div>
      <div class="eq-bars" aria-hidden="true"><span></span><span></span><span></span></div>
    </div>
    <div class="lyric-quote">Recherche du passage contenant « <span class="word-highlight">${escapeHtml(targetWord)}</span> »...</div>
    <div class="audio-controls-row">
      <div class="audio-player-main">
        <button type="button" class="play-pill-btn" disabled>${getPlayIconSvg()}<span>Chargement...</span></button>
        <div class="audio-progress-wrap" hidden>
          <div class="audio-bar" title="Avancer ou reculer"><div class="audio-bar-fill"></div></div>
          <span class="audio-time">0:30</span>
        </div>
        <span class="audio-unavailable" hidden>Extrait audio indisponible</span>
      </div>
      ${getExternalLinksHtml(song.title, song.artist)}
    </div>
  `;

  return card;
}

function wireAudioToCard(card, itunesTrack) {
  const artWrap = card.querySelector(".track-art-wrap");
  const overlayBtn = card.querySelector(".play-overlay-btn");
  const pillBtn = card.querySelector(".play-pill-btn");
  const progressWrap = card.querySelector(".audio-progress-wrap");
  const audioBar = card.querySelector(".audio-bar");
  const unavailableEl = card.querySelector(".audio-unavailable");

  if (itunesTrack && itunesTrack.artwork && artWrap) {
    const img = document.createElement("img");
    img.className = "track-art";
    img.src = itunesTrack.artwork;
    img.alt = `Pochette de ${itunesTrack.trackName}`;
    img.loading = "lazy";
    const placeholder = artWrap.querySelector(".track-art-placeholder");
    if (placeholder) placeholder.replaceWith(img);
  }

  if (itunesTrack && itunesTrack.previewUrl) {
    const previewUrl = itunesTrack.previewUrl;
    if (overlayBtn) {
      overlayBtn.hidden = false;
      overlayBtn.addEventListener("click", () => toggleTrackAudio(previewUrl, card));
    }
    if (pillBtn) {
      pillBtn.disabled = false;
      pillBtn.innerHTML = `${getPlayIconSvg()}<span>Extrait</span>`;
      pillBtn.addEventListener("click", () => toggleTrackAudio(previewUrl, card));
    }
    if (progressWrap) progressWrap.hidden = false;
    if (unavailableEl) unavailableEl.hidden = true;

    if (audioBar) {
      audioBar.addEventListener("click", (e) => {
        if (state.audio.activeCard !== card || !isFinite(state.audio.player.duration)) return;
        const rect = audioBar.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        state.audio.player.currentTime = ratio * state.audio.player.duration;
      });
    }
  } else {
    if (overlayBtn) overlayBtn.hidden = true;
    if (pillBtn) pillBtn.hidden = true;
    if (progressWrap) progressWrap.hidden = true;
    if (unavailableEl) unavailableEl.hidden = false;
  }
}

async function hydrateTrackCard(card, title, artist, targetWord, token) {
  const [itunesTrack, lyricHtml] = await Promise.all([
    fetchItunesTrack(title, artist),
    fetchLyricQuoteForSong(title, artist, targetWord)
  ]);

  if (token !== state.revealToken) return;

  wireAudioToCard(card, itunesTrack);

  const quoteEl = card.querySelector(".lyric-quote");
  if (quoteEl) {
    if (lyricHtml) {
      quoteEl.innerHTML = lyricHtml;
    } else {
      quoteEl.innerHTML = `Parole à retrouver en écoutant le morceau (mot : <span class="word-highlight">${escapeHtml(targetWord)}</span>).`;
    }
  }
}

// --- Vérificateur intelligent (LRCLIB + iTunes + Dictée vocale) ---

async function handleVerifySubmit(e) {
  if (e) e.preventDefault();
  if (!state.currentWordObj) return;

  const query = dom.verifierInput.value.trim();
  if (!query) {
    showToast("Entre un titre, un artiste ou un bout de paroles.");
    dom.verifierInput.focus();
    return;
  }

  stopDictation();
  const token = ++state.verifyToken;
  const targetWord = state.currentWordObj.word;

  dom.verifySubmitBtn.disabled = true;
  dom.verifierResult.innerHTML = `
    <div class="verifier-loading">
      <div class="spinner-dots" aria-hidden="true"><span></span><span></span><span></span></div>
      <span>Recherche des paroles et vérification...</span>
    </div>
  `;

  try {
    const results = await searchLrclib(query);
    if (token !== state.verifyToken) return;

    if (results.length === 0) {
      const itunesFallback = await fetchItunesTrack(query, "");
      if (token !== state.verifyToken) return;
      renderVerifierNotFound(query, targetWord, itunesFallback);
      return;
    }

    const candidates = results.slice(0, 6).map((item) => {
      const lyrics = getCleanLyricsFromLrcItem(item);
      const check = findMatchingLyricSnippet(lyrics, targetWord);
      return {
        trackName: item.trackName || item.name || query,
        artistName: item.artistName || "Artiste inconnu",
        matched: check.matched,
        lineHtml: check.lineHtml
      };
    });

    // Priorise la première chanson dont les paroles contiennent bien le mot
    const firstMatchIdx = candidates.findIndex((c) => c.matched);
    const selectedIdx = firstMatchIdx >= 0 ? firstMatchIdx : 0;

    await renderVerifierCandidate(candidates, selectedIdx, targetWord, token);
  } catch (err) {
    if (token !== state.verifyToken) return;
    renderVerifierNotFound(query, targetWord, null);
  } finally {
    if (token === state.verifyToken) {
      dom.verifySubmitBtn.disabled = false;
    }
  }
}

async function renderVerifierCandidate(candidates, selectedIdx, targetWord, token) {
  const chosen = candidates[selectedIdx];
  const statusClass = chosen.matched ? "status-match" : "status-nomatch";
  const badgeText = chosen.matched
    ? `Validé ! Le mot « ${targetWord} » est dans les paroles`
    : `Mot « ${targetWord} » non détecté dans ces paroles`;

  const card = document.createElement("div");
  card.className = `verifier-card ${statusClass}`;

  const quoteBlock = chosen.matched
    ? `<div class="lyric-quote">${chosen.lineHtml}</div>`
    : `<p class="verifier-msg">Le mot exact n'a pas été trouvé dans le texte récupéré. Tu peux tester un autre résultat ci-dessous ou valider si tu sais qu'il y figure.</p>`;

  const otherButtonsHtml =
    candidates.length > 1
      ? `<div class="candidate-list">${candidates
          .map((c, i) =>
            i === selectedIdx
              ? ""
              : `<button type="button" class="candidate-btn" data-idx="${i}">${escapeHtml(c.trackName)} — ${escapeHtml(c.artistName)}</button>`
          )
          .join("")}</div>`
      : "";

  const actionButtonsHtml = chosen.matched
    ? `<button type="button" class="btn btn-success btn-compact" data-action="validate">Valider et mot suivant</button>`
    : `<button type="button" class="btn btn-soft btn-compact" data-action="validate">Je sais qu'il y est — Valider (+1)</button>`;

  card.innerHTML = `
    <span class="verifier-badge">${escapeHtml(badgeText)}</span>
    <div class="answer-top">
      <div class="track-art-wrap">
        <div class="track-art-placeholder">${getMusicNoteSvg()}</div>
        <button type="button" class="play-overlay-btn" aria-label="Lire l'extrait" hidden>${getPlayIconSvg()}</button>
      </div>
      <div class="track-info">
        <div class="track-title">${escapeHtml(chosen.trackName)}</div>
        <div class="track-artist">${escapeHtml(chosen.artistName)}</div>
      </div>
      <div class="eq-bars" aria-hidden="true"><span></span><span></span><span></span></div>
    </div>
    ${quoteBlock}
    <div class="audio-controls-row">
      <div class="audio-player-main">
        <button type="button" class="play-pill-btn" disabled>${getPlayIconSvg()}<span>Chargement...</span></button>
        <div class="audio-progress-wrap" hidden>
          <div class="audio-bar"><div class="audio-bar-fill"></div></div>
          <span class="audio-time">0:30</span>
        </div>
        <span class="audio-unavailable" hidden>Extrait audio indisponible</span>
      </div>
      ${getExternalLinksHtml(chosen.trackName, chosen.artistName)}
    </div>
    <div class="verifier-actions">${actionButtonsHtml}</div>
    ${otherButtonsHtml}
  `;

  dom.verifierResult.innerHTML = "";
  dom.verifierResult.appendChild(card);

  const validateBtn = card.querySelector('[data-action="validate"]');
  if (validateBtn) {
    validateBtn.addEventListener("click", () => handleWordFound(false));
  }

  card.querySelectorAll(".candidate-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextIdx = Number(btn.dataset.idx);
      stopAllAudio();
      renderVerifierCandidate(candidates, nextIdx, targetWord, token);
    });
  });

  const itunesTrack = await fetchItunesTrack(chosen.trackName, chosen.artistName);
  if (token !== state.verifyToken) return;
  wireAudioToCard(card, itunesTrack);
}

function renderVerifierNotFound(query, targetWord, itunesTrack) {
  const card = document.createElement("div");
  card.className = "verifier-card status-notfound";

  const title = itunesTrack ? itunesTrack.trackName : query;
  const artist = itunesTrack ? itunesTrack.artistName : "Chanson non répertoriée dans LRCLIB";

  card.innerHTML = `
    <span class="verifier-badge">Paroles introuvables dans la base</span>
    ${
      itunesTrack
        ? `
      <div class="answer-top">
        <div class="track-art-wrap">
          <div class="track-art-placeholder">${getMusicNoteSvg()}</div>
          <button type="button" class="play-overlay-btn" aria-label="Lire l'extrait" hidden>${getPlayIconSvg()}</button>
        </div>
        <div class="track-info">
          <div class="track-title">${escapeHtml(title)}</div>
          <div class="track-artist">${escapeHtml(artist)}</div>
        </div>
        <div class="eq-bars" aria-hidden="true"><span></span><span></span><span></span></div>
      </div>
      <div class="audio-controls-row">
        <div class="audio-player-main">
          <button type="button" class="play-pill-btn" disabled>${getPlayIconSvg()}<span>Chargement...</span></button>
          <div class="audio-progress-wrap" hidden>
            <div class="audio-bar"><div class="audio-bar-fill"></div></div>
            <span class="audio-time">0:30</span>
          </div>
          <span class="audio-unavailable" hidden>Extrait audio indisponible</span>
        </div>
        ${getExternalLinksHtml(title, itunesTrack.artistName)}
      </div>
    `
        : ""
    }
    <p class="verifier-msg">Impossible de récupérer les paroles pour « ${escapeHtml(query)} ». Si tu es sûre que le mot « ${escapeHtml(targetWord)} » est dedans, tu peux valider sans souci !</p>
    <div class="verifier-actions">
      <button type="button" class="btn btn-soft btn-compact" data-action="validate">Valider quand même (+1)</button>
    </div>
  `;

  dom.verifierResult.innerHTML = "";
  dom.verifierResult.appendChild(card);

  if (itunesTrack) {
    wireAudioToCard(card, itunesTrack);
  }

  const validateBtn = card.querySelector('[data-action="validate"]');
  if (validateBtn) {
    validateBtn.addEventListener("click", () => handleWordFound(false));
  }
}

// --- Dictée vocale (Web Speech API) ---

function setupDictation() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    state.recognition = null;
    return;
  }

  const rec = new SpeechRecognition();
  rec.lang = "fr-FR";
  rec.interimResults = true;
  rec.maxAlternatives = 1;

  rec.onstart = () => {
    state.isListening = true;
    dom.micBtn.classList.add("is-listening");
    dom.micStatus.hidden = false;
    dom.micStatus.textContent = "Écoute en cours... Dicte le titre, l'artiste ou un bout de paroles.";
  };

  rec.onresult = (event) => {
    let transcript = "";
    let isFinal = false;
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
      if (event.results[i].isFinal) isFinal = true;
    }

    dom.verifierInput.value = transcript.trim();
    dom.clearVerifierBtn.hidden = dom.verifierInput.value.length === 0;

    if (isFinal && dom.verifierInput.value.length > 0) {
      dom.micStatus.textContent = "Recherche lancée...";
      handleVerifySubmit();
    }
  };

  rec.onerror = (event) => {
    stopDictation();
    if (event.error === "not-allowed") {
      showToast("Autorise l'accès au micro dans ton navigateur pour dicter.");
    } else if (event.error !== "no-speech" && event.error !== "aborted") {
      showToast("Dictée vocale interrompue, réessaie.");
    }
  };

  rec.onend = () => {
    state.isListening = false;
    dom.micBtn.classList.remove("is-listening");
    if (dom.micStatus.textContent.startsWith("Écoute")) {
      dom.micStatus.hidden = true;
    }
  };

  state.recognition = rec;
}

function stopDictation() {
  if (state.recognition && state.isListening) {
    try {
      state.recognition.stop();
    } catch (e) {
      // Ignore
    }
  }
  state.isListening = false;
  dom.micBtn.classList.remove("is-listening");
}

function toggleDictation() {
  if (!state.recognition) {
    showToast("La dictée vocale n'est pas disponible sur ce navigateur (essaie Chrome ou Safari).");
    return;
  }

  if (state.isListening) {
    stopDictation();
    dom.micStatus.hidden = true;
    return;
  }

  stopAllAudio();
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();

  try {
    state.recognition.start();
  } catch (e) {
    stopDictation();
  }
}

// --- Panneau audio & événements globaux ---

function toggleSoundPanel(forceState) {
  const shouldOpen = typeof forceState === "boolean" ? forceState : dom.soundPanel.hidden;
  dom.soundPanel.hidden = !shouldOpen;
  dom.soundToggleBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function bindEvents() {
  window.addEventListener("resize", resizeFxCanvas);

  // Panneau audio
  dom.soundToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSoundPanel();
  });

  dom.closeSoundPanelBtn.addEventListener("click", () => toggleSoundPanel(false));

  document.addEventListener("click", (e) => {
    if (!dom.soundPanel.hidden && !dom.soundPanel.contains(e.target) && !dom.soundToggleBtn.contains(e.target)) {
      toggleSoundPanel(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!dom.soundPanel.hidden) toggleSoundPanel(false);
      if (!dom.deckCompleteModal.hidden) closeDeckModal();
    }
  });

  dom.voiceEnabledToggle.addEventListener("change", () => {
    state.sound.voiceEnabled = dom.voiceEnabledToggle.checked;
    if (!state.sound.voiceEnabled && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    syncSoundUI();
    saveSoundState();
  });

  dom.voiceVolumeSlider.addEventListener("input", () => {
    state.sound.voiceVolume = parseFloat(dom.voiceVolumeSlider.value);
    syncSoundUI();
    saveSoundState();
  });

  dom.musicEnabledToggle.addEventListener("change", () => {
    state.sound.musicEnabled = dom.musicEnabledToggle.checked;
    syncSoundUI();
    saveSoundState();
  });

  dom.musicVolumeSlider.addEventListener("input", () => {
    state.sound.musicVolume = parseFloat(dom.musicVolumeSlider.value);
    syncSoundUI();
    saveSoundState();
  });

  // Difficulté & pioche
  dom.diffBtns.forEach((btn) => {
    btn.addEventListener("click", () => setDifficulty(btn.dataset.diff, true));
  });

  dom.resetDeckBtn.addEventListener("click", resetDeckForCurrentDiff);

  // Carte principale
  dom.startDrawBtn.addEventListener("click", drawNextWord);
  dom.speakWordBtn.addEventListener("click", () => {
    if (state.currentWordObj) speakWord(state.currentWordObj.word, true);
  });
  dom.btnFound.addEventListener("click", () => handleWordFound(false));
  dom.btnReveal.addEventListener("click", handleRevealAnswers);

  // Réponses révélées
  dom.btnFoundAnyway.addEventListener("click", () => handleWordFound(true));
  dom.btnNextWord.addEventListener("click", drawNextWord);

  // Vérificateur
  dom.verifierToggleBtn.addEventListener("click", () => {
    const isOpen = dom.verifierBody.classList.toggle("is-open");
    dom.verifierToggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (isOpen) {
      setTimeout(() => dom.verifierInput.focus(), 220);
    } else {
      stopDictation();
    }
  });

  dom.verifierForm.addEventListener("submit", handleVerifySubmit);

  dom.verifierInput.addEventListener("input", () => {
    dom.clearVerifierBtn.hidden = dom.verifierInput.value.length === 0;
  });

  dom.clearVerifierBtn.addEventListener("click", () => {
    dom.verifierInput.value = "";
    dom.clearVerifierBtn.hidden = true;
    dom.verifierResult.innerHTML = "";
    dom.micStatus.hidden = true;
    dom.verifierInput.focus();
  });

  dom.micBtn.addEventListener("click", toggleDictation);

  // Modale fin de pioche
  dom.modalResetBtn.addEventListener("click", resetDeckForCurrentDiff);
  dom.modalAllDiffBtn.addEventListener("click", () => {
    closeDeckModal();
    setDifficulty("all", true);
  });
  dom.deckCompleteModal.addEventListener("click", (e) => {
    if (e.target === dom.deckCompleteModal) closeDeckModal();
  });
}

// --- Démarrage de l'application ---

function init() {
  loadSavedState();
  syncSoundUI();
  bindGlobalAudioEvents();
  setupDictation();
  bindEvents();
  resizeFxCanvas();
  setDifficulty("all", false);
  updateStatsUI();

  // Précharge la liste des voix sur les navigateurs qui la chargent en asynchrone
  if ("speechSynthesis" in window && typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }
}

document.addEventListener("DOMContentLoaded", init);