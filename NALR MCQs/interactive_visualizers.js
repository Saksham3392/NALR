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
  }
};
