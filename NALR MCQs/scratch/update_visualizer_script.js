const fs = require('fs');
const { KNOWN_ROUTE_MAP } = require('./test_routes_map.js');

const jsFile = './interactive_visualizers.js';
let content = fs.readFileSync(jsFile, 'utf8');

const routeMapString = JSON.stringify(KNOWN_ROUTE_MAP, null, 2);

const replacement = `  // ===========================================================================
  // 4. DIRECTION SENSE VISUALIZER (mod4 & mod15 type_3) — Static Step Route Diagram
  // ===========================================================================
  const DIRECTION_ROUTE_REGISTRY = ${routeMapString};

  const CIRCLED_STEP_NUMS = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫'];

  function renderDirectionSense(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const compassDirs = [
      { name: "North", deg: 0, aliases: ["north", "n"] },
      { name: "North-East", deg: 45, aliases: ["north-east", "northeast", "ne"] },
      { name: "East", deg: 90, aliases: ["east", "e"] },
      { name: "South-East", deg: 135, aliases: ["south-east", "southeast", "se"] },
      { name: "South", deg: 180, aliases: ["south", "s"] },
      { name: "South-West", deg: 225, aliases: ["south-west", "southwest", "sw"] },
      { name: "West", deg: 270, aliases: ["west", "w"] },
      { name: "North-West", deg: 315, aliases: ["north-west", "northwest", "nw"] }
    ];

    function findBearing(str) {
      if (!str) return null;
      const lower = str.toLowerCase();
      for (const d of ["north-east", "north-west", "south-east", "south-west"]) {
        if (lower.includes(d) || lower.includes(d.replace("-", ""))) {
          return compassDirs.find(c => c.name.toLowerCase() === d);
        }
      }
      for (const d of ["north", "south", "east", "west"]) {
        if (new RegExp("\\\\b" + d + "\\\\b", "i").test(lower)) {
          return compassDirs.find(c => c.name.toLowerCase() === d);
        }
      }
      return null;
    }

    // -------------------------------------------------------------------------
    // PRIMARY PATH: Step-by-Step Static Route Diagram (Matches Reference Style)
    // -------------------------------------------------------------------------
    let routeLegs = DIRECTION_ROUTE_REGISTRY[q.id] || null;

    // Dynamic Parser Fallback if question not explicitly in registry
    if (!routeLegs) {
      const cardinals = ['North', 'East', 'South', 'West'];
      function turnCardinal(cur, t) {
        const idx = cardinals.indexOf(cur);
        if (idx === -1) return cur;
        if (t === 'right') return cardinals[(idx + 1) % 4];
        if (t === 'left') return cardinals[(idx + 3) % 4];
        if (t === 'back' || t === 'around') return cardinals[(idx + 2) % 4];
        return cur;
      }

      const clauses = q.question
        .replace(/\\bFrom point [A-Z]\\b/gi, '')
        .split(/[,.;]|(?:\\band\\s+then\\b)|\\band\\b|\\bafter\\b/i)
        .map(c => c.trim())
        .filter(Boolean);

      let facing = null;
      const dynamicLegs = [];

      clauses.forEach(clause => {
        const faceMatch = clause.match(/faces\\s+(?:towards\\s+)?(?:the\\s+)?(north|south|east|west)/i);
        if (faceMatch) {
          facing = faceMatch[1].charAt(0).toUpperCase() + faceMatch[1].slice(1).toLowerCase();
        }

        const distMatch = clause.match(/(\\d+(?:\\.\\d+)?)\\s*(km|kilometres|kilometer|m|meters|meter|miles|ft|feet)\\b/i);
        const dirMatch = clause.match(/\\b(north-east|north-west|south-east|south-west|northwards|southwards|eastwards|westwards|north|south|east|west)\\b/i);
        const turnMatch = clause.match(/\\b(right|left|back|around)\\b/i);

        let moveDir = null;
        if (dirMatch) {
          let d = dirMatch[1].toLowerCase().replace('wards', '');
          if (d === 'north') moveDir = 'North';
          else if (d === 'south') moveDir = 'South';
          else if (d === 'east') moveDir = 'East';
          else if (d === 'west') moveDir = 'West';
          else if (d === 'north-east') moveDir = 'North-East';
          else if (d === 'north-west') moveDir = 'North-West';
          else if (d === 'south-east') moveDir = 'South-East';
          else if (d === 'south-west') moveDir = 'South-West';
          facing = moveDir;
        }

        if (turnMatch && facing) {
          facing = turnCardinal(facing, turnMatch[1].toLowerCase());
          if (!moveDir) moveDir = facing;
        }

        if (distMatch) {
          const distVal = parseFloat(distMatch[1]);
          const unit = distMatch[2];
          const actualDir = moveDir || facing || 'North';
          let dx = 0, dy = 0;
          if (actualDir === 'North') dy = distVal;
          else if (actualDir === 'South') dy = -distVal;
          else if (actualDir === 'East') dx = distVal;
          else if (actualDir === 'West') dx = -distVal;
          else if (actualDir === 'North-East') { dx = distVal * 0.707; dy = distVal * 0.707; }
          else if (actualDir === 'North-West') { dx = -distVal * 0.707; dy = distVal * 0.707; }
          else if (actualDir === 'South-East') { dx = distVal * 0.707; dy = -distVal * 0.707; }
          else if (actualDir === 'South-West') { dx = -distVal * 0.707; dy = -distVal * 0.707; }

          dynamicLegs.push({
            num: dynamicLegs.length + 1,
            dist: \`\${distVal} \${unit}\`,
            dir: actualDir,
            dx,
            dy,
            text: \`Move \${distVal} \${unit} \${actualDir}\`
          });
        }
      });

      if (dynamicLegs.length >= 2) {
        routeLegs = dynamicLegs;
      }
    }

    if (routeLegs && routeLegs.length >= 2) {
      let curX = 0, curY = 0;
      const pts = [{ x: 0, y: 0, num: 0 }];
      routeLegs.forEach(l => {
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
      const padLeft = 90, padRight = 60, padTop = 50, padBottom = 50;
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

      const isShortestDistQ = /(?:shortest distance|how far|distance between)/i.test(q.question);

      let pathSvg = '';
      for (let i = 0; i < routeLegs.length; i++) {
        const p1 = svgPts[i];
        const p2 = svgPts[i + 1];
        const leg = routeLegs[i];
        const cNum = CIRCLED_STEP_NUMS[leg.num] || \`(\${leg.num})\`;

        const mx = (p1.sx + p2.sx) / 2;
        const my = (p1.sy + p2.sy) / 2;
        const angle = Math.atan2(p2.sy - p1.sy, p2.sx - p1.sx);
        const lx = Math.round(mx - Math.sin(angle) * 14);
        const ly = Math.round(my + Math.cos(angle) * 14);

        pathSvg += \`
          <line x1="\${p1.sx}" y1="\${p1.sy}" x2="\${p2.sx}" y2="\${p2.sy}"
                stroke="#0d9488" stroke-width="3" stroke-linecap="round" marker-end="url(#tealArrowHead)"/>
          <circle cx="\${p2.sx}" cy="\${p2.sy}" r="4.5" fill="#0d9488" stroke="#ffffff" stroke-width="1.5"/>
          <text x="\${lx}" y="\${ly}" font-size="11" font-weight="850" fill="#0f766e" text-anchor="middle"
                paint-order="stroke" stroke="#ffffff" stroke-width="3" stroke-linejoin="round">\${cNum} \${escape(leg.dist)}</text>
        \`;
      }

      let shortestSvg = '';
      if (isShortestDistQ && (startPt.sx !== endPt.sx || startPt.sy !== endPt.sy)) {
        const smx = (startPt.sx + endPt.sx) / 2;
        const smy = (startPt.sy + endPt.sy) / 2;
        shortestSvg = \`
          <line x1="\${startPt.sx}" y1="\${startPt.sy}" x2="\${endPt.sx}" y2="\${endPt.sy}"
                stroke="#e11d48" stroke-width="2" stroke-dasharray="5,4"/>
          <text x="\${smx}" y="\${smy - 8}" font-size="10.5" font-weight="850" fill="#be123c" text-anchor="middle"
                paint-order="stroke" stroke="#ffffff" stroke-width="3" stroke-linejoin="round">Shortest: \${escape(correctAns)}</text>
        \`;
      }

      return \`
        <div class="sol-vis-container vis-direction vis-direction-route">
          <div class="vis-badge-header">
            <span class="vis-icon">🗺️</span>
            <span class="vis-label">Direction Sense — Step-by-Step Route Diagram</span>
            <span class="vis-module-tag">Journey Path</span>
          </div>

          <div class="route-diagram-card">
            <svg class="route-svg" viewBox="0 0 \${svgW} \${svgH}" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="tealArrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0d9488"/>
                </marker>
                <pattern id="lightGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#f1f5f9" stroke-width="1"/>
                </pattern>
              </defs>

              <rect width="\${svgW}" height="\${svgH}" fill="#ffffff" rx="10"/>
              <rect width="\${svgW}" height="\${svgH}" fill="url(#lightGrid)" rx="10"/>

              <!-- Static 4-Point Compass Rose (Top-Left) -->
              <g transform="translate(44, 44)">
                <circle cx="0" cy="0" r="26" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2"/>
                <line x1="0" y1="-22" x2="0" y2="22" stroke="#94a3b8" stroke-width="1.2"/>
                <line x1="-22" y1="0" x2="22" y2="0" stroke="#94a3b8" stroke-width="1.2"/>
                <polygon points="0,-22 -3.5,-6 0,-9 3.5,-6" fill="#ef4444"/>
                <polygon points="0,22 -3.5,6 0,9 3.5,6" fill="#64748b"/>
                <polygon points="22,0 6,-3.5 9,0 6,3.5" fill="#64748b"/>
                <polygon points="-22,0 -6,-3.5 -9,0 -6,3.5" fill="#64748b"/>
                <text x="0" y="-26" font-size="9.5" font-weight="900" fill="#ef4444" text-anchor="middle">N</text>
                <text x="0" y="32" font-size="8.5" font-weight="800" fill="#64748b" text-anchor="middle">S</text>
                <text x="31" y="3" font-size="8.5" font-weight="800" fill="#64748b" text-anchor="middle">E</text>
                <text x="-31" y="3" font-size="8.5" font-weight="800" fill="#64748b" text-anchor="middle">W</text>
                <circle cx="0" cy="0" r="2" fill="#0f172a"/>
              </g>

              <!-- Step Movement Path Segments -->
              \${pathSvg}

              <!-- Shortest Line If Distance Question -->
              \${shortestSvg}

              <!-- Starting Point Marker -->
              <g transform="translate(\${startPt.sx}, \${startPt.sy})">
                <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
                <circle cx="0" cy="0" r="11" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2"/>
                <rect x="-34" y="-28" width="68" height="18" rx="4" fill="#10b981"/>
                <text x="0" y="-16" font-size="9.5" font-weight="850" fill="#ffffff" text-anchor="middle">START (A)</text>
              </g>

              <!-- Ending Point Marker -->
              <g transform="translate(\${endPt.sx}, \${endPt.sy})">
                <circle cx="0" cy="0" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>
                <circle cx="0" cy="0" r="11" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="2,2"/>
                <rect x="-32" y="12" width="64" height="18" rx="4" fill="#ef4444"/>
                <text x="0" y="24" font-size="9.5" font-weight="850" fill="#ffffff" text-anchor="middle">FINISH (B)</text>
              </g>
            </svg>

            <!-- Numbered Movement Steps Ledger -->
            <div class="route-steps-ledger">
              <div class="rsl-title">Step-by-Step Route Breakdown:</div>
              <div class="rsl-grid">
                \${routeLegs.map(l => \`
                  <div class="route-step-item">
                    <span class="rsi-num">\${CIRCLED_STEP_NUMS[l.num] || l.num}</span>
                    <span class="rsi-text">\${escape(l.text)}</span>
                    <span class="rsi-badge">\${escape(l.dist)} \${escape(l.dir)}</span>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <div class="dir-res-banner">
            <span class="drb-label">Resolved Answer:</span>
            <strong class="drb-val highlight-gold">\${escape(correctAns)}</strong>
          </div>
        </div>
      \`;
    }

    // -------------------------------------------------------------------------
    // SPECIALIZED FALLBACKS: Solar Shadow & Angular Rotation Dial
    // -------------------------------------------------------------------------
    const lowerText = text.toLowerCase();
    const isShadow = lowerText.includes("shadow") || lowerText.includes("sunrise") || lowerText.includes("sunset") || (lowerText.includes("sun ") && !lowerText.includes("sunday"));
    const isRotation = q.type_id === "type_1" ||
      lowerText.includes("clockwise") || lowerText.includes("anti-clockwise") || lowerText.includes("anticlockwise") ||
      lowerText.includes("clock") || lowerText.includes("time piece") || lowerText.includes("timepiece") ||
      lowerText.includes("minute hand") || lowerText.includes("hour hand") ||
      lowerText.includes("standing on head") || lowerText.includes("headstand") ||
      lowerText.includes("becomes west") || lowerText.includes("becomes north") || lowerText.includes("net angle");

    if (isShadow) {
      const isMorning = !lowerText.includes("sunset") && !lowerText.includes("evening");
      const sunDirection = isMorning ? "East" : "West";
      const shadowDirection = isMorning ? "West" : "East";
      const isRight = lowerText.includes("right");
      const isLeft = lowerText.includes("left");
      const relationText = isRight ? "Right Side" : isLeft ? "Left Side" : "Opposite Side";

      return \`
        <div class="sol-vis-container vis-direction vis-direction-shadow">
          <div class="vis-badge-header">
            <span class="vis-icon">☀️</span>
            <span class="vis-label">Solar Shadow Geometry &amp; Observer Orientation</span>
            <span class="vis-module-tag">Shadow Mechanics</span>
          </div>

          <div class="shadow-stage-canvas">
            <div class="shadow-svg-card">
              <svg class="shadow-svg" viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; max-height: 150px;">
                <defs>
                  <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="1"/>
                    <stop offset="100%" stop-color="#ea580c" stop-opacity="1"/>
                  </linearGradient>
                  <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="rgba(100, 116, 139, 0.18)"/>
                    <stop offset="100%" stop-color="rgba(100, 116, 139, 0.04)"/>
                  </linearGradient>
                </defs>

                <line x1="20" y1="105" x2="360" y2="105" stroke="rgba(150, 150, 150, 0.4)" stroke-width="1.5" stroke-dasharray="4,4"/>
                <rect x="20" y="105" width="340" height="20" fill="url(#groundGrad)" rx="3"/>

                <g transform="translate(60, 42)">
                  <circle cx="0" cy="0" r="18" fill="url(#sunGlow)"/>
                  <circle cx="0" cy="0" r="24" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"/>
                  <text x="0" y="32" font-size="9.5" font-weight="850" fill="#d97706" text-anchor="middle">☀️ SUN (\${sunDirection})</text>
                  <line x1="16" y1="8" x2="120" y2="58" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.75"/>
                </g>

                <g transform="translate(200, 55)">
                  <circle cx="0" cy="0" r="9" fill="#2563eb"/>
                  <line x1="0" y1="9" x2="0" y2="35" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
                  <line x1="-14" y1="18" x2="14" y2="18" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                  <line x1="0" y1="35" x2="-8" y2="50" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                  <line x1="0" y1="35" x2="8" y2="50" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
                  <text x="0" y="-14" font-size="9.5" font-weight="800" fill="var(--ink-primary, #181e30)" text-anchor="middle">Observer</text>
                  <text x="-18" y="17" font-size="8.5" font-weight="700" fill="#64748b" text-anchor="end">Right</text>
                  <text x="18" y="17" font-size="8.5" font-weight="700" fill="#64748b" text-anchor="start">Left</text>
                </g>

                <g transform="translate(200, 105)">
                  <ellipse cx="65" cy="0" rx="48" ry="5" fill="rgba(30, 41, 59, 0.45)"/>
                  <text x="65" y="15" font-size="9" font-weight="850" fill="#334155" text-anchor="middle">👤 Shadow ➔ \${shadowDirection}</text>
                </g>
              </svg>
            </div>

            <div class="shadow-matrix-grid">
              <div class="shadow-matrix-card">
                <span class="smc-title">1. Solar Horizon Position</span>
                <span class="smc-desc">\${isMorning ? "🌅 Morning (Sunrise)" : "🌇 Evening (Sunset)"} ➔ Sun in <strong>\${sunDirection}</strong></span>
              </div>
              <div class="shadow-matrix-card">
                <span class="smc-title">2. Shadow Projection Law</span>
                <span class="smc-desc">Light travels \${sunDirection}➔\${shadowDirection} ➔ Shadow casts <strong>\${shadowDirection}</strong></span>
              </div>
              <div class="shadow-matrix-card">
                <span class="smc-title">3. Observer Orientation Rule</span>
                <span class="smc-desc">Shadow is on <strong>\${relationText}</strong> ➔ Face points <strong>\${escape(correctAns)}</strong></span>
              </div>
            </div>

            <div class="dir-res-banner">
              <span class="drb-label">Resolved Facing Bearing:</span>
              <strong class="drb-val highlight-gold">\${escape(correctAns)}</strong>
            </div>
          </div>
        </div>
      \`;
    }

    if (isRotation) {
      const targetDir = findBearing(correctAns) || compassDirs[4];
      const initialMatch = text.match(/(?:facing|walking towards|towards the|initially|starts facing)\\s+(north-east|north-west|south-east|south-west|north|south|east|west)/i);
      const initialDir = initialMatch ? findBearing(initialMatch[1]) : compassDirs[0];
      const initialDeg = initialDir ? initialDir.deg : 0;
      const targetDeg = targetDir.deg;

      let sweepDeg = (targetDeg - initialDeg);
      if (sweepDeg > 180) sweepDeg -= 360;
      if (sweepDeg < -180) sweepDeg += 360;

      const isClockQ = lowerText.includes("clock") || lowerText.includes("time piece") || lowerText.includes("timepiece") || lowerText.includes("minute");
      const isHeadstandQ = lowerText.includes("standing on head") || lowerText.includes("headstand");

      return \`
        <div class="sol-vis-container vis-direction vis-direction-rotation">
          <div class="vis-badge-header">
            <span class="vis-icon">🔄</span>
            <span class="vis-label">Angular Turn &amp; 8-Point Compass Bearing Gauge</span>
            <span class="vis-module-tag">Spatial Orientation</span>
          </div>

          <div class="rotation-stage-canvas">
            <div class="rotation-dial-card">
              <svg class="rotation-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width: 160px; height: 160px;">
                <defs>
                  <radialGradient id="compassBgGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="rgba(37, 99, 235, 0.08)"/>
                    <stop offset="100%" stop-color="rgba(37, 99, 235, 0.22)"/>
                  </radialGradient>
                </defs>

                <circle cx="100" cy="100" r="88" fill="url(#compassBgGrad)" stroke="#2563eb" stroke-width="2"/>
                <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(150, 150, 150, 0.25)" stroke-width="1" stroke-dasharray="2,2"/>

                <text x="100" y="24" font-size="10" font-weight="900" fill="#ef4444" text-anchor="middle">N</text>
                <text x="154" y="46" font-size="8" font-weight="700" fill="#64748b" text-anchor="middle">NE</text>
                <text x="178" y="103" font-size="9" font-weight="800" fill="#64748b" text-anchor="middle">E</text>
                <text x="154" y="162" font-size="8" font-weight="700" fill="#64748b" text-anchor="middle">SE</text>
                <text x="100" y="184" font-size="9" font-weight="800" fill="#64748b" text-anchor="middle">S</text>
                <text x="46" y="162" font-size="8" font-weight="700" fill="#64748b" text-anchor="middle">SW</text>
                <text x="22" y="103" font-size="9" font-weight="800" fill="#64748b" text-anchor="middle">W</text>
                <text x="46" y="46" font-size="8" font-weight="700" fill="#64748b" text-anchor="middle">NW</text>

                <g transform="rotate(\${initialDeg}, 100, 100)">
                  <line x1="100" y1="100" x2="100" y2="40" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
                  <circle cx="100" cy="38" r="3" fill="#0284c7"/>
                </g>

                <g transform="rotate(\${targetDeg}, 100, 100)">
                  <polygon points="100,30 94,100 106,100" fill="#ef4444"/>
                  <polygon points="100,140 96,100 104,100" fill="#94a3b8"/>
                  <circle cx="100" cy="100" r="6" fill="#0f172a"/>
                  <circle cx="100" cy="100" r="3" fill="#ffffff"/>
                </g>
              </svg>
              <span style="font-size: 11px; font-weight: 800; color: var(--primary-blue); margin-top: 6px;">
                Bearing: \${targetDir.name} (\${targetDeg}°)
              </span>
            </div>

            <div class="rotation-ledger-stack">
              <div class="rot-step-card">
                <span class="rot-step-label">Initial Vector:</span>
                <span class="rot-step-val">\${initialDir.name} (\${initialDeg}°)</span>
              </div>
              <div class="rot-step-card">
                <span class="rot-step-label">\${isClockQ ? "Clock Mechanism:" : isHeadstandQ ? "Body Inversion:" : "Net Angular Shift:"}</span>
                <span class="rot-step-val highlight-gold">
                  \${isClockQ ? "Hour/Minute hand rotation mapping" : isHeadstandQ ? "Upside down: Left/Right axes invert" : \`\${sweepDeg > 0 ? "+" : ""}\${sweepDeg}° (\${sweepDeg >= 0 ? "Clockwise" : "Anti-Clockwise"})\`}
                </span>
              </div>
              <div class="rot-step-card" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.35);">
                <span class="rot-step-label" style="color: #047857;">Resolved Orientation:</span>
                <strong class="rot-step-val" style="color: #047857;">\${escape(correctAns)}</strong>
              </div>
            </div>
          </div>

          <div class="dir-res-banner">
            <span class="drb-label">Final Resolved Bearing:</span>
            <strong class="drb-val highlight-gold">\${escape(correctAns)}</strong>
          </div>
        </div>
      \`;
    }

    // Relative Positions Fallback (Villages / Collinear Points)
    const matchedBearing = findBearing(correctAns) || compassDirs[0];
    return \`
      <div class="sol-vis-container vis-direction vis-direction-relative">
        <div class="vis-badge-header">
          <span class="vis-icon">🧭</span>
          <span class="vis-label">Direction Sense — Relative Position Map</span>
          <span class="vis-module-tag">Spatial Logic</span>
        </div>

        <div class="direction-dual-stage">
          <div class="compass-hud-card" style="width: 100%;">
            <div class="compass-circle-3d">
              <div class="c-tick c-n">N</div>
              <div class="c-tick c-ne">NE</div>
              <div class="c-tick c-e">E</div>
              <div class="c-tick c-se">SE</div>
              <div class="c-tick c-s">S</div>
              <div class="c-tick c-sw">SW</div>
              <div class="c-tick c-w">W</div>
              <div class="c-tick c-nw">NW</div>

              <div class="compass-needle-pivot">
                <div class="needle-3d" style="transform: rotate(\${matchedBearing.deg}deg);"></div>
              </div>
            </div>

            <div class="compass-readout-pill">
              <span class="cr-label">Relative Bearing:</span>
              <strong class="cr-value">\${escape(matchedBearing.name)} (\${matchedBearing.deg}°)</strong>
            </div>
          </div>
        </div>

        <div class="dir-res-banner">
          <span class="drb-label">Resolved Relative Direction:</span>
          <strong class="drb-val highlight-gold">\${escape(correctAns)}</strong>
        </div>
      </div>
    \`;
  }
`;

const startIdx = content.indexOf('  // ===========================================================================\n  // 4. DIRECTION SENSE VISUALIZER');
const endIdx = content.indexOf('  // ===========================================================================\n  // 5. NUMBER SYSTEM VISUALIZER');

if (startIdx === -1 || endIdx === -1) {
  console.error('Failed to locate boundaries: start=' + startIdx + ', end=' + endIdx);
  process.exit(1);
}

const newContent = content.slice(0, startIdx) + replacement + '\n' + content.slice(endIdx);
fs.writeFileSync(jsFile, newContent, 'utf8');
console.log('Successfully updated interactive_visualizers.js!');
