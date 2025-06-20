// CARDS

// Accedemos al elemento que contiene el contenido de las Card
const cards = document.getElementById("cards");

// Cargamos productos desde localStorage
let products = JSON.parse(localStorage.getItem("productos"))

// Función para mezclar array
function mezclarArray(array) {
    // Recorremos el array desde el último elemento hacia el primero
    for (let i = array.length - 1; i > 0; i--) {
        // Generamos un índice aleatorio j entre 0 e i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
        // Intercambiamos el elemento actual (i) con el elemento aleatorio (j)
        [array[i], array[j]] = [array[j], array[i]];
        // array[i]: elemento actual en la posición i "indice a intercambiar" 
        // array[j]: elemento elegido al azar para intercambiar "por este elemento"
        // Esta técnica asegura que cada elemento tenga la misma probabilidad de aparecer en cualquier posición
    }
    // Devolvemos el array ya mezclado
    return array;
}

// Función para renderizar las cards con stock actualizado
function renderizarCards(products) {
    // Incrementamos cards de bootstrap a nuestro documento
    cards.innerHTML = "";

    // Creamos una copia del array original myProducts usando el operador spread [...]
    // Esto es para no modificar el array original, sino trabajar sobre una copia
    const productosAleatorios = mezclarArray([...products]);

    productosAleatorios.forEach(product => {
        // Función para generar los botones de talles disponibles
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([talle, cantidad]) => cantidad > 0)
            // .filter: filtra los pares de talles y cantidad
            // talles: el nombre del talle "CLAVE"
            // cantidad: la cantidad disponible "VALOR"
            .map(([talle]) =>
                // map: mapea cada pareja de talles y cantidad a un botón
                `
                    <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                        onclick="agregarAlCarrito(${product.id}, '${talle}')">
                        ${talle}
                    </button>
                `
            ).join("");

        // Creamos el HTML para los productos
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

// Carga inicial
document.addEventListener('DOMContentLoaded', () => {
    products = JSON.parse(localStorage.getItem("productos"));
    renderizarCards(products);
});
