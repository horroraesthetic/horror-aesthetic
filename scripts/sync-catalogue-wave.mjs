import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { films } from './catalogue-wave.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const base = '/horror-aesthetic/';
const origin = `https://horroraesthetic.github.io${base}`;
const reviews = films.filter(film => film.review);
const ids = new Set();
let mismatch = false;
const read = path => readFileSync(resolve(root, path), 'utf8');
const html = value => String(value).replace(/[&<>"']/g, char => (
  {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]
));
const js = value => JSON.stringify(value).replaceAll('<', '\\u003c');
const link = id => `${base}reviews/${id}.html`;

function output(path, value) {
  let actual;
  try { actual = read(path); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (actual === value) return;
  if (check) { console.error(`Generated content is stale or missing: ${path}`); mismatch = true; }
  else writeFileSync(resolve(root, path), value);
}

function block(path, label, body, type) {
  const markup = type === 'js' ? ['/* ', ' */'] : ['<!-- ', ' -->'];
  const begin = `${markup[0]}BEGIN CATALOGUE WAVE ${label}${markup[1]}`;
  const end = `${markup[0]}END CATALOGUE WAVE ${label}${markup[1]}`;
  const original = read(path);
  const start = original.indexOf(begin);
  const stop = original.indexOf(end, start + begin.length);
  if (start < 0 || stop < 0 || original.lastIndexOf(begin) !== start || original.lastIndexOf(end) !== stop) {
    throw new Error(`Expected one ordered generated block in ${path}: ${label}`);
  }
  output(path, original.slice(0, start + begin.length) + '\n' + body + '\n' + original.slice(stop));
}

for (const film of films) {
  if (!/^[a-z][a-z\d-]*$/.test(film.id) || ids.has(film.id) || !Number.isInteger(film.year) ||
      !film.genre || ![film.title, film.director, film.source, film.summary || film.review?.summary].every(pair => pair?.length === 2 && pair.every(Boolean)) ||
      new URL(film.source[1]).protocol !== 'https:') throw new Error(`Invalid film: ${film.id}`);
  ids.add(film.id);
  if (film.review) {
    const { headline, summary, paragraphs, related } = film.review;
    if (paragraphs.length < 3 || ![headline, summary, ...paragraphs].every(pair => pair.length === 2 && pair.every(Boolean))) {
      throw new Error(`Incomplete bilingual review: ${film.id}`);
    }
    related.forEach(id => read(`reviews/${id}.html`));
  }
}

block('home.js', 'FILMS', films.map(film =>
  `d(${js(film.id)},${js(film.title[0])},${js(film.title[1])},${film.year});`).join('\n'), 'js');
block('home.js', 'REVIEWS', reviews.map(film => {
  const r = film.review;
  return ` {id:${js(film.id)},page:${js(link(film.id))},d:a(${film.director.map(js).join(',')}),h:${r.hue},r:${r.score},g:${r.gore},gn:${js(r.tags)},${r.warning ? `warn:a(${r.warning.map(js).join(',')}),` : ''}s:a(${r.summary.map(js).join(',')}),f:a(${[0,1].map(i=>js(r.paragraphs.map(p=>p[i]))).join(',')})},`;
}).join('\n'), 'js');
block('reviews/index.html', 'REVIEWS', reviews.map(film =>
  `<li data-year="${film.year}"><a href="${link(film.id)}"><span class="l-ru" lang="ru">${html(film.title[0])}</span><span class="l-en" lang="en">${html(film.title[1])}</span></a> (${film.year})</li>`).join('\n'), 'html');
block('sitemap.xml', 'REVIEWS', reviews.map(film =>
  `<url><loc>${origin}reviews/${film.id}.html</loc></url>`).join('\n'), 'html');

// The standalone database predates the homepage catalogue and has its own curated seed.
const databasePath = 'database/index.html';
const database = read(databasePath);
const items = /const ITEMS=(\[[^\n]+?\]);/;
const reviewMap = /const REVIEWS=(\{[^\n]+?\});/;
if (!items.test(database) || !reviewMap.test(database)) throw new Error('Cannot locate standalone database data.');
const titleSet = new Set(films.map(film => film.title[1]));
const seed = JSON.parse(database.match(items)[1]).filter(item => !titleSet.has(item.name));
const additions = films.map(film => ({
  name: film.title[1], ruName: film.title[0], jp: '', year: film.year, director: film.director[1],
  genre: film.genre, en: (film.summary || film.review.summary)[1], ru: (film.summary || film.review.summary)[0],
  source: film.source
}));
const mapping = JSON.parse(database.match(reviewMap)[1]);
reviews.forEach(film => { mapping[film.title[1]] = `../reviews/${film.id}.html`; });
output(databasePath, database
  .replace(items, () => `const ITEMS=${js(seed.concat(additions))};`)
  .replace(reviewMap, () => `const REVIEWS=${js(mapping)};`)
  .replace(/id="film-total">\d+<\/b>/, `id="film-total">${seed.length + additions.length}</b>`)
  .replace('<b>日本</b><span data-en="JAPANESE HORROR" data-ru="ЯПОНСКИЙ ХОРРОР">JAPANESE HORROR</span>',
    '<b>世界</b><span data-en="WORLD HORROR" data-ru="ХОРРОР МИРА">WORLD HORROR</span>')
  .replace('<h2>${esc(x.name)} <small>${esc(x.jp)}</small></h2>',
    '<h2>${x.ruName?`<span class="en">${esc(x.name)}</span><span class="ru">${esc(x.ruName)}</span>`:esc(x.name)}${x.jp?` <small>${esc(x.jp)}</small>`:""}</h2>')
  .replace('<p class="ru">${esc(x.ru)}</p>${REVIEWS[x.name]?',
    '<p class="ru">${esc(x.ru)}</p>${x.source?`<p><span class="en">Film information</span><span class="ru">Сведения о фильме</span>: <a href="${esc(x.source[1])}">${esc(x.source[0])}</a></p>`:""}${REVIEWS[x.name]?'));

function page(film) {
  const r = film.review;
  const url = `${origin}reviews/${film.id}.html`;
  const title = `${film.title[1]} (${film.year}): ${r.headline[1]} | Horror Aesthetic`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Review', name: `${film.title[1]} (${film.year}) review`,
    inLanguage: ['en','ru'], url, author: {'@type':'Organization',name:'Horror Aesthetic',url:origin},
    itemReviewed: {'@type':'Movie',name:film.title[1],director:film.director[1].split(' and ').map(name=>({'@type':'Person',name}))},
    reviewRating: {'@type':'Rating', ratingValue:r.score, bestRating:5, worstRating:1}
  };
  const copy = (lang, i) => `
    <section class="review-copy" lang="${lang}" data-review-copy="${lang}">
      <h2>${html(r.headline[i])}</h2>
      <p class="review-meta">${i ? 'Director' : 'Режиссёр'}: ${html(film.director[i])} · ${i ? 'Rating' : 'Оценка'} ${r.score} / 5</p>
      <p class="review-dek">${html(r.summary[i])}</p>
      ${r.warning ? `<p class="review-note">${html(r.warning[i])}</p>` : ''}
      ${r.paragraphs.map(paragraph => `<p>${html(paragraph[i])}</p>`).join('\n      ')}
      <footer class="review-sources">
        <p>${i ? 'Film information' : 'Сведения о фильме'}: <a href="${html(film.source[1])}">${html(film.source[0])}</a></p>
        <h3>${i ? 'Related reviews' : 'Читайте также'}</h3>
        <ul>${r.related.map(id => {
          const relatedTitle = read(`reviews/${id}.html`).match(/<title>([^<]+)<\/title>/i)?.[1].split(' | ')[0];
          if (!relatedTitle) throw new Error(`No title in related review ${id}`);
          return `<li><a href="${link(id)}">${html(relatedTitle.replaceAll('&#x27;', "'").replaceAll('&amp;', '&'))}</a></li>`;
        }).join('')}</ul>
      </footer>
    </section>`;
  return `<!doctype html>
<!-- Generated by scripts/sync-catalogue-wave.mjs. Edit scripts/catalogue-wave.mjs. -->
<html lang="en" data-l="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#050a14">
  <title>${html(title)}</title>
  <meta name="description" content="${html(r.summary[1])}">
  <link rel="canonical" href="${url}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Horror Aesthetic">
  <meta property="og:title" content="${html(title)}">
  <meta property="og:description" content="${html(r.summary[1])}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${origin}og.jpg">
  <link rel="stylesheet" href="../enhancements.css">
  <link rel="stylesheet" href="editorial-review.css">
  <script defer src="editorial-review.js"></script>
  <script type="application/ld+json">${js(schema)}</script>
</head>
<body>
  <div class="review-wrap">
    <header class="review-header">
      <a href="${base}">Horror Aesthetic</a>
      <a href="${base}reviews/"><span lang="en">All reviews</span> / <span lang="ru">Все рецензии</span></a>
      <div class="review-actions" role="group" aria-label="Reading language / Язык рецензии" hidden>
        <button type="button" data-review-language="en" lang="en" aria-label="English" aria-pressed="false">EN</button>
        <button type="button" data-review-language="ru" lang="ru" aria-label="Русский" aria-pressed="false">RU</button>
      </div>
    </header>
    <main>
      <article class="review-article">
        <p class="review-meta review-kicker"><span lang="en">Film review</span> / <span lang="ru">Рецензия</span></p>
        <h1><span lang="en" data-review-title="en">${html(film.title[1])}</span><span lang="ru" data-review-title="ru" hidden>${html(film.title[0])}</span> (${film.year})</h1>
        ${copy('en',1)}
        ${copy('ru',0)}
      </article>
    </main>
  </div>
</body>
</html>
`.replace(/[ \t]+$/gm, '');
}

reviews.forEach(film => output(`reviews/${film.id}.html`, page(film)));
if (mismatch) process.exitCode = 1;
else console.log(`${check ? 'Verified' : 'Synced'} ${films.length} films and ${reviews.length} bilingual reviews.`);
