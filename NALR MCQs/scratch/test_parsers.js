const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

console.log('=== TESTING PARTNERSHIP PARSER ===');
const partQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod11');
partQs.forEach((q, i) => {
  const text = q.question + ' ' + (q.explanation || '');
  // Match partner names and numbers
  const partners = [];
  const pMatches = text.matchAll(/([A-Z][a-z]*)\s+(?:contributes|invests|puts|advances|starts|joined|joins|received|receives|got)\s+([0-9]+(?:\/[0-9]+)?)/gi);
  for (const m of pMatches) {
    partners.push({ name: m[1], val: m[2] });
  }
  // Also check ratio
  const ratioMatch = text.match(/ratio\s+(?:of\s+)?(?:capitals?\s+)?(?:is\s+)?([0-9]+\s*:\s*[0-9]+(?:\s*:\s*[0-9]+)?)/i);
  console.log(`Q${i+1} [${q.id}]: Partners=${partners.length} Ratio=${ratioMatch ? ratioMatch[1] : 'none'} Correct=${q.correct}`);
});

console.log('\n=== TESTING ODD MAN OUT PARSER ===');
const oddQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod13');
oddQs.forEach((q, i) => {
  const opts = q.options || [];
  const correct = q.correct || '';
  console.log(`Q${i+1} [${q.id}]: Opts=${opts.join(', ')} | Correct=${correct}`);
});

console.log('\n=== TESTING SYLLOGISM PARSER ===');
const sylQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod14');
sylQs.forEach((q, i) => {
  const stmts = Array.from(q.question.matchAll(/(All|Some|No)\s+([a-zA-Z]+)\s+(?:are|is)\s+(?:a\s+)?([a-zA-Z]+)/gi));
  const concl = Array.from(q.question.matchAll(/(?:I|II|III|IV)\.\s+(All|Some|No)\s+([a-zA-Z]+)\s+(?:are|is)\s+(?:a\s+)?([a-zA-Z]+)/gi));
  console.log(`Q${i+1} [${q.id}]: Statements=${stmts.length} Concl=${concl.length} | Correct=${q.correct.substring(0, 35)}`);
});
