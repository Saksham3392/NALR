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

---

## 6. Study Planner Architecture & Invariants

When extending or maintaining the Study Planner subsystem:
1. **Schema Consistency (`nalr_study_plan_v1`)**:
   - The stored plan object in `localStorage` must contain:
     ```javascript
     {
       examDate: "YYYY-MM-DD",
       createdAt: "ISO String",
       totalDays: Number,
       studyDaysCount: Number,
       hasRevisionDay: Boolean,
       totalTasks: Number,
       selectedModuleIds: [String],
       completedTasks: { [taskId]: Boolean },
       days: [
         {
           dayIndex: Number,
           dateString: "YYYY-MM-DD",
           displayDate: "Short Date String",
           isRevisionDay: Boolean,
           isBufferDay: Boolean,
           tasks: [
             {
               id: "{moduleId}_{typeId}",
               termId: "st1" | "st2" | "endterm",
               termName: String,
               moduleId: String,
               moduleNum: Number,
               moduleTitle: String,
               typeId: String,
               taskTitle: String,
               questionCount: Number
             }
           ]
         }
       ]
     }
     ```
2. **Deterministic Partitioning**:
   - Always calculate days from midnight to midnight ($T00:00:00$) to avoid DST and timezone shifts.
   - For timeframes $D \ge 3$, Day $D$ MUST be reserved for Final Comprehensive Revision & Mock Exam.
   - Never generate empty days; if active study days exceed tasks, surplus days must be marked as `isBufferDay: true`.
3. **Interactive Navigation**:
   - All generated daily tasks must support instant click-to-practice routing (`jumpToPlannerTopic()`) that syncs term, module, and subtab.

---

## 7. Hardware Acceleration & Compositor Invariants

When extending CSS, DOM layouts, or event listeners:
1. **Zero-Repaint Fixed Background Plane**:
   - **Never** use `background-attachment: fixed` on `body` (triggers full-page layout repaints on scroll).
   - Always decouple background patterns onto a fixed pseudo-element layer:
     ```css
     body::before {
       content: "";
       position: fixed;
       inset: 0;
       z-index: -1;
       transform: translateZ(0);
       will-change: transform;
     }
     ```
2. **Event Loop Throttling via `requestAnimationFrame`**:
   - **Never** perform direct DOM writes or property setters inside unthrottled `pointermove` or `scroll` listeners.
   - Always batch updates using `requestAnimationFrame` loops and declare `{ passive: true }`.
3. **Layer Promotion & Layout Containment**:
   - Isolate self-contained visualizer containers and cards with `contain: layout style paint;` and promote them to the compositor layer with `transform: translateZ(0); backface-visibility: hidden;`.
4. **Micro-DOM Virtualization**:
   - Use `content-visibility: auto` with appropriate `contain-intrinsic-size` for heavy repeating lists (e.g., exam results, planner timeline cards) to skip off-screen rendering.

---

## 8. Fluid Transitions & Micro-Interactions Standards

1. **Liquid Pill Navigation**:
   - Tab/pill indicators must animate via `transform: translateX(...)` and dynamic `width` using GPU-accelerated bezier curves (`cubic-bezier(0.2, 0.9, 0.3, 1)`).
   - Never animate `left` or `width` through layout-thrashing properties.
2. **Zero-Jank CSS Grid Accordions**:
   - Drawers and collapsibles must animate using CSS Grid:
     ```css
     .drawer {
       display: grid;
       grid-template-rows: 0fr;
       transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
     }
     .drawer.expanded {
       grid-template-rows: 1fr;
     }
     .drawer-content {
       min-height: 0;
       overflow: hidden;
     }
     ```
   - Avoid legacy `max-height` estimation hacks.
3. **Sequential Staggered Cascade**:
   - On question navigation, apply sequential entry delays (`slideDown` at 0ms, `fadeIn` at 40ms, `floatUp` on options at 70ms, 100ms, 130ms, 160ms) to provide a fluid native iOS-style experience.


