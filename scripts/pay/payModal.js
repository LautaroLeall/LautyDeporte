// payModal.js

import { cargarCarrito, guardarCarrito } from '../carrito/carritoHelpers.js';
import { myProducts as products } from '../../api/products.js';
import { finalizarCompra } from '../carrito/carritoHelpers.js';
import { generarFormularioTransferencia } from './formTransferencia.js';
import { generarFormularioTarjeta } from './formTarjeta.js';

document.addEventListener("DOMContentLoaded", () => {
    const modalContainer = document.getElementById("modal");
    if (!modalContainer) return console.error("No se encontró el contenedor #modal en el HTML");

    // Inyectamos el modal de pago al DOM
    modalContainer.innerHTML += `
        <div class="modal fade" id="pagoModal" tabindex="-1" aria-labelledby="pagoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content bg-dark text-light shadow-lg rounded-4 border border-secondary">
                    <div class="modal-header border-bottom border-secondary">
                        <h5 class="modal-title text-warning fw-bold" id="pagoModalLabel">Seleccionar Método de Pago</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                    </div>
                    <div class="modal-body p-4">
                        <div class="d-flex flex-wrap gap-3 justify-content-center mb-4">
                            <button class="btn btn-outline-light btn-lg" id="btn-transferencia">Transferencia Bancaria</button>
                            <button class="btn btn-outline-light btn-lg" id="btn-credito">Tarjeta de Crédito</button>
                            <button class="btn btn-outline-light btn-lg" id="btn-debito">Tarjeta de Débito</button>
                        </div>
                        <div id="formulario-pago" class="mt-4">
                            <!-- Aquí se inyecta el formulario dinámicamente -->
                        </div>
                    </div>
                    <div class="modal-footer border-top border-secondary">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const formContainer = document.getElementById("formulario-pago");

    // Función central que finaliza la compra y da feedback
    const procesarPago = (metodo, datos) => {
        localStorage.setItem("metodo_pago", JSON.stringify({
            metodo,
            datos,
            fecha: new Date().toISOString()
        }));

        let carrito = cargarCarrito();
        finalizarCompra(carrito, products, (carritoFinal) => {
            carrito = carritoFinal;
            guardarCarrito(carrito);
        });

        const pagoModal = bootstrap.Modal.getInstance(document.getElementById("pagoModal"));
        pagoModal?.hide();

        const carritoModal = bootstrap.Modal.getInstance(document.getElementById("carritoModal"));
        carritoModal?.hide();

        Swal.fire({
            icon: 'success',
            title: '¡Pago realizado!',
            text: 'Gracias por tu compra, se procesó el pago correctamente.',
            confirmButtonText: 'Cerrar'
        });
    };

    // Eventos para botones de método de pago
    setTimeout(() => {
        document.getElementById("btn-transferencia")?.addEventListener("click", () =>
            generarFormularioTransferencia(formContainer, procesarPago)
        );
        document.getElementById("btn-credito")?.addEventListener("click", () =>
            generarFormularioTarjeta(formContainer, "credito", procesarPago)
        );
        document.getElementById("btn-debito")?.addEventListener("click", () =>
            generarFormularioTarjeta(formContainer, "debito", procesarPago)
        );
    }, 200);
});
