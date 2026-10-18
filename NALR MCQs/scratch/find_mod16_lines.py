import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('quiz_questions.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start, end = -1, -1
for i, l in enumerate(lines):
    if '"module_id": "mod16"' in l:
        if start == -1:
            start = i
        end = i

print(f"mod16 starts around line {start+1}, ends around line {end+1}")
print("Line at start-5 to start+5:")
for j in range(max(0, start-5), min(len(lines), start+5)):
    print(f"{j+1}: {lines[j].strip()}")

print("\nLine at end-5 to end+10:")
for j in range(max(0, end-5), min(len(lines), end+10)):
    print(f"{j+1}: {lines[j].strip()}")
