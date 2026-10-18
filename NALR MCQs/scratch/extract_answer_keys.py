with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pages = text.split('--- PAGE ')

with open('scratch/st1_answer_keys.txt', 'w', encoding='utf-8') as out:
    for idx in range(112, len(pages)):
        out.write(f"=== PAGE {idx} ===\n")
        out.write(pages[idx])
        out.write("\n\n")

print("Saved answer keys to scratch/st1_answer_keys.txt")
