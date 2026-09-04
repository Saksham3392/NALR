# Numerical Aptitude & Logical Reasoning-I (25UNI0110) — ST-1 Revision Platform

[![Docker Ready](https://img.shields.io/badge/Docker-Ready-blue.svg?logo=docker)](Dockerfile)
[![Render Deploy](https://img.shields.io/badge/Deploy-Render-46E3B7.svg?logo=render)](render.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Pure Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-orange.svg)](index.html)

A high-performance, interactive MCQ practice and examination simulation platform built for Chitkara University's **Numerical Aptitude & Logical Reasoning-I (25UNI0110)** ST-1 exams.

---

### 🌐 Live Interactive Demo
Experience the platform in action directly in your browser without local setup:  
👉 **https://nalr.onrender.com**

And to view in localhost in browser offline
```cmd
cd /d "c:\Users\Asus\Downloads\CSE AI 5th Sem\NALR\NALR MCQs" && python serve.py
```

---



Features **351 verified questions** extracted directly from official university lecture slide decks, categorized into problem-solving subtabs with step-by-step mathematical explanations, instant evaluation, and a custom multi-topic test generator.

---

## 📖 14 ST-1 Syllabus Modules

| # | Topic | Status | Questions Loaded | Problem-Solving Subtabs |
|:---:|:---|:---:|:---:|:---|
| **1** | **Blood Relation** | ✅ Active | **34 Qs** | Family Tree (12 Qs), Group Caselets (7 Qs), Pointing & Dialogue (15 Qs) |
| **2** | **Coded Relation** | ✅ Active | **40 Qs** | Pointing/Dialogue (6 Qs), Family Tree (6 Qs), Jumbled (6 Qs), In-Laws (6 Qs), Lineage (5 Qs), Gender Traps (6 Qs), Conditions (5 Qs) |
| **3** | **Analogy** | ✅ Active | **50 Qs** | Word & GK (28 Qs), Number Sets (15 Qs), Letter & Alphabet (7 Qs) |
| **4** | **Direction** | ✅ Active | **38 Qs** | Basic Cardinal (10 Qs), Shadow (8 Qs), Turn Angles (10 Qs), Pythagoras (10 Qs) |
| **5** | **Number System** | ✅ Active | **57 Qs** | Unit Digits & Trailing Zeros (5 Qs), Factors & Primes (10 Qs), Divisibility Rules (25 Qs), Digit Reversal (6 Qs), Series Summation (11 Qs) |
| **6** | **H.C.F. & L.C.M.** | ✅ Active | **40 Qs** | Basic Calculations (5 Qs), Real-World Track/Bell Applications (7 Qs), Remainder Divisibility Models (16 Qs), Product & Ratio Properties (12 Qs) |
| **7** | **Average** | ✅ Active | **38 Qs** | Arithmetic Mean & Shifts (7 Qs), Inclusion/Exclusion/Replacement (7 Qs), Weighted Means & Alligation (8 Qs), Cricket Batting/Bowling (3 Qs), Average Speed & Distance (6 Qs), Hostel Mess & Demographics (7 Qs) |
| **8** | **Remainder Theorem** | ✅ Active | **54 Qs** | Basic & Negative Remainder (8 Qs), Composite Expressions & Cancellation (11 Qs), Factorials & Last Two Digits (6 Qs), Power Forms & Cyclicity (15 Qs), Fermat, Wilson & Polynomials (14 Qs) |
| **9** | **Ratio & Proportion** | ⏳ Framework Ready | *Pending* | Pre-configured in syllabus architecture |
| **10** | **Ages** | ⏳ Framework Ready | *Pending* | Pre-configured in syllabus architecture |
| **11** | **Partnership** | ⏳ Framework Ready | *Pending* | Pre-configured in syllabus architecture |
| **12** | **Allegation** | ⏳ Framework Ready | *Pending* | Pre-configured in syllabus architecture |
| **13** | **Odd Man Out** | ⏳ Framework Ready | *Pending* | Pre-configured in syllabus architecture |
| **14** | **Syllogism** | ⏳ Framework Ready | *Pending* | Pre-configured in syllabus architecture |
| | **Total Database Pool** | | **351 Questions** | **37 Problem Types Fully Verified** |

---

## ✨ Core Features

- **Subtab Practice Mode**: Practice questions grouped cleanly by technique. Each question provides instant visual feedback, sound effects, confetti celebration on high scores, and complete step-by-step mathematical reasoning.
- **Custom Multi-Topic Exam Mode**: Click **`📝 Exam`** to open an interactive modal and pick **any combination of the 14 topics**. The engine dynamically generates a custom continuous test session with question counters and score analytics.
- **One-Click `[ 📋 Copy ]` Button**: Built into every question card to copy the question prompt, number, and formatted options `(a)`, `(b)`, `(c)`, `(d)` straight to your clipboard.
- **Review Bookmarking & Clear Choice**: Flag questions for later revision with **`☆ Review`** or reset individual selections using **`🧹 Clear Choice`**.
- **Dark & Light Mode**: Instant toggle between high-contrast dark theme and crisp light theme.
- **Persistent State**: Progress, answers, and selected exam topics are saved locally in `localStorage`.
- **Zero Heavy Frameworks**: Pure Vanilla JavaScript, HTML5, and CSS3 — lightning-fast load times with zero build steps or external bundle dependencies.

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
Simply double-click `index.html` in your file explorer to open the application in any modern web browser.

---

## 🌐 Deploying to Render

You can deploy this project to [Render](https://render.com) using either of two methods:

### Method 1: Render Static Site (Recommended — 100% Free & Fast)
1. Push your code to a GitHub repository (see [GitHub Upload Guide](#-github-upload-guide) below).
2. Log in to [Render Dashboard](https://dashboard.render.com).
3. Click **New +** → **Static Site**.
4. Connect your GitHub repository.
5. Set the settings:
   - **Name**: `nalr-mcqs-revision`
   - **Branch**: `main`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `.` *(current directory)*
6. Click **Create Static Site**. Your site will be live on an `onrender.com` URL within seconds!

### Method 2: Render Docker Web Service
1. In Render Dashboard, click **New +** → **Web Service**.
2. Connect your repository.
3. Select **Docker** as the runtime environment.
4. Render will automatically detect the provided [Dockerfile](Dockerfile) and [render.yaml](render.yaml).
5. The container dynamically binds to Render's `$PORT` environment variable via Nginx configuration templates.
6. Click **Create Web Service**.

---

## 📤 GitHub Upload Guide

Follow these steps to push the project to your GitHub account:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage all project files
git add .

# 3. Commit your changes
git commit -m "Initial commit: NALR ST-1 MCQ Revision Platform with 351 questions"

# 4. Rename main branch
git branch -M main

# 5. Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

---

## 📁 Repository Structure

```
├── Dockerfile                  # Production-grade Nginx Alpine container
├── docker-compose.yml          # Local container orchestration (Port 3030)
├── nginx.conf                  # Nginx template with Gzip compression and $PORT support
├── render.yaml                 # Infrastructure-as-code for Render deployment
├── .dockerignore               # Optimizes Docker build context (excludes logs, pdfs, pycache)
├── .gitignore                  # Standard Git ignore rules
├── index.html                  # Main responsive UI layout & exam topic modal
├── app.js                      # Core state management, practice & custom exam engine
├── syllabus.js                 # 14 module definitions with subtab problem types
├── quiz_questions.js           # 351 verified questions with solutions
├── sound_effects.js            # Web Audio API procedural sound feedback
├── confetti.js                 # Milestone celebration effects
├── interactive_visualizers.js  # Dynamic formula & diagram visualizers
├── components.css              # Cards, modal dialogs, buttons & responsive grids
├── main.css                    # Base theme variables, typography & layout resets
├── app.css                     # Main styling bundle
├── serve.py                    # Lightweight Python HTTP server for local testing
└── README.md                   # Complete documentation
```

---

## 📝 License
This project is open-source and available under the [MIT License](LICENSE).
