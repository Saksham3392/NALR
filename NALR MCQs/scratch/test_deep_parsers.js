const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

// Test Syllogism classification on all 25 questions
const sylQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod14');
console.log('Testing Syllogism Questions...');
sylQs.forEach((q, i) => {
  const text = q.question;
  const stmts = [];
  const lines = text.split('\n').map(l => l.trim());
  lines.forEach(l => {
    const m = l.match(/^(All|Some|No)\s+([a-zA-Z]+)\s+(?:are|is)\s+(?:a\s+)?([a-zA-Z]+)/i);
    if (m) stmts.push({ quantifier: m[1], subject: m[2], predicate: m[3] });
  });
  console.log(`Q${i+1} [${q.id}]: Statements found: ${stmts.length} ->`, stmts.map(s => `${s.quantifier} ${s.subject}->${s.predicate}`).join(' | '));
});

// Test Odd Man Out on all 27 questions
console.log('\nTesting Odd Man Out Questions...');
const oddQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod13');
oddQs.forEach((q, i) => {
  const opts = (q.options || []).filter(o => !/none/i.test(o));
  const odd = q.correct;
  const analysis = opts.map(opt => {
    const letters = opt.split('');
    const pos = letters.map(c => c.toUpperCase().charCodeAt(0) - 64);
    const diffs = [];
    for (let j = 0; j < pos.length - 1; j++) {
      diffs.push(pos[j+1] - pos[j]);
    }
    return `${opt}[${diffs.join(',')}]`;
  });
  console.log(`Q${i+1} [${q.id}]: Target=${odd} | ${analysis.join(' ')}`);
});
