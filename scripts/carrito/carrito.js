// FUNCIONES PRINCIPALES DEL CARRITO
import { myProducts as products } from '../../api/products.js';
import {
  actualizarModal,
  confirmarEliminar,
  vaciarCarrito,
  finalizarCompra
} from './carritoHelpers.js';

let carrito = [];

// Agrega producto al carrito (usado desde cualquier parte del sitio)
window.agregarAlCarrito = (id, talle) => {
  const producto = products.find(p => p.id === id);
  if (producto && producto.talles[talle] > 0) {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, talle });
    actualizarModal(carrito);
    const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
    modal.show();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Sin stock',
      text: 'No hay stock disponible para ese talle.'
    });
  }
};

// Elimina un producto (con confirmación)
window.confirmarEliminar = (index) => {
  confirmarEliminar(index, carrito, actualizarModal);
};

// Eventos DOM para vaciar/finalizar compra
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("vaciar-carrito-btn")?.addEventListener("click", () => {
      vaciarCarrito(carrito, actualizarModal);
    });

    document.getElementById("finalizar-compra-btn")?.addEventListener("click", () => {
      finalizarCompra(carrito, products, actualizarModal);
    });

    actualizarModal(carrito);
  }, 100); // Esperamos que el modal se inyecte
});
