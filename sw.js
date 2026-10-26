// EntrenaEnCasa: funciona sin conexión. Sirve lo guardado al instante y lo actualiza por detrás.
const CACHE = 'entrenaencasa-v1';
const BASE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const nav = e.request.mode === 'navigate';
    const hit = await c.match(nav ? './index.html' : e.request);
    const red = fetch(e.request).then(r => {
      // también guarda Three.js y las fuentes (respuestas opacas de otros dominios)
      if (r.ok || r.type === 'opaque') c.put(nav ? './index.html' : e.request, r.clone());
      return r;
    }).catch(() => hit);
    return hit || red;
  }));
});
