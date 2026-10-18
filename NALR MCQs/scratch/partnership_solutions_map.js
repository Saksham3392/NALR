// Comprehensive, structured metadata & mathematical solution specifications for all 18 Partnership questions in mod11

const PARTNERSHIP_SOLUTIONS = {
  // ===========================================================================
  // TYPE 1: SIMPLE & COMPOUND INVESTMENT SHARING
  // ===========================================================================
  'part_q1': {
    category: 'compound_sharing',
    title: 'Compound Investment Sharing Over 1 Year',
    table: {
      headers: ['Partner', 'Capital (₹)', 'Investment Duration (Months)'],
      rows: [
        ['Partner A', '₹1,000', '12 months (Full Year)'],
        ['Partner B', '₹4,000', '6 months (Joined after 6 mo)'],
        ['Partner C', '₹5,000', '4 months (Only 4 months)']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Identify Given Information',
        desc: 'Partner A started with ₹1,000 for 12 months. Partner B joined after 6 months with ₹4,000 (active for 12 − 6 = 6 months). Partner C invested ₹5,000 for 4 months. Total profit = ₹2,800.'
      },
      {
        num: 2,
        title: 'Calculate Effective Investments (Capital × Time)',
        desc: 'Effective Investment = Capital × Duration in months:',
        calcs: [
          'A: 1,000 × 12 = 12,000',
          'B: 4,000 × 6 = 24,000',
          'C: 5,000 × 4 = 20,000'
        ]
      },
      {
        num: 3,
        title: 'Simplify the Profit-Sharing Ratio',
        desc: 'Ratio A : B : C = 12,000 : 24,000 : 20,000',
        formula: 'Divide each by 4,000 ➔ 3 : 6 : 5'
      },
      {
        num: 4,
        title: 'Calculate Total Ratio Parts',
        desc: 'Total parts = 3 + 6 + 5 = 14 parts'
      },
      {
        num: 5,
        title: 'Calculate Value of One Part',
        desc: 'Total Profit = ₹2,800',
        formula: 'Value of 1 part = 2,800 ÷ 14 = ₹200'
      },
      {
        num: 6,
        title: 'Calculate Each Partner’s Profit Share',
        desc: 'Multiply each ratio part by the unit part value (₹200):',
        calcs: [
          'A = 3 × 200 = ₹600',
          'B = 6 × 200 = ₹1,200',
          'C = 5 × 200 = ₹1,000'
        ]
      }
    ],
    distribution: [
      { name: 'Partner A', parts: 3, val: '₹600', pct: 21.4, color: '#2563eb' },
      { name: 'Partner B', parts: 6, val: '₹1,200', pct: 42.9, color: '#0d9488' },
      { name: 'Partner C', parts: 5, val: '₹1,000', pct: 35.7, color: '#f59e0b' }
    ],
    resultExplanation: 'The profit is divided as ₹600, ₹1,200, and ₹1,000 respectively, exactly matching option A.'
  },

  'part_q2': {
    category: 'compound_sharing',
    title: 'Mid-Term Admission & Withdrawal Allocation',
    table: {
      headers: ['Partner', 'Capital (₹)', 'Investment Duration (Months)'],
      rows: [
        ['Partner A', '₹3,000', '12 months (Full Year)'],
        ['Partner B', '₹4,000', '6 months (Withdrew after 6 mo)'],
        ['Partner C', '₹4,500', '8 months (Admitted after 4 mo: 12 − 4 = 8 mo)']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Identify Given Information',
        desc: 'A contributes ₹3,000 for 12 months. B contributes ₹4,000 and withdraws after 6 months. C joins after 4 months with ₹4,500 and stays till year end (8 months). Total profit = ₹1,000.'
      },
      {
        num: 2,
        title: 'Calculate Effective Investments (Capital × Time)',
        desc: 'Effective Investment = Capital × Duration in months:',
        calcs: [
          'A: 3,000 × 12 = 36,000',
          'B: 4,000 × 6 = 24,000',
          'C: 4,500 × 8 = 36,000'
        ]
      },
      {
        num: 3,
        title: 'Simplify the Profit-Sharing Ratio',
        desc: 'Ratio A : B : C = 36,000 : 24,000 : 36,000',
        formula: 'Divide each by 12,000 ➔ 3 : 2 : 3'
      },
      {
        num: 4,
        title: 'Calculate Total Ratio Parts',
        desc: 'Total parts = 3 + 2 + 3 = 8 parts'
      },
      {
        num: 5,
        title: 'Calculate Value of One Part',
        desc: 'Total Profit = ₹1,000',
        formula: 'Value of 1 part = 1,000 ÷ 8 = ₹125'
      },
      {
        num: 6,
        title: 'Calculate Each Partner’s Profit Share',
        desc: 'Multiply each ratio part by the unit part value (₹125):',
        calcs: [
          'A = 3 × 125 = ₹375',
          'B = 2 × 125 = ₹250',
          'C = 3 × 125 = ₹375'
        ]
      }
    ],
    distribution: [
      { name: 'Partner A', parts: 3, val: '₹375', pct: 37.5, color: '#2563eb' },
      { name: 'Partner B', parts: 2, val: '₹250', pct: 25.0, color: '#0d9488' },
      { name: 'Partner C', parts: 3, val: '₹375', pct: 37.5, color: '#f59e0b' }
    ],
    resultExplanation: 'The profit is divided as ₹375, ₹250, and ₹375 respectively, matching option C.'
  },

  'part_q3': {
    category: 'compound_sharing',
    title: 'Fractional Capital & Fractional Duration Division',
    table: {
      headers: ['Partner', 'Fraction of Capital', 'Fraction of Time'],
      rows: [
        ['Partner A', '1/3 of Capital', '1/3 of Time'],
        ['Partner B', '1/6 of Capital', '1/3 of Time'],
        ['Partner C', '1 − (1/3 + 1/6) = 1/2 of Capital', 'Whole Time (1)']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Determine Remaining Capital for C',
        desc: 'Sum of capital fractions for A and B = 1/3 + 1/6 = 3/6 = 1/2.',
        formula: 'C’s capital fraction = 1 − 1/2 = 1/2 (invested for whole time = 1)'
      },
      {
        num: 2,
        title: 'Calculate Effective Investment Fractions (C × T)',
        desc: 'Multiply capital fraction by time fraction:',
        calcs: [
          'A: (1/3) × (1/3) = 1/9',
          'B: (1/6) × (1/3) = 1/18',
          'C: (1/2) × 1 = 1/2'
        ]
      },
      {
        num: 3,
        title: 'Convert Fractions to an Integer Ratio',
        desc: 'Find LCM of denominators (9, 18, 2) = 18 and multiply through:',
        calcs: [
          'A: (1/9) × 18 = 2',
          'B: (1/18) × 18 = 1',
          'C: (1/2) × 18 = 9',
          '➔ Ratio A : B : C = 2 : 1 : 9'
        ]
      },
      {
        num: 4,
        title: 'Calculate Total Parts and Unit Value',
        desc: 'Total parts = 2 + 1 + 9 = 12 parts. Total profit = ₹1,200.',
        formula: 'Value of 1 part = 1,200 ÷ 12 = ₹100'
      },
      {
        num: 5,
        title: 'Calculate Each Partner’s Profit Share',
        desc: 'Multiply ratio parts by ₹100:',
        calcs: [
          'A = 2 × 100 = ₹200',
          'B = 1 × 100 = ₹100',
          'C = 9 × 100 = ₹900'
        ]
      }
    ],
    distribution: [
      { name: 'Partner A', parts: 2, val: '₹200', pct: 16.7, color: '#2563eb' },
      { name: 'Partner B', parts: 1, val: '₹100', pct: 8.3, color: '#0d9488' },
      { name: 'Partner C', parts: 9, val: '₹900', pct: 75.0, color: '#f59e0b' }
    ],
    resultExplanation: 'The profit is divided as ₹200, ₹100, and ₹900 respectively, matching option B.'
  },

  'part_q5': {
    category: 'compound_sharing',
    title: 'Two-Year Multi-Year Horizon Profit Allocation',
    table: {
      headers: ['Partner', 'Capital (₹)', 'Duration (2 Years = 24 Months)'],
      rows: [
        ['Partner A', '₹12,000', '24 months (Full 2 Years)'],
        ['Partner B', '₹16,000', '24 months (Full 2 Years)'],
        ['Partner C', '₹15,000', '16 months (Joined after 8 months: 24 − 8 = 16 mo)']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Establish the Time Horizon in Months',
        desc: 'Total period = 2 years = 24 months. Partner C joins after 8 months, so C is active for 24 − 8 = 16 months.'
      },
      {
        num: 2,
        title: 'Calculate Effective Monthly Equivalents (Capital × Time)',
        desc: 'Multiply capital by number of active months:',
        calcs: [
          'A: 12,000 × 24 = 288,000',
          'B: 16,000 × 24 = 384,000',
          'C: 15,000 × 16 = 240,000'
        ]
      },
      {
        num: 3,
        title: 'Simplify Profit-Sharing Ratio',
        desc: 'Ratio A : B : C = 288,000 : 384,000 : 240,000',
        formula: 'Divide each by 48,000 ➔ 6 : 8 : 5'
      },
      {
        num: 4,
        title: 'Calculate Total Parts and Value per Part',
        desc: 'Total parts = 6 + 8 + 5 = 19 parts. Total profit = ₹45,600.',
        formula: 'Value of 1 part = 45,600 ÷ 19 = ₹2,400'
      },
      {
        num: 5,
        title: 'Calculate C’s Specific Share',
        desc: 'C holds 5 parts out of 19:',
        formula: 'C’s share = 5 × 2,400 = ₹12,000'
      }
    ],
    distribution: [
      { name: 'Partner A', parts: 6, val: '₹14,400', pct: 31.6, color: '#2563eb' },
      { name: 'Partner B', parts: 8, val: '₹19,200', pct: 42.1, color: '#0d9488' },
      { name: 'Partner C', parts: 5, val: '₹12,000', pct: 26.3, color: '#f59e0b' }
    ],
    resultExplanation: 'C’s share in the ₹45,600 profit after 2 years is exactly ₹12,000, matching option A.'
  },

  'part_q6': {
    category: 'compound_sharing',
    title: 'Algebraic Multiples of Capital & Duration',
    table: {
      headers: ['Partner', 'Capital Multiplier', 'Time Multiplier', 'Product Factor (C × T)'],
      rows: [
        ['Nandan', 'C', 'T', '1 × 1 = 1 unit'],
        ['Kishan', '3C (Thrice Nandan)', '2T (Twice Nandan)', '3 × 2 = 6 units']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Express Given Information Algebraically',
        desc: 'Let Nandan’s capital = C and time = T. Kishan’s capital = 3C and time = 2T.'
      },
      {
        num: 2,
        title: 'Calculate Effective Investment Ratio',
        desc: 'Profit ratio Kishan : Nandan = (Capital_K × Time_K) : (Capital_N × Time_N)',
        formula: '(3C × 2T) : (C × T) = 6CT : 1CT = 6 : 1'
      },
      {
        num: 3,
        title: 'Find Value of One Part from Nandan’s Known Profit',
        desc: 'Nandan receives ₹4,000 for his share (which corresponds to 1 ratio part).',
        formula: 'Value of 1 part = ₹4,000'
      },
      {
        num: 4,
        title: 'Calculate Total Profit of the Firm',
        desc: 'Total parts = Kishan (6 parts) + Nandan (1 part) = 7 parts.',
        formula: 'Total Profit = 7 × 4,000 = ₹28,000'
      }
    ],
    distribution: [
      { name: 'Kishan', parts: 6, val: '₹24,000', pct: 85.7, color: '#2563eb' },
      { name: 'Nandan', parts: 1, val: '₹4,000', pct: 14.3, color: '#0d9488' }
    ],
    resultExplanation: 'The total profit earned by the joint firm is ₹28,000, matching option C.'
  },

  'part_q15': {
    category: 'compound_sharing',
    title: 'Capital Share Deduction from Equal-Time Profit Ratio',
    table: {
      headers: ['Partner', 'Profit Earned (₹)', 'Simplified Ratio', 'Capital Share'],
      rows: [
        ['Partner A', '₹1,250', '1 part', '1/6 of Total Capital'],
        ['Partner B', '₹2,500', '2 parts', '2/6 of Total Capital'],
        ['Partner C', '₹3,750', '3 parts', '3/6 = 1/2 of Total Capital']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Apply Equal Investment Duration Principle',
        desc: 'Since all three partners invested for the same duration (1 year), the Profit Ratio equals the Capital Ratio directly: Capital A : Capital B : Capital C = Profit A : Profit B : Profit C.'
      },
      {
        num: 2,
        title: 'Simplify Profit-Sharing Ratio',
        desc: 'Ratio = 1,250 : 2,500 : 3,750',
        formula: 'Divide each by 1,250 ➔ 1 : 2 : 3'
      },
      {
        num: 3,
        title: 'Calculate Total Ratio Parts',
        desc: 'Total parts = 1 + 2 + 3 = 6 parts'
      },
      {
        num: 4,
        title: 'Calculate Capital Contributed by C',
        desc: 'Total combined investment = ₹14,400. C’s fraction = 3/6 = 1/2.',
        formula: 'C’s Capital = (3 ÷ 6) × 14,400 = (1/2) × 14,400 = ₹7,200'
      }
    ],
    distribution: [
      { name: 'Partner A', parts: 1, val: '₹2,400 invested', pct: 16.7, color: '#2563eb' },
      { name: 'Partner B', parts: 2, val: '₹4,800 invested', pct: 33.3, color: '#0d9488' },
      { name: 'Partner C', parts: 3, val: '₹7,200 invested', pct: 50.0, color: '#f59e0b' }
    ],
    resultExplanation: 'C contributed ₹7,200 out of the total ₹14,400 capital, exactly matching option C.'
  },

  // ===========================================================================
  // TYPE 2: VARIABLE TIME, CAPITAL & RATIO INVERSION
  // ===========================================================================
  'part_q4': {
    category: 'unknown_variable',
    title: 'Solving for Unknown Capital Contribution',
    table: {
      headers: ['Partner', 'Known Capital (₹)', 'Duration', 'Profit Share (₹)'],
      rows: [
        ['Manoj', '₹20,000', '6 months', '₹6,000'],
        ['Ramesh', 'R (Unknown)', '12 months (Full Year)', '9,000 − 6,000 = ₹3,000']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Deduce Ramesh’s Profit Share & Ratio',
        desc: 'Total profit = ₹9,000. Manoj’s share = ₹6,000.',
        formula: 'Ramesh’s share = 9,000 − 6,000 = ₹3,000 ➔ Profit Ratio Manoj : Ramesh = 6,000 : 3,000 = 2 : 1'
      },
      {
        num: 2,
        title: 'Formulate Fundamental Partnership Equation',
        desc: 'Profit Ratio = (Capital_M × Time_M) / (Capital_R × Time_R)',
        formula: '(20,000 × 6) / (R × 12) = 2 / 1'
      },
      {
        num: 3,
        title: 'Simplify and Isolate Unknown Capital (R)',
        desc: 'Numerator = 120,000. Denominator = 12R.',
        calcs: [
          '120,000 / 12R = 2 / 1',
          '10,000 / R = 2',
          '2R = 10,000 ➔ R = 10,000 ÷ 2 = ₹5,000'
        ]
      }
    ],
    resultExplanation: 'Ramesh invested ₹5,000 for the full year, matching option D.'
  },

  'part_q7': {
    category: 'unknown_variable',
    title: 'Solving for Unknown Investment Duration',
    table: {
      headers: ['Partner', 'Capital Ratio', 'Investment Duration', 'Profit Ratio'],
      rows: [
        ['Partner A', '5 parts', '8 months (Withdrew then)', '4 parts'],
        ['Partner B', '9 parts', 'T_B (Unknown months)', '9 parts']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Identify Known Ratios & Time Parameters',
        desc: 'Capitals are in ratio 5 : 9. A invests for 8 months. Profit ratio is 4 : 9.'
      },
      {
        num: 2,
        title: 'Set Up Partnership Ratio Formula',
        desc: '(Capital_A × Time_A) / (Capital_B × Time_B) = Profit_A / Profit_B',
        formula: '(5 × 8) / (9 × T_B) = 4 / 9'
      },
      {
        num: 3,
        title: 'Solve for T_B Algebraically',
        desc: 'Simplify the equation:',
        calcs: [
          '40 / (9 × T_B) = 4 / 9',
          'Cancel 9 from both denominators: 40 / T_B = 4',
          'T_B = 40 ÷ 4 = 10 months'
        ]
      }
    ],
    resultExplanation: 'B’s capital was invested in the business for 10 months, matching option A.'
  },

  'part_q8': {
    category: 'unknown_variable',
    title: 'Delayed Entry Month Calculation',
    table: {
      headers: ['Partner', 'Capital (₹)', 'Duration in Business (t)', 'Profit Ratio'],
      rows: [
        ['Partner A', '₹2,700', '12 months (Full Year)', '2 parts'],
        ['Partner B', '₹2,025', 't months (Active)', '1 part']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Set Up Equation for Active Investment Duration (t)',
        desc: 'A was invested for 12 months. B was active for t months. Profit ratio = 2 : 1.',
        formula: '(2,700 × 12) / (2,025 × t) = 2 / 1'
      },
      {
        num: 2,
        title: 'Solve for Active Months (t)',
        desc: 'Evaluate numerator and cross-multiply:',
        calcs: [
          '32,400 / (2,025 × t) = 2 / 1',
          '2 × 2,025 × t = 32,400',
          '4,050 × t = 32,400 ➔ t = 32,400 ÷ 4,050 = 8 months'
        ]
      },
      {
        num: 3,
        title: 'Distinguish Active Duration from Entry Delay',
        desc: 'The question asks "After how many months did B join?", not how long B remained:',
        formula: 'Months before joining = 12 − t = 12 − 8 = 4 months'
      }
    ],
    resultExplanation: 'B joined the business after 4 months, exactly matching option A.'
  },

  'part_q9': {
    category: 'unknown_variable',
    title: 'Compound Ratio Multiplication (Profit = Capital × Time)',
    table: {
      headers: ['Partner', 'Capital Ratio', 'Time Ratio', 'Profit Equivalent (C × T)'],
      rows: [
        ['Partner A', '1', '1', '1 × 1 = 1'],
        ['Partner B', '2', '2', '2 × 2 = 4'],
        ['Partner C', '3', '3', '3 × 3 = 9']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'State the Fundamental Proportionality Principle',
        desc: 'Profit is directly proportional to the product of capital and duration: Profit Ratio = (C_A × T_A) : (C_B × T_B) : (C_C × T_C)'
      },
      {
        num: 2,
        title: 'Perform Term-by-Term Multiplications',
        desc: 'Substitute the given capital ratio (1 : 2 : 3) and time ratio (1 : 2 : 3):',
        calcs: [
          'A: 1 × 1 = 1',
          'B: 2 × 2 = 4',
          'C: 3 × 3 = 9'
        ]
      },
      {
        num: 3,
        title: 'Express the Final Profit Distribution Ratio',
        desc: 'The simplified ratio of profit is:',
        formula: 'Profit Ratio = 1 : 4 : 9'
      }
    ],
    resultExplanation: 'Their profits will be distributed in the ratio 1 : 4 : 9, matching option C.'
  },

  'part_q10': {
    category: 'unknown_variable',
    title: 'Ratio Inversion for Unknown Time Ratio (Time = Profit / Capital)',
    table: {
      headers: ['Partner', 'Capital Ratio (C)', 'Profit Ratio (P)', 'Time Fraction (P / C)'],
      rows: [
        ['Partner A', '4', '2', '2/4 = 1/2'],
        ['Partner B', '5', '3', '3/5'],
        ['Partner C', '6', '4', '4/6 = 2/3']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Derive the Inversion Formula for Duration',
        desc: 'Since Profit = Capital × Time, rearranging yields:',
        formula: 'Time = Profit ÷ Capital ➔ T_A : T_B : T_C = (P_A / C_A) : (P_B / C_B) : (P_C / C_C)'
      },
      {
        num: 2,
        title: 'Substitute Given Ratios',
        desc: 'Capital ratio = 4 : 5 : 6; Profit ratio = 2 : 3 : 4:',
        calcs: [
          'A: 2 / 4 = 1/2',
          'B: 3 / 5',
          'C: 4 / 6 = 2/3',
          '➔ Raw Time Ratio = 1/2 : 3/5 : 2/3'
        ]
      },
      {
        num: 3,
        title: 'Clear Denominators Using LCM',
        desc: 'LCM of denominators (2, 5, 3) = 30. Multiply each term by 30:',
        calcs: [
          'A = (1/2) × 30 = 15',
          'B = (3/5) × 30 = 18',
          'C = (2/3) × 30 = 20'
        ],
        formula: 'Simplified Time Ratio = 15 : 18 : 20'
      }
    ],
    resultExplanation: 'The ratio of time for which their capitals were contributed is 15 : 18 : 20, matching option D.'
  },

  'part_q11': {
    category: 'unknown_variable',
    title: 'Ratio Inversion for Unknown Capital Ratio (Capital = Profit / Time)',
    table: {
      headers: ['Partner', 'Period Ratio (T)', 'Profit Ratio (P)', 'Capital Fraction (P / T)'],
      rows: [
        ['Partner A', '2', '4', '4/2 = 2'],
        ['Partner B', '3', '5', '5/3'],
        ['Partner C', '6', '6', '6/6 = 1']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Derive the Inversion Formula for Capital',
        desc: 'Since Profit = Capital × Time, rearranging yields:',
        formula: 'Capital = Profit ÷ Time ➔ C_A : C_B : C_C = (P_A / T_A) : (P_B / T_B) : (P_C / T_C)'
      },
      {
        num: 2,
        title: 'Substitute Given Ratios',
        desc: 'Periods ratio = 2 : 3 : 6; Profit ratio = 4 : 5 : 6:',
        calcs: [
          'A: 4 / 2 = 2',
          'B: 5 / 3',
          'C: 6 / 6 = 1',
          '➔ Raw Capital Ratio = 2 : 5/3 : 1'
        ]
      },
      {
        num: 3,
        title: 'Clear Denominators Using LCM',
        desc: 'Multiply through by 3 to eliminate the fraction:',
        calcs: [
          'A = 2 × 3 = 6',
          'B = (5/3) × 3 = 5',
          'C = 1 × 3 = 3'
        ],
        formula: 'Simplified Capital Ratio = 6 : 5 : 3'
      }
    ],
    resultExplanation: 'The investments made by A, B, and C are in the ratio 6 : 5 : 3, matching option D.'
  },

  'part_q16': {
    category: 'unknown_variable',
    title: 'Simultaneous Capital & Profit Difference Equation',
    table: {
      headers: ['Partner', 'Capital Expression', 'Duration', 'Profit Share'],
      rows: [
        ['Partner A', 'x + 375', '8 months', 'P_A = ₹100'],
        ['Partner B', 'x (Unknown)', '4 months', 'P_B = ₹25']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Find Individual Profit Shares',
        desc: 'Total Profit = P_A + P_B = 125. Given P_A − P_B = 75.',
        calcs: [
          '2 P_A = 125 + 75 = 200 ➔ P_A = ₹100',
          'P_B = 125 − 100 = ₹25',
          'Profit Ratio P_A : P_B = 100 : 25 = 4 : 1'
        ]
      },
      {
        num: 2,
        title: 'Formulate Capital Ratio Equation',
        desc: 'Let B’s capital = x. A’s capital = x + 375.',
        formula: '[(x + 375) × 8] / [x × 4] = 4 / 1'
      },
      {
        num: 3,
        title: 'Solve for B’s Capital (x)',
        desc: 'Simplify the fraction (8 ÷ 4 = 2):',
        calcs: [
          '2(x + 375) / x = 4',
          '(x + 375) / x = 2',
          'x + 375 = 2x ➔ x = ₹375'
        ]
      }
    ],
    resultExplanation: 'The capital contributed by B is ₹375, matching option B.'
  },

  // ===========================================================================
  // TYPE 3: SALARIES, CHARITY, INTEREST & PROFIT DEDUCTIONS
  // ===========================================================================
  'part_q12': {
    category: 'deduction_special',
    title: 'Return on Capital Percentage Shift with Equal Remainder',
    table: {
      headers: ['Partner', 'Profit Fraction', 'Normalized Ratio', 'Capital Share'],
      rows: [
        ['Partner A', '2/7 = 4/14', '4 parts', '₹4,800'],
        ['Partner B', '(1/2) × 5/7 = 5/14', '5 parts', '₹6,000'],
        ['Partner C', '(1/2) × 5/7 = 5/14', '5 parts', '₹6,000']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Determine Profit Fractions for All Partners',
        desc: 'A receives 2/7. Remaining profit = 1 − 2/7 = 5/7. B and C share the remainder equally:',
        formula: 'B = C = (1/2) × (5/7) = 5/14 ➔ A : B : C = 4/14 : 5/14 : 5/14 = 4 : 5 : 5'
      },
      {
        num: 2,
        title: 'Link Percentage Increase in Profit Rate to A’s Capital',
        desc: 'A’s income increases by ₹240 when overall return rate rises from 10% to 15% (an increase of 5% on capital):',
        formula: '5% of Capital_A = 240 ➔ 0.05 × Capital_A = 240 ➔ Capital_A = 240 ÷ 0.05 = ₹4,800'
      },
      {
        num: 3,
        title: 'Calculate Capitals of B and C Using Capital Ratio',
        desc: 'Since capitals are in the ratio A : B = 4 : 5:',
        calcs: [
          'Capital_B = Capital_C = 4,800 × (5 ÷ 4)',
          'Capital_B = 1,200 × 5 = ₹6,000'
        ]
      }
    ],
    resultExplanation: 'The capitals invested by B and C each are ₹6,000, matching option D.'
  },

  'part_q13': {
    category: 'deduction_special',
    title: 'Partial Equal Split & Capital-Based Interest Allocation',
    table: {
      headers: ['Component', 'Percentage of Total Profit (P)', 'Allocation Rule'],
      rows: [
        ['Equal Split Portion', '40% of P (0.40P)', 'Divided equally ➔ Creates 0 difference between partners'],
        ['Interest on Capital', '60% of P (0.60P)', 'Divided in ratio of capitals ➔ Generates the ₹450 difference']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Simplify the Capital Ratio',
        desc: 'Capitals invested = ₹26,000 and ₹16,250.',
        formula: 'Ratio = 26,000 : 16,250 = (divide by 3,250) ➔ 8 : 5 (Total parts = 13)'
      },
      {
        num: 2,
        title: 'Analyze the Source of Profit Difference',
        desc: 'The 40% divided equally contributes equally to both, creating zero difference. The ₹450 difference comes solely from the remaining 60% (0.60P) distributed in the ratio 8 : 5.'
      },
      {
        num: 3,
        title: 'Formulate Difference Equation',
        desc: 'Difference fraction = (8 − 5) / (8 + 5) = 3 / 13 of the 60% profit pool:',
        formula: 'Difference = (3 / 13) × 0.60P = (3 / 13) × (3 / 5)P = (9 / 65)P'
      },
      {
        num: 4,
        title: 'Solve for Total Business Profit (P)',
        desc: 'Set the fraction equal to ₹450:',
        calcs: [
          '(9 / 65)P = 450',
          'P = (450 × 65) ÷ 9 = 50 × 65 = ₹3,250'
        ]
      }
    ],
    resultExplanation: 'The total profit made in the business is ₹3,250, matching option A.'
  },

  'part_q14': {
    category: 'deduction_special',
    title: 'Pre-Distribution Charity Deduction & Total Profit Deduction',
    table: {
      headers: ['Partition', 'Percentage of Total (P)', 'Status'],
      rows: [
        ['Charity Deduction', '10% of P (0.10P)', 'Deducted off the top before sharing'],
        ['Distributable Pool', '90% of P (0.90P)', 'Divided between A and B in ratio 5 : 3']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Calculate Distributable Profit Pool',
        desc: 'Let Total Profit = P. 10% goes to charity, leaving 90% (0.90P) for distribution.'
      },
      {
        num: 2,
        title: 'Express A’s Share of Distributable Profit',
        desc: 'Investment ratio A : B = 5 : 3 (Total parts = 5 + 3 = 8). A receives 5/8 of the distributable pool:',
        formula: 'A’s Share = (5 / 8) × 0.90P = 900'
      },
      {
        num: 3,
        title: 'Solve for Total Profit (P)',
        desc: 'Rearrange and isolate P:',
        calcs: [
          '(4.5P) / 8 = 900',
          '4.5P = 900 × 8 = 7,200',
          'P = 7,200 ÷ 4.5 = ₹1,600'
        ]
      }
    ],
    resultExplanation: 'The total profit generated by the business is ₹1,600, matching option A.'
  },

  'part_q17': {
    category: 'deduction_special',
    title: 'Working Partner Salary Remuneration & Remaining Capital Split',
    table: {
      headers: ['Partner', 'Capital (₹)', 'Capital Ratio', 'Total Remuneration (1 Year)'],
      rows: [
        ['Partner A (Managing)', '₹3,000', '3 parts', '₹10/month × 12 = ₹120 salary'],
        ['Partner B (Sleeping)', '₹4,000', '4 parts', '₹0 salary (Profit share only)']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Calculate A’s Annual Remuneration (Salary)',
        desc: 'A receives ₹10 per month as salary for managing the business:',
        formula: 'Annual Salary = 10 × 12 = ₹120'
      },
      {
        num: 2,
        title: 'Deduct Salary to Find A’s Profit Share from Investments',
        desc: 'A received a total of ₹390 in the year. Subtracting salary gives A’s profit share:',
        formula: 'A’s Investment Profit = 390 − 120 = ₹270'
      },
      {
        num: 3,
        title: 'Determine Investment Ratio A : B',
        desc: 'Capitals are ₹3,000 and ₹4,000:',
        formula: 'Ratio A : B = 3,000 : 4,000 = 3 : 4'
      },
      {
        num: 4,
        title: 'Calculate Value of 1 Ratio Part and B’s Profit Share',
        desc: 'A’s 3 parts = ₹270 ➔ 1 part = 270 ÷ 3 = ₹90:',
        formula: 'B’s Share = 4 parts × 90 = ₹360'
      }
    ],
    resultExplanation: 'Partner B receives ₹360 from the business profit, exactly matching option B.'
  },

  'part_q18': {
    category: 'deduction_special',
    title: 'Linear Ratio Difference Equation',
    table: {
      headers: ['Partner', 'Ratio Allocation', 'Sub-Group Sum'],
      rows: [
        ['Partner A', '2 parts', 'A + B = 2 + 3 = 5 parts'],
        ['Partner B', '3 parts', '—'],
        ['Partner C', '7 parts', 'C alone = 7 parts']
      ]
    },
    steps: [
      {
        num: 1,
        title: 'Establish the Ratio Structure',
        desc: 'A sum of money is divided among A, B, and C in the ratio 2 : 3 : 7.'
      },
      {
        num: 2,
        title: 'Formulate the Given Difference Equation',
        desc: 'Share of (A + B) = 2 + 3 = 5 parts. Share of C = 7 parts. C exceeds (A + B) by 1,500:',
        formula: 'Difference = 7 parts − 5 parts = 2 parts = 1,500'
      },
      {
        num: 3,
        title: 'Solve for One Part and Determine A’s Share',
        desc: '2 parts = 1,500 ➔ 1 part = 1,500 ÷ 2 = ₹750:',
        formula: 'A’s share = 2 parts × 750 = ₹1,500'
      }
    ],
    resultExplanation: 'A’s share in the sum of money is ₹1,500, matching option B.'
  }
};

module.exports = { PARTNERSHIP_SOLUTIONS };
console.log('Saved PARTNERSHIP_SOLUTIONS with', Object.keys(PARTNERSHIP_SOLUTIONS).length, 'entries.');
