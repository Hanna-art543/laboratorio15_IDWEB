const elemListas = document.querySelectorAll('li');

//Función para actualizar el nombre de las clases
function actualizarClases () {
    elemListas.forEach (li => {
        li.classList.add('resaltado');
        li.classList.remove('oculto');
    });
}

const boton = document.getElementById('actualizarLista');
boton.addEventListener('click', actualizarClases);
