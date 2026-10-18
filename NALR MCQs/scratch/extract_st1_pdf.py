import pypdf

reader = pypdf.PdfReader('PPTs/pdf/ST1.pdf')
print("Total pages in ST1.pdf:", len(reader.pages))

with open('scratch/st1_pdf_extracted_text.txt', 'w', encoding='utf-8') as out:
    for idx, page in enumerate(reader.pages):
        text = page.extract_text() or ''
        out.write(f"--- PAGE {idx+1} ---\n{text}\n\n")

print("Saved extracted text to scratch/st1_pdf_extracted_text.txt")
