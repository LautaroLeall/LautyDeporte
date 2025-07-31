// scripts/cards/cardsA.js
// CARDS - ACCESORIOS

// Importamos el array de productos desde el archivo products.js
import { myProducts } from "../../api/products.js";

// Accedemos al elemento que contiene el contenido de las Card
const cards = document.getElementById("cards");

// Función para mezclar aleatoriamente los elementos de un array
// Utiliza el algoritmo de mezcla simple con `sort`
function mezclarArray(productos) {
    return productos.sort(() => Math.random() - 0.5);
}

// Función para filtrar los productos según la categoría indicada
function filtrarPorCategoria(productos, categoria) {
    return productos.filter(product => product.categoria === categoria);
}

// Función para renderizar las cards de productos filtrados
function renderizarCards(productos) {
    // Limpiamos el contenido anterior del contenedor
    cards.innerHTML = "";

    productos.forEach((product) => {
        // Generamos los botones de talles disponibles
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([talle]) => `
                <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                        ${talle}
                </button>
            `).join("");

        // Creamos la estructura HTML de cada card
        cards.innerHTML += `
        <div class="col-md-3 d-flex justify-content-center">
            <div class="card producto-card text-center shadow-lg">
                <div class="img-container">
                    <img src="${product.imgFront}" class="card-img-top img-card" alt="${product.nombre}"
                        onmouseout="this.src='${product.imgFront}'" 
                        onmouseover="this.src='${product.imgBack}'">
                </div>
                <div class="card-body h-50">
                    <h5 class="card-title fw-bold">${product.nombre}</h5>
                    <div class="list-group mb-3">
                        <div class="list-group-item fw-bold text-secondary">
                            Disponibles <span class="badge bg-dark text-light">${product.stock}</span>
                        </div>
                        <div class="list-group-item d-flex justify-content-center flex-wrap gap-2 badge text-align-center">
                            ${tallesDisponibles || '<span class="text-muted badge border border-secondary fs-7">Sin stock</span>'}
                        </div>
                    </div>
                    <p class="text-success fw-bold">$${product.precio}</p>
                    <a href="product.html?id=${product.id}" class="btn btn-outline-primary">Ver producto</a>
                </div>
            </div>
        </div>
    `;
    });
}

// Exponemos funciones y datos globales para que el filtro los pueda usar
window.renderizarCards = renderizarCards; // Permite que filter.js pueda invocar esta función
window.mezclarArray = mezclarArray;       // Por si queremos volver a mezclar desde filter.js

// Carga inicial de los productos de ACCESORIOS
document.addEventListener("DOMContentLoaded", () => {
    const categoriaSeleccionada = "Accesorios";

    // Filtramos por categoría
    const filtrados = filtrarPorCategoria(myProducts, categoriaSeleccionada);

    // Guardamos en una variable global accesible desde filter.js
    window.productosFiltrados = filtrados;

    // Mezclamos el orden inicial
    const mezclados = mezclarArray(filtrados);

    // Renderizamos las cards
    renderizarCards(mezclados);
});
