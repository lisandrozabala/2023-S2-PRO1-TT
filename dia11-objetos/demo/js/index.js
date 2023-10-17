let persona = {
    nombre: "Carlos",
    apellido: "Andrade", 
    edad: 31,
    saludar: function(otroNombre) {
        return "Hola " + otroNombre + ", mi nombre es " + this.nombre + " " + this.apellido;
    }
};

let respuesta = persona.saludar("Juan");

console.log(respuesta);