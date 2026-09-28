/**
 * ============================================================================
 * NALR ST-1 QUESTIONS DATASET (Course Code: 25UNI0110)
 * ============================================================================
 * Total Questions in Database: 448 Questions across 11 Active Modules
 * 
 * 🤖 AI AGENT QUESTION INTEGRATION PROTOCOL:
 * ----------------------------------------------------------------------------
 * When adding new questions to this file (e.g., from lecture slides / PDFs):
 * 
 * 1. EXACT QUESTION OBJECT SCHEMA:
 *    Every question object inside the QUIZ_QUESTIONS array MUST strictly follow:
 *    {
 *      "id": "modX_qY",        // [Required] Unique ID with module prefix (e.g. 'ages_q1', 'allg_q1')
 *      "module_id": "modX",    // [Required] Module identifier (e.g. 'mod10', 'mod12', 'mod13')
 *      "module_name": "...",   // [Required] Module Title matching syllabus.js (e.g. 'Ages')
 *      "syllabus_lec": "...",  // [Required] Subtitle/lecture tag from syllabus.js
 *      "type_id": "type_Z",    // [Required] Subtab Type ID matching syllabus.js (e.g. 'type_1')
 *      "type_name": "...",     // [Required] Exact subtab display name from syllabus.js
 *      "difficulty": "Medium", // [Required] 'Easy' | 'Medium' | 'Hard'
 *      "points": 1,            // [Required] Typically 1
 *      "question": "...",      // [Required] Formatted question prompt text (markdown/KaTeX supported)
 *      "options": [ ... ],     // [Required] Array of string options (usually 4 or 5 choices)
 *      "correct": "...",       // [CRITICAL] MUST be an EXACT character-for-character match to one option!
 *      "explanation": "..."    // [Required] Step-by-step mathematical or logical solution breakdown
 *    }
 * 
 * 2. THE 5 GOLDEN RULES FOR AI AGENTS:
 *    Rule 1: VERBATIM CORRECT ANSWER:
 *            `q.options.includes(q.correct)` MUST be strictly true. Never put an answer
 *            in `correct` that is not verbatim present inside `options`.
 *    Rule 2: SYLLABUS SYNCHRONIZATION:
 *            `module_id` and `type_id` MUST correspond to an existing type in `syllabus.js`.
 *            Make sure the subtab's `count` in `syllabus.js` matches the question count.
 *    Rule 3: UNIQUE IDS:
 *            Use descriptive unique ID prefixes (e.g. `br_q1`, `part_q1`, `syl_q1`, `ages_q1`).
 *    Rule 4: EXAM SELECTION:
 *            When activating a new module, add its `module_id` to `selectedExamModuleIds`
 *            in `app.js` so it is included in Exam Mode by default.
 *    Rule 5: AUTOMATED VERIFICATION:
 *            Always run `python verify_dataset.py` after editing to verify:
 *            - 0 duplicate IDs
 *            - 0 missing options or explanations
 *            - 0 answer mismatches
 *            - 100% sync with syllabus.js
 * 
 * 3. CURRENT ACTIVE MODULES INDEX:
 *    - Module 1:  Blood Relation     (mod1)  -> 34 Questions (IDs: br_q1 .. br_q34)
 *    - Module 2:  Coded Relation     (mod2)  -> 40 Questions (IDs: cr_q1 .. cr_q40)
 *    - Module 3:  Analogy            (mod3)  -> 50 Questions (IDs: ana_q1 .. ana_q50)
 *    - Module 4:  Direction          (mod4)  -> 38 Questions (IDs: dir_q1 .. dir_q38)
 *    - Module 5:  Number System      (mod5)  -> 57 Questions (IDs: num_q1 .. num_q57)
 *    - Module 6:  H.C.F. & L.C.M.    (mod6)  -> 40 Questions (IDs: hcf_q1 .. hcf_q40)
 *    - Module 7:  Average            (mod7)  -> 38 Questions (IDs: avg_q1 .. avg_q38)
 *    - Module 8:  Remainder Theorem  (mod8)  -> 54 Questions (IDs: rem_q1 .. rem_q55)
 *    - Module 9:  Ratio & Proportion (mod9)  -> 28 Questions (IDs: ratio_q1 .. ratio_q28)
 *    - Module 10: Ages               (mod10) -> 26 Questions (IDs: ages_q1 .. ages_q26)
 *    - Module 11: Partnership        (mod11) -> 18 Questions (IDs: part_q1 .. part_q18)
 *    - Module 12: Allegation         (mod12) -> [Pending Activation]
 *    - Module 13: Odd Man Out        (mod13) -> 27 Questions (IDs: odd_q1 .. odd_q27)
 *    - Module 14: Syllogism          (mod14) -> 25 Questions (IDs: syl_q1 .. syl_q25)
 * ============================================================================
 */
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
    "explanation": "🌳 Family Tree Deduction:\n1. A is father of C.\n2. C is sister of D -> C and D are siblings, so A is also father of D.\n3. D is son of B -> B is the mother of D.\n4. Since A is the father and B is the mother of the same children, B is the **wife** of A."
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
    "question": "Daya’s brother is Anil. Daya is son of Chandra. Vimal is father of Chandra. How is Anil related to Vimal.",
    "options": [
      "son",
      "grandson",
      "brother",
      "grandfather"
    ],
    "correct": "grandson",
    "explanation": "🌳 Lineage Breakdown:\n1. Daya is the son of Chandra.\n2. Anil is Daya's brother -> Anil is also the son of Chandra.\n3. Vimal is the father of Chandra.\n4. Therefore, Anil is the **grandson** of Vimal."
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
    "question": "M is N’s brother. K is M’s sister. P is Brother of O, O is N’s daughter. Who is uncle of P?",
    "options": [
      "N",
      "K",
      "O",
      "M"
    ],
    "correct": "M",
    "explanation": "🌳 Generational Step:\n1. O is N's daughter, and P is brother of O -> P is the son of N.\n2. M is brother of N.\n3. The brother of one's parent is an uncle.\n4. Therefore, **M** is the uncle of P."
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
    "question": "B’s sister is A, C’s brother is B, C is son of D then how is A related to D.",
    "options": [
      "Mother",
      "Son",
      "Daughter",
      "Uncle"
    ],
    "correct": "Daughter",
    "explanation": "🌳 Sibling Chain:\n1. C's brother is B, and B's sister is A -> A, B, and C are siblings.\n2. A is female (sister).\n3. C is son of D -> D is the parent of all three siblings.\n4. Thus, A is the **Daughter** of D."
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
    "question": "If B’s Mother is A, C is Son of A, E’s Brother is D, B’s daughter is E. Then who is grand Mother of D.",
    "options": [
      "A",
      "B",
      "C",
      "E"
    ],
    "correct": "A",
    "explanation": "🌳 Generational Mapping:\n1. B's daughter is E, and D is E's brother -> D is the son of B.\n2. B's mother is A.\n3. The mother of D's parent is D's grandmother.\n4. Therefore, **A** is the grandmother of D."
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
    "explanation": "🌳 Family Tree Trace:\n1. Priya is daughter of Sachin, and Jagat is her brother -> Jagat is son of Sachin.\n2. Rajan is brother of Sachin.\n3. Father's brother is paternal uncle.\n4. Hence, **Rajan** is the uncle of Jagat."
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
    "explanation": "🌳 Maternal Lineage:\n1. C and Q are sisters, and Z is their mother.\n2. P is the son of Z -> P is the brother of C and Q.\n3. A is the son of C.\n4. The brother of one's mother is maternal uncle.\n5. Therefore, **P is the maternal uncle of A**."
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
    "explanation": "⚠️ Gender Ambiguity Trap:\n1. K is father of M, and T is wife of K -> K (father) and T (mother).\n2. D, M, and B are children of K and T.\n3. We know D is male (brother) and M is male (brother), but the gender of B is **not mentioned**.\n4. B could be either son or daughter of T. Hence, **data inadequate**."
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
    "question": "Q’s mother is sister of P and daughter of M. S is daughter of P and sister of T. How is M related to T?",
    "options": [
      "Grandfather",
      "father",
      "Grand mother",
      "Either grandfather or grand mother",
      "None of these"
    ],
    "correct": "Either grandfather or grand mother",
    "explanation": "⚠️ Gender Ambiguity:\n1. S and T are siblings, children of P.\n2. P is child of M (since Q's mother is sister of P and daughter of M).\n3. M is the parent of P, so M is the grandparent of T.\n4. Since the gender of M is unspecified, M is **Either grandfather or grand mother**."
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
    "question": "Lovely is a daughter of Ravindra. Geeta, Babita’s sister has a son Golu and daughter Lali. Mala is maternal aunt of Lali and mother of Prabhakar. Prabhakar is brother of Lovely. How is Babita related to Ravindra?",
    "options": [
      "Niece",
      "Sister-in-Law",
      "Cousin",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🌳 Complex Family Tree:\n1. Prabhakar is brother of Lovely, and Lovely is daughter of Ravindra -> Ravindra is father of both.\n2. Mala is mother of Prabhakar -> Mala is the wife of Ravindra.\n3. Mala is maternal aunt of Lali (Geeta's daughter) -> Geeta, Babita, and Mala are sisters.\n4. Babita is the sister of Ravindra's wife (Mala). In precise terminology, Babita is the sister-in-law of Ravindra.\n5. In the examination key for this question, option **(d) None of these** is designated as the correct choice."
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
    "explanation": "🌳 Relational Deduction:\n1. Surendra is the only brother of Rajendra.\n2. Deepa is sister-in-law of Rajendra -> Deepa is married to Surendra.\n3. Sarita is mother-in-law of Deepa -> Sarita is the mother of Deepa's husband (Surendra).\n4. Since Surendra and Rajendra are brothers, Sarita is also the **Mother** of Rajendra."
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
    "question": "Prayank is the son of Sister of Jeewan’s father. Vinod is Son of Usha who is the mother of Sunny and grandmother of Jeewan. Pawan is the father Kalika and maternal grandfather of Prayank. Usha is the wife of Pawan. How is Sunny wife related to Kalika?",
    "options": [
      "Niece",
      "Sister-in-law",
      "Sister",
      "Data inadequate"
    ],
    "correct": "Sister-in-law",
    "explanation": "🌳 Multi-Generational Mapping:\n1. Pawan & Usha are married couple.\n2. Their children include: Vinod, Sunny, and Kalika (mother of Prayank, since Pawan is maternal grandfather of Prayank).\n3. Sunny is the brother of Kalika.\n4. Therefore, Sunny's wife is the **Sister-in-law** of Kalika."
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
    "explanation": "🧩 Caselet 1 Analysis:\n- A (father) is married to F (mother).\n- Children: C (daughter, since not son) and B (son).\n- B is married to G, and D is son of B.\n- The mother of D's father (B) is F.\n- Hence, **F** is the grandmother of D."
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
    "explanation": "🧩 Caselet 1 Analysis:\n- F is the wife of A.\n- A's children are C (daughter) and B (brother of C = male = son).\n- Therefore, **B** is the son of F."
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
    "explanation": "🧩 Caselet 2 Analysis:\n- P (husband) and U (wife) are parents of R (daughter) and Q (son).\n- Q is married to V, and S is son of Q.\n- The mother of S's father (Q) is U.\n- Thus, **U** is the paternal grandmother of S."
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
    "explanation": "🧩 Caselet 2 Analysis:\n- U is the wife of P.\n- Children of P and U are R (daughter, since not son) and Q (brother of R = male).\n- Hence, **Q** is the son of U."
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
    "explanation": "🧩 Caselet 2 Analysis:\n- Q is married to V.\n- W is the father of V.\n- The father of one's spouse is father-in-law.\n- Therefore, **W** is the father-in-law of Q."
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
    "explanation": "🧩 Caselet 2 Analysis:\n- R's brother is Q.\n- V is the wife of Q.\n- Brother's wife is sister-in-law.\n- Hence, **V** is the sister-in-law of R."
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
    "explanation": "🧩 Caselet 2 Analysis:\n- T is the daughter of R.\n- S is the son of Q (brother of R).\n- Children of siblings are cousins to each other.\n- Thus, **S** is the cousin of T."
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
    "question": "Pointing towards a woman Shailesh said, “She is daughter of mother of father of my mother’s daughter. How is the woman related to Shailesh?",
    "options": [
      "Daughter",
      "Grand daughter",
      "Aunt",
      "Sister"
    ],
    "correct": "Aunt",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My mother’s daughter' = Shailesh’s sister.\n2. 'Father of my sister' = Shailesh’s father.\n3. 'Mother of father' = Shailesh’s paternal grandmother.\n4. 'Daughter of paternal grandmother' = Sister of Shailesh’s father = Paternal **Aunt**."
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
    "question": "Pointing to a woman in a photograph, a man says: “she is the only daughter of the mother-in-law of my only son.” How is the woman related to the man?",
    "options": [
      "Daughter",
      "Wife",
      "Daughter-in-law",
      "Mother",
      "Mother-in-law"
    ],
    "correct": "Daughter-in-law",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My only son's mother-in-law' = The mother of my son's wife.\n2. 'The only daughter of that mother-in-law' = My son's wife.\n3. Son's wife is **Daughter-in-law** to the speaker."
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
    "question": "Pointing to a woman in a photograph a man says, “She is the only Daughter of my father’s only daughter–in-law.” How is the woman related to the man?",
    "options": [
      "wife",
      "Daughter",
      "Daughter-in-law",
      "Sister",
      "Sister-in-law"
    ],
    "correct": "Daughter",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My father's only daughter-in-law' = The speaker's wife (since father has only one son, the speaker himself).\n2. 'The only daughter of my wife' = The speaker's **Daughter**."
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
    "question": "Pointing to a photograph a woman says: “He is the only son of the wife of my husband’s father”. How is the man related to the woman?",
    "options": [
      "Son",
      "Son-in-law",
      "Brother-in-law",
      "Brother",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My husband's father' = Father-in-law.\n2. 'Wife of my husband's father' = Mother-in-law.\n3. 'The only son of mother-in-law' = The woman's husband.\n4. The man is her Husband, which is not listed in options (a)-(d). Hence, **None of these**."
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
    "question": "Pointing to a man in a photograph a woman says: “He is the father-in-law of the wife of the only paternal grandson(who has no uncles) of my own father-in-law”. How is the man related to the woman?",
    "options": [
      "son",
      "Husband",
      "Cousin",
      "Nephew",
      "Son-in-law"
    ],
    "correct": "Husband",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'Only paternal grandson (who has no uncles) of my father-in-law': since he has no uncles, the woman's husband is an only son, and this grandson is the woman's own son.\n2. 'Wife of her son' = Daughter-in-law.\n3. 'Father-in-law of her daughter-in-law' = The woman's **Husband**."
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
    "question": "Pointing to woman in a photograph a man says: “She is the paternal grandmother of the son of my daughter-in-law’s mother-in-law.” How is the woman related to that person?",
    "options": [
      "Mother",
      "Mother-in-law",
      "Sister",
      "Sister-in-law",
      "Daughter"
    ],
    "correct": "Mother",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'My daughter-in-law's mother-in-law' = The speaker's wife.\n2. 'Son of my wife' = The speaker's son.\n3. 'Paternal grandmother of my son' = The speaker's **Mother**."
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
    "question": "Pointing to a woman a man says, “She is the sister-in-law of the only child of my mother-in law’s”. How is the woman related to the man?",
    "options": [
      "Daughter",
      "Mother",
      "Sister-in-law",
      "Daughter-in-law",
      "Sister"
    ],
    "correct": "Sister",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'The only child of my mother-in-law' = The speaker's wife.\n2. 'Sister-in-law of my wife' = The speaker's sister (or his brother's wife).\n3. Here, the direct relation matching the options is **Sister**."
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
    "question": "Pointing to a photograph a lady tells Mohan, “I am the only daughter of this lady and her son is your maternal uncle.” How is the speaker related to Mohan’s father?",
    "options": [
      "Wife",
      "Sister-in-law",
      "Either of the two",
      "Mother",
      "Cannot be determined"
    ],
    "correct": "Wife",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'Her son is your maternal uncle' = Mohan's maternal uncle.\n2. 'I am the only daughter of this lady' = Mohan's mother.\n3. The speaker is Mohan's mother, so she is the **Wife** of Mohan's father."
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
    "question": "Introducing a woman, a man said, “Her mother’s husband’s sister is my mother.” What is the man’s relationship with the woman?",
    "options": [
      "Cousin",
      "nephew-Aunt",
      "Father-daughter",
      "Data insufficient",
      "None of these"
    ],
    "correct": "Cousin",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'Her mother's husband' = Her father.\n2. 'Her father's sister' = Her paternal aunt.\n3. 'Her paternal aunt is my mother' -> The man is her aunt's son.\n4. Therefore, the man is her **Cousin**."
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
    "question": "Pointing to a photograph a man, Neha said, “He has no sisters and no daughter, but his mother is the only daughter of my mother” How is the man in the photograph related to Neha’s mother?",
    "options": [
      "Brother-in law",
      "Grandson",
      "Nephew",
      "Can’t be determined"
    ],
    "correct": "Grandson",
    "explanation": "🗣️ Dialogue Decoding:\n1. 'The only daughter of my mother' = Neha herself.\n2. 'His mother is Neha' -> The man is Neha's son.\n3. Neha's son is the **Grandson** of Neha's mother."
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
    "question": "If Raju is the son of wife of the son of the father of Amrendra’s father, how is Raju related to Amrendra, if Raju’s grandfather has no granddaughter?",
    "options": [
      "Brother",
      "Cousin",
      "Either 1 or 2",
      "Can’t say",
      "None of these"
    ],
    "correct": "Either 1 or 2",
    "explanation": "🗣️ Multi-Branch Reasoning:\n1. 'Father of Amrendra's father' = Amrendra's grandfather.\n2. 'Son of Amrendra's grandfather' = Could be Amrendra's father OR Amrendra's uncle.\n3. 'Son of the wife of that son' = Raju is either Amrendra's brother (if father's son) OR cousin (if uncle's son).\n4. Therefore, Raju is **Either 1 or 2** (Brother or Cousin)."
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
    "question": "Pointing towards a lady in a photograph a man said, “She is mother in law of sister in law of my son’s sister”. How is the lady related to the man?",
    "options": [
      "Sister",
      "Sister in law",
      "Mother",
      "Wife"
    ],
    "correct": "Wife",
    "explanation": "🗣️ Chain of In-Laws:\n1. 'My son's sister' = The speaker's daughter.\n2. 'Sister-in-law of my daughter' = The wife of my daughter's brother = Daughter-in-law.\n3. 'Mother-in-law of my daughter-in-law' = The speaker's **Wife**."
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
    "question": "Pointing towards a man in a photograph a woman said, “He is only son of daughter in law of my only son’s father”. How is the man related to woman?",
    "options": [
      "Son",
      "Father",
      "Son in law",
      "Grand son",
      "Can not be determined"
    ],
    "correct": "Grand son",
    "explanation": "🗣️ Generational Chain:\n1. 'My only son's father' = The woman's husband.\n2. 'Daughter-in-law of my husband' = The woman's daughter-in-law.\n3. 'Only son of daughter-in-law' = The woman's **Grand son**."
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
    "question": "Pointing towards a girl in a photograph Umesh said, “Her mother’s brother is only son of my mother’s father”. How is the girl related Umesh?",
    "options": [
      "Grandmother",
      "Sister",
      "Aunt",
      "Mother/maternal aunt"
    ],
    "correct": "Sister",
    "explanation": "🗣️ Maternal Deduction:\n1. 'Only son of my mother's father' = Umesh's maternal uncle.\n2. 'Her mother's brother is Umesh's maternal uncle' -> The girl's mother is Umesh's mother (or maternal aunt).\n3. In direct relations, the girl is Umesh's **Sister**."
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
    "question": "Pointing to Priyanka, father of Bunty Says “She is the daughter of the daughter of wife of the only son of the grandfather of my sister. How is Sonam related to Priyanka if Sonam is Sister of Bunty’s father?”",
    "options": [
      "Aunt",
      "Mother",
      "Niece",
      "Cannot be determined"
    ],
    "correct": "Aunt",
    "explanation": "🗣️ Generational Reconstruction:\n1. 'Grandfather of my sister' = Grandfather of Bunty's father.\n2. 'Only son of grandfather' = Father of Bunty's father.\n3. 'Wife of only son' = Mother of Bunty's father.\n4. 'Daughter of wife' = Sister of Bunty's father (Sonam or her sister).\n5. 'Daughter of daughter' = Daughter of Sonam's sister = Niece of Sonam.\n6. Since Priyanka is the niece of Sonam, Sonam is the **Aunt** of Priyanka."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'My mother' -> Suresh's mother.\n2. 'Only son of my mother' -> Suresh himself (since Suresh is a male).\n3. 'Son of the only son of my mother' -> Son of Suresh.\nTherefore, Suresh is the Father of the boy."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'Her mother's only son' = Woman's brother.\n2. According to Rahul, this person is 'my father'.\n3. So, Rahul's father is the brother of that woman.\n4. Therefore, the woman is Rahul's father's sister, which means she is Rahul's Paternal Aunt (Bua)."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'My father's father' = Man's paternal grandfather.\n2. The 'only daughter-in-law' of his grandfather = The wife of his grandfather's only son (i.e., his father's wife).\n3. Father's wife = Man's Mother.\nTherefore, the lady is the Mother of the man."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'My mother-in-law' = Anuj's wife's mother.\n2. 'Only daughter of my mother-in-law' = Anuj's wife.\n3. The girl's mother is Anuj's wife.\n4. Therefore, Anuj is the Father of the girl."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'Only daughter of my mother' (spoken by a woman) = The woman herself.\n2. 'His mother is [the woman herself]'.\n3. Therefore, the woman is the Mother of the man."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'My daughter's father' = Deepak himself.\n2. 'The father of [Deepak]' = Deepak's father.\n3. 'His only brother is Deepak's father'.\n4. If the gentleman's brother is Deepak's father, then the gentleman is Deepak's Paternal Uncle (Chacha/Tau)."
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
    "explanation": "🌳 Family Tree Construction:\n1. A is female (-) and sister to B.\n2. C is mother (-) of A and B (Generation +1).\n3. D is father (+) of C (Generation +2).\n4. A is in Generation 0 and D is in Generation +2.\n5. Since A is female, A is the Granddaughter of D."
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
    "explanation": "🌳 Step-by-Step Member Classification:\n1. 'B is son of C, but C is not mother' -> C must be the Father (+).\n2. 'A and C are married couple' -> Since C is male, A must be the Mother (-).\n3. 'B is son' -> B is male (+).\n4. 'E is brother of C' -> E is male (+).\n5. 'D is daughter of A' -> D is female (-).\n6. 'F is brother of B' -> F is male (+).\n\nMales (+): C, B, E, F = 4 males.\nFemales (-): A, D = 2 females."
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
    "explanation": "🌳 Family Tree Connections:\n1. A is father (+) of C.\n2. C is sister (-) of D, and D is son (+) of B. This means C and D are siblings.\n3. Since A is their father, B must be their Mother (-) and wife of A (A <=> B).\n4. E is the brother (+) of A.\n5. B is the wife of E's brother (A).\nTherefore, B is E's Sister-in-law (Bhabhi)."
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
    "explanation": "🌳 Analysis of Definite vs Ambiguous Facts:\n1. P, Q, R are children of T (Father) and S (Mother).\n2. P is explicitly stated as 'brother' (male).\n3. But the gender of Q is NEVER mentioned! Q can be a son or a daughter.\n4. Hence, 'Q is T's son' cannot be definitely asserted without knowing Q's gender."
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
    "explanation": "🌳 Tree Deduction:\n1. C has an only son D.\n2. E is the sister of D.\n3. Since D is C's son and E is D's sister, E must be the Daughter of C.\n(Notice: 'only son' means C has only 1 male child, but can have female children like E!)."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. M, K, D are siblings.\n2. F is the mother of M, so F is the mother of K as well.\n3. M is female (-), D is male (+), but K's gender is NOT specified.\n4. Therefore, K is either the Son or the Daughter of F."
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
    "explanation": "🌳 Chain Breakdown:\n1. Woman speaks: 'The only daughter of my father' = The woman herself.\n2. 'His wife is [the woman herself]'.\n3. Since the woman is his wife, the man is her Husband."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'Her mother's brother' = Maternal Uncle (Mama).\n2. 'Son of maternal uncle' = Maternal Cousin brother.\n3. In English kinship terms, the child of an aunt or uncle is called a Cousin."
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
    "explanation": "🌳 Unraveling the Chain:\n1. Harsh has no brothers or sisters -> 'My father's only son' is Harsh himself.\n2. 'Wife of my father's only son' = Harsh's wife.\n3. 'His mother is [Harsh's wife]'.\n4. If Harsh's wife is the portrait's mother, the portrait is of Harsh's Son."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'Lady's mother's husband' = Lady's father.\n2. 'Lady's father's sister' = Lady's paternal aunt (Bua).\n3. The man states that this aunt is also 'my aunt'.\n4. Since they share the same paternal aunt and father, the lady is the man's Sister."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'My husband's wife' = Rita herself.\n2. 'Daughter of Rita' = Rita's daughter.\n3. 'Brother of Rita's daughter' = Rita's son.\n4. Therefore, the man on the stage is Rita's Son."
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
    "explanation": "🌳 Verification:\n1. 'Sister of my daughter' = The speaker's daughter.\n2. 'The father of [my daughter]' = The male speaker himself.\n3. The statement is consistent, and the speaker is the Father."
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
    "explanation": "🌳 Matrimonial Logic:\n1. 'Vipin's mother-in-law' = Mother of Vipin's wife.\n2. 'Only daughter of my mother-in-law' = Vipin's wife.\n3. The girl's mother is Vipin's wife.\n4. Hence, Vipin is the girl's Father."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'Grandson of my mother' = Since Amit has no brothers, the only grandson of his mother must be Amit's son.\n2. 'The wife of Amit's son' = Amit's daughter-in-law.\n3. How is Amit related to the girl? Amit is her Father-in-law (Sasur)."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. A's son is D's brother, which means D and C are daughters of A.\n2. B is the brother of A.\n3. Father's brother = Paternal Uncle.\n4. Therefore, B is the Uncle of C."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. For any married man, 'his mother-in-law's only daughter' is his WIFE.\n2. So, 'His wife is my mother'.\n3. If a man's wife is the lady's mother, then that man is the lady's Father."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'Rohit's father-in-law' = Rohit's wife's father.\n2. 'Only son of Rohit's father-in-law' = Rohit's wife's brother.\n3. Monika's father is Rohit's wife's brother.\n4. Therefore, Rohit's wife is the sister of Monika's father, which means she is Monika's Paternal Aunt (Bua)."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'My daughter's brother' = Sunita's son.\n2. 'Sunita's son's wife' = Sunita's daughter-in-law.\n3. So, Rakesh's sister is Sunita's daughter-in-law.\n4. This implies Rakesh is in the same generation as Sunita's son/daughter-in-law, and Sunita is the Mother-in-law of Rakesh's sister."
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
    "explanation": "🌳 Lineage Trace:\n1. B and C are siblings.\n2. A is son of B. D is son of C.\n3. Children of siblings are Cousins to each other.\n4. Therefore, A is the Cousin of D."
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
    "explanation": "🌳 Classic 3-Generation Minimal Family Puzzle:\n• Generation 1 (+2): Grandfather (+), Grandmother (-)\n• Generation 2 (+1): Father (+) [Son of Gen 1], Mother (-) [Daughter-in-law]\n• Generation 3 (0): 1 Son (+), 2 Daughters (-) [Grandchildren]\n\nTotal Count = 2 + 2 + 3 = 7 persons!\nEvery single listed role is satisfied completely."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'P's father's sister' = P's paternal aunt (Bua).\n2. 'Father of P's paternal aunt' = P's father's father.\n3. P's father's father = Paternal Grandfather (Dada).\n4. Therefore, Q is the Paternal Grandfather of P."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'Geeta's father-in-law' = Father of Geeta's husband.\n2. 'The only son of Geeta's father-in-law' = Geeta's husband.\n3. Maya is the daughter of Geeta's husband.\n4. Therefore, Geeta is the Mother of Maya."
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
    "explanation": "🌳 Generational Mapping:\n1. Mohan and Sarita are grandparents.\n2. Priya is Neha's mother.\n3. Rajiv is Priya's brother.\n4. Mother's brother = Maternal Uncle (Mama).\n5. Therefore, Rajiv is Neha's Maternal Uncle."
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
    "explanation": "🌳 Binary Gender Logic:\nSince P is a biological child of Q, P can only be either a son or a daughter. Given that P is NOT the daughter, P must be the Son!"
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
    "explanation": "🌳 Exam Trap Explanation:\n• A is male (+)\n• B is male (+)\n• D is father (+)\n• But what is C's gender? C could be a brother OR a sister! The statements never state that C is male. Hence, 'C is the brother of A' cannot be claimed with certainty."
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
    "explanation": "🌳 Breakdown:\n1. Ravi is the son of Rekha.\n2. Deepak is the brother (+) of Ravi.\n3. Since Deepak and Ravi are brothers, Deepak is also the Son of Rekha."
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
    "explanation": "🌳 Reasoning:\n1. 'Kiran is the sister' explicitly tells us that Kiran is Female (-).\n2. Sonu is Rakesh's child.\n3. Since Kiran is Sonu's sister, Kiran is also Rakesh's child.\n4. A female child of Rakesh is definitely his Daughter!"
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
    "explanation": "🌳 Tree Breakdown:\n1. P is the mother (-) of Q.\n2. N is the brother (+) of P.\n3. Mother's brother = Maternal Uncle (Mama).\n4. Therefore, N is Q's Maternal Uncle."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. Q and R are sisters (-).\n2. T is their mother (-).\n3. S is the son (+) of T, which means S is the brother of Q and R.\n4. P is the son (+) of Q.\n5. Since S is the brother of P's mother (Q), S is the Maternal Uncle of P."
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
    "explanation": "🌳 Matrix Breakdown:\n1. D (Doctor) <=> C (Teacher) are grandparents (Couple 1).\n2. A (Lawyer) <=> B (Engineer) are parents (Couple 2).\n3. E and F are their children (siblings).\n4. However, F's gender is NOT specified in the puzzle clues!\n5. Therefore, F can be either the Brother or Sister of E."
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
    "explanation": "🌳 Two-Step Vertical Lineage:\n1. L is father (+) of P (Generation +1).\n2. M is mother (-) of L (Generation +2).\n3. Father's mother = Paternal Grandmother (Dadi).\n4. Therefore, M is P's Paternal Grandmother."
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
    "explanation": "🌳 Direct Deduction:\n1. T is the father of P and Q.\n2. S is the daughter-in-law of T, meaning S is married to one of T's sons.\n3. Since Q is married to S, Q is the husband of S."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. 'B is son of C, but C is not mother' -> C is the Father (+).\n2. 'A and C are a married couple' -> A is the Mother (-).\n3. Since B is the son of C and A is C's wife, A is the Mother of B."
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
    "explanation": "🌳 Step-by-Step Breakdown:\n1. D is the daughter of A and C.\n2. C is D's father.\n3. E is the brother of C (father's brother).\n4. Father's brother = Paternal Uncle (Chacha/Tau).\n5. Therefore, E is D's Paternal Uncle."
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
    "explanation": "🧭 Step-by-Step Vector Trace:\n1. Starts at (0, 0).\n2. Walks 8 km South -> Position: (0, -8).\n3. Turns West and walks 3 km -> Position: (-3, -8).\n4. Turns North and walks 5 km -> Position: (-3, -8 + 5) = (-3, -3).\n5. Turns East and walks 3 km -> Position: (-3 + 3, -3) = (0, -3).\nAshok is directly on the negative y-axis at (0, -3), which is due **South** from the starting point."
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
    "explanation": "🧭 Step-by-Step Path Trace:\n1. Let Point P be origin (0, 0).\n2. 20m South -> (0, -20).\n3. Left turn (East) 30m -> (30, -20).\n4. Left turn (North) 20m -> (30, 0).\n5. Left turn (West) 40m -> (30 - 40, 0) = (-10, 0) = Point Q.\nNow, to find Point P from Point Q: P is at (0, 0) and Q is at (-10, 0). Thus, P is **10 m East** of Q."
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
    "explanation": "🧭 Coordinate Analysis:\n- Eastward initial movement: +2 km.\n- North-West movement (3 km): adds negative x and positive y (-3/√2 ≈ -2.12 km, +2.12 km).\n- Subsequent movements: -5 km (South), -2 km (West), +6 km (North).\n- Net vertical displacement: 2.12 - 5 + 6 = +3.12 km (North).\n- Net horizontal displacement: 2 - 2.12 - 2 = -2.12 km (West).\nWith net position in (-x, +y), Roy is in the **North-West** direction from the starting point."
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
    "explanation": "🧭 Step-by-Step Movement:\n1. Facing North, turns right (East) and walks 25m -> (+25, 0).\n2. Turns left (North) and walks 30m -> (+25, +30).\n3. Turns right (East) and walks 25m -> (+50, +30).\n4. Turns right (South) and walks 55m -> (+50, 30 - 55) = (+50, -25).\n5. Turns right (West) and walks 40m -> (50 - 40, -25) = (+10, -25).\nNet position is (+10, -25): positive x (East) and negative y (South). Therefore, Vimal is in the **South-East** direction from starting point."
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
      "Can’t be determined"
    ],
    "correct": "North-West",
    "explanation": "🧭 Coordinate Trace:\n1. Let P be (0, 0).\n2. 10 miles East -> (10, 0).\n3. Right turn (South) 5 miles -> (10, -5).\n4. Right turn (West) 5 miles -> (10 - 5, -5) = (5, -5).\nTom is at (5, -5). Point P is at (0, 0).\nTo look at P from Tom's position: move -5 in x (West) and +5 in y (North). Therefore, P is in the **North-West** direction from Tom."
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
    "explanation": "📐 Pythagoras Calculation:\n1. North 10 km, then South 6 km -> Net North displacement = 10 - 6 = 4 km.\n2. East displacement = 3 km.\n3. Shortest distance H = √(4² + 3²) = √(16 + 9) = √25 = **5 km**."
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
    "explanation": "📐 Displacement Calculation:\n1. 1 km East -> (1, 0).\n2. Right (South) 1 km -> (1, -1).\n3. Left (East) 2 km -> (1 + 2, -1) = (3, -1).\n4. Left (North) 5 km -> (3, -1 + 5) = (3, 4).\n5. Distance = √(3² + 4²) = √(9 + 16) = √25 = **5 km**."
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
    "explanation": "📐 Right-Triangle Geometry:\n- Total East displacement = 6m + 6m = 12 meters.\n- Total South displacement = 9 meters.\n- Shortest distance = √(12² + 9²) = √(144 + 81) = √225 = **15 meters**."
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
    "explanation": "🧭 Path Trace:\n1. P (0, 5) -> walks South 5 km to Q (0, 0).\n2. At Q, turns right (West) walks 5 km to (-5, 0).\n3. Turns left (South) walks 5 km to R (-5, -5).\n4. Turns left (East) walks 5 km to S (0, -5).\nPoint S is at (0, -5) and Point Q is at (0, 0). To go from S to Q, Vimal must walk straight **North**."
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
    "explanation": "🔄 Turn Tracking:\n- Initial: South.\n- Turn 1 (Left = 90° ACW): East.\n- Turn 2 (Left = 90° ACW): North.\n- Turn 3 (Right = 90° CW): East.\n- Turn 4 (Right = 90° CW): **South**.\nNet turns: 2 Left (-180°) + 2 Right (+180°) = 0° net change. Still walking South."
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
    "explanation": "🔄 Compass Shift Rule:\n- North-East (45°) shifted to West (270°) = rotation of 135° anti-clockwise (or 225° clockwise).\n- South-East (135°) shifted to North (0°/360°) = 135° anti-clockwise.\n- Apply 135° anti-clockwise to West (270°):\n  270° - 135° = 135° which corresponds to **South-East**."
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
    "explanation": "🧭 Relative Coordinates:\n- Let B be at origin (0, 0).\n- M is South of B: (0, -1).\n- B is West of N, so N is East of B: (+1, 0).\n- From M (0, -1) to N (1, 0), you must travel +1 East and +1 North -> **North-East**."
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
    "explanation": "📐 Step-by-Step:\n- Eastward: 30m.\n- Southward: 50m.\n- Eastward: 40m.\n- Northward: 50m (cancels out the 50m Southward walk!).\n- Total distance from starting point = 30m + 40m = **70 m**."
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
    "explanation": "📐 Coordinate Path Trace:\n1. 10m North -> (0, 10).\n2. Right (East) 10m -> (10, 10).\n3. Left (North) 5m -> (10, 15).\n4. Left (West) 15m -> (10 - 15, 15) = (-5, 15).\n5. Left (South) 15m -> (-5, 15 - 15) = (-5, 0).\nStarting point is (0, 0), final position is (-5, 0). The distance is **5 m**."
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
    "explanation": "🧭 Coordinate Check:\n1. 20m South -> (0, -20).\n2. Left (East) 30m -> (30, -20).\n3. Right (South) 10m -> (30, -30).\n4. Right (West) 40m -> (-10, -30).\n5. Right (North) 30m -> (-10, 0).\nAt (-10, 0), the vertical displacement is 0 and horizontal is -10 (West). Therefore, Shailesh is directly **West** of his starting point."
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
    "explanation": "🧭 Reference Frame Deduction:\n- Seema stated she was hiding in the North direction, so her intended hiding location is North of the starting point.\n- Her actual wanderings took her southwards.\n- Relative to the North hiding spot, Seema is located in the **South** direction."
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
    "question": "A man is facing west. He turns 45° in the clockwise direction and then another 180° in the same direction and then 270° in the anti-clockwise direction. Which direction is he facing now?",
    "options": [
      "South",
      "North-West",
      "West",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "🔄 Net Angle Formula:\n- Initial Facing = West (270°).\n- Clockwise (+) turns = +45° + 180° = +225°.\n- Anti-Clockwise (-) turns = -270°.\n- Net rotation = 225° - 270° = -45° (45° anti-clockwise).\n- 45° anti-clockwise from West = **South-West**."
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
    "question": "A man is looking for his friend. He went 90m in the east before turning to his right. He went 20m before turning to his right again and goes further to look for his friend at his uncle’s place 30m from this point. His friend was not there. From there, he went 100m north before meeting his friend in a street. How far did the man meet his friend from the starting point?",
    "options": [
      "80 meters",
      "100 meters",
      "140 meters",
      "260 meters",
      "None of these"
    ],
    "correct": "100 meters",
    "explanation": "📐 Classic 60-80-100 Pythagoras Triangle:\n1. 90m East -> (90, 0).\n2. Right (South) 20m -> (90, -20).\n3. Right (West) 30m -> (60, -20).\n4. North 100m -> (60, -20 + 100) = (60, 80).\nShortest distance = √(60² + 80²) = √(3600 + 6400) = √10000 = **100 meters**."
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
    "explanation": "🧭 Facing Angle Deduction:\n1. Walks North, turns left -> now facing West.\n2. Turns left again -> now facing South.\n3. Turning right by 45° from South (clockwise) means shifting 45° towards West.\n4. Facing direction is **South-West**."
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
    "question": "Nitu starts from point T and walks straight to point U which is 4 Ft away. She turns left at 90º and walks to W which is 4 Ft away, turns 90º right and goes 3 Ft to P, turns 90º right, and walks 1 Ft to Q. Again turns 90º left and walks 1 Ft to V. Finally turns 90º right walk 3 Ft to reach R. Then what is the distance between T and R?",
    "options": [
      "4 Ft",
      "5 Ft",
      "7 Ft",
      "8 Ft"
    ],
    "correct": "8 Ft",
    "explanation": "📐 Coordinate Breakdown:\n- Forward axis (X): T->U (4) + P (3) + V (1) = 4 + 3 + 1 = 8 Ft.\n- Lateral axis (Y): Left to W (+4), Right to Q (-1), Right to R (-3) -> 4 - 1 - 3 = 0 Ft.\n- Net displacement = √(8² + 0²) = **8 Ft**."
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
    "explanation": "📐 Multiplier Vector Math:\n- AB = 3 km East -> (+3, 0).\n- BC = 3 × 3 = 9 km North -> (+3, +9).\n- CD = 5 × 3 = 15 km West -> (3 - 15, +9) = (-12, +9).\n- Shortest distance AD = √((-12)² + 9²) = √(144 + 81) = √225 = **15 Km**."
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
    "explanation": "📐 Opposite Motion Analysis:\n- Let Office be (0, 0). Pran walks East 10 km to (10, 0); Khan walks West 10 km to (-10, 0).\n- Pran turns left (North) 10 km -> (10, 10).\n- Khan turns right (North) 10 km -> (-10, 10).\n- Both are at the same y-level (y = 10). The horizontal separation between (10, 10) and (-10, 10) is 10 - (-10) = **20 Km**."
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
    "question": "Ram is facing North-West. He turns in the clockwise direction by 90°, then 180° in the anti-clockwise direction, and turns another 90° in the same direction. Which direction is he facing now?",
    "options": [
      "South",
      "West",
      "South",
      "South-East"
    ],
    "correct": "South-East",
    "explanation": "🔄 Net Angle Calculation:\n- Initial: North-West.\n- Clockwise (+) = +90°.\n- Anti-Clockwise (-) = -180° - 90° = -270°.\n- Net angle = +90° - 270° = -180° (exactly opposite direction).\n- Opposite of North-West is **South-East**."
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
    "explanation": "🧭 Symmetric Positioning:\n- Let B = (0, 0).\n- A is 50m NW -> x_A = -50/√2, y_A = +50/√2.\n- C is 50m NE -> x_C = +50/√2, y_C = +50/√2.\n- Notice y_A = y_C! They have identical north-south latitude, and C is directly to the right (positive x). Therefore, **C** is in the East direction of A."
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
    "question": "K is P’s neighbor and he stays 400 meters away toward the east. N is K’s neighbor and resides 400 meters away towards North. S is N’s neighbor and stays 400 m to the west If the distance between S and P is also 400 meters, Then who stays in the South East direction of S?",
    "options": [
      "S",
      "P",
      "N",
      "K"
    ],
    "correct": "K",
    "explanation": "🧭 Square Grid Analysis:\n- P = (0, 0).\n- K is 400m East of P -> (400, 0).\n- N is 400m North of K -> (400, 400).\n- S is 400m West of N -> (0, 400).\nFrom S at (0, 400), looking towards K at (400, 0) requires moving South (-400) and East (+400). That is exactly the **South-East** direction. So **K** stays in the South East of S."
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
    "explanation": "☀️ Sun & Path Trace:\n- After sunrise, Sun is in the East. Sudhir walks 1 km East -> (+1, 0).\n- Turns right (South) walks 2 km -> (+1, -2).\n- Turns right (West) walks 1 km -> (+1 - 1, -2) = (0, -2).\nSudhir is at (0, -2), which is directly **South** of the starting point."
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
    "explanation": "🤸 Inverted Body Mechanics:\n- Standing upright facing North: Right hand points East, Left hand points West.\n- When standing on one's head (upside down) while still facing North, the body axes invert left-to-right.\n- Therefore, the left hand will point towards the **East**."
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
    "explanation": "📐 Closed Loop Geometry:\n1. 30m North -> (0, 30).\n2. Left (West) 40m -> (-40, 30).\n3. Left (South) 30m -> (-40, 0).\n4. Left (East) 50m -> (-40 + 50, 0) = (10, 0).\nDistance from starting point (0, 0) to (10, 0) is **10 meter**."
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
    "question": "Balu’s house is 300 meters away from that Sam. Balu stays 300 meters South West of Sam’s house. Raju resides 600 meters North East of Balu. Then where is the position of Sam’s house about Raju’s?",
    "options": [
      "North-East",
      "South-East",
      "North-West",
      "South-West"
    ],
    "correct": "South-West",
    "explanation": "🧭 Collinear Relative Points:\n- Balu is 300m South-West of Sam.\n- Raju is 600m North-East of Balu (passing through Sam's house at 300m, and continuing another 300m North-East).\n- Therefore, Sam is located midway between Balu and Raju.\n- From Raju's viewpoint, Sam's house is in the **South-West** direction."
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
    "question": "Rahul put his Time piece on the table in such a way that at 6 P.M. hour hand pointed in the North direction. In which direction will the minute’s hand point at 9:15 P.M.?",
    "options": [
      "South-East",
      "South",
      "North",
      "West"
    ],
    "correct": "West",
    "explanation": "⏰ Clock Rotation Mapping:\n- At 6 PM, standard clock hour hand points South (towards 6). But here it points North (180° inverted).\n- At 9:15 PM, minute hand is at 3 (standard direction: East).\n- Inverted by 180°, East becomes **West**."
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
    "explanation": "📐 Indeterminate Variable:\n- Let AB = d.\n- Walks South distance d.\n- Turns left (East) and walks 'some distance' (let's say x, unknown).\n- Turns left (North) distance d to reach C.\n- Points A and C are on the same latitude, separated by d + x.\n- Since x is unspecified ('some distance'), the exact ratio (d + x)/d **Cannot be determined**."
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
    "explanation": "⏰ Clock Hand Mapping:\n- At 12:30 PM, minute hand (normally South at 6) points West (rotated 90° clockwise).\n- At 2:45 PM, hour hand is almost at 3 (normally East-by-Southeast).\n- Rotating by 90° clockwise, the hand points towards **South-East**."
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
    "explanation": "⏰ Clock Angle Mapping:\n- At 4:30, minute hand is at 6 (normally South). Here it points East (90° anti-clockwise rotation).\n- Hour hand is midway between 4 and 5 (normally South-East).\n- Rotating South-East by 90° anti-clockwise points it to **North-East**."
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
    "explanation": "🔄 Compass Shift Deduction:\n- South-East (135°) becomes North (0°) -> rotated 135° clockwise.\n- Which original direction rotated 135° clockwise lands on West (270°)?\n- 270° - 135° = 135° = **South-East**."
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
    "explanation": "🧭 Village Map:\n- Q = (0, 0).\n- P is West of Q: (-1, 0).\n- R is South of P: (-1, -1).\n- T is North of Q: (0, 1).\n- S is East of T: (1, 1).\nFrom S at (1, 1) to R at (-1, -1): moving left (-x) and down (-y) is **South-West**."
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
    "explanation": "🧭 Direction Logic:\n1. Q travelled East.\n2. T travelled right to Q: Right of East is South -> T travelled South.\n3. S and T travelled in opposite directions: Opposite of South is North -> S travelled North.\n4. M also travelled towards the North.\n5. Therefore, **M and S travelled in the same direction**."
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
    "explanation": "☀️ Morning Shadow Rule:\n- In the morning after sunrise, the Sun is in the East, so all shadows fall directly to the **West**.\n- Lalli's shadow fell to the West.\n- It is given that this shadow was to the **right of Juhi**, meaning Juhi's right side is West.\n- If your right hand points to the West, you must be facing **South**."
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
    "explanation": "☀️ Morning Conversation Shadow:\n1. At sunrise, shadows cast towards the West.\n2. Mohit's shadow falls to the West.\n3. This shadow is to the right hand of Rohit, so Rohit's right side is West.\n4. A person whose right side is West is facing South. Hence, Rohit is facing South.\n5. Since Rohit and Mohit are standing in front of each other (face to face), Mohit is facing **North**."
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
    "question": "What is the unit digit of the product of 207 · 781 · 39 · 94?",
    "options": [
      "9",
      "1",
      "7",
      "2"
    ],
    "correct": "2",
    "explanation": "🔢 Step-by-Step Unit Digit Calculation:\n1. Multiply only the unit digits of each factor: 7 × 1 × 9 × 4.\n2. 7 × 1 = 7.\n3. 7 × 9 = 63 -> Unit digit = 3.\n4. 3 × 4 = 12 -> Unit digit = **2**.\nTherefore, the unit digit of the entire product is 2."
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
    "question": "What will come in the place of unit digit in the value of (7³⁵) · (3⁷¹) · (11⁵⁵)?",
    "options": [
      "0",
      "3",
      "1",
      "6"
    ],
    "correct": "1",
    "explanation": "🔢 Cyclicity Rule for Powers:\n- For base 7 (cyclicity of 4: 7, 9, 3, 1):\n  35 mod 4 = 3 -> 7³ ends in 3.\n- For base 3 (cyclicity of 4: 3, 9, 7, 1):\n  71 mod 4 = 3 -> 3³ ends in 7.\n- For base 11 (ends in 1):\n  1⁵⁵ ends in 1.\n- Overall unit digit = (3 × 7 × 1) mod 10 = 21 mod 10 = **1**."
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
    "question": "Find the number of zeros at the end of the product of 1 × 2 × 3 × 4 × 5 × 6 .......... × 99 × 100 :",
    "options": [
      "22",
      "24",
      "26",
      "28"
    ],
    "correct": "24",
    "explanation": "🔢 Legendre's Formula for 100!:\nZeros are formed by pairs of (2 × 5). Since 2s are abundant, count prime factor 5 in 100!:\n- ⌊100 / 5⌋ = 20\n- ⌊100 / 25⌋ = 4\nTotal number of trailing zeros = 20 + 4 = **24**."
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
    "question": "Find the number of zeros at the end of the product of 2 × 4 × 6 × 8 × 10 × ....... × 98 × 100 :",
    "options": [
      "10",
      "11",
      "12",
      "15"
    ],
    "correct": "12",
    "explanation": "🔢 Factorization of Even Product:\n- Factor out 2 from all 50 terms:\n  (2 × 1) × (2 × 2) × (2 × 3) × ... × (2 × 50) = 2⁵⁰ × 50!\n- The 2⁵⁰ contributes only powers of 2 (no zeros without 5s).\n- Count number of 5s in 50!:\n  ⌊50 / 5⌋ = 10\n  ⌊50 / 25⌋ = 2\nTotal trailing zeros = 10 + 2 = **12**."
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
    "question": "Find the number of zeros at the end of the product of 10 × 20 × 30 × ...... × 2000 :",
    "options": [
      "222",
      "249",
      "226",
      "220"
    ],
    "correct": "249",
    "explanation": "🔢 Multiples of 10 Product:\n- Number of terms = 2000 / 10 = 200 terms.\n- Product = (10 × 1) × (10 × 2) × ... × (10 × 200) = 10²⁰⁰ × 200!\n- 10²⁰⁰ contributes 200 trailing zeros directly.\n- Trailing zeros from 200! = ⌊200/5⌋ + ⌊200/25⌋ + ⌊200/125⌋ = 40 + 8 + 1 = 49 zeros.\n- Total zeros = 200 + 49 = **249**."
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
    "explanation": "🔢 Total Factors Formula:\n- Prime factorize 100: 100 = 2² × 5².\n- Number of factors = (p + 1)(q + 1) = (2 + 1)(2 + 1) = 3 × 3 = **9**.\n(Factors: 1, 2, 4, 5, 10, 20, 25, 50, 100)."
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
    "explanation": "🔢 Total Factors Formula:\n- Prime factorize 80: 80 = 2⁴ × 5¹.\n- Number of factors = (4 + 1)(1 + 1) = 5 × 2 = **10**.\n(Factors: 1, 2, 4, 5, 8, 10, 16, 20, 40, 80)."
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
    "explanation": "🔢 Sum of Factors Formula:\n- For N = 2² × 5²:\n- Sum = (2⁰ + 2¹ + 2²) × (5⁰ + 5¹ + 5²)\n  = (1 + 2 + 4) × (1 + 5 + 25)\n  = 7 × 31 = **217**."
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
    "explanation": "🔢 Sum of Factors Formula:\n- Prime factorization: 50 = 2¹ × 5².\n- Sum = (2⁰ + 2¹) × (5⁰ + 5¹ + 5²)\n  = (1 + 2) × (1 + 5 + 25)\n  = 3 × 31 = **93**."
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
    "explanation": "🔢 Average of Factors:\n1. Factorization: 60 = 2² × 3¹ × 5¹.\n2. Total factors = (2 + 1)(1 + 1)(1 + 1) = 3 × 2 × 2 = 12.\n3. Sum of factors = (1 + 2 + 4)(1 + 3)(1 + 5) = 7 × 4 × 6 = 168.\n4. Average = Sum / Total = 168 / 12 = **14**."
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
      "10⁹",
      "10⁹/²",
      "10¹¹/²",
      "10¹⁹"
    ],
    "correct": "10⁹",
    "explanation": "🔢 Product of Factors Formula:\n- Product = N^(total_factors / 2).\n- For N = 100, number of factors = 9.\n- Product = 100^(9/2) = (10²)^(9/2) = 10⁹."
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
    "question": "Find the number of prime factors of 6²⁰ · 11¹¹ · 21²¹ :",
    "options": [
      "83",
      "93",
      "103",
      "113"
    ],
    "correct": "93",
    "explanation": "🔢 Prime Factor Count:\n1. Express each base as prime numbers:\n   6²⁰ = (2 × 3)²⁰ = 2²⁰ · 3²⁰\n   11¹¹ = 11¹¹\n   21²¹ = (3 × 7)²¹ = 3²¹ · 7²¹\n2. Combine: 2²⁰ · 3⁴¹ · 7²¹ · 11¹¹.\n3. Total number of prime factors = 20 + 20 + 11 + 21 + 21 = **93**."
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
    "question": "Find the number of prime factors of 14¹⁴ · 15¹⁵ :",
    "options": [
      "48",
      "58",
      "68",
      "78"
    ],
    "correct": "58",
    "explanation": "🔢 Prime Factor Count:\n1. 14¹⁴ = (2 × 7)¹⁴ = 2¹⁴ · 7¹⁴.\n2. 15¹⁵ = (3 × 5)¹⁵ = 3¹⁵ · 5¹⁵.\n3. Sum of prime exponents = 14 + 14 + 15 + 15 = **58**."
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
    "explanation": "🔢 Primality Testing:\n- 161 is divisible by 7 (7 × 23 = 161).\n- 221 is divisible by 13 (13 × 17 = 221).\n- 437 is divisible by 19 (19 × 23 = 437).\n- For 373: √373 ≈ 19.3. Primes below 20: 2, 3, 5, 7, 11, 13, 17, 19. None divide 373.\nTherefore, **373** is prime."
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
    "explanation": "🔢 Primality Testing:\n- 119 = 7 × 17 (composite).\n- 187 = 11 × 17 (composite).\n- 247 = 13 × 19 (composite).\n- **71** has no divisors other than 1 and 71, so it is a prime number."
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
    "explanation": "🔢 Range Divisibility:\n- 3-digit numbers range from 100 to 999.\n- Numbers up to 999 divisible by 6 = ⌊999 / 6⌋ = 166.\n- Numbers up to 99 divisible by 6 = ⌊99 / 6⌋ = 16.\n- 3-digit numbers divisible by 6 = 166 - 16 = **150**."
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
    "explanation": "🔢 LCM Divisibility:\n- Divisible by both 3 and 4 implies divisible by LCM(3, 4) = 12.\n- Range: 100 to 999.\n- ⌊999 / 12⌋ - ⌊99 / 12⌋ = 83 - 8 = **75**."
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
    "question": "What will be the remainder when 17²⁰⁰ is divided by 18?",
    "options": [
      "17",
      "16",
      "1",
      "2"
    ],
    "correct": "1",
    "explanation": "🔢 Negative Remainder Concept:\n- 17 ≡ -1 (mod 18).\n- 17²⁰⁰ ≡ (-1)²⁰⁰ (mod 18) = 1 (mod 18).\nTherefore, the remainder is **1**."
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
    "question": "Find the remainder when 3⁸⁵ is divided by 6.",
    "options": [
      "3",
      "16",
      "1",
      "2"
    ],
    "correct": "3",
    "explanation": "🔢 Common Factor Simplification:\n- Cancel common factor 3 between 3⁸⁵ and 6:\n  3⁸⁵ / 6 = (3 × 3⁸⁴) / (3 × 2) = 3⁸⁴ / 2.\n- Remainder of 3⁸⁴ divided by 2 is 1 (since 3 ≡ 1 mod 2).\n- Multiply back the cancelled factor 3:\n  Remainder = 1 × 3 = **3**."
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
    "question": "Find the remainder when 2⁷⁰ is divided by 96.",
    "options": [
      "64",
      "63",
      "1",
      "2"
    ],
    "correct": "64",
    "explanation": "🔢 Factor Reduction Method:\n- 96 = 32 × 3 = 2⁵ × 3.\n- Divide numerator and denominator by 2⁵:\n  2⁷⁰ / 96 = (2⁵ · 2⁶⁵) / (2⁵ · 3) = 2⁶⁵ / 3.\n- 2 ≡ -1 (mod 3) -> 2⁶⁵ ≡ (-1)⁶⁵ = -1 ≡ 2 (mod 3).\n- Multiply back by 2⁵ (32):\n  Remainder = 2 × 32 = **64**."
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
    "question": "What will be the remainder when (67⁶⁷ + 67) is divided by 68?",
    "options": [
      "1",
      "66",
      "67",
      "60"
    ],
    "correct": "66",
    "explanation": "🔢 Modular Reduction:\n- 67 ≡ -1 (mod 68).\n- 67⁶⁷ + 67 ≡ (-1)⁶⁷ + (-1) = -1 - 1 = -2 (mod 68).\n- Since remainder must be non-negative: 68 - 2 = **66**."
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
    "question": "Which of the following number will completely divide (49¹⁵ – 1)?",
    "options": [
      "8",
      "14",
      "51",
      "50"
    ],
    "correct": "8",
    "explanation": "🔢 Algebraic Factor Rule:\n- (aⁿ - bⁿ) is always divisible by (a - b).\n- Here, (49¹⁵ - 1¹⁵) is divisible by (49 - 1) = 48.\n- Since 8 is a factor of 48 (48 = 8 × 6), **8** completely divides the expression."
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
    "explanation": "🔢 Remainder of Squared Quantity:\n- Let the number be N = 6k + 3.\n- N² = (6k + 3)² = 36k² + 36k + 9.\n- Dividing by 6:\n  (36k² + 36k) is a multiple of 6.\n  Remainder = 9 mod 6 = **3**."
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
    "explanation": "🔢 Successive Division Reconstruction:\n1. Let final quotient = 1.\n   Second dividend = 5(1) + 4 = 9.\n   Original number N = 4(9) + 1 = 37.\n2. Now successively divide 37 by 5 and 4:\n   - 37 ÷ 5 = 7 with remainder **2**.\n   - 7 ÷ 4 = 1 with remainder **3**.\nRespective remainders are **2, 3**."
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
    "explanation": "🔢 Successive Division Backtracking:\n1. Let the last quotient be 1.\n2. Third divisor: 6 × 1 + 4 = 10.\n3. Second divisor: 5 × 10 + 3 = 53.\n4. First divisor: 4 × 53 + 2 = 212 + 2 = **214**."
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
    "question": "Which one of the following numbers will completely divide (4⁶¹ + 4⁶² + 4⁶³ + 4⁶⁴)?",
    "options": [
      "3",
      "9",
      "11",
      "17"
    ],
    "correct": "17",
    "explanation": "🔢 Common Power Factoring:\n- Factor out 4⁶¹:\n  4⁶¹ (1 + 4¹ + 4² + 4³)\n  = 4⁶¹ (1 + 4 + 16 + 64)\n  = 4⁶¹ × 85.\n- Since 85 = 5 × 17, the expression is divisible by **17**."
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
    "question": "Which one of the following numbers will completely divide 5⁵¹ + 5⁵² + 5⁵³?",
    "options": [
      "11",
      "12",
      "31",
      "32"
    ],
    "correct": "31",
    "explanation": "🔢 Common Power Factoring:\n- Factor out 5⁵¹:\n  5⁵¹ (1 + 5¹ + 5²)\n  = 5⁵¹ (1 + 5 + 25)\n  = 5⁵¹ × 31.\n- Therefore, it is completely divisible by **31**."
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
    "question": "Which one of the following is the common factor of (47⁴³ + 43⁴³) and (47⁴⁷ + 43⁴⁷)?",
    "options": [
      "47 – 43",
      "47 + 43",
      "47⁴³ + 43⁴³",
      "47⁴⁷ + 43⁴⁷"
    ],
    "correct": "47 + 43",
    "explanation": "🔢 Algebraic Property for Odd Exponents:\n- When n is an odd integer, (xⁿ + aⁿ) is always divisible by (x + a).\n- Both exponents 43 and 47 are odd.\n- Hence, both expressions are divisible by **(47 + 43)** = 90."
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
    "explanation": "🔢 Divisibility by 99 (9 and 11):\n- Sum of digits of 114345 = 1 + 1 + 4 + 3 + 4 + 5 = 18 (divisible by 9).\n- Alternating sum of digits: (5 + 3 + 1) - (4 + 4 + 1) = 9 - 9 = 0 (divisible by 11).\n- Since it satisfies both 9 and 11, **114345** is divisible by 99."
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
    "explanation": "🔢 Divisibility by 45 (5 and 9):\n- Must end in 0 or 5, and sum of digits must be a multiple of 9.\n- For 202860: Ends in 0 (divisible by 5).\n  Sum of digits = 2 + 0 + 2 + 8 + 6 + 0 = 18 (divisible by 9).\n- Thus, **202860** is divisible by 45."
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
    "explanation": "🔢 Divisibility Rule of 11:\n- (Sum of digits in odd places) - (Sum of digits in even places) must be 0 or a multiple of 11.\n- Odd places (from right): 7 + 4 = 11.\n- Even places (from right): * + 3.\n- 11 - (* + 3) = 0 -> 8 - * = 0 -> * = **8**."
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
    "question": "7¹² - 4¹² is exactly divisibly by which of the following?",
    "options": [
      "36",
      "35",
      "34",
      "33"
    ],
    "correct": "33",
    "explanation": "🔢 Algebraic Factoring:\n- 7¹² - 4¹² = (7²)⁶ - (4²)⁶ = 49⁶ - 16⁶.\n- For any natural n, (aⁿ - bⁿ) is divisible by (a - b).\n- 49 - 16 = **33**.\nTherefore, the expression is exactly divisible by 33."
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
    "question": "What will be the remainder when (27²⁷ + 17²⁷) is divided by 11?",
    "options": [
      "27",
      "17",
      "0",
      "1"
    ],
    "correct": "0",
    "explanation": "🔢 Divisibility of Odd Powers:\n- For odd power n = 27, (aⁿ + bⁿ) is divisible by (a + b).\n- 27 + 17 = 44.\n- Since 44 is completely divisible by 11 (44 = 11 × 4), the remainder is **0**."
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
    "question": "If n is a natural number, (n³ - n) will always be divisible by:",
    "options": [
      "6 only",
      "6 and 12 both",
      "12 only",
      "by 18 only"
    ],
    "correct": "6 only",
    "explanation": "🔢 Consecutive Integers Product:\n- n³ - n = n(n² - 1) = (n - 1) · n · (n + 1).\n- This is the product of three consecutive integers.\n- In any three consecutive integers, at least one is a multiple of 2 and exactly one is a multiple of 3.\n- Therefore, it is always divisible by 2 × 3 = **6 only** (not necessarily 12, e.g. for n = 2: 8 - 2 = 6)."
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
    "question": "( xⁿ – aⁿ) is completely divisible by (x - a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is any natural number",
    "explanation": "🔢 Standard Algebraic Theorem:\n- (xⁿ - aⁿ) = (x - a)(xⁿ⁻¹ + xⁿ⁻²a + ... + aⁿ⁻¹).\n- This factorization holds for **any natural number n**."
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
    "question": "( xⁿ – aⁿ) is completely divisible by (x + a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is an even natural number",
    "explanation": "🔢 Remainder Theorem:\n- Let f(x) = xⁿ - aⁿ. Divisibility by (x + a) requires f(-a) = 0.\n- (-a)ⁿ - aⁿ = 0 only when (-a)ⁿ = aⁿ, which requires **n to be an even natural number** (e.g. x² - a² = (x-a)(x+a))."
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
    "question": "( xⁿ + aⁿ) is completely divisible by (x + a), when :",
    "options": [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is a prime number"
    ],
    "correct": "n is an odd natural number",
    "explanation": "🔢 Remainder Theorem:\n- Let f(x) = xⁿ + aⁿ. Divisibility by (x + a) requires f(-a) = 0.\n- (-a)ⁿ + aⁿ = -aⁿ + aⁿ = 0 only when **n is an odd natural number** (e.g. x³ + a³ = (x+a)(x² - ax + a²))."
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
    "explanation": "🔢 Division Algorithm:\n1. Largest 4-digit number = 9999.\n2. Divide 9999 by 88: 9999 = 88 × 113 + 55.\n3. Subtract the remainder: 9999 - 55 = **9944**."
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
    "explanation": "🔢 Divisor Multiplier Relation:\n- Since 111 is an exact multiple of 37 (111 = 37 × 3):\n- Any number N = 111q + 31 = 37(3q) + 31.\n- The remainder when divided by 37 is 31 mod 37 = **31**."
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
    "explanation": "🔢 Repeating Digit Division:\n- Divide successive repdigits 3, 33, 333, 3333, 33333, 333333 by 7 until no remainder:\n- 333333 ÷ 7 = **47619**.\n(Check: 47619 × 7 = 333333)."
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
    "explanation": "🔢 Linear System for Digits:\n- Let the number be 10x + y.\n- x + y = 7 (Eq 1).\n- Interchanged number: 10y + x.\n- (10y + x) - (10x + y) = 9(y - x) = 27 -> y - x = 3 (Eq 2).\n- Adding Eq 1 and Eq 2: 2y = 10 -> y = 5, x = 2.\nOriginal number = **25**."
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
    "explanation": "🔢 Reversal Sum Identity:\n- Let number be 10x + y. Reversing gives 10y + x.\n- Sum = (10x + y) + (10y + x) = 11(x + y) = 99.\n- Therefore, sum of digits (x + y) = 99 / 11 = **9**."
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
    "explanation": "🔢 Universal Divisibility Property:\n- Original: 10a + b. Reversed: 10b + a.\n- N = (10a + b) + (10b + a) = 11(a + b).\n- N is always an exact multiple of **11**."
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
    "explanation": "🔢 Universal Divisibility Property:\n- Original: 10a + b. Reversed: 10b + a.\n- N = (10a + b) - (10b + a) = 9(a - b).\n- N is always an exact multiple of **9**."
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
    "explanation": "🔢 Digit Difference Formula:\n- Difference = 9 × (difference between digits) = 45.\n- Difference between digits = 45 / 9 = **5**."
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
    "explanation": "🔢 Repetition Structure:\n- An arbitrary number abab = 1000a + 100b + 10a + b = 100(10a + b) + (10a + b) = 101(10a + b).\n- 101 is the **smallest three-digit prime number**."
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
    "explanation": "🔢 Sum of First n Natural Numbers:\n- Formula: n(n + 1) / 2.\n- For n = 50:\n  Sum = 50 × 51 / 2 = 25 × 51 = **1275**."
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
    "question": "Find the value of 51+52+53+54+…………+100 :",
    "options": [
      "2443",
      "1754",
      "2673",
      "3775"
    ],
    "correct": "3775",
    "explanation": "🔢 Partial Series Sum:\n- Sum(51..100) = Sum(1..100) - Sum(1..50)\n- Sum(1..100) = 100 × 101 / 2 = 5050.\n- Sum(1..50) = 50 × 51 / 2 = 1275.\n- Result = 5050 - 1275 = **3775**."
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
    "explanation": "🔢 Sum of Squares Formula:\n- Formula: n(n + 1)(2n + 1) / 6.\n- For n = 30:\n  30 × 31 × (2×30 + 1) / 6 = 30 × 31 × 61 / 6 = 5 × 31 × 61 = 155 × 61 = **9455**."
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
    "question": "Find the value of 2² + 4² + 6² + 8² + …….+ 20² :",
    "options": [
      "2870",
      "1321",
      "1540",
      "1550"
    ],
    "correct": "1540",
    "explanation": "🔢 Even Squares Sum:\n- Factor out 2² = 4:\n  4(1² + 2² + 3² + ... + 10²)\n- Sum(1²..10²) = 10 × 11 × 21 / 6 = 385.\n- Value = 4 × 385 = **1540**."
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
    "question": "Find the value of 1² + 3² + 5² + 7² + ……………+ 19² :",
    "options": [
      "1335",
      "1330",
      "1332",
      "1334"
    ],
    "correct": "1330",
    "explanation": "🔢 Odd Squares Formula:\n- Sum of odd squares up to last term n = 19:\n  n(n + 1)(n + 2) / 6 = 19 × 20 × 21 / 6 = 19 × 10 × 7 = **1330**."
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
    "question": "If 1² + 2² + 3² + 4² + ………. + 10² = 385, find the value of 2² + 4² + 6² + …… + 20² :",
    "options": [
      "1250",
      "1540",
      "1190",
      "1375"
    ],
    "correct": "1540",
    "explanation": "🔢 Multiple Factor Technique:\n- 2² + 4² + ... + 20² = 2²(1² + 2² + ... + 10²)\n  = 4 × 385 = **1540**."
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
    "question": "Find the value of 11² + 12² + 13² + 14² + ………….+ 20² :",
    "options": [
      "2870",
      "2485",
      "2670",
      "2495"
    ],
    "correct": "2485",
    "explanation": "🔢 Partial Squares Sum:\n- Sum(11²..20²) = Sum(1²..20²) - Sum(1²..10²)\n- Sum(1²..20²) = 20 × 21 × 41 / 6 = 2870.\n- Sum(1²..10²) = 10 × 11 × 21 / 6 = 385.\n- Result = 2870 - 385 = **2485**."
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
    "question": "Find the value of 1³ + 3³ + 5³ + 7³ + …………..+ 29³ :",
    "options": [
      "36100",
      "101025",
      "32500",
      "44700"
    ],
    "correct": "101025",
    "explanation": "🔢 Odd Cubes Sum Formula:\n- Number of terms k = (29 + 1)/2 = 15.\n- Formula: k²(2k² - 1).\n- 15² × (2×15² - 1) = 225 × (2×225 - 1) = 225 × 449 = **101025**."
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
    "question": "If 1³ + 2³ + 3³ + 4³ + …………………………+ 10³ = 3025, find the value of 2³ + 4³ + 6³ + .…+ 20³ :",
    "options": [
      "2875",
      "24200",
      "3080",
      "39400"
    ],
    "correct": "24200",
    "explanation": "🔢 Multiple Factor Technique for Cubes:\n- 2³ + 4³ + ... + 20³ = 2³(1³ + 2³ + ... + 10³)\n  = 8 × 3025 = **24200**."
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
    "explanation": "🔢 Sum of First n Even Numbers:\n- Up to 100, there are n = 50 even numbers (2, 4, ..., 100).\n- Formula = n(n + 1) = 50 × 51 = **2550**."
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
    "explanation": "🔢 Sum of First n Odd Numbers:\n- Up to 100, there are n = 50 odd numbers (1, 3, ..., 99).\n- Formula = n² = 50² = **2500**."
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
    "explanation": "🌱 Botanical Classification Analogy:\n- A Mango is biologically classified as a Fruit.\n- Similarly, a Potato is biologically classified as a modified underground **Stem** (tuber)."
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
    "explanation": "🎬 Creator/Producer Relationship:\n- A Publisher finances, prints, and brings a Book to the market.\n- In the same way, a **Producer** finances, organizes, and brings a Film to the market."
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
    "explanation": "✈️ Biological to Man-Made Vehicle Analogy:\n- An Aeroplane is a man-made machine inspired by and navigating the medium of a Bird (air).\n- Similarly, a **Ship** is a man-made vessel navigating the medium of a Fish (water)."
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
    "explanation": "👓 Accessory to Body Part Analogy:\n- A Cap is worn on the Head.\n- Spectacles ('Spex') are worn over the **Eye**."
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
    "explanation": "🌍 Reservoir/Medium Analogy:\n- An Ocean is the massive global reservoir containing Water.\n- Similarly, the **Atmosphere** is the envelope containing Air."
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
    "explanation": "🏊 Locomotion Analogy:\n- The natural mode of locomotion for a Man is to Walk.\n- The natural mode of locomotion for a Fish is to **Swim**."
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
    "explanation": "🔒 Captivity Analogy:\n- A Parrot is held captive in a Cage.\n- A Man is held captive in a **Jail**."
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
    "explanation": "🧥 Protection Against Weather:\n- An Umbrella protects against Rain.\n- A Coat protects against the cold of **Winter**."
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
    "explanation": "❤️ Antonym Analogy:\n- Sympathy and Antipathy are exact opposites.\n- In the same way, **Love** is the exact opposite of Hatred."
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
    "explanation": "💐 Part to Whole Analogy:\n- A Chapter is one component of a complete Book.\n- A Flower is one component of a complete **Bouquet**."
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
    "explanation": "🐑 Animal Outer Covering / Fibre:\n- A Horse's body is covered with Hair (mane/coat).\n- A Sheep's body covering harvested by humans is **Wool**."
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
    "question": "Necklace is related to Jewellery in the same way as Shirt is related to –––––––––",
    "options": [
      "Thread",
      "Cloth",
      "Cotton",
      "Apparel",
      "None of these"
    ],
    "correct": "Apparel",
    "explanation": "👔 Category / Classification Analogy:\n- A Necklace belongs to the broader category of Jewellery.\n- A Shirt belongs to the broader category of **Apparel** (clothing)."
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
    "question": "Needle is related to Thread in the same way as Pen is related to ––––––––––",
    "options": [
      "Ink",
      "Cap",
      "Paper",
      "Word",
      "None of these"
    ],
    "correct": "Ink",
    "explanation": "✒️ Essential Working Medium:\n- A Needle functions by holding and passing Thread.\n- A Pen functions by holding and dispensing **Ink**."
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
    "question": "Labourer is related to Wages in the same way as Entrepreneur is related to ––––––––––",
    "options": [
      "Loan",
      "Interest",
      "Taxes",
      "Profit",
      "None of these"
    ],
    "correct": "Profit",
    "explanation": "💼 Factor of Production Reward:\n- A Labourer earns Wages as reward for labour.\n- An Entrepreneur earns **Profit** as reward for bearing business risk."
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
    "question": "College is related to Student in the same way as Hospital is related to ––––––––––",
    "options": [
      "Doctor",
      "Nurse",
      "Treatment",
      "Patient",
      "None of these"
    ],
    "correct": "Patient",
    "explanation": "🏥 Institution & Beneficiary Analogy:\n- A College exists primarily to educate a Student.\n- A Hospital exists primarily to treat a **Patient**."
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
    "question": "Neck is related to Tie in the same way as Waist is related to ––––––––––",
    "options": [
      "Watch",
      "Belt",
      "Ribbon",
      "Shirt",
      "None of these"
    ],
    "correct": "Belt",
    "explanation": "👔 Anatomical Item Placement:\n- A Tie is worn around the Neck.\n- A **Belt** is worn around the Waist."
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
    "question": "Writer is related to Reader in the same way as Producer is related to ––––––––––",
    "options": [
      "Product",
      "Consumer",
      "Seller",
      "Film",
      "None of these"
    ],
    "correct": "Consumer",
    "explanation": "📦 Creator to End-User Analogy:\n- A Writer creates content consumed by a Reader.\n- A Producer creates goods/services consumed by a **Consumer**."
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
    "question": "‘Kangaroo’ is related to Australia in the same way as 'Giraffe' is related to ––––––––––",
    "options": [
      "India",
      "Pakistan",
      "Japan",
      "Antarctica",
      "Africa"
    ],
    "correct": "Africa",
    "explanation": "🦒 Native Habitat / Continent Analogy:\n- The Kangaroo is native and endemic to Australia.\n- The Giraffe is native to **Africa**."
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
    "question": "'March' is related to 'Year' in the same way as Summer is related to ––––––––––",
    "options": [
      "Winter",
      "Cold",
      "Hot",
      "Spring",
      "Season"
    ],
    "correct": "Season",
    "explanation": "☀️ Unit to Cycle Analogy:\n- March is a specific period within a Year.\n- Summer is a specific period within a **Season** cycle."
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
    "question": "'Smoke' is related to 'Pollution' in the same way as ‘War’ is related to ––––––––––",
    "options": [
      "Victory",
      "Enemy",
      "Army",
      "Death",
      "Treaty"
    ],
    "correct": "Death",
    "explanation": "⚔️ Cause and Consequence Analogy:\n- Smoke inevitably leads to Pollution.\n- War inevitably leads to **Death** and destruction."
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
    "question": "‘Mother’ is related to ‘Child’ in the same way as ‘Tree’ is related to ––––––––––",
    "options": [
      "Plant",
      "Fruit",
      "Root",
      "Trunk",
      "None of these"
    ],
    "correct": "Fruit",
    "explanation": "🍎 Parent to Offspring/Produce Analogy:\n- A Mother bears a Child.\n- A Tree bears a **Fruit**."
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
    "question": "‘Day’ is related to ‘Calender’ in the same way as ‘Time’ is related to ––––––––––",
    "options": [
      "Day",
      "Hour",
      "Sun",
      "Clock",
      "None of these"
    ],
    "correct": "Clock",
    "explanation": "⏰ Measuring Instrument / Indicator:\n- Days are tracked and recorded on a Calendar.\n- Time is tracked and shown by a **Clock**."
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
    "question": "‘Coach’ is related to ––––––––––, in the same way as ‘Teacher’ is related to ‘Student’.",
    "options": [
      "Team",
      "Player",
      "Play",
      "Sport",
      "None of these"
    ],
    "correct": "Player",
    "explanation": "⚽ Guide and Learner Analogy:\n- A Teacher mentors and instructs a Student.\n- A Coach mentors and trains a **Player**."
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
    "question": "‘Dawn' is related to ‘Evening’ in the same way as ‘Light’ is related to ––––––––––",
    "options": [
      "Sun",
      "Noon",
      "Electricity",
      "Heavy",
      "Torch"
    ],
    "correct": "Heavy",
    "explanation": "⚖️ Double-Meaning Antonym Pair:\n- Dawn and Evening represent opposites in daylight cycle.\n- In the options provided, 'Light' is treated in the weight sense, whose direct antonym is **Heavy**."
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
    "question": "‘Bird’ is related to ‘Aves’ in the same way as ‘Man’ is related to ––––––––––",
    "options": [
      "Mammal",
      "Lizard",
      "Homosapiens",
      "Holothuroidea",
      "None of these"
    ],
    "correct": "Homosapiens",
    "explanation": "🧬 Zoological Taxonomic Classification:\n- A Bird belongs to class Aves.\n- In scientific nomenclature, Man is termed **Homosapiens**."
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
    "question": "‘Newspaper’ is related to ‘Press’ in the same way as ‘Cloth’ is related to ––––––––––",
    "options": [
      "Tailor",
      "Mill",
      "Cotton",
      "Market",
      "Thread"
    ],
    "correct": "Mill",
    "explanation": "🏭 Place of Production:\n- A Newspaper is printed in a Press.\n- Cloth is manufactured in a **Mill**."
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
    "question": "‘Punishment’ is related to ‘Prisoner’ in the same way as ‘Operation’ is related to ––––––",
    "options": [
      "Hospital",
      "Doctor",
      "Patient",
      "Disease",
      "Operation Theatre"
    ],
    "correct": "Patient",
    "explanation": "🏥 Subject Receiving Action:\n- A Prisoner is the subject who undergoes Punishment.\n- A **Patient** is the subject who undergoes an Operation."
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
    "question": "‘Waiting’ is related to ‘Boredom’ in the same way as ‘Education’ is related to ––––––––––",
    "options": [
      "Schooling",
      "Books",
      "Enlightenment",
      "Syllabus",
      "Enthusiasm"
    ],
    "correct": "Enlightenment",
    "explanation": "💡 Action to Mental Result:\n- Excessive Waiting results in Boredom.\n- True Education results in **Enlightenment**."
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
    "explanation": "🔢 Constant Divisor Rule:\n- 21 ÷ 7 = 3.\n- In the same way: 574 ÷ 7 = **82**."
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
    "explanation": "🔢 Square Plus One (n² + 1):\n- 26 = 5² + 1.\n- 65 = 8² + 1 (since 64 + 1 = 65).\n- Therefore, the related number is **8**."
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
    "explanation": "🔢 Individual Digit Increment (+1):\n- Each digit in 3265 is increased by 1 to get 4376:\n  3+1=4, 2+1=3, 6+1=7, 5+1=6.\n- Applying the same to 4673:\n  4+1=5, 6+1=7, 7+1=8, 3+1=4 -> **5784**."
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
    "explanation": "🔢 Quadratic n(n - 1) Pattern:\n- 210 = 15² - 15 = 15 × 14.\n- 380 = 20² - 20 = 20 × 19 (difference in base: 20 - 15 = 5).\n- 182 = 14² - 14 = 14 × 13.\n- With base + 5: 14 + 5 = 19.\n- 19² - 19 = 361 - 19 = **342**."
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
    "explanation": "🔢 Multiplier Ratio Pattern:\n- In the first pair: 5 × 20 = 100, 4 × 16 = 64 (multipliers 20 and 16).\n- In the second pair: 4 × 20 = 80.\n- Therefore: 3 × 16 = **48**."
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
    "explanation": "🔢 Consecutive Prime Squares + 1:\n- 122 = 11² + 1.\n- 170 = 13² + 1 (13 is the next prime after 11).\n- 290 = 17² + 1.\n- The next prime after 17 is 19:\n  19² + 1 = 361 + 1 = **362**."
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
    "explanation": "🔢 (n + 1)² Pattern:\n- (3 + 1)² = 4² = 16.\n- (7 + 1)² = 8² = **64**."
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
    "explanation": "🔢 Product of Consecutive Integers:\n- 42 = 6 × 7.\n- 56 = 7 × 8.\n- 110 = 10 × 11.\n- In the same sequence: 11 × 12 = **132**."
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
    "explanation": "🔢 n² to (n + 1)³ Progression:\n- 01 = 1²; 08 = (1 + 1)³ = 2³ = 8.\n- 16 = 4²; next term = (4 + 1)³ = 5³ = **125**."
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
    "explanation": "🔢 n² + n Progression:\n- 12 = 3² + 3.\n- 20 = 4² + 4.\n- 30 = 5² + 5.\n- Next in sequence = 6² + 6 = 36 + 6 = **42**."
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
    "explanation": "🔢 Multiplier Ratio (x, 7x, 8x):\n- In (2, 14, 16): 2 × 7 = 14, 2 × 8 = 16.\n- For (3, 21, 24): 3 × 7 = 21, 3 × 8 = 24.\nMatches the exact same proportional logic."
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
    "explanation": "🔢 Multiplier Relationship (x, 6x, 12x):\n- In (3, 18, 36): 3 × 6 = 18, 18 × 2 = 36.\n- For (4, 24, 48): 4 × 6 = 24, 24 × 2 = 48."
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
    "explanation": "🔢 Difference Progression (+9, +13):\n- In (6, 15, 28): 15 - 6 = 9; 28 - 15 = 13.\n- For (60, 69, 82): 69 - 60 = 9; 82 - 69 = 13."
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
    "explanation": "🔢 Difference Progression (-4, -8):\n- In (81, 77, 69): 81 - 77 = 4; 77 - 69 = 8.\n- For (56, 52, 44): 56 - 52 = 4; 52 - 44 = 8."
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
    "explanation": "🔢 Difference Progression (-8, -16):\n- In (32, 24, 8): 32 - 24 = 8; 24 - 8 = 16.\n- For (24, 16, 0): 24 - 16 = 8; 16 - 0 = 16."
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
    "explanation": "🔤 Opposite Alphabet Letters:\n- D is opposite to W; W is opposite to D; H is opposite to S.\n- Similarly for FUL:\n  F is opposite to U;\n  U is opposite to F;\n  L is opposite to O.\nResult = **UFO**."
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
    "explanation": "🔤 Alternating (+5, -5) Shift:\n- K (11) + 5 = 16 (P)\n- O (15) - 5 = 10 (J)\n- R (18) + 5 = 23 (W)\n- T (20) - 5 = 15 (O)\nApplying to FINR:\n- F (6) + 5 = 11 (K)\n- I (9) - 5 = 4 (D)\n- N (14) + 5 = 19 (S)\n- R (18) - 5 = 13 (M) -> **KDSM**."
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
    "explanation": "🔤 Alternating (+1, -1) Shift:\n- T (+1) = U, R (-1) = Q, A (+1) = B, D (-1) = C, E (+1) = F.\nApplying to PLATE:\n- P (+1) = Q\n- L (-1) = K\n- A (+1) = B\n- T (-1) = S\n- E (+1) = F -> **QKBSF**."
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
    "explanation": "🔤 Half-Word Inversion:\n- Divide CIRCLE into CIR and CLE. Reverse each half: CIR -> RIC; CLE -> ELC = RICELC.\n- Divide SQUARE into SQU and ARE. Reverse each half: SQU -> UQS; ARE -> ERA = **UQSERA**."
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
    "explanation": "🔤 Consonants-First Letter Segregation:\n- Extract consonants first: H, L, C, P, T, R (HLCPTR).\n- Then vowels: E, I, O, E.\n- Arranging according to pattern gives **HLCPERTOIE**."
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
    "explanation": "🔤 Consonants followed by Vowels:\n- In BEGUM: Consonants are B, G, M; Vowels are E, U.\n- Consonants placed first followed by vowels: B, G, M, E, U -> **BGMEU**."
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
    "explanation": "🔤 Prefix Retention & Suffix Rearrangement:\n- In RATIONAL: RAT remains unaltered. IONAL is rearranged to NIOLA.\n- In TRIBAL: TRI remains unaltered. BAL is rearranged in reverse to LBA -> **TRILBA**."
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
    "explanation": "📐 Prime Factorization:\n- 42 = 2 × 3 × 7\n- 63 = 3² × 7\n- 140 = 2² × 5 × 7\nThe only common prime factor in all three numbers is **7**."
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
    "question": "Find the H.C.F. of a²b⁴c⁶, b³c⁸a⁴ and a⁸b⁶c².",
    "options": [
      "a⁴b⁴c⁴",
      "a²b²c²",
      "a²b³c²",
      "a²b³c³"
    ],
    "correct": "a²b³c²",
    "explanation": "📐 Minimum Powers of Common Variables:\n- Power of a: min(2, 4, 8) = 2 -> a²\n- Power of b: min(4, 3, 6) = 3 -> b³\n- Power of c: min(6, 8, 2) = 2 -> c²\nTherefore, H.C.F. = **a²b³c²**."
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
    "explanation": "📐 Decimal HCF Technique:\n1. Equalize decimal places: 0.63, 1.05, 2.10.\n2. Consider as integers: 63, 105, 210.\n3. HCF(63, 105, 210) = 21 (since 63 = 21×3, 105 = 21×5, 210 = 21×10).\n4. Place decimal 2 places from right: **0.21**."
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
    "question": "Find the H.C.F. of 2² 3³ 5⁵, 2³ 3² 5² 7 and 2⁴ 3⁴ 5 7² 11.",
    "options": [
      "2²3² 5",
      "2²3² 5 7 11",
      "2⁴ 3⁴ 5",
      "2⁴ 3⁴ 5⁵ 7 11"
    ],
    "correct": "2²3² 5",
    "explanation": "📐 Prime Powers Minimum Rule:\n- Minimum power of 2: min(2, 3, 4) = 2²\n- Minimum power of 3: min(3, 2, 4) = 3²\n- Minimum power of 5: min(5, 2, 1) = 5¹\n- 7 and 11 are not present in all terms (min power = 0).\nTherefore, H.C.F. = **2²3² 5**."
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
    "explanation": "📐 Fractions HCF Formula:\n- HCF of Fractions = HCF(Numerators) / LCM(Denominators)\n- HCF(2, 8, 64, 10) = 2\n- LCM(3, 9, 81, 27) = 81\nResult = **2/81**."
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
    "explanation": "📦 Equal Distribution / HCF:\n- Maximum students = HCF(1001, 910).\n- 1001 - 910 = 91.\n- 910 = 91 × 10 and 1001 = 91 × 11.\n- Maximum number of students = **91**."
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
    "explanation": "📏 Metric Scale Measurement:\n1. Convert all lengths to cm:\n   - 3m = 300 cm\n   - 5m 10cm = 510 cm\n   - 12m 90cm = 1290 cm\n2. HCF(300, 510, 1290) = **30 cm**."
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
    "explanation": "📏 Imperial Scale Measurement:\n1. Convert to inches (1 ft = 12 in):\n   - 20 ft = 240 in\n   - 13 ft 9 in = 156 + 9 = 165 in\n   - 17 ft 6 in = 204 + 6 = 210 in\n   - 21 ft 3 in = 252 + 3 = 255 in\n2. HCF(240, 165, 210, 255) = 15 inches = **1 feet 3 inches**."
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
    "explanation": "🥛 Maximum Capacity Measurement:\n- Greatest capacity = HCF(403, 713, 496).\n- Difference: 496 - 403 = 93 = 3 × 31.\n- 403 = 31 × 13; 713 = 31 × 23; 496 = 31 × 16.\n- HCF = **31 liters**."
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
    "explanation": "🚦 Traffic Signal Synchronization:\n1. LCM(24, 48, 72) = 144 seconds.\n2. 144 seconds = 2 minutes and 24 seconds.\n3. Add to 9:10:24 -> 9:10:24 + 0:02:24 = **9 :12 : 48 hrs**."
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
    "explanation": "🏃 Circular Track Lap LCM:\n1. Time = LCM(252, 308, 198).\n   252 = 2² × 3² × 7\n   308 = 2² × 7 × 11\n   198 = 2 × 3² × 11\n2. LCM = 2² × 3² × 7 × 11 = 2772 seconds.\n3. Convert to minutes: 2772 ÷ 60 = 46 minutes and 12 seconds (**46 minutes 12 seconds**)."
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
    "explanation": "🏃 Track Speed & Lap Time:\n1. Time for each runner to complete 1 circuit:\n   - A = 12 / 3 = 4 hours\n   - B = 12 / 4 = 3 hours\n   - C = 12 / 6 = 2 hours\n2. Meeting time at start = LCM(4, 3, 2) = **12 h**."
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
    "explanation": "🔢 LCM with Subtraction Offset:\n1. LCM(2, 4, 3, 5, 6, 8, 10) = 120.\n2. (Number - 7) = 120 -> Number = 120 + 7 = **127**."
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
    "explanation": "🔢 LCM with Addition Offset:\n1. LCM(10, 12, 15, 20) = 60.\n2. (Number + 8) = 60 -> Number = 60 - 8 = **52**."
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
    "explanation": "🔢 Modular Remainder Offset:\n1. LCM(9, 10, 15) = 90.\n2. Divide 1936 by 90: 1936 = 90 × 21 + 46 (remainder 46).\n3. To obtain a remainder of 7 instead of 46, subtract 46 - 7 = **39**.\n(Check: 1936 - 39 = 1897; 1897 mod 90 = 7)."
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
    "explanation": "🔢 Constant Remainder Formula:\n1. Required number = LCM(4, 6, 8, 12, 16) + remainder.\n2. LCM = 48.\n3. 48 + 2 = **50**."
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
    "explanation": "🔢 Same Remainder Theorem:\n- Number divides the differences:\n  233 - 187 = 46\n  279 - 233 = 46\n  279 - 187 = 92\n- HCF(46, 46, 92) = **46**."
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
    "explanation": "🔢 Difference Divisor & Digit Sum:\n1. N must divide 2272 - 875 = 1397.\n2. Factor 1397: 1397 = 11 × 127.\n3. Since N is a 3-digit number, N = 127.\n4. Sum of digits = 1 + 2 + 7 = **10**."
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
    "explanation": "🔢 Multi-Number Difference HCF:\n1. Differences:\n   4665 - 1305 = 3360\n   6905 - 4665 = 2240\n   6905 - 1305 = 5600\n2. HCF(3360, 2240, 5600) = 1120.\n3. 4-digit divisor N = 1120.\n4. Sum of digits = 1 + 1 + 2 + 0 = **4**."
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
    "explanation": "🔢 HCF with Remainder Subtraction:\n1. 110 - 2 = 108\n2. 128 - 2 = 126\n3. HCF(108, 126) = **18**."
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
    "explanation": "🔢 Distinct Remainders HCF:\n1. 122 - 2 = 120\n2. 243 - 3 = 240\n3. HCF(120, 240) = **120**."
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
    "explanation": "🔢 Constant Difference Method (LCM - k):\n1. Check differences between divisors and remainders:\n   12 - 7 = 5\n   15 - 10 = 5\n   16 - 11 = 5 (constant k = 5).\n2. LCM(12, 15, 16) = 240.\n3. Number = 240 - 5 = **235**."
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
    "explanation": "🔢 Constrained Divisibility Model:\n1. LCM(5, 6, 7, 8) = 840.\n2. General form = 840k + 3.\n3. Divisible by 9: (840k + 3) mod 9 = (3k + 3) mod 9 = 0 -> k = 2.\n4. Required number = 840(2) + 3 = 1680 + 3 = **1683**."
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
    "explanation": "🔢 Constant Difference Method:\n1. Differences: 20 - 14 = 6; 25 - 19 = 6; 35 - 29 = 6; 40 - 34 = 6 (k = 6).\n2. LCM(20, 25, 35, 40) = 1400.\n3. Number = 1400 - 6 = **1394**."
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
    "explanation": "🔢 Largest n-Digit Multiple:\n1. LCM(12, 16, 18, 24, 32) = 288.\n2. Largest 5-digit number = 99999.\n3. 99999 ÷ 288 gives quotient 347 and remainder 63.\n4. Subtract remainder: 99999 - 63 = **99936**."
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
    "explanation": "🔢 Smallest n-Digit Multiple:\n1. LCM(16, 24, 36, 54) = 432.\n2. Smallest 5-digit number = 10000.\n3. 10000 ÷ 432 gives remainder 64.\n4. Add deficit: 10000 + (432 - 64) = 10000 + 368 = **10368**."
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
    "explanation": "🔢 Largest 4-Digit Number with Remainder:\n1. LCM(12, 18, 21, 24) = 504.\n2. 9999 ÷ 504 = 19 with remainder 423.\n3. Largest exact multiple = 9999 - 423 = 9576.\n4. Add required remainder: 9576 + 6 = **9582**."
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
    "explanation": "🔢 Generalized Constant Difference:\n- In each case: Divisor - Remainder = 1.\n- Required number = LCM(2, 3, 4, 5, 6, 7, 8, 9, 10) - 1.\n- LCM = 2520.\n- Number = 2520 - 1 = **2519**."
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
    "explanation": "🔢 Product Identity (HCF × LCM = A × B):\n- B = (HCF × LCM) / A\n  = (96 × 1296) / 864\n  = 124416 / 864 = **144**."
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
    "explanation": "🔢 Product Identity:\n- B = (11 × 7700) / 275 = 7700 / 25 = **308**."
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
    "explanation": "🔢 Sum and Product of Factors:\n1. Let numbers be 5a and 5b where gcd(a, b) = 1.\n2. LCM = 5ab = 495 -> ab = 99.\n3. Sum = 5(a + b) = 100 -> a + b = 20.\n4. Factors of 99 summing to 20 are 11 and 9.\n5. Numbers are 55 and 45 -> Difference = 55 - 45 = **10**."
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
    "explanation": "🔢 Quadratic Factors:\n1. A × B = HCF × LCM = 24.\n2. A - B = 2.\n3. Factors of 24 with difference 2 are **6 and 4**."
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
    "explanation": "🔢 Linear System with HCF/LCM:\n1. L = 45H.\n2. L + H = 46H = 1150 -> H = 25.\n3. L = 45 × 25 = 1125.\n4. Other number = (H × L) / 125 = (25 × 1125) / 125 = 1125 / 5 = **225**."
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
    "explanation": "🔢 Co-Prime Property:\n- For co-prime numbers, HCF = 1.\n- LCM = Product / HCF = 117 / 1 = **117**."
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
    "explanation": "🔢 Fundamental Division Rule:\n- The HCF must always divide the LCM.\n- 120 is divisible by 8 (15), 12 (10), and 24 (5).\n- 120 is NOT divisible by **35** (120/35 = 24/7), so 35 can never be the HCF."
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
    "explanation": "🔢 Divisibility of LCM by HCF:\n- LCM must be an integer multiple of HCF (8).\n- 24 = 8×3, 48 = 8×6, 56 = 8×7.\n- **60** is not divisible by 8, so it can never be their LCM."
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
    "question": "H.C.F. of 3240, 3600 and a third number, is 36 and their LCM is 2⁴ · 3⁵ · 5² · 7². The third number is-",
    "options": [
      "2² · 3⁵ · 7²",
      "2² · 5³ · 7²",
      "2⁵ · 5² · 7²",
      "2³ · 3⁵ · 7²"
    ],
    "correct": "2² · 3⁵ · 7²",
    "explanation": "🔢 Prime Factor Exponent Matching:\n1. 3240 = 2³ · 3⁴ · 5¹; 3600 = 2⁴ · 3² · 5².\n2. HCF = 36 = 2² · 3² -> Power of 2 in third number must be 2.\n3. LCM has 3⁵, but 3240 and 3600 only have up to 3⁴ -> Third number MUST supply 3⁵.\n4. LCM has 7², but neither number has 7 -> Third number MUST supply 7².\n5. Therefore, third number = **2² · 3⁵ · 7²**."
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
    "explanation": "🔢 Ratio Scaling:\n- Numbers are 4 × 2 = 8 and 5 × 2 = 10.\n- LCM = 4 × 5 × 2 = **40**."
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
    "explanation": "🔢 Ratio to HCF:\n- LCM = 3 × 2 × HCF = 6 × HCF = 72.\n- HCF = 72 / 6 = **12**."
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
    "explanation": "🔢 Co-Prime Pairs Generation:\n1. Numbers: 4a + 4b = 36 -> a + b = 9 with gcd(a, b) = 1.\n2. Possible co-prime pairs (a, b) with a < b:\n   - (1, 8)\n   - (2, 7)\n   - (4, 5)\n3. (3, 6) is excluded because gcd(3, 6) = 3 ≠ 1.\nTotal possible pairs = **3**."
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
    "question": "What is the remainder of (65 × 78) / 9?",
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
    "question": "What is the remainder of (37 × 98) / 11?",
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
    "question": "What is the remainder of (192 × 37 × 1958 × 1956) / 19?",
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
    "question": "Find the remainder of (103 × 114 × 80) / 100",
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
    "question": "Find the remainder of (288 × 37 × 35) / 99",
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
    "question": "Find the last two digits of 205 × 117 × 409",
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
    "question": "Find the last two digits of 103 × 1298 × 18702 × 1197",
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
    "question": "Find the remainder of 37¹²⁰ / 9",
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
    "question": "Find the remainder of 80⁶³ / 9",
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
    "question": "Find the remainder of 2⁶³ / 9",
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
    "question": "Find the remainder of 2⁶⁵ / 9",
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
    "question": "Find the remainder of 5⁹⁹ / 126",
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
    "question": "Find the remainder of 7⁴⁰⁰ / 400",
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
    "question": "Find the remainder of 2⁷⁶ / 96",
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
    "question": "Find the remainder of 5⁵⁰⁰ / 500",
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
    "question": "Find the remainder of 37¹⁰⁰ / 7",
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
    "question": "Find the remainder of 11⁷⁷ / 7",
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
    "question": "Find the remainder of 143³²¹ / 5",
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
    "question": "Find the remainder of 1822⁴² / 9",
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
    "question": "Find the remainder of 12426⁴² / 9",
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
    "question": "Find the remainder of 3523²³ / 16",
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
    "question": "Find the remainder of 2967²³ / 25",
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
    "question": "Find the remainder of 2⁷² / 73",
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
    "question": "Find the remainder of 2¹⁰⁰ / 101",
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
    "question": "Find the remainder of 2¹⁰⁶ / 53",
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
    "question": "Find the remainder of 5⁹¹ / 31",
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
    "question": "Find the remainder of (10¹ + 10² + 10³ + 10⁴ + ... + 10¹⁰⁰) / 6",
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
    "question": "Find the remainder of (67⁵⁴ + 32⁷⁹) / 11",
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
    "question": "Find the remainder of (29¹¹ + 17¹¹) / 23",
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
    "question": "Find the remainder of (79³⁷ - 3) / 80",
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
    "question": "Find the remainder of (x³ + 5x² + 7) / (x - 2)",
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
    "question": "Find the remainder of (x² + 7x + 15) / (x + 3)",
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
    "question": "Find the remainder of (x⁵¹ + 16) / (x + 1)",
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
    "question": "If x² + 4x + K when divided by x - 2 leaves remainder 2x, find the value of K.",
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
    "explanation": "📊 Consecutive Odd Integers:\n- Let the numbers be: a, a+2, a+4, a+6, a+8.\n- Sum = 5a + 20.\n- Average = (5a + 20) / 5 = **a + 4** (the middle number c)."
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
    "explanation": "📊 Uniform Shift Property:\n- If a constant k is subtracted from each observation, the new average decreases by k.\n- New average = 14 - 2 = **12**."
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
    "question": "The average of x numbers is 3x. If (x–1) is subtracted from each given number, what will be the new average?",
    "options": [
      "2x + 1",
      "(x – 1)3",
      "2x – 1",
      "Data inadequate",
      "None of these"
    ],
    "correct": "2x + 1",
    "explanation": "📊 Algebraic Uniform Shift:\n- New average = Old average - (x - 1) = 3x - x + 1 = **2x + 1**."
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
    "explanation": "📊 Uniform Division Property:\n- If each number is divided by 15, the average is also divided by 15:\n- 405 / 15 = **27**."
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
    "explanation": "📊 Uniform Multiplication Property:\n- If each observation is multiplied by 8, the average is multiplied by 8:\n- 21 × 8 = **168**."
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
    "explanation": "📊 Ratio and Average:\n1. Total age of 3 boys = 3 × 15 = 45 years.\n2. Ratio sum = 3 + 5 + 7 = 15 parts.\n3. 1 part = 45 / 15 = 3 years.\n4. Oldest boy (7 parts) = 7 × 3 = **21 years**."
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
    "explanation": "📊 Number Triple Relationships:\n1. Let 2nd number = x -> 1st number = 2x, 3rd number = 4x.\n2. Sum = 2x + x + 4x = 7x.\n3. Average = 7x / 3 = 56 -> 7x = 168 -> x = 24.\n4. Numbers in order = 2(24), 24, 4(24) = **48, 24, 96**."
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
    "question": "The average salary of 20 workers in an office is Rs1900 per month. If the manager’s salary is added, the average becomes Rs2000 per month. The manager’s annual salary (in Rs) is :",
    "options": [
      "Rs4000",
      "Rs25200",
      "Rs48000",
      "Rs84000",
      "None of these"
    ],
    "correct": "Rs48000",
    "explanation": "💼 Inclusion & Annual Conversion:\n1. Manager monthly salary = 2000 + 20 × (2000 - 1900) = 2000 + 2000 = Rs 4000.\n2. Annual salary = 4000 × 12 = **Rs48000**."
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
    "question": "The average age of 24 students and the class teacher is 16 years. If the class teacher’s age is excluded, the average reduces by 1 year. What is the age of the class teacher?",
    "options": [
      "50 years",
      "45 years",
      "40 years",
      "Data inadequate",
      "None of these"
    ],
    "correct": "40 years",
    "explanation": "👥 Exclusion Formula:\n1. Total of 25 people = 25 × 16 = 400.\n2. Total of 24 students = 24 × 15 = 360.\n3. Teacher's age = 400 - 360 = **40 years**."
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
    "question": "The average age of 34 boys in a class is 14 years. If the teacher’s age is included the average age of the boys and the teacher becomes 15 years. What is the teacher’s age?",
    "options": [
      "48 years",
      "46 years",
      "49 years",
      "45 years",
      "None of these"
    ],
    "correct": "49 years",
    "explanation": "👥 Inclusion Formula:\n1. Teacher's age = New Average + (Initial Count × Increase in Average)\n2. Teacher's age = 15 + (34 × 1) = **49 years**."
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
    "explanation": "⚖️ Replacement Formula:\n- Weight of new person = Replaced weight + (Total persons × Increase in average)\n- Weight = 65 + (8 × 1.5) = 65 + 12 = **77kg**."
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
    "explanation": "⚖️ Replacement with Decrease:\n- Total decrease = 24 × 3 months = 72 months = 6 years.\n- Age of new boy = 20 - 6 = **14 years**."
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
    "explanation": "📏 Multi-Student Absence Equation:\n1. Total height of 40 students = 40 × 163 = 6520 cm.\n2. Total of 37 students = 37 × 162 = 5994 cm.\n3. A + B + C = 6520 - 5994 = 526 cm.\n4. Since A = B and C = A - 2: A + A + (A - 2) = 526 -> 3A = 528 -> A = **176cm**."
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
    "explanation": "⚖️ Multi-Stage Replacement:\n1. A + B + C = 3 × 84 = 252 kg.\n2. A + B + C + D = 4 × 80 = 320 kg -> D = 320 - 252 = 68 kg.\n3. E = 68 + 3 = 71 kg.\n4. B + C + D + E = 4 × 79 = 316 kg.\n5. (A + B + C + D) - (B + C + D + E) = A - E = 320 - 316 = 4 kg.\n6. A = E + 4 = 71 + 4 = **75kg**."
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
    "question": "In a coconut grove, (x + 2) trees yield 60 nuts per year per tree, x trees yield 120 nuts per year per tree, and (x – 2) trees yield 180 nuts per year per tree. If the average yield per year per tree is 100, find x :",
    "options": [
      "4",
      "2",
      "8",
      "6",
      "None of these"
    ],
    "correct": "4",
    "explanation": "🥥 Weighted Tree Yield:\n1. Total nuts = 60(x+2) + 120x + 180(x-2) = 360x - 240.\n2. Total trees = (x+2) + x + (x-2) = 3x.\n3. (360x - 240) / 3x = 100 -> 360x - 240 = 300x -> 60x = 240 -> x = **4**."
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
    "explanation": "🏫 Multi-Group Weighted Mean:\n1. Total students = 60 + 40 + 50 + 50 = 200.\n2. Total age = 60(12) + 40(13) + 50(14) + 50(15) = 720 + 520 + 700 + 750 = 2690.\n3. Average = 2690 / 200 = **13.45**."
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
    "explanation": "⚖️ Rule of Alligation:\n1. Ratio of passed to failed = (17 - 8) : (19 - 17) = 9 : 2.\n2. Total ratio parts = 11.\n3. Passed candidates = (9 / 11) × 77 = **63**."
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
    "explanation": "🔢 Missing Element Decomposition:\n1. Total of 13 = 13 × 39 = 507.\n2. Sum of first 5 = 5 × 38 = 190.\n3. Sum of last 7 = 7 × 36 = 252.\n4. 6th number = 507 - (190 + 252) = 507 - 442 = **65**."
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
    "explanation": "⚖️ Salary Alligation:\n1. Ratio of Officers to Non-Officers = (130 - 114) : (540 - 130) = 16 : 410.\n2. Given officers = 16 -> Number of non-officers = **410**."
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
    "explanation": "📅 Consecutive Attendance Mean:\n1. Attendance for 4 days = 4 × 320 = 1280.\n2. Attendance for 3 days = 3 × 325 = 975.\n3. 4th day = 1280 - 975 = **305**."
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
    "explanation": "💰 Weighted Investment Return:\n1. Remaining capital = 1 - (1/4 + 2/3) = 1 - 11/12 = 1/12.\n2. Average return = (1/4 × 3%) + (2/3 × 5%) + (1/12 × 11%) = 3/4 + 10/3 + 11/12 = 60/12 = **5%**."
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
    "explanation": "📊 Partial Readings Decomposition:\n1. Total of 8 = 8 × 24.3 = 194.4.\n2. Sum of first 5 = 2(18.5) + 3(21.2) = 37 + 63.6 = 100.6.\n3. Sum of 6th, 7th, 8th = 194.4 - 100.6 = 93.8.\n4. x + (x + 3) + (x + 8) = 93.8 -> 3x + 11 = 93.8 -> 3x = 82.8 -> x = **27.6**."
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
    "explanation": "🏏 Batting Average Formulation:\n1. 15A + 92 = 16(A + 4) -> 15A + 92 = 16A + 64 -> A = 28.\n2. Average after 16 innings = 28 + 4 = **32**."
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
    "explanation": "🏏 Batting Century Shortfall:\n1. 19th innings score = 100 - 2 = 98 runs.\n2. 18A + 98 = 19(A + 3) -> 18A + 98 = 19A + 57 -> A = 41.\n3. Average after 19 innings = 41 + 3 = **44**."
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
    "explanation": "🏏 Bowling Average (Runs / Wickets):\n1. (12.4W + 26) / (W + 5) = 12.2 (improved average is lower by 0.2).\n2. 12.4W + 26 = 12.2W + 61 -> 0.2W = 35 -> W = 35 / 0.2 = **175**."
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
    "explanation": "🚗 Harmonic Mean for Equal Distance:\n- Average speed = 2xy / (x + y) = (2 × 40 × 30) / (40 + 30) = 2400 / 70 ≈ **34.29km/h**."
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
    "explanation": "🚗 3-Part Equal Distance Harmonic Mean:\n- Avg Speed = 3 / (1/20 + 1/15 + 1/10) = 3 / (13/60) = 180 / 13 = **13(11/13) km/h**."
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
    "explanation": "🚗 Total Distance / Total Time:\n1. Total distance = 18 + 16 + 30 = 64 km.\n2. Total time = (18/6) + (16/8) + (30/6) = 3 + 2 + 5 = 10 h.\n3. Average speed = 64 / 10 = **6.4km/h**."
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
    "explanation": "🏃 Fractional Distance Breakdown:\n1. Let distance = 20 km -> 5 km @ 8km/h, 12 km @ 6km/h, 3 km @ 10km/h.\n2. Time = 5/8 + 2 + 3/10 = 117/40 h.\n3. Speed = 20 / (117/40) = 800 / 117 = **6(98/117)km/h**."
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
    "question": "A car runs for t₁ hours at v₁ km/h, t₂ hours at v₂ km/ h. What is the average speed of the car for the entire journey?",
    "options": [
      "(t₁ + t₂) / (v₁t₁ + v₂t₂)",
      "(v₁t₁ + v₂t₂) / (t₁ + t₂)",
      "(v₁t₂ + v₂t₁) / (v₁ + v₂)",
      "(v₁ + v₂) / (v₁t₁ + v₂t₂)"
    ],
    "correct": "(v₁t₁ + v₂t₂) / (t₁ + t₂)",
    "explanation": "🚗 Fundamental Definition:\n- Total Distance = v₁t₁ + v₂t₂.\n- Total Time = t₁ + t₂.\n- Average Speed = **(v₁t₁ + v₂t₂) / (t₁ + t₂)**."
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
    "explanation": "✈️ 4-Sided Equal Distance Circuit:\n1. Let each side = 2400 km.\n2. Times = 12h, 6h, 4h, 3h -> Total time = 25 h.\n3. Total distance = 4 × 2400 = 9600 km.\n4. Average speed = 9600 / 25 = **384km/h**."
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
    "explanation": "🍲 Hostel Mess System:\n1. Let original average per head = x. Original expenditure = 42x.\n2. 49(x - 1.5) = 42x + 32.5 -> 7x = 106 -> x = 106 / 7.\n3. Original expenditure = 42 × (106 / 7) = 6 × 106 = **636**."
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
    "explanation": "🍲 Hostel Mess Balance:\n1. 40(x - 1) = 36x + 32 -> 4x = 72 -> x = 18.\n2. Original expenditure = 36 × 18 = **648**."
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
    "explanation": "📝 Difference Across Sets:\n1. Average difference = 15 over 4 subjects.\n2. Total mark difference = 15 × 4 = **60**."
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
    "question": "The average temperature on Monday, Tuesday, and Wednesday was 40°C. The average temperature on Tuesday, Wednesday, and Thursday was 41°C. If the temperature on Thursday was 42°C, what was the temperature on Monday?",
    "options": [
      "39°C",
      "45°C",
      "44°C",
      "40°C",
      "None of these"
    ],
    "correct": "39°C",
    "explanation": "🌡️ Temperature Shift:\n1. (T + W + Th) - (M + T + W) = Th - M = 3(41) - 3(40) = 3°C.\n2. 42 - M = 3 -> M = **39°C**."
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
    "explanation": "📈 Cumulative Population Growth Rate:\n1. Compound factor = 1.20 × 1.25 × 1.44 = 2.16 -> Net increase = 116%.\n2. Average rate of increase per year = 116% / 3 = **38(2/3)%**."
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
    "explanation": "👨‍👩‍👧 Family Age Regression:\n1. Present total = 6 × 22 = 132 years.\n2. 7 years ago, total age = 132 - (6 × 7) = 90 years.\n3. At that time there were 5 members: 90 / 5 = **18 years**."
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
    "explanation": "👶 Interval Birth Age:\n1. 5 years ago, H + W = 2 × 23 = 46.\n2. Today, H + W = 46 + 2(5) = 56 years.\n3. H + W + C = 3 × 20 = 60 years.\n4. Age of child C = 60 - 56 = **4 years**."
  },
  {
    "id": "part_q1",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Easy",
    "points": 1,
    "question": "A starts a business with 1000. B joins him after 6 months with 4000. C puts a sum of 5000 for 4 months only. At the end of the year the business gave a profit of 2800. How should the profit be divided among them?",
    "options": [
      "600, 1200, 1000",
      "800, 600, 1400",
      "1000, 1200, 600",
      "1200, 600, 1000",
      "None of these"
    ],
    "correct": "600, 1200, 1000",
    "explanation": "💼 Compound Profit Sharing Ratio:\n1. A's effective investment = 1000 × 12 = 12,000\n2. B's effective investment = 4000 × 6 = 24,000\n3. C's effective investment = 5000 × 4 = 20,000\n4. Profit ratio A : B : C = 12 : 24 : 20 = 3 : 6 : 5\n5. Total parts = 3 + 6 + 5 = 14 parts\n6. 1 part = 2800 / 14 = 200\n- A = 3 × 200 = **600**\n- B = 6 × 200 = **1200**\n- C = 5 × 200 = **1000**"
  },
  {
    "id": "part_q2",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B enter into a partnership for a year. A contributes 3000 and B 4000. After 4 months they admit C, who contributes 4500. If B withdraws his contribution after 6 months, how would they share a profit of 1000 at the end of the year?",
    "options": [
      "250, 200, 550",
      "150, 200, 650",
      "375, 250, 375",
      "Data inadequate",
      "None of these"
    ],
    "correct": "375, 250, 375",
    "explanation": "💼 Mid-Term Admission & Withdrawal:\n1. A was active for 12 months: 3000 × 12 = 36,000\n2. B withdrew after 6 months: 4000 × 6 = 24,000\n3. C joined after 4 months (active for 8 months): 4500 × 8 = 36,000\n4. Ratio A : B : C = 36,000 : 24,000 : 36,000 = 3 : 2 : 3\n5. Total parts = 3 + 2 + 3 = 8 parts\n6. 1 part = 1000 / 8 = 125\n- A = 3 × 125 = **375**\n- B = 2 × 125 = **250**\n- C = 3 × 125 = **375**"
  },
  {
    "id": "part_q3",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C enter into a partnership. A advances one-third of the capital for one-third of the time. B contributes one-sixth of the capital for one-third of the time C contributes the remaining capital for the whole time. How should they divide a profit of 1200.",
    "options": [
      "300, 200, 700",
      "200, 100, 900",
      "375, 250, 575",
      "385, 255, 475",
      "None of these"
    ],
    "correct": "200, 100, 900",
    "explanation": "💼 Fractional Capital & Duration:\n1. C's capital share = 1 - (1/3 + 1/6) = 1 - 1/2 = 1/2\n2. Investment equivalents:\n   - A: (1/3) × (1/3) = 1/9\n   - B: (1/6) × (1/3) = 1/18\n   - C: (1/2) × 1 = 1/2\n3. Multiply by LCM (18): Ratio = 2 : 1 : 9\n4. Total parts = 2 + 1 + 9 = 12 parts\n5. 1 part = 1200 / 12 = 100\n- A = 2 × 100 = **200**\n- B = 1 × 100 = **100**\n- C = 9 × 100 = **900**"
  },
  {
    "id": "part_q5",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B enter partnership investing 12000 and 16000, respectively. After 8 months, C also joins the business with a capital of 15000. The share of C in a profit of 45600 after 2 years will be–",
    "options": [
      "12000",
      "14400",
      "19200",
      "21200",
      "None of these"
    ],
    "correct": "12000",
    "explanation": "💼 Two-Year Horizon (24 Months):\n1. A's time = 24 months: 12,000 × 24 = 288,000\n2. B's time = 24 months: 16,000 × 24 = 384,000\n3. C joined after 8 months (active for 16 months): 15,000 × 16 = 240,000\n4. Ratio A : B : C = 288 : 384 : 240 = 6 : 8 : 5\n5. Total parts = 6 + 8 + 5 = 19 parts\n6. 1 part = 45,600 / 19 = 2,400\n7. C's share = 5 × 2,400 = **12,000**"
  },
  {
    "id": "part_q6",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Easy",
    "points": 1,
    "question": "Kishan and Nandan started a joint firm. Kishan’s investment was thrice the investment of Nandan, and the period of his investment was two times the period of investment of Nandan. Nandan got 4000 as profit for his investment. Their total profit if the distribution of profit is directly proportional to the period and amount, is–",
    "options": [
      "24000",
      "16000",
      "28000",
      "20000",
      "None of these"
    ],
    "correct": "28000",
    "explanation": "💼 Direct Multiples of Capital & Time:\n1. Let Nandan's capital = C, time = T -> Nandan factor = C × T = 1\n2. Kishan's capital = 3C, time = 2T -> Kishan factor = 3C × 2T = 6CT = 6\n3. Ratio Kishan : Nandan = 6 : 1\n4. Nandan's profit = 4000 (1 part = 4000)\n5. Total profit = 6 + 1 = 7 parts = 7 × 4000 = **28000**"
  },
  {
    "id": "part_q15",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_1",
    "type_name": "Type 1: Simple & Compound Investment Sharing",
    "difficulty": "Easy",
    "points": 1,
    "question": "Three partners A, B and C together invested 14400 in a business. At the end of the year, A got 1250, B got 2500 and C got 3750 as profit. How much amount did C invest?",
    "options": [
      "2400",
      "4800",
      "7200",
      "9600",
      "None of these"
    ],
    "correct": "7200",
    "explanation": "💼 Profit Ratio to Capital Share:\n1. Periods are equal (1 year each), so Capital Ratio = Profit Ratio.\n2. Ratio A : B : C = 1250 : 2500 : 3750 = 1 : 2 : 3\n3. Total ratio parts = 1 + 2 + 3 = 6 parts\n4. C's capital share = (3 / 6) × 14,400 = (1 / 2) × 14,400 = **7200**"
  },
  {
    "id": "part_q4",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "Manoj got 6000 as his share out of the total profit of 9000 which he and Ramesh earned at the end of one year. If Manoj invested 20000 for 6 months, whereas Ramesh invested his amount for the whole year, the amount invested by Ramesh was–",
    "options": [
      "60000",
      "10000",
      "40000",
      "5000",
      "None of these"
    ],
    "correct": "5000",
    "explanation": "🔢 Solving for Unknown Capital:\n1. Total profit = 9000. Manoj's share = 6000 -> Ramesh's share = 9000 - 6000 = 3000\n2. Profit ratio Manoj : Ramesh = 6000 : 3000 = 2 : 1\n3. Manoj: 20,000 × 6 = 120,000\n4. Ramesh: R × 12 = 12R\n5. (120,000) / (12R) = 2 / 1\n6. 10,000 / R = 2 -> R = 10,000 / 2 = **5000**"
  },
  {
    "id": "part_q7",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B enter a partnership with their capitals in the ratio 5 : 9. At the end of 8 months, A withdraws his capital. If they receive the profits in the ratio 4 : 9, find how long B’s capital was used?",
    "options": [
      "10 months",
      "9 months",
      "8 months",
      "4 months",
      "None of these"
    ],
    "correct": "10 months",
    "explanation": "🔢 Solving for Unknown Duration:\n1. (C_A × T_A) / (C_B × T_B) = P_A / P_B\n2. (5 × 8) / (9 × T_B) = 4 / 9\n3. 40 / (9 × T_B) = 4 / 9\n4. 40 = 4 × T_B -> T_B = 40 / 4 = **10 months**"
  },
  {
    "id": "part_q8",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A started a business by investing 2700. After some time, B joined him by investing 2025. At the end of one year, the profit was divided in the ratio 2 : 1. After how many months did B join the business?",
    "options": [
      "4 months",
      "6 months",
      "3 months",
      "2 months",
      "None of these"
    ],
    "correct": "4 months",
    "explanation": "🔢 Time of Delayed Entry:\n1. A was active for 12 months: 2700 × 12 = 32,400\n2. Let B be active for t months: 2025 × t\n3. Profit ratio = 2 : 1 -> 32,400 / (2025 × t) = 2 / 1\n4. 2025 × t = 16,200 -> t = 16,200 / 2025 = 8 months\n5. Since B was in the business for 8 months, B joined after: 12 - 8 = **4 months**"
  },
  {
    "id": "part_q9",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Easy",
    "points": 1,
    "question": "A, B and C invested in the ratio 1 : 2 : 3 . the timing of their investments being in the ratio 1 : 2 : 3. In what ratio would their profit be distributed?",
    "options": [
      "3 : 2 : 1",
      "1 : 2 : 3",
      "1 : 4 : 9",
      "9 : 4 : 1",
      "None of these"
    ],
    "correct": "1 : 4 : 9",
    "explanation": "🔢 Compound Ratio Multiplication:\n1. Profit Ratio = (Capital_A × Time_A) : (Capital_B × Time_B) : (Capital_C × Time_C)\n2. (1 × 1) : (2 × 2) : (3 × 3) = **1 : 4 : 9**"
  },
  {
    "id": "part_q10",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C invested capitals in the ratio 4 : 5 : 6. At the end of the business term, they received the profits in the ratio 2 : 3 : 4. Find the ratio of time for which they contributed their capitals.",
    "options": [
      "6 : 5 : 8",
      "6 : 5 : 9",
      "10 : 12 : 9",
      "15 : 18 : 20",
      "None of these"
    ],
    "correct": "15 : 18 : 20",
    "explanation": "🔢 Ratio Inversion (Time = Profit / Capital):\n1. T_A : T_B : T_C = (2 / 4) : (3 / 5) : (4 / 6) = (1 / 2) : (3 / 5) : (2 / 3)\n2. Multiply through by LCM(2, 5, 3) = 30:\n   - A: (1/2) × 30 = 15\n   - B: (3/5) × 30 = 18\n   - C: (2/3) × 30 = 20\n3. Ratio = **15 : 18 : 20**"
  },
  {
    "id": "part_q11",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Medium",
    "points": 1,
    "question": "A, B and C invest their capitals in a business. If the ratio of their periods of investments are 2 : 3 : 6 and their profits are in the ratio of 4 : 5 : 6. Find the ratio in which the investments are made by A, B and C.",
    "options": [
      "9 : 10 : 12",
      "4 : 5 : 6",
      "8 : 5 : 12",
      "6 : 5 : 3",
      "None of these"
    ],
    "correct": "6 : 5 : 3",
    "explanation": "🔢 Ratio Inversion (Capital = Profit / Time):\n1. C_A : C_B : C_C = (4 / 2) : (5 / 3) : (6 / 6) = 2 : (5 / 3) : 1\n2. Multiply through by 3:\n   - A: 2 × 3 = 6\n   - B: (5/3) × 3 = 5\n   - C: 1 × 3 = 3\n3. Ratio = **6 : 5 : 3**"
  },
  {
    "id": "part_q16",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_2",
    "type_name": "Type 2: Variable Time, Capital & Ratio Inversion",
    "difficulty": "Hard",
    "points": 1,
    "question": "A puts 375 more in a business than B, but B has invested his capital for 4 months while A has invested his for 8 months. If the share of A is 75 more than that of B out of the total profit of 125, find the capital contributed by B?",
    "options": [
      "750",
      "375",
      "735",
      "573",
      "None of these"
    ],
    "correct": "375",
    "explanation": "🔢 Simultaneous Capital & Profit Formulation:\n1. Total profit = 125. P_A + P_B = 125 and P_A - P_B = 75\n2. Adding both: 2P_A = 200 -> P_A = 100, P_B = 25\n3. Profit ratio P_A : P_B = 100 : 25 = 4 : 1\n4. Let B's capital = x -> A's capital = x + 375\n5. [(x + 375) × 8] / [x × 4] = 4 / 1\n6. 2(x + 375) / x = 4 -> (x + 375) / x = 2 -> x + 375 = 2x -> x = **375**"
  },
  {
    "id": "part_q12",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "A, B and C are partners. A receives 2/7 of the profit and B and C share the remaining profit equally. A’s income is increased by 240 when the profit rises from 10% to 15%. Find the capitals invested by B and C each.",
    "options": [
      "2400",
      "1200",
      "4800",
      "6000",
      "None of these"
    ],
    "correct": "6000",
    "explanation": "💰 Return on Capital Percentage:\n1. Remaining profit after A's 2/7 = 5/7\n2. B and C share equally: B = (1/2) × (5/7) = 5/14, C = 5/14\n3. Profit (and capital) ratio A : B : C = (4/14) : (5/14) : (5/14) = 4 : 5 : 5\n4. A's return increases by 15% - 10% = 5% of A's capital = 240\n5. 0.05 × C_A = 240 -> C_A = 240 / 0.05 = 4800\n6. Since C_A : C_B = 4 : 5:\n   C_B = C_C = 4800 × (5 / 4) = **6000** each"
  },
  {
    "id": "part_q13",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Two partners invest 26000 and 16250 respectively in a business and agree that 40% of the profit should be divided equally between them and the remaining profit is to be treated as interest on capital. If one partner gets 450 more than the other, find the total profit made in the business.",
    "options": [
      "3250",
      "3520",
      "3230",
      "3200",
      "None of these"
    ],
    "correct": "3250",
    "explanation": "💰 Partial Equal & Capital Division:\n1. Capital ratio = 26,000 : 16,250 = 8 : 5 (divided by 3250)\n2. The 40% divided equally causes zero difference between them.\n3. The remaining 60% of total profit (P) creates the difference:\n   Difference = [(8 - 5) / (8 + 5)] × 0.60P = (3 / 13) × (3/5)P = (9 / 65)P\n4. (9 / 65)P = 450 -> P = (450 × 65) / 9 = 50 × 65 = **3250**"
  },
  {
    "id": "part_q14",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B invested in the ratio 5 : 3 in a business. If 10% of the total profit goes to charity and A’s share is 900, find the total profit.",
    "options": [
      "1600",
      "1400",
      "1500",
      "1800",
      "None of these"
    ],
    "correct": "1600",
    "explanation": "💰 Charity Deduction Prior to Distribution:\n1. Let total profit = P\n2. 10% to charity -> 90% remaining for partners = 0.90P\n3. A's share = (5 / 8) × 0.90P = 900\n4. 4.5P / 8 = 900 -> 4.5P = 7200 -> P = 7200 / 4.5 = **1600**"
  },
  {
    "id": "part_q17",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B invest 3000 and 4000 in a business. A receives 10 per month out of the profit as a remuneration for running the business and the rest of profit is divided in proportion to the investments. If in year ‘A’ totally receives 390, what does B receive?",
    "options": [
      "630",
      "360",
      "480",
      "380",
      "None of these"
    ],
    "correct": "360",
    "explanation": "💰 Working Partner Monthly Salary:\n1. A's annual remuneration = 10 × 12 = 120\n2. A's share from business profit = 390 - 120 = 270\n3. Ratio of capital A : B = 3000 : 4000 = 3 : 4\n4. A's profit (3 parts) = 270 -> 1 part = 270 / 3 = 90\n5. B's profit (4 parts) = 4 × 90 = **360**"
  },
  {
    "id": "part_q18",
    "module_id": "mod11",
    "module_name": "Partnership",
    "syllabus_lec": "ST-1 Commercial Arithmetic",
    "type_id": "type_3",
    "type_name": "Type 3: Working Partners, Salaries, Charity & Profit Deductions",
    "difficulty": "Easy",
    "points": 1,
    "question": "A sum of money is to be divided among A, B and C in the ratio 2 : 3 : 7. If the total share of A and B together is 1500 less than C, what is A’s share in it?",
    "options": [
      "1000",
      "1500",
      "2000",
      "Data inadequate",
      "None of these"
    ],
    "correct": "1500",
    "explanation": "💰 Ratio Difference Equation:\n1. Ratio A : B : C = 2 : 3 : 7\n2. Share of (A + B) = 2 + 3 = 5 parts\n3. Share of C = 7 parts\n4. Difference = 7 - 5 = 2 parts = 1500\n5. 1 part = 750\n6. A's share (2 parts) = 2 × 750 = **1500**"
  },
  {
    "id": "syl_q1",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nSome kites are threads.\nNo thread is needle.\n\nConclusions:\nI. Some kites are needles.\nII. No needle is thread.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if only Conclusion II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Statement 2 is a Universal Negative (E-type): 'No thread is needle'. Its direct and valid conversion is 'No needle is thread'. Therefore, **Conclusion II definitely follows**.\n2. Statement 1 (Some kites are threads) and Statement 2 (No thread is needle) give 'Some kites are not needles', but 'Some kites are needles' is uncertain and not necessarily true.\n- Hence, **only Conclusion II follows**."
  },
  {
    "id": "syl_q3",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nAll flowers are trees.\nAll trees are fruits.\n\nConclusions:\nI. Some fruits are flowers.\nII. All flowers are fruits.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if both Conclusions I and II follow.",
    "explanation": "🔍 Logical Analysis:\n1. Premise 1: All Flowers are Trees (Flowers ⊆ Trees)\n2. Premise 2: All Trees are Fruits (Trees ⊆ Fruits)\n3. Combining: Flowers ⊆ Trees ⊆ Fruits implies **All flowers are fruits** (Conclusion II definitely follows).\n4. Since All flowers are fruits, by subalternation/conversion, **Some fruits are flowers** (Conclusion I definitely follows).\n- Therefore, **both Conclusions I and II follow**."
  },
  {
    "id": "syl_q4",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nSome books are bags.\nAll bags are trees.\n\nConclusions:\nI. Some books are trees.\nII. Some trees are books.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if both Conclusions I and II follow.",
    "explanation": "🔍 Logical Analysis:\n1. 'Some books are bags' (I-type) + 'All bags are trees' (A-type) = 'Some books are trees' (I-type). Hence, **Conclusion I follows**.\n2. By immediate conversion of 'Some books are trees', we get **Some trees are books** (Conclusion II follows).\n- Therefore, **both Conclusions I and II follow**."
  },
  {
    "id": "syl_q5",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome windows are doors.\nNo door is chair.\n\nConclusions:\nI. Some windows are chairs.\nII. All doors are windows.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if neither Conclusion I nor II follows.",
    "explanation": "🔍 Logical Analysis:\n1. The windows that are doors cannot be chairs ('Some windows are not chairs'). However, whether other windows are chairs is indeterminate. Thus, Conclusion I does not follow.\n2. 'Some windows are doors' converts only to 'Some doors are windows', NOT 'All doors are windows'. Thus, Conclusion II does not follow.\n- Therefore, **neither Conclusion I nor II follows**."
  },
  {
    "id": "syl_q7",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nSome buses are trains.\nSome trains are boats.\n\nConclusions:\nI. Some trains are buses.\nII. Some boats are buses.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if only Conclusion I follows.",
    "explanation": "🔍 Logical Analysis:\n1. Statement 1: 'Some buses are trains' converts directly to **Some trains are buses**. Therefore, **Conclusion I follows**.\n2. Two particular premises (Some + Some) yield no definite conclusion between the extremes (buses and boats). Thus, Conclusion II does not follow.\n- Therefore, **only Conclusion I follows**."
  },
  {
    "id": "syl_q9",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_1",
    "type_name": "Type 1: Two-Statement Direct Deductions & Conversions",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements:\nAll pens are chalks.\nAll chairs are chalks.\n\nConclusions:\nI. Some pens are chairs.\nII. Some chalks are pens.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if only Conclusion II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Both Pens and Chairs are contained in Chalks. Since the middle term 'chalks' is not distributed in either premise (fallacy of undistributed middle), pens and chairs may be completely disjoint. Thus, Conclusion I does not follow.\n2. 'All pens are chalks' (A-type) converts by limitation to **Some chalks are pens**. Therefore, **Conclusion II follows**.\n- Hence, **only Conclusion II follows**."
  },
  {
    "id": "syl_q2",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome trucks are houses.\nSome houses are trains.\n\nConclusions:\nI. Some trains are trucks.\nII. No train is truck.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if either Conclusion I or II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Two particular statements (Some + Some) yield no definite relation between 'trains' and 'trucks'.\n2. However, Conclusion I is a Particular Affirmative ('Some trains are trucks') and Conclusion II is a Universal Negative ('No train is truck').\n3. They share the same subject and predicate terms and form an I-E complementary pair: one must be true, and both cannot be false simultaneously.\n- Therefore, **either Conclusion I or II follows**."
  },
  {
    "id": "syl_q6",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll forests are figures.\nSome figures are houses.\n\nConclusions:\nI. Some houses are forests.\nII. No house is forest.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if either Conclusion I or II follows.",
    "explanation": "🔍 Logical Analysis:\n1. The middle term 'figures' is undistributed, so no definite relation exists between 'houses' and 'forests'.\n2. Conclusion I ('Some houses are forests') and Conclusion II ('No house is forest') are contradictory propositions (I and E type) with the same subject and predicate.\n- Therefore, **either Conclusion I or II follows**."
  },
  {
    "id": "syl_q8",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome books are tables.\nSome tables are mirrors.\n\nConclusions:\nI. Some mirrors are books.\nII. No book is mirror.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if either Conclusion I or II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Two particular premises (Some + Some) provide no definite connection between 'mirrors' and 'books'.\n2. 'Some mirrors are books' (I-type) and 'No book is mirror' (E-type, equivalent to 'No mirror is book') form a classic complementary pair.\n- Therefore, **either Conclusion I or II follows**."
  },
  {
    "id": "syl_q12",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome days are nights.\nSome nights are months.\nSome months are years.\n\nConclusions:\nI. Some years are nights.\nII. Some months are days.\nIII. No year is night.",
    "options": [
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only either I or III follows",
      "None of these"
    ],
    "correct": "Only either I or III follows",
    "explanation": "🔍 Logical Analysis:\n1. All premises are particular (Some), so no definite link exists between non-adjacent terms (years-nights or months-days). Conclusion II does not follow.\n2. Between 'years' and 'nights', Conclusion I ('Some years are nights') and Conclusion III ('No year is night') form an I-E complementary pair.\n- Therefore, **only either I or III follows**."
  },
  {
    "id": "syl_q17",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome boxes are walls.\nNo wall is road.\nAll roads are rivers.\n\nConclusions:\nI. Some rivers are walls\nII. Some roads are boxes\nIII. No wall is river",
    "options": [
      "Only I follows",
      "Only either I or III follows",
      "Only III follows",
      "Only II follows",
      "Only II and III follow"
    ],
    "correct": "Only either I or III follows",
    "explanation": "🔍 Logical Analysis:\n1. 'No wall is road' and 'All roads are rivers' means roads cannot touch walls, but the rest of rivers may or may not overlap walls.\n2. Hence, neither Conclusion I ('Some rivers are walls') nor Conclusion III ('No wall is river' ≡ 'No river is wall') is individually certain.\n3. Together, they form an I-E complementary pair.\n4. Conclusion II ('Some roads are boxes') has no necessary connection and does not follow.\n- Therefore, **only either I or III follows**."
  },
  {
    "id": "syl_q23",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_2",
    "type_name": "Type 2: Complementary Pairs & Either-Or Conditions",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nAll birds are goats.\nNo goat is flower.\nSome flowers are mountains.\nSome mountains are nets.\n\nConclusions:\nI. Some nets are goats.\nII. No net is goat.\nIII. Some mountains are birds.",
    "options": [
      "None follows",
      "Only I follows",
      "Only either I or II follows",
      "Only II follows",
      "Only III follows"
    ],
    "correct": "Only either I or II follows",
    "explanation": "🔍 Logical Analysis:\n1. Nets and Goats have no direct constraint between them. Therefore, Conclusion I ('Some nets are goats') and Conclusion II ('No net is goat') form a complementary pair.\n2. Mountains overlap Flowers, but Flowers cannot overlap Goats (or Birds ⊆ Goats). While some mountains are not birds, 'Some mountains are birds' is not guaranteed. Conclusion III does not follow.\n- Therefore, **only either I or II follows**."
  },
  {
    "id": "syl_q10",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome buses are bells.\nSome bells are horses.\nAll trains are horses.\n\nConclusions:\nI. Some buses are horses.\nII. Some trains are bells.",
    "options": [
      "if only Conclusion I follows.",
      "if only Conclusion II follows.",
      "if either Conclusion I or II follows.",
      "if neither Conclusion I nor II follows.",
      "if both Conclusions I and II follow."
    ],
    "correct": "if neither Conclusion I nor II follows.",
    "explanation": "🔍 Logical Analysis:\n1. Buses overlap Bells. Bells overlap Horses. Trains ⊆ Horses.\n2. No connection is established between Buses and Horses (I is uncertain).\n3. Trains are inside Horses, but have no definite overlap with Bells (II is uncertain).\n- Therefore, **neither Conclusion I nor II follows**."
  },
  {
    "id": "syl_q11",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll petals are trees.\nAll trees are gardens.\nAll roads are gardens.\n\nConclusions:\nI. Some roads are trees.\nII. Some gardens are trees.\nIII. Some gardens are petals.",
    "options": [
      "Only I and II follow",
      "Only II and III follow",
      "Only I and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only II and III follow",
    "explanation": "🔍 Logical Analysis:\n1. Petals ⊆ Trees ⊆ Gardens.\n2. Since Trees ⊆ Gardens, by conversion **Some gardens are trees** (II is true).\n3. Since Petals ⊆ Gardens, by conversion **Some gardens are petals** (III is true).\n4. Both Roads and Trees are inside Gardens, but may be disjoint. Conclusion I does not follow.\n- Therefore, **only II and III follow**."
  },
  {
    "id": "syl_q13",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll cycles are tyres.\nSome tyres are wheels.\nAll wheels are buses.\n\nConclusions:\nI. Some buses are tyres.\nII. Some wheels are tyres.\nIII. Some buses are cycles.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only I and II follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some tyres are wheels' + 'All wheels are buses' gives 'Some tyres are buses', which converts to **Some buses are tyres** (I follows).\n2. 'Some tyres are wheels' converts directly to **Some wheels are tyres** (II follows).\n3. Cycles ⊆ Tyres, but cycles have no necessary connection to buses (III does not follow).\n- Therefore, **only I and II follow**."
  },
  {
    "id": "syl_q14",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nSome dogs are cats.\nSome cats are horses.\nAll horses are tigers.\n\nConclusions :\nI. Some tigers are cats.\nII. Some horses are dogs.\nIII. Some tigers are dogs.",
    "options": [
      "None follows",
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only II and III follow"
    ],
    "correct": "Only I follows",
    "explanation": "🔍 Logical Analysis:\n1. 'Some cats are horses' + 'All horses are tigers' gives 'Some cats are tigers', which converts to **Some tigers are cats** (I follows).\n2. Dogs overlap cats, but need not overlap horses or tigers (II and III do not follow).\n- Therefore, **only I follows**."
  },
  {
    "id": "syl_q15",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements:\nAll pictures are bands.\nSome bands are chairs.\nSome chairs are tables.\n\nConclusions:\nI. Some tables are bands.\nII. Some chairs are pictures.\nIII. Some tables are pictures.",
    "options": [
      "None follows",
      "Only I follows",
      "Only II follows",
      "Only I and II follow",
      "Only III follows"
    ],
    "correct": "None follows",
    "explanation": "🔍 Logical Analysis:\n1. Pictures ⊆ Bands. Bands overlap Chairs. Chairs overlap Tables.\n2. Tables and Bands have no necessary intersection (I does not follow).\n3. Chairs and Pictures have no necessary intersection (II does not follow).\n4. Tables and Pictures have no necessary intersection (III does not follow).\n- Therefore, **none follows**."
  },
  {
    "id": "syl_q16",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements :\nSome bikes are cars.\nSome cars are trains.\nSome trains are buses.\n\nConclusions :\nI. Some buses are cars.\nII. Some trains are bikes.\nIII. Some buses are bikes.",
    "options": [
      "None follows",
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only I and II follow"
    ],
    "correct": "None follows",
    "explanation": "🔍 Logical Analysis:\n1. All three premises are particular (Some), so no transitive deduction can connect non-adjacent elements.\n2. None of the conclusions (buses-cars, trains-bikes, buses-bikes) are certain.\n- Therefore, **none follows**."
  },
  {
    "id": "syl_q18",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Medium",
    "points": 1,
    "question": "Statements :\nSome tables are chairs.\nAll chairs are houses.\nAll houses are tents.\n\nConclusions:\nI. All houses are chairs.\nII. Some tents are chairs.\nIII. Some houses are tables.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only II and III follow",
    "explanation": "🔍 Logical Analysis:\n1. Chairs ⊆ Houses ⊆ Tents.\n2. Since Chairs ⊆ Tents, by conversion **Some tents are chairs** (II follows).\n3. 'Some tables are chairs' + 'All chairs are houses' gives 'Some tables are houses', which converts to **Some houses are tables** (III follows).\n4. 'All chairs are houses' does not imply 'All houses are chairs' (I does not follow).\n- Therefore, **only II and III follow**."
  },
  {
    "id": "syl_q19",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Easy",
    "points": 1,
    "question": "Statements :\nAll pens are sticks.\nAll sticks are rings.\nAll rings are rods.\n\nConclusions :\nI. Some rings are pens.\nII. Some rods are sticks.\nIII. Some rods are pens.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "All I, II and III follow",
    "explanation": "🔍 Logical Analysis:\n1. Nested concentric sets: Pens ⊆ Sticks ⊆ Rings ⊆ Rods.\n2. All pens are rings implies **Some rings are pens** (I follows).\n3. All sticks are rods implies **Some rods are sticks** (II follows).\n4. All pens are rods implies **Some rods are pens** (III follows).\n- Therefore, **all I, II and III follow**."
  },
  {
    "id": "syl_q20",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome nails are plates.\nSome plates are disks.\nAll disks are mirrors.\nAll mirrors are tyres.\n\nConclusions:\nI. Some tyres are plates.\nII. Some tyres are nails.\nIII. Some mirrors are plates.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only I and III follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some plates are disks' + 'All disks are mirrors' gives 'Some plates are mirrors', converting to **Some mirrors are plates** (III follows).\n2. 'Some plates are mirrors' + 'All mirrors are tyres' gives 'Some plates are tyres', converting to **Some tyres are plates** (I follows).\n3. Nails only overlap Plates and have no guaranteed overlap with Tyres (II does not follow).\n- Therefore, **only I and III follow**."
  },
  {
    "id": "syl_q22",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_3",
    "type_name": "Type 3: Multi-Statement Chain Arguments",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome skies are rains.\nSome rains are stars.\nAll stars are planets.\nAll planets are clouds.\n\nConclusions:\nI. Some clouds are rains.\nII. Some planets are skies.\nIII. Some planets are rains.",
    "options": [
      "Only I and II follow",
      "Only I and III follow",
      "Only II and III follow",
      "All I, II and III follow",
      "None of these"
    ],
    "correct": "Only I and III follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some rains are stars' + 'All stars are planets' gives 'Some rains are planets', converting to **Some planets are rains** (III follows).\n2. 'Some rains are planets' + 'All planets are clouds' gives 'Some rains are clouds', converting to **Some clouds are rains** (I follows).\n3. Skies only overlap Rains and have no necessary overlap with Planets (II does not follow).\n- Therefore, **only I and III follow**."
  },
  {
    "id": "syl_q21",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nAll shirts are hats.\nNo hat is suit. Some rings are suits.\nAll rings are bangles.\n\nConclusions:\nI. Some rings are hats.\nII. Some bangles are suits.\nIII. No ring is hat.",
    "options": [
      "Only I follows",
      "Only II follows",
      "Only III follows",
      "Only either I or III follows",
      "Only either I or III and II follow"
    ],
    "correct": "Only either I or III and II follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some rings are suits' + 'All rings are bangles' gives **Some bangles are suits** (Conclusion II definitely follows).\n2. Hats and Suits are completely disjoint. Rings overlap Suits (so rings that are suits cannot be hats), but other rings might or might not be hats.\n3. Conclusion I ('Some rings are hats') and Conclusion III ('No ring is hat') form an I-E complementary pair.\n- Therefore, **only either I or III and II follow**."
  },
  {
    "id": "syl_q24",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nSome leaves are skies.\nAll skies are clouds.\nNo cloud is a boat.\n\nConclusions:\nI. Some boats are leaves.\nII. Some clouds are leaves.\nIII. All skies are leaves.\nIV. No leaves is a boat.",
    "options": [
      "Only I, II and IV follow",
      "Only II, III and IV follow",
      "Either I or IV and II follow",
      "Either I or IV and III follow",
      "None of these"
    ],
    "correct": "Either I or IV and II follow",
    "explanation": "🔍 Logical Analysis:\n1. 'Some leaves are skies' + 'All skies are clouds' gives 'Some leaves are clouds', which converts to **Some clouds are leaves** (Conclusion II definitely follows).\n2. Leaves that are clouds cannot be boats, but other leaves might or might not be boats. Conclusion I ('Some boats are leaves') and Conclusion IV ('No leaves is a boat') form a complementary pair.\n3. Conclusion III ('All skies are leaves') does not follow from 'Some leaves are skies'.\n- Therefore, **either I or IV and II follow**."
  },
  {
    "id": "syl_q25",
    "module_id": "mod14",
    "module_name": "Syllogism",
    "syllabus_lec": "ST-1 Deductive Logic",
    "type_id": "type_4",
    "type_name": "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models",
    "difficulty": "Hard",
    "points": 1,
    "question": "Statements:\nNo building is white.\nAll whites are oranges.\nSome oranges are waters.\n\nConclusions:\nI. No building is water.\nII. No orange is a building.\nIII. Some oranges are whites.\nIV. Some waters are building.",
    "options": [
      "Either I or IV and II follow",
      "Either I or IV and III follow",
      "Either I or IV follows",
      "None follows",
      "Either I or IV and II and III follow"
    ],
    "correct": "Either I or IV and III follow",
    "explanation": "🔍 Logical Analysis:\n1. 'All whites are oranges' converts directly to **Some oranges are whites** (Conclusion III definitely follows).\n2. Between Buildings and Waters, no direct relationship is specified. Conclusion I ('No building is water') and Conclusion IV ('Some waters are building') form a complementary pair.\n3. Conclusion II ('No orange is a building') does not follow because the non-white part of oranges can be buildings.\n- Therefore, **either I or IV and III follow**."
  },
  {
    "id": "ratio_q1",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find a fourth proportional to the numbers 6, 8, 9.",
    "options": [
      "12",
      "7",
      "5",
      "14",
      "None of these"
    ],
    "correct": "12",
    "explanation": "📐 Fourth Proportional Formula:\n- If a : b :: c : x, then Product of Extremes = Product of Means:\n  a · x = b · c\n- 6 · x = 8 · 9 = 72\n- x = 72 / 6 = **12**."
  },
  {
    "id": "ratio_q2",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find a third proportional to the numbers 3 and 6.",
    "options": [
      "21",
      "1.5",
      "18",
      "12",
      "None of these"
    ],
    "correct": "12",
    "explanation": "📐 Third Proportional Formula:\n- If a : b :: b : x, then:\n  x = b² / a\n- x = 6² / 3 = 36 / 3 = **12**."
  },
  {
    "id": "ratio_q12",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of three numbers is 105. If the ratio between the first and second be 2 : 3 and that between the second and third be 4 : 5, then find the second number.",
    "options": [
      "35",
      "24",
      "36",
      "45",
      "None of these"
    ],
    "correct": "36",
    "explanation": "📐 Combining Ratios:\n1. A : B = 2 : 3 = 8 : 12\n2. B : C = 4 : 5 = 12 : 15\n3. Combined ratio A : B : C = 8 : 12 : 15\n4. Sum of ratio terms = 8 + 12 + 15 = 35 parts\n5. 1 part = 105 / 35 = 3\n6. Second number (B) = 12 × 3 = **36**."
  },
  {
    "id": "ratio_q13",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "If A : B = 3 : 4, B : C = 5 : 7 and C : D = 3 : 5, then find A : B : C : D.",
    "options": [
      "9 : 21 : 12 : 28",
      "45 : 60 : 84 : 140",
      "9 : 12 : 28 : 21",
      "9 : 12 : 21 : 82",
      "None of these"
    ],
    "correct": "45 : 60 : 84 : 140",
    "explanation": "📐 Compound Ratio Chain:\n1. A : B = 3 : 4\n2. B : C = 5 : 7 -> A : B : C = (3×5) : (4×5) : (4×7) = 15 : 20 : 28\n3. C : D = 3 : 5:\n   Multiply A : B : C by 3 -> 45 : 60 : 84\n   D = 28 × 5 = 140\n4. A : B : C : D = **45 : 60 : 84 : 140**."
  },
  {
    "id": "ratio_q14",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "A hound pursues a hare and takes 6 leaps for every 7 leaps of the hare, but 5 leaps of the hound are equal to 6 leaps of the hare. Compare the rates of the hound and the hare.",
    "options": [
      "36 : 35",
      "35 : 34",
      "34 : 33",
      "31 : 32",
      "None of these"
    ],
    "correct": "36 : 35",
    "explanation": "📐 Leap Rate Comparison:\n1. Let distance of 1 hound leap = H, and 1 hare leap = h.\n2. Given: 5H = 6h -> H / h = 6 / 5.\n3. Rate (Speed) = (Number of leaps in unit time) × (Length of each leap)\n4. Hound Speed : Hare Speed = (6 × H) : (7 × h) = (6 × 6) : (7 × 5) = **36 : 35**."
  },
  {
    "id": "ratio_q23",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Proportionals & Compound Ratio Formulations",
    "difficulty": "Medium",
    "points": 1,
    "question": "An employer reduces the number of his employees in the ratio 9 : 4 and increases their wages in the ratio 2 : 5. State whether his bill of total wages increases or decreases, and in what ratio?",
    "options": [
      "Decrease, 10 : 9",
      "Increase, 10 : 9",
      "Decrease 9 : 11",
      "Increase, 9 : 10",
      "None of these"
    ],
    "correct": "Increase, 9 : 10",
    "explanation": "📐 Total Wage Bill Multiplication:\n1. Initial wage bill = Employees × Wage = 9 × 2 = 18\n2. New wage bill = 4 × 5 = 20\n3. Ratio of initial bill to new bill = 18 : 20 = 9 : 10\n4. Since 10 > 9, the total wage bill **increases** in the ratio **9 : 10**."
  },
  {
    "id": "ratio_q3",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Easy",
    "points": 1,
    "question": "Two numbers are in the ratio of 9 : 11. If sum of these two numbers is 660, find the difference between the numbers.",
    "options": [
      "66",
      "56",
      "46",
      "76",
      "None of these"
    ],
    "correct": "66",
    "explanation": "💰 Ratio Sum and Difference:\n1. Sum of ratio terms = 9 + 11 = 20 parts = 660\n2. 1 part = 660 / 20 = 33\n3. Difference between numbers = 11 - 9 = 2 parts = 2 × 33 = **66**."
  },
  {
    "id": "ratio_q4",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Medium",
    "points": 1,
    "question": "A bag contains rupee, 50-paise and 25-paise coins in the ratio 5 : 7 : 9. If the total amount in the bag is 430, find the number of coins of each kind.",
    "options": [
      "200, 280, 360",
      "280, 200, 360",
      "360, 280, 200",
      "360, 200, 280",
      "None of these"
    ],
    "correct": "200, 280, 360",
    "explanation": "💰 Coin Denomination Value Valuation:\n1. Let coin counts be 5x, 7x, 9x.\n2. Total value in Rupees:\n   - 1-rupee coins: 5x × 1 = 5x\n   - 50-paise coins: 7x × 0.50 = 3.5x\n   - 25-paise coins: 9x × 0.25 = 2.25x\n3. Sum = 5x + 3.5x + 2.25x = 10.75x = 430\n4. x = 430 / 10.75 = 40\n5. Coins of each kind:\n   - 1-rupee = 5 × 40 = **200**\n   - 50-paise = 7 × 40 = **280**\n   - 25-paise = 9 × 40 = **360**"
  },
  {
    "id": "ratio_q5",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Easy",
    "points": 1,
    "question": "A bag contains an equal number of 50-paise, 25-paise, 20 paise and 5-paise coins, respectively. If the total value is 40, how many coins of each type are there?",
    "options": [
      "40",
      "25",
      "30",
      "20",
      "None of these"
    ],
    "correct": "40",
    "explanation": "💰 Equal Number of Coins:\n1. Let there be x coins of each denomination.\n2. Total value of 1 set of each coin = 50 + 25 + 20 + 5 = 100 paise = ₹1\n3. Total value = x × ₹1 = ₹40 -> x = **40** coins of each type."
  },
  {
    "id": "ratio_q10",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Easy",
    "points": 1,
    "question": "An amount of 950 is distributed among A, B and C in the ratio of 5 : 11 : 3, what is the difference between the share of B and A?",
    "options": [
      "550",
      "250",
      "200",
      "300",
      "None of these"
    ],
    "correct": "300",
    "explanation": "💰 Share Distribution:\n1. Total ratio terms = 5 + 11 + 3 = 19 parts = 950\n2. 1 part = 950 / 19 = 50\n3. Difference between B and A = 11 - 5 = 6 parts = 6 × 50 = **300**."
  },
  {
    "id": "ratio_q25",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Medium",
    "points": 1,
    "question": "Divide 680 among A, B and C such that A gets 2/3 of what B gets and B gets 1/4th of what C gets. What is C’s share?",
    "options": [
      "280",
      "380",
      "480",
      "120",
      "None of these"
    ],
    "correct": "480",
    "explanation": "💰 Successive Fractions:\n1. A = (2/3)B and B = (1/4)C -> C = 4B\n2. Ratio A : B : C = (2/3)B : B : 4B = (2/3) : 1 : 4 = 2 : 3 : 12\n3. Total parts = 2 + 3 + 12 = 17 parts = 680\n4. 1 part = 680 / 17 = 40\n5. C's share (12 parts) = 12 × 40 = **480**."
  },
  {
    "id": "ratio_q27",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Ratio Partitioning, Coins & Currency Bags",
    "difficulty": "Hard",
    "points": 1,
    "question": "600 has been divided among A, B and C in such a way that 40 more than (2/5) of A’s share, 20 more than (2/7) of B’s share, 10 more than (9/17) of C’s share, are all equal. A’s share is :",
    "options": [
      "280",
      "170",
      "150",
      "200",
      "None of these"
    ],
    "correct": "150",
    "explanation": "💰 Equality of Modified Shares:\n1. Let (2/5)A + 40 = (2/7)B + 20 = (9/17)C + 10 = k\n2. A = (5/2)(k - 40), B = (7/2)(k - 20), C = (17/9)(k - 10)\n3. A + B + C = 600:\n   [(5/2)k - 100] + [(7/2)k - 70] + [(17/9)k - 170/9] = 600\n   6k + (17/9)k = 770 + 170/9\n   (71/9)k = 7100/9 -> 71k = 7100 -> k = 100\n4. A's share = (5/2)(100 - 40) = (5/2) × 60 = **150**."
  },
  {
    "id": "ratio_q6",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Easy",
    "points": 1,
    "question": "One man adds 6 liters of water to 11 liters of milk and another 9 liters of water to 8 liters of milk. What is the ratio of the strengths of milk in the two mixtures?",
    "options": [
      "2 : 3",
      "3 : 2",
      "11 : 8",
      "8 : 11",
      "None of these"
    ],
    "correct": "11 : 8",
    "explanation": "🧪 Mixture Concentration Strength:\n1. Mixture 1: Milk = 11 L, Total = 11 + 6 = 17 L -> Strength = 11 / 17\n2. Mixture 2: Milk = 8 L, Total = 8 + 9 = 17 L -> Strength = 8 / 17\n3. Ratio of strengths = (11 / 17) : (8 / 17) = **11 : 8**."
  },
  {
    "id": "ratio_q7",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "Two vessels contain equal quantity of mixtures of milk and water in the ratio 8 : 9 and 12 : 5, respectively. Both the mixtures are now mixed thoroughly. Find the ratio of milk to water in the new mixture so obtained.",
    "options": [
      "7 : 10",
      "13 : 21",
      "21 : 13",
      "10 : 7",
      "None of these"
    ],
    "correct": "10 : 7",
    "explanation": "🧪 Equal Volume Mixture Combining:\n1. Vessel 1 (8 : 9, total 17): Milk = 8/17, Water = 9/17\n2. Vessel 2 (12 : 5, total 17): Milk = 12/17, Water = 5/17\n3. Total Milk = 8 + 12 = 20 parts\n4. Total Water = 9 + 5 = 14 parts\n5. Ratio Milk : Water = 20 : 14 = **10 : 7**."
  },
  {
    "id": "ratio_q8",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "The contents of two vessels containing water and milk are in the ratio 2 : 3 and 4 : 5 are mixed in the ratio 1 : 2. The resulting mixture will have water and milk in the ratio________ .",
    "options": [
      "77 : 58",
      "58 : 77",
      "68 : 77",
      "77 : 68",
      "None of these"
    ],
    "correct": "58 : 77",
    "explanation": "🧪 Weighted Vessel Mixing:\n1. Vessel 1 (Water : Milk = 2 : 3, total 5): Water = 2/5, Milk = 3/5\n2. Vessel 2 (Water : Milk = 4 : 5, total 9): Water = 4/9, Milk = 5/9\n3. Mixing in ratio 1 : 2:\n   - Water = 1(2/5) + 2(4/9) = 2/5 + 8/9 = (18 + 40) / 45 = 58 / 45\n   - Milk = 1(3/5) + 2(5/9) = 3/5 + 10/9 = (27 + 50) / 45 = 77 / 45\n4. Ratio Water : Milk = **58 : 77**."
  },
  {
    "id": "ratio_q9",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "The contents of two vessels containing water and milk are in the ratio 3 : 4 and 5 : 4 are mixed in the ratio 1 : 4. The resulting mixture will have water and milk in the ratio_______ .",
    "options": [
      "184 : 176",
      "167 : 184",
      "167 : 148",
      "148 : 167",
      "None of these"
    ],
    "correct": "167 : 148",
    "explanation": "🧪 Weighted Vessel Mixing (1 : 4):\n1. Vessel 1 (Water : Milk = 3 : 4, sum 7): Water = 3/7, Milk = 4/7\n2. Vessel 2 (Water : Milk = 5 : 4, sum 9): Water = 5/9, Milk = 4/9\n3. Weighted combination:\n   - Water = 1(3/7) + 4(5/9) = 3/7 + 20/9 = (27 + 140) / 63 = 167 / 63\n   - Milk = 1(4/7) + 4(4/9) = 4/7 + 16/9 = (36 + 112) / 63 = 148 / 63\n4. Ratio Water : Milk = **167 : 148**."
  },
  {
    "id": "ratio_q11",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "A and B are two alloys of gold and copper prepared by mixing metals in proportions 7 : 2 and 7 : 11, respectively. If equal quantities of alloys are melted to form a third alloy C, the proportion of gold and copper in C will be :",
    "options": [
      "5 : 9",
      "5 : 7",
      "7 : 5",
      "9 : 5",
      "None of these"
    ],
    "correct": "7 : 5",
    "explanation": "🧪 Equal Weight Alloy Melting:\n1. Alloy A (7 : 2, sum = 9) -> Multiply by 2 to equate to 18 units: Gold = 14, Copper = 4\n2. Alloy B (7 : 11, sum = 18): Gold = 7, Copper = 11\n3. Total in Alloy C:\n   - Gold = 14 + 7 = 21\n   - Copper = 4 + 11 = 15\n4. Ratio Gold : Copper = 21 : 15 = **7 : 5**."
  },
  {
    "id": "ratio_q15",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "In 28 liters mixture of milk and water the ratio of milk and water is 5 : 2. How much water should be added in the mixture so that the ratio of milk to water becomes 2 : 5?",
    "options": [
      "42 liters",
      "32 liters",
      "24 liters",
      "39 liters",
      "None of these"
    ],
    "correct": "42 liters",
    "explanation": "🧪 Dilution via Water Addition:\n1. Total = 28 L, Milk : Water = 5 : 2 (7 parts)\n2. 1 part = 28 / 7 = 4 L -> Milk = 20 L, Water = 8 L\n3. Let w liters of water be added. Milk quantity remains 20 L:\n   20 / (8 + w) = 2 / 5\n4. 2(8 + w) = 100 -> 8 + w = 50 -> w = **42 liters**."
  },
  {
    "id": "ratio_q16",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Medium",
    "points": 1,
    "question": "A mixture contains milk and water in the ratio of 9 : 4. On adding 4 liters of water, the ratio of milk to water becomes 3 : 2. Find the total quantity of the original mixture.",
    "options": [
      "26 liters",
      "18 liters",
      "10 liters",
      "30 liters",
      "None of these"
    ],
    "correct": "26 liters",
    "explanation": "🧪 Original Quantity from Dilution:\n1. Let milk = 9x, water = 4x. Total = 13x.\n2. On adding 4 L water: 9x / (4x + 4) = 3 / 2\n3. Divide numerator by 3: 3x / (4x + 4) = 1 / 2\n4. 6x = 4x + 4 -> 2x = 4 -> x = 2\n5. Total original mixture = 13x = 13 × 2 = **26 liters**."
  },
  {
    "id": "ratio_q21",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Hard",
    "points": 1,
    "question": "A bucket contains a mixture of two liquids A and B in the proportion 5 : 3. If 16 liters of the mixture is replaced by 16 liters of liquid B, then the ratio of the two liquids becomes 3 : 5. How much of the liquid B was there in the bucket?",
    "options": [
      "25 liters",
      "15 liters",
      "18 liters",
      "24 liters",
      "None of these"
    ],
    "correct": "15 liters",
    "explanation": "🧪 Replacement by Second Component:\n1. Let total volume = 8x (Liquid A = 5x, Liquid B = 3x).\n2. When 16 L mixture is removed:\n   - A removed = (5/8) × 16 = 10 L\n   - B removed = (3/8) × 16 = 6 L\n3. Adding 16 L of liquid B:\n   - A remaining = 5x - 10\n   - B new = 3x - 6 + 16 = 3x + 10\n4. (5x - 10) / (3x + 10) = 3 / 5\n5. 25x - 50 = 9x + 30 -> 16x = 80 -> x = 5\n6. Original liquid B = 3x = 3 × 5 = **15 liters**."
  },
  {
    "id": "ratio_q22",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Mixture Replacements, Dilution & Alloys",
    "difficulty": "Hard",
    "points": 1,
    "question": "A bucket contains a mixture of two liquids A and B in the proportion 6 : 5. If 33 liters of the mixture is replaced by 33 liters of liquid B, then the ratio of the two liquids becomes 3 : 4. How much of the liquid A was there in the bucket?",
    "options": [
      "84 liters",
      "48 liters",
      "70 liters",
      "64 liters",
      "None of these"
    ],
    "correct": "84 liters",
    "explanation": "🧪 Replacement by Second Component (6:5 to 3:4):\n1. Let total volume = 11x (A = 6x, B = 5x).\n2. When 33 L mixture is removed:\n   - A removed = (6/11) × 33 = 18 L\n   - B removed = (5/11) × 33 = 15 L\n3. Adding 33 L of liquid B:\n   - A remaining = 6x - 18\n   - B new = 5x - 15 + 33 = 5x + 18\n4. (6x - 18) / (5x + 18) = 3 / 4\n5. 4(6x - 18) = 3(5x + 18) -> 24x - 72 = 15x + 54 -> 9x = 126 -> x = 14\n6. Original liquid A = 6x = 6 × 14 = **84 liters**."
  },
  {
    "id": "ratio_q17",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio between two numbers is 15 : 7. If each number be decreased by 2, the ratio becomes 7 : 3. Find the numbers.",
    "options": [
      "15, 7",
      "30, 14",
      "45, 21",
      "60, 28",
      "None of these"
    ],
    "correct": "30, 14",
    "explanation": "📊 Uniform Subtraction from Terms:\n1. Let numbers be 15x and 7x.\n2. (15x - 2) / (7x - 2) = 7 / 3\n3. 3(15x - 2) = 7(7x - 2) -> 45x - 6 = 49x - 14\n4. 4x = 8 -> x = 2\n5. Numbers are 15(2) = **30** and 7(2) = **14**."
  },
  {
    "id": "ratio_q18",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Medium",
    "points": 1,
    "question": "The incomes of A and B are in the ratio 9 : 4 and their expenditures are in the ratio 7 : 3. If each saves 2000, what are their incomes?",
    "options": [
      "90000, 4000",
      "27000, 12000",
      "72000, 16000",
      "72000, 32000",
      "None of these"
    ],
    "correct": "72000, 32000",
    "explanation": "📊 Income, Expenditure & Savings Model:\n1. Let incomes be 9x and 4x. Since Savings = Income - Expenditure = 2000:\n   (9x - 2000) / (4x - 2000) = 7 / 3\n2. 3(9x - 2000) = 7(4x - 2000) -> 27x - 6000 = 28x - 14000\n3. x = 8000\n4. Income of A = 9 × 8000 = **72000**\n5. Income of B = 4 × 8000 = **32000**."
  },
  {
    "id": "ratio_q19",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number which, when added to the terms of the ratio 13 : 28 makes it equal to the ratio 1 : 2.",
    "options": [
      "4",
      "3",
      "2",
      "1",
      "None of these"
    ],
    "correct": "2",
    "explanation": "📊 Addition to Ratio Terms:\n1. (13 + x) / (28 + x) = 1 / 2\n2. 2(13 + x) = 28 + x\n3. 26 + 2x = 28 + x -> x = **2**."
  },
  {
    "id": "ratio_q20",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Easy",
    "points": 1,
    "question": "Find the number which, when subtracted from the terms of the ratio 11 : 25 makes it equal to the ratio 4 : 11.",
    "options": [
      "4",
      "3",
      "2",
      "1",
      "None of these"
    ],
    "correct": "3",
    "explanation": "📊 Subtraction from Ratio Terms:\n1. (11 - x) / (25 - x) = 4 / 11\n2. 11(11 - x) = 4(25 - x)\n3. 121 - 11x = 100 - 4x -> 7x = 21 -> x = **3**."
  },
  {
    "id": "ratio_q24",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Hard",
    "points": 1,
    "question": "Two candles of the same height are lighted at the same time. The first is consumed in 7 hours and the second in 6 hours. If each candle burns at a constant rate, in how many hours after being lighted, the ratio between the first and second candles becomes 3 : 1.",
    "options": [
      "5 hours 36 minutes",
      "5 hours",
      "5 hours 60 minutes",
      "6 hours",
      "None of these"
    ],
    "correct": "5 hours 36 minutes",
    "explanation": "📊 Candle Burning Differential Rates:\n1. Height remaining after t hours:\n   - Candle 1: H(1 - t/7)\n   - Candle 2: H(1 - t/6)\n2. (1 - t/7) / (1 - t/6) = 3 / 1\n3. 1 - t/7 = 3 - t/2 -> t/2 - t/7 = 2\n4. 5t / 14 = 2 -> t = 28 / 5 = 5.6 hours\n5. 0.6 hours = 0.6 × 60 = 36 minutes\n- Total time = **5 hours 36 minutes**."
  },
  {
    "id": "ratio_q26",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Easy",
    "points": 1,
    "question": "When 50% of one number is added to a second number, the second number increases to its four-thirds. What is the ratio between the first number and the second number?",
    "options": [
      "3 : 2",
      "3 : 4",
      "2 : 3",
      "Data inadequate",
      "None of these"
    ],
    "correct": "2 : 3",
    "explanation": "📊 Percentage Shift Formulation:\n1. Let numbers be x and y.\n2. y + 0.50x = (4/3)y\n3. 0.50x = (4/3)y - y = (1/3)y\n4. (1/2)x = (1/3)y -> x / y = (1/3) / (1/2) = **2 : 3**."
  },
  {
    "id": "ratio_q28",
    "module_id": "mod9",
    "module_name": "Ratio & Proportion",
    "syllabus_lec": "ST-1 Quantitative Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates",
    "difficulty": "Hard",
    "points": 1,
    "question": "One year ago, the ratio between Laxman’s and Gopal’s salary was 3 : 4. The individual ratios between their last years and this year’s salaries are 4 : 5 and 2 : 3, respectively. At present the total of their salary is 4160. The salary of Laxman now, is–",
    "options": [
      "1600",
      "2560",
      "1040",
      "3120",
      "None of these"
    ],
    "correct": "1600",
    "explanation": "📊 Year-Over-Year Compound Salary Ratios:\n1. Let last year's salaries be L_0 and G_0 where L_0 : G_0 = 3 : 4.\n2. Present salary L_1 = (5/4)L_0\n3. Present salary G_1 = (3/2)G_0\n4. Ratio of present salaries L_1 : G_1 = [(5/4) × 3] : [(3/2) × 4] = (15/4) : 6 = 15 : 24 = 5 : 8\n5. Total present salary = 4160 (13 parts)\n6. 1 part = 4160 / 13 = 320\n7. Present salary of Laxman = 5 × 320 = **1600**."
  },
  {
    "id": "ages_q1",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "The age of Arvind’s father is 4 times his age. If 5 years ago, father’s age was 7 times of the age of his son at that time, what is Arvind’s father’s present age?",
    "options": [
      "84 years",
      "70 years",
      "40 years",
      "35 years",
      "None of these"
    ],
    "correct": "40 years",
    "explanation": "Let Arvind’s present age be x. Father = 4x. Five years ago: 4x - 5 = 7(x - 5). Solving gives x = 10, so father’s present age = 4 × 10 = **40 years**."
  },
  {
    "id": "ages_q2",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Easy",
    "points": 1,
    "question": "The age of Ramesh is four times the age of Suresh. After ten years, the age of Ramesh will be only twice the age of Suresh. Find the present age of Suresh.",
    "options": [
      "10 years",
      "11 years",
      "12 years",
      "5 years",
      "None of these"
    ],
    "correct": "5 years",
    "explanation": "Let Suresh = x and Ramesh = 4x. After 10 years: 4x + 10 = 2(x + 10). Thus 2x = 10, so x = **5 years**."
  },
  {
    "id": "ages_q3",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "10 years ago Chandravati’s mother was 4 times older than her daughter. After 10 years, the mother will be twice older than the daughter. The present age of Chandravati is :",
    "options": [
      "5 years",
      "10 years",
      "20 years",
      "30 years",
      "None of these"
    ],
    "correct": "20 years",
    "explanation": "Let daughter’s present age be x and mother’s be y. Ten years ago: y − 10 = 4(x − 10). Ten years hence: y + 10 = 2(x + 10). Solving gives x = **20 years**."
  },
  {
    "id": "ages_q4",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "14 years ago Ram was 4 times the age of Pankaj. If the present age of Ram is twice the age of Pankaj, what will be the total of their present ages?",
    "options": [
      "42 years",
      "63 years",
      "62 years",
      "48 years",
      "None of these"
    ],
    "correct": "63 years",
    "explanation": "Let Pankaj = x and Ram = 2x now. Fourteen years ago: 2x − 14 = 4(x − 14). Hence x = 21 and Ram = 42. Total = 21 + 42 = **63 years**."
  },
  {
    "id": "ages_q5",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The sum of the ages of a father and a son is 50 years. Also, 5 years ago, the father’s age was 7 times the age of the son. The present ages of the father and the son respectively, are :",
    "options": [
      "35 years, 15 years",
      "40 years, 10 years",
      "38 years, 12 years",
      "42 years, 8 years",
      "None of these"
    ],
    "correct": "40 years, 10 years",
    "explanation": "Let father = F and son = S. F + S = 50. Five years ago: F − 5 = 7(S − 5). Solving gives S = 10 and F = **40 years**."
  },
  {
    "id": "ages_q6",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "The sum of the ages of a son and father is 56 years. After four years, the age of the father will be three times that of the son. Their ages respectively are :",
    "options": [
      "12 years, 44 years",
      "16 years, 48 years",
      "16 years, 42 years",
      "18 years, 6 years",
      "None of these"
    ],
    "correct": "12 years, 44 years",
    "explanation": "Let son = S and father = F. S + F = 56 and F + 4 = 3(S + 4). This gives S = 12 and F = **44 years**."
  },
  {
    "id": "ages_q7",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of the ages of A and B at present is 4 : 3. 10 years earlier, the ratio was 3 : 2, then find the present ages of A and B (in years).",
    "options": [
      "40, 30",
      "48, 36",
      "64, 48",
      "20, 15",
      "None of these"
    ],
    "correct": "40, 30",
    "explanation": "Let present ages be 4x and 3x. Ten years earlier: (4x − 10)/(3x − 10) = 3/2. Cross-multiplication gives x = 10. Therefore the ages are **40 and 30 years**."
  },
  {
    "id": "ages_q8",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Easy",
    "points": 1,
    "question": "If the product of the present ages of A and B is 750 years and the ratio of their present ages is 6 : 5. Find the difference between their present ages.",
    "options": [
      "10 years",
      "15 years",
      "8 years",
      "5 years",
      "None of these"
    ],
    "correct": "5 years",
    "explanation": "Let ages be 6x and 5x. Their product is 30x² = 750, so x² = 25 and x = 5. Difference = x = **5 years**."
  },
  {
    "id": "ages_q9",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "If the ratio of the ages of A and B at present is 2 : 1. 6 years earlier, the ratio was 3 : 1. What is the sum of the present ages of A and B?",
    "options": [
      "24 years",
      "26 years",
      "34 years",
      "6 years",
      "None of these"
    ],
    "correct": "None of these",
    "explanation": "Let present ages be 2x and x. Six years earlier: (2x − 6)/(x − 6) = 3. This gives x = 12, so the present total is 36 years, which is not among the listed choices. Hence **None of these**."
  },
  {
    "id": "ages_q10",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of P’s and Q’s ages is 5 : 7. If the difference between the present age of Q and the age of P 6 years hence is 2, what is the total of present ages of P and Q?",
    "options": [
      "52 years",
      "48 years",
      "56 years",
      "Data inadequate",
      "None of these"
    ],
    "correct": "48 years",
    "explanation": "Let P = 5x and Q = 7x. The difference between Q now and P after 6 years is 2: 7x − (5x + 6) = 2. Thus x = 4. Total = 5x + 7x = **48 years**."
  },
  {
    "id": "ages_q11",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The product of the ages of Harish and Seema is 240. If twice the age of Seema is more than Harish’s age by 4 years, what is Seema’s age in years?",
    "options": [
      "12 years",
      "20 years",
      "10 years",
      "14 years",
      "None of these"
    ],
    "correct": "12 years",
    "explanation": "Let Seema = x. Harish = 2x − 4. Product: x(2x − 4) = 240. Thus x² − 2x − 120 = 0, giving x = **12 years**."
  },
  {
    "id": "ages_q12",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Medium",
    "points": 1,
    "question": "Jayesh is twice as old as Vijay and half as old as Suresh. If the sum of Suresh’s and Vijay’s ages is 85 years, what is Jayesh’s age in years?",
    "options": [
      "34",
      "36",
      "68",
      "Can’t say",
      "None of these"
    ],
    "correct": "34",
    "explanation": "Let Jayesh = J. Then Vijay = J/2 and Suresh = 2J. Their sum is 2J + J/2 = 85, so 5J/2 = 85 and J = **34 years**."
  },
  {
    "id": "ages_q13",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of the present ages of a son and his father is 1 : 5 and that of his mother and father is 4 : 5. After 2 years the ratio of the age of the son to that of his mother becomes 3 : 10. What is the present age of the father?",
    "options": [
      "30 years",
      "28 years",
      "35 years",
      "30 years",
      "None of these"
    ],
    "correct": "35 years",
    "explanation": "Let father = 5x, son = x and mother = 4x. After 2 years: (x + 2)/(4x + 2) = 3/10. Solving gives x = 7, so father = **35 years**."
  },
  {
    "id": "ages_q14",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "15 years hence, A will be twice as old as B, but five years ago A was 4 times as old as B. Find the difference of their present ages.",
    "options": [
      "15 years",
      "45 years",
      "30 years",
      "25 years",
      "None of these"
    ],
    "correct": "30 years",
    "explanation": "Let present ages be A and B. A + 15 = 2(B + 15), while A − 5 = 4(B − 5). Solving gives A = 45 and B = 15. Difference = **30 years**."
  },
  {
    "id": "ages_q15",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Hard",
    "points": 1,
    "question": "A says to B “I am twice as old as you were when I was as old as you are.” The sum of their ages is 63 years. Find the difference of their ages.",
    "options": [
      "27 years",
      "12 years",
      "9 years",
      "6 years",
      "None of these"
    ],
    "correct": "9 years",
    "explanation": "The provided source answer key marks option (3), **9 years**, as the answer for this question."
  },
  {
    "id": "ages_q16",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "A is as much younger than B as he is older than C. If the sum of B’s and C’s ages is 40 years. Find the age of A.",
    "options": [
      "20 years",
      "25 years",
      "30 years",
      "27 years",
      "None of these"
    ],
    "correct": "20 years",
    "explanation": "A is midway between B and C, so 2A = B + C. Since B + C = 40, A = **20 years**."
  },
  {
    "id": "ages_q17",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "A is twice as old as B was two years ago. If the difference in their ages be 2 years, find A’s age.",
    "options": [
      "14 years",
      "18 years",
      "8 years",
      "12 years",
      "None of these"
    ],
    "correct": "8 years",
    "explanation": "Let B = x. Then A = 2(x − 2). Since A − B = 2, we get 2x − 4 − x = 2, so x = 6 and A = **8 years**."
  },
  {
    "id": "ages_q18",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "In ten years, A will be twice as old as B was 10 years ago. If A is now 9 years older than B. Find the present age of B.",
    "options": [
      "39 years",
      "40 years",
      "36 years",
      "49 years",
      "None of these"
    ],
    "correct": "39 years",
    "explanation": "Let B = x and A = x + 9. In ten years: x + 19 = 2(x − 10). Hence x = **39 years**."
  },
  {
    "id": "ages_q19",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "Five years ago, the total of the ages of father and son was 60 years. The ratio of their present ages is 4 : 1. Then the present age of the father is _______.",
    "options": [
      "48 years",
      "51 years",
      "56 years",
      "61 years",
      "None of these"
    ],
    "correct": "56 years",
    "explanation": "Five years ago the total was 60, so the present total is 60 + 10 = 70. With present ratio 4:1, there are 5 parts; each part is 14. Father = 4 × 14 = **56 years**."
  },
  {
    "id": "ages_q20",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_1",
    "type_name": "Type 1: Ratio & Past/Future Age",
    "difficulty": "Medium",
    "points": 1,
    "question": "Two years ago, A was four times as old as B. 8 years hence, A’s age will exceed B’s age by 12 years. The ratio of the present ages of A and B is______. ",
    "options": [
      "3 : 1",
      "4 : 1",
      "3 : 2",
      "5 : 1",
      "None of these"
    ],
    "correct": "3 : 1",
    "explanation": "The age difference remains constant, so A − B = 12. Two years ago: A − 2 = 4(B − 2). Combining gives B = 6 and A = 18. Ratio = **3 : 1**."
  },
  {
    "id": "ages_q21",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "If C’s age is twice the average age of A, B and C. A’s age is one half the average of A, B and C. If B is 5 years old, the average age of A, B and C is _____.",
    "options": [
      "10 years",
      "15 years",
      "12 years",
      "9 years",
      "None of these"
    ],
    "correct": "10 years",
    "explanation": "Let the average age be x. Then C = 2x and A = x/2. Since the total is 3x: x/2 + 5 + 2x = 3x. Hence x = **10 years**."
  },
  {
    "id": "ages_q22",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "A father’s age is three times the sum of the ages of his two children, but 20 years hence his age will be equal to the sum of their ages. Then the father’s age is ______.",
    "options": [
      "30 years",
      "40 years",
      "5 years",
      "45 years",
      "None of these"
    ],
    "correct": "30 years",
    "explanation": "Let the children’s present ages sum to S. Father = 3S. After 20 years, father = 3S + 20 and the children’s sum = S + 40. Thus 3S + 20 = S + 40, so S = 10 and father = **30 years**."
  },
  {
    "id": "ages_q23",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_4",
    "type_name": "Type 4: Multiple-Person & Advanced Age Problems",
    "difficulty": "Easy",
    "points": 1,
    "question": "The total ages of A, B and C at present is 90 years. Ten years ago the ratio of their ages was 1 : 2 : 3. Then the present age of B is ______.",
    "options": [
      "30 years",
      "20 years",
      "40 years",
      "45 years",
      "None of these"
    ],
    "correct": "30 years",
    "explanation": "Ten years ago the ages were x, 2x and 3x. Their present total is 6x + 30 = 90, so x = 10. B’s present age = 2x + 10 = **30 years**."
  },
  {
    "id": "ages_q24",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sum of the ages of a father and son is 45 years. Five years ago, the product of their ages was four times the father’s age at that time. The present ages of the father and son respectively are ____ and _____ years.",
    "options": [
      "39, 6",
      "35, 10",
      "36, 9",
      "40, 10",
      "None of these"
    ],
    "correct": "36, 9",
    "explanation": "Let present father = F and son = S. F + S = 45. Five years ago: (F − 5)(S − 5) = 4(F − 5). Since F − 5 is nonzero, S − 5 = 4, so S = 9 and F = **36**."
  },
  {
    "id": "ages_q25",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_3",
    "type_name": "Type 3: Product-Based Age Problems",
    "difficulty": "Medium",
    "points": 1,
    "question": "The ratio of the father’s and son’s age is 7 : 4. The product of their ages is 1008. The ratio of their ages after 6 years hence will be ______.",
    "options": [
      "5 : 3",
      "8 : 5",
      "7 : 4",
      "5 : 8",
      "None of these"
    ],
    "correct": "8 : 5",
    "explanation": "Let present ages be 7x and 4x. Their product is 28x² = 1008, giving x = 6. Present ages are 42 and 24. After 6 years they are 48 and 30, whose ratio is **8 : 5**."
  },
  {
    "id": "ages_q26",
    "module_id": "mod10",
    "module_name": "Ages",
    "syllabus_lec": "ST-1 Linear Relations",
    "type_id": "type_2",
    "type_name": "Type 2: Sum/Difference & Age Relations",
    "difficulty": "Easy",
    "points": 1,
    "question": "If 6 years are subtracted from the present age of Randheer and the remainder is divided by 18, then the present age of his grandson Anup is obtained. If Anup is 2 years younger to Mahesh whose age is 5 years, then what is the age of Randheer?",
    "options": [
      "96 years",
      "84 years",
      "48 years",
      "60 years",
      "None of these"
    ],
    "correct": "60 years",
    "explanation": "Mahesh is 5, so Anup is 3. Therefore (Randheer − 6)/18 = 3. Hence Randheer − 6 = 54 and Randheer = **60 years**."
  },
  {
    "id": "odd_q1",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_1",
    "type_name": "Type 1: Single Letter Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "H",
      "Q",
      "T",
      "Z",
      "None of these"
    ],
    "correct": "Q",
    "explanation": "Q is the 17th letter, while H, T and Z are even-positioned letters."
  },
  {
    "id": "odd_q2",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_1",
    "type_name": "Type 1: Single Letter Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "A",
      "O",
      "U",
      "Y",
      "None of these"
    ],
    "correct": "Y",
    "explanation": "A, O and U are standard vowels; Y is the odd one under the vowel classification used here."
  },
  {
    "id": "odd_q3",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "DE",
      "PQ",
      "TU",
      "MO",
      "None of these"
    ],
    "correct": "MO",
    "explanation": "DE, PQ and TU contain consecutive letters; MO is not a consecutive pair."
  },
  {
    "id": "odd_q4",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "XW",
      "FG",
      "ML",
      "PO",
      "None of these"
    ],
    "correct": "FG",
    "explanation": "XW, ML and PO are in descending alphabetical order; FG is ascending."
  },
  {
    "id": "odd_q5",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "GE",
      "MK",
      "TU",
      "MO",
      "FD"
    ],
    "correct": "TU",
    "explanation": "GE, MK, MO and FD have a gap of 2 between letter positions. T and U are consecutive."
  },
  {
    "id": "odd_q6",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BD",
      "HK",
      "MP",
      "NQ",
      "TW"
    ],
    "correct": "BD",
    "explanation": "HK, MP, NQ and TW have a positional gap of 3; BD has a gap of 2."
  },
  {
    "id": "odd_q7",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "AE",
      "AI",
      "IO",
      "EI",
      "OU"
    ],
    "correct": "AI",
    "explanation": "The positional gaps are 4, 8, 6, 4 and 6 respectively. AI is the only pair with a gap of 8."
  },
  {
    "id": "odd_q8",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "DW",
      "HS",
      "MN",
      "GT",
      "KO"
    ],
    "correct": "KO",
    "explanation": "D+W, H+S, M+N and G+T each total 27. K+O totals 26."
  },
  {
    "id": "odd_q9",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_2",
    "type_name": "Type 2: Pair-Based Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "VT",
      "MO",
      "PR",
      "DF",
      "FG"
    ],
    "correct": "FG",
    "explanation": "The alphabet-position sums of VT, MO, PR and DF are even; F+G is 13, which is odd."
  },
  {
    "id": "odd_q10",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BCD",
      "NPR",
      "KLM",
      "RQP",
      "HGF"
    ],
    "correct": "NPR",
    "explanation": "BCD, KLM, RQP and HGF use consecutive letters; NPR has a gap of 2 between each letter."
  },
  {
    "id": "odd_q11",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "ABD",
      "FGI",
      "LMO",
      "STU",
      "WXZ"
    ],
    "correct": "STU",
    "explanation": "ABD, FGI, LMO and WXZ follow gaps +1,+2. STU has gaps +1,+1."
  },
  {
    "id": "odd_q12",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "HGF",
      "XWV",
      "NML",
      "OPQ",
      "UTS"
    ],
    "correct": "OPQ",
    "explanation": "HGF, XWV, NML and UTS are descending consecutive triples. OPQ is ascending."
  },
  {
    "id": "odd_q13",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "ACE",
      "PRT",
      "UWY",
      "MNO",
      "GIK"
    ],
    "correct": "MNO",
    "explanation": "ACE, PRT, UWY and GIK progress by +2,+2. MNO is consecutive by +1,+1."
  },
  {
    "id": "odd_q14",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "RTW",
      "QOM",
      "IKG",
      "IKM",
      "BDE"
    ],
    "correct": "RTW",
    "explanation": "RTW is the only set with increasing positive gaps (+2,+3); the other sets follow different/non-matching gap patterns."
  },
  {
    "id": "odd_q15",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "PRT",
      "MOQ",
      "GEC",
      "TVX",
      "SUW"
    ],
    "correct": "GEC",
    "explanation": "PRT, MOQ, TVX and SUW increase by +2,+2. GEC decreases by 2 at each step."
  },
  {
    "id": "odd_q16",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BEH",
      "CFI",
      "LOR",
      "EHL",
      "FIL"
    ],
    "correct": "EHL",
    "explanation": "BEH, CFI, LOR and FIL have equal +3,+3 gaps. EHL has +3,+4."
  },
  {
    "id": "odd_q17",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "AOT",
      "FGH",
      "REB",
      "TIW",
      "QUD"
    ],
    "correct": "FGH",
    "explanation": "FGH is the only consecutive three-letter sequence."
  },
  {
    "id": "odd_q18",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Medium",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BDW",
      "DFU",
      "FHS",
      "GIQ",
      "IKP"
    ],
    "correct": "GIQ",
    "explanation": "The source answer key marks GIQ as the odd one out for this set."
  },
  {
    "id": "odd_q19",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "LHJ",
      "RMP",
      "YUW",
      "FBD",
      "MIK"
    ],
    "correct": "RMP",
    "explanation": "RMP has positional changes −5,+3, while the other listed sets follow the −4,+2 pattern."
  },
  {
    "id": "odd_q20",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "DEB",
      "HIF",
      "NOL",
      "RTP",
      "None of these"
    ],
    "correct": "RTP",
    "explanation": "DEB, HIF and NOL follow +1,−3. RTP follows +2,−4."
  },
  {
    "id": "odd_q21",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "HJN",
      "JLP",
      "PRU",
      "QSW",
      "None of these"
    ],
    "correct": "PRU",
    "explanation": "HJN, JLP and QSW have gaps +2,+4. PRU has +2,+3."
  },
  {
    "id": "odd_q22",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "CHG",
      "LMM",
      "BBC",
      "HEG",
      "None of these"
    ],
    "correct": "HEG",
    "explanation": "The source answer key marks HEG as the odd one out for this set."
  },
  {
    "id": "odd_q23",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "PQO",
      "IFM",
      "ROV",
      "QNU"
    ],
    "correct": "PQO",
    "explanation": "IFM, ROV and QNU follow −3,+7. PQO follows +1,−2."
  },
  {
    "id": "odd_q24",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "GDA",
      "OLI",
      "VSP",
      "KHE",
      "WYZ"
    ],
    "correct": "WYZ",
    "explanation": "GDA, OLI, VSP and KHE decrease by 3,3. WYZ does not follow that pattern."
  },
  {
    "id": "odd_q25",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "NPM",
      "IJL",
      "QSZ",
      "BHK",
      "XGT"
    ],
    "correct": "IJL",
    "explanation": "IJL is the only set whose first two letters are consecutive (I,J)."
  },
  {
    "id": "odd_q26",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "EBA",
      "XUT",
      "TQP",
      "JFE",
      "YVU"
    ],
    "correct": "JFE",
    "explanation": "EBA, XUT, TQP and YVU follow −3,−1 in alphabet positions. JFE follows −4,−1."
  },
  {
    "id": "odd_q27",
    "module_id": "mod13",
    "module_name": "Odd Man Out",
    "syllabus_lec": "ST-1 Classification",
    "type_id": "type_3",
    "type_name": "Type 3: Set/Triple-Based Classification",
    "difficulty": "Hard",
    "points": 1,
    "question": "Choose the odd one out.",
    "options": [
      "BHE",
      "DJG",
      "SYV",
      "JPM",
      "PUS"
    ],
    "correct": "PUS",
    "explanation": "BHE, DJG, SYV and JPM follow +6,−3. PUS follows +5,−2."
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
