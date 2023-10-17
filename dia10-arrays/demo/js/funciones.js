let global;

/* funciones declaradas */
function saludar(nombre, apellido, edad){
     let concatenar = "Hola, mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años de edad";

     global = "Modificada";
    return concatenar;
};

let imprimir = saludar("luis", "gomez", 30);

console.log(imprimir);


/* funciones expresadas */
let despedirse = function(nombre){
    return "Chaaaauuuu " + nombre;
};

let imprimir2 =  despedirse( "Luis");

console.log(imprimir2);


console.log(global);
