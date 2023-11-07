let endpoint = 'https://rickandmortyapi.com/api/character';

fetch(endpoint)
.then(function(res) {
    /* convertirlo de json a obj */

    return res.json();
})
.then(function(data) {
    /* imprimeme el obj literal */
    console.log(data.results);

    let personajes = data.results; /* <== El array de personajes*/

    let seccion = document.querySelector(".container");

    let allCharacters = "";

    for (let i = 0; i < personajes.length; i++) {
        allCharacters += `<article>
                            <img src="${personajes[i].image}" alt="Rick Sanchez">
                            <p>Name: <a href="./detallePersonaje.html?idPersonaje=${personajes[i].id}"> ${personajes[i].name}</a> </p>
                            <p>Status: ${personajes[i].status} </p>
                        </article>`;
    }

    seccion.innerHTML = allCharacters;


})
.catch(function(error) {
    console.log(error);
});



