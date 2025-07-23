// FILTRO GLOBAL

// Accedemos al contenedor del filtro
const filter = document.getElementById("filter");

// Renderizamos el filtro con Bootstrap
filter.innerHTML = `
    <div class="border border-secondary rounded-5 p-3 me-5 w-25">
        <label for="ordenarProductos" class="form-label fw-bold text-secondary">
            Ordenar productos por:
        </label>
        <select id="ordenarProductos" class="form-select text-secondary rounded-5">
            <option value="default">Por defecto</option>
            <option value="nombre-asc">Nombre (A-Z)</option>
            <option value="precio-asc">Precio (Menor a mayor)</option>
            <option value="precio-desc">Precio (Mayor a menor)</option>
        </select>
    </div>
`;

// Obtenemos el select ya insertado
const selectOrden = document.getElementById("ordenarProductos");

// Leemos los datos compartidos desde cardsA.js (window.productosFiltrados)
// Usamos también window.renderizarCards para actualizar visualmente

// Evento de cambio para aplicar el ordenamiento
selectOrden.addEventListener("change", (event) => {
    const criterio = event.target.value;

    // Verificamos que los datos estén disponibles
    if (!window.productosFiltrados || !window.renderizarCards) return;

    // Clonamos el array original filtrado
    let productosOrdenados = [...window.productosFiltrados];

    // Ordenamos según el criterio seleccionado
    switch (criterio) {
        case "nombre-asc":
            productosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case "precio-asc":
            productosOrdenados.sort((a, b) => a.precio - b.precio);
            break;
        case "precio-desc":
            productosOrdenados.sort((a, b) => b.precio - a.precio);
            break;
        default:
            // Mezclamos nuevamente si se elige "Por defecto"
            productosOrdenados = window.mezclarArray([...window.productosFiltrados]);
    }

    // Renderizamos nuevamente las cards con el nuevo orden
    window.renderizarCards(productosOrdenados);
});
