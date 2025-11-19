// Crear la lista <ul>
const lista = document.createElement("ul");

// Agregar 5 elementos <li>
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + i; 
    lista.appendChild(li);
}

// Obtener el section existente
const section = document.getElementById("contenedor");

// Insertar la lista dentro del section
section.appendChild(lista);
