#!/usr/bin/env python3
"""Build 1200x630 Open Graph covers for review pages: img/og/<slug>.jpg
and point og:image / twitter:image at them (pages that have a real poster keep it).
Usage: python3 scripts/build-og.py [--force] [slug ...]
Needs Pillow; fonts: Liberation Serif, DejaVu Sans Mono (falls back to PIL default)."""
import re, sys, os, json, glob, hashlib, html
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BG = ROOT + '/scripts/og-bg/'
OUT = ROOT + '/img/og/'
SITE = 'https://horroraesthetic.github.io/horror-aesthetic/'
W, H = 1200, 630

POOLS = {
 'ghost': ['tv-room','tv-eye','tv-crawl','well-bath','desk-sadako','well-ghost','window-hands','torii-night','torii-moon','ghost-mask','tv-ghost','school-photo'],
 'gore': ['hand-crawl','letters','hand','ghost-mask','class-red','lamp','stairs','corridor-wc'],
 'slasher': ['house-street','stairs','corridor-wc','hall-light','lamp','train','phone-booth'],
 'giallo': ['letters','lamp','phone-booth','train','hall-light','house-street'],
 'any': ['lantern-road','tv-old','dark-tv','hall-light','house-street','stairs','train','torii-night','corridor-wc','lamp','phone-booth','tv-ghost'],
}
TAGPOOL = {'j-horror':'ghost','kaidan':'ghost','ghost':'ghost','supernatural':'ghost','yokai':'ghost',
 'gore':'gore','splatterpunk':'gore','splatter':'gore','extreme':'gore','trash':'gore','exploitation':'gore','body':'gore',
 'slasher':'slasher','giallo':'giallo'}

def font(names, size):
    for n in names:
        for d in ('/usr/share/fonts/truetype/liberation/', '/usr/share/fonts/truetype/dejavu/', '/usr/share/fonts/'):
            p = d + n
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def tracked(draw, xy, text, f, fill, tr=0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += f.getlength(ch) + tr
    return x

def twidth(text, f, tr=0):
    return sum(f.getlength(c) + tr for c in text)

def wrap(text, f, maxw, tr):
    lines, cur = [], ''
    for w in text.split():
        t = (cur + ' ' + w).strip()
        if twidth(t, f, tr) <= maxw or not cur:
            cur = t
        else:
            lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines

def tags_for(slug, idx):
    for r in idx:
        if r[0].endswith('/reviews/%s.html' % slug) and r[3] == 'review':
            t = r[4].split(' · ', 1)[-1] if ' · ' in r[4] else ''
            return re.findall(r'[a-z][a-z\-]+', ' '.join(t.split()[:3]))
    return []

_assign = {}
def pick(slug, idx):
    if not _assign:
        cnt = {}
        for p in sorted(glob.glob(ROOT + '/reviews/*.html')):
            sl = os.path.basename(p)[:-5]; pool = 'any'
            for t in tags_for(sl, idx):
                if t in TAGPOOL:
                    pool = TAGPOOL[t]; break
            i = cnt.get(pool, 0); cnt[pool] = i + 1
            lst = POOLS[pool]
            _assign[sl] = (lst[(i * 5 + len(pool)) % len(lst)] if len(lst) % 5 else lst[i % len(lst)], pool)
    return _assign[slug]

def make(slug, en, ru, year, bgname, label='РЕЦЕНЗИЯ  /  REVIEW'):
    bg = Image.open(BG + bgname + '.jpg').convert('RGB')
    y0 = 150
    im = bg.crop((0, y0, W, y0 + H)).convert('RGBA')
    # readability gradients
    g1 = Image.new('RGBA', (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(g1)
    for x in range(0, 860):
        gd.line([(x, 0), (x, H)], fill=(0, 0, 0, int(190 * (1 - x / 860) ** 1.4)))
    g2 = Image.new('RGBA', (W, H), (0, 0, 0, 0)); gd = ImageDraw.Draw(g2)
    for y in range(H - 330, H):
        gd.line([(0, y), (W, y)], fill=(0, 0, 0, int(210 * ((y - (H - 330)) / 330) ** 1.5)))
    im = Image.alpha_composite(Image.alpha_composite(im, g1), g2)
    # logo, top left
    lg = Image.open(ROOT + '/img/brand/logo-cream.webp').convert('RGBA')
    lw = 210; lg = lg.resize((lw, int(lg.height * lw / lg.width)), Image.LANCZOS)
    im.alpha_composite(lg, (48, 38))
    # text
    d = ImageDraw.Draw(im)
    f_lab = font(['DejaVuSansMono-Bold.ttf'], 19)
    f_ru = font(['LiberationSerif-Italic.ttf'], 32)
    f_yr = font(['LiberationSerif-Bold.ttf'], 30)
    title = en.upper(); tr = 3; maxw = 800
    for size in range(84, 38, -4):
        f_t = font(['LiberationSerif-Bold.ttf'], size)
        lines = wrap(title, f_t, maxw, tr)
        if len(lines) <= 3 and (len(lines) <= 2 or size <= 56):
            if all(twidth(l, f_t, tr) <= maxw for l in lines): break
    lh = int(size * 1.06)
    show_ru = ru and ru.strip().lower() != en.strip().lower()
    bottom = H - 84
    block = len(lines) * lh + 24 + 40 + (44 if (show_ru or year) else 0)
    y = bottom - block
    # shadow layer for title
    sh = Image.new('RGBA', (W, H), (0, 0, 0, 0)); sd = ImageDraw.Draw(sh)
    yy = y + 40
    for ln in lines:
        tracked(sd, (56, yy), ln, f_t, (0, 0, 0, 255), tr); yy += lh
    sh = sh.filter(ImageFilter.GaussianBlur(7)); im = Image.alpha_composite(im, sh); d = ImageDraw.Draw(im)
    tracked(d, (56, y), label, f_lab, (208, 34, 44, 255), 4)
    d.line([(56, y + 30), (56 + 54, y + 30)], fill=(208, 34, 44, 255), width=2)
    yy = y + 44
    for ln in lines:
        tracked(d, (56, yy), ln, f_t, (236, 228, 214, 255), tr); yy += lh
    yy += 8
    xr = 58
    if year:
        tracked(d, (58, yy), str(year), f_yr, (208, 34, 44, 255), 5); xr = 58 + twidth(str(year), f_yr, 5) + 26
    if show_ru:
        d.text((xr, yy + 1), ru, font=f_ru, fill=(205, 198, 188, 255))
    im.convert('RGB').save(OUT + slug + '.jpg', quality=72, optimize=True, progressive=True)

def parse(path):
    s = open(path, encoding='utf-8').read()
    m = re.search(r'<h1><span class="l-ru">(.*?)</span><span class="l-en">(.*?)</span>\s*<small>\(?(\d{4})\)?</small>', s)
    if not m:
        t = re.search(r'og:title" content="([^"]*?) \((\d{4})\)', s)
        if not t: return None
        return s, html.unescape(t.group(1)), '', t.group(2)
    return s, html.unescape(re.sub('<[^>]+>', '', m.group(2))), html.unescape(re.sub('<[^>]+>', '', m.group(1))), m.group(3)

THEMEBG = {'ghosts':'ghost-mask','mystic':'torii-moon','witches':'lantern-road','witchcraft':'lantern-road','vampires':'lamp','gore':'hand-crawl','slashers':'house-street','zombies':'corridor-wc','serial':'letters','psycho':'letters','religion':'torii-night','objects':'dark-tv','monsters':'well-ghost','mutants':'hand','mummies':'tv-old','werewolves':'stairs','animals':'hall-light','anthologies':'tv-ghost','cannibals':'class-red','gothic':'house-street','trash':'phone-booth','parodies':'train','giallo':'phone-booth','medicine':'corridor-wc','index':'school-photo'}

def themes(force):
    n = 0
    for p in sorted(glob.glob(ROOT + '/themes/*.html')):
        name = os.path.basename(p)[:-5]; slug = 'theme-' + name
        s = open(p, encoding='utf-8').read()
        m = re.search(r'<h1><span class="l-ru">(.*?)</span><span class="l-en">(.*?)</span>', s)
        if not m or name not in THEMEBG: continue
        ru = html.unescape(re.sub('<[^>]+>', '', m.group(1))); en = html.unescape(re.sub('<[^>]+>', '', m.group(2)))
        if force or not os.path.exists(OUT + slug + '.jpg'):
            make(slug, en, ru, None, THEMEBG[name], 'ТЕМА  /  THEME'); n += 1
        url = SITE + 'img/og/%s.jpg' % slug
        t = re.sub(r'(<meta property="og:image" content=")[^"]*(")', r'\g<1>%s\g<2>' % url, s)
        t = re.sub(r'(<meta name="twitter:image" content=")[^"]*(")', r'\g<1>%s\g<2>' % url, t)
        if t != s: open(p, 'w', encoding='utf-8').write(t)
    return n

def main():
    force = '--force' in sys.argv
    only = [a for a in sys.argv[1:] if not a.startswith('--')]
    os.makedirs(OUT, exist_ok=True)
    idx = json.load(open(ROOT + '/data/search-index.json'))
    done = 0
    for p in sorted(glob.glob(ROOT + '/reviews/*.html')):
        slug = os.path.basename(p)[:-5]
        if only and slug not in only: continue
        r = parse(p)
        if not r: continue
        s, en, ru, year = r
        m = re.search(r'<meta property="og:image" content="([^"]*)"', s)
        cur = m.group(1) if m else ''
        if 'img/posters/' in cur: continue   # a real poster is better than a generated cover
        if force or not os.path.exists(OUT + slug + '.jpg'):
            bgname, _ = pick(slug, idx)
            make(slug, en, ru, year, bgname); done += 1
        url = SITE + 'img/og/%s.jpg' % slug
        n = re.sub(r'(<meta property="og:image" content=")[^"]*(")', r'\g<1>%s\g<2>' % url, s)
        n = re.sub(r'(<meta name="twitter:image" content=")[^"]*(")', r'\g<1>%s\g<2>' % url, n)
        if '<meta property="og:image:width"' not in n and 'og:image" content="%s"' % url in n:
            n = n.replace('<meta property="og:image" content="%s">' % url,
                          '<meta property="og:image" content="%s"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">' % url, 1)
        if n != s: open(p, 'w', encoding='utf-8').write(n)
    if not only: done += themes(force)
    print('built', done)

if __name__ == '__main__':
    main()
