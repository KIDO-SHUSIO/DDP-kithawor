// ==============================================================================
// 1. GAME DATA: ฐานข้อมูลเกมทั้งหมด
// เก็บข้อมูลเชิงลึกของแต่ละเกมสำหรับนำไปแสดงในหน้าต่าง Popup Modal เมื่อกดปุ่ม Details
// ==============================================================================
const gameData = {
    'elden-ring': {
        title: 'Elden Ring',
        genre: 'Action RPG',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9733; 9.6 / 10',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg',
        desc: 'Elden Ring is a massive open-world action RPG developed by FromSoftware in collaboration with novelist George R.R. Martin. Set in the Lands Between, players explore a vast, interconnected world filled with fearsome enemies, ancient secrets, and challenging boss encounters that demand skill and strategy.',
        tags: ['Open World', 'Dark Fantasy', 'Challenging', 'Multiplayer', 'Award Winner'],
        meta: '&#128197; 2022 &nbsp;|&nbsp; &#127970; FromSoftware &nbsp;|&nbsp; &#128187; PC / PS5 / Xbox'
    },
    'cyberpunk': {
        title: 'Cyberpunk 2077',
        genre: 'Action RPG',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9734; 8.5 / 10',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg',
        desc: 'Set in the dystopian Night City, Cyberpunk 2077 is an open-world action RPG by CD Projekt Red. Play as V, a mercenary who becomes entangled with the legendary Johnny Silverhand. Features stunning visuals, deep narrative choices, and an expansive cyberpunk world to explore.',
        tags: ['Open World', 'Sci-Fi', 'Story Rich', 'Cyberpunk', 'First-Person'],
        meta: '&#128197; 2020 &nbsp;|&nbsp; &#127970; CD Projekt Red &nbsp;|&nbsp; &#128187; PC / PS5 / Xbox'
    },
    'civilization': {
        title: 'Civilization VI',
        genre: 'Strategy',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9733; 9.2 / 10',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg',
        desc: 'Build an empire to stand the test of time! Civilization VI is the definitive turn-based strategy game where you lead a nation from the ancient era to the information age. Expand your territory, develop technology, wage war, and achieve victory through culture, science, domination, or diplomacy.',
        tags: ['Turn-Based', 'Strategy', '4X', 'Historical', 'Multiplayer'],
        meta: '&#128197; 2016 &nbsp;|&nbsp; &#127970; Firaxis Games &nbsp;|&nbsp; &#128187; PC / Mobile'
    },
    'zelda': {
        title: 'Zelda: Tears of the Kingdom',
        genre: 'Action Adventure',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9733; 9.8 / 10',
        img: 'https://i0.wp.com/www.qualbert.com/wp-content/uploads/2023/06/Tears-of-the-Kingdom-wallpaper.jpg?fit=1280%2C720&ssl=1',
        desc: 'The Legend of Zelda: Tears of the Kingdom expands on Breath of the Wild with a breathtaking sky world above Hyrule. New Ultrahand and Fuse abilities allow incredible creativity in puzzle solving and combat, making it one of the most innovative games ever created.',
        tags: ['Open World', 'Adventure', 'Puzzle', 'Nintendo', 'Creative'],
        meta: '&#128197; 2023 &nbsp;|&nbsp; &#127970; Nintendo &nbsp;|&nbsp; &#127918; Nintendo Switch'
    },
    'gta5': {
        title: 'Grand Theft Auto V',
        genre: 'Action',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9733; 9.0 / 10',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
        desc: 'Grand Theft Auto V is Rockstar Games masterpiece set in the sprawling city of Los Santos. Play as three distinct protagonists across an interconnected story of crime, ambition, and betrayal. GTA Online continues to evolve with new content years after release.',
        tags: ['Open World', 'Crime', 'Online', 'Action', 'Sandbox'],
        meta: '&#128197; 2013 &nbsp;|&nbsp; &#127970; Rockstar Games &nbsp;|&nbsp; &#128187; PC / PS5 / Xbox'
    },
    'roblox': {
        title: 'Roblox',
        genre: 'Sandbox',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9733; 9.3 / 10',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnshWbFxBo3GRtE2y3bPyPvWumgPR2wkk5-IPemNLpXVwOuxksFQ6j2kJ&s=10',
        desc: 'Roblox is a social sandbox platform where players can create, explore, and play millions of user-generated experiences. From obby challenges and tycoon games to role-playing worlds, it offers endless creativity and community interaction for every age.',
        tags: ['Creative', 'Multiplayer', 'Building', 'Social', 'Adventure'],
        meta: '&#128197; 2006 &nbsp;|&nbsp; &#127970; Roblox Corporation &nbsp;|&nbsp; &#128187; PC / Mobile / Console'
    },
    'minecraft': {
        title: 'Minecraft',
        genre: 'Sandbox',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9733; 9.7 / 10',
        img: 'https://assets.xboxservices.com/assets/0e/f8/0ef8df5c-a7dd-4eb3-b11a-743058d93953.jpg?n=Minecraft_GLP-Page-Hero-1084_Titan-Update_1920x1080_01.jpg',
        desc: 'Minecraft is the ultimate sandbox game where creativity meets survival. Mine resources, build structures, craft tools, and brave monsters in a blocky world that can be shaped by your imagination. It is endlessly replayable and beloved worldwide.',
        tags: ['Creative', 'Survival', 'Building', 'Adventure', 'Popular'],
        meta: '&#128197; 2011 &nbsp;|&nbsp; &#127970; Mojang &nbsp;|&nbsp; &#128187; PC / Mobile / Console'
    },
    'witcher3': {
        title: 'The Witcher 3: Wild Hunt',
        genre: 'Action RPG',
        rating: '&#9733;&#9733;&#9733;&#9733;&#9733; 9.5 / 10',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg',
        desc: 'The Witcher 3 is widely regarded as one of the greatest games ever made. Play as Geralt of Rivia, a monster hunter for hire, in a vast open world with incredibly rich storytelling, morally complex choices, and hundreds of hours of content. A masterpiece in every sense.',
        tags: ['Open World', 'RPG', 'Story Rich', 'Fantasy', 'Award Winner'],
        meta: '&#128197; 2015 &nbsp;|&nbsp; &#127970; CD Projekt Red &nbsp;|&nbsp; &#128187; PC / Console'
    }
};

// ==============================================================================
// 2. QUIZ DATA: ข้อมูลคำถามและผลลัพธ์ของระบบตอบคำถาม (Find My Game)
// ==============================================================================
// รายการคำถามและตัวเลือก
const quizQuestions = [
    {
        question: 'What kind of experience do you enjoy most?',
        options: [
            { text: '&#128214; Deep storylines and characters', value: 'story' },
            { text: '&#128165; Fast-paced action and combat', value: 'action' },
            { text: '&#129504; Strategic thinking and planning', value: 'think' },
            { text: '&#128506; Exploration and discovery', value: 'explore' }
        ]
    },
    {
        question: 'How much time do you usually play per session?',
        options: [
            { text: '&#8987; Short sessions (under 1 hour)', value: 'short' },
            { text: '&#9200; Medium sessions (1-3 hours)', value: 'medium' },
            { text: '&#128336; Long sessions (3+ hours)', value: 'long' },
            { text: '&#128336; Marathon sessions (I lose track)', value: 'marathon' }
        ]
    }
];

// ผลลัพธ์เกมที่แนะนำตามคำตอบที่เลือกในข้อแรก
const quizResults = {
    story: {
        icon: '&#9876;',
        game: 'The Witcher 3: Wild Hunt',
        desc: 'You love rich narratives and memorable characters. The Witcher 3 is the ultimate story-driven RPG with hundreds of hours of incredible storytelling and morally complex decisions.'
    },
    action: {
        icon: '&#128165;',
        game: 'Cyberpunk 2077',
        desc: 'You crave intense action and excitement. Cyberpunk 2077 delivers stunning combat, a gripping sci-fi story, and an unforgettable neon-lit world to explore.'
    },
    think: {
        icon: '&#129504;',
        game: 'Civilization VI',
        desc: 'You love to think ahead and plan strategically. Civilization VI is the perfect game to build your empire, manage resources, and outsmart your opponents.'
    },
    explore: {
        icon: '&#128506;',
        game: 'Zelda: Tears of the Kingdom',
        desc: 'You thrive on exploration and discovery. Tears of the Kingdom offers an enormous world full of secrets, creative puzzles, and breathtaking sky islands to explore.'
    }
};

// ==============================================================================
// 3. QUIZ STATE: ตัวแปรเก็บสถานะของควิซ
// ==============================================================================
let quizStep = 0;      // ลำดับคำถามปัจจุบัน (0 = ข้อ 1, 1 = ข้อ 2)
let quizAnswer = null; // บันทึกคำตอบที่เลือก

// ==============================================================================
// 4. DOM READY: รันฟังก์ชันทั้งหมดเมื่อโครงสร้างเว็บโหลดเสร็จสมบูรณ์
// ==============================================================================
document.addEventListener('DOMContentLoaded', function () {
    initDarkMode();       // เริ่มต้นระบบ Dark/Light mode
    initNavbar();         // เริ่มต้นระบบ Navbar scroll + เมนูมือถือ
    initFilter();         // เริ่มต้นระบบกรองการ์ดเกม
    initScrollTop();      // เริ่มต้นระบบปุ่มเลื่อนกลับขึ้นบนสุด
    initQuiz();           // เริ่มต้นระบบตอบคำถาม Find My Game
    initNavHighlight();   // เริ่มต้นระบบไฮไลต์เมนูตาม section ที่ scroll ถึง
});

// ==============================================================================
// 5. DARK / LIGHT MODE: สลับโหมดมืดและสว่าง
// ==============================================================================
function initDarkMode() {
    var btn = document.getElementById('dark-mode-btn');
    var savedMode = localStorage.getItem('gameZoneMode'); // ดึงค่าที่เคยบันทึกไว้ใน Browser

    // ถ้าก่อนหน้านี้เคยเลือก light mode ไว้ ให้ใส่ class light-mode ให้ body
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        btn.textContent = '\u2600\uFE0F'; // ไอคอนพระอาทิตย์ ☀️
    }

    // เมื่อกดปุ่ม ให้สลับโหมดและเซฟลง localStorage ทันที
    btn.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            btn.textContent = '\u2600\uFE0F'; // สว่าง
            localStorage.setItem('gameZoneMode', 'light');
        } else {
            btn.textContent = '\uD83C\uDF19'; // มืด 🌙
            localStorage.setItem('gameZoneMode', 'dark');
        }
    });
}

// ==============================================================================
// 6. NAVBAR SCROLL & HAMBURGER MENU: เงาแถบเมนูและเมนูมือถือ
// ==============================================================================
function initNavbar() {
    var navbar = document.getElementById('navbar');
    var hamburgerBtn = document.getElementById('hamburger-btn');
    var closeMenuBtn = document.getElementById('close-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileLinks = document.querySelectorAll('.mobile-link');

    // ถ้าเลื่อนจอลงเกิน 30px ให้ใส่เงาใต้ navbar เพื่อให้ดูลอยเหนือเนื้อหา
    window.addEventListener('scroll', function () {
        if (window.scrollY > 30) {
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // กดปุ่ม 3 ขีดเพื่อเปิด Drawer menu บนมือถือ
    hamburgerBtn.addEventListener('click', function () {
        mobileMenu.classList.add('open');
    });

    // กดปุ่มกากบาทเพื่อปิด Drawer menu บนมือถือ
    closeMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
    });

    // เมื่อคลิกลิงก์เมนูใดๆ ในมือถือ ให้ปิด Drawer menu โดยอัตโนมัติ
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
        });
    });
}

// ==============================================================================
// 7. ACTIVE NAV HIGHLIGHT: ไฮไลต์ปุ่มเมนูด้านบนตาม Section ที่กำลังดูอยู่
// ==============================================================================
function initNavHighlight() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
        var scrollPos = window.scrollY + 100;
        sections.forEach(function (section) {
            // ตรวจสอบว่าตำแหน่ง Scroll อยู่ในช่วงความสูงของ section ไหน
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active'); // เพิ่มสีแดงให้เมนูของ section นั้น
                    }
                });
            }
        });
    });
}

// ==============================================================================
// 8. FILTER GAMES: ตัวกรองแนวเกม (All, RPG, Action, Strategy, Adventure)
// ==============================================================================
function initFilter() {
    var filterBtns = document.querySelectorAll('.filter-btn');
    var gameCards = document.querySelectorAll('.game-card');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var filter = btn.getAttribute('data-filter');

            // เปลี่ยนสถานะ active ให้ปุ่มที่คลิก
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            // ซ่อนหรือแสดงการ์ดเกมตามหมวดหมู่
            gameCards.forEach(function (card) {
                if (filter === 'all' || card.getAttribute('data-genre') === filter) {
                    card.classList.remove('hidden'); // แสดงการ์ด
                    card.style.animation = 'none';
                    card.offsetHeight; // บังคับ trigger reflow เพื่อรีเซ็ตแอนิเมชัน
                    card.style.animation = 'card-appear 0.4s ease both';
                } else {
                    card.classList.add('hidden');    // ซ่อนการ์ด
                }
            });
        });
    });
}

// ==============================================================================
// 9. SHOW / CLOSE MODAL: หน้าต่าง Popup แสดงรายละเอียดเกมแบบเจาะลึก
// ==============================================================================
function showDetail(gameKey) {
    var data = gameData[gameKey];
    if (!data) return;

    // นำข้อมูลจาก Object gameData มาใส่ลงใน Element ต่างๆ ของ Modal
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-img').alt = data.title;
    document.getElementById('modal-genre').innerHTML = data.genre;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-rating').innerHTML = '<span class="stars" style="color:#facc15">' + data.rating + '</span>';
    document.getElementById('modal-desc').textContent = data.desc;

    // แปลงอาร์เรย์ของ Tags เป็น HTML Badge
    var tagsHtml = '';
    data.tags.forEach(function (tag) {
        tagsHtml += '<span class="tag">' + tag + '</span>';
    });
    document.getElementById('modal-tags').innerHTML = tagsHtml;
    document.getElementById('modal-meta').innerHTML = data.meta;

    // แสดง Modal และล็อกไม่ให้ Scroll หน้าเว็บข้างหลัง
    document.getElementById('detail-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // ปิด Modal และปลดล็อกการ Scroll
    document.getElementById('detail-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

// กดปุ่ม Escape บนแป้นพิมพ์เพื่อปิด Modal ได้
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

// ==============================================================================
// 10. SCROLL TO TOP: ปุ่มกดเพื่อเลื่อนกลับขึ้นบนสุด
// ==============================================================================
function initScrollTop() {
    var btn = document.getElementById('scroll-top-btn');

    // ถ้าเลื่อนจอลงเกิน 400px ให้ปุ่มปรากฏ
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // พอกดปุ่ม ให้เลื่อนกลับขึ้นไปบนสุดแบบ Smooth
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==============================================================================
// 11. QUIZ LOGIC: ตรรกะการทำงานของแบบทดสอบ Find My Game
// ==============================================================================
function initQuiz() {
    quizStep = 0;
    quizAnswer = null;
    renderQuizQuestion();
}

// ฟังก์ชันเรนเดอร์คำถามและตัวเลือก
function renderQuizQuestion() {
    var questionEl = document.getElementById('quiz-question');
    var optionsEl = document.getElementById('quiz-options');
    var progressBar = document.getElementById('quiz-progress-bar');
    var quizContent = document.getElementById('quiz-content');
    var quizResultEl = document.getElementById('quiz-result');

    quizContent.style.display = 'block';
    quizResultEl.classList.add('hidden');

    var q = quizQuestions[quizStep];
    questionEl.innerHTML = q.question;

    // คำนวณความยาวแถบ Progress bar
    var progress = ((quizStep) / quizQuestions.length) * 100;
    progressBar.style.width = progress + '%';

    // สร้างปุ่มตัวเลือกคำตอบตามข้อมูลใน quizQuestions
    optionsEl.innerHTML = '';
    q.options.forEach(function (opt) {
        var btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.innerHTML = opt.text;
        btn.setAttribute('data-value', opt.value);
        btn.addEventListener('click', function () {
            handleQuizAnswer(opt.value);
        });
        optionsEl.appendChild(btn);
    });
}

// จัดการเมื่อผู้ใช้กดเลือกคำตอบ
function handleQuizAnswer(value) {
    if (quizStep === 0) {
        quizAnswer = value;     // บันทึกคำตอบข้อ 1
        quizStep = 1;           // ขยับไปข้อ 2
        renderQuizQuestion();   // เรนเดอร์ข้อ 2
    } else {
        // เมื่อตอบข้อ 2 แล้ว ให้แสดงผลลัพธ์โดยอิงจากแนวทางที่ชอบในข้อ 1
        showQuizResult(quizAnswer);
    }
}

// แสดงผลลัพธ์เกมที่แมตช์
function showQuizResult(key) {
    var progressBar = document.getElementById('quiz-progress-bar');
    progressBar.style.width = '100%';

    var quizContent = document.getElementById('quiz-content');
    var quizResultEl = document.getElementById('quiz-result');

    quizContent.style.display = 'none';
    quizResultEl.classList.remove('hidden');

    var result = quizResults[key] || quizResults['explore'];
    document.getElementById('result-icon').innerHTML = result.icon;
    document.getElementById('result-game').textContent = result.game;
    document.getElementById('result-desc').textContent = result.desc;
}

// เริ่มต้นควิซใหม่
function restartQuiz() {
    quizStep = 0;
    quizAnswer = null;
    document.getElementById('quiz-progress-bar').style.width = '0%';
    renderQuizQuestion();
}
