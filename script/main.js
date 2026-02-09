window.addEventListener("load", () => {

Swal.fire({
title: "Play romantic music? 🎵",
showCancelButton: true,
confirmButtonText: "Yes ❤️",
cancelButtonText: "No"
}).then((result) => {

if(result.isConfirmed){
document.querySelector(".song").play();
}

startFilm();

});

});

function startFilm(){

const tl = gsap.timeline();

// Opening
tl.from(".one", {opacity:0, y:100, duration:2})
.from(".two", {opacity:0, y:50, duration:2}, "-=1")

.to(".one",{opacity:0,duration:2})
.to(".two",{opacity:0,duration:2}, "-=2")

// Message
.from(".three",{opacity:0, scale:0.8, duration:2})
.to(".three",{opacity:0, duration:2, delay:1})

// Letter
.from(".four",{opacity:0, y:80, duration:2})
.from(".text-box",{scale:0.9, duration:2})
.to(".four",{opacity:0, duration:2, delay:2})

// Thoughts
.from(".five p",{opacity:0, y:30, stagger:0.8})
.to(".five",{opacity:0, duration:2, delay:2})

// Photo
.from(".six",{opacity:0, scale:0.7, duration:3})

// Polaroids
.from(".polaroid",{
opacity:0,
y:120,
rotation: () => gsap.utils.random(-15,15),
stagger:0.6
})

// Birthday Wish
.from(".wish-hbd span",{
opacity:0,
y:60,
stagger:0.15
})
.from(".wish h5",{opacity:0})

// Replay
.from("#replay",{opacity:0, scale:0.8});

}

// Replay
document.getElementById("replay").addEventListener("click",()=>{
location.reload();
});
