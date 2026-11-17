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

console.log(`HORROR AESTHETIC SITE AUDIT`);
console.log(`HTML documents: ${htmlFiles.length}`);
console.log(`Sitemap URLs: ${locations.length}`);
console.log(`Unique sitemap URLs: ${seen.size}`);
console.log(`Warnings: ${warnings.length}`);
for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);
if (errors.length) process.exitCode = 1;
else console.log('PASS: all sitemap URLs resolve to local files.');


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
const serviceWorker = readFileSync(serviceWorkerPath, 'utf8');
const assetBudget = [
  ['index.html', homepagePath, 100 * 1024],
  ['home.css', homeCssPath, 250 * 1024],
  ['home.js', homeJsPath, 1200 * 1024]
];

for (const [name, path, limit] of assetBudget) {
  try {
    const size = statSync(path).size;
    if (size > limit) errors.push(`Performance budget exceeded: ${name} is ${size} bytes (limit ${limit}).`);
    else console.log(`BUDGET PASS: ${name} ${size}/${limit} bytes.`);
  } catch {
    errors.push(`Required homepage asset is missing: ${name}`);
  }
}

if (!homepage.includes('<link rel="stylesheet" href="home.css">')) {
  errors.push('Homepage does not load the extracted home.css stylesheet.');
}
if (!homepage.includes('<script defer src="home.js"></script>')) {
  errors.push('Homepage does not load the extracted home.js script.');
}
if (homepage.indexOf('href="home.css"') > homepage.indexOf('href="enhancements.css"')) {
  errors.push('home.css must load before enhancements.css to preserve cascade order.');
}
if (!serviceWorker.includes("BASE + 'home.css'") || !serviceWorker.includes("BASE + 'home.js'")) {
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
const imageRoot = resolve(root, 'img');
try {
  inspectImages(imageRoot);
  console.log(`IMAGE AUDIT: ${imageCount} image assets; ${largeImageCount} exceed 350 KB.`);
} catch {
  warnings.push('Image directory could not be inspected.');
}

