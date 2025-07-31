// scripts/navbar.js
// NAVBAR

document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.getElementById("navContainer");
    const currentURL = window.location.href;

    // Detectar rutas relativas según página
    const isIndex = currentURL.includes("index.html");
    const basePath = isIndex ? "./" : "../";

    const routes = {
        home: `${basePath}index.html`,
        register: `${basePath}pages/register.html`,
        login: `${basePath}pages/login.html`,
        zapatillas: `${basePath}pages/zapatilla.html`,
        indumentaria: `${basePath}pages/indumentaria.html`,
        accesorios: `${basePath}pages/accesorios.html`,
        profile: `${basePath}pages/profile.html`,
    };

    const authUser = JSON.parse(localStorage.getItem("authUser"));

    // Navbar dinámico
    navBar.innerHTML += `
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="d-flex align-items-center gap-2">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand fw-bold ms-5 d-lg-none" href="${routes.home}" id="homeLink">LautyDeporte</a>
                </div>

                <div class="collapse navbar-collapse" id="navbarScroll">
                    <button class="btn btn-light mb-3 align-self-end" id="closeNavBtn">
                        <i class="bi bi-box-arrow-left"></i>
                    </button>
                    <ul class="navbar-nav w-100 justify-content-around align-items-center">
                        <li class="nav-item d-none d-lg-block">
                            <a class="nav-link fw-bold" href="${routes.home}" id="homeLink">LautyDeporte</a>
                        </li>
                        <div id="navLinksContainer" class="d-flex align-items-center">
                            <li><a class="nav-link fw-medium" href="${routes.indumentaria}" id="indumentariaLink">Indumentaria</a></li>
                            <li><a class="nav-link fw-medium" href="${routes.zapatillas}" id="zapatillasLink">Zapatillas</a></li>
                            <li><a class="nav-link fw-medium" href="${routes.accesorios}" id="accesoriosLink">Accesorios</a></li>
                        </div>
                        <div id="searchInputContainer" class="d-none slide-in-up w-100 px-3">
                            <input id="searchInput" class="form-control form-control-sm" type="search" placeholder="Buscar productos...">
                        </div>
                        <div id="navIconsContainer" class="d-flex gap-3 align-items-center">
                            <li><a class="nav-link text-secondary fw-bold" id="searchLink" href="#"><i class="bi bi-search"></i></a></li>
                            <li><a class="nav-link text-success fw-bold" id="loginLink" href="${routes.login}"><i class="bi bi-person-check"></i></a></li>
                            <li><a class="nav-link text-success fw-bold" id="registerLink" href="${routes.register}"><i class="bi bi-person-add"></i></a></li>
                            <li><a class="nav-link text-danger fw-bold" id="logoutLink" href="#"><i class="bi bi-person-dash"></i></a></li>
                            <li><a class="nav-link text-success fw-bold" id="profileLink" href="${routes.profile}"><i class="bi bi-person-bounding-box"></i></a></li>
                            <li><a class="nav-link text-secondary fw-bold" id="cartLink" href="#"><i class="bi bi-cart4"></i></a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    // Mostrar/ocultar botones según autenticación
    document.getElementById("loginLink").style.display = authUser ? "none" : "flex";
    document.getElementById("registerLink").style.display = authUser ? "none" : "flex";
    document.getElementById("logoutLink").style.display = authUser ? "flex" : "none";
    document.getElementById("profileLink").style.display = authUser ? "flex" : "none";

    // Logout
    document.getElementById("logoutLink").addEventListener("click", () => {
        localStorage.removeItem("authUser");
        window.location.href = routes.login;
    });

    // Mostrar carrito en modal
    document.getElementById("cartLink").addEventListener("click", (e) => {
        e.preventDefault();
        try {
            const modal = new bootstrap.Modal(document.getElementById("carritoModal"));
            if (typeof actualizarModal === "function") actualizarModal();
            modal.show();
        } catch (err) {
            console.error("No se pudo abrir el modal del carrito:", err);
        }
    });

    // Buscador animado con toggle
    const searchLink = document.getElementById("searchLink");
    const navLinksContainer = document.getElementById("navLinksContainer");
    const searchInputContainer = document.getElementById("searchInputContainer");
    const searchInput = document.getElementById("searchInput");
    const searchIcon = searchLink.querySelector("i");
    let isSearchActive = false;

    searchLink.addEventListener("click", (event) => {
        event.preventDefault();
        if (!isSearchActive) {
            // Ocultar enlaces y mostrar input
            navLinksContainer.classList.add("slide-out-up");
            setTimeout(() => {
                navLinksContainer.classList.add("d-none");
                navLinksContainer.classList.remove("slide-out-up");

                searchInputContainer.classList.remove("d-none");
                searchInputContainer.classList.add("slide-in-up");
                searchIcon.classList.replace("bi-search", "bi-x-lg");
                isSearchActive = true;

                // auto-focus al input de búsqueda
                setTimeout(() => {
                    searchInput.focus();
                    searchInput.select();
                }, 450);
            }, 400);
        } else {
            // Volver a enlaces
            searchInputContainer.classList.remove("slide-in-up");
            searchInputContainer.classList.add("slide-out-down");
            setTimeout(() => {
                searchInputContainer.classList.add("d-none");
                searchInputContainer.classList.remove("slide-out-down");

                navLinksContainer.classList.remove("d-none");
                navLinksContainer.classList.add("slide-in-down");
                searchIcon.classList.replace("bi-x-lg", "bi-search");
                searchInput.value = "";
                setTimeout(() => navLinksContainer.classList.remove("slide-in-down"), 400);
                isSearchActive = false;
            }, 400);
        }
    });

    // cerrar menú colapsado con misma animación de slide
    const closeNavBtn = document.getElementById("closeNavBtn");
    closeNavBtn.addEventListener("click", () => {
        const collapseEl = document.getElementById("navbarScroll");
        // Quitar clase .show para animar salida
        collapseEl.classList.remove("show");
    });

    // Resaltar links activos
    const resaltarLink = (id, match) => {
        if (currentURL.includes(match)) {
            const link = document.getElementById(id);
            link.style.color = "#867960";
            link.style.borderBottom = "2px solid rgb(88, 76, 53)";
        }
    };

    resaltarLink("zapatillasLink", "zapatilla.html");
    resaltarLink("indumentariaLink", "indumentaria.html");
    resaltarLink("accesoriosLink", "accesorios.html");
});
