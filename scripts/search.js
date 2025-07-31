// scripts/search.js
// SEARCH

// Importamos los productos desde el archivo simulado de "base de datos"
import { myProducts } from "../api/products.js";

// Esperamos que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Usamos setTimeout para esperar que el navbar haya terminado de inyectar el input de búsqueda
    setTimeout(() => {
        // Obtenemos el input de búsqueda y el contenedor donde se muestran los productos
        const searchInput = document.getElementById("searchInput");
        const cardsContainer = document.getElementById("cards");

        // Validamos que existan los elementos necesarios
        if (!searchInput || !cardsContainer) {
            console.warn("🔍 No se encontró el input de búsqueda o el contenedor de cards.");
            return;
        }

        // Creamos dinámicamente un título para mostrar lo que se está buscando
        const searchTitle = document.createElement("h3");
        searchTitle.className = "text-center my-4 text-secondary";
        searchTitle.style.display = "none"; // Se oculta por defecto
        cardsContainer.parentNode.insertBefore(searchTitle, cardsContainer); // Lo insertamos antes del contenedor de cards

        // Función para renderizar productos filtrados (similar a la lógica de cards.js)
        function renderCards(products) {
            cardsContainer.innerHTML = ""; // Limpiamos el contenedor antes de renderizar

            products.forEach(product => {
                // Filtramos talles disponibles (con stock)
                const tallesDisponibles = Object.entries(product.talles)
                    .filter(([talle, cantidad]) => cantidad > 0)
                    .map(([talle]) =>
                        `
                        <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                        onclick="agregarAlCarrito(${product.id}, '${talle}')">${talle}</button>
                        `
                    ).join("");

                // Renderizamos cada card de producto
                cardsContainer.innerHTML += 
                    `
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
                                <a href="../pages/product.html?id=${product.id}" class="btn btn-outline-primary">Ver producto</a>
                            </div>
                        </div>
                    </div>
                    `;
            });
        }

        // Evento que escucha la escritura en el input
        searchInput.addEventListener("input", (event) => {
            const texto = event.target.value.toLowerCase().trim();

            if (texto === "") {
                // Si el input se borra, recargamos la página para restaurar los productos originales
                location.reload();
                return;
            }

            // Mostramos el título con la búsqueda actual
            searchTitle.textContent = `Estás buscando: "${event.target.value}"`;
            searchTitle.style.display = "block";

            // Filtramos los productos según nombre o categoría
            const filtrados = myProducts.filter(product =>
                product.nombre.toLowerCase().includes(texto) ||
                product.categoria.toLowerCase().includes(texto)
            );

            // Renderizamos los productos filtrados
            renderCards(filtrados);
        });

    }, 300); // Espera breve para que navbar.js inyecte el input
});
