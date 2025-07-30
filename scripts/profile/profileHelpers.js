// profileHelpers.js

// Obtiene el usuario actualmente autenticado desde localStorage
export function getAuthUser() {
    return JSON.parse(localStorage.getItem("authUser"));
}

// Actualiza los datos del usuario en localStorage
export function updateUser(newUserData) {
    localStorage.setItem("authUser", JSON.stringify(newUserData));
}

// Elimina al usuario autenticado (logout completo)
export function deleteUser() {
    localStorage.removeItem("authUser");
}

// Devuelve la clave personalizada para guardar/comparar el historial de compras del usuario
export function getCompraKey() {
    const user = getAuthUser();
    return user?.userName ? `compras_${user.userName}` : "compras_undefined";
}

// Devuelve el historial de compras del usuario actual
export function getHistorialDeCompras() {
    return JSON.parse(localStorage.getItem(getCompraKey())) || [];
}

// Expresiones Regulares para validación de formularios
export const regex = {
    name: /^[A-Za-z\s]{3,15}$/, // Letras y espacios, de 3 a 15 caracteres
    lastName: /^[A-Za-z\s]{3,15}$/, // Igual que el nombre
    email: /^[\w]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/, // Formato de correo válido
    userName: /^[A-Za-z0-9_-]{5,20}$/, // Letras, números, guiones y guiones bajos (5 a 20 caracteres)
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,25}$/ // Mínimo 8 caracteres con mayúscula, minúscula, número y símbolo
};
