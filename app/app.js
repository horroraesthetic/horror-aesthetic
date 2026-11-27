/* Horror Aesthetic app shell: Home / Films / Diary / Lists / Me. Data: ../data/daily.json, ../feed-reviews.xml, local diary. */
(function(){
 var root=document.documentElement,$=function(s){return document.querySelector(s)},A=$("#app"),D=window.HA_DIARY;
 var GR={},PO={},FD=null,COLS=null,FILMS=[],BY=Object.create(null),recent=[],shown=60,filt={g:"",q:"",dec:"",set:"",sort:"rating"};
 try{if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register("/horror-aesthetic/sw.js").catch(function(){})}catch(e){}
 function lang(){return root.dataset.l==="ru"?"ru":"en"}
 function T(ru,en){return lang()==="ru"?ru:en}
 function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 var HUES=[350,0,12,168,190,262,284,30,320];
 function hue(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return HUES[h%HUES.length]}
 function name(f){return lang()==="ru"&&f[2]?f[2]:f[1]}
 function filmTitle(f){return name(f).replace(/\s*\(\d{4}\)\s*$/,"")}
 function pageTitle(title){return '<h1 class="page-title">'+esc(title)+'</h1>'}
 function posterPath(slug){return PO[slug]?"../img/posters/"+encodeURI(PO[slug]):""}
 function posterImage(path,lazy){return '<img src="'+esc(path)+'" alt="" decoding="async"'+(lazy?' loading="lazy"':'')+'>'}
 function filmInfo(id,entry){
  if(BY[id])return BY[id];
  var f=D.film(id);
  if(f)return [id,f.en,f.ru,f.year||"",f.director,""];
  if(entry?.title)return [id,entry.title,entry.title,entry.year||"","",""];
 }
 function savedFilms(data){
  return Object.keys(data).map(id=>filmInfo(id,data[id])).filter(Boolean);
 }
 function card(f){
  var slug=f[0],e=D.get(slug),po=posterPath(slug),title=esc(filmTitle(f)),icons=window.HA_ICONS,marks="";
  function mark(icon,label){return '<span role="img" aria-label="'+esc(label)+'">'+icons[icon]+'</span>'}
  if(e.w)marks+=mark("eye",T("Просмотрено","Watched"));
  if(e.l)marks+=mark("heart",T("Нравится","Liked"));
  if(D.status(e)==="want")marks+=mark("clock",T("Хочу","Watchlist"));
  return '<a class="pc" href="#film/'+esc(slug)+'"><span class="pc-cover'+(po?' has':'')+'" style="--h:'+hue(slug)+'">'+
   (po?posterImage(po,true):'<span class="pc-fallback" aria-hidden="true">'+title+'</span>')+
   (f[5]?'<span class="pr">★ '+esc(f[5])+'</span>':'')+
   (marks?'<span class="pm">'+marks+'</span>':'')+
   '</span><span class="pt">'+title+'</span><span class="py">'+esc(f[3])+'</span></a>';
 }
 function cards(list){return list.map(card).join("")}
 var COLL=[["haunted-houses","家","Проклятые дома","Haunted houses"],["cursed-objects","呪","Проклятые вещи","Cursed objects"],["forests-wilderness","森","Леса и глушь","Forests and wilderness"],["ghost-children","子","Дети и призраки","Children and ghosts"],["screens-and-tapes","画","Экраны и плёнки","Screens and tapes"],["folk-horror","村","Фолк-хоррор","Folk horror"],["water","水","Вода и глубина","Water and depth"],["mirrors-and-doubles","鏡","Зеркала и двойники","Mirrors and doubles"],["possession","憑","Одержимость","Possession"],["j-horror","日本","Японский хоррор","J-Horror and Japan"]];
 function pickTonight(){var day=Math.floor(Date.now()/864e5);return FILMS[(Math.imul(day,2654435761)>>>0)%FILMS.length]}

 function hist(){try{return JSON.parse(localStorage.getItem("ha-hist")||"[]")}catch(e){return[]}}
 function pushHist(sl){try{var h=hist().filter(function(x){return x!==sl});h.unshift(sl);localStorage.setItem("ha-hist",JSON.stringify(h.slice(0,24)))}catch(e){}}
 function loadFD(){return FD?Promise.resolve(FD):fetch("../data/films.json").then(function(r){return r.json()}).then(function(j){FD=j;return j})}
 function loadCols(){return COLS?Promise.resolve(COLS):fetch("../data/collections.json").then(function(r){return r.json()}).then(function(j){COLS=j;return j})}
 function stars(r){
  var out="";
  for(var i=1;i<=5;i++){
   out+='<button type="button" class="s'+(r>=i*2?" f":r===i*2-1?" h":"")+'" data-n="'+i+'" aria-label="'+esc(T("Поставить ","Rate ")+i+" / 5")+'" aria-pressed="'+(r===i*2)+'"><span aria-hidden="true">★<i>★</i></span></button>';
  }
  return out;
 }
 function actHTML(sl){var e=D.get(sl),I=window.HA_ICONS;return '<div class="fa"><button type="button" data-fa="w" aria-pressed="'+!!e.w+'">'+I.eye+'<span>'+(e.w?T("Просмотрено","Watched"):T("Смотрел","Watched"))+'</span></button><button type="button" data-fa="l" aria-pressed="'+!!e.l+'">'+I.heart+'<span>'+T("Нравится","Like")+'</span></button><button type="button" data-fa="wl" aria-pressed="'+(D.status(e)==="want")+'">'+I.clock+'<span>'+T("Хочу","Watchlist")+'</span></button></div><div class="fr" role="group" aria-label="'+T("Ваша оценка","Your rating")+'" data-sl="'+esc(sl)+'">'+stars(e.r||0)+'</div>'}

 var MOODS=[["classic","Классика до 1980","Classics before 1980"],["new","С 2015 года","2015 and later"],["top","Лучшее (4.5+)","Top rated (4.5+)"],["j-horror","Японский хоррор","Japanese horror"],["haunted-houses","Дома с призраками","Haunted houses"],["folk-horror","Фолк-хоррор","Folk horror"],["ghost-children","Дети и призраки","Ghost children"],["wl","Из «Хочу»","From my watchlist"]];
 function pick(key){
  var d=D.all(),seen=function(f){return d[f[0]]&&d[f[0]].w};
  function go(pool){var u=pool.filter(function(f){return !seen(f)});if(!u.length)u=pool;if(!u.length){location.replace("#home");alert(T("Тут пока пусто","Nothing here yet"));return}var r=u[Math.floor(Math.random()*u.length)];location.replace("#film/"+r[0])}
  if(key==="classic")go(FILMS.filter(function(f){return +f[3]<1980}));
  else if(key==="new")go(FILMS.filter(function(f){return +f[3]>=2015}));
  else if(key==="top")go(FILMS.filter(function(f){return +f[5]>=4.5}));
  else if(key==="wl")go(savedFilms(d).filter(function(f){return D.status(d[f[0]])==="want"}));
  else loadCols().then(function(J){go((J[key]||[]).map(function(x){return BY[x]}).filter(Boolean))})}

 function loadYokai(){
  if(!document.getElementById("yk-css")){var l=document.createElement("link");l.id="yk-css";l.rel="stylesheet";l.href="../yokai.css?v=4";document.head.appendChild(l)}
  function add(src,cb){var e=document.createElement("script");e.src=src;e.onload=cb;document.head.appendChild(e)}
  function run(){add("../yokai.js?v=7")}
  if(window.YK_HD)run();else add("../yokai-hd.js?v=7",run)}

 function offStatus(){var t="";try{t=localStorage.getItem("ha-off")||""}catch(e){}return t?T("Скачано: ","Downloaded: ")+t:T("Рецензии, постеры и подборки будут открываться без сети.","Reviews, posters and collections will open without a network.")}
 function downloadOffline(btn){
  if(!window.caches){alert(T("Браузер не поддерживает","Not supported"));return}
  var urls=["../app/","../folklore/","../creepypasta/","../data/daily.json","../data/films.json","../data/collections.json","../data/posters.json","../data/gore.json"];
  FILMS.forEach(function(f){urls.push("../reviews/"+f[0]+".html")});Object.keys(PO).forEach(function(k){urls.push("../img/posters/"+encodeURI(PO[k]))});
  urls=urls.map(function(u){return new URL(u,location.href).href});
  var i=0,done=0,fail=0,st=$("#offs");btn.disabled=true;
  caches.open("ha-offline").then(function(c){
   function next(){if(i>=urls.length)return Promise.resolve();var u=urls[i++];return c.match(u).then(function(h){return h||c.add(u)}).catch(function(){fail++}).then(function(){done++;if(st)st.textContent=T("Скачано ","Saved ")+done+" / "+urls.length;return next()})}
   var w=[];for(var k=0;k<6;k++)w.push(next());return Promise.all(w)}).then(function(){
   var d=new Date().toLocaleDateString(lang()==="ru"?"ru-RU":"en-GB");try{localStorage.setItem("ha-off",d)}catch(e){}
   btn.disabled=false;if(st)st.textContent=(fail?T("Готово, не скачалось: ","Done, failed: ")+fail+" · ":"")+offStatus()})}
 function wrapped(){
  var d=D.all(),yr=String(new Date().getFullYear()),seen=FILMS.filter(function(f){var e=d[f[0]];return e&&e.w&&String(e.w).slice(0,4)===yr}),label=yr;
  if(!seen.length){seen=savedFilms(d).filter(function(f){return d[f[0]].w});label=T("ВСЁ ВРЕМЯ","ALL TIME")}
  if(!seen.length){alert(T("Отметьте хотя бы один просмотренный фильм","Mark at least one film as watched"));return}
  var rated=seen.filter(function(f){return d[f[0]].r}),avg=rated.length?rated.reduce(function(a,f){return a+d[f[0]].r},0)/rated.length/2:0;
  var dir={},dec={};seen.forEach(function(f){if(f[4])dir[f[4]]=(dir[f[4]]||0)+1;var k=Math.floor(f[3]/10)*10+"s";dec[k]=(dec[k]||0)+1});
  function top(o){var k=Object.keys(o).sort(function(a,b){return o[b]-o[a]})[0];return k||"—"}
  var best=seen.slice().sort(function(a,b){return (d[b[0]].r||0)-(d[a[0]].r||0)||(b[5]-a[5])}).slice(0,3);
  var W=1080,H=1920,cv=document.createElement("canvas");cv.width=W;cv.height=H;var x=cv.getContext("2d");
  var g=x.createLinearGradient(0,0,0,H);g.addColorStop(0,"#1a0508");g.addColorStop(.55,"#07090d");g.addColorStop(1,"#000");x.fillStyle=g;x.fillRect(0,0,W,H);
  x.fillStyle="rgba(255,60,70,.10)";x.beginPath();x.arc(820,330,260,0,7);x.fill();
  function tx(t,px,py,sz,col,al,wt){x.font=(wt||"900")+" "+sz+"px Impact,'Arial Black',Arial,sans-serif";x.fillStyle=col;x.textAlign=al||"left";x.fillText(t,px,py)}
  function fit(t,max){return t.length>max?t.slice(0,max-1)+"…":t}
  tx("HORROR AESTHETIC",80,120,40,"#ff5a64");tx(T("МОИ ИТОГИ","MY WRAPPED"),80,260,120,"#f1e7df");tx(label,80,360,96,"#ff5a64");
  tx(String(seen.length),80,640,300,"#f1e7df");tx(T("фильмов просмотрено","films watched"),80,720,52,"#b9a8a2","left","700");
  tx(avg?avg.toFixed(1)+" ★":"—",80,880,110,"#ff8d93");tx(T("средняя оценка","average rating"),80,940,44,"#b9a8a2","left","700");
  tx(fit(top(dir),22),80,1090,64,"#f1e7df");tx(T("любимый режиссёр","favourite director"),80,1145,40,"#b9a8a2","left","700");
  tx(top(dec),80,1280,64,"#f1e7df");tx(T("любимое десятилетие","favourite decade"),80,1335,40,"#b9a8a2","left","700");
  tx(T("ТОП-3","TOP 3"),80,1450,48,"#ff5a64");
  var jobs=best.map(function(f,i){return new Promise(function(res){var px=80+i*320,py=1480,w=290,h=330;
   x.fillStyle="hsl("+hue(f[0])+",45%,18%)";x.fillRect(px,py,w,h);
   function lbl(){x.fillStyle="rgba(0,0,0,.6)";x.fillRect(px,py+h-70,w,70);tx(fit(name(f).replace(/\s*\(\d{4}\)\s*$/,""),16),px+w/2,py+h-26,28,"#f1e7df","center");res()}
   if(PO[f[0]]){var im=new Image();im.onload=function(){var r=Math.max(w/im.width,h/im.height),dw=im.width*r,dh=im.height*r;x.save();x.beginPath();x.rect(px,py,w,h);x.clip();x.drawImage(im,px+(w-dw)/2,py+(h-dh)/2,dw,dh);x.restore();lbl()};im.onerror=lbl;im.src="../img/posters/"+encodeURI(PO[f[0]])}else lbl()})});
  Promise.all(jobs).then(function(){
   tx("horroraesthetic.github.io/horror-aesthetic",W/2,1880,34,"#8a7b76","center","700");
   var url=cv.toDataURL("image/png");
   var o=document.createElement("div");o.id="wrapview";o.innerHTML='<img alt="" src="'+url+'"><div><button class="btn" id="wshare">'+T("Поделиться","Share")+'</button><button class="btn" id="wclose">'+T("Закрыть","Close")+'</button></div><p>'+T("Или зажмите картинку, чтобы сохранить","Or press and hold the image to save")+'</p>';
   document.body.appendChild(o);
   o.querySelector("#wclose").onclick=function(){o.remove()};
   o.querySelector("#wshare").onclick=function(){cv.toBlob(function(b){var fl=new File([b],"horror-aesthetic-wrapped.png",{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[fl]}))navigator.share({files:[fl],title:"Horror Aesthetic"}).catch(function(){});else{var a=document.createElement("a");a.href=url;a.download="horror-aesthetic-wrapped.png";a.click()}})}})}
 /* ---------- views ---------- */
 function vHome(){
  var f=pickTonight(),d=D.all(),wl=savedFilms(d).filter(function(x){return D.status(d[x[0]])==="want"}),top=FILMS.filter(function(x){return +x[5]>=4.5}).sort(function(a,b){return b[5]-a[5]||a[3]-b[3]}).slice(0,14);
  var rec=recent.map(function(s){return BY[s]}).filter(Boolean).slice(0,14);
  return '<section class="hero"><div class="hero-content"><span class="hero-tag">EXTREME J-HORROR</span>'+
   '<div class="hero-copy"><p class="eyebrow">'+T("Фильм ночи","Film of the night")+'</p><h1>'+esc(filmTitle(f))+'</h1>'+
   '<p class="hero-meta">'+esc(f[3])+(f[4]?" · "+esc(f[4]):"")+(f[5]?" · ★ "+esc(f[5]):"")+'</p></div>'+
   '<div class="hero-actions"><a class="go primary" href="#film/'+esc(f[0])+'">'+T("Открыть фильм","Open film")+' <span class="app-arrow" aria-hidden="true"></span></a><a class="go" href="#random">'+T("Случайный","Random")+' <span aria-hidden="true">↻</span></a></div></div></section>'+
  '<h2 class="sh">'+T("Что посмотреть сегодня?","What to watch tonight?")+'</h2><div class="chips moods">'+MOODS.map(function(m){return '<a href="#pick/'+m[0]+'">'+esc(T(m[1],m[2]))+'</a>'}).join("")+'</div>'+
  (rec.length?'<h2 class="sh">'+T("Новые рецензии","New reviews")+'<a href="#films">'+T("все","all")+'</a></h2><div class="row">'+cards(rec)+'</div>':'')+
  (wl.length?'<h2 class="sh">'+T("Хочу посмотреть","Your watchlist")+'<a href="#lists">'+T("все","all")+'</a></h2><div class="row">'+cards(wl.slice(0,14))+'</div>':'')+
  (function(){var h=hist().map(function(x){return filmInfo(x,d[x])}).filter(Boolean);return h.length?'<h2 class="sh">'+T("Недавно открывали","Recently opened")+'</h2><div class="row">'+cards(h.slice(0,14))+'</div>':''})()+
  '<h2 class="sh">'+T("Лучшее в архиве","Top rated")+'</h2><div class="row">'+cards(top)+'</div>'+
  '<h2 class="sh">'+T("Подборки","Collections")+'<a href="#lists">'+T("все","all")+'</a></h2><div class="chips">'+COLL.slice(0,6).map(function(c){return '<button type="button" onclick="location.hash=\'#collection/'+c[0]+'\'">'+c[1]+" "+esc(T(c[2],c[3]))+'</button>'}).join("")+'</div>'+
  '<h2 class="sh">'+T("Крипипасты и журнал","Stories and magazine")+'</h2><div class="lst"><a href="../creepypasta/"><span>怖い話</span><b>'+T("Крипипасты","Creepypastas")+'</b></a><a href="../magazine/"><span>№1</span><b>'+T("Журнал","The journal")+'</b></a><a href="#yokai"><span>妖怪</span><b>'+T("Ёкаи","Yōkai")+'</b></a></div>'}
 function filtered(){
  var d=D.all(),q=filt.q.trim().toLowerCase(),L=FILMS.filter(function(f){
   if(q&&(f[1]+" "+f[2]+" "+f[4]).toLowerCase().indexOf(q)<0)return false;
   if(filt.dec){var y=+f[3];if(!(y>=+filt.dec&&y<+filt.dec+10))return false}
   var gv=GR[f[0]];if(filt.g==='low'&&!(gv<=2))return false;if(filt.g==='high'&&!(gv>=4))return false;
   var e=d[f[0]]||{};if(filt.set==="unseen"&&e.w)return false;if(filt.set==="seen"&&!e.w)return false;if(filt.set==="liked"&&!e.l)return false;if(filt.set==="wl"&&D.status(e)!=="want")return false;return true});
  L.sort(function(a,b){return filt.sort==="year"?a[3]-b[3]:filt.sort==="az"?a[1].localeCompare(b[1]):(b[5]-a[5])||(a[3]-b[3])});return L}
 function vFilms(){
  var decs=[["","Все годы","Any year"]].concat(["1950","1960","1970","1980","1990","2000","2010","2020"].map(function(x){return [x,x+"-е",x+"s"]}));
  var sets=[["","Все","All"],["unseen","Не смотрел","Unseen"],["seen","Смотрел","Seen"],["liked","Нравится","Liked"],["wl","Хочу","Watchlist"]];
  var srt=[["rating","По оценке","By rating"],["year","По году","By year"],["az","По названию","By title"]];
  var gore=[["","Любая","Any"],["low","Без жести","Low gore"],["high","Жёстко","Extreme"]];
  function select(key,label,options){
   return '<label>'+esc(label)+'<select data-filter="'+key+'">'+options.map(function(o){
    return '<option value="'+o[0]+'"'+(filt[key]===o[0]?' selected':'')+'>'+esc(T(o[1],o[2]))+'</option>';
   }).join("")+'</select></label>';
  }
  var activeFilters=filt.dec||filt.g||filt.sort!=="rating";
  var searchHint=T("Название или режиссёр","Title or director");
  return pageTitle(T("Каталог фильмов","Film archive"))+'<div class="archive-controls"><label class="search-field">'+
   '<input class="search" id="q" type="search" aria-label="'+searchHint+'" placeholder="'+searchHint+'" value="'+esc(filt.q)+'"></label>'+
   '<div class="chips film-sets">'+sets.map(function(s){return '<button type="button" data-set="'+s[0]+'" aria-pressed="'+(filt.set===s[0])+'">'+T(s[1],s[2])+'</button>'}).join("")+'</div>'+
   '<details class="film-filters"'+(activeFilters?' open':'')+'><summary>'+T("Фильтры и сортировка","Filters and sorting")+'</summary>'+
   '<div class="filter-fields">'+select("dec",T("Десятилетие","Decade"),decs)+select("g",T("Жестокость","Gore"),gore)+
   select("sort",T("Сортировка","Sort"),srt)+'</div></details></div>'+
   '<p id="film-count" class="film-count"></p><div id="fg"></div>';
 }
 function fillFilms(){
  var g=$("#fg");if(!g)return;
  var L=filtered();
  $("#film-count").textContent=T("Найдено: ","Results: ")+L.length;
  g.innerHTML=L.length?'<div class="grid">'+cards(L.slice(0,shown))+'</div>'+(L.length>shown?'<button class="more" type="button" id="more">'+T("Показать ещё","Show more")+" ("+(L.length-shown)+')</button>':''):'<div class="empty">'+T("Ничего не найдено","Nothing found")+'</div>';
 }
 function vDiary(){
  var d=D.all(),rows=savedFilms(d).filter(function(f){return d[f[0]].w}).sort(function(a,b){return String(d[b[0]].w).localeCompare(String(d[a[0]].w))||(d[b[0]].t||0)-(d[a[0]].t||0)});
  var out=pageTitle(T("Дневник","Diary"));
  if(!rows.length)return out+'<div class="empty diary-empty">'+window.HA_ICONS.book+
   '<h2>'+T("Дневник пока пуст","Your diary is empty")+'</h2><p>'+T("Откройте фильм и нажмите «Смотрел» или поставьте оценку.","Open a film and tap Watched or give it a rating.")+'</p>'+
   '<a class="go primary" href="#films">'+T("К фильмам","Browse films")+' <span class="app-arrow" aria-hidden="true"></span></a></div>';
  var mon="",MN={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};
  rows.forEach(function(f){
   var slug=f[0],e=d[slug],po=posterPath(slug),ds=typeof e.w==="string"?e.w:"",m=ds.slice(0,7)||"undated";
   if(m!==mon){mon=m;out+='<h2 class="mon">'+(ds?(MN[lang()][+ds.slice(5,7)-1]||"")+" "+esc(ds.slice(0,4)):T("Без даты","Undated"))+'</h2>'}
   out+='<a class="entry" href="#film/'+esc(slug)+'"><span class="entry-cover" style="--h:'+hue(slug)+'">'+(po?posterImage(po,true):"")+'</span>'+
    '<div><b>'+esc(filmTitle(f))+'</b><small>'+esc(f[3])+' <span class="st">'+D.stars(e.r)+'</span> '+(e.l?"♥":"")+'</small></div>'+
    (ds?'<time>'+esc(ds.slice(8,10))+"."+esc(ds.slice(5,7))+'</time>':'')+'</a>';
  });
  return out;
 }
 function vLists(){
  var d=D.all(),wl=savedFilms(d).filter(function(f){return D.status(d[f[0]])==="want"}),lk=savedFilms(d).filter(function(f){return d[f[0]].l});
  return pageTitle(T("Списки","Lists"))+'<h2 class="sh"><span>'+T("Хочу посмотреть","Watchlist")+' <small>'+wl.length+'</small></span>'+(wl.length>1?'<a href="#pick/wl">'+T("Выбрать за меня ↻","Pick for me ↻")+'</a>':'')+'</h2>'+(wl.length?'<div class="grid">'+cards(wl)+'</div>':'<div class="empty">'+T("Нажмите «Хочу» на странице фильма.","Tap Watchlist on a film page.")+'</div>')+
  '<h2 class="sh"><span>'+T("Нравится","Liked")+' <small>'+lk.length+'</small></span></h2>'+(lk.length?'<div class="grid">'+cards(lk)+'</div>':'<div class="empty">'+T("Нажмите ♥ на странице фильма.","Tap ♥ on a film page.")+'</div>')+
  '<h2 class="sh">'+T("Подборки","Collections")+'</h2><div class="lst collections">'+COLL.map(function(c){return '<a class="cv" style="--cv:url(cov/'+c[0]+'.webp)" href="#collection/'+c[0]+'"><span aria-hidden="true">'+c[1]+'</span><b>'+esc(T(c[2],c[3]))+'</b></a>'}).join("")+'</div>'}
 function vMe(){
  var d=D.all(),seen=savedFilms(d).filter(function(f){return d[f[0]].w}),n=seen.length,rated=seen.filter(function(f){return d[f[0]].r}),avg=rated.length?rated.reduce(function(s,f){return s+d[f[0]].r},0)/rated.length/2:0;
  var likes=savedFilms(d).filter(function(f){return d[f[0]].l}).length,wl=savedFilms(d).filter(function(f){return D.status(d[f[0]])==="want"}).length;
  var L=[[0,"Новичок","Newcomer"],[5,"Ночной зритель","Night viewer"],[15,"Охотник за страхом","Fear hunter"],[40,"Хранитель кассет","Tape keeper"],[100,"Хранитель архива","Archive keeper"]],lv=0;L.forEach(function(x,i){if(n>=x[0])lv=i});
  var next=L[lv+1],pct=next?Math.min(100,Math.round((n-L[lv][0])/(next[0]-L[lv][0])*100)):100;
  var hist=[0,0,0,0,0,0,0,0,0,0];rated.forEach(function(f){hist[d[f[0]].r-1]++});var mx=Math.max.apply(null,hist)||1;
  var dir={},dec={};seen.forEach(function(f){if(f[4])dir[f[4]]=(dir[f[4]]||0)+1;var k=Math.floor(f[3]/10)*10+"s";dec[k]=(dec[k]||0)+1});
  function top(o){var k=Object.keys(o).sort(function(a,b){return o[b]-o[a]})[0];return k?k:"—"}
  return pageTitle(T("Профиль","Profile"))+'<div class="lvl viewer-level"><p class="eyebrow">'+T("Ваш уровень","Your level")+'</p><b>'+esc(T(L[lv][1],L[lv][2]))+'</b><small>'+(next?T("До «"+next[1]+"»: ещё "+(next[0]-n),"To "+next[2]+": "+(next[0]-n)+" more"):T("Максимальный уровень","Top level"))+'</small><div class="bar"><i style="width:'+pct+'%"></i></div></div>'+
  '<a class="profile-link" href="../#badges"><span>'+T("Значки и серия","Badges and streak")+'</span><span class="app-arrow" aria-hidden="true"></span></a>'+
  '<div class="stats"><div class="stat"><b>'+n+'</b><small>'+T("Просмотрено","Watched")+'</small></div><div class="stat"><b>'+(avg?avg.toFixed(1):"—")+'</b><small>'+T("Средняя оценка","Average rating")+'</small></div><div class="stat"><b>'+likes+'</b><small>'+T("Нравится","Liked")+'</small></div><div class="stat"><b>'+wl+'</b><small>'+T("Хочу","Watchlist")+'</small></div></div>'+
  '<h2 class="sh">'+T("Оценки","Ratings")+'</h2><div class="hist">'+hist.map(function(c,i){return '<div style="--value:'+Math.round(c/mx*100)+'%" title="'+((i+1)/2)+' · '+c+'"><span>'+((i+1)/2)+'</span></div>'}).join("")+'</div>'+
  '<div class="stats stats-text"><div class="stat"><b>'+esc(top(dec))+'</b><small>'+T("Любимое десятилетие","Favourite decade")+'</small></div><div class="stat"><b>'+esc(top(dir))+'</b><small>'+T("Любимый режиссёр","Favourite director")+'</small></div></div>'+
  (/HorrorAestheticApp/.test(navigator.userAgent)?'':'<h2 class="sh">'+T("Приложение","App")+'</h2><a class="btn" href="https://github.com/horroraesthetic/horror-aesthetic/releases/download/app-latest/horror-aesthetic.apk">'+T("Скачать для Android (APK)","Download for Android (APK)")+'</a><p style="color:var(--dim);font-size:14px">'+T("Откройте файл, разрешите установку из этого источника. Можно отправлять друзьям.","Open the file and allow installing from this source. You can share it with friends.")+'</p>')+'<h2 class="sh">'+T("Итоги","Wrapped")+'</h2><button class="btn" id="wrap">'+T("Создать мои итоги (картинка)","Create my wrapped (image)")+'</button>'+
  '<h2 class="sh">'+T("Без интернета","Offline")+'</h2><button class="btn" id="off">'+T("Скачать каталог для офлайна","Download the catalogue for offline")+'</button><p id="offs" style="color:var(--dim);font-size:14px">'+offStatus()+'</p>'+
  '<h2 class="sh">'+T("Данные","Data")+'</h2><button class="btn" id="exp">'+T("Скопировать резервную копию","Copy a backup")+'</button><button class="btn" id="imp">'+T("Восстановить из копии","Restore from a backup")+'</button><p style="color:var(--dim);font-size:14px">'+T("Дневник хранится только на этом телефоне. Копия нужна, чтобы перенести его на другое устройство.","The diary lives only on this phone. A backup lets you move it to another device.")+'</p>'}

 function vFilm(sl){
  var record=D.get(sl),f=filmInfo(sl,record);if(!f)return '<div class="empty">'+T("Фильм не найден","Film not found")+'</div>';pushHist(sl);
  var title=filmTitle(f),po=posterPath(sl);
  return '<div class="fh" style="--h:'+hue(sl)+'">'+
   (po?'<img class="film-backdrop" src="'+esc(po)+'" alt="" decoding="async">':"")+
   '<div class="fp'+(po?' has':'')+'">'+(po?posterImage(po,false):'<span class="pc-fallback" aria-hidden="true">'+esc(title)+'</span>')+'</div>'+
   '<div class="ft">'+(f[5]?'<div class="rt">★ '+esc(f[5])+' / 5</div>':"")+'<h1>'+esc(title)+'</h1>'+
   '<small>'+esc(f[3])+(f[4]?" · "+esc(f[4]):"")+'</small>'+(lang()==="ru"&&f[1]!==title?'<small>'+esc(f[1])+'</small>':"")+
   '</div></div><div id="fact">'+actHTML(sl)+'</div>'+
   (record.note?'<p class="syn">'+esc(record.note)+'</p>':'')+'<div id="fd"></div>'}
 function fillFilm(sl){
  var el=$("#fd");
  if(!el)return;
  if(!BY[sl]){
   var film=D.film(sl);
   if(film)el.innerHTML='<a class="btn" href="../?film='+encodeURIComponent(film.id)+'#catalog">'+T("Фильм в каталоге","Film in the catalogue")+'</a>';
   return;
  }
  loadFD().then(function(J){var x=J[sl],f=BY[sl];if(!x||!el.isConnected||!f)return;
   var same=FILMS.filter(function(o){return o[0]!==sl&&o[4]&&o[4]===f[4]}).slice(0,12);
   if(same.length<6){var dc=Math.floor(f[3]/10);same=same.concat(FILMS.filter(function(o){return o[0]!==sl&&Math.floor(o[3]/10)===dc&&same.indexOf(o)<0}).sort(function(a,b){return b[5]-a[5]}).slice(0,12-same.length))}
   el.innerHTML='<p class="syn">'+esc(T(x[1],x[0]))+'</p>'+(x[2]?'<h2 class="sh">'+T("Из рецензии","From the review")+'</h2><p class="ex">'+esc(T(x[3],x[2]))+'</p>':'')+(x[4]>=0?'<p class="gore">'+T("Жестокость","Gore")+': '+"●".repeat(x[4])+"○".repeat(5-x[4])+' '+x[4]+' / 5</p>':'')+
   '<a class="btn" href="../reviews/'+esc(sl)+'.html">'+T("Читать полную рецензию","Read the full review")+'</a><button class="btn" type="button" id="share" data-sl="'+esc(sl)+'">'+T("Поделиться","Share")+'</button>'+
   (same.length?'<h2 class="sh">'+(f[4]?T("Ещё это","More from this"):T("Похожие","Similar"))+'</h2><div class="row">'+cards(same)+'</div>':'')})}
 function vCollection(id){
  var c=COLL.filter(function(x){return x[0]===id})[0];if(!c)return '<div class="empty">'+T("Подборка не найдена","Collection not found")+'</div>';
  return '<div class="lvl cv" style="--cv:url(cov/'+c[0]+'.webp)"><small aria-hidden="true">'+c[1]+'</small><h1>'+esc(T(c[2],c[3]))+'</h1></div><div id="cg"><div class="empty">…</div></div>'}
 function fillCollection(id){
  var grid=$("#cg");
  if(!grid)return;
  loadCols().then(function(data){
   if(!grid.isConnected)return;
   var films=(data[id]||[]).map(function(slug){return BY[slug]}).filter(Boolean);
   grid.innerHTML=films.length?'<div class="grid">'+cards(films)+'</div>':'<div class="empty">'+T("Пока пусто","Empty for now")+'</div>';
  });
 }
 /* ---------- router ---------- */
 function route(){
  if(!FILMS.length)return;
  var parts=(location.hash||"#home").slice(1).split("/"),v=parts[0],arg=parts[1]||"";
  if(v==="random"){var r=FILMS[Math.floor(Math.random()*FILMS.length)];location.replace("#film/"+r[0]);return}
  if(v==="pick"){pick(arg);return}
  var main={home:1,films:1,diary:1,lists:1,me:1};var sub=(v==="film"||v==="collection"||v==="yokai");if(!main[v]&&!sub)v="home";
  $("#ab-b").hidden=!sub;
  $("#ab-b").setAttribute("aria-label",T("Назад","Back"));
  $("#ab-l").textContent=lang()==="ru"?"EN":"RU";
  $("#ab-l").setAttribute("aria-label",T("Switch to English","Переключить на русский"));
  if(v==="film"){A.innerHTML=vFilm(arg);fillFilm(arg)}
  else if(v==="collection"){A.innerHTML=vCollection(arg);fillCollection(arg)}
  else if(v==="yokai"){A.innerHTML=pageTitle(T("Ёкаи","Yōkai"))+'<div id="yokai-gallery"></div><a class="btn" href="../folklore/">'+T("Все легенды на сайте","All legends on the site")+'</a>';loadYokai()}
  else A.innerHTML=({home:vHome,films:vFilms,diary:vDiary,lists:vLists,me:vMe})[v]();
  if(v==="films")fillFilms();
  window.scrollTo(0,0)}
 A.addEventListener("input",function(e){if(e.target.id==="q"){filt.q=e.target.value;shown=60;fillFilms()}});
 A.addEventListener("change",function(e){
  var key=e.target.dataset.filter;
  if(!key)return;
  filt[key]=e.target.value;
  if(key!=="sort")shown=60;
  fillFilms();
 });
 A.addEventListener("click",function(e){
  var st=e.target.closest(".fr .s");
  if(st){
   var fr=st.parentNode,sl=fr.dataset.sl,en=D.get(sl),n=+st.dataset.n,rc=st.getBoundingClientRect();
   var half=e.detail!==0&&e.clientX-rc.left<rc.width/2,v=n*2-(half?1:0);
   D.set(sl,{r:en.r===v?0:v,w:en.w||D.today(),wl:0});
   $("#fact").innerHTML=actHTML(sl);
   if(e.detail===0)$('#fact [data-n="'+n+'"]').focus();
   return;
  }
  var b=e.target.closest("button");if(!b)return;
  if(b.dataset.fa){
   var sl2=location.hash.split("/")[1],a=b.dataset.fa;
   if(a==="l")D.set(sl2,{l:D.get(sl2).l?0:1});
   else D.toggleStatus(sl2,a==="w"?"seen":"want");
   $("#fact").innerHTML=actHTML(sl2);
   if(e.detail===0)$('#fact [data-fa="'+a+'"]').focus();
   return;
  }
  if(b.id==="wrap"){wrapped();return}
  if(b.id==="off"){downloadOffline(b);return}
  if(b.id==="share"){var sl3=b.dataset.sl,url="https://horroraesthetic.github.io/horror-aesthetic/reviews/"+sl3+".html",ttl=(BY[sl3]||[])[1]||"Horror Aesthetic";if(navigator.share)navigator.share({title:ttl,url:url}).catch(function(){});else if(navigator.clipboard)navigator.clipboard.writeText(url).then(function(){alert(T("Ссылка скопирована","Link copied"))});return}
  if(b.dataset.set!==undefined){
   filt.set=b.dataset.set;shown=60;
   A.querySelectorAll("[data-set]").forEach(function(button){button.setAttribute("aria-pressed",String(button===b))});
   fillFilms();
  }
  else if(b.id==="more"){shown+=60;fillFilms()}
  else if(b.id==="exp"){var s=JSON.stringify(D.all());(navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).then(function(){alert(T("Копия в буфере обмена. Сохраните её в заметках.","Copied to the clipboard. Save it in your notes."))},function(){prompt(T("Скопируйте текст:","Copy the text:"),s)})}
  else if(b.id==="imp"){var t=prompt(T("Вставьте копию:","Paste your backup:"));if(!t)return;try{if(!D.replace(JSON.parse(t)))throw new Error("Invalid diary backup")}catch(x){alert(T("Не получилось прочитать копию.","Could not read the backup."))}}});
 $("#ab-l").addEventListener("click",function(){var n=lang()==="ru"?"en":"ru";root.dataset.l=n;root.lang=n;try{localStorage.setItem("ha-lang",n)}catch(e){}route()});
 addEventListener("hashchange",route);
 document.addEventListener("ha-diary",function(event){
  var v=(location.hash||"#home").slice(1).split("/")[0];
  if(v==="films"){fillFilms();return}
  if((v!=="film"||!event.detail)&&!A.querySelector("input"))route();
 });
 $("#ab-b").addEventListener("click",function(){if(history.length>1)history.back();else location.hash="#home"});
 /* ---------- data ---------- */
 Promise.all([fetch("../data/daily.json").then(function(r){return r.json()}),fetch("../feed-reviews.xml").then(function(r){return r.text()}).catch(function(){return""}),fetch("../data/posters.json").then(function(r){return r.json()}).catch(function(){return{}}),fetch("../data/gore.json").then(function(r){return r.json()}).catch(function(){return{}}),D.ready()]).then(function(r){
  PO=r[2]||{};GR=r[3]||{};FILMS=r[0];FILMS.forEach(function(f){BY[f[0]]=f});
  var m,re=/reviews\/([a-z0-9_-]+)\.html<\/link>/gi;while((m=re.exec(r[1])))recent.push(m[1]);
  route()}).catch(function(){A.innerHTML='<div class="empty">'+T("Нет соединения. Откройте приложение с интернетом хотя бы раз.","No connection. Open the app online at least once.")+'</div>'});
})();
