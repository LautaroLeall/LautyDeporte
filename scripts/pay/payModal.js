// scripts/pay/payModal.js

import { cargarCarrito, guardarCarrito } from '../carrito/carritoHelpers.js';
import { myProducts as products } from '../../api/products.js';
import { finalizarCompra } from '../carrito/carritoHelpers.js';
import { generarFormularioTransferencia } from './formTransferencia.js';
import { generarFormularioTarjeta } from './formTarjeta.js';
import { getAuthUser } from '../profile/profileHelpers.js';

document.addEventListener("DOMContentLoaded", () => {
    const modalContainer = document.getElementById("modal");
    if (!modalContainer) return console.error("No se encontró el contenedor #modal en el HTML");

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

    const getMetodosPagoKey = (userName) => `metodos_pago_${userName}`;
    const cargarMetodosPago = (userName) => {
        const key = getMetodosPagoKey(userName);
        return JSON.parse(localStorage.getItem(key)) || [];
    };
    const guardarMetodosPago = (userName, metodos) => {
        const key = getMetodosPagoKey(userName);
        localStorage.setItem(key, JSON.stringify(metodos));
    };

    const procesarPago = (metodo, datos) => {
        const user = getAuthUser();
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró usuario autenticado. Por favor, inicia sesión nuevamente.'
            });
            return;
        }

        let metodosPrevios = cargarMetodosPago(user.userName);
        const existeMetodo = metodosPrevios.some(m => m.metodo === metodo && JSON.stringify(m.datos) === JSON.stringify(datos));

        if (!existeMetodo) {
            metodosPrevios.push({
                metodo,
                datos,
                fecha: new Date().toISOString()
            });
            guardarMetodosPago(user.userName, metodosPrevios);
        }

        // --- Aquí aseguramos que el carrito quede vacío visual y en localStorage ---
        let carrito = cargarCarrito();
        finalizarCompra(carrito, products, metodo, datos, (carritoFinal) => {
            carrito = carritoFinal;
            guardarCarrito(carrito);

            // Actualizar modal carrito visualmente (por si está abierto)
            const carritoLista = document.getElementById("lista-carrito");
            if (carritoLista) {
                carritoLista.innerHTML = `<li class="list-group-item text-center text-muted fst-italic bg-dark border-0">Tu carrito está vacío.</li>`;
            }
            const total = document.getElementById("total-carrito");
            if (total) total.textContent = "0";
            const count = document.getElementById("carrito-count");
            if (count) count.textContent = `(0 productos)`;

            // Deshabilitar botones
            const finalizarBtn = document.getElementById("finalizar-compra-btn");
            if (finalizarBtn) finalizarBtn.disabled = true;
            const vaciarBtn = document.getElementById("vaciar-carrito-btn");
            if (vaciarBtn) vaciarBtn.disabled = true;
        });

        // Cerrar ambos modales
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
