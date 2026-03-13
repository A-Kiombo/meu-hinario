const CACHE_NAME = 'hinario-v1';
const ASSETS = [
  './index.html',
  './manifest.json'
];

// Instala o Service Worker e guarda os ficheiros no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responde com o cache quando estiver offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );

});
