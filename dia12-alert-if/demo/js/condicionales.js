let edad        = prompt("Ingrese su edad");
const edadMin   = 13;

if (edad < edadMin) {
    alert("No puedes ingresar a la bresh");
}else if(edad >= edadMin  && edad <= 16 ){
    alert("Puedes ingresar con un compañero mayor de edad")
}else {
    alert("Puedes ingresar")
}