var pass = document.getElementById("password-input");
var confirm = document.getElementById("password-confirm");
var pass1 = pass.valueOf;
var confirm1 = confirm.valueOf;

const PassConfirm = () =>{
 if(confirm1 === pass1){
 console.log("matched")
 }
 else{
   console.log(" not matched")
 }
 
}
