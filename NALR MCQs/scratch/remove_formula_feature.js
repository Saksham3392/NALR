const fs = require('fs');

console.log("=== REMOVING FORMULAS CHEAT SHEET FEATURE ===");

// 1. UPDATE index.html
console.log("Cleaning index.html...");
let indexHtml = fs.readFileSync('index.html', 'utf8');

// A. Remove Formula button from header
indexHtml = indexHtml.replace(
  /\s*<button class="btn-minimal-secondary btn-formula-trigger" id="btnFormulaSheet" onclick="openFormulaModal\(\)" title="Quick Formula & Cheat Sheet Reference">📐 Formulas<\/button>/g,
  ''
);

// B. Remove formulaModal markup
const modalStart = indexHtml.indexOf('<!-- ========================================================\n         FORMULAS & CHEAT SHEET QUICK DRAWER');
const modalStartAlt = indexHtml.indexOf('<!-- ========================================================\r\n         FORMULAS & CHEAT SHEET QUICK DRAWER');
const mStart = modalStart !== -1 ? modalStart : modalStartAlt;

if (mStart !== -1) {
  const mEnd = indexHtml.indexOf('<!-- Results Screen -->', mStart);
  if (mEnd !== -1) {
    indexHtml = indexHtml.slice(0, mStart) + indexHtml.slice(mEnd);
    console.log("Removed formulaModal markup from index.html.");
  }
} else {
  // Try finding by id="formulaModal"
  const formModalIdx = indexHtml.indexOf('id="formulaModal"');
  if (formModalIdx !== -1) {
    const startTag = indexHtml.lastIndexOf('<div class="exam-topic-modal" id="formulaModal"', formModalIdx);
    const endTag = indexHtml.indexOf('<!-- Results Screen -->', formModalIdx);
    if (startTag !== -1 && endTag !== -1) {
      indexHtml = indexHtml.slice(0, startTag) + indexHtml.slice(endTag);
      console.log("Removed formulaModal markup via fallback.");
    }
  }
}

// C. Remove formula_data.js script tag
indexHtml = indexHtml.replace(/\s*<script src="formula_data\.js\?v=18\.\d+"><\/script>/g, '');

// D. Bump cache version to ?v=18.2
indexHtml = indexHtml.replace(/\?v=18\.1/g, '?v=18.2');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log("index.html cleaned and bumped to ?v=18.2.");

// 2. UPDATE sw.js
console.log("Cleaning sw.js...");
let swContent = fs.readFileSync('sw.js', 'utf8');
swContent = swContent.replace(/v18\.1/g, 'v18.2');
swContent = swContent.replace(/\s*'(\.\/)?formula_data\.js',?/g, '');
fs.writeFileSync('sw.js', swContent, 'utf8');
console.log("sw.js cleaned and bumped to v18.2.");

// 3. UPDATE components.css
console.log("Cleaning components.css...");
let cssContent = fs.readFileSync('components.css', 'utf8');

// Locate start of Formula CSS
const formCssMarker = '/* Formula Modal & Dialog */';
const formCssIdx = cssContent.indexOf(formCssMarker);

if (formCssIdx !== -1) {
  // Find start of the comment block above it
  const commentStart = cssContent.lastIndexOf('/* ==========================================================================', formCssIdx);
  if (commentStart !== -1) {
    // We want to keep PWA install button styles, but remove formula styles
    // Let's check what is between commentStart and end
    const pwaBtnMarker = '.btn-pwa-install';
    const pwaBtnIdx = cssContent.indexOf(pwaBtnMarker, commentStart);
    const pwaEndIdx = cssContent.indexOf('@keyframes pwaPulseNudge', pwaBtnIdx);
    const pwaBlockEnd = cssContent.indexOf('}\n}', pwaEndIdx) !== -1 ? cssContent.indexOf('}\n}', pwaEndIdx) + 3 : cssContent.indexOf('}\r\n}', pwaEndIdx) + 4;

    const pwaStylesToKeep = `
/* ==========================================================================
   PWA Install Button
   ========================================================================== */
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
`;
    cssContent = cssContent.slice(0, commentStart) + pwaStylesToKeep;
    fs.writeFileSync('components.css', cssContent.trimEnd() + '\n', 'utf8');
    console.log("components.css cleaned (Formula styles removed, PWA install styles kept).");
  }
}

// 4. UPDATE app.js
console.log("Cleaning app.js...");
let appContent = fs.readFileSync('app.js', 'utf8');

// Remove FORMULAS & QUICK CHEAT SHEET section
const formJsStart = appContent.indexOf('// SECTION: FORMULAS & QUICK CHEAT SHEET DRAWER CONTROLLER');
if (formJsStart !== -1) {
  const commentStart = appContent.lastIndexOf('// =============================================================================', formJsStart);
  const nextSection = appContent.indexOf('function setupEventListeners()', formJsStart);
  if (commentStart !== -1 && nextSection !== -1) {
    appContent = appContent.slice(0, commentStart) + appContent.slice(nextSection);
    console.log("Removed Formula controller functions from app.js.");
  }
}

// Remove closeFormulaModal() from Escape handler
appContent = appContent.replace(/\s*closeFormulaModal\(\);/g, '');

// Remove window exports
appContent = appContent.replace(/\s*window\.openFormulaModal = openFormulaModal;/g, '');
appContent = appContent.replace(/\s*window\.closeFormulaModal = closeFormulaModal;/g, '');

fs.writeFileSync('app.js', appContent, 'utf8');
console.log("app.js cleaned.");

// Delete formula_data.js if present
if (fs.existsSync('formula_data.js')) {
  fs.unlinkSync('formula_data.js');
  console.log("Deleted formula_data.js.");
}

console.log("=== REMOVAL COMPLETE! ===");
