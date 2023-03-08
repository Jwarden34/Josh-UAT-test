function validate(){
var password = document.getElementById("pass");
var length = document.getElementById("length");

if(password.value.length >=3){
   alert("Login good!");
   window.location.replace("UAThtml.html");
return false;

}
else{
alert("login wrong");
}

}