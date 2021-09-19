const RODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json"



var infoProducts = [];

function MostrarInfo(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.data.length; i++){
        let obj = array[i];

        htmlContentToAppend += `
       <li class="list-group-item" style=propiedad fondo`+ VARIABLE +` >Panetone color:  `+ NOMBRE;COLOR +`   Year: `+ YEAR +`</li>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            infoProducts = resultObj.data;
        
            MostrarInfo(infoProducts);
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    var getJSONData = function(PRODUCT_INFO_URL){
        var result = {};
        showSpinner();
        return fetch(PRODUCT_INFO_URL)
        .then(response => {
          if (response.ok) {
            return response.json();
          }else{
            throw Error(response.statusText);
          }
        })
        .then(function(response) {
              result.status = 'ok';
              result.data = response;
              hideSpinner();
              return result;
        })
        .catch(function(error) {
            result.status = 'error';
            result.data = error;
            hideSpinner();
            return result;
        });
    }
    
});