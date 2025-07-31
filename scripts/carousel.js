// scripts/carousel.js
// CAROUSEL

// Accedemos al elemento que contiene el contenido de la carrusel
const carousel = document.getElementById("carousel");

// Incrementamos un carrusel de bootstrap a nuestro documento
carousel.innerHTML += `
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="500">
                <img src="assets/carousel/carousel-1.png" class="img-carousel d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="assets/carousel/carousel-2.png" class="img-carousel d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="assets/carousel/carousel-3.png" class="img-carousel d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`