import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load existing quiz questions
with open('quiz_questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r"const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;", text)
all_qs = json.loads(m.group(1))

mod16_existing = [q for q in all_qs if q['module_id'] == 'mod16']
print(f"Loaded {len(mod16_existing)} existing mod16 questions.")

# Let's inspect the questions extracted from ST1.pdf
with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

pages = pdf_text.split('--- PAGE ')

# Check Number System (pages 1 to 11 vs mod16_q1 to mod16_q11)
print("\n--- Checking Number System 1-11 ---")
for i in range(1, 12):
    page_txt = pages[i]
    q_existing = mod16_existing[i-1]
    print(f"Q{i}: ID={q_existing['id']} | Existing: {q_existing['question'][:40]} | Correct: {q_existing['correct']}")

# Check HCF & LCM (pages 28 to 44 vs mod16_q12 to mod16_q28)
print("\n--- Checking HCF & LCM 1-17 ---")
for idx, i in enumerate(range(28, 45)):
    page_txt = pages[i]
    q_existing = mod16_existing[11 + idx]
    print(f"Q{idx+1} (page {i}): ID={q_existing['id']} | Existing: {q_existing['question'][:40]} | Correct: {q_existing['correct']}")

# Check Average (pages 60 to 76 vs mod16_q29 to mod16_q45)
print("\n--- Checking Average 1-17 ---")
for idx, i in enumerate(range(60, 77)):
    page_txt = pages[i]
    q_existing = mod16_existing[28 + idx]
    print(f"Q{idx+1} (page {i}): ID={q_existing['id']} | Existing: {q_existing['question'][:40]} | Correct: {q_existing['correct']}")

# Check Remainder Theorem (pages 89 to 103 vs mod16_q46 to mod16_q60)
print("\n--- Checking Remainder Theorem 1-15 ---")
for idx, i in enumerate(range(89, 104)):
    page_txt = pages[i]
    q_existing = mod16_existing[45 + idx]
    print(f"Q{idx+1} (page {i}): ID={q_existing['id']} | Existing: {q_existing['question'][:40]} | Correct: {q_existing['correct']}")
