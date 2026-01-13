var main =  document.querySelector("#main");
var cursor =  document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
main.addEventListener("mousemove",function(val){
    // console.log("event performed");
    // console.log(val.x);
    gsap.to(cursor,{
        x:val.x,
        y:val.y,
        duration:0.6,
    })
    
})

imageDiv.addEventListener("mouseenter",function () {
    // console.log("hellooo");
    cursor.innerHTML="View More";
    gsap.to(cursor,{
        scale:2,
        backgroundColor:"#f0eded8d"
    })  
})
imageDiv.addEventListener("mouseleave",function () {
    // console.log("hellooo");
    cursor.innerHTML="";
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#f2f2f3"

    })  
})