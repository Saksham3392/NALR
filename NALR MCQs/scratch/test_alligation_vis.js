const fs = require('fs');
const qs = JSON.parse(fs.readFileSync('scratch/alligation_questions.json', 'utf8'));

// read interactive_visualizers.js
const SolutionVisualizer = require('../interactive_visualizers.js');

let failed = 0;
for (const q of qs) {
  try {
    const html = SolutionVisualizer.generateVisualizer(q);
    if (!html || !html.includes('vis-alligation')) {
      console.log('Failed vis-alligation check for', q.id);
      failed++;
    }
    // Check if correct answer is present in html
    if (!html.includes(q.correct)) {
      console.log('Answer not in html for', q.id, 'Expected:', q.correct);
      failed++;
    }
  } catch (err) {
    console.error('Error for', q.id, err);
    failed++;
  }
}

if (failed === 0) {
  console.log('All 25 alligation questions successfully generate valid visualizers with correct answer banner!');
} else {
  console.log('Total visualizer issues:', failed);
}
