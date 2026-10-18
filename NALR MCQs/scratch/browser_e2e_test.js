const fs = require("fs");
const { spawn } = require("child_process");
const { SYLLABUS_DATA } = require("../syllabus.js");

function getBrowserExecutable() {
  if (process.env.BROWSER_PATH && fs.existsSync(process.env.BROWSER_PATH)) {
    return process.env.BROWSER_PATH;
  }
  if (process.env.EDGE_PATH && fs.existsSync(process.env.EDGE_PATH)) {
    return process.env.EDGE_PATH;
  }

  const candidates = [
    // Standard Windows Edge locations
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    process.env["PROGRAMFILES(X86)"] && `${process.env["PROGRAMFILES(X86)"]}\\Microsoft\\Edge\\Application\\msedge.exe`,
    process.env["PROGRAMFILES"] && `${process.env["PROGRAMFILES"]}\\Microsoft\\Edge\\Application\\msedge.exe`,
    process.env["LOCALAPPDATA"] && `${process.env["LOCALAPPDATA"]}\\Microsoft\\Edge\\Application\\msedge.exe`,
    // Standard Windows Chrome locations
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    process.env["PROGRAMFILES"] && `${process.env["PROGRAMFILES"]}\\Google\\Chrome\\Application\\chrome.exe`,
    process.env["LOCALAPPDATA"] && `${process.env["LOCALAPPDATA"]}\\Google\\Chrome\\Application\\chrome.exe`,
    // Linux / macOS locations
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/microsoft-edge",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  ].filter(Boolean);

  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return process.platform === "win32" ? "msedge.exe" : "google-chrome";
}

async function run() {
  const browserPath = getBrowserExecutable();
  console.log(`Starting Browser for E2E validation: ${browserPath}...`);

  const browserProc = spawn(browserPath, [
    "--headless=new",
    "--remote-debugging-port=9222",
    "http://localhost:3030/index.html"
  ]);

  // Wait 2.5s for browser to start
  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch("http://localhost:9222/json");
    const pages = await listRes.json();
    const page = pages.find(p => p.url && p.url.includes("localhost:3030/index.html"));
    if (!page) {
      throw new Error("Could not find index.html page in browser targets");
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    let nextId = 1;
    const callbacks = new Map();
    const consoleErrors = [];

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg);
        callbacks.delete(msg.id);
      }
      if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error") {
        consoleErrors.push(msg.params.args.map(a => a.value || a.description).join(" "));
      }
      if (msg.method === "Runtime.exceptionThrown") {
        consoleErrors.push(msg.params.exceptionDetails.text);
      }
    };

    await new Promise(resolve => ws.onopen = resolve);

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = nextId++;
        callbacks.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    await send("Runtime.enable");
    await send("Console.enable");

    async function evalCode(expression) {
      const res = await send("Runtime.evaluate", {
        expression: expression,
        awaitPromise: true,
        returnByValue: true
      });
      if (res.result && res.result.exceptionDetails) {
        throw new Error(JSON.stringify(res.result.exceptionDetails));
      }
      return res.result.result ? res.result.result.value : null;
    }

    // Dynamic expected values derived from syllabus.js
    const expectedModulesCount = SYLLABUS_DATA.st1.modules.length;
    const expectedTotalQuestions = SYLLABUS_DATA.st1.modules.reduce((sum, mod) => {
      return sum + (mod.types ? mod.types.reduce((tsum, t) => tsum + (t.count || 0), 0) : 0);
    }, 0);

    console.log("\n1. Verifying initial page load and module count...");
    const initialStats = await evalCode(`(() => {
      localStorage.clear();
      userPracticeAnswers = {};
      renderApplication();
      return {
        term: currentTermId,
        modulesCount: (typeof SYLLABUS_MODULES !== 'undefined') ? SYLLABUS_MODULES.length : 0,
        totalQuestions: QUIZ_QUESTIONS.length,
        mod15Exists: !!SYLLABUS_MODULES.find(m => m.id === 'mod15'),
        mod16Exists: !!SYLLABUS_MODULES.find(m => m.id === 'mod16'),
        sidebarBadge: document.getElementById('sidebarTotalBadge')?.textContent
      };
    })()`);
    console.log("Initial state:", initialStats);
    if (initialStats.modulesCount !== expectedModulesCount) {
      throw new Error(`Expected ${expectedModulesCount} modules, got ${initialStats.modulesCount}`);
    }
    if (initialStats.totalQuestions !== expectedTotalQuestions) {
      throw new Error(`Expected ${expectedTotalQuestions} questions, got ${initialStats.totalQuestions}`);
    }

    console.log("\n2. Navigating to mod15 and testing subtabs in sidebar...");
    const subtabsTest = await evalCode(`(() => {
      selectModuleAndType('mod15', 'type_1');
      const mod = SYLLABUS_MODULES.find(m => m.id === 'mod15');
      const currentItem = document.querySelector('.module-acc-item.is-current-module');
      const subtabBtns = currentItem ? Array.from(currentItem.querySelectorAll('.sidebar-type-btn')) : [];
      return {
        modTitle: mod.title,
        expectedTypesCount: mod.types ? mod.types.length : 0,
        typeIds: mod.types ? mod.types.map(t => t.id) : [],
        subtabCount: subtabBtns.length,
        subtabTitles: subtabBtns.map(b => b.querySelector('.sidebar-type-title')?.textContent)
      };
    })()`);
    console.log("mod15 subtabs loaded:", subtabsTest);
    if (subtabsTest.subtabCount !== subtabsTest.expectedTypesCount) {
      throw new Error(`Expected ${subtabsTest.expectedTypesCount} subtabs, got ${subtabsTest.subtabCount}`);
    }

    console.log("\n3. Testing question rendering and answering in mod15 subtabs...");
    await evalCode(`(() => {
      window.lastErrors = [];
      window.onerror = (msg, url, line) => { window.lastErrors.push({ msg, url, line }); };
      window.onunhandledrejection = (e) => { window.lastErrors.push({ reason: e.reason }); };
      window.requestAnimationFrame = (cb) => { return setTimeout(cb, 16); };
    })()`);
    for (const typeId of subtabsTest.typeIds) {
      const testRes = await evalCode(`(async () => {
        selectModuleAndType('mod15', '${typeId}');
        const qCards = Array.from(document.querySelectorAll('.tab-question-item'));
        const firstCard = qCards[0];
        const qId = firstCard ? firstCard.id.replace('q_card_', '') : null;
        const qObj = QUIZ_QUESTIONS.find(q => q.id === qId);
        
        // Set user answer and re-render question view
        userPracticeAnswers[qId] = qObj.correct;
        renderMainQuestionView();
        
        // Re-query card from DOM
        const updatedCard = document.getElementById('q_card_' + qId);
        const vis = updatedCard ? updatedCard.querySelector('.sol-vis-container') : null;
        const expl = updatedCard ? updatedCard.querySelector('.exam-feedback-box') : null;
        
        return {
          typeId: '${typeId}',
          qId,
          userAnswer: userPracticeAnswers[qId],
          feedbackBoxFound: !!expl,
          visPresent: !!vis,
          visClass: vis ? vis.className : '',
          explPresent: !!expl
        };
      })()`);
      console.log(`Subtab ${typeId} practice test:`, testRes);
      if (!testRes.visPresent) throw new Error(`Visualizer missing for ${typeId}`);
    }

    console.log("\n4. Testing PPT button href...");
    const pptHref = await evalCode(`(() => {
      const btn = document.getElementById('btnModulePPT');
      return {
        href: btn?.href,
        display: btn ? window.getComputedStyle(btn).display : 'none',
        label: btn?.querySelector('.ppt-label-text')?.textContent
      };
    })()`);
    console.log("PPT button info:", pptHref);
    if (!pptHref.href || !pptHref.href.includes("mod=mod15")) {
      throw new Error("PPT button does not route to mod15");
    }

    console.log("\n5. Testing Presentation Viewer with mod=mod15...");
    const pvTest = await evalCode(`(async () => {
      const res = await fetch('presentation_viewer.html?mod=mod15');
      const text = await res.text();
      const manifestRes = await fetch('ppt_manifest.js');
      const manifestText = await manifestRes.text();
      return {
        status: res.status,
        hasManifest: text.includes('ppt_manifest.js'),
        manifestHasMod15: manifestText.includes('"mod15"'),
        manifestHasMod16: manifestText.includes('"mod16"')
      };
    })()`);
    console.log("Presentation viewer response:", pvTest);
    if (!pvTest.manifestHasMod15) throw new Error("ppt_manifest.js does not contain mod15");
    if (!pvTest.manifestHasMod16) throw new Error("ppt_manifest.js does not contain mod16");

    console.log("\n6. Testing Theme Toggle (Light & Dark Mode)...");
    const themeTest = await evalCode(`(() => {
      const initialTheme = document.documentElement.getAttribute('data-theme');
      // Toggle to dark
      document.documentElement.setAttribute('data-theme', 'dark');
      const darkBg = window.getComputedStyle(document.body).backgroundColor;
      // Toggle back to light
      document.documentElement.setAttribute('data-theme', 'light');
      const lightBg = window.getComputedStyle(document.body).backgroundColor;
      return { initialTheme, darkBg, lightBg };
    })()`);
    console.log("Theme test:", themeTest);

    console.log("\n7. Testing Exam Mode Selection with mod15 & mod16...");
    const examTest = await evalCode(`(() => {
      const has15 = selectedExamModuleIds.includes('mod15');
      const has16 = selectedExamModuleIds.includes('mod16');
      return { has15, has16 };
    })()`);
    console.log("Exam mode test:", examTest);
    if (!examTest.has15) throw new Error("mod15 not in selectedExamModuleIds");
    if (!examTest.has16) throw new Error("mod16 not in selectedExamModuleIds");

    console.log("\n8. Testing Study Planner Jump to Topic...");
    const plannerTest = await evalCode(`(() => {
      if (typeof jumpToPlannerTopic === 'function') {
        jumpToPlannerTopic('st1', 'mod15', 'type_1');
        return {
          activeMod: activeModuleId,
          activeType: activeTypeId,
          isPractice: !isExamMode
        };
      }
      return { skipped: true };
    })()`);
    console.log("Study planner jump test:", plannerTest);
    if (plannerTest.activeMod !== 'mod15' || plannerTest.activeType !== 'type_1') {
      throw new Error("jumpToPlannerTopic failed to route to mod15 type_1");
    }

    console.log("\n9. Checking for any Console Errors during full interaction...");
    console.log("Console errors logged:", consoleErrors);
    if (consoleErrors.length > 0) {
      throw new Error(`Browser console logged ${consoleErrors.length} errors!`);
    }

    console.log("\n🎉 ALL E2E BROWSER VALIDATION CHECKS PASSED WITH ZERO ERRORS!");
    ws.close();
  } finally {
    browserProc.kill();
  }
}

run().catch(err => {
  console.error("❌ E2E Browser Test Failed:", err);
  process.exit(1);
});
