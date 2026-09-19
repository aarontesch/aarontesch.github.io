/* HIPPOCAMPUS — service worker
 *
 * Must stay next to index.html: registered as './sw.js', so its scope is the
 * /hippocampus/ folder and it never touches the other activities on this site.
 *
 * Bump CACHE_VERSION whenever index.html changes. Nothing breaks if you forget
 * (HTML is fetched network-first), but a stale font or icon can linger until
 * the version changes and the old cache is dropped.
 */

const CACHE_VERSION = 'hippocampus-v1';

const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

// Only store something worth replaying: a normal 200, or an opaque
// cross-origin response (fonts fetched without CORS still render fine).
function isCacheable(res) {
  return res && (res.ok || res.type === 'opaque');
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    // allSettled, not addAll: one missing file should not abort the install
    // and leave the activity with no offline copy at all.
    await Promise.allSettled(
      CORE.map(url => cache.add(new Request(url, { cache: 'reload' })))
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (!url.protocol.startsWith('http')) return;

  const wantsHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').includes('text/html');

  // HTML goes network-first, so a pushed fix reaches students on their next
  // online load instead of waiting for a cache to expire. The cached copy is
  // strictly the offline fallback.
  if (wantsHTML) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        if (isCacheable(fresh)) {
          const cache = await caches.open(CACHE_VERSION);
          await cache.put('./index.html', fresh.clone());
        }
        return fresh;
      } catch (err) {
        const cache = await caches.open(CACHE_VERSION);
        return (await cache.match(req)) ||
               (await cache.match('./index.html')) ||
               Response.error();
      }
    })());
    return;
  }

  // Everything else this page needs — its own assets and the Google Fonts it
  // pulls in — is cache-first, refreshed in the background so it stays current
  // without ever blocking a load.
  if (url.origin === self.location.origin || FONT_HOSTS.includes(url.hostname)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_VERSION);
      const hit = await cache.match(req);

      const update = fetch(req).then(res => {
        if (isCacheable(res)) cache.put(req, res.clone()).catch(() => {});
        return res;
      }).catch(() => null);

      if (hit) {
        event.waitUntil(update);
        return hit;
      }
      return (await update) || Response.error();
    })());
  }
});
