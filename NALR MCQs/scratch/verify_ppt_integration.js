const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== VERIFYING NALR PPT & PDF ARCHITECTURE ===');

// 1. Confirm zero .pptx files remain in the project
function findFilesByExt(dir, ext, results = []) {
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        findFilesByExt(fullPath, ext, results);
      }
    } else if (entry.name.toLowerCase().endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

const pptxFiles = findFilesByExt('.', '.pptx');
assert.strictEqual(pptxFiles.length, 0, `Expected 0 .pptx files, found: ${pptxFiles.join(', ')}`);
console.log('✓ PASS: 0 .pptx files remaining in project');

// 2. Check PPTs/pdf directory for all 13 renamed PDFs
const expectedPdfs = [
  'analogy.pdf',
  'average.pdf',
  'blood-relation.pdf',
  'coded-relation.pdf',
  'direction.pdf',
  'hcf-and-lcm.pdf',
  'number-system.pdf',
  'odd-one-out.pdf',
  'partnership.pdf',
  'problem-on-ages.pdf',
  'ratio-and-proportion.pdf',
  'remainder-theorem.pdf',
  'syllogism.pdf'
];

expectedPdfs.forEach(pdf => {
  const fullPath = path.join('PPTs', 'pdf', pdf);
  assert.ok(fs.existsSync(fullPath), `Missing PDF: ${fullPath}`);
  const stats = fs.statSync(fullPath);
  assert.ok(stats.size > 10000, `PDF ${pdf} is unexpectedly small: ${stats.size} bytes`);
});
console.log(`✓ PASS: All ${expectedPdfs.length} renamed PDFs verified in PPTs/pdf/`);

// 3. Confirm ppt_manifest.js maps every module to its corresponding renamed PDF
const { PPT_MANIFEST } = require('../ppt_manifest.js');
const expectedModules = [
  'mod1', 'mod2', 'mod3', 'mod4', 'mod5', 'mod6',
  'mod7', 'mod8', 'mod9', 'mod10', 'mod11', 'mod13', 'mod14'
];

expectedModules.forEach(modId => {
  const item = PPT_MANIFEST[modId];
  assert.ok(item, `PPT_MANIFEST missing ${modId}`);
  assert.ok(fs.existsSync(item.pdfUrl), `PPT_MANIFEST ${modId} pdfUrl does not exist: ${item.pdfUrl}`);
  assert.ok(!item.pdfUrl.includes('.pptx'), `PPT_MANIFEST ${modId} still references .pptx`);
  assert.ok(item.slideCount > 0, `PPT_MANIFEST ${modId} slideCount must be > 0`);
});
console.log('✓ PASS: PPT_MANIFEST verified across all 13 syllabus modules');

// 4. Confirm app.js MODULE_PPT_MAP
const appJs = fs.readFileSync('app.js', 'utf8');
expectedModules.forEach(modId => {
  const regex = new RegExp(`${modId}:\\s*["']PPTs/pdf/([^"']+\\.pdf)["']`);
  const match = appJs.match(regex);
  assert.ok(match, `app.js MODULE_PPT_MAP missing or invalid for ${modId}`);
  const resolvedPath = path.join('PPTs', 'pdf', match[1]);
  assert.ok(fs.existsSync(resolvedPath), `app.js mapped PDF not found: ${resolvedPath}`);
});
assert.ok(!appJs.includes('.pptx'), 'app.js must not contain any .pptx references');
console.log('✓ PASS: app.js MODULE_PPT_MAP verified (100% PDF references, 0 .pptx)');

// 5. Confirm visible website button label is still exactly "PPT"
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert.ok(indexHtml.includes('<span class="ppt-label-text">PPT</span>'), 'index.html must maintain <span class="ppt-label-text">PPT</span>');
assert.ok(indexHtml.includes('id="btnModulePPT"'), 'index.html must maintain #btnModulePPT');
assert.ok(!indexHtml.includes('.pptx'), 'index.html must not contain any .pptx references');
console.log('✓ PASS: Website visible button label is strictly preserved as "PPT"');

// 6. Confirm presentation_viewer.html
const viewerHtml = fs.readFileSync('presentation_viewer.html', 'utf8');
assert.ok(!viewerHtml.includes('.pptx'), 'presentation_viewer.html must not contain .pptx references');
assert.ok(viewerHtml.includes('id="docViewerIframe"'), 'presentation_viewer.html must contain #docViewerIframe');
console.log('✓ PASS: presentation_viewer.html verified for direct PDF rendering');

console.log('\nALL PPT & PDF ARCHITECTURE CHECKS PASSED PERFECTLY! 🎓📑⚡');
