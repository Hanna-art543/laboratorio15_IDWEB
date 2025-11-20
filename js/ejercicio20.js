document.getElementById("btnGenerar").addEventListener("click", () => {
    const section = document.getElementById("miSection");

    // Eliminar el h2 original si existe
    const h2Original = section.querySelector("h2");
    if (h2Original) {
        h2Original.remove();
    }

    // Crear nuevo h2
    const nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "Título nuevo";
    section.appendChild(nuevoH2);

    // Crear nuevo párrafo
    const p = document.createElement("p");
    p.textContent = "Descripción generada";
    section.appendChild(p);

    // Crear una lista ul con 3 ítems
    const ul = document.createElement("ul");

    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = "Ítem " + i;
        ul.appendChild(li);
    }

    section.appendChild(ul);

    console.log("Contenido generado correctamente.");
});
