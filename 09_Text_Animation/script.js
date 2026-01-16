// console.log(h1Text); 

// to get the h1 content
// var h1Text = document.querySelector("h1").textContent;
// console.log(h1Text);

//  var splittedtext = h1Text.split(" ");
//  console.log(splittedtext); // we get an array



// function breakText() {
//     var h1 = document.querySelector("h1");
//     var h1Text = h1.textContent;

//     var splittedText = h1Text.split(""); // gives the splitted text in array form

//     var clutter = "";

//     splittedText.forEach(function(elem){
//     // clutter += elem;
//        clutter  += `<span>${elem}</span>`
//     })

//     h1.innerHTML = clutter;
// }

// breakText();

// gsap.from("h1 span",{
//     y:50,
//     duration:0.8,
//     opacity:0,
//     delay:0.5,
//     stagger:0.15,
//     // stagger:-0.15 reverse
// })

function breakText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split(""); // gives the splitted text in array form

    var halfValue = Math.floor(splittedText.length/2);

    var clutter = "";

    // console.log(halfValue)

    splittedText.forEach(function(elem,idx){
        if (idx<halfValue) {
            clutter  += `<span class = "left">${elem}</span>`
        }else{
            clutter  += `<span class = "right">${elem}</span>`
            
        }    
    });
    h1.innerHTML = clutter;
 
}

breakText();

gsap.from("h1 span.left",{
    y:80,
    duration:0.6,
    opacity:0,
    delay:0.5,
    stagger:0.15,
})
gsap.from("h1 span.right",{
    y:80,
    duration:0.8,
    opacity:0,
    delay:0.5,
    stagger:-0.15 
})