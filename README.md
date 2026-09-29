# Numerical Aptitude & Logical Reasoning-I (25UNI0110) — NALR Masterclass

[![Docker Ready](https://img.shields.io/badge/Docker-Ready-blue.svg?logo=docker)](Dockerfile)
[![Render Deploy](https://img.shields.io/badge/Deploy-Render-46E3B7.svg?logo=render)](render.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Pure Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-orange.svg)](index.html)

A high-performance, interactive MCQ practice and examination simulation platform built for Chitkara University's **Numerical Aptitude & Logical Reasoning-I (25UNI0110)** curriculum.

---

### 🌐 Live Interactive Demo

Experience the platform in action directly in your browser without local setup:  
👉 **https://nalr.onrender.com**  
👉 **https://nalr.vercel.app**

To view locally in your browser offline:

```cmd
cd /d "c:\Users\Asus\Downloads\CSE AI 5th Sem\NALR\NALR MCQs" && python serve.py
```

---

Features **535 verified questions** extracted directly from official university lecture slide decks, categorized into problem-solving subtabs with step-by-step mathematical explanations, interactive diagrammatic visualizers, in-browser presentation viewing, and a custom multi-topic examination generator.

---

## 📖 ST-1 Syllabus Modules (535 Questions Database)

|   #    | Topic | Status | Questions Loaded | Problem-Solving Subtabs |
| :----: | :--- | :---: | :---: | :--- |
| **1**  | **Blood Relation** | ✅ Active | **34 Qs** | Family Tree (12 Qs), Group Caselets (7 Qs), Pointing & Dialogue (15 Qs) |
| **2**  | **Coded Relation** | ✅ Active | **40 Qs** | Pointing/Dialogue (6 Qs), Family Tree (6 Qs), Jumbled (6 Qs), In-Laws (6 Qs), Lineage (5 Qs), Gender Traps (6 Qs), Conditions (5 Qs) |
| **3**  | **Analogy** | ✅ Active | **50 Qs** | Word & GK (28 Qs), Number Sets (15 Qs), Letter & Alphabet (7 Qs) |
| **4**  | **Direction Sense** | ✅ Active | **38 Qs** | Rotations & Clock Angles (10 Qs), Pythagoras Displacement (11 Qs), Relative Position (14 Qs), Shadow Scenarios (3 Qs) |
| **5**  | **Number System** | ✅ Active | **77 Qs** | Unit Digits & Trailing Zeros (5 Qs), Factors & Primes (10 Qs), Divisibility Rules (25 Qs), Digit Reversal (6 Qs), Series Summation (11 Qs), Extra Practice (20 Qs) |
| **6**  | **H.C.F. & L.C.M.** | ✅ Active | **60 Qs** | Prime Factorization (5 Qs), Real-World Track/Bell Applications (7 Qs), Remainder Divisibility Models (16 Qs), Product & Ratio Properties (12 Qs), Extra Practice (20 Qs) |
| **7**  | **Average** | ✅ Active | **58 Qs** | Arithmetic Mean & Shifts (7 Qs), Inclusion/Exclusion/Replacement (7 Qs), Weighted Means & Alligation (8 Qs), Cricket Batting/Bowling (3 Qs), Average Speed & Distance (6 Qs), Hostel Mess & Demographics (7 Qs), Extra Practice (20 Qs) |
| **8**  | **Remainder Theorem** | ✅ Active | **54 Qs** | Basic & Negative Remainder (8 Qs), Composite Expressions & Cancellation (11 Qs), Factorials & Last Two Digits (6 Qs), Power Forms & Cyclicity (15 Qs), Fermat, Wilson & Polynomials (14 Qs) |
| **9**  | **Ratio & Proportion** | ✅ Active | **28 Qs** | Proportionals & Formulations (6 Qs), Currency Bags & Partitions (6 Qs), Mixture Dilutions & Alloys (9 Qs), Shifts, Incomes & Rates (7 Qs) |
| **10** | **Ages** | ✅ Active | **26 Qs** | Ratio & Temporal Shifts (10 Qs), Sum/Difference Invariants (7 Qs), Product-Based Problems (4 Qs), Multi-Person Systems (5 Qs) |
| **11** | **Partnership** | ✅ Active | **18 Qs** | Simple & Compound Investments (6 Qs), Variable Time & Inversion (7 Qs), Working Partners & Deductions (5 Qs) |
| **12** | **Allegation** | ✅ Active | _Active in Visualizers_ | Rule of Alligation Cross & Mean Concentration Balance |
| **13** | **Odd Man Out** | ✅ Active | **27 Qs** | Single Letter (2 Qs), Letter Pairs (7 Qs), Triplets & Letter Sets (18 Qs) |
| **14** | **Syllogism** | ✅ Active | **25 Qs** | Direct Deductions (6 Qs), Complementary Either-Or Pairs (6 Qs), Multi-Premise Chains (10 Qs), Hybrid Either-Or (3 Qs) |
|        | **Total Database Pool** | | **535 Questions** | **44 Problem Types Fully Verified** |

---

## ✨ Core Features

- **Diagrammatic Solution Visualizers**: Every question features a bespoke visualizer:
  - **Blood Relation**: Multi-generational genealogical tree diagram.
  - **Coded Relation**: Relational flowcharts and symbol mapping matrices.
  - **Direction Sense**: 2D Cartesian SVG coordinate grid with 8-point compass HUD.
  - **Analogy**: Symmetrical transformation bridge and semantic classification.
  - **Number System**: Unit digit dominoes, cyclicity wheels ($4k+r$), and Legendre factor cascades.
  - **H.C.F. & L.C.M.**: Prime factor trees and synchronization clock loops.
  - **Average**: Arithmetic mean balance seesaw beam SVG with deviation counters.
  - **Remainder Theorem**: Euclidean division track and negative rebound number lines.
  - **Ratio & Proportion**: Segmented allocation bar and continuous ratio chains ($A:B:C:D$).
  - **Ages**: 3-epoch chronological milestone tracks (Past $\rightarrow$ Present $\rightarrow$ Future).
  - **Partnership**: Capital $\times$ Time equivalent matrix ($P \propto C \times T$) and proportional profit share bar.
  - **Allegation**: Vector SVG Alligation Cross diagram with diagonal subtraction vectors.
  - **Odd Man Out**: Candidate spectrum grid displaying positional alphabet indices ($A=1 \dots Z=26$), interval steps, and pulsating anomaly beacons.
  - **Syllogism**: Dynamic Euler-Venn diagrams (concentric, overlapping, disjoint) with Aristotle proposition tagging (A, E, I, O) and conclusion verification cards.

- **In-Browser Presentation Viewer (`presentation_viewer.html`)**:
  - Embedded directly inside the topic header box via the **PPT** button with official PowerPoint logo.
  - Opens in a new tab to an in-browser document viewer with page scrubber, page thumbnails pane, full text search, print, zoom, and fullscreen support.
  - Direct download button for original `.pptx` presentation files.

- **3-Term Switcher Capsule**: Switch between **ST-1** (14 Modules, 535 questions), **ST-2** (11 Modules), and **End Term** (14 Modules) at any time.

- **Dynamic Cursor Spotlight (Glow Border Follow)**:
  - Interactive specular radial gradient border (`--mouse-x`, `--mouse-y`) that follows the student's cursor across question cards and planner views.
  - Mimics modern macOS / Raycast / Linear aesthetics with an iridescent subtle sheen and automatic dark mode adaptation.

- **Smooth Circular Ripple Theme Transition**:
  - Silky theme toggle using the modern View Transitions API with expanding radial clip-path circle (`circle(0% at clickX clickY) -> circle(150% at clickX clickY)`).
  - The new light or dark theme spreads organically across the screen from the click origin with zero visual flicker.

- **Fluid Layout Transitions & Navigation**:
  - **Liquid Sliding Pill**: Dynamic floating pill indicator that glides and stretches smoothly between Term switcher tabs (ST-1 ↔ ST-2 ↔ End Term) with automatic window resize and font load tracking.
  - **Staggered Cascade Question Transitions**: Native iOS-style entry animations on question change (banner slides down at 0ms, question body fades in at 40ms, options float up sequentially at 70ms, 100ms, 130ms, 160ms).
  - **Zero-Jank CSS Grid Accordions**: Smooth solution and explanation drawers powered by `grid-template-rows: 0fr -> 1fr` rather than jerky max-height hacks.

- **GPU Hardware Acceleration & Micro-DOM Virtualization**:
  - Zero-repaint fixed background plane (`body::before` with `transform: translateZ(0)` and `will-change: transform`), eliminating full-page GPU repaints during scrolling.
  - Hardware compositor promotion (`contain: layout style paint`, `transform: translateZ(0)`, `backface-visibility: hidden`) across all SVG diagrams and interactive cards.
  - High-performance micro-virtualization using `content-visibility: auto` and `contain-intrinsic-size` on question cards, planner days, and exam result lists.
  - Event batching via `requestAnimationFrame` for pointermove and scroll listeners for locked 60+ FPS interaction.

- **One-Click `[ 📋 Copy ]` & `[ ✦ Gemini ]` Buttons**:
  - Copy formatted questions straight to clipboard.
  - One-click button to open Google Gemini with the problem pre-populated for AI analysis.

- **Subtab Practice Mode**: Practice questions grouped by technique with instant visual feedback, sound synthesis, and celebratory confetti.

- **Personalized Daily Study Planner (`📅 Planner`)**:
  - Sets custom target exam dates and selects modules across ST-1, ST-2, and End Term with term "Select All" toggles.
  - Automatically partitions syllabus sub-types across remaining preparation days with integer quotient & remainder balancing.
  - Automatically schedules a dedicated **Final Comprehensive Revision & Full Mock Exam** milestone day ($D \ge 3$).
  - Interactive daily task checklists with real-time completion tracking, coverage percentage banner, and direct `"Practice →"` jump links.
  - Persisted in browser `localStorage` with a `"Reset Planner"` action to reconfigure schedules anytime.

- **Continuous Examination Mode**: Custom timed exam mode across any combination of topics with performance analytics.

- **Apple Minimalist Glass Aesthetic**: Warm sand (`#e6dcbc`) and alabaster palette with frosted glass blurs, light & dark theme parity.

- **Zero Build Tools**: 100% pure vanilla JavaScript, HTML5, and CSS3 — runs instantly offline by double-clicking `index.html`.

---

## 📚 Project Documentation

The repository includes detailed markdown references for developers and AI agents:

- 📄 [**PRD.md**](PRD.md) — Comprehensive Product Requirements Document, user journeys, and pedagogical scope.
- 🤖 [**AGENTS.md**](AGENTS.md) — Operational instructions, strict dataset schemas, zero runtime tolerance rules, and coding standards.
- 🎨 [**DESIGN_SYSTEM.md**](DESIGN_SYSTEM.md) — Color tokens (Light & Dark), typography scale, Apple glass blur specifications, and component primitives.
- 🏗️ [**ARCHITECTURE.md**](ARCHITECTURE.md) — System architecture, Mermaid dependency graph, script load order, state management, and presentation pipeline.

---

## 🚀 Running Locally

### Option 1: Using Python (Recommended)

```bash
# Clone or navigate to the project directory
python serve.py
```

Open [http://localhost:3030](http://localhost:3030) in your browser.

### Option 2: Using Docker

```bash
# Build and run the lightweight Nginx container
docker compose up -d
```

Open [http://localhost:3030](http://localhost:3030) in your browser.

To stop the container:

```bash
docker compose down
```

### Option 3: Direct Browser Launch

Double-click `index.html` in your file explorer to open the application in any modern web browser.

---

## 🌐 Deploying to Render

### Method 1: Render Static Site (Recommended — 100% Free & Fast)

1. Push your code to a GitHub repository (see [GitHub Upload Guide](#-github-upload-guide) below).
2. Log in to [Render Dashboard](https://dashboard.render.com).
3. Click **New +** → **Static Site**.
4. Connect your GitHub repository.
5. Set the settings:
   - **Name**: `nalr-mcqs-revision`
   - **Branch**: `main`
   - **Build Command**: _(leave empty)_
   - **Publish Directory**: `.` _(current directory)_
6. Click **Create Static Site**. Your site will be live on an `onrender.com` URL within seconds!

### Method 2: Render Docker Web Service

1. In Render Dashboard, click **New +** → **Web Service**.
2. Connect your repository.
3. Select **Docker** as the runtime environment.
4. Render will automatically detect the provided [Dockerfile](Dockerfile) and [render.yaml](render.yaml).
5. Click **Create Web Service**.

---

## 📁 Repository Structure

```
├── Dockerfile                  # Production-grade Nginx Alpine container
├── docker-compose.yml          # Local container orchestration (Port 3030)
├── nginx.conf                  # Nginx template with Gzip compression and $PORT support
├── render.yaml                 # Infrastructure-as-code for Render deployment
├── .dockerignore               # Optimizes Docker build context
├── .gitignore                  # Standard Git ignore rules
├── index.html                  # Main responsive UI layout & exam topic modal
├── presentation_viewer.html    # Standalone in-browser presentation document viewer
├── app.js                      # Core state management, practice & custom exam engine
├── syllabus.js                 # 14 module definitions with subtab problem types
├── quiz_questions.js           # 475 verified questions with solutions
├── sound_effects.js            # Web Audio API procedural sound feedback
├── confetti.js                 # Milestone celebration effects
├── interactive_visualizers.js  # 14 dynamic formula & diagram visualizers
├── ppt_manifest.js             # Presentation metadata & page counts
├── components.css              # Cards, modal dialogs, buttons & responsive grids
├── main.css                    # Base theme variables, typography & layout resets
├── visualizers.css             # Diagram styling for all 14 visualizers
├── PRD.md                      # Product Requirements Document
├── AGENTS.md                   # AI Coding Assistant Operational Guide
├── DESIGN_SYSTEM.md            # Design System & Component Guidelines
├── ARCHITECTURE.md             # System Architecture & Data Flow
├── PPTs/                       # Source presentations, slide images & vector PDFs
│   ├── slides/                 # Pre-rendered 1280x720 slide image sets
│   └── pdf/                    # Pre-exported vector PDF presentations
├── serve.py                    # Lightweight Python HTTP server for local testing
└── README.md                   # Complete documentation
```

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
