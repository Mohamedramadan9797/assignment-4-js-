


var Enteryouremail = document.getElementById('Enteryouremail') ;
var Enteryourpassword = document.getElementById('Enteryourpassword');
var incorrect = document.getElementById('incorrect')
var Login = document.getElementById('login')

var signup =document.getElementById('signup')
var User=[]

if(localStorage.getItem('users')!=null){
    User= JSON.parse(localStorage.getItem('users'))
console.log(User)
}

signup.addEventListener('click',Signup)

function Signup(){
    window.location.href='signup.html'
}

Login.addEventListener('click',login)

function login(){
    if (checkEmailPassword()==true){
        window.location.href='home.html'
    }
    else{
        getAlertmessage('Email or Password no correct','red')
    }
}
function checkEmailPassword(){
    for(var i=0;i<User.length;i++){
        if(User[i].email==Enteryouremail.value && User[i].password==Enteryourpassword.value){
            localStorage.setItem('user',(User[i].name))
            return true
        }
    }

}


function getAlertmessage(text,color){
    incorrect.classList.remove('d-none')
    incorrect.innerHTML = text
    incorrect.style.color= color
}
