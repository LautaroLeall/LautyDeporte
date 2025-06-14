# 🏋️ LautyDeporte

**LautyDeporte** es una aplicación web estática que simula un *e-commerce de ropa deportiva*. Incluye navegación por categorías (Indumentaria, Zapatillas, Accesorios), Login/Register (para poder Cerrar Sesión también), en cada seccion de las categorias cuanta con un filtro para ordenar los productos por Nombre/Precio y un modal de carrito interactivo.

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
   LautyDeporte/
   │
   ├── assets/
   │   ├── accessorios/ # Productos de accesorios
   │   ├── carousel/ # Carousel
   │   ├── indumentaria/ # Productos de indumentaria
   │   ├── zapatillas/ # Productos de zapatillas
   │   ├── lldp-footer.png
   |   └── logo-head.png
   ├── pages/
   │   ├── accessorios.html
   │   ├── indumentaria.html
   │   ├── login.html
   │   ├── register.html
   │   └── zapatillas.html
   ├── scripts/
   │   ├── cards.js
   │   ├── cardsA.js # Productos de accesorios
   │   ├── cardsI.js # Productos de indumentaria
   │   ├── cardsZ.js # Productos de zapatillas
   │   ├── carousel.js
   │   ├── footer.js
   │   ├── login.js # Script para el login
   │   ├── modalCarrito.js
   │   ├── navbar.js
   │   └── register.js # Script para el registro
   ├── styles/
   │   ├── card.css
   │   ├── cardPages.css
   │   ├── carousel.css
   │   ├── footer.css
   │   ├── formulario.css
   │   └── navbar.css
   └── index.html
```

## ⚙️ Cómo usar

```bash
   git clone https://github.com/LautaroLeall/LautyDeporte.git
```
