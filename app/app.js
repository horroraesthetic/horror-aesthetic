/* Horror Aesthetic app shell: Home / Films / Diary / Lists / Me. Data: ../data/daily.json, ../feed-reviews.xml, local diary. */
(function(){
 var root=document.documentElement,$=function(s){return document.querySelector(s)},A=$("#app"),D=window.HA_DIARY;
 var GR={},PO={},FD=null,COLS=null,FILMS=[],BY={},recent=[],shown=60,filt={g:"",q:"",dec:"",set:"",sort:"rating"};
 function lang(){return root.dataset.l==="ru"?"ru":"en"}
 function T(ru,en){return lang()==="ru"?ru:en}
 function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 var HUES=[350,0,12,168,190,262,284,30,320];
 function hue(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return HUES[h%HUES.length]}
 function name(f){return lang()==="ru"&&f[2]?f[2]:f[1]}
 function card(f){var e=D.get(f[0]),m="";if(e.w)m+="<u>👁</u>";if(e.l)m+="<u>♥</u>";if(e.wl)m+="<u>⏱</u>";
  var po=PO[f[0]],mv=0;for(var i=0;i<f[0].length;i++)mv=(mv*7+f[0].charCodeAt(i))%5;
  return '<a class="pc'+(po?' has':' m'+mv)+'" href="#film/'+esc(f[0])+'" style="--h:'+hue(f[0])+'">'+(po?'<img src="../img/posters/'+encodeURI(po)+'" alt="'+esc(name(f))+'" loading="lazy" decoding="async">':'<span class="pt">'+esc(name(f).replace(/\s*\(\d{4}\)\s*$/,""))+'</span>')+'<span class="pm">'+m+'</span><span class="py">'+esc(f[3])+'</span>'+(f[5]?'<span class="pr">★'+esc(f[5])+'</span>':'')+'</a>'}
 function cards(list){return list.map(card).join("")}
 var HOME_TITLES={home:["Главная","Home"],films:["Фильмы","Films"],diary:["Дневник","Diary"],lists:["Списки","Lists"],me:["Я","Me"]};
 var COLL=[["haunted-houses","家","Проклятые дома","Haunted houses"],["cursed-objects","呪","Проклятые вещи","Cursed objects"],["forests-wilderness","森","Леса и глушь","Forests and wilderness"],["ghost-children","子","Дети и призраки","Children and ghosts"],["screens-and-tapes","画","Экраны и плёнки","Screens and tapes"],["folk-horror","村","Фолк-хоррор","Folk horror"],["water","水","Вода и глубина","Water and depth"],["mirrors-and-doubles","鏡","Зеркала и двойники","Mirrors and doubles"],["possession","憑","Одержимость","Possession"],["j-horror","日本","Японский хоррор","J-Horror and Japan"]];
 function pickTonight(){var day=Math.floor(Date.now()/864e5);return FILMS[(Math.imul(day,2654435761)>>>0)%FILMS.length]}

 function hist(){try{return JSON.parse(localStorage.getItem("ha-hist")||"[]")}catch(e){return[]}}
 function pushHist(sl){try{var h=hist().filter(function(x){return x!==sl});h.unshift(sl);localStorage.setItem("ha-hist",JSON.stringify(h.slice(0,24)))}catch(e){}}
 function loadFD(){return FD?Promise.resolve(FD):fetch("../data/films.json").then(function(r){return r.json()}).then(function(j){FD=j;return j})}
 function loadCols(){return COLS?Promise.resolve(COLS):fetch("../data/collections.json").then(function(r){return r.json()}).then(function(j){COLS=j;return j})}
 function stars(r){var f=Math.floor((r||0)/2),h=(r||0)%2,o="";for(var i=1;i<=5;i++)o+='<span class="s'+(r>=i*2?" f":r===i*2-1?" h":"")+'" data-n="'+i+'">★<i>★</i></span>';return o}
 function actHTML(sl){var e=D.get(sl),I=window.HA_ICONS;return '<div class="fa"><button type="button" data-fa="w" aria-pressed="'+!!e.w+'">'+I.eye+'<span>'+(e.w?T("Просмотрено","Watched"):T("Смотрел","Watched"))+'</span></button><button type="button" data-fa="l" aria-pressed="'+!!e.l+'">'+I.heart+'<span>'+T("Нравится","Like")+'</span></button><button type="button" data-fa="wl" aria-pressed="'+!!e.wl+'">'+I.clock+'<span>'+T("Хочу","Watchlist")+'</span></button></div><div class="fr" data-sl="'+esc(sl)+'">'+stars(e.r||0)+'</div>'}

 var MOODS=[["classic","🎞","Классика до 1980","Classics before 1980"],["new","🆕","Новее 2015","Newer than 2015"],["top","★","Лучшее (4.5+)","Top rated (4.5+)"],["j-horror","日","Японское","Japanese"],["haunted-houses","家","Дома с призраками","Haunted houses"],["folk-horror","村","Фолк-хоррор","Folk horror"],["ghost-children","子","Дети и призраки","Ghost children"],["wl","⏱","Из «Хочу»","From my watchlist"]];
 function pick(key){
  var d=D.all(),seen=function(f){return d[f[0]]&&d[f[0]].w};
  function go(pool){var u=pool.filter(function(f){return !seen(f)});if(!u.length)u=pool;if(!u.length){location.replace("#home");alert(T("Тут пока пусто","Nothing here yet"));return}var r=u[Math.floor(Math.random()*u.length)];location.replace("#film/"+r[0])}
  if(key==="classic")go(FILMS.filter(function(f){return +f[3]<1980}));
  else if(key==="new")go(FILMS.filter(function(f){return +f[3]>=2015}));
  else if(key==="top")go(FILMS.filter(function(f){return +f[5]>=4.5}));
  else if(key==="wl")go(FILMS.filter(function(f){return d[f[0]]&&d[f[0]].wl}));
  else loadCols().then(function(J){go((J[key]||[]).map(function(x){return BY[x]}).filter(Boolean))})}

 function loadYokai(){
  if(!document.getElementById("yk-css")){var l=document.createElement("link");l.id="yk-css";l.rel="stylesheet";l.href="../yokai.css?v=4";document.head.appendChild(l)}
  function add(src,cb){var e=document.createElement("script");e.src=src;e.onload=cb;document.head.appendChild(e)}
  function run(){add("../yokai.js?v=4")}
  if(window.YK_HD)run();else add("../yokai-hd.js?v=4",run)}
 /* ---------- views ---------- */
 function vHome(){
  var f=pickTonight(),d=D.all(),wl=FILMS.filter(function(x){return d[x[0]]&&d[x[0]].wl}),top=FILMS.filter(function(x){return +x[5]>=4.5}).sort(function(a,b){return b[5]-a[5]||a[3]-b[3]}).slice(0,14);
  var rec=recent.map(function(s){return BY[s]}).filter(Boolean).slice(0,14);
  return '<div class="hero"><i>今夜</i><small>'+T("Фильм ночи","Film of the night")+'</small><b>'+esc(name(f).replace(/\s*\(\d{4}\)\s*$/,""))+'</b><span>'+esc(f[3])+(f[4]?" · "+esc(f[4]):"")+(f[5]?" · ★ "+esc(f[5]):"")+'</span><a class="go" href="#film/'+esc(f[0])+'">'+T("Открыть →","Open →")+'</a> <a class="go" href="#random">'+T("Случайный ↻","Random ↻")+'</a></div>'+
  '<h2 class="sh">'+T("Что посмотреть сегодня?","What to watch tonight?")+'</h2><div class="chips">'+MOODS.map(function(m){return '<button type="button" onclick="location.hash=\'#pick/'+m[0]+'\'">'+m[1]+' '+esc(T(m[2],m[3]))+'</button>'}).join("")+'</div>'+
  (rec.length?'<h2 class="sh">'+T("Новые рецензии","New reviews")+'<a href="#films">'+T("все","all")+'</a></h2><div class="row">'+cards(rec)+'</div>':'')+
  (wl.length?'<h2 class="sh">'+T("Хочу посмотреть","Your watchlist")+'<a href="#lists">'+T("все","all")+'</a></h2><div class="row">'+cards(wl.slice(0,14))+'</div>':'')+
  (function(){var h=hist().map(function(x){return BY[x]}).filter(Boolean);return h.length?'<h2 class="sh">'+T("Недавно открывали","Recently opened")+'</h2><div class="row">'+cards(h.slice(0,14))+'</div>':''})()+
  '<h2 class="sh">'+T("Лучшее в архиве","Top rated")+'</h2><div class="row">'+cards(top)+'</div>'+
  '<h2 class="sh">'+T("Подборки","Collections")+'<a href="#lists">'+T("все","all")+'</a></h2><div class="chips">'+COLL.slice(0,6).map(function(c){return '<button type="button" onclick="location.hash=\'#collection/'+c[0]+'\'">'+c[1]+" "+esc(T(c[2],c[3]))+'</button>'}).join("")+'</div>'+
  '<h2 class="sh">'+T("Крипипасты и журнал","Stories and magazine")+'</h2><div class="lst"><a href="../creepypasta/"><span>怖い話</span><b>'+T("Крипипасты","Creepypastas")+'</b></a><a href="../magazine/"><span>№1</span><b>'+T("Журнал","The journal")+'</b></a><a href="#yokai"><span>妖怪</span><b>'+T("Ёкаи","Yōkai")+'</b></a></div>'}
 function filtered(){
  var d=D.all(),q=filt.q.trim().toLowerCase(),L=FILMS.filter(function(f){
   if(q&&(f[1]+" "+f[2]+" "+f[4]).toLowerCase().indexOf(q)<0)return false;
   if(filt.dec){var y=+f[3];if(!(y>=+filt.dec&&y<+filt.dec+10))return false}
   var gv=GR[f[0]];if(filt.g==='low'&&!(gv<=2))return false;if(filt.g==='high'&&!(gv>=4))return false;
   var e=d[f[0]]||{};if(filt.set==="unseen"&&e.w)return false;if(filt.set==="seen"&&!e.w)return false;if(filt.set==="liked"&&!e.l)return false;if(filt.set==="wl"&&!e.wl)return false;return true});
  L.sort(function(a,b){return filt.sort==="year"?a[3]-b[3]:filt.sort==="az"?a[1].localeCompare(b[1]):(b[5]-a[5])||(a[3]-b[3])});return L}
 function vFilms(){
  var decs=["","1950","1960","1970","1980","1990","2000","2010","2020"];
  var sets=[["","Все","All"],["unseen","Не смотрел","Unseen"],["seen","Смотрел","Seen"],["liked","Нравится","Liked"],["wl","Хочу","Watchlist"]];
  var srt=[["rating","Оценка","Rating"],["year","Год","Year"],["az","А–Я","A–Z"]];
  return '<input class="search" id="q" type="search" placeholder="'+T("Название или режиссёр","Title or director")+'" value="'+esc(filt.q)+'">'+
  '<div class="chips">'+sets.map(function(s){return '<button type="button" data-set="'+s[0]+'" aria-pressed="'+(filt.set===s[0])+'">'+T(s[1],s[2])+'</button>'}).join("")+'</div>'+
  '<div class="chips">'+decs.map(function(x){return '<button type="button" data-dec="'+x+'" aria-pressed="'+(filt.dec===x)+'">'+(x?x+"s":T("Все годы","Any year"))+'</button>'}).join("")+'</div>'+
  '<div class="chips">'+[["","Любая жесть","Any gore"],["low","Без жести","Low gore"],["high","Жёстко","Extreme"]].map(function(x){return '<button type="button" data-g="'+x[0]+'" aria-pressed="'+(filt.g===x[0])+'">'+T(x[1],x[2])+'</button>'}).join("")+'</div>'+
  '<div class="chips">'+srt.map(function(s){return '<button type="button" data-sort="'+s[0]+'" aria-pressed="'+(filt.sort===s[0])+'">'+T(s[1],s[2])+'</button>'}).join("")+'</div><div id="fg"></div>'}
 function fillFilms(){var g=$("#fg");if(!g)return;var L=filtered();g.innerHTML=(L.length?'<div class="grid">'+cards(L.slice(0,shown))+'</div>'+(L.length>shown?'<button class="more" type="button" id="more">'+T("Показать ещё","Show more")+" ("+(L.length-shown)+')</button>':''):'<div class="empty">'+T("Ничего не найдено","Nothing found")+'</div>')}
 function vDiary(){
  var d=D.all(),rows=FILMS.filter(function(f){return d[f[0]]&&d[f[0]].w}).sort(function(a,b){return String(d[b[0]].w).localeCompare(String(d[a[0]].w))||(d[b[0]].t||0)-(d[a[0]].t||0)});
  if(!rows.length)return '<div class="empty">'+T("Дневник пуст. Откройте рецензию и нажмите «Смотрел» или поставьте оценку.","The diary is empty. Open a review and tap Watched or give a rating.")+'</div>';
  var out="",mon="",MN={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]};
  rows.forEach(function(f){var e=d[f[0]],ds=String(e.w),m=ds.slice(0,7);if(m!==mon){mon=m;out+='<div class="mon">'+(MN[lang()][+ds.slice(5,7)-1]||"")+" "+ds.slice(0,4)+'</div>'}
   out+='<a class="entry" href="#film/'+esc(f[0])+'"><span class="pc" style="--h:'+hue(f[0])+'"></span><div><b>'+esc(name(f).replace(/\s*\(\d{4}\)\s*$/,""))+'</b><small>'+esc(f[3])+' <span class="st">'+D.stars(e.r)+'</span> '+(e.l?"♥":"")+'</small></div><time>'+esc(ds.slice(8,10))+"."+esc(ds.slice(5,7))+'</time></a>'});
  return out}
 function vLists(){
  var d=D.all(),wl=FILMS.filter(function(f){return d[f[0]]&&d[f[0]].wl}),lk=FILMS.filter(function(f){return d[f[0]]&&d[f[0]].l});
  return '<h2 class="sh">'+T("Хочу посмотреть","Watchlist")+' · '+wl.length+(wl.length>1?'<a href="#pick/wl">'+T("выбрать за меня ↻","pick for me ↻")+'</a>':'')+'</h2>'+(wl.length?'<div class="grid">'+cards(wl)+'</div>':'<div class="empty">'+T("Нажмите «Хочу» на странице фильма.","Tap Watchlist on a film page.")+'</div>')+
  '<h2 class="sh">'+T("Нравится","Liked")+' · '+lk.length+'</h2>'+(lk.length?'<div class="grid">'+cards(lk)+'</div>':'<div class="empty">'+T("Нажмите ♥ на странице фильма.","Tap ♥ on a film page.")+'</div>')+
  '<h2 class="sh">'+T("Подборки","Collections")+'</h2><div class="lst">'+COLL.map(function(c){return '<a href="#collection/'+c[0]+'"><span>'+c[1]+'</span><b>'+esc(T(c[2],c[3]))+'</b></a>'}).join("")+'</div>'}
 function vMe(){
  var d=D.all(),seen=FILMS.filter(function(f){return d[f[0]]&&d[f[0]].w}),n=seen.length,rated=seen.filter(function(f){return d[f[0]].r}),avg=rated.length?rated.reduce(function(s,f){return s+d[f[0]].r},0)/rated.length/2:0;
  var likes=FILMS.filter(function(f){return d[f[0]]&&d[f[0]].l}).length,wl=FILMS.filter(function(f){return d[f[0]]&&d[f[0]].wl}).length;
  var L=[[0,"Новичок","Newcomer"],[5,"Ночной зритель","Night viewer"],[15,"Охотник за страхом","Fear hunter"],[40,"Хранитель кассет","Tape keeper"],[100,"Хранитель архива","Archive keeper"]],lv=0;L.forEach(function(x,i){if(n>=x[0])lv=i});
  var next=L[lv+1],pct=next?Math.min(100,Math.round((n-L[lv][0])/(next[0]-L[lv][0])*100)):100;
  var hist=[0,0,0,0,0,0,0,0,0,0];rated.forEach(function(f){hist[d[f[0]].r-1]++});var mx=Math.max.apply(null,hist)||1;
  var dir={},dec={};seen.forEach(function(f){if(f[4])dir[f[4]]=(dir[f[4]]||0)+1;var k=Math.floor(f[3]/10)*10+"s";dec[k]=(dec[k]||0)+1});
  function top(o){var k=Object.keys(o).sort(function(a,b){return o[b]-o[a]})[0];return k?k:"—"}
  return '<div class="lvl"><small>'+T("Ваш уровень","Your level")+'</small><b>'+esc(T(L[lv][1],L[lv][2]))+'</b><small>'+(next?T("До «"+next[1]+"»: ещё "+(next[0]-n),"To "+next[2]+": "+(next[0]-n)+" more"):T("Максимальный уровень","Top level"))+'</small><div class="bar"><i style="width:'+pct+'%"></i></div></div>'+
  '<div class="stats"><div class="stat"><b>'+n+'</b><small>'+T("Просмотрено","Watched")+'</small></div><div class="stat"><b>'+(avg?avg.toFixed(1):"—")+'</b><small>'+T("Средняя оценка","Average rating")+'</small></div><div class="stat"><b>'+likes+'</b><small>'+T("Нравится","Liked")+'</small></div><div class="stat"><b>'+wl+'</b><small>'+T("Хочу","Watchlist")+'</small></div></div>'+
  '<h2 class="sh">'+T("Оценки","Ratings")+'</h2><div class="hist" style="margin-bottom:26px">'+hist.map(function(c,i){return '<div style="height:'+Math.round(c/mx*100)+'%"><span>'+((i+1)/2)+'</span></div>'}).join("")+'</div>'+
  '<div class="stats"><div class="stat"><b style="font-size:22px">'+esc(top(dec))+'</b><small>'+T("Любимое десятилетие","Favourite decade")+'</small></div><div class="stat"><b style="font-size:22px">'+esc(top(dir))+'</b><small>'+T("Любимый режиссёр","Favourite director")+'</small></div></div>'+
  (/HorrorAestheticApp/.test(navigator.userAgent)?'':'<h2 class="sh">'+T("Приложение","App")+'</h2><a class="btn" href="https://github.com/horroraesthetic/horror-aesthetic/releases/download/app-latest/horror-aesthetic.apk">'+T("Скачать для Android (APK)","Download for Android (APK)")+'</a><p style="color:var(--dim);font-size:14px">'+T("Откройте файл, разрешите установку из этого источника. Можно отправлять друзьям.","Open the file and allow installing from this source. You can share it with friends.")+'</p>')+'<h2 class="sh">'+T("Данные","Data")+'</h2><button class="btn" id="exp">'+T("Скопировать резервную копию","Copy a backup")+'</button><button class="btn" id="imp">'+T("Восстановить из копии","Restore from a backup")+'</button><p style="color:var(--dim);font-size:14px">'+T("Дневник хранится только на этом телефоне. Копия нужна, чтобы перенести его на другое устройство.","The diary lives only on this phone. A backup lets you move it to another device.")+'</p>'}

 function vFilm(sl){
  var f=BY[sl];if(!f)return '<div class="empty">'+T("Фильм не найден","Film not found")+'</div>';pushHist(sl);
  var title=name(f).replace(/\s*\(\d{4}\)\s*$/,"");
  return '<div class="fh" style="--h:'+hue(sl)+'"><div class="fp" id="fp"><span class="pt">'+esc(title)+'</span></div><div class="ft"><small>'+esc(f[3])+(f[4]?" · "+esc(f[4]):"")+'</small><h1>'+esc(title)+'</h1>'+(lang()==="ru"&&f[1]!==title?'<small>'+esc(f[1])+'</small>':"")+(f[5]?'<div class="rt">★ '+esc(f[5])+' / 5</div>':"")+'</div></div><div id="fact">'+actHTML(sl)+'</div><div id="fd"></div>'}
 function fillFilm(sl){
  loadFD().then(function(J){var x=J[sl],f=BY[sl],el=$("#fd");if(!x||!el||!f)return;
   var fp=$("#fp");if(fp&&PO[sl]){fp.classList.add("has");fp.innerHTML='<img src="../img/posters/'+encodeURI(PO[sl])+'" alt="" decoding="async">'}
   var same=FILMS.filter(function(o){return o[0]!==sl&&o[4]&&o[4]===f[4]}).slice(0,12);
   if(same.length<6){var dc=Math.floor(f[3]/10);same=same.concat(FILMS.filter(function(o){return o[0]!==sl&&Math.floor(o[3]/10)===dc&&same.indexOf(o)<0}).sort(function(a,b){return b[5]-a[5]}).slice(0,12-same.length))}
   el.innerHTML='<p class="syn">'+esc(T(x[1],x[0]))+'</p>'+(x[2]?'<h2 class="sh">'+T("Из рецензии","From the review")+'</h2><p class="ex">'+esc(T(x[3],x[2]))+'</p>':'')+(x[4]>=0?'<p class="gore">'+T("Жестокость","Gore")+': '+"●".repeat(x[4])+"○".repeat(5-x[4])+' '+x[4]+' / 5</p>':'')+
   '<a class="btn" href="../reviews/'+esc(sl)+'.html">'+T("Читать полную рецензию","Read the full review")+'</a><button class="btn" type="button" id="share" data-sl="'+esc(sl)+'">'+T("Поделиться","Share")+'</button>'+
   (same.length?'<h2 class="sh">'+(f[4]?T("Ещё это","More from this"):T("Похожие","Similar"))+'</h2><div class="row">'+cards(same)+'</div>':'')})}
 function vCollection(id){
  var c=COLL.filter(function(x){return x[0]===id})[0];if(!c)return '<div class="empty">…</div>';
  return '<div class="lvl"><small>'+c[1]+'</small><b>'+esc(T(c[2],c[3]))+'</b></div><div id="cg"><div class="empty">…</div></div>'}
 function fillCollection(id){loadCols().then(function(J){var g=$("#cg");if(!g)return;var L=(J[id]||[]).map(function(s){return BY[s]}).filter(Boolean);g.innerHTML=L.length?'<div class="grid">'+cards(L)+'</div>':'<div class="empty">'+T("Пока пусто","Empty for now")+'</div>'})}
 /* ---------- router ---------- */
 function route(){
  var parts=(location.hash||"#home").slice(1).split("/"),v=parts[0],arg=parts[1]||"";
  if(v==="random"){var r=FILMS[Math.floor(Math.random()*FILMS.length)];location.replace("#film/"+r[0]);return}
  if(v==="pick"){pick(arg);return}
  var main={home:1,films:1,diary:1,lists:1,me:1};var sub=(v==="film"||v==="collection"||v==="yokai");if(!main[v]&&!sub)v="home";
  $("#ab-b").hidden=!sub;
  $("#ab-t").textContent=sub?"":(v==="home"?"HORROR AESTHETIC":T(HOME_TITLES[v][0],HOME_TITLES[v][1]).toUpperCase());$("#ab-l").textContent=lang()==="ru"?"EN":"RU";
  if(v==="film"){A.innerHTML=vFilm(arg);fillFilm(arg)}
  else if(v==="collection"){A.innerHTML=vCollection(arg);fillCollection(arg)}
  else if(v==="yokai"){A.innerHTML='<div class="lvl"><small>妖怪</small><b>'+T("Ёкаи","Yōkai")+'</b></div><div id="yokai-gallery"></div><a class="btn" href="../folklore/">'+T("Все легенды на сайте","All legends on the site")+'</a>';loadYokai()}
  else A.innerHTML=({home:vHome,films:vFilms,diary:vDiary,lists:vLists,me:vMe})[v]();
  if(v==="films")fillFilms();
  window.scrollTo(0,0)}
 A.addEventListener("input",function(e){if(e.target.id==="q"){filt.q=e.target.value;shown=60;fillFilms()}});
 A.addEventListener("click",function(e){
  var st=e.target.closest(".fr .s");
  if(st){var fr=st.parentNode,sl=fr.dataset.sl,en=D.get(sl),n=+st.dataset.n,rc=st.getBoundingClientRect(),v=n*2-((e.clientX-rc.left)<rc.width/2?1:0);D.set(sl,{r:en.r===v?0:v,w:en.w||D.today(),wl:0});$("#fact").innerHTML=actHTML(sl);return}
  var b=e.target.closest("button");if(!b)return;
  if(b.dataset.fa){var sl2=location.hash.split("/")[1],e2=D.get(sl2),a=b.dataset.fa;if(a==="w")D.set(sl2,{w:e2.w?0:D.today(),wl:e2.w?e2.wl:0});else if(a==="l")D.set(sl2,{l:e2.l?0:1});else D.set(sl2,{wl:e2.wl?0:1,w:e2.w});$("#fact").innerHTML=actHTML(sl2);return}
  if(b.id==="share"){var sl3=b.dataset.sl,url="https://horroraesthetic.github.io/horror-aesthetic/reviews/"+sl3+".html",ttl=(BY[sl3]||[])[1]||"Horror Aesthetic";if(navigator.share)navigator.share({title:ttl,url:url}).catch(function(){});else if(navigator.clipboard)navigator.clipboard.writeText(url).then(function(){alert(T("Ссылка скопирована","Link copied"))});return}
  if(b.dataset.set!==undefined){filt.set=b.dataset.set;shown=60;route()}
  else if(b.dataset.g!==undefined){filt.g=b.dataset.g;shown=60;route()}
  else if(b.dataset.dec!==undefined){filt.dec=b.dataset.dec;shown=60;route()}
  else if(b.dataset.sort!==undefined){filt.sort=b.dataset.sort;route()}
  else if(b.id==="more"){shown+=60;fillFilms()}
  else if(b.id==="exp"){var s=JSON.stringify(D.all());(navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).then(function(){alert(T("Копия в буфере обмена. Сохраните её в заметках.","Copied to the clipboard. Save it in your notes."))},function(){prompt(T("Скопируйте текст:","Copy the text:"),s)})}
  else if(b.id==="imp"){var t=prompt(T("Вставьте копию:","Paste your backup:"));if(!t)return;try{var o=JSON.parse(t);if(o&&typeof o==="object"){D.replace(o);route()}}catch(x){alert(T("Не получилось прочитать копию.","Could not read the backup."))}}});
 $("#ab-l").addEventListener("click",function(){var n=lang()==="ru"?"en":"ru";root.dataset.l=n;root.lang=n;try{localStorage.setItem("ha-lang",n)}catch(e){}route()});
 addEventListener("hashchange",route);document.addEventListener("ha-diary",function(){var v=(location.hash||"#home").slice(1).split("/")[0];if(v!=="film"&&!A.querySelector("input"))route()});$("#ab-b").addEventListener("click",function(){if(history.length>1)history.back();else location.hash="#home"});
 /* ---------- data ---------- */
 A.innerHTML='<div class="empty">…</div>';
 Promise.all([fetch("../data/daily.json").then(function(r){return r.json()}),fetch("../feed-reviews.xml").then(function(r){return r.text()}).catch(function(){return""}),fetch("../data/posters.json").then(function(r){return r.json()}).catch(function(){return{}}),fetch("../data/gore.json").then(function(r){return r.json()}).catch(function(){return{}})]).then(function(r){
  PO=r[2]||{};GR=r[3]||{};FILMS=r[0];FILMS.forEach(function(f){BY[f[0]]=f});
  var m,re=/reviews\/([a-z0-9_-]+)\.html<\/link>/gi;while((m=re.exec(r[1])))recent.push(m[1]);
  route()}).catch(function(){A.innerHTML='<div class="empty">'+T("Нет соединения. Откройте приложение с интернетом хотя бы раз.","No connection. Open the app online at least once.")+'</div>'});
})();
