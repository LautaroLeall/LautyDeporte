// CARDS ACCESORIOS

// Creamos un array con los datos de las cartas (ACCESORIOS)
const myProducts = [
    {
        id: 31,
        nombre: "Media Caña Antideslizante",
        precio: 6170,
        stock: 20,
        descripcion: "Material: 95% Poliamida, 5% Elastano - Industria Argentina",
        categoria: "Accessorios",
        talles: {
            1: 6,
            3: 14,
        },
        imgFront: "/assets/accesorios/media-1.png",
        imgBack: "/assets/accesorios/media-1-atras.png"
    },
    {
        id: 32,
        nombre: "Pelota De Futbol Puma",
        precio: 36999,
        stock: 20,
        descripcion: "Origen Pakistán",
        categoria: "Accessorios",
        talles: {
            SI: 20,
        },
        imgFront: "/assets/accesorios/pelota-2.png",
        imgBack: "/assets/accesorios/pelota-2-atras.png"
    },
    {
        id: 33,
        nombre: "Guantes De Arquero Reusch",
        precio: 37980,
        stock: 11,
        descripcion: "Material: Cloruro de polivinilo 65%, textil poliéster 29%, Poliuretano 5%, textil algodón 1% - Origen Pakistán",
        categoria: "Accessorios",
        talles: {
            9: 8,
            11: 2,
            12: 1,
        },
        imgFront: "/assets/accesorios/guantes-3.png",
        imgBack: "/assets/accesorios/guantes-3-atras.png"
    },
    {
        id: 34,
        nombre: "Visera Babolat Lite",
        precio: 17350,
        stock: 6,
        descripcion: "Material: 100% Poliamida - Origen China",
        categoria: "Accessorios",
        talles: {
            SI: 6
        },
        imgFront: "/assets/accesorios/visera-4.png",
        imgBack: "/assets/accesorios/visera-4-atras.png"
    },
    {
        id: 35,
        nombre: "Medias Caña Puma",
        precio: 10999,
        stock: 21,
        descripcion: "Material: 80% Algodón, 20% Poliamida -  Industria Argentina",
        categoria: "Accessorios",
        talles: {
            3: 9,
            5: 13,
        },
        imgFront: "/assets/accesorios/media-5.png",
        imgBack: "/assets/accesorios/media-5-atras.png"
    },
    {
        id: 36,
        nombre: "Medias Caña Under Armour",
        precio: 10500,
        stock: 15,
        descripcion: "Industria Argentina",
        categoria: "Accessorios",
        talles: {
            1: 3,
            3: 7,
            5: 5
        },
        imgFront: "/assets/accesorios/media-6.png",
        imgBack: "/assets/accesorios/media-6-atras.png"
    },
    {
        id: 37,
        nombre: "Guantes De Arquero Reusch",
        precio: 138990,
        stock: 14,
        descripcion: "Industria Argentina",
        categoria: "Accessorios",
        talles: {
            8: 1,
            9: 9,
            11: 4
        },
        imgFront: "/assets/accesorios/guantes-7.png",
        imgBack: "/assets/accesorios/guantes-7-atras.png"
    },
    {
        id: 38,
        nombre: "Gorra Adidas New Logo",
        precio: 28999,
        stock: 6,
        descripcion: "Material: 100% Algodón - Origen Vietnam",
        categoria: "Accessorios",
        talles: {
            SI: 6
        },
        imgFront: "/assets/accesorios/visera-8.png",
        imgBack: "/assets/accesorios/visera-8-atras.png"
    },
    {
        id: 39,
        nombre: "Guantes De Arquero Reusch",
        precio: 37980,
        stock: 15,
        descripcion: "Material: 65% Cloruro de polivinilo, 29% Poliéster, 5% Poliuretano,1% Otros - Origen Pakistán",
        categoria: "Accessorios",
        talles: {
            8: 1,
            9: 6,
            11: 3,
            12: 5
        },
        imgFront: "/assets/accesorios/guantes-9.png",
        imgBack: "/assets/accesorios/guantes-9-atras.png"
    },
    {
        id: 39,
        nombre: "Gorra Capslab One Piece",
        precio: 69999,
        stock: 0,
        descripcion: "Material: 100% Poliéster - Origen China",
        categoria: "Accessorios",
        talles: {
            SI: 0,
        },
        imgFront: "/assets/accesorios/visera-10.png",
        imgBack: "/assets/accesorios/visera-10-atras.png"
    },
    {
        id: 40,
        nombre: "Medias Con Caña Vans",
        precio: 18900,
        stock: 5,
        descripcion: "Material: 69% Algodón, 30% Poliéster, 1% Elastano - Industria Argentina",
        categoria: "Accessorios",
        talles: {
            2: 5,
        },
        imgFront: "/assets/accesorios/media-11.png",
        imgBack: "/assets/accesorios/media-11-atras.png"
    },
    {
        id: 40,
        nombre: "Gorra New Era Chicago",
        precio: 63999,
        stock: 2,
        descripcion: "Material: 65% Poliéster, 35% Algodón - Origen China",
        categoria: "Accessorios",
        talles: {
            SI: 2,
        },
        imgFront: "/assets/accesorios/visera-12.png",
        imgBack: "/assets/accesorios/visera-12-atras.png"
    },
    {
        id: 41,
        nombre: "Pelota De Basquet Reebok",
        precio: 22400,
        stock: 7,
        descripcion: "Origen China",
        categoria: "Accessorios",
        talles: {
            SI: 7,
        },
        imgFront: "/assets/accesorios/pelota-13.png",
        imgBack: "/assets/accesorios/pelota-13-atras.png"
    },
    {
        id: 42,
        nombre: "Mochila Adidas Classic",
        precio: 35999,
        stock: 12,
        descripcion: "Material: 100% Poliéster - Origen Indonesia",
        categoria: "Accessorios",
        talles: {
            SI: 12,
        },
        imgFront: "/assets/accesorios/mochila-14.png",
        imgBack: "/assets/accesorios/mochila-14-atras.png"
    },
    {
        id: 43,
        nombre: "Mochila Puma Phase",
        precio: 44999,
        stock: 0,
        descripcion: "Material: 100% Poliéster - Origen Vietnam",
        categoria: "Accessorios",
        talles: {
            SI: 0,
        },
        imgFront: "/assets/accesorios/mochila-15.png",
        imgBack: "/assets/accesorios/mochila-15-atras.png"
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
