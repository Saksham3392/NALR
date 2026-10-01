const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

const partQs = QUIZ_QUESTIONS.filter(q => q.module_id === 'mod11');

partQs.forEach((q, i) => {
  const text = q.question + '\n' + (q.explanation || '');
  
  // Extract partners from text or explanation
  const partners = [];
  
  // Try to find lines with partner investments or shares in explanation
  const expLines = (q.explanation || '').split('\n');
  const partnersFound = new Set();
  
  // Match patterns like "A's effective investment = 1000 × 12 = 12,000" or "A: 3000 × 12 = 36,000"
  expLines.forEach(line => {
    const m = line.match(/(?:([A-Z][a-z]*)(?:'s|\s*(?:contributes|advances|invested|invests|share|ratio))?)\s*(?:effective investment|capital share|investment equivalents)?[=:\-]\s*([0-9,]+(?:\s*[×x*]\s*[0-9]+(?:\/[0-9]+)?)?(?:\s*=\s*[0-9,]+)?)/i);
    if (m && m[1] && !/total|ratio|profit|multiply|hence|therefore|step/i.test(m[1])) {
      partnersFound.add(m[1].trim());
    }
  });

  // Also check standard A, B, C if mentioned in question
  ['A', 'B', 'C'].forEach(p => {
    if (new RegExp(`\\b${p}\\b`).test(q.question)) {
      partnersFound.add(p);
    }
  });
  ['Kishan', 'Nandan', 'Manoj', 'Ramesh'].forEach(p => {
    if (new RegExp(`\\b${p}\\b`, 'i').test(q.question)) {
      partnersFound.add(p);
    }
  });

  // Extract profit
  const profitMatch = text.match(/profit\s+(?:of\s+)?(?:is\s+)?(?:Rs\.?|₹)?\s*([0-9,]+)/i);
  const profit = profitMatch ? profitMatch[1] : 'Total Profit';

  // Extract ratio if present
  const ratioMatch = text.match(/ratio\s+(?:A\s*:\s*B(?:\s*:\s*C)?\s*=\s*)?([0-9]+(?:\/[0-9]+)?\s*:\s*[0-9]+(?:\/[0-9]+)?(?:\s*:\s*[0-9]+(?:\/[0-9]+)?)?)/i);

  console.log(`Q${i+1} [${q.id}]: Partners=[${Array.from(partnersFound).join(', ')}] | Profit=${profit} | Ratio=${ratioMatch ? ratioMatch[1] : 'derived'} | Correct=${q.correct}`);
});
