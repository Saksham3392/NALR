/**
 * ============================================================================
 * 🤖 NALR MULTI-TERM SYLLABUS CONFIGURATION (Course Code: 25UNI0110)
 * ============================================================================
 * Defines the complete curriculum for Chitkara University's Numerical Aptitude
 * & Logical Reasoning-I across all three examination terms:
 * 
 *   1. ST-1 (Sessional Test 1)      -> 14 Modules (10 Active, 422 Questions)
 *   2. ST-2 (Sessional Test 2)      -> 11 Modules (Questions Upload Pending)
 *   3. End Term Examination         -> 14 Modules (Questions Upload Pending)
 * 
 * ----------------------------------------------------------------------------
 * 💡 AI AGENT INTEGRATION GUIDE (HOW TO ADD QUESTIONS TO ANY TERM):
 * ----------------------------------------------------------------------------
 * 1. When adding questions for a module in ST2 (e.g. st2_mod1 Percentage)
 *    or End Term (e.g. end_mod1 Time & Work):
 *    a) In this file (`syllabus.js`), find the module inside `SYLLABUS_DATA.st2`
 *       or `SYLLABUS_DATA.endterm`.
 *    b) Populate its `types` array with 3 to 6 problem-solving subtabs:
 *       {
 *         id: "type_1",             // Unique type ID matching question.type_id
 *         name: "Type 1: Title",    // Display name on subtabs
 *         desc: "Description...",   // Explanatory badge
 *         count: 8                  // MUST EXACTLY MATCH questions added for this type!
 *       }
 *    c) In `quiz_questions.js`, append your question objects using IDs:
 *       - For ST1:      `id: "mod{num}_q{x}"`,      `module_id: "mod{num}"`
 *       - For ST2:      `id: "st2_mod{num}_q{x}"`,  `module_id: "st2_mod{num}"`
 *       - For End Term: `id: "end_mod{num}_q{x}"`,  `module_id: "end_mod{num}"`
 *    d) In `app.js`, verify `selectedExamModuleIds` includes the activated module ID.
 *    e) Run `python verify_dataset.py` in your terminal to confirm 0 errors.
 * ============================================================================
 */

const SYLLABUS_DATA = {
  // ==========================================================================
  // TERM 1: SESSIONAL TEST 1 (ST-1) — 14 MODULES
  // ==========================================================================
  st1: {
    id: "st1",
    name: "ST1",
    title: "ST-1 Sessional Test",
    badge: "14 Modules",
    prefix: "ST-1 Practice",
    modules: [
    // -------------------------------------------------------------------------

    // MODULE 1: MOD1

    // -------------------------------------------------------------------------

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
  // -------------------------------------------------------------------------

  // MODULE 2: MOD2

  // -------------------------------------------------------------------------

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
    // -------------------------------------------------------------------------

    // MODULE 3: MOD3

    // -------------------------------------------------------------------------

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
    // -------------------------------------------------------------------------

    // MODULE 4: MOD4

    // -------------------------------------------------------------------------

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
    // -------------------------------------------------------------------------

    // MODULE 5: MOD5

    // -------------------------------------------------------------------------

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
    // -------------------------------------------------------------------------

    // MODULE 6: MOD6

    // -------------------------------------------------------------------------

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
    // -------------------------------------------------------------------------

    // MODULE 7: MOD7

    // -------------------------------------------------------------------------

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
    // -------------------------------------------------------------------------

    // MODULE 8: MOD8

    // -------------------------------------------------------------------------

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
    // -------------------------------------------------------------------------

    // MODULE 9: MOD9

    // -------------------------------------------------------------------------

    {

      id: "mod9",
    num: 9,
    title: "Ratio & Proportion",
    lectures: "ST-1 Quantitative Relations",
    desc: "Third/fourth proportionals, coin denomination bags, multi-vessel liquid replacements, alloy melting, candle burning rates, and income-expenditure ratios.",
    types: [
      { id: "type_1", name: "Type 1: Proportionals & Compound Ratio Formulations", desc: "Third and fourth proportionals, continuous ratio chains (A:B:C:D), speed/leap rates, and wage bill multiples.", count: 6 },
      { id: "type_2", name: "Type 2: Ratio Partitioning, Coins & Currency Bags", desc: "Sum and difference partitioning, multi-denomination coin bags (rupees, 50p, 25p, 20p, 5p), and linear equality partitions.", count: 6 },
      { id: "type_3", name: "Type 3: Mixture Replacements, Dilution & Alloys", desc: "Equal and unequal vessel combination, liquid additions, alloy melting proportions, and multi-step replacement equations.", count: 9 },
      { id: "type_4", name: "Type 4: Algebraic Shifts, Incomes, Expenditures & Rates", desc: "Uniform addition/subtraction to ratio terms, income-savings-expenditure models, candle consumption rates, and relative salary growth.", count: 7 }
    ]
  },
  // -------------------------------------------------------------------------

  // MODULE 10: MOD10

  // -------------------------------------------------------------------------

  {

    id: "mod10",
    num: 10,
    title: "Ages",
    lectures: "ST-1 Linear Relations",
    desc: "Simultaneous linear equations applied to past, present, and future age problems.",
    types: []
  },
    // -------------------------------------------------------------------------

    // MODULE 11: MOD11

    // -------------------------------------------------------------------------

    {

      id: "mod11",
    num: 11,
    title: "Partnership",
    lectures: "ST-1 Commercial Arithmetic",
    desc: "Simple and compound investment ratios, variable durations, working partner remuneration, charity deductions, and capital-profit inversions.",
    types: [
      { id: "type_1", name: "Type 1: Simple & Compound Investment Sharing", desc: "Equal and unequal investment durations, mid-term admissions, fractional capital & multi-year horizons.", count: 6 },
      { id: "type_2", name: "Type 2: Variable Time, Capital & Ratio Inversion", desc: "Solving for unknown capital, investment durations (T = P/C), capital ratios (C = P/T), and algebraic setups.", count: 7 },
      { id: "type_3", name: "Type 3: Working Partners, Salaries, Charity & Profit Deductions", desc: "Manager remuneration, percentage returns, charity pre-deductions, partial equal distributions, and ratio equations.", count: 5 }
    ]
  },
  // -------------------------------------------------------------------------

  // MODULE 12: MOD12

  // -------------------------------------------------------------------------

  {

    id: "mod12",
    num: 12,
    title: "Allegation",
    lectures: "ST-1 Mixture Mechanics",
    desc: "Cross-rule of alligation for calculating mean prices and liquid concentration replacements.",
    types: []
  },
  // -------------------------------------------------------------------------

  // MODULE 13: MOD13

  // -------------------------------------------------------------------------

  {

    id: "mod13",
    num: 13,
    title: "Odd Man Out",
    lectures: "ST-1 Anomaly Detection",
    desc: "Spotting the unique divergent element violating a mathematical pattern.",
    types: []
  },
    // -------------------------------------------------------------------------

    // MODULE 14: MOD14

    // -------------------------------------------------------------------------

    {

      id: "mod14",
    num: 14,
    title: "Syllogism",
    lectures: "ST-1 Deductive Logic",
    desc: "Categorical syllogisms, Venn diagram intersections, immediate conversions, complementary either-or pairs, and multi-premise deductive logic.",
    types: [
      { id: "type_1", name: "Type 1: Two-Statement Direct Deductions & Conversions", desc: "Universal and particular premise combinations, immediate proposition conversion, and direct containment.", count: 6 },
      { id: "type_2", name: "Type 2: Complementary Pairs & Either-Or Conditions", desc: "Contradictory propositions (Some + No) across identical subject-predicate terms yielding either-or conclusions.", count: 6 },
      { id: "type_3", name: "Type 3: Multi-Statement Chain Arguments", desc: "Three and four-premise deductive chains, concentric set containment, and non-adjacent set fallacies.", count: 10 },
      { id: "type_4", name: "Type 4: Complex Multi-Conclusion & Hybrid Either-Or Models", desc: "Four-statement syllogisms evaluating simultaneous definite conclusions alongside complementary either-or pairs.", count: 3 }
    ]
  }
]
  },

  // ==========================================================================
  // TERM 2: SESSIONAL TEST 2 (ST-2) — 11 MODULES
  // ==========================================================================
  st2: {
    id: "st2",
    name: "ST2",
    title: "ST-2 Sessional Test",
    badge: "11 Modules",
    prefix: "ST-2 Practice",
    modules: [
      // MODULE 1: Percentage
      {
        id: "st2_mod1",
        num: 1,
        title: "Percentage",
        lectures: "ST-2 Commercial Arithmetic",
        desc: "Percentage basics, fractions to percentage conversions, successive percentage changes, and expenditure-price-consumption relations.",
        types: []
      },

      // MODULE 2: Alphabet Test
      {
        id: "st2_mod2",
        num: 2,
        title: "Alphabet Test",
        lectures: "ST-2 Verbal Reasoning",
        desc: "Alphabetical ranking, word formation, backward-forward letter pair intervals, dictionary arrangement, and position shifts.",
        types: []
      },

      // MODULE 3: Mathematical Operation
      {
        id: "st2_mod3",
        num: 3,
        title: "Mathematical Operation",
        lectures: "ST-2 Symbolic Logic",
        desc: "Symbol substitution, operator interchange (+, -, *, /), balancing LHS and RHS equations, and BODMAS precedence evaluation.",
        types: []
      },

      // MODULE 4: Coding-Decoding
      {
        id: "st2_mod4",
        num: 4,
        title: "Coding-Decoding",
        lectures: "ST-2 Cipher Logic",
        desc: "Letter-to-letter shifts, opposite letter pairings, number-symbol matrix coding, and deciphering fictitious language codes.",
        types: []
      },

      // MODULE 5: Simple Interest
      {
        id: "st2_mod5",
        num: 5,
        title: "Simple Interest",
        lectures: "ST-2 Financial Mathematics",
        desc: "Principal, rate of interest, elapsed time relations (SI = PRT/100), money doubling/trebling periods, and varying interest slabs.",
        types: []
      },

      // MODULE 6: Compound Interest
      {
        id: "st2_mod6",
        num: 6,
        title: "Compound Interest",
        lectures: "ST-2 Financial Mathematics",
        desc: "Annual and semi-annual compounding, difference between CI and SI for 2 & 3 years, depreciation rates, and population dynamics.",
        types: []
      },

      // MODULE 7: Profit & Loss
      {
        id: "st2_mod7",
        num: 7,
        title: "Profit & Loss",
        lectures: "ST-2 Commercial Mathematics",
        desc: "Cost price, selling price, profit/loss percentage, dishonest dealer false weights, and successive buy-sell transaction chains.",
        types: []
      },

      // MODULE 8: Discount
      {
        id: "st2_mod8",
        num: 8,
        title: "Discount",
        lectures: "ST-2 Commercial Mathematics",
        desc: "Marked price, single equivalent discount of successive discount percentages, buy-x-get-y-free promotions, and net profit margins.",
        types: []
      },

      // MODULE 9: Number Sequence
      {
        id: "st2_mod9",
        num: 9,
        title: "Number Sequence",
        lectures: "ST-2 Sequence & Logic",
        desc: "Numerical position tests, identifying numbers immediately preceded or succeeded by specific conditions, and digit swapping.",
        types: []
      },

      // MODULE 10: Series
      {
        id: "st2_mod10",
        num: 10,
        title: "Series",
        lectures: "ST-2 Pattern Recognition",
        desc: "Missing number series, wrong term detection in series, mixed arithmetic-geometric series, and two-tier difference patterns.",
        types: []
      },

      // MODULE 11: Arithmetic Progression (A.P) & Geometric Progression (G.P)
      {
        id: "st2_mod11",
        num: 11,
        title: "Arithmetic Progression (A.P) & Geometric Progression (G.P)",
        lectures: "ST-2 Progressions & Series",
        desc: "Common difference, common ratio, n-th term formulas (Tn = a + (n-1)d, Tn = ar^(n-1)), sum of n terms (Sn), and infinite G.P. sums.",
        types: []
      }
    ]
  },

  // ==========================================================================
  // TERM 3: END TERM EXAMINATION — 14 MODULES
  // ==========================================================================
  endterm: {
    id: "endterm",
    name: "End Term",
    title: "End Term Examination",
    badge: "14 Modules",
    prefix: "End Term Practice",
    modules: [
      // MODULE 1: Time & Work
      {
        id: "end_mod1",
        num: 1,
        title: "Time & Work",
        lectures: "End Term Work Mechanics",
        desc: "Unit work method, worker efficiency ratios, alternate day work, workers leaving before completion, and group efficiency.",
        types: []
      },

      // MODULE 2: Pipe & Cistern
      {
        id: "end_mod2",
        num: 2,
        title: "Pipe & Cistern",
        lectures: "End Term Flow Mechanics",
        desc: "Inlet and outlet filling/emptying rates, net tank capacity, reservoir leakages, and alternating pipe schedules.",
        types: []
      },

      // MODULE 3: Mixed Proportion
      {
        id: "end_mod3",
        num: 3,
        title: "Mixed Proportion",
        lectures: "End Term Proportional Logic",
        desc: "Chain rule formulations (M1*D1*H1/W1 = M2*D2*H2/W2), garrison food provisions, and man-woman-boy equivalence.",
        types: []
      },

      // MODULE 4: Work & Wages
      {
        id: "end_mod4",
        num: 4,
        title: "Work & Wages",
        lectures: "End Term Commercial Allocation",
        desc: "Distributing total wages strictly in proportion to the fractional work done or individual worker efficiency.",
        types: []
      },

      // MODULE 5: Ranking
      {
        id: "end_mod5",
        num: 5,
        title: "Ranking",
        lectures: "End Term Positional Logic",
        desc: "Linear rankings from left/right and top/bottom, position interchanges, overlapping ranks, and minimum total row occupants.",
        types: []
      },

      // MODULE 6: Cube & Cuboid
      {
        id: "end_mod6",
        num: 6,
        title: "Cube & Cuboid",
        lectures: "End Term Spatial Reasoning",
        desc: "Painted cube cuts (n^3), corner/middle/central/inner cubes with 3, 2, 1, or 0 painted faces, and cuboid dissection counts.",
        types: []
      },

      // MODULE 7: Calendar
      {
        id: "end_mod7",
        num: 7,
        title: "Calendar",
        lectures: "End Term Chronological Reasoning",
        desc: "Odd day calculations, century leap years, finding the weekday for historical dates, and calendar year repetition periods.",
        types: []
      },

      // MODULE 8: Clock
      {
        id: "end_mod8",
        num: 8,
        title: "Clock",
        lectures: "End Term Angular Dynamics",
        desc: "Hand angle formulas (theta = |30H - 5.5M|), hand overlap and right angle frequency, and clock gain/loss error correction.",
        types: []
      },

      // MODULE 9: Time Sequence
      {
        id: "end_mod9",
        num: 9,
        title: "Time Sequence",
        lectures: "End Term Temporal Deduction",
        desc: "Elapsed time calculations, schedule appointments, bus intervals, and sequence deductions.",
        types: []
      },

      // MODULE 10: Reading Comprehension
      {
        id: "end_mod10",
        num: 10,
        title: "Reading Comprehension",
        lectures: "End Term Verbal Aptitude",
        desc: "Paragraph analysis, central idea extraction, author tone identification, contextual inference, and passage-based MCQs.",
        types: []
      },

      // MODULE 11: Rearrangement/ Jumbled Sentences
      {
        id: "end_mod11",
        num: 11,
        title: "Rearrangement/ Jumbled Sentences",
        lectures: "End Term Verbal Logic",
        desc: "Sentence ordering (PQRS / ABCDE), introductory sentence spotting, logical connective flow, and cohesive paragraphs.",
        types: []
      },

      // MODULE 12: Cloze Test
      {
        id: "end_mod12",
        num: 12,
        title: "Cloze Test",
        lectures: "End Term Contextual English",
        desc: "Contextual vocabulary, grammatical fillers, appropriate prepositions, and blank filling in continuous passages.",
        types: []
      },

      // MODULE 13: Vocabulary
      {
        id: "end_mod13",
        num: 13,
        title: "Vocabulary",
        lectures: "End Term Lexical Aptitude",
        desc: "Lexical mastery covering antonyms, synonyms, idiomatic expressions, and concise one-word substitutions.",
        types: [
          {
            id: "type_1",
            name: "a. Synonyms & Antonyms",
            desc: "Direct meaning matches, opposite pairs, and context nuances.",
            count: 0
          },
          {
            id: "type_2",
            name: "b. Idioms & Phrases",
            desc: "Figurative phrases, proverbs, and metaphorical expressions.",
            count: 0
          },
          {
            id: "type_3",
            name: "c. One-word Substitution",
            desc: "Concise single-word replacements for lengthy phrases and descriptions.",
            count: 0
          }
        ]
      },

      // MODULE 14: Error Detection & Sentence Improvement
      {
        id: "end_mod14",
        num: 14,
        title: "Error Detection & Sentence Improvement",
        lectures: "End Term Applied Grammar",
        desc: "Spotting grammatical fallacies, syntax errors, and sentence corrections in formal English.",
        types: [
          {
            id: "type_1",
            name: "a. Noun/Article/Verb/Subject-Verb Agreement",
            desc: "Core syntax rules, singular/plural concordance, tense consistency, and article usages.",
            count: 0
          }
        ]
      }
    ]
  }
};

/**
 * Backwards compatibility reference: default to ST-1 modules
 */
let SYLLABUS_MODULES = SYLLABUS_DATA.st1.modules;

/**
 * Helper function to retrieve syllabus modules for a specific term
 * @param {string} termId - "st1" | "st2" | "endterm"
 * @returns {Array} Array of module objects for the specified term
 */
function getSyllabusModules(termId = "st1") {
  return (SYLLABUS_DATA[termId] && SYLLABUS_DATA[termId].modules) 
    ? SYLLABUS_DATA[termId].modules 
    : SYLLABUS_DATA.st1.modules;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SYLLABUS_DATA, SYLLABUS_MODULES, getSyllabusModules };
}
