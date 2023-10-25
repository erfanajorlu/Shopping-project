let slideIndex = 1;
let remainingTime = 70000;

function setTime(){
    let h = Math.floor(remainingTime/3600)
    let m = Math.floor((remainingTime%3600)/60)
    let s = (remainingTime%3600) % 60
    document.querySelector(".hours").innerHTML = h;
    document.querySelector(".minutes").innerHTML = m;
    document.querySelector(".seconds").innerHTML = s;
}

setInterval(()=>{
    remainingTime -= 1;
    setTime();
},1000)
function setSlide(input , index){
    slideIndex = index;
    let active = document.getElementById(`${input}`);
    let slides = [...document.querySelector('.slides').children]
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    active.classList.add('active');
}

setInterval(()=>{
    slideIndex += 1;
    if (slideIndex > 3) {
        slideIndex = 1;
    }
    setSlide(`slide${slideIndex}`, slideIndex);
} , 4000)
