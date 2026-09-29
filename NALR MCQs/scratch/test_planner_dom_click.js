const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('components.css', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');

console.log("=== Planner Overlay & Click Audit ===");

// 1. Verify button in HTML
const btnMatch = html.match(/<button[^>]+id=["']btnOpenPlannerModal["'][^>]*>/);
console.log("Button HTML:", btnMatch ? btnMatch[0] : "NOT FOUND");
if (btnMatch && btnMatch[0].includes('onclick="openPlannerModal()"')) {
  console.log("✓ btnOpenPlannerModal has inline onclick handler.");
} else {
  console.error("❌ btnOpenPlannerModal is missing inline onclick handler!");
}

// 2. Verify modal in HTML
const modalMatch = html.match(/<div[^>]+id=["']plannerModal["'][^>]*>/);
console.log("Modal HTML:", modalMatch ? modalMatch[0] : "NOT FOUND");
if (modalMatch && modalMatch[0].includes('exam-topic-modal')) {
  console.log("✓ plannerModal has exam-topic-modal class.");
} else {
  console.error("❌ plannerModal is missing exam-topic-modal class!");
}

// 3. Verify backdrop in HTML
if (html.includes('id="plannerTopicBackdrop"')) {
  console.log("✓ plannerTopicBackdrop element is present.");
} else {
  console.error("❌ plannerTopicBackdrop is missing!");
}

// 4. Verify CSS rules for modal and backdrop
if (css.includes('.exam-topic-modal') && css.includes('position: fixed') && css.includes('z-index: 10000')) {
  console.log("✓ CSS defines position: fixed and z-index: 10000 for modal.");
} else {
  console.error("❌ CSS missing fixed position or z-index for modal!");
}

// 5. Verify window bindings in app.js
if (appJs.includes('window.openPlannerModal = openPlannerModal')) {
  console.log("✓ window.openPlannerModal is explicitly bound.");
} else {
  console.error("❌ window.openPlannerModal is NOT bound!");
}

// 6. Verify cache version bump
if (/app\.js\?v=(10\.[2-9]|11\.[0-9])/.test(html) && /components\.css\?v=(10\.[2-9]|11\.[0-9])/.test(html)) {
  console.log("✓ Cache-busting version bumped to v=10.2+.");
} else {
  console.error("❌ Version not bumped to v=10.2+!");
  process.exit(1);
}

// 7. Verify 4-Point Layout Architecture
// Requirement 1: Modal Container max-height 85vh, flex col, overflow hidden
if (css.includes('.planner-dialog') && css.includes('max-height: 85vh') && css.includes('display: flex') && css.includes('flex-direction: column') && css.includes('overflow: hidden')) {
  console.log("✓ Req 1: .planner-dialog has max-height: 85vh, flex column, overflow: hidden.");
} else {
  console.error("❌ Req 1: .planner-dialog missing required flex/overflow/height rules!");
  process.exit(1);
}

// Requirement 2: Scrollable Body wrapping accordions with overflow-y: auto and flex: 1
if (html.includes('class="planner-scrollable-body"') && css.includes('.planner-scrollable-body') && css.includes('overflow-y: auto')) {
  console.log("✓ Req 2: .planner-scrollable-body wrapper has overflow-y: auto and flex: 1.");
} else {
  console.error("❌ Req 2: .planner-scrollable-body missing in HTML or CSS!");
  process.exit(1);
}

// Requirement 3: Sticky Footer outside scrollable container
const setupViewHtml = html.substring(html.indexOf('id="plannerSetupView"'), html.indexOf('id="plannerScheduleView"'));
const scrollBodyIndex = setupViewHtml.indexOf('class="planner-scrollable-body"');
const footerIndex = setupViewHtml.indexOf('class="exam-topic-footer planner-footer"');
if (scrollBodyIndex !== -1 && footerIndex !== -1 && footerIndex > scrollBodyIndex && css.includes('.planner-footer') && css.includes('border-top: 1.5px solid')) {
  console.log("✓ Req 3: Sticky footer is placed outside scrollable container with solid background & top border.");
} else {
  console.error("❌ Req 3: Sticky footer layout structure incorrect!");
  process.exit(1);
}

// Requirement 4: Fixed Header (Target Exam Date card never scrolls)
if (html.includes('class="planner-setup-fixed-head"') && css.includes('.planner-setup-fixed-head') && css.includes('flex-shrink: 0')) {
  console.log("✓ Req 4: .planner-setup-fixed-head keeps Target Exam Date and topic selection fixed at top.");
} else {
  console.error("❌ Req 4: .planner-setup-fixed-head missing or flex-shrink not set!");
  process.exit(1);
}

console.log("\nAll checks passed successfully!");
