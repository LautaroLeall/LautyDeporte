// NAVBAR 

// Accedemos al elemento que contiene el contenido de la navBar
const navBar = document.getElementById("navContainer");

// Variables para definir las rutas de nuestra pagina <a> </a>
let urlHome;
let urlRegister;
let urlLogin;
let urlZapatillas;
let urlIndumentaria;
let urlAccessorios;

// Condicional para asignar las rutas de nuestra pagina <a> </a>
if (window.location.href == 'http://127.0.0.1:5500/index.html') {
    urlHome = './index.html';
    urlRegister = './pages/register.html';
    urlLogin = './pages/login.html';
    urlZapatillas = './pages/zapatilla.html';
    urlIndumentaria = './pages/indumentaria.html';
    urlAccessorios = './pages/accesorios.html';
} else {
    urlHome = '../index.html';
    urlRegister = '/pages/register.html';
    urlLogin = '/pages/login.html';
    urlZapatillas = '/pages/zapatilla.html';
    urlIndumentaria = '/pages/indumentaria.html';
    urlAccessorios = '/pages/accesorios.html';
}

// Accedemos al AUTH USER del localStorage (usuarios registrados)
const authUser = JSON.parse(localStorage.getItem('authUser'));

// Incrementamos un navbar de bootstrap a nuestro documento
navBar.innerHTML += `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav my-lg-0 navbar-nav-scroll w-100 justify-content-around align-items-center">
                    <div class="d-flex">
                        <li class="nav-item">
                            <a class="nav-link active fw-bold" id="homeLink" href="${urlHome}">LautyDeporte</a>
                        </li>
                    </div>
                    <div class="d-flex gap-5 align-items-center" id="navLinksContainer">
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="indumentariaLink" href="${urlIndumentaria}">Indumentaria</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="zapatillasLink" href="${urlZapatillas}">Zapatillas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="accesoriosLink" href="${urlAccessorios}">Accesorios</a>
                        </li>
                    </div>
                    <div id="searchInputContainer" class="d-none w-50 slide-in-up">
                        <input id="searchInput" class="form-control form-control-sm" type="search" placeholder="Buscar productos...">
                    </div>
                    <div class="d-flex gap-2">
                        <li class="nav-item">
                            <a class="nav-link active text-secondary fw-bold" id="searchLink" href="#">
                                <i class="bi bi-search"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-bold" id="loginLink" href="${urlLogin}">
                                <i class="bi bi-person-check"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-bold" id="registerLink" href="${urlRegister}">
                                <i class="bi bi-person-add"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-danger fw-bold" id="logoutLink" href="#" onclick="logOut()">
                                <i class="bi bi-person-dash"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-secondary fw-bold" id="profileLink" onclick="abrirModal()">
                                <i class="bi bi-cart4"></i>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
`;

const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const logoutLink = document.getElementById("logoutLink");
const searchLink = document.getElementById("searchLink");
const searchIcon = searchLink.querySelector("i");
const navLinksContainer = document.getElementById("navLinksContainer");
const searchInputContainer = document.getElementById("searchInputContainer");
const searchInput = document.getElementById("searchInput");
let isSearchActive = false;

// Condicional para mostrar los botones según el estado de autenticación
if (authUser) {
    // Usuario autenticado
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutLink.style.display = "flex";
} else {
    // Usuario no autenticado
    loginLink.style.display = "flex";
    registerLink.style.display = "flex";
    logoutLink.style.display = "none";
}

// Funcion para Cerrar Sesion
function logOut() {
    // Eliminamos el AUTH USER del localStorage
    localStorage.removeItem('authUser');
    window.location.href = "/pages/login.html";
}

// Funcion para abrir el modal de carrito
function abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
    actualizarModal();
    modal.show();
}

// Función para aplicar estilos al link activo
function resaltarLink(id, urlMatch) {
    if (window.location.href.startsWith(urlMatch)) {
        const link = document.getElementById(id);
        link.style.color = "#867960";
        link.style.borderBottom = "2px solid rgb(88, 76, 53)";
    }
}

// Aplicar estilos según la sección activa
resaltarLink("zapatillasLink", "http://127.0.0.1:5500/pages/zapatilla.html");
resaltarLink("indumentariaLink", "http://127.0.0.1:5500/pages/indumentaria.html");
resaltarLink("accesoriosLink", "http://127.0.0.1:5500/pages/accesorios.html");

// ANIMACIONES AL APRETAR BUSCADOR (SLIDE UP / DOWN)
searchLink.addEventListener("click", (event) => {
    event.preventDefault();

    if (!isSearchActive) {
        // Deslizar los links hacia arriba
        navLinksContainer.classList.add("slide-out-up");

        setTimeout(() => {
            navLinksContainer.classList.add("d-none");
            navLinksContainer.classList.remove("slide-out-up");

            // Mostrar input deslizándose hacia arriba
            searchInputContainer.classList.remove("d-none");
            searchInputContainer.classList.add("slide-in-up");

            searchIcon.classList.replace("bi-search", "bi-x-lg");
            isSearchActive = true;
        }, 400);
    } else {
        // Deslizar el input hacia abajo
        searchInputContainer.classList.remove("slide-in-up");
        searchInputContainer.classList.add("slide-out-down");

        setTimeout(() => {
            searchInputContainer.classList.add("d-none");
            searchInputContainer.classList.remove("slide-out-down");

            // Mostrar los links deslizándose hacia abajo
            navLinksContainer.classList.remove("d-none");
            navLinksContainer.classList.add("slide-in-down");

            searchIcon.classList.replace("bi-x-lg", "bi-search");
            searchInput.value = "";

            setTimeout(() => {
                navLinksContainer.classList.remove("slide-in-down");
            }, 400);

            isSearchActive = false;
        }, 400);
    }
});
