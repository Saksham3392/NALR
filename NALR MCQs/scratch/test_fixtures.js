const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

// Helper escape
function escape(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Test partnership
const partQ = QUIZ_QUESTIONS.find(q => q.module_id === 'mod11');
console.log('Testing Partnership with', partQ.id);

// Test syllogism
const sylQ = QUIZ_QUESTIONS.find(q => q.module_id === 'mod14');
console.log('Testing Syllogism with', sylQ.id);

// Test odd man out
const oddQ = QUIZ_QUESTIONS.find(q => q.module_id === 'mod13');
console.log('Testing Odd Man Out with', oddQ.id);

console.log('All test fixtures ready.');
