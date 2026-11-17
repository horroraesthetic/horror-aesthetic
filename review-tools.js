/* HORROR AESTHETIC — review and essay editorial helpers */
(() => {
  'use strict';
  const ready = () => {
    const wrap = document.querySelector('.w');
    if (!wrap) return;
    const lang = () => (document.documentElement.dataset.l || document.documentElement.lang || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';
    const top = wrap.querySelector('.top');
    if (top && !wrap.querySelector('.ha-editorial-nav')) {
      const nav = document.createElement('nav');
      nav.className = 'ha-editorial-nav';
      nav.setAttribute('aria-label', 'Horror Aesthetic sections');
      const links = [
        ['/horror-aesthetic/','HOME','ГЛАВНАЯ'],
        ['/horror-aesthetic/reviews/','REVIEWS','РЕЦЕНЗИИ'],
        ['/horror-aesthetic/j-horror/','J-HORROR','J-HORROR'],
        ['/horror-aesthetic/folklore/','FOLKLORE','ФОЛЬКЛОР'],
        ['/horror-aesthetic/archives/','DARK ARCHIVE','АРХИВ'],
        ['/horror-aesthetic/articles/','ESSAYS','СТАТЬИ']
      ];
      links.forEach(([href,en,ru]) => {
        const a = document.createElement('a');
        a.href = href;
        a.textContent = lang() === 'ru' ? ru : en;
        nav.appendChild(a);
      });
      top.insertAdjacentElement('afterend', nav);
    }
    const article = wrap.querySelector('article') || wrap;
    const heading = article.querySelector('h1');
    if (heading && !article.querySelector('.ha-readtime')) {
      const text = article.innerText || article.textContent || '';
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      const minutes = Math.max(1, Math.ceil(words / 220));
      const meta = document.createElement('div');
      meta.className = 'ha-readtime';
      meta.textContent = lang() === 'ru' ? `ВРЕМЯ ЧТЕНИЯ · ОКОЛО ${minutes} МИН.` : `READING TIME · ABOUT ${minutes} MIN`;
      heading.insertAdjacentElement('afterend', meta);
    }
    const list = wrap.querySelector('h1 + ul');
    if (list) list.classList.add('ha-article-list');
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
})();
