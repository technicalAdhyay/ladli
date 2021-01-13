var currentSlide = 0;
var leftSlide = 1;
var rightSlide = 2;

var allSlideButtons = document.querySelectorAll('.slideshow__buttons--button');
var allSlides = document.querySelectorAll('.slide');
var slideTimeout = setTimeout(
    function(){
        slideshow('left')
    },8000
);

function slideshow(dir){
    clearTimeout(slideTimeout);
    if( dir == "left" ){
        //--------------Left slide---------------
        allSlides[currentSlide].classList.remove('select');
        allSlides[currentSlide].classList.add('left');
        allSlides[currentSlide].classList.add('prev');
        allSlides[rightSlide].classList.remove('right');
        allSlides[rightSlide].classList.add('select');            

        let tc = currentSlide;
        let tr = rightSlide;
        let tl = leftSlide;

        currentSlide = tr;
        leftSlide = tc;
        rightSlide = tl;
        setTimeout(
            function(){
                allSlides[tl].classList.remove('left');
                allSlides[tl].classList.add('right');
                allSlides[tc].classList.remove('prev');
            },301
        )
    }
    else{
        //--------------Right slide---------------
        allSlides[currentSlide].classList.remove('select');
        allSlides[currentSlide].classList.add('right');
        allSlides[currentSlide].classList.add('prev');
        allSlides[leftSlide].classList.remove('left');
        allSlides[leftSlide].classList.add('select');  

        let tc = currentSlide;
        let tr = rightSlide;
        let tl = leftSlide;

        currentSlide = tl;
        leftSlide = tr;
        rightSlide = tc;

        setTimeout(
            function(){
                allSlides[tr].classList.remove('right');
                allSlides[tr].classList.add('left');
                allSlides[tc].classList.remove('prev');
            },301
        )
    }
    slideTimeout = setTimeout(
        function(){
            slideshow('left')
        },8000
    );
}

Array.from( allSlideButtons ).forEach( (button,index) => {

    function isSlide(e){
        if( button.classList.contains('left') ){
            slideshow('left');
        }else{
            slideshow('right');
        }
        button.removeEventListener('click',isSlide);
        setTimeout(
            function(){
                button.addEventListener('click',isSlide);
            },1000
        )
    }

    button.addEventListener( 'click',isSlide);
} );
