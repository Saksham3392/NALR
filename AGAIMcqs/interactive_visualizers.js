// 5 Enhanced Interactive Simulators for Deep Conceptual Mastery

const Visualizers = {
  // 1. Module 1: Fully Clickable Self-Attention Heatmap Simulator
  renderAttentionHeatmap(containerId, d_k = 64) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const words = ["The", "animal", "didn't", "cross", "street", "because", "it", "was", "tired"];
    const N = words.length;

    const matrix = [
      [0.40, 0.25, 0.05, 0.05, 0.10, 0.05, 0.02, 0.03, 0.05], // The
      [0.10, 0.45, 0.05, 0.10, 0.05, 0.05, 0.05, 0.05, 0.10], // animal
      [0.05, 0.10, 0.50, 0.20, 0.05, 0.05, 0.02, 0.01, 0.02], // didn't
      [0.05, 0.15, 0.15, 0.45, 0.15, 0.02, 0.01, 0.01, 0.01], // cross
      [0.10, 0.05, 0.05, 0.20, 0.45, 0.05, 0.02, 0.03, 0.05], // street
      [0.05, 0.05, 0.05, 0.05, 0.05, 0.40, 0.15, 0.05, 0.15], // because
      [0.02, 0.72, 0.01, 0.02, 0.03, 0.02, 0.05, 0.01, 0.12], // it (72% to animal!)
      [0.02, 0.10, 0.02, 0.02, 0.02, 0.02, 0.10, 0.40, 0.30], // was
      [0.02, 0.30, 0.01, 0.02, 0.02, 0.03, 0.15, 0.15, 0.30]  // tired
    ];

    const explanations = {
      0: "Query 'The' allocates attention to its noun 'animal' (25%) and 'street' (10%).",
      1: "Query 'animal' focuses on itself (45%), its action 'cross' (10%), and its state 'tired' (10%).",
      2: "Query \"didn't\" focuses on the verb 'cross' (20%) to negate the action.",
      3: "Query 'cross' connects the subject 'animal' (15%) and the object 'street' (15%).",
      4: "Query 'street' connects with the verb 'cross' (20%) and determiner 'The' (10%).",
      5: "Query 'because' connects the cause to the effect across clauses.",
      6: "🌟 <strong>Coreference Resolution:</strong> Query <strong>'it'</strong> gives <strong>72% attention to 'animal'</strong>! Self-attention connects pronouns to antecedents automatically without manual grammar rules.",
      7: "Query 'was' links 'it' with the predicate adjective 'tired' (30%).",
      8: "Query 'tired' links directly back to 'animal' (30%) who possesses the state of fatigue."
    };

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🎛️ Clickable Self-Attention Matrix & Sentence Inspector</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Key Dimension = ${d_k} | Scale 1/√${d_k} = ${(1/Math.sqrt(d_k)).toFixed(3)}</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          👉 <strong>Click on any word token below</strong> to see how its Query distributes attention across the sentence:
        </p>

        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;" id="queryWordPillBar">
          ${words.map((w, idx) => `
            <button class="btn-minimal-secondary query-pill-btn ${idx === 6 ? 'btn-minimal-primary active-pill' : ''}" data-idx="${idx}" style="cursor:pointer;">
              ${w}
            </button>
          `).join('')}
        </div>

        <div id="selectedQueryDetailsCard" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); border-radius:8px; padding:16px 20px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="font-size:15px; color:var(--primary-blue);" id="selectedQueryWordTitle">Selected Query: "it"</strong>
            <span style="font-size:12px; color:var(--emerald-green-text); font-weight:800; background:var(--emerald-green-bg); padding:3px 8px; border-radius:4px;">Row Sum: 100.0%</span>
          </div>
          <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;" id="selectedQueryExplanation">
            ${explanations[6]}
          </p>
          <div class="prob-bars-container" id="queryAttentionBarsArea"></div>
        </div>

        <div style="overflow-x: auto;">
          <table class="heatmap-table" id="heatmapInteractiveTable">
            <thead>
              <tr>
                <th>Query \\ Key</th>
                ${words.map(w => `<th>${w}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${words.map((w, i) => `
                <tr class="heatmap-row ${i === 6 ? 'active-matrix-row' : ''}" data-row="${i}" style="cursor:pointer;">
                  <th style="background:${i === 6 ? 'var(--primary-blue)' : 'var(--card-sub-bg)'}; color:${i === 6 ? '#ffffff' : 'var(--ink-primary)'};">${w}</th>
                  ${matrix[i].map((val, j) => {
                    const bg = `rgba(37, 99, 235, ${Math.min(1, val)})`;
                    const color = val > 0.35 ? '#ffffff' : 'var(--ink-primary)';
                    return `<td style="background:${bg}; color:${color}; font-weight:750;" data-r="${i}" data-c="${j}" title="${words[i]} -> ${words[j]}: ${(val*100).toFixed(0)}%">${val.toFixed(2)}</td>`;
                  }).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.innerHTML = html;

    function updateSelectedQuery(rowIdx) {
      const w = words[rowIdx];
      const rowVals = matrix[rowIdx];

      container.querySelector("#selectedQueryWordTitle").textContent = `Selected Query Word: "${w}"`;
      container.querySelector("#selectedQueryExplanation").innerHTML = explanations[rowIdx];

      const barsContainer = container.querySelector("#queryAttentionBarsArea");
      barsContainer.innerHTML = words.map((kWord, kIdx) => {
        const pct = (rowVals[kIdx] * 100).toFixed(1);
        const isHighlight = rowVals[kIdx] >= 0.25;
        return `
          <div class="prob-bar-row">
            <span class="prob-bar-label" style="${isHighlight ? 'color:var(--primary-blue); font-weight:850;' : ''}">${kWord}</span>
            <div class="prob-bar-fill-track">
              <div class="prob-bar-fill-val" style="width: ${pct}%; background:${isHighlight ? 'linear-gradient(90deg, #2563eb, #10b981)' : 'var(--ink-muted)'};"></div>
            </div>
            <span class="prob-bar-percent" style="${isHighlight ? 'color:var(--primary-blue); font-weight:850;' : ''}">${pct}%</span>
          </div>
        `;
      }).join('');

      container.querySelectorAll(".query-pill-btn").forEach(p => {
        if (parseInt(p.getAttribute("data-idx")) === rowIdx) {
          p.className = "btn-minimal-primary query-pill-btn active-pill";
        } else {
          p.className = "btn-minimal-secondary query-pill-btn";
        }
      });

      container.querySelectorAll(".heatmap-row").forEach(tr => {
        const r = parseInt(tr.getAttribute("data-row"));
        const th = tr.querySelector("th");
        if (r === rowIdx) {
          tr.classList.add("active-matrix-row");
          th.style.background = "var(--primary-blue)";
          th.style.color = "#ffffff";
        } else {
          tr.classList.remove("active-matrix-row");
          th.style.background = "var(--card-sub-bg)";
          th.style.color = "var(--ink-primary)";
        }
      });
    }

    container.querySelectorAll(".query-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"));
        updateSelectedQuery(idx);
      });
    });

    container.querySelectorAll(".heatmap-row").forEach(row => {
      row.addEventListener("click", () => {
        const r = parseInt(row.getAttribute("data-row"));
        updateSelectedQuery(r);
      });
    });

    updateSelectedQuery(6);
  },

  // 2. Module 2: Multi-Head Subspace Attention Inspector
  renderMultiHeadInspector(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🎛️ Multi-Head Attention Subspace Inspector</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Model Dimension = 768 | 12 Heads | Head Dimension = 64</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Click any attention head below to inspect which linguistic relationship its subspace specializes in:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <button class="btn-minimal-primary mha-head-btn active" data-head="1">Head 1: Syntax & Grammar</button>
            <button class="btn-minimal-secondary mha-head-btn" data-head="2">Head 2: Pronoun Coreference</button>
            <button class="btn-minimal-secondary mha-head-btn" data-head="3">Head 3: Direct Objects</button>
            <button class="btn-minimal-secondary mha-head-btn" data-head="4">Head 4: Punctuation</button>
          </div>
        </div>
        <div id="mhaHeadDetailsArea" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7;">
          <strong style="color:var(--primary-blue); font-size:15px;">Head 1 Subspace Specialization (Syntax & Grammar):</strong><br>
          • Query & Key Projections: W_Q¹, W_K¹ map 768-dim input into 64-dim subspace.<br>
          • Learned Focus: Attends from nouns to adjacent verbs and prepositions.<br>
          • Example: In 'The bank approved the loan', Head 1 connects 'bank' to 'approved'.
        </div>
      </div>
    `;

    container.innerHTML = html;

    const btns = container.querySelectorAll(".mha-head-btn");
    const details = container.querySelector("#mhaHeadDetailsArea");

    const headInfos = {
      "1": "<strong style='color:var(--primary-blue); font-size:15px;'>Head 1 Subspace Specialization (Syntax & Grammar):</strong><br>• Query & Key Projections: W_Q¹, W_K¹ map 768-dim input into 64-dim subspace.<br>• Learned Focus: Attends from nouns to adjacent verbs and prepositions.<br>• Example: In 'The bank approved the loan', Head 1 connects 'bank' to 'approved'.",
      "2": "<strong style='color:var(--primary-blue); font-size:15px;'>Head 2 Subspace Specialization (Pronoun Coreference):</strong><br>• Query & Key Projections: W_Q², W_K² specialize in long-distance pronoun binding.<br>• Learned Focus: Connects pronouns ('it', 'she', 'they') back to original antecedent nouns across paragraphs.<br>• Example: In 'The dog ran because it was happy', Head 2 connects 'it' directly to 'dog'.",
      "3": "<strong style='color:var(--primary-blue); font-size:15px;'>Head 3 Subspace Specialization (Direct Objects):</strong><br>• Query & Key Projections: W_Q³, W_K³ specialize in action-receiver connections.<br>• Learned Focus: Connects transitive verbs to the entity receiving the action.<br>• Example: In 'He ate an apple', Head 3 connects 'ate' directly to 'apple'.",
      "4": "<strong style='color:var(--primary-blue); font-size:15px;'>Head 4 Subspace Specialization (Punctuation & Delimiters):</strong><br>• Query & Key Projections: W_Q⁴, W_K⁴ specialize in sentence boundaries and periods.<br>• Learned Focus: Distributes background attention to period and separator tokens to track clause boundaries."
    };

    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        btns.forEach(b => {
          b.className = "btn-minimal-secondary mha-head-btn";
        });
        btn.className = "btn-minimal-primary mha-head-btn active";
        const h = btn.getAttribute("data-head");
        details.innerHTML = headInfos[h];
      });
    });
  },

  // 3. Module 5: ViT Interactive 14x14 Patch Slicer with Antigravity Mode & Canvas Flower
  renderViTPatchSlicer(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let isAntigravity = true;
    let flowerType = 0; // 0 = Passionflower, 1 = Neon Lotus, 2 = Sunflower

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🧩 Interactive ViT Slicer Simulator (224×224 Image) with Antigravity Mode</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">14 × 14 = 196 Patches</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Currently displaying with simulated <strong>Antigravity Effect</strong>.<br>
          Hover or click any patch in the 14×14 grid below to inspect its linear projection pipeline into token embeddings, viewed with an simulated <strong>Antigravity perspective</strong>:
        </p>

        <div class="vit-visual-wrapper">
          <!-- 224x224 Simulated Image Canvas with 14x14 Grid -->
          <div class="vit-image-container antigravity-active" id="vitImageWrapper">
            <canvas id="vitFlowerCanvas" class="vit-flower-canvas" width="280" height="280"></canvas>
            <div class="vit-grid-overlay" id="vitGridOverlay"></div>
          </div>

          <!-- Controls & Antigravity Toggle -->
          <div style="display:flex; flex-direction:column; gap:12px; align-items:center;">
            <div style="background:var(--card-sub-bg); border:1.5px solid var(--purple-accent); padding:12px 18px; border-radius:10px; display:flex; flex-direction:column; gap:10px; text-align:center;">
              <label style="display:flex; align-items:center; gap:8px; font-weight:800; font-size:13px; cursor:pointer; color:var(--purple-accent);">
                <input type="checkbox" id="antigravityToggleCheck" checked style="accent-color:var(--purple-accent); width:16px; height:16px;" />
                Antigravity Mode
              </label>
              <button class="btn-minimal-secondary" id="btnNewFlowerGraphic" style="font-size:12px; padding:5px 12px;">
                🌸 Change Flower Visual
              </button>
            </div>
          </div>

          <!-- Inspection Panel -->
          <div style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:18px 22px; border-radius:10px; font-size:13.5px; max-width:380px; line-height:1.7; flex:1;" id="vitPatchDetails">
            <strong style="color:var(--primary-blue); font-size:15px;" id="vitCardTitle">Selected: Patch #161 (Floating Petal Edge)</strong><br>
            • <strong>Grid Position:</strong> Row 12, Column 7<br>
            • <strong>Raw Pixel Numbers:</strong> 16 × 16 × 3 = <strong>768 scalar values</strong><br>
            • <strong>Linear Projection:</strong> Projected into vector (Dimension D = 768)<br>
            • <strong>Antigravity Effect:</strong> The selected patch is rendered with a 20% spatial displacement simulation, with other patches showing similar drift. Linear projection still calculates from the original grid coordinates for consistency, but the visual rendering shows floating features.<br>
            • <strong>Total Sequence:</strong> 196 Patches + 1 Classification Token = <strong>197 Tokens</strong>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const canvas = container.querySelector("#vitFlowerCanvas");
    const ctx = canvas.getContext("2d");
    const gridOverlay = container.querySelector("#vitGridOverlay");
    const wrapper = container.querySelector("#vitImageWrapper");
    const toggle = container.querySelector("#antigravityToggleCheck");
    const btnNew = container.querySelector("#btnNewFlowerGraphic");
    const details = container.querySelector("#vitPatchDetails");

    function drawFlower(type) {
      ctx.clearRect(0, 0, 280, 280);
      const cx = 140, cy = 140;

      ctx.fillStyle = "#090d16";
      ctx.fillRect(0, 0, 280, 280);

      const glow = ctx.createRadialGradient(cx, cy, 20, cx, cy, 130);
      glow.addColorStop(0, type === 0 ? "rgba(168, 85, 247, 0.45)" : (type === 1 ? "rgba(56, 189, 248, 0.45)" : "rgba(234, 179, 8, 0.45)"));
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, 280, 280);

      const numPetals = type === 0 ? 16 : (type === 1 ? 12 : 24);
      for (let i = 0; i < numPetals; i++) {
        const angle = (i * 2 * Math.PI) / numPetals;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-25, 50, -20, 110, 0, 125);
        ctx.bezierCurveTo(20, 110, 25, 50, 0, 0);

        const grad = ctx.createLinearGradient(0, 0, 0, 125);
        if (type === 0) {
          grad.addColorStop(0, "#fdf4ff");
          grad.addColorStop(0.5, "#d946ef");
          grad.addColorStop(1, "#701a75");
        } else if (type === 1) {
          grad.addColorStop(0, "#f0fdfa");
          grad.addColorStop(0.5, "#06b6d4");
          grad.addColorStop(1, "#164e63");
        } else {
          grad.addColorStop(0, "#fef08a");
          grad.addColorStop(0.5, "#eab308");
          grad.addColorStop(1, "#713f12");
        }

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.4)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      ctx.beginPath();
      ctx.arc(cx, cy, 32, 0, Math.PI * 2);
      ctx.fillStyle = type === 0 ? "#a3e635" : (type === 1 ? "#fbbf24" : "#451a03");
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let j = 0; j < 8; j++) {
        const a = (j * 2 * Math.PI) / 8;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(a);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 24);
        ctx.strokeStyle = "#e11d48";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 24, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#fbbf24";
        ctx.fill();
        ctx.restore();
      }
    }

    gridOverlay.innerHTML = "";
    for (let p = 1; p <= 196; p++) {
      const cell = document.createElement("div");
      cell.className = "vit-patch-cell";
      cell.setAttribute("data-patch", p);
      if (p === 161) cell.classList.add("active-patch");

      const dx = (Math.random() * 8 - 4).toFixed(1) + "px";
      const dy = (Math.random() * 10 - 5).toFixed(1) + "px";
      const dr = (Math.random() * 4 - 2).toFixed(1) + "deg";
      cell.style.setProperty("--drift-x", dx);
      cell.style.setProperty("--drift-y", dy);
      cell.style.setProperty("--drift-r", dr);

      gridOverlay.appendChild(cell);
    }

    function selectPatch(patchNum) {
      gridOverlay.querySelectorAll(".vit-patch-cell").forEach(c => {
        if (parseInt(c.getAttribute("data-patch")) === patchNum) {
          c.classList.add("active-patch");
        } else {
          c.classList.remove("active-patch");
        }
      });

      const row = Math.ceil(patchNum / 14);
      const col = ((patchNum - 1) % 14) + 1;
      let label = "Floating Background Token";
      if (row >= 4 && row <= 11 && col >= 4 && col <= 11) label = "Floating Petal Edge & Core";
      else if (row >= 2 && row <= 13 && col >= 2 && col <= 13) label = "Floating Petal Tip";

      details.innerHTML = `
        <strong style="color:var(--primary-blue); font-size:15px;">Selected: Patch #${patchNum} (${label})</strong><br>
        • <strong>Grid Position:</strong> Row ${row}, Column ${col}<br>
        • <strong>Raw Pixel Numbers:</strong> 16 × 16 × 3 = <strong>768 scalar values</strong><br>
        • <strong>Linear Projection:</strong> Projected into vector (Dimension D = 768)<br>
        • <strong>Antigravity Effect:</strong> The selected patch is rendered with a 20% spatial displacement simulation, with other patches showing similar drift. Linear projection still calculates from the original grid coordinates for consistency, but the visual rendering shows floating features.<br>
        • <strong>Total Sequence:</strong> 196 Patches + 1 Classification Token = <strong>197 Tokens</strong>
      `;
    }

    gridOverlay.addEventListener("mouseover", (e) => {
      const cell = e.target.closest(".vit-patch-cell");
      if (cell) selectPatch(parseInt(cell.getAttribute("data-patch")));
    });

    gridOverlay.addEventListener("click", (e) => {
      const cell = e.target.closest(".vit-patch-cell");
      if (cell) selectPatch(parseInt(cell.getAttribute("data-patch")));
    });

    toggle.addEventListener("change", (e) => {
      isAntigravity = e.target.checked;
      wrapper.classList.toggle("antigravity-active", isAntigravity);
    });

    btnNew.addEventListener("click", () => {
      flowerType = (flowerType + 1) % 3;
      drawFlower(flowerType);
    });

    drawFlower(0);
    selectPatch(161);
  },

  // 4. Module 6: LLM Temperature & Top-p Probability Simulator
  renderTemperatureSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🎚️ Live LLM Temperature & Top-p Probability Simulator</h4>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Prompt: <em>"The capital of France is"</em>. Move the temperature slider to see how next-token probabilities shift in real time:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <label>Temperature (T):</label>
            <input type="range" min="0.1" max="1.5" step="0.1" value="0.7" id="tempSliderInput" class="sim-slider" />
            <span id="tempSliderVal" style="color:var(--primary-blue); font-weight:800;">0.7</span>
          </div>
          <span style="font-size:12px; color:var(--ink-muted);">(Low = Deterministic & Strict | High = Creative & Diverse)</span>
        </div>
        <div class="prob-bars-container" id="probBarsRenderArea"></div>
      </div>
    `;

    container.innerHTML = html;

    const slider = container.querySelector("#tempSliderInput");
    const valLabel = container.querySelector("#tempSliderVal");
    const barsArea = container.querySelector("#probBarsRenderArea");

    const rawLogits = [
      { word: "Paris", logit: 6.2 },
      { word: "Lyon", logit: 3.1 },
      { word: "Marseille", logit: 2.8 },
      { word: "a", logit: 2.2 },
      { word: "located", logit: 1.5 }
    ];

    function updateBars(T) {
      valLabel.textContent = T.toFixed(1);
      const exps = rawLogits.map(item => Math.exp(item.logit / T));
      const sumExp = exps.reduce((a, b) => a + b, 0);
      const probs = rawLogits.map((item, idx) => ({
        word: item.word,
        pct: (exps[idx] / sumExp) * 100
      }));

      barsArea.innerHTML = probs.map(p => `
        <div class="prob-bar-row">
          <span class="prob-bar-label">"${p.word}"</span>
          <div class="prob-bar-fill-track">
            <div class="prob-bar-fill-val" style="width: ${p.pct}%;"></div>
          </div>
          <span class="prob-bar-percent">${p.pct.toFixed(1)}%</span>
        </div>
      `).join('');
    }

    slider.addEventListener("input", (e) => updateBars(parseFloat(e.target.value)));
    updateBars(0.7);
  },

  // 5. Module 8: LoRA Parameter & VRAM Savings Calculator
  renderLoRACalculator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🧮 Interactive LoRA Rank (r) & VRAM Savings Calculator</h4>
        </div>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <label>Matrix Dimension (d):</label>
            <select id="loraDimSelect" style="padding:5px 10px; border-radius:4px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--ink-primary);">
              <option value="4096" selected>4096 (LLaMA-7B)</option>
              <option value="8192">8192 (LLaMA-70B)</option>
              <option value="1024">1024 (GPT-2 Large)</option>
              <option value="768">768 (BERT-Base)</option>
            </select>
          </div>
          <div class="sim-control-group">
            <label>LoRA Rank (r):</label>
            <input type="range" min="1" max="64" step="1" value="8" id="loraRankSlider" class="sim-slider" />
            <span id="loraRankVal" style="color:var(--primary-blue); font-weight:800;">8</span>
          </div>
        </div>
        <div id="loraCalcResults" style="background:var(--card-sub-bg); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const dimSelect = container.querySelector("#loraDimSelect");
    const rankSlider = container.querySelector("#loraRankSlider");
    const rankLabel = container.querySelector("#loraRankVal");
    const resultsArea = container.querySelector("#loraCalcResults");

    function calcLoRA() {
      const d = parseInt(dimSelect.value);
      const r = parseInt(rankSlider.value);
      rankLabel.textContent = r;

      const baseParams = d * d;
      const loraParams = 2 * r * d;
      const reductionPct = ((1 - (loraParams / baseParams)) * 100).toFixed(2);
      const baseAdamVRAM = ((baseParams * 16) / (1024 * 1024)).toFixed(1);
      const loraAdamVRAM = ((loraParams * 16) / (1024 * 1024)).toFixed(3);

      resultsArea.innerHTML = `
        • <strong>Full Base Weight Matrix (W₀):</strong> ${d} × ${d} = <strong>${baseParams.toLocaleString()} parameters</strong> (100% Frozen 🔒)<br>
        • <strong>Trainable LoRA Matrices (A + B):</strong> 2 × ${r} × ${d} = <strong>${loraParams.toLocaleString()} parameters</strong> ✨<br>
        • <strong>Parameter Reduction:</strong> <span style="color:var(--emerald-green-text); font-weight:800;">${reductionPct}% fewer parameters trained!</span><br>
        • <strong>Optimizer VRAM for this layer:</strong> Drops from <strong>${baseAdamVRAM} MB</strong> down to just <strong>${loraAdamVRAM} MB</strong>!
      `;
    }

    dimSelect.addEventListener("change", calcLoRA);
    rankSlider.addEventListener("input", calcLoRA);
    calcLoRA();
  },

  // 6. End Term Module 1: Interactive RAG Chunking & Overlap Inspector
  renderRAGSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>📑 Interactive RAG Chunking & Overlap Boundary Simulator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Document: 120 Tokens | Dynamic Window</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Adjust the <strong>Chunk Size</strong> and <strong>Overlap</strong> sliders below to see how documents get partitioned and how boundary overlap prevents fact severance:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <label>Chunk Size (Tokens):</label>
            <input type="range" min="20" max="60" step="5" value="35" id="ragChunkSizeSlider" class="sim-slider" />
            <span id="ragChunkSizeVal" style="color:var(--primary-blue); font-weight:800;">35</span>
          </div>
          <div class="sim-control-group">
            <label>Chunk Overlap (Tokens):</label>
            <input type="range" min="0" max="25" step="5" value="10" id="ragOverlapSlider" class="sim-slider" />
            <span id="ragOverlapVal" style="color:var(--purple-accent); font-weight:800;">10</span>
          </div>
        </div>
        <div id="ragChunksVisualArea" style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;"></div>
        <div id="ragCalcResults" style="background:var(--card-sub-bg); padding:14px 18px; border-radius:8px; font-size:13.5px; line-height:1.6;"></div>
      </div>
    `;

    container.innerHTML = html;

    const sizeSlider = container.querySelector("#ragChunkSizeSlider");
    const overlapSlider = container.querySelector("#ragOverlapSlider");
    const sizeVal = container.querySelector("#ragChunkSizeVal");
    const overlapVal = container.querySelector("#ragOverlapVal");
    const visualArea = container.querySelector("#ragChunksVisualArea");
    const resultsArea = container.querySelector("#ragCalcResults");

    const sampleDoc = [
      "In", "deep", "learning,", "Retrieval-Augmented", "Generation", "connects", "parametric", "memory", "with", "external",
      "vector", "databases.", "When", "a", "patient", "blood", "pressure", "exceeds", "180", "mmHg,", "immediate",
      "administration", "of", "10mg", "Amlodipine", "is", "clinically", "advised.", "If", "boundary", "overlap", "is",
      "zero,", "the", "condition", "and", "drug", "are", "chopped", "into", "separate", "vectors.", "With", "overlap,",
      "the", "entire", "clinical", "proposition", "is", "preserved", "inside", "one", "coherent", "chunk."
    ];

    function updateRAG() {
      const chunkSize = parseInt(sizeSlider.value);
      let overlap = parseInt(overlapSlider.value);
      if (overlap >= chunkSize) overlap = chunkSize - 5;
      overlapSlider.max = chunkSize - 5;
      overlapSlider.value = overlap;

      sizeVal.textContent = chunkSize;
      overlapVal.textContent = overlap;

      const step = chunkSize - overlap;
      const chunks = [];
      let start = 0;
      while (start < sampleDoc.length) {
        const end = Math.min(sampleDoc.length, start + chunkSize);
        chunks.push({ start, end, words: sampleDoc.slice(start, end) });
        if (end === sampleDoc.length) break;
        start += step;
      }

      visualArea.innerHTML = chunks.map((c, idx) => `
        <div style="background:var(--card-bg); border:1.5px solid ${idx % 2 === 0 ? 'var(--primary-blue)' : 'var(--purple-accent)'}; border-radius:6px; padding:8px 12px; font-size:12.5px; line-height:1.5;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <strong style="color:${idx % 2 === 0 ? 'var(--primary-blue)' : 'var(--purple-accent)'};">Chunk #${idx + 1} (Tokens ${c.start + 1}–${c.end})</strong>
            <span style="font-size:11px; color:var(--ink-muted); font-weight:700;">Count: ${c.words.length} tokens</span>
          </div>
          <div style="color:var(--ink-secondary);">${c.words.join(' ')}</div>
        </div>
      `).join('');

      const totalVectors = chunks.length;
      const redundancyRatio = (((totalVectors * chunkSize) / sampleDoc.length - 1) * 100).toFixed(0);

      resultsArea.innerHTML = `
        • <strong>Total Chunks Produced:</strong> ${totalVectors} vectors indexed in ChromaDB / FAISS.<br>
        • <strong>Effective Step Size:</strong> ${chunkSize} - ${overlap} = <strong>${step} new tokens</strong> advanced per window.<br>
        • <strong>Boundary Context Trade-Off:</strong> ${overlap > 0 
          ? `<span style="color:var(--emerald-green-text); font-weight:800;">✅ Safe: Overlap preserves cross-boundary propositions intact!</span> (Storage overhead: ~${redundancyRatio}%)`
          : `<span style="color:#ef4444; font-weight:800;">⚠️ Zero Overlap: Risk of severing supporting sentences across chunks!</span>`
        }
      `;
    }

    sizeSlider.addEventListener("input", updateRAG);
    overlapSlider.addEventListener("input", updateRAG);
    updateRAG();
  },

  // 7. End Term Module 3: Interactive Agentic ReAct Reasoning Simulator
  renderAgenticReActSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const steps = [
      {
        type: "thought",
        title: "🧠 Step 1: Cognitive Thought",
        content: "I need to look up the Q3 total revenue from the corporate accounting database before calculating the applicable tax.",
        badge: "Internal Reasoning"
      },
      {
        type: "action",
        title: "🛠️ Step 2: Action (Tool Invocation)",
        content: "Calling Tool: <code>query_database(table='financials_2024', metric='revenue', quarter='Q3')</code>",
        badge: "Tool Call"
      },
      {
        type: "observation",
        title: "👁️ Step 3: Observation (Tool Output)",
        content: "Database Result Received: <code>{\"revenue\": 4200000, \"currency\": \"USD\", \"status\": \"audited\"}</code>",
        badge: "Environment Output"
      },
      {
        type: "thought",
        title: "🧠 Step 4: Closed-Loop Revision Thought",
        content: "Revenue is $4,200,000. Next, I will compute the 18% corporate tax by invoking the specialized calculator tool.",
        badge: "State Update"
      },
      {
        type: "action",
        title: "🛠️ Step 5: Action (Tool Invocation)",
        content: "Calling Tool: <code>calculator(expression='4200000 * 0.18')</code>",
        badge: "Tool Call"
      },
      {
        type: "observation",
        title: "👁️ Step 6: Observation (Tool Output)",
        content: "Calculator Output: <code>756000</code>",
        badge: "Environment Output"
      },
      {
        type: "finish",
        title: "🏁 Step 7: Goal Accomplished (Final Response)",
        content: "The audited Q3 revenue is $4,200,000. At an 18% corporate rate, the total tax liability is <strong>$756,000</strong>.",
        badge: "Final Answer"
      }
    ];

    let currentStepIdx = 0;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🤖 Live Agentic ReAct (Thought → Action → Observation) Simulator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Closed-Loop Autonomous Execution</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Goal: <em>"Calculate Q3 corporate tax liability from accounting database."</em><br>
          Click <strong>'Next ReAct Step'</strong> to observe how the AI dynamically chooses subsequent actions based on prior tool observations:
        </p>

        <div style="display:flex; gap:10px; margin-bottom:16px;">
          <button class="btn-minimal-primary" id="btnNextReActStep">Next ReAct Step →</button>
          <button class="btn-minimal-secondary" id="btnResetReActStep">🔄 Reset Loop</button>
        </div>

        <div id="reactStepsContainer" style="display:flex; flex-direction:column; gap:10px;"></div>
      </div>
    `;

    container.innerHTML = html;

    const nextBtn = container.querySelector("#btnNextReActStep");
    const resetBtn = container.querySelector("#btnResetReActStep");
    const stepsArea = container.querySelector("#reactStepsContainer");

    function renderReAct() {
      stepsArea.innerHTML = steps.slice(0, currentStepIdx + 1).map((s, idx) => {
        let borderCol = "var(--primary-blue)";
        let bg = "var(--card-sub-bg)";
        if (s.type === "action") borderCol = "var(--purple-accent)";
        if (s.type === "observation") borderCol = "var(--emerald-green)";
        if (s.type === "finish") { borderCol = "#10b981"; bg = "rgba(16, 185, 129, 0.08)"; }

        return `
          <div style="background:${bg}; border-left:4px solid ${borderCol}; border-radius:8px; padding:12px 16px; font-size:13.5px; animation: fadeIn 0.3s ease;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <strong style="color:var(--ink-primary);">${s.title}</strong>
              <span style="font-size:11px; font-weight:800; text-transform:uppercase; background:var(--card-bg); padding:2px 8px; border-radius:4px; border:1px solid var(--border-color);">${s.badge}</span>
            </div>
            <div style="color:var(--ink-secondary); line-height:1.5;">${s.content}</div>
          </div>
        `;
      }).join('');

      nextBtn.disabled = currentStepIdx >= steps.length - 1;
      nextBtn.textContent = currentStepIdx >= steps.length - 1 ? "Loop Completed ✅" : "Next ReAct Step →";
    }

    nextBtn.addEventListener("click", () => {
      if (currentStepIdx < steps.length - 1) {
        currentStepIdx++;
        renderReAct();
      }
    });

    resetBtn.addEventListener("click", () => {
      currentStepIdx = 0;
      renderReAct();
    });

    renderReAct();
  },

  // 8. ST-1 Module 1: Interactive Perceptron Decision Boundary Simulator
  renderPerceptronDecisionSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🎛️ Live Perceptron Hyperplane & Decision Boundary Simulator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Rule: w₁x₁ + w₂x₂ + b = 0</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Adjust weights <strong>w₁</strong>, <strong>w₂</strong>, and bias <strong>b</strong> to see how the decision boundary line rotates and shifts in the 2D plane:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <label>Weight w₁:</label>
            <input type="range" min="-2.0" max="2.0" step="0.1" value="0.3" id="percW1Slider" class="sim-slider" />
            <span id="percW1Val" style="color:var(--primary-blue); font-weight:800;">0.3</span>
          </div>
          <div class="sim-control-group">
            <label>Weight w₂:</label>
            <input type="range" min="-2.0" max="2.0" step="0.1" value="0.1" id="percW2Slider" class="sim-slider" />
            <span id="percW2Val" style="color:var(--purple-accent); font-weight:800;">0.1</span>
          </div>
          <div class="sim-control-group">
            <label>Bias b:</label>
            <input type="range" min="-2.0" max="2.0" step="0.1" value="0.0" id="percBSlider" class="sim-slider" />
            <span id="percBVal" style="color:var(--emerald-green-text); font-weight:800;">0.0</span>
          </div>
        </div>
        <div id="percDecisionMathArea" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:14px 18px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const w1Slider = container.querySelector("#percW1Slider");
    const w2Slider = container.querySelector("#percW2Slider");
    const bSlider = container.querySelector("#percBSlider");
    const w1Val = container.querySelector("#percW1Val");
    const w2Val = container.querySelector("#percW2Val");
    const bVal = container.querySelector("#percBVal");
    const mathArea = container.querySelector("#percDecisionMathArea");

    function updatePerc() {
      const w1 = parseFloat(w1Slider.value);
      const w2 = parseFloat(w2Slider.value);
      const b = parseFloat(bSlider.value);

      w1Val.textContent = w1.toFixed(1);
      w2Val.textContent = w2.toFixed(1);
      bVal.textContent = b.toFixed(1);

      const testX = [1, 2];
      const z = w1 * testX[0] + w2 * testX[1] + b;
      const pred = z >= 0 ? 1 : 0;

      mathArea.innerHTML = `
        • <strong>Decision Boundary Line:</strong> ${w1.toFixed(1)} x₁ + ${w2.toFixed(1)} x₂ + (${b.toFixed(1)}) = 0<br>
        • <strong>Test Point x = [1, 2]:</strong> Pre-activation z = (${w1.toFixed(1)} × 1) + (${w2.toFixed(1)} × 2) + (${b.toFixed(1)}) = <strong>${z.toFixed(2)}</strong><br>
        • <strong>Perceptron Output:</strong> ŷ = Step(${z.toFixed(2)}) = <span style="color:${pred === 1 ? 'var(--emerald-green-text)' : '#ef4444'}; font-weight:800; font-size:15px;">Class ${pred}</span> ${pred === 1 ? '✅ (Positive Region)' : '⭕ (Negative Region)'}
      `;
    }

    w1Slider.addEventListener("input", updatePerc);
    w2Slider.addEventListener("input", updatePerc);
    bSlider.addEventListener("input", updatePerc);
    updatePerc();
  },

  // 9. ST-1 Module 5: Interactive Activation Function Saturation & Gradient Vanishing Inspector
  renderActivationSaturationSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>📉 Live Activation Saturation & Vanishing Gradient Inspector</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Sigmoid vs ReLU Derivative</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Adjust the <strong>Pre-Activation (z)</strong> slider to see how Sigmoid derivative vanishes to 0 at extremes while ReLU retains a steep 1.0 gradient:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <label>Pre-Activation z:</label>
            <input type="range" min="-8.0" max="8.0" step="0.2" value="4.0" id="actZSlider" class="sim-slider" />
            <span id="actZVal" style="color:var(--primary-blue); font-weight:800;">4.0</span>
          </div>
        </div>
        <div id="actSaturationResults" style="background:var(--card-sub-bg); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const zSlider = container.querySelector("#actZSlider");
    const zVal = container.querySelector("#actZVal");
    const resultsArea = container.querySelector("#actSaturationResults");

    function updateAct() {
      const z = parseFloat(zSlider.value);
      zVal.textContent = z.toFixed(1);

      const sig = 1 / (1 + Math.exp(-z));
      const sigDeriv = sig * (1 - sig);

      const relu = Math.max(0, z);
      const reluDeriv = z > 0 ? 1.0 : 0.0;

      const isSaturated = sigDeriv < 0.05;

      resultsArea.innerHTML = `
        • <strong>Sigmoid Value σ(${z.toFixed(1)}):</strong> <strong>${sig.toFixed(4)}</strong> | Local Derivative σ'(z) = <strong>${sigDeriv.toFixed(4)}</strong> ${isSaturated ? '<span style="color:#ef4444; font-weight:800;">(⚠️ Severe Saturation! Vanishing Gradient)</span>' : '<span style="color:var(--emerald-green-text); font-weight:800;">(Active Linear Zone)</span>'}<br>
        • <strong>ReLU Value max(0, ${z.toFixed(1)}):</strong> <strong>${relu.toFixed(2)}</strong> | Local Derivative ReLU'(z) = <strong>${reluDeriv.toFixed(1)}</strong> ${reluDeriv === 1.0 ? '<span style="color:var(--emerald-green-text); font-weight:800;">(✨ 100% Gradient Highway Through 100+ Layers!)</span>' : '<span style="color:var(--ink-muted);">(Inactive / Dead Unit)</span>'}<br>
        • <strong>Backprop Gradient over 10 Stitched Layers:</strong> Sigmoid = (${sigDeriv.toFixed(3)})^{10} ≈ <strong>${Math.pow(sigDeriv, 10).toExponential(3)}</strong> (Freezes early layers!) vs ReLU = (1.0)^{10} = <strong>1.000</strong>.
      `;
    }

    zSlider.addEventListener("input", updateAct);
    updateAct();
  },

  // 10. ST-1 Module 7: Interactive CNN Kernel Slicer & Feature Extractor
  renderCNNFeatureMapSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🖼️ Live 2D Convolution Dimension & Filter Calculator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Formula: ⌊(W - K + 2P)/S⌋ + 1</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Adjust spatial resolution, kernel filter size, padding, and stride to observe how output feature map dimensions and parameter counts change dynamically:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <label>Input Size (W):</label>
            <input type="range" min="16" max="64" step="1" value="31" id="cnnWSlider" class="sim-slider" />
            <span id="cnnWVal" style="color:var(--primary-blue); font-weight:800;">31</span>
          </div>
          <div class="sim-control-group">
            <label>Kernel (K):</label>
            <select id="cnnKernelSelect" style="padding:4px 8px; border-radius:4px; border:1px solid var(--border-color); background:var(--card-bg); color:var(--ink-primary);">
              <option value="1">1 × 1</option>
              <option value="3" selected>3 × 3</option>
              <option value="5">5 × 5</option>
              <option value="7">7 × 7</option>
            </select>
          </div>
          <div class="sim-control-group">
            <label>Padding (P):</label>
            <input type="range" min="0" max="3" step="1" value="1" id="cnnPadSlider" class="sim-slider" />
            <span id="cnnPadVal" style="color:var(--purple-accent); font-weight:800;">1</span>
          </div>
          <div class="sim-control-group">
            <label>Stride (S):</label>
            <input type="range" min="1" max="3" step="1" value="2" id="cnnStrideSlider" class="sim-slider" />
            <span id="cnnStrideVal" style="color:var(--emerald-green-text); font-weight:800;">2</span>
          </div>
        </div>
        <div id="cnnDimensionsResults" style="background:var(--card-sub-bg); padding:14px 18px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const wSlider = container.querySelector("#cnnWSlider");
    const kSelect = container.querySelector("#cnnKernelSelect");
    const padSlider = container.querySelector("#cnnPadSlider");
    const sSlider = container.querySelector("#cnnStrideSlider");
    const wVal = container.querySelector("#cnnWVal");
    const padVal = container.querySelector("#cnnPadVal");
    const sVal = container.querySelector("#cnnStrideVal");
    const resultsArea = container.querySelector("#cnnDimensionsResults");

    function calcCNN() {
      const W = parseInt(wSlider.value);
      const K = parseInt(kSelect.value);
      const P = parseInt(padSlider.value);
      const S = parseInt(sSlider.value);

      wVal.textContent = W;
      padVal.textContent = P;
      sVal.textContent = S;

      const outDim = Math.floor((W - K + 2 * P) / S) + 1;
      const cIn = 8;
      const cOut = 24;
      const params = cOut * (K * K * cIn + 1);

      resultsArea.innerHTML = `
        • <strong>Output Spatial Size:</strong> ⌊(${W} - ${K} + 2×${P}) / ${S}⌋ + 1 = ⌊${W - K + 2 * P} / ${S}⌋ + 1 = <strong style="color:var(--primary-blue); font-size:15px;">${outDim} × ${outDim}</strong><br>
        • <strong>24 Filters across 8 Input Channels:</strong> 24 × (${K} × ${K} × 8 + 1) = <strong>${params.toLocaleString()} trainable parameters</strong><br>
        • <strong>If followed by 2 × 2 Max Pooling (Stride 2):</strong> Spatial size downsamples to <strong>${Math.floor(outDim / 2)} × ${Math.floor(outDim / 2)}</strong> (0 added parameters)
      `;
    }

    wSlider.addEventListener("input", calcCNN);
    kSelect.addEventListener("change", calcCNN);
    padSlider.addEventListener("input", calcCNN);
    sSlider.addEventListener("input", calcCNN);
    calcCNN();
  },

  // 11. ST-1 Module 8: Interactive ResNet Residual Bypass Highway Simulator
  renderResNetHighwaySimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🛣️ ResNet Residual Skip Connection & Gradient Highway Simulator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Rule: H(x) = F(x) + x</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Toggle the <strong>Residual Skip Connection</strong> on and off to observe how deep networks solve the degradation problem:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <button class="btn-minimal-primary resnet-toggle-btn active" id="btnResNetSkipOn">✅ Residual Skip Enabled (ResNet)</button>
            <button class="btn-minimal-secondary resnet-toggle-btn" id="btnResNetSkipOff">❌ Plain Deep Network (No Skip)</button>
          </div>
        </div>
        <div id="resnetHighwayDetails" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const btnOn = container.querySelector("#btnResNetSkipOn");
    const btnOff = container.querySelector("#btnResNetSkipOff");
    const details = container.querySelector("#resnetHighwayDetails");

    function renderResNet(enabled) {
      if (enabled) {
        btnOn.className = "btn-minimal-primary resnet-toggle-btn active";
        btnOff.className = "btn-minimal-secondary resnet-toggle-btn";
        details.innerHTML = `
          <strong style="color:var(--primary-blue); font-size:15px;">ResNet Architecture with Identity Shortcuts:</strong><br>
          • <strong>Forward Pass:</strong> H(x) = F(x) + x (Layers learn the residual difference F(x) = H(x) - x).<br>
          • <strong>Backprop Gradient Flow:</strong> dL/dx = dL/dH · (dF/dx + <strong>1.0</strong>).<br>
          • <strong>Optimization Stability:</strong> <span style="color:var(--emerald-green-text); font-weight:800;">Gradient Highway Intact!</span> Even if dF/dx vanishes to 0 in deep layers, the '+1' identity term ensures gradients flow backwards without attenuation.<br>
          • <strong>Training 152+ Layers:</strong> Zero optimization degradation; training error drops monotonically.
        `;
      } else {
        btnOff.className = "btn-minimal-primary resnet-toggle-btn active";
        btnOn.className = "btn-minimal-secondary resnet-toggle-btn";
        details.innerHTML = `
          <strong style="color:#ef4444; font-size:15px;">Plain Deep CNN (No Identity Skip Connections):</strong><br>
          • <strong>Forward Pass:</strong> H(x) = F(x) (Every layer must memorize the full transformation from scratch).<br>
          • <strong>Backprop Gradient Flow:</strong> dL/dx = dL/dH · (dF/dx).<br>
          • <strong>Degradation Failure:</strong> <span style="color:#ef4444; font-weight:800;">Severe Gradient Attenuation!</span> As depth exceeds 20-30 layers, gradients exponentially diminish to near zero, causing a 56-layer plain network to exhibit HIGHER training error than a 20-layer network!
        `;
      }
    }

    btnOn.addEventListener("click", () => renderResNet(true));
    btnOff.addEventListener("click", () => renderResNet(false));
    renderResNet(true);
  },

  // 12. ST-1 Module 11: Interactive Transfer Learning Layer Freezing & Fine-Tuning Simulator
  renderTransferLearningSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🎯 Transfer Learning Backbone Freezing & Fine-Tuning Strategy Inspector</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Pre-trained ResNet-50 Backbone</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Choose an adaptation strategy for a small target dataset to see the trade-offs between underfitting, overfitting, and optimal transfer:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <button class="btn-minimal-secondary tl-strategy-btn" data-st="frozen">1. Feature Extraction (All Frozen)</button>
            <button class="btn-minimal-primary tl-strategy-btn active" data-st="partial">2. Top-Block Fine-Tuning (Optimal ✨)</button>
            <button class="btn-minimal-secondary tl-strategy-btn" data-st="full">3. Full Backbone Unfrozen</button>
          </div>
        </div>
        <div id="tlStrategyDetails" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const btns = container.querySelectorAll(".tl-strategy-btn");
    const details = container.querySelector("#tlStrategyDetails");

    const strategies = {
      frozen: `
        <strong style="color:var(--primary-blue); font-size:15px;">Strategy 1: Feature Extraction (All Backbone Layers Frozen)</strong><br>
        • <strong>Trainable Layers:</strong> Only the newly replaced classifier head (e.g. 5 classes = 10,245 params).<br>
        • <strong>Risk:</strong> <span style="color:#d97706; font-weight:800;">Underfitting Risk!</span> If the target dataset differs from standard ImageNet textures, frozen features cannot adapt to domain-specific nuances.<br>
        • <strong>Recommended Learning Rate:</strong> η = 1e-3 on classifier head.
      `,
      partial: `
        <strong style="color:var(--emerald-green-text); font-size:15px;">Strategy 2: Partial Fine-Tuning (Top Blocks Unfrozen) — Optimal Sweet Spot!</strong><br>
        • <strong>Setup:</strong> Layers 1–3 remain frozen 🔒 (preserving universal low-level edge/texture detectors). Layer 4 + Head are unfrozen 🔓.<br>
        • <strong>Balance:</strong> <span style="color:var(--emerald-green-text); font-weight:800;">Zero Underfitting + Zero Overfitting!</span> The network adapts high-level task semantics while maintaining low parameter variance.<br>
        • <strong>Recommended Learning Rate:</strong> η_head = 1e-3, η_backbone = 1e-5 (100x smaller!) with suitable data augmentation.
      `,
      full: `
        <strong style="color:#ef4444; font-size:15px;">Strategy 3: Full Backbone Unfrozen (25.5M Parameters)</strong><br>
        • <strong>Setup:</strong> All 50 layers receive gradient updates on small target dataset.<br>
        • <strong>Risk:</strong> <span style="color:#ef4444; font-weight:800;">Severe Overfitting & Catastrophic Forgetting!</span> 25.5 million parameters quickly memorize small training sets, destroying pre-trained generalizable representations.
      `
    };

    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        btns.forEach(b => b.className = "btn-minimal-secondary tl-strategy-btn");
        btn.className = "btn-minimal-primary tl-strategy-btn active";
        const st = btn.getAttribute("data-st");
        details.innerHTML = strategies[st];
      });
    });

    details.innerHTML = strategies["partial"];
  },

  // 13. End-Term Module 1: Interactive RAG Chunking, Overlap & Vector Similarity Simulator
  renderRAGChunkingSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>📚 Interactive RAG Chunking & Boundary Overlap Simulator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Trade-off: Boundary Preservation vs Index Redundancy</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Adjust the <strong>Chunk Size</strong> and <strong>Overlap %</strong> sliders to see how text segmentation affects total vector count, boundary continuity, and retrieval fidelity:
        </p>
        <div class="sim-controls-row">
          <div class="sim-control-group">
            <label>Doc Size (tokens):</label>
            <input type="range" min="1000" max="20000" step="500" value="5000" id="ragDocSizeSlider" class="sim-slider" />
            <span id="ragDocSizeVal" style="color:var(--primary-blue); font-weight:800;">5000</span>
          </div>
          <div class="sim-control-group">
            <label>Chunk Size (C):</label>
            <input type="range" min="100" max="1000" step="50" value="400" id="ragChunkSizeSlider" class="sim-slider" />
            <span id="ragChunkSizeVal" style="color:var(--purple-accent); font-weight:800;">400</span>
          </div>
          <div class="sim-control-group">
            <label>Overlap (O %):</label>
            <input type="range" min="0" max="50" step="5" value="20" id="ragOverlapSlider" class="sim-slider" />
            <span id="ragOverlapVal" style="color:var(--emerald-green-text); font-weight:800;">20%</span>
          </div>
        </div>
        <div id="ragSimResults" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const docSlider = container.querySelector("#ragDocSizeSlider");
    const chunkSlider = container.querySelector("#ragChunkSizeSlider");
    const overlapSlider = container.querySelector("#ragOverlapSlider");
    const docVal = container.querySelector("#ragDocSizeVal");
    const chunkVal = container.querySelector("#ragChunkSizeVal");
    const overlapVal = container.querySelector("#ragOverlapVal");
    const results = container.querySelector("#ragSimResults");

    function updateRAG() {
      const doc = parseInt(docSlider.value);
      const chunk = parseInt(chunkSlider.value);
      const overlapPct = parseInt(overlapSlider.value);
      const overlap = Math.round(chunk * (overlapPct / 100));

      docVal.textContent = doc.toLocaleString();
      chunkVal.textContent = chunk;
      overlapVal.textContent = overlapPct + "% (" + overlap + " tokens)";

      const step = Math.max(1, chunk - overlap);
      const numChunks = Math.ceil((doc - overlap) / step);
      const redundancyFactor = (numChunks * chunk / doc).toFixed(2);

      let boundaryStatus = "";
      if (overlapPct === 0) {
        boundaryStatus = "<span style='color:#ef4444; font-weight:800;'>❌ 0% Overlap — High Risk of Fragmented Multi-Sentence Context!</span>";
      } else if (overlapPct <= 25) {
        boundaryStatus = "<span style='color:var(--emerald-green-text); font-weight:800;'>✨ Optimal Sweet Spot (10-25%) — Boundary sentences preserved with minimal index bloat.</span>";
      } else {
        boundaryStatus = "<span style='color:#d97706; font-weight:800;'>⚠️ High Overlap (>25%) — Excessive redundancy, increased vector storage costs & potential duplicate context passages.</span>";
      }

      results.innerHTML = `
        • <strong>Step Size per Stride:</strong> ${chunk} - ${overlap} = <strong>${step} new tokens / chunk</strong><br>
        • <strong>Total Vector Embeddings Generated:</strong> <strong>${numChunks} chunks</strong> in Vector Database (Storage Redundancy: ${redundancyFactor}× raw doc)<br>
        • <strong>Boundary Context Integrity:</strong> ${boundaryStatus}<br>
        • <strong>Cosine Similarity Ranking:</strong> When user query <em>q</em> arrives, top-k chunks are retrieved via ` + 
        `<span style="background:var(--primary-blue-bg); color:var(--primary-blue); font-weight:750; padding:2px 6px; border-radius:4px;">cos(θ) = (q · d) / (||q|| ||d||)</span>.
      `;
    }

    docSlider.addEventListener("input", updateRAG);
    chunkSlider.addEventListener("input", updateRAG);
    overlapSlider.addEventListener("input", updateRAG);
    updateRAG();
  },

  // 14. End-Term Module 3 & 4: Interactive Agentic AI ReAct Loop & Safety Control Simulator
  renderAgenticWorkflowSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentStep = 1;
    let humanInTheLoop = true;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>🤖 Interactive Agentic AI ReAct Loop & Human-in-the-Loop Simulator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Autonomous Planning, Tool Calling & Safety</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:12px;">
          Click through the steps of the <strong>Reasoning + Acting (ReAct)</strong> agent loop and toggle <strong>Human-in-the-Loop (HITL)</strong> safety verification:
        </p>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn-minimal-primary agent-step-btn" data-step="1">1. User Goal</button>
            <button class="btn-minimal-secondary agent-step-btn" data-step="2">2. Thought / Plan</button>
            <button class="btn-minimal-secondary agent-step-btn" data-step="3">3. Tool Action</button>
            <button class="btn-minimal-secondary agent-step-btn" data-step="4">4. Observation</button>
            <button class="btn-minimal-secondary agent-step-btn" data-step="5">5. Final Output</button>
          </div>
          <label style="display:flex; align-items:center; gap:8px; font-weight:800; font-size:13px; cursor:pointer; color:var(--purple-accent); background:var(--card-sub-bg); padding:6px 12px; border-radius:6px; border:1px solid var(--border-color);">
            <input type="checkbox" id="hitlToggleCheck" checked style="accent-color:var(--purple-accent); width:16px; height:16px;" />
            🛡️ Human-in-the-Loop Checkpoint
          </label>
        </div>

        <div id="agentStepDisplayBox" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7;"></div>
      </div>
    `;

    container.innerHTML = html;

    const stepBtns = container.querySelectorAll(".agent-step-btn");
    const hitlCheck = container.querySelector("#hitlToggleCheck");
    const displayBox = container.querySelector("#agentStepDisplayBox");

    const stepContents = {
      1: {
        title: "Step 1: Autonomous Goal & Task Formulation",
        color: "var(--primary-blue)",
        body: "• <strong>User Objective:</strong> 'Audit Q3 cloud spending and transfer $450 refund to customer #8812.'<br>• <strong>Agentic Property:</strong> Unlike static LLM chat, the agent decomposes broad multi-step goals into dynamic subtasks and maintains internal memory state across actions."
      },
      2: {
        title: "Step 2: Thought & Reasoning (Planning Phase)",
        color: "var(--purple-accent)",
        body: "• <strong>LLM Internal Monologue:</strong> <em>'I need to first query the Billing Database API to verify customer #8812's overcharge invoice. Then, I must formulate the refund transaction payload.'</em><br>• <strong>Strategy:</strong> Planning before acting prevents hallucinated tool parameters and loops."
      },
      3: {
        title: "Step 3: Action & Tool Invocation (Function Calling)",
        color: "#d97706",
        body: function(hitl) {
          if (hitl) {
            return "• <strong>Action Selected:</strong> <code>api.execute_refund(customer_id='8812', amount=450.00)</code><br>• <strong>🛡️ Human-in-the-Loop Intercept:</strong> <span style='color:var(--emerald-green-text); font-weight:800;'>PAUSED FOR HUMAN APPROVAL!</span> High-impact financial/destructive actions require human confirmation to enforce Responsible AI safety controls.<br>• <strong>Status:</strong> Awaiting admin signature ✅ (Approved!)";
          } else {
            return "• <strong>Action Selected:</strong> <code>api.execute_refund(customer_id='8812', amount=450.00)</code><br>• <strong>⚠️ Fully Autonomous Execution:</strong> Tool fired directly without human oversight (Zero friction, but risk of financial loss if model hallucinates arguments).";
          }
        }
      },
      4: {
        title: "Step 4: Tool Observation & Feedback Integration",
        color: "var(--emerald-green-text)",
        body: "• <strong>API Response:</strong> <code>{'status': 'SUCCESS', 'tx_id': 'TX-99812', 'balance': '$2,450'}</code><br>• <strong>Agent Reflection:</strong> Evaluates whether the observation satisfies the sub-goal. If error returned (e.g. 404), the agent dynamically re-plans with alternative queries."
      },
      5: {
        title: "Step 5: Final Grounded Response Synthesis",
        color: "var(--primary-blue)",
        body: "• <strong>Synthesized Response:</strong> 'Successfully audited Q3 spend and processed $450 refund for customer #8812 (Transaction ID: TX-99812).'<br>• <strong>Audit Trail:</strong> Full trajectory logged for transparency, compliance, and governance."
      }
    };

    function renderStep(step) {
      currentStep = step;
      stepBtns.forEach(btn => {
        if (parseInt(btn.getAttribute("data-step")) === step) {
          btn.className = "btn-minimal-primary agent-step-btn active";
        } else {
          btn.className = "btn-minimal-secondary agent-step-btn";
        }
      });

      const st = stepContents[step];
      const bodyText = typeof st.body === "function" ? st.body(humanInTheLoop) : st.body;
      displayBox.innerHTML = `
        <strong style="color:${st.color}; font-size:15px;">${st.title}</strong><br>
        ${bodyText}
      `;
    }

    stepBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        renderStep(parseInt(btn.getAttribute("data-step")));
      });
    });

    hitlCheck.addEventListener("change", (e) => {
      humanInTheLoop = e.target.checked;
      renderStep(currentStep);
    });

    renderStep(1);
  },

  // 15. ST-1 Module 14: Scaled Dot-Product Variance Engine & 1/√d_k Stability Simulator
  renderScaledDotProductVarianceSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let d_k = 64;
    let isScaled = true;

    let html = `
      <div class="interactive-simulator-card">
        <div class="sim-header">
          <h4>⚡ Live Scaled Dot-Product Variance Engine & 1/√d_k Stability Simulator</h4>
          <span style="font-size:12px; color:var(--ink-muted); font-weight:750;">Rule: Attention(Q,K,V) = Softmax(QKᵀ / √d_k) · V</span>
        </div>
        <p style="font-size:13.5px; color:var(--ink-secondary); margin-bottom:14px;">
          Explore why the scaling factor <strong>1/√d_k</strong> is mathematically required when computing attention over high-dimensional query-key vectors:
        </p>

        <div class="sim-controls-row" style="display:flex; flex-wrap:wrap; gap:16px; align-items:center; margin-bottom:16px;">
          <div class="sim-control-group">
            <label style="font-weight:750; font-size:13px;">Key Dimension (d_k):</label>
            <div style="display:flex; gap:6px;" id="sdpDkBtnGroup">
              <button class="btn-minimal-secondary dk-btn" data-dk="4">4</button>
              <button class="btn-minimal-secondary dk-btn" data-dk="16">16</button>
              <button class="btn-minimal-primary dk-btn active" data-dk="64">64 (Standard)</button>
              <button class="btn-minimal-secondary dk-btn" data-dk="256">256</button>
              <button class="btn-minimal-secondary dk-btn" data-dk="1024">1024 (LLMs)</button>
            </div>
          </div>

          <div class="sim-control-group">
            <label style="font-weight:750; font-size:13px;">Variance Normalization Mode:</label>
            <div style="display:flex; gap:6px;">
              <button class="btn-minimal-primary sdp-scale-toggle active" id="btnScaleOn">✅ Scaled (÷ √d_k)</button>
              <button class="btn-minimal-secondary sdp-scale-toggle" id="btnScaleOff">❌ Unscaled (Raw QKᵀ)</button>
            </div>
          </div>
        </div>

        <div id="sdpMathMetricsGrid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:16px;"></div>

        <div id="sdpSoftmaxComparisonBox" style="background:var(--card-sub-bg); border:1.5px solid var(--primary-blue); padding:16px 20px; border-radius:8px; font-size:13.5px; line-height:1.7; margin-bottom:16px;"></div>

        <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:8px; padding:14px 18px; font-size:13px; line-height:1.6; color:var(--ink-secondary);">
          <strong style="color:var(--primary-blue); font-size:14px;">💡 Deep Mathematical Intuition (Vaswani et al., 2017):</strong><br>
          • <strong>Variance Growth:</strong> If independent components q_i, k_i ~ N(0, 1), then q · k = Σ q_i k_i has mean 0 and variance Var(q · k) = Σ 1 = d_k, with standard deviation σ = √d_k.<br>
          • <strong>Softmax Gradient Vanishing:</strong> As d_k grows large (e.g. 64 or 1024), the raw dot products grow excessively large in magnitude. Softmax exponentiates these large values, driving the highest score to near 1.0 and all other scores to near 0.0.<br>
          • <strong>The Fix:</strong> Dividing by √d_k normalizes the variance back to <strong>1.0</strong> regardless of key dimension size, keeping softmax in steep, active gradient regions where backpropagation converges smoothly!
        </div>
      </div>
    `;

    container.innerHTML = html;

    const dkBtns = container.querySelectorAll(".dk-btn");
    const btnScaleOn = container.querySelector("#btnScaleOn");
    const btnScaleOff = container.querySelector("#btnScaleOff");
    const metricsGrid = container.querySelector("#sdpMathMetricsGrid");
    const comparisonBox = container.querySelector("#sdpSoftmaxComparisonBox");

    function renderSDP() {
      const sqrtDk = Math.sqrt(d_k);
      const scaleMultiplier = 1 / sqrtDk;
      const rawVariance = d_k;
      const effectiveVariance = isScaled ? 1.0 : rawVariance;

      // 3 candidate tokens: High Match, Medium Match, Low Match
      const rawScores = [1.2 * sqrtDk, 0.0, -1.2 * sqrtDk];
      const logits = isScaled ? [1.2, 0.0, -1.2] : rawScores;

      // Compute Softmax probabilities
      const maxLogit = Math.max(...logits);
      const expVals = logits.map(z => Math.exp(z - maxLogit));
      const sumExp = expVals.reduce((a, b) => a + b, 0);
      const probs = expVals.map(e => e / sumExp);

      // Softmax derivatives: P_i * (1 - P_i)
      const grad1 = probs[0] * (1 - probs[0]);
      const isVanished = grad1 < 0.01;

      metricsGrid.innerHTML = `
        <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:6px; padding:10px 14px;">
          <div style="font-size:11px; color:var(--ink-muted); text-transform:uppercase; font-weight:800;">Key Dimension (d_k)</div>
          <div style="font-size:18px; font-weight:850; color:var(--primary-blue);">${d_k}</div>
          <div style="font-size:12px; color:var(--ink-secondary);">Vector length per head</div>
        </div>
        <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:6px; padding:10px 14px;">
          <div style="font-size:11px; color:var(--ink-muted); text-transform:uppercase; font-weight:800;">Raw Dot-Product Variance</div>
          <div style="font-size:18px; font-weight:850; color:var(--purple-accent);">${rawVariance} (σ = ${sqrtDk.toFixed(1)})</div>
          <div style="font-size:12px; color:var(--ink-secondary);">Var(q · k) = d_k</div>
        </div>
        <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:6px; padding:10px 14px;">
          <div style="font-size:11px; color:var(--ink-muted); text-transform:uppercase; font-weight:800;">Scale Multiplier (1/√d_k)</div>
          <div style="font-size:18px; font-weight:850; color:var(--emerald-green-text);">${scaleMultiplier.toFixed(4)}</div>
          <div style="font-size:12px; color:var(--ink-secondary);">1 / √${d_k}</div>
        </div>
        <div style="background:var(--card-bg); border:1px solid var(--border-color); border-radius:6px; padding:10px 14px;">
          <div style="font-size:11px; color:var(--ink-muted); text-transform:uppercase; font-weight:800;">Operating Mode Variance</div>
          <div style="font-size:18px; font-weight:850; color:${isScaled ? 'var(--emerald-green-text)' : '#ef4444'};">${effectiveVariance.toFixed(1)}</div>
          <div style="font-size:12px; color:var(--ink-secondary);">${isScaled ? '✅ Standard Unit Variance' : '⚠️ Unstable Scaled Variance'}</div>
        </div>
      `;

      comparisonBox.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
          <strong style="color:var(--ink-primary); font-size:15px;">
            ${isScaled ? '✅ Scaled Dot-Product Dynamics (Softmax with 1/√d_k)' : '❌ Unscaled Dot-Product Dynamics (Raw Softmax)'}
          </strong>
          <span style="font-size:12px; padding:3px 10px; border-radius:4px; font-weight:800; ${isVanished ? 'background:#fee2e2; color:#b91c1c;' : 'background:var(--emerald-green-bg); color:var(--emerald-green-text);'}">
            ${isVanished ? '⚠️ Vanishing Gradient Alert: ∂S/∂z ≈ 0.0000!' : '✨ Active Gradient Highway: ∂S/∂z = ' + grad1.toFixed(3)}
          </span>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:14px;">
          <div>
            <div style="display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:3px;">
              <span><strong>Key 1 ("animal" - Strong Semantic Match):</strong> Logit = ${logits[0].toFixed(2)}</span>
              <strong style="color:var(--primary-blue);">${(probs[0] * 100).toFixed(1)}%</strong>
            </div>
            <div style="height:10px; background:var(--border-color); border-radius:5px; overflow:hidden;">
              <div style="width:${(probs[0] * 100)}%; height:100%; background:var(--primary-blue); transition:width 0.3s ease;"></div>
            </div>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:3px;">
              <span><strong>Key 2 ("street" - Neutral Match):</strong> Logit = ${logits[1].toFixed(2)}</span>
              <strong style="color:var(--purple-accent);">${(probs[1] * 100).toFixed(1)}%</strong>
            </div>
            <div style="height:10px; background:var(--border-color); border-radius:5px; overflow:hidden;">
              <div style="width:${(probs[1] * 100)}%; height:100%; background:var(--purple-accent); transition:width 0.3s ease;"></div>
            </div>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; font-size:12.5px; margin-bottom:3px;">
              <span><strong>Key 3 ("the" - Low Match):</strong> Logit = ${logits[2].toFixed(2)}</span>
              <strong style="color:var(--ink-muted);">${(probs[2] * 100).toFixed(1)}%</strong>
            </div>
            <div style="height:10px; background:var(--border-color); border-radius:5px; overflow:hidden;">
              <div style="width:${(probs[2] * 100)}%; height:100%; background:var(--ink-muted); transition:width 0.3s ease;"></div>
            </div>
          </div>
        </div>

        <div style="font-size:13px; line-height:1.6; color:var(--ink-secondary);">
          ${isScaled ? `
            • <strong>Softmax Behavior:</strong> Probabilities distribute smoothly across relevant keys ($[${(probs[0]*100).toFixed(1)}%, ${(probs[1]*100).toFixed(1)}%, ${(probs[2]*100).toFixed(1)}%]$).<br>
            • <strong>Gradient Magnitude:</strong> Softmax derivative ∂S₁/∂z₁ = S₁(1 - S₁) = ${(probs[0]).toFixed(3)} × ${(1 - probs[0]).toFixed(3)} = <strong>${grad1.toFixed(3)}</strong>.<br>
            • <strong>Optimization Impact:</strong> <span style="color:var(--emerald-green-text); font-weight:800;">Backprop flows actively!</span> Downstream weights W_Q, W_K, W_V update smoothly across all layers.
          ` : `
            • <strong>Softmax Behavior:</strong> Raw logits ($[${logits[0].toFixed(1)}, ${logits[1].toFixed(1)}, ${logits[2].toFixed(1)}]$) are too large, collapsing Softmax into a near-one-hot step function ($[${(probs[0]*100).toFixed(2)}%, ${(probs[1]*100).toFixed(2)}%, ${(probs[2]*100).toFixed(2)}%]$).<br>
            • <strong>Gradient Magnitude:</strong> Softmax derivative ∂S₁/∂z₁ = S₁(1 - S₁) ≈ ${(probs[0]).toFixed(5)} × ${(1 - probs[0]).toFixed(5)} = <strong>${grad1.toFixed(5)}</strong>.<br>
            • <strong>Optimization Impact:</strong> <span style="color:#ef4444; font-weight:800;">Gradients vanish to zero!</span> Learning freezes completely in deeper transformer blocks.
          `}
        </div>
      `;
    }

    dkBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        dkBtns.forEach(b => b.className = "btn-minimal-secondary dk-btn");
        btn.className = "btn-minimal-primary dk-btn active";
        d_k = parseInt(btn.getAttribute("data-dk"));
        renderSDP();
      });
    });

    btnScaleOn.addEventListener("click", () => {
      isScaled = true;
      btnScaleOn.className = "btn-minimal-primary sdp-scale-toggle active";
      btnScaleOff.className = "btn-minimal-secondary sdp-scale-toggle";
      renderSDP();
    });

    btnScaleOff.addEventListener("click", () => {
      isScaled = false;
      btnScaleOff.className = "btn-minimal-primary sdp-scale-toggle active";
      btnScaleOn.className = "btn-minimal-secondary sdp-scale-toggle";
      renderSDP();
    });

    renderSDP();
  }
};

if (typeof window !== "undefined") {
  window.Visualizers = Visualizers;
}
if (typeof globalThis !== "undefined") {
  globalThis.Visualizers = Visualizers;
}

