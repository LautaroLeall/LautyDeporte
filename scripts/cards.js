// CARDS

// Accedemos al elemento que contiene el contenido de las Cards
const cards = document.getElementById("cards");

// Creamos un array con los datos de las cartas
const myProducts = [
    {
        id: 1,
        nombre: "Remera Lacoste Crudo",
        precio: 150000,
        stock: 8,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Hombre",
        imgFront: "assets/lacoste-1.png",
        imgBack: "assets/lacoste-1-atras.png"
    },
    {
        id: 2,
        nombre: "Remera Lacoste Blanca",
        precio: 170000,
        stock: 3,
        descripcion: "Material: 96% Algodón Orgánico, 4% Elastano - Origen Turquía",
        categoria: "Hombre",
        imgFront: "assets/lacoste-2.png",
        imgBack: "assets/lacoste-2-atras.png"
    },
    {
        id: 3,
        nombre: "Remera Lacoste Blanca",
        precio: 170000,
        stock: 16,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Hombre",
        imgFront: "assets/lacoste-3.png",
        imgBack: "assets/lacoste-3-atras.png"
    },
    {
        id: 4,
        nombre: "Remera MU '91 Blanca",
        precio: 159999,
        stock: 8,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Unisex",
        imgFront: "assets/adidas-4.png",
        imgBack: "assets/adidas-4-atras.png"
    },
    {
        id: 5,
        nombre: "Remera Mercedes Negra",
        precio: 149999,
        stock: 6,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Unisex",
        imgFront: "assets/adidas-5.png",
        imgBack: "assets/adidas-5-atras.png"
    },
    {
        id: 6,
        nombre: "Remera Lacoste Verde",
        precio: 130000,
        stock: 1,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Hombre",
        imgFront: "assets/lacoste-6.png",
        imgBack: "assets/lacoste-6-atras.png"
    },
    {
        id: 7,
        nombre: "Remera Lacoste Azulino",
        precio: 130000,
        stock: 1,
        descripcion: "Material: 100% Algodón - Origen Perú",
        categoria: "Unisex",
        imgFront: "assets/lacoste-7.png",
        imgBack: "assets/lacoste-7-atras.png"
    },
    {
        id: 8,
        nombre: "Camiseta Boca Adidas Azul",
        precio: 119999,
        stock: 1,
        descripcion: "Material: 100% Poliéster - Industria Argentina Industria Argentina",
        categoria: "Unisex",
        imgFront: "assets/adidas-8.png",
        imgBack: "assets/adidas-8-atras.png"
    },
    {
        id: 9,
        nombre: "Remera Puma Dress Code",
        precio: 119999,
        stock: 1,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Unisex",
        imgFront: "assets/puma-9.png",
        imgBack: "assets/puma-9-atras.png"
    },
    {
        id: 10,
        nombre: "Camiseta Arg 50 Aniversario",
        precio: 109999,
        stock: 1,
        descripcion: "Material: 100% Poliéster reciclado - Industria Argentina Industria Argentina",
        categoria: "Niños",
        imgFront: "assets/adidas-10.png",
        imgBack: "assets/adidas-10-atras.png"
    },
    {
        id: 11,
        nombre: "Remera De Entrenamiento",
        precio: 89999,
        stock: 1,
        descripcion: "Material: Malla: 81% Poliéster. 19% spandex. | Paneles: 83% Poliéster. 17%Spandex. - Origen Vietnam",
        categoria: "Mujer",
        imgFront: "assets/nike-11.png",
        imgBack: "assets/nike-11-atras.png"
    },
    {
        id: 12,
        nombre: "Remera Adidas Multicolor",
        precio: 83999,
        stock: 1,
        descripcion: "Material: 100% Algodón - Origen Camboya",
        categoria: "Unisex",
        imgFront: "assets/adidas-12.png",
        imgBack: "assets/adidas-12-atras.png"
    },
    {
        id: 13,
        nombre: "Remera Nike Sportswear",
        precio: 83999,
        stock: 1,
        descripcion: "Material: 100% Algodón - Industria Argentina",
        categoria: "Mujer",
        imgFront: "assets/nike-13.png",
        imgBack: "assets/nike-13-atras.png"
    },
    {
        id: 14,
        nombre: "Camiseta Liverpool Nike",
        precio: 79999,
        stock: 1,
        descripcion: "Material: 100% Poliéster - Origen Vietnam",
        categoria: "Unisex",
        imgFront: "assets/nike-14.png",
        imgBack: "assets/nike-14-atras.png"
    },
    {
        id: 15,
        nombre: "Remera Manga Larga Puma",
        precio: 74999,
        stock: 1,
        descripcion: "Material: 100% Poliéster - Origen Camboya",
        categoria: "Mujer",
        imgFront: "assets/puma-15.png",
        imgBack: "assets/puma-15-atras.png"
    },
]

// Incrementamos un navbar de bootstrap a nuestro documento
myProducts.map((product) => {
    cards.innerHTML += `
        <div class="col-md-3 d-flex justify-content-center">
            <div class="card producto-card text-center">
                <div class="img-container">
                    <img src="${product.imgFront}" class="card-img-top img-card" alt="Remera Lacoste Crudo"
                        onmouseout="this.src='${product.imgFront}'" 
                        onmouseover="this.src='${product.imgBack}'">
                </div>
            <div class="card-body h-50">
                <h5 class="card-title fw-bold">${product.nombre}</h5>
                <p class="text-success fw-bold">$${product.precio}</p>
                <button class="btn btn-outline-primary">Ver producto</button>
            </div>
        </div>
    </div>
    `;
});