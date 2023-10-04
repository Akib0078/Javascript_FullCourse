var n = document.querySelector("#para");

n.addEventListener("mouseover",function(){
    n.classList.add("para_style");
})

n.addEventListener("mouseout",function(){
    n.classList.remove("para_style");
})