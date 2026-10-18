import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/alligation_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pages = text.split('--- PAGE ')

for i in range(1, 25):
    p_text = pages[i].strip()
    first_lines = [l.strip() for l in p_text.split('\n') if l.strip()][:5]
    print(f"Page {i:2d}: {' | '.join(first_lines)}")
