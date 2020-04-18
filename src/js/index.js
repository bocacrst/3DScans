const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const nextBtn = document.querySelector('.carousel__button--right');
const prevBtn = document.querySelector('.carousel__button--left');
const dotNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const firstSlide = track.querySelector('.current-slide');
const firstDot = dotNav.querySelector('.current-slide');
const lastSlide = track.querySelector('.last-slide');
const lastDot = dotNav.querySelector('.last-button');

var x=0;

const setSlidePossition = (slide,index)=>{
    
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePossition);


const moveToSlide = (track,currentSlide,targetSlide)=>{
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot,targetDot)=>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

nextBtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    x = 1;   
    if(!nextSlide){
    
        moveToSlide(track,currentSlide,firstSlide);
        updateDots(currentDot, firstDot);

    }else{
        
        moveToSlide(track,currentSlide,nextSlide);
        updateDots(currentDot, nextDot);
        
    }
})

prevBtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    x = 1;

    if(!prevSlide){
      
        moveToSlide(track,currentSlide,lastSlide);
        updateDots(currentDot, lastDot);

    }else{
      
        moveToSlide(track,currentSlide,prevSlide);
        updateDots(currentDot, prevDot);
    }
})

dotNav.addEventListener('click', e =>{
    const targetDot = e.target.closest('button');

    if(!targetDot)
    return

    const currentDot = dotNav.querySelector('.current-slide');
    const currentSlide = track.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
    
})

//-----TIMER----//

const autoChange = ()=>{

    if(x!=0)
    return

    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
  
    if(!nextSlide){
    
        moveToSlide(track,currentSlide,firstSlide);
        updateDots(currentDot, firstDot);

    }else{
        
        moveToSlide(track,currentSlide,nextSlide);
        updateDots(currentDot, nextDot);   
    }

        setTimeout(autoChange,3500);
}

window.onload = autoChange;


$(document).ready(function () {

    /*#####################################################*/
    /*-------------------CONTACT-FORM----------------------*/
    /*#####################################################*/


    $('.submit').click(function (event) {
    // event.preventDefault()
        console.log('Submit')

        var email = $('#email').val()

    })


    /*#####################################################*/
    /*---------------------NAVIGATION----------------------*/
    /*#####################################################*/


    
    $('.js--section-slider').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
            
            
        }else{
            $('nav').removeClass('sticky');

        }

    },{
        offset: '850px;'
    });
        
    

    /*#####################################################*/
    /*-----------------------BUTTONS-----------------------*/
    /*#####################################################*/


    $('.js--scroll-to-info').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-info').offset().top}, 1000); 
    });

    $('.js--scroll-to-slider').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-slider').offset().top}, 1000); 
    });

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000); 
    });

});



