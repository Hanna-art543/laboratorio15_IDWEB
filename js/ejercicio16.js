document.getElementById("btnAgregar").addEventListener("click", () => {
    
    const secciones = document.querySelectorAll("section");

    secciones.forEach((sec, index) => {
        sec.setAttribute("data-index", index);
    });

    console.log("Atributos data-index agregados.");
});
