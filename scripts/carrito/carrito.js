// carrito.js

import { myProducts as products } from '../../api/products.js';
import {
  actualizarModal,
  confirmarEliminar,
  vaciarCarrito,
  finalizarCompra,
  cargarCarrito,
  guardarCarrito
} from './carritoHelpers.js';

// Inicializamos el carrito desde localStorage si hay usuario logueado
let carrito = cargarCarrito();

// Agrega producto al carrito (usado desde cualquier parte del sitio)
window.agregarAlCarrito = (id, talle) => {
  const producto = products.find(p => p.id === id);
  if (producto && producto.talles[talle] > 0) {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, talle });
    guardarCarrito(carrito); // Guardamos el carrito actualizado
    actualizarModal(carrito); // Actualizamos visual del modal

    // Feedback visual: mostrar modal con éxito
    const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
    modal.show();

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `${producto.nombre} (Talle ${talle}) fue agregado al carrito.`,
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-end'
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Sin stock',
      text: 'No hay stock disponible para ese talle.'
    });
  }
};

// Elimina un producto (con confirmación + feedback)
window.confirmarEliminar = (index) => {
  confirmarEliminar(index, carrito, (carritoActualizado) => {
    carrito = carritoActualizado;
    guardarCarrito(carrito);
    actualizarModal(carrito);
  });
};

// DOM Ready: asociar eventos a botones del modal
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("vaciar-carrito-btn")?.addEventListener("click", () => {
      vaciarCarrito(carrito, (carritoActualizado) => {
        carrito = carritoActualizado;
        guardarCarrito(carrito);
        actualizarModal(carrito);
      });
    });

    document.getElementById("finalizar-compra-btn")?.addEventListener("click", () => {
      finalizarCompra(carrito, products, (carritoFinal) => {
        carrito = carritoFinal;
        guardarCarrito(carrito);
        actualizarModal(carrito);
      });
    });

    actualizarModal(carrito); // Refrescar visual al cargar
  }, 100); // Esperamos que el modal se inyecte antes de asignar eventos
});
