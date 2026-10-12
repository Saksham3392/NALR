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

  // Universal Typography Helper: Normalize unicode superscripts and caret notation to uniform HTML <sup> tags
  const SUPER_CHAR_MAP = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-', 'ⁿ': 'n', 'ˣ': 'x', 'ᵃ': 'a', 'ᵇ': 'b'
  };

  function normalizeSuperscripts(text) {
    if (!text) return "";
    let res = String(text);
    res = res.replace(/([a-zA-Z0-9]+)\^\(([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)\)/g, (m, b, e1, e2) => `${b}<sup>${e1}<sup>${e2}</sup></sup>`);
    res = res.replace(/([a-zA-Z0-9]+)\^\(([^)]+)\)/g, (m, b, exp) => `${b}<sup>${exp}</sup>`);
    res = res.replace(/([a-zA-Z0-9]+)\^([0-9a-zA-Z+-]+)/g, (m, b, exp) => `${b}<sup>${exp}</sup>`);
    res = res.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿˣᵃᵇ]+/g, (match) => {
      const normal = match.split('').map(ch => SUPER_CHAR_MAP[ch] || ch).join('');
      return `<sup>${normal}</sup>`;
    });
    return res;
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

    // Coded Relation Expression & Symbol Pipeline
    // 1. Extract numbered step cards from explanation
    const steps = [];
    const explanationText = q.explanation || "";
    const stepRegex = /(\d+)\.\s*([^\n➔]+?)\s*➔\s*([^\n]+)/g;
    let match;
    const colors = ["sky", "teal", "amber", "purple", "emerald", "sky"];
    while ((match = stepRegex.exec(explanationText)) !== null) {
      const stepNum = match[1];
      const clue = match[2].trim();
      const meaning = match[3].trim();
      let tag = "Step " + stepNum;
      if (/Gen\s*[\+\-]?\d+/i.test(meaning)) {
        const genMatch = meaning.match(/Gen\s*[\+\-]?\d+/i);
        if (genMatch) tag = genMatch[0];
      } else if (/male/i.test(meaning)) {
        tag = "Male";
      } else if (/female/i.test(meaning)) {
        tag = "Female";
      }
      steps.push({
        num: stepNum,
        clue: clue,
        meaning: meaning,
        tag: tag,
        color: colors[(parseInt(stepNum, 10) - 1) % colors.length]
      });
    }

    // 2. If no arrow steps found (e.g. elimination questions like cr_q10), parse bullet points
    if (steps.length === 0) {
      const bulletRegex = /•\s*Option\s*\(([a-z])\)\s*([^:]+):\s*([^\n]+)/gi;
      let bMatch;
      let bIdx = 1;
      while ((bMatch = bulletRegex.exec(explanationText)) !== null) {
        steps.push({
          num: bIdx,
          clue: `Option (${bMatch[1]}) ${bMatch[2].trim()}`,
          meaning: bMatch[3].trim(),
          tag: `Option (${bMatch[1]})`,
          color: colors[(bIdx - 1) % colors.length]
        });
        bIdx++;
      }
    }

    // Fallback if still empty
    if (steps.length === 0) {
      steps.push({ num: 1, clue: "Symbolic Operator Decoding", meaning: "Identify gender and generation shift for each symbol", tag: "Rules", color: "sky" });
      steps.push({ num: 2, clue: "Expression Linkage", meaning: "Chain kinship pairs sequentially from left to right", tag: "Trace", color: "teal" });
      steps.push({ num: 3, clue: "Terminal Node Kinship", meaning: "Determine relationship between source and target", tag: "Deduce", color: "amber" });
    }

    // Extract target expression from question if present
    let targetExpr = "";
    const exprMatch = q.question.match(/(?:expression\??\s*|conclusion drawn from the expression\s*['"]?)([A-Z0-9\s\*\%\$\@\#\×\Δ\•\β\x\-\+\÷\©\=£]+?)(?:['"]?\s*\?|\s*\(a\)|\n|$)/i);
    if (exprMatch && exprMatch[1].trim().length > 3) {
      targetExpr = exprMatch[1].trim();
    } else {
      const targetRelMatch = q.question.match(/means\s*['“]([^'”]+)['”]/i);
      if (targetRelMatch) {
        targetExpr = `Target: ${targetRelMatch[1]}`;
      } else {
        targetExpr = q.type_name || "Coded Expression";
      }
    }

    return `
      <div class="sol-vis-container vis-coded-pipeline">
        <div class="vis-badge-header">
          <span class="vis-icon">🔣</span>
          <span class="vis-label">Coded Kinship Expression Pipeline &amp; Symbol Matrix</span>
          <span class="vis-module-tag">Coded Relation</span>
        </div>

        <div style="background: rgba(37,99,235,0.06); border: 1px solid rgba(37,99,235,0.2); border-radius: var(--radius-sm, 10px); padding: 8px 14px; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--primary-blue, #2563eb); letter-spacing: 0.5px;">Evaluated Expression:</span>
          <code style="font-size: 13px; font-weight: 800; color: var(--ink-primary); font-family: 'DM Mono', monospace; background: var(--card-bg, #fff); padding: 3px 8px; border-radius: 6px; border: 1px solid rgba(0,0,0,0.08);">${escape(targetExpr)}</code>
        </div>

        <div class="pipeline-clues-stack" style="margin-bottom: 14px;">
          ${steps.map((c) => `
            <div class="clue-step-card step-${c.color}">
              <div class="clue-step-num">${c.num}</div>
              <div class="clue-content">
                <span class="clue-quote">“${escape(c.clue)}”</span>
                <span class="clue-meaning">➔ <strong>${escape(c.meaning)}</strong></span>
              </div>
              <span class="clue-tag">${escape(c.tag)}</span>
            </div>
          `).join('')}
        </div>

        <div class="polarity-bridge-card">
          <div class="polarity-side">
            <span class="pol-sub">Target Kinship Resolved:</span>
            <span class="pol-val highlight-gold" style="font-size: 15px; font-weight: 900;">${escape(correctAns)}</span>
          </div>
          <div class="polarity-divider">➔</div>
          <div class="polarity-side">
            <span class="pol-sub">Deduction Method:</span>
            <span class="pol-val">Symbolic Decoding &amp; Generational Mapping</span>
          </div>
        </div>
      </div>
    `;
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
  // 4. DIRECTION SENSE VISUALIZER (mod4 & mod15 type_3) — Static Step Route Diagram
  // ===========================================================================
  const DIRECTION_ROUTE_REGISTRY = {
  "dir_q1": [
    {
      "num": 1,
      "dist": "8 km",
      "dir": "South",
      "dx": 0,
      "dy": -8,
      "text": "Walk 8 km South"
    },
    {
      "num": 2,
      "dist": "3 km",
      "dir": "West",
      "dx": -3,
      "dy": 0,
      "text": "Turn right and walk 3 km West"
    },
    {
      "num": 3,
      "dist": "5 km",
      "dir": "North",
      "dx": 0,
      "dy": 5,
      "text": "Turn right and walk 5 km North"
    },
    {
      "num": 4,
      "dist": "3 km",
      "dir": "East",
      "dx": 3,
      "dy": 0,
      "text": "Turn right and walk 3 km East"
    }
  ],
  "dir_q2": [
    {
      "num": 1,
      "dist": "20 m",
      "dir": "South",
      "dx": 0,
      "dy": -20,
      "text": "Walk 20 m South from P"
    },
    {
      "num": 2,
      "dist": "30 m",
      "dir": "East",
      "dx": 30,
      "dy": 0,
      "text": "Turn left and walk 30 m East"
    },
    {
      "num": 3,
      "dist": "20 m",
      "dir": "North",
      "dx": 0,
      "dy": 20,
      "text": "Turn left and walk 20 m North"
    },
    {
      "num": 4,
      "dist": "10 m",
      "dir": "West",
      "dx": -10,
      "dy": 0,
      "text": "Turn left and walk 10 m West to Q"
    }
  ],
  "dir_q3": [
    {
      "num": 1,
      "dist": "2 km",
      "dir": "East",
      "dx": 2,
      "dy": 0,
      "text": "Walk 2 km East"
    },
    {
      "num": 2,
      "dist": "3 km",
      "dir": "North-West",
      "dx": -2.12,
      "dy": 2.12,
      "text": "Turn North-West and walk 3 km"
    },
    {
      "num": 3,
      "dist": "2 km",
      "dir": "South",
      "dx": 0,
      "dy": -2,
      "text": "Turn South and walk 2 km"
    }
  ],
  "dir_q4": [
    {
      "num": 1,
      "dist": "25 m",
      "dir": "East",
      "dx": 25,
      "dy": 0,
      "text": "Facing North, turn right and walk 25 m East"
    },
    {
      "num": 2,
      "dist": "30 m",
      "dir": "North",
      "dx": 0,
      "dy": 30,
      "text": "Turn left and walk 30 m North"
    },
    {
      "num": 3,
      "dist": "25 m",
      "dir": "East",
      "dx": 25,
      "dy": 0,
      "text": "Turn right and walk 25 m East"
    },
    {
      "num": 4,
      "dist": "55 m",
      "dir": "South",
      "dx": 0,
      "dy": -55,
      "text": "Turn right and walk 55 m South"
    },
    {
      "num": 5,
      "dist": "40 m",
      "dir": "West",
      "dx": -40,
      "dy": 0,
      "text": "Turn right and walk 40 m West"
    }
  ],
  "dir_q5": [
    {
      "num": 1,
      "dist": "10 mi",
      "dir": "East",
      "dx": 10,
      "dy": 0,
      "text": "Walk 10 miles East from P"
    },
    {
      "num": 2,
      "dist": "5 mi",
      "dir": "South",
      "dx": 0,
      "dy": -5,
      "text": "Turn right and walk 5 miles South"
    },
    {
      "num": 3,
      "dist": "5 mi",
      "dir": "West",
      "dx": -5,
      "dy": 0,
      "text": "Turn right and walk 5 miles West"
    }
  ],
  "dir_q6": [
    {
      "num": 1,
      "dist": "10 km",
      "dir": "North",
      "dx": 0,
      "dy": 10,
      "text": "Walk 10 km North"
    },
    {
      "num": 2,
      "dist": "6 km",
      "dir": "South",
      "dx": 0,
      "dy": -6,
      "text": "Turn back and walk 6 km South"
    },
    {
      "num": 3,
      "dist": "3 km",
      "dir": "East",
      "dx": 3,
      "dy": 0,
      "text": "Turn left and walk 3 km East"
    }
  ],
  "dir_q7": [
    {
      "num": 1,
      "dist": "1 km",
      "dir": "East",
      "dx": 1,
      "dy": 0,
      "text": "Walk 1 km East"
    },
    {
      "num": 2,
      "dist": "1 km",
      "dir": "South",
      "dx": 0,
      "dy": -1,
      "text": "Turn right and walk 1 km South"
    },
    {
      "num": 3,
      "dist": "2 km",
      "dir": "East",
      "dx": 2,
      "dy": 0,
      "text": "Turn left and walk 2 km East"
    },
    {
      "num": 4,
      "dist": "5 km",
      "dir": "North",
      "dx": 0,
      "dy": 5,
      "text": "Turn left and walk 5 km North"
    }
  ],
  "dir_q8": [
    {
      "num": 1,
      "dist": "6 m",
      "dir": "East",
      "dx": 6,
      "dy": 0,
      "text": "Walk 6 m East"
    },
    {
      "num": 2,
      "dist": "9 m",
      "dir": "South",
      "dx": 0,
      "dy": -9,
      "text": "Turn right and walk 9 m South"
    },
    {
      "num": 3,
      "dist": "6 m",
      "dir": "East",
      "dx": 6,
      "dy": 0,
      "text": "Turn left and walk 6 m East"
    }
  ],
  "dir_q9": [
    {
      "num": 1,
      "dist": "5 km",
      "dir": "South",
      "dx": 0,
      "dy": -5,
      "text": "Walk 5 km South from P to Q"
    },
    {
      "num": 2,
      "dist": "2 km",
      "dir": "West",
      "dx": -2,
      "dy": 0,
      "text": "Turn right and walk towards R (West)"
    }
  ],
  "dir_q13": [
    {
      "num": 1,
      "dist": "30 m",
      "dir": "East",
      "dx": 30,
      "dy": 0,
      "text": "Walk 30 m East"
    },
    {
      "num": 2,
      "dist": "50 m",
      "dir": "South",
      "dx": 0,
      "dy": -50,
      "text": "Turn right and walk 50 m South"
    },
    {
      "num": 3,
      "dist": "40 m",
      "dir": "East",
      "dx": 40,
      "dy": 0,
      "text": "Turn left and walk 40 m East"
    },
    {
      "num": 4,
      "dist": "50 m",
      "dir": "North",
      "dx": 0,
      "dy": 50,
      "text": "Turn left and walk 50 m North"
    }
  ],
  "dir_q14": [
    {
      "num": 1,
      "dist": "10 m",
      "dir": "North",
      "dx": 0,
      "dy": 10,
      "text": "Walk 10 m North"
    },
    {
      "num": 2,
      "dist": "10 m",
      "dir": "East",
      "dx": 10,
      "dy": 0,
      "text": "Turn right and walk 10 m East"
    },
    {
      "num": 3,
      "dist": "5 m",
      "dir": "North",
      "dx": 0,
      "dy": 5,
      "text": "Turn left and walk 5 m North"
    },
    {
      "num": 4,
      "dist": "15 m",
      "dir": "West",
      "dx": -15,
      "dy": 0,
      "text": "Turn left and walk 15 m West"
    },
    {
      "num": 5,
      "dist": "15 m",
      "dir": "South",
      "dx": 0,
      "dy": -15,
      "text": "Turn left and walk 15 m South"
    }
  ],
  "dir_q15": [
    {
      "num": 1,
      "dist": "20 m",
      "dir": "South",
      "dx": 0,
      "dy": -20,
      "text": "Walk 20 m South"
    },
    {
      "num": 2,
      "dist": "30 m",
      "dir": "East",
      "dx": 30,
      "dy": 0,
      "text": "Turn left and walk 30 m East"
    },
    {
      "num": 3,
      "dist": "10 m",
      "dir": "South",
      "dx": 0,
      "dy": -10,
      "text": "Turn right and walk 10 m South"
    },
    {
      "num": 4,
      "dist": "40 m",
      "dir": "West",
      "dx": -40,
      "dy": 0,
      "text": "Turn right and walk 40 m West"
    },
    {
      "num": 5,
      "dist": "30 m",
      "dir": "North",
      "dx": 0,
      "dy": 30,
      "text": "Turn right and walk 30 m North"
    }
  ],
  "dir_q16": [
    {
      "num": 1,
      "dist": "4 km",
      "dir": "South",
      "dx": 0,
      "dy": -4,
      "text": "Walk 4 km South (opposite of North)"
    },
    {
      "num": 2,
      "dist": "3 km",
      "dir": "East",
      "dx": 3,
      "dy": 0,
      "text": "Turn left and walk 3 km East"
    }
  ],
  "dir_q18": [
    {
      "num": 1,
      "dist": "90 m",
      "dir": "East",
      "dx": 90,
      "dy": 0,
      "text": "Walk 90 m East"
    },
    {
      "num": 2,
      "dist": "20 m",
      "dir": "South",
      "dx": 0,
      "dy": -20,
      "text": "Turn right and walk 20 m South"
    },
    {
      "num": 3,
      "dist": "30 m",
      "dir": "West",
      "dx": -30,
      "dy": 0,
      "text": "Turn right and walk 30 m West"
    },
    {
      "num": 4,
      "dist": "100 m",
      "dir": "North",
      "dx": 0,
      "dy": 100,
      "text": "Turn North and walk 100 m"
    }
  ],
  "dir_q19": [
    {
      "num": 1,
      "dist": "75 m",
      "dir": "North",
      "dx": 0,
      "dy": 75,
      "text": "Walk 75 m North"
    },
    {
      "num": 2,
      "dist": "25 m",
      "dir": "West",
      "dx": -25,
      "dy": 0,
      "text": "Turn left and walk 25 m West"
    },
    {
      "num": 3,
      "dist": "80 m",
      "dir": "South",
      "dx": 0,
      "dy": -80,
      "text": "Turn left and walk 80 m South"
    },
    {
      "num": 4,
      "dist": "50 m",
      "dir": "South-East",
      "dx": 35,
      "dy": -35,
      "text": "Turn 45° to right and walk 50 m"
    }
  ],
  "dir_q20": [
    {
      "num": 1,
      "dist": "4 Ft",
      "dir": "East",
      "dx": 4,
      "dy": 0,
      "text": "Walk 4 Ft East from T to U"
    },
    {
      "num": 2,
      "dist": "4 Ft",
      "dir": "North",
      "dx": 0,
      "dy": 4,
      "text": "Turn 90° left and walk 4 Ft North to W"
    },
    {
      "num": 3,
      "dist": "3 Ft",
      "dir": "East",
      "dx": 3,
      "dy": 0,
      "text": "Turn 90° right and walk 3 Ft East to P"
    },
    {
      "num": 4,
      "dist": "1 Ft",
      "dir": "South",
      "dx": 0,
      "dy": -1,
      "text": "Turn 90° right and walk 1 Ft South to Q"
    },
    {
      "num": 5,
      "dist": "1 Ft",
      "dir": "East",
      "dx": 1,
      "dy": 0,
      "text": "Turn 90° left and walk 1 Ft East to V"
    },
    {
      "num": 6,
      "dist": "3 Ft",
      "dir": "South",
      "dx": 0,
      "dy": -3,
      "text": "Turn 90° right and walk 3 Ft South to R"
    }
  ],
  "dir_q21": [
    {
      "num": 1,
      "dist": "3 km",
      "dir": "East",
      "dx": 3,
      "dy": 0,
      "text": "Walk 3 km East from A to B"
    },
    {
      "num": 2,
      "dist": "9 km",
      "dir": "North",
      "dx": 0,
      "dy": 9,
      "text": "Turn left and walk 9 km (3×3) North to C"
    },
    {
      "num": 3,
      "dist": "15 km",
      "dir": "West",
      "dx": -15,
      "dy": 0,
      "text": "Turn left and walk 15 km (5×3) West to D"
    }
  ],
  "dir_q22": [
    {
      "num": 1,
      "dist": "10 km",
      "dir": "East",
      "dx": 10,
      "dy": 0,
      "text": "Pran walks 10 km East from office"
    },
    {
      "num": 2,
      "dist": "10 km",
      "dir": "North",
      "dx": 0,
      "dy": 10,
      "text": "Pran turns left and walks 10 km North"
    },
    {
      "num": 3,
      "dist": "10 km",
      "dir": "West",
      "dx": -10,
      "dy": 0,
      "text": "Khan walks 10 km West from office"
    },
    {
      "num": 4,
      "dist": "10 km",
      "dir": "North",
      "dx": 0,
      "dy": 10,
      "text": "Khan turns right and walks 10 km North"
    }
  ],
  "dir_q26": [
    {
      "num": 1,
      "dist": "1 km",
      "dir": "East",
      "dx": 1,
      "dy": 0,
      "text": "Facing Sunrise (East), walk 1 km"
    },
    {
      "num": 2,
      "dist": "2 km",
      "dir": "South",
      "dx": 0,
      "dy": -2,
      "text": "Turn right and walk 2 km South"
    },
    {
      "num": 3,
      "dist": "1 km",
      "dir": "West",
      "dx": -1,
      "dy": 0,
      "text": "Turn right and walk 1 km West"
    }
  ],
  "dir_q28": [
    {
      "num": 1,
      "dist": "30 m",
      "dir": "North",
      "dx": 0,
      "dy": 30,
      "text": "Walk 30 m North"
    },
    {
      "num": 2,
      "dist": "40 m",
      "dir": "West",
      "dx": -40,
      "dy": 0,
      "text": "Turn left and walk 40 m West"
    },
    {
      "num": 3,
      "dist": "30 m",
      "dir": "South",
      "dx": 0,
      "dy": -30,
      "text": "Turn left and walk 30 m South"
    },
    {
      "num": 4,
      "dist": "50 m",
      "dir": "East",
      "dx": 50,
      "dy": 0,
      "text": "Turn left and walk 50 m East"
    }
  ],
  "dir_q31": [
    {
      "num": 1,
      "dist": "d",
      "dir": "East",
      "dx": 10,
      "dy": 0,
      "text": "Walk distance d East from A to B"
    },
    {
      "num": 2,
      "dist": "d",
      "dir": "South",
      "dx": 0,
      "dy": -10,
      "text": "Turn right and walk distance d South"
    },
    {
      "num": 3,
      "dist": "x",
      "dir": "East",
      "dx": 15,
      "dy": 0,
      "text": "Turn left and walk some distance x East"
    },
    {
      "num": 4,
      "dist": "d",
      "dir": "North",
      "dx": 0,
      "dy": 10,
      "text": "Turn left and walk distance d North to C"
    }
  ],
  "fa1_q23": [
    {
      "num": 1,
      "dist": "20 m",
      "dir": "North",
      "dx": 0,
      "dy": 20,
      "text": "Walk 20 m North"
    },
    {
      "num": 2,
      "dist": "30 m",
      "dir": "East",
      "dx": 30,
      "dy": 0,
      "text": "Turn right and walk 30 m East"
    },
    {
      "num": 3,
      "dist": "35 m",
      "dir": "South",
      "dx": 0,
      "dy": -35,
      "text": "Turn right and walk 35 m South"
    },
    {
      "num": 4,
      "dist": "15 m",
      "dir": "East",
      "dx": 15,
      "dy": 0,
      "text": "Turn left and walk 15 m East"
    },
    {
      "num": 5,
      "dist": "15 m",
      "dir": "North",
      "dx": 0,
      "dy": 15,
      "text": "Turn left and walk 15 m North"
    }
  ],
  "fa1_q24": [
    {
      "num": 1,
      "dist": "2 km",
      "dir": "North",
      "dx": 0,
      "dy": 2,
      "text": "Walk 2 km North from A"
    },
    {
      "num": 2,
      "dist": "4 km",
      "dir": "East",
      "dx": 4,
      "dy": 0,
      "text": "Turn right and walk 4 km East"
    },
    {
      "num": 3,
      "dist": "4 km",
      "dir": "South",
      "dx": 0,
      "dy": -4,
      "text": "Turn right and walk 4 km South"
    },
    {
      "num": 4,
      "dist": "4 km",
      "dir": "West",
      "dx": -4,
      "dy": 0,
      "text": "Turn right and walk 4 km West to B"
    }
  ],
  "fa1_q26": [
    {
      "num": 1,
      "dist": "2 km",
      "dir": "North",
      "dx": 0,
      "dy": 2,
      "text": "Walk 2 km North"
    },
    {
      "num": 2,
      "dist": "4 km",
      "dir": "East",
      "dx": 4,
      "dy": 0,
      "text": "Turn right and walk 4 km East"
    },
    {
      "num": 3,
      "dist": "4 km",
      "dir": "South",
      "dx": 0,
      "dy": -4,
      "text": "Turn right and walk 4 km South"
    },
    {
      "num": 4,
      "dist": "4 km",
      "dir": "West",
      "dx": -4,
      "dy": 0,
      "text": "Turn right and walk 4 km West"
    }
  ],
  "fa1_q27": [
    {
      "num": 1,
      "dist": "10 km",
      "dir": "North",
      "dx": 0,
      "dy": 10,
      "text": "Seeta & Ram walk 10 km North"
    },
    {
      "num": 2,
      "dist": "5 km",
      "dir": "West",
      "dx": -5,
      "dy": 0,
      "text": "Seeta turns left and walks 5 km West"
    },
    {
      "num": 3,
      "dist": "3 km",
      "dir": "East",
      "dx": 3,
      "dy": 0,
      "text": "Ram turns right and walks 3 km East"
    },
    {
      "num": 4,
      "dist": "15 km",
      "dir": "South",
      "dx": 0,
      "dy": -15,
      "text": "Both turn South and walk 15 km"
    }
  ],
  "fa1_q30": [
    {
      "num": 1,
      "dist": "2 km",
      "dir": "North",
      "dx": 0,
      "dy": 2,
      "text": "Walk 2 km North"
    },
    {
      "num": 2,
      "dist": "4 km",
      "dir": "East",
      "dx": 4,
      "dy": 0,
      "text": "Turn right and walk 4 km East"
    },
    {
      "num": 3,
      "dist": "4 km",
      "dir": "South",
      "dx": 0,
      "dy": -4,
      "text": "Turn right and walk 4 km South"
    },
    {
      "num": 4,
      "dist": "4 km",
      "dir": "West",
      "dx": -4,
      "dy": 0,
      "text": "Turn right and walk 4 km West"
    }
  ],
  "fa1_q31": [
    {
      "num": 1,
      "dist": "25 km",
      "dir": "North",
      "dx": 0,
      "dy": 25,
      "text": "Drive 25 km North"
    },
    {
      "num": 2,
      "dist": "2 km",
      "dir": "East",
      "dx": 2,
      "dy": 0,
      "text": "Turn right and drive 2 km East"
    },
    {
      "num": 3,
      "dist": "25 km",
      "dir": "South",
      "dx": 0,
      "dy": -25,
      "text": "Turn right and drive 25 km South"
    }
  ],
  "fa1_q32": [
    {
      "num": 1,
      "dist": "25 km",
      "dir": "East",
      "dx": 25,
      "dy": 0,
      "text": "Car 1 runs 25 km East along main road"
    },
    {
      "num": 2,
      "dist": "15 km",
      "dir": "South",
      "dx": 0,
      "dy": -15,
      "text": "Car 1 turns right and runs 15 km South"
    },
    {
      "num": 3,
      "dist": "25 km",
      "dir": "East",
      "dx": 25,
      "dy": 0,
      "text": "Car 1 turns left and runs 25 km East"
    },
    {
      "num": 4,
      "dist": "15 km",
      "dir": "North",
      "dx": 0,
      "dy": 15,
      "text": "Car 1 turns to reach main road (North)"
    },
    {
      "num": 5,
      "dist": "35 km",
      "dir": "West",
      "dx": -35,
      "dy": 0,
      "text": "Car 2 runs 35 km West from 150 km"
    }
  ],
  "fa1_q33": [
    {
      "num": 1,
      "dist": "2 km",
      "dir": "North",
      "dx": 0,
      "dy": 2,
      "text": "Walk Northwards"
    },
    {
      "num": 2,
      "dist": "1.5 km",
      "dir": "East",
      "dx": 1.5,
      "dy": 0,
      "text": "Turn right (moving East)"
    },
    {
      "num": 3,
      "dist": "1 km",
      "dir": "North",
      "dx": 0,
      "dy": 1,
      "text": "Turn left (moving North), walk 1 km"
    },
    {
      "num": 4,
      "dist": "1.5 km",
      "dir": "West",
      "dx": -1.5,
      "dy": 0,
      "text": "Turn left again (moving West)"
    }
  ],
  "fa1_q34": [
    {
      "num": 1,
      "dist": "2 km",
      "dir": "South",
      "dx": 0,
      "dy": -2,
      "text": "Walk 2 km South"
    },
    {
      "num": 2,
      "dist": "3 km",
      "dir": "East",
      "dx": 3,
      "dy": 0,
      "text": "Turn left and walk 3 km East"
    },
    {
      "num": 3,
      "dist": "2 km",
      "dir": "North",
      "dx": 0,
      "dy": 2,
      "text": "Turn left and walk 2 km North"
    },
    {
      "num": 4,
      "dist": "1 km",
      "dir": "East",
      "dx": 1,
      "dy": 0,
      "text": "Turn right and walk 1 km East"
    }
  ],
  "fa1_q35": [
    {
      "num": 1,
      "dist": "9 km",
      "dir": "West",
      "dx": -9,
      "dy": 0,
      "text": "Travel 9 km West"
    },
    {
      "num": 2,
      "dist": "7 km",
      "dir": "North",
      "dx": 0,
      "dy": 7,
      "text": "Turn right and travel 7 km North"
    },
    {
      "num": 3,
      "dist": "8 km",
      "dir": "West",
      "dx": -8,
      "dy": 0,
      "text": "Turn left and travel 8 km West"
    },
    {
      "num": 4,
      "dist": "11 km",
      "dir": "East",
      "dx": 11,
      "dy": 0,
      "text": "Turn back and travel 11 km East"
    },
    {
      "num": 5,
      "dist": "7 km",
      "dir": "South",
      "dx": 0,
      "dy": -7,
      "text": "Turn right and travel 7 km South"
    }
  ],
  "fa1_q36": [
    {
      "num": 1,
      "dist": "5 km",
      "dir": "South",
      "dx": 0,
      "dy": -5,
      "text": "Walk 5 km South"
    },
    {
      "num": 2,
      "dist": "3 km",
      "dir": "West",
      "dx": -3,
      "dy": 0,
      "text": "Turn right and walk 3 km West"
    },
    {
      "num": 3,
      "dist": "5 km",
      "dir": "South",
      "dx": 0,
      "dy": -5,
      "text": "Turn left and walk 5 km South"
    }
  ]
};

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
        if (new RegExp("\\b" + d + "\\b", "i").test(lower)) {
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
        .replace(/\bFrom point [A-Z]\b/gi, '')
        .split(/[,.;]|(?:\band\s+then\b)|\band\b|\bafter\b/i)
        .map(c => c.trim())
        .filter(Boolean);

      let facing = null;
      const dynamicLegs = [];

      clauses.forEach(clause => {
        const faceMatch = clause.match(/faces\s+(?:towards\s+)?(?:the\s+)?(north|south|east|west)/i);
        if (faceMatch) {
          facing = faceMatch[1].charAt(0).toUpperCase() + faceMatch[1].slice(1).toLowerCase();
        }

        const distMatch = clause.match(/(\d+(?:\.\d+)?)\s*(km|kilometres|kilometer|m|meters|meter|miles|ft|feet)\b/i);
        const dirMatch = clause.match(/\b(north-east|north-west|south-east|south-west|northwards|southwards|eastwards|westwards|north|south|east|west)\b/i);
        const turnMatch = clause.match(/\b(right|left|back|around)\b/i);

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
            dist: `${distVal} ${unit}`,
            dir: actualDir,
            dx,
            dy,
            text: `Move ${distVal} ${unit} ${actualDir}`
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
        const cNum = CIRCLED_STEP_NUMS[leg.num] || `(${leg.num})`;

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
                paint-order="stroke" stroke="#ffffff" stroke-width="3" stroke-linejoin="round">${cNum} ${escape(leg.dist)}</text>
        `;
      }

      let shortestSvg = '';
      if (isShortestDistQ && (startPt.sx !== endPt.sx || startPt.sy !== endPt.sy)) {
        const smx = (startPt.sx + endPt.sx) / 2;
        const smy = (startPt.sy + endPt.sy) / 2;
        shortestSvg = `
          <line x1="${startPt.sx}" y1="${startPt.sy}" x2="${endPt.sx}" y2="${endPt.sy}"
                stroke="#e11d48" stroke-width="2" stroke-dasharray="5,4"/>
          <text x="${smx}" y="${smy - 8}" font-size="10.5" font-weight="850" fill="#be123c" text-anchor="middle"
                paint-order="stroke" stroke="#ffffff" stroke-width="3" stroke-linejoin="round">Shortest: ${escape(correctAns)}</text>
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

              <rect width="${svgW}" height="${svgH}" fill="#ffffff" rx="10"/>
              <rect width="${svgW}" height="${svgH}" fill="url(#lightGrid)" rx="10"/>

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
              ${pathSvg}

              <!-- Shortest Line If Distance Question -->
              ${shortestSvg}

              <!-- Starting Point Marker -->
              <g transform="translate(${startPt.sx}, ${startPt.sy})">
                <circle cx="0" cy="0" r="7" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
                <circle cx="0" cy="0" r="11" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="2,2"/>
                <rect x="-34" y="-28" width="68" height="18" rx="4" fill="#10b981"/>
                <text x="0" y="-16" font-size="9.5" font-weight="850" fill="#ffffff" text-anchor="middle">START (A)</text>
              </g>

              <!-- Ending Point Marker -->
              <g transform="translate(${endPt.sx}, ${endPt.sy})">
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
                ${routeLegs.map(l => `
                  <div class="route-step-item">
                    <span class="rsi-num">${CIRCLED_STEP_NUMS[l.num] || l.num}</span>
                    <span class="rsi-text">${escape(l.text)}</span>
                    <span class="rsi-badge">${escape(l.dist)} ${escape(l.dir)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="dir-res-banner">
            <span class="drb-label">Resolved Answer:</span>
            <strong class="drb-val highlight-gold">${escape(correctAns)}</strong>
          </div>
        </div>
      `;
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

      return `
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
                  <text x="0" y="32" font-size="9.5" font-weight="850" fill="#d97706" text-anchor="middle">☀️ SUN (${sunDirection})</text>
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
                  <text x="65" y="15" font-size="9" font-weight="850" fill="#334155" text-anchor="middle">👤 Shadow ➔ ${shadowDirection}</text>
                </g>
              </svg>
            </div>

            <div class="shadow-matrix-grid">
              <div class="shadow-matrix-card">
                <span class="smc-title">1. Solar Horizon Position</span>
                <span class="smc-desc">${isMorning ? "🌅 Morning (Sunrise)" : "🌇 Evening (Sunset)"} ➔ Sun in <strong>${sunDirection}</strong></span>
              </div>
              <div class="shadow-matrix-card">
                <span class="smc-title">2. Shadow Projection Law</span>
                <span class="smc-desc">Light travels ${sunDirection}➔${shadowDirection} ➔ Shadow casts <strong>${shadowDirection}</strong></span>
              </div>
              <div class="shadow-matrix-card">
                <span class="smc-title">3. Observer Orientation Rule</span>
                <span class="smc-desc">Shadow is on <strong>${relationText}</strong> ➔ Face points <strong>${escape(correctAns)}</strong></span>
              </div>
            </div>

            <div class="dir-res-banner">
              <span class="drb-label">Resolved Facing Bearing:</span>
              <strong class="drb-val highlight-gold">${escape(correctAns)}</strong>
            </div>
          </div>
        </div>
      `;
    }

    if (isRotation) {
      const targetDir = findBearing(correctAns) || compassDirs[4];
      const initialMatch = text.match(/(?:facing|walking towards|towards the|initially|starts facing)\s+(north-east|north-west|south-east|south-west|north|south|east|west)/i);
      const initialDir = initialMatch ? findBearing(initialMatch[1]) : compassDirs[0];
      const initialDeg = initialDir ? initialDir.deg : 0;
      const targetDeg = targetDir.deg;

      let sweepDeg = (targetDeg - initialDeg);
      if (sweepDeg > 180) sweepDeg -= 360;
      if (sweepDeg < -180) sweepDeg += 360;

      const isClockQ = lowerText.includes("clock") || lowerText.includes("time piece") || lowerText.includes("timepiece") || lowerText.includes("minute");
      const isHeadstandQ = lowerText.includes("standing on head") || lowerText.includes("headstand");

      return `
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

                <g transform="rotate(${initialDeg}, 100, 100)">
                  <line x1="100" y1="100" x2="100" y2="40" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3"/>
                  <circle cx="100" cy="38" r="3" fill="#0284c7"/>
                </g>

                <g transform="rotate(${targetDeg}, 100, 100)">
                  <polygon points="100,30 94,100 106,100" fill="#ef4444"/>
                  <polygon points="100,140 96,100 104,100" fill="#94a3b8"/>
                  <circle cx="100" cy="100" r="6" fill="#0f172a"/>
                  <circle cx="100" cy="100" r="3" fill="#ffffff"/>
                </g>
              </svg>
              <span style="font-size: 11px; font-weight: 800; color: var(--primary-blue); margin-top: 6px;">
                Bearing: ${targetDir.name} (${targetDeg}°)
              </span>
            </div>

            <div class="rotation-ledger-stack">
              <div class="rot-step-card">
                <span class="rot-step-label">Initial Vector:</span>
                <span class="rot-step-val">${initialDir.name} (${initialDeg}°)</span>
              </div>
              <div class="rot-step-card">
                <span class="rot-step-label">${isClockQ ? "Clock Mechanism:" : isHeadstandQ ? "Body Inversion:" : "Net Angular Shift:"}</span>
                <span class="rot-step-val highlight-gold">
                  ${isClockQ ? "Hour/Minute hand rotation mapping" : isHeadstandQ ? "Upside down: Left/Right axes invert" : `${sweepDeg > 0 ? "+" : ""}${sweepDeg}° (${sweepDeg >= 0 ? "Clockwise" : "Anti-Clockwise"})`}
                </span>
              </div>
              <div class="rot-step-card" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.35);">
                <span class="rot-step-label" style="color: #047857;">Resolved Orientation:</span>
                <strong class="rot-step-val" style="color: #047857;">${escape(correctAns)}</strong>
              </div>
            </div>
          </div>

          <div class="dir-res-banner">
            <span class="drb-label">Final Resolved Bearing:</span>
            <strong class="drb-val highlight-gold">${escape(correctAns)}</strong>
          </div>
        </div>
      `;
    }

    // Relative Positions Fallback (Villages / Collinear Points)
    const matchedBearing = findBearing(correctAns) || compassDirs[0];
    return `
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
                <div class="needle-3d" style="transform: rotate(${matchedBearing.deg}deg);"></div>
              </div>
            </div>

            <div class="compass-readout-pill">
              <span class="cr-label">Relative Bearing:</span>
              <strong class="cr-value">${escape(matchedBearing.name)} (${matchedBearing.deg}°)</strong>
            </div>
          </div>
        </div>

        <div class="dir-res-banner">
          <span class="drb-label">Resolved Relative Direction:</span>
          <strong class="drb-val highlight-gold">${escape(correctAns)}</strong>
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
      const isAverage = /average of (?:the )?factors/i.test(q.question);
      const isPrimeFactors = /prime factors/i.test(q.question);
      const isTotal = !isSum && !isProduct && !isAverage && !isPrimeFactors;

      let decompFormula = "N = p₁ᵃ · p₂ᵇ · p₃ᶜ";
      let decompSub = "Break the number into prime bases with integer powers";
      let specificStep = "";

      if (q.id === "num_q11" || (isProduct && /100/.test(q.question))) {
        decompFormula = "N = 100 = 2² · 5²";
        decompSub = "Total factors F = (2 + 1)(2 + 1) = 9";
        specificStep = "Product of Factors = N^(F / 2) = 100^(9/2) = (10²)^(9/2) = 10⁹";
      } else if (q.id === "num_q6" || (isTotal && /100/.test(q.question))) {
        decompFormula = "N = 100 = 2² · 5²";
        decompSub = "Total factors F = (2 + 1)(2 + 1) = 9";
        specificStep = "Number of Divisors τ(100) = (2 + 1)(2 + 1) = 9";
      } else if (q.id === "num_q7" || (isTotal && /80/.test(q.question))) {
        decompFormula = "N = 80 = 2⁴ · 5¹";
        decompSub = "Total factors F = (4 + 1)(1 + 1) = 10";
        specificStep = "Number of Divisors τ(80) = (4 + 1)(1 + 1) = 10";
      } else if (q.id === "num_q8" || (isSum && /100/.test(q.question))) {
        decompFormula = "N = 100 = 2² · 5²";
        decompSub = "Sum σ(100) = (1 + 2 + 4)(1 + 5 + 25) = 7 · 31 = 217";
        specificStep = "Sum of Divisors σ(100) = 217";
      } else if (q.id === "num_q9" || (isSum && /50/.test(q.question))) {
        decompFormula = "N = 50 = 2¹ · 5²";
        decompSub = "Sum σ(50) = (1 + 2)(1 + 5 + 25) = 3 · 31 = 93";
        specificStep = "Sum of Divisors σ(50) = 93";
      } else if (q.id === "num_q10" || isAverage) {
        decompFormula = "N = 60 = 2² · 3¹ · 5¹";
        decompSub = "Sum = 168, Total Factors = 12 ➔ Average = 168 / 12 = 14";
        specificStep = "Average of Divisors = 168 / 12 = 14";
      } else if (q.id === "num_q44") {
        decompFormula = "6²⁰ · 11¹¹ · 21²¹ = 2²⁰ · 3⁴¹ · 7²¹ · 11¹¹";
        decompSub = "Prime factors count = 20 + 41 + 21 + 11 = 93";
        specificStep = "Number of Prime Factors = 93";
      } else if (q.id === "num_q45") {
        decompFormula = "14¹⁴ · 15¹⁵ = 2¹⁴ · 3¹⁵ · 5¹⁵ · 7¹⁴";
        decompSub = "Prime factors count = 14 + 15 + 15 + 14 = 58";
        specificStep = "Number of Prime Factors = 58";
      }

      const resLabel = isProduct
        ? "Product of Factors Resolution:"
        : isSum
        ? "Sum of Factors Resolution:"
        : isAverage
        ? "Average of Factors Resolution:"
        : isPrimeFactors
        ? "Prime Factors Count Resolution:"
        : "Total Factors Resolution:";

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
              <div class="fa-formula">${escape(decompFormula)}</div>
              <span class="fa-sub">${escape(decompSub)}</span>
              ${specificStep ? `<div class="fa-calc-step" style="margin-top:6px;font-size:12px;font-weight:750;color:#059669;background:rgba(5,150,105,0.08);padding:4px 10px;border-radius:6px;border:1px dashed rgba(5,150,105,0.3);">${escape(specificStep)}</div>` : ''}
            </div>

            <div class="fa-formula-cards-row">
              <div class="fa-card ${isTotal ? 'card-active' : ''}">
                <span class="fac-title">Total Factors</span>
                <span class="fac-formula">(a + 1)(b + 1)(c + 1)</span>
                ${isTotal ? `<strong class="fac-res highlight-gold">Total = ${escape(correctAns)}</strong>` : ''}
              </div>

              ${isProduct ? `
                <div class="fa-card card-active">
                  <span class="fac-title">Product of Factors</span>
                  <span class="fac-formula">N^(Total Factors / 2)</span>
                  <strong class="fac-res highlight-gold">Product = ${escape(correctAns)}</strong>
                </div>
              ` : isAverage ? `
                <div class="fa-card card-active">
                  <span class="fac-title">Average of Factors</span>
                  <span class="fac-formula">Sum / Total Factors</span>
                  <strong class="fac-res highlight-gold">Average = ${escape(correctAns)}</strong>
                </div>
              ` : `
                <div class="fa-card ${isSum ? 'card-active' : ''}">
                  <span class="fac-title">Sum of Factors</span>
                  <span class="fac-formula">(p₁ᵃ⁺¹ − 1)/(p₁ − 1) · ...</span>
                  ${isSum ? `<strong class="fac-res highlight-gold">Sum = ${escape(correctAns)}</strong>` : ''}
                </div>
              `}

              <div class="fa-card ${isPrimeFactors ? 'card-active' : ''}">
                <span class="fac-title">Prime Factors</span>
                <span class="fac-formula">Sum of Exponents (a + b + c)</span>
                ${isPrimeFactors ? `<strong class="fac-res highlight-gold">Count = ${escape(correctAns)}</strong>` : ''}
              </div>
            </div>

            <div class="ra-solution-card">
              <span class="ra-sub">${escape(resLabel)}</span>
              <strong class="ra-ans highlight-gold">${escape(correctAns)}</strong>
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
    const powerMatch = q.question.match(/([0-9a-zA-Z]+(?:\^\([^)]+\)|[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿˣ\^0-9]+)?)\s*[\/÷]\s*(\d+)/);

    let rawDividend = divMatch ? divMatch[1] : (powerMatch ? powerMatch[1] : "N");
    let divisor = divMatch ? divMatch[2] : (powerMatch ? powerMatch[2] : "D");
    let dividendHtml = normalizeSuperscripts(rawDividend);
    let remainder = correctAns;

    const isNegative = /-?\d+/.test(rawDividend) && parseInt(rawDividend, 10) < 0;
    const isMultiProduct = /\(\s*\d+\s*[×*]\s*\d+/.test(q.question);
    const isFactorial = /1!\s*\+\s*2!/.test(q.question);
    const isAlgebraic = /x[²³⁵¹0-9\^]|divided by\s*\(?x/i.test(q.question);
    const isPowerForm = /[\^⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(q.question) || powerMatch !== null;

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
                <strong class="rnl-val">${dividendHtml} mod ${divisor}</strong>
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

    // Sub-type D: Algebraic Remainder Theorem
    if (isAlgebraic) {
      return `
        <div class="sol-vis-container vis-remainder-scale">
          <div class="vis-badge-header">
            <span class="vis-icon">📐</span>
            <span class="vis-label">Polynomial Remainder Theorem &amp; Root Substitution</span>
            <span class="vis-module-tag">Algebraic Remainder</span>
          </div>

          <div class="division-formula-card">
            <div class="formula-badge">
              <span class="f-part f-dividend">P(x) = Q(x) · D(x) + <strong>R</strong></span>
              <span class="f-eq">➔</span>
              <span class="f-part f-divisor">Set Divisor D(x) = 0</span>
              <span class="f-eq">➔</span>
              <span class="f-part f-remainder">Remainder = <strong>${escape(remainder)}</strong></span>
            </div>

            <div class="division-visual-bar">
              <div class="bar-segment bar-multiple"><span>Linear Root Evaluation P(x = root)</span></div>
              <div class="bar-segment bar-rem"><span>Rem: ${escape(remainder)}</span></div>
            </div>
          </div>

          <div class="vis-callout-note">
            <span class="note-icon">💡</span>
            <span><strong>Polynomial Remainder Rule:</strong> If polynomial P(x) is divided by (x − a), then the remainder is strictly equal to <strong>P(a)</strong>.</span>
          </div>
        </div>
      `;
    }

    // Sub-type E: Power Management & Cyclicity
    if (isPowerForm) {
      return `
        <div class="sol-vis-container vis-remainder-scale">
          <div class="vis-badge-header">
            <span class="vis-icon">⚡</span>
            <span class="vis-label">Power Management &amp; Modular Reduction Architecture</span>
            <span class="vis-module-tag">Modular Power Form</span>
          </div>

          <div class="division-formula-card">
            <div class="formula-badge">
              <span class="f-part f-dividend">Expression (${dividendHtml})</span>
              <span class="f-eq">mod</span>
              <span class="f-part f-divisor">Divisor (${divisor})</span>
              <span class="f-eq">≡</span>
              <span class="f-part f-remainder"><strong>${escape(remainder)}</strong></span>
            </div>

            <div class="division-visual-bar">
              <div class="bar-segment bar-multiple"><span>Modular Exponent Reduction (aⁿ ≡ (a mod m)ⁿ mod m)</span></div>
              <div class="bar-segment bar-rem"><span>Rem: ${escape(remainder)}</span></div>
            </div>
          </div>

          <div class="vis-callout-note">
            <span class="note-icon">💡</span>
            <span><strong>Power Reduction Invariant:</strong> Reduce base to ±1 mod divisor, or use Euler's totient period to reduce exponents. Final remainder is <strong>${escape(remainder)}</strong>.</span>
          </div>
        </div>
      `;
    }

    // Sub-type F: Standard Euclidean Division Multi-Segment Bar
    return `
      <div class="sol-vis-container vis-remainder-scale">
        <div class="vis-badge-header">
          <span class="vis-icon">⚡</span>
          <span class="vis-label">Euclidean Division &amp; Modular Reduction Architecture</span>
          <span class="vis-module-tag">Remainder Theorem</span>
        </div>

        <div class="division-formula-card">
          <div class="formula-badge">
            <span class="f-part f-dividend">Dividend (<strong>${dividendHtml}</strong>)</span>
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
  // 11. PARTNERSHIP VISUALIZER (mod11) — Step-by-Step Educational Solution
  // ===========================================================================
  const PARTNERSHIP_SOLUTIONS_REGISTRY = {
  "part_q1": {
    "category": "compound_sharing",
    "title": "Compound Investment Sharing Over 1 Year",
    "table": {
      "headers": [
        "Partner",
        "Capital (₹)",
        "Investment Duration (Months)"
      ],
      "rows": [
        [
          "Partner A",
          "₹1,000",
          "12 months (Full Year)"
        ],
        [
          "Partner B",
          "₹4,000",
          "6 months (Joined after 6 mo)"
        ],
        [
          "Partner C",
          "₹5,000",
          "4 months (Only 4 months)"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Identify Given Information",
        "desc": "Partner A started with ₹1,000 for 12 months. Partner B joined after 6 months with ₹4,000 (active for 12 − 6 = 6 months). Partner C invested ₹5,000 for 4 months. Total profit = ₹2,800."
      },
      {
        "num": 2,
        "title": "Calculate Effective Investments (Capital × Time)",
        "desc": "Effective Investment = Capital × Duration in months:",
        "calcs": [
          "A: 1,000 × 12 = 12,000",
          "B: 4,000 × 6 = 24,000",
          "C: 5,000 × 4 = 20,000"
        ]
      },
      {
        "num": 3,
        "title": "Simplify the Profit-Sharing Ratio",
        "desc": "Ratio A : B : C = 12,000 : 24,000 : 20,000",
        "formula": "Divide each by 4,000 ➔ 3 : 6 : 5"
      },
      {
        "num": 4,
        "title": "Calculate Total Ratio Parts",
        "desc": "Total parts = 3 + 6 + 5 = 14 parts"
      },
      {
        "num": 5,
        "title": "Calculate Value of One Part",
        "desc": "Total Profit = ₹2,800",
        "formula": "Value of 1 part = 2,800 ÷ 14 = ₹200"
      },
      {
        "num": 6,
        "title": "Calculate Each Partner’s Profit Share",
        "desc": "Multiply each ratio part by the unit part value (₹200):",
        "calcs": [
          "A = 3 × 200 = ₹600",
          "B = 6 × 200 = ₹1,200",
          "C = 5 × 200 = ₹1,000"
        ]
      }
    ],
    "distribution": [
      {
        "name": "Partner A",
        "parts": 3,
        "val": "₹600",
        "pct": 21.4,
        "color": "#2563eb"
      },
      {
        "name": "Partner B",
        "parts": 6,
        "val": "₹1,200",
        "pct": 42.9,
        "color": "#0d9488"
      },
      {
        "name": "Partner C",
        "parts": 5,
        "val": "₹1,000",
        "pct": 35.7,
        "color": "#f59e0b"
      }
    ],
    "resultExplanation": "The profit is divided as ₹600, ₹1,200, and ₹1,000 respectively, exactly matching option A."
  },
  "part_q2": {
    "category": "compound_sharing",
    "title": "Mid-Term Admission & Withdrawal Allocation",
    "table": {
      "headers": [
        "Partner",
        "Capital (₹)",
        "Investment Duration (Months)"
      ],
      "rows": [
        [
          "Partner A",
          "₹3,000",
          "12 months (Full Year)"
        ],
        [
          "Partner B",
          "₹4,000",
          "6 months (Withdrew after 6 mo)"
        ],
        [
          "Partner C",
          "₹4,500",
          "8 months (Admitted after 4 mo: 12 − 4 = 8 mo)"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Identify Given Information",
        "desc": "A contributes ₹3,000 for 12 months. B contributes ₹4,000 and withdraws after 6 months. C joins after 4 months with ₹4,500 and stays till year end (8 months). Total profit = ₹1,000."
      },
      {
        "num": 2,
        "title": "Calculate Effective Investments (Capital × Time)",
        "desc": "Effective Investment = Capital × Duration in months:",
        "calcs": [
          "A: 3,000 × 12 = 36,000",
          "B: 4,000 × 6 = 24,000",
          "C: 4,500 × 8 = 36,000"
        ]
      },
      {
        "num": 3,
        "title": "Simplify the Profit-Sharing Ratio",
        "desc": "Ratio A : B : C = 36,000 : 24,000 : 36,000",
        "formula": "Divide each by 12,000 ➔ 3 : 2 : 3"
      },
      {
        "num": 4,
        "title": "Calculate Total Ratio Parts",
        "desc": "Total parts = 3 + 2 + 3 = 8 parts"
      },
      {
        "num": 5,
        "title": "Calculate Value of One Part",
        "desc": "Total Profit = ₹1,000",
        "formula": "Value of 1 part = 1,000 ÷ 8 = ₹125"
      },
      {
        "num": 6,
        "title": "Calculate Each Partner’s Profit Share",
        "desc": "Multiply each ratio part by the unit part value (₹125):",
        "calcs": [
          "A = 3 × 125 = ₹375",
          "B = 2 × 125 = ₹250",
          "C = 3 × 125 = ₹375"
        ]
      }
    ],
    "distribution": [
      {
        "name": "Partner A",
        "parts": 3,
        "val": "₹375",
        "pct": 37.5,
        "color": "#2563eb"
      },
      {
        "name": "Partner B",
        "parts": 2,
        "val": "₹250",
        "pct": 25,
        "color": "#0d9488"
      },
      {
        "name": "Partner C",
        "parts": 3,
        "val": "₹375",
        "pct": 37.5,
        "color": "#f59e0b"
      }
    ],
    "resultExplanation": "The profit is divided as ₹375, ₹250, and ₹375 respectively, matching option C."
  },
  "part_q3": {
    "category": "compound_sharing",
    "title": "Fractional Capital & Fractional Duration Division",
    "table": {
      "headers": [
        "Partner",
        "Fraction of Capital",
        "Fraction of Time"
      ],
      "rows": [
        [
          "Partner A",
          "1/3 of Capital",
          "1/3 of Time"
        ],
        [
          "Partner B",
          "1/6 of Capital",
          "1/3 of Time"
        ],
        [
          "Partner C",
          "1 − (1/3 + 1/6) = 1/2 of Capital",
          "Whole Time (1)"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Determine Remaining Capital for C",
        "desc": "Sum of capital fractions for A and B = 1/3 + 1/6 = 3/6 = 1/2.",
        "formula": "C’s capital fraction = 1 − 1/2 = 1/2 (invested for whole time = 1)"
      },
      {
        "num": 2,
        "title": "Calculate Effective Investment Fractions (C × T)",
        "desc": "Multiply capital fraction by time fraction:",
        "calcs": [
          "A: (1/3) × (1/3) = 1/9",
          "B: (1/6) × (1/3) = 1/18",
          "C: (1/2) × 1 = 1/2"
        ]
      },
      {
        "num": 3,
        "title": "Convert Fractions to an Integer Ratio",
        "desc": "Find LCM of denominators (9, 18, 2) = 18 and multiply through:",
        "calcs": [
          "A: (1/9) × 18 = 2",
          "B: (1/18) × 18 = 1",
          "C: (1/2) × 18 = 9",
          "➔ Ratio A : B : C = 2 : 1 : 9"
        ]
      },
      {
        "num": 4,
        "title": "Calculate Total Parts and Unit Value",
        "desc": "Total parts = 2 + 1 + 9 = 12 parts. Total profit = ₹1,200.",
        "formula": "Value of 1 part = 1,200 ÷ 12 = ₹100"
      },
      {
        "num": 5,
        "title": "Calculate Each Partner’s Profit Share",
        "desc": "Multiply ratio parts by ₹100:",
        "calcs": [
          "A = 2 × 100 = ₹200",
          "B = 1 × 100 = ₹100",
          "C = 9 × 100 = ₹900"
        ]
      }
    ],
    "distribution": [
      {
        "name": "Partner A",
        "parts": 2,
        "val": "₹200",
        "pct": 16.7,
        "color": "#2563eb"
      },
      {
        "name": "Partner B",
        "parts": 1,
        "val": "₹100",
        "pct": 8.3,
        "color": "#0d9488"
      },
      {
        "name": "Partner C",
        "parts": 9,
        "val": "₹900",
        "pct": 75,
        "color": "#f59e0b"
      }
    ],
    "resultExplanation": "The profit is divided as ₹200, ₹100, and ₹900 respectively, matching option B."
  },
  "part_q5": {
    "category": "compound_sharing",
    "title": "Two-Year Multi-Year Horizon Profit Allocation",
    "table": {
      "headers": [
        "Partner",
        "Capital (₹)",
        "Duration (2 Years = 24 Months)"
      ],
      "rows": [
        [
          "Partner A",
          "₹12,000",
          "24 months (Full 2 Years)"
        ],
        [
          "Partner B",
          "₹16,000",
          "24 months (Full 2 Years)"
        ],
        [
          "Partner C",
          "₹15,000",
          "16 months (Joined after 8 months: 24 − 8 = 16 mo)"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Establish the Time Horizon in Months",
        "desc": "Total period = 2 years = 24 months. Partner C joins after 8 months, so C is active for 24 − 8 = 16 months."
      },
      {
        "num": 2,
        "title": "Calculate Effective Monthly Equivalents (Capital × Time)",
        "desc": "Multiply capital by number of active months:",
        "calcs": [
          "A: 12,000 × 24 = 288,000",
          "B: 16,000 × 24 = 384,000",
          "C: 15,000 × 16 = 240,000"
        ]
      },
      {
        "num": 3,
        "title": "Simplify Profit-Sharing Ratio",
        "desc": "Ratio A : B : C = 288,000 : 384,000 : 240,000",
        "formula": "Divide each by 48,000 ➔ 6 : 8 : 5"
      },
      {
        "num": 4,
        "title": "Calculate Total Parts and Value per Part",
        "desc": "Total parts = 6 + 8 + 5 = 19 parts. Total profit = ₹45,600.",
        "formula": "Value of 1 part = 45,600 ÷ 19 = ₹2,400"
      },
      {
        "num": 5,
        "title": "Calculate C’s Specific Share",
        "desc": "C holds 5 parts out of 19:",
        "formula": "C’s share = 5 × 2,400 = ₹12,000"
      }
    ],
    "distribution": [
      {
        "name": "Partner A",
        "parts": 6,
        "val": "₹14,400",
        "pct": 31.6,
        "color": "#2563eb"
      },
      {
        "name": "Partner B",
        "parts": 8,
        "val": "₹19,200",
        "pct": 42.1,
        "color": "#0d9488"
      },
      {
        "name": "Partner C",
        "parts": 5,
        "val": "₹12,000",
        "pct": 26.3,
        "color": "#f59e0b"
      }
    ],
    "resultExplanation": "C’s share in the ₹45,600 profit after 2 years is exactly ₹12,000, matching option A."
  },
  "part_q6": {
    "category": "compound_sharing",
    "title": "Algebraic Multiples of Capital & Duration",
    "table": {
      "headers": [
        "Partner",
        "Capital Multiplier",
        "Time Multiplier",
        "Product Factor (C × T)"
      ],
      "rows": [
        [
          "Nandan",
          "C",
          "T",
          "1 × 1 = 1 unit"
        ],
        [
          "Kishan",
          "3C (Thrice Nandan)",
          "2T (Twice Nandan)",
          "3 × 2 = 6 units"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Express Given Information Algebraically",
        "desc": "Let Nandan’s capital = C and time = T. Kishan’s capital = 3C and time = 2T."
      },
      {
        "num": 2,
        "title": "Calculate Effective Investment Ratio",
        "desc": "Profit ratio Kishan : Nandan = (Capital_K × Time_K) : (Capital_N × Time_N)",
        "formula": "(3C × 2T) : (C × T) = 6CT : 1CT = 6 : 1"
      },
      {
        "num": 3,
        "title": "Find Value of One Part from Nandan’s Known Profit",
        "desc": "Nandan receives ₹4,000 for his share (which corresponds to 1 ratio part).",
        "formula": "Value of 1 part = ₹4,000"
      },
      {
        "num": 4,
        "title": "Calculate Total Profit of the Firm",
        "desc": "Total parts = Kishan (6 parts) + Nandan (1 part) = 7 parts.",
        "formula": "Total Profit = 7 × 4,000 = ₹28,000"
      }
    ],
    "distribution": [
      {
        "name": "Kishan",
        "parts": 6,
        "val": "₹24,000",
        "pct": 85.7,
        "color": "#2563eb"
      },
      {
        "name": "Nandan",
        "parts": 1,
        "val": "₹4,000",
        "pct": 14.3,
        "color": "#0d9488"
      }
    ],
    "resultExplanation": "The total profit earned by the joint firm is ₹28,000, matching option C."
  },
  "part_q15": {
    "category": "compound_sharing",
    "title": "Capital Share Deduction from Equal-Time Profit Ratio",
    "table": {
      "headers": [
        "Partner",
        "Profit Earned (₹)",
        "Simplified Ratio",
        "Capital Share"
      ],
      "rows": [
        [
          "Partner A",
          "₹1,250",
          "1 part",
          "1/6 of Total Capital"
        ],
        [
          "Partner B",
          "₹2,500",
          "2 parts",
          "2/6 of Total Capital"
        ],
        [
          "Partner C",
          "₹3,750",
          "3 parts",
          "3/6 = 1/2 of Total Capital"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Apply Equal Investment Duration Principle",
        "desc": "Since all three partners invested for the same duration (1 year), the Profit Ratio equals the Capital Ratio directly: Capital A : Capital B : Capital C = Profit A : Profit B : Profit C."
      },
      {
        "num": 2,
        "title": "Simplify Profit-Sharing Ratio",
        "desc": "Ratio = 1,250 : 2,500 : 3,750",
        "formula": "Divide each by 1,250 ➔ 1 : 2 : 3"
      },
      {
        "num": 3,
        "title": "Calculate Total Ratio Parts",
        "desc": "Total parts = 1 + 2 + 3 = 6 parts"
      },
      {
        "num": 4,
        "title": "Calculate Capital Contributed by C",
        "desc": "Total combined investment = ₹14,400. C’s fraction = 3/6 = 1/2.",
        "formula": "C’s Capital = (3 ÷ 6) × 14,400 = (1/2) × 14,400 = ₹7,200"
      }
    ],
    "distribution": [
      {
        "name": "Partner A",
        "parts": 1,
        "val": "₹2,400 invested",
        "pct": 16.7,
        "color": "#2563eb"
      },
      {
        "name": "Partner B",
        "parts": 2,
        "val": "₹4,800 invested",
        "pct": 33.3,
        "color": "#0d9488"
      },
      {
        "name": "Partner C",
        "parts": 3,
        "val": "₹7,200 invested",
        "pct": 50,
        "color": "#f59e0b"
      }
    ],
    "resultExplanation": "C contributed ₹7,200 out of the total ₹14,400 capital, exactly matching option C."
  },
  "part_q4": {
    "category": "unknown_variable",
    "title": "Solving for Unknown Capital Contribution",
    "table": {
      "headers": [
        "Partner",
        "Known Capital (₹)",
        "Duration",
        "Profit Share (₹)"
      ],
      "rows": [
        [
          "Manoj",
          "₹20,000",
          "6 months",
          "₹6,000"
        ],
        [
          "Ramesh",
          "R (Unknown)",
          "12 months (Full Year)",
          "9,000 − 6,000 = ₹3,000"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Deduce Ramesh’s Profit Share & Ratio",
        "desc": "Total profit = ₹9,000. Manoj’s share = ₹6,000.",
        "formula": "Ramesh’s share = 9,000 − 6,000 = ₹3,000 ➔ Profit Ratio Manoj : Ramesh = 6,000 : 3,000 = 2 : 1"
      },
      {
        "num": 2,
        "title": "Formulate Fundamental Partnership Equation",
        "desc": "Profit Ratio = (Capital_M × Time_M) / (Capital_R × Time_R)",
        "formula": "(20,000 × 6) / (R × 12) = 2 / 1"
      },
      {
        "num": 3,
        "title": "Simplify and Isolate Unknown Capital (R)",
        "desc": "Numerator = 120,000. Denominator = 12R.",
        "calcs": [
          "120,000 / 12R = 2 / 1",
          "10,000 / R = 2",
          "2R = 10,000 ➔ R = 10,000 ÷ 2 = ₹5,000"
        ]
      }
    ],
    "resultExplanation": "Ramesh invested ₹5,000 for the full year, matching option D."
  },
  "part_q7": {
    "category": "unknown_variable",
    "title": "Solving for Unknown Investment Duration",
    "table": {
      "headers": [
        "Partner",
        "Capital Ratio",
        "Investment Duration",
        "Profit Ratio"
      ],
      "rows": [
        [
          "Partner A",
          "5 parts",
          "8 months (Withdrew then)",
          "4 parts"
        ],
        [
          "Partner B",
          "9 parts",
          "T_B (Unknown months)",
          "9 parts"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Identify Known Ratios & Time Parameters",
        "desc": "Capitals are in ratio 5 : 9. A invests for 8 months. Profit ratio is 4 : 9."
      },
      {
        "num": 2,
        "title": "Set Up Partnership Ratio Formula",
        "desc": "(Capital_A × Time_A) / (Capital_B × Time_B) = Profit_A / Profit_B",
        "formula": "(5 × 8) / (9 × T_B) = 4 / 9"
      },
      {
        "num": 3,
        "title": "Solve for T_B Algebraically",
        "desc": "Simplify the equation:",
        "calcs": [
          "40 / (9 × T_B) = 4 / 9",
          "Cancel 9 from both denominators: 40 / T_B = 4",
          "T_B = 40 ÷ 4 = 10 months"
        ]
      }
    ],
    "resultExplanation": "B’s capital was invested in the business for 10 months, matching option A."
  },
  "part_q8": {
    "category": "unknown_variable",
    "title": "Delayed Entry Month Calculation",
    "table": {
      "headers": [
        "Partner",
        "Capital (₹)",
        "Duration in Business (t)",
        "Profit Ratio"
      ],
      "rows": [
        [
          "Partner A",
          "₹2,700",
          "12 months (Full Year)",
          "2 parts"
        ],
        [
          "Partner B",
          "₹2,025",
          "t months (Active)",
          "1 part"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Set Up Equation for Active Investment Duration (t)",
        "desc": "A was invested for 12 months. B was active for t months. Profit ratio = 2 : 1.",
        "formula": "(2,700 × 12) / (2,025 × t) = 2 / 1"
      },
      {
        "num": 2,
        "title": "Solve for Active Months (t)",
        "desc": "Evaluate numerator and cross-multiply:",
        "calcs": [
          "32,400 / (2,025 × t) = 2 / 1",
          "2 × 2,025 × t = 32,400",
          "4,050 × t = 32,400 ➔ t = 32,400 ÷ 4,050 = 8 months"
        ]
      },
      {
        "num": 3,
        "title": "Distinguish Active Duration from Entry Delay",
        "desc": "The question asks \"After how many months did B join?\", not how long B remained:",
        "formula": "Months before joining = 12 − t = 12 − 8 = 4 months"
      }
    ],
    "resultExplanation": "B joined the business after 4 months, exactly matching option A."
  },
  "part_q9": {
    "category": "unknown_variable",
    "title": "Compound Ratio Multiplication (Profit = Capital × Time)",
    "table": {
      "headers": [
        "Partner",
        "Capital Ratio",
        "Time Ratio",
        "Profit Equivalent (C × T)"
      ],
      "rows": [
        [
          "Partner A",
          "1",
          "1",
          "1 × 1 = 1"
        ],
        [
          "Partner B",
          "2",
          "2",
          "2 × 2 = 4"
        ],
        [
          "Partner C",
          "3",
          "3",
          "3 × 3 = 9"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "State the Fundamental Proportionality Principle",
        "desc": "Profit is directly proportional to the product of capital and duration: Profit Ratio = (C_A × T_A) : (C_B × T_B) : (C_C × T_C)"
      },
      {
        "num": 2,
        "title": "Perform Term-by-Term Multiplications",
        "desc": "Substitute the given capital ratio (1 : 2 : 3) and time ratio (1 : 2 : 3):",
        "calcs": [
          "A: 1 × 1 = 1",
          "B: 2 × 2 = 4",
          "C: 3 × 3 = 9"
        ]
      },
      {
        "num": 3,
        "title": "Express the Final Profit Distribution Ratio",
        "desc": "The simplified ratio of profit is:",
        "formula": "Profit Ratio = 1 : 4 : 9"
      }
    ],
    "resultExplanation": "Their profits will be distributed in the ratio 1 : 4 : 9, matching option C."
  },
  "part_q10": {
    "category": "unknown_variable",
    "title": "Ratio Inversion for Unknown Time Ratio (Time = Profit / Capital)",
    "table": {
      "headers": [
        "Partner",
        "Capital Ratio (C)",
        "Profit Ratio (P)",
        "Time Fraction (P / C)"
      ],
      "rows": [
        [
          "Partner A",
          "4",
          "2",
          "2/4 = 1/2"
        ],
        [
          "Partner B",
          "5",
          "3",
          "3/5"
        ],
        [
          "Partner C",
          "6",
          "4",
          "4/6 = 2/3"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Derive the Inversion Formula for Duration",
        "desc": "Since Profit = Capital × Time, rearranging yields:",
        "formula": "Time = Profit ÷ Capital ➔ T_A : T_B : T_C = (P_A / C_A) : (P_B / C_B) : (P_C / C_C)"
      },
      {
        "num": 2,
        "title": "Substitute Given Ratios",
        "desc": "Capital ratio = 4 : 5 : 6; Profit ratio = 2 : 3 : 4:",
        "calcs": [
          "A: 2 / 4 = 1/2",
          "B: 3 / 5",
          "C: 4 / 6 = 2/3",
          "➔ Raw Time Ratio = 1/2 : 3/5 : 2/3"
        ]
      },
      {
        "num": 3,
        "title": "Clear Denominators Using LCM",
        "desc": "LCM of denominators (2, 5, 3) = 30. Multiply each term by 30:",
        "calcs": [
          "A = (1/2) × 30 = 15",
          "B = (3/5) × 30 = 18",
          "C = (2/3) × 30 = 20"
        ],
        "formula": "Simplified Time Ratio = 15 : 18 : 20"
      }
    ],
    "resultExplanation": "The ratio of time for which their capitals were contributed is 15 : 18 : 20, matching option D."
  },
  "part_q11": {
    "category": "unknown_variable",
    "title": "Ratio Inversion for Unknown Capital Ratio (Capital = Profit / Time)",
    "table": {
      "headers": [
        "Partner",
        "Period Ratio (T)",
        "Profit Ratio (P)",
        "Capital Fraction (P / T)"
      ],
      "rows": [
        [
          "Partner A",
          "2",
          "4",
          "4/2 = 2"
        ],
        [
          "Partner B",
          "3",
          "5",
          "5/3"
        ],
        [
          "Partner C",
          "6",
          "6",
          "6/6 = 1"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Derive the Inversion Formula for Capital",
        "desc": "Since Profit = Capital × Time, rearranging yields:",
        "formula": "Capital = Profit ÷ Time ➔ C_A : C_B : C_C = (P_A / T_A) : (P_B / T_B) : (P_C / T_C)"
      },
      {
        "num": 2,
        "title": "Substitute Given Ratios",
        "desc": "Periods ratio = 2 : 3 : 6; Profit ratio = 4 : 5 : 6:",
        "calcs": [
          "A: 4 / 2 = 2",
          "B: 5 / 3",
          "C: 6 / 6 = 1",
          "➔ Raw Capital Ratio = 2 : 5/3 : 1"
        ]
      },
      {
        "num": 3,
        "title": "Clear Denominators Using LCM",
        "desc": "Multiply through by 3 to eliminate the fraction:",
        "calcs": [
          "A = 2 × 3 = 6",
          "B = (5/3) × 3 = 5",
          "C = 1 × 3 = 3"
        ],
        "formula": "Simplified Capital Ratio = 6 : 5 : 3"
      }
    ],
    "resultExplanation": "The investments made by A, B, and C are in the ratio 6 : 5 : 3, matching option D."
  },
  "part_q16": {
    "category": "unknown_variable",
    "title": "Simultaneous Capital & Profit Difference Equation",
    "table": {
      "headers": [
        "Partner",
        "Capital Expression",
        "Duration",
        "Profit Share"
      ],
      "rows": [
        [
          "Partner A",
          "x + 375",
          "8 months",
          "P_A = ₹100"
        ],
        [
          "Partner B",
          "x (Unknown)",
          "4 months",
          "P_B = ₹25"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Find Individual Profit Shares",
        "desc": "Total Profit = P_A + P_B = 125. Given P_A − P_B = 75.",
        "calcs": [
          "2 P_A = 125 + 75 = 200 ➔ P_A = ₹100",
          "P_B = 125 − 100 = ₹25",
          "Profit Ratio P_A : P_B = 100 : 25 = 4 : 1"
        ]
      },
      {
        "num": 2,
        "title": "Formulate Capital Ratio Equation",
        "desc": "Let B’s capital = x. A’s capital = x + 375.",
        "formula": "[(x + 375) × 8] / [x × 4] = 4 / 1"
      },
      {
        "num": 3,
        "title": "Solve for B’s Capital (x)",
        "desc": "Simplify the fraction (8 ÷ 4 = 2):",
        "calcs": [
          "2(x + 375) / x = 4",
          "(x + 375) / x = 2",
          "x + 375 = 2x ➔ x = ₹375"
        ]
      }
    ],
    "resultExplanation": "The capital contributed by B is ₹375, matching option B."
  },
  "part_q12": {
    "category": "deduction_special",
    "title": "Return on Capital Percentage Shift with Equal Remainder",
    "table": {
      "headers": [
        "Partner",
        "Profit Fraction",
        "Normalized Ratio",
        "Capital Share"
      ],
      "rows": [
        [
          "Partner A",
          "2/7 = 4/14",
          "4 parts",
          "₹4,800"
        ],
        [
          "Partner B",
          "(1/2) × 5/7 = 5/14",
          "5 parts",
          "₹6,000"
        ],
        [
          "Partner C",
          "(1/2) × 5/7 = 5/14",
          "5 parts",
          "₹6,000"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Determine Profit Fractions for All Partners",
        "desc": "A receives 2/7. Remaining profit = 1 − 2/7 = 5/7. B and C share the remainder equally:",
        "formula": "B = C = (1/2) × (5/7) = 5/14 ➔ A : B : C = 4/14 : 5/14 : 5/14 = 4 : 5 : 5"
      },
      {
        "num": 2,
        "title": "Link Percentage Increase in Profit Rate to A’s Capital",
        "desc": "A’s income increases by ₹240 when overall return rate rises from 10% to 15% (an increase of 5% on capital):",
        "formula": "5% of Capital_A = 240 ➔ 0.05 × Capital_A = 240 ➔ Capital_A = 240 ÷ 0.05 = ₹4,800"
      },
      {
        "num": 3,
        "title": "Calculate Capitals of B and C Using Capital Ratio",
        "desc": "Since capitals are in the ratio A : B = 4 : 5:",
        "calcs": [
          "Capital_B = Capital_C = 4,800 × (5 ÷ 4)",
          "Capital_B = 1,200 × 5 = ₹6,000"
        ]
      }
    ],
    "resultExplanation": "The capitals invested by B and C each are ₹6,000, matching option D."
  },
  "part_q13": {
    "category": "deduction_special",
    "title": "Partial Equal Split & Capital-Based Interest Allocation",
    "table": {
      "headers": [
        "Component",
        "Percentage of Total Profit (P)",
        "Allocation Rule"
      ],
      "rows": [
        [
          "Equal Split Portion",
          "40% of P (0.40P)",
          "Divided equally ➔ Creates 0 difference between partners"
        ],
        [
          "Interest on Capital",
          "60% of P (0.60P)",
          "Divided in ratio of capitals ➔ Generates the ₹450 difference"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Simplify the Capital Ratio",
        "desc": "Capitals invested = ₹26,000 and ₹16,250.",
        "formula": "Ratio = 26,000 : 16,250 = (divide by 3,250) ➔ 8 : 5 (Total parts = 13)"
      },
      {
        "num": 2,
        "title": "Analyze the Source of Profit Difference",
        "desc": "The 40% divided equally contributes equally to both, creating zero difference. The ₹450 difference comes solely from the remaining 60% (0.60P) distributed in the ratio 8 : 5."
      },
      {
        "num": 3,
        "title": "Formulate Difference Equation",
        "desc": "Difference fraction = (8 − 5) / (8 + 5) = 3 / 13 of the 60% profit pool:",
        "formula": "Difference = (3 / 13) × 0.60P = (3 / 13) × (3 / 5)P = (9 / 65)P"
      },
      {
        "num": 4,
        "title": "Solve for Total Business Profit (P)",
        "desc": "Set the fraction equal to ₹450:",
        "calcs": [
          "(9 / 65)P = 450",
          "P = (450 × 65) ÷ 9 = 50 × 65 = ₹3,250"
        ]
      }
    ],
    "resultExplanation": "The total profit made in the business is ₹3,250, matching option A."
  },
  "part_q14": {
    "category": "deduction_special",
    "title": "Pre-Distribution Charity Deduction & Total Profit Deduction",
    "table": {
      "headers": [
        "Partition",
        "Percentage of Total (P)",
        "Status"
      ],
      "rows": [
        [
          "Charity Deduction",
          "10% of P (0.10P)",
          "Deducted off the top before sharing"
        ],
        [
          "Distributable Pool",
          "90% of P (0.90P)",
          "Divided between A and B in ratio 5 : 3"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Calculate Distributable Profit Pool",
        "desc": "Let Total Profit = P. 10% goes to charity, leaving 90% (0.90P) for distribution."
      },
      {
        "num": 2,
        "title": "Express A’s Share of Distributable Profit",
        "desc": "Investment ratio A : B = 5 : 3 (Total parts = 5 + 3 = 8). A receives 5/8 of the distributable pool:",
        "formula": "A’s Share = (5 / 8) × 0.90P = 900"
      },
      {
        "num": 3,
        "title": "Solve for Total Profit (P)",
        "desc": "Rearrange and isolate P:",
        "calcs": [
          "(4.5P) / 8 = 900",
          "4.5P = 900 × 8 = 7,200",
          "P = 7,200 ÷ 4.5 = ₹1,600"
        ]
      }
    ],
    "resultExplanation": "The total profit generated by the business is ₹1,600, matching option A."
  },
  "part_q17": {
    "category": "deduction_special",
    "title": "Working Partner Salary Remuneration & Remaining Capital Split",
    "table": {
      "headers": [
        "Partner",
        "Capital (₹)",
        "Capital Ratio",
        "Total Remuneration (1 Year)"
      ],
      "rows": [
        [
          "Partner A (Managing)",
          "₹3,000",
          "3 parts",
          "₹10/month × 12 = ₹120 salary"
        ],
        [
          "Partner B (Sleeping)",
          "₹4,000",
          "4 parts",
          "₹0 salary (Profit share only)"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Calculate A’s Annual Remuneration (Salary)",
        "desc": "A receives ₹10 per month as salary for managing the business:",
        "formula": "Annual Salary = 10 × 12 = ₹120"
      },
      {
        "num": 2,
        "title": "Deduct Salary to Find A’s Profit Share from Investments",
        "desc": "A received a total of ₹390 in the year. Subtracting salary gives A’s profit share:",
        "formula": "A’s Investment Profit = 390 − 120 = ₹270"
      },
      {
        "num": 3,
        "title": "Determine Investment Ratio A : B",
        "desc": "Capitals are ₹3,000 and ₹4,000:",
        "formula": "Ratio A : B = 3,000 : 4,000 = 3 : 4"
      },
      {
        "num": 4,
        "title": "Calculate Value of 1 Ratio Part and B’s Profit Share",
        "desc": "A’s 3 parts = ₹270 ➔ 1 part = 270 ÷ 3 = ₹90:",
        "formula": "B’s Share = 4 parts × 90 = ₹360"
      }
    ],
    "resultExplanation": "Partner B receives ₹360 from the business profit, exactly matching option B."
  },
  "part_q18": {
    "category": "deduction_special",
    "title": "Linear Ratio Difference Equation",
    "table": {
      "headers": [
        "Partner",
        "Ratio Allocation",
        "Sub-Group Sum"
      ],
      "rows": [
        [
          "Partner A",
          "2 parts",
          "A + B = 2 + 3 = 5 parts"
        ],
        [
          "Partner B",
          "3 parts",
          "—"
        ],
        [
          "Partner C",
          "7 parts",
          "C alone = 7 parts"
        ]
      ]
    },
    "steps": [
      {
        "num": 1,
        "title": "Establish the Ratio Structure",
        "desc": "A sum of money is divided among A, B, and C in the ratio 2 : 3 : 7."
      },
      {
        "num": 2,
        "title": "Formulate the Given Difference Equation",
        "desc": "Share of (A + B) = 2 + 3 = 5 parts. Share of C = 7 parts. C exceeds (A + B) by 1,500:",
        "formula": "Difference = 7 parts − 5 parts = 2 parts = 1,500"
      },
      {
        "num": 3,
        "title": "Solve for One Part and Determine A’s Share",
        "desc": "2 parts = 1,500 ➔ 1 part = 1,500 ÷ 2 = ₹750:",
        "formula": "A’s share = 2 parts × 750 = ₹1,500"
      }
    ],
    "resultExplanation": "A’s share in the sum of money is ₹1,500, matching option B."
  }
};

  function renderPartnership(q) {
    const correctAns = q.correct || "";
    const sol = PARTNERSHIP_SOLUTIONS_REGISTRY[q.id];

    // If explicit structured solution exists in registry
    if (sol) {
      // Step 1 Table
      let tableHtml = "";
      if (sol.table) {
        tableHtml = `
          <div class="part-given-card">
            <div class="pgc-header">Step 1: Identify Given Information</div>
            <table class="pgc-table">
              <thead>
                <tr>
                  ${sol.table.headers.map(h => `<th>${escape(h)}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${sol.table.rows.map(r => `
                  <tr>
                    ${r.map(c => `<td>${escape(c)}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      // Step-by-step mathematical flow
      let stepsHtml = "";
      if (sol.steps) {
        stepsHtml = `
          <div class="part-steps-flow">
            ${sol.steps.map(s => `
              <div class="part-step-card">
                <div class="psc-head">
                  <span class="psc-badge">Step ${s.num}</span>
                  <strong class="psc-card-title">${escape(s.title)}</strong>
                </div>
                <p class="psc-desc">${escape(s.desc)}</p>
                ${s.formula ? `<div class="psc-formula-box"><code>${escape(s.formula)}</code></div>` : ''}
                ${s.calcs ? `
                  <div class="psc-calcs-list">
                    ${s.calcs.map(c => `<div class="psc-calc-line">➔ <code>${escape(c)}</code></div>`).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        `;
      }

      // Distribution bar (for questions that partition profit)
      let distHtml = "";
      if (sol.distribution) {
        distHtml = `
          <div class="part-distribution-card">
            <div class="pdc-header">Profit / Capital Share Allocation:</div>
            <div class="pdc-bar-wrapper">
              <div class="pdc-bar">
                ${sol.distribution.map(d => `
                  <div class="pdc-segment" style="width: ${d.pct}%; background: ${d.color};" title="${escape(d.name)}: ${escape(d.val)} (${d.pct}%)">
                    <span>${escape(d.name)} (${escape(d.val)})</span>
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
            <span class="vis-label">Partnership Analysis — ${escape(sol.title)}</span>
            <span class="vis-module-tag">Step-by-Step Solution</span>
          </div>

          ${tableHtml}
          ${stepsHtml}
          ${distHtml}

          <div class="part-conclusion-card">
            <span class="pcc-icon">🎯</span>
            <span class="pcc-text">${escape(sol.resultExplanation)}</span>
          </div>

          <div class="dir-res-banner">
            <span class="drb-label">Resolved Target Answer:</span>
            <strong class="drb-val highlight-gold">${escape(correctAns)}</strong>
          </div>
        </div>
      `;
    }

    // Dynamic Fallback
    return `
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
          <strong class="drb-val highlight-gold">${escape(correctAns)}</strong>
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
  // 13. ODD ONE OUT VISUALIZER (mod13) — Anomaly Detection & Positional Spectrum
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
          <span class="vis-module-tag">Odd One Out</span>
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

    // 13. Odd One Out
    if (modId === "mod13") {
      return renderOddManOut(q);
    }

    // 14. Syllogism
    if (modId === "mod14") {
      return renderSyllogismVenn(q);
    }

    // 15. FA1 Questions — route by topic type to the dedicated visualizers
    if (modId === "mod15") {
      switch (q.type_id) {
        case "type_1": return renderBloodRelation(q);
        case "type_2": return renderCodedRelation(q);
        case "type_3": return renderDirectionSense(q);
      }
    }

    // 16. ST1 Questions — route by topic type to the dedicated visualizers
    if (modId === "mod16") {
      switch (q.type_id) {
        case "type_1": return renderNumberSystem(q);
        case "type_2": return renderHcfLcm(q);
        case "type_3": return renderAverage(q);
        case "type_4": return renderRemainderTheorem(q);
      }
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

