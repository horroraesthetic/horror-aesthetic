#!/usr/bin/env python3
"""Rebuilds directors hub data, per-director pages and the timeline data from archives/index.html FILMS."""
import re,json,html,unicodedata,os
A=open('archives/index.html',encoding='utf8').read()
FILMS=json.loads(re.search(r'const FILMS = (\[.*?\]);',A,re.S).group(1))
cb=open('scripts/build-creepypasta.py',encoding='utf8').read()
exec(cb[:cb.index('def paras')])  # CSS, SCRIPT, EXTRA, BASE, page(), L()
def slugify(n):
    s=unicodedata.normalize('NFKD',n).encode('ascii','ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+','-',s).strip('-')
D={}
for f in FILMS:
    for n in [x.strip() for x in (f.get('director') or '').split(',') if x.strip()]:
        D.setdefault(n,[]).append(f)
rows=[]
for n,fs in D.items():
    fs=sorted(fs,key=lambda f:(f.get('year') or '9999',f['title']))
    ys=sorted({int(f['year']) for f in fs if f.get('year','').isdigit()})
    row={"name":n,"count":len(fs),"years":ys,"films":[{"title":f['title'],"ru":f.get('ru',''),"year":f.get('year',''),"url":f['url'],"rating":f.get('rating','')} for f in fs]}
    if len(fs)>=2:row["page"]=slugify(n)+'.html'
    rows.append(row)
rows.sort(key=lambda r:r['name'])
# hub
p='directors/index.html';s=open(p,encoding='utf8').read()
s=re.sub(r'const DIRECTORS=\[.*?\];',lambda m:'const DIRECTORS='+json.dumps(rows,ensure_ascii=False,separators=(',',':'))+';',s,1,re.S)
s=re.sub(r'(<b id="total">)\d+',r'\g<1>%d'%len(rows),s);s=re.sub(r'(<b id="film-total">)\d+',r'\g<1>%d'%len(FILMS),s)
if "d.page?" not in s:
    s=s.replace("'</summary><div class=\"film-links\">'+","'</summary><div class=\"film-links\">'+(d.page?'<a href=\"'+esc(d.page)+'\"><b>'+tr('Director page →','Страница режиссёра →')+'</b></a>':'')+",1)
open(p,'w',encoding='utf8').write(s)
# timeline
p='timeline/index.html';t=open(p,encoding='utf8').read()
t=re.sub(r'const FILMS=\[.*?\];',lambda m:'const FILMS='+json.dumps(FILMS,ensure_ascii=False,separators=(',',':'))+';',t,1,re.S)
t=re.sub(r'(<b id="total">)\d+',r'\g<1>%d'%len(FILMS),t);t=re.sub(r'\b128 (film|Film)',r'%d \1'%len(FILMS),t)
open(p,'w',encoding='utf8').write(t)
# pages
urls=[]
for r in rows:
    if 'page' not in r:continue
    n=r['name'];rs=[float(f['rating']) for f in r['films'] if f['rating']]
    avg=('%.1f'%(sum(rs)/len(rs))) if rs else '—'
    span=f"{r['years'][0]}–{r['years'][-1]}" if r['years'] else ''
    items=''.join(f'<li><a href="../reviews/{os.path.basename(f["url"])}"><b>{html.escape(f["title"])} ({f["year"]})</b><small>{html.escape(f["ru"]) if f["ru"] and f["ru"]!=f["title"] else ""}{" · " if f["rating"] and f["ru"] and f["ru"]!=f["title"] else ""}{f["rating"]+" / 5" if f["rating"] else ""}</small></a></li>' for f in r['films'])
    body=f'''<div class="k">{L("Режиссёр","Director")} · {span}</div><h1>{html.escape(n)}</h1>
<p class="m">{r["count"]} {L("фильмов в архиве","films in the archive")} · {L("средняя оценка","average rating")} {avg} / 5</p>
<ul class="hub">{items}</ul>
<div class="rel"><a href="./">{L("← Все режиссёры","← All directors")}</a> · <a href="../timeline/">{L("Хронология","Timeline")}</a> · <a href="/horror-aesthetic/">{L("На главную","Back to the site")}</a></div>'''
    out=page('directors/'+r['page'],html.escape(n)+' — films',html.escape(n)+' — фильмы',f'Films by {html.escape(n)} reviewed on Horror Aesthetic.',f'Фильмы режиссёра {html.escape(n)} в архиве Horror Aesthetic.','og-creepy.jpg',body,'directors/'+r['page'])
    out=out.replace('property="og:type" content="article"','property="og:type" content="profile"')
    open('directors/'+r['page'],'w',encoding='utf8').write(out);urls.append(BASE+'directors/'+r['page'])
sm=open('sitemap.xml',encoding='utf8').read()
for u in urls:
    if u not in sm:sm=sm.replace('</urlset>',f'<url><loc>{u}</loc></url>\n</urlset>')
open('sitemap.xml','w',encoding='utf8').write(sm)
print(len(rows),'directors',len(urls),'pages',len(FILMS),'films')
