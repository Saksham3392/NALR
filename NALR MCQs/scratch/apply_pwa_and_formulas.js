const fs = require('fs');

console.log("=== APPLYING PWA & FORMULA CHEAT SHEET DRAWER ===");

// -------------------------------------------------------------
// 1. UPDATE index.html
// -------------------------------------------------------------
console.log("Updating index.html...");
let indexHtml = fs.readFileSync('index.html', 'utf8');

// A. Head links for PWA
const pwaHeadLinks = `  <!-- Favicon & PWA Manifest -->
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />
  <link rel="alternate icon" href="favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <link rel="manifest" href="manifest.json?v=18.1" />
  <meta name="theme-color" content="#2563eb" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="NALR MCQs" />`;

const oldFaviconBlock = `  <!-- Favicon System -->
  <link rel="icon" type="image/svg+xml" href="favicon.svg" />
  <link rel="alternate icon" href="favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <meta name="theme-color" content="#2563eb" />`;

if (indexHtml.includes(oldFaviconBlock)) {
  indexHtml = indexHtml.replace(oldFaviconBlock, pwaHeadLinks);
} else {
  console.warn("Could not find oldFaviconBlock in index.html");
}

// B. Header buttons: Add Formulas & Install App
const oldHeaderButtons = `<button class="btn-minimal-secondary btn-planner-trigger" id="btnOpenPlannerModal" onclick="openPlannerModal()" title="Open Personalized Study Planner">📅 Planner</button>`;
const newHeaderButtons = `<button class="btn-minimal-secondary btn-planner-trigger" id="btnOpenPlannerModal" onclick="openPlannerModal()" title="Open Personalized Study Planner">📅 Planner</button>
          <button class="btn-minimal-secondary btn-formula-trigger" id="btnFormulaSheet" onclick="openFormulaModal()" title="Quick Formula & Cheat Sheet Reference">📐 Formulas</button>
          <button class="btn-minimal-primary btn-pwa-install" id="btnInstallPwa" style="display: none;" title="Install NALR Masterclass on your device">📲 Install</button>`;

if (indexHtml.includes(oldHeaderButtons)) {
  indexHtml = indexHtml.replace(oldHeaderButtons, newHeaderButtons);
} else {
  console.warn("Could not find oldHeaderButtons in index.html");
}

// C. Formula Sheet Modal markup right after plannerModal
const formulaModalHtml = `
    <!-- ========================================================
         FORMULAS & CHEAT SHEET QUICK DRAWER
    ======================================================== -->
    <div class="exam-topic-modal" id="formulaModal" role="dialog" aria-modal="true" aria-labelledby="formulaModalTitle" style="display: none;">
      <div class="exam-topic-backdrop" id="formulaTopicBackdrop"></div>
      <div class="exam-topic-dialog formula-dialog">
        <div class="exam-topic-header formula-header">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="planner-icon-badge">📐</div>
            <div>
              <h3 id="formulaModalTitle" class="exam-topic-title" style="margin: 0; font-size: 21px; font-weight: 850;">Formulas & Quick Cheat Sheet</h3>
              <p class="exam-topic-sub" style="margin: 3px 0 0; font-size: 13.5px; color: var(--ink-secondary);">Essential mathematical theorems, visual mnemonics & exam speed shortcuts</p>
            </div>
          </div>
          <button class="exam-topic-close-btn" id="btnCloseFormulaModal" onclick="closeFormulaModal()" aria-label="Close Formulas Sheet">&times;</button>
        </div>

        <!-- Formula Search Bar -->
        <div class="formula-search-bar-wrap">
          <span class="formula-search-icon">🔍</span>
          <input type="text" id="formulaSearchInput" class="formula-search-input" placeholder="Search formulas, concepts, or shortcuts (e.g., alligation, cyclicity, pythagoras)..." />
          <button type="button" id="btnClearFormulaSearch" class="formula-clear-search" style="display: none;" aria-label="Clear Search">✕</button>
        </div>

        <!-- Category Filter Pills -->
        <div class="formula-cat-pills-bar" id="formulaCatPills">
          <!-- Dynamically populated from FORMULA_CATEGORIES -->
        </div>

        <!-- Formula Cards Scrollable Body -->
        <div class="formula-cards-scroll-body" id="formulaCardsContainer">
          <!-- Dynamically populated from FORMULA_CARDS -->
        </div>
      </div>
    </div>
`;

// Insert after plannerModal (line before results-container-card)
const resultsCardMarker = '<!-- Results Screen -->\n    <section class="results-container-card" id="quizResultsScreen">';
if (indexHtml.includes(resultsCardMarker)) {
  indexHtml = indexHtml.replace(resultsCardMarker, formulaModalHtml + '\n    ' + resultsCardMarker);
} else {
  console.warn("Could not find resultsCardMarker in index.html");
}

// D. Script tag for formula_data.js
const syllabusScriptTag = '<script src="syllabus.js';
const formulaScriptTag = '<script src="formula_data.js?v=18.1"></script>\n  <script src="syllabus.js';
if (indexHtml.includes(syllabusScriptTag)) {
  indexHtml = indexHtml.replace(syllabusScriptTag, formulaScriptTag);
}

// E. Update cache query version strings to ?v=18.1
indexHtml = indexHtml.replace(/\?v=18\.0/g, '?v=18.1');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log("index.html updated successfully with PWA meta, Formula Modal & ?v=18.1");

// -------------------------------------------------------------
// 2. UPDATE components.css
// -------------------------------------------------------------
console.log("Updating components.css...");
let cssContent = fs.readFileSync('components.css', 'utf8');

const formulaAndPwaCss = `

/* ==========================================================================
   PWA Install Button & Formulas Quick Cheat Sheet Drawer
   ========================================================================== */
.btn-formula-trigger {
  font-weight: 750;
  transition: all var(--duration-fast, 160ms) ease;
}

.btn-pwa-install {
  background: linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3) !important;
  animation: pwaPulseNudge 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.btn-pwa-install:hover {
  transform: translateY(-1px) scale(1.03);
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.45) !important;
}

@keyframes pwaPulseNudge {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0);
  }
}

/* Formula Modal & Dialog */
.formula-dialog {
  max-width: 920px !important;
  width: 94vw !important;
  max-height: 88vh !important;
  display: flex !important;
  flex-direction: column !important;
  border-radius: 24px !important;
  padding: 0 !important;
  overflow: hidden !important;
  background: var(--card-bg, #ffffff) !important;
  box-shadow: 0 24px 60px -8px rgba(15, 23, 42, 0.35), 0 0 0 1px var(--border-color) !important;
}

.formula-header {
  padding: 20px 24px 16px !important;
  border-bottom: 1px solid var(--border-subtle) !important;
  background: rgba(0, 0, 0, 0.015);
}

/* Search Bar */
.formula-search-bar-wrap {
  position: relative;
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
}

.formula-search-icon {
  position: absolute;
  left: 36px;
  font-size: 14px;
  color: var(--ink-secondary);
  pointer-events: none;
}

.formula-search-input {
  width: 100%;
  padding: 9px 36px 9px 38px;
  font-size: 13.5px;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background: var(--card-bg, #ffffff);
  color: var(--ink-primary);
  outline: none;
  transition: all var(--duration-fast, 160ms) ease;
}

.formula-search-input:focus {
  border-color: var(--primary-blue, #2563eb);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.formula-clear-search {
  position: absolute;
  right: 36px;
  background: rgba(0, 0, 0, 0.08);
  border: none;
  color: var(--ink-secondary);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Category Filter Pills */
.formula-cat-pills-bar {
  display: flex;
  gap: 8px;
  padding: 10px 24px;
  overflow-x: auto;
  border-bottom: 1px solid var(--border-subtle);
  background: rgba(0, 0, 0, 0.01);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.formula-cat-pills-bar::-webkit-scrollbar {
  display: none;
}

.formula-cat-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 13px;
  font-size: 12px;
  font-weight: 750;
  border-radius: 999px;
  white-space: nowrap;
  cursor: pointer;
  background: var(--card-bg, #ffffff);
  color: var(--ink-secondary);
  border: 1px solid var(--border-color);
  transition: all var(--duration-fast, 160ms) ease;
}

.formula-cat-pill:hover {
  border-color: var(--primary-blue, #2563eb);
  color: var(--primary-blue, #2563eb);
}

.formula-cat-pill.is-active {
  background: var(--primary-blue, #2563eb) !important;
  color: #ffffff !important;
  border-color: var(--primary-blue, #2563eb) !important;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.25);
}

/* Scrollable Cards Container */
.formula-cards-scroll-body {
  padding: 18px 24px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 14px;
  max-height: calc(88vh - 190px);
}

/* Formula Card */
.formula-card {
  background: var(--card-bg, #ffffff);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform var(--duration-fast, 160ms) ease, box-shadow var(--duration-fast, 160ms) ease, border-color var(--duration-fast, 160ms) ease;
  position: relative;
}

.formula-card:hover {
  transform: translateY(-2px);
  border-color: var(--primary-blue, #2563eb);
  box-shadow: 0 8px 24px -4px rgba(15, 23, 42, 0.08);
}

.formula-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.formula-card-topic-tag {
  font-size: 10.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--primary-blue, #2563eb);
  background: rgba(37, 99, 235, 0.08);
  padding: 2px 7px;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 4px;
}

.formula-card-title {
  margin: 0;
  font-size: 14px;
  font-weight: 850;
  color: var(--ink-primary);
  line-height: 1.35;
}

.formula-card-copy-btn {
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid var(--border-color);
  color: var(--ink-secondary);
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 750;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all var(--duration-micro, 110ms) ease;
}

.formula-card-copy-btn:hover {
  background: var(--primary-blue-bg, rgba(37, 99, 235, 0.1));
  border-color: var(--primary-blue, #2563eb);
  color: var(--primary-blue, #2563eb);
}

.formula-card-copy-btn.is-copied {
  background: rgba(16, 185, 129, 0.15) !important;
  border-color: #10b981 !important;
  color: #059669 !important;
}

/* Formula Code Box */
.formula-code-box {
  background: rgba(0, 0, 0, 0.025);
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 9px;
  padding: 9px 12px;
  font-family: var(--font-mono, monospace);
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--ink-primary);
  white-space: pre-wrap;
  word-break: break-word;
}

.formula-card-note {
  font-size: 11.5px;
  color: var(--ink-secondary);
  line-height: 1.45;
  margin: 0;
  padding-left: 2px;
  border-left: 2px solid var(--amber-gold, #f59e0b);
  padding-left: 7px;
}

/* Dark Theme Parity */
[data-theme="dark"] .formula-dialog {
  background: #141c2e !important;
  box-shadow: 0 24px 60px -8px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12) !important;
}

[data-theme="dark"] .formula-header {
  background: rgba(255, 255, 255, 0.02) !important;
  border-bottom-color: rgba(255, 255, 255, 0.08) !important;
}

[data-theme="dark"] .formula-search-bar-wrap {
  background: rgba(0, 0, 0, 0.25);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .formula-search-input {
  background: #1e293b;
  border-color: rgba(255, 255, 255, 0.12);
  color: #f1f5f9;
}

[data-theme="dark"] .formula-search-input:focus {
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
}

[data-theme="dark"] .formula-clear-search {
  background: rgba(255, 255, 255, 0.15);
  color: #f1f5f9;
}

[data-theme="dark"] .formula-cat-pills-bar {
  background: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

[data-theme="dark"] .formula-cat-pill {
  background: #1e293b;
  color: #94a3b8;
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .formula-cat-pill:hover {
  border-color: #60a5fa;
  color: #93c5fd;
}

[data-theme="dark"] .formula-cat-pill.is-active {
  background: #2563eb !important;
  color: #ffffff !important;
  border-color: #3b82f6 !important;
  box-shadow: 0 2px 10px rgba(37, 99, 235, 0.4);
}

[data-theme="dark"] .formula-card {
  background: #182238;
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .formula-card:hover {
  border-color: #60a5fa;
  box-shadow: 0 8px 28px -4px rgba(0, 0, 0, 0.5);
}

[data-theme="dark"] .formula-card-topic-tag {
  background: rgba(59, 130, 246, 0.15);
  color: #93c5fd;
}

[data-theme="dark"] .formula-code-box {
  background: rgba(0, 0, 0, 0.35);
  border-color: rgba(255, 255, 255, 0.08);
  color: #e2e8f0;
}

[data-theme="dark"] .formula-card-copy-btn {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
  color: #cbd5e1;
}

[data-theme="dark"] .formula-card-copy-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: #60a5fa;
  color: #93c5fd;
}

/* Mobile responsive */
@media (max-width: 600px) {
  .formula-cards-scroll-body {
    grid-template-columns: 1fr !important;
    padding: 12px 14px !important;
    gap: 10px !important;
  }
  .formula-search-bar-wrap {
    padding: 10px 14px !important;
  }
  .formula-cat-pills-bar {
    padding: 8px 14px !important;
  }
  .formula-header {
    padding: 14px 16px !important;
  }
}
`;

cssContent = cssContent.trimEnd() + formulaAndPwaCss + '\n';
fs.writeFileSync('components.css', cssContent, 'utf8');
console.log("components.css updated successfully with Formula & PWA styles.");

// -------------------------------------------------------------
// 3. UPDATE app.js
// -------------------------------------------------------------
console.log("Updating app.js...");
let appContent = fs.readFileSync('app.js', 'utf8');

const pwaAndFormulaJs = `
// =============================================================================
// SECTION: PROGRESSIVE WEB APP (PWA) SERVICE WORKER & INSTALL PROMPT
// =============================================================================
let deferredInstallPrompt = null;

function initPwaService() {
  // Register Service Worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((reg) => {
        console.log("[PWA] Service Worker registered in scope:", reg.scope);
      }).catch((err) => {
        console.log("[PWA] Service Worker registration note:", err);
      });
    });
  }

  // Capture Install Prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const installBtn = document.getElementById("btnInstallPwa");
    if (installBtn) {
      installBtn.style.display = "inline-flex";
      installBtn.onclick = async () => {
        if (!deferredInstallPrompt) return;
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        if (outcome === "accepted") {
          installBtn.style.display = "none";
          showToastNotification("🎉 NALR Masterclass installed! Launch anytime from your apps.");
        }
        deferredInstallPrompt = null;
      };
    }
  });

  window.addEventListener("appinstalled", () => {
    const installBtn = document.getElementById("btnInstallPwa");
    if (installBtn) installBtn.style.display = "none";
    deferredInstallPrompt = null;
    showToastNotification("🚀 NALR Masterclass installed! Ready for 100% offline practice.");
  });
}

// =============================================================================
// SECTION: FORMULAS & QUICK CHEAT SHEET DRAWER CONTROLLER
// =============================================================================
let activeFormulaCategory = "all";
let activeFormulaSearch = "";

function openFormulaModal() {
  const modal = document.getElementById("formulaModal");
  if (!modal) return;
  modal.style.display = "flex";

  renderFormulaCategoryPills();
  renderFormulaCards(activeFormulaSearch, activeFormulaCategory);

  // Wire search input
  const searchInput = document.getElementById("formulaSearchInput");
  const clearSearchBtn = document.getElementById("btnClearFormulaSearch");

  if (searchInput) {
    searchInput.value = activeFormulaSearch;
    searchInput.oninput = (e) => {
      activeFormulaSearch = (e.target.value || "").trim().toLowerCase();
      if (clearSearchBtn) clearSearchBtn.style.display = activeFormulaSearch ? "flex" : "none";
      renderFormulaCards(activeFormulaSearch, activeFormulaCategory);
    };
    setTimeout(() => searchInput.focus(), 80);
  }

  if (clearSearchBtn) {
    clearSearchBtn.onclick = () => {
      activeFormulaSearch = "";
      if (searchInput) searchInput.value = "";
      clearSearchBtn.style.display = "none";
      renderFormulaCards("", activeFormulaCategory);
      if (searchInput) searchInput.focus();
    };
  }

  // Backdrop click to close
  const backdrop = document.getElementById("formulaTopicBackdrop");
  if (backdrop) backdrop.onclick = closeFormulaModal;
}

function closeFormulaModal() {
  const modal = document.getElementById("formulaModal");
  if (modal) modal.style.display = "none";
}

function renderFormulaCategoryPills() {
  const container = document.getElementById("formulaCatPills");
  if (!container || typeof FORMULA_CATEGORIES === "undefined") return;

  container.innerHTML = FORMULA_CATEGORIES.map(cat => {
    const isActive = (cat.id === activeFormulaCategory);
    return \`<button type="button" class="formula-cat-pill \${isActive ? 'is-active' : ''}" data-cat="\${cat.id}">
      <span>\${cat.icon}</span> <span>\${cat.name}</span>
    </button>\`;
  }).join("");

  const pills = container.querySelectorAll(".formula-cat-pill");
  pills.forEach(pill => {
    pill.onclick = () => {
      activeFormulaCategory = pill.dataset.cat || "all";
      renderFormulaCategoryPills();
      renderFormulaCards(activeFormulaSearch, activeFormulaCategory);
    };
  });
}

function renderFormulaCards(filterText = "", category = "all") {
  const container = document.getElementById("formulaCardsContainer");
  if (!container || typeof FORMULA_CARDS === "undefined") return;

  let filtered = FORMULA_CARDS;

  // Filter by category
  if (category && category !== "all") {
    filtered = filtered.filter(item => item.cat === category);
  }

  // Filter by search query
  if (filterText) {
    filtered = filtered.filter(item => {
      const q = filterText.toLowerCase();
      const inTitle = (item.title || "").toLowerCase().includes(q);
      const inTopic = (item.topic || "").toLowerCase().includes(q);
      const inFormula = (item.formula || "").toLowerCase().includes(q);
      const inNote = (item.note || "").toLowerCase().includes(q);
      const inTags = Array.isArray(item.tags) && item.tags.some(t => t.toLowerCase().includes(q));
      return inTitle || inTopic || inFormula || inNote || inTags;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = \`
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--ink-secondary);">
        <div style="font-size: 36px; margin-bottom: 8px;">🔍</div>
        <h4 style="margin: 0 0 6px; font-size: 16px; color: var(--ink-primary);">No matching formulas found</h4>
        <p style="margin: 0; font-size: 13px;">Try searching for another keyword like "ratio", "divisibility", or "alligation".</p>
      </div>
    \`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    return \`
      <div class="formula-card">
        <div class="formula-card-head">
          <div>
            <span class="formula-card-topic-tag">\${escapeHtml(item.topic)}</span>
            <h4 class="formula-card-title">\${escapeHtml(item.title)}</h4>
          </div>
          <button type="button" class="formula-card-copy-btn" id="btnCopyForm_\${item.id}" title="Copy formula text">📋 Copy</button>
        </div>
        <div class="formula-code-box">\${escapeHtml(item.formula)}</div>
        \${item.note ? \`<p class="formula-card-note">\${escapeHtml(item.note)}</p>\` : ''}
      </div>
    \`;
  }).join("");

  // Attach copy listeners
  filtered.forEach(item => {
    const copyBtn = document.getElementById(\`btnCopyForm_\${item.id}\`);
    if (copyBtn) {
      copyBtn.onclick = () => {
        const textToCopy = \`\${item.title}\\n\${item.formula}\`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.textContent = "✓ Copied!";
            copyBtn.classList.add("is-copied");
            setTimeout(() => {
              copyBtn.textContent = "📋 Copy";
              copyBtn.classList.remove("is-copied");
            }, 1500);
          });
        }
      };
    }
  });
}
`;

// Insert pwaAndFormulaJs right above setupEventListeners
const setupEventListenersMarker = "function setupEventListeners() {";
if (appContent.includes(setupEventListenersMarker)) {
  appContent = appContent.replace(setupEventListenersMarker, pwaAndFormulaJs + "\n" + setupEventListenersMarker);
} else {
  console.warn("Could not find setupEventListenersMarker in app.js");
}

// In setupEventListeners:
// Add Escape key handler for formulaModal and initPwaService()
const oldEscapeHandler = `    if (e.key === "Escape") {
      closeExamTopicModal();
      closePlannerModal();
    }`;

const newEscapeHandler = `    if (e.key === "Escape") {
      closeExamTopicModal();
      closePlannerModal();
      closeFormulaModal();
    }`;

if (appContent.includes(oldEscapeHandler)) {
  appContent = appContent.replace(oldEscapeHandler, newEscapeHandler);
}

// In setupEventListeners: call initPwaService()
const initPwaCall = `  // Initialize PWA Service Worker & Install Affordance
  initPwaService();
`;

const termSelectorResizeMarker = "window.addEventListener(\"resize\", () => {";
if (appContent.includes(termSelectorResizeMarker)) {
  appContent = appContent.replace(termSelectorResizeMarker, initPwaCall + "\n  " + termSelectorResizeMarker);
}

// In window exports at bottom:
const oldWindowExports = `  window.openPlannerModal = openPlannerModal;
  window.closePlannerModal = closePlannerModal;`;

const newWindowExports = `  window.openPlannerModal = openPlannerModal;
  window.closePlannerModal = closePlannerModal;
  window.openFormulaModal = openFormulaModal;
  window.closeFormulaModal = closeFormulaModal;`;

if (appContent.includes(oldWindowExports)) {
  appContent = appContent.replace(oldWindowExports, newWindowExports);
}

fs.writeFileSync('app.js', appContent, 'utf8');
console.log("app.js updated successfully with PWA service & Formula Cheat Sheet controller.");

console.log("=== ALL UPDATES APPLIED! ===");
