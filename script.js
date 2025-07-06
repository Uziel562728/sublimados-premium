@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

:root {
  --primary: #4f8cff;
  --secondary: #a084ee;
  --background: #f7f8fc;
  --surface: #fff;
  --text: #232946;
  --success: #4caf50;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', Arial, sans-serif;
  background: var(--background);
  color: var(--text);
  min-height: 100vh;
  line-height: 1.6;
}

.container {
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Hero y header */
.hero {
  background: linear-gradient(120deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 4px 16px rgba(79,140,255,0.12);
  padding: 2rem 0 3.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}

.logo {
  max-width: 120px;
  border-radius: 1rem;
  margin-bottom: 1rem;
  background: #fff4;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.98;
  margin-top: 0.4rem;
}

/* Carrusel de imágenes */
.carousel {
  position: relative;
  margin: 2rem auto 0;
  max-width: 420px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 32px rgba(79,140,255,0.13);
  background: #fff4;
}

.carousel img {
  display: none;
  width: 100%;
  border-radius: 1.2rem;
  transition: opacity 0.5s;
  aspect-ratio: 4/3;
  object-fit: cover;
}
.carousel img.active {
  display: block;
  opacity: 1;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff9;
  border: none;
  font-size: 2rem;
  color: var(--primary);
  border-radius: 50%;
  padding: 0.3em 0.6em;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;
}
.arrow.left { left: 12px; }
.arrow.right { right: 12px; }
.arrow:hover { background: var(--primary); color: #fff; }

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin: 1rem 0;
}
.indicator {
  width: 13px; height: 13px;
  border-radius: 50%;
  background: #fff6;
  border: 2px solid var(--primary);
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
}
.indicator.active {
  background: var(--primary);
  border-color: #fff;
}

/* Productos */
.productos {
  margin-bottom: 2.5rem;
}
.productos h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.productos-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.camiseta {
  background: var(--surface);
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(79,140,255,0.09);
  transition: transform 0.22s, box-shadow 0.22s;
  padding: 1.2rem 1.5rem;
  min-width: 180px;
  text-align: center;
}
.camiseta:hover {
  transform: translateY(-6px) scale(1.04);
  box-shadow: 0 8px 30px rgba(79,140,255,0.15);
}
.camiseta h3 {
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--primary);
}
.camiseta p {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--success);
}
.camiseta small {
  font-size: 0.96em;
  color: #888;
  display: block;
  margin-top: 0.4em;
}

/* Formulario */
.formulario {
  background: var(--surface);
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(79,140,255,0.09);
  padding: 2rem 2.3rem;
  margin-bottom: 2.5rem;
}
.formulario h2 {
  text-align: center;
  margin-bottom: 1.4rem;
}

fieldset {
  border: none;
  padding: 0;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
input, select, textarea {
  width: 100%;
  border-radius: 0.7rem;
  border: 1.5px solid #ccd6f6;
  padding: 0.7rem 1rem;
  background: #f7f8fc;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  transition: border 0.2s, background 0.2s;
  font-family: inherit;
}
input:focus, select:focus, textarea:focus {
  border: 1.7px solid var(--primary);
  background: #fff;
  outline: none;
}

button[type="submit"] {
  background: linear-gradient(120deg, var(--primary) 0%, var(--secondary) 100%);
  color: #fff;
  border: none;
  border-radius: 0.7rem;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.8rem 1.8rem;
  cursor: pointer;
  margin-top: 1rem;
  box-shadow: 0 2px 10px rgba(79,140,255,0.08);
  transition: background 0.2s, box-shadow 0.2s;
}
button[type="submit"]:hover {
  background: linear-gradient(120deg, #3758d6 0%, #7a5cf7 100%);
  box-shadow: 0 6px 18px rgba(79,140,255,0.19);
}

#total {
  font-weight: bold;
  color: var(--success);
}

/* Modal */
.modal {
  position: fixed;
  z-index: 999;
  left: 0; top: 0;
  width: 100vw; height: 100vh;
  background: rgba(44, 62, 80, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.25s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.modal-content {
  background: var(--primary);
  border-radius: 1.2rem;
  color: #fff;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 32px rgba(35,41,70,0.18);
  min-width: 320px;
  text-align: center;
  position: relative;
}
.close {
  color: #ffb4a2;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 25px;
  font-weight: bold;
  transition: color 0.18s;
}
.close:hover { color: #fff; }

/* Footer */
footer {
  background: var(--text);
  color: #fff;
  padding: 2rem 0 1rem;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 -6px 24px rgba(35,41,70,0.06);
  text-align: center;
}
.footer-content {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
  flex-wrap: wrap;
}
.whatsapp-contact {
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  transition: color 0.2s;
}
.whatsapp-contact img {
  width: 28px;
  margin-right: 0.5em;
}
.whatsapp-contact:hover { color: var(--success); }

@media (max-width: 700px) {
  .productos-grid {
    flex-direction: column;
    gap: 1.4rem;
  }
  .formulario {
    padding: 1.1rem 0.7rem;
  }
  .modal-content {
    min-width: 85vw;
    padding: 1.2rem;
  }
}