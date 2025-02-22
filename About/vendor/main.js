

/* nav-bar: focus*/
let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
        setTimeout(() => {
            this.classList.remove("active");
        }, 1000000); 
    });
});


/* click find item  */
function savelocalStorage(mode){
    localStorage.setItem("mode",mode);
}

/* mode */
let btn = document.querySelector("#change-mode");
let awesome = document.querySelector(".fa-solid")
var arrowUp = document.getElementById("arrowUP");
window.addEventListener("load",function(){
    /* dark Mode */
var saveMode = localStorage.getItem("mode")
if(saveMode === "dark"){
awesome.classList.remove("fa-sun")
awesome.classList.add("fa-moon")
awesome.style.cssText = "color:#fff"
document.body.classList.remove("light-mode")
document.body.classList.add("dark-mode");
}
else{
       /* light Mode */
document.body.classList.add("light-mode");  
document.body.classList.remove("dark-mode");
awesome.classList.add("fa-sun")
awesome.classList.remove("fa-moon")
awesome.style.cssText = "color:#FDCB58"
}
});
document.getElementById("toggle-box").addEventListener("click", function () {
    document.querySelector(".box").classList.toggle("act");
btn.addEventListener("click",function(){
if(document.body.classList.contains("light-mode")){
        /*save dark Mode */
        savelocalStorage("dark")
awesome.classList.remove("fa-sun")
awesome.classList.add("fa-moon")
awesome.style.cssText = "color:#fff"
document.body.classList.remove("light-mode")
document.body.classList.add("dark-mode");
}
else{
           /*save light Mode */
           savelocalStorage("light")
    document.body.classList.add("light-mode");  
    document.body.classList.remove("dark-mode");
    awesome.classList.add("fa-sun")
    awesome.classList.remove("fa-moon")
    awesome.style.cssText = "color:#FDCB58"
}
});
arrowUp.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
});

/* popup */
let btnopen = document.getElementById("open");
let btnclose = document.getElementById("close");
let popItem = document.getElementById("popupItem");
let blurbtn = document.getElementById("blur")
console.log(popItem);

btnopen.addEventListener("click",openPopup)
btnclose.addEventListener("click",closePopup)
document.addEventListener("keyup",function(e){
    if(e.keyCode === 27){
        popItem.style.cssText = "visibility: hidden"
        blurbtn.classList.remove("active")
    }
})
function openPopup(){
    popItem.style.cssText = " visibility: visible;transform:translate(-50%,-50%) scale(1);top:50%"
    blurbtn.classList.add("active")
}
function closePopup(){
    popItem.style.cssText = "visibility: hidden"
    blurbtn.classList.remove("active")
}

/* accordion to select for element */

let accorbtn1 = document.getElementById("btn1");
let accorbtn2 = document.getElementById("btn2");
let accorbtn3 = document.getElementById("btn3");
let options1 = document.querySelectorAll(".accordion-body .menu  a");
let options2 = document.querySelectorAll(".accordion-body .info a");
let options3 = document.querySelectorAll(".accordion-body .add a");
let collapseDiv1 = document.querySelector("#collapseOne");
let collapseDiv2 = document.querySelector("#collapseTwo");
let collapseDiv3 = document.querySelector("#collapseThree");
let bsCollapse1 = new bootstrap.Collapse(collapseDiv1, { toggle: false }); 
let bsCollapse2 = new bootstrap.Collapse(collapseDiv2, { toggle: false }); 
let bsCollapse3 = new bootstrap.Collapse(collapseDiv3, { toggle: false }); 

options1.forEach(function(e){
    e.addEventListener("click",function(event){
        event.preventDefault();
        let selectText = this.textContent;
        accorbtn1.textContent = selectText;
        bsCollapse1.hide();   
    })
   })
options2.forEach(function(e){
    e.addEventListener("click",function(event){
        event.preventDefault();
        let selectText = this.textContent;
        accorbtn2.textContent = selectText;
        bsCollapse2.hide();  
    })
   })
options3.forEach(function(e){
    e.addEventListener("click",function(event){
        event.preventDefault();
        let selectText = this.textContent;
        accorbtn3.textContent = selectText;
        bsCollapse3.hide();  
    })
   })

/* Animation for footer  */

var footer = document.getElementsByTagName("footer")[0];


window.addEventListener("scroll",function(){
    var footerPosition = footer.getBoundingClientRect().top;
    if (footerPosition <= window.innerHeight) {
        footer.classList.add('show');
      }
      else{
        footer.classList.remove('show');
      }
})

