const parrafos = document.querySelectorAll('p');

//Función que actualizará
function actualizarParrafos () {
    parrafos.forEach(p => {
        p.textContent = "Texto actualizado dinámicamente";
    });
}

const boton = document.getElementById("actualizar");
boton.addEventListener('click', actualizarParrafos);
