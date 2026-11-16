(() => {
  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('.nav');

  if (menuButton && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.setAttribute('aria-controls', 'primary-navigation');
    nav.id = 'primary-navigation';
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 851px)').matches) closeMenu();
    });
  }

  const search = document.querySelector('[data-search]');
  if (search) {
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase();
      document.querySelectorAll('[data-search-item]').forEach(item => {
        item.hidden = !item.textContent.toLocaleLowerCase().includes(query);
      });
    });
  }

  const imageFix = document.createElement('link');
  imageFix.rel = 'stylesheet';
  imageFix.href = 'assets/image-fix.css';
  document.head.appendChild(imageFix);
})();
