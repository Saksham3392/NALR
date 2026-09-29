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

### 2.1 Term 1: Sessional Test 1 (ST-1) — 14 Modules (Active Bank: 422 Questions)
| Mod # | Module Name | Syllabus Track | Active Question Types & Subtabs |
| :---: | :--- | :--- | :--- |
| **mod1** | **Blood Relation** | Relational Logic | Family Tree (T1), Group Caselets (T2), Pointing & Dialogue (T3) |
| **mod2** | **Coded Relation** | Symbolic Logic | Pointing (T1), Puzzles (T2), Jumbled (T3), In-Laws (T4), Lineage (T5), Ambiguity (T6), Conditions (T7) |
| **mod3** | **Direction Sense** | Spatial Geometry | Cardinal Movement (T1), Angles/Shadows (T2), Pyth. Trajectories (T3), Point Networks (T4) |
| **mod4** | **Analogy** | Semantic & Num Equiv | Word Analogies (T1), Number Patterns (T2), Mixed Semantic Chains (T3) |
| **mod5** | **Number System** | Number Theory | Unit Digits (T1), Cyclicity Wheels (T2), Factorials/Trailing Zeros (T3), Divisibility (T4) |
| **mod6** | **H.C.F. & L.C.M.** | Arithmetic Foundations | Prime Factorization (T1), Remainder Models (T2), Synchronization Clocks (T3) |
| **mod7** | **Average** | Balance Mechanics | Weighted Means (T1), Change in Set (T2), Replacement Invariants (T3) |
| **mod8** | **Remainder Theorem** | Modular Arithmetic | Euclidean Long Division (T1), Negative Remainders (T2), Factorials/Fermat (T3) |
| **mod9** | **Ratio & Proportion** | Quantitative Relations | Proportionals (T1), Coin Bags (T2), Mixtures/Dilutions (T3), Income/Expenditure (T4) |
| **mod10** | **Ages** | Linear Relations | Ratio Shifts (T1), Sum/Difference (T2), Age Products (T3), Multi-Person (T4) |
| **mod11** | **Partnership** | Commercial Arithmetic | Simple/Compound Capital (T1), Time Inversion (T2), Working Partners (T3) |
| **mod12** | **Allegation** | Mixture Mechanics | Alligation Cross (T1), Replacement Equations (T2) |
| **mod13** | **Odd Man Out** | Anomaly Detection | Single Letters (T1), Pairs (T2), Triplets & Letter Sets (T3) |
| **mod14** | **Syllogism** | Deductive Logic | Direct Deductions (T1), Either-Or Pairs (T2), Multi-Premise Chains (T3) |

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
13. **Odd Man Out**: Candidate spectrum grid displaying positional alphabet indices ($A=1 \dots Z=26$), interval step vectors, and pulsating anomaly beacons.
14. **Syllogism**: Dynamic Euler-Venn diagrams (concentric sets, overlapping sets, disjoint/forbidden sets) with Aristotle proposition tagging (A, E, I, O) and conclusion verification cards.

### 3.3 Continuous Examination Mode
- Simulates real test conditions across all or selected topics.
- Sequential question progression, global countdown timer, bookmarking flag system, and a comprehensive end-of-test performance analytics screen with question-by-question review.

### 3.4 In-Browser Presentation Viewer (`presentation_viewer.html`)
- Dedicated next-page presentation viewer linked dynamically from the module header topic box.
- **Pre-Built Document Viewer Engine**: Embeds the browser-native presentation document viewer with page scrubber, page thumbnails pane, full text search, print, zoom, and fullscreen support.
- Includes original `.pptx` direct download button.

### 3.5 Personalized Daily Study Planner
- **Target Exam Date Calculation**: Student picks their upcoming exam date; the platform dynamically calculates remaining days $D$.
- **Multi-Term Curriculum Selection**: Allows selecting modules across ST-1, ST-2, and End Term with intuitive "Select All" toggles per term.
- **Sub-Type Granular Distribution**: Breaks topics down into specific sub-types (e.g. Blood Relation Type 1, 2, 3) and partitions them sequentially across the days.
- **Dedicated Revision Milestone**: Automatically reserves the final day for comprehensive revision and full mock simulation when $D \ge 3$.
- **Interactive Checklist & Instant Practice Jump**: Students track daily task completion with checkboxes ($X / Y$ tasks completed) and can click "Practice →" to immediately jump into that topic and sub-tab.
- **State Persistence & Re-configurability**: Stored in `localStorage` (`nalr_study_plan_v1`) so clicking "Planner" directly shows their daily schedule, with a "Reset Planner" action to reconfigure at any time.

---

## 4. User Journeys
1. **Daily Practice**: Student selects Term (ST1) $\rightarrow$ picks Topic (e.g. *Number System*) $\rightarrow$ filters by *Hard* $\rightarrow$ solves question $\rightarrow$ reviews detailed mathematical step-by-step solution and cyclicity visualizer.
2. **Slide Review**: Student clicks the **PPT** button in the topic box $\rightarrow$ opens presentation slides in next tab $\rightarrow$ navigates slides via arrow keys $\rightarrow$ switches back to practice.
3. **Mock Exam**: Student enters *Exam Mode* $\rightarrow$ selects targeted modules $\rightarrow$ takes 30-minute timed test $\rightarrow$ reviews aggregate accuracy, score breakdown, and flagged bookmarks.
4. **Exam Study Planning**: Student clicks *Planner* $\rightarrow$ selects Exam Date and syllabus topics $\rightarrow$ generates tailored day-by-day study roadmap $\rightarrow$ checks off tasks as completed $\rightarrow$ takes final mock exam on milestone day.

