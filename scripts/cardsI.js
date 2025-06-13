// CARDS

// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

// Creamos un array con los datos de las cartas


// Incrementamos cards de bootstrap a nuestro documento
myProducts.map((product) => {
    // Función para generar los botones de talles disponibles
    const tallesDisponibles = Object.entries(product.talles)
        .filter(([talles, cantidad]) => cantidad > 0)
        // Filtramos los botones de talles disponibles
        .map(([talle]) => `
            <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                onclick="agregarAlCarrito(${product.id}, '${talle}')">
                    ${talle}
            </button>
        `).join("");
        // Creamos el HTML para los botones de talles disponibles

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
                            Talles Disponibles
                        </div>
                        <div class="list-group-item d-flex justify-content-center flex-wrap gap-2 badge text-align-center">
                            ${tallesDisponibles || '<span class="text-muted">Sin stock</span>'}
                        </div>
                    </div>
                    <p class="text-success fw-bold">$${product.precio}</p>
                    <button class="btn btn-outline-primary">Ver producto</button>
                </div>
            </div>
        </div>
    `;
});