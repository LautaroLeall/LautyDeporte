// CARRITO / MODAL

// Accedemos al elemento que contiene el contenido de la modal
const modal = document.getElementById("modal");

// Incrementamos un modal de bootstrap a nuestro documento
modal.innerHTML += `
    <div class="modal fade" id="carritoModal" tabindex="-1" aria-labelledby="carritoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title text-secondary" id="carritoModalLabel">🛒 Carrito de Compras</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                    <ul id="lista-carrito" class="list-group"></ul>
                    <h5 class="text-end">Total: $<span id="total-carrito">0</span></h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-outline-light">Finalizar Compra</button>
                </div>
            </div>
        </div>
    </div>
`;

let carrito = [];

function actualizarModal() {
    const lista = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total-carrito");
    lista.innerHTML = "";

    let total = 0;
    carrito.forEach((item, index) => {
        total += item.precio;
        lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center bg-secondary text-white rounded-pill mb-3">
                ${item.nombre} - Talle ${item.talle}
                <span>$${item.precio}</span>
                <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">🗑️</button>
            </li>
        `;
    });

    totalSpan.textContent = total;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarModal();
}

function agregarAlCarrito(id, talle) {
    const producto = myProducts.find(p => p.id === id);
    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        talle: talle
    });
    actualizarModal();
    const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
    modal.show();
}

