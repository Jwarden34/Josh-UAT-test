function validate(){
var password = document.getElementById("pass");
var length = document.getElementById("length");
var firstname = document.getElementById("first");
var lastname = document.getElementById("last");


if(password.value.length ==3 && firstname.value.length==10 && lastname.value.length>1 || lastname.value.length==10){
   alert("Login good!");
   window.location.replace("index.html");
return false;

}
else{
alert("login wrong");
}

}