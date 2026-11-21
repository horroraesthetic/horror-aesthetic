/* HORROR AESTHETIC — "Guide / Проводник": a small on-site helper.
   No network, no AI service: it reads the site's own film list (F) and review list (REVIEWS). */
(function(){
"use strict";
if(typeof F==="undefined"||typeof REVIEWS==="undefined")return;
/* Free AI: URL of the Cloudflare Worker (see worker/horror-guide.js). Empty = local helper only. */
var AI_URL="https://horror-guide.phenomenonevil.workers.dev/";
var hist=[];
var ru=function(){return typeof LANG!=="undefined"&&LANG==="ru"};
var T=function(a,b){return ru()?a:b};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function norm(s){return String(s||"").toLowerCase().replace(/ё/g,"е").replace(/[^a-zа-я0-9À-ɏ ]+/g," ").replace(/\s+/g," ").trim()}
var IDX=null;
function build(){
 if(IDX)return IDX;IDX=[];
 REVIEWS.forEach(function(r){var f=F[r.id];if(!f)return;
  var tr=f.n.ru||"",te=f.n.en||"",dr=(r.d&&r.d.ru)||"",de=(r.d&&r.d.en)||"";
  var body=[r.s&&r.s.ru,r.s&&r.s.en].concat(r.f&&r.f.ru||[],r.f&&r.f.en||[]).join(" ");
  IDX.push({id:r.id,r:r,y:f.y,tr:tr,te:te,dr:dr,de:de,nt:norm(tr+" "+te),nd:norm(dr+" "+de),nb:norm(body),sur:[norm(dr).split(" ").pop(),norm(de).split(" ").pop()]})});
 return IDX}
var GENRE=[
 ["jhorror",/j ?horror|японск|япони|japan|кайдан|kaidan/],["slasher",/слэшер|слешер|маньяк|slasher|killer|убийц/],["giallo",/джалло|giallo|итальянск|italian/],
 ["body",/боди|body horror|мутаци|mutation/],["extreme",/экстрим|extreme|самое жестк|hardest/],["splatterpunk",/сплаттер|splatter/],
 ["trash",/трэш|треш|trash|смешн|комед|funny|comedy|весел/],["exploit",/эксплуатац|грайндхаус|exploit|grindhouse/],["shock",/шок|shock|скандал|запрещ|banned/],["gore",/\bгор\b|gore|кроваво|кровав/]];
function parse(q){
 var n=norm(q),o={n:n,gn:[],gmax:null,gmin:null,y0:null,y1:null,best:false,rnd:false,like:null,dir:null,more:false};
 if(/^(еще|ещё|more|дальше|next|еще раз|another)\b/.test(n)||n==="еще")o.more=true;
 if(/случайн|рандом|random|удиви|surprise|any film|любой фильм/.test(n))o.rnd=true;
 if(/без крови|без жести|без гора|не люблю (кровь|жесть)|не кровав|мало крови|без насили|не слишком кровав|bloodless|no gore|not gory|without gore|low gore|not too gory|hate gore|don t like blood|mild/.test(n))o.gmax=1;
 else if(/очень кровав|жесть|жестк|(\bгор\b)|\bgore|gory|extreme|экстрим|тяжел|brutal|жесток|bloody|кровав/.test(n))o.gmin=4;
 GENRE.forEach(function(g){if(g[1].test(n)&&!(g[0]==="gore"&&o.gmax!=null))o.gn.push(g[0])});
 if(o.gmax!=null)o.gn=o.gn.filter(function(x){return x!=="gore"});
 var m;
 if(m=n.match(/(?:^|\s)(19|20)(\d)0 ?(х|s|x)(?=\s|$)/)){o.y0=+(m[1]+m[2]+"0");o.y1=o.y0+9}
 else if(m=n.match(/(?:^|\s)(\d)0 ?(х|s|x)(?=\s|$)/)){var d=+m[1];o.y0=(d<=1?2000:1900)+d*10;o.y1=o.y0+9}
 else if(m=n.match(/\b(19|20)\d{2}\b/)){o.y0=o.y1=+m[0]}
 if(/классик|старое|старый|старинн|classic|old school|oldschool|vintage|немое|silent/.test(n)&&o.y1==null){o.y0=1900;o.y1=1975}
 if(/нов(ое|ые|ый|инк)|свеж|недавн|recent|latest|modern|современн|new\b/.test(n)&&o.y0==null){o.y0=2015;o.y1=2100}
 if(/лучш|топ\b|best|top|шедевр|masterpiece|высоко/.test(n))o.best=true;
 if(/(похож|вроде|как |like |similar|такое как|типа )/.test(n+" "))o.like=true;
 return o}
function findTitle(n){
 var best=null,len=0;
 build().forEach(function(x){[x.tr,x.te].forEach(function(t){t=norm(t);if(t.length>=4&&(" "+n+" ").indexOf(" "+t+" ")>-1&&t.length>len){best=x;len=t.length}})});
 if(!best){ /* all words of a title present */
  var toks=n.split(" ").filter(function(w){return w.length>3});
  build().forEach(function(x){var nt=" "+x.nt+" ",c=0;toks.forEach(function(w){if(nt.indexOf(" "+w)>-1)c++});if(c>=1&&toks.length&&c===toks.length&&c>len/10&&toks.length<=4){if(!best||c>len){best=x;len=c*10}}})}
 return best}
function findDir(n){var out=[];build().forEach(function(x){x.sur.forEach(function(s){if(s&&s.length>=4&&(" "+n+" ").indexOf(" "+s)>-1)out.push(x.id)})});return out.length?out:null}
var STOP=/\b(что|чтоб|мне|хочу|посмотреть|фильм|фильмы|ужас|ужасы|хоррор|хорроры|про|для|или|как|это|есть|нет|можно|пожалуйста|порекомендуй|посоветуй|подскажи|покажи|найди|дай|что-нибудь|нибудь|которые|который|такой|очень|еще|ещё|сегодня|вечер|вечером|what|some|film|films|movie|movies|horror|show|find|give|want|watch|something|about|with|that|have|please|recommend|suggest|tonight|the|and|for|you|are|can|any|i)\b/g;
function keywords(n){return n.replace(STOP," ").split(" ").filter(function(w){return w.length>=4}).map(function(w){return w.length>6?w.slice(0,w.length-2):w.length>4?w.slice(0,4+(w.length>5?1:0)):w})}
function stars(r){return r.toFixed(1).replace(/\.0$/,"")}
function pickSeed(arr,k){var d=new Date(),s=d.getFullYear()*372+d.getMonth()*31+d.getDate(),out=[],a=arr.slice();for(var i=0;i<k&&a.length;i++){s=(s*1103515245+12345)&0x7fffffff;out.push(a.splice(s%a.length,1)[0])}return out}
function similar(x){
 var base=x.r,res=[];build().forEach(function(y){if(y.id===x.id)return;var sc=0;y.r.gn.forEach(function(g){if(base.gn.indexOf(g)>-1)sc+=3});if(x.dr&&x.dr===y.dr)sc+=5;var dy=Math.abs(x.y-y.y);if(dy<=10)sc+=2;else if(dy<=20)sc+=1;if(Math.abs(base.g-y.r.g)<=1)sc+=1;if(y.r.r>=4)sc+=.5;if(sc>=3)res.push([sc,y])});
 res.sort(function(a,b){return b[0]-a[0]||b[1].r.r-a[1].r.r});return res.map(function(p){return p[1]})}
function search(o){
 var hits=[],kw=keywords(o.n);
 var gnLabel={};
 build().forEach(function(x){
  var r=x.r;
  if(o.gmax!=null&&r.g>o.gmax)return;if(o.gmin!=null&&r.g<o.gmin)return;
  if(o.y0!=null&&(x.y<o.y0||x.y>o.y1))return;
  if(o.gn.length){var ok=false;o.gn.forEach(function(g){if(r.gn.indexOf(g)>-1)ok=true});if(!ok)return}
  var sc=0;
  if(o.dirIds&&o.dirIds.indexOf(x.id)<0)return;
  kw.forEach(function(w){if(x.nt.indexOf(w)>-1)sc+=4;else if(x.nd.indexOf(w)>-1)sc+=4;else if(x.nb.indexOf(w)>-1)sc+=1});
  if(kw.length&&sc===0&&!(o.gn.length||o.gmax!=null||o.gmin!=null||o.y0!=null||o.dirIds||o.best))return;
  if(kw.length&&sc===0&&!(o.gn.length||o.gmax!=null||o.gmin!=null||o.y0!=null||o.dirIds))return;
  sc+=r.r*.6;if(o.best)sc+=r.r*1.2;
  hits.push([sc,x])});
 hits.sort(function(a,b){return b[0]-a[0]});return hits.map(function(h){return h[1]})}
function describe(o){
 var p=[];if(o.gmax!=null)p.push(T("с малым количеством крови","with little blood"));if(o.gmin!=null)p.push(T("пожёстче","on the harder side"));
 if(o.y0!=null&&o.y1<2100)p.push(o.y0===o.y1?String(o.y0):(o.y1-o.y0===9?(o.y0+T("-х","s")):T("до "+o.y1,"up to "+o.y1)));else if(o.y0!=null)p.push(T("посвежее","more recent"));
 if(o.gn.length)p.push(o.gn.map(function(g){var G=typeof GENRES!=="undefined"&&GENRES.filter(function(x){return x[0]===g})[0];return G?G[1][ru()?"ru":"en"]:g}).join(", "));return p.join(", ")}
/* ---------- UI ---------- */
var box,list,inp,btn,last={items:[],off:0},open=false,started=false;
function el(t,c,p){var e=document.createElement(t);if(c)e.className=c;if(p)p.appendChild(e);return e}
function say(html,who){var m=el("div","ga-m "+(who||"bot"),list);m.innerHTML=html;list.scrollTop=list.scrollHeight;return m}
function card(x){var r=x.r,t=ru()?(x.tr||x.te):x.te,d=ru()?(r.d.ru||r.d.en):r.d.en,s=ru()?r.s.ru:r.s.en;
 return '<a class="ga-c" href="reviews/'+esc(x.id)+'.html"><b>'+esc(t)+' <i>('+x.y+')</i></b><span>'+esc(d)+' · ★ '+stars(r.r)+' · Gore '+r.g+'/5</span><em>'+esc(s)+'</em></a>'}
function showList(items,intro,more){
 var page=items.slice(last.off,last.off+4);
 var h=(intro?'<p>'+intro+'</p>':'')+page.map(card).join("");
 if(items.length>last.off+4)h+='<button type="button" class="ga-more" data-q="'+T("ещё","more")+'">'+T("Показать ещё","Show more")+' ('+(items.length-last.off-4)+')</button>';
 say(h)}
var CHIPS=function(){return ru()?["Что посмотреть сегодня","Без крови","Похоже на Звонок","Классика до 1970","Фильмы 80-х","Самое жёсткое","Японский хоррор","Случайный фильм"]:["What to watch tonight","No gore","Like Ringu","Classics before 1970","80s films","Harshest picks","J-Horror","Random film"]};
function chips(){var c=el("div","ga-chips",list);CHIPS().forEach(function(t){var b=el("button","",c);b.type="button";b.textContent=t;b.setAttribute("data-q",t)});list.scrollTop=list.scrollHeight}
function help(){say(T("Я ищу по базе сайта: "+build().length+" рецензий и "+Object.keys(F).length+" фильмов. Попробуй: <i>«без крови»</i>, <i>«джалло 70-х»</i>, <i>«похоже на Хэллоуин»</i>, <i>«Кроненберг»</i>, <i>«про вампиров»</i>.","I search the site's own data: "+build().length+" reviews and "+Object.keys(F).length+" films. Try: <i>“no gore”</i>, <i>“giallo 70s”</i>, <i>“like Halloween”</i>, <i>“Cronenberg”</i>, <i>“about vampires”</i>."))}

function ctxOf(items){return items.slice(0,5).map(function(x){var r=x.r;return (x.te||x.tr)+(x.tr&&x.te&&x.tr!==x.te?" / "+x.tr:"")+" ("+x.y+"), dir. "+(r.d.en||r.d.ru)+", rating "+r.r+"/5, gore "+r.g+"/5. "+r.s.en}).join("\n")}
function ai(q,items,fallback,done){
 if(!AI_URL){done(fallback);return}
 var m=say('<span class="ga-dots">…</span>'),ctl=window.AbortController?new AbortController():null,tm=setTimeout(function(){if(ctl)ctl.abort()},14000);
 fetch(AI_URL,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({q:q,lang:ru()?"ru":"en",ctx:ctxOf(items||[]),h:hist.slice(-4)}),signal:ctl?ctl.signal:undefined})
 .then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){clearTimeout(tm);var t=(j&&j.reply||"").trim();if(!t)throw 0;
  m.innerHTML=esc(t).replace(/\n+/g,"<br>")+'<small class="ga-ai">'+T("ответ ИИ, возможны неточности","AI reply, may be inaccurate")+'</small>';hist.push({r:"me",t:q},{r:"bot",t:t});done(null)})
 .catch(function(){clearTimeout(tm);m.innerHTML=fallback||T("ИИ сейчас не отвечает. Попробуй позже.","The AI is not answering right now. Try later.");done(null)})}
function deliver(items,intro,q){
 last={items:items,off:0};
 if(!AI_URL){showList(items,intro);return}
 ai(q,items,intro,function(fb){var page=items.slice(0,4);var h=(fb?'<p>'+fb+'</p>':'')+page.map(card).join("");if(items.length>4)h+='<button type="button" class="ga-more" data-q="'+T("ещё","more")+'">'+T("Показать ещё","Show more")+' ('+(items.length-4)+')</button>';say(h)})}
function answer(q){
 var o=parse(q),n=o.n;
 if(!n)return;
 if(o.more){if(last.items.length>last.off+4){last.off+=4;showList(last.items,"")}else say(T("Это всё по этому запросу. Задай новый.","That is all for this request. Ask a new one."));return}
 if(/^(привет|здравств|добрый|хай|hello|hi|hey)/.test(n)&&n.split(" ").length<=3){say(T("Привет. Я Проводник. Скажи, что хочется: настроение, год, жанр или фильм, на который это должно быть похоже.","Hello. I am the Guide. Tell me what you feel like: a mood, a year, a genre or a film it should resemble."));return}
 if(/спасиб|благодар|thanks|thank you/.test(n)){say(T("Приятного страха.","Sweet screams."));return}
 if(/что (ты )?умеешь|помощь|помоги|help|как (тобой )?пользоваться|what can you/.test(n)){help();return}
 if(/^что посмотреть|what to watch|tonight|на вечер|на сегодня|на ночь/.test(n)){var t=pickSeed(build().filter(function(x){return x.r.r>=4}),3);deliver(t,T("На сегодня я бы взял вот это:","For tonight I would pick these:"),q);return}
 if(o.rnd){var a=build();var x=a[Math.floor(Math.random()*a.length)];last={items:[x],off:0};showList([x],T("Случайный выбор:","Random pick:"));return}
 var tt=findTitle(n);
 if(tt&&(o.like||/похож|вроде|like|similar/.test(n))){var sim=similar(tt);if(sim.length){deliver(sim,T("Если понравилось «"+(tt.tr||tt.te)+"», загляни сюда:","If you liked “"+tt.te+"”, look here:"),q);return}}
 if(tt&&!o.like){var rel=similar(tt).slice(0,3);deliver([tt].concat(rel),T("Нашёл. И ещё несколько похожих:","Found it. And a few similar ones:"),q);return}
 o.dirIds=findDir(n);if(o.dirIds&&!tt){var items=build().filter(function(x){return o.dirIds.indexOf(x.id)>-1}).sort(function(a,b){return b.r.r-a.r.r});deliver(items,T("Режиссёр найден. Его фильмы на сайте:","Director found. Their films on the site:"),q);return}
 var res=search(o);
 if(res.length){var d=describe(o);deliver(res,T("Подобрал"+(d?" ("+d+")":"")+": всего "+res.length+".","Picked"+(d?" ("+d+")":"")+": "+res.length+" in total."),q);return}
 /* nothing in reviews: try the bare film list */
 var kw=keywords(n),extra=[];Object.keys(F).forEach(function(id){var f=F[id],nm=norm((f.n.ru||"")+" "+(f.n.en||""));for(var i=0;i<kw.length;i++)if(nm.indexOf(kw[i])>-1){extra.push(id);break}});
 if(extra.length){var h='<p>'+T("Рецензии пока нет, но такие фильмы есть в базе:","No review yet, but these films are in the database:")+'</p><ul class="ga-l">'+extra.slice(0,8).map(function(id){var f=F[id];return '<li>'+esc(ru()?(f.n.ru||f.n.en):f.n.en)+' ('+f.y+')</li>'}).join("")+'</ul>';say(h);return}
 var nf=T("Ничего не нашёл. Попробуй назвать жанр, десятилетие, режиссёра или фильм, на который это должно быть похоже.","Nothing found. Try naming a genre, a decade, a director or a film it should resemble.");if(AI_URL){ai(q,[],nf,function(fb){if(fb){say(fb);chips()}});return}say(nf);chips()}
function send(q){q=(q||inp.value).trim();if(!q)return;inp.value="";say(esc(q),"me");setTimeout(function(){try{answer(q)}catch(e){say(T("Что-то пошло не так. Попробуй иначе.","Something went wrong. Try again."))}},250)}
function init(){
 if(box)return;
 btn=el("button","ga-fab",document.body);btn.type="button";btn.id="ga-fab";btn.innerHTML='<i aria-hidden="true">導</i><span></span>';
 box=el("section","ga-box",document.body);box.id="ga-box";box.hidden=true;box.setAttribute("role","dialog");box.setAttribute("aria-label","Guide");
 box.innerHTML='<div class="ga-h"><b></b><button type="button" class="ga-x" aria-label="Close">×</button></div><div class="ga-list" aria-live="polite"></div><form class="ga-f"><input type="text" autocomplete="off" enterkeyhint="send"><button type="submit">➤</button></form>';
 list=box.querySelector(".ga-list");inp=box.querySelector("input");
 function labels(){btn.querySelector("span").textContent=T("Проводник","Guide");btn.setAttribute("aria-label",T("Помощник Проводник","Guide helper"));box.querySelector(".ga-h b").textContent=T("導 Проводник","導 Guide");inp.placeholder=T("Что хочется посмотреть?","What do you feel like watching?");box.setAttribute("aria-label",T("Проводник","Guide"))}
 labels();
 btn.addEventListener("click",function(){toggle()});
 box.querySelector(".ga-x").addEventListener("click",function(){toggle(false)});
 box.querySelector("form").addEventListener("submit",function(e){e.preventDefault();send()});
 box.addEventListener("click",function(e){var b=e.target.closest("[data-q]");if(b){e.preventDefault();send(b.getAttribute("data-q"))}});
 document.addEventListener("keydown",function(e){if(e.key==="Escape"&&open)toggle(false)});
 new MutationObserver(labels).observe(document.documentElement,{attributes:true,attributeFilter:["data-l","lang"]});
 window.__guide=function(q){toggle(true);send(q)}}
function toggle(v){init();open=v===undefined?!open:v;box.hidden=!open;btn.classList.toggle("on",open);document.documentElement.classList.toggle("ga-open",open);
 if(open){if(!started){started=true;say(T("Я Проводник. Помогу выбрать, что смотреть: по настроению, жанру, десятилетию, режиссёру или по фильму, на который это должно быть похоже.","I am the Guide. I will help you pick what to watch: by mood, genre, decade, director or a film it should resemble."));chips()}setTimeout(function(){try{inp.focus({preventScroll:true})}catch(e){}},80)}}
function boot(){init()}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();
