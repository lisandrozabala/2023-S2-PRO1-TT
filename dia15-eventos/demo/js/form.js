const busqueda = document.querySelector("#busqueda");
const form = document.querySelector(".form");
const alias = document.querySelectorAll(".nombre");

alias[1].style.color = "red";

busqueda.addEventListener("keydown" , function(e) {
    
     console.log(e);
     console.log(this.value);
});

form.addEventListener("submit", function(evento) {
    evento.preventDefault()

    if (busqueda.value == "") {
        alert("No puedes dejar el campo vacio")
    }else if(busqueda.value.length < 3) {
        alert("Minimo 3 caracteres")
    }else{
        this.submit();
    }
})



