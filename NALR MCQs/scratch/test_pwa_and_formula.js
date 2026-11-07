const fs = require('fs');
const path = require('path');

console.log("=== VERIFYING PWA & FORMULA SHEET ASSETS ===");

const rootDir = path.resolve(__dirname, '..');

// 1. Verify manifest.json
const manifest = JSON.parse(fs.readFileSync(path.join(rootDir, 'manifest.json'), 'utf8'));
console.log('✓ manifest.json loaded:', manifest.short_name, '| Start URL:', manifest.start_url);
if (!manifest.icons || manifest.icons.length === 0) {
  throw new Error("Manifest has no icons!");
}

// 2. Verify sw.js
const sw = fs.readFileSync(path.join(rootDir, 'sw.js'), 'utf8');
if (!sw.includes('STATIC_ASSETS') || !sw.includes('caches.open')) {
  throw new Error("sw.js is missing required caching logic!");
}
console.log('✓ sw.js has cache shell & fetch handler.');

// 3. Verify formula_data.js
const { FORMULA_CATEGORIES, FORMULA_CARDS } = require(path.join(rootDir, 'formula_data.js'));
console.log(`✓ formula_data.js loaded: ${FORMULA_CATEGORIES.length} categories, ${FORMULA_CARDS.length} formula cards.`);

FORMULA_CARDS.forEach(card => {
  if (!card.id || !card.cat || !card.topic || !card.title || !card.formula) {
    throw new Error(`Formula card ${card.id} is missing required fields!`);
  }
});
console.log('✓ All formula cards have valid properties.');

// 4. Verify index.html contains all triggers and modals
const index = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
['rel="manifest"', 'id="formulaModal"', 'id="btnFormulaSheet"', 'id="btnInstallPwa"', 'formula_data.js'].forEach(token => {
  if (!index.includes(token)) {
    throw new Error(`index.html is missing token: ${token}`);
  }
});
console.log('✓ index.html has all PWA and Formula Sheet DOM elements.');

// 5. Verify app.js contains controllers
const app = fs.readFileSync(path.join(rootDir, 'app.js'), 'utf8');
['initPwaService', 'openFormulaModal', 'closeFormulaModal', 'renderFormulaCards'].forEach(token => {
  if (!app.includes(token)) {
    throw new Error(`app.js is missing controller function: ${token}`);
  }
});
console.log('✓ app.js has all PWA and Formula Sheet controllers.');

console.log('🎉 ALL PWA & FORMULA CHEAT SHEET TESTS PASSED WITH 0 ERRORS!');
