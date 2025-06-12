// NAVBAR

// Accedemos al elemento que contiene el contenido de la navBar
const navBar = document.getElementById("navContainer");

// Variables para definir las rutas de nuestra pagina <a> </a>
let urlHome;
let urlRegister;
let urlLogin;

// Condicional para asignar las rutas de nuestra pagina <a> </a>
if (window.location.href == 'http://127.0.0.1:5500/index.html'
    || window.location.href == 'http://127.0.0.1:5500/index.html#'
    || window.location.href == 'http://127.0.0.1:5500/index.html?') {
    urlHome = './index.html';
    urlRegister = './pages/register.html';
    urlLogin = './pages/login.html';
} else {
    urlHome = '../index.html';
    urlRegister = '../pages/register.html';
    urlLogin = '../pages/login.html';
}

// Accedemos al AUTH USER del localStorage (usuarios registrados)
const authUser = JSON.parse(localStorage.getItem('authUser'));

// Incrementamos un navbar de bootstrap a nuestro documento
navBar.innerHTML += `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand disabled text-secondary fw-bold" href="#">LautyDeporte</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll gap-5" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <a class="nav-link active fw-bold" id="homeLink" aria-current="page" href="${urlHome}">Inicio</a>
                    </li>
                    <div class="d-flex gap-5 justify-content-end" style="width: 40rem;">
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="womenLink" aria-current="page" href="#">Mujeres</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="menLink" aria-current="page" href="#">Hombres</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-medium" id="kidsLink" aria-current="page" href="#">Niños</a>
                        </li>
                    </div>
                    <div class="d-flex justify-content-end gap-3 align-items-center" style="width: 30rem;">
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-bold" id="loginLink" aria-current="page" href="${urlLogin}">Iniciar Sesion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-success fw-bold" id="registerLink" aria-current="page" href="${urlRegister}">Registrarse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-danger fw-bold" id="logoutLink" aria-current="page" href="#" onclick="logOut()">Cerrar Sesion</a>
                        </li>
                        <a class="nav-link active text-secondary fw-bold" id="profileLink" aria-current="page" onclick="abrirModal()">
                            <i class="bi bi-cart4"></i>
                        </a>
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
    window.location.href = "./pages/login.html";
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

