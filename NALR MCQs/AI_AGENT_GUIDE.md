# 🤖 AI Agent Guide: Adding Questions to NALR Multi-Term Platform

This document is specifically written for AI coding agents and developers who need to integrate new question decks (from PDFs, slide presentations, or notes) into the **Numerical Aptitude & Logical Reasoning-I (25UNI0110)** revision platform across **ST-1**, **ST-2**, and **End Term**.

---

## 1. Quick Architecture Overview

The platform is a zero-build, pure vanilla web application:
- `syllabus.js` — Defines `SYLLABUS_DATA` with all modules and problem subtabs (`types`) for `st1`, `st2`, and `endterm`.
- `quiz_questions.js` — Stores the full database of questions (`const QUIZ_QUESTIONS = [...]`).
- `app.js` — Application controller managing the 3-term capsule switcher, sidebar navigation, practice mode, custom multi-topic exam engine, and localStorage persistence.
- `index.html` — Layout with the 3-term capsule switcher (`ST1`, `ST2`, `End Term`) and exam configurator modal.
- `verify_dataset.py` — Automated verification CLI that audits syntax, duplicate IDs, missing options, and syllabus type count synchronization across all terms.

---

## 2. Complete Roster of Terms & Modules

### 📘 Term 1: ST-1 (14 Modules, 422 Questions Active)
| Module ID | Module Title | Current Status | Total Questions |
|:---:|:---|:---:|:---:|
| `mod1` | Blood Relation | ✅ Active | 34 Questions |
| `mod2` | Coded Relation | ✅ Active | 40 Questions |
| `mod3` | Analogy | ✅ Active | 50 Questions |
| `mod4` | Direction | ✅ Active | 38 Questions |
| `mod5` | Number System | ✅ Active | 57 Questions |
| `mod6` | H.C.F. & L.C.M. | ✅ Active | 40 Questions |
| `mod7` | Average | ✅ Active | 38 Questions |
| `mod8` | Remainder Theorem | ✅ Active | 54 Questions |
| `mod9` | Ratio & Proportion | ✅ Active | 28 Questions |
| `mod10` | Ages | ⏳ Upload Pending | 0 Questions |
| `mod11` | Partnership | ✅ Active | 18 Questions |
| `mod12` | Allegation | ⏳ Upload Pending | 0 Questions |
| `mod13` | Odd Man Out | ⏳ Upload Pending | 0 Questions |
| `mod14` | Syllogism | ✅ Active | 25 Questions |

---

### 📗 Term 2: ST-2 (11 Modules)
| Module ID | Module Title | Current Status | Total Questions |
|:---:|:---|:---:|:---:|
| `st2_mod1` | Percentage | ⏳ Upload Pending | 0 Questions |
| `st2_mod2` | Alphabet Test | ⏳ Upload Pending | 0 Questions |
| `st2_mod3` | Mathematical Operation | ⏳ Upload Pending | 0 Questions |
| `st2_mod4` | Coding-Decoding | ⏳ Upload Pending | 0 Questions |
| `st2_mod5` | Simple Interest | ⏳ Upload Pending | 0 Questions |
| `st2_mod6` | Compound Interest | ⏳ Upload Pending | 0 Questions |
| `st2_mod7` | Profit & Loss | ⏳ Upload Pending | 0 Questions |
| `st2_mod8` | Discount | ⏳ Upload Pending | 0 Questions |
| `st2_mod9` | Number Sequence | ⏳ Upload Pending | 0 Questions |
| `st2_mod10` | Series | ⏳ Upload Pending | 0 Questions |
| `st2_mod11` | Arithmetic Progression (A.P) & Geometric Progression (G.P) | ⏳ Upload Pending | 0 Questions |

---

### 📙 Term 3: End Term (14 Modules)
| Module ID | Module Title | Current Status | Total Questions |
|:---:|:---|:---:|:---:|
| `end_mod1` | Time & Work | ⏳ Upload Pending | 0 Questions |
| `end_mod2` | Pipe & Cistern | ⏳ Upload Pending | 0 Questions |
| `end_mod3` | Mixed Proportion | ⏳ Upload Pending | 0 Questions |
| `end_mod4` | Work & Wages | ⏳ Upload Pending | 0 Questions |
| `end_mod5` | Ranking | ⏳ Upload Pending | 0 Questions |
| `end_mod6` | Cube & Cuboid | ⏳ Upload Pending | 0 Questions |
| `end_mod7` | Calendar | ⏳ Upload Pending | 0 Questions |
| `end_mod8` | Clock | ⏳ Upload Pending | 0 Questions |
| `end_mod9` | Time Sequence | ⏳ Upload Pending | 0 Questions |
| `end_mod10` | Reading Comprehension | ⏳ Upload Pending | 0 Questions |
| `end_mod11` | Rearrangement/ Jumbled Sentences | ⏳ Upload Pending | 0 Questions |
| `end_mod12` | Cloze Test | ⏳ Upload Pending | 0 Questions |
| `end_mod13` | Vocabulary (Synonyms, Idioms, One-word) | ⏳ Upload Pending | 0 Questions |
| `end_mod14` | Error Detection & Sentence Improvement | ⏳ Upload Pending | 0 Questions |

---

## 3. Step-by-Step Guide for an AI Agent to Add Questions

When the user uploads a slide deck or PDF to add questions to any topic:

### STEP 1: Define Subtabs in `syllabus.js`
Open `syllabus.js`, locate the target module inside `SYLLABUS_DATA.st1`, `SYLLABUS_DATA.st2`, or `SYLLABUS_DATA.endterm`, and define 3 to 6 logical subtabs:
```javascript
{
  id: "st2_mod1",
  num: 1,
  title: "Percentage",
  lectures: "ST-2 Commercial Arithmetic",
  desc: "Percentage fundamentals, fractions to percentages, and consumption changes.",
  types: [
    { id: "type_1", name: "Type 1: Basic Conversions & Fraction Shifts", desc: "...", count: 10 },
    { id: "type_2", name: "Type 2: Successive Percentage & Price-Consumption", desc: "...", count: 8 }
  ]
}
```
⚠️ **CRITICAL**: The `count` attribute of each type MUST match the EXACT number of questions you add for that type!

---

### STEP 2: Append Questions in `quiz_questions.js`
In `quiz_questions.js`, append your questions before the closing `];`:
```javascript
{
  id: "st2_pct_q1",
  module_id: "st2_mod1",
  module_name: "Percentage",
  syllabus_lec: "ST-2 Commercial Arithmetic",
  type_id: "type_1",
  type_name: "Type 1: Basic Conversions & Fraction Shifts",
  difficulty: "Easy",
  points: 1,
  question: "If 20% of a number is 50, what is 60% of that number?",
  options: [
    "120",
    "150",
    "180",
    "200"
  ],
  correct: "150",
  explanation: "📊 Step-by-Step Calculation:\n1. Let the number be x.\n2. 0.20 * x = 50 -> x = 250.\n3. 60% of 250 = 0.60 * 250 = **150**."
}
```

---

### STEP 3: Register in `app.js`
In `app.js`, add your activated module ID (e.g. `"st2_mod1"`) to `selectedExamModuleIds` around line 50 so that it is included in Exam Mode by default.

---

### STEP 4: Run the Integrity Audit
Run the automated verification script:
```bash
python verify_dataset.py
```
This guarantees:
- 0 duplicate IDs
- 0 answer mismatches (correct answer exists verbatim in options)
- 100% syllabus subtab count synchronicity
