// sw.js (audio-first cache)
const CACHE = 'cheer-audio-v2';
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './audio/ganbare.mp3',
  './audio/ganbatte.mp3',
  './audio/sono_choshi.mp3',
  './audio/hurray.mp3',
  './audio/ato_chotto.mp3',
  './audio/yatta_ne.mp3',
  './audio/yatta_long.mp3',
  './audio/otsukaresama.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => (k===CACHE?null:caches.delete(k))))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;

  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => hit);
    })
  );
});
