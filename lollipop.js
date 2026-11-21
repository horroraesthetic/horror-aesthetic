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
function sym(id,b){return '<symbol id="'+id+'" viewBox="0 0 48 48">'+b+'</symbol>'}
function build(){if(document.getElementById("lp-defs"))return;var d=document.createElement("div");d.id="lp-defs";d.setAttribute("aria-hidden","true");d.style.cssText="position:absolute;width:0;height:0;overflow:hidden";
 d.innerHTML='<svg width="0" height="0"><defs>'+sym("lp5",s5)+sym("lp4",s4)+sym("lp3",s3)+sym("lp2",s2)+sym("lpE",e)+'</defs></svg>';(document.body||document.documentElement).appendChild(d)}
window.lpUse=function(t,half){build();if(t==="E")return '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#lpE"/></svg>';
 if(half)return '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#lpE"/><svg x="0" y="0" width="24" height="48" viewBox="0 0 24 48"><use href="#lp'+t+'" width="48" height="48"/></svg></svg>';
 return '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#lp'+t+'"/></svg>'};
})();
