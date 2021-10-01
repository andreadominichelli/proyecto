<<<<<<< HEAD
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