// scripts/carrito/carrito.js

import { myProducts as products } from '../../api/products.js';
import {
  actualizarModal,
  confirmarEliminar,
  vaciarCarrito,
  finalizarCompra,
  cargarCarrito,
  guardarCarrito
} from './carritoHelpers.js';

import { getAuthUser } from '../profile/profileHelpers.js';

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
      timer: 1000,
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
    // Botón "Vaciar carrito"
    document.getElementById("vaciar-carrito-btn")?.addEventListener("click", () => {
      vaciarCarrito(carrito, (carritoActualizado) => {
        carrito = carritoActualizado;
        guardarCarrito(carrito);
        actualizarModal(carrito);
      });
    });

    // Botón "Finalizar compra" → valida login Y carrito, luego muestra modal pago
    document.getElementById("finalizar-compra-btn")?.addEventListener("click", () => {
      const user = getAuthUser();

      // Si NO está autenticado → mostrar alerta
      if (!user) {
        return Swal.fire({
          icon: 'info',
          title: 'Debes iniciar sesión',
          text: 'Inicia sesión para finalizar la compra.',
          confirmButtonText: 'Entendido'
        });
      }

      // Si carrito está vacío
      if (!carrito || carrito.length === 0) {
        return Swal.fire({
          icon: 'info',
          title: 'Carrito vacío',
          text: 'Agrega productos antes de continuar.'
        });
      }

      // Esperar que el modal esté en el DOM
      const pagoModalElement = document.getElementById("pagoModal");

      if (!pagoModalElement) {
        return Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El modal de pago no se cargó correctamente. Intenta recargar la página.'
        });
      }

      // cerrar modal carrito antes de abrir modal pago
      const carritoModalInstance = bootstrap.Modal.getInstance(document.getElementById("carritoModal"));
      if (carritoModalInstance) {
        carritoModalInstance.hide();
      }

      // Mostrar el modal pago si todo está OK
      const pagoModal = new bootstrap.Modal(pagoModalElement);
      pagoModal.show();
      guardarCarrito(carrito);
    });

    // Actualizar el modal visual del carrito al cargar
    actualizarModal(carrito);
  }, 100); // Esperamos que el modal se inyecte antes de asignar eventos
});
