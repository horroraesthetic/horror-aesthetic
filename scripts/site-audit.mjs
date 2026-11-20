import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, extname } from 'node:path';

const root = process.cwd();
const sitemapPath = resolve(root, 'sitemap.xml');
const sitemap = readFileSync(sitemapPath, 'utf8');
const base = 'https://horroraesthetic.github.io/horror-aesthetic/';
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1].trim());
const errors = [];
const warnings = [];

if (!locations.length) errors.push('sitemap.xml contains no <loc> entries.');

const seen = new Set();
for (const url of locations) {
  if (!url.startsWith(base)) {
    errors.push(`URL is outside the configured GitHub Pages base: ${url}`);
    continue;
  }
  if (seen.has(url)) warnings.push(`Duplicate sitemap URL: ${url}`);
  seen.add(url);

  let relative = decodeURIComponent(url.slice(base.length)).split(/[?#]/, 1)[0];
  if (!relative) relative = 'index.html';
  let target = resolve(root, relative);
  if (relative.endsWith('/')) target = resolve(target, 'index.html');
  if (!target.startsWith(root + '/') && target !== resolve(root, 'index.html')) {
    errors.push(`Unsafe sitemap path: ${url}`);
    continue;
  }
  try {
    if (!statSync(target).isFile()) errors.push(`Sitemap target is not a file: ${url}`);
  } catch {
    errors.push(`Sitemap target does not exist: ${url} (expected ${relative})`);
  }
}

function walk(directory) {
  const found = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const full = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...walk(full));
    else if (extname(entry.name).toLowerCase() === '.html') found.push(full);
  }
  return found;
}

const htmlFiles = walk(root);
const reviewPages = readdirSync(resolve(root, 'reviews'))
  .filter(name => name !== 'index.html' && name.endsWith('.html'));
const reviewIndex = readFileSync(resolve(root, 'reviews/index.html'), 'utf8');
const reviewLinks = new Set([...reviewIndex.matchAll(/href="\/horror-aesthetic\/reviews\/([^/"?#]+\.html)"/g)]
  .map(match => match[1]));
for (const name of reviewPages) {
  const url = base + 'reviews/' + name;
  if (!seen.has(url)) errors.push(`Review missing from sitemap: ${name}`);
  if (!reviewLinks.has(name)) errors.push(`Review missing from the review directory: ${name}`);
}
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const relative = file.slice(root.length + 1);
  // Google Search Console verification files are plain-text tokens by design,
  // so they are not normal HTML documents and should not trigger page-quality warnings.
  if (/^google[0-9a-f]+\.html$/i.test(relative) && html.trim() === `google-site-verification: ${relative}`) continue;
  if (!/<title\b[^>]*>\s*[^<]+<\/title>/i.test(html)) {
    warnings.push(`Missing or empty title: ${relative}`);
  }
  if (!/<meta\s+name=["']viewport["']/i.test(html)) {
    warnings.push(`Missing viewport meta: ${relative}`);
  }
  if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(html)) {
    warnings.push(`Missing document language: ${relative}`);
  }
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map(match => match[1]);
  const seenIds = new Set();
  for (const id of ids) {
    if (seenIds.has(id)) warnings.push(`Duplicate id "${id}": ${relative}`);
    seenIds.add(id);
  }
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map(match => match[0]);
  for (const image of images) {
    if (!/\balt\s*=/.test(image)) warnings.push(`Image missing alt text: ${relative}`);
  }
  const sharedAssets = /(?:href|src)=["'][^"']*enhancements\.(?:css|js)(?:\?[^"']*)?["']/i.test(html);
  if (!['index.html', '404.html', 'offline.html'].includes(relative) && !relative.startsWith('preview/') && !sharedAssets) {
    warnings.push(`Shared visual system not loaded: ${relative}`);
  }
}

// Final report is emitted after every audit phase so late findings cannot be hidden.


// Validate local links and assets used by HTML documents.
function resolveLocalReference(file, reference) {
  let value = reference.trim().split(/[?#]/, 1)[0];
  if (!value) return null;
  if (value.startsWith('/horror-aesthetic/')) value = value.slice('/horror-aesthetic/'.length);
  else if (value.startsWith('/')) value = value.slice(1);
  else value = join(file.slice(root.length + 1).split('/').slice(0, -1).join('/'), value);
  let decoded;
  try { decoded = decodeURIComponent(value); }
  catch { return { invalid: true }; }
  const target = resolve(root, decoded);
  if (target !== root && !target.startsWith(root + '/')) return { unsafe: true };
  return { target, trailingSlash: reference.split(/[?#]/, 1)[0].endsWith('/') };
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const relative = file.slice(root.length + 1);
  const references = [...html.matchAll(/(?:href|src|poster)=[\"']([^\"']+)[\"']/gi)];
  for (const match of references) {
    const raw = match[1].trim();
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(raw) || raw.startsWith('#')) continue;
    const resolved = resolveLocalReference(file, raw);
    if (!resolved) continue;
    if (resolved.invalid) {
      errors.push(`Invalid encoded local reference: ${relative} → ${raw}`);
      continue;
    }
    if (resolved.unsafe) {
      errors.push(`Local reference escapes the site root: ${relative} → ${raw}`);
      continue;
    }
    let target = resolved.target;
    try {
      if (statSync(target).isDirectory()) target = join(target, 'index.html');
      else if (resolved.trailingSlash) target = join(target, 'index.html');
      if (!statSync(target).isFile()) errors.push(`Broken local reference: ${relative} → ${raw}`);
    } catch {
      errors.push(`Broken local reference: ${relative} → ${raw}`);
    }
  }
}


// Homepage asset budgets and offline-cache integrity.
const homepagePath = resolve(root, 'index.html');
const homeCssPath = resolve(root, 'home.css');
const homeJsPath = resolve(root, 'home.js');
const serviceWorkerPath = resolve(root, 'sw.js');
const homepage = readFileSync(homepagePath, 'utf8');

// Homepage banner dimensions prevent layout shifts while artwork loads.
const homepageBanners = [...homepage.matchAll(/<figure class="sbanner">([\s\S]*?)<\/figure>/g)];
for (const [index, banner] of homepageBanners.entries()) {
  const image = banner[1].match(/<img\b[^>]*>/i)?.[0];
  if (!image) continue;
  const width = Number(image.match(/\bwidth=["'](\d+)["']/i)?.[1]);
  const height = Number(image.match(/\bheight=["'](\d+)["']/i)?.[1]);
  if (!width || !height) {
    errors.push(`Homepage banner ${index + 1} is missing intrinsic image dimensions.`);
  } else if (Math.abs(width / height - 8 / 3) > 0.01) {
    errors.push(`Homepage banner ${index + 1} must preserve the 8:3 image ratio.`);
  }
}

const homeCss = readFileSync(homeCssPath, 'utf8');
const homeJs = readFileSync(homeJsPath, 'utf8');
const serviceWorker = readFileSync(serviceWorkerPath, 'utf8');
const assetBudget = [
  ['index.html', homepagePath, 100 * 1024],
  ['home.css', homeCssPath, 250 * 1024],
  ['home.js', homeJsPath, 950 * 1024]
];
const themeData = JSON.parse(readFileSync(resolve(root, 'data/home-themes.json'), 'utf8'));
if (!Array.isArray(themeData) || !themeData.length || themeData.some(theme =>
  !theme.id || !theme.en || !theme.ru || !Array.isArray(theme.f)) ||
  new Set(themeData.map(theme => theme.id)).size !== themeData.length) {
  errors.push('Deferred homepage theme data is invalid.');
}

for (const [name, path, limit] of assetBudget) {
  try {
    const size = statSync(path).size;
    if (size > limit) errors.push(`Performance budget exceeded: ${name} is ${size} bytes (limit ${limit}).`);
    else console.log(`BUDGET PASS: ${name} ${size}/${limit} bytes.`);
  } catch {
    errors.push(`Required homepage asset is missing: ${name}`);
  }
}

if (!/<link\b(?=[^>]*\brel=["\']stylesheet["\'])(?=[^>]*\bhref=["\']home\.css(?:\?[^"\']*)?["\'])[^>]*>/i.test(homepage)) {
  errors.push('Homepage does not load the extracted home.css stylesheet.');
}
if (!/<script\b(?=[^>]*\bdefer)(?=[^>]*\bsrc=["\']home\.js(?:\?[^"\']*)?["\'])[^>]*>\s*<\/script>/i.test(homepage)) {
  errors.push('Homepage does not load the extracted home.js script.');
}
if (homepage.indexOf('href="home.css') > homepage.indexOf('href="enhancements.css')) {
  errors.push('home.css must load before enhancements.css to preserve cascade order.');
}

const mobileSectionRule = homeCss.match(/@media \(max-width: 760px\) \{\s*section\[data-cat\] \{([^}]*)\}/i)?.[1] || '';
if (!mobileSectionRule.includes('content-visibility: visible !important') ||
    !mobileSectionRule.includes('contain-intrinsic-size: none !important')) {
  errors.push('Mobile section rendering must disable content-visibility placeholders on narrow screens.');
}

const homepageAssetRefs = [...homepage.matchAll(/(?:href|src)=["']([^"']+\.(?:css|js)(?:\?[^"']*)?)["']/gi)]
  .map(match => match[1].split('/').pop());
const workerAssetRefs = [...serviceWorker.matchAll(/BASE\s*\+\s*["']([^"']+\.(?:css|js)(?:\?[^"']*)?)["']/gi)]
  .map(match => match[1].split('/').pop());
for (const asset of ['home.css', 'enhancements.css', 'visual-refresh.css', 'enhancements.js', 'home.js',
  'flashlight.css', 'flashlight.js', 'mobile-dock-fix.css', 'ha-effects.css', 'ha-effects.js']) {
  const htmlRef = homepageAssetRefs.find(reference => reference.startsWith(asset));
  const workerRef = workerAssetRefs.find(reference => reference.startsWith(asset));
  if (!htmlRef || !workerRef || htmlRef !== workerRef) {
    errors.push('Homepage and service worker asset versions must match: ' + asset + '.');
  }
}
const skipTarget = homepage.match(/<a\b[^>]*class="ha-skip-link"[^>]*href="#([^"]+)"/)?.[1];
if (!skipTarget || !homepage.includes(`<main id="${skipTarget}" tabindex="-1">`)) {
  errors.push('The homepage skip link must target a focusable main landmark.');
}
if (!homeJs.includes('var cur=null,query="",secFilter="home",picked=null;') || !homeJs.includes('if (event.persisted || secFilter !== "home") return;')) {
  errors.push('Homepage must render the home view by default and prevent stale mobile scroll restoration.');
}
const homepageSections = [...homepage.matchAll(/<section\b[^>]*data-cat=["'][^"']+["'][^>]*>/gi)];
const homeVisibleSections = homepageSections.filter(([tag]) => /\bdata-home=["']1["']/i.test(tag));
if (!homeVisibleSections.length) {
  errors.push('Homepage-first mode has no data-home sections to display; the initial page would be blank.');
}
if (!/BASE\s*\+\s*[\'"]home\.css(?:\?[^\'"]*)?[\'"]/.test(serviceWorker) || !/BASE\s*\+\s*[\'"]home\.js(?:\?[^\'"]*)?[\'"]/.test(serviceWorker)) {
  errors.push('Service worker shell is missing home.css or home.js.');
}

let imageCount = 0;
let largeImageCount = 0;
function inspectImages(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = join(directory, entry.name);
    if (entry.isDirectory()) inspectImages(full);
    else if (['.webp', '.jpg', '.jpeg', '.png', '.avif'].includes(extname(entry.name).toLowerCase())) {
      imageCount++;
      const size = statSync(full).size;
      if (size > 350 * 1024) {
        largeImageCount++;
        warnings.push(`Large image asset (${Math.round(size / 1024)} KB): ${full.slice(root.length + 1)}`);
      }
    }
  }
}

for (const requiredPage of ['glossary/index.html', 'nightmare-archive/index.html']) {
  const requiredPath = resolve(root, requiredPage);
  try {
    if (!statSync(requiredPath).isFile()) errors.push(`Required editorial page is missing: ${requiredPage}`);
  } catch {
    errors.push(`Required editorial page is missing: ${requiredPage}`);
  }
}
if (!serviceWorker.includes("BASE + 'reference.css'") || !serviceWorker.includes("BASE + 'reference.js'")) {
  errors.push('Service worker shell is missing the shared reference assets.');
}

const posterWallPath = resolve(root, 'posters/index.html');
try {
  if (!statSync(posterWallPath).isFile()) errors.push('Poster wall page is missing.');
} catch {
  errors.push('Poster wall page is missing.');
}
if (!serviceWorker.includes("BASE + 'posters/'")) {
  errors.push('Service worker shell is missing the poster wall page.');
}
if (!serviceWorker.includes("BASE + 'data/film-strip.json'")) {
  errors.push('Service worker shell is missing the review film-strip data.');
}
if (!serviceWorker.includes('const SHELL_URLS = new Set(SHELL.map(url => new URL(url, self.location.origin).href));') ||
    !serviceWorker.includes('!SHELL_URLS.has(new URL(key.url).href)')) {
  errors.push('Service worker cache eviction must preserve exact query-versioned shell URLs.');
}
try {
  const filmStrip = JSON.parse(readFileSync(resolve(root, 'data/film-strip.json'), 'utf8'));
  if (!Array.isArray(filmStrip) || !filmStrip.length) {
    errors.push('Film-strip data must be a non-empty JSON array.');
  } else {
    for (const [index, item] of filmStrip.entries()) {
      for (const [field, label] of [['p', 'poster'], ['r', 'review']]) {
        const value = item?.[field];
        if (typeof value !== 'string' || !value.trim()) {
          errors.push('Film-strip item ' + index + ' is missing its ' + label + ' path.');
          continue;
        }
        const target = resolve(root, value);
        if (target !== root && !target.startsWith(root + '/')) {
          errors.push('Film-strip ' + label + ' path escapes the site root: ' + value);
          continue;
        }
        try {
          if (!statSync(target).isFile()) errors.push('Film-strip ' + label + ' file is missing: ' + value);
        } catch {
          errors.push('Film-strip ' + label + ' file is missing: ' + value);
        }
      }
    }
  }
} catch (error) {
  errors.push('Film-strip data is missing or invalid JSON: ' + error.message);
}
const imageRoot = resolve(root, 'img');
try {
  inspectImages(imageRoot);
  console.log(`IMAGE AUDIT: ${imageCount} image assets; ${largeImageCount} exceed 350 KB.`);
} catch {
  warnings.push('Image directory could not be inspected.');
}



console.log(`HORROR AESTHETIC SITE AUDIT`);
console.log(`HTML documents: ${htmlFiles.length}`);
console.log(`Sitemap URLs: ${locations.length}`);
console.log(`Unique sitemap URLs: ${seen.size}`);
console.log(`Images inspected: ${imageCount}; large images: ${largeImageCount}`);
console.log(`Warnings: ${warnings.length}`);
for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);
if (errors.length) process.exitCode = 1;
else console.log('PASS: all sitemap, link, asset and homepage checks completed.');
