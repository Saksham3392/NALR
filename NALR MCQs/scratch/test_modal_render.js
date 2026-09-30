const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// Check all IDs used by openPlannerModal, renderPlannerSetupView, renderPlannerScheduleView, and listeners:
const requiredIds = [
  'plannerModal',
  'plannerSetupView',
  'plannerScheduleView',
  'plannerExamDateInput',
  'plannerDateValidationMsg',
  'plannerSelectedCountBadge',
  'plannerList_st1',
  'plannerList_st2',
  'plannerList_endterm',
  'plannerSelectAll_st1',
  'plannerSelectAll_st2',
  'plannerSelectAll_endterm',
  'btnOpenPlannerModal',
  'btnClosePlannerModal',
  'btnCancelPlannerSetup',
  'btnGeneratePlan',
  'btnResetPlanner',
  'plannerStatDaysLeft',
  'plannerStatTasksTotal',
  'plannerStatTasksCompleted',
  'plannerStatProgressPct',
  'plannerExamDateDisplay',
  'plannerTimelineContainer'
];

console.log("Checking required element IDs in index.html:");
let missing = 0;
for (const id of requiredIds) {
  const regex = new RegExp(`id=["']${id}["']`);
  const found = regex.test(html);
  if (!found) {
    console.error(`❌ MISSING ID in index.html: ${id}`);
    missing++;
  } else {
    console.log(`✓ Found: ${id}`);
  }
}

if (missing === 0) {
  console.log("\n🎉 ALL required element IDs exist in index.html!");
} else {
  console.log(`\n⚠️ Missing ${missing} IDs!`);
}
