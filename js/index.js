var user = localStorage.getItem('user');
if(!user){
    window.location.href = 'login.html';
}else{
    console.log(user);
}
