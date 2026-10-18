const assert = require("assert");
const fs = require("fs");
const SolutionVisualizer = require("../interactive_visualizers.js");

const newQs = JSON.parse(fs.readFileSync("scratch/st1_new_questions.json", "utf-8"));
console.log(`Testing ${newQs.length} new questions...`);

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

let errors = 0;
for (const q of newQs) {
  try {
    assert(q.options.includes(q.correct), `Option mismatch for ${q.id}: '${q.correct}' not in options ${JSON.stringify(q.options)}`);
    const html = SolutionVisualizer.generateVisualizer(q);
    assert(html.includes("sol-vis-container"), `Missing container for ${q.id}`);
    assert(html.includes(escapeHtml(q.correct)), `Missing correct answer in visualizer for ${q.id}`);
  } catch (err) {
    console.error(`Error on ${q.id}:`, err.message);
    errors++;
  }
}

if (errors === 0) {
  console.log(`✓ All ${newQs.length} new questions passed visualizer and option tests!`);
} else {
  console.error(`❌ ${errors} errors found!`);
  process.exit(1);
}
