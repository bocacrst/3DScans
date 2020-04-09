const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const nextBtn = document.querySelector('.carousel__button--right');
const prevBtn = document.querySelector('.carousel__button--left');
const dotNav = document.querySelector('.carousel__indicator');
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((currSlide,index)=>{
    currSlide.style.left = slideWidth * index + 'px';
})

console.log(slideWidth);