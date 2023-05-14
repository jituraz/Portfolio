function valuSetters(){
    gsap.set(".nav_menu a", { y: "-100%", opacity: 0});
    gsap.set(".home .row svg", { y: "-100%", opacity: 0});
    gsap.set(".home span .child", { y: "100%"})
    gsap.set(".home .row img", {opacity:0})
}

function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
    //create two spans
    var parent = document.createElement("span");
    var child = document.createElement("span");
    //parent and child both sets their respactive classes 
    parent.classList.add("parent");
    child.classList.add("child");
    //span parents gets child and child gets elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    //elem replaces its value with parrent span
    elem.innerHTML="";
    elem.appendChild(parent);
});
}

function loaderAnimation(){
    var tl = gsap.timeline();

tl
.from(".loader .child span", {
    x: 100,  
    stagger: .2,
    duration: 1.2, 
    ease: Power3.easeInOut
})
.to(".loader .parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})
.to(".loader", {
    height:0,
    duration: 1,
    ease: Circ.easeInOut
})
.to(".green", {
    height:"100%",
    top:0,
    duration: 1,
   
    ease: Circ.easeInOut
})
.to(".green", {
    height:"0%",
    duration: 1,
    delay:-.5,
    ease: Circ.easeInOut,
    onComplete: function(){
        animateHomepage();
    }
})

}

// function animateSvg(){

//     document.querySelectorAll("#Visual>g").forEach(function (e){
//         var character = e.childNodes[1].childNodes[1];
//         character.style.strokeDasharry =character.getTotalLength() +'px';
//         character.style.strokeDashoffset =character.getTotalLength() +'px';

//     })

//     gsap.to("#Visual>g>g>path", {
//         strokeDashoffset: 0,
//         duration: 2,
//         ease: Expo.easeInOut,
//         delay: 2
//     })


// }

function animateHomepage(){
    var tl = gsap.timeline();
    tl
    .to(".nav_menu a", {
        y: 0,
        opacity:1,
        stagger: .05,
        ease: Expo.easeInOut,
     })
    
     
     .to(".home span .child", {
        y: 0,
        stagger: .05,
        duration:2,
        ease: Expo.easeInOut,
     })
     .to(".home .row svg", {
        y: 0,
        opacity:1,
        stagger: .05,
        duration:2,
        delay:-1.7,
        ease: Expo.easeInOut,
     })
     .to(".home .row img", {
        y: 0,
        opacity:1,
        duration:1,
        ease: Expo.easeInOut,
     })
}



revealToSpan();
valuSetters();
loaderAnimation();


