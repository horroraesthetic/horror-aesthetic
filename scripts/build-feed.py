#!/usr/bin/env python3
"""Builds feed-reviews.xml: the newest review pages (by git commit date), so new reviews reach RSS readers automatically."""
import glob,os,re,html,subprocess,datetime,email.utils
B='https://horroraesthetic.github.io/horror-aesthetic/'
rows=[]
for p in glob.glob('reviews/*.html'):
    n=os.path.basename(p)
    if n=='index.html':continue
    s=open(p,encoding='utf8').read()
    if 'http-equiv="refresh"' in s:continue
    t=re.search(r'<title>(.*?)</title>',s,re.S);d=re.search(r'<meta name="description" content="(.*?)"',s,re.S)
    try:
        c=subprocess.run(['git','log','-1','--format=%ct','--',p],capture_output=True,text=True).stdout.strip()
        ts=int(c) if c else int(os.path.getmtime(p))
    except Exception:ts=int(os.path.getmtime(p))
    rows.append((ts,n,html.unescape(t.group(1)).split(' | ')[0] if t else n,html.unescape(d.group(1)) if d else ''))
rows.sort(reverse=True)
esc=lambda x:html.escape(x,quote=False)
items=''.join('<item><title>%s</title><link>%sreviews/%s</link><guid isPermaLink="true">%sreviews/%s</guid><pubDate>%s</pubDate><description>%s</description></item>'%(esc(t),B,n,B,n,email.utils.formatdate(ts),esc(d)) for ts,n,t,d in rows[:30])
x='<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Horror Aesthetic: new reviews</title><link>%s</link><description>The newest film reviews on Horror Aesthetic</description><language>en</language>%s</channel></rss>'%(B,items)
open('feed-reviews.xml','w',encoding='utf8').write(x);print(len(rows),'reviews,',min(30,len(rows)),'in feed')
