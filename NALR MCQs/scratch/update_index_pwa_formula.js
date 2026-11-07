const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf8');

// 1. Insert PWA manifest link if not present
if (!index.includes('rel="manifest"')) {
  const targetFavicon = '<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />';
  const pwaLinks = '<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />\r\n  <link rel="manifest" href="manifest.json?v=18.1" />\r\n  <meta name="apple-mobile-web-app-capable" content="yes" />\r\n  <meta name="apple-mobile-web-app-status-bar-style" content="default" />\r\n  <meta name="apple-mobile-web-app-title" content="NALR MCQs" />';
  index = index.replace(targetFavicon, pwaLinks);
  console.log("Added PWA manifest link & meta tags to head.");
} else {
  console.log("PWA manifest link already in index.html.");
}

// 2. Insert formulaModal if not present
if (!index.includes('id="formulaModal"')) {
  const targetResults = '<!-- Results Screen -->';
  const formulaModalMarkup = `<!-- ========================================================
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
  index = index.replace(targetResults, formulaModalMarkup + targetResults);
  console.log("Added formulaModal markup before Results Screen.");
} else {
  console.log("formulaModal markup already present.");
}

fs.writeFileSync('index.html', index, 'utf8');
console.log("index.html updated successfully!");
