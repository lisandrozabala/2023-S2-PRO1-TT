const data = [
    {
        id: 0,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 1,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
       
      },
      {
        id: 2,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      }
];

localStorage.clear();
sessionStorage.removeItem("personaje");

const almacenar = prompt("Ingrese el numero del personaje que quiera guardar");
const seleccionado = data[almacenar];


/* transformar el dato en json */
let personajeJSON = JSON.stringify(seleccionado);

/* subir la info a localStorage */
localStorage.setItem("personaje", personajeJSON);

/* subir la info a sessionStorage */
sessionStorage.setItem("personaje", personajeJSON);



