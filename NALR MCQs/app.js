/**
 * =============================================================================
 * 🤖 NALR ST-1 APPLICATION CORE CONTROLLER (Course Code: 25UNI0110)
 * =============================================================================
 * This controller orchestrates the entire single-page revision platform:
 *  - 14 Syllabus Modules Navigation (Sidebar Accordion)
 *  - Problem-solving subtabs per module (Type 1, Type 2, etc.)
 *  - Interactive Practice Mode with instant answer validation & visual solutions
 *  - Multi-Topic Continuous Examination Engine with dynamic module selector
 *  - Performance analytics, detailed review screens, sound effects, and confetti
 * 
 * 💡 AI AGENT INSTRUCTIONS FOR ADDING NEW QUESTION MODULES:
 * -----------------------------------------------------------------------------
 * 1. When adding questions for a pending module (e.g. mod10: Ages, mod12: Allegation, mod13: Odd Man Out):
 *    - Define the subtabs ('types' array) in syllabus.js.
 *    - Append the formatted questions to QUIZ_QUESTIONS in quiz_questions.js.
 *    - In this file (app.js), ADD the new module ID to `selectedExamModuleIds` below
 *      so that the new module is checked by default in the exam topic selection modal.
 * 2. Questions are dynamically filtered by:
 *      q.module_id === activeModuleId && q.type_id === activeTypeId
 * 3. All state is automatically persisted in browser localStorage under `STORAGE_KEY`.
 * 4. Run `python verify_dataset.py` in terminal after adding questions to ensure 0 errors.
 * =============================================================================
 */

// =============================================================================
// SECTION 1: GLOBAL STATE, STORAGE CONSTANTS & APPLICATION CONFIG
// =============================================================================

const STORAGE_KEY = "NALR_MULTI_TERM_APTITUDE_V8";

// Active examination term ("st1" | "st2" | "endterm")
let currentTermId = "st1";

// Active navigation pointers within the current term
let activeModuleId = "mod1"; // Active module in sidebar
let activeTypeId = "type_1";  // Active problem type subtab within current module
let isExamMode = false;       // Boolean: false = Practice Mode, true = Continuous Exam Mode

// Remember user's last visited module & type per term so switching terms preserves exact study position
let lastActiveModulePerTerm = {
  st1: "mod1",
  st2: "st2_mod1",
  endterm: "end_mod1"
};
let lastActiveTypePerTerm = {
  st1: "type_1",
  st2: "type_1",
  endterm: "type_1"
};

// User assessment and session data
let userPracticeAnswers = {}; // Map of question ID -> selected option in Practice Mode
let userExamAnswers = {};     // Map of question ID -> selected option in Exam Mode
let userReviewFlags = new Set(); // Set of question IDs bookmarked/flagged for review

// Display and filter preferences
let isDarkMode = false;
let activeDifficultyFilter = "all"; // "all" | "Easy" | "Medium" | "Hard"
let showFlaggedOnly = false;         // Boolean: if true, show only bookmarked questions

/**
 * Default active modules selected for Continuous Exam Mode.
 * ⚠️ NOTE FOR AI AGENTS: When you activate a pending module in ST-1 (mod10, mod12, mod13),
 * ST-2 (st2_mod1..st2_mod11), or End Term (end_mod1..end_mod14),
 * append its ID to this array so it is enabled in exam mode by default!
 */
let selectedExamModuleIds = [
  "mod1",  // Blood Relation (ST-1)
  "mod2",  // Coded Relation (ST-1)
  "mod3",  // Analogy (ST-1)
  "mod4",  // Direction (ST-1)
  "mod5",  // Number System (ST-1)
  "mod6",  // H.C.F. & L.C.M. (ST-1)
  "mod7",  // Average (ST-1)
  "mod8",  // Remainder Theorem (ST-1)
  "mod9",  // Ratio & Proportion (ST-1)
  "mod10", // Ages (ST-1)
  "mod11", // Partnership (ST-1)
  "mod13", // Odd Man Out (ST-1)
  "mod14"  // Syllogism (ST-1)
];

// Active pool of questions loaded for the current exam session
let activeExamQuestions = [];

// =============================================================================
// SECTION 2: FORMATTING & SOLUTION RENDERING UTILITIES
// =============================================================================

// Helper: Escape HTML to prevent XSS in dynamic question text
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper: Format Markdown
function formatMarkdown(text) {
  if (!text) return "";
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\n/g, '<br>');
}

// Helper: Format Detailed Structured Solution
function formatDetailedSolution(explanation) {
  if (!explanation) return "";

  const lines = explanation.split("\n").map(l => l.trim()).filter(Boolean);
  let titleHtml = "";
  const steps = [];
  const conclusions = [];

  lines.forEach((line, i) => {
    if (i === 0 && (line.endsWith(":") || /^[\p{Emoji}\u200d]/u.test(line))) {
      titleHtml = line.replace(/:$/, "");
      return;
    }

    const isConclusion = /^(therefore|thus|hence|so|conclusion|final answer|remainder =|the only common|ashok is|consequently)/i.test(line) ||
      (i === lines.length - 1 && !/^(\d+[\.\)]|[-•*])/.test(line));

    if (isConclusion) {
      conclusions.push(line);
      return;
    }

    const stepMatch = line.match(/^(\d+)[\.\)]\s*(.*)/);
    const bulletMatch = line.match(/^[-•*]\s*(.*)/);

    if (stepMatch) {
      steps.push({ num: stepMatch[1], text: stepMatch[2] });
    } else if (bulletMatch) {
      steps.push({ num: "•", text: bulletMatch[1] });
    } else {
      steps.push({ num: (steps.length + 1).toString(), text: line });
    }
  });

  function formatLineContent(text) {
    let html = formatMarkdown(text);
    html = html.replace(/\s*->\s*/g, ' <span class="sol-flow-arrow">➔</span> ');
    return html;
  }

  let html = `<div class="solution-visual-card">`;

  // 1. Solution Method Header
  if (titleHtml) {
    html += `
      <div class="sol-header-banner">
        <span class="sol-method-tag">METHOD / CONCEPT</span>
        <h4 class="sol-title-text">${formatMarkdown(titleHtml)}</h4>
      </div>
    `;
  }

  // 2. Stepper Timeline
  if (steps.length > 0) {
    html += `<div class="sol-steps-container">`;
    steps.forEach((s) => {
      html += `
        <div class="sol-step-row">
          <div class="sol-step-pill">${s.num}</div>
          <div class="sol-step-content">${formatLineContent(s.text)}</div>
        </div>
      `;
    });
    html += `</div>`;
  }

  // 3. Conclusion Box
  if (conclusions.length > 0) {
    html += `
      <div class="sol-conclusion-callout">
        <div class="sol-conclusion-header">
          <span class="sol-target-icon">🎯</span>
          <span class="sol-target-label">Key Deduction / Result</span>
        </div>
        <div class="sol-conclusion-body">
          ${conclusions.map(c => formatLineContent(c)).join("<br>")}
        </div>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

// =============================================================================
// SECTION 3: LOCALSTORAGE STATE PERSISTENCE & RESTORATION
// =============================================================================

// Load Stored State from localStorage with automatic legacy migration
function loadStoredState() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY);

    // 🔄 Automatic Backward-Compatible Migration:
    // If the new multi-term key does not exist yet, check and migrate previous storage keys!
    if (!raw) {
      const legacyKeys = [
        "NALR_ST1_APTITUDE_V7",
        "NALR_ST1_APTITUDE_V6",
        "NALR_ST1_APTITUDE_V5",
        "NALR_APTITUDE_V4",
        "NALR_ST1_APTITUDE",
        "NALR_CODED_RELATION_V5"
      ];
      for (const oldKey of legacyKeys) {
        const oldData = localStorage.getItem(oldKey);
        if (oldData) {
          raw = oldData;
          console.info(`[NALR Migration] Successfully recovered saved progress from legacy key: ${oldKey}`);
          break;
        }
      }
    }

    if (raw) {
      const data = JSON.parse(raw);

      // Restore active term
      if (data.currentTermId && typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA[data.currentTermId]) {
        currentTermId = data.currentTermId;
      } else {
        currentTermId = "st1";
      }

      if (typeof getSyllabusModules === "function") {
        SYLLABUS_MODULES = getSyllabusModules(currentTermId);
      }

      // Restore position memory per term
      if (data.lastActiveModulePerTerm && typeof data.lastActiveModulePerTerm === "object") {
        lastActiveModulePerTerm = Object.assign(lastActiveModulePerTerm, data.lastActiveModulePerTerm);
      }
      if (data.lastActiveTypePerTerm && typeof data.lastActiveTypePerTerm === "object") {
        lastActiveTypePerTerm = Object.assign(lastActiveTypePerTerm, data.lastActiveTypePerTerm);
      }

      activeModuleId = data.activeModuleId || lastActiveModulePerTerm[currentTermId] || (SYLLABUS_MODULES[0] ? SYLLABUS_MODULES[0].id : "mod1");
      if (!SYLLABUS_MODULES.some(m => m.id === activeModuleId)) {
        activeModuleId = SYLLABUS_MODULES[0] ? SYLLABUS_MODULES[0].id : "mod1";
      }

      activeTypeId = data.activeTypeId || lastActiveTypePerTerm[currentTermId] || "type_1";

      // Restore answered questions & bookmarks
      userPracticeAnswers = (data.userPracticeAnswers && typeof data.userPracticeAnswers === "object") ? data.userPracticeAnswers : {};
      userExamAnswers = (data.userExamAnswersMode && typeof data.userExamAnswersMode === "object") ? data.userExamAnswersMode : {};
      userReviewFlags = new Set(Array.isArray(data.userReviewFlags) ? data.userReviewFlags : []);

      // Also deep merge any answers found in legacy keys that might not be in current state
      const legacyKeys = ["NALR_ST1_APTITUDE_V7", "NALR_ST1_APTITUDE_V6", "NALR_ST1_APTITUDE_V5", "NALR_APTITUDE_V4"];
      for (const oldKey of legacyKeys) {
        try {
          const lRaw = localStorage.getItem(oldKey);
          if (lRaw) {
            const lData = JSON.parse(lRaw);
            if (lData.userPracticeAnswers && typeof lData.userPracticeAnswers === "object") {
              userPracticeAnswers = Object.assign({}, lData.userPracticeAnswers, userPracticeAnswers);
            }
            if (lData.userExamAnswersMode && typeof lData.userExamAnswersMode === "object") {
              userExamAnswers = Object.assign({}, lData.userExamAnswersMode, userExamAnswers);
            }
            if (Array.isArray(lData.userReviewFlags)) {
              lData.userReviewFlags.forEach(f => userReviewFlags.add(f));
            }
          }
        } catch (mErr) {}
      }

      isDarkMode = Boolean(data.isDarkMode);
      activeDifficultyFilter = data.activeDifficultyFilter || "all";
      showFlaggedOnly = Boolean(data.showFlaggedOnly);
      if (data.isExamMode !== undefined) {
        isExamMode = Boolean(data.isExamMode);
      }

      if (Array.isArray(data.selectedExamModuleIds) && data.selectedExamModuleIds.length > 0) {
        selectedExamModuleIds = data.selectedExamModuleIds;
      }

      if (isExamMode) {
        activeExamQuestions = QUIZ_QUESTIONS.filter(q => selectedExamModuleIds.includes(q.module_id));
      }
    } else {
      if (typeof getSyllabusModules === "function") {
        SYLLABUS_MODULES = getSyllabusModules("st1");
      }
    }
  } catch (e) {
    console.warn("Resetting stored state due to error", e);
    currentTermId = "st1";
    if (typeof getSyllabusModules === "function") {
      SYLLABUS_MODULES = getSyllabusModules("st1");
    }
    activeModuleId = "mod1";
    activeTypeId = "type_1";
    userPracticeAnswers = {};
    userExamAnswers = {};
    userReviewFlags = new Set();
    activeDifficultyFilter = "all";
    showFlaggedOnly = false;
  }

  // Synchronize term selector capsule UI buttons
  updateTermSelectorButtonsUI();
}

// Save Current State to localStorage with guaranteed persistence
function saveCurrentState() {
  try {
    // Record current module & type for active term
    if (currentTermId) {
      lastActiveModulePerTerm[currentTermId] = activeModuleId;
      lastActiveTypePerTerm[currentTermId] = activeTypeId;
    }

    const data = {
      currentTermId,
      activeModuleId,
      activeTypeId,
      lastActiveModulePerTerm,
      lastActiveTypePerTerm,
      isExamMode,
      userPracticeAnswers,
      userExamAnswersMode: userExamAnswers,
      userReviewFlags: Array.from(userReviewFlags),
      isDarkMode,
      activeDifficultyFilter,
      showFlaggedOnly,
      selectedExamModuleIds,
      lastSavedTimestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Failed to save state to localStorage", e);
  }
}

// Synchronize Capsule UI Buttons
function updateTermSelectorButtonsUI() {
  const termButtons = document.querySelectorAll(".term-pill-btn");
  termButtons.forEach((btn) => {
    const isThisTerm = (btn.dataset.term === currentTermId);
    btn.classList.toggle("active", isThisTerm);
    btn.setAttribute("aria-selected", isThisTerm ? "true" : "false");
  });
}

/**
 * Switch Examination Term ("st1" | "st2" | "endterm")
 * Seamlessly transitions sidebar, question view, and exam modes between terms,
 * preserving study progress and exact position across all terms.
 */
function switchTerm(termId) {
  if (typeof SYLLABUS_DATA === "undefined" || !SYLLABUS_DATA[termId]) {
    console.error("Unknown term ID:", termId);
    return;
  }

  // 1. Remember position in previous term
  if (currentTermId) {
    lastActiveModulePerTerm[currentTermId] = activeModuleId;
    lastActiveTypePerTerm[currentTermId] = activeTypeId;
  }

  // 2. Switch to new term
  currentTermId = termId;
  SYLLABUS_MODULES = getSyllabusModules(termId);

  // 3. Update capsule buttons UI
  updateTermSelectorButtonsUI();

  // 4. Restore last visited module for this term, or default to first module
  const rememberedMod = lastActiveModulePerTerm[termId];
  if (rememberedMod && SYLLABUS_MODULES.some(m => m.id === rememberedMod)) {
    activeModuleId = rememberedMod;
  } else if (SYLLABUS_MODULES.length > 0) {
    activeModuleId = SYLLABUS_MODULES[0].id;
  }

  const currentModObj = SYLLABUS_MODULES.find(m => m.id === activeModuleId);
  const rememberedType = lastActiveTypePerTerm[termId];
  if (currentModObj && currentModObj.types && currentModObj.types.some(t => t.id === rememberedType)) {
    activeTypeId = rememberedType;
  } else {
    activeTypeId = (currentModObj && currentModObj.types && currentModObj.types.length > 0)
      ? currentModObj.types[0].id
      : "type_1";
  }

  // 5. Update sidebar total badge
  const sidebarBadge = document.getElementById("sidebarTotalBadge");
  if (sidebarBadge) {
    sidebarBadge.textContent = `${SYLLABUS_MODULES.length} Modules`;
  }

  // 6. Handle Exam Mode when switching terms
  if (isExamMode) {
    const availableExamQs = QUIZ_QUESTIONS.filter(q => SYLLABUS_MODULES.some(m => m.id === q.module_id));
    if (availableExamQs.length === 0) {
      isExamMode = false;
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      showToastNotification(`Switched to ${SYLLABUS_DATA[termId].name}. (0 Questions uploaded yet — viewing practice outline)`);
    } else {
      selectedExamModuleIds = SYLLABUS_MODULES.filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id)).map(m => m.id);
      activeExamQuestions = availableExamQs;
      const titleElem = document.getElementById("examModeMainTitle");
      if (titleElem) {
        titleElem.textContent = `📝 ${SYLLABUS_DATA[termId].name} Examination Mode (${activeExamQuestions.length} Questions)`;
      }
    }
  }

  saveCurrentState();
  renderApplication();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =============================================================================
// SECTION 4: THEME ENGINE, CLIPBOARD UTILITIES & TOAST NOTIFICATIONS
// =============================================================================

// Theme Toggle (Dark / Light Mode)
function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  const btn = document.getElementById("themeToggleBtn");
  if (btn) btn.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  saveCurrentState();
}

// =============================================================================
// SECTION 5: EXAM TOPIC SELECTION MODAL CONTROLLER
// =============================================================================

// Open Topic Selection Modal (Allows user to select which of the 14 topics to test)
function openExamTopicModal() {
  const modal = document.getElementById("examTopicModal");
  if (!modal) return;
  modal.style.display = "flex";
  renderExamTopicList();
}

function closeExamTopicModal() {
  const modal = document.getElementById("examTopicModal");
  if (modal) modal.style.display = "none";
}

function renderExamTopicList() {
  const container = document.getElementById("examTopicListContainer");
  if (!container) return;
  container.innerHTML = "";

  SYLLABUS_MODULES.forEach((mod) => {
    const qCount = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id).length;
    const isAvailable = (qCount > 0);
    const isSelected = selectedExamModuleIds.includes(mod.id) && isAvailable;

    const item = document.createElement("div");
    item.className = `exam-topic-item ${isSelected ? 'is-selected' : ''} ${!isAvailable ? 'is-disabled' : ''}`;

    item.innerHTML = `
      <input type="checkbox" class="exam-topic-checkbox" ${isSelected ? 'checked' : ''} ${!isAvailable ? 'disabled' : ''} />
      <div class="exam-topic-item-info">
        <span class="exam-topic-item-title">${mod.num}. ${escapeHtml(mod.title)}</span>
        <span class="exam-topic-item-sub">${escapeHtml(mod.lectures || 'ST-1')}</span>
      </div>
      <span class="exam-topic-item-badge">${isAvailable ? `${qCount} Qs` : 'Pending'}</span>
    `;

    if (isAvailable) {
      item.addEventListener("click", (e) => {
        if (e.target.tagName !== "INPUT") {
          const input = item.querySelector("input[type='checkbox']");
          if (input) input.checked = !input.checked;
        }
        const currentChecked = item.querySelector("input[type='checkbox']").checked;
        if (currentChecked) {
          item.classList.add("is-selected");
          if (!selectedExamModuleIds.includes(mod.id)) selectedExamModuleIds.push(mod.id);
        } else {
          item.classList.remove("is-selected");
          selectedExamModuleIds = selectedExamModuleIds.filter(id => id !== mod.id);
        }
        updateExamTopicModalSummary();
      });
    }

    container.appendChild(item);
  });

  updateExamTopicModalSummary();
}

function updateExamTopicModalSummary() {
  const totalAvailableQs = QUIZ_QUESTIONS.filter(q => selectedExamModuleIds.includes(q.module_id)).length;
  const countBadge = document.getElementById("btnStartExamCount");
  if (countBadge) countBadge.textContent = totalAvailableQs;

  const summaryText = document.getElementById("examTopicSummaryText");
  if (summaryText) {
    summaryText.textContent = `${selectedExamModuleIds.length} Topics • ${totalAvailableQs} Questions Selected`;
  }
}

function startExamWithSelectedTopics() {
  if (selectedExamModuleIds.length === 0) {
    alert("Please select at least one topic with available questions.");
    return;
  }
  activeExamQuestions = QUIZ_QUESTIONS.filter(q => selectedExamModuleIds.includes(q.module_id));
  if (activeExamQuestions.length === 0) {
    alert("Selected topics do not have questions loaded yet.");
    return;
  }

  isExamMode = true;
  closeExamTopicModal();

  const titleElem = document.getElementById("examModeMainTitle");
  if (titleElem) {
    titleElem.textContent = `📝 Examination Mode (${activeExamQuestions.length} Questions)`;
  }

  const subElem = document.getElementById("examModeSubtitle");
  if (subElem) {
    const topicNames = SYLLABUS_MODULES.filter(m => selectedExamModuleIds.includes(m.id)).map(m => m.title);
    subElem.textContent = `Selected Topics (${topicNames.length}): ${topicNames.join(", ")}`;
  }

  renderApplication();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Exam Mode Toggle
function toggleExamMode() {
  if (isExamMode) {
    isExamMode = false;
    const res = document.getElementById("quizResultsScreen");
    if (res) res.classList.remove("is-active");
    renderApplication();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    openExamTopicModal();
  }
}

// Reset Progress
function resetProgressPrompt() {
  if (confirm("Are you sure you want to reset all progress, bookmarks, and test scores?")) {
    localStorage.removeItem(STORAGE_KEY);
    userPracticeAnswers = {};
    userExamAnswers = {};
    userReviewFlags = new Set();
    currentTermId = "st1";
    if (typeof getSyllabusModules === "function") {
      SYLLABUS_MODULES = getSyllabusModules("st1");
    }
    activeModuleId = "mod1";
    activeTypeId = "type_1";
    isExamMode = false;
    updateTermSelectorButtonsUI();
    const res = document.getElementById("quizResultsScreen");
    if (res) res.classList.remove("is-active");
    renderApplication();
  }
}

// Clear Answers
function clearAllAnswersPrompt() {
  if (isExamMode) {
    if (confirm("Clear all answers in Exam Mode?")) {
      userExamAnswers = {};
      saveCurrentState();
      renderFullExamQuestions();
      renderTopProgressTrack();
    }
  } else {
    const totalQ = QUIZ_QUESTIONS.length;
    if (confirm(`Clear all answers across all ${totalQ} questions?`)) {
      userPracticeAnswers = {};
      saveCurrentState();
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      renderApplication();
    }
  }
}

// Clear Single Choice
function clearQuestionChoice(qId) {
  if (userPracticeAnswers[qId] !== undefined) {
    delete userPracticeAnswers[qId];
    saveCurrentState();
    renderApplication();
  }
}

// Toggle Review Flag
function toggleQuestionFlag(qId) {
  if (userReviewFlags.has(qId)) {
    userReviewFlags.delete(qId);
  } else {
    userReviewFlags.add(qId);
  }
  saveCurrentState();
  renderApplication();
}

// Calculate Total Score
function calcTotalScore(mode = (isExamMode ? "exam" : "practice")) {
  const answers = mode === "exam" ? userExamAnswers : userPracticeAnswers;
  return QUIZ_QUESTIONS.reduce((sum, q) => {
    return sum + (answers[q.id] === q.correct ? (q.points || 1) : 0);
  }, 0);
}

// Get Stats for a Module
function getModuleStats(moduleId) {
  const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === moduleId);
  const total = modQuestions.length;
  const answered = modQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
  const correct = modQuestions.filter(q => userPracticeAnswers[q.id] === q.correct).length;
  const score = modQuestions.filter(q => userPracticeAnswers[q.id] === q.correct).reduce((s, q) => s + (q.points || 1), 0);
  const maxScore = modQuestions.reduce((s, q) => s + (q.points || 1), 0);
  return { total, answered, correct, score, maxScore, pct: total ? Math.round((answered / total) * 100) : 0 };
}

// =============================================================================
// SECTION 6: SIDEBAR NAVIGATION & MODULE SELECTION
// =============================================================================

// Navigate to a specific Module & Type
function selectModuleAndType(moduleId, typeId) {
  activeModuleId = moduleId;
  activeTypeId = typeId || "type_1";
  renderApplication();
  window.scrollTo({ top: 120, behavior: "smooth" });
}

// Render Top Progress Bar (Module-Specific)
function renderTopProgressTrack() {
  const qNumLabel = document.getElementById("labelCurrentQuestionNumber");
  const pctLabel = document.getElementById("labelProgressPercentage");
  const ansCountLabel = document.getElementById("labelAnsweredCount");
  const totalCountLabel = document.getElementById("labelTotalQuestionsCount");
  const scoreLabel = document.getElementById("labelCurrentTotalScore");
  const maxScoreLabel = document.getElementById("labelMaxScore");
  const barTrack = document.getElementById("overallProgressBarTrack");

  if (isExamMode) {
    // Continuous Exam Mode Progress
    const examPool = (activeExamQuestions && activeExamQuestions.length > 0)
      ? activeExamQuestions
      : QUIZ_QUESTIONS.filter(q => (selectedExamModuleIds || []).includes(q.module_id));
    const totalExamQuestions = examPool.length;
    const answeredExamCount = examPool.filter(q => userExamAnswers[q.id] !== undefined).length;
    const examScore = examPool.filter(q => userExamAnswers[q.id] === q.correct).reduce((sum, q) => sum + (q.points || 1), 0);
    const maxExamScore = examPool.reduce((sum, q) => sum + (q.points || 1), 0);
    const examPct = totalExamQuestions > 0 ? Math.round((answeredExamCount / totalExamQuestions) * 100) : 0;

    if (qNumLabel) qNumLabel.textContent = `Exam Mode (${totalExamQuestions} Questions)`;
    if (pctLabel) pctLabel.textContent = `${examPct}%`;
    if (ansCountLabel) ansCountLabel.textContent = answeredExamCount;
    if (totalCountLabel) totalCountLabel.textContent = totalExamQuestions;
    if (scoreLabel) scoreLabel.textContent = examScore;
    if (maxScoreLabel) maxScoreLabel.textContent = maxExamScore;
    if (barTrack) barTrack.style.width = `${examPct}%`;
  } else {
    // PRACTICE MODE: Progress Bar of the Current Active Module ONLY
    const curMod = SYLLABUS_MODULES.find(m => m.id === activeModuleId) || SYLLABUS_MODULES[0];
    const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);
    const totalModQ = modQuestions.length;
    const answeredModQ = modQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
    const modScore = modQuestions.filter(q => userPracticeAnswers[q.id] === q.correct).reduce((s, q) => s + (q.points || 1), 0);
    const modMaxScore = modQuestions.reduce((s, q) => s + (q.points || 1), 0);
    const modPct = totalModQ > 0 ? Math.round((answeredModQ / totalModQ) * 100) : 0;

    const curType = (curMod && curMod.types) ? curMod.types.find(t => t.id === activeTypeId) : null;

    if (qNumLabel) {
      if (curType) {
        qNumLabel.textContent = `${curMod.num}. ${curMod.title} • ${curType.name}`;
      } else {
        qNumLabel.textContent = `${curMod.num}. ${curMod.title} (${totalModQ} Questions)`;
      }
    }
    if (pctLabel) pctLabel.textContent = `${modPct}%`;
    if (ansCountLabel) ansCountLabel.textContent = answeredModQ;
    if (totalCountLabel) totalCountLabel.textContent = totalModQ;
    if (scoreLabel) scoreLabel.textContent = modScore;
    if (maxScoreLabel) maxScoreLabel.textContent = modMaxScore;
    if (barTrack) barTrack.style.width = `${modPct}%`;
  }
}

// Copy Question & Options to Clipboard
function copyQuestionToClipboard(q, qNum, btnElem) {
  const letters = ["(a)", "(b)", "(c)", "(d)", "(e)"];
  const formattedOpts = (q.options || []).map((opt, i) => `${letters[i] || `(${i + 1})`} ${opt}`).join("\n");
  const fullText = `Q ${qNum}. ${q.question}\n\n${formattedOpts}`;

  const markSuccess = () => {
    if (btnElem) {
      const origHtml = btnElem.innerHTML;
      btnElem.innerHTML = `<span>✓ Copied!</span>`;
      btnElem.classList.add("is-copied");
      setTimeout(() => {
        btnElem.innerHTML = origHtml;
        btnElem.classList.remove("is-copied");
      }, 1600);
    }
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullText).then(markSuccess).catch(() => {
      fallbackCopyText(fullText, markSuccess);
    });
  } else {
    fallbackCopyText(fullText, markSuccess);
  }
}

function fallbackCopyText(text, callback) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  ta.style.top = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand("copy");
    if (callback) callback();
  } catch (e) {
    console.error("Fallback copy failed:", e);
  }
  document.body.removeChild(ta);
}

// Floating Toast Notification
function showToastNotification(message, duration = 3500) {
  let toast = document.getElementById("appToastNotification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToastNotification";
    toast.className = "app-toast-popup";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  if (window._toastTimer) clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, duration);
}

// Open Question in ChatGPT & Copy Prompt
function openInChatGPT(q, qNum, btnElem) {
  const letters = ["(a)", "(b)", "(c)", "(d)", "(e)"];
  const formattedOpts = (q.options || []).map((opt, i) => `${letters[i] || `(${i + 1})`} ${opt}`).join("\n");
  const fullPrompt = `Solve this aptitude question step-by-step with clear logical explanation and specify the correct option:\n\nQuestion: ${q.question}\n\nOptions:\n${formattedOpts}`;

  // Use a real anchor navigation rather than window.open(). This is more
  // reliably treated as a user-initiated navigation by Vercel/Chrome/Edge.
  const chatLink = document.createElement("a");
  chatLink.href = "https://chatgpt.com/";
  chatLink.target = "_blank";
  chatLink.rel = "noopener noreferrer";
  chatLink.style.display = "none";
  document.body.appendChild(chatLink);
  chatLink.click();
  chatLink.remove();

  const showCopiedState = () => {
    if (btnElem) {
      const origHtml = btnElem.innerHTML;
      btnElem.innerHTML = `<span>✨ Copied! (Ctrl+V)</span>`;
      btnElem.classList.add("is-gemini-copied");
      setTimeout(() => {
        btnElem.innerHTML = origHtml;
        btnElem.classList.remove("is-gemini-copied");
      }, 3500);
    }

    showToastNotification("✨ Question copied! ChatGPT opened — press Ctrl + V to paste.");
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fullPrompt).then(showCopiedState).catch(() => {
      fallbackCopyText(fullPrompt, showCopiedState);
    });
  } else {
    fallbackCopyText(fullPrompt, showCopiedState);
  }
}

// RENDER SIDEBAR: Module Navigator for Active Term
function renderSidebarAccordion() {
  const container = document.getElementById("sidebarAccordionContainer");
  if (!container) return;
  container.innerHTML = "";

  const sidebarBadge = document.getElementById("sidebarTotalBadge");
  if (sidebarBadge) {
    sidebarBadge.textContent = `${SYLLABUS_MODULES.length} Modules`;
  }

  SYLLABUS_MODULES.forEach((mod) => {
    const stats = getModuleStats(mod.id);
    const isCurrentMod = (activeModuleId === mod.id);

    const itemDiv = document.createElement("div");
    itemDiv.className = `module-acc-item ${isCurrentMod ? 'is-current-module' : ''}`;

    // Module Tab Header Button
    const btn = document.createElement("button");
    btn.className = `module-acc-btn ${isCurrentMod ? 'active' : ''}`;
    const termObj = (typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA[currentTermId]) ? SYLLABUS_DATA[currentTermId] : null;
    const fallbackTag = termObj ? termObj.name : 'Aptitude';
    btn.innerHTML = `
      <div class="module-info-left">
        <strong class="mod-title-text">${mod.num}. ${escapeHtml(mod.title)}</strong>
        <span class="mod-lec-text">${escapeHtml(mod.lectures || fallbackTag)}</span>
      </div>
      <span class="module-pill-badge">${stats.total > 0 ? `${stats.answered}/${stats.total}` : '0 Qs'}</span>
    `;

    // Dropdown / Accordion Body inside the Module Tab
    const bodyArea = document.createElement("div");
    bodyArea.className = "module-questions-grid";
    bodyArea.style.display = isCurrentMod ? "block" : "none";

    btn.addEventListener("click", () => {
      const isExpanded = (bodyArea.style.display === "block");
      document.querySelectorAll(".module-questions-grid").forEach(g => g.style.display = "none");
      document.querySelectorAll(".module-acc-btn").forEach(b => b.classList.remove("active"));
      if (!isExpanded) {
        bodyArea.style.display = "block";
        btn.classList.add("active");
        activeModuleId = mod.id;
        const firstType = (mod.types && mod.types.length > 0) ? mod.types[0].id : "type_1";
        selectModuleAndType(mod.id, firstType);
      }
    });

    // ONLY render subtabs for modules that have types (i.e. Coded Relation)
    const types = mod.types || [];
    if (types.length > 0) {
      const typeTabsContainer = document.createElement("div");
      typeTabsContainer.className = "sidebar-type-tabs-container";

      types.forEach((t) => {
        const qCountInType = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id && q.type_id === t.id).length;
        const answeredInType = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id && q.type_id === t.id && userPracticeAnswers[q.id] !== undefined).length;
        const isTypeComplete = (qCountInType > 0 && answeredInType === qCountInType);
        const isTypeActive = (isCurrentMod && activeTypeId === t.id);

        const typeBtn = document.createElement("button");
        typeBtn.className = `sidebar-type-btn ${isTypeActive ? 'active' : ''} ${isTypeComplete ? 'is-complete' : ''}`;
        const badgeLabel = (answeredInType > 0)
          ? (isTypeComplete ? `✓ ${answeredInType}/${qCountInType}` : `${answeredInType}/${qCountInType}`)
          : `${qCountInType} Qs`;

        typeBtn.innerHTML = `
          <span class="sidebar-type-title">${escapeHtml(t.name)}</span>
          <span class="sidebar-type-badge ${isTypeComplete ? 'is-complete-badge' : ''}">${badgeLabel}</span>
        `;

        typeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          selectModuleAndType(mod.id, t.id);
        });

        typeTabsContainer.appendChild(typeBtn);
      });

      bodyArea.appendChild(typeTabsContainer);
    } else {
      // Empty module: notice that questions haven't been uploaded yet (NO small subtabs!)
      const emptyNotice = document.createElement("div");
      emptyNotice.style.cssText = "padding: 10px 14px; font-size: 12px; color: var(--ink-muted); text-align: center;";
      emptyNotice.textContent = "0 Questions uploaded yet (Upload pending)";
      bodyArea.appendChild(emptyNotice);
    }

    itemDiv.appendChild(btn);
    itemDiv.appendChild(bodyArea);
    container.appendChild(itemDiv);
  });
}

// =============================================================================
// SECTION 7: PRACTICE MODE QUESTION VIEW CONTROLLER & CARD RENDERER
// =============================================================================

// Update Practice Filters Bar (Difficulty & Flagged Filter States)
function updatePracticeFiltersBar(typeQuestions = []) {
  // Update difficulty pills
  const pills = document.querySelectorAll("#diffFilterPills .diff-pill");
  pills.forEach(pill => {
    const diff = pill.dataset.diff;
    if (diff === activeDifficultyFilter) {
      pill.classList.add("is-active");
    } else {
      pill.classList.remove("is-active");
    }
  });

  // Flagged questions count in this type
  const flaggedInType = typeQuestions.filter(q => userReviewFlags.has(q.id)).length;
  const pillFlagCount = document.getElementById("pillFlaggedCount");
  if (pillFlagCount) pillFlagCount.textContent = flaggedInType;

  const flagPillIcon = document.getElementById("flagPillIcon");
  if (flagPillIcon) flagPillIcon.textContent = showFlaggedOnly ? "★" : "☆";

  const btnFlagToggle = document.getElementById("btnToggleFlaggedOnly");
  if (btnFlagToggle) {
    if (showFlaggedOnly) btnFlagToggle.classList.add("is-active");
    else btnFlagToggle.classList.remove("is-active");
  }

  // Header flagged badge
  const headerFlagCount = document.getElementById("headerFlaggedCount");
  if (headerFlagCount) headerFlagCount.textContent = userReviewFlags.size;

  const headerFlagBtn = document.getElementById("btnToggleFlaggedHeader");
  if (headerFlagBtn) {
    if (showFlaggedOnly) headerFlagBtn.classList.add("is-active");
    else headerFlagBtn.classList.remove("is-active");
  }
}

// Render Main Question View with Questions for the Active Subtab
function renderMainQuestionView() {
  const currentMod = SYLLABUS_MODULES.find(m => m.id === activeModuleId) || SYLLABUS_MODULES[1];
  const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);
  const typeQuestions = modQuestions.filter(q => q.type_id === activeTypeId);
  const types = currentMod.types || [];

  // Update Breadcrumbs and Module Header
  const modTitleBadge = document.getElementById("badgeModuleNumTitle");
  if (modTitleBadge) modTitleBadge.textContent = currentMod.title;

  const lecInfo = document.getElementById("badgeLectureInfo");
  if (lecInfo) lecInfo.textContent = currentMod.lectures || 'ST-1';

  const typeProgress = document.getElementById("badgeTypeProgress");
  if (typeProgress) {
    if (types.length > 0) {
      const answeredInType = typeQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
      typeProgress.textContent = `${answeredInType}/${typeQuestions.length} Answered`;
    } else {
      typeProgress.textContent = "0 Questions";
    }
  }

  const termObj = (typeof SYLLABUS_DATA !== "undefined" && SYLLABUS_DATA[currentTermId]) ? SYLLABUS_DATA[currentTermId] : null;
  const termPrefix = termObj ? termObj.prefix : 'Practice';

  const prefix = document.getElementById("topicModulePrefix");
  if (prefix) prefix.textContent = `Module ${currentMod.num} • ${currentMod.lectures || termPrefix}`;

  const heading = document.getElementById("topicMainHeading");
  const currentTypeObj = types.find(t => t.id === activeTypeId);
  if (heading) {
    if (currentTypeObj && typeQuestions.length > 0) {
      heading.textContent = `${currentTypeObj.name} (${typeQuestions.length} Questions)`;
    } else {
      heading.textContent = `${currentMod.num}. ${currentMod.title} (0 Questions)`;
    }
  }



  // Strategy Banner
  const banner = document.getElementById("currentTypeInfoBanner");
  const bannerText = document.getElementById("currentTypeStrategyText");
  if (banner && bannerText) {
    if (currentTypeObj) {
      banner.style.display = "flex";
      bannerText.innerHTML = `<strong>${escapeHtml(currentTypeObj.name)}:</strong> ${escapeHtml(currentTypeObj.desc || '')}`;
    } else {
      banner.style.display = "none";
    }
  }

  // Render Questions into #tabQuestionsStack
  const questionsStack = document.getElementById("tabQuestionsStack");
  if (!questionsStack) return;
  questionsStack.innerHTML = "";

  // If this module has 0 questions uploaded
  if (modQuestions.length === 0 || typeQuestions.length === 0) {
    const emptyCard = document.createElement("div");
    emptyCard.className = "empty-module-card";
    emptyCard.innerHTML = `
      <div class="empty-icon">📂</div>
      <h3>0 Questions Uploaded Yet</h3>
      <p>Questions for <strong>${escapeHtml(currentMod.title)}</strong> have not been uploaded yet. When uploaded, they will appear directly in this tab.</p>
    `;
    questionsStack.appendChild(emptyCard);

    // Hide bottom navigation
    const bottomNav = document.getElementById("typeTabBottomNavControls");
    if (bottomNav) bottomNav.style.display = "none";
    return;
  }

  // Update Filters Bar
  updatePracticeFiltersBar(typeQuestions);

  // Apply Difficulty and Flagged Filters
  let filteredQuestions = [...typeQuestions];
  if (activeDifficultyFilter !== "all") {
    filteredQuestions = filteredQuestions.filter(q => (q.difficulty || "medium").toLowerCase() === activeDifficultyFilter.toLowerCase());
  }
  if (showFlaggedOnly) {
    filteredQuestions = filteredQuestions.filter(q => userReviewFlags.has(q.id));
  }

  if (filteredQuestions.length === 0) {
    const emptyNotice = document.createElement("div");
    emptyNotice.className = "empty-module-card";
    emptyNotice.innerHTML = `
      <div class="empty-icon">🔍</div>
      <h3>No Matching Questions</h3>
      <p style="margin-bottom: 14px; color: var(--ink-secondary);">
        ${showFlaggedOnly ? 'No flagged questions found in this subtab.' : `No questions marked as <strong>${escapeHtml(activeDifficultyFilter)}</strong> in this subtab.`}
      </p>
      <button type="button" class="btn-minimal-primary" id="btnResetPracticeFilters">Reset Filters</button>
    `;
    questionsStack.appendChild(emptyNotice);
    const resetBtn = emptyNotice.querySelector("#btnResetPracticeFilters");
    if (resetBtn) {
      resetBtn.onclick = () => {
        activeDifficultyFilter = "all";
        showFlaggedOnly = false;
        renderMainQuestionView();
      };
    }
    return;
  }

  // Questions Exist! Render each question of this subtab cleanly
  const letters = ["A", "B", "C", "D", "E"];

  filteredQuestions.forEach((q, idx) => {
    const chosenOption = userPracticeAnswers[q.id];
    const isAnswered = (chosenOption !== undefined);
    const isCorrect = (chosenOption === q.correct);
    const isFlagged = userReviewFlags.has(q.id);

    const qCard = document.createElement("div");
    qCard.className = `tab-question-item ${isAnswered ? (isCorrect ? 'is-answered-correct' : 'is-answered-wrong') : ''} ${isFlagged ? 'is-flagged' : ''}`;
    qCard.id = `q_card_${q.id}`;

    // Header Bar: Single-line layout for Q number, Easy, 1 Mark, Clear Choice, and Review
    const qHeader = document.createElement("div");
    qHeader.className = "tab-q-header-bar";
    qHeader.innerHTML = `
      <div class="q-bar-pill-group">
        <span class="q-num-pill">Q${idx + 1}</span>
        <span class="q-badge-pill tag-diff-${(q.difficulty || 'medium').toLowerCase()}">${q.difficulty || 'Medium'}</span>
        <span class="q-badge-pill q-points-pill">${q.points || 1} Mark</span>
      </div>
      <div class="q-bar-action-group">
        <button class="btn-copy-q" id="btnCopy_${q.id}" title="Copy Question and Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnGemini_${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        ${isAnswered ? `<button class="btn-clear-choice" id="btnClear_${q.id}">🧹 Clear Choice</button>` : ''}
        <button class="btn-flag-single-q ${isFlagged ? 'is-flagged' : ''}" id="btnFlag_${q.id}">
          ${isFlagged ? '★ Marked' : '☆ Review'}
        </button>
      </div>
    `;
    qCard.appendChild(qHeader);

    // Question Text
    const qText = document.createElement("div");
    qText.className = "tab-q-text";
    qText.innerHTML = formatMarkdown(q.question);
    qCard.appendChild(qText);

    // Options Stack
    const optsStack = document.createElement("div");
    optsStack.className = "tab-q-options-stack";

    (q.options || []).forEach((opt, oIdx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "exam-opt-btn";
      optBtn.disabled = isAnswered;
      optBtn.innerHTML = `
        <span class="opt-badge-letter">${letters[oIdx] || (oIdx + 1)}</span>
        <span>${escapeHtml(opt)}</span>
      `;

      if (isAnswered) {
        if (opt === q.correct) optBtn.classList.add("correct");
        if (opt === chosenOption && chosenOption !== q.correct) optBtn.classList.add("wrong");
      }

      optBtn.addEventListener("click", () => {
        userPracticeAnswers[q.id] = opt;
        if (typeof sounds !== "undefined") {
          if (opt === q.correct) sounds.playCorrect();
          else sounds.playWrong();
        }
        if (typeof ConfettiManager !== "undefined" && opt === q.correct) {
          ConfettiManager.fireBurst();
        }
        saveCurrentState();
        renderApplication();
      });

      optsStack.appendChild(optBtn);
    });
    qCard.appendChild(optsStack);

    // Feedback Box
    if (isAnswered) {
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : "";
      const feedbackBox = document.createElement("div");
      feedbackBox.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'}`;
      feedbackBox.innerHTML = `
        <div class="feedback-headline">
          ${isCorrect ? '✅ Correct Answer!' : '❌ Incorrect Choice!'} — <span class="sol-correct-pill">Option ${correctLetter}: ${escapeHtml(q.correct)}</span>
        </div>
        ${formatDetailedSolution(q.explanation || '')}
      `;
      qCard.appendChild(feedbackBox);
    }

    questionsStack.appendChild(qCard);

    // Event listeners for Copy, Gemini, Clear Choice & Flag buttons
    setTimeout(() => {
      const copyBtn = document.getElementById(`btnCopy_${q.id}`);
      if (copyBtn) {
        copyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, copyBtn);
      }
      const geminiBtn = document.getElementById(`btnGemini_${q.id}`);
      if (geminiBtn) {
        geminiBtn.onclick = () => openInChatGPT(q, idx + 1, geminiBtn);
      }
      const clearBtn = document.getElementById(`btnClear_${q.id}`);
      if (clearBtn) {
        clearBtn.onclick = () => clearQuestionChoice(q.id);
      }
      const flagBtn = document.getElementById(`btnFlag_${q.id}`);
      if (flagBtn) {
        flagBtn.onclick = () => toggleQuestionFlag(q.id);
      }
    }, 0);
  });

  // Bottom Navigation between Subtabs
  const bottomNav = document.getElementById("typeTabBottomNavControls");
  if (bottomNav) {
    if (types.length > 0) {
      bottomNav.style.display = "flex";
      const curTypeIdx = types.findIndex(t => t.id === activeTypeId);
      const statusText = document.getElementById("typeTabNavStatus");
      if (statusText) statusText.textContent = `Type ${curTypeIdx + 1} of ${types.length}`;

      const prevTabBtn = document.getElementById("btnPrevTypeTab");
      if (prevTabBtn) {
        prevTabBtn.disabled = (curTypeIdx <= 0);
        prevTabBtn.onclick = () => {
          if (curTypeIdx > 0) {
            selectModuleAndType(activeModuleId, types[curTypeIdx - 1].id);
          }
        };
      }

      const nextTabBtn = document.getElementById("btnNextTypeTab");
      if (nextTabBtn) {
        if (curTypeIdx < types.length - 1) {
          nextTabBtn.innerHTML = `<span>Next: ${escapeHtml(types[curTypeIdx + 1].name.split(':')[0])} →</span>`;
          nextTabBtn.onclick = () => {
            selectModuleAndType(activeModuleId, types[curTypeIdx + 1].id);
          };
        } else {
          nextTabBtn.innerHTML = `<span>Finish & View Assessment 🏁</span>`;
          nextTabBtn.onclick = showResultsScreen;
        }
      }
    } else {
      bottomNav.style.display = "none";
    }
  }
}

// Render Top Horizontal Type Tabs Bar
function renderTopHorizontalTypeTabs(currentMod, modQuestions) {
  const tabsBar = document.getElementById("questionTypeTabsBar");
  const countLabel = document.getElementById("typeTabsActiveCount");
  if (!tabsBar) return;
  tabsBar.innerHTML = "";

  const types = currentMod.types || [];
  if (countLabel) {
    countLabel.textContent = `${types.length} Types • ${modQuestions.length} Questions`;
  }

  types.forEach((type) => {
    const qCountInType = modQuestions.filter(q => q.type_id === type.id).length;
    const answeredCount = modQuestions.filter(q => q.type_id === type.id && userPracticeAnswers[q.id] !== undefined).length;
    const isComplete = (qCountInType > 0 && answeredCount === qCountInType);
    const isActive = (type.id === activeTypeId);

    const tabBtn = document.createElement("button");
    tabBtn.className = `type-tab-btn ${isActive ? 'active' : ''} ${isComplete ? 'is-complete' : ''}`;
    tabBtn.innerHTML = `
      <span>${escapeHtml(type.name)}</span>
      <span class="type-tab-badge">${qCountInType} Qs</span>
    `;

    tabBtn.addEventListener("click", () => {
      selectModuleAndType(activeModuleId, type.id);
    });

    tabsBar.appendChild(tabBtn);
  });
}

// =============================================================================
// SECTION 8: CONTINUOUS EXAMINATION MODE ENGINE
// =============================================================================

// Continuous Full Exam Mode Layout (Renders active pool of selected topics)
function renderFullExamQuestions() {
  const container = document.getElementById("fullExamQuestionsStack");
  if (!container) return;
  container.innerHTML = "";

  if (!activeExamQuestions || activeExamQuestions.length === 0) {
    activeExamQuestions = QUIZ_QUESTIONS.filter(q => (selectedExamModuleIds || []).includes(q.module_id));
    if (activeExamQuestions.length === 0) activeExamQuestions = [...QUIZ_QUESTIONS];
  }

  if (activeExamQuestions.length === 0) {
    container.innerHTML = "<p style='text-align:center; padding: 40px;'>No questions selected for exam mode. Click <strong>⚙️ Choose Topics</strong> to select topics.</p>";
    return;
  }

  activeExamQuestions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "full-exam-item-card";

    const chosen = userExamAnswers[q.id];
    if (chosen !== undefined) {
      card.classList.add(chosen === q.correct ? "is-answered-correct" : "is-answered-wrong");
    }

    const header = document.createElement("div");
    header.className = "full-exam-item-header";
    header.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <span class="full-exam-q-num">Q${idx + 1}</span>
        <span class="tag-badge tag-module">${escapeHtml(q.module_name || 'Coded Relation')}</span>
        <span class="tag-badge tag-lecture">${escapeHtml(q.type_name || '')}</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="btn-copy-q" id="btnExamCopy_${q.id}" title="Copy Question & Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnExamGemini_${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        <span class="tag-badge tag-diff-${(q.difficulty || 'medium').toLowerCase()}">${q.difficulty || 'Medium'}</span>
        <span class="tag-badge tag-points">${q.points || 1} Mark</span>
      </div>
    `;
    card.appendChild(header);

    const text = document.createElement("h3");
    text.className = "full-exam-q-text";
    text.innerHTML = formatMarkdown(q.question);
    card.appendChild(text);

    const optsStack = document.createElement("div");
    optsStack.className = "exam-options-stack";
    const letters = ["A", "B", "C", "D", "E"];

    (q.options || []).forEach((opt, oIdx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "exam-opt-btn";
      optBtn.disabled = (chosen !== undefined);
      optBtn.innerHTML = `
        <span class="opt-badge-letter">${letters[oIdx] || (oIdx + 1)}</span>
        <span>${escapeHtml(opt)}</span>
      `;

      if (chosen !== undefined) {
        if (opt === q.correct) optBtn.classList.add("correct");
        if (opt === chosen && chosen !== q.correct) optBtn.classList.add("wrong");
      }

      optBtn.addEventListener("click", () => {
        userExamAnswers[q.id] = opt;
        if (typeof sounds !== "undefined") {
          if (opt === q.correct) sounds.playCorrect();
          else sounds.playWrong();
        }
        saveCurrentState();
        renderFullExamQuestions();
        renderTopProgressTrack();
      });

      optsStack.appendChild(optBtn);
    });
    card.appendChild(optsStack);

    // Feedback
    if (chosen !== undefined) {
      const fb = document.createElement("div");
      const isCorrect = (chosen === q.correct);
      fb.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'}`;
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      fb.innerHTML = `
        <div class="feedback-headline">
          ${isCorrect ? '✅ Correct Answer!' : '❌ Incorrect Choice!'} — <span class="sol-correct-pill">Option ${correctLetter}: ${escapeHtml(q.correct)}</span>
        </div>
        ${formatDetailedSolution(q.explanation || '')}
      `;
      card.appendChild(fb);
    }

    container.appendChild(card);

    setTimeout(() => {
      const examCopyBtn = document.getElementById(`btnExamCopy_${q.id}`);
      if (examCopyBtn) {
        examCopyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, examCopyBtn);
      }
      const examGeminiBtn = document.getElementById(`btnExamGemini_${q.id}`);
      if (examGeminiBtn) {
        examGeminiBtn.onclick = () => openInChatGPT(q, idx + 1, examGeminiBtn);
      }
    }, 0);
  });
}

// =============================================================================
// SECTION 9: ASSESSMENT RESULTS & SCORE ANALYTICS
// =============================================================================

// Show Results Assessment Screen
function showResultsScreen() {
  const pracArea = document.getElementById("quizPracticeArea");
  const examArea = document.getElementById("fullExamModeArea");
  const resScreen = document.getElementById("quizResultsScreen");

  if (pracArea) pracArea.style.display = "none";
  if (examArea) examArea.style.display = "none";
  if (resScreen) resScreen.classList.add("is-active");

  // Determine the current question pool being evaluated (Exam pool or active practice module)
  const currentPool = isExamMode
    ? ((activeExamQuestions && activeExamQuestions.length > 0)
        ? activeExamQuestions
        : QUIZ_QUESTIONS.filter(q => (selectedExamModuleIds || []).includes(q.module_id)))
    : QUIZ_QUESTIONS.filter(q => q.module_id === activeModuleId);

  const poolQuestions = currentPool.length > 0 ? currentPool : QUIZ_QUESTIONS;
  const totalQuestions = poolQuestions.length;
  const answers = isExamMode ? userExamAnswers : userPracticeAnswers;
  const correctCount = poolQuestions.filter(q => answers[q.id] === q.correct).length;
  const answeredCount = poolQuestions.filter(q => answers[q.id] !== undefined).length;
  const wrongCount = answeredCount - correctCount;
  const unansweredCount = totalQuestions - answeredCount;
  const marksScored = poolQuestions.filter(q => answers[q.id] === q.correct).reduce((sum, q) => sum + (q.points || 1), 0);
  const maxMarks = poolQuestions.reduce((sum, q) => sum + (q.points || 1), 0);
  const pct = maxMarks > 0 ? Math.round((marksScored / maxMarks) * 100) : 0;

  const pctElem = document.getElementById("resTotalPercent");
  if (pctElem) pctElem.textContent = `${pct}%`;

  const curModObj = SYLLABUS_MODULES.find(m => m.id === activeModuleId);
  const topicLabel = isExamMode ? "the Examination Topics" : (curModObj ? curModObj.title : "this Module");

  const msgElem = document.getElementById("resEvaluationMessage");
  if (msgElem) {
    if (pct >= 85) msgElem.textContent = `🌟 Outstanding Performance! You have thoroughly mastered ${topicLabel}.`;
    else if (pct >= 60) msgElem.textContent = `👍 Good Progress! Review the questions you missed using the detailed analysis below.`;
    else msgElem.textContent = `📚 Keep Practicing! Re-attempt the questions to improve your accuracy in ${topicLabel}.`;
  }

  const marksElem = document.getElementById("resMarksTotal");
  if (marksElem) marksElem.textContent = `${marksScored} / ${maxMarks}`;

  const corElem = document.getElementById("resCorrectTotal");
  if (corElem) corElem.textContent = correctCount;

  const wrgElem = document.getElementById("resWrongTotal");
  if (wrgElem) wrgElem.textContent = wrongCount;

  const unElem = document.getElementById("resUnansweredTotal");
  if (unElem) unElem.textContent = unansweredCount;

  // Render Detailed Analysis List
  const listElem = document.getElementById("resultsDetailedList");
  if (listElem) {
    listElem.innerHTML = "";
    poolQuestions.forEach((q, idx) => {
      const userChoice = answers[q.id];
      const isCor = (userChoice === q.correct);
      const row = document.createElement("div");
      row.style.cssText = "padding:12px; margin-bottom:8px; border-radius:8px; background:var(--card-sub-bg); border-left:4px solid " +
        (userChoice === undefined ? "var(--ink-muted)" : (isCor ? "var(--emerald-green)" : "var(--crimson-red)"));
      row.innerHTML = `
        <div style="font-weight:750; font-size:13.5px; color:var(--ink-primary); margin-bottom:4px;">
          Q${idx + 1}: ${escapeHtml(q.question)}
        </div>
        <div style="font-size:12.5px; color:var(--ink-secondary);">
          Your Choice: <strong>${escapeHtml(userChoice || 'Unanswered')}</strong> | Correct: <strong style="color:var(--emerald-green);">${escapeHtml(q.correct)}</strong>
        </div>
      `;
      listElem.appendChild(row);
    });
  }

  if (typeof ConfettiManager !== "undefined" && pct >= 70) {
    ConfettiManager.fireBurst();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Master Render Application Controller
function renderApplication() {
  const pracArea = document.getElementById("quizPracticeArea");
  const examArea = document.getElementById("fullExamModeArea");
  const resScreen = document.getElementById("quizResultsScreen");
  const examToggleBtn = document.getElementById("toggleExamModeBtn");

  if (isExamMode) {
    if (pracArea) pracArea.style.display = "none";
    if (examArea) examArea.style.display = "block";
    if (resScreen) resScreen.classList.remove("is-active");
    if (examToggleBtn) examToggleBtn.textContent = "📖 Practice Mode";
    renderFullExamQuestions();
  } else {
    if (pracArea) pracArea.style.display = "grid";
    if (examArea) examArea.style.display = "none";
    if (examToggleBtn) examToggleBtn.textContent = "📝 Exam";
    renderMainQuestionView();
  }

  renderSidebarAccordion();
  renderTopProgressTrack();
  saveCurrentState();
}

// =============================================================================
// SECTION 10: EVENT LISTENERS & APPLICATION BOOTSTRAP
// =============================================================================

// Setup Event Listeners
function setupEventListeners() {
  // Term Selector Capsule Buttons (ST1, ST2, End Term)
  const termButtons = document.querySelectorAll(".term-pill-btn");
  termButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTerm = btn.dataset.term;
      if (targetTerm && targetTerm !== currentTermId) {
        switchTerm(targetTerm);
      }
    });
  });

  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const examBtn = document.getElementById("toggleExamModeBtn");
  if (examBtn) examBtn.addEventListener("click", toggleExamMode);

  const exitExamBtn = document.getElementById("btnExitExamMode");
  if (exitExamBtn) exitExamBtn.addEventListener("click", () => {
    isExamMode = false;
    renderApplication();
  });

  const changeTopicsBtn = document.getElementById("btnChangeExamTopics");
  if (changeTopicsBtn) changeTopicsBtn.addEventListener("click", openExamTopicModal);

  const modalCloseBtn = document.getElementById("btnExamModalClose");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeExamTopicModal);

  const modalBackdrop = document.getElementById("examTopicBackdrop");
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeExamTopicModal);

  const modalCancelBtn = document.getElementById("btnCancelExamTopicModal");
  if (modalCancelBtn) modalCancelBtn.addEventListener("click", closeExamTopicModal);

  const selectAllBtn = document.getElementById("btnSelectAllActiveTopics");
  if (selectAllBtn) {
    selectAllBtn.addEventListener("click", () => {
      selectedExamModuleIds = SYLLABUS_MODULES.filter(m => QUIZ_QUESTIONS.some(q => q.module_id === m.id)).map(m => m.id);
      renderExamTopicList();
    });
  }

  const deselectAllBtn = document.getElementById("btnClearTopicSelection");
  if (deselectAllBtn) {
    deselectAllBtn.addEventListener("click", () => {
      selectedExamModuleIds = [];
      renderExamTopicList();
    });
  }

  const startExamBtn = document.getElementById("btnStartExamWithSelectedTopics");
  if (startExamBtn) startExamBtn.addEventListener("click", startExamWithSelectedTopics);

  const resetExamBtn = document.getElementById("btnResetExamMode");
  if (resetExamBtn) {
    resetExamBtn.addEventListener("click", () => {
      if (confirm("Reset all answers in Exam Mode?")) {
        userExamAnswers = {};
        saveCurrentState();
        renderFullExamQuestions();
        renderTopProgressTrack();
      }
    });
  }

  const clearAllBtn = document.getElementById("clearAllAnswersBtn");
  if (clearAllBtn) clearAllBtn.addEventListener("click", clearAllAnswersPrompt);

  const resetBtn = document.getElementById("resetUserProgressBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetProgressPrompt);

  const returnPracBtn = document.getElementById("btnReturnToPractice");
  if (returnPracBtn) {
    returnPracBtn.addEventListener("click", () => {
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      isExamMode = false;
      renderApplication();
    });
  }

  const revAllBtn = document.getElementById("btnReviewAllAnswers");
  if (revAllBtn) {
    revAllBtn.addEventListener("click", () => {
      const revArea = document.getElementById("resultsDetailedReviewArea");
      if (revArea) revArea.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Difficulty Filter Pills
  const diffPills = document.querySelectorAll("#diffFilterPills .diff-pill");
  diffPills.forEach(pill => {
    pill.addEventListener("click", () => {
      activeDifficultyFilter = pill.dataset.diff || "all";
      renderMainQuestionView();
    });
  });

  // Flagged Filter Toggle (Practice Bar)
  const pillFlagToggle = document.getElementById("btnToggleFlaggedOnly");
  if (pillFlagToggle) {
    pillFlagToggle.addEventListener("click", () => {
      showFlaggedOnly = !showFlaggedOnly;
      renderMainQuestionView();
    });
  }

  // Flagged Filter Toggle (Header Action)
  const headerFlagToggle = document.getElementById("btnToggleFlaggedHeader");
  if (headerFlagToggle) {
    headerFlagToggle.addEventListener("click", () => {
      showFlaggedOnly = !showFlaggedOnly;
      if (isExamMode) {
        isExamMode = false;
        const res = document.getElementById("quizResultsScreen");
        if (res) res.classList.remove("is-active");
      }
      renderApplication();
    });
  }

  // Escape key closes topic selection modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeExamTopicModal();
    }
  });

  // Compact Sticky Progress Bar on Scroll
  window.addEventListener("scroll", () => {
    const card = document.querySelector(".progress-card");
    if (!card) return;
    if (window.scrollY > 40) {
      card.classList.add("is-compact");
    } else {
      card.classList.remove("is-compact");
    }
  }, { passive: true });
}

// Global Initialization with Guard (Guarantees single execution and prevents duplicate event listeners)
let isAppInitialized = false;

function initApp() {
  if (isAppInitialized) return;
  isAppInitialized = true;

  try {
    loadStoredState();
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      const btn = document.getElementById("themeToggleBtn");
      if (btn) btn.textContent = "☀️ Light Mode";
    }
    setupEventListeners();
    renderApplication();
    console.log(`%c[NALR Platform] Initialized successfully. Term: ${currentTermId.toUpperCase()}, Answered: ${Object.keys(userPracticeAnswers).length} Qs`, "color: #2563eb; font-weight: bold;");
  } catch (err) {
    console.error("Initialization error:", err);
  }
}

document.addEventListener("DOMContentLoaded", initApp);
if (document.readyState === "complete" || document.readyState === "interactive") {
  initApp();
}
