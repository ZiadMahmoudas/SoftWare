var email = document.getElementById("Email")
var pass = document.getElementById("pass");
var btnSignIN = document.getElementById("SignIN");
var btneye = document.getElementById("eye")
var Register = document.getElementById("register")
var popItem = document.getElementById("popItem");
var exitbtn = document.getElementById("exit")
var mail = document.getElementById("mail")
var password = document.getElementById("password")
var currentIndex= 0;
btnSignIN.addEventListener("click",SignIN)
Register.addEventListener("click",()=>{
  setTimeout(()=>{
    window.open(signUP, "_blank");
  },2000)
})
let regEmail = /\w+@(gmail|mail|outlook).(com|net|org)$/i;
let regpassword = /^\w{8,15}$/i
var users = JSON.parse(localStorage.getItem("users"))||[];
let signUP = "http://127.0.0.1:5500/signUP.html"
let homePage = "http://127.0.0.1:5501/home.html"
btneye.addEventListener("click",function(e){
  setTimeout(()=>{
    if( pass.type === "password"){
      this.classList.add("bi-eye-slash-fill");
      this.classList.remove("bi-eye-fill")
      pass.type = "text";
      }
      else{
        this.classList.add("bi-eye-fill");
        this.classList.remove("bi-eye-slash-fill")
        pass.type = "password";
      }
      
  },200)
  
})
function add(){
  if(vaildationpopup()){
var userData = {
  Email:email.value.trim().toLowerCase(),
  password:pass.value.trim(),
}
users.push(userData)
saveDataInLocalStorage()
return true
}
return false
}
function retrieve(index){
  var users = JSON.parse(localStorage.getItem("users")) || [];

  if (index >= 0 || index < users.length) {
      console.log("Retrieved User:", users[index]); // ✅ تأكد من استرجاع البيانات
      return users[index];
  } else {
      console.log("Invalid index");
      return null;
  }
}
function SignIN(){
  if(retrieve()){
    getLocalStorage()
  }
  clearInputField()
}
function decryptData(encryptedData) {
  let bytes = CryptoJS.AES.decrypt(encryptedData, "SECRET_KEY");
  return bytes.toString(CryptoJS.enc.Utf8);
}
function getLocalStorage(){
  var users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);
  
    let user = users.find(user => 
        user.Email === email.value.trim().toLowerCase() && 
        decryptData(user.password) === pass.value.trim() 
    );
  if (user) {
    setTimeout(()=>{
      localStorage.setItem("currentUser", JSON.stringify(user)); 
      window.open(homePage, "_blank");
        },2000) 
} else {
  alert("invaild")
  return;
}
}
function clearInputField(){
    email.value = "";
    pass.value = "";
}


function vaildationpopup(){
  var isValid = true;    
  exitbtn.addEventListener("click",function(){
      popItem.style.cssText = "visibility:hidden"
  })
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
 if(regpassword.test(pass.value)){
       popItem.style.visibility = "hidden"
       password.style.display = "none";
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
