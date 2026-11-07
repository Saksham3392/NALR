const fs = require('fs');

// 1. Update components.css
console.log("Updating components.css...");
let cssContent = fs.readFileSync('components.css', 'utf8');

const newCssRules = `

/* ==========================================================================
   Question Text Selection -> Highlight Copy Button Affordance
   ========================================================================== */
::selection {
  background: rgba(37, 99, 235, 0.22);
  color: inherit;
}
[data-theme="dark"] ::selection {
  background: rgba(96, 165, 250, 0.35);
  color: inherit;
}

.btn-copy-q {
  position: relative;
}

.btn-copy-q.is-selection-highlighted {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.14) 0%, rgba(99, 102, 241, 0.16) 100%) !important;
  border-color: var(--primary-blue, #2563eb) !important;
  color: var(--primary-blue, #2563eb) !important;
  font-weight: 850 !important;
  transform: translateY(-1px) scale(1.04);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.25), 0 3px 12px rgba(37, 99, 235, 0.3) !important;
  animation: copyBtnSelectionPulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  z-index: 10;
}

/* Floating tooltip pill above highlighted copy button */
.btn-copy-q.is-selection-highlighted::after {
  content: "📋 Click to copy full Q&A!";
  position: absolute;
  bottom: calc(100% + 7px);
  left: 50%;
  transform: translateX(-50%);
  background: #0f172a;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  line-height: 1.2;
  padding: 4px 9px;
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.24);
  animation: tooltipFadeIn 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  z-index: 100;
}

/* Tooltip downward pointer notch */
.btn-copy-q.is-selection-highlighted::before {
  content: "";
  position: absolute;
  bottom: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px 5px 0 5px;
  border-style: solid;
  border-color: #0f172a transparent transparent transparent;
  pointer-events: none;
  z-index: 100;
  animation: tooltipFadeIn 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Hide tooltip when button is in 'Copied' state */
.btn-copy-q.is-copied::before,
.btn-copy-q.is-copied::after {
  display: none !important;
}

/* Extra pulse when copy event (Ctrl+C) is triggered */
.btn-copy-q.is-copy-pulse {
  animation: copyBtnActionNudge 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

@keyframes copyBtnSelectionPulse {
  0%, 100% {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 0 0 2.5px rgba(37, 99, 235, 0.22), 0 2px 8px rgba(37, 99, 235, 0.25);
  }
  50% {
    transform: translateY(-1px) scale(1.07);
    box-shadow: 0 0 0 4.5px rgba(37, 99, 235, 0.35), 0 4px 16px rgba(37, 99, 235, 0.4);
  }
}

@keyframes copyBtnActionNudge {
  0% { transform: scale(1); }
  35% { transform: scale(1.16); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0.4), 0 4px 20px rgba(16, 185, 129, 0.5); }
  100% { transform: scale(1.04); }
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Dark Theme Parity */
[data-theme="dark"] .btn-copy-q.is-selection-highlighted {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(129, 140, 248, 0.25) 100%) !important;
  border-color: #60a5fa !important;
  color: #93c5fd !important;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.32), 0 3px 14px rgba(59, 130, 246, 0.45) !important;
}

[data-theme="dark"] .btn-copy-q.is-selection-highlighted::after {
  background: #1e293b;
  color: #f1f5f9;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
}

[data-theme="dark"] .btn-copy-q.is-selection-highlighted::before {
  border-color: #1e293b transparent transparent transparent;
}

/* Responsive adjustment for small screens */
@media (max-width: 600px) {
  .btn-copy-q.is-selection-highlighted::after {
    left: auto;
    right: 0;
    transform: none;
    font-size: 10px;
    padding: 3px 7px;
  }
  .btn-copy-q.is-selection-highlighted::before {
    left: auto;
    right: 14px;
    transform: none;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .btn-copy-q.is-selection-highlighted,
  .btn-copy-q.is-copy-pulse {
    animation: none !important;
    transform: none !important;
  }
}
`;

cssContent = cssContent.trimEnd() + newCssRules + '\n';
fs.writeFileSync('components.css', cssContent, 'utf8');
console.log("components.css updated successfully.");

// 2. Update app.js
console.log("Updating app.js...");
let appContent = fs.readFileSync('app.js', 'utf8');

// A. Update copyQuestionToClipboard to remove highlight on click
const oldMarkSuccess = `  const markSuccess = () => {
    if (btnElem) {
      const origHtml = btnElem.innerHTML;
      btnElem.innerHTML = \`<span>✓ Copied!</span>\`;
      btnElem.classList.add("is-copied");
      setTimeout(() => {
        btnElem.innerHTML = origHtml;
        btnElem.classList.remove("is-copied");
      }, 1600);
    }
  };`;

const newMarkSuccess = `  const markSuccess = () => {
    if (btnElem) {
      btnElem.classList.remove("is-selection-highlighted");
      const origHtml = btnElem.innerHTML;
      btnElem.innerHTML = \`<span>✓ Copied!</span>\`;
      btnElem.classList.add("is-copied");
      setTimeout(() => {
        btnElem.innerHTML = origHtml;
        btnElem.classList.remove("is-copied");
      }, 1600);
    }
  };`;

if (!appContent.includes(oldMarkSuccess)) {
  console.error("Could not find old markSuccess in app.js");
} else {
  appContent = appContent.replace(oldMarkSuccess, newMarkSuccess);
}

// B. Add initQuestionSelectionCopyAffordance function right above showToastNotification
const toastFunc = "function showToastNotification(message, duration = 3500) {";
const selectionAffordanceCode = `// Question Text Selection -> Highlight Copy Button Affordance
function initQuestionSelectionCopyAffordance() {
  let selectionRafId = null;

  function clearAllCopyHighlights() {
    const highlightedBtns = document.querySelectorAll(".btn-copy-q.is-selection-highlighted");
    highlightedBtns.forEach(btn => btn.classList.remove("is-selection-highlighted"));
  }

  function handleQuestionSelection() {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      clearAllCopyHighlights();
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) {
      clearAllCopyHighlights();
      return;
    }

    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (!range) {
      clearAllCopyHighlights();
      return;
    }

    const commonNode = range.commonAncestorContainer;
    const parentElem = commonNode.nodeType === Node.ELEMENT_NODE ? commonNode : commonNode.parentElement;
    if (!parentElem) {
      clearAllCopyHighlights();
      return;
    }

    // Check if selection is within a question card (Practice Mode or Exam Mode)
    const card = parentElem.closest(".tab-question-item, .full-exam-item-card");
    if (!card) {
      clearAllCopyHighlights();
      return;
    }

    const copyBtn = card.querySelector(".btn-copy-q");
    if (!copyBtn) {
      clearAllCopyHighlights();
      return;
    }

    // Highlight this copy button if not already highlighted
    if (!copyBtn.classList.contains("is-selection-highlighted")) {
      clearAllCopyHighlights();
      copyBtn.classList.add("is-selection-highlighted");
    }
  }

  document.addEventListener("selectionchange", () => {
    if (selectionRafId) cancelAnimationFrame(selectionRafId);
    selectionRafId = requestAnimationFrame(handleQuestionSelection);
  }, { passive: true });

  // When user attempts to copy (Ctrl+C / Cmd+C / Right-Click Copy) while text is selected inside a question card
  document.addEventListener("copy", () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    if (!range) return;
    const commonNode = range.commonAncestorContainer;
    const parentElem = commonNode.nodeType === Node.ELEMENT_NODE ? commonNode : commonNode.parentElement;
    const card = parentElem ? parentElem.closest(".tab-question-item, .full-exam-item-card") : null;
    if (card) {
      const copyBtn = card.querySelector(".btn-copy-q");
      if (copyBtn) {
        copyBtn.classList.add("is-selection-highlighted", "is-copy-pulse");
        setTimeout(() => {
          copyBtn.classList.remove("is-copy-pulse");
        }, 1200);
        showToastNotification("📋 Tip: Click the highlighted 'Copy' button to copy full question with all options!", 3500);
      }
    }
  }, { passive: true });
}

` + toastFunc;

appContent = appContent.replace(toastFunc, selectionAffordanceCode);

// C. Call initQuestionSelectionCopyAffordance() inside setupEventListeners()
const targetInSetup = `  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      updateTermSelectorButtonsUI();
    });
  }
}`;

const replacementInSetup = `  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      updateTermSelectorButtonsUI();
    });
  }

  // Question Text Selection -> Highlight Copy Button Affordance
  initQuestionSelectionCopyAffordance();
}`;

if (!appContent.includes(targetInSetup)) {
  console.error("Could not find targetInSetup in app.js");
} else {
  appContent = appContent.replace(targetInSetup, replacementInSetup);
}

fs.writeFileSync('app.js', appContent, 'utf8');
console.log("app.js updated successfully.");

// 3. Update index.html cache version to ?v=17.9
console.log("Updating index.html cache version...");
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/\?v=17\.8/g, '?v=17.9');
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log("index.html updated successfully to ?v=17.9.");
