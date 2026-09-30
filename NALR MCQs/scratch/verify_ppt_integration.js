const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const appJs = fs.readFileSync('app.js', 'utf8');
const css = fs.readFileSync('components.css', 'utf8');

console.log('--- Verifying Index.html ---');
console.log('Has btnModulePPT:', indexHtml.includes('id="btnModulePPT"'));
console.log('Has old moduleHeaderActions:', indexHtml.includes('moduleHeaderActions'));
console.log('Has PPT logo SVG:', indexHtml.includes('ppt-badge-logo'));
console.log('Has topic-banner-text-group:', indexHtml.includes('topic-banner-text-group'));

console.log('\n--- Verifying App.js ---');
console.log('updateModulePPTButton links to presentation_viewer.html:', appJs.includes('presentation_viewer.html?mod='));

console.log('\n--- Verifying Components.css ---');
console.log('Has .btn-ppt-banner styling:', css.includes('.btn-ppt-banner'));
console.log('Has .topic-banner-text-group styling:', css.includes('.topic-banner-text-group'));

console.log('\n--- Verifying presentation_viewer.html ---');
console.log('presentation_viewer.html exists:', fs.existsSync('presentation_viewer.html'));
