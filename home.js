// script for navbar
let logindatafrmls = JSON.parse(localStorage.getItem("loginData")) || [];
if(logindatafrmls.length == 0){
    document.querySelector("#signin").addEventListener("click",function(){
        window.location.href = "login.html";
    })
    document.querySelector("#join").addEventListener("click",function(){
        window.location.href = "signup.html";
    })
}else{
    logindatafrmls.forEach(function(el){
        let name = el.name.split(" ");
        document.querySelector("#signin").innerText = name[0];
        // let link = document.createElement("a");
        // let x = document.querySelector("#join");
        // x.innerHTML = link;
        // link.innerText = "Sign Out";
        document.querySelector("#join").innerText = "Sign Out";
        document.querySelector("#join").addEventListener("click",function(){
            localStorage.removeItem("loginData");
            window.location.reload();
            document.querySelector("#join").innerText = "Join";
            document.querySelector("#signin").innerText = "Sign In"
        })
     })
     
}
document.getElementById("signin").style.cursor="pointer"
document.getElementById("join").style.cursor="pointer"



document.querySelector("#btn1").addEventListener("click",function(){
  window.location.href="wemenspage.html"
})
document.querySelector("#btn2").addEventListener("click",function(){
    window.location.href="menspage.html"
})
document.getElementById("cart").addEventListener("click",CartFun)
function CartFun(){
    window.location.href="cart.html"
    console.log("heLLO")}