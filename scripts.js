// menu btn
function menuBtn () {
    var elem = document.getElementById('nav-btn');
    elem.classList.toggle("fa-bars");
    elem.classList.toggle("fa-times");
}
// grid sliders
var index = 1;
show(index,0);
show(index,1);
show(index,2);
function show(n,a) { // "a" is a parameter to let the function know which element to use
    var i;
    var slides = document.getElementsByClassName("slides"+a);
    var tabs = document.getElementsByClassName("tab");
    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (a===0){
        for (i = 0; i < tabs.length; i++) {
            tabs[i].className = tabs[i].className.replace(" tab-active", "");
        }
        tabs[index-1].className += " tab-active";
    }
    slides[index-1].style.display = " block";
}
function plusSlides(n,a) {
    show(index += n,a);
}
function currentSlide(n) {
    show(index = n,0);
}
function infinity(){
    plusSlides(1,1);
    plusSlides(1,2);
}
setInterval(infinity, 5000);
for(let i = 0; i < 5; ++i){
    var track = document.querySelector('#car'+i);
    const slideWidth = track.getBoundingClientRect().width;
    var slides = Array.from(track.children);
    slides.forEach((slide,index) => {
        slide.style.right = slideWidth * index / 5 + "px";
    })
}
function move(direction,a){
    var nextSlide;
    var track = document.querySelector('#car'+a);
    const currentSlide = track.querySelector('.current');
    if (direction === 'next') {
        nextSlide = currentSlide.nextElementSibling;
    }else{
        nextSlide = currentSlide.previousElementSibling;
    }
    if (nextSlide.style.right === "2703.36px" ){
        return;
    }
    track.style.transform = 'translateX(' + nextSlide.style.right + ')';
    currentSlide.classList.remove('current');
    nextSlide.classList.add('current');
}
