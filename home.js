// script for navbar
document.getElementById("payment").addEventListener("click",payment)
    
    function payment(){
    document.getElementById("blur").style.display="flex"
    
    
    }

document.querySelector("#btn1").addEventListener("click",function(){
    console.log("prateek");
})
document.querySelector("#btn2").addEventListener("click",function(){
    console.log("prateek");
})


// script for home page
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
