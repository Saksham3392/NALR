with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pages = text.split('--- PAGE ')

print(f"Total page chunks: {len(pages)-1}")

for i in range(1, min(15, len(pages))):
    print(f"\n=== PAGE {i} ===")
    print(pages[i][:300])

# Check the last 15 pages
for i in range(max(1, len(pages)-15), len(pages)):
    print(f"\n=== PAGE {i} ===")
    print(pages[i][:300])
