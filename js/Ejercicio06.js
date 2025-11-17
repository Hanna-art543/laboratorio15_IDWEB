const colores = ['#e3b6acff', '#9de7aaff', '#9eace7ff', '#cb5598ff', '#FFC300'];

//Seleccionamos los divs
const divs = document.querySelectorAll('div');

function cambiarColores () {
    divs.forEach((div, index) => {
        div.style.backgroundColor = colores [index%colores.length]; //lo vuelve un ciclo
     });
}

const boton = document.getElementById('cambiarColores');
boton.addEventListener('click', cambiarColores);