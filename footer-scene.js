/* Footer scene v2: extra animated layers over .jx-foot (light: transform/opacity only) */
(function(){
 function go(){
  var f=document.querySelector(".jx-foot");if(!f||f.querySelector(".fs2"))return;
  var n=0,o='<svg class="fs2" viewBox="0 0 360 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true"><defs>'
  +'<radialGradient id="fsG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff3a48" stop-opacity=".75"/><stop offset="1" stop-color="#ff3a48" stop-opacity="0"/></radialGradient>'
  +'<radialGradient id="fsB" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d6fff4" stop-opacity=".95"/><stop offset=".4" stop-color="#7fe8d0" stop-opacity=".45"/><stop offset="1" stop-color="#7fe8d0" stop-opacity="0"/></radialGradient>'
  +'<linearGradient id="fsW" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#f3efe8"/><stop offset="1" stop-color="#cfc9c0" stop-opacity="0"/></linearGradient>'
  +'<linearGradient id="fsR" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd0d4" stop-opacity="0"/><stop offset="1" stop-color="#ffd0d4" stop-opacity=".7"/></linearGradient></defs>';
  /* stars */
  for(var i=0;i<16;i++){var sx=(i*47+13)%350+4,sy=(i*29+7)%70+4;o+='<circle class="fs-st" style="--d:-'+(i*.7).toFixed(1)+'s" cx="'+sx+'" cy="'+sy+'" r="'+(i%4?.5:.8)+'" fill="#ffe6e8"/>'}
  /* moon: breathing aura, slit eye that opens, blood tear */
  o+='<circle class="fs-aura" cx="268" cy="58" r="52" fill="url(#fsG)"/>'
  +'<g class="fs-eye"><path d="M252 58Q268 44 284 58Q268 72 252 58Z" fill="#14030a" stroke="#ff5a64" stroke-width=".6"/><ellipse class="fs-pup" cx="268" cy="58" rx="2.2" ry="9" fill="#ff2a3a"/><path d="M255 58Q268 49 281 58" stroke="#ffb0b6" stroke-width=".4" fill="none" opacity=".6"/></g>'
  +'<path class="fs-tear" d="M268 70v10" stroke="#ff2a3a" stroke-width="1.2" stroke-linecap="round"/>';
  /* ghost in the gate */
  o+='<g class="fs-ghost"><g class="fs-gsw"><ellipse cx="180" cy="190" rx="14" ry="3" fill="#000" opacity=".4"/><path d="M168 186Q169 150 172 134Q180 128 188 134Q191 150 192 186Q186 182 180 187Q174 182 168 186Z" fill="url(#fsW)"/>'
  +'<path d="M170 124Q168 112 174 106Q180 102 186 106Q192 112 190 124Q191 150 188 168 186 152 184 138 180 140 176 138 174 152 172 168 169 150 170 124Z" fill="#050204"/>'
  +'<path d="M174 130Q172 150 171 172M178 134Q177 156 176 178M183 134Q184 156 184 176M187 130Q189 150 189 170" stroke="#050204" stroke-width="1" fill="none"/>'
  +'<circle class="fs-gey" cx="181.5" cy="121" r=".9" fill="#ff3a48"/></g></g>';
  /* lantern halos */
  [68,292].forEach(function(x,i){o+='<circle class="fs-lh" style="--d:-'+(i*1.3)+'s" cx="'+x+'" cy="168" r="20" fill="url(#fsG)"/>'});
  /* hitodama */
  [[40,150,0],[324,140,-3],[200,120,-6],[120,132,-9]].forEach(function(q,i){o+='<g class="fs-hit" style="--d:'+q[2]+'s;--x:'+(i%2?-16:16)+'px"><circle cx="'+q[0]+'" cy="'+q[1]+'" r="9" fill="url(#fsB)"/><path d="M'+q[0]+' '+(q[1]-4)+'q3 3 0 7q-3-4 0-7Z" fill="#effffa"/><path d="M'+q[0]+' '+(q[1]+2)+'q-2 6 2 10" stroke="#7fe8d0" stroke-width=".5" fill="none" opacity=".6"/></g>'});
  /* rain */
  for(i=0;i<18;i++){var rx=(i*23+5)%360;o+='<rect class="fs-rn" style="--d:-'+((i*.37)%2.2).toFixed(2)+'s;--t:'+(1.3+(i%5)*.18).toFixed(2)+'s" x="'+rx+'" y="0" width=".7" height="'+(7+i%4*2)+'" fill="url(#fsR)"/>'}
  /* ground mist */
  o+='<ellipse class="fs-mi" cx="60" cy="176" rx="120" ry="9" fill="#ffd0d4" opacity=".07"/><ellipse class="fs-mi fs-mi2" cx="300" cy="182" rx="130" ry="8" fill="#ffd0d4" opacity=".06"/>';
  /* falling petals */
  for(i=0;i<7;i++){o+='<path class="fs-pt" style="--d:-'+(i*1.9).toFixed(1)+'s;--x:'+(i%2?18:-18)+'px" transform="translate('+(30+i*47)+' 0)" d="M0 0q2.4 2.2 0 6-2.4-3.8 0-6Z" fill="#e3202f"/>'}
  o+='</svg>';
  f.insertAdjacentHTML("beforeend",o);
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){setTimeout(go,60)});else setTimeout(go,60);
 window.addEventListener("load",function(){setTimeout(go,300)});
})();
