//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function myFunctionValidacion(valor){ // esta funcion es para validacion de campos vacios 
   if(valor == ""){
     document.getElementById("label_email").style.display = "block"; //es para que se muestre el mensaje campo vacio
   }else {
    document.getElementById("label_email").style.display = "none"; // para escondaerlo mientras no hay accione
   }
}
function myFunctionPassword(valor){
    if(valor == ""){
        document.getElementById("label_pass").style.display = "block";
    }else{
        document.getElementById("label_pass").style.display = "none";
    }
}

function navegacionWeb(){  // esta funcion hace que pueda navegra por la pagina 
    var usuario = document.getElementById("email").value; //crea valriable email con valor de lo que esta adentro del campo
    var password = document.getElementById("pass").value;
    if( (usuario != "") && (password != "") ){
        window.location.assign('index.html'); // redirecciona al index
    }
}