// Función para cambiar el modo
function cambiarModo() {
    const body = document.body;

    // Alternar la clase de modo entre oscuro y claro en el body
    body.classList.toggle("modo-oscuro");

    // Si se agregó la clase "modo-oscuro", elimina la clase "modo-claro"
    if (body.classList.contains("modo-oscuro")) {
        body.classList.remove("modo-claro");
    } else {
        // Si no se agregó la clase "modo-oscuro", agrega la clase "modo-claro"
        body.classList.add("modo-claro");
    }
}





