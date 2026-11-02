// Cache simple : l'app marche hors ligne. Changer VERSION à chaque mise à jour.
const VERSION = "v1";
const FILES = ["./", "index.html", "manifest.json", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "audio/episode-1.m4a"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))); self.clients.claim(); });
// Réseau d'abord (mises à jour automatiques), cache si hors ligne
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || e.request.headers.has("range")) return;
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(VERSION).then(ca => ca.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
