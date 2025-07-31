// scripts/profile/editModal.js

// Editar perfil con campos opcionales y validaciones
import { getAuthUser, updateUser, regex } from "./profileHelpers.js";

document.addEventListener("DOMContentLoaded", () => {
    // Inyectar HTML del modal al final del body
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
                                <input type="text" class="form-control" id="nuevoNombre" placeholder="Ej: LautyGod">
                            </div>
                            <div>
                                <label for="nuevoEmail" class="form-label text-light">Correo Electrónico</label>
                                <input type="email" class="form-control" id="nuevoEmail" placeholder="Ej: ejemplo@mail.com">
                            </div>
                            <div>
                                <label for="nuevaPassword" class="form-label text-light">Nueva Contraseña</label>
                                <input type="password" class="form-control" id="nuevaPassword" placeholder="Mínimo 8 caracteres">
                            </div>
                            <button type="submit" class="btn btn-success fw-bold mt-2">Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `);

    // Referencias a elementos del DOM
    const btnEditar = document.getElementById("btnEditarPerfil");
    const form = document.getElementById("editarPerfilForm");
    const inputName = document.getElementById("nuevoNombre");
    const inputEmail = document.getElementById("nuevoEmail");
    const inputPass = document.getElementById("nuevaPassword");
    const modalEl = document.getElementById("editarPerfilModal");
    const bsModal = new bootstrap.Modal(modalEl);

    // Abrir modal y precargar datos actuales
    btnEditar.addEventListener("click", () => {
        const user = getAuthUser();
        if (!user) return;

        inputName.value = user.userName || "";
        inputEmail.value = user.email || "";
        inputPass.value = "";

        bsModal.show();
    });

    // Validar campos y actualizar si hay cambios
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nuevoNombre = inputName.value.trim();
        const nuevoEmail = inputEmail.value.trim();
        const nuevaPassword = inputPass.value.trim();

        const user = getAuthUser();
        let cambios = false;
        const actualizados = { ...user };

        const oldUserName = user.userName;

        // Validación y actualización del nombre de usuario
        if (nuevoNombre && nuevoNombre !== user.userName) {
            if (!regex.userName.test(nuevoNombre)) {
                return Swal.fire("Nombre inválido", "Debe tener 5–20 caracteres válidos.", "warning");
            }
            actualizados.userName = nuevoNombre;
            cambios = true;
        }

        // Validación y actualización del email
        if (nuevoEmail && nuevoEmail !== user.email) {
            if (!regex.email.test(nuevoEmail)) {
                return Swal.fire("Email inválido", "Correo electrónico no válido.", "warning");
            }
            actualizados.email = nuevoEmail;
            cambios = true;
        }

        // Validación y actualización de la contraseña
        if (nuevaPassword) {
            if (!regex.password.test(nuevaPassword)) {
                return Swal.fire("⚠️ Contraseña inválida", "Debe tener 8–25 caracteres con mayúscula, minúscula, número y símbolo.", "warning");
            }
            actualizados.password = nuevaPassword;
            cambios = true;
        }

        if (!cambios) {
            return Swal.fire("Sin cambios", "No modificaste ningún campo.", "info");
        }

        // ACTUALIZAR authUser
        updateUser(actualizados);

        // ACTUALIZAR el usuario en el array Usuarios
        const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
        const index = usuarios.findIndex(
            u => u.userName === user.userName && u.email === user.email
        );

        if (index !== -1) {
            usuarios[index] = actualizados;
            localStorage.setItem("Usuarios", JSON.stringify(usuarios));
        }

        // Si cambió el userName, renombrar las claves de historial y métodos de pago
        if (actualizados.userName !== oldUserName) {
            const historialKeyOld = `compras_${oldUserName}`;
            const historialKeyNew = `compras_${actualizados.userName}`;
            const metodosKeyOld = `metodos_pago_${oldUserName}`;
            const metodosKeyNew = `metodos_pago_${actualizados.userName}`;

            const historial = localStorage.getItem(historialKeyOld);
            const metodos = localStorage.getItem(metodosKeyOld);

            if (historial) {
                localStorage.setItem(historialKeyNew, historial);
                localStorage.removeItem(historialKeyOld);
            }

            if (metodos) {
                localStorage.setItem(metodosKeyNew, metodos);
                localStorage.removeItem(metodosKeyOld);
            }
        }

        // Feedback visual
        Swal.fire({
            icon: "success",
            title: "Perfil actualizado",
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true
        });

        bsModal.hide();

        // Actualizar visual del perfil
        document.getElementById("nombreUsuario").textContent = actualizados.userName;
        document.getElementById("emailUsuario").textContent = actualizados.email;
    });
});
