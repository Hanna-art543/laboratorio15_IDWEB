document.getElementById("btnEliminar").addEventListener("click", ()=> {
    const parrafos = document.querySelectorAll("p");

    if (parrafos.length > 0) {
        const ultimo = parrafos[parrafos.length -1];
        ultimo.remove();
        console.log("Último párrafo eliminado");
    } else {
        console.log("Ya no hay párrafos para eliminar");
    }
});