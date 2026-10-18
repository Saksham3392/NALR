import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('quiz_questions.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r"const\s+QUIZ_QUESTIONS\s*=\s*(\[[\s\S]*?\])\s*;", text)
all_qs = json.loads(m.group(1))

mod16_qs = [q for q in all_qs if q['module_id'] == 'mod16']
print(f"Total mod16: {len(mod16_qs)}")

answers = [q['correct'] for q in mod16_qs]
print("All 112 answers for mod16:")
print(json.dumps(answers, ensure_ascii=False, indent=2))
