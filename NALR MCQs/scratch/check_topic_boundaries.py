import json
import re

with open('scratch/st1_pdf_extracted_text.txt', 'r', encoding='utf-8') as f:
    text = f.read()

pages = text.split('--- PAGE ')

# Pages 1 to 112 are questions
# Let's inspect page numbers and topic headers
topic_pages = []
for p in range(1, 113):
    chunk = pages[p]
    lines = [line.strip() for line in chunk.split('\n') if line.strip()]
    topic_pages.append((p, lines[0] if lines else '', lines[1] if len(lines) > 1 else ''))

print("First 5 topic pages:")
for tp in topic_pages[:5]:
    print(tp)

print("Around page 25-35:")
for tp in topic_pages[24:35]:
    print(tp)

print("Around page 55-65:")
for tp in topic_pages[54:65]:
    print(tp)

print("Around page 85-95:")
for tp in topic_pages[84:95]:
    print(tp)
