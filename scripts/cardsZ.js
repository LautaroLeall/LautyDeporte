// CARDS ZAPATILLAS

// Creamos un array con los datos de las cartas (ZAPATILLAS)
const myProducts = [
    {
        id: 16,
        nombre: "Zapatillas Lacoste AG-LT23",
        precio: 320000,
        stock: 13,
        descripcion: "Capellada: Textil, Sintético - Forro: Textil - Suela: Caucho Sintético - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            38: 3,
            40: 4,
            41: 3,
            43: 3
        },
        imgFront: "/assets/zapatillas/lacoste-1.png",
        imgBack: "/assets/zapatillas/lacoste-1-atras.png"
    },
    {
        id: 17,
        nombre: "Zapatillas Lacoste AG-LT25",
        precio: 320000,
        stock: 18,
        descripcion: "Capellada: Textil, Sintético - Forro: Textil, Sintético - Suela: Caucho - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            36: 5,
            38: 4,
            39: 6,
            40: 3
        },
        imgFront: "/assets/zapatillas/lacoste-2.png",
        imgBack: "/assets/zapatillas/lacoste-2-atras.png"
    },
    {
        id: 18,
        nombre: "Zapatillas Lacoste Lineshot",
        precio: 280000,
        stock: 12,
        descripcion: "Capellada: Cuero Vacuno Flor, Cuero Vacuno Descarne - Forro: Textil - Suela: Caucho - Origen Tailandia",
        categoria: "Zapatillas",
        talles: {
            41: 5,
            43: 1,
            44: 4,
            45: 2
        },
        imgFront: "/assets/zapatillas/lacoste-3.png",
        imgBack: "/assets/zapatillas/lacoste-3-atras.png"
    },
    {
        id: 19,
        nombre: "Zapatillas Adidas Adizero",
        precio: 259999,
        stock: 6,
        descripcion: "Capellada: Textil, Sintético - Forro: Textil, Sintético - Suela: Caucho - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            41: 5,
            43: 1,
        },
        imgFront: "/assets/zapatillas/adidas-4.png",
        imgBack: "/assets/zapatillas/adidas-4-atras.png"
    },
    {
        id: 20,
        nombre: "Zapatillas Adidas Ultraboost",
        precio: 249999,
        stock: 13,
        descripcion: "Capellada: Textil - Forro: Textil - Suela: Caucho - Origen China",
        categoria: "Zapatillas",
        talles: {
            40: 5,
            41: 4,
            43: 1,
            44: 3,
        },
        imgFront: "/assets/zapatillas/adidas-5.png",
        imgBack: "/assets/zapatillas/adidas-5-atras.png"
    },
    {
        id: 21,
        nombre: "Zapatillas Adidas Ultraboost",
        precio: 249999,
        stock: 14,
        descripcion: "Capellada: Textil - Forro: Textil - Suela: Caucho - Origen China",
        categoria: "Zapatillas",
        talles: {
            37: 2,
            39: 7,
            41: 4,
            43: 1,
        },
        imgFront: "/assets/zapatillas/adidas-6.png",
        imgBack: "/assets/zapatillas/adidas-6-atras.png"
    },
    {
        id: 22,
        nombre: "Zapatillas Nike Pegasus",
        precio: 249999,
        stock: 7,
        descripcion: "Capellada: Textil - Forro: Textil - Suela: Caucho - Origen China",
        categoria: "Zapatillas",
        talles: {
            38: 2,
            41: 4,
            43: 1,
        },
        imgFront: "/assets/zapatillas/nike-7.png",
        imgBack: "/assets/zapatillas/nike-7-atras.png"
    },
    {
        id: 23,
        nombre: "Zapatillas Adidas Ultraboost",
        precio: 249999,
        stock: 19,
        descripcion: "Capellada: Textil, Sintético - Forro: Textil - Suela: Caucho - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            39: 6,
            42: 7,
            44: 6,
        },
        imgFront: "/assets/zapatillas/adidas-8.png",
        imgBack: "/assets/zapatillas/adidas-8-atras.png"
    },
    {
        id: 24,
        nombre: "Zapatillas Asics Gel-NYC",
        precio: 249999,
        stock: 21,
        descripcion: "Capellada: Cuero Vacuno Flor, Textil - Forro: Textil - Suela: Caucho - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            38: 2,
            40: 9,
            43: 10,
        },
        imgFront: "/assets/zapatillas/asics-9.png",
        imgBack: "/assets/zapatillas/asics-9-atras.png"
    },
    {
        id: 25,
        nombre: "Zapatillas Nike Invincible",
        precio: 241399,
        stock: 19,
        descripcion: "Capellada: Textil - Forro: Textil - Suela: Caucho -Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            37: 4,
            40: 2,
            42: 6,
            43: 7,
        },
        imgFront: "/assets/zapatillas/nike-10.png",
        imgBack: "/assets/zapatillas/nike-10-atras.png"
    },
    {
        id: 26,
        nombre: "Zapatillas Asics Novablast",
        precio: 249000,
        stock: 20,
        descripcion: "Capellada: Textil -Forro: Textil - Suela: Caucho, Sintética - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            35: 3,
            37: 6,
            39: 6,
            41: 5,
        },
        imgFront: "/assets/zapatillas/asics-11.png",
        imgBack: "/assets/zapatillas/asics-11-atras.png"
    },
    {
        id: 27,
        nombre: "Zapatillas Lacoste LT",
        precio: 240000,
        stock: 15,
        descripcion: "Capellada: Cuero Vacuno Flor, Textil - Forro: Textil, Poliéster - Suela: Caucho - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            38: 1,
            40: 7,
            42: 2,
            43: 5,
        },
        imgFront: "/assets/zapatillas/lacoste-12.png",
        imgBack: "/assets/zapatillas/lacoste-12-atras.png"
    },
    {
        id: 28,
        nombre: "Zapatillas Nike Pegasus",
        precio: 224399,
        stock: 20,
        descripcion: "Capellada: Textil, Sintético - Forro: Textil - Suela: Caucho - Origen Vietnam",
        categoria: "Zapatillas",
        talles: {
            36: 8,
            38: 10,
            40: 2,
        },
        imgFront: "/assets/zapatillas/nike-13.png",
        imgBack: "/assets/zapatillas/nike-13-atras.png"
    },
    {
        id: 29,
        nombre: "Zapatillas Adidas Supernova",
        precio: 169999,
        stock: 15,
        descripcion: "Capellada: Textil, Sintético - Forro: Textil, Poliéster - Suela: Caucho - Industria Argentina",
        categoria: "Zapatillas",
        talles: {
            40: 5,
            42: 6,
            44: 1,
            45: 3,
        },
        imgFront: "/assets/zapatillas/adidas-14.png",
        imgBack: "/assets/zapatillas/adidas-14-atras.png"
    },
    {
        id: 30,
        nombre: "Zapatillas Nike Zoom",
        precio: 203999,
        stock: 20,
        descripcion: "Capellada: Textil, Sintético - Forro: Textil - Suela: Caucho - Origen China",
        categoria: "Zapatillas",
        talles: {
            38: 6,
            41: 4,
            44: 10,
        },
        imgFront: "/assets/zapatillas/nike-15.png",
        imgBack: "/assets/zapatillas/nike-15-atras.png"
    }
];

// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

function mezclarArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

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
