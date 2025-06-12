// CARDS

// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

// Categoria Mujer
const categoria = document.getElementById("categoria");


// Creamos un array con los datos de las cartas
const myProducts = [
    {
        id: 4,
        nombre: "Remera MU '91 Blanca",
        precio: 159999,
        stock: 8,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Unisex",
        talles: {
            XS: 0,
            S: 0,
            M: 2,
            L: 0,
            XL: 6,
            XXL: 0
        },
        imgFront: "/assets/adidas-4.png",
        imgBack: "/assets/adidas-4-atras.png"
    },
    {
        id: 5,
        nombre: "Remera Mercedes Negra",
        precio: 149999,
        stock: 12,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Unisex",
        talles: {
            XS: 0,
            S: 2,
            M: 1,
            L: 9,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/adidas-5.png",
        imgBack: "/assets/adidas-5-atras.png"
    },
    {
        id: 8,
        nombre: "Camiseta Boca Adidas Azul",
        precio: 119999,
        stock: 17,
        descripcion: "Material: 100% Poliéster - Industria Argentina Industria Argentina",
        categoria: "Unisex",
        talles: {
            XS: 0,
            S: 3,
            M: 0,
            L: 9,
            XL: 5,
            XXL: 0
        },
        imgFront: "/assets/adidas-8.png",
        imgBack: "/assets/adidas-8-atras.png"
    },
    {
        id: 9,
        nombre: "Remera Puma Dress Code",
        precio: 119999,
        stock: 3,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Unisex",
        talles: {
            XS: 0,
            S: 1,
            M: 0,
            L: 2,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/puma-9.png",
        imgBack: "/assets/puma-9-atras.png"
    },
    {
        id: 11,
        nombre: "Remera De Entrenamiento",
        precio: 89999,
        stock: 1,
        descripcion: "Material: Malla: 81% Poliéster. 19% spandex. | Paneles: 83% Poliéster. 17%Spandex. - Origen Vietnam",
        categoria: "Mujer",
        talles: {
            XS: 0,
            S: 0,
            M: 1,
            L: 0,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/nike-11.png",
        imgBack: "/assets/nike-11-atras.png"
    },
    {
        id: 12,
        nombre: "Remera Adidas Multicolor",
        precio: 83999,
        stock: 5,
        descripcion: "Material: 100% Algodón - Origen Camboya",
        categoria: "Unisex",
        talles: {
            XS: 0,
            S: 0,
            M: 4,
            L: 0,
            XL: 1,
            XXL: 0
        },
        imgFront: "/assets/adidas-12.png",
        imgBack: "/assets/adidas-12-atras.png"
    },
    {
        id: 13,
        nombre: "Remera Nike Sportswear",
        precio: 83999,
        stock: 7,
        descripcion: "Material: 100% Algodón - Industria Argentina",
        categoria: "Mujer",
        talles: {
            XS: 0,
            S: 3,
            M: 2,
            L: 2,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/nike-13.png",
        imgBack: "/assets/nike-13-atras.png"
    },
    {
        id: 14,
        nombre: "Camiseta Liverpool Nike",
        precio: 79999,
        stock: 8,
        descripcion: "Material: 100% Poliéster - Origen Vietnam",
        categoria: "Unisex",
        talles: {
            XS: 1,
            S: 0,
            M: 4,
            L: 0,
            XL: 0,
            XXL: 3
        },
        imgFront: "/assets/nike-14.png",
        imgBack: "/assets/nike-14-atras.png"
    },
    {
        id: 15,
        nombre: "Remera Manga Larga Puma",
        precio: 74999,
        stock: 4,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Mujer",
        talles: {
            XS: 3,
            S: 0,
            M: 0,
            L: 1,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/puma-15.png",
        imgBack: "/assets/puma-15-atras.png"
    },
]

// Incrementamos cards de bootstrap a nuestro documento
myProducts.map((product) => {
    // Función para generar los botones de talles disponibles
    const tallesDisponibles = Object.entries(product.talles)
        .filter(([talles, cantidad]) => cantidad > 0)
        // Filtramos los botones de talles disponibles
        .map(([talle]) => `
            <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                onclick="agregarAlCarrito(${product.id}, '${talle}')">
                    ${talle}
            </button>
        `).join("");
        // Creamos el HTML para los botones de talles disponibles

    cards.innerHTML += `
        <div class="col-md-3 d-flex justify-content-center">
            <div class="card producto-card text-center shadow-lg">
                <div class="img-container">
                    <img src="${product.imgFront}" class="card-img-top img-card" alt="${product.nombre}"
                        onmouseout="this.src='${product.imgFront}'" 
                        onmouseover="this.src='${product.imgBack}'">
                </div>
                <div class="card-body h-50">
                    <h5 class="card-title fw-bold">${product.nombre}</h5>
                    <div class="list-group mb-3">
                        <div class="list-group-item fw-bold text-secondary">
                            Talles Disponibles
                        </div>
                        <div class="list-group-item d-flex justify-content-center flex-wrap gap-2 badge text-align-center">
                            ${tallesDisponibles || '<span class="text-muted">Sin stock</span>'}
                        </div>
                    </div>
                    <p class="text-success fw-bold">$${product.precio}</p>
                    <button class="btn btn-outline-primary">Ver producto</button>
                </div>
            </div>
        </div>
    `;
});