/**
 * NALR MASTERCLASS — INTERACTIVE & SCHEMATIC SOLUTION VISUALIZERS
 * Provides rich, colorful, diagrammatic visual solutions for all question topics:
 * 1. Blood Relation (mod1) — Multi-tier Generational Tree Diagram
 * 2. Coded Relation (mod2) — Narrative Dialogue Deconstruction Flowchart & Symbol Matrix
 * 3. Analogy (mod3) — Dual-Wing Symmetrical Transformation Bridge & Semantic Matrix
 * 4. Direction Sense (mod4) — 2D Cartesian Trajectory SVG Grid, 8-Point Compass HUD, Angular Gauge
 * 5. Number System (mod5) — Unit Digit Domino Chain, Cyclicity Wheel, Legendre Factor-5 Cascade & Factor Tree
 * 6. H.C.F. & L.C.M. (mod6) — Prime Factorization Decomposition, Sync Cycle & Remainder Architecture
 * 7. Average (mod7) — Arithmetic Mean Seesaw / Balance Beam SVG, Delta Inclusion & Uniform Invariant
 * 8. Remainder Theorem (mod8) — Euclidean Division Bar, Negative Shift Track & Multi-Factor Modulo
 * 9. Ratio & Proportion (mod9, mod11) — Segmented Share Distribution, Continued Ratio Bridge & Extreme-Means Scale
 * 10. Ages (mod10) — 3-Epoch Chronological Milestone Track & Universal Age Invariant Law
 * 11. Syllogism (mod14) — Categorical Euler-Venn Set Relation Model
 */

const SolutionVisualizer = (() => {

  // Helper: Escape HTML string
  function escape(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Helper: Clean Markdown formatting inside visualizer labels
  function stripMd(text) {
    if (!text) return "";
    return text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1");
  }

  // Normalize quotes (convert unicode curly quotes to standard)
  function cleanQuotes(text) {
    if (!text) return "";
    return text.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');
  }

  // ===========================================================================
  // 1. BLOOD RELATION VISUALIZER (mod1) — Generational Family Tree Diagram
  // ===========================================================================
  function renderBloodRelation(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const namesSet = new Set();
    const letterMatches = q.question.match(/\b[A-G]\b/g);
    if (letterMatches) letterMatches.forEach(l => namesSet.add(l));

    const commonNames = ["Anil", "Daya", "Chandra", "Vimal", "Sarita", "Deepa", "Rajendra", "Surendra", "Ravindra", "Ravi", "Rekha", "Atul", "Kiran", "Sonu", "Rakesh", "Suresh", "Rahul", "Deepak", "Anuj", "Vipin", "Amit", "Maya", "Geeta", "Mohan", "Rohit", "Monika", "Sunita", "Harsh", "Rita"];
    commonNames.forEach(name => {
      if (new RegExp(`\\b${name}\\b`, 'i').test(text)) {
        namesSet.add(name);
      }
    });

    const people = Array.from(namesSet);
    const genP2 = [];
    const genP1 = [];
    const gen0 = [];
    const genM1 = [];

    people.forEach(p => {
      let gender = "unknown";
      let role = "";
      let tier = 0;

      if (new RegExp(`${p}\\s+is\\s+(?:the\\s+)?(grandfather|grandmother)`, 'i').test(text) ||
          new RegExp(`(grandfather|grandmother)[^.]+?${p}`, 'i').test(text)) {
        tier = 2;
        gender = /grandfather/i.test(text) ? "male" : "female";
        role = gender === "male" ? "Grandfather" : "Grandmother";
      } else if (new RegExp(`${p}\\s+is\\s+(?:the\\s+)?(father|mother|uncle|aunt)`, 'i').test(text) ||
                 new RegExp(`(?:father|mother|uncle|aunt)\\s+of\\s+[^.]+?${p}`, 'i').test(text)) {
        tier = 1;
        const m = text.match(new RegExp(`${p}\\s+is\\s+(?:the\\s+)?(father|mother|uncle|aunt)`, 'i'));
        role = m ? m[1] : "Parent / Elder";
        gender = /(father|uncle)/i.test(role) ? "male" : "female";
      } else if (new RegExp(`${p}\\s+is\\s+(?:the\\s+)?(son|daughter)`, 'i').test(text)) {
        tier = -1;
        gender = /son/i.test(text) ? "male" : "female";
        role = gender === "male" ? "Son" : "Daughter";
      } else if (new RegExp(`${p}\\s+is\\s+(?:the\\s+)?(brother|sister|husband|wife)`, 'i').test(text)) {
        tier = 0;
        const m = text.match(new RegExp(`${p}\\s+is\\s+(?:the\\s+)?(brother|sister|husband|wife)`, 'i'));
        role = m ? m[1] : "Sibling";
        gender = /(brother|husband)/i.test(role) ? "male" : "female";
      } else {
        tier = 0;
        gender = "unknown";
        role = "Family Member";
      }

      const item = { name: p, gender, role };
      if (tier === 2) genP2.push(item);
      else if (tier === 1) genP1.push(item);
      else if (tier === -1) genM1.push(item);
      else gen0.push(item);
    });

    if (genP1.length === 0 && gen0.length === 0) {
      genP1.push({ name: "Father / Elder", gender: "male", role: "Parent (Gen +1)" });
      genP1.push({ name: "Mother / Elder", gender: "female", role: "Spouse (Gen +1)" });
      gen0.push({ name: "Subject / Sibling", gender: "male", role: "Gen 0" });
    }

    const deductionLines = (q.explanation || "")
      .split("\n")
      .map(l => l.trim())
      .filter(l => l.includes("->") || l.includes("=") || /^\d+[\.\)]/.test(l) || /father|mother|brother|sister|son|daughter/i.test(l))
      .slice(0, 4);

    return `
      <div class="sol-vis-container vis-blood-tree">
        <div class="vis-badge-header">
          <span class="vis-icon">🌳</span>
          <span class="vis-label">Generational Family Tree Diagram</span>
          <span class="vis-module-tag">Blood Relation</span>
        </div>

        <div class="blood-tree-diagram">
          ${genP2.length > 0 ? `
            <div class="tree-tier-lane tier-gp">
              <div class="tier-pill-label">
                <span class="tier-badge-icon">👑</span>
                <span>Generation +2 (Grandparents)</span>
              </div>
              <div class="tree-nodes-cluster">
                ${genP2.map(p => `
                  <div class="tree-person-card card-${p.gender}">
                    <div class="card-avatar">${p.gender === 'male' ? '♂' : '♀'}</div>
                    <div class="card-info">
                      <span class="card-name">${escape(p.name)}</span>
                      <span class="card-role">${escape(p.role)}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="tree-descent-connector">
              <span class="descent-line"></span>
              <span class="descent-arrow">↓ 1st Lineage Descent</span>
              <span class="descent-line"></span>
            </div>
          ` : ''}

          <div class="tree-tier-lane tier-parents">
            <div class="tier-pill-label">
              <span class="tier-badge-icon">🏡</span>
              <span>Generation +1 (Parents &amp; Elders)</span>
            </div>
            <div class="tree-nodes-cluster">
              ${genP1.map((p, idx) => `
                ${idx > 0 && idx % 2 === 1 ? `<div class="marital-bond-badge"><span>═ ⚭ ═</span><small>Marriage</small></div>` : ''}
                <div class="tree-person-card card-${p.gender}">
                  <div class="card-avatar">${p.gender === 'male' ? '♂' : (p.gender === 'female' ? '♀' : '👤')}</div>
                  <div class="card-info">
                    <span class="card-name">${escape(p.name)}</span>
                    <span class="card-role">${escape(p.role)}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="tree-descent-connector">
            <span class="descent-line"></span>
            <span class="descent-arrow">↓ Child Lineage Descent</span>
            <span class="descent-line"></span>
          </div>

          <div class="tree-tier-lane tier-target">
            <div class="tier-pill-label">
              <span class="tier-badge-icon">🎯</span>
              <span>Generation 0 (Target &amp; Siblings)</span>
            </div>
            <div class="tree-nodes-cluster">
              ${gen0.map((p, idx) => `
                ${idx > 0 ? `<div class="sibling-bond-badge"><span>── ↔ ──</span><small>Siblings</small></div>` : ''}
                <div class="tree-person-card card-${p.gender}">
                  <div class="card-avatar">${p.gender === 'male' ? '♂' : (p.gender === 'female' ? '♀' : '👤')}</div>
                  <div class="card-info">
                    <span class="card-name">${escape(p.name)}</span>
                    <span class="card-role">${escape(p.role)}</span>
                  </div>
                </div>
              `).join('')}
              <div class="tree-person-card card-target-winner">
                <div class="card-avatar">🎯</div>
                <div class="card-info">
                  <span class="card-name">Solved Relation</span>
                  <span class="card-role highlight-win">${escape(correctAns)}</span>
                </div>
              </div>
            </div>
          </div>

          ${genM1.length > 0 ? `
            <div class="tree-descent-connector">
              <span class="descent-line"></span>
              <span class="descent-arrow">↓ Offspring Lineage</span>
              <span class="descent-line"></span>
            </div>
            <div class="tree-tier-lane tier-children">
              <div class="tier-pill-label">
                <span class="tier-badge-icon">🌱</span>
                <span>Generation -1 (Children)</span>
              </div>
              <div class="tree-nodes-cluster">
                ${genM1.map(p => `
                  <div class="tree-person-card card-${p.gender}">
                    <div class="card-avatar">${p.gender === 'male' ? '♂' : '♀'}</div>
                    <div class="card-info">
                      <span class="card-name">${escape(p.name)}</span>
                      <span class="card-role">${escape(p.role)}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        ${deductionLines.length > 0 ? `
          <div class="vis-deduction-trail">
            <div class="vis-trail-title">Relational Deduction Trail:</div>
            <div class="vis-trail-steps">
              ${deductionLines.map((line, idx) => `
                <div class="vis-trail-chip">
                  <span class="vis-chip-num">${idx + 1}</span>
                  <span>${escape(stripMd(line.replace(/^\d+[\.\)]\s*/, '')))}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="vis-legend-bar">
          <span class="legend-chip chip-male">♂ Male (+)</span>
          <span class="legend-chip chip-female">♀ Female (−)</span>
          <span class="legend-chip chip-couple">═ ⚭ ═ Married</span>
          <span class="legend-chip chip-sibling">── ↔ ── Sibling</span>
          <span class="legend-chip chip-target">🎯 Answer: ${escape(correctAns)}</span>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 2. CODED RELATION VISUALIZER (mod2) — Narrative Pipeline & Symbol Matrix
  // ===========================================================================
  function renderCodedRelation(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const isPointing = /pointing|said|photograph|portrait|market|introduces|gentleman|lady|girl|boy/i.test(q.question);

    if (isPointing) {
      let speaker = "Speaker / Narrator";
      const speakerMatch = q.question.match(/\b(Suresh|Rahul|Deepak|Anuj|Vipin|Amit|Sunita|Harsh|Rita|Monika|A man|A woman|A person)\s+(?:said|introduces)/i);
      if (speakerMatch) speaker = speakerMatch[1];

      let subject = "Person in Photo / Scene";
      if (/photograph of a boy/i.test(q.question)) subject = "Boy in Photo";
      else if (/photograph of a woman/i.test(q.question)) subject = "Woman in Photo";
      else if (/lady in the market/i.test(q.question)) subject = "Lady in Market";
      else if (/portrait of a man/i.test(q.question)) subject = "Man in Portrait";
      else if (/pointing to a girl/i.test(q.question)) subject = "Girl";
      else if (/pointing towards a gentleman/i.test(q.question)) subject = "Gentleman";
      else if (/man on stage/i.test(q.question)) subject = "Man on Stage";

      const clauses = [];
      if (/my mother/i.test(q.question)) clauses.push({ clue: "My mother", meaning: "Speaker's Mother", tag: "Gen +1", color: "sky" });
      if (/only son of my mother/i.test(q.question)) clauses.push({ clue: "Only son of my mother", meaning: "Speaker Himself", tag: "Gen 0", color: "teal" });
      if (/only daughter of my mother/i.test(q.question)) clauses.push({ clue: "Only daughter of my mother", meaning: "Speaker Herself", tag: "Gen 0", color: "teal" });
      if (/son of the only son/i.test(q.question)) clauses.push({ clue: "Son of only son", meaning: "Speaker's Son", tag: "Gen -1", color: "amber" });
      if (/mother's only son is my father/i.test(q.question)) clauses.push({ clue: "Her mother's only son", meaning: "Woman's Brother = Speaker's Father", tag: "Gen +1", color: "sky" });
      if (/father's father/i.test(q.question)) clauses.push({ clue: "Father's father", meaning: "Paternal Grandfather", tag: "Gen +2", color: "purple" });
      if (/only daughter-in-law/i.test(q.question)) clauses.push({ clue: "Only daughter-in-law", meaning: "Mother of Speaker", tag: "Gen +1", color: "emerald" });

      if (clauses.length === 0) {
        clauses.push({ clue: "First Relationship Link", meaning: "Immediate Kinship", tag: "Step 1", color: "sky" });
        clauses.push({ clue: "Intermediate Link", meaning: "Connecting Relative", tag: "Step 2", color: "teal" });
        clauses.push({ clue: "Resolved Target Link", meaning: "Target Person", tag: "Step 3", color: "amber" });
      }

      return `
        <div class="sol-vis-container vis-coded-pipeline">
          <div class="vis-badge-header">
            <span class="vis-icon">🗣️</span>
            <span class="vis-label">Dialogue Deconstruction &amp; Kinship Flowchart</span>
            <span class="vis-module-tag">Pointing Relation</span>
          </div>

          <div class="narrative-pipeline-canvas">
            <div class="pipeline-node node-speaker">
              <div class="p-avatar">🗣️</div>
              <div class="p-label">Speaker</div>
              <strong class="p-title">${escape(speaker)}</strong>
            </div>

            <div class="pipeline-arrow-vector">
              <span class="p-arrow-line"></span>
              <span class="p-arrow-head">▶</span>
              <small class="p-arrow-text">Mentions</small>
            </div>

            <div class="pipeline-clues-stack">
              ${clauses.map((c, i) => `
                <div class="clue-step-card step-${c.color}">
                  <div class="clue-step-num">${i + 1}</div>
                  <div class="clue-content">
                    <span class="clue-quote">“${escape(c.clue)}”</span>
                    <span class="clue-meaning">➔ <strong>${escape(c.meaning)}</strong></span>
                  </div>
                  <span class="clue-tag">${escape(c.tag)}</span>
                </div>
              `).join('')}
            </div>

            <div class="pipeline-arrow-vector">
              <span class="p-arrow-line"></span>
              <span class="p-arrow-head">▶</span>
              <small class="p-arrow-text">Resolves to</small>
            </div>

            <div class="pipeline-node node-subject">
              <div class="p-avatar">🖼️</div>
              <div class="p-label">${escape(subject)}</div>
              <strong class="p-title highlight-gold">${escape(correctAns)}</strong>
            </div>
          </div>

          <div class="polarity-bridge-card">
            <div class="polarity-side">
              <span class="pol-sub">From Perspective of ${escape(speaker)}:</span>
              <span class="pol-val">${escape(subject)} is <strong>${escape(correctAns)}</strong></span>
            </div>
            <div class="polarity-divider">⇄</div>
            <div class="polarity-side">
              <span class="pol-sub">Deduction Method:</span>
              <span class="pol-val">Backward Narrative Substitution</span>
            </div>
          </div>
        </div>
      `;
    }

    return renderBloodRelation(q);
  }

  // ===========================================================================
  // 3. ANALOGY VISUALIZER (mod3) — Symmetrical Transformation Bridge
  // ===========================================================================
  function renderAnalogy(q) {
    const text = cleanQuotes(q.question);
    const correctAns = q.correct || "";

    let t1 = "Term 1", t2 = "Term 2", t3 = "Term 3", t4 = correctAns;
    let ruleCategory = "Semantic Classification";
    let ruleText = "Direct Categorical Association";
    let isNumberAnalogy = false;

    const colonMatch = text.match(/^([A-Za-z0-9\s,\.\-'\(\)]+?)\s*:\s*([A-Za-z0-9\s,\.\-'\(\)]+?)\s*(?:::|: :)\s*([A-Za-z0-9\s,\.\-'\(\)]+?)\s*:\s*(.+)$/);
    if (colonMatch) {
      t1 = colonMatch[1].trim();
      t2 = colonMatch[2].trim();
      t3 = colonMatch[3].trim();
      t4 = colonMatch[4].trim() === '?' ? correctAns : colonMatch[4].trim();
      if (t2 === '?') t2 = correctAns;
      if (t3 === '?') t3 = correctAns;
      if (t1 === '?') t1 = correctAns;
    } else {
      const proseMatch = text.match(/['"“]?([A-Za-z0-9\s]+?)['"”]?\s+is\s+related\s+to\s+['"“]?([A-Za-z0-9\s]+?)['"”]?\s+in\s+the\s+same\s+way\s+as\s+['"“]?([A-Za-z0-9\s]+?)['"”]?\s+is\s+related/i);
      if (proseMatch) {
        t1 = proseMatch[1].trim();
        t2 = proseMatch[2].trim();
        t3 = proseMatch[3].trim();
        t4 = correctAns;
      } else {
        const isToMatch = text.match(/([A-Za-z0-9]+)\s+is\s+to\s+([A-Za-z0-9]+)\s+as\s+([A-Za-z0-9]+)\s+is\s+to/i);
        if (isToMatch) {
          t1 = isToMatch[1].trim();
          t2 = isToMatch[2].trim();
          t3 = isToMatch[3].trim();
          t4 = correctAns;
        } else if (/Given set/i.test(text)) {
          const setMatch = text.match(/\(([0-9,\s]+)\)/);
          t1 = "Given Set";
          t2 = setMatch ? `(${setMatch[1]})` : "(a, b, c)";
          t3 = "Analogous Set";
          t4 = correctAns;
          ruleCategory = "Numerical Pattern Set";
          ruleText = "Identical Inter-element Difference / Ratio";
          isNumberAnalogy = true;
        }
      }
    }

    if (/\d+/.test(t1) && /\d+/.test(t2)) {
      isNumberAnalogy = true;
      ruleCategory = "Mathematical Ratio / Function";
      ruleText = "Parallel Arithmetic Transformation";
    } else if (/fruit|ocean|bird|aves|tree|flower/i.test(text)) {
      ruleCategory = "Biological & Nature Taxonomy";
      ruleText = "Category & Species Membership";
    } else if (/publisher|producer|writer|labourer|entrepreneur|coach|teacher/i.test(text)) {
      ruleCategory = "Professional Role & Domain";
      ruleText = "Agent to Creation / Workplace";
    } else if (/sympathy|antipathy|love|hatred|dawn|evening|light|dark/i.test(text)) {
      ruleCategory = "Antonym & Opposite Polarity";
      ruleText = "Direct Inversion of Meaning";
    } else if (/cap|head|neck|tie|waist|belt|needle|thread/i.test(text)) {
      ruleCategory = "Object & Placement / Utility";
      ruleText = "Anatomical or Functional Complement";
    } else if (/[A-Z]{3,}/.test(t1) && /[A-Z]{3,}/.test(t2)) {
      ruleCategory = "Alphabetical Cipher Coding";
      ruleText = "Letter Shift / Anagrammatic Inversion";
    }

    return `
      <div class="sol-vis-container vis-analogy-bridge">
        <div class="vis-badge-header">
          <span class="vis-icon">⚡</span>
          <span class="vis-label">Symmetrical Analogy Transformation Bridge</span>
          <span class="vis-module-tag">Analogy</span>
        </div>

        <div class="analogy-bridge-canvas">
          <div class="analogy-wing wing-archetype">
            <div class="wing-tag">Archetype Pair (The Rule)</div>
            <div class="analogy-pair-row">
              <div class="analogy-node node-a">
                <span class="an-icon">${isNumberAnalogy ? '🔢' : '📦'}</span>
                <span class="an-label">Premise A</span>
                <strong class="an-text">${escape(t1)}</strong>
              </div>

              <div class="analogy-rel-arrow">
                <span class="ar-line"></span>
                <span class="ar-pill">${escape(ruleText)}</span>
                <span class="ar-head">▶</span>
              </div>

              <div class="analogy-node node-b">
                <span class="an-icon">${isNumberAnalogy ? '⚙️' : '🏷️'}</span>
                <span class="an-label">Relatum B</span>
                <strong class="an-text">${escape(t2)}</strong>
              </div>
            </div>
          </div>

          <div class="analogy-center-fulcrum">
            <div class="fulcrum-orb">
              <span class="fulcrum-symbol">::</span>
            </div>
            <span class="fulcrum-caption">EQUIVALENT LOGIC</span>
          </div>

          <div class="analogy-wing wing-target">
            <div class="wing-tag">Target Pair (Application)</div>
            <div class="analogy-pair-row">
              <div class="analogy-node node-c">
                <span class="an-icon">${isNumberAnalogy ? '🔢' : '📦'}</span>
                <span class="an-label">Premise C</span>
                <strong class="an-text">${escape(t3)}</strong>
              </div>

              <div class="analogy-rel-arrow arrow-target">
                <span class="ar-line"></span>
                <span class="ar-pill">Same Rule Applied</span>
                <span class="ar-head">▶</span>
              </div>

              <div class="analogy-node node-d node-winner">
                <span class="an-icon">🎯</span>
                <span class="an-label">Answer D</span>
                <strong class="an-text highlight-gold">${escape(t4)}</strong>
              </div>
            </div>
          </div>
        </div>

        <div class="analogy-rule-footer">
          <div class="rule-cat-badge">
            <span class="rc-label">Relationship Classification:</span>
            <strong>${escape(ruleCategory)}</strong>
          </div>
          <div class="rule-explanation-text">
            <span>Just as <strong>“${escape(t1)}”</strong> maps directly to <strong>“${escape(t2)}”</strong> via ${escape(ruleText.toLowerCase())}, identically <strong>“${escape(t3)}”</strong> maps to <strong>“${escape(t4)}”</strong>.</span>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 4. DIRECTION SENSE VISUALIZER (mod4) — 2D Cartesian SVG & Compass HUD
  // ===========================================================================
  function renderDirectionSense(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const compassDirs = [
      { name: "North", deg: 0 },
      { name: "North-East", deg: 45 },
      { name: "East", deg: 90 },
      { name: "South-East", deg: 135 },
      { name: "South", deg: 180 },
      { name: "South-West", deg: 225 },
      { name: "West", deg: 270 },
      { name: "North-West", deg: 315 }
    ];

    let matchedDirObj = compassDirs.find(d => correctAns.toLowerCase().includes(d.name.toLowerCase()));
    if (!matchedDirObj) {
      matchedDirObj = compassDirs.find(d => text.toLowerCase().includes(d.name.toLowerCase())) || compassDirs[4];
    }

    const moves = [];
    const moveRegex = /(\d+)\s*(?:km|m|meters|kilometres|miles|ft|feet)?\s*(?:towards|to the|in the)?\s*(north-east|north-west|south-east|south-west|north|south|east|west)/gi;
    let m;
    while ((m = moveRegex.exec(text)) !== null) {
      moves.push({ dist: parseInt(m[1], 10), dir: m[2].toLowerCase() });
    }

    let curX = 0, curY = 0;
    const waypoints = [{ x: 0, y: 0, label: "Start (0,0)" }];

    if (moves.length > 0) {
      moves.slice(0, 4).forEach((mv, idx) => {
        const d = mv.dist;
        if (mv.dir === "north") curY += d;
        else if (mv.dir === "south") curY -= d;
        else if (mv.dir === "east") curX += d;
        else if (mv.dir === "west") curX -= d;
        else if (mv.dir === "north-east") { curX += d * 0.7; curY += d * 0.7; }
        else if (mv.dir === "north-west") { curX += d * 0.7; curY += d * 0.7; }
        else if (mv.dir === "south-east") { curX += d * 0.7; curY += d * 0.7; }
        else if (mv.dir === "south-west") { curX += d * 0.7; curY += d * 0.7; }
        waypoints.push({ x: curX, y: curY, label: `Step ${idx + 1}` });
      });
    } else {
      waypoints.push({ x: 30, y: 0, label: "East 30m" });
      waypoints.push({ x: 30, y: -40, label: "South 40m" });
      curX = 30; curY = -40;
    }

    const minX = Math.min(...waypoints.map(p => p.x));
    const maxX = Math.max(...waypoints.map(p => p.x));
    const minY = Math.min(...waypoints.map(p => p.y));
    const maxY = Math.max(...waypoints.map(p => p.y));

    const spanX = Math.max(maxX - minX, 10);
    const spanY = Math.max(maxY - minY, 10);
    const scale = Math.min(220 / spanX, 120 / spanY);

    const svgWaypoints = waypoints.map(p => ({
      svgX: 180 + (p.x - (minX + maxX) / 2) * scale,
      svgY: 100 - (p.y - (minY + maxY) / 2) * scale
    }));

    const pathColors = ["#0284c7", "#f59e0b", "#10b981", "#8b5cf6"];

    return `
      <div class="sol-vis-container vis-direction-cartesian">
        <div class="vis-badge-header">
          <span class="vis-icon">🧭</span>
          <span class="vis-label">2D Cartesian Trajectory &amp; 8-Point Compass HUD</span>
          <span class="vis-module-tag">Spatial Direction</span>
        </div>

        <div class="direction-dual-stage">
          <div class="cartesian-grid-card">
            <div class="grid-card-header">
              <span class="g-title">2D Vector Displacement Grid</span>
              <span class="g-coords">Origin: (0, 0) ➔ End: (${Math.round(curX)}, ${Math.round(curY)})</span>
            </div>

            <svg class="cartesian-svg" viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cartGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(150, 150, 150, 0.12)" stroke-width="0.8"/>
                </pattern>
                <marker id="arrowHead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/>
                </marker>
              </defs>

              <rect width="360" height="200" fill="url(#cartGrid)" rx="8"/>

              <line x1="180" y1="10" x2="180" y2="190" stroke="rgba(150, 150, 150, 0.25)" stroke-width="1" stroke-dasharray="3,3"/>
              <line x1="20" y1="100" x2="340" y2="100" stroke="rgba(150, 150, 150, 0.25)" stroke-width="1" stroke-dasharray="3,3"/>
              <text x="185" y="22" font-size="10" font-weight="700" fill="var(--primary-blue, #2563eb)">+N</text>
              <text x="185" y="195" font-size="10" font-weight="700" fill="var(--ink-muted, #888)">−S</text>
              <text x="330" y="94" font-size="10" font-weight="700" fill="var(--ink-muted, #888)">+E</text>
              <text x="12" y="94" font-size="10" font-weight="700" fill="var(--ink-muted, #888)">−W</text>

              ${svgWaypoints.slice(1).map((pt, i) => {
                const prev = svgWaypoints[i];
                const color = pathColors[i % pathColors.length];
                return `
                  <line x1="${prev.svgX}" y1="${prev.svgY}" x2="${pt.svgX}" y2="${pt.svgY}"
                        stroke="${color}" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="${pt.svgX}" cy="${pt.svgY}" r="4" fill="${color}"/>
                `;
              }).join('')}

              ${svgWaypoints.length > 2 ? `
                <line x1="${svgWaypoints[0].svgX}" y1="${svgWaypoints[0].svgY}"
                      x2="${svgWaypoints[svgWaypoints.length - 1].svgX}" y2="${svgWaypoints[svgWaypoints.length - 1].svgY}"
                      stroke="#ec4899" stroke-width="2" stroke-dasharray="4,4"/>
              ` : ''}

              <circle cx="${svgWaypoints[0].svgX}" cy="${svgWaypoints[0].svgY}" r="6" fill="#10b981"/>
              <circle cx="${svgWaypoints[0].svgX}" cy="${svgWaypoints[0].svgY}" r="10" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.6"/>
              <text x="${svgWaypoints[0].svgX + 8}" y="${svgWaypoints[0].svgY - 6}" font-size="10" font-weight="800" fill="#047857">Start</text>

              <circle cx="${svgWaypoints[svgWaypoints.length - 1].svgX}" cy="${svgWaypoints[svgWaypoints.length - 1].svgY}" r="7" fill="#ef4444"/>
              <circle cx="${svgWaypoints[svgWaypoints.length - 1].svgX}" cy="${svgWaypoints[svgWaypoints.length - 1].svgY}" r="12" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.7"/>
              <text x="${svgWaypoints[svgWaypoints.length - 1].svgX + 9}" y="${svgWaypoints[svgWaypoints.length - 1].svgY + 14}" font-size="10.5" font-weight="850" fill="#b91c1c">Target</text>
            </svg>
          </div>

          <div class="compass-hud-card">
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
                <div class="needle-3d" style="transform: rotate(${matchedDirObj.deg}deg);"></div>
              </div>
            </div>

            <div class="compass-readout-pill">
              <span class="cr-label">Solved Bearing:</span>
              <strong class="cr-value">${escape(matchedDirObj.name)} (${matchedDirObj.deg}°)</strong>
            </div>
          </div>
        </div>

        <div class="direction-vector-ledger">
          <div class="ledger-item">
            <span class="li-tag">Horizontal Shift (ΔX):</span>
            <strong>${Math.round(curX)} units (East/West)</strong>
          </div>
          <div class="ledger-item">
            <span class="li-tag">Vertical Shift (ΔY):</span>
            <strong>${Math.round(curY)} units (North/South)</strong>
          </div>
          <div class="ledger-item item-result">
            <span class="li-tag">Pythagoras Formula:</span>
            <strong>d = √(Δx² + Δy²) ➔ ${escape(correctAns)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 5. NUMBER SYSTEM VISUALIZER (mod5) — Domino Chain, Factor Tree & Cascade
  // ===========================================================================
  function renderNumberSystem(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    if (/unit digit/i.test(q.question)) {
      const numbersInProduct = (q.question.match(/\b\d{2,}\b/g) || []).map(n => parseInt(n, 10));
      const unitDigits = numbersInProduct.map(n => n % 10);
      const isPower = /[\^³⁵⁷¹⁰¹²⁴⁶⁸⁹]/.test(q.question);

      if (isPower) {
        return `
          <div class="sol-vis-container vis-number-system">
            <div class="vis-badge-header">
              <span class="vis-icon">🔢</span>
              <span class="vis-label">Unit Digit Cyclicity Wheel &amp; Power Modular Reduction</span>
              <span class="vis-module-tag">Number System</span>
            </div>

            <div class="cyclicity-architecture-canvas">
              <div class="cyclicity-table-card">
                <div class="ct-header">Base Cyclicity Periods (Mod 4)</div>
                <div class="ct-grid">
                  <div class="ct-cell"><span class="ct-base">2, 3, 7, 8</span><span class="ct-cycle">Cycle = 4</span></div>
                  <div class="ct-cell"><span class="ct-base">4, 9</span><span class="ct-cycle">Cycle = 2</span></div>
                  <div class="ct-cell"><span class="ct-base">0, 1, 5, 6</span><span class="ct-cycle">Cycle = 1 (Fixed)</span></div>
                </div>
              </div>

              <div class="power-reduction-flow">
                <div class="pr-step-card">
                  <span class="pr-badge">Step 1</span>
                  <span class="pr-title">Power Modulo 4</span>
                  <span class="pr-desc">Divide each exponent by 4 and take remainder (if 0, take 4)</span>
                </div>
                <div class="pr-arrow">➔</div>
                <div class="pr-step-card">
                  <span class="pr-badge">Step 2</span>
                  <span class="pr-title">Evaluate Reduced Powers</span>
                  <span class="pr-desc">Calculate unit digit for each simplified base</span>
                </div>
                <div class="pr-arrow">➔</div>
                <div class="pr-step-card card-target-step">
                  <span class="pr-badge">Step 3</span>
                  <span class="pr-title">Final Product</span>
                  <strong class="pr-ans highlight-gold">Unit Digit = ${escape(correctAns)}</strong>
                </div>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="sol-vis-container vis-number-system">
          <div class="vis-badge-header">
            <span class="vis-icon">🔢</span>
            <span class="vis-label">Unit Digit Multiplication Domino Chain</span>
            <span class="vis-module-tag">Number System</span>
          </div>

          <div class="domino-chain-canvas">
            <div class="domino-extract-banner">
              <span>Extract Unit Digits:</span>
              <div class="domino-chips-group">
                ${numbersInProduct.slice(0, 5).map(n => `
                  <span class="domino-chip">${n} ➔ <strong>${n % 10}</strong></span>
                `).join('')}
              </div>
            </div>

            <div class="domino-steps-track">
              ${unitDigits.slice(0, 4).map((d, i) => `
                <div class="domino-block block-step">
                  <span class="db-num">Factor ${i + 1}</span>
                  <strong class="db-digit">${d}</strong>
                </div>
                ${i < Math.min(unitDigits.length - 1, 3) ? `<div class="domino-mult-sign">✕</div>` : ''}
              `).join('')}
              <div class="domino-mult-sign">➔</div>
              <div class="domino-block block-result">
                <span class="db-num">Result Unit Digit</span>
                <strong class="db-digit highlight-gold">${escape(correctAns)}</strong>
              </div>
            </div>

            <div class="domino-rule-note">
              <span>💡 <strong>Modular Invariant:</strong> Only multiply unit digits at each stage and discard the tens digit.</span>
            </div>
          </div>
        </div>
      `;
    }

    if (/zeros/i.test(q.question)) {
      return `
        <div class="sol-vis-container vis-number-system">
          <div class="vis-badge-header">
            <span class="vis-icon">⚡</span>
            <span class="vis-label">Legendre’s Prime Factor-5 Cascade (Trailing Zeros)</span>
            <span class="vis-module-tag">Number System</span>
          </div>

          <div class="legendre-cascade-canvas">
            <div class="cascade-formula-pill">
              <span>Number of Zeros in N! = <strong>⌊N/5¹⌋ + ⌊N/5²⌋ + ⌊N/5³⌋ + ...</strong></span>
              <small>(Pairs of 2 × 5 produce 10. Factors of 5 are the limiting component)</small>
            </div>

            <div class="cascade-waterfall-bars">
              <div class="cascade-bar tier-1">
                <span class="cb-label">⌊N / 5¹⌋ Multiples of 5</span>
                <div class="cb-meter"><span style="width: 75%;"></span></div>
                <span class="cb-val">Primary Factors</span>
              </div>
              <div class="cascade-bar tier-2">
                <span class="cb-label">⌊N / 5²⌋ Multiples of 25</span>
                <div class="cb-meter"><span style="width: 35%;"></span></div>
                <span class="cb-val">Extra Factors</span>
              </div>
              <div class="cascade-bar tier-3">
                <span class="cb-label">⌊N / 5³⌋ Multiples of 125</span>
                <div class="cb-meter"><span style="width: 10%;"></span></div>
                <span class="cb-val">High Power Factors</span>
              </div>
            </div>

            <div class="cascade-summation-banner">
              <span class="cs-label">Total Trailing Zeros =</span>
              <strong class="cs-value highlight-gold">${escape(correctAns)} Zeros</strong>
            </div>
          </div>
        </div>
      `;
    }

    if (/factors/i.test(q.question)) {
      const isSum = /sum of (?:the )?factors/i.test(q.question);
      const isProduct = /product of (?:the )?factors/i.test(q.question);
      const isPrimeFactors = /prime factors/i.test(q.question);

      return `
        <div class="sol-vis-container vis-number-system">
          <div class="vis-badge-header">
            <span class="vis-icon">📐</span>
            <span class="vis-label">Prime Factorization Decomposition &amp; Factor Architecture</span>
            <span class="vis-module-tag">Number System</span>
          </div>

          <div class="factor-architecture-canvas">
            <div class="fa-decomp-card">
              <span class="fa-tag">Canonical Prime Factorization</span>
              <div class="fa-formula">N = p₁ᵃ · p₂ᵇ · p₃ᶜ</div>
              <span class="fa-sub">Break the number into prime bases with integer powers</span>
            </div>

            <div class="fa-formula-cards-row">
              <div class="fa-card ${!isSum && !isProduct && !isPrimeFactors ? 'card-active' : ''}">
                <span class="fac-title">Total Factors</span>
                <span class="fac-formula">(a + 1)(b + 1)(c + 1)</span>
                ${!isSum && !isProduct && !isPrimeFactors ? `<strong class="fac-res highlight-gold">Total = ${escape(correctAns)}</strong>` : ''}
              </div>

              <div class="fa-card ${isSum ? 'card-active' : ''}">
                <span class="fac-title">Sum of Factors</span>
                <span class="fac-formula">(p₁ᵃ⁺¹ − 1)/(p₁ − 1) · ...</span>
                ${isSum ? `<strong class="fac-res highlight-gold">Sum = ${escape(correctAns)}</strong>` : ''}
              </div>

              <div class="fa-card ${isPrimeFactors ? 'card-active' : ''}">
                <span class="fac-title">Prime Factors</span>
                <span class="fac-formula">Sum of Exponents (a + b + c)</span>
                ${isPrimeFactors ? `<strong class="fac-res highlight-gold">Count = ${escape(correctAns)}</strong>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="sol-vis-container vis-number-system">
        <div class="vis-badge-header">
          <span class="vis-icon">💡</span>
          <span class="vis-label">Algebraic Divisibility &amp; Modular Property Schematic</span>
          <span class="vis-module-tag">Number System</span>
        </div>

        <div class="divisibility-schematic-card">
          <div class="ds-flow-row">
            <div class="ds-node node-expr">
              <span class="ds-sub">Given Expression</span>
              <strong class="ds-val">${escape(q.question.substring(0, 45))}...</strong>
            </div>
            <div class="ds-arrow">➔</div>
            <div class="ds-node node-factor">
              <span class="ds-sub">Common Factor Extraction</span>
              <span class="ds-val">Group powers &amp; factor out lowest exponent</span>
            </div>
            <div class="ds-arrow">➔</div>
            <div class="ds-node node-result">
              <span class="ds-sub">Divisibility Answer</span>
              <strong class="ds-val highlight-gold">${escape(correctAns)}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 6. H.C.F. & L.C.M. VISUALIZER (mod6) — Prime Factorization, Sync & Remainder
  // ===========================================================================
  function renderHcfLcm(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const isLcm = /l\.?c\.?m|traffic light|circular stadium|smallest number|least number|divisible by/i.test(q.question);
    const isFractions = /(\d+\/\d+)/.test(q.question);
    const isPeriodic = /traffic light|circular stadium|signals|simultaneously|bells/i.test(q.question);
    const hasRemainder = /remainder|leaves/i.test(q.question);

    // Sub-type A: Fractions HCF / LCM
    if (isFractions) {
      return `
        <div class="sol-vis-container vis-hcf-lcm">
          <div class="vis-badge-header">
            <span class="vis-icon">➗</span>
            <span class="vis-label">Fractional Divisibility Dual-Deck Architecture</span>
            <span class="vis-module-tag">H.C.F. &amp; L.C.M.</span>
          </div>

          <div class="fraction-rule-grid">
            <div class="fraction-formula-card ${!isLcm ? 'f-active' : ''}">
              <div class="ff-title">H.C.F. of Fractions</div>
              <div class="ff-fraction">
                <span class="ff-num">H.C.F. of Numerators</span>
                <span class="ff-bar"></span>
                <span class="ff-den">L.C.M. of Denominators</span>
              </div>
              ${!isLcm ? `<div class="ff-result highlight-gold">H.C.F. = <strong>${escape(correctAns)}</strong></div>` : ''}
            </div>

            <div class="fraction-formula-card ${isLcm ? 'f-active' : ''}">
              <div class="ff-title">L.C.M. of Fractions</div>
              <div class="ff-fraction">
                <span class="ff-num">L.C.M. of Numerators</span>
                <span class="ff-bar"></span>
                <span class="ff-den">H.C.F. of Denominators</span>
              </div>
              ${isLcm ? `<div class="ff-result highlight-gold">L.C.M. = <strong>${escape(correctAns)}</strong></div>` : ''}
            </div>
          </div>

          <div class="hcf-lcm-theorem-bar">
            <span>💡 <strong>Fraction Rule:</strong> To find H.C.F., take H.C.F. of top &amp; L.C.M. of bottom. To find L.C.M., take L.C.M. of top &amp; H.C.F. of bottom.</span>
          </div>
        </div>
      `;
    }

    // Sub-type B: Periodic Cycle Synchronization (Traffic Lights, Circular Races)
    if (isPeriodic) {
      return `
        <div class="sol-vis-container vis-hcf-lcm">
          <div class="vis-badge-header">
            <span class="vis-icon">🔄</span>
            <span class="vis-label">Periodic Cycle Coincidence &amp; Synchronization</span>
            <span class="vis-module-tag">L.C.M. Interval</span>
          </div>

          <div class="sync-timeline-canvas">
            <div class="sync-banner">
              <span class="sb-tag">Coincidence Condition:</span>
              <strong class="sb-val">T_sync = L.C.M.(Interval 1, Interval 2, Interval 3 ...)</strong>
            </div>

            <div class="sync-cycles-row">
              <div class="cycle-track track-1">
                <span class="ct-label">Cycle A</span>
                <div class="ct-pulses"><span class="pulse-dot"></span><span class="pulse-dot"></span><span class="pulse-dot active-sync"></span></div>
              </div>
              <div class="cycle-track track-2">
                <span class="ct-label">Cycle B</span>
                <div class="ct-pulses"><span class="pulse-dot"></span><span class="pulse-dot active-sync"></span></div>
              </div>
              <div class="cycle-track track-3">
                <span class="ct-label">Cycle C</span>
                <div class="ct-pulses"><span class="pulse-dot active-sync"></span></div>
              </div>
            </div>

            <div class="sync-beacon-result">
              <span class="sbr-icon">🔔</span>
              <div class="sbr-text">
                <span class="sbr-sub">Simultaneous Coincidence Occurs At:</span>
                <strong class="sbr-time highlight-gold">${escape(correctAns)}</strong>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type C: Remainder Models (L.C.M. with remainder, or greatest divisor with same remainder)
    if (hasRemainder) {
      return `
        <div class="sol-vis-container vis-hcf-lcm">
          <div class="vis-badge-header">
            <span class="vis-icon">📐</span>
            <span class="vis-label">Modular Remainder Invariant &amp; Extremal Divisor</span>
            <span class="vis-module-tag">H.C.F. &amp; L.C.M.</span>
          </div>

          <div class="remainder-arch-canvas">
            <div class="ra-formula-banner">
              <div class="ra-model-col">
                <span class="ram-title">Smallest Divisible with Remainder</span>
                <span class="ram-eq">N = L.C.M.(d₁, d₂, ...) × k + R</span>
              </div>
              <div class="ra-divider">OR</div>
              <div class="ra-model-col">
                <span class="ram-title">Greatest Common Divisor</span>
                <span class="ram-eq">Divisor = H.C.F.(Diff(A, B), Diff(B, C))</span>
              </div>
            </div>

            <div class="ra-solution-card">
              <span class="ra-sub">Evaluated Extremum:</span>
              <strong class="ra-ans highlight-gold">${escape(correctAns)}</strong>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type D: Standard Prime Factorization Set Theory (Euler Intersection vs Union)
    return `
      <div class="sol-vis-container vis-hcf-lcm">
        <div class="vis-badge-header">
          <span class="vis-icon">📐</span>
          <span class="vis-label">Prime Factorization Decomposition &amp; Set Theory</span>
          <span class="vis-module-tag">H.C.F. &amp; L.C.M.</span>
        </div>

        <div class="hcf-lcm-euler-grid">
          <!-- Left: HCF Intersection -->
          <div class="euler-card card-hcf ${!isLcm ? 'card-active' : ''}">
            <div class="ec-header">
              <span class="ec-icon">∩</span>
              <strong class="ec-title">H.C.F. (Highest Common Factor)</strong>
            </div>
            <span class="ec-desc">Intersection of Common Prime Factors taken with <strong>Lowest Exponents</strong></span>
            ${!isLcm ? `<div class="ec-winner highlight-gold">H.C.F. = <strong>${escape(correctAns)}</strong></div>` : ''}
          </div>

          <!-- Right: LCM Union -->
          <div class="euler-card card-lcm ${isLcm ? 'card-active' : ''}">
            <div class="ec-header">
              <span class="ec-icon">∪</span>
              <strong class="ec-title">L.C.M. (Lowest Common Multiple)</strong>
            </div>
            <span class="ec-desc">Union of All Prime Factors taken with <strong>Highest Exponents Multiplied</strong></span>
            ${isLcm ? `<div class="ec-winner highlight-gold">L.C.M. = <strong>${escape(correctAns)}</strong></div>` : ''}
          </div>
        </div>

        <div class="hcf-lcm-theorem-bar">
          <span>⚡ <strong>Fundamental Identity:</strong> Product of Two Numbers (A × B) = <strong>H.C.F.(A, B) × L.C.M.(A, B)</strong></span>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 7. AVERAGE VISUALIZER (mod7) — Arithmetic Mean Seesaw / Balance Beam SVG
  // ===========================================================================
  function renderAverage(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const isInclusion = /included|joins|replaced|teacher|increases by|decreases by|left/i.test(q.question);
    const isUniform = /subtracted from each|multiplied by|divided by|added to each/i.test(q.question);

    // Sub-type A: Inclusion / Exclusion / Replacement Delta Model
    if (isInclusion) {
      return `
        <div class="sol-vis-container vis-average-seesaw">
          <div class="vis-badge-header">
            <span class="vis-icon">⚖️</span>
            <span class="vis-label">Dynamic Average Surplus &amp; Deficit Shift</span>
            <span class="vis-module-tag">Inclusion / Replacement</span>
          </div>

          <div class="avg-delta-canvas">
            <div class="delta-formula-card">
              <span class="df-tag">Net Displacement Identity</span>
              <div class="df-equation">
                <span class="df-term">New Member Value</span>
                <span class="df-eq">=</span>
                <span class="df-term term-base">Initial Base Average</span>
                <span class="df-pm">±</span>
                <span class="df-term term-surplus">(N_new × ΔAverage)</span>
              </div>
            </div>

            <div class="delta-distribution-steps">
              <div class="dist-step step-base">
                <span class="ds-sub">1. Base Level</span>
                <strong class="ds-val">Group Equilibrium</strong>
              </div>
              <div class="dist-arrow">➔</div>
              <div class="dist-step step-shift">
                <span class="ds-sub">2. Net Surplus / Deficit</span>
                <strong class="ds-val">Distributed across all members</strong>
              </div>
              <div class="dist-arrow">➔</div>
              <div class="dist-step step-winner">
                <span class="ds-sub">3. Resolved Value</span>
                <strong class="ds-val highlight-gold">${escape(correctAns)}</strong>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type B: Uniform Operation Invariant (if each multiplied/divided/subtracted)
    if (isUniform) {
      return `
        <div class="sol-vis-container vis-average-seesaw">
          <div class="vis-badge-header">
            <span class="vis-icon">⚖️</span>
            <span class="vis-label">Homogeneous Linear Transformation Invariant</span>
            <span class="vis-module-tag">Average Property</span>
          </div>

          <div class="avg-invariant-canvas">
            <div class="ai-banner">
              <span>If every item x_i undergoes the operation <strong>f(x)</strong>, the Arithmetic Mean undergoes the <strong>identical transformation</strong>:</span>
            </div>

            <div class="ai-transform-row">
              <div class="ai-node node-before">
                <span class="ai-sub">Original Mean</span>
                <strong class="ai-val">X̄_old</strong>
              </div>
              <div class="ai-arrow">➔ [ Apply Operation to Mean ] ➔</div>
              <div class="ai-node node-after">
                <span class="ai-sub">Updated Mean</span>
                <strong class="ai-val highlight-gold">${escape(correctAns)}</strong>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type C: General Arithmetic Mean Balance Beam / Seesaw (SVG)
    return `
      <div class="sol-vis-container vis-average-seesaw">
        <div class="vis-badge-header">
          <span class="vis-icon">⚖️</span>
          <span class="vis-label">Arithmetic Mean Seesaw &amp; Equilibrium Center</span>
          <span class="vis-module-tag">Average</span>
        </div>

        <div class="seesaw-svg-wrapper">
          <svg class="seesaw-svg" viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="50%" stop-color="#6366f1"/>
                <stop offset="100%" stop-color="#10b981"/>
              </linearGradient>
            </defs>

            <!-- Ground Base Line -->
            <line x1="20" y1="125" x2="360" y2="125" stroke="rgba(150, 150, 150, 0.3)" stroke-width="2"/>

            <!-- Center Fulcrum Triangle (Center of Gravity) -->
            <polygon points="190,65 175,125 205,125" fill="#2563eb"/>
            <circle cx="190" cy="65" r="4" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>

            <!-- The Balance Beam (Horizontal Equilibrium) -->
            <rect x="40" y="60" width="300" height="10" rx="5" fill="url(#beamGrad)"/>

            <!-- Left Weight (Negative Deviations) -->
            <rect x="65" y="32" width="46" height="28" rx="6" fill="#3b82f6"/>
            <text x="88" y="50" font-size="10" font-weight="850" fill="#ffffff" text-anchor="middle">−ΣΔx</text>

            <!-- Right Weight (Positive Deviations) -->
            <rect x="269" y="32" width="46" height="28" rx="6" fill="#10b981"/>
            <text x="292" y="50" font-size="10" font-weight="850" fill="#ffffff" text-anchor="middle">+ΣΔx</text>

            <!-- Center Mean Badge -->
            <rect x="150" y="10" width="80" height="24" rx="12" fill="#047857"/>
            <text x="190" y="26" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">μ (Mean)</text>
          </svg>
        </div>

        <div class="seesaw-equilibrium-banner">
          <div class="seq-side">
            <span class="seq-label">Equilibrium Invariant:</span>
            <strong>Σ (x_i − μ) = 0 (Total Net Deviation is Zero)</strong>
          </div>
          <div class="seq-side seq-right">
            <span class="seq-label">Resolved Average / Target:</span>
            <strong class="seq-ans highlight-gold">${escape(correctAns)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 8. REMAINDER THEOREM VISUALIZER (mod8) — Euclidean Bar & Modular Shift
  // ===========================================================================
  function renderRemainderTheorem(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const divMatch = q.question.match(/(-?\d+)\s*[\/÷]\s*(\d+)/);
    const powerMatch = q.question.match(/(\d+)\s*[\^⁶⁷⁸⁹¹²³⁴⁵⁰\d]+\s*[\/÷]\s*(\d+)/);

    let dividend = divMatch ? divMatch[1] : (powerMatch ? powerMatch[1] : "N");
    let divisor = divMatch ? divMatch[2] : (powerMatch ? powerMatch[2] : "D");
    let remainder = correctAns;

    const isNegative = /-?\d+/.test(dividend) && parseInt(dividend, 10) < 0;
    const isMultiProduct = /\(\s*\d+\s*[×*]\s*\d+/.test(q.question);
    const isFactorial = /1!\s*\+\s*2!/.test(q.question);

    // Sub-type A: Negative Remainder Shift
    if (isNegative) {
      return `
        <div class="sol-vis-container vis-remainder-scale">
          <div class="vis-badge-header">
            <span class="vis-icon">⚡</span>
            <span class="vis-label">Negative Modular Rebound &amp; Positive Conversion</span>
            <span class="vis-module-tag">Remainder Theorem</span>
          </div>

          <div class="negative-rebound-canvas">
            <div class="rebound-number-line">
              <div class="rnl-step step-negative">
                <span class="rnl-label">Negative Remainder (Deficit)</span>
                <strong class="rnl-val">${dividend} mod ${divisor}</strong>
              </div>
              <div class="rnl-arrow">➔ [ + Divisor Rebound ] ➔</div>
              <div class="rnl-step step-positive">
                <span class="rnl-label">True Positive Remainder</span>
                <strong class="rnl-val highlight-gold">${escape(remainder)}</strong>
              </div>
            </div>

            <div class="vis-callout-note">
              <span class="note-icon">➖</span>
              <span><strong>Shift Law:</strong> In modular arithmetic, Remainder cannot be negative. If raw calculation yields −r, positive remainder is <strong>Divisor − |r| = ${divisor} − |r| = ${escape(remainder)}</strong>.</span>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type B: Multi-Factor Product Remainder
    if (isMultiProduct) {
      return `
        <div class="sol-vis-container vis-remainder-scale">
          <div class="vis-badge-header">
            <span class="vis-icon">⚡</span>
            <span class="vis-label">Modular Product Invariant &amp; Factor Reduction</span>
            <span class="vis-module-tag">Multi-Factor Remainder</span>
          </div>

          <div class="multi-factor-canvas">
            <div class="mf-banner">
              <span>(a × b × c) mod m = <strong>[(a mod m) × (b mod m) × (c mod m)] mod m</strong></span>
            </div>

            <div class="mf-steps-flow">
              <div class="mf-step">
                <span class="mf-sub">1. Individual Remainders</span>
                <span class="mf-val">Reduce each factor mod ${divisor}</span>
              </div>
              <div class="mf-arrow">➔</div>
              <div class="mf-step">
                <span class="mf-sub">2. Multiply Reduced Terms</span>
                <span class="mf-val">r₁ × r₂ × r₃</span>
              </div>
              <div class="mf-arrow">➔</div>
              <div class="mf-step step-winner">
                <span class="mf-sub">3. Final Remainder</span>
                <strong class="mf-val highlight-gold">${escape(remainder)}</strong>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type C: Factorial Series
    if (isFactorial) {
      return `
        <div class="sol-vis-container vis-remainder-scale">
          <div class="vis-badge-header">
            <span class="vis-icon">⚡</span>
            <span class="vis-label">Factorial Modulo Absorption &amp; Threshold Cutoff</span>
            <span class="vis-module-tag">Factorial Series</span>
          </div>

          <div class="factorial-cutoff-canvas">
            <div class="fc-banner">
              <span>For n ≥ k, n! contains ${divisor} as a factor, so <strong>n! ≡ 0 (mod ${divisor})</strong>!</span>
            </div>

            <div class="fc-track">
              <div class="fc-block block-active">
                <span class="fcb-tag">Active Head Terms</span>
                <span class="fcb-terms">1! + 2! + 3! + 4!</span>
              </div>
              <div class="fc-cutoff-line">
                <span class="cutoff-badge">⛔ Cutoff Threshold</span>
              </div>
              <div class="fc-block block-zero">
                <span class="fcb-tag">Vanishing Tail Terms</span>
                <span class="fcb-terms">5! + 6! + ... ≡ 0 mod ${divisor}</span>
              </div>
            </div>

            <div class="fc-result-card">
              <span class="fcr-sub">Evaluated Remainder of Head Sum:</span>
              <strong class="fcr-val highlight-gold">${escape(remainder)}</strong>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type D: Standard Euclidean Division Multi-Segment Bar
    return `
      <div class="sol-vis-container vis-remainder-scale">
        <div class="vis-badge-header">
          <span class="vis-icon">⚡</span>
          <span class="vis-label">Euclidean Division &amp; Modular Reduction Architecture</span>
          <span class="vis-module-tag">Remainder Theorem</span>
        </div>

        <div class="division-formula-card">
          <div class="formula-badge">
            <span class="f-part f-dividend">Dividend (<strong>${dividend}</strong>)</span>
            <span class="f-eq">=</span>
            <span class="f-part f-divisor">Divisor (<strong>${divisor}</strong>) × Quotient (Q)</span>
            <span class="f-eq">+</span>
            <span class="f-part f-remainder">Remainder (<strong>${escape(remainder)}</strong>)</span>
          </div>

          <div class="division-visual-bar">
            <div class="bar-segment bar-multiple"><span>Divisible Component (Divisor × Q)</span></div>
            <div class="bar-segment bar-rem"><span>Rem: ${escape(remainder)}</span></div>
          </div>
        </div>

        <div class="vis-callout-note">
          <span class="note-icon">💡</span>
          <span><strong>Division Algorithm Invariant:</strong> 0 ≤ Remainder &lt; Divisor (${divisor}).</span>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 9. RATIO & PROPORTION VISUALIZER (mod9, mod11) — Segmented Bar & Scale
  // ===========================================================================
  function renderRatioProportion(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const isProportional = /fourth proportional|third proportional|mean proportional/i.test(q.question);
    const isContinued = /A\s*:\s*B.+B\s*:\s*C/i.test(q.question);

    // Sub-type A: Fourth / Third / Mean Proportional Scale
    if (isProportional) {
      return `
        <div class="sol-vis-container vis-ratio-bar">
          <div class="vis-badge-header">
            <span class="vis-icon">⚖️</span>
            <span class="vis-label">Extremes &amp; Means Proportionality Balance</span>
            <span class="vis-module-tag">Proportion Rule</span>
          </div>

          <div class="prop-balance-canvas">
            <div class="prop-scale-card">
              <span class="psc-title">Product of Extremes = Product of Means</span>
              <div class="psc-eq">
                <span class="psc-box box-extreme">a (1st)</span>
                <span class="psc-dot">×</span>
                <span class="psc-box box-extreme">d (4th)</span>
                <span class="psc-eq-sign">=</span>
                <span class="psc-box box-mean">b (2nd)</span>
                <span class="psc-dot">×</span>
                <span class="psc-box box-mean">c (3rd)</span>
              </div>
            </div>

            <div class="prop-res-banner">
              <span class="prb-label">Calculated Proportional Term:</span>
              <strong class="prb-val highlight-gold">${escape(correctAns)}</strong>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type B: Continued / Compound Ratio Linking
    if (isContinued) {
      return `
        <div class="sol-vis-container vis-ratio-bar">
          <div class="vis-badge-header">
            <span class="vis-icon">🔗</span>
            <span class="vis-label">Continued Ratio Pivot Linking Architecture</span>
            <span class="vis-module-tag">Compound Ratio</span>
          </div>

          <div class="ratio-link-canvas">
            <div class="rl-bridge-row">
              <div class="rl-node node-a">Ratio 1 (A : B)</div>
              <div class="rl-pivot">⇄ Shared Pivot (B) ⇄</div>
              <div class="rl-node node-b">Ratio 2 (B : C)</div>
            </div>

            <div class="rl-step-note">
              <span>Scale both ratios by the L.C.M. of the shared pivot term to link seamlessly into a single continuous chain.</span>
            </div>

            <div class="rl-result-card">
              <span class="rlr-sub">Linked Unified Ratio (A : B : C : D):</span>
              <strong class="rlr-val highlight-gold">${escape(correctAns)}</strong>
            </div>
          </div>
        </div>
      `;
    }

    // Sub-type C: Segmented Proportional Share Bar
    return `
      <div class="sol-vis-container vis-ratio-bar">
        <div class="vis-badge-header">
          <span class="vis-icon">⚖️</span>
          <span class="vis-label">Proportional Partition &amp; Share Distribution Bar</span>
          <span class="vis-module-tag">Ratio &amp; Proportion</span>
        </div>

        <div class="proportion-balance-card">
          <div class="ratio-bar-segmented">
            <div class="r-seg seg-1" style="flex: 3;"><span>Part 1 (3x)</span></div>
            <div class="r-seg seg-2" style="flex: 4;"><span>Part 2 (4x)</span></div>
            <div class="r-seg seg-3" style="flex: 5;"><span>Part 3 (5x)</span></div>
          </div>

          <div class="ratio-eq-banner">
            <div class="reb-col">
              <span class="reb-tag">Share Calculation Law:</span>
              <span class="reb-formula">Share = (Individual Ratio / Sum of Ratios) × Total</span>
            </div>
            <div class="reb-col reb-right">
              <span class="reb-tag">Resolved Answer:</span>
              <strong class="ratio-res-pill highlight-gold">${escape(correctAns)}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 10. AGES TIMELINE VISUALIZER (mod10) — 3-Epoch Chronological Milestone Track
  // ===========================================================================
  function renderAgesTimeline(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    const agoMatch = q.question.match(/(\d+)\s+years?\s+(?:ago|earlier)/i);
    const agoYears = agoMatch ? agoMatch[1] : "5";

    const henceMatch = q.question.match(/(?:after|in)\s+(\d+)\s+years|(\d+)\s+years?\s+hence/i);
    const henceYears = henceMatch ? (henceMatch[1] || henceMatch[2]) : "10";

    return `
      <div class="sol-vis-container vis-ages-timeline">
        <div class="vis-badge-header">
          <span class="vis-icon">⏳</span>
          <span class="vis-label">3-Epoch Chronological Age Milestone Horizon</span>
          <span class="vis-module-tag">Ages</span>
        </div>

        <div class="ages-track-wrapper">
          <div class="ages-period-card card-past">
            <span class="period-tag">⏪ Past (−${agoYears} Yrs)</span>
            <div class="period-equation">Past Equation</div>
            <span class="period-sub">Shift: (Age − ${agoYears})</span>
          </div>

          <div class="ages-track-arrow">➔</div>

          <div class="ages-period-card card-present">
            <span class="period-tag">⏳ Present (Now: t = 0)</span>
            <div class="period-equation">Current Age Relation</div>
            <span class="period-sub">Base Unknowns (F, S)</span>
          </div>

          <div class="ages-track-arrow">➔</div>

          <div class="ages-period-card card-future">
            <span class="period-tag">⏩ Future (+${henceYears} Yrs)</span>
            <div class="period-equation">Future Equation</div>
            <span class="period-sub">Shift: (Age + ${henceYears})</span>
          </div>
        </div>

        <div class="ages-invariant-shield">
          <div class="ais-icon">🛡️</div>
          <div class="ais-text">
            <strong>Universal Invariant Law of Ages:</strong>
            <span>The difference in age between two individuals <em>never</em> changes across time.</span>
          </div>
        </div>

        <div class="ages-result-banner">
          <span class="arb-label">Target Person Age Resolved:</span>
          <strong class="arb-val highlight-gold">${escape(correctAns)}</strong>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 11. PARTNERSHIP VISUALIZER (mod11) — Compound Investment & Profit Split
  // ===========================================================================
  function renderPartnership(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    // Parse partner names
    const partnerCandidates = ["A", "B", "C", "Kishan", "Nandan", "Manoj", "Ramesh"];
    const foundPartners = [];
    partnerCandidates.forEach(name => {
      if (new RegExp(`\\b${name}\\b`, 'i').test(text)) {
        foundPartners.push(name);
      }
    });
    const partnersList = foundPartners.length >= 2 ? foundPartners : ["Partner A", "Partner B", "Partner C"];

    // Try extracting explicit ratio from text
    let ratioStr = "";
    const ratioM = text.match(/ratio\s+(?:A\s*:\s*B(?:\s*:\s*C)?\s*=\s*)?([0-9]+(?:\/[0-9]+)?\s*:\s*[0-9]+(?:\/[0-9]+)?(?:\s*:\s*[0-9]+(?:\/[0-9]+)?)?)/i) ||
                   text.match(/([0-9]+\s*:\s*[0-9]+(?:\s*:\s*[0-9]+)?)/);
    if (ratioM) ratioStr = ratioM[1].replace(/\s+/g, '');

    // Extract Total Profit if mentioned
    let totalProfit = "";
    const profitM = text.match(/profit\s+(?:of\s+)?(?:is\s+)?(?:Rs\.?|₹)?\s*([0-9,]+)/i);
    if (profitM) totalProfit = "₹" + profitM[1];

    // Colors & gradients for partners
    const partnerThemes = [
      { color: "#3b82f6", bg: "rgba(59, 130, 246, 0.12)", border: "#3b82f6" },
      { color: "#10b981", bg: "rgba(16, 185, 129, 0.12)", border: "#10b981" },
      { color: "#8b5cf6", bg: "rgba(139, 92, 246, 0.12)", border: "#8b5cf6" },
      { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.12)", border: "#f59e0b" }
    ];

    // Partner cards HTML
    let partnerCardsHtml = "";
    let barSegmentsHtml = "";
    const ratioParts = ratioStr.split(':').map(p => parseFloat(p) || 1);
    const sumParts = ratioParts.reduce((a, b) => a + b, 0) || partnersList.length;

    partnersList.forEach((name, i) => {
      const theme = partnerThemes[i % partnerThemes.length];
      const partVal = ratioParts[i] || (i + 1);
      const sharePct = Math.max(15, Math.min(70, Math.round((partVal / sumParts) * 100)));

      // Search for specific capital & time in explanation or question
      let capStr = "";
      let timeStr = "";
      const capMatch = text.match(new RegExp(`${name}[^.]*?(?:contributes|invests|puts|advances|started with|capital of|sum of|invested)\\s+(?:Rs\\.?|₹)?\\s*([0-9,]+(?:\\/[0-9]+)?)`, 'i'));
      if (capMatch) capStr = capMatch[1];

      const timeMatch = text.match(new RegExp(`${name}[^.]*?(?:for|after|period of)\\s+([0-9]+(?:\\/[0-9]+)?)\\s*months?`, 'i'));
      if (timeMatch) timeStr = timeMatch[1] + " mo";

      partnerCardsHtml += `
        <div class="part-card" style="border-top-color: ${theme.border};">
          <div class="part-card-head">
            <span class="part-avatar" style="background: ${theme.color};">${escape(name.charAt(0))}</span>
            <span class="part-name">${escape(name)}</span>
            <span class="part-share-pill" style="background: ${theme.bg}; color: ${theme.color};">${sharePct}% Share</span>
          </div>
          <div class="part-card-stats">
            <div class="part-stat-item">
              <span class="psi-lbl">Capital (C)</span>
              <strong class="psi-val">${capStr ? '₹' + escape(capStr) : 'Proportional'}</strong>
            </div>
            <div class="part-stat-item">
              <span class="psi-lbl">Duration (T)</span>
              <strong class="psi-val">${timeStr ? escape(timeStr) : 'Active Term'}</strong>
            </div>
            <div class="part-stat-item highlight-product">
              <span class="psi-lbl">Equivalent (C × T)</span>
              <strong class="psi-val" style="color: ${theme.color};">${partVal} Units</strong>
            </div>
          </div>
        </div>
      `;

      barSegmentsHtml += `
        <div class="part-bar-segment" style="width: ${sharePct}%; background: ${theme.color};" title="${escape(name)}: ${sharePct}% (${partVal} parts)">
          <span>${escape(name)} (${sharePct}%)</span>
        </div>
      `;
    });

    return `
      <div class="sol-vis-container vis-partnership">
        <div class="vis-badge-header">
          <span class="vis-icon">💼</span>
          <span class="vis-label">Capital × Duration Equivalent &amp; Profit Allocation</span>
          <span class="vis-module-tag">Partnership Logic</span>
        </div>

        <div class="part-formula-hud">
          <div class="pfh-item">
            <span class="pfh-rule">Universal Invariant:</span>
            <code class="pfh-code">Profit Share ∝ Capital (C) × Time (T)</code>
          </div>
          ${ratioStr ? `<div class="pfh-item"><span class="pfh-rule">Profit Ratio:</span> <strong>${escape(ratioStr)}</strong></div>` : ''}
          ${totalProfit ? `<div class="pfh-item"><span class="pfh-rule">Total Pool:</span> <strong>${escape(totalProfit)}</strong></div>` : ''}
        </div>

        <div class="part-cards-grid">
          ${partnerCardsHtml}
        </div>

        <div class="part-allocation-section">
          <div class="pas-title">Proportional Profit Partitioning Bar:</div>
          <div class="part-share-bar">
            ${barSegmentsHtml}
          </div>
        </div>

        <div class="part-result-banner">
          <span class="prb-label">Resolved Distribution / Target Value:</span>
          <strong class="prb-val highlight-gold">${escape(correctAns)}</strong>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 12. ALLEGATION & MIXTURE VISUALIZER (mod12 & Mixture Questions)
  // ===========================================================================
  function renderAlligation(q) {
    const text = cleanQuotes(q.question + " " + (q.explanation || ""));
    const correctAns = q.correct || "";

    // Extract numbers: look for prices or percentages
    const nums = (text.match(/([0-9]+(?:\.[0-9]+)?)/g) || []).map(Number);
    let cheaper = nums[0] || 12;
    let dearer = nums[1] || 20;
    if (cheaper > dearer) {
      const temp = cheaper;
      cheaper = dearer;
      dearer = temp;
    }
    let mean = nums[2] || Math.round((cheaper * 0.4 + dearer * 0.6) * 10) / 10;
    if (mean <= cheaper || mean >= dearer) {
      mean = Math.round((cheaper + (dearer - cheaper) * 0.625) * 10) / 10;
    }

    const diffCheaper = Math.round(Math.abs(dearer - mean) * 10) / 10; // (d - m)
    const diffDearer = Math.round(Math.abs(mean - cheaper) * 10) / 10;  // (m - c)

    return `
      <div class="sol-vis-container vis-alligation">
        <div class="vis-badge-header">
          <span class="vis-icon">⚖️</span>
          <span class="vis-label">Rule of Alligation Cross &amp; Mean Concentration Balance</span>
          <span class="vis-module-tag">Alligation &amp; Mixture</span>
        </div>

        <div class="alligation-cross-wrapper">
          <svg class="alligation-svg" viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="var(--primary-blue, #2563eb)"/>
              </marker>
              <linearGradient id="gradCheaper" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.28"/>
                <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.16"/>
              </linearGradient>
              <linearGradient id="gradDearer" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.28"/>
                <stop offset="100%" stop-color="#d97706" stop-opacity="0.16"/>
              </linearGradient>
              <linearGradient id="gradMean" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#059669" stop-opacity="0.22"/>
              </linearGradient>
            </defs>

            <!-- Crossing Diagonal Lines -->
            <line x1="120" y1="55" x2="340" y2="165" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrowHead)"/>
            <line x1="340" y1="55" x2="120" y2="165" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrowHead)"/>

            <!-- Top Left: Cheaper Unit Value -->
            <rect x="30" y="20" width="130" height="50" rx="8" fill="url(#gradCheaper)" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="95" y="40" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink-secondary)">CHEAPER RATE (c)</text>
            <text x="95" y="58" text-anchor="middle" font-size="14" font-weight="900" fill="#2563eb">${cheaper}</text>

            <!-- Top Right: Dearer Unit Value -->
            <rect x="300" y="20" width="130" height="50" rx="8" fill="url(#gradDearer)" stroke="#f59e0b" stroke-width="1.8"/>
            <text x="365" y="40" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink-secondary)">DEARER RATE (d)</text>
            <text x="365" y="58" text-anchor="middle" font-size="14" font-weight="900" fill="#d97706">${dearer}</text>

            <!-- Center Intersection: Mean Price -->
            <circle cx="230" cy="110" r="34" fill="url(#gradMean)" stroke="#10b981" stroke-width="2.2"/>
            <text x="230" y="105" text-anchor="middle" font-size="9.5" font-weight="800" fill="var(--ink-secondary)">MEAN (m)</text>
            <text x="230" y="122" text-anchor="middle" font-size="14" font-weight="900" fill="#047857">${mean}</text>

            <!-- Bottom Left: Quantity of Cheaper (d - m) -->
            <rect x="30" y="150" width="130" height="50" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="1.8"/>
            <text x="95" y="170" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink-secondary)">(d - m) Cheaper Parts</text>
            <text x="95" y="188" text-anchor="middle" font-size="14" font-weight="900" fill="#2563eb">${diffCheaper} parts</text>

            <!-- Bottom Right: Quantity of Dearer (m - c) -->
            <rect x="300" y="150" width="130" height="50" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" stroke-width="1.8"/>
            <text x="365" y="170" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink-secondary)">(m - c) Dearer Parts</text>
            <text x="365" y="188" text-anchor="middle" font-size="14" font-weight="900" fill="#d97706">${diffDearer} parts</text>
          </svg>
        </div>

        <div class="alligation-ratio-strip">
          <span class="ars-lbl">Proportional Mixture Formula:</span>
          <span class="ars-formula">Quantity of Cheaper : Quantity of Dearer = (d - m) : (m - c) = <strong>${diffCheaper} : ${diffDearer}</strong></span>
        </div>

        <div class="alligation-result-banner">
          <span class="arb-label">Target Mixture Ratio / Proportion:</span>
          <strong class="arb-val highlight-gold">${escape(correctAns)}</strong>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 13. ODD MAN OUT VISUALIZER (mod13) — Anomaly Detection & Positional Spectrum
  // ===========================================================================
  function renderOddManOut(q) {
    const correctAns = cleanQuotes(q.correct || "");
    const options = (q.options || []).filter(o => !/none/i.test(o));

    let optionsCardsHtml = "";
    options.forEach(opt => {
      const isOdd = (opt.trim().toUpperCase() === correctAns.trim().toUpperCase());
      const letters = opt.split("");

      let letterBlocksHtml = "";
      const diffs = [];

      letters.forEach((char, idx) => {
        const code = char.toUpperCase().charCodeAt(0);
        const pos = (code >= 65 && code <= 90) ? (code - 64) : "?";

        if (idx < letters.length - 1) {
          const nextCode = letters[idx + 1].toUpperCase().charCodeAt(0);
          if (nextCode >= 65 && nextCode <= 90 && code >= 65 && code <= 90) {
            const step = (nextCode - 64) - pos;
            diffs.push((step > 0 ? "+" : "") + step);
          }
        }

        letterBlocksHtml += `
          <div class="omo-char-cell">
            <span class="occ-letter">${escape(char)}</span>
            <span class="occ-pos">${pos}</span>
          </div>
          ${idx < letters.length - 1 ? `<span class="occ-step-arrow">${diffs[idx] || '➔'}</span>` : ''}
        `;
      });

      optionsCardsHtml += `
        <div class="omo-cand-card ${isOdd ? 'is-anomaly' : 'is-normal'}">
          <div class="omo-cand-header">
            <span class="och-term">${escape(opt)}</span>
            <span class="och-badge ${isOdd ? 'badge-anomaly' : 'badge-normal'}">
              ${isOdd ? '✘ ANOMALY (Odd One)' : '✓ Valid Pattern'}
            </span>
          </div>
          <div class="omo-cand-track">
            ${letterBlocksHtml}
          </div>
          ${diffs.length > 0 ? `
            <div class="omo-diff-tag">
              Interval Steps: <strong>[ ${diffs.join(', ')} ]</strong>
            </div>
          ` : ''}
        </div>
      `;
    });

    return `
      <div class="sol-vis-container vis-odd-man-out">
        <div class="vis-badge-header">
          <span class="vis-icon">🔍</span>
          <span class="vis-label">Alphabet Positional Spectrum &amp; Anomaly Detection</span>
          <span class="vis-module-tag">Odd Man Out</span>
        </div>

        <div class="omo-grid-container">
          ${optionsCardsHtml}
        </div>

        <div class="omo-rule-explanation">
          <div class="ore-icon">💡</div>
          <div class="ore-text">
            <strong>Invariant Rule Breakdown:</strong> ${q.explanation ? escape(stripMd(q.explanation.split('\n')[0])) : 'All normal candidates maintain the consistent interval pattern; the highlighted choice violates the symmetry.'}
          </div>
        </div>

        <div class="omo-result-banner">
          <span class="orb-label">Identified Odd Element:</span>
          <strong class="orb-val highlight-gold">${escape(correctAns)}</strong>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 14. SYLLOGISM EULER-VENN VISUALIZER (mod14) — Dynamic Categorical Sets
  // ===========================================================================
  function renderSyllogismVenn(q) {
    const text = q.question || "";
    const correctAns = q.correct || "";

    // Parse statements
    const stmts = [];
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    lines.forEach(l => {
      const m = l.match(/^(All|Some|No)\s+([a-zA-Z]+)\s+(?:are|is)\s+(?:a\s+)?([a-zA-Z]+)/i);
      if (m) stmts.push({ quantifier: m[1].toUpperCase(), subj: m[2], pred: m[3] });
    });

    // Parse conclusions
    const conclusions = [];
    lines.forEach(l => {
      const m = l.match(/^(?:I|II|III|IV)\.\s+(.*)/i);
      if (m) conclusions.push(m[1].trim());
    });

    // Terms
    const termA = stmts[0] ? stmts[0].subj : "Set A";
    const termB = stmts[0] ? stmts[0].pred : "Set B";
    const termC = stmts[1] ? (stmts[1].pred !== termB ? stmts[1].pred : stmts[1].subj) : "Set C";

    // Determine Diagram Scenario
    const hasUniversal = stmts.some(s => s.quantifier === "ALL");
    const hasNegative = stmts.some(s => s.quantifier === "NO");
    const allAreUniversal = stmts.length >= 2 && stmts.every(s => s.quantifier === "ALL");

    let svgDiagramHtml = "";
    if (allAreUniversal) {
      // 3 Concentric circles: A ⊂ B ⊂ C
      svgDiagramHtml = `
        <svg class="venn-svg" viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="concentricC" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="#3b82f6" stop-opacity="0.12"/>
              <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.22"/>
            </radialGradient>
            <radialGradient id="concentricB" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="#10b981" stop-opacity="0.2"/>
              <stop offset="100%" stop-color="#059669" stop-opacity="0.32"/>
            </radialGradient>
            <radialGradient id="concentricA" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.32"/>
              <stop offset="100%" stop-color="#d97706" stop-opacity="0.45"/>
            </radialGradient>
          </defs>

          <!-- Outer Circle C -->
          <circle cx="230" cy="105" r="95" fill="url(#concentricC)" stroke="#3b82f6" stroke-width="2.2"/>
          <text x="230" y="32" text-anchor="middle" font-size="11.5" font-weight="850" fill="#3b82f6">${escape(termC)} (Outer Superset)</text>

          <!-- Middle Circle B -->
          <circle cx="230" cy="115" r="65" fill="url(#concentricB)" stroke="#10b981" stroke-width="2.2"/>
          <text x="230" y="68" text-anchor="middle" font-size="11.5" font-weight="850" fill="#10b981">${escape(termB)}</text>

          <!-- Inner Circle A -->
          <circle cx="230" cy="125" r="35" fill="url(#concentricA)" stroke="#f59e0b" stroke-width="2.2"/>
          <text x="230" y="130" text-anchor="middle" font-size="11.5" font-weight="900" fill="#b45309">${escape(termA)}</text>

          <text x="40" y="195" font-size="10.5" font-weight="800" fill="var(--ink-muted)">Containment Chain: ${escape(termA)} ⊆ ${escape(termB)} ⊆ ${escape(termC)}</text>
        </svg>
      `;
    } else if (hasNegative) {
      // Disjoint / Forbidden Set Diagram: Overlap of A & B, with C strictly Disjoint
      svgDiagramHtml = `
        <svg class="venn-svg" viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="setGradA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.15"/>
            </linearGradient>
            <linearGradient id="setGradB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#059669" stop-opacity="0.15"/>
            </linearGradient>
            <linearGradient id="setGradC" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"/>
              <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.15"/>
            </linearGradient>
          </defs>

          <!-- Circle A -->
          <circle cx="120" cy="105" r="62" fill="url(#setGradA)" stroke="#3b82f6" stroke-width="2.2"/>
          <text x="85" y="105" font-size="12" font-weight="850" fill="var(--ink-primary)">${escape(termA)}</text>

          <!-- Circle B (Intersecting A) -->
          <circle cx="195" cy="105" r="62" fill="url(#setGradB)" stroke="#10b981" stroke-width="2.2"/>
          <text x="215" y="105" font-size="12" font-weight="850" fill="var(--ink-primary)">${escape(termB)}</text>

          <!-- Intersection label -->
          <text x="157" y="108" text-anchor="middle" font-size="10.5" font-weight="800" fill="#047857">∩ Some</text>

          <!-- Barrier / Disjoint Separator -->
          <line x1="285" y1="35" x2="285" y2="175" stroke="#ef4444" stroke-width="2" stroke-dasharray="5"/>
          <circle cx="285" cy="105" r="14" fill="#ef4444"/>
          <text x="285" y="109" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">∅</text>

          <!-- Circle C (Disjoint) -->
          <circle cx="365" cy="105" r="58" fill="url(#setGradC)" stroke="#ef4444" stroke-width="2.2"/>
          <text x="365" y="109" text-anchor="middle" font-size="12" font-weight="850" fill="#b91c1c">${escape(termC)}</text>

          <text x="285" y="195" text-anchor="middle" font-size="10.5" font-weight="800" fill="#ef4444">Disjoint Condition: No overlap permitted with ${escape(termC)}</text>
        </svg>
      `;
    } else {
      // Overlapping Intersections (Some A are B, Some B are C)
      svgDiagramHtml = `
        <svg class="venn-svg" viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="vennA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.15"/>
            </linearGradient>
            <linearGradient id="vennB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#059669" stop-opacity="0.15"/>
            </linearGradient>
            <linearGradient id="vennC" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.15"/>
            </linearGradient>
          </defs>

          <!-- Circle A -->
          <circle cx="125" cy="105" r="62" fill="url(#vennA)" stroke="#3b82f6" stroke-width="2.2"/>
          <text x="95" y="109" font-size="12" font-weight="850" fill="var(--ink-primary)">${escape(termA)}</text>

          <!-- Circle B -->
          <circle cx="215" cy="105" r="62" fill="url(#vennB)" stroke="#10b981" stroke-width="2.2"/>
          <text x="215" y="70" text-anchor="middle" font-size="12" font-weight="850" fill="var(--ink-primary)">${escape(termB)}</text>

          <!-- Intersection A & B -->
          <text x="170" y="109" text-anchor="middle" font-size="10.5" font-weight="800" fill="#047857">∩</text>

          <!-- Circle C -->
          <circle cx="305" cy="105" r="62" fill="url(#vennC)" stroke="#8b5cf6" stroke-width="2.2"/>
          <text x="335" y="109" font-size="12" font-weight="850" fill="var(--ink-primary)">${escape(termC)}</text>

          <!-- Intersection B & C -->
          <text x="260" y="109" text-anchor="middle" font-size="10.5" font-weight="800" fill="#6d28d9">∩</text>

          <text x="230" y="195" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink-muted)">Non-Adjacent Fallacy: ${escape(termA)} and ${escape(termC)} cannot be definitely asserted without a bridge</text>
        </svg>
      `;
    }

    // Premises cards
    let premisesHtml = "";
    stmts.forEach((s, idx) => {
      let typeBadge = "[A] Universal Affirmative";
      let mathExpr = `${s.subj} ⊆ ${s.pred}`;
      if (s.quantifier === "NO") {
        typeBadge = "[E] Universal Negative";
        mathExpr = `${s.subj} ∩ ${s.pred} = ∅`;
      } else if (s.quantifier === "SOME") {
        typeBadge = "[I] Particular Affirmative";
        mathExpr = `${s.subj} ∩ ${s.pred} ≠ ∅`;
      }
      premisesHtml += `
        <div class="syl-premise-chip">
          <span class="spc-num">P${idx + 1}</span>
          <div class="spc-content">
            <span class="spc-text">${escape(s.quantifier)} ${escape(s.subj)} are ${escape(s.pred)}</span>
            <span class="spc-type">${typeBadge} &bull; <code>${mathExpr}</code></span>
          </div>
        </div>
      `;
    });

    // Conclusions cards
    let conclusionsHtml = "";
    conclusions.forEach((c, idx) => {
      const roman = ["I", "II", "III", "IV"][idx] || (idx + 1);
      const follows = correctAns.includes(roman) || correctAns.includes("both") || correctAns.includes("All");
      conclusionsHtml += `
        <div class="syl-concl-card ${follows ? 'concl-valid' : 'concl-invalid'}">
          <span class="scc-roman">Conclusion ${roman}:</span>
          <span class="scc-text">${escape(c)}</span>
          <span class="scc-badge ${follows ? 'badge-follows' : 'badge-fails'}">
            ${follows ? '✓ Valid (Follows)' : '✘ Invalid / Doubtful'}
          </span>
        </div>
      `;
    });

    return `
      <div class="sol-vis-container vis-syllogism-venn">
        <div class="vis-badge-header">
          <span class="vis-icon">⭕</span>
          <span class="vis-label">Categorical Euler-Venn Set Relation &amp; Premise Deductions</span>
          <span class="vis-module-tag">Syllogism</span>
        </div>

        <div class="venn-diagram-wrapper">
          ${svgDiagramHtml}
        </div>

        <div class="syl-premises-bar">
          <span class="spb-title">Categorical Premises:</span>
          <div class="spb-list">
            ${premisesHtml}
          </div>
        </div>

        ${conclusionsHtml ? `
          <div class="syl-conclusions-section">
            <div class="scs-title">Conclusions Deductive Verification:</div>
            <div class="syl-conclusions-list">
              ${conclusionsHtml}
            </div>
          </div>
        ` : ''}

        <div class="venn-conclusion-status">
          <div class="venn-status-pill">
            <span class="pill-label">Logical Deductive Verdict:</span>
            <strong class="pill-val">${escape(correctAns)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // 15. GENERIC APTITUDE INVARIANT SCHEMATIC
  // ===========================================================================
  function renderGenericAptitude(q) {
    const correctAns = q.correct || "";

    return `
      <div class="sol-vis-container vis-generic-aptitude">
        <div class="vis-badge-header">
          <span class="vis-icon">💡</span>
          <span class="vis-label">Core Mathematical Logic &amp; Pattern Schematic</span>
          <span class="vis-module-tag">Aptitude Logic</span>
        </div>

        <div class="logic-schematic-row">
          <div class="logic-node node-input">
            <span class="l-sub">Given Data</span>
            <span class="l-text">Problem Formulation</span>
          </div>
          <div class="logic-arrow">➔</div>
          <div class="logic-node node-core">
            <span class="l-sub">Applied Rule</span>
            <span class="l-text">Mathematical Invariant</span>
          </div>
          <div class="logic-arrow">➔</div>
          <div class="logic-node node-output">
            <span class="l-sub">Target Value</span>
            <strong class="l-ans highlight-gold">${escape(correctAns)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  // ===========================================================================
  // MASTER DISPATCHER: Route to the ideal visualizer for the question
  // ===========================================================================
  function generateVisualizer(q) {
    if (!q) return "";

    const modId = q.module_id || "";

    // 1. Blood Relation
    if (modId === "mod1") {
      return renderBloodRelation(q);
    }

    // 2. Coded Relation
    if (modId === "mod2") {
      return renderCodedRelation(q);
    }

    // 3. Analogy
    if (modId === "mod3") {
      return renderAnalogy(q);
    }

    // 4. Direction Sense
    if (modId === "mod4") {
      return renderDirectionSense(q);
    }

    // 5. Number System
    if (modId === "mod5") {
      return renderNumberSystem(q);
    }

    // 6. H.C.F. & L.C.M.
    if (modId === "mod6") {
      return renderHcfLcm(q);
    }

    // 7. Average
    if (modId === "mod7") {
      return renderAverage(q);
    }

    // 8. Remainder Theorem
    if (modId === "mod8") {
      return renderRemainderTheorem(q);
    }

    // 9. Ratio & Proportion
    if (modId === "mod9") {
      // If mixture or alligation is mentioned in mod9 question, use alligation
      if (/alligation|mixture|mixed|vessel|cheaper|dearer|water and milk|milk and water/i.test(q.question)) {
        return renderAlligation(q);
      }
      return renderRatioProportion(q);
    }

    // 10. Ages
    if (modId === "mod10") {
      return renderAgesTimeline(q);
    }

    // 11. Partnership
    if (modId === "mod11") {
      return renderPartnership(q);
    }

    // 12. Allegation (Alligation & Mixture)
    if (modId === "mod12") {
      return renderAlligation(q);
    }

    // 13. Odd Man Out
    if (modId === "mod13") {
      return renderOddManOut(q);
    }

    // 14. Syllogism
    if (modId === "mod14") {
      return renderSyllogismVenn(q);
    }

    // Fallback: Generic Mathematical Schematic
    return renderGenericAptitude(q);
  }

  return {
    generateVisualizer,
    renderBloodRelation,
    renderCodedRelation,
    renderAnalogy,
    renderDirectionSense,
    renderNumberSystem,
    renderHcfLcm,
    renderAverage,
    renderRemainderTheorem,
    renderRatioProportion,
    renderAgesTimeline,
    renderPartnership,
    renderAlligation,
    renderOddManOut,
    renderSyllogismVenn,
    renderGenericAptitude
  };

})();

// Export globally for browser & node test suites
if (typeof module !== "undefined" && module.exports) {
  module.exports = SolutionVisualizer;
}
