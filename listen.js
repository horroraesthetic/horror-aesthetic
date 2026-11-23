/* Read-aloud for reviews, essays and stories. Uses the phone's own speech engine (no files, no keys). */
(function(){
 if(!("speechSynthesis"in window)||!window.SpeechSynthesisUtterance)return;
 var root=document.documentElement;
 function lang(){return String(root.dataset.l||root.lang||"en").toLowerCase().indexOf("ru")===0?"ru":"en"}
 function css(){if(document.getElementById("ha-ctl-css"))return;var s=document.createElement("style");s.id="ha-ctl-css";
  s.textContent=".ha-ctl{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 18px}.ha-ctl button{display:inline-flex;align-items:center;gap:8px;padding:10px 13px;font:700 11px/1 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;color:inherit;background:rgba(120,12,22,.35);border:1px solid #c4161f;border-radius:2px;cursor:pointer}.ha-ctl button:hover,.ha-ctl button:focus-visible{box-shadow:0 0 14px rgba(196,22,35,.5)}.ha-ctl button[aria-pressed=true]{background:#a50f1b;color:#fff}.ha-ctl button[hidden]{display:none}.ha-ctl .ha-st{font:11px ui-monospace,Menlo,monospace;letter-spacing:.1em;opacity:.7}";
  document.head.appendChild(s)}
 function bar(){var b=document.getElementById("ha-ctl");if(b)return b;css();
  var h=document.querySelector(".w h1")||document.querySelector("article h1")||document.querySelector("h1");if(!h)return null;
  b=document.createElement("div");b.id="ha-ctl";b.className="ha-ctl";h.parentNode.insertBefore(b,h.nextSibling);return b}
 var SKIP=".top,nav,.rel,footer,#comments,.ha-editorial-nav,.lg,button,.ha-ctl,script,style,svg,.gc,.ha-related";
 function walk(n,out){
  if(n.nodeType===3){out.push(n.data);return}
  if(n.nodeType!==1)return;
  var cs=getComputedStyle(n);if(cs.display==="none"||cs.visibility==="hidden")return;
  if(n.matches&&n.matches("script,style,svg,button"))return;
  for(var c=n.firstChild;c;c=c.nextSibling)walk(c,out)}
 function collect(){
  var rootEl=document.querySelector("article")||document.querySelector(".w")||document.body,out=[];
  var blocks=rootEl.querySelectorAll("h1,h2,h3,p,li,blockquote,.dek");
  for(var i=0;i<blocks.length;i++){var b=blocks[i];
   if(b.closest(SKIP))continue;if(b.querySelector("p,li,h1,h2,h3,blockquote"))continue;
   var parts=[];walk(b,parts);var t=parts.join("").replace(/\s+/g," ").trim();
   if(t.length>1)out.push(/[.!?…:]$/.test(t)?t:t+".")}
  var chunks=[];
  out.join(" ").split(/(?<=[.!?…])\s+/).forEach(function(s){
   while(s.length>220){var k=s.lastIndexOf(",",220);if(k<80)k=s.lastIndexOf(" ",220);chunks.push(s.slice(0,k+1));s=s.slice(k+1).trim()}
   if(s)chunks.push(s)});
  return chunks}
 var chunks=[],idx=0,state="idle",voice=null;
 var L={play:{ru:"Слушать",en:"Listen"},pause:{ru:"Пауза",en:"Pause"},resume:{ru:"Дальше",en:"Resume"},stop:{ru:"Стоп",en:"Stop"}};
 var bp,bs,st;
 var vcache={};function voiceFor(l){if(vcache[l]!==undefined)return vcache[l];var vs=speechSynthesis.getVoices();var m=vs.filter(function(v){return v.lang.toLowerCase().indexOf(l)===0});var v=m.filter(function(x){return x.localService})[0]||m[0]||null;if(vs.length)vcache[l]=v;return v}
 function pickVoice(){vcache={}}
 function label(){var l=lang();bp.querySelector("span").textContent=state==="playing"?L.pause[l]:state==="paused"?L.resume[l]:L.play[l];bp.setAttribute("aria-pressed",state==="playing"?"true":"false");bs.hidden=state==="idle";bs.querySelector("span").textContent=L.stop[l];st.textContent=state==="idle"?"":(idx+1)+" / "+chunks.length}
 function speak(){
  if(state!=="playing")return;
  if(idx>=chunks.length){state="idle";idx=0;label();return}
  var u=new SpeechSynthesisUtterance(chunks[idx]);var cl=/[А-Яа-яЁё]/.test(chunks[idx])?"ru":"en";u.lang=cl==="ru"?"ru-RU":"en-US";var vv=voiceFor(cl);if(vv)u.voice=vv;u.rate=.92;u.pitch=.9;
  u.onend=function(){if(state==="playing"){idx++;label();speak()}};
  u.onerror=function(e){if(e&&(e.error==="interrupted"||e.error==="canceled"))return;state="idle";label()};
  speechSynthesis.speak(u);label()}
 function start(){speechSynthesis.cancel();chunks=collect();if(!chunks.length)return;idx=0;pickVoice();state="playing";speak()}
 function pause(){state="paused";speechSynthesis.cancel();label()}
 function resume(){state="playing";speak()}
 function stop(){state="idle";idx=0;speechSynthesis.cancel();label()}
 function init(){
  var b=bar();if(!b||b.querySelector(".ha-listen"))return;
  bp=document.createElement("button");bp.type="button";bp.className="ha-listen";bp.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7" stroke="currentColor" stroke-width="2" fill="none"/></svg><span></span>';
  bs=document.createElement("button");bs.type="button";bs.hidden=true;bs.innerHTML="<span></span>";
  st=document.createElement("span");st.className="ha-st";
  b.insertBefore(st,b.firstChild);b.insertBefore(bs,b.firstChild);b.insertBefore(bp,b.firstChild);
  bp.addEventListener("click",function(){if(state==="idle")start();else if(state==="playing")pause();else resume()});
  bs.addEventListener("click",stop);label();
  new MutationObserver(function(){if(state!=="idle")stop();else label()}).observe(root,{attributes:true,attributeFilter:["data-l","lang"]});
  speechSynthesis.onvoiceschanged=pickVoice;
  addEventListener("pagehide",function(){speechSynthesis.cancel()})}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
