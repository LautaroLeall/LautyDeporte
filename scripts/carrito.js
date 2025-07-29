// FUNCIONES CARRITO

const listaCarrito = () => document.getElementById("lista-carrito");
const totalCarrito = () => document.getElementById("total-carrito");
const carritoCount = () => document.getElementById("carrito-count");
const finalizarCompraBtn = () => document.getElementById("finalizar-compra-btn");
const vaciarCarritoBtn = () => document.getElementById("vaciar-carrito-btn");

let carrito = [];

function actualizarModal() {
  const lista = listaCarrito();
  const total = totalCarrito();
  const count = carritoCount();
  const finalizarBtn = finalizarCompraBtn();
  const vaciarBtn = vaciarCarritoBtn();

  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = `<li class="list-group-item text-center text-muted fst-italic bg-dark border-0">Tu carrito está vacío.</li>`;
    total.textContent = "0";
    count.textContent = `(0 productos)`;
    finalizarBtn.disabled = true;
    vaciarBtn.disabled = true;
    return;
  }

  let totalAmount = 0;
  carrito.forEach((item, index) => {
    totalAmount += item.precio;
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center text-light bg-secondary bg-opacity-25 border-0 rounded-3 mb-2">
        <div>
          <strong>${item.nombre}</strong><br>
          <small class="text-muted">Talle: ${item.talle}</small>
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
}

window.confirmarEliminar = (index) => {
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
      actualizarModal();
      Swal.fire({
        icon: 'success',
        title: 'Producto eliminado',
        timer: 1200,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    }
  });
};

window.agregarAlCarrito = (id, talle) => {
  const producto = products.find(p => p.id === id);
  if (producto && producto.talles[talle] > 0) {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, talle });
    actualizarModal();
    const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
    modal.show();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Sin stock',
      text: 'No hay stock disponible para ese talle.',
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  vaciarCarritoBtn().addEventListener("click", () => {
    Swal.fire({
      title: '¿Vaciar carrito?',
      text: 'Se eliminarán todos los productos',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        carrito = [];
        actualizarModal();
        Swal.fire({
          icon: 'success',
          title: 'Carrito vaciado',
          timer: 1000,
          showConfirmButton: false,
        });
      }
    });
  });

  finalizarCompraBtn().addEventListener("click", () => {
    if (carrito.length === 0) {
      return Swal.fire({ icon: 'info', title: 'Carrito vacío', text: 'No hay productos para comprar.' });
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
      return Swal.fire({ icon: 'error', title: 'Error de stock', text: 'Uno o más productos ya no tienen stock.' });
    }

    localStorage.setItem('productos', JSON.stringify(products));
    carrito = [];
    actualizarModal();
    renderizarCards(products);

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
  });

  actualizarModal();
});
