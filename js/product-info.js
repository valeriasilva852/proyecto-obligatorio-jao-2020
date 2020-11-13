


var product = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            productCriteriaHTML.innerHTML = product.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});
// con esta funcion lo que hace es muestra los comentarios que tiene el json, el htmlcontenttoappend muestra los comentarios y le das mas estilo y prolijidad
comment = [];
function showComments(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let comment = array[i];

        htmlContentToAppend += `     
  
       <div class="row">

       <div class="col"> 
       <br>
       <h6 class="d-block mb-4 h-100"> Puntuacion: ` + comment.score + `<br>
       `+ comment.description + ` 
       <br><small class= "text-muted"> usuario: ` + comment.user + ' ' + comment.dateTime + `</small><br>
       </h6>      
        </div>
       </div>
       
       `

        document.getElementById("comments-info").innerHTML = htmlContentToAppend;
    }
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comment = resultObj.data;
            showComments(comment);

        }
    });
});

// productos relacionados 
function showRelatedProducts(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let product = array[i];
       if(i == 1 || i == 3 ){
      //     showRelatedProducts(product) ;
       
        

            htmlContentToAppend += `
            <div class="col-md-4">
            <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
            <img class="bd-placeholder-img card-img-top"  src="`+ product.imgSrc +`">
            <h3 class="m-3"> `+ product.name +`(122)</h3>
            <div class="card-body">
              <p class="card-text">`+ product.description +`</p>
              <small class="text-muted">Costo: ` + product.currency + ` ` + product.cost + `<br/>Vendidos: ` + product.soldCount + ` </small>
              </div>
          </a>
             </div>
               
             `
        }
    } 
        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend; // error en el container
    }

    document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(PRODUCTS_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
                product = resultObj.data;     
            }
            showRelatedProducts(product);
        });
    });

function myFunctionValidacion() { // esta funcion es para validacion de campos vacios 
    var valor = document.getElementById("box").value;
    if (valor == "" || valor == null) {
        document.getElementById("errorValidacion").innerHTML = "Ingrese su comentario";
    }else{
        document.getElementById("errorValidacion").innerHTML = "";
    }
}


function validarStar(){
    var star = document.getElementsByName("estrellas");
    var validar_star = false;

    i= 1;
    while(!validar_star && i < star.length){
      if(star[i].checked){
          validar_star =  true
      }
      i++;
    }
    if(!validar_star){
       document.getElementById("errorEstrella").innerHTML = "Debes seleccionar una calificacion";

        return validar_star;
    }else{
        document.getElementById("errorEstrella").innerHTML = " ";
        
        return validar_star;
    }
}

