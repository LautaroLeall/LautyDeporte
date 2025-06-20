// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

// Cargamos los productos desde localStorage
const products = JSON.parse(localStorage.getItem("productos"));

// Mezclador (shuffle)
function mezclarArray(product) {
    return product.sort(() => Math.random() - 0.5);
}

// Renderizador de Cards
function renderizarCards(productos) {
    cards.innerHTML = "";

    productos.forEach((product) => {
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([talle]) => `
                <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                        ${talle}
                </button>
            `).join("");

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
                    <button class="btn btn-outline-primary">Ver producto</button>
                </div>
            </div>
        </div>
    `;
    });
}

// Filtrador por categoría
function filtrarPorCategoria(productos, categoria) {
    return productos.filter(product => product.categoria === categoria);
}

// Cuando carga el DOM
document.addEventListener("DOMContentLoaded", () => {
    const categoriaSeleccionada = "Indumentaria";
    
    const productosFiltrados = filtrarPorCategoria(products, categoriaSeleccionada);
    renderizarCards(mezclarArray(productosFiltrados));
});
