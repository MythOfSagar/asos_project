
let logindatafrmls = JSON.parse(localStorage.getItem("loginData")) || [];
if(logindatafrmls.length == 0){
  
}else{
    logindatafrmls.forEach(function(el){
        let name = el.name.split(" ");
        document.querySelector("#signin").innerText = name[0];
        document.querySelector("#join").innerText = "Sign Out";
        document.querySelector("#join").addEventListener("click",function(){
            localStorage.removeItem("loginData");
            window.location.reload();
            document.querySelector("#join").innerText = "Join";
            document.querySelector("#signin").innerText = "Sign In"
        })
     });
}

displayFunction();
function displayFunction(){
   
    let bigImage=JSON.parse(localStorage.getItem("productPage"));
    console.log(bigImage);
    let show=bigImage[bigImage.length-1];
    console.log(show);
        document.querySelector("#imgName").innerText=show.name;
        document.querySelector("#price").innerText=show.price;
        document.querySelector("#color").innerText="COLOR: "+show.color;
        if(show.img!="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16723126/2022/2/7/46a8dcd3-5937-4690-98ea-09f750f703781644248032248-Tokyo-Talkies-Mauve-Bodycon-Mini-Dress-91644248031768-5.jpg"){
        document.querySelector("#changeimg").src=show.img;
        document.querySelector("#smi1").src=show.img;
        document.querySelector("#smi2").src=show.img;
        document.querySelector("#smi3").src=show.img;
        document.querySelector("#smi4").src=show.img;
}

}


document.querySelector("#Addcart").addEventListener("mouseenter",myFunction);
function myFunction(event){
    event.preventDefault();

    document.querySelector("#Addcart").style.backgroundColor="#015830";
    // let but=document.querySelector("#Addcart").value;
    // localStorage.setItem("bagData",JSON.stringify(but));
    
}
// img arr---------------------------------------------------------------
let imgArr=["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16723126/2022/2/7/e4f15617-92a7-4d61-8840-8538d1a962e31644248032360-Tokyo-Talkies-Mauve-Bodycon-Mini-Dress-91644248031768-1.jpg",
"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16723126/2022/2/7/b1f7eea6-f0dd-4e66-ba54-1c834944937b1644248032334-Tokyo-Talkies-Mauve-Bodycon-Mini-Dress-91644248031768-2.jpg",
"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16723126/2022/2/7/9755e449-3cf2-432f-af5f-370ca824afcc1644248032306-Tokyo-Talkies-Mauve-Bodycon-Mini-Dress-91644248031768-3.jpg"];

let img=document.querySelector("#changeimg");

document.querySelector("#Addcart").addEventListener("mouseleave",mouseleave);
function mouseleave(event){
    event.preventDefault();

    document.querySelector("#Addcart").style.backgroundColor="#018849";
    
}

let test=document.querySelector("#Addcart").innerHTML;
if(test =="ADD TO BAG"){
document.querySelector("#Addcart").addEventListener("click",addedFunction);
let cartData=JSON.parse(localStorage.getItem("cartSection"))||[];

function addedFunction(event){
    event.preventDefault();
    let input=document.querySelector("#select").value;
    if(input==""){
        document.querySelector("#select").style.border="solid red";
        document.querySelector("#select").style.boxShadow="#528cfc 0px 1px 2px 0px, #528cfc 0px 2px 6px 2px";
    }else{ 
        document.querySelector("#select").style.border="solid black";
        document.querySelector("#select").style.boxShadow="#528cfc 0px 0px 0px 0px";
        document.querySelector("#Addcart").innerHTML="&#x2714; ADDED";
        // document.querySelector("#Addcart").value="A";
        let objData={
            cartimg:document.querySelector("#changeimg").src,
            cartName:document.querySelector("#imgName").innerHTML,
            carPrice:document.querySelector("#price").innerHTML,
            cartColor:document.querySelector("#color").innerHTML,
        }
        cartData.push(objData);
        localStorage.setItem("cartSection",JSON.stringify(cartData));
    }
}
    
}else{
    alert("Hello! I am an alert box!!");
}

document.querySelector("#like").addEventListener("mouseenter",likeFunction);
function likeFunction(event){
    event.preventDefault();
    document.querySelector("#like>img").src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png";
}
document.querySelector("#like").addEventListener("click",likeF);
function likeF(event){
    event.preventDefault();
    document.querySelector("#like>img").src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png";
    document.querySelector("#like").addEventListener("mouseleave",likeleave);
function likeleave(event){
    event.preventDefault();
    document.querySelector("#like>img").src="https://cdn-icons-png.flaticon.com/512/1077/1077086.png";
}
 let objData={
        cartimg:document.querySelector("#changeimg").src,
        cartName:document.querySelector("#imgName").innerHTML,
        carPrice:document.querySelector("#price").innerHTML,
        cartColor:document.querySelector("#color").innerHTML,
    }
    cartData.push(objData);
    localStorage.setItem("cartSection",JSON.stringify(cartData));
}

document.querySelector("#like").addEventListener("mouseleave",likeleave);
function likeleave(event){
    event.preventDefault();
    document.querySelector("#like>img").src="https://icon-library.com/images/heart-icon-transparent/heart-icon-transparent-1.jpg";
}

document.querySelector("#smallimg>img:nth-child(1)").addEventListener("click",imgFunction);
function imgFunction(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(1)").style.boxShadow="#528cfc 0px 1px 2px 0px, #528cfc 0px 2px 6px 2px";
    img.src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16723126/2022/2/7/46a8dcd3-5937-4690-98ea-09f750f703781644248032248-Tokyo-Talkies-Mauve-Bodycon-Mini-Dress-91644248031768-5.jpg";
}
document.querySelector("#smallimg>img:nth-child(1)").addEventListener("mouseleave",imgF);
function imgF(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(1)").style.boxShadow="#528cfc 0px 0px 0px 0px";
    
}
document.querySelector("#smallimg>img:nth-child(2)").addEventListener("click",imgFunction2);
function imgFunction2(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(2)").style.boxShadow="#528cfc 0px 1px 2px 0px, #528cfc 0px 2px 6px 2px";
    img.src=imgArr[0];
}
document.querySelector("#smallimg>img:nth-child(2)").addEventListener("mouseleave",imgF2);
function imgF2(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(2)").style.boxShadow="#528cfc 0px 0px 0px 0px";
}
document.querySelector("#smallimg>img:nth-child(3)").addEventListener("click",imgFunction3);
function imgFunction3(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(3)").style.boxShadow="#528cfc 0px 1px 2px 0px, #528cfc 0px 2px 6px 2px";
    img.src=imgArr[1];
}
document.querySelector("#smallimg>img:nth-child(3)").addEventListener("mouseleave",imgF3);
function imgF3(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(3)").style.boxShadow="#528cfc 0px 0px 0px 0px";
}
document.querySelector("#smallimg>img:nth-child(4)").addEventListener("click",imgFunction4);
function imgFunction4(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(4)").style.boxShadow="#528cfc 0px 1px 2px 0px, #528cfc 0px 2px 6px 2px";
    img.src=imgArr[2];
}
document.querySelector("#smallimg>img:nth-child(4)").addEventListener("mouseleave",imgF4);
function imgF4(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(4)").style.boxShadow="#528cfc 0px 0px 0px 0px";
}
document.querySelector("#share").addEventListener("click",newDiv);
function newDiv(event){
    event.preventDefault();
    let div=document.createElement("div");
    div.setAttribute("id","facebookdiv");
    div.style.boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px";
    let face=document.createElement("img");
    face.setAttribute("class","facebook");
    let anchor=document.createElement("a");
    anchor.href="https://www.facebook.com/login/";
   face.src="data:image/png;base64,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";
   let pinterest=document.createElement("img");
   pinterest.src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png";
   pinterest.setAttribute("class","facebook");
   let anchor2=document.createElement("a");
   anchor2.href="https://in.pinterest.com/login/";
   anchor.append(face);
   anchor2.append(pinterest);
   div.append(anchor,anchor2);
    document.querySelector("#smallimg").append(div);
}
document.querySelector("#bigimg").addEventListener("click",deletDiv);
function deletDiv(event){
    event.preventDefault();
    document.querySelector("#facebookdiv").innerHTML="";
    document.querySelector("#facebookdiv").style.boxShadow="";
}

// document.querySelector("#facebookdiv").addEventListener("click",anchoTag);
// function anchoTag(event){
//     event.preventDefault();
//     let anchor=document.createElement("a");
//     anchor.href="https://www.facebook.com/";
//     document.querySelector("#smallimg>div").append(anchor);
// }


// change img ------------

let buttons=document.querySelectorAll(".btn");
let imgNum=0;


buttons[0].addEventListener("click",function(){
if(imgNum===0){
    imgNum=imgArr.length-1;
}else{
    imgNum--;
}
  img.src=imgArr[imgNum];
});
buttons[1].addEventListener("click",function(){
    if(imgNum===imgArr.length-1){
        imgNum=0;
    }else{
        imgNum++;
    }
      img.src=imgArr[imgNum];
    });


    buttons[0].addEventListener("mouseover",function(){
        buttons[0].style.boxShadow="#528cfc 0px 0px 0px 0px, #528cfc 0px 0px 6px 0px";
    });
    buttons[1].addEventListener("mouseover",function(){
        buttons[1].style.boxShadow="#528cfc 0px 0px 0px 0px, #528cfc 0px 0px 6px 0px";
    });
    buttons[0].addEventListener("mouseleave",function(){
        buttons[0].style.boxShadow="";
    });
    buttons[1].addEventListener("mouseleave",function(){
        buttons[1].style.boxShadow="";
    });
document.querySelector("#cart").addEventListener("click",opn)
function opn(){
    window.location.href="cart.html"
}
