# -*- coding: utf-8 -*-
import json
import re

with open("scratch/fa2_questions.json", "r", encoding="utf-8") as f:
    fa2_qs = json.load(f)

print(f"Loaded {len(fa2_qs)} FA2 questions from scratch/fa2_questions.json")

# Format each object nicely matching the existing quiz_questions.js style
formatted_objects = []
for q in fa2_qs:
    s = json.dumps(q, ensure_ascii=False, indent=2)
    lines = s.split("\n")
    indented = ["  " + line for line in lines]
    formatted_objects.append("\n".join(indented))

new_chunk = ",\n" + ",\n".join(formatted_objects) + "\n];"

with open("quiz_questions.js", "r", encoding="utf-8") as f:
    content = f.read()

# Locate the closing `];` of QUIZ_QUESTIONS
pattern = r"(\r?\n\s*\}\s*)\r?\n\];"
match = re.search(pattern, content)
assert match, "Could not find closing }; before ];"

is_crlf = "\r\n" in content
replacement = match.group(1) + new_chunk
if is_crlf:
    replacement = replacement.replace("\n", "\r\n").replace("\r\r\n", "\r\n")

new_content = content[:match.start()] + replacement + content[match.end():]

# Verify JSON parsing of the entire QUIZ_QUESTIONS
m = re.search(r"const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;", new_content)
assert m, "Could not find QUIZ_QUESTIONS array in new content"
parsed = json.loads(m.group(1))
print(f"Successfully parsed QUIZ_QUESTIONS! Total questions: {len(parsed)}")
assert len(parsed) == 604 + 72, f"Expected 676, got {len(parsed)}"

with open("quiz_questions.js", "w", encoding="utf-8", newline="" if is_crlf else "\n") as f:
    f.write(new_content)

print("Updated quiz_questions.js with 72 FA2 questions successfully! Total questions: 676")
