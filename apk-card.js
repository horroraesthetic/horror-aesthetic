(function () {
  function showUrl(card, url, isRussian) {
    let input = card.querySelector('.apk-card__url');
    if (!input) {
      input = document.createElement('input');
      input.className = 'apk-card__url';
      input.type = 'url';
      input.readOnly = true;
      card.append(input);
    }
    input.setAttribute('aria-label', isRussian ? 'Ссылка на скачивание APK' : 'APK download link');
    input.value = url;
    input.hidden = false;
    input.focus();
    input.select();
  }

  document.addEventListener('click', async (event) => {
    const button = event.target.closest('[data-apk-share]');
    if (!button || button.disabled) return;

    const card = button.closest('.apk-card');
    if (!card) return;
    const url = card.dataset.apkUrl || card.querySelector('[data-apk-download]')?.href;
    if (!url) return;

    const status = card.querySelector('.apk-card__status');
    const wasShown = card.querySelector('.apk-card__url');
    const isRussian = /^ru\b/i.test(document.documentElement.lang);
    status.textContent = '';
    if (wasShown) wasShown.hidden = true;
    button.disabled = true;

    try {
      if (typeof navigator.share === 'function') {
        try {
          await navigator.share({ title: 'HORROR AESTHETIC', url });
          return;
        } catch (error) {
          if (error.name === 'AbortError') return;
        }
      }
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(url);
          status.textContent = isRussian ? 'Ссылка на APK скопирована.' : 'APK link copied.';
          return;
        } catch {
          // A selectable URL is still available without clipboard permission.
        }
      }
      status.textContent = isRussian ? 'Скопируйте ссылку на APK.' : 'Copy the APK download link.';
      showUrl(card, url, isRussian);
    } finally {
      button.disabled = false;
    }
  });
})();
