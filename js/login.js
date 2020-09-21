//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
// intento de mejorar el login

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    password: false,
	email: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "email":
            if(expresiones.email.test(e.target.value)){
               document.getElementById('grupo__email').classList.remove('formulario__grupo-incorrecto')
               document.getElementById('grupo__email').classList.add('formulario__grupo-correcto')
               document.getElementById("label_email").style.display = "none";
            }else{
                document.getElementById('grupo__email').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__email').classList.remove('formulario__grupo-correcto')
                document.getElementById("label_email").style.display = "block";
            }
            break;
            case "password":
            if(expresiones.password.test(e.target.value)){
               document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto')
               document.getElementById('grupo__password').classList.add('formulario__grupo-correcto')
               document.getElementById("label_password").style.display = "none";
            }else{
                document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__password').classList.remove('formulario__grupo-correcto')
                document.getElementById("label_password").style.display = "block";
            }
            break;
		
    }
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
  
	

    const terminos = document.getElementById('terminos');
	if( expresiones.password && expresiones.email  && terminos.checked ){
        formulario.reset();
    }else{
        document.getElementById("label_mensaje").style.display = "none";
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        document.getElementById("label_mensaje").style.display = "block";
    }
});



//navegacion web
function navegacionWeb(){  // esta funcion hace que pueda navegra por la pagina 
    var email = document.getElementById("email").value; //crea valriable email con valor de lo que esta adentro del campo
    var password = document.getElementById("pass").value;
    if( (email != "") && (password != "") ){
        localStorage.setItem('user', email ) // guardando el correo del usuario que se esta logeando 
        window.location.assign('index.html'); // redirecciona al index
        localStorage.getItem('user');
    }

    
}
$('.spans').html(localStorage.getItem('user')) ;


function nombreUsuario(){
    if(localStorage.getItem('user') == null){
      email = "logueate"
    }else{
    
        email = localStorage.getItem('user');
        document.getElementById("nombreSecion").textContent = "bienvenido "+ email;
    }

}

function cerrarSesion(){
    document.getElementById("logout").addEventListener("click", function(e){
        window.localStorage.removeItem('user');

    });
};