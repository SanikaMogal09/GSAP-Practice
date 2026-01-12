// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1
// })
// gsap.to("#box2",{
//     x:500,
//     y:500,
//     duration:2,
//     delay:1
// })

// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1
// })
// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1
// })

// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate: 360,
//     backgroundColor: "#cf8796ff",
//     borderRadius: "50%",
//     scale:2,
// })
// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate: 360,
//     backgroundColor: "#401fe4ff",
//     borderRadius: "50%",
//     scale:2,
// })

// Repeat the animation in single direction
gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    repeat:1,// Repeat the animation 
    repeat:-1, //repeat infinitely
})
// Repeat the animation in single direction
gsap.to("#box2",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    repeat:-1, //repeat infinitely
    yoyo:true
})

var tl2 = gsap.timeline()

gsap.from("#")