//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var precio = 0;

document.addEventListener("DOMContentLoaded", function () {
  let mostrarDatos = "";
  let contenedor = document.getElementById("carritoCont");
  fetch(CART_INFO_URL).then(res => res.json()).then(data => {
    data.articles.map(items => {
      precio = items.unitCost;
      console.log(items)
      mostrarDatos += `
            <div class="container d-flex justify-content-center">
              <div class="row w-100 text-center">
              <h5 class="mb-5">Carrito de Compras </h5>
                <div class=" w-100 contenedor d-flex">
                <div class="izquierda w-25 border justify-content-center d-flex align-items-center">
                            <img class="img-fluid w-100" src="` + items.src + `" alt=""></div>
                            <div class="derecha w-75 border"><h3>` + items.name + `</h3>
                    <h5 class="text-grey"> Precio x1: ` + items.currency + `` + items.unitCost +
        `,00</h5><p> Cantidad <input min="1" type= "number" id="multiplicar" style= "width : 80px; height : 50px" value="` +
        items.count + `"onChange="multiplicar()" />
               </p>
               
               <div class="border-top"> <p id="subtotal"> Subtotal: ` +
        (items.unitCost * items.count) + `,00</p>
                <h3 id="total"> Total + IVA: UYU ` + ((items.unitCost * items.count) * 1.22) + `,00</h3>
                </div>
                </div>
            </div>
            </div>
            </div>
            `

    })
    contenedor.innerHTML = mostrarDatos
  }).catch(error => error)
});

function multiplicar() {
  let cantidad = document.getElementById("multiplicar").value;
  let mayoraCero = cantidad > 0 ? cantidad : null;
  document.getElementById("subtotal").innerHTML = "Subtotal: " + mayoraCero * precio +",00";
  document.getElementById("total").innerHTML = "Total +IVA: UYU" + mayoraCero * precio * 1.22+ ",00";
}