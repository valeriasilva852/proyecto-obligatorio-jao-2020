//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
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
                <a href="product-info.html" class="list-group-item list-group-item-action">
                    <div class="row" id="` + product.name + `">
                        <div class="col-3">
                            <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">`+ product.name + `</h4>
                                <small class="text-muted">Costo: ` + product.currency + ` ` + product.cost + `<br/>Vendidos: ` + product.soldCount + ` </small>
                            </div>
                            <div> ` + product.description + ` </div>
                            </div>
         
                        </div>
                    </div>
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

function myFunctionValidacion(valor) { // esta funcion es para validacion de campos vacios 
    if (valor == '') {
        return alert('Campo vacío, ingrese su pregunta por favor!');
    }
}

function validarRadio() {
    var s = "no";
    for (var i = 0; i < document.formix.estrellas[i].value.length; i++) {
        if (document.fromix.estrellas[i].checked) {
            alert("marco");
            s = "si";
        }
    }
    if (s == "no") {
        alert("debe selecionar estrellas plix");
    }
}


