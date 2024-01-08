var welcomemessage = document.getElementById('welcomemessage')
var logout =document.getElementById('logout')

if(localStorage.getItem('user')!= null){
    welcomemessage.innerHTML= `welcome ${localStorage.getItem('user')}`
}


function Logout(){
    window.location.href= 'index.html'
    localStorage.removeItem('user')
}
logout.addEventListener('click',Logout)