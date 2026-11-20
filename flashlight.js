/* HORROR AESTHETIC — interactive flashlight
   The existing #flb control toggles a soft moving light cone on touch and pointer devices. */
(() => {
  const button = document.getElementById('flb');
  if (!button || document.getElementById('ha-flashlight-overlay')) return;

  const root = document.documentElement;
  const overlay = document.createElement('div');
  overlay.id = 'ha-flashlight-overlay';
  overlay.setAttribute('aria-hidden', 'true');
  document.body.appendChild(overlay);

  let active = false;
  let raf = 0;
  let x = Math.round(innerWidth * 0.5);
  let y = Math.round(innerHeight * 0.48);

  const paint = () => {
    raf = 0;
    overlay.style.setProperty('--ha-flash-x', x + 'px');
    overlay.style.setProperty('--ha-flash-y', y + 'px');
  };
  const move = (event) => {
    if (!active) return;
    x = event.clientX;
    y = event.clientY;
    if (!raf) raf = requestAnimationFrame(paint);
  };
  const setActive = (value) => {
    active = value;
    root.classList.toggle('ha-flashlight-on', active);
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('is-active', active);
    if (typeof window.renderFl === 'function') window.renderFl();
    if (active) paint();
  };

  button.addEventListener('click', () => setActive(!active));
  document.addEventListener('pointermove', move, { passive: true });
  document.addEventListener('pointerdown', move, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && active) setActive(false);
  });
  addEventListener('resize', () => {
    if (!active) return;
    x = Math.min(x, innerWidth);
    y = Math.min(y, innerHeight);
    paint();
  }, { passive: true });
})();
