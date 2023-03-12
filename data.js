function dataLoss (){
alert("Data will be deleted in 5s");

}

var c=5;
var p;

function start() {
    c--;
    document.getElementById("div1").innerHTML=c;
}
function fun1(){
     c=5;
     p=setInterval("start()",1000)

}
function fun2() {
    clearInterval(p);
}
function dataSave (){
    alert("Data Saved");
}