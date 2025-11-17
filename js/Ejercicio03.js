const primeraImagen = document.querySelector('img');

// Función para cambiar src y alt
function actualizarImagen() {
    primeraImagen.src = "../html/imagenes/imagen_nueva.jpeg"; 
    primeraImagen.alt = "Imagen actualizada dinámicamente"; 
}

const boton = document.getElementById('cambiarImagen');
boton.addEventListener('click', actualizarImagen);

