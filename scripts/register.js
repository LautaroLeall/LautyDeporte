// REGISTRARSE

class User {
    constructor(name, lastName, email, userName, password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
};

const submitBtn = document.getElementById("submit");
const user = new User();

// EXPRECION REGULAR PARA VALIDAR EL FORMULARIO / INPUTS
const regexNames = /^[A-Za-z\s]{3,15}$/;
const regexEmail = /^[\w]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexUserName = /^[A-Za-z0-9_-]{5,20}$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,25}$/;

const validateSubmit = () => {
    const isNameValid = regexNames.test(user.name); // Validamos el nombre
    const isLastNameValid = regexNames.test(user.lastName); // Validamos el apellido
    const isEmailValid = regexEmail.test(user.email); // Validamos el email
    const isUserNameValid = regexUserName.test(user.userName); // Validamos el nombre de usuario
    const isPasswordValid = regexPassword.test(user.password); // Validamos la contraseña
    const isRepeatPasswordValid = regexPassword.test(user.repeatPassword) // Validamos la repetición de la contraseña

    const validations = isNameValid && isLastNameValid && isEmailValid && isUserNameValid && isPasswordValid && isRepeatPasswordValid;
    return validations;
}

const error = document.getElementsByClassName("error");

const handleChange = (event) => {
    switch (event.target.id) {
        case "name":
            if (!regexNames.test(event.target.value)) {
                user.name = "";
                // Texto para mostrar el error
                error[0].innerHTML = `3-15 Letras, sin números ni símbolos`;
                error[0].style.color = "red";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                // .test(value) devuelve true si el valor coincide con la expresión regular
                user.name = event.target.value.toUpperCase();
                // Eliminmo el texto del error
                error[0].innerHTML = "";
                // Restablecer estilos si el valor es válido
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;
        case "lastName":
            if (!regexNames.test(event.target.value)) {
                user.lastName = "";
                // Texto para mostrar el error
                error[1].innerHTML = `3-15 Letras, sin números ni símbolos`;
                error[1].style.color = "red";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.lastName = event.target.value.toUpperCase();
                // Eliminmo el texto del error
                error[1].innerHTML = "";
                // Restablecer estilos si el valor es válido
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;
        case "email":
            if (!regexEmail.test(event.target.value)) {
                user.email = "";
                // Texto para mostrar el error
                error[2].innerHTML = `El email debe ser valido (ej: nombre@dominio.com)`;
                error[2].style.color = "red";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.email = event.target.value.toLowerCase();
                // Eliminmo el texto del error
                error[2].innerHTML = "";
                // Restablecer estilos si el valor es válido
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;
        case "userName":
            if (!regexUserName.test(event.target.value)) {
                user.userName = "";
                // Texto para mostrar el error
                error[3].innerHTML = `5-20 Caracteres: Letras, Números o Guiones`;
                error[3].style.color = "red";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.userName = event.target.value;
                // Eliminmo el texto del error
                error[3].innerHTML = "";
                // Restablecer estilos si el valor es válido
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;
        case "password":
            if (!regexPassword.test(event.target.value)) {
                user.password = "";
                // Texto para mostrar el error
                error[4].innerHTML = `Mín. 8 caracteres con mayúscula, minúscula, número y símbolo.`;
                error[4].style.color = "red";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.password = event.target.value;
                // Eliminmo el texto del error
                error[4].innerHTML = "";
                // Restablecer estilos si el valor es válido
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;
        case "repeatPassword":
            if (user.password !== event.target.value) {
                user.repeatPassword = "";
                // Texto para mostrar el error
                error[5].innerHTML = `Las contraseñas no coinciden`;
                error[5].style.color = "red";
                // Estilo para mostrar el error
                event.target.style.border = "2px solid red";
                event.target.style.boxShadow = "0 0 5px 1px red";
            } else {
                user.repeatPassword = event.target.value;
                // Eliminmo el texto del error
                error[5].innerHTML = "";
                // Restablecer estilos si el valor es válido
                event.target.style.border = "1px solid green";
                event.target.style.boxShadow = "0 0 5px 1px green";
            }
            break;
    }

    const validation = validateSubmit();
    if (validation) {
        // Si todos los campos son válidos, se elimina el atributo disabled
        submitBtn.removeAttribute('disabled'); // removeAttribute(name) elimina el atributo
    } else {
        // Si hay campos inválidos, se deshabilita el botón de enviar
        submitBtn.setAttribute('disabled', 'true'); // setAttribute(name, value)
    }
}

const handleSubmit = (event) => {
    event.preventDefault();
    const saveUser = JSON.parse(localStorage.getItem("Usuarios"));
    // consultamos si en el local storage existe el usuario
    if (saveUser) {
        // si existe, lo actualizamos (guardamos el objeto en el local storage)
        saveUser.push(user); // agregamos el usuario al array
        const userSerializado = JSON.stringify(saveUser); // convertimos el array a string
        localStorage.setItem("Usuarios", userSerializado); // guardamos el usuario en el local storage
    }
    else {
        // si no existe, lo creamos (guardamos el objeto en el local storage)
        let Usuarios = []; // creamos un array vacio
        Usuarios.push(user); // agregamos el usuario al array
        const userSerializado = JSON.stringify(Usuarios); // convertimos el array a string
        localStorage.setItem("Usuarios", userSerializado); // guardamos el string en el local storage
    }
    // Redirigir al index.html (inicio) luego de guardar
    alert("¡Registro exitoso!");
    window.location.href = "./login.html";
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