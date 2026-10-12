# -*- coding: utf-8 -*-
import json
import re

with open("scratch/mod15_questions.json", "r", encoding="utf-8") as f:
    mod15_qs = json.load(f)

# Format each object nicely matching the existing quiz_questions.js style
formatted_objects = []
for q in mod15_qs:
    # Use json.dumps with indent=2
    s = json.dumps(q, ensure_ascii=False, indent=2)
    # indent by 2 spaces
    lines = s.split("\n")
    indented = ["  " + line for line in lines]
    formatted_objects.append("\n".join(indented))

new_chunk = ",\n" + ",\n".join(formatted_objects) + "\n];"

with open("quiz_questions.js", "r", encoding="utf-8") as f:
    content = f.read()

# Replace the last `\n];` or `\r\n];`
# Let's find the closing `];` of QUIZ_QUESTIONS
pattern = r"(\n\s*\}\s*)\n\];"
match = re.search(pattern, content)
if not match:
    # try CRLF
    pattern = r"(\r?\n\s*\}\s*)\r?\n\];"
    match = re.search(pattern, content)

assert match, "Could not find closing }; before ];"

# Preserve CRLF line endings
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
assert len(parsed) == 506 + 60, f"Expected 566, got {len(parsed)}"

with open("quiz_questions.js", "w", encoding="utf-8", newline="" if is_crlf else "\n") as f:
    f.write(new_content)

print("Updated quiz_questions.js successfully!")
