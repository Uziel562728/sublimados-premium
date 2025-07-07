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

// Función para mostrar el modal de confirmación
function cerrarModal() {
    document.getElementById('miModal').style.display = 'none';
}

// Calcular envío según subtotal
function calcularEnvio(subtotal) {
    if (subtotal >= 5000) return 0;       // Envío gratis si subtotal >= 5000
    else if (subtotal >= 2000) return 300; // Envío $300 si subtotal entre 2000 y 4999
    else return 800;                      // Envío $800 si subtotal < 2000
}

// Actualizar el total con envío y ponerlo en el input oculto para enviar al formulario
function actualizarTotal() {
    const color = document.getElementById('color').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);
    const totalEl = document.getElementById('total');
    const totalEnviar = document.getElementById('totalEnviar');

    // Elementos resumen
    const resumenCantidad = document.getElementById('resumen-cantidad');
    const resumenPrecioUnitario = document.getElementById('resumen-precio-unitario');
    const resumenSubtotal = document.getElementById('resumen-subtotal');
    const resumenEnvio = document.getElementById('resumen-envio');

    if (!color || isNaN(cantidad) || cantidad <= 0) {
        totalEl.textContent = "$0.00";
        totalEnviar.value = "0";

        resumenCantidad.textContent = "Cantidad: 0";
        resumenPrecioUnitario.textContent = "Precio Unitario: $0.00";
        resumenSubtotal.textContent = "Subtotal: $0.00";
        resumenEnvio.textContent = "Envío: $0.00";
        return;
    }

    let precioUnitario = 0;

    switch (color) {
        case "1":
            precioUnitario = 10;
            break;
        case "2":
            precioUnitario = 15;
            break;
        case "3":
            precioUnitario = 20;
            break;
    }

    const subtotal = precioUnitario * cantidad;
    const envio = calcularEnvio(subtotal);
    const total = subtotal + envio;

    // Actualizar resumen
    resumenCantidad.textContent = `Cantidad: ${cantidad}`;
    resumenPrecioUnitario.textContent = `Precio Unitario: $${precioUnitario.toFixed(2)}`;
    resumenSubtotal.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    resumenEnvio.textContent = `Envío: $${envio.toFixed(2)}`;

    // Actualizar total
    totalEl.textContent = `$${total.toFixed(2)} (Incluye envío $${envio})`;
    totalEnviar.value = total.toFixed(2);
}

// Formulario y modal con fetch para evitar redirección
function mostrarMensaje(event) {
    event.preventDefault();

    // Validar campos básicos
    const nombre = document.getElementById('nombre').value.trim(); 
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const color = document.getElementById('color').value;
    const cantidad = parseInt(document.getElementById('cantidad').value, 10);

    // Validación de campos obligatorios
    if (!nombre || !telefono || !direccion || !color) {
        alert('Por favor, completa todos los campos obligatorios');
        return false;
    }

    // Validación de cantidad mínima y máxima
    if (isNaN(cantidad) || cantidad < 50 || cantidad > 1000) {
        alert('La cantidad debe ser entre 50 y 1000 unidades.');
        return false;
    }

    const form = event.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            const modal = document.getElementById('miModal');
            modal.style.display = 'block';
            form.reset();
            // Reset total después de enviar
            actualizarTotal();
        } else {
            alert("Hubo un problema al enviar el formulario. Intenta nuevamente.");
        }
    })
    .catch(error => {
        alert("Error de red: " + error.message);
    });

    return false;
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

// Inicializar todo al cargar la página
window.onload = function() {
    createParticles();
    showSlide(0);
    startCarousel();
    observeElements();

    // Inicializar el total y conectar eventos para actualizarlo
    actualizarTotal();
    document.getElementById('color').addEventListener('change', actualizarTotal);
    document.getElementById('cantidad').addEventListener('input', actualizarTotal);
};

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target === modal) {
        cerrarModal();
    }
};
