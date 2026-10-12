const fs = require('fs');
const { PARTNERSHIP_SOLUTIONS } = require('./partnership_solutions_map.js');

const jsFile = './interactive_visualizers.js';
let content = fs.readFileSync(jsFile, 'utf8');

const solutionsMapString = JSON.stringify(PARTNERSHIP_SOLUTIONS, null, 2);

const replacement = `  // ===========================================================================
  // 11. PARTNERSHIP VISUALIZER (mod11) — Step-by-Step Educational Solution
  // ===========================================================================
  const PARTNERSHIP_SOLUTIONS_REGISTRY = ${solutionsMapString};

  function renderPartnership(q) {
    const correctAns = q.correct || "";
    const sol = PARTNERSHIP_SOLUTIONS_REGISTRY[q.id];

    // If explicit structured solution exists in registry
    if (sol) {
      // Step 1 Table
      let tableHtml = "";
      if (sol.table) {
        tableHtml = \`
          <div class="part-given-card">
            <div class="pgc-header">Step 1: Identify Given Information</div>
            <table class="pgc-table">
              <thead>
                <tr>
                  \${sol.table.headers.map(h => \`<th>\${escape(h)}</th>\`).join('')}
                </tr>
              </thead>
              <tbody>
                \${sol.table.rows.map(r => \`
                  <tr>
                    \${r.map(c => \`<td>\${escape(c)}</td>\`).join('')}
                  </tr>
                \`).join('')}
              </tbody>
            </table>
          </div>
        \`;
      }

      // Step-by-step mathematical flow
      let stepsHtml = "";
      if (sol.steps) {
        stepsHtml = \`
          <div class="part-steps-flow">
            \${sol.steps.map(s => \`
              <div class="part-step-card">
                <div class="psc-head">
                  <span class="psc-badge">Step \${s.num}</span>
                  <strong class="psc-card-title">\${escape(s.title)}</strong>
                </div>
                <p class="psc-desc">\${escape(s.desc)}</p>
                \${s.formula ? \`<div class="psc-formula-box"><code>\${escape(s.formula)}</code></div>\` : ''}
                \${s.calcs ? \`
                  <div class="psc-calcs-list">
                    \${s.calcs.map(c => \`<div class="psc-calc-line">➔ <code>\${escape(c)}</code></div>\`).join('')}
                  </div>
                \` : ''}
              </div>
            \`).join('')}
          </div>
        \`;
      }

      // Distribution bar (for questions that partition profit)
      let distHtml = "";
      if (sol.distribution) {
        distHtml = \`
          <div class="part-distribution-card">
            <div class="pdc-header">Profit / Capital Share Allocation:</div>
            <div class="pdc-bar-wrapper">
              <div class="pdc-bar">
                \${sol.distribution.map(d => \`
                  <div class="pdc-segment" style="width: \${d.pct}%; background: \${d.color};" title="\${escape(d.name)}: \${escape(d.val)} (\${d.pct}%)">
                    <span>\${escape(d.name)} (\${escape(d.val)})</span>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>
        \`;
      }

      return \`
        <div class="sol-vis-container vis-partnership">
          <div class="vis-badge-header">
            <span class="vis-icon">💼</span>
            <span class="vis-label">Partnership Analysis — \${escape(sol.title)}</span>
            <span class="vis-module-tag">Step-by-Step Solution</span>
          </div>

          \${tableHtml}
          \${stepsHtml}
          \${distHtml}

          <div class="part-conclusion-card">
            <span class="pcc-icon">🎯</span>
            <span class="pcc-text">\${escape(sol.resultExplanation)}</span>
          </div>

          <div class="dir-res-banner">
            <span class="drb-label">Resolved Target Answer:</span>
            <strong class="drb-val highlight-gold">\${escape(correctAns)}</strong>
          </div>
        </div>
      \`;
    }

    // Dynamic Fallback
    return \`
      <div class="sol-vis-container vis-partnership">
        <div class="vis-badge-header">
          <span class="vis-icon">💼</span>
          <span class="vis-label">Partnership Investment &amp; Profit Allocation</span>
          <span class="vis-module-tag">Partnership Logic</span>
        </div>

        <div class="part-conclusion-card">
          <span class="pcc-icon">💡</span>
          <span class="pcc-text">Profit is distributed in proportion to the product of Capital and Investment Duration: <strong>Profit Share ∝ Capital × Time</strong>.</span>
        </div>

        <div class="dir-res-banner">
          <span class="drb-label">Resolved Target Answer:</span>
          <strong class="drb-val highlight-gold">\${escape(correctAns)}</strong>
        </div>
      </div>
    \`;
  }
`;

const startIdx = content.indexOf('  // ===========================================================================\n  // 11. PARTNERSHIP VISUALIZER');
const endIdx = content.indexOf('  // ===========================================================================\n  // 12. ALLEGATION & MIXTURE');

if (startIdx === -1 || endIdx === -1) {
  console.error('Boundaries not found! start=' + startIdx + ', end=' + endIdx);
  process.exit(1);
}

const newContent = content.slice(0, startIdx) + replacement + '\n' + content.slice(endIdx);
fs.writeFileSync(jsFile, newContent, 'utf8');
console.log('Successfully updated renderPartnership in interactive_visualizers.js!');
