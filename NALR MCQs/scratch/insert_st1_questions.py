# -*- coding: utf-8 -*-
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Load existing quiz_questions.js
with open('quiz_questions.js', 'r', encoding='utf-8') as f:
    orig_content = f.read()

m = re.search(r"const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;", orig_content)
assert m, "Could not find QUIZ_QUESTIONS array in quiz_questions.js"

questions = json.loads(m.group(1))
print(f"Loaded {len(questions)} existing questions.")
assert len(questions) == 676, f"Expected 676 questions, got {len(questions)}"

# 2. Load 52 new questions
with open('scratch/st1_new_questions.json', 'r', encoding='utf-8') as f:
    new_qs = json.load(f)
assert len(new_qs) == 52

# Separate by type
new_t1 = [q for q in new_qs if q['type_id'] == 'type_1']  # 16 Qs
new_t2 = [q for q in new_qs if q['type_id'] == 'type_2']  # 15 Qs
new_t3 = [q for q in new_qs if q['type_id'] == 'type_3']  # 12 Qs
new_t4 = [q for q in new_qs if q['type_id'] == 'type_4']  # 9 Qs

print(f"New counts: T1={len(new_t1)}, T2={len(new_t2)}, T3={len(new_t3)}, T4={len(new_t4)}")
assert len(new_t1) == 16
assert len(new_t2) == 15
assert len(new_t3) == 12
assert len(new_t4) == 9

# 3. Find insertion points in questions array
idx_q11 = next(i for i, q in enumerate(questions) if q['id'] == 'mod16_q11')
idx_q28 = next(i for i, q in enumerate(questions) if q['id'] == 'mod16_q28')
idx_q45 = next(i for i, q in enumerate(questions) if q['id'] == 'mod16_q45')
idx_q60 = next(i for i, q in enumerate(questions) if q['id'] == 'mod16_q60')

print(f"Insertion points: q11 at {idx_q11}, q28 at {idx_q28}, q45 at {idx_q45}, q60 at {idx_q60}")

# Insert from end to beginning so indices don't shift
questions[idx_q60 + 1 : idx_q60 + 1] = new_t4
questions[idx_q45 + 1 : idx_q45 + 1] = new_t3
questions[idx_q28 + 1 : idx_q28 + 1] = new_t2
questions[idx_q11 + 1 : idx_q11 + 1] = new_t1

print(f"Total questions after insertion: {len(questions)}")
assert len(questions) == 676 + 52

# Check ID uniqueness
seen_ids = set()
for q in questions:
    assert q['id'] not in seen_ids, f"Duplicate ID: {q['id']}"
    seen_ids.add(q['id'])
print("✓ All IDs are unique!")

# Verify mod16 counts
m16_all = [q for q in questions if q['module_id'] == 'mod16']
assert len(m16_all) == 112
t1_count = len([q for q in m16_all if q['type_id'] == 'type_1'])
t2_count = len([q for q in m16_all if q['type_id'] == 'type_2'])
t3_count = len([q for q in m16_all if q['type_id'] == 'type_3'])
t4_count = len([q for q in m16_all if q['type_id'] == 'type_4'])
print(f"mod16 counts: T1={t1_count}, T2={t2_count}, T3={t3_count}, T4={t4_count}, Total={len(m16_all)}")
assert t1_count == 27
assert t2_count == 32
assert t3_count == 29
assert t4_count == 24

# Format nicely
formatted_objects = []
for q in questions:
    s = json.dumps(q, ensure_ascii=False, indent=2)
    lines = s.split("\n")
    indented = ["  " + line for line in lines]
    formatted_objects.append("\n".join(indented))

array_body = "[\n" + ",\n".join(formatted_objects) + "\n]"

new_quiz_content = orig_content[:m.start(1)] + array_body + orig_content[m.end(1):]

# Verify JSON loads
m_new = re.search(r"const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;", new_quiz_content)
assert m_new, "Failed to re-match QUIZ_QUESTIONS in new content"
parsed = json.loads(m_new.group(1))
assert len(parsed) == 728
print("✓ Successfully parsed full QUIZ_QUESTIONS array from new content with json.loads!")

# Write to file
with open('quiz_questions.js', 'w', encoding='utf-8') as f:
    f.write(new_quiz_content)

print("✓ Updated quiz_questions.js successfully!")
