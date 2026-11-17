/* HORROR AESTHETIC — offline-first shell, network-first pages */
const CACHE_VERSION = 'ha-v195';
const MAX_RUNTIME_ENTRIES = 180;
const BASE = '/horror-aesthetic/';
const OFFLINE_URL = BASE + 'offline.html';
const SHELL = [
  BASE, BASE + 'index.html', OFFLINE_URL,
  BASE + 'manifest.webmanifest', BASE + 'favicon-48.png',
  BASE + 'home.css', BASE + 'enhancements.css', BASE + 'enhancements.js', BASE + 'home.js',
  BASE + 'reference.css', BASE + 'reference.js',
  BASE + 'review-tools.js', BASE + 'reviews-index.js',
  ...[
    'archives/','directors/','timeline/','library/','folklore/','reviews/','articles/',
    'culture/','j-horror/','games/','visual-archive/','database/',
    'bestiarum/','journal/','screening-room/','field-notes/','glossary/','nightmare-archive/'
  ].map(path => BASE + path),
  ...[
    'img/ha-home-hero-v2.jpg','img/ha-folklore-hero-v2.jpg',
    'img/ha-jhorror-hero-v2.jpg','img/ha-reviews-cover-v2.jpg',
    'img/ha-jhorror-poster-v2.jpg','img/ha-dark-archive-cover-v2.jpg',
    'img/ha-library-cover-v2.jpg','img/ha-games-cover-v2.jpg','img/ha-directors-cover-v2.jpg','img/ha-culture-cover-v2.jpg','img/ha-timeline-cover-v2.jpg'
  ].map(path => BASE + path)
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // Cache each shell entry independently: one missing optional page must
    // not prevent the new worker from installing.
    await Promise.all(SHELL.map(url =>
      cache.add(url).catch(() => null)
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith('ha-v') && key !== CACHE_VERSION)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

async function storeBounded(cache, request, response) {
  if (!response || !response.ok || response.type === 'opaque' || response.status === 206) return;
  await cache.put(request, response);
  const keys = await cache.keys();
  const runtimeKeys = keys.filter(key => !SHELL.includes(new URL(key.url).pathname));
  if (runtimeKeys.length > MAX_RUNTIME_ENTRIES) {
    await Promise.all(runtimeKeys.slice(0, runtimeKeys.length - MAX_RUNTIME_ENTRIES).map(key => cache.delete(key)));
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith(BASE + 'media/')) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_VERSION);
          storeBounded(cache, request, response.clone()).catch(() => {});
        }
        return response;
      } catch (error) {
        const cachedPage = await caches.match(request);
        if (cachedPage) return cachedPage;
        const offlinePage = await caches.match(OFFLINE_URL);
        if (offlinePage) return offlinePage;
        return new Response('Offline', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) {
        const cache = await caches.open(CACHE_VERSION);
        storeBounded(cache, request, response.clone()).catch(() => {});
      }
      return response;
    } catch (error) {
      return new Response('', { status: 504, statusText: 'Gateway Timeout' });
    }
  })());
});
