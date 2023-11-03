/* El ENDPOINT de la API */
let provincias = 'https://apis.datos.gob.ar/georef/api/provincias';

/* Caputando elementos del DOM */
let listaProvincias = document.querySelector(".listaProvincias");

fetch('https://apis.datos.gob.ar/georef/api/provincias')
.then(function(miRespuesta) {
    return miRespuesta.json();
})
.then(function(miRespuesta) {
    /* en el segundo then() */
    console.log(miRespuesta.provincias);
    let prov = miRespuesta.provincias;

    let contenido = "";
    for (let i = 0; i < prov.length; i++) {
          contenido += ` <li><a href="./detalleProvincia.html?id_provincia=${prov[i].id}">${prov[i].nombre}</a></li>`
    }

    listaProvincias.innerHTML = contenido;

})
.catch(function(miError) {
    console.log(miError);
});



