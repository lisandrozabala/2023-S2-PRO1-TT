let qs = location.search;
let qsObj = new URLSearchParams(qs);
let nombrePersonaje = qsObj.get("query"); /* <= la clave de la qs */

let url = `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`

fetch(url)
.then(function(res) {
    /* convertirlo de json a obj */

    return res.json();
})
.then(function(data) {
    /* imprimeme el obj literal */
    console.log(data.results);

    let personajes = data.results; /* <== El array de personajes*/

    let seccion = document.querySelector(".container");
    let miPersonaje = document.querySelector(".miPersonaje");



    let allCharacters = "";

    for (let i = 0; i < personajes.length; i++) {
        allCharacters += `<article>
                            <img src="${personajes[i].image}" alt="Rick Sanchez">
                            <p>Name: <a href="./detallePersonaje.html?idPersonaje=${personajes[i].id}"> ${personajes[i].name}</a> </p>
                            <p>Status: ${personajes[i].status} </p>
                        </article>`;
    }

    seccion.innerHTML = allCharacters;
    miPersonaje.innerText = nombrePersonaje;

})
.catch(function(error) {
    console.log(error);
});
