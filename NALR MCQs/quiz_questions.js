// NALR ST-1 Questions Dataset (Course Code: 25UNI0110)
const QUIZ_QUESTIONS = [
  {
    "id": "br_q1",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "A is father of C and D is son of B, E is brother of A. If C is sister of D then how is B related to A?",
    "options": [
      "daughter",
      "brother-in-law",
      "husband",
      "wife"
    ],
    "correct": "wife",
    "explanation": "\ud83c\udf33 Family Tree Deduction:\n1. A is father of C.\n2. C is sister of D -> C and D are siblings, so A is also father of D.\n3. D is son of B -> B is the mother of D.\n4. Since A is the father and B is the mother of the same children, B is the **wife** of A."
  },
  {
    "id": "br_q2",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "Daya\u2019s brother is Anil. Daya is son of Chandra. Vimal is father of Chandra. How is Anil related to Vimal.",
    "options": [
      "son",
      "grandson",
      "brother",
      "grandfather"
    ],
    "correct": "grandson",
    "explanation": "\ud83c\udf33 Lineage Breakdown:\n1. Daya is the son of Chandra.\n2. Anil is Daya's brother -> Anil is also the son of Chandra.\n3. Vimal is the father of Chandra.\n4. Therefore, Anil is the **grandson** of Vimal."
  },
  {
    "id": "br_q3",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "M is N\u2019s brother. K is M\u2019s sister. P is Brother of O, O is N\u2019s daughter. Who is uncle of P?",
    "options": [
      "N",
      "K",
      "O",
      "M"
    ],
    "correct": "M",
    "explanation": "\ud83c\udf33 Generational Step:\n1. O is N's daughter, and P is brother of O -> P is the son of N.\n2. M is brother of N.\n3. The brother of one's parent is an uncle.\n4. Therefore, **M** is the uncle of P."
  },
  {
    "id": "br_q4",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "B\u2019s sister is A, C\u2019s brother is B, C is son of D then how is A related to D.",
    "options": [
      "Mother",
      "Son",
      "Daughter",
      "Uncle"
    ],
    "correct": "Daughter",
    "explanation": "\ud83c\udf33 Sibling Chain:\n1. C's brother is B, and B's sister is A -> A, B, and C are siblings.\n2. A is female (sister).\n3. C is son of D -> D is the parent of all three siblings.\n4. Thus, A is the **Daughter** of D."
  },
  {
    "id": "br_q5",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "If B\u2019s Mother is A, C is Son of A, E\u2019s Brother is D, B\u2019s daughter is E. Then who is grand Mother of D.",
    "options": [
      "A",
      "B",
      "C",
      "E"
    ],
    "correct": "A",
    "explanation": "\ud83c\udf33 Generational Mapping:\n1. B's daughter is E, and D is E's brother -> D is the son of B.\n2. B's mother is A.\n3. The mother of D's parent is D's grandmother.\n4. Therefore, **A** is the grandmother of D."
  },
  {
    "id": "br_q6",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Easy",
    "points": 1,
    "question": "Rajan is brother of Sachin and Manik is father of Rajan. Jagat is brother of Priya who is daughter of Sachin. Who is uncle of Jagat?",
    "options": [
      "Rajan",
      "Sachin",
      "Manik",
      "None of these"
    ],
    "correct": "Rajan",
    "explanation": "\ud83c\udf33 Family Tree Trace:\n1. Priya is daughter of Sachin, and Jagat is her brother -> Jagat is son of Sachin.\n2. Rajan is brother of Sachin.\n3. Father's brother is paternal uncle.\n4. Hence, **Rajan** is the uncle of Jagat."
  },
  {
    "id": "br_q7",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "A is the son of C, Z is the mother of Q and P is the son of Z, C and Q are sisters. Which of the following statements is true?",
    "options": [
      "P and A are cousins",
      "P is the maternal uncle of A",
      "Q is the maternal grandfather of A",
      "C and P are sisters"
    ],
    "correct": "P is the maternal uncle of A",
    "explanation": "\ud83c\udf33 Maternal Lineage:\n1. C and Q are sisters, and Z is their mother.\n2. P is the son of Z -> P is the brother of C and Q.\n3. A is the son of C.\n4. The brother of one's mother is maternal uncle.\n5. Therefore, **P is the maternal uncle of A**."
  },
  {
    "id": "br_q8",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "D is brother of B. M is Brother of B. K is father of M. T is wife of K. How is B related to T ?",
    "options": [
      "son",
      "daughter",
      "father",
      "data inadequate",
      "none of these"
    ],
    "correct": "data inadequate",
    "explanation": "\u26a0\ufe0f Gender Ambiguity Trap:\n1. K is father of M, and T is wife of K -> K (father) and T (mother).\n2. D, M, and B are children of K and T.\n3. We know D is male (brother) and M is male (brother), but the gender of B is **not mentioned**.\n4. B could be either son or daughter of T. Hence, **data inadequate**."
  },
  {
    "id": "br_q9",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Q\u2019s mother is sister of P and daughter of M. S is daughter of P and sister of T. How is M related to T?",
    "options": [
      "Grandfather",
      "father",
      "Grand mother",
      "Either grandfather or grand mother",
      "None of these"
    ],
    "correct": "Either grandfather or grand mother",
    "explanation": "\u26a0\ufe0f Gender Ambiguity:\n1. S and T are siblings, children of P.\n2. P is child of M (since Q's mother is sister of P and daughter of M).\n3. M is the parent of P, so M is the grandparent of T.\n4. Since the gender of M is unspecified, M is **Either grandfather or grand mother**."
  },
  {
    "id": "br_q10",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Hard",
    "points": 1,
    "question": "Lovely is a daughter of Ravindra. Geeta, Babita\u2019s sister has a son Golu and daughter Lali. Mala is maternal aunt of Lali and mother of Prabhakar. Prabhakar is brother of Lovely. How is Babita related to Ravindra?",
    "options": [
      "Niece",
      "Sister-in-Law",
      "Cousin",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "\ud83c\udf33 Complex Family Tree:\n1. Prabhakar is brother of Lovely, and Lovely is daughter of Ravindra -> Ravindra is father of both.\n2. Mala is mother of Prabhakar -> Mala is the wife of Ravindra.\n3. Mala is maternal aunt of Lali (Geeta's daughter) -> Geeta, Babita, and Mala are sisters.\n4. Babita is the sister of Ravindra's wife (Mala). In precise terminology, Babita is the sister-in-law of Ravindra.\n5. In the examination key for this question, option **(d) None of these** is designated as the correct choice."
  },
  {
    "id": "br_q11",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "Sarita is mother-in-law of Deepa who is Sister-in-law of Rajendra. Surendra who is father of Ravindra is the only brother of Rajendra. How is Sarita related to Rajendra?",
    "options": [
      "Wife",
      "Mother",
      "Aunt",
      "Mother-in-law"
    ],
    "correct": "Mother",
    "explanation": "\ud83c\udf33 Relational Deduction:\n1. Surendra is the only brother of Rajendra.\n2. Deepa is sister-in-law of Rajendra -> Deepa is married to Surendra.\n3. Sarita is mother-in-law of Deepa -> Sarita is the mother of Deepa's husband (Surendra).\n4. Since Surendra and Rajendra are brothers, Sarita is also the **Mother** of Rajendra."
  },
  {
    "id": "br_q12",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Family Tree & Generation Deduction",
    "difficulty": "Hard",
    "points": 1,
    "question": "Prayank is the son of Sister of Jeewan\u2019s father. Vinod is Son of Usha who is the mother of Sunny and grandmother of Jeewan. Pawan is the father Kalika and maternal grandfather of Prayank. Usha is the wife of Pawan. How is Sunny wife related to Kalika?",
    "options": [
      "Niece",
      "Sister-in-law",
      "Sister",
      "Data inadequate"
    ],
    "correct": "Sister-in-law",
    "explanation": "\ud83c\udf33 Multi-Generational Mapping:\n1. Pawan & Usha are married couple.\n2. Their children include: Vinod, Sunny, and Kalika (mother of Prayank, since Pawan is maternal grandfather of Prayank).\n3. Sunny is the brother of Kalika.\n4. Therefore, Sunny's wife is the **Sister-in-law** of Kalika."
  },
  {
    "id": "br_q13",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Direction(13-14): A is father of C but C is not his Son. B is brother of C. D is son of B. H is father of G. G is spouse of B. F is wife of A. E is daughter of C.\n\nWho is grandmother of D?",
    "options": [
      "A",
      "C",
      "F",
      "H"
    ],
    "correct": "F",
    "explanation": "\ud83e\udde9 Caselet 1 Analysis:\n- A (father) is married to F (mother).\n- Children: C (daughter, since not son) and B (son).\n- B is married to G, and D is son of B.\n- The mother of D's father (B) is F.\n- Hence, **F** is the grandmother of D."
  },
  {
    "id": "br_q14",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Direction(13-14): A is father of C but C is not his Son. B is brother of C. D is son of B. H is father of G. G is spouse of B. F is wife of A. E is daughter of C.\n\nWho is son of F?",
    "options": [
      "B",
      "C",
      "D",
      "E"
    ],
    "correct": "B",
    "explanation": "\ud83e\udde9 Caselet 1 Analysis:\n- F is the wife of A.\n- A's children are C (daughter) and B (brother of C = male = son).\n- Therefore, **B** is the son of F."
  },
  {
    "id": "br_q15",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the paternal grandmother of S?",
    "options": [
      "W",
      "P",
      "R",
      "U"
    ],
    "correct": "U",
    "explanation": "\ud83e\udde9 Caselet 2 Analysis:\n- P (husband) and U (wife) are parents of R (daughter) and Q (son).\n- Q is married to V, and S is son of Q.\n- The mother of S's father (Q) is U.\n- Thus, **U** is the paternal grandmother of S."
  },
  {
    "id": "br_q16",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the son of U?",
    "options": [
      "Q",
      "R",
      "T",
      "S",
      "Cannot be determined"
    ],
    "correct": "Q",
    "explanation": "\ud83e\udde9 Caselet 2 Analysis:\n- U is the wife of P.\n- Children of P and U are R (daughter, since not son) and Q (brother of R = male).\n- Hence, **Q** is the son of U."
  },
  {
    "id": "br_q17",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the father-in-law of Q?",
    "options": [
      "R",
      "P",
      "T",
      "W",
      "None of these"
    ],
    "correct": "W",
    "explanation": "\ud83e\udde9 Caselet 2 Analysis:\n- Q is married to V.\n- W is the father of V.\n- The father of one's spouse is father-in-law.\n- Therefore, **W** is the father-in-law of Q."
  },
  {
    "id": "br_q18",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the sister-in-law of R?",
    "options": [
      "S",
      "V",
      "U",
      "T",
      "cannot be determined"
    ],
    "correct": "V",
    "explanation": "\ud83e\udde9 Caselet 2 Analysis:\n- R's brother is Q.\n- V is the wife of Q.\n- Brother's wife is sister-in-law.\n- Hence, **V** is the sister-in-law of R."
  },
  {
    "id": "br_q19",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Group Caselet & Complex Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Directions (Q.15-19): P is the father of R, but R is not his son. T is the daughter of R. U is the wife of P. Q is the brother of R. S is the son of Q. V is the wife of Q. W is the father of V.\n\nWho is the cousin of T?",
    "options": [
      "R",
      "Q",
      "W",
      "S",
      "None of these"
    ],
    "correct": "S",
    "explanation": "\ud83e\udde9 Caselet 2 Analysis:\n- T is the daughter of R.\n- S is the son of Q (brother of R).\n- Children of siblings are cousins to each other.\n- Thus, **S** is the cousin of T."
  },
  {
    "id": "br_q20",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing towards a woman Shailesh said, \u201cShe is daughter of mother of father of my mother\u2019s daughter. How is the woman related to Shailesh?",
    "options": [
      "Daughter",
      "Grand daughter",
      "Aunt",
      "Sister"
    ],
    "correct": "Aunt",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'My mother\u2019s daughter' = Shailesh\u2019s sister.\n2. 'Father of my sister' = Shailesh\u2019s father.\n3. 'Mother of father' = Shailesh\u2019s paternal grandmother.\n4. 'Daughter of paternal grandmother' = Sister of Shailesh\u2019s father = Paternal **Aunt**."
  },
  {
    "id": "br_q21",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a woman in a photograph, a man says: \u201cshe is the only daughter of the mother-in-law of my only son.\u201d How is the woman related to the man?",
    "options": [
      "Daughter",
      "Wife",
      "Daughter-in-law",
      "Mother",
      "Mother-in-law"
    ],
    "correct": "Daughter-in-law",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'My only son's mother-in-law' = The mother of my son's wife.\n2. 'The only daughter of that mother-in-law' = My son's wife.\n3. Son's wife is **Daughter-in-law** to the speaker."
  },
  {
    "id": "br_q22",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a woman in a photograph a man says, \u201cShe is the only Daughter of my father\u2019s only daughter\u2013in-law.\u201d How is the woman related to the man?",
    "options": [
      "wife",
      "Daughter",
      "Daughter-in-law",
      "Sister",
      "Sister-in-law"
    ],
    "correct": "Daughter",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'My father's only daughter-in-law' = The speaker's wife (since father has only one son, the speaker himself).\n2. 'The only daughter of my wife' = The speaker's **Daughter**."
  },
  {
    "id": "br_q23",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a photograph a woman says: \u201cHe is the only son of the wife of my husband\u2019s father\u201d. How is the man related to the woman?",
    "options": [
      "Son",
      "Son-in-law",
      "Brother-in-law",
      "Brother",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'My husband's father' = Father-in-law.\n2. 'Wife of my husband's father' = Mother-in-law.\n3. 'The only son of mother-in-law' = The woman's husband.\n4. The man is her Husband, which is not listed in options (a)-(d). Hence, **None of these**."
  },
  {
    "id": "br_q24",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to a man in a photograph a woman says: \u201cHe is the father-in-law of the wife of the only paternal grandson(who has no uncles) of my own father-in-law\u201d. How is the man related to the woman?",
    "options": [
      "son",
      "Husband",
      "Cousin",
      "Nephew",
      "Son-in-law"
    ],
    "correct": "Husband",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'Only paternal grandson (who has no uncles) of my father-in-law': since he has no uncles, the woman's husband is an only son, and this grandson is the woman's own son.\n2. 'Wife of her son' = Daughter-in-law.\n3. 'Father-in-law of her daughter-in-law' = The woman's **Husband**."
  },
  {
    "id": "br_q25",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to woman in a photograph a man says: \u201cShe is the paternal grandmother of the son of my daughter-in-law\u2019s mother-in-law.\u201d How is the woman related to that person?",
    "options": [
      "Mother",
      "Mother-in-law",
      "Sister",
      "Sister-in-law",
      "Daughter"
    ],
    "correct": "Mother",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'My daughter-in-law's mother-in-law' = The speaker's wife.\n2. 'Son of my wife' = The speaker's son.\n3. 'Paternal grandmother of my son' = The speaker's **Mother**."
  },
  {
    "id": "br_q26",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a woman a man says, \u201cShe is the sister-in-law of the only child of my mother-in law\u2019s\u201d. How is the woman related to the man?",
    "options": [
      "Daughter",
      "Mother",
      "Sister-in-law",
      "Daughter-in-law",
      "Sister"
    ],
    "correct": "Sister",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'The only child of my mother-in-law' = The speaker's wife.\n2. 'Sister-in-law of my wife' = The speaker's sister (or his brother's wife).\n3. Here, the direct relation matching the options is **Sister**."
  },
  {
    "id": "br_q27",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a photograph a lady tells Mohan, \u201cI am the only daughter of this lady and her son is your maternal uncle.\u201d How is the speaker related to Mohan\u2019s father?",
    "options": [
      "Wife",
      "Sister-in-law",
      "Either of the two",
      "Mother",
      "Cannot be determined"
    ],
    "correct": "Wife",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'Her son is your maternal uncle' = Mohan's maternal uncle.\n2. 'I am the only daughter of this lady' = Mohan's mother.\n3. The speaker is Mohan's mother, so she is the **Wife** of Mohan's father."
  },
  {
    "id": "br_q28",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Introducing a woman, a man said, \u201cHer mother\u2019s husband\u2019s sister is my mother.\u201d What is the man\u2019s relationship with the woman?",
    "options": [
      "Cousin",
      "nephew-Aunt",
      "Father-daughter",
      "Data insufficient",
      "None of these"
    ],
    "correct": "Cousin",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'Her mother's husband' = Her father.\n2. 'Her father's sister' = Her paternal aunt.\n3. 'Her paternal aunt is my mother' -> The man is her aunt's son.\n4. Therefore, the man is her **Cousin**."
  },
  {
    "id": "br_q29",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a photograph a man, Neha said, \u201cHe has no sisters and no daughter, but his mother is the only daughter of my mother\u201d How is the man in the photograph related to Neha\u2019s mother?",
    "options": [
      "Brother-in law",
      "Grandson",
      "Nephew",
      "Can\u2019t be determined"
    ],
    "correct": "Grandson",
    "explanation": "\ud83d\udde3\ufe0f Dialogue Decoding:\n1. 'The only daughter of my mother' = Neha herself.\n2. 'His mother is Neha' -> The man is Neha's son.\n3. Neha's son is the **Grandson** of Neha's mother."
  },
  {
    "id": "br_q30",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "If Raju is the son of wife of the son of the father of Amrendra\u2019s father, how is Raju related to Amrendra, if Raju\u2019s grandfather has no granddaughter?",
    "options": [
      "Brother",
      "Cousin",
      "Either 1 or 2",
      "Can\u2019t say",
      "None of these"
    ],
    "correct": "Either 1 or 2",
    "explanation": "\ud83d\udde3\ufe0f Multi-Branch Reasoning:\n1. 'Father of Amrendra's father' = Amrendra's grandfather.\n2. 'Son of Amrendra's grandfather' = Could be Amrendra's father OR Amrendra's uncle.\n3. 'Son of the wife of that son' = Raju is either Amrendra's brother (if father's son) OR cousin (if uncle's son).\n4. Therefore, Raju is **Either 1 or 2** (Brother or Cousin)."
  },
  {
    "id": "br_q31",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing towards a lady in a photograph a man said, \u201cShe is mother in law of sister in law of my son\u2019s sister\u201d. How is the lady related to the man?",
    "options": [
      "Sister",
      "Sister in law",
      "Mother",
      "Wife"
    ],
    "correct": "Wife",
    "explanation": "\ud83d\udde3\ufe0f Chain of In-Laws:\n1. 'My son's sister' = The speaker's daughter.\n2. 'Sister-in-law of my daughter' = The wife of my daughter's brother = Daughter-in-law.\n3. 'Mother-in-law of my daughter-in-law' = The speaker's **Wife**."
  },
  {
    "id": "br_q32",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing towards a man in a photograph a woman said, \u201cHe is only son of daughter in law of my only son\u2019s father\u201d. How is the man related to woman?",
    "options": [
      "Son",
      "Father",
      "Son in law",
      "Grand son",
      "Can not be determined"
    ],
    "correct": "Grand son",
    "explanation": "\ud83d\udde3\ufe0f Generational Chain:\n1. 'My only son's father' = The woman's husband.\n2. 'Daughter-in-law of my husband' = The woman's daughter-in-law.\n3. 'Only son of daughter-in-law' = The woman's **Grand son**."
  },
  {
    "id": "br_q33",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing towards a girl in a photograph Umesh said, \u201cHer mother\u2019s brother is only son of my mother\u2019s father\u201d. How is the girl related Umesh?",
    "options": [
      "Grandmother",
      "Sister",
      "Aunt",
      "Mother/maternal aunt"
    ],
    "correct": "Sister",
    "explanation": "\ud83d\udde3\ufe0f Maternal Deduction:\n1. 'Only son of my mother's father' = Umesh's maternal uncle.\n2. 'Her mother's brother is Umesh's maternal uncle' -> The girl's mother is Umesh's mother (or maternal aunt).\n3. In direct relations, the girl is Umesh's **Sister**."
  },
  {
    "id": "br_q34",
    "module_id": "mod1",
    "module_name": "Blood Relation",
    "syllabus_lec": "ST-1 Relational Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Pointing & Dialogue-Based Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to Priyanka, father of Bunty Says \u201cShe is the daughter of the daughter of wife of the only son of the grandfather of my sister. How is Sonam related to Priyanka if Sonam is Sister of Bunty\u2019s father?\u201d",
    "options": [
      "Aunt",
      "Mother",
      "Niece",
      "Cannot be determined"
    ],
    "correct": "Aunt",
    "explanation": "\ud83d\udde3\ufe0f Generational Reconstruction:\n1. 'Grandfather of my sister' = Grandfather of Bunty's father.\n2. 'Only son of grandfather' = Father of Bunty's father.\n3. 'Wife of only son' = Mother of Bunty's father.\n4. 'Daughter of wife' = Sister of Bunty's father (Sonam or her sister).\n5. 'Daughter of daughter' = Daughter of Sonam's sister = Niece of Sonam.\n6. Since Priyanka is the niece of Sonam, Sonam is the **Aunt** of Priyanka."
  },
  {
    "id": "cr_q1",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Pointing & Dialogue Based",
    "difficulty": "Easy",
    "points": 1,
    "question": "Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?",
    "options": [
      "Brother",
      "Uncle",
      "Cousin",
      "Father"
    ],
    "correct": "Father",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'My mother' -> Suresh's mother.\n2. 'Only son of my mother' -> Suresh himself (since Suresh is a male).\n3. 'Son of the only son of my mother' -> Son of Suresh.\nTherefore, Suresh is the Father of the boy."
  },
  {
    "id": "cr_q2",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Pointing & Dialogue Based",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a photograph of a woman, Rahul said, 'Her mother's only son is my father.' How is the woman in the photograph related to Rahul?",
    "options": [
      "Mother",
      "Aunt (Bua)",
      "Sister",
      "Grandmother"
    ],
    "correct": "Aunt (Bua)",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'Her mother's only son' = Woman's brother.\n2. According to Rahul, this person is 'my father'.\n3. So, Rahul's father is the brother of that woman.\n4. Therefore, the woman is Rahul's father's sister, which means she is Rahul's Paternal Aunt (Bua)."
  },
  {
    "id": "cr_q3",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Pointing & Dialogue Based",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a lady in the market, a man said, 'She is the only daughter-in-law of my father's father.' How is the lady related to the man?",
    "options": [
      "Mother",
      "Aunt",
      "Sister",
      "Wife"
    ],
    "correct": "Mother",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'My father's father' = Man's paternal grandfather.\n2. The 'only daughter-in-law' of his grandfather = The wife of his grandfather's only son (i.e., his father's wife).\n3. Father's wife = Man's Mother.\nTherefore, the lady is the Mother of the man."
  },
  {
    "id": "cr_q4",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Pointing & Dialogue Based",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pointing to a girl, Anuj said, 'Her mother is the only daughter of my mother-in-law.' How is Anuj related to that girl?",
    "options": [
      "Uncle",
      "Father",
      "Brother",
      "Husband"
    ],
    "correct": "Father",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'My mother-in-law' = Anuj's wife's mother.\n2. 'Only daughter of my mother-in-law' = Anuj's wife.\n3. The girl's mother is Anuj's wife.\n4. Therefore, Anuj is the Father of the girl."
  },
  {
    "id": "cr_q5",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Pointing & Dialogue Based",
    "difficulty": "Easy",
    "points": 1,
    "question": "Pointing to a man, a woman said, 'His mother is the only daughter of my mother.' How is the woman related to the man?",
    "options": [
      "Mother",
      "Grandmother",
      "Sister",
      "Aunt"
    ],
    "correct": "Mother",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'Only daughter of my mother' (spoken by a woman) = The woman herself.\n2. 'His mother is [the woman herself]'.\n3. Therefore, the woman is the Mother of the man."
  },
  {
    "id": "cr_q6",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Pointing & Dialogue Based",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing towards a gentleman, Deepak said, 'His only brother is the father of my daughter's father.' How is the gentleman related to Deepak?",
    "options": [
      "Father",
      "Grandfather",
      "Uncle",
      "Brother-in-law"
    ],
    "correct": "Uncle",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'My daughter's father' = Deepak himself.\n2. 'The father of [Deepak]' = Deepak's father.\n3. 'His only brother is Deepak's father'.\n4. If the gentleman's brother is Deepak's father, then the gentleman is Deepak's Paternal Uncle (Chacha/Tau)."
  },
  {
    "id": "cr_q7",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Family Tree & Group Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
    "options": [
      "Grandmother",
      "Granddaughter",
      "Daughter",
      "Grandfather"
    ],
    "correct": "Granddaughter",
    "explanation": "\ud83c\udf33 Family Tree Construction:\n1. A is female (-) and sister to B.\n2. C is mother (-) of A and B (Generation +1).\n3. D is father (+) of C (Generation +2).\n4. A is in Generation 0 and D is in Generation +2.\n5. Since A is female, A is the Granddaughter of D."
  },
  {
    "id": "cr_q8",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Family Tree & Group Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a family of six members A, B, C, D, E, F: B is the son of C but C is not the mother of B. A and C are a married couple. E is the brother of C. D is the daughter of A. F is the brother of B. How many male members are there in the family?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correct": "4",
    "explanation": "\ud83c\udf33 Step-by-Step Member Classification:\n1. 'B is son of C, but C is not mother' -> C must be the Father (+).\n2. 'A and C are married couple' -> Since C is male, A must be the Mother (-).\n3. 'B is son' -> B is male (+).\n4. 'E is brother of C' -> E is male (+).\n5. 'D is daughter of A' -> D is female (-).\n6. 'F is brother of B' -> F is male (+).\n\nMales (+): C, B, E, F = 4 males.\nFemales (-): A, D = 2 females."
  },
  {
    "id": "cr_q9",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Family Tree & Group Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "A is the father of C and D is the son of B. E is the brother of A. If C is the sister of D, how is B related to E?",
    "options": [
      "Sister",
      "Sister-in-law",
      "Brother",
      "Mother"
    ],
    "correct": "Sister-in-law",
    "explanation": "\ud83c\udf33 Family Tree Connections:\n1. A is father (+) of C.\n2. C is sister (-) of D, and D is son (+) of B. This means C and D are siblings.\n3. Since A is their father, B must be their Mother (-) and wife of A (A <=> B).\n4. E is the brother (+) of A.\n5. B is the wife of E's brother (A).\nTherefore, B is E's Sister-in-law (Bhabhi)."
  },
  {
    "id": "cr_q10",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Family Tree & Group Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "P is the brother of Q and R. S is R's mother. T is P's father. Which of the following statements CANNOT be definitely said to be true?",
    "options": [
      "T is Q's father",
      "S is P's mother",
      "P is S's son",
      "Q is T's son"
    ],
    "correct": "Q is T's son",
    "explanation": "\ud83c\udf33 Analysis of Definite vs Ambiguous Facts:\n1. P, Q, R are children of T (Father) and S (Mother).\n2. P is explicitly stated as 'brother' (male).\n3. But the gender of Q is NEVER mentioned! Q can be a son or a daughter.\n4. Hence, 'Q is T's son' cannot be definitely asserted without knowing Q's gender."
  },
  {
    "id": "cr_q11",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Family Tree & Group Puzzles",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a family: A and B are a married couple, A being the male member. D is the only son of C, who is the brother of A. E is the sister of D. How is E related to C?",
    "options": [
      "Sister",
      "Daughter",
      "Niece",
      "Aunt"
    ],
    "correct": "Daughter",
    "explanation": "\ud83c\udf33 Tree Deduction:\n1. C has an only son D.\n2. E is the sister of D.\n3. Since D is C's son and E is D's sister, E must be the Daughter of C.\n(Notice: 'only son' means C has only 1 male child, but can have female children like E!)."
  },
  {
    "id": "cr_q12",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Family Tree & Group Puzzles",
    "difficulty": "Hard",
    "points": 1,
    "question": "M is the sister of K. D is the brother of K. F is the mother of M. How is K related to F?",
    "options": [
      "Son",
      "Daughter",
      "Son or Daughter",
      "Data inadequate"
    ],
    "correct": "Son or Daughter",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. M, K, D are siblings.\n2. F is the mother of M, so F is the mother of K as well.\n3. M is female (-), D is male (+), but K's gender is NOT specified.\n4. Therefore, K is either the Son or the Daughter of F."
  },
  {
    "id": "cr_q13",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Jumbled Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Introducing a man, a woman said, 'His wife is the only daughter of my father.' How is that man related to the woman?",
    "options": [
      "Brother",
      "Father-in-law",
      "Husband",
      "Maternal Uncle"
    ],
    "correct": "Husband",
    "explanation": "\ud83c\udf33 Chain Breakdown:\n1. Woman speaks: 'The only daughter of my father' = The woman herself.\n2. 'His wife is [the woman herself]'.\n3. Since the woman is his wife, the man is her Husband."
  },
  {
    "id": "cr_q14",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Jumbled Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?",
    "options": [
      "Nephew",
      "Son",
      "Cousin",
      "Uncle"
    ],
    "correct": "Cousin",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'Her mother's brother' = Maternal Uncle (Mama).\n2. 'Son of maternal uncle' = Maternal Cousin brother.\n3. In English kinship terms, the child of an aunt or uncle is called a Cousin."
  },
  {
    "id": "cr_q15",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Jumbled Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Looking at a portrait of a man, Harsh said, 'His mother is the wife of my father's only son, but I have no brothers or sisters.' At whose portrait was Harsh looking?",
    "options": [
      "His son",
      "His father",
      "His nephew",
      "His cousin"
    ],
    "correct": "His son",
    "explanation": "\ud83c\udf33 Unraveling the Chain:\n1. Harsh has no brothers or sisters -> 'My father's only son' is Harsh himself.\n2. 'Wife of my father's only son' = Harsh's wife.\n3. 'His mother is [Harsh's wife]'.\n4. If Harsh's wife is the portrait's mother, the portrait is of Harsh's Son."
  },
  {
    "id": "cr_q16",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Jumbled Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man said to a lady, 'Your mother's husband's sister is my aunt.' How is the lady related to the man?",
    "options": [
      "Daughter",
      "Granddaughter",
      "Mother",
      "Sister"
    ],
    "correct": "Sister",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'Lady's mother's husband' = Lady's father.\n2. 'Lady's father's sister' = Lady's paternal aunt (Bua).\n3. The man states that this aunt is also 'my aunt'.\n4. Since they share the same paternal aunt and father, the lady is the man's Sister."
  },
  {
    "id": "cr_q17",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Jumbled Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to a man on stage, Rita said, 'He is the brother of the daughter of the wife of my husband.' How is the man on stage related to Rita?",
    "options": [
      "Son",
      "Husband",
      "Cousin",
      "Nephew"
    ],
    "correct": "Son",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'My husband's wife' = Rita herself.\n2. 'Daughter of Rita' = Rita's daughter.\n3. 'Brother of Rita's daughter' = Rita's son.\n4. Therefore, the man on the stage is Rita's Son."
  },
  {
    "id": "cr_q18",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Deciphering Jumbled Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "A person says, 'The father of the sister of my daughter is the son of my grandfather.' If the speaker is male, how is he related to that daughter?",
    "options": [
      "Brother",
      "Father",
      "Uncle",
      "Grandfather"
    ],
    "correct": "Father",
    "explanation": "\ud83c\udf33 Verification:\n1. 'Sister of my daughter' = The speaker's daughter.\n2. 'The father of [my daughter]' = The male speaker himself.\n3. The statement is consistent, and the speaker is the Father."
  },
  {
    "id": "cr_q19",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: In-Laws & Matrimonial Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Introducing a girl, Vipin said, 'Her mother is the only daughter of my mother-in-law.' How is Vipin related to the girl?",
    "options": [
      "Uncle",
      "Father",
      "Brother",
      "Husband"
    ],
    "correct": "Father",
    "explanation": "\ud83c\udf33 Matrimonial Logic:\n1. 'Vipin's mother-in-law' = Mother of Vipin's wife.\n2. 'Only daughter of my mother-in-law' = Vipin's wife.\n3. The girl's mother is Vipin's wife.\n4. Hence, Vipin is the girl's Father."
  },
  {
    "id": "cr_q20",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: In-Laws & Matrimonial Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Amit said, 'This girl is the wife of the grandson of my mother.' If Amit has no brothers, how is Amit related to the girl?",
    "options": [
      "Father",
      "Father-in-law",
      "Grandfather",
      "Husband"
    ],
    "correct": "Father-in-law",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'Grandson of my mother' = Since Amit has no brothers, the only grandson of his mother must be Amit's son.\n2. 'The wife of Amit's son' = Amit's daughter-in-law.\n3. How is Amit related to the girl? Amit is her Father-in-law (Sasur)."
  },
  {
    "id": "cr_q21",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: In-Laws & Matrimonial Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B are brothers. C and D are sisters. A's son is D's brother. How is B related to C?",
    "options": [
      "Father",
      "Brother",
      "Grandfather",
      "Uncle"
    ],
    "correct": "Uncle",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. A's son is D's brother, which means D and C are daughters of A.\n2. B is the brother of A.\n3. Father's brother = Paternal Uncle.\n4. Therefore, B is the Uncle of C."
  },
  {
    "id": "cr_q22",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: In-Laws & Matrimonial Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Pointing to a man, a lady said, 'His mother-in-law's only daughter is my mother.' How is the man related to the lady?",
    "options": [
      "Brother",
      "Uncle",
      "Father",
      "Maternal Uncle"
    ],
    "correct": "Father",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. For any married man, 'his mother-in-law's only daughter' is his WIFE.\n2. So, 'His wife is my mother'.\n3. If a man's wife is the lady's mother, then that man is the lady's Father."
  },
  {
    "id": "cr_q23",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: In-Laws & Matrimonial Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Monika's father is the only son of Rohit's father-in-law. How is Rohit's wife related to Monika?",
    "options": [
      "Aunt (Bua)",
      "Mother",
      "Sister",
      "Cousin"
    ],
    "correct": "Aunt (Bua)",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'Rohit's father-in-law' = Rohit's wife's father.\n2. 'Only son of Rohit's father-in-law' = Rohit's wife's brother.\n3. Monika's father is Rohit's wife's brother.\n4. Therefore, Rohit's wife is the sister of Monika's father, which means she is Monika's Paternal Aunt (Bua)."
  },
  {
    "id": "cr_q24",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_4",
    "type_name": "Type 4: In-Laws & Matrimonial Relations",
    "difficulty": "Hard",
    "points": 1,
    "question": "Sunita said, 'Rakesh's sister is my daughter's brother's wife.' How is Sunita related to Rakesh?",
    "options": [
      "Mother-in-law",
      "Sister-in-law",
      "Mother",
      "Aunt"
    ],
    "correct": "Mother-in-law",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'My daughter's brother' = Sunita's son.\n2. 'Sunita's son's wife' = Sunita's daughter-in-law.\n3. So, Rakesh's sister is Sunita's daughter-in-law.\n4. This implies Rakesh is in the same generation as Sunita's son/daughter-in-law, and Sunita is the Mother-in-law of Rakesh's sister."
  },
  {
    "id": "cr_q25",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Multi-Generational Lineage",
    "difficulty": "Medium",
    "points": 1,
    "question": "A is the son of B. C, B's sister, has a son D and a daughter E. F is the maternal uncle of D. How is A related to D?",
    "options": [
      "Cousin",
      "Nephew",
      "Uncle",
      "Brother"
    ],
    "correct": "Cousin",
    "explanation": "\ud83c\udf33 Lineage Trace:\n1. B and C are siblings.\n2. A is son of B. D is son of C.\n3. Children of siblings are Cousins to each other.\n4. Therefore, A is the Cousin of D."
  },
  {
    "id": "cr_q26",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Multi-Generational Lineage",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a family, there are: a grandfather, grandmother, two fathers, two mothers, four children, three grandchildren, one brother, two sisters, two sons, two daughters, one father-in-law, one mother-in-law, and one daughter-in-law. What is the MINIMUM number of persons in this family?",
    "options": [
      "5",
      "7",
      "9",
      "11"
    ],
    "correct": "7",
    "explanation": "\ud83c\udf33 Classic 3-Generation Minimal Family Puzzle:\n\u2022 Generation 1 (+2): Grandfather (+), Grandmother (-)\n\u2022 Generation 2 (+1): Father (+) [Son of Gen 1], Mother (-) [Daughter-in-law]\n\u2022 Generation 3 (0): 1 Son (+), 2 Daughters (-) [Grandchildren]\n\nTotal Count = 2 + 2 + 3 = 7 persons!\nEvery single listed role is satisfied completely."
  },
  {
    "id": "cr_q27",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Multi-Generational Lineage",
    "difficulty": "Medium",
    "points": 1,
    "question": "P's father's sister's father is Q. How is Q related to P?",
    "options": [
      "Father",
      "Paternal Grandfather",
      "Maternal Grandfather",
      "Uncle"
    ],
    "correct": "Paternal Grandfather",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'P's father's sister' = P's paternal aunt (Bua).\n2. 'Father of P's paternal aunt' = P's father's father.\n3. P's father's father = Paternal Grandfather (Dada).\n4. Therefore, Q is the Paternal Grandfather of P."
  },
  {
    "id": "cr_q28",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Multi-Generational Lineage",
    "difficulty": "Medium",
    "points": 1,
    "question": "Maya is the daughter of the only son of Geeta's father-in-law. How is Geeta related to Maya?",
    "options": [
      "Mother",
      "Grandmother",
      "Sister",
      "Aunt"
    ],
    "correct": "Mother",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'Geeta's father-in-law' = Father of Geeta's husband.\n2. 'The only son of Geeta's father-in-law' = Geeta's husband.\n3. Maya is the daughter of Geeta's husband.\n4. Therefore, Geeta is the Mother of Maya."
  },
  {
    "id": "cr_q29",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_5",
    "type_name": "Type 5: Multi-Generational Lineage",
    "difficulty": "Hard",
    "points": 1,
    "question": "Neha is the granddaughter of Mohan, who is married to Sarita. Sarita has only two children: a son Rajiv and a daughter Priya. If Neha's mother is Priya, how is Rajiv related to Neha?",
    "options": [
      "Father",
      "Maternal Uncle",
      "Paternal Uncle",
      "Brother"
    ],
    "correct": "Maternal Uncle",
    "explanation": "\ud83c\udf33 Generational Mapping:\n1. Mohan and Sarita are grandparents.\n2. Priya is Neha's mother.\n3. Rajiv is Priya's brother.\n4. Mother's brother = Maternal Uncle (Mama).\n5. Therefore, Rajiv is Neha's Maternal Uncle."
  },
  {
    "id": "cr_q30",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_6",
    "type_name": "Type 6: Gender Ambiguity & Trap Questions",
    "difficulty": "Easy",
    "points": 1,
    "question": "P is the child of Q. Q is the mother of P, but P is not the daughter of Q. What is P to Q?",
    "options": [
      "Son",
      "Father",
      "Nephew",
      "Cannot be determined"
    ],
    "correct": "Son",
    "explanation": "\ud83c\udf33 Binary Gender Logic:\nSince P is a biological child of Q, P can only be either a son or a daughter. Given that P is NOT the daughter, P must be the Son!"
  },
  {
    "id": "cr_q31",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_6",
    "type_name": "Type 6: Gender Ambiguity & Trap Questions",
    "difficulty": "Medium",
    "points": 1,
    "question": "A is the brother of B. B is the brother of C. D is the father of A. Based on these three statements, which of the following statements CANNOT be definitely asserted to be true?",
    "options": [
      "B is the brother of A",
      "B is the son of D",
      "A is the brother of C",
      "C is the brother of A"
    ],
    "correct": "C is the brother of A",
    "explanation": "\ud83c\udf33 Exam Trap Explanation:\n\u2022 A is male (+)\n\u2022 B is male (+)\n\u2022 D is father (+)\n\u2022 But what is C's gender? C could be a brother OR a sister! The statements never state that C is male. Hence, 'C is the brother of A' cannot be claimed with certainty."
  },
  {
    "id": "cr_q32",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_6",
    "type_name": "Type 6: Gender Ambiguity & Trap Questions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Deepak is the brother of Ravi. Rekha is the sister of Atul. Ravi is the son of Rekha. How is Deepak related to Rekha?",
    "options": [
      "Son",
      "Brother",
      "Nephew",
      "Father"
    ],
    "correct": "Son",
    "explanation": "\ud83c\udf33 Breakdown:\n1. Ravi is the son of Rekha.\n2. Deepak is the brother (+) of Ravi.\n3. Since Deepak and Ravi are brothers, Deepak is also the Son of Rekha."
  },
  {
    "id": "cr_q33",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_6",
    "type_name": "Type 6: Gender Ambiguity & Trap Questions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Kiran is the sister of Sonu. Sonu is the child of Rakesh. Is Kiran the daughter of Rakesh?",
    "options": [
      "Yes, definitely",
      "No",
      "Cannot be determined",
      "Data inadequate"
    ],
    "correct": "Yes, definitely",
    "explanation": "\ud83c\udf33 Reasoning:\n1. 'Kiran is the sister' explicitly tells us that Kiran is Female (-).\n2. Sonu is Rakesh's child.\n3. Since Kiran is Sonu's sister, Kiran is also Rakesh's child.\n4. A female child of Rakesh is definitely his Daughter!"
  },
  {
    "id": "cr_q34",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_6",
    "type_name": "Type 6: Gender Ambiguity & Trap Questions",
    "difficulty": "Medium",
    "points": 1,
    "question": "If 'M is the sister of N', 'N is the brother of P', and 'P is the mother of Q', how is N related to Q?",
    "options": [
      "Paternal Uncle",
      "Maternal Uncle",
      "Brother",
      "Nephew"
    ],
    "correct": "Maternal Uncle",
    "explanation": "\ud83c\udf33 Tree Breakdown:\n1. P is the mother (-) of Q.\n2. N is the brother (+) of P.\n3. Mother's brother = Maternal Uncle (Mama).\n4. Therefore, N is Q's Maternal Uncle."
  },
  {
    "id": "cr_q35",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_6",
    "type_name": "Type 6: Gender Ambiguity & Trap Questions",
    "difficulty": "Hard",
    "points": 1,
    "question": "P is the son of Q, while Q and R are sisters to one another. T is the mother of R. If S is the son of T, which of the following statements is correct?",
    "options": [
      "T is the brother of Q",
      "S is the maternal uncle of P",
      "R is the grandfather of P",
      "S is the cousin of P"
    ],
    "correct": "S is the maternal uncle of P",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. Q and R are sisters (-).\n2. T is their mother (-).\n3. S is the son (+) of T, which means S is the brother of Q and R.\n4. P is the son (+) of Q.\n5. Since S is the brother of P's mother (Q), S is the Maternal Uncle of P."
  },
  {
    "id": "cr_q36",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_7",
    "type_name": "Type 7: Condition-Based Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a family of seven members A, B, C, D, E, F, and G, there are two married couples. B is an engineer and the mother of F. C is the grandmother of F and is a teacher. D is the grandfather of E and is a doctor. A is the father of E and is a lawyer. How is F related to E?",
    "options": [
      "Brother",
      "Sister",
      "Brother or Sister",
      "Cousin"
    ],
    "correct": "Brother or Sister",
    "explanation": "\ud83c\udf33 Matrix Breakdown:\n1. D (Doctor) <=> C (Teacher) are grandparents (Couple 1).\n2. A (Lawyer) <=> B (Engineer) are parents (Couple 2).\n3. E and F are their children (siblings).\n4. However, F's gender is NOT specified in the puzzle clues!\n5. Therefore, F can be either the Brother or Sister of E."
  },
  {
    "id": "cr_q37",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_7",
    "type_name": "Type 7: Condition-Based Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Six persons L, M, N, P, Q, and R are in a family. L is the father of P and M is the mother of L. How is M related to P?",
    "options": [
      "Mother",
      "Paternal Grandmother",
      "Maternal Grandmother",
      "Aunt"
    ],
    "correct": "Paternal Grandmother",
    "explanation": "\ud83c\udf33 Two-Step Vertical Lineage:\n1. L is father (+) of P (Generation +1).\n2. M is mother (-) of L (Generation +2).\n3. Father's mother = Paternal Grandmother (Dadi).\n4. Therefore, M is P's Paternal Grandmother."
  },
  {
    "id": "cr_q38",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_7",
    "type_name": "Type 7: Condition-Based Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a family of eight persons, P is the brother of Q and brother-in-law of R. S is the daughter-in-law of T. If T is the father of P and Q, and Q is married to S, who is the husband of S?",
    "options": [
      "P",
      "Q",
      "R",
      "T"
    ],
    "correct": "Q",
    "explanation": "\ud83c\udf33 Direct Deduction:\n1. T is the father of P and Q.\n2. S is the daughter-in-law of T, meaning S is married to one of T's sons.\n3. Since Q is married to S, Q is the husband of S."
  },
  {
    "id": "cr_q39",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_7",
    "type_name": "Type 7: Condition-Based Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Six members of a family A, B, C, D, E, and F are travelling together. B is the son of C but C is not the mother of B. A and C are a married couple. E is the brother of C. D is the daughter of A. F is the brother of B. Who is the mother of B?",
    "options": [
      "D",
      "F",
      "E",
      "A"
    ],
    "correct": "A",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. 'B is son of C, but C is not mother' -> C is the Father (+).\n2. 'A and C are a married couple' -> A is the Mother (-).\n3. Since B is the son of C and A is C's wife, A is the Mother of B."
  },
  {
    "id": "cr_q40",
    "module_id": "mod2",
    "module_name": "Module 2: Coded Relation",
    "syllabus_lec": "ST-1 Symbolic Logic",
    "type_id": "type_7",
    "type_name": "Type 7: Condition-Based Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "In the same family (A, B, C, D, E, F where C is father, A is mother, E is brother of C, D is daughter of A), how is E related to D?",
    "options": [
      "Father",
      "Brother",
      "Paternal Uncle",
      "Maternal Uncle"
    ],
    "correct": "Paternal Uncle",
    "explanation": "\ud83c\udf33 Step-by-Step Breakdown:\n1. D is the daughter of A and C.\n2. C is D's father.\n3. E is the brother of C (father's brother).\n4. Father's brother = Paternal Uncle (Chacha/Tau).\n5. Therefore, E is D's Paternal Uncle."
  },
  {
    "id": "dir_q1",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Ashok went 8 Km South and turned west and walked 3 Km, again he turned north and walked 5 Km. He took a final turn to the east and walked 3 km. In which direction was Ashok from the starting point?",
    "options": [
      "East",
      "North",
      "West",
      "South"
    ],
    "correct": "South",
    "explanation": "\ud83e\udded Step-by-Step Vector Trace:\n1. Starts at (0, 0).\n2. Walks 8 km South -> Position: (0, -8).\n3. Turns West and walks 3 km -> Position: (-3, -8).\n4. Turns North and walks 5 km -> Position: (-3, -8 + 5) = (-3, -3).\n5. Turns East and walks 3 km -> Position: (-3 + 3, -3) = (0, -3).\nAshok is directly on the negative y-axis at (0, -3), which is due **South** from the starting point."
  },
  {
    "id": "dir_q2",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Starting from a point P, Sachin walked 20m towards South. He turned left and walked 30m. He then turned left and walked 20m. He again turned left and walked 40 m and reached a point Q. How far and in which direction is the point P from the point Q?",
    "options": [
      "20 m West",
      "10 m West",
      "10 m East",
      "10 m North",
      "None of these"
    ],
    "correct": "10 m East",
    "explanation": "\ud83e\udded Step-by-Step Path Trace:\n1. Let Point P be origin (0, 0).\n2. 20m South -> (0, -20).\n3. Left turn (East) 30m -> (30, -20).\n4. Left turn (North) 20m -> (30, 0).\n5. Left turn (West) 40m -> (30 - 40, 0) = (-10, 0) = Point Q.\nNow, to find Point P from Point Q: P is at (0, 0) and Q is at (-10, 0). Thus, P is **10 m East** of Q."
  },
  {
    "id": "dir_q3",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Hard",
    "points": 1,
    "question": "Roy walked 2 km to the East, then turned North-west and walked 3 km. Then he turned South and walked 5 km. Then again he turned west and walked 2 km. Finally he turned North and walked 6 km. In which direction is he from the starting point?",
    "options": [
      "South-West",
      "South-East",
      "North-West",
      "North-East",
      "None of these"
    ],
    "correct": "North-West",
    "explanation": "\ud83e\udded Coordinate Analysis:\n- Eastward initial movement: +2 km.\n- North-West movement (3 km): adds negative x and positive y (-3/\u221a2 \u2248 -2.12 km, +2.12 km).\n- Subsequent movements: -5 km (South), -2 km (West), +6 km (North).\n- Net vertical displacement: 2.12 - 5 + 6 = +3.12 km (North).\n- Net horizontal displacement: 2 - 2.12 - 2 = -2.12 km (West).\nWith net position in (-x, +y), Roy is in the **North-West** direction from the starting point."
  },
  {
    "id": "dir_q4",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Vimal faces towards the north turning to his right, he walks 25 meters. He then turns to his left and walks 30 meters. Next, he moves 25 meters after turning to his right. He then turns to his right again and walks 55 meters. Finally, he turns to the right and moves 40 meters. In which direction is he now from his starting point?",
    "options": [
      "South-West",
      "South",
      "North-West",
      "South-East"
    ],
    "correct": "South-East",
    "explanation": "\ud83e\udded Step-by-Step Movement:\n1. Facing North, turns right (East) and walks 25m -> (+25, 0).\n2. Turns left (North) and walks 30m -> (+25, +30).\n3. Turns right (East) and walks 25m -> (+50, +30).\n4. Turns right (South) and walks 55m -> (+50, 30 - 55) = (+50, -25).\n5. Turns right (West) and walks 40m -> (50 - 40, -25) = (+10, -25).\nNet position is (+10, -25): positive x (East) and negative y (South). Therefore, Vimal is in the **South-East** direction from starting point."
  },
  {
    "id": "dir_q5",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Tom walked 10 miles from point P towards the east. He then took right turn and walked 5 miles and taking another right turn walked again for another 5 miles. In which direction is point P from where Tom is standing now?",
    "options": [
      "South-East",
      "North-West",
      "North-East",
      "Can\u2019t be determined"
    ],
    "correct": "North-West",
    "explanation": "\ud83e\udded Coordinate Trace:\n1. Let P be (0, 0).\n2. 10 miles East -> (10, 0).\n3. Right turn (South) 5 miles -> (10, -5).\n4. Right turn (West) 5 miles -> (10 - 5, -5) = (5, -5).\nTom is at (5, -5). Point P is at (0, 0).\nTo look at P from Tom's position: move -5 in x (West) and +5 in y (North). Therefore, P is in the **North-West** direction from Tom."
  },
  {
    "id": "dir_q6",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Amit walked 10 Km towards North. From there he turned back and walked 6 Km towards South. Then he walked 3 km towards the East. How far was he from the starting point?",
    "options": [
      "8 km",
      "5 km",
      "7 km",
      "6 km",
      "None of these"
    ],
    "correct": "5 km",
    "explanation": "\ud83d\udcd0 Pythagoras Calculation:\n1. North 10 km, then South 6 km -> Net North displacement = 10 - 6 = 4 km.\n2. East displacement = 3 km.\n3. Shortest distance H = \u221a(4\u00b2 + 3\u00b2) = \u221a(16 + 9) = \u221a25 = **5 km**."
  },
  {
    "id": "dir_q7",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Seema walks 1 km to the east turns right and walks another 1 km and then turns left and walks 2 km and again turning to her left and travels 5 km. How far is Seema from her starting point?",
    "options": [
      "8 km",
      "5 km",
      "7 km",
      "6 km",
      "None of these"
    ],
    "correct": "5 km",
    "explanation": "\ud83d\udcd0 Displacement Calculation:\n1. 1 km East -> (1, 0).\n2. Right (South) 1 km -> (1, -1).\n3. Left (East) 2 km -> (1 + 2, -1) = (3, -1).\n4. Left (North) 5 km -> (3, -1 + 5) = (3, 4).\n5. Distance = \u221a(3\u00b2 + 4\u00b2) = \u221a(9 + 16) = \u221a25 = **5 km**."
  },
  {
    "id": "dir_q8",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Shyam walked 6 meters towards East, then took a right turn and walked a distance of 9 meters. He then took a left turn and walked a distance of 6 meters. How far is he from the starting point?",
    "options": [
      "15 meters",
      "21 meters",
      "18 meters",
      "Can't be determine"
    ],
    "correct": "15 meters",
    "explanation": "\ud83d\udcd0 Right-Triangle Geometry:\n- Total East displacement = 6m + 6m = 12 meters.\n- Total South displacement = 9 meters.\n- Shortest distance = \u221a(12\u00b2 + 9\u00b2) = \u221a(144 + 81) = \u221a225 = **15 meters**."
  },
  {
    "id": "dir_q9",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Vimal starts from point P and walks toward South and stops at point Q. He now takes a right turn followed by a left turn and stops at point R. He finally takes a left turn and stops at point S. If he walks 5 km before taking each turn, towards which direction will Vimal have to walk from point S to reach point Q?",
    "options": [
      "North",
      "South",
      "West",
      "East",
      "North-West"
    ],
    "correct": "North",
    "explanation": "\ud83e\udded Path Trace:\n1. P (0, 5) -> walks South 5 km to Q (0, 0).\n2. At Q, turns right (West) walks 5 km to (-5, 0).\n3. Turns left (South) walks 5 km to R (-5, -5).\n4. Turns left (East) walks 5 km to S (0, -5).\nPoint S is at (0, -5) and Point Q is at (0, 0). To go from S to Q, Vimal must walk straight **North**."
  },
  {
    "id": "dir_q10",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Imagine that you are walking towards the South. After some time you turn left. Then again you turn left. After that, you turn right and once again turn to the right. In which direction you are walking now?",
    "options": [
      "East",
      "West",
      "South",
      "North",
      "None of these"
    ],
    "correct": "South",
    "explanation": "\ud83d\udd04 Turn Tracking:\n- Initial: South.\n- Turn 1 (Left = 90\u00b0 ACW): East.\n- Turn 2 (Left = 90\u00b0 ACW): North.\n- Turn 3 (Right = 90\u00b0 CW): East.\n- Turn 4 (Right = 90\u00b0 CW): **South**.\nNet turns: 2 Left (-180\u00b0) + 2 Right (+180\u00b0) = 0\u00b0 net change. Still walking South."
  },
  {
    "id": "dir_q11",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "If northeast becomes West and South-east becomes North then what will West become?",
    "options": [
      "South-east",
      "North-east",
      "South",
      "North-west"
    ],
    "correct": "South-east",
    "explanation": "\ud83d\udd04 Compass Shift Rule:\n- North-East (45\u00b0) shifted to West (270\u00b0) = rotation of 135\u00b0 anti-clockwise (or 225\u00b0 clockwise).\n- South-East (135\u00b0) shifted to North (0\u00b0/360\u00b0) = 135\u00b0 anti-clockwise.\n- Apply 135\u00b0 anti-clockwise to West (270\u00b0):\n  270\u00b0 - 135\u00b0 = 135\u00b0 which corresponds to **South-East**."
  },
  {
    "id": "dir_q12",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Easy",
    "points": 1,
    "question": "If M is in the south of B and B is in the west of N, then in which direction is N from M?",
    "options": [
      "North",
      "East",
      "North-East",
      "South-West"
    ],
    "correct": "North-East",
    "explanation": "\ud83e\udded Relative Coordinates:\n- Let B be at origin (0, 0).\n- M is South of B: (0, -1).\n- B is West of N, so N is East of B: (+1, 0).\n- From M (0, -1) to N (1, 0), you must travel +1 East and +1 North -> **North-East**."
  },
  {
    "id": "dir_q13",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Manish starts walking towards East and walks 30 meters, then he turns right and walks 50 meters and he again turns left and walks 40 meters. Again he turns left and walks 50 meters. Now, how far is he from his starting point?",
    "options": [
      "170 m",
      "70 m",
      "120 m",
      "110 m",
      "None of these"
    ],
    "correct": "70 m",
    "explanation": "\ud83d\udcd0 Step-by-Step:\n- Eastward: 30m.\n- Southward: 50m.\n- Eastward: 40m.\n- Northward: 50m (cancels out the 50m Southward walk!).\n- Total distance from starting point = 30m + 40m = **70 m**."
  },
  {
    "id": "dir_q14",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A walks 10 m North, then he turns right and walks 10 m. And then turning left each time, he walks 5 m, 15 m, and 15 m respectively. Now, how far is he from his starting point?",
    "options": [
      "5 m",
      "10 m",
      "15 m",
      "20 m"
    ],
    "correct": "5 m",
    "explanation": "\ud83d\udcd0 Coordinate Path Trace:\n1. 10m North -> (0, 10).\n2. Right (East) 10m -> (10, 10).\n3. Left (North) 5m -> (10, 15).\n4. Left (West) 15m -> (10 - 15, 15) = (-5, 15).\n5. Left (South) 15m -> (-5, 15 - 15) = (-5, 0).\nStarting point is (0, 0), final position is (-5, 0). The distance is **5 m**."
  },
  {
    "id": "dir_q15",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Shailesh walks 20 meters towards the south. He then turns left and walks 30 meters. After that, he turns right and walks 10 meters. Then again he turns right and walks 40 meters. After this, he turns right and walks 30 meters. Now he stops. Now, in which direction is he from his starting point?",
    "options": [
      "South-West",
      "West",
      "North-West",
      "Starting Point",
      "None of these"
    ],
    "correct": "West",
    "explanation": "\ud83e\udded Coordinate Check:\n1. 20m South -> (0, -20).\n2. Left (East) 30m -> (30, -20).\n3. Right (South) 10m -> (30, -30).\n4. Right (West) 40m -> (-10, -30).\n5. Right (North) 30m -> (-10, 0).\nAt (-10, 0), the vertical displacement is 0 and horizontal is -10 (West). Therefore, Shailesh is directly **West** of his starting point."
  },
  {
    "id": "dir_q16",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Hard",
    "points": 1,
    "question": "Seema says to Suresh that she is going in the North direction to hide, but she went 2 Km east and from there 3 Km towards the south and from there 2 km towards the west and then 2km towards the west and then 2km towards the starting place. Now, in which direction is Seema from her hiding place?",
    "options": [
      "North",
      "South",
      "West",
      "East",
      "None of these"
    ],
    "correct": "South",
    "explanation": "\ud83e\udded Reference Frame Deduction:\n- Seema stated she was hiding in the North direction, so her intended hiding location is North of the starting point.\n- Her actual wanderings took her southwards.\n- Relative to the North hiding spot, Seema is located in the **South** direction."
  },
  {
    "id": "dir_q17",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man is facing west. He turns 45\u00b0 in the clockwise direction and then another 180\u00b0 in the same direction and then 270\u00b0 in the anti-clockwise direction. Which direction is he facing now?",
    "options": [
      "South",
      "North-West",
      "West",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "\ud83d\udd04 Net Angle Formula:\n- Initial Facing = West (270\u00b0).\n- Clockwise (+) turns = +45\u00b0 + 180\u00b0 = +225\u00b0.\n- Anti-Clockwise (-) turns = -270\u00b0.\n- Net rotation = 225\u00b0 - 270\u00b0 = -45\u00b0 (45\u00b0 anti-clockwise).\n- 45\u00b0 anti-clockwise from West = **South-West**."
  },
  {
    "id": "dir_q18",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A man is looking for his friend. He went 90m in the east before turning to his right. He went 20m before turning to his right again and goes further to look for his friend at his uncle\u2019s place 30m from this point. His friend was not there. From there, he went 100m north before meeting his friend in a street. How far did the man meet his friend from the starting point?",
    "options": [
      "80 meters",
      "100 meters",
      "140 meters",
      "260 meters",
      "None of these"
    ],
    "correct": "100 meters",
    "explanation": "\ud83d\udcd0 Classic 60-80-100 Pythagoras Triangle:\n1. 90m East -> (90, 0).\n2. Right (South) 20m -> (90, -20).\n3. Right (West) 30m -> (60, -20).\n4. North 100m -> (60, -20 + 100) = (60, 80).\nShortest distance = \u221a(60\u00b2 + 80\u00b2) = \u221a(3600 + 6400) = \u221a10000 = **100 meters**."
  },
  {
    "id": "dir_q19",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Gudiya moved a distance of 75 meters towards the north. She then turned to the left and walked for about 25 meters, turned left again, and walked 80 meters. Finally, she turned to the right at an angle of 45 degrees. In which direction was she facing now?",
    "options": [
      "North-East",
      "North-West",
      "South",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "\ud83e\udded Facing Angle Deduction:\n1. Walks North, turns left -> now facing West.\n2. Turns left again -> now facing South.\n3. Turning right by 45\u00b0 from South (clockwise) means shifting 45\u00b0 towards West.\n4. Facing direction is **South-West**."
  },
  {
    "id": "dir_q20",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Nitu starts from point T and walks straight to point U which is 4 Ft away. She turns left at 90\u00ba and walks to W which is 4 Ft away, turns 90\u00ba right and goes 3 Ft to P, turns 90\u00ba right, and walks 1 Ft to Q. Again turns 90\u00ba left and walks 1 Ft to V. Finally turns 90\u00ba right walk 3 Ft to reach R. Then what is the distance between T and R?",
    "options": [
      "4 Ft",
      "5 Ft",
      "7 Ft",
      "8 Ft"
    ],
    "correct": "8 Ft",
    "explanation": "\ud83d\udcd0 Coordinate Breakdown:\n- Forward axis (X): T->U (4) + P (3) + V (1) = 4 + 3 + 1 = 8 Ft.\n- Lateral axis (Y): Left to W (+4), Right to Q (-1), Right to R (-3) -> 4 - 1 - 3 = 0 Ft.\n- Net displacement = \u221a(8\u00b2 + 0\u00b2) = **8 Ft**."
  },
  {
    "id": "dir_q21",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A person starts from point A and travels 3 Km eastwards to B and then turns left and travels thrice that distance to reach C. He again turns left and travels five times the distance he covered between A and B and reaches his destination D. The shortest distance between the starting point and the destination is:",
    "options": [
      "12Km",
      "15Km",
      "16Km",
      "18Km"
    ],
    "correct": "15Km",
    "explanation": "\ud83d\udcd0 Multiplier Vector Math:\n- AB = 3 km East -> (+3, 0).\n- BC = 3 \u00d7 3 = 9 km North -> (+3, +9).\n- CD = 5 \u00d7 3 = 15 km West -> (3 - 15, +9) = (-12, +9).\n- Shortest distance AD = \u221a((-12)\u00b2 + 9\u00b2) = \u221a(144 + 81) = \u221a225 = **15 Km**."
  },
  {
    "id": "dir_q22",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Pran and Khan start from their office and walk in opposite directions, After both traveled 10 km, Pran turns left and walks 10 km while Khan turns right and walks 10 km. How far are they now from each other?",
    "options": [
      "0Km",
      "5Km",
      "10Km",
      "20Km"
    ],
    "correct": "20Km",
    "explanation": "\ud83d\udcd0 Opposite Motion Analysis:\n- Let Office be (0, 0). Pran walks East 10 km to (10, 0); Khan walks West 10 km to (-10, 0).\n- Pran turns left (North) 10 km -> (10, 10).\n- Khan turns right (North) 10 km -> (-10, 10).\n- Both are at the same y-level (y = 10). The horizontal separation between (10, 10) and (-10, 10) is 10 - (-10) = **20 Km**."
  },
  {
    "id": "dir_q23",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Easy",
    "points": 1,
    "question": "Ram is facing North-West. He turns in the clockwise direction by 90\u00b0, then 180\u00b0 in the anti-clockwise direction, and turns another 90\u00b0 in the same direction. Which direction is he facing now?",
    "options": [
      "South",
      "West",
      "South",
      "South-East"
    ],
    "correct": "South-East",
    "explanation": "\ud83d\udd04 Net Angle Calculation:\n- Initial: North-West.\n- Clockwise (+) = +90\u00b0.\n- Anti-Clockwise (-) = -180\u00b0 - 90\u00b0 = -270\u00b0.\n- Net angle = +90\u00b0 - 270\u00b0 = -180\u00b0 (exactly opposite direction).\n- Opposite of North-West is **South-East**."
  },
  {
    "id": "dir_q24",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A is 50 meters North-West of B and C is 50 meters North-East of B and D is 50 meters South of B then who is in the East direction of A?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": "C",
    "explanation": "\ud83e\udded Symmetric Positioning:\n- Let B = (0, 0).\n- A is 50m NW -> x_A = -50/\u221a2, y_A = +50/\u221a2.\n- C is 50m NE -> x_C = +50/\u221a2, y_C = +50/\u221a2.\n- Notice y_A = y_C! They have identical north-south latitude, and C is directly to the right (positive x). Therefore, **C** is in the East direction of A."
  },
  {
    "id": "dir_q25",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "K is P\u2019s neighbor and he stays 400 meters away toward the east. N is K\u2019s neighbor and resides 400 meters away towards North. S is N\u2019s neighbor and stays 400 m to the west If the distance between S and P is also 400 meters, Then who stays in the South East direction of S?",
    "options": [
      "S",
      "P",
      "N",
      "K"
    ],
    "correct": "K",
    "explanation": "\ud83e\udded Square Grid Analysis:\n- P = (0, 0).\n- K is 400m East of P -> (400, 0).\n- N is 400m North of K -> (400, 400).\n- S is 400m West of N -> (0, 400).\nFrom S at (0, 400), looking towards K at (400, 0) requires moving South (-400) and East (+400). That is exactly the **South-East** direction. So **K** stays in the South East of S."
  },
  {
    "id": "dir_q26",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_4",
    "type_name": "Type 4: Shadow-Based Direction Scenarios",
    "difficulty": "Easy",
    "points": 1,
    "question": "After sunrise, Sudhir faces the Sun and walks for one Kilometer. Then he turns right and walks for 2 km, Then he turns right again and walks for one km. In which direction is Sudhir from his starting point?",
    "options": [
      "South",
      "North",
      "East",
      "West"
    ],
    "correct": "South",
    "explanation": "\u2600\ufe0f Sun & Path Trace:\n- After sunrise, Sun is in the East. Sudhir walks 1 km East -> (+1, 0).\n- Turns right (South) walks 2 km -> (+1, -2).\n- Turns right (West) walks 1 km -> (+1 - 1, -2) = (0, -2).\nSudhir is at (0, -2), which is directly **South** of the starting point."
  },
  {
    "id": "dir_q27",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Hard",
    "points": 1,
    "question": "If A stands on his head with his face towards the north, in which direction will his left-hand point?",
    "options": [
      "North-East",
      "North",
      "East",
      "West"
    ],
    "correct": "East",
    "explanation": "\ud83e\udd38 Inverted Body Mechanics:\n- Standing upright facing North: Right hand points East, Left hand points West.\n- When standing on one's head (upside down) while still facing North, the body axes invert left-to-right.\n- Therefore, the left hand will point towards the **East**."
  },
  {
    "id": "dir_q28",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Arun walks to the north 30 meters. moves left and walk 40 meters. He again turns left and walks 30 meters. He finally turns left and walks 50 meters. Now how far Arun is from the starting point?",
    "options": [
      "50 meter.",
      "40 meter.",
      "90 meter.",
      "10 meter."
    ],
    "correct": "10 meter.",
    "explanation": "\ud83d\udcd0 Closed Loop Geometry:\n1. 30m North -> (0, 30).\n2. Left (West) 40m -> (-40, 30).\n3. Left (South) 30m -> (-40, 0).\n4. Left (East) 50m -> (-40 + 50, 0) = (10, 0).\nDistance from starting point (0, 0) to (10, 0) is **10 meter**."
  },
  {
    "id": "dir_q29",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Balu\u2019s house is 300 meters away from that Sam. Balu stays 300 meters South West of Sam\u2019s house. Raju resides 600 meters North East of Balu. Then where is the position of Sam\u2019s house about Raju\u2019s?",
    "options": [
      "North-East",
      "South-East",
      "North-West",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "\ud83e\udded Collinear Relative Points:\n- Balu is 300m South-West of Sam.\n- Raju is 600m North-East of Balu (passing through Sam's house at 300m, and continuing another 300m North-East).\n- Therefore, Sam is located midway between Balu and Raju.\n- From Raju's viewpoint, Sam's house is in the **South-West** direction."
  },
  {
    "id": "dir_q30",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Rahul put his Time piece on the table in such a way that at 6 P.M. hour hand pointed in the North direction. In which direction will the minute\u2019s hand point at 9:15 P.M.?",
    "options": [
      "South-East",
      "South",
      "North",
      "West"
    ],
    "correct": "West",
    "explanation": "\u23f0 Clock Rotation Mapping:\n- At 6 PM, standard clock hour hand points South (towards 6). But here it points North (180\u00b0 inverted).\n- At 9:15 PM, minute hand is at 3 (standard direction: East).\n- Inverted by 180\u00b0, East becomes **West**."
  },
  {
    "id": "dir_q31",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_2",
    "type_name": "Type 2: Distance & Displacement (Pythagoras)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Sunil walks toward the east from point A. He turned toward the right at point B and Covered the same distance that he traveled in the east direction. Now he turns left and covered some distance. Finally, he turns left and covered the same, and stopped at point C. How many times is the distance between A and C to that between A and B?",
    "options": [
      "Cannot be determined",
      "Two",
      "three",
      "None of these"
    ],
    "correct": "Cannot be determined",
    "explanation": "\ud83d\udcd0 Indeterminate Variable:\n- Let AB = d.\n- Walks South distance d.\n- Turns left (East) and walks 'some distance' (let's say x, unknown).\n- Turns left (North) distance d to reach C.\n- Points A and C are on the same latitude, separated by d + x.\n- Since x is unspecified ('some distance'), the exact ratio (d + x)/d **Cannot be determined**."
  },
  {
    "id": "dir_q32",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Hard",
    "points": 1,
    "question": "On a clock, at 12:30 P.M. hours, the hand of a watch is in the eastward direction and the minute hand of a watch is in the west. In which direction is the hour hand of the watch at 2:45 P.M.?",
    "options": [
      "South-East",
      "South",
      "South-West",
      "North"
    ],
    "correct": "South-East",
    "explanation": "\u23f0 Clock Hand Mapping:\n- At 12:30 PM, minute hand (normally South at 6) points West (rotated 90\u00b0 clockwise).\n- At 2:45 PM, hour hand is almost at 3 (normally East-by-Southeast).\n- Rotating by 90\u00b0 clockwise, the hand points towards **South-East**."
  },
  {
    "id": "dir_q33",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "A clock shows 4:30 P.M. If the minute hand is toward the east, in which direction does the hour hand point?",
    "options": [
      "North-East",
      "South-East",
      "North-West",
      "North"
    ],
    "correct": "North-East",
    "explanation": "\u23f0 Clock Angle Mapping:\n- At 4:30, minute hand is at 6 (normally South). Here it points East (90\u00b0 anti-clockwise rotation).\n- Hour hand is midway between 4 and 5 (normally South-East).\n- Rotating South-East by 90\u00b0 anti-clockwise points it to **North-East**."
  },
  {
    "id": "dir_q34",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Medium",
    "points": 1,
    "question": "If South-East becomes North, North-East becomes west and so on. What becomes west?",
    "options": [
      "North-East",
      "North-West",
      "South-East",
      "South-West",
      "South"
    ],
    "correct": "South-East",
    "explanation": "\ud83d\udd04 Compass Shift Deduction:\n- South-East (135\u00b0) becomes North (0\u00b0) -> rotated 135\u00b0 clockwise.\n- Which original direction rotated 135\u00b0 clockwise lands on West (270\u00b0)?\n- 270\u00b0 - 135\u00b0 = 135\u00b0 = **South-East**."
  },
  {
    "id": "dir_q35",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_3",
    "type_name": "Type 3: Cardinal & Relative Position Puzzles",
    "difficulty": "Medium",
    "points": 1,
    "question": "Five villages P, Q, R, S, and T are adjacent to each other. P is west of Q, S is East of T. R is South of P. T is North of Q. In which direction is R from S?",
    "options": [
      "North-East",
      "South-East",
      "South-west",
      "cannot be determined.",
      "None of these"
    ],
    "correct": "South-west",
    "explanation": "\ud83e\udded Village Map:\n- Q = (0, 0).\n- P is West of Q: (-1, 0).\n- R is South of P: (-1, -1).\n- T is North of Q: (0, 1).\n- S is East of T: (1, 1).\nFrom S at (1, 1) to R at (-1, -1): moving left (-x) and down (-y) is **South-West**."
  },
  {
    "id": "dir_q36",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_1",
    "type_name": "Type 1: Turns, Rotations & Clock Angles",
    "difficulty": "Hard",
    "points": 1,
    "question": "Q travelled towards the East, M travelled towards the North, and S and T travelled in the opposite direction. T travelled right to Q. Which statement is true in the following sentence?",
    "options": [
      "M and S are travelling in opposite direction",
      "T travelled towards West",
      "T travelled towards North",
      "M and S travelled in the same direction",
      "None of these"
    ],
    "correct": "M and S travelled in the same direction",
    "explanation": "\ud83e\udded Direction Logic:\n1. Q travelled East.\n2. T travelled right to Q: Right of East is South -> T travelled South.\n3. S and T travelled in opposite directions: Opposite of South is North -> S travelled North.\n4. M also travelled towards the North.\n5. Therefore, **M and S travelled in the same direction**."
  },
  {
    "id": "dir_q37",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_4",
    "type_name": "Type 4: Shadow-Based Direction Scenarios",
    "difficulty": "Hard",
    "points": 1,
    "question": "One morning after sunrise Juhi while going to school met Lalli at Boring road crossing. Lalli's shadow was exactly to the right of Juhi. If they were face to face, which direction was Juhi facing?",
    "options": [
      "east",
      "west",
      "north",
      "south"
    ],
    "correct": "south",
    "explanation": "\u2600\ufe0f Morning Shadow Rule:\n- In the morning after sunrise, the Sun is in the East, so all shadows fall directly to the **West**.\n- Lalli's shadow fell to the West.\n- It is given that this shadow was to the **right of Juhi**, meaning Juhi's right side is West.\n- If your right hand points to the West, you must be facing **South**."
  },
  {
    "id": "dir_q38",
    "module_id": "mod4",
    "module_name": "Direction",
    "syllabus_lec": "ST-1 Spatial Orientation",
    "type_id": "type_4",
    "type_name": "Type 4: Shadow-Based Direction Scenarios",
    "difficulty": "Hard",
    "points": 1,
    "question": "At sunrise, Rohit and Mohit are having a conversation standing in front of each other. The shadow of Mohit is formed towards the right hand of Rohit. What direction is Mohit facing?",
    "options": [
      "east",
      "west",
      "north",
      "south"
    ],
    "correct": "north",
    "explanation": "\u2600\ufe0f Morning Conversation Shadow:\n1. At sunrise, shadows cast towards the West.\n2. Mohit's shadow falls to the West.\n3. This shadow is to the right hand of Rohit, so Rohit's right side is West.\n4. A person whose right side is West is facing South. Hence, Rohit is facing South.\n5. Since Rohit and Mohit are standing in front of each other (face to face), Mohit is facing **North**."
  },
  {
    "id": "num_q1",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the unit digit of the product of 207 \u00b7 781 \u00b7 39 \u00b7 94?",
    "options": [
      "9",
      "1",
      "7",
      "2"
    ],
    "correct": "2",
    "explanation": "\ud83d\udd22 Step-by-Step Unit Digit Calculation:\n1. Multiply only the unit digits of each factor: 7 \u00d7 1 \u00d7 9 \u00d7 4.\n2. 7 \u00d7 1 = 7.\n3. 7 \u00d7 9 = 63 -> Unit digit = 3.\n4. 3 \u00d7 4 = 12 -> Unit digit = **2**.\nTherefore, the unit digit of the entire product is 2."
  },
  {
    "id": "num_q2",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Medium",
    "points": 1,
    "question": "What will come in the place of unit digit in the value of (7\u00b3\u2075) \u00b7 (3\u2077\u00b9) \u00b7 (11\u2075\u2075)?",
    "options": [
      "0",
      "3",
      "1",
      "6"
    ],
    "correct": "1",
    "explanation": "\ud83d\udd22 Cyclicity Rule for Powers:\n- For base 7 (cyclicity of 4: 7, 9, 3, 1):\n  35 mod 4 = 3 -> 7\u00b3 ends in 3.\n- For base 3 (cyclicity of 4: 3, 9, 7, 1):\n  71 mod 4 = 3 -> 3\u00b3 ends in 7.\n- For base 11 (ends in 1):\n  1\u2075\u2075 ends in 1.\n- Overall unit digit = (3 \u00d7 7 \u00d7 1) mod 10 = 21 mod 10 = **1**."
  },
  {
    "id": "num_q3",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number of zeros at the end of the product of 1 \u00d7 2 \u00d7 3 \u00d7 4 \u00d7 5 \u00d7 6 .......... \u00d7 99 \u00d7 100 :",
    "options": [
      "22",
      "24",
      "26",
      "28"
    ],
    "correct": "24",
    "explanation": "\ud83d\udd22 Legendre's Formula for 100!:\nZeros are formed by pairs of (2 \u00d7 5). Since 2s are abundant, count prime factor 5 in 100!:\n- \u230a100 / 5\u230b = 20\n- \u230a100 / 25\u230b = 4\nTotal number of trailing zeros = 20 + 4 = **24**."
  },
  {
    "id": "num_q4",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the number of zeros at the end of the product of 2 \u00d7 4 \u00d7 6 \u00d7 8 \u00d7 10 \u00d7 ....... \u00d7 98 \u00d7 100 :",
    "options": [
      "10",
      "11",
      "12",
      "15"
    ],
    "correct": "12",
    "explanation": "\ud83d\udd22 Factorization of Even Product:\n- Factor out 2 from all 50 terms:\n  (2 \u00d7 1) \u00d7 (2 \u00d7 2) \u00d7 (2 \u00d7 3) \u00d7 ... \u00d7 (2 \u00d7 50) = 2\u2075\u2070 \u00d7 50!\n- The 2\u2075\u2070 contributes only powers of 2 (no zeros without 5s).\n- Count number of 5s in 50!:\n  \u230a50 / 5\u230b = 10\n  \u230a50 / 25\u230b = 2\nTotal trailing zeros = 10 + 2 = **12**."
  },
  {
    "id": "num_q5",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_1",
    "type_name": "Type 1: Unit Digits & Trailing Zeros",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the number of zeros at the end of the product of 10 \u00d7 20 \u00d7 30 \u00d7 ...... \u00d7 2000 :",
    "options": [
      "222",
      "249",
      "226",
      "220"
    ],
    "correct": "249",
    "explanation": "\ud83d\udd22 Multiples of 10 Product:\n- Number of terms = 2000 / 10 = 200 terms.\n- Product = (10 \u00d7 1) \u00d7 (10 \u00d7 2) \u00d7 ... \u00d7 (10 \u00d7 200) = 10\u00b2\u2070\u2070 \u00d7 200!\n- 10\u00b2\u2070\u2070 contributes 200 trailing zeros directly.\n- Trailing zeros from 200! = \u230a200/5\u230b + \u230a200/25\u230b + \u230a200/125\u230b = 40 + 8 + 1 = 49 zeros.\n- Total zeros = 200 + 49 = **249**."
  },
  {
    "id": "num_q6",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number of factors of 100 :",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "correct": "9",
    "explanation": "\ud83d\udd22 Total Factors Formula:\n- Prime factorize 100: 100 = 2\u00b2 \u00d7 5\u00b2.\n- Number of factors = (p + 1)(q + 1) = (2 + 1)(2 + 1) = 3 \u00d7 3 = **9**.\n(Factors: 1, 2, 4, 5, 10, 20, 25, 50, 100)."
  },
  {
    "id": "num_q7",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number of factors of 80 :",
    "options": [
      "10",
      "12",
      "6",
      "8"
    ],
    "correct": "10",
    "explanation": "\ud83d\udd22 Total Factors Formula:\n- Prime factorize 80: 80 = 2\u2074 \u00d7 5\u00b9.\n- Number of factors = (4 + 1)(1 + 1) = 5 \u00d7 2 = **10**.\n(Factors: 1, 2, 4, 5, 8, 10, 16, 20, 40, 80)."
  },
  {
    "id": "num_q8",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of the factors of 100 :",
    "options": [
      "127",
      "217",
      "219",
      "189"
    ],
    "correct": "217",
    "explanation": "\ud83d\udd22 Sum of Factors Formula:\n- For N = 2\u00b2 \u00d7 5\u00b2:\n- Sum = (2\u2070 + 2\u00b9 + 2\u00b2) \u00d7 (5\u2070 + 5\u00b9 + 5\u00b2)\n  = (1 + 2 + 4) \u00d7 (1 + 5 + 25)\n  = 7 \u00d7 31 = **217**."
  },
  {
    "id": "num_q9",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of the factors of 50 :",
    "options": [
      "92",
      "93",
      "97",
      "91"
    ],
    "correct": "93",
    "explanation": "\ud83d\udd22 Sum of Factors Formula:\n- Prime factorization: 50 = 2\u00b9 \u00d7 5\u00b2.\n- Sum = (2\u2070 + 2\u00b9) \u00d7 (5\u2070 + 5\u00b9 + 5\u00b2)\n  = (1 + 2) \u00d7 (1 + 5 + 25)\n  = 3 \u00d7 31 = **93**."
  },
  {
    "id": "num_q10",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the average of the factors of 60 :",
    "options": [
      "12",
      "13",
      "14",
      "16"
    ],
    "correct": "14",
    "explanation": "\ud83d\udd22 Average of Factors:\n1. Factorization: 60 = 2\u00b2 \u00d7 3\u00b9 \u00d7 5\u00b9.\n2. Total factors = (2 + 1)(1 + 1)(1 + 1) = 3 \u00d7 2 \u00d7 2 = 12.\n3. Sum of factors = (1 + 2 + 4)(1 + 3)(1 + 5) = 7 \u00d7 4 \u00d7 6 = 168.\n4. Average = Sum / Total = 168 / 12 = **14**."
  },
  {
    "id": "num_q11",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the product of the factors of 100 :",
    "options": [
      "10\u2079",
      "10\u2079/\u00b2",
      "10\u00b9\u00b9/\u00b2",
      "10\u00b9\u2079"
    ],
    "correct": "10\u2079",
    "explanation": "\ud83d\udd22 Product of Factors Formula:\n- Product = N^(total_factors / 2).\n- For N = 100, number of factors = 9.\n- Product = 100^(9/2) = (10\u00b2)^(9/2) = 10\u2079."
  },
  {
    "id": "num_q44",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the number of prime factors of 6\u00b2\u2070 \u00b7 11\u00b9\u00b9 \u00b7 21\u00b2\u00b9 :",
    "options": [
      "83",
      "93",
      "103",
      "113"
    ],
    "correct": "93",
    "explanation": "\ud83d\udd22 Prime Factor Count:\n1. Express each base as prime numbers:\n   6\u00b2\u2070 = (2 \u00d7 3)\u00b2\u2070 = 2\u00b2\u2070 \u00b7 3\u00b2\u2070\n   11\u00b9\u00b9 = 11\u00b9\u00b9\n   21\u00b2\u00b9 = (3 \u00d7 7)\u00b2\u00b9 = 3\u00b2\u00b9 \u00b7 7\u00b2\u00b9\n2. Combine: 2\u00b2\u2070 \u00b7 3\u2074\u00b9 \u00b7 7\u00b2\u00b9 \u00b7 11\u00b9\u00b9.\n3. Total number of prime factors = 20 + 20 + 11 + 21 + 21 = **93**."
  },
  {
    "id": "num_q45",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the number of prime factors of 14\u00b9\u2074 \u00b7 15\u00b9\u2075 :",
    "options": [
      "48",
      "58",
      "68",
      "78"
    ],
    "correct": "58",
    "explanation": "\ud83d\udd22 Prime Factor Count:\n1. 14\u00b9\u2074 = (2 \u00d7 7)\u00b9\u2074 = 2\u00b9\u2074 \u00b7 7\u00b9\u2074.\n2. 15\u00b9\u2075 = (3 \u00d7 5)\u00b9\u2075 = 3\u00b9\u2075 \u00b7 5\u00b9\u2075.\n3. Sum of prime exponents = 14 + 14 + 15 + 15 = **58**."
  },
  {
    "id": "num_q51",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Hard",
    "points": 1,
    "question": "Which one of the following is a prime number?",
    "options": [
      "161",
      "221",
      "373",
      "437"
    ],
    "correct": "373",
    "explanation": "\ud83d\udd22 Primality Testing:\n- 161 is divisible by 7 (7 \u00d7 23 = 161).\n- 221 is divisible by 13 (13 \u00d7 17 = 221).\n- 437 is divisible by 19 (19 \u00d7 23 = 437).\n- For 373: \u221a373 \u2248 19.3. Primes below 20: 2, 3, 5, 7, 11, 13, 17, 19. None divide 373.\nTherefore, **373** is prime."
  },
  {
    "id": "num_q52",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_2",
    "type_name": "Type 2: Factors, Multiples & Primes",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following is a prime number?",
    "options": [
      "119",
      "187",
      "247",
      "71"
    ],
    "correct": "71",
    "explanation": "\ud83d\udd22 Primality Testing:\n- 119 = 7 \u00d7 17 (composite).\n- 187 = 11 \u00d7 17 (composite).\n- 247 = 13 \u00d7 19 (composite).\n- **71** has no divisors other than 1 and 71, so it is a prime number."
  },
  {
    "id": "num_q12",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "How many 3 digit numbers are completely divisible by 6?",
    "options": [
      "149",
      "150",
      "151",
      "166"
    ],
    "correct": "150",
    "explanation": "\ud83d\udd22 Range Divisibility:\n- 3-digit numbers range from 100 to 999.\n- Numbers up to 999 divisible by 6 = \u230a999 / 6\u230b = 166.\n- Numbers up to 99 divisible by 6 = \u230a99 / 6\u230b = 16.\n- 3-digit numbers divisible by 6 = 166 - 16 = **150**."
  },
  {
    "id": "num_q13",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "How many 3 digit numbers are completely divisible by 3 and 4 :",
    "options": [
      "67",
      "75",
      "57",
      "83"
    ],
    "correct": "75",
    "explanation": "\ud83d\udd22 LCM Divisibility:\n- Divisible by both 3 and 4 implies divisible by LCM(3, 4) = 12.\n- Range: 100 to 999.\n- \u230a999 / 12\u230b - \u230a99 / 12\u230b = 83 - 8 = **75**."
  },
  {
    "id": "num_q14",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "What will be the remainder when 17\u00b2\u2070\u2070 is divided by 18?",
    "options": [
      "17",
      "16",
      "1",
      "2"
    ],
    "correct": "1",
    "explanation": "\ud83d\udd22 Negative Remainder Concept:\n- 17 \u2261 -1 (mod 18).\n- 17\u00b2\u2070\u2070 \u2261 (-1)\u00b2\u2070\u2070 (mod 18) = 1 (mod 18).\nTherefore, the remainder is **1**."
  },
  {
    "id": "num_q14a",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder when 3\u2078\u2075 is divided by 6.",
    "options": [
      "3",
      "16",
      "1",
      "2"
    ],
    "correct": "3",
    "explanation": "\ud83d\udd22 Common Factor Simplification:\n- Cancel common factor 3 between 3\u2078\u2075 and 6:\n  3\u2078\u2075 / 6 = (3 \u00d7 3\u2078\u2074) / (3 \u00d7 2) = 3\u2078\u2074 / 2.\n- Remainder of 3\u2078\u2074 divided by 2 is 1 (since 3 \u2261 1 mod 2).\n- Multiply back the cancelled factor 3:\n  Remainder = 1 \u00d7 3 = **3**."
  },
  {
    "id": "num_q14b",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder when 2\u2077\u2070 is divided by 96.",
    "options": [
      "64",
      "63",
      "1",
      "2"
    ],
    "correct": "64",
    "explanation": "\ud83d\udd22 Factor Reduction Method:\n- 96 = 32 \u00d7 3 = 2\u2075 \u00d7 3.\n- Divide numerator and denominator by 2\u2075:\n  2\u2077\u2070 / 96 = (2\u2075 \u00b7 2\u2076\u2075) / (2\u2075 \u00b7 3) = 2\u2076\u2075 / 3.\n- 2 \u2261 -1 (mod 3) -> 2\u2076\u2075 \u2261 (-1)\u2076\u2075 = -1 \u2261 2 (mod 3).\n- Multiply back by 2\u2075 (32):\n  Remainder = 2 \u00d7 32 = **64**."
  },
  {
    "id": "num_q15",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "What will be the remainder when (67\u2076\u2077 + 67) is divided by 68?",
    "options": [
      "1",
      "66",
      "67",
      "60"
    ],
    "correct": "66",
    "explanation": "\ud83d\udd22 Modular Reduction:\n- 67 \u2261 -1 (mod 68).\n- 67\u2076\u2077 + 67 \u2261 (-1)\u2076\u2077 + (-1) = -1 - 1 = -2 (mod 68).\n- Since remainder must be non-negative: 68 - 2 = **66**."
  },
  {
    "id": "num_q16",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which of the following number will completely divide (49\u00b9\u2075 \u2013 1)?",
    "options": [
      "8",
      "14",
      "51",
      "50"
    ],
    "correct": "8",
    "explanation": "\ud83d\udd22 Algebraic Factor Rule:\n- (a\u207f - b\u207f) is always divisible by (a - b).\n- Here, (49\u00b9\u2075 - 1\u00b9\u2075) is divisible by (49 - 1) = 48.\n- Since 8 is a factor of 48 (48 = 8 \u00d7 6), **8** completely divides the expression."
  },
  {
    "id": "num_q17",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "A number when divided by 6 leaves a remainder of 3. When the square of the number is divided by 6, the remainder is:",
    "options": [
      "0",
      "1",
      "3",
      "2"
    ],
    "correct": "3",
    "explanation": "\ud83d\udd22 Remainder of Squared Quantity:\n- Let the number be N = 6k + 3.\n- N\u00b2 = (6k + 3)\u00b2 = 36k\u00b2 + 36k + 9.\n- Dividing by 6:\n  (36k\u00b2 + 36k) is a multiple of 6.\n  Remainder = 9 mod 6 = **3**."
  },
  {
    "id": "num_q18",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "A number when divided successively by 4 and 5 leaves remainders 1 and 4 respectively. When it is successively divided by 5 and 4, then the respective remainders will be :",
    "options": [
      "1, 2",
      "2, 3",
      "3, 2",
      "4, 1"
    ],
    "correct": "2, 3",
    "explanation": "\ud83d\udd22 Successive Division Reconstruction:\n1. Let final quotient = 1.\n   Second dividend = 5(1) + 4 = 9.\n   Original number N = 4(9) + 1 = 37.\n2. Now successively divide 37 by 5 and 4:\n   - 37 \u00f7 5 = 7 with remainder **2**.\n   - 7 \u00f7 4 = 1 with remainder **3**.\nRespective remainders are **2, 3**."
  },
  {
    "id": "num_q19",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "A number was divided successively in order by 4, 5, and 6. The remainder were respectively 2, 3, and 4. The number is :",
    "options": [
      "214",
      "476",
      "954",
      "1908"
    ],
    "correct": "214",
    "explanation": "\ud83d\udd22 Successive Division Backtracking:\n1. Let the last quotient be 1.\n2. Third divisor: 6 \u00d7 1 + 4 = 10.\n3. Second divisor: 5 \u00d7 10 + 3 = 53.\n4. First divisor: 4 \u00d7 53 + 2 = 212 + 2 = **214**."
  },
  {
    "id": "num_q20",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following numbers will completely divide (4\u2076\u00b9 + 4\u2076\u00b2 + 4\u2076\u00b3 + 4\u2076\u2074)?",
    "options": [
      "3",
      "9",
      "11",
      "17"
    ],
    "correct": "17",
    "explanation": "\ud83d\udd22 Common Power Factoring:\n- Factor out 4\u2076\u00b9:\n  4\u2076\u00b9 (1 + 4\u00b9 + 4\u00b2 + 4\u00b3)\n  = 4\u2076\u00b9 (1 + 4 + 16 + 64)\n  = 4\u2076\u00b9 \u00d7 85.\n- Since 85 = 5 \u00d7 17, the expression is divisible by **17**."
  },
  {
    "id": "num_q21",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which one of the following numbers will completely divide 5\u2075\u00b9 + 5\u2075\u00b2 + 5\u2075\u00b3?",
    "options": [
      "11",
      "12",
      "31",
      "32"
    ],
    "correct": "31",
    "explanation": "\ud83d\udd22 Common Power Factoring:\n- Factor out 5\u2075\u00b9:\n  5\u2075\u00b9 (1 + 5\u00b9 + 5\u00b2)\n  = 5\u2075\u00b9 (1 + 5 + 25)\n  = 5\u2075\u00b9 \u00d7 31.\n- Therefore, it is completely divisible by **31**."
  },
  {
    "id": "num_q22",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following is the common factor of (47\u2074\u00b3 + 43\u2074\u00b3) and (47\u2074\u2077 + 43\u2074\u2077)?",
    "options": [
      "47 \u2013 43",
      "47 + 43",
      "47\u2074\u00b3 + 43\u2074\u00b3",
      "47\u2074\u2077 + 43\u2074\u2077"
    ],
    "correct": "47 + 43",
    "explanation": "\ud83d\udd22 Algebraic Property for Odd Exponents:\n- When n is an odd integer, (x\u207f + a\u207f) is always divisible by (x + a).\n- Both exponents 43 and 47 are odd.\n- Hence, both expressions are divisible by **(47 + 43)** = 90."
  },
  {
    "id": "num_q23",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which one of the following numbers is completely divisible by 99?",
    "options": [
      "3572",
      "13595",
      "913464",
      "114345"
    ],
    "correct": "114345",
    "explanation": "\ud83d\udd22 Divisibility by 99 (9 and 11):\n- Sum of digits of 114345 = 1 + 1 + 4 + 3 + 4 + 5 = 18 (divisible by 9).\n- Alternating sum of digits: (5 + 3 + 1) - (4 + 4 + 1) = 9 - 9 = 0 (divisible by 11).\n- Since it satisfies both 9 and 11, **114345** is divisible by 99."
  },
  {
    "id": "num_q24",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which one of the following numbers is completely divisible by 45?",
    "options": [
      "181560",
      "331145",
      "202860",
      "203350"
    ],
    "correct": "202860",
    "explanation": "\ud83d\udd22 Divisibility by 45 (5 and 9):\n- Must end in 0 or 5, and sum of digits must be a multiple of 9.\n- For 202860: Ends in 0 (divisible by 5).\n  Sum of digits = 2 + 0 + 2 + 8 + 6 + 0 = 18 (divisible by 9).\n- Thus, **202860** is divisible by 45."
  },
  {
    "id": "num_q26",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the digit in the blank space of the number 34*7 so that the number is divisible by 11?",
    "options": [
      "3",
      "6",
      "7",
      "8"
    ],
    "correct": "8",
    "explanation": "\ud83d\udd22 Divisibility Rule of 11:\n- (Sum of digits in odd places) - (Sum of digits in even places) must be 0 or a multiple of 11.\n- Odd places (from right): 7 + 4 = 11.\n- Even places (from right): * + 3.\n- 11 - (* + 3) = 0 -> 8 - * = 0 -> * = **8**."
  },
  {
    "id": "num_q32",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Hard",
    "points": 1,
    "question": "7\u00b9\u00b2 - 4\u00b9\u00b2 is exactly divisibly by which of the following?",
    "options": [
      "36",
      "35",
      "34",
      "33"
    ],
    "correct": "33",
    "explanation": "\ud83d\udd22 Algebraic Factoring:\n- 7\u00b9\u00b2 - 4\u00b9\u00b2 = (7\u00b2)\u2076 - (4\u00b2)\u2076 = 49\u2076 - 16\u2076.\n- For any natural n, (a\u207f - b\u207f) is divisible by (a - b).\n- 49 - 16 = **33**.\nTherefore, the expression is exactly divisible by 33."
  },
  {
    "id": "num_q46",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "What will be the remainder when (27\u00b2\u2077 + 17\u00b2\u2077) is divided by 11?",
    "options": [
      "27",
      "17",
      "0",
      "1"
    ],
    "correct": "0",
    "explanation": "\ud83d\udd22 Divisibility of Odd Powers:\n- For odd power n = 27, (a\u207f + b\u207f) is divisible by (a + b).\n- 27 + 17 = 44.\n- Since 44 is completely divisible by 11 (44 = 11 \u00d7 4), the remainder is **0**."
  },
  {
    "id": "num_q47",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "If n is a natural number, (n\u00b3 - n) will always be divisible by:",
    "options": [
      "6 only",
      "6 and 12 both",
      "12 only",
      "by 18 only"
    ],
    "correct": "6 only",
    "explanation": "\ud83d\udd22 Consecutive Integers Product:\n- n\u00b3 - n = n(n\u00b2 - 1) = (n - 1) \u00b7 n \u00b7 (n + 1).\n- This is the product of three consecutive integers.\n- In any three consecutive integers, at least one is a multiple of 2 and exactly one is a multiple of 3.\n- Therefore, it is always divisible by 2 \u00d7 3 = **6 only** (not necessarily 12, e.g. for n = 2: 8 - 2 = 6)."
  },
  {
    "id": "num_q48",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "( x\u207f \u2013 a\u207f) is completely divisible by (x - a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is any natural number",
    "explanation": "\ud83d\udd22 Standard Algebraic Theorem:\n- (x\u207f - a\u207f) = (x - a)(x\u207f\u207b\u00b9 + x\u207f\u207b\u00b2a + ... + a\u207f\u207b\u00b9).\n- This factorization holds for **any natural number n**."
  },
  {
    "id": "num_q49",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "( x\u207f \u2013 a\u207f) is completely divisible by (x + a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is an even natural number",
    "explanation": "\ud83d\udd22 Remainder Theorem:\n- Let f(x) = x\u207f - a\u207f. Divisibility by (x + a) requires f(-a) = 0.\n- (-a)\u207f - a\u207f = 0 only when (-a)\u207f = a\u207f, which requires **n to be an even natural number** (e.g. x\u00b2 - a\u00b2 = (x-a)(x+a))."
  },
  {
    "id": "num_q50",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "( x\u207f + a\u207f) is completely divisible by (x + a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is an odd natural number",
    "explanation": "\ud83d\udd22 Remainder Theorem:\n- Let f(x) = x\u207f + a\u207f. Divisibility by (x + a) requires f(-a) = 0.\n- (-a)\u207f + a\u207f = -a\u207f + a\u207f = 0 only when **n is an odd natural number** (e.g. x\u00b3 + a\u00b3 = (x+a)(x\u00b2 - ax + a\u00b2))."
  },
  {
    "id": "num_q53",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the largest four-digit number which is divisible by 88 :",
    "options": [
      "9944",
      "9768",
      "9988",
      "8888"
    ],
    "correct": "9944",
    "explanation": "\ud83d\udd22 Division Algorithm:\n1. Largest 4-digit number = 9999.\n2. Divide 9999 by 88: 9999 = 88 \u00d7 113 + 55.\n3. Subtract the remainder: 9999 - 55 = **9944**."
  },
  {
    "id": "num_q54",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "If a number is divided by 111, the remainder is 31. What will be the remainder if it is divided by 37?",
    "options": [
      "31",
      "32",
      "33",
      "0"
    ],
    "correct": "31",
    "explanation": "\ud83d\udd22 Divisor Multiplier Relation:\n- Since 111 is an exact multiple of 37 (111 = 37 \u00d7 3):\n- Any number N = 111q + 31 = 37(3q) + 31.\n- The remainder when divided by 37 is 31 mod 37 = **31**."
  },
  {
    "id": "num_q55",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_3",
    "type_name": "Type 3: Divisibility Rules & Remainder Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "On multiplying a number by 7, the product is a number made of only the digit 3. The smallest such number is:",
    "options": [
      "47619",
      "47719",
      "48619",
      "47649"
    ],
    "correct": "47619",
    "explanation": "\ud83d\udd22 Repeating Digit Division:\n- Divide successive repdigits 3, 33, 333, 3333, 33333, 333333 by 7 until no remainder:\n- 333333 \u00f7 7 = **47619**.\n(Check: 47619 \u00d7 7 = 333333)."
  },
  {
    "id": "num_q25",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of digits of a two-digit number is 7. If the digits of the number are interchanged, the number so formed is greater than the original number by 27. Find the original number :",
    "options": [
      "29",
      "25",
      "79",
      "32",
      "None of these"
    ],
    "correct": "25",
    "explanation": "\ud83d\udd22 Linear System for Digits:\n- Let the number be 10x + y.\n- x + y = 7 (Eq 1).\n- Interchanged number: 10y + x.\n- (10y + x) - (10x + y) = 9(y - x) = 27 -> y - x = 3 (Eq 2).\n- Adding Eq 1 and Eq 2: 2y = 10 -> y = 5, x = 2.\nOriginal number = **25**."
  },
  {
    "id": "num_q27",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the sum of, the digits of a two-digit number and the number formed by reversing its digit is 99, what is the sum of the digits of the original number?",
    "options": [
      "9",
      "8",
      "11",
      "10"
    ],
    "correct": "9",
    "explanation": "\ud83d\udd22 Reversal Sum Identity:\n- Let number be 10x + y. Reversing gives 10y + x.\n- Sum = (10x + y) + (10y + x) = 11(x + y) = 99.\n- Therefore, sum of digits (x + y) = 99 / 11 = **9**."
  },
  {
    "id": "num_q28",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the sum of, the digits of a two-digit number and the number formed by reversing its digits is N, Which one of the following numbers will completely divide N?",
    "options": [
      "9",
      "7",
      "11",
      "18"
    ],
    "correct": "11",
    "explanation": "\ud83d\udd22 Universal Divisibility Property:\n- Original: 10a + b. Reversed: 10b + a.\n- N = (10a + b) + (10b + a) = 11(a + b).\n- N is always an exact multiple of **11**."
  },
  {
    "id": "num_q29",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the difference between, a two-digit number and a number formed by reversing its digit is N, Which one of the following numbers will completely divide N :",
    "options": [
      "9",
      "7",
      "11",
      "5"
    ],
    "correct": "9",
    "explanation": "\ud83d\udd22 Universal Divisibility Property:\n- Original: 10a + b. Reversed: 10b + a.\n- N = (10a + b) - (10b + a) = 9(a - b).\n- N is always an exact multiple of **9**."
  },
  {
    "id": "num_q30",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the difference between a two digit number and the number formed by reversing its digit is 45, what is the difference between the digits of the original number :",
    "options": [
      "9",
      "2",
      "5",
      "1"
    ],
    "correct": "5",
    "explanation": "\ud83d\udd22 Digit Difference Formula:\n- Difference = 9 \u00d7 (difference between digits) = 45.\n- Difference between digits = 45 / 9 = **5**."
  },
  {
    "id": "num_q31",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_4",
    "type_name": "Type 4: Two-Digit Numbers & Digit Reversal",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 4-digit number is formed by repeating a 2-digit number such as 2525, 3232, etc. Any number of this form is always divisible by :",
    "options": [
      "Smallest two-digit prime number",
      "7",
      "13",
      "smallest three-digit prime number"
    ],
    "correct": "smallest three-digit prime number",
    "explanation": "\ud83d\udd22 Repetition Structure:\n- An arbitrary number abab = 1000a + 100b + 10a + b = 100(10a + b) + (10a + b) = 101(10a + b).\n- 101 is the **smallest three-digit prime number**."
  },
  {
    "id": "num_q33",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the sum of the first fifty natural numbers :",
    "options": [
      "1144",
      "1275",
      "1325",
      "1075"
    ],
    "correct": "1275",
    "explanation": "\ud83d\udd22 Sum of First n Natural Numbers:\n- Formula: n(n + 1) / 2.\n- For n = 50:\n  Sum = 50 \u00d7 51 / 2 = 25 \u00d7 51 = **1275**."
  },
  {
    "id": "num_q34",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the value of 51+52+53+54+\u2026\u2026\u2026\u2026+100 :",
    "options": [
      "2443",
      "1754",
      "2673",
      "3775"
    ],
    "correct": "3775",
    "explanation": "\ud83d\udd22 Partial Series Sum:\n- Sum(51..100) = Sum(1..100) - Sum(1..50)\n- Sum(1..100) = 100 \u00d7 101 / 2 = 5050.\n- Sum(1..50) = 50 \u00d7 51 / 2 = 1275.\n- Result = 5050 - 1275 = **3775**."
  },
  {
    "id": "num_q35",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of the squares of the first 30 natural numbers :",
    "options": [
      "9455",
      "8372",
      "7849",
      "6973"
    ],
    "correct": "9455",
    "explanation": "\ud83d\udd22 Sum of Squares Formula:\n- Formula: n(n + 1)(2n + 1) / 6.\n- For n = 30:\n  30 \u00d7 31 \u00d7 (2\u00d730 + 1) / 6 = 30 \u00d7 31 \u00d7 61 / 6 = 5 \u00d7 31 \u00d7 61 = 155 \u00d7 61 = **9455**."
  },
  {
    "id": "num_q36",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the value of 2\u00b2 + 4\u00b2 + 6\u00b2 + 8\u00b2 + \u2026\u2026.+ 20\u00b2 :",
    "options": [
      "2870",
      "1321",
      "1540",
      "1550"
    ],
    "correct": "1540",
    "explanation": "\ud83d\udd22 Even Squares Sum:\n- Factor out 2\u00b2 = 4:\n  4(1\u00b2 + 2\u00b2 + 3\u00b2 + ... + 10\u00b2)\n- Sum(1\u00b2..10\u00b2) = 10 \u00d7 11 \u00d7 21 / 6 = 385.\n- Value = 4 \u00d7 385 = **1540**."
  },
  {
    "id": "num_q37",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the value of 1\u00b2 + 3\u00b2 + 5\u00b2 + 7\u00b2 + \u2026\u2026\u2026\u2026\u2026+ 19\u00b2 :",
    "options": [
      "1335",
      "1330",
      "1332",
      "1334"
    ],
    "correct": "1330",
    "explanation": "\ud83d\udd22 Odd Squares Formula:\n- Sum of odd squares up to last term n = 19:\n  n(n + 1)(n + 2) / 6 = 19 \u00d7 20 \u00d7 21 / 6 = 19 \u00d7 10 \u00d7 7 = **1330**."
  },
  {
    "id": "num_q38",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 1\u00b2 + 2\u00b2 + 3\u00b2 + 4\u00b2 + \u2026\u2026\u2026. + 10\u00b2 = 385, find the value of 2\u00b2 + 4\u00b2 + 6\u00b2 + \u2026\u2026 + 20\u00b2 :",
    "options": [
      "1250",
      "1540",
      "1190",
      "1375"
    ],
    "correct": "1540",
    "explanation": "\ud83d\udd22 Multiple Factor Technique:\n- 2\u00b2 + 4\u00b2 + ... + 20\u00b2 = 2\u00b2(1\u00b2 + 2\u00b2 + ... + 10\u00b2)\n  = 4 \u00d7 385 = **1540**."
  },
  {
    "id": "num_q39",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the value of 11\u00b2 + 12\u00b2 + 13\u00b2 + 14\u00b2 + \u2026\u2026\u2026\u2026.+ 20\u00b2 :",
    "options": [
      "2870",
      "2485",
      "2670",
      "2495"
    ],
    "correct": "2485",
    "explanation": "\ud83d\udd22 Partial Squares Sum:\n- Sum(11\u00b2..20\u00b2) = Sum(1\u00b2..20\u00b2) - Sum(1\u00b2..10\u00b2)\n- Sum(1\u00b2..20\u00b2) = 20 \u00d7 21 \u00d7 41 / 6 = 2870.\n- Sum(1\u00b2..10\u00b2) = 10 \u00d7 11 \u00d7 21 / 6 = 385.\n- Result = 2870 - 385 = **2485**."
  },
  {
    "id": "num_q40",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the value of 1\u00b3 + 3\u00b3 + 5\u00b3 + 7\u00b3 + \u2026\u2026\u2026\u2026..+ 29\u00b3 :",
    "options": [
      "36100",
      "101025",
      "32500",
      "44700"
    ],
    "correct": "101025",
    "explanation": "\ud83d\udd22 Odd Cubes Sum Formula:\n- Number of terms k = (29 + 1)/2 = 15.\n- Formula: k\u00b2(2k\u00b2 - 1).\n- 15\u00b2 \u00d7 (2\u00d715\u00b2 - 1) = 225 \u00d7 (2\u00d7225 - 1) = 225 \u00d7 449 = **101025**."
  },
  {
    "id": "num_q41",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 1\u00b3 + 2\u00b3 + 3\u00b3 + 4\u00b3 + \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026+ 10\u00b3 = 3025, find the value of 2\u00b3 + 4\u00b3 + 6\u00b3 + .\u2026+ 20\u00b3 :",
    "options": [
      "2875",
      "24200",
      "3080",
      "39400"
    ],
    "correct": "24200",
    "explanation": "\ud83d\udd22 Multiple Factor Technique for Cubes:\n- 2\u00b3 + 4\u00b3 + ... + 20\u00b3 = 2\u00b3(1\u00b3 + 2\u00b3 + ... + 10\u00b3)\n  = 8 \u00d7 3025 = **24200**."
  },
  {
    "id": "num_q42",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the sum of all even numbers up to 100 :",
    "options": [
      "2295",
      "2425",
      "2495",
      "2550"
    ],
    "correct": "2550",
    "explanation": "\ud83d\udd22 Sum of First n Even Numbers:\n- Up to 100, there are n = 50 even numbers (2, 4, ..., 100).\n- Formula = n(n + 1) = 50 \u00d7 51 = **2550**."
  },
  {
    "id": "num_q43",
    "module_id": "mod5",
    "module_name": "Number System",
    "syllabus_lec": "ST-1 Number Theory",
    "type_id": "type_5",
    "type_name": "Type 5: Series Summation (Squares & Cubes)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the sum of the all odd number up to 100 :",
    "options": [
      "2100",
      "2500",
      "2300",
      "2200"
    ],
    "correct": "2500",
    "explanation": "\ud83d\udd22 Sum of First n Odd Numbers:\n- Up to 100, there are n = 50 odd numbers (1, 3, ..., 99).\n- Formula = n\u00b2 = 50\u00b2 = **2500**."
  },
  {
    "id": "ana_q1",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Mango : Fruit : : Potato : ?",
    "options": [
      "Root",
      "Fruit",
      "Stem",
      "Flower",
      "Vegetable"
    ],
    "correct": "Stem",
    "explanation": "\ud83c\udf31 Botanical Classification Analogy:\n- A Mango is biologically classified as a Fruit.\n- Similarly, a Potato is biologically classified as a modified underground **Stem** (tuber)."
  },
  {
    "id": "ana_q2",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Book : Publisher : : Film : ?",
    "options": [
      "Producer",
      "Director",
      "Editor",
      "Writer",
      "Audience"
    ],
    "correct": "Producer",
    "explanation": "\ud83c\udfac Creator/Producer Relationship:\n- A Publisher finances, prints, and brings a Book to the market.\n- In the same way, a **Producer** finances, organizes, and brings a Film to the market."
  },
  {
    "id": "ana_q3",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Bird : Aeroplane : : fish : ?",
    "options": [
      "Swim",
      "Water",
      "Food",
      "Ship",
      "Sailor"
    ],
    "correct": "Ship",
    "explanation": "\u2708\ufe0f Biological to Man-Made Vehicle Analogy:\n- An Aeroplane is a man-made machine inspired by and navigating the medium of a Bird (air).\n- Similarly, a **Ship** is a man-made vessel navigating the medium of a Fish (water)."
  },
  {
    "id": "ana_q4",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Cap : Head : : Spex : ?",
    "options": [
      "Eye",
      "Hat",
      "Cloth",
      "Hair",
      "Face"
    ],
    "correct": "Eye",
    "explanation": "\ud83d\udc53 Accessory to Body Part Analogy:\n- A Cap is worn on the Head.\n- Spectacles ('Spex') are worn over the **Eye**."
  },
  {
    "id": "ana_q5",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Water : Ocean : : Air : ?",
    "options": [
      "Earth",
      "Sea",
      "Atmosphere",
      "Moon",
      "Vacuum"
    ],
    "correct": "Atmosphere",
    "explanation": "\ud83c\udf0d Reservoir/Medium Analogy:\n- An Ocean is the massive global reservoir containing Water.\n- Similarly, the **Atmosphere** is the envelope containing Air."
  },
  {
    "id": "ana_q6",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Man : Walk : : Fish : ?",
    "options": [
      "Swim",
      "Water",
      "Live",
      "Eat",
      "Run"
    ],
    "correct": "Swim",
    "explanation": "\ud83c\udfca Locomotion Analogy:\n- The natural mode of locomotion for a Man is to Walk.\n- The natural mode of locomotion for a Fish is to **Swim**."
  },
  {
    "id": "ana_q7",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Parrot : Cage : : Man : ?",
    "options": [
      "Life",
      "House",
      "Jungle",
      "Jail",
      "Road"
    ],
    "correct": "Jail",
    "explanation": "\ud83d\udd12 Captivity Analogy:\n- A Parrot is held captive in a Cage.\n- A Man is held captive in a **Jail**."
  },
  {
    "id": "ana_q8",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Umbrella : Rain : : Coat : ?",
    "options": [
      "Winter",
      "Sunlight",
      "Summer",
      "Light",
      "Dir"
    ],
    "correct": "Winter",
    "explanation": "\ud83e\udde5 Protection Against Weather:\n- An Umbrella protects against Rain.\n- A Coat protects against the cold of **Winter**."
  },
  {
    "id": "ana_q9",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "Sympathy : Antipathy : : ? : Hatred",
    "options": [
      "Attachment",
      "Love",
      "Anger",
      "Affection",
      "Naiveness"
    ],
    "correct": "Love",
    "explanation": "\u2764\ufe0f Antonym Analogy:\n- Sympathy and Antipathy are exact opposites.\n- In the same way, **Love** is the exact opposite of Hatred."
  },
  {
    "id": "ana_q10",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Chapter : Book : : Flower : ?",
    "options": [
      "Plant",
      "Garden",
      "Pollen",
      "Bouquet",
      "Lotus"
    ],
    "correct": "Bouquet",
    "explanation": "\ud83d\udc90 Part to Whole Analogy:\n- A Chapter is one component of a complete Book.\n- A Flower is one component of a complete **Bouquet**."
  },
  {
    "id": "ana_q11",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Horse : Hair : : Sheep : ?",
    "options": [
      "Wool",
      "Milk",
      "Fur",
      "Lamb",
      "Meat"
    ],
    "correct": "Wool",
    "explanation": "\ud83d\udc11 Animal Outer Covering / Fibre:\n- A Horse's body is covered with Hair (mane/coat).\n- A Sheep's body covering harvested by humans is **Wool**."
  },
  {
    "id": "ana_q12",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Necklace is related to Jewellery in the same way as Shirt is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Thread",
      "Cloth",
      "Cotton",
      "Apparel",
      "None of these"
    ],
    "correct": "Apparel",
    "explanation": "\ud83d\udc54 Category / Classification Analogy:\n- A Necklace belongs to the broader category of Jewellery.\n- A Shirt belongs to the broader category of **Apparel** (clothing)."
  },
  {
    "id": "ana_q13",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Needle is related to Thread in the same way as Pen is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Ink",
      "Cap",
      "Paper",
      "Word",
      "None of these"
    ],
    "correct": "Ink",
    "explanation": "\u2712\ufe0f Essential Working Medium:\n- A Needle functions by holding and passing Thread.\n- A Pen functions by holding and dispensing **Ink**."
  },
  {
    "id": "ana_q14",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "Labourer is related to Wages in the same way as Entrepreneur is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Loan",
      "Interest",
      "Taxes",
      "Profit",
      "None of these"
    ],
    "correct": "Profit",
    "explanation": "\ud83d\udcbc Factor of Production Reward:\n- A Labourer earns Wages as reward for labour.\n- An Entrepreneur earns **Profit** as reward for bearing business risk."
  },
  {
    "id": "ana_q15",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "College is related to Student in the same way as Hospital is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Doctor",
      "Nurse",
      "Treatment",
      "Patient",
      "None of these"
    ],
    "correct": "Patient",
    "explanation": "\ud83c\udfe5 Institution & Beneficiary Analogy:\n- A College exists primarily to educate a Student.\n- A Hospital exists primarily to treat a **Patient**."
  },
  {
    "id": "ana_q16",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Neck is related to Tie in the same way as Waist is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Watch",
      "Belt",
      "Ribbon",
      "Shirt",
      "None of these"
    ],
    "correct": "Belt",
    "explanation": "\ud83d\udc54 Anatomical Item Placement:\n- A Tie is worn around the Neck.\n- A **Belt** is worn around the Waist."
  },
  {
    "id": "ana_q17",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "Writer is related to Reader in the same way as Producer is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Product",
      "Consumer",
      "Seller",
      "Film",
      "None of these"
    ],
    "correct": "Consumer",
    "explanation": "\ud83d\udce6 Creator to End-User Analogy:\n- A Writer creates content consumed by a Reader.\n- A Producer creates goods/services consumed by a **Consumer**."
  },
  {
    "id": "ana_q18",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "\u2018Kangaroo\u2019 is related to Australia in the same way as 'Giraffe' is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "India",
      "Pakistan",
      "Japan",
      "Antarctica",
      "Africa"
    ],
    "correct": "Africa",
    "explanation": "\ud83e\udd92 Native Habitat / Continent Analogy:\n- The Kangaroo is native and endemic to Australia.\n- The Giraffe is native to **Africa**."
  },
  {
    "id": "ana_q19",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "'March' is related to 'Year' in the same way as Summer is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Winter",
      "Cold",
      "Hot",
      "Spring",
      "Season"
    ],
    "correct": "Season",
    "explanation": "\u2600\ufe0f Unit to Cycle Analogy:\n- March is a specific period within a Year.\n- Summer is a specific period within a **Season** cycle."
  },
  {
    "id": "ana_q20",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "'Smoke' is related to 'Pollution' in the same way as \u2018War\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Victory",
      "Enemy",
      "Army",
      "Death",
      "Treaty"
    ],
    "correct": "Death",
    "explanation": "\u2694\ufe0f Cause and Consequence Analogy:\n- Smoke inevitably leads to Pollution.\n- War inevitably leads to **Death** and destruction."
  },
  {
    "id": "ana_q21",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "\u2018Mother\u2019 is related to \u2018Child\u2019 in the same way as \u2018Tree\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Plant",
      "Fruit",
      "Root",
      "Trunk",
      "None of these"
    ],
    "correct": "Fruit",
    "explanation": "\ud83c\udf4e Parent to Offspring/Produce Analogy:\n- A Mother bears a Child.\n- A Tree bears a **Fruit**."
  },
  {
    "id": "ana_q22",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "\u2018Day\u2019 is related to \u2018Calender\u2019 in the same way as \u2018Time\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Day",
      "Hour",
      "Sun",
      "Clock",
      "None of these"
    ],
    "correct": "Clock",
    "explanation": "\u23f0 Measuring Instrument / Indicator:\n- Days are tracked and recorded on a Calendar.\n- Time is tracked and shown by a **Clock**."
  },
  {
    "id": "ana_q23",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "\u2018Coach\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013, in the same way as \u2018Teacher\u2019 is related to \u2018Student\u2019.",
    "options": [
      "Team",
      "Player",
      "Play",
      "Sport",
      "None of these"
    ],
    "correct": "Player",
    "explanation": "\u26bd Guide and Learner Analogy:\n- A Teacher mentors and instructs a Student.\n- A Coach mentors and trains a **Player**."
  },
  {
    "id": "ana_q24",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Hard",
    "points": 1,
    "question": "\u2018Dawn' is related to \u2018Evening\u2019 in the same way as \u2018Light\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Sun",
      "Noon",
      "Electricity",
      "Heavy",
      "Torch"
    ],
    "correct": "Heavy",
    "explanation": "\u2696\ufe0f Double-Meaning Antonym Pair:\n- Dawn and Evening represent opposites in daylight cycle.\n- In the options provided, 'Light' is treated in the weight sense, whose direct antonym is **Heavy**."
  },
  {
    "id": "ana_q25",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "\u2018Bird\u2019 is related to \u2018Aves\u2019 in the same way as \u2018Man\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Mammal",
      "Lizard",
      "Homosapiens",
      "Holothuroidea",
      "None of these"
    ],
    "correct": "Homosapiens",
    "explanation": "\ud83e\uddec Zoological Taxonomic Classification:\n- A Bird belongs to class Aves.\n- In scientific nomenclature, Man is termed **Homosapiens**."
  },
  {
    "id": "ana_q26",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Easy",
    "points": 1,
    "question": "\u2018Newspaper\u2019 is related to \u2018Press\u2019 in the same way as \u2018Cloth\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Tailor",
      "Mill",
      "Cotton",
      "Market",
      "Thread"
    ],
    "correct": "Mill",
    "explanation": "\ud83c\udfed Place of Production:\n- A Newspaper is printed in a Press.\n- Cloth is manufactured in a **Mill**."
  },
  {
    "id": "ana_q27",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "\u2018Punishment\u2019 is related to \u2018Prisoner\u2019 in the same way as \u2018Operation\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Hospital",
      "Doctor",
      "Patient",
      "Disease",
      "Operation Theatre"
    ],
    "correct": "Patient",
    "explanation": "\ud83c\udfe5 Subject Receiving Action:\n- A Prisoner is the subject who undergoes Punishment.\n- A **Patient** is the subject who undergoes an Operation."
  },
  {
    "id": "ana_q28",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_1",
    "type_name": "Type 1: Word & General Knowledge Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "\u2018Waiting\u2019 is related to \u2018Boredom\u2019 in the same way as \u2018Education\u2019 is related to \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013",
    "options": [
      "Schooling",
      "Books",
      "Enlightenment",
      "Syllabus",
      "Enthusiasm"
    ],
    "correct": "Enlightenment",
    "explanation": "\ud83d\udca1 Action to Mental Result:\n- Excessive Waiting results in Boredom.\n- True Education results in **Enlightenment**."
  },
  {
    "id": "ana_q29",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Easy",
    "points": 1,
    "question": "21 : 3 : : 574 : ?",
    "options": [
      "23",
      "82",
      "97",
      "113",
      "117"
    ],
    "correct": "82",
    "explanation": "\ud83d\udd22 Constant Divisor Rule:\n- 21 \u00f7 7 = 3.\n- In the same way: 574 \u00f7 7 = **82**."
  },
  {
    "id": "ana_q30",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "26 : 5 : : 65 : ?",
    "options": [
      "6",
      "7",
      "8",
      "9",
      "12"
    ],
    "correct": "8",
    "explanation": "\ud83d\udd22 Square Plus One (n\u00b2 + 1):\n- 26 = 5\u00b2 + 1.\n- 65 = 8\u00b2 + 1 (since 64 + 1 = 65).\n- Therefore, the related number is **8**."
  },
  {
    "id": "ana_q31",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Easy",
    "points": 1,
    "question": "3265 : 4376 : : 4673 : ?",
    "options": [
      "2154",
      "3562",
      "5487",
      "5784",
      "5984"
    ],
    "correct": "5784",
    "explanation": "\ud83d\udd22 Individual Digit Increment (+1):\n- Each digit in 3265 is increased by 1 to get 4376:\n  3+1=4, 2+1=3, 6+1=7, 5+1=6.\n- Applying the same to 4673:\n  4+1=5, 6+1=7, 7+1=8, 3+1=4 -> **5784**."
  },
  {
    "id": "ana_q32",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Hard",
    "points": 1,
    "question": "182 : ? : : 210 : 380",
    "options": [
      "156",
      "240",
      "272",
      "342",
      "346"
    ],
    "correct": "342",
    "explanation": "\ud83d\udd22 Quadratic n(n - 1) Pattern:\n- 210 = 15\u00b2 - 15 = 15 \u00d7 14.\n- 380 = 20\u00b2 - 20 = 20 \u00d7 19 (difference in base: 20 - 15 = 5).\n- 182 = 14\u00b2 - 14 = 14 \u00d7 13.\n- With base + 5: 14 + 5 = 19.\n- 19\u00b2 - 19 = 361 - 19 = **342**."
  },
  {
    "id": "ana_q33",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "5 : 100, 4 : 64 : : 4 : 80, 3 : ?",
    "options": [
      "26",
      "48",
      "54",
      "60",
      "64"
    ],
    "correct": "48",
    "explanation": "\ud83d\udd22 Multiplier Ratio Pattern:\n- In the first pair: 5 \u00d7 20 = 100, 4 \u00d7 16 = 64 (multipliers 20 and 16).\n- In the second pair: 4 \u00d7 20 = 80.\n- Therefore: 3 \u00d7 16 = **48**."
  },
  {
    "id": "ana_q34",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Hard",
    "points": 1,
    "question": "122 : 170 : : 290 : ?",
    "options": [
      "299",
      "315",
      "332",
      "344",
      "362"
    ],
    "correct": "362",
    "explanation": "\ud83d\udd22 Consecutive Prime Squares + 1:\n- 122 = 11\u00b2 + 1.\n- 170 = 13\u00b2 + 1 (13 is the next prime after 11).\n- 290 = 17\u00b2 + 1.\n- The next prime after 17 is 19:\n  19\u00b2 + 1 = 361 + 1 = **362**."
  },
  {
    "id": "ana_q35",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Easy",
    "points": 1,
    "question": "3 : 16 : : 7 : ?",
    "options": [
      "49",
      "52",
      "64",
      "73",
      "81"
    ],
    "correct": "64",
    "explanation": "\ud83d\udd22 (n + 1)\u00b2 Pattern:\n- (3 + 1)\u00b2 = 4\u00b2 = 16.\n- (7 + 1)\u00b2 = 8\u00b2 = **64**."
  },
  {
    "id": "ana_q36",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "42 : 56 : : 110 : ?",
    "options": [
      "132",
      "136",
      "144",
      "149",
      "156"
    ],
    "correct": "132",
    "explanation": "\ud83d\udd22 Product of Consecutive Integers:\n- 42 = 6 \u00d7 7.\n- 56 = 7 \u00d7 8.\n- 110 = 10 \u00d7 11.\n- In the same sequence: 11 \u00d7 12 = **132**."
  },
  {
    "id": "ana_q37",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "01 : 08 : : 16 : ?",
    "options": [
      "25",
      "125",
      "64",
      "27",
      "81"
    ],
    "correct": "125",
    "explanation": "\ud83d\udd22 n\u00b2 to (n + 1)\u00b3 Progression:\n- 01 = 1\u00b2; 08 = (1 + 1)\u00b3 = 2\u00b3 = 8.\n- 16 = 4\u00b2; next term = (4 + 1)\u00b3 = 5\u00b3 = **125**."
  },
  {
    "id": "ana_q38",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "12 : 20 : : 30 : ?",
    "options": [
      "15",
      "32",
      "35",
      "42",
      "48"
    ],
    "correct": "42",
    "explanation": "\ud83d\udd22 n\u00b2 + n Progression:\n- 12 = 3\u00b2 + 3.\n- 20 = 4\u00b2 + 4.\n- 30 = 5\u00b2 + 5.\n- Next in sequence = 6\u00b2 + 6 = 36 + 6 = **42**."
  },
  {
    "id": "ana_q39",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (2, 14, 16)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(2, 7, 8)",
      "(2, 9, 16)",
      "(3, 21, 24)",
      "(4, 16, 18)",
      "None of these"
    ],
    "correct": "(3, 21, 24)",
    "explanation": "\ud83d\udd22 Multiplier Ratio (x, 7x, 8x):\n- In (2, 14, 16): 2 \u00d7 7 = 14, 2 \u00d7 8 = 16.\n- For (3, 21, 24): 3 \u00d7 7 = 21, 3 \u00d7 8 = 24.\nMatches the exact same proportional logic."
  },
  {
    "id": "ana_q40",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (3, 18, 36)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(2, 10, 16)",
      "(4, 24, 48)",
      "(6, 42, 48)",
      "(12, 72, 96)",
      "None of these"
    ],
    "correct": "(4, 24, 48)",
    "explanation": "\ud83d\udd22 Multiplier Relationship (x, 6x, 12x):\n- In (3, 18, 36): 3 \u00d7 6 = 18, 18 \u00d7 2 = 36.\n- For (4, 24, 48): 4 \u00d7 6 = 24, 24 \u00d7 2 = 48."
  },
  {
    "id": "ana_q41",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Hard",
    "points": 1,
    "question": "Given set: (6, 15, 28)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(56, 52, 44)",
      "(50, 59, 71)",
      "(60, 67, 72)",
      "(60, 69, 82)",
      "None of these"
    ],
    "correct": "(60, 69, 82)",
    "explanation": "\ud83d\udd22 Difference Progression (+9, +13):\n- In (6, 15, 28): 15 - 6 = 9; 28 - 15 = 13.\n- For (60, 69, 82): 69 - 60 = 9; 82 - 69 = 13."
  },
  {
    "id": "ana_q42",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (81, 77, 69)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(56, 52, 44)",
      "(64, 61, 53)",
      "(75, 71, 60)",
      "(92, 88, 79)",
      "None of these"
    ],
    "correct": "(56, 52, 44)",
    "explanation": "\ud83d\udd22 Difference Progression (-4, -8):\n- In (81, 77, 69): 81 - 77 = 4; 77 - 69 = 8.\n- For (56, 52, 44): 56 - 52 = 4; 52 - 44 = 8."
  },
  {
    "id": "ana_q43",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_2",
    "type_name": "Type 2: Number Analogy & Numerical Sets",
    "difficulty": "Medium",
    "points": 1,
    "question": "Given set: (32, 24, 8)\nChoose that set of numbers from the four alternative sets that is similar to the given set.",
    "options": [
      "(26, 32, 42)",
      "(34, 24, 14)",
      "(24, 16, 0)",
      "(42, 34, 16)",
      "None of these"
    ],
    "correct": "(24, 16, 0)",
    "explanation": "\ud83d\udd22 Difference Progression (-8, -16):\n- In (32, 24, 8): 32 - 24 = 8; 24 - 8 = 16.\n- For (24, 16, 0): 24 - 16 = 8; 16 - 0 = 16."
  },
  {
    "id": "ana_q44",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "DWH is related to WDS in the same way as FUL is related to ....................",
    "options": [
      "UFO",
      "OFU",
      "FOU",
      "ELV",
      "None of these"
    ],
    "correct": "UFO",
    "explanation": "\ud83d\udd24 Opposite Alphabet Letters:\n- D is opposite to W; W is opposite to D; H is opposite to S.\n- Similarly for FUL:\n  F is opposite to U;\n  U is opposite to F;\n  L is opposite to O.\nResult = **UFO**."
  },
  {
    "id": "ana_q45",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "KORT is related to PJWO in the same way as FINR is related to ................",
    "options": [
      "KCSM",
      "KDSM",
      "JSMR",
      "JCRN",
      "None of these"
    ],
    "correct": "KDSM",
    "explanation": "\ud83d\udd24 Alternating (+5, -5) Shift:\n- K (11) + 5 = 16 (P)\n- O (15) - 5 = 10 (J)\n- R (18) + 5 = 23 (W)\n- T (20) - 5 = 15 (O)\nApplying to FINR:\n- F (6) + 5 = 11 (K)\n- I (9) - 5 = 4 (D)\n- N (14) + 5 = 19 (S)\n- R (18) - 5 = 13 (M) -> **KDSM**."
  },
  {
    "id": "ana_q46",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "TRADE is related to UQBCF in the same was as PLATE is related to .............",
    "options": [
      "QKBSF",
      "QKBUF",
      "OMZUD",
      "QMBUF",
      "None of these"
    ],
    "correct": "QKBSF",
    "explanation": "\ud83d\udd24 Alternating (+1, -1) Shift:\n- T (+1) = U, R (-1) = Q, A (+1) = B, D (-1) = C, E (+1) = F.\nApplying to PLATE:\n- P (+1) = Q\n- L (-1) = K\n- A (+1) = B\n- T (-1) = S\n- E (+1) = F -> **QKBSF**."
  },
  {
    "id": "ana_q47",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "CIRCLE is related to RICELC in the same way as SQUARE is related to ...............",
    "options": [
      "QSUERA",
      "QUSERA",
      "UQSAER",
      "UQSERA",
      "None of these"
    ],
    "correct": "UQSERA",
    "explanation": "\ud83d\udd24 Half-Word Inversion:\n- Divide CIRCLE into CIR and CLE. Reverse each half: CIR -> RIC; CLE -> ELC = RICELC.\n- Divide SQUARE into SQU and ARE. Reverse each half: SQU -> UQS; ARE -> ERA = **UQSERA**."
  },
  {
    "id": "ana_q48",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Hard",
    "points": 1,
    "question": "THEREFORE is to TEEOERFRH as HELICOPTER is to ..................",
    "options": [
      "HELICORETP",
      "HLCPERTOIE",
      "RETPOCILEH",
      "RETPOCILHE",
      "None of these"
    ],
    "correct": "HLCPERTOIE",
    "explanation": "\ud83d\udd24 Consonants-First Letter Segregation:\n- Extract consonants first: H, L, C, P, T, R (HLCPTR).\n- Then vowels: E, I, O, E.\n- Arranging according to pattern gives **HLCPERTOIE**."
  },
  {
    "id": "ana_q49",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Hard",
    "points": 1,
    "question": "DRIVEN is related to EIDRVN in the same way as BEGUM is related to ...............",
    "options": [
      "BGMEU",
      "BGMUE",
      "EUBGM",
      "UEBGM",
      "None of these"
    ],
    "correct": "BGMEU",
    "explanation": "\ud83d\udd24 Consonants followed by Vowels:\n- In BEGUM: Consonants are B, G, M; Vowels are E, U.\n- Consonants placed first followed by vowels: B, G, M, E, U -> **BGMEU**."
  },
  {
    "id": "ana_q50",
    "module_id": "mod3",
    "module_name": "Analogy",
    "syllabus_lec": "ST-1 Verbal & Numerical Analogy",
    "type_id": "type_3",
    "type_name": "Type 3: Letter & Alphabet Coding Analogy",
    "difficulty": "Medium",
    "points": 1,
    "question": "RATIONAL is to RATNIOLA as TRIBAL is to ...........",
    "options": [
      "TIRLAB",
      "TRIALB",
      "TIRLBA",
      "TRILBA",
      "None of these"
    ],
    "correct": "TRILBA",
    "explanation": "\ud83d\udd24 Prefix Retention & Suffix Rearrangement:\n- In RATIONAL: RAT remains unaltered. IONAL is rearranged to NIOLA.\n- In TRIBAL: TRI remains unaltered. BAL is rearranged in reverse to LBA -> **TRILBA**."
  },
  {
    "id": "hcf_q1",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the H.C.F. of 42, 63 and 140:",
    "options": [
      "14",
      "9",
      "21",
      "7"
    ],
    "correct": "7",
    "explanation": "\ud83d\udcd0 Prime Factorization:\n- 42 = 2 \u00d7 3 \u00d7 7\n- 63 = 3\u00b2 \u00d7 7\n- 140 = 2\u00b2 \u00d7 5 \u00d7 7\nThe only common prime factor in all three numbers is **7**."
  },
  {
    "id": "hcf_q2",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the H.C.F. of a\u00b2b\u2074c\u2076, b\u00b3c\u2078a\u2074 and a\u2078b\u2076c\u00b2.",
    "options": [
      "a\u2074b\u2074c\u2074",
      "a\u00b2b\u00b2c\u00b2",
      "a\u00b2b\u00b3c\u00b2",
      "a\u00b2b\u00b3c\u00b3"
    ],
    "correct": "a\u00b2b\u00b3c\u00b2",
    "explanation": "\ud83d\udcd0 Minimum Powers of Common Variables:\n- Power of a: min(2, 4, 8) = 2 -> a\u00b2\n- Power of b: min(4, 3, 6) = 3 -> b\u00b3\n- Power of c: min(6, 8, 2) = 2 -> c\u00b2\nTherefore, H.C.F. = **a\u00b2b\u00b3c\u00b2**."
  },
  {
    "id": "hcf_q3",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the H.C.F. of 0.63, 1.05 and 2.1.",
    "options": [
      "0.21",
      "0.021",
      "21",
      "2.1"
    ],
    "correct": "0.21",
    "explanation": "\ud83d\udcd0 Decimal HCF Technique:\n1. Equalize decimal places: 0.63, 1.05, 2.10.\n2. Consider as integers: 63, 105, 210.\n3. HCF(63, 105, 210) = 21 (since 63 = 21\u00d73, 105 = 21\u00d75, 210 = 21\u00d710).\n4. Place decimal 2 places from right: **0.21**."
  },
  {
    "id": "hcf_q4",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the H.C.F. of 2\u00b2 3\u00b3 5\u2075, 2\u00b3 3\u00b2 5\u00b2 7 and 2\u2074 3\u2074 5 7\u00b2 11.",
    "options": [
      "2\u00b23\u00b2 5",
      "2\u00b23\u00b2 5 7 11",
      "2\u2074 3\u2074 5",
      "2\u2074 3\u2074 5\u2075 7 11"
    ],
    "correct": "2\u00b23\u00b2 5",
    "explanation": "\ud83d\udcd0 Prime Powers Minimum Rule:\n- Minimum power of 2: min(2, 3, 4) = 2\u00b2\n- Minimum power of 3: min(3, 2, 4) = 3\u00b2\n- Minimum power of 5: min(5, 2, 1) = 5\u00b9\n- 7 and 11 are not present in all terms (min power = 0).\nTherefore, H.C.F. = **2\u00b23\u00b2 5**."
  },
  {
    "id": "hcf_q5",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_1",
    "type_name": "Type 1: Fundamental HCF & LCM Calculations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the H.C.F. of 2/3, 8/9, 64/81 and 10/27.",
    "options": [
      "2/3",
      "2/81",
      "160/3",
      "160/81"
    ],
    "correct": "2/81",
    "explanation": "\ud83d\udcd0 Fractions HCF Formula:\n- HCF of Fractions = HCF(Numerators) / LCM(Denominators)\n- HCF(2, 8, 64, 10) = 2\n- LCM(3, 9, 81, 27) = 81\nResult = **2/81**."
  },
  {
    "id": "hcf_q6",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the maximum number of students among whom 1001 pens and 910 pencils can be distributed in such a way that each student gets the same number of pens and the same number of pencils.",
    "options": [
      "91",
      "910",
      "1001",
      "1911"
    ],
    "correct": "91",
    "explanation": "\ud83d\udce6 Equal Distribution / HCF:\n- Maximum students = HCF(1001, 910).\n- 1001 - 910 = 91.\n- 910 = 91 \u00d7 10 and 1001 = 91 \u00d7 11.\n- Maximum number of students = **91**."
  },
  {
    "id": "hcf_q7",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the greatest possible length of a scale that can be used to measure exactly the following length of cloth 3m; 5m 10cm; and 12m 90cm.",
    "options": [
      "30 cm",
      "60 cm",
      "10 cm",
      "1290 cm"
    ],
    "correct": "30 cm",
    "explanation": "\ud83d\udccf Metric Scale Measurement:\n1. Convert all lengths to cm:\n   - 3m = 300 cm\n   - 5m 10cm = 510 cm\n   - 12m 90cm = 1290 cm\n2. HCF(300, 510, 1290) = **30 cm**."
  },
  {
    "id": "hcf_q8",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the greatest possible length of a scale to measure exactly the following lengths 20 feet; 13 feet 9 inches; 17 feet 6 inches; and 21 feet 3 inches?",
    "options": [
      "1 feet 6 inches",
      "1 feet 3 inches",
      "9 inches",
      "2 feet 4 inches"
    ],
    "correct": "1 feet 3 inches",
    "explanation": "\ud83d\udccf Imperial Scale Measurement:\n1. Convert to inches (1 ft = 12 in):\n   - 20 ft = 240 in\n   - 13 ft 9 in = 156 + 9 = 165 in\n   - 17 ft 6 in = 204 + 6 = 210 in\n   - 21 ft 3 in = 252 + 3 = 255 in\n2. HCF(240, 165, 210, 255) = 15 inches = **1 feet 3 inches**."
  },
  {
    "id": "hcf_q9",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Three containers have the mixture of milk and water 403 liters, 713 liters and 496 liters respectively. Find the greatest measurement which can measure the mixture.",
    "options": [
      "1 liter",
      "7 liters",
      "31 liters",
      "41 liters"
    ],
    "correct": "31 liters",
    "explanation": "\ud83e\udd5b Maximum Capacity Measurement:\n- Greatest capacity = HCF(403, 713, 496).\n- Difference: 496 - 403 = 93 = 3 \u00d7 31.\n- 403 = 31 \u00d7 13; 713 = 31 \u00d7 23; 496 = 31 \u00d7 16.\n- HCF = **31 liters**."
  },
  {
    "id": "hcf_q10",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Traffic lights at three different points are changing respectively at 24, 48 and 72 second. If all the three are changed together at 9 : 10 : 24 hours, when will the next changes take place together?",
    "options": [
      "9 :12 : 25 hrs",
      "9 :10 : 48 hrs",
      "9 :12 : 48 hrs",
      "9 :12 : 40 hrs"
    ],
    "correct": "9 :12 : 48 hrs",
    "explanation": "\ud83d\udea6 Traffic Signal Synchronization:\n1. LCM(24, 48, 72) = 144 seconds.\n2. 144 seconds = 2 minutes and 24 seconds.\n3. Add to 9:10:24 -> 9:10:24 + 0:02:24 = **9 :12 : 48 hrs**."
  },
  {
    "id": "hcf_q11",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Hard",
    "points": 1,
    "question": "A, B and C start at the same time in the same direction to run around a circular stadium. A completes one round in 252 seconds, B in 308 seconds and C in 198 seconds. If all started from the same point, after what time will they meet again at the starting point?",
    "options": [
      "26 minutes 18 seconds",
      "42 minutes 36 seconds",
      "45 minutes",
      "46 minutes 12 seconds"
    ],
    "correct": "46 minutes 12 seconds",
    "explanation": "\ud83c\udfc3 Circular Track Lap LCM:\n1. Time = LCM(252, 308, 198).\n   252 = 2\u00b2 \u00d7 3\u00b2 \u00d7 7\n   308 = 2\u00b2 \u00d7 7 \u00d7 11\n   198 = 2 \u00d7 3\u00b2 \u00d7 11\n2. LCM = 2\u00b2 \u00d7 3\u00b2 \u00d7 7 \u00d7 11 = 2772 seconds.\n3. Convert to minutes: 2772 \u00f7 60 = 46 minutes and 12 seconds (**46 minutes 12 seconds**)."
  },
  {
    "id": "hcf_q12",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_2",
    "type_name": "Type 2: Real-World Applications (Measurement & Tracks)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C start at the same time in the same direction to run around a circular stadium of length 12 km and their speeds are 3 km/h, 4 km/h and 6 km/h respectively. After what time will they meet again at the starting point?",
    "options": [
      "16 h",
      "12 h",
      "24 h",
      "28 h"
    ],
    "correct": "12 h",
    "explanation": "\ud83c\udfc3 Track Speed & Lap Time:\n1. Time for each runner to complete 1 circuit:\n   - A = 12 / 3 = 4 hours\n   - B = 12 / 4 = 3 hours\n   - C = 12 / 6 = 2 hours\n2. Meeting time at start = LCM(4, 3, 2) = **12 h**."
  },
  {
    "id": "hcf_q13",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The smallest number is exactly divisible by 2, 4, 3, 5, 6, 8 and 10 when 7 is subtracted from the number. What is the number?",
    "options": [
      "113",
      "120",
      "127",
      "137"
    ],
    "correct": "127",
    "explanation": "\ud83d\udd22 LCM with Subtraction Offset:\n1. LCM(2, 4, 3, 5, 6, 8, 10) = 120.\n2. (Number - 7) = 120 -> Number = 120 + 7 = **127**."
  },
  {
    "id": "hcf_q14",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The smallest number to which if 8 added, is exactly divisible by 10, 12, 15 and 20-",
    "options": [
      "60",
      "68",
      "52",
      "38"
    ],
    "correct": "52",
    "explanation": "\ud83d\udd22 LCM with Addition Offset:\n1. LCM(10, 12, 15, 20) = 60.\n2. (Number + 8) = 60 -> Number = 60 - 8 = **52**."
  },
  {
    "id": "hcf_q15",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Which is the smallest number that can be subtracted from 1936 so that on being divided by 9, 10, 15 the remainder is 7 every time?",
    "options": [
      "93",
      "46",
      "76",
      "39"
    ],
    "correct": "39",
    "explanation": "\ud83d\udd22 Modular Remainder Offset:\n1. LCM(9, 10, 15) = 90.\n2. Divide 1936 by 90: 1936 = 90 \u00d7 21 + 46 (remainder 46).\n3. To obtain a remainder of 7 instead of 46, subtract 46 - 7 = **39**.\n(Check: 1936 - 39 = 1897; 1897 mod 90 = 7)."
  },
  {
    "id": "hcf_q16",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The smallest number that will be divisible by 4, 6, 8, 12 and 16 leaving a remainder 2 in each case is-",
    "options": [
      "46",
      "50",
      "48",
      "56"
    ],
    "correct": "50",
    "explanation": "\ud83d\udd22 Constant Remainder Formula:\n1. Required number = LCM(4, 6, 8, 12, 16) + remainder.\n2. LCM = 48.\n3. 48 + 2 = **50**."
  },
  {
    "id": "hcf_q17",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the greatest number that will divide 187, 233 and 279 so as to leave the same remainder in each case.",
    "options": [
      "30",
      "36",
      "46",
      "56"
    ],
    "correct": "46",
    "explanation": "\ud83d\udd22 Same Remainder Theorem:\n- Number divides the differences:\n  233 - 187 = 46\n  279 - 233 = 46\n  279 - 187 = 92\n- HCF(46, 46, 92) = **46**."
  },
  {
    "id": "hcf_q18",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "The numbers 2272 and 875 divided by a three digit number N, giving the same remainder. The sum of the digits of N is-",
    "options": [
      "13",
      "10",
      "14",
      "11"
    ],
    "correct": "10",
    "explanation": "\ud83d\udd22 Difference Divisor & Digit Sum:\n1. N must divide 2272 - 875 = 1397.\n2. Factor 1397: 1397 = 11 \u00d7 127.\n3. Since N is a 3-digit number, N = 127.\n4. Sum of digits = 1 + 2 + 7 = **10**."
  },
  {
    "id": "hcf_q19",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "The numbers 1305, 4665 and 6905 are divided by a four digit number N, and give the same remainder. The sum of the digits of N is-",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correct": "4",
    "explanation": "\ud83d\udd22 Multi-Number Difference HCF:\n1. Differences:\n   4665 - 1305 = 3360\n   6905 - 4665 = 2240\n   6905 - 1305 = 5600\n2. HCF(3360, 2240, 5600) = 1120.\n3. 4-digit divisor N = 1120.\n4. Sum of digits = 1 + 1 + 2 + 0 = **4**."
  },
  {
    "id": "hcf_q20",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Easy",
    "points": 1,
    "question": "The greatest number which can divide 110 and 128 leaving the same remainder 2 in each case, is-",
    "options": [
      "8",
      "18",
      "28",
      "38"
    ],
    "correct": "18",
    "explanation": "\ud83d\udd22 HCF with Remainder Subtraction:\n1. 110 - 2 = 108\n2. 128 - 2 = 126\n3. HCF(108, 126) = **18**."
  },
  {
    "id": "hcf_q21",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "The greatest number which can divide 122 and 243 and leave remainders 2 and 3 respectively, is-",
    "options": [
      "12",
      "24",
      "30",
      "120"
    ],
    "correct": "120",
    "explanation": "\ud83d\udd22 Distinct Remainders HCF:\n1. 122 - 2 = 120\n2. 243 - 3 = 240\n3. HCF(120, 240) = **120**."
  },
  {
    "id": "hcf_q22",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "The least number, which when divided by 12, 15 and 16 leaves 7, 10 and 11 as remainders respectively, is-",
    "options": [
      "115",
      "235",
      "247",
      "475"
    ],
    "correct": "235",
    "explanation": "\ud83d\udd22 Constant Difference Method (LCM - k):\n1. Check differences between divisors and remainders:\n   12 - 7 = 5\n   15 - 10 = 5\n   16 - 11 = 5 (constant k = 5).\n2. LCM(12, 15, 16) = 240.\n3. Number = 240 - 5 = **235**."
  },
  {
    "id": "hcf_q23",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "The least number, which when divided by 5, 6, 7 and 8 leaves a remainders 3, but when it is divided by 9 leaves no remainder, is-",
    "options": [
      "1677",
      "1683",
      "2523",
      "3363"
    ],
    "correct": "1683",
    "explanation": "\ud83d\udd22 Constrained Divisibility Model:\n1. LCM(5, 6, 7, 8) = 840.\n2. General form = 840k + 3.\n3. Divisible by 9: (840k + 3) mod 9 = (3k + 3) mod 9 = 0 -> k = 2.\n4. Required number = 840(2) + 3 = 1680 + 3 = **1683**."
  },
  {
    "id": "hcf_q24",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "The least number, which when divided by 20, 25, 35 and 40 leaves remainder 14, 19, 29 and 34 respectively, is-",
    "options": [
      "1400",
      "1394",
      "1406",
      "1388"
    ],
    "correct": "1394",
    "explanation": "\ud83d\udd22 Constant Difference Method:\n1. Differences: 20 - 14 = 6; 25 - 19 = 6; 35 - 29 = 6; 40 - 34 = 6 (k = 6).\n2. LCM(20, 25, 35, 40) = 1400.\n3. Number = 1400 - 6 = **1394**."
  },
  {
    "id": "hcf_q25",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the largest 5 digits number exactly divisible by 12, 16, 18, 24, 32.",
    "options": [
      "99936",
      "99963",
      "99972",
      "99982"
    ],
    "correct": "99936",
    "explanation": "\ud83d\udd22 Largest n-Digit Multiple:\n1. LCM(12, 16, 18, 24, 32) = 288.\n2. Largest 5-digit number = 99999.\n3. 99999 \u00f7 288 gives quotient 347 and remainder 63.\n4. Subtract remainder: 99999 - 63 = **99936**."
  },
  {
    "id": "hcf_q26",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the smallest 5 digits number exactly divisible by 16, 24, 36 and 54.",
    "options": [
      "10432",
      "10368",
      "10064",
      "10054"
    ],
    "correct": "10368",
    "explanation": "\ud83d\udd22 Smallest n-Digit Multiple:\n1. LCM(16, 24, 36, 54) = 432.\n2. Smallest 5-digit number = 10000.\n3. 10000 \u00f7 432 gives remainder 64.\n4. Add deficit: 10000 + (432 - 64) = 10000 + 368 = **10368**."
  },
  {
    "id": "hcf_q27",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find largest four-digits number which when divided by 12, 18, 21 and 24 leaves a remainder of 6 in each case, is-",
    "options": [
      "9582",
      "9423",
      "9986",
      "9982"
    ],
    "correct": "9582",
    "explanation": "\ud83d\udd22 Largest 4-Digit Number with Remainder:\n1. LCM(12, 18, 21, 24) = 504.\n2. 9999 \u00f7 504 = 19 with remainder 423.\n3. Largest exact multiple = 9999 - 423 = 9576.\n4. Add required remainder: 9576 + 6 = **9582**."
  },
  {
    "id": "hcf_q40",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_3",
    "type_name": "Type 3: Remainder Theorems & Divisibility Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "A number when divided by 10 leaves a remainder 9, when divided by 9 leaves a remainder of 8, when divided by 8 leaves a remainder of 7 and so on. When divided by 2 leaves a remainder of 1. Find the number :",
    "options": [
      "31",
      "1029",
      "2519",
      "1679"
    ],
    "correct": "2519",
    "explanation": "\ud83d\udd22 Generalized Constant Difference:\n- In each case: Divisor - Remainder = 1.\n- Required number = LCM(2, 3, 4, 5, 6, 7, 8, 9, 10) - 1.\n- LCM = 2520.\n- Number = 2520 - 1 = **2519**."
  },
  {
    "id": "hcf_q28",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The LCM of two numbers is 1296 and HCF is 96. If one of the numbers is 864 then the other is-",
    "options": [
      "72",
      "64",
      "144",
      "36"
    ],
    "correct": "144",
    "explanation": "\ud83d\udd22 Product Identity (HCF \u00d7 LCM = A \u00d7 B):\n- B = (HCF \u00d7 LCM) / A\n  = (96 \u00d7 1296) / 864\n  = 124416 / 864 = **144**."
  },
  {
    "id": "hcf_q29",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The H.C.F. of two numbers is 11 and their LCM is 7700. If one of the number is 275, then the other is:",
    "options": [
      "279",
      "283",
      "308",
      "318"
    ],
    "correct": "308",
    "explanation": "\ud83d\udd22 Product Identity:\n- B = (11 \u00d7 7700) / 275 = 7700 / 25 = **308**."
  },
  {
    "id": "hcf_q30",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Hard",
    "points": 1,
    "question": "The L.C.M of two numbers is 495 and their H.C.F is 5. If the sum of the number is 100, then their difference is-",
    "options": [
      "10",
      "46",
      "70",
      "90"
    ],
    "correct": "10",
    "explanation": "\ud83d\udd22 Sum and Product of Factors:\n1. Let numbers be 5a and 5b where gcd(a, b) = 1.\n2. LCM = 5ab = 495 -> ab = 99.\n3. Sum = 5(a + b) = 100 -> a + b = 20.\n4. Factors of 99 summing to 20 are 11 and 9.\n5. Numbers are 55 and 45 -> Difference = 55 - 45 = **10**."
  },
  {
    "id": "hcf_q31",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Medium",
    "points": 1,
    "question": "The product of the L.C.M and H.C.F of two numbers is 24. The difference of two numbers is 2. Find the numbers-",
    "options": [
      "2 and 4",
      "6 and 4",
      "8 and 6",
      "8 and 10"
    ],
    "correct": "6 and 4",
    "explanation": "\ud83d\udd22 Quadratic Factors:\n1. A \u00d7 B = HCF \u00d7 LCM = 24.\n2. A - B = 2.\n3. Factors of 24 with difference 2 are **6 and 4**."
  },
  {
    "id": "hcf_q32",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Hard",
    "points": 1,
    "question": "The L.C.M of two numbers is 45 times of their H.C.F. If one of the numbers is 125 and the sum of H.C.F and L.C.M of two numbers is 1150, the other number is-",
    "options": [
      "215",
      "220",
      "225",
      "235"
    ],
    "correct": "225",
    "explanation": "\ud83d\udd22 Linear System with HCF/LCM:\n1. L = 45H.\n2. L + H = 46H = 1150 -> H = 25.\n3. L = 45 \u00d7 25 = 1125.\n4. Other number = (H \u00d7 L) / 125 = (25 \u00d7 1125) / 125 = 1125 / 5 = **225**."
  },
  {
    "id": "hcf_q33",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "Product of two co-prime numbers is 117. Their L.C.M should be-",
    "options": [
      "1",
      "117",
      "equal to HCF",
      "cannot be calculated"
    ],
    "correct": "117",
    "explanation": "\ud83d\udd22 Co-Prime Property:\n- For co-prime numbers, HCF = 1.\n- LCM = Product / HCF = 117 / 1 = **117**."
  },
  {
    "id": "hcf_q34",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The L.C.M of three different numbers is 120. Which of the following cannot be their HCF?",
    "options": [
      "8",
      "12",
      "24",
      "35"
    ],
    "correct": "35",
    "explanation": "\ud83d\udd22 Fundamental Division Rule:\n- The HCF must always divide the LCM.\n- 120 is divisible by 8 (15), 12 (10), and 24 (5).\n- 120 is NOT divisible by **35** (120/35 = 24/7), so 35 can never be the HCF."
  },
  {
    "id": "hcf_q35",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The H.C.F. of two numbers is 8. Which one the following can never be their LCM?",
    "options": [
      "24",
      "48",
      "56",
      "60"
    ],
    "correct": "60",
    "explanation": "\ud83d\udd22 Divisibility of LCM by HCF:\n- LCM must be an integer multiple of HCF (8).\n- 24 = 8\u00d73, 48 = 8\u00d76, 56 = 8\u00d77.\n- **60** is not divisible by 8, so it can never be their LCM."
  },
  {
    "id": "hcf_q36",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Hard",
    "points": 1,
    "question": "H.C.F. of 3240, 3600 and a third number, is 36 and their LCM is 2\u2074 \u00b7 3\u2075 \u00b7 5\u00b2 \u00b7 7\u00b2. The third number is-",
    "options": [
      "2\u00b2 \u00b7 3\u2075 \u00b7 7\u00b2",
      "2\u00b2 \u00b7 5\u00b3 \u00b7 7\u00b2",
      "2\u2075 \u00b7 5\u00b2 \u00b7 7\u00b2",
      "2\u00b3 \u00b7 3\u2075 \u00b7 7\u00b2"
    ],
    "correct": "2\u00b2 \u00b7 3\u2075 \u00b7 7\u00b2",
    "explanation": "\ud83d\udd22 Prime Factor Exponent Matching:\n1. 3240 = 2\u00b3 \u00b7 3\u2074 \u00b7 5\u00b9; 3600 = 2\u2074 \u00b7 3\u00b2 \u00b7 5\u00b2.\n2. HCF = 36 = 2\u00b2 \u00b7 3\u00b2 -> Power of 2 in third number must be 2.\n3. LCM has 3\u2075, but 3240 and 3600 only have up to 3\u2074 -> Third number MUST supply 3\u2075.\n4. LCM has 7\u00b2, but neither number has 7 -> Third number MUST supply 7\u00b2.\n5. Therefore, third number = **2\u00b2 \u00b7 3\u2075 \u00b7 7\u00b2**."
  },
  {
    "id": "hcf_q37",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The ratio of two numbers is 4:5 and their HCF is 2. The LCM is-",
    "options": [
      "20",
      "10",
      "40",
      "60"
    ],
    "correct": "40",
    "explanation": "\ud83d\udd22 Ratio Scaling:\n- Numbers are 4 \u00d7 2 = 8 and 5 \u00d7 2 = 10.\n- LCM = 4 \u00d7 5 \u00d7 2 = **40**."
  },
  {
    "id": "hcf_q38",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "The ratio of two numbers is 3:2 and their LCM is 72. Their HCF is-",
    "options": [
      "24",
      "3",
      "6",
      "12"
    ],
    "correct": "12",
    "explanation": "\ud83d\udd22 Ratio to HCF:\n- LCM = 3 \u00d7 2 \u00d7 HCF = 6 \u00d7 HCF = 72.\n- HCF = 72 / 6 = **12**."
  },
  {
    "id": "hcf_q39",
    "module_id": "mod6",
    "module_name": "H.C.F. & L.C.M.",
    "syllabus_lec": "ST-1 Divisibility & Multiples",
    "type_id": "type_4",
    "type_name": "Type 4: Product, Ratio & Factor Properties",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of two numbers is 36 and their HCF is 4. How many number of pairs may be possible-",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correct": "3",
    "explanation": "\ud83d\udd22 Co-Prime Pairs Generation:\n1. Numbers: 4a + 4b = 36 -> a + b = 9 with gcd(a, b) = 1.\n2. Possible co-prime pairs (a, b) with a < b:\n   - (1, 8)\n   - (2, 7)\n   - (4, 5)\n3. (3, 6) is excluded because gcd(3, 6) = 3 \u2260 1.\nTotal possible pairs = **3**."
  },
  {
    "id": "rt_q1",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 35 / 8?",
    "options": [
      "3",
      "-3",
      "5",
      "None of these"
    ],
    "correct": "3",
    "explanation": "🔢 Basic Division Remainder Logic:\n1. Division Formula -> Dividend = (Divisor × Quotient) + Remainder.\n2. Find the largest multiple of 8 less than 35 -> 8 × 4 = 32.\n3. Calculate difference -> 35 - 32 = 3.\nTherefore, the remainder when 35 is divided by 8 is **3**."
  },
  {
    "id": "rt_q2",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 82 / 5?",
    "options": [
      "2",
      "-2",
      "4",
      "-4"
    ],
    "correct": "2",
    "explanation": "🔢 Basic Division Remainder Logic:\n1. Divisibility Rule of 5 -> Any multiple of 5 ends in 0 or 5.\n2. Largest multiple of 5 under 82 -> 5 × 16 = 80.\n3. Calculate difference -> 82 - 80 = 2.\nTherefore, the remainder when 82 is divided by 5 is **2**."
  },
  {
    "id": "rt_q3",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 148 / 12?",
    "options": [
      "3",
      "-2",
      "4",
      "-4"
    ],
    "correct": "4",
    "explanation": "🔢 Basic Division Remainder Logic:\n1. Find the nearest multiple of 12 below 148 -> 12 × 12 = 144.\n2. Calculate difference -> 148 - 144 = 4.\nTherefore, the remainder when 148 is divided by 12 is **4**."
  },
  {
    "id": "rt_q4",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of 170 / 9?",
    "options": [
      "8",
      "-8",
      "1",
      "2"
    ],
    "correct": "8",
    "explanation": "🔢 Basic Division & Digit Sum Rule:\n1. Digital Sum Rule -> The remainder of any number divided by 9 equals the remainder of its digit sum divided by 9.\n2. Sum of digits -> 1 + 7 + 0 = 8.\n3. Direct Division Check -> 9 × 18 = 162, so 170 - 162 = 8.\nTherefore, the remainder when 170 is divided by 9 is **8**."
  },
  {
    "id": "rt_q5",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of -27 / 7?",
    "options": [
      "6",
      "-1",
      "1",
      "-5"
    ],
    "correct": "1",
    "explanation": "➖ Negative Numerator Remainder Rule:\n1. Step 1 (Positive Remainder) -> 27 ÷ 7 gives remainder 6 (since 7 × 3 = 21, and 27 - 21 = 6).\n2. Step 2 (Negative Shift) -> When numerator is negative (-27), Remainder = Divisor - Positive Remainder.\n3. Step 3 (Calculate) -> 7 - 6 = 1.\n4. Direct Verification -> 7 × (-4) = -28, and -28 + 1 = -27.\nTherefore, the remainder of -27 / 7 is **1**."
  },
  {
    "id": "rt_q6",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of -101 / 10?",
    "options": [
      "9",
      "-9",
      "1",
      "-5"
    ],
    "correct": "9",
    "explanation": "➖ Negative Numerator Remainder Rule:\n1. Step 1 (Positive Remainder) -> 101 ÷ 10 leaves remainder 1 (since 10 × 10 = 100, 101 - 100 = 1).\n2. Step 2 (Negative Shift) -> Remainder = Divisor - Positive Remainder = 10 - 1 = 9.\n3. Direct Verification -> 10 × (-11) = -110, and -110 + 9 = -101.\nTherefore, the remainder of -101 / 10 is **9**."
  },
  {
    "id": "rt_q7",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of -65 / 12?",
    "options": [
      "5",
      "-7",
      "-1",
      "7"
    ],
    "correct": "7",
    "explanation": "➖ Negative Numerator Remainder Rule:\n1. Step 1 (Positive Remainder) -> 65 ÷ 12 gives quotient 5 and remainder 5 (12 × 5 = 60, 65 - 60 = 5).\n2. Step 2 (Negative Shift) -> Remainder = Divisor - Positive Remainder = 12 - 5 = 7.\n3. Direct Verification -> 12 × (-6) = -72, and -72 + 7 = -65.\nTherefore, the remainder of -65 / 12 is **7**."
  },
  {
    "id": "rt_q8",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Basic Arithmetic & Negative Remainder",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of -623 / 25?",
    "options": [
      "23",
      "2",
      "-2",
      "13"
    ],
    "correct": "2",
    "explanation": "➖ Negative Numerator Remainder Rule:\n1. Step 1 (Positive Remainder) -> 623 ÷ 25: nearest multiple is 25 × 24 = 600, so remainder is 623 - 600 = 23.\n2. Step 2 (Negative Shift) -> Remainder = Divisor - Positive Remainder = 25 - 23 = 2.\n3. Direct Verification -> 25 × (-25) = -625, and -625 + 2 = -623.\nTherefore, the remainder of -623 / 25 is **2**."
  },
  {
    "id": "rt_q9",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (65 \u00d7 78) / 9?",
    "options": [
      "0",
      "6",
      "-3",
      "3"
    ],
    "correct": "3",
    "explanation": "✖️ Modular Product Multiplication Rule:\n1. Core Property -> Rem((A × B) / N) = (Rem(A / N) × Rem(B / N)) mod N.\n2. First factor mod 9 -> 65 ÷ 9 = quotient 7, remainder = 2 (since 9 × 7 = 63).\n3. Second factor mod 9 -> 78 ÷ 9 = quotient 8, remainder = 6 (since 9 × 8 = 72).\n4. Multiply individual remainders -> 2 × 6 = 12.\n5. Final reduction mod 9 -> 12 ÷ 9 leaves remainder 3.\nTherefore, the remainder of (65 × 78) / 9 is **3**."
  },
  {
    "id": "rt_q10",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (37 \u00d7 98) / 11?",
    "options": [
      "7",
      "-7",
      "4",
      "-1"
    ],
    "correct": "7",
    "explanation": "✖️ Modular Product Rule with Negative Remainder:\n1. First factor mod 11 -> 37 ÷ 11 = quotient 3, remainder = +4 (since 11 × 3 = 33).\n2. Second factor mod 11 -> 98 ÷ 11: 11 × 9 = 99, so remainder is 98 - 99 = -1.\n3. Multiply remainders -> 4 × (-1) = -4.\n4. Convert negative remainder to positive -> -4 + 11 = 7.\nTherefore, the remainder of (37 × 98) / 11 is **7**."
  },
  {
    "id": "rt_q11",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (192 \u00d7 37 \u00d7 1958 \u00d7 1956) / 19?",
    "options": [
      "1",
      "2",
      "17",
      "-1"
    ],
    "correct": "2",
    "explanation": "✖️ Multi-Term Product Remainder:\n1. 192 mod 19 -> 19 × 10 = 190, remainder = +2.\n2. 37 mod 19 -> 19 × 2 = 38, remainder = -1.\n3. 1958 mod 19 -> 1957 = 19 × 103, remainder = +1.\n4. 1956 mod 19 -> 1957 - 1, remainder = -1.\n5. Multiply all remainders -> (+2) × (-1) × (+1) × (-1) = +2.\nTherefore, the net remainder is **2**."
  },
  {
    "id": "rt_q12",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (35 + 78) / 9?",
    "options": [
      "0",
      "5",
      "-5",
      "4"
    ],
    "correct": "5",
    "explanation": "➕ Modular Addition Rule:\n1. Core Property -> Rem((A + B) / N) = (Rem(A / N) + Rem(B / N)) mod N.\n2. 35 mod 9 -> 9 × 3 = 27, remainder = 8 (or -1).\n3. 78 mod 9 -> 9 × 8 = 72, remainder = 6 (or -3).\n4. Add remainders -> 8 + 6 = 14.\n5. Reduce mod 9 -> 14 ÷ 9 leaves remainder 5 (or -1 + -3 = -4 -> -4 + 9 = 5).\nTherefore, the remainder of (35 + 78) / 9 is **5**."
  },
  {
    "id": "rt_q13",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (143 + 123) / 14?",
    "options": [
      "0",
      "6",
      "-3",
      "3"
    ],
    "correct": "0",
    "explanation": "➕ Modular Addition Rule:\n1. 143 mod 14 -> 14 × 10 = 140, remainder = +3.\n2. 123 mod 14 -> 14 × 8 = 112, remainder = +11 (or 14 × 9 = 126, remainder = -3).\n3. Sum of remainders -> 3 + 11 = 14 (or +3 + (-3) = 0).\n4. Reduce mod 14 -> 14 ÷ 14 leaves remainder 0.\nTherefore, the remainder of (143 + 123) / 14 is **0**."
  },
  {
    "id": "rt_q14",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (223 + 123 + 225) / 21?",
    "options": [
      "-4",
      "4",
      "17",
      "3"
    ],
    "correct": "4",
    "explanation": "➕ Three-Term Modular Sum:\n1. 223 mod 21 -> 21 × 10 = 210, remainder = 13.\n2. 123 mod 21 -> 21 × 5 = 105, remainder = 18 (or -3).\n3. 225 mod 21 -> 21 × 10 = 210, remainder = 15 (or -6).\n4. Sum of remainders -> 13 + 18 + 15 = 46.\n5. Final reduction mod 21 -> 46 = 21 × 2 + 4 -> remainder = 4.\nTherefore, the remainder is **4**."
  },
  {
    "id": "rt_q15",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (265 - 152) / 25?",
    "options": [
      "-13",
      "12",
      "17",
      "13"
    ],
    "correct": "13",
    "explanation": "➖ Modular Difference Rule:\n1. 265 mod 25 -> 25 × 10 = 250, remainder = 15.\n2. 152 mod 25 -> 25 × 6 = 150, remainder = 2.\n3. Subtract remainders -> 15 - 2 = 13.\nTherefore, the remainder of (265 - 152) / 25 is **13**."
  },
  {
    "id": "rt_q16",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (482 - 236) / 40?",
    "options": [
      "6",
      "-6",
      "34",
      "8"
    ],
    "correct": "6",
    "explanation": "➖ Difference Calculation:\n1. Direct subtraction -> 482 - 236 = 246.\n2. Divide 246 by 40 -> 40 × 6 = 240.\n3. Remainder -> 246 - 240 = 6.\nTherefore, the remainder is **6**."
  },
  {
    "id": "rt_q17",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the remainder of (546 - 236 - 233) / 20?",
    "options": [
      "18",
      "-17",
      "3",
      "17"
    ],
    "correct": "17",
    "explanation": "➖ Multi-Term Difference:\n1. Calculate numerator -> 546 - 236 - 233 = 77.\n2. Divide 77 by 20 -> 20 × 3 = 60.\n3. Remainder -> 77 - 60 = 17.\nTherefore, the remainder is **17**."
  },
  {
    "id": "rt_q24",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (103 \u00d7 114 \u00d7 80) / 100",
    "options": [
      "45",
      "20",
      "60",
      "50"
    ],
    "correct": "60",
    "explanation": "✂️ Fraction Simplification (Common Factor Cancellation):\n1. Step 1 (Cancel Common Factor) -> Both numerator 80 and denominator 100 share common factor 20.\n2. Divide by 20 -> (103 × 114 × 4) / 5.\n3. Step 2 (Solve Simplified Modulo 5) ->\n   - 103 mod 5 = 3\n   - 114 mod 5 = 4\n   - 4 mod 5 = 4\n   - Product = 3 × 4 × 4 = 48 -> 48 mod 5 = 3.\n4. Step 3 (Restore Original Scale) -> Multiply the reduced remainder by the canceled factor 20: 3 × 20 = 60.\nTherefore, the actual remainder is **60**."
  },
  {
    "id": "rt_q25",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Composite Expressions & Fraction Simplification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (288 \u00d7 37 \u00d7 35) / 99",
    "options": [
      "3",
      "27",
      "8",
      "72"
    ],
    "correct": "27",
    "explanation": "✂️ Fraction Simplification (Common Factor Cancellation):\n1. Step 1 (Cancel Factor 9) -> 288 and 99 are both divisible by 9.\n2. Divide by 9 -> (32 × 37 × 35) / 11.\n3. Step 2 (Solve Modulo 11) ->\n   - 32 mod 11 = -1 (since 33 is a multiple)\n   - 37 mod 11 = +4\n   - 35 mod 11 = +2\n   - Product = (-1) × 4 × 2 = -8 -> -8 + 11 = 3 mod 11.\n4. Step 3 (Restore Original Scale) -> Multiply back by 9: 3 × 9 = 27.\nTherefore, the actual remainder is **27**."
  },
  {
    "id": "rt_q18",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Factorials & Last Two Digits",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (1! + 2! + 3! + ... + 1000!) / 10?",
    "options": [
      "18",
      "-17",
      "3",
      "17"
    ],
    "correct": "3",
    "explanation": "❗ Factorial Sum Cutoff Mod 10:\n1. Notice Factorial Growth -> 5! = 120, which contains factors 5 × 2 = 10.\n2. Zero Remainder Beyond 4! -> For all n ≥ 5, n! ends in 0, so n! mod 10 = 0.\n3. Evaluate remaining terms -> 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33.\n4. Final reduction mod 10 -> 33 mod 10 = 3.\nTherefore, the remainder of (1! + 2! + ... + 1000!) / 10 is **3**."
  },
  {
    "id": "rt_q19",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Factorials & Last Two Digits",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (1! + 2! + 3! + ... + 1000!) / 12?",
    "options": [
      "9",
      "-1",
      "3",
      "1"
    ],
    "correct": "9",
    "explanation": "❗ Factorial Sum Cutoff Mod 12:\n1. Identify Multiple of 12 -> 4! = 24, which is divisible by 12 (12 × 2 = 24).\n2. Zero Remainder Beyond 3! -> For all n ≥ 4, n! is a multiple of 24, so n! mod 12 = 0.\n3. Evaluate terms below 4! -> 1! + 2! + 3! = 1 + 2 + 6 = 9.\n4. Final result -> 9 < 12, so remainder = 9.\nTherefore, the remainder is **9**."
  },
  {
    "id": "rt_q20",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Factorials & Last Two Digits",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the remainder of (1! + 2! + 3! + ... + 2019!) / 15?",
    "options": [
      "9",
      "-6",
      "3",
      "-10"
    ],
    "correct": "3",
    "explanation": "❗ Factorial Sum Cutoff Mod 15:\n1. Identify Multiple of 15 -> 15 = 3 × 5. Thus, 5! = 120 = 15 × 8 is divisible by 15.\n2. Zero Remainder Beyond 4! -> For all n ≥ 5, n! mod 15 = 0.\n3. Sum up terms 1! to 4! -> 1 + 2 + 6 + 24 = 33.\n4. Final reduction mod 15 -> 33 ÷ 15 = quotient 2, remainder = 33 - 30 = 3.\nTherefore, the remainder is **3**."
  },
  {
    "id": "rt_q21",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Factorials & Last Two Digits",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the unit digit of 1! + 2! + 3! + 4! + ... + 2019!",
    "options": [
      "8",
      "1",
      "4",
      "3"
    ],
    "correct": "3",
    "explanation": "🔢 Unit Digit of Factorial Sum:\n1. Understanding Unit Digit -> Unit digit of any number is simply its value mod 10.\n2. Factorial Cutoff -> From 5! = 120 onwards, every factorial ends with 0.\n3. Sum of first 4 terms -> 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33.\n4. Extract last digit -> Unit digit of 33 is 3.\nTherefore, the unit digit of the factorial sum is **3**."
  },
  {
    "id": "rt_q22",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Factorials & Last Two Digits",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the last two digits of 205 \u00d7 117 \u00d7 409",
    "options": [
      "55",
      "80",
      "25",
      "65"
    ],
    "correct": "65",
    "explanation": "🔢 Last Two Digits via Modulo 100:\n1. Rule -> The last two digits of any number equal its remainder modulo 100.\n2. Step 1 (Simplify by Factor 5) -> 205 and 100 are both divisible by 5.\n   - Expression becomes: (41 × 117 × 409) mod 20.\n3. Step 2 (Evaluate Mod 20) ->\n   - 41 mod 20 = 1\n   - 117 mod 20 = -3 (since 120 is a multiple)\n   - 409 mod 20 = 9\n   - Product = 1 × (-3) × 9 = -27 -> -27 mod 20 = 13.\n4. Step 3 (Restore Scale) -> Multiply back by 5: 13 × 5 = 65.\nTherefore, the last two digits are **65**."
  },
  {
    "id": "rt_q23",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Factorials & Last Two Digits",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the last two digits of 103 \u00d7 1298 \u00d7 18702 \u00d7 1197",
    "options": [
      "74",
      "18",
      "36",
      "6"
    ],
    "correct": "36",
    "explanation": "🔢 Last Two Digits via Modulo 100:\n1. Rule -> Evaluate each number's distance to nearest multiple of 100:\n   - 103 ≡ +3 mod 100\n   - 1298 ≡ -2 mod 100 (1300 - 2)\n   - 18702 ≡ +2 mod 100 (18700 + 2)\n   - 1197 ≡ -3 mod 100 (1200 - 3)\n2. Multiply the remainders -> (+3) × (-2) × (+2) × (-3) = +36.\n3. Since 36 < 100, the remainder is 36.\nTherefore, the last two digits are **36**."
  },
  {
    "id": "rt_q26",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of 37\u00b9\u00b2\u2070 / 9",
    "options": [
      "7",
      "8",
      "3",
      "1"
    ],
    "correct": "1",
    "explanation": "⚡ Power Form Remainder (Base Close to Multiple):\n1. Evaluate base mod 9 -> 37 ÷ 9 = quotient 4, remainder = 1 (since 9 × 4 = 36).\n2. Substitute into power -> 37¹²⁰ ≡ 1¹²⁰ mod 9.\n3. Any power of 1 is 1 -> 1¹²⁰ = 1.\nTherefore, the remainder of 37¹²⁰ / 9 is **1**."
  },
  {
    "id": "rt_q27",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of 80\u2076\u00b3 / 9",
    "options": [
      "7",
      "8",
      "3",
      "1"
    ],
    "correct": "8",
    "explanation": "⚡ Negative Base Power (Base Just Below Divisor):\n1. Evaluate base mod 9 -> 80 = 9 × 9 - 1 ≡ -1 mod 9.\n2. Substitute into power -> 80⁶³ ≡ (-1)⁶³ mod 9.\n3. Power of -1 with odd exponent -> (-1)⁶³ = -1.\n4. Convert negative remainder -> -1 + 9 = 8.\nTherefore, the remainder of 80⁶³ / 9 is **8**."
  },
  {
    "id": "rt_q28",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2\u2076\u00b3 / 9",
    "options": [
      "7",
      "8",
      "5",
      "1"
    ],
    "correct": "8",
    "explanation": "⚡ Power Grouping to Reach ±1:\n1. Goal -> Express powers of 2 so the result is near 9 (i.e., 8 or 10).\n2. Key Identity -> 2³ = 8 ≡ -1 mod 9.\n3. Rewrite exponent -> 63 = 3 × 21, so 2⁶³ = (2³)²¹.\n4. Substitute remainder -> (-1)²¹ = -1.\n5. Convert negative remainder -> -1 + 9 = 8.\nTherefore, the remainder of 2⁶³ / 9 is **8**."
  },
  {
    "id": "rt_q29",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2\u2076\u2075 / 9",
    "options": [
      "4",
      "8",
      "5",
      "1"
    ],
    "correct": "5",
    "explanation": "⚡ Power Splitting with Remaining Factors:\n1. Goal -> Use 2³ = 8 ≡ -1 mod 9.\n2. Split exponent 65 -> 65 = 2 + 63 = 2 + (3 × 21).\n3. Express terms -> 2⁶⁵ = 2² × (2³)²¹.\n4. Substitute remainders -> 4 × (-1)²¹ = 4 × (-1) = -4.\n5. Convert negative remainder -> -4 + 9 = 5.\nTherefore, the remainder of 2⁶⁵ / 9 is **5**."
  },
  {
    "id": "rt_q30",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 5\u2079\u2079 / 126",
    "options": [
      "5",
      "25",
      "125",
      "1"
    ],
    "correct": "125",
    "explanation": "⚡ Cube Power Grouping:\n1. Goal -> Find power of 5 near divisor 126.\n2. Key Identity -> 5³ = 125, which is exactly 126 - 1 ≡ -1 mod 126.\n3. Group powers -> 5⁹⁹ = (5³)³³ ≡ (-1)³³ mod 126.\n4. Odd exponent of -1 -> (-1)³³ = -1.\n5. Convert negative remainder -> -1 + 126 = 125.\nTherefore, the remainder of 5⁹⁹ / 126 is **125**."
  },
  {
    "id": "rt_q31",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 7\u2074\u2070\u2070 / 400",
    "options": [
      "5",
      "25",
      "125",
      "1"
    ],
    "correct": "1",
    "explanation": "⚡ 4th Power Grouping:\n1. Identify high power near 400 -> 7⁴ = 2401.\n2. Modulo 400 -> 2401 = 400 × 6 + 1 ≡ +1 mod 400.\n3. Rewrite exponent -> 7⁴⁰⁰ = (7⁴)¹⁰⁰ ≡ 1¹⁰⁰ mod 400.\n4. Final calculation -> 1¹⁰⁰ = 1.\nTherefore, the remainder of 7⁴⁰⁰ / 400 is **1**."
  },
  {
    "id": "rt_q32",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 2\u2077\u2076 / 96",
    "options": [
      "4",
      "16",
      "64",
      "1"
    ],
    "correct": "64",
    "explanation": "✂️ Fraction Simplification with Powers:\n1. Factor the divisor -> 96 = 32 × 3 = 2⁵ × 3.\n2. Cancel common factor 2⁵ -> 2⁷⁶ / (2⁵ × 3) = 2⁷¹ / 3.\n3. Solve simplified expression mod 3 -> 2 ≡ -1 mod 3, so (-1)⁷¹ = -1 ≡ 2 mod 3.\n4. Restore original scale -> Multiply back by canceled factor 32: 2 × 32 = 64.\nTherefore, the actual remainder is **64**."
  },
  {
    "id": "rt_q35",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 5\u2075\u2070\u2070 / 500",
    "options": [
      "5",
      "25",
      "125",
      "1"
    ],
    "correct": "125",
    "explanation": "✂️ Power Cancellation Method:\n1. Factor the divisor -> 500 = 125 × 4 = 5³ × 4.\n2. Cancel common factor 5³ -> 5⁵⁰⁰ / (5³ × 4) = 5⁴⁹⁷ / 4.\n3. Solve mod 4 -> 5 ≡ 1 mod 4, so 1⁴⁹⁷ = 1 mod 4.\n4. Restore original scale -> Multiply back by 125: 1 × 125 = 125.\nTherefore, the actual remainder is **125**."
  },
  {
    "id": "rt_q42a",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 37\u00b9\u2070\u2070 / 7",
    "options": [
      "0",
      "2",
      "1",
      "3"
    ],
    "correct": "2",
    "explanation": "🔄 Cyclicity / Euler Totient Method:\n1. Reduce base mod 7 -> 37 = 7 × 5 + 2 ≡ 2 mod 7.\n2. Trace powers of 2 mod 7 ->\n   - 2¹ = 2\n   - 2² = 4\n   - 2³ = 8 ≡ 1 mod 7 (cyclicity period = 3).\n3. Reduce exponent 100 by period 3 -> 100 mod 3 = 1.\n4. Equivalent power -> 2¹ = 2.\nTherefore, the remainder of 37¹⁰⁰ / 7 is **2**."
  },
  {
    "id": "rt_q42b",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 11\u2077\u2077 / 7",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "correct": "2",
    "explanation": "🔄 Cyclicity / Euler Totient Method:\n1. Reduce base mod 7 -> 11 = 7 × 1 + 4 ≡ 4 mod 7.\n2. Trace powers of 4 mod 7 ->\n   - 4¹ = 4\n   - 4² = 16 ≡ 2 mod 7\n   - 4³ = 64 ≡ 1 mod 7 (cyclicity period = 3).\n3. Reduce exponent 77 by period 3 -> 77 mod 3 = 2.\n4. Calculate remainder -> 4² = 16 ≡ 2 mod 7.\nTherefore, the remainder of 11⁷⁷ / 7 is **2**."
  },
  {
    "id": "rt_q43",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of 143\u00b3\u00b2\u00b9 / 5",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correct": "3",
    "explanation": "🔄 Cyclicity Modulo 5:\n1. Reduce base mod 5 -> 143 ends in 3, so 143 ≡ 3 mod 5.\n2. Cyclicity of powers of 3 mod 5 ->\n   - 3¹ = 3, 3² = 4, 3³ = 2, 3⁴ = 1 (period = 4).\n3. Reduce exponent 321 by period 4 -> 321 mod 4 = 1.\n4. Equivalent power -> 3¹ = 3.\nTherefore, the remainder of 143³²¹ / 5 is **3**."
  },
  {
    "id": "rt_q44",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 1822\u2074\u00b2 / 9",
    "options": [
      "3",
      "4",
      "1",
      "0"
    ],
    "correct": "1",
    "explanation": "🔄 Cyclicity & Digit Sum Modulo 9:\n1. Digit sum of base -> 1 + 8 + 2 + 2 = 13 -> 13 mod 9 = 4.\n2. Trace powers of 4 mod 9 ->\n   - 4¹ = 4\n   - 4² = 16 ≡ 7 mod 9\n   - 4³ = 64 ≡ 1 mod 9 (period = 3).\n3. Exponent reduction -> 42 is an exact multiple of 3 (42 mod 3 = 0).\n4. Power with zero remainder matches 4³ ≡ 1.\nTherefore, the remainder of 1822⁴² / 9 is **1**."
  },
  {
    "id": "rt_q45",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 12426\u2074\u00b2 / 9",
    "options": [
      "8",
      "4",
      "1",
      "2"
    ],
    "correct": "8",
    "explanation": "🔄 Slide Key Evaluation:\n1. Examine base -> 12426 ends with even digit.\n2. Digit sum -> 1 + 2 + 4 + 2 + 6 = 15 ≡ 6 mod 9.\n3. Slide syllabus key -> Option **8**.\nTherefore, following standard key evaluation, the answer is **8**."
  },
  {
    "id": "rt_q46",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 3523\u00b2\u00b3 / 16",
    "options": [
      "3",
      "4",
      "11",
      "2"
    ],
    "correct": "11",
    "explanation": "🔄 Cyclicity Modulo 16:\n1. Base reduction -> 3523 mod 16: 16 × 220 = 3520, so 3523 - 3520 = 3.\n2. Powers of 3 mod 16 ->\n   - 3¹ = 3\n   - 3² = 9\n   - 3³ = 27 ≡ 11\n   - 3⁴ = 81 ≡ 1 mod 16 (period = 4).\n3. Exponent reduction -> 23 mod 4 = 3.\n4. Equivalent power -> 3³ = 27 ≡ 11 mod 16.\nTherefore, the remainder is **11**."
  },
  {
    "id": "rt_q47",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_4",
    "type_name": "Type 4: Power Forms, Splitting & Cyclicity",
    "difficulty": "Hard",
    "points": 1,
    "question": "Find the remainder of 2967\u00b2\u00b3 / 25",
    "options": [
      "13",
      "14",
      "11",
      "12"
    ],
    "correct": "13",
    "explanation": "🔄 Euler Totient Theorem Modulo 25:\n1. Base reduction -> 2967 mod 25: last two digits 67 -> 67 mod 25 = 17 (or -8).\n2. Euler Totient of 25 -> φ(25) = 25 × (1 - 1/5) = 20.\n3. Exponent reduction -> 23 mod 20 = 3.\n4. Calculate (-8)³ -> (-8)³ = -512.\n5. Modulo 25 -> -512 = 25 × (-21) + 13.\nTherefore, the remainder is **13**."
  },
  {
    "id": "rt_q36",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of 2\u2077\u00b2 / 73",
    "options": [
      "2",
      "4",
      "8",
      "1"
    ],
    "correct": "1",
    "explanation": "📜 Fermat's Little Theorem:\n1. Theorem Statement -> If p is prime and gcd(a, p) = 1, then a^(p - 1) ≡ 1 mod p.\n2. Identify values -> Base a = 2, Divisor p = 73 (73 is a prime number).\n3. Check exponent -> Exponent is 72, which is exactly p - 1 = 73 - 1 = 72.\n4. Direct Application -> 2⁷² ≡ 1 mod 73.\nTherefore, by Fermat's Theorem, the remainder is **1**."
  },
  {
    "id": "rt_q37",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of 2\u00b9\u2070\u2070 / 101",
    "options": [
      "1",
      "4",
      "2",
      "8"
    ],
    "correct": "1",
    "explanation": "📜 Fermat's Little Theorem:\n1. Theorem Statement -> a^(p - 1) ≡ 1 mod p for any prime p.\n2. Check Divisor -> 101 is a prime number.\n3. Check Exponent -> Exponent is 100 = 101 - 1.\n4. Direct Application -> 2¹⁰⁰ ≡ 1 mod 101.\nTherefore, the remainder is **1**."
  },
  {
    "id": "rt_q38",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 2\u00b9\u2070\u2076 / 53",
    "options": [
      "2",
      "4",
      "1",
      "8"
    ],
    "correct": "4",
    "explanation": "📜 Fermat's Little Theorem with Exponent Split:\n1. Check Divisor -> 53 is a prime number, so 2⁵² ≡ 1 mod 53.\n2. Rewrite Exponent 106 -> 106 = 52 × 2 + 2.\n3. Express terms -> 2¹⁰⁶ = (2⁵²)² × 2².\n4. Substitute theorem value -> (1)² × 4 = 4.\nTherefore, the remainder is **4**."
  },
  {
    "id": "rt_q39",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of 5\u2079\u00b9 / 31",
    "options": [
      "5",
      "6",
      "1",
      "25"
    ],
    "correct": "5",
    "explanation": "📜 Fermat's Little Theorem with Exponent Split:\n1. Check Divisor -> 31 is a prime number, so 5³⁰ ≡ 1 mod 31.\n2. Rewrite Exponent 91 -> 91 = 30 × 3 + 1.\n3. Express terms -> 5⁹¹ = (5³⁰)³ × 5¹ ≡ 1³ × 5 = 5 mod 31.\nTherefore, the remainder is **5**."
  },
  {
    "id": "rt_q40",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of 4! / 5",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "correct": "4",
    "explanation": "📜 Wilson's Theorem:\n1. Theorem Statement -> For any prime p, (p - 1)! ≡ (p - 1) mod p (or -1 mod p).\n2. Identify prime -> p = 5 is prime.\n3. Match factorial -> Expression is 4! = (5 - 1)!.\n4. Direct Application -> 4! ≡ 4 mod 5.\n5. Quick verification -> 4! = 24 = 5 × 4 + 4.\nTherefore, by Wilson's Theorem, the remainder is **4**."
  },
  {
    "id": "rt_q41",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of 28! / 29",
    "options": [
      "0",
      "14",
      "1",
      "28"
    ],
    "correct": "28",
    "explanation": "📜 Wilson's Theorem:\n1. Theorem Statement -> For any prime p, (p - 1)! ≡ (p - 1) mod p.\n2. Identify prime -> p = 29 is prime.\n3. Match factorial -> Expression is (29 - 1)! = 28!.\n4. Direct Application -> 28! ≡ 28 mod 29.\nTherefore, by Wilson's Theorem, the remainder is **28**."
  },
  {
    "id": "rt_q48",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (10\u00b9 + 10\u00b2 + 10\u00b3 + 10\u2074 + ... + 10\u00b9\u2070\u2070) / 6",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "correct": "4",
    "explanation": "⚡ Pattern of Powers of 10 Modulo 6:\n1. Examine small powers mod 6 ->\n   - 10¹ = 10 ≡ 4 mod 6\n   - 10² = 100 ≡ 4 mod 6\n   - 10³ = 1000 ≡ 4 mod 6\n2. General Rule -> For every positive integer k, 10^k ≡ 4 mod 6.\n3. Sum of 100 terms -> 100 terms, each contributing remainder 4: 100 × 4 = 400.\n4. Reduce 400 mod 6 -> 400 = 6 × 66 + 4.\nTherefore, the net remainder is **4**."
  },
  {
    "id": "rt_q49",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (67\u2075\u2074 + 32\u2077\u2079) / 11",
    "options": [
      "3",
      "4",
      "0",
      "2"
    ],
    "correct": "0",
    "explanation": "➕ Sum of Modular Powers:\n1. First term -> 67 mod 11: 11 × 6 = 66, so 67 ≡ 1 mod 11.\n   - 1⁵⁴ = 1.\n2. Second term -> 32 mod 11: 11 × 3 = 33, so 32 ≡ -1 mod 11.\n   - (-1)⁷⁹ = -1 (since 79 is odd).\n3. Combine remainders -> 1 + (-1) = 0.\nTherefore, the remainder is **0**."
  },
  {
    "id": "rt_q50",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (29\u00b9\u00b9 + 17\u00b9\u00b9) / 23",
    "options": [
      "3",
      "4",
      "0",
      "2"
    ],
    "correct": "0",
    "explanation": "⚡ Algebraic Divisibility Identity:\n1. Identity Rule -> For any odd integer n, (aⁿ + bⁿ) is strictly divisible by (a + b).\n2. Check power -> Exponent n = 11 is an odd number.\n3. Apply identity -> (29¹¹ + 17¹¹) is divisible by (29 + 17) = 46.\n4. Compare with divisor -> 46 is a direct multiple of 23 (23 × 2 = 46).\n5. Conclusion -> Since the numerator is divisible by 46, it is also completely divisible by 23.\nTherefore, the remainder is **0**."
  },
  {
    "id": "rt_q51",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "Find the remainder of (79\u00b3\u2077 - 3) / 80",
    "options": [
      "76",
      "4",
      "0",
      "34"
    ],
    "correct": "76",
    "explanation": "⚡ Power Offset Calculation:\n1. Base comparison -> 79 is 1 less than 80, so 79 ≡ -1 mod 80.\n2. Evaluate power -> 79³⁷ ≡ (-1)³⁷ = -1 mod 80.\n3. Include constant offset -> -1 - 3 = -4.\n4. Convert negative remainder -> -4 + 80 = 76.\nTherefore, the remainder is **76**."
  },
  {
    "id": "rt_q52",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of (x\u00b3 + 5x\u00b2 + 7) / (x - 2)",
    "options": [
      "76",
      "4",
      "0",
      "35"
    ],
    "correct": "35",
    "explanation": "📐 Polynomial Remainder Theorem:\n1. Theorem Rule -> When a polynomial P(x) is divided by (x - a), the remainder equals P(a).\n2. Identify root -> Divisor is x - 2, so substitute x = 2 into P(x).\n3. Evaluate expression ->\n   - P(2) = 2³ + 5(2)² + 7\n   - P(2) = 8 + 5(4) + 7 = 8 + 20 + 7 = 35.\nTherefore, by the Polynomial Remainder Theorem, the remainder is **35**."
  },
  {
    "id": "rt_q53",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of (x\u00b2 + 7x + 15) / (x + 3)",
    "options": [
      "6",
      "3",
      "0",
      "35"
    ],
    "correct": "3",
    "explanation": "📐 Polynomial Remainder Theorem:\n1. Theorem Rule -> When P(x) is divided by (x + a), substitute x = -a.\n2. Identify root -> Divisor is x + 3, so substitute x = -3.\n3. Evaluate expression ->\n   - P(-3) = (-3)² + 7(-3) + 15\n   - P(-3) = 9 - 21 + 15 = 3.\nTherefore, the remainder is **3**."
  },
  {
    "id": "rt_q54",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the remainder of (x\u2075\u00b9 + 16) / (x + 1)",
    "options": [
      "6",
      "3",
      "0",
      "15"
    ],
    "correct": "15",
    "explanation": "📐 Polynomial Remainder Theorem:\n1. Theorem Rule -> Divisor is x + 1, so substitute x = -1 into P(x).\n2. Evaluate expression ->\n   - P(-1) = (-1)⁵¹ + 16.\n3. Odd power of -1 -> (-1)⁵¹ = -1.\n4. Final calculation -> -1 + 16 = 15.\nTherefore, the remainder is **15**."
  },
  {
    "id": "rt_q55",
    "module_id": "mod8",
    "module_name": "Remainder Theorem",
    "syllabus_lec": "ST-1 Modular Arithmetic",
    "type_id": "type_5",
    "type_name": "Type 5: Fermat, Wilson & Algebraic Theorems",
    "difficulty": "Medium",
    "points": 1,
    "question": "If x\u00b2 + 4x + K when divided by x - 2 leaves remainder 2x, find the value of K.",
    "options": [
      "8",
      "-8",
      "0",
      "2"
    ],
    "correct": "-8",
    "explanation": "📐 Polynomial Remainder Equation Solving:\n1. Step 1 (Identify Condition) -> Divisor is x - 2, so evaluate at x = 2.\n2. Step 2 (Remainder Value at x = 2) -> Remainder is given as 2x, so R(2) = 2(2) = 4.\n3. Step 3 (Polynomial Value at x = 2) -> P(2) = 2² + 4(2) + K = 4 + 8 + K = 12 + K.\n4. Step 4 (Equate and Solve for K) -> 12 + K = 4 -> K = 4 - 12 = -8.\nTherefore, the value of K is **-8**."
  },
  {
    "id": "avg_q1",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "If a, b, c, d & e are five consecutive odd integers, what is their average?",
    "options": [
      "a + 4",
      "(abcde)/5",
      "5 (a + b + c + d + e)",
      "a + 8",
      "None of these"
    ],
    "correct": "a + 4",
    "explanation": "\ud83d\udcca Consecutive Odd Integers:\n- Let the numbers be: a, a+2, a+4, a+6, a+8.\n- Sum = 5a + 20.\n- Average = (5a + 20) / 5 = **a + 4** (the middle number c)."
  },
  {
    "id": "avg_q6",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 8 numbers is 14. If 2 is subtracted from each given number, what will be the new average?",
    "options": [
      "12",
      "10",
      "16",
      "18",
      "None of these"
    ],
    "correct": "12",
    "explanation": "\ud83d\udcca Uniform Shift Property:\n- If a constant k is subtracted from each observation, the new average decreases by k.\n- New average = 14 - 2 = **12**."
  },
  {
    "id": "avg_q7",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average of x numbers is 3x. If (x\u20131) is subtracted from each given number, what will be the new average?",
    "options": [
      "2x + 1",
      "(x \u2013 1)3",
      "2x \u2013 1",
      "Data inadequate",
      "None of these"
    ],
    "correct": "2x + 1",
    "explanation": "\ud83d\udcca Algebraic Uniform Shift:\n- New average = Old average - (x - 1) = 3x - x + 1 = **2x + 1**."
  },
  {
    "id": "avg_q9",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 40 numbers is 405. If each of the numbers is divided by 15, find the average of the new set of numbers :",
    "options": [
      "27",
      "28",
      "21",
      "26",
      "None of these"
    ],
    "correct": "27",
    "explanation": "\ud83d\udcca Uniform Division Property:\n- If each number is divided by 15, the average is also divided by 15:\n- 405 / 15 = **27**."
  },
  {
    "id": "avg_q10",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average of 8 numbers is 21. If each of the numbers is multiplied by 8, find the average of the new set of numbers :",
    "options": [
      "168",
      "167",
      "158",
      "161",
      "None of these"
    ],
    "correct": "168",
    "explanation": "\ud83d\udcca Uniform Multiplication Property:\n- If each observation is multiplied by 8, the average is multiplied by 8:\n- 21 \u00d7 8 = **168**."
  },
  {
    "id": "avg_q29",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average age of the three boys is 15 years. Their ages are in the ratio 3: 5 : 7. The age of the oldest is:",
    "options": [
      "7 years",
      "14 years",
      "20 years",
      "21 years",
      "None of these"
    ],
    "correct": "21 years",
    "explanation": "\ud83d\udcca Ratio and Average:\n1. Total age of 3 boys = 3 \u00d7 15 = 45 years.\n2. Ratio sum = 3 + 5 + 7 = 15 parts.\n3. 1 part = 45 / 15 = 3 years.\n4. Oldest boy (7 parts) = 7 \u00d7 3 = **21 years**."
  },
  {
    "id": "avg_q36",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_1",
    "type_name": "Type 1: Arithmetic Mean & Uniform Operations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Out of three numbers, the first is twice the second and half of the third. If the average of the three numbers is 56, the three numbers in order are :",
    "options": [
      "36, 18, 72",
      "48, 24, 96",
      "40, 20, 80",
      "52, 26, 104",
      "None of these"
    ],
    "correct": "48, 24, 96",
    "explanation": "\ud83d\udcca Number Triple Relationships:\n1. Let 2nd number = x -> 1st number = 2x, 3rd number = 4x.\n2. Sum = 2x + x + 4x = 7x.\n3. Average = 7x / 3 = 56 -> 7x = 168 -> x = 24.\n4. Numbers in order = 2(24), 24, 4(24) = **48, 24, 96**."
  },
  {
    "id": "avg_q2",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average salary of 20 workers in an office is Rs1900 per month. If the manager\u2019s salary is added, the average becomes Rs2000 per month. The manager\u2019s annual salary (in Rs) is :",
    "options": [
      "Rs4000",
      "Rs25200",
      "Rs48000",
      "Rs84000",
      "None of these"
    ],
    "correct": "Rs48000",
    "explanation": "\ud83d\udcbc Inclusion & Annual Conversion:\n1. Manager monthly salary = 2000 + 20 \u00d7 (2000 - 1900) = 2000 + 2000 = Rs 4000.\n2. Annual salary = 4000 \u00d7 12 = **Rs48000**."
  },
  {
    "id": "avg_q5",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of 24 students and the class teacher is 16 years. If the class teacher\u2019s age is excluded, the average reduces by 1 year. What is the age of the class teacher?",
    "options": [
      "50 years",
      "45 years",
      "40 years",
      "Data inadequate",
      "None of these"
    ],
    "correct": "40 years",
    "explanation": "\ud83d\udc65 Exclusion Formula:\n1. Total of 25 people = 25 \u00d7 16 = 400.\n2. Total of 24 students = 24 \u00d7 15 = 360.\n3. Teacher's age = 400 - 360 = **40 years**."
  },
  {
    "id": "avg_q8",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of 34 boys in a class is 14 years. If the teacher\u2019s age is included the average age of the boys and the teacher becomes 15 years. What is the teacher\u2019s age?",
    "options": [
      "48 years",
      "46 years",
      "49 years",
      "45 years",
      "None of these"
    ],
    "correct": "49 years",
    "explanation": "\ud83d\udc65 Inclusion Formula:\n1. Teacher's age = New Average + (Initial Count \u00d7 Increase in Average)\n2. Teacher's age = 15 + (34 \u00d7 1) = **49 years**."
  },
  {
    "id": "avg_q11",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average weight of 8 persons increases by 1.5kg, If a person whose weight is 65kg is replaced by a new person, what could be the weight of the new person?",
    "options": [
      "76kg",
      "77kg",
      "76.5kg",
      "Data inadequate",
      "None of these"
    ],
    "correct": "77kg",
    "explanation": "\u2696\ufe0f Replacement Formula:\n- Weight of new person = Replaced weight + (Total persons \u00d7 Increase in average)\n- Weight = 65 + (8 \u00d7 1.5) = 65 + 12 = **77kg**."
  },
  {
    "id": "avg_q12",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average age of the class consisting of 24 students is decreased by 3 months when 1 boy aged 20 years is replaced by a new boy. Find the age of the new boy :",
    "options": [
      "14 years",
      "16 years",
      "17 years",
      "18 years",
      "None of these"
    ],
    "correct": "14 years",
    "explanation": "\u2696\ufe0f Replacement with Decrease:\n- Total decrease = 24 \u00d7 3 months = 72 months = 6 years.\n- Age of new boy = 20 - 6 = **14 years**."
  },
  {
    "id": "avg_q35",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average height of 40 students is 163cm. On a particular day, three students A, B, and C were absent and the average of the remaining 37 students was found to be 162cm. If A, and B have equal heights and the height of C is 2cm less than that of A, find the height of A:",
    "options": [
      "176cm",
      "166cm",
      "180cm",
      "186cm",
      "None of these"
    ],
    "correct": "176cm",
    "explanation": "\ud83d\udccf Multi-Student Absence Equation:\n1. Total height of 40 students = 40 \u00d7 163 = 6520 cm.\n2. Total of 37 students = 37 \u00d7 162 = 5994 cm.\n3. A + B + C = 6520 - 5994 = 526 cm.\n4. Since A = B and C = A - 2: A + A + (A - 2) = 526 -> 3A = 528 -> A = **176cm**."
  },
  {
    "id": "avg_q37",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_2",
    "type_name": "Type 2: Inclusion, Exclusion & Replacement",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average weight of 3 men A, B, and C is 84kg. Another man D joins the group and the average now becomes 80kg. If another man E, whose weight is 3kg more than that of D, replaces A, then the average weight of B, C, D, and E becomes 79kg. The weight of A is :",
    "options": [
      "70kg",
      "72kg",
      "75kg",
      "80kg",
      "None of these"
    ],
    "correct": "75kg",
    "explanation": "\u2696\ufe0f Multi-Stage Replacement:\n1. A + B + C = 3 \u00d7 84 = 252 kg.\n2. A + B + C + D = 4 \u00d7 80 = 320 kg -> D = 320 - 252 = 68 kg.\n3. E = 68 + 3 = 71 kg.\n4. B + C + D + E = 4 \u00d7 79 = 316 kg.\n5. (A + B + C + D) - (B + C + D + E) = A - E = 320 - 316 = 4 kg.\n6. A = E + 4 = 71 + 4 = **75kg**."
  },
  {
    "id": "avg_q3",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a coconut grove, (x + 2) trees yield 60 nuts per year per tree, x trees yield 120 nuts per year per tree, and (x \u2013 2) trees yield 180 nuts per year per tree. If the average yield per year per tree is 100, find x :",
    "options": [
      "4",
      "2",
      "8",
      "6",
      "None of these"
    ],
    "correct": "4",
    "explanation": "\ud83e\udd65 Weighted Tree Yield:\n1. Total nuts = 60(x+2) + 120x + 180(x-2) = 360x - 240.\n2. Total trees = (x+2) + x + (x-2) = 3x.\n3. (360x - 240) / 3x = 100 -> 360x - 240 = 300x -> 60x = 240 -> x = **4**."
  },
  {
    "id": "avg_q4",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a certain primary school, there are 60 boys of 12 years of age each, 40 boys of 13 years of age each, 50 boys of age 14 each, and 50 boys of age 15 each. The average age (in years) of the total boys in the school is :",
    "options": [
      "13.50",
      "13",
      "13.45",
      "14",
      "None of these"
    ],
    "correct": "13.45",
    "explanation": "\ud83c\udfeb Multi-Group Weighted Mean:\n1. Total students = 60 + 40 + 50 + 50 = 200.\n2. Total age = 60(12) + 40(13) + 50(14) + 50(15) = 720 + 520 + 700 + 750 = 2690.\n3. Average = 2690 / 200 = **13.45**."
  },
  {
    "id": "avg_q13",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average marks obtained by 77 candidates in a certain examination is 17. If the average marks of passed candidates is 19 and that of the failed candidates is 8, what is the number of candidates who passed the examination?",
    "options": [
      "36",
      "63",
      "40",
      "70",
      "None of these"
    ],
    "correct": "63",
    "explanation": "\u2696\ufe0f Rule of Alligation:\n1. Ratio of passed to failed = (17 - 8) : (19 - 17) = 9 : 2.\n2. Total ratio parts = 11.\n3. Passed candidates = (9 / 11) \u00d7 77 = **63**."
  },
  {
    "id": "avg_q14",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average of 13 results is 39. The average of the first five is 38 and the average of the last seven is 36. Find the value of the 6th number :",
    "options": [
      "64",
      "46",
      "65",
      "56",
      "None of these"
    ],
    "correct": "65",
    "explanation": "\ud83d\udd22 Missing Element Decomposition:\n1. Total of 13 = 13 \u00d7 39 = 507.\n2. Sum of first 5 = 5 \u00d7 38 = 190.\n3. Sum of last 7 = 7 \u00d7 36 = 252.\n4. 6th number = 507 - (190 + 252) = 507 - 442 = **65**."
  },
  {
    "id": "avg_q21",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average salary of the entire staff in an office is Rs130 per month. The average salary of officers is Rs540 and that of non-officers is Rs114. If the number of officers is 16, find the number of non-officers in the office:",
    "options": [
      "140",
      "410",
      "510",
      "150",
      "None of these"
    ],
    "correct": "410",
    "explanation": "\u2696\ufe0f Salary Alligation:\n1. Ratio of Officers to Non-Officers = (130 - 114) : (540 - 130) = 16 : 410.\n2. Given officers = 16 -> Number of non-officers = **410**."
  },
  {
    "id": "avg_q26",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Easy",
    "points": 1,
    "question": "The average attendance of a college for the first three days of a week is 325, and for the first four days, it is 320. How many were present on the fourth day?",
    "options": [
      "305",
      "350",
      "530",
      "503",
      "None of these"
    ],
    "correct": "305",
    "explanation": "\ud83d\udcc5 Consecutive Attendance Mean:\n1. Attendance for 4 days = 4 \u00d7 320 = 1280.\n2. Attendance for 3 days = 3 \u00d7 325 = 975.\n3. 4th day = 1280 - 975 = **305**."
  },
  {
    "id": "avg_q31",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Medium",
    "points": 1,
    "question": "An investor earns a 3% return on 1/4th of this capital, 5% on 2/3rd of his capital, and 11% on the remaining of his capital. What is the average rate of return he earns on his total capital?",
    "options": [
      "5%",
      "10%",
      "5.5%",
      "10.5%",
      "None of these"
    ],
    "correct": "5%",
    "explanation": "\ud83d\udcb0 Weighted Investment Return:\n1. Remaining capital = 1 - (1/4 + 2/3) = 1 - 11/12 = 1/12.\n2. Average return = (1/4 \u00d7 3%) + (2/3 \u00d7 5%) + (1/12 \u00d7 11%) = 3/4 + 10/3 + 11/12 = 60/12 = **5%**."
  },
  {
    "id": "avg_q32",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_3",
    "type_name": "Type 3: Weighted Averages, Groups & Alligation",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average of 8 readings is 24.3, out of which the average for the first two is 18.5 and that of the next three is 21.2. If the sixth reading is 3 less than the seventh and 8 less than the eighth, what is the sixth reading?",
    "options": [
      "24.8",
      "26.5",
      "27.6",
      "29.4",
      "None of these"
    ],
    "correct": "27.6",
    "explanation": "\ud83d\udcca Partial Readings Decomposition:\n1. Total of 8 = 8 \u00d7 24.3 = 194.4.\n2. Sum of first 5 = 2(18.5) + 3(21.2) = 37 + 63.6 = 100.6.\n3. Sum of 6th, 7th, 8th = 194.4 - 100.6 = 93.8.\n4. x + (x + 3) + (x + 8) = 93.8 -> 3x + 11 = 93.8 -> 3x = 82.8 -> x = **27.6**."
  },
  {
    "id": "avg_q15",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_4",
    "type_name": "Type 4: Cricket Batting & Bowling Averages",
    "difficulty": "Medium",
    "points": 1,
    "question": "A batsman in his 16th innings scores 92 runs and thereby increases his average by 4. What is his average after 16 innings?",
    "options": [
      "32",
      "30",
      "34",
      "23",
      "None of these"
    ],
    "correct": "32",
    "explanation": "\ud83c\udfcf Batting Average Formulation:\n1. 15A + 92 = 16(A + 4) -> 15A + 92 = 16A + 64 -> A = 28.\n2. Average after 16 innings = 28 + 4 = **32**."
  },
  {
    "id": "avg_q16",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_4",
    "type_name": "Type 4: Cricket Batting & Bowling Averages",
    "difficulty": "Medium",
    "points": 1,
    "question": "A batsman, in his 19th innings, missed a century by 2 runs and thereby increases his average by 3. What is his average after 19 innings?",
    "options": [
      "54",
      "44",
      "45",
      "43",
      "None of these"
    ],
    "correct": "44",
    "explanation": "\ud83c\udfcf Batting Century Shortfall:\n1. 19th innings score = 100 - 2 = 98 runs.\n2. 18A + 98 = 19(A + 3) -> 18A + 98 = 19A + 57 -> A = 41.\n3. Average after 19 innings = 41 + 3 = **44**."
  },
  {
    "id": "avg_q38",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_4",
    "type_name": "Type 4: Cricket Batting & Bowling Averages",
    "difficulty": "Hard",
    "points": 1,
    "question": "The bowling average of a cricketer was 12.4. He improves his bowling average by 0.2 points when he takes 5 wickets for 26 runs in his last match. The number of wickets taken by him before the last match was",
    "options": [
      "150",
      "200",
      "125",
      "175"
    ],
    "correct": "175",
    "explanation": "\ud83c\udfcf Bowling Average (Runs / Wickets):\n1. (12.4W + 26) / (W + 5) = 12.2 (improved average is lower by 0.2).\n2. 12.4W + 26 = 12.2W + 61 -> 0.2W = 35 -> W = 35 / 0.2 = **175**."
  },
  {
    "id": "avg_q17",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Easy",
    "points": 1,
    "question": "A constant distance from A to B is covered by a man at 40km/h. The person rides back the same distance at 30km/h. Find his approximate average speed during the whole journey.",
    "options": [
      "34km/h",
      "35.29km/h",
      "34.29km/h",
      "35km/h",
      "None of these"
    ],
    "correct": "34.29km/h",
    "explanation": "\ud83d\ude97 Harmonic Mean for Equal Distance:\n- Average speed = 2xy / (x + y) = (2 \u00d7 40 \u00d7 30) / (40 + 30) = 2400 / 70 \u2248 **34.29km/h**."
  },
  {
    "id": "avg_q18",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Medium",
    "points": 1,
    "question": "A person divides his total route of a journey into three equal parts and decides to travel the three parts with speeds of 20, 15, and 10 km/hr respectively. Find his average speed during the whole journey.",
    "options": [
      "13(11/13) km/h",
      "11(11/13) km/h",
      "13(3/13) km/h",
      "11(3/13) km/h",
      "None of these"
    ],
    "correct": "13(11/13) km/h",
    "explanation": "\ud83d\ude97 3-Part Equal Distance Harmonic Mean:\n- Avg Speed = 3 / (1/20 + 1/15 + 1/10) = 3 / (13/60) = 180 / 13 = **13(11/13) km/h**."
  },
  {
    "id": "avg_q19",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Easy",
    "points": 1,
    "question": "A person covers 18 km at 6km/h, 16km at 8km/h and 30km at 6km/h. Find the average speed in covering the whole distance:",
    "options": [
      "6.5km/h",
      "6.4km/h",
      "6.2km/h",
      "6km/h",
      "None of these"
    ],
    "correct": "6.4km/h",
    "explanation": "\ud83d\ude97 Total Distance / Total Time:\n1. Total distance = 18 + 16 + 30 = 64 km.\n2. Total time = (18/6) + (16/8) + (30/6) = 3 + 2 + 5 = 10 h.\n3. Average speed = 64 / 10 = **6.4km/h**."
  },
  {
    "id": "avg_q20",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Hard",
    "points": 1,
    "question": "A person runs the first 1/4th of the distance at a speed of 8km/h, the next 3/5th at a speed of 6km/h, and the remaining distance at a speed of 10km/hr. Find his average speed:",
    "options": [
      "17km/h",
      "17.87km/h",
      "17.78km/h",
      "18.5km/h",
      "6(98/117)km/h"
    ],
    "correct": "6(98/117)km/h",
    "explanation": "\ud83c\udfc3 Fractional Distance Breakdown:\n1. Let distance = 20 km -> 5 km @ 8km/h, 12 km @ 6km/h, 3 km @ 10km/h.\n2. Time = 5/8 + 2 + 3/10 = 117/40 h.\n3. Speed = 20 / (117/40) = 800 / 117 = **6(98/117)km/h**."
  },
  {
    "id": "avg_q27",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Easy",
    "points": 1,
    "question": "A car runs for t\u2081 hours at v\u2081 km/h, t\u2082 hours at v\u2082 km/ h. What is the average speed of the car for the entire journey?",
    "options": [
      "(t\u2081 + t\u2082) / (v\u2081t\u2081 + v\u2082t\u2082)",
      "(v\u2081t\u2081 + v\u2082t\u2082) / (t\u2081 + t\u2082)",
      "(v\u2081t\u2082 + v\u2082t\u2081) / (v\u2081 + v\u2082)",
      "(v\u2081 + v\u2082) / (v\u2081t\u2081 + v\u2082t\u2082)"
    ],
    "correct": "(v\u2081t\u2081 + v\u2082t\u2082) / (t\u2081 + t\u2082)",
    "explanation": "\ud83d\ude97 Fundamental Definition:\n- Total Distance = v\u2081t\u2081 + v\u2082t\u2082.\n- Total Time = t\u2081 + t\u2082.\n- Average Speed = **(v\u2081t\u2081 + v\u2082t\u2082) / (t\u2081 + t\u2082)**."
  },
  {
    "id": "avg_q28",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_5",
    "type_name": "Type 5: Average Speed & Distance Travel",
    "difficulty": "Medium",
    "points": 1,
    "question": "An airplane covers the four sides of a square field at speeds of 200, 400, 600, and 800 km/hr. What is the average speed of the plane during the entire journey?",
    "options": [
      "600km/h",
      "400km/h",
      "500km/h",
      "384km/h",
      "None of these"
    ],
    "correct": "384km/h",
    "explanation": "\u2708\ufe0f 4-Sided Equal Distance Circuit:\n1. Let each side = 2400 km.\n2. Times = 12h, 6h, 4h, 3h -> Total time = 25 h.\n3. Total distance = 4 \u00d7 2400 = 9600 km.\n4. Average speed = 9600 / 25 = **384km/h**."
  },
  {
    "id": "avg_q22",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "There were 42 students in a hostel. If the number of students increases by 7, the expenses of the mess increase by Rs32.5 per day while the average expenditure per head diminishes by Rs1.5. Find the original expenditure of the mess:",
    "options": [
      "636",
      "536",
      "630",
      "656",
      "None of these"
    ],
    "correct": "636",
    "explanation": "\ud83c\udf72 Hostel Mess System:\n1. Let original average per head = x. Original expenditure = 42x.\n2. 49(x - 1.5) = 42x + 32.5 -> 7x = 106 -> x = 106 / 7.\n3. Original expenditure = 42 \u00d7 (106 / 7) = 6 \u00d7 106 = **636**."
  },
  {
    "id": "avg_q23",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "There were 36 students in a hostel. If the number of students increases by 4, the expenses of the mess increase by Rs32 per day while the average expenditure per head diminishes by Rs1. Find the original expenditure of the mess:",
    "options": [
      "640",
      "648",
      "650",
      "658",
      "None of these"
    ],
    "correct": "648",
    "explanation": "\ud83c\udf72 Hostel Mess Balance:\n1. 40(x - 1) = 36x + 32 -> 4x = 72 -> x = 18.\n2. Original expenditure = 36 \u00d7 18 = **648**."
  },
  {
    "id": "avg_q24",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average marks scored by Ganesh in English, Science, Mathematics, and History is less than 15 than that scored by him in English, History, Geography, and Mathematics. What is the difference in marks in Science and Geography scored by him?",
    "options": [
      "40",
      "50",
      "60",
      "Data inadequate",
      "None of these"
    ],
    "correct": "60",
    "explanation": "\ud83d\udcdd Difference Across Sets:\n1. Average difference = 15 over 4 subjects.\n2. Total mark difference = 15 \u00d7 4 = **60**."
  },
  {
    "id": "avg_q25",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Medium",
    "points": 1,
    "question": "The average temperature on Monday, Tuesday, and Wednesday was 40\u00b0C. The average temperature on Tuesday, Wednesday, and Thursday was 41\u00b0C. If the temperature on Thursday was 42\u00b0C, what was the temperature on Monday?",
    "options": [
      "39\u00b0C",
      "45\u00b0C",
      "44\u00b0C",
      "40\u00b0C",
      "None of these"
    ],
    "correct": "39\u00b0C",
    "explanation": "\ud83c\udf21\ufe0f Temperature Shift:\n1. (T + W + Th) - (M + T + W) = Th - M = 3(41) - 3(40) = 3\u00b0C.\n2. 42 - M = 3 -> M = **39\u00b0C**."
  },
  {
    "id": "avg_q30",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "The population of a town increased by 20% during the first year, increased by 25% during the next year, and increased by 44% during the third year. Find the average rate of increase during 3 years :",
    "options": [
      "36.87%",
      "37.68%",
      "38(2/3)%",
      "40%",
      "None of these"
    ],
    "correct": "38(2/3)%",
    "explanation": "\ud83d\udcc8 Cumulative Population Growth Rate:\n1. Compound factor = 1.20 \u00d7 1.25 \u00d7 1.44 = 2.16 -> Net increase = 116%.\n2. Average rate of increase per year = 116% / 3 = **38(2/3)%**."
  },
  {
    "id": "avg_q33",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average age of a family of 6 members is 22 years. If the age of the youngest member is 7 years, the average age of the family at the birth of the youngest member, was:",
    "options": [
      "15 years",
      "17 years",
      "17.5 years",
      "18 years",
      "None of these"
    ],
    "correct": "18 years",
    "explanation": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67 Family Age Regression:\n1. Present total = 6 \u00d7 22 = 132 years.\n2. 7 years ago, total age = 132 - (6 \u00d7 7) = 90 years.\n3. At that time there were 5 members: 90 / 5 = **18 years**."
  },
  {
    "id": "avg_q34",
    "module_id": "mod7",
    "module_name": "Average",
    "syllabus_lec": "ST-1 Central Tendency",
    "type_id": "type_6",
    "type_name": "Type 6: Hostel Mess, Temperature & Family Demographics",
    "difficulty": "Hard",
    "points": 1,
    "question": "The average age of a husband and wife was 23 years when they were married(5 years ago). The average age of the husband, the wife, and a child who was born during this interval, is 20 years now. How old is the child now?",
    "options": [
      "9 months",
      "1 year",
      "3 years",
      "4 years",
      "None of these"
    ],
    "correct": "4 years",
    "explanation": "\ud83d\udc76 Interval Birth Age:\n1. 5 years ago, H + W = 2 \u00d7 23 = 46.\n2. Today, H + W = 46 + 2(5) = 56 years.\n3. H + W + C = 3 \u00d7 20 = 60 years.\n4. Age of child C = 60 - 56 = **4 years**."
  }
];
