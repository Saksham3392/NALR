const { spawn } = require("child_process");

async function run() {
  console.log("Starting Edge for E2E validation...");
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const edge = spawn(edgePath, [
    "--headless=new",
    "--remote-debugging-port=9222",
    "http://localhost:3030/index.html"
  ]);

  // Wait 2.5s for Edge to start
  await new Promise(r => setTimeout(r, 2500));

  try {
    const listRes = await fetch("http://localhost:9222/json");
    const pages = await listRes.json();
    const page = pages.find(p => p.url && p.url.includes("localhost:3030/index.html"));
    if (!page) {
      throw new Error("Could not find index.html page in Edge targets");
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
        sidebarBadge: document.getElementById('sidebarTotalBadge')?.textContent
      };
    })()`);
    console.log("Initial state:", initialStats);
    if (initialStats.modulesCount !== 15) throw new Error(`Expected 15 modules, got ${initialStats.modulesCount}`);
    if (initialStats.totalQuestions !== 566) throw new Error(`Expected 566 questions, got ${initialStats.totalQuestions}`);

    console.log("\n2. Navigating to mod15 and testing all 4 subtabs in sidebar...");
    const subtabsTest = await evalCode(`(() => {
      selectModuleAndType('mod15', 'type_1');
      const mod = SYLLABUS_MODULES.find(m => m.id === 'mod15');
      const currentItem = document.querySelector('.module-acc-item.is-current-module');
      const subtabBtns = currentItem ? Array.from(currentItem.querySelectorAll('.sidebar-type-btn')) : [];
      return {
        modTitle: mod.title,
        subtabCount: subtabBtns.length,
        subtabTitles: subtabBtns.map(b => b.querySelector('.sidebar-type-title')?.textContent)
      };
    })()`);
    console.log("mod15 subtabs loaded:", subtabsTest);
    if (subtabsTest.subtabCount !== 4) throw new Error(`Expected 4 subtabs, got ${subtabsTest.subtabCount}`);

    console.log("\n3. Testing question rendering and answering in each of the 4 subtabs...");
    await evalCode(`(() => {
      window.lastErrors = [];
      window.onerror = (msg, url, line) => { window.lastErrors.push({ msg, url, line }); };
      window.onunhandledrejection = (e) => { window.lastErrors.push({ reason: e.reason }); };
      window.requestAnimationFrame = (cb) => { return setTimeout(cb, 16); };
    })()`);
    for (const typeId of ["type_1", "type_2", "type_3", "type_4"]) {
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
        manifestHasMod15: manifestText.includes('"mod15"')
      };
    })()`);
    console.log("Presentation viewer response:", pvTest);
    if (!pvTest.manifestHasMod15) throw new Error("ppt_manifest.js does not contain mod15");

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

    console.log("\n7. Testing Exam Mode Selection with mod15...");
    const examTest = await evalCode(`(() => {
      const isSelected = selectedExamModuleIds.includes('mod15');
      const modInPool = QUIZ_QUESTIONS.some(q => selectedExamModuleIds.includes(q.module_id));
      return { isSelected, modInPool };
    })()`);
    console.log("Exam mode test:", examTest);
    if (!examTest.isSelected) throw new Error("mod15 not in selectedExamModuleIds");

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
    edge.kill();
  }
}

run().catch(err => {
  console.error("❌ E2E Browser Test Failed:", err);
  process.exit(1);
});
