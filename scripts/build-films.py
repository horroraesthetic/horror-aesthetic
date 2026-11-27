#!/usr/bin/env python3
"""Builds data/films.json: per-film details for the in-app film screen (descriptions, excerpt, gore, poster flag)."""
import re,json,html,os,glob
idx=json.load(open('data/search-index.json',encoding='utf8'))
gore={os.path.basename(e[0]):e[5] for e in idx if e[3]=='review'}
manual=json.load(open('data/gore.json'))
for k,v in manual.items():
    if gore.get(k+'.html',-1)<0:gore[k+'.html']=v
def strip(t):return html.unescape(re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',t))).strip()
ALIAS={'ring':'ringu','pulse':'kairo','dark-water':'darkwater','perfect-blue':'perfectblue'}
posters={}
# Keep the filename lookup as a fallback for dossiers without a header poster.
# An explicit header image also supports shared artwork and versioned filenames.
header_poster=re.compile(
    r'<figure\b[^>]*\bclass="(?:hpst|pstf)"[^>]*>\s*<img\b[^>]*\bsrc="'
    r'(?:\.\./|/horror-aesthetic/)img/posters/([^"/?#]+\.webp)(?:\?[^"]*)?"'
)
for f in sorted(glob.glob('img/posters/*.webp'),key=lambda x:('horror-aesthetic' not in x,x)):
    b=os.path.basename(f);st=re.sub(r'\(\d+\)','',b[:-5]);st=re.sub(r'-\d{4}-horror-aesthetic-?','',st).strip('-')
    st=ALIAS.get(st,st)
    if os.path.exists('reviews/%s.html'%st) and st not in posters:posters[st]=b
out={}
for p in sorted(glob.glob('reviews/*.html')):
    slug=os.path.basename(p)[:-5]
    if slug=='index':continue
    s=open(p,encoding='utf8').read()
    if 'http-equiv="refresh"' in s:continue
    header=header_poster.search(s)
    if header:
        filename=html.unescape(header[1])
        if os.path.isfile(os.path.join('img','posters',filename)):posters[slug]=filename
    m=re.search(r'<meta name="description" content="(.*?)"',s,re.S);d=html.unescape(m.group(1)) if m else ''
    pr=d.split(' / ',1);en=pr[0].strip();ru=pr[1].strip() if len(pr)==2 else en
    def ex(cls):
        b=re.search(r'<div class="body '+cls+r'"[^>]*>(.*?)</div>',s,re.S)
        if not b:return ''
        ps=re.findall(r'<p[^>]*>(.*?)</p>',b.group(1),re.S)
        t=' '.join(strip(x) for x in ps[:2]) if ps else strip(b.group(1))
        return (t[:420].rsplit(' ',1)[0]+'…') if len(t)>420 else t
    out[slug]=[en,ru,ex('l-en'),ex('l-ru'),gore.get(slug+'.html',-1),posters.get(slug,'')]
open('data/films.json','w',encoding='utf8').write(json.dumps(out,ensure_ascii=False,separators=(',',':')))
print(len(out),'films,',os.path.getsize('data/films.json')//1024,'KB')
open('data/posters.json','w').write(json.dumps(posters,separators=(',',':')))
