/* Export the homepage film registry and match it to the published review archive. */
import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const read = name => readFileSync(new URL('../' + name, import.meta.url), 'utf8');
const home = read('home.js');
const registry = home.slice(home.indexOf('/* film registry:'), home.indexOf('var REVIEWS='));
const context = {
  window: {},
  a: (ru, en) => ({ru, en}),
};
runInNewContext(registry, context, {timeout: 1000});
runInNewContext(read('reviews-more.js'), context, {timeout: 1000});

const films = new Map(Object.entries(context.F).map(([id, film]) => [
  id, [id, film.n.en, film.n.ru, film.y, '', ''],
]));
for (const {id, film} of context.window.HA_MORE) {
  if (!film) continue;
  const [ru, en, year] = film;
  films.set(id, [id, en, ru, films.get(id)?.[3] ?? year, '', '']);
}
const normalize = value => value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
  .replace(/^the\s+/, '').replace(/[^\p{L}\p{N}]+/gu, '');
const aliases = new Map();
for (const film of films.values()) {
  for (const title of new Set(film.slice(1, 3))) {
    const key = film[3] + ':' + normalize(title);
    if (!aliases.has(key)) aliases.set(key, new Set());
    aliases.get(key).add(film);
  }
}

const reviews = JSON.parse(read('data/daily.json'));
reviews.sort((a, b) => Number(films.has(b[0])) - Number(films.has(a[0])));
for (const [slug, en, ru, year, director] of reviews) {
  const candidates = new Set([en, ru].filter(Boolean).flatMap(title => [
    ...(aliases.get(year + ':' + normalize(title)) || []),
  ]));
  const film = films.get(slug) ??
    (candidates.size === 1 ? candidates.values().next().value : null);
  if (film && !film[4]) {
    film[4] = slug;
    film[5] = director;
  } else if (!films.has(slug)) {
    films.set(slug, [slug, en, ru || en, Number(year), slug, director]);
  }
}

const themeTitles = new Set();
for (const theme of JSON.parse(read('data/home-themes.json'))) {
  for (const [ru, en, year, homeId] of theme.f) {
    if (homeId) continue;
    const title = en.toLowerCase().replace(/^(the|a|an|la|le|il|el|les|der|die|das|los)\s+/, '')
      .replace(/[^0-9a-zа-я]/g, '') + '|' + year;
    if (themeTitles.has(title)) continue;
    const id = 'x' + themeTitles.size;
    themeTitles.add(title);
    films.set(id, [id, en, ru || en, Number(year) || 0, '', '']);
  }
}

const rows = [...films.values()];
if (!rows.length || rows.some(([id, en, ru, year]) => !/^[a-z0-9_-]+$/i.test(id) || !en || !ru || !Number.isInteger(year))) {
  throw new Error('Invalid film catalogue entry');
}
const json = JSON.stringify(rows);
if (process.argv.includes('--check')) {
  if (read('data/catalogue.json').trim() !== json) throw new Error('Run node scripts/build-catalogue.mjs to refresh data/catalogue.json');
} else {
  writeFileSync(new URL('../data/catalogue.json', import.meta.url), json + '\n');
  console.log(rows.length + ' catalogue records');
}
