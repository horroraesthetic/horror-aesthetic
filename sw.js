/* Horror Aesthetic service worker: offline shell, fresh data */
const V='ha-v167',SHELL=['/horror-aesthetic/','/horror-aesthetic/index.html','/horror-aesthetic/manifest.webmanifest','/horror-aesthetic/favicon-48.png','/horror-aesthetic/enhancements.css','/horror-aesthetic/enhancements.js','/horror-aesthetic/visual-integration.js','/horror-aesthetic/review-tools.js','/horror-aesthetic/reviews-index.js','/horror-aesthetic/archives/','/horror-aesthetic/directors/','/horror-aesthetic/timeline/','/horror-aesthetic/library/','/horror-aesthetic/folklore/','/horror-aesthetic/culture/','/horror-aesthetic/j-horror/','/horror-aesthetic/games/','/horror-aesthetic/visual-archive/','/horror-aesthetic/database/','/horror-aesthetic/bestiarum/','/horror-aesthetic/journal/','/horror-aesthetic/screening-room/','/horror-aesthetic/field-notes/'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==location.origin||u.pathname.startsWith('/horror-aesthetic/media/'))return;
 const fresh=r.mode==='navigate'||u.pathname.endsWith('/updates.json')||u.pathname.endsWith('/sw.js');
 if(fresh){
  e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(h=>h.put(r,c));return x}).catch(()=>caches.match(r).then(x=>x||caches.match('/horror-aesthetic/index.html'))));
  return}
 e.respondWith(caches.match(r).then(x=>x||fetch(r).then(n=>{if(n.ok){const c=n.clone();caches.open(V).then(h=>h.put(r,c))}return n})));
});
