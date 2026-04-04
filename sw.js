const CACHE = 'todo-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(response => {
      return caches.open(CACHE).then(cache => {
        cache.put(e.request, response.clone());
        return response;
      });
    }))
  );
});
