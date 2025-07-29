# 🏋️ LautyDeporte

**LautyDeporte** es una aplicación web que simula un _e-commerce de ropa deportiva_. Incluye navegación por categorías (Indumentaria, Zapatillas, Accesorios), Login/Register (para poder Cerrar Sesión también), la opcion de Ver/Gestionar mi perfil con un historial de compras realizadas, en cada seccion de las categorias cuanta con un filtro para ordenar los productos por Nombre/Precio y un modal de carrito interactivo.

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
- SweetAlert2
- LocalStorage

## 📁 Estructura de carpetas

```
   LautyDeporte
   ├── assets/                # Imagenes
   ├── api/
   │   └── products.js        # Productos
   ├── pages/                 # Páginas
   ├── scripts/
   │   ├── cards/
   │   │   ├── cardsA.js         # Accesorios
   │   │   ├── cardsI.js         # Indumentaria
   │   │   └── cardsZ.js         # Zapatillas
   │   ├── carrito/
   │   │   ├── carrito.js
   │   │   ├── carritoHelpers.js
   │   │   └── modal.js
   │   ├── profile/
   │   │   ├── editModal.js
   │   │   ├── profile.js
   │   │   └── profileHelpers.js
   │   ├── search/
   │   │   ├── searchA.js
   │   │   ├── searchI.js
   │   │   └── searchZ.js
   │   ├── cards.js
   │   ├── carousel.js
   │   ├── filter.js
   │   ├── footer.js
   │   ├── login.js
   │   ├── navbar.js
   │   ├── productDetail.js
   │   └── register.js
   │   ├── search.js
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
