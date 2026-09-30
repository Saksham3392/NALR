/**
 * Test Suite: Apple Glass Depth, Specular Top Rim-Lighting & Ultra-Slender Frosted Scrollbars
 */
const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("=== RUNNING APPLE GLASS DEPTH & SCROLLBAR TEST SUITE ===");

// 1. Audit main.css tokens
const mainCss = fs.readFileSync(path.join(__dirname, "..", "main.css"), "utf-8");

assert.ok(
  mainCss.includes("--specular-rim: inset 0 1px 0 0 rgba(255, 255, 255, 0.75);"),
  "main.css root must declare --specular-rim with 0.75 opacity for light mode"
);

assert.ok(
  mainCss.includes("--specular-rim: inset 0 1px 0 0 rgba(255, 255, 255, 0.16);"),
  "main.css dark theme must declare --specular-rim with 0.16 opacity for dark mode"
);

assert.ok(
  mainCss.includes("--glass-specular: var(--specular-rim)"),
  "main.css --glass-specular must incorporate var(--specular-rim)"
);

console.log("[PASS] main.css: Specular rim-light design tokens verified across Light and Dark themes.");

// 2. Audit Ultra-Slender 6px Frosted Scrollbars
assert.ok(
  mainCss.includes("scrollbar-width: thin;"),
  "main.css must configure Firefox thin scrollbar"
);

assert.ok(
  mainCss.includes("width: 6px;"),
  "main.css must set 6px slender width for webkit scrollbars"
);

assert.ok(
  mainCss.includes("height: 6px;"),
  "main.css must set 6px slender height for webkit horizontal scrollbars"
);

assert.ok(
  mainCss.includes("border-radius: 999px;"),
  "Scrollbar thumbs must be rounded capsules"
);

assert.ok(
  mainCss.includes("[data-theme=\"dark\"] ::-webkit-scrollbar-thumb"),
  "main.css must include dark theme scrollbar styling"
);

console.log("[PASS] main.css: Ultra-Slender 6px Frosted Scrollbar rules verified.");

// 3. Audit components.css card specular top rim-light
const compCss = fs.readFileSync(path.join(__dirname, "..", "components.css"), "utf-8");

assert.ok(
  compCss.includes(".exam-question-card") && compCss.includes("var(--specular-rim)"),
  ".exam-question-card must receive specular rim light"
);

assert.ok(
  compCss.includes(".current-topic-banner") && compCss.includes("var(--specular-rim)"),
  ".current-topic-banner must receive specular rim light"
);

assert.ok(
  compCss.includes(".results-container-card") && compCss.includes("var(--specular-rim)"),
  ".results-container-card must receive specular rim light"
);

assert.ok(
  compCss.includes(".planner-dialog") && compCss.includes("var(--specular-rim)"),
  ".planner-dialog must receive specular rim light"
);

assert.ok(
  compCss.includes(".planner-day-card") && compCss.includes("var(--specular-rim)"),
  ".planner-day-card must receive specular rim light"
);

console.log("[PASS] components.css: Specular top rim-light verified on all elevated surfaces.");

// 4. Audit visualizers.css
const visCss = fs.readFileSync(path.join(__dirname, "..", "visualizers.css"), "utf-8");

assert.ok(
  visCss.includes("inset 0 1px 0 0 rgba(255, 255, 255, 0.75)"),
  "visualizers.css .sol-vis-container must have 0.75 specular rim in light mode"
);

assert.ok(
  visCss.includes("inset 0 1px 0 0 rgba(255, 255, 255, 0.16)"),
  "visualizers.css .sol-vis-container must have 0.16 specular rim in dark mode"
);

console.log("[PASS] visualizers.css: Specular rim-light verified on solution visualizer containers.");

// 5. Audit index.html cache busting
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf-8");
assert.ok(/main\.css\?v=11\.[2-9]/.test(html), "index.html must reference main.css?v=11.2+");
assert.ok(/components\.css\?v=11\.[2-9]/.test(html), "index.html must reference components.css?v=11.2+");
assert.ok(/visualizers\.css\?v=11\.[2-9]/.test(html), "index.html must reference visualizers.css?v=11.2+");
assert.ok(/app\.js\?v=11\.[2-9]/.test(html), "index.html must reference app.js?v=11.2+");

console.log("[PASS] index.html: Cache query strings updated to v=11.2+.");

console.log("\nALL APPLE GLASS DEPTH & SPECULAR RIM-LIGHT TESTS PASSED! 🪟✨⚡");
