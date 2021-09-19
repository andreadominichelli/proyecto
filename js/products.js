//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

/*  */

const ORDEN_ASC = "AZ";
const ORDEN_DESC = "ZA";
const ORDER_BY_PROD_VENDIDOS = "Cant.";
const VALOR_INPUT = document.getElementById("buscador")
var articulos = [];
var currentSortCriteria = undefined;
var precioMinimo = undefined;
var precioMaximo = undefined;

function ordenarProductos (criteria, array) {
    let result = [];
    if (criteria === ORDEN_ASC) {
        result = array.sort(function(articulos, b) {
            if (articulos.cost < b.cost) { return -1; }
            if (articulos.cost > b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDEN_DESC) {
        result = array.sort(function(articulos, b) {
            if (articulos.cost > b.cost) { return -1; }
            if (articulos.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_VENDIDOS) {
        result = array.sort(function(articulos, b) {
            let aCount = parseInt(articulos.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}

function mostrarproductos() {

    let htmlContentToAppend = "";
    for (let i = 0; i < articulos.length; i++) {
        let productos = articulos[i];
        if (((precioMinimo == undefined) || (precioMinimo != undefined && parseInt(productos.cost) >= precioMinimo)) &&
            ((precioMaximo == undefined) || (precioMaximo != undefined && parseInt(productos.cost) <= precioMaximo))) {

            htmlContentToAppend += `
            <articulos href="productos-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + productos.imgSrc + `" alt="` + productos.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">` + productos.name + `</h4>
                            <small class="text-muted">` + productos.soldCount + ` artículos vendidos</small>
                        </div>
                        <p class="mb-1">` + productos.description + `</p>
                        <p class="mb-1">` + productos.cost + productos.currency + `</p>
                    </div>
                </div>
            </articulos>
            `
        }

        document.getElementById("stuff").innerHTML = htmlContentToAppend;
    }
}

function ordenarYmostrar(sortCriteria, categoriesArray) {
    currentSortCriteria = sortCriteria;

    if (categoriesArray != undefined) {
        articulos = categoriesArray;
    }

    articulos = ordenarProductos (currentSortCriteria, articulos);

    //Muestro las categorías ordenadas
    mostrarproductos();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            ordenarYmostrar(ORDEN_ASC, resultObj.data);
        }
    });

    document.getElementById("ordenasc").addEventListener("click", function() {
        ordenarYmostrar(ORDEN_ASC);
    });

    document.getElementById("ordendesc").addEventListener("click", function() {
        ordenarYmostrar(ORDEN_DESC);
    });

    document.getElementById("relevancia").addEventListener("click", function() {
        ordenarYmostrar(ORDER_BY_PROD_VENDIDOS);
    });
   /*  document.getElementById("buscador").addEventListener("keyup",function(){
console.log().value);

    });
 */

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("filtrominimo").value = "";
        document.getElementById("filtromaximo").value = "";

        precioMinimo = undefined;
        precioMaximo = undefined;

        mostrarproductos();
    });


    document.getElementById("rangeFilterCount").addEventListener("click", function() {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        precioMinimo = document.getElementById("filtrominimo").value;
        precioMaximo = document.getElementById("filtromaximo").value;

        if ((precioMinimo != undefined) && (precioMinimo != "") && (parseInt(precioMinimo)) >= 0) {
            precioMinimo = parseInt(precioMinimo);
        } else {
            precioMinimo = undefined;
        }

        if ((precioMaximo != undefined) && (precioMaximo != "") && (parseInt(precioMaximo)) >= 0) {
            precioMaximo = parseInt(precioMaximo);
        } else {
            precioMaximo = undefined;
        }

        mostrarproductos();
    });
});