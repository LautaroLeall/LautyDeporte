// FILTRO GLOBAL

// Accedemos al elemento que contiene el contenido de la modal
const filter = document.getElementById("filter");

// Incrementamos para que se muestre el filtro (hecho con bootstrap)
filter.innerHTML = `
    <div class="border border-secondary rounded-5 p-3 me-5 w-25">
        <label for="ordenarProductos" class="form-label fw-bold text-secondary">
            Ordenar productos por:
        </label>
        <select id="ordenarProductos" class="form-select text-secondary rounded-5">
            <option value="default">
                Por defecto
            </option>
            <option value="nombre-asc">
                Nombre (A-Z)
                </option>
            <option value="precio-asc">
                Precio (Menor a mayor)
            </option>
            <option value="precio-desc">
                Precio (Mayor a menor)
            </option>
        </select>
    </div>
`;

// Evento de cambio para ordenar productos
document.getElementById("ordenarProductos").addEventListener("change", (event) => {
    const criterio = event.target.value;
    let productosOrdenados = [...products];

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
            // Podés volver a mezclarlos si querés aleatoriedad por defecto
            productosOrdenados = mezclarArray([...products]);
    }

    // Llama a la función que renderiza las cards
    renderizarCards(productosOrdenados);
});
