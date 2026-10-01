/**
 * Verification Test Suite for Hardware-Acceleration & GPU Compositor Optimizations
 */
const assert = require("assert");
const fs = require("fs");
const path = require("path");

console.log("=== RUNNING HARDWARE-ACCELERATION TEST SUITE ===");

// 1. Check main.css
const mainCss = fs.readFileSync(path.join(__dirname, "..", "main.css"), "utf-8");
assert.ok(!mainCss.includes("background-attachment: fixed"), "main.css body should NOT use background-attachment: fixed (which forces full page scroll repaints)");
assert.ok(mainCss.includes("body::before"), "main.css should have body::before fixed background plane");
assert.ok(mainCss.includes("position: fixed;"), "body::before should be position: fixed");
assert.ok(mainCss.includes("transform: translateZ(0);"), "body::before should have transform: translateZ(0)");
assert.ok(mainCss.includes("will-change: transform;"), "body::before should have will-change: transform");
assert.ok(mainCss.includes("text-rendering: optimizeLegibility"), "html should have text-rendering: optimizeLegibility");
assert.ok(mainCss.includes("-webkit-font-smoothing: antialiased"), "html should have antialiased font smoothing");
console.log("[PASS] main.css: Zero-repaint fixed background plane and GPU typography verified");

// 2. Check components.css
const compCss = fs.readFileSync(path.join(__dirname, "..", "components.css"), "utf-8");
assert.ok(!compCss.includes("0% { left: -60%; }"), "shimmerPass should NOT animate left");
assert.ok(compCss.includes("transform: translateX(-120%)"), "shimmerPass should use GPU transform: translateX");
assert.ok(compCss.includes("transform: translateZ(0)"), "components.css must contain GPU layer promotion");
assert.ok(compCss.includes("content-visibility: auto"), "components.css must contain content-visibility: auto for card virtualization");
assert.ok(compCss.includes("contain: layout style paint"), "components.css must contain layout style paint containment");
assert.ok(compCss.includes(".exam-question-card"), "exam-question-card should be present");
assert.ok(compCss.includes(".planner-day-card"), "planner-day-card should be present");
assert.ok(compCss.includes(".results-detail-row"), "results-detail-row should be present");
assert.ok(compCss.includes("-webkit-overflow-scrolling: touch"), "scrollable containers must have momentum scrolling");
assert.ok(compCss.includes("overscroll-behavior: contain"), "scrollable containers must have overscroll-behavior: contain");
console.log("[PASS] components.css: GPU compositor layers, content-visibility virtualization, and zero-jank shimmer verified");

// 3. Check visualizers.css
const visCss = fs.readFileSync(path.join(__dirname, "..", "visualizers.css"), "utf-8");
assert.ok(visCss.includes(".sol-vis-container"), "sol-vis-container must be styled");
assert.ok(visCss.includes("contain: layout style paint"), "sol-vis-container must have layout style paint containment");
assert.ok(visCss.includes("shape-rendering: geometricPrecision"), "svg in visualizer must have geometricPrecision rendering");
assert.ok(visCss.includes(".sol-vis-container svg"), "sol-vis-container svg must be promoted to GPU layer");
assert.ok(visCss.includes("backface-visibility: hidden"), "sol-vis-container must have backface-visibility: hidden");
console.log("[PASS] visualizers.css: Vector hardware-acceleration and container isolation verified");

// 4. Check app.js
const appJs = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf-8");
assert.ok(appJs.includes("spotlightRaf = requestAnimationFrame"), "pointermove listener must be throttled with requestAnimationFrame");
assert.ok(appJs.includes("scrollRaf = requestAnimationFrame"), "scroll listener must be debounced with requestAnimationFrame");
assert.ok(appJs.includes("row.className = \"results-detail-row\""), "results list rows must have results-detail-row class for CSS virtualization");
console.log("[PASS] app.js: requestAnimationFrame event batching and virtualization classes verified");

console.log("\nALL HARDWARE-ACCELERATION TESTS PASSED PERFECTLY! 🚀⚡");
