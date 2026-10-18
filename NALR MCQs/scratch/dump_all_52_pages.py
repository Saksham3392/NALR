import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

pages = pdf_text.split('--- PAGE ')

# Let's inspect each of the 52 pages:
# NS: 12..27
# HCF: 45..59
# AVG: 77..88
# RT: 104..112

def parse_page(p_num):
    p_txt = pages[p_num].strip()
    return p_txt

print("=== NUMBER SYSTEM (Pages 12 to 27) ===")
for p in range(12, 28):
    print(f"\n--- Page {p} ---")
    print(parse_page(p))

print("\n=== HCF & LCM (Pages 45 to 59) ===")
for p in range(45, 60):
    print(f"\n--- Page {p} ---")
    print(parse_page(p))

print("\n=== AVERAGE (Pages 77 to 88) ===")
for p in range(77, 89):
    print(f"\n--- Page {p} ---")
    print(parse_page(p))

print("\n=== REMAINDER THEOREM (Pages 104 to 112) ===")
for p in range(104, 113):
    print(f"\n--- Page {p} ---")
    print(parse_page(p))
