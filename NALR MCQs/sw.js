// NALR Masterclass — Service Worker (v18.3)
const CACHE_NAME = 'nalr-pwa-cache-v18.3';

const STATIC_ASSETS = [
  './',
  './index.html',
  './components.css',
  './visualizers.css',
  './app.js',
  './interactive_visualizers.js',
  './quiz_questions.js',
  './syllabus.js',
  './ppt_manifest.js',
  './favicon.svg',
  './favicon.ico',
  './apple-touch-icon.png',
  './manifest.json'
];

// Install: Pre-cache core application shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching static assets');
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[Service Worker] Non-fatal cache item issue:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up old cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate with dynamic caching for app assets
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore cross-origin non-GET or browser extension requests
  if (url.origin !== self.location.origin && !url.hostname.includes('fonts.googleapis.com') && !url.hostname.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // If network fetch fails (offline) and no cache match, return index.html for navigation
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });

      // Return cached response immediately if present, otherwise await network fetch
      return cachedResponse || fetchPromise;
    })
  );
});
