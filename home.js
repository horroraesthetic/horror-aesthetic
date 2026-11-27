
var IMG={"banner":"img/banner.webp","logo":"img/logo.webp","logo_cathedral":"img/logo_cathedral.webp","logo_goat":"img/logo_goat.webp","zombie":"img/zombie.webp","schoolgirl":"img/schoolgirl.webp","cyber":"img/cyber.webp","monster":"img/monster.webp","poster":"img/poster.webp","welcome":"img/welcome.webp","jp":"img/jp.webp","circus":"img/circus.webp","vintage":"img/vintage.webp","comic":"img/comic.webp","statue":"img/statue.webp","slashers":"img/slashers.webp","collage":"img/collage.webp","circle1":"img/circle1.webp","skull":"img/skull.webp","gothic":"img/gothic.webp","room":"img/room.webp","chars":"img/chars.webp","collage2":"img/collage2.webp","pano1":"img/pano1.webp","eye":"img/eye.webp","pano2":"img/pano2.webp","poster17":"img/poster17.webp","n_wide1":"img/n_wide1.webp","n_trio":"img/n_trio.webp","n_shattered":"img/n_shattered.webp","n_circlew":"img/n_circlew.webp","n_crown":"img/n_crown.webp","n_castle":"img/n_castle.webp","n_window":"img/n_window.webp","n_wide2":"img/n_wide2.webp","n_alien":"img/n_alien.webp","n_hb1":"img/n_hb1.webp","n_jason":"img/n_jason.webp","jh1":"img/jh1.webp","jh2":"img/jh2.webp","jh3":"img/jh3.webp","jh4":"img/jh4.webp","jh5":"img/jh5.webp","jh6":"img/jh6.webp","jh7":"img/jh7.webp","jh8":"img/jh8.webp","jh9":"img/jh9.webp","jh10":"img/jh10.webp","jh11":"img/jh11.webp","jh12":"img/jh12.webp","jh13":"img/jh13.webp","jh14":"img/jh14.webp","jh15":"img/jh15.webp","jh16":"img/jh16.webp","jh17":"img/jh17.webp","jh18":"img/jh18.webp","jh19":"img/jh19.webp","jh20":"img/jh20.webp","scream":"img/scream.webp","w_hand":"img/w_hand.webp","w_torii":"img/w_torii.webp","w_skull":"img/w_skull.webp","w_raven":"img/w_raven.webp","w_back":"img/w_back.webp","s_cinema_ru":"img/s_cinema_ru.webp","s_cinema":"img/s_cinema.webp","s_library":"img/s_library.webp","s_welcome":"img/s_welcome.webp","s_archives":"img/s_archives.webp","s_reviews":"img/s_reviews.webp","s_dark":"img/s_dark.webp","w_sadako":"img/w_sadako.webp","s_main":"img/s_main.webp","s_gen1":"img/s_gen1.webp","s_gen2":"img/s_gen2.webp","s_gen3":"img/s_gen3.webp","logo_ha":"img/logo_ha.webp","cv_psych":"img/cv_psych.webp","cv_wide3":"img/cv_wide3.webp","hero_blood":"img/hero_blood.webp","hero_red2":"img/hero_red2.webp","hero_kaidan":"img/hero_kaidan.webp","hero_ringu":"img/hero_ringu.webp","hero_omc":"img/hero_omc.webp","hero_juon":"img/hero_juon.webp","hero_juon2":"img/hero_juon2.webp","hero_tomie":"img/hero_tomie.webp","hero_tomie2":"img/hero_tomie2.webp","hero_tomie3":"img/hero_tomie3.webp","p_red_house":"img/p_red_house.webp","p_shrine":"img/p_shrine.webp","p_call_sq":"img/p_call_sq.webp","p_juon_sq":"img/p_juon_sq.webp","p_tomie_sq":"img/p_tomie_sq.webp","p_tomie_sq2":"img/p_tomie_sq2.webp","p_red_wide":"img/p_red_wide.webp","p_call2":"img/p_call2.webp","p_call1":"img/p_call1.webp","p_juon_wide":"img/p_juon_wide.webp","p_tomie_collage":"img/p_tomie_collage.webp","p_tomie_wide":"img/p_tomie_wide.webp","b_red":"img/b_red.webp","b_shrine_ru":"img/b_shrine_ru.webp","b_fox":"img/b_fox.webp","b_call":"img/b_call.webp","b_juon":"img/b_juon.webp","b_tomie_spiral":"img/b_tomie_spiral.webp","b_tomie":"img/b_tomie.webp","hero_vamp":"img/hero_vamp.webp","v_sq":"img/v_sq.webp","v_wide":"img/v_wide.webp","hero_urban":"img/hero_urban.webp","u_sq":"img/u_sq.webp","u_wide":"img/u_wide.webp","hero_scis":"img/hero_scis.webp","s_sq":"img/s_sq.webp","s_wide":"img/s_wide.webp","hero_thea":"img/hero_thea.webp","t_sq":"img/t_sq.webp","t_wide":"img/t_wide.webp","hero_kairo":"img/hero_kairo.webp","k_sq":"img/k_sq.webp","k_wide":"img/k_wide.webp","hero_onmy":"img/hero_onmy.webp","o_sq":"img/o_sq.webp","o_wide":"img/o_wide.webp","x_tetsuo":"img/x_tetsuo.webp","trailer_poster":"img/trailer_poster.webp","tt_wide":"img/tt_wide.webp","hero_tets":"img/hero_tets.webp","hero_dream":"img/hero_dream.webp","d_wide":"img/d_wide.webp","d_sq":"img/d_sq.webp","kd_sq":"img/kd_sq.webp","hero_kai2":"img/hero_kai2.webp","kd_wide":"img/kd_wide.webp"};
var LANG="en";
function a(ru,en){return {ru:ru,en:en}}
function T(x){return x[LANG]}

var UI={sec_wiki:a("Энциклопедия","Encyclopedia"),h_wiki:a("Энциклопедия J-Horror","J-Horror Encyclopedia"),s_wiki:a("юрэй, кайдан, онрё, ёкай, легенды, кино","yūrei, kaidan, onryō, yōkai, legends, cinema"),
 warn:a("Психологический ужас. Смотрите в темноте и в одиночку, если не боитесь","Psychological horror. Best watched alone, in the dark"),
 upd:a("Обновлено 16.11.2026","Updated 16.11.2026"),
 mast_p:a("Ужас всех поджанров: новинки, рецензии, подборки и всё, что страшно смотреть в одиночку.","Horror in every subgenre: new releases, reviews, shelves and everything that is too scary to watch alone."),
 h_about:a("Добро пожаловать","Welcome"),
 h_spot:a("Миры ужаса: главные франшизы и поджанры","Worlds of horror: key franchises and subgenres"),
 s_spot:a("Выберите мир, чтобы отфильтровать рецензии, или нажмите на карточку, чтобы почувствовать его.","Pick a world to filter the reviews, or press a tile to feel it."),
 sp_f:a("Рецензии","Show reviews"),sp_off:a("Сбросить франшизу","Clear franchise"),
 about_h:a("Больше ужаса. Больше атмосферы. Больше кошмаров.","More horror. More atmosphere. More nightmares."),
 about_p1:a("Horror Aesthetic — личный журнал о кино, которое не боится показать лишнее: сплаттерпанк, боди-хоррор, слэшеры, джалло, японский трэш, экстрим и эксплуатация.","Horror Aesthetic is a personal magazine about cinema that is not afraid to show too much: splatterpunk, body horror, slashers, giallo, Japanese trash, extreme and exploitation."),
 about_p2:a("Здесь рецензии, новинки, списки и подборки на один вечер. Всё собрано вручную, от оценок до оформления.","Here you will find reviews, new releases, lists and shelves for one night. Everything is assembled by hand, from the ratings to the artwork."),
 about_p3:a("Это независимое некоммерческое издание одного автора. Мы не связаны со студиями и прокатчиками, не продаём фильмы и не размещаем пиратские копии: только мнения, списки и рекомендации. Сайт ведётся на русском и английском, а профиль на Letterboxd остаётся главным архивом оценок.","This is an independent, non-commercial, single-author publication. We are not affiliated with studios or distributors, we do not sell films and we do not host pirated copies: only opinions, lists and recommendations. The site runs in English and Russian, and the Letterboxd profile remains the main archive of ratings."),
 offer_h:a("Что у нас есть","What you will find here"),
 about_fine:a("Сайт для взрослых. Многие фильмы содержат жестокость, кровь и шокирующие сцены, поэтому у нас 18+ и предупреждения рядом с самыми тяжёлыми работами.","An adults-only site. Many of the films contain cruelty, blood and shocking scenes, so everything here is 18+ and the heaviest titles carry warnings."),
 p_fg_h:a("Последняя девушка","Final girl"),p_fg_c:a("мини-квест: выживите в ночную смену","a mini-quest: survive the night shift"),p_fg_again:a("Начать заново","Start again"),
 p_dk_h:a("Тёмная комната","The dark room"),p_dk_c:a("ведите курсором, как фонарём, и найдите пять знаков","move the cursor like a flashlight and find five signs"),p_dk_w:a("Все знаки найдены. Ваш фильм на ночь:","All signs found. Your film for the night:"),
 p_mem_h:a("Видео-память","Video memory"),p_mem_c:a("найдите пары: фильм и его режиссёр","find the pairs: a film and its director"),p_mem_m:a("Ходов","Moves"),p_mem_w:a("Победа","You win"),
 p_h_h:a("Виселица","Hangman"),p_h_c:a("угадайте название фильма по буквам","guess the film title letter by letter"),p_h_win:a("Угадали!","Got it!"),p_h_lose:a("Не вышло. Вот ответ.","No luck. Here is the answer."),
 p_hl_h:a("Больше или меньше","Higher or lower"),p_hl_c:a("у какого фильма жести больше","which film has more gore"),p_hl_q:a("Жести у следующего фильма…","The next film's gore is…"),p_hl_hi:a("Больше","Higher"),p_hl_lo:a("Меньше","Lower"),p_ok:a("Верно","Correct"),p_no:a("Мимо","Wrong"),p_hl_s:a("Серия","Streak"),p_hl_b:a("Рекорд","Best"),
 p_yr_h:a("Угадай год","Guess the year"),p_yr_c:a("по описанию определите год выхода","guess the release year from the description"),p_yr_go:a("Ответить","Answer"),p_yr_t:a("Год выхода","Release year"),
 tn_kaidan:a("🎞 Тон: Кайдан","🎞 Tone: Kaidan"),tn_psy:a("🎞 Тон: Психологический","🎞 Tone: Psychological"),tn_blue:a("🎞 Тон: Синий","🎞 Tone: Blue"),tn_green:a("🎞 Тон: Зелёный","🎞 Tone: Green"),tn_ringu:a("🎞 Тон: Звонок","🎞 Tone: Ringu"),tn_tomie:a("🎞 Тон: Томие","🎞 Tone: Tomie"),tn_juon:a("🎞 Тон: Проклятие","🎞 Tone: Ju-On"),tn_blood:a("🎞 Тон: Кровь","🎞 Tone: Blood"),tn_clean:a("🎞 Тон: Ясный","🎞 Tone: Clear"),tn_techno:a("🎞 Тон: Техно","🎞 Tone: Techno"),tp_btn:a("📼 Кассета","📼 The tape"),tp_warn:a("Внимание: мигающие кадры. Если вам это вредно, не запускайте.","Warning: flashing images. If that can harm you, do not start."),tp_go:a("Включить","Play"),tp_close:a("Закрыть","Close"),tp_end:a("Семь дней.","Seven days."),sec_badges:a("Значки","Badges"),h_badges:a("Значки и серия","Badges and streak"),s_badges:a("заходи каждый день и открывай награды","come back daily and unlock rewards"),fl_on:a("🔦 Свет: выкл","🔦 Lights: off"),fl_off:a("🔦 Фонарик","🔦 Flashlight"),band1:a("Больше ужаса","More horror"),band2:a("Больше кошмаров","More nightmares"),band3:a("Больше атмосферы","More atmosphere"),band4:a("Сотни фильмов в одном месте","Hundreds of films in one place"),
 g_all:a("Всё","All"),g_poster:a("Постеры","Posters"),g_logo:a("Логотипы","Logos"),g_banner:a("Баннеры","Banners"),g_art:a("Арт","Art"),
 h_dirs:a("Режиссёры","Directors"),s_dirs:a("мастера жанра и их главные фильмы","genre masters and their key films"),sec_dirs:a("Режиссёры","Directors"),
 h_play:a("Игровая","Playground"),s_play:a("случайные кошмары и мини-игры","random nightmares and mini-games"),sec_play:a("Игры","Play"),
 p_spin_h:a("Рулетка кошмаров","Nightmare roulette"),p_spin_c:a("выберите жанр и десятилетие, остальное решит судьба","pick a genre and a decade, fate decides the rest"),p_any_g:a("Любой жанр","Any genre"),p_any_d:a("Любое десятилетие","Any decade"),p_spin:a("Крутить","Spin"),p_dbl:a("Двойной сеанс","Double feature"),p_none:a("Под такие условия ничего не нашлось.","Nothing matches these conditions."),p_ready:a("Нажмите «Крутить».","Press “Spin”."),
 p_pitch_h:a("Генератор фильма","Film generator"),p_pitch_c:a("придумайте несуществующий хоррор","invent a horror film that does not exist"),p_pitch_b:a("Придумать","Generate"),
 p_or_h:a("Оракул мёртвых","Oracle of the dead"),p_or_c:a("задайте вопрос про вечер","ask a question about tonight"),p_or_b:a("Спросить","Ask"),p_or_ph:a("Смотреть ли мне это?","Should I watch this?"),
 p_gl_h:a("Градус жести","Gore dial"),p_gl_c:a("выставьте жесть от 1 до 5","set the gore from 1 to 5"),p_gl_b:a("Подобрать","Pick one"),
 p_gs_h:a("Угадай фильм","Guess the film"),p_gs_c:a("по описанию из рецензий","from a description in the reviews"),p_gs_s:a("Счёт","Score"),p_gs_n:a("Следующий","Next"),
 h_cal:a("Календарь ужасов","Horror calendar"),s_cal:a("пятницы 13-е, фестивали и релизы","Friday the 13ths, festivals and releases"),sec_calendar:a("Календарь","Calendar"),
 cal_f:a("Ближайшие пятницы 13-е","Next Friday the 13ths"),cal_fe:a("Фестивали жанрового кино","Genre film festivals"),cal_r:a("Ожидается","Coming up"),cal_n:a("Сроки фестивалей обычно такие, сверяйте на их сайтах.","Festival timing is usually like this, check their sites."),
 h_quiz:a("Тест","Quiz"),s_quiz:a("какой вы зритель ужасов","what kind of horror viewer are you"),sec_quiz:a("Тест","Quiz"),quiz_go:a("Начать тест","Start the quiz"),quiz_again:a("Пройти заново","Take it again"),quiz_res:a("Ваш жанр","Your genre"),quiz_rec:a("Вам стоит посмотреть","You should watch"),
 my_hint:a("Нажмите на фильм: хочу посмотреть, потом посмотрел, потом сброс. Отметки хранятся только в вашем браузере.","Click a film: want to watch, then watched, then reset. Marks are stored in your browser only."),
 my_all:a("Все","All"),my_want:a("Хочу","Want"),my_seen:a("Смотрел","Seen"),
 duel_h:a("Дуэль фильмов","Film duel"),duel_c:a("выберите два фильма из рецензий и сравните","pick two reviewed films and compare"),
 sh_copy:a("Скопировать ссылку","Copy link"),sh_ok:a("Ссылка скопирована","Link copied"),sh_vk:a("Поделиться в VK","Share on VK"),snd_on:a("звук вкл","sound on"),snd_off:a("звук выкл","sound off"),
 h_lib:a("Библиотека","Library"),s_lib:a("короткие статьи о жанре","short pieces on the genre"),sec_library:a("Библиотека","Library"),lib_read:a("Читать статью","Read the article"),
 h_sub:a("Субжанры","Subgenres"),s_sub:a("от фолк-хоррора до космического ужаса","from folk horror to cosmic dread"),sec_subs:a("Субжанры","Subgenres"),
 h_cat:a("Каталог","Catalogue"),sec_catalog:a("Каталог","Catalogue"),cat_ph:a("Найти фильм или год","Find a film or year"),cat_all:a("Все","All"),
 tn_h:a("Фильм этой ночи","Film of the night"),tn_b:a("Другой фильм","Another film"),fc_h:a("Знаете ли вы","Did you know"),next:a("Ещё факт","Another fact"),fresh_h:a("Свежая кровь","Fresh blood"),
 h_start:a("Новичкам","Start here"),s_start:a("с чего начать в сплаттере, боди-хорроре и слэшерах","where to begin with splatter, body horror and slashers"),
 sec_start:a("Новичкам","Start"),dzen:a("Дзен","Dzen"),rnd_btn:a("Случайный кошмар","Random nightmare"),
 lvl:a("Жесть по порядку","Gore, step by step"),rnd_in:a("Встречается в","Found in"),rnd_none:a("Нажмите кнопку, и сайт выберет вам фильм на вечер.","Press the button and the site will pick tonight's film."),
 lb_btn:a("Мой Letterboxd","My Letterboxd"),go_rev:a("К рецензиям","To the reviews"),
 h_lead:a("Главные рецензии","Lead reviews"),s_lead:a("выбор редакции","editor's pick"),
 file_h:a("Досье","File"),f_rate:a("Оценка","Rating"),mv5:a("Алый леденец","Blood lollipop"),mv4:a("Красный леденец","Red lollipop"),mv3:a("Бледный леденец","Pale lollipop"),mv2:a("Надкусанный леденец","Bitten lollipop"),ms5:a("Шедевр","Masterpiece"),ms4:a("Сильный фильм","Strong film"),ms3:a("Средне","Mixed"),ms2:a("Провал","A dud"),f_gore:a("Жесть","Gore"),f_year:a("Год","Year"),f_dir:a("Режиссёр","Director"),f_fx:a("Эффекты","Effects"),f_genres:a("Жанры","Genres"),
 lead_dir:a("Дэвид Кроненберг","David Cronenberg"),lead_fx:a("Крис Уоллес","Chris Walas"),lead_gn:a("боди-хоррор, гор","body horror, gore"),
 h_art:a("Статья","Feature"),s_art:a("J-Horror · лонгрид","J-Horror · long read"),art_read:a("Чтение ~6 минут","~6 min read"),
 art_k:a("J-Horror · Трэш · 2000-е","J-Horror · Trash · the 2000s"),
 watch_h:a("Что смотреть","What to watch"),watch_w:a("Содержат сцены жестокого насилия. 18+","Contain scenes of brutal violence. 18+"),
 h_rel:a("Новинки","New releases"),
 src:a('Даты и описания по подборке <a href="https://www.dreadcentral.com/lists/576569/dread-centrals-top-10-horror-movies-still-to-come-in-2026/" target="_blank" rel="noopener">Dread Central</a>. Даты прокатов в вашей стране могут отличаться','Dates and descriptions from the <a href="https://www.dreadcentral.com/lists/576569/dread-centrals-top-10-horror-movies-still-to-come-in-2026/" target="_blank" rel="noopener">Dread Central</a> list. Release dates in your country may differ'),
 h_news:a("Новости","News"),s_news:a("заметки редакции","editorial notes"),
 h_gen:a("Десять жанров","Ten genres"),s_gen:a("выберите, чтобы отфильтровать рецензии","pick one to filter the reviews"),
 h_rev:a("Рецензии","Reviews"),ph:a("Поиск по названию","Search by title"),clear:a("Сбросить жанр","Reset genre"),
 empty:a("Ничего не найдено. Попробуйте другое слово или сбросьте жанр.","Nothing found. Try another word or reset the genre."),
 read:a("Читать рецензию","Read review"),
 h_stats:a("Карта крови","Blood map"),s_stats:a("данные сайта в цифрах","the site in numbers"),
 k_films:a("Фильмов в каталоге","Films in the catalogue"),k_rev:a("Рецензий","Reviews"),k_lists:a("Списков и подборок","Lists and shelves"),k_gore:a("Средняя жесть, из 5","Average gore, out of 5"),
 c1_h:a("Жанры в рецензиях","Genres in the reviews"),c1_c:a("нажмите на жанр, чтобы открыть рецензии","tap a genre to open its reviews"),
 c2_h:a("Жесть против оценки","Gore versus rating"),c2_c:a("каждая точка это рецензия, нажмите для подписи","each dot is a review, tap for its name"),
 c3_h:a("Каталог по десятилетиям","Catalogue by decade"),c3_c:a("сколько фильмов из списков и рецензий вышло в каждом десятилетии","how many films from the lists and reviews came out in each decade"),
 ax_x:a("жесть →","gore →"),ax_y:a("оценка ↑","rating ↑"),q_tl:a("тихий шедевр","quiet masterpiece"),q_tr:a("кровавый шедевр","bloody masterpiece"),pick0:a("Выберите точку на графике","Pick a dot on the chart"),
 decade:a(function(y){return y+"-е"},function(y){return y+"s"}),
 h_lists:a("Лучшее","The best"),s_lists:a("списки и рейтинги","lists and rankings"),
 n_films:a(["фильм","фильма","фильмов"],["film","films","films"]),
 h_shelves:a("Подборки","Shelves"),s_shelves:a("на один вечер","for one night"),
 h_art_g:a("Арт","Artwork"),s_art_g:a("обложки и постеры Horror Aesthetic","covers and posters by Horror Aesthetic"),close:a("Закрыть","Close"),
 foot1:a("Horror Aesthetic · горит красная лампа","Horror Aesthetic · the red lamp is on"),
 foot2:a("Рецензии и оценки отражают мнение авторов проекта","Reviews and ratings express the opinions of the project's authors"),
 foot3:a("Оформление и арт: Horror Aesthetic","Design and artwork: Horror Aesthetic"),
 sec_themes:a("Темы","Themes"),h_themes:a("Разделы по темам","Browse by theme"),s_themes:a("24 темы и названия фильмов в них","24 themes and the film titles in them"),
 th_hint:a("Названия фильмов, собранные по темам: оборотни, вампиры, джалло, трэш и другие. Это путеводитель по названиям без оценок и описаний, он не претендует на полноту. Отметка «в каталоге» значит, что фильм уже есть у нас, звёздочка ведёт на рецензию.","Film titles gathered by theme: werewolves, vampires, giallo, trash and more. It is a guide to titles, with no ratings or descriptions, and it makes no claim to be complete. “In catalogue” means the film is already on our site; the star links to its review."),
 th_ph:a("Найти фильм в этой теме","Find a film in this theme"),th_back:a("Все темы","All themes"),th_cat:a("в каталоге","in catalogue"),th_rev:a("рецензия","review"),th_empty:a("Ничего не найдено","Nothing found"),
 sec_trailer:a("Трейлер","Trailer"),h_trailer:a("Трейлер","Trailer"),s_trailer:a("двадцать секунд из коридора","twenty seconds from the corridor"),c_intro:a("Заставка канала: улица, стекло, коридор. Тоже лучше со звуком.","Channel intro: the street, the glass, the corridor. Best with sound."),c_trailer:a("Со звуком. Лучше смотреть ночью и в наушниках.","With sound. Best watched at night with headphones."),sec_mylist:a("Моё","My list"),sec_home:a("Главная","Home"),sec_all:a("Всё","All"),sec_spot:a("Франшизы","Franchises"),sec_about:a("О нас","About"),sec_articles:a("Статья","Feature"),sec_releases:a("Новинки","New"),sec_manga:a("Манга и аниме","Manga & anime"),sec_news:a("Новости","News"),sec_genres:a("Жанры","Genres"),sec_reviews:a("Рецензии","Reviews"),sec_stats:a("Данные","Data"),sec_lists:a("Лучшее","Best"),sec_shelves:a("Подборки","Shelves"),sec_art:a("Арт","Art")
};
var PL={ru:["рецензия","рецензии","рецензий"],en:["review","reviews","reviews"]};

var GENRES=[
 ["splatterpunk",a("Сплаттерпанк","Splatterpunk"),a("Кровь как манифест: гротеск, перебор и чёрный юмор.","Blood as manifesto: grotesque, excess and black humour.")],
 ["body",a("Боди-хоррор","Body horror"),a("Тело как источник ужаса: болезнь, мутация, слияние с машиной.","The body as a source of terror: disease, mutation, merging with the machine.")],
 ["slasher",a("Слэшер","Slasher"),a("Маска, нож, компания жертв и «последняя девушка».","Mask, knife, a group of victims and the “final girl”.")],
 ["giallo",a("Джалло","Giallo"),a("Итальянский триллер: чёрные перчатки, цветной свет, убийца-загадка.","Italian thriller: black gloves, coloured light, a riddle of a killer.")],
 ["jhorror",a("J-Horror","J-Horror"),a("Японский ужас: от призраков из колодцев до гейзеров крови.","Japanese horror: from ghosts in wells to geysers of blood.")],
 ["extreme",a("Экстрим","Extreme"),a("Кино без смягчения. Для подготовленного зрителя.","Cinema without softening. For the prepared viewer.")],
 ["gore",a("Гор","Gore"),a("Акцент на ранах и практических эффектах.","Focus on wounds and practical effects.")],
 ["shock",a("Шок","Shock"),a("Скандал, нарушенные табу и репутация «запрещённого».","Scandal, broken taboos and a “banned” reputation.")],
 ["trash",a("Трэш","Trash"),a("Дёшево, нелепо и от этого любимо.","Cheap, absurd and loved for it.")],
 ["exploit",a("Эксплуатация","Exploitation"),a("Грайндхаус и видеопрокат: продаём то, что запрещено.","Grindhouse and the video store: selling what is forbidden.")],
 ["supernatural",a("Сверхъестественное","Supernatural"),a("Призраки, одержимость и дома, которые помнят.","Ghosts, possession and houses that remember.")],
 ["vampire",a("Вампиры","Vampires"),a("Бессмертные хищники: от аристократов до уличных стай.","Immortal predators: from aristocrats to street packs.")],
 ["creature",a("Монстры","Creature feature"),a("Чудовища, пауки и всё, что вылезает из тьмы.","Monsters, spiders and whatever crawls out of the dark.")],
 ["comedy",a("Хоррор-комедия","Horror comedy"),a("Смех в темноте: страшно ровно настолько, чтобы было весело.","Laughter in the dark: scary just enough to be fun.")],
 ["thriller",a("Триллер","Thriller"),a("Напряжение без монстров: подозрение, ловушка, доверие.","Tension without monsters: suspicion, trap, trust.")],
 ["foundfootage",a("Найденная плёнка","Found footage"),a("Снято на камеру, которую кто-то оставил.","Shot on a camera someone left behind.")],
 ["scifi",a("Научный ужас","Sci-fi horror"),a("Вирусы, лаборатории и технологии, вышедшие из-под контроля.","Viruses, laboratories and technology out of control.")]
];
var GN={},GI={};GENRES.forEach(function(g){GN[g[0]]=g[1]});

function ic(n,c){return '<svg class="ic'+(c?' '+c:'')+'" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-'+n+'"/></svg>'}

/* film registry: id -> {n:{ru,en}, y} */
var F={};
function d(id,ru,en,y){F[id]={n:a(ru,en),y:y}}
function e(id,t,y){F[id]={n:a(t,t),y:y}}
d("fly","Муха","The Fly",1986);d("videodrome","Видеодром","Videodrome",1983);d("thing","Вещь","The Thing",1982);
d("tetsuo","Тэцуо: Железный человек","Tetsuo: The Iron Man",1989);d("brood","Выводок","The Brood",1979);d("society","Общество","Society",1989);
d("deadringers","Связанные насмерть","Dead Ringers",1988);d("shivers","Дрожь","Shivers",1975);d("rabid","Бешенство","Rabid",1977);
d("raw","Сырое","Raw",2016);d("titane","Титан","Titane",2021);d("substance","Субстанция","The Substance",2024);d("possession","Одержимость","Possession",1981);
d("kwaidan","Кайдан","Kwaidan",1964);d("onibaba","Онибаба","Onibaba",1964);d("hausu","Дом","Hausu",1977);d("cure","Исцеление","Cure",1997);
d("ringu","Звонок","Ringu",1998);d("audition","Прослушивание","Audition",1999);d("juon","Проклятие","Ju-On: The Grudge",2002);
d("darkwater","Тёмные воды","Dark Water",2002);e("noroi","Noroi: The Curse",2005);
d("guinea2","Морская свинка 2","Guinea Pig 2: Flower of Flesh and Blood",1985);e("visitorq","Visitor Q",2001);e("ichi","Ichi the Killer",2001);
d("suicideclub","Клуб самоубийц","Suicide Club",2001);e("gozu","Gozu",2003);d("meatball","Мясной станок","Meatball Machine",2005);
d("tgp","Полиция Токио","Tokyo Gore Police",2008);d("machinegirl","Девушка-пулемёт","The Machine Girl",2008);
d("vgfg","Вампирша против Франкенштейн-девушки","Vampire Girl vs. Frankenstein Girl",2009);d("helldriver","Хеллдрайвер","Helldriver",2010);
d("blackxmas","Чёрное Рождество","Black Christmas",1974);d("tcm","Техасская резня бензопилой","The Texas Chain Saw Massacre",1974);
d("halloween","Хэллоуин","Halloween",1978);d("fri13","Пятница, 13-е","Friday the 13th",1980);d("maniac","Мэньяк","Maniac",1980);
e("mbv","My Bloody Valentine",1981);e("burning","The Burning",1981);e("sleepaway","Sleepaway Camp",1983);
d("nightmare","Кошмар на улице Вязов","A Nightmare on Elm Street",1984);d("scream","Крик","Scream",1996);
e("campmiasma","Teenage Sex and Death at Camp Miasma",2026);
d("girlknew","Девушка, которая слишком много знала","The Girl Who Knew Too Much",1963);d("bloodlace","Шесть женщин для убийцы","Blood and Black Lace",1964);
d("birdcrystal","Птица с хрустальным оперением","The Bird with the Crystal Plumage",1970);d("fourflies","Четыре мухи на сером бархате","Four Flies on Grey Velvet",1971);
d("bayblood","Кровавый залив","A Bay of Blood",1971);d("deepred","Кроваво-красное","Deep Red",1975);d("suspiria","Суспирия","Suspiria",1977);
d("tenebrae","Тенебра","Tenebrae",1982);d("opera","Опера","Opera",1987);d("strangecolor","Странный цвет слёз твоего тела","The Strange Color of Your Body's Tears",2013);
d("dawn","Рассвет мертвецов","Dawn of the Dead",1978);d("zombi2","Зомби 2","Zombi 2",1979);d("evildead","Зловещие мертвецы","The Evil Dead",1981);
d("reanimator","Реаниматор","Re-Animator",1985);d("returnliving","Возвращение живых мертвецов","The Return of the Living Dead",1985);
d("frombeyond","Из мира иного","From Beyond",1986);d("badtaste","Плохой вкус","Bad Taste",1987);d("evil2","Зловещие мертвецы 2","Evil Dead II",1987);
d("braindamage","Повреждённый мозг","Brain Damage",1988);d("braindead","Живая мертвечина","Braindead",1992);e("terrifier2","Terrifier 2",2022);
d("plan9","План 9 из открытого космоса","Plan 9 from Outer Space",1959);d("bloodfeast","Кровавый пир","Blood Feast",1963);e("pussycat","Faster, Pussycat! Kill! Kill!",1965);
d("flamingos","Розовые фламинго","Pink Flamingos",1972);d("tomatoes","Нападение помидоров-убийц","Attack of the Killer Tomatoes!",1978);
d("toxavenger","Токсичный мститель","The Toxic Avenger",1984);e("nukeem","Class of Nuke 'Em High",1986);e("streettrash","Street Trash",1987);
d("troll2","Тролль 2","Troll 2",1990);d("sharknado","Акулий торнадо","Sharknado",2013);
d("lasthouse","Последний дом слева","The Last House on the Left",1972);d("deathrace","Гонка смерти 2000 года","Death Race 2000",1975);e("switchblade","Switchblade Sisters",1975);
e("mothersday","Mother's Day",1980);d("cannibalholo","Ад каннибалов","Cannibal Holocaust",1980);d("planetterror","Планета страха","Planet Terror",2007);d("hobo","Бомж с дробовиком","Hobo with a Shotgun",2011);
d("ispit","Я плюю на ваши могилы","I Spit on Your Grave",1978);e("driller","The Driller Killer",1979);e("cannibalferox","Cannibal Ferox",1981);
d("troubleeveryday","Каждый день неприятности","Trouble Every Day",2001);d("irreversible","Необратимость","Irréversible",2002);e("inmyskin","In My Skin",2002);
d("hautetension","Высокое напряжение","High Tension",2003);d("inside","Изнутри","Inside",2007);d("frontiers","Границы","Frontier(s)",2007);d("martyrs","Мученицы","Martyrs",2008);
d("salo","Сало, или 120 дней Содома","Salò, or the 120 Days of Sodom",1975);d("antichrist","Антихрист","Antichrist",2009);d("centipede","Человеческая многоножка","The Human Centipede",2009);d("serbian","Сербский фильм","A Serbian Film",2010);
e("cityliving","City of the Living Dead",1980);d("inferno","Инферно","Inferno",1980);e("beyond","The Beyond",1981);e("housecemetery","The House by the Cemetery",1981);
d("demons","Демоны","Demons",1985);e("cemeteryman","Cemetery Man",1994);
d("hereditary","Реинкарнация","Hereditary",2018);d("midsommar","Солнцестояние","Midsommar",2019);e("x2022","X",2022);e("evilrise","Evil Dead Rise",2023);
e("barbarian","Barbarian",2022);d("nosferatu","Носферату","Nosferatu",2024);e("longlegs","Longlegs",2024);e("sinners","Sinners",2025);e("weapons","Weapons",2025);

d("hellraiser","Восставший из ада","Hellraiser",1987);d("hellbound","Восставший из ада 2","Hellbound: Hellraiser II",1988);d("candyman","Кэндимэн","Candyman",1992);
d("silenthill","Сайлент Хилл","Silent Hill",2006);d("jacobs","Лестница Иакова","Jacob's Ladder",1990);d("mouthmadness","В пасти безумия","In the Mouth of Madness",1994);e("session9","Session 9",2001);
d("scanners","Сканеры","Scanners",1981);d("existenz","Экзистенция","eXistenZ",1999);d("crash","Автокатастрофа","Crash",1996);
e("slumber","The Slumber Party Massacre",1982);e("promnight","Prom Night",1980);e("terrifier","Terrifier",2016);d("hillseyes","У холмов есть глаза","The Hills Have Eyes",1977);
d("cabinfever","Лихорадка","Cabin Fever",2002);d("saw","Пила","Saw",2004);d("hostel","Хостел","Hostel",2005);d("peeping","Подглядывающий","Peeping Tom",1960);
d("psycho","Психо","Psycho",1960);d("finaldest","Пункт назначения","Final Destination",2000);
d("wickerman","Плетёный человек","The Wicker Man",1973);e("witchfinder","Witchfinder General",1968);d("witch","Ведьма","The Witch",2015);e("killlist","Kill List",2011);e("wailing","The Wailing",2016);
d("blairwitch","Ведьма из Блэр","The Blair Witch Project",1999);d("rec","[REC]","[REC]",2007);e("paranormal","Paranormal Activity",2007);e("lakemungo","Lake Mungo",2008);e("vhs","V/H/S",2012);
d("nosferatu1922","Носферату: симфония ужаса","Nosferatu",1922);d("lostboys","Пропащие ребята","The Lost Boys",1987);d("letmein","Впусти меня","Let the Right One In",2008);d("fright","Ночь страха","Fright Night",1985);
d("dracula92","Дракула Брэма Стокера","Bram Stoker's Dracula",1992);e("martin","Martin",1977);e("neardark","Near Dark",1987);e("thehunger","The Hunger",1983);
d("howling","Вой","The Howling",1981);d("americanwerewolf","Американский оборотень в Лондоне","An American Werewolf in London",1981);d("alien","Чужой","Alien",1979);d("jaws","Челюсти","Jaws",1975);
d("gremlins","Гремлины","Gremlins",1984);e("creature","Creature from the Black Lagoon",1954);e("dogsoldiers","Dog Soldiers",2002);d("descent","Спуск","The Descent",2005);
d("exorcist","Изгоняющий дьявола","The Exorcist",1973);d("omen","Омен","The Omen",1976);d("shining","Сияние","The Shining",1980);d("poltergeist","Полтергейст","Poltergeist",1982);
e("haunting63","The Haunting",1963);e("innocents","The Innocents",1961);d("others","Другие","The Others",2001);d("conjuring","Заклятие","The Conjuring",2013);d("babadook","Бабадук","The Babadook",2014);
e("itfollows","It Follows",2014);d("rosemary","Ребёнок Розмари","Rosemary's Baby",1968);d("repulsion","Отвращение","Repulsion",1965);
e("colourspace","Color Out of Space",2019);e("dagon","Dagon",2001);e("princeofdark","Prince of Darkness",1987);e("thevoid","The Void",2016);
d("nightlive","Ночь живых мертвецов","Night of the Living Dead",1968);d("28days","28 дней спустя","28 Days Later",2002);d("shaun","Зомби по имени Шон","Shaun of the Dead",2004);
d("traintobusan","Поезд в Пусан","Train to Busan",2016);e("dayofdead","Day of the Dead",1985);e("onecut","One Cut of the Dead",2017);
e("eatenalive","Eaten Alive",1976);d("silence","Молчание ягнят","The Silence of the Lambs",1991);e("ravenous","Ravenous",1999);e("motel","Motel Hell",1980);
e("kuroneko","Kuroneko",1968);d("battleroyale","Королевская битва","Battle Royale",2000);e("uzumaki","Uzumaki",2000);e("tomie","Tomie",1998);
e("blacksunday","Black Sunday",1960);e("blacksabbath","Black Sabbath",1963);e("torso","Torso",1973);e("solange","What Have You Done to Solange?",1972);e("phenomena","Phenomena",1985);e("cat9","The Cat o' Nine Tails",1971);e("amer","Amer",2009);e("blackcat81","Black Cat",1981);
e("terrortrain","Terror Train",1980);e("hellnight","Hell Night",1981);e("hbtm","Happy Birthday to Me",1981);d("chucky","Детская игра","Child's Play",1988);e("hatchet","Hatchet",2006);e("youarenext","You're Next",2011);
e("ilsa","Ilsa, She Wolf of the SS",1975);e("facesofdeath","Faces of Death",1978);e("mondocane","Mondo Cane",1962);e("thrillkill","Thriller: A Cruel Picture",1973);e("birdemic","Birdemic: Shock and Terror",2008);e("manos","Manos: The Hands of Fate",1966);e("basketcase","Basket Case",1982);
d("henry","Генри: портрет серийного убийцы","Henry: Portrait of a Serial Killer",1986);d("eraserhead","Голова-ластик","Eraserhead",1977);e("begotten","Begotten",1989);e("nekromantik","Nekromantik",1988);e("angst","Angst",1983);d("funnygames","Забавные игры","Funny Games",1997);
d("getout","Прочь","Get Out",2017);d("us","Мы","Us",2019);e("talktome","Talk to Me",2022);e("smile","Smile",2022);e("terrifier3","Terrifier 3",2024);e("fresh","Fresh",2022);e("greenroom","Green Room",2015);e("heretic","Heretic",2024);
e("fog","The Fog",1980);d("theylive","Они живут","They Live",1988);d("deadzone","Мертвая зона","The Dead Zone",1983);e("crazies","The Crazies",1973);d("creepshow","Калейдоскоп ужасов","Creepshow",1982);
d("armydark","Армия тьмы","Army of Darkness",1992);d("dragme","Затащи меня в ад","Drag Me to Hell",2009);d("nope","Нет","Nope",2022);e("killbaby","Kill, Baby... Kill!",1966);e("peoplestairs","The People Under the Stairs",1991);
e("cat42","Cat People",1942);e("izombie","I Walked with a Zombie",1943);d("frankenstein","Франкенштейн","Frankenstein",1931);d("dracula31","Дракула","Dracula",1931);d("mummy","Мумия","The Mummy",1932);
e("invisible33","The Invisible Man",1933);e("bride","Bride of Frankenstein",1935);d("freaks","Уродцы","Freaks",1932);d("caligari","Кабинет доктора Калигари","The Cabinet of Dr. Caligari",1920);e("haxan","Häxan",1922);
e("eyeswithout","Eyes Without a Face",1960);e("carnival","Carnival of Souls",1962);d("birds","Птицы","The Birds",1963);e("villagedamned","Village of the Damned",1960);e("babyjane","What Ever Happened to Baby Jane?",1962);
d("carrie","Кэрри","Carrie",1976);e("phantasm","Phantasm",1979);e("changeling","The Changeling",1980);e("entity","The Entity",1982);e("alteredstates","Altered States",1980);
e("maniaccop","Maniac Cop",1988);e("chud","C.H.U.D.",1984);e("choppingmall","Chopping Mall",1986);e("thestuff","The Stuff",1985);e("nightcreeps","Night of the Creeps",1986);e("slither","Slither",2006);
e("newnightmare","Wes Craven's New Nightmare",1994);e("ikwydls","I Know What You Did Last Summer",1997);e("urbanlegend","Urban Legend",1998);e("gingersnaps","Ginger Snaps",2000);
d("onemissed","Один пропущенный звонок","One Missed Call",2003);e("marebito","Marebito",2004);e("exte","Exte: Hair Extensions",2007);e("coldfish","Cold Fish",2010);e("tag","Tag",2015);e("sadness","The Sadness",2021);
d("tale2sisters","История двух сестёр","A Tale of Two Sisters",2003);d("thirst","Жажда","Thirst",2009);d("isawdevil","Я видел дьявола","I Saw the Devil",2010);
e("rejects","The Devil's Rejects",2005);e("house1000","House of 1000 Corpses",2003);e("wolfcreek","Wolf Creek",2005);e("livid","Livid",2011);e("calvaire","Calvaire",2004);e("climax","Climax",2018);e("mandy","Mandy",2018);
d("lighthouse","Маяк","The Lighthouse",2019);e("suspiria18","Suspiria",2018);e("autopsy","The Autopsy of Jane Doe",2016);e("dontbreathe","Don't Breathe",2016);d("quietplace","Тихое место","A Quiet Place",2018);
e("bonetomahawk","Bone Tomahawk",2015);e("thelma","Thelma",2017);d("invisible20","Человек-невидимка","The Invisible Man",2020);e("pearl","Pearl",2022);e("maxxxine","MaXXXine",2024);e("skinamarink","Skinamarink",2022);
e("infinitypool","Infinity Pool",2023);e("latenight","Late Night with the Devil",2023);e("cuckoo","Cuckoo",2024);e("companion","Companion",2025);e("bringherback","Bring Her Back",2025);e("fdbloodlines","Final Destination Bloodlines",2025);e("28years","28 Years Later",2025);
d("petsematary","Кладбище домашних животных","Pet Sematary",1989);d("misery","Мизери","Misery",1990);d("it2017","Оно","It",2017);d("christine","Кристина","Christine",1983);d("sleepyhollow","Сонная Лощина","Sleepy Hollow",1999);d("sixthsense","Шестое чувство","The Sixth Sense",1999);d("conjuring2","Заклятие 2","The Conjuring 2",2016);d("insidious","Астрал","Insidious",2010);d("mama","Мама","Mama",2013);d("lightsout","Когда гаснет свет","Lights Out",2016);d("cabinwoods","Хижина в лесу","The Cabin in the Woods",2011);d("dontlooknow","Не оглядывайся","Don't Look Now",1973);d("blackphone","Чёрный телефон","The Black Phone",2021);d("platform","Платформа","The Platform",2019);d("thering02","Звонок (США)","The Ring",2002);d("sinister","Синистер","Sinister",2012);
e("nightofhunter","The Night of the Hunter",1955);e("thingother","The Thing from Another World",1951);e("bodysnatch56","Invasion of the Body Snatchers",1956);e("bodysnatch78","Invasion of the Body Snatchers (1978)",1978);e("ringu2","Ringu 2",1999);e("grudge","The Grudge",2004);e("exorcist3","The Exorcist III",1990);e("cujo","Cujo",1983);e("cronos","Cronos",1993);e("devilsback","The Devil's Backbone",2001);e("crimsonpeak","Crimson Peak",2015);e("frailty","Frailty",2001);e("orphan","Orphan",2009);e("geraldsgame","Gerald's Game",2017);e("hush","Hush",2016);e("relic","Relic",2020);e("saintmaud","Saint Maud",2019);e("thevigil","The Vigil",2019);e("host2020","Host",2020);e("crimesfuture","Crimes of the Future",2022);e("possessor","Possessor",2020);e("antiviral","Antiviral",2012);e("splinter","Splinter",2008);e("blob88","The Blob",1988);e("xtro","Xtro",1982);e("tusk","Tusk",2014);e("teeth","Teeth",2007);e("thehost06","The Host",2006);e("contracted","Contracted",2013);e("silentnight","Silent Night, Deadly Night",1984);e("madman","Madman",1981);e("prowler","The Prowler",1981);e("pieces","Pieces",1982);e("intruder","Intruder",1989);e("sororityrow","Sorority Row",2009);e("scream2","Scream 2",1997);e("halloween2","Halloween II",1981);e("fri13p2","Friday the 13th Part 2",1981);e("elm3","A Nightmare on Elm Street 3: Dream Warriors",1987);e("bridechucky","Bride of Chucky",1998);e("vernon","Behind the Mask: The Rise of Leslie Vernon",2006);e("finalgirls","The Final Girls",2015);e("hdd","Happy Death Day",2017);e("freaky","Freaky",2020);e("bodiesx3","Bodies Bodies Bodies",2022);e("tcm2","The Texas Chainsaw Massacre 2",1986);e("funhouse","The Funhouse",1981);e("justbefore","Just Before Dawn",1981);e("stagefright","Stage Fright: Aquarius",1987);e("duckling","Don't Torture a Duckling",1972);e("glassdolls","The Short Night of Glass Dolls",1971);e("lizard","Lizard in a Woman's Skin",1971);e("scorpion","The Case of the Scorpion's Tail",1971);e("roses","Blood and Roses",1960);e("sleepless","Sleepless",2001);e("laughwindows","The House with Laughing Windows",1976);e("mothertears","Mother of Tears",2007);e("stendhal","The Stendhal Syndrome",1996);e("eyeball","Eyeball",1975);e("stripnude","Strip Nude for Your Killer",1975);e("trauma93","Trauma",1993);e("tombsblind","Tombs of the Blind Dead",1972);e("horrorexpress","Horror Express",1972);e("whocankill","Who Can Kill a Child?",1976);e("sleepingcorpses","Let Sleeping Corpses Lie",1974);e("burialground","Burial Ground",1981);e("nightmarecity","Nightmare City",1980);e("lisadevil","Lisa and the Devil",1973);e("demons2","Demons 2",1986);e("mountaincannibal","The Mountain of the Cannibal God",1978);e("zombieholo","Zombie Holocaust",1980);e("anthropophagus","Anthropophagus",1980);e("rabiddogs","Rabid Dogs",1974);e("hatchethoney","Hatchet for the Honeymoon",1970);e("baronblood","Baron Blood",1972);e("grotesque","Grotesque",2009);e("menbehindsun","Men Behind the Sun",1988);e("guinea1","Guinea Pig: The Devil's Experiment",1985);e("augustund","August Underground",2001);e("baisemoi","Baise-moi",2000);e("sheitan","Sheitan",2006);e("housejack","The House That Jack Built",2018);e("trowar","Troma's War",1988);e("surfnazis","Surf Nazis Must Die",1987);e("rednecks","Redneck Zombies",1986);e("rubber","Rubber",2010);e("blacksheep","Black Sheep",2006);e("lepus","Night of the Lepus",1972);e("deathbed","Death Bed: The Bed That Eats",1977);e("klowns","Killer Klowns from Outer Space",1988);e("frankenhooker","Frankenhooker",1990);e("bridereanim","Bride of Re-Animator",1990);e("dolls","Dolls",1987);e("deadsnow","Dead Snow",2009);e("tuckerdale","Tucker and Dale vs Evil",2010);e("piranha78","Piranha",1978);e("piranha3d","Piranha 3D",2010);e("humanoids","Humanoids from the Deep",1980);e("zombieland","Zombieland",2009);e("slugs","Slugs",1988);e("shutter","Shutter",2004);e("threeext","Three... Extremes",2004);e("dumplings","Dumplings",2004);e("nakedblood","Naked Blood",1996);e("eviltrap","Evil Dead Trap",1988);e("infection","Infection",2004);e("lessonevil","Lesson of the Evil",2012);e("sweethome","Sweet Home",1989);e("jigoku","Jigoku",1960);e("yotsuya","The Ghost of Yotsuya",1959);e("matango","Matango",1963);e("goke","Goke, Body Snatcher from Hell",1968);e("katakuris","The Happiness of the Katakuris",2001);e("bedevilled","Bedevilled",2010);e("whisper","Whispering Corridors",1998);e("gonjiam","Gonjiam: Haunted Asylum",2018);e("alive20","#Alive",2020);e("peninsula","Peninsula",2020);e("m3gan","M3GAN",2022);e("scream6","Scream VI",2023);e("immaculate","Immaculate",2024);e("oddity","Oddity",2024);e("violentnature","In a Violent Nature",2024);e("strangedarling","Strange Darling",2023);e("whenevil","When Evil Lurks",2023);e("presence","Presence",2024);e("together","Together",2025);e("monkey","The Monkey",2025);e("wolfman25","Wolf Man",2025);e("uglysister","The Ugly Stepsister",2025);e("blackphone2","Black Phone 2",2025);e("frankenstein25","Frankenstein",2025);e("goodboy","Good Boy",2025);e("hearteyes","Heart Eyes",2025);e("apostle","Apostle",2018);e("cam","Cam",2018);e("revenge","Revenge",2017);e("hagazussa","Hagazussa",2017);e("ritual","The Ritual",2017);e("readyornot","Ready or Not",2019);e("candyman21","Candyman",2021);e("censor","Censor",2021);e("lamb","Lamb",2021);e("men22","Men",2022);e("hellraiser22","Hellraiser",2022);e("deadburied","Dead & Buried",1981);e("sentinel","The Sentinel",1977);e("burntofferings","Burnt Offerings",1976);e("messiah","Messiah of Evil",1973);e("deathdream","Deathdream",1974);e("touristtrap","Tourist Trap",1979);e("nightbreed","Nightbreed",1990);e("lordillusions","Lord of Illusions",1995);e("ghostwatch","Ghostwatch",1992);
e("diabolique","Les Diaboliques",1955);e("blackcat34","The Black Cat",1934);e("lostsouls","Island of Lost Souls",1932);e("seventhvictim","The Seventh Victim",1943);e("bodysnatcher45","The Body Snatcher",1945);e("houseonhill","House on Haunted Hill",1959);e("littleshop","The Little Shop of Horrors",1960);e("circushorrors","Circus of Horrors",1960);e("hushcharlotte","Hush... Hush, Sweet Charlotte",1964);e("satansclaw","Blood on Satan's Claw",1971);e("deathline","Death Line",1972);e("asphyx","The Asphyx",1972);e("hellhouse","The Legend of Hell House",1973);e("salemslot","Salem's Lot",1979);e("amityville","The Amityville Horror",1979);e("wolfen","Wolfen",1981);e("ghoststory","Ghost Story",1981);e("beastwithin","The Beast Within",1982);e("somethingwicked","Something Wicked This Way Comes",1983);e("companywolves","The Company of Wolves",1984);e("nightdemons","Night of the Demons",1988);e("monstersquad","The Monster Squad",1987);e("lairworm","The Lair of the White Worm",1988);e("angelheart","Angel Heart",1987);e("serpentrainbow","The Serpent and the Rainbow",1988);e("pumpkinhead","Pumpkinhead",1988);e("stepfather","The Stepfather",1987);e("dentist","The Dentist",1996);e("faculty","The Faculty",1998);e("leprechaun","Leprechaun",1993);e("wishmaster","Wishmaster",1997);e("tremors","Tremors",1990);e("stirechoes","Stir of Echoes",1999);e("whatlies","What Lies Beneath",2000);e("americanpsycho","American Psycho",2000);e("dawn2004","Dawn of the Dead",2004);e("hills2006","The Hills Have Eyes",2006);e("orphanage","The Orphanage",2007);e("trickrtreat","Trick 'r Treat",2007);e("mist","The Mist",2007);e("strangers","The Strangers",2008);e("lovedones","The Loved Ones",2009);e("lastexorcism","The Last Exorcism",2010);e("blackswan","Black Swan",2010);e("ispit2010","I Spit on Your Grave (2010)",2010);e("innkeepers","The Innkeepers",2011);e("americanmary","American Mary",2012);e("berberian","Berberian Sound Studio",2012);e("excision","Excision",2012);e("evildead2013","Evil Dead (2013)",2013);e("wearewhat","We Are What We Are",2013);e("oculus","Oculus",2013);e("theguest","The Guest",2014);e("housebound","Housebound",2014);e("starryeyes","Starry Eyes",2014);e("latephases","Late Phases",2014);e("girlwalks","A Girl Walks Home Alone at Night",2014);e("goodnightmommy","Goodnight Mommy",2014);e("invitation","The Invitation",2015);e("neondemon","The Neon Demon",2016);e("split","Split",2016);e("itcomesnight","It Comes at Night",2017);e("mother","mother!",2017);e("aghoststory","A Ghost Story",2017);e("annihilation","Annihilation",2018);e("halloween18","Halloween (2018)",2018);e("overlord","Overlord",2018);e("doctorsleep","Doctor Sleep",2019);e("thewretched","The Wretched",2019);e("beachhouse","The Beach House",2019);e("intheearth","In the Earth",2021);e("malignant","Malignant",2021);e("lastnightsoho","Last Night in Soho",2021);e("nighthouse","The Night House",2020);e("nanny","Nanny",2022);e("popeexorcist","The Pope's Exorcist",2023);e("sawx","Saw X",2023);e("thanksgiving","Thanksgiving",2023);e("birthrebirth","Birth/Rebirth",2023);e("firstomen","The First Omen",2024);e("abigail","Abigail",2024);e("speaknoevil","Speak No Evil",2022);e("speaknoevil24","Speak No Evil (2024)",2024);e("y2k","Y2K",2024);e("frontroom","The Front Room",2024);e("azrael","Azrael",2024);e("vampyr","Vampyr",1932);e("daughtersdark","Daughters of Darkness",1971);e("bloodspattered","The Blood Spattered Bride",1972);e("vampyres","Vampyres",1974);e("anguish","Anguish",1987);e("tesis","Tesis",1996);e("julia","Julia's Eyes",2010);e("blackdeath","Black Death",2010);e("edenlake","Eden Lake",2008);e("creep04","Creep",2004);e("severance","Severance",2006);e("trollhunter","Troll Hunter",2010);e("forbiddenworld","Forbidden World",1982);e("galaxyterror","Galaxy of Terror",1981);e("frogtown","Hell Comes to Frogtown",1988);e("notld90","Night of the Living Dead (1990)",1990);e("cannibalmusical","Cannibal! The Musical",1993);e("poultrygeist","Poultrygeist: Night of the Chicken Dead",2006);e("fathersday","Father's Day",2011);e("wrongturn","Wrong Turn",2003);e("coldprey","Cold Prey",2006);e("blooddiner","Blood Diner",1987);e("bloodsucking","Blood Sucking Freaks",1976);e("goregirls","The Gore Gore Girls",1972);e("twothousand","Two Thousand Maniacs!",1964);e("colorbloodred","Color Me Blood Red",1965);e("mimic","Mimic",1997);e("house86","House",1986);e("jennifers","Jennifer's Body",2009);e("n1408","1408",2007);e("ruins","The Ruins",2008);e("pontypool","Pontypool",2008);e("absentia","Absentia",2011);e("resolution","Resolution",2012);e("spring","Spring",2014);
e("ringu0","Ringu 0: Birthday",2000);e("rasen","Rasen",1998);e("sadako3d","Sadako 3D",2012);e("sadakokayako","Sadako vs. Kayako",2016);e("ringtwo","The Ring Two",2005);e("juoncurse","Ju-On: The Curse",2000);e("juon2","Ju-On: The Grudge 2",2003);e("grudge2","The Grudge 2",2006);e("juonorigins","Ju-On: Origins",2020);e("tomie2","Tomie: Another Face",1999);e("tomierebirth","Tomie: Re-birth",2001);e("tomiebeginning","Tomie: Beginning",2005);e("tomierevenge","Tomie: Revenge",2005);e("tomieunlimited","Tomie: Unlimited",2011);e("gyo","Gyo: Tokyo Fish Attack",2012);e("uzumakianime","Uzumaki (anime)",2024);e("itocollection","Junji Ito Collection",2018);e("itomaniac","Junji Ito Maniac: Japanese Tales of the Macabre",2023);
d("kairo","Пульс","Pulse (Kairo)",2001);e("pontianak","Pontianak Harum Sundal Malam",2004);e("phone2002","Phone",2002);e("thegate","The Gate",1987);e("carved","Carved: The Slit-Mouthed Woman",2007);e("reincarnation","Reincarnation",2005);e("kaidan2007","Kaidan",2007);e("ugetsu","Ugetsu",1953);e("ouijaorigin","Ouija: Origin of Evil",2016);e("keeper2025","Keeper",2025);e("sadakodx","Sadako DX",2022);e("sadako2019","Sadako",2019);e("tomieforbidden","Tomie: Forbidden Fruit",2002);e("juonwhite","Ju-On: White Ghost",2009);e("juonblack","Ju-On: Black Ghost",2009);e("kakashi","Kakashi",2001);e("ekoeko","Eko Eko Azarak: Wizard of Darkness",1995);
d("perfectblue","Идеальная грусть","Perfect Blue",1997);
d("santasangre","Святая кровь","Santa Sangre",1989);
d("panslab","Лабиринт Фавна","Pan's Labyrinth",2006);
e("lordssalem","The Lords of Salem",2012);
d("halloween3","Хэллоуин 3: Сезон ведьм","Halloween III: Season of the Witch",1982);
d("eventhorizon","Сквозь горизонт","Event Horizon",1997);
e("theeye02","The Eye",2002);
e("deadbirds","Dead Birds",2004);
e("norikis","Noriko's Dinner Table",2005);
e("versus","Versus",2000);
e("seance00","Seance",2000);
e("retribution06","Retribution",2006);
e("anythingjackson","Anything for Jackson",2020);
e("deborahlogan","The Taking of Deborah Logan",2014);
d("themenu","Меню","The Menu",2022);
e("racedevil","Race with the Devil",1975);
e("combatshock","Combat Shock",1984);
e("cherryfalls","Cherry Falls",2000);
e("mementomori99","Memento Mori",1999);
e("darksong","A Dark Song",2016);
e("houseofdevil","The House of the Devil",2009);
e("bonesandall","Bones and All",2022);
e("lastrites","The Conjuring: Last Rites",2025);
/* v102: added 2026-11-10 */
e("n2phantomopera25","The Phantom of the Opera",1925);
e("n2jekyll31","Dr. Jekyll and Mr. Hyde",1931);
e("n2isleofdead45","Isle of the Dead",1945);
e("n2cursefrank57","The Curse of Frankenstein",1957);
e("n2cursedemon57","Curse of the Demon",1957);
e("n2horrordracula58","Horror of Dracula",1958);
d("n2fly58","Муха","The Fly",1958);
e("n2spiderbaby67","Spider Baby",1967);
e("n2devilridesout68","The Devil Rides Out",1968);
e("n2targets68","Targets",1968);
e("n2jessica71","Let's Scare Jessica to Death",1971);
e("n2duel71","Duel",1971);
e("n2phibes71","The Abominable Dr. Phibes",1971);
e("n2sisters72","Sisters",1972);
e("n2theatreblood73","Theatre of Blood",1973);
e("n2phantomparadise74","Phantom of the Paradise",1974);
e("n2itsalive74","It's Alive",1974);
e("n2psycho2_83","Psycho II",1983);
e("n2f13p3","Friday the 13th Part III",1982);
e("n2nightmare2","A Nightmare on Elm Street 2: Freddy's Revenge",1985);
e("n2lifeforce85","Lifeforce",1985);
d("n2aliens86","Чужие","Aliens",1986);
d("n2hitcher86","Попутчик","The Hitcher",1986);
e("n2critters86","Critters",1986);
e("n2vamp86","Vamp",1986);
e("n2aprilfool86","April Fool's Day",1986);
e("n2parents89","Parents",1989);
e("n2church89","The Church",1989);
e("n2tetsuo2","Tetsuo II: Body Hammer",1992);
d("n2interview94","Интервью с вампиром","Interview with the Vampire",1994);
d("n2se7en95","Семь","Se7en",1995);
e("n2species95","Species",1995);
d("n2craft96","Колдовство","The Craft",1996);
d("n2dusk96","От заката до рассвета","From Dusk Till Dawn",1996);
d("n2frighteners96","Беспокойные","The Frighteners",1996);
e("n2charisma99","Charisma",1999);
e("n2hohill99","House on Haunted Hill",1999);
e("n2haunting99","The Haunting",1999);
e("n2jeepers01","Jeepers Creepers",2001);
d("n2signs02","Знаки","Signs",2002);
e("n2mothman02","The Mothman Prophecies",2002);
e("n2fvj03","Freddy vs. Jason",2003);
d("n2openwater03","Открытое море","Open Water",2003);
d("n2identity03","Идентификация","Identity",2003);
d("n2machinist04","Машинист","The Machinist",2004);
e("n2strangecircus05","Strange Circus",2005);
e("n2landdead05","Land of the Dead",2005);
e("n2epitaph07","Epitaph",2007);
e("n2diarydead07","Diary of the Dead",2007);
d("n2days30_07","30 дней ночи","30 Days of Night",2007);
e("n2poughkeepsie07","The Poughkeepsie Tapes",2007);
d("n2cloverfield08","Монстро","Cloverfield",2008);
e("n2quarantine08","Quarantine",2008);
e("n2sauna08","Sauna",2008);
e("n2rareexports10","Rare Exports: A Christmas Tale",2010);
e("n2graveenc11","Grave Encounters",2011);
d("n2womaninblack12","Женщина в чёрном","The Woman in Black",2012);
e("n2sightseers12","Sightseers",2012);
e("n2fieldengland13","A Field in England",2013);
d("n2undertheskin13","Побудь в моей шкуре","Under the Skin",2013);
d("n2onlylovers13","Выживут только любовники","Only Lovers Left Alive",2013);
e("n2rigormortis13","Rigor Mortis",2013);
d("n2purge13","Судная ночь","The Purge",2013);
d("n2annabelle14","Аннабель","Annabelle",2014);
d("n2unfriended14","Убрать из друзей","Unfriended",2014);
e("n2creep14","Creep",2014);
e("n2honeymoon14","Honeymoon",2014);
e("n2tagalong15","The Tag-Along",2015);
e("n2hellhousellc15","Hell House LLC",2015);
d("n2krampus15","Крампус","Krampus",2015);
e("n2evolution15","Evolution",2015);
e("n2eyesmymother16","The Eyes of My Mother",2016);
e("n2lovewitch16","The Love Witch",2016);
e("n2undershadow16","Under the Shadow",2016);
d("n2cloverlane16","Кловерфилд, 10","10 Cloverfield Lane",2016);
e("n2betterwatch16","Better Watch Out",2016);
e("n2wearetheflesh16","We Are the Flesh",2016);
e("n2creepy16","Creepy",2016);
e("n2tigers17","Tigers Are Not Afraid",2017);
e("n2terrified17","Terrified",2017);
e("n2veronica17","Verónica",2017);
e("n2satanslaves17","Satan's Slaves",2017);
e("n2superdark17","Super Dark Times",2017);
e("n2mayhem17","Mayhem",2017);
e("n2tumbbad18","Tumbbad",2018);
e("n2stree18","Stree",2018);
d("n2border18","Граница","Border",2018);
e("n2infabric18","In Fabric",2018);
e("n2possum18","Possum",2018);
e("n2petsem19","Pet Sematary",2019);
e("n2ma19","Ma",2019);
e("n2crawl19","Crawl",2019);
e("n2lodge19","The Lodge",2019);
e("n2impetigore19","Impetigore",2019);
e("n2detention19","Detention",2019);
e("n2holeground19","The Hole in the Ground",2019);
e("n2littlemonsters19","Little Monsters",2019);
e("n2darkwicked20","The Dark and the Wicked",2020);
d("n2hishouse20","Дом","His House",2020);
e("n2sputnik20","Sputnik",2020);
e("n2gretel20","Gretel & Hansel",2020);
e("n2emptyman20","The Empty Man",2020);
e("n2closet20","The Closet",2020);
e("n2antlers21","Antlers",2021);
e("n2medium21","The Medium",2021);
e("n2innocents21","The Innocents",2021);
e("n2werewolveswithin21","Werewolves Within",2021);
e("n2hatching22","Hatching",2022);
e("n2watcher22","Watcher",2022);
e("n2resurrection22","Resurrection",2022);
e("n2prey22","Prey",2022);
e("n2beau23","Beau Is Afraid",2023);
e("n2fnaf23","Five Nights at Freddy's",2023);
e("n2nooneave23","No One Will Save You",2023);
e("n2boogeyman23","The Boogeyman",2023);
e("n2exhuma24","Exhuma",2024);
["n2phantomopera25","n2jekyll31","n2isleofdead45","n2cursefrank57","n2cursedemon57","n2horrordracula58","n2fly58","n2spiderbaby67","n2devilridesout68","n2targets68","n2jessica71","n2duel71","n2phibes71","n2sisters72","n2theatreblood73","n2phantomparadise74","n2itsalive74","n2psycho2_83","n2f13p3","n2nightmare2","n2lifeforce85","n2aliens86","n2hitcher86","n2critters86","n2vamp86","n2aprilfool86","n2parents89","n2church89","n2tetsuo2","n2interview94","n2se7en95","n2species95","n2craft96","n2dusk96","n2frighteners96","n2charisma99","n2hohill99","n2haunting99","n2jeepers01","n2signs02","n2mothman02","n2fvj03","n2openwater03","n2identity03","n2machinist04","n2strangecircus05","n2landdead05","n2epitaph07","n2diarydead07","n2days30_07","n2poughkeepsie07","n2cloverfield08","n2quarantine08","n2sauna08","n2rareexports10","n2graveenc11","n2womaninblack12","n2sightseers12","n2fieldengland13","n2undertheskin13","n2onlylovers13","n2rigormortis13","n2purge13","n2annabelle14","n2unfriended14","n2creep14","n2honeymoon14","n2tagalong15","n2hellhousellc15","n2krampus15","n2evolution15","n2eyesmymother16","n2lovewitch16","n2undershadow16","n2cloverlane16","n2betterwatch16","n2wearetheflesh16","n2creepy16","n2tigers17","n2terrified17","n2veronica17","n2satanslaves17","n2superdark17","n2mayhem17","n2tumbbad18","n2stree18","n2border18","n2infabric18","n2possum18","n2petsem19","n2ma19","n2crawl19","n2lodge19","n2impetigore19","n2detention19","n2holeground19","n2littlemonsters19","n2darkwicked20","n2hishouse20","n2sputnik20","n2gretel20","n2emptyman20","n2closet20","n2antlers21","n2medium21","n2innocents21","n2werewolveswithin21","n2hatching22","n2watcher22","n2resurrection22","n2prey22","n2beau23","n2fnaf23","n2nooneave23","n2boogeyman23","n2exhuma24"].forEach(function(id){F[id].add="10.11.2026"});

/* v120: added 14.11.2026 */
d("n3housewax53","Дом восковых фигур","House of Wax",1953);
d("n3wolfman41","Человек-волк","The Wolf Man",1941);
e("n3deadofnight45","Dead of Night",1945);
e("n3alice76","Alice, Sweet Alice",1976);
e("n3audreyrose77","Audrey Rose",1977);
e("n3alucarda77","Alucarda",1977);
e("n3shockwaves77","Shock Waves",1977);
e("n3magic78","Magic",1978);
e("n3alligator80","Alligator",1980);
e("n3q82","Q: The Winged Serpent",1982);
e("n3waxwork88","Waxwork",1988);
d("n3arachno90","Арахнофобия","Arachnophobia",1990);
e("n3addiction95","The Addiction",1995);
d("n3cube97","Куб","Cube",1997);
d("n3scream3","Крик 3","Scream 3",2000);
d("n3resident02","Обитель зла","Resident Evil",2002);
e("n3them06","Them",2006);
e("n3deadsilence07","Dead Silence",2007);
e("n3rec2","[REC] 2",2009);
e("n3descent2","The Descent Part 2",2009);
d("n3letmein10","Впусти меня","Let Me In",2010);
d("n3scream4","Крик 4","Scream 4",2011);
e("n3rec3","[REC]³ Genesis",2012);
e("n3girlgifts16","The Girl with All the Gifts",2016);
e("n3cargo17","Cargo",2017);
e("n3rampant18","Rampant",2018);
e("n3violation20","Violation",2020);
e("n3hellbender21","Hellbender",2021);
e("n3fearstreet94","Fear Street Part One: 1994",2021);
d("n3scream22","Крик","Scream",2022);
e("n3cobweb23","Cobweb",2023);
d("n3smile2","Улыбка 2","Smile 2",2024);
e("n3opus25","Opus",2025);
d("n3bonetemple","28 лет спустя: Храм костей","28 Years Later: The Bone Temple",2026);
e("n3obsession26","Obsession",2026);
e("n3hokum26","Hokum",2026);
e("n3primate26","Primate",2026);
e("n3backrooms26","Backrooms",2026);
e("n3undertone26","Undertone",2026);
e("n3facesdeath26","Faces of Death",2026);
["n3housewax53","n3wolfman41","n3deadofnight45","n3alice76","n3audreyrose77","n3alucarda77","n3shockwaves77","n3magic78","n3alligator80","n3q82","n3waxwork88","n3arachno90","n3addiction95","n3cube97","n3scream3","n3resident02","n3them06","n3deadsilence07","n3rec2","n3descent2","n3letmein10","n3scream4","n3rec3","n3girlgifts16","n3cargo17","n3rampant18","n3violation20","n3hellbender21","n3fearstreet94","n3scream22","n3cobweb23","n3smile2","n3opus25","n3bonetemple","n3obsession26","n3hokum26","n3primate26","n3backrooms26","n3undertone26","n3facesdeath26"].forEach(function(id){F[id].add="14.11.2026"});

var REVIEWS=[
 {id:"hellraiser",d:a("Клайв Баркер","Clive Barker"),h:355,r:4.5,g:4,gn:["body","gore","splatterpunk"],
  s:a("Головоломка-шкатулка, цепи с крюками и порядок, где боль и наслаждение одно и то же.","A puzzle box, hooked chains and an order in which pain and pleasure are the same thing."),
  f:a(["Баркер, снимая по собственной повести, делает ад не огнём, а ремеслом: сенобиты выглядят как хирурги, у которых давно нет слова «нет». Пинхед появляется на экране совсем недолго, и именно это работает.","В центре семейная драма с вожделением и предательством, а плоть в нужные моменты возвращается из ничего. Практические эффекты до сих пор выглядят неприятно живыми."],
      ["Adapting his own novella, Barker makes hell a craft rather than fire: the Cenobites look like surgeons who lost the word “no” long ago. Pinhead is on screen only briefly, and that is exactly why it works.","At the centre is a family drama of lust and betrayal, and flesh returns from nothing at the right moments. The practical effects still look uncomfortably alive."])},
 {id:"scanners",d:a("Дэвид Кроненберг","David Cronenberg"),h:20,r:4,g:4,gn:["body","shock"],
  s:a("Телепаты, которые умеют взрывать головы, и корпорация, которая хочет их использовать.","Telepaths who can explode heads, and a corporation that wants to use them."),
  f:a(["Сцена с взрывом головы стала визитной карточкой фильма, но держит его холодная, почти шпионская атмосфера и ощущение, что чужие мысли это физическая боль.","Кроненберг снимает конфликт как болезнь нервной системы, и этим уже предсказывает боди-хоррор следующих лет."],
      ["The exploding-head scene became the film's calling card, but what holds it is a cold, almost spy-thriller atmosphere and the sense that other people's thoughts are physical pain.","Cronenberg stages the conflict as an illness of the nervous system, already foreshadowing the body horror of the following years."])},
 {id:"tetsuo",d:a("Синъя Цукамото","Shinya Tsukamoto"),h:8,r:5,g:4,gn:["body","jhorror","splatterpunk","extreme"],
  s:a("67 минут чёрно-белого металлического бреда, где человек медленно прорастает проводами и арматурой.","67 minutes of black-and-white metal delirium in which a man slowly sprouts wires and rebar."),
  f:a(["Цукамото снял, сыграл, смонтировал и склеил фильм почти в одиночку. Видно каждую царапину на плёнке, и это работает: город здесь тоже вживлён в героя, а не служит фоном.","Стоп-моушен, грохот индустриального саундтрека и ритм, похожий на панический приступ. Это не история, а симптом."],
      ["Tsukamoto shot, acted in, edited and glued this film together almost single-handedly. You can see every scratch on the film stock, and it works: the city is grafted into the hero rather than serving as backdrop.","Stop-motion, an industrial soundtrack and a rhythm like a panic attack. It's not a story, it's a symptom."])},
 {id:"ringu",d:a("Хидэо Наката","Hideo Nakata"),h:200,r:4.5,g:1,gn:["jhorror"],
  s:a("Видеокассета, семь дней и колодец: фильм, который открыл миру японский ужас.","A videotape, seven days and a well: the film that introduced the world to Japanese horror."),
  f:a(["Наката почти не показывает насилие. Он строит страх на тишине, статике в кадре и ожидании, а проклятие распространяется как вирус, передаваясь через плёнку, которую кто-то посмотрел.","Образ Садако с мокрыми волосами стал знаком жанра, но по-настоящему пугает не он, а чувство, что отмотать назад уже нельзя."],
      ["Nakata barely shows violence. He builds fear from silence, static in the frame and waiting, and the curse spreads like a virus, passed on through a tape someone has watched.","Sadako's wet hair became the genre's emblem, but what truly frightens is the feeling that there is no rewinding."])},
 {id:"audition",d:a("Такаси Миикэ","Takashi Miike"),h:330,r:4.5,g:4,gn:["jhorror","extreme"],warn:a("Тяжёлый финал","A punishing final act"),
  s:a("Вдовец устраивает фальшивое прослушивание, чтобы найти жену, и находит нечто совсем другое.","A widower stages a fake audition to find a wife and finds something else entirely."),
  f:a(["Миикэ почти час ведёт фильм как тихую мелодраму, а потом меняет жанр так резко, что зал замирает.","Финал остаётся одним из самых тяжёлых в японском ужасе. Он пугает не столько показанным, сколько тем, как спокойно это делается."],
      ["Miike runs the film for almost an hour as a quiet melodrama and then switches genre so sharply that the room freezes.","The final act remains one of the hardest in Japanese horror. It frightens less by what it shows than by how calmly it is done."])},
 {id:"tgp",d:a("Ёсихиро Нисимура","Yoshihiro Nishimura"),h:340,r:4,g:5,gn:["jhorror","trash","gore","splatterpunk","body"],warn:a("Преувеличенная жестокость","Exaggerated gore"),
  s:a("Частная полиция будущего охотится на мутантов, у которых раны превращаются в оружие.","A private police force of the future hunts mutants whose wounds turn into weapons."),
  f:a(["Нисимура пришёл из спецэффектов, и фильм держится на резине, силиконе и бутафорской крови. Эффекты намеренно преувеличены до абсурда, и это часть шутки.","Между сценами идут фальшивые рекламные ролики, высмеивающие потребление и телевидение. Это боди-хоррор, который смеётся над собой и над зрителем."],
      ["Nishimura came from special effects, and the film runs on rubber, silicone and fake blood. The effects are deliberately exaggerated to the point of absurdity, and that's part of the joke.","Between scenes come fake commercials mocking consumerism and television. This is body horror that laughs at itself and at the viewer."])},
 {id:"machinegirl",d:a("Нобору Игути","Noboru Iguchi"),h:355,r:3.5,g:5,gn:["jhorror","trash","gore"],warn:a("Преувеличенная жестокость","Exaggerated gore"),
  s:a("Школьница вместо потерянной руки получает пулемёт и идёт мстить за брата.","A schoolgirl gets a machine gun in place of her lost arm and sets out to avenge her brother."),
  f:a(["Сюжет здесь лишь рамка для аттракционов: каждая сцена пытается перебить предыдущую по степени нелепости и красных фонтанов.","Фильм не просит принимать его всерьёз. Это японский трэш в чистом виде, и либо он сразу вас поймает, либо нет."],
      ["The plot is just a frame for set pieces: each scene tries to outdo the last in absurdity and red geysers.","The film doesn't ask to be taken seriously. It's Japanese trash in its purest form, and it either grabs you immediately or it doesn't."])},
 {id:"raw",d:a("Жюлия Дюкурно","Julia Ducournau"),h:5,r:4.5,g:3,gn:["body","extreme"],
  s:a("Студентка-вегетарианка поступает в ветеринарную школу и пробует то, чего не должна была пробовать.","A vegetarian student enrolls at a veterinary school and tastes what she shouldn't have."),
  f:a(["Дюкурно использует каннибализм как метафору желания и взросления, но не объясняет его. Тело здесь просто просыпается и требует своего.","Гаранс Мариллье играет без единого лишнего жеста. Самое страшное в фильме не кровь, а то, как естественно она принимает новую природу."],
      ["Ducournau uses cannibalism as a metaphor for desire and growing up, but never explains it. The body simply wakes up and demands its due.","Garance Marillier plays it without a single wasted gesture. The scariest thing is not the blood but how naturally she accepts her new nature."])},
 {id:"substance",d:a("Кораль Фаржа","Coralie Fargeat"),h:350,r:4.5,g:5,gn:["body","gore"],warn:a("Очень много крови","A lot of blood"),
  s:a("Звезда, которую увольняют за возраст, принимает препарат, обещающий лучшую версию себя.","A star fired for her age takes a drug that promises a better version of herself."),
  f:a(["Фаржа превращает индустрию красоты в боди-хоррор и не жалеет ни героиню, ни зрителя. Деми Мур играет без защиты, и это держит фильм.","Финал это праздник перебора: кровь буквально заливает кадр, а сатира не отступает ни на шаг."],
      ["Fargeat turns the beauty industry into body horror and spares neither the heroine nor the viewer. Demi Moore plays without armour, and that holds the film together.","The finale is a celebration of excess: blood literally floods the frame while the satire never takes a step back."])},
 {id:"braindead",d:a("Питер Джексон","Peter Jackson"),h:350,r:4,g:5,gn:["splatterpunk","gore","trash"],
  s:a("Кладбищенский кошмар с газонокосилкой, который до сих пор держит рекорд по литрам бутафорской крови.","A cemetery nightmare with a lawn mower that still holds the record for litres of fake blood."),
  f:a(["До «Властелина колец» Джексон снимал фильмы, где главным оператором был вкус к чудовищному. Здесь он превращает мещанский быт и материнскую власть в основу всего ужаса.","Финальная вечеринка в доме остаётся эталоном сплаттера как жанра: смешно, омерзительно и безупречно срежиссировано."],
      ["Before The Lord of the Rings, Jackson made films whose chief cinematographer was a taste for the monstrous. Here he turns suburban routine and maternal authority into the root of all horror.","The house party finale remains the benchmark of splatter as a genre: funny, revolting and impeccably staged."])},
 {id:"evil2",d:a("Сэм Рэйми","Sam Raimi"),h:15,r:5,g:5,gn:["splatterpunk","gore","trash"],
  s:a("Тот же лес, та же хижина и ещё больше безумия: Эш против всего на свете.","The same woods, the same cabin and even more madness: Ash against everything."),
  f:a(["Рэйми переделывает собственный ужас в слэпстик: камера летает, кровь бьёт фонтаном, а Брюс Кэмпбелл дерётся с собственной рукой.","Это момент, когда сплаттер становится комедией и при этом остаётся ужасом."],
      ["Raimi remakes his own horror as slapstick: the camera flies, blood fountains and Bruce Campbell fights his own hand.","This is the moment where splatter becomes comedy and still remains horror."])},
 {id:"reanimator",d:a("Стюарт Гордон","Stuart Gordon"),h:120,r:4.5,g:5,gn:["splatterpunk","gore"],
  s:a("Студент-медик изобретает светящуюся сыворотку, возвращающую мёртвых, и это плохая идея.","A medical student invents a glowing serum that revives the dead, and it's a bad idea."),
  f:a(["Вольная экранизация Лавкрафта превращается в эталон чёрной комедии с кровью. Джеффри Комбс в роли Герберта Уэста играет лихорадочного учёного без тени сомнения.","Фильм точно знает меру: пока вы смеётесь, он успевает показать то, что запоминается надолго."],
      ["A loose Lovecraft adaptation turns into a template for black comedy with blood. Jeffrey Combs as Herbert West plays the feverish scientist without a shred of doubt.","The film knows exactly how far to go: while you're laughing, it manages to show things you'll remember for a long time."])},
 {id:"dawn",d:a("Джордж Ромеро","George A. Romero"),h:40,r:5,g:4,gn:["gore","splatterpunk"],
  s:a("Четверо беглецов запираются в торговом центре, пока снаружи бродят мертвецы.","Four fugitives lock themselves in a shopping mall while the dead roam outside."),
  f:a(["Ромеро превращает торговый центр в зеркало потребления: мёртвые ходят по привычным маршрутам, и живые тоже. Сатира смешана с жестокостью эффектов Тома Савини.","Фильм до сих пор задаёт планку зомби-кино и показывает, что страшнее всего толпа, которая ничего не хочет, кроме еды."],
      ["Romero turns the mall into a mirror of consumption: the dead walk familiar routes, and so do the living. The satire is mixed with the brutality of Tom Savini's effects.","The film still sets the bar for zombie cinema and shows that the scariest thing is a crowd that wants nothing but food."])},
 {id:"thing",d:a("Джон Карпентер","John Carpenter"),h:150,r:5,g:4,gn:["body","gore"],
  s:a("Антарктическая станция, существо, копирующее людей, и паранойя, которая страшнее монстра.","An Antarctic station, a creature that copies humans, and a paranoia scarier than the monster."),
  f:a(["Эффекты Роба Боттина до сих пор остаются эталоном практического боди-хоррора: каждая трансформация одновременно отвратительна и гениально придумана.","Но держит фильм не слизь, а вопрос, кому из твоих товарищей ещё можно верить. Карпентер доводит его до финала, где ответа нет."],
      ["Rob Bottin's effects remain the gold standard of practical body horror: every transformation is both repulsive and brilliantly conceived.","But what holds the film together is not the slime but the question of which of your comrades can still be trusted. Carpenter carries it to a finale with no answer."])},
 {id:"society",d:a("Брайан Юзна","Brian Yuzna"),h:90,r:4.5,g:4,gn:["body","shock"],
  s:a("Подросток из Беверли-Хиллз подозревает, что его семья и все её друзья не совсем люди.","A Beverly Hills teenager suspects his family and all their friends are not quite human."),
  f:a(["Классовая сатира, которая долго притворяется подростковым фильмом, а в финале взрывается одним из самых странных и отвратительных эпизодов в истории жанра.","Эффекты Скримин Мэд Джорджа делают то, что обычно удаётся только кошмарам: показывают нечто невозможное и абсолютно убедительное."],
      ["A class satire that long pretends to be a teen movie and then explodes in one of the strangest and most repulsive sequences in genre history.","Screaming Mad George's effects do what usually only nightmares can: show something impossible and utterly convincing."])},
 {id:"possession",d:a("Анджей Жулавский","Andrzej Żuławski"),h:285,r:5,g:3,gn:["body","extreme"],
  s:a("Фильм о распаде брака, снятый как экзорцизм, где актёры играют на пределе нервной системы.","A film about a marriage falling apart, shot like an exorcism, with actors performing at the limit of their nervous systems."),
  f:a(["Сцена в берлинском метро с Изабель Аджани входит в любой список самых неудобных эпизодов истории кино. Жулавский не показывает ужас, он доводит до него актёров.","Это боди-хоррор не про тело, а про отношения: чем сильнее двое пытаются удержаться друг за друга, тем больше из них вылезает чужого."],
      ["The Berlin subway scene with Isabelle Adjani is on every list of cinema's most uncomfortable sequences. Żuławski doesn't show horror, he drives the actors toward it.","This is body horror not about the body but about relationships: the harder two people try to hold on to each other, the more of something alien crawls out of them."])},
 {id:"martyrs",d:a("Паскаль Ложье","Pascal Laugier"),h:0,r:4,g:5,gn:["extreme","shock"],warn:a("Только для подготовленных","Only for the prepared"),
  s:a("Фильм из двух половин, каждая из которых переворачивает вопрос, зачем вы это смотрите.","A film in two halves, each of which flips the question of why you are watching this."),
  f:a(["Ложье снимает кино без утешения. Первая часть выглядит как мстительный хоррор, вторая разворачивается в нечто почти религиозное и от этого невыносимое.","Это не развлечение и не проверка на прочность, а жёсткий эксперимент над зрителем."],
      ["Laugier makes cinema without consolation. The first part looks like a revenge horror, the second unfolds into something almost religious, and unbearable because of it.","It is not entertainment and not a test of endurance but a harsh experiment on the viewer."])},
 {id:"videodrome",d:a("Дэвид Кроненберг","David Cronenberg"),h:130,r:5,g:3,gn:["body"],
  s:a("Телевизор дышит, живот раскрывается щелью под кассету, а реальность перестаёт быть надёжным носителем.","The television breathes, a stomach opens a slit for cassettes, and reality stops being a reliable medium."),
  f:a(["Фильм о том, как изображение входит в человека буквально. Сорок лет спустя разговор о зависимости от экрана остаётся пугающе актуальным.","Джеймс Вудс играет циника, которого собственная профессия приводит к мутации. «Да здравствует новая плоть» с тех пор стало жанровым лозунгом."],
      ["A film about an image entering a person literally. Forty years later, the conversation about screen addiction remains frighteningly relevant.","James Woods plays a cynic whose own profession leads him to mutation. “Long live the new flesh” has been a genre slogan ever since."])},
 {id:"halloween",d:a("Джон Карпентер","John Carpenter"),h:25,r:5,g:2,gn:["slasher"],
  s:a("Маска, дыхание и синтезаторная тема: слэшер, из которого вырос весь жанр.","A mask, breathing and a synthesizer theme: the slasher from which the whole genre grew."),
  f:a(["Карпентер почти не показывает кровь. Он снимает пространство: тёмный дверной проём, фигура на заднем плане кадра, и зритель сам дорисовывает остальное.","Тему он написал сам, и она работает как кардиограмма. Джейми Ли Кёртис стала образцом «последней девушки», а Майкл Майерс остался чистой, необъяснённой угрозой."],
      ["Carpenter barely shows blood. He films space: a dark doorway, a figure at the back of the frame, and the viewer fills in the rest.","He wrote the theme himself, and it works like a heart monitor. Jamie Lee Curtis became the model for the final girl, and Michael Myers remained pure, unexplained menace."])},
 {id:"tcm",d:a("Тоуб Хупер","Tobe Hooper"),h:30,r:5,g:3,gn:["slasher","exploit","shock"],
  s:a("Семеро друзей, заброшенный дом в Техасе и семья, которая не ждёт гостей.","Friends, an old house in Texas and a family that isn't expecting guests."),
  f:a(["Хупер снимал фильм за небольшие деньги в жару, и это чувствуется кожей: грязь, пот и гудение бензопилы вместо музыки.","Парадокс в том, что крови здесь немного. Фильм пугает напором и ощущением, что остановиться некому."],
      ["Hooper shot the film on a small budget in the heat, and you feel it on your skin: dirt, sweat and the roar of a chainsaw instead of a score.","The paradox is that there is little blood. The film frightens through drive and the sense that there is no one to stop it."])},
 {id:"maniac",d:a("Уильям Лустиг","William Lustig"),h:0,r:4,g:5,gn:["slasher","gore","exploit"],warn:a("Жестокие сцены насилия","Brutal violence"),
  s:a("Грязная улица Нью-Йорка, маньяк в роли главного героя и эффекты Тома Савини.","A grimy New York street, a killer as the protagonist and Tom Savini's effects."),
  f:a(["Фильм прожит изнутри убийцы, и от этого он тяжелее большинства слэшеров. Джо Спинелл, который ещё и написал сценарий, играет без попытки понравиться.","Это эксплуатационное кино в лучшем и худшем смысле: дёшево, грубо и очень искренне."],
      ["The film is lived from inside the killer, which makes it heavier than most slashers. Joe Spinell, who also co-wrote the script, plays without trying to be likeable.","It is exploitation cinema in the best and worst sense: cheap, crude and very sincere."])},
 {id:"deepred",d:a("Дарио Ардженто","Dario Argento"),h:345,r:5,g:3,gn:["giallo","slasher"],
  s:a("Пианист становится свидетелем убийства и забывает деталь, которая выдаёт убийцу.","A pianist witnesses a murder and forgets the detail that gives the killer away."),
  f:a(["Лучший пример джалло: загадка, спрятанная в кадре, и камера, которая сама ведёт расследование. Партитура группы Goblin делает каждую сцену тревожной.","Дэвид Хеммингс играет вполне обычного человека, и именно поэтому его ошибка в начале кажется такой опасной."],
      ["The finest example of giallo: a riddle hidden in the frame, and a camera that conducts the investigation itself. Goblin's score makes every scene uneasy.","David Hemmings plays an entirely ordinary man, which is exactly why his mistake at the start feels so dangerous."])},
 {id:"birdcrystal",d:a("Дарио Ардженто","Dario Argento"),h:320,r:4,g:2,gn:["giallo"],
  s:a("Американец в Риме видит нападение на женщину в галерее и не может забыть деталь.","An American in Rome witnesses an attack on a woman in a gallery and cannot forget a detail."),
  f:a(["Дебют Ардженто выстраивает формулу джалло: свидетель, ускользающая деталь, чёрные перчатки. Камера здесь героиня наравне с актёрами.","Вся история держится на ощущении, что разгадка уже перед глазами, но её нельзя увидеть."],
      ["Argento's debut sets the giallo formula: a witness, a slipping detail, black gloves. The camera is a heroine here as much as the actors.","The whole story rests on the feeling that the solution is already before your eyes but cannot be seen."])},
 {id:"suspiria",d:a("Дарио Ардженто","Dario Argento"),h:355,r:4.5,g:3,gn:["giallo"],
  s:a("Балетная школа во Фрайбурге, ядовитый цвет и музыка, которая не даёт расслабиться ни на секунду.","A ballet school in Freiburg, poisonous colour and music that won't let you relax for a second."),
  f:a(["Ардженто отказывается от реализма: стены красные, свет синий и зелёный, а логика сна заменяет логику сюжета. Всё здесь про ощущение, не про объяснение.","Это джалло, которое превратилось в ведьмовской миф, и до сих пор лучший способ показать новичку, что значит стиль в ужасах."],
      ["Argento abandons realism: red walls, blue and green light, dream logic instead of plot logic. Everything here is about sensation, not explanation.","This is giallo turned into a witch myth, and still the best way to show a newcomer what style means in horror."])},
 {id:"toxavenger",d:a("Ллойд Кауфман, Майкл Херц","Lloyd Kaufman, Michael Herz"),h:105,r:3.5,g:4,gn:["trash","exploit","gore"],
  s:a("Уборщик в спортзале падает в бочку с отходами и становится первым супергероем студии Troma.","A gym janitor falls into a barrel of waste and becomes Troma's first superhero."),
  f:a(["Низкий бюджет, дешёвая кровь и абсолютное отсутствие вкуса, которые давно стали фирменным знаком студии.","Фильм не пытается быть страшным. Он хочет, чтобы вы смеялись и морщились одновременно, и это получается."],
      ["Low budget, cheap blood and a total absence of taste, all of which became the studio's trademark.","The film isn't trying to be scary. It wants you to laugh and wince at the same time, and it succeeds."])},
 {id:"cannibalholo",d:a("Руджеро Деодато","Ruggero Deodato"),h:20,r:3.5,g:5,gn:["shock","exploit","extreme"],warn:a("Содержит реальные сцены гибели животных","Contains real animal deaths"),
  s:a("Скандальный итальянский фильм, который сделал «найденную плёнку» жанровым приёмом и испортил репутацию режиссёру.","A scandalous Italian film that made “found footage” a genre device and ruined its director's reputation."),
  f:a(["Фильм построен как репортаж о пропавшей экспедиции, и эта рамка до сих пор действует. Но реальные сцены гибели животных делают его тяжёлым для просмотра и спорным как произведение.","Историческое значение огромно, зрительское удовольствие сомнительное. Смотрите, только если знаете, на что идёте."],
      ["The film is built as a report on a missing expedition, and that frame still works. But the real animal deaths make it hard to watch and questionable as a work.","Historically huge, enjoyable doubtfully. Watch it only if you know what you're getting into."])},
 {id:"fly",d:a("Дэвид Кроненберг","David Cronenberg"),h:96,r:5,g:4,gn:["body","gore"],
  s:a("Учёный по ошибке смешивает свою ДНК с мухой, и это самая человечная трагедия в боди-хорроре.","A scientist accidentally merges his DNA with a fly's, and it is the most human tragedy in body horror."),
  f:a(["Кроненберг превращает историю о превращении в роман о болезни и угасании. Эффекты Криса Уоллеса до сих пор пугают, но бьёт не гримм, а то, как герой Джеффа Голдблюма постепенно теряет себя.","Финал выжимает слёзы так же уверенно, как и ужас. Это тот редкий случай, когда ремейк стал важнее оригинала."],
      ["Cronenberg turns a transformation story into a novel about illness and decline. The effects still frighten, but what hurts is not the make-up: it is the way Jeff Goldblum's character slowly loses himself.","The ending wrings out tears as surely as horror. It is a rare case where a remake became more important than the original."])},
 {id:"shivers",d:a("Дэвид Кроненберг","David Cronenberg"),h:87,r:4,g:3,gn:["body","exploit"],
  s:a("Паразиты превращают жильцов современного жилого комплекса в безумных любовников.","Parasites turn the residents of a modern apartment complex into frenzied lovers."),
  f:a(["Ранний Кроненберг снимает панику как эпидемию желания. Стеклянный дом становится лабораторией, где любое тело становится опасным.","Фильм грубоват и нервен, но именно здесь формируется его язык: болезнь как метафора, тело как территория конфликта."],
      ["Early Cronenberg stages panic as an epidemic of desire. The glass tower becomes a laboratory in which any body becomes dangerous.","It is rough and jittery, but this is where his language forms: illness as metaphor, the body as a battlefield."])},
 {id:"brood",d:a("Дэвид Кроненберг","David Cronenberg"),h:92,r:4.5,g:3,gn:["body","shock"],
  s:a("Психотерапия, которая превращает гнев в живые существа, и развод, ставший хоррором.","A therapy that turns rage into living creatures, and a divorce turned horror."),
  f:a(["Это личный фильм о распаде семьи, снятый в самый болезненный период жизни режиссёра. Ужас здесь родом из домашней обиды.","Дети-гомункулы не нужны для шока, они нужны для вывода: злость тоже может рожать."],
      ["It is a personal film about a family falling apart, shot during the most painful period of the director's life. The horror comes from domestic grievance.","The homunculus children are not there for shock but for a conclusion: anger can also give birth."])},
 {id:"evildead",d:a("Сэм Рэйми","Sam Raimi"),h:85,r:4.5,g:4,gn:["splatterpunk","gore"],
  s:a("Пятеро студентов, хижина в лесу и книга, которую не стоило читать вслух.","Five students, a cabin in the woods and a book that should not have been read aloud."),
  f:a(["Рэйми снимает как человек, у которого нет денег и есть бесконечная фантазия. Камера летит сквозь лес, и это место само кажется демоном.","Эффекты наивны, и в этом их шарм. Никакой хоррор о хижине после этого не мог обойтись без оглядки на него."],
      ["Raimi shoots like a man with no money and endless imagination. The camera flies through the forest and the place itself feels like a demon.","The effects are naive, and that is their charm. No cabin horror after it could avoid looking back at it."])},
 {id:"zombi2",d:a("Лучио Фульчи","Lucio Fulci"),h:91,r:4,g:5,gn:["gore","exploit"],
  s:a("Зомби на острове, акула против зомби и глаз, о котором помнят все.","Zombies on an island, a shark against a zombie and the eye everyone remembers."),
  f:a(["Фульчи делает зомби не социальной метафорой, а гниющим мясом. Остров, песок и душный свет создают ощущение настоящего бреда.","Сюжет вторичен, но сцены держат атмосферу и сегодня. Смотреть стоит ради гнили и ради уверенности, с которой фильм не стесняется."],
      ["Fulci makes zombies not a social metaphor but rotting meat. The island, the sand and the sweaty light create the feeling of a true fever dream.","The plot is derivative, but the set pieces still hold the atmosphere. Watch it for the rot and for the confidence with which it shows no shame."])},
 {id:"beyond",d:a("Лучио Фульчи","Lucio Fulci"),h:87,r:4.5,g:5,gn:["gore","exploit"],
  s:a("Отель в Луизиане стоит на одном из семи врат ада, и это объясняет всё.","A hotel in Louisiana stands on one of the seven gates of hell, which explains everything."),
  f:a(["Логика здесь сновидческая: сцены не складываются, но настроение держит. Финал в пустоте, вероятно, самое сильное, что сделал Фульчи.","Фильм грубый и местами смешной, и всё равно оставляет чувство тревоги. Идеальный пример того, как сон побеждает сюжет."],
      ["The logic is dreamlike: scenes do not add up, but the mood holds. The finale in the void is probably Fulci's strongest moment.","The film is crude and sometimes funny, and it still leaves a sense of unease. A perfect example of dream beating plot."])},
 {id:"tenebrae",d:a("Дарио Ардженто","Dario Argento"),h:101,r:4.5,g:4,gn:["giallo","gore"],
  s:a("Писатель приезжает в Рим, и кто-то начинает убивать по страницам его книги.","A writer comes to Rome and someone starts killing by the pages of his book."),
  f:a(["Ардженто здесь холоден и стерилен: белые интерьеры, красная кровь, длинные кадры. Знаменитое движение камеры вдоль фасада остаётся образцом.","Фильм заметно умнее и злее многих джалло. Смотреть стоит и ради сюжета, и ради стиля."],
      ["Argento is cold and sterile here: white interiors, red blood, long takes. The famous camera move along the facade remains a model.","It is markedly smarter and meaner than many gialli. Watch it for the plot and for the style."])},
 {id:"bloodlace",d:a("Марио Бава","Mario Bava"),h:88,r:4.5,g:3,gn:["giallo"],
  s:a("Манекенщицы в доме моды погибают одна за другой, и каждая смерть красиво освещена.","Models in a fashion house die one by one, and every death is beautifully lit."),
  f:a(["Бава превращает убийства в живопись: цветной свет, зеркала, отражения. Это прародитель всего жанра.","Сюжет простоват, а сила в форме. После этого фильма джалло уже невозможно представить без цвета."],
      ["Bava turns murders into painting: coloured light, mirrors, reflections. It is the progenitor of the entire genre.","The plot is simple; the power is in form. After this film giallo is impossible to imagine without colour."])},
 {id:"bayblood",d:a("Марио Бава","Mario Bava"),h:84,r:4,g:4,gn:["giallo","gore","slasher"],
  s:a("Убийства в бухте идут без пауз, и каждая сцена станет образцом для слэшеров.","Murders in a bay go on without a pause, and each scene will become a model for slashers."),
  f:a(["Это протослэшер: компания молодых людей, местность, ножи. Бава проводит пролог цепочкой сцен, где зритель оказывается в положении жертвы.","Финал странный и циничный, и сегодня он смотрится смелее многих современных фильмов."],
      ["It is a proto-slasher: a group of young people, a location, knives. Bava runs the prologue as a chain of scenes that puts the viewer in the victim's place.","The ending is strange and cynical, and today it looks bolder than many modern films."])},
 {id:"nightmare",d:a("Уэс Крэйвен","Wes Craven"),h:91,r:4.5,g:3,gn:["slasher","shock"],
  s:a("Фредди Крюгер приходит во сне, и единственный способ выжить это не засыпать.","Freddy Krueger comes in dreams, and the only way to survive is not to fall asleep."),
  f:a(["Крэйвен находит идею, которая идеально ложится в жанр: страх перед сном общий для всех. Сцены в спальне до сих пор работают.","Фильм держится на фантазии и на ощущении, что взрослые обо всём знают и молчат."],
      ["Craven finds an idea that fits the genre perfectly: fear of sleep is universal. The bedroom scenes still work.","The film runs on imagination and on the feeling that adults know everything and stay silent."])},
 {id:"scream",d:a("Уэс Крэйвен","Wes Craven"),h:111,r:4.5,g:3,gn:["slasher"],
  s:a("Слэшер, где герои знают все правила слэшеров и всё равно погибают.","A slasher where the characters know all the rules of slashers and still die."),
  f:a(["Крэйвен смеётся над жанром и одновременно напоминает, как он работает. Пролог с Дрю Бэрримор остаётся одной из лучших открывающих сцен.","Фильм вернул жанр на экраны в девяностых и породил волну подражаний. Он работает и как комедия, и как триллер."],
      ["Craven laughs at the genre while reminding us how it works. The Drew Barrymore prologue remains one of the great opening scenes.","The film brought the genre back to screens in the nineties and spawned a wave of imitations. It works as a comedy and as a thriller."])},
 {id:"blackxmas",d:a("Боб Кларк","Bob Clark"),h:98,r:4.5,g:2,gn:["slasher"],
  s:a("Общежитие, Рождество и звонки, в которых голос говорит нечто страшное.","A sorority house, Christmas and phone calls in which a voice says something terrible."),
  f:a(["Один из первых слэшеров, где ужас строится на звуке и ожидании. Звонки до сих пор неприятны.","Фильм серьёзнее многих потомков и кончается без объяснений. Настоящая рождественская жуть."],
      ["One of the first slashers, where horror is built on sound and waiting. The phone calls are still unpleasant.","The film is more serious than many of its descendants and ends without explanations. Real Christmas dread."])},
 {id:"irreversible",d:a("Гаспар Ноэ","Gaspar Noé"),h:98,r:3.5,g:4,gn:["extreme","shock"],
  s:a("Фильм, который рассказывает ночь в обратном порядке и ломает зрителя.","A film that tells one night in reverse and breaks the viewer."),
  f:a(["Ноэ использует перевёрнутую хронологию, чтобы сделать трагедию ещё тяжелее. Камера кружится и не даёт отвернуться.","Это не фильм для комфортного вечера. Он тяжёл и жесток, и его сила в том, что он оставляет без утешения."],
      ["Noé uses reversed chronology to make the tragedy even heavier. The camera spins and does not let you look away.","This is not a film for a comfortable evening. It is heavy and brutal, and its power is that it leaves no consolation."])},
 {id:"hautetension",d:a("Александр Айя","Alexandre Aja"),h:91,r:4,g:5,gn:["extreme","slasher","gore"],
  s:a("Две подруги в загородном доме и убийца, который не оставляет шансов.","Two friends in a country house and a killer who leaves no chances."),
  f:a(["Первая половина — идеальный слэшер с хорошо поставленным напряжением. Вторая половина делит зрителей, и в этом её сила.","Фильм открыл дорогу французской волне новой жестокости и по сей день остаётся лучшим её образцом."],
      ["The first half is a perfect slasher with well-built tension. The second half divides viewers, and that is its strength.","The film opened the road for the French new-extremity wave and remains its best example."])},
 {id:"inside",d:a("Александр Бюстильо, Жюльен Мори","Alexandre Bustillo, Julien Maury"),h:82,r:4,g:5,gn:["extreme","gore"],
  s:a("Беременная женщина в канун Рождества и незнакомка, которая пришла за её ребёнком.","A pregnant woman on Christmas Eve and a stranger who came for her baby."),
  f:a(["Минимум персонажей, одна ночь и одно место. Фильм держится на упорстве и на жестокости, не замедляя темп.","Он тяжёл и физичен. Если выдержите, это один из самых эффективных хорроров жанра."],
      ["Few characters, one night and one place. The film runs on stubbornness and cruelty without slowing down.","It is heavy and physical. If you can bear it, it is one of the most effective horrors of the genre."])},
 {id:"hillseyes",d:a("Уэс Крэйвен","Wes Craven"),h:89,r:4,g:3,gn:["exploit","shock"],
  s:a("Семья в пустыне сталкивается с кланом каннибалов, и никто не остаётся чистым.","A family in the desert meets a cannibal clan, and no one stays clean."),
  f:a(["Крэйвен снимает как зеркало: обе семьи страшны, потому что способны на насилие. Фильм грубый, быстрый и умный.","Это классика эксплуатации, которая выдерживает повторные просмотры."],
      ["Craven shoots it as a mirror: both families are frightening because both are capable of violence. The film is rough, fast and clever.","It is an exploitation classic that survives repeat viewings."])},
 {id:"lasthouse",d:a("Уэс Крэйвен","Wes Craven"),h:84,r:3.5,g:3,gn:["exploit","extreme"],
  s:a("Две девушки едут на концерт и попадают в руки банды беглецов.","Two girls go to a concert and fall into the hands of a gang of fugitives."),
  f:a(["Дебют Крэйвена снят грубо и зло, и тем сильнее впечатление. Фильм задаёт вопрос о том, что значит месть.","Он устарел местами, но по-прежнему неприятен и честен."],
      ["Craven's debut is shot roughly and angrily, and the impression is all the stronger. The film asks what revenge means.","It has aged in places but remains unpleasant and honest."])},
 {id:"henry",d:a("Джон МакНотон","John McNaughton"),h:83,r:4.5,g:3,gn:["extreme","shock"],
  s:a("Портрет серийного убийцы, снятый без осуждения и без украшений.","A portrait of a serial killer shot without judgement or ornament."),
  f:a(["Фильм холоден и спокоен, а видео-сцена посреди сюжета остаётся одним из самых тяжёлых моментов жанра.","Он не развлекает. Он смотрит и заставляет вас смотреть вместе с ним."],
      ["The film is cold and calm, and the video scene in the middle remains one of the heaviest moments of the genre.","It does not entertain. It looks, and it makes you look with it."])},
 {id:"eraserhead",d:a("Дэвид Линч","David Lynch"),h:89,r:4.5,g:2,gn:["shock"],
  s:a("Человек, ребёнок-существо и индустриальный пейзаж, снятый как сон.","A man, a creature-child and an industrial landscape shot like a dream."),
  f:a(["Дебют Линча делает ужас из звука и пространства. Каждый кадр словно слушает собственное сердце.","Это не хоррор в привычном смысле, но тревоги в нём больше, чем во многих настоящих."],
      ["Lynch's debut makes horror out of sound and space. Every frame seems to listen to its own heartbeat.","It is not a horror film in the usual sense, but it has more dread than many real ones."])},
 {id:"hausu",d:a("Нобухико Обаяси","Nobuhiko Obayashi"),h:88,r:4.5,g:3,gn:["jhorror","trash"],
  s:a("Семь школьниц в доме тётушки, и дом оказывается живым и голодным.","Seven schoolgirls at an aunt's house, and the house turns out to be alive and hungry."),
  f:a(["Это безумие, где монтаж, спецэффекты и тон живут сами по себе. Пианино ест людей, и это только начало.","Фильм одновременно смешной и жуткий, и его невозможно спутать ни с чем. Идеальная точка входа в японский трэш."],
      ["It is madness where editing, effects and tone live on their own. A piano eats people, and that is only the beginning.","The film is both funny and creepy, and impossible to mistake for anything else. A perfect entry point into Japanese trash."])},
 {id:"onibaba",d:a("Канэто Синдо","Kaneto Shindo"),h:103,r:4.5,g:1,gn:["jhorror"],
  s:a("Две женщины убивают самураев в камышовых зарослях, и маска однажды прирастает к лицу.","Two women kill samurai in the reeds, and a mask one day grows to the face."),
  f:a(["Чёрно-белая графика камыша и ночи делает фильм почти физическим. Это страх голода и вины.","Классика, которая не стареет. Смотреть стоит в полной тишине."],
      ["The black-and-white graphics of reeds and night make the film almost physical. It is the fear of hunger and guilt.","A classic that does not age. Watch it in total silence."])},
 {id:"cure",d:a("Киёси Куросава","Kiyoshi Kurosawa"),h:111,r:4.5,g:2,gn:["jhorror","shock"],
  s:a("Детектив ищет человека, который заставляет других убивать без объяснения.","A detective hunts a man who makes others kill without explanation."),
  f:a(["Куросава делает триллер почти бесстрастным, и от этого становится только страшнее. Убийца мягок, как вода.","Фильм оставляет ощущение, что зло не нуждается в мотивах."],
      ["Kurosawa makes the thriller almost dispassionate, which only makes it scarier. The killer is soft as water.","The film leaves a feeling that evil needs no motives."])},
 {id:"kairo",d:a("Киёси Куросава","Kiyoshi Kurosawa"),h:118,r:4.5,g:1,gn:["jhorror"],
  s:a("Призраки приходят через интернет, и мир тихо пустеет.","Ghosts arrive through the internet and the world quietly empties."),
  f:a(["Одиночество здесь страшнее привидений. Фильм медленный, и каждый кадр пахнет концом света.","Один из самых пророческих хорроров о цифровой эпохе."],
      ["Loneliness here is scarier than ghosts. The film is slow, and every shot smells like the end of the world.","One of the most prophetic horrors about the digital age."])},
 {id:"ichi",d:a("Такаси Миике","Takashi Miike"),h:129,r:3.5,g:5,gn:["extreme","gore"],
  s:a("Якудза, садист и убийца-плакса сталкиваются в Синдзюку.","A yakuza, a sadist and a crying killer collide in Shinjuku."),
  f:a(["Миике снимает жестокость как карнавал, и многие сцены превращаются в чёрную комедию. Это не для слабонервных.","Фильм шумный и неровный, но своеобразный. Смотреть стоит ради образов, а не ради логики."],
      ["Miike shoots cruelty as a carnival, and many scenes turn into black comedy. It is not for the faint of heart.","The film is loud and uneven but distinctive. Watch it for the images, not the logic."])},
 {id:"titane",d:a("Жюлия Дюкурно","Julia Ducournau"),h:108,r:4,g:4,gn:["body","shock"],
  s:a("Женщина, которая любит машины, и отец, который ищет пропавшего сына.","A woman who loves cars and a father looking for a missing son."),
  f:a(["Дюкурно снимает странную историю о теле и привязанности, где металл прорастает сквозь кожу. Это смелое и дерзкое кино.","Фильм ломает ожидания и настаивает на нежности. Золотая пальмовая ветвь была заслуженной."],
      ["Ducournau shoots a strange story about body and attachment, where metal grows through skin. It is bold, daring cinema.","The film breaks expectations and insists on tenderness. The Palme d'Or was deserved."])},
 {id:"hereditary",d:a("Ари Астер","Ari Aster"),h:127,r:4.5,g:3,gn:["shock"],
  s:a("Семья после смерти бабушки и то, что пришло в дом вместе с горем.","A family after a grandmother's death and what came into the house with the grief."),
  f:a(["Астер строит ужас как семейную трагедию, и каждая сцена за столом тяжелее любой кровавой. Тони Коллетт великолепна.","Фильм мрачный и беспощадный, и после него долго не хочется шутить."],
      ["Aster builds horror as a family tragedy, and every scene at the dinner table is heavier than any gore. Toni Collette is magnificent.","The film is grim and merciless, and for a long time after it you do not feel like joking."])},
 {id:"nosferatu1922",d:a("Фридрих Мурнау","F. W. Murnau"),h:94,r:5,g:0,gn:["shock"],
  s:a("Граф Орлок едет в Бремен, и тень его растёт на стенах.","Count Orlok comes to Bremen, and his shadow grows on the walls."),
  f:a(["Это фильм, с которого началась мифология кинематографического вампира. Его тени и силуэты до сих пор влияют на режиссёров.","Немая классика, которая смотрится живее многих современных."],
      ["This is the film where the mythology of the cinematic vampire began. Its shadows and silhouettes still influence directors.","A silent classic that feels more alive than many modern films."])},
 {id:"alien",d:a("Ридли Скотт","Ridley Scott"),h:117,r:5,g:3,gn:["body","shock"],
  s:a("Космический буксир, яйцо и существо, которое растёт быстрее, чем экипаж успевает понять.","A space tug, an egg and a creature that grows faster than the crew can understand."),
  f:a(["Скотт строит фильм на тишине, коридорах и детальных декорациях Гигера. Монстр почти не виден, и от этого страшнее.","Сцена с грудью Кейна закрепила образ боди-хоррора в мейнстриме. Идеальная работа."],
      ["Scott builds the film on silence, corridors and Giger's detailed sets. The monster is barely seen, which makes it scarier.","The chestburster scene fixed body horror in the mainstream. A perfect piece of work."])},
 {id:"exorcist",d:a("Уильям Фридкин","William Friedkin"),h:122,r:5,g:3,gn:["shock"],
  s:a("Двенадцатилетняя девочка и демон, которого не берут врачи.","A twelve-year-old girl and a demon doctors cannot cure."),
  f:a(["Фридкин снимает не готику, а больницу: приборы, пункции, холодный свет. От этого вера становится единственным оружием.","Фильм остаётся одним из самых пугающих в истории. Он пугает не криками, а сомнением."],
      ["Friedkin shoots not gothic but a hospital: instruments, punctures, cold light. This makes faith the only weapon.","The film remains one of the scariest in history. It frightens not by screams but by doubt."])},
 {id:"shining",d:a("Стэнли Кубрик","Stanley Kubrick"),h:146,r:5,g:2,gn:["shock"],
  s:a("Писатель, зима и отель, который помнит всё.","A writer, winter and a hotel that remembers everything."),
  f:a(["Кубрик снимает симметрию, лабиринты и коридоры как инструмент безумия. Никольсон играет на грани карикатуры и ужаса.","Фильм остаётся образцом того, как большой режиссёр работает с жанром."],
      ["Kubrick shoots symmetry, mazes and corridors as an instrument of madness. Nicholson plays on the edge of caricature and horror.","The film remains a model of how a great director works with a genre."])},
 {id:"getout",d:a("Джордан Пил","Jordan Peele"),h:104,r:4.5,g:2,gn:["shock"],
  s:a("Фотограф едет знакомиться с родителями девушки, и это лучшая плохая идея.","A photographer goes to meet his girlfriend's parents, and it is the best bad idea."),
  f:a(["Пил создаёт социальный хоррор, в котором страх рождается из вежливости. Погружение в «провал» стало иконой.","Фильм точен, умён и при этом по-настоящему страшен."],
      ["Peele creates a social horror in which fear is born from politeness. The \"sunken place\" became an icon.","The film is precise, clever and still truly scary."])},
 {id:"terrifier",d:a("Дэмиен Леоне","Damien Leone"),h:82,r:3.5,g:5,gn:["slasher","gore"],
  s:a("Клоун Арт ходит по Хэллоуину и делает то, что обычно показывают за кадром.","Art the Clown walks through Halloween and does what is usually shown offscreen."),
  f:a(["Фильм держится на образе клоуна и на практических эффектах. Он грязный и жестокий, и именно этим вошёл в разговор.","Если вы любите кровавые слэшеры, это обязательный пункт. Если нет, не стоит."],
      ["The film rests on the clown's image and on practical effects. It is dirty and brutal, which is why it entered the conversation.","If you love gory slashers it is mandatory. If not, don't."])},
 {id:"mandy",d:a("Пано Космато","Panos Cosmatos"),h:121,r:4,g:3,gn:["gore","shock"],
  s:a("Лесоруб мстит культу за убитую подругу, и всё залито неоном и безумием.","A lumberjack avenges his girlfriend on a cult, and everything is soaked in neon and madness."),
  f:a(["Кейдж играет на пределе, а картинка похожа на обложку металл-альбома. Первая половина медленная, вторая взрывная.","Это странный, красивый и яростный фильм. Смотреть стоит ради настроения."],
      ["Cage plays at the limit, and the picture looks like a metal album cover. The first half is slow, the second explosive.","A strange, beautiful and furious film. Watch it for the mood."])},
 {id:"wickerman",d:a("Робин Хардин","Robin Hardy"),h:88,r:4.5,g:1,gn:["shock"],
  s:a("Полицейский приезжает на остров искать пропавшую девочку и находит праздник.","A policeman comes to an island to look for a missing girl and finds a festival."),
  f:a(["Фолк-хоррор до того, как жанр получил имя. Песни, обряды и спокойствие жителей делают финал неизбежным.","Фильм до сих пор действует и по-прежнему неприятен. Смотреть стоит оригинал."],
      ["Folk horror before the genre had a name. The songs, rituals and calm of the islanders make the ending inevitable.","The film still works and is still unpleasant. Watch the original."])},
 {id:"psycho",d:a("Альфред Хичкок","Alfred Hitchcock"),h:109,r:5,g:2,gn:["slasher","shock"],
  s:a("Секретарша, мотель и хозяин, который слишком любит свою мать.","A secretary, a motel and an owner who loves his mother too much."),
  f:a(["Хичкок создаёт образ и тип сюжета, который жанр повторяет до сих пор. Сцена в душе стала самым цитируемым эпизодом в кино.","Фильм остаётся образцом точности и монтажа."],
      ["Hitchcock creates an image and a plot structure the genre still repeats. The shower scene became the most quoted episode in cinema.","The film remains a model of precision and editing."])},
 {id:"carrie",d:a("Брайан Де Пальма","Brian De Palma"),h:98,r:4.5,g:2,gn:["shock"],
  s:a("Тихая школьница с телекинезом и выпускной бал, который закончится катастрофой.","A quiet schoolgirl with telekinesis and a prom that will end in catastrophe."),
  f:a(["Де Пальма делает из травли трагедию, а из финала шок. Сисси Спейсек играет трогательно и страшно одновременно.","Фильм остаётся одной из лучших экранизаций Стивена Кинга."],
      ["De Palma turns bullying into a tragedy and the finale into a shock. Sissy Spacek plays tenderly and frighteningly at once.","The film remains one of the best Stephen King adaptations."])},
 {id:"juon",d:a("Такаси Симицу","Takashi Shimizu"),h:92,r:4.5,g:2,gn:["jhorror","shock"],
  s:a("Дом, где умерла женщина, и проклятие, которое достаётся каждому, кто туда входит.","A house where a woman died, and a curse that claims everyone who steps inside."),
  f:a(["Симицу делит фильм на главы по именам жертв и перемешивает время, так что страх копится из обрывков. Хрип Кайако на лестнице стал одним из самых узнаваемых звуков жанра.","Фильм вырос из двух короткометражных видеофильмов 2000 года и сохранил их нищую правду: ничего не объясняется, зло просто есть. Смотреть лучше ночью и не одному."],
      ["Shimizu splits the film into chapters named after the victims and shuffles time, so dread builds from fragments. Kayako's rattle on the stairs became one of the genre's most recognisable sounds.","It grew out of two short video films from 2000 and kept their poor-man's honesty: nothing is explained, the evil simply is. Best watched at night and not alone."])},
 {id:"silenthill",d:a("Кристоф Ган","Christophe Gans"),h:200,r:3.5,g:3,gn:["shock","body"],
  s:a("Мать везёт больную дочь в туманный город, где вместо дождя идёт пепел, а сирена возвращает мир в кошмар.","A mother takes her sick daughter to a fog-bound town where ash falls instead of rain and a siren drags the world back into nightmare."),
  f:a(["Ган бережно переносит на экран игру Konami: пепел вместо снега, ржавая изнанка города по сигналу сирены, медсёстры и Пирамидоголовый. Музыку Акиры Ямаока, автора игры, он оставил, и именно она держит атмосферу.","Сюжет сложнее и путанее, чем нужно, а диалоги слабее картинки. Зато визуальный мир остаётся одним из самых цельных в экранизациях игр, и ради него фильм стоит смотреть."],
      ["Gans carefully carries the Konami game to the screen: ash instead of snow, the town's rusted underside at the siren's call, the nurses and Pyramid Head. He kept the music by Akira Yamaoka, the game's composer, and it is what holds the atmosphere together.","The plot is more tangled than it needs to be and the dialogue is weaker than the images. Still, the visual world remains one of the most coherent in video-game adaptations, and it is the reason to watch."])},
 {id:"darkwater",d:a("Хидэо Накато","Hideo Nakata"),h:101,r:4,g:1,gn:["jhorror"],
  s:a("Мать с дочерью въезжают в сырую квартиру, где с потолка течёт и в лифте пахнет прошлым.","A mother and daughter move into a damp apartment where the ceiling leaks and the lift smells of the past."),
  f:a(["Накато, автор «Звонка», снимает другой страх: бытовой, о съёмной квартире, разводе и материнской вине. Потолок, пятно, красная сумка и вода становятся символами.","Призрак здесь не мстит, а просит, и финал бьёт тихо. Это самый печальный фильм из волны J-Horror."],
      ["Nakata, the director of Ringu, films a different fear: a domestic one about a rented flat, divorce and a mother's guilt. The ceiling, the stain, the red bag and the water become symbols.","The ghost does not avenge here, it asks, and the ending hits quietly. It is the saddest film of the J-Horror wave."])},
 {id:"thering02",d:a("Гор Вербински","Gore Verbinski"),h:115,r:4,g:2,gn:["jhorror","shock"],
  s:a("Американский ремейк «Звонка»: кассета, колодец и семь дней.","The American remake of Ringu: a tape, a well and seven days."),
  f:a(["Вербински оставляет скелет истории и заменяет её холодную сухость мокрой, сине-зелёной картинкой. Кассета с бессвязными кадрами смотрится и сегодня неприятно.","Это редкий ремейк, который не стыдится оригинала. Выход Самары из телевизора давно стал самой цитируемой сценой в мире ужасов."],
      ["Verbinski keeps the skeleton of the story and swaps its dry coldness for a wet, blue-green picture. The tape of disjointed images still looks unpleasant today.","A rare remake that is not ashamed of its source. Samara climbing out of the TV has long been the most quoted scene in horror."])},
 {id:"grudge",d:a("Такаси Симицу","Takashi Shimizu"),h:91,r:3.5,g:2,gn:["jhorror"],
  s:a("Американская медсестра попадает в токийский дом, из которого не выходят.","An American nurse ends up in a Tokyo house nobody leaves."),
  f:a(["Симицу сам снял ремейк своего фильма, и это интересная попытка перенести японское проклятие в англоязычный мир. Структура глав сохранилась.","Он мягче и громче оригинала, но кадры с Тосио и Кайако по-прежнему действуют. Для знакомства с серией вполне подходит."],
      ["Shimizu remade his own film himself, an interesting attempt to carry a Japanese curse into the English-speaking world. The chapter structure survived.","It is softer and louder than the original, but the shots of Toshio and Kayako still work. A fine way into the series."])},
 {id:"noroi",d:a("Коэдзи Сираиси","Koji Shiraishi"),h:115,r:4.5,g:1,gn:["jhorror","shock"],
  s:a("Псевдодокументальный фильм о журналисте, который изучает странные звуки и пропавших людей.","A mockumentary about a journalist investigating strange sounds and missing people."),
  f:a(["Это найденная плёнка на японский лад: ток-шоу, архивные съёмки, медиум, ребёнок и древний ритуал складываются в один жуткий узор. Страх идёт от деталей на периферии кадра.","Фильм длинный и медленный, но терпение вознаграждается. Один из лучших образцов жанра фэйк-документа."],
      ["This is found footage the Japanese way: talk shows, archive clips, a medium, a child and an ancient ritual join into one frightening pattern. Fear comes from details at the edge of the frame.","The film is long and slow but patience pays off. One of the best examples of the fake-documentary genre."])},
 {id:"tomie",d:a("Атару Оикава","Ataru Oikawa"),h:100,r:4,g:2,gn:["jhorror","shock"],
  s:a("Красавица, которая не умирает, сводит мужчин с ума и возрождается из любых частей тела.","A beauty who does not die drives men mad and regrows from any piece of her body."),
  f:a(["Экранизация первых рассказов Дзюндзи Ито держится на идее: красота здесь заразна, а любовь хуже болезни. Фильм тише и печальнее, чем ожидаешь от истории о расчленении.","Мио Канно играет Томи без злодейской ухмылки, и от этого страшнее. Это точка входа во вселенную, из которой выросло больше десятка фильмов."],
      ["The adaptation of Junji Ito's first stories rests on one idea: beauty is contagious here and love is worse than disease. The film is quieter and sadder than you expect of a story about dismemberment.","Miho Kanno plays Tomie without a villain's smirk, which makes her scarier. It is the entry point to a universe that grew into more than a dozen films."])},
 {id:"uzumaki",d:a("Хигучинский","Higuchinsky"),h:90,r:4,g:1,gn:["jhorror","shock"],
  s:a("Город, где всё закручивается в спираль: дым, волосы, улитки и люди.","A town where everything twists into a spiral: smoke, hair, snails and people."),
  f:a(["Фильм 2000 года сжимает мангу Ито в 90 минут и честно выглядит как комикс: зелёная плёнка, косые углы, спирали в каждом кадре. Логика сна важнее сюжета.","Смотрится странно и местами нелепо, но настроение безумной навязчивой идеи передано точно. Аниме 2024 года лучше показывает масштаб, а фильм остаётся культовым безумием."],
      ["The 2000 film squeezes Ito's manga into 90 minutes and honestly looks like a comic: green-tinted film, tilted angles, spirals in every frame. Dream logic matters more than plot.","It looks strange and sometimes silly, but the mood of mad obsession is captured accurately. The 2024 anime shows the scale better, while the film remains a cult oddity."])},
 {id:"sadakokayako",d:a("Коэдзи Сираиси","Koji Shiraishi"),h:98,r:3.5,g:2,gn:["jhorror","trash"],
  s:a("Кассета и проклятый дом сталкиваются, и две девушки пытаются стравить двух призраков.","The tape and the cursed house collide, and two girls try to pit the two ghosts against each other."),
  f:a(["Кроссовер «Звонка» и «Проклятия» не стесняется собственной нелепости: сначала это обычный J-Horror, потом всё превращается в дерзкую комедию ужасов.","Для поклонников обеих серий это праздник: Садако и Кайако наконец встречаются лицом к лицу. Фильм не страшнее оригиналов, зато очень любит их."],
      ["The Ringu and Ju-On crossover is not shy about its own absurdity: first it is standard J-Horror, then it turns into a cheeky horror comedy.","For fans of both series it is a feast: Sadako and Kayako finally meet face to face. The film is not scarier than the originals, but it loves them dearly."])},
 {id:"babadook",d:a("Дженнифер Кент","Jennifer Kent"),h:270,r:4.5,g:1,gn:["shock"],
  s:a("Книжка-страшилка, которую нельзя закрыть, и мать, которая слишком устала, чтобы защищаться.","A pop-up book that cannot be closed, and a mother too exhausted to defend herself."),
  f:a(["Монстр в чёрном плаще и цилиндре приходит в дом вдовы и её беспокойного сына как гость, которого не прогнать. Кент снимает горе как вторжение: оно шепчет из-за стены, не даёт спать и постепенно меняет саму мать.","Эсси Дэвис играет усталость так, что неловко смотреть. А финал, где с чудовищем не борются, а учатся жить, остаётся одним из самых умных в современном хорроре."],
      ["A monster in a black coat and top hat arrives in the home of a widow and her restless son like a guest who cannot be thrown out. Kent films grief as an intrusion: it whispers through the wall, steals sleep and slowly changes the mother herself.","Essie Davis plays exhaustion so truthfully it is uncomfortable to watch. And the ending, where the creature is not fought but learned to live with, remains one of the smartest in modern horror."])},
 {id:"itfollows",d:a("Дэвид Роберт Митчелл","David Robert Mitchell"),h:200,r:4.5,g:1,gn:["shock"],
  s:a("Проклятие, которое передаётся и никогда не бежит, а просто идёт к вам.","A curse that is passed on and never runs, it simply walks toward you."),
  f:a(["Идея проста, как детская страшилка: нечто медленно идёт за героиней и принимает облик любого человека. Митчелл превращает её в кошмар, снимая пригород Детройта длинными планами, в которых за спиной всегда стоит кто-то лишний.","Синтезаторный саундтрек Disasterpiece держит напряжение даже в пустом кадре. Не нужно объяснять правила: мы сами начинаем искать идущего человека на заднем плане."],
      ["The idea is as simple as a campfire tale: something slowly follows the heroine and takes the form of any person. Mitchell turns it into nightmare by shooting Detroit suburbs in long takes where someone extra always stands behind you.","The Disasterpiece synth score holds the tension even in an empty frame. The rules need no explaining: we start scanning the background for a walking figure ourselves."])},
 {id:"witch",d:a("Роберт Эггерс","Robert Eggers"),h:40,r:4.5,g:1,gn:["shock"],
  s:a("Пуританская семья на краю леса, коза по имени Чёрный Филипп и страх, которого не отличить от веры.","A Puritan family at the edge of the woods, a goat named Black Phillip and a fear that cannot be told from faith."),
  f:a(["Эггерс строит фильм на дневниках и судебных протоколах XVII века, и язык, быт и страхи героев звучат так, будто их не придумали. Ведьма здесь не метафора и не оправдание: семью разрушает сама вера в то, что кто-то должен быть виноват.","Аня Тейлор-Джой в роли Томасин показывает, как человека загоняют в роль, которую ему приписали. Тёмный, почти бесцветный образ леса и тяжёлый хор в саундтреке дают ощущение настоящего обряда."],
      ["Eggers builds the film on seventeenth-century diaries and court records, and the language, daily life and fears sound as if they were not invented. The witch is neither a metaphor nor an excuse: it is the belief that someone must be to blame that destroys the family.","Anya Taylor-Joy as Thomasin shows how a person is pushed into the role others assigned her. The dark, nearly colourless forest and the heavy choir in the score feel like a real rite."])},
 {id:"midsommar",d:a("Ари Астер","Ari Aster"),h:55,r:4,g:3,gn:["shock"],
  s:a("Ужас при свете дня: шведская коммуна, цветочные венки и расставание, которое не хочет заканчиваться.","Horror in broad daylight: a Swedish commune, flower crowns and a breakup that refuses to end."),
  f:a(["Астер делает из праздника летнего солнцестояния кошмар без единой тёмной комнаты. Всё нарочито яркое, чистое и приветливое, и именно поэтому каждая жестокость кажется ещё откровеннее.","В центре история разваливающихся отношений. Флоренс Пью играет горе так, что финал читается и как катастрофа, и как странное освобождение. Режиссёрская версия длиннее и дарит больше места странным обрядам."],
      ["Aster turns a midsummer festival into a nightmare without a single dark room. Everything is deliberately bright, clean and welcoming, which makes every cruelty feel all the more exposed.","At its centre is a relationship falling apart. Florence Pugh plays grief so that the ending reads both as catastrophe and as a strange liberation. The director's cut is longer and gives more room to the odd rites."])},
 {id:"dontlooknow",d:a("Николас Роуг","Nicolas Roeg"),h:350,r:5,g:1,gn:["shock"],
  s:a("Венеция зимой, красный плащ и горе, которое видит то, чего не должно видеть.","Venice in winter, a red coat and grief that sees what it should not."),
  f:a(["Роуг монтирует так, что прошлое, будущее и предчувствие смешиваются в одно целое. По мотивам рассказа Дафны дю Морье он превращает потерю дочери в лабиринт каналов, зеркал и красных пятен, где каждая деталь слегка не на месте.","Дональд Сазерленд и Джули Кристи играют людей, которые пытаются пережить беду и каждый по-своему спотыкаются о неё. Финал, один из самых шокирующих в британском кино, не объясняет ничего и именно этим остаётся навсегда."],
      ["Roeg edits so that past, future and premonition blend into one. Adapting a Daphne du Maurier story, he turns the loss of a daughter into a maze of canals, mirrors and flecks of red where every detail sits slightly wrong.","Donald Sutherland and Julie Christie play people trying to survive a tragedy, each stumbling over it in their own way. The ending, one of the most shocking in British cinema, explains nothing, and that is why it stays forever."])},
 {id:"rosemary",d:a("Роман Полански","Roman Polanski"),h:20,r:5,g:0,gn:["shock"],
  s:a("Нью-йоркский дом, дружелюбные соседи и беременность, в которой что-то не так.","A New York apartment building, friendly neighbours and a pregnancy in which something is wrong."),
  f:a(["Полански не показывает ничего чудовищного. Страшнее всего приветливые старики за стеной, чай с горьким привкусом и муж, который слишком быстро соглашается со всем. Ощущение, что вокруг героини сомкнулся заговор, а ей никто не верит, строится на мелочах.","Миа Фэрроу хрупка и от этого убедительна. Руфь Гордон получила за роль соседки «Оскар», а дом Дакота на Манхэттене сыграл не хуже людей. Это хоррор, который до сих пор действует без единой капли крови."],
      ["Polanski shows nothing monstrous. What frightens most are the friendly old couple next door, a tea with a bitter aftertaste and a husband who agrees too quickly with everything. The feeling that a conspiracy has closed around the heroine while no one believes her is built from small things.","Mia Farrow is fragile and therefore convincing. Ruth Gordon won an Oscar as the neighbour, and the Dakota building in Manhattan acts as well as the people. A horror film that still works without a drop of blood."])},
 {id:"peeping",d:a("Майкл Пауэлл","Michael Powell"),h:330,r:5,g:1,gn:["shock"],
  s:a("Убийца с кинокамерой, снятый тем же годом, что и «Психо», и чуть не уничтоживший карьеру режиссёра.","A killer with a movie camera, released the same year as Psycho and nearly ruining its director's career."),
  f:a(["Пауэлл, автор «Красных башмачков», делает героем застенчивого оператора, который снимает лица своих жертв в момент страха. Камера здесь не свидетель, а орудие, и зритель вдруг оказывается в одной роли с убийцей.","Британская критика встретила фильм яростно, и карьера Пауэлла в стране пошла под откос. Позже его переоценили как один из самых умных фильмов о кино и о взгляде как насилии."],
      ["Powell, the director of The Red Shoes, makes his hero a shy camera operator who films the faces of victims at the moment of fear. The camera here is not a witness but a weapon, and the viewer suddenly shares the killer's role.","British critics greeted the film with fury and Powell's career in the country went downhill. It was later reappraised as one of the smartest films about cinema and about looking as violence."])},
 {id:"eyeswithout",d:a("Жорж Франжю","Georges Franju"),h:180,r:5,g:3,gn:["body","shock"],
  s:a("Хирург, дочь в белой маске и холодная поэзия пересадки лица.","A surgeon, a daughter in a white mask and the cold poetry of a face transplant."),
  f:a(["Франжю снимает кошмар как медицинский отчёт и сказку одновременно. Девушка в гладкой белой маске, живущая в загородном доме отца, стала одним из самых узнаваемых образов европейского ужаса, а музыка Мориса Жарра придаёт сцене карусельную, почти нежную тоску.","Сцена операции показана спокойно и подробно, без музыки, и в 1960-м шокировала публику. Но главный нерв фильма в другом: он о любви, которая стала формой собственничества."],
      ["Franju films nightmare as a medical report and a fairy tale at once. A girl in a smooth white mask living in her father's country house became one of the most recognisable images of European horror, and Maurice Jarre's music gives the scene a carousel-like, almost tender sorrow.","The surgery scene is shown calmly and in detail, and it shocked audiences in 1960. But the film's main nerve lies elsewhere: it is about love turning into possession."])},
 {id:"blacksunday",d:a("Марио Бава","Mario Bava"),h:210,r:4.5,g:2,gn:["shock"],
  s:a("Ведьма в шипастой маске, чёрно-белая готика и рождение итальянского ужаса.","A witch in a spiked mask, black-and-white gothic and the birth of Italian horror."),
  f:a(["Первая самостоятельная режиссёрская работа Бавы, снятая по мотивам Гоголя, сразу задала тон всему итальянскому готическому кино. Открывающая сцена с железной маской, пробитой гвоздями изнутри, шокировала цензоров многих стран.","Барбара Стил играет и ведьму, и её потомка, и благодаря её взгляду фильм держится на двух противоположных полюсах: безжалостной красоте и холодной власти. Туман, склепы и свечи Бава превращает в чистую живопись."],
      ["Bava's first full solo directing job, loosely based on Gogol, immediately set the tone for all Italian gothic cinema. The opening scene with an iron mask hammered with spikes from the inside shocked censors in many countries.","Barbara Steele plays both the witch and her descendant, and her gaze holds the film between two poles: ruthless beauty and cold power. Fog, crypts and candles are turned into pure painting by Bava."])},
 {id:"nightlive",d:a("Джордж Ромеро","George A. Romero"),h:0,r:5,g:3,gn:["gore","shock"],
  s:a("Несколько человек в доме на ферме и толпа за окнами, которая просто стоит и ждёт.","A handful of people in a farmhouse and a crowd outside the windows that simply stands and waits."),
  f:a(["Бюджет был ничтожным, плёнка чёрно-белой, актёры почти непрофессиональными. Но Ромеро превратил это в силу: репортажная съёмка и серый свет делают происходящее похожим на новостной выпуск, и фильм ощущается реальнее большинства студийных хорроров.","Герой Дуэйна Джонса, чернокожий мужчина, который пытается организовать оборону, и финал, в котором его убивают по ошибке, сделали фильм горьким комментарием к Америке 1968-го. С него началась вся современная зомби-традиция."],
      ["The budget was tiny, the film stock black-and-white, the actors nearly amateurs. Romero turned that into strength: the documentary camera and grey light make events look like a news bulletin, and the film feels more real than most studio horror.","Duane Jones's hero, a Black man trying to organise the defence, and the finale in which he is killed by mistake made this a bitter comment on America in 1968. The entire modern zombie tradition starts here."])},
 {id:"wailing",d:a("На Хон-джин","Na Hong-jin"),h:130,r:4.5,g:3,gn:["shock"],
  s:a("Корейская деревня, загадочная болезнь и чужак, в которого никто не знает, верить или нет.","A Korean village, a mysterious sickness and a stranger nobody knows whether to believe."),
  f:a(["Начинается как провинциальная детективная комедия с неуклюжим полицейским, а потом медленно проваливается в мистику, шаманские обряды и сомнение в каждом, кто появляется в кадре. Ужас здесь в том, что нельзя понять, кто прав.","На Хон-джин ломает привычный жанровый контракт: каждая версия правдоподобна, и каждая оказывается ловушкой. Две с половиной часа держатся на одном ощущении, что вы опоздали сделать выбор."],
      ["It starts as a provincial detective comedy with a clumsy policeman, then slowly sinks into mysticism, shaman rites and doubt about everyone who appears. The horror is that you cannot tell who is right.","Na Hong-jin breaks the usual genre contract: every version is plausible and every one turns out to be a trap. Two and a half hours rest on the single feeling that you were too late to choose."])},
 {id:"letmein",d:a("Томас Альфредсон","Tomas Alfredson"),h:215,r:4.5,g:2,gn:["shock"],
  s:a("Дружба двух детей в заснеженном пригороде Стокгольма, одна из которых питается кровью.","A friendship between two children in a snowy Stockholm suburb, one of whom lives on blood."),
  f:a(["По роману Юна Айвиде Линдквиста Альфредсон снимает вампирскую историю как хрупкое повествование об одиночестве. Холодная палитра, пустые дворы и редкие кровавые вспышки создают ощущение, что чудовищем здесь может быть кто угодно, включая добрых людей.","Сцена в бассейне, показанная почти без звука, остаётся одной из самых сильных в жанре. Это фильм о том, что любовь и жестокость способны уживаться в одном человеке."],
      ["Adapting John Ajvide Lindqvist's novel, Alfredson films a vampire story as a fragile tale of loneliness. A cold palette, empty courtyards and rare flashes of blood suggest that the monster could be anyone, including kind people.","The pool scene, shown almost without sound, remains one of the strongest in the genre. It is a film about love and cruelty living in the same person."])},
 {id:"descent",d:a("Нил Маршалл","Neil Marshall"),h:25,r:4.5,g:3,gn:["gore","shock"],
  s:a("Шесть подруг, пещера без выхода и то, что живёт в темноте.","Six friends, a cave with no exit and what lives in the dark."),
  f:a(["Маршалл делает клаустрофобию главным врагом: узкие проходы, обвалы и свет налобных фонарей, который выхватывает ровно столько, сколько нужно. Когда в темноте появляются существа, фильм уже довёл зрителя до состояния, когда любая тень кажется угрозой.","Только женский состав сделал историю о дружбе, вине и выживании неожиданно интимной. Последние минуты бьют по нервам сильнее любого скримера."],
      ["Marshall makes claustrophobia the main enemy: narrow passages, collapses and headlamp beams that reveal exactly as much as needed. By the time creatures appear in the dark, the film has driven the viewer to a state where any shadow looks like a threat.","An all-female cast makes the story of friendship, guilt and survival unexpectedly intimate. The final minutes hit the nerves harder than any jump scare."])},
 {id:"kuroneko",d:a("Канэто Синдо","Kaneto Shindo"),h:230,r:4.5,g:1,gn:["jhorror"],
  s:a("Две женщины, убитые солдатами, возвращаются кошками, чтобы мстить самураям.","Two women killed by soldiers return as cats to take revenge on samurai."),
  f:a(["Синдо, автор «Онибабы», снова делает из японского фольклора острую социальную притчу. Мать и невестка, которых изнасиловали и убили, превращаются в призраков и заманивают самураев в дом посреди бамбуковой рощи.","Контрастная чёрно-белая съёмка и текучее движение призраков дают сценам почти театральную красоту. Это история о мести, которая не освобождает, а превращает мстителя в то, против чего он боролся."],
      ["Shindo, author of Onibaba, again turns Japanese folklore into a sharp social parable. A mother and daughter-in-law, raped and killed, become ghosts and lure samurai into a house in the middle of a bamboo grove.","High-contrast black-and-white photography and the fluid movement of the ghosts give the scenes an almost theatrical beauty. A story of revenge that does not free the avenger but turns him into what he fought."])},
 {id:"jigoku",d:a("Нобуо Накагава","Nobuo Nakagawa"),h:10,r:4.5,g:3,gn:["jhorror","gore"],
  s:a("Студент, цепь случайных смертей и путешествие по буддийскому аду.","A student, a chain of accidental deaths and a journey through a Buddhist hell."),
  f:a(["Первая половина показывает, как мелкие грехи цепляются друг за друга и приводят героя к гибели. Вторая отдана аду: красные реки, горы тел и мучения, снятые в 1960 году с изобретательностью, которая до сих пор удивляет.","Накагава знал, что делает: он поставил в центр не экзорцизм, а ответственность. Фильм считают предшественником японского хоррора с кровью и картины, которая вдохновила многих авторов."],
      ["The first half shows how small sins cling to one another and lead the hero to ruin. The second belongs to hell: red rivers, mountains of bodies and torments filmed in 1960 with an inventiveness that still surprises.","Nakagawa knew what he was doing: at the centre he put not exorcism but responsibility. The film is considered a forerunner of Japanese horror with blood and an inspiration for many authors."])},
 {id:"haxan",d:a("Бенджамин Кристенсен","Benjamin Christensen"),h:35,r:4.5,g:1,gn:["shock"],
  s:a("Немое эссе о ведьмах, инквизиции и том, как страх превращается в болезнь.","A silent essay on witches, the Inquisition and how fear turns into illness."),
  f:a(["Кристенсен соединил лекцию, документальные вставки и разыгранные сцены с демонами, ритуалами и пытками. Сам режиссёр сыграл Дьявола, а фильм получился настолько откровенным, что во многих странах его резали или запрещали.","В финале он предлагает неожиданную мысль: средневековые «ведьмы» вполне могли быть больными людьми, а не слугами зла. Сто лет спустя фильм остаётся удивительно смелым и визуально богатым."],
      ["Christensen combined lecture, documentary inserts and staged scenes of demons, rituals and torture. The director himself played the Devil, and the film was so explicit that it was cut or banned in many countries.","In its final part it offers an unexpected thought: medieval “witches” could well have been sick people rather than servants of evil. A century later the film remains astonishingly bold and visually rich."])},
 {id:"caligari",d:a("Роберт Вине","Robert Wiene"),h:160,r:5,g:0,gn:["shock"],
  s:a("Сомнамбула, доктор и город, нарисованный косыми линиями.","A somnambulist, a doctor and a town drawn in slanted lines."),
  f:a(["Декорации «Кабинета доктора Калигари» написаны прямо на холсте: кривые улицы, острые окна и тени, нарисованные на стенах. Это не фон, а состояние героя, и именно с этим фильмом экспрессионизм пришёл в кино.","Конрад Фейдт в роли Чезаре, существа, которое спит и убивает, дал одно из первых лиц кинематографического ужаса. Рамка с неожиданным поворотом в финале сделала историю одним из первых фильмов с ненадёжным рассказчиком."],
      ["The sets of The Cabinet of Dr. Caligari are painted straight onto canvas: crooked streets, sharp windows and shadows drawn on the walls. This is not a backdrop but the state of the hero, and it was with this film that expressionism came to cinema.","Conrad Veidt as Cesare, a creature who sleeps and kills, gave one of the first faces of cinematic horror. The frame story with its late twist made it one of the earliest films with an unreliable narrator."])},
 {id:"carnival",d:a("Герк Харви","Herk Harvey"),h:190,r:4,g:0,gn:["shock"],
  s:a("Женщина, пережившая аварию, и призраки, которые начинают её замечать.","A woman who survived a crash and ghosts who begin to notice her."),
  f:a(["Малобюджетный фильм, снятый в Канзасе и Юте за считаные недели, держится на образе заброшенного павильона у озера и на органной музыке. Героиня не может избавиться от ощущения, что её видят только мертвецы.","Позднее его назвали вдохновением для многих режиссёров, от Ромеро до Линча. Эффект тут строится не на крови, а на ощущении, что мир перестаёт отвечать человеку."],
      ["A low-budget film shot in Kansas and Utah in a matter of weeks, it rests on the image of an abandoned lakeside pavilion and organ music. The heroine cannot shake the feeling that only the dead can see her.","It has since been named as an inspiration for many directors, from Romero to Lynch. The effect is built not on blood but on the sense that the world has stopped answering the person."])},
 {id:"haunting63",d:a("Роберт Уайз","Robert Wise"),h:140,r:5,g:0,gn:["shock"],
  s:a("Дом, который не просто населён, а выбирает себе жильцов.","A house that is not merely haunted but selects its occupants."),
  f:a(["По роману Ширли Джексон Уайз снимает дом Хилл-хаус как живое существо. Широкоугольные объективы искривляют коридоры, камера никогда не показывает призрака, а шумы за стеной звучат так, будто их слышит только героиня.","Джули Харрис играет Элеонор уязвимой, одинокой и потому доступной для дома. Страх тут растёт из психологии, а не из эффектов, и картина до сих пор остаётся образцом того, как строится сверхъестественный ужас."],
      ["Adapting Shirley Jackson's novel, Wise films Hill House as a living creature. Wide-angle lenses bend the corridors, the camera never shows a ghost, and noises behind the wall sound as though only the heroine can hear them.","Julie Harris plays Eleanor as vulnerable, lonely and therefore open to the house. Fear grows from psychology rather than effects, and the film remains a model of how supernatural horror is built."])},
 {id:"kwaidan",d:a("Масаки Кобаяси","Masaki Kobayashi"),h:300,r:5,g:0,gn:["jhorror"],
  s:a("Четыре легенды по Лафкадио Хирну в декорациях, нарисованных как японские гравюры.","Four legends after Lafcadio Hearn in sets painted like Japanese prints."),
  f:a(["Кобаяси снимает четыре истории: «Чёрные волосы», «Снежная женщина», «Безухий Хоити» и «В чашке чая». Каждая выстроена как картина: студия, расписанное небо, густые цвета и неторопливый ритм.","Фильм получил награду жюри в Каннах и номинацию на «Оскар». Его ужас построен на красоте, а не на вспышке: это работа, которая учит видеть в страхе форму."],
      ["Kobayashi films four stories: Black Hair, The Woman of the Snow, Hoichi the Earless and In a Cup of Tea. Each is built like a painting: a studio, painted skies, deep colours and an unhurried rhythm.","The film won the Special Jury Prize at Cannes and an Oscar nomination. Its horror is built on beauty rather than shock: a work that teaches you to see form in fear."])},
 {id:"opera",d:a("Дарио Ардженто","Dario Argento"),h:355,r:4,g:4,gn:["giallo","gore"],
  s:a("Певица, убийца, который заставляет её смотреть, и иглы под веками.","A singer, a killer who forces her to watch and needles under her eyelids."),
  f:a(["Начинающая оперная певица получает главную партию в «Макбете», и за ней начинает охоту убийца. Ардженто придумывает самую жестокую находку в своей карьере: героине приклеивают иглы под глаза, чтобы она не смогла отвернуться.","Камера скользит по залу, пролетает под потолком и вдруг оказывается внутри вороньего глаза. Сюжет местами шатается, но визуальная смелость и музыка делают фильм одним из последних больших джалло."],
      ["A young opera singer lands the lead in Macbeth and a killer begins to hunt her. Argento comes up with the cruellest idea of his career: needles taped under the heroine's eyes so she cannot look away.","The camera glides across the auditorium, soars under the ceiling and suddenly ends up inside a raven's eye. The plot wobbles in places, but visual daring and music make it one of the last great gialli."])},
 {id:"traintobusan",d:a("Ён Сан-хо","Yeon Sang-ho"),h:5,r:4,g:2,gn:["gore","shock"],
  s:a("Скоростной поезд, толпа зомби и отец, который учится быть рядом с дочерью.","A high-speed train, a horde of zombies and a father learning to be present for his daughter."),
  f:a(["Замкнутое пространство вагонов работает как идеальная ловушка, а зомби здесь быстрые и опасные именно толпой. Ён Сан-хо ведёт историю как цепочку выборов: кто остаётся, кто закрывает дверь, кто не успевает.","Мужчина, который привык думать только о себе, постепенно меняется на фоне катастрофы. Социальная сатира про эгоизм и страх делает фильм сильнее обычного боевика с мертвецами."],
      ["The closed space of the carriages works as a perfect trap, and the zombies are dangerous exactly as a crowd. Yeon Sang-ho builds the story as a chain of choices: who stays, who shuts the door, who does not make it.","A man used to thinking only of himself gradually changes amid catastrophe. The social satire about selfishness and fear makes the film stronger than a usual action film with the undead."])},
 {id:"isawdevil",d:a("Ким Чжи-ун","Kim Jee-woon"),h:355,r:4.5,g:5,gn:["extreme","shock"],
  s:a("Агент отпускает серийного убийцу живым, чтобы мстить снова и снова.","An agent lets a serial killer go alive so he can take revenge again and again."),
  f:a(["После гибели невесты агент решает поймать убийцу и вместо ареста раз за разом калечит его и отпускает. Ли Бён Хон и Чхве Мин Сик играют две стороны одной одержимости, и граница между ними медленно стирается.","Фильм жесток и нарочито красив, и именно этим мучает: зритель сначала хочет мести, а затем понимает, во что она превращает героя. Финальная сцена остаётся одной из самых тяжёлых в азиатском кино."],
      ["After his fiancée's death an agent decides to catch the killer and instead of arresting him mutilates him again and again and lets him go. Lee Byung-hun and Choi Min-sik play two sides of one obsession, and the line between them slowly fades.","The film is brutal and deliberately beautiful, and that is what torments: first the viewer wants revenge, then understands what it makes of the hero. The final scene remains one of the heaviest in Asian cinema."])},
 {id:"sinners",d:a("Райан Куглер","Ryan Coogler"),h:25,r:4.5,g:3,gn:["shock"],
  s:a("Братья-близнецы открывают джук-джойнт в Миссисипи 1932 года, и ночью к ним приходит то, что слышит музыку.","Twin brothers open a juke joint in 1932 Mississippi, and at night something that hears the music comes to visit."),
  f:a(["Куглер соединяет вампирский хоррор с историей чернокожей Америки и блюзом. Майкл Б. Джордан играет сразу двух братьев, а музыка тут не фон, а способ связать людей, традиции и боль.","Фильм начинается как тёплая, живая история сообщества, а затем переходит в ночной кошмар. Редкий случай, когда большое кино о монстрах умеет и пугать, и говорить о памяти и цене чужой свободы."],
      ["Coogler combines vampire horror with Black American history and blues. Michael B. Jordan plays both brothers, and music here is not a backdrop but a way of binding people, tradition and pain.","The film starts as a warm, living story of a community, then turns into a night-long nightmare. A rare big monster movie that can both frighten and talk about memory and the price of other people's freedom."])},
 {id:"weapons",d:a("Зак Креггер","Zach Cregger"),h:110,r:4,g:2,gn:["shock"],
  s:a("В 2:17 ночи семнадцать детей из одного класса встали с кроватей и исчезли.","At 2:17 a.m. seventeen children from one classroom got out of bed and vanished."),
  f:a(["Креггер рассказывает историю кусками, от лица разных жителей городка: учительницы, отца, полицейского, наркомана. Каждый кусок меняет ракурс и подкидывает новую причину бояться.","Фильм ловко переходит от тревожной драмы к гротеску и чёрному юмору, а Эми Мэдиган в роли тёти Глэдис остаётся едва ли не самым запоминающимся образом года. Загадка постепенно раскрывается, но тревога остаётся."],
      ["Cregger tells the story in pieces, through different townsfolk: a teacher, a father, a policeman, an addict. Each piece changes the angle and adds a new reason to be afraid.","The film deftly shifts from uneasy drama to grotesque and black humour, and Amy Madigan as Aunt Gladys is perhaps the most memorable figure of the year. The mystery gradually unfolds, but the unease stays."])},
 {id:"longlegs",d:a("Оз Перкинс","Osgood Perkins"),h:350,r:4,g:1,gn:["shock"],
  s:a("Молодая агент ФБР и серия убийств, где место преступления всегда выглядит как ритуал.","A young FBI agent and a series of murders where the crime scene always looks like a ritual."),
  f:a(["Перкинс строит фильм на ощущении, что мы смотрим на привычный триллер сквозь мутное стекло. Мейка Монро играет героиню тихо и напряжённо, а Николас Кейдж в гриме почти неузнаваем и пугает именно тем, что редко появляется в кадре.","Красный, серый и тяжёлая тишина работают сильнее любых нарочитых скримеров, а нити сюжета постепенно сходятся к семейной тайне."],
      ["Perkins builds the film on the sense that we are watching a familiar thriller through frosted glass. Maika Monroe plays the heroine quietly and tensely, and Nicolas Cage in heavy makeup is almost unrecognisable and frightening precisely because he is rarely on screen.","Red, grey and heavy silence work better than any deliberate jump scares, and the plot threads gradually converge on a family secret."])},
 {id:"nosferatu",d:a("Роберт Эггерс","Robert Eggers"),h:240,r:4.5,g:2,gn:["shock"],
  s:a("Новая версия классики 1922 года: вампир, одержимый женщиной, которая ещё девочкой его позвала.","A new take on the 1922 classic: a vampire obsessed with a woman who called him when she was still a girl."),
  f:a(["Эггерс снимает готическую сказку в духе Мурнау, но с современной телесностью. Орлок в исполнении Билла Скарсгарда звучит и выглядит как нечто, давно и окончательно мёртвое, а Лили-Роуз Депп играет Эллен как женщину, которая слишком хорошо знает, что ей нужно сделать.","Тёмные интерьеры, свечи и поразительные ночные пейзажи складываются в картину эпохи, в которой страх был вопросом веры. Это бережный, но не музейный римейк."],
      ["Eggers makes a gothic tale in the spirit of Murnau, but with modern physicality. Bill Skarsgård's Orlok sounds and looks like something long and finally dead, and Lily-Rose Depp plays Ellen as a woman who knows too well what she must do.","Dark interiors, candles and striking night landscapes add up to a picture of an age in which fear was a matter of faith. A careful but not museum-like remake."])},
 {id:"angelheart",d:a("Алан Паркер","Alan Parker"),h:15,r:4.5,g:2,gn:["shock"],
  s:a("Частный детектив ищет пропавшего певца в Нью-Йорке и Новом Орлеане 1955 года, и дело становится всё менее человеческим.","A private eye hunts for a missing singer in 1955 New York and New Orleans, and the case becomes less and less human."),
  f:a(["Паркер скрещивает нуар и оккультный хоррор: дождь, влажная жара юга, вентиляторы под потолком и тяжёлая тень над каждой сценой. Микки Рурк играет Гарри Энджела, человека, который ищет ответы и всё меньше хочет их знать.","Роберт Де Ниро в роли Луиса Сайфера появляется нечасто, но запоминается навсегда. Финал, неожиданный и фатальный, делает фильм одним из самых цельных гибридов жанров."],
      ["Parker crosses noir with occult horror: rain, the humid heat of the South, ceiling fans and a heavy shadow over every scene. Mickey Rourke plays Harry Angel, a man who seeks answers and wants them less and less.","Robert De Niro as Louis Cyphre appears rarely but is unforgettable. The ending, unexpected and fatal, makes the film one of the most coherent genre hybrids."])},
 {id:"devilsback",d:a("Гильермо дель Торо","Guillermo del Toro"),h:40,r:4.5,g:2,gn:["shock"],
  s:a("Приют времён гражданской войны в Испании, непорванная бомба во дворе и призрак мальчика в подвале.","An orphanage in the Spanish Civil War, an unexploded bomb in the courtyard and the ghost of a boy in the cellar."),
  f:a(["Дель Торо делает призрака не угрозой, а свидетелем: Сантьяго не столько пугает, сколько просит быть услышанным. Бомба посреди двора выглядит как предупреждение о том, что война уже проникла в дом, а взрослые давно перестали быть защитой.","Это более тихий и тёплый фильм, чем «Лабиринт Фавна», но с тем же пониманием: настоящих чудовищ в такие времена производят люди. Грусть здесь важнее страха."],
      ["Del Toro makes the ghost not a threat but a witness: Santi does not so much frighten as ask to be heard. The bomb in the middle of the courtyard looks like a warning that war has already entered the house and adults have long stopped being protection.","It is a quieter and warmer film than Pan's Labyrinth, but with the same understanding: in such times real monsters are made by people. Sadness matters more than fear here."])},
 {id:"jaws",d:a("Стивен Спилберг","Steven Spielberg"),h:205,r:5,g:1,gn:["shock"],
  s:a("Курортный городок, огромная акула и три человека на лодке, которой уже тесно.","A resort town, an enormous shark and three men on a boat that is already too small."),
  f:a(["Спилберг долго почти не показывает акулу: механическая «Брюс» постоянно ломалась на съёмках, и фильм построен на жёлтых бочках, тёмной воде и лицах людей на берегу. Двухнотная тема Джона Уильямса делает остальное: страх приходит раньше чудовища.", "Вторая половина превращается в морскую повесть о Квинте, Броуди и Хуппере. Здесь фильм становится по-настоящему великим: три разных человека, одна лодка и монолог об «Индианаполисе», после которого шутки заканчиваются."],
      ["Spielberg shows the shark very little for a long time: the mechanical “Bruce” kept breaking down during the shoot, so the film is built on yellow barrels, dark water and the faces of people on the shore. John Williams's two-note theme does the rest: fear arrives before the monster.", "The second half turns into a sea story about Quint, Brody and Hooper. This is where the film becomes truly great: three different men, one boat and a monologue about the Indianapolis after which the jokes stop."])},
 {id:"lostboys",d:a("Джоэл Шумахер","Joel Schumacher"),h:290,r:4,g:2,gn:["shock"],
  s:a("Семья переезжает в приморский городок, где по ночам на пирсе собирается банда байкеров с очень острыми зубами.","A family moves to a seaside town where a gang of bikers with very sharp teeth gathers on the pier at night."),
  f:a(["Шумахер снимает вампиров как подростковую банду: кожа, мотоциклы, неон и вечная ночь Санта-Карлы, городка, который в фильме прозвали столицей убийств. Кифер Сазерленд в роли Дэвида до сих пор определяет, как выглядит вампир-подросток.", "Сюжет держат два брата и лавка комиксов, где мальчишки понимают, с кем имеют дело, лучше взрослых. Фильм смешной, но не издевается над страхом, а саундтрек и приморский воздух делают его одним из самых узнаваемых образов восьмидесятых."],
      ["Schumacher films vampires as a teenage gang: leather, motorbikes, neon and the endless night of Santa Carla, a town the film nicknames the murder capital. Kiefer Sutherland as David still defines what a teenage vampire looks like.", "The plot rests on two brothers and a comic-book shop where the boys understand what they are dealing with better than the adults do. The film is funny but never mocks fear, and the soundtrack and sea air make it one of the most recognisable images of the eighties."])},
 {id:"blairwitch",d:a("Дэниел Мирик и Эдуардо Санчес","Daniel Myrick and Eduardo Sánchez"),h:95,r:4,g:0,gn:["shock"],
  s:a("Трое студентов уходят в мэрилендский лес снимать документальный фильм о ведьме и больше не возвращаются.","Three students walk into a Maryland forest to shoot a documentary about a witch and never come back."),
  f:a(["Фильм почти ничего не показывает: палатка, звуки за пределами света фонаря, палочные фигурки на деревьях. Всё остальное достраивает зритель, и этого оказывается страшнее любого монстра.", "Это не первый найденный материал в кино, но именно «Ведьма из Блэр» превратила жанр в массовое явление. Даже когда актёры раздражают друг друга и зрителя, это работает: настоящие люди в настоящем лесу, которым нечем защититься."],
      ["The film shows almost nothing: a tent, sounds beyond the reach of a torch, stick figures hanging in trees. The viewer builds the rest, and it turns out to be scarier than any monster.", "It was not the first found-footage film, but The Blair Witch Project turned the form into a mass phenomenon. Even when the actors get on each other's nerves and the viewer's, it works: real people in a real forest with nothing to defend themselves."])},
 {id:"americanwerewolf",d:a("Джон Лэндис","John Landis"),h:30,r:4.5,g:3,gn:["body"],
  s:a("Двое американских туристов на йоркширских болотах, и один из них возвращается домой с проклятием.","Two American backpackers on the Yorkshire moors, and one of them goes home with a curse."),
  f:a(["Лэндис смешивает комедию, мелодраму и ужас, и ни одна из частей не мешает другой. Превращение Дэвида Наутона в волка, сделанное практическими эффектами, принесло Рику Бейкеру первую в истории премию «Оскар» за грим.", "Лучшая идея фильма — мёртвый друг Джек, который с каждой встречей выглядит всё хуже и всё настойчивее просит прекратить это. Юмор здесь не отвлекает от страха, а делает финал ещё резче."],
      ["Landis mixes comedy, romance and horror, and none of them gets in the way of the others. David Naughton's transformation, done with practical effects, won Rick Baker the first Academy Award ever given for make-up.", "The best idea in the film is the dead friend Jack, who looks worse with every visit and keeps asking David to end it. The humour never distracts from the fear; it makes the ending sharper."])},
 {id:"poltergeist",d:a("Тоби Хупер","Tobe Hooper"),h:260,r:4,g:1,gn:["shock"],
  s:a("Обычный пригородный дом, телевизор с белым шумом и девочка, которая слышит что-то за экраном.","An ordinary suburban house, a television full of static and a little girl who hears something behind the screen."),
  f:a(["Продюсер и соавтор сценария Стивен Спилберг и режиссёр Хупер делают ужас частью детской жизни: игрушки, шкаф, дерево за окном. Фраза «Они здесь» стала одной из самых известных реплик жанра, потому что страх приходит не из старого замка, а из гостиной.", "Фильм умеет быть и смешным, и по-настоящему жестоким: сцены с зеркалом и бассейном до сих пор неприятны. Но главное в нём не эффекты, а семья, которая не сдаётся и защищает дом до последнего."],
      ["Producer and co-writer Steven Spielberg and director Hooper make terror part of a child's everyday life: toys, a wardrobe, a tree outside the window. “They're here” became one of the genre's most famous lines because the fear comes not from an old castle but from the living room.", "The film can be both funny and truly cruel: the mirror and swimming-pool scenes are still unpleasant. But what matters most is not the effects but a family that refuses to give up and defends its home to the end."])},
 {id:"omen",d:a("Ричард Доннер","Richard Donner"),h:5,r:4,g:2,gn:["shock"],
  s:a("Дипломат усыновляет мальчика, не зная, что тот родился шестого июня в шесть утра.","A diplomat adopts a boy without knowing what was born on the sixth of June at six in the morning."),
  f:a(["Доннер снимает «Омен» как серьёзную трагедию: Грегори Пек и Ли Ремик играют родителей, которые постепенно понимают, что их сын не тот, за кого себя выдаёт. Несчастные случаи вокруг мальчика выстроены как цепь изобретательных и страшных казней.", "Хор в партитуре Джерри Голдсмита, получившей «Оскар», звучит как молитва наоборот и до сих пор определяет звук дьявольского кино. Это пример того, как хорошая музыка делает ужас монументальным."],
      ["Donner treats The Omen as a serious tragedy: Gregory Peck and Lee Remick play parents who slowly realise their son is not who he pretends to be. The accidents around the boy are staged as a chain of ingenious and frightening executions.", "The choir in Jerry Goldsmith's Oscar-winning score sounds like a prayer in reverse and still defines the sound of satanic cinema. It shows how good music can make horror monumental."])},
 {id:"phantasm",d:a("Дон Коскарелли","Don Coscarelli"),h:245,r:4,g:2,gn:["shock"],
  s:a("Мальчик подозревает, что владелец похоронного бюро забирает мёртвых для чего-то гораздо худшего, чем похороны.","A boy suspects that the owner of the funeral home takes the dead away for something much worse than burial."),
  f:a(["Коскарелли снимает не историю, а сон: коридоры без конца, карлики в плащах, серебряная сфера, которая преследует людей. Логики здесь мало, а зловещего очарования много, и именно оно делает фильм культовым.", "Высокий человек в исполнении Энгуса Скримма стал одним из самых запоминающихся злодеев жанра, потому что не объясняет себя никому. Картина дешёвая и местами неровная, но её образы до сих пор невозможно спутать ни с чем."],
      ["Coscarelli films not a story but a dream: endless corridors, hooded dwarfs, a silver sphere that hunts people down. There is little logic and a great deal of sinister charm, and that is what makes the film a cult.", "Angus Scrimm's Tall Man became one of the genre's most memorable villains because he explains himself to no one. The picture is cheap and uneven in places, but its images are still unmistakable."])},
 {id:"lighthouse",d:a("Роберт Эггерс","Robert Eggers"),h:190,r:4.5,g:1,gn:["shock"],
  s:a("Двое смотрителей на скале в Новой Англии конца XIX века, один лишний фонарь и всё меньше причин доверять собственной голове.","Two keepers on a New England rock in the late nineteenth century, one lamp and ever fewer reasons to trust their own heads."),
  f:a(["Эггерс снимает на чёрно-белую плёнку в почти квадратном кадре, и от этого мир сжимается до двух людей, лампы и чаек. Уиллем Дефо и Роберт Паттинсон играют так, будто соревнуются, кто первым сойдёт с ума, и оба выигрывают.", "Язык диалогов сделан из морских баек и старых проклятий, а сюжет не объясняет, что происходит на самом деле. Это кино про одиночество, вину и страх перед светом, который нельзя выключить."],
      ["Eggers shoots on black-and-white film in a nearly square frame, and the world shrinks to two men, a lamp and gulls. Willem Dafoe and Robert Pattinson act as if competing to lose their minds first, and both win.", "The dialogue is built from sailors' yarns and old curses, and the plot never explains what is really happening. It is a film about loneliness, guilt and fear of a light that cannot be switched off."])},
 {id:"saintmaud",d:a("Роуз Гласс","Rose Glass"),h:20,r:4.5,g:1,gn:["shock"],
  s:a("Сиделка-католичка приезжает ухаживать за умирающей танцовщицей и решает спасти её душу.","A devout nurse comes to care for a dying dancer and decides to save her soul."),
  f:a(["Роуз Гласс снимает религиозный ужас без монстров: всё происходит в голове Мод, а Морфидд Кларк играет её с такой тихой убеждённостью, что зритель постоянно не уверен, во что верит она сама. Приморский городок и скромная квартира становятся клеткой.", "Финал короткий и резкий, и его запоминаешь надолго. Фильм не отвечает, была ли Мод святой или больной, и именно в этом его сила."],
      ["Rose Glass makes religious horror without monsters: everything happens inside Maud's head, and Morfydd Clark plays her with such quiet conviction that the viewer is never sure what she herself believes. A seaside town and a modest flat become a cage.", "The ending is short and sharp and stays with you for a long time. The film never says whether Maud was a saint or ill, and that is its strength."])},
 {id:"possessor",d:a("Брэндон Кроненберг","Brandon Cronenberg"),h:345,r:4,g:4,gn:["body"],warn:a("Жестокие сцены насилия","Graphic violence"),
  s:a("Наёмная убийца управляет телами других людей и использует их для заказов, но однажды чужой разум отказывается уступать.","A hired assassin takes control of other people's bodies to carry out contracts, until one host refuses to give way."),
  f:a(["Кроненберг-младший строит холодный, стильный научный триллер, в котором насилие снято близко и без смягчений. Андреа Райсборо играет человека, который так привык к чужим лицам, что теряет своё.", "Фильм продолжает линию отцовского боди-хоррора, но у него свой язык: стерильные интерьеры, выжженные цвета и ощущение, что идентичность здесь просто ещё один одноразовый материал."],
      ["Cronenberg Jr. builds a cold, stylish science-fiction thriller in which violence is shot up close and without softening. Andrea Riseborough plays a woman so used to other people's faces that she loses her own.", "The film continues his father's body-horror line but has its own language: sterile interiors, burnt colours and a sense that identity here is just another disposable material."])},
 {id:"lakemungo",d:a("Джоэл Андерсон","Joel Anderson"),h:215,r:4.5,g:0,gn:["shock"],
  s:a("Австралийская семья после гибели дочери снимает домашние видео и обнаруживает на них нечто лишнее.","An Australian family, after the death of their daughter, goes through home videos and finds something that should not be there."),
  f:a(["Это ложный документальный фильм, который ведёт себя так тихо, что в какой-то момент забываешь: перед тобой выдумка. Интервью с родителями и братом, старые фотографии и любительская съёмка создают ощущение настоящего горя.", "Страшные сцены здесь почти случайны, как будто их нашли в кадре, а не поставили. Именно поэтому фильм обходится без скримеров и всё равно не отпускает после титров."],
      ["This is a mockumentary that behaves so quietly that at some point you forget it is fiction. Interviews with parents and brother, old photographs and amateur footage create the feeling of real grief.", "The frightening moments are almost accidental, as if found in the frame rather than staged. That is why the film manages without jump scares and still does not let go after the credits."])},
 {id:"silence",d:a("Джонатан Демме","Jonathan Demme"),h:160,r:4.5,g:2,gn:["shock"],
  s:a("Молодая стажёрка ФБР идёт за помощью к заключённому психиатру-людоеду, чтобы поймать другого убийцу.","A young FBI trainee goes to an imprisoned cannibal psychiatrist for help in catching another killer."),
  f:a(["Демме строит ужас из разговоров. Энтони Хопкинс появляется на экране лишь около четверти часа, но каждая его сцена с Джоди Фостер превращает допрос в дуэль, где важнее взгляд, чем слова.", "Фильм получил «Оскар» в пяти главных категориях, и редко кто из жанра может этим похвастаться. Он остаётся нервным триллером, который не боится показывать, как насилие меняет тех, кто за ним охотится."],
      ["Demme builds terror out of conversation. Anthony Hopkins is on screen for only about a quarter of an hour, but every scene with Jodie Foster turns an interrogation into a duel where a glance matters more than words.", "The film won Oscars in all five major categories, which few genre pictures can boast. It remains a tense thriller that is not afraid to show how violence changes those who hunt it."])},
 {id:"funnygames",d:a("Михаэль Ханеке","Michael Haneke"),h:50,r:4.5,g:1,gn:["extreme"],warn:a("Психологическое насилие, не для всех","Psychological cruelty, not for everyone"),
  s:a("Двое вежливых молодых людей приходят в загородный дом и предлагают семье «игру».","Two polite young men visit a lake house and offer the family a “game”."),
  f:a(["Ханеке снимает фильм о насилии, который запрещает наслаждаться насилием. Герои смотрят в камеру, перематывают события и спрашивают зрителя, чего он ждёт. Сам он остаётся в кадре безнаказанным.", "Это неудобный фильм, который работает не на страх, а на стыд. Ханеке сам переснял его в 2007 году почти кадр в кадр для американской публики, но оригинал холоднее и честнее."],
      ["Haneke makes a film about violence that forbids enjoying violence. The characters look into the camera, rewind events and ask the viewer what they expect. The viewer remains in the frame, unpunished.", "It is an uncomfortable film that works not on fear but on shame. Haneke remade it himself in 2007, nearly shot for shot, for an American audience, but the original is colder and more honest."])},
 {id:"tale2sisters",d:a("Ким Джи-ун","Kim Jee-woon"),h:320,r:4.5,g:1,gn:["shock"],
  s:a("Две сестры возвращаются из больницы в загородный дом, где живёт мачеха и происходит что-то неправильное.","Two sisters return from hospital to a country house with a stepmother where something is wrong."),
  f:a(["Ким Джи-ун снимает южнокорейский ужас как красивое, медленное кино: обои, посуда, свет сквозь листья. Сюжет, основанный на старой народной истории, сначала кажется призрачной сказкой, а потом превращается в рассказ о травме.", "Здесь много загадок, и фильм не спешит их разгадывать. Лучше смотреть его без подсказок и потом смотреть ещё раз, замечая, как всё было сказано с самого начала."],
      ["Kim Jee-woon shoots South Korean horror as beautiful, slow cinema: wallpaper, crockery, light through leaves. The story, based on an old folk tale, first seems a ghostly fairy tale and then becomes an account of trauma.", "There are many riddles, and the film is in no hurry to solve them. It is best watched without hints and then once more, noticing how everything was said from the start."])},
 {id:"battleroyale",d:a("Киндзи Фукасаку","Kinji Fukasaku"),h:355,r:4.5,g:4,gn:["shock", "extreme"],warn:a("Подростки в роли жертв, жестокие сцены","Teenage victims, graphic violence"),
  s:a("Класс девятиклассников отправляют на остров и заставляют убивать друг друга, пока не останется один.","A class of ninth-graders is sent to an island and forced to kill each other until only one remains."),
  f:a(["Фукасаку экранизирует роман Косюна Таками как злую сатиру на взрослый мир, который даёт подросткам оружие и называет это воспитанием. Такэси Китано в роли учителя играет усталого монстра, который сам когда-то проиграл системе.", "Фильм жесток, но не пуст: за каждой смертью стоит чья-то история, и режиссёр успевает сделать так, чтобы мы запомнили и жертв, и убийц. Фукасаку умер в 2003 году, не закончив продолжение, и «Королевская битва» осталась его главным фильмом."],
      ["Fukasaku adapts Koushun Takami's novel as a bitter satire of the adult world, which hands teenagers weapons and calls it education. Takeshi Kitano as the teacher plays a tired monster who once lost to the system himself.", "The film is brutal but not empty: behind every death is someone's story, and the director makes sure we remember both victims and killers. Fukasaku died in 2003 before finishing the sequel, and Battle Royale remained his best-known film."])},
 {id:"theylive",d:a("Джон Карпентер","John Carpenter"),h:130,r:4,g:1,gn:["shock"],
  s:a("Бродяга находит очки, через которые видно, что реклама и власть говорят «Повинуйся».","A drifter finds sunglasses through which advertising and authority say only “Obey”."),
  f:a(["Карпентер превращает фантастику о пришельцах в прямую сатиру на рейгановскую Америку: рекламные щиты, журналы и банкноты скрывают приказы. Родди Пайпер играет человека, который просто хочет работать и оказывается в центре войны.", "Драка в переулке, длящаяся около пяти минут, давно стала легендой, а реплика про жвачку — мемом. Но даже без этого фильм работает: он остаётся злее и смешнее большинства современных политических сатир."],
      ["Carpenter turns an alien-invasion story into direct satire of Reagan's America: billboards, magazines and banknotes hide commands. Roddy Piper plays a man who just wants a job and ends up at the centre of a war.", "The alley fight, lasting about five minutes, long ago became legend and the bubble-gum line a meme. But even without them the film works: it remains angrier and funnier than most modern political satires."])},
 {id:"jacobs",d:a("Эдриан Лайн","Adrian Lyne"),h:270,r:4,g:2,gn:["shock"],
  s:a("Ветеран Вьетнама едет в метро и замечает, что реальность вокруг него начинает распадаться.","A Vietnam veteran rides the subway and notices that the reality around him is beginning to come apart."),
  f:a(["Лайн снимает психологический ужас как сон, из которого герой не может выбраться: лица с дрожащими движениями, коридоры больницы, поезда без цели. Тим Роббинс играет человека, который одновременно разыскивает правду и не хочет её узнавать.", "Фильм сильно повлиял на «Сайлент Хилл» и несколько поколений авторов хоррора. Его страх не от монстров, а от ощущения, что ты не можешь доверять ни своим воспоминаниям, ни собственным глазам."],
      ["Lyne shoots psychological horror as a dream the hero cannot escape: faces with trembling movement, hospital corridors, trains with no destination. Tim Robbins plays a man who is searching for the truth and does not want to find it.", "The film strongly influenced Silent Hill and several generations of horror authors. Its fear comes not from monsters but from the sense that you cannot trust either your memories or your own eyes."])},
 {id:"mouthmadness",d:a("Джон Карпентер","John Carpenter"),h:35,r:4,g:2,gn:["shock"],
  s:a("Страховой следователь ищет пропавшего автора ужасов, чьи книги сводят читателей с ума.","An insurance investigator searches for a missing horror author whose books drive readers insane."),
  f:a(["Карпентер замыкает свою неофициальную трилогию Апокалипсиса («Нечто», «Принц тьмы» и этот фильм) самым лавкрафтовским фильмом: реальность здесь делает вид, что писатель управляет ею. Сэм Нил играет скептика, который медленно теряет опору.", "Метафоричность превращает сюжет в лабиринт, где автор, читатель и герой постоянно меняются местами. Это один из самых умных и недооценённых фильмов Карпентера."],
      ["Carpenter closes his unofficial Apocalypse trilogy (The Thing, Prince of Darkness and this film) with its most Lovecraftian film: reality here pretends that the writer controls it. Sam Neill plays a sceptic who slowly loses his footing.", "The metafiction turns the plot into a maze where author, reader and hero keep swapping places. It is one of Carpenter's smartest and most underrated films."])},
 {id:"session9",d:a("Брэд Андерсон","Brad Anderson"),h:175,r:4,g:1,gn:["shock"],
  s:a("Бригада рабочих должна за неделю убрать асбест из заброшенной психиатрической больницы Дэнверс, и каждый начинает слышать свои голоса.","A crew has a week to remove asbestos from the abandoned Danvers State Hospital, and each man starts hearing his own voices."),
  f:a(["Андерсон снимает настоящую заброшенную больницу в Массачусетсе, и это почти половина фильма: коридоры, лестницы и палаты выглядят так, будто здание само собирается рассказать свою историю. Дэвид Карузо и Питер Маллан играют людей, которых давит рабочий график.", "Страшное здесь складывается из записей пациентки на плёнках, и это работает лучше любых скримеров. Фильм небольшой, но настойчивый и запоминается надолго."],
      ["Anderson shoots in a real abandoned hospital in Massachusetts, which is almost half the film: corridors, stairs and wards look as if the building itself is about to tell its story. David Caruso and Peter Mullan play men crushed by a work schedule.", "The scares are assembled from a patient's tape recordings, and that works better than any jump scare. The film is small but insistent and stays with you."])},
 {id:"pearl",d:a("Ти Уэст","Ti West"),h:350,r:4.5,g:3,gn:["slasher"],
  s:a("1918 год, техасская ферма, девушка с мечтой о кино и всё больше причин не оставаться одной.","1918, a Texas farm, a girl with a dream of the movies and fewer and fewer reasons to stay good."),
  f:a(["Приквел «Икс» снят в духе технколоровых мелодрам и делает из садистки молодую женщину, чьи мечты слишком велики для её двора. Миа Гот, написавшая сценарий вместе с Ти Уэстом, играет её с такой нежностью, что каждая жестокость кажется ещё страшнее.", "Моноложная сцена ближе к финалу — одна из лучших в жанре за последние годы. Фильм работает и как портрет одиночества, и как мрачная шутка про американскую мечту."],
      ["The prequel to X is shot in the spirit of Technicolor melodramas and turns a sadist into a young woman whose dreams are too big for her yard. Mia Goth, who co-wrote the script with Ti West, plays her with such tenderness that every cruelty feels worse.", "The long monologue scene near the end is one of the best in the genre in recent years. The film works both as a portrait of loneliness and as a dark joke about the American dream."])},
 {id:"talktome",d:a("Дэнни и Майкл Филиппу","Danny and Michael Philippou"),h:15,r:4,g:2,gn:["shock"],
  s:a("Подростки в Австралии находят забальзамированную руку, и с её помощью можно вызвать мёртвых, но ненадолго.","Teenagers in Australia find an embalmed hand that lets them summon the dead, but only for a short while."),
  f:a(["Братья Филиппу снимают дебют про вечеринку, которая превращается в зависимость: призрак здесь как наркотик, а правила «не больше девяноста секунд» постоянно нарушаются. Софи Уайлд играет героиню, чья боль делает её уязвимой.", "Фильм быстро и ярко работает с трауром, и именно поэтому его последняя треть бьёт сильнее, чем любые спецэффекты. Это современный хоррор с настоящими героями, которых жалко."],
      ["The Philippou brothers make a debut about a party that turns into addiction: the ghost here works like a drug, and the rule of “no more than ninety seconds” is constantly broken. Sophie Wilde plays a heroine whose pain makes her vulnerable.", "The film deals with grief fast and vividly, and that is why its final third hits harder than any special effects. It is a modern horror film with real characters you feel sorry for."])},
 {id:"birds",d:a("Альфред Хичкок","Alfred Hitchcock"),h:200,r:4.5,g:1,gn:["shock"],
  s:a("В тихом калифорнийском городке птицы начинают нападать на людей, и никто не знает почему.","In a quiet Californian town birds begin attacking people, and nobody knows why."),
  f:a(["Хичкок снимает по рассказу Дафны дю Морье фильм без объяснений: птицы просто появляются и нападают. Нет музыки, вместо неё электронные птичьи крики, а в центре стоит Типпи Хедрен, чья героиня оказывается в роли мишени.", "Сцена на школьном дворе и финальная атака на дом остались образцом саспенса: сначала один ворон, потом десятки, потом вся стая. Фильм не отвечает на вопрос «почему», и именно поэтому его до сих пор невозможно забыть."],
      ["Hitchcock adapts a Daphne du Maurier story into a film with no explanation: the birds simply appear and attack. There is no score, only electronic bird cries, and at the centre is Tippi Hedren, whose heroine becomes a target.", "The schoolyard scene and the final attack on the house remain a model of suspense: first one crow, then dozens, then the entire flock. The film never answers “why”, and that is why it is still impossible to forget."])},
 {id:"repulsion",d:a("Роман Полански","Roman Polanski"),h:300,r:5,g:1,gn:["shock"],
  s:a("Тихая маникюрша остаётся одна в лондонской квартире, и стены начинают тянуться к ней руками.","A quiet manicurist is left alone in a London flat, and the walls start reaching for her with hands."),
  f:a(["Полански снимает распад сознания изнутри: Катрин Денёв играет Кароль так, что её молчание страшнее любого крика. Квартира постепенно превращается в ловушку, трещины в стенах расходятся, а кролик на столе гниёт.", "Первый фильм «квартирной трилогии» Полански до сих пор остаётся одним из самых точных портретов душевной болезни в кино. Он не объясняет героиню, а позволяет увидеть мир её глазами."],
      ["Polanski films the collapse of a mind from the inside: Catherine Deneuve plays Carol so that her silence is scarier than any scream. The flat gradually turns into a trap, cracks spread across the walls and a rabbit rots on the table.", "The first film of Polanski's apartment trilogy remains one of the most precise portraits of mental illness in cinema. It does not explain the heroine but lets us see the world through her eyes."])},
 {id:"freaks",d:a("Тод Браунинг","Tod Browning"),h:65,r:4.5,g:1,gn:["shock"],
  s:a("Цирковая красавица обманывает маленького человека ради его денег, и труппа решает отомстить.","A circus beauty deceives a little man for his money, and the troupe decides to take revenge."),
  f:a(["Браунинг снимает «Уродов» с настоящими цирковыми артистами с физическими особенностями, и это главная сила фильма: они показаны не монстрами, а семьёй с собственным кодексом. Монстрами оказываются те, кто смеётся над ними.", "Фильм был принят холодно, отпугнул публику и надолго остался под запретом в Британии. Сегодня он выглядит смелым и по-человечески тёплым, а свадебная сцена с припевом «Gooble gobble» остаётся одной из самых жутких в кино."],
      ["Browning shot Freaks with real circus performers with physical differences, and this is the film's chief strength: they are shown not as monsters but as a family with its own code. The monsters are those who laugh at them.", "The film was received coldly, frightened audiences away and stayed banned in Britain for a long time. Today it looks brave and humanly warm, and the wedding scene with the chant “Gooble gobble” remains one of the creepiest in cinema."])},
 {id:"nightofhunter",d:a("Чарльз Лоутон","Charles Laughton"),h:120,r:5,g:0,gn:["shock"],
  s:a("Лжепроповедник с татуировками «ЛЮБОВЬ» и «НЕНАВИСТЬ» преследует двух детей, которые знают, где спрятаны деньги.","A fake preacher with LOVE and HATE tattooed on his knuckles stalks two children who know where the money is hidden."),
  f:a(["Это единственный фильм, который поставил актёр Чарльз Лоутон, и он выглядит как сказка братьев Гримм, снятая в духе немецкого экспрессионизма. Роберт Митчум играет Гарри Пауэлла страшным именно потому, что тот говорит ласково и с улыбкой.", "Ночное бегство детей по реке стало одной из самых красивых сцен в американском кино. Фильм провалился в прокате, и Лоутон больше не снимал, а сегодня он считается одним из лучших американских фильмов всех времён."],
      ["This is the only film directed by the actor Charles Laughton, and it looks like a Grimm fairy tale shot in the spirit of German Expressionism. Robert Mitchum plays Harry Powell as frightening precisely because he speaks softly and smiles.", "The children's night flight down the river became one of the most beautiful scenes in American cinema. The film flopped at the box office and Laughton never directed again, but today it is considered one of the finest American films of all time."])},
 {id:"cronos",d:a("Гильермо дель Торо","Guillermo del Toro"),h:45,r:4,g:2,gn:["body"],
  s:a("Антиквар находит золотое устройство в форме жука, и оно даёт вечную жизнь, но с ужасной ценой.","An antique dealer finds a golden scarab-shaped device that grants eternal life at a terrible price."),
  f:a(["Это дебют дель Торо, и в нём уже есть всё, что станет его почерком: нежность к монстрам, механизм как организм, и вампир, который живёт в семье. Федерико Луппи играет старика, который стал жертвой собственного желания.", "Рон Перлман в роли грубого наёмного племянника умеет быть и смешным, и страшным. Фильм небольшой, но тёплый и странный, и его образ жука в человеческих руках трудно забыть."],
      ["This is del Toro's debut, and it already has everything that becomes his signature: tenderness for monsters, a mechanism as an organism, and a vampire who lives within a family. Federico Luppi plays an old man who falls victim to his own desire.", "Ron Perlman as the brutish hired nephew can be both funny and frightening. The film is small but warm and strange, and the image of the beetle in human hands is hard to forget."])},
 {id:"antichrist",d:a("Ларс фон Триер","Lars von Trier"),h:350,r:4,g:5,gn:["extreme"],warn:a("Очень тяжёлые сцены насилия","Extremely hard scenes of violence"),
  s:a("Пара уединяется в лесной хижине, чтобы пережить смерть ребёнка, и лес отвечает им злом.","A couple retreats to a woodland cabin to cope with the death of a child, and the forest answers with evil."),
  f:a(["Фон Триер делит фильм на главы и превращает терапию в кошмар: Уиллем Дефо играет мужа-психолога, Шарлотта Генсбур жену, которая находит природу врагом. Картина полна символов, и ни один из них не расшифровывается до конца.", "На Каннском фестивале фильм вызвал скандал, а Генсбур получила награду за лучшую женскую роль. Сцены насилия очень тяжёлые, и многие закроют фильм задолго до финала, но тем, кто останется, он оставит сильное ощущение."],
      ["Von Trier divides the film into chapters and turns therapy into nightmare: Willem Dafoe plays a psychologist husband and Charlotte Gainsbourg a wife who finds nature to be the enemy. The picture is full of symbols, and none of them is fully decoded.", "At Cannes the film caused a scandal, and Gainsbourg won the award for Best Actress. The scenes of violence are very hard, and many will turn it off long before the end, but for those who stay it leaves a strong impression."])},
 {id:"dontbreathe",d:a("Феде Альварес","Fede Álvarez"),h:230,r:4,g:2,gn:["shock"],
  s:a("Трое взломщиков вламываются в дом слепого ветерана, у которого, как они думают, спрятана крупная сумма.","Three burglars break into the home of a blind veteran who, they think, has a large sum hidden."),
  f:a(["Альварес переворачивает жанр вторжения: жертва оказывается сильнее нападающих, а дом в Детройте превращается в лабиринт, где слепой знает каждый угол. Стивен Лэнг играет ветерана так, что ему сочувствуешь и боишься одновременно.", "Сцена в полной темноте, снятая в ночном видении, — одна из лучших в жанре. Фильм держит напряжение почти без пауз и умеет в нужный момент сделать неприятный поворот."],
      ["Álvarez flips the home-invasion genre: the victim proves stronger than the attackers, and a Detroit house becomes a maze in which the blind man knows every corner. Stephen Lang plays the veteran so that you both pity and fear him.", "The scene in total darkness, shot in night vision, is one of the best in the genre. The film holds tension almost without pause and knows when to deliver an unpleasant twist."])}
];
if(window.HA_MORE)window.HA_MORE.forEach(function(r){
  if(r.film){
    if(F[r.id])F[r.id].n=a(r.film[0],r.film[1]);
    else d(r.id,r.film[0],r.film[1],r.film[2]);
  }
  if(F[r.id])REVIEWS.push(r);
});
/* v122: extra paragraphs for flagship reviews */
var EXTRA={"ringu": {"ru": ["Успех «Звонка» запустил волну японского хоррора и привёл к американскому ремейку Гора Вербински в 2002 году. Призрак с длинными волосами, выползающий из колодца, стал одним из самых узнаваемых образов жанра, хотя в самом фильме её почти не видно до финала.", "Смотрите его ночью и без телефона в руках. Если зацепило, дальше идут «Тёмные воды» того же режиссёра, «Пульс» Киёси Куросавы и «Проклятие». Все три в каталоге."], "en": ["The success of Ringu set off the wave of Japanese horror and led to Gore Verbinski's American remake in 2002. The long-haired ghost crawling out of the well became one of the genre's most recognisable images, although in the film itself she is barely seen until the finale.", "Watch it at night and without a phone in your hand. If it gets under your skin, the next steps are Dark Water by the same director, Pulse by Kiyoshi Kurosawa and Ju-On. All three are in the catalogue."]}, "suspiria": {"ru": ["Фильм открывает «трилогию трёх матерей», за ним последовали «Инферно» (1980) и «Мать слёз» (2007). В 2018 году Лука Гуаданьино сделал собственную, куда более мрачную и политическую версию, но оригинал остаётся эталоном яркого, почти оперного ужаса.", "Сначала посмотрите «Суспирию» на большом экране или хотя бы с громким звуком, потому что музыка группы Goblin здесь равна изображению. Следом идут «Кровавые краски» и «Тенебры» того же режиссёра."], "en": ["The film opens the Three Mothers trilogy, followed by Inferno (1980) and Mother of Tears (2007). In 2018 Luca Guadagnino made his own far darker and more political version, but the original remains the benchmark for vivid, almost operatic horror.", "Watch Suspiria on a big screen, or at least loud, because the score by the band Goblin is the equal of the images. Next come Deep Red and Tenebrae by the same director."]}, "thing": {"ru": ["Фильм Карпентера вышел в 1982 году и был принят холодно: критики ругали жестокость, зрители выбирали «Инопланетянина». Со временем его признали одним из лучших в жанре, а эффекты Роба Боттина остались непревзойдённым образцом практического грима и механики.", "Он основан на повести Джона Кэмпбелла «Кто идёт?» и ремейкует картину 1951 года. Для продолжения темы смотрите «Принца тьмы» и «В пасти безумия» того же режиссёра, затем «Чужого» Ридли Скотта."], "en": ["Carpenter's film came out in 1982 and was received coldly: critics attacked the violence and audiences chose E.T. Over time it was recognised as one of the best of the genre, and Rob Bottin's effects remain an unsurpassed model of practical make-up and mechanics.", "It is based on John W. Campbell's novella Who Goes There? and remakes the 1951 picture. To continue the theme, watch Prince of Darkness and In the Mouth of Madness by the same director, then Ridley Scott's Alien."]}, "exorcist": {"ru": ["«Изгоняющий дьявола» получил десять номинаций на «Оскар» и две награды, за адаптированный сценарий и за звук, что для хоррора было небывалым успехом. Сценарий написал автор романа Уильям Питер Блэтти, а режиссёром стал Уильям Фридкин.", "Фильм не про прыжки и крики, а про бессилие взрослых перед тем, чего они не понимают. Следом посмотрите «Омен» и «Ребёнка Розмари», а позднее «Одержимость» Анджея Жулавски для совсем другого взгляда на дьявола."], "en": ["The Exorcist received ten Academy Award nominations and won two, for adapted screenplay and sound, which was an unprecedented success for a horror film. The screenplay was written by the novel's author William Peter Blatty, and the director was William Friedkin.", "The film is not about jumps and screams but about the helplessness of adults before what they do not understand. Next watch The Omen and Rosemary's Baby, and later Andrzej Żuławski's Possession for a very different view of the devil."]}, "shining": {"ru": ["Стивен Кинг, автор романа, не любил этот фильм всю жизнь: ему не нравилось, как Кубрик изменил героя и финал. Тем не менее именно картина Кубрика с Джеком Николсоном и отелем «Оверлук» стала частью поп-культуры, а езда на «стэдикаме» по коридорам определила движение камеры в кино.", "Смотрите её внимательно и ищите детали фона, о которых до сих пор спорят. Продолжением по роману Кинга стало «Доктор Сон» (2019), а по духу близки «Реинкарнация» и «Маяк»."], "en": ["Stephen King, the author of the novel, disliked this film for the rest of his life: he did not like how Kubrick changed the hero and the ending. Even so, it is Kubrick's picture, with Jack Nicholson and the Overlook Hotel, that became part of pop culture, and the Steadicam work in its corridors shaped how the camera moves in cinema.", "Watch it closely and look for the background details that people still argue about. Doctor Sleep (2019) continues the story from King's novel, and Hereditary and The Lighthouse are close in spirit."]}, "tcm": {"ru": ["Фильм Тоби Хупера снят на очень маленький бюджет в техасскую жару, и это чувствуется в каждом кадре: пот, пыль и ощущение, что выхода нет. Надпись о «реальных событиях» вдохновлена историей Эда Гейна, но сюжет придуман.", "Фильм страшнее, чем жесток: самого насилия на экране почти нет. Дальше смотрите «У холмов есть глаза» Уэса Крэйвена, «Последний дом слева» и «Генри: портрет серийного убийцы»."], "en": ["Tobe Hooper's film was shot on a very small budget in the Texas heat, and you can feel it in every frame: sweat, dust and the sense that there is no way out. The title card about “true events” was inspired by the story of Ed Gein, but the plot is invented.", "The film is scarier than it is cruel: there is hardly any violence on screen. Next watch Wes Craven's The Hills Have Eyes, The Last House on the Left and Henry: Portrait of a Serial Killer."]}, "hellraiser": {"ru": ["Клайв Баркер сам поставил фильм по собственной повести «The Hellbound Heart» и сделал ченобитов во главе с Пинхедом одним из самых необычных образов в жанре: они не злодеи, а холодные служители чужих ритуалов. Дуг Брэдли играл Пинхеда в нескольких фильмах серии.", "Фильм сочетает боль и желание так, как мало какое кино. Следом идёт продолжение «Восставший из ада 2», затем «Кэндимен» по рассказу Баркера."], "en": ["Clive Barker directed the film himself from his own novella The Hellbound Heart and made the Cenobites led by Pinhead one of the most unusual images in the genre: they are not villains but cold servants of someone else's rituals. Doug Bradley played Pinhead in several films of the series.", "The film combines pain and desire as few films do. Next comes the sequel Hellbound: Hellraiser II, then Candyman, based on a Barker story."]}, "audition": {"ru": ["«Прослушивание» поставлено по роману Рю Мураками. Первая половина это почти тихая драма об одиночестве вдовца, и только потом фильм превращается в нечто совсем другое. На фестивалях зрители уходили из зала, но именно этот контраст сделал картину знаменитой.", "Это не просто фильм ради шока: он о том, как мы строим образ человека, которого хотим любить. Для продолжения посмотрите «Ичи-убийцу» и «Посетителя Q» того же режиссёра, а из более тихого кино «Лекарство» Киёси Куросавы."], "en": ["Audition is based on a novel by Ryu Murakami. For its first half it is an almost quiet drama about a widower's loneliness, and only then does the film turn into something quite different. At festivals viewers walked out, but that very contrast made the picture famous.", "It is not just a film for shock: it is about how we build the image of a person we want to love. To continue, watch Ichi the Killer and Visitor Q by the same director, and for something quieter, Kiyoshi Kurosawa's Cure."]}, "kwaidan": {"ru": ["«Кайдан» собран из четырёх историй по сборнику Лафкадио Хирна, снят в студии на расписанных декорациях, а музыку написал Тору Такэмицу. Фильм получил Специальный приз жюри в Каннах и был номинирован на «Оскар» как лучший иностранный фильм.", "Он идёт почти три часа, и лучше смотреть его без спешки, по одной истории за раз. Дальше посмотрите «Онибабу» Канэто Синдо, «Куронэко» и «Ад» Нобуо Накагавы."], "en": ["Kwaidan is made of four stories from Lafcadio Hearn's collection, shot in a studio on painted sets, with music by Tōru Takemitsu. The film won the Special Jury Prize at Cannes and was nominated for the Academy Award for Best Foreign Language Film.", "It runs almost three hours and is best watched without hurry, one story at a time. Next watch Onibaba by Kaneto Shindō, Kuroneko and Jigoku by Nobuo Nakagawa."]}, "jaws": {"ru": ["«Челюсти» часто называют первым летним блокбастером: фильм побил кассовые рекорды 1975 года и получил три «Оскара», за музыку, монтаж и звук. Он же приучил студии выпускать большие фильмы летом.", "Если понравилось, смотрите «Чужого» Ридли Скотта, «Нечто» Карпентера и «Глубокое синее море» для морских страхов. Сам фильм Спилберга хорошо пересматривать раз в несколько лет."], "en": ["Jaws is often called the first summer blockbuster: the film broke the box-office records of 1975 and won three Academy Awards, for score, editing and sound. It also taught the studios to release big films in the summer.", "If you liked it, watch Ridley Scott's Alien, Carpenter's The Thing and Deep Blue Sea for more sea fears. Spielberg's film itself is worth revisiting every few years."]}, "halloween": {"ru": ["Фильм Карпентера сделан на очень небольшие деньги, а музыку он написал сам, и её простая тема в необычном размере пять четвертей осталась в жанре навсегда. «Хэллоуин» не придумал слэшер, но задал ему форму: безликий убийца, «последняя девушка» и страх, что он рядом.", "Джейми Ли Кёртис сыграла в нём первую большую роль. Следом смотрите «Чёрное Рождество» (1974), «Пятницу, 13-е» и «Крик»."], "en": ["Carpenter's film was made on very little money, and he wrote the music himself; its simple theme in an unusual 5/4 metre remains in the genre for good. Halloween did not invent the slasher but gave it its shape: a faceless killer, the “final girl” and the fear that he is close.", "Jamie Lee Curtis played her first major role in it. Next watch Black Christmas (1974), Friday the 13th and Scream."]}, "psycho": {"ru": ["«Психо» Хичкока вышел в 1960 году и изменил правила: героиню, которую зритель считает главной, убивают ещё до середины фильма. Резкие струнные Бернарда Херрманна стали синонимом ужаса, а сцена в душе вошла в учебники монтажа.", "Фильм основан на романе Роберта Блоха. Дальше смотрите «Подглядывающего» Майкла Пауэлла (тоже 1960), «Птиц» Хичкока и «Отвращение» Полански."], "en": ["Hitchcock's Psycho came out in 1960 and changed the rules: the heroine the viewer takes for the lead is killed before the halfway point. Bernard Herrmann's sharp strings became a synonym for terror, and the shower scene entered the textbooks of editing.", "The film is based on a novel by Robert Bloch. Next watch Michael Powell's Peeping Tom (also 1960), Hitchcock's The Birds and Polanski's Repulsion."]}};
REVIEWS.forEach(function(r){var x=EXTRA[r.id];if(x){r.f.ru=r.f.ru.concat(x.ru);r.f.en=r.f.en.concat(x.en)}});

(function(){var b={},ks=[];REVIEWS.forEach(function(r){var k=r.gn[0];if(!b[k]){b[k]=[];ks.push(k)}b[k].push(r)});
 var out=[],more=true;while(more){more=false;ks.forEach(function(k){if(b[k].length){out.push(b[k].shift());more=true}})}
 REVIEWS.length=0;out.forEach(function(r){REVIEWS.push(r)})})();
var RELEASES=[
 {d:"04.11",t:"Trauma Or, Monsters All",dir:a("Ларри Фессенден (автор)","Larry Fessenden (creator)"),gn:["body"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Трое чудовищ Фессендена живут в городке на севере штата Нью-Йорк, пока вирусная статья писателя не настраивает жителей против них.","Three of Fessenden’s monsters live in an upstate New York town until a writer’s viral article turns the residents against them.")},
 {d:"06.11",t:"Godzilla Minus Zero",dir:a("Такаси Ямадзаки","Takashi Yamazaki"),gn:["jhorror"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Продолжение «Годзиллы: минус один», действие в 1949 году: появляется нечто ещё хуже.","The sequel to Godzilla Minus One, set in 1949, as something worse emerges.")},
 {d:"06.11",t:"New Group",dir:a("Юта Симоцу","Yûta Shimotsu"),gn:["jhorror"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Школьница наблюдает, как среди одноклассников распространяется сектантское мышление. Выходит на Shudder.","A high school student watches a cult-like mentality spread among her peers. Streaming on Shudder.")},
 {d:"13.11",t:"Victorian Psycho",dir:a("Захари Вигон","Zachary Wigon"),gn:["gore"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Гувернантка со своими тайнами приезжает в готический особняк, в главной роли Майка Монро.","A governess with secrets of her own arrives at a gothic manor, with Maika Monroe in the lead.")},
 {d:"13.11",t:"Ebenezer: A Christmas Carol",dir:a("Тай Уэст","Ti West"),gn:["shock"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Викторианская история с привидениями и Джонни Деппом в роли Скруджа, поданная как настоящий хоррор.","A Victorian ghost story with Johnny Depp as Scrooge, presented as genuine horror.")},
 {d:"13.11",t:"Deadbolt",dir:a("Зак Коулман","Zac Coleman"),gn:["slasher"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Кандидатка в конгресс находит в своём доме двоих незваных гостей и ищет путь на волю.","A congressional hopeful finds two intruders in her home and must find a way out.")},
 {d:"13.11",t:"Tinsman Road",dir:a("Робби Банфитч","Robbie Banfitch"),gn:["shock"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Found footage: парень расследует исчезновение сестры и тайну семейного дома. Выходит на Shudder.","Found footage: a young man investigates his missing sister and the family home. Streaming on Shudder.")},
 {d:"27.11",t:"The Holy Boy",dir:a("Паоло Стропполи","Paolo Strippoli"),gn:["shock"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Итальянский фолк-хоррор: учитель пытается спасти мальчика, объятия которого забирают боль, а город обращается против него. Shudder.","Italian folk horror: a teacher tries to rescue a boy whose hugs take away pain while the town turns on him. Shudder.")},
 {d:"04.12",t:"Violent Night 2",dir:a("Томми Вирколя","Tommy Wirkola"),gn:["gore"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Санта Дэвида Харбора возвращается: на Рождество он дерётся с криминальным боссом в торговом центре в Нью-Джерси.","David Harbour’s Santa returns for a Christmas Eve fight with a crime lord in a New Jersey mall.")},
 {d:"04.12",t:"Above the Below",dir:a("Идрис Эльба, Мартин Оуэн","Idris Elba, Martin Owen"),gn:["body"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Астронавты заперты в капсуле на дне океана и должны успеть добраться до поверхности. Ограниченный прокат.","Astronauts sealed in a capsule on the ocean floor race to reach the surface. Limited release.")},
 {d:"23.10",t:"Clayface",dir:a("Джеймс Уоткинс","James Watkins"),gn:["body"],st:a("Вышел","Released"),
  p:a("Актёр категории B пытается вернуть карьеру и превращается в глиняное чудовище. Критики сравнивают его с «Мухой».","A B-movie actor tries to revive his career and turns into a clay monster. Critics compare it to The Fly.")},
 {d:"28.08",t:"Colony",dir:a("Ён Сан Хо","Yeon Sang-ho"),gn:["body"],st:a("Вышел","Released"),
  p:a("Мутирующий вирус запирает участников биотех-конференции в изолированном здании.","A mutating virus traps the attendees of a biotech conference inside a sealed facility.")},
 {d:"07.08",t:"Teenage Sex and Death at Camp Miasma",dir:a("Джейн Шёнбрун","Jane Schoenbrun"),gn:["slasher"],st:a("Вышел","Released"),
  p:a("Метаслэшер в летнем лагере, в ролях Ханна Эйнбиндер и Джиллиан Андерсон.","A meta-slasher at a summer camp, starring Hannah Einbinder and Gillian Anderson.")},
 {d:"10.07",t:"Evil Dead Burn",dir:a("Себастьен Ваничек","Sébastien Vaniček"),gn:["gore","body"],st:a("Вышел","Released"),
  p:a("Вдова приезжает к родственникам мужа, и семейная встреча превращается в кошмар с одержимыми.","A widow visits her in-laws, and the family gathering turns into a nightmare of the possessed.")},
 {d:"25.12",t:"Werwulf",dir:a("Роберт Эггерс","Robert Eggers"),gn:["body"],st:a("Ожидается","Upcoming"),soon:1,
  p:a("Средневековая английская деревня сталкивается с загадочным существом, и фольклор становится реальностью.","A medieval English village is terrorised by a mysterious creature, and folklore becomes reality.")}
];

(function(){var now=new Date();var key=function(d){var x=d.split(".");return +x[1]*100+ +x[0]};
 var nk=(now.getMonth()+1)*100+now.getDate();
 RELEASES.forEach(function(r){var up=key(r.d)>nk;r.soon=up?1:0;r.st=up?a("Ожидается","Upcoming"):a("Вышел","Released")});
 var up=RELEASES.filter(function(r){return r.soon}).sort(function(x,y){return key(x.d)-key(y.d)}),dn=RELEASES.filter(function(r){return !r.soon}).sort(function(x,y){return key(y.d)-key(x.d)});
 RELEASES.length=0;up.concat(dn).forEach(function(r){RELEASES.push(r)});
})();
var NEWS=[
 {d:"14.11.2026",t:a("Ещё 28 рецензий и 40 фильмов в каталоге","28 more reviews and 40 films in the catalogue"),p:a("Новые рецензии: «Челюсти», «Птицы», «Отвращение», «Ночь охотника», «Королевская битва», «Маяк», «Святая Мод», «Жемчужина» и другие. В каталоге появились новинки 2026 года, продолжения «Крика» и несколько забытых классик.","New reviews: Jaws, The Birds, Repulsion, The Night of the Hunter, Battle Royale, The Lighthouse, Saint Maud, Pearl and more. The catalogue also gained 2026 releases, the Scream sequels and several forgotten classics.")},
 {d:"08.11.2026",t:a("Досье зрителя, проклятие на семь дней и подписка","Viewer dossier, a seven-day curse and subscriptions"),p:a("Появилось досье с вашей статистикой и списками, режим «Просмотр видео» со звонком через неделю, шёпот и скрип в рецензиях и комнате, подписка по почте и RSS. У каждой рецензии и статьи теперь есть отдельная страница.","A dossier with your stats and lists, a Watch-the-video mode with a call a week later, whispers and creaks in reviews and in the room, an email sign-up and RSS. Every review and feature now has its own page.")},
 {d:"06.11.2026",t:a("Больше фильмов и рецензий","More films and reviews"),p:a("В каталог добавлено 23 фильма, написано 29 новых рецензий: от «Калигари» и «Häxan» до «Грешников» и «Оружия». Ещё три главные рецензии: «Звонок», «Суспирия» и «Нечто».","The catalogue gained 23 films and 29 new reviews were written, from Caligari and Häxan to Sinners and Weapons. Three more lead reviews: Ringu, Suspiria and The Thing.")},
 {d:"06.11.2026",gn:["exploit"],t:a("Новая статья: видеопрокат и VHS","New feature: the video store and VHS"),p:a("Большой материал о том, как кассеты, прокатные залы и британский список «видеомерзостей» создали культ жёсткого кино. Читайте в разделе «Статья».","A long read on how tapes, rental shelves and the British “video nasties” list created the cult of hard-edged cinema. Find it in the Feature section.")},
 {d:"06.11.2026",t:a("Девять новых фишек","Nine new touches"),p:a("Фаза луны, счётчик REC, запотевшее стекло, звонок в три часа ночи, спиритическая доска, поиск призрака, карта страхов и страница 404. Часть из них прячется до нужного момента.","The moon phase, a REC counter, fogged glass, a 3 a.m. call, a spirit board, find-the-ghost, a fear map and a 404 page. Some of them hide until the right moment.")},
 {d:"06.11.2026",t:a("Звук «Плёнки»","Sound of The Tape"),p:a("Ролик The Tape получил новую дорожку: шёпот, скрежет, помехи и провалы в тишину. Включайте в наушниках.","The Tape clip has a new audio track: whispers, scrapes, static and drops into silence. Best with headphones.")},
 {d:"04.11.2026",t:a("Сайт про все поджанры","A site for every subgenre"),p:a("В разделе «Франшизы» теперь восемь миров: к Звонку, Ju-On, Ито и Томиэ добавились слэшеры, джалло, боди-хоррор и сплаттер. Рецензии перемешаны по жанрам, а на главной снова всё про ужас в целом.","The Franchises section now has eight worlds: Slashers, Giallo, Body horror and Splatter joined Ringu, Ju-On, Ito and Tomie. Reviews are mixed across genres and the front page is about horror as a whole again.")},
 {d:"04.11.2026",gn:["jhorror"],t:a("Новинки ноября и декабря","November and December releases"),p:a("В раздел «Новинки» добавили 10 фильмов с датами выхода: от Godzilla Minus Zero до Werwulf Эггерса. Даты взяты из открытых обзоров, перед походом в кино или просмотром проверяйте их.","Ten films with release dates were added to the New section, from Godzilla Minus Zero to Eggers’ Werwulf. Dates come from public roundups, so check them before you go to the cinema or stream.")},
 {d:"03.11.2026",t:a("Светлее и без лишнего","Brighter and simpler"),p:a("Для новых посетителей по умолчанию включён чистый тон, чтобы читать было легче. Тон меняется кнопкой вверху. Ссылка на Telegram убрана, добавлено ещё несколько фильмов.","New visitors now start with the clean tone so the text is easier to read. The tone changes with the button at the top. The Telegram link is gone and a few more films were added.")},
 {d:"02.11.2026",gn:["jhorror"],t:a("Четыре столпа сайта","The four pillars of the site"),p:a("Звонок, Ju-On, Дзюндзи Ито и Томиэ получили отдельный раздел, фильтры по франшизам, десяток новых фильмов и три рецензии.","Ringu, Ju-On, Junji Ito and Tomie now have their own section, franchise filters, a dozen new films and three reviews.")},
 {d:"01.11.2026",t:a("Кнопки «Поделиться»","Share buttons"),p:a("На каждой рецензии появились кнопки VK и копирования, чтобы делиться находками.","Every review now has VK and copy buttons so you can share your finds.")},
 {d:"01.11.2026",gn:["splatterpunk","slasher"],t:a("Каталог: почти шестьсот фильмов","The catalogue: nearly six hundred films"),p:a("Добавили почти 300 новых фильмов: классику 30–60-х, забытые слэшеры, джалло, европейскую готику, азиатское кино и свежую волну. Появились четырнадцать новых подборок и 36 новых рецензий.","We added almost 300 new films: 30s–60s classics, forgotten slashers, giallo, European gothic, Asian cinema and the fresh wave. Fourteen new lists and 36 new reviews are up.")},
 {d:"01.11.2026",t:a("Серия визитов и значки","Visit streak and badges"),p:a("Заходите каждый день: серия дней открывает значки. Есть и один секретный. Прогресс хранится в вашем браузере.","Come back daily: the streak unlocks badges. One of them is secret. Progress is stored in your browser.")},
 {d:"01.11.2026",t:a("Новая шапка и фонарик","A new header and a flashlight"),p:a("Баннеры в шапке теперь сменяют друг друга, а кнопка «Фонарик» гасит свет и оставляет только круг вокруг курсора.","The header banners now rotate, and the Flashlight button kills the lights and leaves only a circle around your cursor.")},
 {d:"01.11.2026",t:a("Галерея выросла до 37 работ","The gallery grows to 37 works"),p:a("В галерее появились новые постеры, баннеры и логотипы. Открывайте картинку и листайте стрелками.","The gallery has new posters, banners and logos. Open an image and flip through with the arrow keys.")},
 {d:"31.10.2026",t:a("Новая статья: J-Horror Trash","New feature: J-Horror Trash"),p:a("Большой материал о том, как японский ужас превратился в карнавал крови и самоиронии. Читайте в разделе «Статья».","A long read on how Japanese horror turned into a carnival of blood and self-irony. Find it in the Feature section.")},
 {d:"31.10.2026",gn:["splatterpunk","body","slasher"],t:a("Новичкам: три маршрута в жанр","Newcomers: three routes into the genre"),p:a("В новом разделе собраны маршруты по сплаттеру, боди-хоррору и слэшерам: пять фильмов в порядке нарастающей жести.","A new section collects routes through splatter, body horror and slashers: five films each, in order of rising gore.")},
 {d:"31.10.2026",t:a("Каталог вырос: почти триста фильмов","The catalogue grows: nearly three hundred films"),p:a("В каталоге теперь почти триста фильмов: от «Кабинета доктора Калигари» 1920 года до свежих хитов. Ищите по названию или году.","The catalogue now holds nearly three hundred films, from The Cabinet of Dr. Caligari (1920) to fresh hits. Search by title or year.")},
 {d:"31.10.2026",gn:["giallo"],t:a("Джалло для новичков: три шага","Giallo for newcomers: three steps"),p:a("Начните с «Птицы с хрустальным оперением», затем «Кроваво-красное» и только потом «Суспирия». Так проще понять, как стиль перерастает сюжет.","Start with The Bird with the Crystal Plumage, then Deep Red, and only then Suspiria. This way it is easier to see how style outgrows plot.")},
 {d:"31.10.2026",gn:["jhorror","trash"],t:a("J-Horror и J-Trash: две полки","J-Horror and J-Trash: two shelves"),p:a("Если вечером хочется призраков, берите «Звонок» и «Проклятие». Если крови и безумия, «Полицию Токио» и «Девушку-пулемёт».","If tonight calls for ghosts, take Ringu and Ju-On. If it calls for blood and madness, Tokyo Gore Police and The Machine Girl.")},
 {d:"30.10.2026",gn:["extreme","shock"],t:a("Экстрим без сюрпризов","Extreme without surprises"),p:a("Перед тяжёлым фильмом проверьте предупреждение в списке. Мы отмечаем самые жёсткие картины значком и пишем, чего ждать.","Before a heavy film check the warning in the list. We mark the hardest titles with a badge and say what to expect.")},
 {d:"30.10.2026",gn:["gore","splatterpunk"],t:a("Практика против CGI","Practical versus CGI"),p:a("Хотите увидеть, как делали кровь без компьютера? Пересмотрите «Вещь», «Реаниматора» и «Живую мертвечину».","Want to see how blood was made without a computer? Rewatch The Thing, Re-Animator and Braindead.")},
 {d:"30.10.2026",gn:["trash"],t:a("Трэш-ночь: порядок просмотра","Trash night: the viewing order"),p:a("Для компании: «Токсичный мститель», затем «Тролль 2», затем «Акулий торнадо». Каждый следующий абсурднее предыдущего.","For a group: The Toxic Avenger, then Troll 2, then Sharknado. Each one is more absurd than the last.")},
 {d:"29.10.2026",gn:["exploit"],t:a("Грайндхаус 101","Grindhouse 101"),p:a("Основа эксплуатации: «Последний дом слева», «Гонка смерти 2000 года» и «Планета страха» как современная дань.","The basics of exploitation: Last House on the Left, Death Race 2000 and Planet Terror as a modern tribute.")},
 {d:"29.10.2026",gn:["slasher"],t:a("Новый раздел: субжанры","New section: subgenres"),p:a("Фолк-хоррор, найденная плёнка, зомби, вампиры, каннибалы и ещё семь направлений: у каждого свой набор фильмов.","Folk horror, found footage, zombies, vampires, cannibals and seven more directions: each with its own set of films.")},
 {d:"31.10.2026",t:a("Хэллоуин-ночь: пять фильмов подряд","Halloween night: five films in a row"),p:a("Мой марафон на сегодня идёт от «Зловещих мертвецов 2» до «Мучениц». Полный порядок смотрите в подборках ниже.","My marathon for tonight runs from Evil Dead II to Martyrs. See the full order in the shelves below.")},
 {d:"30.10.2026",gn:["splatterpunk"],t:a("Evil Dead Burn: что пересмотреть заранее","Evil Dead Burn: what to rewatch first"),p:a("Фильм вышел 10 июля. Если не видели оригиналы, начните с «Зловещих мертвецов 2»: он быстрее всего вводит в тон серии.","The film came out on 10 July. If you have not seen the originals, start with Evil Dead II: it sets the tone of the series fastest.")},
 {d:"30.10.2026",gn:["body"],t:a("Clayface и «Муха»: как смотреть боди-хоррор","Clayface and The Fly: how to watch body horror"),p:a("Если вам понравился Clayface, сравните его с «Мухой» и «Вещью»: те же страхи перед собственным телом, но другой тон.","If you liked Clayface, compare it with The Fly and The Thing: the same fears of one's own body, in a different tone.")},
 {d:"29.10.2026",gn:["slasher"],t:a("Camp Miasma и лагерные слэшеры","Camp Miasma and the camp slashers"),p:a("Метаслэшер лета вышел 7 августа. Для подготовки: «Пятница, 13-е», «Спящий лагерь» и «Ожог» в нашей подборке «Лето, лагерь, нож».","The summer's meta-slasher came out on 7 August. To prepare: Friday the 13th, Sleepaway Camp and The Burning in our shelf “Summer, camp, knife”.")},
 {d:"30.10.2026",t:a("Clayface вышел в прокат","Clayface hits cinemas"),p:a("Фильм Джеймса Уоткинса вышел 23 октября и уже называется самым телесным ужастиком осени. Рецензия появится после просмотра.","James Watkins' film came out on 23 October and is already being called the fall's most bodily horror film. A review will follow after I see it.")},
 {d:"29.10.2026",t:a("Эггерс готовит рождественский Werwulf","Eggers prepares a Christmas Werwulf"),p:a("Новый фильм Роберта Эггерса про оборотня выйдет 25 декабря. Это тёмная средневековая история с трансформацией в центре.","Robert Eggers' new werewolf film arrives on 25 December. It is a dark medieval story with transformation at its centre.")}
];

var LISTS=[
 {k:"o",ic:"pent",t:a("Десять жанров, десять фильмов","Ten genres, ten films"),s:a("Лучший вход в каждое направление.","The best entry point into each direction."),
  ids:["braindead","fly","halloween","deepred","ringu","martyrs","reanimator","cannibalholo","toxavenger","maniac"],
  tags:{braindead:a("сплаттерпанк","splatterpunk"),fly:a("боди-хоррор","body horror"),halloween:a("слэшер","slasher"),deepred:a("джалло","giallo"),ringu:a("j-horror","j-horror"),martyrs:a("экстрим","extreme"),reanimator:a("гор","gore"),cannibalholo:a("шок","shock"),toxavenger:a("трэш","trash"),maniac:a("эксплуатация","exploitation")}},
 {k:"o",ic:"body",t:a("Топ-15 боди-хоррора","Top 15 body horror"),s:a("Тело как поле битвы, ранжировано по моей нервной системе.","The body as a battlefield, ranked by my nervous system."),
  ids:["fly","videodrome","thing","tetsuo","brood","society","deadringers","shivers","raw","titane","substance","rabid","scanners","existenz","crash"]},
 {k:"u",ic:"jhorror",t:a("J-Horror: призраки и проклятия","J-Horror: ghosts and curses"),s:a("По годам: от классики до эпохи «Звонка».","By year: from the classics to the age of Ringu."),
  ids:["kwaidan","onibaba","hausu","cure","ringu","audition","kairo","juon","darkwater","noroi"]},
 {k:"u",ic:"saw",t:a("J-Trash и экстрим","J-Trash and extremes"),s:a("Гейзеры крови, оружие вместо рук и режиссёры без тормозов.","Geysers of blood, weapons for hands and directors without brakes."),
  ids:["guinea2","tetsuo","visitorq","ichi","suicideclub","gozu","meatball","tgp","machinegirl","vgfg","helldriver"],warn:a("Содержат сцены жестокого насилия","Contain scenes of brutal violence")},
 {k:"u",ic:"slasher",t:a("Слэшеры: пятнадцать главных","Slashers: the main fifteen"),s:a("От рождественской классики до метафильма 90-х.","From a Christmas classic to the meta-film of the 90s."),
  ids:["peeping","psycho","blackxmas","tcm","halloween","promnight","fri13","maniac","mbv","burning","slumber","sleepaway","nightmare","scream","terrifier"]},
 {k:"u",ic:"giallo",t:a("Джалло: от Бавы до неоджалло","Giallo: from Bava to neo-giallo"),s:a("Чёрные перчатки, цветной свет и убийца, которого не видно.","Black gloves, coloured light and a killer you cannot see."),
  ids:["girlknew","bloodlace","birdcrystal","fourflies","bayblood","deepred","suspiria","tenebrae","opera","strangecolor"]},
 {k:"u",ic:"splatterpunk",t:a("Сплаттер и гор","Splatter and gore"),s:a("Зомби, лаборатории и литры красной краски.","Zombies, laboratories and litres of red paint."),
  ids:["dawn","zombi2","evildead","reanimator","returnliving","frombeyond","badtaste","evil2","hellraiser","braindamage","braindead","cabinfever","terrifier2"]},
 {k:"u",ic:"trash",t:a("Трэш: так плохо, что здорово","Trash: so bad it's great"),s:a("Фильмы, которые любят не вопреки, а благодаря.","Films loved not in spite of it but because of it."),
  ids:["plan9","bloodfeast","pussycat","flamingos","tomatoes","toxavenger","nukeem","streettrash","troll2","sharknado"]},
 {k:"u",ic:"exploit",t:a("Эксплуатация и грайндхаус","Exploitation and grindhouse"),s:a("Дёшево, быстро и без оглядки на вкус.","Cheap, fast and with no regard for taste."),
  ids:["lasthouse","tcm","hillseyes","deathrace","switchblade","cannibalholo","maniac","mothersday","planetterror","hobo"]},
 {k:"u",ic:"extreme",t:a("Новый французский экстрим","New French extremity"),s:a("Тело, страх и никакого утешения.","The body, fear and no consolation."),
  ids:["troubleeveryday","irreversible","inmyskin","hautetension","inside","frontiers","martyrs","raw","titane"],warn:a("Содержат сцены жестокого насилия","Contain scenes of brutal violence")},
 {k:"u",ic:"shock",t:a("Экстрим: только по желанию","Extreme: by choice only"),s:a("Фильмы без смягчения. Не для первого знакомства с жанром.","Films without softening. Not for a first acquaintance with the genre."),
  ids:["salo","audition","irreversible","antichrist","inside","martyrs","centipede","serbian"],warn:a("Содержат сцены жестокого насилия","Contain scenes of brutal violence")},
 {k:"u",ic:"coffin",t:a("Италия: зомби, каннибалы и ведьмы","Italy: zombies, cannibals and witches"),s:a("Фульчи, Ардженто и их соседи по полке.","Fulci, Argento and their neighbours on the shelf."),
  ids:["zombi2","cityliving","inferno","cannibalholo","beyond","housecemetery","cannibalferox","demons","cemeteryman"]},
 {k:"u",ic:"moon",t:a("Новая кровь: 2016–2025","New blood: 2016–2025"),s:a("Современный ужас, который не боится красного.","Modern horror that is not afraid of red."),
  ids:["raw","hereditary","midsommar","titane","x2022","barbarian","evilrise","nosferatu","longlegs","substance","sinners","weapons"]},
 {k:"u",ic:"chain",t:a("Видео-гадости: британская охота 80-х","Video nasties: Britain's 80s witch hunt"),s:a("Фильмы, ставшие символами паники вокруг видеопроката. Проверьте детали перед просмотром.","Films that became symbols of the panic around video rental. Check the details before watching."),
  ids:["lasthouse","ispit","driller","zombi2","cannibalholo","evildead","burning","cannibalferox"],tags:{zombi2:a("Zombie Flesh Eaters","Zombie Flesh Eaters")},warn:a("Содержат сцены жестокого насилия","Contain scenes of brutal violence")}
];

var LISTS_EXTRA=[
 {k:"u",ic:"web",t:a("Ад и туман: Hellraiser и Silent Hill","Hell and fog: Hellraiser and Silent Hill"),s:a("Культы, другой мир и город, где всегда идёт пепел.","Cults, another world and a town where ash always falls."),
  ids:["possession","inferno","hellraiser","hellbound","jacobs","candyman","mouthmadness","session9","silenthill"]},
 {k:"u",ic:"syringe",t:a("Нулевые: страх становится жёстче","The 2000s: fear gets harder"),s:a("Ловушки, больницы и новая волна жестокости.","Traps, hospitals and a new wave of cruelty."),
  ids:["finaldest","irreversible","cabinfever","hautetension","saw","hostel","inside","martyrs"],warn:a("Содержат сцены жестокого насилия","Contain scenes of brutal violence")}
];
LISTS=LISTS.concat(LISTS_EXTRA);
var SHELVES=[
 {ic:"pent",t:a("Хэллоуин-марафон","Halloween marathon"),p:a("Пять фильмов на одну ночь, от лёгкого к тяжёлому.","Five films for one night, from light to heavy."),f:["evil2","reanimator","fly","possession","martyrs"]},
 {ic:"body",t:a("Новая плоть","New flesh"),p:a("Тело меняется, и вместе с ним меняется кино.","The body changes, and cinema changes with it."),f:["videodrome","tetsuo","brood","raw","titane","thing","substance"]},
 {ic:"giallo",t:a("Итальянская жара","Italian heat"),p:a("Джалло и около него: стиль важнее логики.","Giallo and its neighbours: style over logic."),f:["deepred","suspiria","tenebrae","zombi2","cannibalholo","demons"]},
 {ic:"jhorror",t:a("Японская ночь","Japanese night"),p:a("Призраки до полуночи, гейзеры крови после.","Ghosts before midnight, geysers of blood after."),f:["ringu","hausu","juon","tetsuo","tgp","machinegirl"]},
 {ic:"tape",t:a("Видеопрокатный вечер","Video-store night"),p:a("Дёшево, громко и с любовью.","Cheap, loud and made with love."),f:["toxavenger","maniac","reanimator","braindead","returnliving","evil2"]},
 {ic:"saw",t:a("Только практические эффекты","Practical effects only"),p:a("Резина, слизь и механика: никакого CGI.","Rubber, slime and mechanics: no CGI."),f:["thing","fly","reanimator","evil2","society","tgp"]},
 {ic:"slasher",t:a("Лето, лагерь, нож","Summer, camp, knife"),p:a("Костры, байки и человек в тёмной одежде.","Campfires, ghost stories and someone in dark clothing."),f:["fri13","sleepaway","burning","mbv","campmiasma"]},
 {ic:"exploit",t:a("Грайндхаус-кинозал","Grindhouse theatre"),p:a("Фальшивые трейлеры стали настоящими фильмами.","Fake trailers turned into real films."),f:["planetterror","hobo","deathrace","switchblade","machinegirl"]},
 {ic:"extreme",t:a("Французская жесть","French brutality"),p:a("Страшно, красиво и очень серьёзно.","Scary, beautiful and very serious."),f:["martyrs","inside","frontiers","raw","titane"]},
 {ic:"coffin",t:a("Для первого свидания","For a first date"),p:a("Не пугают до слёз, но хорошо проверяют вкус.","Won't scare you to tears but a good taste test."),f:["braindead","society","halloween","scream"]}
];

SHELVES.push(
 {ic:"web",t:a("Миры Баркера","Barker's worlds"),p:a("Сенобиты, Кэндимэн и порядок боли.","Cenobites, Candyman and the order of pain."),f:["hellraiser","hellbound","candyman","jacobs"]},
 {ic:"ghost",t:a("Туман и пепел","Fog and ash"),p:a("Для вечера, когда хочется атмосферы без крови.","For an evening when you want atmosphere without blood."),f:["silenthill","session9","mouthmadness","kwaidan","ringu"]},
 {ic:"slasher",t:a("Предтечи слэшеров","Slasher forefathers"),p:a("С чего всё началось, до масок и сиквелов.","Where it all began, before masks and sequels."),f:["peeping","psycho","blackxmas","tcm","halloween"]}
);
var SUBS=[
 {ic:"cross",t:a("Фолк-хоррор","Folk horror"),p:a("Деревня, обряд и чужие, которые на самом деле вы.","A village, a ritual and outsiders who turn out to be you."),f:["witchfinder","wickerman","witch","killlist","wailing","midsommar"]},
 {ic:"tape",t:a("Найденная плёнка","Found footage"),p:a("Камера в руках героя: ужас как документ.","A camera in the hero's hands: horror as a document."),f:["cannibalholo","blairwitch","noroi","rec","lakemungo","vhs","paranormal"]},
 {ic:"coffin",t:a("Зомби","Zombies"),p:a("Толпа, осада и сатира на живых.","The crowd, the siege and a satire of the living."),f:["nightlive","dawn","dayofdead","zombi2","returnliving","braindead","28days","shaun","traintobusan","onecut"]},
 {ic:"moon",t:a("Вампиры","Vampires"),p:a("От тени на стене до подростковой стаи.","From a shadow on the wall to a teenage pack."),f:["nosferatu1922","thehunger","martin","fright","lostboys","neardark","dracula92","letmein","nosferatu"]},
 {ic:"bio",t:a("Оборотни и монстры","Werewolves and creatures"),p:a("Зубы, когти и неизвестное в воде или в космосе.","Teeth, claws and the unknown in the water or in space."),f:["creature","jaws","alien","howling","americanwerewolf","gremlins","dogsoldiers","descent"]},
 {ic:"ghost",t:a("Призраки и одержимость","Hauntings and possession"),p:a("Дом, ребёнок и то, что не уходит.","A house, a child and what will not leave."),f:["innocents","haunting63","rosemary","exorcist","omen","shining","poltergeist","others","conjuring","babadook","itfollows"]},
 {ic:"eye",t:a("Космический ужас","Cosmic horror"),p:a("Лавкрафт, безумие и то, что больше нас.","Lovecraft, madness and what is larger than us."),f:["thing","frombeyond","princeofdark","mouthmadness","dagon","colourspace","thevoid"]},
 {ic:"saw",t:a("Каннибалы","Cannibals"),p:a("Стол накрыт, и вы в меню.","The table is set and you are on the menu."),f:["eatenalive","tcm","hillseyes","cannibalholo","cannibalferox","silence","ravenous","motel","raw"]},
 {ic:"slasher",t:a("Глазами убийцы","Through the killer's eyes"),p:a("Психологические портреты и кино от первого лица.","Psychological portraits and first-person cinema."),f:["peeping","psycho","maniac","henry","silence","funnygames","angst","nekromantik"]},
 {ic:"frame",t:a("Артхаусные кошмары","Arthouse nightmares"),p:a("Кино-сон, где логика сдалась.","Dream cinema where logic has surrendered."),f:["repulsion","eraserhead","possession","begotten","strangecolor","amer","antichrist","titane"]},
 {ic:"chain",t:a("Глушь и выживание","Backwoods and survival"),p:a("Лес, дом на отшибе и семья, которой не рады.","The woods, an isolated house and a family that is not welcome."),f:["tcm","hillseyes","motel","eatenalive","descent","greenroom","youarenext","hatchet"]},
 {ic:"news",t:a("Социальный хоррор","Social horror"),p:a("Страх, в котором узнаётся наше время.","Fear in which our own time is recognisable."),f:["getout","us","midsommar","hereditary","talktome","smile","heretic","substance"]}
];
SUBS.push(
 {ic:"book",t:a("Классика 1920–50-х","Classics of the 1920s–50s"),p:a("Тени, готика и монстры, с которых всё началось.","Shadows, gothic and the monsters it all began with."),f:["caligari","haxan","nosferatu1922","frankenstein","dracula31","freaks","mummy","invisible33","bride","cat42","izombie","creature"]},
 {ic:"moon",t:a("Азия за пределами Японии","Asia beyond Japan"),p:a("Корея и Тайвань: от триллера до безумного экстрима.","Korea and Taiwan: from thriller to wild extremes."),f:["tale2sisters","thirst","isawdevil","wailing","traintobusan","sadness"]},
 {ic:"gore",t:a("Тихий ужас нового века","Quiet dread of the new century"),p:a("Сдержанно, холодно и очень страшно.","Restrained, cold and very frightening."),f:["itfollows","babadook","lighthouse","autopsy","quietplace","skinamarink","latenight","thelma"]}
);
var DIRS=[
 {n:"David Cronenberg",s:a("Пророк новой плоти","Prophet of the new flesh"),f:["shivers","rabid","brood","scanners","videodrome","deadzone","fly","deadringers","crash","existenz"]},
 {n:"John Carpenter",s:a("Синтезаторы и холодный взгляд","Synthesizers and a cold gaze"),f:["halloween","fog","thing","theylive","princeofdark","mouthmadness"]},
 {n:"Dario Argento",s:a("Король джалло","King of giallo"),f:["birdcrystal","cat9","fourflies","deepred","suspiria","inferno","tenebrae","phenomena","opera"]},
 {n:"Lucio Fulci",s:a("Поэт гнили","Poet of rot"),f:["zombi2","cityliving","blackcat81","beyond","housecemetery"]},
 {n:"Mario Bava",s:a("Отец итальянского жанра","Father of Italian genre cinema"),f:["blacksunday","girlknew","bloodlace","killbaby","bayblood","blacksabbath"]},
 {n:"George A. Romero",s:a("Зомби как зеркало общества","Zombies as a mirror of society"),f:["nightlive","crazies","martin","dawn","dayofdead","creepshow"]},
 {n:"Wes Craven",s:a("От шока до метаигры","From shock to meta-game"),f:["lasthouse","hillseyes","nightmare","peoplestairs","newnightmare","scream"]},
 {n:"Sam Raimi",s:a("Слэпстик и кровь","Slapstick and blood"),f:["evildead","evil2","armydark","dragme"]},
 {n:"Tobe Hooper",s:a("Грязь и бензопила","Dirt and the chainsaw"),f:["tcm","eatenalive","poltergeist"]},
 {n:"Takashi Miike",s:a("Режиссёр без тормозов","The director without brakes"),f:["audition","visitorq","ichi","gozu"]},
 {n:"Julia Ducournau",s:a("Тело и желание","Body and desire"),f:["raw","titane"]},
 {n:"Ari Aster",s:a("Горе как жанр","Grief as a genre"),f:["hereditary","midsommar"]},
 {n:"Jordan Peele",s:a("Социальный ужас","Social horror"),f:["getout","us","nope"]},
 {n:"Peter Jackson",s:a("До «Властелина колец»","Before The Lord of the Rings"),f:["badtaste","braindead"]},
 {n:"Yoshihiro Nishimura",s:a("Король японского гора","King of Japanese gore"),f:["tgp","vgfg","helldriver"]}
];
var FACTS=[
 a("«Хэллоуин» Карпентера 1978 года снят на очень небольшой бюджет, а тему к фильму композитор написал сам.","Carpenter's Halloween (1978) was made on a very small budget, and the director composed the theme himself."),
 a("Эффекты «Вещи» (1982) создал Роб Боттин, и они до сих пор считаются эталоном практического боди-хоррора.","The effects of The Thing (1982) were created by Rob Bottin and are still held up as the gold standard of practical body horror."),
 a("«Восставший из ада» основан на повести «Сердце ада» самого Клайва Баркера, который снял фильм сам.","Hellraiser is based on The Hellbound Heart, a novella by Clive Barker, who directed the film himself."),
 a("«Тэцуо» (1989) снят на чёрно-белую плёнку, а Синъя Цукамото был и режиссёром, и исполнителем одной из ролей.","Tetsuo (1989) was shot in black and white, and Shinya Tsukamoto was both director and one of the actors."),
 a("Музыку к «Кроваво-красному» и «Суспирии» записала итальянская группа Goblin.","The score of Deep Red and Suspiria was recorded by the Italian band Goblin."),
 a("Том Савини делал эффекты для «Рассвета мертвецов» и «Мэньяка», и его работа задала стандарт гора 70-х и 80-х.","Tom Savini did the effects for Dawn of the Dead and Maniac, and his work set the standard of 70s and 80s gore."),
 a("«Живая мертвечина» Питера Джексона часто называют самым кровавым фильмом по количеству крови на экране.","Peter Jackson's Braindead is often called the bloodiest film by the amount of blood on screen."),
 a("«Звонок» (1998) режиссёра Хидэо Накаты породил волну японских хорроров начала 2000-х.","Hideo Nakata's Ringu (1998) triggered the wave of Japanese horror films of the early 2000s.")
];
FACTS=FACTS.concat([
 a("Фильм Хидэо Накаты вышел в 1998 году по роману Кодзи Судзуки. Образ Садако стал одним из самых узнаваемых в J-Horror.","Hideo Nakata's film came out in 1998, based on Koji Suzuki's novel. Sadako became one of the most recognisable figures of J-Horror."),
 a("Серия Такаси Симидзу началась с коротких видеоверсий, а затем выросла в кинофраншизу и американский «Проклятие».","Takashi Shimizu's series began with short video versions and grew into a film franchise and the American The Grudge."),
 a("Мангака известен «Узумаки», «Гё» и историями о Томиэ. Его ужас строится на навязчивых образах: спираль, рыба, красота.","The mangaka is known for Uzumaki, Gyo and the Tomie stories. His horror is built on obsessive images: spiral, fish, beauty."),
 a("Томиэ была первой героиней Ито. Фильмов о ней больше десятка, и каждый показывает её новое возрождение.","Tomie was Ito's first heroine. There are over a dozen films about her, each showing a new rebirth."),
 a("Слово «джалло» значит «жёлтый»: так итальянцы называли дешёвые детективы в жёлтых обложках, с которых и пошёл жанр.","“Giallo” means “yellow”: Italians used it for cheap paperback thrillers in yellow covers, and the genre grew out of them."),
 a("Термин «сплаттерпанк» закрепился в середине 1980-х годов, когда авторы хоррора стали писать жёстче и ближе к панк-эстетике.","The term “splatterpunk” took hold in the mid-1980s, when horror writers began to write harder and closer to punk aesthetics."),
 a("Термин «последняя девушка» (final girl) ввела исследовательница Кэрол Дж. Кловер в книге 1992 года.","The term “final girl” was introduced by the scholar Carol J. Clover in a 1992 book."),
 a("«Чужой» (1979): внешний вид существа придумал художник Х. Р. Гигер.","Alien (1979): the creature's look was designed by the artist H. R. Giger."),
 a("«Ночь живых мертвецов» (1968) Ромеро сняли независимо и на небольшие деньги в окрестностях Питтсбурга.","Romero's Night of the Living Dead (1968) was made independently on a small budget near Pittsburgh."),
 a("«Подглядывающий» вышел в 1960 году, в тот же год, что и «Психо», и принёс режиссёру Майклу Пауэллу серьёзные неприятности с критикой.","Peeping Tom came out in 1960, the same year as Psycho, and brought director Michael Powell serious trouble with critics."),
 a("«Чёрное Рождество» (1974) часто называют одним из предков слэшера: звонки поступают из самого дома.","Black Christmas (1974) is often called a forefather of the slasher: the calls come from inside the house."),
 a("Британский закон о видеозаписях 1984 года стал ответом на панику вокруг «видео-гадостей».","The British Video Recordings Act of 1984 was a response to the panic around “video nasties”."),
 a("«Зловещих мертвецов» (1981) Сэм Рэйми снимал с друзьями в лесной хижине на очень небольшой бюджет.","Sam Raimi shot The Evil Dead (1981) with friends in a woodland cabin on a very small budget."),
 a("«Дом» (Hausu, 1977) Нобухико Обаяси часто называют самым странным японским фильмом ужасов.","Nobuhiko Obayashi's Hausu (1977) is often called the strangest Japanese horror film."),
 a("Для «Суспирии» Ардженто выбрал ядовитые цвета и музыку Goblin, которая сама по себе стала визитной карточкой фильма.","For Suspiria Argento chose poisonous colours and Goblin's music, which became the film's calling card in its own right."),
 a("Маска Майкла Майерса в «Хэллоуине», по известной истории, была переделанной маской персонажа из другого фильма.","Michael Myers' mask in Halloween was, by a well-known story, a modified mask of a character from another film."),
 a("Сети видеопроката 80-х сделали «Эксплуатацию» и трэш массовым зрелищем: фильмы жили на полках дольше, чем в кино.","80s video rental turned exploitation and trash into mass entertainment: films lived on shelves longer than in cinemas.")
]);
var LIB=[
 {ic:"splatterpunk",k:a("Сплаттерпанк","Splatterpunk"),t:a("Манифест красного: что такое сплаттерпанк","The manifesto in red: what splatterpunk is"),dk:a("Не просто много крови, а позиция.","Not just a lot of blood, but a stance."),
  b:a(["Сплаттерпанк родился в литературе в 1980-х как ответ на «приличный» хоррор. Его авторы отказывались намекать и показывали тело, насилие и разложение прямо, часто с политической злостью.","В кино к нему ближе всего фильмы, где кровь служит и шоком, и сатирой: «Живая мертвечина», «Зловещие мертвецы 2», «Реаниматор». Они смешивают гротеск с чёрным юмором, и зритель не знает, смеяться ему или отворачиваться.","Главный признак жанра: перебор здесь осознанный. Если эффект выглядит нелепо, значит, так и задумано."],
        ["Splatterpunk was born in literature in the 1980s as an answer to “polite” horror. Its authors refused to hint and showed the body, violence and decay directly, often with political anger.","In film the closest examples are those where blood works as both shock and satire: Braindead, Evil Dead II, Re-Animator. They mix grotesque with black humour, and the viewer does not know whether to laugh or look away.","The genre's main sign is that excess is deliberate. If an effect looks absurd, it was meant to."])},
 {ic:"giallo",k:a("Джалло","Giallo"),t:a("Грамматика джалло: перчатки, цвет и загадка","The grammar of giallo: gloves, colour and riddle"),dk:a("Итальянский триллер, где стиль важнее логики.","The Italian thriller where style outranks logic."),
  b:a(["Название идёт от жёлтых обложек дешёвых детективов. На экране оно означает убийцу в чёрных перчатках, красивую жертву и загадку, которую свидетель видел, но не заметил.","Бава положил основу, Ардженто довёл до пика: «Птица с хрустальным оперением», «Кроваво-красное», «Суспирия». Камера движется как участник, цвет заливает кадр красным, синим и зелёным, а музыка сама ведёт сцену.","В джалло не ждите безупречного сюжета. Ждите кадр, который вы запомните на годы."],
        ["The name comes from the yellow covers of cheap paperback thrillers. On screen it means a killer in black gloves, a beautiful victim and a riddle the witness saw but did not notice.","Bava laid the foundation and Argento brought it to a peak: The Bird with the Crystal Plumage, Deep Red, Suspiria. The camera moves like a participant, colour floods the frame in red, blue and green, and the music drives the scene itself.","Do not expect a flawless plot from giallo. Expect a frame you will remember for years."])},
 {ic:"body",k:a("Боди-хоррор","Body horror"),t:a("Анатомия боди-хоррора: от Кроненберга до «Субстанции»","The anatomy of body horror: from Cronenberg to The Substance"),dk:a("Когда враг это ваше собственное тело.","When the enemy is your own body."),
  b:a(["Боди-хоррор пугает не чудовищем снаружи, а изменением внутри: болезнью, мутацией, слиянием с машиной или чужим организмом. Дэвид Кроненберг сделал из этого собственную школу: «Дрожь», «Видеодром», «Муха».","Практические эффекты играют здесь особую роль. Слизь, резина и механика кажутся реальными, потому что они реальны на съёмочной площадке. Поэтому «Вещь» и «Муха» выглядят живее многих современных фильмов.","Современные режиссёры вроде Жюлии Дюкурно и Кораль Фаржа сохраняют метод, но переносят его в разговор о желании, возрасте и телесных нормах."],
        ["Body horror frightens not with a monster outside but with a change within: illness, mutation, merging with a machine or an alien organism. David Cronenberg made this his own school: Shivers, Videodrome, The Fly.","Practical effects play a special role. Slime, rubber and mechanics feel real because they are real on set. That is why The Thing and The Fly look more alive than many modern films.","Modern directors such as Julia Ducournau and Coralie Fargeat keep the method but carry it into a conversation about desire, age and bodily norms."])},
 {ic:"slasher",k:a("Слэшер","Slasher"),t:a("Правила слэшера и «последняя девушка»","Slasher rules and the final girl"),dk:a("Маска, нож и жанр, который знает свои правила.","A mask, a knife and a genre that knows its own rules."),
  b:a(["Слэшер строится на простой схеме: группа молодых людей, место действия, убийца и выжившая героиня. Исследовательница Кэрол Дж. Кловер назвала её «последней девушкой».","Предшественники: «Подглядывающий» и «Психо» в 1960 году, «Чёрное Рождество» и «Техасская резня бензопилой» в 1974-м. «Хэллоуин» 1978 года закрепил форму, а «Пятница, 13-е» превратила её в поток.","«Крик» (1996) сделал правила жанра предметом разговора внутри фильма: герои знают, как это бывает, и всё равно попадаются."],
        ["The slasher rests on a simple scheme: a group of young people, a setting, a killer and a surviving heroine. The scholar Carol J. Clover called her the “final girl”.","Forerunners: Peeping Tom and Psycho in 1960, Black Christmas and The Texas Chain Saw Massacre in 1974. Halloween (1978) fixed the form and Friday the 13th turned it into a stream.","Scream (1996) made the genre's rules a topic inside the film: the characters know how it goes and still get caught."])},
 {ic:"chain",k:a("История","History"),t:a("«Видео-гадости»: как Британия боролась с хоррором","Video nasties: how Britain fought horror"),dk:a("Паника, список и закон 1984 года.","Panic, a list and the 1984 law."),
  b:a(["В начале 1980-х видеомагнитофоны попали в британские дома, а вместе с ними и фильмы без кинопроката: «Последний дом слева», «Я плюю на ваши могилы», «Ад каннибалов» и другие.","Пресса назвала их «видео-гадостями», а власти составили список фильмов для преследования. В 1984 году вышел закон, ограничивший видеопрокат и усиливший цензуру.","Парадокс в том, что запрет сделал эти фильмы легендами. Сегодня многие из них доступны в восстановленных изданиях, и их оценивают уже как историю жанра."],
        ["In the early 1980s video recorders entered British homes, and with them films that never had a cinema release: The Last House on the Left, I Spit on Your Grave, Cannibal Holocaust and others.","The press called them “video nasties” and the authorities compiled a list of films to prosecute. In 1984 a law came that restricted video rental and strengthened censorship.","The paradox is that the ban turned these films into legends. Today many are available in restored editions and are judged as the genre's history."])},
 {ic:"saw",k:a("Эффекты","Effects"),t:a("Мастера крови: люди за практическими эффектами","Masters of blood: the people behind practical effects"),dk:a("Резина, латекс и немного безумия.","Rubber, latex and a little madness."),
  b:a(["Том Савини сделал эффекты для «Рассвета мертвецов», «Мэньяка» и «Пятницы, 13-е». Роб Боттин создал трансформации «Вещи», Крис Уоллес сделал «Муху», Рик Бейкер прославился «Американским оборотнем в Лондоне».","Их работы объединяет метод: сначала придумать механизм, потом показать его так, чтобы зритель поверил. Эффект не прячется монтажом, а живёт в кадре.","Именно поэтому пересматривать такие фильмы приятно. Время почти не портит резину, оно портит только плохие идеи."],
        ["Tom Savini did the effects for Dawn of the Dead, Maniac and Friday the 13th. Rob Bottin created the transformations of The Thing, Chris Walas made The Fly, and Rick Baker became famous for An American Werewolf in London.","What unites their work is the method: first invent the mechanism, then show it so that the viewer believes. The effect is not hidden by editing but lives in the frame.","That is why such films are a joy to rewatch. Time barely spoils rubber, it only spoils bad ideas."])}
];
var PITCH={
 where:[a("в заброшенном видеопрокате","in an abandoned video-rental shop"),a("в японской школе после уроков","in a Japanese school after classes"),a("на антарктической станции","at an Antarctic station"),a("в летнем лагере","at a summer camp"),a("в торговом центре ночью","in a shopping mall at night"),a("в больнице без персонала","in a hospital with no staff"),a("в глухой деревне","in a remote village"),a("в караоке-баре на отшибе","in a karaoke bar in the middle of nowhere"),a("в придорожном мотеле","in a roadside motel")],
 who:[a("убийца в резиновой маске","a killer in a rubber mask"),a("паразит, который перестраивает тела","a parasite that rebuilds bodies"),a("проклятая видеокассета","a cursed videotape"),a("культ хирургов","a cult of surgeons"),a("орда зомби","a horde of zombies"),a("гигантский мутировавший помидор","a giant mutated tomato"),a("одержимая бензопила","a possessed chainsaw"),a("призрак с длинными волосами","a ghost with long hair"),a("школьница с протезом-пулемётом","a schoolgirl with a machine-gun prosthesis")],
 twist:[a("и последняя девушка оказывается причиной всего","and the final girl turns out to be the cause of it all"),a("и всё оказывается телепередачей","and everything turns out to be a TV show"),a("и кровь на самом деле краска","and the blood turns out to be paint"),a("и режиссёр среди жертв","and the director is among the victims"),a("и чудовище просто одиноко","and the monster is simply lonely"),a("и финал снят за один дубль","and the finale is shot in a single take")],
 style:[a("в красках джалло","in giallo colours"),a("как сплаттер-комедия","as a splatter comedy"),a("как мрачный боди-хоррор","as grim body horror"),a("как японский трэш","as Japanese trash"),a("как найденная плёнка","as found footage"),a("как грайндхаус-триллер","as a grindhouse thriller")],
 tpl:[a("Ночь","Night of the"),a("Возвращение","Return of the"),a("Проклятие","Curse of the"),a("Резня","Massacre of the")],
 noun:[a("мясников","Butchers"),a("кукол","Dolls"),a("зомби-школьниц","Zombie Schoolgirls"),a("призраков","Ghosts"),a("хирургов","Surgeons"),a("упырей","Ghouls"),a("мутантов","Mutants"),a("видеокассет","Videotapes"),a("вампиров","Vampires"),a("людоедов","Cannibals")]
};
var ORACLE=[a("Да, смотрите сегодня ночью.","Yes, watch it tonight."),a("Нет, слишком рано, дождитесь темноты.","No, it is too early, wait for darkness."),a("Только в наушниках и без света.","Only with headphones and the lights off."),a("Позовите друзей, вдвоём страшнее.","Call friends, it is scarier together."),a("Сначала посмотрите что-то старше 1980 года.","First watch something older than 1980."),a("Мёртвые молчат, но подсказывают: да.","The dead are silent but hint: yes."),a("Нет. Выберите фильм полегче.","No. Choose something lighter."),a("Выключайте телефон и смотрите до конца.","Turn off your phone and watch to the end."),a("Вам нужен трэш, а не страх.","You need trash, not fear."),a("Да, и держите под рукой подушку.","Yes, and keep a pillow within reach.")];
var QUIZ=[
 {q:a("Какая атмосфера вам ближе?","Which atmosphere suits you?"),o:[[a("Туман, шёпот и призраки","Fog, whispers and ghosts"),{jhorror:2,giallo:1}],[a("Фонтаны красной краски","Fountains of red paint"),{splatterpunk:2,gore:1}],[a("Маска, нож и тёмный лагерь","A mask, a knife and a dark camp"),{slasher:2,exploit:1}],[a("Тело, которое меняется","A body that changes"),{body:2,extreme:1}]]},
 {q:a("Кто ваш герой?","Who is your hero?"),o:[[a("Последняя девушка, которая выживает","The final girl who survives"),{slasher:2}],[a("Безумный учёный","A mad scientist"),{splatterpunk:1,body:2}],[a("Свидетель, который видел слишком мало","A witness who saw too little"),{giallo:2}],[a("Тот, кого настигло проклятие","The one the curse has caught"),{jhorror:2}]]},
 {q:a("Сколько крови вы готовы увидеть?","How much blood can you take?"),o:[[a("Почти нисколько, хватит намёков","Hardly any, hints are enough"),{jhorror:1,giallo:1}],[a("Умеренно, по сюжету","Moderate, as the story needs"),{slasher:2}],[a("Фонтаны, и чтобы смешно","Fountains, and make it funny"),{splatterpunk:1,gore:1,trash:2}],[a("Столько, сколько есть","As much as there is"),{extreme:2,shock:2,body:1}]]},
 {q:a("Какой саундтрек?","What soundtrack?"),o:[[a("Синтезаторный пульс","A synth pulse"),{slasher:1,giallo:2}],[a("Тишина и помехи","Silence and static"),{jhorror:2}],[a("Индастриал и металл","Industrial and metal"),{body:1,extreme:1,splatterpunk:1}],[a("Дешёвый ретро-фанк","Cheap retro funk"),{trash:2,exploit:2}]]},
 {q:a("Какой бюджет симпатичнее?","Which budget is more appealing?"),o:[[a("Крошечный и гордый","Tiny and proud"),{trash:2,exploit:1}],[a("Артхаус с идеей","Arthouse with an idea"),{extreme:1,body:1,giallo:1}],[a("Большая студия","A big studio"),{slasher:1,gore:1}],[a("Какая разница","Who cares"),{splatterpunk:1,shock:2}]]}
];
var QREC={splatterpunk:["evil2","braindead","reanimator"],body:["fly","videodrome","raw"],slasher:["halloween","scream","burning"],giallo:["deepred","suspiria","birdcrystal"],jhorror:["ringu","hausu","audition"],extreme:["martyrs","inside","audition"],gore:["dawn","thing","zombi2"],shock:["tcm","maniac","cannibalholo"],trash:["toxavenger","troll2","sharknado"],exploit:["lasthouse","deathrace","planetterror"]};
var FEST=[[a("Фантазия, Монреаль","Fantasia, Montreal"),a("июль–август","July–August")],[a("FrightFest, Лондон","FrightFest, London"),a("август","August")],[a("Fantastic Fest, Остин","Fantastic Fest, Austin"),a("сентябрь","September")],[a("Ситжес, Каталония","Sitges, Catalonia"),a("октябрь","October")],[a("Screamfest, Лос-Анджелес","Screamfest, Los Angeles"),a("октябрь","October")],[a("Хэллоуин","Halloween"),a("31 октября","31 October")]];
var LISTS_EXTRA2=[
 {k:"u",ic:"giallo",t:a("Итальянское наследие: не только Ардженто","Italian legacy: not only Argento"),s:a("Бава, Фульчи и их соседи по готике.","Bava, Fulci and their gothic neighbours."),
  ids:["blacksunday","blacksabbath","solange","cat9","torso","blackcat81","phenomena","amer"]},
 {k:"u",ic:"slasher",t:a("Слэшеры 80-х: вторая волна","80s slashers: the second wave"),s:a("Лагеря, выпускные и всё, что вышло после «Хэллоуина».","Camps, proms and everything that came after Halloween."),
  ids:["terrortrain","promnight","hellnight","hbtm","slumber","sleepaway","nightmare","chucky"]},
 {k:"u",ic:"jhorror",t:a("Японская классика и культ","Japanese classics and cult"),s:a("От кайданов до «Королевской битвы».","From kaidan to Battle Royale."),
  ids:["kwaidan","onibaba","kuroneko","hausu","tomie","battleroyale","uzumaki","cure"]},
 {k:"u",ic:"shock",t:a("Шок-кино и мондо","Shock cinema and mondo"),s:a("Фильмы, которые продавались скандалом.","Films that sold on scandal."),
  ids:["mondocane","thrillkill","ilsa","facesofdeath","cannibalholo","nekromantik","salo"],warn:a("Содержат сцены жестокого насилия","Contain scenes of brutal violence")},
 {k:"u",ic:"trash",t:a("Культовый трэш: добавка","Cult trash: the sequel"),s:a("Фильмы, которые давно живут своей жизнью.","Films that long ago started living their own lives."),
  ids:["manos","basketcase","birdemic","motel","hatchet","streettrash","toxavenger","troll2"]},
 {k:"u",ic:"moon",t:a("Новая кровь: ещё больше","New blood: even more"),s:a("Свежие хиты ужасов 2015–2024.","Fresh horror hits of 2015–2024."),
  ids:["witch","greenroom","getout","us","talktome","smile","heretic","terrifier3"]},
 {k:"u",ic:"slasher",t:a("Слэшеры, которых забыли","Forgotten slashers"),s:a("Те, что вышли в тени «Хэллоуина» и «Пятницы, 13-е».","Slashers that came out in the shadow of Halloween and Friday the 13th."),
  ids:["silentnight","madman","prowler","pieces","intruder","justbefore","funhouse","stagefright","tcm2"]},
 {k:"u",ic:"giallo",t:a("Джалло: вторая полка","Giallo: the second shelf"),s:a("Глубже в итальянский детектив с ножом.","Deeper into the Italian knife-and-mystery."),
  ids:["duckling","glassdolls","lizard","scorpion","laughwindows","eyeball","stripnude","trauma93","mothertears"]},
 {k:"u",ic:"gore",t:a("Европейская готика и каннибалы","European gothic and cannibals"),s:a("Испания и Италия: слепые мертвецы, пустые пляжи, джунгли.","Spain and Italy: blind dead, empty beaches, jungles."),
  ids:["tombsblind","horrorexpress","whocankill","sleepingcorpses","burialground","nightmarecity","lisadevil","mountaincannibal","anthropophagus","zombieholo"]},
 {k:"u",ic:"trash",t:a("Трэш и безумие","Trash and madness"),s:a("Клоуны-пришельцы, кровать-людоед и зомби с бензином.","Alien clowns, a man-eating bed and gas-fuelled zombies."),
  ids:["klowns","deathbed","frankenhooker","rubber","tuckerdale","deadsnow","blacksheep","trowar","surfnazis","rednecks","lepus"]},
 {k:"u",ic:"jhorror",t:a("Азия: странное и страшное","Asia: strange and scary"),s:a("Японский и корейский ужас, от классики до трэша.","Japanese and Korean horror, classic to trash."),
  ids:["jigoku","yotsuya","matango","goke","eviltrap","sweethome","katakuris","dumplings","threeext","bedevilled","whisper","shutter"]},
 {k:"u",ic:"extreme",t:a("Экстрим: только для взрослых","Extreme: adults only"),s:a("Самое жёсткое. Смотреть осторожно.","The hardest stuff. Watch with care."),
  ids:["menbehindsun","guinea1","grotesque","augustund","baisemoi","sheitan","housejack"]},
 {k:"u",ic:"shock",t:a("Новая волна 2017–2025","The new wave 2017–2025"),s:a("Свежие страшные фильмы последних лет.","Fresh frights from recent years."),
  ids:["revenge","hagazussa","ritual","apostle","cam","readyornot","saintmaud","censor","lamb","whenevil","strangedarling","immaculate","oddity","violentnature","together","monkey"]},
 {k:"u",ic:"body",t:a("Боди-хоррор: ещё мясо","Body horror: more flesh"),s:a("Тело начинает жить своей жизнью.","The body starts living its own life."),
  ids:["possessor","antiviral","crimesfuture","splinter","xtro","blob88","tusk","teeth","contracted","nakedblood","infection"]},
 {k:"u",ic:"pent",t:a("Классика 30–60-х","The classics, 1930s–60s"),s:a("Старый ужас, который до сих пор действует.","Old horror that still works."),
  ids:["blackcat34","lostsouls","vampyr","seventhvictim","bodysnatcher45","diabolique","houseonhill","hushcharlotte","twothousand"]},
 {k:"u",ic:"moon",t:a("Тихие кошмары 2007–2015","Quiet nightmares 2007–2015"),s:a("Без шума и грохота, но с мурашками.","No noise or bang, but plenty of chills."),
  ids:["orphanage","trickrtreat","absentia","resolution","innkeepers","housebound","invitation","girlwalks","spring","pontypool"]},
 {k:"u",ic:"web",t:a("Европейские странности","European oddities"),s:a("Вампиры, ведьмы и странные дома.","Vampires, witches and strange houses."),
  ids:["daughtersdark","bloodspattered","vampyres","anguish","tesis","julia","edenlake","goodnightmommy","trollhunter"]},
 {k:"u",ic:"trash",t:a("Трэш-комедии и безумие 80-х","Trash comedies and 80s madness"),s:a("Кровь, шутки и резиновые монстры.","Blood, jokes and rubber monsters."),
  ids:["blooddiner","frogtown","galaxyterror","forbiddenworld","poultrygeist","cannibalmusical","notld90","fathersday","monstersquad","pumpkinhead"]},
 {k:"u",ic:"ghost",t:a("Дома с привидениями","Haunted houses"),s:a("Дома, которые не хотят отпускать.","Houses that do not want to let go."),
  ids:["hellhouse","amityville","ghoststory","house86","nighthouse","n1408","whatlies","aghoststory","stirechoes"]},
 {k:"u",ic:"body",t:a("Современный хоррор без жалости","Modern horror with no mercy"),s:a("Вышло после 2015 года и бьёт сильно.","Released after 2015 and hits hard."),
  ids:["mother","split","itcomesnight","annihilation","malignant","lastnightsoho","nanny","thanksgiving","sawx","abigail","firstomen","speaknoevil24"]}
];
LISTS=LISTS.concat([
 {k:"u",ic:"jhorror",t:a("Звонок: порядок просмотра","Ringu: watch order"),s:a("От кассеты до встречи с Кайако.","From the tape to the meeting with Kayako."),
  ids:["ringu","ringu2","ringu0","rasen","thering02","ringtwo","sadako3d","sadakokayako"]},
 {k:"u",ic:"jhorror",t:a("Ju-On: порядок просмотра","Ju-On: watch order"),s:a("Дом Саэки в оригинальных и американских фильмах.","The Saeki house across original and American films."),
  ids:["juoncurse","juon","juon2","grudge","grudge2","juonorigins","sadakokayako"]},
 {k:"u",ic:"jhorror",t:a("Дзюндзи Ито на экране","Junji Ito on screen"),s:a("Спирали, рыбы и бессмертная красавица.","Spirals, fish and the immortal beauty."),
  ids:["uzumaki","uzumakianime","gyo","itocollection","itomaniac","tomie"]},
 {k:"u",ic:"jhorror",t:a("Томиэ: все фильмы","Tomie: all the films"),s:a("От 1998 года до «Unlimited».","From 1998 to Unlimited."),
  ids:["tomie","tomie2","tomierebirth","tomiebeginning","tomierevenge","tomieunlimited"]}
]);
LISTS=LISTS.concat(LISTS_EXTRA2);
var START=[
 {ic:"splatterpunk",t:a("Сплаттер для новичков","Splatter for beginners"),lv:2,s:a("Начинайте со смешного: кровь здесь такая яркая, что пугает мало.","Start with the funny ones: the blood here is so bright it barely scares."),ids:["evil2","returnliving","reanimator","badtaste","braindead"]},
 {ic:"body",t:a("Боди-хоррор для новичков","Body horror for beginners"),lv:3,s:a("Лучшие первые шаги: сюжет держит, а тело пугает постепенно.","The best first steps: the story holds while the body frightens gradually."),ids:["fly","thing","videodrome","raw","substance"]},
 {ic:"slasher",t:a("Слэшеры для новичков","Slashers for beginners"),lv:3,s:a("Классика, по которой удобно понять правила жанра.","Classics that make the rules of the genre easy to learn."),ids:["halloween","scream","nightmare","fri13","burning"]}
];
var WATCH=[
 [a("Тэцуо: Железный человек","Tetsuo: The Iron Man"),a("1989 · Синъя Цукамото · киберпанк","1989 · Shinya Tsukamoto · cyberpunk")],
 [a("Мясной станок","Meatball Machine"),a("2005 · Юдай Ямагути, Дзюнъити Ямамото","2005 · Yūdai Yamaguchi, Jun'ichi Yamamoto")],
 [a("Полиция Токио","Tokyo Gore Police"),a("2008 · Ёсихиро Нисимура","2008 · Yoshihiro Nishimura")],
 [a("Девушка-пулемёт","The Machine Girl"),a("2008 · Нобору Игути","2008 · Noboru Iguchi")],
 [a("Вампирша против Франкенштейн-девушки","Vampire Girl vs. Frankenstein Girl"),a("2009 · Ёсихиро Нисимура, Наоюки Томомацу","2009 · Yoshihiro Nishimura, Naoyuki Tomomatsu")],
 [a("Хеллдрайвер","Helldriver"),a("2010 · Ёсихиро Нисимура","2010 · Yoshihiro Nishimura")]
];

var OFFER=[
 ["star",a("Рецензии","Reviews"),a("Авторские разборы с оценкой и шкалой жести. Можно искать по названию и фильтровать по жанрам.","Original write-ups with a rating and a gore scale. Search by title and filter by genre.")],
 ["clap",a("Новинки и новости","Releases and news"),a("Что вышло и что скоро выйдет в мире жанрового кино, коротко и без воды.","What has come out and what is coming in genre cinema, short and to the point.")],
 ["book",a("Статьи","Features"),a("Длинные материалы о поджанрах и течениях, например о японском трэше.","Long reads on subgenres and movements, such as Japanese trash.")],
 ["list",a("Списки и рейтинги","Lists and rankings"),a("Шестнадцать списков: от топа боди-хоррора до видео-гадостей 80-х.","Sixteen lists, from the top body horror to the video nasties of the 80s.")],
 ["tape",a("Подборки на вечер","Shelves for one night"),a("Готовые наборы фильмов: марафон на Хэллоуин, первое свидание, только практические эффекты.","Ready-made sets of films: a Halloween marathon, a first date, practical effects only.")],
 ["chart",a("Карта крови","Blood map"),a("Статистика сайта: жанры, жесть против оценки и каталог по десятилетиям.","Site statistics: genres, gore versus rating and the catalogue by decade.")],
 ["frame",a("Арт","Artwork"),a("Авторские постеры и логотипы Horror Aesthetic в галерее.","Original Horror Aesthetic posters and logos in a gallery.")],
 ["reel",a("Каталог","Catalogue"),a("Почти шестьсот фильмов с поиском по названию и фильтром по десятилетиям.","Nearly six hundred films with title search and a decade filter.")],
 ["web",a("Субжанры","Subgenres"),a("Двенадцать направлений: фолк-хоррор, зомби, вампиры, каннибалы и другие.","Twelve directions: folk horror, zombies, vampires, cannibals and more.")],
 ["saw",a("Новичкам","Start here"),a("Маршруты по сплаттеру, боди-хоррору и слэшерам в порядке нарастающей жести.","Routes through splatter, body horror and slashers in order of rising gore.")],
 ["eye",a("Фильм ночи и факты","Film of the night and facts"),a("Каждый день новый фильм на вечер и короткий факт из истории жанра.","A new film for the evening every day and a short fact from the genre's history.")],
 ["pent",a("Десять жанров","Ten genres"),a("Сплаттерпанк, боди-хоррор, слэшер, джалло, J-Horror, экстрим, гор, шок, трэш и эксплуатация.","Splatterpunk, body horror, slasher, giallo, J-Horror, extreme, gore, shock, trash and exploitation.")]
];
var GALLERY=[
 ["p_red_house","poster",a("Постер: дом на холме под красной луной","Poster: the house on the hill under the red moon")],
 ["p_shrine","poster",a("Постер: проклятое святилище","Poster: the cursed shrine")],
 ["p_call_sq","poster",a("Постер: один пропущенный звонок","Poster: one missed call")],
 ["p_juon_sq","poster",a("Постер: Ju-On, 呪怨","Poster: Ju-On, 呪怨")],
 ["p_tomie_sq","poster",a("Постер: Tomie, коллаж","Poster: Tomie, collage")],
 ["p_tomie_sq2","poster",a("Постер: Tomie и её отражения","Poster: Tomie and her reflections")],
 ["p_red_wide","poster",a("Постер: Horror Aesthetic, тории и кукла","Poster: Horror Aesthetic, the torii and the doll")],
 ["p_call2","poster",a("Постер: пропущенный звонок, вторая кассета","Poster: missed call, the second tape")],
 ["p_call1","poster",a("Постер: пропущенный звонок на татами","Poster: missed call on the tatami")],
 ["p_juon_wide","poster",a("Постер: Ju-On, дверь в конце коридора","Poster: Ju-On, the door at the end of the hall")],
 ["p_tomie_collage","poster",a("Постер: Tomie, спираль и кровь","Poster: Tomie, spiral and blood")],
 ["p_tomie_wide","poster",a("Постер: Tomie, взгляд через плечо","Poster: Tomie, a look over the shoulder")],
 ["b_red","banner",a("Баннер: рука из тьмы","Banner: the hand from the dark")],
 ["b_shrine_ru","banner",a("Баннер: J-Horror, древнее проклятие","Banner: J-Horror, the ancient curse")],
 ["b_fox","banner",a("Баннер: J-Horror, лиса у тории","Banner: J-Horror, the fox by the torii")],
 ["b_call","banner",a("Баннер: пропущенный звонок","Banner: missed call")],
 ["b_juon","banner",a("Баннер: Ju-On","Banner: Ju-On")],
 ["b_tomie_spiral","banner",a("Баннер: Tomie, спираль и зеркало","Banner: Tomie, spiral and mirror")],
 ["b_tomie","banner",a("Баннер: Tomie","Banner: Tomie")],
 ["w_hand","poster",a("Постер: добро пожаловать, рука из тьмы","Poster: welcome, the hand from the dark")],
 ["w_torii","poster",a("Постер: врата тории под красной луной","Poster: the torii gate under the red moon")],
 ["w_skull","poster",a("Постер: череп, свеча и тихая вода","Poster: skull, candle and still water")],
 ["w_raven","logo",a("Знак: ворон на черепе","Emblem: the raven on the skull")],
 ["w_back","poster",a("Постер: она стоит спиной","Poster: she stands with her back to you")],
 ["w_sadako","poster",a("Постер: Добро пожаловать, лестница и фонарь","Poster: welcome, the stairs and the lantern")],
 ["s_gen2","banner",a("Баннер: проклятая кассета","Banner: the cursed tape")],
 ["s_gen3","banner",a("Баннер: коридор школы и кукла","Banner: the school corridor and the doll")],
 ["s_gen1","banner",a("Баннер: пагода и красная луна","Banner: the pagoda and the red moon")],
 ["s_cinema","banner",a("Баннер: кинозал","Banner: the cinema")],
 ["s_dark","banner",a("Баннер: тёмный архив","Banner: the dark archive")],
 ["jh2","banner",a("Баннер: качели и школа, 1997","Banner: the swings and the school, 1997")],
 ["jh1","poster",a("Постер: призрак у заброшенной школы","Poster: the ghost at the abandoned school")],
 ["jh3","banner",a("Баннер: красная луна и пагода","Banner: the red moon and the pagoda")],
 ["jh4","banner",a("Баннер: лестница в храм","Banner: the temple stairs")],
 ["jh5","banner",a("Баннер: лицо, кукла и телевизор","Banner: the face, the doll and the TV")],
 ["jh6","poster",a("Обложка: REC и тянущаяся рука","Cover: REC and the reaching hand")],
 ["jh7","banner",a("Кадр: выход из телевизора и телефон","Still: out of the TV and the phone")],
 ["jh8","banner",a("Баннер: она ползёт из экрана","Banner: she crawls out of the screen")],
 ["jh9","banner",a("Кадр: коридор, ладони и кукла","Still: the corridor, the handprints and the doll")],
 ["jh10","poster",a("Обложка: сакура и телевизор","Cover: sakura and the TV")],
 ["jh11","poster",a("Обложка: фонарь с иероглифом «проклятие»","Cover: the lantern marked “curse”")],
 ["jh12","poster",a("Обложка: 31 октября 1998","Cover: October 31, 1998")],
 ["jh13","banner",a("Баннер: колодец и ТВ, 1998","Banner: the well and the TV, 1998")],
 ["jh14","poster",a("Постер: рука из темноты и тории","Poster: the hand from the dark and the torii")],
 ["jh15","banner",a("Баннер: сакура и дух в окне","Banner: sakura and a spirit in the window")],
 ["jh16","banner",a("Баннер: красные окна и переулок","Banner: red windows and the alley")],
 ["jh17","poster",a("Обложка: кукла и кровавая луна","Cover: the doll and the blood moon")],
 ["jh18","poster",a("Обложка: VHS и пагода","Cover: VHS and the pagoda")],
 ["jh19","banner",a("Баннер: тории, джизо и кассеты","Banner: torii, jizo and the tapes")],
 ["jh20","poster",a("Обложка: рука тянется из экрана","Cover: the hand reaching from the screen")],
 ["n_hb1","banner",a("Баннер: маски над кладбищем","Banner: masks over the graveyard")],
 ["n_wide2","banner",a("Баннер: Пинхед и ночной город","Banner: Pinhead and the night city")],
 ["n_wide1","banner",a("Широкий коллаж: герои ужасов","Wide collage: horror icons")],
 ["n_trio","poster",a("Постер: Майерс и Пеннивайз","Poster: Myers and Pennywise")],
 ["n_shattered","poster",a("Разбитый кошмар","The shattered nightmare")],
 ["n_castle","poster",a("Постер: замок в тумане","Poster: the castle in the fog")],
 ["n_window","poster",a("Окно в кошмар","A window into the nightmare")],
 ["n_alien","art",a("Коллаж: чужой и монстры","Collage: the alien and monsters")],
 ["n_jason","art",a("Арт: Джейсон и Чаки","Art: Jason and Chucky")],
 ["n_circlew","logo",a("Круглый логотип: девушка и тьма","Round logo: the girl and the dark")],
 ["logo_ha","logo",a("Круглый логотип: Horror Aesthetic","Round logo: Horror Aesthetic")],
 ["cv_psych","banner",a("Обложка: психология J-Horror","Cover: the psychology of J-Horror")],
 ["cv_wide3","banner",a("Баннер: Horror Aesthetic — кино, культура, ужас","Banner: Horror Aesthetic — movies, culture, horror")],
 ["n_crown","logo",a("Круглый логотип: череп в короне","Round logo: the crowned skull")],
 ["pano2","banner",a("Баннер: герои ужасов у замка","Banner: horror heroes by the castle")],
 ["jp","poster",a("Постер: японский призрак и красная луна","Poster: a Japanese ghost under a red moon")],
 ["skull","logo",a("Логотип: череп в короне и шипы","Logo: a crowned skull and thorns")],
 ["circus","poster",a("Постер: маска и цирковой шатёр","Poster: a mask and a circus tent")],
 ["vintage","poster",a("Винтажная обложка: красная луна","Vintage cover: the red moon")],
 ["comic","poster",a("Обложка в духе комиксов 50-х","A cover in the spirit of 50s comics")],
 ["statue","banner",a("Баннер: статуя и кровавая луна","Banner: a statue and a blood moon")],
 ["slashers","poster",a("Постер: маски и красная луна","Poster: masks and the red moon")],
 ["collage","poster",a("Коллаж: маски и осколки","Collage: masks and shards")],
 ["circle1","logo",a("Круглый логотип: лицо и собор","Round logo: a face and a cathedral")],
 ["gothic","poster",a("Готический постер: кладбище","Gothic poster: the graveyard")],
 ["room","banner",a("Баннер: тёмная комната","Banner: the dark room")],
 ["chars","banner",a("Баннер: монстры у замка","Banner: monsters at the castle")],
 ["collage2","poster",a("Коллаж: страхи разных лет","Collage: fears of different years")],
 ["pano1","banner",a("Панорама: маски и кладбище","Panorama: masks and the cemetery")],
 ["eye","art",a("Арт: глаз и кладбище","Art: an eye and a graveyard")],
 ["poster17","poster",a("Постер: ужасы разных эпох","Poster: horror of different eras")],
 ["welcome","poster",a("Постер: добро пожаловать","Poster: welcome")],
 ["poster","poster",a("Постер: японский треш-кинематограф","Poster: Japanese trash cinema")],
 ["banner","banner",a("Первый баннер сайта","The site's first banner")],
 ["logo_cathedral","logo",a("Логотип: собор и кровавая луна","Logo: cathedral and blood moon")],
 ["logo_goat","logo",a("Логотип: козлиный череп и крылья","Logo: goat skull and wings")],
 ["zombie","art",a("Зомби с бензопилой","Zombie with a chainsaw")],
 ["schoolgirl","art",a("Школьница и кровавая катана","The schoolgirl and the bloody blade")],
 ["cyber","art",a("Киберрука среди черепов","Cyber arm among the skulls")],
 ["monster","art",a("Монстр на пентаграмме","Monster on the pentagram")],
 ["v_wide","poster",a("Постер: J-Horror вампир, дом под луной","Poster: the J-Horror vampire, the house under the moon")],
 ["v_sq","poster",a("Обложка: J-Horror вампир и красная луна","Cover: the J-Horror vampire and the red moon")],
 ["hero_vamp","banner",a("Баннер: J-Horror вампир","Banner: J-Horror vampire")],
 ["u_wide","poster",a("Постер: городские легенды Японии","Poster: Japanese urban legends")],
 ["u_sq","poster",a("Обложка: городские легенды, 都市の怪談","Cover: urban legends, 都市の怪談")],
 ["hero_urban","banner",a("Баннер: Кутисакэ-онна, Хикико-сан и электричка","Banner: Kuchisake-onna, Hikiko-san and the train")],
 ["s_wide","poster",a("Постер: ножницы и маска","Poster: the scissors and the mask")],
 ["s_sq","poster",a("Обложка: женщина с разрезанным ртом","Cover: the slit-mouthed woman")],
 ["hero_scis","banner",a("Баннер: красная луна и тории, 口裂け女","Banner: the red moon and torii, 口裂け女")],
 ["t_wide","poster",a("Постер: призрачный театр, 幽霊の劇場","Poster: the ghost theatre, 幽霊の劇場")],
 ["t_sq","poster",a("Обложка: маски Но и пустой зал","Cover: Noh masks and the empty hall")],
 ["hero_thea","banner",a("Баннер: призрак на сцене","Banner: the ghost on the stage")],
 ["k_wide","poster",a("Кадр: Kairo, 2001, красный глаз на плёнке","Still: Kairo, 2001, the red eye on tape")],
 ["k_sq","poster",a("Обложка: Kairo, 回路","Cover: Kairo, 回路")],
 ["hero_kairo","banner",a("Баннер: Kairo, заброшенный дом и коридор","Banner: Kairo, the abandoned building and the corridor")],
 ["o_wide","poster",a("Постер: онмёдзи, печать и красная нить","Poster: onmyoji, the seal and the red thread")],
 ["o_sq","poster",a("Обложка: онмёдзи, 陰陽師","Cover: onmyoji, 陰陽師")],
 ["hero_onmy","banner",a("Баннер: онмёдзи, тории и духи у воды","Banner: onmyoji, torii and spirits by the water")],
 ["x_tetsuo","poster",a("Постер: железо и плоть, ホラーエステティック","Poster: metal and flesh, ホラーエステティック")],
 ["tt_wide","poster",a("Постер: Тэцуо, плоть и железо","Poster: Tetsuo, flesh and metal")],
 ["hero_tets","banner",a("Баннер: Тэцуо, 鉄男","Banner: Tetsuo, 鉄男")],
 ["hero_dream","banner",a("Баннер: это не сон, 夢ではない","Banner: this is not a dream, 夢ではない")],
 ["d_wide","poster",a("Постер: часы, телевизор и коридор","Poster: the clock, the TV and the corridor")],
 ["d_sq","poster",a("Обложка: 2002.07.12, 03:27","Cover: 2002.07.12, 03:27")],
 ["kd_sq","poster",a("Обложка: Кайдан, кукла и красные ликорисы","Cover: Kaidan, the doll and the red spider lilies")],
 ["hero_kai2","banner",a("Баннер: Кайдан, дом и телевизор","Banner: Kaidan, the house and the TV")],
 ["kd_wide","poster",a("Постер: девочки в дверях, 怪談","Poster: the girls in the doorway, 怪談")],
];

/* v121: original poster art */
var PSTR={"ringu": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><linearGradient id=\"b-ringu\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#06161b\"/><stop offset=\"1\" stop-color=\"#0d343a\"/><\/linearGradient><radialGradient id=\"w-ringu\" cx=\".5\" cy=\".5\" r=\".5\"><stop offset=\"0\" stop-color=\"#2b6a70\"/><stop offset=\".7\" stop-color=\"#0b2a2f\"/><stop offset=\"1\" stop-color=\"#020809\"/><\/radialGradient><linearGradient id=\"f-ringu\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#02080a\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#02080a\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-ringu\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-ringu)\"/><g stroke=\"#9fe3df\" stroke-opacity=\".08\" stroke-width=\"1\"><path d=\"M0 6 H200\"/><path d=\"M0 13 H200\"/><path d=\"M0 20 H200\"/><path d=\"M0 27 H200\"/><path d=\"M0 34 H200\"/><path d=\"M0 41 H200\"/><path d=\"M0 48 H200\"/><path d=\"M0 55 H200\"/><path d=\"M0 62 H200\"/><path d=\"M0 69 H200\"/><path d=\"M0 76 H200\"/><path d=\"M0 83 H200\"/><path d=\"M0 90 H200\"/><path d=\"M0 97 H200\"/><path d=\"M0 104 H200\"/><path d=\"M0 111 H200\"/><path d=\"M0 118 H200\"/><path d=\"M0 125 H200\"/><path d=\"M0 132 H200\"/><path d=\"M0 139 H200\"/><path d=\"M0 146 H200\"/><path d=\"M0 153 H200\"/><path d=\"M0 160 H200\"/><path d=\"M0 167 H200\"/><path d=\"M0 174 H200\"/><path d=\"M0 181 H200\"/><path d=\"M0 188 H200\"/><path d=\"M0 195 H200\"/><path d=\"M0 202 H200\"/><path d=\"M0 209 H200\"/><path d=\"M0 216 H200\"/><path d=\"M0 223 H200\"/><path d=\"M0 230 H200\"/><path d=\"M0 237 H200\"/><path d=\"M0 244 H200\"/><\/g><ellipse cx=\"100\" cy=\"112\" rx=\"76\" ry=\"76\" fill=\"#27393b\"/><ellipse cx=\"100\" cy=\"112\" rx=\"64\" ry=\"64\" fill=\"#0b1415\"/><circle cx=\"100\" cy=\"112\" r=\"56\" fill=\"url(#w-ringu)\"/><g fill=\"none\" stroke=\"#030708\" stroke-linecap=\"round\" stroke-width=\"1.6\"><path d=\"M100 112c-8 -20 -30 -30 -48 -22c-6 3 -10 8 -12 14\"/><path d=\"M100 112c-14 -14 -34 -12 -44 0c-6 8 -5 18 2 24\"/><path d=\"M100 112c10 -22 34 -28 50 -14c8 7 10 18 6 28\"/><path d=\"M100 112c4 22 -4 40 -24 46\"/><path d=\"M100 112c16 10 26 28 20 46\"/><path d=\"M100 112c-2 -16 -12 -30 -28 -38\"/><path d=\"M62 98c-12 6 -22 20 -24 38c-2 14 4 30 10 40\" stroke-width=\"2.2\"/><path d=\"M142 100c14 10 20 28 16 46\" stroke-width=\"2.2\"/><\/g><circle cx=\"100\" cy=\"112\" r=\"3\" fill=\"#8fd3cf\" opacity=\".7\"/><text x=\"14\" y=\"236\" fill=\"#9fe3df\" fill-opacity=\".35\" font-family=\"Georgia,serif\" font-size=\"46\" font-weight=\"700\">7<\/text><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-ringu)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-ringu)\"/><\/svg>", "suspiria": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><radialGradient id=\"g-suspiria\" cx=\".5\" cy=\".32\" r=\".7\"><stop offset=\"0\" stop-color=\"#ffb3a0\" stop-opacity=\".55\"/><stop offset=\"1\" stop-color=\"#000\" stop-opacity=\".6\"/><\/radialGradient><linearGradient id=\"f-suspiria\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#1a0206\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#1a0206\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-suspiria\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"#7a0a14\"/><path d=\"M100 80L360.0 80.0L351.1 147.3z\" fill=\"#1a3a8a\"/><path d=\"M100 80L351.1 147.3L325.2 210.0z\" fill=\"#a30f1c\"/><path d=\"M100 80L325.2 210.0L283.8 263.8z\" fill=\"#1a3a8a\"/><path d=\"M100 80L283.8 263.8L230.0 305.2z\" fill=\"#a30f1c\"/><path d=\"M100 80L230.0 305.2L167.3 331.1z\" fill=\"#1a3a8a\"/><path d=\"M100 80L167.3 331.1L100.0 340.0z\" fill=\"#a30f1c\"/><path d=\"M100 80L100.0 340.0L32.7 331.1z\" fill=\"#1a3a8a\"/><path d=\"M100 80L32.7 331.1L-30.0 305.2z\" fill=\"#a30f1c\"/><path d=\"M100 80L-30.0 305.2L-83.8 263.8z\" fill=\"#1a3a8a\"/><path d=\"M100 80L-83.8 263.8L-125.2 210.0z\" fill=\"#a30f1c\"/><path d=\"M100 80L-125.2 210.0L-151.1 147.3z\" fill=\"#1a3a8a\"/><path d=\"M100 80L-151.1 147.3L-160.0 80.0z\" fill=\"#a30f1c\"/><path d=\"M100 80L-160.0 80.0L-151.1 12.7z\" fill=\"#1a3a8a\"/><path d=\"M100 80L-151.1 12.7L-125.2 -50.0z\" fill=\"#a30f1c\"/><path d=\"M100 80L-125.2 -50.0L-83.8 -103.8z\" fill=\"#1a3a8a\"/><path d=\"M100 80L-83.8 -103.8L-30.0 -145.2z\" fill=\"#a30f1c\"/><path d=\"M100 80L-30.0 -145.2L32.7 -171.1z\" fill=\"#1a3a8a\"/><path d=\"M100 80L32.7 -171.1L100.0 -180.0z\" fill=\"#a30f1c\"/><path d=\"M100 80L100.0 -180.0L167.3 -171.1z\" fill=\"#1a3a8a\"/><path d=\"M100 80L167.3 -171.1L230.0 -145.2z\" fill=\"#a30f1c\"/><path d=\"M100 80L230.0 -145.2L283.8 -103.8z\" fill=\"#1a3a8a\"/><path d=\"M100 80L283.8 -103.8L325.2 -50.0z\" fill=\"#a30f1c\"/><path d=\"M100 80L325.2 -50.0L351.1 12.7z\" fill=\"#1a3a8a\"/><path d=\"M100 80L351.1 12.7L360.0 80.0z\" fill=\"#a30f1c\"/><rect width=\"200\" height=\"250\" fill=\"url(#g-suspiria)\"/><circle cx=\"100\" cy=\"92\" r=\"46\" fill=\"#0a0204\" stroke=\"#f3d9c8\" stroke-width=\"1.6\"/><path d=\"M62 92c14 -22 62 -22 76 0c-14 22 -62 22 -76 0z\" fill=\"#f3d9c8\"/><circle cx=\"100\" cy=\"92\" r=\"13\" fill=\"#a30f1c\"/><circle cx=\"100\" cy=\"92\" r=\"5.5\" fill=\"#0a0204\"/><path d=\"M100 138v54M84 150l16 42l16 -42\" stroke=\"#f3d9c8\" stroke-width=\"1.4\" fill=\"none\"/><path d=\"M40 214h120\" stroke=\"#f3d9c8\" stroke-opacity=\".6\" stroke-width=\"1.2\"/><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-suspiria)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-suspiria)\"/><\/svg>", "thing": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><linearGradient id=\"b-thing\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#e6f1f6\"/><stop offset=\".55\" stop-color=\"#93b5c8\"/><stop offset=\"1\" stop-color=\"#0d1f2b\"/><\/linearGradient><linearGradient id=\"f-thing\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#050b10\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#050b10\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-thing\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-thing)\"/><path d=\"M0 140l30 -16l24 10l34 -22l30 14l28 -12l54 20v116H0z\" fill=\"#cfe0ea\"/><path d=\"M0 160l40 -10l30 12l36 -18l34 14l60 -10v102H0z\" fill=\"#6f93aa\"/><path d=\"M0 190c40 -16 80 -6 110 -10c40 -4 60 -12 90 -4v74H0z\" fill=\"#0d1f2b\"/><path d=\"M100 178c-14 -10 -30 -4 -44 -24\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M100 178c-6 -18 -2 -34 -18 -52\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><path d=\"M100 178c8 -16 24 -30 22 -54\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"2.6\" stroke-linecap=\"round\"/><path d=\"M100 178c16 -6 36 -8 52 -26\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"3\" stroke-linecap=\"round\"/><path d=\"M100 178c-18 6 -40 8 -58 -2\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><path d=\"M100 178c14 8 34 14 56 8\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"2.2\" stroke-linecap=\"round\"/><path d=\"M100 178c-4 10 -8 24 -22 34\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"2\" stroke-linecap=\"round\"/><path d=\"M100 178c6 10 14 24 30 30\" fill=\"none\" stroke=\"#050b10\" stroke-width=\"2\" stroke-linecap=\"round\"/><ellipse cx=\"100\" cy=\"182\" rx=\"22\" ry=\"12\" fill=\"#050b10\"/><circle cx=\"92\" cy=\"180\" r=\"2.4\" fill=\"#ff5a3c\"/><circle cx=\"108\" cy=\"180\" r=\"2.4\" fill=\"#ff5a3c\"/><g transform=\"translate(40 128)\" fill=\"#050b10\"><rect x=\"-2\" y=\"0\" width=\"4\" height=\"12\"/><circle cx=\"0\" cy=\"-2\" r=\"3\"/><\/g><path d=\"M30 40h140\" stroke=\"#fff\" stroke-opacity=\".2\" stroke-dasharray=\"2 5\"/><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-thing)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-thing)\"/><\/svg>", "jaws": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><linearGradient id=\"b-jaws\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#0a1a2f\"/><stop offset=\".55\" stop-color=\"#16406b\"/><stop offset=\".56\" stop-color=\"#0b2b4a\"/><stop offset=\"1\" stop-color=\"#020a14\"/><\/linearGradient><radialGradient id=\"m-jaws\" cx=\".5\" cy=\".5\" r=\".5\"><stop offset=\"0\" stop-color=\"#fffbe8\"/><stop offset=\"1\" stop-color=\"#fffbe8\" stop-opacity=\"0\"/><\/radialGradient><linearGradient id=\"f-jaws\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#020a14\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#020a14\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-jaws\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-jaws)\"/><circle cx=\"150\" cy=\"54\" r=\"46\" fill=\"url(#m-jaws)\" opacity=\".35\"/><circle cx=\"150\" cy=\"54\" r=\"15\" fill=\"#f6efd6\"/><path d=\"M60 136h140\" stroke=\"#9fc9ee\" stroke-opacity=\".35\"/><path d=\"M150 70v66\" stroke=\"#f6efd6\" stroke-opacity=\".3\" stroke-width=\"6\" stroke-dasharray=\"1 5\"/><path d=\"M86 138c4 -26 10 -48 18 -60c4 18 10 40 24 60z\" fill=\"#050d18\"/><g fill=\"none\" stroke=\"#bfe0ff\" stroke-opacity=\".55\"><ellipse cx=\"108\" cy=\"140\" rx=\"30\" ry=\"4\"/><ellipse cx=\"108\" cy=\"141\" rx=\"48\" ry=\"7\" stroke-opacity=\".3\"/><ellipse cx=\"108\" cy=\"142\" rx=\"66\" ry=\"10\" stroke-opacity=\".18\"/><\/g><path d=\"M0 170c30 -6 50 6 80 0s50 -6 70 0s30 4 50 0M0 196c30 -6 50 6 80 0s50 -6 70 0s30 4 50 0\" fill=\"none\" stroke=\"#0e3a63\" stroke-width=\"2\" stroke-opacity=\".7\"/><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-jaws)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-jaws)\"/><\/svg>", "hellraiser": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><radialGradient id=\"b-hell\" cx=\".5\" cy=\".45\" r=\".7\"><stop offset=\"0\" stop-color=\"#4a0a10\"/><stop offset=\"1\" stop-color=\"#080203\"/><\/radialGradient><linearGradient id=\"f-hellraiser\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#080203\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#080203\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-hellraiser\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-hell)\"/><path d=\"M70 98L6 40\" stroke=\"#c9a85a\" stroke-width=\"2\" stroke-dasharray=\"5 3\" opacity=\".8\"/><path d=\"M6 40c4 -6 12 -4 10 4c-2 6 -10 6 -10 -2\" fill=\"none\" stroke=\"#e6e0d2\" stroke-width=\"2\"/><path d=\"M130 98L194 36\" stroke=\"#c9a85a\" stroke-width=\"2\" stroke-dasharray=\"5 3\" opacity=\".8\"/><path d=\"M194 36c4 -6 12 -4 10 4c-2 6 -10 6 -10 -2\" fill=\"none\" stroke=\"#e6e0d2\" stroke-width=\"2\"/><path d=\"M68 150L8 206\" stroke=\"#c9a85a\" stroke-width=\"2\" stroke-dasharray=\"5 3\" opacity=\".8\"/><path d=\"M8 206c4 -6 12 -4 10 4c-2 6 -10 6 -10 -2\" fill=\"none\" stroke=\"#e6e0d2\" stroke-width=\"2\"/><path d=\"M132 150L196 214\" stroke=\"#c9a85a\" stroke-width=\"2\" stroke-dasharray=\"5 3\" opacity=\".8\"/><path d=\"M196 214c4 -6 12 -4 10 4c-2 6 -10 6 -10 -2\" fill=\"none\" stroke=\"#e6e0d2\" stroke-width=\"2\"/><g stroke=\"#c9a85a\" stroke-width=\"1.6\" stroke-linejoin=\"round\"><path d=\"M100 70l44 24v54l-44 24l-44 -24v-54z\" fill=\"#120405\"/><path d=\"M100 70v54M56 94l44 30l44 -30\" fill=\"none\"/><path d=\"M100 82l32 18l-32 18l-32 -18z\" fill=\"none\"/><path d=\"M100 94l16 9l-16 9l-16 -9z\" fill=\"#c9a85a\" fill-opacity=\".25\"/><path d=\"M62 120l34 20v26M138 120l-34 20\" fill=\"none\" stroke-opacity=\".7\"/><path d=\"M62 106v28M76 114v28M138 106v28M124 114v28\" stroke-opacity=\".55\" fill=\"none\"/><\/g><circle cx=\"100\" cy=\"124\" r=\"3\" fill=\"#d8232b\"/><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-hellraiser)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-hellraiser)\"/><\/svg>", "shining": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><linearGradient id=\"b-shin\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#eef3f6\"/><stop offset=\"1\" stop-color=\"#b9cbd4\"/><\/linearGradient><linearGradient id=\"f-shining\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#0b1d12\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#0b1d12\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-shining\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-shin)\"/><path d=\"M20 20H180V210H20V50H150V180H50V80H120V150H80V110H100\" fill=\"none\" stroke=\"#12331f\" stroke-width=\"15\" stroke-linejoin=\"miter\"/><path d=\"M20 20H180V210H20V50H150V180H50V80H120V150H80V110H100\" fill=\"none\" stroke=\"#1f5a37\" stroke-width=\"7\" stroke-linejoin=\"miter\" stroke-opacity=\".85\"/><circle cx=\"100\" cy=\"110\" r=\"4.5\" fill=\"#d8232b\"/><g fill=\"#fff\" fill-opacity=\".85\"><circle cx=\"0\" cy=\"0\" r=\"0.8\"/><circle cx=\"37\" cy=\"53\" r=\"1.3\"/><circle cx=\"74\" cy=\"106\" r=\"1.8\"/><circle cx=\"111\" cy=\"159\" r=\"0.8\"/><circle cx=\"148\" cy=\"212\" r=\"1.3\"/><circle cx=\"185\" cy=\"15\" r=\"1.8\"/><circle cx=\"22\" cy=\"68\" r=\"0.8\"/><circle cx=\"59\" cy=\"121\" r=\"1.3\"/><circle cx=\"96\" cy=\"174\" r=\"1.8\"/><circle cx=\"133\" cy=\"227\" r=\"0.8\"/><circle cx=\"170\" cy=\"30\" r=\"1.3\"/><circle cx=\"7\" cy=\"83\" r=\"1.8\"/><circle cx=\"44\" cy=\"136\" r=\"0.8\"/><circle cx=\"81\" cy=\"189\" r=\"1.3\"/><circle cx=\"118\" cy=\"242\" r=\"1.8\"/><circle cx=\"155\" cy=\"45\" r=\"0.8\"/><circle cx=\"192\" cy=\"98\" r=\"1.3\"/><circle cx=\"29\" cy=\"151\" r=\"1.8\"/><circle cx=\"66\" cy=\"204\" r=\"0.8\"/><circle cx=\"103\" cy=\"7\" r=\"1.3\"/><circle cx=\"140\" cy=\"60\" r=\"1.8\"/><circle cx=\"177\" cy=\"113\" r=\"0.8\"/><circle cx=\"14\" cy=\"166\" r=\"1.3\"/><circle cx=\"51\" cy=\"219\" r=\"1.8\"/><circle cx=\"88\" cy=\"22\" r=\"0.8\"/><circle cx=\"125\" cy=\"75\" r=\"1.3\"/><circle cx=\"162\" cy=\"128\" r=\"1.8\"/><circle cx=\"199\" cy=\"181\" r=\"0.8\"/><circle cx=\"36\" cy=\"234\" r=\"1.3\"/><circle cx=\"73\" cy=\"37\" r=\"1.8\"/><circle cx=\"110\" cy=\"90\" r=\"0.8\"/><circle cx=\"147\" cy=\"143\" r=\"1.3\"/><circle cx=\"184\" cy=\"196\" r=\"1.8\"/><circle cx=\"21\" cy=\"249\" r=\"0.8\"/><circle cx=\"58\" cy=\"52\" r=\"1.3\"/><circle cx=\"95\" cy=\"105\" r=\"1.8\"/><circle cx=\"132\" cy=\"158\" r=\"0.8\"/><circle cx=\"169\" cy=\"211\" r=\"1.3\"/><circle cx=\"6\" cy=\"14\" r=\"1.8\"/><circle cx=\"43\" cy=\"67\" r=\"0.8\"/><\/g><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-shining)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-shining)\"/><\/svg>", "exorcist": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><radialGradient id=\"g-exo\" cx=\".5\" cy=\".42\" r=\".6\"><stop offset=\"0\" stop-color=\"#ffb04a\"/><stop offset=\"1\" stop-color=\"#a02a0c\"/><\/radialGradient><linearGradient id=\"f-exorcist\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#0a0707\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#0a0707\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-exorcist\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"#0a0707\"/><path d=\"M82 30h36v60h46v36h-46v100H82V126H36V90h46z\" fill=\"url(#g-exo)\"/><rect x=\"0\" y=\"0\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"14\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"28\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"42\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"56\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"70\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"84\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"98\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"112\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"126\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"140\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"154\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"168\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"182\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"196\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"210\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"224\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><rect x=\"0\" y=\"238\" width=\"200\" height=\"6\" fill=\"#0a0707\"/><circle cx=\"100\" cy=\"108\" r=\"76\" fill=\"none\" stroke=\"#f0e2c8\" stroke-opacity=\".22\" stroke-width=\"1.2\" stroke-dasharray=\"3 6\"/><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-exorcist)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-exorcist)\"/><\/svg>", "tcm": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><linearGradient id=\"b-tcm\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#e8a237\"/><stop offset=\".55\" stop-color=\"#b24b1b\"/><stop offset=\"1\" stop-color=\"#2a0f08\"/><\/linearGradient><linearGradient id=\"f-tcm\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#1a0904\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#1a0904\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-tcm\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-tcm)\"/><circle cx=\"100\" cy=\"132\" r=\"48\" fill=\"#ffd27a\" opacity=\".92\"/><path d=\"M0 150c40 -6 70 4 100 0s70 -6 100 2v100H0z\" fill=\"#2a0f08\"/><path d=\"M62 150v-26l24 -22l24 22v26z\" fill=\"#120704\"/><path d=\"M122 150v-44h8v44\" fill=\"#120704\"/><path d=\"M168 150v-60M168 110l-14 -12M168 96l12 -10\" stroke=\"#120704\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/><rect x=\"8\" y=\"150\" width=\"4\" height=\"100\" fill=\"#1a0e07\"/><rect x=\"40\" y=\"144\" width=\"4\" height=\"106\" fill=\"#1a0e07\"/><rect x=\"74\" y=\"152\" width=\"4\" height=\"98\" fill=\"#1a0e07\"/><rect x=\"108\" y=\"146\" width=\"4\" height=\"104\" fill=\"#1a0e07\"/><rect x=\"140\" y=\"150\" width=\"4\" height=\"100\" fill=\"#1a0e07\"/><rect x=\"172\" y=\"144\" width=\"4\" height=\"106\" fill=\"#1a0e07\"/><g transform=\"translate(34 70) rotate(-24)\" fill=\"none\" stroke=\"#120704\" stroke-width=\"3\"><rect x=\"0\" y=\"0\" width=\"64\" height=\"9\" rx=\"4\"/><path d=\"M2 0l3 -4l3 4l3 -4l3 4l3 -4l3 4l3 -4l3 4l3 -4l3 4l3 -4l3 4l3 -4l3 4l3 -4l3 4l3 -4l3 4\" stroke-width=\"1.6\"/><\/g><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-tcm)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-tcm)\"/><\/svg>", "audition": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><linearGradient id=\"b-aud\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#e6d6cf\"/><stop offset=\"1\" stop-color=\"#9a7d79\"/><\/linearGradient><linearGradient id=\"f-audition\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#1a0f10\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#1a0f10\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-audition\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-aud)\"/><path d=\"M0 110h200\" stroke=\"#2a1b1c\" stroke-opacity=\".2\"/><rect x=\"0\" y=\"150\" width=\"200\" height=\"100\" fill=\"#3a2527\" fill-opacity=\".25\"/><path d=\"M24 210c14 -30 28 30 42 0s28 30 42 0s28 30 42 0s20 24 26 8\" fill=\"none\" stroke=\"#1d1213\" stroke-width=\"3\" stroke-linecap=\"round\"/><g transform=\"translate(100 124) rotate(-8)\"><rect x=\"-58\" y=\"-9\" width=\"116\" height=\"18\" rx=\"9\" fill=\"#1d1213\"/><circle cx=\"-54\" cy=\"0\" r=\"17\" fill=\"#1d1213\"/><circle cx=\"54\" cy=\"0\" r=\"17\" fill=\"#1d1213\"/><circle cx=\"-54\" cy=\"0\" r=\"8\" fill=\"#6d4b4b\"/><circle cx=\"54\" cy=\"0\" r=\"8\" fill=\"#6d4b4b\"/><\/g><path d=\"M16 60L184 196\" stroke=\"#f4eeea\" stroke-width=\"1.4\"/><circle cx=\"184\" cy=\"196\" r=\"3\" fill=\"#d8232b\"/><path d=\"M150 40c4 14 14 22 26 24\" fill=\"none\" stroke=\"#d8232b\" stroke-width=\"1.6\" opacity=\".8\"/><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-audition)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-audition)\"/><\/svg>", "kwaidan": "<svg class=\"pst\" viewBox=\"0 0 200 250\" preserveAspectRatio=\"xMidYMid slice\" role=\"img\" aria-hidden=\"true\"><defs><linearGradient id=\"b-kwa\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#0c1230\"/><stop offset=\"1\" stop-color=\"#1c2f66\"/><\/linearGradient><linearGradient id=\"f-kwaidan\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#070b22\" stop-opacity=\"0\"/><stop offset=\"1\" stop-color=\"#070b22\" stop-opacity=\".86\"/><\/linearGradient><filter id=\"n-kwaidan\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\"><feTurbulence type=\"fractalNoise\" baseFrequency=\".85\" numOctaves=\"2\" seed=\"4\"/><feColorMatrix type=\"saturate\" values=\"0\"/><feComponentTransfer><feFuncA type=\"linear\" slope=\".16\"/><\/feComponentTransfer><\/filter><\/defs><rect width=\"200\" height=\"250\" fill=\"url(#b-kwa)\"/><circle cx=\"146\" cy=\"58\" r=\"26\" fill=\"#ece7d6\"/><circle cx=\"156\" cy=\"52\" r=\"24\" fill=\"#0f1738\" opacity=\".35\"/><g transform=\"translate(88 70) rotate(14)\"><path d=\"M0 -40l5 0l0 56c22 4 34 22 28 44c-6 22 -40 28 -58 8c-14 -16 -6 -42 25 -52z\" fill=\"#12091a\" stroke=\"#d9c6a0\" stroke-width=\"1.5\"/><path d=\"M-2 -52h9v14h-9z\" fill=\"#d9c6a0\"/><path d=\"M-6 38c6 4 14 4 22 0\" stroke=\"#d9c6a0\" fill=\"none\"/><\/g><path d=\"M-18 186a9 9 0 0 1 18 0M0 186a9 9 0 0 1 18 0M18 186a9 9 0 0 1 18 0M36 186a9 9 0 0 1 18 0M54 186a9 9 0 0 1 18 0M72 186a9 9 0 0 1 18 0M90 186a9 9 0 0 1 18 0M108 186a9 9 0 0 1 18 0M126 186a9 9 0 0 1 18 0M144 186a9 9 0 0 1 18 0M162 186a9 9 0 0 1 18 0M180 186a9 9 0 0 1 18 0M198 186a9 9 0 0 1 18 0M216 186a9 9 0 0 1 18 0\" fill=\"none\" stroke=\"#d9e4f2\" stroke-opacity=\"0.55\" stroke-width=\"1\"/><path d=\"M-9 200a9 9 0 0 1 18 0M9 200a9 9 0 0 1 18 0M27 200a9 9 0 0 1 18 0M45 200a9 9 0 0 1 18 0M63 200a9 9 0 0 1 18 0M81 200a9 9 0 0 1 18 0M99 200a9 9 0 0 1 18 0M117 200a9 9 0 0 1 18 0M135 200a9 9 0 0 1 18 0M153 200a9 9 0 0 1 18 0M171 200a9 9 0 0 1 18 0M189 200a9 9 0 0 1 18 0M207 200a9 9 0 0 1 18 0M225 200a9 9 0 0 1 18 0\" fill=\"none\" stroke=\"#d9e4f2\" stroke-opacity=\"0.45\" stroke-width=\"1\"/><path d=\"M-18 214a9 9 0 0 1 18 0M0 214a9 9 0 0 1 18 0M18 214a9 9 0 0 1 18 0M36 214a9 9 0 0 1 18 0M54 214a9 9 0 0 1 18 0M72 214a9 9 0 0 1 18 0M90 214a9 9 0 0 1 18 0M108 214a9 9 0 0 1 18 0M126 214a9 9 0 0 1 18 0M144 214a9 9 0 0 1 18 0M162 214a9 9 0 0 1 18 0M180 214a9 9 0 0 1 18 0M198 214a9 9 0 0 1 18 0M216 214a9 9 0 0 1 18 0\" fill=\"none\" stroke=\"#d9e4f2\" stroke-opacity=\"0.35\" stroke-width=\"1\"/><path d=\"M-9 228a9 9 0 0 1 18 0M9 228a9 9 0 0 1 18 0M27 228a9 9 0 0 1 18 0M45 228a9 9 0 0 1 18 0M63 228a9 9 0 0 1 18 0M81 228a9 9 0 0 1 18 0M99 228a9 9 0 0 1 18 0M117 228a9 9 0 0 1 18 0M135 228a9 9 0 0 1 18 0M153 228a9 9 0 0 1 18 0M171 228a9 9 0 0 1 18 0M189 228a9 9 0 0 1 18 0M207 228a9 9 0 0 1 18 0M225 228a9 9 0 0 1 18 0\" fill=\"none\" stroke=\"#d9e4f2\" stroke-opacity=\"0.25\" stroke-width=\"1\"/><path d=\"M-18 242a9 9 0 0 1 18 0M0 242a9 9 0 0 1 18 0M18 242a9 9 0 0 1 18 0M36 242a9 9 0 0 1 18 0M54 242a9 9 0 0 1 18 0M72 242a9 9 0 0 1 18 0M90 242a9 9 0 0 1 18 0M108 242a9 9 0 0 1 18 0M126 242a9 9 0 0 1 18 0M144 242a9 9 0 0 1 18 0M162 242a9 9 0 0 1 18 0M180 242a9 9 0 0 1 18 0M198 242a9 9 0 0 1 18 0M216 242a9 9 0 0 1 18 0\" fill=\"none\" stroke=\"#d9e4f2\" stroke-opacity=\"0.15\" stroke-width=\"1\"/><g fill=\"#fff\" fill-opacity=\".7\"><circle cx=\"0\" cy=\"0\" r=\"1.2\"/><circle cx=\"41\" cy=\"29\" r=\"1.2\"/><circle cx=\"82\" cy=\"58\" r=\"1.2\"/><circle cx=\"123\" cy=\"87\" r=\"1.2\"/><circle cx=\"164\" cy=\"116\" r=\"1.2\"/><circle cx=\"5\" cy=\"5\" r=\"1.2\"/><circle cx=\"46\" cy=\"34\" r=\"1.2\"/><circle cx=\"87\" cy=\"63\" r=\"1.2\"/><circle cx=\"128\" cy=\"92\" r=\"1.2\"/><circle cx=\"169\" cy=\"121\" r=\"1.2\"/><circle cx=\"10\" cy=\"10\" r=\"1.2\"/><circle cx=\"51\" cy=\"39\" r=\"1.2\"/><circle cx=\"92\" cy=\"68\" r=\"1.2\"/><circle cx=\"133\" cy=\"97\" r=\"1.2\"/><circle cx=\"174\" cy=\"126\" r=\"1.2\"/><circle cx=\"15\" cy=\"15\" r=\"1.2\"/><circle cx=\"56\" cy=\"44\" r=\"1.2\"/><circle cx=\"97\" cy=\"73\" r=\"1.2\"/><circle cx=\"138\" cy=\"102\" r=\"1.2\"/><circle cx=\"179\" cy=\"131\" r=\"1.2\"/><circle cx=\"20\" cy=\"20\" r=\"1.2\"/><circle cx=\"61\" cy=\"49\" r=\"1.2\"/><circle cx=\"102\" cy=\"78\" r=\"1.2\"/><circle cx=\"143\" cy=\"107\" r=\"1.2\"/><circle cx=\"184\" cy=\"136\" r=\"1.2\"/><circle cx=\"25\" cy=\"25\" r=\"1.2\"/><\/g><rect y=\"130\" width=\"200\" height=\"120\" fill=\"url(#f-kwaidan)\"/><rect width=\"200\" height=\"250\" filter=\"url(#n-kwaidan)\"/><\/svg>"};
var PIMG={};
/* v123: user artwork posters (title + brand baked into the image) */
var portraitPosters=["oddity","host2020","ghostwatch","satansclaw","witchfinder","uninvited-1944","midsommar","hereditary","traintobusan","witch","candyman","fly","possession","alien","innocents","cat42","frankenstein","nosferatu1922","gonjiam","n2fieldengland13","killbaby","blacksabbath","blacksunday","n2cloverlane16","28days","rec","bayblood","nightmare","quietplace","serbian","tale2sisters","n2aliens86","angelheart","angst","n2annabelle14","antichrist","n3arachno90","armydark","tomatoes","badtaste","battleroyale","blackxmas","bloodlace","bloodfeast","n2border18","braindamage","braindead","dracula92","cabinfever","cannibalholo","carnival","carrie","caveat-2020","censor","chucky","christine","n2cloverfield08","crash","creepshow","cronos","n3cube97","dawn","deadringers","deadstream-2022","deathrace","deepred","demons","dontbreathe","dontlooknow","duckling","dracula31","dragme","dumplings","eraserhead","eventhorizon","evil2","existenz","eyeswithout","finaldest","fourflies","freaks","fri13","fright","frombeyond","n2dusk96","frontiers","funnygames","getout","gremlins","halloween3","hausu","hellbound","helldriver","henry","hautetension","n2hishouse20","hobo","n2horrordracula58","hostel","n3housewax53","huesera-2022","haxan","isawdevil","ispit","izombie","ichi","n2identity03","n2impetigore19","mouthmadness","incantation","inferno","inside","insidious","n2interview94","irreversible","lostsouls","it2017","itfollows","jacobs","jaws","killlist","n2krampus15","la-llorona-2019","lakemungo","n3letmein10","letmein","n2jessica71","lightsout","longlegs","mama","mandy","maniac","martyrs","meatball","messiah","misery","night-of-the-demon-1957","nightlive","nope","nosferatu","onemissed","n2onlylovers13","n2openwater03","opera","panslab","pearl","peeping","petsematary","phantasm","flamingos","plan9","planetterror","poltergeist","pontypool","possessor","rabid","raw","reanimator","n3resident02","rosemary","sadakokayako","salo","santasangre","n2satanslaves17","saw","scanners","n3scream22","scream","n3scream3","n3scream4","n2se7en95","session9","sharknado","shaun","shivers","shutter","n2signs02","sinister","sinners","sleepyhollow","n3smile2","society","talktome","tenebrae","n2terrified17","terrifier","autopsy","babadook","beyond","birdcrystal","blackcat34","blackphone","blairwitch","borderlands-2013","brood","cabinwoods","caligari","changeling","conjuring","conjuring2","n2craft96","n2cursefrank57","n2darkwicked20","deadzone","descent","devilsback","devils-bath-2024","evildead","exorcist","theeye02","n2fly58","n2frighteners96","girlknew","grudge","haunting63","hillseyes","n2hitcher86","laughwindows","howling","centipede","invisible20","lasthouse","thelodge","lostboys","machinegirl","n2machinist04","masque-red-death-1964","themedium","themenu","mummy","nighthouse","old-dark-house-1932","omen","others","platform","n2purge13","returnliving","thering02","sentinel","seventhvictim","silence","sixthsense","strangecolor","substance","tcm","toxavenger","vanishing","wailing","wickerman","wolf-house-2018","n3wolfman41","n2womaninblack12","thirst","titane","tgp","troll2","troubleeveryday","n2undertheskin13","n2unfriended14","us","vgfg","videodrome","weapons","whenevil","zombi2","americanwerewolf","audition","blind-beast","cure","darkwater","evil-dead-trap","halloween","hellraiser","infection","jigoku","juon","kisaragi-station","kuroneko","kwaidan","marebito","noroi","occult","one-cut-of-the-dead","one-missed-call","onibaba","perfectblue","psycho","kairo","reincarnation","repulsion","retribution","ringu","saintmaud","silenthill","suicide-club","suspiria","tag","tetsuo","birds","yotsuya","lighthouse","nightofhunter","shining","thing","theylive","tomie","ugetsu","uzumaki","woman-in-the-dunes"];
portraitPosters.forEach(function(id){
  PIMG[id]=1;
  PSTR[id]='<img class="pst pst-portrait" src="/horror-aesthetic/img/posters/'+({"onemissed":"one-missed-call-archive.webp","americanwerewolf":"americanwerewolf-archive.webp","audition":"audition-archive.webp","blind-beast":"blind-beast-archive.webp","cure":"cure-archive.webp","darkwater":"darkwater-archive.webp","evil-dead-trap":"evil-dead-trap-archive.webp","halloween":"halloween-archive.webp","hellraiser":"hellraiser-archive.webp","infection":"infection-archive.webp","jigoku":"jigoku-archive.webp","juon":"juon-archive.webp","kisaragi-station":"kisaragi-station-archive.webp","kuroneko":"kuroneko-archive.webp","kwaidan":"kwaidan-archive.webp","marebito":"marebito-archive.webp","noroi":"noroi-archive.webp","occult":"occult-archive.webp","one-cut-of-the-dead":"one-cut-of-the-dead-archive.webp","one-missed-call":"one-missed-call-archive.webp","onibaba":"onibaba-archive.webp","perfectblue":"perfectblue-archive.webp","psycho":"psycho-archive.webp","kairo":"kairo-archive.webp","reincarnation":"reincarnation-archive.webp","repulsion":"repulsion-archive.webp","retribution":"retribution-archive.webp","ringu":"ringu-archive.webp","saintmaud":"saintmaud-archive.webp","silenthill":"silenthill-archive.webp","suicide-club":"suicide-club-archive.webp","suspiria":"suspiria-archive.webp","tag":"tag-archive.webp","tetsuo":"tetsuo-archive.webp","birds":"birds-archive.webp","yotsuya":"yotsuya-archive.webp","lighthouse":"lighthouse-archive.webp","nightofhunter":"nightofhunter-archive.webp","shining":"shining-archive.webp","thing":"thing-archive.webp","theylive":"theylive-archive.webp","tomie":"tomie-archive.webp","ugetsu":"ugetsu-archive.webp","uzumaki":"uzumaki-archive.webp","woman-in-the-dunes":"woman-in-the-dunes-archive.webp"}[id]||id+'.webp')+'" alt="" loading="lazy" decoding="async">';
});
var ART={
 splatterpunk:'<path class="f" d="M100 20c-28 40-48 66-48 96a48 48 0 0 0 96 0c0-30-20-56-48-96z"/><path class="d" d="M78 110a24 24 0 0 0 20 28" stroke="#0a0606" fill="none"/><circle class="f" cx="30" cy="60" r="7"/><circle class="f" cx="170" cy="50" r="9"/><circle class="f" cx="22" cy="130" r="4"/><circle class="f" cx="180" cy="140" r="5"/><path class="f" d="M60 175l6 20 6-20zM120 172l5 24 5-24z"/>',
 body:'<path d="M100 18v164"/><path d="M100 46c-30-2-52 8-60 26M100 46c30-2 52 8 60 26M100 76c-32-2-56 8-62 28M100 76c32-2 56 8 62 28M100 106c-28-1-48 8-54 24M100 106c28-1 48 8 54 24M100 136c-22 0-38 6-44 18M100 136c22 0 38 6 44 18"/><path d="M92 28l16 8M92 40l16 8M92 52l16 8M92 64l16 8" stroke-width="1.6"/><circle class="f" cx="100" cy="90" r="5"/>',
 slasher:'<circle cx="100" cy="82" r="62"/><path class="f" d="M70 40c6-8 16-6 22 0-6 6-6 14 0 20-12 2-22-6-22-20z" opacity=".5"/><path class="d" d="M52 196L128 78l14 10-60 112z" stroke="currentColor"/><path d="M128 78l34-52 8 20z" class="f"/><path d="M138 94l22 16M52 196l-10-6" /><path class="f" d="M154 120c0 18 6 20 6 34M170 132c0 14 4 16 4 28" stroke="currentColor"/>',
 giallo:'<path d="M12 100s34-56 88-56 88 56 88 56-34 56-88 56-88-56-88-56z"/><circle cx="100" cy="100" r="30"/><circle class="f" cx="100" cy="100" r="12"/><path d="M100 20v18M60 32l8 14M140 32l-8 14M28 70l14 8M172 70l-14 8"/><path d="M20 190L180 20" stroke-width="3"/><path class="f" d="M146 150c0 14 4 16 4 28 0-12 4-14 4-28z"/>',
 jhorror:'<path d="M24 36c40 14 112 14 152 0"/><path d="M40 62h120"/><path d="M52 62v128M148 62v128M100 40v22"/><circle cx="100" cy="24" r="14"/><path d="M82 100c-14 24 14 40 0 70M96 104c-14 26 12 40-2 76M110 104c14 26-12 40 2 76M124 100c14 24-14 40 0 70"/>',
 extreme:'<path d="M100 14l74 42v88l-74 42-74-42V56z"/><path d="M100 14l-10 40 14 28-16 30 12 40"/><path d="M100 70v52M100 142v6" stroke-width="7"/><path d="M26 56l40 24M174 56l-40 24"/>',
 gore:'<path d="M42 100a58 58 0 1 1 116 0c0 18-8 30-18 38v32H60v-32c-10-8-18-20-18-38z"/><circle class="f" cx="76" cy="102" r="14"/><circle class="f" cx="124" cy="102" r="14"/><path class="f" d="M100 122l-8 18h16z"/><path d="M76 170v-24M92 170v-20M108 170v-20M124 170v-24"/><path class="f" d="M70 176l5 18 5-18zM118 176l5 22 5-22z"/>',
 shock:'<path class="f" d="M118 10L50 112h42l-14 78 72-106h-44z"/><circle cx="100" cy="100" r="64" opacity=".6"/><circle cx="100" cy="100" r="86" opacity=".35"/>',
 trash:'<ellipse cx="100" cy="64" rx="70" ry="20"/><path d="M62 56c4-26 72-26 76 0"/><circle class="f" cx="100" cy="40" r="3"/><path d="M70 82l-26 108h112l-26-108" opacity=".7"/><path d="M40 20l4 8-8-4zM162 16l4 8-8-4zM150 44l3 6-6-3z" class="f"/><circle class="f" cx="100" cy="150" r="14" opacity=".8"/><path d="M92 146l-4-8M108 146l4-8"/>',
 exploit:'<rect x="24" y="30" width="120" height="150" rx="4" transform="rotate(-8 84 105)"/><path d="M34 52h100M34 82h100M34 112h100M34 142h100" transform="rotate(-8 84 105)" stroke-dasharray="6 8"/><rect x="104" y="64" width="78" height="104" rx="3" transform="rotate(10 143 116)" class="d"/><path class="f" d="M143 94l8 16 17 2-12 12 3 17-16-8-16 8 3-17-12-12 17-2z" transform="rotate(10 143 116)"/>'
};
var HGP={5:["#ff1d33","#ff8a90",1.9,.8,11,0,1],4:["#d3162a","#f0525e",1.7,.7,10,0,1],3:["#8e2a2c","#b5645f",1.4,.6,8,1,1],2:["#6d6d66","#8a8a82",1.3,.55,8,2,0]};
function hgSvg(t,half){var P=HGP[t],cx=14,cy=11,o='<svg viewBox="0 0 28 30" aria-hidden="true"><path d="M14 12Q14.6 21 13.4 29" stroke="'+(t==2?'#4a5442':'#4a1a1e')+'" stroke-width="1.5" fill="none" stroke-linecap="round"/>',n=6,i,th,L,x,y,mx,my,k,d=P[5];
 for(i=0;i<n;i++){
  th=d==2?(Math.PI*(.12+.76*i/(n-1))):d==1?Math.PI*(1.12+.76*i/(n-1)):Math.PI*(1.06+.88*i/(n-1));
  if(half&&Math.cos(th)>0.05)continue;
  L=P[4]*(i%2?1:.88);x=cx+L*Math.cos(th);y=cy+L*Math.sin(th)*(d==2?.9:1);k=(i%2?1:-1)*3.2*(cx>x?-1:1);
  mx=cx+L*.55*Math.cos(th)-k*Math.sin(th);my=cy+L*.55*Math.sin(th)+k*Math.cos(th);
  o+='<path d="M'+cx+' '+cy+'Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+x.toFixed(1)+' '+y.toFixed(1)+'" stroke="'+P[0]+'" stroke-width="'+P[2]+'" fill="none" stroke-linecap="round"/>';
  if(t>=4)o+='<path d="M'+cx+' '+cy+'Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+x.toFixed(1)+' '+y.toFixed(1)+'" stroke="'+P[1]+'" stroke-width=".35" fill="none" opacity=".7"/>';
  if(t<5&&t>2&&0)o+=''}
 for(i=0;i<(t==2?3:6);i++){
  th=(d==2?Math.PI*(.25+.5*i/2):Math.PI*(1.15+.7*i/5));if(half&&Math.cos(th)>0.05)continue;
  L=P[4]+(t==2?-1:4);x=cx+L*Math.cos(th);y=cy+L*Math.sin(th)+(d==2?0:0);mx=cx+L*.6*Math.cos(th)+(i%2?2.2:-2.2);my=cy+L*.6*Math.sin(th)+(d==2?0:-1.5);
  o+='<path d="M'+cx+' '+cy+'Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+x.toFixed(1)+' '+y.toFixed(1)+'" stroke="'+P[0]+'" stroke-width="'+P[3]+'" fill="none" stroke-linecap="round" opacity="'+(t==2?.7:.95)+'"/><circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(t==2?.7:.95)+'" fill="'+(t==2?'#2b2b27':'#2a0508')+'"/>'}
 o+='<circle cx="'+cx+'" cy="'+cy+'" r="1.3" fill="'+(t==2?'#111':'#4a0710')+'"/>';
 if(t==2)o+='<path d="M10 20q.3 2 0 3M18 17q.3 2.4 0 3.4" stroke="#5f6f4a" stroke-width=".9" fill="none"/>';
 return o+'</svg>'}
var WLP={5:["#ece7e1","#1b0a0c",0],4:["#dcd5ce","#1b0a0c",0],3:["#aaa097","#1b0a0c",1],2:["#7f8c72","#1b1f17",2]},WLE=[[[6,11],[8.5,3.5],[13,1],[18.5,2.5],[22,7.5]],[[8,10],[10,5],[13.5,3.5],[17,4.5],[19.5,8]],[[5,14],[8,19],[13,20],[18,19],[22,14]]];
function wellSvg(t,half){var P=WLP[t],E=WLE[t==5||t==4?0:t==3?1:2],bx=[9.5,11.5,14,16.5,18.5],o='<svg viewBox="0 0 28 30" aria-hidden="true"><ellipse cx="14" cy="26.5" rx="11.5" ry="3.8" fill="#04050a" stroke="#4a4a54" stroke-width="1.2"/>',i,x,y,mx,my;
 o+='<path d="M14 27V17" stroke="'+P[0]+'" stroke-width="6" stroke-linecap="round"/>';
 if(t>=4)o+='<path d="M12.5 26l.4-8M15.6 26l-.3-7" stroke="#b01624" stroke-width=".5" opacity=".6" fill="none"/>';
 if(t==2)o+='<circle cx="12.5" cy="22" r="1" fill="#4c5b40"/><circle cx="15.5" cy="19.5" r=".8" fill="#4c5b40"/><path d="M11.5 27q.3 2 0 2.6M16.5 27q.3 2.6 0 3" stroke="#5f7a4a" stroke-width=".9" fill="none"/>';
 o+='<ellipse cx="14" cy="16.5" rx="5.2" ry="3.8" fill="'+P[0]+'"/>';
 for(i=0;i<5;i++){x=E[i][0];y=E[i][1];if(half&&i>2){x=bx[i]+(i-3.5)*1.2;y=14}
  mx=(bx[i]+x)/2+(i<2?-1.2:i>2?1.2:0);my=(16+y)/2+(t==2?3:-.5);
  o+='<path d="M'+bx[i]+' 16Q'+mx.toFixed(1)+' '+my.toFixed(1)+' '+x+' '+y+'" stroke="'+P[0]+'" stroke-width="'+(i==0?2.3:2)+'" fill="none" stroke-linecap="round"/><circle cx="'+x+'" cy="'+y+'" r="1.05" fill="'+P[1]+'"/>'}
 return o+'<path d="M2.5 26.6Q14 31.5 25.5 26.6" stroke="#4a4a54" stroke-width="1.6" fill="none"/></svg>'}
var MKP={5:["#f6f1ea","#ff2630","#d9b24f","#1a0a0c"],4:["#e7dfd5","#c4141f","#bf9a45","#1a0a0c"],3:["#c9ba8c","#7c2b22","#8d7438","#1a1208"],2:["#7e8675","#0a0c08","#575c4b","#0e110b"]},MKF="M14 4C21 4 23.5 10 22.5 17 21.5 24 18 28.5 14 28.5 10 28.5 6.5 24 5.5 17 4.5 10 7 4 14 4Z";
function maskSvg(t,half){var P=MKP[t],bad=t==2,o='<svg viewBox="0 0 28 30" aria-hidden="true">';
 o+='<path d="M8 8L6 1l5 5Z" fill="'+P[2]+'" stroke="'+P[3]+'" stroke-width=".6"/><path d="'+(bad?'M20 8L21 4l-2.5 2.5Z':'M20 8L22 1l-5 5Z')+'" fill="'+P[2]+'" stroke="'+P[3]+'" stroke-width=".6"/>';
 o+='<path d="'+MKF+'" fill="'+P[0]+'" stroke="'+P[3]+'" stroke-width=".9"/>';
 o+='<path d="M7.3 11.2L12.2 13.4M20.7 11.2L15.8 13.4" stroke="'+P[3]+'" stroke-width="1.3" stroke-linecap="round"/>';
 o+='<ellipse cx="10" cy="15" rx="2.5" ry="1.5" transform="rotate(14 10 15)" fill="'+P[1]+'" stroke="'+P[3]+'" stroke-width=".6"/><ellipse cx="18" cy="15" rx="2.5" ry="1.5" transform="rotate(-14 18 15)" fill="'+P[1]+'" stroke="'+P[3]+'" stroke-width=".6"/>';
 if(!bad)o+='<circle cx="10.2" cy="15.1" r=".7" fill="#000"/><circle cx="17.8" cy="15.1" r=".7" fill="#000"/>';
 o+='<path d="M14 15L13 19.2 15 19.2" stroke="'+P[3]+'" stroke-width=".6" fill="none" opacity=".7"/>';
 if(bad)o+='<path d="M8.5 22Q14 23.2 19.5 22" stroke="'+P[3]+'" stroke-width="1.2" fill="none"/><path d="M14 4L12.8 10 15.6 15 13 21 14.5 28M22.4 14L18.5 17M5.8 18.5L9 19.5" stroke="'+P[3]+'" stroke-width=".7" fill="none"/><path d="M11 22.6q.3 2.4 0 3.4M17 22.6q.3 3 0 4" stroke="#5f7a4a" stroke-width=".9" fill="none"/>';
 else o+='<path d="M7.8 21.6Q14 27.2 20.2 21.6Q14 23.4 7.8 21.6Z" fill="#3a0a10" stroke="'+P[3]+'" stroke-width=".8"/><path d="M9.6 22.4l.9 2.7.9-2.3M12.8 23.1l.9 2.9.9-2.9M16.4 22.9l.9-2.4.8 2.7" fill="#fff" stroke="'+P[3]+'" stroke-width=".4"/>';
 if(half)o+='<clipPath id="mkR"><rect x="14" y="0" width="14" height="30"/></clipPath><g clip-path="url(#mkR)"><path d="'+MKF+'" fill="#0a0d16" opacity=".85"/><path d="M20 8L22 1l-5 5Z" fill="#0a0d16" opacity=".85"/></g>';
 return o+'</svg>'}
var LTP={5:["#ff5a3c","#7a1008","#c8101e","#e8344f"],4:["#e2492f","#6a140c","#a4121c","#cf3a50"],3:["#9b4d33","#4e2316","#6a2a22","#8a3a48"],2:["#6f7568","#2b2f27","#1a1c18","#6b8a55"]},LTB="M7 6C2 10 2 20 7 24H21C26 20 26 10 21 6Z";
function ltSvg(t,half){var P=LTP[t],bad=t==2,d="#1a0c0e",o='<svg viewBox="0 0 28 31" aria-hidden="true"><path d="M14 0V3.2" stroke="'+d+'" stroke-width="1" fill="none"/><rect x="8" y="3" width="12" height="3" rx="1" fill="'+d+'"/>';
 o+='<path d="'+LTB+'" fill="'+P[0]+'" stroke="'+d+'" stroke-width=".9"/><path d="M4.4 11Q14 13.2 23.6 11M3.8 15.5Q14 17.8 24.2 15.5M4.4 20Q14 22.2 23.6 20" stroke="'+P[1]+'" stroke-width=".7" fill="none" opacity=".75"/>';
 if(bad)o+='<path d="M19 7.5l-3.2 4.4 2.4 3.6-2 3" stroke="'+d+'" stroke-width=".8" fill="none"/><path d="M5.5 17l3-1.2.7 2.8-3.4.8Z" fill="#05060a"/>';
 o+='<rect x="8" y="24" width="12" height="3" rx="1" fill="'+d+'"/>';
 if(bad)o+='<ellipse cx="14" cy="14" rx="5" ry="3.7" fill="#9aa090" stroke="'+d+'" stroke-width=".8"/><path d="M11.6 12.3l4.8 3.4M16.4 12.3l-4.8 3.4" stroke="'+d+'" stroke-width="1" fill="none"/>';
 else o+='<ellipse cx="14" cy="14" rx="5.2" ry="3.9" fill="#fff" stroke="'+d+'" stroke-width=".8"/><circle cx="14" cy="14" r="2.7" fill="'+P[2]+'"/><circle cx="14" cy="14" r="1.2" fill="#000"/><circle cx="13.1" cy="13" r=".6" fill="#fff"/><path d="M8.8 12.2Q14 8.8 19.2 12.2" stroke="'+d+'" stroke-width=".9" fill="none"/>';
 o+='<path d="M9.6 20.6Q14 23 18.4 20.6" stroke="'+d+'" stroke-width="1.1" fill="none"/><path d="'+(bad?'M11 21.6q-.6 4 .8 6.6 1.2 1.6 2.4 0 .8-3 .3-6.4Z':'M11 21.4Q10.6 27.6 13.2 30 15.6 28 15.6 21.4Z')+'" fill="'+P[3]+'" stroke="'+d+'" stroke-width=".7"/><path d="M13.3 22.4v4.4" stroke="'+d+'" stroke-width=".5" opacity=".5"/>';
 if(half)o+='<clipPath id="ltR"><rect x="14" y="0" width="14" height="31"/></clipPath><g clip-path="url(#ltR)"><path d="'+LTB+'" fill="#0a0d16" opacity=".82"/></g>';
 return o+'</svg>'}
var MNSD=11;function mnR(){MNSD=(MNSD*16807)%2147483647;return MNSD/2147483647}
function mnDefs(){if(document.getElementById("mn-defs"))return;var red=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function an(x){return red?"":x}
 function grad(id,st){return '<radialGradient id="'+id+'" cx=".36" cy=".32" r=".85">'+st.map(function(q,i){return '<stop offset="'+q[0]+'" stop-color="'+q[1]+'"/>'}).join("")+'</radialGradient>'}
 var g=grad("gF5",[[0,"#ff9ea3"],[.22,"#f53b49"],[.58,"#c7121f"],[1,"#6a0710"]])+grad("gF4",[[0,"#f56c74"],[.3,"#d62031"],[.65,"#a40f1b"],[1,"#52060d"]])+grad("gF3",[[0,"#b8685f"],[.35,"#8f3531"],[.7,"#661f1f"],[1,"#391010"]])+grad("gF2",[[0,"#a2a3a7"],[.4,"#78797e"],[.8,"#4c4d51"],[1,"#2a2b2e"]])+
 '<radialGradient id="gLimb" cx=".5" cy=".5" r=".5"><stop offset=".6" stop-color="#0a0002" stop-opacity="0"/><stop offset="1" stop-color="#0a0002" stop-opacity=".7"/></radialGradient>'+
 '<radialGradient id="gH5" cx=".5" cy=".5" r=".5"><stop offset=".62" stop-color="#ff2a3a" stop-opacity=".5"/><stop offset="1" stop-color="#ff2a3a" stop-opacity="0"/></radialGradient>'+
 '<radialGradient id="gH4" cx=".5" cy=".5" r=".5"><stop offset=".7" stop-color="#e0212f" stop-opacity=".28"/><stop offset="1" stop-color="#e0212f" stop-opacity="0"/></radialGradient>'+
 '<linearGradient id="gHalf" x1="0" x2="1"><stop offset="0" stop-color="#070910" stop-opacity="0"/><stop offset=".25" stop-color="#070910" stop-opacity=".94"/><stop offset="1" stop-color="#070910" stop-opacity=".96"/></linearGradient>';
 var C=[[17,18,3.2],[29,16,2.4],[31,27,3],[20,30,3.7],[26,22.5,1.6],[14.5,26,1.9],[24,12,1.5],[34,21,1.2],[23.5,34,2.1],[12.5,20,1.1],[28,31.5,1.4],[19.5,23,.9]];
 function craters(t){var o="",d=t==2?"#14141a":"#3c0309",l=t==2?"#9b9ca2":"#ff8d93",n=t>=4?C.length:t==3?8:C.length;
  for(var i=0;i<n;i++){var c=C[i],x=c[0],y=c[1],r=c[2];
   o+='<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+d+'" opacity="'+(t==2?.5:t==3?.4:.42)+'"/><path d="M'+(x-r*.72)+' '+(y+r*.72)+'A'+r+' '+r+' 0 0 1 '+(x+r*.72)+' '+(y-r*.72)+'" stroke="'+d+'" stroke-width="'+Math.max(.35,r*.2)+'" fill="none" opacity=".75"/><path d="M'+(x+r*.78)+' '+(y+r*.62)+'A'+r+' '+r+' 0 0 1 '+(x-r*.5)+' '+(y+r*.92)+'" stroke="'+l+'" stroke-width="'+Math.max(.3,r*.14)+'" fill="none" opacity="'+(t==2?.45:.55)+'"/>'+(r>2.2?'<circle cx="'+(x+r*.1)+'" cy="'+(y+r*.1)+'" r="'+r*.22+'" fill="'+l+'" opacity=".3"/>':'')}
  return o}
 function stipple(t){MNSD=11;var o="",n=t==5?70:t==4?44:t==3?26:60,i,a,r,x,y;for(i=0;i<n;i++){a=mnR()*6.283;r=Math.sqrt(mnR())*15.6;x=(24+Math.cos(a)*r).toFixed(1);y=(24+Math.sin(a)*r).toFixed(1);
   o+='<circle cx="'+x+'" cy="'+y+'" r="'+(.18+mnR()*.34).toFixed(2)+'" fill="'+(i%3?(t==2?"#101014":"#3a0309"):(t==2?"#b4b5ba":"#ff9096"))+'" opacity="'+(i%3?.42:.32)+'"/>'}return o}
 function maria(t){var c=t==2?"#16161b":"#4a0510";return '<g fill="'+c+'" opacity="'+(t==3?.38:.36)+'"><path d="M28 13q4-1.6 7 1.4 1.2 3.2-1.4 4.6-3.8.6-5.6-1.8Z"/><path d="M11.5 24q3.8-2.4 8-.8 2.4 2.6.6 5.4-4 1.8-7.4-.6Z"/><path d="M22 29.5q4 .2 5.6 3.2-.4 3-3.8 3.4-3-1-3.6-3.6Z"/><path d="M15 14.6q2.6-1.6 4.6.2-.6 2.4-3 2.8Z"/><path d="M30.5 24.6q2.8-.4 3.8 1.8-.8 2-3 1.8Z"/></g>'}
 function rays(){var o='<g stroke="#ffb0b4" stroke-width=".3" opacity=".3">',a;for(a=0;a<14;a++){var an=a*.449+.2,l=5+mnR()*5;o+='<line x1="'+(29+Math.cos(an)*2.6).toFixed(1)+'" y1="'+(16+Math.sin(an)*2.6).toFixed(1)+'" x2="'+(29+Math.cos(an)*(2.6+l)).toFixed(1)+'" y2="'+(16+Math.sin(an)*(2.6+l)).toFixed(1)+'"/>'}return o+'</g>'}
 function veins(){return '<g stroke="#3a0309" stroke-width=".35" fill="none" opacity=".55"><path d="M10 31q4-2 6-6t7-5 9-7M16 25q-1-4 1-7M23 20q1-4 5-5M26.6 20.4q3 1 4.6 4.4M9.6 31.6q2 2.6 5 2.4"/><path d="M33 31q-3-1-4-4t1-6M30 26q3-1 5.4 0M20.4 33q2-3 5-3.4" opacity=".7"/></g>'}
 function cloud(t){var w=t==3,o='<g fill="none" stroke="#12050a" stroke-linecap="round"><path d="M9 22.6q5-3.4 10.4-.6t10.8-.4q3.6-1.4 8.2 0" stroke-width="'+(w?2.2:1.5)+'" opacity="'+(w?.55:.55)+'"/>';
  if(t>=3)o+='<path d="M11 29q6-3 12.4-.2t11.2-.6" stroke-width="'+(w?2:1)+'" opacity="'+(w?.5:.42)+'"/>';if(t==5)o+='<path d="M14.6 18.2q4-1.6 8-.2t7.6-.2" stroke-width=".8" opacity=".4"/>';
  return o+'</g>'}
 function bird(){return '<g fill="#080204"><path d="M33.5 9.4q1.4-.2 2.2.6l2.6-1.6-1.4 2.2 1.8.8-2.6.2.4 1.4-2-1.2-1.8 1.2.4-1.4-2.4-.2 1.8-.8-1.4-2.2 2.4 1.6q.6-.8 2-.6Z"/><circle cx="35.2" cy="10.6" r=".25" fill="#ff3a48"/></g>'}
 function drips(){return '<path d="M20.6 40.4v3.8q0 2.2-1.3 2.2t-1.3-2.2v-3.8" fill="#d51f2d" stroke="#6a0710" stroke-width=".3"/><path d="M19.3 41.4v3" stroke="#ff8d93" stroke-width=".35" opacity=".6"/><path d="M30 39.8v2.4q0 1.6-.9 1.6t-.9-1.6v-2.4" fill="#c81a28" stroke="#6a0710" stroke-width=".3"/>'+an('<animateTransform attributeName="transform" type="translate" values="0 0;0 .8;0 0" dur="5s" repeatCount="indefinite"/>')}
 function cracks(){return '<g stroke="#101014" fill="none" stroke-linecap="round"><path d="M24 7.4L21.6 16 26.4 22 19.6 29.4 22.6 40.6" stroke-width="1.1"/><path d="M26.4 22L36.4 25.4 33 33M21.6 16L13 19.4 10.8 26M19.6 29.4L12 28.6M26.4 22l4.4-5.4 2.6-.8" stroke-width=".7"/><path d="M22.6 40.6l3.6-3.4M24 7.4l4.6 2.4" stroke-width=".5"/></g>'}
 function disc(t){var f="url(#gF"+t+")";return '<circle cx="24" cy="24" r="17" fill="'+f+'"/>'+maria(t)+craters(t)+stipple(t)+(t>=4?rays():'')+(t==5?veins():'')+'<circle cx="24" cy="24" r="17" fill="url(#gLimb)"/><circle cx="24" cy="24" r="17" fill="none" stroke="'+(t==2?"#1b1c20":"#2a0308")+'" stroke-width=".7" opacity=".8"/>'+(t>=4?'<ellipse cx="17.4" cy="15.4" rx="4.4" ry="2.4" transform="rotate(-35 17.4 15.4)" fill="#fff" opacity="'+(t==5?.2:.13)+'"/>':'')}
var cor='<g stroke="#ff5a66" stroke-linecap="round" opacity=".42">',ci;for(ci=0;ci<36;ci++){var ca=ci*.17453,cr2=ci%3==0?23.6:ci%2?21.3:22.2;cor+='<line x1="'+(24+Math.cos(ca)*19.4).toFixed(2)+'" y1="'+(24+Math.sin(ca)*19.4).toFixed(2)+'" x2="'+(24+Math.cos(ca)*cr2).toFixed(2)+'" y2="'+(24+Math.sin(ca)*cr2).toFixed(2)+'" stroke-width="'+(ci%3==0?.45:.28)+'"/>'}
 cor+=an('<animateTransform attributeName="transform" type="rotate" values="0 24 24;360 24 24" dur="90s" repeatCount="indefinite"/>')+'</g>';
 var emb='<g fill="#ff7a80">',ei,ex=[[10,34,4.1],[38,30,5.3],[14,40,6.2],[34,38,4.7],[40,22,5.8]];for(ei=0;ei<ex.length;ei++){emb+='<circle cx="'+ex[ei][0]+'" cy="'+ex[ei][1]+'" r=".42" opacity="0">'+an('<animate attributeName="cy" values="'+ex[ei][1]+';'+(ex[ei][1]-11)+'" dur="'+ex[ei][2]+'s" begin="'+ei*.8+'s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="'+ex[ei][2]+'s" begin="'+ei*.8+'s" repeatCount="indefinite"/>')+'</circle>'}emb+='</g>';
 var rim='<path d="M40.7 27A17 17 0 0 1 29.8 40" stroke="#ff7a84" stroke-width=".9" fill="none" opacity=".5" stroke-linecap="round"/><path d="M39.6 22.4A17 17 0 0 1 40.8 27" stroke="#ff9aa0" stroke-width=".5" fill="none" opacity=".35" stroke-linecap="round"/>';
 var spark='<path d="M17.4 10.6l.6 2 2 .6-2 .6-.6 2-.6-2-2-.6 2-.6Z" fill="#fff" opacity=".2">'+an('<animate attributeName="opacity" values=".1;.95;.1" dur="3.2s" repeatCount="indefinite"/>')+'</path>';
 var refl='<ellipse cx="24" cy="46" rx="12" ry="1.5" fill="#ff2a3a" opacity=".25">'+an('<animate attributeName="opacity" values=".15;.4;.15" dur="2.9s" repeatCount="indefinite"/>')+'</ellipse><circle cx="24.4" cy="42" r=".85" fill="#e0202e" opacity="0">'+an('<animate attributeName="cy" values="41.6;47" dur="3.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;1;0" dur="3.4s" repeatCount="indefinite"/>')+'</circle>';
 var halo5='<circle cx="24" cy="24" r="23.4" fill="url(#gH5)"/><circle cx="24" cy="24" r="21.6" fill="none" stroke="#ff3a48" stroke-width=".45" stroke-dasharray=".6 1.7" opacity=".55"/><circle cx="24" cy="24" r="19.8" fill="none" stroke="#ff2a3a" stroke-width=".6" opacity=".4"/>';
 var sy='<symbol id="mn5" viewBox="0 0 48 48">'+cor+halo5+disc(5)+rim+spark+emb+refl+'<g>'+cloud(5)+an('<animateTransform attributeName="transform" type="translate" values="-2.4 0;2.4 0;-2.4 0" dur="10s" repeatCount="indefinite"/>')+'</g><g>'+bird()+an('<animateTransform attributeName="transform" type="translate" values="-7 2.4;3 -1;-7 2.4" dur="9s" repeatCount="indefinite"/>')+'</g><g>'+drips()+'</g></symbol>'+
 '<symbol id="mn4" viewBox="0 0 48 48"><circle cx="24" cy="24" r="23" fill="url(#gH4)"/><circle cx="24" cy="24" r="19.6" fill="none" stroke="#e0212f" stroke-width=".5" opacity=".38"/>'+disc(4)+rim+'<g>'+cloud(4)+an('<animateTransform attributeName="transform" type="translate" values="-2 0;2 0;-2 0" dur="12s" repeatCount="indefinite"/>')+'</g></symbol>'+
 '<symbol id="mn3" viewBox="0 0 48 48">'+disc(3)+'<g>'+cloud(3)+an('<animateTransform attributeName="transform" type="translate" values="-1.6 0;1.6 0;-1.6 0" dur="14s" repeatCount="indefinite"/>')+'</g></symbol>'+
 '<symbol id="mn2" viewBox="0 0 48 48">'+disc(2)+cracks()+'<path d="M24 7A17 17 0 0 1 24 41A11.5 17 0 0 0 24 7Z" fill="#090b11" opacity=".62"/><circle cx="24" cy="24" r="17" fill="none" stroke="#191a1e" stroke-width="1.2"/><path d="M17 41.2q.5 3.4 0 5.2M31 40.8q.5 4 0 6.4M24 41.6q.3 2 0 3" stroke="#5e6a50" stroke-width="1" fill="none" stroke-linecap="round"/><g fill="#6e6f74" opacity=".6"><circle cx="9" cy="14" r=".5"/><circle cx="40" cy="30" r=".6"/><circle cx="12" cy="38" r=".4"/><circle cx="38" cy="12" r=".4"/></g></symbol>'+
 '<symbol id="mnE" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16.4" fill="#080a12" stroke="#2c2f3f" stroke-width="1"/><path d="M11 33.6A16.4 16.4 0 0 0 37 33.6" stroke="#9b1c27" stroke-width="1.1" fill="none" opacity=".75"/><path d="M13.4 36A16.4 16.4 0 0 0 34.6 36" stroke="#e03040" stroke-width=".35" fill="none" opacity=".55"/><g fill="#3b3f52"><circle cx="19" cy="19" r=".5"/><circle cx="28" cy="16" r=".4"/><circle cx="29" cy="27" r=".5"/><circle cx="21" cy="29" r=".4"/><circle cx="24" cy="22" r=".3"/></g></symbol>'+
 '<symbol id="mnH" viewBox="0 0 48 48"><path d="M24 6.6A17.4 17.4 0 0 1 24 41.4Z" fill="url(#gHalf)"/><path d="M24 7A17 17 0 0 1 24 41" stroke="#7a1620" stroke-width=".7" fill="none" opacity=".8"/></symbol>';

 function scene(t){var sk={5:["#07020a","#2e0610","#5c0a17"],4:["#06070e","#1f0a14","#3b0f19"],3:["#08090e","#171015","#281618"],2:["#0a0b0e","#15161a","#212327"]}[t],dk={5:"#050103",4:"#040206",3:"#050305",2:"#050506"}[t],i,x,y,o='<symbol id="sc'+t+'" viewBox="0 0 160 64" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="gSk'+t+'" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="'+sk[0]+'"/><stop offset=".62" stop-color="'+sk[1]+'"/><stop offset="1" stop-color="'+sk[2]+'"/></linearGradient></defs><rect width="160" height="64" fill="url(#gSk'+t+')"/>';
  if(t>=4){MNSD=31;for(i=0;i<40;i++){x=mnR()*160;y=mnR()*38;o+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+(.2+mnR()*.35).toFixed(2)+'" fill="#ffe9ea" opacity="'+(.25+mnR()*.55).toFixed(2)+'">'+(i%6==0?an('<animate attributeName="opacity" values=".15;.9;.15" dur="'+(2+i%5)+'s" repeatCount="indefinite"/>'):'')+'</circle>'}}
  o+='<use href="#mn'+t+'" x="92" y="-1" width="62" height="62"/>';
  o+='<path d="M0 49L9 43 17 47 29 39 40 46 53 41 65 48 79 42 94 48 109 41 124 47 138 42 150 46 160 43V64H0Z" fill="'+dk+'" opacity=".78"/>';
  if(t>=4)o+='<ellipse cx="122" cy="60.5" rx="26" ry="3" fill="#ff2a3a" opacity="'+(t==5?.16:.1)+'"/><g stroke="#ff3a48" stroke-width=".35" opacity="'+(t==5?.35:.2)+'" stroke-linecap="round"><path d="M112 58.4q2 .6 4 0M118 59.4q2.6.6 5.2 0M125 58.6q2 .6 4 0M130 60q2 .5 4 0M108 60.2q1.6.4 3.2 0"/></g>';
  var gt=t==2?'<g transform="rotate(-8 122 58)">':'<g>',rim=t>=4?' stroke="#ff3a48" stroke-width=".3" stroke-opacity="'+(t==5?.55:.3)+'"':'';
  o+=gt+'<g fill="'+dk+'"'+rim+'><rect x="108.4" y="34.5" width="2.5" height="24"/><rect x="133.1" y="34.5" width="2.5" height="24"/><path d="M101 32.6Q122 37.4 143 32.6L141.4 36.4Q122 40.6 102.6 36.4Z"/><rect x="104.4" y="37" width="35.2" height="1.8"/>'+(t==2?'':'<rect x="108.4" y="42.4" width="27.2" height="2.2"/><rect x="120" y="37.8" width="4" height="4.6"/>')+'<rect x="106.8" y="57" width="5.6" height="1.6"/><rect x="131.6" y="57" width="5.6" height="1.6"/></g></g>';
  if(t==2)o+='<g fill="'+dk+'"><rect x="116" y="55.4" width="9" height="1.4" transform="rotate(14 120 56)"/><rect x="127" y="56.4" width="5" height="1.2" transform="rotate(-20 130 57)"/></g>';
  o+='<g fill="'+dk+'">';MNSD=47;for(x=-2;x<162;x+=4.6+mnR()*2.2){var h=9+mnR()*9;o+='<path d="M'+x.toFixed(1)+' 64L'+(x+3).toFixed(1)+' '+(64-h).toFixed(1)+' '+(x+6).toFixed(1)+' 64Z"/><path d="M'+(x+.8).toFixed(1)+' '+(64-h*.5).toFixed(1)+'L'+(x+3).toFixed(1)+' '+(64-h-2).toFixed(1)+' '+(x+5.2).toFixed(1)+' '+(64-h*.5).toFixed(1)+'Z"/>'}o+='<rect y="62" width="160" height="2"/></g>';
  var mc=t==2?"#a9b79a":t==3?"#d9c4c4":"#ffb4ba",mo={5:.055,4:.05,3:.12,2:.1}[t];
  o+='<g fill="'+mc+'"><ellipse cx="38" cy="52.6" rx="46" ry="4.4" opacity="'+mo+'">'+an('<animateTransform attributeName="transform" type="translate" values="-16 0;16 0;-16 0" dur="22s" repeatCount="indefinite"/>')+'</ellipse><ellipse cx="118" cy="56.4" rx="52" ry="3.4" opacity="'+mo*1.25+'">'+an('<animateTransform attributeName="transform" type="translate" values="14 0;-14 0;14 0" dur="27s" repeatCount="indefinite"/>')+'</ellipse><ellipse cx="80" cy="47.6" rx="40" ry="2.6" opacity="'+mo*.8+'">'+an('<animateTransform attributeName="transform" type="translate" values="-10 0;18 0;-10 0" dur="31s" repeatCount="indefinite"/>')+'</ellipse></g>';
  if(t>=4)for(i=0;i<3;i++)o+='<path d="M0 0q2.2-2.4 4.4 0 2.2-2.4 4.4 0-2.2.8-4.4.6-2.2.2-4.4-.6Z" fill="#050103" transform="translate(-12 '+(14+i*6)+')">'+an('<animateTransform attributeName="transform" type="translate" values="-12 '+(14+i*6)+';172 '+(8+i*7)+'" dur="'+(24+i*5)+'s" begin="'+i*7+'s" repeatCount="indefinite"/>')+'</path>';
  o+='<rect width="76" height="64" fill="url(#gDk)"/>';
  return o+'</symbol>'}
 var SC='<linearGradient id="gDk" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>'+scene(5)+scene(4)+scene(3)+scene(2);
 var d=document.createElement("div");d.id="mn-defs";d.setAttribute("aria-hidden","true");d.style.cssText="position:absolute;width:0;height:0;overflow:hidden";d.innerHTML='<svg width="0" height="0"><defs>'+g+sy+SC+'</defs></svg>';(document.body||document.documentElement).appendChild(d)}
function mnUse(id,h){return '<svg viewBox="0 0 48 48" aria-hidden="true"><use href="#'+id+'"/>'+(h?'<use href="#mnH"/>':'')+'</svg>'}
function mnPlate(n){var t=n>=4.5?5:n>=3.5?4:n>=2.5?3:2;if(window.lpScene)return '<div class="mplate t'+t+'" role="img" aria-label="'+n+'/5">'+lpScene(t)+'<div class="mtxt"><span class="mn1"><b>'+n.toFixed(1)+'</b><small>/5</small></span><em>'+esc(T(UI["mv"+t]))+'</em><span class="mn2">'+esc(T(UI["ms"+t]))+'</span></div></div>';mnDefs();return '<div class="mplate t'+t+'"><svg viewBox="0 0 160 64" role="img" aria-label="'+n+'/5"><use href="#sc'+t+'"/></svg><div class="mtxt"><span class="mn1"><b>'+n.toFixed(1)+'</b><small>/5</small></span><em>'+esc(T(UI["mv"+t]))+'</em><span class="mn2">'+esc(T(UI["ms"+t]))+'</span></div></div>'}
function rateLp(n){var t=n>=4.5?5:n>=3.5?4:n>=2.5?3:2,s="";for(var i=1;i<=5;i++){if(n>=i)s+='<i class="ey lp e'+t+'">'+lpUse(t,0)+'</i>';else if(n>=i-.5)s+='<i class="ey lp e'+t+'">'+lpUse(t,1)+'</i>';else s+='<i class="ey lp e0">'+lpUse("E")+'</i>'}return s}
function rate(n){if(window.lpUse)return rateLp(n);mnDefs();var t=n>=4.5?5:n>=3.5?4:n>=2.5?3:2,s="";for(var i=1;i<=5;i++){if(n>=i)s+='<i class="ey mn e'+t+'">'+mnUse("mn"+t,0)+'</i>';else if(n>=i-.5)s+='<i class="ey mn e'+t+'">'+mnUse("mn"+t,1)+'</i>';else s+='<i class="ey mn e0">'+mnUse("mnE",0)+'</i>'}return s}
function gore(n){var s="";for(var i=1;i<=5;i++){s+='<i class="'+(n>=i?'on':'')+'"></i>'}return s}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function shd(id,ix){var h=0;for(var i=0;i<id.length;i++)h=(h*31+id.charCodeAt(i))>>>0;var st=h%3,o='';
  for(var k=0;k<3;k++)o+='<svg viewBox="0 0 100 160" preserveAspectRatio="xMaxYMid meet" aria-hidden="true"'+(k===st?' class="on"':'')+'><use href="#sh'+k+'"/></svg>';
  return '<div class="shd'+((h>>3)%2?' l':'')+'" aria-hidden="true">'+o+'</div>'}
function gtags(arr){return arr.map(function(k){return '<span class="tag g meta">'+ic(k)+esc(T(GN[k]))+'</span>'}).join("")}
function plural(n,f){if(LANG==="en")return n===1?f[0]:f[1];var m=n%100,b=n%10;if(m>10&&m<15)return f[2];if(b===1)return f[0];if(b>1&&b<5)return f[1];return f[2]}
function nm(id){return F[id].n}
function filmWord(n){return plural(n,T(UI.n_films))}

var cur=null,query="",secFilter="home",picked=null;
var CAT_BATCH=48,CAT_LIMIT=CAT_BATCH,REVIEW_BATCH=12,REVIEW_LIMIT=REVIEW_BATCH;
var heroMotionOff=function(){
  /* The hero slideshow is a cheap opacity change every 6 s, so it keeps running in calm mode (the phone default).
     It only stops for a hidden tab or the system "reduce motion" setting. */
  return document.hidden||matchMedia("(prefers-reduced-motion: reduce)").matches;
};

function setImgs(){
  document.querySelectorAll("[data-bg]").forEach(function(b){var k=b.dataset.bg;if(IMG[k]&&!b.dataset.set){b.style.backgroundImage="url("+IMG[k]+")";b.dataset.set="1"}});
  document.querySelectorAll("img[data-img]:not(.hslides img)").forEach(function(im){var k=im.dataset.img;if(IMG[k]&&im.getAttribute("src")!==IMG[k]){im.loading="lazy";im.decoding="async";im.src=IMG[k]}});
}

function renderMarquee(){
  var ids=Object.keys(F).slice(0,40);
  var one=ids.map(function(id){return '<span>'+esc(T(F[id].n))+ic("x")+'</span>'}).join("");
  var tr=document.getElementById("marquee");tr.innerHTML=one+one;
  /* no forced layout while the page is still being built: estimate now, measure once things have settled */
  var est=one.replace(/<[^>]*>/g,"").length*9+ids.length*48;tr.style.animationDuration=Math.max(120,Math.round(est/40))+"s";
  clearTimeout(renderMarquee.t);renderMarquee.t=setTimeout(function(){var d=Math.max(120,Math.round(tr.scrollWidth/2/40));tr.style.animationDuration=d+"s"},3000);
}

function renderKpis(){
  var films=Object.keys(F).length;
  var avg=REVIEWS.reduce(function(s,r){return s+r.g},0)/REVIEWS.length;
  var items=[[ "reel",films,UI.k_films],["star",REVIEWS.length,UI.k_rev],["list",LISTS.length+SHELVES.length,UI.k_lists],["gore",avg.toFixed(1),UI.k_gore]];
  document.getElementById("kpis").innerHTML=items.map(function(k){return '<div class="kpi">'+ic(k[0])+'<b data-v="'+k[1]+'">'+k[1]+'</b><span>'+esc(T(k[2]))+'</span></div>'}).join("");
  if(!(window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches)){
    document.querySelectorAll(".kpi b").forEach(function(b){var v=parseFloat(b.dataset.v),dec=String(b.dataset.v).indexOf(".")>-1,t0=null;
      function st(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/900),e=1-Math.pow(1-k,3);b.textContent=dec?(v*e).toFixed(1):Math.round(v*e);if(k<1)requestAnimationFrame(st)}
      requestAnimationFrame(st)});
  }
}

function renderBars(){
  var rows=GENRES.map(function(g){return {k:g[0],n:REVIEWS.filter(function(r){return r.gn.indexOf(g[0])>-1}).length}}).sort(function(x,y){return y.n-x.n});
  var max=rows[0].n||1;
  document.getElementById("bars").innerHTML=rows.map(function(r){
    return '<button type="button" class="bar" data-g="'+r.k+'" aria-label="'+esc(T(GN[r.k]))+': '+r.n+'">'+ic(r.k)+'<span class="nm">'+esc(T(GN[r.k]))+'</span><span class="track"><span class="fill" style="width:'+(r.n/max*100)+'%"></span></span><span class="n">'+r.n+'</span></button>';
  }).join("");
}

function renderScatter(){
  var W=520,H=340,L=46,R=14,Tt=18,B=44;
  var gx=function(g){return L+(g-.5)/5*(W-L-R)};
  var ry=function(r){return Tt+(5.25-r)/2*(H-Tt-B)};
  var s='<svg class="sv" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(T(UI.c2_h))+'">';
  [3.5,4,4.5,5].forEach(function(v){s+='<line class="grid" x1="'+L+'" x2="'+(W-R)+'" y1="'+ry(v)+'" y2="'+ry(v)+'"/><text x="'+(L-8)+'" y="'+(ry(v)+3)+'" text-anchor="end">'+v+'</text>'});
  [1,2,3,4,5].forEach(function(v){s+='<line class="grid" x1="'+gx(v)+'" x2="'+gx(v)+'" y1="'+Tt+'" y2="'+(H-B)+'"/><text x="'+gx(v)+'" y="'+(H-B+16)+'" text-anchor="middle">'+v+'</text>'});
  s+='<line class="ax" x1="'+L+'" x2="'+(W-R)+'" y1="'+(H-B)+'" y2="'+(H-B)+'"/><line class="ax" x1="'+L+'" x2="'+L+'" y1="'+Tt+'" y2="'+(H-B)+'"/>';
  s+='<text x="'+(W-R)+'" y="'+(H-8)+'" text-anchor="end">'+esc(T(UI.ax_x))+'</text><text x="'+(L-34)+'" y="'+(Tt-6)+'" text-anchor="start">'+esc(T(UI.ax_y))+'</text>';
  s+='<text class="q" x="'+(L+10)+'" y="'+(Tt+16)+'">'+esc(T(UI.q_tl))+'</text><text class="q" x="'+(W-R-10)+'" y="'+(Tt+16)+'" text-anchor="end">'+esc(T(UI.q_tr))+'</text>';
  var groups={};REVIEWS.forEach(function(r,i){var k=r.g+"|"+r.r;(groups[k]=groups[k]||[]).push(i)});
  REVIEWS.forEach(function(r,i){
    var grp=groups[r.g+"|"+r.r],n=grp.length,idx=grp.indexOf(i);
    var cx=gx(r.g),cy=ry(r.r);
    if(n>1){var ang=idx/n*Math.PI*2-Math.PI/2,rad=n>2?13:9;cx+=Math.cos(ang)*rad;cy+=Math.sin(ang)*rad}
    s+='<circle class="pt'+(picked===i?' sel':'')+'" data-i="'+i+'" cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="7" tabindex="0" role="button" aria-label="'+esc(T(F[r.id].n))+'"><title>'+esc(T(F[r.id].n))+'</title></circle>';
  });
  s+='</svg>';
  document.getElementById("scatter").innerHTML=s;
  renderPick();
}
function renderPick(){
  var p=document.getElementById("pick");
  if(picked===null){p.innerHTML='<em>'+esc(T(UI.pick0))+'</em>';return}
  var r=REVIEWS[picked];
  p.innerHTML=esc(T(F[r.id].n))+' <em>· '+F[r.id].y+' · '+esc(T(UI.f_gore))+' '+r.g+' · '+esc(T(UI.f_rate))+' '+r.r+'</em>';
}

function renderDecades(){
  var cnt={};Object.keys(F).forEach(function(id){var dc=Math.floor(F[id].y/10)*10;cnt[dc]=(cnt[dc]||0)+1});
  var ds=Object.keys(cnt).map(Number).sort(function(x,y){return x-y});
  var from=ds[0],to=ds[ds.length-1],list=[];for(var y=from;y<=to;y+=10)list.push(y);
  var max=Math.max.apply(null,list.map(function(y){return cnt[y]||0}));
  var W=720,H=230,L=10,R=10,Tt=26,B=34,bw=(W-L-R)/list.length,gap=Math.min(14,bw*.22);
  var s='<svg class="sv" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+esc(T(UI.c3_h))+'">';
  s+='<line class="ax" x1="'+L+'" x2="'+(W-R)+'" y1="'+(H-B)+'" y2="'+(H-B)+'"/>';
  list.forEach(function(y,i){
    var c=cnt[y]||0,h=c/max*(H-B-Tt),x=L+i*bw+gap/2,w=bw-gap;
    if(c){s+='<rect class="col'+(c===max?' max':'')+'" x="'+x.toFixed(1)+'" y="'+(H-B-h).toFixed(1)+'" width="'+w.toFixed(1)+'" height="'+h.toFixed(1)+'"/><text class="val" x="'+(x+w/2).toFixed(1)+'" y="'+(H-B-h-6).toFixed(1)+'" text-anchor="middle">'+c+'</text>'}
    s+='<text x="'+(x+w/2).toFixed(1)+'" y="'+(H-B+16)+'" text-anchor="middle">'+T(UI.decade)(y)+'</text>';
  });
  s+='</svg>';
  document.getElementById("decades").innerHTML=s;
}

function inCount(id){var n=0;LISTS.forEach(function(l){if(l.ids.indexOf(id)>-1)n++});SHELVES.forEach(function(x){if(x.f.indexOf(id)>-1)n++});SUBS.forEach(function(x){if(x.f.indexOf(id)>-1)n++});return n}
var catQ="",catDec="all",factI=0,tnI=null;
function dayIdx(){return Math.floor(Date.now()/864e5)}
function renderTonight(){
  var ids=Object.keys(F);if(tnI===null)tnI=dayIdx()%ids.length;var id=ids[tnI%ids.length];
  var where=LISTS.filter(function(l){return l.ids.indexOf(id)>-1}).map(function(l){return T(l.t)});
  document.getElementById("tn-h").innerHTML=ic("pent")+esc(T(UI.tn_h));
  document.getElementById("tn-f").textContent=T(F[id].n);
  document.getElementById("tn-m").textContent=F[id].y+(where.length?" · "+T(UI.rnd_in)+": "+where[0]:"");
  document.getElementById("fc-h").innerHTML=ic("eye")+esc(T(UI.fc_h));
  document.getElementById("fc-t").textContent=T(FACTS[(dayIdx()+factI)%FACTS.length]);
}
function renderFresh(){
  document.getElementById("fresh").innerHTML=RELEASES.slice(0,5).map(function(r,i){return '<div><span class="nw">'+(r.soon?'SOON':'NEW')+'</span><div class="no">'+(i+1)+'</div><b>'+esc(r.t)+'</b><span>'+r.d+' · '+esc(T(r.dir))+'</span></div>'}).join("");
}
function renderSubs(){
  document.getElementById("subs-host").innerHTML=SUBS.map(function(x){return '<div class="sub rv">'+ic(x.ic)+'<h3>'+esc(T(x.t))+'</h3><p>'+esc(T(x.p))+'</p><div class="chips">'+x.f.map(function(id){return '<span class="chip">'+esc(T(F[id].n))+'<i>'+F[id].y+'</i></span>'}).join("")+'</div></div>'}).join("");
}
function renderCat(){
  var ids=Object.keys(F),decs={},X=window.CATX||[],focused=document.activeElement;
  var linkedFilm=catFilmID&&(F[catFilmID]||X.find(film=>film.id===catFilmID));
  if(linkedFilm)document.getElementById("cq").value=T(linkedFilm.n);
  var grid=document.getElementById("catg"),decHost=document.getElementById("cat-dec"),stateHost=document.getElementById("cat-st");
  var focusGroup=[grid,decHost,stateHost].find(function(el){return el.contains(focused)});
  var focusKey=focusGroup===grid?"id":focusGroup===decHost?"d":"s",focusValue=focused?.dataset[focusKey];
  ids.forEach(function(id){decs[Math.floor(F[id].y/10)*10]=1});
  var dl=Object.keys(decs).map(Number).sort(function(x,y){return x-y});
  document.getElementById("cat-dec").innerHTML='<button type="button" data-d="all" aria-pressed="'+(catDec==="all")+'">'+esc(T(UI.cat_all))+'</button>'+dl.map(function(y){return '<button type="button" data-d="'+y+'" aria-pressed="'+(String(y)===String(catDec))+'">'+T(UI.decade)(y)+'</button>'}).join("")+(X.length?'<button type="button" data-d="0" aria-pressed="'+(String(catDec)==="0")+'">'+(LANG==="ru"?"Без года":"No year")+'</button>':"");
  var q=catQ.trim().toLowerCase(),rev={};REVIEWS.forEach(function(r){rev[r.id]=1});
  var list=ids.filter(function(id){var f=F[id];var okD=catDec==="all"||Math.floor(f.y/10)*10===+catDec;var okQ=!q||(f.n.ru+" "+f.n.en+" "+f.y).toLowerCase().indexOf(q)>-1;var okS=catSt==="all"||MY[id]===catSt;return (!catFilmID||id===catFilmID)&&okD&&okQ&&okS}).sort(function(x,y){return F[x].y-F[y].y});
  var xl=X.filter(function(x){if(catFilmID&&x.id!==catFilmID)return false;var okD=catDec==="all"||String(catDec)==="0";var okQ=!q||(x.n.ru+" "+x.n.en).toLowerCase().indexOf(q)>-1;var okS=catSt==="all"||MY[x.id]===catSt;return okD&&okQ&&okS}).sort(function(a,b){var A=T(a.n).toLowerCase(),B=T(b.n).toLowerCase();return A<B?-1:A>B?1:0});
  if(String(catDec)==="0")list=[];
  document.getElementById("cat-st").innerHTML=[["all",UI.my_all],["want",UI.my_want],["seen",UI.my_seen]].map(function(x){return '<button type="button" data-s="'+x[0]+'" aria-pressed="'+(catSt===x[0])+'">'+esc(T(x[1]))+'</button>'}).join("");
  function catalogueButton(id,film,year,rating){
    var st=MY[id]||"",state=st==="seen"?T(UI.my_seen):st==="want"?T(UI.my_want):LANG==="ru"?"Без отметки":"Unmarked";
    return '<button type="button" data-id="'+id+'" data-s="'+st+'" aria-label="'+esc(T(film.n)+(year?' · '+year:'')+' · '+state)+'"><b>'+(st==="seen"?ic("check","mk"):st==="want"?ic("eye","mk"):"")+(rating?ic("star"):"")+esc(T(film.n))+'</b><i>'+(year||'—')+'</i>'+(film.bl?'<small class="bl">'+esc(T(film.bl))+'</small>':'')+'</button>';
  }
  var xhtml=xl.slice(0,Math.max(0,CAT_LIMIT-list.length)).map(function(x){return catalogueButton(x.id,x,null,false)}).join("");
  grid.innerHTML=list.slice(0,CAT_LIMIT).map(function(id){return catalogueButton(id,F[id],F[id].y,rev[id])}).join("")+xhtml||'<div><b>'+esc(T(UI.empty))+'</b></div>';
  if(focusGroup&&focusValue){
    var replacement=[...focusGroup.querySelectorAll("button")].find(function(b){return b.dataset[focusKey]===focusValue});
    (replacement||grid.querySelector("button")||document.getElementById("cq")).focus({preventScroll:true});
  }
  var more=document.getElementById("cat-more");
  more.hidden=list.length+xl.length<=CAT_LIMIT;
  more.textContent=LANG==="ru"?"Показать ещё фильмы":"Show more films";
  var seenN=ids.filter(function(id){return MY[id]==="seen"}).length;
  document.getElementById("cat-count").textContent=(list.length+xl.length)+" / "+(ids.length+X.length)+" "+filmWord(ids.length+X.length)+(seenN?" · "+T(UI.my_seen)+": "+seenN:"");
  document.getElementById("cq").placeholder=T(UI.cat_ph);
}
var catFilmID=new URLSearchParams(location.search).get("film");
if(!/^[a-z0-9_-]+$/i.test(catFilmID||""))catFilmID=null;
var diary=window.HA_DIARY,MY={},catSt="all",quizI=0,quizS={},quizDone=false;
try{MY=localStorage.getItem("ha-diary-unified-v1")?diary.statuses():JSON.parse(localStorage.getItem("ha-my")||"{}")||{}}catch(e){}
var priorMy={...MY};
function saveMy(){
  if(!diary)return;
  var changes=Object.create(null);
  for(var id of new Set([...Object.keys(priorMy),...Object.keys(MY)])){
    if(priorMy[id]!==MY[id])changes[id]=MY[id]||"";
  }
  priorMy={...MY};
  if(Object.keys(changes).length)diary.ready().then(()=>diary.setStatuses(changes));
}
if(diary){
  document.addEventListener("ha-diary",function(){
    MY=diary.statuses();priorMy={...MY};
    if(!document.getElementById("catalog").hidden)renderCat();
  });
  diary.ready();
}
function renderCal(){
  var out=[],d=new Date();d.setDate(1);
  for(var i=0;i<24&&out.length<4;i++){var x=new Date(d.getFullYear(),d.getMonth()+i,13);if(x.getDay()===5&&x>=new Date(new Date().setHours(0,0,0,0)))out.push(x)}
  var loc=LANG==="ru"?"ru-RU":"en-GB",fmt=function(x){return x.toLocaleDateString(loc,{day:"numeric",month:"long",year:"numeric"})};
  document.getElementById("cal").innerHTML='<div class="box rv"><h3>'+ic("saw")+esc(T(UI.cal_f))+'</h3><ul>'+out.map(function(x){return '<li><b>'+esc(fmt(x))+'</b><span>13 · Fri</span></li>'}).join("")+'</ul></div>'+
   '<div class="box rv"><h3>'+ic("clap")+esc(T(UI.cal_fe))+'</h3><ul>'+FEST.map(function(f){return '<li><b>'+esc(T(f[0]))+'</b><span>'+esc(T(f[1]))+'</span></li>'}).join("")+'</ul><p class="nt">'+esc(T(UI.cal_n))+'</p></div>'+
   '<div class="box rv"><h3>'+ic("reel")+esc(T(UI.cal_r))+'</h3><ul>'+RELEASES.filter(function(r){return r.soon}).map(function(r){return '<li><b>'+esc(r.t)+'</b><span>'+r.d+'</span></li>'}).join("")+'</ul></div>';
}
function renderQuiz(){
  var h=document.getElementById("quiz-host");
  if(quizDone){
    var best=Object.keys(quizS).sort(function(x,y){return quizS[y]-quizS[x]})[0]||"splatterpunk";
    h.innerHTML='<div class="res">'+ic(best)+'<p class="qn">'+esc(T(UI.quiz_res))+'</p><h3>'+esc(T(GN[best]))+'</h3><p>'+esc(T(GENRES.filter(function(g){return g[0]===best})[0][2]))+'</p><p class="qn">'+esc(T(UI.quiz_rec))+'</p><div class="chips" style="margin:10px 0 18px">'+QREC[best].map(function(id){return '<span class="chip">'+esc(T(F[id].n))+'<i>'+F[id].y+'</i></span>'}).join("")+'</div><button type="button" class="btn o" id="quiz-again">'+esc(T(UI.quiz_again))+'</button></div>';
    return;
  }
  if(quizI===0&&!Object.keys(quizS).length&&!h.dataset.started){
    h.innerHTML='<button type="button" class="btn" id="quiz-go">'+ic("ghost")+esc(T(UI.quiz_go))+'</button>';return;
  }
  var q=QUIZ[quizI];
  h.innerHTML='<div class="bar2"><i style="width:'+(quizI/QUIZ.length*100)+'%"></i></div><div class="qn">'+(quizI+1)+' / '+QUIZ.length+'</div><h3>'+esc(T(q.q))+'</h3><div class="opts">'+q.o.map(function(o,i){return '<button type="button" data-i="'+i+'">'+esc(T(o[0]))+'</button>'}).join("")+'</div>';
}
function renderDuel(){
  var A=document.getElementById("dA"),B=document.getElementById("dB");
  if(!A.options.length||A.dataset.l!==LANG){
    var va=A.value,vb=B.value,opts=REVIEWS.map(function(r,i){return '<option value="'+i+'">'+esc(T(F[r.id].n))+' ('+F[r.id].y+')</option>'}).join("");
    A.innerHTML=opts;B.innerHTML=opts;A.dataset.l=LANG;A.value=va||"0";B.value=vb||"1";
  }
  var a1=REVIEWS[+A.value],b1=REVIEWS[+B.value];
  function side(r,o){var f=F[r.id];return '<div class="'+(r.r>o.r?'win':'')+'"><h4>'+esc(T(f.n))+'</h4><div class="y">'+f.y+' · '+esc(T(r.d))+'</div><div class="row">'+esc(T(UI.f_rate))+'<span class="rate">'+rate(r.r)+'</span><b>'+r.r+'</b></div><div class="row">'+esc(T(UI.f_gore))+'<span class="gore">'+gore(r.g)+'</span><b>'+r.g+'</b></div><div class="tags" style="margin-top:12px">'+gtags(r.gn)+'</div></div>'}
  document.getElementById("duel").innerHTML=side(a1,b1)+side(b1,a1);
}
function renderSnd(){if(window.renderTone)window.renderTone();if(window.renderTape)window.renderTape();if(window.renderBadges)window.renderBadges();if(window.renderFl)window.renderFl();var b=document.getElementById("snd");if(b)b.textContent=T(sndOn?UI.snd_on:UI.snd_off)}
var sndOn=false,actx=null,sndNodes=null,sndTimer=null;
function noiseBuf(sec,brown){var n=Math.floor(actx.sampleRate*sec),buf=actx.createBuffer(1,n,actx.sampleRate),d=buf.getChannelData(0),last=0;
  for(var i=0;i<n;i++){var w=Math.random()*2-1;if(brown){last=(last+.02*w)/1.02;d[i]=last*3.5}else d[i]=w}return buf}
var JA=["のろい","みつけた","かえして","うしろ","たすけて","いたい","まだ","きこえる"];
function jaSpeak(vol){
  try{var ss=window.speechSynthesis;if(!ss)return;var vs=ss.getVoices().filter(function(v){return /^ja/i.test(v.lang)});if(!vs.length)return;
    var u=new SpeechSynthesisUtterance(JA[Math.floor(Math.random()*JA.length)]+"…　"+JA[Math.floor(Math.random()*JA.length)]);u.voice=vs[0];u.lang="ja-JP";u.volume=vol;u.rate=.45;u.pitch=.05;ss.speak(u)}catch(e){}
}
function whisper(c,dest,t,dur,lvl,pan){
  try{
    var V=[[800,1200,2500],[300,2300,3000],[350,1200,2400],[500,1900,2500],[450,900,2400]];
    var n=Math.floor(c.sampleRate*(dur+.6)),b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;
    var src=c.createBufferSource();src.buffer=b;
    var sum=c.createGain();sum.gain.value=lvl;var fs=[];
    for(var k=0;k<3;k++){var f=c.createBiquadFilter();f.type="bandpass";f.Q.value=7+k*2;f.frequency.value=V[0][k];var fg=c.createGain();fg.gain.value=[1,.7,.4][k];src.connect(f);f.connect(fg);fg.connect(sum);fs.push(f)}
    var env=c.createGain();env.gain.value=.0001;sum.connect(env);
    var tt=t,end=t+dur;
    while(tt<end){
      var len=.08+Math.random()*.14,v=V[Math.floor(Math.random()*V.length)];
      for(var k2=0;k2<3;k2++)fs[k2].frequency.setTargetAtTime(v[k2]*(.9+Math.random()*.2),tt,.02);
      env.gain.setTargetAtTime(.0001,tt-.01,.01);env.gain.setTargetAtTime(.5+Math.random()*.5,tt+.01,.02);
      tt+=len;if(Math.random()<.18)tt+=.18+Math.random()*.4;
    }
    env.gain.setTargetAtTime(.0001,end,.1);
    var sh=c.createBiquadFilter();sh.type="highpass";sh.frequency.value=5200;var shg=c.createGain();shg.gain.value=0;src.connect(sh);sh.connect(shg);shg.connect(env);
    for(var z=0;z<Math.floor(dur*2);z++){var tz=t+Math.random()*dur;shg.gain.setValueAtTime(0,tz);shg.gain.linearRampToValueAtTime(.45,tz+.02);shg.gain.linearRampToValueAtTime(0,tz+.09)}
    var pn=c.createStereoPanner?c.createStereoPanner():null;
    var dl=c.createDelay(.5);dl.delayTime.value=.19;var fb=c.createGain();fb.gain.value=.42;dl.connect(fb);fb.connect(dl);
    var out=pn||c.createGain();if(pn)pn.pan.setValueAtTime(pan||0,t);
    env.connect(out);env.connect(dl);dl.connect(out);out.connect(dest);
    src.start(t);src.stop(end+.6);
  }catch(e){}
}
function scrape(){
  if(!sndOn||!actx)return;
  if(Math.random()<.75){whisper(actx,sndNodes.m,actx.currentTime+Math.random()*1.5,2.5+Math.random()*3.5,.55,Math.random()*1.6-.8);if(Math.random()<.3)setTimeout(function(){if(sndOn)jaSpeak(.1)},1500+Math.random()*2000)}
  try{var t=actx.currentTime,dur=1.6+Math.random()*1.6,src=actx.createBufferSource();src.buffer=noiseBuf(dur+.2,false);
    var bp=actx.createBiquadFilter();bp.type="bandpass";bp.Q.value=14;
    var f0=1200+Math.random()*900;bp.frequency.setValueAtTime(f0,t);bp.frequency.exponentialRampToValueAtTime(f0*(2+Math.random()*1.6),t+dur);
    var g=actx.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.11,t+dur*.45);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
    var lfo=actx.createOscillator(),lg=actx.createGain();lfo.frequency.value=14+Math.random()*10;lg.gain.value=.04;lfo.connect(lg);lg.connect(g.gain);
    src.connect(bp);bp.connect(g);g.connect(sndNodes.m);src.start(t);src.stop(t+dur+.1);lfo.start(t);lfo.stop(t+dur+.1);
    if(Math.random()<.45){var o=actx.createOscillator(),og=actx.createGain(),t2=t+dur*.8;o.type="sine";o.frequency.setValueAtTime(70,t2);o.frequency.exponentialRampToValueAtTime(34,t2+.7);og.gain.setValueAtTime(.0001,t2);og.gain.exponentialRampToValueAtTime(.35,t2+.04);og.gain.exponentialRampToValueAtTime(.0001,t2+.8);o.connect(og);og.connect(sndNodes.m);o.start(t2);o.stop(t2+.9)}
  }catch(e){}
  try{if(sndNodes&&sndNodes.hiss&&Math.random()<.7){var tt0=actx.currentTime,hg2=sndNodes.hiss.gain,hf2=sndNodes.hf.frequency;hg2.cancelScheduledValues(tt0);hg2.setValueAtTime(.085,tt0);hg2.linearRampToValueAtTime(.3,tt0+.05);hg2.linearRampToValueAtTime(.05,tt0+.7);hg2.linearRampToValueAtTime(.085,tt0+1.2);hf2.cancelScheduledValues(tt0);hf2.setValueAtTime(900,tt0);hf2.linearRampToValueAtTime(2200,tt0+.9)}}catch(e){}
  sndTimer=setTimeout(scrape,6000+Math.random()*9000);
}
function toggleSound(){
  try{
    if(!actx){actx=new (window.AudioContext||window.webkitAudioContext)();
      var m=actx.createGain();m.gain.value=0;m.connect(actx.destination);
      var o1=actx.createOscillator(),o2=actx.createOscillator(),o3=actx.createOscillator();o1.frequency.value=55;o2.frequency.value=55.8;o3.frequency.value=82.4;o3.type="triangle";
      var dg=actx.createGain();dg.gain.value=.22;var lp=actx.createBiquadFilter();lp.type="lowpass";lp.frequency.value=260;
      [o1,o2,o3].forEach(function(o){o.connect(lp);o.start()});lp.connect(dg);dg.connect(m);
      var lfo=actx.createOscillator(),lgn=actx.createGain();lfo.frequency.value=.12;lgn.gain.value=.08;lfo.connect(lgn);lgn.connect(dg.gain);lfo.start();
      var ws=actx.createBufferSource();ws.buffer=noiseBuf(4,true);ws.loop=true;var wl=actx.createBiquadFilter();wl.type="lowpass";wl.frequency.value=520;var wg=actx.createGain();wg.gain.value=.14;ws.connect(wl);wl.connect(wg);wg.connect(m);ws.start();
      var hs=actx.createBufferSource();hs.buffer=noiseBuf(3,false);hs.loop=true;var hh=actx.createBiquadFilter();hh.type="highpass";hh.frequency.value=2200;var hl2=actx.createBiquadFilter();hl2.type="lowpass";hl2.frequency.value=9000;var hg=actx.createGain();hg.gain.value=.085;
      var hlf=actx.createOscillator(),hlg=actx.createGain();hlf.frequency.value=.37;hlg.gain.value=.03;hlf.connect(hlg);hlg.connect(hg.gain);hlf.start();
      hs.connect(hh);hh.connect(hl2);hl2.connect(hg);hg.connect(m);hs.start();
      sndNodes={m:m,hiss:hg,hf:hh}}
    sndOn=!sndOn;
    if(actx.state==="suspended")actx.resume();
    sndNodes.m.gain.cancelScheduledValues(actx.currentTime);sndNodes.m.gain.linearRampToValueAtTime(sndOn?.9:0,actx.currentTime+.9);
    clearTimeout(sndTimer);if(sndOn)sndTimer=setTimeout(scrape,2500);
  }catch(e){sndOn=false}
  var b=document.getElementById("snd");b.setAttribute("aria-pressed",String(sndOn));renderSnd();
}
var FG={};
function buildFG(){FG={};function add(id,g){(FG[id]=FG[id]||{})[g]=1}
  REVIEWS.forEach(function(r){r.gn.forEach(function(g){add(r.id,g)})});
  LISTS.forEach(function(l){if(GN[l.ic])l.ids.forEach(function(id){add(id,l.ic)})});
  START.forEach(function(l){if(GN[l.ic])l.ids.forEach(function(id){add(id,l.ic)})});
  SHELVES.forEach(function(l){if(GN[l.ic])l.f.forEach(function(id){add(id,l.ic)})})}
var STORY={
 start:{t:a("Вы Лора, ночная смена в видеопрокате «Красный закат». На экране мерцает помеха, на кассе звонит телефон, а в подсобке что-то упало.","You are Laura, working the night shift at the “Red Sunset” video store. The screen flickers with static, the phone rings at the counter and something falls in the back room."),c:[[a("Взять трубку","Pick up the phone"),"phone"],[a("Заглянуть в подсобку","Check the back room"),"back"],[a("Запереть дверь и бежать","Lock the door and run"),"door"]]},
 phone:{t:a("В трубке тяжёлое дыхание и шёпот: «Ты уже посмотрела кассету?» На полке одна кассета без подписи едва заметно светится.","Heavy breathing and a whisper in the receiver: “Have you watched the tape yet?” On the shelf one unlabelled cassette glows faintly."),c:[[a("Вставить кассету в магнитофон","Put the tape in the player"),"tape"],[a("Бросить трубку и бежать","Drop the phone and run"),"door"]]},
 back:{t:a("В подсобке пусто, но мокрые следы ведут к лестнице в подвал. Внизу горит свет.","The back room is empty, but wet footprints lead to the basement stairs. A light is on below."),c:[[a("Спуститься в подвал","Go down to the basement"),"basement"],[a("Вернуться и уйти через дверь","Go back and leave by the door"),"door"]]},
 door:{t:a("Дверь заперта снаружи. На стекле красный отпечаток ладони, а за ним стоит неподвижная фигура в белой маске.","The door is locked from outside. A red handprint on the glass and, behind it, a motionless figure in a white mask."),c:[[a("Крикнуть и постучать по стеклу","Shout and bang on the glass"),"mask"],[a("Схватить бейсбольную биту с витрины","Grab the baseball bat from the display"),"bat"]]},
 tape:{end:1,t:a("Экран гаснет, потом вспыхивает, и из него медленно тянутся мокрые волосы. У вас было семь дней, но вы потратили их все на один взгляд.","The screen goes dark, then flares, and wet hair slowly crawls out of it. You had seven days, but you spent them all on a single look."),e:a("Конец: проклятие кассеты","The end: the curse of the tape")},
 basement:{t:a("Внизу коробки со старыми VHS и стол с лампой. На столе нож и записка: «Не оборачивайся».","Boxes of old VHS tapes and a lamp-lit table. On it a knife and a note: “Do not turn around.”"),c:[[a("Обернуться","Turn around"),"turn"],[a("Взять нож и подняться","Take the knife and go up"),"car"]]},
 turn:{end:1,t:a("Белая маска в полуметре от вас. Лампа гаснет, и в темноте слышно только дыхание.","The white mask is half a metre from you. The lamp dies and only breathing is heard in the dark."),e:a("Конец: слишком любопытная","The end: too curious")},
 mask:{t:a("Он наклоняет голову, будто слушает, потом медленно ударяет кулаком по стеклу, и трещина ползёт к вам.","He tilts his head as if listening, then slowly punches the glass, and a crack creeps toward you."),c:[[a("Схватить биту и ждать у двери","Grab the bat and wait by the door"),"final"],[a("Разбить окно в подсобке и бежать к машине","Break the back window and run to the car"),"car"]]},
 bat:{t:a("Бита тяжёлая и приятно холодная. Стекло трескается, и маска придвигается ближе.","The bat is heavy and pleasantly cold. The glass cracks and the mask moves closer."),c:[[a("Встать у двери и ударить первой","Stand by the door and strike first"),"final"],[a("Разбить окно и бежать к машине","Smash the window and run to the car"),"car"]]},
 car:{t:a("Вы выбегаете на парковку. Машина заводится с третьей попытки, но на заднем сиденье что-то шевелится.","You run out to the parking lot. The car starts on the third try, but something stirs on the back seat."),c:[[a("Посмотреть в зеркало","Look in the mirror"),"look"],[a("Давить на газ и не смотреть","Floor it and do not look"),"drive"]]},
 look:{end:1,t:a("В зеркале белая маска, совсем рядом. Вы забыли, что любое зеркало в этом жанре лжёт.","In the mirror a white mask, very near. You forgot that every mirror in this genre lies."),e:a("Конец: он уже в машине","The end: he is already in the car")},
 drive:{end:2,t:a("Вы мчитесь до рассвета. По радио играет синтезаторная тема, а в зеркале заднего вида никого нет. Почти.","You race until dawn. A synthesizer theme plays on the radio and nobody is in the rear-view mirror. Almost."),e:a("Конец: вы выжили. Сиквел уже снимают","The end: you survived. A sequel is already in production")},
 final:{end:2,t:a("Дверь распахивается, и вы бьёте первой. Маска падает, под ней пустота. Утром полиция найдёт только ваши следы.","The door bursts open and you strike first. The mask falls and beneath it is nothing. In the morning the police find only your footprints."),e:a("Конец: последняя девушка","The end: the final girl")}
};
var fgNode="start",mem=null,hang=null,hl=null,yr=null,dark=null;
function sting(k){
  if(!sndOn||!actx)return;
  try{var t=actx.currentTime,g=actx.createGain(),o=actx.createOscillator();o.type="sawtooth";
    var bp=actx.createBiquadFilter();bp.type="bandpass";bp.Q.value=8;
    if(k==="scare"){o.frequency.setValueAtTime(900,t);o.frequency.exponentialRampToValueAtTime(3200,t+.5);bp.frequency.setValueAtTime(1400,t);bp.frequency.exponentialRampToValueAtTime(4200,t+.6);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.16,t+.05);g.gain.exponentialRampToValueAtTime(.0001,t+.8);o.start(t);o.stop(t+.85)}
    else{o.frequency.setValueAtTime(1500,t);o.frequency.exponentialRampToValueAtTime(2600,t+.2);bp.frequency.value=2200;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.06,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+.3);o.start(t);o.stop(t+.35)}
    o.connect(bp);bp.connect(g);g.connect(actx.destination)}catch(e){}
}
function showFG(){var h=document.getElementById("p-fg");if(!h)return;var n=STORY[fgNode];
  h.innerHTML='<div class="out story"><p>'+esc(T(n.t))+'</p>'+(n.end?'<div class="end">'+esc(T(n.e))+'</div>':'')+'</div><div class="opts">'+(n.end?'<button type="button" data-fg="start">'+esc(T(UI.p_fg_again))+'</button>':n.c.map(function(c){return '<button type="button" data-fg="'+c[1]+'">'+esc(T(c[0]))+'</button>'}).join(""))+'</div>';}
function newMem(){var rv=REVIEWS.slice().sort(function(){return Math.random()-.5}),used={},pairs=[];
  rv.forEach(function(r){var d=r.d.en;if(pairs.length<6&&!used[d]){used[d]=1;pairs.push(r)}});
  var cards=[];pairs.forEach(function(r,i){cards.push({k:i,t:F[r.id].n,f:"f"},{k:i,t:r.d,f:"d"})});
  cards.sort(function(){return Math.random()-.5});mem={cards:cards,open:[],done:{},moves:0,lock:false}}
function showMem(){var h=document.getElementById("p-mem");if(!h)return;if(!mem)newMem();
  var all=Object.keys(mem.done).length===6;
  h.innerHTML='<div class="mem">'+mem.cards.map(function(c,i){var up=mem.open.indexOf(i)>-1,dn=mem.done[c.k];return '<button type="button" data-m="'+i+'" class="'+(dn?'dn':up?'up':'back')+'"'+(dn?' disabled':'')+'>'+((up||dn)?esc(T(c.t)):'·')+'</button>'}).join("")+'</div><div class="sc">'+esc(T(UI.p_mem_m))+': '+mem.moves+(all?' · '+esc(T(UI.p_mem_w)):'')+'</div>'+(all?'<button type="button" class="btn o" id="p-mem-new">'+esc(T(UI.p_gs_n))+'</button>':'')}
function clickMem(i){if(mem.lock||mem.open.indexOf(i)>-1||mem.done[mem.cards[i].k])return;mem.open.push(i);
  if(mem.open.length===2){mem.moves++;var a1=mem.cards[mem.open[0]],b1=mem.cards[mem.open[1]];
    if(a1.k===b1.k){mem.done[a1.k]=1;mem.open=[];sting("find")}else{mem.lock=true;showMem();setTimeout(function(){mem.open=[];mem.lock=false;showMem()},900);return}}
  showMem()}
var ALPHA={ru:"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",en:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
function normW(w){return w.toUpperCase().replace(/Ё/g,"Е")}
function newHang(){var ids=Object.keys(F).filter(function(id){var w=normW(T(F[id].n)),L=ALPHA[LANG];var n=0;for(var i=0;i<w.length;i++)if(L.indexOf(w[i])>-1)n++;return n>=4&&w.length<=24}),id=pick(ids);hang={id:id,lang:LANG,w:normW(T(F[id].n)),g:{},lives:6}}
function showHang(){var h=document.getElementById("p-hang");if(!h)return;if(!hang||hang.lang!==LANG)newHang();
  var L=ALPHA[LANG],won=true,disp="";for(var i=0;i<hang.w.length;i++){var ch=hang.w[i];if(L.indexOf(ch)>-1){if(hang.g[ch])disp+=ch;else{disp+="_";won=false}}else disp+=ch}
  var lost=hang.lives<=0;if(lost){disp=hang.w}
  var lv="";for(var k=0;k<6;k++)lv+='<i class="'+(k<hang.lives?'':'x')+'"></i>';
  h.innerHTML='<div class="lives">'+lv+'</div><div class="hang">'+esc(disp)+'</div><div class="sc">'+F[hang.id].y+'</div><div class="keys">'+L.split("").map(function(c){var u=hang.g[c];return '<button type="button" data-h="'+c+'" class="'+(u?(hang.w.indexOf(c)>-1?'hit':'miss'):'')+'"'+((u||lost||won)?' disabled':'')+'>'+c+'</button>'}).join("")+'</div>'+((won||lost)?'<div class="sc">'+esc(T(won?UI.p_h_win:UI.p_h_lose))+'</div><button type="button" class="btn o" id="p-hang-new">'+esc(T(UI.p_gs_n))+'</button>':'');
  if(lost&&!hang.s){hang.s=1;sting("scare")}}
function newHL(){var i=Math.floor(Math.random()*REVIEWS.length),j;do{j=Math.floor(Math.random()*REVIEWS.length)}while(j===i||REVIEWS[j].g===REVIEWS[i].g);hl=hl||{streak:0,best:0};hl.a=i;hl.b=j;hl.res=null}
function showHL(){var h=document.getElementById("p-hl");if(!h)return;if(!hl||hl.a===undefined)newHL();
  var A=REVIEWS[hl.a],B=REVIEWS[hl.b];
  h.innerHTML='<div class="out"><b>'+esc(T(F[A.id].n))+'</b><em>'+esc(T(UI.f_gore))+'</em> <span class="gore">'+gore(A.g)+'</span></div><div class="cap" style="text-align:center">'+esc(T(UI.p_hl_q))+'</div><div class="out"><b>'+esc(T(F[B.id].n))+'</b><em>'+(hl.res?esc(T(UI.f_gore))+' </em><span class="gore">'+gore(B.g)+'</span>':'?</em>')+'</div>'+
   (hl.res?'<div class="sc">'+esc(T(hl.res==="ok"?UI.p_ok:UI.p_no))+'</div><button type="button" class="btn o" id="p-hl-next">'+esc(T(UI.p_gs_n))+'</button>':'<div class="two"><button type="button" class="btn" id="p-hl-hi">'+esc(T(UI.p_hl_hi))+'</button><button type="button" class="btn o" id="p-hl-lo">'+esc(T(UI.p_hl_lo))+'</button></div>')+'<div class="sc">'+esc(T(UI.p_hl_s))+': '+hl.streak+' · '+esc(T(UI.p_hl_b))+': '+hl.best+'</div>'}
function answerHL(hi){var A=REVIEWS[hl.a],B=REVIEWS[hl.b],ok=hi?B.g>A.g:B.g<A.g;hl.res=ok?"ok":"no";if(ok){hl.streak++;hl.best=Math.max(hl.best,hl.streak)}else{hl.streak=0;sting("scare")}showHL()}
function newYr(){yr=yr||{pts:0,n:0};var i=Math.floor(Math.random()*REVIEWS.length);yr.i=i;yr.g=1990;yr.done=false}
function showYr(){var h=document.getElementById("p-yr");if(!h)return;if(!yr||yr.i===undefined)newYr();var r=REVIEWS[yr.i],f=F[r.id];
  h.innerHTML='<div class="out"><b>'+esc(yr.done?T(f.n):"???")+'</b><p>'+esc(T(r.s))+'</p></div><div class="range2"><input type="range" id="p-yr-r" min="1920" max="2026" step="1" value="'+yr.g+'"'+(yr.done?' disabled':'')+' aria-label="year"><b id="p-yr-v">'+yr.g+'</b></div>'+
   (yr.done?'<div class="sc">'+esc(T(UI.p_yr_t))+': '+f.y+' · +'+yr.last+'</div><button type="button" class="btn o" id="p-yr-next">'+esc(T(UI.p_gs_n))+'</button>':'<button type="button" class="btn" id="p-yr-go">'+esc(T(UI.p_yr_go))+'</button>')+'<div class="sc">'+esc(T(UI.p_gs_s))+': '+yr.pts+' · '+yr.n+'</div>'}
var DK=["eye","ghost","saw","coffin","moon"];
function newDark(){dark={found:{},pos:DK.map(function(){return [8+Math.random()*84,12+Math.random()*76]}),won:null}}
function showDark(){var h=document.getElementById("p-dark-box");if(!h)return;if(!dark)newDark();
  var n=Object.keys(dark.found).length,won=n===DK.length;
  h.innerHTML='<div class="dark" id="p-dark">'+DK.map(function(k,i){return '<button type="button" data-dk="'+i+'" class="'+(dark.found[i]?'fd':'')+'" style="left:'+dark.pos[i][0]+'%;top:'+dark.pos[i][1]+'%" aria-label="'+k+'">'+ic(k)+'</button>'}).join("")+'</div><div class="sc">'+n+' / '+DK.length+'</div>'+(won?'<div class="out"><em>'+esc(T(UI.p_dk_w))+'</em>'+filmLine(dark.won)+'</div><button type="button" class="btn o" id="p-dark-new">'+esc(T(UI.p_gs_n))+'</button>':'');
  var d=document.getElementById("p-dark");
  function mv(e){var r=d.getBoundingClientRect(),t=e.touches?e.touches[0]:e;d.style.setProperty("--x",(t.clientX-r.left)+"px");d.style.setProperty("--y",(t.clientY-r.top)+"px")}
  d.addEventListener("pointermove",mv);d.addEventListener("pointerdown",mv);
  if(won)d.style.setProperty("--x","-300px");}
function renderPlay2(){
  var host=document.getElementById("play");
  host.insertAdjacentHTML("beforeend",
   '<div class="pbox"><h3>'+ic("web")+esc(T(UI.p_fg_h))+'</h3><p class="cap">'+esc(T(UI.p_fg_c))+'</p><div id="p-fg"></div></div>'+
   '<div class="pbox"><h3>'+ic("eye")+esc(T(UI.p_dk_h))+'</h3><p class="cap">'+esc(T(UI.p_dk_c))+'</p><div id="p-dark-box"></div></div>'+
   '<div class="pbox"><h3>'+ic("tape")+esc(T(UI.p_mem_h))+'</h3><p class="cap">'+esc(T(UI.p_mem_c))+'</p><div id="p-mem"></div></div>'+
   '<div class="pbox"><h3>'+ic("coffin")+esc(T(UI.p_h_h))+'</h3><p class="cap">'+esc(T(UI.p_h_c))+'</p><div id="p-hang"></div></div>'+
   '<div class="pbox"><h3>'+ic("gore")+esc(T(UI.p_hl_h))+'</h3><p class="cap">'+esc(T(UI.p_hl_c))+'</p><div id="p-hl"></div></div>'+
   '<div class="pbox"><h3>'+ic("cal")+esc(T(UI.p_yr_h))+'</h3><p class="cap">'+esc(T(UI.p_yr_c))+'</p><div id="p-yr"></div></div>');
  showFG();showDark();showMem();showHang();showHL();showYr();}
var PG="all",PD="all",spinRes=null,pitchRes=null,orRes=null,goreV=3,goreRes=null,gq=null,gOk=0,gTot=0,gAns=null;
function pick(a){return a[Math.floor(Math.random()*a.length)]}
function pool(){
  buildFG();
  return Object.keys(F).filter(function(id){var okG=PG==="all"||(FG[id]&&FG[id][PG]);var okD=PD==="all"||Math.floor(F[id].y/10)*10===+PD;return okG&&okD})}
function filmLine(id){var where=LISTS.filter(function(l){return l.ids.indexOf(id)>-1}).map(function(l){return T(l.t)});return '<b>'+esc(T(F[id].n))+'</b><em>'+F[id].y+(where.length?' · '+esc(where[0]):'')+'</em>'}
function showSpin(){var o=document.getElementById("p-spin-out");if(!o)return;
  if(!spinRes){o.innerHTML='<em>'+esc(T(UI.p_ready))+'</em>';return}
  if(spinRes==="none"){o.innerHTML='<em>'+esc(T(UI.p_none))+'</em>';return}
  o.innerHTML=Array.isArray(spinRes)?spinRes.map(function(id,i){return '<div style="margin-bottom:'+(i?0:10)+'px">'+filmLine(id)+'</div>'}).join(""):filmLine(spinRes)}
function doSpin(dbl){
  var pl=pool(),o=document.getElementById("p-spin-out");
  if(!pl.length||(dbl&&pl.length<2)){spinRes="none";showSpin();return}
  var n=0,iv=setInterval(function(){o.innerHTML='<b>'+esc(T(F[pick(pl)].n))+'</b>';if(++n>=12){clearInterval(iv);
    if(dbl){var a1=pick(pl),b1,t=0;do{b1=pick(pl);t++}while((b1===a1||Math.floor(F[b1].y/10)===Math.floor(F[a1].y/10))&&t<30);if(b1===a1)b1=pl.filter(function(x){return x!==a1})[0];spinRes=[a1,b1]}
    else spinRes=pick(pl);
    showSpin()}},60)}
function makePitch(){var t=pick(PITCH.tpl),nn=pick(PITCH.noun);pitchRes={title:{ru:t.ru+" "+nn.ru,en:t.en+" "+nn.en},w:pick(PITCH.where),h:pick(PITCH.who),tw:pick(PITCH.twist),st:pick(PITCH.style)}}
function showPitch(){var o=document.getElementById("p-pitch-out");if(!o)return;if(!pitchRes){o.innerHTML="";return}
  o.innerHTML='<b>'+esc(T(pitchRes.title))+'</b><p>'+esc(LANG==="ru"?("Действие в фильме идёт "+T(pitchRes.w)+": "+T(pitchRes.h)+", "+T(pitchRes.tw)+". Снят "+T(pitchRes.st)+"."):("Set "+T(pitchRes.w)+": "+T(pitchRes.h)+", "+T(pitchRes.tw)+". Shot "+T(pitchRes.st)+"."))+'</p>'}
function showOracle(){var o=document.getElementById("p-or-out");if(!o)return;if(!orRes){o.innerHTML="";return}o.innerHTML='<b>'+esc(T(orRes.a))+'</b><em>'+esc(T(F[orRes.f].n))+' · '+F[orRes.f].y+'</em>'}
function showGore(){var o=document.getElementById("p-gl-out");if(!o)return;
  document.getElementById("p-gl-v").innerHTML='<span class="gore">'+gore(goreV)+'</span> '+goreV+' / 5';
  if(!goreRes){o.innerHTML="";return}var r=REVIEWS[goreRes];o.innerHTML='<b>'+esc(T(F[r.id].n))+'</b><em>'+F[r.id].y+' · '+esc(T(UI.f_rate))+' '+r.r+'</em><p>'+esc(T(r.s))+'</p>'}
function newGuess(){var i=Math.floor(Math.random()*REVIEWS.length),opts=[i];while(opts.length<4){var j=Math.floor(Math.random()*REVIEWS.length);if(opts.indexOf(j)<0)opts.push(j)}
  opts.sort(function(){return Math.random()-.5});gq={i:i,o:opts};gAns=null}
function showGuess(){var h=document.getElementById("p-gs-box");if(!h)return;if(!gq)newGuess();
  h.innerHTML='<div class="out"><p>'+esc(T(REVIEWS[gq.i].s))+'</p></div><div class="opts">'+gq.o.map(function(j){var c=gAns!==null?(j===gq.i?" ok":(j===gAns?" no":"")):"";return '<button type="button" data-j="'+j+'" class="'+c.trim()+'"'+(gAns!==null?' disabled':'')+'>'+esc(T(F[REVIEWS[j].id].n))+'</button>'}).join("")+'</div><div class="sc">'+esc(T(UI.p_gs_s))+': '+gOk+' / '+gTot+'</div>'+(gAns!==null?'<button type="button" class="btn o" id="p-gs-next">'+esc(T(UI.p_gs_n))+'</button>':'')}
function renderPlay(){
  var host=document.getElementById("play");if(!host)return;
  var decs={};Object.keys(F).forEach(function(id){decs[Math.floor(F[id].y/10)*10]=1});
  var dl=Object.keys(decs).map(Number).sort(function(x,y){return x-y});
  host.innerHTML=
   '<div class="pbox"><h3>'+ic("pent")+esc(T(UI.p_spin_h))+'</h3><p class="cap">'+esc(T(UI.p_spin_c))+'</p><div class="two"><select id="p-g" aria-label="genre"><option value="all">'+esc(T(UI.p_any_g))+'</option>'+GENRES.map(function(g){return '<option value="'+g[0]+'"'+(PG===g[0]?' selected':'')+'>'+esc(T(g[1]))+'</option>'}).join("")+'</select><select id="p-d" aria-label="decade"><option value="all">'+esc(T(UI.p_any_d))+'</option>'+dl.map(function(y){return '<option value="'+y+'"'+(String(PD)===String(y)?' selected':'')+'>'+T(UI.decade)(y)+'</option>'}).join("")+'</select></div><div class="two"><button type="button" class="btn" id="p-go">'+ic("pent")+esc(T(UI.p_spin))+'</button><button type="button" class="btn o" id="p-dbl">'+ic("tape")+esc(T(UI.p_dbl))+'</button></div><div class="out" id="p-spin-out" aria-live="polite"></div></div>'+
   '<div class="pbox"><h3>'+ic("clap")+esc(T(UI.p_pitch_h))+'</h3><p class="cap">'+esc(T(UI.p_pitch_c))+'</p><button type="button" class="btn" id="p-pitch">'+ic("saw")+esc(T(UI.p_pitch_b))+'</button><div class="out" id="p-pitch-out" aria-live="polite"></div></div>'+
   '<div class="pbox"><h3>'+ic("ghost")+esc(T(UI.p_or_h))+'</h3><p class="cap">'+esc(T(UI.p_or_c))+'</p><input type="text" id="p-or-q" placeholder="'+esc(T(UI.p_or_ph))+'" aria-label="question"><button type="button" class="btn" id="p-or">'+ic("eye")+esc(T(UI.p_or_b))+'</button><div class="out" id="p-or-out" aria-live="polite"></div></div>'+
   '<div class="pbox"><h3>'+ic("gore")+esc(T(UI.p_gl_h))+'</h3><p class="cap">'+esc(T(UI.p_gl_c))+'</p><input type="range" id="p-gl" min="1" max="5" step="1" value="'+goreV+'" aria-label="gore"><div class="sc" id="p-gl-v"></div><button type="button" class="btn" id="p-gl-b">'+ic("syringe")+esc(T(UI.p_gl_b))+'</button><div class="out" id="p-gl-out" aria-live="polite"></div></div>'+
   '<div class="pbox"><h3>'+ic("star")+esc(T(UI.p_gs_h))+'</h3><p class="cap">'+esc(T(UI.p_gs_c))+'</p><div id="p-gs-box"></div></div>';
  showSpin();showPitch();showOracle();showGore();showGuess();
  renderPlay2();
}
var galF="all",galIdx=[];
function renderGal(){
  var cats=["all","poster","logo","banner","art"];
  document.getElementById("gal-f").innerHTML=cats.map(function(c){return '<button type="button" data-c="'+c+'" aria-pressed="'+(galF===c)+'">'+esc(T(UI["g_"+c]))+'</button>'}).join("");
  galIdx=GALLERY.filter(function(g){return galF==="all"||g[1]===galF});
  document.getElementById("gal").innerHTML=galIdx.map(function(g,i){var cap=esc(T(g[2]));return '<button type="button" data-i="'+i+'" aria-label="'+cap+'"><img data-img="'+g[0]+'" alt="'+cap+'" loading="lazy"><figcaption>'+cap+'</figcaption></button>'}).join("");
  setImgs();
}
function renderStatic(){
  try{renderSpot()}catch(e){}
  document.querySelectorAll("[data-t]").forEach(function(el){var v=UI[el.dataset.t];if(v&&typeof v.ru==="string")el.textContent=T(v)});
  document.getElementById("src").innerHTML=T(UI.src);
  document.getElementById("q").placeholder=T(UI.ph);
  document.getElementById("ticker").innerHTML=GENRES.map(function(g){return '<span>'+ic(g[0])+esc(T(g[1]))+'</span>'}).join("");
  document.getElementById("trio").innerHTML=[a("Больше ужаса","More horror"),a("Больше атмосферы","More atmosphere"),a("Больше кошмаров","More nightmares")].map(function(x){return '<span>'+esc(T(x))+'</span>'}).join("<span>·</span>");
  document.getElementById("art-kicker").innerHTML=ic("jhorror")+esc(T(UI.art_k));
  document.getElementById("offer").innerHTML=OFFER.map(function(o){return '<div>'+ic(o[0])+'<h4>'+esc(T(o[1]))+'</h4><p>'+esc(T(o[2]))+'</p></div>'}).join("");
  document.getElementById("watch-h").innerHTML=ic("jhorror")+esc(T(UI.watch_h));
  document.getElementById("watch-w").innerHTML=ic("warn")+'<span>'+esc(T(UI.watch_w))+'</span>';
  document.getElementById("watch-list").innerHTML=WATCH.map(function(w){return '<li><b>'+esc(T(w[0]))+'</b><span class="s">'+esc(T(w[1]))+'</span></li>'}).join("");
  document.getElementById("lead-r").innerHTML=rate(5);
  document.getElementById("lead-g").innerHTML=gore(4);

  document.getElementById("rel").innerHTML=RELEASES.map(function(r){
    return '<li><span class="dt">'+r.d+'</span><div><h3>'+esc(r.t)+'</h3><p>'+esc(T(r.p))+'</p><div class="tags" style="margin:0"><span class="tag meta">'+esc(T(r.dir))+'</span>'+gtags(r.gn)+'</div></div><span class="st'+(r.soon?' soon':'')+'">'+esc(T(r.st))+'</span></li>';
  }).join("");

  document.getElementById("briefs").innerHTML=NEWS.map(function(n){
    return '<article class="brief rv"><time>'+n.d+'</time><h3>'+esc(T(n.t))+'</h3><p>'+esc(T(n.p))+'</p>'+(n.gn?'<div class="tags">'+gtags(n.gn)+'</div>':'')+'</article>';
  }).join("");

  document.getElementById("genres-host").innerHTML=GENRES.map(function(g){
    var n=REVIEWS.filter(function(r){return r.gn.indexOf(g[0])>-1}).length;
    return '<button type="button" class="genre" data-g="'+g[0]+'" aria-pressed="'+(g[0]===cur)+'">'+ic(g[0])+'<h3>'+esc(T(g[1]))+'</h3><p>'+esc(T(g[2]))+'</p><span>'+n+" "+plural(n,PL[LANG])+'</span></button>';
  }).join("");

  document.getElementById("lists-host").innerHTML=LISTS.map(function(l){
    var tag=l.k==="o"?"ol":"ul";
    return '<div class="list '+l.k+'"><div class="lh">'+ic(l.ic)+'<div><h3>'+esc(T(l.t))+'</h3><span class="cnt">'+l.ids.length+' '+filmWord(l.ids.length)+'</span></div></div><p class="sub">'+esc(T(l.s))+'</p><'+tag+'>'+
      l.ids.map(function(id,i){var right=(l.tags&&l.tags[id])?T(l.tags[id]):F[id].y;return '<li><span class="n">'+(l.k==="o"?(i+1):ic("x"))+'</span><b>'+esc(T(nm(id)))+'</b><span class="d">'+esc(right)+'</span></li>'}).join("")+
      '</'+tag+'>'+(l.warn?'<div class="warn">'+ic("warn")+'<span>'+esc(T(l.warn))+'</span></div>':'')+'</div>';
  }).join("");

  document.getElementById("start-host").innerHTML=START.map(function(l){
    return '<div class="list o rv"><div class="lh">'+ic(l.ic)+'<div><h3>'+esc(T(l.t))+'</h3><span class="cnt">'+l.ids.length+' '+filmWord(l.ids.length)+'</span></div></div><p class="sub">'+esc(T(l.s))+'</p><div class="lvl">'+esc(T(UI.lvl))+' <span class="gore">'+gore(l.lv)+'</span></div><ol>'+
      l.ids.map(function(id,i){return '<li><span class="n">'+(i+1)+'</span><b>'+esc(T(nm(id)))+'</b><span class="d">'+F[id].y+'</span></li>'}).join("")+'</ol></div>';
  }).join("");
  if(!document.getElementById("rnd-out").dataset.on)document.getElementById("rnd-out").innerHTML='<em>'+esc(T(UI.rnd_none))+'</em>';
  document.getElementById("lib").innerHTML=LIB.map(function(x){return '<article class="rv"><div class="k">'+ic(x.ic)+esc(T(x.k))+'</div><h3>'+esc(T(x.t))+'</h3><p class="dk">'+esc(T(x.dk))+'</p><details><summary>'+esc(T(UI.lib_read))+'</summary>'+T(x.b).map(function(t){return '<p>'+esc(t)+'</p>'}).join("")+'</details></article>'}).join("");
  document.getElementById("dirs-host").innerHTML=DIRS.map(function(x){return '<div class="sub rv">'+ic("clap")+'<h3>'+esc(x.n)+'</h3><p>'+esc(T(x.s))+'</p><div class="chips">'+x.f.map(function(id){return '<span class="chip">'+esc(T(F[id].n))+'<i>'+F[id].y+'</i></span>'}).join("")+'</div></div>'}).join("");
  document.getElementById("shelves-host").innerHTML=SHELVES.map(function(s){
    return '<div class="shelf">'+ic(s.ic,"big")+'<h3>'+esc(T(s.t))+'</h3><p>'+esc(T(s.p))+'</p><ul>'+s.f.map(function(id){return '<li>'+ic("x")+'<span>'+esc(T(nm(id)))+' <span style="color:var(--dim)">'+F[id].y+'</span></span></li>'}).join("")+'</ul></div>';
  }).join("");

  renderGal();

  var fh=document.getElementById("filters");
  var FILTERS=[["home","eye"],["all","chart"],["trailer","tape"],["spot","jhorror"],["wiki","book"],["about","eye"],["articles","book"],["library","book"],["play","pent"],["calendar","cal"],["quiz","ghost"],["releases","clap"],["news","news"],["start","saw"],["subs","web"],["genres","pent"],["reviews","gore"],["dirs","clap"],["catalog","reel"],["themes","list"],["manga","book"],["mylist","star"],["stats","chart"],["lists","list"],["shelves","tape"],["art","frame"],["badges","star"]];
  FILTERS[1][1]="chart";
  fh.innerHTML=FILTERS.map(function(f){return '<button type="button" data-f="'+f[0]+'" aria-pressed="'+(f[0]===secFilter)+'">'+ic(f[1])+esc(T(UI["sec_"+f[0]]))+'</button>'}).join("");

  if(rndId)showRnd();
  renderTonight();renderFresh();renderSubs();renderCal();renderQuiz();renderDuel();renderSnd();renderPlay();
  (function(){var u="https://horroraesthetic.github.io/horror-aesthetic/";document.getElementById("sh-vk").href="https://vk.com/share.php?url="+encodeURIComponent(u);document.getElementById("sh-copy-t").textContent=T(UI.sh_copy)})();
  renderMarquee();renderKpis();renderBars();renderScatter();renderDecades();document.querySelectorAll("img[data-img-en]").forEach(function(im){im.dataset.img=LANG==="ru"?im.dataset.imgRu:im.dataset.imgEn});setImgs();
  var cb=document.querySelector("#lb-x span");if(cb)cb.textContent=T(UI.close);
}

var SITE="https://horroraesthetic.github.io/horror-aesthetic/";
function shareRow(title){
  var t=encodeURIComponent(title+" — Horror Aesthetic"),u=encodeURIComponent(SITE);
  return '<div class="share">'+ic("share")+'<a href="https://vk.com/share.php?url='+u+'&title='+t+'" target="_blank" rel="noopener noreferrer">VK</a><button type="button" data-copy="'+esc(title)+'">'+esc(T(a("Копировать","Copy")))+'</button></div>';
}
document.addEventListener("click",function(e){var b=e.target.closest("button[data-copy]");if(!b)return;var txt=b.dataset.copy+" — Horror Aesthetic "+SITE;
  function ok(){var o=b.textContent;b.textContent="OK";setTimeout(function(){b.textContent=o},1200)}
  try{navigator.clipboard.writeText(txt).then(ok,function(){})}catch(err){}
});

var FRC=[
 {k:"ring",c:"#7fd0c0",jp:"リング",n:a("Звонок","Ringu"),p:a("Проклятая кассета, колодец, семь дней. Мокрые волосы и телевизор, из которого выходят.","The cursed tape, the well, seven days. Wet hair and a television that something climbs out of."),ids:["ringu","ringu2","ringu0","rasen","sadako3d","sadakokayako","thering","thering02","ringtwo","sadakodx","sadako2019"]},
 {k:"juon",c:"#c9bf7a",jp:"呪怨",n:a("Ju-On: Проклятие","Ju-On: The Grudge"),p:a("Дом, который не отпускает. Кайако, Тосио и хриплый звук в горле, после которого уже поздно.","The house that never lets go. Kayako, Toshio and the rattle in the throat that means it is too late."),ids:["juon","juoncurse","juon2","grudge","grudge2","juonorigins","sadakokayako","juonwhite","juonblack"]},
 {k:"ito",c:"#9d8cff",jp:"伊藤潤二",n:a("Дзюндзи Ито","Junji Ito"),p:a("Спирали, рыбы на ногах, тела, которые не принадлежат себе. Ужас как навязчивая идея.","Spirals, fish on legs, bodies that no longer belong to themselves. Horror as obsession."),ids:["uzumaki","uzumakianime","gyo","itocollection","itomaniac","tomie","tomie2","tomierebirth","tomiebeginning","tomierevenge","tomieunlimited"]},
 {k:"tomie",c:"#e0313a",jp:"富江",n:a("Томие","Tomie"),p:a("Красавица, которую невозможно убить. Каждый кусочек вырастает в новую Томиэ.","The beauty who cannot be killed. Every piece grows into another Tomie."),ids:["tomie","tomie2","tomierebirth","tomiebeginning","tomierevenge","tomieunlimited","tomieforbidden"]}
];
FRC.push(
 {k:"slash",c:"#f2b04c",jp:"SLASHER",n:a("Слэшеры","Slashers"),p:a("Маска, нож и «последняя девушка»: от «Психо» и «Хэллоуина» до «Крика» и Terrifier.","A mask, a knife and the final girl: from Psycho and Halloween to Scream and Terrifier."),ids:["psycho","blackxmas","tcm","halloween","fri13","maniac","mbv","burning","slumber","promnight","nightmare","scream","chucky","hatchet","terrifier","terrifier2"]},
 {k:"giallo",c:"#ff7a3d",jp:"GIALLO",n:a("Джалло","Giallo"),p:a("Чёрные перчатки, цветной свет и убийца, которого не видно: Бава, Ардженто, Фульчи.","Black gloves, coloured light and a killer you cannot see: Bava, Argento, Fulci."),ids:["girlknew","bloodlace","birdcrystal","fourflies","bayblood","deepred","suspiria","inferno","tenebrae","opera","strangecolor","amer","suspiria18"]},
 {k:"flesh",c:"#f08fa0",jp:"BODY HORROR",n:a("Боди-хоррор","Body horror"),p:a("Тело как источник ужаса: болезнь, мутация и слияние с машиной. Кроненберг, «Тэцуо», «Субстанция».","The body as a source of terror: disease, mutation and merging with the machine. Cronenberg, Tetsuo, The Substance."),ids:["shivers","rabid","brood","scanners","videodrome","thing","fly","deadringers","tetsuo","society","possession","existenz","crash","raw","titane","crimesfuture","substance"]},
 {k:"splat",c:"#b7f03c",jp:"SPLATTER",n:a("Сплаттер и трэш","Splatter and trash"),p:a("Кровь как карнавал: «Зловещие мертвецы», «Живая мертвечина», японский гор и фильмы, которые любят за нелепость.","Blood as carnival: Evil Dead, Braindead, Japanese gore and films loved for their absurdity."),ids:["guinea1","guinea2","evildead","evil2","badtaste","braindead","reanimator","hellraiser","tgp","machinegirl","meatball","ichi","gozu","basketcase","frankenhooker"]}
);
(function(){var o=[],j=FRC.slice(0,4),n=FRC.slice(4);for(var i=0;i<4;i++){o.push(j[i]);o.push(n[i])}FRC.length=0;o.forEach(function(x){FRC.push(x)})})();
var frc=null;
function spArt(k){
 if(k==="slash")return '<svg class="art" viewBox="0 0 200 110"><path d="M40 78L150 30l8 6-96 52z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M150 30l24-9-6 20z" fill="currentColor" opacity=".35"/><path d="M60 92c0 8-6 12-6 12s-6-4-6-12 6-14 6-14 6 6 6 14z" fill="currentColor"/><path d="M30 20l60 70M20 40l50 56" stroke="currentColor" stroke-width="2" opacity=".5"/></svg>';
 if(k==="giallo")return '<svg class="art" viewBox="0 0 200 110"><path d="M20 55C60 15 140 15 180 55 140 95 60 95 20 55z" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="100" cy="55" r="22" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="100" cy="55" r="8" fill="currentColor"/><path d="M0 10L60 40M200 100L140 70" stroke="currentColor" stroke-width="2" opacity=".55"/></svg>';
 if(k==="flesh")return '<svg class="art" viewBox="0 0 200 110"><path d="M100 95C60 75 40 50 60 28c16-14 34-4 40 10 6-14 24-24 40-10 20 22 0 47-40 67z" fill="none" stroke="currentColor" stroke-width="3"/><path d="M100 38v30M82 50l18 12 18-12M70 36c-14 4-22 14-26 30M130 36c14 4 22 14 26 30" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
 if(k==="splat")return '<svg class="art" viewBox="0 0 200 110"><path d="M100 18c10 14 22 8 28 22 6 12 22 8 22 24s-14 14-20 24c-8 14-24 8-32 12-10-8-26-2-34-14-6-10-24-8-24-22s16-18 18-30c4-14 22-10 42-16z" fill="currentColor" opacity=".85"/><circle cx="26" cy="30" r="5" fill="currentColor"/><circle cx="172" cy="24" r="4" fill="currentColor"/><circle cx="178" cy="90" r="6" fill="currentColor"/><circle cx="16" cy="84" r="4" fill="currentColor"/></svg>';
 if(k==="ring")return '<svg class="art" viewBox="0 0 200 110"><rect x="55" y="10" width="90" height="70" rx="8" fill="none" stroke="currentColor" stroke-width="3"/><rect x="65" y="20" width="70" height="50" fill="currentColor" opacity=".15"/><circle cx="100" cy="95" r="12" fill="none" stroke="currentColor" stroke-width="3"/><path d="M100 28c-8 6-10 18-6 30M100 28c8 6 10 18 6 30M92 40c4 4 12 4 16 0" fill="none" stroke="currentColor" stroke-width="2"/><text x="148" y="100" fill="currentColor" font-size="20" font-family="serif">7</text></svg>';
 if(k==="juon")return '<svg class="art" viewBox="0 0 200 110"><path d="M20 100h160M30 100V80h30V60h30V40h30V20h30" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="148" cy="52" rx="14" ry="18" fill="currentColor" opacity=".2"/><circle cx="148" cy="52" r="4" fill="currentColor"/><path d="M134 34c-10 20-8 40-4 60M162 34c8 20 6 40 2 60" stroke="currentColor" stroke-width="2" fill="none"/></svg>';
 if(k==="ito"){var d="M100 55",i,x,y,r;for(i=1;i<=120;i++){r=i*0.42;x=100+r*Math.cos(i*.28);y=55+r*Math.sin(i*.28)*.9;d+="L"+x.toFixed(1)+" "+y.toFixed(1)}return '<svg class="art" viewBox="0 0 200 110"><path d="'+d+'" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>'}
 return '<svg class="art" viewBox="0 0 200 110"><ellipse cx="100" cy="58" rx="30" ry="40" fill="none" stroke="currentColor" stroke-width="3"/><path d="M70 50c-14 10-12 40-6 56M130 50c14 10 12 40 6 56M78 18c10-12 34-12 44 0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="88" cy="55" r="3" fill="currentColor"/><circle cx="112" cy="55" r="3" fill="currentColor"/><circle cx="123" cy="77" r="2.5" fill="currentColor"/><path d="M92 80q8 5 16 0" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
}
function renderSpot(){
 var h=document.getElementById("spot-host");if(!h)return;
 h.innerHTML=FRC.map(function(f){var nr=REVIEWS.filter(function(r){return f.ids.indexOf(r.id)>-1}).length,nf=f.ids.filter(function(i){return F[i]}).length;return '<div class="sp '+f.k+(frc===f.k?' on':'')+'" data-k="'+f.k+'" data-jp="'+(/^[A-Z ]+$/.test(f.jp)?"":f.jp)+'" style="--c:'+f.c+'"><div class="jp'+(/^[A-Z ]+$/.test(f.jp)?" lat":"")+'">'+f.jp+'</div><h3>'+esc(T(f.n))+'</h3><div class="cnt">'+nf+' '+esc(T(a("фильмов","films")))+' · '+nr+' '+esc(plural(nr,PL[LANG]))+'</div>'+spArt(f.k)+'<p>'+esc(T(f.p))+'</p><div class="bt"><button type="button" data-a="f" aria-pressed="'+(frc===f.k)+'">'+esc(T(frc===f.k?UI.sp_off:UI.sp_f))+'</button>'+(f.k==="ring"?'<button type="button" data-a="tape">▶ VHS</button>':'')+(f.k==="juon"?'<button type="button" data-a="rat">☠</button>':'')+'</div></div>'}).join("");
}
document.getElementById("spot-host").addEventListener("click",function(e){
 var t=e.target.closest(".sp");if(!t)return;var k=t.dataset.k,b=e.target.closest("button"),act=b?b.dataset.a:null;
 if(act==="f"){frc=(frc===k)?null:k;cur=null;renderSpot();renderCards();if(frc){var c=document.getElementById("cards");if(c&&c.scrollIntoView)c.scrollIntoView({behavior:"smooth",block:"start"})}return}
 if(act==="tape"){var tp=document.getElementById("tpb");if(tp)tp.click();return}
 if(act==="rat"||k==="juon"){try{window.deathRattle&&window.deathRattle()}catch(x){}return}
 if(k==="ito"){var sp=document.getElementById("spin");if(!sp){sp=document.createElement("div");sp.id="spin";sp.innerHTML=spArt("ito").replace('class="art"','style="width:140vmax;height:140vmax;color:#9d8cff"');document.body.appendChild(sp)}ach("spiral");sp.classList.add("on");setTimeout(function(){sp.classList.remove("on")},7000);return}
 if(k==="slash"||k==="giallo"||k==="flesh"||k==="splat"){t.classList.remove("fx");void t.offsetWidth;t.classList.add("fx");setTimeout(function(){t.classList.remove("fx")},1400);if(k==="splat"){for(var q=0;q<9;q++){var d=document.createElement("span");d.className="mf bl";d.style.left=(8+Math.random()*80)+"%";d.style.top=(20+Math.random()*60)+"%";d.style.animationDelay=(q*.05)+"s";t.appendChild(d);setTimeout(function(n){return function(){n.remove()}}(d),1800)}}return}
 if(k==="tomie"){for(var i=0;i<14;i++){var m=document.createElement("span");m.className="mf";m.style.left=(Math.random()*85)+"%";m.style.top=(Math.random()*80+10)+"%";m.style.animationDelay=(i*.07)+"s";m.innerHTML='<svg viewBox="0 0 200 110" width="34" height="34" style="color:#e0313a">'+spArt("tomie").replace(/^<svg[^>]*>/,"").replace("</svg>","")+'</svg>';t.appendChild(m);setTimeout(function(n){return function(){n.remove()}}(m),2200)}}
});
function renderCards(appendFrom){
  var q=query.trim().toLowerCase();
  var list=REVIEWS.filter(function(r){
    var f=F[r.id];
    var okG=!cur||r.gn.indexOf(cur)>-1;
    var okF=!frc||FRC.filter(function(z){return z.k===frc})[0].ids.indexOf(r.id)>-1;
    var okQ=!q||(f.n.ru+" "+f.n.en+" "+T(r.d)+" "+f.y).toLowerCase().indexOf(q)>-1;
    return okG&&okQ&&okF;
  });
  var cards=document.getElementById("cards");
  var html=list.length?list.slice(appendFrom||0,REVIEW_LIMIT).map(function(r,ix){
    var f=F[r.id];
    return '<article class="card"><div class="slab'+(PSTR[r.id]?' has-pst':'')+(PIMG[r.id]?' has-img':'')+'" style="--h:'+r.h+'" data-year="'+f.y+'">'+(PSTR[r.id]||'<svg class="pa" viewBox="0 0 200 200" aria-hidden="true">'+ART[r.gn[0]]+'</svg>')+shd(r.id,ix+(appendFrom||0))+'<h3>'+esc(T(f.n))+'</h3><div class="meta"><span>'+esc(T(r.d))+'</span></div></div>'+
    '<div class="in">'+mnPlate(r.r)+'<div class="scores"><span><label>'+esc(T(UI.f_rate))+'</label><span class="rate">'+rate(r.r)+'</span></span><span><label>'+esc(T(UI.f_gore))+'</label><span class="gore">'+gore(r.g)+'</span></span></div>'+
    (r.warn?'<div class="warnline">'+ic("warn")+'<span>'+esc(T(r.warn))+'</span></div>':'')+
    '<p>'+esc(T(r.s))+'</p><details><summary>'+esc(r.film?(LANG==="ru"?"Фрагмент":"Excerpt"):T(UI.read))+'</summary><div class="full">'+T(r.f).map(function(p){return '<p>'+esc(p)+'</p>'}).join("")+'</div></details>'+
    (r.film?'<a class="perma" href="reviews/'+esc(r.id)+'.html">'+(LANG==="ru"?"Читать полную рецензию":"Read the full review")+'</a>':'')+
    '<div class="tags">'+gtags(r.gn)+'</div>'+shareRow(T(f.n))+'</div></article>';
  }).join(""):'<p class="empty">'+esc(T(UI.empty))+'</p>';
  if(appendFrom)cards.insertAdjacentHTML("beforeend",html);else cards.innerHTML=html;
  var more=document.getElementById("review-more");
  more.hidden=list.length<=REVIEW_LIMIT;
  more.textContent=LANG==="ru"?"Показать ещё рецензии":"Show more reviews";
  document.getElementById("rev-count").textContent=(frc?T(FRC.filter(function(z){return z.k===frc})[0].n)+" · ":"")+(cur?T(GN[cur])+" · ":"")+list.length+" "+plural(list.length,PL[LANG]);
  var cl=document.getElementById("clear");
  cl.hidden=!(cur||frc);cl.innerHTML=ic("x")+esc(T(UI.clear));
  document.querySelectorAll(".genre").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.g===cur))});
}

function applySections(){
  var catalog=document.getElementById("catalog"),reviews=document.getElementById("reviews");
  var catWasHidden=catalog.hidden,reviewsWereHidden=reviews.hidden;
  document.querySelectorAll("section[data-cat]").forEach(function(s){s.hidden=!(secFilter==="all"||secFilter===s.dataset.cat||(secFilter==="home"&&s.dataset.home==="1"))});
  if(!catalog.hidden&&(catWasHidden||!document.getElementById("catg").childElementCount))renderCat();
  if(!reviews.hidden&&(reviewsWereHidden||!document.getElementById("cards").childElementCount))renderCards();
  if(window.loadHomeThemes&&["catalog","themes","all"].includes(secFilter))window.loadHomeThemes();
}

window.HA_HOME_REVIEW_STATE={
  capture:function(){
    return {section:secFilter,genre:cur,franchise:frc,query:query,reviewLimit:REVIEW_LIMIT,
      reviewsVisible:!document.getElementById("reviews").hidden,
      catalogueQuery:catQ,decade:catDec,status:catSt,catalogueLimit:CAT_LIMIT};
  },
  restore:function(state){
    var current=this.capture();
    if(Object.keys(current).every(function(key){return current[key]===state[key]}))return;
    secFilter=state.section;
    cur=state.genre;
    frc=state.franchise;
    query=state.query;
    REVIEW_LIMIT=state.reviewLimit;
    catQ=state.catalogueQuery;
    catDec=state.decade;
    catSt=state.status;
    CAT_LIMIT=state.catalogueLimit;
    document.getElementById("q").value=query;
    document.getElementById("cq").value=catQ;
    document.querySelectorAll("#filters button").forEach(function(button){
      button.setAttribute("aria-pressed",String(button.dataset.f===secFilter));
    });
    applySections();
    renderSpot();
    document.getElementById("reviews").hidden=!state.reviewsVisible;
    if(state.reviewsVisible)renderCards();
    if(!document.getElementById("catalog").hidden)renderCat();
  }
};

function setLang(l){
  LANG=l;
  /* only write when changed: writing html[lang] invalidates :lang() styles for the whole page */
  if(document.documentElement.lang!==l)document.documentElement.lang=l;
  if(document.body.dataset.lang!==l)document.body.dataset.lang=l;
  document.querySelectorAll("[data-en-label][data-ru-label]").forEach(function(el){el.setAttribute("aria-label",l==="ru"?el.dataset.ruLabel:el.dataset.enLabel)});
  var searchLabel=l==="ru"?"Поиск":"Search";
  ["q","cq","bigs","sbtn"].forEach(function(id){var el=document.getElementById(id);if(el)el.setAttribute("aria-label",searchLabel)});
  document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.l===l))});
  try{localStorage.setItem("ha-lang",l)}catch(e){}
  renderStatic();applySections();
  if(!document.getElementById("catalog").hidden)renderCat();
  if(!document.getElementById("reviews").hidden)renderCards();
  try{window.renderSearchBtn&&window.renderSearchBtn()}catch(e){}
}

function filterGenre(g,scroll){
  cur=(cur===g&&!scroll)?null:g;
  REVIEW_LIMIT=REVIEW_BATCH;
  renderCards();
  if(cur){var t=document.getElementById("reviews");t.hidden=false;var top=t.getBoundingClientRect().top+window.scrollY-70;window.scrollTo({top:top,behavior:"smooth"})}
}

document.getElementById("filters").addEventListener("click",function(e){
  var b=e.target.closest("button");if(!b)return;
  secFilter=b.dataset.f;
  document.querySelectorAll("#filters button").forEach(function(x){x.setAttribute("aria-pressed",String(x.dataset.f===secFilter))});
  applySections();window.scrollTo({top:0});
  try{history.replaceState(null,"","#"+secFilter)}catch(e){}
});
document.querySelector(".lang").addEventListener("click",function(e){var b=e.target.closest("button");if(b)setLang(b.dataset.l)});
document.getElementById("ha-watch-cta").addEventListener("click",function(e){
  if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  var first=document.getElementById("first-watch");
  if(first.hidden){var start=document.querySelector('#filters [data-f="start"]');if(start)start.click()}
  first.focus({preventScroll:true});
});
document.getElementById("genres-host").addEventListener("click",function(e){var b=e.target.closest(".genre");if(b)filterGenre(b.dataset.g,false)});
document.getElementById("bars").addEventListener("click",function(e){var b=e.target.closest(".bar");if(b){cur=null;filterGenre(b.dataset.g,true)}});
document.getElementById("clear").addEventListener("click",function(){cur=null;frc=null;renderSpot();renderCards()});
/* The site-wide search dialog is shared with Quick Jump. */
(function(){
 var search=document.createElement("button");
 search.type="button";search.className="snd";search.id="sbtn";
 var sound=document.getElementById("snd");
 sound.parentNode.insertBefore(search,sound);
 window.renderSearchBtn=function(){
  var ru=LANG==="ru";
  search.textContent="⌕ "+(ru?"Поиск":"Search");
  search.setAttribute("aria-label",ru?"Поиск":"Search");
  document.getElementById("bigs-t").textContent=ru?"Найти фильм, режиссёра, подборку, новинку…":"Search films, directors, lists, new releases…";
 };
 window.renderSearchBtn();
 document.addEventListener("ha-search-open",()=>ach("search"));
 window.HA_HOME_SEARCH=function(){
  function row(section,en,ru,tags){return ["/horror-aesthetic/#"+section,en,ru,"section",tags]}
  return [
   ...RELEASES.map(r=>row("releases",r.t,r.t,r.dir.en+" "+r.dir.ru+" "+r.p.en+" "+r.p.ru)),
   ...NEWS.map(n=>row("news",n.t.en,n.t.ru,n.p.en+" "+n.p.ru)),
   ...LISTS.map(l=>row("lists",l.t.en,l.t.ru,l.s.en+" "+l.s.ru)),
   ...SHELVES.map(l=>row("shelves",l.t.en,l.t.ru,l.p.en+" "+l.p.ru)),
   ...SUBS.map(l=>row("subs",l.t.en,l.t.ru,l.p.en+" "+l.p.ru)),
   ...DIRS.map(d=>row("dirs",d.n,d.n,d.s.en+" "+d.s.ru)),
   ...GENRES.map(g=>row("genres",g[1].en,g[1].ru,g[2].en+" "+g[2].ru)),
   ...FRC.map(f=>row("spot",f.n.en,f.n.ru,f.p.en+" "+f.p.ru+" "+f.jp)),
   ...(window.HA?.MANGA||[]).map(m=>row("manga",m[1],m[1],m.slice(2,5).join(" ")))
  ];
 };
})();
document.getElementById("q").addEventListener("input",function(e){query=e.target.value;REVIEW_LIMIT=REVIEW_BATCH;renderCards()});
document.getElementById("review-more").addEventListener("click",function(){
  var previous=REVIEW_LIMIT;REVIEW_LIMIT+=REVIEW_BATCH;renderCards(previous);
  document.querySelectorAll("#cards .card")[previous]?.querySelector("summary")?.focus();
});
document.getElementById("tn-b").addEventListener("click",function(){tnI=Math.floor(Math.random()*Object.keys(F).length);renderTonight()});
document.getElementById("fc-b").addEventListener("click",function(){factI++;renderTonight()});
document.getElementById("cq").addEventListener("input",function(e){
 if(catFilmID){
  catFilmID=null;
  var url=new URL(location.href);url.searchParams.delete("film");history.replaceState(null,"",url);
 }
 catQ=e.target.value;CAT_LIMIT=CAT_BATCH;renderCat();
});
document.getElementById("cat-dec").addEventListener("click",function(e){var b=e.target.closest("button");if(b){catDec=b.dataset.d;CAT_LIMIT=CAT_BATCH;renderCat()}});
document.getElementById("catg").addEventListener("click",function(e){var b=e.target.closest("button[data-id]");if(!b)return;var id=b.dataset.id,c=MY[id];if(!c)MY[id]="want";else if(c==="want")MY[id]="seen";else delete MY[id];saveMy();renderCat()});
document.getElementById("cat-st").addEventListener("click",function(e){var b=e.target.closest("button");if(b){catSt=b.dataset.s;CAT_LIMIT=CAT_BATCH;renderCat()}});
document.getElementById("cat-more").addEventListener("click",function(){
  var previous=CAT_LIMIT;CAT_LIMIT+=CAT_BATCH;renderCat();
  document.querySelectorAll("#catg button")[previous]?.focus();
});
document.getElementById("quiz-host").addEventListener("click",function(e){
  var h=document.getElementById("quiz-host");
  if(e.target.closest("#quiz-go")){h.dataset.started="1";quizI=0;quizS={};quizDone=false;renderQuiz();return}
  if(e.target.closest("#quiz-again")){delete h.dataset.started;quizI=0;quizS={};quizDone=false;renderQuiz();return}
  var b=e.target.closest(".opts button");if(!b)return;
  var w=QUIZ[quizI].o[+b.dataset.i][1];Object.keys(w).forEach(function(k){quizS[k]=(quizS[k]||0)+w[k]});
  quizI++;if(quizI>=QUIZ.length){quizDone=true;ach("quiz")}renderQuiz();
});
document.getElementById("dA").addEventListener("change",renderDuel);document.getElementById("dB").addEventListener("change",renderDuel);
document.getElementById("snd").addEventListener("click",toggleSound);
(function(){
 var TONES=["kaidan","ringu","blue","green","juon","tomie","blood","psy","clean","techno"],tn="kaidan",nb=document.getElementById("tnb");
 try{var sv=localStorage.getItem("ha-tone");if(TONES.indexOf(sv)>-1)tn=sv}catch(e){}
 function apply(){document.documentElement.dataset.tone=tn;nb.textContent=T(UI["tn_"+tn]);var m=document.querySelector('meta[name="theme-color"]');if(m)m.content=getComputedStyle(document.documentElement).getPropertyValue("--bg").trim()||"#0b1213"}
 window.renderTone=apply;
 nb.addEventListener("click",function(){tn=TONES[(TONES.indexOf(tn)+1)%TONES.length];try{localStorage.setItem("ha-tone",tn)}catch(e){}apply()});
 apply();
})();
(function(){
 var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 var hero=document.querySelector(".hero"),cv=document.getElementById("stat"),cx=cv.getContext("2d");
 function noise(c,w,h,a){var im=c.createImageData(w,h),d=im.data;for(var i=0;i<d.length;i+=4){var v=Math.random()*255*a|0;d[i]=d[i+1]=d[i+2]=v;d[i+3]=255}c.putImageData(im,0,0)}
 function burst(){
  if(RM||document.hidden){setTimeout(burst,9000);return}
  var n=0;hero.classList.add("burst");cv.style.opacity=".55";
  var iv=setInterval(function(){noise(cx,200,75,1);cv.style.transform="translateY("+(Math.random()*8-4)+"px)";n++;if(n>6){clearInterval(iv);cv.style.opacity="0";hero.classList.remove("burst")}},55);
  setTimeout(burst,7000+Math.random()*9000);
 }
 setTimeout(burst,4000);
 /* the tape */
 var tp=document.getElementById("tape"),tcv=document.getElementById("tcv"),tx=tcv.getContext("2d"),tpb=document.getElementById("tpb"),tg=document.getElementById("tp-go"),tt=document.getElementById("tp-t");
 var tctx=null,run=false,raf=0,t0=0,pics={},done=false;
 function lab(){tpb.textContent=T(UI.tp_btn);if(!run){tt.textContent=T(UI.tp_warn);tg.textContent=T(UI.tp_go)}}
 window.renderTape=lab;
 function ac(){if(!tctx){tctx=new (window.AudioContext||window.webkitAudioContext)()}if(tctx.state==="suspended")tctx.resume();return tctx}
 function nb(c,sec){var n=Math.floor(c.sampleRate*sec),b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;return b}
 function rattle(c,t,dur){
  var o=c.createOscillator(),g=c.createGain(),bp=c.createBiquadFilter(),lf=c.createOscillator(),lg=c.createGain();
  o.type="sawtooth";o.frequency.setValueAtTime(95,t);o.frequency.exponentialRampToValueAtTime(38,t+dur);
  bp.type="bandpass";bp.frequency.value=320;bp.Q.value=3;
  g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.5,t+.15);g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  lf.frequency.value=6.5;lg.gain.value=.22;lf.connect(lg);lg.connect(g.gain);
  o.connect(bp);bp.connect(g);g.connect(c.destination);o.start(t);o.stop(t+dur);lf.start(t);lf.stop(t+dur);
  var s=c.createBufferSource();s.buffer=nb(c,dur);var f=c.createBiquadFilter();f.type="bandpass";f.frequency.value=900;f.Q.value=6;var sg=c.createGain();sg.gain.setValueAtTime(.0001,t);sg.gain.exponentialRampToValueAtTime(.12,t+.3);sg.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(sg);sg.connect(c.destination);s.start(t);s.stop(t+dur);
 }
 function ring(c,t,n){
  for(var k=0;k<n;k++){[440,480].forEach(function(fr){var o=c.createOscillator(),g=c.createGain();o.type="sine";o.frequency.value=fr;var t1=t+k*2.4;g.gain.setValueAtTime(.0001,t1);g.gain.linearRampToValueAtTime(.18,t1+.02);g.gain.setValueAtTime(.18,t1+.38);g.gain.linearRampToValueAtTime(.0001,t1+.42);g.gain.setValueAtTime(.0001,t1+.5);g.gain.linearRampToValueAtTime(.18,t1+.52);g.gain.setValueAtTime(.18,t1+.88);g.gain.linearRampToValueAtTime(.0001,t1+.92);o.connect(g);g.connect(c.destination);o.start(t1);o.stop(t1+1)})}
 }
 window.deathRattle=function(){try{var c=ac();rattle(c,c.currentTime+.05,3)}catch(e){}};
 window.phoneRing=function(){try{var c=ac();ring(c,c.currentTime+.05,3)}catch(e){}};
 function scare(c,t){
  var cm=c.createDynamicsCompressor();cm.threshold.value=-18;cm.ratio.value=8;cm.connect(c.destination);
  var bo=c.createOscillator(),bg=c.createGain();bo.type="sine";bo.frequency.setValueAtTime(70,t);bo.frequency.exponentialRampToValueAtTime(28,t+.9);bg.gain.setValueAtTime(.9,t);bg.gain.exponentialRampToValueAtTime(.001,t+1);bo.connect(bg);bg.connect(cm);bo.start(t);bo.stop(t+1.1);
  var bp=c.createBiquadFilter();bp.type="bandpass";bp.frequency.value=1900;bp.Q.value=1.1;var sg=c.createGain();sg.gain.setValueAtTime(.0001,t);sg.gain.exponentialRampToValueAtTime(.75,t+.03);sg.gain.setValueAtTime(.75,t+.9);sg.gain.exponentialRampToValueAtTime(.001,t+1.5);
  var vl=c.createOscillator(),vg=c.createGain();vl.frequency.value=9;vg.gain.value=140;
  [0,1].forEach(function(k){var o=c.createOscillator();o.type="sawtooth";o.detune.value=k?18:-18;o.frequency.setValueAtTime(600,t);o.frequency.exponentialRampToValueAtTime(2300,t+.45);o.frequency.setValueAtTime(2300,t+.5);vg.connect(o.frequency);o.connect(bp);o.start(t);o.stop(t+1.6)});
  vl.connect(vg);vl.start(t);vl.stop(t+1.6);bp.connect(sg);sg.connect(cm);
  var n=c.createBufferSource();n.buffer=nb(c,1.4);var hf=c.createBiquadFilter();hf.type="highpass";hf.frequency.value=1400;var ng=c.createGain();ng.gain.setValueAtTime(.7,t);ng.gain.exponentialRampToValueAtTime(.001,t+1.2);n.connect(hf);hf.connect(ng);ng.connect(cm);n.start(t);n.stop(t+1.4);
 }
 function face(im,fx,fy,zoom,shake,tint){
  if(!im||!im.complete)return;var W=480,H=270,sc=Math.max(W/im.naturalWidth,H/im.naturalHeight)*zoom,iw=im.naturalWidth*sc,ih=im.naturalHeight*sc;
  var dx=W/2-fx*iw+(Math.random()-.5)*shake,dy=H/2-fy*ih+(Math.random()-.5)*shake;
  tx.filter="grayscale(.85) contrast(1.35) brightness(1.25)";tx.drawImage(im,dx,dy,iw,ih);tx.filter="none";
  if(tint){tx.fillStyle="rgba(200,10,20,.3)";tx.fillRect(0,0,W,H)}
 }
 function load(){["scream","jh7","jh9","jh8","jh13","jh19","jh5"].forEach(function(k){if(!pics[k]&&IMG[k]){var im=new Image();im.src=IMG[k];pics[k]=im}})}
 var SEQ=["jh7","jh9","jh8","jh19","jh5","jh13","jh9","jh7"];
 function frame(now){
  if(!run)return;var t=(now-t0)/1000,W=480,H=270;
  tx.fillStyle="#000";tx.fillRect(0,0,W,H);
  if(t<1.4){noise(tx,W,H,.9);tx.fillStyle="rgba(255,255,255,.08)";tx.fillRect(0,(t*300)%H,W,16)}
  else if(t<3.4){
   tx.fillStyle="#04100f";tx.fillRect(0,0,W,H);
   var fl=Math.random()<.12?0:1;tx.strokeStyle="rgba(210,230,226,"+(.55*fl)+")";tx.lineWidth=6;tx.beginPath();tx.arc(W/2,H/2,70+Math.sin(t*5)*2,0,Math.PI*2);tx.stroke();
   tx.lineWidth=2;tx.beginPath();tx.arc(W/2,H/2,92,0,Math.PI*2);tx.stroke();
   tx.globalAlpha=.25;noise(tx,W,H,.7);tx.globalAlpha=1;
  } else if(t<7){
   var step=RM?1.4:.38,idx=Math.floor((t-3.4)/step),ph=((t-3.4)%step)/step;
   if(ph>.8){noise(tx,W,H,1)}else{
    var im=pics[SEQ[idx%SEQ.length]];if(im&&im.complete){var sc=Math.max(W/im.naturalWidth,H/im.naturalHeight)*(1+ph*.08),iw=im.naturalWidth*sc,ih=im.naturalHeight*sc;tx.filter="grayscale(1) contrast(1.4) brightness(.9)";tx.drawImage(im,(W-iw)/2+(Math.random()*6-3),(H-ih)/2,iw,ih);tx.filter="none"}
    tx.globalAlpha=.3;noise(tx,W,H,.8);tx.globalAlpha=1;
   }
  } else if(t<9){
   tx.fillStyle="#000";tx.fillRect(0,0,W,H);tx.fillStyle="rgba(220,235,230,"+Math.min(1,(t-7)/1.2)+")";tx.font="64px serif";tx.textAlign="center";tx.fillText("七日",W/2,H/2+20);
   if(Math.random()<.1){noise(tx,W,H,1)}
  } else if(t>=11.8&&t<13.3){
   var u=t-11.8;
   if(u<.06){tx.fillStyle="#fff";tx.fillRect(0,0,W,H)}
   else if(u<.55)face(pics.scream||pics.jh8,.5,.42,1.05+u*.9,RM?0:10,false);
   else if(u<.95){face(pics.scream||pics.jh9,.52,.36,1.9+(u-.55)*.6,RM?0:14,false);tx.globalAlpha=.22;noise(tx,W,H,1);tx.globalAlpha=1}
   else face(pics.scream||pics.jh8,.52,.38,2.4+(u-.95)*.8,RM?0:24,true);
   if(!done){done=true;ach("tape")}
  } else if(t>=13.3&&t<13.9){noise(tx,W,H,1)}
  else {
   tx.fillStyle="#000";tx.fillRect(0,0,W,H);tx.fillStyle="#c4161f";tx.font="bold 54px sans-serif";tx.textAlign="center";tx.fillText(T(UI.tp_end).toUpperCase(),W/2,H/2+18);
   tx.globalAlpha=.18;noise(tx,W,H,.7);tx.globalAlpha=1;
  }
  raf=requestAnimationFrame(frame);
 }
 var tv=document.getElementById("tvid"),vfail=false;
 function start(){
  if(vfail||RM&&false){startCanvas();return}
  tv.hidden=false;tcv.hidden=true;tg.hidden=true;tt.textContent="";run=true;done=false;
  tv.onerror=function(){if(!run)return;vfail=true;tv.hidden=true;tcv.hidden=false;run=false;startCanvas()};
  tv.ontimeupdate=function(){if(!done&&tv.currentTime>11.4){done=true;ach("tape")}};
  tv.onended=function(){closeT()};
  if(!tv.getAttribute("src")){if(window.TAPE_B64){try{var bs=atob(window.TAPE_B64),ua=new Uint8Array(bs.length);for(var bi=0;bi<bs.length;bi++)ua[bi]=bs.charCodeAt(bi);tv.src=URL.createObjectURL(new Blob([ua],{type:"video/mp4"}))}catch(e){tv.src="media/tape.mp4"}}else tv.src="media/tape.mp4"}
  tv.currentTime=0;
  var pr=tv.play();if(pr&&pr.catch)pr.catch(function(){if(run&&tv.paused&&!tv.error){vfail=true;tv.hidden=true;tcv.hidden=false;run=false;startCanvas()}});
 }
 function startCanvas(){
  load();var c=ac();var now=c.currentTime+.05;
  rattle(c,now+3.4,1.8);rattle(c,now+5.2,1.4);ring(c,now+8.6,1);scare(c,now+11.8);
  whisper(c,c.destination,now+.9,2.6,.8,-.7);whisper(c,c.destination,now+3.2,3.6,1,.6);whisper(c,c.destination,now+7,2.2,.9,0);whisper(c,c.destination,now+7.4,2,.7,-.8);
  [1500,4300,7200].forEach(function(ms){setTimeout(function(){if(run)jaSpeak(.18)},ms)});
  var nz=c.createBufferSource();nz.buffer=nb(c,1.4);var g=c.createGain();g.gain.setValueAtTime(.2,now);g.gain.linearRampToValueAtTime(0,now+1.4);nz.connect(g);g.connect(c.destination);nz.start(now);
  var hz=c.createBufferSource();hz.buffer=nb(c,3);hz.loop=true;var hf=c.createBiquadFilter();hf.type="highpass";hf.frequency.value=1800;var hg=c.createGain();hg.gain.value=.16;
  var lf=c.createOscillator(),lg=c.createGain();lf.frequency.value=.9;lg.gain.value=.07;lf.connect(lg);lg.connect(hg.gain);lf.start(now);
  for(var q=0;q<14;q++){var tq=now+1.5+Math.random()*9;hg.gain.setValueAtTime(.16,tq);hg.gain.linearRampToValueAtTime(.42,tq+.04);hg.gain.linearRampToValueAtTime(.16,tq+.25)}
  var hm=c.createOscillator(),hmg=c.createGain();hm.type="sawtooth";hm.frequency.value=50;hmg.gain.value=.05;hm.connect(hmg);hmg.connect(c.destination);hm.start(now);
  hz.connect(hf);hf.connect(hg);hg.connect(c.destination);hz.start(now);
  run=true;done=false;tg.hidden=true;tt.textContent="";t0=performance.now();raf=requestAnimationFrame(frame);
 }
 function closeT(){run=false;try{tv.pause();tv.hidden=true;tcv.hidden=false}catch(e){}try{window.speechSynthesis&&speechSynthesis.cancel()}catch(e){}cancelAnimationFrame(raf);tp.hidden=true;if(tctx){try{tctx.close()}catch(e){}tctx=null}tg.hidden=false;lab();tpb.focus()}
 tpb.addEventListener("click",function(){tp.hidden=false;tg.hidden=false;run=false;lab();tg.focus()});
 tg.addEventListener("click",function(){if(!run)start();else closeT()});
 tp.addEventListener("click",function(e){if(run&&e.target!==tg)closeT()});
 document.addEventListener("keydown",function(e){if(!tp.hidden&&e.key==="Escape")closeT()});
 lab();
 /* the phone */
 var ph=setInterval(function(){if(sndOn&&actx&&!document.hidden&&!ST.ach.phone){clearInterval(ph);window.phoneRing();toast("☎","…");ach("phone")}},1000*45);
})();
// The second field is the tile number in the achievement artwork sheet.
var BG=[
 ["first",0,a("Первая кровь","First blood"),a("Зайти на сайт","Visit the site")],
 ["search",1,a("Следопыт","Pathfinder"),a("Воспользоваться поиском по сайту","Use the site-wide search")],
 ["spiral",2,a("Спираль","The spiral"),a("Нажать на карточку Дзюндзи Ито","Press the Junji Ito tile")],
 ["s2",3,a("Вернулся","Back for more"),a("2 дня подряд","2 days in a row")],
 ["s3",4,a("Привязался","Hooked"),a("3 дня подряд","3 days in a row")],
 ["s7",5,a("Неделя кошмаров","A week of nightmares"),a("7 дней подряд","7 days in a row")],
 ["s14",6,a("Культист","Cultist"),a("14 дней подряд","14 days in a row")],
 ["s30",7,a("Бессмертный","Undying"),a("30 дней подряд","30 days in a row")],
 ["snd",8,a("Скрежет","The screech"),a("Включить звук","Turn the sound on")],
 ["fl",9,a("Во тьме","In the dark"),a("Включить фонарик","Use the flashlight")],
 ["lang",10,a("Полиглот","Bilingual"),a("Переключить язык","Switch the language")],
 ["tour",11,a("Исследователь","Explorer"),a("Открыть 6 разных вкладок","Open 6 different tabs")],
 ["gal",12,a("Зритель галереи","Gallery visitor"),a("Открыть картинку в галерее","Open a gallery image")],
 ["quiz",13,a("Знаток","Know-it-all"),a("Пройти викторину до конца","Finish the quiz")],
 ["want",14,a("Список в кармане","Watchlist"),a("Отметить 5 фильмов в каталоге","Mark 5 films in the catalogue")],
 ["seen",15,a("Киноман","Cinephile"),a("Отметить 10 фильмов как просмотренные","Mark 10 films as seen")],
 ["play",16,a("Игрок","Player"),a("Сыграть в игры на вкладке «Игры»","Play the games in the Play tab")],
 ["play60",17,a("Одержимый","Obsessed"),a("60 действий в играх","60 actions in games")],
 ["end",18,a("Концовка","The ending"),a("Дойти до конца в истории","Reach an ending in the story")],
 ["hl5",19,a("Чутьё","Gut feeling"),a("5 верных ответов подряд в «Выше/ниже»","5 right answers in a row in Higher/Lower")],
 ["night",20,a("Сова","Night owl"),a("Зайти ночью (0–5 часов)","Visit at night (0–5 AM)")],
 ["f13",21,a("Пятница, 13-е","Friday the 13th"),a("Зайти в пятницу 13-го","Visit on Friday the 13th")],
 ["hw",22,a("Хэллоуин","Halloween"),a("Зайти 31 октября","Visit on October 31")],
 ["tape",23,a("Проклятая кассета","The cursed tape"),a("Досмотреть кассету до конца","Watch the tape to the end")],
 ["phone",24,a("Звонок","The call"),a("Дождаться звонка телефона (звук включён)","Wait for the phone to ring (sound on)")],
 ["curse",25,a("Семь дней","Seven days"),a("Дождаться исполнения проклятия кассеты","Live to see the tape's curse come true"),1],
 ["pass",26,a("Передать дальше","Pass it on"),a("Передать плёнку другому","Pass the tape on to someone else"),1],
 ["fullmoon",27,a("Красная луна","Red moon"),a("Зайти на сайт в полнолуние","Visit the site on a full moon"),1],
 ["fog",28,a("Протереть стекло","Wipe the glass"),a("Протереть запотевшее стекло","Wipe the fogged glass"),1],
 ["spot",29,a("Зоркий глаз","Sharp eye"),a("Найти призрака на дневной картинке","Find the ghost in the daily picture")],
 ["ouija",30,a("Спросить духов","Ask the spirits"),a("Получить ответ на доске духов","Get an answer from the spirit board")],
 ["quiet",31,a("Тише","Hush"),a("Слушать комнату в наушниках минуту","Listen to the room in headphones for a minute")],
 ["radio",32,a("Между станциями","Between stations"),a("Поймать станцию на радио","Tune in a station on the radio")],
 ["silent",33,a("Не дыши","Do not breathe"),a("Просидеть 18 секунд тише мыши","Stay silent for 18 seconds")],
 ["mirror",34,a("Зеркало","Mirror"),a("Дожить до конца записи с камеры","Make it to the end of the camera feed")],
 ["corridor",35,a("Коридор","The corridor"),a("Досмотреть запись коридора","Watch the corridor tape to the end")],
 ["room",36,a("Запертая комната","The locked room"),a("Дойти до любой концовки","Reach any ending")],
 ["decay",37,a("Вы заметили","You noticed"),a("Дожить до лица в углу","Live to see the face in the corner"),1],
 ["gone",38,a("Пустая карточка","The empty card"),a("Найти фильм, которого больше нет","Find the film that is gone"),1],
 ["cursed",39,a("Семь дней","Seven days"),a("Посмотреть кассету и дождаться звонка","Watch the tape and answer the call"),1],
 ["tape2",40,a("Кассета II","The Tape II"),a("Досмотреть вторую кассету до конца","Watch the second tape to the end")],
 ["dossier",41,a("Досье","The dossier"),a("Открыть досье зрителя","Open your viewer dossier")],
 ["mail",42,a("На связи","On the list"),a("Подписаться на рассылку","Subscribe to the mailing list")],
  ["secret",43,a("???","???"),a("Секрет: Konami-код (↑↑↓↓←→←→ B A)","Secret: the Konami code (↑↑↓↓←→←→ B A)"),1]
];
var ST={last:0,n:0,best:0,days:0,ach:{},tabs:{},plays:0};
try{var _s=JSON.parse(localStorage.getItem("ha-streak")||"null");if(_s)ST=Object.assign(ST,_s)}catch(e){}
function saveST(){try{localStorage.setItem("ha-streak",JSON.stringify(ST))}catch(e){}}
var toastT=null;
var SECRET_BADGE_SEAL=44;
function badgeArt(tile){
  var col=tile%8,row=Math.floor(tile/8);
  return '<span class="badge-art" aria-hidden="true" style="--badge-x:'+col+';--badge-y:'+row+'"></span>';
}
function toast(h,t,badgeTile){
  var el=document.getElementById("toast"),copy="<b>"+esc(h)+"</b>"+esc(t);
  el.innerHTML=badgeTile===undefined?copy:'<div class="badge-toast">'+badgeArt(badgeTile)+'<div>'+copy+'</div></div>';
  el.classList.add("on");clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove("on")},3800);
}
function ach(id){
  if(ST.ach[id])return;ST.ach[id]=Date.now();saveST();
  var b=BG.filter(function(x){return x[0]===id})[0];
  if(b){toast(T(a("Открыт значок","Badge unlocked")),T(b[2]),b[1]);try{sting("find")}catch(e){}}
  renderBadges();
}
function renderBadges(){
  var g=document.getElementById("bd-grid");if(!g)return;
  var got=BG.filter(function(b){return ST.ach[b[0]]}).length;
  document.getElementById("bd-streak").textContent=T(a("Серия","Streak"))+": "+ST.n+" · "+T(a("рекорд","best"))+": "+ST.best+" · "+T(a("всего дней","total days"))+": "+ST.days;
  document.getElementById("bd-cnt").textContent=got+" / "+BG.length;
  document.getElementById("bd-fill").style.width=Math.round(got/BG.length*100)+"%";
  g.innerHTML=BG.map(function(b){
    var on=ST.ach[b[0]],hide=b[4]&&!on;
    return '<div class="bd '+(on?'got':'lock')+'">'+badgeArt(hide?SECRET_BADGE_SEAL:b[1])+
      '<div><h4>'+esc(hide?"???":T(b[2]))+'</h4><p>'+esc(hide?T(a("Спрятано. Ищи сам.","Hidden. Find it yourself.")):T(b[3]))+'</p></div></div>';
  }).join("");
  var s=document.getElementById("streak");if(s)s.innerHTML=ic("saw","ic")+" "+esc(T(a("Серия визитов","Visit streak")))+": <b>"+ST.n+"</b> · "+got+"/"+BG.length+" "+esc(T(a("значков","badges")));
}
window.renderBadges=renderBadges;
(function(){
  var now=new Date(),day=Math.floor((now.getTime()-now.getTimezoneOffset()*6e4)/864e5);
  if(ST.last!==day){
    var first=!ST.last;
    ST.n=(ST.last===day-1)?ST.n+1:1;ST.best=Math.max(ST.best,ST.n);ST.days++;ST.last=day;saveST();
    if(!first)setTimeout(function(){toast(T(a("Серия: "+ST.n+" дн.","Streak: day "+ST.n)),T(a("Ты вернулся. Мы это заметили.","You came back. We noticed."))) },1800);
  }
  setTimeout(function(){
    ach("first");
    if(ST.n>=2)ach("s2");if(ST.n>=3)ach("s3");if(ST.n>=7)ach("s7");if(ST.n>=14)ach("s14");if(ST.n>=30)ach("s30");
    if(now.getHours()<5)ach("night");
    if(now.getDate()===13&&now.getDay()===5)ach("f13");
    if(now.getMonth()===9&&now.getDate()===31)ach("hw");
  },600);
  document.getElementById("flb").addEventListener("click",function(){ach("fl")});
  document.getElementById("snd").addEventListener("click",function(){setTimeout(function(){if(sndOn)ach("snd")},50)});
  document.querySelector(".lang").addEventListener("click",function(e){var b=e.target.closest("button");if(b)ach("lang")});
  document.getElementById("filters").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;ST.tabs[b.dataset.f]=1;saveST();if(Object.keys(ST.tabs).length>=6)ach("tour")});
  document.getElementById("gal").addEventListener("click",function(){ach("gal")});
  document.getElementById("catg").addEventListener("click",function(){setTimeout(function(){var w=0,sn=0;for(var k in MY){w++;if(MY[k]==="seen")sn++}if(w>=5)ach("want");if(sn>=10)ach("seen")},0)});
  document.getElementById("play").addEventListener("click",function(e){if(!e.target.closest("button"))return;ST.plays++;saveST();ach("play");if(ST.plays>=60)ach("play60");setTimeout(function(){if(typeof hl!=="undefined"&&hl.best>=5)ach("hl5")},0)});
  var kc=[38,38,40,40,37,39,37,39,66,65],ki=0;
  document.addEventListener("keydown",function(e){ki=(e.keyCode===kc[ki])?ki+1:(e.keyCode===kc[0]?1:0);if(ki===kc.length){ki=0;ach("secret")}});
})();
(function(){
 var fb=document.getElementById("flb");
 function fr(){fb.textContent=T(fb.getAttribute("aria-pressed")==="true"?UI.fl_on:UI.fl_off)}
 window.renderFl=fr;
 fr();
})();
document.getElementById("sh-copy").addEventListener("click",function(){
  var u="https://horroraesthetic.github.io/horror-aesthetic/",t=document.getElementById("sh-copy-t"),done=function(){t.textContent=T(UI.sh_ok);t.classList.add("copied");setTimeout(function(){t.textContent=T(UI.sh_copy);t.classList.remove("copied")},1800)};
  try{navigator.clipboard.writeText(u).then(done,done)}catch(e){var i=document.createElement("input");i.value=u;document.body.appendChild(i);i.select();try{document.execCommand("copy")}catch(x){}i.remove();done()}
});
var totop=document.getElementById("totop");
totop.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
window.addEventListener("scroll",function(){totop.classList.toggle("on",window.scrollY>700)},{passive:true});
document.getElementById("play").addEventListener("click",function(e){
  var t=e.target.closest("button");if(!t)return;
  if(t.id==="p-go")doSpin(false);
  else if(t.id==="p-dbl")doSpin(true);
  else if(t.id==="p-pitch"){makePitch();showPitch()}
  else if(t.id==="p-or"){orRes={a:pick(ORACLE),f:pick(Object.keys(F))};showOracle()}
  else if(t.id==="p-gl-b"){var m=REVIEWS.map(function(r,i){return r.g===goreV?i:-1}).filter(function(i){return i>=0});goreRes=m.length?pick(m):null;showGore()}
  else if(t.id==="p-gs-next"){newGuess();showGuess()}
  else if(t.dataset.j!==undefined&&gAns===null){gAns=+t.dataset.j;gTot++;if(gAns===gq.i)gOk++;showGuess()}
});
document.getElementById("play").addEventListener("click",function(e){
  var t=e.target.closest("button");if(!t)return;
  if(t.dataset.fg){fgNode=t.dataset.fg;var n=STORY[fgNode];if(n.end===1){sting("scare");ach("end")}showFG()}
  else if(t.dataset.m!==undefined)clickMem(+t.dataset.m);
  else if(t.id==="p-mem-new"){newMem();showMem()}
  else if(t.dataset.h&&hang){var c=t.dataset.h;hang.g[c]=1;if(hang.w.indexOf(c)<0)hang.lives--;showHang()}
  else if(t.id==="p-hang-new"){newHang();showHang()}
  else if(t.id==="p-hl-hi")answerHL(true);
  else if(t.id==="p-hl-lo")answerHL(false);
  else if(t.id==="p-hl-next"){newHL();showHL()}
  else if(t.id==="p-yr-go"){var f=F[REVIEWS[yr.i].id].y,d=Math.abs(yr.g-f),pt=Math.max(0,100-d*5);yr.pts+=pt;yr.n++;yr.last=pt;yr.done=true;sting(d<=3?"find":"scare");showYr()}
  else if(t.id==="p-yr-next"){newYr();showYr()}
  else if(t.dataset.dk!==undefined){var i=+t.dataset.dk;if(!dark.found[i]){dark.found[i]=1;sting("find");if(Object.keys(dark.found).length===DK.length){var pl=Object.keys(F);dark.won=pick(pl);sting("scare")}showDark()}}
  else if(t.id==="p-dark-new"){newDark();showDark()}
});
document.getElementById("play").addEventListener("input",function(e){if(e.target.id==="p-yr-r"){yr.g=+e.target.value;document.getElementById("p-yr-v").textContent=yr.g}});
document.getElementById("play").addEventListener("change",function(e){if(e.target.id==="p-g")PG=e.target.value;if(e.target.id==="p-d")PD=e.target.value});
document.getElementById("play").addEventListener("input",function(e){if(e.target.id==="p-gl"){goreV=+e.target.value;goreRes=null;showGore()}});
var rndId=null;
function showRnd(){
  var out=document.getElementById("rnd-out");
  if(!rndId){return}
  var where=LISTS.filter(function(l){return l.ids.indexOf(rndId)>-1}).map(function(l){return T(l.t)});
  out.dataset.on="1";
  out.innerHTML='<b>'+esc(T(F[rndId].n))+'</b><em>'+F[rndId].y+(where.length?' · '+esc(T(UI.rnd_in))+': '+esc(where.slice(0,2).join(", ")):'')+'</em>';
}
document.getElementById("rnd-btn").addEventListener("click",function(){var ids=Object.keys(F),n;do{n=ids[Math.floor(Math.random()*ids.length)]}while(n===rndId&&ids.length>1);rndId=n;showRnd()});
document.getElementById("go-rev").addEventListener("click",function(){var t=document.getElementById("reviews");t.hidden=false;window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-70,behavior:"smooth"})});

function pickPoint(el){
  var i=+el.dataset.i;picked=i;
  document.querySelectorAll(".sv .pt").forEach(function(p){p.classList.toggle("sel",+p.dataset.i===i)});
  renderPick();
}
var sc=document.getElementById("scatter");
sc.addEventListener("click",function(e){var p=e.target.closest(".pt");if(p)pickPoint(p)});
sc.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){var p=e.target.closest(".pt");if(p){e.preventDefault();pickPoint(p)}}});

var lb=document.getElementById("lb"),lbImg=document.getElementById("lb-img"),lbCap=document.getElementById("lb-cap"),lastBtn=null,lbI=0;
function showLb(i){lbI=(i+galIdx.length)%galIdx.length;var g=galIdx[lbI];lbImg.src=IMG[g[0]];lbImg.alt=T(g[2]);lbCap.textContent=T(g[2])+"  ·  "+(lbI+1)+" / "+galIdx.length}
document.getElementById("gal").addEventListener("click",function(e){
  var b=e.target.closest("button[data-i]");if(!b)return;
  lastBtn=b;lb.hidden=false;showLb(+b.dataset.i);document.getElementById("lb-x").focus();
});
document.getElementById("gal-f").addEventListener("click",function(e){var b=e.target.closest("button");if(b){galF=b.dataset.c;renderGal()}});
function closeLb(){lb.hidden=true;lbImg.removeAttribute("src");if(lastBtn&&document.body.contains(lastBtn))lastBtn.focus()}
document.getElementById("lb-x").addEventListener("click",closeLb);
document.getElementById("lb-p").addEventListener("click",function(){showLb(lbI-1)});
document.getElementById("lb-n").addEventListener("click",function(){showLb(lbI+1)});
lb.addEventListener("click",function(e){if(e.target===lb)closeLb()});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")closeLb();else if(e.key==="ArrowLeft")showLb(lbI-1);else if(e.key==="ArrowRight")showLb(lbI+1)});

document.body.classList.add("js");
(function(){
  var pc=document.createElement("div");pc.className="petals";pc.setAttribute("aria-hidden","true");
  for(var i=0;i<14;i++){var q=document.createElement("i");q.style.left=(Math.random()*100)+"%";q.style.setProperty("--d",(16+Math.random()*16)+"s");q.style.setProperty("--w",(-Math.random()*30)+"s");q.style.width=(7+Math.random()*7)+"px";q.style.height=(9+Math.random()*8)+"px";pc.appendChild(q)}
  document.body.appendChild(pc);
  var KJ={about:"序",reviews:"評",articles:"読",library:"蔵",releases:"新",news:"報",manga:"漫",subs:"派",start:"入",genres:"類",stats:"数",dirs:"監",catalog:"録",badges:"印",play:"遊",calendar:"暦",quiz:"問",lists:"選",shelves:"棚",art:"絵"};
  document.querySelectorAll("section[data-cat]").forEach(function(sec){var h=sec.querySelector(".sec-h"),k=KJ[sec.dataset.cat];if(h&&k&&!h.querySelector(".kj")){var e=document.createElement("span");e.className="kj";e.lang="ja";e.setAttribute("aria-hidden","true");e.textContent=k;h.appendChild(e)}});
})();
(function(){
  var rm=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
  if(!rm){
    document.querySelectorAll("section").forEach(function(sec){
      for(var i=0;i<0;i++){var d=document.createElement("i");d.className="dr";d.style.left=(8+Math.random()*84)+"%";d.style.animationDelay=(Math.random()*3.2)+"s";d.style.animationDuration=(2.6+Math.random()*1.8)+"s";sec.appendChild(d)}
    });
  }
  if(!rm&&window.matchMedia&&matchMedia("(hover:hover)").matches){
    var g=document.createElement("div");g.className="cursor-glow";g.setAttribute("aria-hidden","true");document.body.appendChild(g);
    window.addEventListener("mousemove",function(e){g.style.opacity=1;g.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"},{passive:true});
    document.addEventListener("mouseleave",function(){g.style.opacity=0});
  }
})();
var io=("IntersectionObserver" in window)?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{rootMargin:"0px 0px -6% 0px"}):null;
function watchRv(){document.querySelectorAll(".rv:not(.in)").forEach(function(el){if(io)io.observe(el);else el.classList.add("in")})}
var _rs=renderStatic;renderStatic=function(){_rs();watchRv()};
var start="en";
try{if(localStorage.getItem("ha-lang")==="ru")start="ru"}catch(e){}
try{var hh=(location.hash||"").slice(1);if(hh==="first-watch")secFilter="start";else if(hh&&document.querySelector('section[data-cat="'+hh+'"]'))secFilter=hh}catch(e){}
setLang(start);
addEventListener("hashchange",function(){
  var name=location.hash.slice(1);
  if(name==="first-watch"&&!document.getElementById("first-watch").hidden)return;
  if(name==="first-watch")name="start";
  if(!name)name="home";
  var valid=[...document.querySelectorAll("section[data-cat],#filters [data-f]")].some(function(el){
    return el.dataset.cat===name||el.dataset.f===name;
  });
  if(!valid||secFilter===name)return;
  secFilter=name;applySections();
  document.querySelectorAll("#filters button").forEach(function(el){el.setAttribute("aria-pressed",String(el.dataset.f===name))});
});

// The hash stores the selected section, not a browser scroll position.
// Avoid reopening the homepage halfway down after Android restores a stale offset.
try {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.addEventListener("pageshow", function (event) {
    if (event.persisted || secFilter !== "home") return;
    if (location.hash === "#first-watch" || window.HA_REVIEW_RETURN?.pending()) return;
    requestAnimationFrame(function () { window.scrollTo(0, 0); });
  }, { once: true });
} catch (e) {}


(function(){
 var W=960,H=56,RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches,rows=[],vis=new Set(),raf=0,last=0;
 function R(){return Math.random()}
 function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
 function ss(a,b,x){x=Math.max(0,Math.min(1,(x-a)/(b-a)));return x*x*(3-2*x)}
 var defs=document.createElementNS("http://www.w3.org/2000/svg","svg");defs.setAttribute("width","0");defs.setAttribute("height","0");defs.setAttribute("aria-hidden","true");defs.style.cssText="position:absolute;width:0;height:0";
 defs.innerHTML='<defs><radialGradient id="ksc" cx=".5" cy=".5" r=".6"><stop offset="0" stop-color="#f6eee6"/><stop offset=".7" stop-color="#e2d0c6"/><stop offset=".95" stop-color="#b9575c"/><stop offset="1" stop-color="#6d1a20"/></radialGradient><radialGradient id="kir" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#1a0204"/><stop offset=".38" stop-color="#8f0f19"/><stop offset=".78" stop-color="#c4161f"/><stop offset="1" stop-color="#3d0509"/></radialGradient><radialGradient id="ksk" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2a1213" stop-opacity=".95"/><stop offset=".6" stop-color="#140809" stop-opacity=".8"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient><linearGradient id="ksh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset=".4" stop-color="#000" stop-opacity=".05"/><stop offset=".75" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient><clipPath id="kalm"><path d="M-34 0Q0 -25 34 0Q0 25 -34 0Z"/></clipPath></defs>';
 document.body.insertBefore(defs,document.body.firstChild);
 function pd(L){return "M"+L.map(function(p){return p[0].toFixed(1)+" "+p[1].toFixed(1)}).join("L")}
 function eyeSVG(n){var r=rng(9+n*13),vn="",ir="",lash="",wr="";
  for(var i=0;i<12;i++){var sd=i%2?1:-1,x=sd*(33-r()*6),y=(r()*2-1)*2,pts=[[x,y]],cxx=x,cyy=y;for(var k=0;k<4;k++){cxx-=sd*(3+r()*5);cyy+=(r()*2-1)*5-(cyy*.15);pts.push([cxx,cyy])}vn+='<path d="'+pd(pts)+'" fill="none" stroke="#8a1018" stroke-width="'+(.4+r()*.5).toFixed(2)+'" opacity="'+(.55+r()*.35).toFixed(2)+'"/>'}
  for(var i=0;i<40;i++){var an=i/40*6.2832,r0=4.9,r1=10.4+r()*.8;ir+='<path d="M'+(Math.cos(an)*r0).toFixed(2)+' '+(Math.sin(an)*r0).toFixed(2)+'L'+(Math.cos(an)*r1).toFixed(2)+' '+(Math.sin(an)*r1).toFixed(2)+'" stroke="'+(i%3?'#e8404a':'#3b0509')+'" stroke-width=".45" opacity="'+(.25+r()*.4).toFixed(2)+'"/>'}
  for(var i=0;i<10;i++){var t=(i+.5)/10,x=-30+60*t,y=-22*Math.sin(t*3.1416)*1.02-.5,l=4+r()*4;lash+='<path d="M'+x.toFixed(1)+' '+y.toFixed(1)+'Q'+(x+(t-.5)*8).toFixed(1)+' '+(y-l*.8).toFixed(1)+' '+(x+(t-.5)*14).toFixed(1)+' '+(y-l-1).toFixed(1)+'" fill="none" stroke="#050000" stroke-width="1"/>'}
  for(var i=0;i<6;i++){var t=(i+.7)/7,x=-26+52*t,y=21*Math.sin(t*3.1416)*.98;lash+='<path d="M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+(x+(t-.5)*5).toFixed(1)+' '+(y+3+r()*2).toFixed(1)+'" fill="none" stroke="#050000" stroke-width=".8"/>'}
  for(var i=0;i<4;i++){var t=r(),x=-34+68*t,wy=-20-(r()*7);wr+='<path d="M'+x.toFixed(1)+' -9Q'+(x+(r()*10-5)).toFixed(1)+' '+(wy/2).toFixed(1)+' '+(x+(r()*14-7)).toFixed(1)+' '+wy.toFixed(1)+'" fill="none" stroke="#1d0a0b" stroke-width="1" opacity=".8"/>'}
  var tx=(r()<.5?-1:1)*(8+r()*10);
  return '<svg viewBox="-60 -34 120 68" aria-hidden="true" focusable="false"><ellipse rx="56" ry="30" fill="url(#ksk)"/>'+wr+
   '<g class="vxe"><g class="vxi"><g clip-path="url(#kalm)"><path d="M-34 0Q0 -25 34 0Q0 25 -34 0Z" fill="url(#ksc)"/>'+vn+
   '<g class="vxl"><circle r="11.6" fill="url(#kir)"/>'+ir+'<circle r="11.6" fill="none" stroke="#150103" stroke-width="1.5"/><circle class="vxp" r="4.7" fill="#000"/><ellipse cx="-3.6" cy="-3.8" rx="2.4" ry="1.4" fill="#fff" opacity=".9"/><circle cx="3.4" cy="3.6" r=".9" fill="#fff" opacity=".6"/></g>'+
   '<rect x="-36" y="-26" width="72" height="52" fill="url(#ksh)"/></g>'+
   '<ellipse cx="-31" cy="1.5" rx="3.6" ry="2.4" fill="#a8434c"/><path d="M-27 6Q0 20 27 6" fill="none" stroke="#ffe3e3" stroke-width=".7" opacity=".4"/><path d="M-30 2.4Q0 22.5 30 2.4" fill="none" stroke="#c2323c" stroke-width="1.1" opacity=".7"/><path d="M-22 8.5Q0 19 22 8.5" fill="none" stroke="#fff" stroke-width=".5" opacity=".35"/></g>'+
   '<path d="M-36 0Q0 -27 36 0" fill="none" stroke="#050000" stroke-width="3.4"/><path d="M-36 0Q0 27 36 0" fill="none" stroke="#050000" stroke-width="2.6"/><path d="M-33 -7Q0 -34 33 -7" fill="none" stroke="#2b1012" stroke-width="1.2"/>'+lash+'</g>'+
   '<path class="vxt" pathLength="1" fill="none" stroke="#b30f19" stroke-width="2.2" stroke-linecap="round" d="M'+tx.toFixed(1)+' 14Q'+(tx+3).toFixed(1)+' 20 '+(tx-1).toFixed(1)+' 25Q'+(tx+2).toFixed(1)+' 29 '+tx.toFixed(1)+' 32"/></svg>'}
 var NS="http://www.w3.org/2000/svg";
 function pdn(L){return "M"+L.map(function(p){return p[0].toFixed(1)+" "+p[1].toFixed(1)}).join("L")}
 function buildCrack(o){var G=[],html="",hw=o.hw*.92,SC=window.innerWidth<700?.5:.7;
  var LY=["","","","",""];
  function add(pts,w,s0,s1){w*=1.3*SC;var d=pdn(pts);G.push({s0:s0,s1:s1,w:w,els:null,last:-1});
   LY[0]+='<path d="'+d+'" pathLength="1" stroke="#ff2a2a" stroke-width="'+(w+3*SC)+'" opacity=".12"/>';
   LY[1]+='<path d="'+d+'" pathLength="1" stroke="#5a2a2c" stroke-width="1" opacity=".8" transform="translate(0 -1.2)"/>';
   LY[2]+='<path d="'+d+'" pathLength="1" stroke="#000" stroke-width="'+w+'"/>';
   LY[3]+='<path d="'+d+'" pathLength="1" stroke="#e0222c" stroke-width="'+(w*.46).toFixed(2)+'"/>';
   LY[4]+='<path d="'+d+'" pathLength="1" stroke="#ffd6d6" stroke-width=".6" opacity=".34" transform="translate(0 -.4)"/>'}
  [-1,1].forEach(function(dir){var x=o.tx+dir*hw,y=28,pts=[[x,28]],tot=0,len=150+R()*180;
   while(tot<len){var dx=dir*(9+R()*20);x+=dx;y=Math.max(9,Math.min(47,y+(R()*2-1)*8));tot+=Math.abs(dx);pts.push([x,y])}
   var m=Math.ceil((pts.length-1)/4),W4=[7.4,5.4,3.8,2.4];
   for(var k=0;k<4;k++){var seg=pts.slice(k*m,Math.min(pts.length,(k+1)*m+1));if(seg.length>1)add(seg,W4[k],.05+k*.1,.05+k*.1+.16)}
   var nb=3+(R()*3|0);
   for(var q=0;q<nb;q++){var ix=1+(R()*(pts.length-2)|0),pb=pts[ix],bx=pb[0],by=pb[1],up=R()<.5?-1:1,bp=[[bx,by]],st=3+(R()*4|0);
    for(var z=0;z<st;z++){bx+=dir*(5+R()*13);by=Math.max(5,Math.min(51,by+up*(2+R()*7)*(R()<.8?1:-.6)));bp.push([bx,by]);
     if(z==1&&R()<.6){var hp=[[bx,by]],hx=bx,hy=by;for(var h=0;h<3;h++){hx+=dir*(3+R()*7);hy+=-up*(2+R()*5);hp.push([hx,hy])}var hs=.1+(ix/pts.length)*.4;add(hp,1.2,hs+.1,hs+.28)}}
    var s0=.06+(ix/pts.length)*.42+.03;add(bp,Math.max(1.5,3.1-q*.4),s0,s0+.2)}});
  // falling chips
  var chips="";G.chips=[];for(var c=0;c<7;c++){var cxp=o.tx+(R()<.5?-1:1)*(o.hw*.9+R()*130),sz=1.6+R()*2.4,cy=24+R()*10;G.chips.push({x:cxp,y:cy,v:R()*28+18,r:R()*220-110,t:.15+R()*.3});
   chips+='<polygon points="0,0 '+(sz*1.5).toFixed(1)+','+(sz*.4).toFixed(1)+' '+(sz*.6).toFixed(1)+','+(sz*1.6).toFixed(1)+'" fill="#050202" opacity="0"/>'}
  // blood drips
  var drips="";for(var d2=0;d2<2;d2++)drips+='<line stroke="#a50e18" stroke-width="'+(2.6*SC).toFixed(1)+'" x1="0" y1="0" x2="0" y2="0"/><circle r="'+(2.3*SC).toFixed(1)+'" fill="#d8202a" opacity="0"/><circle r="'+(.7*SC).toFixed(1)+'" fill="#ffd0d0" opacity="0"/>';
  o.kx.innerHTML='<g class="kgrp">'+LY.map(function(l,j){return '<g class="L'+j+'">'+l+'</g>'}).join('')+chips+drips+'</g>';o.G=G;o.kgrp=o.kx.firstChild;
  var Ls=[0,1,2,3,4].map(function(j){return o.kx.querySelectorAll("g.L"+j+" path")});for(var i=0;i<G.length;i++)G[i].els=[Ls[0][i],Ls[1][i],Ls[2][i],Ls[3][i],Ls[4][i]];
  o.chipEls=o.kx.querySelectorAll("polygon");o.dripEls=o.kx.querySelectorAll("line,circle")}
 function updateCrack(o,p,y0,g){var G=o.G;if(!G)return;
  o.kgrp.style.transform="translateY("+(y0-28)+"px)";o.kx.style.opacity=(1-ss(.82,.98,p)).toFixed(2);
  for(var i=0;i<G.length;i++){var e=G[i],f=ss(e.s0,e.s1,p);f=Math.round(f*200)/200;if(f===e.last)continue;e.last=f;
   for(var j=0;j<e.els.length;j++)e.els[j].style.strokeDashoffset=(1-f).toFixed(3);
   e.els[3].style.strokeWidth=(e.w*(.3+.7*ss(.08,.5,p))*.5).toFixed(2)}
  for(var c=0;c<o.chipEls.length;c++){var ch=G.chips[c],tt=Math.max(0,p-ch.t),on=p>ch.t&&p<.9;o.chipEls[c].setAttribute("opacity",on?(.9*(1-ss(.6,.9,p))).toFixed(2):0);
   o.chipEls[c].setAttribute("transform","translate("+(ch.x+tt*10).toFixed(1)+" "+(ch.y+tt*tt*ch.v*2.2).toFixed(1)+") rotate("+(tt*ch.r).toFixed(0)+")")}
  var dg=ss(.3,.62,p),fa=1-ss(.85,.98,p),E=o.dripEls;
  for(var q=0;q<2;q++){var dx=o.tx+o.dr[q],y1=28+g*.42,len=o.dr[q+2]*dg*1.15,fall=p>.62?(p-.62)*95:0,L=E[q*3],B=E[q*3+1],H=E[q*3+2];
   L.setAttribute("x1",dx.toFixed(1));L.setAttribute("y1",y1.toFixed(1));L.setAttribute("x2",(dx+.7).toFixed(1));L.setAttribute("y2",(y1+len).toFixed(1));L.style.opacity=(dg>0?fa:0).toFixed(2);
   var by=y1+len+1.8+fall*(.6+q*.2);B.setAttribute("cx",(dx+.7).toFixed(1));B.setAttribute("cy",by.toFixed(1));B.setAttribute("opacity",(dg>.2?fa*(1-ss(.8,.97,p)):0).toFixed(2));
   H.setAttribute("cx",(dx-.2).toFixed(1));H.setAttribute("cy",(by-.8).toFixed(1));H.setAttribute("opacity",(dg>.2?fa*.7:0).toFixed(2))}}
 function mkRow(n){var d=document.createElement("div");d.className="vhs";d.setAttribute("aria-hidden","true");var c=document.createElement("canvas");c.width=W;c.height=H;d.appendChild(c);
  var kx=document.createElementNS(NS,"svg");kx.setAttribute("class","kx");kx.setAttribute("viewBox","0 0 960 56");kx.setAttribute("preserveAspectRatio","none");d.appendChild(kx);var ey=document.createElement("div");ey.className="ey";ey.innerHTML=eyeSVG(n);d.appendChild(ey);
  var cx=c.getContext("2d"),img=cx.createImageData(W,H);
  return {d:d,c:c,cx:cx,kx:kx,pp:ey.querySelector(".vxp"),sacc:0,ptr:0,ey:ey,e:ey.querySelector(".vxe"),lk:ey.querySelector(".vxl"),tr:ey.querySelector(".vxt"),img:img,u:new Uint32Array(img.data.buffer),ph:n*1.7,next:performance.now()+2500+R()*6000+n*300,tear:0,dxr:new Int16Array(17)}}
 var nzr=new Uint8Array(W>>1);
 function col(r,g,b,a){return (a<<24)|(b<<16)|(g<<8)|r}
 function eyeScale(p){return p<.12?.07:p<.2?.07+.43*ss(.12,.2,p):p<.28?.5+.5*ss(.2,.28,p):p<.5?1:p<.53?1-.9*ss(.5,.53,p):p<.57?.1+.9*ss(.53,.57,p):p<.68?1:p<.7?1-.88*ss(.68,.7,p):p<.74?.12+.88*ss(.7,.74,p):p<.84?1:Math.max(.07,1-.93*ss(.84,.93,p))}
 function draw(o,now,still){
  var t=now/1000+o.ph,y0=Math.round(H/2+3*Math.sin(t*.7)),u=o.u,g,p=0;u.fill(0);
  for(var r=-8;r<=8;r++)o.dxr[r+8]=still?0:Math.round(2.4*Math.sin(r*.9+t*8)+(R()-.5)*3+(R()<.06?(R()-.5)*60:0)+(o.tear&&now-o.ts<260?(R()-.5)*34:0));
  if(!still){
   if(!o.tear&&now>o.next){o.tear=1;o.ts=now;o.td=3800+R()*1400;o.tx=W*.24+R()*W*.52;o.hw=130+R()*80;o.gm=40+R()*6;buildCrack(o);o.dr=[(R()*2-1)*o.hw*.5,(R()*2-1)*o.hw*.5,9+R()*8,9+R()*8]}
   if(o.tear){p=(now-o.ts)/o.td;if(p>=1){o.tear=0;o.next=now+6500+R()*7500;p=0;o.ey.style.opacity=0;o.kx.innerHTML="";o.G=null}}}
  var open=o.tear?ss(0,.1,p)*(1-ss(.9,1,p)):0;
  g=o.gm*open;var tint=o.tear?ss(.1,.25,p)*(1-ss(.85,.97,p)):0;
  for(var y=0;y<H;y++){var rel=y-y0;if(g>.5){for(var z=0;z<(W>>1);z++)nzr[z]=R()*255}
   for(var x=0;x<W;x++){
    var sr=rel,sx=x,inT=false;
    if(g>.5){var dxx=Math.abs(x-o.tx);
     if(dxx<o.hw){var lens=Math.sqrt(Math.max(0,1-(dxx/o.hw)*(dxx/o.hw))),gx=g*(.9+.2*(((x>>3)*37)%7)/7)*(.25+.75*lens);
      var ad=Math.abs(rel),hg=gx/2;if(ad<hg){if(ad>hg-1.5){var lp=215+R()*40|0;u[y*W+x]=col(lp,(lp*.78)|0,(lp*.8)|0,240);continue}var fall=1-.35*(ad/hg),nv=(nzr[x>>1]*.6+R()*255*.4)*fall*(y%2?.82:1),v=(30+nv*.55)|0;u[y*W+x]=col(Math.min(255,v+((x+y)%9<1?18:0)),(v*(1-.55*tint))|0,(v*(1-.5*tint)+(dxx>o.hw-6?14:0))|0,228);continue}
      sr=rel>0?rel-gx/2:rel+gx/2;sx=x+Math.round(Math.sin(sr*.5+t*20)*5*Math.min(1,g/20))}}
    if(sr<-8||sr>8)continue;
    var lvl=Math.exp(-sr*sr/9),xx=(((sx-o.dxr[sr+8])%W)+W)%W;
    if(sr===0&&!still){var vv=205+R()*50|0;u[y*W+x]=col(vv,vv-20,vv-20,235);continue}
    var nn=R();if(nn<lvl*.95){var v2=95+R()*160|0;u[y*W+x]=col(v2,v2-22,v2-22,(255*lvl*(.4+R()*.6))|0)}}}
  var cx=o.cx;cx.putImageData(o.img,0,0);
  if(o.tear){
   updateCrack(o,p,y0,g);
   // the eye in the gap
   var vis=ss(.08,.14,p)*(1-ss(.9,.96,p));o.ey.style.opacity=vis.toFixed(2);o.ey.style.left=(o.tx/W*100).toFixed(2)+"%";o.ey.style.top=(y0/H*100).toFixed(2)+"%";
   o.e.style.transform="scaleY("+eyeScale(p).toFixed(3)+")";o.pp.setAttribute("r",(3.6+2.4*(1-ss(.18,.34,p))+.6*Math.sin(now/230)*(p>.34?1:0)).toFixed(2));if(now>o.sacc&&now-o.ptr>2500){o.sacc=now+650+R()*1200;o.lk.style.transform="translate("+((R()*2-1)*9).toFixed(1)+"px,"+((R()*2-1)*3).toFixed(1)+"px)"}o.tr.style.strokeDashoffset=(1-ss(.4,.74,p)).toFixed(3);o.tr.style.opacity=(1-ss(.84,.95,p)).toFixed(2)}}
 function loop(now){raf=0;if(!vis.size)return;if(now-last>40){last=now;vis.forEach(function(o){draw(o,now,false)})}raf=requestAnimationFrame(loop)}
 var io=("IntersectionObserver" in window)?new IntersectionObserver(function(es){es.forEach(function(e){var o=e.target._o;if(!o)return;if(e.isIntersecting)vis.add(o);else vis.delete(o)});if(!RM&&vis.size&&!raf)raf=requestAnimationFrame(loop)},{rootMargin:"120px"}):null;
 document.querySelectorAll("section").forEach(function(sec,n){var o=mkRow(n);o.d._o=o;rows.push(o);sec.insertBefore(o.d,sec.firstChild);
  if(RM||!io)draw(o,1000+n*500,true);else io.observe(o.d)});
 if(!RM)document.addEventListener("pointermove",function(e){
  rows.forEach(function(o){if(!vis.has(o)||!o.tear)return;var b=o.lk.getBoundingClientRect();
   o.ptr=performance.now();var dx=e.clientX-(b.left+b.width/2),dy=e.clientY-(b.top+b.height/2),m=Math.max(1,Math.hypot(dx,dy)),k=Math.min(1,m/260);
   o.lk.style.transform="translate("+(dx/m*10*k).toFixed(1)+"px,"+(dy/m*3.5*k).toFixed(1)+"px)"})},{passive:true});
})();
(function(){
 function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
 function f(n){return n.toFixed(1)}
 function limb(r,x,y,ang,len,w0,dark){
  var n=Math.max(10,len/6|0),st=len/n,P=[],W=[],A=[],a=ang,px=x,py=y,dv=(r()-.5)*.1;
  for(var i=0;i<=n;i++){var t=i/n;P.push([px,py]);A.push(a);W.push(Math.max(.18,w0*Math.pow(1-t,.9)));
   dv+=(r()-.5)*.16;dv*=.9;a+=dv+(Math.PI/2-a)*.05;px+=Math.cos(a)*st;py+=Math.sin(a)*st}
  var L=[],R=[],H=[];
  for(i=0;i<P.length;i++){var p0=P[Math.max(0,i-1)],p1=P[Math.min(P.length-1,i+1)],dx=p1[0]-p0[0],dy=p1[1]-p0[1],m=Math.hypot(dx,dy)||1,nx=-dy/m,ny=dx/m,w=W[i]/2;
   L.push([P[i][0]+nx*w,P[i][1]+ny*w]);R.push([P[i][0]-nx*w,P[i][1]-ny*w]);H.push([P[i][0]+nx*w*.4,P[i][1]+ny*w*.4])}
  var d='M'+f(L[0][0])+' '+f(L[0][1]);
  for(i=1;i<L.length;i++)d+='L'+f(L[i][0])+' '+f(L[i][1]);
  for(i=R.length-1;i>=0;i--)d+='L'+f(R[i][0])+' '+f(R[i][1]);
  var o='<path class="hs'+(dark?' d':'')+'" d="'+d+'Z"/>';
  if(w0>1.3){var hd='M'+f(H[2][0])+' '+f(H[2][1]);for(i=3;i<H.length-2;i++)hd+='L'+f(H[i][0])+' '+f(H[i][1]);o+='<path class="hh" d="'+hd+'"/>'}
  var e=P[P.length-1];
  if(w0>.6){for(var k=0;k<2;k++){var ea=a+(r()-.5)*1.4;o+='<path class="hf" d="M'+f(e[0])+' '+f(e[1])+'q'+f(Math.cos(ea)*3)+' '+f(Math.sin(ea)*4)+' '+f(Math.cos(ea)*5+(r()-.5)*4)+' '+f(Math.sin(ea)*10)+'"/>'}}
  return {s:o,P:P,W:W,A:A}}
 function branch(r,par,len,w0,dark,depth){
  var o='',nb=3+(r()*3|0);
  for(var b=0;b<nb;b++){var t=.12+r()*.7,i=Math.round(t*(par.P.length-1)),p=par.P[i],side=r()<.5?-1:1,
   bl=len*(.25+r()*.35),bw=Math.max(.5,par.W[i]*.65);
   var c=limb(r,p[0],p[1],par.A[i]+side*(.5+r()*.7),bl,bw,dark);o+=c.s;
   if(depth>1)o+=branch(r,c,bl,bw,dark,depth-1)}
  return o}
 function build(svg,seed){var r=rng(seed),h="",n=5+(r()*2|0);
  for(var i=0;i<n;i++){var x=6+i*(58/n)+r()*6,len=170+r()*250,w0=1.6+r()*1.6,dark=i%3==2,
   m=limb(r,x,-3,Math.PI/2+(r()-.5)*.7,len,w0,dark);
   h+='<g class="th" style="--sd:'+(5.5+r()*4.5).toFixed(1)+'s;--sa:'+(.6+r()*1.2).toFixed(1)+'deg;--sl:'+(-r()*7).toFixed(1)+'s;--gl:'+(i*.3).toFixed(1)+'s"><g class="hg" style="--gd:'+(6+r()*6).toFixed(1)+'s;--il:'+(r()*1.2).toFixed(1)+'s">'+m.s+branch(r,m,len,w0,dark,2)+'</g></g>'}
  svg.innerHTML='<g class="all">'+h+'</g>'}
 var S=document.querySelectorAll('svg[id=hair]');for(var i=0;i<S.length;i++)build(S[i],5171+i*613);
})();

(function(){
 var c=document.getElementById("pls");if(!c||!c.getContext)return;
 var x=c.getContext("2d"),W=0,H=0,dp=1,N=0,V=[],M=[],head=0,T=0,last=0,run=false,
  SP=130,CY=16,beats=[],nextB=.4,drips=[],bpm=72,glitch=0,lastPh=0,spiked=false,seed=7;
 function rnd(){seed=(seed*16807)%2147483647;return seed/2147483647}
 var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function size(){var w=c.clientWidth||600;dp=Math.min(2,window.devicePixelRatio||1);W=Math.round(w*dp);H=Math.round(60*dp);c.width=W;c.height=H;
  var n=Math.max(60,Math.round(w));if(n!==N){N=n;V=new Array(N).fill(0);M=new Array(N).fill(9);head=0}
  if(reduce)stat();else draw()}
 function g(u,m,w){var d=(u-m)/w;return Math.exp(-d*d)}
 function beat(u){return .13*g(u,.12,.045)-.16*g(u,.27,.014)+1*g(u,.30,.02)-.32*g(u,.345,.02)+.24*g(u,.56,.075)}
 function step(dt){
  T+=dt;var tc=T%16,ph=tc<7?0:tc<11?1:tc<11.7?2:tc<13?3:4,v=0,mode=0;
  if(ph!==lastPh){if(ph===2){spiked=true;glitch=1;for(var k=0;k<4;k++)drips.push({x:head+(rnd()-.5)*30,y:CY,vy:0,l:6+rnd()*18,a:1,w:1+rnd()*1.4})}if(ph===0){beats=[];nextB=T+.3}lastPh=ph}
  if(ph===0||ph===4){
   var f=ph===0?tc/7:(tc-13)/3;
   if(T>=nextB){var amp=ph===0?1-.6*f:.35+.4*f,per=ph===0?.85+f*.9:1.5-f*.5;
    beats.push({t:T,a:amp});bpm=Math.round(60/per);
    if(ph===0&&tc>3.6&&rnd()<.45)beats.push({t:T+.3,a:amp*.45});
    nextB=T+per*(.85+rnd()*.3)}
   for(var i=beats.length-1;i>=0;i--){var u=(T-beats[i].t)/1.0;if(u>1){beats.splice(i,1);continue}if(u>=0)v+=beats[i].a*beat(u)}
   v+=(rnd()-.5)*.03
  }else if(ph===1){mode=2;var q=(tc-7)/4;v=(rnd()-.5)*.012+Math.sin(T*47)*.012*(rnd()<.02+q*.1?4:1);bpm=0}
  else if(ph===2){mode=3;v=(Math.sin(T*173+rnd()*3)>0?1:-1)*(.5+rnd()*.9)*(rnd()<.85?1:-.4);bpm=-1}
  else{mode=3;var d=(tc-11.7)/1.3;v=(Math.sin(T*61)+Math.sin(T*97+1)*.7)*.28*(1-d)+(rnd()-.5)*.25*(1-d);bpm=-2}
  V[head]=v;M[head]=mode;head=(head+1)%N;
  for(var j=drips.length-1;j>=0;j--){var p=drips[j];p.vy+=.04;p.y+=p.vy;p.l+=.2;p.a-=.006;if(p.a<=0||p.y>70)drips.splice(j,1)}
  if(glitch>0)glitch=Math.max(0,glitch-.012)}
 var COL=["#a3121a","#c4161f","#7e9a9c","#ff3a44"];
 function draw(){
  x.clearRect(0,0,W,H);var sx=W/N,y0=H*.58,sc=H*.36;
  x.lineCap="round";x.lineJoin="round";
  // dead baseline
  x.strokeStyle="rgba(120,140,140,.14)";x.lineWidth=dp;x.setLineDash([3*dp,5*dp]);x.beginPath();x.moveTo(0,y0);x.lineTo(W,y0);x.stroke();x.setLineDash([]);
  var pass=[[3.6,.22,0,1],[1.7,1,0,1],[.8,.9,1,1]];
  for(var ps=0;ps<3;ps++){
   for(var i=0;i<N-1;i++){var a=(head-1-i+N*2)%N,b=(a-1+N)%N,age=i/N;if(i<2)continue;var al=Math.pow(1-age,1.4);if(al<.02)continue;
    var m=M[a],cx=(a)*sx,px=(b)*sx;if(b>a||m===9||M[b]===9)continue;
    var ya=y0-Math.max(-1.6,Math.min(1.6,V[a]))*sc,yb=y0-Math.max(-1.6,Math.min(1.6,V[b]))*sc;
    x.globalAlpha=al*pass[ps][1];x.lineWidth=pass[ps][0]*dp;
    x.strokeStyle=ps===2?(m===3?"#ffe9e3":m===2?"#b7c9c9":"#f0d4cb"):COL[m];
    if(ps===0){x.shadowColor=COL[m];x.shadowBlur=8*dp}else x.shadowBlur=0;
    if(ps===1&&glitch>0.2){x.save();x.globalAlpha=al*.35*glitch;x.strokeStyle="#2f8a92";x.beginPath();x.moveTo(px+2.2*dp,yb);x.lineTo(cx+2.2*dp,ya);x.stroke();x.restore()}
    x.beginPath();x.moveTo(px,yb);x.lineTo(cx,ya);x.stroke()}
  }
  x.shadowBlur=0;x.globalAlpha=1;
  // head
  var hh=(head-1+N)%N,hx=hh*sx,hy=y0-Math.max(-1.6,Math.min(1.6,V[hh]))*sc;
  var gr=x.createRadialGradient(hx,hy,0,hx,hy,9*dp);gr.addColorStop(0,"rgba(255,230,220,.95)");gr.addColorStop(.3,"rgba(220,40,50,.6)");gr.addColorStop(1,"rgba(196,22,31,0)");
  x.fillStyle=gr;x.fillRect(hx-10*dp,hy-10*dp,20*dp,20*dp);
  // blood drips
  for(var k=0;k<drips.length;k++){var p=drips[k],dx=p.x*sx/1,len=p.l*dp*.6;x.globalAlpha=Math.max(0,p.a);x.strokeStyle="#8f0d14";x.lineWidth=p.w*dp;x.beginPath();x.moveTo(dx,y0-8*dp);x.lineTo(dx,Math.min(H,y0-8*dp+len+p.y*dp*.5));x.stroke();x.fillStyle="#b3121b";x.beginPath();x.arc(dx,Math.min(H,y0-8*dp+len+p.y*dp*.5),p.w*dp*.9,0,6.3);x.fill()}
  x.globalAlpha=1;
  // glitch tears
  if(glitch>0){for(var t=0;t<3;t++){var sy=Math.floor(rnd()*H),sh=Math.max(2,Math.floor((2+rnd()*8)*dp)),off=(rnd()-.5)*40*dp*glitch;x.drawImage(c,0,sy,W,sh,off,sy,W,sh)}}
  // readout
  x.font=(10*dp)+"px monospace";x.textAlign="right";x.fillStyle=bpm>0?"rgba(196,22,31,.85)":"rgba(160,180,180,.7)";
  var txt=bpm>0?("BPM "+(bpm<100?"0":"")+bpm):bpm===0?"BPM 000":bpm===-1?"BPM ???":"BPM ---";
  if(bpm===-1&&rnd()<.5)txt="BPM "+(100+(rnd()*140|0));
  x.fillText("♥ "+txt,W-6*dp,12*dp);x.textAlign="left"}
 function stat(){seed=11;T=0;for(var i=0;i<N;i++)step(1/SP);drips=[];glitch=0;draw()}
 function loop(ts){if(!run)return;requestAnimationFrame(loop);if(ts-last<33)return;var dt=Math.min(.1,(ts-last)/1000);last=ts;
  var n=Math.max(1,Math.round(dt*SP*(N/(c.clientWidth||N))));for(var i=0;i<n;i++)step(1/SP);draw()}
 size();addEventListener("resize",size);
 if(!reduce&&window.IntersectionObserver){new IntersectionObserver(function(e){var on=e[0].isIntersecting;if(on&&!run){run=true;last=performance.now();requestAnimationFrame(loop)}else if(!on)run=false}).observe(c)}
})();

(function(){
 var TM=function(a,b){return LANG==="ru"?a:b};
 // ---------- shared defs: silhouettes ----------
 var d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width","0");d.setAttribute("height","0");d.setAttribute("aria-hidden","true");d.style.cssText="position:absolute;width:0;height:0";
 d.innerHTML='<defs>'+
  '<symbol id="sh0" viewBox="0 0 100 160"><g fill="#050303" stroke="#050303" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M101 64L66 82 58 98 101 122Z"/><path stroke="none" d="M66 82Q52 78 47 90Q47 106 60 106Q68 98 66 82Z"/><g fill="none"><path stroke-width="4.4" d="M52 84Q40 76 30 73Q21 72 14 80"/><path stroke-width="4.2" d="M49 89Q34 86 22 87Q10 88 6 98"/><path stroke-width="4" d="M49 95Q35 97 24 101Q14 106 12 117"/><path stroke-width="3.6" d="M52 101Q40 109 32 118Q26 126 28 134"/><path stroke-width="4.6" d="M62 104Q58 118 48 126Q42 132 46 140"/></g></g></symbol>'+
  '<symbol id="sh1" viewBox="0 0 100 160"><g fill="#050303" stroke="#050303" stroke-linejoin="round" stroke-linecap="round"><path stroke="none" d="M40 58C40 32 82 32 82 58C86 92 82 128 92 160L28 160C40 128 37 92 40 58Z"/><path fill="none" stroke-width="2" d="M38 72Q28 104 33 150"/><path fill="none" stroke-width="1.6" d="M84 74Q92 108 86 150"/><path fill="none" stroke-width="1.4" d="M44 120Q40 140 46 158"/></g></symbol>'+
  '<symbol id="sh2" viewBox="0 0 100 160"><g transform="rotate(-9 64 82)"><g fill="#050303" stroke="#050303" stroke-linejoin="round" stroke-linecap="round"><path stroke="none" d="M42 66C42 36 86 36 86 66C88 96 76 122 64 128C52 122 40 96 42 66Z"/><path stroke="none" d="M40 64C38 100 40 140 30 160L52 160L50 120ZM88 64C90 100 90 140 98 160L78 160L78 120Z"/></g><ellipse cx="55" cy="76" rx="3.4" ry="6" fill="rgba(238,170,110,.55)"/><ellipse cx="73" cy="76" rx="3.4" ry="6" fill="rgba(238,170,110,.55)"/><path d="M53 106Q64 116 75 106" fill="none" stroke="rgba(238,170,110,.38)" stroke-width="1.6" stroke-linecap="round"/></g></symbol>'+
  '</defs>';
 document.body.insertBefore(d,document.body.firstChild);
 // hover: rotate through the silhouettes
 var cards=document.getElementById("cards"),cur=null,tm=0,reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function nxt(card){var sv=card.querySelectorAll(".shd svg");if(!sv.length)return;var on=-1;for(var i=0;i<sv.length;i++)if(sv[i].classList.contains("on"))on=i;if(on>=0)sv[on].classList.remove("on");sv[(on+1+(Math.random()<.4?1:0))%sv.length].classList.add("on")}
 if(cards){
  cards.addEventListener("mouseover",function(e){var c=e.target.closest&&e.target.closest(".card");if(c===cur)return;clearInterval(tm);cur=c;if(c&&!reduce)tm=setInterval(function(){nxt(c)},3300)});
  cards.addEventListener("mouseleave",function(){clearInterval(tm);cur=null});
  // touch: shadow appears once when a card passes the middle of the screen
  if(window.matchMedia&&matchMedia("(hover:none)").matches&&window.IntersectionObserver){
   var io=new IntersectionObserver(function(es){es.forEach(function(en){var c=en.target;if(en.isIntersecting&&!c._s&&Math.random()<.5){c._s=1;c.classList.add("shw");setTimeout(function(){nxt(c)},1800);setTimeout(function(){c.classList.remove("shw");setTimeout(function(){c._s=0},9000)},4200)}})},{rootMargin:"-42% 0px -42% 0px"});
   var obs=function(){cards.querySelectorAll(".card").forEach(function(c){if(!c._o){c._o=1;io.observe(c)}})};obs();
   new MutationObserver(obs).observe(cards,{childList:true})}
 }
 // ---------- eye instead of the cursor ----------
 if(!reduce&&window.matchMedia&&matchMedia("(pointer:fine)").matches){
  var ce=document.createElement("div");ce.id="ceye";ce.setAttribute("aria-hidden","true");
  ce.innerHTML='<svg viewBox="0 0 60 36"><g class="ev"><path d="M2 18Q30 -4 58 18Q30 40 2 18Z" fill="#e8dbcf" stroke="#14080a" stroke-width="1.6"/><path d="M6 18Q14 14 20 15M54 18Q46 14 40 15M12 22Q18 21 22 21M48 22Q42 21 38 21M30 7V10M20 9L22 12" fill="none" stroke="#b3121b" stroke-width=".9"/><g class="pu"><circle cx="30" cy="18" r="10.5" fill="#7d0d14"/><circle cx="30" cy="18" r="10.5" fill="none" stroke="#2a0407" stroke-width="1.2"/><circle cx="30" cy="18" r="4.6" fill="#050203"/><circle cx="27" cy="14.6" r="1.7" fill="#fff" opacity=".85"/></g></g></svg>';
  document.body.appendChild(ce);
  var mx=-99,my=-99,seen=false,active=false,pu=ce.querySelector(".pu");
  addEventListener("pointermove",function(e){if(e.pointerType&&e.pointerType!=="mouse")return;mx=e.clientX;my=e.clientY;if(!seen){seen=true;setTimeout(fire,16000+Math.random()*16000)}if(active){ce.style.transform="translate("+mx+"px,"+my+"px)"}},{passive:true});
  function off(){active=false;ce.classList.remove("on");document.documentElement.classList.remove("eyec")}
  function fire(){
   if(document.hidden||mx<0){setTimeout(fire,8000);return}
   active=true;ce.style.transform="translate("+mx+"px,"+my+"px)";ce.classList.remove("on");void ce.offsetWidth;ce.classList.add("on");document.documentElement.classList.add("eyec");
   var n=0,iv=setInterval(function(){n++;if(!active||n>9){clearInterval(iv);return}pu.setAttribute("transform","translate("+((Math.random()-.5)*9).toFixed(1)+" "+((Math.random()-.5)*3).toFixed(1)+")")},150);
   setTimeout(off,1500);setTimeout(fire,42000+Math.random()*50000)}
  addEventListener("pointerdown",function(){if(active)off()},true)
 }
 // ---------- static and whisper at the end of the page ----------
 var ft=document.querySelector("footer"),stc=null,whp=null,lastFx=0;
 var WH=[["не оглядывайся","don't turn around"],["она уже здесь","she is already here"],["ты смотрел слишком долго","you looked too long"],["мы видим тебя","we can see you"],["осталось семь дней","seven days left"],["ещё один","one more"],["うしろ","うしろ"],["見ているよ","見ているよ"],["もうすぐ","もうすぐ"]];
 function noise(){var c=stc.getContext("2d"),w=stc.width,h=stc.height,im=c.createImageData(w,h),p=im.data;
  for(var i=0;i<p.length;i+=4){var v=Math.random()*255|0,r=Math.random()<.04;p[i]=r?255:v;p[i+1]=r?40:v*.85;p[i+2]=r?50:v*.85;p[i+3]=Math.random()<.5?255:120}
  c.putImageData(im,0,0);
  c.fillStyle="rgba(0,0,0,.65)";for(var y=0;y<h;y+=3)c.fillRect(0,y,w,1);
  var by=Math.random()*h|0;c.fillStyle="rgba(255,255,255,.35)";c.fillRect(0,by,w,2+Math.random()*4)}
 function whisper(){
  try{if(!sndOn||!actx||!sndNodes)return;var t=actx.currentTime+.05,n=3+(Math.random()*3|0);
   for(var i=0;i<n;i++){var src=actx.createBufferSource(),len=Math.floor(actx.sampleRate*.45),buf=actx.createBuffer(1,len,actx.sampleRate),dd=buf.getChannelData(0);for(var k=0;k<len;k++)dd[k]=Math.random()*2-1;src.buffer=buf;
    var bp=actx.createBiquadFilter();bp.type="bandpass";bp.Q.value=3.2;var f0=1400+Math.random()*1400;bp.frequency.setValueAtTime(f0,t);bp.frequency.linearRampToValueAtTime(f0*(.7+Math.random()*.7),t+.26);
    var g=actx.createGain(),a=.5+Math.random()*.4;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(a,t+.07);g.gain.exponentialRampToValueAtTime(.0001,t+.3);
    src.connect(bp);bp.connect(g);g.connect(sndNodes.m);src.start(t);src.stop(t+.34);t+=.22+Math.random()*.2}
  }catch(e){}}
 function endFx(){
  var now=Date.now();if(now-lastFx<90000)return;lastFx=now;
  if(!whp){whp=document.createElement("div");whp.id="whp";whp.setAttribute("aria-hidden","true");document.body.appendChild(whp)}
  var w=WH[Math.random()*WH.length|0],txt=(w[0]===w[1]||Math.random()<.25)?w[1]:TM(w[0],w[1]);
  whp.textContent=txt;whp.style.left=(6+Math.random()*50)+"%";whp.style.top=(18+Math.random()*55)+"%";whp.classList.remove("on");void whp.offsetWidth;whp.classList.add("on");
  whisper();
  if(reduce)return;
  if(!stc){stc=document.createElement("canvas");stc.id="stc";stc.width=200;stc.height=112;stc.setAttribute("aria-hidden","true");document.body.appendChild(stc)}
  var n=0;stc.classList.add("on");var iv=setInterval(function(){n++;noise();if(n>12){clearInterval(iv);stc.classList.remove("on")}},55);noise()}
 if(ft&&window.IntersectionObserver)new IntersectionObserver(function(es){if(es[0].isIntersecting)setTimeout(function(){var r=ft.getBoundingClientRect();if(r.top<innerHeight*.95)endFx()},500)},{threshold:.5}).observe(ft);
 // ---------- Konami: the forbidden reel ----------
 var KS=[38,38,40,40,37,39,37,39,66,65],kp=0,fb=null,fbn=null,fiv=0,prevOv="";
 var ITEMS=[["kairo",["Призраки приходят через интернет, а одиночество страшнее призраков.","Ghosts arrive through the internet, and loneliness is the scarier thing."]],
  ["kakashi",["Поиски пропавшей сестры в деревне, где слишком много пугал.","A search for a missing sister in a village with too many scarecrows."]],
  ["carved",["Городская легенда о женщине с разрезанным ртом и её единственном вопросе.","The urban legend of the slit-mouthed woman and her one question."]],
  ["reincarnation",["Съёмки фильма о старой резне, где граница между ролью и прошлым стирается.","A film shoot about an old massacre where the line between role and past blurs."]],
  ["phone2002",["Корейский хоррор, где призрак звонит прямо на телефон.","A Korean horror where a ghost calls straight through the phone."]],
  ["pontianak",["Малайзийский фильм о понтианак, женщине-призраке из местного фольклора.","A Malaysian film about the pontianak, a female ghost from local folklore."]],
  ["kaidan2007",["Хидэо Наката обращается к классическому японскому кайдану о проклятой любви.","Hideo Nakata turns to a classic Japanese kaidan about cursed love."]]];
 function fnoise(){var c=fbn.getContext("2d"),w=fbn.width,h=fbn.height,im=c.createImageData(w,h),p=im.data;for(var i=0;i<p.length;i+=4){var v=Math.random()*255|0;p[i]=v;p[i+1]=v*.8;p[i+2]=v*.8;p[i+3]=255}c.putImageData(im,0,0)}
 function closeF(){if(!fb)return;fb.hidden=true;clearInterval(fiv);document.documentElement.style.overflow=prevOv;removeEventListener("keydown",escF,true)}
 function escF(e){if(e.key==="Escape"){e.stopPropagation();closeF()}}
 function openF(){
  if(!fb){fb=document.createElement("div");fb.id="forb";fb.setAttribute("role","dialog");fb.setAttribute("aria-modal","true");document.body.appendChild(fb)}
  var li=ITEMS.filter(function(x){return F[x[0]]}).map(function(x){var f=F[x[0]];return '<li><b>'+esc(T(f.n))+'</b><i>'+f.y+'</i><span>'+esc(TM(x[1][0],x[1][1]))+'</span></li>'}).join("");
  fb.innerHTML='<canvas id="fbn" width="160" height="90" aria-hidden="true"></canvas><button type="button" class="fbx">'+TM("Закрыть","Close")+'</button><div class="fbw"><p class="fbk">● REC &nbsp;00:00:07 &nbsp;/&nbsp; '+TM("КАССЕТА БЕЗ НАЗВАНИЯ","UNLABELLED TAPE")+'</p><h2>'+TM("Запретная плёнка","The Forbidden Reel")+'</h2><p class="fbd">'+TM("Вы нашли плёнку, которой нет в каталоге. Семь фильмов, о которых говорят шёпотом.","You found a tape that is not in the catalogue. Seven films people mention in whispers.")+'</p><ol>'+li+'</ol><p class="fbf">'+TM("Никому не говорите, как вы сюда попали.","Do not tell anyone how you got here.")+'</p></div>';
  fbn=fb.querySelector("#fbn");fb.hidden=false;fb.scrollTop=0;prevOv=document.documentElement.style.overflow;document.documentElement.style.overflow="hidden";
  fb.querySelector(".fbx").addEventListener("click",closeF);fb.querySelector(".fbx").focus();addEventListener("keydown",escF,true);
  clearInterval(fiv);if(!reduce){fiv=setInterval(fnoise,90);fnoise()}else fnoise();
  whisper()}
 addEventListener("keydown",function(e){if(e.target&&/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;var k=e.keyCode;if(k===KS[kp]){kp++;if(kp===KS.length){kp=0;openF()}}else kp=(k===KS[0])?1:0});
 var lg=document.querySelector('footer img[data-img="logo_ha"]');
 if(lg){var tp=0,tt=0;lg.addEventListener("click",function(){var n=Date.now();if(n-tt>2500)tp=0;tt=n;tp++;if(tp>=7){tp=0;openF()}})}
})();

(function(){
 var TM=function(a,b){return LANG==="ru"?a:b},KEY="ha-curse",DAY=864e5;
 var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function ld(){try{return JSON.parse(localStorage.getItem(KEY)||"null")}catch(e){return null}}
 function sv(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
 var C=ld();
 var q=(location.search.match(/[?&]curse=(\w+)/)||[])[1];
 if(q==="off"){C=null;try{localStorage.removeItem(KEY)}catch(e){}}else if(q&&/^\d+$/.test(q)){C={t:Date.now()-(+q)*DAY,done:0};sv(C)}
 function el(){return Math.floor((Date.now()-C.t)/DAY)}
 function dn(n){return LANG==="ru"?(n===1?"день":(n>=2&&n<=4?"дня":"дней")):(n===1?"day":"days")}
 function mk(tag,id){var e=document.createElement(tag);e.id=id;document.body.appendChild(e);return e}
 // -------- banner --------
 var cb=null;
 function banner(){
  if(!C||C.done){if(cb)cb.hidden=true;return}
  var e=el(),left=7-e;if(e<2||left<1){if(cb)cb.hidden=true;return}
  if(!cb){cb=mk("button","cb");cb.type="button";cb.addEventListener("click",info)}
  var bars="";for(var i=0;i<7;i++)bars+='<line class="'+(i<e?'x':'')+'" x1="'+(4+i*6.4)+'" y1="2" x2="'+(4+i*6.4)+'" y2="12"/>';
  bars+='<path d="M0 12L46 2"/>';
  cb.innerHTML='<svg viewBox="0 0 46 14" aria-hidden="true">'+bars+'</svg><span>'+TM("Осталось ","")+'<b>'+left+'</b> '+dn(left)+TM(""," left")+'</span>';
  cb.setAttribute("aria-label",left+" "+dn(left));cb.hidden=false;cb.classList.toggle("hot",left<=2)}
 // -------- start --------
 var pending=false,fresh=false,_a=window.ach;
 window.ach=function(id){_a.apply(this,arguments);if(id==="tape"&&!pending){pending=true;if(!C||C.done){C={t:Date.now(),done:0};sv(C);fresh=true}else fresh=false}};
 var tp=document.getElementById("tape");
 function ring(){try{if(!sndOn||!actx||!sndNodes)return;var t=actx.currentTime+.05;for(var k=0;k<2;k++){var o1=actx.createOscillator(),o2=actx.createOscillator(),g=actx.createGain(),l=actx.createGain(),lf=actx.createOscillator();o1.frequency.value=440;o2.frequency.value=480;lf.frequency.value=20;l.gain.value=.5;lf.connect(l);l.connect(g.gain);g.gain.value=.0001;g.gain.setValueAtTime(.0001,t+k*1.5);g.gain.linearRampToValueAtTime(.18,t+k*1.5+.05);g.gain.setValueAtTime(.18,t+k*1.5+1);g.gain.linearRampToValueAtTime(.0001,t+k*1.5+1.05);o1.connect(g);o2.connect(g);g.connect(sndNodes.m);[o1,o2,lf].forEach(function(o){o.start(t+k*1.5);o.stop(t+k*1.5+1.1)})}}catch(e){}}
 var cph=null;
 function phone(){
  if(!cph){cph=mk("div","cph");cph.setAttribute("role","status")}
  var left=7-el(),msg=fresh?TM("Звонит телефон. В трубке голос: «Семь дней».","The phone rings. A voice says: “Seven days.”"):(left>0?TM("Ты уже слышал звонок. Осталось "+left+" "+dn(left)+".","You already heard the call. "+left+" "+dn(left)+" left."):TM("Время почти вышло.","Time is almost up."));
  cph.innerHTML='<span class="ph" aria-hidden="true">☎</span><p>'+esc(msg)+'</p>';cph.hidden=false;cph.classList.add("on");ring();
  setTimeout(function(){cph.classList.remove("on")},2800);setTimeout(function(){cph.hidden=true;banner()},6500);cph.onclick=function(){cph.hidden=true}}
 if(tp)new MutationObserver(function(){if(tp.hidden&&pending){pending=false;setTimeout(phone,500)}}).observe(tp,{attributes:true,attributeFilter:["hidden"]});
 // -------- info / pass on --------
 function pass(){
  var url=location.href.split("#")[0].split("?")[0];
  function done(){toast(TM("Плёнка передана","The tape is passed on"),TM("Ссылка скопирована. Отправь её тому, кого не жалко.","Link copied. Send it to someone you won't miss."))}
  try{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(url).then(done,function(){}) ;else done()}catch(e){done()}
  try{if(navigator.share&&matchMedia("(hover:none)").matches)navigator.share({title:"Horror Aesthetic",url:url}).catch(function(){})}catch(e){}
  C={t:Date.now(),done:1};sv(C);ach("pass");banner()}
 var cin=null;
 function info(){
  if(!cin){cin=mk("div","cin");cin.setAttribute("role","dialog")}
  var e=el(),left=7-e;
  cin.innerHTML='<p>'+esc(TM("Ты смотрел кассету "+(e?e+" "+dn(e)+" назад":"недавно")+".","You watched the tape "+(e?e+" "+dn(e)+" ago":"recently")+"."))+'</p><p class="sm">'+esc(TM("Проклятие снимается только одним способом: показать плёнку другому. Осталось "+left+" "+dn(left)+".","There is only one way out: show the tape to someone else. "+left+" "+dn(left)+" left."))+'</p><button type="button" class="c7btn" data-a="p">'+TM("Передать плёнку","Pass the tape on")+'</button> <button type="button" class="c7btn q" data-a="c">'+TM("Закрыть","Close")+'</button>';
  cin.hidden=false;cin.onclick=function(ev){var b=ev.target.closest&&ev.target.closest("button");if(!b)return;if(b.dataset.a==="p")pass();cin.hidden=true}}
 // -------- day seven --------
 function noise(cv){var c=cv.getContext("2d"),w=cv.width,h=cv.height,im=c.createImageData(w,h),p=im.data;for(var i=0;i<p.length;i+=4){var v=Math.random()*255|0,r=Math.random()<.03;p[i]=r?255:v;p[i+1]=r?40:v*.9;p[i+2]=r?50:v*.9;p[i+3]=255}c.putImageData(im,0,0)}
 var ev=false;
 function event(){
  if(ev)return;ev=true;
  var o=mk("div","c7");o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");
  o.innerHTML='<canvas class="c7n" width="200" height="112" aria-hidden="true"></canvas><div class="c7g"></div><svg class="c7h" viewBox="0 0 100 160" aria-hidden="true"><use href="#sh1"/></svg><svg class="c7a" viewBox="0 0 100 160" aria-hidden="true"><use href="#sh0"/></svg><div class="c7p"><i>☎</i>'+TM("Звонит телефон","The phone is ringing")+'</div><div class="c7t"><h2>'+TM("Прошло семь дней","Seven days have passed")+'</h2><p>'+TM("Она вышла из экрана. Покажи плёнку другому, и проклятие перейдёт к нему.","She has climbed out of the screen. Show the tape to someone else and the curse will pass to them.")+'</p></div><div class="c7b"><button type="button" class="c7btn" data-a="p">'+TM("Передать плёнку","Pass the tape on")+'</button><button type="button" class="c7btn q" data-a="a">'+TM("Принять судьбу","Accept your fate")+'</button></div>';
  var cv=o.querySelector(".c7n"),iv=0;document.documentElement.style.overflow="hidden";
  requestAnimationFrame(function(){o.classList.add("on")});ring();
  var T1=reduce?600:2600,T2=reduce?900:4000,T3=reduce?1200:5800,T4=reduce?1500:8200;
  setTimeout(function(){o.classList.add("st");if(!reduce){noise(cv);iv=setInterval(function(){noise(cv)},70)}ring()},T1);
  setTimeout(function(){o.classList.add("gl");if(iv){clearInterval(iv);iv=setInterval(function(){if(Math.random()<.3)noise(cv)},120)}},T2);
  setTimeout(function(){o.classList.add("hd")},T3);
  setTimeout(function(){o.classList.add("bt");var b=o.querySelector(".c7btn");if(b)b.focus()},T4);
  function end(){clearInterval(iv);o.classList.remove("on");document.documentElement.style.overflow="";setTimeout(function(){o.remove()},800)}
  o.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("button");if(!b||!o.classList.contains("bt"))return;
   if(b.dataset.a==="p"){pass();ach("curse");end()}
   else{C={t:C.t,done:1};sv(C);ach("curse");end();accept()}})}
 function accept(){
  toast(TM("Проклятие принято","Curse accepted"),TM("До конца визита она рядом.","She stays close until you leave."));
  mk("div","curt").setAttribute("aria-hidden","true");requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add("cursed")})});
  function pick(){if(!document.hidden){var cs=document.querySelectorAll(".card"),vis=[];for(var i=0;i<cs.length;i++){var r=cs[i].getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)vis.push(cs[i])}if(vis.length){var c=vis[Math.random()*vis.length|0];c.classList.add("shw");setTimeout(function(){c.classList.remove("shw")},4200)}}setTimeout(pick,6000+Math.random()*8000)}
  setTimeout(pick,3000)}
 // -------- init --------
 if(C&&!C.done){var e0=el();if(e0>=7)setTimeout(event,2600);else{banner();if(7-e0<=1&&!reduce)setTimeout(function(){var st=mk("canvas","c1");st.width=200;st.height=112;st.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:240;pointer-events:none;opacity:.45;image-rendering:pixelated";noise(st);setTimeout(function(){st.remove()},180)},3500)}}
})();

(function(){
 var TM=function(a,b){return LANG==="ru"?a:b},RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function mk(tag,id,par){var e=document.createElement(tag);if(id)e.id=id;(par||document.body).appendChild(e);return e}
 function st(k,def){try{var v=localStorage.getItem(k);return v===null?def:JSON.parse(v)}catch(e){return def}}
 function ss(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
 function today(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
 function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
 function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
 function noiseCv(cv){var c=cv.getContext("2d"),w=cv.width,h=cv.height,im=c.createImageData(w,h),p=im.data;for(var i=0;i<p.length;i+=4){var v=Math.random()*255|0;p[i]=v;p[i+1]=v*.9;p[i+2]=v*.9;p[i+3]=255}c.putImageData(im,0,0)}
 function flash(ms){if(RM)return;var c=mk("canvas","");c.width=160;c.height=90;c.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:240;pointer-events:none;opacity:.5;image-rendering:pixelated";noiseCv(c);setTimeout(function(){c.remove()},ms)}
 function whisper(){try{if(!sndOn||!actx||!sndNodes)return;var t=actx.currentTime+.05,n=4+(Math.random()*3|0);for(var i=0;i<n;i++){var src=actx.createBufferSource(),len=Math.floor(actx.sampleRate*.45),buf=actx.createBuffer(1,len,actx.sampleRate),dd=buf.getChannelData(0);for(var k=0;k<len;k++)dd[k]=Math.random()*2-1;src.buffer=buf;var bp=actx.createBiquadFilter();bp.type="bandpass";bp.Q.value=3.2;var f0=1400+Math.random()*1400;bp.frequency.setValueAtTime(f0,t);bp.frequency.linearRampToValueAtTime(f0*(.7+Math.random()*.7),t+.26);var g=actx.createGain();g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.5+Math.random()*.4,t+.07);g.gain.exponentialRampToValueAtTime(.0001,t+.3);src.connect(bp);bp.connect(g);g.connect(sndNodes.m);src.start(t);src.stop(t+.34);t+=.22+Math.random()*.2}}catch(e){}}

 // ================= 1. ghost tab =================
 var title0=document.title,fav=document.querySelector('link[rel~="icon"]'),fav0=fav?fav.href:null,tmr=0,hidAt=0;
 var EYE='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#050303"/><path d="M4 32Q32 6 60 32Q32 58 4 32Z" fill="#e8dbcf"/><circle cx="32" cy="32" r="13" fill="#9c0f18"/><circle cx="32" cy="32" r="6" fill="#050203"/></svg>');
 var MSG=[["👁 Она ждёт…","👁 She is waiting…"],["Вернись…","Come back…"],["Она за спиной","She is behind you"],["見ているよ","見ているよ"]];
 document.addEventListener("visibilitychange",function(){
  if(document.hidden){hidAt=Date.now();title0=document.title.indexOf("…")>-1&&tmr?title0:document.title;if(!fav){fav=document.createElement("link");fav.rel="icon";document.head.appendChild(fav)}fav0=fav0||"";fav.href=EYE;var i=0;document.title=TM(MSG[0][0],MSG[0][1]);clearInterval(tmr);tmr=setInterval(function(){i=(i+1)%MSG.length;document.title=TM(MSG[i][0],MSG[i][1])},2200)}
  else{clearInterval(tmr);tmr=0;document.title=title0;if(fav){if(fav0)fav.href=fav0;else fav.remove()}if(hidAt&&Date.now()-hidAt>2500)flash(180)}});

 // ================= 2. moon =================
 var age=((Date.now()-Date.UTC(2000,0,6,18,14))/864e5%29.530588853+29.530588853)%29.530588853,p=age/29.530588853;
 var MN=[["Новолуние","New moon"],["Растущий серп","Waxing crescent"],["Первая четверть","First quarter"],["Растущая луна","Waxing gibbous"],["Полнолуние","Full moon"],["Убывающая луна","Waning gibbous"],["Последняя четверть","Last quarter"],["Убывающий серп","Waning crescent"]];
 var full=age>13.3&&age<16.3,mi=Math.floor(p*8+.5)%8;
 function moonSvg(){var q=p<.5?p:1-p,r=9,k=Math.cos(2*Math.PI*q),rx=Math.abs(k)*r,sw=k>0?0:1,pth='M0 -'+r+' A '+r+' '+r+' 0 0 1 0 '+r+' A '+rx.toFixed(2)+' '+r+' 0 0 '+sw+' 0 -'+r+'Z';
  return '<svg viewBox="-10 -10 20 20" aria-hidden="true"><circle r="9" fill="#14191a" stroke="#4a5a5c" stroke-width=".6"/><g transform="'+(p<.5?'':'scale(-1 1)')+'"><path d="'+pth+'" fill="'+(full?'#ff6a72':'#d9e0dc')+'"/></g></svg>'}
 var mo=document.createElement("div");mo.id="moon";if(full)mo.className="full";var tk=document.getElementById("ticker");if(tk&&tk.parentNode)tk.parentNode.insertBefore(mo,tk);
 var lastL="";function moonTxt(){if(lastL===LANG)return;lastL=LANG;mo.innerHTML=moonSvg()+'<span>'+TM(MN[mi][0],MN[mi][1])+' · '+Math.round((1-Math.cos(2*Math.PI*p))/2*100)+'%'+(full?TM(" · сайт не спит"," · the site is awake"):"")+'</span>'}
 moonTxt();
 if(full){document.documentElement.classList.add("fullmoon");setTimeout(function(){ach("fullmoon")},1500)}

 // ================= 3. REC counter =================
 var rec=mk("div","rec"),t0=Date.now();rec.setAttribute("aria-hidden","true");
 function pad(n){return(n<10?"0":"")+n}
 setInterval(function(){var s=Math.floor((Date.now()-t0)/1000),h=Math.floor(s/3600);rec.className=h>=1?"err":"";rec.innerHTML='<i></i><b>'+(h>=1&&s%7<2?"REC ERR:"+pad(h)+":"+pad(s%60):"REC "+pad(h)+":"+pad(Math.floor(s%3600/60))+":"+pad(s%60))+'</b>';moonTxt()},1000);

 // ================= 4. fogged glass =================
 var idle=0,lastFog=Date.now()-240000,fog=null,fx=null,fogOn=false,FS=3,lastPt=null,wiped=0;
 function bump(){idle=0}
 ["pointermove","keydown","scroll","touchstart","click"].forEach(function(e){addEventListener(e,bump,{passive:true})});
 function hand(x,y,sc,rot){fx.save();fx.translate(x,y);fx.rotate(rot);fx.scale(sc,sc);fx.globalCompositeOperation="destination-out";fx.shadowColor="#000";fx.shadowBlur=7;fx.fillStyle="#000";fx.beginPath();fx.ellipse(0,0,24,30,0,0,7);fx.fill();var fa=[[-32,-26,-.5,36],[-14,-48,-.18,40],[6,-54,.04,42],[24,-46,.26,38],[38,-6,1.1,30]];fa.forEach(function(f){fx.save();fx.translate(f[0],f[1]);fx.rotate(f[2]);fx.beginPath();fx.roundRect?fx.roundRect(-6,-f[3],12,f[3]+6,6):fx.rect(-6,-f[3],12,f[3]+6);fx.fill();fx.restore()});fx.restore()}
 function writeTxt(x,y){fx.save();fx.globalCompositeOperation="destination-out";fx.shadowColor="#000";fx.shadowBlur=5;fx.fillStyle="#000";fx.strokeStyle="#000";fx.lineWidth=3;fx.font="700 "+Math.min(96,innerWidth/6)+"px 'Noto Sans JP','Hiragino Sans','Yu Gothic',sans-serif";fx.textAlign="center";var s="助けて";fx.fillText(s,x,y);var w=fx.measureText(s).width;for(var i=0;i<6;i++){var dx=x-w/2+w*(.1+Math.random()*.8),L=40+Math.random()*90;fx.lineWidth=2+Math.random()*2;fx.beginPath();fx.moveTo(dx,y+6);fx.lineTo(dx,y+6+L);fx.stroke()}fx.restore()}
 function startFog(){
  if(fogOn||RM||document.hidden)return;fogOn=true;lastFog=Date.now();wiped=0;lastPt=null;
  fog=mk("canvas","fog");fog.setAttribute("aria-hidden","true");fog.width=Math.ceil(innerWidth/FS);fog.height=Math.ceil(innerHeight/FS);fx=fog.getContext("2d");fx.scale(1/FS,1/FS);
  fx.fillStyle="rgba(176,196,198,.34)";fx.fillRect(0,0,innerWidth,innerHeight);
  for(var i=0;i<1800;i++){fx.fillStyle="rgba("+(190+Math.random()*50|0)+",215,215,"+(Math.random()*.12).toFixed(3)+")";fx.fillRect(Math.random()*innerWidth,Math.random()*innerHeight,3+Math.random()*9,3+Math.random()*9)}
  requestAnimationFrame(function(){fog.classList.add("on")});
  var W=innerWidth,H=innerHeight,sd=Math.random()<.5?.25:.72;
  setTimeout(function(){if(fogOn){hand(W*sd,H*.56,1.2,(Math.random()-.5)*.5);whisper()}},6500);
  setTimeout(function(){if(fogOn)hand(W*(sd+.1),H*.4,1.05,(Math.random()-.5)*.6)},9500);
  setTimeout(function(){if(fogOn){writeTxt(W*(.35+Math.random()*.3),H*.26);whisper()}},13500);
  setTimeout(function(){if(fog){fog.classList.add("out")}},30000);
  setTimeout(function(){if(fog){fog.remove();fog=null}fogOn=false},35500)}
 function wipe(x,y){if(!fogOn||!fx)return;fx.save();fx.globalCompositeOperation="destination-out";fx.shadowColor="#000";fx.shadowBlur=14;fx.strokeStyle="#000";fx.lineCap="round";fx.lineWidth=46;fx.beginPath();if(lastPt){fx.moveTo(lastPt[0],lastPt[1]);wiped+=Math.hypot(x-lastPt[0],y-lastPt[1])}else fx.moveTo(x,y);fx.lineTo(x+.1,y);fx.stroke();fx.restore();lastPt=[x,y];if(wiped>2500&&!ST.ach.fog)ach("fog")}
 addEventListener("pointermove",function(e){wipe(e.clientX,e.clientY)},{passive:true});
 addEventListener("pointerup",function(){lastPt=null});
 addEventListener("touchmove",function(e){var t=e.touches[0];if(t)wipe(t.clientX,t.clientY)},{passive:true});
 addEventListener("touchend",function(){lastPt=null});
 setInterval(function(){idle++;if(idle>=25&&!fogOn&&Date.now()-lastFog>360000&&!document.hidden&&!document.getElementById("c7")&&!(document.getElementById("forb")&&!document.getElementById("forb").hidden))startFog()},1000);
 window.__fog=startFog;if(/[?&]fog=1/.test(location.search))setTimeout(startFog,1200);

 // ================= 5. call at 3 a.m. =================
 var callEl=null,callBusy=false;
 function callOff(){if(callEl)callEl.hidden=true;callBusy=false;try{navigator.vibrate&&navigator.vibrate(0)}catch(e){}}
 function call(){
  if(callBusy)return;callBusy=true;ss("ha-call",today());
  if(!callEl){callEl=mk("div","call");callEl.setAttribute("role","dialog");callEl.setAttribute("aria-modal","true")}
  callEl.className="rg";callEl.hidden=false;
  callEl.innerHTML='<canvas width="160" height="90" aria-hidden="true"></canvas><div><div class="cn">'+TM("Неизвестный номер","Unknown number")+'</div><div class="cs">'+TM("входящий звонок · ","incoming call · ")+(function(){var d=new Date();return ("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2)})()+'</div><div class="ce"><svg viewBox="0 0 64 64" aria-hidden="true"><path d="M4 32Q32 6 60 32Q32 58 4 32Z" fill="#e8dbcf"/><circle cx="32" cy="32" r="12" fill="#9c0f18"/><circle cx="32" cy="32" r="5" fill="#050203"/></svg></div></div><div class="cw" aria-live="polite"></div><div><div class="cb"><div><button type="button" class="no" aria-label="'+TM("Отклонить","Decline")+'">✕</button><div class="cl">'+TM("Отклонить","Decline")+'</div></div><div><button type="button" class="ok" aria-label="'+TM("Ответить","Answer")+'">☎</button><div class="cl">'+TM("Ответить","Answer")+'</div></div></div></div>';
  var cv=callEl.querySelector("canvas"),cw=callEl.querySelector(".cw"),n=0,done=false,iv=0;
  function rg(){if(done)return;try{if(sndOn&&actx&&window.phoneRing)window.phoneRing()}catch(e){}try{navigator.vibrate&&navigator.vibrate([500,250,500])}catch(e){}if(++n<7)setTimeout(rg,2600);else miss()}
  function miss(){if(done)return;done=true;callOff();toast(TM("Пропущенный вызов (1)","Missed call (1)"),TM("Неизвестный номер. Перезвонить нельзя.","Unknown number. You cannot call back."))}
  rg();
  callEl.querySelector(".no").onclick=function(){done=true;callOff();toast(TM("Вызов отклонён","Call declined"),TM("Она перезвонит.","She will call back."))};
  callEl.querySelector(".ok").onclick=function(){if(done)return;done=true;callEl.className="sn";iv=setInterval(function(){noiseCv(cv)},70);noiseCv(cv);whisper();
   var L=[["……","……"],["みたな","みたな"],["ななにち","ななにち"],["Семь дней.","Seven days."]],i=0;cw.textContent="";
   var s=setInterval(function(){if(i>=L.length){clearInterval(s);setTimeout(function(){clearInterval(iv);callOff();toast(TM("Соединение прервано","Call dropped"),"…");ach("phone")},1600);return}cw.textContent=TM(L[i][0],L[i][1]);if(i>0)whisper();i++},1500)}}
 function chk(){var h=new Date().getHours();if(h===3&&st("ha-call","")!==today()&&!document.hidden&&!callBusy&&!document.getElementById("c7"))call()}
 setTimeout(chk,9000);setInterval(chk,30000);window.__call=call;
 /* the phone also rings by itself after a while on the page, like the fog: about 2.5 min in, then at most once per 20 min, only when you are not touching the screen */
 var t0=Date.now(),lastRing=0;
 setInterval(function(){if(document.hidden||callBusy||fogOn||document.documentElement.classList.contains("ha-calm")||document.getElementById("c7")||document.getElementById("cu"))return;var now=Date.now();if(now-t0>150000&&now-lastRing>1200000&&idle>=6){lastRing=now;call()}},4000);
})();
(function(){
 var TM=function(a,b){return LANG==="ru"?a:b};
 function st(k,def){try{var v=localStorage.getItem(k);return v===null?def:JSON.parse(v)}catch(e){return def}}
 function ss(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
 function today(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
 function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
 function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
 // ================= spirit board =================
 var POS={};
 (function(){var A="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var r=0;r<2;r++){var R=r?186:150;for(var i=0;i<13;i++){var a=(-48+96*i/12)*Math.PI/180;POS[A[r*13+i]]=[200+R*Math.sin(a),-30+R*Math.cos(a)]}}
  for(var d=0;d<10;d++)POS["0123456789"[d]]=[110+d*20,192];POS.YES=[62,34];POS.NO=[338,34];POS.BYE=[200,218]})();
 function boardSvg(){var o='<svg viewBox="0 0 400 236" id="ou-svg" aria-hidden="true"><rect x="3" y="3" width="394" height="230" fill="none" stroke="#6b4e22" stroke-width="1.4"/><circle cx="62" cy="34" r="0" />';
  Object.keys(POS).forEach(function(k){var p=POS[k];o+='<text x="'+p[0].toFixed(1)+'" y="'+p[1].toFixed(1)+'"'+(k.length>1?' class="sm"':'')+'>'+(k==="YES"?TM("ДА","YES"):k==="NO"?TM("НЕТ","NO"):k==="BYE"?"GOODBYE":k)+'</text>'});
  o+='<g id="ou-pl" transform="translate(200 120)"><path d="M0 -24C26 -24 32 -2 19 20L0 32L-19 20C-32 -2 -26 -24 0 -24Z" fill="#2a1b0c" stroke="#9a7a3c" stroke-width="1.4"/><circle cx="0" cy="-4" r="9" fill="rgba(216,195,154,.14)" stroke="#d8c39a" stroke-width="1.2"/></g></svg>';return o}
 var ouBusy=false,plx=200,ply=120;
 function plSet(x,y){plx=x;ply=y;var p=document.getElementById("ou-pl");if(p)p.setAttribute("transform","translate("+x.toFixed(1)+" "+(y+5).toFixed(1)+")")}
 function moveTo(k,ms,cb){var t=POS[k],x0=plx,y0=ply,t0=performance.now();function f(n){var u=Math.min(1,(n-t0)/ms),e=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2,j=u<1?(Math.random()-.5)*1.6:0;if(!document.getElementById("ou-pl"))return;plSet(x0+(t[0]-x0)*e+j,y0+(t[1]-y0)*e+j);if(u<1)requestAnimationFrame(f);else setTimeout(cb,520+Math.random()*300)}requestAnimationFrame(f)}
 function ask(){
  var q=document.getElementById("ou-q"),out=document.getElementById("ou-out");if(!q||ouBusy)return;
  var v=q.value.trim();if(!v){out.innerHTML='<p>'+TM("Сначала задайте вопрос.","Ask a question first.")+'</p>';q.focus();return}
  var r=REVIEWS[hash(v.toLowerCase()+today())%REVIEWS.length],f=F[r.id],word=(f.n.en||"").toUpperCase().replace(/[^A-Z]/g,"").slice(0,9);
  ouBusy=true;var b=document.getElementById("ou-b");if(b)b.disabled=true;out.innerHTML='<p class="sp"></p>';
  var seq=word.split("").concat(["BYE"]),i=0,sp=out.querySelector(".sp");
  (function step(){if(!document.getElementById("ou-pl")){ouBusy=false;return}
   if(i>=seq.length){var o=document.getElementById("ou-out");if(o)o.innerHTML='<b>'+esc(T(f.n))+'</b><em>'+f.y+'</em><p>'+esc(T(r.s))+'</p>';ouBusy=false;if(b)b.disabled=false;ach("ouija");return}
   var k=seq[i++];moveTo(k,k==="BYE"?1400:650+Math.random()*500,function(){if(k!=="BYE"){var s=document.querySelector("#ou-out .sp");if(s)s.textContent+=k}step()})})();
}
 // ================= ghost of the day =================
 var GH={w:640,h:360},gstate=null,gmiss=0;
 var FIG=null;
 function figPath(){if(!FIG)FIG=new Path2D("M40 58C40 32 82 32 82 58C86 92 82 128 92 160L28 160C40 128 37 92 40 58Z");return FIG}
 function fig(c,x,y,s,al,eyes){c.save();c.translate(x-61*s,y-96*s);c.scale(s,s);c.globalAlpha=al;c.fillStyle=eyes?"#b9c8c4":"#7f9490";c.fill(figPath());c.globalAlpha=1;if(eyes){c.fillStyle="#e0222c";c.shadowColor="#ff2a35";c.shadowBlur=10;c.beginPath();c.ellipse(52,64,3,5,0,0,7);c.ellipse(70,64,3,5,0,0,7);c.fill()}c.restore()}
 function scene(cv,seed){var c=cv.getContext("2d"),R=rng(seed),W=GH.w,H=GH.h;
  var g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,"#0a1514");g.addColorStop(1,"#030607");c.fillStyle=g;c.fillRect(0,0,W,H);
  var m=c.createRadialGradient(W*(.2+R()*.6),H*.18,0,W*.5,H*.2,W*.6);m.addColorStop(0,"rgba(150,190,185,.28)");m.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=m;c.fillRect(0,0,W,H);
  for(var i=0;i<11;i++){var x=R()*W,w=10+R()*26,hh=H*(.7+R()*.4),al=.55+R()*.4;c.fillStyle="rgba(4,9,9,"+al+")";c.beginPath();c.moveTo(x-w/2,H);c.lineTo(x-w*.32,H-hh);c.lineTo(x+w*.32,H-hh);c.lineTo(x+w/2,H);c.fill();
   c.strokeStyle="rgba(4,9,9,"+al+")";c.lineWidth=2;for(var k=0;k<3;k++){var by=H-hh*(.35+R()*.5),dir=R()<.5?-1:1;c.beginPath();c.moveTo(x,by);c.lineTo(x+dir*(30+R()*60),by-(10+R()*40));c.stroke()}}
  for(var f=0;f<9;f++){var fx=R()*W,fy=H*(.45+R()*.5),fr=70+R()*130,gr=c.createRadialGradient(fx,fy,0,fx,fy,fr);gr.addColorStop(0,"rgba(120,150,148,.16)");gr.addColorStop(1,"rgba(120,150,148,0)");c.fillStyle=gr;c.fillRect(fx-fr,fy-fr,fr*2,fr*2)}
  var px=W*(.12+R()*.76),py=H*(.5+R()*.38);fig(c,px,py,.62,.15,false);
  for(var n=0;n<2600;n++){c.fillStyle="rgba(200,220,220,"+(R()*.08).toFixed(3)+")";c.fillRect(R()*W,R()*H,1+R()*2,1+R()*2)}
  return {x:px,y:py,img:c.getImageData(0,0,W,H)}}
 function ghostUi(){
  var cv=document.getElementById("gh-cv"),msg=document.getElementById("gh-msg");if(!cv)return;
  cv.width=GH.w;cv.height=GH.h;var seed=hash("ghost"+today()),S=scene(cv,seed),c=cv.getContext("2d"),sv=st("ha-ghost",{d:"",n:0}),found=sv.d===today();
  function reveal(){var n=0,iv=setInterval(function(){c.putImageData(S.img,0,0);var a=Math.min(1,n/12);fig(c,S.x,S.y,.62,.15+.75*a,a>.4);if(n%5===0&&n<20){c.fillStyle="rgba(255,255,255,"+(Math.random()*.15)+")";c.fillRect(0,Math.random()*GH.h,GH.w,3)}if(++n>14)clearInterval(iv)},60)}
  function done(){msg.textContent=TM("Вы нашли её. Всего найдено: "+sv.n+". Завтра будет новая картинка.","You found her. Total found: "+sv.n+". A new picture tomorrow.")}
  if(found){c.putImageData(S.img,0,0);fig(c,S.x,S.y,.62,.9,true);done();return}
  msg.textContent=TM("Где-то на картинке стоит силуэт. Найдите и нажмите на него.","A silhouette stands somewhere in the picture. Find it and tap.");
  cv.onclick=function(e){if(sv.d===today())return;var r=cv.getBoundingClientRect(),x=(e.clientX-r.left)*GH.w/r.width,y=(e.clientY-r.top)*GH.h/r.height,d=Math.hypot(x-S.x,y-S.y);
   if(d<46){sv={d:today(),n:(sv.n||0)+1};ss("ha-ghost",sv);reveal();done();ach("spot");whisperSafe()}
   else{gmiss++;msg.textContent=(d<110?TM("Горячо.","Hot."):d<220?TM("Тепло.","Warm."):TM("Холодно.","Cold."))+" "+TM("Попыток: ","Tries: ")+gmiss}}}
 function whisperSafe(){try{if(window.phoneRing&&false)window.phoneRing()}catch(e){}}
 // ================= fear map =================
 function fearData(){var sc={},tot=0;GENRES.forEach(function(g){sc[g[0]]=0});Object.keys(MY).forEach(function(id){var r=REVIEWS.filter(function(x){return x.id===id})[0];if(!r)return;var w=MY[id]==="seen"?2:1;r.gn.forEach(function(g){if(g in sc){sc[g]+=w;tot+=w}})});return {sc:sc,tot:tot}}
 function radarSvg(fd,forPng){var n=GENRES.length,cx=210,cy=190,R=120,mx=Math.max.apply(null,GENRES.map(function(g){return fd.sc[g[0]]}))||1,o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 390" '+(forPng?'width="840" height="780"':'class="rd"')+'><rect width="420" height="390" fill="#060909"/>';
  [.33,.66,1].forEach(function(k){var p="";for(var i=0;i<n;i++){var a=-Math.PI/2+i*2*Math.PI/n;p+=(i?"L":"M")+(cx+R*k*Math.cos(a)).toFixed(1)+" "+(cy+R*k*Math.sin(a)).toFixed(1)}o+='<path d="'+p+'Z" fill="none" stroke="#3a4646" stroke-width="1"/>'});
  var pts="";GENRES.forEach(function(g,i){var a=-Math.PI/2+i*2*Math.PI/n,v=fd.sc[g[0]]/mx,x=cx+R*v*Math.cos(a),y=cy+R*v*Math.sin(a);pts+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1);o+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+R*Math.cos(a)).toFixed(1)+'" y2="'+(cy+R*Math.sin(a)).toFixed(1)+'" stroke="#2a3434"/>';var lx=cx+(R+24)*Math.cos(a),ly=cy+(R+18)*Math.sin(a);o+='<text x="'+lx.toFixed(1)+'" y="'+ly.toFixed(1)+'" fill="#c9bdb2" font-size="11" font-family="monospace" text-anchor="middle" dominant-baseline="central">'+esc(T(g[1]))+'</text>'});
  o+='<path d="'+pts+'Z" fill="rgba(196,22,31,.38)" stroke="#e3202b" stroke-width="2" stroke-linejoin="round"/>';
  GENRES.forEach(function(g,i){var a=-Math.PI/2+i*2*Math.PI/n,v=fd.sc[g[0]]/mx;o+='<circle cx="'+(cx+R*v*Math.cos(a)).toFixed(1)+'" cy="'+(cy+R*v*Math.sin(a)).toFixed(1)+'" r="3" fill="#ff5a63"/>'});
  o+='<text x="210" y="372" fill="#7a6c6c" font-size="10" font-family="monospace" text-anchor="middle" letter-spacing="2">HORROR AESTHETIC · FEAR MAP</text></svg>';return o}
 function fmap(){
  var host=document.getElementById("fmap"),g=document.getElementById("bd-grid");
  if(!host){if(!g)return;host=document.createElement("div");host.id="fmap";host.className="pbox";host.style.marginTop="20px";g.parentNode.insertBefore(host,g.nextSibling)}
  var fd=fearData(),top=GENRES.slice().sort(function(a,b){return fd.sc[b[0]]-fd.sc[a[0]]})[0];
  host.innerHTML='<h3>'+ic("eye")+esc(TM("Карта страха","Fear map"))+'</h3><p class="cap">'+esc(TM("Строится по вашим отметкам «хочу» и «смотрел» в каталоге.","Built from your “want” and “seen” marks in the catalogue."))+'</p>'+
   (fd.tot?radarSvg(fd,false)+'<div class="out"><b>'+esc(TM("Вам ближе всего: ","Closest to you: ")+T(top[1]))+'</b></div><div class="row"><button type="button" class="btn" id="fm-save">'+esc(TM("Сохранить картинку","Save the picture"))+'</button></div>':'<div class="out"><p>'+esc(TM("Пока пусто. Отметьте несколько фильмов в каталоге.","Empty for now. Mark a few films in the catalogue."))+'</p></div>');
  var sb=document.getElementById("fm-save");if(sb)sb.onclick=function(){
   var img=new Image(),svg=radarSvg(fd,true);img.onload=function(){var c=document.createElement("canvas");c.width=840;c.height=780;c.getContext("2d").drawImage(img,0,0);c.toBlob(function(b){if(!b)return;var f=null;try{f=new File([b],"fear-map.png",{type:"image/png"})}catch(e){}
     if(f&&navigator.canShare&&navigator.canShare({files:[f]}))navigator.share({files:[f],title:"Fear map"}).catch(function(){});else{var a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="fear-map.png";document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},500)}})};
   img.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg)}}
 // ================= inject =================
 function inject(){
  var host=document.getElementById("play");if(!host||document.getElementById("ouija"))return;
  host.insertAdjacentHTML("beforeend",
   '<div class="pbox ouija" id="ouija"><h3>'+ic("ghost")+esc(TM("Доска духов","Spirit board"))+'</h3><p class="cap">'+esc(TM("Задайте вопрос. Планшетка сама покажет фильм по буквам.","Ask a question. The planchette will spell out a film."))+'</p><input type="text" id="ou-q" maxlength="120" placeholder="'+esc(TM("Что мне посмотреть сегодня?","What should I watch tonight?"))+'" aria-label="question">'+boardSvg()+'<button type="button" class="btn" id="ou-b">'+ic("ghost")+esc(TM("Спросить духов","Ask the spirits"))+'</button><div class="out" id="ou-out" aria-live="polite"></div></div>'+
   '<div class="pbox ghost" id="ghost"><h3>'+ic("eye")+esc(TM("Найди призрака","Find the ghost"))+'</h3><p class="cap">'+esc(TM("Новая картинка каждый день.","A new picture every day."))+'</p><canvas id="gh-cv" aria-label="picture"></canvas><div class="hint" id="gh-msg"></div></div>');
  document.getElementById("ou-b").onclick=ask;document.getElementById("ou-q").addEventListener("keydown",function(e){if(e.key==="Enter")ask()});
  plx=200;ply=120;plSet(200,120);gmiss=0;ghostUi()}
 var _rp=window.renderPlay;if(_rp)window.renderPlay=function(){_rp.apply(this,arguments);inject()};
 var _rb=window.renderBadges;if(_rb)window.renderBadges=function(){_rb.apply(this,arguments);fmap()};
 var _sm=window.saveMy;if(_sm)window.saveMy=function(){_sm.apply(this,arguments);fmap()};
 inject();fmap();
})();
(function(){
 /* ===== shared helpers (window.HA) ===== */
 var TM=function(a,b){return LANG==="ru"?a:b};
 var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function st(k,def){try{var v=localStorage.getItem(k);return v===null?def:JSON.parse(v)}catch(e){return def}}
 function ss(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
 function today(){var d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}
 function hash(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
 function rng(s){return function(){s|=0;s=s+0x6D2B79F5|0;var t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
 function mk(tag,id,cls,par){var e=document.createElement(tag);if(id)e.id=id;if(cls)e.className=cls;(par||document.body).appendChild(e);return e}
 function calm(){return !!st("ha-calm",false)}
 function modalOpen(){
  var q=document.querySelectorAll(".dkm.on,#herr.on,#c7,#call.rg");if(q.length)return true;
  var t=document.getElementById("tape");if(t&&!t.hidden)return true;
  var f=document.getElementById("forb");if(f&&!f.hidden)return true;
  var l=document.getElementById("lb");if(l&&!l.hidden&&l.classList.contains("on"))return true;
  return false}
 function ok(){return !calm()&&!document.hidden&&!modalOpen()}
 function flash(ms){if(RM)return;var c=mk("canvas","","");c.width=160;c.height=90;c.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:490;pointer-events:none;opacity:.5;image-rendering:pixelated";var x=c.getContext("2d"),im=x.createImageData(160,90),p=im.data;for(var i=0;i<p.length;i+=4){var v=Math.random()*255|0;p[i]=v;p[i+1]=v*.9;p[i+2]=v*.9;p[i+3]=255}x.putImageData(im,0,0);setTimeout(function(){c.remove()},ms||160)}
 /* modal: returns {el,body,close} */
 var curModal=null;
 function modal(id,title,iconName,onClose){
  closeModal();
  var el=mk("div","dk-"+id,"dkm on");el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");
  el.innerHTML='<div class="dkc"><div class="dkh"><h3>'+(iconName?ic(iconName):"")+esc(title)+'</h3><button type="button" class="dkx" aria-label="close">'+ic("x")+'</button></div><div class="dkb"></div></div>';
  var m={el:el,body:el.querySelector(".dkb"),close:function(){closeModal()},onClose:onClose};
  el.querySelector(".dkx").onclick=function(){closeModal()};
  el.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal()});
  curModal=m;document.documentElement.classList.add("dk-lock");
  setTimeout(function(){el.querySelector(".dkx").focus()},30);
  return m}
 function closeModal(){
  var m=curModal;if(!m)return;curModal=null;
  try{if(m.onClose)m.onClose()}catch(e){}
  m.el.remove();document.documentElement.classList.remove("dk-lock")}
 window.HA={TM:TM,RM:RM,st:st,ss:ss,today:today,hash:hash,rng:rng,mk:mk,calm:calm,ok:ok,flash:flash,modal:modal,closeModal:closeModal,modalOpen:modalOpen,
  setCalm:function(v){ss("ha-calm",!!v);document.documentElement.classList.toggle("ha-calm",!!v);if(window.HA.onCalm)window.HA.onCalm(!!v)}};
 document.documentElement.classList.toggle("ha-calm",calm());

 var T0=Date.now(),inputSeen=false;
 ["pointerdown","keydown","scroll","touchstart","wheel"].forEach(function(ev){window.addEventListener(ev,function(){inputSeen=true},{passive:true,once:true})});

 /* ===== 1. whispers about you ===== */
 var pw=mk("div","pw","");pw.setAttribute("aria-live","polite");pw.hidden=true;
 var pwN=0,pwLast=-1,pwT=0;
 function two(n){return n<10?"0"+n:""+n}
 function lines(){
  var L=[],now=new Date(),h=now.getHours(),hhmm=two(h)+":"+two(now.getMinutes());
  var wants=[],seen=[];
  try{Object.keys(MY).forEach(function(id){if(F[id]){if(MY[id]==="want")wants.push(id);else if(MY[id]==="seen")seen.push(id)}})}catch(e){}
  function nm(id){return "«"+T(F[id].n)+"»"}
  function nm2(id){return "“"+T(F[id].n)+"”"}
  if(wants.length){var w=wants[Math.floor(Math.random()*wants.length)];L.push(TM("Ты ведь так и не посмотрел "+nm(w)+".","You never did watch "+nm2(w)+"."))}
  if(seen.length){var s=seen[Math.floor(Math.random()*seen.length)];L.push(TM("Ты смотрел "+nm(s)+". Она об этом знает.","You watched "+nm2(s)+". She knows."))}
  if(h<5)L.push(TM("Уже "+hhmm+". Ты один?","It is already "+hhmm+". Are you alone?"));
  else if(h>=22)L.push(TM("Сейчас "+hhmm+". Окно за спиной закрыто?","It is "+hhmm+". Is the window behind you closed?"));
  else L.push(TM("Сейчас "+hhmm+". Ещё светло. Пока.","It is "+hhmm+". Still light. For now."));
  var mins=Math.round((Date.now()-T0)/60000);
  if(mins>=4)L.push(TM("Ты здесь уже "+mins+" мин. Никто не заходил к тебе?","You have been here for "+mins+" min. Has no one come in?"));
  try{if(ST.n>1)L.push(TM(ST.n+"-й день подряд. Она считает.","Day "+ST.n+" in a row. She is counting."));if(ST.days<=1)L.push(TM("Ты здесь впервые. Она ждала.","First time here. She has been waiting."))}catch(e){}
  try{if(ST.ach&&ST.ach.tape)L.push(TM("Ты досмотрел плёнку. Это было зря.","You watched the tape to the end. That was a mistake."))}catch(e){}
  L.push(TM("Не оглядывайся. Просто читай.","Do not look around. Just keep reading."));
  return L}
 function whisperLine(force){
  if(!force&&!ok())return false;
  var L=lines(),i,tries=0;do{i=Math.floor(Math.random()*L.length)}while(i===pwLast&&L.length>1&&++tries<5);
  pwLast=i;pw.textContent=L[i];pw.hidden=false;pw.className="";
  void pw.offsetWidth;pw.className="on"+(RM?" rm":"");
  clearTimeout(pwT);pwT=setTimeout(function(){pw.className="off"+(RM?" rm":"");setTimeout(function(){pw.hidden=true},2600)},RM?4200:5200);
  return true}
 function pwLoop(){
  var wait=pwN===0?70000+Math.random()*70000:150000+Math.random()*150000;
  setTimeout(function(){
   if(!inputSeen||pwN>=4){if(pwN<4)pwLoop();return}
   if(whisperLine(false)){pwN++;pwLoop()}else{setTimeout(pwLoop,15000)}
  },wait)}
 pwLoop();window.__pw=function(){whisperLine(true)};

 /* ===== 3. text that notices you ===== */
 var dwell=new WeakMap(),peeks=0,peekBusy=false;
 function visiblePs(){
  var ps=document.querySelectorAll(".lead .body p, .art .body p"),out=[],vh=innerHeight;
  for(var i=0;i<ps.length;i++){var p=ps[i];if(!p.offsetParent)continue;var r=p.getBoundingClientRect();if(r.height<20)continue;var cy=r.top+r.height/2;if(cy>vh*.25&&cy<vh*.8&&r.bottom>0&&r.top<vh)out.push(p)}
  return out}
 function peek(el){
  if(peekBusy)return;peekBusy=true;peeks++;
  var old=el.innerHTML,h=el.offsetHeight;el.style.minHeight=h+"px";
  el.textContent=TM("Она читает вместе с тобой.","She is reading with you.");el.classList.add("pk");
  setTimeout(function(){el.innerHTML=old;el.classList.remove("pk");el.style.minHeight="";peekBusy=false},RM?1700:1150)}
 setInterval(function(){
  if(!ok()||peeks>=2||peekBusy||!inputSeen)return;
  var v=visiblePs();v.forEach(function(p){var d=(dwell.get(p)||0)+5;dwell.set(p,d);if(d>=30&&peeks<2&&!peekBusy){dwell.set(p,-120);peek(p)}})
 },5000);
 window.__peek=function(){var v=visiblePs();if(v.length)peek(v[0])};

 /* ===== 8. the page slowly decays ===== */
 var first=st("ha-first",0);if(!first){first=Date.now();ss("ha-first",first)}
 var dq=/[?&]decay=(\d)/.exec(location.search);
 var level=dq?+dq[1]:Math.min(7,Math.floor((Date.now()-first)/864e5));
 var dec=mk("canvas","dec","");dec.setAttribute("aria-hidden","true");
 var dcx=dec.getContext("2d"),eyesClosed=false;
 function drawDecay(){
  var W=dec.width=innerWidth,H=dec.height=innerHeight;dcx.clearRect(0,0,W,H);
  if(level<=0)return;
  var r=rng(hash("decay"+first));
  var nS=level*3,nH=Math.round(level*1.6),nB=level;
  dcx.lineCap="round";
  for(var i=0;i<nS;i++){ // scratches
   var x=r()*W,y=r()*H*.5,len=H*(.18+r()*.4),dx=(r()-.5)*40;
   dcx.strokeStyle="rgba(210,215,205,"+(.06+r()*.14+level*.01)+")";dcx.lineWidth=.6+r()*1.1;
   dcx.beginPath();dcx.moveTo(x,y);dcx.quadraticCurveTo(x+dx*2,y+len*.5,x+dx,y+len);dcx.stroke()}
  for(var j=0;j<nH;j++){ // hairs
   var sx=r()<.5?r()*W*.2:W-r()*W*.2,sy=r()*H,seg=40+r()*90,ang=(r()-.5)*2;
   dcx.strokeStyle="rgba(8,8,8,"+(.4+r()*.3)+")";dcx.lineWidth=.9+r()*.9;dcx.beginPath();dcx.moveTo(sx,sy);
   var cx=sx,cy=sy;for(var k=0;k<5;k++){ang+=(r()-.5)*1.8;cx+=Math.cos(ang)*seg/5*(sx<W/2?1:-1);cy+=Math.sin(ang)*seg/5+4;dcx.lineTo(cx,cy)}dcx.stroke()}
  for(var b=0;b<nB;b++){ // stains
   var bx=r()<.5?r()*W*.25:W-r()*W*.25,by=r()<.5?r()*H*.25:H-r()*H*.25,br=30+r()*70+level*6;
   var g=dcx.createRadialGradient(bx,by,2,bx,by,br);g.addColorStop(0,"rgba(60,6,8,"+(.12+level*.02)+")");g.addColorStop(1,"rgba(60,6,8,0)");dcx.fillStyle=g;dcx.fillRect(bx-br,by-br,br*2,br*2)}
  if(level>=5){var sp=level*40;for(var q=0;q<sp;q++){dcx.fillStyle="rgba(200,200,190,"+(.05+r()*.12)+")";dcx.fillRect(r()*W,r()*H,1+r()*1.4,1+r()*1.4)}}
  if(level>=6){ // a face coming up through the stains, bottom-right
   var fx=W-Math.min(190,W*.3),fy=H-Math.min(230,H*.34),fw=Math.min(150,W*.24),al=level>=7?.34:.2;
   var gg=dcx.createRadialGradient(fx,fy+30,5,fx,fy+30,fw*1.1);gg.addColorStop(0,"rgba(30,4,6,"+al*.9+")");gg.addColorStop(1,"rgba(30,4,6,0)");dcx.fillStyle=gg;dcx.fillRect(fx-fw*1.2,fy-fw*1.2,fw*2.4,fw*2.8);
   dcx.fillStyle="rgba(0,0,0,"+(al+.2)+")";
   var ey=fy+4,ex=fw*.28;
   function eye(cx2,open){dcx.beginPath();if(open)dcx.ellipse(cx2,ey,fw*.1,fw*.2,0,0,6.283);else dcx.ellipse(cx2,ey+fw*.1,fw*.12,fw*.012,0,0,6.283);dcx.fill()}
   eye(fx-ex,!eyesClosed);eye(fx+ex,!eyesClosed);
   dcx.beginPath();dcx.ellipse(fx,fy+fw*.62,fw*.13,fw*.22,0,0,6.283);dcx.fill();
   dcx.strokeStyle="rgba(0,0,0,"+(al+.1)+")";dcx.lineWidth=2.4;
   for(var hh=-4;hh<=4;hh++){dcx.beginPath();dcx.moveTo(fx+hh*fw*.17,fy-fw*.45);dcx.quadraticCurveTo(fx+hh*fw*.26,fy+fw*.4,fx+hh*fw*.2,fy+fw*1.2);dcx.stroke()}
  }
 }
 function applyDecay(){dec.style.display=(calm()||level<=0)?"none":"block";if(!calm()&&level>0)drawDecay()}
 applyDecay();window.addEventListener("resize",function(){if(!calm()&&level>0)drawDecay()});
 if(level>=6&&!RM)setInterval(function(){if(!ok()||level<6)return;if(Math.random()<.35){eyesClosed=true;drawDecay();setTimeout(function(){eyesClosed=false;drawDecay()},180)}},9000);
 var seenLv=st("ha-dlv",0);
 if(level>seenLv&&!dq){ss("ha-dlv",level);setTimeout(function(){if(ok())toast(TM("Что-то на странице не так","Something on the page is wrong"),TM("Это заметно не сразу.","It is not obvious at first."))},9000)}
 if(level>=7)setTimeout(function(){try{ach("decay")}catch(e){}},12000);
 window.__decay=function(n){level=n;applyDecay()};

 /* ===== 10. a believable error ===== */
 var herr=null,errDone=false;
 function showErr(){
  if(errDone&&!window.__errForce)return;errDone=true;
  if(!herr){herr=mk("div","herr","");herr.setAttribute("role","alertdialog");herr.setAttribute("aria-modal","true")}
  herr.innerHTML='<div class="eb"><div class="et">'+esc(TM("Страница не отвечает","This page is not responding"))+'</div><p>'+esc(TM("Она ещё здесь.","She is still here."))+'</p><p class="ed">'+esc(TM("Ожидание ответа от скрипта: 0x1998","Waiting for script response: 0x1998"))+'</p><div class="ebb"><button type="button" id="er-w">'+esc(TM("Подождать","Wait"))+'</button><button type="button" id="er-c">'+esc(TM("Закрыть страницу","Close page"))+'</button></div></div>';
  herr.className="on";
  var w=herr.querySelector("#er-w"),c=herr.querySelector("#er-c");w.focus();
  w.onclick=function(){herr.className="";};
  c.onclick=function(){herr.className="";setTimeout(function(){toast(TM("Не получится","That will not work"),TM("Она не закрывается.","It does not close."))},400)}}
 setTimeout(function(){var iv=setInterval(function(){if(errDone){clearInterval(iv);return}if(ok()&&inputSeen&&Math.random()<.5){clearInterval(iv);showErr()}},20000)},7*60000+Math.random()*7*60000);
 window.__err=function(){window.__errForce=true;showErr()};

 /* ===== 11. the film that was taken away ===== */
 var goneId=null,goneNews=false;
 function pickGone(){if(!REVIEWS.length)return null;return REVIEWS[hash("gone"+today())%REVIEWS.length].id}
 function dateDot(){var d=new Date();return two(d.getDate())+"."+two(d.getMonth()+1)+"."+d.getFullYear()}
 function applyGone(){
  var host=document.getElementById("cards");if(!host||calm())return;
  goneId=goneId||pickGone();if(!goneId||!F[goneId])return;
  var name=T(F[goneId].n),cs=host.querySelectorAll(".card");
  for(var i=0;i<cs.length;i++){
   var h=cs[i].querySelector("h3");if(h&&h.textContent.trim()===name&&!cs[i].classList.contains("gone")){
    var bar="█".repeat(Math.max(5,Math.min(14,name.length)));
    cs[i].className="card gone";cs[i].removeAttribute("style");
    cs[i].innerHTML='<div class="gbox"><h3>'+bar+'</h3><p class="gy">████</p><p>'+esc(TM("Удалено по просьбе.","Removed on request."))+'</p><p class="gs">'+esc(TM("Не ищите.","Do not look."))+'</p></div>';
    cs[i].onclick=function(){toast(TM("Здесь был фильм","There was a film here"),TM("Его больше никто не помнит.","No one remembers it any more."));try{ach("gone")}catch(e){}};
    break}}
  if(!goneNews){goneNews=true;try{NEWS.unshift({d:dateDot(),t:a("Фильм удалён по просьбе","A film removed on request"),p:a("Один фильм исчез из каталога. Причины не сообщаются. Если вы помните название, не называйте его вслух.","One film has disappeared from the catalogue. No reason was given. If you remember the title, do not say it aloud.")});if(window.renderStatic)renderStatic()}catch(e){}}
 }
 var _rc=window.renderCards;if(_rc)window.renderCards=function(){_rc.apply(this,arguments);applyGone()};
 applyGone();
 window.HA.onCalm=function(){applyDecay();if(window.renderCards)renderCards()};
})();

(function(){
 var H=window.HA,TM=H.TM,RM=H.RM;
 function AC(){var C=window.AudioContext||window.webkitAudioContext;return C?new C():null}
 function noiseBuf(c,sec){var n=Math.floor(c.sampleRate*sec),b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;return b}
 function irBuf(c,sec,decay){var n=Math.floor(c.sampleRate*sec),b=c.createBuffer(2,n,c.sampleRate);for(var ch=0;ch<2;ch++){var d=b.getChannelData(ch);for(var i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,decay)}return b}
 function pan3(c,x,y,z){var p=c.createPanner();p.panningModel="HRTF";p.distanceModel="inverse";p.refDistance=1;p.rolloffFactor=1.4;setPos(p,x,y,z,0);return p}
 function setPos(p,x,y,z,t,ramp){
  if(p.positionX){var w=ramp?"linearRampToValueAtTime":"setValueAtTime";p.positionX[w](x,t);p.positionY[w](y,t);p.positionZ[w](z,t)}else p.setPosition(x,y,z)}
 function mmss(s){s=Math.floor(s);return Math.floor(s/60)+":"+(s%60<10?"0":"")+s%60}
 function gn(c,v){var g=c.createGain();g.gain.value=v;return g}

 /* ================= 4. QUIET: binaural room ================= */
 function quiet(){
  var c=AC(),m=H.modal("quiet",TM("Тише","Hush"),"ghost",function(){stop(true)});
  if(!c){m.body.innerHTML='<p class="dkp">'+TM("Ваш браузер не умеет в объёмный звук.","Your browser cannot play spatial audio.")+'</p>';return}
  m.body.innerHTML='<p class="dkp">'+esc(TM("Наденьте наушники. Закройте глаза. Звук идёт вокруг головы, и всё это происходит рядом с вами.","Put on headphones. Close your eyes. The sound moves around your head, and all of it is happening close to you."))+'</p><p class="dkn">'+esc(TM("Звук в этом режиме без голосов. Закрыть: Esc.","No voices in this mode. Close with Esc."))+'</p><button type="button" class="btn" id="qt-go">'+ic("ghost")+esc(TM("Слушать","Listen"))+'</button><div class="qt-ring" id="qt-ring" hidden><i></i><b id="qt-t">0:00</b></div>';
  var go=m.body.querySelector("#qt-go"),ring=m.body.querySelector("#qt-ring"),tt=m.body.querySelector("#qt-t");
  var master,rvIn,t0=0,timer=0,alive=false,last="",credited=false;
  function route(node,p){node.connect(p);p.connect(master);var s=gn(c,.35);p.connect(s);s.connect(rvIn)}
  function burst(p,t,f,len,g,thump){
   var s=c.createBufferSource();s.buffer=noiseBuf(c,len+.1);var lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=f;var e=gn(c,0);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(g,t+.006);e.gain.exponentialRampToValueAtTime(.0008,t+len);s.connect(lp);lp.connect(e);route(e,p);s.start(t);s.stop(t+len+.05);
   if(thump){var o=c.createOscillator();o.frequency.setValueAtTime(thump,t);o.frequency.exponentialRampToValueAtTime(thump*.5,t+.18);var e2=gn(c,0);e2.gain.setValueAtTime(0,t);e2.gain.linearRampToValueAtTime(g*.9,t+.01);e2.gain.exponentialRampToValueAtTime(.0008,t+.28);o.connect(e2);route(e2,p);o.start(t);o.stop(t+.3)}}
  function steps(){var t=c.currentTime+.1,n=5+Math.floor(Math.random()*4),side=Math.random()<.5?-1:1,p=pan3(c,0,0,0);
   for(var i=0;i<n;i++){var k=i/(n-1),x=side*(3.2-3.0*k),z=3.2-2.7*k+(Math.random()-.5)*.2,tt2=t+i*(.62+Math.random()*.16);setPos(p,x,0,z,tt2);burst(p,tt2,260,.11,.5+.35*k,66)}
   return n*.75}
  function creak(){var t=c.currentTime+.1,side=Math.random()<.5?-1:1,p=pan3(c,side*2.6,0,-1.6),o=c.createOscillator();o.type="sawtooth";o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(92,t+1.7);var bp=c.createBiquadFilter();bp.type="bandpass";bp.frequency.value=420;bp.Q.value=11;var l=c.createOscillator();l.frequency.value=7.5;var lg=gn(c,.35);var e=gn(c,.0);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.25,t+.2);e.gain.linearRampToValueAtTime(.0,t+1.8);l.connect(lg);lg.connect(e.gain);o.connect(bp);bp.connect(e);route(e,p);setPos(p,side*2.2,0,-1.2,t+1.8,true);o.start(t);l.start(t);o.stop(t+1.9);l.stop(t+1.9);return 2.2}
  function breath(){var t=c.currentTime+.1,side=Math.random()<.5?-1:1,p=pan3(c,side*.14,0,.06);
   for(var i=0;i<3;i++){var b=t+i*2.7,s=c.createBufferSource();s.buffer=noiseBuf(c,2.6);var bp=c.createBiquadFilter();bp.type="bandpass";bp.frequency.value=900;bp.Q.value=.6;var e=gn(c,0);e.gain.setValueAtTime(0,b);e.gain.linearRampToValueAtTime(.22,b+1.0);e.gain.linearRampToValueAtTime(.03,b+1.2);e.gain.linearRampToValueAtTime(.16,b+1.6);e.gain.linearRampToValueAtTime(0,b+2.6);s.connect(bp);bp.connect(e);route(e,p);s.start(b);s.stop(b+2.7)}
   return 8.4}
  function drag(){var t=c.currentTime+.1,p=pan3(c,-3,0,1.6),s=c.createBufferSource();s.buffer=noiseBuf(c,4.4);s.loop=true;var lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=800;var e=gn(c,0),l=c.createOscillator();l.type="square";l.frequency.value=8.5;var lg=gn(c,.08);l.connect(lg);lg.connect(e.gain);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.16,t+.6);e.gain.linearRampToValueAtTime(0,t+4.2);s.connect(lp);lp.connect(e);route(e,p);setPos(p,3,0,1.5,t+4,true);s.start(t);l.start(t);s.stop(t+4.4);l.stop(t+4.4);return 5}
  function knock(){var t=c.currentTime+.1,p=pan3(c,0,.3,-6);for(var i=0;i<3;i++)burst(p,t+i*.55,500,.12,.55,92);var q=pan3(c,-.35,0,-.1),t2=t+3.6;burst(q,t2,700,.10,.8,100);return 5}
  function tap(){var t=c.currentTime+.1,p=pan3(c,.28,-.3,.05);burst(p,t,1400,.07,.7,120);return 2}
  function drip(){var t=c.currentTime+.05,p=pan3(c,(Math.random()-.5)*8,-.5,(Math.random()-.5)*6),o=c.createOscillator();o.frequency.setValueAtTime(1500+Math.random()*700,t);o.frequency.exponentialRampToValueAtTime(900,t+.18);var e=gn(c,0);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(.12,t+.004);e.gain.exponentialRampToValueAtTime(.0008,t+.35);o.connect(e);route(e,p);o.start(t);o.stop(t+.4);return 1}
  function next(first){
   if(!alive)return;var el=(c.currentTime-t0),pool=["steps","creak","breath","drag","knock","drip","drip"];
   if(el>38)pool.push("tap","steps");if(el>38)pool.push("breath");
   var k;if(first)k="steps";else{do{k=pool[Math.floor(Math.random()*pool.length)]}while(k===last&&pool.length>1)}
   last=k;var d=({steps:steps,creak:creak,breath:breath,drag:drag,knock:knock,tap:tap,drip:drip})[k]();
   timer=setTimeout(function(){next(false)},(d+3+Math.random()*7)*1000)}
  function stop(silent){
   if(!alive&&!c)return;alive=false;clearTimeout(timer);clearInterval(tick);
   if(!credited&&t0&&c.currentTime-t0>=60){credited=true;try{ach("quiet")}catch(e){}}
   try{c.close()}catch(e){}c=null;
   if(!silent){H.closeModal()}}
  var tick=0;
  go.onclick=function(){
   go.hidden=true;ring.hidden=false;c.resume&&c.resume();
   master=gn(c,.9);master.connect(c.destination);
   var cv=c.createConvolver();cv.buffer=irBuf(c,2.4,2.6);rvIn=gn(c,1);rvIn.connect(cv);var rg=gn(c,.5);cv.connect(rg);rg.connect(master);
   var bed=c.createGain();bed.gain.value=0;bed.gain.linearRampToValueAtTime(.05,c.currentTime+4);[41,55.7].forEach(function(f){var o=c.createOscillator();o.frequency.value=f;o.connect(bed);o.start()});
   var s=c.createBufferSource();s.buffer=noiseBuf(c,3);s.loop=true;var lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=260;var ng=gn(c,.04);s.connect(lp);lp.connect(ng);ng.connect(master);s.start();bed.connect(master);
   t0=c.currentTime;alive=true;
   tick=setInterval(function(){if(!c)return;var e=c.currentTime-t0;tt.textContent=mmss(e);if(e>=170){alive=false;ring.innerHTML='<b>'+esc(TM("Она ушла. Пока.","She is gone. For now."))+'</b>';clearInterval(tick);setTimeout(function(){H.closeModal()},3500)}},500);
   setTimeout(function(){next(true)},4500)};
 }

 /* ================= 5. RADIO between stations ================= */
 function radio(){
  var c=AC(),m=H.modal("radio",TM("Радио между станциями","Radio between stations"),"tape",function(){stop()});
  if(!c){m.body.innerHTML='<p class="dkp">'+TM("Нет Web Audio.","No Web Audio.")+'</p>';return}
  m.body.innerHTML='<p class="dkp">'+esc(TM("Покрутите ручку. Между станциями слышно что-то, чего там быть не должно.","Turn the dial. Between stations you can hear something that should not be there."))+'</p><div class="rdio"><div class="rf"><b id="rd-f">94.0</b><span>MHz</span></div><input type="range" id="rd-r" min="87.5" max="108" step="0.05" value="94" aria-label="tuning"><div class="rm"><i id="rd-m"></i></div></div><p class="dkn">'+esc(TM("Звук только для наушников и тихой комнаты.","Best with headphones in a quiet room."))+'</p><button type="button" class="btn" id="rd-go">'+ic("tape")+esc(TM("Включить","Switch on"))+'</button>';
  var go=m.body.querySelector("#rd-go"),rg=m.body.querySelector("#rd-r"),rf=m.body.querySelector("#rd-f"),rm=m.body.querySelector("#rd-m");
  var run=false,noiseG,musG,knkG,numG,tmr=[],held=0,tune=0,lockT=0,credited=false,freq=94;
  var ST_=[{f:91.3,k:"mus"},{f:97.7,k:"knk"},{f:103.1,k:"num"}];
  function str(f,fs){var d=(f-fs)/.3;return Math.exp(-d*d)}
  function setMix(){
   if(!run)return;var s=ST_.map(function(x){return str(freq,x.f)}),mx=Math.max.apply(null,s),t=c.currentTime;
   noiseG.gain.setTargetAtTime(.07+.3*(1-mx),t,.05);musG.gain.setTargetAtTime(s[0]*.5,t,.05);knkG.gain.setTargetAtTime(s[1]*.9,t,.05);numG.gain.setTargetAtTime(s[2]*.35,t,.05);
   rm.style.width=Math.round(mx*100)+"%";
   if(s[1]<.3)held=0;tune=mx}
  function burst(dst,t,f,len,g,th){var s=c.createBufferSource();s.buffer=noiseBuf(c,len+.1);var lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=f;var e=gn(c,0);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(g,t+.004);e.gain.exponentialRampToValueAtTime(.0008,t+len);s.connect(lp);lp.connect(e);e.connect(dst);s.start(t);s.stop(t+len+.05);
   if(th){var o=c.createOscillator();o.frequency.setValueAtTime(th,t);o.frequency.exponentialRampToValueAtTime(th*.5,t+.15);var e2=gn(c,0);e2.gain.setValueAtTime(0,t);e2.gain.linearRampToValueAtTime(g,t+.006);e2.gain.exponentialRampToValueAtTime(.0008,t+.22);o.connect(e2);e2.connect(dst);o.start(t);o.stop(t+.25)}}
  var NOTES=[60,63,67,72,70,67,63,58,60,63,65,68,67,63,62,58],ni=0;
  function mnote(){if(!run)return;var t=c.currentTime,f=440*Math.pow(2,(NOTES[ni%NOTES.length]-69)/12)*Math.pow(2,-35/1200);ni++;
   [1,2.01].forEach(function(r,i){var o=c.createOscillator();o.type=i?"triangle":"sine";o.frequency.value=f*r;var e=gn(c,0);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(i?.05:.14,t+.01);e.gain.exponentialRampToValueAtTime(.0006,t+1.1);o.connect(e);e.connect(musG);o.start(t);o.stop(t+1.2)});
   tmr.push(setTimeout(mnote,520+Math.random()*90+(ni%8===7?400:0)))}
  function knk(){if(!run)return;var t=c.currentTime;burst(knkG,t,520,.12,.9,92);if(Math.random()<.18)burst(knkG,t+.14,480,.1,.7,86);
   if(freq>97.2&&freq<98.2&&str(freq,97.7)>.6){held+=1}else held=0;
   var iv=Math.max(.28,1.3-held*.032);tmr.push(setTimeout(knk,iv*1000))}
  var SEQ=[523,659,587,784,698,523,880,659];
  function nums(){if(!run)return;var t=c.currentTime;SEQ.forEach(function(f,i){var o=c.createOscillator();o.type="square";o.frequency.value=f*(i%3===2?.5:1);var lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=2200;var e=gn(c,0);e.gain.setValueAtTime(0,t+i*.26);e.gain.linearRampToValueAtTime(.2,t+i*.26+.01);e.gain.setValueAtTime(.2,t+i*.26+.14);e.gain.linearRampToValueAtTime(0,t+i*.26+.16);o.connect(lp);lp.connect(e);e.connect(numG);o.start(t+i*.26);o.stop(t+i*.26+.2)});
   tmr.push(setTimeout(nums,4600))}
  function pops(){if(!run)return;burst(noiseG,c.currentTime,6000,.03,.4*(Math.random()),0);tmr.push(setTimeout(pops,300+Math.random()*1800))}
  function stop(){run=false;tmr.forEach(clearTimeout);tmr=[];clearInterval(lockT);if(!credited&&held>0){}try{c&&c.close()}catch(e){}c=null}
  rg.addEventListener("input",function(){freq=+rg.value;rf.textContent=freq.toFixed(1);setMix()});
  go.onclick=function(){
   go.hidden=true;c.resume&&c.resume();run=true;var mst=gn(c,.85);mst.connect(c.destination);
   noiseG=gn(c,.3);var s=c.createBufferSource();s.buffer=noiseBuf(c,2);s.loop=true;var bp=c.createBiquadFilter();bp.type="bandpass";bp.frequency.value=2400;bp.Q.value=.35;s.connect(bp);bp.connect(noiseG);noiseG.connect(mst);s.start();
   musG=gn(c,0);knkG=gn(c,0);numG=gn(c,0);
   var lpm=c.createBiquadFilter();lpm.type="lowpass";lpm.frequency.value=3200;[musG,knkG,numG].forEach(function(g){g.connect(lpm)});lpm.connect(mst);
   var hum=c.createOscillator();hum.frequency.value=50;var hg=gn(c,.012);hum.connect(hg);hg.connect(mst);hum.start();
   mnote();knk();nums();pops();setMix();
   var lk=0;lockT=setInterval(function(){if(!run)return;if(tune>.8)lk+=.25;else lk=Math.max(0,lk-.25);if(lk>=6&&!credited){credited=true;try{ach("radio")}catch(e){}}},250)};
 }

 /* ================= 6. DO NOT BREATHE (microphone) ================= */
 function breath(){
  var m=H.modal("breath",TM("Не дыши","Do not breathe"),"saw",function(){stop()});
  m.body.innerHTML='<p class="dkp">'+esc(TM("Сайт послушает микрофон. Нужно просидеть тихо 18 секунд. Всё считается прямо в браузере, ничего не записывается и никуда не отправляется.","The site will listen to your microphone. You must stay silent for 18 seconds. Everything is measured in the browser, nothing is recorded or sent anywhere."))+'</p><p class="dkn">'+esc(TM("Лучше в наушниках. Не дышите в микрофон и не двигайте стул.","Headphones are best. Do not breathe at the microphone or move the chair."))+'</p><button type="button" class="btn" id="br-go">'+ic("saw")+esc(TM("Согласен, начать","I agree, start"))+'</button><div class="br-st" id="br-st" aria-live="polite"></div><div class="br-bar" id="br-bar" hidden><i></i></div>';
  var go=m.body.querySelector("#br-go"),stEl=m.body.querySelector("#br-st"),bar=m.body.querySelector("#br-bar"),barI=bar.querySelector("i");
  var c=null,stream=null,an=null,buf,raf=0,alive=false;
  function stop(){alive=false;cancelAnimationFrame(raf);try{stream&&stream.getTracks().forEach(function(t){t.stop()})}catch(e){}try{c&&c.close()}catch(e){}c=null;stream=null}
  function rms(){an.getFloatTimeDomainData(buf);var s=0;for(var i=0;i<buf.length;i++)s+=buf[i]*buf[i];return Math.sqrt(s/buf.length)}
  function step(dst,t,g){var s=c.createBufferSource();s.buffer=noiseBuf(c,.2);var lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=240;var e=gn(c,0);e.gain.setValueAtTime(0,t);e.gain.linearRampToValueAtTime(g,t+.006);e.gain.exponentialRampToValueAtTime(.0008,t+.1);s.connect(lp);lp.connect(e);e.connect(dst);s.start(t);s.stop(t+.2);
   var o=c.createOscillator();o.frequency.value=60;var e2=gn(c,0);e2.gain.setValueAtTime(0,t);e2.gain.linearRampToValueAtTime(g*.9,t+.01);e2.gain.exponentialRampToValueAtTime(.0008,t+.2);o.connect(e2);e2.connect(dst);o.start(t);o.stop(t+.25)}
  go.onclick=function(){
   go.hidden=true;stEl.textContent=TM("Разрешите микрофон…","Allow the microphone…");
   if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){stEl.textContent=TM("Здесь нет доступа к микрофону.","No microphone access here.");return}
   navigator.mediaDevices.getUserMedia({audio:{echoCancellation:false,noiseSuppression:false,autoGainControl:false}}).then(function(s){
    if(!curModalAlive()){s.getTracks().forEach(function(t){t.stop()});return}
    stream=s;c=AC();c.resume&&c.resume();var src=c.createMediaStreamSource(s);an=c.createAnalyser();an.fftSize=1024;buf=new Float32Array(an.fftSize);src.connect(an);
    var mst=gn(c,.8);mst.connect(c.destination);alive=true;
    stEl.textContent=TM("Тихо. Измеряю комнату…","Quiet. Measuring the room…");
    var t=c.currentTime+.4;step(mst,t,.4);step(mst,t+1.4,.4);
    var cal=[],t0=performance.now(),thr=.03,phase=0,pt0=0,over=0,stp=0;
    function loop(){
     if(!alive)return;raf=requestAnimationFrame(loop);var v=rms(),now=performance.now();
     if(phase===0){cal.push(v);if(now-t0>3000){cal.sort(function(a,b){return a-b});var p85=cal[Math.floor(cal.length*.85)]||.005;thr=p85*1.9+.012;phase=1;pt0=now;bar.hidden=false;stEl.textContent=TM("Не дыши. Не двигайся. Она идёт.","Do not breathe. Do not move. She is coming.");stp=0}}
     else if(phase===1){
      var el=(now-pt0)/1000;barI.style.width=Math.min(100,el/18*100)+"%";
      var due=[2.5,5,7.2,9.2,11,12.6,14,15.2,16.2,17];while(stp<due.length&&el>=due[stp]){step(mst,c.currentTime+.02,.22+stp*.04);stp++}
      if(el>2&&v>thr){over++;if(over>=4){phase=2;fail()}}else over=Math.max(0,over-1);
      if(el>=18){phase=3;win()}}
    }
    function fail(){alive=false;cancelAnimationFrame(raf);H.flash(280);var o=c.createOscillator();o.frequency.value=70;var e=gn(c,0);e.gain.setValueAtTime(0,c.currentTime);e.gain.linearRampToValueAtTime(.9,c.currentTime+.01);e.gain.exponentialRampToValueAtTime(.001,c.currentTime+1.3);o.connect(e);e.connect(mst);o.start();o.stop(c.currentTime+1.4);
     stEl.innerHTML='<b class="bad">'+esc(TM("Она услышала.","She heard you."))+'</b>';bar.hidden=true;stopMic();retry()}
    function win(){alive=false;cancelAnimationFrame(raf);stEl.innerHTML='<b>'+esc(TM("Она прошла мимо. Пока.","She walked past. For now."))+'</b>';bar.hidden=true;stopMic();try{ach("silent")}catch(e){}retry()}
    function stopMic(){try{stream&&stream.getTracks().forEach(function(t){t.stop()})}catch(e){}}
    function retry(){var b=document.createElement("button");b.type="button";b.className="btn";b.textContent=TM("Ещё раз","Again");b.onclick=function(){stop();m.body.innerHTML="";H.closeModal();breath()};m.body.appendChild(b)}
    loop()
   }).catch(function(){stEl.textContent=TM("Без микрофона не получится. Режим не работает.","It cannot work without the microphone.")})};
  function curModalAlive(){return !!document.getElementById("dk-breath")}
 }

 /* ================= 2. MIRROR (camera) ================= */
 function mirror(){
  var m=H.modal("mirror",TM("Зеркало","Mirror"),"eye",function(){stop()});
  m.body.innerHTML='<p class="dkp">'+esc(TM("Сайт включит переднюю камеру и покажет вас в тёмной комнате. Картинка обрабатывается только на вашем устройстве, ничего не сохраняется и не отправляется.","The site will switch on your front camera and show you in a dark room. The picture is processed only on your device, nothing is stored or sent."))+'</p><p class="dkn">'+esc(TM("Выключить можно в любой момент: крестик или Esc.","You can stop at any time: the cross or Esc."))+'</p><button type="button" class="btn" id="mr-go">'+ic("eye")+esc(TM("Согласен, включить","I agree, switch on"))+'</button><div class="mr-wrap" id="mr-wrap" hidden><canvas id="mr-cv" width="480" height="360"></canvas><div class="mr-rec"><i></i>CAM</div><div class="mr-msg" id="mr-msg"></div></div>';
  var go=m.body.querySelector("#mr-go"),wrap=m.body.querySelector("#mr-wrap"),cv=m.body.querySelector("#mr-cv"),msg=m.body.querySelector("#mr-msg"),stream=null,raf=0,vid=null,alive=false;
  function stop(){alive=false;cancelAnimationFrame(raf);try{stream&&stream.getTracks().forEach(function(t){t.stop()})}catch(e){}stream=null;if(vid){try{vid.pause();vid.srcObject=null}catch(e){}}}
  go.onclick=function(){
   go.hidden=true;
   if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){m.body.insertAdjacentHTML("beforeend",'<p class="dkp">'+TM("Здесь нет доступа к камере.","No camera access here.")+'</p>');return}
   navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:false}).then(function(s){
    if(!document.getElementById("dk-mirror")){s.getTracks().forEach(function(t){t.stop()});return}
    stream=s;vid=document.createElement("video");vid.playsInline=true;vid.muted=true;vid.srcObject=s;vid.play&&vid.play();wrap.hidden=false;alive=true;
    var W=480,Hh=360,x=cv.getContext("2d"),sm=document.createElement("canvas");sm.width=240;sm.height=180;var sx=sm.getContext("2d",{willReadFrequently:true});
    var t0=performance.now(),fig=null,nextF=t0+11000+Math.random()*8000,finale=false;
    function silhouette(c2,cx,top,hgt,al,close){
     c2.save();c2.globalAlpha=al;c2.fillStyle="#000";var w=hgt*.34;
     c2.beginPath();c2.ellipse(cx,top+hgt*.1,w*.34,hgt*.1,0,0,6.283);c2.fill();
     c2.beginPath();c2.moveTo(cx-w*.9,top+hgt);c2.quadraticCurveTo(cx-w,top+hgt*.3,cx-w*.3,top+hgt*.2);c2.lineTo(cx+w*.3,top+hgt*.2);c2.quadraticCurveTo(cx+w,top+hgt*.3,cx+w*.9,top+hgt);c2.fill();
     c2.strokeStyle="#000";c2.lineWidth=Math.max(2,hgt*.012);for(var i=-5;i<=5;i++){c2.beginPath();c2.moveTo(cx+i*w*.1,top+hgt*.02);c2.quadraticCurveTo(cx+i*w*.2,top+hgt*.35,cx+i*w*.17,top+hgt*.75);c2.stroke()}
     if(close){c2.fillStyle="#e9e3d6";c2.globalAlpha=al*.5;c2.beginPath();c2.ellipse(cx-w*.12,top+hgt*.1,hgt*.012,hgt*.018,0,0,6.283);c2.ellipse(cx+w*.12,top+hgt*.1,hgt*.012,hgt*.018,0,0,6.283);c2.fill()}
     c2.restore()}
    function frame(){
     if(!alive)return;raf=requestAnimationFrame(frame);var now=performance.now(),el=(now-t0)/1000;
     if(vid.readyState>=2){
      sx.save();sx.translate(240,0);sx.scale(-1,1);sx.drawImage(vid,0,0,240,180);sx.restore();
      var im=sx.getImageData(0,0,240,180),p=im.data;
      for(var i=0;i<p.length;i+=4){var g=(p[i]*.3+p[i+1]*.59+p[i+2]*.11);g=Math.max(0,(g-40)*1.1)*.78+(Math.random()-.5)*34;p[i]=g*1.02;p[i+1]=g*.98;p[i+2]=g*.95}
      sx.putImageData(im,0,0);x.imageSmoothingEnabled=false;x.drawImage(sm,0,0,W,Hh)}
     var vg=x.createRadialGradient(W/2,Hh/2,60,W/2,Hh/2,W*.62);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(1,"rgba(0,0,0,.85)");x.fillStyle=vg;x.fillRect(0,0,W,Hh);
     if(!fig&&now>nextF&&el<92){fig={t:now,side:Math.random()<.5?.2:.8,dur:1700+Math.random()*900,close:false};nextF=now+16000+Math.random()*14000}
     if(!finale&&el>=80){finale=true;fig={t:now,side:.5,dur:4200,close:true};nextF=1e12}
     if(fig){var k=(now-fig.t)/fig.dur;if(k>=1){fig=null}else{var al=k<.7?.32*k/.7:.34*(Math.random()<.08?.2:1);if(fig.close)al*=1.4;silhouette(x,W*fig.side,fig.close?20:70,fig.close?Hh*.96:Hh*.78,al,fig.close)}}
     if(el>96&&!msg.textContent){msg.textContent=TM("Не оборачивайся.","Do not turn around.");try{ach("mirror")}catch(e){}}
     if(el>102){alive=false;setTimeout(function(){H.closeModal()},1800)}
     x.fillStyle="rgba(0,0,0,.18)";for(var y=0;y<Hh;y+=3)x.fillRect(0,y,W,1)}
    frame()
   }).catch(function(){m.body.insertAdjacentHTML("beforeend",'<p class="dkp">'+TM("Камера недоступна. Режим не работает.","The camera is unavailable. The mode cannot run.")+'</p>')})};
 }
 H.quiet=quiet;H.radio=radio;H.breath=breath;H.mirror=mirror;
})();

(function(){
 var H=window.HA,TM=H.TM,RM=H.RM;
 function lerp(a,b,t){return a+(b-a)*t}
 function two(n){return n<10?"0"+n:""+n}

 /* ================= 7. THE CORRIDOR (procedural tape, no sound) ================= */
 function corridor(){
  var raf=0,alive=false;
  var m=H.modal("corr",TM("Коридор","The corridor"),"tape",function(){alive=false;cancelAnimationFrame(raf)});
  m.body.innerHTML='<p class="dkp">'+esc(TM("Двадцать секунд записи с камеры в пустом коридоре. Без звука. Смотрите на дальний конец.","Twenty seconds of camera footage in an empty corridor. No sound. Watch the far end."))+'</p><div class="co-wrap"><canvas id="co-cv" width="640" height="360"></canvas></div><button type="button" class="btn" id="co-go">'+ic("tape")+esc(TM("Включить запись","Play the tape"))+'</button>';
  var cv=m.body.querySelector("#co-cv"),x=cv.getContext("2d"),go=m.body.querySelector("#co-go");
  var W=640,Hh=360,nz=document.createElement("canvas");nz.width=160;nz.height=90;var nx=nz.getContext("2d"),ni=nx.createImageData(160,90);
  function persp(u){return (1-1/(1+3*u))/.75}
  var FL=[[1.5,.10],[2.6,.10],[4.2,.16],[6.8,.26],[7.0,.26],[9.1,.34],[11.2,.46],[13.0,.58],[14.6,.70],[15.9,.80],[16.7,.88],[17.4,.93],[17.9,.98],[18.2,.98]];
  var FD=[.14,.1,.2,.22,.1,.2,.26,.2,.28,.22,.12,.16,.14,.28];
  function wallQuad(side,u1,u2,y1,y2){
   var t1=persp(u1),t2=persp(u2);function px(t){return side<0?lerp(0,280,t):lerp(640,360,t)}
   function top(t){return lerp(0,130,t)}function bot(t){return lerp(360,200,t)}
   var a=[px(t1),lerp(top(t1),bot(t1),y1)],b=[px(t2),lerp(top(t2),bot(t2),y1)],c=[px(t2),lerp(top(t2),bot(t2),y2)],d=[px(t1),lerp(top(t1),bot(t1),y2)];
   x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.lineTo(c[0],c[1]);x.lineTo(d[0],d[1]);x.closePath()}
  function lit(near,tt){
   var g=x.createLinearGradient(0,0,0,Hh);g.addColorStop(0,"#6e7970");g.addColorStop(.5,"#8a968c");g.addColorStop(1,"#4a544c");x.fillStyle=g;x.fillRect(0,0,W,Hh);
   x.fillStyle="#657067";x.beginPath();x.moveTo(0,0);x.lineTo(640,0);x.lineTo(360,130);x.lineTo(280,130);x.fill();
   x.fillStyle="#434c45";x.beginPath();x.moveTo(0,360);x.lineTo(640,360);x.lineTo(360,200);x.lineTo(280,200);x.fill();
   x.fillStyle="#7a867c";x.beginPath();x.moveTo(0,0);x.lineTo(280,130);x.lineTo(280,200);x.lineTo(0,360);x.fill();
   x.fillStyle="#707c72";x.beginPath();x.moveTo(640,0);x.lineTo(360,130);x.lineTo(360,200);x.lineTo(640,360);x.fill();
   x.fillStyle="#222924";x.fillRect(280,130,80,70);
   [[.05,.26],[.34,.52],[.6,.78]].forEach(function(r){[-1,1].forEach(function(s){
    wallQuad(s,r[0],r[1],.1,.96);x.fillStyle="#b2bbae";x.fill();x.strokeStyle="#2d352f";x.lineWidth=2;x.stroke();
    var mid=(r[0]+r[1])/2;wallQuad(s,mid-.002,mid+.002,.1,.96);x.fillStyle="#2d352f";x.fill()})});
   x.fillStyle="rgba(255,255,235,.85)";x.beginPath();x.moveTo(250,30);x.lineTo(390,30);x.lineTo(372,64);x.lineTo(268,64);x.fill();
   // she
   var t=1-near,ct=persp(t>1?1:t),hgt=lerp(360,70,Math.min(1,ct))*.78,base=lerp(360,200,Math.min(1,ct)),cx=320+Math.sin(tt*6)*1.5;if(near>.97){hgt*=1.55;base+=70}var w=hgt*.18,top=base-hgt;
   x.fillStyle="#d9d7cc";x.beginPath();x.moveTo(cx-w*.45,top+hgt*.2);x.lineTo(cx+w*.45,top+hgt*.2);x.lineTo(cx+w*.95,base);x.lineTo(cx-w*.95,base);x.fill();
   x.strokeStyle="#cfcdc2";x.lineWidth=Math.max(1,hgt*.02);x.beginPath();x.moveTo(cx-w*.45,top+hgt*.24);x.lineTo(cx-w*.75,top+hgt*.62);x.moveTo(cx+w*.45,top+hgt*.24);x.lineTo(cx+w*.7,top+hgt*.6);x.stroke();
   x.fillStyle="#050505";x.beginPath();x.ellipse(cx+hgt*.01,top+hgt*.1,w*.5,hgt*.1,.1,0,6.283);x.fill();
   x.strokeStyle="#050505";x.lineWidth=Math.max(1.2,hgt*.016);for(var i=-5;i<=5;i++){x.beginPath();x.moveTo(cx+i*w*.1,top+hgt*.04);x.quadraticCurveTo(cx+i*w*.16,top+hgt*.3,cx+i*w*.13+Math.sin(tt*3+i)*2,top+hgt*.62);x.stroke()}
   x.fillStyle="rgba(255,255,255,.12)";x.fillRect(0,0,W,Hh)}
  function post(tt,el){
   nx.putImageData(ni,0,0);
   var p=ni.data;for(var i=0;i<p.length;i+=4){var v=Math.random()*255|0;p[i]=v;p[i+1]=v;p[i+2]=v;p[i+3]=255}
   x.globalAlpha=.16;x.imageSmoothingEnabled=false;x.drawImage(nz,0,0,W,Hh);x.globalAlpha=1;
   x.fillStyle="rgba(0,0,0,.22)";for(var y=0;y<Hh;y+=3)x.fillRect(0,y,W,1);
   var ty=(el*70)%(Hh+40)-20;x.fillStyle="rgba(255,255,255,.07)";x.fillRect(0,ty,W,8);
   x.font="14px monospace";x.fillStyle="rgba(235,235,225,.82)";x.fillText("PLAY ►",16,26);x.fillText("03:"+two(12+Math.floor(el/60))+":"+two(Math.floor(el)%60),16,Hh-18);x.textAlign="right";x.fillText("1998.07.14",W-16,Hh-18);x.textAlign="left";
   if(Math.floor(el*1.6)%2===0){x.fillStyle="#e3202b";x.beginPath();x.arc(W-26,24,5,0,6.283);x.fill()}}
  function draw(el){
   x.fillStyle="#020302";x.fillRect(0,0,W,Hh);
   var on=null;for(var i=0;i<FL.length;i++){if(el>=FL[i][0]&&el<FL[i][0]+FD[i]){on=FL[i];break}}
   if(on){lit(on[1],el)}else{var g=x.createRadialGradient(320,165,5,320,165,260);g.addColorStop(0,"rgba(40,52,44,.5)");g.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=g;x.fillRect(0,0,W,Hh)}
   post(el,el)}
  function start(){
   go.hidden=true;alive=true;var t0=performance.now();
   (function frame(){
    if(!alive)return;raf=requestAnimationFrame(frame);var el=(performance.now()-t0)/1000;
    if(RM&&el<20){draw(Math.floor(el*2)/2)}else draw(el);
    if(el>=20){alive=false;go.hidden=false;go.lastChild.textContent=TM("Ещё раз","Again");try{ach("corridor")}catch(e){}}})()}
  go.onclick=start;
  x.fillStyle="#020302";x.fillRect(0,0,W,Hh);
 }

 /* ================= 9. THE LOCKED ROOM (text game) ================= */
 var E_ALL=["turn","blink","answer","out","stay"];
 function room(){
  var S,typing=0,m=H.modal("room",TM("Запертая комната","The locked room"),"saw",function(){clearInterval(typing)});
  m.body.innerHTML='<div class="rm-box"><div class="rm-t" id="rm-t" aria-live="polite"></div><div class="rm-c" id="rm-c"></div><div class="rm-f" id="rm-f"></div></div>';
  var tEl=m.body.querySelector("#rm-t"),cEl=m.body.querySelector("#rm-c"),fEl=m.body.querySelector("#rm-f");
  function T2(r,e){return TM(r,e)}
  function wantName(){try{var w=Object.keys(MY).filter(function(i){return MY[i]==="want"&&F[i]});if(w.length)return T(F[w[0]].n)}catch(e){}return null}
  var nd={
   start:{t:function(){var h=new Date().getHours(),l=T2("Вы очнулись в тёмной комнате. Пахнет сырой соломой татами. Горит одна свеча. Дверь одна, и она закрыта.","You wake in a dark room. It smells of damp tatami straw. A single candle burns. There is one door and it is locked.");
    if(h<5)l+=" "+T2("За окном глубокая ночь, как и у вас сейчас.","It is deep night outside the window, as it is for you right now.");return l},
    c:[["Осмотреться","Look around","look"],["Подойти к двери","Go to the door","door"],["Прислушаться","Listen","listen"]]},
   look:{t:function(){var w=wantName(),l=T2("На низком столе: кассета без надписи, фонарик и записка «Не оборачивайся». В углу шкаф с бумажной дверцей.","On a low table: an unlabelled tape, a torch and a note: “Do not turn around.” A cupboard with a paper door stands in the corner.");
    if(w)l+=" "+T2("Под запиской список. Первое название: «"+w+"». Вы так его и не посмотрели.","Under the note a list. The first title: “"+w+"”. You never watched it.");return l},
    c:[["Взять кассету","Take the tape","tape",{tape:1}],["Открыть шкаф","Open the cupboard","closet"],["Вернуться","Go back","start"]]},
   tape:{t:function(){return T2("В углу старый магнитофон. Вы вставляете кассету. Идёт шипение, потом ваш собственный голос, очень спокойный: «Не открывай шкаф. Ты откроешь шкаф.»","An old player sits in the corner. You insert the tape. Hiss, then your own voice, very calm: “Do not open the cupboard. You will open the cupboard.”")},
    c:[["Открыть шкаф","Open the cupboard","closet"],["Выключить","Switch it off","look"]]},
   door:{t:function(){return T2("Дверь заперта снаружи. Из-за неё слышно дыхание. Оно совпадает с вашим, но чуть запаздывает.","The door is locked from outside. Breathing comes from behind it. It matches yours but lags a little.")},
    c:[["Постучать","Knock","knock"],["Заглянуть в щель","Look through the gap","peek"],["Вернуться","Go back","start"]]},
   knock:{t:function(){return T2("Вы постучали трижды. Секунду спустя трижды постучали в ответ. Не из коридора, а из шкафа за вашей спиной.","You knock three times. A second later three knocks answer. Not from the corridor but from the cupboard behind you.")},
    c:[["Открыть шкаф","Open the cupboard","closet"],["Не оборачиваться","Do not turn","look"]]},
   peek:{t:function(){return T2("Щель шириной с палец. Сначала темнота. Потом в темноте открывается глаз. Он смотрит так, как смотрят на вещь, которую давно искали.","A gap as wide as a finger. First darkness. Then an eye opens in the dark. It looks the way one looks at something long searched for.")},
    c:[["Отшатнуться","Recoil","start"],["Моргнуть","Blink","blink"]]},
   blink:{end:"blink",t:function(){return T2("Вы моргнули. Глаза в щели больше нет. Теперь он у вас: вы чувствуете чужое веко. Не поднимайте руку к лицу.","You blink. The eye in the gap is gone. Now it is yours: you feel a stranger's eyelid. Do not raise your hand to your face.")}},
   listen:{t:function(){return T2("Тишина. Потом, тихо, под полом: капает вода. Раз. Два. Три. Счёт идёт всё быстрее.","Silence. Then, softly, under the floor: water dripping. One. Two. Three. The count speeds up.")},
    c:[["Слушать дальше","Keep listening","listen2"],["Вернуться","Go back","start"]]},
   listen2:{t:function(){return T2("Капли складываются в слова. Вы не знаете языка, но понимаете: это обращено к вам. Это ваше имя. Вы его не называли.","The drops form words. You do not know the language but you understand: it is meant for you. It is your name. You never said it.")},
    c:[["Ответить шёпотом","Answer in a whisper","answer"],["Зажать уши","Cover your ears","cover"]]},
   cover:{t:function(){return T2("Вы зажали уши. Звук не исчез. Он стал громче: он внутри.","You cover your ears. The sound does not go. It gets louder: it is inside.")},
    c:[["Вернуться","Go back","start"]]},
   answer:{end:"answer",t:function(){return T2("Вы ответили шёпотом. Голос под полом замолчал. Потом сказал вашим голосом: «Спасибо».","You answer in a whisper. The voice under the floor falls silent. Then it says, in your voice: “Thank you.”")}},
   closet:{t:function(){return T2("Шкаф скрипит. Внутри вешалки и старые кимоно. Одно висит ближе других и покачивается без ветра.","The cupboard creaks. Inside: hangers and old kimonos. One hangs closer than the rest and sways with no wind.")},
    c:[["Раздвинуть кимоно","Part the kimonos","kimono"],["Закрыть шкаф","Close it","look"]]},
   kimono:{t:function(){return T2("За кимоно в стене маленькая дверца. В замке торчит ключ. Чтобы дотянуться, придётся встать спиной ко всей комнате.","Behind the kimonos is a small door in the wall. A key sticks out of the lock. To reach it you must stand with your back to the whole room.")},
    c:[["Встать спиной и взять ключ","Turn your back and take the key","takekey",{key:1}],["Отступить","Step back","closet"]]},
   takekey:{t:function(){return T2("Ключ холодный и мокрый. За спиной скрипнула половица. Потом ещё. И ещё: много, одновременно.","The key is cold and wet. A board creaks behind you. Then another. And another: many, all at once.")},
    c:[["Бежать к двери","Run to the door","rundoor"],["Обернуться","Turn around","turn"]]},
   turn:{end:"turn",t:function(){return T2("Вы обернулись. Комната пуста, свеча погасла. Когда она загорелась снова, вы стояли у шкафа спиной ко всему миру. И она теперь тоже.","You turn. The room is empty and the candle has gone out. When it lights again you are standing by the cupboard, back to the whole world. And so is she.")}},
   rundoor:{t:function(){return S.key?T2("Ключ подходит. Дверь открывается наружу, в коридор, где горит одна лампа. В конце кто-то стоит. Вы уже знаете, как он называется.","The key fits. The door opens outward into a corridor lit by one lamp. Someone stands at the far end. You already know what it is called."):T2("Вы дёргаете дверь. Заперто. У вас нет ключа. За спиной очень тихо.","You pull the door. Locked. You have no key. Behind you it is very quiet.")},
    c:function(){return S.key?[["Выйти","Step out","out"],["Закрыть дверь и остаться","Shut it and stay","stay"]]:[["Обернуться","Turn around","turn"]]}},
   out:{end:"out",t:function(){return T2("Вы вышли. Коридор длинный. Лампа гаснет. Вы идёте, не оглядываясь, пока впереди не появляется свет. Это экран. Вы читаете эти слова. Она рядом.","You step out. The corridor is long. The lamp dies. You walk without looking back until light appears ahead. It is a screen. You are reading these words. She is close.")}},
   stay:{end:"stay",t:function(){return T2("Вы закрыли дверь и остались. В комнате тихо. Всё хорошо. Кроме одного: вы не помните, как давно здесь.","You shut the door and stay. The room is quiet. All is well. Except one thing: you do not remember how long you have been here.")}}
  };
  function ends(){return H.st("ha-room-end",[])}
  function type(txt,done){
   clearInterval(typing);tEl.textContent="";if(RM||txt.length>400){tEl.textContent=txt;done();return}
   var i=0;typing=setInterval(function(){i+=2;tEl.textContent=txt.slice(0,i);if(i>=txt.length){clearInterval(typing);done()}},16);
   tEl.onclick=function(){clearInterval(typing);tEl.textContent=txt;done()}}
  function go(id){
   var n=nd[id];S.at=id;cEl.innerHTML="";fEl.textContent="";
   type(n.t(),function(){
    tEl.onclick=null;
    if(n.end){var e=ends();if(e.indexOf(n.end)<0){e.push(n.end);H.ss("ha-room-end",e)}
     fEl.innerHTML=esc(TM("Концовка","Ending"))+": <b>"+ends().length+" / "+E_ALL.length+"</b>";
     try{ach("room")}catch(e2){}
     cEl.innerHTML='<button type="button" class="btn" id="rm-again">'+esc(TM("Начать заново","Start again"))+'</button>';cEl.querySelector("#rm-again").onclick=function(){S={key:0,tape:0};go("start")};return}
    var cs=typeof n.c==="function"?n.c():n.c;
    cs.forEach(function(c){var b=document.createElement("button");b.type="button";b.className="rm-b";b.textContent=TM(c[0],c[1]);b.onclick=function(){if(c[3])for(var k in c[3])S[k]=c[3][k];go(c[2])};cEl.appendChild(b)});
    var first=cEl.querySelector("button");if(first)first.focus()})}
  S={key:0,tape:0};go("start");
 }

 /* ================= panel in the Play section ================= */
 function panel(){
  var host=document.getElementById("play");if(!host||document.getElementById("dark"))return;
  var btn=function(id,icn,r,e){return '<button type="button" class="btn dkb2" data-dk="'+id+'">'+ic(icn)+esc(TM(r,e))+'</button>'};
  host.insertAdjacentHTML("beforeend",'<div class="pbox" id="dark"><h3>'+ic("saw")+esc(TM("Тёмные режимы","Dark modes"))+'</h3><p class="cap">'+esc(TM("Шесть режимов, от тихого до очень личного. Часть из них просит наушники, микрофон или камеру, и всегда с вашего согласия.","Six modes, from quiet to very personal. Some ask for headphones, a microphone or a camera, always with your consent."))+'</p><div class="dkgrid">'+
   btn("quiet","ghost","Тише (наушники)","Hush (headphones)")+btn("radio","tape","Радио","Radio")+btn("breath","saw","Не дыши (микрофон)","Do not breathe (mic)")+btn("mirror","eye","Зеркало (камера)","Mirror (camera)")+btn("corridor","tape","Коридор","The corridor")+btn("room","pent","Запертая комната","The locked room")+
   '</div><label class="calm"><input type="checkbox" id="dk-calm"'+(H.calm()?" checked":"")+'> <span>'+esc(TM("Спокойный режим: отключить фоновые страшилки (шёпот, порча страницы, ложные ошибки, пропавший фильм)","Calm mode: turn off the background scares (whispers, page decay, fake errors, missing film)"))+'</span></label></div>');
  host.querySelectorAll("[data-dk]").forEach(function(b){b.onclick=function(){var k=b.dataset.dk;({quiet:H.quiet,radio:H.radio,breath:H.breath,mirror:H.mirror,corridor:corridor,room:room})[k]()}});
  document.getElementById("dk-calm").onchange=function(){H.setCalm(this.checked)}}
 var _rp=window.renderPlay;if(_rp)window.renderPlay=function(){_rp.apply(this,arguments);panel()};
 panel();
 H.corridor=corridor;H.room=room;
 var q=/[?&]dark=(\w+)/.exec(location.search);if(q&&H[q[1]])setTimeout(H[q[1]],800);
})();


/* ===== v79: sounds, 7-day curse, viewer dossier, subscribe ===== */
(function(){
 var H=window.HA,TM=H.TM,st=H.st,ss=H.ss,mk=H.mk;
 var ac=null;
 function AC(){if(ac){try{ac.resume()}catch(e){}return ac}var C=window.AudioContext||window.webkitAudioContext;if(!C)return null;try{ac=new C();ac.resume()}catch(e){ac=null}return ac}
 function sfxOn(){return !H.calm()&&st("ha-sfx",true)!==false}
 function nbuf(c,sec){var n=Math.floor(c.sampleRate*sec),b=c.createBuffer(1,n,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;return b}
 function out(c,pan,g,wet){
  var m=c.createGain();m.gain.value=g;var p=c.createStereoPanner?c.createStereoPanner():null;if(p){p.pan.value=pan||0}
  var lp=c.createBiquadFilter();lp.type="lowpass";lp.frequency.value=4200;
  var dl=c.createDelay(1);dl.delayTime.value=.19;var fb=c.createGain();fb.gain.value=.38;var df=c.createBiquadFilter();df.type="lowpass";df.frequency.value=1800;
  var wg=c.createGain();wg.gain.value=wet==null?.35:wet;
  m.connect(lp);lp.connect(p||c.destination);if(p)p.connect(c.destination);
  lp.connect(dl);dl.connect(df);df.connect(fb);fb.connect(dl);df.connect(wg);wg.connect(p||c.destination);
  return m}
 var FM={a:[800,1250,2600],i:[310,2250,3050],u:[340,1300,2300],e:[520,1900,2600],o:[520,950,2400]};
 /* whispered syllables: noise through vowel formants, consonant noise burst first */
 function syl(c,dst,t0,tok,dur,fs){
  var cc=tok.slice(0,-1),v=tok.slice(-1),f=FM[v]||FM.a;
  var nb=nbuf(c,.5);
  if(cc){var s=c.createBufferSource();s.buffer=nb;var b=c.createBiquadFilter();
   if(cc==="s"||cc==="z"){b.type="highpass";b.frequency.value=5200}else if(cc==="sh"||cc==="ch"||cc==="j"){b.type="bandpass";b.frequency.value=3600;b.Q.value=.9}
   else if(cc==="k"||cc==="g"){b.type="bandpass";b.frequency.value=2300;b.Q.value=.8}else if(cc==="t"||cc==="d"){b.type="bandpass";b.frequency.value=4800;b.Q.value=.8}
   else if(cc==="n"||cc==="m"||cc==="r"||cc==="w"||cc==="y"){b.type="lowpass";b.frequency.value=900}else{b.type="bandpass";b.frequency.value=1400;b.Q.value=.6}
   var g=c.createGain(),cd=(cc==="s"||cc==="sh"||cc==="ch")?.08:.04;g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(.8,t0+.008);g.gain.exponentialRampToValueAtTime(.001,t0+cd);
   s.connect(b);b.connect(g);g.connect(dst);s.start(t0);s.stop(t0+cd+.02)}
  var s2=c.createBufferSource();s2.buffer=nb;s2.loop=true;var env=c.createGain();var vt=t0+(cc?.04:0);
  env.gain.setValueAtTime(0,vt);env.gain.linearRampToValueAtTime(1,vt+dur*.3);env.gain.linearRampToValueAtTime(0,vt+dur);
  for(var i=0;i<3;i++){var bp=c.createBiquadFilter();bp.type="bandpass";bp.frequency.value=f[i]*(fs||1);bp.Q.value=[9,10,12][i];var gg=c.createGain();gg.gain.value=[1,.7,.4][i]*2.2;s2.connect(bp);bp.connect(gg);gg.connect(env)}
  env.connect(dst);s2.start(vt);s2.stop(vt+dur+.05)}
 function whisper(txt,o){
  o=o||{};var c=AC();if(!c)return 0;var t=c.currentTime+(o.at||.02),dst=out(c,o.pan||0,o.gain==null?.5:o.gain,o.wet),sy=txt.split(" "),sp=o.speed||.2,fs=o.fs||1;
  /* inhale */
  var s=c.createBufferSource();s.buffer=nbuf(c,.6);var b=c.createBiquadFilter();b.type="bandpass";b.frequency.value=1700;b.Q.value=.5;var g=c.createGain();
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.45,t+.22);g.gain.linearRampToValueAtTime(0,t+.45);s.connect(b);b.connect(g);g.connect(dst);s.start(t);s.stop(t+.5);
  t+=.5;sy.forEach(function(k,i){var d=sp*(1+(Math.random()-.5)*.3)*(i===sy.length-1?1.5:1);syl(c,dst,t,k,d,fs*(1+(Math.random()-.5)*.05));t+=d*.92});
  return t-c.currentTime}
 function creak(o){
  o=o||{};var c=AC();if(!c)return;var t=c.currentTime+(o.at||.02),d=o.dur||1.4,dst=out(c,o.pan||0,o.gain==null?.22:o.gain,.2);
  var os=c.createOscillator();os.type="sawtooth";var f0=60+Math.random()*50;os.frequency.setValueAtTime(f0,t);
  for(var x=0;x<d;x+=.03)os.frequency.setValueAtTime(f0*(1+x*.35)*(1+(Math.random()-.5)*.35),t+x);
  var bp=c.createBiquadFilter();bp.type="bandpass";bp.frequency.value=380+Math.random()*300;bp.Q.value=7;
  var g=c.createGain();g.gain.setValueAtTime(0,t);
  for(x=0;x<d;x+=.06+Math.random()*.08){g.gain.linearRampToValueAtTime(.4+Math.random()*.6,t+x);g.gain.linearRampToValueAtTime(.05,t+x+.04)}
  g.gain.linearRampToValueAtTime(0,t+d);os.connect(bp);bp.connect(g);g.connect(dst);os.start(t);os.stop(t+d+.05)}
 function breath(o){
  o=o||{};var c=AC();if(!c)return;var t=c.currentTime+(o.at||.02),n=o.n||1,dst=out(c,o.pan||0,o.gain==null?.3:o.gain,.3);
  for(var i=0;i<n;i++){var s=c.createBufferSource();s.buffer=nbuf(c,1.8);var b=c.createBiquadFilter();b.type="bandpass";b.frequency.value=900;b.Q.value=.6;var g=c.createGain();
   var a=t+i*2.6;g.gain.setValueAtTime(0,a);g.gain.linearRampToValueAtTime(.8,a+.9);g.gain.linearRampToValueAtTime(0,a+1.6);
   b.frequency.setValueAtTime(700,a);b.frequency.linearRampToValueAtTime(1500,a+.9);b.frequency.linearRampToValueAtTime(600,a+1.6);
   s.connect(b);b.connect(g);g.connect(dst);s.start(a);s.stop(a+1.8)}}
 function ring(n){var c=AC();if(!c)return;var dst=c.createGain();dst.gain.value=.12;dst.connect(c.destination);var t=c.currentTime+.02;
  for(var i=0;i<(n||2);i++)[[440,0],[480,0]].forEach(function(x){var o=c.createOscillator();o.type="sine";o.frequency.value=x[0];var g=c.createGain();var a=t+i*.55;g.gain.setValueAtTime(0,a);g.gain.linearRampToValueAtTime(1,a+.02);g.gain.setValueAtTime(1,a+.38);g.gain.linearRampToValueAtTime(0,a+.42);o.connect(g);g.connect(dst);o.start(a);o.stop(a+.5)})}
 H.sfx={whisper:whisper,creak:creak,breath:breath,ring:ring,on:sfxOn};

 /* ---- whisper on opening a J-Horror review ---- */
 var NM=null;
 function idByTitle(t){if(!NM){NM={};REVIEWS.forEach(function(r){NM[F[r.id].n.ru]=r.id;NM[F[r.id].n.en]=r.id})}return NM[t]}
 var SPECIAL={ringu:function(){whisper("na na ni chi",{pan:-.4,gain:.55,speed:.24});setTimeout(function(){breath({gain:.18,pan:.4})},2600)},
  juon:function(){creak({gain:.26,pan:.3,dur:1.7});setTimeout(function(){breath({gain:.28,pan:-.2,n:2})},900);setTimeout(function(){whisper("u shi ro",{pan:.5,gain:.5,speed:.28})},3300)}};
 var heard={};
 var cards=document.getElementById("cards");
 if(cards)cards.addEventListener("click",function(e){
  var sm=e.target.closest&&e.target.closest("summary");if(!sm)return;var d=sm.parentNode;if(!d||d.open)return;
  if(!sfxOn())return;var card=sm.closest(".card"),h=card&&card.querySelector("h3");if(!h)return;var id=idByTitle(h.textContent.trim());if(!id)return;
  if(SPECIAL[id]){SPECIAL[id]();return}
  var r=REVIEWS.filter(function(x){return x.id===id})[0];
  if(r&&r.gn.indexOf("jhorror")>-1&&!heard[id]&&Math.random()<.6){heard[id]=1;whisper("mi ta na",{pan:Math.random()*1.2-.6,gain:.28,speed:.26})}
 },true);

 /* ---- ambience in the locked room: creaks and breathing ---- */
 var ambT=0,ambOn=false;
 function ambLoop(){
  if(!ambOn)return;if(!document.getElementById("dk-room")){ambOn=false;return}
  if(sfxOn()||!H.calm()){var r=Math.random();if(r<.55)creak({pan:Math.random()*1.6-.8,gain:.16,dur:.9+Math.random()*1.3});else breath({pan:Math.random()*1.6-.8,gain:.16})}
  ambT=setTimeout(ambLoop,4500+Math.random()*5500)}
 new MutationObserver(function(){var on=!!document.getElementById("dk-room");if(on&&!ambOn){ambOn=true;if(st("ha-sfx",true)!==false&&!H.calm()){AC();ambT=setTimeout(ambLoop,2500)}else ambOn=false}else if(!on&&ambOn){ambOn=false;clearTimeout(ambT)}}).observe(document.body,{childList:true});

 /* ================= the 7-day curse ================= */
 var DAY=864e5,K="ha-curse";
 function cs(){return st(K,null)}
 function daysLeft(c){return Math.max(0,7-Math.floor((Date.now()-c.t)/DAY))}
 function finishCurse(b,cvEl){var c={t:Date.now(),done:false,miss:0};ss(K,c);var tx=b.querySelector(".cv-t");if(tx)tx.innerHTML="<b>"+TM("Вы посмотрели кассету.","You watched the tape.")+"</b><br>"+TM("Через семь дней вам позвонят.","In seven days, someone will call.")+"<br><small>"+TM("Закройте окно и живите как обычно.","Close this window and go on as usual.")+"</small>";if(cvEl)cvEl.style.opacity=".15"}
 function playTape2(m,onEnd){
  var h=H.vhs(m.body,{src:"media/tape2.mp4",filter:(onEnd&&onEnd.filter)||st("ha-t2f","vhs"),fallback:onEnd&&onEnd.fallback,done:onEnd&&onEnd.done});
  m.onClose=function(){try{h.stop()}catch(e){}}}
 function cursePlay(m){playTape2(m,{filter:"cursed",fallback:function(){cursePlayCv(m)},done:function(b,v){finishCurse(b,v)}})}
 function cursePlayCv(m){
  var b=m.body;
  b.innerHTML='<div class="cv-box"><canvas class="cv" width="320" height="200" aria-label="video"></canvas><div class="cv-t" aria-live="polite"></div></div>';
  var cv=b.querySelector(".cv"),x=cv.getContext("2d"),tx=b.querySelector(".cv-t"),W=320,Hh=200,t0=performance.now(),stop=false,gentle=H.calm()||H.RM;
  var frames=[[0,3,"",0],[3,5.2,"井",1],[5.2,7,"水",1],[7,9,"髪",1],[9,10.4,"",2],[10.4,12.4,"七日",1],[12.4,14,"",0]];
  var id=x.createImageData(W,Hh);
  function draw(now){
   if(stop||!document.body.contains(cv))return;var t=(now-t0)/1000,p=id.data,g=gentle?30:55,fr=null;
   frames.forEach(function(f){if(t>=f[0]&&t<f[1])fr=f});
   var k=fr?fr[3]:0,bright=t<3?1:.45;
   for(var i=0;i<p.length;i+=4){var v=Math.random()*g*bright;p[i]=v*.85;p[i+1]=v;p[i+2]=v*.95;p[i+3]=255}
   x.putImageData(id,0,0);
   /* the well: a dark ring that slowly grows and a pale glow */
   if(t>3){var rr=20+Math.min(t-3,9)*9,gr=x.createRadialGradient(W/2,Hh/2+10,rr*.1,W/2,Hh/2+10,rr);gr.addColorStop(0,"rgba(0,0,0,.95)");gr.addColorStop(.75,"rgba(0,0,0,.9)");gr.addColorStop(1,"rgba(90,130,120,.45)");x.fillStyle=gr;x.beginPath();x.ellipse(W/2,Hh/2+10,rr,rr*.8,0,0,6.283);x.fill()}
   if(fr&&fr[2]){x.save();x.font="900 "+(k===1?64:40)+"px serif";x.textAlign="center";x.fillStyle="rgba(215,205,195,"+(gentle?.5:.4+.4*Math.abs(Math.sin(t*3)))+")";x.fillText(fr[2],W/2+(gentle?0:(Math.random()-.5)*5),Hh/2+22);x.restore()}
   if(k===2&&!gentle){var ys=Math.random()*Hh;x.fillStyle="rgba(200,215,210,.35)";x.fillRect(0,ys,W,2+Math.random()*3)}
   if(!gentle&&Math.random()<.04){x.drawImage(cv,0,0,W,Hh,Math.random()*8-4,0,W,Hh)}
   if(t<14)requestAnimationFrame(draw);else done()}
  function done(){
   if(stop)return;stop=true;var c={t:Date.now(),done:false,miss:0};ss(K,c);
   tx.innerHTML="<b>"+TM("Вы посмотрели кассету.","You watched the tape.")+"</b><br>"+TM("Через семь дней вам позвонят.","In seven days, someone will call.")+"<br><small>"+TM("Закройте окно и живите как обычно.","Close this window and go on as usual.")+"</small>";
   cv.style.opacity=".12";try{ach&&0}catch(e){}}
  if(sfxOn()){AC();var c=ac;if(c){var o=c.createOscillator(),g=c.createGain();o.type="sine";o.frequency.value=55;g.gain.value=0;g.gain.linearRampToValueAtTime(.05,c.currentTime+3);g.gain.linearRampToValueAtTime(0,c.currentTime+14);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+14.1);
   var s=c.createBufferSource();s.buffer=nbuf(c,3);s.loop=true;var f=c.createBiquadFilter();f.type="bandpass";f.frequency.value=2200;var sg=c.createGain();sg.gain.setValueAtTime(.05,c.currentTime);sg.gain.linearRampToValueAtTime(.001,c.currentTime+3);sg.gain.setValueAtTime(.02,c.currentTime+3.1);sg.gain.linearRampToValueAtTime(0,c.currentTime+13.5);s.connect(f);f.connect(sg);sg.connect(c.destination);s.start();s.stop(c.currentTime+14);
   setTimeout(function(){if(!stop)whisper("na na ni chi",{gain:.5,pan:-.3,speed:.24})},8200);setTimeout(function(){if(!stop)creak({gain:.2,pan:.5})},10200)}}
  requestAnimationFrame(draw);
  m.onClose=function(){stop=true}}
 function curse(){
  var c=cs(),m=H.modal("curse",TM("Просмотр видео","Watch the video"),"tape");
  var b=m.body;
  function intro(){
   var s="";
   if(c&&!c.done){var dl=daysLeft(c);s='<p class="dkp">'+TM("Вы уже посмотрели кассету. Осталось дней: ","You already watched the tape. Days left: ")+'<b>'+dl+'</b>.</p><p class="dkn">'+TM("Ждите звонка. Второй раз смотреть не нужно.","Wait for the call. No need to watch it twice.")+'</p>';b.innerHTML=s;return}
   b.innerHTML='<p class="dkp">'+TM("Четырнадцать секунд без смысла: помехи, колодец, несколько знаков. Говорят, после просмотра через семь дней зазвонит телефон.","Fourteen seconds that make no sense: static, a well, a few signs. They say that seven days after watching, the phone rings.")+'</p>'+
    '<p class="dkn">'+TM("Внимание: мигающие кадры. Если вам это вредно, не запускайте. На сайте всё это только игра: ничего не отправляется и не записывается, кроме одной отметки в вашем браузере.","Warning: flashing images. If that can harm you, do not start. It is only a game: nothing is sent or recorded except one note in your browser.")+'</p>'+
    (c&&c.done?'<p class="dkn">'+TM("Вы уже прошли это раз. Можно снова.","You have been through this once already. You can do it again.")+'</p>':'')+
    '<button type="button" class="btn" id="cu-go">'+ic("tape")+esc(TM("Нажать PLAY","Press PLAY"))+'</button>';
   b.querySelector("#cu-go").onclick=function(){cursePlay(m)}}
  intro()}
 /* the phone call */
 var cuBusy=false;
 function callUI(c){
  if(cuBusy||document.getElementById("cu"))return;cuBusy=true;
  var o=mk("div","cu","",document.body);o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");
  o.innerHTML='<div class="cu-c"><div class="cu-n">'+TM("Неизвестный номер","Unknown number")+'</div><div class="cu-s">'+TM("входящий звонок","incoming call")+'</div><div class="cu-w" aria-live="polite"></div><div class="cu-b"><button type="button" class="btn o cu-no">'+TM("Отклонить","Decline")+'</button><button type="button" class="btn cu-ok">'+TM("Ответить","Answer")+'</button></div></div>';
  var n=0,done=false,w=o.querySelector(".cu-w");
  function rg(){if(done)return;if(sfxOn())ring(2);try{navigator.vibrate&&navigator.vibrate([400,200,400])}catch(e){}if(++n<6)setTimeout(rg,2800);else{done=true;close();c.miss=(c.miss||0)+1;ss(K,c);toast(TM("Пропущенный вызов (1)","Missed call (1)"),TM("Неизвестный номер.","Unknown number."))}}
  function close(){o.remove();cuBusy=false;try{navigator.vibrate&&navigator.vibrate(0)}catch(e){}}
  setTimeout(rg,300);
  o.querySelector(".cu-no").onclick=function(){if(done)return;done=true;close();c.miss=(c.miss||0)+1;ss(K,c);toast(TM("Вызов отклонён","Call declined"),TM("Она перезвонит.","She will call back."))};
  o.querySelector(".cu-ok").onclick=function(){if(done)return;done=true;o.classList.add("sn");o.querySelector(".cu-s").textContent=TM("соединено","connected");
   var L=[["……","……"],["みたな","みたな"],["ななにち","ななにち"],["Семь дней.","Seven days."]],i=0;
   if(sfxOn()){AC();breath({gain:.35,pan:0})}
   var iv=setInterval(function(){if(i>=L.length){clearInterval(iv);setTimeout(function(){close();c.done=true;c.doneAt=Date.now();ss(K,c);ach("cursed");toast(TM("Соединение прервано","Call dropped"),TM("Проклятие снято. Или нет.","The curse is lifted. Or is it?"))},1500);return}
    w.textContent=TM(L[i][0],L[i][1]);if(i===1&&sfxOn())whisper("mi ta na",{gain:.6,pan:0,speed:.22,wet:.2});if(i===2&&sfxOn())whisper("na na ni chi",{gain:.55,pan:-.2,speed:.26});i++},1700)}}
 function chk(){
  var c=cs();if(!c||c.done)return;var days=Math.floor((Date.now()-c.t)/DAY);
  if(document.hidden||document.getElementById("cu")||H.modalOpen())return;
  if(days>=7){
   if(H.calm()){c.done=true;c.doneAt=Date.now();ss(K,c);ach("cursed");toast(TM("Сообщение","Message"),TM("Семь дней прошли. Это была игра.","Seven days have passed. It was only a game."));return}
   callUI(c);return}
  if(days>=1&&st("ha-curse-day","")!==H.today()){ss("ha-curse-day",H.today());toast(TM("Прошло дней: "+days,"Days passed: "+days),TM("Осталось: "+(7-days),"Left: "+(7-days)))}}
 var q=/[?&]curse=(\d+)/.exec(location.search);if(q){ss(K,{t:Date.now()-(+q[1])*DAY-1000,done:false,miss:0});ss("ha-curse-day","")}
 window.__curse=function(n){ss(K,{t:Date.now()-n*DAY-1000,done:false,miss:0});ss("ha-curse-day","");chk()};
 setTimeout(chk,q?1500:7000);setInterval(chk,60000);
 function tape2(){
  var m=H.modal("tape2","The Tape II","tape");
  m.body.innerHTML='<p class="dkp">'+esc(TM("Вторая кассета: пустой японский коридор, бумажные двери и кто-то за углом.","The second tape: an empty Japanese corridor, paper doors and someone around the corner."))+'</p><p class="dkn">'+esc(TM("Со звуком, 20 секунд. Внутри фильтры плёнки (VHS 98, Звонок, Ju-On, Проклятая), субтитры проклятия, волосы и шум ленты. Резких вспышек нет.","With sound, 20 seconds. Inside: tape filters (VHS 98, Ringu, Ju-On, Cursed), curse subtitles, hair and tape noise. No hard flashes."))+'</p><button type="button" class="btn" id="t2-go">'+ic("tape")+esc(TM("Нажать PLAY","Press PLAY"))+'</button>';
  m.body.querySelector("#t2-go").onclick=function(){playTape2(m,{done:function(b,v){var t=b.querySelector(".cv-t");if(t)t.textContent=TM("Конец записи. Попробуйте фильтр «Проклятая».","End of recording. Try the Cursed filter.");try{ach("tape2")}catch(e){}}})}}
 H.tape2=tape2;H.curse=curse;

 /* ================= viewer dossier ================= */
 function gname(g){return T(GN[g])}
 function jump(id){
  var r=REVIEWS.filter(function(x){return x.id===id})[0],nm=T(F[id].n);H.closeModal();
  var sec=r?"reviews":"catalog";
  var btn=document.querySelector('#filters button[data-f="'+sec+'"]');if(btn)btn.click();
  if(r){cur=null;frc=null;query=nm;var qq=document.getElementById("q");if(qq)qq.value=nm;try{renderSpot()}catch(e){}renderCards()}
  setTimeout(function(){var t=document.querySelector('section[data-cat="'+sec+'"]'),tt=sec==="reviews"?document.getElementById("reviews"):t;if(tt)window.scrollTo({top:Math.max(0,tt.getBoundingClientRect().top+window.scrollY-70),behavior:"smooth"})},60)}
 function dossier(){
  var m=H.modal("profile",TM("Досье зрителя","Viewer dossier"),"eye");
  function draw(){
   var ids=Object.keys(MY).filter(function(i){return F[i]}),seen=ids.filter(function(i){return MY[i]==="seen"}),want=ids.filter(function(i){return MY[i]==="want"});
   var total=Object.keys(F).length,rv={};REVIEWS.forEach(function(r){rv[r.id]=r});
   var gs={},gsum=0,gcnt=0;seen.concat(want).forEach(function(i){var r=rv[i];if(r)r.gn.forEach(function(g){gs[g]=(gs[g]||0)+(MY[i]==="seen"?2:1)})});
   seen.forEach(function(i){if(rv[i]){gsum+=rv[i].g;gcnt++}});
   var top=Object.keys(gs).sort(function(a,b){return gs[b]-gs[a]})[0];
   var first=st("ha-first",0),days=first?Math.max(1,Math.ceil((Date.now()-first)/DAY)):1;
   var unl=Object.keys(ST.ach||{}).length,all=BG.length,c=cs();
   var cstat=!c?TM("не смотрели","not watched"):c.done?TM("звонок получен","call received"):TM("осталось дней: ","days left: ")+daysLeft(c);
   function chip(l,v){return '<div class="pf-s"><span>'+esc(l)+'</span><b>'+esc(v)+'</b></div>'}
   function list(arr,kind){return arr.length?'<ul class="pf-l">'+arr.map(function(i){return '<li><button type="button" class="pf-j" data-j="'+i+'">'+esc(T(F[i].n))+' <small>'+F[i].y+'</small></button><button type="button" class="pf-x" data-x="'+i+'" aria-label="'+esc(TM("Убрать","Remove"))+'">'+ic("x")+'</button></li>'}).join("")+'</ul>':'<p class="dkn">'+esc(TM("Пока пусто. Отмечайте фильмы в каталоге.","Empty for now. Mark films in the catalogue."))+'</p>'}
   var badges=Object.keys(ST.ach||{}).map(function(id){var b=BG.filter(function(x){return x[0]===id})[0];return b?'<span class="chip">'+badgeArt(b[1])+esc(T(b[2]))+'</span>':''}).join("");
   m.body.innerHTML='<div class="pf-g">'+chip(TM("Посмотрено","Seen"),seen.length)+chip(TM("Хочу","Want"),want.length)+chip(TM("Каталог","Catalogue"),(seen.length/total*100).toFixed(1)+"%")+
    chip(TM("Средний gore","Avg gore"),gcnt?(gsum/gcnt).toFixed(1)+" / 5":"—")+chip(TM("Любимый жанр","Top genre"),top?gname(top):"—")+chip(TM("Дней на сайте","Days here"),days)+
    chip(TM("Лучшая серия","Best streak"),ST.best||0)+chip(TM("Значки","Badges"),unl+" / "+all)+chip(TM("Проклятие","Curse"),cstat)+'</div>'+
    '<h4 class="pf-h">'+esc(TM("Посмотрено","Seen"))+'</h4>'+list(seen)+'<h4 class="pf-h">'+esc(TM("Хочу посмотреть","Want to watch"))+'</h4>'+list(want)+
    (badges?'<h4 class="pf-h">'+esc(TM("Открытые значки","Unlocked badges"))+'</h4><div class="pf-b">'+badges+'</div>':'')+
    '<h4 class="pf-h">'+esc(TM("Копия списка","Backup"))+'</h4><p class="dkn">'+esc(TM("Списки хранятся только в этом браузере. Скопируйте текст, чтобы перенести на другое устройство, или вставьте чужой и нажмите «Загрузить».","Lists live only in this browser. Copy the text to move to another device, or paste one and press Load."))+'</p>'+
    '<textarea class="pf-t" rows="3" spellcheck="false" aria-label="backup"></textarea><div class="pf-a"><button type="button" class="btn o" id="pf-ex">'+esc(TM("Показать","Show"))+'</button><button type="button" class="btn o" id="pf-im">'+esc(TM("Загрузить","Load"))+'</button></div>';
   m.body.querySelectorAll(".pf-j").forEach(function(b){b.onclick=function(){jump(b.dataset.j)}});
   m.body.querySelectorAll(".pf-x").forEach(function(b){b.onclick=function(){delete MY[b.dataset.x];saveMy();try{renderCat()}catch(e){}draw()}});
   var ta=m.body.querySelector(".pf-t");
   m.body.querySelector("#pf-ex").onclick=function(){ta.value=JSON.stringify(MY);ta.select()};
   m.body.querySelector("#pf-im").onclick=function(){try{var o=JSON.parse(ta.value),n=0;Object.keys(o).forEach(function(k){if(F[k]&&(o[k]==="seen"||o[k]==="want")){MY[k]=o[k];n++}});saveMy();try{renderCat()}catch(e){}draw();toast(TM("Загружено","Loaded"),n+" "+TM("фильмов","films"))}catch(e){toast(TM("Не получилось","Failed"),TM("Это не похоже на копию списка.","That does not look like a backup."))}}}
  draw();try{ach("dossier")}catch(e){}}
 H.dossier=dossier;

 /* ================= subscribe form ================= */
 (function(){
  var f=document.getElementById("sub-form");if(!f)return;
  var msg=document.getElementById("sub-msg"),btn=f.querySelector("button");
  f.addEventListener("submit",function(e){
   e.preventDefault();var em=f.querySelector('input[type=email]').value.trim();
   if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){msg.textContent=TM("Проверьте адрес.","Check the address.");return}
   if(f.querySelector('[name=bot-field]').value)return;
   btn.disabled=true;msg.textContent="…";
   var body="form-name=subscribe&email="+encodeURIComponent(em)+"&lang="+LANG;
   window.HAF(body).then(function(r){
    if(!r.ok)throw 0;msg.textContent=TM("Готово. Вы в списке.","Done. You are on the list.");f.reset();try{ach("mail")}catch(e){}
   }).catch(function(){msg.innerHTML=TM("Не удалось отправить. Подпишитесь на RSS или напишите на ","Could not send. Follow the RSS feed or write to ")+'<a href="mailto:'+window.HAM()+'">'+window.HAM()+'</a>'}).then(function(){btn.disabled=false})})
 })();

 /* ================= panel + rail buttons ================= */
 function inject(){
  var d=document.getElementById("dark");if(d&&!d.querySelector("[data-dk4]")){
   var g=d.querySelector(".dkgrid");if(g){
    var mkb=function(k,i,r,e){var b=document.createElement("button");b.type="button";b.className="btn dkb2";b.dataset.dk4=k;b.innerHTML=ic(i)+esc(TM(r,e));b.onclick=function(){k==="curse"?curse():k==="tape2"?tape2():dossier()};g.appendChild(b)};
    mkb("tape2","tape","The Tape II (видео)","The Tape II (video)");mkb("curse","tape","Просмотр видео (7 дней)","Watch the video (7 days)");mkb("dossier","eye","Досье зрителя","Viewer dossier");
    var lb=document.createElement("label");lb.className="calm";lb.innerHTML='<input type="checkbox" id="dk-sfx"'+(st("ha-sfx",true)!==false?" checked":"")+'> <span>'+esc(TM("Звуки: шёпот при чтении J-Horror рецензий, скрип и дыхание в комнате","Sounds: whispers when reading J-Horror reviews, creaks and breathing in the room"))+'</span>';
    g.parentNode.appendChild(lb);lb.querySelector("input").onchange=function(){ss("ha-sfx",this.checked)}}}
  var tp=document.getElementById("tpb");if(tp&&!document.getElementById("pf-open")){
   var b=document.createElement("button");b.type="button";b.id="pf-open";b.className="snd";b.onclick=dossier;tp.parentNode.insertBefore(b,tp.nextSibling);tp.parentNode.insertBefore(document.createTextNode(" "),b)}
  var pb=document.getElementById("pf-open");if(pb)pb.textContent="\ud83d\uddc2 "+TM("Досье","Dossier");
  var old=document.querySelector(".rail .pf-open");if(old)old.remove();
 }
 var _rp=window.renderPlay;if(_rp)window.renderPlay=function(){_rp.apply(this,arguments);inject()};
 var _sl=window.setLang;if(typeof _sl==="function")window.setLang=function(){_sl.apply(this,arguments);setTimeout(inject,0)};
 inject();setTimeout(inject,600);
 var q2=/[?&]dark=(curse|dossier|tape2)/.exec(location.search);if(q2)setTimeout(function(){q2[1]==="curse"?curse():q2[1]==="tape2"?tape2():dossier()},900);
})();
/* permalinks to the static review pages (only on the published site) */
(function(){
 var _rc=window.renderCards;if(!_rc)return;
 function add(){
  if(!document.querySelector('link[rel="canonical"]'))return;
  var m={};REVIEWS.forEach(function(r){m[F[r.id].n.ru]=r.id;m[F[r.id].n.en]=r.id});
  document.querySelectorAll("#cards .card").forEach(function(c){var h=c.querySelector("h3"),id=h&&m[h.textContent.trim()];if(!id||c.querySelector(".perma"))return;
   var in_=c.querySelector(".in");if(!in_)return;var a=document.createElement("a");a.className="perma";a.href="/horror-aesthetic/reviews/"+id+".html";a.textContent=(LANG==="ru"?"Отдельная страница ↗":"Own page ↗");in_.appendChild(a)})}
 window.renderCards=function(){_rc.apply(this,arguments);try{add()}catch(e){}};
})();

/* ===== v81: cursed-VHS player (The Tape II) ===== */
(function(){
 var H=window.HA,TM=H.TM,st=H.st,ss=H.ss;
 var FL={
  clean:{n:["Чистая","Clean"],css:"none",echo:0,noise:0,head:0,tear:0,vig:.25,osd:0,drop:0,shake:0,flick:0,scan:0},
  vhs:{n:["VHS 98","VHS 98"],css:"contrast(1.12) saturate(1.3) blur(.35px) sepia(.12)",echo:.16,noise:.1,head:1,tear:.5,vig:.4,osd:1,drop:.3,shake:0,flick:0,scan:.7},
  ringu:{n:["Звонок","Ringu"],css:"grayscale(.55) sepia(.35) hue-rotate(95deg) saturate(1.25) contrast(1.3) brightness(.95) blur(.3px)",echo:.22,noise:.13,head:1,tear:.6,vig:.55,osd:1,drop:.5,shake:0,flick:0,scan:.8},
  juon:{n:["Ju-On","Ju-On"],css:"grayscale(.7) hue-rotate(185deg) saturate(1.5) contrast(1.35) brightness(.9)",echo:.12,noise:.09,head:0,tear:.4,vig:.7,osd:0,drop:.2,shake:0,flick:0,scan:.4},
  cursed:{n:["Проклятая","Cursed"],css:"saturate(1.7) contrast(1.4) hue-rotate(-10deg) brightness(.88) blur(.45px)",echo:.3,noise:.18,head:1,tear:1,vig:.65,osd:1,drop:1,shake:1,flick:1,scan:1}};
 var ORDER=["clean","vhs","ringu","juon","cursed"];
 /* captions: [from, to, kana/kanji, ru, en] timed to the clip: peek 4s, the woman passes 8-11s, ceiling hand 13-16s, figure 17-20s */
 var CAP=[[4,7,"みたな","Ты увидел","You saw"],[8,10.8,"ここにいる","Она здесь","She is here"],[12.8,15.8,"うえ","Наверху","Above you"],[17.2,18.9,"くる","Идёт","She is coming"],[19,20.5,"ななにち","Семь дней","Seven days"]];
 var KEYS=[4.0,8.0,13.5,17.4,18.9];
 function mmss(s){s=Math.max(0,Math.floor(s));return (s<600?"0":"")+Math.floor(s/60)+":"+(s%60<10?"0":"")+s%60}
 function vhs(box,o){
  var gentle=H.calm()||H.RM,cur=FL[o.filter]?o.filter:"vhs",op=st("ha-t2o",{cap:1,hair:1,sfx:1}),W=640,Hh=360;
  box.innerHTML='<div class="vh"><div class="vh-scr"><canvas class="vh-cv" width="'+W+'" height="'+Hh+'" aria-label="video"></canvas><div class="vh-fx"></div><div class="vh-cap" aria-live="polite"><b></b><span></span></div>'+
   '<video class="vh-v" playsinline preload="auto" disablepictureinpicture></video></div>'+
   '<div class="vh-ctl"><button type="button" class="vh-pp" aria-label="play/pause">❚❚</button><input type="range" class="vh-r" min="0" max="1000" value="0" aria-label="position"><span class="vh-tm">0:00</span><button type="button" class="vh-mu" aria-label="mute">♪</button></div>'+
   '<div class="vh-flt" role="group" aria-label="filters"></div>'+
   '<div class="vh-opt"><label><input type="checkbox" data-o="cap"> <span></span></label><label><input type="checkbox" data-o="hair"> <span></span></label><label><input type="checkbox" data-o="sfx"> <span></span></label></div>'+
   '<div class="cv-t" aria-live="polite"></div></div>';
  var v=box.querySelector("video"),cv=box.querySelector(".vh-cv"),x=cv.getContext("2d"),fx=box.querySelector(".vh-fx"),cap=box.querySelector(".vh-cap"),pp=box.querySelector(".vh-pp"),rg=box.querySelector(".vh-r"),tm=box.querySelector(".vh-tm"),mu=box.querySelector(".vh-mu"),flt=box.querySelector(".vh-flt");
  var raf=0,dead=false,ended=false,prevT=0,tear=0,tY=0,tH=0,tDX=0,sfxT=0,lastCap=-2,ac=null,hiss=null,hg=null,seeking=false;
  /* noise tile */
  var nt=document.createElement("canvas");nt.width=nt.height=192;var nx=nt.getContext("2d"),im=nx.createImageData(192,192),pd=im.data;
  for(var i=0;i<pd.length;i+=4){var q=Math.random()*255|0;pd[i]=pd[i+1]=pd[i+2]=q;pd[i+3]=255}nx.putImageData(im,0,0);
  var pat=x.createPattern(nt,"repeat");
  var vg=x.createRadialGradient(W/2,Hh/2,Hh*.25,W/2,Hh/2,Hh*.95);vg.addColorStop(0,"rgba(0,0,0,0)");vg.addColorStop(1,"rgba(0,0,0,1)");
  /* hair strands */
  var HR=[];for(i=0;i<11;i++)HR.push({x:Math.random()*W,ph:Math.random()*6.28,L:90+Math.random()*190,w:.8+Math.random()*1.6,a:5+Math.random()*12,s:.6+Math.random()*.8});
  v.preservesPitch=false;v.mozPreservesPitch=false;v.webkitPreservesPitch=false;
  function lab(){
   flt.innerHTML=ORDER.map(function(k){return '<button type="button" class="vh-f" data-f="'+k+'" aria-pressed="'+(k===cur)+'">'+esc(TM(FL[k].n[0],FL[k].n[1]))+'</button>'}).join("");
   var ls=box.querySelectorAll(".vh-opt label span"),tx=[TM("Субтитры проклятия","Curse subtitles"),TM("Волосы","Hair"),TM("Шум ленты и звук","Tape noise and sound")];
   ls.forEach(function(s,i){s.textContent=tx[i]});box.querySelectorAll(".vh-opt input").forEach(function(c){c.checked=!!op[c.dataset.o]})}
  function apply(){var f=FL[cur];cv.style.filter=f.css;fx.style.opacity=gentle?f.scan*.5:f.scan;box.querySelectorAll(".vh-f").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.f===cur))})}
  lab();apply();
  flt.onclick=function(e){var b=e.target.closest(".vh-f");if(!b)return;cur=b.dataset.f;ss("ha-t2f",cur);apply()};
  box.querySelector(".vh-opt").onchange=function(e){var c=e.target;if(!c.dataset.o)return;op[c.dataset.o]=c.checked?1:0;ss("ha-t2o",op);if(c.dataset.o==="sfx")sfx(c.checked);if(!op.cap)capHide()};
  /* audio extras: hiss + a short crackle on tracking tears (separate from the video's own sound) */
  function sfx(on){
   try{
    if(!on||H.calm()){if(hg)hg.gain.value=0;return}
    var C=window.AudioContext||window.webkitAudioContext;if(!C)return;if(!ac){ac=new C()}ac.resume();
    if(!hiss){var n=ac.sampleRate*2,b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;hiss=ac.createBufferSource();hiss.buffer=b;hiss.loop=true;var lp=ac.createBiquadFilter();lp.type="bandpass";lp.frequency.value=5200;lp.Q.value=.4;hg=ac.createGain();hg.gain.value=0;hiss.connect(lp);lp.connect(hg);hg.connect(ac.destination);hiss.start()}
    hg.gain.value=cur==="clean"?0:(cur==="cursed"?.03:.016)}catch(e){}}
  function crackle(){
   if(!op.sfx||H.calm()||!ac)return;try{var n=Math.floor(ac.sampleRate*.12),b=ac.createBuffer(1,n,ac.sampleRate),d=b.getChannelData(0);for(var i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2);var s=ac.createBufferSource();s.buffer=b;var g=ac.createGain();g.gain.value=cur==="cursed"?.22:.12;s.connect(g);g.connect(ac.destination);s.start()}catch(e){}}
  function capHide(){cap.classList.remove("on")}
  function setCap(t){
   var k=-1;for(var i=0;i<CAP.length;i++)if(t>=CAP[i][0]&&t<CAP[i][1])k=i;
   if(!op.cap)k=-1;if(k===lastCap)return;lastCap=k;
   if(k<0){capHide();return}cap.querySelector("b").textContent=CAP[k][2];cap.querySelector("span").textContent=TM(CAP[k][3],CAP[k][4]);cap.classList.add("on")}
  function startTear(strong){
   tear=strong?.55:.22;tY=Math.random()*Hh*.7;tH=18+Math.random()*(strong?90:40);tDX=(Math.random()<.5?-1:1)*(8+Math.random()*(strong?44:22));crackle()}
  function hair(t){
   var p=Math.min(1,Math.max(0,(t-(cur==="cursed"?9:15))/(cur==="cursed"?10:5)));if(p<=0)return;p=p*p*(3-2*p);
   x.lineCap="round";
   HR.forEach(function(h){
    var L=h.L*p*(cur==="cursed"?1.2:1),N=18,pts=[];
    for(var i=0;i<=N;i++){var k=i/N;pts.push([h.x+Math.sin(k*4+h.ph+t*.7*h.s)*h.a*k+Math.sin(k*9+h.ph)*2*k,k*L])}
    function path(){x.beginPath();x.moveTo(pts[0][0],pts[0][1]);for(var j=1;j<pts.length;j++)x.lineTo(pts[j][0],pts[j][1])}
    x.strokeStyle="rgba(2,2,2,.92)";x.lineWidth=h.w+1.8;path();x.stroke();x.strokeStyle="rgba(150,170,176,.3)";x.lineWidth=h.w*.5;path();x.stroke()})}
  function frame(now){
   if(dead)return;raf=requestAnimationFrame(frame);
   var t=v.currentTime,f=FL[cur],vw=v.videoWidth||1280,vh=v.videoHeight||720,g=gentle;
   if(!seeking){rg.value=Math.round(t/(v.duration||20)*1000)}tm.textContent=mmss(t)+" / "+mmss(v.duration||20);
   x.globalCompositeOperation="source-over";x.globalAlpha=1;
   var sx=0,sy=0;if(f.shake&&!g){var m=tear>0?5:1.3;sx=(Math.random()-.5)*m;sy=(Math.random()-.5)*m}
   if(v.readyState>=2)x.drawImage(v,sx,sy,W,Hh);else{x.fillStyle="#000";x.fillRect(0,0,W,Hh)}
   if(f.echo&&v.readyState>=2){x.globalAlpha=f.echo;x.globalCompositeOperation="lighter";x.drawImage(v,g?2:5,0,W,Hh);x.globalCompositeOperation="source-over";x.globalAlpha=1}
   /* tracking tears */
   if(!g&&f.tear&&!v.paused){
    for(var i=0;i<KEYS.length;i++)if(prevT<KEYS[i]&&t>=KEYS[i])startTear(true);
    if(tear<=0&&Math.random()<.0035*f.tear)startTear(false)}
   prevT=t;
   if(tear>0&&v.readyState>=2){
    tear-=1/60;var bands=3;
    for(i=0;i<bands;i++){var by=(tY+i*(tH*.9))%(Hh-12),bh=tH/bands*(1+i*.5);x.drawImage(v,0,by*vh/Hh,vw,bh*vh/Hh,tDX*(1-i*.35)+(Math.random()-.5)*5,by,W,bh);
     x.fillStyle="rgba(235,240,238,"+(.1+Math.random()*.2)+")";x.fillRect(0,by+bh*Math.random(),W,1+Math.random()*2)}}
   /* head-switching noise: the bottom edge of every VHS picture */
   if(f.head){var hb=Hh*.05,jx=(Math.random()-.5)*(g?4:18);if(v.readyState>=2)x.drawImage(v,0,vh*.95,vw,vh*.05,jx,Hh-hb,W,hb);
    x.fillStyle="rgba(210,215,215,.18)";for(i=0;i<5;i++)x.fillRect(Math.random()*W,Hh-hb+Math.random()*hb,20+Math.random()*120,1)}
   /* dropouts */
   if(!g&&f.drop&&Math.random()<.07*f.drop){var n2=1+(Math.random()*3|0);x.fillStyle="rgba(240,240,240,.55)";for(i=0;i<n2;i++)x.fillRect(Math.random()*W,Math.random()*Hh,15+Math.random()*90,1+Math.random()*1.5)}
   /* grain */
   if(f.noise){x.globalAlpha=f.noise*(g?.5:1);x.globalCompositeOperation="screen";x.save();x.translate(-(Math.random()*192|0),-(Math.random()*192|0));x.fillStyle=pat;x.fillRect(0,0,W+192,Hh+192);x.restore();x.globalCompositeOperation="source-over";x.globalAlpha=1}
   /* slow blood-red pulse on the cursed tape */
   if(f.flick&&!g){var a=.05+.05*Math.sin(now/1200);x.fillStyle="rgba(150,10,14,"+a+")";x.fillRect(0,0,W,Hh)}
   if(op.hair&&!g)hair(t);
   x.globalAlpha=f.vig;x.fillStyle=vg;x.fillRect(0,0,W,Hh);x.globalAlpha=1;
   /* on-screen display */
   if(f.osd){x.font="bold 20px ui-monospace,Menlo,monospace";x.textBaseline="top";
    var s1="PLAY ▶",s2="SP "+mmss(t),s3="NOV.08.1998";
    function tx(s,px,py,al){x.textAlign=al;x.fillStyle="rgba(255,40,60,.55)";x.fillText(s,px-1.5,py);x.fillStyle="rgba(40,230,255,.5)";x.fillText(s,px+1.5,py);x.fillStyle="rgba(240,240,236,.92)";x.fillText(s,px,py)}
    if(v.paused&&!ended)s1="PAUSE ❚❚";tx(s1,22,18,"left");tx(s2,22,42,"left");tx(s3,W-22,Hh-44,"right")}
   setCap(t);
   if(!g&&op.sfx&&ac&&!v.paused&&cur!=="clean"){var rr=1+(f.flick?.007:.003)*Math.sin(now/580)+(tear>0?-.03:0);try{v.playbackRate=rr}catch(e){}}else if(v.playbackRate!==1){try{v.playbackRate=1}catch(e){}}
  }
  v.src=o.src;
  v.onerror=function(){if(dead)return;if(o.fallback){stop();o.fallback()}else box.querySelector(".cv-t").textContent=TM("Видео не загрузилось. Попробуйте на опубликованном сайте.","The video did not load. Try the published site.")};
  v.onended=function(){if(dead)return;ended=true;try{v.playbackRate=1}catch(e){}pp.textContent="▶";cv.style.opacity=".25";fx.style.opacity="0";capHide();if(hg)hg.gain.value=0;if(o.done)o.done(box,v)};
  pp.onclick=function(){if(ended){ended=false;cv.style.opacity="1";apply();v.currentTime=0}if(v.paused){v.play();pp.textContent="❚❚";sfx(op.sfx)}else{v.pause();pp.textContent="▶";if(hg)hg.gain.value=0}};
  rg.oninput=function(){seeking=true;v.currentTime=(rg.value/1000)*(v.duration||20);prevT=v.currentTime};rg.onchange=function(){seeking=false};
  mu.onclick=function(){v.muted=!v.muted;mu.style.opacity=v.muted?.4:1};
  box.onkeydown=function(e){if(e.key===" "&&e.target.tagName!=="INPUT"&&e.target.tagName!=="BUTTON"){e.preventDefault();pp.onclick()}};
  function stop(){dead=true;cancelAnimationFrame(raf);try{v.pause();v.removeAttribute("src");v.load()}catch(e){}try{if(hiss)hiss.stop();if(ac)ac.close()}catch(e){}hiss=null;ac=null}
  var pr=v.play();if(pr&&pr.catch)pr.catch(function(){pp.textContent="▶"});
  sfx(op.sfx);raf=requestAnimationFrame(frame);
  return {stop:stop}}
 H.vhs=vhs;H.vhsKeys=ORDER;
})();
/* ===== v83: hitodama (will-o'-the-wisps) for the Kaidan tone ===== */
(function(){
 var cv=document.getElementById("hit");if(!cv)return;
 var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;if(RM)return;
 var x=cv.getContext("2d"),W=0,Hh=0,D=1,mx=-999,my=-999,mob=innerWidth<700;
 function size(){D=Math.min(2,window.devicePixelRatio||1);W=innerWidth;Hh=innerHeight;cv.width=Math.round(W*D);cv.height=Math.round(Hh*D);x.setTransform(D,0,0,D,0,0)}
 size();addEventListener("resize",function(){mob=innerWidth<700;size()});
 addEventListener("pointermove",function(e){if(e.pointerType==="mouse"){mx=e.clientX;my=e.clientY}},{passive:true});
 function R(a,b){return a+Math.random()*(b-a)}
 function mk(init){return{x:R(0,W),y:init?R(0,Hh):R(Hh*.6,Hh+60),r:R(2.2,5),vy:R(-9,-22),ph:R(0,6.28),f:R(.6,1.6),sw:R(14,40),life:R(.5,1),tr:[]}}
 var N=mob?6:11,O=[];for(var i=0;i<N;i++)O.push(mk(true));
 var last=performance.now(),t=0;
 function frame(now){
  requestAnimationFrame(frame);
  var dt=Math.min(.05,(now-last)/1000);last=now;
  if(document.documentElement.classList.contains("ha-ff")){x.clearRect(0,0,W,Hh);return}
  if(document.documentElement.dataset.tone!=="kaidan"||document.hidden||document.documentElement.classList.contains("ha-calm"))return;
  t+=dt;x.clearRect(0,0,W,Hh);
  O.forEach(function(o,k){
   var bx=o.x+Math.sin(t*.35*o.f+o.ph)*o.sw;o.y+=o.vy*dt;
   var dx=bx-mx,dy=o.y-my,d=Math.hypot(dx,dy);if(d<140&&d>1){o.x+=dx/d*(140-d)*dt*1.4}
   if(o.y<-40){O[k]=mk(false);return}
   var fl=.55+.45*Math.sin(t*o.f*3+o.ph)*Math.sin(t*1.3+o.ph*2),a=Math.max(0,fl)*o.life*Math.min(1,Math.max(0,(Hh-o.y)/160+.2))*Math.min(1,o.y/120+.3);
   o.tr.push([bx,o.y]);if(o.tr.length>16)o.tr.shift();
   /* faint tail */
   for(var j=0;j<o.tr.length;j++){var p=o.tr[j],q=j/o.tr.length;x.fillStyle="rgba(120,230,200,"+(a*.16*q)+")";x.beginPath();x.arc(p[0],p[1],o.r*(.35+q*.5),0,6.283);x.fill()}
   var g=x.createRadialGradient(bx,o.y,0,bx,o.y,o.r*6);g.addColorStop(0,"rgba(235,255,248,"+(a*.9)+")");g.addColorStop(.18,"rgba(140,240,205,"+(a*.55)+")");g.addColorStop(1,"rgba(60,170,160,0)");
   x.fillStyle=g;x.beginPath();x.arc(bx,o.y,o.r*6,0,6.283);x.fill()});
 }
 requestAnimationFrame(frame);
})();
/* ===== v84: Ju-On tone layer: dust in the window light, a failing bulb, victim-named chapter cards ===== */
(function(){
 var RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches,root=document.documentElement;
 function on(){return root.dataset.tone==="juon"}
 function calm(){return root.classList.contains("ha-calm")}
 /* margin text follows the tone */
 var kv=document.getElementById("kvt");
 function sync(){if(kv)kv.textContent=on()?"呪怨　伽椰子　俊雄　家":"怪談　呪怨　霊　怨念"}
 setInterval(sync,700);sync();
 /* chapter title cards */
 var NM=[["Рика","Rika"],["Кацуя","Katsuya"],["Кадзуми","Kazumi"],["Хитоми","Hitomi"],["Идзуми","Izumi"],["Тояма","Toyama"],["Каяко","Kayako"],["Тосио","Toshio"],["Такэо","Takeo"]];
 var NU=["一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","二十一","二十二","二十三","二十四"];
 function chap(){
  var s=document.querySelectorAll("section[data-cat]"),k=0;
  s.forEach(function(sec){var c=sec.querySelector(":scope>.jch");
   if(!c){c=document.createElement("div");c.className="jch";c.setAttribute("aria-hidden","true");c.innerHTML="<b></b><span></span><i></i>";sec.insertBefore(c,sec.firstChild)}
   var n=NM[k%NM.length],ru=(window.LANG==="ru");c.querySelector("b").textContent="第"+NU[Math.min(k,NU.length-1)]+"話";c.querySelector("span").textContent=ru?n[0]:n[1];k++})}
 chap();setTimeout(chap,800);
 var _sl=window.setLang;if(typeof _sl==="function")window.setLang=function(){_sl.apply(this,arguments);setTimeout(chap,0)};
 if(RM)return;
 /* dust turning in the shaft of window light */
 var cv=document.getElementById("dust");
 if(cv){
  var x=cv.getContext("2d"),W=0,H=0,D=1,mob=innerWidth<700,P=[];
  function size(){D=Math.min(2,window.devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=Math.round(W*D);cv.height=Math.round(H*D);x.setTransform(D,0,0,D,0,0)}
  size();addEventListener("resize",function(){mob=innerWidth<700;size()});
  function R(a,b){return a+Math.random()*(b-a)}
  function mk(){return{x:R(0,W),y:R(0,H),r:R(.6,1.9),vx:R(-5,5),vy:R(2,9),ph:R(0,6.28),f:R(.3,1.1),a:R(.18,.55)}}
  for(var i=0;i<(mob?26:56);i++)P.push(mk());
  var last=performance.now(),t=0;
  (function fr(now){requestAnimationFrame(fr);var dt=Math.min(.05,(now-last)/1000);last=now;
   if(!on()||document.hidden||calm())return;t+=dt;x.clearRect(0,0,W,H);
   P.forEach(function(p){p.x+=(p.vx+Math.sin(t*p.f+p.ph)*8)*dt;p.y+=p.vy*dt;if(p.y>H+4){p.y=-4;p.x=R(0,W)}if(p.x<-4)p.x=W+4;if(p.x>W+4)p.x=-4;
    var bx=W*.14+p.y*.38,inb=Math.max(0,1-Math.abs(p.x-bx)/(W*.2)),al=p.a*(.25+inb*1.1)*(.7+.3*Math.sin(t*p.f*2+p.ph));
    x.fillStyle="rgba(255,232,170,"+Math.min(.85,al)+")";x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill()})})(last);
 }
 /* the failing bulb: a gentle dip and recovery, three times at most, long gaps between bursts */
 var bl=document.getElementById("jbulb");
 if(bl){
  function dip(n){if(n<=0){bl.style.opacity=0;return}
   bl.style.transition="opacity .22s ease-in";bl.style.opacity=(.18+Math.random()*.22).toFixed(2);
   setTimeout(function(){bl.style.transition="opacity .3s ease-out";bl.style.opacity=0;setTimeout(function(){dip(n-1)},380+Math.random()*320)},260)}
  (function plan(){setTimeout(function(){if(on()&&!calm()&&!document.hidden)dip(2+(Math.random()*2|0));plan()},28000+Math.random()*45000)})();
 }
})();
/* ===== v85: Ringu tone layer: static, water rings, the seven-day counter, smearing faces ===== */
(function(){
 var root=document.documentElement,RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function on(){return root.dataset.tone==="ringu"}
 function calm(){return root.classList.contains("ha-calm")}
 var H=window.HA;
 /* seven-day counter + smear strength follow the curse state */
 var box=document.getElementById("r7"),dsp=document.getElementById("rsd");
 function curse(){try{return JSON.parse(localStorage.getItem("ha-curse")||"null")}catch(e){return null}}
 function upd(){
  var c=curse(),act=c&&!c.done&&on(),d=0;
  if(act){d=Math.floor((Date.now()-c.t)/864e5);var left=Math.max(0,7-d);
   box.className="on"+(left<=1?" hot":"");box.innerHTML="<span>"+(window.LANG==="ru"?"Осталось дней":"Days left")+"</span><b>"+(left?"あと"+left+"日":"今夜")+"</b>"}
  else{box.className=""}
  var sc=act?Math.min(34,3+d*5):0;
  if(dsp)dsp.setAttribute("scale",String(sc));
  root.classList.toggle("r-sm",!!act&&!calm())}
 if(box){box.addEventListener("click",function(){if(window.HA&&HA.curse)HA.curse()});setInterval(upd,1500);upd()}
 if(RM)return;
 /* static */
 var st=document.getElementById("rst");
 if(st){var sx=st.getContext("2d"),im=sx.createImageData(st.width,st.height),pd=im.data,lastS=0;
  (function s(now){requestAnimationFrame(s);if(!on()||document.hidden||calm()||now-lastS<55)return;lastS=now;
   for(var i=0;i<pd.length;i+=4){var v=Math.random()*255|0;pd[i]=pd[i+1]=pd[i+2]=v;pd[i+3]=255}sx.putImageData(im,0,0)})(0)}
 /* water rings: a drop falls somewhere on the page every few seconds; a click also drops one */
 var cv=document.getElementById("rip");
 if(cv){var x=cv.getContext("2d"),W=0,Hh=0,D=1,rs=[];
  function size(){D=Math.min(2,window.devicePixelRatio||1);W=innerWidth;Hh=innerHeight;cv.width=Math.round(W*D);cv.height=Math.round(Hh*D);x.setTransform(D,0,0,D,0,0)}
  size();addEventListener("resize",size);
  function drop(px,py,big){rs.push({x:px,y:py,t:0,big:big?1:0})}
  addEventListener("pointerdown",function(e){if(on()&&!calm())drop(e.clientX,e.clientY,false)},{passive:true});
  (function plan(){setTimeout(function(){if(on()&&!calm()&&!document.hidden)drop(Math.random()*innerWidth,Math.random()*innerHeight*.9,true);plan()},3500+Math.random()*5500)})();
  var last=performance.now();
  (function fr(now){requestAnimationFrame(fr);var dt=Math.min(.05,(now-last)/1000);last=now;
   if(!on()||document.hidden||calm()){if(rs.length){rs=[];x.clearRect(0,0,W,Hh)}return}
   x.clearRect(0,0,W,Hh);
   rs=rs.filter(function(r){r.t+=dt;return r.t<(r.big?5:3)});
   rs.forEach(function(r){var life=r.big?5:3,k=r.t/life,n=3;
    for(var i=0;i<n;i++){var kk=k-i*.09;if(kk<=0)continue;var rad=kk*(r.big?170:90),a=(1-kk)*(r.big?.34:.2)*(1-i*.25);
     x.strokeStyle="rgba(205,228,218,"+a+")";x.lineWidth=1.2;x.beginPath();x.ellipse(r.x,r.y,rad,rad*.42,0,0,6.283);x.stroke()}})})(last)}
})();
/* ===== v86: Tomie tone: ink blots on click, eyes in the margins, spiral ===== */
(function(){
 var root=document.documentElement,RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function on(){return root.dataset.tone==="tomie"}
 function calm(){return root.classList.contains("ha-calm")}
 /* spiral: one logarithmic path, drawn once */
 var sp=document.getElementById("tsp");
 if(sp&&!sp.firstChild){var d="M200 200",pts=[];for(var a=0;a<6*Math.PI*2;a+=.15){var r=3+a*4.3;pts.push((200+r*Math.cos(a)).toFixed(1)+" "+(200+r*Math.sin(a)).toFixed(1))}
  sp.innerHTML='<svg viewBox="-20 -20 440 440"><path d="M'+pts.join(" L")+'"/></svg>'}
 if(RM)return;
 /* ink blots */
 var cv=document.getElementById("tink");
 if(cv){var x=cv.getContext("2d"),W=0,Hh=0,D=1,bl=[];
  function size(){D=Math.min(2,devicePixelRatio||1);W=innerWidth;Hh=innerHeight;cv.width=Math.round(W*D);cv.height=Math.round(Hh*D);x.setTransform(D,0,0,D,0,0)}
  size();addEventListener("resize",size);
  function blot(px,py){var n=6+Math.random()*8|0,p=[{x:px,y:py,r:5+Math.random()*7}];
   for(var i=0;i<n;i++){var an=Math.random()*6.283,dd=8+Math.random()*34;p.push({x:px+Math.cos(an)*dd,y:py+Math.sin(an)*dd,r:1+Math.random()*3.5})}
   bl.push({p:p,t:0,g:0,run:Math.random()<.6?20+Math.random()*50:0})}
  addEventListener("pointerdown",function(e){if(on()&&!calm())blot(e.clientX,e.clientY)},{passive:true});
  var last=performance.now();
  (function fr(now){requestAnimationFrame(fr);var dt=Math.min(.05,(now-last)/1000);last=now;
   if(!on()||document.hidden||calm()){if(bl.length){bl=[];x.clearRect(0,0,W,Hh)}return}
   x.clearRect(0,0,W,Hh);bl=bl.filter(function(b){b.t+=dt;return b.t<5});
   bl.forEach(function(b){var al=b.t<3?1:1-(b.t-3)/2,gr=Math.min(1,b.t*5);b.g=b.run*Math.min(1,b.t/1.4);
    x.fillStyle="rgba(8,7,6,"+al+")";
    b.p.forEach(function(q){x.beginPath();x.arc(q.x,q.y,q.r*gr,0,6.283);x.fill()});
    if(b.run){x.fillRect(b.p[0].x-1.3,b.p[0].y,2.6,b.g);x.beginPath();x.arc(b.p[0].x,b.p[0].y+b.g,2.2,0,6.283);x.fill()}})})(last)}
 /* eyes */
 var mx=innerWidth/2,my=innerHeight/2;
 addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY},{passive:true});
 function eye(){
  var el=document.createElement("div");el.className="teye";
  var m=Math.random()<.5,side=m?"left":"right",w=70+Math.random()*50;
  el.style.width=w+"px";el.style.height=w*.55+"px";el.style[side]=(4+Math.random()*18)+"px";el.style.top=(12+Math.random()*68)+"vh";
  el.innerHTML='<svg viewBox="0 0 92 50"><path d="M2 25C20 2 72 2 90 25C72 48 20 48 2 25Z" fill="#efeade" stroke="#0b0a09" stroke-width="3"/><path d="M10 14C30 4 62 4 82 14M10 36C30 46 62 46 82 36" fill="none" stroke="#0b0a09" stroke-width="1.2"/><circle class="ir" cx="46" cy="25" r="14" fill="#0b0a09"/><circle class="pp" cx="46" cy="25" r="3" fill="#efeade"/><circle cx="62" cy="40" r="2.2" fill="#0b0a09"/></svg>';
  document.body.appendChild(el);var ir=el.querySelector(".ir"),pp=el.querySelector(".pp");
  function look(){var r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=mx-cx,dy=my-cy,l=Math.hypot(dx,dy)||1,k=Math.min(1,l/200)*9;
   var ox=dx/l*k,oy=dy/l*k*.6;ir.setAttribute("cx",46+ox);ir.setAttribute("cy",25+oy);pp.setAttribute("cx",46+ox);pp.setAttribute("cy",25+oy)}
  var iv=setInterval(look,60);look();
  setTimeout(function(){el.classList.add("on")},50);
  setTimeout(function(){el.classList.remove("on")},6500+Math.random()*3000);
  setTimeout(function(){clearInterval(iv);el.remove()},11000)}
 (function plan(){setTimeout(function(){if(on()&&!calm()&&!document.hidden&&document.querySelectorAll(".teye").length<2)eye();plan()},5000+Math.random()*7000)})();
})();
/* ===== v89: Blood tone: drips from the top, splatter that runs down on click ===== */
(function(){
 var root=document.documentElement,RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 if(RM)return;
 function on(){return root.dataset.tone==="blood"}
 function calm(){return root.classList.contains("ha-calm")}
 var cv=document.getElementById("bld");if(!cv)return;
 var x=cv.getContext("2d"),W=0,H=0,D=1,dr=[],sp=[];
 function size(){D=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=Math.round(W*D);cv.height=Math.round(H*D);x.setTransform(D,0,0,D,0,0)}
 size();addEventListener("resize",size);
 function drip(px,py,len,w,sp0){dr.push({x:px,y:py,y0:py,len:len,w:w,v:sp0,fade:0})}
 /* hanging drips grow from the top edge, slow, then fall off */
 (function plan(){setTimeout(function(){if(on()&&!calm()&&!document.hidden&&dr.length<9)drip(Math.random()*W,0,60+Math.random()*H*.35,3+Math.random()*4,12+Math.random()*22);plan()},1200+Math.random()*2200)})();
 addEventListener("pointerdown",function(e){if(!on()||calm())return;
  var n=7+Math.random()*9|0,p=[{x:e.clientX,y:e.clientY,r:6+Math.random()*7}];
  for(var i=0;i<n;i++){var an=Math.random()*6.283,d=8+Math.random()*44;p.push({x:e.clientX+Math.cos(an)*d,y:e.clientY+Math.sin(an)*d,r:1+Math.random()*4})}
  sp.push({p:p,t:0,run:Math.random()<.75?30+Math.random()*90:0,g:0})},{passive:true});
 var last=performance.now();
 (function fr(now){requestAnimationFrame(fr);var dt=Math.min(.05,(now-last)/1000);last=now;
  if(!on()||document.hidden||calm()){if(dr.length||sp.length){dr=[];sp=[];x.clearRect(0,0,W,H)}return}
  x.clearRect(0,0,W,H);
  dr=dr.filter(function(d){d.y+=d.v*dt;d.v*=.992;d.life=(d.life||0)+dt;
   if(d.y-d.y0>d.len*.8){d.fade+=dt*.7}
   return d.fade<1&&d.y<H+40});
  dr.forEach(function(d){var a=1-d.fade;x.fillStyle="rgba(190,12,22,"+a*.95+")";
   x.fillRect(d.x-d.w/2,0,d.w,d.y);x.beginPath();x.arc(d.x,d.y,d.w*.95,0,6.283);x.fill();
   x.fillStyle="rgba(255,120,110,"+a*.5+")";x.fillRect(d.x-d.w*.2,0,d.w*.2,d.y)});
  sp=sp.filter(function(s){s.t+=dt;return s.t<9});
  sp.forEach(function(s){var a=s.t<6?1:1-(s.t-6)/3,gr=Math.min(1,s.t*6);s.g=s.run*Math.min(1,s.t/2.4);
   x.fillStyle="rgba(176,10,20,"+a+")";
   s.p.forEach(function(q){x.beginPath();x.arc(q.x,q.y,q.r*gr,0,6.283);x.fill()});
   if(s.run){x.fillRect(s.p[0].x-1.8,s.p[0].y,3.6,s.g);x.beginPath();x.arc(s.p[0].x,s.p[0].y+s.g,2.8,0,6.283);x.fill()}})})(last);
})();
/* ===== v90: Green tone: spores, bubbling sludge at the foot of the page, acid pops on click ===== */
(function(){
 var root=document.documentElement,RM=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 if(RM)return;
 function on(){return root.dataset.tone==="green"}
 function calm(){return root.classList.contains("ha-calm")}
 var cv=document.getElementById("gsl");if(!cv)return;
 var x=cv.getContext("2d"),W=0,H=0,D=1,sp=[],bu=[],pops=[];
 function size(){D=Math.min(2,devicePixelRatio||1);W=innerWidth;H=innerHeight;cv.width=Math.round(W*D);cv.height=Math.round(H*D);x.setTransform(D,0,0,D,0,0);
  var n=Math.round(Math.min(70,W/18));sp=[];for(var i=0;i<n;i++)sp.push({x:Math.random()*W,y:Math.random()*H,r:.8+Math.random()*2.2,v:6+Math.random()*16,ph:Math.random()*6.28,a:.15+Math.random()*.4})}
 size();addEventListener("resize",size);
 addEventListener("pointerdown",function(e){if(!on()||calm())return;
  for(var i=0;i<9;i++)bu.push({x:e.clientX+(Math.random()-.5)*40,y:e.clientY+(Math.random()-.5)*20,r:2+Math.random()*7,v:-20-Math.random()*40,t:0,life:1+Math.random()*1.4,free:1})},{passive:true});
 var last=performance.now(),tm=0;
 function level(px,t){return H-34+Math.sin(px*.012+t*1.3)*6+Math.sin(px*.027-t*.9)*4}
 (function fr(now){requestAnimationFrame(fr);var dt=Math.min(.05,(now-last)/1000);last=now;
  if(!on()||document.hidden||calm()){if(bu.length||pops.length){bu=[];pops=[];x.clearRect(0,0,W,H)}return}
  tm+=dt;x.clearRect(0,0,W,H);
  /* spores */
  sp.forEach(function(s){s.y-=s.v*dt;s.x+=Math.sin(tm*.7+s.ph)*10*dt;if(s.y<-6){s.y=H+6;s.x=Math.random()*W}
   var g=x.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*4);g.addColorStop(0,"rgba(190,245,60,"+s.a+")");g.addColorStop(1,"rgba(190,245,60,0)");x.fillStyle=g;x.beginPath();x.arc(s.x,s.y,s.r*4,0,6.283);x.fill()});
  /* sludge, two layers */
  [[.55,"rgba(40,110,20,.85)",0],[1,"rgba(120,200,20,.9)",18]].forEach(function(L){
   x.fillStyle=L[1];x.beginPath();x.moveTo(0,H);for(var px=0;px<=W;px+=10)x.lineTo(px,level(px+L[2]*5,tm*(L[0]+.3))+L[2]);x.lineTo(W,H);x.closePath();x.fill()});
  x.strokeStyle="rgba(220,255,120,.55)";x.lineWidth=1.4;x.beginPath();for(var q=0;q<=W;q+=10){var yy=level(q+90,tm*1.3)+18;q?x.lineTo(q,yy):x.moveTo(q,yy)}x.stroke();
  /* bubbles from the sludge */
  if(Math.random()<dt*2.2)bu.push({x:Math.random()*W,y:H-8,r:2+Math.random()*7,v:-14-Math.random()*20,t:0,life:1.6+Math.random()*2.6});
  bu=bu.filter(function(b){b.t+=dt;b.y+=b.v*dt;b.x+=Math.sin(tm*2+b.r)*6*dt;
   var top=b.free?-99:level(b.x,tm)-b.r*.2;
   if(b.t>=b.life||(!b.free&&b.y<top-60)){pops.push({x:b.x,y:b.y,r:b.r,t:0});return false}return true});
  bu.forEach(function(b){x.strokeStyle="rgba(210,255,110,.8)";x.fillStyle="rgba(150,235,30,.14)";x.lineWidth=1.3;x.beginPath();x.arc(b.x,b.y,b.r,0,6.283);x.fill();x.stroke();
   x.fillStyle="rgba(255,255,220,.7)";x.beginPath();x.arc(b.x-b.r*.35,b.y-b.r*.35,Math.max(.8,b.r*.2),0,6.283);x.fill()});
  pops=pops.filter(function(p){p.t+=dt;return p.t<.35});
  pops.forEach(function(p){var k=p.t/.35;x.strokeStyle="rgba(210,255,110,"+(1-k)+")";x.lineWidth=1.5;x.beginPath();x.arc(p.x,p.y,p.r*(1+k*1.6),0,6.283);x.stroke();
   for(var i=0;i<5;i++){var an=i*1.256+p.x;x.fillStyle="rgba(210,255,110,"+(1-k)+")";x.fillRect(p.x+Math.cos(an)*p.r*(1+k*2.4),p.y+Math.sin(an)*p.r*(1+k*2.4),1.6,1.6)}})})(last);
})();
/* ===== v92: sound scenes per tone (play only while the Sound button is on) ===== */
(function(){
 var root=document.documentElement,H=window.HA,ctx=null,mst=null,an=null,nz=null,bed=null,bedTone="",hb=null,lastRing=0,SC={};
 function sndOn(){var b=document.getElementById("snd");return !!b&&b.getAttribute("aria-pressed")==="true"&&!(H&&H.calm&&H.calm())&&!document.hidden}
 function C(){if(ctx){if(ctx.state==="suspended")try{ctx.resume()}catch(e){}return ctx}
  var A=window.AudioContext||window.webkitAudioContext;if(!A)return null;
  try{ctx=new A();mst=ctx.createGain();mst.gain.value=1.5;an=ctx.createAnalyser();an.fftSize=1024;mst.connect(an);an.connect(ctx.destination);
   var n=ctx.sampleRate*3;nz=ctx.createBuffer(1,n,ctx.sampleRate);var d=nz.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;ctx.resume()}catch(e){ctx=null}
  return ctx}
 function dst(pan){var c=ctx;if(!c.createStereoPanner)return mst;var p=c.createStereoPanner();p.pan.value=pan||0;p.connect(mst);return p}
 /* one-shot filtered noise burst */
 function burst(t,dur,type,f,q,peak,pan,f2){var c=ctx,s=c.createBufferSource();s.buffer=nz;s.loopStart=0;var b=c.createBiquadFilter();b.type=type;b.frequency.setValueAtTime(f,t);if(f2)b.frequency.exponentialRampToValueAtTime(f2,t+dur);b.Q.value=q||.7;
  var g=c.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(peak,t+Math.min(.02,dur*.3));g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  s.connect(b);b.connect(g);g.connect(dst(pan));s.start(t,Math.random()*2,dur+.05)}
 function tone(t,f0,f1,dur,peak,type,pan){var c=ctx,o=c.createOscillator();o.type=type||"sine";o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(Math.max(20,f1),t+dur);
  var g=c.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(peak,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(dst(pan));o.start(t);o.stop(t+dur+.05)}
 function R(a,b){return a+Math.random()*(b-a)}
 function pan(){return R(-.8,.8)}
 /* ---- beds ---- */
 function stopBed(){if(bed){try{bed.g.gain.cancelScheduledValues(ctx.currentTime);bed.g.gain.linearRampToValueAtTime(0,ctx.currentTime+.8);var b=bed;setTimeout(function(){b.nodes.forEach(function(n){try{n.stop()}catch(e){}})},900)}catch(e){}bed=null}
  if(hb){clearInterval(hb);hb=null}bedTone=""}
 function nbed(g,type,f,q,gain,lfo,depth){var s=ctx.createBufferSource();s.buffer=nz;s.loop=true;var b=ctx.createBiquadFilter();b.type=type;b.frequency.value=f;b.Q.value=q;var gg=ctx.createGain();gg.gain.value=gain;s.connect(b);b.connect(gg);gg.connect(g);s.start();var n=[s];
  if(lfo){var o=ctx.createOscillator();o.frequency.value=lfo;var og=ctx.createGain();og.gain.value=gain*depth;o.connect(og);og.connect(gg.gain);o.start();n.push(o)}return n}
 function dbed(g,freqs,gain,lp){var n=[],f=ctx.createBiquadFilter();f.type="lowpass";f.frequency.value=lp||220;var gg=ctx.createGain();gg.gain.value=gain;f.connect(gg);gg.connect(g);
  freqs.forEach(function(fr){var o=ctx.createOscillator();o.type="triangle";o.frequency.value=fr;o.connect(f);o.start();n.push(o)});return n}
 function startBed(tn){stopBed();bedTone=tn;
  var g=ctx.createGain();g.gain.value=0;g.gain.linearRampToValueAtTime(1,ctx.currentTime+2);g.connect(mst);var nodes=[];
  if(tn==="ringu"){nodes=nodes.concat(nbed(g,"bandpass",3200,.5,.09),nbed(g,"bandpass",700,.6,.08),nbed(g,"lowpass",300,.5,.05,.2,.5))}
  else if(tn==="kaidan"){nodes=nodes.concat(nbed(g,"bandpass",340,.9,.12,.09,.8),nbed(g,"bandpass",1100,1.2,.03,.06,.9),dbed(g,[98,98.7],.035,180))}
  else if(tn==="juon"){nodes=nodes.concat(dbed(g,[46,47.3,69],.045,160),nbed(g,"lowpass",420,.5,.07,.27,.9))}
  else if(tn==="tomie"){nodes=nodes.concat(nbed(g,"bandpass",4200,1,.045,2.3,.9),nbed(g,"highpass",2600,.5,.02,.5,.6))}
  else if(tn==="green"){nodes=nodes.concat(nbed(g,"lowpass",260,.7,.18,.7,.7),nbed(g,"bandpass",900,2,.03,.4,.9))}
  else if(tn==="blood"){nodes=nodes.concat(dbed(g,[41,41.9],.045,120),nbed(g,"lowpass",200,.7,.05,.3,.6))}
  else if(tn==="psy"){nodes=nodes.concat(dbed(g,[55,55.6,82.4],.04,150),nbed(g,"bandpass",120,1.4,.05,.05,.9),nbed(g,"highpass",6200,.5,.012,.3,.7))}
  bed={g:g,nodes:nodes};
  if(tn==="blood"){hb=setInterval(function(){if(!ctx||!sndOn()||root.dataset.tone!=="blood")return;var t=ctx.currentTime+.02;tone(t,62,38,.16,.7,"sine",0);tone(t+.24,54,34,.13,.5,"sine",0);burst(t,.08,"lowpass",160,.5,.12,0)},1150)}}
 /* ---- scenes: each returns delay (ms) to the next event ---- */
 SC.ringu=function(t){var r=Math.random();
  if(r<.42){var f=R(900,1700);tone(t,f,f*.45,.09,.14,"sine",pan());tone(t+.17,f*.8,f*.4,.1,.07,"sine",pan())}
  else if(r<.78)burst(t,R(.08,.22),"highpass",4500,.5,.16,pan());
  else if(Date.now()-lastRing>50000&&H&&H.sfx&&H.sfx.ring){lastRing=Date.now();H.sfx.ring(2)}
  else{tone(t,R(60,90),40,1.2,.25,"sine",0)}
  return R(3000,8000)};
 SC.kaidan=function(t){var r=Math.random();
  if(r<.45&&H&&H.sfx&&H.sfx.creak)H.sfx.creak({gain:.22,pan:pan(),dur:R(.9,1.8)});
  else if(r<.85){burst(t,4,"bandpass",R(300,520),1.2,.22,pan(),R(700,1100))}
  else{var f=R(160,230);[[1,.07],[2.76,.04],[5.4,.02]].forEach(function(p){tone(t,f*p[0],f*p[0]*.995,6,p[1],"sine",-.3)})}
  return R(7000,15000)};
 SC.juon=function(t){var r=Math.random();
  if(r<.4&&H&&H.sfx&&H.sfx.breath)H.sfx.breath({n:1,gain:.3,pan:pan()});
  else if(r<.75){var n=R(10,16)|0,tt=t,p=pan(),gap=.07;for(var i=0;i<n;i++){burst(tt,.05,"bandpass",R(300,520),4,.2-i*.008,p);tone(tt,R(80,110),50,.06,.1,"sawtooth",p);tt+=gap;gap*=1.09}}
  else if(H&&H.sfx&&H.sfx.creak)H.sfx.creak({gain:.2,pan:pan(),dur:R(1,2)});
  return R(8000,16000)};
 SC.tomie=function(t){var r=Math.random();
  if(r<.5){var n=R(8,20)|0,tt=t,p=pan();for(var i=0;i<n;i++){var d=R(.045,.09);burst(tt,d,"highpass",R(3200,5200),.6,.09,p+(i%2?.1:-.1));tt+=d+R(.01,.05)}}
  else if(r<.78){burst(t,.28,"lowpass",900,.7,.16,pan(),180);tone(t,180,70,.22,.1,"sine",pan())}
  else{tone(t,130,48,.16,.4,"sine",pan());burst(t,.1,"lowpass",420,.6,.09,0)}
  return R(4000,10000)};
 SC.blood=function(t){var f=R(1100,1700);tone(t,f,f*.35,.07,.12,"sine",pan());tone(t+.14,f*.9,f*.3,.12,.05,"sine",pan());
  if(Math.random()<.3)burst(t+.4,.3,"lowpass",600,.7,.08,pan(),160);return R(2500,6000)};
 function psyClose(){try{return window.HA.psy.close()}catch(e){return 0}}
 function steps(t,cl,n){var p=pan()*(1-cl*.85),tt=t,gap=.8-.32*cl;for(var i=0;i<n;i++){burst(tt,.05+.03*cl,"lowpass",150+cl*170,.7,.1+.2*cl,p);burst(tt+.07,.035,"lowpass",90+cl*60,.5,.04+.09*cl,p);tt+=gap*R(.92,1.08)}}
 window.HA=window.HA||{};window.HA.stepNow=function(cl){try{if(!sndOn()||!C())return;steps(ctx.currentTime+.05,cl,2+(cl*3|0))}catch(e){}};
 SC.psy=function(t){var cl=psyClose(),r=Math.random();
  if(r<.3+.4*cl){steps(t,cl,(3+cl*5|0)+(R(0,3)|0))}
  else if(r<.75){tone(t,R(48,62),40,2.4,.14,"sine",0)}
  else{burst(t,.9,"bandpass",R(2600,4200),6,.05,pan(),R(1800,2600))}
  return R(6000,16000)*(1-.55*cl)};
 SC.green=function(t){var r=Math.random();
  if(r<.6){var n=R(3,8)|0,tt=t,p=pan();for(var i=0;i<n;i++){var f=R(180,520);tone(tt,f,f*R(1.6,2.4),R(.06,.12),.1,"sine",p);tt+=R(.05,.22)}}
  else{var m=R(4,10)|0;for(var j=0;j<m;j++)burst(t+R(0,.7),.012,"highpass",5500,.5,.13,pan())}
  return R(1500,4500)};
 function duck(v){try{if(typeof sndNodes!=="undefined"&&sndNodes&&sndNodes.m&&typeof actx!=="undefined"&&actx)sndNodes.m.gain.setTargetAtTime(v,actx.currentTime,.7)}catch(e){}}
 var timer=null;
 function loop(){
  var tn=root.dataset.tone,sc=SC[tn],delay=1200;
  try{
   if(!sndOn()||!sc){if(ctx&&bed||hb)stopBed();if(sndOn())duck(.9)}
   else{if(!C()){return}
    if(bedTone!==tn)startBed(tn);duck(.18);
    delay=sc(ctx.currentTime+.05)}
  }catch(e){delay=4000}
  timer=setTimeout(loop,delay)}
 loop();
 try{new MutationObserver(function(){clearTimeout(timer);loop()}).observe(root,{attributes:true,attributeFilter:["data-tone"]})}catch(e){}
 /* test hook: level of this layer only */
 window.HA=window.HA||{};window.HA.scene={level:function(){if(!an)return 0;var d=new Float32Array(an.fftSize);an.getFloatTimeDomainData(d);var s=0;for(var i=0;i<d.length;i++)s+=d[i]*d[i];return Math.sqrt(s/d.length)},now:function(){loop()}};
})();
/* ===== v101: audit labels, what's new, collections by tone, page of the day, corner glimpses ===== */
(function(){
 var H=window.HA,TM=H.TM,st=H.st,ss=H.ss,root=document.documentElement;
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 /* ---------- labels ---------- */
 function labels(){
  var sq=document.getElementById("sq");if(sq)sq.setAttribute("aria-label",TM("Поиск по сайту","Search the site"));
  document.querySelectorAll("input,textarea,select").forEach(function(x){
   if(x.type==="hidden"||x.getAttribute("aria-label")||(x.labels&&x.labels.length))return;
   var p=x.placeholder||x.title||x.name||x.id;if(p)x.setAttribute("aria-label",p)})}
 /* ---------- what's new ---------- */
 var FEAT=[
  {id:"n9",d:"12.11.2026",t:TM("Трейлер, новые арты и формы","Trailer, new art and working forms"),p:TM("На сайте появился раздел «Трейлер» с видео. В шапке и в галерее новые арты: вампир, городские легенды, театр призраков, Kairo, онмёдзи, Тэцуо и другие. Формы подписки и обратной связи теперь приходят нам на почту.","A new Trailer section with a video. New art in the header and the gallery: the vampire, urban legends, the ghost theatre, Kairo, onmyoji, Tetsuo and more. The subscribe and contact forms now reach our email.")},
  {id:"n8",d:"10.11.2026",t:TM("Новый арт в шапке","New header art"),p:TM("У тонов Ringu, Дзю-он, ТОМИЕ, Кровь и Кайдан теперь свои слайды в шапке.","Ringu, Ju-On, TOMIE, Blood and Kaidan now have their own header slides.")},
  {id:"n7",d:"10.11.2026",t:TM("Манга и аниме, ещё 116 фильмов и живая лента","Manga and anime, 116 more films and a live feed"),p:TM("Новый раздел «Манга и аниме». В каталог добавлено 116 фильмов. Лента «Новое» теперь собирается сама.","A new Manga & anime section. 116 films were added to the catalogue. The What's new feed now builds itself.")},
  {id:"n6",d:"09.11.2026",t:TM("Новое на сайте, подборки по тонам и «Страница дня»","What's new, collections by tone and Page of the Day"),p:TM("У каждого тона теперь своя подборка фильмов и манги. Каждый день выходит новая «страница»: фильм и короткий факт. Иногда в углу экрана что-то мелькает. Не пугайтесь, оно безвредно.","Every tone now has its own shelf of films and manga. A new “page” appears every day: a film and a short fact. Sometimes something flickers in the corner of the screen. Do not be alarmed, it is harmless.")},
  {id:"n5",d:"2026-11",t:TM("Звук для каждого тона","Sound for every tone"),p:TM("Кнопка «sound» включает отдельную звуковую сцену: у Ringu, Томие, Крови, Зелёного и других она своя.","The sound button switches on a separate soundscape: Ringu, Tomie, Blood, Green and the rest each have their own.")},
  {id:"n4",d:"2026-10",t:TM("Новые тона: Ringu, ТОМИЕ, Кровь, Зелёный","New tones: Ringu, TOMIE, Blood, Green"),p:TM("Меняют цвет, фон, шрифты и мелкие детали сайта. Переключатель находится сверху, рядом с поиском.","They change the colour, background, type and small details of the site. The switch is at the top, next to search.")},
  {id:"n3",d:"2026-10",t:TM("Сайт стал быстрее","The site got faster"),p:TM("Картинки вынесены в отдельные файлы и подгружаются по мере прокрутки, поэтому страница открывается заметно легче.","Images moved into separate files and load as you scroll, so the page opens much lighter.")}];
 function pd(s){var m=/^(\d\d)\.(\d\d)\.(\d{4})$/.exec(s);if(m)return Date.UTC(+m[3],+m[2]-1,+m[1]);m=/^(\d{4})-(\d\d)$/.exec(s);if(m)return Date.UTC(+m[1],+m[2]-1,1);return 0}
 function fd(s){if(/^\d{4}-\d\d$/.test(s)){var m=s.split("-");return(LANG==="ru"?["","январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"][+m[1]]:["","January","February","March","April","May","June","July","August","September","October","November","December"][+m[1]])+" "+m[0]}return s}
 function feed(){
  var o=[];
  FEAT.forEach(function(n){o.push({k:pd(n.d),d:fd(n.d),t:n.t,p:n.p})});
  try{NEWS.slice(0,5).forEach(function(n){o.push({k:pd(n.d),d:n.d,t:T(n.t),p:T(n.p)})})}catch(e){}
  try{var by={};Object.keys(F).forEach(function(id){var x=F[id].add;if(x)(by[x]=by[x]||[]).push(F[id])});
   Object.keys(by).forEach(function(d){var l=by[d].sort(function(x,y){return y.y-x.y}),nm=l.slice(0,5).map(function(f){return T(f.n)}).join(", ");
    o.push({k:pd(d),d:d,t:TM("В каталог добавлено фильмов: ","Films added to the catalogue: ")+l.length,p:TM("Среди них: ","Among them: ")+nm+"…"})})}catch(e){}
  try{var rs=RELEASES.filter(function(r){return !r.soon}).slice(0,2),up=RELEASES.filter(function(r){return r.soon}).slice(-1);
   rs.forEach(function(r){var d=r.d+".2026";o.push({k:pd(d),d:d,t:TM("Вышел: ","Released: ")+r.t,p:T(r.dir)})});
   up.forEach(function(r){var d=r.d+".2026";o.push({k:pd(d),d:d,t:TM("Скоро: ","Coming soon: ")+r.t,p:T(r.dir)})})}catch(e){}
  o.sort(function(x,y){return y.k-x.k});return o.slice(0,10)}
 function buildNews(){
  var sec=document.getElementById("whatsnew"),items=feed(),seen=st("ha-news-seen2",null),now=Date.now();
  var li=items.map(function(n){var isNew=seen!==null&&n.k>seen&&n.k<=now+864e5*30;
   return '<li'+(isNew?' class="is-new"':'')+'><time>'+esc(n.d)+'</time>'+(isNew?'<span class="tg">NEW</span>':'')+'<b>'+esc(n.t)+'</b><p>'+esc(n.p)+'</p></li>'}).join("");
  sec.querySelector(".wn").innerHTML=li;sec.dataset.top=items[0]?items[0].k:0;
  sec.querySelector("h2 span").textContent=TM("Новое на сайте","What's new");
  sec.querySelector("small").textContent=TM("собирается автоматически","built automatically")}
 /* ---------- collections by tone ---------- */
 var COL={
  ringu:{n:TM("Ringu","Ringu"),d:TM("Проклятие на плёнке, телефоне и экране.","The curse on tape, on the phone and on the screen."),i:[
   ["1998",TM("«Звонок» (Ringu), Хидэо Накаты","Ringu, Hideo Nakata"),TM("Видеокассета и семь дней. С него начался бум J-хоррора.","A videotape and seven days. The film that started the J-horror boom.")],
   ["2002",TM("«Тёмные воды», Хидэо Накаты","Dark Water, Hideo Nakata"),TM("Мокрое пятно на потолке и пустая квартира.","A wet stain on the ceiling and an empty flat.")],
   ["2001",TM("«Пульс» (Kairo), Киёси Куросава","Pulse (Kairo), Kiyoshi Kurosawa"),TM("Призраки приходят через интернет, а мир медленно пустеет.","Ghosts arrive through the internet while the world slowly empties.")],
   ["2005",TM("«Проклятие» (Noroi), Кодзи Сираиси","Noroi: The Curse, Koji Shiraishi"),TM("Псевдодокументалка, которая чем дальше, тем неуютнее.","A found-footage documentary that gets more uneasy the further it goes.")],
   ["2003",TM("«Пропущенный звонок», Такаси Миикэ","One Missed Call, Takashi Miike"),TM("Звонок с твоего же номера и голос из будущего.","A call from your own number and a voice from the future.")]]},
  tomie:{n:TM("ТОМИЕ · Дзюндзи Ито","TOMIE · Junji Ito"),d:TM("Манга Дзюндзи Ито и экранизации его историй.","Junji Ito's manga and screen adaptations of his stories."),i:[
   ["1987",TM("«Томие», манга","Tomie, manga"),TM("Красавица, которая возвращается снова и снова, сколько её ни убивай.","A beauty who keeps coming back no matter how often she is killed.")],
   ["1998",TM("«Узумаки», манга","Uzumaki, manga"),TM("Городок, одержимый спиралью.","A town obsessed with the spiral.")],
   ["2000",TM("«Узумаки», фильм, Хигучинский","Uzumaki, film, Higuchinsky"),TM("Экранизация с зелёным фильтром и закрученными кадрами.","A live-action version with a green cast and twisted framing.")],
   ["1998",TM("«Томие», фильм, Атару Оикава","Tomie, film, Ataru Oikawa"),TM("Первая экранизация, с которой пошла целая серия.","The first adaptation, which led to a whole series.")],
   ["2023",TM("«Junji Ito Maniac»","Junji Ito Maniac: Japanese Tales of the Macabre"),TM("Сборник коротких историй в формате аниме.","An anthology of short stories as anime.")]]},
  juon:{n:TM("Дзю-он · Проклятие","Ju-On · The Grudge"),d:TM("Дом, где умирают, и злоба, которая не уходит.","The house where people die and the grudge that never leaves."),i:[
   ["2002",TM("«Проклятие» (Ju-On: The Grudge), Такаси Симидзу","Ju-On: The Grudge, Takashi Shimizu"),TM("Хронология, разбитая на главы, и скрип из горла.","A chronology cut into chapters, and a rattle from the throat.")],
   ["2016",TM("«Садако против Каяко»","Sadako vs. Kayako"),TM("Два проклятия встречаются в одном фильме.","Two curses meet in one film.")],
   ["2020",TM("«Ju-On: Origins», сериал Netflix","Ju-On: Origins, Netflix series"),TM("Приквел о том, как всё началось.","A prequel about how it all began.")],
   ["2005",TM("«Проклятие» (Noroi), Кодзи Сираиси","Noroi: The Curse, Koji Shiraishi"),TM("Ещё один проклятый дом, но в стиле документалки.","Another cursed place, shot as a documentary.")]]},
  kaidan:{n:TM("Кайдан","Kaidan"),d:TM("Старые японские истории о призраках.","Old Japanese ghost stories."),i:[
   ["1964",TM("«Кайдан», Масаки Кобаяси","Kwaidan, Masaki Kobayashi"),TM("Четыре новеллы по Лафкадио Хирну.","Four tales after Lafcadio Hearn.")],
   ["1968",TM("«Куронэко», Канэто Синдо","Kuroneko, Kaneto Shindo"),TM("Призрак и кошки в чёрном лесу.","Ghosts and cats in a black forest.")],
   ["1964",TM("«Онибаба», Канэто Синдо","Onibaba, Kaneto Shindo"),TM("Тростник, маска и страх войны.","Reeds, a mask and the fear of war.")],
   ["1977",TM("«Дом» (Hausu), Нобухико Обаяси","Hausu, Nobuhiko Obayashi"),TM("Безумный и красивый дом, который ест людей.","A mad, beautiful house that eats people.")],
   ["1953",TM("«Сказки туманной луны», Кэндзи Мидзогути","Ugetsu, Kenji Mizoguchi"),TM("Красивая история призрака без крови.","A beautiful ghost story without blood.")]]},
  blue:{n:TM("Синий","Blue"),d:TM("Холодные, тревожные фильмы о сознании и экране.","Cold, uneasy films about the mind and the screen."),i:[
   ["1997",TM("«Идеальная синева», Сатоси Кон","Perfect Blue, Satoshi Kon"),TM("Поп-звезда, которая теряет границу между собой и образом.","A pop idol who loses the line between herself and her image.")],
   ["1997",TM("«Исцеление» (Cure), Киёси Куросава","Cure, Kiyoshi Kurosawa"),TM("Убийства без причины и тихий допрос.","Murders without a motive and a quiet interrogation.")],
   ["2001",TM("«Пульс», Киёси Куросава","Pulse, Kiyoshi Kurosawa"),TM("Одиночество, которое приходит по проводам.","Loneliness that arrives through the wires.")],
   ["2002",TM("«Тёмные воды», Хидэо Наката","Dark Water, Hideo Nakata"),TM("Сырой подъезд и лифт, в котором что-то не так.","A damp stairwell and a lift where something is wrong.")]]},
  blood:{n:TM("Кровь","Blood"),d:TM("Жёсткое кино: тут не отводят глаза.","Harsh cinema that does not look away."),i:[
   ["1999",TM("«Прослушивание», Такаси Миикэ","Audition, Takashi Miike"),TM("Медленное начало и очень жёсткий финал.","A slow start and a very hard ending.")],
   ["1977",TM("«Суспирия», Дарио Ардженто","Suspiria, Dario Argento"),TM("Красный и синий свет, балетная школа.","Red and blue light in a ballet academy.")],
   ["1981",TM("«Зловещие мертвецы», Сэм Рэйми","The Evil Dead, Sam Raimi"),TM("Хижина, книга и много крови на малом бюджете.","A cabin, a book and plenty of blood on a small budget.")],
   ["2008",TM("«Мученицы», Паскаль Ложье","Martyrs, Pascal Laugier"),TM("Один из самых тяжёлых фильмов жанра.","One of the heaviest films in the genre.")],
   ["2001",TM("«Ichi the Killer», Такаси Миикэ","Ichi the Killer, Takashi Miike"),TM("Экстремальный фильм по манге.","An extreme film based on a manga.")]]},
  green:{n:TM("Зелёный","Green"),d:TM("Лес, тростник и дневной свет, где тоже страшно.","Forest, reeds and daylight that is frightening too."),i:[
   ["1999",TM("«Ведьма из Блэр», Мирик и Санчес","The Blair Witch Project, Myrick & Sánchez"),TM("Трое в лесу и камера в руках.","Three people in a forest and a handheld camera.")],
   ["2018",TM("«Аннигиляция», Алекс Гарленд","Annihilation, Alex Garland"),TM("Зона, где всё растёт и меняется.","A zone where everything grows and mutates.")],
   ["2019",TM("«Солнцестояние», Ари Астер","Midsommar, Ari Aster"),TM("Ужас при свете дня и среди цветов.","Horror in daylight and among flowers.")],
   ["1964",TM("«Онибаба»","Onibaba"),TM("Шелест тростника и маска демона.","Rustling reeds and a demon mask.")],
   ["2017",TM("«Ритуал», Дэвид Брюкнер","The Ritual, David Bruckner"),TM("Поход, который идёт не туда.","A hike that goes the wrong way.")]]},
  psy:{n:TM("Психологический","Psychological"),d:TM("Страх без монстров: разум, дом и тишина.","Fear without monsters: the mind, the house and the silence."),i:[
   ["1980",TM("«Сияние», Стэнли Кубрик","The Shining, Stanley Kubrick"),TM("Отель, одиночество и коридор, в котором что-то не так.","A hotel, isolation and a corridor where something is wrong.")],
   ["1961",TM("«Невинные», Джек Клейтон","The Innocents, Jack Clayton"),TM("Гувернантка видит призраков или сходит с ума.","A governess sees ghosts, or is losing her mind.")],
   ["1963",TM("«The Haunting», Роберт Уайз","The Haunting, Robert Wise"),TM("Дом, который будто подстраивается под героиню.","A house that seems to adapt itself to its heroine.")],
   ["1990",TM("«Лестница Иакова», Эдриан Лайн","Jacob's Ladder, Adrian Lyne"),TM("Ветеран не может отличить реальность от бреда.","A veteran cannot tell reality from delirium.")],
   ["2018",TM("«Реинкарнация», Ари Астер","Hereditary, Ari Aster"),TM("Горе, которое превращается в нечто страшнее.","Grief turning into something worse.")],
   ["2014",TM("«Бабадук», Дженнифер Кент","The Babadook, Jennifer Kent"),TM("Монстр как метафора горя и усталости.","A monster as a metaphor for grief and exhaustion.")]]},
  clean:{n:TM("Классика","Classics"),d:TM("С чего начать, если вы только пришли.","Where to begin if you have just arrived."),i:[
   ["1960",TM("«Психо», Альфред Хичкок","Psycho, Alfred Hitchcock"),TM("Начало слэшера и один душ.","The birth of the slasher and one shower.")],
   ["1978",TM("«Хэллоуин», Джон Карпентер","Halloween, John Carpenter"),TM("Маска, тишина и музыка Карпентера.","A mask, silence and Carpenter's score.")],
   ["1973",TM("«Изгоняющий дьявола», Уильям Фридкин","The Exorcist, William Friedkin"),TM("Классика одержимости.","The classic of possession.")],
   ["1998",TM("«Звонок», Хидэо Наката","Ringu, Hideo Nakata"),TM("То, с чего начался J-хоррор.","Where J-horror began.")]]}};
 var ORDER=["ringu","tomie","juon","kaidan","blue","blood","green","psy","clean"],selTone=null;
 function buildTone(){
  var cur=root.dataset.tone||"kaidan";if(!selTone)selTone=COL[cur]?cur:"ringu";
  var tabs=document.getElementById("bt-tabs"),box=document.getElementById("bt-box"),c=COL[selTone];
  tabs.innerHTML=ORDER.map(function(k){return '<button type="button" data-k="'+k+'" aria-pressed="'+(k===selTone)+'">'+esc(COL[k].n)+'</button>'}).join("");
  box.innerHTML='<h3>'+esc(c.n)+'</h3><p>'+esc(c.d)+'</p><ol>'+c.i.map(function(r){return '<li><i>'+r[0]+'</i><b>'+esc(r[1])+'</b><span>'+esc(r[2])+'</span></li>'}).join("")+'</ol>'+
   (selTone!==cur?'<button type="button" class="bt-go" data-go="'+selTone+'">'+TM("Включить этот тон","Switch to this tone")+'</button>':'');
  var sec=document.getElementById("bytone");sec.querySelector("h2 span").textContent=TM("Подборки по тонам","Collections by tone");
  sec.querySelector("small").textContent=TM("что смотреть и читать","what to watch and read")}
 /* ---------- page of the day ---------- */
 function dayN(){var d=new Date();return Math.floor((Date.UTC(d.getFullYear(),d.getMonth(),d.getDate()))/864e5)}
 function buildPod(){
  var sec=document.getElementById("pod"),host=sec.querySelector(".pod");
  try{
   var ids=Object.keys(F),n=dayN(),id=ids[H.hash("pod"+n)%ids.length],f=F[id];
   var fact=T(FACTS[H.hash("fact"+n)%FACTS.length]);
   var dt=new Date().toLocaleDateString(LANG==="ru"?"ru-RU":"en-GB",{day:"numeric",month:"long",year:"numeric"});
   host.innerHTML='<div class="dt">'+esc(TM("Страница дня","Page of the day"))+' · '+esc(dt)+'</div><h3>'+esc(T(f.n))+'</h3><div class="my">'+esc(f.y)+' · '+esc(TM("фильм дня","film of the day"))+'</div><blockquote><b>'+esc(TM("Знаете ли вы: ","Did you know: "))+'</b>'+esc(fact)+'</blockquote><div class="ac"><button type="button" data-a="find">'+esc(TM("Найти в каталоге","Find in the catalogue"))+'</button><button type="button" data-a="copy">'+esc(TM("Скопировать","Copy"))+'</button><button type="button" data-a="card">'+esc(TM("Карточка","Card"))+'</button></div>';
   host.dataset.q=T(f.n);host.dataset.txt=T(f.n)+" ("+f.y+"). "+fact}
  catch(e){host.textContent=""}
  sec.querySelector("h2 span").textContent=TM("Страница дня","Page of the day");
  sec.querySelector("small").textContent=TM("новая каждый день","new every day")}
 /* ---------- build sections ---------- */
 function mkSec(id,title,body){
  var s=document.createElement("section");s.id=id;s.dataset.cat="news";s.className="nb2";
  s.innerHTML='<div class="sec-h"><h2><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-news"/></svg><span></span></h2><small></small></div>'+body;return s}
 if(st("ha-news-seen2",null)===null)ss("ha-news-seen2",Date.now()-864e5*3);
 function build(){
  if(document.getElementById("whatsnew"))return;
  var news=document.getElementById("news");if(!news)return;
  var a=mkSec("pod","","<div class=\"pod\"></div>"),b=mkSec("bytone","",'<div class="bt-tabs" id="bt-tabs" role="group" aria-label="Tones"></div><div class="bt-box" id="bt-box"></div>'),c=mkSec("whatsnew","",'<ul class="wn"></ul>');
  news.parentNode.insertBefore(a,news);news.parentNode.insertBefore(b,news);news.parentNode.insertBefore(c,news);
  document.getElementById("bt-tabs").addEventListener("click",function(e){var x=e.target.closest("button");if(!x)return;selTone=x.dataset.k;buildTone()});
  document.getElementById("bt-box").addEventListener("click",function(e){var x=e.target.closest(".bt-go");if(!x)return;var t=x.dataset.go,tb=document.getElementById("tnb");
   for(var i=0;i<9&&root.dataset.tone!==t;i++)tb.click();buildTone()});
  a.addEventListener("click",function(e){var x=e.target.closest("button");if(!x)return;var h=a.querySelector(".pod");
   if(x.dataset.a==="find"){var q=document.getElementById("sq");if(q){q.value=h.dataset.q;q.dispatchEvent(new Event("input",{bubbles:true}))}try{var sb=document.getElementById("sbtn");if(sb)sb.click()}catch(_){}}
   else if(x.dataset.a==="copy"){try{navigator.clipboard.writeText(h.dataset.txt);x.textContent=TM("Скопировано","Copied")}catch(_){x.textContent=TM("Не вышло","Could not copy")}}});
  var io=window.IntersectionObserver&&new IntersectionObserver(function(en){en.forEach(function(r){if(r.isIntersecting){setTimeout(function(){ss("ha-news-seen2",+c.dataset.top||Date.now())},2500);io.disconnect()}})},{threshold:.5});
  if(io)io.observe(c);
  render()}
 function render(){try{buildPod();buildTone();buildNews();labels()}catch(e){}}
 var _sl=window.setLang;if(_sl)window.setLang=function(){var r=_sl.apply(this,arguments);render();return r};
 try{new MutationObserver(function(){selTone=null;if(document.getElementById("bytone"))buildTone()}).observe(root,{attributes:true,attributeFilter:["data-tone"]})}catch(e){}
 /* ---------- corner glimpses ---------- */
 var G=null,busy=false;
 var SVG={
  hair:'<svg viewBox="0 0 120 170" aria-hidden="true"><path d="M120 0C70 8 24 44 30 112C33 142 22 156 6 170H120Z" fill="#04060a"/><path d="M120 46C92 50 72 74 76 108C80 134 102 144 120 146Z" fill="#c8d2cf"/><path d="M120 30C86 40 62 72 66 118M120 20C80 34 52 70 56 124M104 40C84 58 76 84 80 104" stroke="#04060a" stroke-width="4" fill="none"/><ellipse cx="100" cy="88" rx="11" ry="6.5" fill="#f1f4f2"/><circle cx="100" cy="88" r="4.6" fill="#0a0a0a"/><circle cx="100" cy="88" r="1.5" fill="EYE"/></svg>',
  hand:'<svg viewBox="0 0 170 110" aria-hidden="true"><g fill="none" stroke="#c9d3cf" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M38 110V64C38 52 44 46 42 34"/><path d="M66 110V56C66 44 72 36 71 20"/><path d="M96 110V58C96 46 102 40 102 26"/><path d="M126 110V70C126 60 131 54 133 44"/></g><g fill="none" stroke="#2a3330" stroke-width="1.4"><path d="M34 70h8M34 90h8M62 62h8M62 84h8M92 64h8M92 86h8M122 76h8M122 96h8"/></g><path d="M30 110h110V92C120 84 52 84 30 94Z" fill="#c9d3cf"/></svg>',
  eye:'<svg viewBox="0 0 90 50" aria-hidden="true"><path d="M2 26C22 4 68 4 88 26C68 46 22 46 2 26Z" fill="#eef1ef"/><circle cx="45" cy="25" r="14" fill="#101010"/><circle cx="45" cy="25" r="5.5" fill="EYE"/><path d="M2 26C22 4 68 4 88 26" stroke="#04060a" stroke-width="3" fill="none"/></svg>'};
 function eyeColor(){var t=root.dataset.tone;return t==="blood"?"#d8232b":t==="green"?"#6fe063":t==="blue"?"#78a8ff":"#d8232b"}
 function glimpse(kind){
  if(busy||H.RM)return false;
  var kinds=["hair","hand","eye"];kind=kind||kinds[Math.floor(Math.random()*3)];
  var W=Math.min(innerWidth,innerHeight)<500,el=G||(G=document.createElement("div"));el.id="glimpse";el.setAttribute("aria-hidden","true");
  el.innerHTML=SVG[kind].replace(/EYE/g,eyeColor());document.body.appendChild(el);
  var s=W?.62:1,right=Math.random()<.5,anim;
  el.style.cssText="";
  if(kind==="hair"){el.style.width=120*s+"px";el.style.height=170*s+"px";el.style[right?"right":"left"]="0";el.style.bottom=(8+Math.random()*30)+"%";if(!right)el.style.transform="scaleX(-1)";
   var out=(right?1:-1)*100,base=right?"":"scaleX(-1) ";
   anim=el.animate([{opacity:1,transform:base+"translateX("+out+"%)"},{opacity:1,transform:base+"translateX(0)",offset:.35},{opacity:1,transform:base+"translateX(0)",offset:.9},{opacity:0,transform:base+"translateX(0)"}],{duration:3200,easing:"ease-out"})}
  else if(kind==="hand"){el.style.width=170*s+"px";el.style.height=110*s+"px";el.style.bottom="0";el.style.left=(10+Math.random()*70)+"%";
   anim=el.animate([{opacity:1,transform:"translateY(100%)"},{opacity:1,transform:"translateY(8%)",offset:.4},{opacity:1,transform:"translateY(8%)",offset:.85},{opacity:0,transform:"translateY(8%)"}],{duration:2600,easing:"ease-out"})}
  else{el.style.width=90*s+"px";el.style.height=50*s+"px";el.style.top=(8+Math.random()*40)+"%";el.style[right?"right":"left"]="10px";el.style.transformOrigin="50% 50%";
   anim=el.animate([{opacity:0,transform:"scaleY(.02)"},{opacity:.95,transform:"scaleY(1)",offset:.35},{opacity:.95,transform:"scaleY(1)",offset:.75},{opacity:.95,transform:"scaleY(.04)",offset:.82},{opacity:0,transform:"scaleY(.04)"}],{duration:3400,easing:"ease-in-out"})}
  busy=true;anim.onfinish=anim.oncancel=function(){busy=false;el.remove()};
  return true}
 function schedule(first){
  var d=first?90e3+Math.random()*90e3:150e3+Math.random()*210e3;
  setTimeout(function(){try{if(H.ok()&&!document.querySelector(".dkm.on"))glimpse()}catch(e){}schedule(false)},d)}
 schedule(true);
 H.glimpse=glimpse;
 /* ---------- boot ---------- */
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build);else build();
 setTimeout(build,600);setTimeout(labels,1500);
})();

/* ===== Hero artwork: load the selected tone first, then one slide at a time. ===== */
(function(){
 var root=document.documentElement,box=document.querySelector(".hslides");if(!box)return;
 var SET={ringu:["hero_ringu","hero_omc","hero_juon2","hero_kairo"],juon:["hero_juon","hero_juon2","hero_ringu"],tomie:["hero_tomie","hero_tomie2","hero_tomie3"],blood:["hero_blood","hero_red2","hero_vamp","hero_scis","hero_tets"],kaidan:["hero_kaidan","hero_red2","hero_thea","hero_onmy","hero_kai2"],psy:["hero_dream","hero_tets"],blue:["hero_ringu","hero_juon","hero_kairo","hero_dream"],green:["hero_juon2","hero_omc","hero_urban"],clean:["hero_red2","hero_blood","hero_kai2","hero_dream"],techno:["techno-kairo-lab","techno-kairo-sealed-door","techno-kairo-underpass","techno-kairo-dial-up","techno-kairo-exchange"]};
 var made={};
 function mk(tone){
  if(made[tone])return;made[tone]=1;
  SET[tone].forEach(function(k,i){
   var im=document.createElement("img");im.className="nt t-"+tone+(i?"":" on");im.alt=i?"":"Horror Aesthetic";im.width=1600;im.height=600;
   im.decoding="async";im.dataset.slideSrc="img/"+k+".webp";box.appendChild(im)})}
 var idx=0,generation=0,pending=false;
 function cur(){
  return [...box.querySelectorAll(SET[root.dataset.tone]?"img.nt.t-"+root.dataset.tone:"img:not(.nt)")];
 }
 function load(im){
  if(!im.getAttribute("src"))im.src=im.dataset.slideSrc||IMG[im.dataset.img];
  return im.decode();
 }
 function sync(){
  var t=root.dataset.tone;if(SET[t])mk(t);
  generation++;pending=false;idx=0;
  box.querySelectorAll("img").forEach(function(x){x.classList.remove("on","glitch")});
  var c=cur();if(c[0]){c[0].classList.add("on");load(c[0]).catch(function(){})}
 }
 setInterval(async function(){
  if(heroMotionOff()||pending)return;var c=cur();if(c.length<2)return;
  var token=generation,o=c[idx],next=(idx+1)%c.length,n=c[next];
  pending=true;
  try{
   await load(n);
   if(token!==generation||heroMotionOff())return;
   idx=next;n.classList.add("glitch","on");
   setTimeout(function(){if(token===generation){n.classList.remove("glitch");o.classList.remove("on")}},180);
  }catch(e){
   // Leave the current artwork visible if a later slide fails.
  }finally{if(token===generation)pending=false}
 },6000);
 try{new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:["data-tone"]})}catch(e){}
 sync();
})();

/* ===== v102: manga & anime section ===== */
(function(){
 var H=window.HA,TM=H.TM,root=document.documentElement;
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 var D=[
  ["m",TM("Томие","Tomie"),"Дзюндзи Ито","Junji Ito","1987",TM("Красавица, которую убивают, а она возвращается снова. Первая большая работа Ито.","A beauty who is killed and returns again and again. Ito's first big work.")],
  ["m",TM("Узумаки","Uzumaki"),"Дзюндзи Ито","Junji Ito","1998–1999",TM("Городок, который медленно сходит с ума от спирали.","A small town slowly driven mad by the spiral.")],
  ["m",TM("Гё","Gyo"),"Дзюндзи Ито","Junji Ito","2001–2002",TM("Рыбы на ходулях-лапках выходят из моря, и город наполняется запахом.","Fish on mechanical legs crawl out of the sea and the city fills with the smell of rot.")],
  ["m",TM("Загадка разлома Амигара","The Enigma of Amigara Fault"),"Дзюндзи Ито","Junji Ito","2002",TM("Короткая история о дырах в горе, которые точно по форме человека.","A short story about holes in a mountain, each shaped exactly like a person.")],
  ["m",TM("Дрейфующий класс","The Drifting Classroom"),"Кадзуо Умэдзу","Kazuo Umezu","1972–1974",TM("Школа внезапно оказывается посреди пустоты. Классика хоррор-манги.","A school suddenly finds itself in a wasteland. A classic of horror manga.")],
  ["m",TM("Паразит","Parasyte"),"Хитоси Ивааки","Hitoshi Iwaaki","1988–1995",TM("Пришельцы поселяются в людях, а подросток живёт рядом со своим паразитом.","Aliens take over human hosts while a teenager shares his body with one.")],
  ["m",TM("Берсерк","Berserk"),"Кэнтаро Миура","Kentaro Miura","1989–2021",TM("Мрачное фэнтези с демонами, жертвоприношениями и очень жестокими сценами.","Dark fantasy with demons, sacrifice and very brutal scenes.")],
  ["a",TM("Идеальная синева","Perfect Blue"),"Сатоси Кон","Satoshi Kon","1997",TM("Поп-звезда теряет границу между собой и образом.","A pop idol loses the line between herself and her image.")],
  ["a",TM("Эксперименты Лэйн","Serial Experiments Lain"),"Рютаро Накамура","Ryutaro Nakamura","1998",TM("Школьница и сеть, в которой стирается реальность.","A schoolgirl and a network in which reality dissolves.")],
  ["a",TM("Агент паранойи","Paranoia Agent"),"Сатоси Кон","Satoshi Kon","2004",TM("Мальчик с битой нападает на людей, и город заражается страхом.","A boy with a bat attacks people and the city catches the fear.")],
  ["a",TM("Девочка из ада","Hell Girl"),"Studio Deen","Studio Deen","2005",TM("Сайт, на который заходят в полночь, чтобы отправить обидчика в ад.","A website visited at midnight to send an enemy to hell.")],
  ["a",TM("Когда плачут цикады","Higurashi: When They Cry"),"07th Expansion","07th Expansion","2006",TM("Тихая деревня, ритуал и повторяющееся лето, которое всегда кончается плохо.","A quiet village, a ritual and a summer that always ends badly.")],
  ["a",TM("Моноке","Mononoke"),"Toei Animation","Toei Animation","2007",TM("Странствующий аптекарь изгоняет духов, и каждая серия снята как ожившая гравюра.","A wandering medicine seller exorcises spirits; every episode looks like a moving woodblock print.")],
  ["a",TM("Сики","Shiki"),"Studio Daume","Studio Daume","2010",TM("В глухой деревне люди умирают один за другим, и причина совсем не эпидемия.","In a remote village people die one after another, and it is not an epidemic.")],
  ["a",TM("Другая","Another"),"P.A. Works","P.A. Works","2012",TM("Класс, в котором заведено делать вид, что одного из учеников нет.","A class that pretends one of its students does not exist.")],
  ["a",TM("Человек-дьявол: Плакса","Devilman Crybaby"),"Science Saru","Science Saru","2018",TM("Жестокая и грустная переработка старой манги про людей и демонов.","A brutal, sad retelling of the old manga about humans and demons.")],
  ["a",TM("Коллекция Дзюндзи Ито","Junji Ito Collection"),"Studio Deen","Studio Deen","2018",TM("Сборник коротких историй из манги Ито.","An anthology of short stories from Ito's manga.")],
  ["a",TM("Дзюндзи Ито: Маниак","Junji Ito Maniac: Japanese Tales of the Macabre"),"Studio Deen","Studio Deen","2023",TM("Ещё один сборник по историям Ито.","Another anthology from Ito's stories.")],
  ["a",TM("Узумаки (аниме)","Uzumaki (anime)"),"Хироси Нагахама","Hiroshi Nagahama","2024",TM("Анимационная версия истории про спираль.","The animated version of the spiral story.")]];
 H.MANGA=D;
 var f="all";
 function render(){
  var sec=document.getElementById("manga");if(!sec)return;
  sec.querySelector("h2 span").textContent=TM("Манга и аниме","Manga & anime");
  sec.querySelector("small").textContent=TM("страшное из Японии","horror from Japan");
  var tabs=[["all",TM("Всё","All")],["m",TM("Манга","Manga")],["a",TM("Аниме","Anime")]];
  sec.querySelector(".mg-tabs").innerHTML=tabs.map(function(x){return '<button type="button" data-k="'+x[0]+'" aria-pressed="'+(x[0]===f)+'">'+esc(x[1])+'</button>'}).join("");
  sec.querySelector(".mg-grid").innerHTML=D.filter(function(r){return f==="all"||r[0]===f}).map(function(r,i){
   var by=TM(r[2],r[3]);return '<article class="mg-c"><span class="k">'+TM(r[0]==="m"?"Манга":"Аниме",r[0]==="m"?"Manga":"Anime")+'</span><h3>'+esc(r[1])+'</h3><div class="m">'+esc(by)+' · '+esc(r[4])+'</div><p>'+esc(r[5])+'</p><button type="button" data-q="'+esc(r[1])+'">'+TM("Искать на сайте","Search the site")+'</button></article>'}).join("")}
 function build(){
  if(document.getElementById("manga"))return;
  var cat=document.getElementById("catalog");if(!cat)return;
  var s=document.createElement("section");s.id="manga";s.dataset.cat="manga";s.dataset.kj="漫";
  s.innerHTML='<div class="sec-h"><h2><svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-book"/></svg><span></span></h2><small></small></div><div class="mg-tabs" role="group" aria-label="Filter"></div><div class="mg-grid"></div>';
  cat.parentNode.insertBefore(s,cat);
  s.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;
   if(b.dataset.k){f=b.dataset.k;render();return}
   if(b.dataset.q){var q=document.getElementById("sq");if(q){q.value=b.dataset.q;q.dispatchEvent(new Event("input",{bubbles:true}))}try{var sb=document.getElementById("sbtn");if(sb)sb.click()}catch(_){}}});
  render();
  try{var h=(location.hash||"").slice(1);if(h==="manga"){var btn=document.querySelector('#filters button[data-f="manga"]');if(btn)btn.click()}}catch(e){}}
 var _sl=window.setLang;if(_sl)window.setLang=function(){var r=_sl.apply(this,arguments);render();return r};
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build);else build();
 setTimeout(build,500);
})();

/* ===== v103: data-driven updates (data/updates.json) ===== */
(function(){
 function a2(ru,en){return {ru:ru||en,en:en||ru}}
 function apply(u){
  var changed=false;
  try{(u.films||[]).forEach(function(f){if(!f||!f.id||!f.en||!f.y||F[f.id])return;F[f.id]={n:a2(f.ru,f.en),y:+f.y,add:u.updated||""};changed=true})}catch(e){}
  try{(u.news||[]).slice().reverse().forEach(function(n){if(!n||!n.d||!(n.en_t||n.ru_t))return;
   var dup=NEWS.some(function(x){return x.d===n.d&&x.t&&x.t.en===(n.en_t||n.ru_t)});if(dup)return;
   NEWS.unshift({d:n.d,t:a2(n.ru_t,n.en_t),p:a2(n.ru_p,n.en_p)});changed=true})}catch(e){}
  try{(u.releases||[]).forEach(function(r){if(!r||!r.d||!r.t)return;if(RELEASES.some(function(x){return x.t===r.t&&x.d===r.d}))return;
   RELEASES.push({d:r.d,t:r.t,dir:a2(r.dir_ru,r.dir_en),gn:r.gn||[],st:a2("Ожидается","Upcoming"),soon:0,p:a2(r.ru,r.en)});changed=true})}catch(e){}
  if(u.updated){try{UI.upd=a2("Обновлено "+u.updated,"Updated "+u.updated);changed=true}catch(e){}}
  if(changed){try{window.setLang(LANG)}catch(e){}}}
 window.HA_HOME_REVIEW_STATE.updates=fetch("data/updates.json",{cache:"no-cache"})
  .then(function(r){return r.ok?r.json():null}).then(function(u){if(u)apply(u)}).catch(function(){});
 window.HA=window.HA||{};window.HA.applyUpdates=apply;
})();

/* ===== v104: PWA install, contact form, share card ===== */
(function(){
 var H=window.HA,TM=H.TM,root=document.documentElement;
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 /* ----- service worker + install ----- */
 try{if("serviceWorker"in navigator&&/^https?:$/.test(location.protocol))addEventListener("load",function(){navigator.serviceWorker.register("/horror-aesthetic/sw.js").catch(function(){})})}catch(e){}
 var dip=null;
 addEventListener("beforeinstallprompt",function(e){e.preventDefault();dip=e;var b=document.getElementById("pwa-i");if(b)b.classList.add("on")});
 addEventListener("appinstalled",function(){var b=document.getElementById("pwa-i");if(b)b.classList.remove("on");dip=null});
 var ios=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream,standalone=(navigator.standalone===true)||(window.matchMedia&&matchMedia("(display-mode:standalone)").matches);
 function setupInstall(){
  var b=document.getElementById("pwa-i");if(!b)return;
  if(standalone){b.classList.remove("on");return}
  if(ios)b.classList.add("on");
  b.onclick=function(){
   if(dip){dip.prompt();dip.userChoice.finally(function(){dip=null;b.classList.remove("on")});return}
   var m=document.getElementById("pwa-m");if(m)m.textContent=TM("На iPhone: кнопка «Поделиться» в Safari, затем «На экран Домой».","On iPhone: tap Share in Safari, then Add to Home Screen.")}}
 /* ----- contact form ----- */
 function setupContact(){
  var f=document.getElementById("ct-form");if(!f||f.dataset.on)return;f.dataset.on=1;
  var msg=document.getElementById("ct-msg"),btn=f.querySelector("button[type=submit]");
  f.addEventListener("submit",function(e){e.preventDefault();
   var em=f.querySelector("[name=email]").value.trim(),tx=f.querySelector("[name=message]").value.trim();
   if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){msg.textContent=TM("Проверьте адрес.","Check the address.");return}
   if(tx.length<5){msg.textContent=TM("Напишите хотя бы пару слов.","Write at least a few words.");return}
   if(f.querySelector("[name=bot-field]").value)return;
   btn.disabled=true;msg.textContent="…";
   var body="form-name=contact&email="+encodeURIComponent(em)+"&name="+encodeURIComponent(f.querySelector("[name=name]").value.trim())+"&message="+encodeURIComponent(tx)+"&lang="+LANG;
   window.HAF(body).then(function(r){if(!r.ok)throw 0;msg.textContent=TM("Отправлено. Спасибо.","Sent. Thank you.");f.reset()}).catch(function(){msg.innerHTML=TM("Не удалось отправить. Напишите нам на ","Could not send. Write to us at ")+'<a href="mailto:'+window.HAM()+'">'+window.HAM()+'</a>'}).then(function(){btn.disabled=false})})}
 /* ----- share card ----- */
 var W=1080,Hh=1350;
 function wrap(c,t,x,y,mw,lh,max){var w=String(t).split(/\s+/),l="",n=0;
  for(var i=0;i<w.length;i++){var s=l?l+" "+w[i]:w[i];if(c.measureText(s).width>mw&&l){c.fillText(l,x,y);y+=lh;n++;l=w[i];if(n>=max-1){var rest=w.slice(i).join(" ");while(c.measureText(rest+"…").width>mw&&rest.length>1)rest=rest.slice(0,-1);c.fillText(rest+(w.slice(i).join(" ")===rest?"":"…"),x,y);return y+lh}}else l=s}
  if(l){c.fillText(l,x,y);y+=lh}return y}
 function data(kind){
  var d=new Date(),dt=d.toLocaleDateString(LANG==="ru"?"ru-RU":"en-GB",{day:"numeric",month:"long",year:"numeric"});
  if(kind==="top"){
   var my=MY;
   var ids=Object.keys(my).filter(function(k){return my[k]==="seen"&&F[k]}).slice(-5).reverse(),lab=TM("Мой топ просмотренного","My watched list");
   if(!ids.length){ids=Object.keys(my).filter(function(k){return my[k]==="want"&&F[k]}).slice(-5).reverse();lab=TM("Хочу посмотреть","Want to watch")}
   return {tag:lab+" · "+dt,title:ids.length?"":TM("Список пока пуст","The list is empty"),sub:"",body:ids.length?ids.map(function(k,i){return(i+1)+". "+T(F[k].n)+" ("+F[k].y+")"}).join("\n"):TM("Отмечайте фильмы в каталоге: «Видел» или «Хочу».","Mark films in the catalogue: Seen or Want."),list:true}}
  if(kind==="night"){
   var f=document.getElementById("tn-f"),m=document.getElementById("tn-m"),fc=document.getElementById("fc-t");
   return {tag:TM("Фильм этой ночи","Film of the night")+" · "+dt,title:f?f.textContent:"",sub:m?m.textContent:"",body:fc?fc.textContent:""}}
  var p=document.querySelector("#pod .pod");
  if(p&&p.querySelector("h3"))return {tag:TM("Страница дня","Page of the day")+" · "+dt,title:p.querySelector("h3").textContent,sub:(p.querySelector(".my")||{}).textContent||"",body:((p.querySelector("blockquote")||{}).textContent)||""};
  return {tag:dt,title:"Horror Aesthetic",sub:"",body:""}}
 function heroImg(){var l=[].slice.call(document.querySelectorAll(".hslides img")).filter(function(i){return i.complete&&i.naturalWidth&&getComputedStyle(i).display!=="none"});return l.filter(function(i){return i.classList.contains("on")})[0]||l[0]||null}
 function draw(kind,useImg){
  var cv=document.createElement("canvas");cv.width=W;cv.height=Hh;var c=cv.getContext("2d");
  var cs=getComputedStyle(root),acc=(cs.getPropertyValue("--blood")||"#d8232b").trim()||"#d8232b",bone=(cs.getPropertyValue("--bone")||"#eee").trim()||"#eee",dim=(cs.getPropertyValue("--dim")||"#aab").trim()||"#aab",bg=(cs.getPropertyValue("--bg")||"#080a0a").trim()||"#080a0a";
  if(root.dataset.tone==="tomie"){bg="#0b0b0b";bone="#f1eee6";dim="#a9a69d"}
  c.fillStyle=bg;c.fillRect(0,0,W,Hh);
  var im=useImg?heroImg():null;
  if(im){var r=Math.max(W/im.naturalWidth,640/im.naturalHeight),iw=im.naturalWidth*r,ih=im.naturalHeight*r;c.drawImage(im,(W-iw)/2,0,iw,ih)}
  var g=c.createLinearGradient(0,300,0,720);g.addColorStop(0,"rgba(0,0,0,0)");g.addColorStop(1,bg);c.fillStyle=g;c.fillRect(0,0,W,720);
  c.strokeStyle=acc;c.lineWidth=4;c.strokeRect(24,24,W-48,Hh-48);
  var d=data(kind);
  c.textBaseline="alphabetic";
  c.font="600 26px ui-monospace,Menlo,Consolas,monospace";c.fillStyle=acc;c.fillText("● REC   HORROR AESTHETIC",64,84);
  c.textAlign="right";c.fillStyle=bone;c.fillText("PLAY ▶",W-64,84);c.textAlign="left";
  var y=700;
  c.font="600 28px ui-monospace,Menlo,Consolas,monospace";c.fillStyle=acc;y=wrap(c,d.tag.toUpperCase(),64,y,W-128,38,2);
  y+=18;
  if(d.title){c.font="700 84px Georgia,'Times New Roman',serif";c.fillStyle=bone;y=wrap(c,d.title,64,y+56,W-128,96,3);}
  if(d.sub){c.font="500 30px ui-monospace,Menlo,Consolas,monospace";c.fillStyle=dim;c.fillText(d.sub,64,y+4);y+=50}
  if(d.list){c.font="600 46px Georgia,'Times New Roman',serif";c.fillStyle=bone;d.body.split("\n").forEach(function(l){y=wrap(c,l,64,y+54,W-128,56,1)})}
  else if(d.body){c.font="400 38px Georgia,'Times New Roman',serif";c.fillStyle=bone;c.globalAlpha=.92;wrap(c,d.body,64,y+34,W-128,54,Math.max(2,Math.floor((Hh-110-y-34)/54)));c.globalAlpha=1}
  c.font="500 26px ui-monospace,Menlo,Consolas,monospace";c.fillStyle=dim;c.fillText("horroraesthetic.github.io/horror-aesthetic",64,Hh-64);
  return cv}
 var kind="pod";
 function open(k){
  if(k)kind=k;
  var m=H.modal("card",TM("Карточка для соцсетей","Share card"),"share",null);
  m.body.innerHTML='<div class="cd-k" role="group"></div><canvas id="cd-cv" width="'+W+'" height="'+Hh+'" aria-label="'+esc(TM("Предпросмотр карточки","Card preview"))+'"></canvas><div class="cd-a"><button type="button" data-a="save"></button><button type="button" data-a="share"></button></div><p class="cd-m" aria-live="polite"></p>';
  var cur=null;
  function paint(){
   var ks=[["pod",TM("Страница дня","Page of the day")],["night",TM("Фильм ночи","Film of the night")],["top",TM("Мой топ","My list")]];
   m.body.querySelector(".cd-k").innerHTML=ks.map(function(x){return '<button type="button" data-k="'+x[0]+'" aria-pressed="'+(x[0]===kind)+'">'+esc(x[1])+'</button>'}).join("");
   m.body.querySelector("[data-a=save]").textContent=TM("Сохранить PNG","Save PNG");m.body.querySelector("[data-a=share]").textContent=TM("Поделиться","Share");
   cur=draw(kind,true);
   var t=m.body.querySelector("#cd-cv").getContext("2d");t.clearRect(0,0,W,Hh);t.drawImage(cur,0,0)}
  paint();
  m.body.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var msg=m.body.querySelector(".cd-m");
   if(b.dataset.k){kind=b.dataset.k;paint();return}
   function blob(cb){try{cur.toBlob(function(x){if(x)cb(x);else retry()},"image/png")}catch(err){retry()}
    function retry(){cur=draw(kind,false);cur.toBlob(function(x){cb(x)},"image/png")}}
   if(b.dataset.a==="save")blob(function(x){var u=URL.createObjectURL(x),a=document.createElement("a");a.href=u;a.download="horror-aesthetic-"+kind+".png";document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},2000);msg.textContent=TM("Готово: файл сохранён.","Done: the file was saved.")});
   if(b.dataset.a==="share")blob(function(x){var file=new File([x],"horror-aesthetic-"+kind+".png",{type:"image/png"});
    if(navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:"Horror Aesthetic",url:"https://horroraesthetic.github.io/horror-aesthetic/"}).catch(function(){})}
    else msg.textContent=TM("Здесь нельзя отправить напрямую. Нажмите «Сохранить PNG» и выложите картинку сами.","Direct sharing is not available here. Use Save PNG and post the picture yourself.")})})}
 H.shareCard=open;H.drawCard=function(k,u){kind=k;return draw(k,u!==false)};
 document.addEventListener("click",function(e){var b=e.target.closest('[data-a="card"],#card-open');if(!b)return;e.preventDefault();open(b.dataset.k||(b.id==="card-open"?"pod":"pod"))});
 function boot(){setupInstall();setupContact()}
 var _sl=window.setLang;if(_sl)window.setLang=function(){var r=_sl.apply(this,arguments);setTimeout(boot,0);return r};
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
 setTimeout(boot,600);
})();

/* ===== v106: PSY tone. Corridor hero, heartbeat vignette, shadow follower, vanishing watchers, margin whispers ===== */
(function(){
 var H=window.HA,TM=H.TM,root=document.documentElement,RM=H.RM;
 function R(a,b){return a+Math.random()*(b-a)}
 function on(){return root.dataset.tone==="psy"&&!document.hidden&&!(H.calm&&H.calm())}
 /* ---------- overlays ---------- */
 function mk(id,html){var e=document.getElementById(id);if(e)return e;e=document.createElement("div");e.id=id;e.setAttribute("aria-hidden","true");if(html)e.innerHTML=html;document.body.appendChild(e);return e}
 var vig=mk("ps-vig"),sh=mk("ps-sh"),idle=mk("ps-idle");
 var eyes=mk("ps-eyes",'<svg viewBox="0 0 54 20" width="54" height="20"><path d="M2 10C8 3 16 3 22 10C16 17 8 17 2 10Z" fill="#e9ece4"/><circle cx="12" cy="10" r="3.6" fill="#0a0a0a"/><path d="M32 10C38 3 46 3 52 10C46 17 38 17 32 10Z" fill="#e9ece4"/><circle cx="42" cy="10" r="3.6" fill="#0a0a0a"/></svg>');
 /* ---------- corridor hero ---------- */
 var box=document.querySelector(".hslides"),cv=document.createElement("canvas");cv.id="psy-hero";cv.width=320;cv.height=120;cv.setAttribute("role","img");cv.setAttribute("aria-label",TM("Пустой коридор. В конце его кто-то стоит.","An empty corridor. Someone stands at the end of it."));
 if(box)box.appendChild(cv);
 var c=cv.getContext("2d"),VX=160,VY=56,t0=0,dark=0,flick=[],next=0,fig={on:true,d:4.2},mode="c",rm={on:true,p:1,n:.25},evN=0,swAt=7;
 function hw(d){return 170*Math.pow(.62,d)}function hh(d){return 64*Math.pow(.62,d)}
 function quad(a,b,cc,d,col){c.fillStyle=col;c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.lineTo(cc[0],cc[1]);c.lineTo(d[0],d[1]);c.closePath();c.fill()}
 function L(v,k){var x=Math.max(0,v*(1-k*.1));return x}
 function lum(base,v){var r=base[0]*v|0,g=base[1]*v|0,b=base[2]*v|0;return "rgb("+r+","+g+","+b+")"}
 function sceneC(now){
  var lit=(dark<=0)?1:(dark>0&&dark<.25?.12:0);
  if(flick.length&&now>flick[0]){flick.shift();lit=lit?0:.9}
  var v=lit,amb=.05;var vv=Math.max(v,amb);
  c.fillStyle="#020303";c.fillRect(0,0,320,120);
  for(var k=0;k<8;k++){
   var k1=k+1,x0=hw(k),x1=hw(k1),y0=hh(k),y1=hh(k1),f=L(1,k);
   quad([VX-x0,VY-y0],[VX-x1,VY-y1],[VX-x1,VY+y1],[VX-x0,VY+y0],lum([92,104,96],vv*f));
   quad([VX+x0,VY-y0],[VX+x1,VY-y1],[VX+x1,VY+y1],[VX+x0,VY+y0],lum([84,96,90],vv*f));
   quad([VX-x0,VY+y0],[VX+x0,VY+y0],[VX+x1,VY+y1],[VX-x1,VY+y1],lum([48,56,52],vv*f));
   quad([VX-x0,VY-y0],[VX+x0,VY-y0],[VX+x1,VY-y1],[VX-x1,VY-y1],lum([120,128,120],vv*f));
   if(k%2===1){var da=k+.2,db=k+.8;
    [[-1,0],[1,0]].forEach(function(sd){var s=sd[0],xa=VX+s*hw(da),xb=VX+s*hw(db);
     quad([xa,VY-hh(da)*.55],[xb,VY-hh(db)*.55],[xb,VY+hh(db)],[xa,VY+hh(da)],lum([30,36,32],vv*f))})}
   if(k%2===0&&k<7&&(lit>.5)&&!(k===4&&!(Math.floor(now/9000)%2))){var la=k+.25,lb=k+.75,wa=hw(la)*.3,wb=hw(lb)*.3,ya=VY-hh(la)*.985,yb=VY-hh(lb)*.985;
    quad([VX-wa,ya],[VX+wa,ya],[VX+wb,yb],[VX-wb,yb],"rgb(225,235,215)")}}
  var e=hw(8);c.fillStyle=lum([12,14,13],Math.max(vv,.15));c.fillRect(VX-e,VY-hh(8),e*2,hh(8)*2);
  c.fillStyle=lum([5,6,6],Math.max(vv,.15));c.fillRect(VX-e*.45,VY-hh(8)*.62,e*.9,hh(8)*1.62);
  if(fig.on){var d=fig.d,H2=hh(d),fx=VX+Math.sin(now/2300)*.3,fy=VY+H2,fh=H2*1.32,w=H2*.3;
   var vis=lit>.5?.55:(lit>0?.8:.0);
   if(lit<=0)vis=0;
   if(vis>0){c.globalAlpha=lit>.5?1:vis;
    c.fillStyle="#050606";c.fillRect(fx-w/2,fy-fh*.74,w,fh*.74);c.beginPath();c.ellipse(fx,fy-fh*.85,w*.42,w*.52,0,0,6.3);c.fill();
    c.fillStyle="#cfd3c8";c.beginPath();c.ellipse(fx,fy-fh*.85,w*.3,w*.4,0,0,6.3);c.fill();
    c.fillStyle="#050606";c.fillRect(fx-w*.55,fy-fh*.74,w*.11,fh*.5);c.fillRect(fx+w*.44,fy-fh*.74,w*.11,fh*.5);c.globalAlpha=1}}
  if(!lit){/* dark phase: only an after-image glow at the end of the corridor */var gr=c.createRadialGradient(VX,VY,2,VX,VY,70);gr.addColorStop(0,"rgba(150,170,150,.22)");gr.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=gr;c.fillRect(0,0,320,120)}
  for(var i=0;i<140;i++){c.fillStyle="rgba(255,255,255,"+(Math.random()*.22)+")";c.fillRect(Math.random()*320|0,Math.random()*120|0,1,1)}
  c.fillStyle="rgba(0,0,0,.18)";for(var y=0;y<120;y+=2)c.fillRect(0,y,320,1)}
 function sceneR(now){
  var lit=(dark<=0)?1:(dark>0&&dark<.25?.12:0);
  if(flick.length&&now>flick[0]){flick.shift();lit=lit?0:.9}
  var vv=Math.max(lit,.05);
  c.fillStyle="#020303";c.fillRect(0,0,320,120);
  c.fillStyle=lum([62,70,64],vv*.55);c.fillRect(0,0,320,120);
  c.fillStyle=lum([26,30,27],vv);c.fillRect(0,94,320,26);
  for(var i=0;i<4;i++){var x=32+i*64;
   c.fillStyle=lum([200,196,168],vv*(lit>.5?.6:.4));c.fillRect(x+2,14,60,80);
   c.fillStyle=lum([34,30,24],vv);for(var g=0;g<=4;g++)c.fillRect(x+g*15,14,2,80);for(var h=0;h<=4;h++)c.fillRect(x+2,14+h*20,60,2);
   if(rm.on&&lit>0&&i===rm.p){c.save();c.beginPath();c.rect(x+2,14,60,80);c.clip();
    var sc=.35+.65*rm.n,cx=x+32+Math.sin(now/1900)*(1.5-rm.n),by=94;
    c.fillStyle="rgba(8,8,6,"+(.4+.5*rm.n)+")";c.fillRect(cx-9*sc,by-46*sc,18*sc,46*sc);c.beginPath();c.ellipse(cx,by-52*sc,6.5*sc,8.5*sc,0,0,6.3);c.fill();c.restore();
    if(rm.n>=1){c.fillStyle="#020303";c.fillRect(x+27,14,8,80);c.fillStyle="#cfd3c8";c.fillRect(x+30,38,2,10)}}}
  if(!lit){var gr=c.createRadialGradient(160,56,2,160,56,80);gr.addColorStop(0,"rgba(150,170,150,.18)");gr.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=gr;c.fillRect(0,0,320,120)}
  for(var q=0;q<140;q++){c.fillStyle="rgba(255,255,255,"+(Math.random()*.22)+")";c.fillRect(Math.random()*320|0,Math.random()*120|0,1,1)}
  c.fillStyle="rgba(0,0,0,.18)";for(var y=0;y<120;y+=2)c.fillRect(0,y,320,1)}
 function scene(now){if(mode==="r")sceneR(now);else sceneC(now)}
 function labelMode(){cv.setAttribute("aria-label",mode==="r"?TM("Бумажные двери. За одной из них кто-то стоит.","Paper doors. Someone stands behind one of them."):TM("Пустой коридор. В конце его кто-то стоит.","An empty corridor. Someone stands at the end of it."))}
 function closeness(){return mode==="r"?Math.max(0,Math.min(1,(rm.n-.25)/.75)):Math.max(0,Math.min(1,(4.4-fig.d)/2.5))}
 function event(now){
  /* lights flicker, then go out; when they return the watcher has moved */
  var t=now,seq=[];for(var i=0;i<R(4,7)|0;i++){t+=R(40,160);seq.push(t)}
  flick=seq;dark=0;var darkAt=t+R(150,300),back=darkAt+R(500,900);
  setTimeout(function(){dark=1},darkAt-now);
  setTimeout(function(){dark=0;
   var r=Math.random(),c0=closeness();
   if(++evN>=swAt){evN=0;swAt=R(6,10)|0;mode=mode==="c"?"r":"c";fig.on=true;fig.d=4.4;rm.on=true;rm.p=R(0,4)|0;rm.n=.25;labelMode();return}
   if(mode==="r"){
    if(!rm.on){rm.on=true;rm.n=.25;rm.p=R(0,4)|0}
    else if(r<.55)rm.n=Math.min(1,rm.n+R(.15,.25));
    else if(r<.78){rm.p=Math.max(0,Math.min(3,rm.p+(Math.random()<.5?-1:1)))}
    else if(rm.n>=1){rm.on=false;rm.n=.25}
   }else{
   if(!fig.on){fig.on=true;fig.d=4.4}
   else if(r<.58)fig.d=Math.max(1.9,fig.d-R(.3,.55));
   else if(r<.8){}
   else{fig.on=false}}
   var c1=closeness();if(c1>c0&&window.HA&&HA.stepNow)setTimeout(function(){HA.stepNow(c1)},350)},back-now);
  next=back+R(5000,12000)}
 var last=0,vis=true;
 if(window.IntersectionObserver&&box)new IntersectionObserver(function(en){vis=en[0].isIntersecting},{threshold:0}).observe(box);
 function tick(){
  if(root.dataset.tone!=="psy"||document.hidden||!vis){return}
  var now=Date.now();if(RM){if(!last){scene(now);last=1}return}
  if(now>next&&!flick.length&&!dark)event(now);
  scene(now)}
 setInterval(tick,110);
 setTimeout(function(){next=Date.now()+4000},300);
 /* ---------- heartbeat speed follows scrolling ---------- */
 var lastY=scrollY,rel=null;
 addEventListener("scroll",function(){var d=Math.abs(scrollY-lastY);lastY=scrollY;if(root.dataset.tone!=="psy")return;
  root.style.setProperty("--beat",Math.max(.95,1.7-Math.min(d,120)/160)+"s");clearTimeout(rel);rel=setTimeout(function(){root.style.setProperty("--beat","1.7s")},1400)},{passive:true});
 /* ---------- shadow follower ---------- */
 var px=innerWidth/2,py=innerHeight/2,sx=px,sy=py,lastMove=Date.now(),lastPX=px,lastPY=py,fine=window.matchMedia&&matchMedia("(hover:hover) and (pointer:fine)").matches;
 addEventListener("pointermove",function(e){px=e.clientX;py=e.clientY;lastMove=Date.now();
  if(eyesUp){var r=eyes.getBoundingClientRect();if(Math.hypot(px-(r.left+r.width/2),py-(r.top+r.height/2))<260)hideEyes(true)}},{passive:true});
 addEventListener("touchstart",function(){lastMove=Date.now();hideEyes(true)},{passive:true});
 addEventListener("scroll",function(){lastMove=Date.now()},{passive:true});
 (function loop(){
  if(fine&&on()&&!RM){sx+=(px-sx)*.035;sy+=(py-sy)*.035;sh.style.transform="translate("+sx+"px,"+sy+"px)";sh.classList.add("on")}else sh.classList.remove("on");
  requestAnimationFrame(loop)})();
 /* ---------- watchers that vanish when you look ---------- */
 var eyesUp=false,eyesCool=0;
 function hideEyes(cut){if(!eyesUp)return;eyesUp=false;eyes.style.transition="none";eyes.style.opacity="0";eyesCool=Date.now()+R(45000,110000)}
 function showEyes(){
  var right=px<innerWidth/2,y=R(innerHeight*.2,innerHeight*.8);
  eyes.style.left=right?(innerWidth-70)+"px":"16px";eyes.style.top=y+"px";eyes.style.transition="opacity 1.6s";
  requestAnimationFrame(function(){eyes.style.opacity=".5";eyesUp=true});
  setTimeout(function(){if(eyesUp){eyes.style.transition="opacity 1.2s";eyes.style.opacity="0";eyesUp=false;eyesCool=Date.now()+R(45000,110000)}},9000)}
 /* ---------- margin whispers ---------- */
 var WH=[["Ты читаешь это слишком долго.","You have been reading this too long."],["Окно было закрыто.","The window was closed."],["Кто-то стоит позади.","Someone is standing behind you."],["Ты уже был здесь.","You have been here before."],["Не оборачивайся.","Do not turn around."],["Свет в коридоре гас сам.","The corridor light went out by itself."],["Он не двигался, пока ты смотрел.","It did not move while you were watching."],["Это не твоё отражение.","That is not your reflection."],["В доме нет второго этажа.","The house has no second floor."],["Ты слышал шаги?","Did you hear footsteps?"],["Тебя здесь ждали.","They were expecting you."],["Дверь открыта изнутри.","The door is open from the inside."]];
 function whisper(){
  var w=WH[Math.random()*WH.length|0],e=document.createElement("div");e.className="ps-w";e.setAttribute("aria-hidden","true");e.textContent=TM(w[0],w[1]);
  var left=Math.random()<.5;e.style[left?"left":"right"]="14px";e.style.top=R(14,82)+"vh";if(!left)e.style.textAlign="right";document.body.appendChild(e);
  var a=e.animate([{opacity:0},{opacity:.55,offset:.25},{opacity:.55,offset:.7},{opacity:0}],{duration:R(4200,6000)});a.onfinish=function(){e.remove()}}
 /* ---------- split + mirror flips ---------- */
 function split(){root.classList.add("ps-split");setTimeout(function(){root.classList.remove("ps-split")},R(110,200))}
 function flip(){
  var ps=[].slice.call(document.querySelectorAll("section:not([hidden]) p")).filter(function(p){var r=p.getBoundingClientRect();return r.top>40&&r.bottom<innerHeight-40&&r.width>120&&p.textContent.length>40});
  if(!ps.length)return;var p=ps[Math.random()*ps.length|0],old=p.style.transform;p.style.transform="scaleX(-1)";setTimeout(function(){p.style.transform=old},R(90,150))}
 /* ---------- idle line ---------- */
 var idleOn=false;
 /* ---------- scheduler ---------- */
 var T0=Date.now(),nW=T0+R(14000,26000),nS=T0+R(40000,80000),nF=T0+R(55000,110000);
 setInterval(function(){
  if(!on()||RM)return;var now=Date.now();
  if(now>nW){whisper();nW=now+R(22000,48000)}
  if(now>nS){split();nS=now+R(35000,90000)}
  if(now>nF){flip();nF=now+R(50000,120000)}
  var still=now-lastMove;
  if(!eyesUp&&still>16000&&now>eyesCool&&H.ok&&H.ok())showEyes();
  if(still>45000&&!idleOn){idleOn=true;idle.textContent=TM("Вы ещё здесь?","Are you still there?");idle.classList.add("on");root.classList.add("ps-close");setTimeout(function(){idle.classList.remove("on")},3200)}
  if(still<3000&&idleOn){idleOn=false;root.classList.remove("ps-close")}},1000);
 H.psy={close:closeness,split:split,flip:flip,whisper:whisper,eyes:showEyes,event:function(){event(Date.now())}};
})();

/* ===== v107: heading levels without skips (a11y) ===== */
(function(){
 function fix(){var hs=[].slice.call(document.querySelectorAll("h1,h2,h3,h4,h5,h6")),prev=0;
  hs.forEach(function(h){var lv=+h.tagName[1];if(h.hasAttribute("aria-level"))lv=+h.getAttribute("aria-level");
   if(prev&&lv-prev>1){h.setAttribute("aria-level",String(prev+1));lv=prev+1}prev=lv})}
 var _sl=window.setLang;if(_sl)window.setLang=function(){var r=_sl.apply(this,arguments);setTimeout(fix,50);return r};
 setTimeout(fix,900);setTimeout(fix,3000);
})();

/* ===== v108: short Home tab ===== */
(function(){
 var H=window.HA||{};
 var GRID=[["spot","特","Франшизы","Franchises"],["reviews","怨","Рецензии","Reviews"],["catalog","録","Каталог","Catalogue"],["manga","漫","Манга и аниме","Manga & anime"],["articles","記","Статьи","Features"],["wiki","典","Энциклопедия","Encyclopedia"],["lists","選","Подборки","Lists"],["start","始","Новичкам","Start here"],["dirs","監","Режиссёры","Directors"],["library","蔵","Библиотека","Library"],["play","呪","Игры","Games"],["quiz","問","Тест","Quiz"],["mylist","印","Моё","My list"],["about","序","О нас","About"]];
 function L(a,b){return LANG==="ru"?a:b}
 function allTiles(){var have={},out=[],ab=GRID[GRID.length-1];GRID.forEach(function(g){have[g[0]]=1});var ks={};document.querySelectorAll("section[data-kj]").forEach(function(x){if(!ks[x.dataset.cat])ks[x.dataset.cat]=x.dataset.kj});
  document.querySelectorAll("#filters button[data-f]").forEach(function(b){var id=b.dataset.f;if(id==="home"||id==="all"||have[id])return;var t=b.textContent.trim();if(id==="shelves")t=L("Полки","Shelves");out.push([id,ks[id]||"・",t,t])});
  return GRID.slice(0,GRID.length-1).concat(out,[["database/","映","База фильмов","Film database"],["posters/","絵","Стена постеров","Poster wall"]],[ab])}
 function mark(){["pod","trailer","whatsnew","releases"].forEach(function(id){var e=document.getElementById(id);if(e)e.dataset.home="1"});
  var n=document.getElementById("homenav");if(!n)return;
  var key=JSON.stringify([LANG,allTiles()]);
  if(n.dataset.renderKey===key)return;
  n.dataset.renderKey=key;
  n.innerHTML='<div class="hn-in"><h2 class="hn-h">'+L("Куда пойдём?","Where to?")+'</h2><p class="hn-p">'+L("Выберите раздел — всё остальное спрятано, чтобы не пугать сразу.","Pick a section — the rest stays hidden so it doesn't spook you all at once.")+'</p><div class="hn-g">'+allTiles().map(function(g){return '<button type="button" data-go="'+g[0]+'"'+(/\/$/.test(g[0])?' data-href="'+g[0]+'"':'')+'><i aria-hidden="true">'+g[1]+'</i><span>'+L(g[2],g[3])+'</span></button>'}).join("")+'</div><button type="button" class="hn-all" data-go="all">'+L("Показать всё сразу","Show everything")+'</button></div>'}
 var s=document.createElement("section");s.id="homenav";s.dataset.cat="home";s.dataset.home="1";
 document.getElementById("first-watch").after(s);
 s.addEventListener("click",function(e){var b=e.target.closest("button[data-go]");if(!b)return;if(b.dataset.href){location.href=b.dataset.href;return}var f=document.querySelector('#filters button[data-f="'+b.dataset.go+'"]');if(f)f.click()});
 function mk2(){mark();applySections()}mk2();setTimeout(mk2,600);setTimeout(mk2,2500);setTimeout(mk2,5000);
 var sl=window.setLang;if(sl)window.setLang=function(){var r=sl.apply(this,arguments);mk2();return r};
 applySections();
 document.querySelectorAll("#filters button").forEach(function(x){x.setAttribute("aria-pressed",String(x.dataset.f===secFilter))});
})();

/* ===== v108: watchlist page ===== */
(function(){
 function L(a,b){return LANG==="ru"?a:b}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
 var sec=document.createElement("section");sec.id="mylist";sec.dataset.cat="mylist";sec.dataset.kj="印";
 sec.innerHTML='<div class="sec-h"><h2><span id="ml-h"></span></h2><small id="ml-s"></small></div><div class="ml-bar" id="ml-bar"></div><div id="ml-list"></div>';
 var anchor=document.getElementById("catalog")||document.querySelector("section[data-cat]:last-of-type");anchor.parentNode.insertBefore(sec,anchor);
 var sort="status",flt="all";
 function rows(){var r=[];Object.keys(MY).forEach(function(id){var f=F[id];if(!f)return;r.push({id:id,st:MY[id],t:T(f.n),y:+f.y||0})});
  r=r.filter(function(x){return flt==="all"||x.st===flt});
  r.sort(function(a,b){if(sort==="title")return a.t.localeCompare(b.t);if(sort==="year")return b.y-a.y;if(sort==="year_asc")return a.y-b.y;return (a.st===b.st?a.t.localeCompare(b.t):(a.st==="want"?-1:1))});return r}
 function dl(name,mime,text){var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([text],{type:mime}));a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500)}
 function all(){var r=[];Object.keys(MY).forEach(function(id){var f=F[id];if(f)r.push({id:id,st:MY[id],ru:f.n.ru,en:f.n.en,y:f.y})});return r}
 function render(){
  document.getElementById("ml-h").textContent=L("Моё: хочу посмотреть","My list: want to watch");
  var a=all(),w=a.filter(function(x){return x.st==="want"}).length,s=a.length-w;
  document.getElementById("ml-s").textContent=L("хочу: ","want: ")+w+" · "+L("просмотрено: ","seen: ")+s;
  var opt=function(v,t,cur){return '<button type="button" data-k="'+v+'" aria-pressed="'+(cur===v)+'">'+esc(t)+'</button>'};
  document.getElementById("ml-bar").innerHTML='<div class="ml-g" data-g="f">'+opt("all",L("Все","All"),flt)+opt("want",L("Хочу","Want"),flt)+opt("seen",L("Видел","Seen"),flt)+'</div><div class="ml-g" data-g="s">'+opt("status",L("По статусу","By status"),sort)+opt("title",L("А–Я","A–Z"),sort)+opt("year",L("Новые","Newest"),sort)+opt("year_asc",L("Старые","Oldest"),sort)+'</div><div class="ml-g" data-g="x"><button type="button" data-x="txt">TXT</button><button type="button" data-x="csv">CSV</button><button type="button" data-x="json">JSON</button><button type="button" data-x="share">'+L("Поделиться","Share")+'</button><button type="button" data-x="imp">'+L("Импорт","Import")+'</button><input type="file" id="ml-file" accept=".json,application/json" hidden><span id="ml-share-st" role="status"></span></div>';
  var r=rows(),el=document.getElementById("ml-list");
  if(!a.length){el.innerHTML='<p class="ml-e">'+L("Пока пусто. В каталоге нажимайте на карточку фильма, чтобы отметить «Хочу» или «Видел».","Nothing here yet. Tap a film card in the catalogue to mark Want or Seen.")+'</p><button type="button" class="btn o" data-go="catalog">'+L("Открыть каталог","Open catalogue")+'</button>';return}
  el.innerHTML='<ul class="ml-ul">'+r.map(function(x){return '<li><span class="ml-st '+x.st+'">'+(x.st==="want"?L("хочу","want"):L("видел","seen"))+'</span><b>'+esc(x.t)+'</b><i>'+(x.y||"")+'</i><button type="button" data-t="'+x.id+'" aria-label="'+L("Переключить","Toggle")+'">⇄</button><button type="button" data-d="'+x.id+'" aria-label="'+L("Убрать","Remove")+'">✕</button></li>'}).join("")+'</ul>'}
 sec.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;
  if(b.dataset.go){var f=document.querySelector('#filters button[data-f="catalog"]');if(f)f.click();return}
  var g=b.parentNode.dataset&&b.parentNode.dataset.g;
  if(g==="f"){flt=b.dataset.k;render();return}if(g==="s"){sort=b.dataset.k;render();return}
  if(b.dataset.t){MY[b.dataset.t]=MY[b.dataset.t]==="want"?"seen":"want";saveMy();render();return}
  if(b.dataset.d){delete MY[b.dataset.d];saveMy();render();return}
  var x=b.dataset.x;if(!x)return;var a=all();
  if(x==="txt")dl("horror-aesthetic-list.txt","text/plain;charset=utf-8",[L("Хочу посмотреть:","Want to watch:")].concat(a.filter(function(z){return z.st==="want"}).map(function(z){return "- "+(LANG==="ru"?z.ru:z.en)+" ("+z.y+")"}),["",L("Просмотрено:","Seen:")],a.filter(function(z){return z.st==="seen"}).map(function(z){return "- "+(LANG==="ru"?z.ru:z.en)+" ("+z.y+")"})).join("\n"));
  if(x==="csv")dl("horror-aesthetic-list.csv","text/csv;charset=utf-8","﻿id,status,title_ru,title_en,year\n"+a.map(function(z){return [z.id,z.st,z.ru,z.en,z.y].map(function(v){return '"'+String(v).replace(/"/g,'""')+'"'}).join(",")}).join("\n"));
  if(x==="json")dl("horror-aesthetic-list.json","application/json",JSON.stringify(MY,null,1));
  if(x==="imp")document.getElementById("ml-file").click();if(x==="share")HA.shareList()});
 sec.addEventListener("change",function(e){if(e.target.id!=="ml-file")return;var fl=e.target.files[0];if(!fl)return;var rd=new FileReader();rd.onload=function(){try{var o=JSON.parse(rd.result);Object.keys(o).forEach(function(k){if(F[k]&&(o[k]==="want"||o[k]==="seen"))MY[k]=o[k]});saveMy();render()}catch(err){}};rd.readAsText(fl)});
 document.addEventListener("click",function(e){if(e.target.closest("#filters,#homenav,#catg"))setTimeout(render,60)});
 document.addEventListener("ha-diary",render);
 var sl=window.setLang;if(sl)window.setLang=function(){var r=sl.apply(this,arguments);render();return r};
 render();applySections();
 document.querySelectorAll("#filters button").forEach(function(x){x.setAttribute("aria-pressed",String(x.dataset.f===secFilter))});
})();

/* ===== v108: short blurbs for new films ===== */
(function(){var B={"n2phantomopera25": ["Лон Чейни и маска, которую до сих пор помнят: немой хоррор, где самое страшное лицо открывается в одной сцене.", "Lon Chaney and a mask people still remember: a silent horror whose scariest face is revealed in a single scene."], "n2jekyll31": ["Версия Рубена Мамуляна: превращение снято почти без швов, а Хайд здесь животное, а не злодей из комикса.", "Rouben Mamoulian's version: the transformation is almost seamless and Hyde is an animal, not a comic villain."], "n2isleofdead45": ["Карантин на греческом острове и подозрение, что среди своих есть вампир. Тихий хоррор Вэла Льютона на нервах и сомнении.", "Quarantine on a Greek island and a suspicion that a vampire is among them. Val Lewton's quiet horror runs on doubt."], "n2cursefrank57": ["Первый цветной Франкенштейн студии Hammer: Питер Кушинг холодно жесток, а страшнее всего его научный азарт.", "Hammer's first colour Frankenstein: Peter Cushing is coldly cruel and the scariest thing is his scientific zeal."], "n2cursedemon57": ["Жак Турнёр держит демона в тени и пугает намёками. Учёный-скептик против проклятия, которое действует по часам.", "Jacques Tourneur keeps the demon in shadow and scares through suggestion. A sceptical scientist versus a curse on a clock."], "n2horrordracula58": ["Кристофер Ли в роли Дракулы и новый яркий стиль Hammer: быстрый, кровавый и очень британский вампирский хоррор.", "Christopher Lee as Dracula in Hammer's vivid new style: a fast, bloody, very British vampire horror."], "n2fly58": ["Учёный меняется местами с мухой. Классика про научное безрассудство с кадром, который невозможно забыть.", "A scientist swaps heads with a fly. Classic sci-fi horror about scientific recklessness with an unforgettable shot."], "n2spiderbaby67": ["Семейка с наследственным безумием и опекун, который пытается удержать дом в порядке. Странная чёрная комедия на грани.", "A family with hereditary madness and a caretaker trying to keep the house in order. A strange black comedy on the edge."], "n2devilridesout68": ["Христофер Ли здесь на стороне добра: он спасает друга от сатанинского культа. Одна из самых серьёзных оккультных историй Hammer.", "Christopher Lee plays the hero here, saving a friend from a Satanic cult. One of Hammer's most serious occult tales."], "n2targets68": ["Борис Карлофф в роли стареющей звезды ужасов и обычный парень со снайперской винтовкой. Страх старого кино против страха нового.", "Boris Karloff as an ageing horror star and an ordinary man with a sniper rifle. Old-cinema fear versus the modern kind."], "n2jessica71": ["Женщина после лечения в тихом городке и подозрение, что её сводят с ума. Медленный хоррор, где реальность всё время ускользает.", "A woman recovering in a quiet town who suspects someone is driving her mad. A slow horror in which reality keeps slipping."], "n2duel71": ["Дебют Спилберга: водитель против безликого грузовика. Чистый триллер на погоне, где врага так и не видно.", "Spielberg's debut: a driver against a faceless truck. A pure chase thriller where the enemy is never seen."], "n2phibes71": ["Месть по мотивам десяти казней египетских, обставленная красиво и с чёрным юмором. Винсент Прайс почти не говорит и всё равно блистает.", "Revenge staged as the ten plagues of Egypt, beautiful and darkly funny. Vincent Price barely speaks and still shines."], "n2sisters72": ["Ранний Брайан Де Пальма: убийство, которое видит соседка, и сиамские близнецы. Хичкок, пропущенный через сильную паранойю.", "Early Brian De Palma: a murder seen by a neighbour and conjoined twins. Hitchcock through heavy paranoia."], "n2theatreblood73": ["Актёр-шекспирианец мстит критикам, убивая их по пьесам. Чёрная комедия, где Прайс отыгрывает каждую смерть как роль.", "A Shakespearean actor takes revenge on critics by killing them through plays. Price performs each death as a role."], "n2phantomparadise74": ["Рок-опера Де Пальмы про композитора, продавшего душу, и призрака в маске. Странный, безумный культовый фильм.", "De Palma's rock opera about a composer who sold his soul and a masked phantom. A strange, wild cult film."], "n2itsalive74": ["Новорождённый ребёнок оказывается чудовищем. Грубоватый фильм о страхе родителей, с отличной музыкой Бернарда Херрманна.", "A newborn turns out to be a monster. A rough film about parental fear with fine music by Bernard Herrmann."], "n2psycho2_83": ["Норман Бейтс выходит на свободу и пытается жить нормально. Неожиданно уважительное продолжение с хорошей игрой Перкинса.", "Norman Bates is released and tries to live normally. A surprisingly respectful sequel with good work from Perkins."], "n2f13p3": ["Здесь Джейсон впервые надевает хоккейную маску. Остальное стандартный слэшер своего времени, снятый для 3D.", "Jason first puts on the hockey mask here. The rest is a standard slasher of its time, shot for 3D."], "n2nightmare2": ["Фредди вселяется в подростка. Фильм часто читают как квир-подтекст, и он действительно странный и неровный, но запоминающийся.", "Freddy possesses a teenager. Often read as having a queer subtext, it is odd and uneven but memorable."], "n2lifeforce85": ["Космические вампиры высасывают души в Лондоне. Тоби Хупер снял безумный, дорогой и совершенно безбашенный хоррор-фантастику.", "Space vampires drain souls in London. Tobe Hooper made a wild, expensive and utterly reckless sci-fi horror."], "n2aliens86": ["Джеймс Кэмерон превратил хоррор в боевик, и это работает: Рипли, матка и ощущение безвыходной ловушки.", "James Cameron turned horror into an action film and it works: Ripley, the queen and a sense of being trapped."], "n2hitcher86": ["Автостопщик, который хочет, чтобы его убили, и водитель, которого он втягивает. Мрачный дорожный триллер с Рутгером Хауэром.", "A hitchhiker who wants to be stopped and the driver he drags in. A bleak road thriller with Rutger Hauer."], "n2critters86": ["Маленькие зубастые инопланетяне нападают на ферму. Лёгкая, дурашливая и местами симпатичная пародия на «Гремлинов».", "Small toothy aliens attack a farm. A light, goofy and oddly charming answer to Gremlins."], "n2vamp86": ["Колледж, стрип-клуб и вампиры. Грейс Джонс в роли королевы ночи, остальное милая, яркая комедия ужасов.", "A college, a strip club and vampires. Grace Jones as queen of the night, the rest bright, silly horror comedy."], "n2aprilfool86": ["Весёлая вечеринка на острове превращается в убийства. Финал спорный, но хорошо запоминается.", "A fun island party turns into murders. The ending divides people but you will remember it."], "n2parents89": ["Пятидесятые, идеальные родители и мальчик, который подозревает, что именно они едят на ужин. Тёмная сатира на семью.", "The fifties, perfect parents and a boy who suspects what exactly is for dinner. A dark satire on the family."], "n2church89": ["Церковь, построенная на могиле, и древнее зло под ней. Итальянский хоррор с ярким визуальным стилем и религиозной мрачностью.", "A church built over a grave and an old evil beneath it. Italian horror with striking visuals and religious gloom."], "n2tetsuo2": ["Цуками Синъя снова ломает человека и металл. Шумный, быстрый и физиологический киберпанк-кошмар.", "Shinya Tsukamoto again breaks man and metal. A loud, fast, bodily cyberpunk nightmare."], "n2interview94": ["Вампир рассказывает журналисту свою жизнь. Роскошно снятая мелодрама, где Том Круз и Брэд Питт играют бессмертных.", "A vampire tells a reporter his life. A lavishly shot melodrama with Tom Cruise and Brad Pitt as immortals."], "n2se7en95": ["Дождь, грязь и семь смертных грехов. Финч снял хоррор-триллер, где последняя сцена бьёт сильнее любого монстра.", "Rain, grime and the seven deadly sins. Fincher's horror-thriller has a last scene that hits harder than any monster."], "n2species95": ["Инопланетная женщина ищет партнёра для размножения. Крепкий научно-фантастический ужас с дизайном Х. Р. Гигера.", "An alien woman looks for a mate. Solid sci-fi horror with creature design by H. R. Giger."], "n2craft96": ["Четыре девочки в католической школе и настоящая магия. Взрослая история про власть и то, что она делает с людьми.", "Four girls at a Catholic school and real magic. A teen tale about power and what it does to people."], "n2dusk96": ["Криминальный триллер внезапно превращается в вампирский хоррор. Родригес и Тарантино наслаждаются сменой жанра.", "A crime thriller abruptly turns into vampire horror. Rodriguez and Tarantino relish the genre switch."], "n2frighteners96": ["Майкл Дж. Фокс общается с призраками и мошенничает. Питер Джексон смешал комедию и настоящий ужас.", "Michael J. Fox talks to ghosts and cons people with it. Peter Jackson mixes comedy with real dread."], "n2charisma99": ["Курои Киёси: полицейский приходит в лес и находит странное дерево. Загадочный, суровый, почти притча о выживании.", "Kiyoshi Kurosawa: a policeman reaches a forest and finds a strange tree. Cryptic, severe, almost a parable about survival."], "n2hohill99": ["Деньги за ночь в проклятом доме. Громкий, весёлый и местами мерзкий ремейк в духе старых аттракционов.", "Money for a night in a cursed house. A loud, fun and sometimes nasty remake in the spirit of old fairground rides."], "n2haunting99": ["Ремейк «Призрака дома на холме» со спецэффектами вместо намёков. Знатоки оригинала разочарованы, но декорации хороши.", "A remake of The Haunting with effects instead of suggestion. Fans of the original were let down, but the sets are good."], "n2jeepers01": ["Двое подростков находят пещеру, полную тел, и Существо охотится дальше. Начало отличное, а потом фильм становится монстр-муви.", "Two teens find a cellar full of bodies and the Creeper keeps hunting. A great start, then it turns into a monster movie."], "n2signs02": ["Круги на полях и ферма, ожидающая пришельцев. Шьямалан делает ставку на ожидание и кадры из теленовостей.", "Crop circles and a farm waiting for aliens. Shyamalan relies on waiting and glimpses seen on TV news."], "n2mothman02": ["Журналист едет в город, где видели «Мотылька». Не про монстра, а про предчувствие и то, как оно разъедает человека.", "A journalist goes to a town where Mothman was seen. Not about the creature but about premonition and how it eats at a person."], "n2fvj03": ["Фредди против Джейсона, и фильм не притворяется ничем другим. Много крови, шуток и чистое слэшерное фанатство.", "Freddy against Jason and the film pretends to be nothing else. Lots of blood, jokes and pure slasher fandom."], "n2openwater03": ["Пара оказывается в океане и остаётся одна. Минималистичный фильм о том, как страх и отчаяние ломают людей.", "A couple is stranded at sea and left alone. A minimalist film about how fear and despair break people."], "n2identity03": ["Десять людей в мотеле во время дождя, и кто-то их убивает. Детективный хоррор с поворотом, который меняет весь фильм.", "Ten people in a motel in the rain with a killer among them. A whodunit horror with a twist that changes everything."], "n2machinist04": ["Кристиан Бэйл истощён до костей, не спит год и видит то, чего нет. Мрачный психологический триллер о вине.", "Christian Bale, wasted to the bone, hasn't slept in a year and sees what isn't there. A grim psychological thriller about guilt."], "n2strangecircus05": ["Сион Соно: девочка, шкаф и семья, которая не то, чем кажется. Очень тяжёлый, красиво сделанный и трудный для просмотра фильм.", "Sion Sono: a girl, a wardrobe and a family that isn't what it seems. Very heavy, beautifully made and hard to watch."], "n2landdead05": ["Ромеро про зомби, которые начинают думать, и город богачей за стеной. Политическая сатира в рамках мёртвого жанра.", "Romero's zombies begin to think and a walled city of the rich. Political satire inside a dead genre."], "n2epitaph07": ["Корейский хоррор о старой больнице, рассказанный как три новеллы. Красивые кадры и ощущение прошлого, которое не отпускает.", "A Korean horror set in an old hospital, told as three tales. Beautiful frames and a past that won't let go."], "n2diarydead07": ["Ромеро снова про зомби, но через камеры и интернет. Идея любопытная, исполнение местами неровное.", "Romero again with zombies, now through cameras and the internet. An interesting idea, uneven in execution."], "n2days30_07": ["Аляска, полярная ночь и вампиры без сантиментов. Грубо, жестоко и страшно в первую очередь от безысходности.", "Alaska, polar night and vampires without sentiment. Brutal and scary mostly from sheer hopelessness."], "n2poughkeepsie07": ["Псевдодокументальный хоррор о серийном убийце, который неожиданно хорошо играет в реальность. Тяжёлое и неприятное кино.", "A mockumentary horror about a serial killer that plays unexpectedly well as reality. Heavy, unpleasant viewing."], "n2cloverfield08": ["Нью-Йорк, вечеринка и монстр, снятые камерой участника. Паника здесь сделана очень убедительно.", "New York, a party and a monster, shot on a participant's camera. The panic is made very convincing."], "n2quarantine08": ["Американский ремейк «[REC]»: пожарные заперты в доме с заражёнными. Близок к оригиналу, но потерял часть напряжения.", "The American remake of [REC]: firefighters sealed in a building with the infected. Close to the original but less tense."], "n2sauna08": ["Финляндия 16 века, граница и вина, от которой не спрятаться. Мрачный, медленный фильм, который строится на атмосфере.", "Sixteenth-century Finland, a border and guilt you can't hide from. A bleak, slow film built on atmosphere."], "n2rareexports10": ["Финские ребята находят настоящего Санта-Клауса, и он оказывается жутким. Странная, смешная и неожиданно тёплая сказка.", "Finnish villagers dig up the real Santa and he is nasty. A strange, funny and oddly warm fairy tale."], "n2graveenc11": ["Телешоу ловит призраков в брошенной психбольнице и застревает. Найденная плёнка с хорошей работой над звуком.", "A TV crew hunts ghosts in an abandoned asylum and gets stuck. Found footage with strong sound work."], "n2womaninblack12": ["Дэниел Рэдклифф в туманном доме и женщина в чёрном. Классическая британская история с хорошо отмеренными скримерами.", "Daniel Radcliffe in a foggy house and a woman in black. A classic British ghost story with well-judged scares."], "n2sightseers12": ["Влюблённая пара едет на караване по Англии и убивает всех, кто их раздражает. Очень чёрный комедийный роуд-муви Бена Уитли.", "A couple tour England in a caravan and kill anyone who irritates them. Ben Wheatley's very black road comedy."], "n2fieldengland13": ["Гражданская война, поле и грибы. Чёрно-белый кошмар Бена Уитли, где слова и звук делают больше, чем сюжет.", "Civil war, a field and mushrooms. Ben Wheatley's black-and-white nightmare where words and sound do more than plot."], "n2undertheskin13": ["Скарлетт Йоханссон ищет мужчин на шотландских дорогах. Холодный, почти без диалогов фильм об инопланетном взгляде на людей.", "Scarlett Johansson picks up men on Scottish roads. A cold, near-silent film about an alien view of humans."], "n2onlylovers13": ["Двое старых вампиров в Детройте и Танжере. Не пугает, но очень красиво показывает усталость от вечности.", "Two ancient vampires in Detroit and Tangier. It doesn't scare, but it beautifully shows weariness with eternity."], "n2rigormortis13": ["Гонконгская дань классике про цзянши: заброшенный дом, призраки и странный полумир. Атмосферно и очень стильно.", "A Hong Kong tribute to jiangshi films: a derelict block, ghosts and a strange half-world. Atmospheric and very stylish."], "n2purge13": ["Одна ночь в году, когда всё разрешено, и семья, запершаяся в доме. Идея сильнее фильма, но она остаётся в голове.", "One night a year when everything is allowed and a family locked in their house. The idea is stronger than the film but it sticks."], "n2annabelle14": ["Кукла, секта и семья в беде. Спин-офф «Заклятия»: пугает не сюжетом, а удачно поставленными сценами.", "A doll, a cult and a family in trouble. A Conjuring spin-off that scares through well-staged scenes, not plot."], "n2unfriended14": ["Всё действие идёт на экране ноутбука, и тема травли подана жестоко. Формат работает и сегодня.", "The whole film plays out on a laptop screen and bullying is handled brutally. The format still works."], "n2creep14": ["Видеограф приезжает к странному заказчику. Минималистичная найденная плёнка, где неловкость пугает сильнее всего.", "A videographer visits a strange client. Minimal found footage where awkwardness is the scariest part."], "n2honeymoon14": ["Молодожёны на озере, и невеста меняется. Тихая история о том, как легко перестать узнавать любимого человека.", "Newlyweds by a lake and the bride starts to change. A quiet story about how easily you stop recognising someone you love."], "n2tagalong15": ["Тайваньский хоррор про красную девочку из городской легенды. Крепкий скримерами, с хорошим ощущением места.", "A Taiwanese horror about the girl in red from an urban legend. Strong on scares with a good sense of place."], "n2hellhousellc15": ["Бывший отель с клоунами и якобы документальная съёмка. Кино для любителей найденной плёнки и тёмных коридоров.", "A former hotel full of clowns and supposedly documentary footage. For fans of found footage and dark corridors."], "n2krampus15": ["Рождество, ссора в семье и Крампус. Мрачная комедия с хорошими кукольными эффектами и злым финалом.", "Christmas, a family quarrel and Krampus. Dark comedy with good practical effects and a vicious ending."], "n2evolution15": ["Остров, где живут только женщины и мальчики. Люсиль Хаджихалилович снимает странную, красивую и тревожную историю про тело.", "An island where only women and boys live. Lucile Hadžihalilović makes a strange, beautiful, uneasy story about the body."], "n2eyesmymother16": ["Чёрно-белый дебют Николаса Пеше: девушка на ферме и то, что случилось в детстве. Тихо, мрачно и тяжело.", "Nicolas Pesce's black-and-white debut: a girl on a farm and what happened in her childhood. Quiet, bleak and heavy."], "n2lovewitch16": ["Ведьма в цвете семидесятых ищет любовь. Роскошная, ироничная и очень странная история про желание.", "A witch in seventies colour looks for love. A gorgeous, ironic and very strange story about desire."], "n2undershadow16": ["Тегеран 1980-х, война и джинн в доме. Хоррор, в котором страх не только мистический, но и политический.", "Tehran in the 1980s, war and a djinn in the house. A horror where fear is political as well as supernatural."], "n2cloverlane16": ["Женщина просыпается в бункере, и хозяин говорит, что снаружи апокалипсис. Тесный триллер, где важнее всего Джон Гудмен.", "A woman wakes in a bunker and the owner says it's an apocalypse outside. A tight thriller carried by John Goodman."], "n2betterwatch16": ["Нянька, рождественский вечер и ребёнок. Фильм сначала выглядит как обычный слэшер, а потом резко меняется.", "A babysitter, Christmas Eve and a boy. It looks like a standard slasher, then sharply changes."], "n2wearetheflesh16": ["Мексиканский фильм про брата и сестру в разрушенном доме с человеком, который строит странную пещеру. Шокирующий и очень грубый.", "A Mexican film about a brother and sister in a ruined house with a man building a strange cave. Shocking and very raw."], "n2creepy16": ["Курои Киёси: бывший полицейский и странный сосед. Спокойный хоррор, где страшно именно от того, насколько всё обыденно.", "Kiyoshi Kurosawa: an ex-cop and an odd neighbour. A calm horror that scares precisely because it all looks so ordinary."], "n2tigers17": ["Дети, потерявшие родителей в мексиканской войне картелей, и призраки. Сказка с жестокостью и неожиданной нежностью.", "Children orphaned by Mexico's cartel war, and ghosts. A fairy tale with cruelty and unexpected tenderness."], "n2terrified17": ["Аргентинский хоррор: в одном районе происходят странности. Построен на сильных сценах, которые запоминаются.", "An Argentine horror in which one neighbourhood suffers strange events. Built on strong, memorable set pieces."], "n2veronica17": ["Испанская девочка играет в спиритический сеанс. Простая история, но подана очень убедительно, и мало кто досматривает без напряжения.", "A Spanish girl plays at a seance. A simple story told very convincingly, hard to watch without tension."], "n2satanslaves17": ["Индонезийский ремейк 1980 года: больная мать и семья в старом доме. Атмосферно, с отличным звуком и красивыми кадрами.", "The Indonesian remake of a 1980 film: a sick mother and a family in an old house. Atmospheric with great sound and lovely frames."], "n2superdark17": ["Подростки, нечаянное убийство и последствия. Хоррор о том, как вина и страх медленно меняют друзей.", "Teens, an accidental killing and its aftermath. A horror about how guilt and fear slowly change friends."], "n2mayhem17": ["Вирус заставляет людей терять самоконтроль в офисном здании. Быстрая, злая и смешная сатира на корпоративный мир.", "A virus strips people's self-control inside an office tower. A fast, nasty, funny satire of corporate life."], "n2tumbbad18": ["Индийская легенда о боге, которого нельзя трогать, и жадности. Необычная красота и мрачная мораль, редкий хоррор на таком уровне.", "An Indian legend of a god who mustn't be touched, and greed. Unusual beauty and a bleak moral, a rare horror at this level."], "n2stree18": ["Индийская комедия ужасов о призраке-женщине, которая нападает на мужчин. Смешная, быстрая и с неожиданным посылом.", "An Indian horror comedy about a woman's ghost who attacks men. Funny, fast and with an unexpected message."], "n2border18": ["Таможенница с нюхом на вину и странный мужчина. Скандинавская мрачная сказка про то, кто мы такие, и про мир троллей.", "A customs officer who smells guilt and a strange man. A bleak Nordic fairy tale about identity and trolls."], "n2infabric18": ["Проклятое красное платье переходит от одной женщины к другой. Яркий, странный и чёрный по юмору фильм Питера Стриклэнда.", "A cursed red dress passes from woman to woman. Peter Strickland's vivid, strange and darkly funny film."], "n2possum18": ["Кукловод, возвращающийся в родной дом, и чёрная сумка с пауком. Мрачный британский фильм, который держит на страхе и стыде.", "A puppeteer returning to his childhood home and a black bag with a spider. A grim British film running on fear and shame."], "n2petsem19": ["Новая экранизация Кинга: кладбище, которое возвращает мёртвых. Тяжёлая тема, сильные первые сцены и слабее вторая половина.", "A new King adaptation: a burial ground that brings back the dead. Heavy themes, strong early scenes, weaker second half."], "n2ma19": ["Одинокая женщина заманивает подростков в свой подвал. Октавия Спенсер играет с удовольствием, остальное простая и тёмная история.", "A lonely woman lures teenagers to her basement. Octavia Spencer plays it with relish, the rest is simple and dark."], "n2crawl19": ["Дочь едет спасать отца в затопленном доме, а в подвале крокодилы. Прямой и очень чистый фильм-катастрофа на 90 минут.", "A daughter goes to rescue her father in a flooded house full of alligators. A direct, clean 90-minute disaster horror."], "n2lodge19": ["Мачеха и двое детей в заснеженном доме. Холодный, суровый и пугающий фильм, где вера становится оружием.", "A stepmother and two children in a snowed-in house. A cold, severe and frightening film where faith becomes a weapon."], "n2impetigore19": ["Индонезийская деревня и проклятая кукла. Джоко Анвар снимает яркий, сложный и сильный фольклорный фильм.", "An Indonesian village and a cursed doll. Joko Anwar makes a vivid, layered and powerful folk horror."], "n2detention19": ["Тайвань 1960-х, комендантский час и школа с призраками. Игра по мотивам, но по сути политическая история о страхе.", "Taiwan in the 1960s, martial law and a haunted school. Based on a game, but in essence a political story about fear."], "n2holeground19": ["Ирландская мать подозревает, что её сын подменён. Тихий, тревожный триллер, в котором нет уверенности в происходящем.", "An Irish mother suspects her son has been replaced. A quiet, uneasy thriller where nothing is certain."], "n2littlemonsters19": ["Зомби в детском походе, и воспитательница держится как героиня. Весёлая комедия ужасов с Лупитой Нионго.", "Zombies on a kids' field trip with a teacher turned heroine. A cheerful horror comedy with Lupita Nyong'o."], "n2darkwicked20": ["Ферма, умирающий отец и что-то в доме. Один из самых мрачных современных хорроров о смерти и вине.", "A farm, a dying father and something in the house. One of the bleakest recent horrors about death and guilt."], "n2hishouse20": ["Беженцы из Южного Судана в английском доме с призраками. Страшная история о травме, которая идёт следом.", "Refugees from South Sudan in an English house with ghosts. A frightening story of trauma that follows you."], "n2sputnik20": ["Советский космонавт возвращается с существом внутри. Российский фильм с хорошим монстром и мрачным ощущением эпохи.", "A Soviet cosmonaut returns with a creature inside. A Russian film with a good monster and a grim sense of the era."], "n2gretel20": ["Сказка о Гензеле и Гретель в стиле арт-хаус. Красивые кадры и ведьма, но темп и сюжет медленные.", "Hansel and Gretel told as art-house. Beautiful frames and a witch, but slow pacing and thin story."], "n2emptyman20": ["Подростки, мост и существо, которое заставляет думать о нём. Длинный и странный фильм с очень сильным вступлением.", "Teenagers, a bridge and an entity that makes you think of it. Long and odd with a very strong opening."], "n2closet20": ["Отец с дочерью переезжают в новый дом, и в шкафу в её комнате что-то живёт. Корейский хоррор с хорошим ритмом.", "A father and daughter move into a new home and something lives in her closet. A Korean horror with good rhythm."], "n2antlers21": ["Учитель замечает странный интерес мальчика к зверям. Фольклор индейцев и социальный подтекст, снятые мрачно и тихо.", "A teacher notices a boy's odd obsession with animals. Native folklore and social subtext shot grimly and quietly."], "n2medium21": ["Тайский шаман, дочь и одержимость. Найденная плёнка с долгим нарастанием, а затем почти шоковым финалом.", "A Thai shaman, a daughter and possession. Found footage with a long build and a near-shocking finale."], "n2innocents21": ["Норвежские дети с необычными способностями. Холодный, очень тихий и тревожный фильм без сантиментов о детской жестокости.", "Norwegian children with unusual abilities. A cold, hushed and uneasy film without sentiment about childhood cruelty."], "n2werewolveswithin21": ["Игра Ubisoft превратилась в деревенский детектив с оборотнем. Лёгкая, смешная и вполне весёлая комедия ужасов.", "A Ubisoft game turned into a village whodunit with a werewolf. A light, funny horror comedy."], "n2hatching22": ["Финская девочка выращивает яйцо, из которого вылупляется существо. Красивая, жуткая история о матери и дочери.", "A Finnish girl raises an egg and a creature hatches. A beautiful, creepy story about mother and daughter."], "n2watcher22": ["Женщина в Бухаресте замечает мужчину в окне напротив. Медленная паранойя, снятая очень спокойно и без ходов.", "A woman in Bucharest notices a man in the window opposite. Slow paranoia filmed calmly and without tricks."], "n2resurrection22": ["Рэбекка Холл и человек из её прошлого. Психологический триллер с монологом, который остаётся с вами надолго.", "Rebecca Hall and a man from her past. A psychological thriller with a monologue that stays with you."], "n2prey22": ["Хищник в Америке XVIII века, в мире команчей. Простая и очень хорошая приключенческая охота.", "The Predator in eighteenth-century America among the Comanche. A simple, very good hunting adventure."], "n2beau23": ["Ари Астер на три часа: тревожный человек едет к матери. Странная, смешная и тяжёлая смесь паники и семейных травм.", "Ari Aster for three hours: an anxious man goes to see his mother. A strange, funny, heavy mix of panic and family trauma."], "n2fnaf23": ["Ночной сторож в пиццерии с аниматрониками. Фильм для поклонников игры, спокойный по страху, но богатый на детали.", "A night guard in a pizzeria with animatronics. A film for game fans: mild on scares but rich in detail."], "n2nooneave23": ["Женщина одна дома и пришельцы без единого слова диалога. Очень хорошая идея и выразительная игра Кэйтлин Дивер.", "A woman alone at home and aliens, with no spoken dialogue. A great idea and expressive acting by Kaitlyn Dever."], "n2boogeyman23": ["По рассказу Стивена Кинга: после смерти матери в доме появляется Бугимен. Страшно за счёт темноты, хотя сюжет предсказуем.", "From a Stephen King story: after a mother's death, the Boogeyman appears in the house. Scary through darkness, though predictable."], "n2exhuma24": ["Корейский фильм о шаманах и проклятой могиле. Сначала триллер, потом уже что-то совсем другое и более мрачное.", "A Korean film about shamans and a cursed grave. A thriller at first, then something quite different and darker."]};Object.keys(B).forEach(function(id){if(F[id])F[id].bl=a(B[id][0],B[id][1])})})();

/* ===== v108: long reads ===== */
(function(){
 var A=[
 {id:"r-nomon",k:["Лонгрид · подборка","Long read · list"],t:["Психологический хоррор: 10 фильмов, где нет монстра","Psychological horror: 10 films with no monster"],
  dek:["Когда страшно не от существа, а от собственной головы: десять фильмов, которые держат на тревоге и сомнении.","When the fear comes not from a creature but from your own head: ten films that run on dread and doubt."],
  ru:'<p>В психологическом хорроре нечего показать зрителю в качестве угрозы. Монстр, если он есть, живёт в сознании героя, в браке, в семье или в доме, который слишком хорошо запоминает людей. Такие фильмы обычно медленнее, тише и неприятнее, чем слэшеры, потому что после титров не к кому обратиться: ни убийцу, ни призрака не поймали.</p><h4>Десять фильмов</h4><ol><li><b>«Невинные» (1961).</b> Гувернантка уверена, что дети одержимы духами. Фильм никогда не решает, правда ли это или она сходит с ума.</li><li><b>«Отвращение» (1965).</b> Поланский запирает героиню в квартире, и стены начинают двигаться. Одиночество, снятое как болезнь.</li><li><b>«Ребёнок Розмари» (1968).</b> Страх беременной женщины, которой никто не верит. Главный ужас в вежливых соседях.</li><li><b>«Сияние» (1980).</b> Кубрик превращает отель в лабиринт, где семья распадается на глазах. Призраки здесь могут быть просто отговоркой.</li><li><b>«Лестница Иакова» (1990).</b> Ветеран видит демонов в метро и не может понять, что реально. Одна из лучших историй о потере опоры.</li><li><b>«Лечение» (1997).</b> Киёси Куросава: убийцы разные, метод один, и это пугает именно отсутствием объяснения.</li><li><b>«Идеальная синева» (1997).</b> Поп-певица теряет границу между собой и своим образом. Сатоси Кон делает из этого настоящую пытку.</li><li><b>«Сессия 9» (2001).</b> Заброшенная психбольница, бригада по удалению асбеста и записи сеансов терапии. Страшно слушать.</li><li><b>«Машинист» (2004).</b> Рабочий, который не спит год, видит то, чего нет. Вина оказывается главным персонажем.</li><li><b>«Воскрешение» (2022).</b> Одна сцена-монолог делает больше любого монстра, и дальше фильм идёт к тому, во что вы уже боитесь поверить.</li></ol><blockquote>Лучший психологический хоррор оставляет вопрос открытым и заставляет вас самих ответить.</blockquote><p>Смотрите в тишине и в одиночестве, если решились. Но лучше начните с «Невинных»: они покажут, как работает приём.</p>',
  en:'<p>Psychological horror has no threat you can point at. The monster, if there is one, lives in the hero\'s mind, in a marriage, in a family or in a house that remembers people too well. These films are usually slower, quieter and more unpleasant than slashers, because when the credits roll there is nobody to turn on: no killer or ghost has been caught.</p><h4>Ten films</h4><ol><li><b>The Innocents (1961).</b> A governess is sure the children are possessed. The film never decides whether it is true or she is losing her mind.</li><li><b>Repulsion (1965).</b> Polanski locks his heroine in a flat and the walls begin to move. Loneliness filmed as an illness.</li><li><b>Rosemary\'s Baby (1968).</b> The fear of a pregnant woman nobody believes. The real horror is polite neighbours.</li><li><b>The Shining (1980).</b> Kubrick turns a hotel into a maze where a family comes apart in front of us. The ghosts may just be an excuse.</li><li><b>Jacob\'s Ladder (1990).</b> A veteran sees demons in the subway and cannot tell what is real. One of the best stories about losing your footing.</li><li><b>Cure (1997).</b> Kiyoshi Kurosawa: the killers differ, the method is the same, and it frightens precisely because it is unexplained.</li><li><b>Perfect Blue (1997).</b> A pop singer loses the line between herself and her image. Satoshi Kon turns it into real torment.</li><li><b>Session 9 (2001).</b> An abandoned asylum, an asbestos crew and recorded therapy sessions. The scariest part is listening.</li><li><b>The Machinist (2004).</b> A worker who hasn\'t slept in a year sees what isn\'t there. Guilt turns out to be the main character.</li><li><b>Resurrection (2022).</b> One monologue scene does more than any monster, then the film moves toward what you are afraid to believe.</li></ol><blockquote>The best psychological horror leaves the question open and makes you answer it yourself.</blockquote><p>Watch alone and in silence if you dare. But start with The Innocents: it shows how the trick works.</p>'},
 {id:"r-jh",k:["Лонгрид · история жанра","Long read · genre history"],t:["Как устроен J-хоррор","How J-horror works"],
  dek:["Мокрые волосы, видеокассета и призрак без цели: из чего сделан японский ужас и почему он так странно действует.","Wet hair, a videotape and a ghost with no goal: what Japanese horror is made of and why it works so strangely."],
  ru:'<p>J-хоррор не сводится к девочке из колодца. Это набор приёмов, выросший из очень старой традиции и из страхов конца 1990-х, когда в японские дома пришли видеомагнитофоны, мобильные телефоны и интернет.</p><h4>Корни: кайдан и онрё</h4><p>Японские истории о привидениях (кайдан) известны веками, а на сцене театра ногаку и кабуки они дали типаж мстительного духа, онрё. Классический пример: «Ёцуя кайдан», история преданной жены, которая возвращается мстить. Белое одеяние, длинные чёрные волосы и бледное лицо взяты из этого театра.</p><h4>Новая волна</h4><p>В 1998 году вышел «Звонок» Хидэо Накаты по роману Кодзи Судзуки (1991). Проклятие передаётся через видеокассету, а не через место, и это сразу сделало страх бытовым: достаточно один раз нажать «пуск». В 2000 году Такаси Симидзу снял для видео «Ju-On», а затем полнометражную версию «Проклятие» (2002): дом, где погиб человек, заражает всех, кто в нём побывал. Киёси Куросава в «Пульсе» (2001) показал, что призраки приходят через интернет.</p><blockquote>Здесь нельзя победить, можно только отсрочить.</blockquote><h4>Чем отличается</h4><ul><li><b>Проклятие вместо злодея.</b> Нет убийцы, которого можно остановить: есть правило, которое работает само.</li><li><b>Звук и пауза.</b> Скрип, шорох, тишина перед кадром значат больше, чем сам кадр.</li><li><b>Бытовое место.</b> Квартира, школа, колодец во дворе, телефонная трубка.</li><li><b>Отсутствие катарсиса.</b> Финал обычно не приносит облегчения.</li></ul><p>Американские ремейки «Звонок» (2002) и «Проклятие» (2004) ввели этот стиль в мейнстрим и вызвали волну подражаний по всему миру. Эстетика осталась: плёнка, тишина, медленное приближение.</p>',
  en:'<p>J-horror is more than the girl in the well. It is a set of techniques that grew out of a very old tradition and the fears of the late 1990s, when VCRs, mobile phones and the internet entered Japanese homes.</p><h4>Roots: kaidan and onryō</h4><p>Japanese ghost stories (kaidan) have been told for centuries, and on the Noh and kabuki stage they produced the type of the vengeful spirit, the onryō. A classic example is Yotsuya Kaidan, the story of a betrayed wife who returns for revenge. The white robe, long black hair and pale face come from that theatre.</p><h4>The new wave</h4><p>In 1998 came Hideo Nakata\'s Ringu, based on Koji Suzuki\'s novel (1991). The curse travels through a videotape, not a place, which made fear domestic at once: you only had to press play. In 2000 Takashi Shimizu made Ju-On for video, then the theatrical Ju-On: The Grudge (2002), in which a house where someone died infects everyone who enters. Kiyoshi Kurosawa\'s Pulse (2001) showed ghosts arriving through the internet.</p><blockquote>You cannot win here, only delay.</blockquote><h4>What makes it different</h4><ul><li><b>A curse, not a villain.</b> There is no killer to stop, only a rule that runs by itself.</li><li><b>Sound and pause.</b> A creak, a rustle, the silence before a shot matter more than the shot.</li><li><b>Everyday places.</b> A flat, a school, a well in the yard, a telephone receiver.</li><li><b>No catharsis.</b> The ending usually brings no relief.</li></ul><p>The American remakes The Ring (2002) and The Grudge (2004) brought the style into the mainstream and triggered a wave of imitations worldwide. The aesthetic stayed: tape, silence, slow approach.</p>'},
 {id:"r-kairo",k:["Лонгрид · фильм", "Long read · film"],t:["«Пульс» (Kairo, 2001): призраки, которым некуда деваться", "Kairo (Pulse, 2001): ghosts with nowhere left to go"],dek:["Куросава снял фильм об одиночестве, где призраки приходят через интернет, а мир пустеет без криков и взрывов.", "Kurosawa made a film about loneliness where ghosts arrive through the internet and the world empties without screams or explosions."],ru:"<p>«Пульс» Киёси Куросавы вышел в 2001 году, когда интернет в Японии был ещё новинкой: модемы, тяжёлые мониторы, чаты на старых компьютерах. Фильм получил приз ФИПРЕССИ на Каннском фестивале 2001 года и до сих пор считается одним из главных хорроров о цифровом одиночестве.<\/p><h4>О чём фильм<\/h4><p>В Токио один за другим пропадают люди. Они не умирают в привычном смысле: после них на стенах остаются тёмные пятна, похожие на тени. Герои находят в сети странный сайт, где одинокие люди сидят перед экранами в пустых комнатах, и замечают комнаты, запечатанные красной лентой. Объяснение дают почти вскользь: мир мёртвых переполнился, и призраки выходят в мир живых.<\/p><h4>Чем он страшен<\/h4><ul><li><b>Тишиной.<\/b> Куросава почти не пугает резкими звуками. Он ставит фигуру на дальнем плане и даёт ей медленно приближаться.<\/li><li><b>Пустотой.<\/b> Страшнее призраков оказывается то, что люди сами отдаляются друг от друга. Город к финалу почти пуст.<\/li><li><b>Мыслью о смерти.<\/b> Фильм предлагает идею, от которой трудно отделаться: смерть не освобождает от одиночества, а закрепляет его навсегда.<\/li><\/ul><p>Цвет у фильма серо-зелёный, обесцвеченный, как у старого монитора. Сегодня он выглядит как предвестник эпохи, где мы живём рядом и всё равно поодиночке. В 2006 году вышел американский ремейк «Пульс», но оригинал тише, медленнее и тревожнее.<\/p><h4>Как смотреть<\/h4><p>Ночью, без перемотки и без телефона в руке. Если фильм зацепил, посмотрите «Лечение» (1997) того же режиссёра: там страх тоже растёт из обыденности.<\/p>",en:"<p>Kiyoshi Kurosawa made Kairo in 2001, when the internet was still new in Japan: dial-up modems, heavy monitors, chat on old computers. It won a FIPRESCI prize at the 2001 Cannes Film Festival and is still counted among the key horror films about digital loneliness.<\/p><h4>What it is about<\/h4><p>People in Tokyo vanish one by one. They do not die in the usual sense: dark stains like shadows are left on the walls. The characters find a strange website where lonely people sit in front of screens in empty rooms, and they notice rooms sealed with red tape. The explanation is almost thrown away: the world of the dead has filled up, and ghosts are spilling into the world of the living.<\/p><h4>Why it works<\/h4><ul><li><b>Silence.<\/b> Kurosawa hardly uses loud shocks. He puts a figure far back in the frame and lets it approach slowly.<\/li><li><b>Emptiness.<\/b> What is worse than the ghosts is that people drift away from each other. By the end the city is almost empty.<\/li><li><b>The idea of death.<\/b> The film offers a thought that is hard to shake off: death does not release you from loneliness, it makes it permanent.<\/li><\/ul><p>The palette is grey-green and washed out, like an old monitor. Today it reads like a forecast of an era where we live side by side and still alone. An American remake, Pulse, came out in 2006, but the original is quieter, slower and more uneasy.<\/p><h4>How to watch<\/h4><p>At night, without skipping and without a phone in your hand. If it hooks you, try Cure (1997) by the same director, where the fear also grows out of ordinary life.<\/p>"},
 {id:"r-tetsuo",k:["Лонгрид · фильм", "Long read · film"],t:["«Тэцуо: железный человек» (1989): плоть, металл и шум", "Tetsuo: The Iron Man (1989): flesh, metal and noise"],dek:["Чёрно-белый кошмар Синъи Цукамото, снятый почти без денег, и до сих пор самый яростный фильм японского киберпанка.", "Shinya Tsukamoto's black-and-white nightmare, made almost without money, and still the fiercest film of Japanese cyberpunk."],ru:"<p>«Тэцуо» (鉄男) снял Синъя Цукамото в 1989 году на 16-мм плёнку, чёрно-белым и с минимальным бюджетом. Он ещё и сыграл в нём роль «металлического фетишиста». Фильм идёт около часа, но этот час похож на удар по голове.<\/p><h4>О чём фильм<\/h4><p>Служащий (его играет Томорово Тагути) сбивает человека на машине. Вскоре его собственное тело начинает прорастать железом: проволокой, трубками, шестернями. Дальше история превращается в поединок двух людей, которых город сплавляет с металлом.<\/p><h4>Что делает его особенным<\/h4><ul><li><b>Шум как музыка.<\/b> Индустриальная партитура Тю Исикавы звучит как цех, в котором никто не остановит станок.<\/li><li><b>Скорость.<\/b> Монтаж рваный, камера мечется, а покадровая анимация заставляет предметы двигаться, как живые.<\/li><li><b>Тело как машина.<\/b> Это кино о страхе перед городом, заводом и собственной уязвимостью. Его часто сравнивают с телесным хоррором Кроненберга, хотя у Цукамото всё грязнее и яростнее.<\/li><\/ul><p>Продолжения вышли позже: «Тэцуо 2: Молот тела» (1992) и «Тэцуо: Человек-пуля» (2009). Для ценителей фильм остался культовым, а эстетика ржавчины, плёночного зерна и красного на чёрном до сих пор вдохновляет художников.<\/p><h4>Предупреждение<\/h4><p>Это очень тяжёлое кино: резкое, телесное, шумное. Не стоит начинать с него знакомство с японским хоррором. Но если вам нужна эстетика, на которую ничто не похоже, начните здесь.<\/p>",en:"<p>Shinya Tsukamoto made Tetsuo (鉄男) in 1989 on 16 mm film, in black and white and on a tiny budget. He also plays the Metal Fetishist. The film runs about an hour, but that hour feels like a blow to the head.<\/p><h4>What it is about<\/h4><p>A salaryman (Tomorowo Taguchi) hits a man with his car. Soon his own body begins to sprout iron: wire, tubes, gears. The story turns into a duel between two men whom the city is fusing with metal.<\/p><h4>What makes it special<\/h4><ul><li><b>Noise as music.<\/b> Chu Ishikawa's industrial score sounds like a factory floor where nobody will stop the machine.<\/li><li><b>Speed.<\/b> The editing is ragged, the camera darts, and stop-motion makes objects move as if alive.<\/li><li><b>The body as a machine.<\/b> It is a film about fear of the city, the factory and your own vulnerability. It is often compared to Cronenberg's body horror, though Tsukamoto is dirtier and angrier.<\/li><\/ul><p>Sequels followed: Tetsuo II: Body Hammer (1992) and Tetsuo: The Bullet Man (2009). The film stayed a cult favourite, and its aesthetic of rust, film grain and red on black still inspires artists.<\/p><h4>A warning<\/h4><p>This is very heavy cinema: abrupt, bodily and loud. It is not the place to begin with Japanese horror. But if you want an aesthetic that resembles nothing else, start here.<\/p>"},
 {id:"r-toshi",k:["Лонгрид · культура", "Long read · culture"],t:["Городские легенды Японии: женщина со шрамом, Ханако и школьный туалет", "Japanese urban legends: the slit-mouthed woman, Hanako and the school toilet"],dek:["Страшные истории, которые рассказывают друг другу школьники: как они устроены и почему они стали основой J-Horror.", "Scary stories that schoolchildren tell each other: how they work and why they became the base of J-Horror."],ru:"<p>В Японии для таких историй есть слово «тоси дэнсэцу» (都市伝説), то есть городская легенда. Они живут во дворах, школах и на форумах. Их рассказывают так, как будто это случилось с чьим-то знакомым, а потом оказывается, что эту историю знает весь класс.<\/p><h4>Четыре героини<\/h4><ul><li><b>Кутисакэ-онна (口裂け女), женщина с разрезанным ртом.<\/b> Она появляется в маске и спрашивает: «Я красивая?». По разным версиям, спастись можно, если ответить уклончиво (например, «так себе»), сказать, что торопишься, или бросить ей конфету. В 1979 году о ней писали газеты и журналы, слухи прокатились по Японии, и младших школьников нередко провожали домой взрослые.<\/li><li><b>Ханако-сан.<\/b> Дух девочки в школьном туалете. По легенде, нужно постучать в третью кабинку на третьем этаже и спросить, здесь ли она.<\/li><li><b>Тэкэ-тэкэ.<\/b> Женщина без нижней половины тела, которая ползёт по рельсам. Названа по звуку, который она издаёт.<\/li><li><b>Хикико-сан.<\/b> Более поздняя, «интернетная» история о девочке, которую травили. Считается, что она распространялась на японских форумах.<\/li><\/ul><h4>Как устроены эти истории<\/h4><p>У них есть общий каркас. Страх привязан к месту, где ты бываешь каждый день: школа, дорога домой, туалет. У существа есть правило, которое нужно знать. И всегда есть шанс спастись, если знать, как ответить. Поэтому такие легенды работают как игра, а не как рассказ.<\/p><h4>Кино<\/h4><p>Из этих сюжетов вырос целый пласт J-Horror. Например, «Кутисакэ-онна» (2007) Кодзи Сираиси прямо пересказывает легенду. А общая эстетика «женщина с длинными волосами, которую не остановить» пришла из тех же дворовых страшилок.<\/p>",en:"<p>In Japan these stories have a name: toshi densetsu (都市伝説), urban legend. They live in schoolyards, classrooms and forums. They are told as if they happened to someone's friend, and then it turns out the whole class knows the story.<\/p><h4>Four figures<\/h4><ul><li><b>Kuchisake-onna (口裂け女), the slit-mouthed woman.<\/b> She appears wearing a mask and asks: \"Am I pretty?\". In different versions you can escape by answering evasively (calling her \"average\"), saying you are in a hurry, or throwing her candy. In 1979 newspapers and magazines wrote about her, rumours swept across Japan, and younger children were often walked home by adults.<\/li><li><b>Hanako-san.<\/b> The ghost of a girl in a school toilet. By the legend you knock on the third stall on the third floor and ask whether she is there.<\/li><li><b>Teke Teke.<\/b> A woman without a lower body who drags herself along the tracks. She is named after the sound she makes.<\/li><li><b>Hikiko-san.<\/b> A later, internet-era story about a bullied girl. It is said to have spread on Japanese forums.<\/li><\/ul><h4>How these stories work<\/h4><p>They share a frame. The fear is tied to a place you visit every day: school, the road home, the toilet. The creature has a rule you must know. And there is always a chance to survive if you know how to answer. That is why these legends work like a game rather than a story.<\/p><h4>On film<\/h4><p>A whole layer of J-Horror grew out of these plots. Kuchisake-onna (2007) by Koji Shiraishi, for example, retells the legend directly. And the general aesthetic of a long-haired woman who cannot be stopped came from the same playground tales.<\/p>"},
 {id:"r-onmyoji",k:["Лонгрид · культура", "Long read · culture"],t:["Онмёдзи: мастера печатей, духов и бумажных талисманов", "Onmyoji: masters of seals, spirits and paper talismans"],dek:["Кто такие онмёдзи, при чём тут Абэ-но Сэймэй и откуда в японском хорроре столько бумажек с иероглифами.", "Who the onmyoji were, what Abe no Seimei has to do with it, and why Japanese horror is full of paper slips with kanji."],ru:"<p>Онмёдо (陰陽道) пришло в Японию из Китая и опиралось на идею ян и инь, пять стихий и небесные знаки. При дворе периода Хэйан существовало ведомство Онмё-рё (陰陽寮), чиновники которого занимались календарём, астрономией и гаданием. Служащих такого рода называли онмёдзи (陰陽師).<\/p><h4>Абэ-но Сэймэй<\/h4><p>Самый известный онмёдзи, Абэ-но Сэймэй (921–1005), давно превратился из чиновника в героя легенд. Ему приписывают власть над сикигами (式神), духами-слугами, и защиту дворца от злых духов. Его знак, пятиконечная звезда в круге, до сих пор встречается на амулетах и в кино. Популярности Сэймэя в наше время сильно помогли романы Баку Юмэмакуры и фильм «Онмёдзи» (2001) Ёдзиро Такиты.<\/p><h4>Откуда эта эстетика в хорроре<\/h4><ul><li><b>Офуда (御札).<\/b> Бумажные талисманы с надписями. Иероглиф 封 означает «печать» и ставится на то, что нужно запереть.<\/li><li><b>Печати и верёвки.<\/b> Граница между миром людей и тем, что за ней, обозначается верёвкой и бумагой.<\/li><li><b>Сикигами.<\/b> Невидимые слуги: в кино это тени, куклы и птицы из бумаги.<\/li><\/ul><p>Поэтому на кадрах с призраками так часто мелькают бумажные таблички, красные ленты и тории. Это визуальный язык защиты и запрета: чем больше печатей на двери, тем страшнее то, что за ней.<\/p><h4>Как смотреть<\/h4><p>Начните с «Онмёдзи» (2001), а потом попробуйте найти те же символы в Kairo, где комнаты запечатаны красной лентой: у них общий источник.<\/p>",en:"<p>Onmyodo (陰陽道) came to Japan from China and rested on the ideas of yin and yang, the five elements and heavenly signs. At the court of the Heian period there was a bureau, the Onmyoryo (陰陽寮), whose officials handled the calendar, astronomy and divination. People of that office were called onmyoji (陰陽師).<\/p><h4>Abe no Seimei<\/h4><p>The most famous onmyoji, Abe no Seimei (921–1005), long ago turned from an official into a legend. He is credited with control over shikigami (式神), servant spirits, and with protecting the palace from evil. His mark, a five-pointed star in a circle, is still found on charms and in films. The novels of Baku Yumemakura and the 2001 film Onmyoji by Yojiro Takita did a lot for his modern popularity.<\/p><h4>Where this aesthetic in horror comes from<\/h4><ul><li><b>Ofuda (御札).<\/b> Paper talismans with writing. The kanji 封 means \"seal\" and is placed on whatever must be locked away.<\/li><li><b>Seals and ropes.<\/b> The border between the human world and what lies beyond is marked with rope and paper.<\/li><li><b>Shikigami.<\/b> Invisible servants: on screen they are shadows, dolls and paper birds.<\/li><\/ul><p>That is why frames with ghosts so often show paper tags, red ribbons and torii gates. It is a visual language of protection and prohibition: the more seals on a door, the worse the thing behind it.<\/p><h4>How to watch<\/h4><p>Start with Onmyoji (2001), and then try to find the same symbols in Kairo, where rooms are sealed with red tape: they share a source.<\/p>"}
 ];
 function L(a,b){return LANG==="ru"?a:b}
 var sec=document.createElement("section");sec.id="reads";sec.dataset.cat="articles";sec.dataset.kj="記";
 var anchor=document.getElementById("articles");anchor.parentNode.insertBefore(sec,anchor.nextSibling);
 function render(){var open={};sec.querySelectorAll("details").forEach(function(d){open[d.dataset.id]=d.open});
  sec.innerHTML='<div class="sec-h"><h2><span>'+L("Лонгриды","Long reads")+'</span></h2><small>'+L("для вечернего чтения","for evening reading")+'</small></div>'+A.map(function(x){var ru=LANG==="ru";return '<details class="lr" data-id="'+x.id+'"'+(open[x.id]?' open':'')+'><summary><span class="lr-k">'+(ru?x.k[0]:x.k[1])+'</span><h3>'+(ru?x.t[0]:x.t[1])+'</h3><p>'+(ru?x.dek[0]:x.dek[1])+'</p><span class="lr-m">'+L("Читать · около 3 минут","Read · about 3 min")+'</span></summary><div class="lr-b">'+(ru?x.ru:x.en)+'</div></details>'}).join("")}
 render();var sl=window.setLang;if(sl)window.setLang=function(){var r=sl.apply(this,arguments);render();return r};
 applySections();document.querySelectorAll("#filters button").forEach(function(x){x.setAttribute("aria-pressed",String(x.dataset.f===secFilter))});
})();

/* ===== v109: unified header tool buttons ===== */
(function(){
 var S='<svg class="hi" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">';
 var IC={
  sbtn:S+'<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/></svg>',
  flb:S+'<path d="M7 3h10l-1.5 6h-7z"/><path d="M8.5 9L10 21h4l1.5-12"/><path d="M12 12v3"/></svg>',
  tpb:S+'<rect x="3" y="6" width="18" height="12" rx="1.5"/><circle cx="8.5" cy="12" r="2"/><circle cx="15.5" cy="12" r="2"/><path d="M8 18l1.5-3h5L16 18"/></svg>',
  "pf-open":S+'<path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M7 13h6"/></svg>',
  tnb:S+'<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>'};
 function snd(on){return S+'<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/>'+(on?'<path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>':'<path d="M16 9.5l5 5M21 9.5l-5 5"/>')+'</svg>'}
 var HAIR='<svg class="hair" viewBox="0 0 100 26" preserveAspectRatio="none" aria-hidden="true"><path d="M2 0C0 8 5 14 3 25"/><path d="M5 0C8 7 2 15 6 22"/><path d="M8 0C6 6 10 12 7 18"/><path d="M92 0C95 9 90 15 93 25"/><path d="M95 0C93 6 98 14 95 21"/><path d="M98 0C100 8 96 13 99 19"/></svg>';window.__HAIR=HAIR;var KJ={sbtn:'探',snd:'音',flb:'灯',tpb:'呪',"pf-open":'怨',tnb:'怪'};
 var ids=["sbtn","snd","flb","tpb","pf-open","tnb"];
 function lbl(b){return b.textContent.replace(/^[^\p{L}\p{N}]+/u,"").trim()}
 function fix(b){var l=lbl(b),on=b.getAttribute("aria-pressed")==="true",key=l+"|"+on;if(b.dataset.k===key&&b.querySelector("svg.hi"))return;
  b.dataset.k=key;var sv=b.id==="snd"?snd(on):IC[b.id];b.innerHTML=sv+'<span>'+l.replace(/[<>&]/g,"")+'</span>'+HAIR;b.dataset.k=lbl(b)+"|"+on}
 var wrap=null;
 function setup(){var s=document.getElementById("snd");if(!s)return;
  if(!wrap){wrap=document.createElement("div");wrap.id="hdtools";s.parentNode.insertBefore(wrap,document.getElementById("sbtn")||s)}
  ids.forEach(function(id){var b=document.getElementById(id);if(!b)return;if(b.parentNode!==wrap)wrap.appendChild(b);b.classList.add("hb");b.dataset.kj=KJ[id]||"怨";
   if(!b._o){b._o=new MutationObserver(function(){b._o.disconnect();fix(b);b._o.observe(b,{childList:true,characterData:true,subtree:true,attributes:true,attributeFilter:["aria-pressed"]})});b._o.observe(b,{childList:true,characterData:true,subtree:true,attributes:true,attributeFilter:["aria-pressed"]})}
   fix(b)})}
 setup();setTimeout(setup,800);setTimeout(setup,2500);setTimeout(setup,5000);
})();

/* ===== v111: language switch moved to header; sections rail expandable ===== */
(function(){
 function L(a,b){return LANG==="ru"?a:b}
 var lang=document.querySelector(".lang"),rail=document.querySelector(".rail"),fl=document.getElementById("filters");
 if(!lang||!rail||!fl)return;
 var first=document.querySelector(".strip>span:first-child"),rec=first&&first.querySelector(".rec");
 if(first){lang.classList.add("lang-h");first.insertBefore(lang,document.getElementById("hdtools")||null);if(rec)first.insertBefore(lang,rec.nextSibling)}
 var x=document.createElement("button");x.type="button";x.id="fx";x.setAttribute("aria-expanded","false");rail.appendChild(x);
 function lab(){var o=rail.classList.contains("open");x.innerHTML='<svg class="ic" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="'+(o?'M6 6l12 12M18 6L6 18':'M4 6h16M4 12h16M4 18h16')+'"/></svg><span>'+(o?L("Свернуть","Close"):L("Все разделы","All sections"))+'</span>';x.setAttribute("aria-expanded",String(o))}
 x.addEventListener("click",function(){rail.classList.toggle("open");lab();if(rail.classList.contains("open")){var p=fl.querySelector('[aria-pressed="true"]');if(p)p.scrollIntoView({block:"nearest"})}});
 fl.addEventListener("click",function(e){if(e.target.closest("button")&&rail.classList.contains("open")){rail.classList.remove("open");lab()}});
 lab();var sl=window.setLang;if(sl)window.setLang=function(){var r=sl.apply(this,arguments);lab();return r};
 function fade(){var s=fl.scrollLeft,m=fl.scrollWidth-fl.clientWidth;rail.classList.toggle("fl-l",s>4);rail.classList.toggle("fl-r",s<m-4)}
 fl.addEventListener("scroll",fade,{passive:true});addEventListener("resize",fade);setTimeout(fade,300);setTimeout(fade,1500);
})();

/* ===== v112: J-Horror frames: svg filters + hair on search box ===== */
(function(){
 if(!document.getElementById("hr-defs")){var d=document.createElement("div");d.id="hr-defs";d.setAttribute("aria-hidden","true");d.style.cssText="position:absolute;width:0;height:0;overflow:hidden";
  d.innerHTML='<svg width="0" height="0"><defs>'+[1,2,3].map(function(i){return '<filter id="hr'+i+'" x="-10%" y="-30%" width="120%" height="160%"><feTurbulence type="fractalNoise" baseFrequency=".045 .11" numOctaves="2" seed="'+[3,11,27][i-1]+'"/><feDisplacementMap in="SourceGraphic" scale="3.4" xChannelSelector="R" yChannelSelector="G"/></filter>'}).join("")+'</defs></svg>';document.body.appendChild(d)}
 var bg=document.querySelector(".bigs");if(bg&&!bg.querySelector(".hair"))bg.insertAdjacentHTML("beforeend",window.__HAIR||"");
})();

/* ===== v114: compact genre ribbon, J-Horror frames for sections, share list ===== */
(function(){
 var H=window.HA||{};function L(a,b){return LANG==="ru"?a:b}
 /* 1. genre ribbon: seals */
 var KJ=["血","肉","刃","眼","呪","極","腸","衝","屑","搾"];
 function ribbon(){var t=document.getElementById("ticker");if(!t)return;[].forEach.call(t.children,function(s,i){if(KJ[i])s.dataset.kj=KJ[i]})}
 ribbon();setTimeout(ribbon,1200);
 /* 2. section headers get the seal of their section */
 function seals(){document.querySelectorAll("section[data-kj]").forEach(function(s){var h=s.querySelector(":scope>.sec-h");if(h&&!h.dataset.kj)h.dataset.kj=s.dataset.kj})}
 seals();setTimeout(seals,1500);setTimeout(seals,5000);
 /* 3. share list */
 function enc(){var a=[];Object.keys(MY).forEach(function(k){if(F[k]&&(MY[k]==="want"||MY[k]==="seen"))a.push(k+"."+(MY[k]==="want"?"w":"s"))});return a.join(",")}
 function url(){return location.origin.replace(/^null$/,"")+location.pathname+"#my="+enc()}
 H.shareList=function(){
  var n=Object.keys(MY).filter(function(k){return F[k]}).length,st=document.getElementById("ml-share-st");
  if(!n){if(st)st.textContent=L("Список пока пуст","The list is empty");return}
  var u=url(),ttl="Horror Aesthetic";
  function done(m){if(st){st.textContent=m;setTimeout(function(){st.textContent=""},3500)}}
  if(navigator.share){navigator.share({title:ttl,text:L("Мой список хорроров","My horror list"),url:u}).then(function(){done(L("Отправлено","Shared"))}).catch(function(){})}
  else if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(function(){done(L("Ссылка скопирована","Link copied"))},function(){prompt(L("Скопируйте ссылку","Copy the link"),u)})}
  else prompt(L("Скопируйте ссылку","Copy the link"),u)};
 function incoming(){var m=/^#my=(.*)$/.exec(location.hash||"");if(!m)return;
  var items=m[1].split(",").map(function(x){var p=x.split(".");return F[p[0]]&&(p[1]==="w"||p[1]==="s")?[p[0],p[1]==="w"?"want":"seen"]:null}).filter(Boolean);
  try{history.replaceState(null,"",location.pathname)}catch(e){}
  if(!items.length||!H.modal)return;
  var w=items.filter(function(x){return x[1]==="want"}).length,box=H.modal("sharein",L("Вам прислали список","A list was shared with you"),"star");
  box.body.innerHTML='<p>'+L("Фильмов: ","Films: ")+items.length+' ('+L("хочу","want")+': '+w+', '+L("видел","seen")+': '+(items.length-w)+')</p><p style="opacity:.75">'+L("Добавить их в ваш список «Моё»? Уже отмеченные фильмы не изменятся.","Add them to your My list? Films you already marked stay unchanged.")+'</p><div style="display:flex;gap:10px;flex-wrap:wrap"><button type="button" class="btn" data-a="y">'+L("Добавить","Add")+'</button><button type="button" class="btn o" data-a="n">'+L("Нет","No")+'</button></div>';
  box.body.addEventListener("click",function(e){var b=e.target.closest("button[data-a]");if(!b)return;
   if(b.dataset.a==="y"){items.forEach(function(x){if(!MY[x[0]])MY[x[0]]=x[1]});saveMy();var f=document.querySelector('#filters button[data-f="mylist"]');if(f)f.click()}
   H.closeModal()})}
 setTimeout(incoming,1800);
 /* make sure back-to-top exists and is visible after scroll */
 var tt=document.getElementById("totop");if(tt){function f(){tt.classList.toggle("on",scrollY>700)}addEventListener("scroll",f,{passive:true});f()}
})();


/* ===== v115: forms via FormSubmit (no Netlify) + contact email ===== */
(function(){
 var MAIL=["horroraestheticofficial","gmail.com"].join("@");
 window.HAM=function(){return MAIL};
 window.HAF=function(body){
  var o={},p=new URLSearchParams(body);p.forEach(function(v,k){if(k!=="form-name"&&k!=="bot-field")o[k]=v});
  var kind=p.get("form-name")||"form";
  o._subject="Horror Aesthetic: "+(kind==="subscribe"?"подписка":"сообщение с сайта");o._captcha="false";o._template="table";o.form=kind;
  return fetch("https://formsubmit.co/ajax/"+MAIL,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(o)})
   .then(function(r){return r.json().catch(function(){return{}}).then(function(j){return{ok:r.ok&&!(j&&(j.success===false||j.success==="false"))}})})};
 function mailLine(){
  var c=document.getElementById("ct-msg");if(!c||document.getElementById("ct-mail"))return;
  var p=document.createElement("p");p.id="ct-mail";p.className="ct-mail";
  var ru=document.documentElement.lang!=="en";
  p.innerHTML='<span class="l-ru">Или напишите на почту: </span><span class="l-en">Or write by email: </span><a href="mailto:'+MAIL+'">'+MAIL+'</a>';
  c.parentNode.insertBefore(p,c.nextSibling)}
 mailLine();setTimeout(mailLine,800);
})();


/* ===== v117: email visible in the footer on every tab ===== */
(function(){
 function add(){
  var soc=document.querySelector("footer .soc");if(!soc||document.getElementById("ft-mail"))return;
  var m=window.HAM?window.HAM():["horroraestheticofficial","gmail.com"].join("@");
  var a=document.createElement("a");a.id="ft-mail";a.className="btn o";a.href="mailto:"+m;
  a.innerHTML='<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/></svg><span class="l-ru">Почта</span><span class="l-en">Email</span>';
  soc.appendChild(a);
  var t=soc.parentNode,p=document.getElementById("ft-addr");
  if(!p){p=document.createElement("div");p.id="ft-addr";p.className="ft-addr";p.innerHTML='<a href="mailto:'+m+'">'+m+'</a>';soc.parentNode.insertBefore(p,soc.nextSibling)}
 }
 add();setTimeout(add,600);setTimeout(add,2500);
})();


/* ===== v122: legal links + RSS in the footer ===== */
(function(){
 function add(){
  var ft=document.querySelector("footer .t");if(!ft||document.getElementById("ft-legal"))return;
  var d=document.createElement("nav");d.id="ft-legal";d.className="ft-legal";d.setAttribute("aria-label","Info");
  d.innerHTML='<a href="/horror-aesthetic/about.html"><span class="l-ru">О проекте</span><span class="l-en">About</span></a>'
   +'<a href="/horror-aesthetic/privacy.html"><span class="l-ru">Конфиденциальность</span><span class="l-en">Privacy</span></a>'
   +'<a href="/horror-aesthetic/copyright.html"><span class="l-ru">Авторские права</span><span class="l-en">Copyright</span></a>'
   +'<a href="/horror-aesthetic/feed.xml">RSS</a>';
  var a=document.getElementById("ft-addr");
  if(a&&a.parentNode)a.parentNode.insertBefore(d,a.nextSibling);else ft.appendChild(d);
 }
 add();setTimeout(add,700);setTimeout(add,2600);
})();
/* ===== v125: themes section ===== */
(function(){
 var cur=null,q="",themes=null,loading=false,failed=false;
 var status=document.querySelectorAll(".ha-theme-status"),retry=document.querySelectorAll(".ha-theme-retry");
 function announce(){
  var message=loading?(LANG==="ru"?"Загружаем дополнительные фильмы…":"Loading more film data…"):
   failed?(LANG==="ru"?"Не удалось загрузить дополнительные фильмы.":"Could not load the additional film data."):"";
  status.forEach(function(el){el.textContent=message});
  retry.forEach(function(el){el.hidden=!failed;el.textContent=LANG==="ru"?"Повторить":"Try again"});
 }
 function toCatalogue(data){
  var seen=new Set(),out=[];
  function nz(x){return String(x).toLowerCase().replace(/^(the|a|an|la|le|il|el|les|der|die|das|los)\s+/,"").replace(/[^0-9a-zа-я]/g,"")}
  data.forEach(function(t){t.f.forEach(function(it){
   if(it[3])return;
   var k=nz(it[1])+"|"+it[2];if(seen.has(k))return;seen.add(k);
   var year=it[2]?" ("+it[2]+")":"";
   out.push({id:"x"+out.length,n:{ru:it[0]+year,en:it[1]+year}});
  })});
  return out;
 }
 function load(force){
  if(themes||loading||(failed&&!force))return;
  var trigger=force&&document.activeElement;
  loading=true;failed=false;announce();
  fetch("data/home-themes.json").then(function(response){
   if(!response.ok)throw new Error("Theme data unavailable");
   return response.json();
  }).then(function(data){
   window.CATX=toCatalogue(data);themes=data;
   if(secFilter==="catalog"||secFilter==="all")renderCat();
   render();
  }).catch(function(){failed=true}).finally(function(){
   loading=false;announce();
   if(trigger&&trigger.classList.contains("ha-theme-retry")&&document.activeElement===document.body){
    var section=trigger.closest("section");
    if(!section.hidden)(failed?trigger:section.querySelector("#th-grid button,#cq"))?.focus({preventScroll:true});
   }
  });
 }
 window.loadHomeThemes=load;
 retry.forEach(function(el){el.addEventListener("click",function(){load(true)})});
 function nameOf(it){return {ru:it[0],en:it[1]}}
 var THB={};"werewolves,giallo,vampires,witchcraft,medicine,mystic,zombies,gothic,gore,trash,cannibals,mutants,ghosts,serial,psycho,objects,religion,monsters,mummies,anthologies,animals,slashers,parodies,witches".split(",").forEach(function(k){THB[k]=1});
 function grid(){
  var g=document.getElementById("th-grid");if(!g||!themes)return;
  g.innerHTML=themes.map(function(t){return THB[t.id]?'<button type="button" class="ban" data-th="'+t.id+'" aria-pressed="'+(cur===t.id)+'" aria-label="'+esc(T(t))+'"><img src="/horror-aesthetic/img/themes/'+t.id+'.webp" alt="" loading="lazy" decoding="async"><b class="cap">'+esc(T(t))+'</b><i>'+t.f.length+'</i></button>':'<button type="button" data-th="'+t.id+'" aria-pressed="'+(cur===t.id)+'"><b>'+esc(T(t))+'</b><i>'+t.f.length+'</i></button>'}).join("");
 }
 function box(){
  var b=document.getElementById("th-box");if(!b)return;
  if(!cur){b.hidden=true;b.innerHTML="";return}
  var t=themes?.find(function(x){return x.id===cur});if(!t){b.hidden=true;return}
  var ql=q.toLowerCase();
  var items=t.f.filter(function(it){return !ql||(it[0]+" "+it[1]).toLowerCase().indexOf(ql)>-1});
  var h=(THB[t.id]?'<figure class="sbanner"><img src="/horror-aesthetic/img/themes/'+t.id+'.webp" alt="'+esc(T(t))+'" decoding="async"></figure>':'')+'<div class="th-top"><h3>'+esc(T(t))+' <small style="font-size:13px;color:var(--dim)">'+t.f.length+'</small></h3><input id="th-q" type="search" value="'+esc(q)+'" placeholder="'+esc(T(UI.th_ph))+'" aria-label="'+esc(T(UI.th_ph))+'"><button type="button" id="th-back">'+esc(T(UI.th_back))+'</button></div>';
  h+='<p style="margin:0 0 10px"><a href="/horror-aesthetic/themes/'+t.id+'.html">'+(LANG==="ru"?"Открыть как отдельную страницу":"Open as a separate page")+'</a></p>';h+='<ul class="th-list">'+(items.map(function(it){
    var n=nameOf(it),main=T(n),alt=LANG==="ru"?n.en:n.ru;
    var yr=it[2]?' ('+it[2]+')':'';
    var tag=it[4]?'<a class="tg" href="/horror-aesthetic/reviews/'+it[3]+'.html">'+esc(ic("star")&&"★ "+T(UI.th_rev))+'</a>':'<span class="tg">'+esc(T(UI.th_cat))+'</span>';
    return '<li><b>'+esc(main)+esc(yr)+'</b>'+(alt&&alt!==main?'<small>'+esc(alt)+'</small>':'')+tag+'</li>'}).join("")||'<li><b>'+esc(T(UI.th_empty))+'</b></li>')+'</ul>';
  b.hidden=false;b.innerHTML=h;
  var qi=document.getElementById("th-q");
  if(qi)qi.addEventListener("input",function(){q=qi.value;var pos=qi.selectionStart;box();var n=document.getElementById("th-q");if(n){n.focus();try{n.setSelectionRange(pos,pos)}catch(e){}}});
  document.getElementById("th-back").addEventListener("click",function(){cur=null;q="";grid();box();var gg=document.getElementById("th-grid");if(gg)gg.scrollIntoView({block:"start"})});
 }
 function render(){grid();box()}
 document.addEventListener("click",function(e){
  var b=e.target.closest&&e.target.closest("#th-grid button");if(!b)return;
  cur=b.dataset.th;q="";render();var bx=document.getElementById("th-box");if(bx)bx.scrollIntoView({block:"start"});
 });
 var _sl=window.setLang;if(_sl)window.setLang=function(){var r=_sl.apply(this,arguments);announce();render();return r};
 try{window.applySections&&window.applySections()}catch(e){}
})();


/* ===== v143 J-HORROR DECOR PACK (animated, inline) ===== */
(function(){
 var red=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches,sd=5;function R(){sd=(sd*16807)%2147483647;return sd/2147483647}
 var K='stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"',M={};
 M.torii='<ellipse class="jx-mist" cx="24" cy="45" rx="17" ry="2" fill="currentColor" opacity=".14"/><circle class="jx-a jx-pls" cx="37" cy="9" r="4.4"/>'+
  '<g fill="currentColor"><path d="M2.5 11.4Q24 17.8 45.5 11.4l-1.6 4.4Q24 22 4.1 15.8Z"/><rect x="6" y="19.4" width="36" height="2.4"/><rect x="9" y="28.4" width="30" height="2.6"/><rect x="8.6" y="43.2" width="5.6" height="2.4"/><rect x="33.8" y="43.2" width="5.6" height="2.4"/></g>'+
  '<g '+K+' stroke-width="3.2"><path d="M11.4 17V43.4M36.6 17V43.4"/></g><rect class="jx-a" x="22" y="21.8" width="4" height="6.4"/>'+
  '<path d="M11.6 25.2Q18 28.4 24 25.6T36.4 25.2" stroke="currentColor" stroke-width="1.1" stroke-dasharray="1.5 .7" fill="none"/>'+
  '<g stroke="#f6efe8" stroke-width=".9" fill="none" stroke-linecap="round" stroke-linejoin="round"><path class="jx-sh" style="--d:0s" d="M16.6 27.2l-1 2.2 1.4 1-1.6 2.4"/><path class="jx-sh" style="--d:-1.1s" d="M24 27.2l-1 2.2 1.4 1-1.6 2.4"/><path class="jx-sh" style="--d:-2.1s" d="M31.4 27.2l-1 2.2 1.4 1-1.6 2.4"/></g>';
 M.chochin='<circle class="jx-a jx-pls" cx="24" cy="23" r="21" opacity=".1"/><g '+K+'><path d="M24 0v3"/><rect x="16" y="4" width="16" height="4.4" rx="1" fill="currentColor"/><path class="jx-g jx-lit" d="M16 8.4C3 14 3 32 16 38.6H32C45 32 45 14 32 8.4Z"/><path d="M6 17Q24 21 42 17M4.8 23.4Q24 27.6 43.2 23.4M6 30Q24 34 42 30" stroke-width=".9" opacity=".7"/><rect x="16" y="38.6" width="16" height="4.4" rx="1" fill="currentColor"/></g>'+
  '<g class="jx-blk"><ellipse cx="24" cy="23.4" rx="6.2" ry="4.5" fill="#f6efe8"/><circle class="jx-a" cx="24" cy="23.4" r="2.8"/><circle cx="24" cy="23.4" r="1.1" fill="#000"/><circle cx="23.1" cy="22.4" r=".6" fill="#fff"/></g>'+
  '<path class="jx-a jx-wag" d="M20.6 42.8q-.8 3.6 1.4 5.4 2.6-.2 3.2-2.2.4-2-.4-3.2Z" stroke="#1a0709" stroke-width=".5"/><g '+K+' stroke-width="1.1"><path d="M30 43l.6 4M32.4 43l1.2 3.6"/></g>';
 M.hannya='<g '+K+'><path d="M24 8C34.4 8 38.4 16 37.4 25 36.4 34 31.6 42 24 42 16.4 42 11.6 34 10.6 25 9.6 16 13.6 8 24 8Z"/><path d="M15 12L10.6 2.6 19.4 9.6M33 12L37.4 2.6 28.6 9.6" fill="currentColor"/><path d="M12.8 15.6L21.6 19M35.2 15.6L26.4 19" stroke-width="2"/><path d="M15.6 32Q24 38.4 32.4 32" stroke-width="1.2"/><path d="M24 22L22.4 29H25.6" stroke-width="1.1"/><path d="M13 25q-1 5 1 9M35 25q1 5-1 9" stroke-width=".7" opacity=".6"/></g>'+
  '<g class="jx-eyes"><ellipse class="jx-a" cx="17.6" cy="22.2" rx="3.2" ry="1.9" transform="rotate(14 17.6 22.2)"/><ellipse class="jx-a" cx="30.4" cy="22.2" rx="3.2" ry="1.9" transform="rotate(-14 30.4 22.2)"/><circle cx="17.8" cy="22.4" r=".8" fill="#fff" class="jx-glint2"/><circle cx="30.2" cy="22.4" r=".8" fill="#fff" class="jx-glint2"/></g>'+
  '<path d="M16.4 32.4l1.4 4.2 1.6-3.8M21 34.2l1.6 4.4 1.6-4M25.6 34.2l1.6 4 1.6-4.4M29.6 32.6l1.6 3.8 1.2-4.2" fill="#f6efe8" stroke="currentColor" stroke-width=".6"/><path class="jx-a jx-drip" d="M30.6 36.6v2.6q0 1.3-.9 1.3t-.9-1.3v-2.6"/>';
 M.higan='<g class="jx-sway"><path d="M24.4 46C25.2 38 23.4 31 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><g class="jx-ac" fill="none" stroke-linecap="round" stroke-width="1.9"><path d="M24 24Q14 22 8 12 7 9 10 8M24 24Q17 18 15 7 15 4 18 4M24 24Q22 15 24 3.4M24 24Q31 18 33 7 33 4 30 4M24 24Q34 22 40 12 41 9 38 8M24 24Q12 27 5 22M24 24Q36 27 43 22"/></g><g stroke="#ff8d93" stroke-width=".5" fill="none" opacity=".7"><path d="M24 24Q15 21 9.4 12.6M24 24Q18 18 16.4 7.6M24 24Q31 18 32.6 7.6"/></g><g stroke="currentColor" stroke-width=".7" fill="none"><path d="M24 24Q16 14 11 14M24 24Q20 11 20 7M24 24Q28 11 28 7M24 24Q32 14 37 14"/></g><g class="jx-d"><circle class="jx-tw" cx="11" cy="14" r="1.1"/><circle class="jx-tw" style="--d:-.7s" cx="20" cy="7" r="1.1"/><circle class="jx-tw" style="--d:-1.4s" cx="28" cy="7" r="1.1"/><circle class="jx-tw" style="--d:-2.1s" cx="37" cy="14" r="1.1"/></g></g><path class="jx-ac jx-fall" d="M38 16q3 1 4 4-3 0-4-4" fill="#d8232b" stroke="none"/>';
 M.ofuda='<g class="jx-flut"><g '+K+'><path d="M24 0v4"/><path d="M15 4.4H33V41L31 42.8 29 41 27 42.8 25 41 23 42.8 21 41 19 42.8 17 41 15 42.8Z"/><path d="M15 9.4h18" stroke-width=".9"/></g><text x="24" y="21" text-anchor="middle" font-size="11.5" font-weight="700" fill="currentColor" style="font-family:var(--ja)">封</text><circle class="jx-a jx-pls" cx="24" cy="31.4" r="4.2"/><path d="M22 31.4h4M24 29.4v4" stroke="#1a0709" stroke-width=".9"/><g stroke="currentColor" stroke-width=".7" opacity=".55"><path d="M18 14v3M30 14v3M18 25.4v2.4M30 25.4v2.4M18 36v2M30 36v2"/></g></g>';
 M.furin='<g '+K+'><path d="M24 0v6"/><path d="M9 22Q9 8 24 8Q39 8 39 22Z" fill="currentColor" fill-opacity=".14"/><path d="M7 22h34" stroke-width="2"/></g><g class="jx-swing"><path d="M24 22v9" stroke="currentColor" stroke-width="1.2"/><circle cx="24" cy="32.4" r="1.9" fill="currentColor"/><path d="M24 34.4v3.4" stroke="currentColor" stroke-width="1.2"/><path class="jx-a" d="M19.4 37.8h9.2l-.8 9.4h-7.6Z"/><path d="M22 41.4h4M22 44h4" stroke="#1a0709" stroke-width=".6"/></g><g class="jx-rings" fill="none" stroke="currentColor" stroke-width=".7"><path class="jx-ring" d="M6.4 14q-3.4 5 0 10"/><path class="jx-ring" style="--d:-1.2s" d="M3.4 12q-5 7 0 14"/><path class="jx-ring" d="M41.6 14q3.4 5 0 10"/><path class="jx-ring" style="--d:-1.2s" d="M44.6 12q5 7 0 14"/></g>';
 M.kitsune='<g '+K+'><path d="M24 43C13.6 43 7 31 7 18L14.4 4.6 24 13 33.6 4.6 41 18C41 31 34.4 43 24 43Z"/><path d="M12 24.4Q17 20.6 22 25M36 24.4Q31 20.6 26 25" stroke-width="1.8"/><path d="M24 30l-2 3.4h4Z" fill="currentColor"/><path d="M14.4 8.6l2 6M33.6 8.6l-2 6" stroke-width=".8" opacity=".7"/></g><path class="jx-as" d="M9 30Q14 31 17 36M39 30Q34 31 31 36M14 17Q17 13 20 15M34 17Q31 13 28 15M24 14v6" fill="none" stroke-width="1.8" stroke-linecap="round"/><g class="jx-glint"><path d="M13.6 23.6Q16.4 21.6 19 23.2M29 23.2Q31.6 21.6 34.4 23.6" stroke="#fff" stroke-width=".9" fill="none" stroke-linecap="round"/></g>';
 M.onibi='<g class="jx-flk"><path class="jx-a" d="M24 3C31 12 38 19 35.6 29.4 33.6 38 15.6 38 13.6 29.4 12.4 21.4 20 17 24 3Z" opacity=".92"/><g class="jx-flk2"><path d="M24 13C28 19 31 23 29.8 29.2 28.8 33.4 19.6 33.4 18.6 29.2 18 25 22 22.2 24 13Z" fill="#ffd0d4" opacity=".8"/></g></g><g fill="#1a0709"><ellipse cx="21.4" cy="26" rx="1.1" ry="1.7"/><ellipse cx="26.6" cy="26" rx="1.1" ry="1.7"/><path d="M22 30q2 2.2 4 0q-2 1.2-4 0Z"/></g><circle class="jx-spk" cx="16" cy="18" r=".7" fill="#ff8d93"/><circle class="jx-spk" style="--d:-1s" cx="33" cy="16" r=".6" fill="#ff8d93"/><circle class="jx-spk" style="--d:-2s" cx="24" cy="8" r=".5" fill="#ffc0c4"/><path d="M24 38Q21 43 25 46" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linecap="round" opacity=".6"/>';
 var d=document.createElement("div");d.id="jx-defs";d.setAttribute("aria-hidden","true");d.style.cssText="position:absolute;width:0;height:0;overflow:hidden";
 d.innerHTML='<svg width="0" height="0"><defs><symbol id="jx-tg" viewBox="0 0 48 48"><path d="M2 10Q24 17 46 10l-1.8 5Q24 22 3.8 15Z"/><rect x="6" y="19" width="36" height="3"/><rect x="9.6" y="15" width="4.2" height="33"/><rect x="34.2" y="15" width="4.2" height="33"/><rect x="9.6" y="28" width="28.8" height="3"/></symbol><symbol id="jx-on" viewBox="0 0 48 48"><path class="jx-a" d="M24 3C31 12 38 19 35.6 29.4 33.6 38 15.6 38 13.6 29.4 12.4 21.4 20 17 24 3Z"/><path d="M24 13C28 19 31 23 29.8 29.2 28.8 33.4 19.6 33.4 18.6 29.2 18 25 22 22.2 24 13Z" fill="#ffd0d4" opacity=".8"/></symbol></defs></svg>';document.body.appendChild(d);
 function SV(id,c){return '<svg viewBox="0 0 48 48" class="'+(c||'')+'" aria-hidden="true">'+M[id]+'</svg>'}
 function U(id,x,y,w,h,extra){return '<use href="#jx-'+id+'" x="'+x+'" y="'+y+'" width="'+w+'" height="'+(h||w)+'"'+(extra||"")+'/>'}
 var MAP={spot:"onibi",about:"kitsune",reviews:"torii",articles:"ofuda",library:"kitsune",releases:"chochin",news:"furin",subs:"hannya",shelves:"hannya",start:"torii",genres:"higan",stats:"onibi",dirs:"hannya",catalog:"ofuda",themes:"higan",badges:"ofuda",play:"hannya",calendar:"furin",quiz:"kitsune",lists:"chochin",trailer:"torii",art:"higan"};
 var secs=document.querySelectorAll("section[data-cat]"),i;
 for(i=0;i<secs.length;i++){var c=secs[i].getAttribute("data-cat"),m=MAP[c]||"torii",sh=secs[i].querySelector(".sec-h");if(!sh||sh.querySelector(".jx-m"))continue;
  var mk=document.createElement("span");mk.className="jx-m jx-"+m;mk.setAttribute("aria-hidden","true");mk.innerHTML=SV(m);sh.classList.add("jx-h");sh.appendChild(mk)}
 var hero=document.querySelector(".hero");
 if(hero&&!hero.querySelector(".jx-hero")){var L=[[15,17,0],[36,12,.8],[285,17,.4],[264,12,1.2]],g="";
  L.forEach(function(q){var top=q[1]*.5+2,x=q[0]-q[1]/2;g+='<g class="jx-sw" style="animation-delay:-'+q[2]+'s"><line x1="'+q[0]+'" y1="0" x2="'+q[0]+'" y2="'+top+'" stroke="currentColor" stroke-width=".5" opacity=".7"/><g class="jx-fl" style="animation-delay:-'+(q[2]*1.7).toFixed(1)+'s"><svg x="'+x+'" y="'+top+'" width="'+q[1]+'" height="'+q[1]+'" viewBox="0 0 48 48" overflow="visible">'+M.chochin+'</svg></g></g>'});
  var h=document.createElement("div");h.className="jx-hero";h.setAttribute("aria-hidden","true");h.innerHTML='<svg viewBox="0 0 300 112" preserveAspectRatio="xMidYMin slice">'+g+'</svg>';hero.appendChild(h)}
 var ft=document.querySelector("footer");
 if(ft&&!document.querySelector(".jx-foot")){
  var o='<svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMax meet"><defs>'
  +'<linearGradient id="jxSk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset=".6" stop-color="#5a0a14" stop-opacity=".22"/><stop offset="1" stop-color="#d8232b" stop-opacity=".3"/></linearGradient>'
  +'<radialGradient id="jxMg" cx=".36" cy=".32" r=".8"><stop offset="0" stop-color="#ff8a8e"/><stop offset=".3" stop-color="#e8283a"/><stop offset=".7" stop-color="#a30e1b"/><stop offset="1" stop-color="#4a050d"/></radialGradient>'
  +'<radialGradient id="jxMh" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff2a3a" stop-opacity=".5"/><stop offset=".45" stop-color="#ff2a3a" stop-opacity=".16"/><stop offset="1" stop-color="#ff2a3a" stop-opacity="0"/></radialGradient>'
  +'<linearGradient id="jxVm" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ee2a35"/><stop offset=".55" stop-color="#b9121e"/><stop offset="1" stop-color="#6c0a12"/></linearGradient>'
  +'<linearGradient id="jxPil" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#5e0a12"/><stop offset=".55" stop-color="#c4162358"/><stop offset=".6" stop-color="#c41623"/><stop offset="1" stop-color="#ff4a52"/></linearGradient>'
  +'<linearGradient id="jxPet" x1="0" x2="0" y1="1" y2="0"><stop offset="0" stop-color="#8e0c18"/><stop offset=".6" stop-color="#e3202f"/><stop offset="1" stop-color="#ff6a74"/></linearGradient>'
  +'<linearGradient id="jxPth" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#2a1018" stop-opacity=".2"/><stop offset="1" stop-color="#4a1c28" stop-opacity=".9"/></linearGradient>'
  +'<linearGradient id="jxFog" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffb4ba" stop-opacity="0"/><stop offset=".5" stop-color="#ffb4ba" stop-opacity=".12"/><stop offset="1" stop-color="#ffb4ba" stop-opacity="0"/></linearGradient>'
  +'<clipPath id="jxMc"><circle cx="268" cy="58" r="30"/></clipPath>'
  +'<symbol id="jxTR" viewBox="0 0 120 100"><path d="M20 14L29.5 14 31 96 18.5 96Z" fill="url(#jxPil)"/><path d="M90.5 14L100 14 101.5 96 89 96Z" fill="url(#jxPil)"/><rect x="17" y="90" width="15.5" height="10" rx="1.5" fill="#0c0406"/><rect x="88" y="90" width="15.5" height="10" rx="1.5" fill="#0c0406"/><path d="M26 17h2v78h-2zM96 17h2v78h-2z" fill="#ff7a80" opacity=".22"/>'
  +'<rect x="12" y="35" width="96" height="6.4" fill="url(#jxVm)"/><rect x="12" y="35" width="96" height="1.1" fill="#ff7a80" opacity=".45"/><rect x="12" y="40.4" width="96" height="1.2" fill="#2a0408" opacity=".7"/>'
  +'<rect x="55" y="18" width="10" height="17" rx=".6" fill="#14050a" stroke="#ff4a58" stroke-width=".5"/><path d="M60 21v11M57.4 24h5.2M57.6 28h4.8" stroke="#ff6a74" stroke-width=".8" fill="none" stroke-linecap="round"/>'
  +'<path d="M7 14.5Q60 25 113 14.5L113 19Q60 29.5 7 19Z" fill="url(#jxVm)"/><path d="M7 14.5Q60 25 113 14.5" stroke="#ff7a80" stroke-width=".6" fill="none" opacity=".5"/>'
  +'<path d="M-3 1.5Q60 17 123 1.5L122 6.5Q60 22 -2 6.5Z" fill="#0b0407"/><path d="M-3 1.5Q60 17 123 1.5" stroke="#6e5a60" stroke-width=".5" fill="none" opacity=".6"/><path d="M-2 6.5Q60 22 122 6.5L119 12.5Q60 27 1 12.5Z" fill="url(#jxVm)"/>'
  +'<path d="M-3 1.5L-4.4 .6M123 1.5L124.4 .6" stroke="#0b0407" stroke-width="1.2" stroke-linecap="round"/></symbol>'
  +'<symbol id="jxHG" viewBox="0 0 40 52"><path d="M20 52Q19 38 20.4 22" stroke="#0e3a26" stroke-width="1.2" fill="none" stroke-linecap="round"/>'
  +'<g transform="translate(20.4 21)"><g stroke="#ff6a74" stroke-width=".5" fill="none" stroke-linecap="round"><path d="M0 0C-3-8-9-14-17-15"/><path d="M0 0C-1-9-3-16-7-21"/><path d="M0 0C1-9 4-16 9-20"/><path d="M0 0C3-8 9-13 17-13"/><path d="M0 0C-3-4-10-6-16-4"/><path d="M0 0C3-4 10-5 16-3"/></g>'
  +'<g fill="#ffd0d4"><circle cx="-17" cy="-15" r="1"/><circle cx="-7" cy="-21" r="1"/><circle cx="9" cy="-20" r="1"/><circle cx="17" cy="-13" r="1"/><circle cx="-16" cy="-4" r=".9"/><circle cx="16" cy="-3" r=".9"/></g>'
  +'<g fill="url(#jxPet)" stroke="#5a0610" stroke-width=".25"><path d="M0 0C-4-4-10-8-14-6 -10-3-6-1 0 0Z"/><path d="M0 0C-3-6-5-11-6-14-1-10 1-5 0 0Z"/><path d="M0 0C3-6 5-11 7-13 1-9-1-5 0 0Z"/><path d="M0 0C4-3 10-6 14-4 9-2 5-1 0 0Z"/><path d="M0 0C-2-6-8-11-13-12-9-7-5-3 0 0Z"/><path d="M0 0C3-6 8-10 13-10 9-6 5-2 0 0Z"/></g><circle r="1.5" fill="#6a0a14"/></g></symbol>'
  +'</defs><rect width="360" height="200" fill="url(#jxSk)"/>';
  o+='<g class="jx-moonf"><circle cx="268" cy="58" r="74" fill="url(#jxMh)" class="jx-pls"/><circle cx="268" cy="58" r="44" fill="none" stroke="#ff2a3a" stroke-width=".5" opacity=".22" class="jx-pls"/><circle cx="268" cy="58" r="39" fill="none" stroke="#ff5a64" stroke-width=".3" opacity=".25"/>'
  +'<circle cx="268" cy="58" r="30" fill="url(#jxMg)"/><g clip-path="url(#jxMc)"><g fill="#4a0610" opacity=".42"><path d="M254 44q8-6 14-2t2 9-10 4-8-6z"/><path d="M272 62q9-3 14 2t-1 10-11 2-5-8z"/><ellipse cx="260" cy="70" rx="7" ry="4.5"/><ellipse cx="282" cy="46" rx="4" ry="3"/></g>'
  +'<g fill="none" stroke="#2a0309" stroke-width=".5" opacity=".5"><circle cx="258" cy="56" r="3.4"/><circle cx="278" cy="52" r="2.4"/><circle cx="270" cy="74" r="2.8"/><circle cx="252" cy="68" r="1.8"/></g><g fill="none" stroke="#ff9aa0" stroke-width=".4" opacity=".4"><path d="M255.5 54.4a3.4 3.4 0 0 1 5-1.2"/><path d="M276.4 50.8a2.4 2.4 0 0 1 3-.8"/></g>'
  +'<path d="M244 56q10-3 14 5t12 4 14-4" stroke="#3a0510" stroke-width=".7" fill="none" opacity=".55"/><circle cx="276" cy="68" r="34" fill="#12030a" opacity=".42"/></g>'
  +'<circle cx="268" cy="58" r="30" fill="none" stroke="#2e0409" stroke-width="1" opacity=".7"/><circle cx="268" cy="58" r="29" fill="none" stroke="#ff8a90" stroke-width=".4" opacity=".3"/>'
  +'<path class="jx-drift" d="M226 50q16-4 30 0t28-2 24 2" stroke="#10050a" stroke-width="2.4" fill="none" opacity=".5" stroke-linecap="round"/><path class="jx-drift" style="animation-delay:-9s" d="M236 66q14-3 26 0t24-1 20 1" stroke="#10050a" stroke-width="1.6" fill="none" opacity=".42" stroke-linecap="round"/></g>';
  o+='<path d="M0 118Q30 100 70 112T140 106 210 114 280 102 360 114V200H0Z" fill="#06090b" opacity=".55"/><path d="M0 132Q50 118 100 128T200 124 300 130 360 126V200H0Z" fill="#05080a" opacity=".8"/>';
  o+='<rect y="120" width="360" height="40" fill="url(#jxFog)" class="jx-fg"/>';
  o+='<path d="M158 200L172.5 148 187.5 148 202 200Z" fill="url(#jxPth)"/><g stroke="#1a0810" stroke-width=".6" opacity=".7"><path d="M164 186L196 186M167 175L193 175M169.6 166L190.4 166M171.4 158L188.6 158M172.6 152L187.4 152"/></g>';
  var bt=[[150,76,152],[104,62,156],[88,66,159],[62,36,164]],ti;
  var tt=[[54,120,148,.5],[72,120,153,.62],[96,120,159,.76]];
  var TW=[[40,150,.42,.34],[60,155,.55,.5],[84,160,.7,.72]];
  for(ti=0;ti<TW.length;ti++){var w=TW[ti][0],by=TW[ti][1];o+='<g opacity="'+TW[ti][3]+'"><use href="#jxTR" x="'+(180-w/2)+'" y="'+(by-w*.833)+'" width="'+w+'" height="'+(w*.833)+'"/></g>'}
  o+='<g class="jx-tgr"><use href="#jxTR" x="105" y="62" width="150" height="125"/></g>';
  o+='<g class="jx-sw" style="animation-duration:6s"><path d="M133 108Q180 122 227 108" stroke="#d6c39a" stroke-width="2.2" fill="none" stroke-dasharray="2.2 .8" opacity=".85"/></g>';
  var sdx=[148,164,180,196,212],si;for(si=0;si<sdx.length;si++){var sy=108+14*(1-Math.pow((sdx[si]-180)/47,2))*1;o+='<g class="jx-sw" style="animation-delay:-'+(si*.9).toFixed(1)+'s"><path d="M'+sdx[si]+' '+(sy+.6).toFixed(1)+'l-2 3.2 3.6 1.8-3.6 2.2 3.8 2.2-3.2 2.6h4.4l-3.8-2.6 3.6-2-3.2-2 3.2-1.8-2-3.2Z" fill="#f1e8d8" opacity=".85"/></g>'}
  [[68,166,1],[292,166,1.2]].forEach(function(q,i){var x=q[0],y=q[1];o+='<g><path d="M'+(x-9)+' '+(y+20)+'h18v-3h-18zM'+(x-2.2)+' '+(y+17)+'h4.4v-16h-4.4z" fill="#0b0507"/><rect x="'+(x-5.5)+'" y="'+(y-3)+'" width="11" height="9" fill="#14070b" stroke="#2a1218" stroke-width=".4"/><rect class="jx-lamp" style="--d:-'+(i*1.1)+'s" x="'+(x-3)+'" y="'+(y-1)+'" width="6" height="5" fill="#ff3a48"/><path d="M'+(x-9)+' '+(y-3)+'L'+x+' '+(y-10)+' '+(x+9)+' '+(y-3)+'Z" fill="#0b0507"/><circle cx="'+x+'" cy="'+(y-11)+'" r="1.4" fill="#0b0507"/></g>'});
  var gr=[[158,.5,'a',7,.6],[172,.78,'b',9.5,.82],[190,1.15,'c',14,1]],gi,x,gw,gh;
  for(gi=0;gi<3;gi++){o+='<g class="jx-fld jx-fld'+gr[gi][2]+'" opacity="'+gr[gi][4]+'">';gw=34*gr[gi][1]*.62;gh=gw*1.3;
   for(x=gi*3-4;x<364;x+=gr[gi][3]){var half=5+(gr[gi][0]-148)*.5+gi*2;if(Math.abs(x-180)<half)continue;var jy=R()*4,jx=R()*3-1.5,sc=.82+R()*.4;
    o+='<use href="#jxHG" x="'+(x+jx-gw*sc/2).toFixed(1)+'" y="'+(gr[gi][0]+jy-gh*sc).toFixed(1)+'" width="'+(gw*sc).toFixed(1)+'" height="'+(gh*sc).toFixed(1)+'"/>'}
   o+='</g>'}
  o+='<path d="M0 200V193Q60 188 120 192T240 191 360 194V200Z" fill="#030506" opacity=".9"/>';
  var fl=[[48,120],[310,126],[236,138],[104,132],[160,112],[330,98]];
  fl.forEach(function(q,i){o+='<g class="jx-onb" style="animation-delay:-'+(i*1.3).toFixed(1)+'s"><g style="color:var(--blood)">'+U("on",q[0]-5,q[1]-6.5,10,12)+'</g></g>'});
  o+='<path class="jx-crow" d="M0 0q2.2-2.4 4.4 0 2.2-2.4 4.4 0-2.2.8-4.4.6-2.2.2-4.4-.6Z" fill="#050103"/>';
  o+='<ellipse cx="90" cy="150" rx="90" ry="7" fill="#ffb4ba" opacity=".08" class="jx-fg"/><ellipse cx="280" cy="156" rx="86" ry="7" fill="#ffb4ba" opacity=".08" class="jx-fg2"/></svg>';
  var f=document.createElement("div");f.className="jx-foot";f.setAttribute("aria-hidden","true");f.innerHTML=o;ft.parentNode.insertBefore(f,ft)}
 if(!red)document.addEventListener("pointerdown",function(e){if(e.pointerType==="mouse"&&e.button)return;var N=7,k;for(k=0;k<N;k++){var p=document.createElement("i");p.className="jx-p";p.style.left=e.clientX+"px";p.style.top=e.clientY+"px";p.style.setProperty("--a",(k*360/N+R()*30-15).toFixed(0)+"deg");p.style.setProperty("--d",(26+R()*26).toFixed(0)+"px");document.body.appendChild(p);(function(q){setTimeout(function(){q.remove()},900)})(p)}},{passive:true});
})();
/* ===== v147 ENCYCLOPEDIA OF J-HORROR ===== */
(function(){
 var host=document.getElementById("wiki-host");if(!host)return;
 var red=window.matchMedia&&matchMedia("(prefers-reduced-motion:reduce)").matches;
 function B(ru,en){return '<span class="l-ru">'+ru+'</span><span class="l-en">'+en+'</span>'}
 function P(ru,en){return '<p>'+B(ru,en)+'</p>'}
 /* global defs */
 if(!document.getElementById("wk-defs")){var dd=document.createElement("div");dd.id="wk-defs";dd.setAttribute("aria-hidden","true");dd.style.cssText="position:absolute;width:0;height:0;overflow:hidden";
  dd.innerHTML='<svg width="0" height="0"><defs><linearGradient id="wkW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f2ec"/><stop offset=".62" stop-color="#d9d6cf" stop-opacity=".92"/><stop offset="1" stop-color="#d9d6cf" stop-opacity="0"/></linearGradient><linearGradient id="wkR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d8232b"/><stop offset="1" stop-color="#7a0a12" stop-opacity="0"/></linearGradient><radialGradient id="wkG" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff5a64" stop-opacity=".55"/><stop offset="1" stop-color="#ff5a64" stop-opacity="0"/></radialGradient><radialGradient id="wkH" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#bdf3e4" stop-opacity=".9"/><stop offset=".5" stop-color="#7fd6c0" stop-opacity=".35"/><stop offset="1" stop-color="#7fd6c0" stop-opacity="0"/></radialGradient></defs></svg>';
  document.body.appendChild(dd)}
 var hit='<path d="M0 0C-2-6-1-12 0-17C1-12 2-6 0 0Z"/>';
 function hitodama(x,y,s,d){return '<g class="wk-hd" style="animation-delay:-'+d+'s" transform="translate('+x+' '+y+') scale('+s+')"><circle r="9" fill="url(#wkH)"/><path d="M0 4C-4 2-5-3-2-8-1-5 0-4 1-9 5-4 5 2 0 4Z" fill="#cdfaf0" opacity=".9"/><path d="M0 4C3 1 3-2 1-5" stroke="#7fd6c0" stroke-width=".6" fill="none" opacity=".8"/></g>'}
 /* ghost portrait generator */
 function G(k){
  var o='<svg viewBox="0 0 100 140" class="wk-svg" role="img" aria-hidden="true">';
  o+='<circle cx="50" cy="60" r="44" fill="url(#wkG)" opacity=".5"/>';
  var hair='<path class="wk-hr" d="M38 22C35 8 65 8 62 22C67 50 70 92 63 122L59 122C61 82 58 50 56 30L44 30C42 50 39 82 41 122L37 122C30 92 33 50 38 22Z" fill="#06030a"/>';
  var face='<ellipse cx="50" cy="27" rx="9.5" ry="12" fill="#e8e5dd"/>';
  var body='<path d="M50 38C38 40 30 47 28 62L21 116C34 130 66 130 79 116L72 62C70 47 62 40 50 38Z" fill="url(#wkW)"/><path d="M41 42L50 66 59 42" stroke="#9a968d" stroke-width="1.1" fill="none"/><path d="M50 66V122" stroke="#b5b1a8" stroke-width=".6" opacity=".6"/>';
  var arms='<path d="M31 60Q20 82 26 100" stroke="#e8e5dd" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M69 60Q80 82 74 100" stroke="#e8e5dd" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M24 100l-1 6M26 101l0 7M28 100l1 6M72 100l-1 6M74 101l0 7M76 100l1 6" stroke="#e8e5dd" stroke-width="1.3" stroke-linecap="round"/>';
  if(k==="onryo"||k==="jibaku"){
   o+='<g class="wk-fl">'+body+arms+face+'<path d="M41 16L59 16 55 21 45 21Z" fill="#f4f2ec" opacity="0"/>'+hair
    +'<path d="M43 14Q49 34 45 50M50 12Q55 30 51 44M57 16Q53 30 56 46" stroke="#06030a" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".9"/>'
    +'<ellipse cx="52.5" cy="28" rx="2.6" ry="1.9" fill="#f6f6f0"/><circle cx="52.5" cy="28" r="1" fill="#d8232b"/><path d="M45 38q5 2 9 0" stroke="#7a0a12" stroke-width=".9" fill="none"/>'+(k==="jibaku"?'<path d="M10 124h22l-2-18h-18z" fill="#14090c" stroke="#d8232b" stroke-width=".8"/><ellipse cx="21" cy="106" rx="9" ry="2.4" fill="#06030a"/><path d="M13 100q8-3 16 0" stroke="#e8e5dd" stroke-width="1.6" fill="none" opacity=".9"/><circle cx="14" cy="97" r="2" fill="#e8e5dd" opacity=".8"/>':'')+'</g>'}
  else if(k==="ubume"){
   o+='<g class="wk-fl">'+body+'<path d="M31 60Q38 76 46 82M69 60Q62 76 54 82" stroke="#e8e5dd" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M40 72Q50 98 60 72Q58 88 50 94Q42 88 40 72Z" fill="#cfc9be"/><circle cx="50" cy="75" r="4" fill="#e8e5dd"/>'+face+hair+'<path d="M45 28q2 1.4 4 0M52 28q2 1.4 4 0" stroke="#3a2a30" stroke-width=".9" fill="none"/><path d="M47 34q3 1.6 6 0" stroke="#7a0a12" stroke-width=".9" fill="none"/><path d="M75 74l7 4-7 4z" fill="#f2b8bd" opacity=".9"/><circle cx="82" cy="78" r="2.4" fill="#f2b8bd" opacity=".9"/></g>'+hitodama(18,50,.7,0.4)}
  else if(k==="goryo"){
   o+='<g class="wk-fl"><path d="M50 36C36 38 26 48 24 64L16 118C32 134 68 134 84 118L76 64C74 48 64 38 50 36Z" fill="url(#wkW)"/><path d="M50 36L50 120" stroke="#8d8980" stroke-width=".8" opacity=".6"/>'+face+'<path d="M38 17C38 4 62 4 62 17L58 20Q50 15 42 20Z" fill="#0c0508"/><path d="M62 12Q74 8 78 16" stroke="#0c0508" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M45 27q2 1.2 4 0M52 27q2 1.2 4 0" stroke="#3a2a30" stroke-width=".9" fill="none"/><path d="M47 33q3 1.2 6 0" stroke="#7a0a12" stroke-width=".9" fill="none"/><path d="M33 66Q22 84 28 104M67 66Q78 84 72 104" stroke="#e8e5dd" stroke-width="5" stroke-linecap="round" fill="none"/></g><path class="wk-bolt" d="M82 0L72 24 80 24 70 52 90 20 80 20 88 0Z" fill="#ffe08a" opacity=".9"/>'}
  else if(k==="funa"){
   o+='<g class="wk-fl">'+body+arms+face+hair.replace('fill="#06030a"','fill="#0a1214"')+'<path d="M45 28q2 1.4 4 0M52 28q2 1.4 4 0" stroke="#3a2a30" stroke-width=".9" fill="none"/><path d="M69 66l14-6" stroke="#8a6a3a" stroke-width="1.6"/><ellipse cx="86" cy="58" rx="6" ry="3.4" fill="#2c1d12" stroke="#8a6a3a" stroke-width=".8"/></g><g class="wk-wv"><path d="M0 120Q12 112 24 120T48 120 72 120 100 118V140H0Z" fill="#12353a" opacity=".85"/><path d="M0 128Q14 121 28 128T56 128 84 128 100 126" stroke="#7fd6c0" stroke-width=".8" fill="none" opacity=".6"/></g>'}
  else if(k==="zashiki"){
   o+='<g class="wk-fl"><path d="M50 62C42 64 38 72 37 84L34 118C42 126 58 126 66 118L63 84C62 72 58 64 50 62Z" fill="#c9202a"/><path d="M44 66L50 84 56 66" stroke="#f4f2ec" stroke-width="1.3" fill="none"/><path d="M38 100Q50 108 62 100" stroke="#f4f2ec" stroke-width="1" fill="none" opacity=".7"/><circle cx="50" cy="50" r="11" fill="#eadfd0"/><path d="M39 50C38 38 62 38 61 50C60 44 56 42 50 42C44 42 40 44 39 50Z" fill="#06030a"/><path d="M39 46Q34 56 38 64M61 46Q66 56 62 64" stroke="#06030a" stroke-width="2.4" fill="none" stroke-linecap="round"/><circle cx="46" cy="52" r="1.2" fill="#06030a"/><circle cx="54" cy="52" r="1.2" fill="#06030a"/><circle cx="43.5" cy="56" r="2" fill="#e98a92" opacity=".6"/><circle cx="56.5" cy="56" r="2" fill="#e98a92" opacity=".6"/><path d="M47 58q3 2 6 0" stroke="#7a0a12" stroke-width=".9" fill="none"/><path d="M37 82Q28 92 30 100M63 82Q72 92 70 100" stroke="#eadfd0" stroke-width="4" stroke-linecap="round" fill="none"/></g><g class="wk-ball"><circle cx="82" cy="112" r="7" fill="#d8232b"/><path d="M76 108q6 4 12 0M75 114q7 4 14 0" stroke="#f4f2ec" stroke-width="1.2" fill="none"/></g>'}
  else if(k==="ikiryo"){
   o+='<g class="wk-dbl" opacity=".35" transform="translate(7 3)">'+body+face+hair+'</g><g class="wk-fl"><path d="M50 38C38 40 30 47 28 62L21 116C34 130 66 130 79 116L72 62C70 47 62 40 50 38Z" fill="#f2b8bd" opacity=".85"/><path d="M41 42L50 66 59 42" stroke="#8c3a44" stroke-width="1.1" fill="none"/><path d="M30 78Q50 90 70 78M26 100Q50 114 74 100" stroke="#d8232b" stroke-width="1" fill="none" opacity=".6"/>'+arms+face+hair+'<path d="M45 28q2 1.4 4 0M52 28q2 1.4 4 0" stroke="#3a2a30" stroke-width=".9" fill="none"/><path d="M47 34q3 1.6 6 0" stroke="#d8232b" stroke-width="1.2" fill="none"/></g>'+hitodama(84,30,.6,1.2)}
  else if(k==="fuyu"){
   o+='<g class="wk-fl"><circle cx="50" cy="60" r="30" fill="url(#wkH)"/><path d="M50 22C60 38 74 50 70 70 66 88 34 88 30 70 28 52 42 44 50 22Z" fill="#8ee6d0" opacity=".55"/><path d="M50 40C57 50 62 58 59 70 56 80 44 80 41 70 39 60 46 54 50 40Z" fill="#e6fff8" opacity=".85"/><ellipse cx="45.5" cy="62" rx="2.2" ry="3.4" fill="#0a2a26"/><ellipse cx="54.5" cy="62" rx="2.2" ry="3.4" fill="#0a2a26"/><ellipse cx="50" cy="72" rx="2" ry="3" fill="#0a2a26"/></g>'+hitodama(18,32,.5,.6)+hitodama(84,88,.55,1.5)}
  else if(k==="anat"){
   o+='<g class="wk-fl">'+body+arms+face+'<path d="M43 15L57 15 54 22 46 22Z" fill="#f4f2ec" stroke="#9a968d" stroke-width=".5"/>'+hair+'<path d="M45 28q2 1.4 4 0M52 28q2 1.4 4 0" stroke="#3a2a30" stroke-width=".9" fill="none"/></g>'+hitodama(14,40,.7,0)+hitodama(86,70,.6,1.3)}
  return o+'</svg>'}
/* wiki images */
 var WI={};"wk_yurei wk_kaidan wk_onryo wk_yokai wk_legends wk_cinema y_onryo y_ubume y_goryo y_funa yk_kitsune yk_tanuki yk_kappa yk_oni yk_tsukumogami yk_nurarihyon l_kuchisake l_hanako l_teke l_kisaragi l_hasshaku l_kunekune wk_candles wk_anatomy wk_cover yk_yukionna yk_jorogumo yk_rokurokubi yk_noppera yk_gashadokuro yk_hitotsume y_zashiki y_ikiryo y_jibaku y_fuyu k_oiwa k_okiku k_otsuya o_michizane o_sawara o_masakado".split(" ").forEach(function(n){WI[n]=1});
 function FG(key,img){return WI[img]?'<div class="wk-fig ph"><img src="/horror-aesthetic/img/wiki/'+img+'.webp" alt="" width="800" height="1000" loading="lazy" decoding="async"></div>':'<div class="wk-fig">'+G(key)+'</div>'}
 function KJ(k,img){return WI[img]?'':'<div class="wk-kj" aria-hidden="true">'+k+'</div>'}
 function BAN(n){return WI[n]?'<div class="wk-ban"><img src="/horror-aesthetic/img/wiki/'+n+'.webp" alt="" width="1600" height="533" loading="lazy" decoding="async"></div>':''}
 /* data */
 var YU=[
  ["onryo","怨霊","Онрё","Onryō","Мстительный дух. Умер с обидой и приносит бедствия: болезни, смерти, молнии. Месть духа называется татари. Самый сильный и самый трудный для усмирения.","A vengeful spirit that died with a grudge and brings disaster: sickness, death, lightning. Its revenge is called tatari. The strongest type and the hardest to appease."],
  ["ubume","姑獲鳥","Убумэ","Ubume","Мать, умершая в родах или оставившая маленьких детей. Возвращается ночью, держит ребёнка на руках и иногда приносит сладости.","A mother who died in childbirth or left small children behind. She returns at night holding a baby and sometimes brings sweets."],
  ["goryo","御霊","Горё","Goryō","Дух знатного человека, погибшего в политической борьбе или от эпидемии. Его обожествляют, чтобы успокоить: так появились храмы Тэндзин.","The spirit of a noble who died in a political struggle or an epidemic. It is deified to calm it, which is how the Tenjin shrines began."],
  ["funa","船幽霊","Фунаюрэй","Funayūrei","Призраки утонувших в море. Поднимаются из волн, просят ковш, а потом заливают лодку водой.","Ghosts of those who drowned at sea. They rise from the waves, ask for a ladle and then flood the boat with it."],
  ["zashiki","座敷童","Дзасики-вараси","Zashiki-warashi","Детский дух старого дома, особенно в префектуре Ивате. Шалит, но приносит достаток тем, кто его принял.","A child spirit of an old house, especially in Iwate Prefecture. Mischievous, but brings prosperity to those who welcome it."],
  ["ikiryo","生霊","Икирё","Ikiryō","«Живой призрак»: ревность или ярость отделяет дух от тела живого человека. Самый известный случай: госпожа Рокудзё из «Повести о Гэндзи».","A «living ghost»: jealousy or rage detaches the spirit from a living person's body. The famous case is Lady Rokujō in The Tale of Genji."],
  ["jibaku","地縛霊","Дзибакурэй","Jibakurei","Дух, привязанный к месту. Окику из замка Химэдзи не может уйти от колодца и считает тарелки.","An earthbound spirit tied to one place. Okiku of Himeji Castle cannot leave her well and keeps counting plates."],
  ["fuyu","浮遊霊","Фую-рэй","Fuyūrei","Блуждающий дух без цели и дома. Видят его чаще всего как хитодама, бледный огонь над землёй.","A wandering spirit with no goal and no home. Usually seen as hitodama, a pale flame above the ground."]
 ];
 var ANAT=[
  ["1",B("Треугольник на лбу (тэнкан)","Forehead triangle (tenkan)"),B("белая повязка, которую надевали покойнику","a white cloth put on the dead"),"36 20"],
  ["2",B("Чёрные растрёпанные волосы","Long black unbound hair"),B("женщины носили волосы убранными и распускали их только на похоронах","women wore their hair up and loosened it only for funerals"),"70 48"],
  ["3",B("Белое погребальное кимоно","White burial kimono"),B("белый цвет в синто означает чистоту и смерть","white means both purity and death in Shinto"),"26 74"],
  ["4",B("Нет ног, руки повисли","No legs, limp hands"),B("так призраков рисовали в гравюрах укиё-э, затем это взяли в кабуки","so ghosts were drawn in ukiyo-e, later taken up by kabuki"),"72 106"],
  ["5",B("Хитодама","Hitodama"),B("синие, зелёные или фиолетовые огоньки рядом с духом","blue, green or violet flames beside the spirit"),"14 40"]
 ];
 var TALES=[
  ["Дверь в конце коридора всегда была закрыта. Сегодня ночью за ней кто-то считает шаги.","The door at the end of the hall was always shut. Tonight someone behind it is counting steps."],
  ["Мать сказала: не отвечай, если позовут с колодца. Но голос был маминым.","Mother said: never answer a voice from the well. But the voice was Mother's."],
  ["В зеркале моё отражение моргнуло на секунду позже меня. С тех пор оно моргает всё раньше.","My reflection blinked a second after me. Since then it blinks earlier each night."],
  ["На старой фотографии нас было четверо. Мы пришли втроём.","The old photograph shows four of us. We came as three."],
  ["Фонарь у ворот горит синим. Никто его не зажигал.","The lantern at the gate burns blue. Nobody lit it."],
  ["Она спросила: «Я красивая?» Я промолчал, и она медленно сняла маску.","She asked, «Am I pretty?» I said nothing, and she slowly took off the mask."],
  ["Тарелки в шкафу: восемь, девять… Откуда в доме слышен счёт?","The plates in the cupboard: eight, nine… who is counting in the house?"],
  ["Последний поезд приехал на станцию, которой нет в расписании.","The last train arrived at a station that is not on the timetable."],
  ["Телефон звонит из пустой комнаты, и на экране моё имя.","The phone rings in the empty room, and the screen shows my own name."],
  ["Девяносто девять свечей погасли. Сотая горит слишком ровно.","Ninety-nine candles are out. The hundredth burns too steadily."]
 ];
 var KAI=[
  ["四谷怪談","Ёцуя кайдан","Yotsuya Kaidan","Оива","Oiwa","Цуруя Нанбоку IV, кабуки, 1825","Tsuruya Nanboku IV, kabuki, 1825","Верная жена Оива отравлена по замыслу мужа Иэмона. Яд уродует ей лицо, и она умирает. Призрак является Иэмону в лицах, лампах и тенях, пока он не сходит с ума. Месть здесь психологическая.","Faithful Oiwa is poisoned at her husband Iemon's own scheme. The poison ruins her face and she dies. Her ghost appears to Iemon in faces, lamps and shadows until he goes mad. The revenge is psychological.","onryo"],
  ["番町皿屋敷","Банчō сараясики","Banchō Sarayashiki","Окику","Okiku","замок Химэдзи, Эдо","Himeji Castle, Edo period","Служанку обвиняют в пропаже десятой драгоценной тарелки, когда она отказала самураю, и бросают в колодец. Теперь она считает тарелки и кричит на десятой. Кто дошёл до девятой, скоро умрёт.","A maid is accused of losing the tenth precious plate after refusing a samurai, and is thrown into a well. Now she counts plates and screams at the tenth. Whoever hears her reach nine will die soon.","jibaku"],
  ["牡丹灯籠","Ботан дорō","Botan Dōrō","Оцую","Otsuyu","Санютэй Энтё, ракуго, 1884","Sanyūtei Enchō, rakugo, 1884","Вдовец встречает красавицу с фонарём в виде пиона. Она приходит к нему каждую ночь, пока сосед не видит в окно, что в его объятиях скелет. Монах даёт оберег, но юноша возвращается и умирает.","A widower meets a beauty carrying a peony lantern. She visits nightly until a neighbour sees a skeleton in his arms. A monk gives a charm, but he goes back to her grave and dies.","ubume"]
 ];
 var ONR=[
  ["菅原道真","Сугавара-но Митидзанэ","Sugawara no Michizane","Изгнан из столицы и умер в ссылке. После смерти молнии били по его врагам. Двор вернул ему ранг, и его обожествили как Тэндзин: так появились храмы Тэммангу.","Exiled from the capital, he died in banishment. After his death lightning struck his enemies. The court restored his rank and he was deified as Tenjin, which is how the Tenmangū shrines began."],
  ["早良親王","Принц Савара","Prince Sawara","Обвинён братом, императором Камму, в заговоре, возможно ложно, и умер голодом в изгнании. Бедствия списали на его дух. Историки считают, что Камму перенёс столицу, отчасти чтобы уйти от его гнева.","Accused by his brother, Emperor Kanmu, of a plot, possibly falsely, he died fasting in exile. Disasters were blamed on his spirit. Scholars think Kanmu moved the capital partly to escape his wrath."],
  ["平将門","Тайра-но Масакадо","Taira no Masakado","Курган с его головой стоит между небоскрёбами возле токийского вокзала. Попытки его перенести, по рассказам, оканчивались смертью рабочих и авариями, и курган бережно сохраняют до сих пор.","His head mound stands between skyscrapers near Tokyo Station. Attempts to move it reportedly ended in worker deaths and accidents, and the mound is still carefully maintained."]
 ];
 var YK=[
  ["狐","Кицунэ","Kitsune","Лиса-оборотень. Чем больше хвостов, тем старше и сильнее. Может быть посланником Инари, а может обманывать людей.","A shape-shifting fox. More tails mean greater age and power. She may serve Inari, or may trick people."],
  ["狸","Тануки","Tanuki","Енот-оборотень. Превращает листья в деньги и любит шутки. Часто добродушен, но может сбить путника с дороги.","A shape-shifting raccoon dog. Turns leaves into money and loves pranks. Often good-natured, but can lead travellers astray."],
  ["河童","Каппа","Kappa","Водяной с чашей воды на голове. Теряет силу, если вода выльется. Любит огурцы, утаскивает под воду неосторожных.","A water imp with a dish of water on its head. Loses its power if the water spills. Loves cucumbers and drags the careless underwater."],
  ["鬼","Они","Oni","Рогатые демоны-великаны. Их изгоняют бобами на празднике Сэцубун. В искусстве бывают красными, синими, чёрными.","Horned giant demons. Driven out with beans at Setsubun. Shown in art as red, blue or black."],
  ["付喪神","Цукумогами","Tsukumogami","Предметы, которые оживают после ста лет службы, особенно если с ними плохо обращались. Зонтик с глазом и языком, ожившая лампа.","Objects that come alive after a hundred years of use, especially if mistreated. A umbrella with an eye and tongue, a living lamp."],
  ["ぬらりひょん","Нурарихён","Nurarihyon","Хитрый ёкай, который заходит в дом как гость и сидит как хозяин. Считается предводителем ёкаев, хотя вреда почти не делает.","A cunning yōkai who walks into a house like a guest and sits like the owner. Called the leader of yōkai, though he does little harm."],
  ["雪女","Юки-онна","Yuki-onna","Снежная женщина в белом кимоно, что приходит в метель. Её дыхание замораживает путников. Самая известная история: Хирн записал её в «Квайдан» (1904) о дровосеке Минокити, которого она пощадила, взяв обет молчания.","The snow woman in a white kimono who comes in a blizzard. Her breath freezes travellers. The best-known tale is in Hearn's Kwaidan (1904): the woodcutter Minokichi, spared on a promise of silence."],
  ["絡新婦","Дзёро-гумо","Jorōgumo","Паук, который принимает облик красавицы, заманивает мужчин в дом и опутывает нитями. Образ закрепили гравюры эпохи Эдо, а название взято у настоящего паука-шёлкопряда.","A spider that takes the shape of a beauty, lures men into her house and binds them in thread. The image was fixed by Edo-period prints, and the name comes from a real orb-weaver spider."],
  ["ろくろ首","Рокуро-куби","Rokurokubi","Женщина, у которой по ночам вытягивается шея, а голова блуждает по дому. Днём она обычная. Есть и вариант нукэ-куби, где голова отделяется совсем. Рассказы о них есть и у Хирна.","A woman whose neck stretches at night while her head roams the house. By day she is ordinary. A variant, nukekubi, has the head detach entirely. Hearn also retells such tales."],
  ["のっぺらぼう","Ноппэрабо","Nopperabō","Безликий призрак: у него гладкое лицо без глаз, носа и рта. Он встречает путника на ночной дороге, а когда тот в ужасе бежит, оказывается, что и следующий встречный такой же. Хирн рассказал это как «Мудзина».","A faceless ghost with a smooth face and no eyes, nose or mouth. He meets a traveller on a night road, and when the man flees in terror the next person he meets is faceless too. Hearn told it as «Mujina»."],
  ["がしゃどくろ","Гасядокуро","Gashadokuro","Гигантский скелет, собранный из костей тех, кто умер без погребения: от голода или на войне. Ходит по ночам и слышен по скрежету костей. Образ относительно новый и стал популярным в XX веке.","A giant skeleton formed from the bones of those who died unburied, of hunger or in war. It walks at night and is heard by the rattle of bones. A relatively recent image, popular since the twentieth century."],
  ["一つ目小僧","Хитоцумэ-кодзо","Hitotsume-kozō","Одноглазый мальчик-послушник. Выскакивает перед прохожим, чтобы напугать, и на этом обычно всё кончается. Один из самых безобидных и древних ёкай.","A one-eyed boy acolyte. He jumps out at passers-by to frighten them, and that is usually all. One of the most harmless and oldest yōkai."]
 ];
 var LEG=[
  ["口裂け女","Кутисакэ-онна","Kuchisake-onna","1978–79","Женщина в маске спрашивает ребёнка, красива ли она. Если ответить «да», она снимает маску: рот разрезан от уха до уха. Слух вышел из Яоцу в префектуре Гифу и за полгода охватил страну. Страх незнакомцев на ночных улицах: дети ходили на вечерние курсы.","A masked woman asks a child whether she is pretty. If you say yes she removes the mask: her mouth is slit ear to ear. The rumour began in Yaotsu, Gifu and covered the country within about six months. It gave form to fear of strangers on night streets, since children went to evening cram school."],
  ["花子さん","Ханако-сан","Hanako-san","1950-е","Призрак девочки в школьном туалете. Нужно постучать в третью кабинку и спросить, здесь ли она. Из мест, где легенды передают шёпотом на переменах.","The ghost of a girl in a school toilet. You knock on the third stall and ask if she is there. Passed in whispers between classes."],
  ["テケテケ","Тэкэ-тэкэ","Teke Teke","1960-е","Женщина, разрезанная поездом пополам. Ползёт на руках по ночным дорогам со звуком «тэкэ-тэкэ» и настигает тех, кто не успел убежать.","A woman cut in half by a train. She crawls on her hands along night roads with the sound «teke teke» and catches those who cannot run."],
  ["きさらぎ駅","Станция Кисараги","Kisaragi Station","2004","Пассажир садится на знакомый поезд и приезжает на станцию без людей, которой нет на карте. Родилась на форуме 2channel как рассказ от первого лица. Читатели сами дописывали её.","A commuter boards a familiar train and arrives at an empty station that is not on the map. Born on the 2channel forum as a first-person account. Readers added to it themselves."],
  ["八尺様","Хассяку-сама","Hasshaku-sama","2000-е","Женщина выше двух метров в белом платье. Её голос звучит как «по-по-по», она выбирает жертву в деревне.","A woman over two metres tall in a white dress. Her voice sounds like «po po po», and she picks a victim in the village."],
  ["くねくね","Кунэкунэ","Kunekune","2000-е","Белая фигура, что извивается на рисовом поле. Тот, кто поймёт, что это, сходит с ума.","A white figure that writhes in a paddy field. Whoever understands what it is goes insane."]
 ];
 var CIN=[
  ["1954","Годзилла","Godzilla","Послевоенный страх перед радиацией рождает чудовище и приучает кино к ужасу.","Postwar fear of radiation gives birth to a monster and trains cinema in horror."],
  ["1964","Онибаба · Квайдан","Onibaba · Kwaidan","Кабуки и но на экране. «Квайдан» Кобаяси закрепил длинные чёрные волосы на лице, а «Онибаба» Синдо показал маску и страх войны.","Kabuki and Noh on screen. Kobayashi's Kwaidan fixed long black hair over the face, and Shindō's Onibaba brought mask and war-dread."],
  ["1989","Сладкий дом · Тэцуо","Sweet Home · Tetsuo","Куросава создаёт кино про дом с привидениями. «Тэцуо» открывает японский боди-хоррор.","Kurosawa shapes the haunted-house film. Tetsuo opens Japanese body horror."],
  ["1991","Страшные реальные истории","Scary True Stories","Норио Цуруда начинает психологический J-Horror: тихий, будничный страх.","Norio Tsuruda begins psychological J-Horror: quiet, everyday dread."],
  ["1998","Звонок (Ringu)","Ringu","Садако, колодец и проклятая видеокассета. Страх переходит в технологии. Рождается слово «J-Horror».","Sadako, the well and the cursed videotape. Fear moves into technology. The word «J-Horror» is born."],
  ["2002","Проклятие · Тёмные воды","Ju-On · Dark Water","«Проклятие» Симидзу: дом, который не отпускает. «Тёмные воды» Накаты: страх матери за ребёнка. В США выходят ремейки.","Shimizu's Ju-On: a house that will not let go. Nakata's Dark Water: a mother's fear for her child. US remakes follow."],
  ["2017","Один отрезанный","One Cut of the Dead","Японский зомби-фильм с минимальным бюджетом, ставший хитом проката.","A micro-budget Japanese zombie film that became a box-office hit."]
 ];
 /* cards */
 function ghostCard(y){return '<article class="wk-c wk-gh">'+FG(y[0],"y_"+y[0])+'<div class="wk-b">'+KJ(y[1],"y_"+y[0])+'<h4>'+B(y[2],y[3])+'</h4>'+P(y[4],y[5])+'</div></article>'}
 function pTab(id,body){return '<div class="wk-p" id="wk-p-'+id+'" role="tabpanel" hidden>'+body+'</div>'}
 /* tab: yurei */
 var yu='<div class="wk-intro">'+P("Когда человек умирает, его душа (рэйкон) ждёт, пока выполнят похоронные обряды, а потом присоединяется к предкам. Каждый август, на празднике Обон, предков встречают и провожают. Если смерть была внезапной или жестокой, если обряды пропущены или осталась сильная обида, душа не уходит и становится юрэй. Чем слабее и обиднее жилось человеку, тем сильнее его призрак.","When a person dies, the soul (reikon) waits until the funeral rites are done, then joins the ancestors. Every August at Obon the ancestors are welcomed and sent off. If the death was sudden or violent, the rites were skipped, or a strong grudge remains, the soul stays and becomes a yūrei. The weaker and more wronged the person was in life, the stronger the ghost.")+'</div>';
 yu+='<h3 class="wk-h">'+B("Как выглядит юрэй","Anatomy of a yūrei")+'</h3><div class="wk-anat"><div class="wk-fig big'+(WI.wk_anatomy?' ph':'')+'">'+(WI.wk_anatomy?'<img src="/horror-aesthetic/img/wiki/wk_anatomy.webp" alt="" width="800" height="1000" loading="lazy" decoding="async">'+[["1","50","3.2"],["2","57","42"],["3","48","73"],["4","38","50"],["5","86","45"]].map(function(q){return '<span class="wk-pn" style="left:'+q[1]+'%;top:'+q[2]+'%">'+q[0]+'</span>'}).join(""):G("anat").replace('</svg>',ANAT.map(function(a){var p=a[3].split(" ");return '<g class="wk-pin"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="4.2" fill="#d8232b" stroke="#f4f2ec" stroke-width=".7"/><text x="'+p[0]+'" y="'+(+p[1]+1.6)+'" text-anchor="middle" font-size="5" fill="#fff" font-family="monospace" font-weight="700">'+a[0]+'</text></g>'}).join("")+'</svg>'))+'</div><ol class="wk-leg">'+ANAT.map(function(a){return '<li><b>'+a[1]+'</b><span>'+a[2]+'</span></li>'}).join("")+'<li><b>'+B("Время и место","Time and place")+'</b><span>'+B("около 2:00–2:30 ночи и всегда рядом с местом смерти","around 2:00–2:30 at night, always near the place of death")+'</span></li></ol></div>';
 yu+='<h3 class="wk-h">'+B("Восемь видов","Eight kinds")+'</h3><div class="wk-grid">'+YU.map(ghostCard).join("")+'</div>';
 yu+='<div class="wk-note"><b>'+B("Как успокоить юрэй","How to calm a yūrei")+'</b>'+P("Помочь ему закончить дело: отомстить, исполнить любовь или похоронить как положено. Против сильных онрё зовут буддийских монахов и ямабуси. Офуда, бумажный оберег, клеят на дверь или на лоб призрака.","Help it finish what holds it: take revenge, fulfil a lost love, or give it a proper burial. Against strong onryō, Buddhist priests and yamabushi are called. An ofuda, a paper charm, is pasted on the door or the ghost's forehead.")+'</div>';
 /* tab: kaidan */
 var ka='<div class="wk-intro">'+P("Кайдан значит «странные истории». Основа жанра: сборник Асаи Рёи «Отоги бока» (1666). Позже Уэда Акинари написал «Угэцу моногатари» (1776), а Лафкадио Хирн издал «Квайдан» (1904).","Kaidan means «strange tales». The genre rests on Asai Ryōi's Otogi Bōko (1666). Later Ueda Akinari wrote Ugetsu Monogatari (1776), and Lafcadio Hearn published Kwaidan (1904).")+'</div>';
 ka+=BAN("wk_candles")+'<h3 class="wk-h">'+B("Сто свечей","One hundred candles")+'</h3><div class="wk-candles" id="wk-can"><p class="wk-hint">'+B("Хякумоногатари кайданкай: рассказывают по истории и гасят по свече. Нажимайте на ряд свечей, чтобы погасить следующую. Когда погаснет сотая, наступит темнота.","Hyakumonogatari kaidankai: one tale each, one candle snuffed per tale. Tap the candle rows to put out the next one. When the hundredth goes out, the dark arrives.")+'</p><div class="wk-cgrid" id="wk-cg" role="button" tabindex="0" aria-label="Snuff a candle"></div><div class="wk-ctale" id="wk-ct" aria-live="polite"></div><div class="wk-cnt" id="wk-cn"></div><div class="wk-dark" id="wk-dk" hidden><div class="wk-dfig">'+G("onryo")+'</div><p>'+B("Сотая свеча погасла. Здесь кто-то есть.","The hundredth candle is out. Something is here.")+'</p><button type="button" class="wk-btn" id="wk-rs">'+B("Зажечь свечи снова","Light them again")+'</button></div></div>';
 ka+='<h3 class="wk-h">'+B("Три великих кайдан","Three great kaidan")+'</h3><div class="wk-grid">'+KAI.map(function(k,ki){var im=["k_oiwa","k_okiku","k_otsuya"][ki];return '<article class="wk-c wk-gh">'+FG(k[9],im)+'<div class="wk-b">'+KJ(k[0],im)+'<h4>'+B(k[1],k[2])+' · '+B(k[3],k[4])+'</h4><div class="wk-src">'+B(k[5],k[6])+'</div>'+P(k[7],k[8])+'</div></article>'}).join("")+'</div>';
 ka+='<h3 class="wk-h">'+B("Лента времени","Timeline")+'</h3><ol class="wk-tl">'+[["1666","Асаи Рёи, «Отоги бока»","Asai Ryōi, Otogi Bōko"],["1776","Уэда Акинари, «Угэцу моногатари»","Ueda Akinari, Ugetsu Monogatari"],["1825","Нанбоку IV, «Ёцуя кайдан» на сцене кабуки","Nanboku IV stages Yotsuya Kaidan in kabuki"],["1884","Санютэй Энтё записывает «Ботан дорō»","Sanyūtei Enchō's Botan Dōrō is transcribed"],["1889–92","Ёситоси рисует «Тридцать шесть призраков»","Yoshitoshi draws his Thirty-six Ghosts"],["1904","Лафкадио Хирн, «Квайдан»","Lafcadio Hearn, Kwaidan"],["1990-е","«Документальные» кайдан, «Син Мимибукуро»","«Documentary» kaidan, Shin Mimibukuro"],["2010-е","Кайдан на YouTube и в подкастах","Kaidan on YouTube and in podcasts"]].map(function(t){return '<li><time>'+t[0]+'</time><span>'+B(t[1],t[2])+'</span></li>'}).join("")+'</ol>';
 /* tab: onryo */
 var on='<div class="wk-intro">'+P("Месть онрё называется татари. В вере горё шинко считалось, что духи людей, умерших несчастной смертью, вызывают бедствия, и их нужно обожествить, чтобы успокоить. Так злая сила превращалась в божество-покровителя.","An onryō's revenge is called tatari. In goryō belief the spirits of those who died unfortunate deaths cause disasters and must be enshrined as kami to be calmed. Thus a harmful force became a protective deity.")+'</div>';
 on+='<h3 class="wk-h">'+B("Три великих онрё Японии","Japan's three great onryō")+'</h3><div class="wk-grid">'+ONR.map(function(r,i){var im=["o_michizane","o_sawara","o_masakado"][i];return '<article class="wk-c wk-gh">'+FG(i==0?"goryo":i==1?"onryo":"jibaku",im)+'<div class="wk-b">'+KJ(r[0],im)+'<h4>'+B(r[1],r[2])+'</h4>'+P(r[3],r[4])+'</div></article>'}).join("")+'</div>';
 on+='<div class="wk-note"><b>'+B("Современные онрё","Modern onryō")+'</b>'+P("Садако из «Звонка» и Каяко из «Проклятия» сохранили образ оскорблённой женщины, но связаны уже не с политикой и храмами, а с технологией и разрушенной семьёй.","Sadako of Ringu and Kayako of Ju-On keep the wronged-woman archetype, but are tied not to politics and shrines but to technology and the broken family.")+'</div>';
 /* tab: yokai */
 var yk='<div class="wk-intro">'+P("Ёкай: общее слово для японских чудищ и духов. Учёный Иноуэ Энрё в эпоху Мэйдзи расширил его, а «мононокэ» стало означать любую необузданную силу.","Yōkai is the general word for Japanese monsters and spirits. The Meiji scholar Inoue Enryō widened it, and «mononoke» came to mean any untamed power.")+'</div><div class="wk-grid wk-grid2">'+YK.map(function(y,yi){var im="yk_"+["kitsune","tanuki","kappa","oni","tsukumogami","nurarihyon","yukionna","jorogumo","rokurokubi","noppera","gashadokuro","hitotsume"][yi];return '<article class="wk-c wk-yk">'+(WI[im]?FG("",im):'<div class="wk-kj big" aria-hidden="true">'+y[0]+'</div>')+'<div class="wk-b"><h4>'+B(y[1],y[2])+'</h4>'+P(y[3],y[4])+'</div></article>'}).join("")+'</div>';
 /* tab: legends */
 var lg='<div class="wk-intro">'+P("Городские легенды расцвели в конце 1980-х и начале 1990-х, расходясь через журналы и телевидение. После 1995 года (землетрясение в Кобе и теракт в метро) сверхъестественные истории потускнели и вернулись уже в интернете.","Urban legends bloomed in the late 1980s and early 1990s, spreading by magazines and television. After 1995 (the Kobe earthquake and subway attack) supernatural stories faded and came back on the internet.")+'</div><div class="wk-grid wk-grid2">'+LG()+'</div>';
 function LG(){return LEG.map(function(l,li){var im="l_"+["kuchisake","hanako","teke","kisaragi","hasshaku","kunekune"][li];return '<article class="wk-c wk-lg">'+(WI[im]?FG("",im):'<div class="wk-kj big" aria-hidden="true">'+l[0]+'</div>')+'<div class="wk-b"><h4>'+B(l[1],l[2])+' <small>'+l[3]+'</small></h4>'+P(l[4],l[5])+'</div></article>'}).join("")}
 /* tab: cinema */
 var ci='<div class="wk-intro">'+P("J-Horror вырос из кабуки, но и гравюр: Хокусай нарисовал «Сто историй о призраках», сохранилось пять листов. Колодец Окику из этих гравюр считается прародителем колодца Садако.","J-Horror grew from kabuki and from prints: Hokusai drew One Hundred Horror Stories, and five sheets survive. The well of Okiku in those prints is thought to be the ancestor of Sadako's well.")+'</div><ol class="wk-tl big">'+CIN.map(function(c){return '<li><time>'+c[0]+'</time><span><b>'+B(c[1],c[2])+'</b>'+B(c[3],c[4])+'</span></li>'}).join("")+'</ol><div class="wk-chips">'+[["Длинные чёрные волосы","Long black hair"],["Колодец","The well"],["Видеокассета","The videotape"],["Распавшаяся семья","The broken family"],["Медленный страх","Slow dread"],["Проклятый дом","The cursed house"]].map(function(c){return '<span>'+B(c[0],c[1])+'</span>'}).join("")+'</div>';
 yu=BAN("wk_yurei")+yu;ka=BAN("wk_kaidan")+ka;on=BAN("wk_onryo")+on;yk=BAN("wk_yokai")+yk;lg=BAN("wk_legends")+lg;ci=BAN("wk_cinema")+ci;
 var T=[["yu","幽","Юрэй","Yūrei",yu],["ka","談","Кайдан","Kaidan",ka],["on","怨","Онрё","Onryō",on],["yk","妖","Ёкай","Yōkai",yk],["lg","噂","Легенды","Legends",lg],["ci","映","Кино","Cinema",ci]];
 host.innerHTML=(WI.wk_cover?'<div class="wk-cover"><img src="/horror-aesthetic/img/wiki/wk_cover.webp" alt="" width="1200" height="628" loading="lazy" decoding="async"></div>':'')+'<div class="wk-tabs" role="tablist">'+T.map(function(t,i){return '<button type="button" role="tab" data-w="'+t[0]+'" aria-selected="'+(i==0)+'"><i aria-hidden="true">'+t[1]+'</i>'+B(t[2],t[3])+'</button>'}).join("")+'</div>'+T.map(function(t){return pTab(t[0],t[4])}).join("");
 function show(id){
  host.querySelectorAll(".wk-tabs button").forEach(function(b){b.setAttribute("aria-selected",String(b.dataset.w===id))});
  host.querySelectorAll(".wk-p").forEach(function(p){p.hidden=p.id!=="wk-p-"+id});
  try{sessionStorage.setItem("wkTab",id)}catch(e){}}
 host.querySelector(".wk-tabs").addEventListener("click",function(e){var b=e.target.closest("button");if(b)show(b.dataset.w)});
 var first="yu";try{first=sessionStorage.getItem("wkTab")||"yu"}catch(e){}if(!document.getElementById("wk-p-"+first))first="yu";show(first);
 /* candles */
 var cg=document.getElementById("wk-cg"),cn=document.getElementById("wk-cn"),ct=document.getElementById("wk-ct"),dk=document.getElementById("wk-dk"),left=100,html="",i;
 for(i=0;i<100;i++)html+='<i class="wk-cd"><b></b></i>';cg.innerHTML=html;
 var cds=cg.children;
 function upd(){cn.innerHTML=B("Осталось свечей: ","Candles left: ")+'<b>'+left+'</b>'}
 function snuff(){if(left<=0)return;var c=cds[100-left];c.classList.add("off");left--;upd();
  var t=TALES[(100-left-1)%TALES.length];ct.innerHTML='<span class="n">'+(100-left)+'</span> '+B(t[0],t[1]);
  if(left===0){setTimeout(function(){dk.hidden=false;cg.classList.add("dead")},red?0:700)}}
 cg.addEventListener("click",snuff);cg.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();snuff()}});
 document.getElementById("wk-rs").addEventListener("click",function(){left=100;for(var j=0;j<100;j++)cds[j].classList.remove("off");cg.classList.remove("dead");dk.hidden=true;ct.innerHTML="";upd()});
 upd();
})();
