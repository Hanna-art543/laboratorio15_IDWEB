// Seleccionar párrafo
const parrafo = document.getElementById("paraReemplazar");

// Crear nuevo div
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";
nuevoDiv.classList.add("reemplazo");

// Botón
const boton = document.getElementById("btnReemplazar");

// Cuando el usuario haga clic, reemplazar el párrafo
boton.addEventListener("click", () => {
    parrafo.replaceWith(nuevoDiv);
});
