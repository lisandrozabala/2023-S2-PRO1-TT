/* recuperar queryString */
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPersonaje = qsObj.get("idPersonaje"); /* <= el id del personaje a buscar */

/* recuperar del DOM */
let imagen = document.querySelector(".imagen");
let titulo = document.querySelector(".titulo");
let status = document.querySelector(".status");



let url = `https://rickandmortyapi.com/api/character/${idPersonaje}`

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);

    imagen.src = data.image;
    titulo.innerText = data.name;
    status.innerText = data.status;

})
.catch(function(error) {
    console.log(error);
});

