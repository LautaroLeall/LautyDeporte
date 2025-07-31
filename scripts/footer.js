// scripts/footer.js
// FOOTER

// Accedemos al elemento que contiene el contenido de la footer
const footer = document.getElementById("footer");

// Incrementamos un footer a nuestro documento
footer.innerHTML += `
    <div class="container-fluid bg-dark py-3 text-center mt-5 footer">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 col-xl-3 text-start">
                <h5 class="text-secondary fw-bold">Contacto</h5>
                <p class="text-secondary">
                    <i class="bi bi-geo-alt-fill"></i> San Miguel de Tucumán, Argentina
                </p>
                <p class="text-secondary">
                    <i class="bi bi-envelope-fill"></i> lautaroleal4@gmail.com
                </p>
                <p class="text-secondary">
                    <i class="bi bi-phone"></i> 381 339 9463
                </p>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
                <h5 class="text-secondary fw-bold mb-3">Lautaro Leal</h5>
                <img src="/assets/lldp-footer.png" class="img-fluid img-footer rounded-circle" alt="Lautaro Leal">
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 text-end">
                <h5 class="text-secondary fw-bold">Redes Sociales</h5>
                <p>
                    <a href="https://github.com/LautaroLeall" class="link-redes text-decoration-none text-secondary" target="_blank">
                        <i class="bi bi-github link-redes"></i> Github
                    </a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/lauldp/" class="link-redes text-decoration-none text-secondary" target="_blank">
                        <i class="bi bi-linkedin link-redes"></i> Linkedin
                    </a>
                </p>
                <p>
                    <a href="https://www.instagram.com/lautaro_leall/" class="link-redes text-decoration-none text-secondary" target="_blank">
                        <i class="bi bi-instagram link-redes"></i> Instagram
                    </a>
                </p>
            </div>
        </div>
    </div>
`;