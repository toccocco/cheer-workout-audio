// Service Worker無効化（デバッグ用）
console.log('Service Worker disabled for debugging');

self.addEventListener('install', (e) => {
  console.log('SW: Install event - doing nothing');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('SW: Activate event - clearing all caches');
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // キャッシュを使わず、常にネットワークから取得
  console.log('SW: Fetch event - bypassing cache for:', e.request.url);
  e.respondWith(fetch(e.request));
});