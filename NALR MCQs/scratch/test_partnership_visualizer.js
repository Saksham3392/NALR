const { QUIZ_QUESTIONS } = require('../quiz_questions.js');
const { PARTNERSHIP_SOLUTIONS } = require('./partnership_solutions_map.js');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderStepByStepPartnership(q, sol) {
  const correctAns = q.correct || '';

  // 1. Table of given information
  let tableHtml = '';
  if (sol.table) {
    tableHtml = `
      <div class="part-given-card">
        <div class="pgc-header">Step 1: Identify Given Information</div>
        <table class="pgc-table">
          <thead>
            <tr>
              ${sol.table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${sol.table.rows.map(r => `
              <tr>
                ${r.map(c => `<td>${escapeHtml(c)}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // 2. Sequential Mathematical Steps
  let stepsHtml = '';
  if (sol.steps) {
    stepsHtml = `
      <div class="part-steps-flow">
        ${sol.steps.map(s => `
          <div class="part-step-card">
            <div class="psc-head">
              <span class="psc-badge">Step ${s.num}</span>
              <strong class="psc-title">${escapeHtml(s.title)}</strong>
            </div>
            <p class="psc-desc">${escapeHtml(s.desc)}</p>
            ${s.formula ? `<div class="psc-formula-box"><code>${escapeHtml(s.formula)}</code></div>` : ''}
            ${s.calcs ? `
              <div class="psc-calcs-list">
                ${s.calcs.map(c => `<div class="psc-calc-line">➔ <code>${escapeHtml(c)}</code></div>`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // 3. Proportional Profit Partitioning Bar (only when profit is allocated)
  let distHtml = '';
  if (sol.distribution) {
    distHtml = `
      <div class="part-distribution-card">
        <div class="pdc-header">Profit / Capital Share Allocation:</div>
        <div class="pdc-bar-wrapper">
          <div class="pdc-bar">
            ${sol.distribution.map(d => `
              <div class="pdc-segment" style="width: ${d.pct}%; background: ${d.color};" title="${escapeHtml(d.name)}: ${escapeHtml(d.val)} (${d.pct}%)">
                <span>${escapeHtml(d.name)} (${escapeHtml(d.val)})</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="sol-vis-container vis-partnership">
      <div class="vis-badge-header">
        <span class="vis-icon">💼</span>
        <span class="vis-label">Partnership Analysis — ${escapeHtml(sol.title)}</span>
        <span class="vis-module-tag">Step-by-Step Solution</span>
      </div>

      ${tableHtml}
      ${stepsHtml}
      ${distHtml}

      <div class="part-conclusion-card">
        <span class="pcc-icon">🎯</span>
        <span class="pcc-text">${escapeHtml(sol.resultExplanation)}</span>
      </div>

      <div class="dir-res-banner">
        <span class="drb-label">Resolved Target Answer:</span>
        <strong class="drb-val highlight-gold">${escapeHtml(correctAns)}</strong>
      </div>
    </div>
  `;
}

// Test on all 18 questions
const mod11Qs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod11');
let pass = 0;
mod11Qs.forEach(q => {
  const sol = PARTNERSHIP_SOLUTIONS[q.id];
  const html = renderStepByStepPartnership(q, sol);
  if (html.includes(q.correct) && html.includes('vis-partnership') && html.includes('highlight-gold')) {
    pass++;
    console.log(`✓ ${q.id} passed (${sol.title})`);
  } else {
    console.error(`Failed test for: ${q.id}`);
  }
});

console.log(`Passed test: ${pass} of ${mod11Qs.length}`);
module.exports = { renderStepByStepPartnership };
