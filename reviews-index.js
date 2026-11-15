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
    reset.addEventListener('click', () => { search.value=''; decade.value=''; update(); search.focus(); });
    document.querySelectorAll('.lg button').forEach(button => button.addEventListener('click', () => setTimeout(update, 0)));
    update();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
