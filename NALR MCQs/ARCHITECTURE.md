# 🏗️ ARCHITECTURE.md — System Architecture & Data Flow

This document details the software architecture, data structures, state management lifecycle, and asset pipelines of the **NALR Masterclass** platform.

---

## 1. High-Level Architectural Overview

The application follows an **Offline-First, Zero-Build Modular Vanilla Web Architecture**:

```mermaid
graph TD
    subgraph Browser ["Student Browser / Client Runtime"]
        HTML["index.html"] --> CSS["Stylesheets: main.css | components.css | visualizers.css"]
        HTML --> SCRIPTS["Scripts Load Order"]
        
        subgraph ScriptChain ["Modular Script Pipeline"]
            S1["syllabus.js (SYLLABUS_DATA)"] --> S2["quiz_questions.js (QUIZ_QUESTIONS)"]
            S2 --> S3["sound_effects.js (Web Audio Synthesizer)"]
            S3 --> S4["confetti.js (Canvas Particles)"]
            S4 --> S5["interactive_visualizers.js (SolutionVisualizer)"]
            S5 --> S6["app.js (Main Application Controller)"]
        end
        
        subgraph StateManagement ["State & Persistence"]
            S6 <--> LS["localStorage (Progress, Flags, Scores)"]
            S6 --> DOM["Interactive DOM Tree (Tabs, Question Cards, Banner)"]
        end
    end

    subgraph PresentationSubsystem ["Presentation Subsystem"]
        HTML -.-> |"Target: _blank"| PV["presentation_viewer.html"]
        PV --> PM["ppt_manifest.js"]
        PV --> PNG["PPTs/slides/{modKey}/*.png"]
        PV --> PDF["PPTs/pdf/{modKey}.pdf"]
    end
```

---

## 2. Script Load Order & Execution Lifecycle

The scripts MUST load sequentially in `index.html` to satisfy dependencies:

```html
<!-- Modular Load Order (Critical Dependency Order) -->
<script src="syllabus.js?v=9.7"></script>
<script src="quiz_questions.js?v=9.7"></script>
<script src="sound_effects.js?v=9.7"></script>
<script src="confetti.js?v=9.7"></script>
<script src="interactive_visualizers.js?v=9.7"></script>
<script src="app.js?v=9.7"></script>
```

1. **`syllabus.js`**: Declares global `SYLLABUS_DATA` and `SYLLABUS_MODULES`. Defines all terms (ST1, ST2, EndTerm) and subtab types.
2. **`quiz_questions.js`**: Declares global `QUIZ_QUESTIONS` array (422+ questions across ST1).
3. **`sound_effects.js`**: Instantiates synthetic Web Audio API tone oscillators for correct chime (`800Hz $\rightarrow$ 1200Hz`) and incorrect buzz (`220Hz $\rightarrow$ 180Hz`). Zero external MP3/WAV files required.
4. **`confetti.js`**: Manages the `<canvas id="confettiCanvas">` particle physics engine for score celebrations.
5. **`interactive_visualizers.js`**: Exposes the `SolutionVisualizer` namespace containing custom rendering algorithms for all 14 syllabus topics.
6. **`app.js`**: Main event bus and application controller. Initializes state, binds DOM events, manages question rendering, calculates scores, and persists progress.

---

## 3. State Management & Lifecycle (`app.js`)

The application state is maintained in-memory and synchronized to `localStorage`:

```javascript
let currentTermId = 'st1';             // 'st1' | 'st2' | 'endterm'
let activeModuleId = 'mod1';           // Current syllabus module
let activeTypeId = 'type_1';           // Current problem-solving subtab
let activeDiffFilter = 'all';          // 'all' | 'Easy' | 'Medium' | 'Hard'
let filterFlaggedOnly = false;         // Boolean toggle for bookmarks
let userAnswers = {};                  // { [questionId]: selectedOptionText }
let flaggedQuestions = new Set();      // Set of bookmarked question IDs
let isExamMode = false;                // Practice Mode vs Continuous Exam Mode
let userStudyPlan = null;              // Personalized daily study schedule
```

### Persistence Keys (`localStorage`):
- `NALR_MULTI_TERM_APTITUDE_V8`: Practice answers, exam state, bookmarks, current term.
- `nalr_study_plan_v1`: JSON object storing `userStudyPlan` (target exam date, daily tasks, completed checkboxes).
- `nalr_theme`: String `'light'` or `'dark'`.

---

## 4. Visualizer Architecture (`interactive_visualizers.js`)

The visualizer module is structured as an IIFE returning a single entry point:
```javascript
const SolutionVisualizer = (() => {
  // Topic-specific renderers
  function renderBloodRelation(q) { ... }
  function renderCodedRelation(q) { ... }
  function renderDirectionSense(q) { ... }
  function renderAnalogy(q) { ... }
  function renderNumberSystem(q) { ... }
  function renderHcfLcm(q) { ... }
  function renderAverage(q) { ... }
  function renderRemainderTheorem(q) { ... }
  function renderRatioProportion(q) { ... }
  function renderAgesTimeline(q) { ... }
  function renderPartnership(q) { ... }
  function renderAlligation(q) { ... }
  function renderOddManOut(q) { ... }
  function renderSyllogismVenn(q) { ... }
  function renderGenericAptitude(q) { ... }

  // Master router
  function generateVisualizer(q) {
    // Routes based on q.module_id and question content
  }

  return { generateVisualizer, ... };
})();
```

When an option is selected, `app.js` invokes `SolutionVisualizer.generateVisualizer(q)` and injects the resulting HTML/SVG directly into `.solution-visualizer-dock` inside the question card.

---

## 5. Presentation Viewer Subsystem

### 5.1 Presentation Architecture
Browsers cannot render binary `.pptx` archives natively, and cloud viewers fail offline or on `localhost`. To solve this, all 13 syllabus presentations are pre-processed into two formats:
1. **High-Res Slide Images**: `PPTs/slides/{modKey}/slide_{1..N}.png` (1280×720).
2. **Vector PDF**: `PPTs/pdf/{modKey}.pdf`.

### 5.2 Dynamic PPT Button Link
In `app.js`, `updateModulePPTButton(activeModuleId)` links dynamically to:
```
presentation_viewer.html?mod={modId}&file={encodedPptPath}&title={encodedTitle}
```

### 5.3 Viewer Capabilities (`presentation_viewer.html`)
- **Pre-Built Document Viewer Engine**: Embeds browser-native presentation PDF viewer (`<iframe src="PPTs/pdf/modX.pdf#toolbar=1&navpanes=1">`) with built-in page thumbnails, text search, zoom, and fit-to-page.
- **Fullscreen Mode**: Dedicated fullscreen toggle button (`⛶ Fullscreen`).
- **Direct Download**: Top-bar action button to download the original `.pptx` file.

---

## 6. Personalized Daily Study Planner Subsystem

```mermaid
graph TD
    Trigger["Click '📅 Planner' Button"] --> CheckState{"userStudyPlan exists in localStorage?"}
    CheckState -->|No| SetupView["Render Setup Form: Date Picker + Term Accordions"]
    CheckState -->|Yes| ScheduleView["Render Daily Schedule Cards & Metrics Banner"]
    
    SetupView --> UserInput["Student picks Exam Date & selects Syllabus Topics"]
    UserInput --> Algo["Run Scheduling Engine (generateDailyStudyPlan)"]
    
    subgraph Engine ["Scheduling Engine"]
        Algo --> Step1["Calculate Horizon D = ExamDate - Today"]
        Step1 --> Step2["Harvest granular sub-types from selected modules"]
        Step2 --> Step3["Partition tasks across D-1 study days (if D >= 3)"]
        Step3 --> Step4["Assign Day D as Final Mock & Comprehensive Revision"]
    end
    
    Engine --> Save["Save to localStorage (nalr_study_plan_v1)"]
    Save --> ScheduleView
    
    ScheduleView --> Track["Check/uncheck task items (Updates % coverage)"]
    ScheduleView --> Jump["Click 'Practice →' (Routes directly to module/subtab)"]
    ScheduleView --> Reset["Click 'Reset Planner' (Clears plan, returns to Setup)"]
```

### 6.1 Algorithmic Guarantees
1. **Time Horizon Validation**: Exam date must be strictly $\ge \text{today} + 1$.
2. **Even Distribution**: Tasks are divided via $\lfloor N_{\text{tasks}} / D_{\text{study}} \rfloor$ with remaining modulo tasks distributed to early days.
3. **Buffer Management**: When study days exceed task count ($D > N$), surplus days are allocated as deep-dive buffer days instead of being left empty.
4. **Direct Navigation**: Clicking any daily task invokes `jumpToPlannerTopic()`, automatically closing the modal and loading the exact module and problem type subtab in Practice Mode.

### 6.2 Modal Viewport & Layout Architecture
To prevent vertical overflow when expanding syllabus accordion sections (ST-1, ST-2, End Term):
1. **Modal Container (`.planner-dialog`)**: Constrained to `max-height: 85vh` (flex column with `overflow: hidden`), strictly preventing the outer dialog from expanding beyond the browser viewport.
2. **Fixed Header (`.planner-setup-fixed-head`)**: Contains the modal header and 'Target Exam Date' card with `flex-shrink: 0`, keeping them permanently pinned at the top.
3. **Scrollable Body (`.planner-scrollable-body`)**: Wraps the middle accordion section with `flex: 1 1 0` and `overflow-y: auto`, isolating all scrolling exclusively to the syllabus tree.
4. **Sticky Footer (`.planner-footer`)**: Located outside the scrollable body with `flex-shrink: 0`, a solid background (`var(--card-bg)`), and a top border, permanently visible at the modal bottom.

