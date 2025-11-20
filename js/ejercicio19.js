const contenedor = document.getElementById("contenedor");
const btnCrear = document.getElementById("btnCrear");
const btnEliminar = document.getElementById("btnEliminar");

// Crear 3 párrafos
btnCrear.addEventListener("click", () => {

    contenedor.innerHTML = "";

    for (let i = 1; i <= 3; i++) {
        const p = document.createElement("p");
        p.textContent = "Párrafo " + i;
        contenedor.appendChild(p);
    }
});

// Eliminar el segundo párrafo
btnEliminar.addEventListener("click", () => {
    const parrafos = contenedor.querySelectorAll("p");

    if (parrafos.length >= 2) {
        parrafos[1].remove();
    } else {
        alert("No existe un segundo párrafo que eliminar.");
    }
});
