//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


var products = [];
function listaProductos (products){

    let htmlContentToAppend = "";
    for(let i = 0; i < products.length; i++){
        let atributosDelProducto = products[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + atributosDelProducto.imgSrc + `" alt="` + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ atributosDelProducto.name +`</h4>
                        <small class="text-muted">` + atributosDelProducto.soldCount + ` artículos</small>
                    </div>
<p> `+ atributosDelProducto.description + `</p>
                </div>
            </div>
        </div>
        `

        document.getElementById("stuff").innerHTML = htmlContentToAppend;
    }
}
document.addEventListener("DOMContentLoaded", function (e) {
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            products = resultObj.data;
            //Muestro las categorías ordenadas
            listaProductos(products);
            hideSpinner();
        }
    });
});