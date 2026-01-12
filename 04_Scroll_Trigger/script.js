gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:"#page2 #box",
})
gsap.from("#page3 #box",{
    scale:0,
    // delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start: "top 60%"
    },
})

gsap.from("#page4 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        markers:true,
        start: "top 60%"
    }
})


gsap.from("#page4 h2",{
    opacity:0,
    duration:1,
    x:-500,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        markers:true,
        start: "top 60%",
    }
})

gsap.from("#page5 #box",{
    scale:0,
    duration:2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page5 #box",
        scroller:"body",
        markers:true,
        start: "top 60%",
        end:"top 30%",
        // scrub:true,
        scrub:2, //can give true/false or value between 1-5
    },
})