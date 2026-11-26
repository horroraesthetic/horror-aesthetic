(() => {
  'use strict';
  const diary = window.HA_DIARY;
  const root = document.documentElement;
  const byId = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char =>
    ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'})[char]);
  let ru = false;
  try { ru = localStorage.getItem('ha-lang') === 'ru'; } catch (_) {}
  const t = (en, translated) => ru ? translated : en;
  const suggested = [
['Ringu','1998','Hideo Nakata','Japan','J-Horror · supernatural','A cursed videotape turns ordinary domestic spaces into instruments of dread.'],['Ju-On: The Grudge','2002','Takashi Shimizu','Japan','J-Horror · haunted house','A curse born from violent death spreads through every person it touches.'],['Pulse','2001','Kiyoshi Kurosawa','Japan','J-Horror · existential','A quiet, desolate vision of loneliness leaking through the screens of modern life.'],['Dark Water','2002','Hideo Nakata','Japan','J-Horror · psychological','A mother and daughter move into an apartment haunted by a persistent presence.'],['Noroi: The Curse','2005','Kōji Shiraishi','Japan','Found footage · occult','A documentary filmmaker follows fragments of a disturbing supernatural pattern.'],['Audition','1999','Takashi Miike','Japan','Psychological · extreme','A seemingly ordinary audition conceals a deeply unsettling emotional labyrinth.'],['Onibaba','1964','Kaneto Shindō','Japan','Folk horror · historical','A stark tale of survival, desire and a demonic mask in the reeds.'],['Kwaidan','1964','Masaki Kobayashi','Japan','Anthology · folklore','Four meticulously composed ghost stories drawn from Japanese supernatural lore.'],['Cure','1997','Kiyoshi Kurosawa','Japan','Psychological · crime','A detective investigates a series of murders linked by an inexplicable blankness.'],['Tetsuo: The Iron Man','1989','Shinya Tsukamoto','Japan','Body horror · cyberpunk','A feverish transformation of flesh, metal and industrial anxiety.'],['House','1977','Nobuhiko Obayashi','Japan','Fantasy · haunted house','A group of schoolgirls encounter surreal horrors at a remote country house.'],['A Tale of Two Sisters','2003','Kim Jee-woon','South Korea','Psychological · gothic','A homecoming becomes a fractured puzzle of memory, grief and dread.'],['The Wailing','2016','Na Hong-jin','South Korea','Occult · folk horror','A village is consumed by suspicion after a mysterious stranger arrives.'],['Shutter','2004','Banjong Pisanthanakun, Parkpoom Wongpoom','Thailand','Supernatural · photography','A photographer discovers a disturbing presence in the images he develops.'],['The Eye','2002','Oxide Pang, Danny Pang','Hong Kong','Supernatural · vision','A transplant recipient begins seeing things that should not be visible.'],['The Medium','2021','Banjong Pisanthanakun','Thailand','Found footage · possession','A documentary crew follows a shamanic family and a terrifying inheritance.']
];
  const status = entry => entry.w ? 'seen' : entry.wl ? 'planned' : '';
  const savedRows = () => Object.entries(diary.all()).map(([id, entry]) => {
    const film = diary.film(id);
    return {id, entry, en: film?.en || entry.title || id, ru: film?.ru || entry.title || id,
      year: film?.year || entry.year || '', director: film?.director || '', review: film?.review};
  });
  const title = row => t(row.en, row.ru);
  const fallback = () => alert(t('Could not save to this browser.', 'Не удалось сохранить данные в браузере.'));
  function set(id, patch) {
    if (diary.set(id, patch) === false) fallback();
  }
  function render() {
    const saved = savedRows();
    const rows = new Map(saved.map(row => [row.id, row]));
    for (const [en, year, director, country, genre, description] of suggested) {
      const id = diary.identify({title: en, year});
      const film = diary.film(id);
      if (rows.has(id)) Object.assign(rows.get(id), {country, genre, description});
      else rows.set(id, {id, en, ru:film?.ru || en, year, director, country, genre, description,
        review:film?.review, entry:{}});
    }
    const query = byId('sr-search').value.trim().toLowerCase();
    const filter = byId('sr-filter').value;
    const sort = byId('sr-sort').value;
    const visible = [...rows.values()].filter(row => (filter === 'all' || status(row.entry) === filter) &&
      [row.en, row.ru, row.director, row.country, row.entry.note].join(' ').toLowerCase().includes(query));
    visible.sort((a, b) => sort === 'year' ? Number(b.year) - Number(a.year) :
      sort === 'rating' ? (b.entry.r || 0) - (a.entry.r || 0) : title(a).localeCompare(title(b)));
    const seen = saved.filter(row => row.entry.w);
    const rated = seen.filter(row => row.entry.r > 0);
    byId('sr-total').textContent = saved.length;
    byId('sr-planned').textContent = saved.filter(row => status(row.entry) === 'planned').length;
    byId('sr-seen').textContent = seen.length;
    byId('sr-average').textContent = rated.length ?
      (rated.reduce((sum, row) => sum + row.entry.r, 0) / rated.length / 2).toFixed(1) : '—';
    const grid = byId('sr-grid');
    const focused = document.activeElement;
    const focusedCard = grid.contains(focused) ? focused.closest('.sr-card')?.dataset.id : null;
    const control = focusedCard && ['status', 'rating', 'note', 'remove'].find(name => focused.classList.contains(name));
    grid.replaceChildren();
    if (!visible.length) {
      grid.innerHTML = '<p class="sr-empty">' + t('No films match this view.', 'Нет фильмов для выбранных условий.') + '</p>';
      return;
    }
    for (const row of visible) {
      const entry = row.entry;
      const card = document.createElement('article');
      card.className = 'sr-card';
      card.dataset.id = row.id;
      const link = row.review ? '../reviews/' + encodeURIComponent(row.review) + '.html' :
        diary.film(row.id) ? '../?film=' + encodeURIComponent(diary.film(row.id).id) + '#catalog' : '';
      const meta = [row.year, row.country, row.genre].filter(Boolean).join(' / ');
      const labels = [['',t('Unmarked','Без отметки')],['planned',t('To watch','К просмотру')],['seen',t('Watched','Просмотрено')]];
      card.innerHTML = (meta ? '<div class="sr-meta">'+esc(meta)+'</div>' : '')+
        '<h2>'+(link ? '<a href="'+esc(link)+'">'+esc(title(row))+'</a>' : esc(title(row)))+'</h2>'+
        (row.director ? '<small>'+t('DIRECTED BY ','РЕЖИССЁР ')+esc(row.director)+'</small>' : '')+
        (row.description ? '<p>'+esc(row.description)+'</p>' : '')+
        (entry.note ? '<p style="white-space:pre-wrap">'+esc(entry.note)+'</p>' : '')+
        (entry.priorRatings?.length ? '<p>'+t('Previous ratings','Прежние оценки')+' · '+
          esc(entry.priorRatings.map(value => value / 2 + '/5').join(', '))+'</p>' : '')+
        '<div class="sr-card-foot"><select aria-label="'+t('Screening status','Статус просмотра')+'" class="status">'+
        labels.map(([value, label]) => '<option value="'+value+'"'+(status(entry)===value?' selected':'')+'>'+label+'</option>').join('')+
        '</select><select aria-label="'+t('Your rating','Ваша оценка')+'" class="rating">'+
        Array.from({length:11}, (_, value) => '<option value="'+value+'"'+((entry.r||0)===value?' selected':'')+'>'+
          (value ? value/2 : '—')+' / 5</option>').join('')+
        '</select><button type="button" class="note">'+(entry.note?t('Edit note','Изменить заметку'):t('Add note','Добавить заметку'))+'</button>'+
        (entry.w||entry.wl||entry.r||entry.note ? '<button type="button" class="remove" aria-label="'+t('Remove from log','Удалить из журнала')+'">×</button>' : '')+'</div>';
      const fields = {title: row.en, year:Number(row.year) || 0};
      card.querySelector('.status').onchange = event => {
        const value = event.target.value;
        set(row.id, {...fields, w:value==='seen'?entry.w||diary.today():0, wl:value==='planned'?1:0});
      };
      card.querySelector('.rating').onchange = event => {
        const r = Number(event.target.value);
        set(row.id, {...fields, r, ...(r ? {w:entry.w||diary.today(),wl:0} : {})});
      };
      card.querySelector('.note').onclick = () => {
        const note = prompt(t('Your private note','Личная заметка'), entry.note || '');
        if (note !== null) set(row.id, {...fields,note});
      };
      const remove = card.querySelector('.remove');
      if (remove) remove.onclick = () => set(row.id, {w:0,wl:0,r:0,note:'',priorRatings:[]});
      grid.append(card);
      if (control && row.id === focusedCard) card.querySelector('.' + control)?.focus({preventScroll:true});
    }
  }
  function localize() {
    root.lang = root.dataset.l = ru ? 'ru' : 'en';
    byId('sr-lang').textContent = ru ? 'ENGLISH' : 'РУССКИЙ';
    byId('sr-export').textContent = t('EXPORT LOG','ЭКСПОРТ ЖУРНАЛА');
    byId('sr-import').textContent = t('IMPORT LOG','ИМПОРТ ЖУРНАЛА');
    byId('sr-search').placeholder = t('Search title, director or country…','Поиск по названию, режиссёру или стране…');
    document.querySelector('.sr-hero p').textContent = t(
      'Keep your watchlist, ratings and notes together. The catalogue and diary use the same film log in this browser.',
      'Список просмотра, оценки и заметки в одном месте. Каталог, дневник и кинозал используют общий журнал в этом браузере.');
    const labels = [[['ALL ENTRIES','ВСЕ ФИЛЬМЫ'],['WATCHLIST','К ПРОСМОТРУ'],['WATCHED','ПРОСМОТРЕНО']],
      [['TITLE A–Z','ПО НАЗВАНИЮ'],['YEAR','ПО ГОДУ'],['YOUR RATING','ПО ОЦЕНКЕ']]];
    ['sr-filter','sr-sort'].forEach((id, i) => {
      [...byId(id).options].forEach((option, j) => option.textContent = t(...labels[i][j]));
    });
    render();
  }
  byId('sr-search').oninput = render;
  byId('sr-filter').onchange = render;
  byId('sr-sort').onchange = render;
  byId('sr-lang').onclick = () => {
    ru = !ru;
    try { localStorage.setItem('ha-lang', ru ? 'ru' : 'en'); } catch (_) {}
    localize();
  };
  byId('sr-export').onclick = () => {
    const items = savedRows().map(({id, entry, en, year}) => ({
      id, title:en, year, status:status(entry), watched:entry.w || '', rating:(entry.r || 0)/2,
      note:entry.note || '', priorRatings:entry.priorRatings || [], liked:!!entry.l,
    }));
    const blob = new Blob([JSON.stringify({format:'ha-screening-room',version:2,items},null,2)],
      {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'horror-aesthetic-screening-room.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  byId('sr-import').onclick = () => byId('sr-file').click();
  byId('sr-file').onchange = async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      const items = Array.isArray(data) ? data : data.items;
      if (!Array.isArray(items)) throw new Error('Invalid screening log');
      if (!diary.importScreenings(items)) fallback();
    } catch (_) {
      alert(t('Invalid screening log.', 'Некорректный файл журнала.'));
    } finally { event.target.value = ''; }
  };
  diary.ready().then(() => {
    document.addEventListener('ha-diary', render);
    localize();
  });
})();
