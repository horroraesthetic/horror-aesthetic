#!/usr/bin/env python3
"""Builds data/daily.json (compact film list for the 'Film of the night' card) from archives/index.html FILMS."""
import re,json
A=open('archives/index.html',encoding='utf8').read()
m=re.search(r'const FILMS = (\[.*?\]);',A,re.S) or re.search(r'const FILMS=(\[.*?\]);',A,re.S)
F=json.loads(m.group(1))
out=[[f['slug'],f['title'],f.get('ru',''),f.get('year',''),f.get('director',''),f.get('rating','')] for f in F]
open('data/daily.json','w',encoding='utf8').write(json.dumps(out,ensure_ascii=False,separators=(',',':')))
print(len(out),'films')
