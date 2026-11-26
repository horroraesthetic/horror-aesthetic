/* HORROR AESTHETIC — site-wide reading tools */
(() => {
  'use strict';
  const ru = document.body?.dataset.lang === 'ru' ||
             (document.documentElement.lang || '').toLowerCase().startsWith('ru') ||
             document.documentElement.dataset.l === 'ru';
  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Target only a real content landmark. Never use broad layout wrappers (.w/.wrap/body):
  // focusing those containers creates the page-sized outline reported on mobile.
  const main = document.querySelector('main, [role="main"]') ||
               document.querySelector('article');
  if (main) {
    if (!main.id) main.id = 'ha-main-content';
    if (!main.hasAttribute('tabindex')) main.tabIndex = -1;
    main.style.scrollMarginTop = '18px';
  }

  let skip = document.querySelector('.ha-skip-link');
  if (!skip) {
    skip = document.createElement('a');
    skip.className = 'ha-skip-link';
    document.body.prepend(skip);
  }
  const labelSkip = () => {
    skip.textContent = document.documentElement.lang.toLowerCase().startsWith('ru') ?
      'Перейти к содержимому' : 'Skip to content';
  };
  labelSkip();
  new MutationObserver(labelSkip).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  if (main) skip.href = '#' + main.id;
  else skip.removeAttribute('href');
  if (!skip.dataset.haSkipFixed) {
    skip.addEventListener('click', event => {
      const target = main;
      if (!target) return;
      event.preventDefault();
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      // Section hashes (for example #catalog) are navigation state, not scroll positions.
    });
    skip.dataset.haSkipFixed = '1';
  }

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
  setTimeout(update, 1500);

  // Improve search ergonomics without changing the site's existing search logic.
  [['q', 'Search reviews / Поиск рецензий'],
   ['cq', 'Search the catalogue / Поиск по каталогу']].forEach(([id, hint]) => {
    const field = document.getElementById(id);
    if (field && !field.getAttribute('placeholder')) field.setAttribute('placeholder', hint);
    if (field) field.setAttribute('enterkeyhint', 'search');
  });
})();

/* HORROR AESTHETIC — personal dossier shelf 2.0 / reading tracker */
(() => {
  'use strict';
  const KEY = 'ha-personal-dossiers-v1';
  const root = document.documentElement;
  const t = (en, ru) => (root.dataset.l || root.lang).toLowerCase().startsWith('ru') ? ru : en;
  const filmKind = ['FILM DOSSIER','ДОСЬЕ ФИЛЬМА'];
  const articleKind = ['FEATURE','СТАТЬЯ'];
  const archiveKind = ['ARCHIVE PAGE','РАЗДЕЛ АРХИВА'];
  const savedKind = ['SAVED PAGE','СОХРАНЁННАЯ СТРАНИЦА'];
  const localizeKind = value => {
    const labels = [filmKind, articleKind, archiveKind, savedKind].find(pair => pair.includes(value));
    return labels ? t(...labels) : value;
  };
  const safeUrl = value => {
    try { const u = new URL(value, location.href); return u.origin === location.origin && /^https?:$/.test(u.protocol) ? u.href : null; }
    catch (_) { return null; }
  };
  const read = () => {
    try {
      const value = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(value) ? value.filter(x => x && typeof x.title === 'string' && safeUrl(x.url)).slice(0, 300).map(x => ({
        title: x.title.slice(0, 240), url: safeUrl(x.url), kind: String(x.kind || t(...savedKind)).slice(0, 80),
        savedAt: x.savedAt || new Date().toISOString(), status: x.status === 'read' ? 'read' : 'unread', note: String(x.note || '').slice(0, 500)
      })) : [];
    } catch (_) { return []; }
  };
  const write = items => { try { localStorage.setItem(KEY, JSON.stringify(items.slice(0, 300))); return true; } catch (_) { return false; } };
  const canonical = document.querySelector('link[rel="canonical"]');
  const url = safeUrl(canonical ? canonical.href : location.href.split('#')[0]) || location.href.split('#')[0];
  const heading = document.querySelector('main h1, article h1, h1');
  const title = (heading && heading.textContent.trim()) || document.title || location.pathname;
  const kind = /\/reviews?\//.test(location.pathname) ? filmKind : /\/articles?\//.test(location.pathname) ? articleKind : archiveKind;
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'ha-shelf-trigger'; button.setAttribute('aria-haspopup','dialog');
  button.innerHTML = '<span aria-hidden="true">▤</span><span class="ha-shelf-trigger-label"></span>';
  const panel = document.createElement('section');
  panel.className = 'ha-shelf-panel'; panel.hidden = true; panel.setAttribute('role','dialog'); panel.setAttribute('aria-modal','false'); panel.setAttribute('aria-labelledby','ha-shelf-title');
  panel.innerHTML = '<div class="ha-shelf-head"><div><small></small><h2 id="ha-shelf-title"></h2></div><button type="button" class="ha-shelf-close">×</button></div><p class="ha-shelf-note"></p><div class="ha-shelf-actions"><button type="button" data-action="save"></button><button type="button" data-action="export"></button><button type="button" data-action="import"></button></div><input class="ha-shelf-file" type="file" accept="application/json,.json" hidden><input class="ha-shelf-search" type="search"><p class="ha-shelf-count" aria-live="polite"></p><ul class="ha-shelf-list"></ul><button type="button" class="ha-shelf-clear"></button>';
  document.body.append(button, panel);
  const list = panel.querySelector('.ha-shelf-list'), count = panel.querySelector('.ha-shelf-count');
  const save = panel.querySelector('[data-action="save"]'), search = panel.querySelector('.ha-shelf-search');
  const current = () => read().some(x => x.url === url);
  const render = () => {
    const items = read(), query = search.value.trim().toLocaleLowerCase();
    const done = items.filter(x => x.status === 'read').length;
    save.textContent = current() ? t('✓ SAVED','✓ СОХРАНЕНО') : t('+ SAVE THIS PAGE','+ СОХРАНИТЬ СТРАНИЦУ');
    save.disabled = current();
    count.textContent = t(`${items.length} SAVED · ${done} READ`, `СОХРАНЕНО: ${items.length} · ПРОЧИТАНО: ${done}`);
    list.replaceChildren();
    const shown = items.filter(x => [x.title, x.kind, localizeKind(x.kind), x.note].join(' ').toLocaleLowerCase().includes(query));
    if (!shown.length) { const empty = document.createElement('li'); empty.className = 'ha-shelf-empty'; empty.textContent = items.length ? t('No matching pages.','Совпадений не найдено.') : t('Your archive is empty. Save a film dossier or research section.','Здесь пока пусто. Сохраняйте рецензии и исследовательские разделы.'); list.append(empty); }
    shown.forEach(item => {
      const li = document.createElement('li'); li.className = 'ha-shelf-item' + (item.status === 'read' ? ' is-read' : '');
      const a = document.createElement('a'); a.href = item.url; a.textContent = item.title;
      const meta = document.createElement('small'); meta.textContent = localizeKind(item.kind) + ' · ' + (item.status === 'read' ? t('READ','ПРОЧИТАНО') : t('TO READ','К ПРОЧТЕНИЮ'));
      const status = document.createElement('button'); status.type = 'button'; status.className = 'ha-shelf-status'; status.textContent = item.status === 'read' ? '✓' : '○'; status.title = t('Toggle reading status','Изменить статус чтения'); status.setAttribute('aria-label', t('Toggle reading status for ','Изменить статус чтения: ') + item.title);
      status.addEventListener('click', () => { const all = read(); const x = all.find(y => y.url === item.url); if (x) x.status = x.status === 'read' ? 'unread' : 'read'; write(all); render(); });
      const note = document.createElement('button'); note.type = 'button'; note.className = 'ha-shelf-note-button'; note.textContent = item.note ? t('EDIT NOTE','ИЗМЕНИТЬ ЗАМЕТКУ') : t('+ NOTE','+ ЗАМЕТКА');
      note.addEventListener('click', () => { const value = prompt(t('Personal note (up to 500 characters):','Личная заметка (до 500 символов):'), item.note); if (value === null) return; const all = read(), x = all.find(y => y.url === item.url); if (x) x.note = value.slice(0,500); write(all); render(); });
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'ha-shelf-remove'; remove.textContent = '×'; remove.setAttribute('aria-label',t('Remove ','Удалить ') + item.title);
      remove.addEventListener('click', () => { write(read().filter(x => x.url !== item.url)); render(); });
      li.append(a, meta, status, note, remove);
      if (item.note) { const n = document.createElement('p'); n.className = 'ha-shelf-item-note'; n.textContent = item.note; li.append(n); }
      list.append(li);
    });
  };
  const open = () => { render(); panel.hidden = false; button.setAttribute('aria-expanded','true'); panel.querySelector('.ha-shelf-close').focus(); };
  const close = () => { panel.hidden = true; button.setAttribute('aria-expanded','false'); button.focus(); };
  button.setAttribute('aria-expanded','false'); button.addEventListener('click', () => panel.hidden ? open() : close());
  panel.querySelector('.ha-shelf-close').addEventListener('click', close);
  search.addEventListener('input', render);
  save.addEventListener('click', () => { const items = read(); if (!items.some(x => x.url === url)) { items.unshift({title, url, kind:t(...kind), savedAt:new Date().toISOString(), status:'unread', note:''}); if (!write(items)) alert(t('Storage is full. Export your archive and remove older items.','Недостаточно места. Экспортируйте архив и удалите старые записи.')); } render(); });
  panel.querySelector('[data-action="export"]').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({format:'horror-aesthetic-personal-archive',version:2,items:read()},null,2)],{type:'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'horror-aesthetic-personal-archive.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  });
  const file = panel.querySelector('.ha-shelf-file');
  panel.querySelector('[data-action="import"]').addEventListener('click', () => file.click());
  file.addEventListener('change', async () => {
    const f = file.files && file.files[0]; if (!f) return;
    try { const data = JSON.parse(await f.text()); const incoming = Array.isArray(data) ? data : data.items; if (!Array.isArray(incoming)) throw new Error('format'); const merged = new Map(read().map(x=>[x.url,x])); incoming.forEach(x=>{const safe = x && safeUrl(x.url); if(safe && typeof x.title==='string') merged.set(safe,{title:x.title.slice(0,240),url:safe,kind:String(x.kind||t('SAVED PAGE','СОХРАНЁННАЯ СТРАНИЦА')).slice(0,80),savedAt:x.savedAt||new Date().toISOString(),status:x.status==='read'?'read':'unread',note:String(x.note||'').slice(0,500)})}); if(!write([...merged.values()])) throw new Error('storage'); render(); } catch (_) { alert(t('This archive file could not be imported.','Не удалось импортировать этот файл архива.')); } finally { file.value=''; }
  });
  panel.querySelector('.ha-shelf-clear').addEventListener('click', () => { if (confirm(t('Clear all saved pages from this device?','Удалить все сохранённые страницы с этого устройства?'))) { write([]); render(); } });
  document.addEventListener('keydown', e => { if(e.key==='Escape' && !panel.hidden) close(); });
  const localize = () => {
    const archive = t('MY ARCHIVE','МОЙ АРХИВ');
    button.querySelector('.ha-shelf-trigger-label').textContent = archive;
    panel.querySelector('#ha-shelf-title').textContent = archive;
    panel.querySelector('.ha-shelf-head small').textContent = t('HORROR AESTHETIC / PERSONAL FILE','HORROR AESTHETIC / ЛИЧНОЕ ДОСЬЕ');
    panel.querySelector('.ha-shelf-close').setAttribute('aria-label', t('Close','Закрыть'));
    panel.querySelector('.ha-shelf-note').textContent = t('A private reading tracker stored only in this browser.','Личный список чтения хранится только в этом браузере.');
    panel.querySelector('[data-action="export"]').textContent = t('EXPORT','ЭКСПОРТ');
    panel.querySelector('[data-action="import"]').textContent = t('IMPORT','ИМПОРТ');
    panel.querySelector('.ha-shelf-clear').textContent = t('CLEAR MY ARCHIVE','ОЧИСТИТЬ МОЙ АРХИВ');
    search.placeholder = t('Search saved pages…','Поиск в сохранённом…');
    search.setAttribute('aria-label', t('Search saved pages','Поиск сохранённых страниц'));
    if (!panel.hidden) render();
  };
  localize();
  new MutationObserver(localize).observe(root, { attributes:true, attributeFilter:['lang','data-l'] });
})();


/* HORROR AESTHETIC — TONE: THE CALL / synthesized mechanical telephone bell */
(() => {
  'use strict';
  const ru = (document.documentElement.lang || document.documentElement.dataset.l || 'en').toLowerCase().startsWith('ru');
  const candidates = [...document.querySelectorAll('button,a,[role="button"]')];
  const trigger = candidates.find(el => /тон\s*[:—-]?\s*звонок|ring\s*tone|the\s*call/i.test((el.textContent || '').replace(/\\s+/g,' ').trim()));
  if (!trigger || trigger.dataset.haCallToneReady) return;
  trigger.dataset.haCallToneReady = '1';
  const originalLabel = trigger.textContent.trim();
  let ctx = null, master = null, timer = null, ringing = false, nodes = [];
  const status = document.createElement('span');
  status.className = 'ha-call-tone-status';
  status.setAttribute('aria-live','polite');
  status.textContent = ru ? ' · ВЫКЛ' : ' · OFF';
  trigger.append(status);
  trigger.setAttribute('aria-pressed','false');
  trigger.setAttribute('aria-label', (ru ? 'Тон звонка. Выключен' : 'Telephone ring tone. Off'));
  const setStatus = on => {
    status.textContent = on ? (ru ? ' · ЗВОНИТ' : ' · RINGING') : (ru ? ' · ВЫКЛ' : ' · OFF');
    trigger.setAttribute('aria-pressed',String(on));
    trigger.setAttribute('aria-label',(ru ? 'Тон звонка. ' : 'Telephone ring tone. ') + (on ? (ru ? 'Включён' : 'On') : (ru ? 'Выключен' : 'Off')));
    trigger.classList.toggle('ha-call-tone-active',on);
  };
  const stop = () => {
    ringing = false;
    if (timer) { clearInterval(timer); timer = null; }
    if (master && ctx) {
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setTargetAtTime(0,now,.06);
    }
    nodes.forEach(n => { try { n.stop(); } catch (_) {} });
    nodes = [];
    setStatus(false);
  };
  const start = async () => {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { status.textContent = ru ? ' · НЕТ AUDIO API' : ' · AUDIO UNAVAILABLE'; return; }
    if (!ctx) {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass'; filter.frequency.value = 1850; filter.Q.value = .7;
      master.connect(filter); filter.connect(ctx.destination);
      // A slightly detuned pair and quiet upper partials evoke a resonant metal bell.
      [[440,.105],[480,.095],[880,.026],[960,.022],[1320,.009]].forEach(([hz,level],i) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = i < 2 ? 'sine' : 'triangle';
        osc.frequency.value = hz;
        if (i === 1) osc.detune.value = -3;
        gain.gain.value = level;
        osc.connect(gain); gain.connect(master); osc.start(); nodes.push(osc);
      });
    }
    await ctx.resume();
    ringing = true;
    const pulse = () => {
      if (!ringing || !ctx) return;
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(0,now);
      // Two uneven metallic strikes within each ring burst.
      master.gain.linearRampToValueAtTime(.72,now+.035);
      master.gain.setValueAtTime(.72,now+.48);
      master.gain.linearRampToValueAtTime(.16,now+.55);
      master.gain.linearRampToValueAtTime(.72,now+.64);
      master.gain.setValueAtTime(.72,now+1.22);
      master.gain.linearRampToValueAtTime(0,now+1.34);
    };
    pulse();
    timer = setInterval(pulse,4700);
    setStatus(true);
  };
  trigger.addEventListener('click', async event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (ringing) { stop(); return; }
    try { await start(); }
    catch (_) { stop(); status.textContent = ru ? ' · ЗВУК НЕДОСТУПЕН' : ' · AUDIO BLOCKED'; }
  }, true);
  window.addEventListener('pagehide',stop,{once:true});
})();


/* HORROR AESTHETIC — CURSED TAPE / fragmented Japanese whisper */
(() => {
  'use strict';
  const ru = (document.documentElement.lang || document.documentElement.dataset.l || 'en').toLowerCase().startsWith('ru');
  const call = [...document.querySelectorAll('button,a,[role="button"]')].find(el => /тон\s*[:—-]?\s*звонок|ring\s*tone|the\s*call/i.test((el.textContent || '').replace(/\\s+/g,' ').trim()));
  if (!call || !window.speechSynthesis || call.dataset.haWhisperInstalled) return;
  call.dataset.haWhisperInstalled = '1';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ha-cursed-tape';
  button.textContent = ru ? '▧ ПРОКЛЯТАЯ ЗАПИСЬ' : '▧ CURSED RECORDING';
  button.setAttribute('aria-pressed','false');
  button.setAttribute('aria-label',ru ? 'Включить японский шёпот проклятой записи' : 'Play the Japanese cursed whisper');
  call.insertAdjacentElement('afterend',button);
  const fragments = ['あ…','し…','ね…','み…','る…','か…','ゆ…','え…','お…','さ…','き…','と…','な…','れ…','う…','ま…'];
  let active = false, timer = null, utterance = null, hissContext = null, hissGain = null;
  const voices = () => window.speechSynthesis.getVoices().filter(v => /^ja([-_]|$)/i.test(v.lang));
  const stop = () => {
    active = false;
    if (timer) { clearTimeout(timer); timer = null; }
    window.speechSynthesis.cancel();
    if (hissGain && hissContext) hissGain.gain.setTargetAtTime(0,hissContext.currentTime,.12);
    button.classList.remove('is-playing');
    button.setAttribute('aria-pressed','false');
    button.textContent = ru ? '▧ ПРОКЛЯТАЯ ЗАПИСЬ' : '▧ CURSED RECORDING';
  };
  const schedule = () => {
    if (!active) return;
    const phrase = Array.from({length:2 + Math.floor(Math.random()*3)},() => fragments[Math.floor(Math.random()*fragments.length)]).join(' ');
    utterance = new SpeechSynthesisUtterance(phrase);
    const ja = voices();
    if (ja.length) utterance.voice = ja[Math.floor(Math.random()*ja.length)];
    utterance.lang = 'ja-JP';
    utterance.rate = .62 + Math.random()*.16;
    utterance.pitch = .48 + Math.random()*.18;
    utterance.volume = .18 + Math.random()*.08;
    utterance.onend = () => {
      if (active) timer = setTimeout(schedule,2200 + Math.random()*5200);
    };
    utterance.onerror = () => {
      if (active) timer = setTimeout(schedule,5000);
    };
    window.speechSynthesis.speak(utterance);
  };
  const start = async () => {
    active = true;
    button.classList.add('is-playing');
    button.setAttribute('aria-pressed','true');
    button.textContent = ru ? '▧ ЗАПИСЬ ВОСПРОИЗВОДИТСЯ · СТОП' : '▧ TAPE PLAYING · STOP';
    // Very quiet filtered tape hiss under the fragmented voice.
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) {
      try {
        if (!hissContext) {
          hissContext = new AC();
          const length = hissContext.sampleRate * 2;
          const buffer = hissContext.createBuffer(1,length,hissContext.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i=0;i<length;i++) data[i] = (Math.random()*2-1) * .22;
          const source = hissContext.createBufferSource(); source.buffer=buffer; source.loop=true;
          const filter = hissContext.createBiquadFilter(); filter.type='bandpass'; filter.frequency.value=1450; filter.Q.value=.55;
          hissGain = hissContext.createGain(); hissGain.gain.value=0;
          source.connect(filter); filter.connect(hissGain); hissGain.connect(hissContext.destination); source.start();
        }
        await hissContext.resume();
        hissGain.gain.setTargetAtTime(.035,hissContext.currentTime,.4);
      } catch (_) {}
    }
    schedule();
  };
  button.addEventListener('click',async () => {
    if (active) { stop(); return; }
    try { await start(); } catch (_) { stop(); }
  });
  document.addEventListener('visibilitychange',() => { if (document.hidden && active) stop(); });
  window.addEventListener('pagehide',stop);
  window.speechSynthesis.onvoiceschanged = () => {};
})();



/* HORROR AESTHETIC — resilient homepage tone switch */
(() => {
  'use strict';
  const button = document.getElementById('tnb');
  if (!button || button.dataset.haToneSwitchReady) return;
  button.dataset.haToneSwitchReady = '1';
  const tones = ['kaidan','ringu','blue','green','juon','tomie','blood','psy','clean','techno'];
  const labels = {
    kaidan:['🎞 Тон: Кайдан','🎞 Tone: Kaidan'],
    ringu:['🎞 Тон: Звонок','🎞 Tone: Ringu'],
    blue:['🎞 Тон: Синий','🎞 Tone: Blue'],
    green:['🎞 Тон: Зелёный','🎞 Tone: Green'],
    juon:['🎞 Тон: Проклятие','🎞 Tone: Ju-On'],
    tomie:['🎞 Тон: Томие','🎞 Tone: Tomie'],
    blood:['🎞 Тон: Кровь','🎞 Tone: Blood'],
    psy:['🎞 Тон: Психологический','🎞 Tone: Psychological'],
    clean:['🎞 Тон: Ясный','🎞 Tone: Clear'],
    techno:['🎞 Тон: Техно','🎞 Tone: Techno']
  };
  const ru = () => (document.documentElement.lang || document.documentElement.dataset.l || 'en').toLowerCase().startsWith('ru');
  let current = document.documentElement.dataset.tone || 'kaidan';
  try { const saved = localStorage.getItem('ha-tone'); if (tones.includes(saved)) current = saved; } catch (_) {}
  const apply = () => {
    document.documentElement.dataset.tone = current;
    button.textContent = labels[current][ru() ? 0 : 1];
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim() || '#0b1213';
    button.setAttribute('aria-label', labels[current][ru() ? 0 : 1] + ' — ' + (ru() ? 'нажмите, чтобы сменить оформление' : 'click to change theme'));
  };
  button.addEventListener('click', event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const index = tones.indexOf(current);
    current = tones[(index < 0 ? 0 : index + 1) % tones.length];
    try { localStorage.setItem('ha-tone', current); } catch (_) {}
    apply();
  }, true);
  window.addEventListener('storage', event => {
    if (event.key === 'ha-tone' && tones.includes(event.newValue)) { current = event.newValue; apply(); }
  });
  apply();
})();


/* HORROR AESTHETIC — haunted editorial reveal */
(() => {
 'use strict';
 if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 if(!('IntersectionObserver' in window))return;
 const selectors=['.ha-editorial-cover','.stats .stat','.stat','.guide-intro','.film','.card','.feature-card','.archive-card','.research-card','.ha-research-card','.section-card','.panel'];
 const nodes=[...new Set(selectors.flatMap(selector=>[...document.querySelectorAll(selector)]))];
 if(!nodes.length)return;
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   entry.target.classList.add('is-in');
   observer.unobserve(entry.target);
  });
 },{rootMargin:'0px 0px -8% 0px',threshold:.08});
 nodes.forEach((node,index)=>{
  node.classList.add('ha-reveal');
  node.style.setProperty('--ha-reveal-delay',String(Math.min(index%5,4)*75)+'ms');
  observer.observe(node);
 });
})();


/* HORROR AESTHETIC — homepage hero composition */
(() => {
 'use strict';
 const path=window.location.pathname.replace(/\/+$/,'');
 if(path!=='/horror-aesthetic'&&path!=='')return;
 const main=document.querySelector('main');
 if(!main)return;
 const candidates=[...main.children];
 const hero=candidates.find(node=>node.matches('section,header,div')&&node.querySelector('h1'))||main.querySelector('h1')?.parentElement;
 if(!hero||hero.dataset.haHomeHero)return;
 hero.dataset.haHomeHero='1';
 hero.classList.add('ha-home-cinema');
})();


/* HORROR AESTHETIC — archive reading navigation */
(() => {
 'use strict';
 if(document.querySelector('.w')||document.querySelector('.ha-reading-progress'))return;
 const progress=document.createElement('div');
 progress.className='ha-reading-progress';
 progress.setAttribute('role','progressbar');
 progress.setAttribute('aria-label',(document.documentElement.lang||'en').toLowerCase().startsWith('ru')?'Прогресс чтения':'Reading progress');
 progress.setAttribute('aria-valuemin','0');progress.setAttribute('aria-valuemax','100');progress.setAttribute('aria-valuenow','0');
 const fill=document.createElement('span');progress.appendChild(fill);
 const top=document.createElement('button');
 top.type='button';top.className='ha-back-top';top.textContent='↑';
 top.setAttribute('aria-label',(document.documentElement.lang||'en').toLowerCase().startsWith('ru')?'Наверх страницы':'Back to top');
 top.title=top.getAttribute('aria-label');
 document.body.append(progress,top);
 let scheduled=false;
 const update=()=>{
  const root=document.documentElement,max=Math.max(0,root.scrollHeight-window.innerHeight);
  const value=max?Math.min(100,Math.max(0,window.scrollY/max*100)):0;
  fill.style.transform='scaleX('+value/100+')';
  progress.setAttribute('aria-valuenow',String(Math.round(value)));
  top.classList.toggle('is-visible',window.scrollY>420);
  scheduled=false;
 };
 const queue=()=>{if(!scheduled){scheduled=true;window.requestAnimationFrame(update)}};
 window.addEventListener('scroll',queue,{passive:true});
 window.addEventListener('resize',queue,{passive:true});
 top.addEventListener('click',()=>{
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:0,behavior:reduced?'auto':'smooth'});
 });
 update();
})();


/* HORROR AESTHETIC — accessible skip link + image loading hints */
(() => {
 'use strict';
 if(document.querySelector('.w'))return;
 const main=document.querySelector('main,[role="main"]');
 if(main&&!document.querySelector('.ha-skip-link')){
  if(!main.id)main.id='ha-main-content';
  if(!main.hasAttribute('tabindex'))main.setAttribute('tabindex','-1');
  const skip=document.createElement('a');
  skip.className='ha-skip-link';
  skip.href='#'+main.id;
  skip.textContent=(document.documentElement.lang||document.documentElement.dataset.l||'en').toLowerCase().startsWith('ru')?'Перейти к содержимому':'Skip to content';
  document.body.insertBefore(skip,document.body.firstChild);
 }
 const images=[...document.images];
 images.forEach((img,index)=>{
  if(!img.hasAttribute('decoding'))img.decoding='async';
  if(!img.hasAttribute('loading')){
   const rect=img.getBoundingClientRect();
   img.loading=(index<2||rect.top<window.innerHeight*1.25)?'eager':'lazy';
  }
  if(index===0&&!img.hasAttribute('fetchpriority'))img.setAttribute('fetchpriority','high');
 });
})();


/* HORROR AESTHETIC — shareable Dark Archive searches */
(() => {
 'use strict';
 const search=document.getElementById('search');
 const decade=document.getElementById('decade');
 const rating=document.getElementById('rating');
 const sort=document.getElementById('sort');
 const line=document.querySelector('.ha-archive-page .resultline');
 if(!search||!decade||!rating||!sort||!line||line.querySelector('.ha-share-view'))return;
 const ru=()=>((document.documentElement.lang||'en').toLowerCase().startsWith('ru'));
 const share=document.createElement('button');
 share.type='button';share.className='ha-share-view';
 share.textContent=ru()?'КОПИРОВАТЬ ССЫЛКУ':'COPY VIEW LINK';
 share.setAttribute('aria-label',ru()?'Скопировать ссылку на текущую выборку':'Copy link to current filtered view');
 line.appendChild(share);
 const fields=[['q',search],['decade',decade],['rating',rating],['sort',sort]];
 const applyFromUrl=()=>{
  const params=new URLSearchParams(location.search);
  fields.forEach(([key,el])=>{
   const value=params.get(key);
   if(value===null)return;
   if([...el.options].some(option=>option.value===value))el.value=value;
  });
  search.dispatchEvent(new Event('input',{bubbles:true}));
  [decade,rating,sort].forEach(el=>el.dispatchEvent(new Event('change',{bubbles:true})));
 };
 const syncUrl=()=>{
  const url=new URL(location.href);
  fields.forEach(([key,el])=>{if(el.value&&!(key==='sort'&&el.value==='title'))url.searchParams.set(key,el.value);else url.searchParams.delete(key)});
  history.replaceState(null,'',url.pathname+url.search+url.hash);
 };
 applyFromUrl();
 fields.forEach(([key,el])=>el.addEventListener(key==='q'?'input':'change',syncUrl));
 window.addEventListener('popstate',applyFromUrl);
 const copyFallback=value=>{
  const field=document.createElement('textarea');field.value=value;field.setAttribute('readonly','');
  field.style.position='fixed';field.style.opacity='0';document.body.appendChild(field);field.select();
  try{document.execCommand('copy')}catch(_){}
  field.remove();
 };
 share.addEventListener('click',async()=>{
  const value=location.href;
  try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(value);else copyFallback(value)}
  catch(_){copyFallback(value)}
  share.textContent=ru()?'ССЫЛКА СКОПИРОВАНА':'LINK COPIED';
  share.setAttribute('aria-label',ru()?'Ссылка скопирована':'Link copied');
  window.setTimeout(()=>{share.textContent=ru()?'КОПИРОВАТЬ ССЫЛКУ':'COPY VIEW LINK';share.setAttribute('aria-label',ru()?'Скопировать ссылку на текущую выборку':'Copy link to current filtered view')},1800);
 });
 document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>window.setTimeout(()=>{
  share.textContent=ru()?'КОПИРОВАТЬ ССЫЛКУ':'COPY VIEW LINK';
  share.setAttribute('aria-label',ru()?'Скопировать ссылку на текущую выборку':'Copy link to current filtered view');
 },0)));
})();


/* HORROR AESTHETIC — Dark Archive decade navigator */
(() => {
 'use strict';
 const decade=document.getElementById('decade');
 const controls=document.querySelector('.ha-archive-page .controls');
 if(!decade||!controls||controls.parentElement.querySelector('.ha-decade-nav'))return;
 const nav=document.createElement('nav');
 nav.className='ha-decade-nav';
 nav.setAttribute('aria-label',(document.documentElement.lang||'en').toLowerCase().startsWith('ru')?'Быстрый выбор десятилетия':'Quick decade navigation');
 const label=document.createElement('span');
 label.className='ha-decade-label';
 label.textContent=(document.documentElement.lang||'en').toLowerCase().startsWith('ru')?'ЭПОХА':'DECADE';
 nav.appendChild(label);
 const buttons=[];
 [...decade.options].filter(option=>option.value).forEach(option=>{
  const button=document.createElement('button');
  button.type='button';button.className='ha-decade-chip';
  button.textContent=option.textContent;
  button.setAttribute('aria-pressed','false');
  button.addEventListener('click',()=>{
   decade.value=decade.value===option.value?'':option.value;
   decade.dispatchEvent(new Event('change',{bubbles:true}));
   sync();
  });
  buttons.push({button,value:option.value});nav.appendChild(button);
 });
 const all=document.createElement('button');
 all.type='button';all.className='ha-decade-chip ha-decade-all';
 all.textContent=(document.documentElement.lang||'en').toLowerCase().startsWith('ru')?'ВСЕ':'ALL';
 all.setAttribute('aria-pressed','true');
 all.addEventListener('click',()=>{decade.value='';decade.dispatchEvent(new Event('change',{bubbles:true}));sync()});
 nav.insertBefore(all,nav.children[1]);
 const sync=()=>{
  all.setAttribute('aria-pressed',String(!decade.value));
  buttons.forEach(item=>item.button.setAttribute('aria-pressed',String(decade.value===item.value)));
 };
 decade.addEventListener('change',sync);
 controls.parentElement.insertBefore(nav,controls);
 sync();
})();


/* HORROR AESTHETIC — universal command palette / quick navigation */
(() => {
 'use strict';
 const start=()=>{
  if(document.querySelector('.ha-command-trigger'))return;
  const ru=()=>((document.documentElement.dataset.l||document.documentElement.lang||'en').toLowerCase().startsWith('ru'));
  const entries=[
   ['/horror-aesthetic/','Home','Главная','home'],
   ['/horror-aesthetic/reviews/','All reviews','Все рецензии','films cinema'],
   ['/horror-aesthetic/reviews/ringu.html','Ringu (1998)','Звонок (1998)','hideo nakata j-horror'],
   ['/horror-aesthetic/magazine/','The Horror Journal','Журнал Horror Aesthetic','issues'],
   ['/horror-aesthetic/magazine/visual-department.html','Midnight Gallery','Полночная галерея','original art'],
   ['/horror-aesthetic/posters/','Posters','Постеры','illustrations'],
   ['/horror-aesthetic/archives/','The Dark Archive','Тёмный архив','films catalogue dossiers'],
   ['/horror-aesthetic/j-horror/','J-Horror Master Archive','Архив японского хоррора','japan kaidan ringu ju-on'],
   ['/horror-aesthetic/directors/','Director Archives','Архив режиссёров','filmmakers'],
   ['/horror-aesthetic/timeline/','Horror Timeline','Хронология хоррора','history years'],
   ['/horror-aesthetic/database/','Film Database','База фильмов','search titles'],
   ['/horror-aesthetic/visual-archive/','Visual Archive','Визуальный архив','art posters'],
   ['/horror-aesthetic/folklore/','Folklore & Legends','Фольклор и легенды','yokai myths'],
   ['/horror-aesthetic/bestiarum/','Yokai Bestiarum','Бестиарий ёкаев','creatures monsters'],
   ['/horror-aesthetic/library/','Library of Horror','Библиотека ужасов','books manga'],
   ['/horror-aesthetic/themes/','Thematic Index','Тематический указатель','collections'],
   ['/horror-aesthetic/culture/','Horror Culture','Культура хоррора','music art'],
   ['/horror-aesthetic/games/','Horror Games','Хоррор-игры','gaming'],
   ['/horror-aesthetic/screening-room/','Screening Room','Кинозал','watchlist watched'],
   ['/horror-aesthetic/journal/','The Dark Journal','Тёмный журнал','essays'],
   ['/horror-aesthetic/articles/','Essays & Features','Статьи и эссе','long reads'],
   ['/horror-aesthetic/field-notes/','Field Notes','Полевые заметки','research'],
   ['/horror-aesthetic/team/','The Team','Команда','about creepypasta'],
   ['/horror-aesthetic/creepypasta/','Team Creepypastas','Крипипасты команды','stories scary'],
   ['/horror-aesthetic/about.html','About the Project','О проекте','about'],
   ['/horror-aesthetic/privacy.html','Privacy Policy','Политика конфиденциальности','privacy']
  ];
  let indexed=false;const loadIndex=()=>{if(indexed)return;indexed=true;fetch('/horror-aesthetic/data/search-index.json').then(r=>r.ok?r.json():[]).then(list=>{list.forEach(i=>entries.push(i));if(!overlay.hidden)render()}).catch(()=>{})};
  const trigger=document.createElement('button');
  trigger.type='button';trigger.className='ha-command-trigger';
  trigger.innerHTML='<span aria-hidden="true">⌕</span><span class="ha-command-trigger-label"></span><kbd>⌘ K</kbd>';
  trigger.querySelector('.ha-command-trigger-label').textContent=ru()?'БЫСТРЫЙ ПЕРЕХОД':'QUICK JUMP';
  trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-expanded','false');
  const overlay=document.createElement('div');overlay.className='ha-command-overlay';overlay.id='ha-command-dialog';overlay.hidden=true;
  trigger.setAttribute('aria-controls',overlay.id);
  overlay.innerHTML='<section class="ha-command-panel" role="dialog" aria-modal="true" aria-labelledby="ha-command-title"><header class="ha-command-head"><div><span class="ha-command-kicker">HORROR AESTHETIC / INDEX</span><h2 id="ha-command-title"></h2></div><button type="button" class="ha-command-close" aria-label="Close">×</button></header><label class="ha-command-search-label" for="ha-command-search"></label><input id="ha-command-search" class="ha-command-search" type="search" autocomplete="off" spellcheck="false"><div class="ha-command-hint"></div><nav class="ha-command-results" aria-label="Site sections"></nav><footer class="ha-command-foot"><span>ESC <i></i></span><span>↑ ↓ <i></i></span><span>ENTER <i></i></span></footer></section>';
  document.body.append(trigger,overlay);
  const input=overlay.querySelector('input'),results=overlay.querySelector('.ha-command-results'),close=overlay.querySelector('.ha-command-close');
  let active=0,visible=[],opener=null,inerted=[];
  const text=(en,ruText)=>ru()?ruText:en;
  const SYN=[[/призрак|привиден|дух|yurei|ghost|spirit|haunt|онрё|onryo/,'ghost spirit haunt yurei onryo supernatural призрак дух привиден'],[/кров|gore|жестк|blood|gory/,'gore'],[/слэшер|slasher|маньяк/,'slasher маньяк'],[/монстр|monster|creature|тварь/,'monster creature монстр'],[/вампир|vampire/,'vampire вампир'],[/зомби|zombie|заражен|infect/,'zombie infection зомби заражен'],[/найден|found.?footage|vhs/,'found footage vhs найден'],[/психолог|psycholog/,'psychological психолог'],[/фольклор|folk|легенд/,'folk folklore фольклор легенд'],[/тело|body|боди/,'body horror боди'],[/проклят|curse|cursed/,'curse проклят'],[/дом|house|haunted house/,'house дом'],[/демон|possess|одержим|exorc/,'demon possession одержим демон'],[/тихо|медлен|slow|атмосфер|atmospher/,'atmospheric slow атмосфер медлен'],[/анимац|anime|animation/,'animation анимац']];
  const stem=w=>w.length>5?w.slice(0,w.length-2):w;
  const smart=q=>{
   if(!q)return entries.slice();
   const plain=entries.filter(i=>(i[1]+' '+i[2]+' '+i[3]).toLocaleLowerCase().includes(q));
   if(plain.length)return plain;
   const parts=q.split(/\s+(?:но\s+)?(?:без|не|without|no|but not)\s+/);
   const pos=parts[0],neg=parts.slice(1).join(' ');
   const groups=s=>s.split(/[\s,]+/).filter(w=>w.length>2&&!/^(что|про|это|как|для|and|the|with|film|movie|фильм|фильмы|страшн\S*|хочу|нужен|about|scary|horror|хоррор)$/.test(w)).map(w=>{const h=SYN.find(r=>r[0].test(w));return h?{syn:h[1],gore:/кров|gore|blood/.test(w)}:{syn:stem(w),gore:false}});
   const pg=groups(pos),ng=groups(neg);if(!pg.length&&!ng.length)return[];
   const hit=(item,g)=>{if(g.gore)return item[5]>=3;const hay=(item[1]+' '+item[2]+' '+(item[4]||'')).toLocaleLowerCase();return g.syn.split(' ').some(k=>k&&hay.includes(k))};
   return entries.filter(i=>(i[3]==='review'||i[3]==='story'||i[3]==='essay')&&pg.every(g=>hit(i,g))&&!ng.some(g=>hit(i,g)));
  };
  const render=()=>{
   const q=input.value.trim().toLocaleLowerCase();
   visible=smart(q).slice(0,40);
   results.replaceChildren();active=0;
   if(!visible.length){const empty=document.createElement('p');empty.className='ha-command-empty';empty.textContent=text('No matching sections. Try another search.','Ничего не найдено. Попробуйте другой запрос.');results.appendChild(empty);return}
   visible.forEach((item,index)=>{
    const link=document.createElement('a');link.className='ha-command-result';link.href=item[0];link.setAttribute('aria-current',String(index===active?'true':'false'));
    const name=document.createElement('span');name.textContent=text(item[1],item[2]);
    const path=document.createElement('small');path.textContent=item[0].replace('/horror-aesthetic/','/');link.append(name,path);
    link.addEventListener('mouseenter',()=>setActive(index));
    link.addEventListener('focus',()=>setActive(index));results.appendChild(link);
   });
  };
  const setActive=index=>{
   if(!visible.length)return;
   active=(index+visible.length)%visible.length;
   [...results.querySelectorAll('a')].forEach((link,i)=>{link.setAttribute('aria-current',String(i===active));if(i===active)link.scrollIntoView({block:'nearest'})});
  };
  const open=()=>{
   opener=document.activeElement;
   inerted=[...document.body.children].filter(el=>el!==overlay&&!el.inert);
   inerted.forEach(el=>{el.inert=true});
   overlay.hidden=false;trigger.setAttribute('aria-expanded','true');input.value='';loadIndex();render();
   document.body.classList.add('ha-command-open');input.focus();
  };
  const shut=()=>{
   overlay.hidden=true;trigger.setAttribute('aria-expanded','false');document.body.classList.remove('ha-command-open');
   inerted.forEach(el=>{el.inert=false});inerted=[];
   if(opener&&opener!==document.body&&opener.isConnected)opener.focus({preventScroll:true});
   if(document.activeElement!==opener||opener===document.body)trigger.focus({preventScroll:true});
  };
  trigger.addEventListener('click',open);close.addEventListener('click',shut);
  overlay.addEventListener('click',event=>{if(event.target===overlay)shut()});
  input.addEventListener('input',render);
  overlay.addEventListener('keydown',event=>{
   if(event.key==='Escape'){event.preventDefault();shut()}
   else if(event.target===input&&event.key==='ArrowDown'){event.preventDefault();setActive(active+1)}
   else if(event.target===input&&event.key==='ArrowUp'){event.preventDefault();setActive(active-1)}
   else if(event.target===input&&event.key==='Enter'&&!event.isComposing&&visible[active]){event.preventDefault();location.href=visible[active][0]}
   else if(event.key==='Tab'){
    const focusable=[close,input,...results.querySelectorAll('a')].filter(el=>el.offsetParent!==null);
    if(event.shiftKey&&document.activeElement===focusable[0]){event.preventDefault();focusable.at(-1).focus()}
    else if(!event.shiftKey&&document.activeElement===focusable.at(-1)){event.preventDefault();focusable[0].focus()}
   }
  });
  document.addEventListener('keydown',event=>{
   if(!event.defaultPrevented&&!event.repeat&&(event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();overlay.hidden?open():shut()}
  });
  const localize=()=>{
   trigger.querySelector('.ha-command-trigger-label').textContent=text('QUICK JUMP','БЫСТРЫЙ ПЕРЕХОД');
   trigger.querySelector('kbd').textContent=/Mac|iPhone|iPad/i.test(navigator.platform)?'⌘ K':'Ctrl K';
   overlay.querySelector('#ha-command-title').textContent=text('Find your way through the archive','Найти нужный раздел архива');
   overlay.querySelector('.ha-command-search-label').textContent=text('SEARCH THE SITE','ПОИСК ПО САЙТУ');
   input.placeholder=text('Search site sections…','Поиск по разделам сайта…');
   overlay.querySelector('.ha-command-hint').textContent=text('Search by name, director or idea: “ghosts without gore”, “vampire films”','Название, режиссёр или идея: «призраки без крови», «фильмы про вампиров»');
   overlay.querySelector('.ha-command-foot').innerHTML='<span>ESC '+text('CLOSE','ЗАКРЫТЬ')+'</span><span>↑ ↓ '+text('MOVE','ВЫБРАТЬ')+'</span><span>ENTER '+text('OPEN','ОТКРЫТЬ')+'</span>';
   close.setAttribute('aria-label',text('Close','Закрыть'));
   render();
  };
  document.querySelectorAll('[data-lang],.lg button').forEach(button=>button.addEventListener('click',()=>window.setTimeout(localize,0)));
  localize();
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();


/* HORROR AESTHETIC — CINEMA MODE / immersive visual grade */
(() => {
 'use strict';
 const boot=()=>{
  if(document.querySelector('.ha-cinema-toggle'))return;
  const ru=()=>((document.documentElement.dataset.l||document.documentElement.lang||'en').toLowerCase().startsWith('ru'));
  const key='ha-cinema-mode';
  let enabled=false;
  try{enabled=localStorage.getItem(key)==='on'}catch(_){}
  const button=document.createElement('button');
  button.type='button';button.className='ha-cinema-toggle';
  button.setAttribute('aria-pressed','false');
  button.innerHTML='<span class="ha-cinema-orb" aria-hidden="true"></span><span class="ha-cinema-label"></span>';
  document.body.appendChild(button);
  const apply=()=>{
   document.documentElement.classList.toggle('ha-cinema-mode',enabled);
   button.setAttribute('aria-pressed',String(enabled));
   button.querySelector('.ha-cinema-label').textContent=enabled?(ru()?'РЕЖИМ КИНО ВКЛ.':'CINEMA MODE ON'):(ru()?'РЕЖИМ КИНО':'CINEMA MODE');
   button.title=enabled?(ru()?'Выключить атмосферный режим':'Turn off cinematic atmosphere'):(ru()?'Включить атмосферный режим':'Enable cinematic atmosphere');
   try{localStorage.setItem(key,enabled?'on':'off')}catch(_){}
  };
  button.addEventListener('click',()=>{enabled=!enabled;apply()});
  document.querySelectorAll('[data-lang],.lg button').forEach(el=>el.addEventListener('click',()=>window.setTimeout(apply,0)));
  apply();
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();


/* HORROR AESTHETIC — classic touch: seven blood shards (the original effect, no explosion).
   The home page already has this from home.js, so it is skipped there. */
(() => {
  'use strict';
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (document.querySelector('script[src*="home.js"]')) return;
  if (document.documentElement.dataset.haShards) return;
  document.documentElement.dataset.haShards = '1';
  const N = 7;
  document.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button) return;
    const t = e.target;
    if (t && t.closest && t.closest('input, textarea, select, video, audio, [contenteditable="true"]')) return;
    for (let k = 0; k < N; k++) {
      const p = document.createElement('i');
      p.className = 'jx-p';
      p.style.left = e.clientX + 'px';
      p.style.top = e.clientY + 'px';
      p.style.setProperty('--a', (k * 360 / N + Math.random() * 30 - 15).toFixed(0) + 'deg');
      p.style.setProperty('--d', (26 + Math.random() * 26).toFixed(0) + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  }, { passive: true });
})();

/* HORROR AESTHETIC — visual layer 2 (subpages only: reviews, database) */
(() => {
  'use strict';
  const init = () => {
    const w = document.querySelector('.w article'), shell = document.querySelector('.shell');
    if (!w && !shell) return;
    if (document.querySelector('script[src*="home.js"]')) return;
    document.body.classList.add('ha-fx');
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      const fog = document.createElement('div');
      fog.className = 'ha-fog'; fog.setAttribute('aria-hidden', 'true'); fog.innerHTML = '<i></i><i></i>';
      document.body.appendChild(fog);
    }
    if (w) {
      const img = w.querySelector('.hpst img');
      if (img) w.style.setProperty('--poster', 'url("' + (img.currentSrc || img.src) + '")');
      const sc = w.querySelector('.sc b');
      const m = sc && /([0-9.]+)\s*\/\s*5/.exec(sc.textContent);
      if (m && !w.querySelector('.ha-stars')) {
        const v = Math.max(0, Math.min(5, parseFloat(m[1])));
        const st = document.createElement('div'); st.className = 'ha-stars'; st.setAttribute('aria-hidden', 'true');
        for (let i = 0; i < 5; i++) {
          const s = document.createElement('i');
          s.style.setProperty('--f', (Math.max(0, Math.min(1, v - i)) * 100).toFixed(0) + '%');
          st.appendChild(s);
        }
        w.querySelector('.sc').after(st);
      }
    }
    const cover = document.querySelector('.ha-editorial-cover');
    if (cover && !reduce && !cover.querySelector('.ha-flame')) {
      const f = document.createElement('i'); f.className = 'ha-flame'; f.setAttribute('aria-hidden', 'true'); cover.appendChild(f);
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();

/* HORROR AESTHETIC — visual layer 3: reading progress bar + poster strip on film reviews */
(() => {
  'use strict';
  const init = () => {
    const art = document.querySelector('.w article');
    if (!art || document.querySelector('script[src*="home.js"]')) return;
    const isReview = /\/reviews\/[^/]+\.html$/.test(location.pathname);
    if (isReview) {
      const bar = document.createElement('div'); bar.className = 'ha-prog'; bar.setAttribute('aria-hidden', 'true');
      document.body.appendChild(bar);
      let tick = false;
      const upd = () => {
        tick = false;
        const h = document.documentElement.scrollHeight - innerHeight;
        bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0).toFixed(3) + ')';
      };
      addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
      upd();
    }
    const here = location.pathname.split('/').pop();
    if (!art.querySelector('.hpst') || !isReview) return;
    fetch('/horror-aesthetic/data/film-strip.json').then(r => r.ok ? r.json() : []).then(list => {
      const items = list.filter(x => x.r.split('/').pop() !== here);
      if (!items.length || document.querySelector('.ha-strip')) return;
      const sec = document.createElement('section'); sec.className = 'ha-strip';
      sec.innerHTML = '<h4><span class="l-ru">Из архива постеров</span><span class="l-en">From the poster archive</span></h4><ul></ul>';
      const ul = sec.querySelector('ul');
      items.forEach(x => {
        const li = document.createElement('li');
        const a = document.createElement('a'); a.href = '/horror-aesthetic/' + x.r;
        const im = document.createElement('img'); im.src = '/horror-aesthetic/' + x.p; im.width = 640; im.height = 960; im.loading = 'lazy'; im.decoding = 'async'; im.alt = x.t + ' (' + x.y + ')';
        const sp = document.createElement('span'); sp.textContent = x.y + ' · ' + x.t;
        a.append(im, sp); li.appendChild(a); ul.appendChild(li);
      });
      const rel = document.querySelector('.rel');
      if (rel) rel.before(sec); else art.after(sec);
    }).catch(() => {});
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();

/* HORROR AESTHETIC — kaidan fireflies (phones and subpages; desktop home keeps its own canvas) */
(() => {
  'use strict';
  const html = document.documentElement;
  const isHome = !!document.querySelector('script[src*="home.js"]');
  const mq = q => window.matchMedia && window.matchMedia(q).matches;
  if (mq('(prefers-reduced-motion: reduce)')) return;
  let cv, ctx, raf = 0, flies = [], sprite, last = 0, W = 0, H = 0, tt = 0;
  const tone = () => html.dataset.tone || (() => { try { return localStorage.getItem('ha-tone') || 'kaidan'; } catch (e) { return 'kaidan'; } })();
  const want = () => tone() === 'kaidan' && !html.classList.contains('ha-calm') && !document.hidden;
  const makeSprite = () => {
    const s = document.createElement('canvas'); s.width = s.height = 48;
    const c = s.getContext('2d'), g = c.createRadialGradient(24, 24, 0, 24, 24, 24);
    g.addColorStop(0, 'rgba(255,255,225,1)'); g.addColorStop(.1, 'rgba(236,255,150,.95)');
    g.addColorStop(.28, 'rgba(190,245,110,.42)'); g.addColorStop(.6, 'rgba(120,205,95,.12)'); g.addColorStop(1, 'rgba(90,170,80,0)');
    c.fillStyle = g; c.fillRect(0, 0, 48, 48); return s;
  };
  const size = () => { W = innerWidth; H = innerHeight; cv.width = W; cv.height = H; };
  const init = () => {
    const n = W < 760 ? 22 : 34;
    flies = Array.from({ length: n }, (_, k) => {
      const z = k % 5 === 0 ? 1 : (k % 3 === 0 ? .72 : .45 + Math.random() * .2); /* depth: 1 = near, large and soft */
      return {
        x: Math.random() * W, y: H * (.2 + Math.random() * .8), a: Math.random() * 6.28, v: (7 + Math.random() * 14) * (.5 + z * .6),
        t: Math.random() * 6.28, f: .35 + Math.random() * .8, s: .5 + z * 1.15, z, w: Math.random() * 6.28, p: Math.random() * 100
      };
    });
  };
  const frame = ts => {
    raf = requestAnimationFrame(frame);
    if (ts - last < 33) return;
    const dt = Math.min(.08, (ts - last) / 1000); last = ts; tt += dt;
    ctx.clearRect(0, 0, W, H);
    for (const f of flies) {
      f.w += dt * .5; f.a += (Math.sin(f.w) * 1.3 + Math.sin(f.w * .37 + f.p) * .8) * dt; f.t += dt * f.f;
      f.x += Math.cos(f.a) * f.v * dt; f.y += Math.sin(f.a) * f.v * dt * .65 - 1.6 * dt * f.z;
      const m = 40 * f.s;
      if (f.x < -m) f.x = W + m * .5; else if (f.x > W + m) f.x = -m * .5;
      if (f.y < -m) f.y = H + m * .5; else if (f.y > H + m) f.y = -m * .5;
      /* slow swell with an occasional quick double flash, like a real firefly */
      const sw = Math.max(0, Math.sin(f.t)), fl = Math.max(0, Math.sin(f.t * 5.3 + f.p)) * (Math.sin(f.t * .5) > .6 ? 1 : 0);
      const al = (.05 + .95 * Math.pow(sw, 2.2) + .5 * fl * fl) * (.45 + .55 * f.z);
      const d = 46 * f.s;
      ctx.globalAlpha = Math.min(1, al); ctx.drawImage(sprite, f.x - d / 2, f.y - d / 2, d, d);
      if (f.z > .7 && al > .5) { ctx.globalAlpha = Math.min(1, al) * .35; ctx.drawImage(sprite, f.x - d, f.y - d, d * 2, d * 2); }
    }
    ctx.globalAlpha = 1;
  };
  const start = () => {
    if (cv) return;
    cv = document.createElement('canvas'); cv.className = 'ha-flies'; cv.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cv); ctx = cv.getContext('2d'); sprite = sprite || makeSprite();
    size(); init(); html.classList.add('ha-ff'); last = 0; raf = requestAnimationFrame(frame);
  };
  const stop = () => { if (!cv) return; cancelAnimationFrame(raf); cv.remove(); cv = null; html.classList.remove('ha-ff'); };
  const sync = () => (want() ? start() : stop());
  addEventListener('resize', () => { if (cv) { size(); init(); } });
  document.addEventListener('visibilitychange', sync);
  new MutationObserver(sync).observe(html, { attributes: true, attributeFilter: ['data-tone', 'class'] });
  const boot = () => sync();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true }); else boot();
})();

/* HORROR AESTHETIC — fogged glass on subpages (home.js has its own). Idle 25 s, wipe with a finger or mouse. ?fog=1 shows it at once. */
(() => {
  'use strict';
  if (document.querySelector('script[src*="home.js"]')) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const html = document.documentElement, FS = 3;
  let idle = 0, on = false, cv, fx, last = null, timers = [];
  const calm = () => html.classList.contains('ha-calm');
  const lastFog = () => { try { return +localStorage.getItem('ha-fog-last') || 0; } catch (e) { return 0; } };
  const bump = () => { idle = 0; };
  ['pointermove', 'keydown', 'scroll', 'touchstart', 'click'].forEach(e => addEventListener(e, bump, { passive: true }));
  const hand = (x, y, sc, rot) => {
    fx.save(); fx.translate(x, y); fx.rotate(rot); fx.scale(sc, sc); fx.globalCompositeOperation = 'destination-out';
    fx.shadowColor = '#000'; fx.shadowBlur = 7; fx.fillStyle = '#000'; fx.beginPath(); fx.ellipse(0, 0, 24, 30, 0, 0, 7); fx.fill();
    [[-32, -26, -.5, 36], [-14, -48, -.18, 40], [6, -54, .04, 42], [24, -46, .26, 38], [38, -6, 1.1, 30]].forEach(f => {
      fx.save(); fx.translate(f[0], f[1]); fx.rotate(f[2]); fx.beginPath();
      fx.roundRect ? fx.roundRect(-6, -f[3], 12, f[3] + 6, 6) : fx.rect(-6, -f[3], 12, f[3] + 6); fx.fill(); fx.restore();
    });
    fx.restore();
  };
  const writeTxt = (x, y) => {
    fx.save(); fx.globalCompositeOperation = 'destination-out'; fx.shadowColor = '#000'; fx.shadowBlur = 5; fx.fillStyle = '#000'; fx.strokeStyle = '#000';
    fx.font = '700 ' + Math.min(96, innerWidth / 6) + "px 'Noto Sans JP','Hiragino Sans','Yu Gothic',sans-serif"; fx.textAlign = 'center';
    const s = '助けて'; fx.fillText(s, x, y); const w = fx.measureText(s).width;
    for (let i = 0; i < 6; i++) {
      const dx = x - w / 2 + w * (.1 + Math.random() * .8), L = 40 + Math.random() * 90;
      fx.lineWidth = 2 + Math.random() * 2; fx.beginPath(); fx.moveTo(dx, y + 6); fx.lineTo(dx, y + 6 + L); fx.stroke();
    }
    fx.restore();
  };
  const end = () => { timers.forEach(clearTimeout); timers = []; if (cv) { cv.remove(); cv = null; } on = false; };
  const start = () => {
    if (on || document.hidden) return; on = true; last = null;
    try { localStorage.setItem('ha-fog-last', String(Date.now())); } catch (e) {}
    cv = document.createElement('canvas'); cv.className = 'ha-fogglass'; cv.setAttribute('aria-hidden', 'true');
    cv.width = Math.ceil(innerWidth / FS); cv.height = Math.ceil(innerHeight / FS);
    document.body.appendChild(cv); fx = cv.getContext('2d'); fx.scale(1 / FS, 1 / FS);
    fx.fillStyle = 'rgba(176,196,198,.34)'; fx.fillRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < 1800; i++) {
      fx.fillStyle = 'rgba(' + (190 + Math.random() * 50 | 0) + ',215,215,' + (Math.random() * .12).toFixed(3) + ')';
      fx.fillRect(Math.random() * innerWidth, Math.random() * innerHeight, 3 + Math.random() * 9, 3 + Math.random() * 9);
    }
    requestAnimationFrame(() => cv && cv.classList.add('on'));
    const W = innerWidth, H = innerHeight, sd = Math.random() < .5 ? .25 : .72, t = (f, ms) => timers.push(setTimeout(f, ms));
    t(() => on && hand(W * sd, H * .56, 1.2, (Math.random() - .5) * .5), 6500);
    t(() => on && hand(W * (sd + .1), H * .4, 1.05, (Math.random() - .5) * .6), 9500);
    t(() => on && writeTxt(W * (.35 + Math.random() * .3), H * .26), 13500);
    t(() => cv && cv.classList.add('out'), 30000);
    t(end, 35500);
  };
  const wipe = (x, y) => {
    if (!on || !fx) return;
    fx.save(); fx.globalCompositeOperation = 'destination-out'; fx.shadowColor = '#000'; fx.shadowBlur = 14; fx.strokeStyle = '#000'; fx.lineCap = 'round'; fx.lineWidth = 46;
    fx.beginPath(); if (last) fx.moveTo(last[0], last[1]); else fx.moveTo(x, y); fx.lineTo(x + .1, y); fx.stroke(); fx.restore(); last = [x, y];
  };
  addEventListener('pointermove', e => wipe(e.clientX, e.clientY), { passive: true });
  addEventListener('touchmove', e => { const p = e.touches[0]; if (p) wipe(p.clientX, p.clientY); }, { passive: true });
  ['pointerup', 'touchend'].forEach(e => addEventListener(e, () => { last = null; }));
  setInterval(() => { idle++; if (idle >= 25 && !on && !calm() && !document.hidden && Date.now() - lastFog() > 360000) start(); }, 1000);
  if (/[?&]fog=1/.test(location.search)) setTimeout(start, 1200);
})();

/* comments (giscus) on review and creepypasta pages */
(function(){try{if(!/\/(reviews|creepypasta)\/[^\/]+\.html$/.test(location.pathname)||/\/index\.html$/.test(location.pathname))return;var l=document.createElement("link");l.rel="stylesheet";l.href="/horror-aesthetic/comments.css?v=2";document.head.appendChild(l);var s=document.createElement("script");s.src="/horror-aesthetic/comments.js?v=2";s.defer=true;document.head.appendChild(s)}catch(e){}})();
