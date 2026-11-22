/* Lollipop rating symbols (replace moons in the film rating) */
(function(){
function spiral(cx,cy,turns,rmax){var d="M"+cx+" "+cy,n=turns*16,i,a,r;for(i=1;i<=n;i++){a=i/16*6.2832;r=rmax*i/n;d+="L"+(cx+Math.cos(a)*r).toFixed(2)+" "+(cy+Math.sin(a)*r).toFixed(2)}return d}
var cx=24,cy=18,R=14.5;
function stick(c){return '<rect x="22.6" y="31" width="2.8" height="15.5" rx="1.4" fill="'+c+'" stroke="#1a0a0c" stroke-width=".5"/>'}
function candy(base,swirl,edge,shine,extra){
 return stick("#efe4dc")+'<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="'+base+'" stroke="'+edge+'" stroke-width="1"/>'
 +'<path d="'+spiral(cx,cy,3,R-1.6)+'" fill="none" stroke="'+swirl+'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
 +'<path d="M14 12.5A11 11 0 0 1 22 7.4" fill="none" stroke="'+shine+'" stroke-width="1.6" stroke-linecap="round" opacity=".75"/>'+(extra||"")}
var s5=candy("#e01c2e","#ffd3d6","#5a0610","#fff")+'<path d="M20 31.6l4 2.4 4-2.4" fill="none" stroke="#c7121f" stroke-width="1.4" stroke-linecap="round"/>';
var s4=candy("#b81524","#f1a2a8","#4a0510","#ffd9db");
var s3=candy("#8a4a48","#cfa6a0","#3a1414","#e8cfcb");
var s2=candy("#6a6b70","#a3a4a8","#202124","#c8c9cc",'<path d="M30 8l-3 5 4 2-3 5 3 3" fill="none" stroke="#17181b" stroke-width="1.1" stroke-linecap="round"/><path d="M36.5 20.5a5.2 5.2 0 0 1-3.6 8.6" fill="none" stroke="#0b0c0e" stroke-width="2.4"/>');
var e='<g opacity=".8">'+stick("#5d5558")+'<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="#0d0a0e" stroke="#6b3a42" stroke-width="1" stroke-dasharray="2.2 1.6"/><path d="'+spiral(cx,cy,3,R-2)+'" fill="none" stroke="#3a2b30" stroke-width="1.2" stroke-linecap="round"/></g>';
var h='<g></g>';

function scene(c1,glow,extra){return '<rect width="160" height="64" fill="#05060b"/><circle cx="128" cy="28" r="46" fill="'+glow+'" opacity=".5"/><g transform="translate(96 -4) rotate(14 24 24) scale(1.25)"><use href="#'+c1+'" width="48" height="48"/></g>'+(extra||"")}
function sparks(c){var o="",i,x,y;for(i=0;i<9;i++){x=(i*47+13)%150;y=(i*29+7)%58;o+='<circle cx="'+x+'" cy="'+y+'" r="'+(i%3?0.6:1)+'" fill="'+c+'" opacity=".55"/>'}return o}
function sym(id,b){return '<symbol id="'+id+'" viewBox="0 0 48 48">'+b+'</symbol>'}
function build(){if(document.getElementById("lp-defs"))return;var d=document.createElement("div");d.id="lp-defs";d.setAttribute("aria-hidden","true");d.style.cssText="position:absolute;width:0;height:0;overflow:hidden";
 d.innerHTML='<svg width="0" height="0"><defs>'+sym("lp5",s5)+sym("lp4",s4)+sym("lp3",s3)+sym("lp2",s2)+sym("lpE",e)+'<symbol id="lsc5" viewBox="0 0 160 64">'+scene("lp5","#6a0a14",sparks("#ff5a66"))+'</symbol><symbol id="lsc4" viewBox="0 0 160 64">'+scene("lp4","#4a0a12",sparks("#d44"))+'</symbol><symbol id="lsc3" viewBox="0 0 160 64">'+scene("lp3","#2a1a1a",sparks("#a88"))+'</symbol><symbol id="lsc2" viewBox="0 0 160 64">'+scene("lp2","#15161a",sparks("#777"))+'</symbol></defs></svg>';(document.body||document.documentElement).appendChild(d)}

/* Animated plate scene (inline, one per opened review) */
var PP={5:{b:"#e01c2e",w:"#ffd3d6",e:"#5a0610",h:"#fff",g:"#7a0a16",k:"#ff5a66"},4:{b:"#b81524",w:"#f1a2a8",e:"#4a0510",h:"#ffd9db",g:"#4a0a12",k:"#d44"},3:{b:"#8a4a48",w:"#cfa6a0",e:"#3a1414",h:"#e8cfcb",g:"#2a1a1a",k:"#a88"},2:{b:"#6a6b70",w:"#a3a4a8",e:"#202124",h:"#c8c9cc",g:"#15161a",k:"#777"}};
function hair(){return '<g class="lf-hair" fill="none" stroke="#08080c" stroke-width="1.3" stroke-linecap="round" opacity=".92"><path d="M10 -2C14 12 6 22 12 40S9 58 13 66"/><path d="M17 -2C22 14 14 26 19 44S17 60 20 66" opacity=".8"/><path d="M4 -2C9 10 1 24 6 36" opacity=".7"/></g><g class="lf-hair lf-hair2" fill="none" stroke="#1a1c25" stroke-width=".5" stroke-linecap="round"><path d="M11 0C15 13 7 23 13 41" /><path d="M18 0C23 15 15 27 20 45"/></g>'}
function eye(t){var c=t===5?"#ff2a3c":"#c44";return '<g class="lf-eye"><path d="M17.5 18Q24 12.6 30.5 18Q24 23.4 17.5 18Z" fill="#f4eee8" stroke="#1a0608" stroke-width=".6"/><g class="lf-pup"><circle cx="24" cy="18" r="2.9" fill="'+c+'"/><circle cx="24" cy="18" r="1.3" fill="#0a0305"/></g><path class="lf-lid" d="M17.5 18Q24 12.6 30.5 18Q24 14 17.5 18Z" fill="'+PP[t].b+'"/></g>'}
var lfN=0;window.lpScene=function(t){var q=PP[t],gid="lfg"+(++lfN);
 var o='<svg viewBox="0 0 160 64" aria-hidden="true" class="lf lf'+t+'"><defs><radialGradient id="'+gid+'"><stop offset="0" stop-color="'+q.g+'" stop-opacity="1"/><stop offset=".6" stop-color="'+q.g+'" stop-opacity=".45"/><stop offset="1" stop-color="'+q.g+'" stop-opacity="0"/></radialGradient></defs><rect width="160" height="64" fill="#05060b"/>'
 +'<circle class="lf-glow" cx="128" cy="30" r="50" fill="url(#'+gid+')"/><circle class="lf-glow lf-glow2" cx="128" cy="30" r="30" fill="url(#'+gid+')"/>'
 +hair()
 +'<g transform="translate(96 -4) rotate(14 24 24) scale(1.25)"><g class="lf-sway">'
 +'<rect x="22.6" y="31" width="2.8" height="15.5" rx="1.4" fill="#efe4dc" stroke="#1a0a0c" stroke-width=".5"/>'
 +'<circle cx="24" cy="18" r="14.5" fill="'+q.b+'" stroke="'+q.e+'" stroke-width="1"/>'
 +'<path class="lf-spin" d="'+spiral(24,18,3,12.9)+'" fill="none" stroke="'+q.w+'" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
 +(t>=4?eye(t):'')
 +'<path d="M14 12.5A11 11 0 0 1 22 7.4" fill="none" stroke="'+q.h+'" stroke-width="1.6" stroke-linecap="round" opacity=".75"/>'
 +(t===5?'<path class="lf-drip" d="M24 32q1.6 3 0 4.2q-1.6-1.2 0-4.2z" fill="#c4161f"/>':'')
 +(t===2?'<path d="M30 8l-3 5 4 2-3 5 3 3" fill="none" stroke="#17181b" stroke-width="1.1" stroke-linecap="round"/><path d="M36.5 20.5a5.2 5.2 0 0 1-3.6 8.6" fill="none" stroke="#0b0c0e" stroke-width="2.4"/>':'')
 +'</g></g>';
 var i,x,y;for(i=0;i<(t<4?6:3);i++){x=(i*53+17)%150;y=(i*31)%40;o+='<circle class="lf-sp lf-sp'+(i%3)+'" cx="'+x+'" cy="'+y+'" r="'+(i%2?.7:1.1)+'" fill="'+q.k+'" opacity=".55"/>'}
 o+='<rect class="lf-scan" width="160" height="2.4" fill="#fff" opacity=".06"/></svg>';
 return o};
window.lpUse=function(t,half){build();if(t==="E")return '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#lpE"/></svg>';
 if(half)return '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#lpE"/><svg x="0" y="0" width="24" height="48" viewBox="0 0 24 48"><use href="#lp'+t+'" width="48" height="48"/></svg></svg>';
 return '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#lp'+t+'"/></svg>'};
})();
