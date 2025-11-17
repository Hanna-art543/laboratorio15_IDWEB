const lista = document.getElementById('miLista');

//Seleccionamos los hijos
const hijosElementos = lista.children;

//Recorremos por for ... of
for(const li of hijosElementos) {
    console.log(li.textContent);
}