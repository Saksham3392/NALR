const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CIRCLED_NUMS = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];

function renderRouteWalkDiagram(q, legs) {
  const correctAns = q.correct || '';
  let curX = 0, curY = 0;
  const pts = [{ x: 0, y: 0, num: 0 }];
  legs.forEach(l => {
    curX += l.dx;
    curY += l.dy;
    pts.push({ x: curX, y: curY, num: l.num, dist: l.dist, dir: l.dir, text: l.text });
  });

  const minX = Math.min(...pts.map(p => p.x));
  const maxX = Math.max(...pts.map(p => p.x));
  const minY = Math.min(...pts.map(p => p.y));
  const maxY = Math.max(...pts.map(p => p.y));

  const spanX = Math.max(maxX - minX, 1);
  const spanY = Math.max(maxY - minY, 1);

  const svgW = 480, svgH = 320;
  const padLeft = 85, padRight = 55, padTop = 45, padBottom = 45;
  const availW = svgW - padLeft - padRight;
  const availH = svgH - padTop - padBottom;
  const scale = Math.min(availW / spanX, availH / spanY);

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const centerSvgX = padLeft + availW / 2;
  const centerSvgY = padTop + availH / 2;

  function toSvg(x, y) {
    return {
      sx: Math.round(centerSvgX + (x - midX) * scale),
      sy: Math.round(centerSvgY - (y - midY) * scale)
    };
  }

  const svgPts = pts.map(p => ({ ...p, ...toSvg(p.x, p.y) }));
  const startPt = svgPts[0];
  const endPt = svgPts[svgPts.length - 1];

  const straightDist = Math.round(Math.hypot(endPt.x - startPt.x, endPt.y - startPt.y) * 10) / 10;
  const isShortestDistQ = /(?:shortest distance|how far|distance between)/i.test(q.question);

  let pathSvg = '';
  for (let i = 0; i < legs.length; i++) {
    const p1 = svgPts[i];
    const p2 = svgPts[i + 1];
    const leg = legs[i];
    const cNum = CIRCLED_NUMS[leg.num] || `(${leg.num})`;

    const mx = (p1.sx + p2.sx) / 2;
    const my = (p1.sy + p2.sy) / 2;
    const angle = Math.atan2(p2.sy - p1.sy, p2.sx - p1.sx);
    const lx = Math.round(mx - Math.sin(angle) * 14);
    const ly = Math.round(my + Math.cos(angle) * 14);

    pathSvg += `
      <line x1="${p1.sx}" y1="${p1.sy}" x2="${p2.sx}" y2="${p2.sy}"
            stroke="#0d9488" stroke-width="3" stroke-linecap="round" marker-end="url(#tealArrowHead)"/>
      <circle cx="${p2.sx}" cy="${p2.sy}" r="4.5" fill="#0d9488" stroke="#ffffff" stroke-width="1.5"/>
      <text x="${lx}" y="${ly}" font-size="11" font-weight="850" fill="#0f766e" text-anchor="middle"
            paint-order="stroke" stroke="#ffffff" stroke-width="3" stroke-linejoin="round">${cNum} ${escapeHtml(leg.dist)}</text>
    `;
  }

  // Shortest distance dashed line if applicable
  let shortestSvg = '';
  if (isShortestDistQ && (startPt.sx !== endPt.sx || startPt.sy !== endPt.sy)) {
    const smx = (startPt.sx + endPt.sx) / 2;
    const smy = (startPt.sy + endPt.sy) / 2;
    shortestSvg = `
      <line x1="${startPt.sx}" y1="${startPt.sy}" x2="${endPt.sx}" y2="${endPt.sy}"
            stroke="#e11d48" stroke-width="2" stroke-dasharray="5,4"/>
      <text x="${smx}" y="${smy - 8}" font-size="10.5" font-weight="850" fill="#be123c" text-anchor="middle"
            paint-order="stroke" stroke="#ffffff" stroke-width="3" stroke-linejoin="round">Shortest: ${escapeHtml(correctAns)}</text>
    `;
  }

  return `
    <div class="sol-vis-container vis-direction vis-direction-route">
      <div class="vis-badge-header">
        <span class="vis-icon">🗺️</span>
        <span class="vis-label">Direction Sense — Step-by-Step Route Diagram</span>
        <span class="vis-module-tag">Journey Path</span>
      </div>

      <div class="route-diagram-card">
        <svg class="route-svg" viewBox="0 0 ${svgW} ${svgH}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="tealArrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0d9488"/>
            </marker>
            <pattern id="lightGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#f1f5f9" stroke-width="1"/>
            </pattern>
          </defs>

          <!-- Clean White Background with subtle grid -->
          <rect width="${svgW}" height="${svgH}" fill="#ffffff" rx="10"/>
          <rect width="${svgW}" height="${svgH}" fill="url(#lightGrid)" rx="10"/>

          <!-- Static Compass Rose (Top-Left) -->
          <g transform="translate(42, 42)">
            <circle cx="0" cy="0" r="26" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
            <line x1="0" y1="-22" x2="0" y2="22" stroke="#94a3b8" stroke-width="1.2"/>
            <line x1="-22" y1="0" x2="22" y2="0" stroke="#94a3b8" stroke-width="1.2"/>
            <polygon points="0,-22 -3.5,-6 0,-9 3.5,-6" fill="#ef4444"/>
            <polygon points="0,22 -3.5,6 0,9 3.5,6" fill="#64748b"/>
            <polygon points="22,0 6,-3.5 9,0 6,3.5" fill="#64748b"/>
            <polygon points="-22,0 -6,-3.5 -9,0 -6,3.5" fill="#64748b"/>
            <text x="0" y="-26" font-size="9" font-weight="900" fill="#ef4444" text-anchor="middle">N</text>
            <text x="0" y="32" font-size="8.5" font-weight="800" fill="#64748b" text-anchor="middle">S</text>
            <text x="30" y="3" font-size="8.5" font-weight="800" fill="#64748b" text-anchor="middle">E</text>
            <text x="-30" y="3" font-size="8.5" font-weight="800" fill="#64748b" text-anchor="middle">W</text>
            <circle cx="0" cy="0" r="2" fill="#0f172a"/>
          </g>

          <!-- Route Path Segments & Intermediate Turning Points -->
          ${pathSvg}

          <!-- Shortest Distance (if applicable) -->
          ${shortestSvg}

          <!-- Starting Point Badge -->
          <g transform="translate(${startPt.sx}, ${startPt.sy})">
            <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
            <circle cx="0" cy="0" r="11" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2"/>
            <rect x="-34" y="-28" width="68" height="18" rx="4" fill="#10b981"/>
            <text x="0" y="-16" font-size="9.5" font-weight="850" fill="#ffffff" text-anchor="middle">START (A)</text>
          </g>

          <!-- Ending Point Badge -->
          <g transform="translate(${endPt.sx}, ${endPt.sy})">
            <circle cx="0" cy="0" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
            <circle cx="0" cy="0" r="11" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
            <rect x="-32" y="12" width="64" height="18" rx="4" fill="#ef4444"/>
            <text x="0" y="24" font-size="9.5" font-weight="850" fill="#ffffff" text-anchor="middle">FINISH (B)</text>
          </g>
        </svg>

        <!-- Numbered Step-by-Step Ledger -->
        <div class="route-steps-ledger">
          <div class="rsl-title">Step-by-Step Route Breakdown:</div>
          <div class="rsl-grid">
            ${legs.map(l => `
              <div class="route-step-item">
                <span class="rsi-num">${CIRCLED_NUMS[l.num] || l.num}</span>
                <span class="rsi-text">${escapeHtml(l.text)}</span>
                <span class="rsi-badge">${escapeHtml(l.dist)} ${escapeHtml(l.dir)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="dir-res-banner">
        <span class="drb-label">Resolved Answer:</span>
        <strong class="drb-val highlight-gold">${escapeHtml(correctAns)}</strong>
      </div>
    </div>
  `;
}

module.exports = { renderRouteWalkDiagram };
console.log('Saved prototype generator.');
