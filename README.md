### GSAP (GreenSock Animation Platform)

Powerful JavaScript animation library used to create high-performance, smooth animations for websites and web apps.
--------------------------------------------------

## gsap.to()

👉 Animates an element from its current state to a new state.
--------------------------------------------------

## gsap.from()

👉 Animates an element from a given state to its current state.
--------------

## yoyo

yoyo makes an animation reverse back to its starting state after it finishes—like a yo-yo going forward and coming back
----------------------------

## stagger

stagger is used when you want to animate multiple elements one after another instead of all at once, giving a smooth, flowing effect.

## Gsap Timeline

gsap.timeline()

A GSAP timeline lets you sequence multiple animations in a clean, controlled way—like directing scenes in a movie 🎬 instead of firing animations randomly.
-------

## ScrollTrigger 

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js" integrity="sha512-P2IDYZfqSwjcSjX0BKeNhwRUH8zRPGlgcWl5n6gBLzdi4Y5/0O4zaXrtO4K9TZK6Hn1BenYpKowuCavNandERg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

put this below the gsap cdn in index.html

ScrollTrigger is a GSAP plugin that lets you control animations using scroll position—animations start, stop, scrub, or pin elements as the user scrolls.

# Key ScrollTrigger properties (easy)

- trigger → element that triggers animation
- start → when animation starts
- end → when animation ends
- scrub → sync animation with scroll
- pin → pin element while scrolling

when element’s top touches the page’s top, the animation begins.