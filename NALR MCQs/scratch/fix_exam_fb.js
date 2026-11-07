const fs = require('fs');
let lines = fs.readFileSync('app.js', 'utf8').split('\n');
lines[2947] = '      fb.className = `exam-feedback-box is-shown ${isCorrect ? "is-good" : "is-bad"} ${collapseClass}`.trim();';
fs.writeFileSync('app.js', lines.join('\n'), 'utf8');
console.log('Fixed line 2947 successfully!');
