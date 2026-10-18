const { QUIZ_QUESTIONS } = require('../quiz_questions.js');

// Known route definitions for the 32 path questions
const KNOWN_ROUTE_MAP = {
  'dir_q1': [
    { num: 1, dist: '8 km', dir: 'South', dx: 0, dy: -8, text: 'Walk 8 km South' },
    { num: 2, dist: '3 km', dir: 'West', dx: -3, dy: 0, text: 'Turn right and walk 3 km West' },
    { num: 3, dist: '5 km', dir: 'North', dx: 0, dy: 5, text: 'Turn right and walk 5 km North' },
    { num: 4, dist: '3 km', dir: 'East', dx: 3, dy: 0, text: 'Turn right and walk 3 km East' }
  ],
  'dir_q2': [
    { num: 1, dist: '20 m', dir: 'South', dx: 0, dy: -20, text: 'Walk 20 m South from P' },
    { num: 2, dist: '30 m', dir: 'East', dx: 30, dy: 0, text: 'Turn left and walk 30 m East' },
    { num: 3, dist: '20 m', dir: 'North', dx: 0, dy: 20, text: 'Turn left and walk 20 m North' },
    { num: 4, dist: '10 m', dir: 'West', dx: -10, dy: 0, text: 'Turn left and walk 10 m West to Q' }
  ],
  'dir_q3': [
    { num: 1, dist: '2 km', dir: 'East', dx: 2, dy: 0, text: 'Walk 2 km East' },
    { num: 2, dist: '3 km', dir: 'North-West', dx: -2.12, dy: 2.12, text: 'Turn North-West and walk 3 km' },
    { num: 3, dist: '2 km', dir: 'South', dx: 0, dy: -2, text: 'Turn South and walk 2 km' }
  ],
  'dir_q4': [
    { num: 1, dist: '25 m', dir: 'East', dx: 25, dy: 0, text: 'Facing North, turn right and walk 25 m East' },
    { num: 2, dist: '30 m', dir: 'North', dx: 0, dy: 30, text: 'Turn left and walk 30 m North' },
    { num: 3, dist: '25 m', dir: 'East', dx: 25, dy: 0, text: 'Turn right and walk 25 m East' },
    { num: 4, dist: '55 m', dir: 'South', dx: 0, dy: -55, text: 'Turn right and walk 55 m South' },
    { num: 5, dist: '40 m', dir: 'West', dx: -40, dy: 0, text: 'Turn right and walk 40 m West' }
  ],
  'dir_q5': [
    { num: 1, dist: '10 mi', dir: 'East', dx: 10, dy: 0, text: 'Walk 10 miles East from P' },
    { num: 2, dist: '5 mi', dir: 'South', dx: 0, dy: -5, text: 'Turn right and walk 5 miles South' },
    { num: 3, dist: '5 mi', dir: 'West', dx: -5, dy: 0, text: 'Turn right and walk 5 miles West' }
  ],
  'dir_q6': [
    { num: 1, dist: '10 km', dir: 'North', dx: 0, dy: 10, text: 'Walk 10 km North' },
    { num: 2, dist: '6 km', dir: 'South', dx: 0, dy: -6, text: 'Turn back and walk 6 km South' },
    { num: 3, dist: '3 km', dir: 'East', dx: 3, dy: 0, text: 'Turn left and walk 3 km East' }
  ],
  'dir_q7': [
    { num: 1, dist: '1 km', dir: 'East', dx: 1, dy: 0, text: 'Walk 1 km East' },
    { num: 2, dist: '1 km', dir: 'South', dx: 0, dy: -1, text: 'Turn right and walk 1 km South' },
    { num: 3, dist: '2 km', dir: 'East', dx: 2, dy: 0, text: 'Turn left and walk 2 km East' },
    { num: 4, dist: '5 km', dir: 'North', dx: 0, dy: 5, text: 'Turn left and walk 5 km North' }
  ],
  'dir_q8': [
    { num: 1, dist: '6 m', dir: 'East', dx: 6, dy: 0, text: 'Walk 6 m East' },
    { num: 2, dist: '9 m', dir: 'South', dx: 0, dy: -9, text: 'Turn right and walk 9 m South' },
    { num: 3, dist: '6 m', dir: 'East', dx: 6, dy: 0, text: 'Turn left and walk 6 m East' }
  ],
  'dir_q9': [
    { num: 1, dist: '5 km', dir: 'South', dx: 0, dy: -5, text: 'Walk 5 km South from P to Q' },
    { num: 2, dist: '2 km', dir: 'West', dx: -2, dy: 0, text: 'Turn right and walk towards R (West)' }
  ],
  'dir_q13': [
    { num: 1, dist: '30 m', dir: 'East', dx: 30, dy: 0, text: 'Walk 30 m East' },
    { num: 2, dist: '50 m', dir: 'South', dx: 0, dy: -50, text: 'Turn right and walk 50 m South' },
    { num: 3, dist: '40 m', dir: 'East', dx: 40, dy: 0, text: 'Turn left and walk 40 m East' },
    { num: 4, dist: '50 m', dir: 'North', dx: 0, dy: 50, text: 'Turn left and walk 50 m North' }
  ],
  'dir_q14': [
    { num: 1, dist: '10 m', dir: 'North', dx: 0, dy: 10, text: 'Walk 10 m North' },
    { num: 2, dist: '10 m', dir: 'East', dx: 10, dy: 0, text: 'Turn right and walk 10 m East' },
    { num: 3, dist: '5 m', dir: 'North', dx: 0, dy: 5, text: 'Turn left and walk 5 m North' },
    { num: 4, dist: '15 m', dir: 'West', dx: -15, dy: 0, text: 'Turn left and walk 15 m West' },
    { num: 5, dist: '15 m', dir: 'South', dx: 0, dy: -15, text: 'Turn left and walk 15 m South' }
  ],
  'dir_q15': [
    { num: 1, dist: '20 m', dir: 'South', dx: 0, dy: -20, text: 'Walk 20 m South' },
    { num: 2, dist: '30 m', dir: 'East', dx: 30, dy: 0, text: 'Turn left and walk 30 m East' },
    { num: 3, dist: '10 m', dir: 'South', dx: 0, dy: -10, text: 'Turn right and walk 10 m South' },
    { num: 4, dist: '40 m', dir: 'West', dx: -40, dy: 0, text: 'Turn right and walk 40 m West' },
    { num: 5, dist: '30 m', dir: 'North', dx: 0, dy: 30, text: 'Turn right and walk 30 m North' }
  ],
  'dir_q16': [
    { num: 1, dist: '4 km', dir: 'South', dx: 0, dy: -4, text: 'Walk 4 km South (opposite of North)' },
    { num: 2, dist: '3 km', dir: 'East', dx: 3, dy: 0, text: 'Turn left and walk 3 km East' }
  ],
  'dir_q18': [
    { num: 1, dist: '90 m', dir: 'East', dx: 90, dy: 0, text: 'Walk 90 m East' },
    { num: 2, dist: '20 m', dir: 'South', dx: 0, dy: -20, text: 'Turn right and walk 20 m South' },
    { num: 3, dist: '30 m', dir: 'West', dx: -30, dy: 0, text: 'Turn right and walk 30 m West' },
    { num: 4, dist: '100 m', dir: 'North', dx: 0, dy: 100, text: 'Turn North and walk 100 m' }
  ],
  'dir_q19': [
    { num: 1, dist: '75 m', dir: 'North', dx: 0, dy: 75, text: 'Walk 75 m North' },
    { num: 2, dist: '25 m', dir: 'West', dx: -25, dy: 0, text: 'Turn left and walk 25 m West' },
    { num: 3, dist: '80 m', dir: 'South', dx: 0, dy: -80, text: 'Turn left and walk 80 m South' },
    { num: 4, dist: '50 m', dir: 'South-East', dx: 35, dy: -35, text: 'Turn 45° to right and walk 50 m' }
  ],
  'dir_q20': [
    { num: 1, dist: '4 Ft', dir: 'East', dx: 4, dy: 0, text: 'Walk 4 Ft East from T to U' },
    { num: 2, dist: '4 Ft', dir: 'North', dx: 0, dy: 4, text: 'Turn 90° left and walk 4 Ft North to W' },
    { num: 3, dist: '3 Ft', dir: 'East', dx: 3, dy: 0, text: 'Turn 90° right and walk 3 Ft East to P' },
    { num: 4, dist: '1 Ft', dir: 'South', dx: 0, dy: -1, text: 'Turn 90° right and walk 1 Ft South to Q' },
    { num: 5, dist: '1 Ft', dir: 'East', dx: 1, dy: 0, text: 'Turn 90° left and walk 1 Ft East to V' },
    { num: 6, dist: '3 Ft', dir: 'South', dx: 0, dy: -3, text: 'Turn 90° right and walk 3 Ft South to R' }
  ],
  'dir_q21': [
    { num: 1, dist: '3 km', dir: 'East', dx: 3, dy: 0, text: 'Walk 3 km East from A to B' },
    { num: 2, dist: '9 km', dir: 'North', dx: 0, dy: 9, text: 'Turn left and walk 9 km (3×3) North to C' },
    { num: 3, dist: '15 km', dir: 'West', dx: -15, dy: 0, text: 'Turn left and walk 15 km (5×3) West to D' }
  ],
  'dir_q22': [
    { num: 1, dist: '10 km', dir: 'East', dx: 10, dy: 0, text: 'Pran walks 10 km East from office' },
    { num: 2, dist: '10 km', dir: 'North', dx: 0, dy: 10, text: 'Pran turns left and walks 10 km North' },
    { num: 3, dist: '10 km', dir: 'West', dx: -10, dy: 0, text: 'Khan walks 10 km West from office' },
    { num: 4, dist: '10 km', dir: 'North', dx: 0, dy: 10, text: 'Khan turns right and walks 10 km North' }
  ],
  'dir_q26': [
    { num: 1, dist: '1 km', dir: 'East', dx: 1, dy: 0, text: 'Facing Sunrise (East), walk 1 km' },
    { num: 2, dist: '2 km', dir: 'South', dx: 0, dy: -2, text: 'Turn right and walk 2 km South' },
    { num: 3, dist: '1 km', dir: 'West', dx: -1, dy: 0, text: 'Turn right and walk 1 km West' }
  ],
  'dir_q28': [
    { num: 1, dist: '30 m', dir: 'North', dx: 0, dy: 30, text: 'Walk 30 m North' },
    { num: 2, dist: '40 m', dir: 'West', dx: -40, dy: 0, text: 'Turn left and walk 40 m West' },
    { num: 3, dist: '30 m', dir: 'South', dx: 0, dy: -30, text: 'Turn left and walk 30 m South' },
    { num: 4, dist: '50 m', dir: 'East', dx: 50, dy: 0, text: 'Turn left and walk 50 m East' }
  ],
  'dir_q31': [
    { num: 1, dist: 'd', dir: 'East', dx: 10, dy: 0, text: 'Walk distance d East from A to B' },
    { num: 2, dist: 'd', dir: 'South', dx: 0, dy: -10, text: 'Turn right and walk distance d South' },
    { num: 3, dist: 'x', dir: 'East', dx: 15, dy: 0, text: 'Turn left and walk some distance x East' },
    { num: 4, dist: 'd', dir: 'North', dx: 0, dy: 10, text: 'Turn left and walk distance d North to C' }
  ],
  'fa1_q23': [
    { num: 1, dist: '20 m', dir: 'North', dx: 0, dy: 20, text: 'Walk 20 m North' },
    { num: 2, dist: '30 m', dir: 'East', dx: 30, dy: 0, text: 'Turn right and walk 30 m East' },
    { num: 3, dist: '35 m', dir: 'South', dx: 0, dy: -35, text: 'Turn right and walk 35 m South' },
    { num: 4, dist: '15 m', dir: 'East', dx: 15, dy: 0, text: 'Turn left and walk 15 m East' },
    { num: 5, dist: '15 m', dir: 'North', dx: 0, dy: 15, text: 'Turn left and walk 15 m North' }
  ],
  'fa1_q24': [
    { num: 1, dist: '2 km', dir: 'North', dx: 0, dy: 2, text: 'Walk 2 km North from A' },
    { num: 2, dist: '4 km', dir: 'East', dx: 4, dy: 0, text: 'Turn right and walk 4 km East' },
    { num: 3, dist: '4 km', dir: 'South', dx: 0, dy: -4, text: 'Turn right and walk 4 km South' },
    { num: 4, dist: '4 km', dir: 'West', dx: -4, dy: 0, text: 'Turn right and walk 4 km West to B' }
  ],
  'fa1_q26': [
    { num: 1, dist: '2 km', dir: 'North', dx: 0, dy: 2, text: 'Walk 2 km North' },
    { num: 2, dist: '4 km', dir: 'East', dx: 4, dy: 0, text: 'Turn right and walk 4 km East' },
    { num: 3, dist: '4 km', dir: 'South', dx: 0, dy: -4, text: 'Turn right and walk 4 km South' },
    { num: 4, dist: '4 km', dir: 'West', dx: -4, dy: 0, text: 'Turn right and walk 4 km West' }
  ],
  'fa1_q27': [
    { num: 1, dist: '10 km', dir: 'North', dx: 0, dy: 10, text: 'Seeta & Ram walk 10 km North' },
    { num: 2, dist: '5 km', dir: 'West', dx: -5, dy: 0, text: 'Seeta turns left and walks 5 km West' },
    { num: 3, dist: '3 km', dir: 'East', dx: 3, dy: 0, text: 'Ram turns right and walks 3 km East' },
    { num: 4, dist: '15 km', dir: 'South', dx: 0, dy: -15, text: 'Both turn South and walk 15 km' }
  ],
  'fa1_q30': [
    { num: 1, dist: '2 km', dir: 'North', dx: 0, dy: 2, text: 'Walk 2 km North' },
    { num: 2, dist: '4 km', dir: 'East', dx: 4, dy: 0, text: 'Turn right and walk 4 km East' },
    { num: 3, dist: '4 km', dir: 'South', dx: 0, dy: -4, text: 'Turn right and walk 4 km South' },
    { num: 4, dist: '4 km', dir: 'West', dx: -4, dy: 0, text: 'Turn right and walk 4 km West' }
  ],
  'fa1_q31': [
    { num: 1, dist: '25 km', dir: 'North', dx: 0, dy: 25, text: 'Drive 25 km North' },
    { num: 2, dist: '2 km', dir: 'East', dx: 2, dy: 0, text: 'Turn right and drive 2 km East' },
    { num: 3, dist: '25 km', dir: 'South', dx: 0, dy: -25, text: 'Turn right and drive 25 km South' }
  ],
  'fa1_q32': [
    { num: 1, dist: '25 km', dir: 'East', dx: 25, dy: 0, text: 'Car 1 runs 25 km East along main road' },
    { num: 2, dist: '15 km', dir: 'South', dx: 0, dy: -15, text: 'Car 1 turns right and runs 15 km South' },
    { num: 3, dist: '25 km', dir: 'East', dx: 25, dy: 0, text: 'Car 1 turns left and runs 25 km East' },
    { num: 4, dist: '15 km', dir: 'North', dx: 0, dy: 15, text: 'Car 1 turns to reach main road (North)' },
    { num: 5, dist: '35 km', dir: 'West', dx: -35, dy: 0, text: 'Car 2 runs 35 km West from 150 km' }
  ],
  'fa1_q33': [
    { num: 1, dist: '2 km', dir: 'North', dx: 0, dy: 2, text: 'Walk Northwards' },
    { num: 2, dist: '1.5 km', dir: 'East', dx: 1.5, dy: 0, text: 'Turn right (moving East)' },
    { num: 3, dist: '1 km', dir: 'North', dx: 0, dy: 1, text: 'Turn left (moving North), walk 1 km' },
    { num: 4, dist: '1.5 km', dir: 'West', dx: -1.5, dy: 0, text: 'Turn left again (moving West)' }
  ],
  'fa1_q34': [
    { num: 1, dist: '2 km', dir: 'South', dx: 0, dy: -2, text: 'Walk 2 km South' },
    { num: 2, dist: '3 km', dir: 'East', dx: 3, dy: 0, text: 'Turn left and walk 3 km East' },
    { num: 3, dist: '2 km', dir: 'North', dx: 0, dy: 2, text: 'Turn left and walk 2 km North' },
    { num: 4, dist: '1 km', dir: 'East', dx: 1, dy: 0, text: 'Turn right and walk 1 km East' }
  ],
  'fa1_q35': [
    { num: 1, dist: '9 km', dir: 'West', dx: -9, dy: 0, text: 'Travel 9 km West' },
    { num: 2, dist: '7 km', dir: 'North', dx: 0, dy: 7, text: 'Turn right and travel 7 km North' },
    { num: 3, dist: '8 km', dir: 'West', dx: -8, dy: 0, text: 'Turn left and travel 8 km West' },
    { num: 4, dist: '11 km', dir: 'East', dx: 11, dy: 0, text: 'Turn back and travel 11 km East' },
    { num: 5, dist: '7 km', dir: 'South', dx: 0, dy: -7, text: 'Turn right and travel 7 km South' }
  ],
  'fa1_q36': [
    { num: 1, dist: '5 km', dir: 'South', dx: 0, dy: -5, text: 'Walk 5 km South' },
    { num: 2, dist: '3 km', dir: 'West', dx: -3, dy: 0, text: 'Turn right and walk 3 km West' },
    { num: 3, dist: '5 km', dir: 'South', dx: 0, dy: -5, text: 'Turn left and walk 5 km South' }
  ]
};

console.log('Route Map defined with', Object.keys(KNOWN_ROUTE_MAP).length, 'entries.');

module.exports = { KNOWN_ROUTE_MAP };
