document.getElementById("btnContar").addEventListener("click", () => {
    
    // Contar los <div>
    const cantidadDivs = document.querySelectorAll("div").length;

    // Crear nuevo <p> 
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Cantidad de <div> encontrados: " + cantidadDivs;

    // Insertarlo dentro del div 
    const contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerHTML = ""; 
    contenedorResultado.appendChild(nuevoParrafo);

    console.log("Cantidad de divs:", cantidadDivs);
});
