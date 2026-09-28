# 🤖 AGENTS.md — AI Coding Assistant Operational Guide

This document establishes the mandatory conventions, operational rules, dataset schemas, and architectural invariants that every AI coding agent must follow when modifying or extending the **NALR Masterclass** codebase.

---

## 1. Core Engineering Principles

1. **Zero-Build, Pure Web Standard Architecture**:
   - The application runs directly in the browser via standard `<script>` and `<link>` tags.
   - **Do NOT introduce npm build steps, Webpack, Vite, React, Vue, TypeScript, or Babel** unless explicitly directed by the user.
   - All code must remain immediately executable by opening `index.html` or running a basic HTTP server (`npx serve`, Python `http.server`, or static hosts).

2. **Zero Runtime Tolerance for Broken Scripts**:
   - Always run `node --check <file>.js` or verification test scripts in `scratch/` whenever editing `app.js`, `interactive_visualizers.js`, `syllabus.js`, or `quiz_questions.js`.
   - Ensure backward compatibility and dual export support:
     ```javascript
     if (typeof module !== "undefined" && module.exports) {
       module.exports = { ... };
     }
     ```

3. **Cache Invalidation Discipline**:
   - Whenever updating CSS, visualizers, or JS scripts, increment the query string parameter in `index.html` (e.g. from `?v=9.5` to `?v=9.6`). This prevents aggressive browser caching on student devices.

---

## 2. Dataset Schemas & Strict Data Integrity

### 2.1 Question Object Schema (`quiz_questions.js`)
Every question object MUST adhere to this strict schema:
```javascript
{
  id: "mod{num}_q{index}",              // e.g. "mod5_q12" (or "st2_mod1_q1" for ST2)
  module_id: "mod{num}",                // Must match module ID in syllabus.js
  module_name: "Exact Title",           // e.g. "Number System"
  syllabus_lec: "Lecture Subtitle",     // e.g. "ST-1 Number Theory"
  type_id: "type_{x}",                  // Must match a registered type in syllabus.js
  type_name: "Type X: Problem Title",   // Must match exact type display name
  difficulty: "Easy" | "Medium" | "Hard",
  points: 1,                            // Integer mark weight
  question: "Full problem statement...",// Clean string; escape quotes appropriately
  options: [ "Opt A", "Opt B", "Opt C", "Opt D" ], // Array of options
  correct: "Exact matching option text",// Must match one item in options array!
  explanation: "Step-by-step detailed solution text...\nLine 2..."
}
```

### 2.2 Syllabus Structure (`syllabus.js`)
- Follows the 3-term dictionary `SYLLABUS_DATA.st1`, `SYLLABUS_DATA.st2`, and `SYLLABUS_DATA.endterm`.
- Each module object defines `id`, `num`, `title`, `lectures`, `desc`, and `types: [...]`.
- The `count` attribute in each item of `types` MUST equal the actual count of questions present with that `type_id` in `quiz_questions.js`.

---

## 3. UI & Styling Rules

1. **Adhere to the Apple Glass & Neutral Sand Palette**:
   - Active subtab background: `#e6dcbc` (Warm Sand) with subtle frosted glass blur.
   - Primary blue accent: `#2563eb` (`--primary-blue`).
   - PowerPoint brand color: `#d24726` / `#ea580c`.
   - Never hardcode raw hex values when existing CSS variables (`--card-bg`, `--ink-primary`, `--border-color`) are available.
2. **Theme Parity (Light & Dark Mode)**:
   - Every newly created component or visualizer container MUST include corresponding `[data-theme="dark"]` rules in `components.css` or `visualizers.css`.
3. **Universal Button Reset**:
   - Default browser button bevels and outlines must be completely neutralized. All button styling must utilize custom transitions, hover transforms (`translateY(-1px)`), and focus rings.

---

## 4. Visualizer Construction Guidelines

When creating or modifying solution visualizers in `interactive_visualizers.js`:
1. **Never Render Plain Text Fallbacks for Active Topics**:
   - Every topic (mod1 to mod14) must have a dedicated, diagrammatic SVG/HTML visualizer.
2. **Container Standards**:
   - Always wrap visualizer output in `<div class="sol-vis-container vis-{topic}">`.
   - Always include the standardized header badge:
     ```html
     <div class="vis-badge-header">
       <span class="vis-icon">{Emoji}</span>
       <span class="vis-label">{Technical Model Name}</span>
       <span class="vis-module-tag">{Topic Tag}</span>
     </div>
     ```
   - Always terminate with the golden resolution banner highlighting `escape(q.correct)`.
3. **XSS Protection**:
   - Always pass dynamic question data through the internal `escape()` helper to prevent HTML injection.

---

## 5. PowerPoint & Presentation Asset Pipeline

1. **Local Offline Rule**:
   - Do NOT rely exclusively on cloud viewers like Microsoft Office Live or Google Docs Viewer because they fail when run from local drives (`file:///` or `localhost`).
   - Always maintain the pre-exported high-res slide images (`PPTs/slides/{modId}/slide_{n}.png`) and vector PDFs (`PPTs/pdf/{modId}.pdf`).
2. **Exporter Automation**:
   - If `.pptx` files are updated in `PPTs/`, run `scratch/export_all_presentations.ps1` via PowerShell to regenerate all slides and update `ppt_manifest.js`.
