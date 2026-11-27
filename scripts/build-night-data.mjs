import fs from 'node:fs';
import vm from 'node:vm';

const read = path => fs.readFileSync(path, 'utf8');
const json = path => JSON.parse(read(path));
const home = read('home.js');
const blocks = home.slice(home.indexOf('var GENRES='), home.indexOf('var GN='))
  + home.slice(home.indexOf('var REVIEWS='), home.indexOf('if(window.HA_MORE)'));
const context = {
  window: {},
  a: (ru, en) => ({ ru, en }),
  document: { createElement: () => ({}), querySelectorAll: () => [], getElementById: () => null },
};
vm.createContext(context);
for (const source of [blocks, read('reviews-more.js'), read('yokai-hd.js'), read('yokai.js')]) {
  vm.runInContext(source, context);
}
const { YK_HD, YK_NAME, HA_MORE } = context.window;
const yokai = Object.entries(YK_NAME).map(([id, [ru, en]]) => [id, ru, en]);
const films = json('data/daily.json').map(([id, en, ru]) => [id, en, ru]);
const filmIds = new Set(films.map(film => film[0]));
const genres = Object.fromEntries(context.GENRES.map(([id, label]) => [id, label]));
const filmGenres = Object.fromEntries([...context.REVIEWS, ...HA_MORE]
  .filter(review => filmIds.has(review.id)).map(review => [review.id, review.gn]));
Object.assign(filmGenres, {
  angst: ['thriller'], 'blind-beast': ['jhorror', 'thriller'], 'evil-dead-trap': ['jhorror', 'slasher'],
  incantation: ['foundfootage', 'supernatural'], infection: ['jhorror', 'body'],
  'kisaragi-station': ['jhorror', 'supernatural'], marebito: ['jhorror', 'supernatural'],
  occult: ['jhorror', 'foundfootage'], 'one-cut-of-the-dead': ['jhorror', 'comedy'],
  'one-missed-call': ['jhorror', 'supernatural'], perfectblue: ['jhorror', 'thriller'],
  reincarnation: ['jhorror', 'supernatural'], retribution: ['jhorror', 'supernatural'],
  'suicide-club': ['jhorror', 'shock'], tag: ['jhorror', 'body'], changeling: ['supernatural'],
  yotsuya: ['jhorror', 'supernatural'], thelodge: ['thriller'], themedium: ['foundfootage', 'supernatural'],
  nighthouse: ['supernatural', 'thriller'], sentinel: ['supernatural'], vanishing: ['thriller'],
  ugetsu: ['jhorror', 'supernatural'], 'woman-in-the-dunes': ['thriller'],
});
const moods = {
  cry: 'darkwater tale2sisters lakemungo nighthouse others wolf-house-2018 letmein la-llorona-2019 devilsback girlknew haunting63 theeye02'.split(' '),
  awake: 'kairo ringu juon noroi retribution caveat-2020 oddity shutter gonjiam sinister incantation darkwater'.split(' '),
  friends: 'hausu evil2 braindead gremlins shaun one-cut-of-the-dead cabinwoods returnliving reanimator scream talktome traintobusan'.split(' '),
};
const challenge = 'caligari frankenstein haunting63 kwaidan onibaba kuroneko psycho halloween suspiria alien thing videodrome evil2 hausu tetsuo perfectblue ringu audition cure kairo juon darkwater noroi tale2sisters lakemungo letmein babadook witch getout hereditary talktome'.split(' ');
const genreYokai = {
  jhorror: 'nopperabo', supernatural: 'yukionna', thriller: 'jinmenju', foundfootage: 'mokumoku',
  scifi: 'kappa', body: 'rokurokubi', gore: 'oni', slasher: 'kamaitachi', comedy: 'karakasa',
};
for (const id of [...challenge, ...Object.values(moods).flat()]) {
  if (!filmIds.has(id)) throw new Error(`Unknown film ${id}`);
}
if (challenge.length !== 31 || new Set(challenge).size !== 31) throw new Error('Expected 31 different challenge films');
for (const id of Object.values(genreYokai)) {
  if (!YK_NAME[id]) throw new Error(`Unknown yōkai ${id}`);
}
const atlas = { columns: 8, tile: 112, rows: Math.ceil(yokai.length / 8) };
fs.writeFileSync('app/night-data/rituals.json', JSON.stringify({ yokai, films, atlas, challenge, moods, genres, filmGenres, genreYokai }) + '\n');
const stories = json('scripts/creepypasta-data.json').stories.map(story => {
  const { slug, img, alt, ru_t, en_t, ru_m, en_m, d_ru, d_en, ru, en } = story;
  return { slug, img, alt, ru_t, en_t, ru_m, en_m, d_ru, d_en, ru, en };
});
fs.writeFileSync('app/night-data/stories.json', JSON.stringify(stories) + '\n');

if (process.argv[2]) {
  const width = atlas.columns * atlas.tile;
  const height = atlas.rows * atlas.tile;
  const tiles = yokai.map(([id], slot) => {
    const x = slot % atlas.columns * atlas.tile;
    const y = Math.floor(slot / atlas.columns) * atlas.tile;
    const art = YK_HD[id].replace(/id="([^"]+)"/g, `id="${id}-$1"`).replace(/url\(#([^\)]+)\)/g, `url(#${id}-$1)`);
    return `<svg x="${x}" y="${y}" width="${atlas.tile}" height="${atlas.tile}" viewBox="0 0 160 160">${art}</svg>`;
  });
  fs.writeFileSync(process.argv[2], `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" color="#f37585"><rect width="100%" height="100%" fill="#150c15"/>${tiles.join('')}</svg>`);
}
console.log(`${yokai.length} yōkai, ${filmIds.size} films, ${Object.keys(filmGenres).length} genre entries, ${stories.length} stories`);
