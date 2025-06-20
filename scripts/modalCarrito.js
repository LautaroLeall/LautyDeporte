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
                    <h5 class="text-end text-secondary fw-bold">Total: $<span id="total-carrito">0</span></h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-outline-light" onclick="finalizarCompra()">Finalizar Compra</button>
                </div>
            </div>
        </div>
    </div>
`;

// Inicializamos el array carrito vacío
let carrito = [];

//  Función que actualiza el contenido del modal (carrito de compras).
//  Se encarga de:
//  - Mostrar los productos actuales en el carrito.
//  - Calcular y mostrar el total acumulado.
function actualizarModal() {
    const lista = document.getElementById("lista-carrito");  // Lista UL dentro del modal
    const totalSpan = document.getElementById("total-carrito");  // Span donde se muestra el total
    lista.innerHTML = "";  // Limpiamos el contenido anterior del listado del carrito

    let total = 0;  // Inicializamos el total en 0
    carrito.forEach((item, index) => {
        total += item.precio;  // Sumamos el precio de cada producto al total

        // Agregamos cada producto al listado del modal con su nombre, talle, precio y botón de eliminar
        lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center bg-secondary text-white rounded-pill mb-3">
                ${item.nombre} - Talle ${item.talle}
                <span>$${item.precio}</span>
                <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">🗑️</button>
            </li>
        `;
    });

    totalSpan.textContent = total;  // Actualizamos el total en el modal
}

//  Función para eliminar un producto del carrito según el índice.
//  Al eliminar, actualiza el modal para reflejar el cambio.
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);  // Eliminamos el producto del carrito (modificamos el array)
    actualizarModal();  // Actualizamos la vista del modal
}

//  Función para agregar un producto al carrito.
//  - Recibe el id del producto y el talle elegido.
//  - Valida que haya stock disponible para ese talle.
//  - Si hay stock, agrega el producto al carrito y abre el modal.
function agregarAlCarrito(id, talle) {
    // Buscamos el producto correspondiente por su id
    const producto = products.find(p => p.id === id);
    // .find() busca el primer elemento que cumpla una condición.
    // p es simplemente el nombre de la variable que representa cada item mientras busca.

    // Verificamos que exista el producto y que haya stock para el talle seleccionado
    if (producto && producto.talles[talle] > 0) {
        // Agregamos el producto al carrito (guardamos también el talle seleccionado)
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            talle: talle
        });

        actualizarModal();  // Actualizamos el modal para reflejar el nuevo producto en el carrito

        // Mostramos el modal de Bootstrap (abrimos el carrito automáticamente)
        const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
        modal.show();
    } else {
        // Si no hay stock para el talle, mostramos un alerta
        alert("No hay stock disponible para este producto y talle.");
    }
}

//  Función para finalizar la compra.
//  - Recorre el carrito y descuenta el stock correspondiente por talle.
//  - Guarda los cambios en localStorage.
//  - Limpia el carrito.
//  - Actualiza el modal y vuelve a renderizar las cards en pantalla.
function finalizarCompra() {
    // Recorremos el carrito
    carrito.forEach(item => {
        // Buscamos el producto correspondiente
        const producto = products.find(p => p.id === item.id);

        if (producto) {
            // Verificamos que todavía haya stock del talle seleccionado (por seguridad)
            if (producto.talles[item.talle] > 0) {
                producto.talles[item.talle] -= 1;  // Descontamos 1 unidad del talle seleccionado

                // Actualizamos el stock total sumando los valores de todos los talles
                producto.stock = Object.values(producto.talles).reduce((a, b) => a + b, 0);
            } else {
                // Este caso es muy raro porque ya habíamos validado antes, pero es una última defensa
                alert(`El producto ${producto.nombre} en talle ${item.talle} está sin stock.`);
            }
        }
    });

    // Guardamos el array actualizado de productos en localStorage para persistir el nuevo stock
    localStorage.setItem('productos', JSON.stringify(products));

    // Limpiamos el carrito (vaciamos el array)
    carrito = [];

    actualizarModal();  // Actualizamos el modal para mostrar que el carrito quedó vacío

    renderizarCards(products);  // Actualizamos las cards en la pantalla con el nuevo stock

    // Mostramos un mensaje de éxito
    alert('¡Compra finalizada con éxito!');
}