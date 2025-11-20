document.getElementById("btnMover").addEventListener("click", () => {
    const lista = document.querySelector("ul");
    const ultimo = lista.lastElementChild;
    lista.insertBefore(ultimo, lista.firstElementChild);
    console.log("Último <li> movido al principio");
});
