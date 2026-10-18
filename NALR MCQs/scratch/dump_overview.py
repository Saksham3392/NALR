import json

with open('scratch/fa2_raw_extracted.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

with open('scratch/fa2_questions_overview.txt', 'w', encoding='utf-8') as out:
    for idx, q in enumerate(qs):
        out.write("[{}] {} ({})\n".format(idx + 1, q["id"], q["type_id"]))
        out.write("Q: {}\n".format(q["question"]))
        out.write("Opts: {}\n".format(q["options"]))
        out.write("Corr: {}\n".format(q["correct"]))
        out.write("=" * 60 + "\n")

print("Overview written to scratch/fa2_questions_overview.txt, total:", len(qs))
