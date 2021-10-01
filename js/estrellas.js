<<<<<<< HEAD
const EC = '<span class="fa fa-star checked"></span>'/*  EC de Estrella Checked */
const EV ='<span class="fa fa-star"></span>' /* inicales de Estrella Vacía */
const FORMATO = '<div class="card border-dark mb-3"> <div class="d-block mb-4 h-100"> <div class="card-header">'




function mostrarComentarios(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comments = array[i];
        if (comments.score == 5){
            htmlContentToAppend += FORMATO + comments.user+`</div>
                <p class="card-text">`+ comments.description+`</p>`+ comments.dateTime +`<br>`+ comments.score + EC +
                EC + EC + EC + EC +`
                </div>
            </div>
            `;

        document.getElementById("contenedorComentarios").innerHTML = htmlContentToAppend;
    }
    if (comments.score == 4) {
       
            htmlContentToAppend += FORMATO + comments.user+`</div>
                <p class="card-text">`+ comments.description+`</p>`+ comments.dateTime +`<br>`+ comments.score + EC +
                EC + EC + EC + EV +`
                </div>
            </div>
            `;
    
            document.getElementById("contenedorComentarios").innerHTML = htmlContentToAppend;
        }
      if (comments.score == 3) {
       
            htmlContentToAppend += FORMATO + comments.user+`</div>
                <p class="card-text">`+ comments.description+`</p>`+ comments.user+`<br>`+ comments.dateTime +`<br>`
                + comments.score + EC + EC + EC + EV + EV+ `</div>
                </div>
                `;

        document.getElementById("contenedorComentarios").innerHTML = htmlContentToAppend;
    }
}

}
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                comments = resultObj.data;
                mostrarComentarios(comments)
    
            
            }
        });
    });
    
    function añadirComment (){
var usuariologueado = sessionStorage.getItem("logeado");
var textarea = document.getElementById("mensaje").value
var puntuacion = document.getElementById("cantidadestrellas")
var mostrarError = document.getElementById ("error");
   if (textarea == ""||puntuacion == ""){
       mostrarError.innerHTML = "¡Debe ingresar un comentario!"
   } else{  let htmlContentToAppend =""
    htmlContentToAppend += FORMATO + usuariologueado +`</div>
   <p class="card-text">`+ textarea +`<br>`+ compararScore(puntuacion.value) +`
   </div>
</div>
`; 
document.getElementById("contenedorComentarios").innerHTML += htmlContentToAppend;
} } 


var hoy = new Date()
var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

function compararScore (cantidad){
        let html = '';
        if (cantidad == 5) {
            html += EC +
            EC + EC + EC + EC +`</br>`+ fecha + " " +hora 
            return html;  
}
if (cantidad == 4) {
    html += EC + EC+ EC + EC + EV+`</br>`+fecha + "  " +hora
    return html; }

    if (cantidad == 3) {
        html +=  EC + EC+ EC + EV +`</br>`+fecha + "  " +hora
        return html; }

        if (cantidad == 2) {
            html +=  EC + EC+ EV + EV + EV+`</br>`+fecha + "  " +hora
            return html; }

            if (cantidad == 1) {
                html += EC+EV+EV+EV+EV+`</br>`+fecha + "  " +hora
                return html; }
            }

         
=======
const EC = '<span class="fa fa-star checked"></span>'/*  EC de Estrella Checked */
const EV ='<span class="fa fa-star"></span>' /* inicales de Estrella Vacía */
const FORMATO = '<div class="card border-dark mb-3"> <div class="d-block mb-4 h-100"> <div class="card-header">'




function mostrarComentarios(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let comments = array[i];
        if (comments.score == 5){
            htmlContentToAppend += FORMATO + comments.user+`</div>
                <p class="card-text">`+ comments.description+`</p>`+ comments.dateTime +`<br>`+ comments.score + EC +
                EC + EC + EC + EC +`
                </div>
            </div>
            `;

        document.getElementById("contenedorComentarios").innerHTML = htmlContentToAppend;
    }
    if (comments.score == 4) {
       
            htmlContentToAppend += FORMATO + comments.user+`</div>
                <p class="card-text">`+ comments.description+`</p>`+ comments.dateTime +`<br>`+ comments.score + EC +
                EC + EC + EC + EV +`
                </div>
            </div>
            `;
    
            document.getElementById("contenedorComentarios").innerHTML = htmlContentToAppend;
        }
      if (comments.score == 3) {
       
            htmlContentToAppend += FORMATO + comments.user+`</div>
                <p class="card-text">`+ comments.description+`</p>`+ comments.user+`<br>`+ comments.dateTime +`<br>`
                + comments.score + EC + EC + EC + EV + EV+ `</div>
                </div>
                `;

        document.getElementById("contenedorComentarios").innerHTML = htmlContentToAppend;
    }
}

}
    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                comments = resultObj.data;
                mostrarComentarios(comments)
    
            
            }
        });
    });
    
    function añadirComment (){
var usuariologueado = sessionStorage.getItem("logeado");
var textarea = document.getElementById("mensaje").value
var puntuacion = document.getElementById("cantidadestrellas")
var mostrarError = document.getElementById ("error");
   if (textarea == ""||puntuacion == ""){
       mostrarError.innerHTML = "¡Debe ingresar un comentario!"
   } else{  let htmlContentToAppend =""
    htmlContentToAppend += FORMATO + usuariologueado +`</div>
   <p class="card-text">`+ textarea +`<br>`+ compararScore(puntuacion.value) +`
   </div>
</div>
`; 
document.getElementById("contenedorComentarios").innerHTML += htmlContentToAppend;
} } 


var hoy = new Date()
var fecha = hoy.getDate() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getFullYear();
var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

function compararScore (cantidad){
        let html = '';
        if (cantidad == 5) {
            html += EC +
            EC + EC + EC + EC +`</br>`+ fecha + " " +hora 
            return html;  
}
if (cantidad == 4) {
    html += EC + EC+ EC + EC + EV+`</br>`+fecha + "  " +hora
    return html; }

    if (cantidad == 3) {
        html +=  EC + EC+ EC + EV +`</br>`+fecha + "  " +hora
        return html; }

        if (cantidad == 2) {
            html +=  EC + EC+ EV + EV + EV+`</br>`+fecha + "  " +hora
            return html; }

            if (cantidad == 1) {
                html += EC+EV+EV+EV+EV+`</br>`+fecha + "  " +hora
                return html; }
            }

         
>>>>>>> 556533736e1b546f4a37e4c8d79e90515f4b52c6
   