var n = document.querySelector("img");
var pics = ["images/img20.jpg","images/img21.jpg","images/img22.jpg"];

var count = 0;

function prev(){
    count--;
    if(count<0){
        count=pics.length-1;
        n.src = pics[count];
    }    
    else{
        n.src = pics[count];
    }
}


function next(){
    count++;
    if(count>=pics.length){
        count = 0;
        n.src = pics[count];
    }    
    else{
        n.src = pics[count];
    }
}