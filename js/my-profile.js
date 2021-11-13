
/* 1) Creo constante con el Json */
const datosPersonales = {
    nombres: "",
    apellidos: "",
    edad: 0,
    email: "",
    tel: 0
};

/*2)Creo otra constante para el Json (datos personales) convertido en String*/
const myJSON = JSON.stringify(datosPersonales);  

/*3) creo la constante perfil que me ahorra poner "window.localStorage" varias veces */
const perfil = window.localStorage;
if (!perfil.getItem("localS")) {
    perfil.setItem("localS", myJSON);
}
/*4) creo la función donde muestro la información*/
function showInfo() {
    alert(perfil.getItem("nombres"))
    document.getElementById("nomb").innerHTML = perfil.getItem("nombres");
}
/*5) una función para cambiar la información del Json*/
function cambiarInfo() {
    let datosPersonales = perfil.getItem("localS");
    var objetoPerfil = JSON.parse(datosPersonales);
    objetoPerfil.nombres = document.getElementById("nomb").value;
    objetoPerfil.apellidos = document.getElementById("ape").value
    objetoPerfil.email= document.getElementById("email").value
    objetoPerfil.edad= document.getElementById("inputEdad").value
    objetoPerfil.tel= document.getElementById("inputTel").value
    datosPersonales = JSON.stringify(objetoPerfil);
    perfil.setItem("localS", datosPersonales);
}

document.getElementById("guardar").addEventListener("click", cambiarInfo);
document.addEventListener("DOMContentLoaded", function (e) {
    let datosPersonales = perfil.getItem("localS");
    var nombreUser = sessionStorage.getItem("logeado");
    var objetoPerfil = JSON.parse(datosPersonales);
    document.getElementById("nomb").value = objetoPerfil.nombres;
    document.getElementById("ape").value = objetoPerfil.apellidos;
    document.getElementById("email").value = nombreUser;
    document.getElementById("inputEdad").value = objetoPerfil.edad;
    document.getElementById("inputTel").value = objetoPerfil.tel;
});