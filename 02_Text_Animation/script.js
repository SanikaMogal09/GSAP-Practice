// gsap.to("h1",{
//     color:"#dff457ff",
//     duration:2,
//     delay:1,
// })

gsap.from("h1",{
    opacity:0,
    duration:2,
    y:20,
    delay:1,
    stagger:1, // so that the elements come one by one
    stagger:-1, // so that the elements come one by one in reverse
    
})