const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\4a90f26b-589e-4397-835b-a2c4cca98e7f\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logFile, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('Why is the 1/√d_k factor used in Scaled Dot-Product Attention') || (line.includes('"id": "q1"') && line.includes('"mod1"') && line.includes('Scaled Dot-Product'))) {
    console.log(`Matching line ${i}`);
    try {
      const step = JSON.parse(line);
      // Check tool calls
      if (step.tool_calls) {
        step.tool_calls.forEach(tc => {
          console.log(`  tc: ${tc.name}`);
          const code = tc.arguments?.CodeContent || tc.arguments?.ReplacementContent || '';
          if (code.includes('"q1"') && (code.includes('"q77"') || code.includes('"q92"') || code.includes('"q65"'))) {
            console.log(`  Found full ST2 quiz code in tc ${tc.name}! Length = ${code.length}`);
            fs.writeFileSync('quiz_questions.js', code, 'utf8');
            console.log('Restored quiz_questions.js from tool call!');
            process.exit(0);
          }
        });
      }
      // Check content
      if (step.content && step.content.includes('"q1"') && (step.content.includes('"q77"') || step.content.includes('"q92"') || step.content.includes('"q65"'))) {
        console.log(`  Found full ST2 quiz code in step.content! Length = ${step.content.length}`);
        // extract the JS code between ```javascript or const QUIZ_QUESTIONS
        const start = step.content.indexOf('const QUIZ_QUESTIONS = [');
        if (start !== -1) {
          const end = step.content.indexOf('];', start);
          if (end !== -1) {
            const fullCode = step.content.slice(start, end + 2) + '\n\nif (typeof window !== "undefined") { window.QUIZ_QUESTIONS = QUIZ_QUESTIONS; }\nif (typeof globalThis !== "undefined") { globalThis.QUIZ_QUESTIONS = QUIZ_QUESTIONS; }\n';
            fs.writeFileSync('quiz_questions.js', fullCode, 'utf8');
            console.log('Restored quiz_questions.js from step.content!');
            process.exit(0);
          }
        }
      }
    } catch(e) {
      console.log('Error parsing line:', e.message);
    }
  }
}
