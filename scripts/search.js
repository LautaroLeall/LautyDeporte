// SEARCH

// Capturamos elementos del DOM
const searchInput = document.getElementById("searchInput");
const cardsContainer = document.getElementById("cards");

// Creamos y añadimos dinámicamente el <h3> arriba del contenedor de cards
const searchTitle = document.createElement("h3");
searchTitle.className = "text-center my-4 text-secondary";
searchTitle.style.display = "none"; // Oculto por defecto
cardsContainer.parentNode.insertBefore(searchTitle, cardsContainer);

// Importamos los productos
import { myProducts } from "../api/products.js";

// Función para renderizar productos filtrados (copia lógica de cards.js)
function renderCards(products) {
    cardsContainer.innerHTML = "";

    products.forEach(product => {
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([talle, cantidad]) => cantidad > 0)
            .map(([talle]) =>
                `
                    <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                        ${talle}
                    </button>
                `
            ).join("");

        cardsContainer.innerHTML += `
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
                <p class="text-success fw-bold">$${product.precio.toLocaleString()}</p>
                <button class="btn btn-outline-primary">Ver producto</button>
            </div>
            </div>
        </div>
    `;
    });
}

// Evento input en tiempo real
searchInput.addEventListener("input", (event) => {
    const texto = event.target.value.toLowerCase().trim();

    if (texto === "") {
        // Si se borra el input, recargamos todo con cards.js
        location.reload();
        return;
    }

    // Mostrar mensaje de búsqueda
    searchTitle.textContent = `Estás buscando: "${event.target.value}"`;
    searchTitle.style.display = "block";

    // Filtrar por nombre o categoría
    const filtrados = myProducts.filter(product =>
        product.nombre.toLowerCase().includes(texto) ||
        product.categoria.toLowerCase().includes(texto)
    );

    // Mostrar productos filtrados
    renderCards(filtrados);
});
