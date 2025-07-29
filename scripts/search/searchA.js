// SEARCH - ACCESORIOS

// Capturamos el input de búsqueda y el contenedor donde se renderizan las cards
const searchInput = document.getElementById("searchInput");
const cardsContainer = document.getElementById("cards");

// Creamos dinámicamente un <h3> para mostrar el texto "Estás buscando: ..."
// Lo agregamos arriba del contenedor de cards y lo ocultamos por defecto
const searchTitle = document.createElement("h3");
searchTitle.className = "text-center my-4 text-secondary";
searchTitle.style.display = "none";
cardsContainer.parentNode.insertBefore(searchTitle, cardsContainer);

// Importamos el array de productos desde la API
import { myProducts } from "../../api/products.js";

// Filtramos solo los productos de la categoría "Accesorios"
const accesorios = myProducts.filter(p => p.categoria === "Accesorios");

// Función que se encarga de renderizar los productos (cards)
function renderCards(products) {
    // Limpiamos el contenedor antes de insertar nuevos elementos
    cardsContainer.innerHTML = "";

    products.forEach(product => {
        // Generamos los botones solo de los talles que tienen stock
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([talle]) => `
                <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                    ${talle}
                </button>
            `).join("");

        // Estructura HTML de cada card de producto
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
                    <a href="product.html?id=${product.id}" class="btn btn-outline-primary">Ver producto</a>
                </div>
            </div>
        </div>`;
    });

    // Actualizamos el array global con los productos actualmente visibles (filtrados)
    // Esto permite que el filtro global (filter.js) respete lo que el usuario ve en pantalla
    window.productosVisibles = products;
}

// Evento que se activa cada vez que se escribe en el input
searchInput.addEventListener("input", (event) => {
    const texto = event.target.value.toLowerCase().trim(); // Normalizamos el texto

    // Si se borra todo el input, recargamos la página para volver a mostrar los productos iniciales
    if (texto === "") {
        location.reload();
        return;
    }

    // Mostramos el mensaje con lo que se está buscando
    searchTitle.textContent = `Estás buscando: "${event.target.value}"`;
    searchTitle.style.display = "block";

    // Filtramos solo los productos de la categoría "Accesorios" que coincidan con el texto
    const filtrados = accesorios.filter(product =>
        product.nombre.toLowerCase().includes(texto)
    );

    // Renderizamos los productos filtrados
    renderCards(filtrados);
});
