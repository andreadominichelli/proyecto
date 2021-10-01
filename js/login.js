<<<<<<< HEAD
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

var usuario= document.getElementById ('email');

function logear() {
    var contra= document.getElementById ('contraseña');
    if (usuario.value !=='' && contra.value !=='') {
        sessionStorage.setItem ('logeado', usuario.value);
        location.replace("index.html");
    }
}


function cargarErrores(id, idMensaje) {
    //Validar nombre
     var elementNombre = document.getElementById(id);
      var elementError = document.getElementById(idMensaje);
    if(elementNombre.value==''){
        elementError.style.display = "block";
        elementError.innerHTML = "Debe ingresar un " + elementNombre.id;
         elementNombre.classList.add("error");
    }else{
        elementNombre.classList.remove("error");
        elementError.style.display = "none";
    }
}

=======
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

var usuario= document.getElementById ('email');

function logear() {
    var contra= document.getElementById ('contraseña');
    if (usuario.value !=='' && contra.value !=='') {
        sessionStorage.setItem ('logeado', usuario.value);
        location.replace("index.html");
    }
}


function cargarErrores(id, idMensaje) {
    //Validar nombre
     var elementNombre = document.getElementById(id);
      var elementError = document.getElementById(idMensaje);
    if(elementNombre.value==''){
        elementError.style.display = "block";
        elementError.innerHTML = "Debe ingresar un " + elementNombre.id;
         elementNombre.classList.add("error");
    }else{
        elementNombre.classList.remove("error");
        elementError.style.display = "none";
    }
}

>>>>>>> 556533736e1b546f4a37e4c8d79e90515f4b52c6
