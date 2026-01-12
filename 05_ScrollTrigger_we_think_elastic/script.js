gsap.to("#page2 h1",{
    transform:"translateX(-180%)",
    scrollTrigger:{
        trigger:"#page2",  //when we use pin we trigger only parent element
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    },
})
