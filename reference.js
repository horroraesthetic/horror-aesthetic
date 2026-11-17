(() => {
  'use strict';
  const kind = document.body.dataset.reference;
  const glossary = [
    {id:'kaidan',cat:'folklore',en:'Kaidan',ru:'Кайдан',roman:'怪談',enShort:'A traditional ghost story, often shaped by memory, moral consequence and the uncanny.',ruShort:'Традиционный рассказ о призраках, памяти, нарушенном порядке и сверхъестественном.',enDetail:'Kaidan is a storytelling tradition rather than a single monster type. Its quiet dread often comes from an unresolved promise, a past injustice or a presence that refuses to leave.',ruDetail:'Кайдан — традиция повествования, а не название одного вида чудовищ. Тревога рождается из неисполненного обещания, старой несправедливости или присутствия, которое не желает исчезать.'},
    {id:'yurei',cat:'folklore',en:'Yūrei',ru:'Юрэй',roman:'幽霊',enShort:'A spirit of the dead, commonly tied to grief, unfinished business or a violent end.',ruShort:'Дух умершего, связанный с горем, незавершённым делом или насильственной смертью.',enDetail:'The familiar image of a pale figure with long dark hair is one visual convention, not a universal rule. Stories vary by period, region and medium.',ruDetail:'Образ бледной фигуры с длинными тёмными волосами — узнаваемая визуальная традиция, но не универсальное правило. Детали меняются в зависимости от эпохи, региона и произведения.'},
    {id:'yokai',cat:'folklore',en:'Yōkai',ru:'Ёкай',roman:'妖怪',enShort:'A broad family of strange beings, transformations and uncanny phenomena in Japanese folklore.',ruShort:'Обширная группа необычных существ, превращений и сверхъестественных явлений японского фольклора.',enDetail:'Yōkai may be frightening, comic, helpful or morally ambiguous. The word covers many distinct traditions and should not be reduced to “Japanese demons”.',ruDetail:'Ёкаи бывают пугающими, смешными, полезными или неоднозначными. Это собирательное понятие для множества традиций, а не просто «японские демоны».'},
    {id:'onryo',cat:'folklore',en:'Onryō',ru:'Онрё',roman:'怨霊',enShort:'A vengeful spirit whose rage persists after death.',ruShort:'Мстительный дух, чья ярость сохраняется после смерти.',enDetail:'Onryō narratives turn injustice into an active haunting. The haunting may expose the wrongdoing of the living rather than merely threaten them.',ruDetail:'В историях об онрё несправедливость превращается в действующую силу преследования. Призрак может обнажать вину живых, а не просто угрожать им.'},
    {id:'gaki',cat:'folklore',en:'Gaki',ru:'Гаки',roman:'餓鬼',enShort:'Hungry ghosts condemned to an existence of endless craving.',ruShort:'Голодные духи, обречённые на бесконечную неудовлетворённую жажду.',enDetail:'The figure appears in Buddhist cosmology and visual culture. It is a useful reference for horror about appetite, deprivation and bodies transformed by desire.',ruDetail:'Образ встречается в буддийской космологии и визуальной культуре. Он важен для хоррора о голоде, лишении и теле, изменённом ненасытным желанием.'},
    {id:'jhorror',cat:'cinema',en:'J-Horror',ru:'J-Horror',roman:'Japanese horror',enShort:'A label for Japanese horror cinema and its international wave of influence.',ruShort:'Обозначение японского хоррора и его международного культурного влияния.',enDetail:'The label is broad: it includes supernatural tales, psychological dread, technological anxieties and works that resist easy genre boundaries.',ruDetail:'Термин широк: он охватывает сверхъестественные истории, психологический страх, тревогу перед технологиями и фильмы, не укладывающиеся в простые жанровые рамки.'},
    {id:'body-horror',cat:'cinema',en:'Body horror',ru:'Боди-хоррор',roman:'Body transformation',enShort:'Horror built around the body changing, failing, mutating or becoming unfamiliar.',ruShort:'Хоррор о теле, которое меняется, разрушается, мутирует или становится чужим.',enDetail:'The body becomes the site of fear. Transformation can be biological, technological, social or psychological; the strongest examples connect physical change to identity.',ruDetail:'Тело становится главным местом ужаса. Изменение может быть биологическим, технологическим, социальным или психологическим; особенно сильные произведения связывают телесную трансформацию с идентичностью.'},
    {id:'splatterpunk',cat:'cinema',en:'Splatterpunk',ru:'Сплаттерпанк',roman:'Extreme horror fiction',enShort:'An abrasive horror mode that confronts violence, taboo and social discomfort directly.',ruShort:'Резкая форма хоррора, прямо сталкивающая читателя с насилием, табу и социальным дискомфортом.',enDetail:'Splatterpunk is often associated with transgressive fiction, but shock alone is not a definition. Its better-known works use extremity to challenge power, hypocrisy or complacency.',ruDetail:'Сплаттерпанк часто связывают с трансгрессивной прозой, но один лишь шок не определяет жанр. Важные произведения используют крайность, чтобы говорить о власти, лицемерии и равнодушии.'},
    {id:'giallo',cat:'cinema',en:'Giallo',ru:'Джалло',roman:'Italian thriller tradition',enShort:'An Italian thriller-horror tradition known for stylised murder mysteries and heightened visual design.',ruShort:'Итальянская традиция триллера и хоррора с выразительной визуальной стилистикой и загадочными убийствами.',enDetail:'Recurring elements include subjective camera work, striking colour, elaborate set pieces, music-led suspense and the unstable boundary between thriller and horror.',ruDetail:'Характерные элементы — субъективная камера, выразительный цвет, сложные постановочные сцены, музыкальное напряжение и размытая граница между триллером и хоррором.'},
    {id:'folkhorror',cat:'cinema',en:'Folk horror',ru:'Фолк-хоррор',roman:'Landscape / ritual / community',enShort:'Horror rooted in local belief, rural isolation, ritual and the pressure of a closed community.',ruShort:'Хоррор, основанный на местных верованиях, изоляции, обрядах и давлении замкнутого сообщества.',enDetail:'Landscape is not just a backdrop: it can preserve memory, conceal history and shape the rules of the story.',ruDetail:'Пейзаж здесь не просто фон: он хранит память, скрывает историю и формирует правила повествования.'},
    {id:'found-footage',cat:'form',en:'Found footage',ru:'Найденная плёнка',roman:'Diegetic recording',enShort:'A story presented through recordings that characters supposedly made or discovered.',ruShort:'История, рассказанная через записи, которые персонажи якобы сделали или нашли.',enDetail:'The form uses limited viewpoints, missing context and imperfect recording to make the viewer reconstruct events.',ruDetail:'Форма использует ограниченную точку зрения, нехватку контекста и несовершенную запись, заставляя зрителя самостоятельно восстанавливать события.'},
    {id:'uncanny',cat:'aesthetic',en:'The uncanny',ru:'Жуткое / зловещее',roman:'Das Unheimliche',enShort:'The disturbing feeling that something familiar has become subtly wrong.',ruShort:'Тревожное чувство, будто знакомая вещь или ситуация незаметно стала неправильной.',enDetail:'The uncanny often works through repetition, doubles, lifelike objects and spaces that feel almost—but not quite—normal.',ruDetail:'Жуткое часто возникает через повторение, двойников, почти живые предметы и пространства, которые выглядят нормальными лишь на первый взгляд.'},
    {id:'liminal',cat:'aesthetic',en:'Liminal space',ru:'Лиминальное пространство',roman:'Threshold / in-between',enShort:'A transitional place that feels suspended between ordinary uses or states.',ruShort:'Переходное место, словно застывшее между привычными функциями и состояниями.',enDetail:'Empty corridors, closed malls and late-night stations become unsettling when their familiar purpose is absent but traces of human presence remain.',ruDetail:'Пустые коридоры, закрытые торговые центры и ночные станции пугают, когда привычная функция исчезает, а следы человеческого присутствия остаются.'},
    {id:'cosmic',cat:'aesthetic',en:'Cosmic horror',ru:'Космический хоррор',roman:'Indifferent universe',enShort:'Horror built on human insignificance before vast, unknowable forces.',ruShort:'Хоррор о ничтожности человека перед лицом огромных и непостижимых сил.',enDetail:'The threat is not always malicious. Indifference, scale and the limits of human understanding can be more frightening than an enemy with a plan.',ruDetail:'Угроза не обязательно враждебна. Равнодушие вселенной, масштаб и пределы человеческого понимания могут пугать сильнее противника с конкретным планом.'},
    {id:'practical',cat:'technique',en:'Practical effects',ru:'Практические эффекты',roman:'On-set physical effects',enShort:'Physical make-up, props, miniatures and mechanical effects created for the camera.',ruShort:'Физический грим, реквизит, миниатюры и механические эффекты, созданные для съёмки.',enDetail:'Practical effects give performers and cameras something tangible to interact with. They can age, crack, stain and catch light in unpredictable ways.',ruDetail:'Практические эффекты дают актёрам и камере осязаемый объект взаимодействия. Они могут стареть, трескаться, пачкаться и непредсказуемо отражать свет.'},
    {id:'jump-scare',cat:'technique',en:'Jump scare',ru:'Скример',roman:'Sudden sensory shock',enShort:'A sudden image or sound designed to trigger an immediate startle response.',ruShort:'Внезапный образ или звук, рассчитанный на мгновенную реакцию испуга.',enDetail:'A jump scare is a timing device, not a complete atmosphere. It tends to work best when the scene has already established tension or uncertainty.',ruDetail:'Скример — приём тайминга, а не полноценная атмосфера. Обычно он сильнее работает, когда сцена заранее создала напряжение или неопределённость.'},
    {id:'exploitation',cat:'cinema',en:'Exploitation cinema',ru:'Эксплуатационное кино',roman:'Shock / sensation / market',enShort:'Films marketed around provocative subjects, sensational imagery or boundary-pushing material.',ruShort:'Кино, продвигаемое через провокационные темы, сенсационные образы и нарушение табу.',enDetail:'The term describes a broad industrial and stylistic history, not one single genre. Context matters: marketing, audience, censorship and distribution all shape the label.',ruDetail:'Термин описывает широкую историю индустрии и стиля, а не один жанр. Важны контекст проката, аудитория, цензура и маркетинг.'},
    {id:'grotesque',cat:'aesthetic',en:'Grotesque',ru:'Гротеск',roman:'Distortion / excess',enShort:'A mode that combines the comic, repulsive, exaggerated and strangely beautiful.',ruShort:'Приём, соединяющий комическое, отталкивающее, преувеличенное и странно прекрасное.',enDetail:'Grotesque horror unsettles categories: laughter and disgust can arrive together, while familiar proportions and social rules are distorted.',ruDetail:'Гротеск размывает привычные категории: смех и отвращение могут возникнуть одновременно, а пропорции тела и социальные нормы намеренно искажаются.'}
  ];
  const nightmares = [
    {id:'kuchisake',cat:'apparition',en:'Kuchisake-onna',ru:'Кутисакэ-онна',roman:'口裂け女 / The slit-mouthed woman',enShort:'A masked woman asks a passer-by whether they think she is beautiful.',ruShort:'Женщина в маске спрашивает прохожего, считает ли он её красивой.',enDetail:'Many retellings turn the encounter into a trap: either answer can lead to danger. Versions differ in setting, dialogue and escape rules; the story became a widely discussed modern urban legend in Japan in the late twentieth century.',ruDetail:'Во многих версиях встреча превращается в ловушку: любой ответ может привести к опасности. Меняются место, диалог и способы спасения; легенда широко обсуждалась в Японии во второй половине XX века.'},
    {id:'hanako',cat:'school',en:'Hanako-san',ru:'Ханако-сан',roman:'トイレの花子さん / The school restroom spirit',enShort:'A spirit said to answer a knock from a particular school restroom stall.',ruShort:'Дух, который, согласно легенде, отвечает на стук в дверь определённой школьной кабинки.',enDetail:'The number of the stall and the exact ritual vary. The school setting makes an ordinary, familiar place feel suddenly uncertain after hours.',ruDetail:'Номер кабинки и последовательность действий различаются. Школьная обстановка превращает знакомое место в источник тревоги после окончания занятий.'},
    {id:'tek teкe',cat:'apparition',en:'Teke Teke',ru:'Тэкэ-тэкэ',roman:'テケテケ / The crawling figure',enShort:'A figure moves with a sharp scraping or tapping sound, often close to the ground.',ruShort:'Фигура передвигается почти у земли, сопровождая движение резким скребущим звуком.',enDetail:'The legend has many retellings and origin stories. Its memorable sound pattern and sudden appearance make it especially suited to short-form oral storytelling.',ruDetail:'У легенды множество пересказов и вариантов происхождения. Запоминающийся звук и внезапное появление сделали её особенно подходящей для коротких устных историй.'},
    {id:'aka-manto',cat:'ritual',en:'Aka Manto',ru:'Ака Манто',roman:'赤マント / The red cloak',enShort:'A voice in a restroom offers a choice between coloured papers or cloaks.',ruShort:'Голос в туалете предлагает выбрать бумагу или плащ определённого цвета.',enDetail:'The choice is usually framed as a no-win question. The colours, wording and consequences vary across versions, which is part of the legend’s participatory appeal.',ruDetail:'Выбор обычно устроен как вопрос без безопасного ответа. Цвета, формулировки и последствия различаются — это часть интерактивной природы легенды.'},
    {id:'hachishaku',cat:'apparition',en:'Hachishakusama',ru:'Хатисаку-сама',roman:'八尺様 / The eight-foot-tall woman',enShort:'A towering woman is recognised by her height and a recurring, distant sound.',ruShort:'Высокая женская фигура узнаётся по необычайному росту и повторяющемуся далёкому звуку.',enDetail:'The story is strongly associated with online Japanese horror storytelling. Its tension comes from a presence that seems to follow a person across distance and time.',ruDetail:'История тесно связана с японскими интернет-повествованиями ужасов. Напряжение создаёт ощущение, что присутствие преследует человека сквозь расстояние и время.'},
    {id:'kunekune',cat:'phenomenon',en:'Kunekune',ru:'Кунэ-кунэ',roman:'くねくね / The twisting figure',enShort:'A distant white shape twists unnaturally in a field or across the water.',ruShort:'Вдали, в поле или за водой, видна белая фигура, неестественно извивающаяся.',enDetail:'The figure is often described as difficult to understand clearly. The fear comes from watching something that should not move that way—and from the warning not to look too closely.',ruDetail:'Фигуру часто описывают как нечто, что невозможно ясно рассмотреть. Страх рождается из наблюдения за неправильным движением и предупреждения не пытаться увидеть больше.'},
    {id:'kisaragi',cat:'place',en:'Kisaragi Station',ru:'Станция Кисараги',roman:'きさらぎ駅 / The station that should not exist',enShort:'A commuter posts online about a train arriving at an unfamiliar station.',ruShort:'Пассажир публикует в сети сообщения о поезде, прибывшем на незнакомую станцию.',enDetail:'The story is a landmark of internet-born Japanese urban legend. Its message-board format creates suspense through updates, gaps and the audience’s inability to intervene.',ruDetail:'Это одна из заметных японских интернет-легенд. Формат сообщений на форуме создаёт напряжение через короткие обновления, паузы и невозможность помочь рассказчику.'},
    {id:'red-room',cat:'digital',en:'The Red Room',ru:'Красная комната',roman:'赤い部屋 / The pop-up curse',enShort:'A computer user encounters a disturbing message or pop-up that seems impossible to dismiss.',ruShort:'Пользователь компьютера сталкивается с тревожным сообщением или окном, которое невозможно закрыть.',enDetail:'The legend reflects anxieties about early internet culture: anonymous messages, hidden files, chain stories and the feeling that a screen can look back.',ruDetail:'Легенда отражает тревоги ранней интернет-культуры: анонимные сообщения, скрытые файлы, цепочные истории и ощущение, что экран способен смотреть в ответ.'},
    {id:'noppera',cat:'apparition',en:'Noppera-bō',ru:'Ноппэрапō',roman:'のっぺらぼう / The faceless ghost',enShort:'A seemingly ordinary person is revealed to have a completely featureless face.',ruShort:'Обычный на вид человек внезапно оказывается существом без черт лица.',enDetail:'The faceless figure appears in older Japanese folklore as well as modern retellings. Its power lies in the collapse of recognition: a face, the basis of identity, is suddenly absent.',ruDetail:'Безликая фигура встречается в старых японских преданиях и современных пересказах. Её сила — в разрушении узнавания: лицо, основа личности, внезапно исчезает.'},
    {id:'ubume',cat:'apparition',en:'Ubume',ru:'Убумэ',roman:'産女 / The mother spirit',enShort:'A spirit associated in folklore with childbirth, maternal grief and the boundary between life and death.',ruShort:'Дух, связанный в фольклоре с родами, материнским горем и границей жизни и смерти.',enDetail:'Stories vary widely: some focus on a mother seeking help for a child, others on the tragedy of death in childbirth. The motif should be read with attention to its historical and cultural context.',ruDetail:'Истории сильно различаются: одни рассказывают о матери, ищущей помощи ребёнку, другие — о трагедии смерти при родах. Мотив важно рассматривать в историческом и культурном контексте.'}
  ];
  // Keep the display title clean while retaining a stable identifier.
  nightmares[2].id = 'teketeке';
  const copy = {
    glossary: {
      kicker:['СПРАВОЧНИК / ТОМ 01','REFERENCE DESK / VOL. 01'],
      title:['СЛОВАРЬ ХОРРОРА','HORROR GLOSSARY'],
      intro:['Двуязычный путеводитель по языку ужасов: японский фольклор, киножанры, визуальные приёмы и понятия, которыми создаётся атмосфера страха. Ищи термины, изучай определения и собирай собственную полку избранного.','A bilingual field guide to horror: Japanese folklore, cinema movements, visual techniques and the ideas used to build dread. Search the terms, explore their context and save your own reference shelf.'],
      total:['ТЕРМИНОВ','TERMS'],saved:['СОХРАНЕНО','SAVED'],search:['Поиск по словарю','Search the glossary'],placeholder:['Термин, жанр, понятие…','Term, genre, concept…'],clear:['СБРОСИТЬ','CLEAR'],favorites:['ИЗБРАННОЕ','FAVOURITES'],all:['ВСЕ ТЕРМИНЫ','ALL TERMS'],count:['ПОКАЗАНО','SHOWING'],of:['ИЗ','OF'],empty:['Ничего не найдено. Попробуй изменить запрос или категорию.','No entries found. Try a different search or category.'],hint:['Нажми «Сохранить», чтобы собрать личный справочник.','Save entries to build your personal reference shelf.'],noteLabel:['РЕДАКЦИОННАЯ ЗАМЕТКА','EDITORIAL NOTE'],note:['Это рабочий справочник, а не закрытая классификация. Значения терминов могут меняться в зависимости от эпохи, страны, автора и контекста. Особенно важно различать фольклорный источник, поздний пересказ и кинематографический образ.','This is a working reference, not a fixed taxonomy. Meanings shift across periods, regions, creators and contexts. Distinguish folklore sources, later retellings and cinematic imagery.'],
      categories:{folklore:['ФОЛЬКЛОР','FOLKLORE'],cinema:['КИНО И ЖАНРЫ','CINEMA & GENRES'],form:['ФОРМЫ ПОВЕСТВОВАНИЯ','NARRATIVE FORMS'],aesthetic:['ЭСТЕТИКА','AESTHETICS'],technique:['ПРИЁМЫ','TECHNIQUES']}
    },
    nightmares: {
      kicker:['ГОРОДСКИЕ ЛЕГЕНДЫ / ДОСЬЕ','URBAN LEGENDS / CASE FILES'],
      title:['АРХИВ КОШМАРОВ','THE NIGHTMARE ARCHIVE'],
      intro:['Досье о японских городских легендах, призрачных встречах и историях, которые переходят из устных рассказов в интернет и кино. У каждой истории есть варианты: здесь фиксируются мотивы и известные формы пересказа, а не единая «каноническая» версия.','Case files on Japanese urban legends, apparitions and stories that travel from oral retellings to the internet and cinema. Each legend has variants: this archive records recurring motifs, not one definitive canon.'],
      total:['ДОСЬЕ','CASE FILES'],saved:['СОХРАНЕНО','SAVED'],search:['Поиск по архиву','Search the archive'],placeholder:['Имя, место, мотив…','Name, place, motif…'],clear:['СБРОСИТЬ','CLEAR'],favorites:['ИЗБРАННОЕ','FAVOURITES'],all:['ВСЕ ДОСЬЕ','ALL CASES'],count:['ПОКАЗАНО','SHOWING'],of:['ИЗ','OF'],empty:['Совпадений нет. Попробуй другое имя или мотив.','No matches. Try another name or motif.'],hint:['Сохраняй досье, чтобы вернуться к ним позже.','Save case files to revisit them later.'],noteLabel:['ПРОТОКОЛ АРХИВА','ARCHIVE PROTOCOL'],note:['Городские легенды живут в вариантах. Детали меняются от пересказчика к пересказчику; некоторые истории получили широкое распространение уже в эпоху форумов и социальных сетей. Архив рассматривает их как фольклорные сюжеты, а не как подтверждённые происшествия.','Urban legends live through variation. Details shift between tellers, and some stories spread widely through forums and social media. These files treat them as folklore narratives, not verified incidents.'],
      categories:{apparition:['ПРИЗРАКИ','APPARITIONS'],school:['ШКОЛЬНЫЕ ЛЕГЕНДЫ','SCHOOL LEGENDS'],ritual:['РИТУАЛЫ','RITUALS'],phenomenon:['НЕОБЪЯСНИМОЕ','UNCANNY PHENOMENA'],place:['СТРАННЫЕ МЕСТА','UNCANNY PLACES'],digital:['ЦИФРОВЫЕ ЛЕГЕНДЫ','DIGITAL LEGENDS']}
    }
  };
  const data = kind === 'nightmares' ? nightmares : glossary;
  const ui = copy[kind === 'nightmares' ? 'nightmares' : 'glossary'];
  const root = document.documentElement;
  const search = document.getElementById('ref-search');
  const entries = document.getElementById('ref-entries');
  const filters = document.getElementById('ref-filters');
  const empty = document.getElementById('ref-empty');
  const count = document.getElementById('ref-count');
  const savedCount = document.getElementById('ref-saved');
  const favButton = document.getElementById('ref-favorites');
  const storageKey = 'ha-reference-' + kind + '-saved-v1';
  let language = 'ru';
  let activeCategory = 'all';
  let onlySaved = false;
  let saved = new Set();
  try { saved = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')); } catch (_) {}
  const t = pair => pair[language === 'ru' ? 0 : 1];
  const label = key => ui.categories[key] ? t(ui.categories[key]) : key;
  const setText = (id,value) => { const el=document.getElementById(id); if(el) el.textContent=value; };
  const setLanguage = next => {
    language = next;
    root.lang = next;
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.language===next)));
    setText('ref-kicker',t(ui.kicker));
    const title = document.getElementById('ref-title');
    if(title) title.innerHTML = kind === 'nightmares' ? (next==='ru'?'АРХИВ <span>КОШМАРОВ</span>':'THE <span>NIGHTMARE</span> ARCHIVE') : (next==='ru'?'СЛОВАРЬ <span>ХОРРОРА</span>':'HORROR <span>GLOSSARY</span>');
    setText('ref-intro',t(ui.intro));
    setText('ref-total-label',t(ui.total));
    setText('ref-saved-label',t(ui.saved));
    setText('ref-search-label',t(ui.search));
    search.placeholder=t(ui.placeholder);
    setText('ref-clear',t(ui.clear));
    favButton.textContent=t(ui.favorites);
    setText('ref-hint',t(ui.hint));
    setText('ref-empty',t(ui.empty));
    setText('ref-note-label',t(ui.noteLabel));
    setText('ref-note',t(ui.note));
    renderFilters();
    render();
  };
  function renderFilters(){
    filters.replaceChildren();
    const all=document.createElement('button');
    all.type='button';all.className='ha-ref-filter';all.textContent=t(ui.all);all.setAttribute('aria-pressed',String(activeCategory==='all'));
    all.addEventListener('click',()=>{activeCategory='all';renderFilters();render()});
    filters.appendChild(all);
    Object.keys(ui.categories).forEach(key=>{
      const button=document.createElement('button');button.type='button';button.className='ha-ref-filter';button.textContent=label(key);button.setAttribute('aria-pressed',String(activeCategory===key));
      button.addEventListener('click',()=>{activeCategory=key;renderFilters();render()});
      filters.appendChild(button);
    });
  }
  function save(){
    try{localStorage.setItem(storageKey,JSON.stringify([...saved]))}catch(_){}
  }
  function render(){
    const query=search.value.trim().toLocaleLowerCase(language==='ru'?'ru':'en');
    const visible=data.filter(item=>{
      const haystack=[item.en,item.ru,item.roman,item.enShort,item.ruShort,item.enDetail,item.ruDetail,item.id].join(' ').toLocaleLowerCase();
      return (activeCategory==='all'||item.cat===activeCategory)&&(!onlySaved||saved.has(item.id))&&(!query||haystack.includes(query));
    });
    entries.replaceChildren();
    visible.forEach(item=>{
      const card=document.createElement('article');card.className='ha-ref-card';
      const top=document.createElement('div');top.className='ha-ref-card-top';
      const tag=document.createElement('span');tag.className='ha-ref-tag';tag.textContent=label(item.cat);
      const saveButton=document.createElement('button');saveButton.type='button';saveButton.className='ha-ref-save';saveButton.setAttribute('aria-pressed',String(saved.has(item.id)));
      const updateSaveLabel=()=>{const active=saved.has(item.id);saveButton.textContent=active?(language==='ru'?'СОХРАНЕНО':'SAVED'):(language==='ru'?'＋ СОХРАНИТЬ':'＋ SAVE');saveButton.setAttribute('aria-label',(active?(language==='ru'?'Удалить из избранного: ':'Remove from favourites: '):(language==='ru'?'Добавить в избранное: ':'Add to favourites: '))+(language==='ru'?item.ru:item.en));};
      updateSaveLabel();
      saveButton.addEventListener('click',()=>{if(saved.has(item.id))saved.delete(item.id);else saved.add(item.id);save();updateSaveLabel();savedCount.textContent=String(saved.size);if(onlySaved)render();});
      top.append(tag,saveButton);
      const title=document.createElement('h2');title.textContent=language==='ru'?item.ru:item.en;
      const sub=document.createElement('span');sub.textContent=language==='ru'?item.en:item.ru;title.appendChild(sub);
      const roman=document.createElement('p');roman.className='ha-ref-detail';roman.textContent=item.roman;
      const summary=document.createElement('p');summary.textContent=language==='ru'?item.ruShort:item.enShort;
      const detail=document.createElement('p');detail.className='ha-ref-detail';detail.textContent=language==='ru'?item.ruDetail:item.enDetail;
      card.append(top,title,roman,summary,detail);entries.appendChild(card);
    });
    count.textContent=t(ui.count)+' '+visible.length+' '+t(ui.of)+' '+data.length;
    savedCount.textContent=String(saved.size);
    empty.hidden=visible.length!==0;
    entries.hidden=visible.length===0;
    favButton.setAttribute('aria-pressed',String(onlySaved));
  }
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
  search.addEventListener('input',render);
  document.getElementById('ref-clear').addEventListener('click',()=>{search.value='';activeCategory='all';onlySaved=false;renderFilters();render();search.focus()});
  favButton.addEventListener('click',()=>{onlySaved=!onlySaved;render()});
  const preferred=(()=>{try{return localStorage.getItem('ha-reference-language-v1')}catch(_){return null}})();
  if(preferred==='ru'||preferred==='en')language=preferred;
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>{try{localStorage.setItem('ha-reference-language-v1',button.dataset.language)}catch(_){}}));
  setLanguage(language);
})();