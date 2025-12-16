const CACHE_NAME = "gps-cache-v1"; // Use a version number for easier updates
const filesToCache = [
  "index.html",
  "style.css",
  // Add your new report card CSS file here if it's separate
  // "report-card-styles.css" 
];

// 1. Installation: Caching the core assets
self.addEventListener("install", e => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

// 2. Activation: Cleaning up old caches
self.addEventListener("activate", e => {
  console.log('[Service Worker] Activate');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete old caches that do not match the current name
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Takes control of clients as soon as it's activated
  return self.clients.claim();
});

// 3. Fetch: Serving content from cache first, then network
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      
      // No match in cache, fetch from the network
      return fetch(e.request);
    })
  );
});
