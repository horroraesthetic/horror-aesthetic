/* HORROR AESTHETIC — offline-first shell, network-first pages */
const CACHE_VERSION = 'ha-v270';
const MAX_RUNTIME_ENTRIES = 180;
const BASE = '/horror-aesthetic/';
const OFFLINE_URL = BASE + 'offline.html';
const SHELL = [
  BASE, BASE + 'index.html', OFFLINE_URL, BASE + 'posters/',
  BASE + 'manifest.webmanifest', BASE + 'favicon-48.png',
  BASE + 'home.css?v=203', BASE + 'enhancements.css?v=194', BASE + 'visual-refresh.css?v=3', BASE + 'enhancements.js?v=197', BASE + 'reviews-more.js?v=3', BASE + 'home.js?v=200',
  BASE + 'lollipop.js?v=4', BASE + 'footer-scene.js?v=1', BASE + 'ambient.js?v=2', BASE + 'psy-banner.js?v=1', BASE + 'yokai.js?v=4', BASE + 'yokai-hd.js?v=3', BASE + 'yokai.css?v=4', BASE + 'daily.js?v=2', BASE + 'install.js?v=3', BASE + 'diary.js?v=4', BASE + 'app/', BASE + 'app/app.css?v=4', BASE + 'app/app.js?v=4', BASE + 'data/daily.json', BASE + 'data/films.json', BASE + 'data/collections.json', BASE + 'listen.js?v=1', BASE + 'story-sound.js?v=1', BASE + 'daily.css?v=3', BASE + 'psy-banner.css?v=1', BASE + 'ambient.css?v=2', BASE + 'footer-scene.css?v=1', BASE + 'assistant.js?v=6', BASE + 'assistant.css?v=6', BASE + 'tone-fixes.css?v=3', BASE + 'mag-gallery.css?v=1', BASE + 'lollipop.css?v=1', BASE + 'flashlight.css?v=1', BASE + 'flashlight.js?v=2', BASE + 'ha-effects.css?v=5', BASE + 'ha-effects.js?v=4', BASE + 'mobile-dock-fix.css?v=4',
  BASE + 'reference.css', BASE + 'reference.js',
  BASE + 'data/poster-rights.json', BASE + 'data/film-strip.json',
  BASE + 'review-tools.js', BASE + 'reviews-index.js',
  ...[
    'archives/','directors/','timeline/','library/','folklore/','reviews/','articles/',
    'culture/','j-horror/','games/','visual-archive/','creepypasta/','team/','database/',
    'bestiarum/','journal/','screening-room/','field-notes/','glossary/','nightmare-archive/'
  ].map(path => BASE + path),
  ...[
    'img/ha-home-hero-v2.jpg','img/ha-folklore-hero-v2.jpg',
    'img/ha-jhorror-hero-v2.jpg','img/ha-reviews-cover-v2.jpg',
    'img/ha-jhorror-poster-v2.jpg','img/ha-dark-archive-cover-v2.jpg',
    'img/ha-library-cover-v2.jpg','img/posters/kwaidan-1964-horror-aesthetic(1).webp','img/posters/onibaba-1964-horror-aesthetic.webp','img/posters/kuroneko-1968-horror-aesthetic.webp','img/posters/house-1977-horror-aesthetic.webp','img/posters/ring-1998-horror-aesthetic.webp','img/posters/audition-1999-horror-aesthetic.svg','img/posters/cure-1997-horror-aesthetic.svg','img/posters/perfect-blue-1997-horror-aesthetic.svg','img/ha-games-cover-v2.jpg','img/ha-directors-cover-v2.jpg','img/ha-culture-cover-v2.jpg','img/ha-timeline-cover-v2.jpg'
  ].map(path => BASE + path)
];

// Compare full request URLs so query-versioned shell assets are never evicted as runtime entries.
const SHELL_URLS = new Set(SHELL.map(url => new URL(url, self.location.origin).href));

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
  const runtimeKeys = keys.filter(key => !SHELL_URLS.has(new URL(key.url).href));
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

  if (url.pathname.startsWith(BASE + 'data/') || url.pathname.endsWith('.xml')) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          const cache = await caches.open(CACHE_VERSION);
          cache.put(request, response.clone()).catch(() => {});
        }
        return response;
      } catch (error) {
        const cached = await caches.match(request);
        return cached || new Response('', { status: 504 });
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
