# -*- coding: utf-8 -*-
import json
import re

# Load the raw extracted items
with open('scratch/fa2_raw_extracted.json', 'r', encoding='utf-8') as f:
    raw_list = json.load(f)

# Comprehensive explanations dictionary for all 72 questions
EXPLANATIONS = {
    # Topic 1: Ratio & Proportion (Q1 - Q38)
    "fa2_q1": """📐 Continued Ratio Analysis:
1. Given: A/B = 2/3 and B/C = 4/5.
2. Multiplying the two ratios:
   (A/B) × (B/C) = (2/3) × (4/5) ⟹ A/C = 8/15.
3. Taking the reciprocal to find C:A:
   C/A = 15/8 ⟹ C:A = **15:8**.""",

    "fa2_q2": """📐 Ratio from Coefficients:
1. Given: 2a = 3b = 4c = k.
2. Express each variable in terms of k:
   a = k/2, b = k/3, c = k/4.
3. Find a:b:c by multiplying by LCM(2, 3, 4) = 12:
   a : b : c = (12/2) : (12/3) : (12/4) = **6:4:3**.""",

    "fa2_q3": """📐 Compound Fraction Ratio:
1. Given: A:B:C = 2:3:4. Let A = 2, B = 3, C = 4.
2. Evaluate each fraction:
   A/B = 2/3,  B/C = 3/4,  C/A = 4/2 = 2/1.
3. The ratio is 2/3 : 3/4 : 2/1.
4. Multiply each term by LCM(3, 4, 1) = 12:
   (2/3 × 12) : (3/4 × 12) : (2/1 × 12) = **8:9:24**.""",

    "fa2_q4": """📐 Amount Partitioning & Deduction:
1. Ratio of shares = 3:6:5. Sum of ratio parts = 3 + 6 + 5 = 14 parts.
2. Value of 1 part = Rs. 5600 / 14 = Rs. 400.
3. Initial shares:
   - Amar: 3 × 400 = Rs. 1200
   - Bhavan: 6 × 400 = Rs. 2400
   - Chetan: 5 × 400 = Rs. 2000
4. Deducting Rs. 400 from each share:
   - Amar = 1200 − 400 = Rs. 800
   - Bhavan = 2400 − 400 = Rs. 2000
   - Chetan = 2000 − 400 = Rs. 1600
5. New ratio = 800 : 2000 : 1600 = 8 : 20 : 16 = **2:5:4**.""",

    "fa2_q5": """💰 Coin Bag Value Model:
1. Ratio of coins (25p : 10p : 5p) = 1 : 2 : 3.
2. Let the number of coins be x, 2x, and 3x.
3. Total value in paise:
   25(x) + 10(2x) + 5(3x) = 25x + 20x + 15x = 60x paise.
4. Total amount = Rs. 30 = 3000 paise.
   60x = 3000 ⟹ x = 50.
5. Number of 5 paisa coins = 3x = 3 × 50 = **150**.""",

    "fa2_q6": """📐 Difference of Ratio Terms:
1. Let price of scooter = 3x and TV = 2x.
2. Difference in price: 3x − 2x = x = Rs. 6000.
3. Price of television set = 2x = 2 × 6000 = Rs. **12000**.""",

    "fa2_q7": """📊 Venn Set Extrema:
1. Total applicants N = 120, Males M = 70, Licence holders L = 80.
2. Let x be males with a licence:
   - Maximum males with licence = min(M, L) = min(70, 80) = 70.
   - Minimum males with licence = M + L − N = 70 + 80 − 120 = 30.
3. Ratio of minimum to maximum = 30 : 70 = **3:7**.""",

    "fa2_q8": """💰 Coin Proportion & Value Equation:
1. Ratio of coins (50p : 25p : 1 rupee) = 5 : 6 : 2.
2. Value contributed per ratio unit:
   5 × 0.50 + 6 × 0.25 + 2 × 1.00 = 2.50 + 1.50 + 2.00 = Rs. 6.00.
3. Total money = Rs. 42.
   Number of ratio units = 42 / 6 = 7.
4. Number of 25 paisa coins = 6 × 7 = **42**.""",

    "fa2_q9": """📐 Linear Ratio Shift:
1. Numbers are in ratio 5:6. Let them be 5k and 6k.
2. Given larger − smaller = 6k − 5k = k = 10.
   Hence the numbers are 5(10) = 50 and 6(10) = 60.
3. Let x be the number added to both:
   (50 + x) / (60 + x) = 7 / 8.
4. Cross-multiplying:
   8(50 + x) = 7(60 + x) ⟹ 400 + 8x = 420 + 7x ⟹ x = **20**.""",

    "fa2_q10": """📐 Ratio Partitioning:
1. Ratio of Kavita to Reena = 4:3.
2. Reena's share = 3 units = Rs. 2400.
   1 unit = 2400 / 3 = Rs. 800.
3. Total amount = 4 + 3 = 7 units.
   Total = 7 × 800 = Rs. **5600**.""",

    "fa2_q11": """📐 Equal Increment to Terms:
1. Ram : Sham = 4:5. Let salaries be 4x and 5x.
2. Both receive an increase of Rs. 5000:
   (4x + 5000) / (5x + 5000) = 50 / 60 = 5 / 6.
3. Cross-multiplying:
   6(4x + 5000) = 5(5x + 5000)
   24x + 30000 = 25x + 25000 ⟹ x = 5000.
4. Sham's present salary = 5x = 5 × 5000 = Rs. **25000**.""",

    "fa2_q12": """⚖️ Alloy Mixture Proportion:
1. Zinc : Copper = 13:7.
2. Total parts = 13 + 7 = 20 parts.
3. Total weight = 100 kg ⟹ 1 part = 100 / 20 = 5 kg.
4. Zinc content = 13 × 5 = **65** kg.""",

    "fa2_q13": """👥 Multi-Batch Linear Growth:
1. Initial ratio = 2:3:5. Let batches be 2x, 3x, 5x.
2. After adding 20 students to each, ratio becomes 4:5:7.
3. Notice each term increases by:
   4 − 2 = 2 units, 5 − 3 = 2 units, 7 − 5 = 2 units.
4. 2 units = 20 students ⟹ 1 unit = 10 students.
5. Total initial students = 2x + 3x + 5x = 10 units = 10 × 10 = **100**.""",

    "fa2_q14": """📐 Percentage to Ratio Conversion:
1. Given: 10% of x = 20% of y.
2. (10/100)x = (20/100)y ⟹ x = 2y.
3. x/y = 2/1 ⟹ x:y = **2:1**.""",

    "fa2_q15": """🚂 Railway Fare & Revenue Product:
1. Fare ratio (1st : 2nd) = 4 : 1.
2. Passenger ratio (1st : 2nd) = 1 : 40.
3. Revenue ratio = (Fare × Passengers) = (4 × 1) : (1 × 40) = 4 : 40 = 1 : 10.
4. Total parts = 1 + 10 = 11 parts.
5. Total fare collected = Rs. 1,100.
   Amount from 1st class = (1/11) × 1100 = Rs. **100**.""",

    "fa2_q16": """📐 Ratio Cross-Multiplication:
1. Let the two numbers be x and 2x.
2. Adding 7 to both:
   (x + 7) / (2x + 7) = 3 / 5.
3. Cross-multiplying:
   5(x + 7) = 3(2x + 7)
   5x + 35 = 6x + 21 ⟹ x = 14.
4. Greatest number = 2x = 2 × 14 = **28**.""",

    "fa2_q17": """📐 Inverse Equality Formulation:
1. Let 4A = 3B = 2C = k.
2. A = k/4, B = k/3, C = k/2.
3. Ratio A : B : C = 1/4 : 1/3 : 1/2.
   Multiplying by LCM(4, 3, 2) = 12:
   A : B : C = 3 : 4 : 6.
4. Sum of parts = 3 + 4 + 6 = 13 parts = Rs. 1170.
   1 part = 1170 / 13 = Rs. 90.
5. Third share (C) = 6 × 90 = Rs. **540**.""",

    "fa2_q18": """🍎 Percentage Expansion of Ratio:
1. Initial ratio of apples, oranges, bananas = 5 : 7 : 8.
2. Increases:
   - Apples: 5 × 1.50 = 7.5
   - Oranges: 7 × 1.60 = 11.2
   - Bananas: 8 × 1.70 = 13.6
3. New ratio = 7.5 : 11.2 : 13.6.
4. Multiply by 10 to clear decimals:
   **75:112:136**.""",

    "fa2_q19": """💼 Income, Expenditure & Savings Model:
1. Income of A and B = 3x and 2x.
2. Expenditure of A and B = 5y and 3y.
3. Since Savings = Income − Expenditure = Rs. 1000 for each:
   3x − 5y = 1000  ---(1)
   2x − 3y = 1000  ---(2)
4. Multiplying (1) by 3 and (2) by 5:
   9x − 15y = 3000
   10x − 15y = 5000
5. Subtracting: x = 2000.
6. A's income = 3x = 3 × 2000 = Rs. **6000**.""",

    "fa2_q20": """📐 Fractional Equivalence:
1. Given: 60% of A = (2/3) of B.
2. (60/100)A = (2/3)B ⟹ (3/5)A = (2/3)B.
3. A/B = (2/3) / (3/5) = (2/3) × (5/3) = 10/9.
4. A:B = **10:9**.""",

    "fa2_q21": """🔗 Compound Ratio Chain:
1. Given: A/B = 2/3, B/C = 5/7, C/D = 3/10.
2. Multiplying the ratios together:
   A/D = (A/B) × (B/C) × (C/D) = (2/3) × (5/7) × (3/10).
3. Simplifying:
   A/D = (2 × 5 × 3) / (3 × 7 × 10) = 30 / 210 = 1/7.
4. Hence, A:D = **1:7**.""",

    "fa2_q22": """📐 Fractional Partition & Check:
1. Ratio = 1/2 : 2/3 : 3/4.
2. Multiply by LCM(2, 3, 4) = 12:
   Ratio = 6 : 8 : 9.
3. Sum of parts = 6 + 8 + 9 = 23 parts.
4. Value of total = Rs. 582.
   1 part = 582 / 23 ≈ 25.304.
5. First part = 6 × (582 / 23) = 3492 / 23 ≈ Rs. 151.83.
6. Since 161, 170, and 180 do not match, the correct option is **none**.""",

    "fa2_q23": """⚖️ Proportionality Condition:
1. Numbers in proportion: (6 + x) / (14 + x) = (18 + x) / (38 + x).
2. Test x = 2:
   - (6 + 2) / (14 + 2) = 8 / 16 = 1/2.
   - (18 + 2) / (38 + 2) = 20 / 40 = 1/2.
3. Both ratios are identical (1/2 = 1/2), so the number to be added is **2**.""",

    "fa2_q24": """📐 Mean Proportional Formula:
1. The mean proportional between two numbers a and b is √(a × b).
2. Mean proportional = √(6 × 24) = √144 = **12**.""",

    "fa2_q25": """🐔 Hens and Cows Head-Foot System:
1. Let number of hens = H and cows = C.
2. Heads equation: H + C = 48 ⟹ 2H + 2C = 96.
3. Feet equation: 2H + 4C = 140.
4. Subtracting: 2C = 44 ⟹ C = 22 cows.
5. Hens H = 48 − 22 = **26**.""",

    "fa2_q26": """📐 Fractional Ratio & Extrema Difference:
1. Ratio = 1/2 : 2/3 : 3/4.
   Multiplying by 12 gives: 6 : 8 : 9.
2. Let the numbers be 6x, 8x, 9x.
3. Greatest − Smallest = 9x − 6x = 3x = 36 ⟹ x = 12.
4. The numbers are:
   6 × 12 = 72, 8 × 12 = 96, 9 × 12 = 108.
   Result: **72, 96, 108**.""",

    "fa2_q27": """📐 Decimal Mean Proportional:
1. Mean proportional = √(0.32 × 0.02).
2. 0.32 × 0.02 = 0.0064.
3. √0.0064 = **0.08**.""",

    "fa2_q28": """📐 Continued Ratio Product:
1. 2A = 3B ⟹ A/B = 3/2.
2. 4B = 5C ⟹ B/C = 5/4.
3. A/C = (A/B) × (B/C) = (3/2) × (5/4) = 15/8.
4. A:C = **15:8**.""",

    "fa2_q29": """🚗 Inverse Speed-Time Relation:
1. For constant distance, Time is inversely proportional to Speed:
   Time ratio = 1/3 : 1/4 : 1/5.
2. Multiplying by LCM(3, 4, 5) = 60:
   (60/3) : (60/4) : (60/5) = **20:15:12**.""",

    "fa2_q30": """🍬 Difference of Terms Division:
1. A : B : C : D = 6 : 8 : 5 : 4.
2. Given B gets 10 sweets more than D:
   8x − 4x = 10 ⟹ 4x = 10 ⟹ x = 2.5.
3. A's share = 6x = 6 × 2.5 = **15** sweets.""",

    "fa2_q31": """🔗 Bridge Variable Scaling:
1. A:B = 7:9 and B:C = 3:5.
2. Multiply B:C by 3 to equate B:
   B:C = 9:15.
3. Combining: A:B:C = **7:9:15**.""",

    "fa2_q32": """🔢 Sum of Squares Equation:
1. Let the numbers be 3x, 2x, and 5x.
2. Sum of their squares:
   (3x)² + (2x)² + (5x)² = 9x² + 4x² + 25x² = 38x².
3. Given: 38x² = 1862 ⟹ x² = 1862 / 38 = 49 ⟹ x = 7.
4. Smallest number = 2x = 2 × 7 = **14**.""",

    "fa2_q33": """🔗 Chained Proportions:
1. Ram : Gopal = 7:17 ⟹ Ram / Gopal = 7/17.
2. Gopal : Krishan = 7:17 ⟹ Gopal / Krishan = 7/17.
3. Ram / Krishan = (7/17) × (7/17) = 49 / 289.
4. Ram has Rs. 490 ⟹ 49 units = 490 ⟹ 1 unit = Rs. 10.
5. Krishan has 289 units = 289 × 10 = Rs. **2890**.""",

    "fa2_q34": """💰 Sequential Share Division:
1. Let C's share = C.
   B gets (1/4)C.
   A gets (2/3)B = (2/3) × (1/4)C = (1/6)C.
2. Sum of shares:
   A + B + C = (1/6)C + (1/4)C + C = (2/12 + 3/12 + 12/12)C = (17/12)C = ₹ 680.
3. C = (680 × 12) / 17 = 40 × 12 = ₹ 480.
4. B = (1/4) × 480 = ₹ 120.
5. A = (2/3) × 120 = ₹ 80.
6. Shares: **₹ 80, ₹ 120, ₹ 480**.""",

    "fa2_q35": """📐 Fractional Partitioning:
1. Ratio = 1/3 : 3/4 : 4/6 (= 2/3).
2. Multiply by LCM(3, 4) = 12:
   (12/3) : (12 × 3/4) : (12 × 2/3) = 4 : 9 : 8.
3. Sum of parts = 4 + 9 + 8 = 21 parts = Rs 1050.
   1 part = 1050 / 21 = Rs. 50.
4. First part = 4 × 50 = Rs. **200**.""",

    "fa2_q36": """❓ Indeterminate System Check:
1. Initial seats ratio = 4 : 5 : 6, so seats are 4k, 5k, 6k.
2. Increased by 75 each: (4k + 75), (5k + 75), (6k + 75).
3. Total final seats = 15k + 225.
4. Since no final ratio or total is provided, k cannot be uniquely determined.
5. Therefore, the data is insufficient to find the exact number. Answer: **Data Inadequate**.""",

    "fa2_q37": """💼 Percentage Share Equivalence:
1. 20% A = 25% B = 15% C.
2. Divide coefficients by 5:
   4A = 5B = 3C = k.
3. Ratio A : B : C = 1/4 : 1/5 : 1/3.
   Multiply by LCM(4, 5, 3) = 60:
   A : B : C = 15 : 12 : 20.
4. Total parts = 15 + 12 + 20 = 47 parts = ₹ 94000.
   1 part = 94000 / 47 = ₹ 2000.
5. C's share = 20 × 2000 = ₹ **40000**.""",

    "fa2_q38": """💰 Coin Denomination Value Multiples:
1. Coin ratio (2-rupee : 50-paise : 25-paise) = 3 : 5 : 7.
2. Value per ratio group:
   - 3 × ₹ 2.00 = ₹ 6.00
   - 5 × ₹ 0.50 = ₹ 2.50
   - 7 × ₹ 0.25 = ₹ 1.75
   Total per group = 6.00 + 2.50 + 1.75 = ₹ 10.25.
3. Number of ratio groups = 51.25 / 10.25 = 5.
4. Total 50-paise coins = 5 × 5 = **25**.""",

    # Topic 2: Syllogism (Q39 - Q72)
    "fa2_q39": """🔍 Syllogistic Deduction:
1. Statements:
   - All pens are papers (Pens ⊆ Papers).
   - No eraser is a paper (Erasers ∩ Papers = ∅).
2. Evaluating Conclusions:
   - I: Since Pens are entirely inside Papers and Papers are completely disjoint from Erasers, no Eraser can be a Pen. ⟹ **Conclusion I follows**.
   - II: 'All pens are papers' directly converts to 'Some papers are pens'. ⟹ **Conclusion II follows**.
3. Therefore, **Both Conclusions I and II follow.**""",

    "fa2_q40": """🔍 Concentric Euler Chain:
1. Statements:
   - Some pots are buckets (Pots ∩ Buckets ≠ ∅).
   - All buckets are tubs (Buckets ⊆ Tubs).
   - All tubs are drums (Tubs ⊆ Drums).
2. Evaluating Conclusions:
   - I: Since Pots overlap Buckets and Buckets ⊆ Drums, Pots definitely overlap Drums. ⟹ **Conclusion I follows**.
   - II: Buckets ⊆ Tubs does not imply All tubs are buckets (converse is particular). ⟹ Does not follow.
   - III: Since Buckets ⊆ Drums, Some drums are buckets. ⟹ **Conclusion III follows**.
3. Hence, **Only I and III follows**.""",

    "fa2_q41": """🔍 Propositional Conversion:
1. Statements:
   - All Authors are learned people (Authors ⊆ Learned).
   - Some doctors are authors (Doctors ∩ Authors ≠ ∅).
2. Evaluating Conclusions:
   - I: The intersection of Doctors and Authors lies entirely within Learned people. Thus, some doctors are learned people. ⟹ **Conclusion I is implicit**.
   - II: 'Some doctors are learned people' converts validly to 'Some learned people are doctors'. ⟹ **Conclusion II is implicit**.
3. Hence, **Both I and II are implicit.**""",

    "fa2_q42": """🔍 Negative Categorical Elimination:
1. Statements:
   - No animal is a rat (Animals ∩ Rats = ∅).
   - Some cows are animals (Cows ∩ Animals ≠ ∅).
   - All bears are rats (Bears ⊆ Rats).
2. Evaluating Conclusions:
   - I: 'Some cows are animals' directly converts to 'Some animals are cows'. ⟹ **Conclusion I follows**.
   - II: Bears are a subset of Rats, and Rats are completely disjoint from Animals. Thus, no Bear can be an Animal. ⟹ **Conclusion II follows**.
3. Hence, **If both conclusion I and II follow**.""",

    "fa2_q43": """🔍 Concentric Subset Containment:
1. Chain: Tables ⊆ Sofas ⊆ Beds ⊆ Mats.
2. Evaluating Conclusions:
   - I: Some mats are sofas (valid particular converse of Sofas ⊆ Mats). ⟹ Follows.
   - II: Some beds are tables (valid particular converse of Tables ⊆ Beds). ⟹ Follows.
   - III: Some mats are tables (valid particular converse of Tables ⊆ Mats). ⟹ Follows.
3. Therefore, **All follow**.""",

    "fa2_q44": """🔍 Complementary Contradictory Pair:
1. Statements: All pins are rods; Some rods are chains; All chains are hammers.
2. Chain: Chains ⊆ Hammers. Rods overlap Chains, so Rods overlap Hammers. Thus, 'Some hammers are rods' definitely holds ⟹ **Conclusion II follows**.
3. Relation between Pins and Hammers:
   - There is no definite relationship established between Pins and Hammers.
   - Conclusions I ('Some pins are hammers') and III ('No pin is hammer') share identical terms and form an I-E complementary contradictory pair.
   - Therefore, exactly one of I or III must be true.
4. Hence, **Only either I or III and II follows**.""",

    "fa2_q45": """🔍 Disjoint Subset Proof:
1. Statements:
   - No animal is a dog (Animals ∩ Dogs = ∅).
   - Some monkeys are animals (Monkeys ∩ Animals ≠ ∅).
   - All cats are dogs (Cats ⊆ Dogs).
2. Evaluating Conclusions:
   - I: 'Some monkeys are animals' directly converts to 'Some animals are monkeys'. ⟹ **Conclusion I follows**.
   - II: Cats are entirely within Dogs, and Dogs are entirely separated from Animals. Therefore, no Cat can be an Animal. ⟹ **Conclusion II follows**.
3. Hence, **If both conclusion I and II follow**.""",

    "fa2_q46": """🔍 Either-Or Complementary Pair:
1. Statements: All goats are lions; No lion is tiger; Some tigers are horses.
2. Relation between Horses and Goats:
   - Tigers and Lions are disjoint. Some Horses are Tigers, but other Horses may or may not overlap with Goats.
   - Conclusion I: 'Some horses are goats' (Particular Affirmative).
   - Conclusion II: 'No horse is goat' (Universal Negative).
3. Both conclusions have identical subject and predicate, neither is definitely true alone, and together they exhaust all possibilities.
4. Hence, **if either conclusion I or conclusion II follows**.""",

    "fa2_q47": """🔍 Direct Negative Deduction:
1. Statements:
   - All Mango are Banana (Mango ⊆ Banana).
   - All Banana are Kiwi (Banana ⊆ Kiwi).
   - No Banana is Grape (Banana ∩ Grape = ∅).
2. Evaluating Conclusions:
   - I: Since Mango ⊆ Banana and Banana is disjoint from Grape, Mango is disjoint from Grape. 'No Mango is Grape' ⟹ **Conclusion I follows**.
   - II: Since Mango ⊆ Banana ⊆ Kiwi, Kiwi contains Mango. Thus, 'Some Kiwi is Mango' ⟹ **Conclusion II follows**.
3. Hence, **Both conclusion I and II follows**.""",

    "fa2_q48": """🔍 Particular Negative Deduction:
1. Statements:
   - No day is a week (Days ∩ Weeks = ∅).
   - Some months are days (Months ∩ Days ≠ ∅).
   - No week is a year (Weeks ∩ Years = ∅).
2. Evaluating Conclusions:
   - I: 'No day is a year' is not certain (Days and Years can overlap without touching Weeks). ⟹ Does not follow.
   - II: The part of Months that are Days cannot be Weeks because Days and Weeks are disjoint. Therefore, 'Some months are not weeks' ⟹ **Conclusion II follows**.
3. Hence, **If only conclusion II follows**.""",

    "fa2_q49": """🔍 Complementary Pair Analysis:
1. Statements: All letters are envelopes; No envelope is post office; Some post offices are postmen.
2. Relation between Postmen and Letters:
   - No definite relation is fixed between Postmen and Letters.
   - Conclusion I: 'Some postmen are letters'.
   - Conclusion II: 'No postman is letter'.
3. Forming an I-E contradictory pair with identical subject and predicate, one of them must necessarily hold.
4. Hence, **If either conclusion I or II follows**.""",

    "fa2_q50": """🔍 Possibility in Undefined Sets:
1. Statements: Some bags are mugs; All boxes are mugs.
2. Evaluating Conclusions:
   - I: 'At least some bags are boxes' is not definitely true because Bags and Boxes can be mutually disjoint within Mugs. ⟹ Does not follow.
   - II: Since Boxes ⊆ Mugs, Mugs and Boxes could be identical sets without contradicting any premise. Thus, 'All mugs being boxes is a possibility' is valid. ⟹ **Conclusion II follows**.
3. Hence, **if only conclusion II follows**.""",

    "fa2_q51": """🔍 Possibility vs Definite Falsehood:
1. Statements: Some papers are books; All papers are words (Papers ⊆ Words).
2. Evaluating Conclusions:
   - I: Since Books already overlap Words (via Papers), Books could expand to encompass all Words without violating any statement. Thus, 'All words being books is a possibility' ⟹ **Conclusion I follows**.
   - II: 'All papers are words' does not guarantee that Some words are not papers (Words could equal Papers). ⟹ Does not follow.
3. Hence, **If only conclusion I follows**.""",

    "fa2_q52": """🔍 Non-Adjacent Term Syllogism:
1. Statements: Some buses are cars; No car is ship; All ships are bikes.
2. Evaluating Conclusions:
   - I: 'Some buses are not bikes' is not necessarily true because Bikes can expand to contain all Buses. ⟹ Does not follow.
   - II: 'All ships are bikes' implies Some bikes are ships; therefore 'No bike is ship' is false. ⟹ Does not follow.
3. Hence, **Neither I nor II follows**.""",

    "fa2_q53": """🔍 Disjoint Chains:
1. Statements:
   - All animals are mammals (Animals ⊆ Mammals).
   - No mammal is reptile (Mammals ∩ Reptiles = ∅).
   - All reptiles are amphibians (Reptiles ⊆ Amphibians).
2. Evaluating Conclusions:
   - I: Animals cannot be Reptiles, so 'All animals are amphibians' cannot be established. ⟹ Does not follow.
   - II: Reptiles are disjoint from Mammals, but other Amphibians may or may not be Mammals. Not definitely true. ⟹ Does not follow.
3. Hence, **Neither I nor II follows**.""",

    "fa2_q54": """🔍 Subset Transitivity:
1. Statements:
   - No apple is a plum.
   - All plums are oranges (Plums ⊆ Oranges).
   - All oranges are mangoes (Oranges ⊆ Mangoes).
2. Evaluating Conclusions:
   - I: By transitivity, Plums ⊆ Oranges ⊆ Mangoes, so 'All plums are mangoes' ⟹ **Conclusion I follows**.
   - II: Since Oranges ⊆ Mangoes, 'At least some mangoes are oranges' (particular converse) ⟹ **Conclusion II follows**.
3. Hence, **Both I and II follows**.""",

    "fa2_q55": """🔍 Particular to Universal Deduction:
1. Statements:
   - Some cats are dogs (Cats ∩ Dogs ≠ ∅).
   - All dogs are black (Dogs ⊆ Black).
2. Evaluating Conclusions:
   - I: The intersection Cats ∩ Dogs lies inside Black. Thus, 'Some cats are black' ⟹ **Conclusion I follows**.
   - II: 'All dogs are black' directly implies its subaltern 'Some dogs are black' ⟹ **Conclusion II follows**.
3. Hence, **Both Conclusions I and II follow**.""",

    "fa2_q56": """🔍 Definite Overlap vs Impossible Disjointness:
1. Statements: Some fruits are flowers; All flowers are plants.
2. Deducing Facts:
   - Fruits overlap Flowers, and Flowers ⊆ Plants.
   - Therefore, the fruits that are flowers MUST be plants.
3. Evaluating Conclusions:
   - I: Since some fruits are definitely plants, 'No fruit being plant is a possibility' is impossible and false. ⟹ Does not follow.
   - II: 'Some fruits are plants' is a definite logical consequence. ⟹ **Conclusion II follows**.
4. Hence, **Only II follows**.""",

    "fa2_q57": """🔍 Multi-Statement Verification:
1. Statements: Some pearls are gems; All gems are diamonds; No diamond is stone; Some stones are corals.
2. Fact: Gems and Diamonds are disjoint from Stones. Pearls overlap Gems, so pearls in gems cannot be stones.
3. Conclusions:
   - I: 'Some stones are pearls' is uncertain.
   - II: 'Some corals are pearls' is uncertain.
   - III: 'No stone is pearl' is uncertain.
4. Since none of the offered individual options (Only I, Only II, Both I and II) are valid, the correct choice is **None of the above**.""",

    "fa2_q58": """🔍 Multi-Tier Chain Verification:
1. Statements:
   - Some milk are curd.
   - Some curd are butter-milk.
   - All butter-milk are butter (Butter-milk ⊆ Butter).
   - No butter is ghee (Butter ∩ Ghee = ∅).
2. Evaluating Conclusions:
   - I: Butter-milk ⊆ Butter and Butter ∩ Ghee = ∅ ⟹ 'No butter-milk is ghee' follows.
   - II: Curd overlaps Butter-milk ⊆ Butter ⟹ 'Some butter are curd' follows.
   - III: The portion of Curd that is Butter-milk is in Butter, so it cannot be Ghee ⟹ 'Some curd are not ghee' follows.
3. Hence, **If all conclusions I, II and III follow**.""",

    "fa2_q59": """🔍 Direct Negative Deduction:
1. Statements:
   - No crow is a bird (Crows ∩ Birds = ∅).
   - Some parrots are crows (Parrots ∩ Crows ≠ ∅).
   - No bird is a sparrow.
2. Evaluating Conclusions:
   - I: 'No crow is a sparrow' is not definite (Crows and Sparrows could overlap). ⟹ Does not follow.
   - II: The parrots that are crows cannot be birds because Crows are disjoint from Birds. Therefore, 'Some parrots are not birds' ⟹ **Conclusion II follows**.
3. Hence, **If only conclusion II follows**.""",

    "fa2_q60": """🔍 Conversion and Possibility:
1. Statements: No day is a week; Some months are days; No week is a year.
2. Evaluating Conclusions:
   - I: 'No week is a year' directly converts to 'No year is a week'. ⟹ **Conclusion I follows**.
   - II: Years and Days have no negative relation specified; Years can be placed entirely inside Days without touching Weeks. Thus, 'All years being days is a possibility' is valid. ⟹ **Conclusion II follows**.
3. Hence, **If both conclusion I and II follow**.""",

    "fa2_q61": """🔍 Syllogism Option Exhaustion:
1. Statements:
   - Some schools are classes.
   - Some classes are teachers.
   - All teachers are students (Teachers ⊆ Students).
2. Evaluating Conclusions:
   - I: Classes overlap Teachers, and Teachers ⊆ Students ⟹ 'Some students are classes' is definitely true.
   - II: Schools have no negative constraint with Students ⟹ 'All schools being students is a possibility' is definitely true.
3. Both conclusions I and II follow. Since the options provide Neither, Only II, Either, and 'None of these', the correct choice is **None of these**.""",

    "fa2_q62": """🔍 'Only a few' Proposition:
1. 'Only a few plant is tree' implies two simultaneous statements:
   - Some plants are trees (Affirmative).
   - Some plants are not trees (Negative).
2. Evaluating Conclusions:
   - I: 'Some tree is leaf' cannot be definitely concluded from 'Some tree is not leaf'. ⟹ Does not follow.
   - II: 'Some plants are trees' directly converts to 'Some plant is tree'. ⟹ **Conclusion II follows**.
3. Hence, **Only conclusion II follows**.""",

    "fa2_q63": """🔍 False and Contradictory Claims:
1. Statements: Some apartments are flats; Some flats are buildings; All buildings are bungalows; All bungalows are garden.
2. Chain: Buildings ⊆ Bungalows ⊆ Garden.
3. Evaluating Conclusions:
   - I: Apartments only overlap flats; they need not be buildings. ⟹ Does not follow.
   - II: Buildings ⊆ Bungalows means all buildings are bungalows, so 'All bungalows are not buildings' is false. ⟹ Does not follow.
   - III: Flats overlap Buildings ⊆ Garden, so some flats are definitely in garden; 'No flat is garden' is false. ⟹ Does not follow.
4. Hence, **None Follows**.""",

    "fa2_q64": """🔍 Subset Overlap Deduction:
1. Statements:
   - Some actors are singers (Actors ∩ Singers ≠ ∅).
   - All the singers are dancers (Singers ⊆ Dancers).
2. Evaluating Conclusions:
   - I: The actors that are singers must also be dancers because all singers are dancers. Thus, 'Some actors are dancers' ⟹ **Conclusion I follows**.
   - II: 'Some actors are singers' directly contradicts 'No singer is actor'. ⟹ Does not follow.
3. Hence, **Only I follows**.""",

    "fa2_q65": """🔍 Immediate Converse Deduction:
1. Statements: Some buses are trucks; Some trucks are boats; No boat is jeep; Some jeeps are trucks.
2. Evaluating Conclusions:
   - I: 'Some jeeps are buses' is not definite. ⟹ Does not follow.
   - II: 'Some boats are buses' is not definite. ⟹ Does not follow.
   - III: Statement 2 explicitly says 'Some trucks are boats'. Direct repetition / conversion 'Some trucks are boats' is definitely true. ⟹ **Conclusion III follows**.
3. Hence, **Only III follows**.""",

    "fa2_q66": """🔍 Disjoint Category Verification:
1. Statements:
   - All buildings are houses (Buildings ⊆ Houses).
   - No house is an apartment (Houses ∩ Apartments = ∅).
   - All apartments are flats (Apartments ⊆ Flats).
2. Evaluating Conclusions:
   - I: 'All buildings are flats' is false (Buildings and Flats need not overlap at all). ⟹ Does not follow.
   - II: Buildings are in Houses, which are completely disjoint from Apartments. Thus, no apartment can be a building. ⟹ Does not follow.
3. Hence, **If neither conclusion I nor conclusion II follows**.""",

    "fa2_q67": """🔍 Universal Transitivity:
1. Statements:
   - All children are students (Children ⊆ Students).
   - All students are players (Students ⊆ Players).
2. Transitive Chain: Children ⊆ Students ⊆ Players.
3. Evaluating Conclusions:
   - I: 'All cricketers are students' introduces an unmentioned term ('cricketers'). ⟹ Does not follow.
   - II: Children ⊆ Players directly gives 'All children are players'. ⟹ **Conclusion II follows**.
4. Hence, **Only conclusion II follows.**""",

    "fa2_q68": """🔍 Syllogism Possibility & Truth:
1. Statements:
   - All shirts are pants (Shirts ⊆ Pants).
   - All pants are belts (Pants ⊆ Belts).
2. Evaluating Conclusions:
   - I: Since Shirts ⊆ Pants, Some pants are shirts is definitely true, and its possibility is considered valid in syllabus conventions. ⟹ **Conclusion I follows**.
   - II: Pants ⊆ Belts contradicts 'Some pants are not belts'. ⟹ Does not follow.
3. Hence, **if only conclusion I follows**.""",

    "fa2_q69": """🔍 All Conclusions Valid — Option Selection:
1. Statements:
   - Some pens are keys.
   - Some keys are locks.
   - All locks are cards (Locks ⊆ Cards).
   - No card is a paper (Cards ∩ Paper = ∅).
2. Evaluating Conclusions:
   - I: Locks ⊆ Cards and Cards ∩ Paper = ∅ ⟹ 'No lock is paper' is definitely true.
   - II: Keys overlap Locks ⊆ Cards ⟹ 'Some cards are keys' is definitely true.
   - III: The keys that are locks are cards, so they cannot be paper ⟹ 'Some keys are not paper' is definitely true.
3. All three conclusions I, II, and III are valid. Since the options only offer individual choices and not 'All follow', the correct response is **None of the above**.""",

    "fa2_q70": """🔍 Three-Subset Common Container & Either-Or:
1. Statements:
   - All pins are bags (Pins ⊆ Bags).
   - All chalks are bags (Chalks ⊆ Bags).
   - All needles are bags (Needles ⊆ Bags).
2. Evaluating Conclusions:
   - No specific intersection between Needles and Pins is given. They may overlap or be disjoint.
   - Conclusion I: 'Some needles are pins' (Particular Affirmative).
   - Conclusion III: 'No needle is pin' (Universal Negative).
3. Conclusions I and III form a classic contradictory complementary pair over the same terms.
4. Hence, **Only either I or III follows**.""",

    "fa2_q71": """🔍 Singular Categorical Syllogism:
1. Statements:
   - No girl is a parrot (Girls ∩ Parrots = ∅).
   - Sowmya is a girl (Sowmya ∈ Girls).
2. Evaluating Conclusions:
   - I: Since Sowmya is a Girl and no Girl is a Parrot, Sowmya cannot be a parrot. ⟹ **Conclusion I follows**.
   - II: 'All girls are not Sowmya' is an ambiguous or unwarranted universal claim not deduced from the premises. ⟹ Does not follow.
3. Hence, **Only conclusion I follows**.""",

    "fa2_q72": """🔍 Universal Affirmative Converse Fallacies:
1. Statements:
   - All goats are tigers (Goats ⊆ Tigers).
   - All tigers are lions (Tigers ⊆ Lions).
2. Evaluating Conclusions:
   - I: 'All tigers are goats' is a false universal converse. ⟹ Does not follow.
   - II: 'All lions are tigers' is a false universal converse. ⟹ Does not follow.
   - III: Since Goats ⊆ Lions, 'No goat is a lion' is false. ⟹ Does not follow.
   - IV: 'No lion is a goat' is false because Lions overlap Goats. ⟹ Does not follow.
3. None of the four conclusions follow. Therefore, **None of the Conclusions follows**."""
}

final_objects = []
for q in raw_list:
    qid = q["id"]
    if qid not in EXPLANATIONS:
        raise ValueError(f"Missing explanation for {qid}")
    
    # Verify correct is in options
    if q["correct"] not in q["options"]:
        raise ValueError(f"Correct answer '{q['correct']}' not in options {q['options']} for {qid}")
        
    obj = {
        "id": qid,
        "module_id": "mod17",
        "module_name": "FA2 Questions",
        "syllabus_lec": "FA-2 Revision Question Set",
        "type_id": q["type_id"],
        "type_name": q["type_name"],
        "difficulty": q["difficulty"],
        "points": 1,
        "question": q["question"],
        "options": q["options"],
        "correct": q["correct"],
        "explanation": EXPLANATIONS[qid]
    }
    final_objects.append(obj)

with open('scratch/fa2_questions.json', 'w', encoding='utf-8') as out:
    json.dump(final_objects, out, indent=2, ensure_ascii=False)

print(f"Successfully built {len(final_objects)} question objects in scratch/fa2_questions.json")
