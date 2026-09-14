const fs = require('fs');

const logFile = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\4a90f26b-589e-4397-835b-a2c4cca98e7f\\.system_generated\\logs\\transcript.jsonl';
const lines = fs.readFileSync(logFile, 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('QUIZ_QUESTIONS') && (line.includes('"q1"') || line.includes('Scaled Dot-Product')) && !line.includes('st1_mod1')) {
    console.log(`Line ${i} matches in transcript.jsonl!`);
    const fullLog = 'C:\\Users\\Asus\\.gemini\\antigravity\\brain\\4a90f26b-589e-4397-835b-a2c4cca98e7f\\.system_generated\\logs\\transcript_full.jsonl';
    const fullLines = fs.readFileSync(fullLog, 'utf8').split('\n');
    console.log(`Full log line ${i} length: ${fullLines[i].length}`);
    fs.writeFileSync(`full_line_${i}.json`, fullLines[i], 'utf8');
  }
}
