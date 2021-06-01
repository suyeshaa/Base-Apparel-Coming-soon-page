// alert("hello");
var mail = document.querySelector("#mail");
// var input = document.querySelector(".form input");
var button = document.querySelector(".btn");
var err_text = document.querySelector(".error p");
var err_image = document.querySelector(".err_img img")
const mail_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
//  /^\w+([\.w]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/. 

function non_format(){
    // button.style.backgroundImage = "linear-gradient(to right,hsl(0, 36%, 70%), hsl(0, 93%, 68%)"; 
    button.style.boxShadow = "10px 10px 20px  hsl(0, 80%, 86%)" ;
    mail.style.borderColor= "hsl(0, 93%, 68%)" ;
    mail.style.borderWidth = "2px"
    err_text.style.display = "block";
    err_image.style.display= "block";


}

function go_back(){

}

button.addEventListener("click" ,()=>{
    // console.log(mail.value)
    if(mail_format.test(mail.value)){
        // alert("hello");
        mail.value='';
    }
    else{
        // err_text.style.display = "block" ;
        // console.log("shai daalna");
        non_format();
        mail.value='';
    }
           
});


// mail.addEventListener("click" , ()=>{
//     window.location.reload();
// })

mail.addEventListener("click" , ()=>{
    button.style ="";
    mail.style="";
    err_image.style="";
    err_text.style="";
})