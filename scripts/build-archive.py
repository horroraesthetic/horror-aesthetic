#!/usr/bin/env python3
"""Rebuilds the FILMS array of archives/index.html from reviews/*.html and refreshes the counts."""
import re,glob,json,html,os
old=open('archives/index.html',encoding='utf8').read()
m=re.search(r'const FILMS = (\[.*?\]);',old,re.S)
prev={f['slug']:f for f in json.loads(m.group(1))}
def num(x):
    return x.rstrip('0').rstrip('.') if '.' in x else x
out=[]
for p in sorted(glob.glob('reviews/*.html')):
    slug=os.path.basename(p)[:-5]
    if slug=='index':continue
    s=open(p,encoding='utf8').read()
    h=re.search(r'<h1>(.*?)</h1>',s,re.S)
    if not h:continue
    h=h.group(1)
    en=re.search(r'<span class="l-en">(.*?)</span>',h,re.S);ru=re.search(r'<span class="l-ru">(.*?)</span>',h,re.S);y=re.search(r'\((\d{4})\)',h)
    d=re.search(r'<span class="l-en">Director: (.*?) ·',s)
    r=re.search(r'<b>([\d.]+) / 5</b>',s)
    f=prev.get(slug,{})
    out.append({"slug":slug,"title":html.unescape(en.group(1)) if en else f.get('title',slug),"ru":html.unescape(ru.group(1)) if ru else f.get('ru',''),"year":y.group(1) if y else f.get('year',''),"director":html.unescape(d.group(1)) if d else f.get('director',''),"rating":num(r.group(1)) if r else f.get('rating',''),"url":"../reviews/%s.html"%slug})
out.sort(key=lambda f:f['title'].lower())
N=len(out)
new=old.replace(m.group(0),'const FILMS = '+json.dumps(out,ensure_ascii=False,separators=(',',':'))+';',1)
new=re.sub(r'(<b id="total">)\d+',r'\g<1>%d'%N,new)
new=re.sub(r'\d+ FILES',f'{N} FILES',new)
new=re.sub(r'\d+ film dossiers',f'{N} film dossiers',new)
open('archives/index.html','w',encoding='utf8').write(new)
ix=open('index.html',encoding='utf8').read()
ix=re.sub(r'\d+ film dossiers · directors',f'{N} film dossiers · directors',ix)
ix=re.sub(r'\d+ кинодосье · режиссёры',f'{N} кинодосье · режиссёры',ix)
open('index.html','w',encoding='utf8').write(ix)
print(N,len(prev))
