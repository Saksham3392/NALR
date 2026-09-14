const fs = require('fs');
const path = require('path');

const brainDir = path.join('C:', 'Users', 'Asus', '.gemini', 'antigravity', 'brain');
const dirs = fs.readdirSync(brainDir);

for (const d of dirs) {
  const logFile = path.join(brainDir, d, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(logFile)) {
    const content = fs.readFileSync(logFile, 'utf8');
    if (content.includes('"id": "q1"') && content.includes('"module_id": "mod1"') && content.includes('Scaled Dot-Product')) {
      console.log('Match found in conversation:', d);
      // Let's find the largest substring starting with const QUIZ_QUESTIONS = [
      const regex = /const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\]);\s*(?:if\s*\(\s*typeof\s*window|\/\/)/g;
      let m;
      while ((m = regex.exec(content)) !== null) {
        if (m[1].includes('"q1"') && m[1].includes('Scaled Dot-Product')) {
          console.log(`Found questions array in ${d}, length = ${m[1].length}`);
          fs.writeFileSync('restored_st2_quiz_questions.js', 'const QUIZ_QUESTIONS = ' + m[1] + ';\n\nif (typeof window !== "undefined") { window.QUIZ_QUESTIONS = QUIZ_QUESTIONS; }\nif (typeof globalThis !== "undefined") { globalThis.QUIZ_QUESTIONS = QUIZ_QUESTIONS; }\n', 'utf8');
          console.log('Wrote to restored_st2_quiz_questions.js');
        }
      }
    }
  }
}
