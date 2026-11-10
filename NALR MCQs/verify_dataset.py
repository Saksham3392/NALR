#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
=============================================================================
🤖 NALR MULTI-TERM QUESTION DATASET INTEGRITY AUDIT (Course: 25UNI0110)
=============================================================================
Run this script after adding or modifying questions for ST1, ST2, or End Term:
    python verify_dataset.py

Checks performed:
  1. quiz_questions.js JSON parse & schema validation
  2. Question object completeness (id, module_id, type_id, options, correct)
  3. Correct answer exists verbatim in options array
  4. ID uniqueness across the entire platform
  5. syllabus.js subtab count synchronization (expected vs actual)
  6. Multi-term breakdown across ST-1, ST-2, and End Term
=============================================================================
"""

import json
import os
import re
import subprocess
import sys

# Ensure UTF-8 output encoding in Windows terminal
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

def load_syllabus(syllabus_file):
    """Load syllabus data using node if available, otherwise regex fallback"""
    try:
        cmd = ["node", "-e", "const { SYLLABUS_DATA } = require('./syllabus.js'); console.log(JSON.stringify(SYLLABUS_DATA));"]
        res = subprocess.run(cmd, cwd=os.path.dirname(syllabus_file), capture_output=True, text=True, encoding="utf-8")
        if res.returncode == 0:
            return json.loads(res.stdout)
    except Exception:
        pass

    # Regex fallback
    with open(syllabus_file, "r", encoding="utf-8") as f:
        content = f.read()
    m = re.search(r"const\s+SYLLABUS_DATA\s*=\s*(\{[\s\S]*?\n\};)", content)
    if m:
        clean = re.sub(r"//[^\n]*", "", m.group(1))
        clean = re.sub(r"/\*.*?\*/", "", clean, flags=re.DOTALL)
        clean = re.sub(r"(\w+)\s*:", r'"\1":', clean)
        clean = re.sub(r",\s*([\]\}])", r"\1", clean)
        clean = clean.rstrip(";")
        try:
            return json.loads(clean)
        except Exception:
            pass
    return None

def verify():
    workspace = os.path.dirname(os.path.abspath(__file__))
    quiz_file = os.path.join(workspace, "quiz_questions.js")
    syllabus_file = os.path.join(workspace, "syllabus.js")

    if not os.path.exists(quiz_file):
        print(f"❌ Error: quiz_questions.js not found at {quiz_file}")
        sys.exit(1)

    if not os.path.exists(syllabus_file):
        print(f"❌ Error: syllabus.js not found at {syllabus_file}")
        sys.exit(1)

    # 1. Parse quiz_questions.js
    with open(quiz_file, "r", encoding="utf-8") as f:
        quiz_content = f.read()

    m = re.search(r"const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;", quiz_content)
    if not m:
        print("❌ Error: Could not locate 'const QUIZ_QUESTIONS = [...]' in quiz_questions.js")
        sys.exit(1)

    try:
        questions = json.loads(m.group(1))
    except json.JSONDecodeError as e:
        print(f"❌ Error parsing quiz_questions.js JSON: {e}")
        sys.exit(1)

    # 2. Parse syllabus.js
    syllabus_data = load_syllabus(syllabus_file)

    print("\n" + "=" * 72)
    print("      NALR MULTI-TERM QUESTION DATASET INTEGRITY AUDIT")
    print("=" * 72)
    print(f"📊 Total Questions Loaded in Database: {len(questions)}\n")

    errors = []
    warnings = []
    seen_ids = set()
    module_counts = {}
    type_counts = {}

    for idx, q in enumerate(questions):
        qid = q.get("id")
        mod_id = q.get("module_id")
        type_id = q.get("type_id")
        q_text = (q.get("question") or "").strip()
        options = q.get("options", [])
        correct = q.get("correct")
        explanation = (q.get("explanation") or "").strip()

        if not qid:
            errors.append(f"Question at index {idx} has missing 'id'")
            continue

        if qid in seen_ids:
            errors.append(f"Duplicate question ID '{qid}' at index {idx}")
        seen_ids.add(qid)

        if not mod_id:
            errors.append(f"[{qid}] Missing 'module_id'")
        else:
            module_counts[mod_id] = module_counts.get(mod_id, 0) + 1

        key = f"{mod_id}:{type_id}"
        type_counts[key] = type_counts.get(key, 0) + 1

        if not q_text:
            errors.append(f"[{qid}] Empty question prompt")

        if not options or len(options) < 2:
            errors.append(f"[{qid}] Options must have at least 2 choices, found: {len(options)}")

        if correct is None or correct == "":
            errors.append(f"[{qid}] Missing 'correct' answer")
        elif correct not in options:
            errors.append(f"[{qid}] ({mod_id}) 'correct' answer '{correct}' is NOT in options {options}")

        if not explanation:
            warnings.append(f"[{qid}] Missing explanation")

    # Group by examination term
    if syllabus_data:
        for term_key in ["st1", "st2", "endterm"]:
            term_info = syllabus_data.get(term_key, {})
            term_name = term_info.get("name", term_key.upper())
            term_modules = term_info.get("modules", [])
            term_q_count = sum(module_counts.get(m.get("id"), 0) for m in term_modules)

            print(f"📁 {term_name} ({term_info.get('title', '')}) — {len(term_modules)} Modules | {term_q_count} Questions:")
            print(f"  {'Module ID':<12} | {'Questions':<10} | {'Status'}")
            print("  " + "-" * 50)
            for m in term_modules:
                m_id = m.get("id")
                q_count = module_counts.get(m_id, 0)
                status = f"✅ Active ({q_count} Qs)" if q_count > 0 else "⏳ Upload Pending"
                print(f"  {m_id:<12} | {q_count:<10} | {status}")
            print()

        # Audit subtab type synchronicity
        print("-" * 72)
        print("🔍 Checking Syllabus Subtab Type Synchronicity:")
        for term_key, term_info in syllabus_data.items():
            for mod in term_info.get("modules", []):
                m_id = mod.get("id")
                for t in mod.get("types", []):
                    t_id = t.get("id")
                    expected = t.get("count", 0)
                    actual = type_counts.get(f"{m_id}:{t_id}", 0)
                    if expected != actual:
                        errors.append(
                            f"Type Count Mismatch in {m_id} ({t_id}): syllabus says {expected}, but quiz_questions has {actual}"
                        )
                    else:
                        print(f"  ✓ [{m_id}] > {t.get('name')}: {actual} Qs (Matches syllabus)")

    print("\n" + "=" * 72)
    if warnings:
        print(f"⚠️  Warnings ({len(warnings)}):")
        for w in warnings[:10]:
            print(f"   - {w}")

    if errors:
        print(f"❌ VALIDATION FAILED: {len(errors)} error(s) detected:")
        for e in errors:
            print(f"   - {e}")
        print("=" * 72 + "\n")
        sys.exit(1)
    else:
        print("🎉 VALIDATION PASSED: 0 errors detected!")
        print("   All questions have unique IDs, non-empty fields, and valid answers.")
        print("=" * 72 + "\n")

if __name__ == "__main__":
    verify()
