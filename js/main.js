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

// ============ DATABASE FUNCTIONS ============
function getLessonBySlug(slug) { 
    return lessonsDatabase.find(l => l.slug === slug); 
}

function getLessonsByLevel(level) { 
    return lessonsDatabase.filter(l => l.level === level); 
}

function searchLessons(query) { 
    const term = query.toLowerCase(); 
    return lessonsDatabase.filter(l => 
        l.title.toLowerCase().includes(term) || 
        l.description.toLowerCase().includes(term)
    ); 
}

function getRelatedLessons(lesson, limit = 3) { 
    return lessonsDatabase.filter(l => 
        l.level === lesson.level && l.slug !== lesson.slug
    ).slice(0, limit); 
}

// ============ UI CREATION ============
function createLessonCard(lesson) {
    return `
        <a href="lesson.html?slug=${lesson.slug}" class="lesson-card">
            <div class="lesson-card-header">
                <h3>${lesson.title}</h3>
            </div>
            <div class="lesson-card-body">
                <p>${lesson.description}</p>
            </div>
            <div class="lesson-card-footer">
                <span class="lesson-level">${lesson.levelName}</span>
            </div>
        </a>
    `;
}

function displayLessonsByLevel(level) {
    const grid = document.getElementById('lessonsGrid');
    if (grid) {
        grid.innerHTML = getLessonsByLevel(level).map(createLessonCard).join('');
    }
}

function displayLatestLessons(limit = 6) {
    const grid = document.getElementById('latestLessons');
    if (grid) {
        grid.innerHTML = lessonsDatabase.slice(0, limit).map(createLessonCard).join('');
    }
}

// ============ LESSON PAGE ============
function displayLesson() {
    const slug = new URLSearchParams(window.location.search).get('slug');
    if (!slug || !getLessonBySlug(slug)) {
        window.location.href = 'index.html';
        return;
    }
    
    const lesson = getLessonBySlug(slug);
    document.title = lesson.title + ' - Najhin';
    
    const levelMap = { tronc: 'جذع مشترك', '1bac': 'أولى باك', '2bac': 'ثانية باك' };
    const levelPageMap = { tronc: 'tronc.html', '1bac': '1bac.html', '2bac': '2bac.html' };
    
    // Update DOM
    document.getElementById('levelLink').href = levelPageMap[lesson.level];
    document.getElementById('levelLink').textContent = levelMap[lesson.level];
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonMainTitle').textContent = lesson.title;
    document.getElementById('lessonDescription').textContent = lesson.description;
    document.getElementById('levelBadge').textContent = lesson.levelName;
    document.getElementById('categoryBadge').textContent = lesson.category;
    document.getElementById('lessonVideo').src = lesson.videoUrl;
    document.getElementById('pdfDownload').href = lesson.pdfPath;
    document.getElementById('pdfView').href = lesson.pdfPath;
    document.getElementById('infoLevel').textContent = lesson.levelName;
    document.getElementById('infoCategory').textContent = lesson.category;
    document.getElementById('backToLevel').href = levelPageMap[lesson.level];
    
    // Related lessons
    const related = document.getElementById('relatedLessons');
    if (related) {
        related.innerHTML = getRelatedLessons(lesson).map(createLessonCard).join('');
    }
}

// ============ SEARCH FUNCTIONALITY ============
function setupSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    const searchBtn = document.querySelector('.search-btn');
    const resultsDiv = document.getElementById('searchResults');
    const mainContent = document.querySelector('.levels');
    const container = document.getElementById('resultsContainer');
    
    const search = () => {
        const results = searchLessons(input.value.trim());
        if (input.value.trim()) {
            container.innerHTML = results.length ? 
                results.map(createLessonCard).join('') : 
                '<p style="text-align: center; color: var(--text-light);">لا توجد نتائج</p>';
            resultsDiv.classList.remove('hidden');
        } else {
            resultsDiv.classList.add('hidden');
        }
    };
    
    input.addEventListener('input', search);
    searchBtn?.addEventListener('click', search);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') search();
    });
}

// ============ THEME TOGGLE ============
function setupTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    
    const theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'light') {
        document.body.classList.add('dark-mode');
    }
    
    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// ============ MOBILE MENU ============
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

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', () => {
    setupSearch();
    setupTheme();
    setupMobileMenu();
    displayLatestLessons();
});
