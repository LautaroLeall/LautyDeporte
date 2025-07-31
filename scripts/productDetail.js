// scripts/productDetail.js
// PRODUCT DETAIL
import { myProducts } from '../api/products.js';

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'));
const container = document.getElementById("productDetail");
const producto = myProducts.find(p => p.id === productId);

if (!producto) {
    container.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            Producto no encontrado
        </div>
    `;
} else {
    const tallesDisponibles = Object.entries(producto.talles)
        .filter(([talle, stock]) => stock > 0)
        .map(([talle], i) => `
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="talleOptions" id="talle-${i}" value="${talle}">
                <label class="form-check-label btn btn-outline-secondary" for="talle-${i}">${talle}</label>
            </div>
        `).join("");

    container.innerHTML = 
        `
            <div class="card-detail row align-items-center">
                <div class="col-md-5 text-center">
                    <div class="d-flex justify-content-center gap-3 mb-3">
                        <img src="${producto.imgFront}" class="img-thumbnail thumb-img" onclick="mostrarImagen('${producto.imgFront}')">
                        <img src="${producto.imgBack}" class="img-thumbnail thumb-img" onclick="mostrarImagen('${producto.imgBack}')">
                    </div>
                    <img id="img-principal" src="${producto.imgFront}" class="img-fluid rounded shadow zoomed-img" alt="${producto.nombre}">
                </div>
                <div class="col-md-7">
                    <h3 class="fw-bold">${producto.nombre}</h3>
                    <p class="text-success fw-bold fs-5">$${producto.precio}</p>
                    <p class="text-muted">${producto.descripcion || 'Sin descripción disponible.'}</p>
                    <div class="mt-4">
                        <label class="form-label fw-bold">Disponibilidad:</label>
                        <div id="tallesContainer" class="mb-3">
                            ${tallesDisponibles || '<p class="text-danger">Sin stock disponible</p>'}
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button id="btnAgregar" class="btn btn-warning fw-bold" ${tallesDisponibles ? '' : 'disabled'}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        `;

    document.getElementById("btnAgregar").addEventListener("click", () => {
        const talleSeleccionado = document.querySelector('input[name="talleOptions"]:checked');
        if (!talleSeleccionado) {
            Swal.fire({
                icon: 'info',
                title: 'Verifica tu selección',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000
            });
            return;
        }
        const talle = talleSeleccionado.value;
        agregarAlCarrito(producto.id, talle);
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: `${producto.nombre} (Talle ${talle}) fue agregado al carrito.`,
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            position: 'top-end'
        });
    });

    // Función global para mostrar imagen destacada al hacer clic
    window.mostrarImagen = (src) => {
        const principal = document.getElementById("img-principal");
        principal.src = src;
    }
}
