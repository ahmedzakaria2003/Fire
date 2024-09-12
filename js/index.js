window.addEventListener("mousemove", console.log("hi"))

var img = document.querySelector("img");

document.addEventListener("mousemove", function(e){
    console.log("hi", e.clientY);
    img.style.top=`${e.clientY}px`;
    img.style.left= `${e.clientX}px`;
}) 