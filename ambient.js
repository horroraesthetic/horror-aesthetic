/* Night sound (synthesized, no files). Opt-in: starts only on a tap. */
(function(){
 var root=document.documentElement;
 function st(k){try{return localStorage.getItem(k)}catch(e){return null}}
 function sv(k,v){try{localStorage.setItem(k,v)}catch(e){}}
 /* ---------- sound ---------- */
 var ac=null,master=null,nodes=[],timers=[],playing=false;
 function noiseBuf(sec){var n=ac.sampleRate*sec,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;return b}
 function ping(f,g,dur){var o=ac.createOscillator(),e=ac.createGain();o.type="sine";o.frequency.value=f;var t=ac.currentTime;e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(g,t+.01);e.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(e);e.connect(master);o.start(t);o.stop(t+dur+.1)}
 function furin(){if(!playing)return;var base=[2093,2349,2637,3136][Math.floor(Math.random()*4)],k=1+Math.floor(Math.random()*3);for(var i=0;i<k;i++)(function(i){setTimeout(function(){if(playing){ping(base*(i?1.5:1),.03,2.4);ping(base*2.01,.012,1.2)}},i*(180+Math.random()*220))})(i);timers.push(setTimeout(furin,3500+Math.random()*8000))}
 function thunder(){if(!playing)return;var s=ac.createBufferSource();s.buffer=noiseBuf(3);var f=ac.createBiquadFilter();f.type="lowpass";f.frequency.value=140;var e=ac.createGain(),t=ac.currentTime;e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.35,t+.8);e.gain.exponentialRampToValueAtTime(.001,t+3.2);s.connect(f);f.connect(e);e.connect(master);s.start(t);s.stop(t+3.3);timers.push(setTimeout(thunder,45000+Math.random()*60000))}
 function start(){
  var C=window.AudioContext||window.webkitAudioContext;if(!C)return false;
  if(!ac){ac=new C();master=ac.createGain();master.gain.value=0;master.connect(ac.destination)}
  ac.resume();
  var r=ac.createBufferSource();r.buffer=noiseBuf(4);r.loop=true;var bp=ac.createBiquadFilter();bp.type="bandpass";bp.frequency.value=2200;bp.Q.value=.5;var hp=ac.createBiquadFilter();hp.type="highpass";hp.frequency.value=600;var rg=ac.createGain();rg.gain.value=.07;r.connect(bp);bp.connect(hp);hp.connect(rg);rg.connect(master);r.start();nodes.push(r);
  var lo=ac.createBiquadFilter();lo.type="lowpass";lo.frequency.value=220;var dg=ac.createGain();dg.gain.value=.05;lo.connect(dg);dg.connect(master);
  [55,55.6,82.5].forEach(function(f){var o=ac.createOscillator();o.type="sawtooth";o.frequency.value=f;o.connect(lo);o.start();nodes.push(o)});
  var l=ac.createOscillator(),lg=ac.createGain();l.frequency.value=.09;lg.gain.value=.03;l.connect(lg);lg.connect(dg.gain);l.start();nodes.push(l);
  var t=ac.currentTime;master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(master.gain.value,t);master.gain.linearRampToValueAtTime(.9,t+2.5);
  playing=true;timers.push(setTimeout(furin,1500));timers.push(setTimeout(thunder,20000));return true;
 }
 function stop(){
  playing=false;timers.forEach(clearTimeout);timers=[];
  if(master){var t=ac.currentTime;master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(master.gain.value,t);master.gain.linearRampToValueAtTime(0,t+.8)}
  var n=nodes;nodes=[];setTimeout(function(){n.forEach(function(x){try{x.stop()}catch(e){}})},900);
 }
 document.addEventListener("visibilitychange",function(){if(!ac)return;if(document.hidden)ac.suspend();else if(playing)ac.resume()});
 /* ---------- buttons ---------- */
 var bs,bv;
 function sync(){if(bs)bs.setAttribute("aria-pressed",playing?"true":"false");}
 function init(){
  var nav=document.getElementById("ft-legal");if(!nav||document.getElementById("amb-row"))return;
  var row=document.createElement("div");row.id="amb-row";row.className="amb-row";
  row.innerHTML='<button type="button" id="amb-s" aria-pressed="false"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path class="w" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg><span class="l-ru">Звук ночи</span><span class="l-en">Night sound</span></button>'
  ;
  nav.parentNode.insertBefore(row,nav.nextSibling);
  bs=row.querySelector("#amb-s");
  bs.addEventListener("click",function(){if(playing)stop();else start();sync()});
    sync();
 }
 function t(){setTimeout(init,700);setTimeout(init,2600)}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",t);else t();
 window.haAmbient={sound:function(on){if(on)start();else stop();sync()}};
})();
