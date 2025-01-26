// Initialize Lucide icons
lucide.createIcons();


// Navigation scroll effect
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Products data
const products = [
    {
        name: "Brigadeiros Gourmet",
        price: "R$ 5,00",
        image: "https://images.unsplash.com/photo-1589375025852-a66cdd127c7f?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Cupcakes Decorados",
        price: "R$ 8,00",
        image: "https://images.unsplash.com/photo-1587536849024-daaa4a417b16?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Bolos Personalizados",
        price: "Sob consulta",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    }
];

// Render products
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
                <button class="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors">
                    Pedir
                </button>
            </div>
        </div>
    `;
    productGrid.appendChild(productCard);
});

// Smooth scroll for navigation links
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

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // Here you would typically send the form data to a server
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});

// Intersection Observer for section animations
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

// Add click handlers for all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.trim() === 'Fazer Pedido' || 
            this.textContent.trim() === 'Ver Cardápio' || 
            this.textContent.trim() === 'Pedir') {
            alert('Em breve você poderá fazer pedidos online! Por enquanto, entre em contato pelo WhatsApp.');
        }
    });
});