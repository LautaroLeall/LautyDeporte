// LOGIN

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("submit");

// EXPRECION REGULAR PARA VALIDAR EL FORMULARIO / INPUTS
const regexEmail = /^[\w]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,25}$/;

const validateSubmit = () => {
    const isEmailValid = regexEmail.test(email.value); // Validamos el email
    const isPasswordValid = regexPassword.test(password.value); // Validamos la contraseña

    const validations = isEmailValid && isPasswordValid;
    return validations;
}

const error = document.getElementsByClassName("error");

const handleChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
        case "email":
            if (!regexEmail.test(value)) {
                error[0].innerHTML = "El email debe ser válido (ej: nombre@dominio.com)";
                error[0].style.color = "red";
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                error[0].innerHTML = "";
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;

        case "password":
            if (!regexPassword.test(value)) {
                error[1].innerHTML = "Mín. 8 caracteres con mayúscula, minúscula, número y símbolo.";
                error[1].style.color = "red";
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                error[1].innerHTML = "";
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;
    }

    loginButton.disabled = !validateSubmit();
};


const handleSubmit = (event) => {
    event.preventDefault();

    const arrayUsers = JSON.parse(localStorage.getItem('Usuarios'));
    // Verificar si el usuario existe
    const foundUser = arrayUsers.find(user => user.email === email.value.toLowerCase() && user.password === password.value);
        // .find() devuelve el primer elemento que cumpla la condición

    if (foundUser) {
        // Si existe, redirigir al index.html (inicio)
        alert("¡El usuario existe! Bienvenido.");
        window.location.href = "/index.html";

        // Guardar usuario en localStorage
        const userSerializado = JSON.stringify(foundUser);
        localStorage.setItem('authUser', userSerializado);
    } else {
        // Si no existe, redirigir al index.html (inicio)
        alert("¡El usuario no existe!");
    }
}

// Funcion para mostrar Contraseña
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