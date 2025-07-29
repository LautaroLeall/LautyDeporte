// Editar perfil
import { getAuthUser, updateUser, regex } from "./profileHelpers.js";

document.addEventListener("DOMContentLoaded", () => {
    // Inyectamos el HTML del modal al final del body
    document.body.insertAdjacentHTML("beforeend", `
        <div class="modal fade" id="editarPerfilModal" tabindex="-1" aria-labelledby="editarPerfilModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border border-secondary shadow-lg rounded-4 bg-dark text-light">
            <div class="modal-header border-bottom border-secondary">
                <h5 class="modal-title text-success" id="editarPerfilModalLabel">Editar Perfil</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
                <form id="editarPerfilForm" class="d-flex flex-column gap-3">
                <div>
                    <label for="nuevoNombre" class="form-label text-light">Nombre de Usuario</label>
                    <input type="text" class="form-control" id="nuevoNombre" placeholder="Ej: LautyGod" required>
                </div>
                <div>
                    <label for="nuevoEmail" class="form-label text-light">Correo Electrónico</label>
                    <input type="email" class="form-control" id="nuevoEmail" placeholder="Ej: ejemplo@mail.com" required>
                </div>
                <div>
                    <label for="nuevaPassword" class="form-label text-light">Nueva Contraseña</label>
                    <input type="password" class="form-control" id="nuevaPassword" placeholder="Mínimo 8 caracteres" required>
                </div>
                <button type="submit" class="btn btn-success fw-bold mt-2">Guardar Cambios</button>
                </form>
            </div>
            </div>
        </div>
        </div>
    `);

    // Referencias a elementos
    const btnEditar = document.getElementById("btnEditarPerfil");
    const form = document.getElementById("editarPerfilForm");
    const inputName = document.getElementById("nuevoNombre");
    const inputEmail = document.getElementById("nuevoEmail");
    const inputPass = document.getElementById("nuevaPassword");
    const modalEl = document.getElementById("editarPerfilModal");
    const bsModal = new bootstrap.Modal(modalEl);

    // Abrir modal y precargar datos
    btnEditar.addEventListener("click", () => {
        const user = getAuthUser();
        if (!user) return;

        inputName.value = user.userName || "";
        inputEmail.value = user.email || "";
        inputPass.value = "";

        bsModal.show();
    });

    // Manejar envío del formulario con validaciones
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = inputName.value.trim();
        const email = inputEmail.value.trim();
        const pass = inputPass.value.trim();
        const user = getAuthUser();

        // Validaciones
        if (!regex.userName.test(nombre)) {
            return Swal.fire("⚠️ Nombre inválido",
                "El nombre debe tener 5–20 caracteres (letras, números, _ o -).",
                "warning"
            );
        }
        if (!regex.email.test(email)) {
            return Swal.fire("⚠️ Email inválido",
                "Ingresa un correo válido, p.ej. ejemplo@dominio.com",
                "warning"
            );
        }
        if (!regex.password.test(pass)) {
            return Swal.fire("⚠️ Contraseña inválida",
                "Debe tener 8–25 caracteres, mayúscula, minúscula, número y símbolo.",
                "warning"
            );
        }

        // Actualizar usuario en localStorage
        const updated = {
            ...user,
            userName: nombre,
            email: email,
            password: pass
        };
        updateUser(updated);

        // Feedback y cierre
        Swal.fire({
            icon: "success",
            title: "Perfil actualizado",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true
        });
        bsModal.hide();

        // Refrescar datos en pantalla
        document.getElementById("nombreUsuario").textContent = nombre;
        document.getElementById("emailUsuario").textContent = email;
    });
});
