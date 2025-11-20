document.getElementById("btnOrdenar").addEventListener("click", () => {
    
    const contenedor = document.getElementById("contenedor");

    // Tomar todos los <p> como arreglo
    const parrafos = Array.from(contenedor.querySelectorAll("p"));

    // Ordenar alfabéticamente por su texto
    parrafos.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Reinsertar en el contenedor ya ordenados
    parrafos.forEach(p => contenedor.appendChild(p));

    console.log("Párrafos ordenados alfabéticamente.");
});
