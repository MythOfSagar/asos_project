document.querySelector("#Addcart").addEventListener("mouseenter",myFunction);
function myFunction(event){
    event.preventDefault();

    document.querySelector("#Addcart").style.backgroundColor="#015830";
    // let but=document.querySelector("#Addcart").value;
    // localStorage.setItem("bagData",JSON.stringify(but));
    
}
// img arr---------------------------------------------------------------
let imgArr=["https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12318240/2021/2/27/98a34a3b-508c-4ede-bd54-9885d95e32331614428943330-Calvin-Klein-Jeans-Men-Tshirts-2101614428942578-3.jpg",
"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12318240/2021/2/27/1529bc2a-e65b-4c7b-9f2e-a43b048bc6011614428943311-Calvin-Klein-Jeans-Men-Tshirts-2101614428942578-4.jpg",
"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12318240/2021/2/27/12a35484-3d8f-48b5-b42c-15d9eb62b4c81614428943292-Calvin-Klein-Jeans-Men-Tshirts-2101614428942578-5.jpg"];

let img=document.querySelector("#changeimg");

document.querySelector("#Addcart").addEventListener("mouseleave",mouseleave);
function mouseleave(event){
    event.preventDefault();

    document.querySelector("#Addcart").style.backgroundColor="#018849";
    
}document.querySelector("#Addcart").addEventListener("click",addedFunction);
function addedFunction(event){
    event.preventDefault();
    let input=document.querySelector("#select").value;
//    console.log(input);
   
    if(input==""){
        document.querySelector("#select").style.border="solid red";
        document.querySelector("#select").style.boxShadow="#528cfc 0px 1px 2px 0px, #528cfc 0px 2px 6px 2px";
    }else{ 
        document.querySelector("#select").style.border="solid black";
        document.querySelector("#select").style.boxShadow="#528cfc 0px 0px 0px 0px";
        document.querySelector("#Addcart").innerHTML="&#x2714; ADDED";
    }
    
}

document.querySelector("#like").addEventListener("mouseenter",likeFunction);
function likeFunction(event){
    event.preventDefault();
    document.querySelector("#like>img").src="https://www.flaticon.com/svg/vstatic/svg/3916/3916769.svg?token=exp=1655354846~hmac=77d7b9ff21015aaa7d21f596f565df09";
}
document.querySelector("#like").addEventListener("click",likeF);
function likeF(event){
    event.preventDefault();
    document.querySelector("#like>img").src="https://www.flaticon.com/svg/vstatic/svg/3916/3916769.svg?token=exp=1655354846~hmac=77d7b9ff21015aaa7d21f596f565df09";
}
document.querySelector("#like").addEventListener("mouseleave",likeleave);
function likeleave(event){
    event.preventDefault();
    document.querySelector("#like>img").src="https://www.flaticon.com/svg/vstatic/svg/3916/3916767.svg?token=exp=1655356392~hmac=9e9d5a5ada8bb686a74d0a31495ba871";
}

document.querySelector("#smallimg>img:nth-child(1)").addEventListener("mouseover",imgFunction);
function imgFunction(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(1)").style.boxShadow="#528cfc 0px 1px 2px 0px, #528cfc 0px 2px 6px 2px";
    img.src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12318240/2021/2/27/b7f27330-eb9b-4cd8-9d2d-64239c4a5adb1614428943368-Calvin-Klein-Jeans-Men-Tshirts-2101614428942578-1.jpg";
}
document.querySelector("#smallimg>img:nth-child(1)").addEventListener("mouseleave",imgF);
function imgF(event){
    event.preventDefault();
    document.querySelector("#smallimg>img:nth-child(1)").style.boxShadow="#528cfc 0px 0px 0px 0px";
    
}
document.querySelector("#smallimg>img:nth-child(2)").addEventListener("mouseover",imgFunction2);
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
document.querySelector("#smallimg>img:nth-child(3)").addEventListener("mouseover",imgFunction3);
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
document.querySelector("#smallimg>img:nth-child(4)").addEventListener("mouseover",imgFunction4);
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
document.querySelector("#bigimg").addEventListener("click",deletDiv);
function deletDiv(event){
    event.preventDefault();
    document.querySelector("#facebookdiv").innerHTML="";
    console.log("1")
    document.querySelector("#facebookdiv").style.boxShadow="";
}
document.querySelector("#share").addEventListener("click",newDiv);
function newDiv(event){
    event.preventDefault();
    let div=document.createElement("div");
    div.setAttribute("id","facebookdiv");
    div.style.boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px";
    let face=document.createElement("img");
    face.setAttribute("class","facebook");
   face.src="data:image/png;base64,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";
   let pinterest=document.createElement("img");
   pinterest.src="data:image/png;base64,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";
   pinterest.setAttribute("class","facebook");
   div.append(face,pinterest);
    document.querySelector("#smallimg").append(div);
}

// document.querySelector("#facebookdiv").addEventListener("click",anchoTag);
// function anchoTag(event){
//     event.preventDefault();
//     let anchor=document.createElement("a");
//     anchor.href="https://www.facebook.com/";
//     document.querySelector("#smallimg>div").append(anchor);
// }


// change img --------------------------------------

let buttons=document.querySelectorAll(".btn");
let imgNum=0;


buttons[0].addEventListener("click",function(){
if(imgNum===0){
    imgNum=imgArr.length-1;
}else{
    imgNum--;
}
  img.src=imgArr[imgNum];
  buttons[0].style.boxShadow="#528cfc 0px 0px 0px 0px, #528cfc 0px 0px 6px 0px";
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



    // show more ----- show less -------------------
    function readButton() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      console.log(dots);
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }


