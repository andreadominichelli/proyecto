//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var precio = 0;
var mensaje = [];

/* RESUMEN DE COMPRA + MODAL*/

document.addEventListener("DOMContentLoaded", function () {
  let mostrarDatos = "";
  let contenedor = document.getElementById("carritoCont");
  fetch(CART_INFO_URL).then(res => res.json()).then(data => {
    data.articles.map(items => {
      precio = items.unitCost;
      console.log(items)
      let costoEnvio = ((precio * items.count) * 0.05)

      mostrarDatos += `
      <div class="container d-flex justify-content-center">
        <div class="row w-100 text-center">
        <h5 class="mb-5">Carrito de Compras </h5>
          <div class=" w-100 contenedor d-flex">
          <div class="izquierda w-25 border justify-content-center d-flex align-items-center">
                      <img class="img-fluid w-100" src="` + items.src + `" alt=""></div>
                      <div class="derecha w-75 border"><h3>` + items.name + `</h3>
              <h5 class="text-grey"> Precio x1: ` + items.currency + `` + precio +
        `,00</h3><p> Cantidad <input min="1" type= "number" id="multiplicar" style= "width : 80px; height : 50px" value="` +
        items.count + `"onChange="multiplicar(` + precio + `)" />
         </p>
         <h3><div class="border-top"> <p id="subtotal"> Subtotal: ` +
        (precio * items.count) + `,00</h3>
  <h3 id="cEnvio"> Costo de Envío:` + costoEnvio + `,00</h3>
  <h3 id="iva"> IVA:` + ((precio * items.count) * 0.22) + `,00</h3> 
  <div class="border-top" >
          <h3 id="total"> Total : UYU ` + parseInt((precio * items.count + costoEnvio) * 1.22) + `,00</h3> 
          <div class="border-top" >
          <div class="containermodal"> <div class="titulo-boton"><h3>Método de pago y preferencias de envío</h3></div> 
        <!-- Trigger the modal with a button -->
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" id="pagar1" data-target="#miModal">Seleccionar</button>`

    })
    contenedor.innerHTML = mostrarDatos
  }).catch(error => error)
});





/* CÁLCULO DE ENVÍO */
function multiplicar(precio) {
  let cantidad = document.getElementById("multiplicar").value;
  /*  let mayoraCero = cantidad > 0 ? cantidad : null; */

  let subtotal = precio * cantidad


  document.getElementById("subtotal").innerHTML = "Subtotal: " + subtotal + ",00";

  if (document.getElementById('s').checked == true) {
    let costoDeEnvioS = subtotal * 0.05
    document.getElementById("cEnvio").innerHTML = "Costo de Envío: " + parseInt(costoDeEnvioS) + ",00"
    document.getElementById("total").innerHTML = "Total +IVA: UYU" + parseInt((subtotal + costoDeEnvioS) * 1.22) + ",00"
    document.getElementById("iva").innerHTML = "IVA:" + parseInt((costoDeEnvioS + subtotal) * 0.22) + ",00";

  }
  if (document.getElementById('e').checked == true) {
    let costoDeEnvioE = subtotal * 0.07
    document.getElementById("cEnvio").innerHTML = "Costo de Envío: " + parseInt(costoDeEnvioE) + ",00"
    document.getElementById("total").innerHTML = "Total +IVA: UYU" + parseInt((subtotal + costoDeEnvioE) * 1.22) + ",00"
    document.getElementById("iva").innerHTML = "IVA:" + parseInt((costoDeEnvioE + subtotal) * 0.22) + ",00";
  }
  if (document.getElementById('p').checked == true) {
    let costoDeEnvioP = subtotal * 0.15
    document.getElementById("cEnvio").innerHTML = "Costo de Envío: " + parseInt(costoDeEnvioP) + ",00"
    document.getElementById("total").innerHTML = "Total +IVA: UYU" + parseInt((subtotal + costoDeEnvioP) * 1.22) + ",00"
    document.getElementById("iva").innerHTML = "IVA:" + parseInt((costoDeEnvioP + subtotal) * 0.22) + ",00";
  }
}



/* VALIDACIÓN */
function cargarErrores() {
  var pais = document.getElementById("pais")
  var calle = document.getElementById("calle");
  var numero = document.getElementById("numero");
  var esquina = document.getElementById("esquina");
  var elementError = document.getElementById("validacion");


  if (pais.value == 0 || calle.value == '' || numero.value == 0 || esquina.value == '') {
    elementError.innerHTML = "Debe completar los campos"
    pais.classList.add("error");
    calle.classList.add("error");
    numero.classList.add("error");
    esquina.classList.add("error");


  } else {
    pais.classList.remove("error")
    calle.classList.remove("error");
    numero.classList.remove("error");
    esquina.classList.remove("error");
    elementError.style.display = "none";
  }
}

/* modal Tranferencia Bancaria */
function cargarErroresTransferencia() {
  var nCompleto = document.getElementById("nCompleto");
  var nTarj = document.getElementById("nTarj");
  var banco = document.getElementById("banco");
  var fExpi = document.getElementById("fExpi");
  var verify = document.getElementById("verify");
  var elementError = document.getElementById("validacion");
  if (nCompleto.value == "" || nTarj.value == 0 ||
    banco.value == "" || fExpi.value == 0 || verify.value == 0) {
    /* modal Tranferencia Bancaria agrega error*/
    elementError.innerHTML = "Debe completar los campos"
    nCompleto.classList.add("error");
    banco.classList.add("error");
    fExpi.classList.add("error");
    verify.classList.add("error");
    nTarj.classList.add("error");
  } else {
    /* modal Tranferencia Bancaria quita error */
    nCompleto.classList.remove("error");
    banco.classList.remove("error");
    fExpi.classList.remove("error");
    verify.classList.remove("error");
    nTarj.classList.remove("error");
    elementError.style.display = "none";
  }

}

/*  modal Tarjeta de Crédito */
function cargarErroresCredito() {
  var nCompleto1 = document.getElementById("nCompleto1");
  var nTarj1 = document.getElementById("nTarj1");
  var tipoTarjeta = document.getElementById("tipoTarjeta");
  var fExpi1 = document.getElementById("fechaE1");
  var verify1 = document.getElementById("verify1");
  var elementError = document.getElementById("validacion");
  console.log(nCompleto1.value)
  if (nCompleto1.value == "" || nTarj1.value == 0 || tipoTarjeta.value == "" ||
    fechaE1.value == 0 || verify1.value == 0) {
    /*  modal Tarjeta de Crédito */
    nCompleto1.classList.add("error");
    tipoTarjeta.classList.add("error");
    fExpi1.classList.add("error");
    verify1.classList.add("error");
    nTarj1.classList.add("error");
  } else {
    /*  modal Tarjeta de Crédito */
    nCompleto1.classList.remove("error");
    tipoTarjeta.classList.remove("error");
    fExpi1.classList.remove("error");
    verify1.classList.remove("error");
    nTarj1.classList.remove("error");
    elementError.style.display = "none";
  }
}


document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_BUY_URL).then(function (resultObj) {
    if (resultObj.status === "ok") {

      mensaje = resultObj.data.msg
      console.log(mensaje)
    }
  });
});


document.getElementById("pagar").addEventListener("click", finalizarCompra);







/* 
function finalizarCompra() {
  var html = "";
  html += `<div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>` + mensaje + `</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      `
  document.getElementById("modal").innerHTML += html
} */