const { QUIZ_QUESTIONS } = require('../quiz_questions.js');
const SolutionVisualizer = require('../interactive_visualizers.js');

console.log('Testing SolutionVisualizer on mod11, mod12, mod13, mod14...');

// 1. Partnership (mod11)
const partQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod11');
console.log(`\nPartnership Questions (${partQs.length}):`);
partQs.forEach((q, i) => {
  const html = SolutionVisualizer.generateVisualizer(q);
  if (!html || !html.includes('vis-partnership')) {
    throw new Error(`Failed on Partnership Q${i+1} [${q.id}]`);
  }
});
console.log(`✓ All ${partQs.length} Partnership visualizers generated cleanly!`);

// 2. Alligation (mod12 & mod9 mixture)
const sampleAlligationQ = {
  id: "test_alligation",
  module_id: "mod12",
  question: "In what ratio must tea at Rs. 62 per kg be mixed with tea at Rs. 72 per kg so that the mixture must be worth Rs. 64.50 per kg?",
  correct: "3 : 1",
  explanation: "By the rule of alligation:\nCheaper: 62\nDearer: 72\nMean: 64.5\nRatio = (72 - 64.5) : (64.5 - 62) = 7.5 : 2.5 = 3 : 1"
};
const alligationHtml = SolutionVisualizer.generateVisualizer(sampleAlligationQ);
if (!alligationHtml.includes('vis-alligation') || !alligationHtml.includes('alligation-svg')) {
  throw new Error('Failed on Alligation test');
}
console.log('✓ Alligation visualizer generated cleanly!');

// 3. Odd Man Out (mod13)
const oddQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod13');
console.log(`\nOdd Man Out Questions (${oddQs.length}):`);
oddQs.forEach((q, i) => {
  const html = SolutionVisualizer.generateVisualizer(q);
  if (!html || !html.includes('vis-odd-man-out') || !html.includes('is-anomaly')) {
    throw new Error(`Failed on Odd Man Out Q${i+1} [${q.id}]`);
  }
});
console.log(`✓ All ${oddQs.length} Odd Man Out visualizers generated cleanly!`);

// 4. Syllogism (mod14)
const sylQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod14');
console.log(`\nSyllogism Questions (${sylQs.length}):`);
sylQs.forEach((q, i) => {
  const html = SolutionVisualizer.generateVisualizer(q);
  if (!html || !html.includes('vis-syllogism-venn') || !html.includes('venn-svg')) {
    throw new Error(`Failed on Syllogism Q${i+1} [${q.id}]`);
  }
});
console.log(`✓ All ${sylQs.length} Syllogism visualizers generated cleanly!`);

console.log('\n===========================================');
console.log('ALL VISUALIZER TESTS PASSED WITH 100% SUCCESS!');
console.log('===========================================');
