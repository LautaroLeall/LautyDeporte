// scripts/carrito/carritoModal.js
// MODAL - CARRITO

document.addEventListener("DOMContentLoaded", () => {
    const modalContainer = document.getElementById("modal");
    if (!modalContainer) return console.error("No se encontró el contenedor #modal en el HTML");

    modalContainer.innerHTML +=
        `
            <div class="modal fade" id="carritoModal" tabindex="-1" aria-labelledby="carritoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content bg-dark text-light shadow-lg rounded-4 border border-secondary">
                        <div class="modal-header border-bottom border-secondary">
                            <h5 class="modal-title" id="carritoModalLabel">
                                <span class="text-warning fw-bold">Carrito de Compras</span>
                                <small class="text-light ms-1" id="carrito-count">(0 productos)</small>
                            </h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div class="modal-body p-4">
                            <ul id="lista-carrito" class="list-group"></ul>
                            <hr class="my-4 border-secondary">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5>Total:</h5>
                                <h4 class="text-warning fw-bold">$<span id="total-carrito">0</span></h4>
                            </div>
                        </div>
                        <div class="modal-footer border-top border-secondary">
                            <button id="vaciar-carrito-btn" type="button" class="btn btn-outline-danger me-auto">
                                Vaciar carrito
                            </button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Cerrar
                            </button>
                            <button id="finalizar-compra-btn" type="button" class="btn btn-warning text-dark fw-bold">
                                Finalizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
});