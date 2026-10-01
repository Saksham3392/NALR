const fs = require('fs');

console.log("=== Testing Spotlight & Theme Transition Integration ===");

// 1. Check components.css
const css = fs.readFileSync('components.css', 'utf-8');
const checks = [
  { name: '::view-transition-old(root)', pattern: /::view-transition-old\(root\)/ },
  { name: '::view-transition-new(root)', pattern: /::view-transition-new\(root\)/ },
  { name: 'Dynamic Spotlight .study-card-main::before', pattern: /\.study-card-main::before/ },
  { name: 'Dynamic Spotlight .exam-question-card::before', pattern: /\.exam-question-card::before/ },
  { name: 'Dynamic Spotlight .tab-question-item::before', pattern: /\.tab-question-item::before/ },
  { name: 'Mask Composite radial gradient', pattern: /radial-gradient\(\s*420px circle at var\(--mouse-x/ },
  { name: 'Dark mode spotlight gradient', pattern: /\[data-theme="dark"\]\s+\.study-card-main::before/ },
  { name: 'Ambient inner sheen ::after', pattern: /\.study-card-main::after/ }
];

let cssPassed = true;
checks.forEach(c => {
  if (c.pattern.test(css)) {
    console.log(`✓ CSS Check passed: ${c.name}`);
  } else {
    console.error(`❌ CSS Check failed: ${c.name}`);
    cssPassed = false;
  }
});

// 2. Check app.js
const appJs = fs.readFileSync('app.js', 'utf-8');
const jsChecks = [
  { name: 'applyThemeChange function', pattern: /function applyThemeChange\(/ },
  { name: 'startViewTransition check', pattern: /document\.startViewTransition/ },
  { name: 'Clip-path animation with circle', pattern: /circle\(0px at \$\{x\}px \$\{y\}px\)/ },
  { name: 'Pointermove spotlight tracker', pattern: /document\.addEventListener\("pointermove"/ },
  { name: 'Mouse-x and mouse-y property setters', pattern: /(el|card)\.style\.setProperty\("--mouse-x"/ }
];

let jsPassed = true;
jsChecks.forEach(c => {
  if (c.pattern.test(appJs)) {
    console.log(`✓ JS Check passed: ${c.name}`);
  } else {
    console.error(`❌ JS Check failed: ${c.name}`);
    jsPassed = false;
  }
});

// 3. Check index.html cache busting
const html = fs.readFileSync('index.html', 'utf-8');
if (/components\.css\?v=(10\.[4-9]|11\.[0-9])/.test(html) && /app\.js\?v=(10\.[4-9]|11\.[0-9])/.test(html)) {
  console.log('✓ Cache versions bumped in index.html');
} else {
  console.error('❌ Cache version mismatch in index.html');
  process.exit(1);
}

if (!cssPassed || !jsPassed) {
  process.exit(1);
}

console.log("\nAll Spotlight & Circular Theme Transition tests passed successfully!");
