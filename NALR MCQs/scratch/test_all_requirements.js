const fs = require("fs");
const assert = require("assert");

console.log("=== COMPREHENSIVE SYLLABUS & MODULE VERIFICATION ===");

// 1. Check datasets
const { QUIZ_QUESTIONS } = require("../quiz_questions.js");
const { SYLLABUS_DATA } = require("../syllabus.js");
const { PPT_MANIFEST } = require("../ppt_manifest.js");
const SolutionVisualizer = require("../interactive_visualizers.js");

// Check syllabus architecture dynamically
const st1Modules = SYLLABUS_DATA.st1.modules;
const expectedModulesCount = st1Modules.length;
assert.strictEqual(expectedModulesCount, 17, `Expected 17 ST-1 modules, got ${expectedModulesCount}`);
assert.strictEqual(SYLLABUS_DATA.st1.badge, `${expectedModulesCount} Modules`, `Badge mismatch in SYLLABUS_DATA.st1`);
console.log(`✓ ST-1 syllabus verified with ${expectedModulesCount} modules and badge: "${SYLLABUS_DATA.st1.badge}".`);

// Check mod15 (FA1 Questions)
const mod15Syllabus = st1Modules.find(m => m.id === "mod15");
assert(mod15Syllabus, "mod15 not found in SYLLABUS_DATA.st1.modules");
assert.strictEqual(mod15Syllabus.num, 15);
assert.strictEqual(mod15Syllabus.title, "FA1 Questions");
const expectedMod15Count = mod15Syllabus.types.reduce((sum, t) => sum + (t.count || 0), 0);
assert.strictEqual(expectedMod15Count, 38, `Expected 38 questions in mod15 syllabus types, got ${expectedMod15Count}`);
console.log("✓ mod15 found in syllabus:", mod15Syllabus.title, `(${mod15Syllabus.types.length} types, ${expectedMod15Count} Qs)`);

// Check mod16 (ST1 Questions)
const mod16Syllabus = st1Modules.find(m => m.id === "mod16");
assert(mod16Syllabus, "mod16 not found in SYLLABUS_DATA.st1.modules");
assert.strictEqual(mod16Syllabus.num, 16);
assert.strictEqual(mod16Syllabus.title, "ST1 Questions");
const expectedMod16Count = mod16Syllabus.types.reduce((sum, t) => sum + (t.count || 0), 0);
assert.strictEqual(expectedMod16Count, 60, `Expected 60 questions in mod16 syllabus types, got ${expectedMod16Count}`);
console.log("✓ mod16 found in syllabus:", mod16Syllabus.title, `(${mod16Syllabus.types.length} types, ${expectedMod16Count} Qs)`);

// Check mod17 (FA2 Questions)
const mod17Syllabus = st1Modules.find(m => m.id === "mod17");
assert(mod17Syllabus, "mod17 not found in SYLLABUS_DATA.st1.modules");
assert.strictEqual(mod17Syllabus.num, 17);
assert.strictEqual(mod17Syllabus.title, "FA2 Questions");
assert.strictEqual(mod17Syllabus.types.length, 2);
assert.strictEqual(mod17Syllabus.types[0].count, 38);
assert.strictEqual(mod17Syllabus.types[1].count, 34);
const expectedMod17Count = mod17Syllabus.types.reduce((sum, t) => sum + (t.count || 0), 0);
assert.strictEqual(expectedMod17Count, 72, `Expected 72 questions in mod17 syllabus types, got ${expectedMod17Count}`);
console.log("✓ mod17 found in syllabus:", mod17Syllabus.title, `(${mod17Syllabus.types.length} types, ${expectedMod17Count} Qs)`);

// Check PPT manifest for mod15 and mod16
assert(PPT_MANIFEST["mod15"], "mod15 missing in PPT_MANIFEST");
assert.strictEqual(PPT_MANIFEST["mod15"].pdfUrl, "PPTs/pdf/FA1.pdf");
assert(fs.existsSync(PPT_MANIFEST["mod15"].pdfUrl), "FA1.pdf file does not exist on disk!");

assert(PPT_MANIFEST["mod16"], "mod16 missing in PPT_MANIFEST");
assert.strictEqual(PPT_MANIFEST["mod16"].pdfUrl, "PPTs/pdf/ST1.pdf");
assert.strictEqual(PPT_MANIFEST["mod16"].slideCount, 64);
assert(fs.existsSync(PPT_MANIFEST["mod16"].pdfUrl), "ST1.pdf file does not exist on disk!");
console.log("✓ PPT_MANIFEST has valid mod15 (FA1.pdf) and mod16 (ST1.pdf), both exist on disk.");

// Check app.js contents
const appContent = fs.readFileSync("app.js", "utf-8");
assert(appContent.includes('"mod15"'), 'app.js selectedExamModuleIds missing "mod15"');
assert(appContent.includes('"mod16"'), 'app.js selectedExamModuleIds missing "mod16"');
assert(appContent.includes('"mod17"'), 'app.js selectedExamModuleIds missing "mod17"');
assert(appContent.includes('mod15: "PPTs/pdf/FA1.pdf"'), 'app.js MODULE_PPT_MAP missing mod15');
assert(appContent.includes('mod16: "PPTs/pdf/ST1.pdf"'), 'app.js MODULE_PPT_MAP missing mod16');
console.log("✓ app.js has mod15, mod16 and mod17 in selectedExamModuleIds.");

// Check question counts in database
const mod15Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod15");
assert.strictEqual(mod15Questions.length, expectedMod15Count, `Expected ${expectedMod15Count} questions for mod15, got ${mod15Questions.length}`);

const mod16Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod16");
assert.strictEqual(mod16Questions.length, expectedMod16Count, `Expected ${expectedMod16Count} questions for mod16, got ${mod16Questions.length}`);

const mod17Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod17");
assert.strictEqual(mod17Questions.length, expectedMod17Count, `Expected ${expectedMod17Count} questions for mod17, got ${mod17Questions.length}`);

// Expected answer key for mod16 (ST1 Questions)
const expectedAnswersMod16 = [
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

mod16Questions.forEach((q, idx) => {
  const expected = expectedAnswersMod16[idx];
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

console.log("\n--- MOD16 ANSWER KEY MISMATCH REPORT ---");
if (mismatches.length === 0) {
  console.log("Mismatches table: EMPTY (0 mismatches detected! All 60 match exactly)");
} else {
  console.table(mismatches);
  process.exit(1);
}

// Verify mod15 questions options and visualizers
mod15Questions.forEach(q => {
  assert(q.options.includes(q.correct), `q.options missing correct for ${q.id}`);
  const vis = SolutionVisualizer.generateVisualizer(q);
  assert(vis.includes("sol-vis-container"), `Missing sol-vis-container for ${q.id}`);
  assert(vis.includes(escapeHtml(q.correct)), `Missing escaped correct answer in visualizer for ${q.id}`);
});
console.log(`✓ All ${mod15Questions.length} mod15 questions verified for options and visualizers.`);

// Verify mod17 questions options and visualizers
mod17Questions.forEach(q => {
  assert(q.options.includes(q.correct), `q.options missing correct for ${q.id}`);
  const vis = SolutionVisualizer.generateVisualizer(q);
  assert(vis.includes("sol-vis-container"), `Missing sol-vis-container for ${q.id}`);
  assert(vis.includes(escapeHtml(q.correct)), `Missing escaped correct answer in visualizer for ${q.id}`);
});
console.log(`✓ All ${mod17Questions.length} mod17 questions verified for options and visualizers.`);

console.log("\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY!");
