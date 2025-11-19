// Mostrar <p> literal dentro del título
document.getElementById("parrafo").textContent = "Insertar <p> con JavaScript";

// Crear nuevo <p>
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Elemento insertado con JS";
nuevoParrafo.classList.add("insertado");

// Agregarlo al final del body
document.body.appendChild(nuevoParrafo);
