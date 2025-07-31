// scripts/login.js
// LOGIN

// Obtenemos los elementos del DOM
const loginInput = document.getElementById("loginInput"); // Email o nombre de usuario
const passwordInput = document.getElementById("password"); // Contraseña
const loginButton = document.getElementById("submit");
const error = document.getElementsByClassName("error");

// Validamos al enviar el formulario
const handleSubmit = (event) => {
    event.preventDefault(); // Evitamos el envío tradicional del formulario

    const loginValue = loginInput.value.trim().toLowerCase(); // Normalizamos el valor ingresado
    const passwordValue = passwordInput.value;

    // Verificamos si hay usuarios guardados en localStorage
    const usersArray = JSON.parse(localStorage.getItem('Usuarios')) || [];

    // Buscamos el usuario por email o userName, y validamos contraseña
    const foundUser = usersArray.find(user =>
        (user.email === loginValue || user.userName.toLowerCase() === loginValue) &&
        user.password === passwordValue
    );

    if (foundUser) {
        Swal.fire({
            icon: 'success',
            title: `¡Bienvenido/a, ${foundUser.name}!`,
            text: 'Has iniciado sesión correctamente.',
            timer: 2500,
            showConfirmButton: false,
            timerProgressBar: true,
            willClose: () => {
                // Guardamos el usuario logueado como "authUser"
                localStorage.setItem('authUser', JSON.stringify(foundUser));
                // Redireccionamos a la página principal
                window.location.href = "/index.html";
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: `El usuario no existe o los datos son incorrectos.<br>Por favor, verifica tus credenciales o regístrate.`,
            confirmButtonText: 'Entendido',
            footer: '<a href="register.html">¿No tienes cuenta? Regístrate aquí</a>'
        });
    }
};

// Mostrar/Ocultar contraseña
function togglePassword(id, btn) {
    const input = document.getElementById(id);
    const icon = btn.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    }
}
