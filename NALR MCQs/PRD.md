# 📄 Product Requirements Document (PRD)

## Project Title: NALR Masterclass — Interactive Aptitude & Logical Reasoning Quiz Platform
**Course**: Numerical Aptitude & Logical Reasoning (NALR-I)  
**Course Code**: `25UNI0110`  
**Target Audience**: Chitkara University, CSE AI 5th Semester Students  
**Platform**: Zero-dependency, client-side web application (operable fully offline and on static web hosting)

---

## 1. Executive Summary & Problem Statement
Undergraduate engineering students preparing for campus placements, national aptitude entrance exams (CAT, GATE, GRE), and semester examinations face steep challenges mastering quantitative techniques and formal symbolic logic. Conventional question banks offer static text solutions that fail to convey spatial relations, chronological timelines, or set-theoretic containment.

**NALR Masterclass** bridges this pedagogical gap by providing an interactive, gamified, and deeply visualized practice platform. Every question across all 14 syllabus topics features custom mathematical/logical diagrammatic visualizers, instant audio-visual feedback, full-fledged continuous examination simulation, and integrated slide presentations.

---

## 2. Core Curriculum & Examination Scope

The platform is structured around the official 3-Term curriculum:

### 2.1 Term 1: Sessional Test 1 (ST-1) — 14 Modules (Active Bank: 506 Questions)
| Mod # | Module Name | Syllabus Track | Active Question Types & Subtabs |
| :---: | :--- | :--- | :--- |
| **mod1** | **Blood Relation** | Relational Logic | Family Tree (T1), Group Caselets (T2), Pointing & Dialogue (T3) — **34 Qs** |
| **mod2** | **Coded Relation** | Symbolic Logic | Forward Symbolic (T1), Target Equation (T2), Arithmetic Ops (T3), Reverse Coding (T4), Mixed Lineage (T5) — **18 Qs** |
| **mod3** | **Analogy** | Semantic & Num Equiv | Word Analogies (T1), Number Patterns (T2), Letter & Alphabet (T3) — **50 Qs** |
| **mod4** | **Direction Sense** | Spatial Geometry | Rotations & Clock Angles (T1), Pythagoras (T2), Relative Position (T3), Shadows (T4) — **38 Qs** |
| **mod5** | **Number System** | Number Theory | Unit Digits (T1), Factors & Primes (T2), Divisibility (T3), Digit Reversal (T4), Series Sum (T5), Extra Q (T6) — **77 Qs** |
| **mod6** | **H.C.F. & L.C.M.** | Arithmetic Foundations | Prime Factorization (T1), Real-World Tracks/Bells (T2), Remainder Models (T3), Product/Ratio (T4), Extra Q (T5) — **52 Qs** |
| **mod7** | **Average** | Balance Mechanics | Arithmetic Mean & Shifts (T1), Inclusion/Exclusion (T2), Weighted/Alligation (T3), Cricket (T4), Speed (T5), Demographics (T6), Extra Q (T7) — **58 Qs** |
| **mod8** | **Remainder Theorem** | Modular Arithmetic | Positive Num (T1), Negative Num (T2), Operations (T3), Factorials (T4), Unit/Last Two (T5), Simplification (T6), Power Forms (T7), Fermat/Wilson (T8), Next Power (T9), Algebraic (T10) — **55 Qs** |
| **mod9** | **Ratio & Proportion** | Quantitative Relations | Proportionals (T1), Coin Bags (T2), Mixtures/Dilutions (T3), Income/Expenditure (T4) — **28 Qs** |
| **mod10** | **Ages** | Linear Relations | Ratio Shifts (T1), Sum/Difference (T2), Age Products (T3), Multi-Person (T4) — **26 Qs** |
| **mod11** | **Partnership** | Commercial Arithmetic | Simple/Compound Capital (T1), Time Inversion (T2), Working Partners (T3) — **18 Qs** |
| **mod12** | **Allegation** | Mixture Mechanics | Alligation Cross (T1), Replacement Equations (T2) — *Visualizer Active* |
| **mod13** | **Odd One Out** | Anomaly Detection | Single Letters (T1), Pairs (T2), Triplets & Letter Sets (T3) — **27 Qs** |
| **mod14** | **Syllogism** | Deductive Logic | Direct Deductions (T1), Either-Or Pairs (T2), Multi-Premise Chains (T3), Hybrid Either-Or (T4) — **25 Qs** |

### 2.2 Term 2: Sessional Test 2 (ST-2) — 11 Modules
Covers advanced modules: Percentage, Profit & Loss, Simple & Compound Interest, Time & Work, Pipes & Cisterns, Speed Time & Distance, Trains, Boats & Streams, Clocks, Calendars, Permutations & Combinations.

### 2.3 Term 3: End Term Examination — 14 Modules
Covers comprehensive quantitative aptitude, data interpretation, probability, geometry, and applied verbal grammar.

---

## 3. Key Feature Modules

### 3.1 Interactive Practice Mode
- **7-Tab Architecture**: Seamless switching between syllabus problem types within any selected module.
- **Micro-Filters**: Live filtering by difficulty (`Easy`, `Medium`, `Hard`) and `Flagged Only` bookmarks.
- **Instant Validation**: Immediate option selection feedback with audio synthesis (tone generator) and optional celebratory confetti on milestones.
- **Copy & Ask Gemini**: 
  - Standard clipboard copying of problem formulation.
  - Dedicated "Gemini" action button that pre-populates the question directly into Google Gemini for AI-assisted reasoning.

### 3.2 Diagrammatic Solution Visualizers
Every question solution renders a bespoke, responsive vector diagram:
1. **Blood Relation**: Multi-generational genealogical tree diagram with male/female/marriage badges.
2. **Coded Relation**: Symbolic operator breakdown cards and dialogue deconstruction flowcharts.
3. **Direction Sense**: 2D Cartesian plane coordinate SVG grid with 8-point compass HUD and angular gauge.
4. **Analogy**: Dual-wing transformation bridge illustrating semantic and numerical shifts.
5. **Number System**: Unit digit dominoes, modular cyclicity wheels ($4k+r$), and Legendre factor cascades.
6. **HCF & LCM**: Prime factorization trees, remainder architectures, and bell synchronization cycles.
7. **Average**: Arithmetic mean balance seesaw beam SVG with delta deviation counters.
8. **Remainder Theorem**: Euclidean division track, negative modular rebound number lines, and factorial cutoff bounds.
9. **Ratio & Proportion**: Segmented proportional allocation bars, continuous ratio bridges ($A:B:C:D$), and coin matrix tables.
10. **Ages**: 3-epoch chronological milestone tracks (Past $\rightarrow$ Present $\rightarrow$ Future) highlighting the universal age difference invariant.
11. **Partnership**: Capital $\times$ Time equivalent matrix ($P \propto C \times T$) and proportional profit share allocation bar.
12. **Allegation**: Vector SVG Alligation Cross diagram with diagonal subtraction vectors and balance ratio scales.
13. **Odd One Out**: Candidate spectrum grid displaying positional alphabet indices ($A=1 \dots Z=26$), interval step vectors, and pulsating anomaly beacons.
14. **Syllogism**: Dynamic Euler-Venn diagrams (concentric sets, overlapping sets, disjoint/forbidden sets) with Aristotle proposition tagging (A, E, I, O) and conclusion verification cards.

### 3.3 Continuous Examination Mode
- Simulates real test conditions across all or selected topics.
- Sequential question progression, global countdown timer, bookmarking flag system, and a comprehensive end-of-test performance analytics screen with question-by-question review.

### 3.4 In-Browser Presentation Viewer (`presentation_viewer.html`)
- Dedicated next-page presentation viewer linked dynamically from the module header topic box.
- **Pre-Built Document Viewer Engine**: Embeds the browser-native presentation document viewer with page scrubber, page thumbnails pane, full text search, print, zoom, and fullscreen support.
- Includes direct presentation PDF download button.

### 3.5 Personalized Daily Study Planner
- **Target Exam Date Calculation**: Student picks their upcoming exam date; the platform dynamically calculates remaining days $D$.
- **Multi-Term Curriculum Selection**: Allows selecting modules across ST-1, ST-2, and End Term with intuitive "Select All" toggles per term.
- **Sub-Type Granular Distribution**: Breaks topics down into specific sub-types (e.g. Blood Relation Type 1, 2, 3) and partitions them sequentially across the days.
- **Dedicated Revision Milestone**: Automatically reserves the final day for comprehensive revision and full mock simulation when $D \ge 3$.
- **Interactive Checklist & Instant Practice Jump**: Students track daily task completion with checkboxes ($X / Y$ tasks completed) and can click "Practice →" to immediately jump into that topic and sub-tab.
- **State Persistence & Re-configurability**: Stored in `localStorage` (`nalr_study_plan_v1`) so clicking "Planner" directly shows their daily schedule, with a "Reset Planner" action to reconfigure at any time.

### 3.6 Fluid Layout Transitions & Navigation
- **Liquid Sliding Pill**: Shared floating indicator that dynamically tracks and translates across Term switchers with smooth interpolation and font/resize listeners.
- **Staggered Cascade Question Transitions**: iOS-style sequential entry animation (banner at 0ms, question body at 40ms, options floating up between 70ms-160ms) on each question navigation.
- **Zero-Jank CSS Grid Accordions**: Drawer transitions for solutions and notes using CSS Grid `grid-template-rows: 0fr -> 1fr`, eliminating max-height layout jitter.

### 3.7 Dynamic Cursor Spotlight & Smooth Theme Transition
- **Specular Glow Border Follow**: Dynamic radial gradient border (`--mouse-x`, `--mouse-y`) that follows the mouse across questions and study cards with RAF batching.
- **Smooth Circular Ripple Theme Transition**: Smooth theme toggle utilizing the View Transitions API and circular clip-path expanding outward from the toggle button coordinates.

### 3.8 GPU Hardware Acceleration & Micro-DOM Virtualization
- **Decoupled Background Compositor**: Fixed background gradient rendered on an isolated `body::before` plane with `transform: translateZ(0)` and `will-change: transform`.
- **Micro-DOM Virtualization**: `content-visibility: auto` and `contain-intrinsic-size` applied to long question rows and planner days.
- **RAF Event Batching**: Throttled pointer and scroll listeners operating on requestAnimationFrame cycles.

### 3.9 Apple Glass Depth & Tactile Micro-Interactions
- **Specular Top Rim-Light**: 1px inset highlight (`inset 0 1px 0 0 rgba(255, 255, 255, 0.75)` in light mode, `inset 0 1px 0 0 rgba(255, 255, 255, 0.16)` in dark mode) giving cards physical glass depth matching macOS Sequoia & visionOS.
- **Slender Floating Scrollbars**: 6px rounded capsule scrollbar thumbs with frosted glass blur.
- **Tactile Button Depress**: Standardized `active: transform: scale(0.985);` across buttons and pills for a responsive physical click feel.
- **Correct Pop & Ripple**: Dynamic spring bounce on checkmark badge with an expanding emerald ripple wave.
- **Incorrect Soft Shake & Eye Guide Pulse**: Subtle 180ms haptic shake (`-3px <-> +3px`) with soft crimson wash on error, plus a glowing green pulse on the correct option to guide understanding.

---

## 4. User Journeys
1. **Daily Practice**: Student selects Term (ST1) $\rightarrow$ picks Topic (e.g. *Number System*) $\rightarrow$ filters by *Hard* $\rightarrow$ solves question $\rightarrow$ reviews detailed mathematical step-by-step solution and cyclicity visualizer.
2. **Slide Review**: Student clicks the **PPT** button in the topic box $\rightarrow$ opens module presentation PDF in next tab via authoritative manifest viewer (`presentation_viewer.html?mod=...`) $\rightarrow$ reviews slide lecture content $\rightarrow$ switches back to practice.
3. **Mock Exam**: Student enters *Exam Mode* $\rightarrow$ selects targeted modules $\rightarrow$ takes 30-minute timed test $\rightarrow$ reviews aggregate accuracy, score breakdown, and flagged bookmarks.
4. **Exam Study Planning**: Student clicks *Planner* $\rightarrow$ selects Exam Date and syllabus topics $\rightarrow$ generates tailored day-by-day study roadmap $\rightarrow$ checks off tasks as completed $\rightarrow$ takes final mock exam on milestone day.

