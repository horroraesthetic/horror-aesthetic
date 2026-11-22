/* Opt-in jump scare: footer button -> warning -> video. Nothing loads until the user agrees. */
(function(){
 function init(){
  var nav=document.getElementById("ft-legal");if(!nav||document.getElementById("scr-btn"))return;
  var b=document.createElement("button");b.type="button";b.id="scr-btn";b.className="scr-btn";
  b.innerHTML='<span class="l-ru">Не нажимать</span><span class="l-en">Do not press</span>';
  nav.parentNode.insertBefore(b,nav.nextSibling);
  var ov=null,v=null;
  function close(){if(!ov)return;try{v&&v.pause()}catch(e){}ov.remove();ov=null;v=null;document.documentElement.classList.remove("scr-open");b.focus()}
  b.addEventListener("click",function(){
   ov=document.createElement("div");ov.className="scr-ov";ov.setAttribute("role","dialog");ov.setAttribute("aria-modal","true");
   ov.innerHTML='<div class="scr-w"><div class="scr-k">警告 / WARNING</div>'
   +'<p class="l-ru">Дальше будет скример: резкий громкий звук и вспышки. Не смотри, если у тебя слабое сердце, светочувствительная эпилепсия, рядом дети или ты в наушниках на полной громкости.</p>'
   +'<p class="l-en">A jump scare follows: sudden loud sound and flashes. Skip it if you have a heart condition, photosensitive epilepsy, kids nearby, or headphones on full volume.</p>'
   +'<div class="scr-a"><button type="button" class="scr-go"><span class="l-ru">Всё равно смотреть</span><span class="l-en">Watch anyway</span></button><button type="button" class="scr-no"><span class="l-ru">Назад</span><span class="l-en">Go back</span></button></div></div>';
   document.body.appendChild(ov);document.documentElement.classList.add("scr-open");
   ov.querySelector(".scr-no").addEventListener("click",close);
   ov.addEventListener("keydown",function(e){if(e.key==="Escape")close()});
   ov.querySelector(".scr-no").focus();
   ov.querySelector(".scr-go").addEventListener("click",function(){
    var w=ov.querySelector(".scr-w");w.innerHTML="";
    v=document.createElement("video");v.src="/horror-aesthetic/media/scream.mp4";v.playsInline=true;v.setAttribute("playsinline","");v.className="scr-v";
    v.addEventListener("ended",close);v.addEventListener("error",close);
    ov.classList.add("scr-play");ov.appendChild(v);
    var x=document.createElement("button");x.type="button";x.className="scr-x";x.textContent="✕";x.setAttribute("aria-label","Close");x.addEventListener("click",close);ov.appendChild(x);
    var p=v.play();if(p&&p.catch)p.catch(function(){v.controls=true});
   });
  });
 }
 function t(){setTimeout(init,600);setTimeout(init,2500)}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",t);else t();
})();
