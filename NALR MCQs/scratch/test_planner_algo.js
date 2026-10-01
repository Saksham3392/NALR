const { SYLLABUS_DATA } = require('../syllabus.js');

function createStudyPlan(examDateStr, selectedModuleIds) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const examDate = new Date(examDateStr + 'T00:00:00');
  const diffTime = examDate.getTime() - today.getTime();
  const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (isNaN(totalDays) || totalDays <= 0) {
    return { error: 'Target exam date must be at least tomorrow.' };
  }

  // Find all module objects across all 3 terms
  const allModules = [
    ...(SYLLABUS_DATA.st1?.modules || []).map(m => ({ ...m, termId: 'st1', termName: 'ST-1' })),
    ...(SYLLABUS_DATA.st2?.modules || []).map(m => ({ ...m, termId: 'st2', termName: 'ST-2' })),
    ...(SYLLABUS_DATA.endterm?.modules || []).map(m => ({ ...m, termId: 'endterm', termName: 'End Term' }))
  ];

  const selectedModules = allModules.filter(m => selectedModuleIds.includes(m.id));
  if (selectedModules.length === 0) {
    return { error: 'Please select at least one topic.' };
  }

  // Unpack all sub-types
  const taskItems = [];
  selectedModules.forEach(mod => {
    if (mod.types && mod.types.length > 0) {
      mod.types.forEach((t, tIdx) => {
        taskItems.push({
          id: `${mod.id}_${t.id}`,
          moduleId: mod.id,
          moduleNum: mod.num,
          moduleTitle: mod.title,
          termId: mod.termId,
          termName: mod.termName,
          typeId: t.id,
          typeName: t.name,
          count: t.count || 0
        });
      });
    } else {
      taskItems.push({
        id: `${mod.id}_all`,
        moduleId: mod.id,
        moduleNum: mod.num,
        moduleTitle: mod.title,
        termId: mod.termId,
        termName: mod.termName,
        typeId: 'all',
        typeName: 'Full Topic Practice',
        count: 0
      });
    }
  });

  const totalTasks = taskItems.length;

  // Determine study days vs final mock/revision day
  const hasRevisionDay = totalDays >= 3;
  const studyDaysCount = hasRevisionDay ? (totalDays - 1) : totalDays;

  // Distribute tasks across study days
  const days = [];
  const baseCount = Math.floor(totalTasks / studyDaysCount);
  const remainder = totalTasks % studyDaysCount;

  let taskCursor = 0;
  for (let i = 0; i < studyDaysCount; i++) {
    const dayTasksCount = baseCount + (i < remainder ? 1 : 0);
    const dayTasks = taskItems.slice(taskCursor, taskCursor + dayTasksCount);
    taskCursor += dayTasksCount;

    const dayDate = new Date(today);
    dayDate.setDate(today.getDate() + i + 1);

    days.push({
      dayIndex: i + 1,
      dateString: dayDate.toISOString().split('T')[0],
      displayDate: dayDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      isRevisionDay: false,
      tasks: dayTasks.map(t => ({ ...t, completed: false })),
      completed: false
    });
  }

  // Append Final Revision Day if applicable
  if (hasRevisionDay) {
    const revDate = new Date(today);
    revDate.setDate(today.getDate() + totalDays);
    days.push({
      dayIndex: totalDays,
      dateString: revDate.toISOString().split('T')[0],
      displayDate: revDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      isRevisionDay: true,
      title: '🎯 Final Comprehensive Revision & Full Mock Exam',
      desc: 'Review all flagged/bookmarked questions, formula invariants, and take a full 30-minute exam simulation.',
      tasks: [],
      completed: false
    });
  }

  return {
    createdAt: new Date().toISOString(),
    examDate: examDateStr,
    totalDays,
    studyDaysCount,
    hasRevisionDay,
    totalTasks,
    selectedModuleIds,
    days
  };
}

function formatLocalYMD(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// Test cases
const todayForTest = new Date();
const in5Days = new Date(todayForTest);
in5Days.setDate(todayForTest.getDate() + 5);
const in5DaysStr = formatLocalYMD(in5Days);

const tomorrow = new Date(todayForTest);
tomorrow.setDate(todayForTest.getDate() + 1);
const tomorrowStr = formatLocalYMD(tomorrow);

const yesterday = new Date(todayForTest);
yesterday.setDate(todayForTest.getDate() - 1);
const yesterdayStr = formatLocalYMD(yesterday);

console.log('--- Test 1: 5 days with 3 modules ---');
const plan1 = createStudyPlan(in5DaysStr, ['mod1', 'mod2', 'mod3']);
console.log('Total Days:', plan1.totalDays, 'Tasks:', plan1.totalTasks, 'Days created:', plan1.days.length);
plan1.days.forEach(d => {
  console.log(`Day ${d.dayIndex} (${d.displayDate}) [${d.isRevisionDay ? 'REVISION' : d.tasks.length + ' tasks'}]:`);
  d.tasks.forEach(t => console.log(`   - [${t.moduleTitle}] ${t.typeName}`));
});

console.log('\n--- Test 2: 1 day (tomorrow) with all ST-1 modules ---');
const st1Ids = (SYLLABUS_DATA.st1?.modules || []).map(m => m.id);
const plan2 = createStudyPlan(tomorrowStr, st1Ids);
console.log('Total Days:', plan2.totalDays, 'Tasks:', plan2.totalTasks, 'Days created:', plan2.days.length);
console.log(`Day 1 tasks: ${plan2.days[0].tasks.length}`);

console.log('\n--- Test 3: Past date validation ---');
const plan3 = createStudyPlan(yesterdayStr, ['mod1']);
console.log('Past date result:', plan3.error);
