<<<<<<< Updated upstream
<<<<<<< HEAD
var productInfo= [];
=======
var productInfo = [];
>>>>>>> Stashed changes

function mostrarInfo(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
<<<<<<< Updated upstream
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                productInfo = resultObj.data;
    
                let categoryNameHTML  = document.getElementById("categoryName");
                let categoryDescriptionHTML = document.getElementById("categoryDescription");
                let precioHTML = document.getElementById("precio");
                let productosVendidosHTML = document.getElementById("vendidos")
                let productosCategoryHTML = document.getElementById("category")
                
            
                categoryNameHTML.innerHTML = productInfo.name;
                categoryDescriptionHTML.innerHTML = productInfo.description;
                precioHTML.innerHTML = productInfo.cost + productInfo.currency;
                productosCategoryHTML.innerHTML = productInfo.category;
                productosVendidosHTML.innerHTML = productInfo.soldCount;

                //Muestro las imagenes en forma de galería
               mostrarInfo(productInfo.images);
            }
        });
=======
var productInfo= [];

function mostrarInfo(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                productInfo = resultObj.data;
    
                let categoryNameHTML  = document.getElementById("categoryName");
                let categoryDescriptionHTML = document.getElementById("categoryDescription");
                let precioHTML = document.getElementById("precio");
                let productosVendidosHTML = document.getElementById("vendidos")
                let productosCategoryHTML = document.getElementById("category")
                
            
                categoryNameHTML.innerHTML = productInfo.name;
                categoryDescriptionHTML.innerHTML = productInfo.description;
                precioHTML.innerHTML = productInfo.cost + productInfo.currency;
                productosCategoryHTML.innerHTML = productInfo.category;
                productosVendidosHTML.innerHTML = productInfo.soldCount;

                //Muestro las imagenes en forma de galería
               mostrarInfo(productInfo.images);
            }
        });
>>>>>>> 556533736e1b546f4a37e4c8d79e90515f4b52c6
    });
=======
document.addEventListener("DOMContentLoaded", function (e) {
    let productosR = document.getElementById("productosRelacionados")
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productInfo = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let precioHTML = document.getElementById("precio");
            let productosVendidosHTML = document.getElementById("vendidos")
            let productosCategoryHTML = document.getElementById("category")



            categoryNameHTML.innerHTML = productInfo.name;
            categoryDescriptionHTML.innerHTML = productInfo.description;
            precioHTML.innerHTML = productInfo.cost + productInfo.currency;
            productosCategoryHTML.innerHTML = productInfo.category;
            productosVendidosHTML.innerHTML = productInfo.soldCount;


            //Muestro las imagenes en forma de galería
            mostrarInfo(productInfo.images);
        }
    });
    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === "ok") {
            let productosRelacionados = resultado.data;
           
            let htmlContentToAppend = "";
            for (let i = 0; i < productosRelacionados.length; i++) {
                let autos = productosRelacionados[i]
                if (i == 1 || i == 3) {
                    htmlContentToAppend +=  `  <div class="card w-25" >
                    <img class="img-fluid img-thumbnail" src="`+ autos.imgSrc +`" alt="">
                   <div class="card-body">
                     <h5 class="card-title">`+ autos.name +` </h5>
                     <p class="card-text">`+autos.description + `.</p>
                     <p class="card-text"><small class="text-muted"><a href="#">Ver</a></small></p>
                   </div>
                 </div>`
                }
            }productosR.innerHTML = htmlContentToAppend;
        }
    })
});
>>>>>>> Stashed changes
