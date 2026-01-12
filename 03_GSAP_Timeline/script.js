// Problem - each element is separate 
// so we have to adjust time for every element
// Right now this is asynchronous i.e. every element is working separately
// gsap.to("#box1",{
//     x:1200,
//     duration:1.5,
//     delay:1,
//     rotate:360
// })
// gsap.to("#box2",{
//     x:1200,
//     backgroundColor:"yellow",
//     borderRadius:50,
//     duration:2,
//     delay:2.5, //(1.5+1 of box 1)
// })
// gsap.to("#box3",{
//     x:1200,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4,
// })

// Making it synchronous using GSAP timeline
var tl = gsap.timeline()

tl.to("#box1",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})
tl.to("#box2",{
    x:1500,
    duration:1.5,
})
tl.to("#box3",{
    x:1500,
    duration:1.5,
})

var tl2 = gsap.timeline()

tl2.from("h2",{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5,
})
tl2.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl2.from("h1",{
    y:20,
    opacity:0,
    duration:0.5,
    scale:0.2
})
