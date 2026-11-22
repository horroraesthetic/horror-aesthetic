/* Comments via giscus (GitHub Discussions). Loads nothing until the reader taps the button.
   Stays invisible until HA_GISCUS.categoryId is filled in. */
(function(){
 var C=window.HA_GISCUS={repo:"horroraesthetic/horror-aesthetic",repoId:"R_kgDOVrlz_w",category:"Announcements",categoryId:"DIC_kwDOVrlz_84DLvwW"};
 if(!C.categoryId)return;
 function lang(){return document.documentElement.dataset.l==="ru"?"ru":"en"}
 function init(){
  var art=document.querySelector("article")||document.querySelector(".w");if(!art||document.getElementById("ha-cm"))return;
  var s=document.createElement("section");s.id="ha-cm";s.className="ha-cm";
  s.innerHTML='<h2><span class="l-ru">Обсуждение</span><span class="l-en">Discussion</span></h2><p class="cm-n"><span class="l-ru">Комментарии работают через GitHub: нужен аккаунт GitHub. Правила простые: без спойлеров в первых строках и без оскорблений.</span><span class="l-en">Comments run on GitHub, so a GitHub account is required. House rules: no spoilers in the first lines, no abuse.</span></p><button type="button" class="cm-b"><span class="l-ru">Показать обсуждение</span><span class="l-en">Show discussion</span></button><div class="cm-box"></div>';
  art.parentNode.insertBefore(s,art.nextSibling);
  s.querySelector(".cm-b").addEventListener("click",function(){
   this.remove();var g=document.createElement("script");g.src="https://giscus.app/client.js";g.async=true;g.crossOrigin="anonymous";
   var a={"data-repo":C.repo,"data-repo-id":C.repoId,"data-category":C.category,"data-category-id":C.categoryId,"data-mapping":"pathname","data-strict":"0","data-reactions-enabled":"1","data-emit-metadata":"0","data-input-position":"top","data-theme":document.documentElement.dataset.tone==="tomie"?"light":"dark_dimmed","data-lang":lang(),"data-loading":"lazy"};
   for(var k in a)g.setAttribute(k,a[k]);s.querySelector(".cm-box").appendChild(g);
  });
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
