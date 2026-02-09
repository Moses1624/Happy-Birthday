window.addEventListener('load', () => {
Swal.fire({
title: 'Do you want to play music in the background?',
icon: 'warning',
showCancelButton: true,
confirmButtonText: 'Yes',
cancelButtonText: 'No'
}).then((result) => {

```
    const song = document.querySelector('.song');

    if (result.isConfirmed) {
        song.muted = false;
        song.play().catch(()=>{});
    }

    animationTimeline();
});
```

});

const animationTimeline = () => {

```
const textBoxChars = document.querySelector(".hbd-chatbox");
const hbd = document.querySelector(".wish-hbd");

if(hbd){
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;
}

if(textBoxChars){
    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
}

const tl = gsap.timeline();

tl.to(".container", { duration:0.6, visibility:"visible" })

.from(".one", { duration:0.7, opacity:0, y:10 })
.from(".two", { duration:0.4, opacity:0, y:10 })

.to(".one", { duration:0.7, opacity:0, y:10 }, "+=3.5")
.to(".two", { duration:0.7, opacity:0, y:10 }, "-=1")

.from(".three", { duration:0.7, opacity:0, y:10 })
.to(".three", { duration:0.7, opacity:0, y:10 }, "+=3")

.from(".four", { duration:0.7, scale:0.2, opacity:0 })
.from(".fake-btn", { duration:0.3, scale:0.2, opacity:0 })

.to(".hbd-chatbox span", {
    duration:1.5,
    visibility:"visible",
    stagger:0.05
})

.to(".four", { duration:0.5, scale:0.2, opacity:0, y:-150 }, "+=1")

.from(".hero-photo", { duration:0.6, scale:3, opacity:0 })

.from(".hat", { duration:0.5, x:-100, y:350, rotation:-180, opacity:0 })

.from(".wish-hbd span", {
    duration:0.7,
    opacity:0,
    y:-50,
    rotation:150,
    stagger:0.1
})

.to(".six", { duration:0.5, opacity:0, y:30, zIndex:-1 })

.from(".nine p", { duration:1, opacity:0, y:-20, stagger:1.2 });

document.getElementById("replay").onclick = () => tl.restart();
```

};
