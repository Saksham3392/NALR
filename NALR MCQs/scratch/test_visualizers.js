const assert = require("assert");
const { QUIZ_QUESTIONS } = require("../quiz_questions.js");
const { SYLLABUS_DATA } = require("../syllabus.js");
const SolutionVisualizer = require("../interactive_visualizers.js");

console.log("=== VISUALIZER INTEGRITY TEST SUITE ===");

// 1. Dynamically calculate expected counts from syllabus.js
const st1Modules = SYLLABUS_DATA.st1.modules;
const mod15Syllabus = st1Modules.find(m => m.id === "mod15");
const mod16Syllabus = st1Modules.find(m => m.id === "mod16");
const mod17Syllabus = st1Modules.find(m => m.id === "mod17");

assert(mod15Syllabus, "mod15 not found in SYLLABUS_DATA.st1.modules");
assert(mod16Syllabus, "mod16 not found in SYLLABUS_DATA.st1.modules");
assert(mod17Syllabus, "mod17 not found in SYLLABUS_DATA.st1.modules");

const expectedMod15Count = mod15Syllabus.types.reduce((sum, t) => sum + (t.count || 0), 0);
const expectedMod16Count = mod16Syllabus.types.reduce((sum, t) => sum + (t.count || 0), 0);
const expectedMod17Count = mod17Syllabus.types.reduce((sum, t) => sum + (t.count || 0), 0);

const mod15Qs = QUIZ_QUESTIONS.filter(q => q.module_id === "mod15");
const mod16Qs = QUIZ_QUESTIONS.filter(q => q.module_id === "mod16");
const mod17Qs = QUIZ_QUESTIONS.filter(q => q.module_id === "mod17");

console.log(`Found ${mod15Qs.length} questions for mod15 (expected: ${expectedMod15Count}).`);
console.log(`Found ${mod16Qs.length} questions for mod16 (expected: ${expectedMod16Count}).`);
console.log(`Found ${mod17Qs.length} questions for mod17 (expected: ${expectedMod17Count}).`);

assert.strictEqual(mod15Qs.length, expectedMod15Count, `mod15 count mismatch: expected ${expectedMod15Count}, got ${mod15Qs.length}`);
assert.strictEqual(mod16Qs.length, expectedMod16Count, `mod16 count mismatch: expected ${expectedMod16Count}, got ${mod16Qs.length}`);
assert.strictEqual(mod17Qs.length, expectedMod17Count, `mod17 count mismatch: expected ${expectedMod17Count}, got ${mod17Qs.length}`);

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function verifyQuestionList(questions, label) {
  const seenIds = new Set();
  let errors = 0;

  for (const q of questions) {
    try {
      // 1. Unique IDs
      assert(!seenIds.has(q.id), `Duplicate ID: ${q.id}`);
      seenIds.add(q.id);

      // 2. options.includes(correct)
      assert(q.options.includes(q.correct), `q.options does not include q.correct for ${q.id}`);

      // 3. generateVisualizer(q) returns HTML with container
      const html = SolutionVisualizer.generateVisualizer(q);
      assert(typeof html === "string" && html.length > 0, `generateVisualizer returned empty for ${q.id}`);
      assert(html.includes("sol-vis-container"), `Visualizer HTML missing sol-vis-container for ${q.id}`);

      // 4. Output contains escaped correct answer
      const escapedCorrect = escapeHtml(q.correct);
      assert(html.includes(escapedCorrect), `Visualizer HTML missing escaped correct answer '${escapedCorrect}' for ${q.id}`);
    } catch (err) {
      console.error(`❌ Failed on ${q.id}:`, err.message);
      errors++;
    }
  }

  return errors;
}

console.log("\nVerifying mod15 visualizers...");
const mod15Errors = verifyQuestionList(mod15Qs, "mod15");
assert.strictEqual(mod15Errors, 0, `Errors in mod15 visualizers: ${mod15Errors}`);
console.log(`✓ All ${mod15Qs.length} mod15 questions passed visualizer tests.`);

console.log("\nVerifying mod16 visualizers...");
const mod16Errors = verifyQuestionList(mod16Qs, "mod16");
assert.strictEqual(mod16Errors, 0, `Errors in mod16 visualizers: ${mod16Errors}`);
console.log(`✓ All ${mod16Qs.length} mod16 questions passed visualizer tests.`);

console.log("\nVerifying mod17 visualizers...");
const mod17Errors = verifyQuestionList(mod17Qs, "mod17");
assert.strictEqual(mod17Errors, 0, `Errors in mod17 visualizers: ${mod17Errors}`);
console.log(`✓ All ${mod17Qs.length} mod17 questions passed visualizer tests.`);

console.log("\nVerifying ALL active questions in quiz database...");
const totalErrors = verifyQuestionList(QUIZ_QUESTIONS, "all questions");
assert.strictEqual(totalErrors, 0, `Total errors across all questions: ${totalErrors}`);
console.log(`✓ ALL ${QUIZ_QUESTIONS.length} QUESTIONS PASSED VISUALIZER GENERATION & ANSWER DISPLAY TESTS!`);

console.log("\n🎉 ALL VISUALIZER TESTS COMPLETED WITH 0 ERRORS!");
