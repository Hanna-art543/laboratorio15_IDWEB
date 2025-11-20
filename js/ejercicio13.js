document.getElementById("btnClonar").addEventListener("click", () => {
    const main = document.getElementById("principal");
    const primerArticle = main.querySelector("article");
    const clon = primerArticle.cloneNode(true);
    main.appendChild(clon);
    console.log("Articulo clonado correctamente.");
})