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
  if (!/<title\b[^>]*>\s*[^<]+<\/title>/i.test(html)) {
    warnings.push(`Missing or empty title: ${relative}`);
  }
  if (!/<meta\s+name=["']viewport["']/i.test(html)) {
    warnings.push(`Missing viewport meta: ${relative}`);
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
