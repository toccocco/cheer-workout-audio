// sw.js (mobile-friendly audio cache)
const CACHE = 'cheer-audio-v4';
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 音声ファイルは個別にキャッシュ（失敗を許容）
const AUDIO_FILES = [
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
  e.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      // 基本ファイルを最初にキャッシュ
      try {
        await cache.addAll(PRECACHE);
      } catch (err) {
        console.log('Basic cache failed:', err);
      }
      
      // 音声ファイルを個別にキャッシュ（失敗しても続行）
      for (const audioFile of AUDIO_FILES) {
        try {
          const response = await fetch(audioFile);
          if (response.ok) {
            await cache.put(audioFile, response);
          }
        } catch (err) {
          console.log('Audio cache failed for:', audioFile);
        }
      }
    })
  );
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
