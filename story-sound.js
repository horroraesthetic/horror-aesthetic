/* Quiet synthesized night sound for story pages. Opt-in: starts only on a tap. */
(function(){
 var root=document.documentElement,ac=null,master=null,nodes=[],timers=[],on=false,btn;
 function lang(){return String(root.dataset.l||root.lang||"en").toLowerCase().indexOf("ru")===0?"ru":"en"}
 function css(){if(document.getElementById("ha-ctl-css"))return;var s=document.createElement("style");s.id="ha-ctl-css";
  s.textContent=".ha-ctl{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 18px}.ha-ctl button{display:inline-flex;align-items:center;gap:8px;padding:10px 13px;font:700 11px/1 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;color:inherit;background:rgba(120,12,22,.35);border:1px solid #c4161f;border-radius:2px;cursor:pointer}.ha-ctl button:hover,.ha-ctl button:focus-visible{box-shadow:0 0 14px rgba(196,22,35,.5)}.ha-ctl button[aria-pressed=true]{background:#a50f1b;color:#fff}";
  document.head.appendChild(s)}
 function bar(){var b=document.getElementById("ha-ctl");if(b)return b;css();var h=document.querySelector(".w h1")||document.querySelector("h1");if(!h)return null;b=document.createElement("div");b.id="ha-ctl";b.className="ha-ctl";h.parentNode.insertBefore(b,h.nextSibling);return b}
 function nb(sec){var n=ac.sampleRate*sec,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;return b}
 function thud(f,g,t0,dur){var o=ac.createOscillator(),e=ac.createGain();o.type="sine";o.frequency.setValueAtTime(f,t0);o.frequency.exponentialRampToValueAtTime(f*.5,t0+dur);e.gain.setValueAtTime(0,t0);e.gain.linearRampToValueAtTime(g,t0+.01);e.gain.exponentialRampToValueAtTime(.0001,t0+dur);o.connect(e);e.connect(master);o.start(t0);o.stop(t0+dur+.05)}
 function heart(){if(!on)return;var t=ac.currentTime;thud(62,.5,t,.28);thud(54,.38,t+.24,.3);timers.push(setTimeout(heart,14000+Math.random()*14000))}
 function knock(){if(!on)return;var k=2+Math.floor(Math.random()*3);for(var i=0;i<k;i++){var t=ac.currentTime+i*.55,s=ac.createBufferSource();s.buffer=nb(.3);var f=ac.createBiquadFilter();f.type="lowpass";f.frequency.value=380;var e=ac.createGain();e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.55,t+.005);e.gain.exponentialRampToValueAtTime(.0001,t+.14);s.connect(f);f.connect(e);e.connect(master);s.start(t);s.stop(t+.3)}timers.push(setTimeout(knock,26000+Math.random()*30000))}
 function start(){
  var C=window.AudioContext||window.webkitAudioContext;if(!C)return;
  if(!ac){ac=new C();master=ac.createGain();master.gain.value=0;master.connect(ac.destination)}
  ac.resume();
  var lo=ac.createBiquadFilter();lo.type="lowpass";lo.frequency.value=180;var dg=ac.createGain();dg.gain.value=.07;lo.connect(dg);dg.connect(master);
  [49,49.5,73.4].forEach(function(f){var o=ac.createOscillator();o.type="sawtooth";o.frequency.value=f;o.connect(lo);o.start();nodes.push(o)});
  var w=ac.createBufferSource();w.buffer=nb(4);w.loop=true;var bp=ac.createBiquadFilter();bp.type="bandpass";bp.frequency.value=700;bp.Q.value=.6;var wg=ac.createGain();wg.gain.value=.03;w.connect(bp);bp.connect(wg);wg.connect(master);w.start();nodes.push(w);
  var l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=.07;lg.gain.value=.025;l.connect(lg);lg.connect(wg.gain);l.start();nodes.push(l);
  var t=ac.currentTime;master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(master.gain.value,t);master.gain.linearRampToValueAtTime(.8,t+3);
  on=true;timers.push(setTimeout(heart,4000));timers.push(setTimeout(knock,16000))}
 function stop(){on=false;timers.forEach(clearTimeout);timers=[];if(master){var t=ac.currentTime;master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(master.gain.value,t);master.gain.linearRampToValueAtTime(0,t+.8);var ns=nodes;nodes=[];setTimeout(function(){ns.forEach(function(n){try{n.stop()}catch(e){}})},900)}}
 function label(){var l=lang();btn.querySelector("span").textContent=on?(l==="ru"?"Звук: выкл":"Sound: off"):(l==="ru"?"Звук ночи":"Night sound");btn.setAttribute("aria-pressed",on?"true":"false")}
 function init(){var b=bar();if(!b||b.querySelector(".ha-snd"))return;
  btn=document.createElement("button");btn.type="button";btn.className="ha-snd";btn.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M3 12h3l2-6 3 12 3-9 2 5 2-2h3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span>';
  b.appendChild(btn);btn.addEventListener("click",function(){if(on)stop();else start();label()});label();
  new MutationObserver(label).observe(root,{attributes:true,attributeFilter:["data-l","lang"]});
  document.addEventListener("visibilitychange",function(){if(document.hidden&&on){stop();label()}});
  addEventListener("pagehide",function(){if(on)stop()})}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
