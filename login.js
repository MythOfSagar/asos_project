// script for login page
let form = document.querySelector("form")
    form.addEventListener("submit",logindata);
    let logindatatoLS = JSON.parse(localStorage.getItem("loginData")) || [];
    let signupdatafrmLS = JSON.parse(localStorage.getItem("SignupDATA")) || [];
    // function to store login data in local storage
    function logindata(event){
        event.preventDefault();
        let loginobj = {
            email : form.email.value,
            pasw : form.password.value,
        }
        if(logindatatoLS.length == 0 && checkdata(loginobj) == true){
            logindatatoLS.push(loginobj);
            localStorage.setItem("loginData",JSON.stringify(logindatatoLS));
            alert("Log In successful")
            window.location.href = "index.html"
        }else{
            if(checkdata(loginobj) == false){
                alert("Wrong Email i'd or Password!")
            }else if(logindatatoLS.length > 0){
                alert("You are Already logged in please Sign Out before LogIn again");
            }
        }
    }
//  function to check data
    function checkdata(loginobj){
 let filter = signupdatafrmLS.filter(function(el){
      loginobj["name"] = el.name;
      return el.email == loginobj.email && el.pasw == loginobj.pasw;
 })
 if(filter.length > 0){
     return true;
 }else{
     return false;
 }
}
// function sign out
document.querySelector("button").addEventListener("click",function(){
    localStorage.removeItem("loginData");
    window.location.reload();
    window.location.href = "signup.html"
})