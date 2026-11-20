// Match the language preference used by the homepage and review archive.
(() => {
  const actions = document.querySelector('.review-actions');
  if (!actions) return;
  const buttons = [...actions.querySelectorAll('[data-review-language]')];
  const toggle = [...document.querySelectorAll('[data-review-title],[data-review-copy]')];
  function setLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dataset.l = language;
    toggle.forEach(el => { el.hidden = (el.dataset.reviewTitle || el.dataset.reviewCopy) !== language; });
    buttons.forEach(el => { el.setAttribute('aria-pressed', String(el.dataset.reviewLanguage === language)); });
  }
  let preferred;
  try { preferred = localStorage.getItem('ha-lang'); } catch (_) {}
  setLanguage(preferred === 'ru' || preferred === 'en' ? preferred : navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en');
  buttons.forEach(el => el.addEventListener('click', () => {
    const language = el.dataset.reviewLanguage;
    setLanguage(language);
    try { localStorage.setItem('ha-lang', language); } catch (_) {}
  }));
  actions.hidden = false;
})();
