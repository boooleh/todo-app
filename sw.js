const CACHE = 'todo-v1';
const FILES = ['/todo-app/', '/todo-app/index.html', '/todo-app/manifest.json', '/todo-app/Minimalist_to-do_app_icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
