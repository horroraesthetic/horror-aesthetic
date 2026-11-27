#!/usr/bin/env python3
"""Add bilingual reviews from scripts/review-batches/<batch>.json
Creates reviews/<id>.html, appends the card record to reviews-more.js (HA_MORE) and lists the page in sitemap.xml.
Everything else (search index, catalogue, OG cover, feed, archive) is rebuilt by .github/workflows/rebuild.yml.
Usage: python3 scripts/add-reviews.py scripts/review-batches/batch1.json"""
import sys, os, re, json, html, glob
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://horroraesthetic.github.io/horror-aesthetic/'
E = lambda t: html.escape(t, quote=True).replace('&quot;', '&quot;')

def styles():
    out = {}
    for key, src in (('teal', 'audition'), ('red', 'marebito')):
        s = open(ROOT + '/reviews/%s.html' % src, encoding='utf-8').read()
        out[key] = (re.search(r'<style>(.*?)</style>', s, re.S).group(1), re.search(r'name="theme-color" content="(#[0-9a-f]+)"', s).group(1))
    s = open(ROOT + '/reviews/audition.html', encoding='utf-8').read()
    lang = re.search(r'(<script>\(function\(\)\{var l="en".*?</script>)', s, re.S).group(1)
    return out, lang

def page(r, st, lang, existing):
    css, theme = st[r['tone']]
    slug, en, ru, y = r['id'], r['en'], r['ru'], r['year']
    url = SITE + 'reviews/%s.html' % slug
    og = SITE + 'img/og/%s.jpg' % slug
    title = '%s (%d): review / рецензия | Horror Aesthetic' % (en, y)
    desc = '%s (%d), dir. %s. %s / %s' % (en, y, r['dir_en'], r['dek_en'], r['dek_ru'])
    body_en = ''.join('<p>%s</p>' % E(p) for p in r['en_p'])
    body_ru = ''.join('<p>%s</p>' % E(p) for p in r['ru_p'])
    ld = {"@context": "https://schema.org", "@type": "Review", "name": "%s (%d) review" % (en, y), "inLanguage": "en",
          "reviewBody": ' '.join(r['en_p']),
          "itemReviewed": {"@type": "Movie", "name": en, "alternateName": ru, "dateCreated": str(y), "director": {"@type": "Person", "name": r['dir_en']}},
          "reviewRating": {"@type": "Rating", "ratingValue": r['r'], "bestRating": 5, "worstRating": 0.5},
          "author": {"@type": "Organization", "name": "Horror Aesthetic", "url": SITE},
          "publisher": {"@type": "Organization", "name": "Horror Aesthetic", "url": SITE}}
    bc = {"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Horror Aesthetic", "item": SITE},
        {"@type": "ListItem", "position": 2, "name": "Reviews", "item": SITE + "reviews/"},
        {"@type": "ListItem", "position": 3, "name": en, "item": url}]}
    warn = ''
    if r.get('warn_en'):
        warn = '<p class="m">&#9888; <span class="l-ru">%s</span><span class="l-en">%s</span></p>' % (E(r['warn_ru']), E(r['warn_en']))
    rel = ''
    for sl in r['related']:
        if sl in existing:
            ru_t, en_t, yy = existing[sl]
            rel += '<li><a href="/horror-aesthetic/reviews/%s.html"><span class="l-ru">%s</span><span class="l-en">%s</span></a> (%s)</li>' % (sl, E(ru_t), E(en_t), yy)
    A = lambda e: e.replace('"', '&quot;')
    return ('<!doctype html><html lang="en" data-l="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n'
      '<title>%s</title><meta name="description" content="%s"><link rel="canonical" href="%s"><meta name="theme-color" content="%s">\n'
      '<meta property="og:type" content="article"><meta property="og:site_name" content="Horror Aesthetic"><meta property="og:title" content="%s"><meta property="og:description" content="%s"><meta property="og:url" content="%s"><meta property="og:image" content="%s"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="%s">\n'
      '<link rel="alternate" type="application/rss+xml" title="Horror Aesthetic" href="/horror-aesthetic/feed.xml"><style>%s</style>'
      '<script type="application/ld+json">%s</script><script type="application/ld+json">%s</script>%s'
      '<link rel="stylesheet" href="../enhancements.css"><script defer src="../enhancements.js"></script><script defer src="../review-tools.js"></script></head><body><div class="w"><div class="top"><a href="/horror-aesthetic/"><b>&#9733;</b> Horror Aesthetic</a><span class="lg"><button type="button" data-l="en" aria-pressed="true">EN</button> <button type="button" data-l="ru" aria-pressed="false">RU</button></span></div><article><div class="k"><span class="l-ru">Рецензия</span><span class="l-en">Review</span></div>\n'
      '<h1><span class="l-ru">%s</span><span class="l-en">%s</span> <small>(%d)</small></h1>\n'
      '<p class="m"><span class="l-ru">Режиссёр: %s · %s</span><span class="l-en">Director: %s · %s</span></p>\n'
      '<div class="sc"><span>&#9733;<b>%s / 5</b></span><span>Gore<b>%d / 5</b></span></div>%s\n'
      '<p class="dek"><span class="l-ru">%s</span><span class="l-en">%s</span></p>\n'
      '<div class="body l-ru" lang="ru">%s</div><div class="body l-en" lang="en">%s</div></article>\n'
      '<div class="rel"><b><span class="l-ru">Ещё рецензии</span><span class="l-en">More reviews</span></b><ul>%s</ul><p><a href="/horror-aesthetic/#reviews"><span class="l-ru">Все рецензии на сайте</span><span class="l-en">All reviews on the site</span></a> · <a href="/horror-aesthetic/reviews/"><span class="l-ru">Указатель</span><span class="l-en">Index</span></a> · <a href="/horror-aesthetic/feed.xml">RSS</a></p></div></div></body></html>\n') % (
      E(title), A(E(desc)), url, theme, E(title), A(E(desc)), url, og, og, css,
      json.dumps(ld, ensure_ascii=False), json.dumps(bc, ensure_ascii=False), lang,
      E(ru), E(en), y, E(r['dir_ru']), E(r['tags_ru']), E(r['dir_en']), E(r['tags_en']),
      ('%g' % r['r']), r['g'], warn, E(r['dek_ru']), E(r['dek_en']), body_ru, body_en, rel)

def main():
    batch = json.load(open(sys.argv[1], encoding='utf-8'))
    st, lang = styles()
    existing = {}
    for p in glob.glob(ROOT + '/reviews/*.html'):
        s = open(p, encoding='utf-8').read()
        m = re.search(r'<h1><span class="l-ru">(.*?)</span><span class="l-en">(.*?)</span>\s*<small>\(?(\d{4})', s)
        if m: existing[os.path.basename(p)[:-5]] = (html.unescape(m.group(1)), html.unescape(m.group(2)), m.group(3))
    mp = ROOT + '/reviews-more.js'
    ms = open(mp, encoding='utf-8').read()
    head = ms[:ms.index('window.HA_MORE=') + len('window.HA_MORE=')]
    data = json.loads(ms[len(head):ms.rindex(']') + 1])
    have = {e['id'] for e in data}
    sm = open(ROOT + '/sitemap.xml', encoding='utf-8').read()
    n = 0
    for r in batch:
        if r['id'] in have or os.path.exists(ROOT + '/reviews/%s.html' % r['id']):
            print('skip (exists)', r['id']); continue
        for k in ('ru_p', 'en_p'): assert 3 <= len(r[k]) <= 5, (r['id'], k)
        existing[r['id']] = (r['ru'], r['en'], str(r['year']))
        open(ROOT + '/reviews/%s.html' % r['id'], 'w', encoding='utf-8').write(page(r, st, lang, existing))
        entry = {"id": r['id'], "film": [r['ru'], r['en'], r['year']], "d": {"ru": r['dir_ru'], "en": r['dir_en']}, "h": r['h'], "r": r['r'], "g": r['g'], "gn": r['gn'],
                 "s": {"ru": r['dek_ru'], "en": r['dek_en']}, "f": {"ru": r['ru_p'][:2], "en": r['en_p'][:2]}}
        if r.get('warn_en'): entry['warn'] = {"ru": r['warn_ru'], "en": r['warn_en']}
        data.append(entry)
        loc = '<url><loc>%sreviews/%s.html</loc><lastmod>%s</lastmod></url>\n' % (SITE, r['id'], batch_date)
        sm = sm.replace('</urlset>', loc + '</urlset>')
        n += 1
    open(mp, 'w', encoding='utf-8').write(head + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';\n')
    open(ROOT + '/sitemap.xml', 'w', encoding='utf-8').write(sm)
    # reviews/index.html directory (kept sorted by English title)
    ip = ROOT + '/reviews/index.html'
    ix = open(ip, encoding='utf-8').read()
    for r in batch:
        if 'reviews/%s.html"' % r['id'] in ix: continue
        li = '<li data-year="%d"><a href="/horror-aesthetic/reviews/%s.html"><span class="l-ru">%s</span><span class="l-en">%s</span></a> (%d)</li>\n' % (r['year'], r['id'], E(r['ru']), E(r['en']), r['year'])
        lines = ix.split('\n'); out = []; done = False
        for ln in lines:
            m = re.match(r'<li data-year="\d+"><a href="[^"]*"><span class="l-ru">.*?</span><span class="l-en">(.*?)</span>', ln)
            if m and not done and html.unescape(m.group(1)).lower() > r['en'].lower():
                out.append(li.rstrip('\n')); done = True
            out.append(ln)
        if not done:
            raise SystemExit('could not place ' + r['id'])
        ix = '\n'.join(out)
    open(ip, 'w', encoding='utf-8').write(ix)
    print('added', n)

batch_date = os.environ.get('HA_DATE', '2026-11-27')
if __name__ == '__main__':
    main()
