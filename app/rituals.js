(function () {
  const STORE = 'ha-rituals-v1';
  const DAY = 86400000;
  const BADGE = 'night-data/challenge.webp?v=1';
  const DATE = /^\d{4}-\d{2}-\d{2}$/;
  const safeSlug = /^[a-z0-9_-]+$/;
  const validDay = day => typeof day === "string" && DATE.test(day) && Number.isFinite(Date.parse(day + "T00:00:00Z"));
  const ordinal = day => Date.parse(day + 'T00:00:00Z') / DAY;
  const addDays = (day, count) => new Date((ordinal(day) + count) * DAY).toISOString().slice(0, 10);
  const parse = (key, fallback = {}) => {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
  };

  async function json(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(path);
    return res.json();
  }

  function create(data, stories, api) {
    const { D, T, lang, esc, film, filmTitle, posterPath } = api;
    const { yokai, films, atlas, challenge, filmGenres, genres, genreYokai } = data;
    const bridge = window.HANative;
    const index = new Map(yokai.map((row, i) => [row[0], i]));
    let notifyEnabled = false;
    let audio, source, volume, ambience = '';

    function readState() {
      const raw = parse(STORE);
      const keys = value => (Array.isArray(value) ? value : []).filter(id => typeof id === 'string' && safeSlug.test(id));
      return {
        unlocked: keys(raw.unlocked).filter(id => index.has(id)),
        seen: keys(raw.seen),
        badges: keys(raw.badges),
        claim: validDay(raw.claim) ? raw.claim : '',
        start: validDay(raw.start) ? raw.start : '',
        watched: keys(raw.watched).filter(id => challenge.includes(id)),
        award: validDay(raw.award) ? raw.award : '',
        filmRewards: Number.isSafeInteger(raw.filmRewards) && raw.filmRewards >= 0 ? raw.filmRewards : 0,
        badgeRewards: Number.isSafeInteger(raw.badgeRewards) && raw.badgeRewards >= 0 ? raw.badgeRewards : 0,
      };
    }

    function save(state) {
      try { localStorage.setItem(STORE, JSON.stringify(state)); } catch { /* storage may be unavailable */ }
    }

    function daily() {
      const day = ordinal(D.today());
      return yokai[(day % yokai.length + yokai.length) % yokai.length];
    }

    function tonight() {
      const day = ordinal(D.today());
      return films[(Math.imul(day, 2654435761) >>> 0) % films.length][0];
    }

    function giveBonus(state, avoid) {
      const id = yokai.find(([id]) => id !== avoid && !state.unlocked.includes(id))?.[0];
      if (id) state.unlocked.push(id);
    }

    function sync() {
      const state = readState(), initial = JSON.stringify(state);
      const entries = D.all(), today = D.today();
      state.seen = [...new Set([...state.seen, ...Object.keys(entries).filter(id => entries[id]?.w && safeSlug.test(id))])];
      const achievements = parse('ha-streak').ach || {};
      state.badges = [...new Set([...state.badges, ...Object.keys(achievements).filter(id => achievements[id] && safeSlug.test(id))])];
      const filmRewards = Math.floor(state.seen.length / 3), badgeRewards = Math.floor(state.badges.length / 4);
      const newRewards = Math.max(0, filmRewards - state.filmRewards) + Math.max(0, badgeRewards - state.badgeRewards);
      const todayId = daily()[0];
      const reserve = state.claim === today ? '' : todayId;
      for (let n = 0; n < Math.min(newRewards, yokai.length); n++) giveBonus(state, reserve);
      state.filmRewards = Math.max(state.filmRewards, filmRewards);
      state.badgeRewards = Math.max(state.badgeRewards, badgeRewards);
      if (state.start) {
        for (const [i, id] of challenge.entries()) {
          const available = addDays(state.start, i), date = entries[id]?.w;
          if (available <= today && typeof date === 'string' && DATE.test(date) && date >= available && date <= today && !state.watched.includes(id)) {
            state.watched.push(id);
          }
        }
        if (state.watched.length === challenge.length && !state.award) {
          state.award = today;
          giveBonus(state, reserve);
        }
      }
      if (JSON.stringify(state) !== initial) save(state);
      return state;
    }

    function name(row) { return T(row[1], row[2]); }

    function tile(id) {
      const slot = index.get(id);
      const x = (slot % atlas.columns) * 100 / (atlas.columns - 1);
      const y = Math.floor(slot / atlas.columns) * 100 / (atlas.rows - 1);
      return '<span class="night-tile" style="--x:' + x + '%;--y:' + y + '%;--atlas:' + atlas.columns * 100 + '% ' + atlas.rows * 100 + '%" aria-hidden="true"></span>';
    }

    function art(id) {
      const figure = window.YK_HD?.[id];
      return figure ? '<span class="night-figure yk-art yk-hd"><svg viewBox="0 0 160 160" aria-hidden="true">' + figure + '</svg></span>' : tile(id);
    }

    function dailyCard() {
      const row = daily(), state = sync(), claimed = state.claim === D.today();
      return '<section class="night-card night-daily">' + art(row[0]) + '<div><p class="eyebrow">' +
        T('Ёкай дня', 'Yōkai of the day') + '</p><h2>' + esc(name(row)) + '</h2><div class="night-actions">' +
        (claimed ? '<span class="night-muted">' + T('Карта дня получена', 'Daily card claimed') + '</span>'
          : '<button type="button" class="go primary" data-night="claim">' + T('Забрать карту', 'Claim card') + '</button>') +
        '<a class="go" href="#yokai">' + T('Коллекция', 'Collection') + ' · ' + state.unlocked.length + '/' + yokai.length + '</a></div></div></section>';
    }

    function collection() {
      const state = sync();
      return '<h1 class="page-title">' + T('Коллекция ёкаев', 'Yōkai collection') + '</h1>' + dailyCard() +
        '<p class="night-muted">' + T('Новая карта за каждые 3 просмотренных фильма или 4 значка.', 'Earn a card for every 3 films watched or 4 badges.') + '</p>' +
        '<div class="night-grid">' + yokai.map(row => state.unlocked.includes(row[0])
          ? '<a class="night-entry" href="#yokai-card/' + row[0] + '">' + tile(row[0]) + '<b>' + esc(name(row)) + '</b></a>'
          : '<div class="night-entry locked">' + tile(row[0]) + '<span>' + T('Закрыто', 'Locked') + '</span></div>').join('') + '</div>';
    }

    function yokaiCard(id) {
      if (!index.has(id) || !sync().unlocked.includes(id)) return '<p class="empty">' + T('Карта закрыта.', 'The card is locked.') + '</p>';
      const info = window.YK_NAME?.[id];
      return '<h1 class="page-title">' + esc(name(yokai[index.get(id)])) + '</h1><section class="night-card night-detail">' + art(id) +
        '<p>' + esc(info ? T(info[2], info[3]) : '') + '</p></section><a class="btn" href="#yokai">' + T('К коллекции', 'Back to collection') + '</a>';
    }

    function moods() {
      const options = [
        ['cry', 'darkwater', 'Хочу плакать', 'I want to cry'],
        ['awake', 'kairo', 'Хочу не спать', 'Keep me awake'],
        ['friends', 'hausu', 'С друзьями', 'With friends'],
      ];
      return '<div class="night-moods">' + options.map(([key,id,ru,en]) => {
        const path = posterPath(id);
        return '<a class="night-mood" href="#pick/' + key + '">' + (path ? '<img src="' + esc(path) + '" alt="" decoding="async">' : '') +
          '<b>' + T(ru,en) + '<span aria-hidden="true"> ↗</span></b></a>';
      }).join('') + '</div>';
    }

    function award(state = sync()) {
      return state.award ? '<div class="night-card night-award"><img src="' + BADGE + '" alt="" width="70" height="70"><div><b>' +
        T('31 день хоррора', '31 Days of Horror') + '</b><span>' + T('Значок получен', 'Badge unlocked') + '</span></div></div>' : '';
    }

    function challengePage() {
      const state = sync(), today = D.today();
      const title = '<h1 class="page-title">' + T('31 день хоррора', '31 Days of Horror') + '</h1>';
      if (!state.start) return title + '<section class="night-card night-award"><img src="' + BADGE +
        '" width="70" height="70" alt=""><div><p>' + T('Фильм на каждый день. Отмечай просмотры и получи значок за все 31.', 'A film each day. Log all 31 to earn the badge.') +
        '</p><button class="go primary" type="button" data-night="challenge">' + T('Начать', 'Start') + '</button></div></section>';
      return title + award(state) + '<p class="night-muted">' + T('Просмотрено', 'Watched') + ' · ' + state.watched.length + ' / ' +
        challenge.length + '</p><progress class="night-progress" max="' + challenge.length + '" value="' + state.watched.length +
        '" aria-label="' + T('Прогресс челленджа', 'Challenge progress') + '"></progress><ol class="night-days">' +
        challenge.map((id, i) => {
          const date = addDays(state.start, i);
          const done = state.watched.includes(id), locked = date > today;
          return '<li class="' + (locked ? 'locked' : '') + '"><span>' + (i + 1) + '</span>' +
            (locked ? '<b>' + esc(filmTitle(film(id))) + '</b>' : '<a href="#film/' + id + '">' + esc(filmTitle(film(id))) + '</a>') +
            '<small>' + (done ? T('Смотрел ✓', 'Watched ✓') : esc(date.slice(5).split('-').reverse().join('.'))) + '</small></li>';
        }).join('') + '</ol>';
    }

    function storyImage(story, lazy) {
      return '<img src="../img/mag/' + esc(story.img) + '.webp" alt="' + esc(lazy ? '' : T(story.alt, '')) + '" ' +
        (lazy ? 'loading="lazy" ' : '') + 'decoding="async">';
    }

    function storiesPage(id) {
      if (!id) return '<h1 class="page-title">' + T('Крипипасты', 'Creepypastas') + '</h1><div class="night-stories">' +
        stories.map(s => '<a class="night-card night-story" href="#story/' + esc(s.slug) + '">' + storyImage(s, true) +
          '<div><b>' + esc(T(s.ru_t, s.en_t)) + '</b><p>' + esc(T(s.d_ru, s.d_en)) + '</p></div></a>').join('') + '</div>';
      const story = stories.find(s => s.slug === id);
      if (!story) return '<p class="empty">' + T('История не найдена.', 'Story not found.') + '</p>';
      return '<article class="night-reader"><h1 class="page-title">' + esc(T(story.ru_t, story.en_t)) + '</h1>' +
        '<p class="night-muted">' + esc(T(story.ru_m, story.en_m)) + '</p>' + soundButtons() + storyImage(story, false) +
        T(story.ru, story.en).map(p => '<p>' + esc(p).replace(/&lt;(\/?(?:code|em|strong|i|b))&gt;/gi, '<$1>') + '</p>').join('') +
        '</article><a class="btn" href="#stories">' + T('Все крипипасты', 'All stories') + '</a>';
    }

    function soundButtons() {
      return '<div class="night-sound" role="group" aria-label="' + T('Фоновый звук', 'Ambient sound') + '">' +
        [['rain', 'Дождь', 'Rain'], ['tv', 'Гул ТВ', 'TV hum']].map(([mode,ru,en]) =>
          '<button type="button" class="go" data-night="sound-' + mode + '" aria-pressed="' + (ambience === mode) + '">' + T(ru,en) + '</button>').join('') +
        '<span class="night-muted" role="status"></span></div>';
    }

    async function setSound(mode) {
      if (source) { source.stop(); source.disconnect(); source = null; }
      if (volume) { volume.disconnect(); volume = null; }
      const previous = ambience;
      ambience = '';
      try {
        if (previous !== mode) {
          const Context = window.AudioContext || window.webkitAudioContext;
          if (!Context) throw new Error('Web Audio');
          audio ||= new Context();
          await audio.resume();
          const count = audio.sampleRate * 3, buffer = audio.createBuffer(1, count, audio.sampleRate);
          const channel = buffer.getChannelData(0);
          for (let i = 0; i < count; i++) {
            const hum = Math.sin(2 * Math.PI * 50 * i / audio.sampleRate);
            channel[i] = (Math.random() * 2 - 1) * (mode === 'rain' ? 0.8 : 0.26) + (mode === 'tv' ? hum * 0.45 : 0);
          }
          const filter = audio.createBiquadFilter();
          filter.type = mode === 'rain' ? 'bandpass' : 'lowpass';
          filter.frequency.value = mode === 'rain' ? 1300 : 1100;
          volume = audio.createGain();
          volume.gain.value = mode === 'rain' ? 0.15 : 0.09;
          source = audio.createBufferSource();
          source.buffer = buffer;
          source.loop = true;
          source.connect(filter).connect(volume).connect(audio.destination);
          source.start();
          ambience = mode;
        }
      } catch {
        document.querySelectorAll('.night-sound [role="status"]').forEach(el => {
          el.textContent = T('Звук недоступен.', 'Sound is unavailable.');
        });
      }
      document.querySelectorAll('[data-night^="sound-"]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.night === 'sound-' + ambience));
        button.disabled = false;
      });
    }

    document.addEventListener('visibilitychange', () => {
      if (!audio || !ambience) return;
      (document.hidden ? audio.suspend() : audio.resume()).catch(() => {});
    });

    function post(action, args = {}) {
      if (!bridge) return false;
      bridge.postMessage(JSON.stringify({ action, lang:lang(), ...args }));
      return true;
    }

    function paintNotifications() {
      const b = document.querySelector('[data-night="notify"]');
      if (!b) return;
      b.setAttribute('aria-pressed', String(notifyEnabled));
      b.textContent = notifyEnabled ? T('Выключить уведомления', 'Turn off notifications') : T('Включить уведомления', 'Turn on notifications');
    }

    if (bridge) {
      bridge.onmessage = event => {
        let update;
        try { update = JSON.parse(event.data); } catch { return; }
        if (typeof update.enabled === 'boolean') {
          notifyEnabled = update.enabled;
          paintNotifications();
        }
        if (update.error) {
          const target = document.getElementById(update.error === 'share' ? 'night-wrap-status' : 'night-notify-status');
          if (target) target.textContent = update.error === 'share' ? T('Не удалось открыть отправку.', 'Could not open sharing.') :
            T('Разреши уведомления в настройках Android.', 'Allow notifications in Android settings.');
        }
      };
      post('status');
    }

    function notifications() {
      if (!bridge) return '';
      return '<h2 class="sh">' + T('Уведомления', 'Notifications') + '</h2><div class="night-card night-setting"><b>' +
        T('Фильм ночи', 'Film of the night') + '</b><span>' + T('Каждый вечер около 21:00', 'Every evening around 9 PM') +
        '</span><button class="go" type="button" data-night="notify" aria-pressed="' + notifyEnabled + '">' +
        (notifyEnabled ? T('Выключить уведомления', 'Turn off notifications') : T('Включить уведомления', 'Turn on notifications')) +
        '</button><div id="night-notify-status" class="night-muted" role="status"></div></div>';
    }

    function handle(button, refresh) {
      const action = button.dataset.night;
      if (action === 'claim') {
        const state = sync(), today = D.today();
        if (state.claim === today) return;
        const id = daily()[0];
        if (!state.unlocked.includes(id)) state.unlocked.push(id);
        state.claim = today;
        save(state);
        refresh();
      } else if (action === 'challenge') {
        const state = sync();
        if (!state.start) { state.start = D.today(); save(state); }
        refresh();
      } else if (action?.startsWith('sound-')) {
        document.querySelectorAll('[data-night^="sound-"]').forEach(b => { b.disabled = true; });
        setSound(action.slice(6));
      } else if (action === 'notify') {
        document.querySelector('#night-notify-status').textContent = '';
        post('notify', {enabled: !notifyEnabled});
      }
    }

    function wrapStats(period) {
      const today = D.today(), entries = D.all();
      const from = period === 'week' ? addDays(today, -6) : today.slice(0, 4) + '-01-01';
      const watched = Object.keys(entries).filter(id => {
        const date = entries[id]?.w;
        return typeof date === 'string' && DATE.test(date) && date >= from && date <= today;
      });
      const score = new Map();
      for (const id of watched) {
        const tags = filmGenres[id] || [];
        for (const genre of tags) score.set(genre, (score.get(genre) || 0) + ((entries[id].r || 6) / tags.length));
      }
      const favorite = [...score].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0];
      const best = watched.sort((a,b) => (entries[b].r || 0) - (entries[a].r || 0)).map(id => film(id)).filter(Boolean).slice(0,3);
      return { count:watched.length, best, genre:genres[favorite]?.[lang()], yokai:yokai[index.get(genreYokai[favorite] || daily()[0])] };
    }

    return {
      tonight, dailyCard, collection, yokaiCard, moods, challengePage, storiesPage, soundButtons, notifications, award, handle, sync, post,
      moodIds: key => data.moods[key],
      storyAssets: stories.map(story => '../img/mag/' + story.img + '.webp'),
      wrapStats, atlas, yokaiSlot:id => index.get(id),
    };
  }

  window.HANightApp = { create, load: () => Promise.all([json('night-data/rituals.json?v=1'), json('night-data/stories.json?v=1')]) };
})();
