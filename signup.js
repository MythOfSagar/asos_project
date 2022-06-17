// script for sign up page
let form =  document.querySelector("form")
form.addEventListener("submit",Getdata);
 let signupdata = JSON.parse(localStorage.getItem("SignupDATA")) || [];


 // function to get data from user and set it in the local storage.
 function Getdata(){
     event.preventDefault();
     if(form.password.value.length >= 10){
         let signupdataobj = {
         email : form.email.value,
         name  : form.firstname.value +" "+form
         .lastname.value,
         pasw : form.password.value,
         DOB : form.date.value+"-"+form.month.value+"-"+form.year.value,
     }
     if(checkdata(signupdataobj) == true){
         signupdata.push(signupdataobj)
     localStorage.setItem("SignupDATA",JSON.stringify(signupdata));
     window.location.reload();
     window.location.href="login.html"
     }else{
        alert("Seems like you already have an account");
     }
     }
     else{
         alert("Your Password must be 10 characters long")
     }
     
 }

// function to check wether the user already has an account or not.
function checkdata(signupdataobj){
 let filter = signupdata.filter(function(el){
      return el.email == signupdataobj.email;
 })
 if(filter.length > 0){
     return false;
 }else{
     return true;
 }
}