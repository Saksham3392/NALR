// Mock full browser environment to test app.js end-to-end
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Minimal DOM mock
const elements = {};

function createMockElement(id, tag = 'div') {
  return {
    id,
    tagName: tag.toUpperCase(),
    style: {},
    classList: {
      add: () => {},
      remove: () => {},
      toggle: () => {}
    },
    setAttribute: () => {},
    getAttribute: () => null,
    innerHTML: '',
    textContent: '',
    value: '',
    checked: false,
    addEventListener: (event, handler) => {},
    querySelector: () => createMockElement('child'),
    querySelectorAll: () => [createMockElement('child')],
    appendChild: () => {}
  };
}

global.document = {
  getElementById: (id) => {
    if (!elements[id]) elements[id] = createMockElement(id);
    return elements[id];
  },
  querySelectorAll: (selector) => [createMockElement('sel')],
  querySelector: (selector) => createMockElement('sel'),
  createElement: (tag) => createMockElement('new', tag),
  documentElement: createMockElement('html'),
  addEventListener: () => {}
};

global.window = {
  scrollTo: () => {},
  addEventListener: () => {},
  localStorage: {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  }
};

global.localStorage = global.window.localStorage;

// Load syllabus
require('../syllabus.js');
require('../quiz_questions.js');

// Test running app.js functions
const appCode = fs.readFileSync('app.js', 'utf8');
eval(appCode);

console.log("Testing openPlannerModal execution...");
try {
  openPlannerModal();
  console.log("✓ openPlannerModal() executed with 0 errors!");
  console.log("Modal display style after opening:", elements['plannerModal'].style.display);
} catch (e) {
  console.error("❌ Error in openPlannerModal():", e);
  process.exit(1);
}
