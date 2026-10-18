import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    pdf_text = f.read()

pages = pdf_text.split('--- PAGE ')

def dump_pages(start, end, label):
    print(f"\n=================== {label} (Pages {start} to {end}) ===================")
    for p in range(start, end + 1):
        lines = [l.strip() for l in pages[p].split('\n') if l.strip()]
        print(f"--- Page {p} ---")
        print("\n".join(lines[:12]))
        print("-" * 40)

dump_pages(12, 27, "NUMBER SYSTEM NEW (Q12 - Q27)")
dump_pages(45, 59, "HCF & LCM NEW (Q18 - Q32)")
dump_pages(77, 88, "AVERAGE NEW (Q18 - Q29)")
dump_pages(104, 112, "REMAINDER THEOREM NEW (Q16 - Q24)")
