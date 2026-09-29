const fs = require('fs');

console.log("=== Testing Fluid Layout Transitions & Navigation ===");

// 1. Check components.css
const css = fs.readFileSync('components.css', 'utf-8');
const cssChecks = [
  { name: 'Liquid Sliding Pill .term-sliding-pill', pattern: /\.term-sliding-pill\s*\{/ },
  { name: 'Pill transform & width transitions', pattern: /transition:\s*transform\s*0\.35s/ },
  { name: 'Zero-Jank Accordion grid-template-rows on .exam-feedback-box', pattern: /grid-template-rows:\s*0fr/ },
  { name: 'Accordion expanded grid-template-rows 1fr', pattern: /\.exam-feedback-box\.is-shown\s*\{\s*grid-template-rows:\s*1fr;/ },
  { name: '.exam-feedback-box-content min-height 0', pattern: /\.exam-feedback-box-content\s*\{[^}]*min-height:\s*0;/ },
  { name: 'Cascade keyframe slideDown', pattern: /@keyframes cascadeSlideDown/ },
  { name: 'Cascade keyframe fadeIn', pattern: /@keyframes cascadeFadeIn/ },
  { name: 'Cascade keyframe floatUp', pattern: /@keyframes cascadeFloatUp/ },
  { name: 'Banner animation delay 0ms', pattern: /\.current-topic-banner[^}]*animation-delay:\s*0ms/ },
  { name: 'Text animation delay 40ms', pattern: /\.tab-q-text[^}]*animation-delay:\s*40ms/ },
  { name: 'Option 1 delay 70ms', pattern: /\.exam-opt-btn:nth-child\(1\)[^}]*animation-delay:\s*70ms/ },
  { name: 'Option 2 delay 100ms', pattern: /\.exam-opt-btn:nth-child\(2\)[^}]*animation-delay:\s*100ms/ },
  { name: 'Option 3 delay 130ms', pattern: /\.exam-opt-btn:nth-child\(3\)[^}]*animation-delay:\s*130ms/ },
  { name: 'Option 4 delay 160ms', pattern: /\.exam-opt-btn:nth-child\(4\)[^}]*animation-delay:\s*160ms/ }
];

let allCssPassed = true;
cssChecks.forEach(c => {
  if (c.pattern.test(css)) {
    console.log(`✓ CSS Check passed: ${c.name}`);
  } else {
    console.error(`❌ CSS Check failed: ${c.name}`);
    allCssPassed = false;
  }
});

// 2. Check app.js
const appJs = fs.readFileSync('app.js', 'utf-8');
const jsChecks = [
  { name: 'Liquid pill positioning in updateTermSelectorButtonsUI', pattern: /termSlidingPill/ },
  { name: 'Liquid pill transform translateX', pattern: /pill\.style\.transform = `translateX\(/ },
  { name: 'Liquid pill width syncing', pattern: /pill\.style\.width = `\$\{btnRect\.width\}px`/ },
  { name: 'Wrap feedbackBox in exam-feedback-box-content', pattern: /<div class="exam-feedback-box-content">/ },
  { name: 'Resize listener for liquid pill', pattern: /window\.addEventListener\("resize",\s*\(\)\s*=>\s*\{/ }
];

let allJsPassed = true;
jsChecks.forEach(c => {
  if (c.pattern.test(appJs)) {
    console.log(`✓ JS Check passed: ${c.name}`);
  } else {
    console.error(`❌ JS Check failed: ${c.name}`);
    allJsPassed = false;
  }
});

// 3. Check index.html
const html = fs.readFileSync('index.html', 'utf-8');
if (html.includes('id="termSlidingPill"')) {
  console.log('✓ HTML Check passed: #termSlidingPill in index.html');
} else {
  console.error('❌ HTML Check failed: #termSlidingPill missing in index.html');
  process.exit(1);
}

if (!allCssPassed || !allJsPassed) {
  process.exit(1);
}

console.log("\nAll Fluid Layout Transitions & Navigation tests passed successfully!");
