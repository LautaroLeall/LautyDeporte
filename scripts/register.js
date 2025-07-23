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
const inputs = document.querySelectorAll("input");
const errors = document.getElementsByClassName("error");

// Expresiones Regulares
const regex = {
    name: /^[A-Za-z\s]{3,15}$/,
    lastName: /^[A-Za-z\s]{3,15}$/,
    email: /^[\w]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/,
    userName: /^[A-Za-z0-9_-]{5,20}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,25}$/
};

// Función reutilizable de validación visual
const setInputFeedback = (index, isValid, message = "") => {
    const input = inputs[index];
    const error = errors[index];

    if (isValid) {
        input.style.border = "1px solid green";
        input.style.boxShadow = "0 0 5px 1px green";
        error.innerHTML = "";
    } else {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 0 5px 1px red";
        error.innerHTML = message;
        error.style.color = "red";
    }
};

const validateAll = () => {
    const values = getFormValues();
    const validations = [
        regex.name.test(values.name),
        regex.lastName.test(values.lastName),
        regex.email.test(values.email),
        regex.userName.test(values.userName),
        regex.password.test(values.password),
        values.password === values.repeatPassword
    ];
    return validations.every(Boolean);
};

// Obtenemos los valores actuales del formulario
const getFormValues = () => {
    return {
        name: document.getElementById("name").value.trim().toUpperCase(),
        lastName: document.getElementById("lastName").value.trim().toUpperCase(),
        email: document.getElementById("email").value.trim().toLowerCase(),
        userName: document.getElementById("userName").value.trim(),
        password: document.getElementById("password").value,
        repeatPassword: document.getElementById("repeatPassword").value
    };
};

// Validación dinámica por campo
const handleChange = (event) => {
    const { id, value } = event.target;
    const values = getFormValues();

    switch (id) {
        case "name":
            setInputFeedback(0, regex.name.test(value), "3-15 Letras, sin números ni símbolos");
            break;
        case "lastName":
            setInputFeedback(1, regex.lastName.test(value), "3-15 Letras, sin números ni símbolos");
            break;
        case "email":
            setInputFeedback(2, regex.email.test(value), "Email inválido (ej: nombre@dominio.com)");
            break;
        case "userName":
            setInputFeedback(3, regex.userName.test(value), "5-20 caracteres: letras, números o guiones");
            break;
        case "password":
            setInputFeedback(4, regex.password.test(value), "Mín. 8 caracteres con mayúscula, minúscula, número y símbolo.");
            break;
        case "repeatPassword":
            setInputFeedback(5, value === values.password, "Las contraseñas no coinciden");
            break;
    }

    submitBtn.disabled = !validateAll();
};

// Validación contra usuarios ya existentes
const isDuplicate = (newUser, users) => {
    return users.some(user =>
        user.email === newUser.email ||
        user.userName === newUser.userName
    );
};

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = getFormValues();
    const newUser = new User(
        formData.name,
        formData.lastName,
        formData.email,
        formData.userName,
        formData.password
    );

    const users = JSON.parse(localStorage.getItem("Usuarios")) || [];

    if (isDuplicate(newUser, users)) {
        alert("El email o el nombre de usuario ya están registrados.");
        return;
    }

    users.push(newUser);
    localStorage.setItem("Usuarios", JSON.stringify(users));

    alert("¡Registro exitoso!");
    window.location.href = "./login.html";
};

// Mostrar/Ocultar contraseña
function togglePassword(id, btn) {
    const input = document.getElementById(id);
    const icon = btn.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('bi-eye-slash', 'bi-eye');
    }
}
