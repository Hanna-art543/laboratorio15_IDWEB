const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Soy un h3 agregado con JavaScript";

//Buscar el primer párrafo
const primerPa = document.querySelector("p");

//Insertar el h3 
document.body.insertBefore(nuevoH3, primerPa);
