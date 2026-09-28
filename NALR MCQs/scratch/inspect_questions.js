const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

function inspectMod(modId) {
  const qs = QUIZ_QUESTIONS.filter(q => q.module_id === modId);
  console.log(`\n=== ${modId} (${qs.length} questions) ===`);
  qs.forEach((q, i) => {
    console.log(`Q${i+1} [${q.id}]: ${q.question.replace(/\n/g, ' ').substring(0, 80)}... -> Correct: ${q.correct}`);
  });
}

inspectMod('mod11');
inspectMod('mod13');
inspectMod('mod14');
