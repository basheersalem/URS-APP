// URS APP Service Worker
const CACHE = 'urs-app-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});
self.addEventListener('fetch', e => {
  // Pass through all requests — no offline caching needed
});
