function add(x,y){
    var result = x+y;
    return result;
}

function sub(x,y){
    var result = x-y;
    return result;
}

function div(x,y){
    var result = x/y;
    return result;
}

function mul(x,y){
    var result = x*y;
    return result;
}

var n = parseInt(prompt("Enter first number"));
var m = parseInt(prompt("Enter second number"));
var p = prompt("select operation= add/sub/div/mul");

if(p=="add"){
    document.write(add(n,m));
}
else if(p=="sub"){
    document.write(sub(n,m));
}
else if(p=="div"){
    document.write(div(n,m));
}
else {
    document.write(mul(n,m));
}