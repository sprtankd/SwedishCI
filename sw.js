/* ============================================================================
   Swedish CI — sw.js (Service Worker)
   Caches all app files for full offline/airplane mode support.
   Strategy: Cache-first with network fallback. On install, pre-caches all
   essential files so the app works immediately without internet.
   ========================================================================== */

var CACHE_NAME = "svci-v1";

var FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./reader.html",
  "./news.html",
  "./listening.html",
  "./collocations.html",
  "./connectors.html",
  "./tracker.html",
  "./exam-reading.html",
  "./exam-listening.html",
  "./shared.css",
  "./shared.js",
  "./gate.js",
  "./reader.js",
  "./news.js",
  "./listening.js",
  "./collocations.js",
  "./connectors.js",
  "./tracker.js",
  "./exam-reading.js",
  "./exam-listening.js",
  "./data/stories-a2.js",
  "./data/stories-a2-high.js",
  "./data/stories-b1.js",
  "./data/news-b1.js",
  "./data/news-b1plus.js",
  "./data/listening-a2.js",
  "./data/listening-b1.js",
  "./data/collocations.js",
  "./data/connectors.js",
  "./data/exam-reading-c.js",
  "./data/exam-reading-d.js",
  "./data/exam-listening-c.js",
  "./data/exam-listening-d.js"
];

// Install: pre-cache all app files
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// Activate: clean up old caches
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(
        names.filter(function (n) { return n !== CACHE_NAME; })
          .map(function (n) { return caches.delete(n); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Fetch: cache-first, fallback to network
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (cached) {
      if (cached) return cached;
      return fetch(e.request).then(function (response) {
        // Cache new successful GET requests
        if (response.ok && e.request.method === "GET") {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      });
    }).catch(function () {
      // Offline fallback for navigation requests
      if (e.request.mode === "navigate") {
        return caches.match("./index.html");
      }
    })
  );
});
