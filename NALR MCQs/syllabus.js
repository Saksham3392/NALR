// NALR ST-1 Syllabus Modules Configuration (Course Code: 25UNI0110)
const SYLLABUS_MODULES = [
    {
    id: "mod1",
    num: 1,
    title: "Blood Relation",
    lectures: "ST-1 Relational Logic",
    desc: "Family tree mapping, generational lineages, group puzzle caselets, and pointing/dialogue deciphering.",
    types: [
      { id: "type_1", name: "Type 1: Family Tree & Generation Deduction", desc: "Direct parent-child, sibling, and grandparent relationships across multi-generational family trees.", count: 12 },
      { id: "type_2", name: "Type 2: Group Caselet & Complex Puzzles", desc: "Multi-person relational caselets with interrelated family puzzle sets.", count: 7 },
      { id: "type_3", name: "Type 3: Pointing & Dialogue-Based Relations", desc: "Deciphering intricate speaker statements, portrait descriptions, and indirect relational chains.", count: 15 }
    ]
  },
  {
    id: "mod2",
    num: 2,
    title: "Coded Relation",
    lectures: "ST-1 Symbolic Logic",
    desc: "Decoding family relationships expressed through mathematical and punctuation symbols.",
    types: [
      { id: "type_1", name: "Type 1: Pointing & Dialogue Based", desc: "Speaker introducing someone directly or via a photograph/person.", count: 6 },
      { id: "type_2", name: "Type 2: Family Tree & Group Puzzles", desc: "Multi-person family networks with interconnected relational clues.", count: 6 },
      { id: "type_3", name: "Type 3: Deciphering Jumbled Relations", desc: "Nested relational chains requiring forward/backward breakdown.", count: 6 },
      { id: "type_4", name: "Type 4: In-Laws & Matrimonial Relations", desc: "Relationships formed by marriage (brother-in-law, sister-in-law, etc.).", count: 6 },
      { id: "type_5", name: "Type 5: Multi-Generational Lineage", desc: "Relations spanning 3+ generations (grandparents, maternal uncles, grandchildren).", count: 5 },
      { id: "type_6", name: "Type 6: Gender Ambiguity & Trap Questions", desc: "Scenarios where gender is unspecified and 'Cannot Be Determined' applies.", count: 6 },
      { id: "type_7", name: "Type 7: Condition-Based Deductions", desc: "Complex scenarios combining relations with professions, seats, or conditions.", count: 5 }
    ]
  },
    {
    id: "mod3",
    num: 3,
    title: "Analogy",
    lectures: "ST-1 Verbal & Numerical Analogy",
    desc: "Semantic pairs, general knowledge associations, number patterns/sets, and letter coding analogies.",
    types: [
      { id: "type_1", name: "Type 1: Word & General Knowledge Analogy", desc: "Biological classifications, tool-worker, object-function, cause-effect, and antonym/synonym pairings.", count: 28 },
      { id: "type_2", name: "Type 2: Number Analogy & Numerical Sets", desc: "Arithmetic multipliers, square/cube relations, prime sequences, and triple number set patterns.", count: 15 },
      { id: "type_3", name: "Type 3: Letter & Alphabet Coding Analogy", desc: "Opposite letter pairs, constant shift alphabetic patterns (+5/-5, +1/-1), and word anagram reshuffling.", count: 7 }
    ]
  },
    {
    id: "mod4",
    num: 4,
    title: "Direction",
    lectures: "ST-1 Spatial Orientation",
    desc: "Tracking cardinal compass orientations, displacement vectors, angular rotations, and shadow phenomena.",
    types: [
      { id: "type_1", name: "Type 1: Turns, Rotations & Clock Angles", desc: "Clockwise/anticlockwise angular turns, degree shifts, and clock hand orientation puzzles.", count: 10 },
      { id: "type_2", name: "Type 2: Distance & Displacement (Pythagoras)", desc: "Shortest direct distance between starting and end points using the Pythagorean theorem.", count: 11 },
      { id: "type_3", name: "Type 3: Cardinal & Relative Position Puzzles", desc: "Determining position and facing direction relative to starting points, landmarks, or villages.", count: 14 },
      { id: "type_4", name: "Type 4: Shadow-Based Direction Scenarios", desc: "Morning/evening sun positions, shadow orientations, and face-to-face dialogues.", count: 3 }
    ]
  },
    {
    id: "mod5",
    num: 5,
    title: "Number System",
    lectures: "ST-1 Number Theory",
    desc: "Unit digits, trailing zeros, factor counts, algebraic divisibility, digit reversals, and series summation.",
    types: [
      { id: "type_1", name: "Type 1: Unit Digits & Trailing Zeros", desc: "Cyclicity of powers, product unit digits, and counting trailing zeros in factorials and products.", count: 5 },
      { id: "type_2", name: "Type 2: Factors, Multiples & Primes", desc: "Total factors, sum/average of factors, product of factors, prime factors, and primality testing.", count: 10 },
      { id: "type_3", name: "Type 3: Divisibility Rules & Remainder Theorems", desc: "Modular arithmetic, successive division remainders, composite divisibility (11, 45, 88, 99), and algebraic forms (xⁿ ± aⁿ).", count: 25 },
      { id: "type_4", name: "Type 4: Two-Digit Numbers & Digit Reversal", desc: "Algebraic properties of two-digit numbers, digit reversals (11|sum, 9|diff), and 4-digit repetition patterns.", count: 6 },
      { id: "type_5", name: "Type 5: Series Summation (Squares & Cubes)", desc: "Sum of natural numbers, squares of even/odd integers, cubes summation, and arithmetic progressions.", count: 11 }
    ]
  },
    {
    id: "mod6",
    num: 6,
    title: "H.C.F. & L.C.M.",
    lectures: "ST-1 Divisibility & Multiples",
    desc: "Prime factorization, fraction/decimal rules, circular track races, traffic light cycles, remainder models, and ratio properties.",
    types: [
      { id: "type_1", name: "Type 1: Fundamental HCF & LCM Calculations", desc: "Prime powers, algebraic variables, decimals, fractions, and prime factor representations.", count: 5 },
      { id: "type_2", name: "Type 2: Real-World Applications (Measurement & Tracks)", desc: "Greatest common measuring scales, container capacities, traffic light synchronization, and circular track running laps.", count: 7 },
      { id: "type_3", name: "Type 3: Remainder Theorems & Divisibility Models", desc: "Same remainder, distinct remainders with constant difference (LCM - k), difference HCF methods, and boundary bounds.", count: 16 },
      { id: "type_4", name: "Type 4: Product, Ratio & Factor Properties", desc: "HCF × LCM = Product identities, co-prime pairs, ratio scaling (ax : bx), and HCF dividing LCM conditions.", count: 12 }
    ]
  },
    {
    id: "mod7",
    num: 7,
    title: "Average",
    lectures: "ST-1 Central Tendency",
    desc: "Arithmetic mean properties, inclusion/exclusion, replacement formulas, alligation, cricket averages, harmonic average speed, and hostel mess balance.",
    types: [
      { id: "type_1", name: "Type 1: Arithmetic Mean & Uniform Operations", desc: "Consecutive integers, constant shifts (+k, -k, ×k, ÷k), and algebraic ratio number triples.", count: 7 },
      { id: "type_2", name: "Type 2: Inclusion, Exclusion & Replacement", desc: "Joining and leaving group averages, replacement weight formulas, and teacher/student age adjustments.", count: 7 },
      { id: "type_3", name: "Type 3: Weighted Averages, Groups & Alligation", desc: "Multi-group demographic means, pass/fail alligation, investment capital return, and missing observation totals.", count: 8 },
      { id: "type_4", name: "Type 4: Cricket Batting & Bowling Averages", desc: "Innings run rate increases, batsman career averages, and bowler wickets-per-run improvement.", count: 3 },
      { id: "type_5", name: "Type 5: Average Speed & Distance Travel", desc: "Harmonic speed for equal distances (2xy/(x+y)), 3-segment journeys, fractional distances, and square track circuits.", count: 6 },
      { id: "type_6", name: "Type 6: Hostel Mess, Temperature & Family Demographics", desc: "Hostel expenditure systems, overlapping weekly temperatures, multi-year population growth, and historical family age births.", count: 7 }
    ]
  },
    {
    id: "mod8",
    num: 8,
    title: "Remainder Theorem",
    lectures: "ST-1 Modular Arithmetic",
    desc: "Negative remainders, factorial series, power management, Fermat's & Wilson's theorems, cyclicity, and algebraic polynomials.",
    types: [
      { id: "type_1", name: "Type 1: Basic Arithmetic & Negative Remainder", desc: "Direct division, positive and negative remainder conventions (mod n adjustments).", count: 8 },
      { id: "type_2", name: "Type 2: Composite Expressions & Fraction Simplification", desc: "Remainders of products (a × b), sums (a + b), differences (a - b), and common factor cancellation rule.", count: 11 },
      { id: "type_3", name: "Type 3: Factorials & Last Two Digits", desc: "Factorial remainder cutoff properties (10, 12, 15) and last two digits via mod 100 / mod 25.", count: 6 },
      { id: "type_4", name: "Type 4: Power Forms, Splitting & Cyclicity", desc: "Powers (aⁿ mod m), base splitting (2⁶⁵ = 4 × 8²¹), prime factor separation, and period cyclicity.", count: 15 },
      { id: "type_5", name: "Type 5: Fermat, Wilson & Algebraic Theorems", desc: "Fermat's Little Theorem (aᵖ⁻¹ ≡ 1), Wilson's Theorem ((p-1)! ≡ -1), and polynomial remainder P(a).", count: 14 }
    ]
  },
  {
    id: "mod9",
    num: 9,
    title: "Ratio & Proportion",
    lectures: "ST-1 Quantitative Relations",
    desc: "Direct and inverse proportions, compound ratios, and mean proportionals.",
    types: []
  },
  {
    id: "mod10",
    num: 10,
    title: "Ages",
    lectures: "ST-1 Linear Relations",
    desc: "Simultaneous linear equations applied to past, present, and future age problems.",
    types: []
  },
  {
    id: "mod11",
    num: 11,
    title: "Partnership",
    lectures: "ST-1 Commercial Arithmetic",
    desc: "Profit and loss distribution proportional to capital investments and active duration.",
    types: []
  },
  {
    id: "mod12",
    num: 12,
    title: "Allegation",
    lectures: "ST-1 Mixture Mechanics",
    desc: "Cross-rule of alligation for calculating mean prices and liquid concentration replacements.",
    types: []
  },
  {
    id: "mod13",
    num: 13,
    title: "Odd Man Out",
    lectures: "ST-1 Anomaly Detection",
    desc: "Spotting the unique divergent element violating a mathematical pattern.",
    types: []
  },
  {
    id: "mod14",
    num: 14,
    title: "Syllogism",
    lectures: "ST-1 Deductive Logic",
    desc: "Evaluating categorical propositions and Venn diagram intersections.",
    types: []
  }
];
