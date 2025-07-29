// profileHelpers.js

// Obtiene el usuario actualmente autenticado desde localStorage
export function getAuthUser() {
    return JSON.parse(localStorage.getItem("authUser"));
}

// Actualiza los datos del usuario en localStorage
export function updateUser(newUserData) {
    localStorage.setItem("authUser", JSON.stringify(newUserData));
}

// Elimina al usuario autenticado (logout)
export function deleteUser() {
    localStorage.removeItem("authUser");
}

// Devuelve la clave personalizada para almacenar las compras del usuario actual
export function getCompraKey() {
    const user = getAuthUser();
    return user ? `compras_${user.userName}` : "compras_undefined";
}

// Devuelve el historial de compras del usuario logueado
export function getHistorialDeCompras() {
    return JSON.parse(localStorage.getItem(getCompraKey())) || [];
}

// Expresiones Regulares para validaciones
export const regex = {
    name: /^[A-Za-z\s]{3,15}$/,
    lastName: /^[A-Za-z\s]{3,15}$/,
    email: /^[\w]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/,
    userName: /^[A-Za-z0-9_-]{5,20}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,25}$/
};
