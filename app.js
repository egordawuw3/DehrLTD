// ================= БАЗА ДАННЫХ ВАКАНСИЙ =================
const vacancies = [
    { city: "city_kat", title: "vac_1_t", price: "45₪/h", desc: "vac_1_d", img: "assets/plastic.jpg", fallback: "", tags: ["tag_12h", "tag_shifts"], hidden: false },
    { city: "city_hol", title: "vac_2_t", price: "44₪/h", desc: "vac_2_d", img: "assets/alyumenivi.jpg", fallback: "", tags: ["tag_bonus", "tag_men"], hidden: false },
    { city: "city_ash", title: "vac_3_t", price: "45₪/h", desc: "vac_3_d", img: "assets/wood_box.jpg", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_up45", "tag_men"], hidden: false },
    { city: "city_or", title: "vac_4_t", price: "55₪/h", desc: "vac_4_d", img: "assets/xt.jpg", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_train", "tag_flex"], hidden: true },
    { city: "city_yeh", title: "vac_5_t", price: "50₪/h", desc: "vac_5_d", img: "assets/keitering.jpg", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_mw", "tag_up50"], hidden: true },
    { city: "city_ash", title: "vac_6_t", price: "47₪/h", desc: "vac_6_d", img: "assets/meet-warehouse.jpg", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_food", "tag_flex"], hidden: true },
    { city: "city_rish", title: "vac_7_t", price: "550₪/d", desc: "vac_7_d", img: "assets/rishon.jpg", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_height", "tag_men"], hidden: true },
    { city: "city_kir", title: "vac_8_t", price: "60₪/h", desc: "vac_8_d", img: "assets/builder.jpg", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_transp", "tag_mw"], hidden: true },
    { city: "city_cent", title: "vac_9_t", price: "55₪/h", desc: "vac_9_d", img: "assets/ot.png", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_transp", "tag_height"], hidden: true },
    { city: "city_tlv", title: "vac_11_t", price: "65₪/h", desc: "vac_11_d", img: "assets/uborshik.png", fallback: "", tags: ["tag_women", "tag_flex"], hidden: true },
    { city: "city_ashk", title: "vac_12_t", price: "45₪/h", desc: "vac_12_d", img: "assets/glass.png", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_shifts", "tag_mw"], hidden: true },
    { city: "city_ash", title: "vac_13_t", price: "50₪/h", desc: "vac_13_d", img: "assets/podrostki.png", fallback: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", tags: ["tag_night", "tag_heb"], hidden: true },
    { city: "city_rhash", title: "vac_14_t", price: "48₪/h", desc: "vac_14_d", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp", fallback: "", tags: ["tag_women", "tag_flex"], hidden: true },
    { city: "city_tlv", title: "vac_15_t", price: "46₪/h", desc: "vac_15_d", img: "assets/nao-feka.png", fallback: "", tags: ["tag_shabbat", "tag_morn"], hidden: true },
    { city: "city_rgan", title: "vac_16_t", price: "46₪/h", desc: "vac_16_d", img: "assets/merkaz.png", fallback: "", tags: ["tag_up45", "tag_women"], hidden: true },
    { city: "city_tlv", title: "vac_17_t", price: "46₪/h", desc: "vac_17_d", img: "assets/domdushevnih.png", fallback: "", tags: ["tag_shabbat", "tag_up65"], hidden: true }
];

const intVacancies = [
    { city: "city_gren", title: "vac_int_t", price: "$2000/mo", desc: "vac_int_d", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&fm=webp", fallback: "", tags: ["tag_visa", "tag_house"] }
];

// ================= СЛОВАРЬ ПЕРЕВОДОВ =================
const translations = {
  ru: {
    nav_about: "О Компании", nav_vacancies: "Вакансии", nav_principles: "Принципы", nav_employers: "Работодателям", nav_recruiting: "Рекрутерам", btn_contact: "Связаться",
    hero_subtitle: "Strategic Workforce Solutions", hero_title_1: "Трудовые", hero_title_2: "Ресурсы.", hero_title_3: "Надёжно.",
    hero_desc: "DEHR Ltd — лицензированная компания. Мы обеспечиваем работодателей проверенным персоналом и берём на себя <span class='text-brand'>полное юридическое сопровождение</span>.",
    stat_1: "Лет Опыта", stat_2: "Трудоустроено", stat_3: "Клиентов", hero_badge: "Лицензированное агентство", hero_safe: "Безопасно. Законно. <br /><span class='text-brand'>Профессионально.</span>",
    about_title: "История <br />Создания.", about_text: "<p>История DEHR Ltd началась задолго до официальной регистрации. Её основатель лично столкнулся с трудностями поиска работы: несоответствие ожиданий, языковые барьеры, отсутствие правильного оформления.</p><p>Он увидел проблему с двух сторон. С одной — квалифицированные люди. С другой — компании, испытывающие острую потребность в надёжных сотрудниках.</p><p>Постепенно помощь стала системной. Стало очевидно: необходима официальная структура.</p>", about_quote: "\"Мы знаем проблему изнутри — потому что прошли этот путь сами.\"",
    mission: "Миссия", mission_title: "Создавать возможности там, <br />где были <span class='text-brand'>барьеры.</span>", mission_desc: "Обеспечить работодателей надежными трудовыми ресурсами, создавая прозрачную и эффективную систему взаимодействия.",
    emp_subtitle: "B2B Партнерство", emp_title: "Для Работодателей.", emp_desc: "DEHR Ltd предоставляет комплексное кадровое сопровождение. Мы минимизируем риски работодателя и обеспечиваем стабильность рабочих процессов.", btn_collab: "Обсудить сотрудничество",
    svc_1: "Подбор и проверка", svc_2: "Полное оформление", svc_3: "Контроль договоров", svc_4: "Управление выплатами", svc_5: "Админ. сопровождение", svc_6: "Замена персонала",
    stats_subtitle: "Наши показатели", stats_title: "Опыт и <br /> <span class='text-brand'>Стабильность.</span>", adv_1: "Долгосрочные Контракты", adv_1_d: "С ведущими работодателями", adv_2: "Высокое Удержание", adv_2_d: "Минимальная текучесть", adv_3: "Полное Сопровождение", adv_3_d: "Абсолютная чистота",
    prin_subtitle: "Ценности", prin_1_title: "Законность", prin_1_desc: "Полное соответствие законодательству и абсолютно прозрачные условия сотрудничества.", prin_2_title: "Дисциплина", prin_2_desc: "Осуществляем строгий контроль всей кадровой документации и поддерживаем безупречную финансовую дисциплину.", prin_3_title: "Ответственность", prin_3_desc: "Абсолютная ответственность перед работодателем. Мы минимизируем ваши риски.",
    vacancies_title: "Открытые <br /> Вакансии.", btn_apply: "Откликнуться", btn_show_more: "Показать все вакансии",
    int_subtitle: "International", int_title: "Вакансии за <span class='text-brand'>границей.</span>",
    rec_badge_new: "Рекрутерам", rec_title_new: "Ищем <br> рекрутеров.", rec_desc_new: "Компания DEHR ищет партнёров и рекрутеров, которые готовы приводить кандидатов на работу в Израиле. Вы передаёте нам кандидатов — мы занимаемся дальнейшим процессом трудоустройства.", btn_partner: "Стать рекрутером",
    footer_contact: "Прямая связь с руководителем", footer_desc: "Надёжный персонал. Полное юридическое сопровождение.", 
    form_name: "Имя *", form_name_ph_new: "КАК К ВАМ ОБРАЩАТЬСЯ?", 
    form_phone: "Телефон *", form_phone_ph: "+972 ...", 
    form_email: "Почта", form_email_ph: "ВАША@ПОЧТА.COM",
    form_desc: "Описание сообщения *", form_desc_ph: "Расскажите подробнее...", 
    btn_submit: "Оставить заявку", footer_copyright: "© 2026 DEHR Ltd. Strategic Workforce Solutions",
    map_vacancies: "Вакансии", map_points: "Точки сбора", map_popup_vac: "Вакансия:", map_popup_gath: "Сбор из:",
    
    city_kat: "Кацрин", city_hol: "Холон", city_ash: "Ашдод", city_or: "Ор Иегуда", city_yeh: "Йехуд", city_rish: "Ришон", city_kir: "Кирьят-Арба", city_cent: "Центр", city_tlv: "Тель-Авив", city_ashk: "Ашкелон", city_rhash: "Р-Хашарон", city_rgan: "Рамат-Ган", city_gren: "Гренада",
    tag_12h: "12 часов", tag_shifts: "Смены", tag_bonus: "Бонусы", tag_men: "Мужчины", tag_up45: "До 45", tag_train: "Обучение", tag_flex: "Гибкий", tag_mw: "М/Ж", tag_up50: "До 50", tag_food: "Питание", tag_height: "Высота", tag_transp: "Подвозки", tag_women: "Женщины", tag_night: "Вечер/Ночь", tag_heb: "Иврит", tag_shabbat: "Шаббат 150%", tag_morn: "Утро", tag_up65: "До 65", tag_visa: "Виза", tag_house: "Жилье",
    vac_1_t: "Работник на <br />завод", vac_1_d: "Сборка пластиковых ящиков. Жилье в пешей доступности.", vac_2_t: "Складовщик", vac_2_d: "Склад алюминиевых профилей. Бонус 2000₪.", vac_3_t: "Сборщик<br />ящиков", vac_3_d: "Сборка деревянных ящиков для судов.", vac_4_t: "Установщик <br />пигумов", vac_4_d: "Монтаж пигумов на фасадах.", vac_5_t: "Разнорабочий", vac_5_d: "Разнорабочий в кейтеринге.", vac_6_t: "Рабочий на <br />склад", vac_6_d: "Упаковка, сортировка мяса.", vac_7_t: "Установщик<br />окон", vac_7_d: "Установка окон в высотных зданиях.", vac_8_t: "Рабочий на <br />стройку", vac_8_d: "Строительство вилл. Есть подвозки.", vac_9_t: "Установщик<br />пигумов", vac_9_d: "Сборка люлек, установка пигумов.", vac_10_t: "Установщик<br />пигумов", vac_10_d: "Сборка люлек, установка пигумов.", vac_11_t: "Уборщик<br />квартир", vac_11_d: "Уборка квартир. Стажировка.", vac_12_t: "Мойщик<br />посуды", vac_12_d: "Уборка зала торжеств, мойка посуды.", vac_13_t: "Воспитатель", vac_13_d: "Присмотр за трудными подростками.", vac_14_t: "Уборщик<br />центрa", vac_14_d: "Уборка общественного центра.", vac_15_t: "Mishan<br />Naot-Afeka", vac_15_d: "Уборка. Шаббат - 150%.", vac_16_t: "Mishan<br />Merkaz", vac_16_d: "Уборка помещений. Шаббат - 150%.", vac_17_t: "Уборщик<br />душевных", vac_17_d: "Уборка помещений. Шаббат - 150%.", vac_int_t: "Автомеханик", vac_int_d: "Официальное приглашение, виза и жилье."
  },
  en: {
    nav_about: "About", nav_vacancies: "Vacancies", nav_principles: "Principles", nav_employers: "Employers", nav_recruiting: "Recruiting", btn_contact: "Contact Us",
    hero_subtitle: "Strategic Workforce Solutions", hero_title_1: "Reliable", hero_title_2: "Workforce", hero_title_3: "Solutions.",
    hero_desc: "DEHR Ltd is a licensed agency. We provide employers with verified personnel and handle <span class='text-brand'>full legal compliance</span>.",
    stat_1: "Years Experience", stat_2: "Employed", stat_3: "Clients", hero_badge: "Licensed Agency", hero_safe: "Safe. Legal. <br /><span class='text-brand'>Professional.</span>",
    about_title: "Our <br />History.", about_text: "<p>The story of DEHR Ltd began long before official registration. Its founder faced employment challenges firsthand: mismatched expectations, language barriers, and lack of proper paperwork.</p><p>He saw the problem from both sides: qualified people and companies needing reliable staff.</p><p>Assistance gradually became systematic, leading to the creation of an official structure.</p>", about_quote: "\"We know the problem from the inside — because we've walked this path ourselves.\"",
    mission: "Mission", mission_title: "Creating opportunities where <br />there were <span class='text-brand'>barriers.</span>", mission_desc: "To provide employers with reliable workforce resources by creating a transparent and effective interaction system.",
    emp_subtitle: "B2B Partnership", emp_title: "For Employers.", emp_desc: "DEHR Ltd provides comprehensive HR support. We minimize employer risks and ensure workflow stability.", btn_collab: "Discuss Partnership",
    svc_1: "Personnel selection", svc_2: "Full registration", svc_3: "Contract control", svc_4: "Payroll management", svc_5: "Admin support", svc_6: "Fast replacement",
    stats_subtitle: "Our Metrics", stats_title: "Experience & <br /> <span class='text-brand'>Stability.</span>", adv_1: "Long-term Contracts", adv_1_d: "With leading employers", adv_2: "High Retention", adv_2_d: "Minimal staff turnover", adv_3: "Full Legal Support", adv_3_d: "Absolute legal compliance",
    prin_subtitle: "Values", prin_1_title: "Legality", prin_1_desc: "Full compliance with the law and transparent cooperation conditions.", prin_2_title: "Discipline", prin_2_desc: "Strict control of HR and financial documentation.", prin_3_title: "Responsibility", prin_3_desc: "Absolute responsibility to the employer. We minimize your risks.",
    vacancies_title: "Open <br /> Vacancies.", btn_apply: "Apply Now", btn_show_more: "Show all vacancies",
    int_subtitle: "International", int_title: "Jobs <span class='text-brand'>Abroad.</span>",
    rec_badge_new: "Partnership", rec_title_new: "Looking for <br>Partners.", rec_desc_new: "DEHR is looking for partners and recruiters ready to bring candidates for work in Israel. You provide the candidates — we handle the further employment process.", btn_partner: "Become a Partner",
    footer_contact: "Direct contact with CEO", footer_desc: "Reliable personnel. Full legal support.", 
    form_name: "Name *", form_name_ph_new: "HOW SHOULD WE ADDRESS YOU?", 
    form_phone: "Phone *", form_phone_ph: "+972 ...", 
    form_email: "Email", form_email_ph: "YOUR@EMAIL.COM",
    form_desc: "Message *", form_desc_ph: "Tell us more...", 
    btn_submit: "Submit Request", footer_copyright: "© 2026 DEHR Ltd.",
    map_vacancies: "Vacancies", map_points: "Pickup Points", map_popup_vac: "Vacancy:", map_popup_gath: "Pickup from:",

    city_kat: "Katzrin", city_hol: "Holon", city_ash: "Ashdod", city_or: "Or Yehuda", city_yeh: "Yehud", city_rish: "Rishon", city_kir: "Kiryat Arba", city_cent: "Center", city_tlv: "Tel Aviv", city_ashk: "Ashkelon", city_rhash: "R-Hasharon", city_rgan: "Ramat Gan", city_gren: "Grenada",
    tag_12h: "12 Hours", tag_shifts: "Shifts", tag_bonus: "Bonuses", tag_men: "Men", tag_up45: "Up to 45", tag_train: "Training", tag_flex: "Flexible", tag_mw: "M/F", tag_up50: "Up to 50", tag_food: "Meals", tag_height: "At Height", tag_transp: "Transport", tag_women: "Women", tag_night: "Night", tag_heb: "Hebrew", tag_shabbat: "Shabbat 150%", tag_morn: "Morning", tag_up65: "Up to 65", tag_visa: "Visa", tag_house: "Housing",
    vac_1_t: "Factory <br />Worker", vac_1_d: "Assembly of plastic boxes. Housing nearby.", vac_2_t: "Warehouse", vac_2_d: "Aluminum profile warehouse. 2000₪ bonus.", vac_3_t: "Box <br />Assembler", vac_3_d: "Assembly of wooden boxes for ships.", vac_4_t: "Scaffolding <br />Installer", vac_4_d: "Scaffolding installation on facades.", vac_5_t: "General Worker", vac_5_d: "General worker in catering.", vac_6_t: "Warehouse <br />Worker", vac_6_d: "Meat packaging and sorting.", vac_7_t: "Window<br />Installer", vac_7_d: "Installation of windows.", vac_8_t: "Construction", vac_8_d: "Construction of villas. Transport provided.", vac_9_t: "Scaffolding", vac_9_d: "Cradle assembly, scaffolding.", vac_10_t: "Scaffolding", vac_10_d: "Cradle assembly, scaffolding.", vac_11_t: "Apartment<br />Cleaner", vac_11_d: "Apartment cleaning.", vac_12_t: "Dishwasher", vac_12_d: "Washing dishes in event halls.", vac_13_t: "Youth Educator", vac_13_d: "Supervision of troubled teens.", vac_14_t: "Center<br />Cleaner", vac_14_d: "Cleaning of the community center.", vac_15_t: "Mishan<br />Naot-Afeka", vac_15_d: "Cleaning. Shabbat - 150%.", vac_16_t: "Mishan<br />Merkaz", vac_16_d: "Cleaning of premises. Shabbat - 150%.", vac_17_t: "Hostel<br />Cleaner", vac_17_d: "Cleaning. Shabbat - 150%.", vac_int_t: "Auto Mechanic", vac_int_d: "Official invitation, visa, and housing."
  },
  he: {
    nav_about: "עלינו", nav_vacancies: "משרות", nav_principles: "עקרונות", nav_employers: "למעסיקים", nav_recruiting: "גיוס", btn_contact: "צור קשר",
    hero_subtitle: "פתרונות כוח אדם אסטרטגיים", hero_title_1: "צוות", hero_title_2: "אמין.", hero_title_3: "לביצוע.",
    hero_desc: "DEHR Ltd היא סוכנות מורשית. אנו מספקים למעסיקים צוות מאומת ולוקחים על עצמנו <span class='text-brand'>ליווי משפטי מלא</span>.",
    stat_1: "שנות ניסיון", stat_2: "הועסקו", stat_3: "לקוחות", hero_badge: "סוכנות מורשית", hero_safe: "בטוח. חוקי. <br /><span class='text-brand'>מקצועי.</span>",
    about_title: "ההיסטוריה <br />שלנו.", about_text: "<p>הסיפור של DEHR Ltd התחיל הרבה לפני הרישום הרשמי. המייסד נתקל בעצמו בקשיי תעסוקה: פערים בציפיות, מחסומי שפה וחוסר בניירת מתאימה.</p><p>הוא ראה את הבעיה משני הצדדים: אנשים מוכשרים וחברות שצריכות צוות אמין.</p><p>הסיוע הפך בהדרגה לשיטתי, והוביל ליצירת מבנה רשמי.</p>", about_quote: "\"אנו מכירים את הבעיה מבפנים - כי עברנו את הדרך הזו בעצמנו.\"",
    mission: "משימה", mission_title: "יצירת הזדמנויות היכן <br />שהיו <span class='text-brand'>מחסומים.</span>", mission_desc: "לספק למעסיקים משאבי כוח אדם אמינים תוך יצירת מערכת אינטראקציה שקופה ויעילה.",
    emp_subtitle: "שותפות B2B", emp_title: "למעסיקים.", emp_desc: "DEHR Ltd מספקת תמיכת משאבי אנוש מקיפה. אנו ממזערים את סיכוני המעסיק ומבטיחים יציבות בתהליכי העבודה.", btn_collab: "נדבר על שיתוף פעולה",
    svc_1: "מיון עובדים", svc_2: "רישום מלא", svc_3: "בקרת חוזים", svc_4: "ניהול שכר", svc_5: "תמיכה אדמיניסטרטיבית", svc_6: "החלפת צוות",
    stats_subtitle: "המדדים שלנו", stats_title: "ניסיון ו<br /><span class='text-brand'>יציבות.</span>", adv_1: "חוזים ארוכי טווח", adv_1_d: "עם מעסיקים מובילים", adv_2: "שימור גבוה", adv_2_d: "תחלופת צוות מינימלית", adv_3: "תמיכה מלאה", adv_3_d: "עמידה משפטית מוחלטת",
    prin_subtitle: "ערכים", prin_1_title: "חוקיות", prin_1_desc: "עמידה מלאה בחוק ותנאים שקופים לחלוטין.", prin_2_title: "שליטה", prin_2_desc: "שליטה קפדנית בכל תיעוד משאבי האנוש ומשמעת פיננסית.", prin_3_title: "אחריות", prin_3_desc: "אחריות מוחלטת כלפי המעסיק. אנו ממזערים את הסיכונים שלך.",
    vacancies_title: "משרות <br /> פתוחות.", btn_apply: "הגש מועמדות", btn_show_more: "הצג את כל המשרות",
    int_subtitle: "בינלאומי", int_title: "משרות <span class='text-brand'>בחו\"ל.</span>",
    rec_badge_new: "שותפות", rec_title_new: "מחפשים <br>שותפים.", rec_desc_new: "חברת DEHR מחפשת שותפים ומגייסים המוכנים להביא מועמדים לעבודה בישראל. אתם מעבירים לנו מועמדים — אנו מטפלים בהמשך תהליך ההעסקה.", btn_partner: "הפוך לשותף",
    footer_contact: "קשר ישיר עם המנכ\"ל", footer_desc: "צוות אמין. ליווי משפטי.", 
    form_name: "שם *", form_name_ph_new: "איך לפנות אליך?", 
    form_phone: "טלפון *", form_phone_ph: "+972 ...", 
    form_email: "דוא״ל", form_email_ph: "שלך@EMAIL.COM",
    form_desc: "הודעה *", form_desc_ph: "ספר לנו עוד...", 
    btn_submit: "שלח", footer_copyright: "© 2026 DEHR Ltd.",
    map_vacancies: "משרות", map_points: "נקודות איסוף", map_popup_vac: "משרה:", map_popup_gath: "איסוף מ:",

    city_kat: "קצרין", city_hol: "חולון", city_ash: "אשדוד", city_or: "אור יהודה", city_yeh: "יהוד", city_rish: "ראשון לציון", city_kir: "קרית ארבע", city_cent: "מרכז", city_tlv: "תל אביב", city_ashk: "אשקלון", city_rhash: "רמת השרון", city_rgan: "רמת גן", city_gren: "גרנדה",
    tag_12h: "12 שעות", tag_shifts: "משמרות", tag_bonus: "בונוסים", tag_men: "גברים", tag_up45: "עד 45", tag_train: "הכשרה", tag_flex: "גמיש", tag_mw: "ג/נ", tag_up50: "עד 50", tag_food: "ארוחות", tag_height: "בגובה", tag_transp: "הסעות", tag_women: "נשים", tag_night: "לילה", tag_heb: "עברית", tag_shabbat: "שבת 150%", tag_morn: "בוקר", tag_up65: "עד 65", tag_visa: "ויזה", tag_house: "מגורים",
    vac_1_t: "עובד <br />מפעל", vac_1_d: "הרכבת ארגזים. מגורים בקרבת מקום.", vac_2_t: "מחסנאי", vac_2_d: "מחסן פרופילי אלומיניום. בונוס 2000₪.", vac_3_t: "מרכיב <br />ארגזים", vac_3_d: "הרכבת ארגזים לספינות.", vac_4_t: "מתקין <br />פיגומים", vac_4_d: "התקנת פיגומים.", vac_5_t: "עובד כללי", vac_5_d: "עובד כללי בקייטרינג.", vac_6_t: "עובד מחסן", vac_6_d: "אריזה ומיון בשר.", vac_7_t: "מתקין<br />חלונות", vac_7_d: "התקנת חלונות.", vac_8_t: "פועל בניין", vac_8_d: "בניית וילות. הסעות.", vac_9_t: "מתקין פיגומים", vac_9_d: "הרכבת עריסות, התקנת פיגומים.", vac_10_t: "מתקין פיגומים", vac_10_d: "התקנת פיגומים.", vac_11_t: "מנקה דירות", vac_11_d: "ניקיון דירות.", vac_12_t: "שוטף כלים", vac_12_d: "ניקיון אולמות.", vac_13_t: "מדריך נוער", vac_13_d: "השגחה על נוער בסיכון.", vac_14_t: "מנקה מרכז", vac_14_d: "ניקיון מרכז קהילתי.", vac_15_t: "משען<br />נאות אפקה", vac_15_d: "ניקיון. שבת - 150%.", vac_16_t: "משען<br />מרכז", vac_16_d: "ניקיון. שבת - 150%.", vac_17_t: "מנקה<br />בהוסטל", vac_17_d: "ניקיון. שבת - 150%.", vac_int_t: "מכונאי רכב", vac_int_d: "הזמנה רשמית, ויזה ומגורים."
  }
};

// ================= ГЕНЕРАЦИЯ ВАКАНСИЙ С LAZY LOADING =================
function renderVacancies() {
  const container = document.getElementById("vacancies-grid");
  const intContainer = document.getElementById("int-vacancies-grid");
  
  if(container) {
    container.innerHTML = vacancies.map((v) => `
      <article class="group bg-white dark:bg-surface p-4 rounded-[2rem] shadow-sm border border-slate-100 dark:border-zinc-800 card-hover flex flex-col vacancy-card ${v.hidden ? 'hidden' : ''}">
        <div class="relative h-40 md:h-48 overflow-hidden rounded-[1.5rem] mb-4 md:mb-6 bg-slate-100">
          <img src="${v.img}" loading="lazy" width="800" height="500" onerror="this.src='${v.fallback}'" alt="${v.title.replace(/<[^>]*>?/gm, ' ')}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
          <div class="absolute top-4 left-4 bg-white dark:bg-black px-3 md:px-4 py-1 md:py-2 rounded-full shadow-md">
            <span data-i18n="${v.city}" class="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-brand">City</span>
          </div>
        </div>
        <div class="px-2 md:px-4 pb-4 flex-grow">
          <div class="flex justify-between items-start mb-3 md:mb-4 gap-2">
            <h3 data-i18n="${v.title}" class="text-lg md:text-xl font-black uppercase italic leading-none">Title</h3>
            <span class="text-lg md:text-xl font-black text-brand italic whitespace-nowrap" dir="ltr">${v.price}</span>
          </div>
          <p data-i18n="${v.desc}" class="text-[11px] md:text-xs text-slate-500 font-bold mb-4 line-clamp-2">Desc</p>
          <div class="flex gap-2 flex-wrap">
            ${v.tags.map(t => `<span data-i18n="${t}" class="px-2 md:px-3 py-1 bg-[#F2F4F7] dark:bg-zinc-800 rounded-full text-[8px] md:text-[9px] font-black uppercase text-slate-500 dark:text-slate-400">Tag</span>`).join('')}
          </div>
        </div>
        <a href="#contact" data-i18n="btn_apply" class="w-full text-center bg-black dark:bg-white text-white dark:text-black py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-[11px] tracking-widest hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-colors mt-auto block">Откликнуться</a>
      </article>
    `).join('');
  }

  if(intContainer) {
    intContainer.innerHTML = intVacancies.map((v) => `
      <article class="group bg-white dark:bg-surface p-4 rounded-[2rem] shadow-sm border border-slate-100 dark:border-zinc-800 flex flex-col card-hover">
        <div class="relative h-40 md:h-48 overflow-hidden rounded-[1.5rem] mb-4 md:mb-6 bg-slate-200">
          <img src="${v.img}" loading="lazy" width="800" height="500" onerror="this.src='${v.fallback}'" alt="Vacancy" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
          <div class="absolute top-4 left-4 bg-brand px-3 md:px-4 py-1 md:py-2 rounded-full shadow-md">
            <span data-i18n="${v.city}" class="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white">City</span>
          </div>
        </div>
        <div class="px-2 md:px-4 pb-4 flex-grow">
          <div class="flex justify-between items-start mb-3 md:mb-4 gap-2">
            <h3 data-i18n="${v.title}" class="text-lg md:text-xl font-black uppercase italic leading-none text-slate-900 dark:text-white">Title</h3>
            <span class="text-lg md:text-xl font-black text-brand italic whitespace-nowrap" dir="ltr">${v.price}</span>
          </div>
          <p data-i18n="${v.desc}" class="text-[11px] md:text-xs text-slate-500 font-bold mb-4">Desc</p>
          <div class="flex gap-2 flex-wrap">
            ${v.tags.map(t => `<span data-i18n="${t}" class="px-2 md:px-3 py-1 bg-[#F2F4F7] dark:bg-zinc-800 rounded-full text-[8px] md:text-[9px] font-black uppercase text-slate-500">Tag</span>`).join('')}
          </div>
        </div>
        <a href="#contact" data-i18n="btn_apply" class="w-full text-center bg-black dark:bg-white text-white dark:text-black py-4 md:py-5 rounded-full font-black uppercase text-[10px] md:text-[11px] tracking-widest hover:bg-brand dark:hover:bg-brand dark:hover:text-white transition-colors mt-auto block">Откликнуться</a>
      </article>
    `).join('');
  }
}

// ================= ЛОГИКА =================
let map;
let mapMarkers = [];

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  renderVacancies();
  setLang('ru');
  initMap();
  initScrollAnimations();
  initMobileMenu();
  initFAQ();
});

// Тема
document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});

// ПЛАВНЫЙ FAQ (АККОРДЕОН)
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-content').classList.remove('grid-rows-[1fr]');
        otherItem.querySelector('.faq-content').classList.add('grid-rows-[0fr]');
        otherItem.querySelector('.faq-icon').classList.remove('rotate-45');
        otherItem.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        content.classList.remove('grid-rows-[0fr]');
        content.classList.add('grid-rows-[1fr]');
        icon.classList.add('rotate-45');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// МОБИЛЬНОЕ МЕНЮ
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const header = document.getElementById('main-header');
  const links = document.querySelectorAll('.mobile-link');
  const closers = document.querySelectorAll('.mobile-link-close');

  const openMenu = () => {
    menu.classList.remove('-translate-y-full'); 
    header.style.transform = 'translateY(-150%)'; 
    document.body.style.overflow = 'hidden'; 
    
    links.forEach(link => {
      link.classList.remove('opacity-0', 'translate-y-4');
    });
  };

  const closeMenu = () => {
    menu.classList.add('-translate-y-full');
    header.style.transform = 'translateY(0)';
    document.body.style.overflow = '';
    
    links.forEach(link => {
      link.classList.add('opacity-0', 'translate-y-4');
    });
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
  closers.forEach(c => c.addEventListener('click', closeMenu));
}

// Анимации при скролле
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function showAllVacancies() {
  const hiddenCards = document.querySelectorAll(".vacancy-card.hidden");
  hiddenCards.forEach((card, index) => {
    card.classList.remove("hidden");
    setTimeout(() => { card.classList.add("fade-in"); }, index * 80);
  });
  const btnContainer = document.getElementById("show-more-container");
  btnContainer.style.opacity = '0';
  setTimeout(() => btnContainer.style.display = "none", 300);
}

function setLang(lang) {
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('text-brand', 'font-bold');
    btn.classList.add('text-slate-500', 'dark:text-slate-400');
  });
  
  document.querySelectorAll(`button[onclick="setLang('${lang}')"]`).forEach(btn => {
    btn.classList.remove('text-slate-500', 'dark:text-slate-400');
    btn.classList.add('text-brand', 'font-bold');
  });

  updateMapMarkers(lang);
}

// ================= ИНТЕРАКТИВНАЯ КАРТА (LEAFLET) =================
const locations = {
  blue: [
    { lat: 32.0853, lng: 34.7818, key: "city_tlv" }, { lat: 31.8044, lng: 34.6447, key: "city_ash" },
    { lat: 32.9906, lng: 35.6967, key: "city_kat" }, { lat: 32.0158, lng: 34.7744, key: "city_hol" },
    { lat: 32.0309, lng: 34.8566, key: "city_or" }, { lat: 32.0333, lng: 34.8833, key: "city_yeh" },
    { lat: 31.9730, lng: 34.7925, key: "city_rish" }, { lat: 31.5283, lng: 35.1058, key: "city_kir" },
    { lat: 31.6693, lng: 34.5715, key: "city_ashk" }, { lat: 32.1384, lng: 34.8404, key: "city_rhash" },
    { lat: 32.0684, lng: 34.8248, key: "city_rgan" }
  ],
  red: [
    { lat: 32.0136, lng: 34.7480, name: "Bat-Yam", he_name: "בת ים", ru_name: "Бат-Ям" },
    { lat: 32.0840, lng: 34.8878, name: "Petah Tikva", he_name: "פתח תקווה", ru_name: "Петах-Тиква" },
    { lat: 32.1624, lng: 34.8447, name: "Herzliya", he_name: "הרצליה", ru_name: "Герцлия" }
  ]
};
// 1. Сначала оставляем твою функцию инициализации (с отключенной вотермаркой)
function initMap() {
  const mapContainer = document.getElementById("map");
  
  // Проверяем, есть ли контейнер и загружена ли библиотека Leaflet (L)
  if(mapContainer && typeof L !== 'undefined') {
      map = L.map("map", { 
        attributionControl: false, // Убирает ссылку на Leaflet/Carto в углу
        zoomControl: true,       
        scrollWheelZoom: true,   
        touchZoom: true,         
        doubleClickZoom: true,   
        dragging: true           
      }).setView([32.0853, 34.7818], 8); 
      
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", { 
        attribution: "" 
      }).addTo(map);

      // Рисуем маркеры (функция должна быть определена в app.js)
      updateMapMarkers(document.documentElement.lang || 'ru');
  }
}

// 2. А теперь запускаем "наблюдатель", который вызовет эту функцию вовремя
const mapTarget = document.getElementById("map");

if (mapTarget) {
    const mapObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Если блок карты появился в области видимости (или почти появился)
            if (entry.isIntersecting) {
                initMap(); 
                observer.disconnect(); // Отключаем слежку, так как карта уже загружена
            }
        });
    }, { 
        // Начинаем загрузку за 300px до того, как пользователь увидит карту
        rootMargin: "300px 0px" 
    });

    mapObserver.observe(mapTarget);
}


function updateMapMarkers(lang) {
  if (!map) return;
  mapMarkers.forEach(m => map.removeLayer(m));
  mapMarkers = [];

  const createIcon = (color) => L.divIcon({
    className: "custom-pin",
    html: `<div style="width:20px;height:20px;background:${color};border:4px solid white;border-radius:50%;box-shadow:0 4px 15px rgba(0,0,0,0.2)"></div>`,
  });

  const vacPrefix = translations[lang]['map_popup_vac'];
  const gathPrefix = translations[lang]['map_popup_gath'];

  locations.blue.forEach((loc) => { 
    const cityName = translations[lang][loc.key] || "";
    const m = L.marker([loc.lat, loc.lng], { icon: createIcon('#2563eb') }).bindPopup(`<b dir="${lang==='he'?'rtl':'ltr'}">${vacPrefix}</b> ${cityName}`).addTo(map); 
    mapMarkers.push(m);
  });

  locations.red.forEach((loc) => { 
    const cityName = lang === 'ru' ? loc.ru_name : (lang === 'he' ? loc.he_name : loc.name);
    const m = L.marker([loc.lat, loc.lng], { icon: createIcon('#ef4444') }).bindPopup(`<b dir="${lang==='he'?'rtl':'ltr'}">${gathPrefix}</b> ${cityName}`).addTo(map); 
    mapMarkers.push(m);
  });
}
