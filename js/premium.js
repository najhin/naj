// ============ PREMIUM LESSONS DATABASE ============
const premiumLessons = [
    // Tronc Commun
    { id: 1, slug: 'inequations', title: 'المتراجحات والمعادلات', level: 'tronc', lessons: 8, exercises: 45, students: 3200, rating: 4.9, popular: true },
    { id: 2, slug: 'functions', title: 'الدوال المرجعية', level: 'tronc', lessons: 12, exercises: 67, students: 2800, rating: 4.8, popular: true },
    { id: 3, slug: 'geometry', title: 'الهندسة المستوية', level: 'tronc', lessons: 10, exercises: 52, students: 2100, rating: 4.7, popular: false },
    { id: 4, slug: 'arithmetic', title: 'الحساب العددي', level: 'tronc', lessons: 6, exercises: 38, students: 1900, rating: 4.6, popular: false },
    
    // 1ère Bac
    { id: 5, slug: 'derivation', title: 'الاشتقاق', level: '1bac', lessons: 15, exercises: 89, students: 4500, rating: 4.95, popular: true },
    { id: 6, slug: 'limits', title: 'النهايات', level: '1bac', lessons: 12, exercises: 71, students: 3800, rating: 4.9, popular: true },
    { id: 7, slug: 'sequences', title: 'المتتاليات العددية', level: '1bac', lessons: 11, exercises: 65, students: 3200, rating: 4.8, popular: false },
    { id: 8, slug: 'probability', title: 'الاحتمالات', level: '1bac', lessons: 9, exercises: 48, students: 2900, rating: 4.7, popular: false },
    
    // 2ème Bac
    { id: 9, slug: 'logarithms', title: 'الدوال اللوغاريتمية', level: '2bac', lessons: 13, exercises: 76, students: 3600, rating: 4.92, popular: true },
    { id: 10, slug: 'exponential', title: 'الدوال الأسية', level: '2bac', lessons: 11, exercises: 63, students: 3100, rating: 4.85, popular: true },
    { id: 11, slug: 'complex-numbers', title: 'الأعداد ��لعقدية', level: '2bac', lessons: 14, exercises: 82, students: 2700, rating: 4.8, popular: false },
    { id: 12, slug: 'sequences-logic', title: 'المتتاليات والمنطق', level: '2bac', lessons: 10, exercises: 58, students: 2400, rating: 4.75, popular: false }
];

let currentLevel = 'all';

// ============ CREATE COURSE CARD ============
function createCourseCard(lesson) {
    return `
        <div class="course-card">
            <div class="course-header">
                <h3>${lesson.title}</h3>
                <span class="course-level">${getLevelName(lesson.level)}</span>
                ${lesson.popular ? '<div style="position: absolute; top: 1rem; right: 1rem; background: #fbbf24; color: #000; padding: 0.4rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: 700;"><i class="fas fa-fire"></i> الأكثر شهرة</div>' : ''}
            </div>
            <div class="course-body">
                <div class="course-stats">
                    <div class="course-stat">
                        <span class="label"><i class="fas fa-video"></i> الدروس</span>
                        <span class="value">${lesson.lessons}</span>
                    </div>
                    <div class="course-stat">
                        <span class="label"><i class="fas fa-tasks"></i> تمارين</span>
                        <span class="value">${lesson.exercises}</span>
                    </div>
                    <div class="course-stat">
                        <span class="label"><i class="fas fa-star"></i> التقييم</span>
                        <span class="value">${lesson.rating}</span>
                    </div>
                </div>
                <p style="color: var(--text-light); font-size: 0.9rem;">
                    <i class="fas fa-users"></i> ${lesson.students.toLocaleString()} طالب
                </p>
                <div class="course-footer">
                    <button class="btn btn-primary" onclick="enrollCourse('${lesson.slug}')">
                        <i class="fas fa-arrow-left"></i> ابدأ
                    </button>
                    <button class="btn btn-outline" onclick="toggleWishlist('${lesson.slug}')">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============ LEVEL MANAGEMENT ============
function getLevelName(level) {
    const names = { 'tronc': 'جذع مشترك', '1bac': 'أولى باك', '2bac': 'ثانية باك' };
    return names[level] || level;
}

function switchLevel(level) {
    currentLevel = level;
    
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update courses
    displayCourses();
}

function displayCourses() {
    const filtered = currentLevel === 'all' 
        ? premiumLessons 
        : premiumLessons.filter(l => l.level === currentLevel);
    
    const grid = document.querySelector('.courses-grid');
    grid.innerHTML = filtered.map(createCourseCard).join('');
}

// ============ USER INTERACTIONS ============
function enrollCourse(slug) {
    const lesson = premiumLessons.find(l => l.slug === slug);
    alert(`✅ تم الالتحاق بـ "${lesson.title}" بنجاح!\n\nمرحباً بك في الدورة`);
}

function toggleWishlist(slug) {
    alert('✅ تمت إضافة الدورة إلى قائمة الرغبات');
}

// ============ THEME TOGGLE ============
function setupTheme() {
    const toggle = document.getElementById('themeToggleNav');
    const theme = localStorage.getItem('theme') || 'light';
    
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggle.innerHTML = isDark 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
    });
}

// ============ MOBILE MENU ============
function setupMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('navLinks');
    
    if (btn) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
            });
        });
    }
}

// ============ SCROLL ANIMATIONS ============
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', () => {
    displayCourses();
    setupTheme();
    setupMobileMenu();
    setupScrollAnimations();
});
