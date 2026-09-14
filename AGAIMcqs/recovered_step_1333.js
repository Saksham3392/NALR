const fs = require('fs');

const logFile = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\4a90f26b-589e-4397-835b-a2c4cca98e7f\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logFile, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  try {
    const step = JSON.parse(lines[i]);
    if (step.tool_calls) {
      step.tool_calls.forEach(tc => {
        const file = tc.args?.TargetFile || '';
        const code = tc.args?.CodeContent || '';
        const cmd = tc.args?.CommandLine || '';
        
        if (code.includes('QUIZ_QUESTIONS') && code.includes('mod1') && code.includes('q1')) {
          console.log(`Step ${i} wrote QUIZ_QUESTIONS in write_to_file, target = ${file}, length = ${code.length}`);
          fs.writeFileSync(`recovered_step_${i}.js`, code, 'utf8');
        }
        if (cmd.includes('node') && (cmd.includes('quiz') || cmd.includes('add') || cmd.includes('mock'))) {
          console.log(`Step ${i} ran node command: ${cmd}`);
        }
      });
    }
  } catch(e) {}
}
