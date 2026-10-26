// EntrenaEnCasa: funciona sin conexión.
// La página se pide primero a internet (así las novedades llegan al momento) y, si no hay, sale de lo guardado.
// El resto (Three.js, fuentes, iconos) se sirve de lo guardado y se refresca por detrás.
const CACHE = 'entrenaencasa-v2';
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
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then(r => {
      if (r.ok) { const copia = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', copia)); }
      return r;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(e.request);
    const red = fetch(e.request).then(r => {
      // también guarda Three.js y las fuentes (respuestas opacas de otros dominios)
      if (r.ok || r.type === 'opaque') c.put(e.request, r.clone());
      return r;
    }).catch(() => hit);
    return hit || red;
  }));
});
