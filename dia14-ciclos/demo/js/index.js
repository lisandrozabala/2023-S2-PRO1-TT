
/*  inicio ; condicion; modificador*/
for (let i = 0; i < 15; i++){
    /* lo que quiero que se ejecute */

    /* console.log("Vuelta numero: " + i); */
}

const listaProfes = document.querySelector("#listaProfes");

const arrayProfes = ["Brian", "Luis", "Miguel", "Ale", "Carmen", "Luisa"];

for (let i = 0; i < arrayProfes.length; i++){
    listaProfes.innerHTML += `<li> Profe: ${arrayProfes[i]}  numero #${i + 1}</li>`
};

