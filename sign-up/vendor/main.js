var email = document.getElementById("email")
var pass = document.getElementById("pass");
var pass1 = document.getElementById("pass1");
var Lname = document.getElementById("Lname");
var Fname = document.getElementById("Fname");
var btnSign= document.getElementById("SignUp");
var btneye1 = document.querySelectorAll(".input-box .eye1")[0]
var btneye2 = document.querySelectorAll(".input-box .eye2")[0]
var popItem = document.getElementById("popItem");
var exitbtn = document.getElementById("exit")
var fullname = document.getElementById("name")
var password = document.getElementById("password")
var Exist = document.getElementById("not-Exist")
var duplicate = document.getElementById("duplicate")
var mail = document.getElementById("mail")
let regfirstName = /^[a-z]{2,}$/i;
let reglastName = /^[a-z]{5,}$/i;
let regEmail = /\w+@(gmail|mail|outlook).(com|net|org)$/i;
let regpassword1 = /^\w{8,15}$/i
let regpassword2 = /^\w{8,15}$/i
var users = JSON.parse(localStorage.getItem("users"))||[];
let homeurl = "http://127.0.0.1:5501/home.html"

btnSign.addEventListener("click",Sign)
 /* Eyes */
btneye1.addEventListener("click",function(){
      if(pass.type === "password"){
        this.classList.add("bi-eye-slash-fill");
        this.classList.remove("bi-eye-fill")
        pass.type = "text";
        }
        else{
            this.classList.add("bi-eye-fill");
            this.classList.remove("bi-eye-slash-fill")
            pass.type = "password";
        }
  })

btneye2.addEventListener("click",function(){
      if(pass1.type === "password"){
        this.classList.add("bi-eye-slash-fill");
        this.classList.remove("bi-eye-fill")
        pass1.type = "text";        
        }
        else{
            this.classList.add("bi-eye-fill");
            this.classList.remove("bi-eye-slash-fill")
            pass1.type = "password";
        }
  })
 /* End Eyes */

function add(){
    if(vaildationpopup() && uniqueEmail()){
  var userData = {
    FirstName:Fname.value.trim(),
    LastName:Lname.value.trim(),
    Email:email.value.trim().toLowerCase(),
    password:encryptData(pass.value.trim()),
    confirmPassword:encryptData(pass1.value.trim()),
  }
  users.push(userData)
  saveDataInLocalStorage()
  return true
}
return false
}
function encryptData(data) {
    return CryptoJS.AES.encrypt(data, "SECRET_KEY").toString();
}

function uniqueEmail(){
    var isDuplicate = users.some(function(e){
        return e.Email.toLowerCase() === email.value.toLowerCase()
    })
    if(isDuplicate){
       Exist.style.display = "block"
        popItem.style.cssText = "visibility:visible;transform:translate(-50%,-50%); scale(1);top:50%;"
        return false
    }
    else{
        popItem.style.cssText = "visibility:hidden"
        return true
    }
}
function showDetails(){
    if(regfirstName.test(Fname.value) && reglastName.test(Lname.value) &&regEmail.test(email.value) &&regpassword2.test(pass1.value) && pass.value === pass1.value){
        return true;
    }
    else{
        return false
    }
}
function vaildationpopup(){
    var isValid = true;    
    exitbtn.addEventListener("click",function(){
        popItem.style.cssText = "visibility:hidden"
    })
      
    if(regfirstName.test(Fname.value) && reglastName.test(Lname.value)){
        popItem.style.visibility = "hidden"
         fullname.style.display = "none"
     } else {
        fullname.style.display = "block"
        popItem.style.cssText = "visibility:visible;transform:translate(-50%,-50%); scale(1);top:50%;"
              setTimeout(()=>{
            popItem.style.cssText = "visibility:hidden"
        },3000)
        isValid = false;
    }
    if (regEmail.test(email.value)) {
         popItem.style.visibility = "hidden"
         mail.style.display = "none"
    } else {
        mail.style.display = "block"
        popItem.style.cssText = "visibility:visible;transform:translate(-50%,-50%); scale(1);top:50%;"
              setTimeout(()=>{
            popItem.style.cssText = "visibility:hidden"
        },3000)
        isValid = false;
    }
   if(regpassword1.test(pass.value)){
         popItem.style.visibility = "hidden"
         password.style.display = "none";
         if (regpassword2.test(pass1.value) && pass.value === pass1.value) {
            popItem.style.visibility = "hidden"
            duplicate.style.display = "none"
       } else {
           duplicate.style.display = "block"
           popItem.style.cssText = "visibility:visible;transform:translate(-50%,-50%); scale(1);top:50%;"
                 setTimeout(()=>{
               popItem.style.cssText = "visibility:hidden"
           },3000)
           isValid = false;
       }
   }
   else{
    password.style.display = "block"
    popItem.style.cssText = "visibility:visible;transform:translate(-50%,-50%); scale(1);top:50%;"
          setTimeout(()=>{
        popItem.style.cssText = "visibility:hidden"
    },3000)
    isValid = false;
   }
  
    return isValid
    }

function Sign(){
    if(add()){
        clearInputField()
    setTimeout(()=>{
      window.open(homeurl, "_blank");
    },2000)
}
}
function saveDataInLocalStorage(){
    localStorage.setItem("users",JSON.stringify(users));
}
function clearInputField(){
    Fname.value = "";
    Lname.value = "";
    email.value = "";
    pass.value = "";
    pass1.value = "";
}