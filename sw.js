// Lightweight service worker: network-first with cache fallback for core assets
const CACHE_NAME = 'sdooley-site-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './cards.js?v=20240115q',
  './drs/inc/header.html',
  './drs/inc/footer.html',
  './drs/css/style.css',
  './drs/css/style2.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => k === CACHE_NAME ? null : caches.delete(k))))
  );
  self.clients.claim();
});

// Network-first for HTML/JS; cache-first for CSS/images
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // Strategy selection
  if (req.destination === 'document' || req.destination === 'script' || req.destination === 'worker') {
    event.respondWith(networkFirst(req));
  } else if (req.destination === 'style' || req.destination === 'image' || req.destination === 'font') {
    event.respondWith(cacheFirst(req));
  }
});

async function networkFirst(request) {
  try {
    const fresh = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Fallback to cached index for navigation requests
    if (request.mode === 'navigate') {
      const index = await caches.match('./index.html');
      if (index) return index;
    }
    throw e;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const fresh = await fetch(request);
  const cache = await caches.open(CACHE_NAME);
  cache.put(request, fresh.clone());
  return fresh;
}


