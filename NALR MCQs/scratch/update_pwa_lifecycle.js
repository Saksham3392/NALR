const fs = require('fs');

let app = fs.readFileSync('app.js', 'utf8');

const oldPwaBlock = `function initPwaService() {
  // Register Service Worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((reg) => {
        console.log("[PWA] Service Worker registered in scope:", reg.scope);
      }).catch((err) => {
        console.log("[PWA] Service Worker registration note:", err);
      });
    });
  }`;

const newPwaBlock = `function initPwaService() {
  // Register Service Worker with Real-Time Update Checking
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").then((reg) => {
        console.log("[PWA] Service Worker registered in scope:", reg.scope);

        // Actively check for deployment updates from server
        reg.update().catch(() => {});

        // Listen for new version arriving
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (!installingWorker) return;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
              // New content deployed! Show interactive toast
              showToastNotification("✨ New questions & updates available! Tap here to refresh.", 8000);
              const toast = document.getElementById("appToastNotification");
              if (toast) {
                toast.style.cursor = "pointer";
                toast.onclick = () => window.location.reload();
              }
            }
          };
        };
      }).catch((err) => {
        console.log("[PWA] Service Worker registration note:", err);
      });
    });

    // Check for updates whenever window regains focus (e.g. app reopened)
    window.addEventListener("focus", () => {
      navigator.serviceWorker.getRegistration().then((reg) => {
        if (reg) reg.update().catch(() => {});
      });
    });
  }`;

if (app.includes(oldPwaBlock)) {
  app = app.replace(oldPwaBlock, newPwaBlock);
  fs.writeFileSync('app.js', app, 'utf8');
  console.log("Updated initPwaService with real-time update listeners!");
} else {
  console.error("Could not find oldPwaBlock in app.js");
}
