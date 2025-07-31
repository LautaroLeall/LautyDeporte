// scripts/search/searchA.js
// SEARCH - ACCESORIOS

import { myProducts } from "../../api/products.js";

// Filtramos solo los productos de la categoría "Accesorios"
const accesorios = myProducts.filter(p => p.categoria === "Accesorios");

// Esperamos a que se cargue el DOM + navbar
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const searchInput = document.getElementById("searchInput");
        const cardsContainer = document.getElementById("cards");

        if (!searchInput || !cardsContainer) {
            console.warn("No se encontró el input de búsqueda o el contenedor de cards.");
            return;
        }

        // Creamos el título que muestra lo que se está buscando
        const searchTitle = document.createElement("h3");
        searchTitle.className = "text-center my-4 text-secondary";
        searchTitle.style.display = "none";
        cardsContainer.parentNode.insertBefore(searchTitle, cardsContainer);

        // Función para renderizar productos
        function renderCards(products) {
            cardsContainer.innerHTML = "";

            products.forEach(product => {
                const tallesDisponibles = Object.entries(product.talles)
                    .filter(([_, cantidad]) => cantidad > 0)
                    .map(([talle]) => `
                        <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                            onclick="agregarAlCarrito(${product.id}, '${talle}')">
                            ${talle}
                        </button>
                    `).join("");

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

            window.productosVisibles = products;
        }

        // Activamos búsqueda en tiempo real
        searchInput.addEventListener("input", (event) => {
            const texto = event.target.value.toLowerCase().trim();

            if (texto === "") {
                location.reload();
                return;
            }

            searchTitle.textContent = `Estás buscando: "${event.target.value}"`;
            searchTitle.style.display = "block";

            const filtrados = accesorios.filter(product =>
                product.nombre.toLowerCase().includes(texto)
            );

            renderCards(filtrados);
        });

    }, 300); // Tiempo para asegurar que navbar.js ya renderizó el input
});
