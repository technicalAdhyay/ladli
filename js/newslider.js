var allsliderbuttons = document.querySelectorAll('.newslider__buttons--button');
var allsliderimages = document.querySelectorAll('.newslider__images--image');
var allslidercontent = document.querySelectorAll('.newslider__content--contentbox');
var slidetimeout = setTimeout(
    function(){
        slideleft();
    },8000
)
var currentslide = 0;
var leftslide = 1;
var rightslide = 2;

function slideleft(){
    clearTimeout(slidetimeout);
    allsliderimages[currentslide].classList.add('left');    
    allsliderimages[leftslide].classList.add('select');
    allsliderimages[leftslide].classList.remove('left');
    Array.from( allslidercontent ).forEach( (content) => {
        content.classList.remove('select');
    } )
    allslidercontent[leftslide].classList.add('select');

    setTimeout(
        function (){
            allsliderimages[currentslide].classList.remove('select');
            allsliderimages[currentslide].classList.remove('left');
            allsliderimages[currentslide].classList.remove('right');

            allsliderimages[rightslide].classList.remove('right');
            allsliderimages[rightslide].classList.remove('left');
            allsliderimages[rightslide].classList.remove('select');

            allsliderimages[leftslide].classList.remove('left');
            allsliderimages[leftslide].classList.remove('right');

            let tl = leftslide;
            let tr = rightslide+1;
            if( tr >= allsliderimages.length ){
                tr = 0;
            }

            allsliderimages[rightslide].classList.add('left');
            allsliderimages[tr].classList.add('right');
            currentslide = tl;
            leftslide = rightslide;
            rightslide = tr;

        },800
    );
    slidetimeout = setTimeout(
        function(){
            slideleft();
        },8000
    )
}

function slideright(){
    clearTimeout(slidetimeout);
    allsliderimages[currentslide].classList.add('right');
    allsliderimages[rightslide].classList.add('select');
    allsliderimages[rightslide].classList.remove('right');
    Array.from( allslidercontent ).forEach( (content) => {
        content.classList.remove('select');
    } )
    allslidercontent[rightslide].classList.add('select');
    setTimeout(
        function (){
            allsliderimages[currentslide].classList.remove('select');
            allsliderimages[currentslide].classList.remove('right');
            allsliderimages[currentslide].classList.remove('left');

            allsliderimages[leftslide].classList.remove('left');
            allsliderimages[leftslide].classList.remove('right');
            allsliderimages[leftslide].classList.remove('select');

            allsliderimages[rightslide].classList.remove('right');
            allsliderimages[rightslide].classList.remove('left');
            // debugger;
            let tl = leftslide;
            let tr = rightslide+1;
            let tc = currentslide;
            if( tr >= allsliderimages.length ){
                tr = 0;
            }

            allsliderimages[tr].classList.add('right');
            allsliderimages[currentslide].classList.add('left');
            
            currentslide = rightslide;
            leftslide = tc;
            rightslide = tr;

        },800
    );

    slidetimeout = setTimeout(
        function(){
            slideleft();
        },8000
    )

}

Array.from(allsliderbuttons).forEach( (button,index) => {
    function slide(e){
        button.removeEventListener('click',slide);
        if( button.classList.contains('left') ){
            slideleft();
        }else{
            slideright();
        }
        setTimeout(function(){
            button.addEventListener('click',slide);
        },1000)
    }
    button.addEventListener( 'click', slide );
} );