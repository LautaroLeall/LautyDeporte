// SEARCH - INDUMENTARIA

// Capturamos el input de búsqueda y el contenedor de cards
const searchInput = document.getElementById("searchInput");
const cardsContainer = document.getElementById("cards");

// Creamos un <h3> para mostrar lo que el usuario va escribiendo
// Lo insertamos arriba de las cards y lo ocultamos por defecto
const searchTitle = document.createElement("h3");
searchTitle.className = "text-center my-4 text-secondary";
searchTitle.style.display = "none";
cardsContainer.parentNode.insertBefore(searchTitle, cardsContainer);

// Importamos los productos
import { myProducts } from "../../api/products.js";

// Filtramos solo los productos de categoría "Indumentaria"
const indumentaria = myProducts.filter(p => p.categoria === "Indumentaria");

// Función que renderiza las cards de los productos pasados como parámetro
function renderCards(products) {
    // Limpiamos el contenedor
    cardsContainer.innerHTML = "";

    // Recorremos y renderizamos cada producto
    products.forEach(product => {
        // Filtramos los talles con stock y generamos los botones
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([talle]) => `
                <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                    ${talle}
                </button>
            `).join("");

        // Estructura HTML de la card
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
        </div>`;
    });

    // Actualizamos el array global con los productos actualmente visibles (filtrados)
    // Esto permite que el filtro global (filter.js) respete lo que el usuario ve en pantalla
    window.productosVisibles = products;
}

// Agregamos evento al input para detectar texto en tiempo real
searchInput.addEventListener("input", (event) => {
    const texto = event.target.value.toLowerCase().trim();

    // Si el input se vacía, recargamos la página para resetear todo
    if (texto === "") {
        location.reload();
        return;
    }

    // Mostramos el título con lo que se está buscando
    searchTitle.textContent = `Estás buscando: "${event.target.value}"`;
    searchTitle.style.display = "block";

    // Filtramos productos por nombre dentro de la categoría Indumentaria
    const filtrados = indumentaria.filter(product =>
        product.nombre.toLowerCase().includes(texto)
    );

    // Renderizamos el resultado filtrado
    renderCards(filtrados);
});
