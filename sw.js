/* Horror Aesthetic service worker: offline shell, fresh data */
const V='ha-v119',SHELL=['/horror-aesthetic/','/horror-aesthetic/index.html','/horror-aesthetic/manifest.webmanifest','/horror-aesthetic/favicon-48.png'];
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
