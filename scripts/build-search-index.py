#!/usr/bin/env python3
"""Builds data/search-index.json for the Quick Jump palette (reviews + articles)."""
import re,glob,json,os
out=[]
def t(h,cls):
    m=re.search(r'<span (?:class="l-%s"|lang="%s")[^>]*>(.*?)</span>'%(cls,cls),h,re.S)
    return re.sub(r'<[^>]+>','',m.group(1)).strip() if m else ''
for folder,kind in (('reviews','review'),('articles','essay'),('creepypasta','story')):
    for p in sorted(glob.glob(folder+'/*.html')):
        if p.endswith('index.html'):continue
        s=open(p,encoding='utf8').read()
        m=re.search(r'<h1>(.*?)</h1>',s,re.S)
        if not m:continue
        h=m.group(1)
        en,ru=t(h,'en'),t(h,'ru')
        y=re.search(r'<small>\((\d{4})\)</small>',h)
        yr=' ('+y.group(1)+')' if y else ''
        if not en and not ru:continue
        out.append(['/horror-aesthetic/'+p,(en or ru)+yr,(ru or en)+yr,kind])
json.dump(out,open('data/search-index.json','w',encoding='utf8'),ensure_ascii=False,separators=(',',':'))
print(len(out),os.path.getsize('data/search-index.json'))
