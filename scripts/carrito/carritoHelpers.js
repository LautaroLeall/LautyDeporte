// scripts/carrito/carritoHelpers.js

import { getAuthUser } from "../profile/profileHelpers.js";
import { getCompraKey } from "../profile/profileHelpers.js";

// Devuelve la clave correcta para guardar el carrito:
// - Si hay usuario logueado → carrito_nombreUsuario
// - Si NO → carrito_guest
function getCarritoKey() {
    const user = getAuthUser();
    return user ? `carrito_${user.userName}` : "carrito_guest";
}

// Guarda el carrito actual en localStorage con clave dinámica.
export function guardarCarrito(carrito) {
    const key = getCarritoKey();
    localStorage.setItem(key, JSON.stringify(carrito));
}

// Carga el carrito desde localStorage, para usuarios logueados o visitantes.
export function cargarCarrito() {
    const key = getCarritoKey();
    return JSON.parse(localStorage.getItem(key)) || [];
}

// Actualiza el contenido visual del modal del carrito.
export function actualizarModal(carrito) {
    const count = document.getElementById("carrito-count");
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total-carrito");
    const vaciarBtn = document.getElementById("vaciar-carrito-btn");
    const finalizarBtn = document.getElementById("finalizar-compra-btn");

    if (!lista) return;

    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = `<li class="list-group-item text-center text-muted fst-italic bg-dark border-0">Tu carrito está vacío.</li>`;
        total.textContent = "0";
        count.textContent = `(0 productos)`;
        finalizarBtn.disabled = true;
        vaciarBtn.disabled = true;
        guardarCarrito(carrito); // Se guarda vacío también
        return;
    }

    let totalAmount = 0;

    carrito.forEach((item, index) => {
        totalAmount += item.precio;
        lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center text-light bg-secondary bg-opacity-25 border-0 rounded-3 mb-2">
                <div>
                    <strong>${item.nombre}</strong><br>
                    <small class="text-warning">Talle: ${item.talle}</small>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <span class="text-warning fw-bold">$${item.precio}</span>
                    <button class="btn btn-sm btn-outline-danger" onclick="confirmarEliminar(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </li>
        `;
    });

    total.textContent = totalAmount.toFixed(2);
    count.textContent = `(${carrito.length} producto${carrito.length > 1 ? "s" : ""})`;
    finalizarBtn.disabled = false;
    vaciarBtn.disabled = false;
    guardarCarrito(carrito); // Guardamos cada vez que se actualiza
}

// Confirma y elimina un producto del carrito.
export function confirmarEliminar(index, carrito, actualizarModal) {
    Swal.fire({
        title: '¿Eliminar producto?',
        text: `¿Eliminar "${carrito[index].nombre}" (Talle ${carrito[index].talle}) del carrito?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.splice(index, 1);
            actualizarModal(carrito);
            Swal.fire({
                icon: 'success',
                title: 'Producto eliminado',
                timer: 1000,
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                position: 'top-end'
            });
        }
    });
}

// Vacía el carrito completo con confirmación.
export function vaciarCarrito(carrito, actualizarModal) {
    Swal.fire({
        title: '¿Vaciar carrito?',
        text: 'Se eliminarán todos los productos del carrito.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
    }).then(result => {
        if (result.isConfirmed) {
            carrito.length = 0;
            actualizarModal(carrito);
            Swal.fire({
                icon: 'success',
                title: 'Carrito vaciado',
                timer: 1000,
                toast: true,
                showConfirmButton: false,
                position: 'top-end'
            });
        }
    });
}

// Finaliza la compra: verifica sesión, stock, guarda historial y limpia carrito.
// Ahora recibe también método de pago para guardar en el historial.
export function finalizarCompra(carrito, products, metodoPago = null, datosPago = null, actualizarModal) {
    const authUser = getAuthUser();

    if (!authUser) {
        return Swal.fire({
            icon: 'info',
            title: 'Debes iniciar sesión',
            text: 'Inicia sesión para finalizar la compra.',
            confirmButtonText: 'Entendido'
        });
    }

    if (carrito.length === 0) {
        return Swal.fire({
            icon: 'info',
            title: 'Carrito vacío',
            text: 'No hay productos para comprar.'
        });
    }

    let sinStock = false;

    carrito.forEach(item => {
        const producto = products.find(p => p.id === item.id);
        if (producto && producto.talles[item.talle] > 0) {
            producto.talles[item.talle]--;
            producto.stock = Object.values(producto.talles).reduce((a, b) => a + b, 0);
        } else {
            sinStock = true;
        }
    });

    if (sinStock) {
        return Swal.fire({
            icon: 'error',
            title: 'Error de stock',
            text: 'Uno o más productos ya no tienen stock.'
        });
    }

    // Guardar stock actualizado
    localStorage.setItem('productos', JSON.stringify(products));

    // Guardar historial de compra con clave dinámica, agregando método de pago
    const key = getCompraKey();
    const comprasPrevias = JSON.parse(localStorage.getItem(key)) || [];
    comprasPrevias.push({
        fecha: new Date().toISOString(),
        items: [...carrito],
        metodoPago: metodoPago || "No especificado",
        datosPago: datosPago || {}
    });
    localStorage.setItem(key, JSON.stringify(comprasPrevias));

    // Vaciar carrito
    carrito.length = 0;
    actualizarModal(carrito);

    // Confirmación
    Swal.fire({
        icon: 'success',
        title: '¡Compra realizada!',
        text: 'Gracias por tu compra.',
        confirmButtonText: 'Cerrar'
    });

    setTimeout(() => {
        const modal = bootstrap.Modal.getInstance(document.getElementById("carritoModal"));
        if (modal) modal.hide();
    }, 2000);

    // Retornar carrito vacío para actualización externa
    if (typeof actualizarModal === "function") actualizarModal(carrito);

    return carrito;
}
