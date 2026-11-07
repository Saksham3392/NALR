const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

// Check CRLF
console.log('Has CRLF:', index.includes('\r\n'));

// Find Favicon
const favIdx = index.indexOf('apple-touch-icon.png');
console.log('favIdx:', favIdx);
if (favIdx !== -1) {
  console.log('Around favIdx:\n', JSON.stringify(index.slice(favIdx - 100, favIdx + 150)));
}

// Find Results Screen
const resIdx = index.indexOf('Results Screen');
console.log('resIdx:', resIdx);
if (resIdx !== -1) {
  console.log('Around resIdx:\n', JSON.stringify(index.slice(resIdx - 50, resIdx + 150)));
}
