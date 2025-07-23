# 🏋️ LautyDeporte

**LautyDeporte** es una aplicación web estática que simula un _e-commerce de ropa deportiva_. Incluye navegación por categorías (Indumentaria, Zapatillas, Accesorios), Login/Register (para poder Cerrar Sesión también), en cada seccion de las categorias cuanta con un filtro para ordenar los productos por Nombre/Precio y un modal de carrito interactivo.

## 🚀 Características

- 🧾 Catálogo dinámico con productos renderizados como cards.
- 🛒 Carrito con modal emergente, resumen de compra y eliminación de ítems.
- 🎠 Carrusel de imágenes destacadas en la portada.
- 👤 Formulario de login y registro (frontend).
- 🧭 Navegación por secciones: Indumentaria, Zapatillas, Accesorios.
- 🎨 Estilos personalizados con CSS y Bootstrap.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 + Bootstrap 5
- JavaScript (modular)
- Bootstrap Icons

## 📁 Estructura de carpetas

```
   LautyDeporte
   ├── assets/             # Imagenes
   ├── api/
   │   └── products.js     # Productos
   ├── pages/
   │   ├── accessorios.html
   │   ├── indumentaria.html
   │   ├── login.html
   │   ├── register.html
   │   └── zapatillas.html
   ├── scripts/
   │   ├── cards.js
   │   ├── cardsA.js       # Accesorios
   │   ├── cardsI.js       # Indumentaria
   │   ├── cardsZ.js       # Zapatillas
   │   ├── carousel.js
   │   ├── footer.js
   │   ├── login.js
   │   ├── modalCarrito.js
   │   ├── navbar.js
   │   └── register.js
   ├── styles/             # Estilos
   └── index.html
```

## ⚙️ Cómo usar

```bash
   # Clonar el repositorio
   git clone https://github.com/LautaroLeall/LautyDeporte.git

   # Entrar en el directorio del proyecto
   cd LautyDeporte

   # Iniciar el servidor local
   `index.html`
```
