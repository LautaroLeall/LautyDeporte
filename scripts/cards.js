// CARDS

// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

// Creamos un array con los datos de las cartas
const myProducts = [
    // INDUMENTARIA
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
        imgFront: "assets/indumentaria/lacoste-1.png",
        imgBack: "assets/indumentaria/lacoste-1-atras.png"
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
        imgFront: "assets/indumentaria/lacoste-2.png",
        imgBack: "assets/indumentaria/lacoste-2-atras.png"
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
        imgFront: "assets/indumentaria/lacoste-3.png",
        imgBack: "assets/indumentaria/lacoste-3-atras.png"
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
        imgFront: "assets/indumentaria/adidas-4.png",
        imgBack: "assets/indumentaria/adidas-4-atras.png"
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
        imgFront: "assets/indumentaria/adidas-5.png",
        imgBack: "assets/indumentaria/adidas-5-atras.png"
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
        imgFront: "assets/indumentaria/lacoste-6.png",
        imgBack: "assets/indumentaria/lacoste-6-atras.png"
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
        imgFront: "assets/indumentaria/lacoste-7.png",
        imgBack: "assets/indumentaria/lacoste-7-atras.png"
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
        imgFront: "assets/indumentaria/adidas-8.png",
        imgBack: "assets/indumentaria/adidas-8-atras.png"
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
        imgFront: "assets/indumentaria/puma-9.png",
        imgBack: "assets/indumentaria/puma-9-atras.png"
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
        imgFront: "assets/indumentaria/adidas-10.png",
        imgBack: "assets/indumentaria/adidas-10-atras.png"
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
        imgFront: "assets/indumentaria/nike-11.png",
        imgBack: "assets/indumentaria/nike-11-atras.png"
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
        imgFront: "assets/indumentaria/adidas-12.png",
        imgBack: "assets/indumentaria/adidas-12-atras.png"
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
        imgFront: "assets/indumentaria/nike-13.png",
        imgBack: "assets/indumentaria/nike-13-atras.png"
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
        imgFront: "assets/indumentaria/nike-14.png",
        imgBack: "assets/indumentaria/nike-14-atras.png"
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
        imgFront: "assets/indumentaria/puma-15.png",
        imgBack: "assets/indumentaria/puma-15-atras.png"
    },
    // ZAPATILLAS
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
        imgFront: "assets/zapatillas/lacoste-1.png",
        imgBack: "assets/zapatillas/lacoste-1-atras.png"
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
        imgFront: "assets/zapatillas/lacoste-2.png",
        imgBack: "assets/zapatillas/lacoste-2-atras.png"
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
        imgFront: "assets/zapatillas/lacoste-3.png",
        imgBack: "assets/zapatillas/lacoste-3-atras.png"
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
        imgFront: "assets/zapatillas/adidas-4.png",
        imgBack: "assets/zapatillas/adidas-4-atras.png"
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
        imgFront: "assets/zapatillas/adidas-5.png",
        imgBack: "assets/zapatillas/adidas-5-atras.png"
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
        imgFront: "assets/zapatillas/adidas-6.png",
        imgBack: "assets/zapatillas/adidas-6-atras.png"
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
        imgFront: "assets/zapatillas/nike-7.png",
        imgBack: "assets/zapatillas/nike-7-atras.png"
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
        imgFront: "assets/zapatillas/adidas-8.png",
        imgBack: "assets/zapatillas/adidas-8-atras.png"
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
        imgFront: "assets/zapatillas/asics-9.png",
        imgBack: "assets/zapatillas/asics-9-atras.png"
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
        imgFront: "assets/zapatillas/nike-10.png",
        imgBack: "assets/zapatillas/nike-10-atras.png"
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
        imgFront: "assets/zapatillas/asics-11.png",
        imgBack: "assets/zapatillas/asics-11-atras.png"
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
        imgFront: "assets/zapatillas/lacoste-12.png",
        imgBack: "assets/zapatillas/lacoste-12-atras.png"
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
        imgFront: "assets/zapatillas/nike-13.png",
        imgBack: "assets/zapatillas/nike-13-atras.png"
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
        imgFront: "assets/zapatillas/adidas-14.png",
        imgBack: "assets/zapatillas/adidas-14-atras.png"
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
        imgFront: "assets/zapatillas/nike-15.png",
        imgBack: "assets/zapatillas/nike-15-atras.png"
    },
    // ACCESORIOS
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
        imgFront: "assets/accesorios/media-1.png",
        imgBack: "assets/accesorios/media-1-atras.png"
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
        imgFront: "assets/accesorios/pelota-2.png",
        imgBack: "assets/accesorios/pelota-2-atras.png"
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
        imgFront: "assets/accesorios/guantes-3.png",
        imgBack: "assets/accesorios/guantes-3-atras.png"
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
        imgFront: "assets/accesorios/visera-4.png",
        imgBack: "assets/accesorios/visera-4-atras.png"
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
        imgFront: "assets/accesorios/media-5.png",
        imgBack: "assets/accesorios/media-5-atras.png"
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
        imgFront: "assets/accesorios/media-6.png",
        imgBack: "assets/accesorios/media-6-atras.png"
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
        imgFront: "assets/accesorios/guantes-7.png",
        imgBack: "assets/accesorios/guantes-7-atras.png"
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
        imgFront: "assets/accesorios/visera-8.png",
        imgBack: "assets/accesorios/visera-8-atras.png"
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
        imgFront: "assets/accesorios/guantes-9.png",
        imgBack: "assets/accesorios/guantes-9-atras.png"
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
        imgFront: "assets/accesorios/visera-10.png",
        imgBack: "assets/accesorios/visera-10-atras.png"
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
        imgFront: "assets/accesorios/media-11.png",
        imgBack: "assets/accesorios/media-11-atras.png"
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
        imgFront: "assets/accesorios/visera-12.png",
        imgBack: "assets/accesorios/visera-12-atras.png"
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
        imgFront: "assets/accesorios/pelota-13.png",
        imgBack: "assets/accesorios/pelota-13-atras.png"
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
        imgFront: "assets/accesorios/mochila-14.png",
        imgBack: "assets/accesorios/mochila-14-atras.png"
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
        imgFront: "assets/accesorios/mochila-15.png",
        imgBack: "assets/accesorios/mochila-15-atras.png"
    },
]

// Función para mezclar el array
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const productosAleatorios = mezclarArray([...myProducts]);

// Incrementamos cards de bootstrap a nuestro documento
productosAleatorios.map((product) => {
    // Función para generar los botones de talles disponibles
    const tallesDisponibles = Object.entries(product.talles)
        .filter(([talle, cantidad]) => cantidad > 0)
        .map(([talle]) => `
            <button type="button" class="btn btn-outline-secondary btn-talle" style="width: 50px; font-size: 0.7rem;"
                onclick="agregarAlCarrito(${product.id}, '${talle}')">
                ${talle}
            </button>
        `).join("");

    // Creamos el HTML para los productos
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
                            Disponibles
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