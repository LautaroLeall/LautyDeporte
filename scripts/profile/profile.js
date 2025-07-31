// scripts/profile/profile.js

import {
    getAuthUser,
    deleteUser,
    getCompraKey
} from './profileHelpers.js';

document.addEventListener("DOMContentLoaded", () => {
    const user = getAuthUser();

    // Redirigir si no hay usuario autenticado
    if (!user) return location.href = "../pages/login.html";

    // Mostrar nombre e email en el DOM
    document.getElementById("nombreUsuario").textContent = user.userName;
    document.getElementById("emailUsuario").textContent = user.email;

    // Evento para eliminar cuenta
    document.getElementById("btnEliminarCuenta").addEventListener("click", () => {
        Swal.fire({
            title: '¿Eliminar cuenta?',
            text: 'Esta acción es irreversible.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((res) => {
            if (res.isConfirmed) {
                deleteUser();
                Swal.fire('Cuenta eliminada', '', 'success').then(() => {
                    location.href = "../pages/register.html";
                });
            }
        });
    });

    // 🛍️ Mostrar historial de compras con acordeón
    const historialKey = getCompraKey(); // Clave única del usuario
    const historial = JSON.parse(localStorage.getItem(historialKey)) || [];
    const cont = document.getElementById("historialCompras");

    if (historial.length === 0) {
        cont.innerHTML = `<p class="text-muted m-0">Aún no has realizado compras.</p>`;
    } else {
        cont.innerHTML = historial.map((compra, index) => {
            const fecha = new Date(compra.fecha).toLocaleString();

            // Lista de ítems comprados
            const itemsHTML = compra.items.map(item => `
                <li class="list-group-item d-flex justify-content-between px-3 py-2 bg-light">
                    <span>${item.nombre} <small class="text-muted">(Talle ${item.talle})</small></span>
                    <span class="fw-bold text-success">$${item.precio}</span>
                </li>
            `).join("");

            // Estructura de cada acordeón de compra
            return `
                <li class="list-group-item px-0">
                    <div class="accordion accordion-flush" id="accordionCompra${index}">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed fw-semibold" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}"
                                    aria-expanded="false"
                                    aria-controls="collapse${index}">
                                    Compra del ${fecha} — ${compra.items.length} producto${compra.items.length > 1 ? 's' : ''}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse"
                                aria-labelledby="heading${index}"
                                data-bs-parent="#accordionCompra${index}">
                                <ul class="accordion-body list-group list-group-flush">
                                    ${itemsHTML}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            `;
        }).join("");
    }
});
