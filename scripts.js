/*
$(document).ready(function (){
    $('#nav-btn').click(function (){
        $('#nav-btn').toggleClass('fa-bars',100)
        $('#nav-btn').toggleClass('fa-times',100)
        $('.menu').toggleClass('active',500)
    })
})*/
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
// carousel
const track = document.querySelector('.carousel');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.head-carousel-btn a:first-child');
const prevBtn = document.querySelector('.head-carousel-btn a:last-child');
// const slideSize = slides[0].getBoundingClientRect();// gives an array of slides coordination
// const slideWidth = slideSize.width;// getting width from slideSize
const slideWidth = track.getBoundingClientRect().width;
// functions
const setSlidesPosition = (slide,index)=>{
    slide.style.right = slideWidth * index/5 + "px";
}
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(+' + targetSlide.style.right + ')';
    currentSlide.classList.remove('current');
    targetSlide.classList.add('current');
}
slides.forEach(setSlidesPosition);
nextBtn.addEventListener('click', evt => {
    const currentSlide = track.querySelector('.current');
    const nextSlide = currentSlide.nextElementSibling;
    let first = currentSlide.cloneNode(true);
    track.append(first);
    moveToSlide(track,currentSlide,nextSlide);
    track.removeChild(currentSlide)
});
prevBtn.addEventListener('click', evt => {
    const currentSlide = track.querySelector('.current');
    const prevSlide = currentSlide.previousElementSibling;
    let first = track.lastChild.cloneNode(true)
    track.prepend(first);
    moveToSlide(track,currentSlide,prevSlide);
    track.removeChild(track.lastChild);
});
