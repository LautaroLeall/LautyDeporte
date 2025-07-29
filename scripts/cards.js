// CARDS
// Importamos el array de productos desde el archivo products.js
import { myProducts } from '../api/products.js';

// Obtenemos el elemento HTML donde se van a renderizar las cards
const cards = document.getElementById("cards");

// Carga inicial cuando se termina de cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderizarCards(myProducts); // Llamamos a la función de renderizado con los productos importados
});

// Función para mezclar aleatoriamente los elementos de un array
// Utiliza el algoritmo de Fisher-Yates (mezcla justa)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
        [array[i], array[j]] = [array[j], array[i]];   // intercambiamos los elementos
    }
    return array;
}

// Función para renderizar las cards de productos con su stock y talles disponibles
function renderizarCards(products) {
    // Limpiamos el contenedor antes de insertar nuevas cards
    cards.innerHTML = "";

    // Clonamos el array original para no modificar el import directamente
    const productosAleatorios = mezclarArray([...products]);

    productosAleatorios.forEach(product => {
        // Generamos los botones solo de los talles que tienen stock
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

        // Creamos la estructura HTML de cada card
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
                        <a href="/pages/product.html?id=${product.id}" class="btn btn-outline-primary">Ver producto</a>
                    </div>
                </div>
            </div>
        `;
    });
}
