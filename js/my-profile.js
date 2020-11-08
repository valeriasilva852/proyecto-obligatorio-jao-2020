
// variable my storage donde se encuentra el localStorage
let myStorage = window.localStorage;

// esta funcion tiene el json con los objetos de datos al los cuales le asigno su propio input
function datos(){
var obj = { 
  "name": document.getElementById("Nombre1").value,
  "apellido": document.getElementById("apellidos2").value,
  "age": document.getElementById("edad1").value,
  "email": document.getElementById("email1").value,
  "telefono": document.getElementById("telefono1").value 
};
var myJSON = JSON.stringify(obj);
console.log("");
myStorage.setItem("obj", myJSON);


};

myStorage = window.localStorage;
document.addEventListener("DOMContentLoaded", function (e) {

 obj = JSON.parse(myStorage.getItem("obj"));

  document.getElementById("Nombre1").value = obj.name;
  document.getElementById("apellidos2").value = obj.apellido;
  document.getElementById("edad1").value = obj.age;
  document.getElementById("email1").value = obj.email;
  document.getElementById("telefono1").value = obj.telefono;

});
function borrarDatos(){
  localStorage.removeItem("obj");
}


