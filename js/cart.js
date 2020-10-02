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
                         <small class="text-muted"> ` + carro.currency + ` ` + carro.count + `<br/> ` + carro.unitCost + ` </small>
                         <label>Cantidad</label>
                         <input onchange="precioTotal()" name="cantidad" type="number" value="` + carro.count +`" min="1" max="1000" step="1"></input>
                         
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

    

     for(let x = 0; x < cantidad.length; x++) {
        suma += parseInt(costo[x].innerHTML) * parseInt(cantidad[x].value);
    }
    document.getElementById("total").innerHTML = suma;
}