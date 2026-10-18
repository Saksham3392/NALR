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
assert.strictEqual(expectedMod16Count, 112, `Expected 112 questions in mod16 syllabus types, got ${expectedMod16Count}`);
console.log("✓ mod16 found in syllabus:", mod16Syllabus.title, `(${mod16Syllabus.types.length} types, ${expectedMod16Count} Qs)`);

// Check mod12 (Allegation)
const mod12Syllabus = st1Modules.find(m => m.id === "mod12");
assert(mod12Syllabus, "mod12 not found in SYLLABUS_DATA.st1.modules");
assert.strictEqual(mod12Syllabus.num, 12);
assert.strictEqual(mod12Syllabus.title, "Allegation");
assert.strictEqual(mod12Syllabus.types.length, 4);
const expectedMod12Count = mod12Syllabus.types.reduce((sum, t) => sum + (t.count || 0), 0);
assert.strictEqual(expectedMod12Count, 25, `Expected 25 questions in mod12 syllabus types, got ${expectedMod12Count}`);
console.log("✓ mod12 found in syllabus:", mod12Syllabus.title, `(${mod12Syllabus.types.length} types, ${expectedMod12Count} Qs)`);

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

// Check PPT manifest for mod12, mod15, mod16
assert(PPT_MANIFEST["mod12"], "mod12 missing in PPT_MANIFEST");
assert.strictEqual(PPT_MANIFEST["mod12"].pdfUrl, "PPTs/pdf/alligation.pdf");
assert.strictEqual(PPT_MANIFEST["mod12"].slideCount, 52);
assert(fs.existsSync(PPT_MANIFEST["mod12"].pdfUrl), "alligation.pdf file does not exist on disk!");

assert(PPT_MANIFEST["mod15"], "mod15 missing in PPT_MANIFEST");
assert.strictEqual(PPT_MANIFEST["mod15"].pdfUrl, "PPTs/pdf/FA1.pdf");
assert(fs.existsSync(PPT_MANIFEST["mod15"].pdfUrl), "FA1.pdf file does not exist on disk!");

assert(PPT_MANIFEST["mod16"], "mod16 missing in PPT_MANIFEST");
assert.strictEqual(PPT_MANIFEST["mod16"].pdfUrl, "PPTs/pdf/ST1.pdf");
assert.strictEqual(PPT_MANIFEST["mod16"].slideCount, 123);
assert(fs.existsSync(PPT_MANIFEST["mod16"].pdfUrl), "ST1.pdf file does not exist on disk!");
console.log("✓ PPT_MANIFEST has valid mod12 (alligation.pdf), mod15 (FA1.pdf) and mod16 (ST1.pdf), all exist on disk.");

// Check app.js contents
const appContent = fs.readFileSync("app.js", "utf-8");
assert(appContent.includes('"mod12"'), 'app.js selectedExamModuleIds missing "mod12"');
assert(appContent.includes('"mod15"'), 'app.js selectedExamModuleIds missing "mod15"');
assert(appContent.includes('"mod16"'), 'app.js selectedExamModuleIds missing "mod16"');
assert(appContent.includes('"mod17"'), 'app.js selectedExamModuleIds missing "mod17"');
assert(appContent.includes('mod12: "PPTs/pdf/alligation.pdf"'), 'app.js MODULE_PPT_MAP missing mod12');
assert(appContent.includes('mod15: "PPTs/pdf/FA1.pdf"'), 'app.js MODULE_PPT_MAP missing mod15');
assert(appContent.includes('mod16: "PPTs/pdf/ST1.pdf"'), 'app.js MODULE_PPT_MAP missing mod16');
console.log("✓ app.js has mod12, mod15, mod16 and mod17 in selectedExamModuleIds and MODULE_PPT_MAP.");

// Check question counts in database
const mod12Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod12");
assert.strictEqual(mod12Questions.length, expectedMod12Count, `Expected ${expectedMod12Count} questions for mod12, got ${mod12Questions.length}`);

const mod15Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod15");
assert.strictEqual(mod15Questions.length, expectedMod15Count, `Expected ${expectedMod15Count} questions for mod15, got ${mod15Questions.length}`);

const mod16Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod16");
assert.strictEqual(mod16Questions.length, expectedMod16Count, `Expected ${expectedMod16Count} questions for mod16, got ${mod16Questions.length}`);

const mod17Questions = QUIZ_QUESTIONS.filter(q => q.module_id === "mod17");
assert.strictEqual(mod17Questions.length, expectedMod17Count, `Expected ${expectedMod17Count} questions for mod17, got ${mod17Questions.length}`);

// Expected answer key for all 112 mod16 (ST1 Questions)
const expectedAnswersMod16 = [
  // NS 1-27
  "None of these", "3", "220", "24", "24", "7", "9", "99936", "5001", "6", "31",
  "None of these", "None of these", "21", "8", "6", "745", "None of these", "5 and 7", "11 − k", "9001", "9944", "A = 5, B = 3", "3", "None", "3", "2 or 6",
  // HCF/LCM 1-32
  "60", "84", "38", "900", "35, 21", "3⁵", "2", "80", "4", "12, 24, 36", "195 and 143", "0.12", "288, 216", "2", "60", "91", "3600",
  "84, 96", "264", "1", "160", "144", "5940", "144", "240", "14", "None of these", "900", "3600", "40", "16", "315",
  // Average 1-29
  "None of These", "300 km/hr", "66", "k+6", "61 years", "None of these", "None", "None of these", "6.25", "50", "558", "Rs 41.53", "2.6 inches", "100", "34", "50.5", "18",
  "20", "−40", "55", "51", "4", "M + 5", "10", "14 years 8 months", "60 kg", "Rs. 3 crore", "Rs. 18", "24 km/h",
  // Remainder 1-24
  "99962", "1 or 5", "4", "713", "2, 3", "1", "5", "544", "18004", "2", "4", "9", "0", "565", "1683",
  "1", "2", "1", "6", "4", "12", "1", "307", "6621"
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
  console.log("Mismatches table: EMPTY (0 mismatches detected! All 112 match exactly)");
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

// Verify mod12 questions options and visualizers
mod12Questions.forEach(q => {
  assert(q.options.includes(q.correct), `q.options missing correct for ${q.id}`);
  const vis = SolutionVisualizer.generateVisualizer(q);
  assert(vis.includes("sol-vis-container"), `Missing sol-vis-container for ${q.id}`);
  assert(vis.includes(escapeHtml(q.correct)), `Missing escaped correct answer in visualizer for ${q.id}`);
});
console.log(`✓ All ${mod12Questions.length} mod12 questions verified for options and visualizers.`);

// Verify mod17 questions options and visualizers
mod17Questions.forEach(q => {
  assert(q.options.includes(q.correct), `q.options missing correct for ${q.id}`);
  const vis = SolutionVisualizer.generateVisualizer(q);
  assert(vis.includes("sol-vis-container"), `Missing sol-vis-container for ${q.id}`);
  assert(vis.includes(escapeHtml(q.correct)), `Missing escaped correct answer in visualizer for ${q.id}`);
});
console.log(`✓ All ${mod17Questions.length} mod17 questions verified for options and visualizers.`);

console.log("\n🎉 ALL AUDIT CHECKS PASSED PERFECTLY!");
