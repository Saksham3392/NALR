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

with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

pages = pdf_text.split('--- PAGE ')

# Compare questions
# Number system: 1..11
# HCF/LCM: 28..44
# Average: 60..76
# Remainder: 89..103
pdf_page_indices = (
    list(range(1, 12)) + 
    list(range(28, 45)) + 
    list(range(60, 77)) + 
    list(range(89, 104))
)

print(f"Comparing {len(pdf_page_indices)} PDF question pages with {len(mod16_existing)} existing mod16 questions...")

for idx, p in enumerate(pdf_page_indices):
    page_txt = pages[p].strip()
    q_obj = mod16_existing[idx]
    
    # Check if correct answer matches answer key
    # Let's print summary
    print(f"[{idx+1}] Page {p} -> {q_obj['id']} ({q_obj['type_id']})")
    print(f"   Existing Q: {q_obj['question'][:60]}...")
    print(f"   Existing Correct: {q_obj['correct']}")
    print(f"   Existing Options: {q_obj['options']}")
    print(f"   PDF Page text preview: {repr(page_txt[:100])}")
    print("-" * 60)
