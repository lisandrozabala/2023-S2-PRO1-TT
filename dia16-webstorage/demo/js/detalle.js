/* recuperando la indo de localStorage */
let recuperoPersonajeLocal = localStorage.getItem("personaje");

/* recuperando la indo de sessionStorage */
let recuperoPersonajeSession = sessionStorage.getItem("personaje");

let resultadoLocal = JSON.parse(recuperoPersonajeLocal);
let resultadoSession = JSON.parse(recuperoPersonajeSession);

/* recuperar elemenntos del DOM */
let personaje   = document.querySelector(".personaje");
let status      = document.querySelector(".status");
let species     = document.querySelector(".species");
let imagen      = document.querySelector(".imagen");

personaje.innerText = `#${resultadoLocal.id} ${resultadoLocal.name}`;
status.innerText = resultadoLocal.status;
species.innerText = resultadoLocal.species;
imagen.src = resultadoLocal.image;

