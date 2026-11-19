/* HORROR AESTHETIC — cinematic interaction pack */
(()=>{'use strict';
const html=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ru=()=>((html.dataset.l||html.lang||'en').toLowerCase().startsWith('ru'));
const t=(en,rus)=>ru()?rus:en;
if(!document.querySelector('.ha-cinema-toggle')){
 const b=document.createElement('button');b.type='button';b.className='ha-cinema-toggle';b.setAttribute('aria-pressed','false');b.textContent=t('CINEMA MODE','РЕЖИМ КИНО');
 let on=false;try{on=localStorage.getItem('ha-cinema-mode')==='on'}catch(_){}
 const apply=()=>{html.classList.toggle('ha-cinema-mode',on);b.setAttribute('aria-pressed',String(on));b.textContent=on?t('CINEMA MODE · ON','РЕЖИМ КИНО · ВКЛ'):t('CINEMA MODE','РЕЖИМ КИНО')};
 b.addEventListener('click',()=>{on=!on;try{localStorage.setItem('ha-cinema-mode',on?'on':'off')}catch(_){}apply()});document.body.appendChild(b);apply();
}
const routes=[['Home','Главная','/horror-aesthetic/'],['The Horror Journal','Журнал','/horror-aesthetic/magazine/'],['Film reviews','Рецензии','/horror-aesthetic/reviews/'],['Features & essays','Статьи','/horror-aesthetic/articles/'],['Midnight Gallery','Полночная галерея','/horror-aesthetic/magazine/visual-department.html'],['The Dark Archive','Тёмный архив','/horror-aesthetic/archives/'],['J-Horror','Японский хоррор','/horror-aesthetic/j-horror/'],['Posters','Постеры','/horror-aesthetic/posters/']];
let panel=null;
const close=()=>{if(panel){panel.remove();panel=null}};
const open=()=>{
 if(panel)return;
 const back=document.createElement('div');back.className='ha-command-backdrop';back.innerHTML='<section class="ha-command" role="dialog" aria-modal="true" aria-label="Quick navigation"><input type="search" autocomplete="off" placeholder="'+t('Search sections…','Поиск разделов…')+'"><nav class="ha-command-list"></nav><p class="ha-command-hint">'+t('ENTER — open · ESC — close','ENTER — открыть · ESC — закрыть')+'</p></section>';
 const input=back.querySelector('input'),list=back.querySelector('nav');
 const render=()=>{const q=input.value.trim().toLowerCase();list.replaceChildren();routes.filter(r=>(r[0]+' '+r[1]).toLowerCase().includes(q)).forEach(r=>{const a=document.createElement('a');a.href=r[2];a.innerHTML='<span>'+ (ru()?r[1]:r[0])+'</span><span>↗</span>';list.appendChild(a)})};
 input.addEventListener('input',render);back.addEventListener('click',e=>{if(e.target===back)close()});back.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close()}if(e.key==='Enter'){const first=list.querySelector('a');if(first)location.href=first.href}});
 document.body.appendChild(back);panel=back;render();input.focus();
};
if(!document.querySelector('.ha-command-trigger')){const b=document.createElement('button');b.type='button';b.className='ha-command-trigger';b.textContent=t('⌕ MENU','⌕ МЕНЮ');b.addEventListener('click',open);document.body.appendChild(b)}
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();open()}if(e.key==='Escape')close()});
if(!reduce&&'IntersectionObserver'in window){const targets=document.querySelectorAll('main h2,article h2,.card,.feature,.section,.archive-lead,.rel');const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('ha-fx-visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px 0px'});targets.forEach(el=>{el.classList.add('ha-fx-reveal');io.observe(el)})}
if(!reduce&&matchMedia('(pointer: fine)').matches){let raf=0;addEventListener('pointermove',e=>{if(raf)return;raf=requestAnimationFrame(()=>{html.style.setProperty('--ha-pointer-x',e.clientX+'px');html.style.setProperty('--ha-pointer-y',e.clientY+'px');raf=0})},{passive:true})}
if(!reduce&&matchMedia('(pointer: coarse)').matches){addEventListener('pointerdown',e=>{if(e.target.closest('a,button,input,textarea,select'))return;for(let i=0;i<7;i++){const s=document.createElement('i');s.className='ha-fx-shard';s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';const a=(Math.PI*2*i/7)+Math.random()*.3,d=24+Math.random()*34;s.style.setProperty('--dx',Math.cos(a)*d+'px');s.style.setProperty('--dy',Math.sin(a)*d+'px');document.body.appendChild(s);s.addEventListener('animationend',()=>s.remove(),{once:true})}},{passive:true})}
})();