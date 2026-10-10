const fs = require("fs");
const assert = require("assert");

console.log("=== COMPREHENSIVE MOD15 VERIFICATION ===");

// 1. Check datasets
const { QUIZ_QUESTIONS } = require("../quiz_questions.js");
const { SYLLABUS_DATA } = require("../syllabus.js");
const { PPT_MANIFEST } = require("../ppt_manifest.js");
const SolutionVisualizer = require("../interactive_visualizers.js");

// Check syllabus
const st1Modules = SYLLABUS_DATA.st1.modules;
const mod15Syllabus = st1Modules.find(m => m.id === "mod15");
assert(mod15Syllabus, "mod15 not found in SYLLABUS_DATA.st1.modules");
console.log("✓ mod15 found in syllabus:", mod15Syllabus.title, `(${mod15Syllabus.types.length} types)`);
assert.strictEqual(SYLLABUS_DATA.st1.badge, "15 Modules");
assert.strictEqual(mod15Syllabus.num, 15);
assert.strictEqual(mod15Syllabus.types[0].count, 11);
assert.strictEqual(mod15Syllabus.types[1].count, 17);
assert.strictEqual(mod15Syllabus.types[2].count, 17);
assert.strictEqual(mod15Syllabus.types[3].count, 15);

// Check PPT manifest
assert(PPT_MANIFEST["mod15"], "mod15 missing in PPT_MANIFEST");
assert.strictEqual(PPT_MANIFEST["mod15"].pdfUrl, "PPTs/pdf/ST1.pdf");
assert.strictEqual(PPT_MANIFEST["mod15"].slideCount, 64);
assert(fs.existsSync(PPT_MANIFEST["mod15"].pdfUrl), "ST1.pdf file does not exist on disk!");
console.log("✓ PPT_MANIFEST has mod15 and ST1.pdf exists on disk.");

// Check app.js contents
const appContent = fs.readFileSync("app.js", "utf-8");
assert(appContent.includes('"mod15"'), 'app.js selectedExamModuleIds missing "mod15"');
assert(appContent.includes('mod15: "PPTs/pdf/ST1.pdf"'), 'app.js MODULE_PPT_MAP missing mod15');
console.log("✓ app.js has mod15 in selectedExamModuleIds and MODULE_PPT_MAP.");

// Check 60 questions
const mod15Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod15");
assert.strictEqual(mod15Questions.length, 60, `Expected 60 questions, got ${mod15Questions.length}`);

// Expected answer key
const expectedAnswers = [
  // NS 1-11
  "None of these", "3", "220", "24", "24", "7", "9", "99936", "5001", "6", "31",
  // HCF/LCM 1-17
  "60", "84", "38", "900", "35, 21", "3⁵", "2", "80", "4", "12, 24, 36", "195 and 143", "0.12", "288, 216", "2", "60", "91", "3600",
  // Average 1-17
  "None of These", "300 km/hr", "66", "k+6", "61 years", "None of these", "None", "None of these", "6.25", "50", "558", "Rs 41.53", "2.6 inches", "100", "34", "50.5", "18",
  // Remainder 1-15
  "99962", "1 or 5", "4", "713", "2, 3", "1", "5", "544", "18004", "2", "4", "9", "0", "565", "1683"
];

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const mismatches = [];

mod15Questions.forEach((q, idx) => {
  const expected = expectedAnswers[idx];
  if (q.correct !== expected) {
    mismatches.push({
      index: idx + 1,
      id: q.id,
      actual: q.correct,
      expected: expected
    });
  }

  // Options verification
  assert(q.options.includes(q.correct), `q.options missing correct for ${q.id}`);

  // Visualizer test
  const vis = SolutionVisualizer.generateVisualizer(q);
  assert(vis.includes("sol-vis-container"), `Missing sol-vis-container for ${q.id}`);
  assert(vis.includes(escapeHtml(q.correct)), `Missing escaped correct answer in visualizer for ${q.id}`);
});

console.log("\n--- ANSWER KEY MISMATCH REPORT ---");
if (mismatches.length === 0) {
  console.log("Mismatches table: EMPTY (0 mismatches detected! All 60 match exactly)");
} else {
  console.table(mismatches);
  process.exit(1);
}

console.log("\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY!");
