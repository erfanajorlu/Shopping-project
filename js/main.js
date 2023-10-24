let slideIndex = 1;
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
