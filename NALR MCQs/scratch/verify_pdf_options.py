import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

pages = pdf_text.split('--- PAGE ')

# Check pages 12 to 27
print("=== Checking Number System (pages 12 to 27) ===")
for p in range(12, 28):
    p_txt = pages[p]
    lines = [l.strip() for l in p_txt.split('\n') if l.strip()]
    print(f"Page {p}: {' '.join(lines[:6])}")

# Check pages 45 to 59
print("\n=== Checking HCF & LCM (pages 45 to 59) ===")
for p in range(45, 60):
    p_txt = pages[p]
    lines = [l.strip() for l in p_txt.split('\n') if l.strip()]
    print(f"Page {p}: {' '.join(lines[:6])}")

# Check pages 77 to 88
print("\n=== Checking Average (pages 77 to 88) ===")
for p in range(77, 89):
    p_txt = pages[p]
    lines = [l.strip() for l in p_txt.split('\n') if l.strip()]
    print(f"Page {p}: {' '.join(lines[:6])}")

# Check pages 104 to 112
print("\n=== Checking Remainder Theorem (pages 104 to 112) ===")
for p in range(104, 113):
    p_txt = pages[p]
    lines = [l.strip() for l in p_txt.split('\n') if l.strip()]
    print(f"Page {p}: {' '.join(lines[:6])}")
