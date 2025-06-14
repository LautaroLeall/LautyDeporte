// CARDS INDUMENTARIA

// Creamos un array con los datos de las cartas (INDUMENTARIA)
const myProducts = [
    {
        id: 1,
        nombre: "Remera Lacoste Crudo",
        precio: 150000,
        stock: 20,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 4,
            M: 6,
            L: 8,
            XL: 2,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/lacoste-1.png",
        imgBack: "/assets/indumentaria/lacoste-1-atras.png"
    },
    {
        id: 2,
        nombre: "Remera Lacoste Blanca",
        precio: 170000,
        stock: 6,
        descripcion: "Material: 96% Algodón Orgánico, 4% Elastano - Origen Turquía",
        categoria: "Indumentaria",
        talles: {
            XS: 2,
            S: 0,
            M: 1,
            L: 0,
            XL: 3,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/lacoste-2.png",
        imgBack: "/assets/indumentaria/lacoste-2-atras.png"
    },
    {
        id: 3,
        nombre: "Remera Lacoste Blanca",
        precio: 170000,
        stock: 16,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 3,
            M: 1,
            L: 5,
            XL: 0,
            XXL: 7
        },
        imgFront: "/assets/indumentaria/lacoste-3.png",
        imgBack: "/assets/indumentaria/lacoste-3-atras.png"
    },
    {
        id: 4,
        nombre: "Remera MU '91 Blanca",
        precio: 159999,
        stock: 8,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 0,
            M: 2,
            L: 0,
            XL: 6,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/adidas-4.png",
        imgBack: "/assets/indumentaria/adidas-4-atras.png"
    },
    {
        id: 5,
        nombre: "Remera Mercedes Negra",
        precio: 149999,
        stock: 12,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 2,
            M: 1,
            L: 9,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/adidas-5.png",
        imgBack: "/assets/indumentaria/adidas-5-atras.png"
    },
    {
        id: 6,
        nombre: "Remera Lacoste Verde",
        precio: 130000,
        stock: 3,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 1,
            M: 0,
            L: 0,
            XL: 0,
            XXL: 2
        },
        imgFront: "/assets/indumentaria/lacoste-6.png",
        imgBack: "/assets/indumentaria/lacoste-6-atras.png"
    },
    {
        id: 7,
        nombre: "Remera Lacoste Azulino",
        precio: 130000,
        stock: 9,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Indumentaria",
        talles: {
            XS: 2,
            S: 0,
            M: 2,
            L: 1,
            XL: 4,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/lacoste-7.png",
        imgBack: "/assets/indumentaria/lacoste-7-atras.png"
    },
    {
        id: 8,
        nombre: "Camiseta Boca Adidas Azul",
        precio: 119999,
        stock: 17,
        descripcion: "Material: 100% Poliéster - Industria Argentina Industria Argentina",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 3,
            M: 0,
            L: 9,
            XL: 5,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/adidas-8.png",
        imgBack: "/assets/indumentaria/adidas-8-atras.png"
    },
    {
        id: 9,
        nombre: "Remera Puma Dress Code",
        precio: 119999,
        stock: 3,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 1,
            M: 0,
            L: 2,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/puma-9.png",
        imgBack: "/assets/indumentaria/puma-9-atras.png"
    },
    {
        id: 10,
        nombre: "Camiseta Arg 50 Aniversario",
        precio: 109999,
        stock: 24,
        descripcion: "Material: 100% Poliéster reciclado - Industria Argentina Industria Argentina",
        categoria: "Indumentaria",
        talles: {
            XS: 10,
            S: 9,
            M: 0,
            L: 5,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/adidas-10.png",
        imgBack: "/assets/indumentaria/adidas-10-atras.png"
    },
    {
        id: 11,
        nombre: "Remera De Entrenamiento",
        precio: 89999,
        stock: 1,
        descripcion: "Material: Malla: 81% Poliéster. 19% spandex. | Paneles: 83% Poliéster. 17%Spandex. - Origen Vietnam",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 0,
            M: 1,
            L: 0,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/nike-11.png",
        imgBack: "/assets/indumentaria/nike-11-atras.png"
    },
    {
        id: 12,
        nombre: "Remera Adidas Multicolor",
        precio: 83999,
        stock: 5,
        descripcion: "Material: 100% Algodón - Origen Camboya",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 0,
            M: 4,
            L: 0,
            XL: 1,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/adidas-12.png",
        imgBack: "/assets/indumentaria/adidas-12-atras.png"
    },
    {
        id: 13,
        nombre: "Remera Nike Sportswear",
        precio: 83999,
        stock: 7,
        descripcion: "Material: 100% Algodón - Industria Argentina",
        categoria: "Indumentaria",
        talles: {
            XS: 0,
            S: 3,
            M: 2,
            L: 2,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/nike-13.png",
        imgBack: "/assets/indumentaria/nike-13-atras.png"
    },
    {
        id: 14,
        nombre: "Camiseta Liverpool Nike",
        precio: 79999,
        stock: 8,
        descripcion: "Material: 100% Poliéster - Origen Vietnam",
        categoria: "Indumentaria",
        talles: {
            XS: 1,
            S: 0,
            M: 4,
            L: 0,
            XL: 0,
            XXL: 3
        },
        imgFront: "/assets/indumentaria/nike-14.png",
        imgBack: "/assets/indumentaria/nike-14-atras.png"
    },
    {
        id: 15,
        nombre: "Remera Manga Larga Puma",
        precio: 74999,
        stock: 4,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Indumentaria",
        talles: {
            XS: 3,
            S: 0,
            M: 0,
            L: 1,
            XL: 0,
            XXL: 0
        },
        imgFront: "/assets/indumentaria/puma-15.png",
        imgBack: "/assets/indumentaria/puma-15-atras.png"
    }
];

// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

function mezclarArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Incrementamos cards de bootstrap a nuestro documento
function renderizarCards(productos) {
    cards.innerHTML = "";

    productos.forEach((product) => {
        const tallesDisponibles = Object.entries(product.talles)
            .filter(([_, cantidad]) => cantidad > 0)
            .map(([talle]) => `
                <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                    onclick="agregarAlCarrito(${product.id}, '${talle}')">
                        ${talle}
                </button>
            `).join("");

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
                            ${tallesDisponibles || '<span class="text-muted badge border border-secondary fs-7">Sin stock</span>'}
                        </div>
                    </div>
                    <p class="text-success fw-bold">$${product.precio}</p>
                    <button class="btn btn-outline-primary">Ver producto</button>
                </div>
            </div>
        </div>
    `;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarCards(mezclarArray([...myProducts]));
});
