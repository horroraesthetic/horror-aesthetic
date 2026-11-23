/* HORROR AESTHETIC app layer: personal diary store, film action bar (like / watched / watchlist / rating), bottom tab bar in app mode. All data stays on the phone. */
(function(){
 var KEY="ha-diary-v1",root=document.documentElement,BASE="/horror-aesthetic/";
 function lang(){return String(root.dataset.l||root.lang||"en").toLowerCase().indexOf("ru")===0?"ru":"en"}
 function T(ru,en){return lang()==="ru"?ru:en}
 function load(){try{var o=JSON.parse(localStorage.getItem(KEY)||"{}");return o&&typeof o==="object"&&!Array.isArray(o)?o:{}}catch(e){return{}}}
 function save(o){try{localStorage.setItem(KEY,JSON.stringify(o));return true}catch(e){return false}}
 function today(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
 var D=window.HA_DIARY={
  all:load,
  get:function(s){return load()[s]||{}},
  set:function(s,p){var o=load(),e=Object.assign({},o[s]||{},p);if(!e.w&&!e.l&&!e.wl&&!e.r){delete o[s]}else{e.t=Date.now();o[s]=e}save(o);document.dispatchEvent(new CustomEvent("ha-diary",{detail:s}));return o[s]||{}},
  replace:function(o){save(o||{});document.dispatchEvent(new CustomEvent("ha-diary"))},
  today:today,
  stars:function(r){var f=Math.floor((r||0)/2),h=(r||0)%2;return"★".repeat(f)+(h?"½":"")}
 };
 function css(){if(document.getElementById("ha-app-css"))return;var s=document.createElement("style");s.id="ha-app-css";
  s.textContent=".ha-act{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:12px 0 6px}.ha-act button{display:inline-flex;align-items:center;gap:7px;padding:10px 12px;font:700 11px/1 ui-monospace,Menlo,monospace;letter-spacing:.12em;text-transform:uppercase;color:inherit;background:rgba(20,10,14,.6);border:1px solid #5a3a44;border-radius:2px;cursor:pointer}.ha-act button[aria-pressed=true]{border-color:#c4161f;background:#a50f1b;color:#fff}.ha-act svg{width:15px;height:15px}.ha-rate{display:inline-flex;align-items:center;gap:1px;margin-left:2px}.ha-rate .s{position:relative;width:26px;height:26px;display:inline-block;cursor:pointer;font-size:24px;line-height:26px;color:#4a3a40;user-select:none}.ha-rate .s i{position:absolute;left:0;top:0;overflow:hidden;width:0;color:#ff3a48;font-style:normal;white-space:nowrap}.ha-rate .s.f i{width:100%}.ha-rate .s.h i{width:50%}"+
  ".ha-tabs{position:fixed;left:0;right:0;bottom:0;z-index:9000;display:flex;background:rgba(10,6,8,.96);border-top:1px solid #3a2128;padding-bottom:env(safe-area-inset-bottom);backdrop-filter:blur(8px)}.ha-tabs a{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 2px 8px;color:#a89aa0;text-decoration:none;font:600 10px/1 ui-monospace,Menlo,monospace;letter-spacing:.08em;text-transform:uppercase;-webkit-tap-highlight-color:transparent}.ha-tabs a svg{width:22px;height:22px}.ha-tabs a[aria-current=page]{color:#ff3a48}body.ha-has-tabs{padding-bottom:calc(64px + env(safe-area-inset-bottom))!important}body.ha-has-tabs .ha-command-trigger,body.ha-has-tabs .ha-cinema-toggle,body.ha-has-tabs .ha-shelf-trigger{bottom:calc(74px + env(safe-area-inset-bottom))!important}";
  document.head.appendChild(s)}
 var IC={heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',film:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>'};
 window.HA_ICONS=IC;
 /* ---- action bar on review pages ---- */
 function actions(){
  var m=location.pathname.match(/\/reviews\/([^\/]+)\.html$/);if(!m||m[1]==="index")return;var slug=m[1];
  var h=document.querySelector(".w h1")||document.querySelector("article h1")||document.querySelector("h1");if(!h||document.querySelector(".ha-act"))return;css();
  var bar=document.createElement("div");bar.className="ha-act";
  bar.innerHTML='<button type="button" data-a="w">'+IC.eye+'<span></span></button><button type="button" data-a="l">'+IC.heart+'<span></span></button><button type="button" data-a="wl">'+IC.clock+'<span></span></button><span class="ha-rate" role="group"></span>';
  h.parentNode.insertBefore(bar,h.nextSibling);
  var rate=bar.querySelector(".ha-rate");
  for(var i=1;i<=5;i++){var s=document.createElement("span");s.className="s";s.dataset.n=i;s.innerHTML="★<i>★</i>";rate.appendChild(s)}
  function paint(){
   var e=D.get(slug);
   bar.querySelector('[data-a=w] span').textContent=e.w?T("Просмотрено","Watched"):T("Смотрел","Watched");
   bar.querySelector('[data-a=l] span').textContent=T("Нравится","Like");
   bar.querySelector('[data-a=wl] span').textContent=T("Хочу","Watchlist");
   bar.querySelector('[data-a=w]').setAttribute("aria-pressed",e.w?"true":"false");
   bar.querySelector('[data-a=l]').setAttribute("aria-pressed",e.l?"true":"false");
   bar.querySelector('[data-a=wl]').setAttribute("aria-pressed",e.wl?"true":"false");
   [].forEach.call(rate.children,function(s){var n=+s.dataset.n,r=e.r||0;s.className="s"+(r>=n*2?" f":r===n*2-1?" h":"")});
  }
  bar.addEventListener("click",function(ev){
   var b=ev.target.closest("button"),s=ev.target.closest(".s"),e=D.get(slug);
   if(b){var a=b.dataset.a;
    if(a==="w")D.set(slug,{w:e.w?0:D.today(),wl:e.w?e.wl:0});
    else if(a==="l")D.set(slug,{l:e.l?0:1});
    else if(a==="wl")D.set(slug,{wl:e.wl?0:1,w:e.w})}
   else if(s){var n=+s.dataset.n,rect=s.getBoundingClientRect(),half=(ev.clientX-rect.left)<rect.width/2,v=n*2-(half?1:0);
    D.set(slug,{r:e.r===v?0:v,w:e.w||D.today(),wl:0})}
   paint()});
  document.addEventListener("ha-diary",paint);
  new MutationObserver(paint).observe(root,{attributes:true,attributeFilter:["data-l","lang"]});paint()}
 /* ---- bottom tab bar ---- */
 function tabs(){
  var inApp=/\/app\/$|\/app\/index\.html$/.test(location.pathname);
  var standalone=(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone;
  try{if(inApp||/[?&]app=1/.test(location.search))sessionStorage.setItem("ha-app","1")}catch(e){}
  var on=inApp||standalone||/HorrorAestheticApp/.test(navigator.userAgent);try{on=on||sessionStorage.getItem("ha-app")==="1"}catch(e){}
  if(!on||document.querySelector(".ha-tabs"))return;css();
  var items=[["home","home","Главная","Home"],["films","film","Фильмы","Films"],["diary","book","Дневник","Diary"],["lists","list","Списки","Lists"],["me","user","Я","Me"]];
  var nav=document.createElement("nav");nav.className="ha-tabs";nav.setAttribute("aria-label","App");
  nav.innerHTML=items.map(function(t){return '<a href="'+BASE+'app/#'+t[0]+'" data-v="'+t[0]+'">'+IC[t[1]]+'<span data-ru="'+t[2]+'" data-en="'+t[3]+'"></span></a>'}).join("");
  document.body.appendChild(nav);document.body.classList.add("ha-has-tabs");
  function lab(){[].forEach.call(nav.querySelectorAll("span"),function(s){s.textContent=s.dataset[lang()]});var v=(inApp?(location.hash||"#home").slice(1):"").split("/")[0];v=({film:"films",collection:"lists"})[v]||v;[].forEach.call(nav.querySelectorAll("a"),function(a){if(inApp&&a.dataset.v===v)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")})}
  lab();addEventListener("hashchange",lab);new MutationObserver(lab).observe(root,{attributes:true,attributeFilter:["data-l","lang"]})}
 function init(){actions();tabs()}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
