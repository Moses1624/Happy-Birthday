window.addEventListener("load", () => {

Swal.fire({
title:"Play romantic music? ❤️",
showCancelButton:true,
confirmButtonText:"Yes",
cancelButtonText:"No"
}).then(result => {

if(result.isConfirmed){
document.querySelector(".song").play();
}

startFilm();

});

});

function startFilm(){

gsap.set(".container",{visibility:"visible"});

const tl = gsap.timeline();

/* Scene 1 */
tl.to(".scene1",{opacity:1,duration:2})
.to(".scene1",{opacity:0,duration:2,delay:2})

/* Scene 2 */
.to(".scene2",{opacity:1,duration:2})
.to(".scene2",{opacity:0,duration:2,delay:2})

/* Scene 3 */
.to(".scene3",{opacity:1,duration:2})
.to(".scene3",{opacity:0,duration:2,delay:4})

/* Scene 4 */
.to(".scene4",{opacity:1,duration:2})
.from(".hero",{scale:0.5,opacity:0,duration:2})
.from(".wish",{y:50,opacity:0,duration:2})
.to(".scene4",{opacity:0,duration:2,delay:3})

/* Scene 5 Polaroid */
.to(".scene5",{opacity:1,duration:2})
.from(".polaroid",{y:80,opacity:0,stagger:0.5,duration:2})
.to(".scene5",{opacity:0,duration:2,delay:4})

/* Scene 6 Ending */
.to(".scene6",{opacity:1,duration:2})

}

document.getElementById("replay").onclick=()=>{
location.reload();
};
