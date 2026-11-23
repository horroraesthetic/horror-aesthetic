/* "Install app" button in the footer row. Android Chrome uses the install prompt; iPhone gets a short hint. */
(function(){
 var root=document.documentElement,dp=null;
 function lang(){return String(root.dataset.l||root.lang||"en").toLowerCase().indexOf("ru")===0?"ru":"en"}
 var standalone=(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)||navigator.standalone;
 if(standalone)return;
 var ios=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream;
 addEventListener("beforeinstallprompt",function(e){e.preventDefault();dp=e;show()});
 addEventListener("appinstalled",function(){var b=document.getElementById("ha-inst");if(b)b.remove()});
 function show(){
  var row=document.getElementById("amb-row");if(!row){setTimeout(show,900);if(!show.n)show.n=0;if(++show.n>8)return;return}
  if(document.getElementById("ha-inst"))return;
  var b=document.createElement("button");b.type="button";b.id="ha-inst";
  b.innerHTML='<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 20h14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><span></span>';
  function lab(){b.querySelector("span").textContent=lang()==="ru"?"Установить":"Install app"}
  lab();new MutationObserver(lab).observe(root,{attributes:true,attributeFilter:["data-l","lang"]});
  b.addEventListener("click",function(){
   if(dp){dp.prompt();dp.userChoice.finally(function(){dp=null;b.remove()});return}
   alert(lang()==="ru"?"Нажмите «Поделиться» и выберите «На экран Домой».":"Tap Share, then Add to Home Screen.")});
  row.appendChild(b)}
 function t(){if(dp||ios)show()}
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){setTimeout(t,1200)});else setTimeout(t,1200);
 addEventListener("beforeinstallprompt",function(){setTimeout(show,1200)});
})();
