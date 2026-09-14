// ST-1 App Controller
// Load and sort questions sequentially across syllabus modules on the frontend
const RAW_ST1_QUESTIONS = (typeof window !== "undefined" && window.ST1_QUIZ_QUESTIONS) 
  || (typeof ST1_QUIZ_QUESTIONS !== "undefined" ? ST1_QUIZ_QUESTIONS : []);

const QUIZ_QUESTIONS = (() => {
  const syllabusMods = (typeof window !== "undefined" && window.ST1_SYLLABUS_MODULES)
    || (typeof ST1_SYLLABUS_MODULES !== "undefined" ? ST1_SYLLABUS_MODULES : []);
  
  if (!syllabusMods || syllabusMods.length === 0) return [...RAW_ST1_QUESTIONS];

  const qMap = new Map();
  RAW_ST1_QUESTIONS.forEach(q => qMap.set(q.id, q));

  const ordered = [];
  const visited = new Set();

  syllabusMods.forEach(mod => {
    (mod.q_ids || []).forEach(qid => {
      const q = qMap.get(qid);
      if (q && !visited.has(q.id)) {
        ordered.push(q);
        visited.add(q.id);
      }
    });
  });

  // Append any remainder questions if not explicitly listed in module q_ids
  RAW_ST1_QUESTIONS.forEach(q => {
    if (!visited.has(q.id)) {
      ordered.push(q);
      visited.add(q.id);
    }
  });

  return ordered;
})();


function navigateToModuleGuide(moduleId) {
  activeGuideModuleId = moduleId;
  currentViewingMode = "module_guide";
  const firstQIdx = QUIZ_QUESTIONS.findIndex(q => q.module_id === moduleId);
  if (firstQIdx !== -1) {
    currentQIndex = firstQIdx;
  }
  const modal = document.getElementById("syllabusRoadmapModal");
  if (modal) modal.classList.remove("is-active");
  renderApplication();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Main App Controller with Hardened State, Search, Modes, and Live Simulators
const STORAGE_KEY = "AGAI_ST1_FINAL_STATE_V1";
let currentQIndex = 0;
let currentViewingMode = "question"; // "question" | "module_guide"
let isExamMode = false;
let activeGuideModuleId = "st1_mod1";
let userPracticeAnswers = {};
let userExamAnswers = {};
let userReviewFlags = new Set();
let userSampleAnswers = {};
let isTheoryCollapsed = false;
let isDarkMode = false;
let searchQuery = "";

function loadStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      currentQIndex = (typeof data.currentQIndex === "number" && data.currentQIndex >= 0 && data.currentQIndex < QUIZ_QUESTIONS.length) ? data.currentQIndex : 0;
      userPracticeAnswers = (data.userPracticeAnswers && typeof data.userPracticeAnswers === "object") 
        ? data.userPracticeAnswers 
        : ((data.userExamAnswers && typeof data.userExamAnswers === "object") ? data.userExamAnswers : {});
      userExamAnswers = (data.userExamAnswersMode && typeof data.userExamAnswersMode === "object") 
        ? data.userExamAnswersMode 
        : {};
      userReviewFlags = new Set(Array.isArray(data.userReviewFlags) ? data.userReviewFlags : []);
      userSampleAnswers = (data.userSampleAnswers && typeof data.userSampleAnswers === "object") ? data.userSampleAnswers : {};
      isDarkMode = Boolean(data.isDarkMode);
    }
  } catch (e) {
    console.warn("Resetting stored state due to error", e);
    currentQIndex = 0;
    userPracticeAnswers = {};
    userExamAnswers = {};
    userReviewFlags = new Set();
    userSampleAnswers = {};
  }
}

function saveCurrentState() {
  try {
    const data = {
      currentQIndex,
      userPracticeAnswers,
      userExamAnswersMode: userExamAnswers,
      userReviewFlags: Array.from(userReviewFlags),
      userSampleAnswers,
      isDarkMode
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn("Failed to save state", e);
  }
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  const btn = document.getElementById("themeToggleBtn");
  if (btn) btn.textContent = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  saveCurrentState();
}

function toggleExamMode() {
  isExamMode = !isExamMode;
  const res = document.getElementById("quizResultsScreen");
  if (res) res.classList.remove("is-active");
  renderApplication();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetProgressPrompt() {
  if (confirm("Are you sure you want to reset all progress, bookmarks, and test scores?")) {
    localStorage.removeItem(STORAGE_KEY);
    userPracticeAnswers = {};
    userExamAnswers = {};
    userReviewFlags = new Set();
    userSampleAnswers = {};
    currentQIndex = 0;
    currentViewingMode = "question";
    isExamMode = false;
    const res = document.getElementById("quizResultsScreen");
    if (res) res.classList.remove("is-active");
    renderApplication();
  }
}

function clearAllAnswersPrompt() {
  if (isExamMode) {
    if (confirm("Clear all answers in Exam Mode?")) {
      userExamAnswers = {};
      saveCurrentState();
      renderFullExamQuestions();
      renderTopProgressTrack();
    }
  } else {
    if (confirm(`Clear all answers across all ${QUIZ_QUESTIONS.length} questions in Practice Mode?`)) {
      userPracticeAnswers = {};
      userSampleAnswers = {};
      saveCurrentState();
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      renderApplication();
    }
  }
}

function clearCurrentQuestionChoice() {
  const q = QUIZ_QUESTIONS[currentQIndex];
  if (q && userPracticeAnswers[q.id] !== undefined) {
    delete userPracticeAnswers[q.id];
    saveCurrentState();
    renderApplication();
  }
}

function isQuestionAnswerCorrect(q, ans) {
  if (ans === undefined || ans === null || !q) return false;
  if (typeof q.correct === "number") {
    return ans === q.correct || ans === (q.options && q.options[q.correct]);
  }
  if (typeof q.correct === "string") {
    return ans === q.correct || (q.options && q.options.indexOf(q.correct) === ans);
  }
  return false;
}

function getQuestionCorrectText(q) {
  if (!q) return "";
  if (typeof q.correct === "number") {
    return (q.options && q.options[q.correct]) || String(q.correct);
  }
  return String(q.correct || "");
}

function getQuestionCorrectIndex(q) {
  if (!q || !q.options) return -1;
  if (typeof q.correct === "number") return q.correct;
  return q.options.indexOf(q.correct);
}

function calcTotalScore(mode = (isExamMode ? "exam" : "practice")) {
  const answers = mode === "exam" ? userExamAnswers : userPracticeAnswers;
  return QUIZ_QUESTIONS.reduce((sum, q) => {
    return sum + (isQuestionAnswerCorrect(q, answers[q.id]) ? (q.points || 1) : 0);
  }, 0);
}

function getModuleStats(moduleId) {
  const modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === moduleId);
  const total = modQuestions.length;
  const answered = modQuestions.filter(q => userPracticeAnswers[q.id] !== undefined).length;
  const correct = modQuestions.filter(q => isQuestionAnswerCorrect(q, userPracticeAnswers[q.id])).length;
  return { total, answered, correct, pct: total ? Math.round((answered / total) * 100) : 0 };
}

// Render Sidebar Accordion with Search & Color Coding
function renderSidebarAccordion() {
  const container = document.getElementById("sidebarAccordionContainer");
  if (!container) return;
  container.innerHTML = "";

  const activeQuestion = QUIZ_QUESTIONS[currentQIndex] || QUIZ_QUESTIONS[0];
  
  // Accurately determine the active module whether viewing a question or a module foundation guide
  const currentActiveModId = currentViewingMode === "module_guide" 
    ? activeGuideModuleId 
    : (activeQuestion ? activeQuestion.module_id : "st1_mod1");

  ST1_SYLLABUS_MODULES.forEach((mod) => {
    const stats = getModuleStats(mod.id);
    const isCurrent = currentActiveModId === mod.id;

    let modQuestions = QUIZ_QUESTIONS.filter(q => q.module_id === mod.id);
    if (searchQuery) {
      modQuestions = modQuestions.filter(q => 
        (q.question && q.question.toLowerCase().includes(searchQuery)) || 
        (q.topic && q.topic.toLowerCase().includes(searchQuery))
      );
      if (modQuestions.length === 0) return;
    }

    const itemDiv = document.createElement("div");
    itemDiv.className = `module-acc-item ${isCurrent ? 'is-current-module' : ''}`;

    const btn = document.createElement("button");
    btn.className = `module-acc-btn ${isCurrent ? 'active' : ''}`;
    btn.innerHTML = `
      <div class="module-info-left">
        <span class="mod-num-tag">Module ${mod.num}</span>
        <strong class="mod-title-text">${mod.title.replace(/^Module\s+\d+[:\s-]+\s*/i, '')}</strong>
        <span class="mod-lec-text">${mod.lectures}</span>
      </div>
      <span class="module-pill-badge">${stats.answered}/${stats.total}</span>
    `;

    const qGridArea = document.createElement("div");
    qGridArea.className = "module-questions-grid";
    qGridArea.style.display = isCurrent ? "block" : "none";

    btn.addEventListener("click", () => {
      const isExpanded = qGridArea.style.display === "block";
      document.querySelectorAll(".module-questions-grid").forEach(g => g.style.display = "none");
      document.querySelectorAll(".module-acc-btn").forEach(b => b.classList.remove("active"));
      if (!isExpanded) {
        qGridArea.style.display = "block";
        btn.classList.add("active");
      }
    });

    // Module Guide Button
    const guideBtn = document.createElement("button");
    guideBtn.className = `module-guide-nav-btn ${currentViewingMode === 'module_guide' && activeGuideModuleId === mod.id ? 'active-guide' : ''}`;
    guideBtn.innerHTML = `<span>📖 Module Foundation Guide</span>`;
    guideBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      activeGuideModuleId = mod.id;
      currentViewingMode = "module_guide";
      const firstQIdx = QUIZ_QUESTIONS.findIndex(q => q.module_id === mod.id);
      if (firstQIdx !== -1) {
        currentQIndex = firstQIdx;
      }
      renderApplication();
    });
    qGridArea.appendChild(guideBtn);

    // Number Grid
    const numGrid = document.createElement("div");
    numGrid.className = "q-grid-items";

    modQuestions.forEach((q) => {
      const gIndex = QUIZ_QUESTIONS.findIndex(x => x.id === q.id);
      const qBtn = document.createElement("button");
      qBtn.className = "q-nav-btn";
      qBtn.textContent = gIndex + 1;

      if (gIndex === currentQIndex && currentViewingMode === "question") {
        qBtn.classList.add("current");
      }

      if (userPracticeAnswers[q.id] !== undefined) {
        if (isQuestionAnswerCorrect(q, userPracticeAnswers[q.id])) {
          qBtn.classList.add("answered-correct");
        } else {
          qBtn.classList.add("answered-wrong");
        }
      }

      if (userReviewFlags.has(q.id)) {
        qBtn.classList.add("flagged");
      }

      qBtn.title = `Q${gIndex + 1}: ${q.topic}`;
      qBtn.addEventListener("click", () => {
        currentQIndex = gIndex;
        currentViewingMode = "question";
        renderApplication();
      });

      numGrid.appendChild(qBtn);
    });

    qGridArea.appendChild(numGrid);
    itemDiv.appendChild(btn);
    itemDiv.appendChild(qGridArea);
    container.appendChild(itemDiv);
  });
}

// Render Top Progress Bar (Independently for Practice Mode vs Exam Mode)
function renderTopProgressTrack() {
  const total = QUIZ_QUESTIONS.length;
  const totalMarks = QUIZ_QUESTIONS.reduce((sum, q) => sum + (q.points || 1), 0);

  const lblTotalQ = document.getElementById("labelTotalQuestionsCount");
  if (lblTotalQ) lblTotalQ.textContent = total;
  const lblTotalM = document.getElementById("labelTotalMarks");
  if (lblTotalM) lblTotalM.textContent = totalMarks;

  if (isExamMode) {
    const answered = Object.keys(userExamAnswers).length;
    const pct = total ? Math.round((answered / total) * 100) : 0;
    const score = calcTotalScore("exam");

    const lblQ = document.getElementById("labelCurrentQuestionNumber");
    if (lblQ) lblQ.textContent = `📝 Exam Mode (All ${total} Questions)`;
    const lblPct = document.getElementById("labelProgressPercentage");
    if (lblPct) lblPct.textContent = `${pct}%`;
    const lblAns = document.getElementById("labelAnsweredCount");
    if (lblAns) lblAns.textContent = answered;
    const lblScore = document.getElementById("labelCurrentTotalScore");
    if (lblScore) lblScore.textContent = score;
    const track = document.getElementById("overallProgressBarTrack");
    if (track) track.style.width = `${pct}%`;
  } else {
    const answered = Object.keys(userPracticeAnswers).length;
    const pct = total ? Math.round((answered / total) * 100) : 0;
    const score = calcTotalScore("practice");

    const lblQ = document.getElementById("labelCurrentQuestionNumber");
    if (lblQ) lblQ.textContent = `Question ${currentQIndex + 1} of ${total}`;
    const lblPct = document.getElementById("labelProgressPercentage");
    if (lblPct) lblPct.textContent = `${pct}%`;
    const lblAns = document.getElementById("labelAnsweredCount");
    if (lblAns) lblAns.textContent = answered;
    const lblScore = document.getElementById("labelCurrentTotalScore");
    if (lblScore) lblScore.textContent = score;
    const track = document.getElementById("overallProgressBarTrack");
    if (track) track.style.width = `${pct}%`;
  }
}

// Render Module Masterclass Guide
function renderModuleGuideView() {
  const guide = ST1_MODULE_GUIDES[activeGuideModuleId] || ST1_MODULE_GUIDES["st1_mod1"];
  if (!guide) return;
  
  const title = document.getElementById("guideModTitle");
  if (title) title.textContent = guide.title;
  const lec = document.getElementById("guideModLec");
  if (lec) lec.textContent = guide.lectures;
  const why = document.getElementById("guideModWhyStudy");
  if (why) why.innerHTML = formatMarkdown(guide.why_study);
  const what = document.getElementById("guideModWhatIsIt");
  if (what) what.innerHTML = formatMarkdown(guide.what_is_it || "");
  const real = document.getElementById("guideModRealWorld");
  if (real) real.innerHTML = formatMarkdown(guide.real_world_use || "");

  const mechanicsList = document.getElementById("guideModMechanicsList");
  if (mechanicsList) {
    mechanicsList.innerHTML = "";
    (guide.core_mechanics || []).forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = formatMarkdown(item);
      mechanicsList.appendChild(li);
    });
  }

  const diagContainer = document.getElementById("guideModDiagramContainer");
  if (diagContainer) {
    if (guide.diagram_html) {
      diagContainer.parentElement.style.display = "block";
      diagContainer.innerHTML = guide.diagram_html;
    } else {
      diagContainer.parentElement.style.display = "none";
    }
  }

  // Render Interactive Simulators based on module
  const simContainer = document.getElementById("guideModSimContainer");
  if (simContainer && typeof Visualizers !== "undefined") {
    simContainer.innerHTML = "";
    if (activeGuideModuleId === "st1_mod1" && Visualizers.renderPerceptronDecisionSimulator) {
      Visualizers.renderPerceptronDecisionSimulator("guideModSimContainer");
    } else if (activeGuideModuleId === "st1_mod5" && Visualizers.renderActivationSaturationSimulator) {
      Visualizers.renderActivationSaturationSimulator("guideModSimContainer");
    } else if (activeGuideModuleId === "st1_mod7" && Visualizers.renderCNNFeatureMapSimulator) {
      Visualizers.renderCNNFeatureMapSimulator("guideModSimContainer");
    } else if (activeGuideModuleId === "st1_mod8" && Visualizers.renderResNetHighwaySimulator) {
      Visualizers.renderResNetHighwaySimulator("guideModSimContainer");
    } else if (activeGuideModuleId === "st1_mod11" && Visualizers.renderTransferLearningSimulator) {
      Visualizers.renderTransferLearningSimulator("guideModSimContainer");
    } else if (activeGuideModuleId === "st1_mod14" && Visualizers.renderScaledDotProductVarianceSimulator) {
      Visualizers.renderScaledDotProductVarianceSimulator("guideModSimContainer");
    }
  }

  const exampleBox = document.getElementById("guideModStepExample");
  if (exampleBox) {
    if (guide.step_by_step_example) {
      exampleBox.parentElement.style.display = "block";
      exampleBox.innerHTML = formatMarkdown(guide.step_by_step_example);
    } else {
      exampleBox.parentElement.style.display = "none";
    }
  }

  const expectedList = document.getElementById("guideModExpectedQuestionsList");
  if (expectedList) {
    expectedList.innerHTML = "";
    (guide.expected_exam_questions || []).forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = formatMarkdown(item);
      expectedList.appendChild(li);
    });
  }

  const startBtn = document.getElementById("btnStartModuleQuestions");
  if (startBtn) {
    startBtn.onclick = () => {
      const firstIdx = QUIZ_QUESTIONS.findIndex(q => q.module_id === activeGuideModuleId);
      if (firstIdx !== -1) currentQIndex = firstIdx;
      currentViewingMode = "question";
      renderApplication();
    };
  }
}

// Render Main Question View
function renderMainQuestionView() {
  const q = QUIZ_QUESTIONS[currentQIndex];
  if (!q) return;

  // Badges & Headers
  const modTitleBadge = document.getElementById("badgeModuleNumTitle");
  if (modTitleBadge) modTitleBadge.textContent = (q.module_name || "").split(":")[0];
  const lecInfo = document.getElementById("badgeLectureInfo");
  if (lecInfo) lecInfo.textContent = q.syllabus_lec || "";
  
  const diffBadge = document.getElementById("badgeDifficultyLevel");
  if (diffBadge) {
    diffBadge.textContent = q.difficulty || "Medium";
    diffBadge.className = `tag-badge tag-diff-${(q.difficulty || "medium").toLowerCase()}`;
  }

  const pointsBadge = document.getElementById("badgeMarksPoints");
  if (pointsBadge) pointsBadge.textContent = `${q.points || 1} ${(q.points || 1) === 1 ? 'Mark' : 'Marks'}`;

  const prefix = document.getElementById("topicModulePrefix");
  if (prefix) prefix.textContent = `${(q.module_name || "").split(':')[0]} • ${q.syllabus_lec || ""}`;
  const heading = document.getElementById("topicMainHeading");
  if (heading) heading.textContent = q.topic || "";

  // Theory Masterclass Render
  const th = q.theory || {};
  const thWhat = document.getElementById("theoryWhatIsItText");
  if (thWhat) thWhat.innerHTML = formatMarkdown(th.what_is_it || "");
  const thWhy = document.getElementById("theoryWhyWeNeedItText");
  if (thWhy) thWhy.innerHTML = formatMarkdown(th.why_we_need_it || "");
  const thHow = document.getElementById("theoryHowItWorksText");
  if (thHow) thHow.innerHTML = formatMarkdown(th.how_it_works || "");

  const formulaBox = document.getElementById("theoryFormulaBox");
  if (formulaBox) {
    if (th.formula) {
      formulaBox.style.display = "block";
      formulaBox.innerHTML = formatFormula(th.formula);
    } else {
      formulaBox.style.display = "none";
    }
  }

  const takeawaysList = document.getElementById("theoryTakeawaysList");
  if (takeawaysList) {
    takeawaysList.innerHTML = "";
    (th.key_takeaways || []).forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = formatMarkdown(item);
      takeawaysList.appendChild(li);
    });
  }

  // Warm-up Sample Practice Questions
  const samplesArea = document.getElementById("warmupSamplesContainer");
  if (samplesArea) {
    samplesArea.innerHTML = "";
    (q.sample_questions || []).forEach((sample, sIdx) => {
      const sKey = `${q.id}_s_${sIdx}`;
      const selectedAns = userSampleAnswers[sKey];

      const block = document.createElement("div");
      block.className = "sample-q-block";

      const title = document.createElement("div");
      title.className = "sample-q-title";
      title.innerHTML = `<strong>Concept Warm-up #${sIdx + 1}:</strong> ${formatMarkdown(sample.q)}`;
      block.appendChild(title);

      const optsStack = document.createElement("div");
      optsStack.className = "sample-options-list";
      (sample.options || []).forEach(opt => {
        const optBtn = document.createElement("button");
        optBtn.className = "sample-opt-btn";
        optBtn.textContent = opt;

        if (selectedAns !== undefined) {
          if (opt === sample.ans) optBtn.classList.add("is-correct");
          if (opt === selectedAns && selectedAns !== sample.ans) optBtn.classList.add("is-wrong");
        }

        optBtn.addEventListener("click", () => {
          userSampleAnswers[sKey] = opt;
          if (typeof sounds !== "undefined") {
            if (opt === sample.ans) sounds.playCorrect();
            else sounds.playWrong();
          }
          saveCurrentState();
          renderMainQuestionView();
        });
        optsStack.appendChild(optBtn);
      });
      block.appendChild(optsStack);

      const expBtn = document.createElement("button");
      expBtn.className = "sample-exp-btn";
      expBtn.innerHTML = `<span>💡 View Concept Explanation</span>`;

      const expBox = document.createElement("div");
      expBox.className = "sample-exp-content";
      expBox.innerHTML = `<strong>Correct Answer: ${sample.ans}</strong><br>${formatMarkdown(sample.exp)}`;

      expBtn.addEventListener("click", () => {
        expBox.classList.toggle("is-open");
      });

      block.appendChild(expBtn);
      block.appendChild(expBox);
      samplesArea.appendChild(block);
    });
  }

  // Sir's Exam MCQ
  const qText = document.getElementById("examPrimaryQuestionText");
  if (qText) qText.innerHTML = formatMarkdown(q.question || "");

  const chosenOption = userPracticeAnswers[q.id];
  const examOptsContainer = document.getElementById("examOptionsContainer");
  if (examOptsContainer) {
    examOptsContainer.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    (q.options || []).forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "exam-opt-btn";
      btn.disabled = chosenOption !== undefined;
      btn.innerHTML = `
        <span class="opt-badge-letter">${letters[idx] || (idx + 1)}</span>
        <span>${escapeHtml(opt)}</span>
      `;

      if (chosenOption !== undefined) {
        if (isQuestionAnswerCorrect(q, opt)) btn.classList.add("correct");
        if (opt === chosenOption && !isQuestionAnswerCorrect(q, chosenOption)) btn.classList.add("wrong");
      }

      btn.addEventListener("click", () => {
        userPracticeAnswers[q.id] = opt;
        if (typeof sounds !== "undefined") {
          if (isQuestionAnswerCorrect(q, opt)) sounds.playCorrect();
          else sounds.playWrong();
        }
        saveCurrentState();
        renderApplication();
      });

      examOptsContainer.appendChild(btn);
    });
  }

  // Feedback Box
  const feedbackBox = document.getElementById("examResultFeedbackBox");
  if (feedbackBox) {
    if (chosenOption !== undefined) {
      const isCorrect = isQuestionAnswerCorrect(q, chosenOption);
      const correctIdx = getQuestionCorrectIndex(q);
      const correctLetter = correctIdx !== -1 ? ["A", "B", "C", "D"][correctIdx] : "";
      feedbackBox.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'}`;
      feedbackBox.innerHTML = `
        <div class="feedback-headline">
          ${isCorrect ? '✅ Excellent! Correct Answer' : '❌ Incorrect'} — Option ${correctLetter}
        </div>
        <div>${formatMarkdown(q.explanation || "")}</div>
      `;
    } else {
      feedbackBox.className = "exam-feedback-box";
      feedbackBox.innerHTML = "";
    }
  }

  // Navigation Buttons
  const prevBtn = document.getElementById("btnPrevQuestion");
  if (prevBtn) prevBtn.disabled = currentQIndex === 0;
  
  const nextBtn = document.getElementById("btnNextQuestion");
  if (nextBtn) {
    const currentModId = q.module_id;
    const currentModQuestions = QUIZ_QUESTIONS.filter(x => x.module_id === currentModId);
    const lastQOfMod = currentModQuestions[currentModQuestions.length - 1];
    const isLastQOfModule = (lastQOfMod && q.id === lastQOfMod.id);

    if (isLastQOfModule) {
      const currentModIdx = ST1_SYLLABUS_MODULES.findIndex(m => m.id === currentModId);
      const nextModule = (currentModIdx !== -1 && currentModIdx < ST1_SYLLABUS_MODULES.length - 1) ? ST1_SYLLABUS_MODULES[currentModIdx + 1] : null;
      if (nextModule) {
        nextBtn.innerHTML = `<span>Next: Module ${nextModule.num} Guide 📖 →</span>`;
        nextBtn.title = `Open Module ${nextModule.num} Foundation Guide`;
      } else {
        nextBtn.innerHTML = `<span>Finish & View Results 🏁</span>`;
        nextBtn.title = `Finish Revision and View Results`;
      }
    } else {
      if (currentQIndex === QUIZ_QUESTIONS.length - 1) {
        nextBtn.innerHTML = `<span>Finish & View Results 🏁</span>`;
        nextBtn.title = `Finish Revision and View Results`;
      } else {
        nextBtn.innerHTML = `<span>Next Question →</span>`;
        nextBtn.title = `Go to next question`;
      }
    }
  }

  const flagBtn = document.getElementById("btnFlagQuestion");
  if (flagBtn) {
    flagBtn.classList.toggle("is-flagged", userReviewFlags.has(q.id));
    flagBtn.textContent = userReviewFlags.has(q.id) ? "★ Marked for Review" : "☆ Mark for Review";
  }
}

// Render Full Roadmap Modal with Executive Timeline UI
function renderRoadmapModal() {
  const container = document.getElementById("roadmapModulesTimeline");
  if (!container) return;
  container.innerHTML = "";

  ST1_SYLLABUS_MODULES.forEach((mod, idx) => {
    const stats = getModuleStats(mod.id);
    const isDone = stats.answered === stats.total && stats.total > 0;

    const card = document.createElement("div");
    card.className = `roadmap-timeline-node ${isDone ? 'is-complete' : ''}`;
    
    let topicsListHtml = "";
    (mod.topics || []).forEach(t => {
      topicsListHtml += `
        <div class="roadmap-topic-chip">
          <span class="roadmap-topic-bullet">🔹</span>
          <span class="roadmap-topic-title">${t}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="roadmap-timeline-marker">
        <div class="roadmap-marker-badge">${isDone ? '✓' : mod.num}</div>
        ${idx < ST1_SYLLABUS_MODULES.length - 1 ? '<div class="roadmap-vertical-line"></div>' : ''}
      </div>

      <div class="roadmap-node-content">
        <div class="roadmap-card-top">
          <div>
            <div class="roadmap-node-subtitle">${mod.lectures}</div>
            <h3 class="roadmap-node-heading">${mod.title}</h3>
            <p class="roadmap-node-desc">${mod.desc}</p>
          </div>
          <div class="roadmap-action-box">
            <div class="roadmap-progress-badge">
              <span class="roadmap-progress-text">${stats.answered} / ${stats.total} Answered</span>
              <div class="roadmap-mini-track">
                <div class="roadmap-mini-fill" style="width: ${stats.pct}%;"></div>
              </div>
              <span class="roadmap-pct-text">${stats.pct}%</span>
            </div>
            <button class="btn-jump-module-styled" data-mod="${mod.id}">
              <span>Open Guide</span> →
            </button>
          </div>
        </div>

        <div class="roadmap-topics-container">
          <div class="roadmap-topics-header">
            <span>📚 Key Topics in this Module:</span>
          </div>
          <div class="roadmap-topics-grid">
            ${topicsListHtml}
          </div>
        </div>
      </div>
    `;

    const jumpBtn = card.querySelector(".btn-jump-module-styled");
    if (jumpBtn) {
      jumpBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        activeGuideModuleId = mod.id;
        currentViewingMode = "module_guide";
        const firstQIdx = QUIZ_QUESTIONS.findIndex(q => q.module_id === mod.id);
        if (firstQIdx !== -1) {
          currentQIndex = firstQIdx;
        }
        const modal = document.getElementById("syllabusRoadmapModal");
        if (modal) modal.classList.remove("is-active");
        renderApplication();
      });
    }

    container.appendChild(card);
  });
}

function showFinalResultsScreen() {
  saveCurrentState();
  const answers = isExamMode ? userExamAnswers : userPracticeAnswers;
  const total = QUIZ_QUESTIONS.length;
  const answered = Object.keys(answers).length;
  const correct = QUIZ_QUESTIONS.filter(q => isQuestionAnswerCorrect(q, answers[q.id])).length;
  const wrong = answered - correct;
  const unanswered = total - answered;
  const score = calcTotalScore(isExamMode ? "exam" : "practice");
  const totalMarks = QUIZ_QUESTIONS.reduce((sum, q) => sum + (q.points || 1), 0);
  const pct = totalMarks ? Math.round((score / totalMarks) * 100) : 0;

  const practiceArea = document.getElementById("quizPracticeArea");
  if (practiceArea) practiceArea.style.display = "none";
  const examArea = document.getElementById("fullExamModeArea");
  if (examArea) examArea.style.display = "none";
  
  const resCard = document.getElementById("quizResultsScreen");
  if (resCard) resCard.classList.add("is-active");

  const totalPctEl = document.getElementById("resTotalPercent");
  if (totalPctEl) totalPctEl.textContent = `${pct}%`;
  const marksEl = document.getElementById("resMarksTotal");
  if (marksEl) marksEl.textContent = `${score} / ${totalMarks}`;
  const corEl = document.getElementById("resCorrectTotal");
  if (corEl) corEl.textContent = correct;
  const wrgEl = document.getElementById("resWrongTotal");
  if (wrgEl) wrgEl.textContent = wrong;
  const unEl = document.getElementById("resUnansweredTotal");
  if (unEl) unEl.textContent = unanswered;

  let feedback = "";
  if (pct >= 85) {
    feedback = "🌟 Outstanding! You have thoroughly mastered all ST-1 Deep Learning & Computer Vision topics!";
    if (typeof launchCelebrationConfetti === "function") launchCelebrationConfetti();
  } else if (pct >= 70) {
    feedback = "👍 Great performance! Review your missed questions below to aim for full marks in the exam.";
    if (typeof launchCelebrationConfetti === "function") launchCelebrationConfetti();
  } else if (pct >= 50) {
    feedback = "📖 Good effort! Revisit the Topic Masterclass theory sections and try the warm-up examples.";
  } else {
    feedback = "💡 Keep revising! Go through the modules step-by-step to solidify the fundamentals.";
  }
  const evalEl = document.getElementById("resEvaluationMessage");
  if (evalEl) evalEl.textContent = feedback;

  const listArea = document.getElementById("resultsDetailedList");
  if (listArea) {
    listArea.innerHTML = "";
    QUIZ_QUESTIONS.forEach((q, idx) => {
      const chosen = answers[q.id];
      const isCorrect = isQuestionAnswerCorrect(q, chosen);
      const item = document.createElement("div");
      item.style.border = "1px solid var(--border-color, #cbd5e1)";
      item.style.borderLeft = isCorrect ? "5px solid #22c55e" : (chosen ? "5px solid #ef4444" : "5px solid #94a3b8");
      item.style.borderRadius = "10px";
      item.style.padding = "14px 16px";
      item.style.marginBottom = "12px";
      item.style.background = "var(--card-bg, #ffffff)";
      item.innerHTML = `
        <div style="font-size:12px; color:var(--ink-muted); font-weight:800; margin-bottom:4px;">
          Q${idx + 1} • ${(q.module_name || "").split(':')[0]} • ${q.topic || ""}
        </div>
        <div style="font-weight:800; font-size:15px; margin-bottom:6px; color:var(--ink-primary);">${formatMarkdown(q.question || "")}</div>
        <div style="font-size:13.5px; margin-bottom:4px;">
          <strong>Your Answer:</strong> <span style="color:${isCorrect ? '#15803d' : '#b91c1c'}; font-weight:700;">${chosen ? escapeHtml(chosen) : '<em>Unanswered</em>'}</span>
        </div>
        <div style="font-size:13.5px; color:#15803d; margin-bottom:4px;">
          <strong>Correct Answer:</strong> <strong>${escapeHtml(getQuestionCorrectText(q))}</strong>
        </div>
        <div style="font-size:13px; color:var(--ink-secondary); background:var(--card-sub-bg, #f1f5f9); padding:8px 12px; border-radius:6px; margin-top:6px;">
          ${formatMarkdown(q.explanation || "")}
        </div>
      `;
      listArea.appendChild(item);
    });
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function extractBraceGroup(str, startIndex) {
  if (startIndex >= str.length || str[startIndex] !== '{') return null;
  let depth = 1;
  let i = startIndex + 1;
  while (i < str.length && depth > 0) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') depth--;
    i++;
  }
  if (depth === 0) {
    return { content: str.slice(startIndex + 1, i - 1), endIndex: i };
  }
  return null;
}

function cleanMathFormulas(text) {
  if (!text) return "";
  let s = String(text);

  // Normalize double backslashes before LaTeX commands
  s = s.replace(/\\\\([a-zA-Z,;:!])/g, (m, c) => '\\' + c);

  // Math mode markers
  s = s.replace(/\\\[([\s\S]*?)\\\]/g, '$1');
  s = s.replace(/\\\(([\s\S]*?)\\\)/g, '$1');

  // Specific common identifier typos/flattened names
  s = s.replace(/\bytarget\b/g, 'y_target');
  s = s.replace(/\bnin\b/g, 'n_in');
  s = s.replace(/\bnout\b/g, 'n_out');
  s = s.replace(/\\hat\{y\}|y_hat\b|\byhat\b/g, 'ŷ');
  s = s.replace(/\\hat\{w\}|w_hat\b|\bwhat\b/g, 'ŵ');
  s = s.replace(/\\hat\{x\}|x_hat\b|\bxhat\b/g, 'x̂');

  // Spacing
  s = s.replace(/\\quad\b/g, '&nbsp;&nbsp;');
  s = s.replace(/\\qquad\b/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
  s = s.replace(/\\([,;:!])/g, ' ');

  // Balanced fraction extraction
  let fracIdx;
  while ((fracIdx = s.indexOf('\\frac{')) !== -1) {
    const num = extractBraceGroup(s, fracIdx + 5);
    if (!num) break;
    const den = extractBraceGroup(s, num.endIndex);
    if (!den) break;
    const cleanNum = cleanMathFormulas(num.content).trim();
    const cleanDen = cleanMathFormulas(den.content).trim();
    s = s.slice(0, fracIdx) + `(${cleanNum} / ${cleanDen})` + s.slice(den.endIndex);
  }

  // Balanced square root extraction
  let sqrtIdx;
  while ((sqrtIdx = s.indexOf('\\sqrt{')) !== -1) {
    const inner = extractBraceGroup(s, sqrtIdx + 5);
    if (!inner) break;
    const cleanInner = cleanMathFormulas(inner.content).trim();
    s = s.slice(0, sqrtIdx) + `√(${cleanInner})` + s.slice(inner.endIndex);
  }
  s = s.replace(/\\sqrt\b/g, '√');
  s = s.replace(/√\(\(([^()]+)\)\)/g, '√($1)');

  // Font/style wrappers with balanced braces
  ['\\text', '\\mathrm', '\\mathit', '\\mathbf', '\\boldsymbol', '\\pmb', '\\operatorname', '\\mathbb'].forEach(cmd => {
    let idx;
    while ((idx = s.indexOf(cmd + '{')) !== -1) {
      const g = extractBraceGroup(s, idx + cmd.length);
      if (!g) break;
      s = s.slice(0, idx) + cleanMathFormulas(g.content) + s.slice(g.endIndex);
    }
  });
  // Unbraced single token font wrappers like \mathbf w or \mathbf x
  s = s.replace(/\\(mathbf|boldsymbol|pmb|mathrm|mathit)\s+([a-zA-Z0-9])/g, '$2');

  // Number sets
  s = s.replace(/\\mathbb\{R\}|ℝ/g, 'ℝ');
  s = s.replace(/\\mathbb\{C\}|ℂ/g, 'ℂ');
  s = s.replace(/\\mathbb\{N\}|ℕ/g, 'ℕ');
  s = s.replace(/\\mathbb\{Z\}|ℤ/g, 'ℤ');

  // Calligraphic
  s = s.replace(/\\mathcal\{L\}/g, 'L');
  s = s.replace(/\\mathcal\{N\}/g, 'N');
  s = s.replace(/\\mathcal\{U\}/g, 'Uniform');
  s = s.replace(/\\mathcal\{([^}]+)\}/g, '$1');

  // Delimiters
  s = s.replace(/\\left\\lfloor/g, '⌊').replace(/\\right\\rfloor/g, '⌋');
  s = s.replace(/\\left\\lceil/g, '⌈').replace(/\\right\\rceil/g, '⌉');
  s = s.replace(/\\left\(/g, '(').replace(/\\right\)/g, ')');
  s = s.replace(/\\left\[/g, '[').replace(/\\right\]/g, ']');
  s = s.replace(/\\left\\{/g, '{').replace(/\\right\\}/g, '}');
  s = s.replace(/\\left\|/g, '|').replace(/\\right\|/g, '|');
  s = s.replace(/\\left\./g, '').replace(/\\right\./g, '');
  s = s.replace(/\\[bB]igg?[(\[{|]/g, (m) => m.slice(-1));
  s = s.replace(/\\[bB]igg?[)\]}|]/g, (m) => m.slice(-1));
  s = s.replace(/\\[bB]igg?\b/g, '');

  // Accents
  s = s.replace(/\\hat\{([^}]+)\}/g, '$1̂');
  s = s.replace(/\\bar\{([^}]+)\}/g, '$1̄');
  s = s.replace(/\\tilde\{([^}]+)\}/g, '$1̃');
  s = s.replace(/\\vec\{([^}]+)\}/g, '$1⃗');

  // Greek letters
  s = s.replace(/\\alpha(?=[^a-zA-Z]|$)/g, 'α');
  s = s.replace(/\\beta(?=[^a-zA-Z]|$)/g, 'β');
  s = s.replace(/\\gamma(?=[^a-zA-Z]|$)/g, 'γ');
  s = s.replace(/\\Delta(?=[^a-zA-Z]|$)/g, 'Δ');
  s = s.replace(/\\delta(?=[^a-zA-Z]|$)/g, 'δ');
  s = s.replace(/\\epsilon(?=[^a-zA-Z]|$)/g, 'ε');
  s = s.replace(/\\zeta(?=[^a-zA-Z]|$)/g, 'ζ');
  s = s.replace(/\\eta(?=[^a-zA-Z]|$)/g, 'η');
  s = s.replace(/\\theta(?=[^a-zA-Z]|$)/g, 'θ');
  s = s.replace(/\\Theta(?=[^a-zA-Z]|$)/g, 'Θ');
  s = s.replace(/\\iota(?=[^a-zA-Z]|$)/g, 'ι');
  s = s.replace(/\\kappa(?=[^a-zA-Z]|$)/g, 'κ');
  s = s.replace(/\\lambda(?=[^a-zA-Z]|$)/g, 'λ');
  s = s.replace(/\\Lambda(?=[^a-zA-Z]|$)/g, 'Λ');
  s = s.replace(/\\mu(?=[^a-zA-Z]|$)/g, 'μ');
  s = s.replace(/\\nu(?=[^a-zA-Z]|$)/g, 'ν');
  s = s.replace(/\\xi(?=[^a-zA-Z]|$)/g, 'ξ');
  s = s.replace(/\\pi(?=[^a-zA-Z]|$)/g, 'π');
  s = s.replace(/\\Pi(?=[^a-zA-Z]|$)/g, 'Π');
  s = s.replace(/\\rho(?=[^a-zA-Z]|$)/g, 'ρ');
  s = s.replace(/\\sigma(?=[^a-zA-Z]|$)/g, 'σ');
  s = s.replace(/\\Sigma(?=[^a-zA-Z]|$)/g, 'Σ');
  s = s.replace(/\\tau(?=[^a-zA-Z]|$)/g, 'τ');
  s = s.replace(/\\phi(?=[^a-zA-Z]|$)/g, 'φ');
  s = s.replace(/\\Phi(?=[^a-zA-Z]|$)/g, 'Φ');
  s = s.replace(/\\chi(?=[^a-zA-Z]|$)/g, 'χ');
  s = s.replace(/\\psi(?=[^a-zA-Z]|$)/g, 'ψ');
  s = s.replace(/\\Psi(?=[^a-zA-Z]|$)/g, 'Ψ');
  s = s.replace(/\\omega(?=[^a-zA-Z]|$)/g, 'ω');
  s = s.replace(/\\Omega(?=[^a-zA-Z]|$)/g, 'Ω');

  // Operators and symbols
  s = s.replace(/\\nabla(?=[^a-zA-Z]|$)/g, '∇');
  s = s.replace(/\\partial(?=[^a-zA-Z]|$)/g, '∂');
  s = s.replace(/\\infty(?=[^a-zA-Z]|$)/g, '∞');
  s = s.replace(/\\sim(?=[^a-zA-Z]|$)/g, '~');
  s = s.replace(/\\approx(?=[^a-zA-Z]|$)/g, '≈');
  s = s.replace(/\\ne(?=[^a-zA-Z]|$)|\\neq(?=[^a-zA-Z]|$)/g, '≠');
  s = s.replace(/\\le(?=[^a-zA-Z]|$)|\\leq(?=[^a-zA-Z]|$)/g, '≤');
  s = s.replace(/\\ge(?=[^a-zA-Z]|$)|\\geq(?=[^a-zA-Z]|$)/g, '≥');
  s = s.replace(/\\in(?=[^a-zA-Z]|$)/g, '∈');
  s = s.replace(/\\notin(?=[^a-zA-Z]|$)/g, '∉');
  s = s.replace(/\\subset(?=[^a-zA-Z]|$)/g, '⊂');
  s = s.replace(/\\subseteq(?=[^a-zA-Z]|$)/g, '⊆');
  s = s.replace(/\\forall(?=[^a-zA-Z]|$)/g, '∀');
  s = s.replace(/\\exists(?=[^a-zA-Z]|$)/g, '∃');
  s = s.replace(/\\times(?=[^a-zA-Z]|$)/g, '×');
  s = s.replace(/\\cdot(?=[^a-zA-Z]|$)/g, '·');
  s = s.replace(/\\odot(?=[^a-zA-Z]|$)/g, '⊙');
  s = s.replace(/\\otimes(?=[^a-zA-Z]|$)/g, '⊗');
  s = s.replace(/\\oplus(?=[^a-zA-Z]|$)/g, '⊕');
  s = s.replace(/\\circ(?=[^a-zA-Z]|$)/g, '∘');
  s = s.replace(/\\sum(?=[^a-zA-Z]|$)/g, 'Σ');
  s = s.replace(/\\prod(?=[^a-zA-Z]|$)/g, '∏');
  s = s.replace(/\\pm(?=[^a-zA-Z]|$)/g, '±');
  s = s.replace(/\\to(?=[^a-zA-Z]|$)|\\rightarrow(?=[^a-zA-Z]|$)/g, '→');
  s = s.replace(/\\leftarrow(?=[^a-zA-Z]|$)/g, '←');
  s = s.replace(/\\implies(?=[^a-zA-Z]|$)|\\Rightarrow(?=[^a-zA-Z]|$)/g, '⇒');
  s = s.replace(/\\iff(?=[^a-zA-Z]|$)|\\Leftrightarrow(?=[^a-zA-Z]|$)/g, '⇔');
  s = s.replace(/\\longrightarrow(?=[^a-zA-Z]|$)/g, '──►');
  s = s.replace(/\\dots(?=[^a-zA-Z]|$)|\\ldots(?=[^a-zA-Z]|$)|\\cdots(?=[^a-zA-Z]|$)/g, '...');
  s = s.replace(/\\mid(?=[^a-zA-Z]|$)/g, '|');

  // Bracket superscripts like ^[l] -> <sup>(l)</sup>
  s = s.replace(/\^\[([^\]]+)\]/g, '<sup>($1)</sup>');
  // Curly superscripts and subscripts
  s = s.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
  s = s.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');

  return s;
}

// Utility formatting
function formatFormula(text) {
  return cleanMathFormulas(text);
}

function formatMarkdown(text) {
  if (!text) return "";
  let s = String(text);

  // Preserve multiline fenced code blocks ```python ... ```
  const fencedBlocks = [];
  s = s.replace(/```(?:[a-zA-Z0-9_-]+)?\s*[\r\n]+([\s\S]*?)```/g, (m, code) => {
    fencedBlocks.push(code.trim());
    return `___FENCED_BLOCK_${fencedBlocks.length - 1}___`;
  });

  // Preserve inline code blocks with tokens
  const codeBlocks = [];
  s = s.replace(/`([^`]+)`/g, (m, code) => {
    codeBlocks.push(code);
    return `___CODE_BLOCK_${codeBlocks.length - 1}___`;
  });

  // Run comprehensive math and LaTeX cleaning
  s = cleanMathFormulas(s);

  // Restore inline code blocks with styled HTML
  s = s.replace(/___CODE_BLOCK_(\d+)___/g, (m, idx) => {
    const code = codeBlocks[Number(idx)];
    return `<code style="background:rgba(99,102,241,0.12); color:var(--primary-blue,#4f46e5); padding:2px 6px; border-radius:4px; font-family:'DM Mono',monospace; font-size:0.92em; font-weight:600;">${escapeHtml(code)}</code>`;
  });

  // Restore fenced code blocks with beautiful syntax cards
  s = s.replace(/___FENCED_BLOCK_(\d+)___/g, (m, idx) => {
    const code = fencedBlocks[Number(idx)];
    return `<pre style="background:rgba(15,23,42,0.95); color:#38bdf8; padding:12px 16px; border-radius:8px; font-family:'DM Mono',monospace; font-size:0.90em; overflow-x:auto; margin:8px 0; border:1px solid rgba(56,189,248,0.2); line-height:1.5;"><code>${escapeHtml(code)}</code></pre>`;
  });

  // Bold
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Italic
  s = s.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Convert newlines to <br>
  s = s.replace(/\n/g, '<br>');

  return s;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>'"]/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;'
  }[c]));
}

// Full Continuous Exam Renderer (All 65 Questions in a Row)
function renderFullExamQuestions() {
  const stack = document.getElementById("fullExamQuestionsStack");
  if (!stack) return;
  stack.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  QUIZ_QUESTIONS.forEach((q, idx) => {
    const chosenOption = userExamAnswers[q.id];
    const isAnswered = chosenOption !== undefined;
    const isCorrect = isQuestionAnswerCorrect(q, chosenOption);

    const card = document.createElement("div");
    card.className = `full-exam-item-card ${isAnswered ? (isCorrect ? 'is-answered-correct' : 'is-answered-wrong') : ''}`;
    card.id = `exam-q-card-${q.id}`;

    // Header Row
    const headerDiv = document.createElement("div");
    headerDiv.className = "full-exam-item-header";
    headerDiv.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
        <span class="full-exam-q-num">Question ${idx + 1} of ${QUIZ_QUESTIONS.length}</span>
        <span class="tag-badge tag-module">${(q.module_name || "").split(":")[0]}</span>
        <span class="tag-badge tag-diff-${(q.difficulty || "medium").toLowerCase()}">${q.difficulty || "Medium"}</span>
        <span class="tag-badge tag-points">${q.points || 1} ${(q.points || 1) === 1 ? 'Mark' : 'Marks'}</span>
      </div>
      <span class="full-exam-topic">${escapeHtml(q.topic || "")}</span>
    `;
    card.appendChild(headerDiv);

    // Question Text
    const qText = document.createElement("h3");
    qText.className = "full-exam-q-text";
    qText.innerHTML = formatMarkdown(q.question || "");
    card.appendChild(qText);

    // Options Stack
    const optsStack = document.createElement("div");
    optsStack.className = "exam-options-stack";

    (q.options || []).forEach((opt, optIdx) => {
      const optBtn = document.createElement("button");
      optBtn.className = "exam-opt-btn";
      optBtn.disabled = isAnswered;
      optBtn.innerHTML = `
        <span class="opt-badge-letter">${letters[optIdx] || (optIdx + 1)}</span>
        <span>${escapeHtml(opt)}</span>
      `;

      if (isAnswered) {
        if (isQuestionAnswerCorrect(q, opt)) optBtn.classList.add("correct");
        if (opt === chosenOption && !isQuestionAnswerCorrect(q, chosenOption)) optBtn.classList.add("wrong");
      }

      optBtn.addEventListener("click", () => {
        userExamAnswers[q.id] = opt;
        if (typeof sounds !== "undefined") {
          if (isQuestionAnswerCorrect(q, opt)) sounds.playCorrect();
          else sounds.playWrong();
        }
        saveCurrentState();
        renderFullExamQuestions();
        renderTopProgressTrack();
      });

      optsStack.appendChild(optBtn);
    });
    card.appendChild(optsStack);

    // Instant Inline Explanation Feedback Box
    if (isAnswered) {
      const correctIdx = getQuestionCorrectIndex(q);
      const correctLetter = correctIdx !== -1 ? letters[correctIdx] : "";
      const fb = document.createElement("div");
      fb.className = `exam-feedback-box is-shown ${isCorrect ? 'is-good' : 'is-bad'}`;
      fb.style.display = "block";
      fb.style.marginTop = "16px";
      fb.innerHTML = `
        <div class="feedback-headline">
          ${isCorrect ? '✅ Excellent! Correct Answer' : '❌ Incorrect'} — Option ${correctLetter}
        </div>
        <div>${formatMarkdown(q.explanation || "")}</div>
      `;
      card.appendChild(fb);
    }

    stack.appendChild(card);
  });
}

function renderApplication() {
  saveCurrentState();
  renderTopProgressTrack();
  renderSidebarAccordion();

  const guideArea = document.getElementById("moduleMasterclassViewArea");
  const qArea = document.getElementById("questionModeViewArea");
  const pracArea = document.getElementById("quizPracticeArea");
  const fullExamArea = document.getElementById("fullExamModeArea");
  const examBtn = document.getElementById("toggleExamModeBtn");

  if (isExamMode) {
    if (pracArea) pracArea.style.display = "none";
    if (fullExamArea) fullExamArea.style.display = "flex";
    if (examBtn) examBtn.textContent = "← Practice Mode";
    renderFullExamQuestions();
    return;
  } else {
    if (fullExamArea) fullExamArea.style.display = "none";
    if (pracArea) pracArea.style.display = "grid";
    if (examBtn) examBtn.textContent = "📝 Exam";
  }

  if (currentViewingMode === "module_guide") {
    if (guideArea) guideArea.classList.add("is-visible");
    if (qArea) qArea.style.display = "none";
    renderModuleGuideView();
  } else {
    if (guideArea) guideArea.classList.remove("is-visible");
    if (qArea) qArea.style.display = "block";
    renderMainQuestionView();
  }
}

// Event Listeners Registration
function setupEventListeners() {
  const examToggleBtn = document.getElementById("toggleExamModeBtn");
  if (examToggleBtn) examToggleBtn.addEventListener("click", toggleExamMode);

  const exitExamBtn = document.getElementById("btnExitExamMode");
  if (exitExamBtn) exitExamBtn.addEventListener("click", toggleExamMode);

  const resetExamBtn = document.getElementById("btnResetExamMode");
  if (resetExamBtn) {
    resetExamBtn.addEventListener("click", () => {
      if (confirm("Reset all answers and score in Exam Mode?")) {
        userExamAnswers = {};
        saveCurrentState();
        renderFullExamQuestions();
        renderTopProgressTrack();
      }
    });
  }

  const prevBtn = document.getElementById("btnPrevQuestion");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentQIndex > 0) {
        currentQIndex--;
        currentViewingMode = "question";
        renderApplication();
      }
    });
  }

  const nextBtn = document.getElementById("btnNextQuestion");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const q = QUIZ_QUESTIONS[currentQIndex];
      if (q) {
        const currentModId = q.module_id;
        const currentModQuestions = QUIZ_QUESTIONS.filter(x => x.module_id === currentModId);
        const lastQOfMod = currentModQuestions[currentModQuestions.length - 1];
        const isLastQOfModule = (lastQOfMod && q.id === lastQOfMod.id);

        if (isLastQOfModule) {
          const currentModIdx = ST1_SYLLABUS_MODULES.findIndex(m => m.id === currentModId);
          const nextModule = (currentModIdx !== -1 && currentModIdx < ST1_SYLLABUS_MODULES.length - 1) ? ST1_SYLLABUS_MODULES[currentModIdx + 1] : null;
          if (nextModule) {
            navigateToModuleGuide(nextModule.id);
            return;
          } else {
            showFinalResultsScreen();
            return;
          }
        }
      }

      if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
        currentQIndex++;
        currentViewingMode = "question";
        renderApplication();
      } else {
        showFinalResultsScreen();
      }
    });
  }

  const clearSingleBtn = document.getElementById("btnClearCurrentQChoice");
  if (clearSingleBtn) clearSingleBtn.addEventListener("click", clearCurrentQuestionChoice);

  const clearAllBtn = document.getElementById("clearAllAnswersBtn");
  if (clearAllBtn) clearAllBtn.addEventListener("click", clearAllAnswersPrompt);

  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const searchInp = document.getElementById("sidebarSearchInput");
  if (searchInp) {
    searchInp.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderSidebarAccordion();
    });
  }

  const flagBtn = document.getElementById("btnFlagQuestion");
  if (flagBtn) {
    flagBtn.addEventListener("click", () => {
      const q = QUIZ_QUESTIONS[currentQIndex];
      if (q) {
        if (userReviewFlags.has(q.id)) userReviewFlags.delete(q.id);
        else userReviewFlags.add(q.id);
        renderApplication();
      }
    });
  }

  const theoryToggle = document.getElementById("theoryCollapseToggleBtn");
  if (theoryToggle) {
    theoryToggle.addEventListener("click", () => {
      const body = document.getElementById("theoryFullContentContainer");
      const hint = document.getElementById("theoryExpandCollapseHint");
      isTheoryCollapsed = !isTheoryCollapsed;
      if (body) body.style.display = isTheoryCollapsed ? "none" : "flex";
      if (hint) hint.textContent = isTheoryCollapsed ? "▲ Expand" : "▼ Collapse";
    });
  }

  const openRoadmap = document.getElementById("openRoadmapModalBtn");
  if (openRoadmap) {
    openRoadmap.addEventListener("click", () => {
      renderRoadmapModal();
      const modal = document.getElementById("syllabusRoadmapModal");
      if (modal) modal.classList.add("is-active");
    });
  }

  const closeRoadmap = document.getElementById("btnCloseRoadmapModal");
  if (closeRoadmap) {
    closeRoadmap.addEventListener("click", () => {
      const modal = document.getElementById("syllabusRoadmapModal");
      if (modal) modal.classList.remove("is-active");
    });
  }

  const roadmapModal = document.getElementById("syllabusRoadmapModal");
  if (roadmapModal) {
    roadmapModal.addEventListener("click", (e) => {
      if (e.target.id === "syllabusRoadmapModal") {
        roadmapModal.classList.remove("is-active");
      }
    });
  }

  const resetBtn = document.getElementById("resetUserProgressBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetProgressPrompt);

  const returnPracBtn = document.getElementById("btnReturnToPractice");
  if (returnPracBtn) {
    returnPracBtn.addEventListener("click", () => {
      const res = document.getElementById("quizResultsScreen");
      if (res) res.classList.remove("is-active");
      const prac = document.getElementById("quizPracticeArea");
      if (prac) prac.style.display = "grid";
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

  // ST1, ST2, End Term Session Navigation
  const btnST1 = document.getElementById("btnST1");
  const btnST2 = document.getElementById("btnST2");
  const btnEndTerm = document.getElementById("btnEndTerm");

  if (btnST1) {
    btnST1.classList.add("active");
    btnST1.addEventListener("click", () => {
      window.location.href = "st1.html";
    });
  }
  if (btnST2) {
    btnST2.classList.remove("active");
    btnST2.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
  if (btnEndTerm) {
    btnEndTerm.classList.remove("active");
    btnEndTerm.addEventListener("click", () => {
      window.location.href = "endterm.html";
    });
  }

  // Arrow Keys Navigation
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    if (e.key === "ArrowRight") {
      const q = QUIZ_QUESTIONS[currentQIndex];
      if (q) {
        const currentModId = q.module_id;
        const currentModQuestions = QUIZ_QUESTIONS.filter(x => x.module_id === currentModId);
        const lastQOfMod = currentModQuestions[currentModQuestions.length - 1];
        const isLastQOfModule = (lastQOfMod && q.id === lastQOfMod.id);

        if (isLastQOfModule) {
          const currentModIdx = ST1_SYLLABUS_MODULES.findIndex(m => m.id === currentModId);
          const nextModule = (currentModIdx !== -1 && currentModIdx < ST1_SYLLABUS_MODULES.length - 1) ? ST1_SYLLABUS_MODULES[currentModIdx + 1] : null;
          if (nextModule) {
            navigateToModuleGuide(nextModule.id);
            return;
          }
        }
      }
      if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
        currentQIndex++;
        currentViewingMode = "question";
        renderApplication();
      }
    } else if (e.key === "ArrowLeft") {
      if (currentQIndex > 0) {
        currentQIndex--;
        currentViewingMode = "question";
        renderApplication();
      }
    }
  });
}

// Global Initialization
document.addEventListener("DOMContentLoaded", () => {
  try {
    loadStoredState();
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      const btn = document.getElementById("themeToggleBtn");
      if (btn) btn.textContent = "☀️ Light Mode";
    }
    setupEventListeners();
    renderApplication();
  } catch (err) {
    console.error("Initialization error:", err);
  }
});

// Fallback direct execution if DOM is already loaded
if (document.readyState === "complete" || document.readyState === "interactive") {
  try {
    loadStoredState();
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      const btn = document.getElementById("themeToggleBtn");
      if (btn) btn.textContent = "☀️ Light Mode";
    }
    setupEventListeners();
    renderApplication();
  } catch (err) {
    console.error("Fallback init error:", err);
  }
}
