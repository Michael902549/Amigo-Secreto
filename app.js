// Lista para almacenar los nombres de los amigos
let amigos = [];

// Variable para rastrear si el sorteo ya ha sido realizado
let sorteoRealizado = false;

// Expresión regular para validar nombres
const nombreRegex = /^[A-Za-z\s]{3,}$/;

// Función para agregar nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    
    if (sorteoRealizado) {
        alert("El sorteo ya ha sido realizado. Por favor, reinicia la lista para agregar nuevos participantes.");
        input.value = ""; // Limpiar el campo de entrada
        return;
    }

    let nombre = input.value.trim();

    if (!nombreRegex.test(nombre)) {
        alert("Por favor, ingresa un nombre válido que contenga solo letras y sea de al menos 3 caracteres.");
        input.value = ""; // Limpiar el campo de entrada
        return;
    }

    // Agregar el nombre a la lista y actualizar la visualización
    amigos.push(nombre);
    actualizarListaNombres();
    
    input.value = ""; // Limpiar el campo de entrada
}

// Función para actualizar la lista de nombres en la página
function actualizarListaNombres() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((nombre) => {
        let listItem = document.createElement("li");
        listItem.textContent = nombre; // Eliminar la numeración añadida
        listaAmigos.appendChild(listItem);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de nombres está vacía.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[randomIndex];

    document.getElementById("resultado").innerHTML = `<li>Tu amigo secreto es: ${amigoSeleccionado}</li>`;
    sorteoRealizado = true; // Indicar que el sorteo ha sido realizado
}


