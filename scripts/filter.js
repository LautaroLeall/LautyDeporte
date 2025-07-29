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

// Obtenemos el <select> ya insertado
const selectOrden = document.getElementById("ordenarProductos");

// Escuchamos el evento de cambio en el filtro
selectOrden.addEventListener("change", (event) => {
    const criterio = event.target.value;

    // Verificamos que tengamos la función para renderizar
    if (!window.renderizarCards) return;

    // Usamos el array visible (sea búsqueda o no)
    const base = window.productosVisibles || window.productosFiltrados;

    if (!base) return; // Por seguridad, si no hay nada cargado

    // Clonamos el array para no mutar el original
    let productosOrdenados = [...base];

    // Aplicamos el criterio de ordenamiento
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
            // Orden por defecto: mezcla aleatoria del array original de la categoría
            productosOrdenados = window.mezclarArray([...window.productosFiltrados]);
    }

    // Renderizamos el nuevo resultado ordenado
    window.renderizarCards(productosOrdenados);
});
