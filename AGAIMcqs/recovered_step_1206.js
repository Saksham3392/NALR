const fs = require('fs');
const path = require('path');

const brainDir = path.join('C:', 'Users', 'Asus', '.gemini', 'antigravity', 'brain');
const dirs = fs.readdirSync(brainDir);

for (const d of dirs) {
  const logFile = path.join(brainDir, d, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(logFile)) {
    const lines = fs.readFileSync(logFile, 'utf8').split('\n');
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      if (line.includes('QUIZ_QUESTIONS') && line.includes('"q1"') && line.includes('Scaled Dot-Product') && line.includes('"q92"')) {
        console.log(`Found complete 92-question quiz_questions in ${d} line ${i}`);
        try {
          const step = JSON.parse(line);
          if (step.tool_calls) {
            for (const tc of step.tool_calls) {
              if (tc.arguments && tc.arguments.CodeContent && tc.arguments.CodeContent.includes('"q92"')) {
                fs.writeFileSync('quiz_questions.js', tc.arguments.CodeContent, 'utf8');
                console.log('Restored quiz_questions.js successfully!');
                process.exit(0);
              }
            }
          }
        } catch(e) {}
      }
    }
  }
}

// Fallback search
console.log('Searching for any quiz_questions with q1 and mod1...');
for (const d of dirs) {
  const logFile = path.join(brainDir, d, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(logFile)) {
    const content = fs.readFileSync(logFile, 'utf8');
    const idx = content.lastIndexOf('const QUIZ_QUESTIONS = [');
    if (idx !== -1) {
      console.log(`Found QUIZ_QUESTIONS in ${d}`);
    }
  }
}
