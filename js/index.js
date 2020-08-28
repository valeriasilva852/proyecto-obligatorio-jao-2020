var user = localStorage.getItem('user'); // consultar el valor del usuario logiado
if(!user){
    window.location.href = 'login.html'; //si no hay un usuario logeado que vaya a logiarse
}else{
    console.log(user);
}
