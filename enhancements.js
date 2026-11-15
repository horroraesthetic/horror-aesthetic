/* HORROR AESTHETIC — site-wide reading tools */
(() => {
  'use strict';
  const ru = (document.documentElement.lang || '').toLowerCase().startsWith('ru') ||
             document.documentElement.dataset.l === 'ru';
  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const main = document.querySelector('main, article, .w, #spot, .wrap') || document.body;
  if (!main.id) main.id = 'ha-main-content';

  const skip = document.createElement('a');
  skip.className = 'ha-skip-link';
  skip.href = '#' + main.id;
  skip.textContent = ru ? 'Перейти к содержимому' : 'Skip to content';
  document.body.prepend(skip);

  const progress = document.createElement('div');
  progress.id = 'ha-reading-progress';
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', ru ? 'Прогресс чтения' : 'Reading progress');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', '100');
  const fill = document.createElement('span');
  progress.appendChild(fill);
  document.body.appendChild(progress);

  let scheduled = false;
  const update = () => {
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - window.innerHeight);
    const value = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
    fill.style.width = value.toFixed(2) + '%';
    progress.setAttribute('aria-valuenow', String(Math.round(value)));
    scheduled = false;
    topButton.classList.toggle('is-visible', window.scrollY > 420);
  };
  const onScroll = () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(update);
    }
  };

  let topButton = document.getElementById('totop');
  if (!topButton) {
    topButton = document.createElement('button');
    topButton.type = 'button';
    topButton.id = 'ha-top';
    topButton.className = 'ha-top';
    topButton.textContent = '↑';
    topButton.setAttribute('aria-label', ru ? 'Наверх страницы' : 'Back to top');
    document.body.appendChild(topButton);
  }
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(onScroll);
    observer.observe(document.body);
  }
  update();

  // Improve search ergonomics without changing the site's existing search logic.
  [['q', 'Search reviews / Поиск рецензий'],
   ['cq', 'Search the catalogue / Поиск по каталогу']].forEach(([id, hint]) => {
    const field = document.getElementById(id);
    if (field && !field.getAttribute('placeholder')) field.setAttribute('placeholder', hint);
    if (field) field.setAttribute('enterkeyhint', 'search');
  });
})();
