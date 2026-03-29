// ============================================
// COMPLETE LESSONS DATABASE - 12 LESSONS
// ============================================
const lessonsDatabase = [
    // Tronc Commun (جذع مشترك) - 4 Lessons
    { id: 1, slug: 'inequations', title: 'المتراجحات والمعادلات', description: 'شرح شامل للمتراجحات والمعادلات من الدرجة الأولى والثانية', level: 'tronc', levelName: 'جذع مشترك', category: 'جبر', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/tronc/inequations.pdf' },
    { id: 2, slug: 'functions', title: 'الدوال المرجعية', description: 'دراسة الدوال المرجعية والخصائص البيانية', level: 'tronc', levelName: 'جذع مشترك', category: 'تحليل', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/tronc/functions.pdf' },
    { id: 3, slug: 'geometry', title: 'الهندسة المستوية', description: 'أساسيات الهندسة والأشكال والمساحات', level: 'tronc', levelName: 'جذع مشترك', category: 'هندسة', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/tronc/geometry.pdf' },
    { id: 4, slug: 'arithmetic', title: 'الحساب العددي', description: 'العمليات الأساسية والكسور والنسب', level: 'tronc', levelName: 'جذع مشترك', category: 'جبر', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/tronc/arithmetic.pdf' },
    
    // 1ère Bac - 4 Lessons
    { id: 5, slug: 'derivation', title: 'الاشتقاق', description: 'المشتقات والقواعد والتطبيقات', level: '1bac', levelName: 'أولى باك', category: 'تحليل', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/1bac/derivation.pdf' },
    { id: 6, slug: 'limits', title: 'النهايات', description: 'النهايات والاستمرارية والعمليات', level: '1bac', levelName: 'أولى باك', category: 'تحليل', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/1bac/limits.pdf' },
    { id: 7, slug: 'sequences', title: 'المتتاليات العددية', description: 'المتتاليات الحسابية والهندسية', level: '1bac', levelName: 'أولى باك', category: 'جبر', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/1bac/sequences.pdf' },
    { id: 8, slug: 'probability', title: 'الاحتمالات', description: 'الأحداث والاحتمالات الشرطية', level: '1bac', levelName: 'أولى باك', category: 'إحصاء', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/1bac/probability.pdf' },
    
    // 2ème Bac - 4 Lessons
    { id: 9, slug: 'logarithms', title: 'الدوال اللوغاريتمية', description: 'اللوغاريتم والخصائص والمعادلات', level: '2bac', levelName: 'ثانية باك', category: 'تحليل', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/2bac/logarithms.pdf' },
    { id: 10, slug: 'exponential', title: 'الدوال الأسية', description: 'الدوال الأسية والمعادلات والنمو', level: '2bac', levelName: 'ثانية باك', category: 'تحليل', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/2bac/exponential.pdf' },
    { id: 11, slug: 'complex-numbers', title: 'الأعداد العقدية', description: 'الأعداد العقدية والعمليات والصيغة', level: '2bac', levelName: 'ثانية باك', category: 'جبر', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/2bac/complex.pdf' },
    { id: 12, slug: 'sequences-logic', title: 'المتتاليات والمنطق', description: 'المتتاليات المتقدمة والاستدلال', level: '2bac', levelName: 'ثانية باك', category: 'جبر', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', pdfPath: 'assets/pdfs/2bac/sequences-logic.pdf' }
];

function getLessonBySlug(slug) { return lessonsDatabase.find(l => l.slug === slug); }
function getLessonsByLevel(level) { return lessonsDatabase.filter(l => l.level === level); }
function searchLessons(query) { const term = query.toLowerCase(); return lessonsDatabase.filter(l => l.title.toLowerCase().includes(term) || l.description.toLowerCase().includes(term)); }
function getRelatedLessons(lesson, limit = 3) { return lessonsDatabase.filter(l => l.level === lesson.level && l.slug !== lesson.slug).slice(0, limit); }

function createLessonCard(lesson) {
    return `<div class="lesson-card"><div class="lesson-card-icon"><i class="fas fa-book-open"></i></div>
            <div class="lesson-card-header"><h3>${lesson.title}</h3></div>
            <div class="lesson-card-body"><p>${lesson.description}</p><div class="lesson-meta-info"><span class="meta-category"><i class="fas fa-tag"></i> ${lesson.category}</span></div></div>
            <div class="lesson-card-footer"><span class="lesson-level">${lesson.levelName}</span><a href="lesson.html?slug=${lesson.slug}" class="lesson-card-btn">عرض الدرس <i class="fas fa-arrow-left"></i></a></div></div>`;
}

function displayLessonsByLevel(level) { const grid = document.getElementById('lessonsGrid'); if (grid) grid.innerHTML = getLessonsByLevel(level).map(createLessonCard).join(''); }
function displayLatestLessons(limit = 6) { const grid = document.getElementById('latestLessons'); if (grid) grid.innerHTML = lessonsDatabase.slice(0, limit).map(createLessonCard).join(''); }

function displayLesson() {
    const slug = new URLSearchParams(window.location.search).get('slug');
    if (!slug || !getLessonBySlug(slug)) window.location.href = 'index.html';
    const lesson = getLessonBySlug(slug);
    document.title = lesson.title + ' - Najhin';
    const levelMap = { tronc: 'جذع مشترك', '1bac': 'أولى باك', '2bac': 'ثانية باك' };
    const levelPageMap = { tronc: 'tronc.html', '1bac': '1bac.html', '2bac': '2bac.html' };
    
    if (document.getElementById('levelLink')) {
        document.getElementById('levelLink').href = levelPageMap[lesson.level];
        document.getElementById('levelLink').textContent = levelMap[lesson.level];
        document.getElementById('lessonTitle').textContent = lesson.title;
        document.getElementById('lessonMainTitle').textContent = lesson.title;
        document.getElementById('lessonDescription').textContent = lesson.description;
        document.getElementById('levelBadge').textContent = lesson.levelName;
        document.getElementById('lessonVideo').src = lesson.videoUrl;
        document.getElementById('pdfDownload').href = lesson.pdfPath;
        document.getElementById('pdfView').href = lesson.pdfPath;
        document.getElementById('infoLevel').textContent = lesson.levelName;
        document.getElementById('infoCategory').textContent = lesson.category;
        document.getElementById('backToLevel').href = levelPageMap[lesson.level];
        
        const related = document.getElementById('relatedLessons');
        if (related) related.innerHTML = getRelatedLessons(lesson).map(createLessonCard).join('');
    }
}

function setupSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const search = () => {
        const results = searchLessons(input.value.trim());
        const resultsDiv = document.getElementById('searchResults');
        const main = document.getElementById('mainContent');
        const container = document.getElementById('resultsContainer');
        if (resultsDiv && main && container) {
            if (input.value.trim()) {
                container.innerHTML = results.length ? results.map(createLessonCard).join('') : '<div class="no-results"><i class="fas fa-search"></i><p>لا توجد نتائج</p></div>';
                resultsDiv.classList.remove('hidden');
                main.classList.add('hidden');
            } else {
                resultsDiv.classList.add('hidden');
                main.classList.remove('hidden');
            }
        }
    };
    input.addEventListener('input', search);
    input.addEventListener('keypress', (e) => e.key === 'Enter' && search());
}

function setupTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') document.body.classList.add('dark-mode');
    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

function setupMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        });
    });
}
