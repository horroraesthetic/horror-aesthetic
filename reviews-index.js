/* HORROR AESTHETIC — searchable review index */
(() => {
  'use strict';
  const init = () => {
    const list = document.querySelector('.ha-review-index');
    const search = document.getElementById('ha-review-search');
    const decade = document.getElementById('ha-review-decade');
    const count = document.getElementById('ha-review-count');
    const reset = document.getElementById('ha-review-reset');
    if (!list || !search || !decade || !count || !reset) return;
    const items = [...list.querySelectorAll('li')];
    const decades = [...new Set(items.map(x => Math.floor(Number(x.dataset.year || 0) / 10) * 10).filter(Boolean))].sort((a,b)=>a-b);
    decades.forEach(y => {
      const option = document.createElement('option');
      option.value = String(y);
      option.textContent = `${y}s`;
      decade.appendChild(option);
    });
    const isRu = () => (document.documentElement.dataset.l || document.documentElement.lang || 'en').startsWith('ru');
    const update = () => {
      const q = search.value.trim().toLocaleLowerCase();
      const d = decade.value;
      let visible = 0;
      items.forEach(item => {
        const matchText = item.textContent.toLocaleLowerCase().includes(q);
        const year = Number(item.dataset.year || 0);
        const matchDecade = !d || (year >= Number(d) && year < Number(d) + 10);
        const show = matchText && matchDecade;
        item.hidden = !show;
        if (show) visible++;
      });
      count.textContent = isRu()
        ? `ПОКАЗАНО ${visible} ИЗ ${items.length} РЕЦЕНЗИЙ`
        : `SHOWING ${visible} OF ${items.length} REVIEWS`;
    };
    search.addEventListener('input', update);
    decade.addEventListener('change', update);
    reset.addEventListener('click', () => {
      search.value='';
      decade.value='';
      search.dispatchEvent(new Event('input',{bubbles:true}));
      decade.dispatchEvent(new Event('change',{bubbles:true}));
      search.focus();
    });
    document.querySelectorAll('.lg button').forEach(button => button.addEventListener('click', () => setTimeout(update, 0)));
    update();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();


/* HORROR AESTHETIC — shareable review index filters */
(() => {
  'use strict';
  const init = () => {
    const list=document.querySelector('.ha-review-index');
    const search=document.getElementById('ha-review-search');
    const decade=document.getElementById('ha-review-decade');
    const controls=document.querySelector('.ha-review-controls');
    if(!list||!search||!decade||!controls||controls.querySelector('.ha-review-share'))return;
    const ru=()=>((document.documentElement.dataset.l||document.documentElement.lang||'en').toLowerCase().startsWith('ru'));
    const share=document.createElement('button');
    share.type='button';share.className='ha-review-share';
    const setLabel=()=>{share.textContent=ru()?'КОПИРОВАТЬ ССЫЛКУ':'COPY VIEW LINK';share.setAttribute('aria-label',ru()?'Скопировать ссылку на текущую выборку':'Copy link to current review selection')};
    setLabel();controls.appendChild(share);
    const params=new URLSearchParams(location.search);
    if(params.has('q'))search.value=params.get('q')||'';
    if(params.has('decade')&&[...decade.options].some(o=>o.value===params.get('decade')))decade.value=params.get('decade');
    const sync=()=>{
      const url=new URL(location.href);
      if(search.value.trim())url.searchParams.set('q',search.value.trim());else url.searchParams.delete('q');
      if(decade.value)url.searchParams.set('decade',decade.value);else url.searchParams.delete('decade');
      history.replaceState(history.state,'',url.pathname+url.search+url.hash);
    };
    search.addEventListener('input',sync);
    decade.addEventListener('change',sync);
    share.addEventListener('click',async()=>{
      const value=location.href;
      try{
        if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);
        else {const field=document.createElement('textarea');field.value=value;field.setAttribute('readonly','');field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.select();document.execCommand('copy');field.remove()}
      }catch(_){}
      share.textContent=ru()?'ССЫЛКА СКОПИРОВАНА':'LINK COPIED';
      window.setTimeout(setLabel,1800);
    });
    document.querySelectorAll('.lg button').forEach(button=>button.addEventListener('click',()=>window.setTimeout(setLabel,0)));
    search.dispatchEvent(new Event('input',{bubbles:true}));
    decade.dispatchEvent(new Event('change',{bubbles:true}));
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
