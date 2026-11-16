/* HORROR AESTHETIC — UPDATE 24 / Visual Integration */
(() => {
  'use strict';
  if (document.getElementById('ha-visual-integration')) return;
  const base='/horror-aesthetic/';
  const path=location.pathname.replace(/^\/horror-aesthetic\/?/, '').replace(/\/+$/,'');
  const routes={
    '':'homepage-concept.webp',
    'archives':'archive-covers.webp',
    'j-horror':'j-horror-film-posters.webp',
    'library':'library-covers.webp',
    'folklore':'section-banners.webp',
    'games':'section-banners.webp',
    'reviews':'j-horror-film-posters.webp',
    'directors':'archive-covers.webp',
    'themes':'section-banners.webp',
    'articles':'early-homepage-layout.webp',
    'culture':'section-banners.webp'
  };
  const asset=routes[path];
  if(!asset || path==='visual-archive') return;
  const ru=(document.documentElement.dataset.l||document.documentElement.lang||'en').toLowerCase().startsWith('ru');
  const labels={
    '':{k:'VISUAL COLLECTION / VOL. 01',h:'HORROR AESTHETIC — VISUAL WORLD',p:'Explore the visual identity, poster studies and dark editorial artwork of the archive.'},
    'archives':{k:'ARCHIVE MATERIALS / VISUAL FILE',h:'THE DARK ARCHIVE',p:'Poster studies and visual documents for the cinema archive.'},
    'j-horror':{k:'J-HORROR / POSTER COLLECTION',h:'JAPANESE NIGHTMARES',p:'A visual collection inspired by Japanese horror cinema and its recurring images.'},
    'library':{k:'CURSED LIBRARY / COVER COLLECTION',h:'LITERATURE OF HORROR',p:'Book-cover concepts spanning weird fiction, gothic horror, kaidan and body horror.'},
    'folklore':{k:'FOLKLORE / VISUAL FIELD GUIDE',h:'YŌKAI & YŪREI',p:'Visual motifs from Japanese folklore, ghost stories and urban legends.'},
    'games':{k:'INTERACTIVE NIGHTMARES / VISUAL FILE',h:'GAMES OF HORROR',p:'A visual study of survival horror, haunted spaces and cursed interfaces.'},
    'reviews':{k:'CINEMA / POSTER STUDIES',h:'HORROR ON FILM',p:'Poster artwork and visual references for the film review collection.'},
    'directors':{k:'DIRECTOR ARCHIVE / VISUAL FILE',h:'THE AUTHORS OF FEAR',p:'A visual archive connecting filmmakers, films and horror movements.'},
    'themes':{k:'THEMATIC ARCHIVE / VISUAL FILE',h:'IMAGES OF FEAR',p:'Visual themes and recurring symbols across horror cinema.'},
    'articles':{k:'EDITORIAL ARTWORK / VISUAL FILE',h:'THE HORROR AESTHETIC',p:'Editorial concepts and visual language from the archive.'},
    'culture':{k:'HORROR CULTURE / VISUAL FILE',h:'DARK CULTURE',p:'A visual collection exploring the wider culture surrounding horror.'}
  };
  const ruCopy={
    '':'Визуальная идентичность, постерные концепты и мрачные редакционные иллюстрации архива.',
    'archives':'Постерные концепты и визуальные документы для киноархива.',
    'j-horror':'Коллекция образов, вдохновлённых японским хоррор-кино.',
    'library':'Концепты книжных обложек: weird fiction, готика, кайдан и боди-хоррор.',
    'folklore':'Визуальные мотивы японского фольклора, историй о призраках и городских легенд.',
    'games':'Визуальное исследование survival horror, проклятых пространств и игровых интерфейсов.',
    'reviews':'Постерные работы и визуальные материалы к коллекции кинорецензий.',
    'directors':'Визуальный архив, связывающий режиссёров, фильмы и направления хоррора.',
    'themes':'Повторяющиеся визуальные темы и символы в хоррор-кино.',
    'articles':'Редакционные концепты и визуальный язык архива.',
    'culture':'Визуальная коллекция о культуре хоррора.'
  };
  const copy=labels[path]||labels[''];
  const section=document.createElement('section');
  section.id='ha-visual-integration'; section.className='ha-visual-integration';
  section.setAttribute('aria-label',ru?'Визуальная коллекция':'Visual collection');
  const link=document.createElement('a'); link.className='ha-visual-art-link'; link.href=base+'visual-archive/';
  link.setAttribute('aria-label',ru?'Открыть визуальный архив':'Open the visual archive');
  const img=document.createElement('img'); img.src=base+'img/visual-archive/'+asset;
  img.alt=ru?'Визуальная коллекция HORROR AESTHETIC':'HORROR AESTHETIC visual collection';
  img.loading='lazy'; img.decoding='async'; link.appendChild(img);
  const text=document.createElement('div'); text.className='ha-visual-copy';
  const kicker=document.createElement('span'); kicker.className='ha-visual-kicker'; kicker.textContent=copy.k;
  const heading=document.createElement('h2'); heading.textContent=copy.h;
  const desc=document.createElement('p'); desc.textContent=ru?(ruCopy[path]||copy.p):copy.p;
  const cta=document.createElement('a'); cta.className='ha-visual-cta'; cta.href=base+'visual-archive/';
  cta.textContent=ru?'ОТКРЫТЬ ВИЗУАЛЬНЫЙ АРХИВ →':'OPEN VISUAL ARCHIVE →';
  text.append(kicker,heading,desc,cta); section.append(text,link);
  const main=document.querySelector('main')||document.querySelector('.shell,.w,.wrap')||document.body;
  const anchor=main.querySelector('.ha-editorial-cover,.hero,.lead,h1');
  if(anchor&&anchor.parentNode) anchor.parentNode.insertBefore(section,anchor.nextSibling); else main.prepend(section);
  const style=document.createElement('style');
  style.textContent=[
    '.ha-visual-integration{display:grid;grid-template-columns:minmax(220px,.72fr) minmax(0,1.28fr);gap:clamp(14px,2.4vw,28px);align-items:center;margin:24px 0 30px;padding:clamp(14px,2vw,22px);border:1px solid #54232c;background:radial-gradient(ellipse at 0 50%,#49121d55,transparent 58%),linear-gradient(125deg,#171017,#09070a 78%);box-shadow:inset 0 0 36px #0008}',
    '.ha-visual-copy{min-width:0}.ha-visual-kicker{color:#e56a73;font:700 10px/1.5 ui-monospace,monospace;letter-spacing:.17em}',
    '.ha-visual-copy h2{margin:9px 0 8px;color:#eee4dc;font:900 clamp(22px,3vw,36px)/.98 Impact,"Arial Black",sans-serif;letter-spacing:.02em;text-transform:uppercase}',
    '.ha-visual-copy p{margin:0 0 16px;color:#c6b7b5;font:14px/1.55 Georgia,serif}',
    '.ha-visual-cta{display:inline-block;padding:10px 13px;border:1px solid #b92c38;background:#35121a;color:#f6d9d5;text-decoration:none;font:700 10px/1.4 ui-monospace,monospace;letter-spacing:.1em}',
    '.ha-visual-cta:hover{background:#8d171d;color:#fff}',
    '.ha-visual-art-link{display:block;min-width:0;border:1px solid #51303a;overflow:hidden;background:#09070a}',
    '.ha-visual-art-link img{display:block;width:100%;height:auto;max-height:330px;object-fit:cover;transition:transform .5s ease,filter .3s}',
    '.ha-visual-art-link:hover img{transform:scale(1.018);filter:contrast(1.08)}',
    '@media(max-width:650px){.ha-visual-integration{grid-template-columns:1fr;gap:13px;margin:18px 0 22px;padding:13px}.ha-visual-copy h2{font-size:27px}.ha-visual-copy p{font-size:13px}.ha-visual-art-link img{max-height:none}}',
    '@media(prefers-reduced-motion:reduce){.ha-visual-art-link img{transition:none}}'
  ].join('');
  document.head.appendChild(style);
})();
