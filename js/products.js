const ORDER_ASC_BY_COST = "AZ";
const ORDER_DESC_BY_COST = "ZA";
const ORDER_BY_PROD_COST = "Cant.";
var currentProductArray = [];
var currentSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;

function sortProduct(criteria, array) {
    let result = [];
    if (criteria === ORDER_ASC_BY_COST) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_DESC_BY_COST) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    } else if (criteria === ORDER_BY_PROD_COST) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }

    return result;
}
function showProductList() {

    let htmlContentToAppend = "";
    for (let i = 0; i < currentProductArray.length; i++) {
        let product = currentProductArray[i];

        if (((minCost == undefined) || (minCost != undefined && parseInt(product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(product.cost) <= maxCost))) {

            htmlContentToAppend += `
            <div class="col-md-4">
            <a href="categories.html" class="card mb-4 shadow-sm custom-card">
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
        document.getElementById("products1").innerHTML = htmlContentToAppend; // error en el container
    }
}
document.addEventListener("DOMContentLoaded", function (f) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        showSpinner();
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
            hideSpinner();
            //Muestro las categorías ordenadas
            showProductList(productArray);
        }
    });
});

function sortAndShowProduct(sortCriteria, productArray) {
    currentSortCriteria = sortCriteria;

    if (productArray != undefined) {
        currentProductArray = productArray;
    }

    currentProductArray = sortProduct(currentSortCriteria, currentProductArray);

    //Muestro las categorías ordenadas
    showProductList();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var productArray = [];
document.addEventListener("DOMContentLoaded", function (e) {
    showProductList(productArray);
});


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            sortAndShowProduct(ORDER_ASC_BY_COST, resultObj.data);
        }
    });

    document.getElementById("sortAscCost").addEventListener("click", function () {
        sortAndShowProduct(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc_Cost").addEventListener("click", function () {
        sortAndShowProduct(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount_Cost").addEventListener("click", function () {
        sortAndShowProduct(ORDER_BY_PROD_COST);
    });

    document.getElementById("clearRangeFilterCost").addEventListener("click", function () {
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        showProductList();
    });

    document.getElementById("rangeFilterCost").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCost = document.getElementById("rangeFilterCostMin").value;
        maxCost = document.getElementById("rangeFilterCostMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0) {
            minCost = parseInt(minCost);
        }
        else {
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0) {
            maxCost = parseInt(maxCost);
        }
        else {
            maxCost = undefined;
        }

        showProductList();
    });
});
