const { SYLLABUS_MODULES } = require('../syllabus.js');
const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

['mod11', 'mod12', 'mod13', 'mod14'].forEach(modId => {
  const mod = SYLLABUS_MODULES.find(m => m.id === modId);
  const qs = QUIZ_QUESTIONS.filter(q => q.module_id === modId);
  console.log(`\n=================== ${modId} : ${mod ? mod.title : 'UNKNOWN'} (${qs.length} questions) ===================`);
  if (qs.length > 0) {
    for (let i = 0; i < Math.min(3, qs.length); i++) {
      console.log(`--- Q${i+1} [${qs[i].type_id}] ---`);
      console.log(`Question: ${qs[i].question}`);
      console.log(`Correct: ${qs[i].correct}`);
      console.log(`Explanation:\n${qs[i].explanation ? qs[i].explanation.substring(0, 300) : ''}...\n`);
    }
  }
});
