const base = '/horror-aesthetic/';
const aliases = {
  gonjiam: ['Конджиам', 'Гонджиам', 'Gonjiam', '곤지암'],
  noroi: ['Норой', 'Проклятие', 'ノロイ'],
  kairo: ['Кайро', '回路'],
  hausu: ['House', 'ハウス'],
  ringu: ['Звонок', 'The Ring', 'リング'],
  juon: ['Дзю-он', 'The Grudge', '呪怨'],
  cat42: ['Люди кошки'],
};

export function normalize(value) {
  return String(value ?? '').toLowerCase().normalize('NFD').replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

let catalogue;
export function loadCatalogue() {
  if (!catalogue) {
    const read = async file => {
      const response = await fetch(base + 'data/' + file);
      if (!response.ok) throw new Error('Film catalogue unavailable');
      return response.json();
    };
    catalogue = Promise.all([read('catalogue.json'), read('updates.json').catch(() => ({}))])
      .then(([rows, updates]) => {
        const films = new Map(rows.map(([id, en, ru, year, review, director]) => [
          id, {id, en, ru, year, review, director, aliases: aliases[id] || []},
        ]));
        for (const {id, ru, en, y} of updates.films || []) {
          if (!id || !en || !y || films.has(id)) continue;
          films.set(id, {id, ru: ru || en, en, year: Number(y), aliases: []});
        }
        return [...films.values()];
      })
      .catch(error => { catalogue = null; throw error; });
  }
  return catalogue;
}

export function catalogueLink(id) {
  return base + '?film=' + encodeURIComponent(id) + '#catalog';
}

function oneEdit(a, b) {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length > b.length) [a, b] = [b, a];
  let i = 0;
  while (i < a.length && a[i] === b[i]) i++;
  if (a.length < b.length) return a.slice(i) === b.slice(i + 1);
  if (a.slice(i + 1) === b.slice(i + 1)) return true;
  return a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2);
}

const keyboard = "qwertyuiop[]asdfghjkl;'zxcvbnm,.";
const cyrillic = 'йцукенгшщзхъфывапролджэячсмитьбю';
const prepared = new WeakMap();

export function matchTitles(entries, rawQuery) {
  const query = normalize(rawQuery);
  if (!query) return [];
  const score = (entry, q, fuzzy) => {
    if (!prepared.has(entry)) {
      const names = [entry[1], entry[2], ...(entry[6] || [])].map(normalize);
      prepared.set(entry, {names, haystack: normalize(names.join(' ') + ' ' + (entry[4] || ''))});
    }
    const {names, haystack} = prepared.get(entry);
    if (names.includes(q)) return 0;
    if (names.some(name => name.startsWith(q))) return 1;
    const parts = q.split(' ');
    if (names.some(name => parts.every(part => name.includes(part)))) return 2;
    if (parts.every(part => haystack.includes(part))) return 3;
    if (!fuzzy) return -1;
    const words = names.join(' ').split(' ');
    return parts.every(part => words.some(word => word.startsWith(part) ||
      (part.length >= 4 && oneEdit(part, word)))) ? 4 : -1;
  };
  const rank = (q, fuzzy = false) => entries.map(entry => [entry, score(entry, q, fuzzy)])
    .filter(([, value]) => value >= 0).sort((a, b) => a[1] - b[1]).map(([entry]) => entry);
  const exact = rank(query);
  if (exact.length) return exact;
  const lower = rawQuery.toLowerCase();
  const from = /[а-яё]/.test(lower) ? cyrillic : keyboard;
  const to = from === cyrillic ? keyboard : cyrillic;
  const alternative = Array.from(lower, char => {
    return to[from.indexOf(char)] || char;
  }).join('');
  const layout = normalize(alternative);
  const laidOut = layout && layout !== query ? rank(layout) : [];
  return laidOut.length ? laidOut : rank(query, true);
}
