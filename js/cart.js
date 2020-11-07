//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function showCart(array){

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let carro = array[i];

      
      //la funcion if es para cambiar el precio de dolares a pesos uruguayos
        if(carro.currency == "USD"){
            carro.unitCost = carro.unitCost * 40;
            carro.currency = "UYU";

        }

            htmlContentToAppend += `
            <a  class="list-group-item list-group-item-action">
            <div class="row" id="` + carro.name + `">
                <div class="col-3">
                    <img src="` + carro.src + `" alt= " "  class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ carro.name + `</h4> 
                         <label>Cantidad</label>
                         <input onchange="precioTotal()" name="cantidad" type="number" value="` + carro.count +`" min="1" max="1000" step="1" onchange="precioTotaldealgo()"></input>
                       
                         <div clas="">` + carro.count + " " + "x" + " " + carro.currency + " " + carro.unitCost+  `</div>                        
                         <span name="costoUnit">`+ carro.unitCost + `</span>
                    </div>
                    
                    </div>
 
                </div>
            </div>
        </div>
        `
       

          
    
        

        document.getElementById("algo").innerHTML = htmlContentToAppend;
    }
    precioTotal();
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART2).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carroArray = resultObj.data;
            showCart(carroArray.articles);



            

        }
    });
});



//esta funcion lo que hace es que "suma"los precios de los productos utilizando un tagname
function precioTotal() {
    let cantidad = document.getElementsByName("cantidad");
    let costo = document.getElementsByName("costoUnit");
    let suma = 0;
    let envio = 0;
    let suma2 = 0;
    

    for(let x = 0; x < cantidad.length; x++) {
        suma += parseInt(costo[x].innerHTML) * parseInt(cantidad[x].value);
    }

    if(document.getElementById("premium").checked ){
        envio +=(suma *15)/100;
      }
      if(document.getElementById("express").checked ) {
         envio += (suma * 7)/100;
      }
      if(document.getElementById("standard").checked) {
        envio += (suma * 5)/100;
      }
      suma2 = suma + envio;

    
    
    document.getElementById("total").innerHTML = suma;
    document.getElementById("envio").innerHTML = envio;
  document.getElementById("total2").innerHTML = suma2; 
}

// validar radio button 
function validarTipoEnvios(){
     var envios = document.getElementsByName("name");
     var validar_envio = false;

     i= 0;
     while(!validar_envio && i < envios.length){
       if(envios[i].checked){
           validar_envio =  true
       }
       i++;
     }
     if(!validar_envio){
        document.getElementById("errorEnvio").innerHTML = "Debes seleccionar un tipo de envio";

         return validar_envio;
     }else{
         document.getElementById("errorEnvio").innerHTML = " ";
         $('#xlLargeModal').modal('show');
         return validar_envio;
     }
}

function validarInputs(){
    var direccion = document.getElementById("calle").value;
    var numer = document.getElementById("numero").value;
    var esq = document.getElementById("esquina").value;
    var country = document.getElementById("pais").value;
     if(direccion == "" || direccion == null){
        document.getElementById("errorMensaje").innerHTML = "Ingres su dirección";
        }else {
            $('#myModal').modal('show');
            document.getElementById("errorMensaje").innerHTML = "";
           /// console.log("dkjdf");
        
        }

  if(numer == "" || numer == null){
    document.getElementById("errorDeMensaje2").innerHTML = "Ingrese numero de puerta";
    //console.log("guygiuh");
    
  }else{
    $('#myModal').modal('show');
      document.getElementById("errorDeMensaje2").innerHTML = "";
    
  }
 
        if(country == "" || country == null){
            document.getElementById("errorDeMensajey4").innerHTML = "Ingres su país";
        }else{
            $('#myModal').modal('show');
            document.getElementById("errorDeMensajey4").innerHTML = "";
        }
        if(esq == "" || esq == null){
          document.getElementById("errorDeMensajex3").innerHTML = "Ingres esquina de calle";
        }
        else{
            $('#myModal').modal('show');
            document.getElementById("errorDeMensajex3").innerHTML = "";
        }
}


function mostrarCollapse(){
    $('#multiCollapseExample1').collapse('show');
    $('#multiCollapseExample2').collapse('hide');
}

function mostrarCollapse2(){
    $('#multiCollapseExample1').collapse('hide');
    $('#multiCollapseExample2').collapse('show');
}

function validarCreditCard(){
    var numCard = document.getElementById("nombrex").value;
    var MM = document.getElementById("mes").value;
    var YY = document.getElementById("año").value
    var cvv = document.getElementById("cvv").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").value;

    

  if(numCard == "" && MM == "" && YY == "" && cvv == "" && nombre == "" && apellido == "" ){
       document.getElementById("errorNumero").innerHTML = "Ingrese numero de tarjeta";
       console.log("scihiod");
  } else {
        document.getElementById("errorNumero").innerHTML = "";
    }
  if(MM == "" || MM == null){
     document.getElementById("errorMes").innerHTML = "Campo vacio";
   } else{
       document.getElementById("errorMes").innerHTML = "";
   }
   if(YY == "" || YY == null){
     document.getElementById("errorAño").innerHTML = "Campo vacio";
   } else {
       document.getElementById("errorAño").innerHTML = "";
   } 
   if(cvv == "" || cvv == null){
     document.getElementById("errorCvv").innerHTML = "Campo Vacio";
   }else{
       document.getElementById("errorCvv").innerHTML = "";
   }
   if(nombre == "" || nombre == null){
       document.getElementById("titular").innerHTML = "Ingrese sus nombres";
    } else{
      document.getElementById("titular").innerHTML = "";
   }
   if(apellido == "" || apellido == null){
      document.getElementById("apellido").innerHTML = "Ingere sus apellidos";
   }else{
       document.getElementById("apellido").innerHTML = "";
   }

}

function validarTransferencias(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var ci = document.getElementById("CI").value;
    var cuenta = document.getElementById("cuenta").value;
    var importe = document.getElementById("importe").value;

    if(name == "" || name == null){
      document.getElementById("errorName").innerHTML = "Ingrese su nombre";
      
    }else{
        document.getElementById("errorName").innerHTML = "";
        
    }
     if(surname == "" || surname == null){
       document.getElementById("errorSurname").innerHTML = "ingrese sus apellidos"
       
     }else{
         document.getElementById("errorSurname").innerHTML = "";
         
     }
     if(ci == "" || ci == null){
        document.getElementById("errorCI").innerHTML = "Ingrese cedula de identidad";
        
     }else{
        document.getElementById("errorCI").innerHTML = "";
        
     }
     if(cuenta == "" || cuenta == null){
        document.getElementById("errorCuenta").innerHTML = "Ingrese su numero de cuenta";
        
     }else{
        document.getElementById("errorCuenta").innerHTML = "";
        
     }
     if(importe == "" || importe == null){
        document.getElementById("errorImporte").innerHTML = "Ingrese el monto";
        
     }else{
        document.getElementById("errorImporte").innerHTML = "";
        
     }
}
