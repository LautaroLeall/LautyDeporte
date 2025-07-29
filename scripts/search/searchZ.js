// SEARCH - ZAPATILLAS

// Capturamos el input de búsqueda y el contenedor de las cards
const searchInput = document.getElementById("searchInput");
const cardsContainer = document.getElementById("cards");

// Creamos dinámicamente un <h3> para mostrar lo que el usuario escribe
// Se coloca arriba de las cards y está oculto inicialmente
const searchTitle = document.createElement("h3");
searchTitle.className = "text-center my-4 text-secondary";
searchTitle.style.display = "none";
cardsContainer.parentNode.insertBefore(searchTitle, cardsContainer);

// Importamos todos los productos
import { myProducts } from "../../api/products.js";

// Filtramos solo los productos que pertenecen a la categoría "Zapatillas"
const zapatillas = myProducts.filter(p => p.categoria === "Zapatillas");

// Función para renderizar las cards de los productos filtrados
function renderCards(products) {
    // Limpiamos el contenedor para mostrar solo los nuevos resultados
    cardsContainer.innerHTML = "";

    products.forEach(product => {
        // Generamos los botones solo para los talles con stock disponible
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([talle]) => `
                <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                    ${talle}
                </button>
            `).join("");

        // Armamos el HTML de cada card de producto
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

// Escuchamos el evento 'input' para activar la búsqueda en tiempo real
searchInput.addEventListener("input", (event) => {
    const texto = event.target.value.toLowerCase().trim();

    // Si el input está vacío, recargamos la página para restaurar el estado original
    if (texto === "") {
        location.reload();
        return;
    }

    // Mostramos el mensaje de búsqueda con lo que el usuario está escribiendo
    searchTitle.textContent = `Estás buscando: "${event.target.value}"`;
    searchTitle.style.display = "block";

    // Filtramos por nombre dentro de la categoría Zapatillas
    const filtrados = zapatillas.filter(product =>
        product.nombre.toLowerCase().includes(texto)
    );

    // Mostramos los resultados filtrados
    renderCards(filtrados);
});
