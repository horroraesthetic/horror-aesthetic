#!/usr/bin/env python3
"""Builds /collections/ (theme hubs) from the archive: matches review descriptions against theme keywords."""
import re,json,html,os,glob
A=open('archives/index.html',encoding='utf8').read()
FILMS=json.loads(re.search(r'const FILMS = (\[.*?\]);',A,re.S).group(1))
cb=open('scripts/build-creepypasta.py',encoding='utf8').read()
exec(cb[:cb.index('def paras')])  # CSS, SCRIPT, EXTRA, BASE, page(), L()
T=[
('haunted-houses','家','Haunted houses','Проклятые дома','Walls that remember. Houses, hotels, asylums and apartments where something stayed behind.','Стены, которые помнят. Дома, отели, приюты и квартиры, где что-то осталось.',r'haunted|house|mansion|manor|apartment|hotel|asylum|orphanage|estate',r'проклят\w* дом|дом|особняк|квартир|отел|приют|усадьб'),
('cursed-objects','呪','Cursed objects','Проклятые вещи','A tape, a doll, a mask, a book. Things that should never have been picked up.','Кассета, кукла, маска, книга. Вещи, которые не стоило брать в руки.',r'curse|cursed|doll|mask|amulet|artifact|talisman|ritual object|possessed object|puppet',r'проклят|кукл|маск|амулет|артефакт|талисман'),
('forests-wilderness','森','Forests and wilderness','Леса и глушь','Cabins, swamps, mountains and woods that answer back.','Хижины, болота, горы и леса, которые отвечают.',r'forest|woods|cabin|wilderness|jungle|swamp|mountain|camp|wilds',r'лес|хижин|джунгл|болот|гор[ыаеу]|лагер'),
('ghost-children','子','Children and ghosts','Дети и призраки','Small hands, school corridors and the child who is not alone in the room.','Маленькие руки, школьные коридоры и ребёнок, который в комнате не один.',r'child|children|kid|boy|girl|daughter|son |baby|orphan|school|teenager',r'ребён|ребен|дет[иейям]|мальчик|девочк|дочь|сын|школ|подрост'),
('screens-and-tapes','画','Screens, tapes and cameras','Экраны, плёнки и камеры','Televisions, VHS, found footage and phones: the horror that arrives through a screen.','Телевизоры, VHS, найденные плёнки и телефоны: ужас, который приходит через экран.',r'\btv\b|television|vhs|tape|camera|found footage|footage|screen|video|broadcast|phone|internet|website|webcam',r'телевиз|кассет|плёнк|пленк|камер|экран|видео|интернет|сайт|телефон|звонок'),
('folk-horror','村','Folk horror','Фолк-хоррор','Villages, cults, festivals and old rites. The land has rules.','Деревни, культы, праздники и древние обряды. У земли свои правила.',r'village|cult|ritual|pagan|folk|witch|sacrifice|festival|islander|coven',r'деревн|культ|ритуал|обряд|ведьм|жертв|остров|праздник|секта'),
('water','水','Water and depth','Вода и глубина','Lakes, wells, oceans, flooded rooms. Something is under the surface.','Озёра, колодцы, океаны, затопленные комнаты. Под поверхностью что-то есть.',r'water|lake|\bsea\b|ocean|river|ship|island|drown|\bwell\b|pool|flood|submarine|underwater',r'вод[аыеу]|озер|море|океан|река|корабл|утоп|колод|бассейн|подводн'),
('mirrors-and-doubles','鏡','Mirrors and doubles','Зеркала и двойники','Reflections, twins and the self that is not quite yours.','Отражения, близнецы и «я», которое не совсем твоё.',r'mirror|double|doppelg|twin|identity|clone|reflection|split personality',r'зеркал|двойник|близнец|личност|отражен|клон'),
('possession','憑','Possession and exorcism','Одержимость и экзорцизм','Demons, priests, nuns and the long night of the soul.','Демоны, священники, монахини и долгая ночь души.',r'possess|exorcis|demon|devil|satan|priest|\bnun\b|church|antichrist|damien',r'одержим|экзорц|демон|дьявол|сатан|священник|монахин|церков'),
('j-horror','日本','J-Horror and Japan','Японский хоррор','Vengeful ghosts, urban curses and the long black hair in the corridor.','Мстительные призраки, городские проклятия и длинные чёрные волосы в коридоре.',r'tokyo|japan|japanese|yurei|onryo|kaidan|kyoto|osaka|ghost girl',r'токио|япон|юрэй|онрё|кайдан|киото|осака'),
]
rating={os.path.basename(f['url']):(float(f['rating']) if f['rating'] else 0) for f in FILMS}
meta={os.path.basename(f['url']):f for f in FILMS}
IDX=json.load(open('data/search-index.json',encoding='utf8'))
rev=[e for e in IDX if e[3]=='review']
def desc(slug):
    try:s=open('reviews/'+slug,encoding='utf8').read()
    except Exception:return '',''
    if 'http-equiv="refresh"' in s:return None,None
    m=re.search(r'<meta name="description" content="(.*?)"',s,re.S)
    if not m:return '',''
    d=html.unescape(m.group(1));p=d.split(' / ',1)
    return (p[0].strip(),p[1].strip()) if len(p)==2 else (d,d)
ROWS={}
for slug in set(os.path.basename(e[0]) for e in rev):
    ROWS[slug]=desc(slug)
out=[]
for tid,kj,en,ru,den,dru,ren,rru in T:
    rx=re.compile(ren+'|'+rru,re.I);hits=[]
    for e in rev:
        slug=os.path.basename(e[0])
        if ROWS.get(slug,(0,0))[0] is None:continue
        d=ROWS.get(slug,('',''));blob=(e[1]+' '+e[2]+' '+e[4]+' '+d[0]+' '+d[1]).lower()
        if rx.search(blob):hits.append((slug,e,d))
    if tid=='j-horror':
        JD=['Takashi Miike','Kinji Fukasaku','Kiyoshi Kurosawa','Hideo Nakata','Nobuhiko Obayashi','Yoshihiro Nishimura','Masayuki Ochiai','Nobuo Nakagawa','Takashi Shimizu','Kaneto Shindo','Masaki Kobayashi','Koji Shiraishi','Satoshi Kon','Sion Sono','Shinya Tsukamoto','Noboru Iguchi','Higuchinsky','Norio Tsuruta']
        have={h[0] for h in hits}
        for e in rev:
            slug=os.path.basename(e[0]);m=meta.get(slug)
            if slug not in have and m and any(j in m['director'] for j in JD) and ROWS.get(slug,(0,0))[0] is not None:hits.append((slug,e,ROWS.get(slug,('',''))))
    hits.sort(key=lambda h:(-rating.get(h[0],0),meta.get(h[0],{}).get('year','')))
    hits=hits[:40];out.append((tid,kj,en,ru,den,dru,hits))
urls=[]
for tid,kj,en,ru,den,dru,hits in out:
    items=''.join('<li><a href="../reviews/%s"><b>%s</b><small>%s%s</small></a></li>'%(s,html.escape(e[1]),(html.escape(meta[s]['director'])+' · ') if s in meta and meta[s]['director'] else '',(str(rating[s]).rstrip('0').rstrip('.')+' / 5 · ' if rating.get(s) else '')+'<span class="l-en">'+html.escape(d[0])+'</span><span class="l-ru">'+html.escape(d[1])+'</span>') for s,e,d in hits)
    body=f'''<div class="k">{L("Подборка","Collection")} · {kj}</div><h1>{L(ru,en)}</h1><p class="dek">{L(dru,den)}</p><p class="m">{len(hits)} {L("фильмов","films")}</p>
<ul class="hub">{items}</ul>
<div class="rel"><a href="./">{L("← Все подборки","← All collections")}</a> · <a href="/horror-aesthetic/">{L("На главную","Back to the site")}</a></div>'''
    open(f'collections/{tid}.html','w',encoding='utf8').write(page(f'collections/{tid}.html',en+' (collection)',ru+' (подборка)',den,dru,'og-creepy.jpg',body,f'collections/{tid}.html'));urls.append(BASE+f'collections/{tid}.html')
cards=''.join('<li><a href="%s.html"><span class="n">%s · %d</span><b>%s</b><small>%s</small></a></li>'%(tid,kj,len(h),L(ru,en),L(dru,den)) for tid,kj,en,ru,den,dru,h in out)
hub=f'''<div class="k">{L("Раздел","Section")}</div><h1>{L("Подборки по темам","Collections")}</h1><p class="dek">{L("Фильмы из архива, собранные по темам: дома, леса, плёнки, зеркала, вода.","Films from the archive gathered by theme: houses, forests, tapes, mirrors, water.")}</p>
<ul class="hub">{cards}</ul>
<div class="rel"><a href="/horror-aesthetic/reviews/">{L("Все рецензии","All reviews")}</a> · <a href="/horror-aesthetic/">{L("На главную","Back to the site")}</a></div>'''
open('collections/index.html','w',encoding='utf8').write(page('collections/index.html','Collections','Подборки по темам','Film collections by theme from the Horror Aesthetic archive.','Подборки фильмов по темам из архива Horror Aesthetic.','og-creepy.jpg',hub,'collections/index.html'));urls.append(BASE+'collections/')
sm=open('sitemap.xml',encoding='utf8').read()
for u in urls:
    if u not in sm:sm=sm.replace('</urlset>',f'<url><loc>{u}</loc></url>\n</urlset>')
open('sitemap.xml','w',encoding='utf8').write(sm)
print({t[0]:len(t[6]) for t in out})
