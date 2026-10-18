import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader('PPTs/pdf/alligation.pdf')
print("Total pages in alligation.pdf:", len(reader.pages))

with open('scratch/alligation_pdf_extracted_text.txt', 'w', encoding='utf-8') as out:
    for idx, page in enumerate(reader.pages):
        text = page.extract_text() or ''
        out.write(f"--- PAGE {idx+1} ---\n{text}\n\n")

print("Saved extracted text to scratch/alligation_pdf_extracted_text.txt")
