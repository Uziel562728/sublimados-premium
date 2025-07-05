// Crear partículas animadas
function createParticles() {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particles.appendChild(particle);
    }
}

// Carrusel mejorado
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    if (index >= totalSlides) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = totalSlides - 1;
    else currentSlideIndex = index;

    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Auto-play del carrusel
function startCarousel() {
    setInterval(nextSlide, 4000);
}

// Formulario y modal
function mostrarMensaje(event) {
    event.preventDefault();

    // Validar campos básicos
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const color = document.getElementById('color').value;

    if (!nombre || !telefono || !direccion || !color) {
        alert('Por favor, completa todos los campos obligatorios');
        return false;
    }

    // Mostrar modal inmediatamente
    const modal = document.getElementById('miModal');
    modal.style.display = 'block';

    // Enviar formulario después de un pequeño delay
    setTimeout(() => {
        document.getElementById('pedidoForm').submit();
    }, 1000);

    return false;
}

function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

// Animaciones al hacer scroll
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.camiseta').forEach(el => {
        observer.observe(el);
    });
}

// Inicializar todo
window.onload = function() {
    createParticles();
    showSlide(0);
    startCarousel();
    observeElements();
};

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target === modal) {
        cerrarModal();
    }
};
