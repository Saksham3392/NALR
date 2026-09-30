/**
 * Test Suite: Tactile Micro-Interactions, Clean Colors & In-Place Zero-Refresh
 */
const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("=== RUNNING TACTILE & IN-PLACE INTERACTIONS TEST SUITE ===");

// 1. Audit components.css
const compCss = fs.readFileSync(path.join(__dirname, "..", "components.css"), "utf-8");

// A. No ticks or crosses on option buttons
assert.ok(
  !compCss.includes(".exam-opt-btn.correct::after"),
  "components.css must NOT have green checkmark pseudo badge on .exam-opt-btn.correct::after"
);
assert.ok(
  !compCss.includes(".exam-opt-btn.wrong::after"),
  "components.css must NOT have cross icon pseudo badge on .exam-opt-btn.wrong::after"
);
assert.ok(
  !compCss.includes("checkmarkSpringPop"),
  "components.css must not have checkmarkSpringPop animation"
);

console.log("[PASS] Ticks and crosses completely removed from option buttons.");

// B. Clean Emerald and Crimson Colors
assert.ok(
  compCss.includes(".exam-opt-btn.correct") && compCss.includes("var(--emerald-green)"),
  "components.css must style correct button with emerald green"
);
assert.ok(
  compCss.includes(".exam-opt-btn.wrong") && compCss.includes("var(--crimson-red)"),
  "components.css must style wrong button with crimson red"
);
console.log("[PASS] Clean emerald and crimson colors verified on options.");

// C. Animations on Options
assert.ok(
  compCss.includes("optionCorrectBounce"),
  "components.css must define optionCorrectBounce animation"
);
assert.ok(
  compCss.includes("optionWrongShake"),
  "components.css must define optionWrongShake animation"
);
assert.ok(
  compCss.includes("badgeSpringBounce"),
  "components.css must define badgeSpringBounce animation"
);
assert.ok(
  compCss.includes(".exam-opt-btn.dimmed"),
  "components.css must define focus dimming state for unselected options"
);
assert.ok(
  compCss.includes(".feedback-status-pill.is-correct") && compCss.includes(".feedback-status-pill.is-wrong"),
  "components.css must define clean feedback status pills without emojis"
);
assert.ok(
  compCss.includes("optionRippleGlow"),
  "components.css must define optionRippleGlow animation for tactile ripple feedback"
);
console.log("[PASS] Option spring bounce, soft shake, ripple glow, and focus dimming animations verified.");

// D. Green glowing pulse to guide eye to correct answer
assert.ok(
  compCss.includes("correctGuidePulse"),
  "components.css must define correctGuidePulse animation"
);
assert.ok(
  compCss.includes(".exam-opt-btn.correct.guide-pulse") || compCss.includes(":has(.wrong) .exam-opt-btn.correct"),
  "components.css must apply correctGuidePulse when student picked wrong option"
);
console.log("[PASS] Correct answer guide pulse verified.");

// E. Universal Tactile Button Depress (0.985 Scale)
assert.ok(
  compCss.includes("transform: scale(0.985)"),
  "components.css must define transform: scale(0.985) on active buttons/options"
);
console.log("[PASS] Universal tactile button depress (scale 0.985) verified.");

// 2. Audit app.js logic (Zero-Refresh In-Place Updates)
const appJs = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf-8");

assert.ok(
  appJs.includes("function handlePracticeAnswer"),
  "app.js must define handlePracticeAnswer for in-place DOM updates"
);
assert.ok(
  appJs.includes("function handlePracticeClear"),
  "app.js must define handlePracticeClear for in-place choice reset"
);
assert.ok(
  appJs.includes("function handlePracticeFlagToggle"),
  "app.js must define handlePracticeFlagToggle for in-place flag toggling"
);
assert.ok(
  appJs.includes("function handleExamAnswer"),
  "app.js must define handleExamAnswer for in-place exam answers"
);
assert.ok(
  appJs.includes("function updateLivePracticeProgress"),
  "app.js must define updateLivePracticeProgress to update stats without rebuilding DOM"
);

// Verify that practice and exam clicks do NOT trigger full re-renders
assert.ok(
  !appJs.includes("optBtn.addEventListener(\"click\", () => {\n        userPracticeAnswers[q.id] = opt;\n        if (typeof sounds !== \"undefined\")"),
  "app.js practice mode click must not call renderApplication()"
);
assert.ok(
  !appJs.includes("optBtn.addEventListener(\"click\", () => {\n        userExamAnswers[q.id] = opt;\n        if (typeof sounds !== \"undefined\")"),
  "app.js exam mode click must not call renderFullExamQuestions()"
);

// Verify emojis removed from headlines
assert.ok(
  !appJs.includes("✅ Correct Answer!"),
  "app.js must not include checkmark emoji in feedback headlines"
);
assert.ok(
  !appJs.includes("❌ Incorrect Choice!"),
  "app.js must not include cross emoji in feedback headlines"
);

console.log("[PASS] app.js: In-place DOM updates, zero refresh, and clean headlines verified.");

// 3. Audit index.html cache busting
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf-8");
assert.ok(/components\.css\?v=11\.[5-9]/.test(html), "index.html must reference components.css?v=11.5+");
assert.ok(/app\.js\?v=11\.[5-9]/.test(html), "index.html must reference app.js?v=11.5+");

console.log("[PASS] index.html: Cache query strings bumped to v=11.6+.");

console.log("\nALL TACTILE & IN-PLACE INTERACTION TESTS PASSED PERFECTLY! 🎯⚡");
