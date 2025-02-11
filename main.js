lucide.createIcons();

const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const products = [
    {
        name: "Doces Presenteáveis",
        price: "Caixa com 4 unidades<br>Caixa com 6 unidades",
        image: "images/doces-natal.jpg"
    },
    {
        name: "Opções para toda família",
        price: "Caixa com 35 unidades<br>Meio cento (50 unidades)<br>Cento (100 unidades)",
        image: "images/doces.jpeg"
    },
    {
        name: "Diversos sabores",
        price: "Sabores tradicionais (chocolate e coco)<br>Sabores especiais (morango, ninho e café)",
        image: "images/doces-natal2.jpg"
    }
];

const productGrid = document.getElementById('productGrid');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 product-card';
    productCard.innerHTML = `
        <img 
            src="${product.image}" 
            alt="${product.name}"
            class="w-full h-48 object-cover"
        />
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
            <div class="flex justify-between items-center">
                <span class="text-pink-600 font-bold">${product.price}</span>
            </div>
        </div>
    `;
    productGrid.appendChild(productCard);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

