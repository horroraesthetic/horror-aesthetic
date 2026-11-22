/* PSY tone banner: real corridor frames with a slow dolly, flicker and a rare scare. Only active in the psy tone. */
(function(){
 function go(){
  var box=document.querySelector(".hslides");if(!box||document.getElementById("psy-ph"))return;
  var d=document.createElement("div");d.id="psy-ph";d.setAttribute("aria-hidden","true");
  d.innerHTML='<div class="pp-z"><i class="pp-i pp-a" style="background-image:url(img/psy-a.webp)"></i><i class="pp-i pp-b" style="background-image:url(img/psy-b.webp)"></i><i class="pp-i pp-c" style="background-image:url(img/psy-c.webp)"></i></div><i class="pp-fl"></i><i class="pp-vg"></i><i class="pp-sc"></i><b class="pp-t">03:14 · CAM 2</b>';
  box.appendChild(d);
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){setTimeout(go,300)});else setTimeout(go,300);
})();
