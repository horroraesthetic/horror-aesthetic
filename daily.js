/* "Tonight" card: a film and a yokai of the night, rotating daily with no server (deterministic by UTC date). */
(function(){
 var anchor=document.getElementById("mag-soon")||document.querySelector("main>section:last-of-type");if(!anchor)return;
 var day=Math.floor(Date.now()/864e5);
 function pick(n,salt){return(Math.imul(day+salt,2654435761)>>>0)%n}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 var sec=document.createElement("section");sec.id="daily";sec.className="dl";sec.setAttribute("aria-label","Tonight");
 sec.innerHTML='<div class="dl-h"><span class="l-ru">Сегодня ночью</span><span class="l-en">Tonight</span><i lang="ja">今夜</i></div><div class="dl-g"><div class="dl-c dl-f" id="dl-f"></div><a class="dl-c dl-y" id="dl-y" href="folklore/"></a></div><div class="dl-more"><a href="collections/"><span class="l-ru">Подборки по темам →</span><span class="l-en">Collections by theme →</span></a> <a href="creepypasta/"><span class="l-ru">Крипипасты →</span><span class="l-en">Creepypastas →</span></a></div>';
 anchor.parentNode.insertBefore(sec,anchor);
 /* film */
 fetch("data/daily.json").then(function(r){return r.json()}).then(function(F){
  var f=F[pick(F.length,0)],el=document.getElementById("dl-f");
  el.innerHTML='<a href="reviews/'+esc(f[0])+'.html"><small><span class="l-ru">Фильм ночи</span><span class="l-en">Film of the night</span></small><b>'+esc(f[1])+'</b>'+(f[2]&&f[2]!==f[1]?'<em>'+esc(f[2])+'</em>':'')+'<span>'+esc(f[3])+(f[4]?' · '+esc(f[4]):'')+(f[5]?' · ★ '+esc(f[5]):'')+'</span><u><span class="l-ru">Читать рецензию →</span><span class="l-en">Read the review →</span></u></a>';
 }).catch(function(){var e=document.getElementById("dl-f");if(e)e.style.display="none"});
 /* yokai */
 function drawY(){
  var N=window.YK_NAME;if(!N)return;var keys=Object.keys(N),k=keys[pick(keys.length,7)],n=N[k],el=document.getElementById("dl-y");
  var art=window.YK_HD&&window.YK_HD[k]?'<div class="yk-art yk-hd dl-art"><svg viewBox="0 0 160 160" aria-hidden="true">'+window.YK_HD[k]+'</svg></div>':"";
  el.innerHTML=art+'<div class="dl-t"><small><span class="l-ru">Ёкай ночи</span><span class="l-en">Yōkai of the night</span></small><b><span class="l-ru">'+esc(n[0])+'</span><span class="l-en">'+esc(n[1])+'</span></b><span><span class="l-ru">'+esc(n[2])+'</span><span class="l-en">'+esc(n[3])+'</span></span></div>';
 }
 function load(){var s=document.createElement("script");s.src="yokai-hd.js?v=3";s.onload=drawY;s.onerror=drawY;document.head.appendChild(s)}
 if(window.YK_HD)drawY();else if("requestIdleCallback"in window)requestIdleCallback(load,{timeout:3000});else setTimeout(load,1500);
})();
