var Enteryourname = document.getElementById('Enteryourname')
var Enteryouremail = document.getElementById('Enteryouremail')
var Enteryourpassword = document.getElementById('Enteryourpassword')
var incorrect = document.getElementById("incorrect");
var login = document.getElementById('login')
var signin= document.getElementById('signin')
var alertmessage = document.getElementById('alertmessage')
 var user = []

if(localStorage.getItem('users')!= null){
    user = JSON.parse(localStorage.getItem('users'))
}

function add(){

    
    
        var data = {
            name: Enteryourname.value,
            email: Enteryouremail.value,
            password: Enteryourpassword.value 
        }
        if(checkInputsEmpty()==true){
            incorrect.classList.remove('d-none')
        }
        else{
            incorrect.classList.add('d-none')
            if(checkEmailExist()==true){
                getAlertmessage('Email already Exist','red')
            }
            else{
                user.push(data)
                localStorage.setItem('users',JSON.stringify(user))
                clearform()
                getAlertmessage('success','green')
            }
              
              
            }
        }
        
        // if(checkEmailExist()==true){
        //     // alert('Email Already Exist')
        // }
        
       
     
    

signin.addEventListener('click',Signin)

function Signin(){
    window.location='index.html'
}


login.addEventListener('click',add)

function getAlertmessage(text,color){
    alertmessage.classList.remove('d-none')
        alertmessage.innerHTML = text;
        alertmessage.style.color= color
}


function clearform(){
    Enteryourname.value=''
    Enteryouremail.value=''
    Enteryourpassword.value=''
}



function checkInputsEmpty(){
    if(Enteryourname.value==''.length||Enteryouremail.value==''.length||Enteryourpassword.value==''.length){
        
        
        return true
     }
     else{
        return false
     }
}

function checkEmailExist(){
    for(var i=0 ;i<user.length;i++){
        if(user[i].email==Enteryouremail.value){
            return true
        }
       
    }
}