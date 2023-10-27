const titulo    = document.querySelector("#titulo");
const subtitulo = document.querySelector(".subtitulo");
const parrafo   = document.querySelector("p");
const img       = document.querySelector("img");
const items     = document.querySelectorAll(".item");

/*  cambios esteticos CSS */

titulo.style.color = "red";
subtitulo.style.backgroundColor = "green"; 
parrafo.style.backgroundImage = "URL(./img/messi-argentina.jpeg)";
img.src = "./img/messi-barcelona.jpg";

/* cambios de contenido */

let peliculaBuscada = "Rapidos y furiosos";
titulo.innerText = `Resultado de Busqueda: ${peliculaBuscada}`;

subtitulo.innerHTML = `Mi Subtitulo <i id="miItalica" class="italica">${peliculaBuscada}</i>`

console.log(items);

items[0].style.background = "green" 