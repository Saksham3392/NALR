import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Let's inspect the questions from user prompt
user_prompt_questions = """
====================================================================
TOPIC: NUMBER SYSTEM
====================================================================

Q1. What is the number of zeroes in 1000! (factorial)?
A. 1
B. 5
C. 2
D. None of these
Correct option: D — None of these (1000! has 249 trailing zeroes).

Q2. Find the number of trailing zeroes in 120!.
A. 12
B. 15
C. 16
D. None of these
Correct option: D — None of these (120! has 28 trailing zeroes).

Q3. What is the number of two-digit prime numbers?
A. 25
B. 17
C. 21
D. None of these
Correct option: C — 21.

Q4. What is the unit's digit of 2^51?
A. 2
B. 8
C. 1
D. 4
Correct option: B — 8.

Q5. What is the unit's digit of 213 × 212 × 347 × 468?
A. 4
B. 8
C. 6
D. 2
Correct option: C — 6.

Q6. The last three digits in the multiplication 12345 × 54321 will be:
A. 745
B. 945
C. 865
D. 235
Correct option: A — 745.

Q7. Which among the following is prime?
A. 668
B. 558
C. 900
D. None of these
Correct option: D — None of these.

Q8. The prime numbers dividing 143 and leaving a remainder of 3 in each case are:
A. 2 and 11
B. 3 and 7
C. 5 and 7
D. 11 and 13
Correct option: C — 5 and 7.

Q9. A two-digit number is k times the sum of its digits. The number formed by reversing its digits is m times the sum of its digits. Find m.
A. 10 − k
B. 11 − k
C. 9 − k
D. k − 1
Correct option: B — 11 − k.

Q10. If the largest three-digit number is subtracted from the smallest five-digit number, the remainder is:
A. 9000
B. 9001
C. 90001
D. 90007
Correct option: B — 9001.

Q11. The greatest four-digit number exactly divisible by 88 is:
A. 8888
B. 9944
C. 9988
D. 9998
Correct option: B — 9944.

Q12. If the number 4A306768B2 is divisible by both 8 and 11, the smallest possible values of A and B will be:
A. A = 3, B = 5
B. A = 5, B = 4
C. A = 5, B = 2
D. A = 5, B = 3
Correct option: D — A = 5, B = 3.

Q13. What least value must be given to * so that the number 97215*6 is divisible by 12?
A. 3
B. 2
C. 1
D. 5
Correct option: A — 3.

Q14. Find the least value of * for which 4832*18 is divisible by 11.
A. 100
B. None
C. 12
D. 11
Correct option: B — None.

Q15. The number 1X38X is divisible by 12 when X = P, and by 9 when X = Q. What is P + Q?
A. 2
B. 3
C. 6
D. 9
Correct option: B — 3.

Q16. If x and y are the two digits of the number 653xy such that the number is divisible by 80, then x + y = ?
A. 2 or 6
B. 4
C. 4 or 8
D. 8
Correct option: A — the computed value is 2.

============================================================
TOPIC 2: HCF AND LCM
============================================================

Q1. The HCF of two numbers is 12 and their difference is also 12. The numbers are:
A. 12, 84
B. 100, 112
C. 40, 52
D. 84, 96
Correct option: D — 84, 96.

Q2. The LCM of two numbers is 2376 while their HCF is 33. If one number is 297, the other number is:
A. 216
B. 264
C. 642
D. 792
Correct option: B — 264.

Q3. Find the HCF of 4, 8, 16, 32 and 15.
A. 4
B. 8
C. 1
D. None of these
Correct option: C — 1.

Q4. The product of two numbers is 1280 and their HCF is 8. The LCM of the numbers is:
A. 140
B. 160
C. 183
D. 182
Correct option: B — 160.

Q5. Three numbers are in the ratio 2:3:4 and their HCF is 12. The LCM of the numbers is:
A. 144
B. 192
C. 96
D. 72
Correct option: A — 144.

Q6. Find the LCM of 22, 540 and 108.
A. 5940
B. 5640
C. 4740
D. 4940
Correct option: A — 5940.

Q7. The LCM of two numbers is 1296 and their HCF is 96. If one number is 864, the other number is:
A. 72
B. 64
C. 144
D. 1164
Correct option: C — 144.

Q8. The LCM of two numbers is 1920 and their HCF is 16. If one number is 128, find the other number.
A. 204
B. 240
C. 360
D. 320
Correct option: B — 240.

Q9. Three sets of English, Mathematics and Science books contain 336, 240 and 96 books respectively. They must be stacked subject-wise, with the height of every stack the same. The total number of stacks will be:
A. 14
B. 21
C. 22
D. 48
Correct option: A — 14.

Q10. Find the LCM of 16, 24 and 36.
A. 123
B. 111
C. 11
D. None of these
Correct option: D — None of these.

Q11. Find the least number of soldiers in a regiment such that they can stand in rows of 18, 15 and 25 and also form a perfect square.
A. 900
B. 1600
C. 2500
D. 450
Correct option: A — 900.

Q12. Find the least perfect square divisible by 8, 9 and 10.
A. 4000
B. 3600
C. 6400
D. 111
Correct option: B — 3600.

Q13. Find the greatest number that will exactly divide 200 and 320.
A. 30
B. 40
C. 50
D. 45
Correct option: B — 40.

Q14. Six bells commence tolling together and toll at intervals of 2, 4, 6, 8, 10 and 12 seconds respectively. In 30 minutes, how many times do they toll together, including the one at the beginning?
A. 16
B. 15
C. 14
D. None of these
Correct option: A — 16.

Q15. What is the least number which, when doubled, becomes exactly divisible by 9, 15, 21 and 30?
A. 196
B. 189
C. 630
D. 315
Correct option: D — 315.

====================================================================
TOPIC: AVERAGE
====================================================================

Q1. Find the average of all the numbers between 6 and 34 that are divisible by 5.
A. 18
B. 19
C. 20
D. 22
Correct option: C — 20.

Q2. The average of 5 terms is 50. If the first four terms are 45, 42, 119 and 84, what is the last term?
A. 56
B. −20
C. −40
D. −50
Correct option: C — −40.

Q3. If the average of 8 terms is 40 and the average of the first 6 terms is 35, what is the average of the remaining 2 terms?
A. 30
B. 55
C. 40
D. 42
Correct option: B — 55.

Q4. Find the average of the first 101 natural numbers.
A. 47
B. 48
C. 51
D. 49
Correct option: C — 51.

Q5. Find the average of the first 7 natural numbers.
A. 4
B. 6
C. 7
D. 9
Correct option: A — 4.

Q6. The average of three consecutive even numbers is M. If the next five even numbers are also included, the average of all 8 numbers will be:
A. M + 6
B. M + 3
C. M + 5
D. M + 4
Correct option: C — M + 5.

Q7. The average of 7 consecutive positive integers is 10. The average of the lowest and highest numbers is:
A. 7
B. 10
C. 15
D. Data insufficient
Correct option: B — 10.

Q8. In a class, there are 20 boys. Their average age decreases by 2 months when a boy aged 18 years is replaced by a new boy. Find the age of the new boy.
A. 16 years
B. 21 years 4 months
C. 14 years 8 months
D. 15 years
Correct option: C — 14 years 8 months.

Q9. The average weight of 20 students is 45 kg. A student weighing 40 kg replaces an old student, and the class average decreases by 1 kg. The weight of the replaced student is:
A. 55 kg
B. 50 kg
C. 60 kg
D. None of these
Correct option: C — 60 kg.

Q10. The average price of 3 diamonds of the same weight is Rs. 5 crore. The average price of the two costliest diamonds is double the price of the cheapest diamond. The price of the cheapest diamond is:
A. Rs. 3 crore
B. Rs. 5 crore
C. Rs. 1.66 crore
D. Cannot be determined
Correct option: A — Rs. 3 crore.

Q11. Kamlesh bought 65 books for Rs. 1050 from one shop and 50 books for Rs. 1020 from another. What was the average price per book?
A. Rs. 36.4
B. Rs. 18.2
C. Rs. 24
D. Rs. 18
Correct option: D — Rs. 18.

Q12. Pankaj travelled to the post office at 60 km/h. On the return journey, he covered half the distance at 10 km/h and the remaining half at 30 km/h. The average speed for the whole journey was:
A. 5.67 km/h
B. 24 km/h
C. 22.88 km/h
D. 5.45 km/h
Correct option: B — 24 km/h.

============================================================
TOPIC 4: REMAINDER THEOREM 
============================================================

Q1. What is the remainder when 2^100 is divided by 3?
A. 3
B. 0
C. 1
D. 2
Correct option: C — 1.

Q2. What is the remainder when 2^100 is divided by 7?
A. 1
B. 2
C. 3
D. 4
Correct option: B — 2.

Q3. If 17^200 is divided by 18, the remainder is:
A. 17
B. 16
C. 1
D. 2
Correct option: C — 1.

Q5. What is the remainder when 293 is divided by 7?
A. 1
B. 2
C. 4
D. 6
Correct option: D — 6.

Q6. A number, when divided by 357, leaves a remainder of 39. If the number is divided by 7, the remainder will be:
A. 4
B. 9
C. 5
D. 11
Correct option: A — 4.

Q7. A number, when divided by 221, leaves a remainder of 64. What is the remainder when the same number is divided by 13?
A. 0
B. 1
C. 11
D. 12
Correct option: D — 12.

Q8. A number, when divided by 296, gives a remainder of 75. When the same number is divided by 37, the remainder will be:
A. 1
B. 2
C. 8
D. 11
Correct option: A — 1.

Q9. The integers 34041 and 32506, when divided by a three-digit integer n, leave the same remainder. What is n?
A. 289
B. 367
C. 453
D. 307
Correct option: D — 307.

Q10. Find the least number which, when divided by 27, 35, 45 and 49, leaves a remainder of 6 in each case.
A. 5523
B. 6620
C. 6623
D. 6621
Correct option: D — 6621.
"""

# Let's count questions per topic:
topics = user_prompt_questions.split('============================================================')
print(f"Sections count: {len(topics)}")
