//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

//ESTOOO//

function logear() {
    var usuario= document.getElementById ('email');
    var contra= document.getElementById ('contraseña');
    if (usuario.value !=='' && contra.value !=='') {
        sessionStorage.setItem ('logeado',true);
        location.replace("index.html");
    }
}
    //ESTO ES LO NUEVO //




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