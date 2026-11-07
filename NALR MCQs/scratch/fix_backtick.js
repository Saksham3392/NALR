const fs = require('fs');
let c = fs.readFileSync('app.js', 'utf8');
c = c.replace('      </div>`;\n      <div class="sol-feedback-body">', '      </div>\n      <div class="sol-feedback-body">');
fs.writeFileSync('app.js', c, 'utf8');
console.log('Fixed extra backtick successfully!');
