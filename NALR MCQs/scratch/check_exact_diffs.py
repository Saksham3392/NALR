import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('quiz_questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r"const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;", text)
all_qs = json.loads(m.group(1))

mod16_existing = [q for q in all_qs if q['module_id'] == 'mod16']

with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

pages = pdf_text.split('--- PAGE ')

# Parse the answer key from pages 113 to 123
# Let's inspect answer keys in PDF
ans_pages = [pages[p] for p in range(113, 123)]
full_ans_text = "\n".join(ans_pages)

# Look for patterns like "Q 1. d) None of these"
ans_dict = {}
# Topic 1: NS 1-27
# Topic 2: HCF 1-32
# Topic 3: AVG 1-29
# Topic 4: RT 1-24

current_topic = None
for line in full_ans_text.split('\n'):
    line = line.strip()
    if 'NUMBER SYSTEM - ANSWER KEY' in line.upper():
        current_topic = 'NS'
    elif 'H.C.F. & L.C.M. - ANSWER KEY' in line.upper():
        current_topic = 'HCF'
    elif 'AVERAGE - ANSWER KEY' in line.upper():
        current_topic = 'AVG'
    elif 'REMAINDER THEOREM - ANSWER KEY' in line.upper():
        current_topic = 'RT'

print("Checking differences between existing 60 questions and PDF slides...")
# Let's check slide text and options for each of the 60 questions
# Number system: pages 1 to 11
for i in range(1, 12):
    q = mod16_existing[i-1]
    ptxt = pages[i]
    print(f"\n[NS Q{i} | {q['id']}]")
    print("DB Q:", q['question'])
    print("DB Options:", q['options'])
    print("DB Correct:", q['correct'])
    print("PDF Page Text:\n", ptxt.strip())

# HCF: pages 28 to 44
for idx, p in enumerate(range(28, 45)):
    q = mod16_existing[11 + idx]
    ptxt = pages[p]
    print(f"\n[HCF Q{idx+1} | {q['id']}]")
    print("DB Q:", q['question'])
    print("DB Options:", q['options'])
    print("DB Correct:", q['correct'])
    print("PDF Page Text:\n", ptxt.strip())
