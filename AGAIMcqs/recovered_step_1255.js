const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain';
const dirs = fs.readdirSync(brainDir);

for (const d of dirs) {
  const logFile = path.join(brainDir, d, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(logFile)) {
    console.log(`Checking ${d}...`);
    const content = fs.readFileSync(logFile, 'utf8');
    if (content.includes('Why is the 1/√d_k factor used in Scaled Dot-Product Attention') || content.includes('Scaled Dot-Product & Self-Attention Fundamentals')) {
      const lines = content.split('\n');
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('"id": "q1"') && line.includes('"mod1"') && (line.includes('"q77"') || line.includes('"q92"') || line.includes('"q65"') || line.includes('"q20"'))) {
          console.log(`  Found match in ${d} line ${i}!`);
          try {
            const step = JSON.parse(line);
            if (step.tool_calls) {
              for (const tc of step.tool_calls) {
                const code = tc.arguments?.CodeContent || tc.arguments?.ReplacementContent || '';
                if (code.includes('"q1"') && code.includes('"mod1"')) {
                  console.log(`    Found code in tool call! Length = ${code.length}`);
                  fs.writeFileSync('quiz_questions.js', code, 'utf8');
                  console.log('Restored quiz_questions.js successfully!');
                  process.exit(0);
                }
              }
            }
            if (step.content && step.content.includes('const QUIZ_QUESTIONS = [')) {
              const start = step.content.indexOf('const QUIZ_QUESTIONS = [');
              const end = step.content.indexOf('];', start);
              if (start !== -1 && end !== -1) {
                const code = step.content.slice(start, end + 2) + '\n\nif (typeof window !== "undefined") { window.QUIZ_QUESTIONS = QUIZ_QUESTIONS; }\nif (typeof globalThis !== "undefined") { globalThis.QUIZ_QUESTIONS = QUIZ_QUESTIONS; }\n';
                fs.writeFileSync('quiz_questions.js', code, 'utf8');
                console.log('Restored quiz_questions.js from content successfully!');
                process.exit(0);
              }
            }
          } catch(e) {
            console.log('Error:', e.message);
          }
        }
      }
    }
  }
}
