// scripts/cards/cardsZ.js
// CARDS - ZAPATILLAS

// Importamos el array de productos desde el archivo products.js
import { myProducts } from "../../api/products.js";

// Accedemos al elemento que contiene el contenido de las Card
const cards = document.getElementById("cards");

// Mezclador (shuffle)
// Función para mezclar aleatoriamente los productos usando sort()
function mezclarArray(productos) {
    return productos.sort(() => Math.random() - 0.5);
}

// Renderizador de Cards
// Renderiza las tarjetas de producto en el DOM
function renderizarCards(productos) {
    // Limpiamos el contenedor antes de insertar nuevos productos
    cards.innerHTML = "";

    productos.forEach((product) => {
        // Filtramos los talles disponibles (stock > 0) y los mapeamos a botones
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([talle]) => `
                <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                        ${talle}
                </button>
            `).join("");

        // Agregamos la card HTML al contenedor principal
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

// Filtrador por categoría
// Filtra productos según una categoría dada
function filtrarPorCategoria(productos, categoria) {
    return productos.filter(product => product.categoria === categoria);
}

// Compartimos funciones y datos con el filtro global (filter.js)
window.renderizarCards = renderizarCards;  // Permite que filter.js use esta función para renderizar
window.mezclarArray = mezclarArray;        // Usado para mezclar al seleccionar "Por defecto"

// Carga inicial cuando se completa el DOM
document.addEventListener("DOMContentLoaded", () => {
    const categoriaSeleccionada = "Zapatillas";

    const productosFiltrados = filtrarPorCategoria(myProducts, categoriaSeleccionada);
    const productosMezclados = mezclarArray(productosFiltrados);

    // Guardamos el array filtrado como global para que filter.js lo use
    window.productosFiltrados = productosFiltrados;

    renderizarCards(productosMezclados);
});
