#!/usr/bin/env python3
"""Generates /creepypasta/ hub + story pages and /team/ from the data below."""
import re,os,html
src=open('reviews/index.html',encoding='utf8').read()
CSS=re.search(r'<style>(.*?)</style>',src,re.S).group(1)
SCRIPT=re.search(r'(<script>\(function\(\)\{var l=.*?</script>)',src,re.S).group(1)
EXTRA='''.ch{margin:0 0 26px}.ch p{margin:0 0 1.1em}code{font:14px ui-monospace,Menlo,monospace;color:#ffb3b8;background:#1b0d10;padding:1px 6px;border-radius:3px}
blockquote.last{animation:crawl 5s ease-in 1.2s both}@keyframes crawl{from{opacity:0}to{opacity:1}}
@media(prefers-reduced-motion:reduce){blockquote.last{animation:none}}
.stamp{font:600 12px/1.4 ui-monospace,Menlo,monospace;letter-spacing:.18em;color:#e2767d;text-transform:uppercase;margin:34px 0 0;border-top:1px solid var(--line);padding-top:14px}
.hub{list-style:none;margin:0;padding:0}.hub li{border-top:1px solid var(--line);padding:16px 0}.hub a{text-decoration:none;color:var(--bone);display:block}
.hub b{display:block;font:900 22px/1.15 Impact,"Arial Black",sans-serif;letter-spacing:.03em;text-transform:uppercase}.hub small{display:block;color:var(--dim);font:14px/1.5 Georgia,serif;margin-top:4px}.hub .n{font:600 11px/1 ui-monospace,monospace;letter-spacing:.18em;color:#e2767d}
.role{border-top:1px solid var(--line);padding:14px 0}.role b{font:700 15px/1.3 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#e2767d}'''
BASE='https://horroraesthetic.github.io/horror-aesthetic/'
def esc(s):return s
def page(path,title_en,title_ru,desc_en,desc_ru,og,body,canon):
    depth=path.count('/')
    up='../'*depth
    return f'''<!doctype html><html lang="en" data-l="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title_en} / {title_ru} | Horror Aesthetic</title><meta name="description" content="{desc_en} / {desc_ru}"><link rel="canonical" href="{BASE}{canon}"><meta name="theme-color" content="#050a14">
<meta property="og:type" content="article"><meta property="og:site_name" content="Horror Aesthetic"><meta property="og:title" content="{title_en} / {title_ru}"><meta property="og:description" content="{desc_en} / {desc_ru}"><meta property="og:url" content="{BASE}{canon}"><meta property="og:image" content="{BASE}img/mag/{og}"><meta name="twitter:card" content="summary_large_image">
<style>{CSS}{EXTRA}</style><link rel="stylesheet" href="{up}mag-gallery.css?v=1">{SCRIPT}{'' if path.endswith('index.html') else '<link rel="stylesheet" href="/horror-aesthetic/comments.css?v=2"><script defer src="/horror-aesthetic/comments.js?v=2"></script>'}{'<script defer src="/horror-aesthetic/listen.js?v=1"></script><script defer src="/horror-aesthetic/story-sound.js?v=1"></script>' if path.startswith('creepypasta/') and not path.endswith('index.html') else ''}</head><body><div class="w"><div class="top"><a href="/horror-aesthetic/"><b>&#9733;</b> Horror Aesthetic</a><span class="lg"><button type="button" data-l="en" aria-pressed="true">EN</button> <button type="button" data-l="ru" aria-pressed="false">RU</button></span></div>
{body}</div></body></html>'''
def L(ru,en,tag='span'):return f'<{tag} class="l-ru">{ru}</{tag}><{tag} class="l-en">{en}</{tag}>'
def paras(a):return ''.join(x if x.startswith('<') else '<p>'+x+'</p>' for x in a)
def img2_html(s):
    i=s.get("img2")
    if not i:return ""
    return f'<figure class="ha-hero-fig"><img src="../img/mag/{i["img"]}.webp" width="{i["w"]}" height="{i["h"]}" loading="lazy" decoding="async" alt="{i["alt"]}"><figcaption>{i["cap"]}</figcaption></figure>'
def story_body(s,idx,total):
    nav=[]
    return f'''<div class="k">{L("Крипипаста от команды","Creepypasta from the team")} · {idx:02d}/{total:02d}</div>
<h1>{L(s["ru_t"],s["en_t"])}</h1>
<p class="m">{L(s["ru_m"],s["en_m"])}</p>
<figure class="ha-hero-fig"><img src="../img/mag/{s["img"]}.webp" width="{s["w"]}" height="{s["h"]}" decoding="async" fetchpriority="high" alt="{s["alt"]}"><figcaption>{s["cap"]}</figcaption></figure>
<div class="ch body l-ru" lang="ru">{paras(s["ru"])}</div><div class="ch body l-en" lang="en">{paras(s["en"])}</div>
{img2_html(s)}<p class="stamp">HORROR AESTHETIC / 03:14</p>
<div class="rel"><a href="./">{L("← Все истории","← All stories")}</a> · <a href="/horror-aesthetic/team/">{L("Команда","The team")}</a> · <a href="/horror-aesthetic/">{L("На главную","Back to the site")}</a></div>'''
S=__import__('json').load(open('scripts/creepypasta-data.json',encoding='utf8'))
os.makedirs('creepypasta',exist_ok=True);os.makedirs('team',exist_ok=True)
tot=len(S['stories'])
for i,s in enumerate(S['stories'],1):
    p=f'creepypasta/{s["slug"]}.html'
    open(p,'w',encoding='utf8').write(page(p,s['en_t'],s['ru_t'],s['d_en'],s['d_ru'],s['og'],story_body(s,i,tot),p))
hub=f'''<div class="k">{L("Раздел","Section")}</div><h1>{L("Крипипасты команды","Team creepypastas")}</h1>
<p class="dek">{L("Истории, которые случились с нами при работе над сайтом. Читать лучше ночью. Иногда в 03:14.","Stories that happened to us while building the site. Best read at night. Sometimes at 03:14.")}</p>
<ul class="hub">'''+''.join(f'<li><a href="{s["slug"]}.html"><span class="n">{i:02d}</span><b>{L(s["ru_t"],s["en_t"])}</b><small>{L(s["d_ru"],s["d_en"])}</small></a></li>' for i,s in enumerate(S['stories'],1))+f'''</ul>
<div class="rel"><a href="/horror-aesthetic/team/">{L("Кто мы такие","Who we are")}</a> · <a href="/horror-aesthetic/">{L("← На главную","← Back to the site")}</a></div>'''
open('creepypasta/index.html','w',encoding='utf8').write(page('creepypasta/index.html','Team creepypastas','Крипипасты команды','Original creepypastas from the Horror Aesthetic team.','Оригинальные крипипасты от команды Horror Aesthetic.','lamp-cup.webp'.replace('lamp-cup.webp','og-creepy.jpg'),hub,'creepypasta/'))
T=S['team']
tb=f'''<div class="k">{L("О нас","About us")}</div><h1>{L(T["ru_t"],T["en_t"])}</h1>
<figure class="ha-hero-fig"><img src="../img/mag/triptych.webp" width="1400" height="467" decoding="async" fetchpriority="high" alt="Видеокассета, лестница и телефон"><figcaption>HORROR AESTHETIC / TEAM FILE</figcaption></figure>
<p class="dek">{L(T["ru_d"],T["en_d"])}</p>'''+''.join(f'<div class="role"><b>{L(r[0],r[1])}</b><p class="body l-ru">{r[2]}</p><p class="body l-en">{r[3]}</p></div>' for r in T['roles'])+f'''
<div class="rel"><a href="/horror-aesthetic/creepypasta/">{L("Наши крипипасты →","Our creepypastas →")}</a> · <a href="/horror-aesthetic/">{L("← На главную","← Back to the site")}</a></div>'''
open('team/index.html','w',encoding='utf8').write(page('team/index.html','The Team','Команда','Who makes Horror Aesthetic.','Кто делает Horror Aesthetic.','og-creepy.jpg',tb,'team/'))
print('ok',tot)
