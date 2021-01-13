var allTestimonialsContainer = document.querySelectorAll('.testimonials__container');
Array.from(allTestimonialsContainer).forEach( (maincontainer,index) => {
    let offsetWidth = maincontainer.getBoundingClientRect().width;
    let container = maincontainer.children[0];
    let containerLeft = 0;
    let containerWidth = container.getBoundingClientRect().width;
    let card = container.children[0];
    let containerCanLeft = containerWidth-offsetWidth;

    let direction = true;

    function scrollRight(){
        let cardWidth = card.getBoundingClientRect().width+22;
        if(direction){
            if( containerLeft + cardWidth < containerCanLeft ){
                containerLeft = containerLeft + cardWidth;
                maincontainer.scrollBy({
                    left: cardWidth,
                    behavior:'smooth'
                })
            }else{
                containerLeft = containerCanLeft;
                maincontainer.scrollBy({
                    left: containerCanLeft - maincontainer.scrollLeft,
                    behavior:'smooth'
                })
                direction = false;
            }
        }else{
            containerLeft = 0;
            direction = true;
            maincontainer.scrollBy({
                left: -containerCanLeft,
                behavior:'smooth'
            })
        }

        
            //console.log(containerLeft);
    }

    var timeFunc = setInterval(
        function(){
            scrollRight();
        },7000
    );

    maincontainer.addEventListener( 'scroll',function(e){
        containerLeft = e.target.scrollLeft;
        //console.log(containerLeft);
    } )

} );

var allTestimonials = document.querySelectorAll('.testimonials__container--testimonial');
Array.from(allTestimonials).forEach( (testimonial,index) => {
    testimonial.addEventListener('click',function(){
        console.log('clicked');
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.popuptestimonial__imagebox--image').src = testimonial.querySelector('.testimonials__container--image').src;
        document.querySelector('.popuptestimonial__contentbox--name').textContent = testimonial.querySelector('.testimonials__container--name').textContent;
        document.querySelector('.popuptestimonial__contentbox--occupation').textContent = testimonial.querySelector('.testimonials__container--occupation').textContent;
        document.querySelector('.popuptestimonial__contentbox--paragraph').textContent = testimonial.querySelector('.testimonials__container--paragraph').textContent;
        document.querySelector('.popuptestimonial').classList.add('select');

    });
} );

document.querySelector('.popuptestimonial__closebutton').addEventListener('click',function(){
    document.querySelector('.popuptestimonial').classList.remove('select');
    document.querySelector('body').style.overflow = 'auto';
})

//testimonials__container--name
//testimonials__container--occupation
//testimonials__container--paragraph