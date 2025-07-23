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
                            <a class="nav-link active fw-bold" id="homeLink" aria-current="page" href="${urlHome}">LautyDeporte</a>
                        </li>
                    </div>
                    <div class="d-flex gap-5">
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="indumentariaLink" aria-current="page" href="${urlIndumentaria}">
                                Indumentaria
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="zapatillasLink" aria-current="page" href="${urlZapatillas}">
                                Zapatillas
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="accesoriosLink" aria-current="page" href="${urlAccessorios}">
                                Accesorios
                            </a>
                        </li>
                    </div>
                    <div class="d-flex gap-2">
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-bold" id="loginLink" aria-current="page" href="${urlLogin}">
                                <i class="bi bi-person-check"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-bold" id="registerLink" aria-current="page" href="${urlRegister}">
                                <i class="bi bi-person-add"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-danger fw-bold" id="logoutLink" aria-current="page" href="#" onclick="logOut()">
                                <i class="bi bi-person-dash"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-secondary fw-bold" id="profileLink" aria-current="page" onclick="abrirModal()">
                                <i class="bi bi-cart4"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-secondary fw-bold" id="searchLink" aria-current="page" href="#">
                                <i class="bi bi-search"></i>
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

// Funcion para Cerrar Sesion
const logOut = () => {
    // Eliminamos el AUTH USER del localStorage
    localStorage.removeItem('authUser');
    window.location.href = "/pages/login.html";
}

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

// Funcion para abrir el modal de carrito
function abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
    actualizarModal();
    modal.show();
}

// Aplicar estilos según la sección activa
resaltarLink("zapatillasLink", "http://127.0.0.1:5500/pages/zapatilla.html");
resaltarLink("indumentariaLink", "http://127.0.0.1:5500/pages/indumentaria.html");
resaltarLink("accesoriosLink", "http://127.0.0.1:5500/pages/accesorios.html");

// Función para aplicar estilos al link activo
function resaltarLink(id, urlMatch) {
    if (window.location.href.startsWith(urlMatch)) {
        const link = document.getElementById(id);
        link.style.color = "#867960";
        link.style.borderBottom = "2px solid rgb(88, 76, 53)";
    }
}