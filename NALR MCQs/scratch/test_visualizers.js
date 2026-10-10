const assert = require("assert");
const { QUIZ_QUESTIONS } = require("../quiz_questions.js");
const SolutionVisualizer = require("../interactive_visualizers.js");

const mod15Qs = QUIZ_QUESTIONS.filter(q => q.module_id === "mod15");

console.log(`Found ${mod15Qs.length} questions for mod15.`);
assert.strictEqual(mod15Qs.length, 60, "Must have exactly 60 questions for mod15");

const seenIds = new Set();
let errorCount = 0;

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

for (const q of mod15Qs) {
  try {
    // 1. Unique IDs
    assert(!seenIds.has(q.id), `Duplicate ID: ${q.id}`);
    seenIds.add(q.id);

    // 2. options.includes(correct)
    assert(q.options.includes(q.correct), `q.options does not include q.correct for ${q.id}`);

    // 3. generateVisualizer(q)
    const html = SolutionVisualizer.generateVisualizer(q);
    assert(typeof html === "string" && html.length > 0, `generateVisualizer returned empty for ${q.id}`);
    assert(html.includes("sol-vis-container"), `Visualizer HTML missing sol-vis-container for ${q.id}`);

    // 4. Output contains escaped correct answer
    const escapedCorrect = escapeHtml(q.correct);
    assert(html.includes(escapedCorrect), `Visualizer HTML missing escaped correct answer '${escapedCorrect}' for ${q.id}`);

    console.log(`✓ ${q.id} (${q.type_id}) passed visualizer generation.`);
  } catch (err) {
    console.error(`❌ Failed on ${q.id}:`, err.message);
    errorCount++;
  }
}

if (errorCount === 0) {
  console.log("\n🎉 ALL 60 MOD15 QUESTIONS PASSED VISUALIZER TESTS WITH 0 ERRORS!");
} else {
  console.error(`\n❌ ${errorCount} errors detected in visualizer test!`);
  process.exit(1);
}
