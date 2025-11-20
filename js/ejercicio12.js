document.getElementById("btnVaciarContenido").addEventListener("click", () => {
    const contenedor = document.getElementById("contenido");
    contenedor.innerHTML = "";
    console.log("Contenido vaciado correctamente.");
})