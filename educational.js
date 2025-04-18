
// Data
const articles = [
    {
        id: 1,
        title: "Understanding Your Menstrual Cycle",
        category: "basics",
        image: "/placeholder.svg",
        excerpt: "Learn about the four phases of your menstrual cycle and the hormonal changes that occur during each phase."
    },
    {
        id: 2,
        title: "PMS vs. PMDD: What's the Difference?",
        category: "health",
        image: "/placeholder.svg",
        excerpt: "Understand the symptoms, causes, and treatments for premenstrual syndrome and premenstrual dysphoric disorder."
    },
    {
        id: 3,
        title: "Nutrition for Hormonal Balance",
        category: "nutrition",
        image: "/placeholder.svg",
        excerpt: "Discover which foods support hormonal balance throughout your cycle and which ones to avoid."
    },
    {
        id: 4,
        title: "Exercise Through Your Cycle",
        category: "fitness",
        image: "/placeholder.svg",
        excerpt: "Learn how to adjust your workout routine based on your menstrual cycle phases for optimal results."
    }
];

const faqItems = [
    {
        question: "How long should a normal period last?",
        answer: "A typical period lasts anywhere from 3 to 7 days. However, what's 'normal' varies from person to person."
    },
    {
        question: "Can stress affect my menstrual cycle?",
        answer: "Yes, stress can definitely affect your menstrual cycle. Stress activates your body's fight-or-flight response."
    },
    {
        question: "Is it normal to have clots in my period blood?",
        answer: "Small blood clots during your period are generally normal. They occur when the blood flow is heavy."
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const articlesGrid = document.getElementById('articles-grid');
const faqAccordion = document.getElementById('faq-accordion');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const filterButtons = document.querySelectorAll('.filter-btn');

// Functions
function renderArticles(category = 'all', searchQuery = '') {
    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = category === 'all' || article.category === category;
        return matchesSearch && matchesCategory;
    });

    articlesGrid.innerHTML = filteredArticles.map(article => `
        <div class="article-card">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <span class="article-category">${article.category}</span>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
            </div>
        </div>
    `).join('');
}

function renderFAQs(searchQuery = '') {
    const filteredFAQs = faqItems.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    faqAccordion.innerHTML = filteredFAQs.map((faq, index) => `
        <div class="accordion-item">
            <div class="accordion-header" onclick="toggleAccordion(${index})">
                ${faq.question}
            </div>
            <div class="accordion-content" id="faq-${index}">
                ${faq.answer}
            </div>
        </div>
    `).join('');
}

function toggleAccordion(index) {
    const content = document.getElementById(`faq-${index}`);
    content.classList.toggle('active');
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    renderArticles(getCurrentCategory(), query);
    renderFAQs(query);
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const targetId = `${tab.dataset.tab}-content`;
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === targetId) {
                content.classList.add('active');
            }
        });
    });
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderArticles(button.dataset.category, searchInput.value);
    });
});

function getCurrentCategory() {
    const activeFilter = document.querySelector('.filter-btn.active');
    return activeFilter ? activeFilter.dataset.category : 'all';
}

// Initial render
renderArticles();
renderFAQs();
