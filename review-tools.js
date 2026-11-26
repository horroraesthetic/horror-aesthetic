/* HORROR AESTHETIC — review and essay editorial helpers */
(() => {
  'use strict';
  if (!document.querySelector('script[src*="diary.js"]')) { const d = document.createElement('script'); d.defer = true; d.src = '/horror-aesthetic/diary.js?v=6'; document.head.appendChild(d); }
  if (!document.querySelector('script[src*="listen.js"]')) { const s = document.createElement('script'); s.defer = true; s.src = '/horror-aesthetic/listen.js?v=1'; document.head.appendChild(s); }
  const paths = [
    {
      title: ['От телеэфира до стрима', 'From broadcast to livestream'],
      films: [
        ['ghostwatch', 'Призрачный дозор', 'Ghostwatch', 'Начните с прямого эфира, где студия продолжает шутить, пока зритель уже замечает неладное.', 'Start with a live broadcast whose presenters keep joking after the audience has spotted something wrong.'],
        ['noroi', 'Норой', 'Noroi: The Curse', 'Затем проследите, как тревога складывается из разрозненных фрагментов документального расследования.', 'Then watch dread build from fragments in a documentary investigation.'],
        ['gonjiam', 'Конджиам', 'Gonjiam: Haunted Asylum', 'В заброшенной больнице зритель уже влияет на происходящее, а съёмочная группа пытается удержать его внимание.', 'At the hospital, the audience shapes events while the crew struggles to keep it watching.'],
        ['host2020', 'Астрал. Онлайн', 'Host', 'Закончите камерным кошмаром, где масштаб угрозы меняется при каждом переключении окна видеозвонка.', 'Finish with a small-scale nightmare in which every switch between video-call tiles changes the size of the threat.'],
      ],
    },
    {
      title: ['От кассеты к экрану компьютера', 'From videotape to computer screen'],
      films: [
        ['ringu', 'Звонок', 'Ringu', 'Кассета превращает передачу изображения в поступок с последствиями.', 'A tape makes passing on an image an act with consequences.'],
        ['darkwater', 'Тёмные воды', 'Dark Water', 'Тот же режиссёр переносит тревогу в съёмную квартиру, где её выдают пятна и мелкие бытовые поломки.', 'The same director moves that dread into a rented flat, where stains and small domestic failures signal danger.'],
        ['kairo', 'Пульс', 'Pulse', 'Компьютерная сеть расширяет масштаб истории, а пустые комнаты удерживают внимание на человеческом одиночестве.', 'A computer network broadens the story while empty rooms keep the focus on human isolation.'],
      ],
    },
    {
      title: ['Три способа, которыми пугает Марио Бава', 'Three ways Mario Bava creates fear'],
      films: [
        ['blacksunday', 'Чёрное воскресенье', 'Black Sunday', 'В чёрно-белой готике Бава строит угрозу на фактуре грима и резких перепадах света.', 'In this black-and-white Gothic film, Bava builds danger through makeup textures and stark shifts in light.'],
        ['blacksabbath', 'Три лица страха', 'Black Sabbath', 'Антология показывает, как один режиссёр меняет ритм и звук при переходе от телефона к осаждённому дому.', 'The anthology shows how one director changes rhythm and sound as he moves from a telephone to a house under siege.'],
        ['killbaby', 'Операция «Страх»', 'Kill, Baby... Kill!', 'Здесь цвет и повторения заставляют сомневаться в простом пути от одной двери к другой.', 'Here, colour and repetition make a simple walk from one doorway to another feel unreliable.'],
      ],
    },
    {
      title: ['Фолк-хоррор при дневном свете', 'Folk horror in daylight'],
      films: [
        ['witchfinder', 'Великий инквизитор', 'Witchfinder General', 'Начните с фильма, где открытый пейзаж усиливает жестокость людей, наделённых властью.', 'Start with a film where an open landscape makes the cruelty of people in power feel more immediate.'],
        ['satansclaw', 'Кровь на когте Сатаны', 'The Blood on Satan’s Claw', 'Действие перемещается в деревню, где сила угрозы растёт вместе с давлением на тех, кто остаётся в стороне.', 'The threat grows in a village as pressure mounts on anyone who stays outside the group.'],
        ['n2fieldengland13', 'Поле в Англии', 'A Field in England', 'Открытое поле становится ловушкой. Монтаж расшатывает представление о том, где именно проходит её граница.', 'An open field becomes a trap, and the editing unsettles our sense of where its boundaries lie.'],
      ],
    },
    {
      title: ['Как пугает пустой дом', 'How an empty house becomes frightening'],
      films: [
        ['uninvited-1944', 'Незваные', 'The Uninvited', 'Начните со звука и запаха, которые пересекают комнаты раньше, чем кто-нибудь видит призрака.', 'Start with sounds and scents that cross rooms before anyone sees a ghost.'],
        ['innocents', 'Невинные', 'The Innocents', 'У Клейтона угрозу приходится разглядывать на дальнем плане и решать, насколько можно доверять увиденному.', 'Clayton places the threat in the distance and makes you decide how far to trust what you saw.'],
        ['oddity', 'Диковинка', 'Oddity', 'Маккарти собирает похожую тревогу вокруг двери, нескольких ракурсов и деревянной фигуры.', 'McCarthy creates a similar unease with a doorway, a few camera angles and a wooden figure.'],
      ],
    },
  ];
  const renderPaths = (wrap, ru) => {
    const slug = location.pathname.match(/\/reviews\/([a-z0-9_-]+)\.html$/)?.[1];
    if (!slug) return;
    const matching = paths.filter(path => path.films.some(([id]) => id === slug));
    if (!matching.length) return;
    const related = wrap.querySelector('.rel');
    const container = document.createElement('section');
    container.className = 'ha-viewing-paths';
    container.style.cssText = 'border-top:1px solid var(--line,#50343b);padding-block:14px;margin-block:24px';
    (related || wrap.querySelector('article') || wrap).before(container);
    const paint = () => {
      const heading = document.createElement('h2');
      heading.textContent = ru() ? 'Маршрут просмотра' : 'Viewing route';
      container.replaceChildren(heading);
      for (const path of matching) {
        const title = document.createElement('h3');
        title.textContent = path.title[ru() ? 0 : 1];
        const list = document.createElement('ol');
        for (const [id, nameRu, nameEn, whyRu, whyEn] of path.films) {
          const item = document.createElement('li');
          const name = document.createElement(id === slug ? 'strong' : 'a');
          name.textContent = ru() ? nameRu : nameEn;
          if (id === slug) name.setAttribute('aria-current', 'page');
          else name.href = '/horror-aesthetic/reviews/' + id + '.html';
          const reason = document.createElement('p');
          reason.textContent = ru() ? whyRu : whyEn;
          reason.style.margin = '.2rem 0 .85rem';
          item.append(name, reason);
          list.appendChild(item);
        }
        container.append(title, list);
      }
    };
    paint();
    new MutationObserver(paint).observe(document.documentElement, {attributes:true,attributeFilter:['lang','data-l']});
  };
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
    renderPaths(wrap, () => lang() === 'ru');
    const list = wrap.querySelector('h1 + ul');
    if (list) list.classList.add('ha-article-list');
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, {once:true});
  else ready();
})();
