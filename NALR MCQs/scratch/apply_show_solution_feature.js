const fs = require('fs');

console.log("=== APPLYING SHOW SOLUTION BUTTON FEATURE ===");

// 1. Update components.css
console.log("Updating components.css...");
let cssContent = fs.readFileSync('components.css', 'utf8');

// A. Add .btn-sol-toggle-q to button group reset
cssContent = cssContent.replace(
  '.btn-flag-single-q,.btn-clear-choice,.btn-copy-q{',
  '.btn-flag-single-q,.btn-clear-choice,.btn-copy-q,.btn-sol-toggle-q{'
);

// B. Add .full-exam-feedback-box to accordion collapsed rules
cssContent = cssContent.replace(
  '.exam-feedback-box.is-collapsed .sol-feedback-body {',
  '.exam-feedback-box.is-collapsed .sol-feedback-body,\n.full-exam-feedback-box.is-collapsed .sol-feedback-body {'
);
cssContent = cssContent.replace(
  '.exam-feedback-box.is-collapsed .sol-feedback-inner {',
  '.exam-feedback-box.is-collapsed .sol-feedback-inner,\n.full-exam-feedback-box.is-collapsed .sol-feedback-inner {'
);

// C. Append dedicated styling for .btn-sol-toggle-q
const solBtnCss = `

/* ==========================================================================
   Show / Hide Solution Button (Alongside Copy & ChatGPT)
   ========================================================================== */
.btn-sol-toggle-q {
  transition: background-color var(--duration-fast, 160ms) ease,
              color var(--duration-fast, 160ms) ease,
              border-color var(--duration-fast, 160ms) ease,
              transform var(--duration-micro, 110ms) var(--ease-out, cubic-bezier(0.23, 1, 0.32, 1)),
              box-shadow var(--duration-fast, 160ms) ease;
}

.btn-sol-toggle-q:hover {
  background: rgba(245, 158, 11, 0.08);
  border-color: rgba(245, 158, 11, 0.45);
  color: #b45309;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.15);
}

.btn-sol-toggle-q:active {
  transform: scale(0.96);
  transition-duration: var(--duration-micro, 110ms);
}

/* Active / Expanded state (when solution is visible -> Hide Solution) */
.btn-sol-toggle-q.is-expanded-state {
  background: rgba(245, 158, 11, 0.14) !important;
  border-color: var(--amber-gold, #f59e0b) !important;
  color: #b45309 !important;
  font-weight: 800 !important;
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.2) !important;
}

/* Dark Theme Parity */
[data-theme="dark"] .btn-sol-toggle-q:hover {
  background: rgba(245, 158, 11, 0.18);
  border-color: #f59e0b;
  color: #fbbf24;
  box-shadow: 0 2px 10px rgba(245, 158, 11, 0.25);
}

[data-theme="dark"] .btn-sol-toggle-q.is-expanded-state {
  background: rgba(245, 158, 11, 0.22) !important;
  border-color: #f59e0b !important;
  color: #fde68a !important;
  box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.3) !important;
}
`;

cssContent = cssContent.trimEnd() + solBtnCss + '\n';
fs.writeFileSync('components.css', cssContent, 'utf8');
console.log("components.css updated successfully.");

// 2. Update app.js
console.log("Updating app.js...");
let appContent = fs.readFileSync('app.js', 'utf8');

// A. Update generateFeedbackContentHtml to support isExpanded parameter & syncSolutionToggleFromInner
const oldGenerateFeedback = `function generateFeedbackContentHtml(q, isCorrect, correctLetter) {
  return \`
    <div class="exam-feedback-box-content">
      <div class="feedback-headline" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div style="display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span class="feedback-status-pill \${isCorrect ? 'is-correct' : 'is-wrong'}">\${isCorrect ? 'Correct Answer' : 'Incorrect Choice'}</span>
          <span style="color: var(--ink-secondary); font-weight: 600;">—</span>
          <span class="sol-correct-pill">Option \${correctLetter}: \${formatOptionText(q.correct)}</span>
        </div>
        <button type="button" class="btn-toggle-solution" aria-expanded="true" title="Toggle Explanation Visibility" onclick="const fb=this.closest('.exam-feedback-box');if(fb){fb.classList.toggle('is-collapsed');const c=fb.classList.contains('is-collapsed');const l=this.querySelector('.toggle-label');if(l)l.textContent=c?'Show Explanation ▾':'Hide Explanation ▴';this.setAttribute('aria-expanded',!c);}">
          <span class="toggle-label">Hide Explanation ▴</span>
        </button>
      </div>`;

const newGenerateFeedback = `function generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded = true) {
  const isExp = (isExpanded !== false);
  return \`
    <div class="exam-feedback-box-content">
      <div class="feedback-headline" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div style="display:inline-flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span class="feedback-status-pill \${isCorrect ? 'is-correct' : 'is-wrong'}">\${isCorrect ? 'Correct Answer' : 'Incorrect Choice'}</span>
          <span style="color: var(--ink-secondary); font-weight: 600;">—</span>
          <span class="sol-correct-pill">Option \${correctLetter}: \${formatOptionText(q.correct)}</span>
        </div>
        <button type="button" class="btn-toggle-solution" aria-expanded="\${isExp ? 'true' : 'false'}" title="Toggle Explanation Visibility" onclick="syncSolutionToggleFromInner(this)">
          <span class="toggle-label">\${isExp ? 'Hide Explanation ▴' : 'Show Explanation ▾'}</span>
        </button>
      </div>\`;`;

if (!appContent.includes(oldGenerateFeedback)) {
  console.error("Could not find oldGenerateFeedback in app.js");
} else {
  appContent = appContent.replace(oldGenerateFeedback, newGenerateFeedback);
}

// B. Add syncSolutionToggleFromInner and toggleQuestionSolution helper functions
const solToggleHelpers = `
// Synchronize solution accordion toggle from inside the feedback headline
function syncSolutionToggleFromInner(buttonElem) {
  const fb = buttonElem.closest('.exam-feedback-box, .full-exam-feedback-box');
  if (!fb) return;
  fb.classList.toggle('is-collapsed');
  const isCollapsed = fb.classList.contains('is-collapsed');

  const innerLabel = buttonElem.querySelector('.toggle-label');
  if (innerLabel) {
    innerLabel.textContent = isCollapsed ? 'Show Explanation ▾' : 'Hide Explanation ▴';
  }
  buttonElem.setAttribute('aria-expanded', !isCollapsed);

  // Sync header button if present in same card
  const card = fb.closest('.tab-question-item, .full-exam-item-card');
  if (card) {
    const headerSolBtn = card.querySelector('.btn-sol-toggle-q');
    if (headerSolBtn) {
      headerSolBtn.innerHTML = isCollapsed ? '💡 Show Solution' : '💡 Hide Solution';
      headerSolBtn.classList.toggle('is-expanded-state', !isCollapsed);
      headerSolBtn.setAttribute('aria-expanded', !isCollapsed);
    }
  }
}

// Master Toggle for Solution Button in Header Action Group
function toggleQuestionSolution(q, qCard) {
  if (!q || !qCard) return;

  const solBtn = qCard.querySelector(\`#btnSol_\${q.id}\`) || qCard.querySelector(\`#btnExamSol_\${q.id}\`);
  let feedbackBox = qCard.querySelector('.exam-feedback-box, .full-exam-feedback-box');

  // If question is not answered yet and feedback box doesn't exist, create it for study
  if (!feedbackBox) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const correctIdx = (q.options || []).indexOf(q.correct);
    const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
    feedbackBox = document.createElement('div');
    feedbackBox.className = 'exam-feedback-box is-good is-shown';
    feedbackBox.innerHTML = generateFeedbackContentHtml(q, true, correctLetter, true);
    qCard.appendChild(feedbackBox);

    if (solBtn) {
      solBtn.innerHTML = '💡 Hide Solution';
      solBtn.classList.add('is-expanded-state');
      solBtn.setAttribute('aria-expanded', 'true');
    }
    return;
  }

  // Toggle collapsed state
  const isCurrentlyCollapsed = feedbackBox.classList.contains('is-collapsed');
  if (isCurrentlyCollapsed) {
    // Expand solution
    feedbackBox.classList.remove('is-collapsed');
    if (solBtn) {
      solBtn.innerHTML = '💡 Hide Solution';
      solBtn.classList.add('is-expanded-state');
      solBtn.setAttribute('aria-expanded', 'true');
    }
    const innerToggle = feedbackBox.querySelector('.btn-toggle-solution');
    if (innerToggle) {
      const label = innerToggle.querySelector('.toggle-label');
      if (label) label.textContent = 'Hide Explanation ▴';
      innerToggle.setAttribute('aria-expanded', 'true');
    }
  } else {
    // Collapse solution
    feedbackBox.classList.add('is-collapsed');
    if (solBtn) {
      solBtn.innerHTML = '💡 Show Solution';
      solBtn.classList.remove('is-expanded-state');
      solBtn.setAttribute('aria-expanded', 'false');
    }
    const innerToggle = feedbackBox.querySelector('.btn-toggle-solution');
    if (innerToggle) {
      const label = innerToggle.querySelector('.toggle-label');
      if (label) label.textContent = 'Show Explanation ▾';
      innerToggle.setAttribute('aria-expanded', 'false');
    }
  }
}
`;

// Insert solToggleHelpers right before copyQuestionToClipboard
const copyMarker = "// Copy Question & Options to Clipboard\nfunction copyQuestionToClipboard(";
if (!appContent.includes(copyMarker)) {
  console.error("Could not find copyMarker in app.js");
} else {
  appContent = appContent.replace(copyMarker, solToggleHelpers + "\n" + copyMarker);
}

// C. Update handlePracticeAnswer to collapse on correct, expand on wrong, and update solBtn
const oldPracticeFbInject = `      let feedbackBox = qCard.querySelector(".exam-feedback-box");
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      if (!feedbackBox) {
        feedbackBox = document.createElement("div");
        feedbackBox.className = \`exam-feedback-box \${isCorrect ? 'is-good' : 'is-bad'}\`;
        feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter);
        qCard.appendChild(feedbackBox);
        requestAnimationFrame(() => {
          feedbackBox.classList.add("is-shown");
        });
      } else {
        feedbackBox.className = \`exam-feedback-box is-shown \${isCorrect ? 'is-good' : 'is-bad'}\`;
        feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter);
      }`;

const newPracticeFbInject = `      let feedbackBox = qCard.querySelector(".exam-feedback-box");
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      // If correct: DO NOT show solution automatically (collapse it)!
      // If incorrect: show solution automatically (expand it)!
      const isExpanded = !isCorrect;
      const collapseClass = isCorrect ? 'is-collapsed' : '';

      if (!feedbackBox) {
        feedbackBox = document.createElement("div");
        feedbackBox.className = \`exam-feedback-box \${isCorrect ? 'is-good' : 'is-bad'} \${collapseClass}\`.trim();
        feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
        qCard.appendChild(feedbackBox);
        requestAnimationFrame(() => {
          feedbackBox.classList.add("is-shown");
        });
      } else {
        feedbackBox.className = \`exam-feedback-box is-shown \${isCorrect ? 'is-good' : 'is-bad'} \${collapseClass}\`.trim();
        feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
      }

      // Update Header "Show Solution" / "Hide Solution" button
      const solBtn = qCard.querySelector(\`#btnSol_\${q.id}\`);
      if (solBtn) {
        if (isCorrect) {
          solBtn.innerHTML = "💡 Show Solution";
          solBtn.classList.remove("is-expanded-state");
          solBtn.setAttribute("aria-expanded", "false");
        } else {
          solBtn.innerHTML = "💡 Hide Solution";
          solBtn.classList.add("is-expanded-state");
          solBtn.setAttribute("aria-expanded", "true");
        }
      }`;

if (!appContent.includes(oldPracticeFbInject)) {
  console.error("Could not find oldPracticeFbInject in app.js");
} else {
  appContent = appContent.replace(oldPracticeFbInject, newPracticeFbInject);
}

// D. Update handlePracticeClear to reset solBtn
const oldClearBtn = `  const clearBtn = qCard.querySelector(\`#btnClear_\${q.id}\`);
  if (clearBtn && clearBtn.parentNode) {
    clearBtn.parentNode.removeChild(clearBtn);
  }`;

const newClearBtn = `  const clearBtn = qCard.querySelector(\`#btnClear_\${q.id}\`);
  if (clearBtn && clearBtn.parentNode) {
    clearBtn.parentNode.removeChild(clearBtn);
  }

  const solBtn = qCard.querySelector(\`#btnSol_\${q.id}\`);
  if (solBtn) {
    solBtn.innerHTML = "💡 Show Solution";
    solBtn.classList.remove("is-expanded-state");
    solBtn.setAttribute("aria-expanded", "false");
  }`;

if (!appContent.includes(oldClearBtn)) {
  console.error("Could not find oldClearBtn in app.js");
} else {
  appContent = appContent.replace(oldClearBtn, newClearBtn);
}

// E. Update handleExamAnswer for in-place exam feedback
const oldExamAnswerFb = `      let fb = card.querySelector(".exam-feedback-box");
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      if (!fb) {
        fb = document.createElement("div");
        fb.className = \`exam-feedback-box \${isCorrect ? 'is-good' : 'is-bad'}\`;
        fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter);
        card.appendChild(fb);
        requestAnimationFrame(() => {
          fb.classList.add("is-shown");
        });
      } else {
        fb.className = \`exam-feedback-box is-shown \${isCorrect ? 'is-good' : 'is-bad'}\`;
        fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter);
      }`;

const newExamAnswerFb = `      let fb = card.querySelector(".exam-feedback-box");
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      const isExpanded = !isCorrect;
      const collapseClass = isCorrect ? 'is-collapsed' : '';
      if (!fb) {
        fb = document.createElement("div");
        fb.className = \`exam-feedback-box \${isCorrect ? 'is-good' : 'is-bad'} \${collapseClass}\`.trim();
        fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
        card.appendChild(fb);
        requestAnimationFrame(() => {
          fb.classList.add("is-shown");
        });
      } else {
        fb.className = \`exam-feedback-box is-shown \${isCorrect ? 'is-good' : 'is-bad'} \${collapseClass}\`.trim();
        fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, isExpanded);
      }

      const examSolBtn = card.querySelector(\`#btnExamSol_\${q.id}\`);
      if (examSolBtn) {
        if (isCorrect) {
          examSolBtn.innerHTML = "💡 Show Solution";
          examSolBtn.classList.remove("is-expanded-state");
          examSolBtn.setAttribute("aria-expanded", "false");
        } else {
          examSolBtn.innerHTML = "💡 Hide Solution";
          examSolBtn.classList.add("is-expanded-state");
          examSolBtn.setAttribute("aria-expanded", "true");
        }
      }`;

if (!appContent.includes(oldExamAnswerFb)) {
  console.error("Could not find oldExamAnswerFb in app.js");
} else {
  appContent = appContent.replace(oldExamAnswerFb, newExamAnswerFb);
}

// F. Update renderMainQuestionView to include btnSol_${q.id} in action group and bind event listener
const oldPracticeActionGroup = `<div class="q-bar-action-group">
        <button class="btn-copy-q" id="btnCopy_\${q.id}" title="Copy Question and Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnGemini_\${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        \${isAnswered ? \`<button class="btn-clear-choice" id="btnClear_\${q.id}">🧹 Clear Choice</button>\` : ''}
        <button class="btn-flag-single-q \${isFlagged ? 'is-flagged' : ''}" id="btnFlag_\${q.id}">
          \${isFlagged ? '<span class="flag-star-icon">★</span> Marked' : '<span class="flag-star-icon">☆</span> Review'}
        </button>
      </div>`;

const newPracticeActionGroup = `<div class="q-bar-action-group">
        <button class="btn-copy-q" id="btnCopy_\${q.id}" title="Copy Question and Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnGemini_\${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        <button class="btn-sol-toggle-q \${isAnswered && !isCorrect ? 'is-expanded-state' : ''}" id="btnSol_\${q.id}" title="Toggle Solution Visibility" aria-expanded="\${isAnswered && !isCorrect ? 'true' : 'false'}">
          \${isAnswered && !isCorrect ? '💡 Hide Solution' : '💡 Show Solution'}
        </button>
        \${isAnswered ? \`<button class="btn-clear-choice" id="btnClear_\${q.id}">🧹 Clear Choice</button>\` : ''}
        <button class="btn-flag-single-q \${isFlagged ? 'is-flagged' : ''}" id="btnFlag_\${q.id}">
          \${isFlagged ? '<span class="flag-star-icon">★</span> Marked' : '<span class="flag-star-icon">☆</span> Review'}
        </button>
      </div>`;

if (!appContent.includes(oldPracticeActionGroup)) {
  console.error("Could not find oldPracticeActionGroup in app.js");
} else {
  appContent = appContent.replace(oldPracticeActionGroup, newPracticeActionGroup);
}

// In renderMainQuestionView feedback box generation:
const oldRenderMainFb = `    // Feedback Box
    if (isAnswered) {
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : "";
      const feedbackBox = document.createElement("div");
      feedbackBox.className = \`exam-feedback-box is-shown \${isCorrect ? 'is-good' : 'is-bad'}\`;
      feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter);
      qCard.appendChild(feedbackBox);
    }`;

const newRenderMainFb = `    // Feedback Box
    if (isAnswered) {
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : "";
      const feedbackBox = document.createElement("div");
      // If correct: collapse by default! If incorrect: expand by default!
      const collapseClass = isCorrect ? 'is-collapsed' : '';
      feedbackBox.className = \`exam-feedback-box is-shown \${isCorrect ? 'is-good' : 'is-bad'} \${collapseClass}\`.trim();
      feedbackBox.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, !isCorrect);
      qCard.appendChild(feedbackBox);
    }`;

if (!appContent.includes(oldRenderMainFb)) {
  console.error("Could not find oldRenderMainFb in app.js");
} else {
  appContent = appContent.replace(oldRenderMainFb, newRenderMainFb);
}

// In renderMainQuestionView event listener attachment:
const oldPracticeListeners = `    // Event listeners for Copy, Gemini, Clear Choice & Flag buttons
    setTimeout(() => {
      const copyBtn = document.getElementById(\`btnCopy_\${q.id}\`);
      if (copyBtn) {
        copyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, copyBtn);
      }
      const geminiBtn = document.getElementById(\`btnGemini_\${q.id}\`);
      if (geminiBtn) {
        geminiBtn.onclick = () => openInChatGPT(q, idx + 1, geminiBtn);
      }`;

const newPracticeListeners = `    // Event listeners for Copy, Gemini, Show Solution, Clear Choice & Flag buttons
    setTimeout(() => {
      const copyBtn = document.getElementById(\`btnCopy_\${q.id}\`);
      if (copyBtn) {
        copyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, copyBtn);
      }
      const geminiBtn = document.getElementById(\`btnGemini_\${q.id}\`);
      if (geminiBtn) {
        geminiBtn.onclick = () => openInChatGPT(q, idx + 1, geminiBtn);
      }
      const solBtn = document.getElementById(\`btnSol_\${q.id}\`);
      if (solBtn) {
        solBtn.onclick = () => toggleQuestionSolution(q, qCard);
      }`;

if (!appContent.includes(oldPracticeListeners)) {
  console.error("Could not find oldPracticeListeners in app.js");
} else {
  appContent = appContent.replace(oldPracticeListeners, newPracticeListeners);
}

// G. Update renderFullExamQuestions for exam mode
const oldExamHeaderActions = `      <div style="display:flex; align-items:center; gap:8px;">
        <button class="btn-copy-q" id="btnExamCopy_\${q.id}" title="Copy Question & Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnExamGemini_\${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        <span class="tag-badge tag-diff-\${(q.difficulty || 'medium').toLowerCase()}">\${q.difficulty || 'Medium'}</span>
        <span class="tag-badge tag-points">\${q.points || 1} Mark</span>
      </div>`;

const newExamHeaderActions = `      <div style="display:flex; align-items:center; gap:8px;">
        <button class="btn-copy-q" id="btnExamCopy_\${q.id}" title="Copy Question & Options">📋 Copy</button>
        <button class="btn-gemini-q" id="btnExamGemini_\${q.id}" title="Open and solve in ChatGPT">✨ ChatGPT</button>
        <button class="btn-sol-toggle-q \${isAnswered && !isCorrect ? 'is-expanded-state' : ''}" id="btnExamSol_\${q.id}" title="Toggle Solution Visibility" aria-expanded="\${isAnswered && !isCorrect ? 'true' : 'false'}">
          \${isAnswered && !isCorrect ? '💡 Hide Solution' : '💡 Show Solution'}
        </button>
        <span class="tag-badge tag-diff-\${(q.difficulty || 'medium').toLowerCase()}">\${q.difficulty || 'Medium'}</span>
        <span class="tag-badge tag-points">\${q.points || 1} Mark</span>
      </div>`;

if (!appContent.includes(oldExamHeaderActions)) {
  console.error("Could not find oldExamHeaderActions in app.js");
} else {
  appContent = appContent.replace(oldExamHeaderActions, newExamHeaderActions);
}

// In renderFullExamQuestions feedback box:
const oldExamFb = `    if (isAnswered) {
      const fb = document.createElement("div");
      fb.className = \`full-exam-feedback-box \${isCorrect ? 'is-good' : 'is-bad'}\`;
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter);
      card.appendChild(fb);
    }`;

const newExamFb = `    if (isAnswered) {
      const fb = document.createElement("div");
      const collapseClass = isCorrect ? 'is-collapsed' : '';
      fb.className = \`full-exam-feedback-box \${isCorrect ? 'is-good' : 'is-bad'} \${collapseClass}\`.trim();
      const correctIdx = (q.options || []).indexOf(q.correct);
      const correctLetter = (correctIdx !== -1) ? letters[correctIdx] : q.correct;
      fb.innerHTML = generateFeedbackContentHtml(q, isCorrect, correctLetter, !isCorrect);
      card.appendChild(fb);
    }`;

if (!appContent.includes(oldExamFb)) {
  console.error("Could not find oldExamFb in app.js");
} else {
  appContent = appContent.replace(oldExamFb, newExamFb);
}

// In renderFullExamQuestions listener:
const oldExamListeners = `    setTimeout(() => {
      const examCopyBtn = document.getElementById(\`btnExamCopy_\${q.id}\`);
      if (examCopyBtn) {
        examCopyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, examCopyBtn);
      }
      const examGeminiBtn = document.getElementById(\`btnExamGemini_\${q.id}\`);
      if (examGeminiBtn) {
        examGeminiBtn.onclick = () => openInChatGPT(q, idx + 1, examGeminiBtn);
      }`;

const newExamListeners = `    setTimeout(() => {
      const examCopyBtn = document.getElementById(\`btnExamCopy_\${q.id}\`);
      if (examCopyBtn) {
        examCopyBtn.onclick = () => copyQuestionToClipboard(q, idx + 1, examCopyBtn);
      }
      const examGeminiBtn = document.getElementById(\`btnExamGemini_\${q.id}\`);
      if (examGeminiBtn) {
        examGeminiBtn.onclick = () => openInChatGPT(q, idx + 1, examGeminiBtn);
      }
      const examSolBtn = document.getElementById(\`btnExamSol_\${q.id}\`);
      if (examSolBtn) {
        examSolBtn.onclick = () => toggleQuestionSolution(q, card);
      }`;

if (!appContent.includes(oldExamListeners)) {
  console.error("Could not find oldExamListeners in app.js");
} else {
  appContent = appContent.replace(oldExamListeners, newExamListeners);
}

fs.writeFileSync('app.js', appContent, 'utf8');
console.log("app.js updated successfully.");

// 3. Update index.html cache version to ?v=18.0
console.log("Updating index.html cache version...");
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/\?v=17\.9/g, '?v=18.0');
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log("index.html updated successfully to ?v=18.0.");

console.log("=== ALL UPDATES APPLIED! ===");
