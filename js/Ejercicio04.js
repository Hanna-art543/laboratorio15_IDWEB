const elemListas = document.querySelectorAll('li');

function actualizarClases () {
    elemListas.forEach (li => {
        li.classList.add('resaltado');
        li.classList.remove('oculto');
    });
}

const boton = document.getElementById('actualizarLista');
boton.addEventListener('click', actualizarClases);