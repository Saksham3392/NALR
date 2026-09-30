const { SYLLABUS_DATA } = require('../syllabus.js');

// Mock localStorage
const mockStorage = {};
const localStorage = {
  getItem: (k) => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; }
};

const PLANNER_STORAGE_KEY = "nalr_study_plan_v1";

function testPlannerIntegration() {
  console.log("=== Testing Planner Integration ===");

  // 1. Simulate user selecting 10 days ahead and ST-1 modules
  const examDateStr = "2026-10-10";
  const selectedModuleIds = ["mod1", "mod2", "mod3", "mod4", "mod5"];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const examDate = new Date(examDateStr + "T00:00:00");
  const diffTime = examDate.getTime() - today.getTime();
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  console.log(`Exam Date: ${examDateStr}, Total Days: ${totalDays}`);

  // Harvest modules
  const allModules = [
    ...(SYLLABUS_DATA.st1?.modules || []).map(m => ({ ...m, termId: "st1", termName: "ST-1" })),
    ...(SYLLABUS_DATA.st2?.modules || []).map(m => ({ ...m, termId: "st2", termName: "ST-2" })),
    ...(SYLLABUS_DATA.endterm?.modules || []).map(m => ({ ...m, termId: "endterm", termName: "End Term" }))
  ];

  const selectedModules = allModules.filter(m => selectedModuleIds.includes(m.id));
  const taskItems = [];

  selectedModules.forEach(mod => {
    if (mod.types && mod.types.length > 0) {
      mod.types.forEach(t => {
        taskItems.push({
          id: `${mod.id}_${t.id}`,
          termId: mod.termId,
          moduleId: mod.id,
          moduleNum: mod.num,
          moduleTitle: mod.title,
          typeId: t.id,
          taskTitle: t.name,
          questionCount: t.count || 0
        });
      });
    } else {
      taskItems.push({
        id: `${mod.id}_all`,
        termId: mod.termId,
        moduleId: mod.id,
        moduleNum: mod.num,
        moduleTitle: mod.title,
        typeId: "all",
        taskTitle: "Full Topic Practice & MCQs",
        questionCount: 0
      });
    }
  });

  console.log(`Total Tasks harvested: ${taskItems.length}`);
  if (taskItems.length === 0) throw new Error("No tasks harvested!");

  const hasRevisionDay = (totalDays >= 3);
  const studyDaysCount = hasRevisionDay ? (totalDays - 1) : totalDays;
  const activeDaysCount = Math.min(studyDaysCount, taskItems.length);
  const baseCount = Math.floor(taskItems.length / activeDaysCount);
  const remainder = taskItems.length % activeDaysCount;

  const days = [];
  let taskCursor = 0;

  for (let i = 0; i < activeDaysCount; i++) {
    const dayTasksCount = baseCount + (i < remainder ? 1 : 0);
    const dayTasks = taskItems.slice(taskCursor, taskCursor + dayTasksCount);
    taskCursor += dayTasksCount;

    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() + i + 1);

    days.push({
      dayIndex: i + 1,
      dateString: dayDate.toISOString().split("T")[0],
      isRevisionDay: false,
      isBufferDay: false,
      tasks: dayTasks
    });
  }

  if (hasRevisionDay) {
    const revDate = new Date(today);
    revDate.setDate(today.getDate() + totalDays);
    days.push({
      dayIndex: totalDays,
      dateString: revDate.toISOString().split("T")[0],
      isRevisionDay: true,
      tasks: []
    });
  }

  const userStudyPlan = {
    examDate: examDateStr,
    createdAt: new Date().toISOString(),
    totalDays,
    studyDaysCount,
    hasRevisionDay,
    totalTasks: taskItems.length,
    selectedModuleIds,
    completedTasks: {},
    days
  };

  // Test Storage Save
  localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(userStudyPlan));
  const retrieved = JSON.parse(localStorage.getItem(PLANNER_STORAGE_KEY));
  if (!retrieved || retrieved.totalTasks !== taskItems.length) {
    throw new Error("Storage persistence failed!");
  }
  console.log("✓ Storage persistence passed.");

  // Test Task Checking
  const firstTaskId = taskItems[0].id;
  retrieved.completedTasks[firstTaskId] = true;
  localStorage.setItem(PLANNER_STORAGE_KEY, JSON.stringify(retrieved));
  const retrievedAfterCheck = JSON.parse(localStorage.getItem(PLANNER_STORAGE_KEY));
  if (!retrievedAfterCheck.completedTasks[firstTaskId]) {
    throw new Error("Task check toggle failed!");
  }
  console.log("✓ Task check toggle passed.");

  // Test Reset
  localStorage.removeItem(PLANNER_STORAGE_KEY);
  if (localStorage.getItem(PLANNER_STORAGE_KEY) !== null) {
    throw new Error("Planner reset failed!");
  }
  console.log("✓ Reset Planner passed.");

  console.log("=== All Planner Integration Tests Passed! ===");
}

testPlannerIntegration();
