// NALR ST-1 Module Foundation Guides (Course Code: 25UNI0110)
const MODULE_GUIDES = {
  "mod1": {
    "id": "mod1",
    "num": 1,
    "title": "Module 1: Blood Relation",
    "lectures": "ST-1 Core Logic",
    "why_study": "Blood Relation is one of the highest-weightage topics in campus placement exams (TCS, Infosys, Capgemini, Cognizant, Wipro) and competitive entrance tests (CAT, GATE, SSC, Bank PO). It evaluates an engineer's ability to decipher complex multi-step relationships, maintain logical constraints, and avoid subjective assumptions.",
    "what_is_it": "A Blood Relation problem provides a set of interconnected relational clues between individuals and asks you to determine how one individual is related to another.\n\n\ud83c\udf33 The Fundamental Generation Tree Model:\nEvery relationship can be mapped onto a discrete coordinate system defined by two axes:\n1. \u2195\ufe0f Vertical Axis (Generational Level):\n   \u2022 +2 Level: Grandfather, Grandmother (Paternal / Maternal)\n   \u2022 +1 Level: Father, Mother, Uncle, Aunt\n   \u2022 0 Level: Self, Brother, Sister, Cousin, Spouse, Brother-in-law, Sister-in-law\n   \u2022 -1 Level: Son, Daughter, Nephew, Niece\n   \u2022 -2 Level: Grandson, Granddaughter\n\n2. \u2194\ufe0f Horizontal Axis (Kinship Type):\n   \u2022 Marital Bond (Spouses): Represented with a double arrow or double line (e.g., A <=> B).\n   \u2022 Sibling Bond (Brothers & Sisters): Represented with a single horizontal line (e.g., A \u2014 B).",
    "real_world_use": "\ud83d\udccc Systematic Problem-Solving Framework by Question Type:\n\n\u2022 \ud83d\udcf8 Type 1: Pointing / Portrait / Dialogue Problems\n  Strategy: Use the 'Backward Method' (Splitting Technique). Locate the word 'my' spoken by the narrator and work from right to left.\n  Example: 'He is the son of the only son of my grandfather'.\n  1. 'My grandfather' -> Narrator's grandfather\n  2. 'Only son of my grandfather' -> Narrator's father\n  3. 'Son of my father' -> Narrator's brother or Narrator himself.\n\n\u2022 \ud83e\udde9 Type 2: Family Tree & Multi-Person Puzzles\n  Strategy: Anchor on the clue with the most connections. Do not guess gender until explicitly stated! Connect branches level-by-level.\n\n\u2022 \ud83d\udd17 Type 3: Deciphering Jumbled Relations\n  Strategy: Translate complex relational phrases into direct single-word relations before connecting.\n\n\u2022 \ud83d\udc8d Type 4: In-Laws & Matrimonial Relations\n  Strategy: Remember that in-laws bridge two distinct family trees through marriage.\n  - Brother-in-law = Husband's/Wife's brother OR Sister's husband.\n  - Sister-in-law = Husband's/Wife's sister OR Brother's wife.\n\n\u2022 \u23f3 Type 5: Multi-Generational Lineage\n  Strategy: Keep strict count of generation shifts (+1, -1, +2, -2). If net generation gap doesn't match, eliminate options immediately.\n\n\u2022 \u26a0\ufe0f Type 6: Gender Ambiguity Traps\n  Strategy: Never deduce gender from an individual's name (e.g., 'Kiran', 'Suman', 'Bobby'). If gender cannot be determined from the clues, the answer must be 'Cannot be determined' or 'Brother or Sister'.\n\n\u2022 \ud83d\udccb Type 7: Condition-Based Deductions\n  Strategy: Form a 2D matrix matching family members with their conditions (e.g. professions, seating, married pairs).",
    "core_mechanics": [
      "1. Standard Notation Symbols: Male = [+] or Square | Female = [-] or Circle | Spouses = [A] <=> [B] | Siblings = [A] \u2014 [B] | Parent-Child = Vertical line [Parent] \u2193 [Child].",
      "2. Paternal vs Maternal Distinction: Relations through father are 'Paternal' (e.g. Paternal Uncle = Chacha/Tau, Paternal Grandfather = Dada). Relations through mother are 'Maternal' (e.g. Maternal Uncle = Mama, Maternal Grandfather = Nana). If not specified, default to Paternal in Indian aptitude tests.",
      "3. The 'Only' Nuance:\n   - 'Only son of my father' = If speaker is male, it is HIMSELF. If speaker is female, it is HER BROTHER.\n   - 'Only child of my parents' = The speaker alone (regardless of gender).",
      "4. Nephew & Niece: Son of brother/sister = Nephew. Daughter of brother/sister = Niece.",
      "5. Reference Direction: Always verify who is being asked! 'How is A related to B?' asks what A is to B (e.g. A is Father). Answering what B is to A (e.g. Son) is the #1 exam error!",
      "6. First-Person Pronouns: In statements like 'A said to B, your father is...', connect 'your' to B and 'my' to A."
    ],
    "diagram_html": "\n        <div class=\"visual-diagram-card animated-diagram\">\n          <div class=\"visual-diagram-title\">\ud83c\udf33 Complete Generation Tree Reference Architecture</div>\n          <div class=\"flow-container\" style=\"text-align:left; font-family:var(--font-mono); font-size:13px; line-height:1.7;\">\n            <div style=\"background:rgba(59,130,246,0.08); padding:12px 16px; border-radius:8px; border-left:4px solid #3b82f6; margin-bottom:10px;\">\n              <strong style=\"color:#2563eb;\">Generation +2 (Grandparents):</strong><br>\n              [Paternal Grandfather(+)] &lt;=&gt; [Paternal Grandmother(-)] &nbsp;&nbsp;|&nbsp;&nbsp; [Maternal Grandfather(+)] &lt;=&gt; [Maternal Grandmother(-)]\n            </div>\n            <div style=\"text-align:center; color:var(--ink-muted); margin:4px 0;\">\u2502 &nbsp; (Vertical Descent: Parent to Child) &nbsp; \u2502</div>\n            <div style=\"background:rgba(16,185,129,0.08); padding:12px 16px; border-radius:8px; border-left:4px solid #10b981; margin-bottom:10px;\">\n              <strong style=\"color:#059669;\">Generation +1 (Parents & Paternal/Maternal Aunts/Uncles):</strong><br>\n              [Father(+)] &lt;=&gt; [Mother(-)] &nbsp;&nbsp;\u2500\u2500&nbsp;&nbsp; [Uncle(+)] &nbsp;&nbsp;\u2500\u2500&nbsp;&nbsp; [Aunt(-)] &nbsp;&nbsp;\u2500\u2500&nbsp;&nbsp; [Maternal Uncle(+)]\n            </div>\n            <div style=\"text-align:center; color:var(--ink-muted); margin:4px 0;\">\u2502 &nbsp; (Vertical Descent: Next Generation) &nbsp; \u2502</div>\n            <div style=\"background:rgba(139,92,246,0.08); padding:12px 16px; border-radius:8px; border-left:4px solid #8b5cf6; margin-bottom:10px;\">\n              <strong style=\"color:#7c3aed;\">Generation 0 (Current / Self):</strong><br>\n              [Brother(+)] \u2500\u2500 [YOU (Self)] &lt;=&gt; [Wife(-)] \u2500\u2500 [Sister(-)] &nbsp;&nbsp;[Cousins (any gender)] &nbsp;&nbsp;[Brother-in-law(+)]\n            </div>\n            <div style=\"text-align:center; color:var(--ink-muted); margin:4px 0;\">\u2502 &nbsp; (Vertical Descent: Children) &nbsp; \u2502</div>\n            <div style=\"background:rgba(245,158,11,0.08); padding:12px 16px; border-radius:8px; border-left:4px solid #f59e0b; margin-bottom:10px;\">\n              <strong style=\"color:#d97706;\">Generation -1 (Children, Nephews, Nieces):</strong><br>\n              [Son(+)] &nbsp;&nbsp;\u2500\u2500&nbsp;&nbsp; [Daughter(-)] &nbsp;&nbsp;\u2500\u2500&nbsp;&nbsp; [Nephew(+)] &nbsp;&nbsp;\u2500\u2500&nbsp;&nbsp; [Niece(-)]\n            </div>\n            <div style=\"text-align:center; color:var(--ink-muted); margin:4px 0;\">\u2502 &nbsp; (Vertical Descent: Grandchildren) &nbsp; \u2502</div>\n            <div style=\"background:rgba(239,68,68,0.08); padding:12px 16px; border-radius:8px; border-left:4px solid #ef4444;\">\n              <strong style=\"color:#dc2626;\">Generation -2 (Grandchildren):</strong><br>\n              [Grandson(+)] &nbsp;&nbsp;\u2500\u2500&nbsp;&nbsp; [Granddaughter(-)]\n            </div>\n          </div>\n        </div>\n        ",
    "step_by_step_example": "\ud83d\udcd0 Concrete Solved Example (Pointing Based):\n\u2022 Question: Pointing to a photograph of a boy, Suresh said, 'He is the son of the only son of my mother.' How is Suresh related to that boy?\n\n\u2022 Step-by-Step Breakdown Using Backward Method:\n  1. Identify the speaker: Suresh (Male)\n  2. Find the anchor phrase: 'my mother' -> Suresh's mother.\n  3. Move left: 'the only son of my mother' -> Since Suresh is male and his mother has only one son, the 'only son' must be Suresh himself!\n  4. Move left: 'the son of [Suresh]' -> Suresh's son.\n  5. Conclusion: The boy in the photograph is Suresh's son.\n  6. Final Answer Check: The question asks 'How is Suresh related to that boy?' Suresh is the Father! (Option: Father).",
    "expected_exam_questions": [
      "Q1: In 'How is A related to B?', whose relationship should be given in the answer?\n-> Answer: A's relationship with respect to B (e.g. A is B's Maternal Uncle). Never reverse the perspective.",
      "Q2: Can we assume gender from a person's first name in blood relation aptitude questions?\n-> Answer: STRICTLY NO. Unless a pronoun (he/she) or relational keyword (mother, brother, son, husband) explicitly defines it, gender is undetermined.",
      "Q3: What is the difference between 'Sister-in-law' and 'Cousin'?\n-> Answer: Sister-in-law is connected by marriage (brother's wife or spouse's sister), whereas Cousin is a biological child of an aunt or uncle."
    ]
  },
  "mod2": {
    "id": "mod2",
    "num": 2,
    "title": "Module 2: Coded Relation",
    "lectures": "ST-1 Symbolic Logic",
    "why_study": "Coded Relation transforms family relationships into symbolic algebraic expressions (e.g., A + B, P \u00d7 Q, M @ N). It tests symbolic decoding speed and elimination logic without drawing full family trees for every option.",
    "what_is_it": "Questions define symbols for basic relations (e.g. '+' = father, '-' = mother, '\u00d7' = brother, '\u00f7' = sister) and present multi-variable expressions like 'P + Q \u00d7 R \u00f7 S'. You must determine the relationship between endpoints.",
    "real_world_use": "Key Elimination Shortcuts:\n1. Gender Elimination: If question asks 'Find expression where P is female', check the symbol immediately following P. If P has a male symbol following it, eliminate that option instantly!\n2. Generation Gap Counting: Assign numeric generation scores (+1 for father/mother, 0 for brother/sister/husband/wife, -1 for son/daughter). The sum must equal the target relationship gap.",
    "core_mechanics": [
      "1. Forward Coding: 'A + B means A is father of B' -> Relation moves left-to-right.",
      "2. Reverse Coding: 'A + B means B is father of A' -> Always read instructions carefully to check the direction of the arrow!",
      "3. Last Element Ambiguity: The gender of the last person in a chain (e.g. '... \u00d7 U') is usually undetermined unless they are in a marital relationship."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Solved Example:\n\u2022 Expression: P $ Q % R \u00d7 S where $ = Father (+1), % = Sister (0), \u00d7 = Brother (0).\n\u2022 P is father of Q. Q, R, S are siblings. Therefore, P is the Father of S.\n\u2022 Net Generation Gap: +1 + 0 + 0 = +1 (Father).",
    "expected_exam_questions": [
      "Q1: When can the gender of the last character in an expression be determined without a following symbol?\n-> Answer: When the last relationship is marital (e.g. A is the husband of B, which implies B must be female)."
    ]
  },
  "mod3": {
    "id": "mod3",
    "num": 3,
    "title": "Module 3: Analogy",
    "lectures": "ST-1 Pattern Recognition",
    "why_study": "Tests logical correspondence and relational mapping between pairs of concepts (A : B :: C : D).",
    "what_is_it": "Identifying the precise semantic, numeric, or alphabetical rule connecting pair 1 and applying it to pair 2.",
    "real_world_use": "Common Pattern Types:\n\u2022 Semantic: Tool-to-Worker (Scalpel : Surgeon), Country-to-Capital, Cause-to-Effect.\n\u2022 Numeric: Squares (n : n\u00b2 + 1), Cubes, Prime numbers, Sum of digits.\n\u2022 Letter: Alphabet rank shifts (+3, -2), Reverse opposites (A\u2194Z, B\u2194Y).",
    "core_mechanics": [
      "1. Formulate the relationship into a strict sentence before checking options.",
      "2. Check for order: If Pair 1 is (Cause : Effect), Pair 2 must be (Cause : Effect), not (Effect : Cause)."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: 8 : 64 :: 11 : ? -> 8\u00b2 = 64, so 11\u00b2 = 121.",
    "expected_exam_questions": [
      "Q1: What if multiple patterns work? -> Answer: Standard hierarchy: Prime > Powers (Squares/Cubes) > Multiples/Divisions > Additions/Subtractions."
    ]
  },
  "mod4": {
    "id": "mod4",
    "num": 4,
    "title": "Module 4: Direction",
    "lectures": "ST-1 Spatial Reasoning",
    "why_study": "Crucial for spatial mapping, tracking vector displacements, and calculating shortest Euclidean distances.",
    "what_is_it": "Problems simulate movements in 2D space along cardinal (North, South, East, West) and ordinal (NE, NW, SE, SW) directions.",
    "real_world_use": "Core Rules:\n\u2022 Right turn = 90\u00b0 clockwise. Left turn = 90\u00b0 counter-clockwise.\n\u2022 Shortest distance between (x1, y1) and (x2, y2) = \u221a(\u0394x\u00b2 + \u0394y\u00b2) (Pythagorean Theorem).\n\u2022 Shadows: Morning sun is in East -> Shadow falls to the West. Evening sun is in West -> Shadow falls to the East. At 12 Noon -> No shadow.",
    "core_mechanics": [
      "1. Cardinal Directions: North (Up), South (Down), East (Right), West (Left).",
      "2. Net displacement tracking using Cartesian coordinate notation (+x for East, -x for West, +y for North, -y for South)."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: Man walks 3 km North, turns right, walks 4 km. Shortest distance from start = \u221a(3\u00b2 + 4\u00b2) = \u221a25 = 5 km.",
    "expected_exam_questions": [
      "Q1: A person walks facing their shadow in the morning. Which direction are they walking? -> Answer: Towards West (since morning shadow falls in the West)."
    ]
  },
  "mod5": {
    "id": "mod5",
    "num": 5,
    "title": "Module 5: Number System",
    "lectures": "ST-1 Number Theory",
    "why_study": "The backbone of quantitative aptitude, testing divisibility properties, cyclicity, and factors.",
    "what_is_it": "Analysis of integers, rational/irrational numbers, prime factorization, and place-value arithmetic.",
    "real_world_use": "Key Divisibility Tests:\n\u2022 3 & 9: Sum of digits divisible by 3/9.\n\u2022 4 & 8: Last 2 digits (for 4) or last 3 digits (for 8) divisible.\n\u2022 11: Difference between sum of odd-place digits and even-place digits is 0 or multiple of 11.\n\u2022 Cyclicity of unit digits (powers of 2, 3, 7, 8 repeat every 4 powers).",
    "core_mechanics": [
      "1. Total Factors of N = p\u1d43 \u00b7 q\u1d47 \u00b7 r\u1d9c is (a + 1)(b + 1)(c + 1).",
      "2. Unit digit of a\u1d47: Divide b by 4; use remainder as the effective power."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Unit digit of 7\u00b9\u2070\u2075: 105 \u00f7 4 gives remainder 1. 7\u00b9 = 7. Unit digit is 7.",
    "expected_exam_questions": [
      "Q1: What is the smallest prime number? -> Answer: 2 (the only even prime)."
    ]
  },
  "mod6": {
    "id": "mod6",
    "num": 6,
    "title": "Module 6: H.C.F. & L.C.M.",
    "lectures": "ST-1 Quantitative Core",
    "why_study": "Essential for periodic event synchronization, ratio simplifications, and grouping problems.",
    "what_is_it": "HCF (GCD) is the greatest divisor common to numbers; LCM is the smallest multiple divisible by all of them.",
    "real_world_use": "The Fundamental Identity:\nProduct of Two Numbers = HCF \u00d7 LCM\n\u2022 For Fractions: HCF(a/b, c/d) = HCF(a,c) / LCM(b,d); LCM(a/b, c/d) = LCM(a,c) / HCF(b,d).",
    "core_mechanics": [
      "1. Bells ringing together: Find LCM of individual intervals.",
      "2. Maximum size of identical tiles to pave a floor: HCF of length and breadth."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: 3 bells toll at 9, 12, 15 minutes. LCM(9, 12, 15) = 180 min = 3 hours. They toll together every 3 hours.",
    "expected_exam_questions": [
      "Q1: If HCF of two numbers is 11 and their LCM is 7700, and one number is 275, find the other? -> Answer: (11 \u00d7 7700) / 275 = 308."
    ]
  },
  "mod7": {
    "id": "mod7",
    "num": 7,
    "title": "Module 7: Average",
    "lectures": "ST-1 Central Tendency",
    "why_study": "Calculates central tendency and handles deviations when items are included, excluded, or replaced.",
    "what_is_it": "Average = (Sum of all observations) / (Total number of observations). Sum = Average \u00d7 N.",
    "real_world_use": "Deviation Shortcut:\n\u2022 New Value = Old Average + (Change in Average \u00d7 New Total Count).\n\u2022 Replacement: Weight of new person = Weight of replaced person + (Increase in Average \u00d7 Total Count).",
    "core_mechanics": [
      "1. If every number in a set is increased/decreased by k, the average increases/decreases by k.",
      "2. Weighted Average = (n\u2081A\u2081 + n\u2082A\u2082) / (n\u2081 + n\u2082)."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: Average age of 10 students is 15 yrs. When teacher is added, average becomes 16 yrs. Teacher's age = 15 + (1 \u00d7 11) = 26 yrs.",
    "expected_exam_questions": [
      "Q1: What happens to average if every observation is multiplied by 3? -> Answer: Average also gets multiplied by 3."
    ]
  },
  "mod8": {
    "id": "mod8",
    "num": 8,
    "title": "Module 8: Remainder Theorem",
    "lectures": "ST-1 Modular Arithmetic",
    "why_study": "Enables computing remainders of astronomical exponential numbers without calculating full values.",
    "what_is_it": "Dividend = (Divisor \u00d7 Quotient) + Remainder, where 0 \u2264 Remainder < Divisor.",
    "real_world_use": "Techniques:\n\u2022 Negative Remainder Concept: 25 \u00f7 26 = -1 remainder. (-1)\u00b9\u2070\u2070 = +1 remainder.\n\u2022 Fermat's Little Theorem: (a^(p-1) mod p) = 1, where p is prime and gcd(a, p) = 1.",
    "core_mechanics": [
      "1. Remainder of (A \u00d7 B) \u00f7 N = (Rem(A \u00f7 N) \u00d7 Rem(B \u00f7 N)) \u00f7 N.",
      "2. Polynomial Remainder Theorem: When P(x) is divided by (x - a), the remainder is P(a)."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: Remainder of 2\u00b2\u2070 \u00f7 7. Since 2\u00b3 = 8 \u2261 1 (mod 7), 2\u00b2\u2070 = (2\u00b3)^6 \u00d7 2\u00b2 = 1^6 \u00d7 4 = 4.",
    "expected_exam_questions": [
      "Q1: What is the remainder when (17\u00b2\u2070\u2070) is divided by 18? -> Answer: (-1)\u00b2\u2070\u2070 = 1."
    ]
  },
  "mod9": {
    "id": "mod9",
    "num": 9,
    "title": "Module 9: Ratio & Proportion",
    "lectures": "ST-1 Comparative Math",
    "why_study": "The foundational scaling tool for all applied quantitative problems (partnerships, mixtures, ages).",
    "what_is_it": "Ratio expresses relative magnitude of two quantities; Proportion states equality of two ratios (a/b = c/d).",
    "real_world_use": "Key Formulas:\n\u2022 Compounding Ratios: If A:B = 2:3 and B:C = 4:5, then A:B:C = (2\u00d74) : (3\u00d74) : (3\u00d75) = 8:12:15.\n\u2022 Mean Proportional of a and b = \u221a(ab).\n\u2022 Third Proportional to a, b = b\u00b2 / a.",
    "core_mechanics": [
      "1. Product of Extremes = Product of Means: a \u00b7 d = b \u00b7 c.",
      "2. Coin-box problems: Multiply count ratio by coin denomination value."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: Divide \u20b9600 in ratio 2:3. Part 1 = (2/5)\u00d7600 = \u20b9240. Part 2 = (3/5)\u00d7600 = \u20b9360.",
    "expected_exam_questions": [
      "Q1: What is the mean proportional between 4 and 16? -> Answer: \u221a(4 \u00d7 16) = \u221a64 = 8."
    ]
  },
  "mod10": {
    "id": "mod10",
    "num": 10,
    "title": "Module 10: Ages",
    "lectures": "ST-1 Linear Relations",
    "why_study": "A staple problem in all competitive aptitude tests, linking algebraic word problems with ratios.",
    "what_is_it": "Finding ages of family members given ratio relations at different chronological points in time.",
    "real_world_use": "Golden Age Invariant Rule:\n\u2022 The difference between the ages of two people remains CONSTANT forever! If father is 25 years older than son today, he will be exactly 25 years older after 100 years.",
    "core_mechanics": [
      "1. If present age is x, age n years ago = x - n; age n years hence = x + n.",
      "2. Equate cross-multiplication of ratios across two time stamps."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: Ratio of A and B is 3:4. After 5 years it is 4:5. The gap is 1 unit = 5 years. A is 3\u00d75=15 yrs, B is 4\u00d75=20 yrs.",
    "expected_exam_questions": [
      "Q1: Does the ratio of ages remain constant over time? -> Answer: No, only the age difference remains constant."
    ]
  },
  "mod11": {
    "id": "mod11",
    "num": 11,
    "title": "Module 11: Partnership",
    "lectures": "ST-1 Commercial Math",
    "why_study": "Models real-world commercial ventures where partners invest different capital sums for varying durations.",
    "what_is_it": "Profit is distributed in direct proportion to the product of Investment (Capital) and Time period.",
    "real_world_use": "Core Equation:\nProfit Ratio = (C\u2081 \u00d7 T\u2081) : (C\u2082 \u00d7 T\u2082) : (C\u2083 \u00d7 T\u2083)\n\u2022 If an active partner receives a monthly salary/commission, subtract that salary from total profit BEFORE splitting according to ratio.",
    "core_mechanics": [
      "1. Sleeping partner receives share purely based on investment ratio.",
      "2. Working partner receives salary + investment profit share."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: A invests \u20b910k for 12 mos, B invests \u20b915k for 8 mos. Ratio = (10\u00d712) : (15\u00d78) = 120 : 120 = 1:1. Profits split equally!",
    "expected_exam_questions": [
      "Q1: If investments are equal, how is profit shared? -> Answer: Directly proportional to the time period of investment."
    ]
  },
  "mod12": {
    "id": "mod12",
    "num": 12,
    "title": "Module 12: Allegation",
    "lectures": "ST-1 Weighted Mixtures",
    "why_study": "Provides an ultra-fast graphical shortcut to solve weighted average mixture and price problems without algebra.",
    "what_is_it": "Rule of Alligation determines the ratio in which two ingredients of different prices/concentrations must be mixed to produce a mixture of a desired mean value.",
    "real_world_use": "The Alligation Cross:\n(Cheaper Price : c)                 (Dearer Price : d)\n            \\       /\n            (Mean Price : m)\n            /       \\\n(Quantity of Cheaper) : (Quantity of Dearer) = (d - m) : (m - c)",
    "core_mechanics": [
      "1. All quantities must be in identical units (e.g. Cost Price of all components).",
      "2. Repeated Dilution Formula: Liquid remaining = Total \u00d7 [1 - (x / Total)]\u207f."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: Mix pulse @ \u20b915/kg and \u20b920/kg to get mixture worth \u20b916.50/kg. Ratio = (20 - 16.5) : (16.5 - 15) = 3.5 : 1.5 = 7 : 3.",
    "expected_exam_questions": [
      "Q1: Can Alligation be applied if selling price and profit percentage are given? -> Answer: Yes, but first convert selling price into cost price!"
    ]
  },
  "mod13": {
    "id": "mod13",
    "num": 13,
    "title": "Module 13: Odd Man Out",
    "lectures": "ST-1 Classification",
    "why_study": "Tests anomaly detection and category abstraction across words, numbers, and letter sequences.",
    "what_is_it": "Among a given group of items, all except one follow a distinct common rule. You must identify the outlier.",
    "real_world_use": "Common Disqualifiers:\n\u2022 Numbers: Primes vs Composites, Perfect squares, Even/Odd, Sum of digits.\n\u2022 Words: Synonyms with one antonym, biological taxonomy (mammals vs reptiles).\n\u2022 Letters: Vowel count, alphabetical gaps.",
    "core_mechanics": [
      "1. First find the positive rule that binds the other items together, then confirm the outlier violates it.",
      "2. Avoid subjective connections; prioritize mathematical or dictionary facts."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: 3, 5, 7, 9, 11, 13. All are prime numbers except 9 (which is composite: 3\u00d73=9). Odd man out is 9.",
    "expected_exam_questions": [
      "Q1: Between 2, 3, 5, 7, 9, 11, why is 2 not the odd man out? -> Answer: 9 is odd composite whereas all others are primes; prime classification takes priority over parity."
    ]
  },
  "mod14": {
    "id": "mod14",
    "num": 14,
    "title": "Module 14: Syllogism",
    "lectures": "ST-1 Deductive Logic",
    "why_study": "Evaluates pure deductive reasoning independent of real-world truth, following strict logical consequence.",
    "what_is_it": "Given premises (All A are B, Some B are C), determine which conclusions necessarily follow.",
    "real_world_use": "Rules of Syllogism:\n\u2022 Two negative premises yield NO valid definite conclusion.\n\u2022 Two particular premises ('Some') yield NO valid definite conclusion.\n\u2022 'Some A are B' implies 'Some B are A'.\n\u2022 'All A are B' implies 'Some A are B' and 'Some B are A'.\n\u2022 Complementary Pairs (Either-Or): 'Some A are B' and 'No A are B'.",
    "core_mechanics": [
      "1. Definite conclusion must be true in ALL possible Venn diagrams.",
      "2. Possibility ('can be') is true if it holds in AT LEAST ONE valid Venn diagram."
    ],
    "diagram_html": "",
    "step_by_step_example": "\ud83d\udcd0 Example: Statements: All dogs are cats. All cats are animals. Conclusion: All dogs are animals -> Definitely TRUE.",
    "expected_exam_questions": [
      "Q1: If 'Some pens are books' is given, does it mean 'Some pens are NOT books'? -> Answer: NO! In formal logic, 'Some' means 'at least one', and may include 'all'."
    ]
  }
};
