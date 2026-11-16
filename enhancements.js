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

/* HORROR AESTHETIC — personal dossier shelf 2.0 / reading tracker */
(() => {
  'use strict';
  const KEY = 'ha-personal-dossiers-v1';
  const ru = (document.documentElement.dataset.l || document.documentElement.lang || 'en').toLowerCase().startsWith('ru');
  const t = (en, r) => ru ? r : en;
  const safeUrl = value => {
    try { const u = new URL(value, location.href); return u.origin === location.origin && /^https?:$/.test(u.protocol) ? u.href : null; }
    catch (_) { return null; }
  };
  const read = () => {
    try {
      const value = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(value) ? value.filter(x => x && typeof x.title === 'string' && safeUrl(x.url)).slice(0, 300).map(x => ({
        title: x.title.slice(0, 240), url: safeUrl(x.url), kind: String(x.kind || t('SAVED PAGE','СОХРАНЁННАЯ СТРАНИЦА')).slice(0, 80),
        savedAt: x.savedAt || new Date().toISOString(), status: x.status === 'read' ? 'read' : 'unread', note: String(x.note || '').slice(0, 500)
      })) : [];
    } catch (_) { return []; }
  };
  const write = items => { try { localStorage.setItem(KEY, JSON.stringify(items.slice(0, 300))); return true; } catch (_) { return false; } };
  const canonical = document.querySelector('link[rel="canonical"]');
  const url = safeUrl(canonical ? canonical.href : location.href.split('#')[0]) || location.href.split('#')[0];
  const heading = document.querySelector('main h1, article h1, h1');
  const title = (heading && heading.textContent.trim()) || document.title || location.pathname;
  const kind = /\/reviews?\//.test(location.pathname) ? t('FILM DOSSIER','ДОСЬЕ ФИЛЬМА') : /\/articles?\//.test(location.pathname) ? t('FEATURE','СТАТЬЯ') : t('ARCHIVE PAGE','РАЗДЕЛ АРХИВА');
  const button = document.createElement('button');
  button.type = 'button'; button.className = 'ha-shelf-trigger'; button.setAttribute('aria-haspopup','dialog');
  button.innerHTML = '<span aria-hidden="true">▤</span><span class="ha-shelf-trigger-label">' + t('MY ARCHIVE','МОЙ АРХИВ') + '</span>';
  const panel = document.createElement('section');
  panel.className = 'ha-shelf-panel'; panel.hidden = true; panel.setAttribute('role','dialog'); panel.setAttribute('aria-modal','false'); panel.setAttribute('aria-labelledby','ha-shelf-title');
  panel.innerHTML = '<div class="ha-shelf-head"><div><small>HORROR AESTHETIC / PERSONAL FILE</small><h2 id="ha-shelf-title">' + t('MY ARCHIVE','МОЙ АРХИВ') + '</h2></div><button type="button" class="ha-shelf-close" aria-label="' + t('Close','Закрыть') + '">×</button></div><p class="ha-shelf-note">' + t('A private reading tracker stored only in this browser.','Личный список чтения хранится только в этом браузере.') + '</p><div class="ha-shelf-actions"><button type="button" data-action="save"></button><button type="button" data-action="export">' + t('EXPORT','ЭКСПОРТ') + '</button><button type="button" data-action="import">' + t('IMPORT','ИМПОРТ') + '</button></div><input class="ha-shelf-file" type="file" accept="application/json,.json" hidden><input class="ha-shelf-search" type="search" placeholder="' + t('Search saved pages…','Поиск в сохранённом…') + '" aria-label="' + t('Search saved pages','Поиск сохранённых страниц') + '"><p class="ha-shelf-count" aria-live="polite"></p><ul class="ha-shelf-list"></ul><button type="button" class="ha-shelf-clear">' + t('CLEAR MY ARCHIVE','ОЧИСТИТЬ МОЙ АРХИВ') + '</button>';
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
    const shown = items.filter(x => (x.title + ' ' + x.kind + ' ' + x.note).toLocaleLowerCase().includes(query));
    if (!shown.length) { const empty = document.createElement('li'); empty.className = 'ha-shelf-empty'; empty.textContent = items.length ? t('No matching pages.','Совпадений не найдено.') : t('Your archive is empty. Save a film dossier or research section.','Здесь пока пусто. Сохраняйте рецензии и исследовательские разделы.'); list.append(empty); }
    shown.forEach(item => {
      const li = document.createElement('li'); li.className = 'ha-shelf-item' + (item.status === 'read' ? ' is-read' : '');
      const a = document.createElement('a'); a.href = item.url; a.textContent = item.title;
      const meta = document.createElement('small'); meta.textContent = item.kind + ' · ' + (item.status === 'read' ? t('READ','ПРОЧИТАНО') : t('TO READ','К ПРОЧТЕНИЮ'));
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
  save.addEventListener('click', () => { const items = read(); if (!items.some(x => x.url === url)) { items.unshift({title, url, kind, savedAt:new Date().toISOString(), status:'unread', note:''}); if (!write(items)) alert(t('Storage is full. Export your archive and remove older items.','Недостаточно места. Экспортируйте архив и удалите старые записи.')); } render(); });
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
  render();
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
  const tones = ['kaidan','ringu','blue','green','juon','tomie','blood','psy','clean'];
  const labels = {
    kaidan:['🎞 Тон: Кайдан','🎞 Tone: Kaidan'],
    ringu:['🎞 Тон: Звонок','🎞 Tone: Ringu'],
    blue:['🎞 Тон: Синий','🎞 Tone: Blue'],
    green:['🎞 Тон: Зелёный','🎞 Tone: Green'],
    juon:['🎞 Тон: Проклятие','🎞 Tone: Ju-On'],
    tomie:['🎞 Тон: Томие','🎞 Tone: Tomie'],
    blood:['🎞 Тон: Кровь','🎞 Tone: Blood'],
    psy:['🎞 Тон: Психологический','🎞 Tone: Psychological'],
    clean:['🎞 Тон: Ясный','🎞 Tone: Clear']
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
